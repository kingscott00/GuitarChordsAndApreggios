/**
 * Guitar Chord Explorer - Scale and Mode Data
 * Contains scale definitions and diatonic chord mappings
 */

// All 12 chromatic notes
const CHROMATIC_NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// Enharmonic equivalents for display
const ENHARMONIC_MAP = {
    'C#': 'Db',
    'D#': 'Eb',
    'F#': 'Gb',
    'G#': 'Ab',
    'A#': 'Bb'
};

/**
 * Mode definitions with intervals and chord qualities
 */
const ModeDefinitions = {
    ionian: {
        id: "ionian",
        name: "Ionian",
        alternateName: "Major Scale",
        intervals: [0, 2, 4, 5, 7, 9, 11],
        degrees: ["1", "2", "3", "4", "5", "6", "7"],
        chordQualities: ["major", "minor", "minor", "major", "major", "minor", "diminished"],
        seventhQualities: ["major7", "minor7", "minor7", "major7", "dominant7", "minor7", "half-diminished"],
        romanNumerals: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
        character: "Bright, happy, resolved",
        moods: ["happy", "peaceful", "energetic"],
        commonProgressions: [
            { name: "Pop", numerals: ["I", "V", "vi", "IV"] },
            { name: "Classic", numerals: ["I", "IV", "V", "I"] },
            { name: "50s", numerals: ["I", "vi", "IV", "V"] }
        ]
    },

    dorian: {
        id: "dorian",
        name: "Dorian",
        alternateName: "Minor with raised 6th",
        intervals: [0, 2, 3, 5, 7, 9, 10],
        degrees: ["1", "2", "b3", "4", "5", "6", "b7"],
        chordQualities: ["minor", "minor", "major", "major", "minor", "diminished", "major"],
        seventhQualities: ["minor7", "minor7", "major7", "dominant7", "minor7", "half-diminished", "major7"],
        romanNumerals: ["i", "ii", "bIII", "IV", "v", "vi°", "bVII"],
        character: "Minor but hopeful, jazzy",
        moods: ["mysterious", "dreamy", "peaceful"],
        commonProgressions: [
            { name: "Dorian Vamp", numerals: ["i", "IV"] },
            { name: "Jazz Dorian", numerals: ["i7", "IV7", "i7", "bVII"] }
        ]
    },

    phrygian: {
        id: "phrygian",
        name: "Phrygian",
        alternateName: "Spanish/Flamenco",
        intervals: [0, 1, 3, 5, 7, 8, 10],
        degrees: ["1", "b2", "b3", "4", "5", "b6", "b7"],
        chordQualities: ["minor", "major", "major", "minor", "diminished", "major", "minor"],
        seventhQualities: ["minor7", "major7", "dominant7", "minor7", "half-diminished", "major7", "minor7"],
        romanNumerals: ["i", "bII", "bIII", "iv", "v°", "bVI", "bvii"],
        character: "Spanish, dark, exotic",
        moods: ["mysterious", "tense", "dramatic"],
        commonProgressions: [
            { name: "Andalusian", numerals: ["i", "bVII", "bVI", "V"] },
            { name: "Phrygian", numerals: ["i", "bII", "i", "bII"] }
        ]
    },

    lydian: {
        id: "lydian",
        name: "Lydian",
        alternateName: "Major with raised 4th",
        intervals: [0, 2, 4, 6, 7, 9, 11],
        degrees: ["1", "2", "3", "#4", "5", "6", "7"],
        chordQualities: ["major", "major", "minor", "diminished", "major", "minor", "minor"],
        seventhQualities: ["major7", "dominant7", "minor7", "half-diminished", "major7", "minor7", "minor7"],
        romanNumerals: ["I", "II", "iii", "#iv°", "V", "vi", "vii"],
        character: "Dreamy, floating, bright",
        moods: ["dreamy", "peaceful", "happy"],
        commonProgressions: [
            { name: "Lydian Float", numerals: ["I", "II"] },
            { name: "Lydian Progression", numerals: ["Imaj7", "II", "Imaj7"] }
        ]
    },

    mixolydian: {
        id: "mixolydian",
        name: "Mixolydian",
        alternateName: "Dominant Scale",
        intervals: [0, 2, 4, 5, 7, 9, 10],
        degrees: ["1", "2", "3", "4", "5", "6", "b7"],
        chordQualities: ["major", "minor", "diminished", "major", "minor", "minor", "major"],
        seventhQualities: ["dominant7", "minor7", "half-diminished", "major7", "minor7", "minor7", "major7"],
        romanNumerals: ["I", "ii", "iii°", "IV", "v", "vi", "bVII"],
        character: "Bluesy major, rock feel",
        moods: ["energetic", "happy"],
        commonProgressions: [
            { name: "Rock Mixolydian", numerals: ["I", "bVII", "IV", "I"] },
            { name: "Blues Rock", numerals: ["I7", "IV", "I7", "bVII"] }
        ]
    },

    aeolian: {
        id: "aeolian",
        name: "Aeolian",
        alternateName: "Natural Minor",
        intervals: [0, 2, 3, 5, 7, 8, 10],
        degrees: ["1", "2", "b3", "4", "5", "b6", "b7"],
        chordQualities: ["minor", "diminished", "major", "minor", "minor", "major", "major"],
        seventhQualities: ["minor7", "half-diminished", "major7", "minor7", "minor7", "major7", "dominant7"],
        romanNumerals: ["i", "ii°", "bIII", "iv", "v", "bVI", "bVII"],
        character: "Sad, dark, natural minor",
        moods: ["sad", "mysterious", "tense"],
        commonProgressions: [
            { name: "Minor Pop", numerals: ["i", "bVI", "bIII", "bVII"] },
            { name: "Sad Minor", numerals: ["i", "iv", "bVI", "V"] }
        ]
    },

    locrian: {
        id: "locrian",
        name: "Locrian",
        alternateName: "Diminished Scale",
        intervals: [0, 1, 3, 5, 6, 8, 10],
        degrees: ["1", "b2", "b3", "4", "b5", "b6", "b7"],
        chordQualities: ["diminished", "major", "minor", "minor", "major", "major", "minor"],
        seventhQualities: ["half-diminished", "major7", "minor7", "minor7", "major7", "dominant7", "minor7"],
        romanNumerals: ["i°", "bII", "biii", "iv", "bV", "bVI", "bvii"],
        character: "Unstable, tense, rarely used",
        moods: ["tense", "mysterious"],
        commonProgressions: [
            { name: "Locrian Resolution", numerals: ["i°", "bII"] }
        ]
    }
};

