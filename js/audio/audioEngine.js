/**
 * Guitar Chord Explorer - Audio Engine
 * Main audio controller using Web Audio API
 */

const AudioEngine = {
    // Audio context
    context: null,
    masterGain: null,

    // Settings
    settings: {
        masterVolume: 0.7,
        strumSpeed: 40,          // ms between strings
        strumDirection: 'down',  // 'down' | 'up'
        noteDecay: 2.5,          // seconds
        arpeggioTempo: 120,      // BPM
        tuningOffset: 0          // semitones (-6 to +6)
    },

    // Tuning offset labels for common tunings
    tuningLabels: {
        '-6': '3 steps down',
        '-5': 'A tuning',
        '-4': 'Bb tuning',
        '-3': 'B tuning',
        '-2': 'D tuning',
        '-1': 'Eb tuning',
        '0': '',
        '1': 'Half step up',
        '2': 'Full step up',
        '3': 'F tuning',
        '4': 'F# tuning',
        '5': 'G tuning',
        '6': '3 steps up'
    },

    // Standard tuning frequencies (E2 to E4)
    stringFrequencies: [
        82.41,   // E2 - Low E (string 6/index 0)
        110.00,  // A2 (string 5/index 1)
        146.83,  // D3 (string 4/index 2)
        196.00,  // G3 (string 3/index 3)
        246.94,  // B3 (string 2/index 4)
        329.63   // E4 - High e (string 1/index 5)
    ],

    // State
    isInitialized: false,
    isPlaying: false,

    /**
     * Initialize the audio engine
     */
    init() {
        if (this.isInitialized) return Promise.resolve();

        return new Promise((resolve, reject) => {
            try {
                // Create audio context
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                this.context = new AudioContext();

                // Create master gain node
                this.masterGain = this.context.createGain();
                this.masterGain.gain.value = this.settings.masterVolume;
                this.masterGain.connect(this.context.destination);

                this.isInitialized = true;
                resolve();
            } catch (error) {
                console.error('Failed to initialize audio engine:', error);
                reject(error);
            }
        });
    },

    /**
     * Resume audio context (required after user interaction)
     */
    async resume() {
        if (this.context && this.context.state === 'suspended') {
            await this.context.resume();
        }
    },

    /**
     * Set master volume
     * @param {number} volume - Volume level (0-1)
     */
    setVolume(volume) {
        this.settings.masterVolume = Math.max(0, Math.min(1, volume));
        if (this.masterGain) {
            this.masterGain.gain.setValueAtTime(
                this.settings.masterVolume,
                this.context.currentTime
            );
        }
    },

    /**
     * Get frequency for a specific string and fret
     * Applies tuning offset for alternate tunings
     * @param {number} stringIndex - String index (0-5, 0 = low E)
     * @param {number} fret - Fret number (0 = open)
     * @returns {number} - Frequency in Hz
     */
    getFrequency(stringIndex, fret) {
        const openFreq = this.stringFrequencies[stringIndex];
        // Apply tuning offset - negative offset lowers pitch, positive raises it
        const totalSemitones = fret + this.settings.tuningOffset;
        return openFreq * Math.pow(2, totalSemitones / 12);
    },

    /**
     * Set tuning offset
     * @param {number} semitones - Offset in semitones (-6 to +6)
     */
    setTuningOffset(semitones) {
        // Clamp to valid range
        this.settings.tuningOffset = Math.max(-6, Math.min(6, semitones));
        // Save to localStorage
        localStorage.setItem('guitarChordExplorerTuningOffset', this.settings.tuningOffset.toString());
        return this.settings.tuningOffset;
    },

    /**
     * Get tuning offset
     * @returns {number} - Current tuning offset in semitones
     */
    getTuningOffset() {
        return this.settings.tuningOffset;
    },

    /**
     * Load tuning offset from localStorage
     */
    loadTuningOffset() {
        const saved = localStorage.getItem('guitarChordExplorerTuningOffset');
        if (saved !== null) {
            const offset = parseInt(saved, 10);
            if (!isNaN(offset) && offset >= -6 && offset <= 6) {
                this.settings.tuningOffset = offset;
            }
        }
        return this.settings.tuningOffset;
    },

    /**
     * Get display text for current tuning offset
     * @returns {Object} - { value: string, label: string }
     */
    getTuningDisplayText() {
        const offset = this.settings.tuningOffset;
        let value;

        if (offset === 0) {
            value = 'Standard (0)';
        } else if (offset > 0) {
            value = `+${offset} semitone${Math.abs(offset) !== 1 ? 's' : ''}`;
        } else {
            value = `${offset} semitone${Math.abs(offset) !== 1 ? 's' : ''}`;
        }

        const label = this.tuningLabels[offset.toString()] || '';

        return { value, label };
    },

    /**
     * Play a single note using Karplus-Strong synthesis
     * @param {number} frequency - Frequency in Hz
     * @param {number} startTime - When to start (context time)
     * @param {number} duration - Note duration in seconds
     * @param {number} velocity - Note velocity (0-1)
     */
    playNote(frequency, startTime, duration = 2.5, velocity = 0.8) {
        if (!this.context) return;

        // Karplus-Strong plucked string synthesis
        const sampleRate = this.context.sampleRate;
        const bufferSize = Math.round(sampleRate / frequency);
        const buffer = this.context.createBuffer(1, sampleRate * duration, sampleRate);
        const data = buffer.getChannelData(0);

        // Initialize with noise burst
        const noiseLength = bufferSize * 2;
        for (let i = 0; i < noiseLength; i++) {
            data[i] = (Math.random() * 2 - 1) * velocity;
        }

        // Apply Karplus-Strong algorithm
        const decay = 0.996; // Decay factor
        const blend = 0.5;   // Blend factor for averaging

        for (let i = bufferSize; i < data.length; i++) {
            // Average of two samples with decay
            const avg = blend * data[i - bufferSize] + (1 - blend) * data[i - bufferSize + 1];
            data[i] = avg * decay;
        }

        // Apply envelope
        const attackTime = 0.002;
        const attackSamples = Math.floor(attackTime * sampleRate);
        const releaseSamples = Math.floor(0.1 * sampleRate);
        const releaseStart = data.length - releaseSamples;

        for (let i = 0; i < attackSamples; i++) {
            data[i] *= i / attackSamples;
        }

        for (let i = 0; i < releaseSamples; i++) {
            const idx = releaseStart + i;
            if (idx < data.length) {
                data[idx] *= 1 - (i / releaseSamples);
            }
        }

        // Create and play buffer source
        const source = this.context.createBufferSource();
        source.buffer = buffer;

        // Add slight filtering for more realistic sound
        const filter = this.context.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = Math.min(frequency * 8, 8000);
        filter.Q.value = 1;

        source.connect(filter);
        filter.connect(this.masterGain);

        source.start(startTime);
        source.stop(startTime + duration);

        return source;
    },

    /**
     * Play a chord with strum effect
     * @param {Object} chord - Chord data object
     * @param {string} direction - 'down' or 'up'
     */
    async playChord(chord, direction = 'down') {
        await this.init();
        await this.resume();

        if (this.isPlaying) return;
        this.isPlaying = true;

        const startTime = this.context.currentTime + 0.05;
        const strumDelay = this.settings.strumSpeed / 1000; // Convert to seconds

        // Get string order based on direction
        let stringOrder = [0, 1, 2, 3, 4, 5]; // Low to high for down strum
        if (direction === 'up') {
            stringOrder = [5, 4, 3, 2, 1, 0]; // High to low for up strum
        }

        // Play each string
        stringOrder.forEach((stringIndex, i) => {
            const fret = chord.frets[stringIndex];

            // Skip muted strings (-1)
            if (fret === -1) return;

            const frequency = this.getFrequency(stringIndex, fret);
            const noteTime = startTime + (i * strumDelay);

            // Slight velocity variation for realism
            const velocity = 0.7 + Math.random() * 0.2;

            this.playNote(frequency, noteTime, this.settings.noteDecay, velocity);
        });

        // Reset playing state after chord duration
        setTimeout(() => {
            this.isPlaying = false;
        }, (this.settings.strumSpeed * 6) + 100);
    },

    /**
     * Play an arpeggio pattern
     * @param {Object} arpeggio - Arpeggio data object
     * @param {number} tempo - BPM (optional, uses settings default)
     * @param {Array} patternNotes - Optional custom pattern notes from ArpeggioRenderer
     */
    async playArpeggio(arpeggio, tempo = null, patternNotes = null) {
        await this.init();
        await this.resume();

        if (this.isPlaying) return;
        this.isPlaying = true;

        const bpm = tempo || this.settings.arpeggioTempo;
        const beatDuration = 60 / bpm; // Duration of one beat in seconds
        const noteDuration = beatDuration * 0.8; // Slight gap between notes
        const legatoDuration = beatDuration * 0.6; // Shorter for legato notes

        const startTime = this.context.currentTime + 0.05;

        // Use custom pattern notes if provided, otherwise use standard pattern
        const notes = patternNotes || arpeggio.pattern;

        // Play each note in the pattern
        notes.forEach((note, index) => {
            const frequency = this.getFrequency(note.string, note.fret);
            const noteTime = startTime + (index * beatDuration * 0.5); // 8th notes

            // Legato notes are softer and shorter (hammer-ons/pull-offs)
            const isLegato = note.legato === true;
            const velocity = isLegato ? 0.55 : (note.interval === 'R' ? 0.85 : 0.7);
            const duration = isLegato ? legatoDuration : noteDuration;

            this.playNote(frequency, noteTime, duration, velocity);
        });

        // Calculate total duration
        const totalDuration = (notes.length * beatDuration * 0.5 * 1000) + 500;

        setTimeout(() => {
            this.isPlaying = false;
        }, totalDuration);
    },

    /**
     * Play a single string/fret combination
     * @param {number} stringIndex - String index (0-5)
     * @param {number} fret - Fret number
     */
    async playSingleNote(stringIndex, fret) {
        await this.init();
        await this.resume();

        const frequency = this.getFrequency(stringIndex, fret);
        this.playNote(frequency, this.context.currentTime + 0.01, 1.5, 0.8);
    },

    /**
     * Stop all currently playing sounds
     */
    stop() {
        if (this.context) {
            // Create a new gain node to cut off sound
            this.masterGain.gain.setValueAtTime(0, this.context.currentTime);
            this.masterGain.gain.setValueAtTime(
                this.settings.masterVolume,
                this.context.currentTime + 0.1
            );
        }
        this.isPlaying = false;
    },

    /**
     * Set strum speed
     * @param {number} speed - Milliseconds between strings
     */
    setStrumSpeed(speed) {
        this.settings.strumSpeed = Math.max(10, Math.min(100, speed));
    },

    /**
     * Set arpeggio tempo
     * @param {number} bpm - Beats per minute
     */
    setArpeggioTempo(bpm) {
        this.settings.arpeggioTempo = Math.max(40, Math.min(200, bpm));
    },

    /**
     * Set note decay time
     * @param {number} decay - Decay time in seconds
     */
    setNoteDecay(decay) {
        this.settings.noteDecay = Math.max(0.5, Math.min(5, decay));
    }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AudioEngine;
}
