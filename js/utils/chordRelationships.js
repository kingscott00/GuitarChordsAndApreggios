/**
 * Chord Relationships Utility
 * Calculates related chords based on music theory principles
 */

const ChordRelationships = {
    // Note order for calculations
    notes: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],

    // Enharmonic equivalents
    enharmonics: {
        'Db': 'C#', 'Eb': 'D#', 'Gb': 'F#', 'Ab': 'G#', 'Bb': 'A#',
        'C#': 'Db', 'D#': 'Eb', 'F#': 'Gb', 'G#': 'Ab', 'A#': 'Bb'
    },

    // Common chord progressions (intervals in semitones from root)
    progressions: {
        // I-IV-V (e.g., C -> F, G)
        'I-IV-V': { major: [5, 7], minor: [5, 7] },
        // ii-V-I targets (from ii perspective)
        'ii-V-I': { minor: [7] }, // ii resolves through V (7 semitones up)
        // V-I resolution (V resolves to I, 5 semitones up)
        'V-I': { dominant7: [5], major: [5] },
        // Relative major/minor (3 semitones difference)
        'relative': { major: [-3], minor: [3] }
    },

    // Circle of fifths (7 semitones apart)
    circleOfFifthsDistance: 7,

    /**
     * Normalize note name to sharp notation
     */
    normalizeNote(note) {
        if (!note) return null;
        const clean = note.replace(/[0-9]/g, '').trim();
        return this.enharmonics[clean] || clean;
    },

    /**
     * Get the semitone distance between two notes
     */
    getSemitoneDistance(note1, note2) {
        const n1 = this.normalizeNote(note1);
        const n2 = this.normalizeNote(note2);

        const idx1 = this.notes.indexOf(n1);
        const idx2 = this.notes.indexOf(n2);

        if (idx1 === -1 || idx2 === -1) return null;

        // Return smallest distance (either direction)
        const dist = (idx2 - idx1 + 12) % 12;
        return dist;
    },

    /**
     * Count shared notes between two chords
     */
    countSharedNotes(chord1, chord2) {
        if (!chord1.notes || !chord2.notes) return 0;

        const notes1 = chord1.notes.map(n => this.normalizeNote(n));
        const notes2 = chord2.notes.map(n => this.normalizeNote(n));

        let shared = 0;
        notes1.forEach(n1 => {
            if (notes2.some(n2 => n2 === n1)) {
                shared++;
            }
        });

        return shared;
    },

    /**
     * Check if two chords have the same root
     */
    hasSameRoot(chord1, chord2) {
        return this.normalizeNote(chord1.root) === this.normalizeNote(chord2.root);
    },

    /**
     * Get relationship type between two chords
     */
    getRelationshipType(sourceChord, targetChord) {
        const relationships = [];
        const distance = this.getSemitoneDistance(sourceChord.root, targetChord.root);

        // Same root, different quality
        if (this.hasSameRoot(sourceChord, targetChord)) {
            if (sourceChord.quality !== targetChord.quality) {
                relationships.push({
                    type: 'same-root',
                    label: this.getQualityChangeLabel(sourceChord.quality, targetChord.quality)
                });
            }
        }

        // Circle of fifths (P5 = 7 semitones, P4 = 5 semitones)
        if (distance === 7) {
            relationships.push({ type: 'circle-of-fifths', label: 'V chord' });
        } else if (distance === 5) {
            relationships.push({ type: 'circle-of-fifths', label: 'IV chord' });
        }

        // Relative major/minor
        if ((sourceChord.quality === 'major' && targetChord.quality === 'minor' && distance === 9) ||
            (sourceChord.quality === 'minor' && targetChord.quality === 'major' && distance === 3)) {
            relationships.push({ type: 'relative', label: 'relative' });
        }

        // ii-V-I relationships
        if (sourceChord.quality === 'minor' &&
            (targetChord.quality === 'dominant7' || targetChord.quality === 'major') &&
            distance === 7) {
            relationships.push({ type: 'progression', label: 'V of ii-V' });
        }

        // Dominant resolves to tonic (V -> I)
        if (sourceChord.quality === 'dominant7' && distance === 5) {
            relationships.push({ type: 'resolution', label: 'resolves to' });
        }

        // Diatonic relationships (common in same key)
        // Major keys: I, ii, iii, IV, V, vi, vii
        const diatonicIntervals = {
            major: [2, 4, 5, 7, 9, 11], // ii, iii, IV, V, vi, viidim
            minor: [2, 3, 5, 7, 8, 10]  // iidim, III, iv, v/V, VI, VII
        };

        if (diatonicIntervals[sourceChord.quality] &&
            diatonicIntervals[sourceChord.quality].includes(distance)) {
            // Check if target chord quality fits diatonic expectation
            const expectedQuality = this.getDiatonicQuality(sourceChord.quality, distance);
            if (expectedQuality && expectedQuality === targetChord.quality) {
                relationships.push({ type: 'diatonic', label: 'same key' });
            }
        }

        // Shared notes (if 2+ notes shared)
        const sharedCount = this.countSharedNotes(sourceChord, targetChord);
        if (sharedCount >= 2 && relationships.length === 0) {
            relationships.push({ type: 'shared-notes', label: `${sharedCount} shared notes` });
        }

        return relationships;
    },

    /**
     * Get expected quality for diatonic chord at given interval
     */
    getDiatonicQuality(sourceQuality, distance) {
        const majorKeyQualities = {
            2: 'minor',    // ii
            4: 'minor',    // iii
            5: 'major',    // IV
            7: 'major',    // V
            9: 'minor',    // vi
            11: 'diminished' // viidim
        };

        const minorKeyQualities = {
            2: 'diminished', // iidim
            3: 'major',      // III
            5: 'minor',      // iv
            7: 'minor',      // v (or major V)
            8: 'major',      // VI
            10: 'major'      // VII
        };

        if (sourceQuality === 'major') return majorKeyQualities[distance];
        if (sourceQuality === 'minor') return minorKeyQualities[distance];
        return null;
    },

    /**
     * Get label for quality change
     */
    getQualityChangeLabel(fromQuality, toQuality) {
        if (toQuality === 'minor') return 'minor variant';
        if (toQuality === 'major') return 'major variant';
        if (toQuality === 'dominant7') return 'dominant 7th';
        if (toQuality === 'major7') return 'major 7th';
        if (toQuality === 'minor7') return 'minor 7th';
        if (toQuality === 'diminished') return 'diminished';
        if (toQuality === 'augmented') return 'augmented';
        if (toQuality === 'sus2' || toQuality === 'sus4') return 'suspended';
        return 'variant';
    },

    /**
     * Calculate related chords for a given chord
     * @param {Object} chord - The source chord
     * @param {Array} allChords - All available chords to search
     * @param {number} maxResults - Maximum number of related chords to return (default 6)
     * @returns {Array} Array of related chord objects with relationship info
     */
    getRelatedChords(chord, allChords, maxResults = 6) {
        if (!chord || !allChords) return [];

        const candidates = [];
        const seenChordNames = new Set();

        // Get unique chords (one per chord name/symbol to avoid voicing duplicates)
        const uniqueChords = this.getUniqueChordsByName(allChords);

        uniqueChords.forEach(candidate => {
            // Skip the source chord
            if (candidate.id === chord.id || candidate.name === chord.name) return;

            // Skip if we already have this chord name
            if (seenChordNames.has(candidate.name)) return;

            const relationships = this.getRelationshipType(chord, candidate);

            if (relationships.length > 0) {
                const score = this.calculateRelationshipScore(chord, candidate, relationships);
                candidates.push({
                    chord: candidate,
                    relationships: relationships,
                    score: score,
                    primaryLabel: relationships[0].label
                });
                seenChordNames.add(candidate.name);
            }
        });

        // Sort by score (higher is better)
        candidates.sort((a, b) => b.score - a.score);

        // If we don't have enough, add same-root variations
        if (candidates.length < maxResults) {
            this.addRootVariations(chord, uniqueChords, candidates, seenChordNames);
        }

        // Return top results
        return candidates.slice(0, maxResults);
    },

    /**
     * Get unique chords (one per chord name)
     */
    getUniqueChordsByName(chords) {
        const seen = new Map();
        chords.forEach(c => {
            if (!seen.has(c.name)) {
                seen.set(c.name, c);
            }
        });
        return Array.from(seen.values());
    },

    /**
     * Add same-root variations if not enough related chords
     */
    addRootVariations(sourceChord, allChords, candidates, seenNames) {
        const sameRootChords = allChords.filter(c =>
            this.hasSameRoot(sourceChord, c) &&
            c.name !== sourceChord.name &&
            !seenNames.has(c.name)
        );

        sameRootChords.forEach(c => {
            if (!seenNames.has(c.name)) {
                candidates.push({
                    chord: c,
                    relationships: [{ type: 'same-root', label: 'same root' }],
                    score: 50,
                    primaryLabel: 'same root'
                });
                seenNames.add(c.name);
            }
        });
    },

    /**
     * Calculate a score for relationship strength
     */
    calculateRelationshipScore(source, target, relationships) {
        let score = 0;

        relationships.forEach(rel => {
            switch (rel.type) {
                case 'circle-of-fifths':
                    score += 100; // Very strong relationship
                    break;
                case 'relative':
                    score += 95; // Very strong
                    break;
                case 'resolution':
                    score += 90; // Strong (V->I)
                    break;
                case 'progression':
                    score += 85; // Strong (ii-V)
                    break;
                case 'same-root':
                    score += 75; // Good
                    break;
                case 'diatonic':
                    score += 70; // Good
                    break;
                case 'shared-notes':
                    score += 40 + (this.countSharedNotes(source, target) * 10);
                    break;
            }
        });

        // Bonus for common chord types (major/minor triads are more useful)
        if (target.quality === 'major' || target.quality === 'minor') {
            score += 10;
        }

        // Bonus for beginner-friendly chords (lower difficulty)
        if (target.difficulty <= 2) {
            score += 5;
        }

        return score;
    },

    /**
     * Get a display-friendly relationship description
     */
    getRelationshipDescription(relationshipType) {
        const descriptions = {
            'circle-of-fifths': 'Related by the circle of fifths - these chords sound great together',
            'relative': 'Relative major/minor - share the same key signature',
            'resolution': 'This chord naturally resolves to the related chord',
            'progression': 'Common in chord progressions together',
            'same-root': 'Same root note with different chord quality',
            'diatonic': 'Both chords belong to the same key',
            'shared-notes': 'These chords share common notes'
        };
        return descriptions[relationshipType] || 'Musically related';
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ChordRelationships;
}