/**
 * Get note at interval from root
 */
function getNoteAtInterval(root, semitones) {
    const rootIndex = CHROMATIC_NOTES.indexOf(root);
    if (rootIndex === -1) {
        // Try to find enharmonic equivalent
        for (const [sharp, flat] of Object.entries(ENHARMONIC_MAP)) {
            if (flat === root) {
                return getNoteAtInterval(sharp, semitones);
            }
        }
        return null;
    }
    const noteIndex = (rootIndex + semitones) % 12;
    return CHROMATIC_NOTES[noteIndex];
}

/**
 * Get all notes in a scale
 */
function getScaleNotes(root, modeId) {
    const mode = ModeDefinitions[modeId];
    if (!mode) return [];

    return mode.intervals.map(interval => getNoteAtInterval(root, interval));
}

/**
 * Get diatonic chords for a key and mode
 */
function getDiatonicChords(root, modeId) {
    const mode = ModeDefinitions[modeId];
    if (!mode) return [];

    const scaleNotes = getScaleNotes(root, modeId);

    return scaleNotes.map((note, index) => ({
        root: note,
        quality: mode.chordQualities[index],
        seventhQuality: mode.seventhQualities[index],
        romanNumeral: mode.romanNumerals[index],
        degree: index + 1
    }));
}

/**
 * Get mode definition by ID
 */
function getModeDefinition(modeId) {
    return ModeDefinitions[modeId] || null;
}

/**
 * Get all mode definitions
 */
function getAllModeDefinitions() {
    return Object.values(ModeDefinitions);
}

/**
 * Format note with enharmonic option for display
 */
function formatNoteForDisplay(note, preferFlats = false) {
    if (preferFlats && ENHARMONIC_MAP[note]) {
        return ENHARMONIC_MAP[note];
    }
    return note;
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CHROMATIC_NOTES,
        ENHARMONIC_MAP,
        ModeDefinitions,
        getNoteAtInterval,
        getScaleNotes,
        getDiatonicChords,
        getModeDefinition,
        getAllModeDefinitions,
        formatNoteForDisplay
    };
}
