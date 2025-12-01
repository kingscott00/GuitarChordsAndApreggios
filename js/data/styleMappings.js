/**
 * Guitar Chord Explorer - Style Mappings
 * Maps musical genres to characteristic chords and progressions
 */

const StyleMappings = {
    blues: {
        id: "blues",
        name: "Blues",
        description: "12-bar patterns, shuffle feel, expressive",
        icon: "🎸",
        chordQualities: ["dominant7", "9", "13", "major", "minor7"],
        suggestedKeys: ["E", "A", "G", "C"],
        progressions: [
            {
                name: "12-Bar Blues",
                numerals: ["I7", "I7", "I7", "I7", "IV7", "IV7", "I7", "I7", "V7", "IV7", "I7", "V7"]
            },
            {
                name: "Quick Change",
                numerals: ["I7", "IV7", "I7", "I7", "IV7", "IV7", "I7", "I7", "V7", "IV7", "I7", "V7"]
            }
        ],
        voicingNotes: "Use partial voicings for rhythm, full voicings for comping",
        playingTips: "Add shuffle rhythm, use bends and slides"
    },

    jazz: {
        id: "jazz",
        name: "Jazz",
        description: "Extended harmony, sophisticated voice leading",
        icon: "🎷",
        chordQualities: ["major7", "minor7", "dominant7", "diminished7", "half-diminished"],
        suggestedKeys: ["C", "F", "Bb", "Eb"],
        progressions: [
            {
                name: "ii-V-I",
                numerals: ["ii7", "V7", "Imaj7"]
            },
            {
                name: "Rhythm Changes",
                numerals: ["Imaj7", "vi7", "ii7", "V7"]
            }
        ],
        voicingNotes: "Use shell voicings (root, 3rd, 7th) and drop 2 voicings",
        playingTips: "Focus on smooth voice leading between chords"
    },

    folk: {
        id: "folk",
        name: "Folk / Acoustic",
        description: "Open chords, singalong, storytelling",
        icon: "🪕",
        chordQualities: ["major", "minor", "sus4", "sus2", "add9"],
        suggestedKeys: ["C", "G", "D", "A", "E"],
        progressions: [
            {
                name: "Classic Folk",
                numerals: ["I", "IV", "V", "I"]
            },
            {
                name: "Storyteller",
                numerals: ["I", "V", "vi", "IV"]
            }
        ],
        voicingNotes: "Favor open position chords for resonance",
        playingTips: "Use fingerpicking patterns and strumming"
    },

    rock: {
        id: "rock",
        name: "Rock / Pop",
        description: "Power and energy, driving rhythms",
        icon: "🤘",
        chordQualities: ["major", "minor", "power", "sus4", "add9"],
        suggestedKeys: ["E", "A", "D", "G"],
        progressions: [
            {
                name: "Rock Anthem",
                numerals: ["I", "IV", "V", "V"]
            },
            {
                name: "Pop Rock",
                numerals: ["I", "V", "vi", "IV"]
            }
        ],
        voicingNotes: "Power chords for drive, full chords for dynamics",
        playingTips: "Palm muting for rhythmic control"
    },

    country: {
        id: "country",
        name: "Country",
        description: "Twangy, melodic, heartfelt",
        icon: "🤠",
        chordQualities: ["major", "dominant7", "major7", "6", "sus4"],
        suggestedKeys: ["G", "C", "D", "A", "E"],
        progressions: [
            {
                name: "Country Standard",
                numerals: ["I", "IV", "V", "I"]
            },
            {
                name: "Country Ballad",
                numerals: ["I", "vi", "IV", "V"]
            }
        ],
        voicingNotes: "Use open chords with bass runs",
        playingTips: "Hybrid picking, chicken picking techniques"
    },

    classical: {
        id: "classical",
        name: "Classical",
        description: "Proper voice leading, refined technique",
        icon: "🎻",
        chordQualities: ["major", "minor", "diminished", "augmented", "dominant7"],
        suggestedKeys: ["C", "G", "D", "A", "E", "Am", "Em"],
        progressions: [
            {
                name: "Authentic Cadence",
                numerals: ["IV", "V", "I"]
            },
            {
                name: "Circle of Fifths",
                numerals: ["I", "IV", "vii°", "iii", "vi", "ii", "V", "I"]
            }
        ],
        voicingNotes: "Focus on proper voice leading and resolution",
        playingTips: "Classical fingerstyle technique"
    },

    funk: {
        id: "funk",
        name: "Funk",
        description: "Rhythmic, percussive, groovy",
        icon: "🕺",
        chordQualities: ["dominant7", "minor7", "9", "13"],
        suggestedKeys: ["E", "A", "D"],
        progressions: [
            {
                name: "Funk Groove",
                numerals: ["i7", "IV7"]
            },
            {
                name: "One Chord Funk",
                numerals: ["I9"]
            }
        ],
        voicingNotes: "Partial voicings for tight rhythm",
        playingTips: "Muted strings, 16th note patterns, ghost notes"
    },

    bossa: {
        id: "bossa",
        name: "Bossa Nova",
        description: "Brazilian jazz, smooth, sophisticated",
        icon: "🌴",
        chordQualities: ["major7", "minor7", "dominant7", "6/9", "diminished"],
        suggestedKeys: ["C", "F", "G", "Am"],
        progressions: [
            {
                name: "Bossa Basic",
                numerals: ["Imaj7", "ii7", "V7", "Imaj7"]
            },
            {
                name: "Girl From Ipanema",
                numerals: ["Imaj7", "IVmaj7", "ii7", "V7"]
            }
        ],
        voicingNotes: "Use jazz voicings with Brazilian rhythm",
        playingTips: "Syncopated bass note patterns, thumb independence"
    }
};

/**
 * Get style mapping by ID
 */
function getStyleMapping(styleId) {
    return StyleMappings[styleId] || null;
}

/**
 * Get all style mappings as array
 */
function getAllStyleMappings() {
    return Object.values(StyleMappings);
}

/**
 * Get chord qualities for a style
 */
function getChordQualitiesForStyle(styleId) {
    const style = StyleMappings[styleId];
    return style ? style.chordQualities : [];
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        StyleMappings,
        getStyleMapping,
        getAllStyleMappings,
        getChordQualitiesForStyle
    };
}
