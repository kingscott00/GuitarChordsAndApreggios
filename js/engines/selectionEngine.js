/**
 * Guitar Chord Explorer - Selection Engine
 * Handles filtering and selecting chords based on mood, style, and theory
 */

const SelectionEngine = {
    /**
     * Get chords filtered by mood
     * @param {string} moodId - The mood ID to filter by
     * @returns {Array} - Filtered chord array
     */
    getChordsByMood(moodId) {
        const mood = getMoodMapping(moodId);
        if (!mood) return [];

        const allChords = getAllChords();

        // Filter chords that match the mood's chord qualities
        // or are explicitly tagged with this mood
        return allChords.filter(chord => {
            // Check if chord is tagged with this mood
            if (chord.categories.moods.includes(moodId)) {
                return true;
            }

            // Check if chord quality matches mood's preferred qualities
            if (mood.chordQualities.includes(chord.quality)) {
                return true;
            }

            return false;
        });
    },

    /**
     * Get chords filtered by style
     * @param {string} styleId - The style ID to filter by
     * @returns {Array} - Filtered chord array
     */
    getChordsByStyle(styleId) {
        const style = getStyleMapping(styleId);
        if (!style) return [];

        const allChords = getAllChords();

        // Filter chords that match the style's chord qualities
        // or are explicitly tagged with this style
        return allChords.filter(chord => {
            // Check if chord is tagged with this style
            if (chord.categories.styles.includes(styleId)) {
                return true;
            }

            // Check if chord quality matches style's preferred qualities
            if (style.chordQualities.includes(chord.quality)) {
                return true;
            }

            return false;
        });
    },

    /**
     * Get chords for a specific key and mode (theory-based selection)
     * @param {string} key - The root note (e.g., 'C', 'G', 'Am')
     * @param {string} modeId - The mode ID (e.g., 'ionian', 'dorian')
     * @returns {Array} - Array of chord objects with diatonic information
     */
    getChordsByTheory(key, modeId) {
        const diatonicChords = getDiatonicChords(key, modeId);
        const allChords = getAllChords();
        const results = [];

        // For each diatonic chord position, find matching chords in our library
        for (const diatonic of diatonicChords) {
            // Find chords that match this root and quality
            const matchingChords = allChords.filter(chord => {
                // Match root note
                if (chord.root !== diatonic.root) return false;

                // Match quality (basic match)
                if (this.qualityMatches(chord.quality, diatonic.quality)) {
                    return true;
                }

                // Also match 7th chord variants
                if (this.qualityMatches(chord.quality, diatonic.seventhQuality)) {
                    return true;
                }

                return false;
            });

            // Add diatonic information to each matching chord
            matchingChords.forEach(chord => {
                results.push({
                    ...chord,
                    diatonicInfo: {
                        romanNumeral: diatonic.romanNumeral,
                        degree: diatonic.degree,
                        isSeventhChord: chord.quality.includes('7')
                    }
                });
            });
        }

        return results;
    },

    /**
     * Check if two chord qualities match (handles variations)
     */
    qualityMatches(chordQuality, targetQuality) {
        // Direct match
        if (chordQuality === targetQuality) return true;

        // Quality mapping for variations
        const qualityGroups = {
            'major': ['major', 'maj'],
            'minor': ['minor', 'min'],
            'major7': ['major7', 'maj7'],
            'minor7': ['minor7', 'min7'],
            'dominant7': ['dominant7', 'dom7', '7'],
            'diminished': ['diminished', 'dim'],
            'augmented': ['augmented', 'aug'],
            'sus2': ['sus2', 'suspended2'],
            'sus4': ['sus4', 'suspended4'],
            'half-diminished': ['half-diminished', 'm7b5', 'min7b5']
        };

        // Find the group for target quality
        for (const [key, variants] of Object.entries(qualityGroups)) {
            if (variants.includes(targetQuality) && variants.includes(chordQuality)) {
                return true;
            }
            if (key === targetQuality && variants.includes(chordQuality)) {
                return true;
            }
        }

        return false;
    },

    /**
     * Apply voicing/difficulty filter
     * @param {Array} chords - Array of chords to filter
     * @param {string} level - 'beginner', 'advanced', or 'all'
     * @returns {Array} - Filtered chords
     */
    filterByDifficulty(chords, level) {
        if (level === 'all') return chords;

        if (level === 'beginner') {
            return chords.filter(chord => chord.difficulty <= 2);
        }

        if (level === 'advanced') {
            return chords.filter(chord => chord.difficulty >= 3);
        }

        return chords;
    },

    /**
     * Filter chords by chord type (analyzing intervals)
     * @param {Array} chords - Array of chords to filter
     * @param {string} type - The chord type filter value
     * @returns {Array} - Filtered chords
     */
    filterByChordType(chords, type) {
        if (type === 'all' || !type) return chords;

        return chords.filter(chord => {
            const intervals = chord.intervals;
            const quality = chord.quality;
            const name = chord.name.toLowerCase();

            switch (type) {
                case 'major-triads':
                    // Major triad: root (1), major third (3), perfect fifth (5)
                    return intervals.length === 3 &&
                           intervals.includes('1') &&
                           intervals.includes('3') &&
                           intervals.includes('5');

                case 'minor-triads':
                    // Minor triad: root (1), minor third (b3), perfect fifth (5)
                    return intervals.length === 3 &&
                           intervals.includes('1') &&
                           intervals.includes('b3') &&
                           intervals.includes('5');

                case 'diminished-triads':
                    // Diminished triad: root (1), minor third (b3), diminished fifth (b5)
                    return intervals.length === 3 &&
                           intervals.includes('1') &&
                           intervals.includes('b3') &&
                           intervals.includes('b5');

                case 'augmented-triads':
                    // Augmented triad: root (1), major third (3), augmented fifth (#5)
                    return intervals.length === 3 &&
                           intervals.includes('1') &&
                           intervals.includes('3') &&
                           intervals.includes('#5');

                case 'seventh-chords':
                    // Any chord with a seventh interval (7, b7, maj7)
                    return intervals.some(i => i === '7' || i === 'b7' || i === 'maj7');

                case 'extended-chords':
                    // Chords with 9th, 11th, or 13th extensions
                    return intervals.some(i => i.includes('9') || i.includes('11') || i.includes('13'));

                case 'suspended':
                    // Suspended chords replace the 3rd with 2nd or 4th
                    return quality.includes('sus') || name.includes('sus');

                case 'add-chords':
                    // Chords with added notes
                    return quality.includes('add') || name.includes('add');

                case 'power-chords':
                    // Power chord: root (1) and fifth (5) only
                    return intervals.length === 2 &&
                           intervals.includes('1') &&
                           intervals.includes('5');

                default:
                    return true;
            }
        });
    },

    /**
     * Count the number of notes actually played in a chord (non-muted strings)
     * @param {Array} frets - Array of fret values for each string
     * @returns {number} - Number of notes played
     */
    countPlayedNotes(frets) {
        // -1 or 'x' = muted (don't count)
        // 0 = open string (count as a note)
        // > 0 = fretted note (count as a note)
        return frets.filter(f => f !== -1 && f !== 'x').length;
    },

    /**
     * Filter chords by voicing pattern
     * @param {Array} chords - Array of chords to filter
     * @param {string} pattern - The voicing pattern filter value
     * @returns {Array} - Filtered chords
     */
    filterByVoicingPattern(chords, pattern) {
        if (pattern === 'all' || !pattern) return chords;

        return chords.filter(chord => {
            const fingers = chord.fingers;
            const frets = chord.frets;
            const barre = chord.barre;

            // Count how many strings use the same finger
            const fingerCounts = {};
            fingers.forEach(f => {
                if (f > 0) {
                    fingerCounts[f] = (fingerCounts[f] || 0) + 1;
                }
            });

            // Check if any finger is used on 4+ strings (full barre)
            const hasFullBarre = Object.values(fingerCounts).some(count => count >= 4);

            // Check if any finger is used on 2-3 strings (partial barre)
            const hasPartialBarre = Object.values(fingerCounts).some(count => count >= 2 && count < 4);

            // Check for open strings
            const hasOpenStrings = fingers.includes(0) && frets.some((f, i) => f === 0 && fingers[i] === 0);

            // Get highest fret position
            const maxFret = Math.max(...frets.filter(f => f > 0));

            // Count notes played (for note count filters)
            const noteCount = this.countPlayedNotes(frets);

            switch (pattern) {
                case 'open-position':
                    return hasOpenStrings;

                case 'all-barre':
                    return hasFullBarre || barre !== null;

                case 'a-shape-barre':
                    // A-shape: barre starting from A string (5th string) or higher
                    // Typically the barre starts from string index 1 (A string) or 2 (D string)
                    return barre && barre.fromString >= 1 && hasFullBarre;

                case 'e-shape-barre':
                    // E-shape: barre starting from low E string (6th string, index 0)
                    return barre && barre.fromString === 0 && hasFullBarre;

                case 'partial-barre':
                    return hasPartialBarre && !hasFullBarre;

                case 'closed-position':
                    return !hasOpenStrings;

                case 'high-position':
                    return maxFret >= 10;

                case '3-note-voicings':
                    // Exactly 3 notes played
                    return noteCount === 3;

                case '4-note-voicings':
                    // Exactly 4 notes played
                    return noteCount === 4;

                case '5-plus-note-voicings':
                    // 5 or more notes played
                    return noteCount >= 5;

                default:
                    return true;
            }
        });
    },

    /**
     * Filter chords by fret range
     * @param {Array} chords - Array of chords to filter
     * @param {string} range - The fret range filter value
     * @returns {Array} - Filtered chords
     */
    filterByFretRange(chords, range) {
        if (range === 'all' || !range) return chords;

        return chords.filter(chord => {
            const frets = chord.frets;
            const maxFret = Math.max(...frets.filter(f => f > 0));

            switch (range) {
                case 'low-position':
                    return maxFret >= 0 && maxFret <= 5;

                case 'mid-position':
                    return maxFret >= 5 && maxFret <= 9;

                case 'high-position':
                    return maxFret >= 10;

                default:
                    return true;
            }
        });
    },

    /**
     * Filter chords by root note
     * @param {Array} chords - Array of chords to filter
     * @param {string} rootNote - The root note to filter by (e.g., 'C', 'D', 'F#')
     * @returns {Array} - Filtered chords with matching root note
     */
    filterByRootNote(chords, rootNote) {
        if (!rootNote) return chords;

        // Normalize root note for comparison (handle enharmonic equivalents)
        const normalizeNote = (note) => {
            const enharmonics = {
                'Db': 'C#',
                'Eb': 'D#',
                'Gb': 'F#',
                'Ab': 'G#',
                'Bb': 'A#'
            };
            return enharmonics[note] || note;
        };

        const normalizedRoot = normalizeNote(rootNote);

        return chords.filter(chord => {
            const chordRoot = normalizeNote(chord.root);
            return chordRoot === normalizedRoot;
        });
    },

    /**
     * Sort chords by various criteria
     * @param {Array} chords - Array of chords to sort
     * @param {string} sortBy - 'name', 'difficulty', 'root'
     * @returns {Array} - Sorted chords
     */
    sortChords(chords, sortBy = 'root') {
        const sortedChords = [...chords];

        switch (sortBy) {
            case 'name':
                return sortedChords.sort((a, b) => a.name.localeCompare(b.name));

            case 'difficulty':
                return sortedChords.sort((a, b) => a.difficulty - b.difficulty);

            case 'root':
                const noteOrder = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
                return sortedChords.sort((a, b) => {
                    const aIndex = noteOrder.indexOf(a.root);
                    const bIndex = noteOrder.indexOf(b.root);
                    if (aIndex !== bIndex) return aIndex - bIndex;
                    return a.name.localeCompare(b.name);
                });

            case 'quality':
                const qualityOrder = ['major', 'minor', 'dominant7', 'major7', 'minor7', 'sus2', 'sus4', 'diminished', 'augmented'];
                return sortedChords.sort((a, b) => {
                    const aIndex = qualityOrder.indexOf(a.quality);
                    const bIndex = qualityOrder.indexOf(b.quality);
                    if (aIndex !== bIndex) return aIndex - bIndex;
                    return a.name.localeCompare(b.name);
                });

            default:
                return sortedChords;
        }
    },

    /**
     * Get suggested progressions for current selection
     * @param {string} mode - 'mood', 'style', or 'theory'
     * @param {string} selectionId - The mood, style, or mode ID
     * @returns {Array} - Array of progression objects
     */
    getSuggestedProgressions(mode, selectionId) {
        switch (mode) {
            case 'mood':
                const mood = getMoodMapping(selectionId);
                return mood ? mood.progressions : [];

            case 'style':
                const style = getStyleMapping(selectionId);
                return style ? style.progressions : [];

            case 'theory':
                const modeData = getModeDefinition(selectionId);
                return modeData ? modeData.commonProgressions : [];

            default:
                return [];
        }
    },

    /**
     * Get description/tips for current selection
     * @param {string} mode - 'mood', 'style', or 'theory'
     * @param {string} selectionId - The mood, style, or mode ID
     * @returns {Object} - Object with description and tips
     */
    getSelectionInfo(mode, selectionId) {
        switch (mode) {
            case 'mood':
                const mood = getMoodMapping(selectionId);
                return mood ? {
                    name: mood.name,
                    description: mood.description,
                    icon: mood.icon
                } : null;

            case 'style':
                const style = getStyleMapping(selectionId);
                return style ? {
                    name: style.name,
                    description: style.description,
                    icon: style.icon,
                    tips: style.playingTips,
                    voicingNotes: style.voicingNotes
                } : null;

            case 'theory':
                const modeData = getModeDefinition(selectionId);
                return modeData ? {
                    name: modeData.name,
                    alternateName: modeData.alternateName,
                    character: modeData.character,
                    degrees: modeData.degrees.join(' ')
                } : null;

            default:
                return null;
        }
    },

    // ============================================
    // NEW FILTER METHODS FOR BASIC/ADVANCED TABS
    // ============================================

    /**
     * Filter chords by basic chord type (simplified categories)
     * @param {Array} chords - Array of chords to filter
     * @param {string} type - The basic chord type filter value
     * @returns {Array} - Filtered chords
     */
    filterByBasicChordType(chords, type) {
        if (type === 'all' || !type) return chords;

        // Define exact quality matches for each filter type
        const qualityGroups = {
            major: ['major', 'major7', 'major9', 'major11', 'major13', 'maj7', 'maj9', 'maj13', '6', 'add9'],
            minor: ['minor', 'minor7', 'minor9', 'minor11', 'minor13', 'm7', 'm9', 'm11', 'm13', 'm7b5', 'half-diminished', 'minmaj7'],
            seventh: ['dominant7', '7', 'major7', 'minor7', 'maj7', 'm7', 'dim7', 'm7b5', '7sus4', '7b9', '7#9', '7b5', '7#5', '9', '11', '13'],
            diminished: ['diminished', 'diminished7', 'dim', 'dim7', 'm7b5', 'half-diminished', 'half-dim']
        };

        return chords.filter(chord => {
            const quality = chord.quality || '';
            const name = chord.name.toLowerCase();
            const intervals = chord.intervals || [];

            switch (type) {
                case 'major':
                    // Major chords - use exact quality matching
                    return qualityGroups.major.includes(quality) ||
                           (quality.startsWith('maj') && !quality.includes('min'));

                case 'minor':
                    // Minor chords - use exact quality matching (NOT substring)
                    // This prevents matching 'diminished' or 'dominant' which contain 'min'
                    return qualityGroups.minor.includes(quality) ||
                           quality.startsWith('minor') ||
                           (quality.startsWith('m') && !quality.startsWith('maj') && !quality.startsWith('mix'));

                case 'seventh':
                    // Any chord with a seventh
                    return qualityGroups.seventh.includes(quality) ||
                           intervals.some(i => i === '7' || i === 'b7' || i === 'maj7') ||
                           name.includes('7');

                case 'extended':
                    // Chords with 9th, 11th, or 13th
                    return intervals.some(i => i.includes('9') || i.includes('11') || i.includes('13')) ||
                           name.includes('9') || name.includes('11') || name.includes('13');

                case 'suspended':
                    // Sus2, sus4
                    return quality.includes('sus') || name.includes('sus');

                case 'power':
                    // Power chords
                    return quality === 'power' || (name.includes('5') && intervals.length === 2);

                case 'diminished':
                    // Diminished and half-diminished - use exact quality matching
                    return qualityGroups.diminished.includes(quality) ||
                           name.includes('dim') || name.includes('°');

                default:
                    return true;
            }
        });
    },

    /**
     * Detect voicing style from chord properties
     * @param {Object} chord - Chord object
     * @returns {string} - Voicing style identifier
     */
    detectVoicingStyle(chord) {
        const description = (chord.voicingDescription || '').toLowerCase();
        const voicingType = (chord.voicingType || '').toLowerCase();
        const frets = chord.frets || [];
        const fingers = chord.fingers || [];
        const barre = chord.barre;

        // Check voicingType first
        if (voicingType === 'shell') return 'shell';
        if (voicingType === 'quartal') return 'quartal';

        // Check description for specific voicing styles
        if (description.includes('shell')) return 'shell';
        if (description.includes('drop 2') || description.includes('drop-2')) return 'drop-2';
        if (description.includes('drop 3') || description.includes('drop-3')) return 'drop-3';
        if (description.includes('quartal')) return 'quartal';
        if (description.includes('rootless')) return 'rootless';
        if (description.includes('compact') || description.includes('partial')) return 'compact';

        // Check for open position (has open strings)
        const hasOpenStrings = frets.some((f, i) => f === 0 && fingers[i] === 0);
        if (hasOpenStrings) return 'open-position';

        // Check for barre chords
        const fingerCounts = {};
        fingers.forEach(f => {
            if (f > 0) fingerCounts[f] = (fingerCounts[f] || 0) + 1;
        });
        const hasFullBarre = Object.values(fingerCounts).some(count => count >= 4);
        if (hasFullBarre || barre !== null) return 'barre';

        return 'other';
    },

    /**
     * Filter chords by voicing style
     * @param {Array} chords - Array of chords to filter
     * @param {string} style - The voicing style filter value
     * @returns {Array} - Filtered chords
     */
    filterByVoicingStyle(chords, style) {
        if (style === 'all' || !style) return chords;

        return chords.filter(chord => {
            const detectedStyle = this.detectVoicingStyle(chord);
            return detectedStyle === style;
        });
    },

    /**
     * Detect jazz level for a chord
     * @param {Object} chord - Chord object
     * @returns {string} - Jazz level: 'basic', 'tier-1', 'tier-2', 'tier-3'
     */
    detectJazzLevel(chord) {
        const description = (chord.voicingDescription || '').toLowerCase();
        const voicingType = (chord.voicingType || '').toLowerCase();
        const name = chord.name.toLowerCase();
        const quality = (chord.quality || '').toLowerCase();

        // Tier 3 (Advanced): Quartal, Rootless, Upper structures, complex alterations
        if (voicingType === 'quartal' || description.includes('quartal')) return 'tier-3';
        if (description.includes('rootless')) return 'tier-3';
        if (description.includes('upper structure')) return 'tier-3';
        if (name.includes('maj7#5') || name.includes('maj9#11')) return 'tier-3';
        if (name.includes('7#9#5') || name.includes('7b9b5')) return 'tier-3';
        if (name.includes('min9b5')) return 'tier-3';

        // Tier 2 (Intermediate): Extended chords, minMaj7, Maj7#11, more altered
        if (name.includes('11') || name.includes('13')) return 'tier-2';
        if (name.includes('minmaj7') || name.includes('mmaj7') || quality.includes('minmaj')) return 'tier-2';
        if (name.includes('maj7#11')) return 'tier-2';
        if (name.includes('7#5') || name.includes('7b5')) return 'tier-2';
        if (name.includes('7b13') || name.includes('7alt')) return 'tier-2';

        // Tier 1 (Essentials): Shell voicings, Drop 2, basic altered (7#9, 7b9)
        if (voicingType === 'shell' || description.includes('shell')) return 'tier-1';
        if (description.includes('drop 2') || description.includes('drop-2')) return 'tier-1';
        if (name.includes('7#9') || name.includes('7b9')) return 'tier-1';

        // Basic: Triads, standard 7ths with open or barre voicings
        return 'basic';
    },

    /**
     * Filter chords by jazz level
     * @param {Array} chords - Array of chords to filter
     * @param {string} level - The jazz level filter value
     * @returns {Array} - Filtered chords
     */
    filterByJazzLevel(chords, level) {
        if (level === 'all' || !level) return chords;

        return chords.filter(chord => {
            const chordLevel = this.detectJazzLevel(chord);
            return chordLevel === level;
        });
    },

    /**
     * Detect sound character for a chord
     * @param {Object} chord - Chord object
     * @returns {string} - Sound character: 'bright', 'warm', 'tense', 'dreamy', 'dark', 'funky'
     */
    detectSoundCharacter(chord) {
        const name = chord.name.toLowerCase();
        const quality = (chord.quality || '').toLowerCase();
        const intervals = chord.intervals || [];

        // Tense/Dramatic: Altered dominants, dim7, 7b9, 7#9, 7alt
        if (name.includes('7b9') || name.includes('7#9') || name.includes('7alt')) return 'tense';
        if (name.includes('7b5') || name.includes('7#5') || name.includes('7b13')) return 'tense';
        if (quality === 'diminished7' || name.includes('dim7')) return 'tense';

        // Dark/Mysterious: m7b5, minMaj7, dim
        if (quality.includes('half-dim') || name.includes('m7b5') || name.includes('min7b5')) return 'dark';
        if (name.includes('minmaj7') || name.includes('mmaj7') || quality.includes('minmaj')) return 'dark';
        if ((quality.includes('dim') || name.includes('dim')) && !name.includes('dim7')) return 'dark';

        // Funky/Bluesy: Dom7, Dom9, Dom13, 7#9
        if (quality === 'dominant7' || quality === 'dominant9' || quality === 'dominant13') return 'funky';
        if (quality === 'dominant' && intervals.some(i => i === 'b7')) return 'funky';
        if (name.match(/^[a-g](#|b)?7$/) || name.match(/^[a-g](#|b)?9$/) || name.match(/^[a-g](#|b)?13$/)) return 'funky';

        // Warm/Mellow: Min7, Min9, Min11, Min6
        if ((quality.includes('minor7') || quality.includes('min7')) && !name.includes('minmaj')) return 'warm';
        if (quality.includes('minor9') || quality.includes('min9')) return 'warm';
        if (quality.includes('minor11') || quality.includes('min11')) return 'warm';
        if (name.includes('m6') || name.includes('min6') || name.includes('minor6')) return 'warm';

        // Dreamy/Floating: Maj7, Maj9, Maj7#11, Maj13, Sus2, Sus4
        if (quality.includes('sus') || name.includes('sus')) return 'dreamy';
        if ((quality.includes('maj7') || quality.includes('major7')) && !name.includes('minmaj')) return 'dreamy';
        if (quality.includes('maj9') || quality.includes('major9')) return 'dreamy';
        if (quality.includes('maj13') || name.includes('maj13')) return 'dreamy';
        if (name.includes('maj7#11')) return 'dreamy';

        // Bright/Happy: Major triads, Maj7, Maj9, 6, 6/9, add9
        if (quality === 'major' && intervals.length === 3) return 'bright';
        if (quality.includes('major7') || quality.includes('maj7')) return 'bright';
        if (quality.includes('major9') || quality.includes('maj9')) return 'bright';
        if (name.includes('6/9') || (name.includes('6') && !name.includes('m6') && !name.includes('min6'))) return 'bright';
        if (name.includes('add9') || name.includes('add2')) return 'bright';

        // Default to bright for simple major chords
        if (quality === 'major') return 'bright';

        return 'bright'; // Default
    },

    /**
     * Filter chords by sound character
     * @param {Array} chords - Array of chords to filter
     * @param {string} character - The sound character filter value
     * @returns {Array} - Filtered chords
     */
    filterBySoundCharacter(chords, character) {
        if (character === 'all' || !character) return chords;

        return chords.filter(chord => {
            const chordCharacter = this.detectSoundCharacter(chord);
            return chordCharacter === character;
        });
    },

    /**
     * Filter chords by note count
     * @param {Array} chords - Array of chords to filter
     * @param {string} count - The note count filter value
     * @returns {Array} - Filtered chords
     */
    filterByNoteCount(chords, count) {
        if (count === 'all' || !count) return chords;

        return chords.filter(chord => {
            const noteCount = this.countPlayedNotes(chord.frets);

            switch (count) {
                case '3-note':
                    return noteCount === 3;
                case '4-note':
                    return noteCount === 4;
                case '5-plus':
                    return noteCount >= 5;
                default:
                    return true;
            }
        });
    },

    /**
     * Filter chords by advanced chord type (more granular than basic)
     * @param {Array} chords - Array of chords to filter
     * @param {string} type - The advanced chord type filter value
     * @returns {Array} - Filtered chords
     */
    filterByAdvancedChordType(chords, type) {
        if (type === 'all' || !type) return chords;

        return chords.filter(chord => {
            const quality = chord.quality || '';
            const name = chord.name.toLowerCase();
            const intervals = chord.intervals || [];

            switch (type) {
                case 'major-triads':
                    return intervals.length === 3 &&
                           intervals.includes('1') &&
                           intervals.includes('3') &&
                           intervals.includes('5');

                case 'minor-triads':
                    return intervals.length === 3 &&
                           intervals.includes('1') &&
                           intervals.includes('b3') &&
                           intervals.includes('5');

                case 'dominant7':
                    return quality === 'dominant7' || quality === 'dominant' ||
                           (name.match(/^[a-g](#|b)?7$/) && !name.includes('maj7') && !name.includes('min7'));

                case 'major7':
                    return quality === 'major7' || quality.includes('maj7') &&
                           !quality.includes('minmaj') && !name.includes('minmaj');

                case 'minor7':
                    return (quality === 'minor7' || quality.includes('min7')) &&
                           !quality.includes('minmaj') && !name.includes('minmaj') &&
                           !name.includes('m7b5') && !name.includes('min7b5');

                case 'minmaj7':
                    return quality.includes('minmaj') || name.includes('minmaj') ||
                           name.includes('mmaj7') || name.includes('m(maj7)');

                case 'altered-dominants':
                    return name.includes('7#9') || name.includes('7b9') ||
                           name.includes('7#5') || name.includes('7b5') ||
                           name.includes('7alt') || name.includes('7b13') ||
                           name.includes('7#11');

                case 'extended-9th':
                    return (name.includes('9') && !name.includes('11') && !name.includes('13')) ||
                           quality.includes('9');

                case 'extended-11th':
                    return name.includes('11') || quality.includes('11');

                case 'extended-13th':
                    return name.includes('13') || quality.includes('13');

                case 'diminished':
                    return quality.includes('dim') || quality.includes('diminished') ||
                           name.includes('dim') || name.includes('°');

                case 'half-diminished':
                    return quality.includes('half-dim') || name.includes('m7b5') ||
                           name.includes('min7b5') || name.includes('ø');

                case 'augmented':
                    return quality.includes('aug') || name.includes('aug') ||
                           name.includes('+') || name.includes('#5');

                case 'suspended':
                    return quality.includes('sus') || name.includes('sus');

                case 'add-chords':
                    return name.includes('add') || (name.includes('6') && !name.includes('m6'));

                case 'power-chords':
                    return quality === 'power' || (intervals.length === 2 &&
                           intervals.includes('1') && intervals.includes('5'));

                default:
                    return true;
            }
        });
    }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SelectionEngine;
}
