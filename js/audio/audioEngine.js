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
        arpeggioTempo: 120       // BPM
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
     * @param {number} stringIndex - String index (0-5, 0 = low E)
     * @param {number} fret - Fret number (0 = open)
     * @returns {number} - Frequency in Hz
     */
    getFrequency(stringIndex, fret) {
        const openFreq = this.stringFrequencies[stringIndex];
        return openFreq * Math.pow(2, fret / 12);
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
     */
    async playArpeggio(arpeggio, tempo = null) {
        await this.init();
        await this.resume();

        if (this.isPlaying) return;
        this.isPlaying = true;

        const bpm = tempo || this.settings.arpeggioTempo;
        const beatDuration = 60 / bpm; // Duration of one beat in seconds
        const noteDuration = beatDuration * 0.8; // Slight gap between notes

        const startTime = this.context.currentTime + 0.05;

        // Play each note in the pattern
        arpeggio.pattern.forEach((note, index) => {
            const frequency = this.getFrequency(note.string, note.fret);
            const noteTime = startTime + (index * beatDuration * 0.5); // 8th notes

            // Root notes slightly louder
            const velocity = note.interval === 'R' ? 0.85 : 0.7;

            this.playNote(frequency, noteTime, noteDuration, velocity);
        });

        // Calculate total duration
        const totalDuration = (arpeggio.pattern.length * beatDuration * 0.5 * 1000) + 500;

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
