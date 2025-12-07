/**
 * Guitar Chord Explorer - Voice Leading Utilities
 * Provides functions for smooth chord voicing selection based on position
 */

const VoiceLeading = {
    /**
     * Calculate the average fret position of a chord voicing
     * @param {Object} chord - Chord object with frets array
     * @returns {number} Average fret position (0 for open chords)
     */
    getAveragePosition(chord) {
        if (!chord || !chord.frets) return 0;

        // Get all fretted notes (exclude open strings and muted strings)
        const frettedNotes = chord.frets.filter(f => f > 0);

        if (frettedNotes.length === 0) {
            // Pure open chord - position is 0
            return 0;
        }

        // Calculate average
        const sum = frettedNotes.reduce((acc, f) => acc + f, 0);
        return sum / frettedNotes.length;
    },

    /**
     * Calculate the minimum fret position of a chord (lowest fretted note)
     * @param {Object} chord - Chord object with frets array
     * @returns {number} Minimum fret position
     */
    getMinPosition(chord) {
        if (!chord || !chord.frets) return 0;
        const frettedNotes = chord.frets.filter(f => f > 0);
        if (frettedNotes.length === 0) return 0;
        return Math.min(...frettedNotes);
    },

    /**
     * Calculate the maximum fret position of a chord (highest fretted note)
     * @param {Object} chord - Chord object with frets array
     * @returns {number} Maximum fret position
     */
    getMaxPosition(chord) {
        if (!chord || !chord.frets) return 0;
        const frettedNotes = chord.frets.filter(f => f > 0);
        if (frettedNotes.length === 0) return 0;
        return Math.max(...frettedNotes);
    },

    /**
     * Calculate the "center" of a chord (midpoint between min and max fret)
     * @param {Object} chord - Chord object with frets array
     * @returns {number} Center position
     */
    getCenterPosition(chord) {
        const min = this.getMinPosition(chord);
        const max = this.getMaxPosition(chord);
        return (min + max) / 2;
    },

    /**
     * Calculate the voice leading distance between two chords
     * Lower score = smoother transition
     * @param {Object} fromChord - Previous chord
     * @param {Object} toChord - Next chord candidate
     * @returns {number} Voice leading distance score
     */
    calculateDistance(fromChord, toChord) {
        if (!fromChord || !toChord) return 0;

        const fromCenter = this.getCenterPosition(fromChord);
        const toCenter = this.getCenterPosition(toChord);

        // Base distance is the absolute difference in center positions
        let distance = Math.abs(fromCenter - toCenter);

        // Bonus: if chords share similar position range, reduce distance
        const fromMin = this.getMinPosition(fromChord);
        const fromMax = this.getMaxPosition(fromChord);
        const toMin = this.getMinPosition(toChord);
        const toMax = this.getMaxPosition(toChord);

        // Check for overlap in position ranges
        const overlap = Math.max(0, Math.min(fromMax, toMax) - Math.max(fromMin, toMin));
        if (overlap > 0) {
            distance -= overlap * 0.5; // Reward overlapping ranges
        }

        // Penalty for very large jumps (more than 5 frets)
        if (distance > 5) {
            distance += (distance - 5) * 0.5;
        }

        return Math.max(0, distance);
    },

    /**
     * Score chord candidates by voice leading from a previous chord
     * @param {Array} candidates - Array of chord objects to score
     * @param {Object} previousChord - The chord to transition from
     * @param {number} maxDistance - Maximum acceptable distance (default 4)
     * @returns {Array} Candidates sorted by voice leading score (best first)
     */
    scoreByVoiceLeading(candidates, previousChord, maxDistance = 4) {
        if (!previousChord || candidates.length === 0) {
            return candidates;
        }

        // Score each candidate
        const scored = candidates.map(chord => ({
            chord,
            distance: this.calculateDistance(previousChord, chord)
        }));

        // Sort by distance (lowest = best voice leading)
        scored.sort((a, b) => a.distance - b.distance);

        return scored.map(s => s.chord);
    },

    /**
     * Select the best voicing for voice leading from multiple candidates
     * @param {Array} candidates - Array of chord objects
     * @param {Object} previousChord - The chord to transition from
     * @param {Object} options - Selection options
     * @returns {Object} Selected chord
     */
    selectBestVoicing(candidates, previousChord, options = {}) {
        const {
            strictness = 'medium', // 'strict', 'medium', 'loose'
            allowRandom = true,    // Allow some randomness in selection
            maxDistance = 5        // Maximum acceptable voice leading distance
        } = options;

        if (candidates.length === 0) return null;
        if (candidates.length === 1) return candidates[0];

        // If no previous chord, prefer open/low position chords
        if (!previousChord) {
            const sorted = [...candidates].sort((a, b) => {
                const posA = this.getMinPosition(a);
                const posB = this.getMinPosition(b);
                return posA - posB;
            });
            // Return from top 30% for some variety
            const topCount = Math.max(1, Math.ceil(sorted.length * 0.3));
            return sorted[Math.floor(Math.random() * topCount)];
        }

        // Score by voice leading
        const scored = this.scoreByVoiceLeading(candidates, previousChord, maxDistance);

        // Apply strictness
        let selectionPool;
        switch (strictness) {
            case 'strict':
                // Only consider top 20%
                selectionPool = scored.slice(0, Math.max(1, Math.ceil(scored.length * 0.2)));
                break;
            case 'medium':
                // Consider top 40%
                selectionPool = scored.slice(0, Math.max(1, Math.ceil(scored.length * 0.4)));
                break;
            case 'loose':
            default:
                // Consider top 60%
                selectionPool = scored.slice(0, Math.max(1, Math.ceil(scored.length * 0.6)));
                break;
        }

        // Random selection from pool for variety
        if (allowRandom && selectionPool.length > 1) {
            return selectionPool[Math.floor(Math.random() * selectionPool.length)];
        }

        return selectionPool[0];
    },

    /**
     * Check if a chord is an "open" chord (uses open strings, low position)
     * @param {Object} chord - Chord object
     * @returns {boolean} True if open chord
     */
    isOpenChord(chord) {
        if (!chord || !chord.frets) return false;

        // Check for open strings (0) and low position
        const hasOpenStrings = chord.frets.some(f => f === 0);
        const maxFret = this.getMaxPosition(chord);

        return hasOpenStrings && maxFret <= 4;
    },

    /**
     * Get position category for a chord
     * @param {Object} chord - Chord object
     * @returns {string} Position category: 'open', 'low', 'mid', 'high'
     */
    getPositionCategory(chord) {
        if (this.isOpenChord(chord)) return 'open';

        const center = this.getCenterPosition(chord);
        if (center <= 4) return 'low';
        if (center <= 9) return 'mid';
        return 'high';
    },

    /**
     * Filter chords to prefer similar position category
     * @param {Array} chords - Array of chord objects
     * @param {Object} targetChord - Chord to match position with
     * @param {boolean} strict - If true, only return exact category matches
     * @returns {Array} Filtered chords
     */
    filterByPositionCategory(chords, targetChord, strict = false) {
        if (!targetChord || chords.length === 0) return chords;

        const targetCategory = this.getPositionCategory(targetChord);
        const categoryOrder = ['open', 'low', 'mid', 'high'];
        const targetIndex = categoryOrder.indexOf(targetCategory);

        // Group chords by category
        const byCategory = {
            'open': [],
            'low': [],
            'mid': [],
            'high': []
        };

        chords.forEach(chord => {
            const cat = this.getPositionCategory(chord);
            byCategory[cat].push(chord);
        });

        if (strict) {
            return byCategory[targetCategory].length > 0
                ? byCategory[targetCategory]
                : chords;
        }

        // Return same category first, then adjacent categories
        let result = [...byCategory[targetCategory]];

        // Add adjacent categories
        if (targetIndex > 0) {
            result = result.concat(byCategory[categoryOrder[targetIndex - 1]]);
        }
        if (targetIndex < categoryOrder.length - 1) {
            result = result.concat(byCategory[categoryOrder[targetIndex + 1]]);
        }

        return result.length > 0 ? result : chords;
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VoiceLeading;
}
