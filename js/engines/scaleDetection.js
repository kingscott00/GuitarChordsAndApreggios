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

        // Filter out null/undefined chords and extract root notes and qualities
        const validChords = chords.filter(chord => chord !== null && chord !== undefined);
        if (validChords.length === 0) {
            return {
                mainScale: null,
                alternativeScales: [],
                perChordModes: [],
                key: null
            };
        }

        const chordData = validChords.map(chord => this.parseChord(chord));

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

        // Use existing quality if available from chord database
        if (chord.quality) {
            return { root, quality: chord.quality, name };
        }

        // Otherwise determine quality from name (case-insensitive matching)
        const nameLower = name.toLowerCase();
        let quality = 'major';
        if (nameLower.includes('m7') || nameLower.includes('min7') || nameLower.includes('minor7')) {
            quality = 'minor7';
        } else if (nameLower.includes('minor') || nameLower.includes('min') ||
                   (nameLower.includes('m') && !nameLower.includes('maj') && !nameLower.includes('major'))) {
            quality = 'minor';
        } else if (nameLower.includes('7') && !nameLower.includes('maj7') && !nameLower.includes('major7')) {
            quality = 'dominant7';
        } else if (nameLower.includes('maj7') || nameLower.includes('major7') || name.includes('M7')) {
            quality = 'major7';
        } else if (nameLower.includes('dim')) {
            quality = 'diminished';
        } else if (nameLower.includes('aug')) {
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

            // Apply tiebreaker scoring for better relative major/minor detection
            majorScore = this.addTiebreakerScoring(keyNote, 'major', chordData, majorScore);

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

            // Apply tiebreaker scoring for better relative major/minor detection
            minorScore = this.addTiebreakerScoring(keyNote, 'minor', chordData, minorScore);

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
     * Get main scale suggestion - Enhanced with harmonic minor detection
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

        // MAJOR KEY: Use Ionian (standard major scale)
        if (key.mode === 'major') {
            return {
                root: key.note,
                type: 'major',
                name: `${key.note} Major`,
                description: 'Bright, happy, resolved - the foundation of Western music. This scale contains all the chords in your progression.',
                notes: this.getScaleNotes(key.note, 'ionian')
            };
        }

        // MINOR KEY: Check if harmonic minor is needed
        if (key.mode === 'minor') {
            const hasMajorV = this.hasMajorVChord(key.note, chordData);
            const hasRaised7th = this.hasRaisedSeventhDegree(key.note, chordData);
            const needsHarmonicMinor = hasMajorV || hasRaised7th;

            if (needsHarmonicMinor) {
                return {
                    root: key.note,
                    type: 'harmonic-minor',
                    name: `${key.note} Harmonic Minor`,
                    description: 'Minor scale with raised 7th - essential for this progression because it contains chords outside natural minor.',
                    notes: this.getScaleNotes(key.note, 'harmonic_minor'),
                    reasoning: 'This progression contains a major V chord or raised 7th, which requires the harmonic minor scale.'
                };
            }

            // Default to natural minor (Aeolian)
            return {
                root: key.note,
                type: 'natural-minor',
                name: `${key.note} Natural Minor`,
                description: 'Sad, dark, natural minor sound - works over all chords in this progression.',
                notes: this.getScaleNotes(key.note, 'aeolian')
            };
        }

        // Fallback
        return {
            root: key.note,
            type: 'major-pentatonic',
            name: `${key.note} Major Pentatonic`,
            description: 'Safe 5-note scale'
        };
    },

    /**
     * Check if progression has a major V chord (indicates harmonic minor)
     */
    hasMajorVChord(rootNote, chordData) {
        const PERFECT_FIFTH = 7; // semitones

        for (const chord of chordData) {
            // Skip null/invalid chords
            if (!chord || !chord.root) {
                continue;
            }

            const interval = this.getInterval(rootNote, chord.root);

            // Check if it's the V chord (7 semitones = perfect 5th)
            if (interval === PERFECT_FIFTH) {
                // Check if it's major or dominant7 (not minor)
                if (chord.quality === 'major' ||
                    chord.quality === 'major7' ||
                    chord.quality === 'dominant7') {
                    return true;
                }
            }
        }

        return false;
    },

    /**
     * Check if progression has raised 7th degree (indicates harmonic minor)
     */
    hasRaisedSeventhDegree(rootNote, chordData) {
        const MAJOR_SEVENTH = 11; // semitones

        for (const chord of chordData) {
            const interval = this.getInterval(rootNote, chord.root);

            // Check if chord is built on the 7th degree
            if (interval === MAJOR_SEVENTH) {
                // In natural minor, this would be a major chord (bVII)
                // If it's diminished, it's the raised 7th (harmonic minor)
                if (chord.quality === 'diminished' ||
                    chord.quality === 'diminished7') {
                    return true;
                }
            }
        }

        return false;
    },

    /**
     * Calculate interval in semitones between two notes
     */
    getInterval(fromNote, toNote) {
        const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

        // Normalize note names
        const from = fromNote.replace('m', '');
        const to = toNote.replace('m', '');

        const fromIndex = notes.indexOf(from);
        const toIndex = notes.indexOf(to);

        if (fromIndex === -1 || toIndex === -1) return 0;

        let interval = toIndex - fromIndex;
        if (interval < 0) interval += 12;

        return interval;
    },

    /**
     * Get scale notes for a given root and scale type
     */
    getScaleNotes(root, scaleType) {
        const chromatic = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        const rootIndex = chromatic.indexOf(root.replace('m', ''));

        if (rootIndex === -1) return [];

        const intervals = {
            'ionian': [0, 2, 4, 5, 7, 9, 11],
            'aeolian': [0, 2, 3, 5, 7, 8, 10],
            'harmonic_minor': [0, 2, 3, 5, 7, 8, 11],
            'dorian': [0, 2, 3, 5, 7, 9, 10],
            'phrygian': [0, 1, 3, 5, 7, 8, 10],
            'lydian': [0, 2, 4, 6, 7, 9, 11],
            'mixolydian': [0, 2, 4, 5, 7, 9, 10],
            'locrian': [0, 1, 3, 5, 6, 8, 10],
            'major_pentatonic': [0, 2, 4, 7, 9],
            'minor_pentatonic': [0, 3, 5, 7, 10]
        };

        const scaleIntervals = intervals[scaleType] || intervals['ionian'];

        return scaleIntervals.map(interval => {
            const noteIndex = (rootIndex + interval) % 12;
            return chromatic[noteIndex];
        });
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
    },

    /**
     * Validate how well a scale fits the chord progression
     */
    validateScaleFitness(scale, chordData) {
        const scaleNotes = scale.notes || this.getScaleNotes(scale.root, this.convertScaleType(scale.type));
        const problems = [];

        for (const chord of chordData) {
            if (!chord) continue;

            const chordNotes = this.getNotesInChord(chord);
            const outsideNotes = chordNotes.filter(note => {
                return !this.scaleContainsNote(scaleNotes, note);
            });

            if (outsideNotes.length > 0) {
                problems.push({
                    chordName: chord.name || `${chord.root}${this.getQualitySymbol(chord.quality)}`,
                    chordRoot: chord.root,
                    chordQuality: chord.quality,
                    missingNotes: outsideNotes,
                    suggestion: this.getSuggestionForProblem(chord, scale)
                });
            }
        }

        return {
            isValid: problems.length === 0,
            problems: problems,
            confidence: this.calculateConfidence(problems.length, chordData.filter(c => c !== null).length)
        };
    },

    /**
     * Convert display scale type to internal type for getScaleNotes
     */
    convertScaleType(type) {
        const typeMap = {
            'major': 'ionian',
            'natural-minor': 'aeolian',
            'harmonic-minor': 'harmonic_minor',
            'major-pentatonic': 'major_pentatonic',
            'minor-pentatonic': 'minor_pentatonic'
        };
        return typeMap[type] || type;
    },

    /**
     * Check if scale contains a note (handling enharmonics)
     */
    scaleContainsNote(scaleNotes, note) {
        if (!scaleNotes || scaleNotes.length === 0) return true;

        // Direct match
        if (scaleNotes.includes(note)) return true;

        // Check enharmonic equivalents
        const enharmonics = {
            'C#': 'Db', 'Db': 'C#',
            'D#': 'Eb', 'Eb': 'D#',
            'F#': 'Gb', 'Gb': 'F#',
            'G#': 'Ab', 'Ab': 'G#',
            'A#': 'Bb', 'Bb': 'A#'
        };

        const enharmonic = enharmonics[note];
        if (enharmonic && scaleNotes.includes(enharmonic)) return true;

        return false;
    },

    /**
     * Get notes in a chord
     */
    getNotesInChord(chord) {
        const chromatic = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        const root = chord.root ? chord.root.replace('m', '') : '';
        const rootIndex = chromatic.indexOf(root);

        if (rootIndex === -1) return [];

        const qualityIntervals = {
            'major': [0, 4, 7],
            'minor': [0, 3, 7],
            'dominant7': [0, 4, 7, 10],
            'major7': [0, 4, 7, 11],
            'minor7': [0, 3, 7, 10],
            'diminished': [0, 3, 6],
            'diminished7': [0, 3, 6, 9],
            'augmented': [0, 4, 8],
            'sus2': [0, 2, 7],
            'sus4': [0, 5, 7],
            'add9': [0, 4, 7, 14],
            'm7b5': [0, 3, 6, 10],
            'power': [0, 7]
        };

        const intervals = qualityIntervals[chord.quality] || qualityIntervals['major'];

        return intervals.map(interval => {
            const noteIndex = (rootIndex + (interval % 12)) % 12;
            return chromatic[noteIndex];
        });
    },

    /**
     * Get chord quality symbol for display
     */
    getQualitySymbol(quality) {
        const symbols = {
            'major': '',
            'minor': 'm',
            'dominant7': '7',
            'major7': 'maj7',
            'minor7': 'm7',
            'diminished': 'dim',
            'diminished7': 'dim7',
            'augmented': 'aug',
            'sus2': 'sus2',
            'sus4': 'sus4',
            'add9': 'add9',
            'm7b5': 'm7b5',
            'power': '5'
        };

        return symbols[quality] || '';
    },

    /**
     * Suggest solution for scale problems
     */
    getSuggestionForProblem(chord, scale) {
        // If the problem is a major V chord in minor key, suggest harmonic minor
        if ((chord.quality === 'major' || chord.quality === 'dominant7') &&
            (scale.type === 'aeolian' || scale.type === 'natural-minor')) {
            return 'Try Harmonic Minor instead - it has the raised 7th needed for this chord';
        }

        return 'This chord contains notes outside the suggested scale';
    },

    /**
     * Calculate confidence score
     */
    calculateConfidence(problemCount, totalChords) {
        if (totalChords === 0) return 100;
        if (problemCount === 0) return 100;

        const fitPercentage = ((totalChords - problemCount) / totalChords) * 100;
        return Math.round(fitPercentage);
    },

    /**
     * Add tiebreaker scoring for key detection
     */
    addTiebreakerScoring(keyNote, mode, chordData, baseScore) {
        let score = baseScore;

        if (chordData.length === 0) return score;

        const firstChord = chordData[0];
        const lastChord = chordData[chordData.length - 1];

        // TIEBREAKER 1: First chord matches the key
        if (firstChord && firstChord.root === keyNote) {
            const firstQualityMatches =
                (mode === 'major' && (firstChord.quality === 'major' || firstChord.quality === 'major7')) ||
                (mode === 'minor' && (firstChord.quality === 'minor' || firstChord.quality === 'minor7'));

            if (firstQualityMatches) {
                score += 15;
            }
        }

        // TIEBREAKER 2: Last chord matches the key (stronger indicator)
        if (lastChord && lastChord.root === keyNote) {
            const lastQualityMatches =
                (mode === 'major' && (lastChord.quality === 'major' || lastChord.quality === 'major7')) ||
                (mode === 'minor' && (lastChord.quality === 'minor' || lastChord.quality === 'minor7'));

            if (lastQualityMatches) {
                score += 25;
            }
        }

        // TIEBREAKER 3: Tonic appears multiple times
        const tonicAppearances = chordData.filter(c => c && c.root === keyNote).length;
        score += tonicAppearances * 5;

        return score;
    },

    /**
     * Generate user-friendly warnings for scale validation
     */
    generateScaleWarning(validation, mainScale, alternativeScales) {
        if (validation.isValid) {
            return {
                type: 'success',
                message: `This scale fits all chords perfectly (${validation.confidence}% match)`,
                showAlternatives: false
            };
        }

        // Find a better alternative
        let betterAlternative = null;
        for (const altScale of alternativeScales || []) {
            const altValidation = this.validateScaleFitness(altScale, validation.problems.map(p => ({
                root: p.chordRoot,
                quality: p.chordQuality,
                name: p.chordName
            })));

            if (altValidation.isValid && !betterAlternative) {
                betterAlternative = altScale;
                break;
            }
        }

        if (betterAlternative) {
            return {
                type: 'warning',
                message: `Main scale doesn't fit all chords (${validation.confidence}% match)`,
                suggestion: `Try ${betterAlternative.name} instead - it fits all chords!`,
                problems: validation.problems,
                showAlternatives: true,
                recommendedScale: betterAlternative
            };
        }

        return {
            type: 'info',
            message: `This progression uses notes from multiple scales (${validation.confidence}% match)`,
            suggestion: 'Try using the per-chord scale suggestions below for best results',
            problems: validation.problems,
            showAlternatives: true
        };
    }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ScaleDetection;
}
