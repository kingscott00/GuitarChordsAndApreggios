/**
 * Guitar Chord Explorer - Scale Detection Engine
 * Analyzes chord progressions and suggests appropriate scales
 */

const ScaleDetection = {
    /**
     * Analyze a chord progression and suggest scales
     * @param {Array} chords - Array of chord objects from progression
     * @param {Object} keyHint - Optional hint about the intended key (e.g., {note: 'E', mode: 'major'})
     * @returns {Object} - Suggested scales and per-chord modes
     */
    analyzeProgression(chords, keyHint = null) {
        if (!chords || chords.length === 0) {
            return {
                mainScale: null,
                alternativeScales: [],
                perChordModes: [],
                key: null
            };
        }

        // Extract root notes and qualities from chords
        const chordData = chords.map(chord => this.parseChord(chord));

        // Try to detect the key
        const detectedKey = this.detectKey(chordData, keyHint);

        // Get main scale suggestion
        const mainScale = this.getMainScale(detectedKey, chordData);

        // Get alternative scales that work
        const alternativeScales = this.getAlternativeScales(detectedKey, chordData);

        // Get per-chord mode suggestions
        const perChordModes = this.getPerChordModes(chordData, detectedKey);

        return {
            mainScale,
            alternativeScales,
            perChordModes,
            key: detectedKey
        };
    },

    /**
     * Parse chord to extract root and quality
     */
    parseChord(chord) {
        const name = chord.name || chord.root;
        const root = chord.root;

        // Determine quality
        let quality = 'major';
        if (name.includes('m7') || name.includes('min7')) {
            quality = 'minor7';
        } else if (name.includes('m') || name.includes('min')) {
            quality = 'minor';
        } else if (name.includes('7') && !name.includes('maj7')) {
            quality = 'dominant7';
        } else if (name.includes('maj7') || name.includes('M7')) {
            quality = 'major7';
        } else if (name.includes('dim')) {
            quality = 'diminished';
        } else if (name.includes('aug')) {
            quality = 'augmented';
        }

        return { root, quality, name };
    },

    /**
     * Detect the key from chord progression
     * @param {Array} chordData - Parsed chord data
     * @param {Object} keyHint - Optional hint about intended key {note: 'E', mode: 'major'}
     */
    detectKey(chordData, keyHint = null) {
        // Try each possible key and see which fits best
        const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        let bestKey = { note: 'C', mode: 'major', score: 0 };

        for (const keyNote of notes) {
            // Try major key
            const majorChords = this.getDiatonicChords(keyNote, 'major');
            let majorScore = this.scoreKeyFit(chordData, majorChords);

            // Apply bonus if this matches the key hint
            if (keyHint && keyHint.note === keyNote && keyHint.mode === 'major') {
                majorScore += 100; // Strong bias toward hinted key
            }

            if (majorScore > bestKey.score) {
                bestKey = { note: keyNote, mode: 'major', score: majorScore };
            }

            // Try minor key
            const minorChords = this.getDiatonicChords(keyNote, 'minor');
            let minorScore = this.scoreKeyFit(chordData, minorChords);

            // Apply bonus if this matches the key hint
            if (keyHint && keyHint.note === keyNote && keyHint.mode === 'minor') {
                minorScore += 100; // Strong bias toward hinted key
            }

            if (minorScore > bestKey.score) {
                bestKey = { note: keyNote, mode: 'minor', score: minorScore };
            }
        }

        return bestKey;
    },

    /**
     * Get diatonic chords for a key
     */
    getDiatonicChords(keyNote, mode) {
        const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        const keyIndex = notes.indexOf(keyNote);

        // Major key: I ii iii IV V vi vii°
        const majorIntervals = [0, 2, 4, 5, 7, 9, 11];
        const majorQualities = ['major', 'minor', 'minor', 'major', 'major', 'minor', 'diminished'];

        // Natural minor key: i ii° III iv v VI VII
        const minorIntervals = [0, 2, 3, 5, 7, 8, 10];
        const minorQualities = ['minor', 'diminished', 'major', 'minor', 'minor', 'major', 'major'];

        const intervals = mode === 'major' ? majorIntervals : minorIntervals;
        const qualities = mode === 'major' ? majorQualities : minorQualities;

        return intervals.map((interval, i) => {
            const noteIndex = (keyIndex + interval) % 12;
            return {
                root: notes[noteIndex],
                quality: qualities[i]
            };
        });
    },

    /**
     * Score how well chords fit a key
     */
    scoreKeyFit(chordData, diatonicChords) {
        let score = 0;

        for (const chord of chordData) {
            const match = diatonicChords.find(dc =>
                dc.root === chord.root && this.qualityMatches(chord.quality, dc.quality)
            );

            if (match) {
                score += 10;
            }
        }

        return score;
    },

    /**
     * Check if chord qualities match (with flexibility)
     */
    qualityMatches(actualQuality, expectedQuality) {
        // Exact match
        if (actualQuality === expectedQuality) return true;

        // Major7 matches major
        if ((actualQuality === 'major7' || actualQuality === 'dominant7') && expectedQuality === 'major') return true;

        // Minor7 matches minor
        if (actualQuality === 'minor7' && expectedQuality === 'minor') return true;

        return false;
    },

    /**
     * Get main scale suggestion
     */
    getMainScale(key, chordData) {
        if (!key || key.score === 0) {
            // No clear key detected, use first chord
            const firstChord = chordData[0];
            return {
                root: firstChord.root,
                type: firstChord.quality === 'minor' || firstChord.quality === 'minor7' ? 'minor-pentatonic' : 'major-pentatonic',
                name: `${firstChord.root} ${firstChord.quality === 'minor' ? 'Minor' : 'Major'} Pentatonic`,
                description: 'Safe choice: Pentatonic scale based on first chord'
            };
        }

        const scaleType = key.mode === 'major' ? 'major' : 'natural-minor';
        const scaleName = key.mode === 'major' ? 'Major' : 'Natural Minor';

        return {
            root: key.note,
            type: scaleType,
            name: `${key.note} ${scaleName}`,
            description: `This scale contains all the chords in your progression. Play these notes over the entire progression.`
        };
    },

    /**
     * Get alternative scales that work
     */
    getAlternativeScales(key, chordData) {
        const alternatives = [];

        if (!key || key.score === 0) return alternatives;

        // Add pentatonic versions
        alternatives.push({
            root: key.note,
            type: key.mode === 'major' ? 'major-pentatonic' : 'minor-pentatonic',
            name: `${key.note} ${key.mode === 'major' ? 'Major' : 'Minor'} Pentatonic`,
            description: 'Simplified 5-note version - great for beginners, sounds good everywhere'
        });

        // Add blues scale
        alternatives.push({
            root: key.note,
            type: 'blues',
            name: `${key.note} Blues`,
            description: 'Adds bluesy flavor with the "blue note" (b5)'
        });

        // Add modes based on chords
        const hasMinorChords = chordData.some(c => c.quality.includes('minor'));
        const hasDominant7 = chordData.some(c => c.quality === 'dominant7');

        if (hasMinorChords && key.mode === 'major') {
            alternatives.push({
                root: key.note,
                type: 'dorian',
                name: `${key.note} Dorian`,
                description: 'Minor scale with a brighter sound - great for jazz and funk'
            });
        }

        if (hasDominant7) {
            alternatives.push({
                root: key.note,
                type: 'mixolydian',
                name: `${key.note} Mixolydian`,
                description: 'Major scale with a b7 - perfect for blues and rock'
            });
        }

        return alternatives;
    },

    /**
     * Get mode for each chord (modal playing)
     */
    getPerChordModes(chordData, key) {
        return chordData.map(chord => {
            const mode = this.getChordMode(chord, key);
            return {
                chordName: chord.name,
                chordRoot: chord.root,
                scale: {
                    root: chord.root,
                    type: mode.type,
                    name: `${chord.root} ${mode.name}`,
                    description: mode.description
                },
                chordTones: this.getChordTones(chord.root, chord.quality)
            };
        });
    },

    /**
     * Get appropriate mode for a chord
     */
    getChordMode(chord, key) {
        const { root, quality } = chord;

        // Default mapping based on quality
        if (quality === 'major' || quality === 'major7') {
            return {
                type: 'ionian',
                name: 'Ionian (Major)',
                description: 'Bright major sound'
            };
        }

        if (quality === 'minor' || quality === 'minor7') {
            // Check if it's II chord (Dorian) or VI chord (Aeolian)
            if (key && key.note) {
                const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
                const keyIndex = notes.indexOf(key.note);
                const chordIndex = notes.indexOf(root);
                const interval = (chordIndex - keyIndex + 12) % 12;

                // II chord (2 semitones) = Dorian
                if (interval === 2) {
                    return {
                        type: 'dorian',
                        name: 'Dorian',
                        description: 'Minor scale with a jazzy feel'
                    };
                }

                // III chord (4 semitones) = Phrygian
                if (interval === 4) {
                    return {
                        type: 'phrygian',
                        name: 'Phrygian',
                        description: 'Dark, Spanish-flavored minor'
                    };
                }

                // VI chord (9 semitones) = Aeolian
                if (interval === 9) {
                    return {
                        type: 'aeolian',
                        name: 'Aeolian (Natural Minor)',
                        description: 'Standard minor sound'
                    };
                }
            }

            return {
                type: 'aeolian',
                name: 'Aeolian (Natural Minor)',
                description: 'Standard minor sound'
            };
        }

        if (quality === 'dominant7') {
            return {
                type: 'mixolydian',
                name: 'Mixolydian',
                description: 'Major scale with b7 - bluesy rock sound'
            };
        }

        if (quality === 'diminished') {
            return {
                type: 'locrian',
                name: 'Locrian',
                description: 'Unstable, tense sound'
            };
        }

        // Default to major
        return {
            type: 'ionian',
            name: 'Ionian (Major)',
            description: 'Bright major sound'
        };
    },

    /**
     * Get chord tones for highlighting
     */
    getChordTones(root, quality) {
        const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        const rootIndex = notes.indexOf(root);

        let intervals = [];

        switch (quality) {
            case 'major':
            case 'major7':
                intervals = [0, 4, 7]; // Root, 3rd, 5th
                if (quality === 'major7') intervals.push(11); // Add M7
                break;

            case 'minor':
            case 'minor7':
                intervals = [0, 3, 7]; // Root, b3, 5th
                if (quality === 'minor7') intervals.push(10); // Add b7
                break;

            case 'dominant7':
                intervals = [0, 4, 7, 10]; // Root, 3rd, 5th, b7
                break;

            case 'diminished':
                intervals = [0, 3, 6]; // Root, b3, b5
                break;

            case 'augmented':
                intervals = [0, 4, 8]; // Root, 3rd, #5
                break;

            default:
                intervals = [0, 4, 7]; // Default major
        }

        return intervals.map(interval => {
            const noteIndex = (rootIndex + interval) % 12;
            return notes[noteIndex];
        });
    }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ScaleDetection;
}
