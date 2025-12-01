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
    }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SelectionEngine;
}
