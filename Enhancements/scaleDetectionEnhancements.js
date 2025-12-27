/**
 * MUSIC THEORY ENHANCEMENTS FOR SCALE DETECTION
 * 
 * This file contains all the improvements to make scale suggestions
 * more accurate and useful for guitarists who don't know theory.
 * 
 * Key Improvements:
 * 1. Smart main scale selection (detects when harmonic minor is needed)
 * 2. Scale validation (warns when scales don't fit all chords)
 * 3. Better key detection tiebreakers (first/last chord analysis)
 */

const ScaleDetectionEnhancements = {

    /**
     * ENHANCEMENT 1: Detect if a progression needs Harmonic Minor
     * 
     * This checks if a minor key progression has a major V chord,
     * which requires harmonic minor (raised 7th) to sound correct.
     * 
     * Example: Am → F → C → E
     * - Key: A minor
     * - E major is the V chord (perfect 5th above A)
     * - E major has G#, which is NOT in A natural minor
     * - Solution: Use A harmonic minor (A B C D E F G#)
     */
    hasMajorVChord(rootNote, chordData) {
        const PERFECT_FIFTH = 7; // semitones
        
        for (const chord of chordData) {
            // Calculate interval from root to this chord
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
     * Helper: Calculate interval in semitones between two notes
     */
    getInterval(fromNote, toNote) {
        const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        
        // Normalize note names (remove 'm' suffix if present)
        const from = fromNote.replace('m', '');
        const to = toNote.replace('m', '');
        
        const fromIndex = notes.indexOf(from);
        const toIndex = notes.indexOf(to);
        
        if (fromIndex === -1 || toIndex === -1) return 0;
        
        // Calculate interval (wrap around at 12)
        let interval = toIndex - fromIndex;
        if (interval < 0) interval += 12;
        
        return interval;
    },

    /**
     * ENHANCEMENT 2: Check if progression has raised 7th degree
     * 
     * This checks for chords built on the raised 7th scale degree,
     * which also indicates harmonic minor usage.
     * 
     * Example in A minor:
     * - Natural minor 7th degree: G
     * - Raised 7th degree: G#
     * - G#dim chord indicates harmonic minor
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
     * ENHANCEMENT 3: Smart Main Scale Selection
     * 
     * This replaces the simple "if minor, use Aeolian" logic
     * with intelligent scale selection based on chord content.
     * 
     * INSERT THIS INTO: ScaleDetection.getMainScale()
     */
    getMainScale(detectedKey, chordData) {
        if (!detectedKey || !detectedKey.note) {
            // Fallback: Use pentatonic based on first chord
            const firstChord = chordData[0];
            if (!firstChord) {
                return {
                    root: 'C',
                    type: 'major_pentatonic',
                    name: 'C Major Pentatonic',
                    description: 'Safe 5-note scale - works over most progressions'
                };
            }
            
            const isPentatonicMinor = firstChord.quality === 'minor' || 
                                     firstChord.quality === 'minor7';
            
            return {
                root: firstChord.root,
                type: isPentatonicMinor ? 'minor_pentatonic' : 'major_pentatonic',
                name: `${firstChord.root} ${isPentatonicMinor ? 'Minor' : 'Major'} Pentatonic`,
                description: 'Safe 5-note scale - works over most progressions'
            };
        }

        const root = detectedKey.note;
        
        // MAJOR KEY: Use Ionian (standard major scale)
        if (detectedKey.mode === 'major') {
            return {
                root: root,
                type: 'ionian',
                name: `${root} Ionian (Major Scale)`,
                description: 'Bright, happy, resolved - the foundation of Western music',
                notes: this.getScaleNotes(root, 'ionian')
            };
        }
        
        // MINOR KEY: Intelligent selection
        if (detectedKey.mode === 'minor') {
            // Check if progression needs harmonic minor
            const needsHarmonicMinor = this.hasMajorVChord(root, chordData) || 
                                       this.hasRaisedSeventhDegree(root, chordData);
            
            if (needsHarmonicMinor) {
                return {
                    root: root,
                    type: 'harmonic_minor',
                    name: `${root} Harmonic Minor`,
                    description: 'Minor scale with raised 7th - essential for this progression because it contains chords outside natural minor',
                    notes: this.getScaleNotes(root, 'harmonic_minor'),
                    reasoning: 'This progression contains a major V chord or raised 7th, which requires the harmonic minor scale'
                };
            }
            
            // Default to natural minor (Aeolian)
            return {
                root: root,
                type: 'aeolian',
                name: `${root} Aeolian (Natural Minor Scale)`,
                description: 'Sad, dark, natural minor sound - works over all chords in this progression',
                notes: this.getScaleNotes(root, 'aeolian')
            };
        }
        
        // Fallback
        return {
            root: root,
            type: 'major_pentatonic',
            name: `${root} Major Pentatonic`,
            description: 'Safe 5-note scale'
        };
    },

    /**
     * Helper: Get actual note names for a scale
     */
    getScaleNotes(root, scaleType) {
        const chromatic = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        const rootIndex = chromatic.indexOf(root.replace('m', ''));
        
        if (rootIndex === -1) return [];
        
        // Scale intervals in semitones from root
        const intervals = {
            'ionian': [0, 2, 4, 5, 7, 9, 11],           // Major
            'aeolian': [0, 2, 3, 5, 7, 8, 10],          // Natural Minor
            'harmonic_minor': [0, 2, 3, 5, 7, 8, 11],   // Harmonic Minor (raised 7th)
            'dorian': [0, 2, 3, 5, 7, 9, 10],           // Dorian
            'phrygian': [0, 1, 3, 5, 7, 8, 10],         // Phrygian
            'lydian': [0, 2, 4, 6, 7, 9, 11],           // Lydian
            'mixolydian': [0, 2, 4, 5, 7, 9, 10],       // Mixolydian
            'locrian': [0, 1, 3, 5, 6, 8, 10],          // Locrian
            'major_pentatonic': [0, 2, 4, 7, 9],        // Major Pentatonic
            'minor_pentatonic': [0, 3, 5, 7, 10]        // Minor Pentatonic
        };
        
        const scaleIntervals = intervals[scaleType] || intervals['ionian'];
        
        return scaleIntervals.map(interval => {
            const noteIndex = (rootIndex + interval) % 12;
            return chromatic[noteIndex];
        });
    },

    /**
     * ENHANCEMENT 4: Validate Scale Fitness
     * 
     * This checks if the suggested scale actually contains
     * all the notes in all the chords in the progression.
     */
    validateScaleFitness(scale, chordData) {
        const scaleNotes = scale.notes || this.getScaleNotes(scale.root, scale.type);
        const problems = [];
        
        for (const chord of chordData) {
            const chordNotes = this.getNotesInChord(chord);
            const outsideNotes = chordNotes.filter(note => {
                // Normalize enharmonics (G# = Ab, etc.)
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
            confidence: this.calculateConfidence(problems.length, chordData.length)
        };
    },

    /**
     * Helper: Check if scale contains a note (handling enharmonics)
     */
    scaleContainsNote(scaleNotes, note) {
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
     * Helper: Get notes in a chord
     */
    getNotesInChord(chord) {
        const chromatic = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        const root = chord.root.replace('m', '');
        const rootIndex = chromatic.indexOf(root);
        
        if (rootIndex === -1) return [];
        
        // Chord quality intervals (semitones from root)
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
            'add9': [0, 4, 7, 14], // 14 = 2 + 12 (octave above)
            'm7b5': [0, 3, 6, 10],
            'power': [0, 7]
        };
        
        const intervals = qualityIntervals[chord.quality] || qualityIntervals['major'];
        
        return intervals.map(interval => {
            const noteIndex = (rootIndex + interval) % 12;
            return chromatic[noteIndex];
        });
    },

    /**
     * Helper: Get chord quality symbol for display
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
     * Helper: Suggest solution for scale problems
     */
    getSuggestionForProblem(chord, scale) {
        // If the problem is a major V chord in minor key, suggest harmonic minor
        if ((chord.quality === 'major' || chord.quality === 'dominant7') && 
            scale.type === 'aeolian') {
            return 'Try Harmonic Minor instead - it has the raised 7th needed for this chord';
        }
        
        return 'This chord contains notes outside the suggested scale';
    },

    /**
     * Helper: Calculate confidence score
     */
    calculateConfidence(problemCount, totalChords) {
        if (problemCount === 0) return 100;
        
        const fitPercentage = ((totalChords - problemCount) / totalChords) * 100;
        return Math.round(fitPercentage);
    },

    /**
     * ENHANCEMENT 5: Better Key Detection with Tiebreakers
     * 
     * This improves the detectKey function to handle cases where
     * relative major/minor keys score equally (e.g., Am vs C major)
     * 
     * ADD THIS SCORING TO: ScaleDetection.detectKey()
     */
    addTiebreakerScoring(keyNote, mode, chordData, baseScore) {
        let score = baseScore;
        
        if (chordData.length === 0) return score;
        
        const firstChord = chordData[0];
        const lastChord = chordData[chordData.length - 1];
        
        // TIEBREAKER 1: First chord matches the key
        // Music often starts on the tonic
        if (firstChord && firstChord.root === keyNote) {
            const firstQualityMatches = 
                (mode === 'major' && (firstChord.quality === 'major' || firstChord.quality === 'major7')) ||
                (mode === 'minor' && (firstChord.quality === 'minor' || firstChord.quality === 'minor7'));
            
            if (firstQualityMatches) {
                score += 15; // Moderate bonus
            }
        }
        
        // TIEBREAKER 2: Last chord matches the key
        // Music almost always resolves to the tonic at the end
        if (lastChord && lastChord.root === keyNote) {
            const lastQualityMatches = 
                (mode === 'major' && (lastChord.quality === 'major' || lastChord.quality === 'major7')) ||
                (mode === 'minor' && (lastChord.quality === 'minor' || lastChord.quality === 'minor7'));
            
            if (lastQualityMatches) {
                score += 25; // Strong bonus - endings are more important
            }
        }
        
        // TIEBREAKER 3: Tonic appears multiple times
        // The key center typically appears more frequently
        const tonicAppearances = chordData.filter(c => c.root === keyNote).length;
        score += tonicAppearances * 5;
        
        return score;
    },

    /**
     * ENHANCEMENT 6: Generate user-friendly warnings
     * 
     * This creates clear, actionable messages for guitarists
     */
    generateScaleWarning(validation, mainScale, alternativeScales) {
        if (validation.isValid) {
            return {
                type: 'success',
                message: `✓ This scale fits all chords perfectly (${validation.confidence}% match)`,
                showAlternatives: false
            };
        }
        
        // Find a better alternative
        let betterAlternative = null;
        for (const altScale of alternativeScales) {
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
                message: `⚠️ Main scale doesn't fit all chords (${validation.confidence}% match)`,
                suggestion: `Try ${betterAlternative.name} instead - it fits all chords!`,
                problems: validation.problems,
                showAlternatives: true,
                recommendedScale: betterAlternative
            };
        }
        
        return {
            type: 'info',
            message: `ℹ️ This progression uses notes from multiple scales (${validation.confidence}% match)`,
            suggestion: 'Try using the per-chord scale suggestions below for best results',
            problems: validation.problems,
            showAlternatives: true
        };
    }
};

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ScaleDetectionEnhancements;
}
