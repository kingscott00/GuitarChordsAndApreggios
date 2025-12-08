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
        tuningOffset: 0,         // semitones (-6 to +6)
        capoFret: 0,             // capo position (0-7)
        guitarTone: 'acoustic',  // current guitar tone preset
        strumStyle: 'single-down', // current strum style preset
        distortion: 0            // distortion amount (0-100)
    },

    // Guitar tone presets - modify Karplus-Strong synthesis parameters
    tonePresets: {
        acoustic: {
            name: 'Acoustic',
            decay: 0.996,
            attack: 0.002,      // 2ms
            release: 0.1,       // 100ms
            noteDecay: 2.5,     // seconds
            filterMultiplier: 8,
            filterMax: 8000
        },
        bright: {
            name: 'Bright',
            decay: 0.994,
            attack: 0.002,
            release: 0.08,
            noteDecay: 2.3,
            filterMultiplier: 12,
            filterMax: 12000
        },
        warm: {
            name: 'Warm/Mellow',
            decay: 0.997,
            attack: 0.003,
            release: 0.12,
            noteDecay: 2.8,
            filterMultiplier: 5,
            filterMax: 5000
        },
        electric: {
            name: 'Electric Clean',
            decay: 0.993,
            attack: 0.001,
            release: 0.06,
            noteDecay: 1.5,
            filterMultiplier: 10,
            filterMax: 10000
        },
        muted: {
            name: 'Muted/Percussive',
            decay: 0.985,
            attack: 0.001,
            release: 0.05,
            noteDecay: 0.5,
            filterMultiplier: 6,
            filterMax: 6000
        },
        nylon: {
            name: 'Nylon Classical',
            decay: 0.997,
            attack: 0.005,      // 5ms - slower attack
            release: 0.15,
            noteDecay: 3.0,
            filterMultiplier: 4,
            filterMax: 4000
        }
    },

    // Strum style presets - modify strumming behavior
    strumPresets: {
        'single-down': {
            name: 'Single Down',
            strumSpeed: 40,      // ms between strings
            pattern: 'single',   // 'single' or 'down-up'
            randomVariation: 0   // ms of random timing variation
        },
        'slow': {
            name: 'Slow Strum',
            strumSpeed: 95,
            pattern: 'single',
            randomVariation: 0
        },
        'fast': {
            name: 'Fast Strum',
            strumSpeed: 18,
            pattern: 'single',
            randomVariation: 0
        },
        'down-up': {
            name: 'Down-Up',
            strumSpeed: 40,
            pattern: 'down-up',
            pauseBetween: 150,   // ms pause between down and up strums
            randomVariation: 0
        },
        'fingerpick': {
            name: 'Fingerpick',
            strumSpeed: 175,
            pattern: 'single',
            randomVariation: 20  // +/- ms variation for natural feel
        }
    },

    // Cached distortion curve (regenerated when amount changes)
    distortionCurve: null,
    lastDistortionAmount: -1,

    /**
     * Generate a distortion curve for the WaveShaperNode
     * Uses a tanh-based curve for natural-sounding overdrive
     * @param {number} amount - Distortion amount (0-100)
     * @returns {Float32Array} - The distortion curve
     */
    makeDistortionCurve(amount) {
        // Normalize amount to 0-1 range
        const normalizedAmount = amount / 100;

        // If amount is 0, return null (bypass distortion)
        if (normalizedAmount === 0) {
            return null;
        }

        const samples = 44100;
        const curve = new Float32Array(samples);
        const deg = Math.PI / 180;

        for (let i = 0; i < samples; i++) {
            const x = (i * 2) / samples - 1;
            // Modified tanh-based curve for guitar-like distortion
            const k = normalizedAmount * 100;
            curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
        }

        return curve;
    },

    /**
     * Get the distortion curve, using cached version if amount hasn't changed
     * @returns {Float32Array|null} - The distortion curve or null for bypass
     */
    getDistortionCurve() {
        const amount = this.settings.distortion;

        // Return cached curve if amount hasn't changed
        if (amount === this.lastDistortionAmount && this.distortionCurve !== undefined) {
            return this.distortionCurve;
        }

        // Generate and cache new curve
        this.distortionCurve = this.makeDistortionCurve(amount);
        this.lastDistortionAmount = amount;

        return this.distortionCurve;
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
     * Applies tuning offset for alternate tunings and capo position
     * @param {number} stringIndex - String index (0-5, 0 = low E)
     * @param {number} fret - Fret number (0 = open)
     * @returns {number} - Frequency in Hz
     */
    getFrequency(stringIndex, fret) {
        const openFreq = this.stringFrequencies[stringIndex];
        // Apply tuning offset and capo - both raise/lower pitch
        // Capo raises pitch, tuning offset can raise or lower
        const totalSemitones = fret + this.settings.tuningOffset + this.settings.capoFret;
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
     * Set capo position
     * @param {number} fret - Capo fret position (0-7)
     */
    setCapoFret(fret) {
        // Clamp to valid range
        this.settings.capoFret = Math.max(0, Math.min(7, fret));
        return this.settings.capoFret;
    },

    /**
     * Get capo position
     * @returns {number} - Current capo fret position
     */
    getCapoFret() {
        return this.settings.capoFret;
    },

    /**
     * Play a single note using Karplus-Strong synthesis with fractional delay
     * Uses linear interpolation for sub-sample precision pitch accuracy
     * @param {number} frequency - Frequency in Hz
     * @param {number} startTime - When to start (context time)
     * @param {number} duration - Note duration in seconds (optional, uses tone preset if not specified)
     * @param {number} velocity - Note velocity (0-1)
     */
    playNote(frequency, startTime, duration = null, velocity = 0.8) {
        if (!this.context) return;

        // Get current tone preset parameters
        const preset = this.tonePresets[this.settings.guitarTone] || this.tonePresets.acoustic;
        const noteDuration = duration !== null ? duration : preset.noteDecay;

        // Karplus-Strong plucked string synthesis with fractional delay for pitch accuracy
        const sampleRate = this.context.sampleRate;

        // Calculate exact period for target frequency (fractional samples)
        const exactPeriod = sampleRate / frequency;
        // Use floor for the integer delay, we'll interpolate for the fractional part
        const intPeriod = Math.floor(exactPeriod);
        // Fractional part for linear interpolation (0 to 1)
        const frac = exactPeriod - intPeriod;

        const buffer = this.context.createBuffer(1, sampleRate * noteDuration, sampleRate);
        const data = buffer.getChannelData(0);

        // Initialize with noise burst (need intPeriod + 2 samples for interpolation)
        const noiseLength = intPeriod * 2 + 2;
        for (let i = 0; i < noiseLength; i++) {
            data[i] = (Math.random() * 2 - 1) * velocity;
        }

        // Apply Karplus-Strong algorithm with fractional delay interpolation
        const decay = preset.decay;
        const blend = 0.5;   // Blend factor for averaging

        for (let i = intPeriod + 1; i < data.length; i++) {
            // Use linear interpolation to achieve fractional delay
            // This gives us sub-sample precision for accurate pitch
            const idx1 = i - intPeriod;
            const idx2 = i - intPeriod - 1;

            // Interpolate between samples to get fractional delay position
            const sample1 = data[idx1];
            const sample2 = data[idx2];
            const interpolated = sample1 + frac * (sample2 - sample1);

            // Apply the standard Karplus-Strong averaging with the next sample
            const nextSample = data[idx1 - 1];
            const avg = blend * interpolated + (1 - blend) * nextSample;
            data[i] = avg * decay;
        }

        // Apply envelope with tone-specific attack and release
        const attackSamples = Math.floor(preset.attack * sampleRate);
        const releaseSamples = Math.floor(preset.release * sampleRate);
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

        // Add filtering with tone-specific cutoff frequency
        const filter = this.context.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = Math.min(frequency * preset.filterMultiplier, preset.filterMax);
        filter.Q.value = 1;

        // Build audio graph: source → filter → [distortion] → [post-filter] → masterGain
        source.connect(filter);

        // Get distortion curve (null if distortion is 0)
        const distortionCurve = this.getDistortionCurve();

        if (distortionCurve) {
            // Create WaveShaperNode for distortion
            const distortion = this.context.createWaveShaper();
            distortion.curve = distortionCurve;
            distortion.oversample = '4x'; // Reduce aliasing

            // Create post-distortion lowpass filter to smooth harsh frequencies
            const postFilter = this.context.createBiquadFilter();
            postFilter.type = 'lowpass';
            // Cut higher frequencies more aggressively with more distortion
            const distAmount = this.settings.distortion / 100;
            postFilter.frequency.value = 8000 - (distAmount * 4000); // 8000Hz to 4000Hz
            postFilter.Q.value = 0.5;

            // Create gain node to compensate for distortion volume increase
            const distortionGain = this.context.createGain();
            // Reduce gain slightly as distortion increases to prevent clipping
            distortionGain.gain.value = 1 - (distAmount * 0.3);

            // Connect the chain
            filter.connect(distortion);
            distortion.connect(postFilter);
            postFilter.connect(distortionGain);
            distortionGain.connect(this.masterGain);
        } else {
            // No distortion - connect directly to master
            filter.connect(this.masterGain);
        }

        source.start(startTime);
        source.stop(startTime + noteDuration);

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

        // Get current strum preset
        const strumPreset = this.strumPresets[this.settings.strumStyle] || this.strumPresets['single-down'];
        const strumSpeed = strumPreset.strumSpeed;
        const strumDelay = strumSpeed / 1000; // Convert to seconds
        const randomVariation = strumPreset.randomVariation / 1000; // Convert to seconds

        const startTime = this.context.currentTime + 0.05;

        // Helper function to play a single strum
        const playStrum = (baseTime, strumDirection) => {
            // Get string order based on direction
            let stringOrder = [0, 1, 2, 3, 4, 5]; // Low to high for down strum
            if (strumDirection === 'up') {
                stringOrder = [5, 4, 3, 2, 1, 0]; // High to low for up strum
            }

            let noteIndex = 0;
            stringOrder.forEach((stringIndex) => {
                const fret = chord.frets[stringIndex];

                // Skip muted strings (-1)
                if (fret === -1) return;

                const frequency = this.getFrequency(stringIndex, fret);

                // Add random variation if specified
                let variation = 0;
                if (randomVariation > 0) {
                    variation = (Math.random() * 2 - 1) * randomVariation;
                }

                const noteTime = baseTime + (noteIndex * strumDelay) + variation;

                // Slight velocity variation for realism
                const velocity = 0.7 + Math.random() * 0.2;

                this.playNote(frequency, noteTime, null, velocity);
                noteIndex++;
            });

            return noteIndex; // Return number of notes played
        };

        // Play based on pattern
        let totalDuration;
        if (strumPreset.pattern === 'down-up') {
            // Play down strum
            const notesPlayed = playStrum(startTime, 'down');

            // Calculate when up strum should start
            const downStrumDuration = notesPlayed * strumDelay;
            const pauseBetween = (strumPreset.pauseBetween || 150) / 1000;
            const upStrumStart = startTime + downStrumDuration + pauseBetween;

            // Play up strum
            playStrum(upStrumStart, 'up');

            // Total duration includes both strums and pause
            totalDuration = (strumSpeed * 6 * 2) + strumPreset.pauseBetween + 100;
        } else {
            // Single strum (down or up based on direction parameter)
            playStrum(startTime, direction);
            totalDuration = (strumSpeed * 6) + 100;
        }

        // Reset playing state after chord duration
        setTimeout(() => {
            this.isPlaying = false;
        }, totalDuration);
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
    },

    /**
     * Set guitar tone preset
     * @param {string} tone - Tone preset key (acoustic, bright, warm, electric, muted, nylon)
     */
    setGuitarTone(tone) {
        if (this.tonePresets[tone]) {
            this.settings.guitarTone = tone;
            // Update noteDecay to match the preset default
            this.settings.noteDecay = this.tonePresets[tone].noteDecay;
            return tone;
        }
        return this.settings.guitarTone;
    },

    /**
     * Get current guitar tone
     * @returns {string} - Current tone preset key
     */
    getGuitarTone() {
        return this.settings.guitarTone;
    },

    /**
     * Get all available tone presets
     * @returns {Object} - Object with tone preset keys and their names
     */
    getTonePresetList() {
        const list = {};
        for (const key in this.tonePresets) {
            list[key] = this.tonePresets[key].name;
        }
        return list;
    },

    /**
     * Set strum style preset
     * @param {string} style - Strum style preset key
     */
    setStrumStyle(style) {
        if (this.strumPresets[style]) {
            this.settings.strumStyle = style;
            // Update strumSpeed to match the preset
            this.settings.strumSpeed = this.strumPresets[style].strumSpeed;
            return style;
        }
        return this.settings.strumStyle;
    },

    /**
     * Get current strum style
     * @returns {string} - Current strum style preset key
     */
    getStrumStyle() {
        return this.settings.strumStyle;
    },

    /**
     * Get all available strum style presets
     * @returns {Object} - Object with strum style preset keys and their names
     */
    getStrumPresetList() {
        const list = {};
        for (const key in this.strumPresets) {
            list[key] = this.strumPresets[key].name;
        }
        return list;
    },

    /**
     * Set distortion amount
     * @param {number} amount - Distortion amount (0-100)
     */
    setDistortion(amount) {
        this.settings.distortion = Math.max(0, Math.min(100, amount));
        // Invalidate cached curve so it regenerates on next note
        this.lastDistortionAmount = -1;
        return this.settings.distortion;
    },

    /**
     * Get current distortion amount
     * @returns {number} - Current distortion amount (0-100)
     */
    getDistortion() {
        return this.settings.distortion;
    }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AudioEngine;
}
