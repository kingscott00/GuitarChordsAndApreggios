/**
 * Guitar Chord Explorer - Arpeggio Data Library
 * Contains arpeggio patterns linked to chord definitions
 */

const ArpeggioLibrary = {
    // C Major Arpeggio
    c_major_arp: {
        id: "c_major_arp",
        name: "C Major Arpeggio",
        chordId: "c_major_open",
        root: "C",
        quality: "major",
        notes: ["C", "E", "G"],

        // Pattern as array of {string, fret, finger, interval}
        // Strings: 0=low E, 5=high e
        pattern: [
            { string: 1, fret: 3, finger: 2, interval: "R" },   // C
            { string: 2, fret: 2, finger: 1, interval: "3" },   // E
            { string: 2, fret: 5, finger: 4, interval: "5" },   // G
            { string: 3, fret: 5, finger: 4, interval: "R" },   // C
            { string: 4, fret: 5, finger: 4, interval: "3" },   // E
            { string: 5, fret: 3, finger: 1, interval: "5" },   // G
            { string: 5, fret: 8, finger: 4, interval: "R" }    // C
        ],

        // Starting fret for the pattern
        startFret: 2,
        endFret: 8,

        position: "Open/2nd Position",
        difficulty: 2,

        // Suggested fingering notes
        fingeringTips: "Start with index finger on the 2nd fret, stretch to 5th fret with pinky"
    },

    // D Major Arpeggio
    d_major_arp: {
        id: "d_major_arp",
        name: "D Major Arpeggio",
        chordId: "d_major_open",
        root: "D",
        quality: "major",
        notes: ["D", "F#", "A"],

        pattern: [
            { string: 3, fret: 0, finger: 0, interval: "R" },   // D (open)
            { string: 3, fret: 4, finger: 4, interval: "3" },   // F#
            { string: 4, fret: 2, finger: 1, interval: "5" },   // A
            { string: 4, fret: 7, finger: 4, interval: "R" },   // D
            { string: 5, fret: 4, finger: 1, interval: "3" },   // F#
            { string: 5, fret: 7, finger: 4, interval: "5" }    // A
        ],

        startFret: 0,
        endFret: 7,
        position: "Open Position",
        difficulty: 2,
        fingeringTips: "Use open D string as your starting point"
    },

    // E Major Arpeggio
    e_major_arp: {
        id: "e_major_arp",
        name: "E Major Arpeggio",
        chordId: "e_major_open",
        root: "E",
        quality: "major",
        notes: ["E", "G#", "B"],

        pattern: [
            { string: 0, fret: 0, finger: 0, interval: "R" },   // E (open)
            { string: 0, fret: 4, finger: 4, interval: "3" },   // G#
            { string: 1, fret: 2, finger: 1, interval: "5" },   // B
            { string: 2, fret: 2, finger: 1, interval: "R" },   // E
            { string: 2, fret: 6, finger: 4, interval: "3" },   // G#
            { string: 3, fret: 4, finger: 2, interval: "5" },   // B
            { string: 4, fret: 5, finger: 3, interval: "R" }    // E
        ],

        startFret: 0,
        endFret: 6,
        position: "Open Position",
        difficulty: 1,
        fingeringTips: "Great beginner arpeggio - starts on open low E"
    },

    // G Major Arpeggio
    g_major_arp: {
        id: "g_major_arp",
        name: "G Major Arpeggio",
        chordId: "g_major_open",
        root: "G",
        quality: "major",
        notes: ["G", "B", "D"],

        pattern: [
            { string: 0, fret: 3, finger: 2, interval: "R" },   // G
            { string: 1, fret: 2, finger: 1, interval: "5" },   // B (actually B)
            { string: 1, fret: 5, finger: 4, interval: "5" },   // D
            { string: 2, fret: 5, finger: 4, interval: "R" },   // G
            { string: 3, fret: 4, finger: 3, interval: "3" },   // B
            { string: 3, fret: 7, finger: 4, interval: "5" },   // D
            { string: 4, fret: 5, finger: 1, interval: "R" }    // G
        ],

        startFret: 2,
        endFret: 7,
        position: "2nd Position",
        difficulty: 2,
        fingeringTips: "Position hand at 2nd fret, use pinky for stretches"
    },

    // A Major Arpeggio
    a_major_arp: {
        id: "a_major_arp",
        name: "A Major Arpeggio",
        chordId: "a_major_open",
        root: "A",
        quality: "major",
        notes: ["A", "C#", "E"],

        pattern: [
            { string: 1, fret: 0, finger: 0, interval: "R" },   // A (open)
            { string: 1, fret: 4, finger: 4, interval: "3" },   // C#
            { string: 2, fret: 2, finger: 1, interval: "5" },   // E
            { string: 2, fret: 7, finger: 4, interval: "R" },   // A
            { string: 3, fret: 6, finger: 3, interval: "3" },   // C#
            { string: 4, fret: 5, finger: 2, interval: "5" },   // E
            { string: 4, fret: 10, finger: 4, interval: "R" }   // A
        ],

        startFret: 0,
        endFret: 10,
        position: "Open Position",
        difficulty: 2,
        fingeringTips: "Start on open A string, extends up the neck"
    },

    // A Minor Arpeggio
    a_minor_arp: {
        id: "a_minor_arp",
        name: "A Minor Arpeggio",
        chordId: "a_minor_open",
        root: "A",
        quality: "minor",
        notes: ["A", "C", "E"],

        pattern: [
            { string: 1, fret: 0, finger: 0, interval: "R" },   // A (open)
            { string: 1, fret: 3, finger: 3, interval: "b3" },  // C
            { string: 2, fret: 2, finger: 1, interval: "5" },   // E
            { string: 2, fret: 7, finger: 4, interval: "R" },   // A
            { string: 3, fret: 5, finger: 2, interval: "b3" },  // C
            { string: 4, fret: 5, finger: 2, interval: "5" },   // E
            { string: 4, fret: 10, finger: 4, interval: "R" }   // A
        ],

        startFret: 0,
        endFret: 10,
        position: "Open Position",
        difficulty: 2,
        fingeringTips: "Similar to A major but with flat 3rd (C instead of C#)"
    },

    // E Minor Arpeggio
    e_minor_arp: {
        id: "e_minor_arp",
        name: "E Minor Arpeggio",
        chordId: "e_minor_open",
        root: "E",
        quality: "minor",
        notes: ["E", "G", "B"],

        pattern: [
            { string: 0, fret: 0, finger: 0, interval: "R" },   // E (open)
            { string: 0, fret: 3, finger: 3, interval: "b3" },  // G
            { string: 1, fret: 2, finger: 1, interval: "5" },   // B
            { string: 2, fret: 2, finger: 1, interval: "R" },   // E
            { string: 2, fret: 5, finger: 4, interval: "b3" },  // G
            { string: 3, fret: 4, finger: 3, interval: "5" },   // B
            { string: 4, fret: 5, finger: 4, interval: "R" }    // E
        ],

        startFret: 0,
        endFret: 5,
        position: "Open Position",
        difficulty: 1,
        fingeringTips: "One of the easiest minor arpeggios to learn"
    },

    // D Minor Arpeggio
    d_minor_arp: {
        id: "d_minor_arp",
        name: "D Minor Arpeggio",
        chordId: "d_minor_open",
        root: "D",
        quality: "minor",
        notes: ["D", "F", "A"],

        pattern: [
            { string: 3, fret: 0, finger: 0, interval: "R" },   // D (open)
            { string: 3, fret: 3, finger: 3, interval: "b3" },  // F
            { string: 4, fret: 2, finger: 1, interval: "5" },   // A
            { string: 4, fret: 7, finger: 4, interval: "R" },   // D
            { string: 5, fret: 6, finger: 3, interval: "b3" },  // F
            { string: 5, fret: 10, finger: 4, interval: "5" }   // A
        ],

        startFret: 0,
        endFret: 10,
        position: "Open Position",
        difficulty: 2,
        fingeringTips: "Start on open D string"
    },

    // C7 Arpeggio
    c7_arp: {
        id: "c7_arp",
        name: "C Dominant 7 Arpeggio",
        chordId: "c7_open",
        root: "C",
        quality: "dominant7",
        notes: ["C", "E", "G", "Bb"],

        pattern: [
            { string: 1, fret: 3, finger: 2, interval: "R" },   // C
            { string: 2, fret: 2, finger: 1, interval: "3" },   // E
            { string: 2, fret: 5, finger: 4, interval: "5" },   // G
            { string: 3, fret: 3, finger: 2, interval: "b7" },  // Bb
            { string: 3, fret: 5, finger: 4, interval: "R" },   // C
            { string: 4, fret: 5, finger: 4, interval: "3" },   // E
            { string: 5, fret: 3, finger: 1, interval: "5" }    // G
        ],

        startFret: 2,
        endFret: 5,
        position: "2nd Position",
        difficulty: 2,
        fingeringTips: "Focus on the b7 (Bb) - it defines the dominant sound"
    },

    // E7 Arpeggio
    e7_arp: {
        id: "e7_arp",
        name: "E Dominant 7 Arpeggio",
        chordId: "e7_open",
        root: "E",
        quality: "dominant7",
        notes: ["E", "G#", "B", "D"],

        pattern: [
            { string: 0, fret: 0, finger: 0, interval: "R" },   // E (open)
            { string: 0, fret: 4, finger: 4, interval: "3" },   // G#
            { string: 1, fret: 2, finger: 1, interval: "5" },   // B
            { string: 1, fret: 5, finger: 4, interval: "b7" },  // D
            { string: 2, fret: 2, finger: 1, interval: "R" },   // E
            { string: 2, fret: 6, finger: 4, interval: "3" },   // G#
            { string: 3, fret: 4, finger: 2, interval: "5" }    // B
        ],

        startFret: 0,
        endFret: 6,
        position: "Open Position",
        difficulty: 2,
        fingeringTips: "Classic blues arpeggio shape"
    },

    // A7 Arpeggio
    a7_arp: {
        id: "a7_arp",
        name: "A Dominant 7 Arpeggio",
        chordId: "a7_open",
        root: "A",
        quality: "dominant7",
        notes: ["A", "C#", "E", "G"],

        pattern: [
            { string: 1, fret: 0, finger: 0, interval: "R" },   // A (open)
            { string: 1, fret: 4, finger: 4, interval: "3" },   // C#
            { string: 2, fret: 2, finger: 1, interval: "5" },   // E
            { string: 2, fret: 5, finger: 4, interval: "b7" },  // G
            { string: 3, fret: 2, finger: 1, interval: "R" },   // A
            { string: 3, fret: 6, finger: 4, interval: "3" },   // C#
            { string: 4, fret: 5, finger: 3, interval: "5" }    // E
        ],

        startFret: 0,
        endFret: 6,
        position: "Open Position",
        difficulty: 2,
        fingeringTips: "Great for blues turnarounds"
    },

    // G7 Arpeggio
    g7_arp: {
        id: "g7_arp",
        name: "G Dominant 7 Arpeggio",
        chordId: "g7_open",
        root: "G",
        quality: "dominant7",
        notes: ["G", "B", "D", "F"],

        pattern: [
            { string: 0, fret: 3, finger: 2, interval: "R" },   // G
            { string: 1, fret: 2, finger: 1, interval: "3" },   // B
            { string: 1, fret: 5, finger: 4, interval: "5" },   // D
            { string: 2, fret: 3, finger: 2, interval: "b7" },  // F
            { string: 2, fret: 5, finger: 4, interval: "R" },   // G
            { string: 3, fret: 4, finger: 3, interval: "3" },   // B
            { string: 4, fret: 5, finger: 4, interval: "5" }    // D
        ],

        startFret: 2,
        endFret: 5,
        position: "2nd Position",
        difficulty: 2,
        fingeringTips: "The b7 (F) is on fret 3 of the D string"
    },

    // Cmaj7 Arpeggio
    cmaj7_arp: {
        id: "cmaj7_arp",
        name: "C Major 7 Arpeggio",
        chordId: "cmaj7_open",
        root: "C",
        quality: "major7",
        notes: ["C", "E", "G", "B"],

        pattern: [
            { string: 1, fret: 3, finger: 2, interval: "R" },   // C
            { string: 2, fret: 2, finger: 1, interval: "3" },   // E
            { string: 2, fret: 5, finger: 4, interval: "5" },   // G
            { string: 3, fret: 4, finger: 3, interval: "7" },   // B
            { string: 3, fret: 5, finger: 4, interval: "R" },   // C
            { string: 4, fret: 5, finger: 4, interval: "3" },   // E
            { string: 5, fret: 3, finger: 1, interval: "5" }    // G
        ],

        startFret: 2,
        endFret: 5,
        position: "2nd Position",
        difficulty: 2,
        fingeringTips: "The major 7th (B) gives this a dreamy, jazz quality"
    },

    // Am7 Arpeggio
    am7_arp: {
        id: "am7_arp",
        name: "A Minor 7 Arpeggio",
        chordId: "am7_open",
        root: "A",
        quality: "minor7",
        notes: ["A", "C", "E", "G"],

        pattern: [
            { string: 1, fret: 0, finger: 0, interval: "R" },   // A (open)
            { string: 1, fret: 3, finger: 3, interval: "b3" },  // C
            { string: 2, fret: 2, finger: 1, interval: "5" },   // E
            { string: 2, fret: 5, finger: 4, interval: "b7" },  // G
            { string: 3, fret: 2, finger: 1, interval: "R" },   // A
            { string: 3, fret: 5, finger: 4, interval: "b3" },  // C
            { string: 4, fret: 5, finger: 4, interval: "5" }    // E
        ],

        startFret: 0,
        endFret: 5,
        position: "Open Position",
        difficulty: 2,
        fingeringTips: "Essential jazz arpeggio - used in countless ii-V-I progressions"
    },

    // Em7 Arpeggio
    em7_arp: {
        id: "em7_arp",
        name: "E Minor 7 Arpeggio",
        chordId: "em7_open",
        root: "E",
        quality: "minor7",
        notes: ["E", "G", "B", "D"],

        pattern: [
            { string: 0, fret: 0, finger: 0, interval: "R" },   // E (open)
            { string: 0, fret: 3, finger: 3, interval: "b3" },  // G
            { string: 1, fret: 2, finger: 1, interval: "5" },   // B
            { string: 1, fret: 5, finger: 4, interval: "b7" },  // D
            { string: 2, fret: 2, finger: 1, interval: "R" },   // E
            { string: 2, fret: 5, finger: 4, interval: "b3" },  // G
            { string: 3, fret: 4, finger: 3, interval: "5" }    // B
        ],

        startFret: 0,
        endFret: 5,
        position: "Open Position",
        difficulty: 2,
        fingeringTips: "Very comfortable open position shape"
    },

    // Dm7 Arpeggio
    dm7_arp: {
        id: "dm7_arp",
        name: "D Minor 7 Arpeggio",
        chordId: "dm7_open",
        root: "D",
        quality: "minor7",
        notes: ["D", "F", "A", "C"],

        pattern: [
            { string: 3, fret: 0, finger: 0, interval: "R" },   // D (open)
            { string: 3, fret: 3, finger: 3, interval: "b3" },  // F
            { string: 4, fret: 2, finger: 1, interval: "5" },   // A
            { string: 4, fret: 5, finger: 4, interval: "b7" },  // C
            { string: 5, fret: 3, finger: 2, interval: "R" },   // D
            { string: 5, fret: 6, finger: 4, interval: "b3" }   // F
        ],

        startFret: 0,
        endFret: 6,
        position: "Open Position",
        difficulty: 2,
        fingeringTips: "Key arpeggio for jazz - the ii chord in C major"
    }
};

/**
 * Get all arpeggios as array
 */
function getAllArpeggios() {
    return Object.values(ArpeggioLibrary);
}

/**
 * Get arpeggio by ID
 */
function getArpeggioById(id) {
    return ArpeggioLibrary[id] || null;
}

/**
 * Get arpeggio for a specific chord
 */
function getArpeggioForChord(chordId) {
    return Object.values(ArpeggioLibrary).find(arp => arp.chordId === chordId) || null;
}

/**
 * Get arpeggios by quality
 */
function getArpeggiosByQuality(quality) {
    return Object.values(ArpeggioLibrary).filter(arp => arp.quality === quality);
}

/**
 * Get arpeggios by root note
 */
function getArpeggiosByRoot(root) {
    return Object.values(ArpeggioLibrary).filter(arp => arp.root === root);
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ArpeggioLibrary,
        getAllArpeggios,
        getArpeggioById,
        getArpeggioForChord,
        getArpeggiosByQuality,
        getArpeggiosByRoot
    };
}
