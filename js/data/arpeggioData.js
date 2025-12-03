/**
 * Guitar Chord Explorer - Arpeggio Data Library
 * Contains arpeggio patterns linked to chord definitions
 * Expanded library with ~55 arpeggios covering all natural roots plus common sharps/flats
 */

const ArpeggioLibrary = {
    // ============================================
    // MAJOR ARPEGGIOS
    // ============================================

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

    // C Major Arpeggio - 8th Position (6th string root)
    c_major_8pos_arp: {
        id: "c_major_8pos_arp",
        name: "C Major Arpeggio (8th Position)",
        chordId: "c_major_barre",
        root: "C",
        quality: "major",
        notes: ["C", "E", "G"],

        pattern: [
            { string: 0, fret: 8, finger: 1, interval: "R" },   // C
            { string: 0, fret: 12, finger: 4, interval: "3" },  // E
            { string: 1, fret: 10, finger: 3, interval: "5" },  // G
            { string: 2, fret: 10, finger: 3, interval: "R" },  // C
            { string: 3, fret: 9, finger: 2, interval: "3" },   // E
            { string: 3, fret: 12, finger: 4, interval: "5" },  // G
            { string: 4, fret: 10, finger: 1, interval: "R" }   // C
        ],

        startFret: 8,
        endFret: 12,
        position: "8th Position",
        difficulty: 2,
        fingeringTips: "E-shape barre chord position - great for sweep picking"
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

    // D Major Arpeggio - 10th Position (6th string root)
    d_major_10pos_arp: {
        id: "d_major_10pos_arp",
        name: "D Major Arpeggio (10th Position)",
        chordId: "d_major_barre",
        root: "D",
        quality: "major",
        notes: ["D", "F#", "A"],

        pattern: [
            { string: 0, fret: 10, finger: 1, interval: "R" },  // D
            { string: 1, fret: 12, finger: 3, interval: "5" },  // A
            { string: 2, fret: 11, finger: 2, interval: "3" },  // F#
            { string: 2, fret: 12, finger: 3, interval: "R" },  // D
            { string: 3, fret: 11, finger: 2, interval: "3" },  // F#
            { string: 4, fret: 12, finger: 4, interval: "R" }   // D
        ],

        startFret: 10,
        endFret: 12,
        position: "10th Position",
        difficulty: 2,
        fingeringTips: "Compact shape near the 12th fret - great for high register"
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

    // E Major Arpeggio - 7th Position (5th string root)
    e_major_7pos_arp: {
        id: "e_major_7pos_arp",
        name: "E Major Arpeggio (7th Position)",
        chordId: "e_major_a_shape",
        root: "E",
        quality: "major",
        notes: ["E", "G#", "B"],

        pattern: [
            { string: 1, fret: 7, finger: 1, interval: "R" },   // E
            { string: 1, fret: 11, finger: 4, interval: "3" },  // G#
            { string: 2, fret: 9, finger: 3, interval: "5" },   // B
            { string: 3, fret: 9, finger: 3, interval: "R" },   // E
            { string: 4, fret: 9, finger: 2, interval: "3" },   // G#
            { string: 4, fret: 12, finger: 4, interval: "5" },  // B
            { string: 5, fret: 12, finger: 4, interval: "R" }   // E
        ],

        startFret: 7,
        endFret: 12,
        position: "7th Position",
        difficulty: 2,
        fingeringTips: "A-shape barre position - connect this to open position for full neck coverage"
    },

    // F Major Arpeggio (6th string root)
    f_major_arp: {
        id: "f_major_arp",
        name: "F Major Arpeggio",
        chordId: "f_major_barre",
        root: "F",
        quality: "major",
        notes: ["F", "A", "C"],

        pattern: [
            { string: 0, fret: 1, finger: 1, interval: "R" },   // F
            { string: 0, fret: 5, finger: 4, interval: "3" },   // A
            { string: 1, fret: 3, finger: 3, interval: "5" },   // C
            { string: 2, fret: 3, finger: 3, interval: "R" },   // F
            { string: 3, fret: 2, finger: 2, interval: "3" },   // A
            { string: 3, fret: 5, finger: 4, interval: "5" },   // C
            { string: 4, fret: 3, finger: 1, interval: "R" }    // F
        ],

        startFret: 1,
        endFret: 5,
        position: "1st Position",
        difficulty: 2,
        fingeringTips: "E-shape barre chord arpeggio - foundation for all moveable major arpeggios"
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
            { string: 1, fret: 2, finger: 1, interval: "3" },   // B
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

    // A Major Arpeggio - 5th Position (6th string root)
    a_major_5pos_arp: {
        id: "a_major_5pos_arp",
        name: "A Major Arpeggio (5th Position)",
        chordId: "a_major_barre",
        root: "A",
        quality: "major",
        notes: ["A", "C#", "E"],

        pattern: [
            { string: 0, fret: 5, finger: 1, interval: "R" },   // A
            { string: 0, fret: 9, finger: 4, interval: "3" },   // C#
            { string: 1, fret: 7, finger: 3, interval: "5" },   // E
            { string: 2, fret: 7, finger: 3, interval: "R" },   // A
            { string: 3, fret: 6, finger: 2, interval: "3" },   // C#
            { string: 3, fret: 9, finger: 4, interval: "5" },   // E
            { string: 4, fret: 7, finger: 1, interval: "R" }    // A
        ],

        startFret: 5,
        endFret: 9,
        position: "5th Position",
        difficulty: 2,
        fingeringTips: "E-shape barre position - perfect for rock and metal sweep picking"
    },

    // B Major Arpeggio (5th string root)
    b_major_arp: {
        id: "b_major_arp",
        name: "B Major Arpeggio",
        chordId: "b_major_barre",
        root: "B",
        quality: "major",
        notes: ["B", "D#", "F#"],

        pattern: [
            { string: 1, fret: 2, finger: 1, interval: "R" },   // B
            { string: 1, fret: 6, finger: 4, interval: "3" },   // D#
            { string: 2, fret: 4, finger: 3, interval: "5" },   // F#
            { string: 3, fret: 4, finger: 3, interval: "R" },   // B
            { string: 4, fret: 4, finger: 2, interval: "3" },   // D#
            { string: 4, fret: 7, finger: 4, interval: "5" },   // F#
            { string: 5, fret: 7, finger: 4, interval: "R" }    // B
        ],

        startFret: 2,
        endFret: 7,
        position: "2nd Position",
        difficulty: 2,
        fingeringTips: "A-shape barre arpeggio - root on 5th string"
    },

    // F# Major Arpeggio
    fsharp_major_arp: {
        id: "fsharp_major_arp",
        name: "F# Major Arpeggio",
        chordId: "fsharp_major_barre",
        root: "F#",
        quality: "major",
        notes: ["F#", "A#", "C#"],

        pattern: [
            { string: 0, fret: 2, finger: 1, interval: "R" },   // F#
            { string: 0, fret: 6, finger: 4, interval: "3" },   // A#
            { string: 1, fret: 4, finger: 3, interval: "5" },   // C#
            { string: 2, fret: 4, finger: 3, interval: "R" },   // F#
            { string: 3, fret: 3, finger: 2, interval: "3" },   // A#
            { string: 3, fret: 6, finger: 4, interval: "5" },   // C#
            { string: 4, fret: 4, finger: 1, interval: "R" }    // F#
        ],

        startFret: 2,
        endFret: 6,
        position: "2nd Position",
        difficulty: 2,
        fingeringTips: "Common key for rock - same shape as F major moved up one fret"
    },

    // Bb Major Arpeggio
    bb_major_arp: {
        id: "bb_major_arp",
        name: "Bb Major Arpeggio",
        chordId: "bb_major_barre",
        root: "Bb",
        quality: "major",
        notes: ["Bb", "D", "F"],

        pattern: [
            { string: 0, fret: 6, finger: 1, interval: "R" },   // Bb
            { string: 0, fret: 10, finger: 4, interval: "3" },  // D
            { string: 1, fret: 8, finger: 3, interval: "5" },   // F
            { string: 2, fret: 8, finger: 3, interval: "R" },   // Bb
            { string: 3, fret: 7, finger: 2, interval: "3" },   // D
            { string: 3, fret: 10, finger: 4, interval: "5" },  // F
            { string: 4, fret: 8, finger: 1, interval: "R" }    // Bb
        ],

        startFret: 6,
        endFret: 10,
        position: "6th Position",
        difficulty: 2,
        fingeringTips: "Essential jazz key - E-shape moved to 6th fret"
    },

    // Eb Major Arpeggio
    eb_major_arp: {
        id: "eb_major_arp",
        name: "Eb Major Arpeggio",
        chordId: "eb_major_barre",
        root: "Eb",
        quality: "major",
        notes: ["Eb", "G", "Bb"],

        pattern: [
            { string: 1, fret: 6, finger: 1, interval: "R" },   // Eb
            { string: 1, fret: 10, finger: 4, interval: "3" },  // G
            { string: 2, fret: 8, finger: 3, interval: "5" },   // Bb
            { string: 3, fret: 8, finger: 3, interval: "R" },   // Eb
            { string: 4, fret: 8, finger: 2, interval: "3" },   // G
            { string: 4, fret: 11, finger: 4, interval: "5" },  // Bb
            { string: 5, fret: 11, finger: 4, interval: "R" }   // Eb
        ],

        startFret: 6,
        endFret: 11,
        position: "6th Position",
        difficulty: 2,
        fingeringTips: "A-shape with root on 5th string - common jazz and R&B key"
    },

    // Ab Major Arpeggio
    ab_major_arp: {
        id: "ab_major_arp",
        name: "Ab Major Arpeggio",
        chordId: "ab_major_barre",
        root: "Ab",
        quality: "major",
        notes: ["Ab", "C", "Eb"],

        pattern: [
            { string: 0, fret: 4, finger: 1, interval: "R" },   // Ab
            { string: 0, fret: 8, finger: 4, interval: "3" },   // C
            { string: 1, fret: 6, finger: 3, interval: "5" },   // Eb
            { string: 2, fret: 6, finger: 3, interval: "R" },   // Ab
            { string: 3, fret: 5, finger: 2, interval: "3" },   // C
            { string: 3, fret: 8, finger: 4, interval: "5" },   // Eb
            { string: 4, fret: 6, finger: 1, interval: "R" }    // Ab
        ],

        startFret: 4,
        endFret: 8,
        position: "4th Position",
        difficulty: 2,
        fingeringTips: "E-shape at 4th fret - frequently used in soul and R&B"
    },

    // ============================================
    // MINOR ARPEGGIOS
    // ============================================

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

    // A Minor Arpeggio - 5th Position (6th string root)
    a_minor_5pos_arp: {
        id: "a_minor_5pos_arp",
        name: "A Minor Arpeggio (5th Position)",
        chordId: "a_minor_barre",
        root: "A",
        quality: "minor",
        notes: ["A", "C", "E"],

        pattern: [
            { string: 0, fret: 5, finger: 1, interval: "R" },   // A
            { string: 0, fret: 8, finger: 4, interval: "b3" },  // C
            { string: 1, fret: 7, finger: 3, interval: "5" },   // E
            { string: 2, fret: 7, finger: 3, interval: "R" },   // A
            { string: 3, fret: 5, finger: 1, interval: "b3" },  // C
            { string: 3, fret: 9, finger: 4, interval: "5" },   // E
            { string: 4, fret: 7, finger: 2, interval: "R" }    // A
        ],

        startFret: 5,
        endFret: 9,
        position: "5th Position",
        difficulty: 2,
        fingeringTips: "Em-shape barre minor arpeggio - essential for rock soloing"
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

    // E Minor Arpeggio - 7th Position
    e_minor_7pos_arp: {
        id: "e_minor_7pos_arp",
        name: "E Minor Arpeggio (7th Position)",
        chordId: "e_minor_a_shape",
        root: "E",
        quality: "minor",
        notes: ["E", "G", "B"],

        pattern: [
            { string: 1, fret: 7, finger: 1, interval: "R" },   // E
            { string: 1, fret: 10, finger: 4, interval: "b3" }, // G
            { string: 2, fret: 9, finger: 3, interval: "5" },   // B
            { string: 3, fret: 9, finger: 3, interval: "R" },   // E
            { string: 4, fret: 8, finger: 2, interval: "b3" },  // G
            { string: 4, fret: 12, finger: 4, interval: "5" },  // B
            { string: 5, fret: 12, finger: 4, interval: "R" }   // E
        ],

        startFret: 7,
        endFret: 12,
        position: "7th Position",
        difficulty: 2,
        fingeringTips: "Am-shape barre position - extends E minor across the neck"
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

    // C Minor Arpeggio
    c_minor_arp: {
        id: "c_minor_arp",
        name: "C Minor Arpeggio",
        chordId: "c_minor_barre",
        root: "C",
        quality: "minor",
        notes: ["C", "Eb", "G"],

        pattern: [
            { string: 1, fret: 3, finger: 1, interval: "R" },   // C
            { string: 1, fret: 6, finger: 4, interval: "b3" },  // Eb
            { string: 2, fret: 5, finger: 3, interval: "5" },   // G
            { string: 3, fret: 5, finger: 3, interval: "R" },   // C
            { string: 4, fret: 4, finger: 2, interval: "b3" },  // Eb
            { string: 4, fret: 8, finger: 4, interval: "5" },   // G
            { string: 5, fret: 8, finger: 4, interval: "R" }    // C
        ],

        startFret: 3,
        endFret: 8,
        position: "3rd Position",
        difficulty: 2,
        fingeringTips: "Am-shape minor arpeggio at 3rd fret - essential for jazz and blues"
    },

    // G Minor Arpeggio
    g_minor_arp: {
        id: "g_minor_arp",
        name: "G Minor Arpeggio",
        chordId: "g_minor_barre",
        root: "G",
        quality: "minor",
        notes: ["G", "Bb", "D"],

        pattern: [
            { string: 0, fret: 3, finger: 1, interval: "R" },   // G
            { string: 0, fret: 6, finger: 4, interval: "b3" },  // Bb
            { string: 1, fret: 5, finger: 3, interval: "5" },   // D
            { string: 2, fret: 5, finger: 3, interval: "R" },   // G
            { string: 3, fret: 3, finger: 1, interval: "b3" },  // Bb
            { string: 3, fret: 7, finger: 4, interval: "5" },   // D
            { string: 4, fret: 5, finger: 2, interval: "R" }    // G
        ],

        startFret: 3,
        endFret: 7,
        position: "3rd Position",
        difficulty: 2,
        fingeringTips: "Em-shape barre minor arpeggio - common in rock and blues"
    },

    // F Minor Arpeggio
    f_minor_arp: {
        id: "f_minor_arp",
        name: "F Minor Arpeggio",
        chordId: "f_minor_barre",
        root: "F",
        quality: "minor",
        notes: ["F", "Ab", "C"],

        pattern: [
            { string: 0, fret: 1, finger: 1, interval: "R" },   // F
            { string: 0, fret: 4, finger: 4, interval: "b3" },  // Ab
            { string: 1, fret: 3, finger: 3, interval: "5" },   // C
            { string: 2, fret: 3, finger: 3, interval: "R" },   // F
            { string: 3, fret: 1, finger: 1, interval: "b3" },  // Ab
            { string: 3, fret: 5, finger: 4, interval: "5" },   // C
            { string: 4, fret: 3, finger: 2, interval: "R" }    // F
        ],

        startFret: 1,
        endFret: 5,
        position: "1st Position",
        difficulty: 2,
        fingeringTips: "Em-shape barre minor at 1st fret - moveable pattern"
    },

    // B Minor Arpeggio
    b_minor_arp: {
        id: "b_minor_arp",
        name: "B Minor Arpeggio",
        chordId: "b_minor_barre",
        root: "B",
        quality: "minor",
        notes: ["B", "D", "F#"],

        pattern: [
            { string: 1, fret: 2, finger: 1, interval: "R" },   // B
            { string: 1, fret: 5, finger: 4, interval: "b3" },  // D
            { string: 2, fret: 4, finger: 3, interval: "5" },   // F#
            { string: 3, fret: 4, finger: 3, interval: "R" },   // B
            { string: 4, fret: 3, finger: 2, interval: "b3" },  // D
            { string: 4, fret: 7, finger: 4, interval: "5" },   // F#
            { string: 5, fret: 7, finger: 4, interval: "R" }    // B
        ],

        startFret: 2,
        endFret: 7,
        position: "2nd Position",
        difficulty: 2,
        fingeringTips: "Am-shape at 2nd fret - key relative minor for D major"
    },

    // ============================================
    // DOMINANT 7 ARPEGGIOS
    // ============================================

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

    // D7 Arpeggio
    d7_arp: {
        id: "d7_arp",
        name: "D Dominant 7 Arpeggio",
        chordId: "d7_open",
        root: "D",
        quality: "dominant7",
        notes: ["D", "F#", "A", "C"],

        pattern: [
            { string: 3, fret: 0, finger: 0, interval: "R" },   // D (open)
            { string: 3, fret: 4, finger: 4, interval: "3" },   // F#
            { string: 4, fret: 2, finger: 1, interval: "5" },   // A
            { string: 4, fret: 5, finger: 4, interval: "b7" },  // C
            { string: 5, fret: 3, finger: 2, interval: "R" },   // D
            { string: 5, fret: 7, finger: 4, interval: "3" }    // F#
        ],

        startFret: 0,
        endFret: 7,
        position: "Open Position",
        difficulty: 2,
        fingeringTips: "Open D with added b7 - great for blues in D"
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

    // F7 Arpeggio
    f7_arp: {
        id: "f7_arp",
        name: "F Dominant 7 Arpeggio",
        chordId: "f7_barre",
        root: "F",
        quality: "dominant7",
        notes: ["F", "A", "C", "Eb"],

        pattern: [
            { string: 0, fret: 1, finger: 1, interval: "R" },   // F
            { string: 0, fret: 5, finger: 4, interval: "3" },   // A
            { string: 1, fret: 3, finger: 3, interval: "5" },   // C
            { string: 2, fret: 1, finger: 1, interval: "b7" },  // Eb
            { string: 2, fret: 3, finger: 3, interval: "R" },   // F
            { string: 3, fret: 2, finger: 2, interval: "3" },   // A
            { string: 3, fret: 5, finger: 4, interval: "5" }    // C
        ],

        startFret: 1,
        endFret: 5,
        position: "1st Position",
        difficulty: 2,
        fingeringTips: "Moveable E7 shape - foundation for all dominant 7 arpeggios"
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

    // B7 Arpeggio
    b7_arp: {
        id: "b7_arp",
        name: "B Dominant 7 Arpeggio",
        chordId: "b7_open",
        root: "B",
        quality: "dominant7",
        notes: ["B", "D#", "F#", "A"],

        pattern: [
            { string: 1, fret: 2, finger: 1, interval: "R" },   // B
            { string: 1, fret: 6, finger: 4, interval: "3" },   // D#
            { string: 2, fret: 4, finger: 3, interval: "5" },   // F#
            { string: 3, fret: 2, finger: 1, interval: "b7" },  // A
            { string: 3, fret: 4, finger: 3, interval: "R" },   // B
            { string: 4, fret: 4, finger: 2, interval: "3" },   // D#
            { string: 4, fret: 7, finger: 4, interval: "5" }    // F#
        ],

        startFret: 2,
        endFret: 7,
        position: "2nd Position",
        difficulty: 2,
        fingeringTips: "V chord in E major - essential for blues and rock in E"
    },

    // Bb7 Arpeggio
    bb7_arp: {
        id: "bb7_arp",
        name: "Bb Dominant 7 Arpeggio",
        chordId: "bb7_barre",
        root: "Bb",
        quality: "dominant7",
        notes: ["Bb", "D", "F", "Ab"],

        pattern: [
            { string: 0, fret: 6, finger: 1, interval: "R" },   // Bb
            { string: 0, fret: 10, finger: 4, interval: "3" },  // D
            { string: 1, fret: 8, finger: 3, interval: "5" },   // F
            { string: 2, fret: 6, finger: 1, interval: "b7" },  // Ab
            { string: 2, fret: 8, finger: 3, interval: "R" },   // Bb
            { string: 3, fret: 7, finger: 2, interval: "3" },   // D
            { string: 3, fret: 10, finger: 4, interval: "5" }   // F
        ],

        startFret: 6,
        endFret: 10,
        position: "6th Position",
        difficulty: 2,
        fingeringTips: "Essential jazz dominant - V chord in Eb major"
    },

    // ============================================
    // MAJOR 7 ARPEGGIOS
    // ============================================

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

    // Dmaj7 Arpeggio
    dmaj7_arp: {
        id: "dmaj7_arp",
        name: "D Major 7 Arpeggio",
        chordId: "dmaj7_open",
        root: "D",
        quality: "major7",
        notes: ["D", "F#", "A", "C#"],

        pattern: [
            { string: 3, fret: 0, finger: 0, interval: "R" },   // D (open)
            { string: 3, fret: 4, finger: 4, interval: "3" },   // F#
            { string: 4, fret: 2, finger: 1, interval: "5" },   // A
            { string: 4, fret: 6, finger: 4, interval: "7" },   // C#
            { string: 5, fret: 3, finger: 2, interval: "R" },   // D
            { string: 5, fret: 7, finger: 4, interval: "3" }    // F#
        ],

        startFret: 0,
        endFret: 7,
        position: "Open Position",
        difficulty: 2,
        fingeringTips: "Open D with major 7th - beautiful jazz voicing"
    },

    // Emaj7 Arpeggio
    emaj7_arp: {
        id: "emaj7_arp",
        name: "E Major 7 Arpeggio",
        chordId: "emaj7_open",
        root: "E",
        quality: "major7",
        notes: ["E", "G#", "B", "D#"],

        pattern: [
            { string: 0, fret: 0, finger: 0, interval: "R" },   // E (open)
            { string: 0, fret: 4, finger: 4, interval: "3" },   // G#
            { string: 1, fret: 2, finger: 1, interval: "5" },   // B
            { string: 1, fret: 6, finger: 4, interval: "7" },   // D#
            { string: 2, fret: 2, finger: 1, interval: "R" },   // E
            { string: 2, fret: 6, finger: 4, interval: "3" },   // G#
            { string: 3, fret: 4, finger: 2, interval: "5" }    // B
        ],

        startFret: 0,
        endFret: 6,
        position: "Open Position",
        difficulty: 2,
        fingeringTips: "Rich, lush sound - great for ballads and jazz"
    },

    // Fmaj7 Arpeggio
    fmaj7_arp: {
        id: "fmaj7_arp",
        name: "F Major 7 Arpeggio",
        chordId: "fmaj7_open",
        root: "F",
        quality: "major7",
        notes: ["F", "A", "C", "E"],

        pattern: [
            { string: 0, fret: 1, finger: 1, interval: "R" },   // F
            { string: 0, fret: 5, finger: 4, interval: "3" },   // A
            { string: 1, fret: 3, finger: 3, interval: "5" },   // C
            { string: 2, fret: 2, finger: 2, interval: "7" },   // E
            { string: 2, fret: 3, finger: 3, interval: "R" },   // F
            { string: 3, fret: 2, finger: 2, interval: "3" },   // A
            { string: 3, fret: 5, finger: 4, interval: "5" }    // C
        ],

        startFret: 1,
        endFret: 5,
        position: "1st Position",
        difficulty: 2,
        fingeringTips: "Common jazz voicing - IV chord in C major"
    },

    // Gmaj7 Arpeggio
    gmaj7_arp: {
        id: "gmaj7_arp",
        name: "G Major 7 Arpeggio",
        chordId: "gmaj7_open",
        root: "G",
        quality: "major7",
        notes: ["G", "B", "D", "F#"],

        pattern: [
            { string: 0, fret: 3, finger: 2, interval: "R" },   // G
            { string: 1, fret: 2, finger: 1, interval: "3" },   // B
            { string: 1, fret: 5, finger: 4, interval: "5" },   // D
            { string: 2, fret: 4, finger: 3, interval: "7" },   // F#
            { string: 2, fret: 5, finger: 4, interval: "R" },   // G
            { string: 3, fret: 4, finger: 3, interval: "3" },   // B
            { string: 4, fret: 5, finger: 4, interval: "5" }    // D
        ],

        startFret: 2,
        endFret: 5,
        position: "2nd Position",
        difficulty: 2,
        fingeringTips: "The F# (major 7th) adds sophistication to G major"
    },

    // Amaj7 Arpeggio
    amaj7_arp: {
        id: "amaj7_arp",
        name: "A Major 7 Arpeggio",
        chordId: "amaj7_open",
        root: "A",
        quality: "major7",
        notes: ["A", "C#", "E", "G#"],

        pattern: [
            { string: 1, fret: 0, finger: 0, interval: "R" },   // A (open)
            { string: 1, fret: 4, finger: 4, interval: "3" },   // C#
            { string: 2, fret: 2, finger: 1, interval: "5" },   // E
            { string: 2, fret: 6, finger: 4, interval: "7" },   // G#
            { string: 3, fret: 2, finger: 1, interval: "R" },   // A
            { string: 3, fret: 6, finger: 4, interval: "3" },   // C#
            { string: 4, fret: 5, finger: 3, interval: "5" }    // E
        ],

        startFret: 0,
        endFret: 6,
        position: "Open Position",
        difficulty: 2,
        fingeringTips: "Beautiful open position maj7 - perfect for singer-songwriter styles"
    },

    // Bbmaj7 Arpeggio
    bbmaj7_arp: {
        id: "bbmaj7_arp",
        name: "Bb Major 7 Arpeggio",
        chordId: "bbmaj7_barre",
        root: "Bb",
        quality: "major7",
        notes: ["Bb", "D", "F", "A"],

        pattern: [
            { string: 0, fret: 6, finger: 1, interval: "R" },   // Bb
            { string: 0, fret: 10, finger: 4, interval: "3" },  // D
            { string: 1, fret: 8, finger: 3, interval: "5" },   // F
            { string: 2, fret: 7, finger: 2, interval: "7" },   // A
            { string: 2, fret: 8, finger: 3, interval: "R" },   // Bb
            { string: 3, fret: 7, finger: 2, interval: "3" },   // D
            { string: 3, fret: 10, finger: 4, interval: "5" }   // F
        ],

        startFret: 6,
        endFret: 10,
        position: "6th Position",
        difficulty: 2,
        fingeringTips: "I chord in Bb major - essential jazz key"
    },

    // ============================================
    // MINOR 7 ARPEGGIOS
    // ============================================

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
    },

    // Cm7 Arpeggio
    cm7_arp: {
        id: "cm7_arp",
        name: "C Minor 7 Arpeggio",
        chordId: "cm7_barre",
        root: "C",
        quality: "minor7",
        notes: ["C", "Eb", "G", "Bb"],

        pattern: [
            { string: 1, fret: 3, finger: 1, interval: "R" },   // C
            { string: 1, fret: 6, finger: 4, interval: "b3" },  // Eb
            { string: 2, fret: 5, finger: 3, interval: "5" },   // G
            { string: 3, fret: 3, finger: 1, interval: "b7" },  // Bb
            { string: 3, fret: 5, finger: 3, interval: "R" },   // C
            { string: 4, fret: 4, finger: 2, interval: "b3" },  // Eb
            { string: 4, fret: 8, finger: 4, interval: "5" }    // G
        ],

        startFret: 3,
        endFret: 8,
        position: "3rd Position",
        difficulty: 2,
        fingeringTips: "ii chord in Bb major - essential for jazz standards"
    },

    // Gm7 Arpeggio
    gm7_arp: {
        id: "gm7_arp",
        name: "G Minor 7 Arpeggio",
        chordId: "gm7_barre",
        root: "G",
        quality: "minor7",
        notes: ["G", "Bb", "D", "F"],

        pattern: [
            { string: 0, fret: 3, finger: 1, interval: "R" },   // G
            { string: 0, fret: 6, finger: 4, interval: "b3" },  // Bb
            { string: 1, fret: 5, finger: 3, interval: "5" },   // D
            { string: 2, fret: 3, finger: 1, interval: "b7" },  // F
            { string: 2, fret: 5, finger: 3, interval: "R" },   // G
            { string: 3, fret: 3, finger: 1, interval: "b3" },  // Bb
            { string: 3, fret: 7, finger: 4, interval: "5" }    // D
        ],

        startFret: 3,
        endFret: 7,
        position: "3rd Position",
        difficulty: 2,
        fingeringTips: "ii chord in F major - common in funk and R&B"
    },

    // Fm7 Arpeggio
    fm7_arp: {
        id: "fm7_arp",
        name: "F Minor 7 Arpeggio",
        chordId: "fm7_barre",
        root: "F",
        quality: "minor7",
        notes: ["F", "Ab", "C", "Eb"],

        pattern: [
            { string: 0, fret: 1, finger: 1, interval: "R" },   // F
            { string: 0, fret: 4, finger: 4, interval: "b3" },  // Ab
            { string: 1, fret: 3, finger: 3, interval: "5" },   // C
            { string: 2, fret: 1, finger: 1, interval: "b7" },  // Eb
            { string: 2, fret: 3, finger: 3, interval: "R" },   // F
            { string: 3, fret: 1, finger: 1, interval: "b3" },  // Ab
            { string: 3, fret: 5, finger: 4, interval: "5" }    // C
        ],

        startFret: 1,
        endFret: 5,
        position: "1st Position",
        difficulty: 2,
        fingeringTips: "Em7 shape at 1st fret - moveable pattern for all minor 7ths"
    },

    // Bm7 Arpeggio
    bm7_arp: {
        id: "bm7_arp",
        name: "B Minor 7 Arpeggio",
        chordId: "bm7_barre",
        root: "B",
        quality: "minor7",
        notes: ["B", "D", "F#", "A"],

        pattern: [
            { string: 1, fret: 2, finger: 1, interval: "R" },   // B
            { string: 1, fret: 5, finger: 4, interval: "b3" },  // D
            { string: 2, fret: 4, finger: 3, interval: "5" },   // F#
            { string: 3, fret: 2, finger: 1, interval: "b7" },  // A
            { string: 3, fret: 4, finger: 3, interval: "R" },   // B
            { string: 4, fret: 3, finger: 2, interval: "b3" },  // D
            { string: 4, fret: 7, finger: 4, interval: "5" }    // F#
        ],

        startFret: 2,
        endFret: 7,
        position: "2nd Position",
        difficulty: 2,
        fingeringTips: "ii chord in A major - frequently used in pop and rock"
    },

    // ============================================
    // DIMINISHED 7 ARPEGGIOS
    // ============================================

    // Cdim7 Arpeggio
    cdim7_arp: {
        id: "cdim7_arp",
        name: "C Diminished 7 Arpeggio",
        chordId: "cdim7",
        root: "C",
        quality: "diminished7",
        notes: ["C", "Eb", "Gb", "A"],

        pattern: [
            { string: 1, fret: 3, finger: 2, interval: "R" },   // C
            { string: 2, fret: 2, finger: 1, interval: "b5" },  // Gb
            { string: 2, fret: 5, finger: 4, interval: "bb7" }, // A (Bbb enharmonic)
            { string: 3, fret: 2, finger: 1, interval: "b3" },  // Eb
            { string: 3, fret: 5, finger: 4, interval: "R" },   // C
            { string: 4, fret: 4, finger: 3, interval: "b5" },  // Gb
            { string: 5, fret: 5, finger: 4, interval: "bb7" }  // A
        ],

        startFret: 2,
        endFret: 5,
        position: "2nd Position",
        difficulty: 3,
        fingeringTips: "Symmetrical arpeggio - same shape repeats every 3 frets"
    },

    // Ddim7 Arpeggio
    ddim7_arp: {
        id: "ddim7_arp",
        name: "D Diminished 7 Arpeggio",
        chordId: "ddim7",
        root: "D",
        quality: "diminished7",
        notes: ["D", "F", "Ab", "B"],

        pattern: [
            { string: 3, fret: 0, finger: 0, interval: "R" },   // D (open)
            { string: 3, fret: 3, finger: 3, interval: "b3" },  // F
            { string: 4, fret: 2, finger: 1, interval: "bb7" }, // B (Cb enharmonic)
            { string: 4, fret: 6, finger: 4, interval: "b5" },  // Ab
            { string: 5, fret: 4, finger: 2, interval: "R" },   // D
            { string: 5, fret: 7, finger: 4, interval: "b3" }   // F
        ],

        startFret: 0,
        endFret: 7,
        position: "Open Position",
        difficulty: 3,
        fingeringTips: "Great for creating tension before resolving to D major or minor"
    },

    // Edim7 Arpeggio
    edim7_arp: {
        id: "edim7_arp",
        name: "E Diminished 7 Arpeggio",
        chordId: "edim7",
        root: "E",
        quality: "diminished7",
        notes: ["E", "G", "Bb", "Db"],

        pattern: [
            { string: 0, fret: 0, finger: 0, interval: "R" },   // E (open)
            { string: 0, fret: 3, finger: 3, interval: "b3" },  // G
            { string: 1, fret: 1, finger: 1, interval: "b5" },  // Bb
            { string: 1, fret: 4, finger: 4, interval: "bb7" }, // Db
            { string: 2, fret: 2, finger: 2, interval: "R" },   // E
            { string: 2, fret: 5, finger: 4, interval: "b3" },  // G
            { string: 3, fret: 3, finger: 3, interval: "b5" }   // Bb
        ],

        startFret: 0,
        endFret: 5,
        position: "Open Position",
        difficulty: 3,
        fingeringTips: "Passing chord arpeggio - connects E to F or to E7"
    },

    // F#dim7 Arpeggio
    fsharpdim7_arp: {
        id: "fsharpdim7_arp",
        name: "F# Diminished 7 Arpeggio",
        chordId: "fsharpdim7",
        root: "F#",
        quality: "diminished7",
        notes: ["F#", "A", "C", "Eb"],

        pattern: [
            { string: 0, fret: 2, finger: 1, interval: "R" },   // F#
            { string: 0, fret: 5, finger: 4, interval: "b3" },  // A
            { string: 1, fret: 3, finger: 2, interval: "b5" },  // C
            { string: 1, fret: 6, finger: 4, interval: "bb7" }, // Eb
            { string: 2, fret: 4, finger: 3, interval: "R" },   // F#
            { string: 3, fret: 2, finger: 1, interval: "b3" },  // A
            { string: 3, fret: 5, finger: 4, interval: "b5" }   // C
        ],

        startFret: 2,
        endFret: 6,
        position: "2nd Position",
        difficulty: 3,
        fingeringTips: "Common passing diminished - leads to G major"
    },

    // G#dim7 Arpeggio
    gsharpdim7_arp: {
        id: "gsharpdim7_arp",
        name: "G# Diminished 7 Arpeggio",
        chordId: "gsharpdim7",
        root: "G#",
        quality: "diminished7",
        notes: ["G#", "B", "D", "F"],

        pattern: [
            { string: 0, fret: 4, finger: 1, interval: "R" },   // G#
            { string: 1, fret: 2, finger: 1, interval: "b3" },  // B
            { string: 1, fret: 5, finger: 4, interval: "b5" },  // D
            { string: 2, fret: 3, finger: 2, interval: "bb7" }, // F
            { string: 2, fret: 6, finger: 4, interval: "R" },   // G#
            { string: 3, fret: 4, finger: 3, interval: "b3" },  // B
            { string: 3, fret: 7, finger: 4, interval: "b5" }   // D
        ],

        startFret: 2,
        endFret: 7,
        position: "4th Position",
        difficulty: 3,
        fingeringTips: "Leads to A minor or A major - classic jazz movement"
    },

    // Bdim7 Arpeggio
    bdim7_arp: {
        id: "bdim7_arp",
        name: "B Diminished 7 Arpeggio",
        chordId: "bdim7",
        root: "B",
        quality: "diminished7",
        notes: ["B", "D", "F", "Ab"],

        pattern: [
            { string: 1, fret: 2, finger: 1, interval: "R" },   // B
            { string: 1, fret: 5, finger: 4, interval: "b3" },  // D
            { string: 2, fret: 3, finger: 2, interval: "b5" },  // F
            { string: 2, fret: 6, finger: 4, interval: "bb7" }, // Ab
            { string: 3, fret: 4, finger: 3, interval: "R" },   // B
            { string: 4, fret: 3, finger: 2, interval: "b3" },  // D
            { string: 4, fret: 6, finger: 4, interval: "b5" }   // F
        ],

        startFret: 2,
        endFret: 6,
        position: "2nd Position",
        difficulty: 3,
        fingeringTips: "viio chord in C major - resolves naturally to C"
    },

    // ============================================
    // AUGMENTED ARPEGGIOS
    // ============================================

    // Caug Arpeggio
    caug_arp: {
        id: "caug_arp",
        name: "C Augmented Arpeggio",
        chordId: "caug",
        root: "C",
        quality: "augmented",
        notes: ["C", "E", "G#"],

        pattern: [
            { string: 1, fret: 3, finger: 2, interval: "R" },   // C
            { string: 2, fret: 2, finger: 1, interval: "3" },   // E
            { string: 2, fret: 6, finger: 4, interval: "#5" },  // G#
            { string: 3, fret: 5, finger: 3, interval: "R" },   // C
            { string: 4, fret: 5, finger: 3, interval: "3" },   // E
            { string: 4, fret: 9, finger: 4, interval: "#5" },  // G#
            { string: 5, fret: 8, finger: 3, interval: "R" }    // C
        ],

        startFret: 2,
        endFret: 9,
        position: "2nd Position",
        difficulty: 2,
        fingeringTips: "Symmetrical - same shape repeats every 4 frets"
    },

    // Eaug Arpeggio
    eaug_arp: {
        id: "eaug_arp",
        name: "E Augmented Arpeggio",
        chordId: "eaug",
        root: "E",
        quality: "augmented",
        notes: ["E", "G#", "B#"],

        pattern: [
            { string: 0, fret: 0, finger: 0, interval: "R" },   // E (open)
            { string: 0, fret: 4, finger: 4, interval: "3" },   // G#
            { string: 1, fret: 3, finger: 3, interval: "#5" },  // B# (C)
            { string: 2, fret: 2, finger: 1, interval: "R" },   // E
            { string: 2, fret: 6, finger: 4, interval: "3" },   // G#
            { string: 3, fret: 5, finger: 3, interval: "#5" },  // B# (C)
            { string: 4, fret: 5, finger: 3, interval: "R" }    // E
        ],

        startFret: 0,
        endFret: 6,
        position: "Open Position",
        difficulty: 2,
        fingeringTips: "Creates tension that resolves to A or Am - Beatles favorite"
    },

    // Gaug Arpeggio
    gaug_arp: {
        id: "gaug_arp",
        name: "G Augmented Arpeggio",
        chordId: "gaug",
        root: "G",
        quality: "augmented",
        notes: ["G", "B", "D#"],

        pattern: [
            { string: 0, fret: 3, finger: 2, interval: "R" },   // G
            { string: 1, fret: 2, finger: 1, interval: "3" },   // B
            { string: 1, fret: 6, finger: 4, interval: "#5" },  // D#
            { string: 2, fret: 5, finger: 3, interval: "R" },   // G
            { string: 3, fret: 4, finger: 2, interval: "3" },   // B
            { string: 3, fret: 8, finger: 4, interval: "#5" },  // D#
            { string: 4, fret: 8, finger: 4, interval: "R" }    // G
        ],

        startFret: 2,
        endFret: 8,
        position: "2nd Position",
        difficulty: 2,
        fingeringTips: "Resolves naturally to C or Cm - creates dramatic tension"
    },

    // Abaug Arpeggio
    abaug_arp: {
        id: "abaug_arp",
        name: "Ab Augmented Arpeggio",
        chordId: "abaug",
        root: "Ab",
        quality: "augmented",
        notes: ["Ab", "C", "E"],

        pattern: [
            { string: 0, fret: 4, finger: 1, interval: "R" },   // Ab
            { string: 0, fret: 8, finger: 4, interval: "3" },   // C
            { string: 1, fret: 7, finger: 3, interval: "#5" },  // E
            { string: 2, fret: 6, finger: 2, interval: "R" },   // Ab
            { string: 3, fret: 5, finger: 1, interval: "3" },   // C
            { string: 3, fret: 9, finger: 4, interval: "#5" },  // E
            { string: 4, fret: 9, finger: 4, interval: "R" }    // Ab
        ],

        startFret: 4,
        endFret: 9,
        position: "4th Position",
        difficulty: 2,
        fingeringTips: "Enharmonically same as C aug and E aug - one shape fits all three"
    },

    // ============================================
    // MINOR 7 FLAT 5 (HALF-DIMINISHED) ARPEGGIOS
    // ============================================

    // Bm7b5 Arpeggio
    bm7b5_arp: {
        id: "bm7b5_arp",
        name: "B Minor 7b5 Arpeggio",
        chordId: "bm7b5",
        root: "B",
        quality: "minor7b5",
        notes: ["B", "D", "F", "A"],

        pattern: [
            { string: 1, fret: 2, finger: 1, interval: "R" },   // B
            { string: 1, fret: 5, finger: 4, interval: "b3" },  // D
            { string: 2, fret: 3, finger: 2, interval: "b5" },  // F
            { string: 3, fret: 2, finger: 1, interval: "b7" },  // A
            { string: 3, fret: 4, finger: 3, interval: "R" },   // B
            { string: 4, fret: 3, finger: 2, interval: "b3" },  // D
            { string: 4, fret: 6, finger: 4, interval: "b5" }   // F
        ],

        startFret: 2,
        endFret: 6,
        position: "2nd Position",
        difficulty: 3,
        fingeringTips: "viiø in C major - leads to E7 and Am in jazz progressions"
    },

    // Em7b5 Arpeggio
    em7b5_arp: {
        id: "em7b5_arp",
        name: "E Minor 7b5 Arpeggio",
        chordId: "em7b5",
        root: "E",
        quality: "minor7b5",
        notes: ["E", "G", "Bb", "D"],

        pattern: [
            { string: 0, fret: 0, finger: 0, interval: "R" },   // E (open)
            { string: 0, fret: 3, finger: 3, interval: "b3" },  // G
            { string: 1, fret: 1, finger: 1, interval: "b5" },  // Bb
            { string: 1, fret: 5, finger: 4, interval: "b7" },  // D
            { string: 2, fret: 2, finger: 2, interval: "R" },   // E
            { string: 2, fret: 5, finger: 4, interval: "b3" },  // G
            { string: 3, fret: 3, finger: 3, interval: "b5" }   // Bb
        ],

        startFret: 0,
        endFret: 5,
        position: "Open Position",
        difficulty: 3,
        fingeringTips: "iiø chord in D minor - essential for minor key jazz"
    },

    // Am7b5 Arpeggio
    am7b5_arp: {
        id: "am7b5_arp",
        name: "A Minor 7b5 Arpeggio",
        chordId: "am7b5",
        root: "A",
        quality: "minor7b5",
        notes: ["A", "C", "Eb", "G"],

        pattern: [
            { string: 1, fret: 0, finger: 0, interval: "R" },   // A (open)
            { string: 1, fret: 3, finger: 3, interval: "b3" },  // C
            { string: 2, fret: 1, finger: 1, interval: "b5" },  // Eb
            { string: 2, fret: 5, finger: 4, interval: "b7" },  // G
            { string: 3, fret: 2, finger: 2, interval: "R" },   // A
            { string: 3, fret: 5, finger: 4, interval: "b3" },  // C
            { string: 4, fret: 4, finger: 3, interval: "b5" }   // Eb
        ],

        startFret: 0,
        endFret: 5,
        position: "Open Position",
        difficulty: 3,
        fingeringTips: "iiø in G minor - dark, tense sound that craves resolution"
    },

    // Dm7b5 Arpeggio
    dm7b5_arp: {
        id: "dm7b5_arp",
        name: "D Minor 7b5 Arpeggio",
        chordId: "dm7b5",
        root: "D",
        quality: "minor7b5",
        notes: ["D", "F", "Ab", "C"],

        pattern: [
            { string: 3, fret: 0, finger: 0, interval: "R" },   // D (open)
            { string: 3, fret: 3, finger: 3, interval: "b3" },  // F
            { string: 4, fret: 1, finger: 1, interval: "b5" },  // Ab
            { string: 4, fret: 5, finger: 4, interval: "b7" },  // C
            { string: 5, fret: 3, finger: 2, interval: "R" },   // D
            { string: 5, fret: 6, finger: 4, interval: "b3" }   // F
        ],

        startFret: 0,
        endFret: 6,
        position: "Open Position",
        difficulty: 3,
        fingeringTips: "iiø in C minor - critical chord for minor ii-V-i progressions"
    },

    // F#m7b5 Arpeggio
    fsharpm7b5_arp: {
        id: "fsharpm7b5_arp",
        name: "F# Minor 7b5 Arpeggio",
        chordId: "fsharpm7b5",
        root: "F#",
        quality: "minor7b5",
        notes: ["F#", "A", "C", "E"],

        pattern: [
            { string: 0, fret: 2, finger: 1, interval: "R" },   // F#
            { string: 0, fret: 5, finger: 4, interval: "b3" },  // A
            { string: 1, fret: 3, finger: 2, interval: "b5" },  // C
            { string: 2, fret: 2, finger: 1, interval: "b7" },  // E
            { string: 2, fret: 4, finger: 3, interval: "R" },   // F#
            { string: 3, fret: 2, finger: 1, interval: "b3" },  // A
            { string: 3, fret: 5, finger: 4, interval: "b5" }   // C
        ],

        startFret: 2,
        endFret: 5,
        position: "2nd Position",
        difficulty: 3,
        fingeringTips: "viiø in G major, iiø in E minor - very common in jazz"
    },

    // C#m7b5 Arpeggio
    csharpm7b5_arp: {
        id: "csharpm7b5_arp",
        name: "C# Minor 7b5 Arpeggio",
        chordId: "csharpm7b5",
        root: "C#",
        quality: "minor7b5",
        notes: ["C#", "E", "G", "B"],

        pattern: [
            { string: 1, fret: 4, finger: 1, interval: "R" },   // C#
            { string: 2, fret: 2, finger: 1, interval: "b7" },  // B
            { string: 2, fret: 5, finger: 4, interval: "b3" },  // E
            { string: 3, fret: 4, finger: 3, interval: "b5" },  // G
            { string: 3, fret: 6, finger: 4, interval: "R" },   // C#
            { string: 4, fret: 5, finger: 2, interval: "b3" },  // E
            { string: 4, fret: 8, finger: 4, interval: "b5" }   // G
        ],

        startFret: 2,
        endFret: 8,
        position: "4th Position",
        difficulty: 3,
        fingeringTips: "viiø in D major, iiø in B minor - beautiful jazz voicing"
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
