/**
 * Guitar Chord Explorer - Mood Mappings
 * Maps emotional qualities to chord types and characteristics
 */

const MoodMappings = {
    happy: {
        id: "happy",
        name: "Happy",
        description: "Bright, uplifting, joyful",
        icon: "☀️",
        chordQualities: ["major", "major7", "add9", "6", "sus2"],
        suggestedKeys: ["C", "G", "D", "A", "E"],
        voicingPreferences: {
            preferOpen: true,
            preferBright: true
        },
        progressions: [
            { name: "Pop", numerals: ["I", "IV", "V", "I"] },
            { name: "Feel Good", numerals: ["I", "V", "vi", "IV"] }
        ]
    },

    sad: {
        id: "sad",
        name: "Sad / Melancholic",
        description: "Somber, reflective, emotional",
        icon: "🌧️",
        chordQualities: ["minor", "minor7", "minor9"],
        suggestedKeys: ["Am", "Em", "Dm"],
        voicingPreferences: {
            preferOpen: true,
            preferDark: true
        },
        progressions: [
            { name: "Sad", numerals: ["i", "VI", "III", "VII"] },
            { name: "Reflective", numerals: ["i", "iv", "i", "V"] }
        ]
    },

    dreamy: {
        id: "dreamy",
        name: "Dreamy / Ethereal",
        description: "Floating, ambient, atmospheric",
        icon: "✨",
        chordQualities: ["major7", "add9", "sus2", "sus4", "minor7"],
        suggestedKeys: ["C", "G", "D", "F"],
        voicingPreferences: {
            preferOpen: true,
            preferExtended: true
        },
        progressions: [
            { name: "Ambient", numerals: ["Imaj7", "IVmaj7", "vi7", "V"] },
            { name: "Floaty", numerals: ["Isus2", "IV", "vi", "Vsus4"] }
        ]
    },

    tense: {
        id: "tense",
        name: "Tense / Dramatic",
        description: "Suspenseful, dark, intense",
        icon: "⚡",
        chordQualities: ["diminished", "augmented", "dominant7", "minor"],
        suggestedKeys: ["E", "A", "B"],
        voicingPreferences: {
            preferDissonant: true
        },
        progressions: [
            { name: "Dramatic", numerals: ["i", "bVI", "bVII", "i"] },
            { name: "Suspense", numerals: ["i", "iv", "V7", "i"] }
        ]
    },

    peaceful: {
        id: "peaceful",
        name: "Peaceful / Calm",
        description: "Relaxed, serene, tranquil",
        icon: "🌿",
        chordQualities: ["major", "sus2", "add9", "major7"],
        suggestedKeys: ["C", "G", "F", "D"],
        voicingPreferences: {
            preferOpen: true,
            preferSimple: true
        },
        progressions: [
            { name: "Gentle", numerals: ["I", "IV", "I", "IV"] },
            { name: "Serene", numerals: ["Imaj7", "IVmaj7", "Imaj7", "V"] }
        ]
    },

    romantic: {
        id: "romantic",
        name: "Romantic",
        description: "Warm, intimate, tender",
        icon: "💕",
        chordQualities: ["major7", "minor7", "6", "add9"],
        suggestedKeys: ["C", "G", "F", "D"],
        voicingPreferences: {
            preferWarm: true,
            preferExtended: true
        },
        progressions: [
            { name: "Love Song", numerals: ["I", "iii", "IV", "V"] },
            { name: "Intimate", numerals: ["Imaj7", "vi7", "IVmaj7", "V7"] }
        ]
    },

    energetic: {
        id: "energetic",
        name: "Energetic",
        description: "Driving, powerful, upbeat",
        icon: "🔥",
        chordQualities: ["major", "power", "dominant7", "sus4"],
        suggestedKeys: ["E", "A", "D", "G"],
        voicingPreferences: {
            preferPower: true,
            preferStrong: true
        },
        progressions: [
            { name: "Rock", numerals: ["I", "IV", "V", "V"] },
            { name: "Driving", numerals: ["I", "bVII", "IV", "I"] }
        ]
    },

    mysterious: {
        id: "mysterious",
        name: "Mysterious",
        description: "Intriguing, uncertain, enigmatic",
        icon: "🌙",
        chordQualities: ["minor", "diminished", "minor7", "sus4"],
        suggestedKeys: ["Am", "Em", "Bm"],
        voicingPreferences: {
            preferDark: true,
            preferAmbiguous: true
        },
        progressions: [
            { name: "Mystery", numerals: ["i", "bII", "i", "bVII"] },
            { name: "Enigma", numerals: ["i", "iv", "bVI", "V"] }
        ]
    }
};

/**
 * Get mood mapping by ID
 */
function getMoodMapping(moodId) {
    return MoodMappings[moodId] || null;
}

/**
 * Get all mood mappings as array
 */
function getAllMoodMappings() {
    return Object.values(MoodMappings);
}

/**
 * Get chord qualities for a mood
 */
function getChordQualitiesForMood(moodId) {
    const mood = MoodMappings[moodId];
    return mood ? mood.chordQualities : [];
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        MoodMappings,
        getMoodMapping,
        getAllMoodMappings,
        getChordQualitiesForMood
    };
}
