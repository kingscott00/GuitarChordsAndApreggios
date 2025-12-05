/**
 * Guitar Chord Explorer - Chord Data Library
 * Contains chord definitions for common guitar chords
 */

const ChordLibrary = {
    // Major Chords
    c_major_open: {
        id: "c_major_open",
        name: "C Major",
        symbol: "C",
        altSymbols: ["Cmaj"],
        root: "C",
        quality: "major",
        intervals: ["1", "3", "5"],
        notes: ["C", "E", "G"],
        frets: [-1, 3, 2, 0, 1, 0],
        fingers: [0, 3, 2, 0, 1, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["happy", "peaceful", "energetic"],
            styles: ["folk", "pop", "rock", "classical"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    d_major_open: {
        id: "d_major_open",
        name: "D Major",
        symbol: "D",
        altSymbols: ["Dmaj"],
        root: "D",
        quality: "major",
        intervals: ["1", "3", "5"],
        notes: ["D", "F#", "A"],
        frets: [-1, -1, 0, 2, 3, 2],
        fingers: [0, 0, 0, 1, 3, 2],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["happy", "energetic", "romantic"],
            styles: ["folk", "pop", "rock", "country"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    e_major_open: {
        id: "e_major_open",
        name: "E Major",
        symbol: "E",
        altSymbols: ["Emaj"],
        root: "E",
        quality: "major",
        intervals: ["1", "3", "5"],
        notes: ["E", "G#", "B"],
        frets: [0, 2, 2, 1, 0, 0],
        fingers: [0, 2, 3, 1, 0, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["happy", "energetic", "peaceful"],
            styles: ["rock", "blues", "folk", "country"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    g_major_open: {
        id: "g_major_open",
        name: "G Major",
        symbol: "G",
        altSymbols: ["Gmaj"],
        root: "G",
        quality: "major",
        intervals: ["1", "3", "5"],
        notes: ["G", "B", "D"],
        frets: [3, 2, 0, 0, 0, 3],
        fingers: [2, 1, 0, 0, 0, 3],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["happy", "energetic", "peaceful"],
            styles: ["folk", "pop", "rock", "country"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    a_major_open: {
        id: "a_major_open",
        name: "A Major",
        symbol: "A",
        altSymbols: ["Amaj"],
        root: "A",
        quality: "major",
        intervals: ["1", "3", "5"],
        notes: ["A", "C#", "E"],
        frets: [-1, 0, 2, 2, 2, 0],
        fingers: [0, 0, 1, 2, 3, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["happy", "energetic", "romantic"],
            styles: ["rock", "pop", "country", "folk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // Minor Chords
    a_minor_open: {
        id: "a_minor_open",
        name: "A Minor",
        symbol: "Am",
        altSymbols: ["Amin"],
        root: "A",
        quality: "minor",
        intervals: ["1", "b3", "5"],
        notes: ["A", "C", "E"],
        frets: [-1, 0, 2, 2, 1, 0],
        fingers: [0, 0, 2, 3, 1, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["sad", "mysterious", "peaceful"],
            styles: ["folk", "rock", "classical", "pop"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    e_minor_open: {
        id: "e_minor_open",
        name: "E Minor",
        symbol: "Em",
        altSymbols: ["Emin"],
        root: "E",
        quality: "minor",
        intervals: ["1", "b3", "5"],
        notes: ["E", "G", "B"],
        frets: [0, 2, 2, 0, 0, 0],
        fingers: [0, 2, 3, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["sad", "peaceful", "mysterious"],
            styles: ["folk", "rock", "classical", "pop"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    d_minor_open: {
        id: "d_minor_open",
        name: "D Minor",
        symbol: "Dm",
        altSymbols: ["Dmin"],
        root: "D",
        quality: "minor",
        intervals: ["1", "b3", "5"],
        notes: ["D", "F", "A"],
        frets: [-1, -1, 0, 2, 3, 1],
        fingers: [0, 0, 0, 2, 3, 1],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["sad", "mysterious", "tense"],
            styles: ["folk", "classical", "rock", "pop"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // Dominant 7th Chords
    c7_open: {
        id: "c7_open",
        name: "C Dominant 7",
        symbol: "C7",
        altSymbols: ["Cdom7"],
        root: "C",
        quality: "dominant7",
        intervals: ["1", "3", "5", "b7"],
        notes: ["C", "E", "G", "Bb"],
        frets: [-1, 3, 2, 3, 1, 0],
        fingers: [0, 3, 2, 4, 1, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["energetic", "tense"],
            styles: ["blues", "jazz", "rock"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    d7_open: {
        id: "d7_open",
        name: "D Dominant 7",
        symbol: "D7",
        altSymbols: ["Ddom7"],
        root: "D",
        quality: "dominant7",
        intervals: ["1", "3", "5", "b7"],
        notes: ["D", "F#", "A", "C"],
        frets: [-1, -1, 0, 2, 1, 2],
        fingers: [0, 0, 0, 2, 1, 3],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["energetic", "happy"],
            styles: ["blues", "country", "folk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    e7_open: {
        id: "e7_open",
        name: "E Dominant 7",
        symbol: "E7",
        altSymbols: ["Edom7"],
        root: "E",
        quality: "dominant7",
        intervals: ["1", "3", "5", "b7"],
        notes: ["E", "G#", "B", "D"],
        frets: [0, 2, 0, 1, 0, 0],
        fingers: [0, 2, 0, 1, 0, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["energetic", "happy", "tense"],
            styles: ["blues", "rock", "country"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    g7_open: {
        id: "g7_open",
        name: "G Dominant 7",
        symbol: "G7",
        altSymbols: ["Gdom7"],
        root: "G",
        quality: "dominant7",
        intervals: ["1", "3", "5", "b7"],
        notes: ["G", "B", "D", "F"],
        frets: [3, 2, 0, 0, 0, 1],
        fingers: [3, 2, 0, 0, 0, 1],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["energetic", "happy"],
            styles: ["blues", "jazz", "folk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    a7_open: {
        id: "a7_open",
        name: "A Dominant 7",
        symbol: "A7",
        altSymbols: ["Adom7"],
        root: "A",
        quality: "dominant7",
        intervals: ["1", "3", "5", "b7"],
        notes: ["A", "C#", "E", "G"],
        frets: [-1, 0, 2, 0, 2, 0],
        fingers: [0, 0, 1, 0, 2, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["energetic", "happy", "tense"],
            styles: ["blues", "rock", "country"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    b7_open: {
        id: "b7_open",
        name: "B Dominant 7",
        symbol: "B7",
        altSymbols: ["Bdom7"],
        root: "B",
        quality: "dominant7",
        intervals: ["1", "3", "5", "b7"],
        notes: ["B", "D#", "F#", "A"],
        frets: [-1, 2, 1, 2, 0, 2],
        fingers: [0, 2, 1, 3, 0, 4],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["tense", "energetic"],
            styles: ["blues", "rock", "country"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // Major 7th Chords
    cmaj7_open: {
        id: "cmaj7_open",
        name: "C Major 7",
        symbol: "Cmaj7",
        altSymbols: ["CΔ7", "CM7"],
        root: "C",
        quality: "major7",
        intervals: ["1", "3", "5", "7"],
        notes: ["C", "E", "G", "B"],
        frets: [-1, 3, 2, 0, 0, 0],
        fingers: [0, 3, 2, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "pop", "bossa"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    dmaj7_open: {
        id: "dmaj7_open",
        name: "D Major 7",
        symbol: "Dmaj7",
        altSymbols: ["DΔ7", "DM7"],
        root: "D",
        quality: "major7",
        intervals: ["1", "3", "5", "7"],
        notes: ["D", "F#", "A", "C#"],
        frets: [-1, -1, 0, 2, 2, 2],
        fingers: [0, 0, 0, 1, 1, 1],
        barre: { fret: 2, fromString: 1, toString: 3 },
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["dreamy", "romantic", "happy"],
            styles: ["jazz", "pop", "folk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    fmaj7_open: {
        id: "fmaj7_open",
        name: "F Major 7",
        symbol: "Fmaj7",
        altSymbols: ["FΔ7", "FM7"],
        root: "F",
        quality: "major7",
        intervals: ["1", "3", "5", "7"],
        notes: ["F", "A", "C", "E"],
        frets: [-1, -1, 3, 2, 1, 0],
        fingers: [0, 0, 3, 2, 1, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "pop", "bossa"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    gmaj7_open: {
        id: "gmaj7_open",
        name: "G Major 7",
        symbol: "Gmaj7",
        altSymbols: ["GΔ7", "GM7"],
        root: "G",
        quality: "major7",
        intervals: ["1", "3", "5", "7"],
        notes: ["G", "B", "D", "F#"],
        frets: [3, 2, 0, 0, 0, 2],
        fingers: [2, 1, 0, 0, 0, 3],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "pop", "folk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    amaj7_open: {
        id: "amaj7_open",
        name: "A Major 7",
        symbol: "Amaj7",
        altSymbols: ["AΔ7", "AM7"],
        root: "A",
        quality: "major7",
        intervals: ["1", "3", "5", "7"],
        notes: ["A", "C#", "E", "G#"],
        frets: [-1, 0, 2, 1, 2, 0],
        fingers: [0, 0, 2, 1, 3, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["dreamy", "romantic", "happy"],
            styles: ["jazz", "pop", "bossa"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // Minor 7th Chords
    am7_open: {
        id: "am7_open",
        name: "A Minor 7",
        symbol: "Am7",
        altSymbols: ["Amin7", "A-7"],
        root: "A",
        quality: "minor7",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["A", "C", "E", "G"],
        frets: [-1, 0, 2, 0, 1, 0],
        fingers: [0, 0, 2, 0, 1, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "pop", "folk", "bossa"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    dm7_open: {
        id: "dm7_open",
        name: "D Minor 7",
        symbol: "Dm7",
        altSymbols: ["Dmin7", "D-7"],
        root: "D",
        quality: "minor7",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["D", "F", "A", "C"],
        frets: [-1, -1, 0, 2, 1, 1],
        fingers: [0, 0, 0, 2, 1, 1],
        barre: { fret: 1, fromString: 1, toString: 2 },
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["sad", "dreamy", "mysterious"],
            styles: ["jazz", "pop", "bossa"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    em7_open: {
        id: "em7_open",
        name: "E Minor 7",
        symbol: "Em7",
        altSymbols: ["Emin7", "E-7"],
        root: "E",
        quality: "minor7",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["E", "G", "B", "D"],
        frets: [0, 2, 0, 0, 0, 0],
        fingers: [0, 2, 0, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["sad", "peaceful", "dreamy"],
            styles: ["jazz", "folk", "pop"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // F Major (Barre Chord)
    f_major_barre: {
        id: "f_major_barre",
        name: "F Major",
        symbol: "F",
        altSymbols: ["Fmaj"],
        root: "F",
        quality: "major",
        intervals: ["1", "3", "5"],
        notes: ["F", "A", "C"],
        frets: [1, 3, 3, 2, 1, 1],
        fingers: [1, 3, 4, 2, 1, 1],
        barre: { fret: 1, fromString: 0, toString: 5 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["happy", "energetic"],
            styles: ["rock", "pop", "classical"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // B Minor (Barre Chord)
    b_minor_barre: {
        id: "b_minor_barre",
        name: "B Minor",
        symbol: "Bm",
        altSymbols: ["Bmin"],
        root: "B",
        quality: "minor",
        intervals: ["1", "b3", "5"],
        notes: ["B", "D", "F#"],
        frets: [-1, 2, 4, 4, 3, 2],
        fingers: [0, 1, 3, 4, 2, 1],
        barre: { fret: 2, fromString: 1, toString: 5 },
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["sad", "mysterious", "tense"],
            styles: ["rock", "pop", "folk"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // Suspended Chords
    dsus2_open: {
        id: "dsus2_open",
        name: "D Suspended 2",
        symbol: "Dsus2",
        altSymbols: ["D2"],
        root: "D",
        quality: "sus2",
        intervals: ["1", "2", "5"],
        notes: ["D", "E", "A"],
        frets: [-1, -1, 0, 2, 3, 0],
        fingers: [0, 0, 0, 1, 2, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["dreamy", "peaceful"],
            styles: ["folk", "pop", "rock"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    dsus4_open: {
        id: "dsus4_open",
        name: "D Suspended 4",
        symbol: "Dsus4",
        altSymbols: ["D4"],
        root: "D",
        quality: "sus4",
        intervals: ["1", "4", "5"],
        notes: ["D", "G", "A"],
        frets: [-1, -1, 0, 2, 3, 3],
        fingers: [0, 0, 0, 1, 2, 3],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["dreamy", "tense"],
            styles: ["folk", "pop", "rock"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    asus2_open: {
        id: "asus2_open",
        name: "A Suspended 2",
        symbol: "Asus2",
        altSymbols: ["A2"],
        root: "A",
        quality: "sus2",
        intervals: ["1", "2", "5"],
        notes: ["A", "B", "E"],
        frets: [-1, 0, 2, 2, 0, 0],
        fingers: [0, 0, 1, 2, 0, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["dreamy", "peaceful"],
            styles: ["folk", "pop", "rock"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    asus4_open: {
        id: "asus4_open",
        name: "A Suspended 4",
        symbol: "Asus4",
        altSymbols: ["A4"],
        root: "A",
        quality: "sus4",
        intervals: ["1", "4", "5"],
        notes: ["A", "D", "E"],
        frets: [-1, 0, 2, 2, 3, 0],
        fingers: [0, 0, 1, 2, 3, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["dreamy", "tense"],
            styles: ["folk", "pop", "rock"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    esus4_open: {
        id: "esus4_open",
        name: "E Suspended 4",
        symbol: "Esus4",
        altSymbols: ["E4"],
        root: "E",
        quality: "sus4",
        intervals: ["1", "4", "5"],
        notes: ["E", "A", "B"],
        frets: [0, 2, 2, 2, 0, 0],
        fingers: [0, 2, 3, 4, 0, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["dreamy", "tense"],
            styles: ["folk", "rock", "pop"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // Additional Voicings - C Major
    c_major_barre_a: {
        id: "c_major_barre_a",
        name: "C Major",
        symbol: "C",
        altSymbols: ["Cmaj"],
        root: "C",
        quality: "major",
        voicingType: "barre",
        voicingDescription: "A-shape barre",
        intervals: ["1", "3", "5"],
        notes: ["C", "E", "G"],
        frets: [-1, 3, 5, 5, 5, 3],
        fingers: [0, 1, 2, 3, 4, 1],
        barre: { fret: 3, fromString: 1, toString: 5 },
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["happy", "peaceful", "energetic"],
            styles: ["rock", "pop", "jazz"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    c_major_barre_e: {
        id: "c_major_barre_e",
        name: "C Major",
        symbol: "C",
        altSymbols: ["Cmaj"],
        root: "C",
        quality: "major",
        voicingType: "barre",
        voicingDescription: "E-shape barre",
        intervals: ["1", "3", "5"],
        notes: ["C", "E", "G"],
        frets: [8, 10, 10, 9, 8, 8],
        fingers: [1, 3, 4, 2, 1, 1],
        barre: { fret: 8, fromString: 0, toString: 5 },
        position: 8,
        difficulty: 3,
        categories: {
            moods: ["happy", "peaceful", "energetic"],
            styles: ["rock", "pop"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // Additional Voicings - G Major
    g_major_barre: {
        id: "g_major_barre",
        name: "G Major",
        symbol: "G",
        altSymbols: ["Gmaj"],
        root: "G",
        quality: "major",
        voicingType: "barre",
        voicingDescription: "E-shape barre",
        intervals: ["1", "3", "5"],
        notes: ["G", "B", "D"],
        frets: [3, 5, 5, 4, 3, 3],
        fingers: [1, 3, 4, 2, 1, 1],
        barre: { fret: 3, fromString: 0, toString: 5 },
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["happy", "energetic", "peaceful"],
            styles: ["rock", "pop", "folk"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // Additional Voicings - D Major
    d_major_barre: {
        id: "d_major_barre",
        name: "D Major",
        symbol: "D",
        altSymbols: ["Dmaj"],
        root: "D",
        quality: "major",
        voicingType: "barre",
        voicingDescription: "A-shape barre",
        intervals: ["1", "3", "5"],
        notes: ["D", "F#", "A"],
        frets: [-1, 5, 7, 7, 7, 5],
        fingers: [0, 1, 2, 3, 4, 1],
        barre: { fret: 5, fromString: 1, toString: 5 },
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["happy", "energetic", "romantic"],
            styles: ["rock", "pop", "country"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // Additional Voicings - A Major
    a_major_barre: {
        id: "a_major_barre",
        name: "A Major",
        symbol: "A",
        altSymbols: ["Amaj"],
        root: "A",
        quality: "major",
        voicingType: "barre",
        voicingDescription: "E-shape barre",
        intervals: ["1", "3", "5"],
        notes: ["A", "C#", "E"],
        frets: [5, 7, 7, 6, 5, 5],
        fingers: [1, 3, 4, 2, 1, 1],
        barre: { fret: 5, fromString: 0, toString: 5 },
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["happy", "energetic", "romantic"],
            styles: ["rock", "pop", "country"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // Additional Voicings - E Major
    e_major_barre_a: {
        id: "e_major_barre_a",
        name: "E Major",
        symbol: "E",
        altSymbols: ["Emaj"],
        root: "E",
        quality: "major",
        voicingType: "barre",
        voicingDescription: "A-shape barre at 7th fret",
        intervals: ["1", "3", "5"],
        notes: ["E", "G#", "B"],
        frets: [-1, 7, 9, 9, 9, 7],
        fingers: [0, 1, 2, 3, 4, 1],
        barre: { fret: 7, fromString: 1, toString: 5 },
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["happy", "energetic", "peaceful"],
            styles: ["rock", "pop"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // Additional Voicings - A Minor
    a_minor_barre: {
        id: "a_minor_barre",
        name: "A Minor",
        symbol: "Am",
        altSymbols: ["Amin"],
        root: "A",
        quality: "minor",
        voicingType: "barre",
        voicingDescription: "E-shape barre",
        intervals: ["1", "b3", "5"],
        notes: ["A", "C", "E"],
        frets: [5, 7, 7, 5, 5, 5],
        fingers: [1, 3, 4, 1, 1, 1],
        barre: { fret: 5, fromString: 0, toString: 5 },
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["sad", "mysterious", "peaceful"],
            styles: ["rock", "pop", "folk"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // Additional Voicings - E Minor
    e_minor_barre: {
        id: "e_minor_barre",
        name: "E Minor",
        symbol: "Em",
        altSymbols: ["Emin"],
        root: "E",
        quality: "minor",
        voicingType: "barre",
        voicingDescription: "Am-shape barre at 7th fret",
        intervals: ["1", "b3", "5"],
        notes: ["E", "G", "B"],
        frets: [-1, 7, 9, 9, 8, 7],
        fingers: [0, 1, 3, 4, 2, 1],
        barre: { fret: 7, fromString: 1, toString: 5 },
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["sad", "peaceful", "mysterious"],
            styles: ["rock", "pop"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // Additional Voicings - D Minor
    d_minor_barre: {
        id: "d_minor_barre",
        name: "D Minor",
        symbol: "Dm",
        altSymbols: ["Dmin"],
        root: "D",
        quality: "minor",
        voicingType: "barre",
        voicingDescription: "Am-shape barre at 5th fret",
        intervals: ["1", "b3", "5"],
        notes: ["D", "F", "A"],
        frets: [-1, 5, 7, 7, 6, 5],
        fingers: [0, 1, 3, 4, 2, 1],
        barre: { fret: 5, fromString: 1, toString: 5 },
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["sad", "mysterious", "tense"],
            styles: ["rock", "classical", "pop"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // Jazz Voicings
    cmaj7_jazz: {
        id: "cmaj7_jazz",
        name: "C Major 7",
        symbol: "Cmaj7",
        altSymbols: ["CΔ7", "CM7"],
        root: "C",
        quality: "major7",
        voicingType: "jazz",
        voicingDescription: "Drop 2 voicing",
        intervals: ["1", "3", "5", "7"],
        notes: ["C", "E", "G", "B"],
        frets: [-1, 3, 5, 4, 5, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        barre: null,
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    am7_barre: {
        id: "am7_barre",
        name: "A Minor 7",
        symbol: "Am7",
        altSymbols: ["Amin7", "A-7"],
        root: "A",
        quality: "minor7",
        voicingType: "barre",
        voicingDescription: "Em7-shape barre",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["A", "C", "E", "G"],
        frets: [5, 7, 5, 5, 5, 5],
        fingers: [1, 3, 1, 1, 1, 1],
        barre: { fret: 5, fromString: 0, toString: 5 },
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "pop", "bossa"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    dm7_barre: {
        id: "dm7_barre",
        name: "D Minor 7",
        symbol: "Dm7",
        altSymbols: ["Dmin7", "D-7"],
        root: "D",
        quality: "minor7",
        voicingType: "barre",
        voicingDescription: "Am7-shape barre",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["D", "F", "A", "C"],
        frets: [-1, 5, 7, 5, 6, 5],
        fingers: [0, 1, 3, 1, 2, 1],
        barre: { fret: 5, fromString: 1, toString: 5 },
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "mysterious"],
            styles: ["jazz", "pop", "bossa"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // Add 9 chords
    cadd9_open: {
        id: "cadd9_open",
        name: "C Add 9",
        symbol: "Cadd9",
        altSymbols: ["C2"],
        root: "C",
        quality: "add9",
        intervals: ["1", "3", "5", "9"],
        notes: ["C", "E", "G", "D"],
        frets: [-1, 3, 2, 0, 3, 0],
        fingers: [0, 2, 1, 0, 3, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["dreamy", "happy", "peaceful"],
            styles: ["pop", "rock", "folk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    gadd9_open: {
        id: "gadd9_open",
        name: "G Add 9",
        symbol: "Gadd9",
        altSymbols: ["G2"],
        root: "G",
        quality: "add9",
        intervals: ["1", "3", "5", "9"],
        notes: ["G", "B", "D", "A"],
        frets: [3, 2, 0, 2, 0, 3],
        fingers: [2, 1, 0, 3, 0, 4],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["dreamy", "happy", "peaceful"],
            styles: ["pop", "rock", "folk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // Power Chords
    e5_power: {
        id: "e5_power",
        name: "E5 Power Chord",
        symbol: "E5",
        altSymbols: ["E(no3)"],
        root: "E",
        quality: "power",
        intervals: ["1", "5"],
        notes: ["E", "B"],
        frets: [0, 2, 2, -1, -1, -1],
        fingers: [0, 1, 2, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["energetic", "tense"],
            styles: ["rock", "punk", "metal"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    a5_power: {
        id: "a5_power",
        name: "A5 Power Chord",
        symbol: "A5",
        altSymbols: ["A(no3)"],
        root: "A",
        quality: "power",
        intervals: ["1", "5"],
        notes: ["A", "E"],
        frets: [-1, 0, 2, 2, -1, -1],
        fingers: [0, 0, 1, 2, 0, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["energetic", "tense"],
            styles: ["rock", "punk", "metal"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    g5_power: {
        id: "g5_power",
        name: "G5 Power Chord",
        symbol: "G5",
        altSymbols: ["G(no3)"],
        root: "G",
        quality: "power",
        intervals: ["1", "5"],
        notes: ["G", "D"],
        frets: [3, 5, 5, -1, -1, -1],
        fingers: [1, 3, 4, 0, 0, 0],
        barre: null,
        position: 3,
        difficulty: 2,
        categories: {
            moods: ["energetic", "tense"],
            styles: ["rock", "punk", "metal"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    d5_power: {
        id: "d5_power",
        name: "D5 Power Chord",
        symbol: "D5",
        altSymbols: ["D(no3)"],
        root: "D",
        quality: "power",
        intervals: ["1", "5"],
        notes: ["D", "A"],
        frets: [-1, 5, 7, 7, -1, -1],
        fingers: [0, 1, 3, 4, 0, 0],
        barre: null,
        position: 5,
        difficulty: 2,
        categories: {
            moods: ["energetic", "tense"],
            styles: ["rock", "punk", "metal"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // Diminished Chords
    bdim_open: {
        id: "bdim_open",
        name: "B Diminished",
        symbol: "Bdim",
        altSymbols: ["B°"],
        root: "B",
        quality: "diminished",
        intervals: ["1", "b3", "b5"],
        notes: ["B", "D", "F"],
        frets: [-1, 2, 3, 4, 3, -1],
        fingers: [0, 1, 2, 4, 3, 0],
        barre: null,
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["tense", "mysterious"],
            styles: ["jazz", "classical"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // Augmented Chords
    caug_open: {
        id: "caug_open",
        name: "C Augmented",
        symbol: "Caug",
        altSymbols: ["C+"],
        root: "C",
        quality: "augmented",
        intervals: ["1", "3", "#5"],
        notes: ["C", "E", "G#"],
        frets: [-1, 3, 2, 1, 1, 0],
        fingers: [0, 4, 3, 1, 2, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["tense", "mysterious", "dreamy"],
            styles: ["jazz", "classical"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // ===== 3-NOTE TRIAD VOICINGS =====
    // Major Triads - 3-note voicings
    c_major_3note_top: {
        id: "c_major_3note_top",
        name: "C Major",
        symbol: "C",
        altSymbols: ["Cmaj"],
        root: "C",
        quality: "major",
        voicingType: "triad",
        voicingDescription: "3-note voicing on strings 4-3-2",
        intervals: ["1", "3", "5"],
        notes: ["C", "E", "G"],
        frets: [-1, -1, 10, 9, 8, -1],
        fingers: [0, 0, 4, 3, 2, 0],
        barre: null,
        position: 8,
        difficulty: 2,
        categories: {
            moods: ["happy", "peaceful"],
            styles: ["jazz", "pop", "folk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    c_major_3note_mid: {
        id: "c_major_3note_mid",
        name: "C Major",
        symbol: "C",
        altSymbols: ["Cmaj"],
        root: "C",
        quality: "major",
        voicingType: "triad",
        voicingDescription: "3-note voicing on strings 5-3-2",
        intervals: ["1", "5", "3"],
        notes: ["C", "G", "E"],
        frets: [-1, 3, -1, 5, 5, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 3,
        difficulty: 2,
        categories: {
            moods: ["happy", "peaceful"],
            styles: ["jazz", "fingerstyle"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    d_major_3note_top: {
        id: "d_major_3note_top",
        name: "D Major",
        symbol: "D",
        altSymbols: ["Dmaj"],
        root: "D",
        quality: "major",
        voicingType: "triad",
        voicingDescription: "3-note voicing on strings 4-3-2",
        intervals: ["1", "3", "5"],
        notes: ["D", "F#", "A"],
        frets: [-1, -1, 0, 2, 2, -1],
        fingers: [0, 0, 0, 1, 2, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["happy", "energetic"],
            styles: ["folk", "jazz", "pop"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    e_major_3note_top: {
        id: "e_major_3note_top",
        name: "E Major",
        symbol: "E",
        altSymbols: ["Emaj"],
        root: "E",
        quality: "major",
        voicingType: "triad",
        voicingDescription: "3-note voicing on strings 4-3-2",
        intervals: ["1", "3", "5"],
        notes: ["E", "G#", "B"],
        frets: [-1, -1, 2, 1, 0, -1],
        fingers: [0, 0, 2, 1, 0, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["happy", "energetic"],
            styles: ["rock", "blues", "jazz"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    f_major_3note_top: {
        id: "f_major_3note_top",
        name: "F Major",
        symbol: "F",
        altSymbols: ["Fmaj"],
        root: "F",
        quality: "major",
        voicingType: "triad",
        voicingDescription: "3-note voicing on strings 4-3-2",
        intervals: ["1", "3", "5"],
        notes: ["F", "A", "C"],
        frets: [-1, -1, 3, 2, 1, -1],
        fingers: [0, 0, 3, 2, 1, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["happy", "peaceful"],
            styles: ["pop", "jazz", "folk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    g_major_3note_top: {
        id: "g_major_3note_top",
        name: "G Major",
        symbol: "G",
        altSymbols: ["Gmaj"],
        root: "G",
        quality: "major",
        voicingType: "triad",
        voicingDescription: "3-note voicing on strings 4-3-2",
        intervals: ["1", "3", "5"],
        notes: ["G", "B", "D"],
        frets: [-1, -1, 5, 4, 3, -1],
        fingers: [0, 0, 4, 3, 2, 0],
        barre: null,
        position: 3,
        difficulty: 2,
        categories: {
            moods: ["happy", "energetic"],
            styles: ["folk", "jazz", "pop"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    a_major_3note_top: {
        id: "a_major_3note_top",
        name: "A Major",
        symbol: "A",
        altSymbols: ["Amaj"],
        root: "A",
        quality: "major",
        voicingType: "triad",
        voicingDescription: "3-note voicing on strings 4-3-2",
        intervals: ["1", "3", "5"],
        notes: ["A", "C#", "E"],
        frets: [-1, -1, 2, 2, 2, -1],
        fingers: [0, 0, 1, 2, 3, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["happy", "energetic"],
            styles: ["rock", "pop", "jazz"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    b_major_3note_top: {
        id: "b_major_3note_top",
        name: "B Major",
        symbol: "B",
        altSymbols: ["Bmaj"],
        root: "B",
        quality: "major",
        voicingType: "triad",
        voicingDescription: "3-note voicing on strings 4-3-2",
        intervals: ["1", "3", "5"],
        notes: ["B", "D#", "F#"],
        frets: [-1, -1, 4, 4, 4, -1],
        fingers: [0, 0, 1, 2, 3, 0],
        barre: null,
        position: 4,
        difficulty: 2,
        categories: {
            moods: ["happy", "energetic"],
            styles: ["rock", "pop", "jazz"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // Minor Triads - 3-note voicings
    c_minor_3note_top: {
        id: "c_minor_3note_top",
        name: "C Minor",
        symbol: "Cm",
        altSymbols: ["Cmin"],
        root: "C",
        quality: "minor",
        voicingType: "triad",
        voicingDescription: "3-note voicing on strings 4-3-2",
        intervals: ["1", "b3", "5"],
        notes: ["C", "Eb", "G"],
        frets: [-1, -1, 5, 5, 4, -1],
        fingers: [0, 0, 2, 3, 1, 0],
        barre: null,
        position: 4,
        difficulty: 2,
        categories: {
            moods: ["sad", "mysterious"],
            styles: ["jazz", "rock", "classical"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    d_minor_3note_top: {
        id: "d_minor_3note_top",
        name: "D Minor",
        symbol: "Dm",
        altSymbols: ["Dmin"],
        root: "D",
        quality: "minor",
        voicingType: "triad",
        voicingDescription: "3-note voicing on strings 4-3-2",
        intervals: ["1", "b3", "5"],
        notes: ["D", "F", "A"],
        frets: [-1, -1, 0, 2, 3, -1],
        fingers: [0, 0, 0, 1, 2, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["sad", "mysterious"],
            styles: ["folk", "jazz", "classical"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    e_minor_3note_top: {
        id: "e_minor_3note_top",
        name: "E Minor",
        symbol: "Em",
        altSymbols: ["Emin"],
        root: "E",
        quality: "minor",
        voicingType: "triad",
        voicingDescription: "3-note voicing on strings 4-3-2",
        intervals: ["1", "b3", "5"],
        notes: ["E", "G", "B"],
        frets: [-1, -1, 2, 0, 0, -1],
        fingers: [0, 0, 1, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["sad", "peaceful"],
            styles: ["folk", "rock", "jazz"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    f_minor_3note_top: {
        id: "f_minor_3note_top",
        name: "F Minor",
        symbol: "Fm",
        altSymbols: ["Fmin"],
        root: "F",
        quality: "minor",
        voicingType: "triad",
        voicingDescription: "3-note voicing on strings 4-3-2",
        intervals: ["1", "b3", "5"],
        notes: ["F", "Ab", "C"],
        frets: [-1, -1, 3, 1, 1, -1],
        fingers: [0, 0, 3, 1, 2, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["sad", "mysterious"],
            styles: ["jazz", "classical", "rock"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    g_minor_3note_top: {
        id: "g_minor_3note_top",
        name: "G Minor",
        symbol: "Gm",
        altSymbols: ["Gmin"],
        root: "G",
        quality: "minor",
        voicingType: "triad",
        voicingDescription: "3-note voicing on strings 4-3-2",
        intervals: ["1", "b3", "5"],
        notes: ["G", "Bb", "D"],
        frets: [-1, -1, 5, 3, 3, -1],
        fingers: [0, 0, 3, 1, 2, 0],
        barre: null,
        position: 3,
        difficulty: 2,
        categories: {
            moods: ["sad", "mysterious"],
            styles: ["folk", "jazz", "classical"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    a_minor_3note_top: {
        id: "a_minor_3note_top",
        name: "A Minor",
        symbol: "Am",
        altSymbols: ["Amin"],
        root: "A",
        quality: "minor",
        voicingType: "triad",
        voicingDescription: "3-note voicing on strings 4-3-2",
        intervals: ["1", "b3", "5"],
        notes: ["A", "C", "E"],
        frets: [-1, -1, 2, 2, 1, -1],
        fingers: [0, 0, 2, 3, 1, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["sad", "peaceful"],
            styles: ["folk", "rock", "jazz"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    b_minor_3note_top: {
        id: "b_minor_3note_top",
        name: "B Minor",
        symbol: "Bm",
        altSymbols: ["Bmin"],
        root: "B",
        quality: "minor",
        voicingType: "triad",
        voicingDescription: "3-note voicing on strings 4-3-2",
        intervals: ["1", "b3", "5"],
        notes: ["B", "D", "F#"],
        frets: [-1, -1, 4, 4, 3, -1],
        fingers: [0, 0, 3, 4, 2, 0],
        barre: null,
        position: 3,
        difficulty: 2,
        categories: {
            moods: ["sad", "mysterious"],
            styles: ["rock", "folk", "jazz"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // Diminished Triads - 3-note voicings
    c_dim_3note: {
        id: "c_dim_3note",
        name: "C Diminished",
        symbol: "Cdim",
        altSymbols: ["C°"],
        root: "C",
        quality: "diminished",
        voicingType: "triad",
        voicingDescription: "3-note voicing on strings 4-3-2",
        intervals: ["1", "b3", "b5"],
        notes: ["C", "Eb", "Gb"],
        frets: [-1, -1, 5, 4, 4, -1],
        fingers: [0, 0, 3, 1, 2, 0],
        barre: null,
        position: 4,
        difficulty: 2,
        categories: {
            moods: ["tense", "mysterious"],
            styles: ["jazz", "classical"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    d_dim_3note: {
        id: "d_dim_3note",
        name: "D Diminished",
        symbol: "Ddim",
        altSymbols: ["D°"],
        root: "D",
        quality: "diminished",
        voicingType: "triad",
        voicingDescription: "3-note voicing on strings 4-3-2",
        intervals: ["1", "b3", "b5"],
        notes: ["D", "F", "Ab"],
        frets: [-1, -1, 0, 1, 0, -1],
        fingers: [0, 0, 0, 1, 0, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["tense", "mysterious"],
            styles: ["jazz", "classical"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    e_dim_3note: {
        id: "e_dim_3note",
        name: "E Diminished",
        symbol: "Edim",
        altSymbols: ["E°"],
        root: "E",
        quality: "diminished",
        voicingType: "triad",
        voicingDescription: "3-note voicing on strings 5-4-3",
        intervals: ["1", "b3", "b5"],
        notes: ["E", "G", "Bb"],
        frets: [-1, 7, 8, 7, -1, -1],
        fingers: [0, 1, 3, 2, 0, 0],
        barre: null,
        position: 7,
        difficulty: 2,
        categories: {
            moods: ["tense", "mysterious"],
            styles: ["jazz", "classical"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    f_dim_3note: {
        id: "f_dim_3note",
        name: "F Diminished",
        symbol: "Fdim",
        altSymbols: ["F°"],
        root: "F",
        quality: "diminished",
        voicingType: "triad",
        voicingDescription: "3-note voicing on strings 4-3-2",
        intervals: ["1", "b3", "b5"],
        notes: ["F", "Ab", "Cb"],
        frets: [-1, -1, 3, 1, 0, -1],
        fingers: [0, 0, 3, 1, 0, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["tense", "mysterious"],
            styles: ["jazz", "classical"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    g_dim_3note: {
        id: "g_dim_3note",
        name: "G Diminished",
        symbol: "Gdim",
        altSymbols: ["G°"],
        root: "G",
        quality: "diminished",
        voicingType: "triad",
        voicingDescription: "3-note voicing on strings 4-3-2",
        intervals: ["1", "b3", "b5"],
        notes: ["G", "Bb", "Db"],
        frets: [-1, -1, 5, 3, 2, -1],
        fingers: [0, 0, 4, 2, 1, 0],
        barre: null,
        position: 2,
        difficulty: 2,
        categories: {
            moods: ["tense", "mysterious"],
            styles: ["jazz", "classical"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    a_dim_3note: {
        id: "a_dim_3note",
        name: "A Diminished",
        symbol: "Adim",
        altSymbols: ["A°"],
        root: "A",
        quality: "diminished",
        voicingType: "triad",
        voicingDescription: "3-note voicing on strings 4-3-2",
        intervals: ["1", "b3", "b5"],
        notes: ["A", "C", "Eb"],
        frets: [-1, -1, 1, 2, 1, -1],
        fingers: [0, 0, 1, 3, 2, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["tense", "mysterious"],
            styles: ["jazz", "classical"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // Augmented Triads - 3-note voicings
    e_aug_3note: {
        id: "e_aug_3note",
        name: "E Augmented",
        symbol: "Eaug",
        altSymbols: ["E+"],
        root: "E",
        quality: "augmented",
        voicingType: "triad",
        voicingDescription: "3-note voicing on strings 4-3-2",
        intervals: ["1", "3", "#5"],
        notes: ["E", "G#", "B#"],
        frets: [-1, -1, 2, 1, 1, -1],
        fingers: [0, 0, 3, 1, 2, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["tense", "mysterious", "dreamy"],
            styles: ["jazz", "classical"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    g_aug_3note: {
        id: "g_aug_3note",
        name: "G Augmented",
        symbol: "Gaug",
        altSymbols: ["G+"],
        root: "G",
        quality: "augmented",
        voicingType: "triad",
        voicingDescription: "3-note voicing on strings 4-3-2",
        intervals: ["1", "3", "#5"],
        notes: ["G", "B", "D#"],
        frets: [-1, -1, 5, 4, 4, -1],
        fingers: [0, 0, 4, 2, 3, 0],
        barre: null,
        position: 4,
        difficulty: 2,
        categories: {
            moods: ["tense", "mysterious", "dreamy"],
            styles: ["jazz", "classical"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // ===== HALF-DIMINISHED & DIMINISHED 7TH CHORDS =====
    am7b5_open: {
        id: "am7b5_open",
        name: "A Half-Diminished 7",
        symbol: "Am7b5",
        altSymbols: ["Aø7", "A-7b5"],
        root: "A",
        quality: "halfdiminished7",
        intervals: ["1", "b3", "b5", "b7"],
        notes: ["A", "C", "Eb", "G"],
        frets: [-1, 0, 1, 0, 1, 0],
        fingers: [0, 0, 1, 0, 2, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["tense", "mysterious", "sad"],
            styles: ["jazz", "classical"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    bm7b5_open: {
        id: "bm7b5_open",
        name: "B Half-Diminished 7",
        symbol: "Bm7b5",
        altSymbols: ["Bø7", "B-7b5"],
        root: "B",
        quality: "halfdiminished7",
        intervals: ["1", "b3", "b5", "b7"],
        notes: ["B", "D", "F", "A"],
        frets: [-1, 2, 3, 2, 3, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        barre: null,
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["tense", "mysterious", "sad"],
            styles: ["jazz", "classical"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    dm7b5_jazz: {
        id: "dm7b5_jazz",
        name: "D Half-Diminished 7",
        symbol: "Dm7b5",
        altSymbols: ["Dø7", "D-7b5"],
        root: "D",
        quality: "halfdiminished7",
        intervals: ["1", "b3", "b5", "b7"],
        notes: ["D", "F", "Ab", "C"],
        frets: [-1, -1, 0, 1, 1, 1],
        fingers: [0, 0, 0, 1, 2, 3],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["tense", "mysterious", "sad"],
            styles: ["jazz", "classical"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    em7b5_open: {
        id: "em7b5_open",
        name: "E Half-Diminished 7",
        symbol: "Em7b5",
        altSymbols: ["Eø7", "E-7b5"],
        root: "E",
        quality: "halfdiminished7",
        intervals: ["1", "b3", "b5", "b7"],
        notes: ["E", "G", "Bb", "D"],
        frets: [0, 1, 0, 0, 3, 0],
        fingers: [0, 1, 0, 0, 3, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["tense", "mysterious", "sad"],
            styles: ["jazz", "classical"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // Diminished 7th Chords
    bdim7_open: {
        id: "bdim7_open",
        name: "B Diminished 7",
        symbol: "Bdim7",
        altSymbols: ["B°7"],
        root: "B",
        quality: "diminished7",
        intervals: ["1", "b3", "b5", "bb7"],
        notes: ["B", "D", "F", "Ab"],
        frets: [-1, 2, 3, 1, 3, -1],
        fingers: [0, 2, 4, 1, 3, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["tense", "mysterious"],
            styles: ["jazz", "classical"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    cdim7_jazz: {
        id: "cdim7_jazz",
        name: "C Diminished 7",
        symbol: "Cdim7",
        altSymbols: ["C°7"],
        root: "C",
        quality: "diminished7",
        intervals: ["1", "b3", "b5", "bb7"],
        notes: ["C", "Eb", "Gb", "Bbb"],
        frets: [-1, 3, 4, 2, 4, -1],
        fingers: [0, 2, 4, 1, 3, 0],
        barre: null,
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["tense", "mysterious"],
            styles: ["jazz", "classical"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    ddim7_jazz: {
        id: "ddim7_jazz",
        name: "D Diminished 7",
        symbol: "Ddim7",
        altSymbols: ["D°7"],
        root: "D",
        quality: "diminished7",
        intervals: ["1", "b3", "b5", "bb7"],
        notes: ["D", "F", "Ab", "Cb"],
        frets: [-1, -1, 0, 1, 0, 1],
        fingers: [0, 0, 0, 2, 0, 3],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["tense", "mysterious"],
            styles: ["jazz", "classical"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    edim7_jazz: {
        id: "edim7_jazz",
        name: "E Diminished 7",
        symbol: "Edim7",
        altSymbols: ["E°7"],
        root: "E",
        quality: "diminished7",
        intervals: ["1", "b3", "b5", "bb7"],
        notes: ["E", "G", "Bb", "Db"],
        frets: [0, 1, 2, 0, 2, 0],
        fingers: [0, 1, 3, 0, 4, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["tense", "mysterious"],
            styles: ["jazz", "classical"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // ===== EXTENDED CHORDS - 9TH CHORDS =====
    // Major 9th Chords
    cmaj9_jazz: {
        id: "cmaj9_jazz",
        name: "C Major 9",
        symbol: "Cmaj9",
        altSymbols: ["CΔ9", "CM9"],
        root: "C",
        quality: "major9",
        intervals: ["1", "3", "5", "7", "9"],
        notes: ["C", "E", "G", "B", "D"],
        frets: [-1, 3, 2, 4, 3, 0],
        fingers: [0, 2, 1, 4, 3, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa", "pop"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    dmaj9_jazz: {
        id: "dmaj9_jazz",
        name: "D Major 9",
        symbol: "Dmaj9",
        altSymbols: ["DΔ9", "DM9"],
        root: "D",
        quality: "major9",
        intervals: ["1", "3", "5", "7", "9"],
        notes: ["D", "F#", "A", "C#", "E"],
        frets: [-1, -1, 0, 2, 2, 0],
        fingers: [0, 0, 0, 1, 2, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa", "pop"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    emaj9_jazz: {
        id: "emaj9_jazz",
        name: "E Major 9",
        symbol: "Emaj9",
        altSymbols: ["EΔ9", "EM9"],
        root: "E",
        quality: "major9",
        intervals: ["1", "3", "5", "7", "9"],
        notes: ["E", "G#", "B", "D#", "F#"],
        frets: [0, 2, 1, 1, 0, 2],
        fingers: [0, 3, 1, 2, 0, 4],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa", "pop"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    gmaj9_jazz: {
        id: "gmaj9_jazz",
        name: "G Major 9",
        symbol: "Gmaj9",
        altSymbols: ["GΔ9", "GM9"],
        root: "G",
        quality: "major9",
        intervals: ["1", "3", "5", "7", "9"],
        notes: ["G", "B", "D", "F#", "A"],
        frets: [3, 2, 0, 0, 0, 2],
        fingers: [2, 1, 0, 0, 0, 3],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa", "pop"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    amaj9_jazz: {
        id: "amaj9_jazz",
        name: "A Major 9",
        symbol: "Amaj9",
        altSymbols: ["AΔ9", "AM9"],
        root: "A",
        quality: "major9",
        intervals: ["1", "3", "5", "7", "9"],
        notes: ["A", "C#", "E", "G#", "B"],
        frets: [-1, 0, 2, 1, 0, 0],
        fingers: [0, 0, 2, 1, 0, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa", "pop"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // Dominant 9th Chords
    c9_jazz: {
        id: "c9_jazz",
        name: "C Dominant 9",
        symbol: "C9",
        altSymbols: ["Cdom9"],
        root: "C",
        quality: "dominant9",
        intervals: ["1", "3", "5", "b7", "9"],
        notes: ["C", "E", "G", "Bb", "D"],
        frets: [-1, 3, 2, 3, 3, 0],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["energetic", "tense", "bluesy"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    d9_jazz: {
        id: "d9_jazz",
        name: "D Dominant 9",
        symbol: "D9",
        altSymbols: ["Ddom9"],
        root: "D",
        quality: "dominant9",
        intervals: ["1", "3", "5", "b7", "9"],
        notes: ["D", "F#", "A", "C", "E"],
        frets: [-1, -1, 0, 2, 1, 0],
        fingers: [0, 0, 0, 2, 1, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["energetic", "happy", "bluesy"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    e9_jazz: {
        id: "e9_jazz",
        name: "E Dominant 9",
        symbol: "E9",
        altSymbols: ["Edom9"],
        root: "E",
        quality: "dominant9",
        intervals: ["1", "3", "5", "b7", "9"],
        notes: ["E", "G#", "B", "D", "F#"],
        frets: [0, 2, 0, 1, 0, 2],
        fingers: [0, 2, 0, 1, 0, 3],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["energetic", "bluesy", "funky"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    g9_jazz: {
        id: "g9_jazz",
        name: "G Dominant 9",
        symbol: "G9",
        altSymbols: ["Gdom9"],
        root: "G",
        quality: "dominant9",
        intervals: ["1", "3", "5", "b7", "9"],
        notes: ["G", "B", "D", "F", "A"],
        frets: [3, 2, 0, 0, 0, 1],
        fingers: [3, 2, 0, 0, 0, 1],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["energetic", "bluesy"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    a9_jazz: {
        id: "a9_jazz",
        name: "A Dominant 9",
        symbol: "A9",
        altSymbols: ["Adom9"],
        root: "A",
        quality: "dominant9",
        intervals: ["1", "3", "5", "b7", "9"],
        notes: ["A", "C#", "E", "G", "B"],
        frets: [-1, 0, 2, 0, 0, 0],
        fingers: [0, 0, 1, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["energetic", "bluesy", "happy"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // Minor 9th Chords
    am9_jazz: {
        id: "am9_jazz",
        name: "A Minor 9",
        symbol: "Am9",
        altSymbols: ["Amin9", "A-9"],
        root: "A",
        quality: "minor9",
        intervals: ["1", "b3", "5", "b7", "9"],
        notes: ["A", "C", "E", "G", "B"],
        frets: [-1, 0, 2, 0, 0, 0],
        fingers: [0, 0, 1, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa", "neo-soul"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    dm9_jazz: {
        id: "dm9_jazz",
        name: "D Minor 9",
        symbol: "Dm9",
        altSymbols: ["Dmin9", "D-9"],
        root: "D",
        quality: "minor9",
        intervals: ["1", "b3", "5", "b7", "9"],
        notes: ["D", "F", "A", "C", "E"],
        frets: [-1, -1, 0, 2, 1, 0],
        fingers: [0, 0, 0, 2, 1, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["sad", "dreamy", "mysterious"],
            styles: ["jazz", "bossa", "neo-soul"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    em9_jazz: {
        id: "em9_jazz",
        name: "E Minor 9",
        symbol: "Em9",
        altSymbols: ["Emin9", "E-9"],
        root: "E",
        quality: "minor9",
        intervals: ["1", "b3", "5", "b7", "9"],
        notes: ["E", "G", "B", "D", "F#"],
        frets: [0, 2, 0, 0, 0, 2],
        fingers: [0, 2, 0, 0, 0, 3],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["sad", "peaceful", "dreamy"],
            styles: ["jazz", "folk", "neo-soul"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // ===== 11TH & 13TH CHORDS =====
    // Dominant 11th Chords
    c11_jazz: {
        id: "c11_jazz",
        name: "C Dominant 11",
        symbol: "C11",
        altSymbols: ["Cdom11"],
        root: "C",
        quality: "dominant11",
        intervals: ["1", "5", "b7", "9", "11"],
        notes: ["C", "G", "Bb", "D", "F"],
        frets: [-1, 3, 3, 3, 4, -1],
        fingers: [0, 1, 1, 1, 2, 0],
        barre: { fret: 3, fromString: 2, toString: 4 },
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["tense", "bluesy", "funky"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    d11_jazz: {
        id: "d11_jazz",
        name: "D Dominant 11",
        symbol: "D11",
        altSymbols: ["Ddom11"],
        root: "D",
        quality: "dominant11",
        intervals: ["1", "5", "b7", "9", "11"],
        notes: ["D", "A", "C", "E", "G"],
        frets: [-1, -1, 0, 0, 1, 0],
        fingers: [0, 0, 0, 0, 1, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["tense", "bluesy", "funky"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    e11_jazz: {
        id: "e11_jazz",
        name: "E Dominant 11",
        symbol: "E11",
        altSymbols: ["Edom11"],
        root: "E",
        quality: "dominant11",
        intervals: ["1", "5", "b7", "9", "11"],
        notes: ["E", "B", "D", "F#", "A"],
        frets: [0, 0, 0, 1, 0, 0],
        fingers: [0, 0, 0, 1, 0, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["tense", "bluesy", "funky"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // Dominant 13th Chords
    c13_jazz: {
        id: "c13_jazz",
        name: "C Dominant 13",
        symbol: "C13",
        altSymbols: ["Cdom13"],
        root: "C",
        quality: "dominant13",
        intervals: ["1", "3", "b7", "9", "13"],
        notes: ["C", "E", "Bb", "D", "A"],
        frets: [-1, 3, 2, 3, 5, 5],
        fingers: [0, 2, 1, 3, 4, 4],
        barre: { fret: 5, fromString: 1, toString: 2 },
        position: 2,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "bluesy", "jazzy"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    d13_jazz: {
        id: "d13_jazz",
        name: "D Dominant 13",
        symbol: "D13",
        altSymbols: ["Ddom13"],
        root: "D",
        quality: "dominant13",
        intervals: ["1", "3", "b7", "9", "13"],
        notes: ["D", "F#", "C", "E", "B"],
        frets: [-1, -1, 0, 2, 1, 2],
        fingers: [0, 0, 0, 3, 1, 4],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["sophisticated", "bluesy", "jazzy"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    e13_jazz: {
        id: "e13_jazz",
        name: "E Dominant 13",
        symbol: "E13",
        altSymbols: ["Edom13"],
        root: "E",
        quality: "dominant13",
        intervals: ["1", "3", "b7", "9", "13"],
        notes: ["E", "G#", "D", "F#", "C#"],
        frets: [0, 2, 0, 1, 2, 2],
        fingers: [0, 2, 0, 1, 3, 4],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["sophisticated", "bluesy", "jazzy"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    a13_jazz: {
        id: "a13_jazz",
        name: "A Dominant 13",
        symbol: "A13",
        altSymbols: ["Adom13"],
        root: "A",
        quality: "dominant13",
        intervals: ["1", "3", "b7", "9", "13"],
        notes: ["A", "C#", "G", "B", "F#"],
        frets: [-1, 0, 2, 0, 2, 2],
        fingers: [0, 0, 2, 0, 3, 4],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["sophisticated", "bluesy", "jazzy"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // ===== MORE SUSPENDED & ADD CHORDS =====
    csus2_open: {
        id: "csus2_open",
        name: "C Suspended 2",
        symbol: "Csus2",
        altSymbols: ["C2"],
        root: "C",
        quality: "sus2",
        intervals: ["1", "2", "5"],
        notes: ["C", "D", "G"],
        frets: [-1, 3, 0, 0, 3, 3],
        fingers: [0, 1, 0, 0, 2, 3],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["dreamy", "peaceful"],
            styles: ["folk", "pop", "rock"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    csus4_open: {
        id: "csus4_open",
        name: "C Suspended 4",
        symbol: "Csus4",
        altSymbols: ["C4"],
        root: "C",
        quality: "sus4",
        intervals: ["1", "4", "5"],
        notes: ["C", "F", "G"],
        frets: [-1, 3, 3, 0, 1, 1],
        fingers: [0, 3, 4, 0, 1, 2],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["dreamy", "tense"],
            styles: ["folk", "pop", "rock"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    esus2_open: {
        id: "esus2_open",
        name: "E Suspended 2",
        symbol: "Esus2",
        altSymbols: ["E2"],
        root: "E",
        quality: "sus2",
        intervals: ["1", "2", "5"],
        notes: ["E", "F#", "B"],
        frets: [0, 2, 2, 4, 0, 0],
        fingers: [0, 1, 2, 4, 0, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["dreamy", "peaceful"],
            styles: ["folk", "pop", "rock"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    fsus2_open: {
        id: "fsus2_open",
        name: "F Suspended 2",
        symbol: "Fsus2",
        altSymbols: ["F2"],
        root: "F",
        quality: "sus2",
        intervals: ["1", "2", "5"],
        notes: ["F", "G", "C"],
        frets: [-1, -1, 3, 0, 1, 1],
        fingers: [0, 0, 3, 0, 1, 2],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["dreamy", "peaceful"],
            styles: ["folk", "pop", "rock"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    gsus2_open: {
        id: "gsus2_open",
        name: "G Suspended 2",
        symbol: "Gsus2",
        altSymbols: ["G2"],
        root: "G",
        quality: "sus2",
        intervals: ["1", "2", "5"],
        notes: ["G", "A", "D"],
        frets: [3, 0, 0, 0, 3, 3],
        fingers: [1, 0, 0, 0, 2, 3],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["dreamy", "peaceful"],
            styles: ["folk", "pop", "rock"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    gsus4_open: {
        id: "gsus4_open",
        name: "G Suspended 4",
        symbol: "Gsus4",
        altSymbols: ["G4"],
        root: "G",
        quality: "sus4",
        intervals: ["1", "4", "5"],
        notes: ["G", "C", "D"],
        frets: [3, 3, 0, 0, 1, 3],
        fingers: [2, 3, 0, 0, 1, 4],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["dreamy", "tense"],
            styles: ["folk", "pop", "rock"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // More Add9 Chords
    dadd9_open: {
        id: "dadd9_open",
        name: "D Add 9",
        symbol: "Dadd9",
        altSymbols: ["D2"],
        root: "D",
        quality: "add9",
        intervals: ["1", "3", "5", "9"],
        notes: ["D", "F#", "A", "E"],
        frets: [-1, -1, 0, 2, 3, 0],
        fingers: [0, 0, 0, 1, 2, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["dreamy", "happy", "peaceful"],
            styles: ["pop", "rock", "folk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    eadd9_open: {
        id: "eadd9_open",
        name: "E Add 9",
        symbol: "Eadd9",
        altSymbols: ["E2"],
        root: "E",
        quality: "add9",
        intervals: ["1", "3", "5", "9"],
        notes: ["E", "G#", "B", "F#"],
        frets: [0, 2, 2, 1, 0, 2],
        fingers: [0, 2, 3, 1, 0, 4],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["dreamy", "happy", "peaceful"],
            styles: ["pop", "rock", "folk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    fadd9_open: {
        id: "fadd9_open",
        name: "F Add 9",
        symbol: "Fadd9",
        altSymbols: ["F2"],
        root: "F",
        quality: "add9",
        intervals: ["1", "3", "5", "9"],
        notes: ["F", "A", "C", "G"],
        frets: [-1, -1, 3, 2, 1, 3],
        fingers: [0, 0, 3, 2, 1, 4],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "happy", "peaceful"],
            styles: ["pop", "rock", "folk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    aadd9_open: {
        id: "aadd9_open",
        name: "A Add 9",
        symbol: "Aadd9",
        altSymbols: ["A2"],
        root: "A",
        quality: "add9",
        intervals: ["1", "3", "5", "9"],
        notes: ["A", "C#", "E", "B"],
        frets: [-1, 0, 2, 2, 0, 0],
        fingers: [0, 0, 1, 2, 0, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["dreamy", "happy", "peaceful"],
            styles: ["pop", "rock", "folk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // ===== MORE BARRE CHORD POSITIONS =====
    // More F chord voicings
    f_major_partial: {
        id: "f_major_partial",
        name: "F Major",
        symbol: "F",
        altSymbols: ["Fmaj"],
        root: "F",
        quality: "major",
        voicingType: "partial",
        voicingDescription: "Partial barre on top 4 strings",
        intervals: ["1", "3", "5"],
        notes: ["F", "A", "C"],
        frets: [-1, -1, 3, 2, 1, 1],
        fingers: [0, 0, 3, 2, 1, 1],
        barre: { fret: 1, fromString: 1, toString: 2 },
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["happy", "energetic"],
            styles: ["rock", "pop", "folk"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // More G chord voicings
    g_major_partial: {
        id: "g_major_partial",
        name: "G Major",
        symbol: "G",
        altSymbols: ["Gmaj"],
        root: "G",
        quality: "major",
        voicingType: "partial",
        voicingDescription: "Partial voicing on top 4 strings",
        intervals: ["1", "3", "5"],
        notes: ["G", "B", "D"],
        frets: [-1, -1, 5, 4, 3, 3],
        fingers: [0, 0, 4, 3, 1, 2],
        barre: null,
        position: 3,
        difficulty: 2,
        categories: {
            moods: ["happy", "energetic"],
            styles: ["rock", "pop", "jazz"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // More C chord voicings
    c_major_midneck: {
        id: "c_major_midneck",
        name: "C Major",
        symbol: "C",
        altSymbols: ["Cmaj"],
        root: "C",
        quality: "major",
        voicingType: "midneck",
        voicingDescription: "Mid-neck partial voicing",
        intervals: ["1", "3", "5"],
        notes: ["C", "E", "G"],
        frets: [-1, 3, 5, 5, 5, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        barre: null,
        position: 3,
        difficulty: 2,
        categories: {
            moods: ["happy", "peaceful"],
            styles: ["jazz", "pop"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // More Minor Barre Chords
    c_minor_barre: {
        id: "c_minor_barre",
        name: "C Minor",
        symbol: "Cm",
        altSymbols: ["Cmin"],
        root: "C",
        quality: "minor",
        voicingType: "barre",
        voicingDescription: "Em-shape barre",
        intervals: ["1", "b3", "5"],
        notes: ["C", "Eb", "G"],
        frets: [8, 10, 10, 8, 8, 8],
        fingers: [1, 3, 4, 1, 1, 1],
        barre: { fret: 8, fromString: 0, toString: 5 },
        position: 8,
        difficulty: 3,
        categories: {
            moods: ["sad", "mysterious", "peaceful"],
            styles: ["rock", "pop", "jazz"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    f_minor_barre: {
        id: "f_minor_barre",
        name: "F Minor",
        symbol: "Fm",
        altSymbols: ["Fmin"],
        root: "F",
        quality: "minor",
        voicingType: "barre",
        voicingDescription: "Em-shape barre",
        intervals: ["1", "b3", "5"],
        notes: ["F", "Ab", "C"],
        frets: [1, 3, 3, 1, 1, 1],
        fingers: [1, 3, 4, 1, 1, 1],
        barre: { fret: 1, fromString: 0, toString: 5 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["sad", "mysterious", "tense"],
            styles: ["rock", "classical", "pop"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    g_minor_barre: {
        id: "g_minor_barre",
        name: "G Minor",
        symbol: "Gm",
        altSymbols: ["Gmin"],
        root: "G",
        quality: "minor",
        voicingType: "barre",
        voicingDescription: "Em-shape barre",
        intervals: ["1", "b3", "5"],
        notes: ["G", "Bb", "D"],
        frets: [3, 5, 5, 3, 3, 3],
        fingers: [1, 3, 4, 1, 1, 1],
        barre: { fret: 3, fromString: 0, toString: 5 },
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["sad", "mysterious", "peaceful"],
            styles: ["rock", "folk", "classical"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // ===== MORE SEVENTH CHORD POSITIONS =====
    // More Dominant 7th voicings
    f7_barre: {
        id: "f7_barre",
        name: "F Dominant 7",
        symbol: "F7",
        altSymbols: ["Fdom7"],
        root: "F",
        quality: "dominant7",
        voicingType: "barre",
        voicingDescription: "E7-shape barre",
        intervals: ["1", "3", "5", "b7"],
        notes: ["F", "A", "C", "Eb"],
        frets: [1, 3, 1, 2, 1, 1],
        fingers: [1, 3, 1, 2, 1, 1],
        barre: { fret: 1, fromString: 0, toString: 5 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["energetic", "tense", "bluesy"],
            styles: ["blues", "jazz", "rock"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // More Major 7th voicings
    bmaj7_barre: {
        id: "bmaj7_barre",
        name: "B Major 7",
        symbol: "Bmaj7",
        altSymbols: ["BΔ7", "BM7"],
        root: "B",
        quality: "major7",
        voicingType: "barre",
        voicingDescription: "Amaj7-shape barre",
        intervals: ["1", "3", "5", "7"],
        notes: ["B", "D#", "F#", "A#"],
        frets: [-1, 2, 4, 3, 4, 2],
        fingers: [0, 1, 3, 2, 4, 1],
        barre: { fret: 2, fromString: 1, toString: 5 },
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "pop", "bossa"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    emaj7_barre: {
        id: "emaj7_barre",
        name: "E Major 7",
        symbol: "Emaj7",
        altSymbols: ["EΔ7", "EM7"],
        root: "E",
        quality: "major7",
        voicingType: "barre",
        voicingDescription: "Amaj7-shape barre",
        intervals: ["1", "3", "5", "7"],
        notes: ["E", "G#", "B", "D#"],
        frets: [-1, 7, 9, 8, 9, 7],
        fingers: [0, 1, 3, 2, 4, 1],
        barre: { fret: 7, fromString: 1, toString: 5 },
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "pop", "bossa"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    fmaj7_barre: {
        id: "fmaj7_barre",
        name: "F Major 7",
        symbol: "Fmaj7",
        altSymbols: ["FΔ7", "FM7"],
        root: "F",
        quality: "major7",
        voicingType: "barre",
        voicingDescription: "Emaj7-shape barre",
        intervals: ["1", "3", "5", "7"],
        notes: ["F", "A", "C", "E"],
        frets: [1, 3, 2, 2, 1, 1],
        fingers: [1, 4, 2, 3, 1, 1],
        barre: { fret: 1, fromString: 0, toString: 5 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "pop", "bossa"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // More Minor 7th voicings
    bm7_barre: {
        id: "bm7_barre",
        name: "B Minor 7",
        symbol: "Bm7",
        altSymbols: ["Bmin7", "B-7"],
        root: "B",
        quality: "minor7",
        voicingType: "barre",
        voicingDescription: "Am7-shape barre",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["B", "D", "F#", "A"],
        frets: [-1, 2, 4, 2, 3, 2],
        fingers: [0, 1, 3, 1, 2, 1],
        barre: { fret: 2, fromString: 1, toString: 5 },
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "pop", "bossa"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    cm7_barre: {
        id: "cm7_barre",
        name: "C Minor 7",
        symbol: "Cm7",
        altSymbols: ["Cmin7", "C-7"],
        root: "C",
        quality: "minor7",
        voicingType: "barre",
        voicingDescription: "Am7-shape barre",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["C", "Eb", "G", "Bb"],
        frets: [-1, 3, 5, 3, 4, 3],
        fingers: [0, 1, 3, 1, 2, 1],
        barre: { fret: 3, fromString: 1, toString: 5 },
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "mysterious"],
            styles: ["jazz", "pop", "bossa"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    em7_barre: {
        id: "em7_barre",
        name: "E Minor 7",
        symbol: "Em7",
        altSymbols: ["Emin7", "E-7"],
        root: "E",
        quality: "minor7",
        voicingType: "barre",
        voicingDescription: "Am7-shape barre",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["E", "G", "B", "D"],
        frets: [-1, 7, 9, 7, 8, 7],
        fingers: [0, 1, 3, 1, 2, 1],
        barre: { fret: 7, fromString: 1, toString: 5 },
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["sad", "peaceful", "dreamy"],
            styles: ["jazz", "folk", "pop"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    fm7_barre: {
        id: "fm7_barre",
        name: "F Minor 7",
        symbol: "Fm7",
        altSymbols: ["Fmin7", "F-7"],
        root: "F",
        quality: "minor7",
        voicingType: "barre",
        voicingDescription: "Em7-shape barre",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["F", "Ab", "C", "Eb"],
        frets: [1, 3, 1, 1, 1, 1],
        fingers: [1, 3, 1, 1, 1, 1],
        barre: { fret: 1, fromString: 0, toString: 5 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "mysterious"],
            styles: ["jazz", "pop", "bossa"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    gm7_barre: {
        id: "gm7_barre",
        name: "G Minor 7",
        symbol: "Gm7",
        altSymbols: ["Gmin7", "G-7"],
        root: "G",
        quality: "minor7",
        voicingType: "barre",
        voicingDescription: "Em7-shape barre",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["G", "Bb", "D", "F"],
        frets: [3, 5, 3, 3, 3, 3],
        fingers: [1, 3, 1, 1, 1, 1],
        barre: { fret: 3, fromString: 0, toString: 5 },
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "pop", "bossa"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // ===== ADDITIONAL OPEN POSITION VOICINGS =====
    // More open chord variations
    b_major_open: {
        id: "b_major_open",
        name: "B Major",
        symbol: "B",
        altSymbols: ["Bmaj"],
        root: "B",
        quality: "major",
        voicingType: "open",
        voicingDescription: "Open position",
        intervals: ["1", "3", "5"],
        notes: ["B", "D#", "F#"],
        frets: [-1, 2, 4, 4, 4, 2],
        fingers: [0, 1, 2, 3, 4, 1],
        barre: { fret: 2, fromString: 1, toString: 5 },
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["happy", "energetic"],
            styles: ["rock", "pop", "folk"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    c_minor_open: {
        id: "c_minor_open",
        name: "C Minor",
        symbol: "Cm",
        altSymbols: ["Cmin"],
        root: "C",
        quality: "minor",
        voicingType: "partial",
        voicingDescription: "Partial voicing",
        intervals: ["1", "b3", "5"],
        notes: ["C", "Eb", "G"],
        frets: [-1, 3, 5, 5, 4, 3],
        fingers: [0, 1, 3, 4, 2, 1],
        barre: { fret: 3, fromString: 1, toString: 5 },
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["sad", "mysterious"],
            styles: ["rock", "classical", "jazz"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    f_minor_open: {
        id: "f_minor_open",
        name: "F Minor",
        symbol: "Fm",
        altSymbols: ["Fmin"],
        root: "F",
        quality: "minor",
        voicingType: "partial",
        voicingDescription: "Partial voicing on top 4 strings",
        intervals: ["1", "b3", "5"],
        notes: ["F", "Ab", "C"],
        frets: [-1, -1, 3, 1, 1, 1],
        fingers: [0, 0, 3, 1, 1, 1],
        barre: { fret: 1, fromString: 1, toString: 3 },
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["sad", "mysterious", "tense"],
            styles: ["rock", "classical", "folk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    g_minor_open: {
        id: "g_minor_open",
        name: "G Minor",
        symbol: "Gm",
        altSymbols: ["Gmin"],
        root: "G",
        quality: "minor",
        voicingType: "partial",
        voicingDescription: "Partial voicing",
        intervals: ["1", "b3", "5"],
        notes: ["G", "Bb", "D"],
        frets: [3, 5, 5, 3, 3, 3],
        fingers: [1, 3, 4, 1, 1, 1],
        barre: { fret: 3, fromString: 0, toString: 5 },
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["sad", "mysterious"],
            styles: ["rock", "folk", "classical"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // 6th Chords
    c6_open: {
        id: "c6_open",
        name: "C Major 6",
        symbol: "C6",
        altSymbols: ["Cmaj6"],
        root: "C",
        quality: "major6",
        intervals: ["1", "3", "5", "6"],
        notes: ["C", "E", "G", "A"],
        frets: [-1, 3, 2, 2, 1, 0],
        fingers: [0, 3, 2, 2, 1, 0],
        barre: { fret: 2, fromString: 2, toString: 3 },
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["happy", "jazzy", "sophisticated"],
            styles: ["jazz", "pop", "swing"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    a6_open: {
        id: "a6_open",
        name: "A Major 6",
        symbol: "A6",
        altSymbols: ["Amaj6"],
        root: "A",
        quality: "major6",
        intervals: ["1", "3", "5", "6"],
        notes: ["A", "C#", "E", "F#"],
        frets: [-1, 0, 2, 2, 2, 2],
        fingers: [0, 0, 1, 1, 1, 1],
        barre: { fret: 2, fromString: 1, toString: 3 },
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["happy", "jazzy", "sophisticated"],
            styles: ["jazz", "pop", "swing"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    d6_open: {
        id: "d6_open",
        name: "D Major 6",
        symbol: "D6",
        altSymbols: ["Dmaj6"],
        root: "D",
        quality: "major6",
        intervals: ["1", "3", "5", "6"],
        notes: ["D", "F#", "A", "B"],
        frets: [-1, -1, 0, 2, 0, 2],
        fingers: [0, 0, 0, 2, 0, 3],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["happy", "jazzy", "sophisticated"],
            styles: ["jazz", "pop", "swing"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    e6_open: {
        id: "e6_open",
        name: "E Major 6",
        symbol: "E6",
        altSymbols: ["Emaj6"],
        root: "E",
        quality: "major6",
        intervals: ["1", "3", "5", "6"],
        notes: ["E", "G#", "B", "C#"],
        frets: [0, 2, 2, 1, 2, 0],
        fingers: [0, 2, 3, 1, 4, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["happy", "jazzy", "sophisticated"],
            styles: ["jazz", "pop", "swing"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // Minor 6th Chords
    am6_open: {
        id: "am6_open",
        name: "A Minor 6",
        symbol: "Am6",
        altSymbols: ["Amin6"],
        root: "A",
        quality: "minor6",
        intervals: ["1", "b3", "5", "6"],
        notes: ["A", "C", "E", "F#"],
        frets: [-1, 0, 2, 2, 1, 2],
        fingers: [0, 0, 2, 3, 1, 4],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["melancholic", "jazzy", "sophisticated"],
            styles: ["jazz", "bossa", "gypsy"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    dm6_open: {
        id: "dm6_open",
        name: "D Minor 6",
        symbol: "Dm6",
        altSymbols: ["Dmin6"],
        root: "D",
        quality: "minor6",
        intervals: ["1", "b3", "5", "6"],
        notes: ["D", "F", "A", "B"],
        frets: [-1, -1, 0, 2, 0, 1],
        fingers: [0, 0, 0, 2, 0, 1],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["melancholic", "jazzy", "sophisticated"],
            styles: ["jazz", "bossa", "gypsy"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    em6_open: {
        id: "em6_open",
        name: "E Minor 6",
        symbol: "Em6",
        altSymbols: ["Emin6"],
        root: "E",
        quality: "minor6",
        intervals: ["1", "b3", "5", "6"],
        notes: ["E", "G", "B", "C#"],
        frets: [0, 2, 2, 0, 2, 0],
        fingers: [0, 2, 3, 0, 4, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["melancholic", "jazzy", "sophisticated"],
            styles: ["jazz", "bossa", "gypsy"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // ===== MORE POWER CHORDS =====
    c5_power: {
        id: "c5_power",
        name: "C5 Power Chord",
        symbol: "C5",
        altSymbols: ["C(no3)"],
        root: "C",
        quality: "power",
        intervals: ["1", "5"],
        notes: ["C", "G"],
        frets: [-1, 3, 5, 5, -1, -1],
        fingers: [0, 1, 3, 4, 0, 0],
        barre: null,
        position: 3,
        difficulty: 2,
        categories: {
            moods: ["energetic", "tense"],
            styles: ["rock", "punk", "metal"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    f5_power: {
        id: "f5_power",
        name: "F5 Power Chord",
        symbol: "F5",
        altSymbols: ["F(no3)"],
        root: "F",
        quality: "power",
        intervals: ["1", "5"],
        notes: ["F", "C"],
        frets: [1, 3, 3, -1, -1, -1],
        fingers: [1, 3, 4, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["energetic", "tense"],
            styles: ["rock", "punk", "metal"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    b5_power: {
        id: "b5_power",
        name: "B5 Power Chord",
        symbol: "B5",
        altSymbols: ["B(no3)"],
        root: "B",
        quality: "power",
        intervals: ["1", "5"],
        notes: ["B", "F#"],
        frets: [-1, 2, 4, 4, -1, -1],
        fingers: [0, 1, 3, 4, 0, 0],
        barre: null,
        position: 2,
        difficulty: 2,
        categories: {
            moods: ["energetic", "tense"],
            styles: ["rock", "punk", "metal"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // ===== 7SUS4 CHORDS =====
    c7sus4: {
        id: "c7sus4",
        name: "C Dominant 7 Suspended 4",
        symbol: "C7sus4",
        altSymbols: ["C7sus"],
        root: "C",
        quality: "7sus4",
        intervals: ["1", "4", "5", "b7"],
        notes: ["C", "F", "G", "Bb"],
        frets: [-1, 3, 3, 3, 1, 1],
        fingers: [0, 2, 3, 4, 1, 1],
        barre: { fret: 1, fromString: 1, toString: 2 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["tense", "bluesy"],
            styles: ["blues", "rock", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    d7sus4: {
        id: "d7sus4",
        name: "D Dominant 7 Suspended 4",
        symbol: "D7sus4",
        altSymbols: ["D7sus"],
        root: "D",
        quality: "7sus4",
        intervals: ["1", "4", "5", "b7"],
        notes: ["D", "G", "A", "C"],
        frets: [-1, -1, 0, 2, 1, 3],
        fingers: [0, 0, 0, 2, 1, 4],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["tense", "bluesy"],
            styles: ["blues", "rock", "funk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    e7sus4: {
        id: "e7sus4",
        name: "E Dominant 7 Suspended 4",
        symbol: "E7sus4",
        altSymbols: ["E7sus"],
        root: "E",
        quality: "7sus4",
        intervals: ["1", "4", "5", "b7"],
        notes: ["E", "A", "B", "D"],
        frets: [0, 2, 0, 2, 0, 0],
        fingers: [0, 2, 0, 3, 0, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["tense", "bluesy"],
            styles: ["blues", "rock", "funk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    a7sus4: {
        id: "a7sus4",
        name: "A Dominant 7 Suspended 4",
        symbol: "A7sus4",
        altSymbols: ["A7sus"],
        root: "A",
        quality: "7sus4",
        intervals: ["1", "4", "5", "b7"],
        notes: ["A", "D", "E", "G"],
        frets: [-1, 0, 2, 0, 3, 0],
        fingers: [0, 0, 1, 0, 2, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["tense", "bluesy"],
            styles: ["blues", "rock", "funk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    g7sus4: {
        id: "g7sus4",
        name: "G Dominant 7 Suspended 4",
        symbol: "G7sus4",
        altSymbols: ["G7sus"],
        root: "G",
        quality: "7sus4",
        intervals: ["1", "4", "5", "b7"],
        notes: ["G", "C", "D", "F"],
        frets: [3, 3, 0, 0, 1, 1],
        fingers: [2, 3, 0, 0, 1, 1],
        barre: { fret: 1, fromString: 1, toString: 2 },
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["tense", "bluesy"],
            styles: ["blues", "rock", "funk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // ===== HIGHER NECK POSITION TRIADS =====
    c_major_high: {
        id: "c_major_high",
        name: "C Major",
        symbol: "C",
        altSymbols: ["Cmaj"],
        root: "C",
        quality: "major",
        voicingType: "high position",
        voicingDescription: "High neck position - 8th fret",
        intervals: ["1", "3", "5"],
        notes: ["C", "E", "G"],
        frets: [8, 10, 10, 9, 8, 8],
        fingers: [1, 3, 4, 2, 1, 1],
        barre: { fret: 8, fromString: 0, toString: 5 },
        position: 8,
        difficulty: 3,
        categories: {
            moods: ["happy", "peaceful"],
            styles: ["rock", "pop", "jazz"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    d_major_high: {
        id: "d_major_high",
        name: "D Major",
        symbol: "D",
        altSymbols: ["Dmaj"],
        root: "D",
        quality: "major",
        voicingType: "high position",
        voicingDescription: "High neck position - 10th fret",
        intervals: ["1", "3", "5"],
        notes: ["D", "F#", "A"],
        frets: [10, 12, 12, 11, 10, 10],
        fingers: [1, 3, 4, 2, 1, 1],
        barre: { fret: 10, fromString: 0, toString: 5 },
        position: 10,
        difficulty: 3,
        categories: {
            moods: ["happy", "energetic"],
            styles: ["rock", "pop", "jazz"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // ===== MORE JAZZ VOICINGS - DROP 2 & DROP 3 =====
    dmaj7_drop2: {
        id: "dmaj7_drop2",
        name: "D Major 7",
        symbol: "Dmaj7",
        altSymbols: ["DΔ7", "DM7"],
        root: "D",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing on middle strings",
        intervals: ["1", "3", "5", "7"],
        notes: ["D", "F#", "A", "C#"],
        frets: [-1, 5, 7, 6, 7, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        barre: null,
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    gmaj7_drop2: {
        id: "gmaj7_drop2",
        name: "G Major 7",
        symbol: "Gmaj7",
        altSymbols: ["GΔ7", "GM7"],
        root: "G",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing",
        intervals: ["1", "3", "5", "7"],
        notes: ["G", "B", "D", "F#"],
        frets: [-1, 10, 12, 11, 12, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        barre: null,
        position: 10,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    am7_drop2: {
        id: "am7_drop2",
        name: "A Minor 7",
        symbol: "Am7",
        altSymbols: ["Amin7", "A-7"],
        root: "A",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["A", "C", "E", "G"],
        frets: [-1, 5, 7, 5, 5, -1],
        fingers: [0, 1, 3, 2, 2, 0],
        barre: { fret: 5, fromString: 2, toString: 4 },
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    dm7_drop2: {
        id: "dm7_drop2",
        name: "D Minor 7",
        symbol: "Dm7",
        altSymbols: ["Dmin7", "D-7"],
        root: "D",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["D", "F", "A", "C"],
        frets: [-1, 5, 7, 5, 6, -1],
        fingers: [0, 1, 4, 2, 3, 0],
        barre: null,
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "mysterious"],
            styles: ["jazz", "bossa"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    em7_drop2: {
        id: "em7_drop2",
        name: "E Minor 7",
        symbol: "Em7",
        altSymbols: ["Emin7", "E-7"],
        root: "E",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["E", "G", "B", "D"],
        frets: [-1, 7, 9, 7, 8, -1],
        fingers: [0, 1, 4, 2, 3, 0],
        barre: null,
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["sad", "peaceful", "dreamy"],
            styles: ["jazz", "bossa"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // ===== MORE BARRE POSITIONS - DIFFERENT ROOTS =====
    bb_major_barre: {
        id: "bb_major_barre",
        name: "Bb Major",
        symbol: "Bb",
        altSymbols: ["Bbmaj"],
        root: "Bb",
        quality: "major",
        voicingType: "barre",
        voicingDescription: "A-shape barre",
        intervals: ["1", "3", "5"],
        notes: ["Bb", "D", "F"],
        frets: [-1, 1, 3, 3, 3, 1],
        fingers: [0, 1, 2, 3, 4, 1],
        barre: { fret: 1, fromString: 1, toString: 5 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["happy", "energetic"],
            styles: ["rock", "pop", "jazz"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    eb_major_barre: {
        id: "eb_major_barre",
        name: "Eb Major",
        symbol: "Eb",
        altSymbols: ["Ebmaj"],
        root: "Eb",
        quality: "major",
        voicingType: "barre",
        voicingDescription: "A-shape barre",
        intervals: ["1", "3", "5"],
        notes: ["Eb", "G", "Bb"],
        frets: [-1, 6, 8, 8, 8, 6],
        fingers: [0, 1, 2, 3, 4, 1],
        barre: { fret: 6, fromString: 1, toString: 5 },
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["happy", "peaceful"],
            styles: ["rock", "pop", "jazz"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    ab_major_barre: {
        id: "ab_major_barre",
        name: "Ab Major",
        symbol: "Ab",
        altSymbols: ["Abmaj"],
        root: "Ab",
        quality: "major",
        voicingType: "barre",
        voicingDescription: "E-shape barre",
        intervals: ["1", "3", "5"],
        notes: ["Ab", "C", "Eb"],
        frets: [4, 6, 6, 5, 4, 4],
        fingers: [1, 3, 4, 2, 1, 1],
        barre: { fret: 4, fromString: 0, toString: 5 },
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["happy", "peaceful"],
            styles: ["rock", "pop", "jazz"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    db_major_barre: {
        id: "db_major_barre",
        name: "Db Major",
        symbol: "Db",
        altSymbols: ["Dbmaj"],
        root: "Db",
        quality: "major",
        voicingType: "barre",
        voicingDescription: "A-shape barre",
        intervals: ["1", "3", "5"],
        notes: ["Db", "F", "Ab"],
        frets: [-1, 4, 6, 6, 6, 4],
        fingers: [0, 1, 2, 3, 4, 1],
        barre: { fret: 4, fromString: 1, toString: 5 },
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["happy", "peaceful"],
            styles: ["rock", "pop", "jazz"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    gb_major_barre: {
        id: "gb_major_barre",
        name: "Gb Major",
        symbol: "Gb",
        altSymbols: ["Gbmaj", "F#maj"],
        root: "Gb",
        quality: "major",
        voicingType: "barre",
        voicingDescription: "E-shape barre",
        intervals: ["1", "3", "5"],
        notes: ["Gb", "Bb", "Db"],
        frets: [2, 4, 4, 3, 2, 2],
        fingers: [1, 3, 4, 2, 1, 1],
        barre: { fret: 2, fromString: 0, toString: 5 },
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["happy", "peaceful"],
            styles: ["rock", "pop", "jazz"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // ===== MINOR BARRE CHORDS - MORE ROOTS =====
    bb_minor_barre: {
        id: "bb_minor_barre",
        name: "Bb Minor",
        symbol: "Bbm",
        altSymbols: ["Bbmin"],
        root: "Bb",
        quality: "minor",
        voicingType: "barre",
        voicingDescription: "Am-shape barre",
        intervals: ["1", "b3", "5"],
        notes: ["Bb", "Db", "F"],
        frets: [-1, 1, 3, 3, 2, 1],
        fingers: [0, 1, 3, 4, 2, 1],
        barre: { fret: 1, fromString: 1, toString: 5 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["sad", "mysterious", "tense"],
            styles: ["rock", "classical", "jazz"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    eb_minor_barre: {
        id: "eb_minor_barre",
        name: "Eb Minor",
        symbol: "Ebm",
        altSymbols: ["Ebmin"],
        root: "Eb",
        quality: "minor",
        voicingType: "barre",
        voicingDescription: "Am-shape barre",
        intervals: ["1", "b3", "5"],
        notes: ["Eb", "Gb", "Bb"],
        frets: [-1, 6, 8, 8, 7, 6],
        fingers: [0, 1, 3, 4, 2, 1],
        barre: { fret: 6, fromString: 1, toString: 5 },
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["sad", "mysterious"],
            styles: ["rock", "classical", "jazz"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    ab_minor_barre: {
        id: "ab_minor_barre",
        name: "Ab Minor",
        symbol: "Abm",
        altSymbols: ["Abmin"],
        root: "Ab",
        quality: "minor",
        voicingType: "barre",
        voicingDescription: "Em-shape barre",
        intervals: ["1", "b3", "5"],
        notes: ["Ab", "Cb", "Eb"],
        frets: [4, 6, 6, 4, 4, 4],
        fingers: [1, 3, 4, 1, 1, 1],
        barre: { fret: 4, fromString: 0, toString: 5 },
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["sad", "mysterious"],
            styles: ["rock", "classical", "jazz"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    csharp_minor_barre: {
        id: "csharp_minor_barre",
        name: "C# Minor",
        symbol: "C#m",
        altSymbols: ["C#min"],
        root: "C#",
        quality: "minor",
        voicingType: "barre",
        voicingDescription: "Am-shape barre",
        intervals: ["1", "b3", "5"],
        notes: ["C#", "E", "G#"],
        frets: [-1, 4, 6, 6, 5, 4],
        fingers: [0, 1, 3, 4, 2, 1],
        barre: { fret: 4, fromString: 1, toString: 5 },
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["sad", "mysterious", "tense"],
            styles: ["rock", "pop", "folk"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    fsharp_minor_barre: {
        id: "fsharp_minor_barre",
        name: "F# Minor",
        symbol: "F#m",
        altSymbols: ["F#min"],
        root: "F#",
        quality: "minor",
        voicingType: "barre",
        voicingDescription: "Em-shape barre",
        intervals: ["1", "b3", "5"],
        notes: ["F#", "A", "C#"],
        frets: [2, 4, 4, 2, 2, 2],
        fingers: [1, 3, 4, 1, 1, 1],
        barre: { fret: 2, fromString: 0, toString: 5 },
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["sad", "mysterious"],
            styles: ["rock", "pop", "folk"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // ===== DOMINANT 7TH BARRE CHORDS - MORE ROOTS =====
    bb7_barre: {
        id: "bb7_barre",
        name: "Bb Dominant 7",
        symbol: "Bb7",
        altSymbols: ["Bbdom7"],
        root: "Bb",
        quality: "dominant7",
        voicingType: "barre",
        voicingDescription: "A7-shape barre",
        intervals: ["1", "3", "5", "b7"],
        notes: ["Bb", "D", "F", "Ab"],
        frets: [-1, 1, 3, 1, 3, 1],
        fingers: [0, 1, 3, 1, 4, 1],
        barre: { fret: 1, fromString: 1, toString: 5 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["energetic", "tense", "bluesy"],
            styles: ["blues", "jazz", "rock"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    eb7_barre: {
        id: "eb7_barre",
        name: "Eb Dominant 7",
        symbol: "Eb7",
        altSymbols: ["Ebdom7"],
        root: "Eb",
        quality: "dominant7",
        voicingType: "barre",
        voicingDescription: "E7-shape barre",
        intervals: ["1", "3", "5", "b7"],
        notes: ["Eb", "G", "Bb", "Db"],
        frets: [11, 13, 11, 12, 11, 11],
        fingers: [1, 3, 1, 2, 1, 1],
        barre: { fret: 11, fromString: 0, toString: 5 },
        position: 11,
        difficulty: 4,
        categories: {
            moods: ["energetic", "tense", "bluesy"],
            styles: ["blues", "jazz", "rock"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    ab7_barre: {
        id: "ab7_barre",
        name: "Ab Dominant 7",
        symbol: "Ab7",
        altSymbols: ["Abdom7"],
        root: "Ab",
        quality: "dominant7",
        voicingType: "barre",
        voicingDescription: "E7-shape barre",
        intervals: ["1", "3", "5", "b7"],
        notes: ["Ab", "C", "Eb", "Gb"],
        frets: [4, 6, 4, 5, 4, 4],
        fingers: [1, 3, 1, 2, 1, 1],
        barre: { fret: 4, fromString: 0, toString: 5 },
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["energetic", "tense", "bluesy"],
            styles: ["blues", "jazz", "rock"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // ===== MAJOR 7TH - MORE ROOTS =====
    bbmaj7_barre: {
        id: "bbmaj7_barre",
        name: "Bb Major 7",
        symbol: "Bbmaj7",
        altSymbols: ["BbΔ7", "BbM7"],
        root: "Bb",
        quality: "major7",
        voicingType: "barre",
        voicingDescription: "Amaj7-shape barre",
        intervals: ["1", "3", "5", "7"],
        notes: ["Bb", "D", "F", "A"],
        frets: [-1, 1, 3, 2, 3, 1],
        fingers: [0, 1, 3, 2, 4, 1],
        barre: { fret: 1, fromString: 1, toString: 5 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "pop", "bossa"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    ebmaj7_barre: {
        id: "ebmaj7_barre",
        name: "Eb Major 7",
        symbol: "Ebmaj7",
        altSymbols: ["EbΔ7", "EbM7"],
        root: "Eb",
        quality: "major7",
        voicingType: "barre",
        voicingDescription: "Amaj7-shape barre",
        intervals: ["1", "3", "5", "7"],
        notes: ["Eb", "G", "Bb", "D"],
        frets: [-1, 6, 8, 7, 8, 6],
        fingers: [0, 1, 3, 2, 4, 1],
        barre: { fret: 6, fromString: 1, toString: 5 },
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "pop", "bossa"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    abmaj7_barre: {
        id: "abmaj7_barre",
        name: "Ab Major 7",
        symbol: "Abmaj7",
        altSymbols: ["AbΔ7", "AbM7"],
        root: "Ab",
        quality: "major7",
        voicingType: "barre",
        voicingDescription: "Emaj7-shape barre",
        intervals: ["1", "3", "5", "7"],
        notes: ["Ab", "C", "Eb", "G"],
        frets: [4, 6, 5, 5, 4, 4],
        fingers: [1, 4, 2, 3, 1, 1],
        barre: { fret: 4, fromString: 0, toString: 5 },
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "pop", "bossa"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // ===== MINOR 7TH - MORE ROOTS =====
    bbm7_barre: {
        id: "bbm7_barre",
        name: "Bb Minor 7",
        symbol: "Bbm7",
        altSymbols: ["Bbmin7", "Bb-7"],
        root: "Bb",
        quality: "minor7",
        voicingType: "barre",
        voicingDescription: "Am7-shape barre",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["Bb", "Db", "F", "Ab"],
        frets: [-1, 1, 3, 1, 2, 1],
        fingers: [0, 1, 3, 1, 2, 1],
        barre: { fret: 1, fromString: 1, toString: 5 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "pop", "bossa"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    ebm7_barre: {
        id: "ebm7_barre",
        name: "Eb Minor 7",
        symbol: "Ebm7",
        altSymbols: ["Ebmin7", "Eb-7"],
        root: "Eb",
        quality: "minor7",
        voicingType: "barre",
        voicingDescription: "Em7-shape barre",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["Eb", "Gb", "Bb", "Db"],
        frets: [11, 13, 11, 11, 11, 11],
        fingers: [1, 3, 1, 1, 1, 1],
        barre: { fret: 11, fromString: 0, toString: 5 },
        position: 11,
        difficulty: 4,
        categories: {
            moods: ["sad", "dreamy", "mysterious"],
            styles: ["jazz", "pop", "bossa"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    abm7_barre: {
        id: "abm7_barre",
        name: "Ab Minor 7",
        symbol: "Abm7",
        altSymbols: ["Abmin7", "Ab-7"],
        root: "Ab",
        quality: "minor7",
        voicingType: "barre",
        voicingDescription: "Em7-shape barre",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["Ab", "Cb", "Eb", "Gb"],
        frets: [4, 6, 4, 4, 4, 4],
        fingers: [1, 3, 1, 1, 1, 1],
        barre: { fret: 4, fromString: 0, toString: 5 },
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "mysterious"],
            styles: ["jazz", "pop", "bossa"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    csharpm7_barre: {
        id: "csharpm7_barre",
        name: "C# Minor 7",
        symbol: "C#m7",
        altSymbols: ["C#min7", "C#-7"],
        root: "C#",
        quality: "minor7",
        voicingType: "barre",
        voicingDescription: "Am7-shape barre",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["C#", "E", "G#", "B"],
        frets: [-1, 4, 6, 4, 5, 4],
        fingers: [0, 1, 3, 1, 2, 1],
        barre: { fret: 4, fromString: 1, toString: 5 },
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "pop", "bossa"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    fsharpm7_barre: {
        id: "fsharpm7_barre",
        name: "F# Minor 7",
        symbol: "F#m7",
        altSymbols: ["F#min7", "F#-7"],
        root: "F#",
        quality: "minor7",
        voicingType: "barre",
        voicingDescription: "Em7-shape barre",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["F#", "A", "C#", "E"],
        frets: [2, 4, 2, 2, 2, 2],
        fingers: [1, 3, 1, 1, 1, 1],
        barre: { fret: 2, fromString: 0, toString: 5 },
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["sad", "peaceful", "dreamy"],
            styles: ["jazz", "pop", "bossa"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // ===== ADDITIONAL USEFUL PARTIAL VOICINGS =====
    // Top 3 string triads for jazz comping
    c_major_top3: {
        id: "c_major_top3",
        name: "C Major",
        symbol: "C",
        altSymbols: ["Cmaj"],
        root: "C",
        quality: "major",
        voicingType: "partial",
        voicingDescription: "Top 3 strings only",
        intervals: ["3", "1", "5"],
        notes: ["E", "C", "G"],
        frets: [-1, -1, -1, 9, 8, 8],
        fingers: [0, 0, 0, 3, 1, 2],
        barre: null,
        position: 8,
        difficulty: 2,
        categories: {
            moods: ["happy", "peaceful"],
            styles: ["jazz", "bossa"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    d_major_top3: {
        id: "d_major_top3",
        name: "D Major",
        symbol: "D",
        altSymbols: ["Dmaj"],
        root: "D",
        quality: "major",
        voicingType: "partial",
        voicingDescription: "Top 3 strings only",
        intervals: ["3", "1", "5"],
        notes: ["F#", "D", "A"],
        frets: [-1, -1, -1, 11, 10, 10],
        fingers: [0, 0, 0, 3, 1, 2],
        barre: null,
        position: 10,
        difficulty: 2,
        categories: {
            moods: ["happy", "energetic"],
            styles: ["jazz", "bossa"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    e_major_top3: {
        id: "e_major_top3",
        name: "E Major",
        symbol: "E",
        altSymbols: ["Emaj"],
        root: "E",
        quality: "major",
        voicingType: "partial",
        voicingDescription: "Top 3 strings only",
        intervals: ["3", "1", "5"],
        notes: ["G#", "E", "B"],
        frets: [-1, -1, -1, 1, 0, 0],
        fingers: [0, 0, 0, 1, 0, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["happy", "energetic"],
            styles: ["jazz", "bossa"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    a_minor_top3: {
        id: "a_minor_top3",
        name: "A Minor",
        symbol: "Am",
        altSymbols: ["Amin"],
        root: "A",
        quality: "minor",
        voicingType: "partial",
        voicingDescription: "Top 3 strings only",
        intervals: ["b3", "1", "5"],
        notes: ["C", "A", "E"],
        frets: [-1, -1, -1, 2, 1, 0],
        fingers: [0, 0, 0, 2, 1, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["sad", "peaceful"],
            styles: ["jazz", "bossa"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    d_minor_top3: {
        id: "d_minor_top3",
        name: "D Minor",
        symbol: "Dm",
        altSymbols: ["Dmin"],
        root: "D",
        quality: "minor",
        voicingType: "partial",
        voicingDescription: "Top 3 strings only",
        intervals: ["b3", "1", "5"],
        notes: ["F", "D", "A"],
        frets: [-1, -1, -1, 2, 3, 1],
        fingers: [0, 0, 0, 2, 3, 1],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["sad", "mysterious"],
            styles: ["jazz", "bossa"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    e_minor_top3: {
        id: "e_minor_top3",
        name: "E Minor",
        symbol: "Em",
        altSymbols: ["Emin"],
        root: "E",
        quality: "minor",
        voicingType: "partial",
        voicingDescription: "Top 3 strings only",
        intervals: ["b3", "1", "5"],
        notes: ["G", "E", "B"],
        frets: [-1, -1, -1, 0, 0, 0],
        fingers: [0, 0, 0, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["sad", "peaceful"],
            styles: ["jazz", "bossa", "folk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // ===== ADDITIONAL PRACTICAL VOICINGS =====
    // More open position variations
    fsharpm_open: {
        id: "fsharpm_open",
        name: "F# Minor",
        symbol: "F#m",
        altSymbols: ["F#min"],
        root: "F#",
        quality: "minor",
        voicingType: "open",
        voicingDescription: "Open position",
        intervals: ["1", "b3", "5"],
        notes: ["F#", "A", "C#"],
        frets: [2, 4, 4, 2, 2, 2],
        fingers: [1, 3, 4, 1, 1, 1],
        barre: { fret: 2, fromString: 0, toString: 5 },
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["sad", "mysterious"],
            styles: ["rock", "pop", "folk"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    csharpm_open: {
        id: "csharpm_open",
        name: "C# Minor",
        symbol: "C#m",
        altSymbols: ["C#min"],
        root: "C#",
        quality: "minor",
        voicingType: "open",
        voicingDescription: "Open position",
        intervals: ["1", "b3", "5"],
        notes: ["C#", "E", "G#"],
        frets: [-1, 4, 6, 6, 5, 4],
        fingers: [0, 1, 3, 4, 2, 1],
        barre: { fret: 4, fromString: 1, toString: 5 },
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["sad", "mysterious"],
            styles: ["rock", "pop", "folk"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // ===== MORE 9TH VARIATIONS =====
    b9_jazz: {
        id: "b9_jazz",
        name: "B Dominant 9",
        symbol: "B9",
        altSymbols: ["Bdom9"],
        root: "B",
        quality: "dominant9",
        intervals: ["1", "3", "5", "b7", "9"],
        notes: ["B", "D#", "F#", "A", "C#"],
        frets: [-1, 2, 1, 2, 2, 2],
        fingers: [0, 2, 1, 3, 4, 4],
        barre: { fret: 2, fromString: 1, toString: 3 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["energetic", "bluesy", "jazzy"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    f9_jazz: {
        id: "f9_jazz",
        name: "F Dominant 9",
        symbol: "F9",
        altSymbols: ["Fdom9"],
        root: "F",
        quality: "dominant9",
        intervals: ["1", "3", "5", "b7", "9"],
        notes: ["F", "A", "C", "Eb", "G"],
        frets: [1, 3, 1, 2, 3, 3],
        fingers: [1, 3, 1, 2, 4, 4],
        barre: { fret: 1, fromString: 0, toString: 2 },
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["energetic", "bluesy", "funky"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // ===== ADDITIONAL AUGMENTED VOICINGS =====
    a_aug_open: {
        id: "a_aug_open",
        name: "A Augmented",
        symbol: "Aaug",
        altSymbols: ["A+"],
        root: "A",
        quality: "augmented",
        intervals: ["1", "3", "#5"],
        notes: ["A", "C#", "E#"],
        frets: [-1, 0, 3, 2, 2, 1],
        fingers: [0, 0, 4, 2, 3, 1],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["tense", "mysterious", "dreamy"],
            styles: ["jazz", "classical"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    d_aug_open: {
        id: "d_aug_open",
        name: "D Augmented",
        symbol: "Daug",
        altSymbols: ["D+"],
        root: "D",
        quality: "augmented",
        intervals: ["1", "3", "#5"],
        notes: ["D", "F#", "A#"],
        frets: [-1, -1, 0, 3, 3, 2],
        fingers: [0, 0, 0, 2, 3, 1],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["tense", "mysterious", "dreamy"],
            styles: ["jazz", "classical"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // ===== MORE DOMINANT 7TH VARIATIONS =====
    c7_barre_5: {
        id: "c7_barre_5",
        name: "C Dominant 7",
        symbol: "C7",
        altSymbols: ["Cdom7"],
        root: "C",
        quality: "dominant7",
        voicingType: "barre",
        voicingDescription: "E7-shape barre at 8th fret",
        intervals: ["1", "3", "5", "b7"],
        notes: ["C", "E", "G", "Bb"],
        frets: [8, 10, 8, 9, 8, 8],
        fingers: [1, 3, 1, 2, 1, 1],
        barre: { fret: 8, fromString: 0, toString: 5 },
        position: 8,
        difficulty: 3,
        categories: {
            moods: ["energetic", "tense", "bluesy"],
            styles: ["blues", "jazz", "rock"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    g7_barre: {
        id: "g7_barre",
        name: "G Dominant 7",
        symbol: "G7",
        altSymbols: ["Gdom7"],
        root: "G",
        quality: "dominant7",
        voicingType: "barre",
        voicingDescription: "E7-shape barre at 3rd fret",
        intervals: ["1", "3", "5", "b7"],
        notes: ["G", "B", "D", "F"],
        frets: [3, 5, 3, 4, 3, 3],
        fingers: [1, 3, 1, 2, 1, 1],
        barre: { fret: 3, fromString: 0, toString: 5 },
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["energetic", "happy", "bluesy"],
            styles: ["blues", "jazz", "rock"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // ===== MORE ADD CHORD VARIATIONS =====
    emadd9: {
        id: "emadd9",
        name: "E Minor Add 9",
        symbol: "Emadd9",
        altSymbols: ["Em(add9)"],
        root: "E",
        quality: "minoradd9",
        intervals: ["1", "b3", "5", "9"],
        notes: ["E", "G", "B", "F#"],
        frets: [0, 2, 2, 0, 0, 2],
        fingers: [0, 2, 3, 0, 0, 4],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["folk", "indie", "alternative"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    amadd9: {
        id: "amadd9",
        name: "A Minor Add 9",
        symbol: "Amadd9",
        altSymbols: ["Am(add9)"],
        root: "A",
        quality: "minoradd9",
        intervals: ["1", "b3", "5", "9"],
        notes: ["A", "C", "E", "B"],
        frets: [-1, 0, 2, 2, 1, 0],
        fingers: [0, 0, 2, 3, 1, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["folk", "indie", "alternative"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    dmadd9: {
        id: "dmadd9",
        name: "D Minor Add 9",
        symbol: "Dmadd9",
        altSymbols: ["Dm(add9)"],
        root: "D",
        quality: "minoradd9",
        intervals: ["1", "b3", "5", "9"],
        notes: ["D", "F", "A", "E"],
        frets: [-1, -1, 0, 2, 3, 1],
        fingers: [0, 0, 0, 2, 4, 1],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["sad", "dreamy", "mysterious"],
            styles: ["folk", "indie", "alternative"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // ===== ADDITIONAL USEFUL JAZZ VOICINGS =====
    c6_9: {
        id: "c6_9",
        name: "C Major 6/9",
        symbol: "C6/9",
        altSymbols: ["C6add9"],
        root: "C",
        quality: "major69",
        intervals: ["1", "3", "5", "6", "9"],
        notes: ["C", "E", "G", "A", "D"],
        frets: [-1, 3, 2, 2, 3, 3],
        fingers: [0, 2, 1, 1, 3, 4],
        barre: { fret: 2, fromString: 2, toString: 3 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["jazzy", "sophisticated", "happy"],
            styles: ["jazz", "bossa", "swing"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    d6_9: {
        id: "d6_9",
        name: "D Major 6/9",
        symbol: "D6/9",
        altSymbols: ["D6add9"],
        root: "D",
        quality: "major69",
        intervals: ["1", "3", "5", "6", "9"],
        notes: ["D", "F#", "A", "B", "E"],
        frets: [-1, -1, 0, 2, 0, 0],
        fingers: [0, 0, 0, 1, 0, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["jazzy", "sophisticated", "happy"],
            styles: ["jazz", "bossa", "swing"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    am6_9: {
        id: "am6_9",
        name: "A Minor 6/9",
        symbol: "Am6/9",
        altSymbols: ["Am6add9"],
        root: "A",
        quality: "minor69",
        intervals: ["1", "b3", "5", "6", "9"],
        notes: ["A", "C", "E", "F#", "B"],
        frets: [-1, 0, 2, 2, 1, 2],
        fingers: [0, 0, 2, 3, 1, 4],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "melancholic", "sophisticated"],
            styles: ["jazz", "bossa", "gypsy"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // ===== MORE PARTIAL VOICINGS - BOTTOM 4 STRINGS =====
    c_major_bot4: {
        id: "c_major_bot4",
        name: "C Major",
        symbol: "C",
        altSymbols: ["Cmaj"],
        root: "C",
        quality: "major",
        voicingType: "partial",
        voicingDescription: "Bottom 4 strings only",
        intervals: ["1", "5", "1", "3"],
        notes: ["C", "G", "C", "E"],
        frets: [-1, 3, 2, 0, -1, -1],
        fingers: [0, 3, 2, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["happy", "peaceful"],
            styles: ["fingerstyle", "folk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    g_major_bot4: {
        id: "g_major_bot4",
        name: "G Major",
        symbol: "G",
        altSymbols: ["Gmaj"],
        root: "G",
        quality: "major",
        voicingType: "partial",
        voicingDescription: "Bottom 4 strings only",
        intervals: ["1", "5", "1", "3"],
        notes: ["G", "D", "G", "B"],
        frets: [3, 2, 0, 0, -1, -1],
        fingers: [2, 1, 0, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["happy", "energetic"],
            styles: ["fingerstyle", "folk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    a_minor_bot4: {
        id: "a_minor_bot4",
        name: "A Minor",
        symbol: "Am",
        altSymbols: ["Amin"],
        root: "A",
        quality: "minor",
        voicingType: "partial",
        voicingDescription: "Bottom 4 strings only",
        intervals: ["1", "5", "1", "b3"],
        notes: ["A", "E", "A", "C"],
        frets: [-1, 0, 2, 2, -1, -1],
        fingers: [0, 0, 1, 2, 0, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["sad", "peaceful"],
            styles: ["fingerstyle", "folk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    d_minor_bot4: {
        id: "d_minor_bot4",
        name: "D Minor",
        symbol: "Dm",
        altSymbols: ["Dmin"],
        root: "D",
        quality: "minor",
        voicingType: "partial",
        voicingDescription: "Bottom 4 strings only",
        intervals: ["1", "5", "1", "b3"],
        notes: ["D", "A", "D", "F"],
        frets: [-1, -1, 0, 2, -1, -1],
        fingers: [0, 0, 0, 1, 0, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["sad", "mysterious"],
            styles: ["fingerstyle", "folk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // ===== MORE PRACTICAL BARRE POSITIONS =====
    fsharp_major_barre: {
        id: "fsharp_major_barre",
        name: "F# Major",
        symbol: "F#",
        altSymbols: ["F#maj"],
        root: "F#",
        quality: "major",
        voicingType: "barre",
        voicingDescription: "E-shape barre",
        intervals: ["1", "3", "5"],
        notes: ["F#", "A#", "C#"],
        frets: [2, 4, 4, 3, 2, 2],
        fingers: [1, 3, 4, 2, 1, 1],
        barre: { fret: 2, fromString: 0, toString: 5 },
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["happy", "energetic"],
            styles: ["rock", "pop", "jazz"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    bb_minor_open: {
        id: "bb_minor_open",
        name: "Bb Minor",
        symbol: "Bbm",
        altSymbols: ["Bbmin"],
        root: "Bb",
        quality: "minor",
        voicingType: "barre",
        voicingDescription: "Am-shape barre",
        intervals: ["1", "b3", "5"],
        notes: ["Bb", "Db", "F"],
        frets: [-1, 1, 3, 3, 2, 1],
        fingers: [0, 1, 3, 4, 2, 1],
        barre: { fret: 1, fromString: 1, toString: 5 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["sad", "mysterious"],
            styles: ["rock", "classical", "jazz"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // ===== ADDITIONAL 7TH VOICINGS =====
    fsharp7_barre: {
        id: "fsharp7_barre",
        name: "F# Dominant 7",
        symbol: "F#7",
        altSymbols: ["F#dom7"],
        root: "F#",
        quality: "dominant7",
        voicingType: "barre",
        voicingDescription: "E7-shape barre",
        intervals: ["1", "3", "5", "b7"],
        notes: ["F#", "A#", "C#", "E"],
        frets: [2, 4, 2, 3, 2, 2],
        fingers: [1, 3, 1, 2, 1, 1],
        barre: { fret: 2, fromString: 0, toString: 5 },
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["energetic", "tense", "bluesy"],
            styles: ["blues", "jazz", "rock"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    csharp7_barre: {
        id: "csharp7_barre",
        name: "C# Dominant 7",
        symbol: "C#7",
        altSymbols: ["C#dom7"],
        root: "C#",
        quality: "dominant7",
        voicingType: "barre",
        voicingDescription: "A7-shape barre",
        intervals: ["1", "3", "5", "b7"],
        notes: ["C#", "E#", "G#", "B"],
        frets: [-1, 4, 6, 4, 6, 4],
        fingers: [0, 1, 3, 1, 4, 1],
        barre: { fret: 4, fromString: 1, toString: 5 },
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["energetic", "tense", "bluesy"],
            styles: ["blues", "jazz", "rock"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // ===== FINAL USEFUL VOICINGS =====
    g_add9_alt: {
        id: "g_add9_alt",
        name: "G Add 9",
        symbol: "Gadd9",
        altSymbols: ["G2"],
        root: "G",
        quality: "add9",
        voicingType: "alternate",
        voicingDescription: "Alternate voicing with open D string",
        intervals: ["1", "3", "5", "9"],
        notes: ["G", "B", "D", "A"],
        frets: [3, 0, 0, 0, 0, 3],
        fingers: [1, 0, 0, 0, 0, 2],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["dreamy", "happy", "peaceful"],
            styles: ["pop", "rock", "folk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // ===== SHELL VOICINGS (Root + 3rd + 7th) =====
    // Jazz essential 3-note voicings for comping

    // === MAJOR 7 SHELL VOICINGS ===

    // C Major 7 Shells
    c_maj7_shell_e: {
        id: "c_maj7_shell_e",
        name: "C Major 7",
        symbol: "Cmaj7",
        altSymbols: ["CΔ7", "CM7"],
        root: "C",
        quality: "major7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "3", "7"],
        notes: ["C", "E", "B"],
        frets: [8, -1, 9, 9, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 8,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "sophisticated", "dreamy"],
            styles: ["jazz", "bossa nova", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_maj7_shell_a: {
        id: "c_maj7_shell_a",
        name: "C Major 7",
        symbol: "Cmaj7",
        altSymbols: ["CΔ7", "CM7"],
        root: "C",
        quality: "major7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "3", "7"],
        notes: ["C", "E", "B"],
        frets: [-1, 3, -1, 4, 4, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 3,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "sophisticated", "dreamy"],
            styles: ["jazz", "bossa nova", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // C#/Db Major 7 Shells
    csharp_maj7_shell_e: {
        id: "csharp_maj7_shell_e",
        name: "C# Major 7",
        symbol: "C#maj7",
        altSymbols: ["Dbmaj7", "C#Δ7", "DbΔ7"],
        root: "C#",
        quality: "major7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "3", "7"],
        notes: ["C#", "E#", "B#"],
        frets: [9, -1, 10, 10, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 9,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "sophisticated", "dreamy"],
            styles: ["jazz", "bossa nova", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    csharp_maj7_shell_a: {
        id: "csharp_maj7_shell_a",
        name: "C# Major 7",
        symbol: "C#maj7",
        altSymbols: ["Dbmaj7", "C#Δ7", "DbΔ7"],
        root: "C#",
        quality: "major7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "3", "7"],
        notes: ["C#", "E#", "B#"],
        frets: [-1, 4, -1, 5, 5, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 4,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "sophisticated", "dreamy"],
            styles: ["jazz", "bossa nova", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // D Major 7 Shells
    d_maj7_shell_e: {
        id: "d_maj7_shell_e",
        name: "D Major 7",
        symbol: "Dmaj7",
        altSymbols: ["DΔ7", "DM7"],
        root: "D",
        quality: "major7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "3", "7"],
        notes: ["D", "F#", "C#"],
        frets: [10, -1, 11, 11, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 10,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "sophisticated", "dreamy"],
            styles: ["jazz", "bossa nova", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_maj7_shell_a: {
        id: "d_maj7_shell_a",
        name: "D Major 7",
        symbol: "Dmaj7",
        altSymbols: ["DΔ7", "DM7"],
        root: "D",
        quality: "major7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "3", "7"],
        notes: ["D", "F#", "C#"],
        frets: [-1, 5, -1, 6, 6, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 5,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "sophisticated", "dreamy"],
            styles: ["jazz", "bossa nova", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // D#/Eb Major 7 Shells
    dsharp_maj7_shell_e: {
        id: "dsharp_maj7_shell_e",
        name: "Eb Major 7",
        symbol: "Ebmaj7",
        altSymbols: ["D#maj7", "EbΔ7", "D#Δ7"],
        root: "Eb",
        quality: "major7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "3", "7"],
        notes: ["Eb", "G", "D"],
        frets: [11, -1, 12, 12, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 11,
        difficulty: 3,
        categories: {
            moods: ["jazzy", "sophisticated", "dreamy"],
            styles: ["jazz", "bossa nova", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    dsharp_maj7_shell_a: {
        id: "dsharp_maj7_shell_a",
        name: "Eb Major 7",
        symbol: "Ebmaj7",
        altSymbols: ["D#maj7", "EbΔ7", "D#Δ7"],
        root: "Eb",
        quality: "major7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "3", "7"],
        notes: ["Eb", "G", "D"],
        frets: [-1, 6, -1, 7, 7, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 6,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "sophisticated", "dreamy"],
            styles: ["jazz", "bossa nova", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // E Major 7 Shells
    e_maj7_shell_e: {
        id: "e_maj7_shell_e",
        name: "E Major 7",
        symbol: "Emaj7",
        altSymbols: ["EΔ7", "EM7"],
        root: "E",
        quality: "major7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "3", "7"],
        notes: ["E", "G#", "D#"],
        frets: [0, -1, 1, 1, -1, -1],
        fingers: [0, 0, 1, 2, 0, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "sophisticated", "dreamy"],
            styles: ["jazz", "bossa nova", "r&b"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_maj7_shell_a: {
        id: "e_maj7_shell_a",
        name: "E Major 7",
        symbol: "Emaj7",
        altSymbols: ["EΔ7", "EM7"],
        root: "E",
        quality: "major7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "3", "7"],
        notes: ["E", "G#", "D#"],
        frets: [-1, 7, -1, 8, 8, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 7,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "sophisticated", "dreamy"],
            styles: ["jazz", "bossa nova", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // F Major 7 Shells
    f_maj7_shell_e: {
        id: "f_maj7_shell_e",
        name: "F Major 7",
        symbol: "Fmaj7",
        altSymbols: ["FΔ7", "FM7"],
        root: "F",
        quality: "major7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "3", "7"],
        notes: ["F", "A", "E"],
        frets: [1, -1, 2, 2, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "sophisticated", "dreamy"],
            styles: ["jazz", "bossa nova", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_maj7_shell_a: {
        id: "f_maj7_shell_a",
        name: "F Major 7",
        symbol: "Fmaj7",
        altSymbols: ["FΔ7", "FM7"],
        root: "F",
        quality: "major7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "3", "7"],
        notes: ["F", "A", "E"],
        frets: [-1, 8, -1, 9, 9, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 8,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "sophisticated", "dreamy"],
            styles: ["jazz", "bossa nova", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // F#/Gb Major 7 Shells
    fsharp_maj7_shell_e: {
        id: "fsharp_maj7_shell_e",
        name: "F# Major 7",
        symbol: "F#maj7",
        altSymbols: ["Gbmaj7", "F#Δ7", "GbΔ7"],
        root: "F#",
        quality: "major7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "3", "7"],
        notes: ["F#", "A#", "E#"],
        frets: [2, -1, 3, 3, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 2,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "sophisticated", "dreamy"],
            styles: ["jazz", "bossa nova", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    fsharp_maj7_shell_a: {
        id: "fsharp_maj7_shell_a",
        name: "F# Major 7",
        symbol: "F#maj7",
        altSymbols: ["Gbmaj7", "F#Δ7", "GbΔ7"],
        root: "F#",
        quality: "major7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "3", "7"],
        notes: ["F#", "A#", "E#"],
        frets: [-1, 9, -1, 10, 10, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 9,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "sophisticated", "dreamy"],
            styles: ["jazz", "bossa nova", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // G Major 7 Shells
    g_maj7_shell_e: {
        id: "g_maj7_shell_e",
        name: "G Major 7",
        symbol: "Gmaj7",
        altSymbols: ["GΔ7", "GM7"],
        root: "G",
        quality: "major7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "3", "7"],
        notes: ["G", "B", "F#"],
        frets: [3, -1, 4, 4, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 3,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "sophisticated", "dreamy"],
            styles: ["jazz", "bossa nova", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_maj7_shell_a: {
        id: "g_maj7_shell_a",
        name: "G Major 7",
        symbol: "Gmaj7",
        altSymbols: ["GΔ7", "GM7"],
        root: "G",
        quality: "major7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "3", "7"],
        notes: ["G", "B", "F#"],
        frets: [-1, 10, -1, 11, 11, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 10,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "sophisticated", "dreamy"],
            styles: ["jazz", "bossa nova", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // G#/Ab Major 7 Shells
    gsharp_maj7_shell_e: {
        id: "gsharp_maj7_shell_e",
        name: "Ab Major 7",
        symbol: "Abmaj7",
        altSymbols: ["G#maj7", "AbΔ7", "G#Δ7"],
        root: "Ab",
        quality: "major7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "3", "7"],
        notes: ["Ab", "C", "G"],
        frets: [4, -1, 5, 5, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 4,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "sophisticated", "dreamy"],
            styles: ["jazz", "bossa nova", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    gsharp_maj7_shell_a: {
        id: "gsharp_maj7_shell_a",
        name: "Ab Major 7",
        symbol: "Abmaj7",
        altSymbols: ["G#maj7", "AbΔ7", "G#Δ7"],
        root: "Ab",
        quality: "major7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "3", "7"],
        notes: ["Ab", "C", "G"],
        frets: [-1, 11, -1, 12, 12, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 11,
        difficulty: 3,
        categories: {
            moods: ["jazzy", "sophisticated", "dreamy"],
            styles: ["jazz", "bossa nova", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // A Major 7 Shells
    a_maj7_shell_e: {
        id: "a_maj7_shell_e",
        name: "A Major 7",
        symbol: "Amaj7",
        altSymbols: ["AΔ7", "AM7"],
        root: "A",
        quality: "major7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "3", "7"],
        notes: ["A", "C#", "G#"],
        frets: [5, -1, 6, 6, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 5,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "sophisticated", "dreamy"],
            styles: ["jazz", "bossa nova", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_maj7_shell_a: {
        id: "a_maj7_shell_a",
        name: "A Major 7",
        symbol: "Amaj7",
        altSymbols: ["AΔ7", "AM7"],
        root: "A",
        quality: "major7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "3", "7"],
        notes: ["A", "C#", "G#"],
        frets: [-1, 0, -1, 1, 1, -1],
        fingers: [0, 0, 0, 1, 2, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "sophisticated", "dreamy"],
            styles: ["jazz", "bossa nova", "r&b"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // A#/Bb Major 7 Shells
    asharp_maj7_shell_e: {
        id: "asharp_maj7_shell_e",
        name: "Bb Major 7",
        symbol: "Bbmaj7",
        altSymbols: ["A#maj7", "BbΔ7", "A#Δ7"],
        root: "Bb",
        quality: "major7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "3", "7"],
        notes: ["Bb", "D", "A"],
        frets: [6, -1, 7, 7, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 6,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "sophisticated", "dreamy"],
            styles: ["jazz", "bossa nova", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    asharp_maj7_shell_a: {
        id: "asharp_maj7_shell_a",
        name: "Bb Major 7",
        symbol: "Bbmaj7",
        altSymbols: ["A#maj7", "BbΔ7", "A#Δ7"],
        root: "Bb",
        quality: "major7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "3", "7"],
        notes: ["Bb", "D", "A"],
        frets: [-1, 1, -1, 2, 2, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "sophisticated", "dreamy"],
            styles: ["jazz", "bossa nova", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // B Major 7 Shells
    b_maj7_shell_e: {
        id: "b_maj7_shell_e",
        name: "B Major 7",
        symbol: "Bmaj7",
        altSymbols: ["BΔ7", "BM7"],
        root: "B",
        quality: "major7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "3", "7"],
        notes: ["B", "D#", "A#"],
        frets: [7, -1, 8, 8, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 7,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "sophisticated", "dreamy"],
            styles: ["jazz", "bossa nova", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    b_maj7_shell_a: {
        id: "b_maj7_shell_a",
        name: "B Major 7",
        symbol: "Bmaj7",
        altSymbols: ["BΔ7", "BM7"],
        root: "B",
        quality: "major7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "3", "7"],
        notes: ["B", "D#", "A#"],
        frets: [-1, 2, -1, 3, 3, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 2,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "sophisticated", "dreamy"],
            styles: ["jazz", "bossa nova", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // === MINOR 7 SHELL VOICINGS ===

    // C Minor 7 Shells
    c_min7_shell_e: {
        id: "c_min7_shell_e",
        name: "C Minor 7",
        symbol: "Cm7",
        altSymbols: ["Cmin7", "C-7"],
        root: "C",
        quality: "minor7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["C", "Eb", "Bb"],
        frets: [8, -1, 8, 8, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 8,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "melancholic", "smooth"],
            styles: ["jazz", "bossa nova", "r&b", "soul"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_min7_shell_a: {
        id: "c_min7_shell_a",
        name: "C Minor 7",
        symbol: "Cm7",
        altSymbols: ["Cmin7", "C-7"],
        root: "C",
        quality: "minor7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["C", "Eb", "Bb"],
        frets: [-1, 3, -1, 3, 4, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 3,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "melancholic", "smooth"],
            styles: ["jazz", "bossa nova", "r&b", "soul"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // C#/Db Minor 7 Shells
    csharp_min7_shell_e: {
        id: "csharp_min7_shell_e",
        name: "C# Minor 7",
        symbol: "C#m7",
        altSymbols: ["Dbm7", "C#min7", "Dbmin7"],
        root: "C#",
        quality: "minor7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["C#", "E", "B"],
        frets: [9, -1, 9, 9, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 9,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "melancholic", "smooth"],
            styles: ["jazz", "bossa nova", "r&b", "soul"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    csharp_min7_shell_a: {
        id: "csharp_min7_shell_a",
        name: "C# Minor 7",
        symbol: "C#m7",
        altSymbols: ["Dbm7", "C#min7", "Dbmin7"],
        root: "C#",
        quality: "minor7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["C#", "E", "B"],
        frets: [-1, 4, -1, 4, 5, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 4,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "melancholic", "smooth"],
            styles: ["jazz", "bossa nova", "r&b", "soul"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // D Minor 7 Shells
    d_min7_shell_e: {
        id: "d_min7_shell_e",
        name: "D Minor 7",
        symbol: "Dm7",
        altSymbols: ["Dmin7", "D-7"],
        root: "D",
        quality: "minor7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["D", "F", "C"],
        frets: [10, -1, 10, 10, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 10,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "melancholic", "smooth"],
            styles: ["jazz", "bossa nova", "r&b", "soul"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_min7_shell_a: {
        id: "d_min7_shell_a",
        name: "D Minor 7",
        symbol: "Dm7",
        altSymbols: ["Dmin7", "D-7"],
        root: "D",
        quality: "minor7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["D", "F", "C"],
        frets: [-1, 5, -1, 5, 6, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 5,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "melancholic", "smooth"],
            styles: ["jazz", "bossa nova", "r&b", "soul"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // D#/Eb Minor 7 Shells
    dsharp_min7_shell_e: {
        id: "dsharp_min7_shell_e",
        name: "Eb Minor 7",
        symbol: "Ebm7",
        altSymbols: ["D#m7", "Ebmin7", "D#min7"],
        root: "Eb",
        quality: "minor7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["Eb", "Gb", "Db"],
        frets: [11, -1, 11, 11, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 11,
        difficulty: 3,
        categories: {
            moods: ["jazzy", "melancholic", "smooth"],
            styles: ["jazz", "bossa nova", "r&b", "soul"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    dsharp_min7_shell_a: {
        id: "dsharp_min7_shell_a",
        name: "Eb Minor 7",
        symbol: "Ebm7",
        altSymbols: ["D#m7", "Ebmin7", "D#min7"],
        root: "Eb",
        quality: "minor7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["Eb", "Gb", "Db"],
        frets: [-1, 6, -1, 6, 7, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 6,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "melancholic", "smooth"],
            styles: ["jazz", "bossa nova", "r&b", "soul"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // E Minor 7 Shells
    e_min7_shell_e: {
        id: "e_min7_shell_e",
        name: "E Minor 7",
        symbol: "Em7",
        altSymbols: ["Emin7", "E-7"],
        root: "E",
        quality: "minor7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["E", "G", "D"],
        frets: [0, -1, 0, 0, -1, -1],
        fingers: [0, 0, 0, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "melancholic", "smooth"],
            styles: ["jazz", "bossa nova", "r&b", "soul"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_min7_shell_a: {
        id: "e_min7_shell_a",
        name: "E Minor 7",
        symbol: "Em7",
        altSymbols: ["Emin7", "E-7"],
        root: "E",
        quality: "minor7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["E", "G", "D"],
        frets: [-1, 7, -1, 7, 8, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 7,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "melancholic", "smooth"],
            styles: ["jazz", "bossa nova", "r&b", "soul"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // F Minor 7 Shells
    f_min7_shell_e: {
        id: "f_min7_shell_e",
        name: "F Minor 7",
        symbol: "Fm7",
        altSymbols: ["Fmin7", "F-7"],
        root: "F",
        quality: "minor7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["F", "Ab", "Eb"],
        frets: [1, -1, 1, 1, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "melancholic", "smooth"],
            styles: ["jazz", "bossa nova", "r&b", "soul"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_min7_shell_a: {
        id: "f_min7_shell_a",
        name: "F Minor 7",
        symbol: "Fm7",
        altSymbols: ["Fmin7", "F-7"],
        root: "F",
        quality: "minor7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["F", "Ab", "Eb"],
        frets: [-1, 8, -1, 8, 9, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 8,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "melancholic", "smooth"],
            styles: ["jazz", "bossa nova", "r&b", "soul"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // F#/Gb Minor 7 Shells
    fsharp_min7_shell_e: {
        id: "fsharp_min7_shell_e",
        name: "F# Minor 7",
        symbol: "F#m7",
        altSymbols: ["Gbm7", "F#min7", "Gbmin7"],
        root: "F#",
        quality: "minor7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["F#", "A", "E"],
        frets: [2, -1, 2, 2, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 2,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "melancholic", "smooth"],
            styles: ["jazz", "bossa nova", "r&b", "soul"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    fsharp_min7_shell_a: {
        id: "fsharp_min7_shell_a",
        name: "F# Minor 7",
        symbol: "F#m7",
        altSymbols: ["Gbm7", "F#min7", "Gbmin7"],
        root: "F#",
        quality: "minor7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["F#", "A", "E"],
        frets: [-1, 9, -1, 9, 10, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 9,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "melancholic", "smooth"],
            styles: ["jazz", "bossa nova", "r&b", "soul"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // G Minor 7 Shells
    g_min7_shell_e: {
        id: "g_min7_shell_e",
        name: "G Minor 7",
        symbol: "Gm7",
        altSymbols: ["Gmin7", "G-7"],
        root: "G",
        quality: "minor7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["G", "Bb", "F"],
        frets: [3, -1, 3, 3, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 3,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "melancholic", "smooth"],
            styles: ["jazz", "bossa nova", "r&b", "soul"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_min7_shell_a: {
        id: "g_min7_shell_a",
        name: "G Minor 7",
        symbol: "Gm7",
        altSymbols: ["Gmin7", "G-7"],
        root: "G",
        quality: "minor7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["G", "Bb", "F"],
        frets: [-1, 10, -1, 10, 11, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 10,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "melancholic", "smooth"],
            styles: ["jazz", "bossa nova", "r&b", "soul"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // G#/Ab Minor 7 Shells
    gsharp_min7_shell_e: {
        id: "gsharp_min7_shell_e",
        name: "Ab Minor 7",
        symbol: "Abm7",
        altSymbols: ["G#m7", "Abmin7", "G#min7"],
        root: "Ab",
        quality: "minor7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["Ab", "Cb", "Gb"],
        frets: [4, -1, 4, 4, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 4,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "melancholic", "smooth"],
            styles: ["jazz", "bossa nova", "r&b", "soul"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    gsharp_min7_shell_a: {
        id: "gsharp_min7_shell_a",
        name: "Ab Minor 7",
        symbol: "Abm7",
        altSymbols: ["G#m7", "Abmin7", "G#min7"],
        root: "Ab",
        quality: "minor7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["Ab", "Cb", "Gb"],
        frets: [-1, 11, -1, 11, 12, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 11,
        difficulty: 3,
        categories: {
            moods: ["jazzy", "melancholic", "smooth"],
            styles: ["jazz", "bossa nova", "r&b", "soul"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // A Minor 7 Shells
    a_min7_shell_e: {
        id: "a_min7_shell_e",
        name: "A Minor 7",
        symbol: "Am7",
        altSymbols: ["Amin7", "A-7"],
        root: "A",
        quality: "minor7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["A", "C", "G"],
        frets: [5, -1, 5, 5, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 5,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "melancholic", "smooth"],
            styles: ["jazz", "bossa nova", "r&b", "soul"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_min7_shell_a: {
        id: "a_min7_shell_a",
        name: "A Minor 7",
        symbol: "Am7",
        altSymbols: ["Amin7", "A-7"],
        root: "A",
        quality: "minor7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["A", "C", "G"],
        frets: [-1, 0, -1, 0, 1, -1],
        fingers: [0, 0, 0, 0, 1, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "melancholic", "smooth"],
            styles: ["jazz", "bossa nova", "r&b", "soul"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // A#/Bb Minor 7 Shells
    asharp_min7_shell_e: {
        id: "asharp_min7_shell_e",
        name: "Bb Minor 7",
        symbol: "Bbm7",
        altSymbols: ["A#m7", "Bbmin7", "A#min7"],
        root: "Bb",
        quality: "minor7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["Bb", "Db", "Ab"],
        frets: [6, -1, 6, 6, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 6,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "melancholic", "smooth"],
            styles: ["jazz", "bossa nova", "r&b", "soul"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    asharp_min7_shell_a: {
        id: "asharp_min7_shell_a",
        name: "Bb Minor 7",
        symbol: "Bbm7",
        altSymbols: ["A#m7", "Bbmin7", "A#min7"],
        root: "Bb",
        quality: "minor7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["Bb", "Db", "Ab"],
        frets: [-1, 1, -1, 1, 2, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "melancholic", "smooth"],
            styles: ["jazz", "bossa nova", "r&b", "soul"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // B Minor 7 Shells
    b_min7_shell_e: {
        id: "b_min7_shell_e",
        name: "B Minor 7",
        symbol: "Bm7",
        altSymbols: ["Bmin7", "B-7"],
        root: "B",
        quality: "minor7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["B", "D", "A"],
        frets: [7, -1, 7, 7, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 7,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "melancholic", "smooth"],
            styles: ["jazz", "bossa nova", "r&b", "soul"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    b_min7_shell_a: {
        id: "b_min7_shell_a",
        name: "B Minor 7",
        symbol: "Bm7",
        altSymbols: ["Bmin7", "B-7"],
        root: "B",
        quality: "minor7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["B", "D", "A"],
        frets: [-1, 2, -1, 2, 3, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 2,
        difficulty: 2,
        categories: {
            moods: ["jazzy", "melancholic", "smooth"],
            styles: ["jazz", "bossa nova", "r&b", "soul"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // === DOMINANT 7 SHELL VOICINGS ===

    // C Dominant 7 Shells
    c_dom7_shell_e: {
        id: "c_dom7_shell_e",
        name: "C7",
        symbol: "C7",
        altSymbols: ["Cdom7"],
        root: "C",
        quality: "dominant7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "3", "b7"],
        notes: ["C", "E", "Bb"],
        frets: [8, -1, 9, 8, -1, -1],
        fingers: [1, 0, 3, 2, 0, 0],
        barre: null,
        position: 8,
        difficulty: 2,
        categories: {
            moods: ["bluesy", "jazzy", "energetic"],
            styles: ["jazz", "blues", "funk", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_dom7_shell_a: {
        id: "c_dom7_shell_a",
        name: "C7",
        symbol: "C7",
        altSymbols: ["Cdom7"],
        root: "C",
        quality: "dominant7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "3", "b7"],
        notes: ["C", "E", "Bb"],
        frets: [-1, 3, -1, 4, 3, -1],
        fingers: [0, 1, 0, 3, 2, 0],
        barre: null,
        position: 3,
        difficulty: 2,
        categories: {
            moods: ["bluesy", "jazzy", "energetic"],
            styles: ["jazz", "blues", "funk", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // C#/Db Dominant 7 Shells
    csharp_dom7_shell_e: {
        id: "csharp_dom7_shell_e",
        name: "C#7",
        symbol: "C#7",
        altSymbols: ["Db7", "C#dom7", "Dbdom7"],
        root: "C#",
        quality: "dominant7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "3", "b7"],
        notes: ["C#", "E#", "B"],
        frets: [9, -1, 10, 9, -1, -1],
        fingers: [1, 0, 3, 2, 0, 0],
        barre: null,
        position: 9,
        difficulty: 2,
        categories: {
            moods: ["bluesy", "jazzy", "energetic"],
            styles: ["jazz", "blues", "funk", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    csharp_dom7_shell_a: {
        id: "csharp_dom7_shell_a",
        name: "C#7",
        symbol: "C#7",
        altSymbols: ["Db7", "C#dom7", "Dbdom7"],
        root: "C#",
        quality: "dominant7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "3", "b7"],
        notes: ["C#", "E#", "B"],
        frets: [-1, 4, -1, 5, 4, -1],
        fingers: [0, 1, 0, 3, 2, 0],
        barre: null,
        position: 4,
        difficulty: 2,
        categories: {
            moods: ["bluesy", "jazzy", "energetic"],
            styles: ["jazz", "blues", "funk", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // D Dominant 7 Shells
    d_dom7_shell_e: {
        id: "d_dom7_shell_e",
        name: "D7",
        symbol: "D7",
        altSymbols: ["Ddom7"],
        root: "D",
        quality: "dominant7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "3", "b7"],
        notes: ["D", "F#", "C"],
        frets: [10, -1, 11, 10, -1, -1],
        fingers: [1, 0, 3, 2, 0, 0],
        barre: null,
        position: 10,
        difficulty: 2,
        categories: {
            moods: ["bluesy", "jazzy", "energetic"],
            styles: ["jazz", "blues", "funk", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_dom7_shell_a: {
        id: "d_dom7_shell_a",
        name: "D7",
        symbol: "D7",
        altSymbols: ["Ddom7"],
        root: "D",
        quality: "dominant7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "3", "b7"],
        notes: ["D", "F#", "C"],
        frets: [-1, 5, -1, 6, 5, -1],
        fingers: [0, 1, 0, 3, 2, 0],
        barre: null,
        position: 5,
        difficulty: 2,
        categories: {
            moods: ["bluesy", "jazzy", "energetic"],
            styles: ["jazz", "blues", "funk", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // D#/Eb Dominant 7 Shells
    dsharp_dom7_shell_e: {
        id: "dsharp_dom7_shell_e",
        name: "Eb7",
        symbol: "Eb7",
        altSymbols: ["D#7", "Ebdom7", "D#dom7"],
        root: "Eb",
        quality: "dominant7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "3", "b7"],
        notes: ["Eb", "G", "Db"],
        frets: [11, -1, 12, 11, -1, -1],
        fingers: [1, 0, 3, 2, 0, 0],
        barre: null,
        position: 11,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "jazzy", "energetic"],
            styles: ["jazz", "blues", "funk", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    dsharp_dom7_shell_a: {
        id: "dsharp_dom7_shell_a",
        name: "Eb7",
        symbol: "Eb7",
        altSymbols: ["D#7", "Ebdom7", "D#dom7"],
        root: "Eb",
        quality: "dominant7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "3", "b7"],
        notes: ["Eb", "G", "Db"],
        frets: [-1, 6, -1, 7, 6, -1],
        fingers: [0, 1, 0, 3, 2, 0],
        barre: null,
        position: 6,
        difficulty: 2,
        categories: {
            moods: ["bluesy", "jazzy", "energetic"],
            styles: ["jazz", "blues", "funk", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // E Dominant 7 Shells
    e_dom7_shell_e: {
        id: "e_dom7_shell_e",
        name: "E7",
        symbol: "E7",
        altSymbols: ["Edom7"],
        root: "E",
        quality: "dominant7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "3", "b7"],
        notes: ["E", "G#", "D"],
        frets: [0, -1, 1, 0, -1, -1],
        fingers: [0, 0, 1, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["bluesy", "jazzy", "energetic"],
            styles: ["jazz", "blues", "funk", "r&b"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_dom7_shell_a: {
        id: "e_dom7_shell_a",
        name: "E7",
        symbol: "E7",
        altSymbols: ["Edom7"],
        root: "E",
        quality: "dominant7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "3", "b7"],
        notes: ["E", "G#", "D"],
        frets: [-1, 7, -1, 8, 7, -1],
        fingers: [0, 1, 0, 3, 2, 0],
        barre: null,
        position: 7,
        difficulty: 2,
        categories: {
            moods: ["bluesy", "jazzy", "energetic"],
            styles: ["jazz", "blues", "funk", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // F Dominant 7 Shells
    f_dom7_shell_e: {
        id: "f_dom7_shell_e",
        name: "F7",
        symbol: "F7",
        altSymbols: ["Fdom7"],
        root: "F",
        quality: "dominant7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "3", "b7"],
        notes: ["F", "A", "Eb"],
        frets: [1, -1, 2, 1, -1, -1],
        fingers: [1, 0, 3, 2, 0, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["bluesy", "jazzy", "energetic"],
            styles: ["jazz", "blues", "funk", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_dom7_shell_a: {
        id: "f_dom7_shell_a",
        name: "F7",
        symbol: "F7",
        altSymbols: ["Fdom7"],
        root: "F",
        quality: "dominant7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "3", "b7"],
        notes: ["F", "A", "Eb"],
        frets: [-1, 8, -1, 9, 8, -1],
        fingers: [0, 1, 0, 3, 2, 0],
        barre: null,
        position: 8,
        difficulty: 2,
        categories: {
            moods: ["bluesy", "jazzy", "energetic"],
            styles: ["jazz", "blues", "funk", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // F#/Gb Dominant 7 Shells
    fsharp_dom7_shell_e: {
        id: "fsharp_dom7_shell_e",
        name: "F#7",
        symbol: "F#7",
        altSymbols: ["Gb7", "F#dom7", "Gbdom7"],
        root: "F#",
        quality: "dominant7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "3", "b7"],
        notes: ["F#", "A#", "E"],
        frets: [2, -1, 3, 2, -1, -1],
        fingers: [1, 0, 3, 2, 0, 0],
        barre: null,
        position: 2,
        difficulty: 2,
        categories: {
            moods: ["bluesy", "jazzy", "energetic"],
            styles: ["jazz", "blues", "funk", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    fsharp_dom7_shell_a: {
        id: "fsharp_dom7_shell_a",
        name: "F#7",
        symbol: "F#7",
        altSymbols: ["Gb7", "F#dom7", "Gbdom7"],
        root: "F#",
        quality: "dominant7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "3", "b7"],
        notes: ["F#", "A#", "E"],
        frets: [-1, 9, -1, 10, 9, -1],
        fingers: [0, 1, 0, 3, 2, 0],
        barre: null,
        position: 9,
        difficulty: 2,
        categories: {
            moods: ["bluesy", "jazzy", "energetic"],
            styles: ["jazz", "blues", "funk", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // G Dominant 7 Shells
    g_dom7_shell_e: {
        id: "g_dom7_shell_e",
        name: "G7",
        symbol: "G7",
        altSymbols: ["Gdom7"],
        root: "G",
        quality: "dominant7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "3", "b7"],
        notes: ["G", "B", "F"],
        frets: [3, -1, 4, 3, -1, -1],
        fingers: [1, 0, 3, 2, 0, 0],
        barre: null,
        position: 3,
        difficulty: 2,
        categories: {
            moods: ["bluesy", "jazzy", "energetic"],
            styles: ["jazz", "blues", "funk", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_dom7_shell_a: {
        id: "g_dom7_shell_a",
        name: "G7",
        symbol: "G7",
        altSymbols: ["Gdom7"],
        root: "G",
        quality: "dominant7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "3", "b7"],
        notes: ["G", "B", "F"],
        frets: [-1, 10, -1, 11, 10, -1],
        fingers: [0, 1, 0, 3, 2, 0],
        barre: null,
        position: 10,
        difficulty: 2,
        categories: {
            moods: ["bluesy", "jazzy", "energetic"],
            styles: ["jazz", "blues", "funk", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // G#/Ab Dominant 7 Shells
    gsharp_dom7_shell_e: {
        id: "gsharp_dom7_shell_e",
        name: "Ab7",
        symbol: "Ab7",
        altSymbols: ["G#7", "Abdom7", "G#dom7"],
        root: "Ab",
        quality: "dominant7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "3", "b7"],
        notes: ["Ab", "C", "Gb"],
        frets: [4, -1, 5, 4, -1, -1],
        fingers: [1, 0, 3, 2, 0, 0],
        barre: null,
        position: 4,
        difficulty: 2,
        categories: {
            moods: ["bluesy", "jazzy", "energetic"],
            styles: ["jazz", "blues", "funk", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    gsharp_dom7_shell_a: {
        id: "gsharp_dom7_shell_a",
        name: "Ab7",
        symbol: "Ab7",
        altSymbols: ["G#7", "Abdom7", "G#dom7"],
        root: "Ab",
        quality: "dominant7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "3", "b7"],
        notes: ["Ab", "C", "Gb"],
        frets: [-1, 11, -1, 12, 11, -1],
        fingers: [0, 1, 0, 3, 2, 0],
        barre: null,
        position: 11,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "jazzy", "energetic"],
            styles: ["jazz", "blues", "funk", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // A Dominant 7 Shells
    a_dom7_shell_e: {
        id: "a_dom7_shell_e",
        name: "A7",
        symbol: "A7",
        altSymbols: ["Adom7"],
        root: "A",
        quality: "dominant7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "3", "b7"],
        notes: ["A", "C#", "G"],
        frets: [5, -1, 6, 5, -1, -1],
        fingers: [1, 0, 3, 2, 0, 0],
        barre: null,
        position: 5,
        difficulty: 2,
        categories: {
            moods: ["bluesy", "jazzy", "energetic"],
            styles: ["jazz", "blues", "funk", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_dom7_shell_a: {
        id: "a_dom7_shell_a",
        name: "A7",
        symbol: "A7",
        altSymbols: ["Adom7"],
        root: "A",
        quality: "dominant7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "3", "b7"],
        notes: ["A", "C#", "G"],
        frets: [-1, 0, -1, 1, 0, -1],
        fingers: [0, 0, 0, 1, 0, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["bluesy", "jazzy", "energetic"],
            styles: ["jazz", "blues", "funk", "r&b"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // A#/Bb Dominant 7 Shells
    asharp_dom7_shell_e: {
        id: "asharp_dom7_shell_e",
        name: "Bb7",
        symbol: "Bb7",
        altSymbols: ["A#7", "Bbdom7", "A#dom7"],
        root: "Bb",
        quality: "dominant7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "3", "b7"],
        notes: ["Bb", "D", "Ab"],
        frets: [6, -1, 7, 6, -1, -1],
        fingers: [1, 0, 3, 2, 0, 0],
        barre: null,
        position: 6,
        difficulty: 2,
        categories: {
            moods: ["bluesy", "jazzy", "energetic"],
            styles: ["jazz", "blues", "funk", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    asharp_dom7_shell_a: {
        id: "asharp_dom7_shell_a",
        name: "Bb7",
        symbol: "Bb7",
        altSymbols: ["A#7", "Bbdom7", "A#dom7"],
        root: "Bb",
        quality: "dominant7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "3", "b7"],
        notes: ["Bb", "D", "Ab"],
        frets: [-1, 1, -1, 2, 1, -1],
        fingers: [0, 1, 0, 3, 2, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["bluesy", "jazzy", "energetic"],
            styles: ["jazz", "blues", "funk", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // B Dominant 7 Shells
    b_dom7_shell_e: {
        id: "b_dom7_shell_e",
        name: "B7",
        symbol: "B7",
        altSymbols: ["Bdom7"],
        root: "B",
        quality: "dominant7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "3", "b7"],
        notes: ["B", "D#", "A"],
        frets: [7, -1, 8, 7, -1, -1],
        fingers: [1, 0, 3, 2, 0, 0],
        barre: null,
        position: 7,
        difficulty: 2,
        categories: {
            moods: ["bluesy", "jazzy", "energetic"],
            styles: ["jazz", "blues", "funk", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    b_dom7_shell_a: {
        id: "b_dom7_shell_a",
        name: "B7",
        symbol: "B7",
        altSymbols: ["Bdom7"],
        root: "B",
        quality: "dominant7",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "3", "b7"],
        notes: ["B", "D#", "A"],
        frets: [-1, 2, -1, 3, 2, -1],
        fingers: [0, 1, 0, 3, 2, 0],
        barre: null,
        position: 2,
        difficulty: 2,
        categories: {
            moods: ["bluesy", "jazzy", "energetic"],
            styles: ["jazz", "blues", "funk", "r&b"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // === MINOR 7 FLAT 5 (HALF-DIMINISHED) SHELL VOICINGS ===

    // C Minor 7b5 Shells
    c_m7b5_shell_e: {
        id: "c_m7b5_shell_e",
        name: "C Minor 7b5",
        symbol: "Cm7b5",
        altSymbols: ["Cø7", "Cø", "C half-dim"],
        root: "C",
        quality: "minor7b5",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["C", "Eb", "Bb"],
        frets: [8, -1, 8, 8, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 8,
        difficulty: 3,
        categories: {
            moods: ["dark", "jazzy", "tense"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_m7b5_shell_a: {
        id: "c_m7b5_shell_a",
        name: "C Minor 7b5",
        symbol: "Cm7b5",
        altSymbols: ["Cø7", "Cø", "C half-dim"],
        root: "C",
        quality: "minor7b5",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["C", "Eb", "Bb"],
        frets: [-1, 3, -1, 3, 4, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["dark", "jazzy", "tense"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // C#/Db Minor 7b5 Shells
    csharp_m7b5_shell_e: {
        id: "csharp_m7b5_shell_e",
        name: "C# Minor 7b5",
        symbol: "C#m7b5",
        altSymbols: ["Dbm7b5", "C#ø7", "Dbø7"],
        root: "C#",
        quality: "minor7b5",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["C#", "E", "B"],
        frets: [9, -1, 9, 9, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 9,
        difficulty: 3,
        categories: {
            moods: ["dark", "jazzy", "tense"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    csharp_m7b5_shell_a: {
        id: "csharp_m7b5_shell_a",
        name: "C# Minor 7b5",
        symbol: "C#m7b5",
        altSymbols: ["Dbm7b5", "C#ø7", "Dbø7"],
        root: "C#",
        quality: "minor7b5",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["C#", "E", "B"],
        frets: [-1, 4, -1, 4, 5, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["dark", "jazzy", "tense"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // D Minor 7b5 Shells
    d_m7b5_shell_e: {
        id: "d_m7b5_shell_e",
        name: "D Minor 7b5",
        symbol: "Dm7b5",
        altSymbols: ["Dø7", "Dø", "D half-dim"],
        root: "D",
        quality: "minor7b5",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["D", "F", "C"],
        frets: [10, -1, 10, 10, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 10,
        difficulty: 3,
        categories: {
            moods: ["dark", "jazzy", "tense"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_m7b5_shell_a: {
        id: "d_m7b5_shell_a",
        name: "D Minor 7b5",
        symbol: "Dm7b5",
        altSymbols: ["Dø7", "Dø", "D half-dim"],
        root: "D",
        quality: "minor7b5",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["D", "F", "C"],
        frets: [-1, 5, -1, 5, 6, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["dark", "jazzy", "tense"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // D#/Eb Minor 7b5 Shells
    dsharp_m7b5_shell_e: {
        id: "dsharp_m7b5_shell_e",
        name: "Eb Minor 7b5",
        symbol: "Ebm7b5",
        altSymbols: ["D#m7b5", "Ebø7", "D#ø7"],
        root: "Eb",
        quality: "minor7b5",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["Eb", "Gb", "Db"],
        frets: [11, -1, 11, 11, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 11,
        difficulty: 3,
        categories: {
            moods: ["dark", "jazzy", "tense"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    dsharp_m7b5_shell_a: {
        id: "dsharp_m7b5_shell_a",
        name: "Eb Minor 7b5",
        symbol: "Ebm7b5",
        altSymbols: ["D#m7b5", "Ebø7", "D#ø7"],
        root: "Eb",
        quality: "minor7b5",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["Eb", "Gb", "Db"],
        frets: [-1, 6, -1, 6, 7, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["dark", "jazzy", "tense"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // E Minor 7b5 Shells
    e_m7b5_shell_e: {
        id: "e_m7b5_shell_e",
        name: "E Minor 7b5",
        symbol: "Em7b5",
        altSymbols: ["Eø7", "Eø", "E half-dim"],
        root: "E",
        quality: "minor7b5",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["E", "G", "D"],
        frets: [0, -1, 0, 0, -1, -1],
        fingers: [0, 0, 0, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dark", "jazzy", "tense"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_m7b5_shell_a: {
        id: "e_m7b5_shell_a",
        name: "E Minor 7b5",
        symbol: "Em7b5",
        altSymbols: ["Eø7", "Eø", "E half-dim"],
        root: "E",
        quality: "minor7b5",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["E", "G", "D"],
        frets: [-1, 7, -1, 7, 8, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["dark", "jazzy", "tense"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // F Minor 7b5 Shells
    f_m7b5_shell_e: {
        id: "f_m7b5_shell_e",
        name: "F Minor 7b5",
        symbol: "Fm7b5",
        altSymbols: ["Fø7", "Fø", "F half-dim"],
        root: "F",
        quality: "minor7b5",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["F", "Ab", "Eb"],
        frets: [1, -1, 1, 1, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dark", "jazzy", "tense"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_m7b5_shell_a: {
        id: "f_m7b5_shell_a",
        name: "F Minor 7b5",
        symbol: "Fm7b5",
        altSymbols: ["Fø7", "Fø", "F half-dim"],
        root: "F",
        quality: "minor7b5",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["F", "Ab", "Eb"],
        frets: [-1, 8, -1, 8, 9, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 8,
        difficulty: 3,
        categories: {
            moods: ["dark", "jazzy", "tense"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // F#/Gb Minor 7b5 Shells
    fsharp_m7b5_shell_e: {
        id: "fsharp_m7b5_shell_e",
        name: "F# Minor 7b5",
        symbol: "F#m7b5",
        altSymbols: ["Gbm7b5", "F#ø7", "Gbø7"],
        root: "F#",
        quality: "minor7b5",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["F#", "A", "E"],
        frets: [2, -1, 2, 2, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["dark", "jazzy", "tense"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    fsharp_m7b5_shell_a: {
        id: "fsharp_m7b5_shell_a",
        name: "F# Minor 7b5",
        symbol: "F#m7b5",
        altSymbols: ["Gbm7b5", "F#ø7", "Gbø7"],
        root: "F#",
        quality: "minor7b5",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["F#", "A", "E"],
        frets: [-1, 9, -1, 9, 10, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 9,
        difficulty: 3,
        categories: {
            moods: ["dark", "jazzy", "tense"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // G Minor 7b5 Shells
    g_m7b5_shell_e: {
        id: "g_m7b5_shell_e",
        name: "G Minor 7b5",
        symbol: "Gm7b5",
        altSymbols: ["Gø7", "Gø", "G half-dim"],
        root: "G",
        quality: "minor7b5",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["G", "Bb", "F"],
        frets: [3, -1, 3, 3, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["dark", "jazzy", "tense"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_m7b5_shell_a: {
        id: "g_m7b5_shell_a",
        name: "G Minor 7b5",
        symbol: "Gm7b5",
        altSymbols: ["Gø7", "Gø", "G half-dim"],
        root: "G",
        quality: "minor7b5",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["G", "Bb", "F"],
        frets: [-1, 10, -1, 10, 11, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 10,
        difficulty: 3,
        categories: {
            moods: ["dark", "jazzy", "tense"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // G#/Ab Minor 7b5 Shells
    gsharp_m7b5_shell_e: {
        id: "gsharp_m7b5_shell_e",
        name: "Ab Minor 7b5",
        symbol: "Abm7b5",
        altSymbols: ["G#m7b5", "Abø7", "G#ø7"],
        root: "Ab",
        quality: "minor7b5",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["Ab", "Cb", "Gb"],
        frets: [4, -1, 4, 4, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["dark", "jazzy", "tense"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    gsharp_m7b5_shell_a: {
        id: "gsharp_m7b5_shell_a",
        name: "Ab Minor 7b5",
        symbol: "Abm7b5",
        altSymbols: ["G#m7b5", "Abø7", "G#ø7"],
        root: "Ab",
        quality: "minor7b5",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["Ab", "Cb", "Gb"],
        frets: [-1, 11, -1, 11, 12, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 11,
        difficulty: 3,
        categories: {
            moods: ["dark", "jazzy", "tense"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // A Minor 7b5 Shells
    a_m7b5_shell_e: {
        id: "a_m7b5_shell_e",
        name: "A Minor 7b5",
        symbol: "Am7b5",
        altSymbols: ["Aø7", "Aø", "A half-dim"],
        root: "A",
        quality: "minor7b5",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["A", "C", "G"],
        frets: [5, -1, 5, 5, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["dark", "jazzy", "tense"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_m7b5_shell_a: {
        id: "a_m7b5_shell_a",
        name: "A Minor 7b5",
        symbol: "Am7b5",
        altSymbols: ["Aø7", "Aø", "A half-dim"],
        root: "A",
        quality: "minor7b5",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["A", "C", "G"],
        frets: [-1, 0, -1, 0, 1, -1],
        fingers: [0, 0, 0, 0, 1, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dark", "jazzy", "tense"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // A#/Bb Minor 7b5 Shells
    asharp_m7b5_shell_e: {
        id: "asharp_m7b5_shell_e",
        name: "Bb Minor 7b5",
        symbol: "Bbm7b5",
        altSymbols: ["A#m7b5", "Bbø7", "A#ø7"],
        root: "Bb",
        quality: "minor7b5",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["Bb", "Db", "Ab"],
        frets: [6, -1, 6, 6, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["dark", "jazzy", "tense"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    asharp_m7b5_shell_a: {
        id: "asharp_m7b5_shell_a",
        name: "Bb Minor 7b5",
        symbol: "Bbm7b5",
        altSymbols: ["A#m7b5", "Bbø7", "A#ø7"],
        root: "Bb",
        quality: "minor7b5",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["Bb", "Db", "Ab"],
        frets: [-1, 1, -1, 1, 2, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dark", "jazzy", "tense"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // B Minor 7b5 Shells
    b_m7b5_shell_e: {
        id: "b_m7b5_shell_e",
        name: "B Minor 7b5",
        symbol: "Bm7b5",
        altSymbols: ["Bø7", "Bø", "B half-dim"],
        root: "B",
        quality: "minor7b5",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 6th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["B", "D", "A"],
        frets: [7, -1, 7, 7, -1, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        barre: null,
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["dark", "jazzy", "tense"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    b_m7b5_shell_a: {
        id: "b_m7b5_shell_a",
        name: "B Minor 7b5",
        symbol: "Bm7b5",
        altSymbols: ["Bø7", "Bø", "B half-dim"],
        root: "B",
        quality: "minor7b5",
        voicingType: "shell",
        voicingDescription: "Shell voicing (root on 5th string)",
        intervals: ["1", "b3", "b7"],
        notes: ["B", "D", "A"],
        frets: [-1, 2, -1, 2, 3, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["dark", "jazzy", "tense"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // ===== DROP 2 VOICINGS - MAJOR 7 (Strings 1-4) =====

    // C Major 7 Drop 2 - Strings 1-4
    c_maj7_drop2_root_top: {
        id: "c_maj7_drop2_root_top",
        name: "C Major 7",
        symbol: "Cmaj7",
        altSymbols: ["CΔ7", "CM7"],
        root: "C",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "3", "5", "7"],
        notes: ["C", "E", "G", "B"],
        frets: [-1, -1, 10, 9, 8, 8],
        fingers: [0, 0, 4, 3, 1, 1],
        barre: { fret: 8, fromString: 1, toString: 2 },
        position: 8,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_maj7_drop2_inv1_top: {
        id: "c_maj7_drop2_inv1_top",
        name: "C Major 7",
        symbol: "Cmaj7",
        altSymbols: ["CΔ7", "CM7"],
        root: "C",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["3", "5", "7", "1"],
        notes: ["E", "G", "B", "C"],
        frets: [-1, -1, 2, 4, 4, 3],
        fingers: [0, 0, 1, 3, 4, 2],
        barre: null,
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_maj7_drop2_inv2_top: {
        id: "c_maj7_drop2_inv2_top",
        name: "C Major 7",
        symbol: "Cmaj7",
        altSymbols: ["CΔ7", "CM7"],
        root: "C",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["5", "7", "1", "3"],
        notes: ["G", "B", "C", "E"],
        frets: [-1, -1, 5, 4, 5, 5],
        fingers: [0, 0, 2, 1, 3, 4],
        barre: null,
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_maj7_drop2_inv3_top: {
        id: "c_maj7_drop2_inv3_top",
        name: "C Major 7",
        symbol: "Cmaj7",
        altSymbols: ["CΔ7", "CM7"],
        root: "C",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["7", "1", "3", "5"],
        notes: ["B", "C", "E", "G"],
        frets: [-1, -1, 9, 9, 8, 8],
        fingers: [0, 0, 2, 3, 1, 1],
        barre: { fret: 8, fromString: 1, toString: 2 },
        position: 8,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // D Major 7 Drop 2 - Strings 1-4
    d_maj7_drop2_root_top: {
        id: "d_maj7_drop2_root_top",
        name: "D Major 7",
        symbol: "Dmaj7",
        altSymbols: ["DΔ7", "DM7"],
        root: "D",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "3", "5", "7"],
        notes: ["D", "F#", "A", "C#"],
        frets: [-1, -1, 12, 11, 10, 10],
        fingers: [0, 0, 4, 3, 1, 1],
        barre: { fret: 10, fromString: 1, toString: 2 },
        position: 10,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_maj7_drop2_inv1_top: {
        id: "d_maj7_drop2_inv1_top",
        name: "D Major 7",
        symbol: "Dmaj7",
        altSymbols: ["DΔ7", "DM7"],
        root: "D",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["3", "5", "7", "1"],
        notes: ["F#", "A", "C#", "D"],
        frets: [-1, -1, 4, 6, 6, 5],
        fingers: [0, 0, 1, 3, 4, 2],
        barre: null,
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_maj7_drop2_inv2_top: {
        id: "d_maj7_drop2_inv2_top",
        name: "D Major 7",
        symbol: "Dmaj7",
        altSymbols: ["DΔ7", "DM7"],
        root: "D",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["5", "7", "1", "3"],
        notes: ["A", "C#", "D", "F#"],
        frets: [-1, -1, 7, 6, 7, 7],
        fingers: [0, 0, 2, 1, 3, 4],
        barre: null,
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_maj7_drop2_inv3_top: {
        id: "d_maj7_drop2_inv3_top",
        name: "D Major 7",
        symbol: "Dmaj7",
        altSymbols: ["DΔ7", "DM7"],
        root: "D",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["7", "1", "3", "5"],
        notes: ["C#", "D", "F#", "A"],
        frets: [-1, -1, 11, 11, 10, 10],
        fingers: [0, 0, 2, 3, 1, 1],
        barre: { fret: 10, fromString: 1, toString: 2 },
        position: 10,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // E Major 7 Drop 2 - Strings 1-4
    e_maj7_drop2_root_top: {
        id: "e_maj7_drop2_root_top",
        name: "E Major 7",
        symbol: "Emaj7",
        altSymbols: ["EΔ7", "EM7"],
        root: "E",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "3", "5", "7"],
        notes: ["E", "G#", "B", "D#"],
        frets: [-1, -1, 2, 1, 0, 0],
        fingers: [0, 0, 2, 1, 0, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_maj7_drop2_inv1_top: {
        id: "e_maj7_drop2_inv1_top",
        name: "E Major 7",
        symbol: "Emaj7",
        altSymbols: ["EΔ7", "EM7"],
        root: "E",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["3", "5", "7", "1"],
        notes: ["G#", "B", "D#", "E"],
        frets: [-1, -1, 6, 8, 8, 7],
        fingers: [0, 0, 1, 3, 4, 2],
        barre: null,
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    e_maj7_drop2_inv2_top: {
        id: "e_maj7_drop2_inv2_top",
        name: "E Major 7",
        symbol: "Emaj7",
        altSymbols: ["EΔ7", "EM7"],
        root: "E",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["5", "7", "1", "3"],
        notes: ["B", "D#", "E", "G#"],
        frets: [-1, -1, 9, 8, 9, 9],
        fingers: [0, 0, 2, 1, 3, 4],
        barre: null,
        position: 8,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    e_maj7_drop2_inv3_top: {
        id: "e_maj7_drop2_inv3_top",
        name: "E Major 7",
        symbol: "Emaj7",
        altSymbols: ["EΔ7", "EM7"],
        root: "E",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["7", "1", "3", "5"],
        notes: ["D#", "E", "G#", "B"],
        frets: [-1, -1, 1, 1, 0, 0],
        fingers: [0, 0, 1, 2, 0, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // F Major 7 Drop 2 - Strings 1-4
    f_maj7_drop2_root_top: {
        id: "f_maj7_drop2_root_top",
        name: "F Major 7",
        symbol: "Fmaj7",
        altSymbols: ["FΔ7", "FM7"],
        root: "F",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "3", "5", "7"],
        notes: ["F", "A", "C", "E"],
        frets: [-1, -1, 3, 2, 1, 1],
        fingers: [0, 0, 3, 2, 1, 1],
        barre: { fret: 1, fromString: 1, toString: 2 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_maj7_drop2_inv1_top: {
        id: "f_maj7_drop2_inv1_top",
        name: "F Major 7",
        symbol: "Fmaj7",
        altSymbols: ["FΔ7", "FM7"],
        root: "F",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["3", "5", "7", "1"],
        notes: ["A", "C", "E", "F"],
        frets: [-1, -1, 7, 9, 9, 8],
        fingers: [0, 0, 1, 3, 4, 2],
        barre: null,
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_maj7_drop2_inv2_top: {
        id: "f_maj7_drop2_inv2_top",
        name: "F Major 7",
        symbol: "Fmaj7",
        altSymbols: ["FΔ7", "FM7"],
        root: "F",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["5", "7", "1", "3"],
        notes: ["C", "E", "F", "A"],
        frets: [-1, -1, 10, 9, 10, 10],
        fingers: [0, 0, 2, 1, 3, 4],
        barre: null,
        position: 9,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_maj7_drop2_inv3_top: {
        id: "f_maj7_drop2_inv3_top",
        name: "F Major 7",
        symbol: "Fmaj7",
        altSymbols: ["FΔ7", "FM7"],
        root: "F",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["7", "1", "3", "5"],
        notes: ["E", "F", "A", "C"],
        frets: [-1, -1, 2, 2, 1, 1],
        fingers: [0, 0, 2, 3, 1, 1],
        barre: { fret: 1, fromString: 1, toString: 2 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // G Major 7 Drop 2 - Strings 1-4
    g_maj7_drop2_root_top: {
        id: "g_maj7_drop2_root_top",
        name: "G Major 7",
        symbol: "Gmaj7",
        altSymbols: ["GΔ7", "GM7"],
        root: "G",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "3", "5", "7"],
        notes: ["G", "B", "D", "F#"],
        frets: [-1, -1, 5, 4, 3, 3],
        fingers: [0, 0, 3, 2, 1, 1],
        barre: { fret: 3, fromString: 1, toString: 2 },
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_maj7_drop2_inv1_top: {
        id: "g_maj7_drop2_inv1_top",
        name: "G Major 7",
        symbol: "Gmaj7",
        altSymbols: ["GΔ7", "GM7"],
        root: "G",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["3", "5", "7", "1"],
        notes: ["B", "D", "F#", "G"],
        frets: [-1, -1, 9, 11, 11, 10],
        fingers: [0, 0, 1, 3, 4, 2],
        barre: null,
        position: 9,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_maj7_drop2_inv2_top: {
        id: "g_maj7_drop2_inv2_top",
        name: "G Major 7",
        symbol: "Gmaj7",
        altSymbols: ["GΔ7", "GM7"],
        root: "G",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["5", "7", "1", "3"],
        notes: ["D", "F#", "G", "B"],
        frets: [-1, -1, 12, 11, 12, 12],
        fingers: [0, 0, 2, 1, 3, 4],
        barre: null,
        position: 11,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_maj7_drop2_inv3_top: {
        id: "g_maj7_drop2_inv3_top",
        name: "G Major 7",
        symbol: "Gmaj7",
        altSymbols: ["GΔ7", "GM7"],
        root: "G",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["7", "1", "3", "5"],
        notes: ["F#", "G", "B", "D"],
        frets: [-1, -1, 4, 4, 3, 3],
        fingers: [0, 0, 2, 3, 1, 1],
        barre: { fret: 3, fromString: 1, toString: 2 },
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // A Major 7 Drop 2 - Strings 1-4
    a_maj7_drop2_root_top: {
        id: "a_maj7_drop2_root_top",
        name: "A Major 7",
        symbol: "Amaj7",
        altSymbols: ["AΔ7", "AM7"],
        root: "A",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "3", "5", "7"],
        notes: ["A", "C#", "E", "G#"],
        frets: [-1, -1, 7, 6, 5, 5],
        fingers: [0, 0, 3, 2, 1, 1],
        barre: { fret: 5, fromString: 1, toString: 2 },
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_maj7_drop2_inv1_top: {
        id: "a_maj7_drop2_inv1_top",
        name: "A Major 7",
        symbol: "Amaj7",
        altSymbols: ["AΔ7", "AM7"],
        root: "A",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["3", "5", "7", "1"],
        notes: ["C#", "E", "G#", "A"],
        frets: [-1, -1, 11, 13, 13, 12],
        fingers: [0, 0, 1, 3, 4, 2],
        barre: null,
        position: 11,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_maj7_drop2_inv2_top: {
        id: "a_maj7_drop2_inv2_top",
        name: "A Major 7",
        symbol: "Amaj7",
        altSymbols: ["AΔ7", "AM7"],
        root: "A",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["5", "7", "1", "3"],
        notes: ["E", "G#", "A", "C#"],
        frets: [-1, -1, 2, 1, 2, 2],
        fingers: [0, 0, 2, 1, 3, 4],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_maj7_drop2_inv3_top: {
        id: "a_maj7_drop2_inv3_top",
        name: "A Major 7",
        symbol: "Amaj7",
        altSymbols: ["AΔ7", "AM7"],
        root: "A",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["7", "1", "3", "5"],
        notes: ["G#", "A", "C#", "E"],
        frets: [-1, -1, 6, 6, 5, 5],
        fingers: [0, 0, 2, 3, 1, 1],
        barre: { fret: 5, fromString: 1, toString: 2 },
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // Bb Major 7 Drop 2 - Strings 1-4
    bb_maj7_drop2_root_top: {
        id: "bb_maj7_drop2_root_top",
        name: "Bb Major 7",
        symbol: "Bbmaj7",
        altSymbols: ["BbΔ7", "BbM7"],
        root: "Bb",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "3", "5", "7"],
        notes: ["Bb", "D", "F", "A"],
        frets: [-1, -1, 8, 7, 6, 6],
        fingers: [0, 0, 3, 2, 1, 1],
        barre: { fret: 6, fromString: 1, toString: 2 },
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    bb_maj7_drop2_inv1_top: {
        id: "bb_maj7_drop2_inv1_top",
        name: "Bb Major 7",
        symbol: "Bbmaj7",
        altSymbols: ["BbΔ7", "BbM7"],
        root: "Bb",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["3", "5", "7", "1"],
        notes: ["D", "F", "A", "Bb"],
        frets: [-1, -1, 12, 14, 14, 13],
        fingers: [0, 0, 1, 3, 4, 2],
        barre: null,
        position: 12,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    bb_maj7_drop2_inv2_top: {
        id: "bb_maj7_drop2_inv2_top",
        name: "Bb Major 7",
        symbol: "Bbmaj7",
        altSymbols: ["BbΔ7", "BbM7"],
        root: "Bb",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["5", "7", "1", "3"],
        notes: ["F", "A", "Bb", "D"],
        frets: [-1, -1, 3, 2, 3, 3],
        fingers: [0, 0, 2, 1, 3, 4],
        barre: null,
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    bb_maj7_drop2_inv3_top: {
        id: "bb_maj7_drop2_inv3_top",
        name: "Bb Major 7",
        symbol: "Bbmaj7",
        altSymbols: ["BbΔ7", "BbM7"],
        root: "Bb",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["7", "1", "3", "5"],
        notes: ["A", "Bb", "D", "F"],
        frets: [-1, -1, 7, 7, 6, 6],
        fingers: [0, 0, 2, 3, 1, 1],
        barre: { fret: 6, fromString: 1, toString: 2 },
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // Eb Major 7 Drop 2 - Strings 1-4
    eb_maj7_drop2_root_top: {
        id: "eb_maj7_drop2_root_top",
        name: "Eb Major 7",
        symbol: "Ebmaj7",
        altSymbols: ["EbΔ7", "EbM7"],
        root: "Eb",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "3", "5", "7"],
        notes: ["Eb", "G", "Bb", "D"],
        frets: [-1, -1, 1, 0, 0, 1],
        fingers: [0, 0, 1, 0, 0, 2],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    eb_maj7_drop2_inv1_top: {
        id: "eb_maj7_drop2_inv1_top",
        name: "Eb Major 7",
        symbol: "Ebmaj7",
        altSymbols: ["EbΔ7", "EbM7"],
        root: "Eb",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["3", "5", "7", "1"],
        notes: ["G", "Bb", "D", "Eb"],
        frets: [-1, -1, 5, 7, 7, 6],
        fingers: [0, 0, 1, 3, 4, 2],
        barre: null,
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    eb_maj7_drop2_inv2_top: {
        id: "eb_maj7_drop2_inv2_top",
        name: "Eb Major 7",
        symbol: "Ebmaj7",
        altSymbols: ["EbΔ7", "EbM7"],
        root: "Eb",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["5", "7", "1", "3"],
        notes: ["Bb", "D", "Eb", "G"],
        frets: [-1, -1, 8, 7, 8, 8],
        fingers: [0, 0, 2, 1, 3, 4],
        barre: null,
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    eb_maj7_drop2_inv3_top: {
        id: "eb_maj7_drop2_inv3_top",
        name: "Eb Major 7",
        symbol: "Ebmaj7",
        altSymbols: ["EbΔ7", "EbM7"],
        root: "Eb",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["7", "1", "3", "5"],
        notes: ["D", "Eb", "G", "Bb"],
        frets: [-1, -1, 0, 0, 0, 1],
        fingers: [0, 0, 0, 0, 0, 1],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // Ab Major 7 Drop 2 - Strings 1-4
    ab_maj7_drop2_root_top: {
        id: "ab_maj7_drop2_root_top",
        name: "Ab Major 7",
        symbol: "Abmaj7",
        altSymbols: ["AbΔ7", "AbM7"],
        root: "Ab",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "3", "5", "7"],
        notes: ["Ab", "C", "Eb", "G"],
        frets: [-1, -1, 6, 5, 4, 4],
        fingers: [0, 0, 3, 2, 1, 1],
        barre: { fret: 4, fromString: 1, toString: 2 },
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    ab_maj7_drop2_inv1_top: {
        id: "ab_maj7_drop2_inv1_top",
        name: "Ab Major 7",
        symbol: "Abmaj7",
        altSymbols: ["AbΔ7", "AbM7"],
        root: "Ab",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["3", "5", "7", "1"],
        notes: ["C", "Eb", "G", "Ab"],
        frets: [-1, -1, 10, 12, 12, 11],
        fingers: [0, 0, 1, 3, 4, 2],
        barre: null,
        position: 10,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    ab_maj7_drop2_inv2_top: {
        id: "ab_maj7_drop2_inv2_top",
        name: "Ab Major 7",
        symbol: "Abmaj7",
        altSymbols: ["AbΔ7", "AbM7"],
        root: "Ab",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["5", "7", "1", "3"],
        notes: ["Eb", "G", "Ab", "C"],
        frets: [-1, -1, 1, 0, 1, 1],
        fingers: [0, 0, 2, 0, 3, 4],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    ab_maj7_drop2_inv3_top: {
        id: "ab_maj7_drop2_inv3_top",
        name: "Ab Major 7",
        symbol: "Abmaj7",
        altSymbols: ["AbΔ7", "AbM7"],
        root: "Ab",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["7", "1", "3", "5"],
        notes: ["G", "Ab", "C", "Eb"],
        frets: [-1, -1, 5, 5, 4, 4],
        fingers: [0, 0, 2, 3, 1, 1],
        barre: { fret: 4, fromString: 1, toString: 2 },
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // ===== DROP 2 VOICINGS - MINOR 7 (Strings 1-4) =====

    // C Minor 7 Drop 2 - Strings 1-4
    c_m7_drop2_root_top: {
        id: "c_m7_drop2_root_top",
        name: "C Minor 7",
        symbol: "Cm7",
        altSymbols: ["Cmin7", "C-7"],
        root: "C",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["C", "Eb", "G", "Bb"],
        frets: [-1, -1, 10, 8, 8, 8],
        fingers: [0, 0, 3, 1, 1, 1],
        barre: { fret: 8, fromString: 1, toString: 3 },
        position: 8,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_m7_drop2_inv1_top: {
        id: "c_m7_drop2_inv1_top",
        name: "C Minor 7",
        symbol: "Cm7",
        altSymbols: ["Cmin7", "C-7"],
        root: "C",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["b3", "5", "b7", "1"],
        notes: ["Eb", "G", "Bb", "C"],
        frets: [-1, -1, 1, 3, 4, 3],
        fingers: [0, 0, 1, 2, 4, 3],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_m7_drop2_inv2_top: {
        id: "c_m7_drop2_inv2_top",
        name: "C Minor 7",
        symbol: "Cm7",
        altSymbols: ["Cmin7", "C-7"],
        root: "C",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["5", "b7", "1", "b3"],
        notes: ["G", "Bb", "C", "Eb"],
        frets: [-1, -1, 5, 3, 5, 4],
        fingers: [0, 0, 3, 1, 4, 2],
        barre: null,
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_m7_drop2_inv3_top: {
        id: "c_m7_drop2_inv3_top",
        name: "C Minor 7",
        symbol: "Cm7",
        altSymbols: ["Cmin7", "C-7"],
        root: "C",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["b7", "1", "b3", "5"],
        notes: ["Bb", "C", "Eb", "G"],
        frets: [-1, -1, 8, 8, 8, 8],
        fingers: [0, 0, 1, 1, 1, 1],
        barre: { fret: 8, fromString: 1, toString: 4 },
        position: 8,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // D Minor 7 Drop 2 - Strings 1-4
    d_m7_drop2_root_top: {
        id: "d_m7_drop2_root_top",
        name: "D Minor 7",
        symbol: "Dm7",
        altSymbols: ["Dmin7", "D-7"],
        root: "D",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["D", "F", "A", "C"],
        frets: [-1, -1, 12, 10, 10, 10],
        fingers: [0, 0, 3, 1, 1, 1],
        barre: { fret: 10, fromString: 1, toString: 3 },
        position: 10,
        difficulty: 4,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_m7_drop2_inv1_top: {
        id: "d_m7_drop2_inv1_top",
        name: "D Minor 7",
        symbol: "Dm7",
        altSymbols: ["Dmin7", "D-7"],
        root: "D",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["b3", "5", "b7", "1"],
        notes: ["F", "A", "C", "D"],
        frets: [-1, -1, 3, 5, 6, 5],
        fingers: [0, 0, 1, 2, 4, 3],
        barre: null,
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_m7_drop2_inv2_top: {
        id: "d_m7_drop2_inv2_top",
        name: "D Minor 7",
        symbol: "Dm7",
        altSymbols: ["Dmin7", "D-7"],
        root: "D",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["5", "b7", "1", "b3"],
        notes: ["A", "C", "D", "F"],
        frets: [-1, -1, 7, 5, 7, 6],
        fingers: [0, 0, 3, 1, 4, 2],
        barre: null,
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_m7_drop2_inv3_top: {
        id: "d_m7_drop2_inv3_top",
        name: "D Minor 7",
        symbol: "Dm7",
        altSymbols: ["Dmin7", "D-7"],
        root: "D",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["b7", "1", "b3", "5"],
        notes: ["C", "D", "F", "A"],
        frets: [-1, -1, 10, 10, 10, 10],
        fingers: [0, 0, 1, 1, 1, 1],
        barre: { fret: 10, fromString: 1, toString: 4 },
        position: 10,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // E Minor 7 Drop 2 - Strings 1-4
    e_m7_drop2_root_top: {
        id: "e_m7_drop2_root_top",
        name: "E Minor 7",
        symbol: "Em7",
        altSymbols: ["Emin7", "E-7"],
        root: "E",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["E", "G", "B", "D"],
        frets: [-1, -1, 2, 0, 0, 0],
        fingers: [0, 0, 1, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_m7_drop2_inv1_top: {
        id: "e_m7_drop2_inv1_top",
        name: "E Minor 7",
        symbol: "Em7",
        altSymbols: ["Emin7", "E-7"],
        root: "E",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["b3", "5", "b7", "1"],
        notes: ["G", "B", "D", "E"],
        frets: [-1, -1, 5, 7, 8, 7],
        fingers: [0, 0, 1, 2, 4, 3],
        barre: null,
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    e_m7_drop2_inv2_top: {
        id: "e_m7_drop2_inv2_top",
        name: "E Minor 7",
        symbol: "Em7",
        altSymbols: ["Emin7", "E-7"],
        root: "E",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["5", "b7", "1", "b3"],
        notes: ["B", "D", "E", "G"],
        frets: [-1, -1, 9, 7, 9, 8],
        fingers: [0, 0, 3, 1, 4, 2],
        barre: null,
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    e_m7_drop2_inv3_top: {
        id: "e_m7_drop2_inv3_top",
        name: "E Minor 7",
        symbol: "Em7",
        altSymbols: ["Emin7", "E-7"],
        root: "E",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["b7", "1", "b3", "5"],
        notes: ["D", "E", "G", "B"],
        frets: [-1, -1, 0, 0, 0, 0],
        fingers: [0, 0, 0, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // F Minor 7 Drop 2 - Strings 1-4
    f_m7_drop2_root_top: {
        id: "f_m7_drop2_root_top",
        name: "F Minor 7",
        symbol: "Fm7",
        altSymbols: ["Fmin7", "F-7"],
        root: "F",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["F", "Ab", "C", "Eb"],
        frets: [-1, -1, 3, 1, 1, 1],
        fingers: [0, 0, 3, 1, 1, 1],
        barre: { fret: 1, fromString: 1, toString: 3 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_m7_drop2_inv1_top: {
        id: "f_m7_drop2_inv1_top",
        name: "F Minor 7",
        symbol: "Fm7",
        altSymbols: ["Fmin7", "F-7"],
        root: "F",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["b3", "5", "b7", "1"],
        notes: ["Ab", "C", "Eb", "F"],
        frets: [-1, -1, 6, 8, 9, 8],
        fingers: [0, 0, 1, 2, 4, 3],
        barre: null,
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_m7_drop2_inv2_top: {
        id: "f_m7_drop2_inv2_top",
        name: "F Minor 7",
        symbol: "Fm7",
        altSymbols: ["Fmin7", "F-7"],
        root: "F",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["5", "b7", "1", "b3"],
        notes: ["C", "Eb", "F", "Ab"],
        frets: [-1, -1, 10, 8, 10, 9],
        fingers: [0, 0, 3, 1, 4, 2],
        barre: null,
        position: 8,
        difficulty: 4,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_m7_drop2_inv3_top: {
        id: "f_m7_drop2_inv3_top",
        name: "F Minor 7",
        symbol: "Fm7",
        altSymbols: ["Fmin7", "F-7"],
        root: "F",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["b7", "1", "b3", "5"],
        notes: ["Eb", "F", "Ab", "C"],
        frets: [-1, -1, 1, 1, 1, 1],
        fingers: [0, 0, 1, 1, 1, 1],
        barre: { fret: 1, fromString: 1, toString: 4 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // G Minor 7 Drop 2 - Strings 1-4
    g_m7_drop2_root_top: {
        id: "g_m7_drop2_root_top",
        name: "G Minor 7",
        symbol: "Gm7",
        altSymbols: ["Gmin7", "G-7"],
        root: "G",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["G", "Bb", "D", "F"],
        frets: [-1, -1, 5, 3, 3, 3],
        fingers: [0, 0, 3, 1, 1, 1],
        barre: { fret: 3, fromString: 1, toString: 3 },
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_m7_drop2_inv1_top: {
        id: "g_m7_drop2_inv1_top",
        name: "G Minor 7",
        symbol: "Gm7",
        altSymbols: ["Gmin7", "G-7"],
        root: "G",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["b3", "5", "b7", "1"],
        notes: ["Bb", "D", "F", "G"],
        frets: [-1, -1, 8, 10, 11, 10],
        fingers: [0, 0, 1, 2, 4, 3],
        barre: null,
        position: 8,
        difficulty: 4,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_m7_drop2_inv2_top: {
        id: "g_m7_drop2_inv2_top",
        name: "G Minor 7",
        symbol: "Gm7",
        altSymbols: ["Gmin7", "G-7"],
        root: "G",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["5", "b7", "1", "b3"],
        notes: ["D", "F", "G", "Bb"],
        frets: [-1, -1, 12, 10, 12, 11],
        fingers: [0, 0, 3, 1, 4, 2],
        barre: null,
        position: 10,
        difficulty: 4,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_m7_drop2_inv3_top: {
        id: "g_m7_drop2_inv3_top",
        name: "G Minor 7",
        symbol: "Gm7",
        altSymbols: ["Gmin7", "G-7"],
        root: "G",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["b7", "1", "b3", "5"],
        notes: ["F", "G", "Bb", "D"],
        frets: [-1, -1, 3, 3, 3, 3],
        fingers: [0, 0, 1, 1, 1, 1],
        barre: { fret: 3, fromString: 1, toString: 4 },
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // A Minor 7 Drop 2 - Strings 1-4
    a_m7_drop2_root_top: {
        id: "a_m7_drop2_root_top",
        name: "A Minor 7",
        symbol: "Am7",
        altSymbols: ["Amin7", "A-7"],
        root: "A",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["A", "C", "E", "G"],
        frets: [-1, -1, 7, 5, 5, 5],
        fingers: [0, 0, 3, 1, 1, 1],
        barre: { fret: 5, fromString: 1, toString: 3 },
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_m7_drop2_inv1_top: {
        id: "a_m7_drop2_inv1_top",
        name: "A Minor 7",
        symbol: "Am7",
        altSymbols: ["Amin7", "A-7"],
        root: "A",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["b3", "5", "b7", "1"],
        notes: ["C", "E", "G", "A"],
        frets: [-1, -1, 10, 12, 13, 12],
        fingers: [0, 0, 1, 2, 4, 3],
        barre: null,
        position: 10,
        difficulty: 4,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_m7_drop2_inv2_top: {
        id: "a_m7_drop2_inv2_top",
        name: "A Minor 7",
        symbol: "Am7",
        altSymbols: ["Amin7", "A-7"],
        root: "A",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["5", "b7", "1", "b3"],
        notes: ["E", "G", "A", "C"],
        frets: [-1, -1, 2, 0, 2, 1],
        fingers: [0, 0, 2, 0, 3, 1],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    a_m7_drop2_inv3_top: {
        id: "a_m7_drop2_inv3_top",
        name: "A Minor 7",
        symbol: "Am7",
        altSymbols: ["Amin7", "A-7"],
        root: "A",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["b7", "1", "b3", "5"],
        notes: ["G", "A", "C", "E"],
        frets: [-1, -1, 5, 5, 5, 5],
        fingers: [0, 0, 1, 1, 1, 1],
        barre: { fret: 5, fromString: 1, toString: 4 },
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // B Minor 7 Drop 2 - Strings 1-4
    b_m7_drop2_root_top: {
        id: "b_m7_drop2_root_top",
        name: "B Minor 7",
        symbol: "Bm7",
        altSymbols: ["Bmin7", "B-7"],
        root: "B",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["B", "D", "F#", "A"],
        frets: [-1, -1, 9, 7, 7, 7],
        fingers: [0, 0, 3, 1, 1, 1],
        barre: { fret: 7, fromString: 1, toString: 3 },
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    b_m7_drop2_inv1_top: {
        id: "b_m7_drop2_inv1_top",
        name: "B Minor 7",
        symbol: "Bm7",
        altSymbols: ["Bmin7", "B-7"],
        root: "B",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["b3", "5", "b7", "1"],
        notes: ["D", "F#", "A", "B"],
        frets: [-1, -1, 12, 14, 15, 14],
        fingers: [0, 0, 1, 2, 4, 3],
        barre: null,
        position: 12,
        difficulty: 4,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    b_m7_drop2_inv2_top: {
        id: "b_m7_drop2_inv2_top",
        name: "B Minor 7",
        symbol: "Bm7",
        altSymbols: ["Bmin7", "B-7"],
        root: "B",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["5", "b7", "1", "b3"],
        notes: ["F#", "A", "B", "D"],
        frets: [-1, -1, 4, 2, 4, 3],
        fingers: [0, 0, 3, 1, 4, 2],
        barre: null,
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    b_m7_drop2_inv3_top: {
        id: "b_m7_drop2_inv3_top",
        name: "B Minor 7",
        symbol: "Bm7",
        altSymbols: ["Bmin7", "B-7"],
        root: "B",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["b7", "1", "b3", "5"],
        notes: ["A", "B", "D", "F#"],
        frets: [-1, -1, 7, 7, 7, 7],
        fingers: [0, 0, 1, 1, 1, 1],
        barre: { fret: 7, fromString: 1, toString: 4 },
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // Bb Minor 7 Drop 2 - Strings 1-4
    bb_m7_drop2_root_top: {
        id: "bb_m7_drop2_root_top",
        name: "Bb Minor 7",
        symbol: "Bbm7",
        altSymbols: ["Bbmin7", "Bb-7"],
        root: "Bb",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["Bb", "Db", "F", "Ab"],
        frets: [-1, -1, 8, 6, 6, 6],
        fingers: [0, 0, 3, 1, 1, 1],
        barre: { fret: 6, fromString: 1, toString: 3 },
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    bb_m7_drop2_inv1_top: {
        id: "bb_m7_drop2_inv1_top",
        name: "Bb Minor 7",
        symbol: "Bbm7",
        altSymbols: ["Bbmin7", "Bb-7"],
        root: "Bb",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["b3", "5", "b7", "1"],
        notes: ["Db", "F", "Ab", "Bb"],
        frets: [-1, -1, 11, 13, 14, 13],
        fingers: [0, 0, 1, 2, 4, 3],
        barre: null,
        position: 11,
        difficulty: 4,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    bb_m7_drop2_inv2_top: {
        id: "bb_m7_drop2_inv2_top",
        name: "Bb Minor 7",
        symbol: "Bbm7",
        altSymbols: ["Bbmin7", "Bb-7"],
        root: "Bb",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["5", "b7", "1", "b3"],
        notes: ["F", "Ab", "Bb", "Db"],
        frets: [-1, -1, 3, 1, 3, 2],
        fingers: [0, 0, 3, 1, 4, 2],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    bb_m7_drop2_inv3_top: {
        id: "bb_m7_drop2_inv3_top",
        name: "Bb Minor 7",
        symbol: "Bbm7",
        altSymbols: ["Bbmin7", "Bb-7"],
        root: "Bb",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["b7", "1", "b3", "5"],
        notes: ["Ab", "Bb", "Db", "F"],
        frets: [-1, -1, 6, 6, 6, 6],
        fingers: [0, 0, 1, 1, 1, 1],
        barre: { fret: 6, fromString: 1, toString: 4 },
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // Eb Minor 7 Drop 2 - Strings 1-4
    eb_m7_drop2_root_top: {
        id: "eb_m7_drop2_root_top",
        name: "Eb Minor 7",
        symbol: "Ebm7",
        altSymbols: ["Ebmin7", "Eb-7"],
        root: "Eb",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["Eb", "Gb", "Bb", "Db"],
        frets: [-1, -1, 1, 0, 0, 0],
        fingers: [0, 0, 1, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    eb_m7_drop2_inv1_top: {
        id: "eb_m7_drop2_inv1_top",
        name: "Eb Minor 7",
        symbol: "Ebm7",
        altSymbols: ["Ebmin7", "Eb-7"],
        root: "Eb",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["b3", "5", "b7", "1"],
        notes: ["Gb", "Bb", "Db", "Eb"],
        frets: [-1, -1, 4, 6, 7, 6],
        fingers: [0, 0, 1, 2, 4, 3],
        barre: null,
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    eb_m7_drop2_inv2_top: {
        id: "eb_m7_drop2_inv2_top",
        name: "Eb Minor 7",
        symbol: "Ebm7",
        altSymbols: ["Ebmin7", "Eb-7"],
        root: "Eb",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["5", "b7", "1", "b3"],
        notes: ["Bb", "Db", "Eb", "Gb"],
        frets: [-1, -1, 8, 6, 8, 7],
        fingers: [0, 0, 3, 1, 4, 2],
        barre: null,
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    eb_m7_drop2_inv3_top: {
        id: "eb_m7_drop2_inv3_top",
        name: "Eb Minor 7",
        symbol: "Ebm7",
        altSymbols: ["Ebmin7", "Eb-7"],
        root: "Eb",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["b7", "1", "b3", "5"],
        notes: ["Db", "Eb", "Gb", "Bb"],
        frets: [-1, -1, 11, 11, 11, 11],
        fingers: [0, 0, 1, 1, 1, 1],
        barre: { fret: 11, fromString: 1, toString: 4 },
        position: 11,
        difficulty: 4,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // ===== DROP 2 VOICINGS - MAJOR 7 (Strings 2-5) =====

    // C Major 7 Drop 2 - Strings 2-5
    c_maj7_drop2_root_mid: {
        id: "c_maj7_drop2_root_mid",
        name: "C Major 7",
        symbol: "Cmaj7",
        altSymbols: ["CΔ7", "CM7"],
        root: "C",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 2-5)",
        intervals: ["1", "3", "5", "7"],
        notes: ["C", "E", "G", "B"],
        frets: [-1, 3, 5, 4, 5, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        barre: null,
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_maj7_drop2_inv1_mid: {
        id: "c_maj7_drop2_inv1_mid",
        name: "C Major 7",
        symbol: "Cmaj7",
        altSymbols: ["CΔ7", "CM7"],
        root: "C",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 2-5)",
        intervals: ["3", "5", "7", "1"],
        notes: ["E", "G", "B", "C"],
        frets: [-1, 7, 9, 9, 8, -1],
        fingers: [0, 1, 3, 4, 2, 0],
        barre: null,
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_maj7_drop2_inv2_mid: {
        id: "c_maj7_drop2_inv2_mid",
        name: "C Major 7",
        symbol: "Cmaj7",
        altSymbols: ["CΔ7", "CM7"],
        root: "C",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 2-5)",
        intervals: ["5", "7", "1", "3"],
        notes: ["G", "B", "C", "E"],
        frets: [-1, 10, 9, 9, 10, -1],
        fingers: [0, 2, 1, 1, 3, 0],
        barre: { fret: 9, fromString: 2, toString: 3 },
        position: 9,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_maj7_drop2_inv3_mid: {
        id: "c_maj7_drop2_inv3_mid",
        name: "C Major 7",
        symbol: "Cmaj7",
        altSymbols: ["CΔ7", "CM7"],
        root: "C",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 2-5)",
        intervals: ["7", "1", "3", "5"],
        notes: ["B", "C", "E", "G"],
        frets: [-1, 2, 2, 4, 3, -1],
        fingers: [0, 1, 1, 4, 3, 0],
        barre: { fret: 2, fromString: 4, toString: 5 },
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // D Major 7 Drop 2 - Strings 2-5
    d_maj7_drop2_root_mid: {
        id: "d_maj7_drop2_root_mid",
        name: "D Major 7",
        symbol: "Dmaj7",
        altSymbols: ["DΔ7", "DM7"],
        root: "D",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 2-5)",
        intervals: ["1", "3", "5", "7"],
        notes: ["D", "F#", "A", "C#"],
        frets: [-1, 5, 7, 6, 7, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        barre: null,
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_maj7_drop2_inv1_mid: {
        id: "d_maj7_drop2_inv1_mid",
        name: "D Major 7",
        symbol: "Dmaj7",
        altSymbols: ["DΔ7", "DM7"],
        root: "D",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 2-5)",
        intervals: ["3", "5", "7", "1"],
        notes: ["F#", "A", "C#", "D"],
        frets: [-1, 9, 11, 11, 10, -1],
        fingers: [0, 1, 3, 4, 2, 0],
        barre: null,
        position: 9,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_maj7_drop2_inv2_mid: {
        id: "d_maj7_drop2_inv2_mid",
        name: "D Major 7",
        symbol: "Dmaj7",
        altSymbols: ["DΔ7", "DM7"],
        root: "D",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 2-5)",
        intervals: ["5", "7", "1", "3"],
        notes: ["A", "C#", "D", "F#"],
        frets: [-1, 12, 11, 11, 12, -1],
        fingers: [0, 2, 1, 1, 3, 0],
        barre: { fret: 11, fromString: 2, toString: 3 },
        position: 11,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_maj7_drop2_inv3_mid: {
        id: "d_maj7_drop2_inv3_mid",
        name: "D Major 7",
        symbol: "Dmaj7",
        altSymbols: ["DΔ7", "DM7"],
        root: "D",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 2-5)",
        intervals: ["7", "1", "3", "5"],
        notes: ["C#", "D", "F#", "A"],
        frets: [-1, 4, 4, 6, 5, -1],
        fingers: [0, 1, 1, 4, 3, 0],
        barre: { fret: 4, fromString: 4, toString: 5 },
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // E Major 7 Drop 2 - Strings 2-5
    e_maj7_drop2_root_mid: {
        id: "e_maj7_drop2_root_mid",
        name: "E Major 7",
        symbol: "Emaj7",
        altSymbols: ["EΔ7", "EM7"],
        root: "E",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 2-5)",
        intervals: ["1", "3", "5", "7"],
        notes: ["E", "G#", "B", "D#"],
        frets: [-1, 7, 9, 8, 9, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        barre: null,
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    e_maj7_drop2_inv1_mid: {
        id: "e_maj7_drop2_inv1_mid",
        name: "E Major 7",
        symbol: "Emaj7",
        altSymbols: ["EΔ7", "EM7"],
        root: "E",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 2-5)",
        intervals: ["3", "5", "7", "1"],
        notes: ["G#", "B", "D#", "E"],
        frets: [-1, 11, 13, 13, 12, -1],
        fingers: [0, 1, 3, 4, 2, 0],
        barre: null,
        position: 11,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    e_maj7_drop2_inv2_mid: {
        id: "e_maj7_drop2_inv2_mid",
        name: "E Major 7",
        symbol: "Emaj7",
        altSymbols: ["EΔ7", "EM7"],
        root: "E",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 2-5)",
        intervals: ["5", "7", "1", "3"],
        notes: ["B", "D#", "E", "G#"],
        frets: [-1, 2, 1, 1, 2, -1],
        fingers: [0, 2, 1, 1, 3, 0],
        barre: { fret: 1, fromString: 2, toString: 3 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    e_maj7_drop2_inv3_mid: {
        id: "e_maj7_drop2_inv3_mid",
        name: "E Major 7",
        symbol: "Emaj7",
        altSymbols: ["EΔ7", "EM7"],
        root: "E",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 2-5)",
        intervals: ["7", "1", "3", "5"],
        notes: ["D#", "E", "G#", "B"],
        frets: [-1, 6, 6, 8, 7, -1],
        fingers: [0, 1, 1, 4, 3, 0],
        barre: { fret: 6, fromString: 4, toString: 5 },
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // F Major 7 Drop 2 - Strings 2-5
    f_maj7_drop2_root_mid: {
        id: "f_maj7_drop2_root_mid",
        name: "F Major 7",
        symbol: "Fmaj7",
        altSymbols: ["FΔ7", "FM7"],
        root: "F",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 2-5)",
        intervals: ["1", "3", "5", "7"],
        notes: ["F", "A", "C", "E"],
        frets: [-1, 8, 10, 9, 10, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        barre: null,
        position: 8,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_maj7_drop2_inv1_mid: {
        id: "f_maj7_drop2_inv1_mid",
        name: "F Major 7",
        symbol: "Fmaj7",
        altSymbols: ["FΔ7", "FM7"],
        root: "F",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 2-5)",
        intervals: ["3", "5", "7", "1"],
        notes: ["A", "C", "E", "F"],
        frets: [-1, 12, 14, 14, 13, -1],
        fingers: [0, 1, 3, 4, 2, 0],
        barre: null,
        position: 12,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_maj7_drop2_inv2_mid: {
        id: "f_maj7_drop2_inv2_mid",
        name: "F Major 7",
        symbol: "Fmaj7",
        altSymbols: ["FΔ7", "FM7"],
        root: "F",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 2-5)",
        intervals: ["5", "7", "1", "3"],
        notes: ["C", "E", "F", "A"],
        frets: [-1, 3, 2, 2, 3, -1],
        fingers: [0, 2, 1, 1, 3, 0],
        barre: { fret: 2, fromString: 2, toString: 3 },
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_maj7_drop2_inv3_mid: {
        id: "f_maj7_drop2_inv3_mid",
        name: "F Major 7",
        symbol: "Fmaj7",
        altSymbols: ["FΔ7", "FM7"],
        root: "F",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 2-5)",
        intervals: ["7", "1", "3", "5"],
        notes: ["E", "F", "A", "C"],
        frets: [-1, 7, 7, 9, 8, -1],
        fingers: [0, 1, 1, 4, 3, 0],
        barre: { fret: 7, fromString: 4, toString: 5 },
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // G Major 7 Drop 2 - Strings 2-5
    g_maj7_drop2_root_mid: {
        id: "g_maj7_drop2_root_mid",
        name: "G Major 7",
        symbol: "Gmaj7",
        altSymbols: ["GΔ7", "GM7"],
        root: "G",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 2-5)",
        intervals: ["1", "3", "5", "7"],
        notes: ["G", "B", "D", "F#"],
        frets: [-1, 10, 12, 11, 12, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        barre: null,
        position: 10,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_maj7_drop2_inv1_mid: {
        id: "g_maj7_drop2_inv1_mid",
        name: "G Major 7",
        symbol: "Gmaj7",
        altSymbols: ["GΔ7", "GM7"],
        root: "G",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 2-5)",
        intervals: ["3", "5", "7", "1"],
        notes: ["B", "D", "F#", "G"],
        frets: [-1, 2, 4, 4, 3, -1],
        fingers: [0, 1, 3, 4, 2, 0],
        barre: null,
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_maj7_drop2_inv2_mid: {
        id: "g_maj7_drop2_inv2_mid",
        name: "G Major 7",
        symbol: "Gmaj7",
        altSymbols: ["GΔ7", "GM7"],
        root: "G",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 2-5)",
        intervals: ["5", "7", "1", "3"],
        notes: ["D", "F#", "G", "B"],
        frets: [-1, 5, 4, 4, 5, -1],
        fingers: [0, 2, 1, 1, 3, 0],
        barre: { fret: 4, fromString: 2, toString: 3 },
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_maj7_drop2_inv3_mid: {
        id: "g_maj7_drop2_inv3_mid",
        name: "G Major 7",
        symbol: "Gmaj7",
        altSymbols: ["GΔ7", "GM7"],
        root: "G",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 2-5)",
        intervals: ["7", "1", "3", "5"],
        notes: ["F#", "G", "B", "D"],
        frets: [-1, 9, 9, 11, 10, -1],
        fingers: [0, 1, 1, 4, 3, 0],
        barre: { fret: 9, fromString: 4, toString: 5 },
        position: 9,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // A Major 7 Drop 2 - Strings 2-5
    a_maj7_drop2_root_mid: {
        id: "a_maj7_drop2_root_mid",
        name: "A Major 7",
        symbol: "Amaj7",
        altSymbols: ["AΔ7", "AM7"],
        root: "A",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 2-5)",
        intervals: ["1", "3", "5", "7"],
        notes: ["A", "C#", "E", "G#"],
        frets: [-1, 12, 14, 13, 14, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        barre: null,
        position: 12,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_maj7_drop2_inv1_mid: {
        id: "a_maj7_drop2_inv1_mid",
        name: "A Major 7",
        symbol: "Amaj7",
        altSymbols: ["AΔ7", "AM7"],
        root: "A",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 2-5)",
        intervals: ["3", "5", "7", "1"],
        notes: ["C#", "E", "G#", "A"],
        frets: [-1, 4, 6, 6, 5, -1],
        fingers: [0, 1, 3, 4, 2, 0],
        barre: null,
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_maj7_drop2_inv2_mid: {
        id: "a_maj7_drop2_inv2_mid",
        name: "A Major 7",
        symbol: "Amaj7",
        altSymbols: ["AΔ7", "AM7"],
        root: "A",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 2-5)",
        intervals: ["5", "7", "1", "3"],
        notes: ["E", "G#", "A", "C#"],
        frets: [-1, 7, 6, 6, 7, -1],
        fingers: [0, 2, 1, 1, 3, 0],
        barre: { fret: 6, fromString: 2, toString: 3 },
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_maj7_drop2_inv3_mid: {
        id: "a_maj7_drop2_inv3_mid",
        name: "A Major 7",
        symbol: "Amaj7",
        altSymbols: ["AΔ7", "AM7"],
        root: "A",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 2-5)",
        intervals: ["7", "1", "3", "5"],
        notes: ["G#", "A", "C#", "E"],
        frets: [-1, 11, 11, 13, 12, -1],
        fingers: [0, 1, 1, 4, 3, 0],
        barre: { fret: 11, fromString: 4, toString: 5 },
        position: 11,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // Bb Major 7 Drop 2 - Strings 2-5
    bb_maj7_drop2_root_mid: {
        id: "bb_maj7_drop2_root_mid",
        name: "Bb Major 7",
        symbol: "Bbmaj7",
        altSymbols: ["BbΔ7", "BbM7"],
        root: "Bb",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 2-5)",
        intervals: ["1", "3", "5", "7"],
        notes: ["Bb", "D", "F", "A"],
        frets: [-1, 1, 3, 2, 3, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    bb_maj7_drop2_inv1_mid: {
        id: "bb_maj7_drop2_inv1_mid",
        name: "Bb Major 7",
        symbol: "Bbmaj7",
        altSymbols: ["BbΔ7", "BbM7"],
        root: "Bb",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 2-5)",
        intervals: ["3", "5", "7", "1"],
        notes: ["D", "F", "A", "Bb"],
        frets: [-1, 5, 7, 7, 6, -1],
        fingers: [0, 1, 3, 4, 2, 0],
        barre: null,
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    bb_maj7_drop2_inv2_mid: {
        id: "bb_maj7_drop2_inv2_mid",
        name: "Bb Major 7",
        symbol: "Bbmaj7",
        altSymbols: ["BbΔ7", "BbM7"],
        root: "Bb",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 2-5)",
        intervals: ["5", "7", "1", "3"],
        notes: ["F", "A", "Bb", "D"],
        frets: [-1, 8, 7, 7, 8, -1],
        fingers: [0, 2, 1, 1, 3, 0],
        barre: { fret: 7, fromString: 2, toString: 3 },
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    bb_maj7_drop2_inv3_mid: {
        id: "bb_maj7_drop2_inv3_mid",
        name: "Bb Major 7",
        symbol: "Bbmaj7",
        altSymbols: ["BbΔ7", "BbM7"],
        root: "Bb",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 2-5)",
        intervals: ["7", "1", "3", "5"],
        notes: ["A", "Bb", "D", "F"],
        frets: [-1, 12, 12, 14, 13, -1],
        fingers: [0, 1, 1, 4, 3, 0],
        barre: { fret: 12, fromString: 4, toString: 5 },
        position: 12,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // Eb Major 7 Drop 2 - Strings 2-5
    eb_maj7_drop2_root_mid: {
        id: "eb_maj7_drop2_root_mid",
        name: "Eb Major 7",
        symbol: "Ebmaj7",
        altSymbols: ["EbΔ7", "EbM7"],
        root: "Eb",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 2-5)",
        intervals: ["1", "3", "5", "7"],
        notes: ["Eb", "G", "Bb", "D"],
        frets: [-1, 6, 8, 7, 8, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        barre: null,
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    eb_maj7_drop2_inv1_mid: {
        id: "eb_maj7_drop2_inv1_mid",
        name: "Eb Major 7",
        symbol: "Ebmaj7",
        altSymbols: ["EbΔ7", "EbM7"],
        root: "Eb",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 2-5)",
        intervals: ["3", "5", "7", "1"],
        notes: ["G", "Bb", "D", "Eb"],
        frets: [-1, 10, 12, 12, 11, -1],
        fingers: [0, 1, 3, 4, 2, 0],
        barre: null,
        position: 10,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    eb_maj7_drop2_inv2_mid: {
        id: "eb_maj7_drop2_inv2_mid",
        name: "Eb Major 7",
        symbol: "Ebmaj7",
        altSymbols: ["EbΔ7", "EbM7"],
        root: "Eb",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 2-5)",
        intervals: ["5", "7", "1", "3"],
        notes: ["Bb", "D", "Eb", "G"],
        frets: [-1, 1, 0, 0, 1, -1],
        fingers: [0, 2, 0, 0, 3, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    eb_maj7_drop2_inv3_mid: {
        id: "eb_maj7_drop2_inv3_mid",
        name: "Eb Major 7",
        symbol: "Ebmaj7",
        altSymbols: ["EbΔ7", "EbM7"],
        root: "Eb",
        quality: "major7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 2-5)",
        intervals: ["7", "1", "3", "5"],
        notes: ["D", "Eb", "G", "Bb"],
        frets: [-1, 5, 5, 7, 6, -1],
        fingers: [0, 1, 1, 4, 3, 0],
        barre: { fret: 5, fromString: 4, toString: 5 },
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "romantic", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // ===== DROP 2 VOICINGS - MINOR 7 (Strings 2-5) =====

    // C Minor 7 Drop 2 - Strings 2-5
    c_m7_drop2_root_mid: {
        id: "c_m7_drop2_root_mid",
        name: "C Minor 7",
        symbol: "Cm7",
        altSymbols: ["Cmin7", "C-7"],
        root: "C",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 2-5)",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["C", "Eb", "G", "Bb"],
        frets: [-1, 3, 4, 3, 4, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        barre: null,
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_m7_drop2_inv1_mid: {
        id: "c_m7_drop2_inv1_mid",
        name: "C Minor 7",
        symbol: "Cm7",
        altSymbols: ["Cmin7", "C-7"],
        root: "C",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 2-5)",
        intervals: ["b3", "5", "b7", "1"],
        notes: ["Eb", "G", "Bb", "C"],
        frets: [-1, 6, 8, 8, 8, -1],
        fingers: [0, 1, 2, 2, 2, 0],
        barre: { fret: 8, fromString: 2, toString: 4 },
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_m7_drop2_inv2_mid: {
        id: "c_m7_drop2_inv2_mid",
        name: "C Minor 7",
        symbol: "Cm7",
        altSymbols: ["Cmin7", "C-7"],
        root: "C",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 2-5)",
        intervals: ["5", "b7", "1", "b3"],
        notes: ["G", "Bb", "C", "Eb"],
        frets: [-1, 10, 8, 8, 9, -1],
        fingers: [0, 4, 1, 1, 2, 0],
        barre: { fret: 8, fromString: 2, toString: 3 },
        position: 8,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_m7_drop2_inv3_mid: {
        id: "c_m7_drop2_inv3_mid",
        name: "C Minor 7",
        symbol: "Cm7",
        altSymbols: ["Cmin7", "C-7"],
        root: "C",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 2-5)",
        intervals: ["b7", "1", "b3", "5"],
        notes: ["Bb", "C", "Eb", "G"],
        frets: [-1, 1, 1, 3, 3, -1],
        fingers: [0, 1, 1, 3, 4, 0],
        barre: { fret: 1, fromString: 4, toString: 5 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // D Minor 7 Drop 2 - Strings 2-5
    d_m7_drop2_root_mid: {
        id: "d_m7_drop2_root_mid",
        name: "D Minor 7",
        symbol: "Dm7",
        altSymbols: ["Dmin7", "D-7"],
        root: "D",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 2-5)",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["D", "F", "A", "C"],
        frets: [-1, 5, 6, 5, 6, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        barre: null,
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_m7_drop2_inv1_mid: {
        id: "d_m7_drop2_inv1_mid",
        name: "D Minor 7",
        symbol: "Dm7",
        altSymbols: ["Dmin7", "D-7"],
        root: "D",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 2-5)",
        intervals: ["b3", "5", "b7", "1"],
        notes: ["F", "A", "C", "D"],
        frets: [-1, 8, 10, 10, 10, -1],
        fingers: [0, 1, 2, 2, 2, 0],
        barre: { fret: 10, fromString: 2, toString: 4 },
        position: 8,
        difficulty: 4,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_m7_drop2_inv2_mid: {
        id: "d_m7_drop2_inv2_mid",
        name: "D Minor 7",
        symbol: "Dm7",
        altSymbols: ["Dmin7", "D-7"],
        root: "D",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 2-5)",
        intervals: ["5", "b7", "1", "b3"],
        notes: ["A", "C", "D", "F"],
        frets: [-1, 12, 10, 10, 11, -1],
        fingers: [0, 4, 1, 1, 2, 0],
        barre: { fret: 10, fromString: 2, toString: 3 },
        position: 10,
        difficulty: 4,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_m7_drop2_inv3_mid: {
        id: "d_m7_drop2_inv3_mid",
        name: "D Minor 7",
        symbol: "Dm7",
        altSymbols: ["Dmin7", "D-7"],
        root: "D",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 2-5)",
        intervals: ["b7", "1", "b3", "5"],
        notes: ["C", "D", "F", "A"],
        frets: [-1, 3, 3, 5, 5, -1],
        fingers: [0, 1, 1, 3, 4, 0],
        barre: { fret: 3, fromString: 4, toString: 5 },
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // E Minor 7 Drop 2 - Strings 2-5
    e_m7_drop2_root_mid: {
        id: "e_m7_drop2_root_mid",
        name: "E Minor 7",
        symbol: "Em7",
        altSymbols: ["Emin7", "E-7"],
        root: "E",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 2-5)",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["E", "G", "B", "D"],
        frets: [-1, 7, 8, 7, 8, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        barre: null,
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    e_m7_drop2_inv1_mid: {
        id: "e_m7_drop2_inv1_mid",
        name: "E Minor 7",
        symbol: "Em7",
        altSymbols: ["Emin7", "E-7"],
        root: "E",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 2-5)",
        intervals: ["b3", "5", "b7", "1"],
        notes: ["G", "B", "D", "E"],
        frets: [-1, 10, 12, 12, 12, -1],
        fingers: [0, 1, 2, 2, 2, 0],
        barre: { fret: 12, fromString: 2, toString: 4 },
        position: 10,
        difficulty: 4,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    e_m7_drop2_inv2_mid: {
        id: "e_m7_drop2_inv2_mid",
        name: "E Minor 7",
        symbol: "Em7",
        altSymbols: ["Emin7", "E-7"],
        root: "E",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 2-5)",
        intervals: ["5", "b7", "1", "b3"],
        notes: ["B", "D", "E", "G"],
        frets: [-1, 2, 0, 0, 1, -1],
        fingers: [0, 2, 0, 0, 1, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_m7_drop2_inv3_mid: {
        id: "e_m7_drop2_inv3_mid",
        name: "E Minor 7",
        symbol: "Em7",
        altSymbols: ["Emin7", "E-7"],
        root: "E",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 2-5)",
        intervals: ["b7", "1", "b3", "5"],
        notes: ["D", "E", "G", "B"],
        frets: [-1, 5, 5, 7, 7, -1],
        fingers: [0, 1, 1, 3, 4, 0],
        barre: { fret: 5, fromString: 4, toString: 5 },
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // F Minor 7 Drop 2 - Strings 2-5
    f_m7_drop2_root_mid: {
        id: "f_m7_drop2_root_mid",
        name: "F Minor 7",
        symbol: "Fm7",
        altSymbols: ["Fmin7", "F-7"],
        root: "F",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 2-5)",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["F", "Ab", "C", "Eb"],
        frets: [-1, 8, 9, 8, 9, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        barre: null,
        position: 8,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_m7_drop2_inv1_mid: {
        id: "f_m7_drop2_inv1_mid",
        name: "F Minor 7",
        symbol: "Fm7",
        altSymbols: ["Fmin7", "F-7"],
        root: "F",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 2-5)",
        intervals: ["b3", "5", "b7", "1"],
        notes: ["Ab", "C", "Eb", "F"],
        frets: [-1, 11, 13, 13, 13, -1],
        fingers: [0, 1, 2, 2, 2, 0],
        barre: { fret: 13, fromString: 2, toString: 4 },
        position: 11,
        difficulty: 4,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_m7_drop2_inv2_mid: {
        id: "f_m7_drop2_inv2_mid",
        name: "F Minor 7",
        symbol: "Fm7",
        altSymbols: ["Fmin7", "F-7"],
        root: "F",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 2-5)",
        intervals: ["5", "b7", "1", "b3"],
        notes: ["C", "Eb", "F", "Ab"],
        frets: [-1, 3, 1, 1, 2, -1],
        fingers: [0, 4, 1, 1, 2, 0],
        barre: { fret: 1, fromString: 2, toString: 3 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_m7_drop2_inv3_mid: {
        id: "f_m7_drop2_inv3_mid",
        name: "F Minor 7",
        symbol: "Fm7",
        altSymbols: ["Fmin7", "F-7"],
        root: "F",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 2-5)",
        intervals: ["b7", "1", "b3", "5"],
        notes: ["Eb", "F", "Ab", "C"],
        frets: [-1, 6, 6, 8, 8, -1],
        fingers: [0, 1, 1, 3, 4, 0],
        barre: { fret: 6, fromString: 4, toString: 5 },
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // G Minor 7 Drop 2 - Strings 2-5
    g_m7_drop2_root_mid: {
        id: "g_m7_drop2_root_mid",
        name: "G Minor 7",
        symbol: "Gm7",
        altSymbols: ["Gmin7", "G-7"],
        root: "G",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 2-5)",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["G", "Bb", "D", "F"],
        frets: [-1, 10, 11, 10, 11, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        barre: null,
        position: 10,
        difficulty: 4,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_m7_drop2_inv1_mid: {
        id: "g_m7_drop2_inv1_mid",
        name: "G Minor 7",
        symbol: "Gm7",
        altSymbols: ["Gmin7", "G-7"],
        root: "G",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 2-5)",
        intervals: ["b3", "5", "b7", "1"],
        notes: ["Bb", "D", "F", "G"],
        frets: [-1, 1, 3, 3, 3, -1],
        fingers: [0, 1, 2, 2, 2, 0],
        barre: { fret: 3, fromString: 2, toString: 4 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_m7_drop2_inv2_mid: {
        id: "g_m7_drop2_inv2_mid",
        name: "G Minor 7",
        symbol: "Gm7",
        altSymbols: ["Gmin7", "G-7"],
        root: "G",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 2-5)",
        intervals: ["5", "b7", "1", "b3"],
        notes: ["D", "F", "G", "Bb"],
        frets: [-1, 5, 3, 3, 4, -1],
        fingers: [0, 4, 1, 1, 2, 0],
        barre: { fret: 3, fromString: 2, toString: 3 },
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_m7_drop2_inv3_mid: {
        id: "g_m7_drop2_inv3_mid",
        name: "G Minor 7",
        symbol: "Gm7",
        altSymbols: ["Gmin7", "G-7"],
        root: "G",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 2-5)",
        intervals: ["b7", "1", "b3", "5"],
        notes: ["F", "G", "Bb", "D"],
        frets: [-1, 8, 8, 10, 10, -1],
        fingers: [0, 1, 1, 3, 4, 0],
        barre: { fret: 8, fromString: 4, toString: 5 },
        position: 8,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // A Minor 7 Drop 2 - Strings 2-5
    a_m7_drop2_root_mid: {
        id: "a_m7_drop2_root_mid",
        name: "A Minor 7",
        symbol: "Am7",
        altSymbols: ["Amin7", "A-7"],
        root: "A",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 2-5)",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["A", "C", "E", "G"],
        frets: [-1, 12, 13, 12, 13, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        barre: null,
        position: 12,
        difficulty: 4,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_m7_drop2_inv1_mid: {
        id: "a_m7_drop2_inv1_mid",
        name: "A Minor 7",
        symbol: "Am7",
        altSymbols: ["Amin7", "A-7"],
        root: "A",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 2-5)",
        intervals: ["b3", "5", "b7", "1"],
        notes: ["C", "E", "G", "A"],
        frets: [-1, 3, 5, 5, 5, -1],
        fingers: [0, 1, 2, 2, 2, 0],
        barre: { fret: 5, fromString: 2, toString: 4 },
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_m7_drop2_inv2_mid: {
        id: "a_m7_drop2_inv2_mid",
        name: "A Minor 7",
        symbol: "Am7",
        altSymbols: ["Amin7", "A-7"],
        root: "A",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 2-5)",
        intervals: ["5", "b7", "1", "b3"],
        notes: ["E", "G", "A", "C"],
        frets: [-1, 7, 5, 5, 6, -1],
        fingers: [0, 4, 1, 1, 2, 0],
        barre: { fret: 5, fromString: 2, toString: 3 },
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_m7_drop2_inv3_mid: {
        id: "a_m7_drop2_inv3_mid",
        name: "A Minor 7",
        symbol: "Am7",
        altSymbols: ["Amin7", "A-7"],
        root: "A",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 2-5)",
        intervals: ["b7", "1", "b3", "5"],
        notes: ["G", "A", "C", "E"],
        frets: [-1, 10, 10, 12, 12, -1],
        fingers: [0, 1, 1, 3, 4, 0],
        barre: { fret: 10, fromString: 4, toString: 5 },
        position: 10,
        difficulty: 4,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // Bb Minor 7 Drop 2 - Strings 2-5
    bb_m7_drop2_root_mid: {
        id: "bb_m7_drop2_root_mid",
        name: "Bb Minor 7",
        symbol: "Bbm7",
        altSymbols: ["Bbmin7", "Bb-7"],
        root: "Bb",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 2-5)",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["Bb", "Db", "F", "Ab"],
        frets: [-1, 1, 2, 1, 2, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    bb_m7_drop2_inv1_mid: {
        id: "bb_m7_drop2_inv1_mid",
        name: "Bb Minor 7",
        symbol: "Bbm7",
        altSymbols: ["Bbmin7", "Bb-7"],
        root: "Bb",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 2-5)",
        intervals: ["b3", "5", "b7", "1"],
        notes: ["Db", "F", "Ab", "Bb"],
        frets: [-1, 4, 6, 6, 6, -1],
        fingers: [0, 1, 2, 2, 2, 0],
        barre: { fret: 6, fromString: 2, toString: 4 },
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    bb_m7_drop2_inv2_mid: {
        id: "bb_m7_drop2_inv2_mid",
        name: "Bb Minor 7",
        symbol: "Bbm7",
        altSymbols: ["Bbmin7", "Bb-7"],
        root: "Bb",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 2-5)",
        intervals: ["5", "b7", "1", "b3"],
        notes: ["F", "Ab", "Bb", "Db"],
        frets: [-1, 8, 6, 6, 7, -1],
        fingers: [0, 4, 1, 1, 2, 0],
        barre: { fret: 6, fromString: 2, toString: 3 },
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    bb_m7_drop2_inv3_mid: {
        id: "bb_m7_drop2_inv3_mid",
        name: "Bb Minor 7",
        symbol: "Bbm7",
        altSymbols: ["Bbmin7", "Bb-7"],
        root: "Bb",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 2-5)",
        intervals: ["b7", "1", "b3", "5"],
        notes: ["Ab", "Bb", "Db", "F"],
        frets: [-1, 11, 11, 13, 13, -1],
        fingers: [0, 1, 1, 3, 4, 0],
        barre: { fret: 11, fromString: 4, toString: 5 },
        position: 11,
        difficulty: 4,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // Eb Minor 7 Drop 2 - Strings 2-5
    eb_m7_drop2_root_mid: {
        id: "eb_m7_drop2_root_mid",
        name: "Eb Minor 7",
        symbol: "Ebm7",
        altSymbols: ["Ebmin7", "Eb-7"],
        root: "Eb",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 2-5)",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["Eb", "Gb", "Bb", "Db"],
        frets: [-1, 6, 7, 6, 7, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        barre: null,
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    eb_m7_drop2_inv1_mid: {
        id: "eb_m7_drop2_inv1_mid",
        name: "Eb Minor 7",
        symbol: "Ebm7",
        altSymbols: ["Ebmin7", "Eb-7"],
        root: "Eb",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 2-5)",
        intervals: ["b3", "5", "b7", "1"],
        notes: ["Gb", "Bb", "Db", "Eb"],
        frets: [-1, 9, 11, 11, 11, -1],
        fingers: [0, 1, 2, 2, 2, 0],
        barre: { fret: 11, fromString: 2, toString: 4 },
        position: 9,
        difficulty: 4,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    eb_m7_drop2_inv2_mid: {
        id: "eb_m7_drop2_inv2_mid",
        name: "Eb Minor 7",
        symbol: "Ebm7",
        altSymbols: ["Ebmin7", "Eb-7"],
        root: "Eb",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 2-5)",
        intervals: ["5", "b7", "1", "b3"],
        notes: ["Bb", "Db", "Eb", "Gb"],
        frets: [-1, 1, 0, 0, 0, -1],
        fingers: [0, 1, 0, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    eb_m7_drop2_inv3_mid: {
        id: "eb_m7_drop2_inv3_mid",
        name: "Eb Minor 7",
        symbol: "Ebm7",
        altSymbols: ["Ebmin7", "Eb-7"],
        root: "Eb",
        quality: "minor7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 2-5)",
        intervals: ["b7", "1", "b3", "5"],
        notes: ["Db", "Eb", "Gb", "Bb"],
        frets: [-1, 4, 4, 6, 6, -1],
        fingers: [0, 1, 1, 3, 4, 0],
        barre: { fret: 4, fromString: 4, toString: 5 },
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["sad", "dreamy", "peaceful"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // ===== DROP 2 VOICINGS - DOMINANT 7 (Strings 1-4) =====

    // C Dominant 7 Drop 2 - Strings 1-4
    c_dom7_drop2_root_top: {
        id: "c_dom7_drop2_root_top",
        name: "C Dominant 7",
        symbol: "C7",
        altSymbols: ["Cdom7"],
        root: "C",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "3", "5", "b7"],
        notes: ["C", "E", "G", "Bb"],
        frets: [-1, -1, 10, 9, 8, 8],
        fingers: [0, 0, 4, 3, 1, 1],
        barre: { fret: 8, fromString: 1, toString: 2 },
        position: 8,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_dom7_drop2_inv1_top: {
        id: "c_dom7_drop2_inv1_top",
        name: "C Dominant 7",
        symbol: "C7",
        altSymbols: ["Cdom7"],
        root: "C",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["3", "5", "b7", "1"],
        notes: ["E", "G", "Bb", "C"],
        frets: [-1, -1, 2, 3, 4, 3],
        fingers: [0, 0, 1, 2, 4, 3],
        barre: null,
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_dom7_drop2_inv2_top: {
        id: "c_dom7_drop2_inv2_top",
        name: "C Dominant 7",
        symbol: "C7",
        altSymbols: ["Cdom7"],
        root: "C",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["5", "b7", "1", "3"],
        notes: ["G", "Bb", "C", "E"],
        frets: [-1, -1, 5, 3, 5, 5],
        fingers: [0, 0, 2, 1, 3, 4],
        barre: null,
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_dom7_drop2_inv3_top: {
        id: "c_dom7_drop2_inv3_top",
        name: "C Dominant 7",
        symbol: "C7",
        altSymbols: ["Cdom7"],
        root: "C",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["b7", "1", "3", "5"],
        notes: ["Bb", "C", "E", "G"],
        frets: [-1, -1, 8, 9, 8, 8],
        fingers: [0, 0, 1, 2, 1, 1],
        barre: { fret: 8, fromString: 1, toString: 4 },
        position: 8,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // D Dominant 7 Drop 2 - Strings 1-4
    d_dom7_drop2_root_top: {
        id: "d_dom7_drop2_root_top",
        name: "D Dominant 7",
        symbol: "D7",
        altSymbols: ["Ddom7"],
        root: "D",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "3", "5", "b7"],
        notes: ["D", "F#", "A", "C"],
        frets: [-1, -1, 12, 11, 10, 10],
        fingers: [0, 0, 4, 3, 1, 1],
        barre: { fret: 10, fromString: 1, toString: 2 },
        position: 10,
        difficulty: 4,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_dom7_drop2_inv1_top: {
        id: "d_dom7_drop2_inv1_top",
        name: "D Dominant 7",
        symbol: "D7",
        altSymbols: ["Ddom7"],
        root: "D",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["3", "5", "b7", "1"],
        notes: ["F#", "A", "C", "D"],
        frets: [-1, -1, 4, 5, 6, 5],
        fingers: [0, 0, 1, 2, 4, 3],
        barre: null,
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_dom7_drop2_inv2_top: {
        id: "d_dom7_drop2_inv2_top",
        name: "D Dominant 7",
        symbol: "D7",
        altSymbols: ["Ddom7"],
        root: "D",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["5", "b7", "1", "3"],
        notes: ["A", "C", "D", "F#"],
        frets: [-1, -1, 7, 5, 7, 7],
        fingers: [0, 0, 2, 1, 3, 4],
        barre: null,
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_dom7_drop2_inv3_top: {
        id: "d_dom7_drop2_inv3_top",
        name: "D Dominant 7",
        symbol: "D7",
        altSymbols: ["Ddom7"],
        root: "D",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["b7", "1", "3", "5"],
        notes: ["C", "D", "F#", "A"],
        frets: [-1, -1, 10, 11, 10, 10],
        fingers: [0, 0, 1, 2, 1, 1],
        barre: { fret: 10, fromString: 1, toString: 4 },
        position: 10,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // E Dominant 7 Drop 2 - Strings 1-4
    e_dom7_drop2_root_top: {
        id: "e_dom7_drop2_root_top",
        name: "E Dominant 7",
        symbol: "E7",
        altSymbols: ["Edom7"],
        root: "E",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "3", "5", "b7"],
        notes: ["E", "G#", "B", "D"],
        frets: [-1, -1, 2, 1, 0, 0],
        fingers: [0, 0, 2, 1, 0, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_dom7_drop2_inv1_top: {
        id: "e_dom7_drop2_inv1_top",
        name: "E Dominant 7",
        symbol: "E7",
        altSymbols: ["Edom7"],
        root: "E",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["3", "5", "b7", "1"],
        notes: ["G#", "B", "D", "E"],
        frets: [-1, -1, 6, 7, 8, 7],
        fingers: [0, 0, 1, 2, 4, 3],
        barre: null,
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    e_dom7_drop2_inv2_top: {
        id: "e_dom7_drop2_inv2_top",
        name: "E Dominant 7",
        symbol: "E7",
        altSymbols: ["Edom7"],
        root: "E",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["5", "b7", "1", "3"],
        notes: ["B", "D", "E", "G#"],
        frets: [-1, -1, 9, 7, 9, 9],
        fingers: [0, 0, 2, 1, 3, 4],
        barre: null,
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    e_dom7_drop2_inv3_top: {
        id: "e_dom7_drop2_inv3_top",
        name: "E Dominant 7",
        symbol: "E7",
        altSymbols: ["Edom7"],
        root: "E",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["b7", "1", "3", "5"],
        notes: ["D", "E", "G#", "B"],
        frets: [-1, -1, 0, 1, 0, 0],
        fingers: [0, 0, 0, 1, 0, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // F Dominant 7 Drop 2 - Strings 1-4
    f_dom7_drop2_root_top: {
        id: "f_dom7_drop2_root_top",
        name: "F Dominant 7",
        symbol: "F7",
        altSymbols: ["Fdom7"],
        root: "F",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "3", "5", "b7"],
        notes: ["F", "A", "C", "Eb"],
        frets: [-1, -1, 3, 2, 1, 1],
        fingers: [0, 0, 3, 2, 1, 1],
        barre: { fret: 1, fromString: 1, toString: 2 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_dom7_drop2_inv1_top: {
        id: "f_dom7_drop2_inv1_top",
        name: "F Dominant 7",
        symbol: "F7",
        altSymbols: ["Fdom7"],
        root: "F",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["3", "5", "b7", "1"],
        notes: ["A", "C", "Eb", "F"],
        frets: [-1, -1, 7, 8, 9, 8],
        fingers: [0, 0, 1, 2, 4, 3],
        barre: null,
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_dom7_drop2_inv2_top: {
        id: "f_dom7_drop2_inv2_top",
        name: "F Dominant 7",
        symbol: "F7",
        altSymbols: ["Fdom7"],
        root: "F",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["5", "b7", "1", "3"],
        notes: ["C", "Eb", "F", "A"],
        frets: [-1, -1, 10, 8, 10, 10],
        fingers: [0, 0, 2, 1, 3, 4],
        barre: null,
        position: 8,
        difficulty: 4,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_dom7_drop2_inv3_top: {
        id: "f_dom7_drop2_inv3_top",
        name: "F Dominant 7",
        symbol: "F7",
        altSymbols: ["Fdom7"],
        root: "F",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["b7", "1", "3", "5"],
        notes: ["Eb", "F", "A", "C"],
        frets: [-1, -1, 1, 2, 1, 1],
        fingers: [0, 0, 1, 2, 1, 1],
        barre: { fret: 1, fromString: 1, toString: 4 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // G Dominant 7 Drop 2 - Strings 1-4
    g_dom7_drop2_root_top: {
        id: "g_dom7_drop2_root_top",
        name: "G Dominant 7",
        symbol: "G7",
        altSymbols: ["Gdom7"],
        root: "G",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "3", "5", "b7"],
        notes: ["G", "B", "D", "F"],
        frets: [-1, -1, 5, 4, 3, 3],
        fingers: [0, 0, 3, 2, 1, 1],
        barre: { fret: 3, fromString: 1, toString: 2 },
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_dom7_drop2_inv1_top: {
        id: "g_dom7_drop2_inv1_top",
        name: "G Dominant 7",
        symbol: "G7",
        altSymbols: ["Gdom7"],
        root: "G",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["3", "5", "b7", "1"],
        notes: ["B", "D", "F", "G"],
        frets: [-1, -1, 9, 10, 11, 10],
        fingers: [0, 0, 1, 2, 4, 3],
        barre: null,
        position: 9,
        difficulty: 4,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_dom7_drop2_inv2_top: {
        id: "g_dom7_drop2_inv2_top",
        name: "G Dominant 7",
        symbol: "G7",
        altSymbols: ["Gdom7"],
        root: "G",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["5", "b7", "1", "3"],
        notes: ["D", "F", "G", "B"],
        frets: [-1, -1, 12, 10, 12, 12],
        fingers: [0, 0, 2, 1, 3, 4],
        barre: null,
        position: 10,
        difficulty: 4,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_dom7_drop2_inv3_top: {
        id: "g_dom7_drop2_inv3_top",
        name: "G Dominant 7",
        symbol: "G7",
        altSymbols: ["Gdom7"],
        root: "G",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["b7", "1", "3", "5"],
        notes: ["F", "G", "B", "D"],
        frets: [-1, -1, 3, 4, 3, 3],
        fingers: [0, 0, 1, 2, 1, 1],
        barre: { fret: 3, fromString: 1, toString: 4 },
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // A Dominant 7 Drop 2 - Strings 1-4
    a_dom7_drop2_root_top: {
        id: "a_dom7_drop2_root_top",
        name: "A Dominant 7",
        symbol: "A7",
        altSymbols: ["Adom7"],
        root: "A",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "3", "5", "b7"],
        notes: ["A", "C#", "E", "G"],
        frets: [-1, -1, 7, 6, 5, 5],
        fingers: [0, 0, 3, 2, 1, 1],
        barre: { fret: 5, fromString: 1, toString: 2 },
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_dom7_drop2_inv1_top: {
        id: "a_dom7_drop2_inv1_top",
        name: "A Dominant 7",
        symbol: "A7",
        altSymbols: ["Adom7"],
        root: "A",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["3", "5", "b7", "1"],
        notes: ["C#", "E", "G", "A"],
        frets: [-1, -1, 11, 12, 13, 12],
        fingers: [0, 0, 1, 2, 4, 3],
        barre: null,
        position: 11,
        difficulty: 4,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_dom7_drop2_inv2_top: {
        id: "a_dom7_drop2_inv2_top",
        name: "A Dominant 7",
        symbol: "A7",
        altSymbols: ["Adom7"],
        root: "A",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["5", "b7", "1", "3"],
        notes: ["E", "G", "A", "C#"],
        frets: [-1, -1, 2, 0, 2, 2],
        fingers: [0, 0, 2, 0, 3, 4],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    a_dom7_drop2_inv3_top: {
        id: "a_dom7_drop2_inv3_top",
        name: "A Dominant 7",
        symbol: "A7",
        altSymbols: ["Adom7"],
        root: "A",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["b7", "1", "3", "5"],
        notes: ["G", "A", "C#", "E"],
        frets: [-1, -1, 5, 6, 5, 5],
        fingers: [0, 0, 1, 2, 1, 1],
        barre: { fret: 5, fromString: 1, toString: 4 },
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // Bb Dominant 7 Drop 2 - Strings 1-4
    bb_dom7_drop2_root_top: {
        id: "bb_dom7_drop2_root_top",
        name: "Bb Dominant 7",
        symbol: "Bb7",
        altSymbols: ["Bbdom7"],
        root: "Bb",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "3", "5", "b7"],
        notes: ["Bb", "D", "F", "Ab"],
        frets: [-1, -1, 8, 7, 6, 6],
        fingers: [0, 0, 3, 2, 1, 1],
        barre: { fret: 6, fromString: 1, toString: 2 },
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    bb_dom7_drop2_inv1_top: {
        id: "bb_dom7_drop2_inv1_top",
        name: "Bb Dominant 7",
        symbol: "Bb7",
        altSymbols: ["Bbdom7"],
        root: "Bb",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["3", "5", "b7", "1"],
        notes: ["D", "F", "Ab", "Bb"],
        frets: [-1, -1, 12, 13, 14, 13],
        fingers: [0, 0, 1, 2, 4, 3],
        barre: null,
        position: 12,
        difficulty: 4,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    bb_dom7_drop2_inv2_top: {
        id: "bb_dom7_drop2_inv2_top",
        name: "Bb Dominant 7",
        symbol: "Bb7",
        altSymbols: ["Bbdom7"],
        root: "Bb",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["5", "b7", "1", "3"],
        notes: ["F", "Ab", "Bb", "D"],
        frets: [-1, -1, 3, 1, 3, 3],
        fingers: [0, 0, 2, 1, 3, 4],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    bb_dom7_drop2_inv3_top: {
        id: "bb_dom7_drop2_inv3_top",
        name: "Bb Dominant 7",
        symbol: "Bb7",
        altSymbols: ["Bbdom7"],
        root: "Bb",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["b7", "1", "3", "5"],
        notes: ["Ab", "Bb", "D", "F"],
        frets: [-1, -1, 6, 7, 6, 6],
        fingers: [0, 0, 1, 2, 1, 1],
        barre: { fret: 6, fromString: 1, toString: 4 },
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // Eb Dominant 7 Drop 2 - Strings 1-4
    eb_dom7_drop2_root_top: {
        id: "eb_dom7_drop2_root_top",
        name: "Eb Dominant 7",
        symbol: "Eb7",
        altSymbols: ["Ebdom7"],
        root: "Eb",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "3", "5", "b7"],
        notes: ["Eb", "G", "Bb", "Db"],
        frets: [-1, -1, 1, 0, 0, 0],
        fingers: [0, 0, 1, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    eb_dom7_drop2_inv1_top: {
        id: "eb_dom7_drop2_inv1_top",
        name: "Eb Dominant 7",
        symbol: "Eb7",
        altSymbols: ["Ebdom7"],
        root: "Eb",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["3", "5", "b7", "1"],
        notes: ["G", "Bb", "Db", "Eb"],
        frets: [-1, -1, 5, 6, 7, 6],
        fingers: [0, 0, 1, 2, 4, 3],
        barre: null,
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    eb_dom7_drop2_inv2_top: {
        id: "eb_dom7_drop2_inv2_top",
        name: "Eb Dominant 7",
        symbol: "Eb7",
        altSymbols: ["Ebdom7"],
        root: "Eb",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["5", "b7", "1", "3"],
        notes: ["Bb", "Db", "Eb", "G"],
        frets: [-1, -1, 8, 6, 8, 8],
        fingers: [0, 0, 2, 1, 3, 4],
        barre: null,
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    eb_dom7_drop2_inv3_top: {
        id: "eb_dom7_drop2_inv3_top",
        name: "Eb Dominant 7",
        symbol: "Eb7",
        altSymbols: ["Ebdom7"],
        root: "Eb",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["b7", "1", "3", "5"],
        notes: ["Db", "Eb", "G", "Bb"],
        frets: [-1, -1, 11, 12, 11, 11],
        fingers: [0, 0, 1, 2, 1, 1],
        barre: { fret: 11, fromString: 1, toString: 4 },
        position: 11,
        difficulty: 4,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // Ab Dominant 7 Drop 2 - Strings 1-4
    ab_dom7_drop2_root_top: {
        id: "ab_dom7_drop2_root_top",
        name: "Ab Dominant 7",
        symbol: "Ab7",
        altSymbols: ["Abdom7"],
        root: "Ab",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "3", "5", "b7"],
        notes: ["Ab", "C", "Eb", "Gb"],
        frets: [-1, -1, 6, 5, 4, 4],
        fingers: [0, 0, 3, 2, 1, 1],
        barre: { fret: 4, fromString: 1, toString: 2 },
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    ab_dom7_drop2_inv1_top: {
        id: "ab_dom7_drop2_inv1_top",
        name: "Ab Dominant 7",
        symbol: "Ab7",
        altSymbols: ["Abdom7"],
        root: "Ab",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["3", "5", "b7", "1"],
        notes: ["C", "Eb", "Gb", "Ab"],
        frets: [-1, -1, 10, 11, 12, 11],
        fingers: [0, 0, 1, 2, 4, 3],
        barre: null,
        position: 10,
        difficulty: 4,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    ab_dom7_drop2_inv2_top: {
        id: "ab_dom7_drop2_inv2_top",
        name: "Ab Dominant 7",
        symbol: "Ab7",
        altSymbols: ["Abdom7"],
        root: "Ab",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["5", "b7", "1", "3"],
        notes: ["Eb", "Gb", "Ab", "C"],
        frets: [-1, -1, 1, 0, 1, 1],
        fingers: [0, 0, 2, 0, 3, 4],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    ab_dom7_drop2_inv3_top: {
        id: "ab_dom7_drop2_inv3_top",
        name: "Ab Dominant 7",
        symbol: "Ab7",
        altSymbols: ["Abdom7"],
        root: "Ab",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["b7", "1", "3", "5"],
        notes: ["Gb", "Ab", "C", "Eb"],
        frets: [-1, -1, 4, 5, 4, 4],
        fingers: [0, 0, 1, 2, 1, 1],
        barre: { fret: 4, fromString: 1, toString: 4 },
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // ===== DROP 2 VOICINGS - m7b5 (Strings 1-4) =====

    // C m7b5 Drop 2 - Strings 1-4
    c_m7b5_drop2_root_top: {
        id: "c_m7b5_drop2_root_top",
        name: "C Minor 7b5",
        symbol: "Cm7b5",
        altSymbols: ["Cø7", "Cø", "C half-dim"],
        root: "C",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "b3", "b5", "b7"],
        notes: ["C", "Eb", "Gb", "Bb"],
        frets: [-1, -1, 10, 8, 8, 7],
        fingers: [0, 0, 4, 2, 3, 1],
        barre: null,
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_m7b5_drop2_inv1_top: {
        id: "c_m7b5_drop2_inv1_top",
        name: "C Minor 7b5",
        symbol: "Cm7b5",
        altSymbols: ["Cø7", "Cø", "C half-dim"],
        root: "C",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["b3", "b5", "b7", "1"],
        notes: ["Eb", "Gb", "Bb", "C"],
        frets: [-1, -1, 1, 2, 4, 3],
        fingers: [0, 0, 1, 2, 4, 3],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_m7b5_drop2_inv2_top: {
        id: "c_m7b5_drop2_inv2_top",
        name: "C Minor 7b5",
        symbol: "Cm7b5",
        altSymbols: ["Cø7", "Cø", "C half-dim"],
        root: "C",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["b5", "b7", "1", "b3"],
        notes: ["Gb", "Bb", "C", "Eb"],
        frets: [-1, -1, 4, 3, 5, 4],
        fingers: [0, 0, 2, 1, 4, 3],
        barre: null,
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_m7b5_drop2_inv3_top: {
        id: "c_m7b5_drop2_inv3_top",
        name: "C Minor 7b5",
        symbol: "Cm7b5",
        altSymbols: ["Cø7", "Cø", "C half-dim"],
        root: "C",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["b7", "1", "b3", "b5"],
        notes: ["Bb", "C", "Eb", "Gb"],
        frets: [-1, -1, 8, 8, 8, 7],
        fingers: [0, 0, 2, 3, 4, 1],
        barre: null,
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // D m7b5 Drop 2 - Strings 1-4
    d_m7b5_drop2_root_top: {
        id: "d_m7b5_drop2_root_top",
        name: "D Minor 7b5",
        symbol: "Dm7b5",
        altSymbols: ["Dø7", "Dø", "D half-dim"],
        root: "D",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "b3", "b5", "b7"],
        notes: ["D", "F", "Ab", "C"],
        frets: [-1, -1, 12, 10, 10, 9],
        fingers: [0, 0, 4, 2, 3, 1],
        barre: null,
        position: 9,
        difficulty: 4,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_m7b5_drop2_inv1_top: {
        id: "d_m7b5_drop2_inv1_top",
        name: "D Minor 7b5",
        symbol: "Dm7b5",
        altSymbols: ["Dø7", "Dø", "D half-dim"],
        root: "D",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["b3", "b5", "b7", "1"],
        notes: ["F", "Ab", "C", "D"],
        frets: [-1, -1, 3, 4, 6, 5],
        fingers: [0, 0, 1, 2, 4, 3],
        barre: null,
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_m7b5_drop2_inv2_top: {
        id: "d_m7b5_drop2_inv2_top",
        name: "D Minor 7b5",
        symbol: "Dm7b5",
        altSymbols: ["Dø7", "Dø", "D half-dim"],
        root: "D",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["b5", "b7", "1", "b3"],
        notes: ["Ab", "C", "D", "F"],
        frets: [-1, -1, 6, 5, 7, 6],
        fingers: [0, 0, 2, 1, 4, 3],
        barre: null,
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_m7b5_drop2_inv3_top: {
        id: "d_m7b5_drop2_inv3_top",
        name: "D Minor 7b5",
        symbol: "Dm7b5",
        altSymbols: ["Dø7", "Dø", "D half-dim"],
        root: "D",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["b7", "1", "b3", "b5"],
        notes: ["C", "D", "F", "Ab"],
        frets: [-1, -1, 10, 10, 10, 9],
        fingers: [0, 0, 2, 3, 4, 1],
        barre: null,
        position: 9,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // E m7b5 Drop 2 - Strings 1-4
    e_m7b5_drop2_root_top: {
        id: "e_m7b5_drop2_root_top",
        name: "E Minor 7b5",
        symbol: "Em7b5",
        altSymbols: ["Eø7", "Eø", "E half-dim"],
        root: "E",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "b3", "b5", "b7"],
        notes: ["E", "G", "Bb", "D"],
        frets: [-1, -1, 2, 0, 0, 0],
        fingers: [0, 0, 1, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_m7b5_drop2_inv1_top: {
        id: "e_m7b5_drop2_inv1_top",
        name: "E Minor 7b5",
        symbol: "Em7b5",
        altSymbols: ["Eø7", "Eø", "E half-dim"],
        root: "E",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["b3", "b5", "b7", "1"],
        notes: ["G", "Bb", "D", "E"],
        frets: [-1, -1, 5, 6, 8, 7],
        fingers: [0, 0, 1, 2, 4, 3],
        barre: null,
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    e_m7b5_drop2_inv2_top: {
        id: "e_m7b5_drop2_inv2_top",
        name: "E Minor 7b5",
        symbol: "Em7b5",
        altSymbols: ["Eø7", "Eø", "E half-dim"],
        root: "E",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["b5", "b7", "1", "b3"],
        notes: ["Bb", "D", "E", "G"],
        frets: [-1, -1, 8, 7, 9, 8],
        fingers: [0, 0, 2, 1, 4, 3],
        barre: null,
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    e_m7b5_drop2_inv3_top: {
        id: "e_m7b5_drop2_inv3_top",
        name: "E Minor 7b5",
        symbol: "Em7b5",
        altSymbols: ["Eø7", "Eø", "E half-dim"],
        root: "E",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["b7", "1", "b3", "b5"],
        notes: ["D", "E", "G", "Bb"],
        frets: [-1, -1, 0, 0, 0, 0],
        fingers: [0, 0, 0, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // F m7b5 Drop 2 - Strings 1-4
    f_m7b5_drop2_root_top: {
        id: "f_m7b5_drop2_root_top",
        name: "F Minor 7b5",
        symbol: "Fm7b5",
        altSymbols: ["Fø7", "Fø", "F half-dim"],
        root: "F",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "b3", "b5", "b7"],
        notes: ["F", "Ab", "Cb", "Eb"],
        frets: [-1, -1, 3, 1, 1, 1],
        fingers: [0, 0, 4, 1, 1, 1],
        barre: { fret: 1, fromString: 1, toString: 3 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_m7b5_drop2_inv1_top: {
        id: "f_m7b5_drop2_inv1_top",
        name: "F Minor 7b5",
        symbol: "Fm7b5",
        altSymbols: ["Fø7", "Fø", "F half-dim"],
        root: "F",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["b3", "b5", "b7", "1"],
        notes: ["Ab", "Cb", "Eb", "F"],
        frets: [-1, -1, 6, 7, 9, 8],
        fingers: [0, 0, 1, 2, 4, 3],
        barre: null,
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_m7b5_drop2_inv2_top: {
        id: "f_m7b5_drop2_inv2_top",
        name: "F Minor 7b5",
        symbol: "Fm7b5",
        altSymbols: ["Fø7", "Fø", "F half-dim"],
        root: "F",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["b5", "b7", "1", "b3"],
        notes: ["Cb", "Eb", "F", "Ab"],
        frets: [-1, -1, 9, 8, 10, 9],
        fingers: [0, 0, 2, 1, 4, 3],
        barre: null,
        position: 8,
        difficulty: 4,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_m7b5_drop2_inv3_top: {
        id: "f_m7b5_drop2_inv3_top",
        name: "F Minor 7b5",
        symbol: "Fm7b5",
        altSymbols: ["Fø7", "Fø", "F half-dim"],
        root: "F",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["b7", "1", "b3", "b5"],
        notes: ["Eb", "F", "Ab", "Cb"],
        frets: [-1, -1, 1, 1, 1, 1],
        fingers: [0, 0, 1, 1, 1, 1],
        barre: { fret: 1, fromString: 1, toString: 4 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // G m7b5 Drop 2 - Strings 1-4
    g_m7b5_drop2_root_top: {
        id: "g_m7b5_drop2_root_top",
        name: "G Minor 7b5",
        symbol: "Gm7b5",
        altSymbols: ["Gø7", "Gø", "G half-dim"],
        root: "G",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "b3", "b5", "b7"],
        notes: ["G", "Bb", "Db", "F"],
        frets: [-1, -1, 5, 3, 3, 3],
        fingers: [0, 0, 4, 1, 1, 1],
        barre: { fret: 3, fromString: 1, toString: 3 },
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_m7b5_drop2_inv1_top: {
        id: "g_m7b5_drop2_inv1_top",
        name: "G Minor 7b5",
        symbol: "Gm7b5",
        altSymbols: ["Gø7", "Gø", "G half-dim"],
        root: "G",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["b3", "b5", "b7", "1"],
        notes: ["Bb", "Db", "F", "G"],
        frets: [-1, -1, 8, 9, 11, 10],
        fingers: [0, 0, 1, 2, 4, 3],
        barre: null,
        position: 8,
        difficulty: 4,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_m7b5_drop2_inv2_top: {
        id: "g_m7b5_drop2_inv2_top",
        name: "G Minor 7b5",
        symbol: "Gm7b5",
        altSymbols: ["Gø7", "Gø", "G half-dim"],
        root: "G",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["b5", "b7", "1", "b3"],
        notes: ["Db", "F", "G", "Bb"],
        frets: [-1, -1, 11, 10, 12, 11],
        fingers: [0, 0, 2, 1, 4, 3],
        barre: null,
        position: 10,
        difficulty: 4,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_m7b5_drop2_inv3_top: {
        id: "g_m7b5_drop2_inv3_top",
        name: "G Minor 7b5",
        symbol: "Gm7b5",
        altSymbols: ["Gø7", "Gø", "G half-dim"],
        root: "G",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["b7", "1", "b3", "b5"],
        notes: ["F", "G", "Bb", "Db"],
        frets: [-1, -1, 3, 3, 3, 3],
        fingers: [0, 0, 1, 1, 1, 1],
        barre: { fret: 3, fromString: 1, toString: 4 },
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // A m7b5 Drop 2 - Strings 1-4
    a_m7b5_drop2_root_top: {
        id: "a_m7b5_drop2_root_top",
        name: "A Minor 7b5",
        symbol: "Am7b5",
        altSymbols: ["Aø7", "Aø", "A half-dim"],
        root: "A",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "b3", "b5", "b7"],
        notes: ["A", "C", "Eb", "G"],
        frets: [-1, -1, 7, 5, 5, 5],
        fingers: [0, 0, 4, 1, 1, 1],
        barre: { fret: 5, fromString: 1, toString: 3 },
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_m7b5_drop2_inv1_top: {
        id: "a_m7b5_drop2_inv1_top",
        name: "A Minor 7b5",
        symbol: "Am7b5",
        altSymbols: ["Aø7", "Aø", "A half-dim"],
        root: "A",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["b3", "b5", "b7", "1"],
        notes: ["C", "Eb", "G", "A"],
        frets: [-1, -1, 10, 11, 13, 12],
        fingers: [0, 0, 1, 2, 4, 3],
        barre: null,
        position: 10,
        difficulty: 4,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_m7b5_drop2_inv2_top: {
        id: "a_m7b5_drop2_inv2_top",
        name: "A Minor 7b5",
        symbol: "Am7b5",
        altSymbols: ["Aø7", "Aø", "A half-dim"],
        root: "A",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["b5", "b7", "1", "b3"],
        notes: ["Eb", "G", "A", "C"],
        frets: [-1, -1, 1, 0, 2, 1],
        fingers: [0, 0, 2, 0, 4, 3],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    a_m7b5_drop2_inv3_top: {
        id: "a_m7b5_drop2_inv3_top",
        name: "A Minor 7b5",
        symbol: "Am7b5",
        altSymbols: ["Aø7", "Aø", "A half-dim"],
        root: "A",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["b7", "1", "b3", "b5"],
        notes: ["G", "A", "C", "Eb"],
        frets: [-1, -1, 5, 5, 5, 5],
        fingers: [0, 0, 1, 1, 1, 1],
        barre: { fret: 5, fromString: 1, toString: 4 },
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // B m7b5 Drop 2 - Strings 1-4
    b_m7b5_drop2_root_top: {
        id: "b_m7b5_drop2_root_top",
        name: "B Minor 7b5",
        symbol: "Bm7b5",
        altSymbols: ["Bø7", "Bø", "B half-dim"],
        root: "B",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "b3", "b5", "b7"],
        notes: ["B", "D", "F", "A"],
        frets: [-1, -1, 9, 7, 7, 7],
        fingers: [0, 0, 4, 1, 1, 1],
        barre: { fret: 7, fromString: 1, toString: 3 },
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    b_m7b5_drop2_inv1_top: {
        id: "b_m7b5_drop2_inv1_top",
        name: "B Minor 7b5",
        symbol: "Bm7b5",
        altSymbols: ["Bø7", "Bø", "B half-dim"],
        root: "B",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["b3", "b5", "b7", "1"],
        notes: ["D", "F", "A", "B"],
        frets: [-1, -1, 12, 13, 15, 14],
        fingers: [0, 0, 1, 2, 4, 3],
        barre: null,
        position: 12,
        difficulty: 4,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    b_m7b5_drop2_inv2_top: {
        id: "b_m7b5_drop2_inv2_top",
        name: "B Minor 7b5",
        symbol: "Bm7b5",
        altSymbols: ["Bø7", "Bø", "B half-dim"],
        root: "B",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["b5", "b7", "1", "b3"],
        notes: ["F", "A", "B", "D"],
        frets: [-1, -1, 3, 2, 4, 3],
        fingers: [0, 0, 2, 1, 4, 3],
        barre: null,
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    b_m7b5_drop2_inv3_top: {
        id: "b_m7b5_drop2_inv3_top",
        name: "B Minor 7b5",
        symbol: "Bm7b5",
        altSymbols: ["Bø7", "Bø", "B half-dim"],
        root: "B",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["b7", "1", "b3", "b5"],
        notes: ["A", "B", "D", "F"],
        frets: [-1, -1, 7, 7, 7, 7],
        fingers: [0, 0, 1, 1, 1, 1],
        barre: { fret: 7, fromString: 1, toString: 4 },
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // Bb m7b5 Drop 2 - Strings 1-4
    bb_m7b5_drop2_root_top: {
        id: "bb_m7b5_drop2_root_top",
        name: "Bb Minor 7b5",
        symbol: "Bbm7b5",
        altSymbols: ["Bbø7", "Bbø", "Bb half-dim"],
        root: "Bb",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 1-4)",
        intervals: ["1", "b3", "b5", "b7"],
        notes: ["Bb", "Db", "Fb", "Ab"],
        frets: [-1, -1, 8, 6, 6, 6],
        fingers: [0, 0, 4, 1, 1, 1],
        barre: { fret: 6, fromString: 1, toString: 3 },
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    bb_m7b5_drop2_inv1_top: {
        id: "bb_m7b5_drop2_inv1_top",
        name: "Bb Minor 7b5",
        symbol: "Bbm7b5",
        altSymbols: ["Bbø7", "Bbø", "Bb half-dim"],
        root: "Bb",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 1-4)",
        intervals: ["b3", "b5", "b7", "1"],
        notes: ["Db", "Fb", "Ab", "Bb"],
        frets: [-1, -1, 11, 12, 14, 13],
        fingers: [0, 0, 1, 2, 4, 3],
        barre: null,
        position: 11,
        difficulty: 4,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    bb_m7b5_drop2_inv2_top: {
        id: "bb_m7b5_drop2_inv2_top",
        name: "Bb Minor 7b5",
        symbol: "Bbm7b5",
        altSymbols: ["Bbø7", "Bbø", "Bb half-dim"],
        root: "Bb",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 1-4)",
        intervals: ["b5", "b7", "1", "b3"],
        notes: ["Fb", "Ab", "Bb", "Db"],
        frets: [-1, -1, 2, 1, 3, 2],
        fingers: [0, 0, 2, 1, 4, 3],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    bb_m7b5_drop2_inv3_top: {
        id: "bb_m7b5_drop2_inv3_top",
        name: "Bb Minor 7b5",
        symbol: "Bbm7b5",
        altSymbols: ["Bbø7", "Bbø", "Bb half-dim"],
        root: "Bb",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 1-4)",
        intervals: ["b7", "1", "b3", "b5"],
        notes: ["Ab", "Bb", "Db", "Fb"],
        frets: [-1, -1, 6, 6, 6, 6],
        fingers: [0, 0, 1, 1, 1, 1],
        barre: { fret: 6, fromString: 1, toString: 4 },
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // ===== DROP 2 VOICINGS - DOMINANT 7 (Strings 2-5) =====

    // C Dominant 7 Drop 2 - Strings 2-5
    c_dom7_drop2_root_mid: {
        id: "c_dom7_drop2_root_mid",
        name: "C Dominant 7",
        symbol: "C7",
        altSymbols: ["Cdom7"],
        root: "C",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 2-5)",
        intervals: ["1", "3", "5", "b7"],
        notes: ["C", "E", "G", "Bb"],
        frets: [-1, 3, 5, 3, 5, -1],
        fingers: [0, 1, 3, 1, 4, 0],
        barre: { fret: 3, fromString: 2, toString: 5 },
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_dom7_drop2_inv1_mid: {
        id: "c_dom7_drop2_inv1_mid",
        name: "C Dominant 7",
        symbol: "C7",
        altSymbols: ["Cdom7"],
        root: "C",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 2-5)",
        intervals: ["3", "5", "b7", "1"],
        notes: ["E", "G", "Bb", "C"],
        frets: [-1, 7, 8, 8, 8, -1],
        fingers: [0, 1, 2, 2, 2, 0],
        barre: { fret: 8, fromString: 2, toString: 4 },
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_dom7_drop2_inv2_mid: {
        id: "c_dom7_drop2_inv2_mid",
        name: "C Dominant 7",
        symbol: "C7",
        altSymbols: ["Cdom7"],
        root: "C",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 2-5)",
        intervals: ["5", "b7", "1", "3"],
        notes: ["G", "Bb", "C", "E"],
        frets: [-1, 10, 8, 9, 10, -1],
        fingers: [0, 3, 1, 2, 4, 0],
        barre: null,
        position: 8,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_dom7_drop2_inv3_mid: {
        id: "c_dom7_drop2_inv3_mid",
        name: "C Dominant 7",
        symbol: "C7",
        altSymbols: ["Cdom7"],
        root: "C",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 2-5)",
        intervals: ["b7", "1", "3", "5"],
        notes: ["Bb", "C", "E", "G"],
        frets: [-1, 1, 2, 3, 3, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // D Dominant 7 Drop 2 - Strings 2-5
    d_dom7_drop2_root_mid: {
        id: "d_dom7_drop2_root_mid",
        name: "D Dominant 7",
        symbol: "D7",
        altSymbols: ["Ddom7"],
        root: "D",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 2-5)",
        intervals: ["1", "3", "5", "b7"],
        notes: ["D", "F#", "A", "C"],
        frets: [-1, 5, 7, 5, 7, -1],
        fingers: [0, 1, 3, 1, 4, 0],
        barre: { fret: 5, fromString: 2, toString: 5 },
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_dom7_drop2_inv1_mid: {
        id: "d_dom7_drop2_inv1_mid",
        name: "D Dominant 7",
        symbol: "D7",
        altSymbols: ["Ddom7"],
        root: "D",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 2-5)",
        intervals: ["3", "5", "b7", "1"],
        notes: ["F#", "A", "C", "D"],
        frets: [-1, 9, 10, 10, 10, -1],
        fingers: [0, 1, 2, 2, 2, 0],
        barre: { fret: 10, fromString: 2, toString: 4 },
        position: 9,
        difficulty: 4,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_dom7_drop2_inv2_mid: {
        id: "d_dom7_drop2_inv2_mid",
        name: "D Dominant 7",
        symbol: "D7",
        altSymbols: ["Ddom7"],
        root: "D",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 2-5)",
        intervals: ["5", "b7", "1", "3"],
        notes: ["A", "C", "D", "F#"],
        frets: [-1, 12, 10, 11, 12, -1],
        fingers: [0, 3, 1, 2, 4, 0],
        barre: null,
        position: 10,
        difficulty: 4,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_dom7_drop2_inv3_mid: {
        id: "d_dom7_drop2_inv3_mid",
        name: "D Dominant 7",
        symbol: "D7",
        altSymbols: ["Ddom7"],
        root: "D",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 2-5)",
        intervals: ["b7", "1", "3", "5"],
        notes: ["C", "D", "F#", "A"],
        frets: [-1, 3, 4, 5, 5, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        barre: null,
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // E Dominant 7 Drop 2 - Strings 2-5
    e_dom7_drop2_root_mid: {
        id: "e_dom7_drop2_root_mid",
        name: "E Dominant 7",
        symbol: "E7",
        altSymbols: ["Edom7"],
        root: "E",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 2-5)",
        intervals: ["1", "3", "5", "b7"],
        notes: ["E", "G#", "B", "D"],
        frets: [-1, 7, 9, 7, 9, -1],
        fingers: [0, 1, 3, 1, 4, 0],
        barre: { fret: 7, fromString: 2, toString: 5 },
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    e_dom7_drop2_inv1_mid: {
        id: "e_dom7_drop2_inv1_mid",
        name: "E Dominant 7",
        symbol: "E7",
        altSymbols: ["Edom7"],
        root: "E",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 2-5)",
        intervals: ["3", "5", "b7", "1"],
        notes: ["G#", "B", "D", "E"],
        frets: [-1, 11, 12, 12, 12, -1],
        fingers: [0, 1, 2, 2, 2, 0],
        barre: { fret: 12, fromString: 2, toString: 4 },
        position: 11,
        difficulty: 4,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    e_dom7_drop2_inv2_mid: {
        id: "e_dom7_drop2_inv2_mid",
        name: "E Dominant 7",
        symbol: "E7",
        altSymbols: ["Edom7"],
        root: "E",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 2-5)",
        intervals: ["5", "b7", "1", "3"],
        notes: ["B", "D", "E", "G#"],
        frets: [-1, 2, 0, 1, 2, -1],
        fingers: [0, 2, 0, 1, 3, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_dom7_drop2_inv3_mid: {
        id: "e_dom7_drop2_inv3_mid",
        name: "E Dominant 7",
        symbol: "E7",
        altSymbols: ["Edom7"],
        root: "E",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 2-5)",
        intervals: ["b7", "1", "3", "5"],
        notes: ["D", "E", "G#", "B"],
        frets: [-1, 5, 6, 7, 7, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        barre: null,
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // F Dominant 7 Drop 2 - Strings 2-5
    f_dom7_drop2_root_mid: {
        id: "f_dom7_drop2_root_mid",
        name: "F Dominant 7",
        symbol: "F7",
        altSymbols: ["Fdom7"],
        root: "F",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 2-5)",
        intervals: ["1", "3", "5", "b7"],
        notes: ["F", "A", "C", "Eb"],
        frets: [-1, 8, 10, 8, 10, -1],
        fingers: [0, 1, 3, 1, 4, 0],
        barre: { fret: 8, fromString: 2, toString: 5 },
        position: 8,
        difficulty: 4,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_dom7_drop2_inv1_mid: {
        id: "f_dom7_drop2_inv1_mid",
        name: "F Dominant 7",
        symbol: "F7",
        altSymbols: ["Fdom7"],
        root: "F",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 2-5)",
        intervals: ["3", "5", "b7", "1"],
        notes: ["A", "C", "Eb", "F"],
        frets: [-1, 12, 13, 13, 13, -1],
        fingers: [0, 1, 2, 2, 2, 0],
        barre: { fret: 13, fromString: 2, toString: 4 },
        position: 12,
        difficulty: 4,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_dom7_drop2_inv2_mid: {
        id: "f_dom7_drop2_inv2_mid",
        name: "F Dominant 7",
        symbol: "F7",
        altSymbols: ["Fdom7"],
        root: "F",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 2-5)",
        intervals: ["5", "b7", "1", "3"],
        notes: ["C", "Eb", "F", "A"],
        frets: [-1, 3, 1, 2, 3, -1],
        fingers: [0, 3, 1, 2, 4, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_dom7_drop2_inv3_mid: {
        id: "f_dom7_drop2_inv3_mid",
        name: "F Dominant 7",
        symbol: "F7",
        altSymbols: ["Fdom7"],
        root: "F",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 2-5)",
        intervals: ["b7", "1", "3", "5"],
        notes: ["Eb", "F", "A", "C"],
        frets: [-1, 6, 7, 8, 8, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        barre: null,
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // G Dominant 7 Drop 2 - Strings 2-5
    g_dom7_drop2_root_mid: {
        id: "g_dom7_drop2_root_mid",
        name: "G Dominant 7",
        symbol: "G7",
        altSymbols: ["Gdom7"],
        root: "G",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 2-5)",
        intervals: ["1", "3", "5", "b7"],
        notes: ["G", "B", "D", "F"],
        frets: [-1, 10, 12, 10, 12, -1],
        fingers: [0, 1, 3, 1, 4, 0],
        barre: { fret: 10, fromString: 2, toString: 5 },
        position: 10,
        difficulty: 4,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_dom7_drop2_inv1_mid: {
        id: "g_dom7_drop2_inv1_mid",
        name: "G Dominant 7",
        symbol: "G7",
        altSymbols: ["Gdom7"],
        root: "G",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 2-5)",
        intervals: ["3", "5", "b7", "1"],
        notes: ["B", "D", "F", "G"],
        frets: [-1, 2, 3, 3, 3, -1],
        fingers: [0, 1, 2, 2, 2, 0],
        barre: { fret: 3, fromString: 2, toString: 4 },
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_dom7_drop2_inv2_mid: {
        id: "g_dom7_drop2_inv2_mid",
        name: "G Dominant 7",
        symbol: "G7",
        altSymbols: ["Gdom7"],
        root: "G",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 2-5)",
        intervals: ["5", "b7", "1", "3"],
        notes: ["D", "F", "G", "B"],
        frets: [-1, 5, 3, 4, 5, -1],
        fingers: [0, 3, 1, 2, 4, 0],
        barre: null,
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_dom7_drop2_inv3_mid: {
        id: "g_dom7_drop2_inv3_mid",
        name: "G Dominant 7",
        symbol: "G7",
        altSymbols: ["Gdom7"],
        root: "G",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 2-5)",
        intervals: ["b7", "1", "3", "5"],
        notes: ["F", "G", "B", "D"],
        frets: [-1, 8, 9, 10, 10, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        barre: null,
        position: 8,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // A Dominant 7 Drop 2 - Strings 2-5
    a_dom7_drop2_root_mid: {
        id: "a_dom7_drop2_root_mid",
        name: "A Dominant 7",
        symbol: "A7",
        altSymbols: ["Adom7"],
        root: "A",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 2-5)",
        intervals: ["1", "3", "5", "b7"],
        notes: ["A", "C#", "E", "G"],
        frets: [-1, 12, 14, 12, 14, -1],
        fingers: [0, 1, 3, 1, 4, 0],
        barre: { fret: 12, fromString: 2, toString: 5 },
        position: 12,
        difficulty: 4,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_dom7_drop2_inv1_mid: {
        id: "a_dom7_drop2_inv1_mid",
        name: "A Dominant 7",
        symbol: "A7",
        altSymbols: ["Adom7"],
        root: "A",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 2-5)",
        intervals: ["3", "5", "b7", "1"],
        notes: ["C#", "E", "G", "A"],
        frets: [-1, 4, 5, 5, 5, -1],
        fingers: [0, 1, 2, 2, 2, 0],
        barre: { fret: 5, fromString: 2, toString: 4 },
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_dom7_drop2_inv2_mid: {
        id: "a_dom7_drop2_inv2_mid",
        name: "A Dominant 7",
        symbol: "A7",
        altSymbols: ["Adom7"],
        root: "A",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 2-5)",
        intervals: ["5", "b7", "1", "3"],
        notes: ["E", "G", "A", "C#"],
        frets: [-1, 7, 5, 6, 7, -1],
        fingers: [0, 3, 1, 2, 4, 0],
        barre: null,
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_dom7_drop2_inv3_mid: {
        id: "a_dom7_drop2_inv3_mid",
        name: "A Dominant 7",
        symbol: "A7",
        altSymbols: ["Adom7"],
        root: "A",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 2-5)",
        intervals: ["b7", "1", "3", "5"],
        notes: ["G", "A", "C#", "E"],
        frets: [-1, 10, 11, 12, 12, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        barre: null,
        position: 10,
        difficulty: 4,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // Bb Dominant 7 Drop 2 - Strings 2-5
    bb_dom7_drop2_root_mid: {
        id: "bb_dom7_drop2_root_mid",
        name: "Bb Dominant 7",
        symbol: "Bb7",
        altSymbols: ["Bbdom7"],
        root: "Bb",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 2-5)",
        intervals: ["1", "3", "5", "b7"],
        notes: ["Bb", "D", "F", "Ab"],
        frets: [-1, 1, 3, 1, 3, -1],
        fingers: [0, 1, 3, 1, 4, 0],
        barre: { fret: 1, fromString: 2, toString: 5 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    bb_dom7_drop2_inv1_mid: {
        id: "bb_dom7_drop2_inv1_mid",
        name: "Bb Dominant 7",
        symbol: "Bb7",
        altSymbols: ["Bbdom7"],
        root: "Bb",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 2-5)",
        intervals: ["3", "5", "b7", "1"],
        notes: ["D", "F", "Ab", "Bb"],
        frets: [-1, 5, 6, 6, 6, -1],
        fingers: [0, 1, 2, 2, 2, 0],
        barre: { fret: 6, fromString: 2, toString: 4 },
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    bb_dom7_drop2_inv2_mid: {
        id: "bb_dom7_drop2_inv2_mid",
        name: "Bb Dominant 7",
        symbol: "Bb7",
        altSymbols: ["Bbdom7"],
        root: "Bb",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 2-5)",
        intervals: ["5", "b7", "1", "3"],
        notes: ["F", "Ab", "Bb", "D"],
        frets: [-1, 8, 6, 7, 8, -1],
        fingers: [0, 3, 1, 2, 4, 0],
        barre: null,
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    bb_dom7_drop2_inv3_mid: {
        id: "bb_dom7_drop2_inv3_mid",
        name: "Bb Dominant 7",
        symbol: "Bb7",
        altSymbols: ["Bbdom7"],
        root: "Bb",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 2-5)",
        intervals: ["b7", "1", "3", "5"],
        notes: ["Ab", "Bb", "D", "F"],
        frets: [-1, 11, 12, 13, 13, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        barre: null,
        position: 11,
        difficulty: 4,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // Eb Dominant 7 Drop 2 - Strings 2-5
    eb_dom7_drop2_root_mid: {
        id: "eb_dom7_drop2_root_mid",
        name: "Eb Dominant 7",
        symbol: "Eb7",
        altSymbols: ["Ebdom7"],
        root: "Eb",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 2-5)",
        intervals: ["1", "3", "5", "b7"],
        notes: ["Eb", "G", "Bb", "Db"],
        frets: [-1, 6, 8, 6, 8, -1],
        fingers: [0, 1, 3, 1, 4, 0],
        barre: { fret: 6, fromString: 2, toString: 5 },
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    eb_dom7_drop2_inv1_mid: {
        id: "eb_dom7_drop2_inv1_mid",
        name: "Eb Dominant 7",
        symbol: "Eb7",
        altSymbols: ["Ebdom7"],
        root: "Eb",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 2-5)",
        intervals: ["3", "5", "b7", "1"],
        notes: ["G", "Bb", "Db", "Eb"],
        frets: [-1, 10, 11, 11, 11, -1],
        fingers: [0, 1, 2, 2, 2, 0],
        barre: { fret: 11, fromString: 2, toString: 4 },
        position: 10,
        difficulty: 4,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    eb_dom7_drop2_inv2_mid: {
        id: "eb_dom7_drop2_inv2_mid",
        name: "Eb Dominant 7",
        symbol: "Eb7",
        altSymbols: ["Ebdom7"],
        root: "Eb",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 2-5)",
        intervals: ["5", "b7", "1", "3"],
        notes: ["Bb", "Db", "Eb", "G"],
        frets: [-1, 1, 0, 0, 1, -1],
        fingers: [0, 2, 0, 0, 3, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    eb_dom7_drop2_inv3_mid: {
        id: "eb_dom7_drop2_inv3_mid",
        name: "Eb Dominant 7",
        symbol: "Eb7",
        altSymbols: ["Ebdom7"],
        root: "Eb",
        quality: "dominant7",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 2-5)",
        intervals: ["b7", "1", "3", "5"],
        notes: ["Db", "Eb", "G", "Bb"],
        frets: [-1, 4, 5, 6, 6, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        barre: null,
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["bluesy", "soulful", "tense"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // ===== DROP 2 VOICINGS - m7b5 (Strings 2-5) =====

    // C m7b5 Drop 2 - Strings 2-5
    c_m7b5_drop2_root_mid: {
        id: "c_m7b5_drop2_root_mid",
        name: "C Minor 7b5",
        symbol: "Cm7b5",
        altSymbols: ["Cø7", "Cø", "C half-dim"],
        root: "C",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 2-5)",
        intervals: ["1", "b3", "b5", "b7"],
        notes: ["C", "Eb", "Gb", "Bb"],
        frets: [-1, 3, 4, 3, 4, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        barre: null,
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_m7b5_drop2_inv1_mid: {
        id: "c_m7b5_drop2_inv1_mid",
        name: "C Minor 7b5",
        symbol: "Cm7b5",
        altSymbols: ["Cø7", "Cø", "C half-dim"],
        root: "C",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 2-5)",
        intervals: ["b3", "b5", "b7", "1"],
        notes: ["Eb", "Gb", "Bb", "C"],
        frets: [-1, 6, 7, 8, 8, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        barre: null,
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_m7b5_drop2_inv2_mid: {
        id: "c_m7b5_drop2_inv2_mid",
        name: "C Minor 7b5",
        symbol: "Cm7b5",
        altSymbols: ["Cø7", "Cø", "C half-dim"],
        root: "C",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 2-5)",
        intervals: ["b5", "b7", "1", "b3"],
        notes: ["Gb", "Bb", "C", "Eb"],
        frets: [-1, 9, 8, 8, 9, -1],
        fingers: [0, 2, 1, 1, 3, 0],
        barre: { fret: 8, fromString: 2, toString: 3 },
        position: 8,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_m7b5_drop2_inv3_mid: {
        id: "c_m7b5_drop2_inv3_mid",
        name: "C Minor 7b5",
        symbol: "Cm7b5",
        altSymbols: ["Cø7", "Cø", "C half-dim"],
        root: "C",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 2-5)",
        intervals: ["b7", "1", "b3", "b5"],
        notes: ["Bb", "C", "Eb", "Gb"],
        frets: [-1, 1, 1, 3, 2, -1],
        fingers: [0, 1, 1, 4, 2, 0],
        barre: { fret: 1, fromString: 4, toString: 5 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // D m7b5 Drop 2 - Strings 2-5
    d_m7b5_drop2_root_mid: {
        id: "d_m7b5_drop2_root_mid",
        name: "D Minor 7b5",
        symbol: "Dm7b5",
        altSymbols: ["Dø7", "Dø", "D half-dim"],
        root: "D",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 2-5)",
        intervals: ["1", "b3", "b5", "b7"],
        notes: ["D", "F", "Ab", "C"],
        frets: [-1, 5, 6, 5, 6, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        barre: null,
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_m7b5_drop2_inv1_mid: {
        id: "d_m7b5_drop2_inv1_mid",
        name: "D Minor 7b5",
        symbol: "Dm7b5",
        altSymbols: ["Dø7", "Dø", "D half-dim"],
        root: "D",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 2-5)",
        intervals: ["b3", "b5", "b7", "1"],
        notes: ["F", "Ab", "C", "D"],
        frets: [-1, 8, 9, 10, 10, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        barre: null,
        position: 8,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_m7b5_drop2_inv2_mid: {
        id: "d_m7b5_drop2_inv2_mid",
        name: "D Minor 7b5",
        symbol: "Dm7b5",
        altSymbols: ["Dø7", "Dø", "D half-dim"],
        root: "D",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 2-5)",
        intervals: ["b5", "b7", "1", "b3"],
        notes: ["Ab", "C", "D", "F"],
        frets: [-1, 11, 10, 10, 11, -1],
        fingers: [0, 2, 1, 1, 3, 0],
        barre: { fret: 10, fromString: 2, toString: 3 },
        position: 10,
        difficulty: 4,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_m7b5_drop2_inv3_mid: {
        id: "d_m7b5_drop2_inv3_mid",
        name: "D Minor 7b5",
        symbol: "Dm7b5",
        altSymbols: ["Dø7", "Dø", "D half-dim"],
        root: "D",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 2-5)",
        intervals: ["b7", "1", "b3", "b5"],
        notes: ["C", "D", "F", "Ab"],
        frets: [-1, 3, 3, 5, 4, -1],
        fingers: [0, 1, 1, 4, 2, 0],
        barre: { fret: 3, fromString: 4, toString: 5 },
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // E m7b5 Drop 2 - Strings 2-5
    e_m7b5_drop2_root_mid: {
        id: "e_m7b5_drop2_root_mid",
        name: "E Minor 7b5",
        symbol: "Em7b5",
        altSymbols: ["Eø7", "Eø", "E half-dim"],
        root: "E",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 2-5)",
        intervals: ["1", "b3", "b5", "b7"],
        notes: ["E", "G", "Bb", "D"],
        frets: [-1, 7, 8, 7, 8, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        barre: null,
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    e_m7b5_drop2_inv1_mid: {
        id: "e_m7b5_drop2_inv1_mid",
        name: "E Minor 7b5",
        symbol: "Em7b5",
        altSymbols: ["Eø7", "Eø", "E half-dim"],
        root: "E",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 2-5)",
        intervals: ["b3", "b5", "b7", "1"],
        notes: ["G", "Bb", "D", "E"],
        frets: [-1, 10, 11, 12, 12, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        barre: null,
        position: 10,
        difficulty: 4,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    e_m7b5_drop2_inv2_mid: {
        id: "e_m7b5_drop2_inv2_mid",
        name: "E Minor 7b5",
        symbol: "Em7b5",
        altSymbols: ["Eø7", "Eø", "E half-dim"],
        root: "E",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 2-5)",
        intervals: ["b5", "b7", "1", "b3"],
        notes: ["Bb", "D", "E", "G"],
        frets: [-1, 1, 0, 0, 1, -1],
        fingers: [0, 2, 0, 0, 3, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_m7b5_drop2_inv3_mid: {
        id: "e_m7b5_drop2_inv3_mid",
        name: "E Minor 7b5",
        symbol: "Em7b5",
        altSymbols: ["Eø7", "Eø", "E half-dim"],
        root: "E",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 2-5)",
        intervals: ["b7", "1", "b3", "b5"],
        notes: ["D", "E", "G", "Bb"],
        frets: [-1, 5, 5, 7, 6, -1],
        fingers: [0, 1, 1, 4, 2, 0],
        barre: { fret: 5, fromString: 4, toString: 5 },
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // F m7b5 Drop 2 - Strings 2-5
    f_m7b5_drop2_root_mid: {
        id: "f_m7b5_drop2_root_mid",
        name: "F Minor 7b5",
        symbol: "Fm7b5",
        altSymbols: ["Fø7", "Fø", "F half-dim"],
        root: "F",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 2-5)",
        intervals: ["1", "b3", "b5", "b7"],
        notes: ["F", "Ab", "Cb", "Eb"],
        frets: [-1, 8, 9, 8, 9, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        barre: null,
        position: 8,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_m7b5_drop2_inv1_mid: {
        id: "f_m7b5_drop2_inv1_mid",
        name: "F Minor 7b5",
        symbol: "Fm7b5",
        altSymbols: ["Fø7", "Fø", "F half-dim"],
        root: "F",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 2-5)",
        intervals: ["b3", "b5", "b7", "1"],
        notes: ["Ab", "Cb", "Eb", "F"],
        frets: [-1, 11, 12, 13, 13, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        barre: null,
        position: 11,
        difficulty: 4,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_m7b5_drop2_inv2_mid: {
        id: "f_m7b5_drop2_inv2_mid",
        name: "F Minor 7b5",
        symbol: "Fm7b5",
        altSymbols: ["Fø7", "Fø", "F half-dim"],
        root: "F",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 2-5)",
        intervals: ["b5", "b7", "1", "b3"],
        notes: ["Cb", "Eb", "F", "Ab"],
        frets: [-1, 2, 1, 1, 2, -1],
        fingers: [0, 2, 1, 1, 3, 0],
        barre: { fret: 1, fromString: 2, toString: 3 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_m7b5_drop2_inv3_mid: {
        id: "f_m7b5_drop2_inv3_mid",
        name: "F Minor 7b5",
        symbol: "Fm7b5",
        altSymbols: ["Fø7", "Fø", "F half-dim"],
        root: "F",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 2-5)",
        intervals: ["b7", "1", "b3", "b5"],
        notes: ["Eb", "F", "Ab", "Cb"],
        frets: [-1, 6, 6, 8, 7, -1],
        fingers: [0, 1, 1, 4, 2, 0],
        barre: { fret: 6, fromString: 4, toString: 5 },
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // G m7b5 Drop 2 - Strings 2-5
    g_m7b5_drop2_root_mid: {
        id: "g_m7b5_drop2_root_mid",
        name: "G Minor 7b5",
        symbol: "Gm7b5",
        altSymbols: ["Gø7", "Gø", "G half-dim"],
        root: "G",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 2-5)",
        intervals: ["1", "b3", "b5", "b7"],
        notes: ["G", "Bb", "Db", "F"],
        frets: [-1, 10, 11, 10, 11, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        barre: null,
        position: 10,
        difficulty: 4,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_m7b5_drop2_inv1_mid: {
        id: "g_m7b5_drop2_inv1_mid",
        name: "G Minor 7b5",
        symbol: "Gm7b5",
        altSymbols: ["Gø7", "Gø", "G half-dim"],
        root: "G",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 2-5)",
        intervals: ["b3", "b5", "b7", "1"],
        notes: ["Bb", "Db", "F", "G"],
        frets: [-1, 1, 2, 3, 3, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_m7b5_drop2_inv2_mid: {
        id: "g_m7b5_drop2_inv2_mid",
        name: "G Minor 7b5",
        symbol: "Gm7b5",
        altSymbols: ["Gø7", "Gø", "G half-dim"],
        root: "G",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 2-5)",
        intervals: ["b5", "b7", "1", "b3"],
        notes: ["Db", "F", "G", "Bb"],
        frets: [-1, 4, 3, 3, 4, -1],
        fingers: [0, 2, 1, 1, 3, 0],
        barre: { fret: 3, fromString: 2, toString: 3 },
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_m7b5_drop2_inv3_mid: {
        id: "g_m7b5_drop2_inv3_mid",
        name: "G Minor 7b5",
        symbol: "Gm7b5",
        altSymbols: ["Gø7", "Gø", "G half-dim"],
        root: "G",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 2-5)",
        intervals: ["b7", "1", "b3", "b5"],
        notes: ["F", "G", "Bb", "Db"],
        frets: [-1, 8, 8, 10, 9, -1],
        fingers: [0, 1, 1, 4, 2, 0],
        barre: { fret: 8, fromString: 4, toString: 5 },
        position: 8,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // A m7b5 Drop 2 - Strings 2-5
    a_m7b5_drop2_root_mid: {
        id: "a_m7b5_drop2_root_mid",
        name: "A Minor 7b5",
        symbol: "Am7b5",
        altSymbols: ["Aø7", "Aø", "A half-dim"],
        root: "A",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 2-5)",
        intervals: ["1", "b3", "b5", "b7"],
        notes: ["A", "C", "Eb", "G"],
        frets: [-1, 12, 13, 12, 13, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        barre: null,
        position: 12,
        difficulty: 4,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_m7b5_drop2_inv1_mid: {
        id: "a_m7b5_drop2_inv1_mid",
        name: "A Minor 7b5",
        symbol: "Am7b5",
        altSymbols: ["Aø7", "Aø", "A half-dim"],
        root: "A",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 2-5)",
        intervals: ["b3", "b5", "b7", "1"],
        notes: ["C", "Eb", "G", "A"],
        frets: [-1, 3, 4, 5, 5, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        barre: null,
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_m7b5_drop2_inv2_mid: {
        id: "a_m7b5_drop2_inv2_mid",
        name: "A Minor 7b5",
        symbol: "Am7b5",
        altSymbols: ["Aø7", "Aø", "A half-dim"],
        root: "A",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 2-5)",
        intervals: ["b5", "b7", "1", "b3"],
        notes: ["Eb", "G", "A", "C"],
        frets: [-1, 6, 5, 5, 6, -1],
        fingers: [0, 2, 1, 1, 3, 0],
        barre: { fret: 5, fromString: 2, toString: 3 },
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_m7b5_drop2_inv3_mid: {
        id: "a_m7b5_drop2_inv3_mid",
        name: "A Minor 7b5",
        symbol: "Am7b5",
        altSymbols: ["Aø7", "Aø", "A half-dim"],
        root: "A",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 2-5)",
        intervals: ["b7", "1", "b3", "b5"],
        notes: ["G", "A", "C", "Eb"],
        frets: [-1, 10, 10, 12, 11, -1],
        fingers: [0, 1, 1, 4, 2, 0],
        barre: { fret: 10, fromString: 4, toString: 5 },
        position: 10,
        difficulty: 4,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // B m7b5 Drop 2 - Strings 2-5
    b_m7b5_drop2_root_mid: {
        id: "b_m7b5_drop2_root_mid",
        name: "B Minor 7b5",
        symbol: "Bm7b5",
        altSymbols: ["Bø7", "Bø", "B half-dim"],
        root: "B",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (root position, strings 2-5)",
        intervals: ["1", "b3", "b5", "b7"],
        notes: ["B", "D", "F", "A"],
        frets: [-1, 2, 3, 2, 3, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        barre: null,
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    b_m7b5_drop2_inv1_mid: {
        id: "b_m7b5_drop2_inv1_mid",
        name: "B Minor 7b5",
        symbol: "Bm7b5",
        altSymbols: ["Bø7", "Bø", "B half-dim"],
        root: "B",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (1st inversion, strings 2-5)",
        intervals: ["b3", "b5", "b7", "1"],
        notes: ["D", "F", "A", "B"],
        frets: [-1, 5, 6, 7, 7, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        barre: null,
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    b_m7b5_drop2_inv2_mid: {
        id: "b_m7b5_drop2_inv2_mid",
        name: "B Minor 7b5",
        symbol: "Bm7b5",
        altSymbols: ["Bø7", "Bø", "B half-dim"],
        root: "B",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (2nd inversion, strings 2-5)",
        intervals: ["b5", "b7", "1", "b3"],
        notes: ["F", "A", "B", "D"],
        frets: [-1, 8, 7, 7, 8, -1],
        fingers: [0, 2, 1, 1, 3, 0],
        barre: { fret: 7, fromString: 2, toString: 3 },
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    b_m7b5_drop2_inv3_mid: {
        id: "b_m7b5_drop2_inv3_mid",
        name: "B Minor 7b5",
        symbol: "Bm7b5",
        altSymbols: ["Bø7", "Bø", "B half-dim"],
        root: "B",
        quality: "minor7b5",
        voicingType: "drop2",
        voicingDescription: "Drop 2 voicing (3rd inversion, strings 2-5)",
        intervals: ["b7", "1", "b3", "b5"],
        notes: ["A", "B", "D", "F"],
        frets: [-1, 12, 12, 14, 13, -1],
        fingers: [0, 1, 1, 4, 2, 0],
        barre: { fret: 12, fromString: 4, toString: 5 },
        position: 12,
        difficulty: 4,
        categories: {
            moods: ["dark", "tense", "jazzy"],
            styles: ["jazz", "bossa nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // ====== 7#9 (Hendrix Chord) Voicings ======

    // C7#9 voicings
    c_7sharp9_v1: {
        id: "c_7sharp9_v1",
        name: "C 7#9",
        symbol: "C7#9",
        altSymbols: ["C7(#9)"],
        root: "C",
        quality: "7sharp9",
        voicingType: "hendrix",
        voicingDescription: "7#9 voicing (Hendrix chord shape)",
        intervals: ["1", "3", "b7", "#9"],
        notes: ["C", "E", "Bb", "D#"],
        frets: [-1, 3, 2, 3, 4, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["aggressive", "funky", "bluesy"],
            styles: ["rock", "blues", "funk", "jazz"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_7sharp9_v2: {
        id: "c_7sharp9_v2",
        name: "C 7#9",
        symbol: "C7#9",
        altSymbols: ["C7(#9)"],
        root: "C",
        quality: "7sharp9",
        voicingType: "barre",
        voicingDescription: "7#9 barre voicing",
        intervals: ["1", "3", "b7", "#9", "5"],
        notes: ["C", "E", "Bb", "D#", "G"],
        frets: [8, 7, 8, 8, 8, -1],
        fingers: [2, 1, 3, 3, 3, 0],
        barre: { fret: 8, fromString: 2, toString: 4 },
        position: 7,
        difficulty: 4,
        categories: {
            moods: ["aggressive", "funky", "bluesy"],
            styles: ["rock", "blues", "funk", "jazz"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    c_7sharp9_v3: {
        id: "c_7sharp9_v3",
        name: "C 7#9",
        symbol: "C7#9",
        altSymbols: ["C7(#9)"],
        root: "C",
        quality: "7sharp9",
        voicingType: "rootless",
        voicingDescription: "7#9 rootless voicing",
        intervals: ["3", "b7", "#9"],
        notes: ["E", "Bb", "D#"],
        frets: [-1, -1, 2, 3, 4, -1],
        fingers: [0, 0, 1, 2, 3, 0],
        barre: null,
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["aggressive", "funky", "bluesy"],
            styles: ["rock", "blues", "funk", "jazz"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // C#7#9 voicings
    csharp_7sharp9_v1: {
        id: "csharp_7sharp9_v1",
        name: "C# 7#9",
        symbol: "C#7#9",
        altSymbols: ["Db7#9", "C#7(#9)"],
        root: "C#",
        quality: "7sharp9",
        voicingType: "hendrix",
        voicingDescription: "7#9 voicing (Hendrix chord shape)",
        intervals: ["1", "3", "b7", "#9"],
        notes: ["C#", "E#", "B", "D##"],
        frets: [-1, 4, 3, 4, 5, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["aggressive", "funky", "bluesy"],
            styles: ["rock", "blues", "funk", "jazz"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    csharp_7sharp9_v2: {
        id: "csharp_7sharp9_v2",
        name: "C# 7#9",
        symbol: "C#7#9",
        altSymbols: ["Db7#9", "C#7(#9)"],
        root: "C#",
        quality: "7sharp9",
        voicingType: "barre",
        voicingDescription: "7#9 barre voicing",
        intervals: ["1", "3", "b7", "#9", "5"],
        notes: ["C#", "E#", "B", "D##", "G#"],
        frets: [9, 8, 9, 9, 9, -1],
        fingers: [2, 1, 3, 3, 3, 0],
        barre: { fret: 9, fromString: 2, toString: 4 },
        position: 8,
        difficulty: 4,
        categories: {
            moods: ["aggressive", "funky", "bluesy"],
            styles: ["rock", "blues", "funk", "jazz"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // D7#9 voicings
    d_7sharp9_v1: {
        id: "d_7sharp9_v1",
        name: "D 7#9",
        symbol: "D7#9",
        altSymbols: ["D7(#9)"],
        root: "D",
        quality: "7sharp9",
        voicingType: "hendrix",
        voicingDescription: "7#9 voicing (Hendrix chord shape)",
        intervals: ["1", "3", "b7", "#9"],
        notes: ["D", "F#", "C", "E#"],
        frets: [-1, 5, 4, 5, 6, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["aggressive", "funky", "bluesy"],
            styles: ["rock", "blues", "funk", "jazz"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_7sharp9_v2: {
        id: "d_7sharp9_v2",
        name: "D 7#9",
        symbol: "D7#9",
        altSymbols: ["D7(#9)"],
        root: "D",
        quality: "7sharp9",
        voicingType: "barre",
        voicingDescription: "7#9 barre voicing",
        intervals: ["1", "3", "b7", "#9", "5"],
        notes: ["D", "F#", "C", "E#", "A"],
        frets: [10, 9, 10, 10, 10, -1],
        fingers: [2, 1, 3, 3, 3, 0],
        barre: { fret: 10, fromString: 2, toString: 4 },
        position: 9,
        difficulty: 4,
        categories: {
            moods: ["aggressive", "funky", "bluesy"],
            styles: ["rock", "blues", "funk", "jazz"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    d_7sharp9_v3: {
        id: "d_7sharp9_v3",
        name: "D 7#9",
        symbol: "D7#9",
        altSymbols: ["D7(#9)"],
        root: "D",
        quality: "7sharp9",
        voicingType: "rootless",
        voicingDescription: "7#9 rootless voicing",
        intervals: ["3", "b7", "#9"],
        notes: ["F#", "C", "E#"],
        frets: [-1, -1, 4, 5, 6, -1],
        fingers: [0, 0, 1, 2, 3, 0],
        barre: null,
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["aggressive", "funky", "bluesy"],
            styles: ["rock", "blues", "funk", "jazz"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // E7#9 voicings - THE classic Hendrix "Purple Haze" chord
    e_7sharp9_v1: {
        id: "e_7sharp9_v1",
        name: "E 7#9",
        symbol: "E7#9",
        altSymbols: ["E7(#9)"],
        root: "E",
        quality: "7sharp9",
        voicingType: "hendrix",
        voicingDescription: "7#9 voicing (classic Purple Haze shape)",
        intervals: ["1", "3", "b7", "#9"],
        notes: ["E", "G#", "D", "F##"],
        frets: [0, 7, 6, 7, 8, 0],
        fingers: [0, 3, 2, 4, 4, 0],
        barre: null,
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["aggressive", "funky", "bluesy"],
            styles: ["rock", "blues", "funk", "jazz"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_7sharp9_v2: {
        id: "e_7sharp9_v2",
        name: "E 7#9",
        symbol: "E7#9",
        altSymbols: ["E7(#9)"],
        root: "E",
        quality: "7sharp9",
        voicingType: "hendrix",
        voicingDescription: "7#9 voicing (Hendrix chord shape)",
        intervals: ["1", "3", "b7", "#9"],
        notes: ["E", "G#", "D", "F##"],
        frets: [-1, 7, 6, 7, 8, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["aggressive", "funky", "bluesy"],
            styles: ["rock", "blues", "funk", "jazz"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    e_7sharp9_v3: {
        id: "e_7sharp9_v3",
        name: "E 7#9",
        symbol: "E7#9",
        altSymbols: ["E7(#9)"],
        root: "E",
        quality: "7sharp9",
        voicingType: "barre",
        voicingDescription: "7#9 barre voicing (high position)",
        intervals: ["1", "3", "b7", "#9", "5"],
        notes: ["E", "G#", "D", "F##", "B"],
        frets: [12, 11, 12, 12, 12, -1],
        fingers: [2, 1, 3, 3, 3, 0],
        barre: { fret: 12, fromString: 2, toString: 4 },
        position: 11,
        difficulty: 4,
        categories: {
            moods: ["aggressive", "funky", "bluesy"],
            styles: ["rock", "blues", "funk", "jazz"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // F7#9 voicings
    f_7sharp9_v1: {
        id: "f_7sharp9_v1",
        name: "F 7#9",
        symbol: "F7#9",
        altSymbols: ["F7(#9)"],
        root: "F",
        quality: "7sharp9",
        voicingType: "hendrix",
        voicingDescription: "7#9 voicing (Hendrix chord shape)",
        intervals: ["1", "3", "b7", "#9"],
        notes: ["F", "A", "Eb", "G#"],
        frets: [-1, 8, 7, 8, 9, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["aggressive", "funky", "bluesy"],
            styles: ["rock", "blues", "funk", "jazz"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_7sharp9_v2: {
        id: "f_7sharp9_v2",
        name: "F 7#9",
        symbol: "F7#9",
        altSymbols: ["F7(#9)"],
        root: "F",
        quality: "7sharp9",
        voicingType: "barre",
        voicingDescription: "7#9 barre voicing",
        intervals: ["1", "3", "b7", "#9", "5"],
        notes: ["F", "A", "Eb", "G#", "C"],
        frets: [1, 0, 1, 1, 1, -1],
        fingers: [2, 0, 3, 3, 3, 0],
        barre: { fret: 1, fromString: 2, toString: 4 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["aggressive", "funky", "bluesy"],
            styles: ["rock", "blues", "funk", "jazz"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    f_7sharp9_v3: {
        id: "f_7sharp9_v3",
        name: "F 7#9",
        symbol: "F7#9",
        altSymbols: ["F7(#9)"],
        root: "F",
        quality: "7sharp9",
        voicingType: "rootless",
        voicingDescription: "7#9 rootless voicing",
        intervals: ["3", "b7", "#9"],
        notes: ["A", "Eb", "G#"],
        frets: [-1, -1, 7, 8, 9, -1],
        fingers: [0, 0, 1, 2, 3, 0],
        barre: null,
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["aggressive", "funky", "bluesy"],
            styles: ["rock", "blues", "funk", "jazz"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // F#7#9 voicings
    fsharp_7sharp9_v1: {
        id: "fsharp_7sharp9_v1",
        name: "F# 7#9",
        symbol: "F#7#9",
        altSymbols: ["Gb7#9", "F#7(#9)"],
        root: "F#",
        quality: "7sharp9",
        voicingType: "hendrix",
        voicingDescription: "7#9 voicing (Hendrix chord shape)",
        intervals: ["1", "3", "b7", "#9"],
        notes: ["F#", "A#", "E", "G##"],
        frets: [-1, 9, 8, 9, 10, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 8,
        difficulty: 3,
        categories: {
            moods: ["aggressive", "funky", "bluesy"],
            styles: ["rock", "blues", "funk", "jazz"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    fsharp_7sharp9_v2: {
        id: "fsharp_7sharp9_v2",
        name: "F# 7#9",
        symbol: "F#7#9",
        altSymbols: ["Gb7#9", "F#7(#9)"],
        root: "F#",
        quality: "7sharp9",
        voicingType: "barre",
        voicingDescription: "7#9 barre voicing",
        intervals: ["1", "3", "b7", "#9", "5"],
        notes: ["F#", "A#", "E", "G##", "C#"],
        frets: [2, 1, 2, 2, 2, -1],
        fingers: [2, 1, 3, 3, 3, 0],
        barre: { fret: 2, fromString: 2, toString: 4 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["aggressive", "funky", "bluesy"],
            styles: ["rock", "blues", "funk", "jazz"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // G7#9 voicings
    g_7sharp9_v1: {
        id: "g_7sharp9_v1",
        name: "G 7#9",
        symbol: "G7#9",
        altSymbols: ["G7(#9)"],
        root: "G",
        quality: "7sharp9",
        voicingType: "hendrix",
        voicingDescription: "7#9 voicing (Hendrix chord shape)",
        intervals: ["1", "3", "b7", "#9"],
        notes: ["G", "B", "F", "A#"],
        frets: [-1, 10, 9, 10, 11, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 9,
        difficulty: 3,
        categories: {
            moods: ["aggressive", "funky", "bluesy"],
            styles: ["rock", "blues", "funk", "jazz"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_7sharp9_v2: {
        id: "g_7sharp9_v2",
        name: "G 7#9",
        symbol: "G7#9",
        altSymbols: ["G7(#9)"],
        root: "G",
        quality: "7sharp9",
        voicingType: "barre",
        voicingDescription: "7#9 barre voicing",
        intervals: ["1", "3", "b7", "#9", "5"],
        notes: ["G", "B", "F", "A#", "D"],
        frets: [3, 2, 3, 3, 3, -1],
        fingers: [2, 1, 3, 3, 3, 0],
        barre: { fret: 3, fromString: 2, toString: 4 },
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["aggressive", "funky", "bluesy"],
            styles: ["rock", "blues", "funk", "jazz"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    g_7sharp9_v3: {
        id: "g_7sharp9_v3",
        name: "G 7#9",
        symbol: "G7#9",
        altSymbols: ["G7(#9)"],
        root: "G",
        quality: "7sharp9",
        voicingType: "rootless",
        voicingDescription: "7#9 rootless voicing",
        intervals: ["3", "b7", "#9"],
        notes: ["B", "F", "A#"],
        frets: [-1, -1, 9, 10, 11, -1],
        fingers: [0, 0, 1, 2, 3, 0],
        barre: null,
        position: 9,
        difficulty: 3,
        categories: {
            moods: ["aggressive", "funky", "bluesy"],
            styles: ["rock", "blues", "funk", "jazz"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // A7#9 voicings
    a_7sharp9_v1: {
        id: "a_7sharp9_v1",
        name: "A 7#9",
        symbol: "A7#9",
        altSymbols: ["A7(#9)"],
        root: "A",
        quality: "7sharp9",
        voicingType: "hendrix",
        voicingDescription: "7#9 voicing (Hendrix chord shape)",
        intervals: ["1", "3", "b7", "#9"],
        notes: ["A", "C#", "G", "B#"],
        frets: [-1, 0, 0, 0, 1, -1],
        fingers: [0, 0, 0, 0, 1, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["aggressive", "funky", "bluesy"],
            styles: ["rock", "blues", "funk", "jazz"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    a_7sharp9_v2: {
        id: "a_7sharp9_v2",
        name: "A 7#9",
        symbol: "A7#9",
        altSymbols: ["A7(#9)"],
        root: "A",
        quality: "7sharp9",
        voicingType: "hendrix",
        voicingDescription: "7#9 voicing (Hendrix chord shape)",
        intervals: ["1", "3", "b7", "#9"],
        notes: ["A", "C#", "G", "B#"],
        frets: [-1, 12, 11, 12, 13, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 11,
        difficulty: 3,
        categories: {
            moods: ["aggressive", "funky", "bluesy"],
            styles: ["rock", "blues", "funk", "jazz"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_7sharp9_v3: {
        id: "a_7sharp9_v3",
        name: "A 7#9",
        symbol: "A7#9",
        altSymbols: ["A7(#9)"],
        root: "A",
        quality: "7sharp9",
        voicingType: "barre",
        voicingDescription: "7#9 barre voicing",
        intervals: ["1", "3", "b7", "#9", "5"],
        notes: ["A", "C#", "G", "B#", "E"],
        frets: [5, 4, 5, 5, 5, -1],
        fingers: [2, 1, 3, 3, 3, 0],
        barre: { fret: 5, fromString: 2, toString: 4 },
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["aggressive", "funky", "bluesy"],
            styles: ["rock", "blues", "funk", "jazz"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // Bb7#9 voicings
    bb_7sharp9_v1: {
        id: "bb_7sharp9_v1",
        name: "Bb 7#9",
        symbol: "Bb7#9",
        altSymbols: ["A#7#9", "Bb7(#9)"],
        root: "Bb",
        quality: "7sharp9",
        voicingType: "hendrix",
        voicingDescription: "7#9 voicing (Hendrix chord shape)",
        intervals: ["1", "3", "b7", "#9"],
        notes: ["Bb", "D", "Ab", "C#"],
        frets: [-1, 1, 0, 1, 2, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["aggressive", "funky", "bluesy"],
            styles: ["rock", "blues", "funk", "jazz"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    bb_7sharp9_v2: {
        id: "bb_7sharp9_v2",
        name: "Bb 7#9",
        symbol: "Bb7#9",
        altSymbols: ["A#7#9", "Bb7(#9)"],
        root: "Bb",
        quality: "7sharp9",
        voicingType: "barre",
        voicingDescription: "7#9 barre voicing",
        intervals: ["1", "3", "b7", "#9", "5"],
        notes: ["Bb", "D", "Ab", "C#", "F"],
        frets: [6, 5, 6, 6, 6, -1],
        fingers: [2, 1, 3, 3, 3, 0],
        barre: { fret: 6, fromString: 2, toString: 4 },
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["aggressive", "funky", "bluesy"],
            styles: ["rock", "blues", "funk", "jazz"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // B7#9 voicings
    b_7sharp9_v1: {
        id: "b_7sharp9_v1",
        name: "B 7#9",
        symbol: "B7#9",
        altSymbols: ["B7(#9)"],
        root: "B",
        quality: "7sharp9",
        voicingType: "hendrix",
        voicingDescription: "7#9 voicing (Hendrix chord shape)",
        intervals: ["1", "3", "b7", "#9"],
        notes: ["B", "D#", "A", "C##"],
        frets: [-1, 2, 1, 2, 3, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["aggressive", "funky", "bluesy"],
            styles: ["rock", "blues", "funk", "jazz"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    b_7sharp9_v2: {
        id: "b_7sharp9_v2",
        name: "B 7#9",
        symbol: "B7#9",
        altSymbols: ["B7(#9)"],
        root: "B",
        quality: "7sharp9",
        voicingType: "barre",
        voicingDescription: "7#9 barre voicing",
        intervals: ["1", "3", "b7", "#9", "5"],
        notes: ["B", "D#", "A", "C##", "F#"],
        frets: [7, 6, 7, 7, 7, -1],
        fingers: [2, 1, 3, 3, 3, 0],
        barre: { fret: 7, fromString: 2, toString: 4 },
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["aggressive", "funky", "bluesy"],
            styles: ["rock", "blues", "funk", "jazz"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    b_7sharp9_v3: {
        id: "b_7sharp9_v3",
        name: "B 7#9",
        symbol: "B7#9",
        altSymbols: ["B7(#9)"],
        root: "B",
        quality: "7sharp9",
        voicingType: "rootless",
        voicingDescription: "7#9 rootless voicing",
        intervals: ["3", "b7", "#9"],
        notes: ["D#", "A", "C##"],
        frets: [-1, -1, 1, 2, 3, -1],
        fingers: [0, 0, 1, 2, 3, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["aggressive", "funky", "bluesy"],
            styles: ["rock", "blues", "funk", "jazz"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // ====== 7b9 Voicings ======

    // C7b9 voicings
    c_7flat9_v1: {
        id: "c_7flat9_v1",
        name: "C 7b9",
        symbol: "C7b9",
        altSymbols: ["C7(b9)"],
        root: "C",
        quality: "7flat9",
        voicingType: "standard",
        voicingDescription: "7b9 voicing",
        intervals: ["1", "3", "b7", "b9"],
        notes: ["C", "E", "Bb", "Db"],
        frets: [-1, 3, 2, 3, 2, -1],
        fingers: [0, 2, 1, 3, 1, 0],
        barre: { fret: 2, fromString: 2, toString: 4 },
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "dramatic"],
            styles: ["jazz", "blues", "latin"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_7flat9_v2: {
        id: "c_7flat9_v2",
        name: "C 7b9",
        symbol: "C7b9",
        altSymbols: ["C7(b9)"],
        root: "C",
        quality: "7flat9",
        voicingType: "barre",
        voicingDescription: "7b9 barre voicing",
        intervals: ["1", "3", "b7", "b9", "5"],
        notes: ["C", "E", "Bb", "Db", "G"],
        frets: [8, 7, 8, 7, 8, -1],
        fingers: [2, 1, 3, 1, 4, 0],
        barre: { fret: 7, fromString: 3, toString: 5 },
        position: 7,
        difficulty: 4,
        categories: {
            moods: ["dark", "tense", "dramatic"],
            styles: ["jazz", "blues", "latin"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    c_7flat9_v3: {
        id: "c_7flat9_v3",
        name: "C 7b9",
        symbol: "C7b9",
        altSymbols: ["C7(b9)"],
        root: "C",
        quality: "7flat9",
        voicingType: "rootless",
        voicingDescription: "7b9 rootless voicing",
        intervals: ["3", "b7", "b9"],
        notes: ["E", "Bb", "Db"],
        frets: [-1, -1, 2, 3, 2, -1],
        fingers: [0, 0, 1, 2, 1, 0],
        barre: { fret: 2, fromString: 2, toString: 4 },
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "dramatic"],
            styles: ["jazz", "blues", "latin"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // C#7b9 voicings
    csharp_7flat9_v1: {
        id: "csharp_7flat9_v1",
        name: "C# 7b9",
        symbol: "C#7b9",
        altSymbols: ["Db7b9", "C#7(b9)"],
        root: "C#",
        quality: "7flat9",
        voicingType: "standard",
        voicingDescription: "7b9 voicing",
        intervals: ["1", "3", "b7", "b9"],
        notes: ["C#", "E#", "B", "D"],
        frets: [-1, 4, 3, 4, 3, -1],
        fingers: [0, 2, 1, 3, 1, 0],
        barre: { fret: 3, fromString: 2, toString: 4 },
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "dramatic"],
            styles: ["jazz", "blues", "latin"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    csharp_7flat9_v2: {
        id: "csharp_7flat9_v2",
        name: "C# 7b9",
        symbol: "C#7b9",
        altSymbols: ["Db7b9", "C#7(b9)"],
        root: "C#",
        quality: "7flat9",
        voicingType: "barre",
        voicingDescription: "7b9 barre voicing",
        intervals: ["1", "3", "b7", "b9", "5"],
        notes: ["C#", "E#", "B", "D", "G#"],
        frets: [9, 8, 9, 8, 9, -1],
        fingers: [2, 1, 3, 1, 4, 0],
        barre: { fret: 8, fromString: 3, toString: 5 },
        position: 8,
        difficulty: 4,
        categories: {
            moods: ["dark", "tense", "dramatic"],
            styles: ["jazz", "blues", "latin"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // D7b9 voicings
    d_7flat9_v1: {
        id: "d_7flat9_v1",
        name: "D 7b9",
        symbol: "D7b9",
        altSymbols: ["D7(b9)"],
        root: "D",
        quality: "7flat9",
        voicingType: "standard",
        voicingDescription: "7b9 voicing",
        intervals: ["1", "3", "b7", "b9"],
        notes: ["D", "F#", "C", "Eb"],
        frets: [-1, 5, 4, 5, 4, -1],
        fingers: [0, 2, 1, 3, 1, 0],
        barre: { fret: 4, fromString: 2, toString: 4 },
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "dramatic"],
            styles: ["jazz", "blues", "latin"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_7flat9_v2: {
        id: "d_7flat9_v2",
        name: "D 7b9",
        symbol: "D7b9",
        altSymbols: ["D7(b9)"],
        root: "D",
        quality: "7flat9",
        voicingType: "barre",
        voicingDescription: "7b9 barre voicing",
        intervals: ["1", "3", "b7", "b9", "5"],
        notes: ["D", "F#", "C", "Eb", "A"],
        frets: [10, 9, 10, 9, 10, -1],
        fingers: [2, 1, 3, 1, 4, 0],
        barre: { fret: 9, fromString: 3, toString: 5 },
        position: 9,
        difficulty: 4,
        categories: {
            moods: ["dark", "tense", "dramatic"],
            styles: ["jazz", "blues", "latin"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    d_7flat9_v3: {
        id: "d_7flat9_v3",
        name: "D 7b9",
        symbol: "D7b9",
        altSymbols: ["D7(b9)"],
        root: "D",
        quality: "7flat9",
        voicingType: "rootless",
        voicingDescription: "7b9 rootless voicing",
        intervals: ["3", "b7", "b9"],
        notes: ["F#", "C", "Eb"],
        frets: [-1, -1, 4, 5, 4, -1],
        fingers: [0, 0, 1, 2, 1, 0],
        barre: { fret: 4, fromString: 2, toString: 4 },
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "dramatic"],
            styles: ["jazz", "blues", "latin"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // E7b9 voicings
    e_7flat9_v1: {
        id: "e_7flat9_v1",
        name: "E 7b9",
        symbol: "E7b9",
        altSymbols: ["E7(b9)"],
        root: "E",
        quality: "7flat9",
        voicingType: "standard",
        voicingDescription: "7b9 voicing",
        intervals: ["1", "3", "b7", "b9"],
        notes: ["E", "G#", "D", "F"],
        frets: [0, 2, 0, 1, 0, -1],
        fingers: [0, 2, 0, 1, 0, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["dark", "tense", "dramatic"],
            styles: ["jazz", "blues", "latin"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_7flat9_v2: {
        id: "e_7flat9_v2",
        name: "E 7b9",
        symbol: "E7b9",
        altSymbols: ["E7(b9)"],
        root: "E",
        quality: "7flat9",
        voicingType: "standard",
        voicingDescription: "7b9 voicing",
        intervals: ["1", "3", "b7", "b9"],
        notes: ["E", "G#", "D", "F"],
        frets: [-1, 7, 6, 7, 6, -1],
        fingers: [0, 2, 1, 3, 1, 0],
        barre: { fret: 6, fromString: 2, toString: 4 },
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "dramatic"],
            styles: ["jazz", "blues", "latin"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    e_7flat9_v3: {
        id: "e_7flat9_v3",
        name: "E 7b9",
        symbol: "E7b9",
        altSymbols: ["E7(b9)"],
        root: "E",
        quality: "7flat9",
        voicingType: "barre",
        voicingDescription: "7b9 barre voicing (high position)",
        intervals: ["1", "3", "b7", "b9", "5"],
        notes: ["E", "G#", "D", "F", "B"],
        frets: [12, 11, 12, 11, 12, -1],
        fingers: [2, 1, 3, 1, 4, 0],
        barre: { fret: 11, fromString: 3, toString: 5 },
        position: 11,
        difficulty: 4,
        categories: {
            moods: ["dark", "tense", "dramatic"],
            styles: ["jazz", "blues", "latin"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // F7b9 voicings
    f_7flat9_v1: {
        id: "f_7flat9_v1",
        name: "F 7b9",
        symbol: "F7b9",
        altSymbols: ["F7(b9)"],
        root: "F",
        quality: "7flat9",
        voicingType: "standard",
        voicingDescription: "7b9 voicing",
        intervals: ["1", "3", "b7", "b9"],
        notes: ["F", "A", "Eb", "Gb"],
        frets: [-1, 8, 7, 8, 7, -1],
        fingers: [0, 2, 1, 3, 1, 0],
        barre: { fret: 7, fromString: 2, toString: 4 },
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "dramatic"],
            styles: ["jazz", "blues", "latin"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_7flat9_v2: {
        id: "f_7flat9_v2",
        name: "F 7b9",
        symbol: "F7b9",
        altSymbols: ["F7(b9)"],
        root: "F",
        quality: "7flat9",
        voicingType: "barre",
        voicingDescription: "7b9 barre voicing",
        intervals: ["1", "3", "b7", "b9", "5"],
        notes: ["F", "A", "Eb", "Gb", "C"],
        frets: [1, 0, 1, 0, 1, -1],
        fingers: [2, 0, 3, 0, 4, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "dramatic"],
            styles: ["jazz", "blues", "latin"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_7flat9_v3: {
        id: "f_7flat9_v3",
        name: "F 7b9",
        symbol: "F7b9",
        altSymbols: ["F7(b9)"],
        root: "F",
        quality: "7flat9",
        voicingType: "rootless",
        voicingDescription: "7b9 rootless voicing",
        intervals: ["3", "b7", "b9"],
        notes: ["A", "Eb", "Gb"],
        frets: [-1, -1, 7, 8, 7, -1],
        fingers: [0, 0, 1, 2, 1, 0],
        barre: { fret: 7, fromString: 2, toString: 4 },
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "dramatic"],
            styles: ["jazz", "blues", "latin"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // F#7b9 voicings
    fsharp_7flat9_v1: {
        id: "fsharp_7flat9_v1",
        name: "F# 7b9",
        symbol: "F#7b9",
        altSymbols: ["Gb7b9", "F#7(b9)"],
        root: "F#",
        quality: "7flat9",
        voicingType: "standard",
        voicingDescription: "7b9 voicing",
        intervals: ["1", "3", "b7", "b9"],
        notes: ["F#", "A#", "E", "G"],
        frets: [-1, 9, 8, 9, 8, -1],
        fingers: [0, 2, 1, 3, 1, 0],
        barre: { fret: 8, fromString: 2, toString: 4 },
        position: 8,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "dramatic"],
            styles: ["jazz", "blues", "latin"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    fsharp_7flat9_v2: {
        id: "fsharp_7flat9_v2",
        name: "F# 7b9",
        symbol: "F#7b9",
        altSymbols: ["Gb7b9", "F#7(b9)"],
        root: "F#",
        quality: "7flat9",
        voicingType: "barre",
        voicingDescription: "7b9 barre voicing",
        intervals: ["1", "3", "b7", "b9", "5"],
        notes: ["F#", "A#", "E", "G", "C#"],
        frets: [2, 1, 2, 1, 2, -1],
        fingers: [2, 1, 3, 1, 4, 0],
        barre: { fret: 1, fromString: 3, toString: 5 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "dramatic"],
            styles: ["jazz", "blues", "latin"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // G7b9 voicings
    g_7flat9_v1: {
        id: "g_7flat9_v1",
        name: "G 7b9",
        symbol: "G7b9",
        altSymbols: ["G7(b9)"],
        root: "G",
        quality: "7flat9",
        voicingType: "standard",
        voicingDescription: "7b9 voicing",
        intervals: ["1", "3", "b7", "b9"],
        notes: ["G", "B", "F", "Ab"],
        frets: [-1, 10, 9, 10, 9, -1],
        fingers: [0, 2, 1, 3, 1, 0],
        barre: { fret: 9, fromString: 2, toString: 4 },
        position: 9,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "dramatic"],
            styles: ["jazz", "blues", "latin"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_7flat9_v2: {
        id: "g_7flat9_v2",
        name: "G 7b9",
        symbol: "G7b9",
        altSymbols: ["G7(b9)"],
        root: "G",
        quality: "7flat9",
        voicingType: "barre",
        voicingDescription: "7b9 barre voicing",
        intervals: ["1", "3", "b7", "b9", "5"],
        notes: ["G", "B", "F", "Ab", "D"],
        frets: [3, 2, 3, 2, 3, -1],
        fingers: [2, 1, 3, 1, 4, 0],
        barre: { fret: 2, fromString: 3, toString: 5 },
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "dramatic"],
            styles: ["jazz", "blues", "latin"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    g_7flat9_v3: {
        id: "g_7flat9_v3",
        name: "G 7b9",
        symbol: "G7b9",
        altSymbols: ["G7(b9)"],
        root: "G",
        quality: "7flat9",
        voicingType: "rootless",
        voicingDescription: "7b9 rootless voicing",
        intervals: ["3", "b7", "b9"],
        notes: ["B", "F", "Ab"],
        frets: [-1, -1, 9, 10, 9, -1],
        fingers: [0, 0, 1, 2, 1, 0],
        barre: { fret: 9, fromString: 2, toString: 4 },
        position: 9,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "dramatic"],
            styles: ["jazz", "blues", "latin"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // A7b9 voicings
    a_7flat9_v1: {
        id: "a_7flat9_v1",
        name: "A 7b9",
        symbol: "A7b9",
        altSymbols: ["A7(b9)"],
        root: "A",
        quality: "7flat9",
        voicingType: "standard",
        voicingDescription: "7b9 voicing",
        intervals: ["1", "3", "b7", "b9"],
        notes: ["A", "C#", "G", "Bb"],
        frets: [-1, 0, 2, 0, 2, -1],
        fingers: [0, 0, 1, 0, 2, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["dark", "tense", "dramatic"],
            styles: ["jazz", "blues", "latin"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    a_7flat9_v2: {
        id: "a_7flat9_v2",
        name: "A 7b9",
        symbol: "A7b9",
        altSymbols: ["A7(b9)"],
        root: "A",
        quality: "7flat9",
        voicingType: "standard",
        voicingDescription: "7b9 voicing",
        intervals: ["1", "3", "b7", "b9"],
        notes: ["A", "C#", "G", "Bb"],
        frets: [-1, 12, 11, 12, 11, -1],
        fingers: [0, 2, 1, 3, 1, 0],
        barre: { fret: 11, fromString: 2, toString: 4 },
        position: 11,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "dramatic"],
            styles: ["jazz", "blues", "latin"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_7flat9_v3: {
        id: "a_7flat9_v3",
        name: "A 7b9",
        symbol: "A7b9",
        altSymbols: ["A7(b9)"],
        root: "A",
        quality: "7flat9",
        voicingType: "barre",
        voicingDescription: "7b9 barre voicing",
        intervals: ["1", "3", "b7", "b9", "5"],
        notes: ["A", "C#", "G", "Bb", "E"],
        frets: [5, 4, 5, 4, 5, -1],
        fingers: [2, 1, 3, 1, 4, 0],
        barre: { fret: 4, fromString: 3, toString: 5 },
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "dramatic"],
            styles: ["jazz", "blues", "latin"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // Bb7b9 voicings
    bb_7flat9_v1: {
        id: "bb_7flat9_v1",
        name: "Bb 7b9",
        symbol: "Bb7b9",
        altSymbols: ["A#7b9", "Bb7(b9)"],
        root: "Bb",
        quality: "7flat9",
        voicingType: "standard",
        voicingDescription: "7b9 voicing",
        intervals: ["1", "3", "b7", "b9"],
        notes: ["Bb", "D", "Ab", "Cb"],
        frets: [-1, 1, 0, 1, 0, -1],
        fingers: [0, 2, 0, 3, 0, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "dramatic"],
            styles: ["jazz", "blues", "latin"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    bb_7flat9_v2: {
        id: "bb_7flat9_v2",
        name: "Bb 7b9",
        symbol: "Bb7b9",
        altSymbols: ["A#7b9", "Bb7(b9)"],
        root: "Bb",
        quality: "7flat9",
        voicingType: "barre",
        voicingDescription: "7b9 barre voicing",
        intervals: ["1", "3", "b7", "b9", "5"],
        notes: ["Bb", "D", "Ab", "Cb", "F"],
        frets: [6, 5, 6, 5, 6, -1],
        fingers: [2, 1, 3, 1, 4, 0],
        barre: { fret: 5, fromString: 3, toString: 5 },
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "dramatic"],
            styles: ["jazz", "blues", "latin"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // B7b9 voicings
    b_7flat9_v1: {
        id: "b_7flat9_v1",
        name: "B 7b9",
        symbol: "B7b9",
        altSymbols: ["B7(b9)"],
        root: "B",
        quality: "7flat9",
        voicingType: "standard",
        voicingDescription: "7b9 voicing",
        intervals: ["1", "3", "b7", "b9"],
        notes: ["B", "D#", "A", "C"],
        frets: [-1, 2, 1, 2, 1, -1],
        fingers: [0, 2, 1, 3, 1, 0],
        barre: { fret: 1, fromString: 2, toString: 4 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "dramatic"],
            styles: ["jazz", "blues", "latin"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    b_7flat9_v2: {
        id: "b_7flat9_v2",
        name: "B 7b9",
        symbol: "B7b9",
        altSymbols: ["B7(b9)"],
        root: "B",
        quality: "7flat9",
        voicingType: "barre",
        voicingDescription: "7b9 barre voicing",
        intervals: ["1", "3", "b7", "b9", "5"],
        notes: ["B", "D#", "A", "C", "F#"],
        frets: [7, 6, 7, 6, 7, -1],
        fingers: [2, 1, 3, 1, 4, 0],
        barre: { fret: 6, fromString: 3, toString: 5 },
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "dramatic"],
            styles: ["jazz", "blues", "latin"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    b_7flat9_v3: {
        id: "b_7flat9_v3",
        name: "B 7b9",
        symbol: "B7b9",
        altSymbols: ["B7(b9)"],
        root: "B",
        quality: "7flat9",
        voicingType: "rootless",
        voicingDescription: "7b9 rootless voicing",
        intervals: ["3", "b7", "b9"],
        notes: ["D#", "A", "C"],
        frets: [-1, -1, 1, 2, 1, -1],
        fingers: [0, 0, 1, 2, 1, 0],
        barre: { fret: 1, fromString: 2, toString: 4 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "dramatic"],
            styles: ["jazz", "blues", "latin"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // ====== 7#5 (Augmented Dominant) Voicings ======

    // C7#5 voicings
    c_7sharp5_v1: {
        id: "c_7sharp5_v1",
        name: "C 7#5",
        symbol: "C7#5",
        altSymbols: ["C7(#5)", "C7aug", "C+7"],
        root: "C",
        quality: "7sharp5",
        voicingType: "standard",
        voicingDescription: "7#5 voicing",
        intervals: ["1", "3", "#5", "b7"],
        notes: ["C", "E", "G#", "Bb"],
        frets: [-1, 3, 2, 3, 3, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["tense", "dreamy", "unstable"],
            styles: ["jazz", "blues", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_7sharp5_v2: {
        id: "c_7sharp5_v2",
        name: "C 7#5",
        symbol: "C7#5",
        altSymbols: ["C7(#5)", "C7aug", "C+7"],
        root: "C",
        quality: "7sharp5",
        voicingType: "barre",
        voicingDescription: "7#5 barre voicing",
        intervals: ["1", "3", "#5", "b7"],
        notes: ["C", "E", "G#", "Bb"],
        frets: [8, 7, 8, 9, -1, -1],
        fingers: [2, 1, 3, 4, 0, 0],
        barre: null,
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["tense", "dreamy", "unstable"],
            styles: ["jazz", "blues", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_7sharp5_v3: {
        id: "c_7sharp5_v3",
        name: "C 7#5",
        symbol: "C7#5",
        altSymbols: ["C7(#5)", "C7aug", "C+7"],
        root: "C",
        quality: "7sharp5",
        voicingType: "rootless",
        voicingDescription: "7#5 rootless voicing",
        intervals: ["3", "#5", "b7"],
        notes: ["E", "G#", "Bb"],
        frets: [-1, -1, 2, 3, 3, -1],
        fingers: [0, 0, 1, 2, 3, 0],
        barre: null,
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["tense", "dreamy", "unstable"],
            styles: ["jazz", "blues", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // D7#5 voicings
    d_7sharp5_v1: {
        id: "d_7sharp5_v1",
        name: "D 7#5",
        symbol: "D7#5",
        altSymbols: ["D7(#5)", "D7aug", "D+7"],
        root: "D",
        quality: "7sharp5",
        voicingType: "standard",
        voicingDescription: "7#5 voicing",
        intervals: ["1", "3", "#5", "b7"],
        notes: ["D", "F#", "A#", "C"],
        frets: [-1, 5, 4, 5, 5, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["tense", "dreamy", "unstable"],
            styles: ["jazz", "blues", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_7sharp5_v2: {
        id: "d_7sharp5_v2",
        name: "D 7#5",
        symbol: "D7#5",
        altSymbols: ["D7(#5)", "D7aug", "D+7"],
        root: "D",
        quality: "7sharp5",
        voicingType: "barre",
        voicingDescription: "7#5 barre voicing",
        intervals: ["1", "3", "#5", "b7"],
        notes: ["D", "F#", "A#", "C"],
        frets: [10, 9, 10, 11, -1, -1],
        fingers: [2, 1, 3, 4, 0, 0],
        barre: null,
        position: 9,
        difficulty: 3,
        categories: {
            moods: ["tense", "dreamy", "unstable"],
            styles: ["jazz", "blues", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // E7#5 voicings
    e_7sharp5_v1: {
        id: "e_7sharp5_v1",
        name: "E 7#5",
        symbol: "E7#5",
        altSymbols: ["E7(#5)", "E7aug", "E+7"],
        root: "E",
        quality: "7sharp5",
        voicingType: "standard",
        voicingDescription: "7#5 voicing",
        intervals: ["1", "3", "#5", "b7"],
        notes: ["E", "G#", "B#", "D"],
        frets: [0, 3, 0, 1, 1, 0],
        fingers: [0, 4, 0, 1, 2, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["tense", "dreamy", "unstable"],
            styles: ["jazz", "blues", "fusion"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_7sharp5_v2: {
        id: "e_7sharp5_v2",
        name: "E 7#5",
        symbol: "E7#5",
        altSymbols: ["E7(#5)", "E7aug", "E+7"],
        root: "E",
        quality: "7sharp5",
        voicingType: "standard",
        voicingDescription: "7#5 voicing",
        intervals: ["1", "3", "#5", "b7"],
        notes: ["E", "G#", "B#", "D"],
        frets: [-1, 7, 6, 7, 7, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["tense", "dreamy", "unstable"],
            styles: ["jazz", "blues", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    e_7sharp5_v3: {
        id: "e_7sharp5_v3",
        name: "E 7#5",
        symbol: "E7#5",
        altSymbols: ["E7(#5)", "E7aug", "E+7"],
        root: "E",
        quality: "7sharp5",
        voicingType: "barre",
        voicingDescription: "7#5 barre voicing",
        intervals: ["1", "3", "#5", "b7"],
        notes: ["E", "G#", "B#", "D"],
        frets: [12, 11, 12, 13, -1, -1],
        fingers: [2, 1, 3, 4, 0, 0],
        barre: null,
        position: 11,
        difficulty: 4,
        categories: {
            moods: ["tense", "dreamy", "unstable"],
            styles: ["jazz", "blues", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // F7#5 voicings
    f_7sharp5_v1: {
        id: "f_7sharp5_v1",
        name: "F 7#5",
        symbol: "F7#5",
        altSymbols: ["F7(#5)", "F7aug", "F+7"],
        root: "F",
        quality: "7sharp5",
        voicingType: "standard",
        voicingDescription: "7#5 voicing",
        intervals: ["1", "3", "#5", "b7"],
        notes: ["F", "A", "C#", "Eb"],
        frets: [1, 0, 1, 2, 2, -1],
        fingers: [1, 0, 2, 3, 4, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["tense", "dreamy", "unstable"],
            styles: ["jazz", "blues", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_7sharp5_v2: {
        id: "f_7sharp5_v2",
        name: "F 7#5",
        symbol: "F7#5",
        altSymbols: ["F7(#5)", "F7aug", "F+7"],
        root: "F",
        quality: "7sharp5",
        voicingType: "standard",
        voicingDescription: "7#5 voicing",
        intervals: ["1", "3", "#5", "b7"],
        notes: ["F", "A", "C#", "Eb"],
        frets: [-1, 8, 7, 8, 8, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["tense", "dreamy", "unstable"],
            styles: ["jazz", "blues", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // G7#5 voicings
    g_7sharp5_v1: {
        id: "g_7sharp5_v1",
        name: "G 7#5",
        symbol: "G7#5",
        altSymbols: ["G7(#5)", "G7aug", "G+7"],
        root: "G",
        quality: "7sharp5",
        voicingType: "standard",
        voicingDescription: "7#5 voicing",
        intervals: ["1", "3", "#5", "b7"],
        notes: ["G", "B", "D#", "F"],
        frets: [3, 2, 3, 4, 4, -1],
        fingers: [2, 1, 3, 4, 4, 0],
        barre: null,
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["tense", "dreamy", "unstable"],
            styles: ["jazz", "blues", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_7sharp5_v2: {
        id: "g_7sharp5_v2",
        name: "G 7#5",
        symbol: "G7#5",
        altSymbols: ["G7(#5)", "G7aug", "G+7"],
        root: "G",
        quality: "7sharp5",
        voicingType: "standard",
        voicingDescription: "7#5 voicing",
        intervals: ["1", "3", "#5", "b7"],
        notes: ["G", "B", "D#", "F"],
        frets: [-1, 10, 9, 10, 10, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 9,
        difficulty: 3,
        categories: {
            moods: ["tense", "dreamy", "unstable"],
            styles: ["jazz", "blues", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_7sharp5_v3: {
        id: "g_7sharp5_v3",
        name: "G 7#5",
        symbol: "G7#5",
        altSymbols: ["G7(#5)", "G7aug", "G+7"],
        root: "G",
        quality: "7sharp5",
        voicingType: "rootless",
        voicingDescription: "7#5 rootless voicing",
        intervals: ["3", "#5", "b7"],
        notes: ["B", "D#", "F"],
        frets: [-1, -1, 9, 10, 10, -1],
        fingers: [0, 0, 1, 2, 3, 0],
        barre: null,
        position: 9,
        difficulty: 3,
        categories: {
            moods: ["tense", "dreamy", "unstable"],
            styles: ["jazz", "blues", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // A7#5 voicings
    a_7sharp5_v1: {
        id: "a_7sharp5_v1",
        name: "A 7#5",
        symbol: "A7#5",
        altSymbols: ["A7(#5)", "A7aug", "A+7"],
        root: "A",
        quality: "7sharp5",
        voicingType: "standard",
        voicingDescription: "7#5 voicing",
        intervals: ["1", "3", "#5", "b7"],
        notes: ["A", "C#", "E#", "G"],
        frets: [-1, 0, 3, 0, 2, 1],
        fingers: [0, 0, 4, 0, 3, 1],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["tense", "dreamy", "unstable"],
            styles: ["jazz", "blues", "fusion"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    a_7sharp5_v2: {
        id: "a_7sharp5_v2",
        name: "A 7#5",
        symbol: "A7#5",
        altSymbols: ["A7(#5)", "A7aug", "A+7"],
        root: "A",
        quality: "7sharp5",
        voicingType: "standard",
        voicingDescription: "7#5 voicing",
        intervals: ["1", "3", "#5", "b7"],
        notes: ["A", "C#", "E#", "G"],
        frets: [-1, 12, 11, 12, 12, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 11,
        difficulty: 3,
        categories: {
            moods: ["tense", "dreamy", "unstable"],
            styles: ["jazz", "blues", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_7sharp5_v3: {
        id: "a_7sharp5_v3",
        name: "A 7#5",
        symbol: "A7#5",
        altSymbols: ["A7(#5)", "A7aug", "A+7"],
        root: "A",
        quality: "7sharp5",
        voicingType: "barre",
        voicingDescription: "7#5 barre voicing",
        intervals: ["1", "3", "#5", "b7"],
        notes: ["A", "C#", "E#", "G"],
        frets: [5, 4, 5, 6, -1, -1],
        fingers: [2, 1, 3, 4, 0, 0],
        barre: null,
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["tense", "dreamy", "unstable"],
            styles: ["jazz", "blues", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // Bb7#5 voicings
    bb_7sharp5_v1: {
        id: "bb_7sharp5_v1",
        name: "Bb 7#5",
        symbol: "Bb7#5",
        altSymbols: ["A#7#5", "Bb7(#5)", "Bb+7"],
        root: "Bb",
        quality: "7sharp5",
        voicingType: "standard",
        voicingDescription: "7#5 voicing",
        intervals: ["1", "3", "#5", "b7"],
        notes: ["Bb", "D", "F#", "Ab"],
        frets: [-1, 1, 0, 1, 1, -1],
        fingers: [0, 2, 0, 3, 4, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["tense", "dreamy", "unstable"],
            styles: ["jazz", "blues", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    bb_7sharp5_v2: {
        id: "bb_7sharp5_v2",
        name: "Bb 7#5",
        symbol: "Bb7#5",
        altSymbols: ["A#7#5", "Bb7(#5)", "Bb+7"],
        root: "Bb",
        quality: "7sharp5",
        voicingType: "barre",
        voicingDescription: "7#5 barre voicing",
        intervals: ["1", "3", "#5", "b7"],
        notes: ["Bb", "D", "F#", "Ab"],
        frets: [6, 5, 6, 7, -1, -1],
        fingers: [2, 1, 3, 4, 0, 0],
        barre: null,
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["tense", "dreamy", "unstable"],
            styles: ["jazz", "blues", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // ====== 7b5 Voicings ======

    // C7b5 voicings
    c_7flat5_v1: {
        id: "c_7flat5_v1",
        name: "C 7b5",
        symbol: "C7b5",
        altSymbols: ["C7(b5)"],
        root: "C",
        quality: "7flat5",
        voicingType: "standard",
        voicingDescription: "7b5 voicing",
        intervals: ["1", "3", "b5", "b7"],
        notes: ["C", "E", "Gb", "Bb"],
        frets: [-1, 3, 2, 3, 2, -1],
        fingers: [0, 2, 1, 3, 1, 0],
        barre: { fret: 2, fromString: 2, toString: 4 },
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["tense", "dark", "unstable"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_7flat5_v2: {
        id: "c_7flat5_v2",
        name: "C 7b5",
        symbol: "C7b5",
        altSymbols: ["C7(b5)"],
        root: "C",
        quality: "7flat5",
        voicingType: "barre",
        voicingDescription: "7b5 barre voicing",
        intervals: ["1", "3", "b5", "b7"],
        notes: ["C", "E", "Gb", "Bb"],
        frets: [8, 7, 8, 8, 7, -1],
        fingers: [2, 1, 3, 4, 1, 0],
        barre: { fret: 7, fromString: 3, toString: 5 },
        position: 7,
        difficulty: 4,
        categories: {
            moods: ["tense", "dark", "unstable"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    c_7flat5_v3: {
        id: "c_7flat5_v3",
        name: "C 7b5",
        symbol: "C7b5",
        altSymbols: ["C7(b5)"],
        root: "C",
        quality: "7flat5",
        voicingType: "rootless",
        voicingDescription: "7b5 rootless voicing",
        intervals: ["3", "b5", "b7"],
        notes: ["E", "Gb", "Bb"],
        frets: [-1, -1, 2, 3, 2, -1],
        fingers: [0, 0, 1, 2, 1, 0],
        barre: { fret: 2, fromString: 2, toString: 4 },
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["tense", "dark", "unstable"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // D7b5 voicings
    d_7flat5_v1: {
        id: "d_7flat5_v1",
        name: "D 7b5",
        symbol: "D7b5",
        altSymbols: ["D7(b5)"],
        root: "D",
        quality: "7flat5",
        voicingType: "standard",
        voicingDescription: "7b5 voicing",
        intervals: ["1", "3", "b5", "b7"],
        notes: ["D", "F#", "Ab", "C"],
        frets: [-1, 5, 4, 5, 4, -1],
        fingers: [0, 2, 1, 3, 1, 0],
        barre: { fret: 4, fromString: 2, toString: 4 },
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["tense", "dark", "unstable"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_7flat5_v2: {
        id: "d_7flat5_v2",
        name: "D 7b5",
        symbol: "D7b5",
        altSymbols: ["D7(b5)"],
        root: "D",
        quality: "7flat5",
        voicingType: "barre",
        voicingDescription: "7b5 barre voicing",
        intervals: ["1", "3", "b5", "b7"],
        notes: ["D", "F#", "Ab", "C"],
        frets: [10, 9, 10, 10, 9, -1],
        fingers: [2, 1, 3, 4, 1, 0],
        barre: { fret: 9, fromString: 3, toString: 5 },
        position: 9,
        difficulty: 4,
        categories: {
            moods: ["tense", "dark", "unstable"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // E7b5 voicings
    e_7flat5_v1: {
        id: "e_7flat5_v1",
        name: "E 7b5",
        symbol: "E7b5",
        altSymbols: ["E7(b5)"],
        root: "E",
        quality: "7flat5",
        voicingType: "standard",
        voicingDescription: "7b5 voicing",
        intervals: ["1", "3", "b5", "b7"],
        notes: ["E", "G#", "Bb", "D"],
        frets: [0, 1, 0, 1, 0, -1],
        fingers: [0, 1, 0, 2, 0, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["tense", "dark", "unstable"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_7flat5_v2: {
        id: "e_7flat5_v2",
        name: "E 7b5",
        symbol: "E7b5",
        altSymbols: ["E7(b5)"],
        root: "E",
        quality: "7flat5",
        voicingType: "standard",
        voicingDescription: "7b5 voicing",
        intervals: ["1", "3", "b5", "b7"],
        notes: ["E", "G#", "Bb", "D"],
        frets: [-1, 7, 6, 7, 6, -1],
        fingers: [0, 2, 1, 3, 1, 0],
        barre: { fret: 6, fromString: 2, toString: 4 },
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["tense", "dark", "unstable"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    e_7flat5_v3: {
        id: "e_7flat5_v3",
        name: "E 7b5",
        symbol: "E7b5",
        altSymbols: ["E7(b5)"],
        root: "E",
        quality: "7flat5",
        voicingType: "barre",
        voicingDescription: "7b5 barre voicing",
        intervals: ["1", "3", "b5", "b7"],
        notes: ["E", "G#", "Bb", "D"],
        frets: [12, 11, 12, 12, 11, -1],
        fingers: [2, 1, 3, 4, 1, 0],
        barre: { fret: 11, fromString: 3, toString: 5 },
        position: 11,
        difficulty: 4,
        categories: {
            moods: ["tense", "dark", "unstable"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // F7b5 voicings
    f_7flat5_v1: {
        id: "f_7flat5_v1",
        name: "F 7b5",
        symbol: "F7b5",
        altSymbols: ["F7(b5)"],
        root: "F",
        quality: "7flat5",
        voicingType: "standard",
        voicingDescription: "7b5 voicing",
        intervals: ["1", "3", "b5", "b7"],
        notes: ["F", "A", "Cb", "Eb"],
        frets: [1, 0, 1, 2, 1, -1],
        fingers: [1, 0, 2, 4, 3, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["tense", "dark", "unstable"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_7flat5_v2: {
        id: "f_7flat5_v2",
        name: "F 7b5",
        symbol: "F7b5",
        altSymbols: ["F7(b5)"],
        root: "F",
        quality: "7flat5",
        voicingType: "standard",
        voicingDescription: "7b5 voicing",
        intervals: ["1", "3", "b5", "b7"],
        notes: ["F", "A", "Cb", "Eb"],
        frets: [-1, 8, 7, 8, 7, -1],
        fingers: [0, 2, 1, 3, 1, 0],
        barre: { fret: 7, fromString: 2, toString: 4 },
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["tense", "dark", "unstable"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // G7b5 voicings
    g_7flat5_v1: {
        id: "g_7flat5_v1",
        name: "G 7b5",
        symbol: "G7b5",
        altSymbols: ["G7(b5)"],
        root: "G",
        quality: "7flat5",
        voicingType: "standard",
        voicingDescription: "7b5 voicing",
        intervals: ["1", "3", "b5", "b7"],
        notes: ["G", "B", "Db", "F"],
        frets: [3, 2, 3, 3, 2, -1],
        fingers: [2, 1, 3, 4, 1, 0],
        barre: { fret: 2, fromString: 3, toString: 5 },
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["tense", "dark", "unstable"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_7flat5_v2: {
        id: "g_7flat5_v2",
        name: "G 7b5",
        symbol: "G7b5",
        altSymbols: ["G7(b5)"],
        root: "G",
        quality: "7flat5",
        voicingType: "standard",
        voicingDescription: "7b5 voicing",
        intervals: ["1", "3", "b5", "b7"],
        notes: ["G", "B", "Db", "F"],
        frets: [-1, 10, 9, 10, 9, -1],
        fingers: [0, 2, 1, 3, 1, 0],
        barre: { fret: 9, fromString: 2, toString: 4 },
        position: 9,
        difficulty: 3,
        categories: {
            moods: ["tense", "dark", "unstable"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_7flat5_v3: {
        id: "g_7flat5_v3",
        name: "G 7b5",
        symbol: "G7b5",
        altSymbols: ["G7(b5)"],
        root: "G",
        quality: "7flat5",
        voicingType: "rootless",
        voicingDescription: "7b5 rootless voicing",
        intervals: ["3", "b5", "b7"],
        notes: ["B", "Db", "F"],
        frets: [-1, -1, 9, 10, 9, -1],
        fingers: [0, 0, 1, 2, 1, 0],
        barre: { fret: 9, fromString: 2, toString: 4 },
        position: 9,
        difficulty: 3,
        categories: {
            moods: ["tense", "dark", "unstable"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // A7b5 voicings
    a_7flat5_v1: {
        id: "a_7flat5_v1",
        name: "A 7b5",
        symbol: "A7b5",
        altSymbols: ["A7(b5)"],
        root: "A",
        quality: "7flat5",
        voicingType: "standard",
        voicingDescription: "7b5 voicing",
        intervals: ["1", "3", "b5", "b7"],
        notes: ["A", "C#", "Eb", "G"],
        frets: [-1, 0, 1, 0, 2, 0],
        fingers: [0, 0, 1, 0, 3, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["tense", "dark", "unstable"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    a_7flat5_v2: {
        id: "a_7flat5_v2",
        name: "A 7b5",
        symbol: "A7b5",
        altSymbols: ["A7(b5)"],
        root: "A",
        quality: "7flat5",
        voicingType: "standard",
        voicingDescription: "7b5 voicing",
        intervals: ["1", "3", "b5", "b7"],
        notes: ["A", "C#", "Eb", "G"],
        frets: [-1, 12, 11, 12, 11, -1],
        fingers: [0, 2, 1, 3, 1, 0],
        barre: { fret: 11, fromString: 2, toString: 4 },
        position: 11,
        difficulty: 3,
        categories: {
            moods: ["tense", "dark", "unstable"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_7flat5_v3: {
        id: "a_7flat5_v3",
        name: "A 7b5",
        symbol: "A7b5",
        altSymbols: ["A7(b5)"],
        root: "A",
        quality: "7flat5",
        voicingType: "barre",
        voicingDescription: "7b5 barre voicing",
        intervals: ["1", "3", "b5", "b7"],
        notes: ["A", "C#", "Eb", "G"],
        frets: [5, 4, 5, 5, 4, -1],
        fingers: [2, 1, 3, 4, 1, 0],
        barre: { fret: 4, fromString: 3, toString: 5 },
        position: 4,
        difficulty: 4,
        categories: {
            moods: ["tense", "dark", "unstable"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // Bb7b5 voicings
    bb_7flat5_v1: {
        id: "bb_7flat5_v1",
        name: "Bb 7b5",
        symbol: "Bb7b5",
        altSymbols: ["A#7b5", "Bb7(b5)"],
        root: "Bb",
        quality: "7flat5",
        voicingType: "standard",
        voicingDescription: "7b5 voicing",
        intervals: ["1", "3", "b5", "b7"],
        notes: ["Bb", "D", "Fb", "Ab"],
        frets: [-1, 1, 0, 1, 0, -1],
        fingers: [0, 2, 0, 3, 0, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["tense", "dark", "unstable"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    bb_7flat5_v2: {
        id: "bb_7flat5_v2",
        name: "Bb 7b5",
        symbol: "Bb7b5",
        altSymbols: ["A#7b5", "Bb7(b5)"],
        root: "Bb",
        quality: "7flat5",
        voicingType: "barre",
        voicingDescription: "7b5 barre voicing",
        intervals: ["1", "3", "b5", "b7"],
        notes: ["Bb", "D", "Fb", "Ab"],
        frets: [6, 5, 6, 6, 5, -1],
        fingers: [2, 1, 3, 4, 1, 0],
        barre: { fret: 5, fromString: 3, toString: 5 },
        position: 5,
        difficulty: 4,
        categories: {
            moods: ["tense", "dark", "unstable"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // ====== 7b13 Voicings ======

    // C7b13 voicings
    c_7flat13_v1: {
        id: "c_7flat13_v1",
        name: "C 7b13",
        symbol: "C7b13",
        altSymbols: ["C7(b13)"],
        root: "C",
        quality: "7flat13",
        voicingType: "standard",
        voicingDescription: "7b13 voicing",
        intervals: ["1", "3", "b7", "b13"],
        notes: ["C", "E", "Bb", "Ab"],
        frets: [-1, 3, 2, 3, 4, 4],
        fingers: [0, 2, 1, 3, 4, 4],
        barre: { fret: 4, fromString: 1, toString: 2 },
        position: 2,
        difficulty: 4,
        categories: {
            moods: ["dark", "tense", "mysterious"],
            styles: ["jazz", "fusion", "bebop"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_7flat13_v2: {
        id: "c_7flat13_v2",
        name: "C 7b13",
        symbol: "C7b13",
        altSymbols: ["C7(b13)"],
        root: "C",
        quality: "7flat13",
        voicingType: "barre",
        voicingDescription: "7b13 barre voicing",
        intervals: ["1", "3", "b7", "b13"],
        notes: ["C", "E", "Bb", "Ab"],
        frets: [8, 7, 8, 8, 9, -1],
        fingers: [2, 1, 3, 3, 4, 0],
        barre: { fret: 8, fromString: 2, toString: 4 },
        position: 7,
        difficulty: 4,
        categories: {
            moods: ["dark", "tense", "mysterious"],
            styles: ["jazz", "fusion", "bebop"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // D7b13 voicings
    d_7flat13_v1: {
        id: "d_7flat13_v1",
        name: "D 7b13",
        symbol: "D7b13",
        altSymbols: ["D7(b13)"],
        root: "D",
        quality: "7flat13",
        voicingType: "standard",
        voicingDescription: "7b13 voicing",
        intervals: ["1", "3", "b7", "b13"],
        notes: ["D", "F#", "C", "Bb"],
        frets: [-1, 5, 4, 5, 6, 6],
        fingers: [0, 2, 1, 3, 4, 4],
        barre: { fret: 6, fromString: 1, toString: 2 },
        position: 4,
        difficulty: 4,
        categories: {
            moods: ["dark", "tense", "mysterious"],
            styles: ["jazz", "fusion", "bebop"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_7flat13_v2: {
        id: "d_7flat13_v2",
        name: "D 7b13",
        symbol: "D7b13",
        altSymbols: ["D7(b13)"],
        root: "D",
        quality: "7flat13",
        voicingType: "barre",
        voicingDescription: "7b13 barre voicing",
        intervals: ["1", "3", "b7", "b13"],
        notes: ["D", "F#", "C", "Bb"],
        frets: [10, 9, 10, 10, 11, -1],
        fingers: [2, 1, 3, 3, 4, 0],
        barre: { fret: 10, fromString: 2, toString: 4 },
        position: 9,
        difficulty: 4,
        categories: {
            moods: ["dark", "tense", "mysterious"],
            styles: ["jazz", "fusion", "bebop"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // E7b13 voicings
    e_7flat13_v1: {
        id: "e_7flat13_v1",
        name: "E 7b13",
        symbol: "E7b13",
        altSymbols: ["E7(b13)"],
        root: "E",
        quality: "7flat13",
        voicingType: "standard",
        voicingDescription: "7b13 voicing",
        intervals: ["1", "3", "b7", "b13"],
        notes: ["E", "G#", "D", "C"],
        frets: [0, 2, 0, 1, 2, 0],
        fingers: [0, 2, 0, 1, 3, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "mysterious"],
            styles: ["jazz", "fusion", "bebop"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_7flat13_v2: {
        id: "e_7flat13_v2",
        name: "E 7b13",
        symbol: "E7b13",
        altSymbols: ["E7(b13)"],
        root: "E",
        quality: "7flat13",
        voicingType: "standard",
        voicingDescription: "7b13 voicing",
        intervals: ["1", "3", "b7", "b13"],
        notes: ["E", "G#", "D", "C"],
        frets: [-1, 7, 6, 7, 8, 8],
        fingers: [0, 2, 1, 3, 4, 4],
        barre: { fret: 8, fromString: 1, toString: 2 },
        position: 6,
        difficulty: 4,
        categories: {
            moods: ["dark", "tense", "mysterious"],
            styles: ["jazz", "fusion", "bebop"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    e_7flat13_v3: {
        id: "e_7flat13_v3",
        name: "E 7b13",
        symbol: "E7b13",
        altSymbols: ["E7(b13)"],
        root: "E",
        quality: "7flat13",
        voicingType: "barre",
        voicingDescription: "7b13 barre voicing",
        intervals: ["1", "3", "b7", "b13"],
        notes: ["E", "G#", "D", "C"],
        frets: [12, 11, 12, 12, 13, -1],
        fingers: [2, 1, 3, 3, 4, 0],
        barre: { fret: 12, fromString: 2, toString: 4 },
        position: 11,
        difficulty: 4,
        categories: {
            moods: ["dark", "tense", "mysterious"],
            styles: ["jazz", "fusion", "bebop"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // F7b13 voicings
    f_7flat13_v1: {
        id: "f_7flat13_v1",
        name: "F 7b13",
        symbol: "F7b13",
        altSymbols: ["F7(b13)"],
        root: "F",
        quality: "7flat13",
        voicingType: "standard",
        voicingDescription: "7b13 voicing",
        intervals: ["1", "3", "b7", "b13"],
        notes: ["F", "A", "Eb", "Db"],
        frets: [-1, 8, 7, 8, 9, 9],
        fingers: [0, 2, 1, 3, 4, 4],
        barre: { fret: 9, fromString: 1, toString: 2 },
        position: 7,
        difficulty: 4,
        categories: {
            moods: ["dark", "tense", "mysterious"],
            styles: ["jazz", "fusion", "bebop"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_7flat13_v2: {
        id: "f_7flat13_v2",
        name: "F 7b13",
        symbol: "F7b13",
        altSymbols: ["F7(b13)"],
        root: "F",
        quality: "7flat13",
        voicingType: "barre",
        voicingDescription: "7b13 barre voicing",
        intervals: ["1", "3", "b7", "b13"],
        notes: ["F", "A", "Eb", "Db"],
        frets: [1, 0, 1, 1, 2, -1],
        fingers: [2, 0, 3, 3, 4, 0],
        barre: { fret: 1, fromString: 2, toString: 4 },
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["dark", "tense", "mysterious"],
            styles: ["jazz", "fusion", "bebop"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // G7b13 voicings
    g_7flat13_v1: {
        id: "g_7flat13_v1",
        name: "G 7b13",
        symbol: "G7b13",
        altSymbols: ["G7(b13)"],
        root: "G",
        quality: "7flat13",
        voicingType: "standard",
        voicingDescription: "7b13 voicing",
        intervals: ["1", "3", "b7", "b13"],
        notes: ["G", "B", "F", "Eb"],
        frets: [3, 2, 3, 3, 4, -1],
        fingers: [2, 1, 3, 3, 4, 0],
        barre: { fret: 3, fromString: 2, toString: 4 },
        position: 2,
        difficulty: 4,
        categories: {
            moods: ["dark", "tense", "mysterious"],
            styles: ["jazz", "fusion", "bebop"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_7flat13_v2: {
        id: "g_7flat13_v2",
        name: "G 7b13",
        symbol: "G7b13",
        altSymbols: ["G7(b13)"],
        root: "G",
        quality: "7flat13",
        voicingType: "standard",
        voicingDescription: "7b13 voicing",
        intervals: ["1", "3", "b7", "b13"],
        notes: ["G", "B", "F", "Eb"],
        frets: [-1, 10, 9, 10, 11, 11],
        fingers: [0, 2, 1, 3, 4, 4],
        barre: { fret: 11, fromString: 1, toString: 2 },
        position: 9,
        difficulty: 4,
        categories: {
            moods: ["dark", "tense", "mysterious"],
            styles: ["jazz", "fusion", "bebop"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // A7b13 voicings
    a_7flat13_v1: {
        id: "a_7flat13_v1",
        name: "A 7b13",
        symbol: "A7b13",
        altSymbols: ["A7(b13)"],
        root: "A",
        quality: "7flat13",
        voicingType: "standard",
        voicingDescription: "7b13 voicing",
        intervals: ["1", "3", "b7", "b13"],
        notes: ["A", "C#", "G", "F"],
        frets: [-1, 0, 2, 0, 2, 1],
        fingers: [0, 0, 2, 0, 3, 1],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dark", "tense", "mysterious"],
            styles: ["jazz", "fusion", "bebop"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    a_7flat13_v2: {
        id: "a_7flat13_v2",
        name: "A 7b13",
        symbol: "A7b13",
        altSymbols: ["A7(b13)"],
        root: "A",
        quality: "7flat13",
        voicingType: "barre",
        voicingDescription: "7b13 barre voicing",
        intervals: ["1", "3", "b7", "b13"],
        notes: ["A", "C#", "G", "F"],
        frets: [5, 4, 5, 5, 6, -1],
        fingers: [2, 1, 3, 3, 4, 0],
        barre: { fret: 5, fromString: 2, toString: 4 },
        position: 4,
        difficulty: 4,
        categories: {
            moods: ["dark", "tense", "mysterious"],
            styles: ["jazz", "fusion", "bebop"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    a_7flat13_v3: {
        id: "a_7flat13_v3",
        name: "A 7b13",
        symbol: "A7b13",
        altSymbols: ["A7(b13)"],
        root: "A",
        quality: "7flat13",
        voicingType: "standard",
        voicingDescription: "7b13 voicing",
        intervals: ["1", "3", "b7", "b13"],
        notes: ["A", "C#", "G", "F"],
        frets: [-1, 12, 11, 12, 13, 13],
        fingers: [0, 2, 1, 3, 4, 4],
        barre: { fret: 13, fromString: 1, toString: 2 },
        position: 11,
        difficulty: 4,
        categories: {
            moods: ["dark", "tense", "mysterious"],
            styles: ["jazz", "fusion", "bebop"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // Bb7b13 voicings
    bb_7flat13_v1: {
        id: "bb_7flat13_v1",
        name: "Bb 7b13",
        symbol: "Bb7b13",
        altSymbols: ["A#7b13", "Bb7(b13)"],
        root: "Bb",
        quality: "7flat13",
        voicingType: "standard",
        voicingDescription: "7b13 voicing",
        intervals: ["1", "3", "b7", "b13"],
        notes: ["Bb", "D", "Ab", "Gb"],
        frets: [-1, 1, 0, 1, 2, 2],
        fingers: [0, 1, 0, 2, 3, 4],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["dark", "tense", "mysterious"],
            styles: ["jazz", "fusion", "bebop"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    bb_7flat13_v2: {
        id: "bb_7flat13_v2",
        name: "Bb 7b13",
        symbol: "Bb7b13",
        altSymbols: ["A#7b13", "Bb7(b13)"],
        root: "Bb",
        quality: "7flat13",
        voicingType: "barre",
        voicingDescription: "7b13 barre voicing",
        intervals: ["1", "3", "b7", "b13"],
        notes: ["Bb", "D", "Ab", "Gb"],
        frets: [6, 5, 6, 6, 7, -1],
        fingers: [2, 1, 3, 3, 4, 0],
        barre: { fret: 6, fromString: 2, toString: 4 },
        position: 5,
        difficulty: 4,
        categories: {
            moods: ["dark", "tense", "mysterious"],
            styles: ["jazz", "fusion", "bebop"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // ====== 7alt (Altered Dominant) Voicings ======

    // C7alt voicings
    c_7alt_v1: {
        id: "c_7alt_v1",
        name: "C 7alt",
        symbol: "C7alt",
        altSymbols: ["C7(alt)", "C7#9b13"],
        root: "C",
        quality: "7alt",
        voicingType: "altered",
        voicingDescription: "7alt voicing (b9, #9, b5, #5)",
        intervals: ["1", "3", "b7", "#9", "b13"],
        notes: ["C", "E", "Bb", "D#", "Ab"],
        frets: [-1, 3, 2, 3, 4, 4],
        fingers: [0, 2, 1, 3, 4, 4],
        barre: { fret: 4, fromString: 1, toString: 2 },
        position: 2,
        difficulty: 4,
        categories: {
            moods: ["tense", "dissonant", "dramatic"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_7alt_v2: {
        id: "c_7alt_v2",
        name: "C 7alt",
        symbol: "C7alt",
        altSymbols: ["C7(alt)", "C7b9#5"],
        root: "C",
        quality: "7alt",
        voicingType: "altered",
        voicingDescription: "7alt voicing",
        intervals: ["1", "3", "#5", "b7", "b9"],
        notes: ["C", "E", "G#", "Bb", "Db"],
        frets: [8, 7, 8, 9, 8, -1],
        fingers: [2, 1, 3, 4, 3, 0],
        barre: { fret: 8, fromString: 2, toString: 4 },
        position: 7,
        difficulty: 5,
        categories: {
            moods: ["tense", "dissonant", "dramatic"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_7alt_v3: {
        id: "c_7alt_v3",
        name: "C 7alt",
        symbol: "C7alt",
        altSymbols: ["C7(alt)", "C7#5b9"],
        root: "C",
        quality: "7alt",
        voicingType: "altered",
        voicingDescription: "7alt voicing",
        intervals: ["3", "b7", "b9", "#5"],
        notes: ["E", "Bb", "Db", "G#"],
        frets: [-1, -1, 2, 3, 2, 4],
        fingers: [0, 0, 1, 2, 1, 4],
        barre: { fret: 2, fromString: 2, toString: 4 },
        position: 2,
        difficulty: 4,
        categories: {
            moods: ["tense", "dissonant", "dramatic"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // D7alt voicings
    d_7alt_v1: {
        id: "d_7alt_v1",
        name: "D 7alt",
        symbol: "D7alt",
        altSymbols: ["D7(alt)", "D7#9b13"],
        root: "D",
        quality: "7alt",
        voicingType: "altered",
        voicingDescription: "7alt voicing (b9, #9, b5, #5)",
        intervals: ["1", "3", "b7", "#9", "b13"],
        notes: ["D", "F#", "C", "E#", "Bb"],
        frets: [-1, 5, 4, 5, 6, 6],
        fingers: [0, 2, 1, 3, 4, 4],
        barre: { fret: 6, fromString: 1, toString: 2 },
        position: 4,
        difficulty: 4,
        categories: {
            moods: ["tense", "dissonant", "dramatic"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_7alt_v2: {
        id: "d_7alt_v2",
        name: "D 7alt",
        symbol: "D7alt",
        altSymbols: ["D7(alt)", "D7b9#5"],
        root: "D",
        quality: "7alt",
        voicingType: "altered",
        voicingDescription: "7alt voicing",
        intervals: ["1", "3", "#5", "b7", "b9"],
        notes: ["D", "F#", "A#", "C", "Eb"],
        frets: [10, 9, 10, 11, 10, -1],
        fingers: [2, 1, 3, 4, 3, 0],
        barre: { fret: 10, fromString: 2, toString: 4 },
        position: 9,
        difficulty: 5,
        categories: {
            moods: ["tense", "dissonant", "dramatic"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // E7alt voicings
    e_7alt_v1: {
        id: "e_7alt_v1",
        name: "E 7alt",
        symbol: "E7alt",
        altSymbols: ["E7(alt)", "E7#9b13"],
        root: "E",
        quality: "7alt",
        voicingType: "altered",
        voicingDescription: "7alt voicing",
        intervals: ["1", "3", "b7", "#9", "b13"],
        notes: ["E", "G#", "D", "F##", "C"],
        frets: [0, 2, 0, 1, 0, 0],
        fingers: [0, 2, 0, 1, 0, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["tense", "dissonant", "dramatic"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_7alt_v2: {
        id: "e_7alt_v2",
        name: "E 7alt",
        symbol: "E7alt",
        altSymbols: ["E7(alt)", "E7b9#5"],
        root: "E",
        quality: "7alt",
        voicingType: "altered",
        voicingDescription: "7alt voicing",
        intervals: ["1", "3", "#5", "b7", "b9"],
        notes: ["E", "G#", "B#", "D", "F"],
        frets: [-1, 7, 6, 7, 8, 8],
        fingers: [0, 2, 1, 3, 4, 4],
        barre: { fret: 8, fromString: 1, toString: 2 },
        position: 6,
        difficulty: 4,
        categories: {
            moods: ["tense", "dissonant", "dramatic"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    e_7alt_v3: {
        id: "e_7alt_v3",
        name: "E 7alt",
        symbol: "E7alt",
        altSymbols: ["E7(alt)"],
        root: "E",
        quality: "7alt",
        voicingType: "altered",
        voicingDescription: "7alt voicing",
        intervals: ["1", "3", "#5", "b7", "b9"],
        notes: ["E", "G#", "B#", "D", "F"],
        frets: [12, 11, 12, 13, 12, -1],
        fingers: [2, 1, 3, 4, 3, 0],
        barre: { fret: 12, fromString: 2, toString: 4 },
        position: 11,
        difficulty: 5,
        categories: {
            moods: ["tense", "dissonant", "dramatic"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // F7alt voicings
    f_7alt_v1: {
        id: "f_7alt_v1",
        name: "F 7alt",
        symbol: "F7alt",
        altSymbols: ["F7(alt)", "F7#9b13"],
        root: "F",
        quality: "7alt",
        voicingType: "altered",
        voicingDescription: "7alt voicing",
        intervals: ["1", "3", "b7", "#9", "b13"],
        notes: ["F", "A", "Eb", "G#", "Db"],
        frets: [1, 0, 1, 1, 2, 2],
        fingers: [1, 0, 2, 2, 3, 4],
        barre: { fret: 1, fromString: 2, toString: 4 },
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["tense", "dissonant", "dramatic"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_7alt_v2: {
        id: "f_7alt_v2",
        name: "F 7alt",
        symbol: "F7alt",
        altSymbols: ["F7(alt)", "F7b9#5"],
        root: "F",
        quality: "7alt",
        voicingType: "altered",
        voicingDescription: "7alt voicing",
        intervals: ["1", "3", "#5", "b7", "b9"],
        notes: ["F", "A", "C#", "Eb", "Gb"],
        frets: [-1, 8, 7, 8, 9, 9],
        fingers: [0, 2, 1, 3, 4, 4],
        barre: { fret: 9, fromString: 1, toString: 2 },
        position: 7,
        difficulty: 4,
        categories: {
            moods: ["tense", "dissonant", "dramatic"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // G7alt voicings
    g_7alt_v1: {
        id: "g_7alt_v1",
        name: "G 7alt",
        symbol: "G7alt",
        altSymbols: ["G7(alt)", "G7#9b13"],
        root: "G",
        quality: "7alt",
        voicingType: "altered",
        voicingDescription: "7alt voicing",
        intervals: ["1", "3", "b7", "#9", "b13"],
        notes: ["G", "B", "F", "A#", "Eb"],
        frets: [3, 2, 3, 3, 4, 4],
        fingers: [2, 1, 3, 3, 4, 4],
        barre: { fret: 3, fromString: 2, toString: 4 },
        position: 2,
        difficulty: 4,
        categories: {
            moods: ["tense", "dissonant", "dramatic"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_7alt_v2: {
        id: "g_7alt_v2",
        name: "G 7alt",
        symbol: "G7alt",
        altSymbols: ["G7(alt)", "G7b9#5"],
        root: "G",
        quality: "7alt",
        voicingType: "altered",
        voicingDescription: "7alt voicing",
        intervals: ["1", "3", "#5", "b7", "b9"],
        notes: ["G", "B", "D#", "F", "Ab"],
        frets: [-1, 10, 9, 10, 11, 11],
        fingers: [0, 2, 1, 3, 4, 4],
        barre: { fret: 11, fromString: 1, toString: 2 },
        position: 9,
        difficulty: 4,
        categories: {
            moods: ["tense", "dissonant", "dramatic"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_7alt_v3: {
        id: "g_7alt_v3",
        name: "G 7alt",
        symbol: "G7alt",
        altSymbols: ["G7(alt)"],
        root: "G",
        quality: "7alt",
        voicingType: "altered",
        voicingDescription: "7alt voicing",
        intervals: ["3", "b7", "b9", "#5"],
        notes: ["B", "F", "Ab", "D#"],
        frets: [-1, -1, 9, 10, 9, 11],
        fingers: [0, 0, 1, 2, 1, 4],
        barre: { fret: 9, fromString: 2, toString: 4 },
        position: 9,
        difficulty: 4,
        categories: {
            moods: ["tense", "dissonant", "dramatic"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // A7alt voicings
    a_7alt_v1: {
        id: "a_7alt_v1",
        name: "A 7alt",
        symbol: "A7alt",
        altSymbols: ["A7(alt)", "A7#9b13"],
        root: "A",
        quality: "7alt",
        voicingType: "altered",
        voicingDescription: "7alt voicing",
        intervals: ["1", "3", "b7", "#9", "b13"],
        notes: ["A", "C#", "G", "B#", "F"],
        frets: [-1, 0, 1, 0, 1, 1],
        fingers: [0, 0, 2, 0, 3, 4],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["tense", "dissonant", "dramatic"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    a_7alt_v2: {
        id: "a_7alt_v2",
        name: "A 7alt",
        symbol: "A7alt",
        altSymbols: ["A7(alt)", "A7b9#5"],
        root: "A",
        quality: "7alt",
        voicingType: "altered",
        voicingDescription: "7alt voicing",
        intervals: ["1", "3", "#5", "b7", "b9"],
        notes: ["A", "C#", "E#", "G", "Bb"],
        frets: [5, 4, 5, 6, 6, -1],
        fingers: [2, 1, 3, 4, 4, 0],
        barre: { fret: 6, fromString: 1, toString: 2 },
        position: 4,
        difficulty: 4,
        categories: {
            moods: ["tense", "dissonant", "dramatic"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_7alt_v3: {
        id: "a_7alt_v3",
        name: "A 7alt",
        symbol: "A7alt",
        altSymbols: ["A7(alt)"],
        root: "A",
        quality: "7alt",
        voicingType: "altered",
        voicingDescription: "7alt voicing",
        intervals: ["1", "3", "#5", "b7", "b9"],
        notes: ["A", "C#", "E#", "G", "Bb"],
        frets: [-1, 12, 11, 12, 13, 13],
        fingers: [0, 2, 1, 3, 4, 4],
        barre: { fret: 13, fromString: 1, toString: 2 },
        position: 11,
        difficulty: 4,
        categories: {
            moods: ["tense", "dissonant", "dramatic"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // Bb7alt voicings
    bb_7alt_v1: {
        id: "bb_7alt_v1",
        name: "Bb 7alt",
        symbol: "Bb7alt",
        altSymbols: ["A#7alt", "Bb7(alt)"],
        root: "Bb",
        quality: "7alt",
        voicingType: "altered",
        voicingDescription: "7alt voicing",
        intervals: ["1", "3", "b7", "#9", "b13"],
        notes: ["Bb", "D", "Ab", "C#", "Gb"],
        frets: [-1, 1, 0, 1, 2, 2],
        fingers: [0, 1, 0, 2, 3, 4],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["tense", "dissonant", "dramatic"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    bb_7alt_v2: {
        id: "bb_7alt_v2",
        name: "Bb 7alt",
        symbol: "Bb7alt",
        altSymbols: ["A#7alt", "Bb7(alt)"],
        root: "Bb",
        quality: "7alt",
        voicingType: "altered",
        voicingDescription: "7alt voicing",
        intervals: ["1", "3", "#5", "b7", "b9"],
        notes: ["Bb", "D", "F#", "Ab", "Cb"],
        frets: [6, 5, 6, 7, 7, -1],
        fingers: [2, 1, 3, 4, 4, 0],
        barre: { fret: 7, fromString: 1, toString: 2 },
        position: 5,
        difficulty: 4,
        categories: {
            moods: ["tense", "dissonant", "dramatic"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // ====== Min11 Voicings ======

    // Cm11 voicings
    c_min11_v1: {
        id: "c_min11_v1",
        name: "C Minor 11",
        symbol: "Cm11",
        altSymbols: ["Cmin11", "C-11"],
        root: "C",
        quality: "minor11",
        voicingType: "partial",
        voicingDescription: "Min11 voicing",
        intervals: ["1", "b3", "b7", "11"],
        notes: ["C", "Eb", "Bb", "F"],
        frets: [-1, 3, 1, 3, 4, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "open", "modern"],
            styles: ["jazz", "neo-soul", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_min11_v2: {
        id: "c_min11_v2",
        name: "C Minor 11",
        symbol: "Cm11",
        altSymbols: ["Cmin11", "C-11"],
        root: "C",
        quality: "minor11",
        voicingType: "open",
        voicingDescription: "Min11 open voicing",
        intervals: ["1", "b7", "b3", "11"],
        notes: ["C", "Bb", "Eb", "F"],
        frets: [8, 6, 8, 8, 8, -1],
        fingers: [2, 1, 3, 3, 3, 0],
        barre: { fret: 8, fromString: 2, toString: 4 },
        position: 6,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "open", "modern"],
            styles: ["jazz", "neo-soul", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // Dm11 voicings
    d_min11_v1: {
        id: "d_min11_v1",
        name: "D Minor 11",
        symbol: "Dm11",
        altSymbols: ["Dmin11", "D-11"],
        root: "D",
        quality: "minor11",
        voicingType: "open",
        voicingDescription: "Min11 voicing",
        intervals: ["1", "5", "b7", "b3", "11"],
        notes: ["D", "A", "C", "F", "G"],
        frets: [-1, -1, 0, 2, 1, 1],
        fingers: [0, 0, 0, 3, 1, 2],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "open", "modern"],
            styles: ["jazz", "neo-soul", "fusion"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    d_min11_v2: {
        id: "d_min11_v2",
        name: "D Minor 11",
        symbol: "Dm11",
        altSymbols: ["Dmin11", "D-11"],
        root: "D",
        quality: "minor11",
        voicingType: "partial",
        voicingDescription: "Min11 voicing",
        intervals: ["1", "b3", "b7", "11"],
        notes: ["D", "F", "C", "G"],
        frets: [-1, 5, 3, 5, 6, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 3,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "open", "modern"],
            styles: ["jazz", "neo-soul", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_min11_v3: {
        id: "d_min11_v3",
        name: "D Minor 11",
        symbol: "Dm11",
        altSymbols: ["Dmin11", "D-11"],
        root: "D",
        quality: "minor11",
        voicingType: "barre",
        voicingDescription: "Min11 barre voicing",
        intervals: ["1", "b7", "b3", "11"],
        notes: ["D", "C", "F", "G"],
        frets: [10, 8, 10, 10, 10, -1],
        fingers: [2, 1, 3, 3, 3, 0],
        barre: { fret: 10, fromString: 2, toString: 4 },
        position: 8,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "open", "modern"],
            styles: ["jazz", "neo-soul", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // Em11 voicings
    e_min11_v1: {
        id: "e_min11_v1",
        name: "E Minor 11",
        symbol: "Em11",
        altSymbols: ["Emin11", "E-11"],
        root: "E",
        quality: "minor11",
        voicingType: "open",
        voicingDescription: "Min11 voicing",
        intervals: ["1", "5", "b7", "b3", "11"],
        notes: ["E", "B", "D", "G", "A"],
        frets: [0, 2, 0, 0, 0, 0],
        fingers: [0, 2, 0, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["dreamy", "open", "modern"],
            styles: ["jazz", "neo-soul", "fusion"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_min11_v2: {
        id: "e_min11_v2",
        name: "E Minor 11",
        symbol: "Em11",
        altSymbols: ["Emin11", "E-11"],
        root: "E",
        quality: "minor11",
        voicingType: "partial",
        voicingDescription: "Min11 voicing",
        intervals: ["1", "b3", "b7", "11"],
        notes: ["E", "G", "D", "A"],
        frets: [-1, 7, 5, 7, 8, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 5,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "open", "modern"],
            styles: ["jazz", "neo-soul", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    e_min11_v3: {
        id: "e_min11_v3",
        name: "E Minor 11",
        symbol: "Em11",
        altSymbols: ["Emin11", "E-11"],
        root: "E",
        quality: "minor11",
        voicingType: "barre",
        voicingDescription: "Min11 barre voicing",
        intervals: ["1", "b7", "b3", "11"],
        notes: ["E", "D", "G", "A"],
        frets: [12, 10, 12, 12, 12, -1],
        fingers: [2, 1, 3, 3, 3, 0],
        barre: { fret: 12, fromString: 2, toString: 4 },
        position: 10,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "open", "modern"],
            styles: ["jazz", "neo-soul", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // Fm11 voicings
    f_min11_v1: {
        id: "f_min11_v1",
        name: "F Minor 11",
        symbol: "Fm11",
        altSymbols: ["Fmin11", "F-11"],
        root: "F",
        quality: "minor11",
        voicingType: "partial",
        voicingDescription: "Min11 voicing",
        intervals: ["1", "b3", "b7", "11"],
        notes: ["F", "Ab", "Eb", "Bb"],
        frets: [-1, 8, 6, 8, 9, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 6,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "open", "modern"],
            styles: ["jazz", "neo-soul", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_min11_v2: {
        id: "f_min11_v2",
        name: "F Minor 11",
        symbol: "Fm11",
        altSymbols: ["Fmin11", "F-11"],
        root: "F",
        quality: "minor11",
        voicingType: "barre",
        voicingDescription: "Min11 barre voicing",
        intervals: ["1", "b7", "b3", "11"],
        notes: ["F", "Eb", "Ab", "Bb"],
        frets: [1, 1, 1, 1, 1, 1],
        fingers: [1, 1, 1, 1, 1, 1],
        barre: { fret: 1, fromString: 1, toString: 6 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "open", "modern"],
            styles: ["jazz", "neo-soul", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // Gm11 voicings
    g_min11_v1: {
        id: "g_min11_v1",
        name: "G Minor 11",
        symbol: "Gm11",
        altSymbols: ["Gmin11", "G-11"],
        root: "G",
        quality: "minor11",
        voicingType: "partial",
        voicingDescription: "Min11 voicing",
        intervals: ["1", "b3", "b7", "11"],
        notes: ["G", "Bb", "F", "C"],
        frets: [-1, 10, 8, 10, 11, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 8,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "open", "modern"],
            styles: ["jazz", "neo-soul", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_min11_v2: {
        id: "g_min11_v2",
        name: "G Minor 11",
        symbol: "Gm11",
        altSymbols: ["Gmin11", "G-11"],
        root: "G",
        quality: "minor11",
        voicingType: "barre",
        voicingDescription: "Min11 barre voicing",
        intervals: ["1", "b7", "b3", "11"],
        notes: ["G", "F", "Bb", "C"],
        frets: [3, 1, 3, 3, 3, -1],
        fingers: [2, 1, 3, 3, 3, 0],
        barre: { fret: 3, fromString: 2, toString: 4 },
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "open", "modern"],
            styles: ["jazz", "neo-soul", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // Am11 voicings
    a_min11_v1: {
        id: "a_min11_v1",
        name: "A Minor 11",
        symbol: "Am11",
        altSymbols: ["Amin11", "A-11"],
        root: "A",
        quality: "minor11",
        voicingType: "open",
        voicingDescription: "Min11 voicing",
        intervals: ["1", "5", "b7", "b3", "11"],
        notes: ["A", "E", "G", "C", "D"],
        frets: [-1, 0, 0, 0, 1, 0],
        fingers: [0, 0, 0, 0, 1, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["dreamy", "open", "modern"],
            styles: ["jazz", "neo-soul", "fusion"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    a_min11_v2: {
        id: "a_min11_v2",
        name: "A Minor 11",
        symbol: "Am11",
        altSymbols: ["Amin11", "A-11"],
        root: "A",
        quality: "minor11",
        voicingType: "partial",
        voicingDescription: "Min11 voicing",
        intervals: ["1", "b3", "b7", "11"],
        notes: ["A", "C", "G", "D"],
        frets: [-1, 12, 10, 12, 13, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 10,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "open", "modern"],
            styles: ["jazz", "neo-soul", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_min11_v3: {
        id: "a_min11_v3",
        name: "A Minor 11",
        symbol: "Am11",
        altSymbols: ["Amin11", "A-11"],
        root: "A",
        quality: "minor11",
        voicingType: "barre",
        voicingDescription: "Min11 barre voicing",
        intervals: ["1", "b7", "b3", "11"],
        notes: ["A", "G", "C", "D"],
        frets: [5, 3, 5, 5, 5, -1],
        fingers: [2, 1, 3, 3, 3, 0],
        barre: { fret: 5, fromString: 2, toString: 4 },
        position: 3,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "open", "modern"],
            styles: ["jazz", "neo-soul", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // Bm11 voicings
    b_min11_v1: {
        id: "b_min11_v1",
        name: "B Minor 11",
        symbol: "Bm11",
        altSymbols: ["Bmin11", "B-11"],
        root: "B",
        quality: "minor11",
        voicingType: "partial",
        voicingDescription: "Min11 voicing",
        intervals: ["1", "b3", "b7", "11"],
        notes: ["B", "D", "A", "E"],
        frets: [-1, 2, 0, 2, 3, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "open", "modern"],
            styles: ["jazz", "neo-soul", "fusion"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    b_min11_v2: {
        id: "b_min11_v2",
        name: "B Minor 11",
        symbol: "Bm11",
        altSymbols: ["Bmin11", "B-11"],
        root: "B",
        quality: "minor11",
        voicingType: "barre",
        voicingDescription: "Min11 barre voicing",
        intervals: ["1", "b7", "b3", "11"],
        notes: ["B", "A", "D", "E"],
        frets: [7, 5, 7, 7, 7, -1],
        fingers: [2, 1, 3, 3, 3, 0],
        barre: { fret: 7, fromString: 2, toString: 4 },
        position: 5,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "open", "modern"],
            styles: ["jazz", "neo-soul", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // Bbm11 voicings
    bb_min11_v1: {
        id: "bb_min11_v1",
        name: "Bb Minor 11",
        symbol: "Bbm11",
        altSymbols: ["A#min11", "Bbmin11", "Bb-11"],
        root: "Bb",
        quality: "minor11",
        voicingType: "partial",
        voicingDescription: "Min11 voicing",
        intervals: ["1", "b3", "b7", "11"],
        notes: ["Bb", "Db", "Ab", "Eb"],
        frets: [-1, 1, 1, 1, 2, -1],
        fingers: [0, 1, 1, 1, 2, 0],
        barre: { fret: 1, fromString: 2, toString: 4 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "open", "modern"],
            styles: ["jazz", "neo-soul", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    bb_min11_v2: {
        id: "bb_min11_v2",
        name: "Bb Minor 11",
        symbol: "Bbm11",
        altSymbols: ["A#min11", "Bbmin11", "Bb-11"],
        root: "Bb",
        quality: "minor11",
        voicingType: "barre",
        voicingDescription: "Min11 barre voicing",
        intervals: ["1", "b7", "b3", "11"],
        notes: ["Bb", "Ab", "Db", "Eb"],
        frets: [6, 4, 6, 6, 6, -1],
        fingers: [2, 1, 3, 3, 3, 0],
        barre: { fret: 6, fromString: 2, toString: 4 },
        position: 4,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "open", "modern"],
            styles: ["jazz", "neo-soul", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // Ebm11 voicings
    eb_min11_v1: {
        id: "eb_min11_v1",
        name: "Eb Minor 11",
        symbol: "Ebm11",
        altSymbols: ["D#min11", "Ebmin11", "Eb-11"],
        root: "Eb",
        quality: "minor11",
        voicingType: "partial",
        voicingDescription: "Min11 voicing",
        intervals: ["1", "b3", "b7", "11"],
        notes: ["Eb", "Gb", "Db", "Ab"],
        frets: [-1, 6, 4, 6, 7, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 4,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "open", "modern"],
            styles: ["jazz", "neo-soul", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    eb_min11_v2: {
        id: "eb_min11_v2",
        name: "Eb Minor 11",
        symbol: "Ebm11",
        altSymbols: ["D#min11", "Ebmin11", "Eb-11"],
        root: "Eb",
        quality: "minor11",
        voicingType: "barre",
        voicingDescription: "Min11 barre voicing",
        intervals: ["1", "b7", "b3", "11"],
        notes: ["Eb", "Db", "Gb", "Ab"],
        frets: [11, 9, 11, 11, 11, -1],
        fingers: [2, 1, 3, 3, 3, 0],
        barre: { fret: 11, fromString: 2, toString: 4 },
        position: 9,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "open", "modern"],
            styles: ["jazz", "neo-soul", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // ====== Maj7#11 (Lydian) Voicings ======

    // CMaj7#11 voicings
    c_maj7sharp11_v1: {
        id: "c_maj7sharp11_v1",
        name: "C Major 7#11",
        symbol: "CMaj7#11",
        altSymbols: ["CM7#11", "CΔ7#11"],
        root: "C",
        quality: "major7sharp11",
        voicingType: "lydian",
        voicingDescription: "Maj7#11 (Lydian)",
        intervals: ["1", "3", "7", "#11"],
        notes: ["C", "E", "B", "F#"],
        frets: [-1, 3, 2, 4, 4, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 2,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "ethereal", "mystical"],
            styles: ["jazz", "film music", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_maj7sharp11_v2: {
        id: "c_maj7sharp11_v2",
        name: "C Major 7#11",
        symbol: "CMaj7#11",
        altSymbols: ["CM7#11", "CΔ7#11"],
        root: "C",
        quality: "major7sharp11",
        voicingType: "lydian",
        voicingDescription: "Maj7#11 (Lydian)",
        intervals: ["1", "7", "3", "#11"],
        notes: ["C", "B", "E", "F#"],
        frets: [8, 7, 9, 9, 9, -1],
        fingers: [2, 1, 3, 3, 4, 0],
        barre: null,
        position: 7,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "ethereal", "mystical"],
            styles: ["jazz", "film music", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // DMaj7#11 voicings
    d_maj7sharp11_v1: {
        id: "d_maj7sharp11_v1",
        name: "D Major 7#11",
        symbol: "DMaj7#11",
        altSymbols: ["DM7#11", "DΔ7#11"],
        root: "D",
        quality: "major7sharp11",
        voicingType: "lydian",
        voicingDescription: "Maj7#11 (Lydian)",
        intervals: ["1", "3", "7", "#11"],
        notes: ["D", "F#", "C#", "G#"],
        frets: [-1, 5, 4, 6, 6, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 4,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "ethereal", "mystical"],
            styles: ["jazz", "film music", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_maj7sharp11_v2: {
        id: "d_maj7sharp11_v2",
        name: "D Major 7#11",
        symbol: "DMaj7#11",
        altSymbols: ["DM7#11", "DΔ7#11"],
        root: "D",
        quality: "major7sharp11",
        voicingType: "lydian",
        voicingDescription: "Maj7#11 (Lydian)",
        intervals: ["1", "7", "3", "#11"],
        notes: ["D", "C#", "F#", "G#"],
        frets: [10, 9, 11, 11, 11, -1],
        fingers: [2, 1, 3, 3, 4, 0],
        barre: null,
        position: 9,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "ethereal", "mystical"],
            styles: ["jazz", "film music", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_maj7sharp11_v3: {
        id: "d_maj7sharp11_v3",
        name: "D Major 7#11",
        symbol: "DMaj7#11",
        altSymbols: ["DM7#11", "DΔ7#11"],
        root: "D",
        quality: "major7sharp11",
        voicingType: "lydian",
        voicingDescription: "Maj7#11 (Lydian) open voicing",
        intervals: ["1", "5", "7", "#11"],
        notes: ["D", "A", "C#", "G#"],
        frets: [-1, -1, 0, 6, 6, 4],
        fingers: [0, 0, 0, 3, 4, 2],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "ethereal", "mystical"],
            styles: ["jazz", "film music", "fusion"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // EMaj7#11 voicings
    e_maj7sharp11_v1: {
        id: "e_maj7sharp11_v1",
        name: "E Major 7#11",
        symbol: "EMaj7#11",
        altSymbols: ["EM7#11", "EΔ7#11"],
        root: "E",
        quality: "major7sharp11",
        voicingType: "lydian",
        voicingDescription: "Maj7#11 (Lydian)",
        intervals: ["1", "3", "7", "#11"],
        notes: ["E", "G#", "D#", "A#"],
        frets: [0, 2, 1, 3, 3, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "ethereal", "mystical"],
            styles: ["jazz", "film music", "fusion"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_maj7sharp11_v2: {
        id: "e_maj7sharp11_v2",
        name: "E Major 7#11",
        symbol: "EMaj7#11",
        altSymbols: ["EM7#11", "EΔ7#11"],
        root: "E",
        quality: "major7sharp11",
        voicingType: "lydian",
        voicingDescription: "Maj7#11 (Lydian)",
        intervals: ["1", "7", "3", "#11"],
        notes: ["E", "D#", "G#", "A#"],
        frets: [-1, 7, 6, 8, 8, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 6,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "ethereal", "mystical"],
            styles: ["jazz", "film music", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // FMaj7#11 voicings
    f_maj7sharp11_v1: {
        id: "f_maj7sharp11_v1",
        name: "F Major 7#11",
        symbol: "FMaj7#11",
        altSymbols: ["FM7#11", "FΔ7#11"],
        root: "F",
        quality: "major7sharp11",
        voicingType: "lydian",
        voicingDescription: "Maj7#11 (Lydian)",
        intervals: ["1", "3", "7", "#11"],
        notes: ["F", "A", "E", "B"],
        frets: [1, 0, 2, 2, 2, -1],
        fingers: [1, 0, 2, 3, 4, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "ethereal", "mystical"],
            styles: ["jazz", "film music", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_maj7sharp11_v2: {
        id: "f_maj7sharp11_v2",
        name: "F Major 7#11",
        symbol: "FMaj7#11",
        altSymbols: ["FM7#11", "FΔ7#11"],
        root: "F",
        quality: "major7sharp11",
        voicingType: "lydian",
        voicingDescription: "Maj7#11 (Lydian)",
        intervals: ["1", "7", "3", "#11"],
        notes: ["F", "E", "A", "B"],
        frets: [-1, 8, 7, 9, 9, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 7,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "ethereal", "mystical"],
            styles: ["jazz", "film music", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // GMaj7#11 voicings
    g_maj7sharp11_v1: {
        id: "g_maj7sharp11_v1",
        name: "G Major 7#11",
        symbol: "GMaj7#11",
        altSymbols: ["GM7#11", "GΔ7#11"],
        root: "G",
        quality: "major7sharp11",
        voicingType: "lydian",
        voicingDescription: "Maj7#11 (Lydian)",
        intervals: ["1", "3", "7", "#11"],
        notes: ["G", "B", "F#", "C#"],
        frets: [3, 2, 4, 4, 4, -1],
        fingers: [2, 1, 3, 3, 4, 0],
        barre: null,
        position: 2,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "ethereal", "mystical"],
            styles: ["jazz", "film music", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_maj7sharp11_v2: {
        id: "g_maj7sharp11_v2",
        name: "G Major 7#11",
        symbol: "GMaj7#11",
        altSymbols: ["GM7#11", "GΔ7#11"],
        root: "G",
        quality: "major7sharp11",
        voicingType: "lydian",
        voicingDescription: "Maj7#11 (Lydian)",
        intervals: ["1", "7", "3", "#11"],
        notes: ["G", "F#", "B", "C#"],
        frets: [-1, 10, 9, 11, 11, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 9,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "ethereal", "mystical"],
            styles: ["jazz", "film music", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_maj7sharp11_v3: {
        id: "g_maj7sharp11_v3",
        name: "G Major 7#11",
        symbol: "GMaj7#11",
        altSymbols: ["GM7#11", "GΔ7#11"],
        root: "G",
        quality: "major7sharp11",
        voicingType: "lydian",
        voicingDescription: "Maj7#11 (Lydian) open voicing",
        intervals: ["1", "5", "7", "#11"],
        notes: ["G", "D", "F#", "C#"],
        frets: [3, -1, 4, 4, 4, -1],
        fingers: [1, 0, 2, 3, 4, 0],
        barre: null,
        position: 3,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "ethereal", "mystical"],
            styles: ["jazz", "film music", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // AMaj7#11 voicings
    a_maj7sharp11_v1: {
        id: "a_maj7sharp11_v1",
        name: "A Major 7#11",
        symbol: "AMaj7#11",
        altSymbols: ["AM7#11", "AΔ7#11"],
        root: "A",
        quality: "major7sharp11",
        voicingType: "lydian",
        voicingDescription: "Maj7#11 (Lydian)",
        intervals: ["1", "3", "7", "#11"],
        notes: ["A", "C#", "G#", "D#"],
        frets: [-1, 0, 1, 1, 1, -1],
        fingers: [0, 0, 1, 2, 3, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "ethereal", "mystical"],
            styles: ["jazz", "film music", "fusion"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    a_maj7sharp11_v2: {
        id: "a_maj7sharp11_v2",
        name: "A Major 7#11",
        symbol: "AMaj7#11",
        altSymbols: ["AM7#11", "AΔ7#11"],
        root: "A",
        quality: "major7sharp11",
        voicingType: "lydian",
        voicingDescription: "Maj7#11 (Lydian)",
        intervals: ["1", "7", "3", "#11"],
        notes: ["A", "G#", "C#", "D#"],
        frets: [-1, 12, 11, 13, 13, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 11,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "ethereal", "mystical"],
            styles: ["jazz", "film music", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_maj7sharp11_v3: {
        id: "a_maj7sharp11_v3",
        name: "A Major 7#11",
        symbol: "AMaj7#11",
        altSymbols: ["AM7#11", "AΔ7#11"],
        root: "A",
        quality: "major7sharp11",
        voicingType: "lydian",
        voicingDescription: "Maj7#11 (Lydian) barre",
        intervals: ["1", "7", "3", "#11"],
        notes: ["A", "G#", "C#", "D#"],
        frets: [5, 4, 6, 6, 6, -1],
        fingers: [2, 1, 3, 3, 4, 0],
        barre: null,
        position: 4,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "ethereal", "mystical"],
            styles: ["jazz", "film music", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // BbMaj7#11 voicings
    bb_maj7sharp11_v1: {
        id: "bb_maj7sharp11_v1",
        name: "Bb Major 7#11",
        symbol: "BbMaj7#11",
        altSymbols: ["A#M7#11", "BbM7#11", "BbΔ7#11"],
        root: "Bb",
        quality: "major7sharp11",
        voicingType: "lydian",
        voicingDescription: "Maj7#11 (Lydian)",
        intervals: ["1", "3", "7", "#11"],
        notes: ["Bb", "D", "A", "E"],
        frets: [-1, 1, 0, 2, 2, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["dreamy", "ethereal", "mystical"],
            styles: ["jazz", "film music", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    bb_maj7sharp11_v2: {
        id: "bb_maj7sharp11_v2",
        name: "Bb Major 7#11",
        symbol: "BbMaj7#11",
        altSymbols: ["A#M7#11", "BbM7#11", "BbΔ7#11"],
        root: "Bb",
        quality: "major7sharp11",
        voicingType: "lydian",
        voicingDescription: "Maj7#11 (Lydian)",
        intervals: ["1", "7", "3", "#11"],
        notes: ["Bb", "A", "D", "E"],
        frets: [6, 5, 7, 7, 7, -1],
        fingers: [2, 1, 3, 3, 4, 0],
        barre: null,
        position: 5,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "ethereal", "mystical"],
            styles: ["jazz", "film music", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // EbMaj7#11 voicings
    eb_maj7sharp11_v1: {
        id: "eb_maj7sharp11_v1",
        name: "Eb Major 7#11",
        symbol: "EbMaj7#11",
        altSymbols: ["D#M7#11", "EbM7#11", "EbΔ7#11"],
        root: "Eb",
        quality: "major7sharp11",
        voicingType: "lydian",
        voicingDescription: "Maj7#11 (Lydian)",
        intervals: ["1", "3", "7", "#11"],
        notes: ["Eb", "G", "D", "A"],
        frets: [-1, 6, 5, 7, 7, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 5,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "ethereal", "mystical"],
            styles: ["jazz", "film music", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    eb_maj7sharp11_v2: {
        id: "eb_maj7sharp11_v2",
        name: "Eb Major 7#11",
        symbol: "EbMaj7#11",
        altSymbols: ["D#M7#11", "EbM7#11", "EbΔ7#11"],
        root: "Eb",
        quality: "major7sharp11",
        voicingType: "lydian",
        voicingDescription: "Maj7#11 (Lydian)",
        intervals: ["1", "7", "3", "#11"],
        notes: ["Eb", "D", "G", "A"],
        frets: [11, 10, 12, 12, 12, -1],
        fingers: [2, 1, 3, 3, 4, 0],
        barre: null,
        position: 10,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "ethereal", "mystical"],
            styles: ["jazz", "film music", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // ====== Dom11 Voicings ======

    // C11 voicings
    c_dom11_v1: {
        id: "c_dom11_v1",
        name: "C Dominant 11",
        symbol: "C11",
        altSymbols: ["Cdom11"],
        root: "C",
        quality: "dominant11",
        voicingType: "partial",
        voicingDescription: "Dom11 voicing",
        intervals: ["1", "b7", "3", "11"],
        notes: ["C", "Bb", "E", "F"],
        frets: [-1, 3, 2, 3, 3, 3],
        fingers: [0, 2, 1, 3, 3, 3],
        barre: { fret: 3, fromString: 1, toString: 3 },
        position: 2,
        difficulty: 4,
        categories: {
            moods: ["suspended", "open", "funky"],
            styles: ["jazz", "funk", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    c_dom11_v2: {
        id: "c_dom11_v2",
        name: "C Dominant 11",
        symbol: "C11",
        altSymbols: ["Cdom11"],
        root: "C",
        quality: "dominant11",
        voicingType: "barre",
        voicingDescription: "Dom11 barre voicing",
        intervals: ["1", "5", "b7", "3", "11"],
        notes: ["C", "G", "Bb", "E", "F"],
        frets: [8, 8, 8, 8, 8, 8],
        fingers: [1, 1, 1, 1, 1, 1],
        barre: { fret: 8, fromString: 1, toString: 6 },
        position: 8,
        difficulty: 4,
        categories: {
            moods: ["suspended", "open", "funky"],
            styles: ["jazz", "funk", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // D11 voicings
    d_dom11_v1: {
        id: "d_dom11_v1",
        name: "D Dominant 11",
        symbol: "D11",
        altSymbols: ["Ddom11"],
        root: "D",
        quality: "dominant11",
        voicingType: "open",
        voicingDescription: "Dom11 voicing",
        intervals: ["1", "5", "b7", "11"],
        notes: ["D", "A", "C", "G"],
        frets: [-1, -1, 0, 0, 1, 0],
        fingers: [0, 0, 0, 0, 1, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["suspended", "open", "funky"],
            styles: ["jazz", "funk", "fusion"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    d_dom11_v2: {
        id: "d_dom11_v2",
        name: "D Dominant 11",
        symbol: "D11",
        altSymbols: ["Ddom11"],
        root: "D",
        quality: "dominant11",
        voicingType: "partial",
        voicingDescription: "Dom11 voicing",
        intervals: ["1", "b7", "3", "11"],
        notes: ["D", "C", "F#", "G"],
        frets: [-1, 5, 4, 5, 5, 5],
        fingers: [0, 2, 1, 3, 3, 3],
        barre: { fret: 5, fromString: 1, toString: 3 },
        position: 4,
        difficulty: 4,
        categories: {
            moods: ["suspended", "open", "funky"],
            styles: ["jazz", "funk", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    d_dom11_v3: {
        id: "d_dom11_v3",
        name: "D Dominant 11",
        symbol: "D11",
        altSymbols: ["Ddom11"],
        root: "D",
        quality: "dominant11",
        voicingType: "barre",
        voicingDescription: "Dom11 barre voicing",
        intervals: ["1", "5", "b7", "3", "11"],
        notes: ["D", "A", "C", "F#", "G"],
        frets: [10, 10, 10, 10, 10, 10],
        fingers: [1, 1, 1, 1, 1, 1],
        barre: { fret: 10, fromString: 1, toString: 6 },
        position: 10,
        difficulty: 4,
        categories: {
            moods: ["suspended", "open", "funky"],
            styles: ["jazz", "funk", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // E11 voicings
    e_dom11_v1: {
        id: "e_dom11_v1",
        name: "E Dominant 11",
        symbol: "E11",
        altSymbols: ["Edom11"],
        root: "E",
        quality: "dominant11",
        voicingType: "open",
        voicingDescription: "Dom11 voicing",
        intervals: ["1", "5", "b7", "3", "11"],
        notes: ["E", "B", "D", "G#", "A"],
        frets: [0, 0, 0, 1, 0, 0],
        fingers: [0, 0, 0, 1, 0, 0],
        barre: null,
        position: 1,
        difficulty: 2,
        categories: {
            moods: ["suspended", "open", "funky"],
            styles: ["jazz", "funk", "fusion"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_dom11_v2: {
        id: "e_dom11_v2",
        name: "E Dominant 11",
        symbol: "E11",
        altSymbols: ["Edom11"],
        root: "E",
        quality: "dominant11",
        voicingType: "partial",
        voicingDescription: "Dom11 voicing",
        intervals: ["1", "b7", "3", "11"],
        notes: ["E", "D", "G#", "A"],
        frets: [-1, 7, 6, 7, 7, 7],
        fingers: [0, 2, 1, 3, 3, 3],
        barre: { fret: 7, fromString: 1, toString: 3 },
        position: 6,
        difficulty: 4,
        categories: {
            moods: ["suspended", "open", "funky"],
            styles: ["jazz", "funk", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // F11 voicings
    f_dom11_v1: {
        id: "f_dom11_v1",
        name: "F Dominant 11",
        symbol: "F11",
        altSymbols: ["Fdom11"],
        root: "F",
        quality: "dominant11",
        voicingType: "barre",
        voicingDescription: "Dom11 voicing",
        intervals: ["1", "5", "b7", "3", "11"],
        notes: ["F", "C", "Eb", "A", "Bb"],
        frets: [1, 1, 1, 1, 1, 1],
        fingers: [1, 1, 1, 1, 1, 1],
        barre: { fret: 1, fromString: 1, toString: 6 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["suspended", "open", "funky"],
            styles: ["jazz", "funk", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    f_dom11_v2: {
        id: "f_dom11_v2",
        name: "F Dominant 11",
        symbol: "F11",
        altSymbols: ["Fdom11"],
        root: "F",
        quality: "dominant11",
        voicingType: "partial",
        voicingDescription: "Dom11 voicing",
        intervals: ["1", "b7", "3", "11"],
        notes: ["F", "Eb", "A", "Bb"],
        frets: [-1, 8, 7, 8, 8, 8],
        fingers: [0, 2, 1, 3, 3, 3],
        barre: { fret: 8, fromString: 1, toString: 3 },
        position: 7,
        difficulty: 4,
        categories: {
            moods: ["suspended", "open", "funky"],
            styles: ["jazz", "funk", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // G11 voicings
    g_dom11_v1: {
        id: "g_dom11_v1",
        name: "G Dominant 11",
        symbol: "G11",
        altSymbols: ["Gdom11"],
        root: "G",
        quality: "dominant11",
        voicingType: "open",
        voicingDescription: "Dom11 voicing",
        intervals: ["1", "5", "b7", "3", "11"],
        notes: ["G", "D", "F", "B", "C"],
        frets: [3, 3, 0, 0, 1, 1],
        fingers: [3, 4, 0, 0, 1, 2],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["suspended", "open", "funky"],
            styles: ["jazz", "funk", "fusion"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    g_dom11_v2: {
        id: "g_dom11_v2",
        name: "G Dominant 11",
        symbol: "G11",
        altSymbols: ["Gdom11"],
        root: "G",
        quality: "dominant11",
        voicingType: "barre",
        voicingDescription: "Dom11 barre voicing",
        intervals: ["1", "5", "b7", "3", "11"],
        notes: ["G", "D", "F", "B", "C"],
        frets: [3, 3, 3, 3, 3, 3],
        fingers: [1, 1, 1, 1, 1, 1],
        barre: { fret: 3, fromString: 1, toString: 6 },
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["suspended", "open", "funky"],
            styles: ["jazz", "funk", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    g_dom11_v3: {
        id: "g_dom11_v3",
        name: "G Dominant 11",
        symbol: "G11",
        altSymbols: ["Gdom11"],
        root: "G",
        quality: "dominant11",
        voicingType: "partial",
        voicingDescription: "Dom11 voicing",
        intervals: ["1", "b7", "3", "11"],
        notes: ["G", "F", "B", "C"],
        frets: [-1, 10, 9, 10, 10, 10],
        fingers: [0, 2, 1, 3, 3, 3],
        barre: { fret: 10, fromString: 1, toString: 3 },
        position: 9,
        difficulty: 4,
        categories: {
            moods: ["suspended", "open", "funky"],
            styles: ["jazz", "funk", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // A11 voicings
    a_dom11_v1: {
        id: "a_dom11_v1",
        name: "A Dominant 11",
        symbol: "A11",
        altSymbols: ["Adom11"],
        root: "A",
        quality: "dominant11",
        voicingType: "open",
        voicingDescription: "Dom11 voicing",
        intervals: ["1", "5", "b7", "3", "11"],
        notes: ["A", "E", "G", "C#", "D"],
        frets: [-1, 0, 0, 0, 0, 0],
        fingers: [0, 0, 0, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 1,
        categories: {
            moods: ["suspended", "open", "funky"],
            styles: ["jazz", "funk", "fusion"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    a_dom11_v2: {
        id: "a_dom11_v2",
        name: "A Dominant 11",
        symbol: "A11",
        altSymbols: ["Adom11"],
        root: "A",
        quality: "dominant11",
        voicingType: "barre",
        voicingDescription: "Dom11 barre voicing",
        intervals: ["1", "5", "b7", "3", "11"],
        notes: ["A", "E", "G", "C#", "D"],
        frets: [5, 5, 5, 5, 5, 5],
        fingers: [1, 1, 1, 1, 1, 1],
        barre: { fret: 5, fromString: 1, toString: 6 },
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["suspended", "open", "funky"],
            styles: ["jazz", "funk", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    a_dom11_v3: {
        id: "a_dom11_v3",
        name: "A Dominant 11",
        symbol: "A11",
        altSymbols: ["Adom11"],
        root: "A",
        quality: "dominant11",
        voicingType: "partial",
        voicingDescription: "Dom11 voicing",
        intervals: ["1", "b7", "3", "11"],
        notes: ["A", "G", "C#", "D"],
        frets: [-1, 12, 11, 12, 12, 12],
        fingers: [0, 2, 1, 3, 3, 3],
        barre: { fret: 12, fromString: 1, toString: 3 },
        position: 11,
        difficulty: 4,
        categories: {
            moods: ["suspended", "open", "funky"],
            styles: ["jazz", "funk", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // Bb11 voicings
    bb_dom11_v1: {
        id: "bb_dom11_v1",
        name: "Bb Dominant 11",
        symbol: "Bb11",
        altSymbols: ["A#11", "Bbdom11"],
        root: "Bb",
        quality: "dominant11",
        voicingType: "barre",
        voicingDescription: "Dom11 voicing",
        intervals: ["1", "5", "b7", "3", "11"],
        notes: ["Bb", "F", "Ab", "D", "Eb"],
        frets: [6, 6, 6, 6, 6, 6],
        fingers: [1, 1, 1, 1, 1, 1],
        barre: { fret: 6, fromString: 1, toString: 6 },
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["suspended", "open", "funky"],
            styles: ["jazz", "funk", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    bb_dom11_v2: {
        id: "bb_dom11_v2",
        name: "Bb Dominant 11",
        symbol: "Bb11",
        altSymbols: ["A#11", "Bbdom11"],
        root: "Bb",
        quality: "dominant11",
        voicingType: "partial",
        voicingDescription: "Dom11 voicing",
        intervals: ["1", "b7", "3", "11"],
        notes: ["Bb", "Ab", "D", "Eb"],
        frets: [-1, 1, 0, 1, 1, 1],
        fingers: [0, 2, 0, 3, 3, 3],
        barre: { fret: 1, fromString: 1, toString: 3 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["suspended", "open", "funky"],
            styles: ["jazz", "funk", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // ===== DOMINANT 13 CHORDS =====

    // C Dominant 13
    c_dom13_v1: {
        id: "c_dom13_v1",
        name: "C Dominant 13",
        symbol: "C13",
        altSymbols: ["Cdom13"],
        root: "C",
        quality: "dominant13",
        voicingType: "partial",
        voicingDescription: "Dom13 voicing",
        intervals: ["1", "3", "b7", "9", "13"],
        notes: ["C", "E", "Bb", "D", "A"],
        frets: [-1, 3, 2, 3, 3, 5],
        fingers: [0, 2, 1, 3, 3, 4],
        barre: null,
        position: 3,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "rich", "jazzy"],
            styles: ["jazz", "big-band", "swing"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_dom13_v2: {
        id: "c_dom13_v2",
        name: "C Dominant 13",
        symbol: "C13",
        altSymbols: ["Cdom13"],
        root: "C",
        quality: "dominant13",
        voicingType: "rootless",
        voicingDescription: "Dom13 voicing",
        intervals: ["3", "b7", "9", "13"],
        notes: ["E", "Bb", "D", "A"],
        frets: [-1, -1, 2, 3, 3, 5],
        fingers: [0, 0, 1, 2, 3, 4],
        barre: null,
        position: 2,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "rich", "jazzy"],
            styles: ["jazz", "big-band", "swing"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_dom13_v3: {
        id: "c_dom13_v3",
        name: "C Dominant 13",
        symbol: "C13",
        altSymbols: ["Cdom13"],
        root: "C",
        quality: "dominant13",
        voicingType: "barre",
        voicingDescription: "Dom13 voicing",
        intervals: ["1", "3", "b7", "13"],
        notes: ["C", "E", "Bb", "A"],
        frets: [8, 7, 8, 8, 10, -1],
        fingers: [2, 1, 3, 3, 4, 0],
        barre: { fret: 8, fromString: 3, toString: 5 },
        position: 7,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "rich", "jazzy"],
            styles: ["jazz", "big-band", "swing"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // D Dominant 13
    d_dom13_v1: {
        id: "d_dom13_v1",
        name: "D Dominant 13",
        symbol: "D13",
        altSymbols: ["Ddom13"],
        root: "D",
        quality: "dominant13",
        voicingType: "partial",
        voicingDescription: "Dom13 voicing",
        intervals: ["1", "3", "b7", "9", "13"],
        notes: ["D", "F#", "C", "E", "B"],
        frets: [-1, 5, 4, 5, 5, 7],
        fingers: [0, 2, 1, 3, 3, 4],
        barre: null,
        position: 4,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "rich", "jazzy"],
            styles: ["jazz", "big-band", "swing"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_dom13_v2: {
        id: "d_dom13_v2",
        name: "D Dominant 13",
        symbol: "D13",
        altSymbols: ["Ddom13"],
        root: "D",
        quality: "dominant13",
        voicingType: "open",
        voicingDescription: "Dom13 voicing",
        intervals: ["1", "5", "b7", "3", "13"],
        notes: ["D", "A", "C", "F#", "B"],
        frets: [-1, -1, 0, 2, 1, 2],
        fingers: [0, 0, 0, 3, 1, 2],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "rich", "jazzy"],
            styles: ["jazz", "big-band", "swing"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    d_dom13_v3: {
        id: "d_dom13_v3",
        name: "D Dominant 13",
        symbol: "D13",
        altSymbols: ["Ddom13"],
        root: "D",
        quality: "dominant13",
        voicingType: "barre",
        voicingDescription: "Dom13 voicing",
        intervals: ["1", "3", "b7", "13"],
        notes: ["D", "F#", "C", "B"],
        frets: [10, 9, 10, 10, 12, -1],
        fingers: [2, 1, 3, 3, 4, 0],
        barre: { fret: 10, fromString: 3, toString: 5 },
        position: 9,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "rich", "jazzy"],
            styles: ["jazz", "big-band", "swing"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // E Dominant 13
    e_dom13_v1: {
        id: "e_dom13_v1",
        name: "E Dominant 13",
        symbol: "E13",
        altSymbols: ["Edom13"],
        root: "E",
        quality: "dominant13",
        voicingType: "open",
        voicingDescription: "Dom13 voicing",
        intervals: ["1", "3", "b7", "9", "13"],
        notes: ["E", "G#", "D", "F#", "C#"],
        frets: [0, 2, 0, 1, 2, 2],
        fingers: [0, 2, 0, 1, 3, 4],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "rich", "jazzy"],
            styles: ["jazz", "big-band", "swing"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_dom13_v2: {
        id: "e_dom13_v2",
        name: "E Dominant 13",
        symbol: "E13",
        altSymbols: ["Edom13"],
        root: "E",
        quality: "dominant13",
        voicingType: "partial",
        voicingDescription: "Dom13 voicing",
        intervals: ["1", "3", "b7", "13"],
        notes: ["E", "G#", "D", "C#"],
        frets: [0, 2, 0, 1, 2, -1],
        fingers: [0, 2, 0, 1, 3, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "rich", "jazzy"],
            styles: ["jazz", "big-band", "swing"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // F Dominant 13
    f_dom13_v1: {
        id: "f_dom13_v1",
        name: "F Dominant 13",
        symbol: "F13",
        altSymbols: ["Fdom13"],
        root: "F",
        quality: "dominant13",
        voicingType: "partial",
        voicingDescription: "Dom13 voicing",
        intervals: ["1", "3", "b7", "9", "13"],
        notes: ["F", "A", "Eb", "G", "D"],
        frets: [1, 0, 1, 2, 3, 3],
        fingers: [1, 0, 2, 3, 4, 4],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "rich", "jazzy"],
            styles: ["jazz", "big-band", "swing"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    f_dom13_v2: {
        id: "f_dom13_v2",
        name: "F Dominant 13",
        symbol: "F13",
        altSymbols: ["Fdom13"],
        root: "F",
        quality: "dominant13",
        voicingType: "barre",
        voicingDescription: "Dom13 voicing",
        intervals: ["1", "3", "b7", "13"],
        notes: ["F", "A", "Eb", "D"],
        frets: [1, 0, 1, 0, 3, -1],
        fingers: [1, 0, 2, 0, 4, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "rich", "jazzy"],
            styles: ["jazz", "big-band", "swing"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // G Dominant 13
    g_dom13_v1: {
        id: "g_dom13_v1",
        name: "G Dominant 13",
        symbol: "G13",
        altSymbols: ["Gdom13"],
        root: "G",
        quality: "dominant13",
        voicingType: "open",
        voicingDescription: "Dom13 voicing",
        intervals: ["1", "3", "b7", "9", "13"],
        notes: ["G", "B", "F", "A", "E"],
        frets: [3, 2, 3, 0, 0, 0],
        fingers: [2, 1, 3, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "rich", "jazzy"],
            styles: ["jazz", "big-band", "swing"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    g_dom13_v2: {
        id: "g_dom13_v2",
        name: "G Dominant 13",
        symbol: "G13",
        altSymbols: ["Gdom13"],
        root: "G",
        quality: "dominant13",
        voicingType: "partial",
        voicingDescription: "Dom13 voicing",
        intervals: ["1", "3", "b7", "13"],
        notes: ["G", "B", "F", "E"],
        frets: [3, 2, 3, 0, 0, -1],
        fingers: [2, 1, 3, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "rich", "jazzy"],
            styles: ["jazz", "big-band", "swing"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    g_dom13_v3: {
        id: "g_dom13_v3",
        name: "G Dominant 13",
        symbol: "G13",
        altSymbols: ["Gdom13"],
        root: "G",
        quality: "dominant13",
        voicingType: "barre",
        voicingDescription: "Dom13 voicing",
        intervals: ["1", "3", "b7", "13"],
        notes: ["G", "B", "F", "E"],
        frets: [3, 2, 3, 4, 5, -1],
        fingers: [2, 1, 3, 4, 4, 0],
        barre: null,
        position: 2,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "rich", "jazzy"],
            styles: ["jazz", "big-band", "swing"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // A Dominant 13
    a_dom13_v1: {
        id: "a_dom13_v1",
        name: "A Dominant 13",
        symbol: "A13",
        altSymbols: ["Adom13"],
        root: "A",
        quality: "dominant13",
        voicingType: "open",
        voicingDescription: "Dom13 voicing",
        intervals: ["1", "3", "b7", "9", "13"],
        notes: ["A", "C#", "G", "B", "F#"],
        frets: [-1, 0, 2, 0, 2, 2],
        fingers: [0, 0, 2, 0, 3, 4],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "rich", "jazzy"],
            styles: ["jazz", "big-band", "swing"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    a_dom13_v2: {
        id: "a_dom13_v2",
        name: "A Dominant 13",
        symbol: "A13",
        altSymbols: ["Adom13"],
        root: "A",
        quality: "dominant13",
        voicingType: "partial",
        voicingDescription: "Dom13 voicing",
        intervals: ["1", "3", "b7", "13"],
        notes: ["A", "C#", "G", "F#"],
        frets: [5, 4, 5, 5, 7, -1],
        fingers: [2, 1, 3, 3, 4, 0],
        barre: { fret: 5, fromString: 3, toString: 5 },
        position: 4,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "rich", "jazzy"],
            styles: ["jazz", "big-band", "swing"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // Bb Dominant 13
    bb_dom13_v1: {
        id: "bb_dom13_v1",
        name: "Bb Dominant 13",
        symbol: "Bb13",
        altSymbols: ["Bbdom13", "A#13"],
        root: "Bb",
        quality: "dominant13",
        voicingType: "partial",
        voicingDescription: "Dom13 voicing",
        intervals: ["1", "3", "b7", "9", "13"],
        notes: ["Bb", "D", "Ab", "C", "G"],
        frets: [6, 5, 6, 6, 8, -1],
        fingers: [2, 1, 3, 3, 4, 0],
        barre: { fret: 6, fromString: 3, toString: 5 },
        position: 5,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "rich", "jazzy"],
            styles: ["jazz", "big-band", "swing"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    bb_dom13_v2: {
        id: "bb_dom13_v2",
        name: "Bb Dominant 13",
        symbol: "Bb13",
        altSymbols: ["Bbdom13", "A#13"],
        root: "Bb",
        quality: "dominant13",
        voicingType: "rootless",
        voicingDescription: "Dom13 voicing",
        intervals: ["3", "b7", "9", "13"],
        notes: ["D", "Ab", "C", "G"],
        frets: [-1, -1, 6, 6, 6, 6],
        fingers: [0, 0, 1, 1, 1, 1],
        barre: { fret: 6, fromString: 1, toString: 4 },
        position: 6,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "rich", "jazzy"],
            styles: ["jazz", "big-band", "swing"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // Eb Dominant 13
    eb_dom13_v1: {
        id: "eb_dom13_v1",
        name: "Eb Dominant 13",
        symbol: "Eb13",
        altSymbols: ["Ebdom13", "D#13"],
        root: "Eb",
        quality: "dominant13",
        voicingType: "partial",
        voicingDescription: "Dom13 voicing",
        intervals: ["1", "3", "b7", "13"],
        notes: ["Eb", "G", "Db", "C"],
        frets: [-1, 6, 5, 6, 6, 8],
        fingers: [0, 2, 1, 3, 3, 4],
        barre: null,
        position: 5,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "rich", "jazzy"],
            styles: ["jazz", "big-band", "swing"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    eb_dom13_v2: {
        id: "eb_dom13_v2",
        name: "Eb Dominant 13",
        symbol: "Eb13",
        altSymbols: ["Ebdom13", "D#13"],
        root: "Eb",
        quality: "dominant13",
        voicingType: "barre",
        voicingDescription: "Dom13 voicing",
        intervals: ["1", "3", "b7", "13"],
        notes: ["Eb", "G", "Db", "C"],
        frets: [-1, -1, 1, 3, 1, 3],
        fingers: [0, 0, 1, 3, 2, 4],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "rich", "jazzy"],
            styles: ["jazz", "big-band", "swing"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // ===== MAJOR 13 CHORDS =====

    // C Major 13
    c_maj13_v1: {
        id: "c_maj13_v1",
        name: "C Major 13",
        symbol: "Cmaj13",
        altSymbols: ["CM13", "CΔ13"],
        root: "C",
        quality: "major13",
        voicingType: "partial",
        voicingDescription: "Maj13 voicing",
        intervals: ["1", "3", "7", "9", "13"],
        notes: ["C", "E", "B", "D", "A"],
        frets: [-1, 3, 2, 4, 3, 5],
        fingers: [0, 2, 1, 3, 2, 4],
        barre: null,
        position: 2,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "lush", "dreamy"],
            styles: ["jazz", "big-band", "bossa-nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_maj13_v2: {
        id: "c_maj13_v2",
        name: "C Major 13",
        symbol: "Cmaj13",
        altSymbols: ["CM13", "CΔ13"],
        root: "C",
        quality: "major13",
        voicingType: "open",
        voicingDescription: "Maj13 voicing",
        intervals: ["1", "3", "7", "13"],
        notes: ["C", "E", "B", "A"],
        frets: [-1, 3, 2, 0, 0, 0],
        fingers: [0, 3, 2, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "lush", "dreamy"],
            styles: ["jazz", "big-band", "bossa-nova"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // D Major 13
    d_maj13_v1: {
        id: "d_maj13_v1",
        name: "D Major 13",
        symbol: "Dmaj13",
        altSymbols: ["DM13", "DΔ13"],
        root: "D",
        quality: "major13",
        voicingType: "open",
        voicingDescription: "Maj13 voicing",
        intervals: ["1", "5", "7", "3", "13"],
        notes: ["D", "A", "C#", "F#", "B"],
        frets: [-1, -1, 0, 2, 2, 2],
        fingers: [0, 0, 0, 1, 1, 1],
        barre: { fret: 2, fromString: 1, toString: 3 },
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "lush", "dreamy"],
            styles: ["jazz", "big-band", "bossa-nova"],
            isOpenChord: true,
            isBarreChord: true
        }
    },
    d_maj13_v2: {
        id: "d_maj13_v2",
        name: "D Major 13",
        symbol: "Dmaj13",
        altSymbols: ["DM13", "DΔ13"],
        root: "D",
        quality: "major13",
        voicingType: "partial",
        voicingDescription: "Maj13 voicing",
        intervals: ["1", "3", "7", "9", "13"],
        notes: ["D", "F#", "C#", "E", "B"],
        frets: [-1, 5, 4, 6, 5, 7],
        fingers: [0, 2, 1, 3, 2, 4],
        barre: null,
        position: 4,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "lush", "dreamy"],
            styles: ["jazz", "big-band", "bossa-nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // E Major 13
    e_maj13_v1: {
        id: "e_maj13_v1",
        name: "E Major 13",
        symbol: "Emaj13",
        altSymbols: ["EM13", "EΔ13"],
        root: "E",
        quality: "major13",
        voicingType: "open",
        voicingDescription: "Maj13 voicing",
        intervals: ["1", "3", "7", "9", "13"],
        notes: ["E", "G#", "D#", "F#", "C#"],
        frets: [0, 2, 1, 1, 2, 2],
        fingers: [0, 3, 1, 2, 4, 4],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "lush", "dreamy"],
            styles: ["jazz", "big-band", "bossa-nova"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_maj13_v2: {
        id: "e_maj13_v2",
        name: "E Major 13",
        symbol: "Emaj13",
        altSymbols: ["EM13", "EΔ13"],
        root: "E",
        quality: "major13",
        voicingType: "partial",
        voicingDescription: "Maj13 voicing",
        intervals: ["1", "3", "7", "13"],
        notes: ["E", "G#", "D#", "C#"],
        frets: [0, 2, 1, 1, 2, -1],
        fingers: [0, 3, 1, 2, 4, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "lush", "dreamy"],
            styles: ["jazz", "big-band", "bossa-nova"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // F Major 13
    f_maj13_v1: {
        id: "f_maj13_v1",
        name: "F Major 13",
        symbol: "Fmaj13",
        altSymbols: ["FM13", "FΔ13"],
        root: "F",
        quality: "major13",
        voicingType: "partial",
        voicingDescription: "Maj13 voicing",
        intervals: ["1", "3", "7", "9", "13"],
        notes: ["F", "A", "E", "G", "D"],
        frets: [1, 0, 2, 0, 3, 0],
        fingers: [1, 0, 2, 0, 3, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "lush", "dreamy"],
            styles: ["jazz", "big-band", "bossa-nova"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    f_maj13_v2: {
        id: "f_maj13_v2",
        name: "F Major 13",
        symbol: "Fmaj13",
        altSymbols: ["FM13", "FΔ13"],
        root: "F",
        quality: "major13",
        voicingType: "barre",
        voicingDescription: "Maj13 voicing",
        intervals: ["1", "3", "7", "13"],
        notes: ["F", "A", "E", "D"],
        frets: [1, 0, 2, 2, 3, -1],
        fingers: [1, 0, 2, 3, 4, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "lush", "dreamy"],
            styles: ["jazz", "big-band", "bossa-nova"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // G Major 13
    g_maj13_v1: {
        id: "g_maj13_v1",
        name: "G Major 13",
        symbol: "Gmaj13",
        altSymbols: ["GM13", "GΔ13"],
        root: "G",
        quality: "major13",
        voicingType: "open",
        voicingDescription: "Maj13 voicing",
        intervals: ["1", "3", "7", "9", "13"],
        notes: ["G", "B", "F#", "A", "E"],
        frets: [3, 2, 0, 0, 0, 0],
        fingers: [3, 2, 0, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "lush", "dreamy"],
            styles: ["jazz", "big-band", "bossa-nova"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    g_maj13_v2: {
        id: "g_maj13_v2",
        name: "G Major 13",
        symbol: "Gmaj13",
        altSymbols: ["GM13", "GΔ13"],
        root: "G",
        quality: "major13",
        voicingType: "partial",
        voicingDescription: "Maj13 voicing",
        intervals: ["1", "3", "7", "13"],
        notes: ["G", "B", "F#", "E"],
        frets: [3, 2, 4, 4, 5, -1],
        fingers: [2, 1, 3, 3, 4, 0],
        barre: { fret: 4, fromString: 2, toString: 3 },
        position: 2,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "lush", "dreamy"],
            styles: ["jazz", "big-band", "bossa-nova"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_maj13_v3: {
        id: "g_maj13_v3",
        name: "G Major 13",
        symbol: "Gmaj13",
        altSymbols: ["GM13", "GΔ13"],
        root: "G",
        quality: "major13",
        voicingType: "rootless",
        voicingDescription: "Maj13 voicing",
        intervals: ["3", "7", "9", "13"],
        notes: ["B", "F#", "A", "E"],
        frets: [-1, 2, 4, 4, 5, 0],
        fingers: [0, 1, 2, 3, 4, 0],
        barre: null,
        position: 2,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "lush", "dreamy"],
            styles: ["jazz", "big-band", "bossa-nova"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // A Major 13
    a_maj13_v1: {
        id: "a_maj13_v1",
        name: "A Major 13",
        symbol: "Amaj13",
        altSymbols: ["AM13", "AΔ13"],
        root: "A",
        quality: "major13",
        voicingType: "open",
        voicingDescription: "Maj13 voicing",
        intervals: ["1", "3", "7", "9", "13"],
        notes: ["A", "C#", "G#", "B", "F#"],
        frets: [-1, 0, 1, 1, 2, 2],
        fingers: [0, 0, 1, 1, 2, 3],
        barre: { fret: 1, fromString: 2, toString: 3 },
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "lush", "dreamy"],
            styles: ["jazz", "big-band", "bossa-nova"],
            isOpenChord: true,
            isBarreChord: true
        }
    },
    a_maj13_v2: {
        id: "a_maj13_v2",
        name: "A Major 13",
        symbol: "Amaj13",
        altSymbols: ["AM13", "AΔ13"],
        root: "A",
        quality: "major13",
        voicingType: "partial",
        voicingDescription: "Maj13 voicing",
        intervals: ["1", "3", "7", "13"],
        notes: ["A", "C#", "G#", "F#"],
        frets: [5, 4, 6, 6, 7, -1],
        fingers: [2, 1, 3, 3, 4, 0],
        barre: { fret: 6, fromString: 2, toString: 3 },
        position: 4,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "lush", "dreamy"],
            styles: ["jazz", "big-band", "bossa-nova"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // Bb Major 13
    bb_maj13_v1: {
        id: "bb_maj13_v1",
        name: "Bb Major 13",
        symbol: "Bbmaj13",
        altSymbols: ["BbM13", "BbΔ13", "A#maj13"],
        root: "Bb",
        quality: "major13",
        voicingType: "partial",
        voicingDescription: "Maj13 voicing",
        intervals: ["1", "3", "7", "9", "13"],
        notes: ["Bb", "D", "A", "C", "G"],
        frets: [6, 5, 7, 7, 8, -1],
        fingers: [2, 1, 3, 3, 4, 0],
        barre: { fret: 7, fromString: 2, toString: 3 },
        position: 5,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "lush", "dreamy"],
            styles: ["jazz", "big-band", "bossa-nova"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    bb_maj13_v2: {
        id: "bb_maj13_v2",
        name: "Bb Major 13",
        symbol: "Bbmaj13",
        altSymbols: ["BbM13", "BbΔ13", "A#maj13"],
        root: "Bb",
        quality: "major13",
        voicingType: "rootless",
        voicingDescription: "Maj13 voicing",
        intervals: ["3", "7", "9", "13"],
        notes: ["D", "A", "C", "G"],
        frets: [-1, -1, 7, 7, 8, 6],
        fingers: [0, 0, 2, 2, 3, 1],
        barre: { fret: 7, fromString: 2, toString: 3 },
        position: 6,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "lush", "dreamy"],
            styles: ["jazz", "big-band", "bossa-nova"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // ===== MINOR 13 CHORDS =====

    // C Minor 13
    c_min13_v1: {
        id: "c_min13_v1",
        name: "C Minor 13",
        symbol: "Cm13",
        altSymbols: ["Cmin13", "C-13"],
        root: "C",
        quality: "minor13",
        voicingType: "partial",
        voicingDescription: "Min13 voicing",
        intervals: ["1", "b3", "b7", "9", "13"],
        notes: ["C", "Eb", "Bb", "D", "A"],
        frets: [-1, 3, 1, 3, 3, 5],
        fingers: [0, 2, 1, 3, 3, 4],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "melancholic", "rich"],
            styles: ["jazz", "big-band", "neo-soul"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_min13_v2: {
        id: "c_min13_v2",
        name: "C Minor 13",
        symbol: "Cm13",
        altSymbols: ["Cmin13", "C-13"],
        root: "C",
        quality: "minor13",
        voicingType: "barre",
        voicingDescription: "Min13 voicing",
        intervals: ["1", "b3", "b7", "13"],
        notes: ["C", "Eb", "Bb", "A"],
        frets: [8, 6, 8, 8, 10, -1],
        fingers: [2, 1, 3, 3, 4, 0],
        barre: { fret: 8, fromString: 3, toString: 5 },
        position: 6,
        difficulty: 5,
        categories: {
            moods: ["sophisticated", "melancholic", "rich"],
            styles: ["jazz", "big-band", "neo-soul"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // D Minor 13
    d_min13_v1: {
        id: "d_min13_v1",
        name: "D Minor 13",
        symbol: "Dm13",
        altSymbols: ["Dmin13", "D-13"],
        root: "D",
        quality: "minor13",
        voicingType: "open",
        voicingDescription: "Min13 voicing",
        intervals: ["1", "5", "b7", "b3", "13"],
        notes: ["D", "A", "C", "F", "B"],
        frets: [-1, -1, 0, 2, 1, 1],
        fingers: [0, 0, 0, 3, 1, 2],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "melancholic", "rich"],
            styles: ["jazz", "big-band", "neo-soul"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    d_min13_v2: {
        id: "d_min13_v2",
        name: "D Minor 13",
        symbol: "Dm13",
        altSymbols: ["Dmin13", "D-13"],
        root: "D",
        quality: "minor13",
        voicingType: "partial",
        voicingDescription: "Min13 voicing",
        intervals: ["1", "b3", "b7", "9", "13"],
        notes: ["D", "F", "C", "E", "B"],
        frets: [-1, 5, 3, 5, 5, 7],
        fingers: [0, 2, 1, 3, 3, 4],
        barre: null,
        position: 3,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "melancholic", "rich"],
            styles: ["jazz", "big-band", "neo-soul"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // E Minor 13
    e_min13_v1: {
        id: "e_min13_v1",
        name: "E Minor 13",
        symbol: "Em13",
        altSymbols: ["Emin13", "E-13"],
        root: "E",
        quality: "minor13",
        voicingType: "open",
        voicingDescription: "Min13 voicing",
        intervals: ["1", "b3", "b7", "9", "13"],
        notes: ["E", "G", "D", "F#", "C#"],
        frets: [0, 2, 0, 0, 2, 2],
        fingers: [0, 2, 0, 0, 3, 4],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "melancholic", "rich"],
            styles: ["jazz", "big-band", "neo-soul"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_min13_v2: {
        id: "e_min13_v2",
        name: "E Minor 13",
        symbol: "Em13",
        altSymbols: ["Emin13", "E-13"],
        root: "E",
        quality: "minor13",
        voicingType: "partial",
        voicingDescription: "Min13 voicing",
        intervals: ["1", "b3", "b7", "13"],
        notes: ["E", "G", "D", "C#"],
        frets: [0, 2, 0, 0, 2, -1],
        fingers: [0, 2, 0, 0, 3, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "melancholic", "rich"],
            styles: ["jazz", "big-band", "neo-soul"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // A Minor 13
    a_min13_v1: {
        id: "a_min13_v1",
        name: "A Minor 13",
        symbol: "Am13",
        altSymbols: ["Amin13", "A-13"],
        root: "A",
        quality: "minor13",
        voicingType: "open",
        voicingDescription: "Min13 voicing",
        intervals: ["1", "b3", "b7", "9", "13"],
        notes: ["A", "C", "G", "B", "F#"],
        frets: [-1, 0, 2, 0, 1, 2],
        fingers: [0, 0, 3, 0, 1, 2],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "melancholic", "rich"],
            styles: ["jazz", "big-band", "neo-soul"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    a_min13_v2: {
        id: "a_min13_v2",
        name: "A Minor 13",
        symbol: "Am13",
        altSymbols: ["Amin13", "A-13"],
        root: "A",
        quality: "minor13",
        voicingType: "partial",
        voicingDescription: "Min13 voicing",
        intervals: ["1", "b3", "b7", "13"],
        notes: ["A", "C", "G", "F#"],
        frets: [5, 3, 5, 5, 7, -1],
        fingers: [2, 1, 3, 3, 4, 0],
        barre: { fret: 5, fromString: 3, toString: 5 },
        position: 3,
        difficulty: 5,
        categories: {
            moods: ["sophisticated", "melancholic", "rich"],
            styles: ["jazz", "big-band", "neo-soul"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    a_min13_v3: {
        id: "a_min13_v3",
        name: "A Minor 13",
        symbol: "Am13",
        altSymbols: ["Amin13", "A-13"],
        root: "A",
        quality: "minor13",
        voicingType: "rootless",
        voicingDescription: "Min13 voicing",
        intervals: ["b3", "b7", "9", "13"],
        notes: ["C", "G", "B", "F#"],
        frets: [-1, 3, 5, 5, 7, 5],
        fingers: [0, 1, 2, 2, 4, 3],
        barre: { fret: 5, fromString: 1, toString: 3 },
        position: 3,
        difficulty: 5,
        categories: {
            moods: ["sophisticated", "melancholic", "rich"],
            styles: ["jazz", "big-band", "neo-soul"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // G Minor 13
    g_min13_v1: {
        id: "g_min13_v1",
        name: "G Minor 13",
        symbol: "Gm13",
        altSymbols: ["Gmin13", "G-13"],
        root: "G",
        quality: "minor13",
        voicingType: "partial",
        voicingDescription: "Min13 voicing",
        intervals: ["1", "b3", "b7", "9", "13"],
        notes: ["G", "Bb", "F", "A", "E"],
        frets: [3, 1, 3, 3, 5, 0],
        fingers: [2, 1, 3, 3, 4, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "melancholic", "rich"],
            styles: ["jazz", "big-band", "neo-soul"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    g_min13_v2: {
        id: "g_min13_v2",
        name: "G Minor 13",
        symbol: "Gm13",
        altSymbols: ["Gmin13", "G-13"],
        root: "G",
        quality: "minor13",
        voicingType: "barre",
        voicingDescription: "Min13 voicing",
        intervals: ["1", "b3", "b7", "13"],
        notes: ["G", "Bb", "F", "E"],
        frets: [3, 1, 3, 3, 5, -1],
        fingers: [2, 1, 3, 3, 4, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "melancholic", "rich"],
            styles: ["jazz", "big-band", "neo-soul"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // ===== MINOR MAJOR 7 CHORDS (minMaj7) =====
    // The "James Bond" mysterious sound - minor with major 7th

    // C Minor Major 7
    c_minmaj7_v1: {
        id: "c_minmaj7_v1",
        name: "C Minor Major 7",
        symbol: "CmMaj7",
        altSymbols: ["Cm(maj7)", "CminMaj7", "C-Δ7"],
        root: "C",
        quality: "minorMajor7",
        voicingType: "partial",
        voicingDescription: "minMaj7 voicing",
        intervals: ["1", "b3", "5", "7"],
        notes: ["C", "Eb", "G", "B"],
        frets: [-1, 3, 1, 4, 4, 3],
        fingers: [0, 2, 1, 4, 4, 3],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["mysterious", "tense", "cinematic"],
            styles: ["jazz", "film-noir", "spy"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_minmaj7_v2: {
        id: "c_minmaj7_v2",
        name: "C Minor Major 7",
        symbol: "CmMaj7",
        altSymbols: ["Cm(maj7)", "CminMaj7", "C-Δ7"],
        root: "C",
        quality: "minorMajor7",
        voicingType: "barre",
        voicingDescription: "minMaj7 voicing",
        intervals: ["1", "b3", "5", "7"],
        notes: ["C", "Eb", "G", "B"],
        frets: [8, 10, 9, 8, 8, -1],
        fingers: [1, 4, 3, 2, 1, 0],
        barre: { fret: 8, fromString: 3, toString: 6 },
        position: 8,
        difficulty: 4,
        categories: {
            moods: ["mysterious", "tense", "cinematic"],
            styles: ["jazz", "film-noir", "spy"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // D Minor Major 7
    d_minmaj7_v1: {
        id: "d_minmaj7_v1",
        name: "D Minor Major 7",
        symbol: "DmMaj7",
        altSymbols: ["Dm(maj7)", "DminMaj7", "D-Δ7"],
        root: "D",
        quality: "minorMajor7",
        voicingType: "open",
        voicingDescription: "minMaj7 voicing",
        intervals: ["1", "5", "7", "b3"],
        notes: ["D", "A", "C#", "F"],
        frets: [-1, -1, 0, 2, 2, 1],
        fingers: [0, 0, 0, 2, 3, 1],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["mysterious", "tense", "cinematic"],
            styles: ["jazz", "film-noir", "spy"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    d_minmaj7_v2: {
        id: "d_minmaj7_v2",
        name: "D Minor Major 7",
        symbol: "DmMaj7",
        altSymbols: ["Dm(maj7)", "DminMaj7", "D-Δ7"],
        root: "D",
        quality: "minorMajor7",
        voicingType: "partial",
        voicingDescription: "minMaj7 voicing",
        intervals: ["1", "b3", "5", "7"],
        notes: ["D", "F", "A", "C#"],
        frets: [-1, 5, 3, 6, 6, 5],
        fingers: [0, 2, 1, 4, 4, 3],
        barre: null,
        position: 3,
        difficulty: 4,
        categories: {
            moods: ["mysterious", "tense", "cinematic"],
            styles: ["jazz", "film-noir", "spy"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // E Minor Major 7
    e_minmaj7_v1: {
        id: "e_minmaj7_v1",
        name: "E Minor Major 7",
        symbol: "EmMaj7",
        altSymbols: ["Em(maj7)", "EminMaj7", "E-Δ7"],
        root: "E",
        quality: "minorMajor7",
        voicingType: "open",
        voicingDescription: "minMaj7 voicing",
        intervals: ["1", "5", "7", "b3", "5"],
        notes: ["E", "B", "D#", "G", "B"],
        frets: [0, 2, 1, 0, 0, 0],
        fingers: [0, 2, 1, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["mysterious", "tense", "cinematic"],
            styles: ["jazz", "film-noir", "spy"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_minmaj7_v2: {
        id: "e_minmaj7_v2",
        name: "E Minor Major 7",
        symbol: "EmMaj7",
        altSymbols: ["Em(maj7)", "EminMaj7", "E-Δ7"],
        root: "E",
        quality: "minorMajor7",
        voicingType: "partial",
        voicingDescription: "minMaj7 voicing",
        intervals: ["1", "b3", "5", "7"],
        notes: ["E", "G", "B", "D#"],
        frets: [0, 2, 1, 0, 4, -1],
        fingers: [0, 2, 1, 0, 4, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["mysterious", "tense", "cinematic"],
            styles: ["jazz", "film-noir", "spy"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_minmaj7_v3: {
        id: "e_minmaj7_v3",
        name: "E Minor Major 7",
        symbol: "EmMaj7",
        altSymbols: ["Em(maj7)", "EminMaj7", "E-Δ7"],
        root: "E",
        quality: "minorMajor7",
        voicingType: "barre",
        voicingDescription: "minMaj7 voicing",
        intervals: ["1", "5", "7", "b3"],
        notes: ["E", "B", "D#", "G"],
        frets: [-1, 7, 5, 8, 8, 7],
        fingers: [0, 2, 1, 4, 4, 3],
        barre: null,
        position: 5,
        difficulty: 4,
        categories: {
            moods: ["mysterious", "tense", "cinematic"],
            styles: ["jazz", "film-noir", "spy"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // F Minor Major 7
    f_minmaj7_v1: {
        id: "f_minmaj7_v1",
        name: "F Minor Major 7",
        symbol: "FmMaj7",
        altSymbols: ["Fm(maj7)", "FminMaj7", "F-Δ7"],
        root: "F",
        quality: "minorMajor7",
        voicingType: "barre",
        voicingDescription: "minMaj7 voicing",
        intervals: ["1", "5", "7", "b3", "5"],
        notes: ["F", "C", "E", "Ab", "C"],
        frets: [1, 3, 2, 1, 1, 1],
        fingers: [1, 3, 2, 1, 1, 1],
        barre: { fret: 1, fromString: 1, toString: 6 },
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["mysterious", "tense", "cinematic"],
            styles: ["jazz", "film-noir", "spy"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    f_minmaj7_v2: {
        id: "f_minmaj7_v2",
        name: "F Minor Major 7",
        symbol: "FmMaj7",
        altSymbols: ["Fm(maj7)", "FminMaj7", "F-Δ7"],
        root: "F",
        quality: "minorMajor7",
        voicingType: "partial",
        voicingDescription: "minMaj7 voicing",
        intervals: ["1", "b3", "5", "7"],
        notes: ["F", "Ab", "C", "E"],
        frets: [1, -1, 2, 1, 1, 0],
        fingers: [1, 0, 3, 2, 2, 0],
        barre: { fret: 1, fromString: 2, toString: 4 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["mysterious", "tense", "cinematic"],
            styles: ["jazz", "film-noir", "spy"],
            isOpenChord: true,
            isBarreChord: true
        }
    },

    // G Minor Major 7
    g_minmaj7_v1: {
        id: "g_minmaj7_v1",
        name: "G Minor Major 7",
        symbol: "GmMaj7",
        altSymbols: ["Gm(maj7)", "GminMaj7", "G-Δ7"],
        root: "G",
        quality: "minorMajor7",
        voicingType: "barre",
        voicingDescription: "minMaj7 voicing",
        intervals: ["1", "5", "7", "b3", "5"],
        notes: ["G", "D", "F#", "Bb", "D"],
        frets: [3, 5, 4, 3, 3, 3],
        fingers: [1, 3, 2, 1, 1, 1],
        barre: { fret: 3, fromString: 1, toString: 6 },
        position: 3,
        difficulty: 4,
        categories: {
            moods: ["mysterious", "tense", "cinematic"],
            styles: ["jazz", "film-noir", "spy"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    g_minmaj7_v2: {
        id: "g_minmaj7_v2",
        name: "G Minor Major 7",
        symbol: "GmMaj7",
        altSymbols: ["Gm(maj7)", "GminMaj7", "G-Δ7"],
        root: "G",
        quality: "minorMajor7",
        voicingType: "partial",
        voicingDescription: "minMaj7 voicing",
        intervals: ["1", "b3", "7", "5"],
        notes: ["G", "Bb", "F#", "D"],
        frets: [3, -1, 4, 3, 3, 2],
        fingers: [2, 0, 4, 3, 3, 1],
        barre: { fret: 3, fromString: 2, toString: 4 },
        position: 2,
        difficulty: 4,
        categories: {
            moods: ["mysterious", "tense", "cinematic"],
            styles: ["jazz", "film-noir", "spy"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // A Minor Major 7
    a_minmaj7_v1: {
        id: "a_minmaj7_v1",
        name: "A Minor Major 7",
        symbol: "AmMaj7",
        altSymbols: ["Am(maj7)", "AminMaj7", "A-Δ7"],
        root: "A",
        quality: "minorMajor7",
        voicingType: "open",
        voicingDescription: "minMaj7 voicing",
        intervals: ["1", "5", "7", "b3", "5"],
        notes: ["A", "E", "G#", "C", "E"],
        frets: [-1, 0, 2, 1, 1, 0],
        fingers: [0, 0, 3, 1, 2, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["mysterious", "tense", "cinematic"],
            styles: ["jazz", "film-noir", "spy"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    a_minmaj7_v2: {
        id: "a_minmaj7_v2",
        name: "A Minor Major 7",
        symbol: "AmMaj7",
        altSymbols: ["Am(maj7)", "AminMaj7", "A-Δ7"],
        root: "A",
        quality: "minorMajor7",
        voicingType: "barre",
        voicingDescription: "minMaj7 voicing",
        intervals: ["1", "5", "7", "b3", "5"],
        notes: ["A", "E", "G#", "C", "E"],
        frets: [5, 7, 6, 5, 5, 5],
        fingers: [1, 3, 2, 1, 1, 1],
        barre: { fret: 5, fromString: 1, toString: 6 },
        position: 5,
        difficulty: 4,
        categories: {
            moods: ["mysterious", "tense", "cinematic"],
            styles: ["jazz", "film-noir", "spy"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    a_minmaj7_v3: {
        id: "a_minmaj7_v3",
        name: "A Minor Major 7",
        symbol: "AmMaj7",
        altSymbols: ["Am(maj7)", "AminMaj7", "A-Δ7"],
        root: "A",
        quality: "minorMajor7",
        voicingType: "partial",
        voicingDescription: "minMaj7 voicing",
        intervals: ["1", "b3", "5", "7"],
        notes: ["A", "C", "E", "G#"],
        frets: [-1, 0, 2, 1, 1, 4],
        fingers: [0, 0, 3, 1, 2, 4],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["mysterious", "tense", "cinematic"],
            styles: ["jazz", "film-noir", "spy"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // B Minor Major 7
    b_minmaj7_v1: {
        id: "b_minmaj7_v1",
        name: "B Minor Major 7",
        symbol: "BmMaj7",
        altSymbols: ["Bm(maj7)", "BminMaj7", "B-Δ7"],
        root: "B",
        quality: "minorMajor7",
        voicingType: "barre",
        voicingDescription: "minMaj7 voicing",
        intervals: ["1", "5", "7", "b3", "5"],
        notes: ["B", "F#", "A#", "D", "F#"],
        frets: [7, 9, 8, 7, 7, 7],
        fingers: [1, 3, 2, 1, 1, 1],
        barre: { fret: 7, fromString: 1, toString: 6 },
        position: 7,
        difficulty: 4,
        categories: {
            moods: ["mysterious", "tense", "cinematic"],
            styles: ["jazz", "film-noir", "spy"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    b_minmaj7_v2: {
        id: "b_minmaj7_v2",
        name: "B Minor Major 7",
        symbol: "BmMaj7",
        altSymbols: ["Bm(maj7)", "BminMaj7", "B-Δ7"],
        root: "B",
        quality: "minorMajor7",
        voicingType: "partial",
        voicingDescription: "minMaj7 voicing",
        intervals: ["1", "b3", "5", "7"],
        notes: ["B", "D", "F#", "A#"],
        frets: [-1, 2, 4, 3, 3, 2],
        fingers: [0, 1, 4, 3, 2, 1],
        barre: { fret: 2, fromString: 1, toString: 5 },
        position: 2,
        difficulty: 4,
        categories: {
            moods: ["mysterious", "tense", "cinematic"],
            styles: ["jazz", "film-noir", "spy"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // Bb Minor Major 7
    bb_minmaj7_v1: {
        id: "bb_minmaj7_v1",
        name: "Bb Minor Major 7",
        symbol: "BbmMaj7",
        altSymbols: ["Bbm(maj7)", "BbminMaj7", "Bb-Δ7", "A#mMaj7"],
        root: "Bb",
        quality: "minorMajor7",
        voicingType: "barre",
        voicingDescription: "minMaj7 voicing",
        intervals: ["1", "5", "7", "b3", "5"],
        notes: ["Bb", "F", "A", "Db", "F"],
        frets: [6, 8, 7, 6, 6, 6],
        fingers: [1, 3, 2, 1, 1, 1],
        barre: { fret: 6, fromString: 1, toString: 6 },
        position: 6,
        difficulty: 4,
        categories: {
            moods: ["mysterious", "tense", "cinematic"],
            styles: ["jazz", "film-noir", "spy"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    bb_minmaj7_v2: {
        id: "bb_minmaj7_v2",
        name: "Bb Minor Major 7",
        symbol: "BbmMaj7",
        altSymbols: ["Bbm(maj7)", "BbminMaj7", "Bb-Δ7", "A#mMaj7"],
        root: "Bb",
        quality: "minorMajor7",
        voicingType: "partial",
        voicingDescription: "minMaj7 voicing",
        intervals: ["1", "b3", "5", "7"],
        notes: ["Bb", "Db", "F", "A"],
        frets: [-1, 1, 3, 2, 2, 1],
        fingers: [0, 1, 4, 3, 2, 1],
        barre: { fret: 1, fromString: 1, toString: 5 },
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["mysterious", "tense", "cinematic"],
            styles: ["jazz", "film-noir", "spy"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // ===== ADDITIONAL M7b5 (HALF-DIMINISHED) VOICINGS =====
    // Essential for minor ii-V-I progressions

    // C m7b5 additional voicings
    c_m7b5_v1: {
        id: "c_m7b5_v1",
        name: "C Half-Diminished 7",
        symbol: "Cm7b5",
        altSymbols: ["Cø7", "Cmin7b5", "C-7b5"],
        root: "C",
        quality: "halfDiminished",
        voicingType: "partial",
        voicingDescription: "m7b5 voicing",
        intervals: ["1", "b3", "b5", "b7"],
        notes: ["C", "Eb", "Gb", "Bb"],
        frets: [-1, 3, 4, 3, 4, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        barre: null,
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["tense", "unresolved", "dark"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_m7b5_v2: {
        id: "c_m7b5_v2",
        name: "C Half-Diminished 7",
        symbol: "Cm7b5",
        altSymbols: ["Cø7", "Cmin7b5", "C-7b5"],
        root: "C",
        quality: "halfDiminished",
        voicingType: "barre",
        voicingDescription: "m7b5 voicing",
        intervals: ["1", "b3", "b5", "b7"],
        notes: ["C", "Eb", "Gb", "Bb"],
        frets: [8, 9, 8, 8, -1, -1],
        fingers: [1, 3, 2, 1, 0, 0],
        barre: { fret: 8, fromString: 4, toString: 6 },
        position: 8,
        difficulty: 4,
        categories: {
            moods: ["tense", "unresolved", "dark"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // F# m7b5 voicings
    fsharp_m7b5_v1: {
        id: "fsharp_m7b5_v1",
        name: "F# Half-Diminished 7",
        symbol: "F#m7b5",
        altSymbols: ["F#ø7", "F#min7b5", "F#-7b5", "Gbm7b5"],
        root: "F#",
        quality: "halfDiminished",
        voicingType: "open",
        voicingDescription: "m7b5 voicing",
        intervals: ["1", "b3", "b5", "b7"],
        notes: ["F#", "A", "C", "E"],
        frets: [2, 0, 2, 2, 1, 0],
        fingers: [2, 0, 3, 4, 1, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["tense", "unresolved", "dark"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    fsharp_m7b5_v2: {
        id: "fsharp_m7b5_v2",
        name: "F# Half-Diminished 7",
        symbol: "F#m7b5",
        altSymbols: ["F#ø7", "F#min7b5", "F#-7b5", "Gbm7b5"],
        root: "F#",
        quality: "halfDiminished",
        voicingType: "partial",
        voicingDescription: "m7b5 voicing",
        intervals: ["1", "b3", "b5", "b7"],
        notes: ["F#", "A", "C", "E"],
        frets: [-1, -1, 4, 5, 5, 5],
        fingers: [0, 0, 1, 2, 3, 4],
        barre: null,
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["tense", "unresolved", "dark"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // C# m7b5 voicings
    csharp_m7b5_v1: {
        id: "csharp_m7b5_v1",
        name: "C# Half-Diminished 7",
        symbol: "C#m7b5",
        altSymbols: ["C#ø7", "C#min7b5", "C#-7b5", "Dbm7b5"],
        root: "C#",
        quality: "halfDiminished",
        voicingType: "partial",
        voicingDescription: "m7b5 voicing",
        intervals: ["1", "b3", "b5", "b7"],
        notes: ["C#", "E", "G", "B"],
        frets: [-1, 4, 5, 4, 5, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        barre: null,
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["tense", "unresolved", "dark"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    csharp_m7b5_v2: {
        id: "csharp_m7b5_v2",
        name: "C# Half-Diminished 7",
        symbol: "C#m7b5",
        altSymbols: ["C#ø7", "C#min7b5", "C#-7b5", "Dbm7b5"],
        root: "C#",
        quality: "halfDiminished",
        voicingType: "barre",
        voicingDescription: "m7b5 voicing",
        intervals: ["1", "b3", "b5", "b7"],
        notes: ["C#", "E", "G", "B"],
        frets: [9, 10, 9, 9, -1, -1],
        fingers: [1, 3, 2, 1, 0, 0],
        barre: { fret: 9, fromString: 4, toString: 6 },
        position: 9,
        difficulty: 4,
        categories: {
            moods: ["tense", "unresolved", "dark"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // Ab m7b5 voicings
    ab_m7b5_v1: {
        id: "ab_m7b5_v1",
        name: "Ab Half-Diminished 7",
        symbol: "Abm7b5",
        altSymbols: ["Abø7", "Abmin7b5", "Ab-7b5", "G#m7b5"],
        root: "Ab",
        quality: "halfDiminished",
        voicingType: "partial",
        voicingDescription: "m7b5 voicing",
        intervals: ["1", "b3", "b5", "b7"],
        notes: ["Ab", "Cb", "Ebb", "Gb"],
        frets: [-1, -1, 4, 4, 4, 4],
        fingers: [0, 0, 1, 1, 1, 1],
        barre: { fret: 4, fromString: 1, toString: 4 },
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["tense", "unresolved", "dark"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    ab_m7b5_v2: {
        id: "ab_m7b5_v2",
        name: "Ab Half-Diminished 7",
        symbol: "Abm7b5",
        altSymbols: ["Abø7", "Abmin7b5", "Ab-7b5", "G#m7b5"],
        root: "Ab",
        quality: "halfDiminished",
        voicingType: "barre",
        voicingDescription: "m7b5 voicing",
        intervals: ["1", "b3", "b5", "b7"],
        notes: ["Ab", "Cb", "Ebb", "Gb"],
        frets: [4, 5, 4, 4, -1, -1],
        fingers: [1, 3, 2, 1, 0, 0],
        barre: { fret: 4, fromString: 4, toString: 6 },
        position: 4,
        difficulty: 4,
        categories: {
            moods: ["tense", "unresolved", "dark"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // Eb m7b5 voicings
    eb_m7b5_v1: {
        id: "eb_m7b5_v1",
        name: "Eb Half-Diminished 7",
        symbol: "Ebm7b5",
        altSymbols: ["Ebø7", "Ebmin7b5", "Eb-7b5", "D#m7b5"],
        root: "Eb",
        quality: "halfDiminished",
        voicingType: "partial",
        voicingDescription: "m7b5 voicing",
        intervals: ["1", "b3", "b5", "b7"],
        notes: ["Eb", "Gb", "Bbb", "Db"],
        frets: [-1, -1, 1, 2, 2, 2],
        fingers: [0, 0, 1, 2, 3, 4],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["tense", "unresolved", "dark"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    eb_m7b5_v2: {
        id: "eb_m7b5_v2",
        name: "Eb Half-Diminished 7",
        symbol: "Ebm7b5",
        altSymbols: ["Ebø7", "Ebmin7b5", "Eb-7b5", "D#m7b5"],
        root: "Eb",
        quality: "halfDiminished",
        voicingType: "barre",
        voicingDescription: "m7b5 voicing",
        intervals: ["1", "b3", "b5", "b7"],
        notes: ["Eb", "Gb", "Bbb", "Db"],
        frets: [-1, 6, 7, 6, 7, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        barre: null,
        position: 6,
        difficulty: 4,
        categories: {
            moods: ["tense", "unresolved", "dark"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // Bb m7b5 voicings
    bb_m7b5_v1: {
        id: "bb_m7b5_v1",
        name: "Bb Half-Diminished 7",
        symbol: "Bbm7b5",
        altSymbols: ["Bbø7", "Bbmin7b5", "Bb-7b5", "A#m7b5"],
        root: "Bb",
        quality: "halfDiminished",
        voicingType: "partial",
        voicingDescription: "m7b5 voicing",
        intervals: ["1", "b3", "b5", "b7"],
        notes: ["Bb", "Db", "Fb", "Ab"],
        frets: [-1, 1, 2, 1, 2, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["tense", "unresolved", "dark"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    bb_m7b5_v2: {
        id: "bb_m7b5_v2",
        name: "Bb Half-Diminished 7",
        symbol: "Bbm7b5",
        altSymbols: ["Bbø7", "Bbmin7b5", "Bb-7b5", "A#m7b5"],
        root: "Bb",
        quality: "halfDiminished",
        voicingType: "barre",
        voicingDescription: "m7b5 voicing",
        intervals: ["1", "b3", "b5", "b7"],
        notes: ["Bb", "Db", "Fb", "Ab"],
        frets: [6, 7, 6, 6, -1, -1],
        fingers: [1, 3, 2, 1, 0, 0],
        barre: { fret: 6, fromString: 4, toString: 6 },
        position: 6,
        difficulty: 4,
        categories: {
            moods: ["tense", "unresolved", "dark"],
            styles: ["jazz", "bebop", "fusion"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // ===== DIMINISHED 7TH CHORDS - COMPLETE COVERAGE =====
    // Note: Due to symmetry, dim7 chords repeat every minor 3rd
    // C°7 = Eb°7 = Gb°7 = A°7 (same notes, different names)

    // C Diminished 7
    c_dim7_v1: {
        id: "c_dim7_v1",
        name: "C Diminished 7",
        symbol: "Cdim7",
        altSymbols: ["C°7", "Cº7"],
        root: "C",
        quality: "diminished7",
        voicingType: "partial",
        voicingDescription: "Dim7 voicing",
        intervals: ["1", "b3", "b5", "bb7"],
        notes: ["C", "Eb", "Gb", "Bbb"],
        frets: [-1, 3, 4, 2, 4, -1],
        fingers: [0, 2, 3, 1, 4, 0],
        barre: null,
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["tense", "dramatic", "passing"],
            styles: ["jazz", "classical", "film"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_dim7_v2: {
        id: "c_dim7_v2",
        name: "C Diminished 7",
        symbol: "Cdim7",
        altSymbols: ["C°7", "Cº7"],
        root: "C",
        quality: "diminished7",
        voicingType: "barre",
        voicingDescription: "Dim7 voicing",
        intervals: ["1", "b3", "b5", "bb7"],
        notes: ["C", "Eb", "Gb", "Bbb"],
        frets: [8, 9, 7, 8, -1, -1],
        fingers: [2, 3, 1, 2, 0, 0],
        barre: null,
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["tense", "dramatic", "passing"],
            styles: ["jazz", "classical", "film"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // C# Diminished 7
    csharp_dim7_v1: {
        id: "csharp_dim7_v1",
        name: "C# Diminished 7",
        symbol: "C#dim7",
        altSymbols: ["C#°7", "C#º7", "Dbdim7"],
        root: "C#",
        quality: "diminished7",
        voicingType: "partial",
        voicingDescription: "Dim7 voicing",
        intervals: ["1", "b3", "b5", "bb7"],
        notes: ["C#", "E", "G", "Bb"],
        frets: [-1, 4, 5, 3, 5, -1],
        fingers: [0, 2, 3, 1, 4, 0],
        barre: null,
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["tense", "dramatic", "passing"],
            styles: ["jazz", "classical", "film"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    csharp_dim7_v2: {
        id: "csharp_dim7_v2",
        name: "C# Diminished 7",
        symbol: "C#dim7",
        altSymbols: ["C#°7", "C#º7", "Dbdim7"],
        root: "C#",
        quality: "diminished7",
        voicingType: "barre",
        voicingDescription: "Dim7 voicing",
        intervals: ["1", "b3", "b5", "bb7"],
        notes: ["C#", "E", "G", "Bb"],
        frets: [9, 10, 8, 9, -1, -1],
        fingers: [2, 3, 1, 2, 0, 0],
        barre: null,
        position: 8,
        difficulty: 3,
        categories: {
            moods: ["tense", "dramatic", "passing"],
            styles: ["jazz", "classical", "film"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // D Diminished 7
    d_dim7_v1: {
        id: "d_dim7_v1",
        name: "D Diminished 7",
        symbol: "Ddim7",
        altSymbols: ["D°7", "Dº7"],
        root: "D",
        quality: "diminished7",
        voicingType: "open",
        voicingDescription: "Dim7 voicing",
        intervals: ["1", "b3", "b5", "bb7"],
        notes: ["D", "F", "Ab", "Cb"],
        frets: [-1, -1, 0, 1, 0, 1],
        fingers: [0, 0, 0, 2, 0, 3],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["tense", "dramatic", "passing"],
            styles: ["jazz", "classical", "film"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    d_dim7_v2: {
        id: "d_dim7_v2",
        name: "D Diminished 7",
        symbol: "Ddim7",
        altSymbols: ["D°7", "Dº7"],
        root: "D",
        quality: "diminished7",
        voicingType: "partial",
        voicingDescription: "Dim7 voicing",
        intervals: ["1", "b3", "b5", "bb7"],
        notes: ["D", "F", "Ab", "Cb"],
        frets: [-1, 5, 6, 4, 6, -1],
        fingers: [0, 2, 3, 1, 4, 0],
        barre: null,
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["tense", "dramatic", "passing"],
            styles: ["jazz", "classical", "film"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // Eb Diminished 7
    eb_dim7_v1: {
        id: "eb_dim7_v1",
        name: "Eb Diminished 7",
        symbol: "Ebdim7",
        altSymbols: ["Eb°7", "Ebº7", "D#dim7"],
        root: "Eb",
        quality: "diminished7",
        voicingType: "partial",
        voicingDescription: "Dim7 voicing",
        intervals: ["1", "b3", "b5", "bb7"],
        notes: ["Eb", "Gb", "Bbb", "Dbb"],
        frets: [-1, -1, 1, 2, 1, 2],
        fingers: [0, 0, 1, 3, 2, 4],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["tense", "dramatic", "passing"],
            styles: ["jazz", "classical", "film"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    eb_dim7_v2: {
        id: "eb_dim7_v2",
        name: "Eb Diminished 7",
        symbol: "Ebdim7",
        altSymbols: ["Eb°7", "Ebº7", "D#dim7"],
        root: "Eb",
        quality: "diminished7",
        voicingType: "barre",
        voicingDescription: "Dim7 voicing",
        intervals: ["1", "b3", "b5", "bb7"],
        notes: ["Eb", "Gb", "Bbb", "Dbb"],
        frets: [-1, 6, 7, 5, 7, -1],
        fingers: [0, 2, 3, 1, 4, 0],
        barre: null,
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["tense", "dramatic", "passing"],
            styles: ["jazz", "classical", "film"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // E Diminished 7
    e_dim7_v1: {
        id: "e_dim7_v1",
        name: "E Diminished 7",
        symbol: "Edim7",
        altSymbols: ["E°7", "Eº7"],
        root: "E",
        quality: "diminished7",
        voicingType: "open",
        voicingDescription: "Dim7 voicing",
        intervals: ["1", "b3", "b5", "bb7"],
        notes: ["E", "G", "Bb", "Db"],
        frets: [0, 1, 2, 0, 2, 0],
        fingers: [0, 1, 2, 0, 3, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["tense", "dramatic", "passing"],
            styles: ["jazz", "classical", "film"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_dim7_v2: {
        id: "e_dim7_v2",
        name: "E Diminished 7",
        symbol: "Edim7",
        altSymbols: ["E°7", "Eº7"],
        root: "E",
        quality: "diminished7",
        voicingType: "partial",
        voicingDescription: "Dim7 voicing",
        intervals: ["1", "b3", "b5", "bb7"],
        notes: ["E", "G", "Bb", "Db"],
        frets: [-1, -1, 2, 3, 2, 3],
        fingers: [0, 0, 1, 3, 2, 4],
        barre: null,
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["tense", "dramatic", "passing"],
            styles: ["jazz", "classical", "film"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // F Diminished 7
    f_dim7_v1: {
        id: "f_dim7_v1",
        name: "F Diminished 7",
        symbol: "Fdim7",
        altSymbols: ["F°7", "Fº7"],
        root: "F",
        quality: "diminished7",
        voicingType: "partial",
        voicingDescription: "Dim7 voicing",
        intervals: ["1", "b3", "b5", "bb7"],
        notes: ["F", "Ab", "Cb", "Ebb"],
        frets: [1, 2, 0, 1, 0, 1],
        fingers: [1, 3, 0, 2, 0, 1],
        barre: { fret: 1, fromString: 1, toString: 6 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["tense", "dramatic", "passing"],
            styles: ["jazz", "classical", "film"],
            isOpenChord: true,
            isBarreChord: true
        }
    },
    f_dim7_v2: {
        id: "f_dim7_v2",
        name: "F Diminished 7",
        symbol: "Fdim7",
        altSymbols: ["F°7", "Fº7"],
        root: "F",
        quality: "diminished7",
        voicingType: "barre",
        voicingDescription: "Dim7 voicing",
        intervals: ["1", "b3", "b5", "bb7"],
        notes: ["F", "Ab", "Cb", "Ebb"],
        frets: [-1, -1, 3, 4, 3, 4],
        fingers: [0, 0, 1, 3, 2, 4],
        barre: null,
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["tense", "dramatic", "passing"],
            styles: ["jazz", "classical", "film"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // F# Diminished 7
    fsharp_dim7_v1: {
        id: "fsharp_dim7_v1",
        name: "F# Diminished 7",
        symbol: "F#dim7",
        altSymbols: ["F#°7", "F#º7", "Gbdim7"],
        root: "F#",
        quality: "diminished7",
        voicingType: "partial",
        voicingDescription: "Dim7 voicing",
        intervals: ["1", "b3", "b5", "bb7"],
        notes: ["F#", "A", "C", "Eb"],
        frets: [2, 3, 1, 2, 1, 2],
        fingers: [2, 4, 1, 3, 1, 2],
        barre: { fret: 2, fromString: 1, toString: 6 },
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["tense", "dramatic", "passing"],
            styles: ["jazz", "classical", "film"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    fsharp_dim7_v2: {
        id: "fsharp_dim7_v2",
        name: "F# Diminished 7",
        symbol: "F#dim7",
        altSymbols: ["F#°7", "F#º7", "Gbdim7"],
        root: "F#",
        quality: "diminished7",
        voicingType: "barre",
        voicingDescription: "Dim7 voicing",
        intervals: ["1", "b3", "b5", "bb7"],
        notes: ["F#", "A", "C", "Eb"],
        frets: [-1, -1, 4, 5, 4, 5],
        fingers: [0, 0, 1, 3, 2, 4],
        barre: null,
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["tense", "dramatic", "passing"],
            styles: ["jazz", "classical", "film"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // G Diminished 7
    g_dim7_v1: {
        id: "g_dim7_v1",
        name: "G Diminished 7",
        symbol: "Gdim7",
        altSymbols: ["G°7", "Gº7"],
        root: "G",
        quality: "diminished7",
        voicingType: "partial",
        voicingDescription: "Dim7 voicing",
        intervals: ["1", "b3", "b5", "bb7"],
        notes: ["G", "Bb", "Db", "Fb"],
        frets: [3, 4, 2, 3, 2, 3],
        fingers: [2, 4, 1, 3, 1, 2],
        barre: { fret: 3, fromString: 1, toString: 6 },
        position: 3,
        difficulty: 3,
        categories: {
            moods: ["tense", "dramatic", "passing"],
            styles: ["jazz", "classical", "film"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    g_dim7_v2: {
        id: "g_dim7_v2",
        name: "G Diminished 7",
        symbol: "Gdim7",
        altSymbols: ["G°7", "Gº7"],
        root: "G",
        quality: "diminished7",
        voicingType: "barre",
        voicingDescription: "Dim7 voicing",
        intervals: ["1", "b3", "b5", "bb7"],
        notes: ["G", "Bb", "Db", "Fb"],
        frets: [-1, -1, 5, 6, 5, 6],
        fingers: [0, 0, 1, 3, 2, 4],
        barre: null,
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["tense", "dramatic", "passing"],
            styles: ["jazz", "classical", "film"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // Ab Diminished 7
    ab_dim7_v1: {
        id: "ab_dim7_v1",
        name: "Ab Diminished 7",
        symbol: "Abdim7",
        altSymbols: ["Ab°7", "Abº7", "G#dim7"],
        root: "Ab",
        quality: "diminished7",
        voicingType: "partial",
        voicingDescription: "Dim7 voicing",
        intervals: ["1", "b3", "b5", "bb7"],
        notes: ["Ab", "Cb", "Ebb", "Gbb"],
        frets: [4, 5, 3, 4, 3, 4],
        fingers: [2, 4, 1, 3, 1, 2],
        barre: { fret: 4, fromString: 1, toString: 6 },
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["tense", "dramatic", "passing"],
            styles: ["jazz", "classical", "film"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    ab_dim7_v2: {
        id: "ab_dim7_v2",
        name: "Ab Diminished 7",
        symbol: "Abdim7",
        altSymbols: ["Ab°7", "Abº7", "G#dim7"],
        root: "Ab",
        quality: "diminished7",
        voicingType: "barre",
        voicingDescription: "Dim7 voicing",
        intervals: ["1", "b3", "b5", "bb7"],
        notes: ["Ab", "Cb", "Ebb", "Gbb"],
        frets: [-1, -1, 6, 7, 6, 7],
        fingers: [0, 0, 1, 3, 2, 4],
        barre: null,
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["tense", "dramatic", "passing"],
            styles: ["jazz", "classical", "film"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // A Diminished 7
    a_dim7_v1: {
        id: "a_dim7_v1",
        name: "A Diminished 7",
        symbol: "Adim7",
        altSymbols: ["A°7", "Aº7"],
        root: "A",
        quality: "diminished7",
        voicingType: "open",
        voicingDescription: "Dim7 voicing",
        intervals: ["1", "b3", "b5", "bb7"],
        notes: ["A", "C", "Eb", "Gb"],
        frets: [-1, 0, 1, 2, 1, 2],
        fingers: [0, 0, 1, 3, 2, 4],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["tense", "dramatic", "passing"],
            styles: ["jazz", "classical", "film"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    a_dim7_v2: {
        id: "a_dim7_v2",
        name: "A Diminished 7",
        symbol: "Adim7",
        altSymbols: ["A°7", "Aº7"],
        root: "A",
        quality: "diminished7",
        voicingType: "partial",
        voicingDescription: "Dim7 voicing",
        intervals: ["1", "b3", "b5", "bb7"],
        notes: ["A", "C", "Eb", "Gb"],
        frets: [5, 6, 4, 5, 4, 5],
        fingers: [2, 4, 1, 3, 1, 2],
        barre: { fret: 5, fromString: 1, toString: 6 },
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["tense", "dramatic", "passing"],
            styles: ["jazz", "classical", "film"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // Bb Diminished 7
    bb_dim7_v1: {
        id: "bb_dim7_v1",
        name: "Bb Diminished 7",
        symbol: "Bbdim7",
        altSymbols: ["Bb°7", "Bbº7", "A#dim7"],
        root: "Bb",
        quality: "diminished7",
        voicingType: "partial",
        voicingDescription: "Dim7 voicing",
        intervals: ["1", "b3", "b5", "bb7"],
        notes: ["Bb", "Db", "Fb", "Abb"],
        frets: [-1, 1, 2, 0, 2, 0],
        fingers: [0, 1, 3, 0, 4, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["tense", "dramatic", "passing"],
            styles: ["jazz", "classical", "film"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    bb_dim7_v2: {
        id: "bb_dim7_v2",
        name: "Bb Diminished 7",
        symbol: "Bbdim7",
        altSymbols: ["Bb°7", "Bbº7", "A#dim7"],
        root: "Bb",
        quality: "diminished7",
        voicingType: "barre",
        voicingDescription: "Dim7 voicing",
        intervals: ["1", "b3", "b5", "bb7"],
        notes: ["Bb", "Db", "Fb", "Abb"],
        frets: [6, 7, 5, 6, 5, 6],
        fingers: [2, 4, 1, 3, 1, 2],
        barre: { fret: 6, fromString: 1, toString: 6 },
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["tense", "dramatic", "passing"],
            styles: ["jazz", "classical", "film"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // B Diminished 7
    b_dim7_v1: {
        id: "b_dim7_v1",
        name: "B Diminished 7",
        symbol: "Bdim7",
        altSymbols: ["B°7", "Bº7"],
        root: "B",
        quality: "diminished7",
        voicingType: "open",
        voicingDescription: "Dim7 voicing",
        intervals: ["1", "b3", "b5", "bb7"],
        notes: ["B", "D", "F", "Ab"],
        frets: [-1, 2, 3, 1, 3, 1],
        fingers: [0, 2, 4, 1, 4, 1],
        barre: { fret: 1, fromString: 1, toString: 3 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["tense", "dramatic", "passing"],
            styles: ["jazz", "classical", "film"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    b_dim7_v2: {
        id: "b_dim7_v2",
        name: "B Diminished 7",
        symbol: "Bdim7",
        altSymbols: ["B°7", "Bº7"],
        root: "B",
        quality: "diminished7",
        voicingType: "partial",
        voicingDescription: "Dim7 voicing",
        intervals: ["1", "b3", "b5", "bb7"],
        notes: ["B", "D", "F", "Ab"],
        frets: [7, 8, 6, 7, 6, 7],
        fingers: [2, 4, 1, 3, 1, 2],
        barre: { fret: 7, fromString: 1, toString: 6 },
        position: 7,
        difficulty: 3,
        categories: {
            moods: ["tense", "dramatic", "passing"],
            styles: ["jazz", "classical", "film"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // ===== QUARTAL VOICINGS =====
    // Built by stacking 4ths instead of 3rds
    // Modern, open sound - Pat Metheny, Kurt Rosenwinkel, McCoy Tyner
    // Ambiguous - work over multiple chord types

    // C Quartal Voicings
    c_quartal_v1: {
        id: "c_quartal_v1",
        name: "C Quartal",
        symbol: "C(4)",
        altSymbols: ["Cquartal", "C sus4 stack"],
        root: "C",
        quality: "quartal",
        voicingType: "quartal",
        voicingDescription: "Quartal voicing",
        intervals: ["1", "4", "b7", "4"],
        notes: ["C", "F", "Bb", "Eb"],
        frets: [-1, 3, 3, 3, 4, -1],
        fingers: [0, 1, 1, 1, 2, 0],
        barre: { fret: 3, fromString: 2, toString: 4 },
        position: 3,
        difficulty: 4,
        categories: {
            moods: ["open", "modern", "ambiguous"],
            styles: ["modern-jazz", "fusion", "modal"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    c_quartal_v2: {
        id: "c_quartal_v2",
        name: "C Quartal",
        symbol: "C(4)",
        altSymbols: ["Cquartal", "C sus4 stack"],
        root: "C",
        quality: "quartal",
        voicingType: "quartal",
        voicingDescription: "Quartal voicing",
        intervals: ["1", "4", "b7", "11"],
        notes: ["C", "F", "Bb", "F"],
        frets: [8, 8, 8, 10, -1, -1],
        fingers: [1, 1, 1, 3, 0, 0],
        barre: { fret: 8, fromString: 4, toString: 6 },
        position: 8,
        difficulty: 4,
        categories: {
            moods: ["open", "modern", "ambiguous"],
            styles: ["modern-jazz", "fusion", "modal"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    c_quartal_v3: {
        id: "c_quartal_v3",
        name: "C Quartal",
        symbol: "C(4)",
        altSymbols: ["Cquartal", "C sus4 stack"],
        root: "C",
        quality: "quartal",
        voicingType: "quartal",
        voicingDescription: "Quartal voicing",
        intervals: ["4", "b7", "4", "b7"],
        notes: ["F", "Bb", "Eb", "Ab"],
        frets: [-1, -1, 3, 3, 4, 4],
        fingers: [0, 0, 1, 1, 2, 2],
        barre: null,
        position: 3,
        difficulty: 4,
        categories: {
            moods: ["open", "modern", "ambiguous"],
            styles: ["modern-jazz", "fusion", "modal"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_quartal_v4: {
        id: "c_quartal_v4",
        name: "C Quartal",
        symbol: "C(4)",
        altSymbols: ["Cquartal", "C sus4 stack"],
        root: "C",
        quality: "quartal",
        voicingType: "quartal",
        voicingDescription: "Quartal voicing",
        intervals: ["1", "4", "b7", "4", "b7"],
        notes: ["C", "F", "Bb", "Eb", "Ab"],
        frets: [8, 8, 8, 8, 9, -1],
        fingers: [1, 1, 1, 1, 2, 0],
        barre: { fret: 8, fromString: 3, toString: 6 },
        position: 8,
        difficulty: 5,
        categories: {
            moods: ["open", "modern", "ambiguous"],
            styles: ["modern-jazz", "fusion", "modal"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // D Quartal Voicings
    d_quartal_v1: {
        id: "d_quartal_v1",
        name: "D Quartal",
        symbol: "D(4)",
        altSymbols: ["Dquartal", "D sus4 stack"],
        root: "D",
        quality: "quartal",
        voicingType: "quartal",
        voicingDescription: "Quartal voicing",
        intervals: ["1", "4", "b7", "4"],
        notes: ["D", "G", "C", "F"],
        frets: [-1, 5, 5, 5, 6, -1],
        fingers: [0, 1, 1, 1, 2, 0],
        barre: { fret: 5, fromString: 2, toString: 4 },
        position: 5,
        difficulty: 4,
        categories: {
            moods: ["open", "modern", "ambiguous"],
            styles: ["modern-jazz", "fusion", "modal"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    d_quartal_v2: {
        id: "d_quartal_v2",
        name: "D Quartal",
        symbol: "D(4)",
        altSymbols: ["Dquartal", "D sus4 stack"],
        root: "D",
        quality: "quartal",
        voicingType: "quartal",
        voicingDescription: "Quartal voicing",
        intervals: ["1", "4", "b7", "11"],
        notes: ["D", "G", "C", "G"],
        frets: [10, 10, 10, 12, -1, -1],
        fingers: [1, 1, 1, 3, 0, 0],
        barre: { fret: 10, fromString: 4, toString: 6 },
        position: 10,
        difficulty: 4,
        categories: {
            moods: ["open", "modern", "ambiguous"],
            styles: ["modern-jazz", "fusion", "modal"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    d_quartal_v3: {
        id: "d_quartal_v3",
        name: "D Quartal",
        symbol: "D(4)",
        altSymbols: ["Dquartal", "D sus4 stack"],
        root: "D",
        quality: "quartal",
        voicingType: "open",
        voicingDescription: "Quartal voicing",
        intervals: ["1", "4", "b7", "4"],
        notes: ["D", "G", "C", "F"],
        frets: [-1, -1, 0, 0, 1, 1],
        fingers: [0, 0, 0, 0, 1, 2],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["open", "modern", "ambiguous"],
            styles: ["modern-jazz", "fusion", "modal"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    d_quartal_v4: {
        id: "d_quartal_v4",
        name: "D Quartal",
        symbol: "D(4)",
        altSymbols: ["Dquartal", "D sus4 stack"],
        root: "D",
        quality: "quartal",
        voicingType: "quartal",
        voicingDescription: "Quartal voicing",
        intervals: ["4", "b7", "4", "b7"],
        notes: ["G", "C", "F", "Bb"],
        frets: [-1, -1, 5, 5, 6, 6],
        fingers: [0, 0, 1, 1, 2, 2],
        barre: null,
        position: 5,
        difficulty: 4,
        categories: {
            moods: ["open", "modern", "ambiguous"],
            styles: ["modern-jazz", "fusion", "modal"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // E Quartal Voicings
    e_quartal_v1: {
        id: "e_quartal_v1",
        name: "E Quartal",
        symbol: "E(4)",
        altSymbols: ["Equartal", "E sus4 stack"],
        root: "E",
        quality: "quartal",
        voicingType: "open",
        voicingDescription: "Quartal voicing",
        intervals: ["1", "4", "b7", "4"],
        notes: ["E", "A", "D", "G"],
        frets: [0, -1, 0, 0, 0, -1],
        fingers: [0, 0, 0, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["open", "modern", "ambiguous"],
            styles: ["modern-jazz", "fusion", "modal"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_quartal_v2: {
        id: "e_quartal_v2",
        name: "E Quartal",
        symbol: "E(4)",
        altSymbols: ["Equartal", "E sus4 stack"],
        root: "E",
        quality: "quartal",
        voicingType: "quartal",
        voicingDescription: "Quartal voicing",
        intervals: ["1", "4", "b7", "4"],
        notes: ["E", "A", "D", "G"],
        frets: [-1, 7, 7, 7, 8, -1],
        fingers: [0, 1, 1, 1, 2, 0],
        barre: { fret: 7, fromString: 2, toString: 4 },
        position: 7,
        difficulty: 4,
        categories: {
            moods: ["open", "modern", "ambiguous"],
            styles: ["modern-jazz", "fusion", "modal"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    e_quartal_v3: {
        id: "e_quartal_v3",
        name: "E Quartal",
        symbol: "E(4)",
        altSymbols: ["Equartal", "E sus4 stack"],
        root: "E",
        quality: "quartal",
        voicingType: "quartal",
        voicingDescription: "Quartal voicing",
        intervals: ["4", "b7", "4", "b7"],
        notes: ["A", "D", "G", "C"],
        frets: [-1, -1, 7, 7, 8, 8],
        fingers: [0, 0, 1, 1, 2, 2],
        barre: null,
        position: 7,
        difficulty: 4,
        categories: {
            moods: ["open", "modern", "ambiguous"],
            styles: ["modern-jazz", "fusion", "modal"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    e_quartal_v4: {
        id: "e_quartal_v4",
        name: "E Quartal",
        symbol: "E(4)",
        altSymbols: ["Equartal", "E sus4 stack"],
        root: "E",
        quality: "quartal",
        voicingType: "open",
        voicingDescription: "Quartal voicing",
        intervals: ["1", "4", "b7", "4", "b7"],
        notes: ["E", "A", "D", "G", "C"],
        frets: [0, -1, 0, 0, 1, 0],
        fingers: [0, 0, 0, 0, 1, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["open", "modern", "ambiguous"],
            styles: ["modern-jazz", "fusion", "modal"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // F Quartal Voicings
    f_quartal_v1: {
        id: "f_quartal_v1",
        name: "F Quartal",
        symbol: "F(4)",
        altSymbols: ["Fquartal", "F sus4 stack"],
        root: "F",
        quality: "quartal",
        voicingType: "quartal",
        voicingDescription: "Quartal voicing",
        intervals: ["1", "4", "b7", "4"],
        notes: ["F", "Bb", "Eb", "Ab"],
        frets: [-1, 8, 8, 8, 9, -1],
        fingers: [0, 1, 1, 1, 2, 0],
        barre: { fret: 8, fromString: 2, toString: 4 },
        position: 8,
        difficulty: 4,
        categories: {
            moods: ["open", "modern", "ambiguous"],
            styles: ["modern-jazz", "fusion", "modal"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    f_quartal_v2: {
        id: "f_quartal_v2",
        name: "F Quartal",
        symbol: "F(4)",
        altSymbols: ["Fquartal", "F sus4 stack"],
        root: "F",
        quality: "quartal",
        voicingType: "barre",
        voicingDescription: "Quartal voicing",
        intervals: ["1", "4", "b7", "11"],
        notes: ["F", "Bb", "Eb", "Bb"],
        frets: [1, 1, 1, 3, -1, -1],
        fingers: [1, 1, 1, 3, 0, 0],
        barre: { fret: 1, fromString: 4, toString: 6 },
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["open", "modern", "ambiguous"],
            styles: ["modern-jazz", "fusion", "modal"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    f_quartal_v3: {
        id: "f_quartal_v3",
        name: "F Quartal",
        symbol: "F(4)",
        altSymbols: ["Fquartal", "F sus4 stack"],
        root: "F",
        quality: "quartal",
        voicingType: "partial",
        voicingDescription: "Quartal voicing",
        intervals: ["1", "4", "b7", "4"],
        notes: ["F", "Bb", "Eb", "Ab"],
        frets: [1, 1, 1, 1, 2, -1],
        fingers: [1, 1, 1, 1, 2, 0],
        barre: { fret: 1, fromString: 3, toString: 6 },
        position: 1,
        difficulty: 5,
        categories: {
            moods: ["open", "modern", "ambiguous"],
            styles: ["modern-jazz", "fusion", "modal"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    f_quartal_v4: {
        id: "f_quartal_v4",
        name: "F Quartal",
        symbol: "F(4)",
        altSymbols: ["Fquartal", "F sus4 stack"],
        root: "F",
        quality: "quartal",
        voicingType: "quartal",
        voicingDescription: "Quartal voicing",
        intervals: ["4", "b7", "4", "b7"],
        notes: ["Bb", "Eb", "Ab", "Db"],
        frets: [-1, -1, 8, 8, 9, 9],
        fingers: [0, 0, 1, 1, 2, 2],
        barre: null,
        position: 8,
        difficulty: 4,
        categories: {
            moods: ["open", "modern", "ambiguous"],
            styles: ["modern-jazz", "fusion", "modal"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // G Quartal Voicings
    g_quartal_v1: {
        id: "g_quartal_v1",
        name: "G Quartal",
        symbol: "G(4)",
        altSymbols: ["Gquartal", "G sus4 stack"],
        root: "G",
        quality: "quartal",
        voicingType: "open",
        voicingDescription: "Quartal voicing",
        intervals: ["1", "4", "b7", "4"],
        notes: ["G", "C", "F", "Bb"],
        frets: [3, 3, 3, 3, 4, -1],
        fingers: [1, 1, 1, 1, 2, 0],
        barre: { fret: 3, fromString: 3, toString: 6 },
        position: 3,
        difficulty: 4,
        categories: {
            moods: ["open", "modern", "ambiguous"],
            styles: ["modern-jazz", "fusion", "modal"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    g_quartal_v2: {
        id: "g_quartal_v2",
        name: "G Quartal",
        symbol: "G(4)",
        altSymbols: ["Gquartal", "G sus4 stack"],
        root: "G",
        quality: "quartal",
        voicingType: "quartal",
        voicingDescription: "Quartal voicing",
        intervals: ["1", "4", "b7", "11"],
        notes: ["G", "C", "F", "C"],
        frets: [3, 3, 3, 5, -1, -1],
        fingers: [1, 1, 1, 3, 0, 0],
        barre: { fret: 3, fromString: 4, toString: 6 },
        position: 3,
        difficulty: 4,
        categories: {
            moods: ["open", "modern", "ambiguous"],
            styles: ["modern-jazz", "fusion", "modal"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    g_quartal_v3: {
        id: "g_quartal_v3",
        name: "G Quartal",
        symbol: "G(4)",
        altSymbols: ["Gquartal", "G sus4 stack"],
        root: "G",
        quality: "quartal",
        voicingType: "quartal",
        voicingDescription: "Quartal voicing",
        intervals: ["4", "b7", "4", "b7"],
        notes: ["C", "F", "Bb", "Eb"],
        frets: [-1, -1, 10, 10, 11, 11],
        fingers: [0, 0, 1, 1, 2, 2],
        barre: null,
        position: 10,
        difficulty: 4,
        categories: {
            moods: ["open", "modern", "ambiguous"],
            styles: ["modern-jazz", "fusion", "modal"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_quartal_v4: {
        id: "g_quartal_v4",
        name: "G Quartal",
        symbol: "G(4)",
        altSymbols: ["Gquartal", "G sus4 stack"],
        root: "G",
        quality: "quartal",
        voicingType: "open",
        voicingDescription: "Quartal voicing",
        intervals: ["1", "4", "b7", "4", "1"],
        notes: ["G", "C", "F", "Bb", "G"],
        frets: [3, 3, 3, 3, 4, 3],
        fingers: [1, 1, 1, 1, 2, 1],
        barre: { fret: 3, fromString: 1, toString: 6 },
        position: 3,
        difficulty: 5,
        categories: {
            moods: ["open", "modern", "ambiguous"],
            styles: ["modern-jazz", "fusion", "modal"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // A Quartal Voicings
    a_quartal_v1: {
        id: "a_quartal_v1",
        name: "A Quartal",
        symbol: "A(4)",
        altSymbols: ["Aquartal", "A sus4 stack"],
        root: "A",
        quality: "quartal",
        voicingType: "open",
        voicingDescription: "Quartal voicing",
        intervals: ["1", "4", "b7", "4"],
        notes: ["A", "D", "G", "C"],
        frets: [-1, 0, 0, 0, 1, 0],
        fingers: [0, 0, 0, 0, 1, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["open", "modern", "ambiguous"],
            styles: ["modern-jazz", "fusion", "modal"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    a_quartal_v2: {
        id: "a_quartal_v2",
        name: "A Quartal",
        symbol: "A(4)",
        altSymbols: ["Aquartal", "A sus4 stack"],
        root: "A",
        quality: "quartal",
        voicingType: "quartal",
        voicingDescription: "Quartal voicing",
        intervals: ["1", "4", "b7", "11"],
        notes: ["A", "D", "G", "D"],
        frets: [5, 5, 5, 7, -1, -1],
        fingers: [1, 1, 1, 3, 0, 0],
        barre: { fret: 5, fromString: 4, toString: 6 },
        position: 5,
        difficulty: 4,
        categories: {
            moods: ["open", "modern", "ambiguous"],
            styles: ["modern-jazz", "fusion", "modal"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    a_quartal_v3: {
        id: "a_quartal_v3",
        name: "A Quartal",
        symbol: "A(4)",
        altSymbols: ["Aquartal", "A sus4 stack"],
        root: "A",
        quality: "quartal",
        voicingType: "quartal",
        voicingDescription: "Quartal voicing",
        intervals: ["4", "b7", "4", "b7"],
        notes: ["D", "G", "C", "F"],
        frets: [-1, -1, 0, 0, 1, 1],
        fingers: [0, 0, 0, 0, 1, 2],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["open", "modern", "ambiguous"],
            styles: ["modern-jazz", "fusion", "modal"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    a_quartal_v4: {
        id: "a_quartal_v4",
        name: "A Quartal",
        symbol: "A(4)",
        altSymbols: ["Aquartal", "A sus4 stack"],
        root: "A",
        quality: "quartal",
        voicingType: "barre",
        voicingDescription: "Quartal voicing",
        intervals: ["1", "4", "b7", "4"],
        notes: ["A", "D", "G", "C"],
        frets: [5, 5, 5, 5, 6, -1],
        fingers: [1, 1, 1, 1, 2, 0],
        barre: { fret: 5, fromString: 3, toString: 6 },
        position: 5,
        difficulty: 5,
        categories: {
            moods: ["open", "modern", "ambiguous"],
            styles: ["modern-jazz", "fusion", "modal"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // B Quartal Voicings
    b_quartal_v1: {
        id: "b_quartal_v1",
        name: "B Quartal",
        symbol: "B(4)",
        altSymbols: ["Bquartal", "B sus4 stack"],
        root: "B",
        quality: "quartal",
        voicingType: "quartal",
        voicingDescription: "Quartal voicing",
        intervals: ["1", "4", "b7", "4"],
        notes: ["B", "E", "A", "D"],
        frets: [-1, 2, 2, 2, 3, -1],
        fingers: [0, 1, 1, 1, 2, 0],
        barre: { fret: 2, fromString: 2, toString: 4 },
        position: 2,
        difficulty: 4,
        categories: {
            moods: ["open", "modern", "ambiguous"],
            styles: ["modern-jazz", "fusion", "modal"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    b_quartal_v2: {
        id: "b_quartal_v2",
        name: "B Quartal",
        symbol: "B(4)",
        altSymbols: ["Bquartal", "B sus4 stack"],
        root: "B",
        quality: "quartal",
        voicingType: "quartal",
        voicingDescription: "Quartal voicing",
        intervals: ["1", "4", "b7", "11"],
        notes: ["B", "E", "A", "E"],
        frets: [7, 7, 7, 9, -1, -1],
        fingers: [1, 1, 1, 3, 0, 0],
        barre: { fret: 7, fromString: 4, toString: 6 },
        position: 7,
        difficulty: 4,
        categories: {
            moods: ["open", "modern", "ambiguous"],
            styles: ["modern-jazz", "fusion", "modal"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    b_quartal_v3: {
        id: "b_quartal_v3",
        name: "B Quartal",
        symbol: "B(4)",
        altSymbols: ["Bquartal", "B sus4 stack"],
        root: "B",
        quality: "quartal",
        voicingType: "quartal",
        voicingDescription: "Quartal voicing",
        intervals: ["4", "b7", "4", "b7"],
        notes: ["E", "A", "D", "G"],
        frets: [-1, -1, 2, 2, 3, 3],
        fingers: [0, 0, 1, 1, 2, 2],
        barre: null,
        position: 2,
        difficulty: 4,
        categories: {
            moods: ["open", "modern", "ambiguous"],
            styles: ["modern-jazz", "fusion", "modal"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    b_quartal_v4: {
        id: "b_quartal_v4",
        name: "B Quartal",
        symbol: "B(4)",
        altSymbols: ["Bquartal", "B sus4 stack"],
        root: "B",
        quality: "quartal",
        voicingType: "barre",
        voicingDescription: "Quartal voicing",
        intervals: ["1", "4", "b7", "4"],
        notes: ["B", "E", "A", "D"],
        frets: [7, 7, 7, 7, 8, -1],
        fingers: [1, 1, 1, 1, 2, 0],
        barre: { fret: 7, fromString: 3, toString: 6 },
        position: 7,
        difficulty: 5,
        categories: {
            moods: ["open", "modern", "ambiguous"],
            styles: ["modern-jazz", "fusion", "modal"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // ===== UPPER STRUCTURE TRIADS =====
    // Triads played over bass notes for complex sounds
    // Advanced jazz voicings - simple shapes, complex harmony

    // C Upper Structure Triads
    c_us_d_over_c: {
        id: "c_us_d_over_c",
        name: "D over C",
        symbol: "D/C",
        altSymbols: ["Cmaj9(no3)", "D triad/C"],
        root: "C",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (D over C)",
        intervals: ["1", "9", "#11", "13"],
        notes: ["C", "D", "F#", "A"],
        frets: [-1, 3, 4, 2, 3, -1],
        fingers: [0, 2, 4, 1, 3, 0],
        barre: null,
        position: 2,
        difficulty: 4,
        categories: {
            moods: ["bright", "sophisticated", "colorful"],
            styles: ["modern-jazz", "fusion", "contemporary"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_us_e_over_c: {
        id: "c_us_e_over_c",
        name: "E over C",
        symbol: "E/C",
        altSymbols: ["Cmaj7#11", "E triad/C"],
        root: "C",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (E over C)",
        intervals: ["1", "3", "#11", "7"],
        notes: ["C", "E", "G#", "B"],
        frets: [-1, 3, 2, 1, 0, 0],
        fingers: [0, 4, 3, 2, 0, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["bright", "lydian", "floating"],
            styles: ["modern-jazz", "fusion", "contemporary"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    c_us_eb_over_c: {
        id: "c_us_eb_over_c",
        name: "Eb over C",
        symbol: "Eb/C",
        altSymbols: ["C7#9", "Eb triad/C"],
        root: "C",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (Eb over C)",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["C", "Eb", "G", "Bb"],
        frets: [-1, 3, 4, 3, 4, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        barre: null,
        position: 3,
        difficulty: 4,
        categories: {
            moods: ["bluesy", "tense", "hendrix"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_us_a_over_c: {
        id: "c_us_a_over_c",
        name: "A over C",
        symbol: "A/C",
        altSymbols: ["Cmaj13", "A triad/C"],
        root: "C",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (A over C)",
        intervals: ["1", "3", "#5", "13"],
        notes: ["C", "E", "A", "C#"],
        frets: [-1, 3, 2, 2, 2, 0],
        fingers: [0, 4, 1, 2, 3, 0],
        barre: null,
        position: 2,
        difficulty: 4,
        categories: {
            moods: ["rich", "sophisticated", "lush"],
            styles: ["jazz", "big-band", "contemporary"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    c_us_bb_over_c: {
        id: "c_us_bb_over_c",
        name: "Bb over C",
        symbol: "Bb/C",
        altSymbols: ["C7sus", "Bb triad/C"],
        root: "C",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (Bb over C)",
        intervals: ["1", "4", "b7", "9"],
        notes: ["C", "F", "Bb", "D"],
        frets: [-1, 3, 3, 3, 3, -1],
        fingers: [0, 1, 1, 1, 1, 0],
        barre: { fret: 3, fromString: 2, toString: 5 },
        position: 3,
        difficulty: 4,
        categories: {
            moods: ["suspended", "open", "gospel"],
            styles: ["jazz", "gospel", "r&b"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // D Upper Structure Triads
    d_us_e_over_d: {
        id: "d_us_e_over_d",
        name: "E over D",
        symbol: "E/D",
        altSymbols: ["Dmaj9(no3)", "E triad/D"],
        root: "D",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (E over D)",
        intervals: ["1", "9", "#11", "13"],
        notes: ["D", "E", "G#", "B"],
        frets: [-1, -1, 0, 1, 0, 0],
        fingers: [0, 0, 0, 1, 0, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["bright", "sophisticated", "colorful"],
            styles: ["modern-jazz", "fusion", "contemporary"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    d_us_fsharp_over_d: {
        id: "d_us_fsharp_over_d",
        name: "F# over D",
        symbol: "F#/D",
        altSymbols: ["Dmaj7#11", "F# triad/D"],
        root: "D",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (F# over D)",
        intervals: ["1", "3", "#11", "7"],
        notes: ["D", "F#", "A#", "C#"],
        frets: [-1, -1, 0, 3, 2, 2],
        fingers: [0, 0, 0, 4, 2, 3],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["bright", "lydian", "floating"],
            styles: ["modern-jazz", "fusion", "contemporary"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    d_us_f_over_d: {
        id: "d_us_f_over_d",
        name: "F over D",
        symbol: "F/D",
        altSymbols: ["D7#9", "F triad/D"],
        root: "D",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (F over D)",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["D", "F", "A", "C"],
        frets: [-1, -1, 0, 2, 1, 1],
        fingers: [0, 0, 0, 3, 1, 2],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["bluesy", "tense", "hendrix"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    d_us_b_over_d: {
        id: "d_us_b_over_d",
        name: "B over D",
        symbol: "B/D",
        altSymbols: ["Dmaj13", "B triad/D"],
        root: "D",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (B over D)",
        intervals: ["1", "3", "6", "13"],
        notes: ["D", "F#", "B", "D#"],
        frets: [-1, -1, 0, 4, 4, 4],
        fingers: [0, 0, 0, 1, 1, 1],
        barre: { fret: 4, fromString: 1, toString: 3 },
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["rich", "sophisticated", "lush"],
            styles: ["jazz", "big-band", "contemporary"],
            isOpenChord: true,
            isBarreChord: true
        }
    },
    d_us_c_over_d: {
        id: "d_us_c_over_d",
        name: "C over D",
        symbol: "C/D",
        altSymbols: ["D7sus", "C triad/D"],
        root: "D",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (C over D)",
        intervals: ["1", "4", "b7", "9"],
        notes: ["D", "G", "C", "E"],
        frets: [-1, -1, 0, 0, 1, 0],
        fingers: [0, 0, 0, 0, 1, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["suspended", "open", "gospel"],
            styles: ["jazz", "gospel", "r&b"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // E Upper Structure Triads
    e_us_fsharp_over_e: {
        id: "e_us_fsharp_over_e",
        name: "F# over E",
        symbol: "F#/E",
        altSymbols: ["Emaj9(no3)", "F# triad/E"],
        root: "E",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (F# over E)",
        intervals: ["1", "9", "#11", "13"],
        notes: ["E", "F#", "A#", "C#"],
        frets: [0, -1, 4, 3, 2, -1],
        fingers: [0, 0, 4, 3, 2, 0],
        barre: null,
        position: 2,
        difficulty: 4,
        categories: {
            moods: ["bright", "sophisticated", "colorful"],
            styles: ["modern-jazz", "fusion", "contemporary"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_us_gsharp_over_e: {
        id: "e_us_gsharp_over_e",
        name: "G# over E",
        symbol: "G#/E",
        altSymbols: ["Emaj7#11", "G# triad/E"],
        root: "E",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (G# over E)",
        intervals: ["1", "3", "#11", "7"],
        notes: ["E", "G#", "B#", "D#"],
        frets: [0, -1, 1, 1, 1, -1],
        fingers: [0, 0, 1, 1, 1, 0],
        barre: { fret: 1, fromString: 2, toString: 4 },
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["bright", "lydian", "floating"],
            styles: ["modern-jazz", "fusion", "contemporary"],
            isOpenChord: true,
            isBarreChord: true
        }
    },
    e_us_g_over_e: {
        id: "e_us_g_over_e",
        name: "G over E",
        symbol: "G/E",
        altSymbols: ["E7#9", "G triad/E"],
        root: "E",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (G over E)",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["E", "G", "B", "D"],
        frets: [0, 2, 0, 0, 0, 0],
        fingers: [0, 2, 0, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["bluesy", "tense", "hendrix"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_us_csharp_over_e: {
        id: "e_us_csharp_over_e",
        name: "C# over E",
        symbol: "C#/E",
        altSymbols: ["Emaj13", "C# triad/E"],
        root: "E",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (C# over E)",
        intervals: ["1", "3", "6", "13"],
        notes: ["E", "G#", "C#", "E#"],
        frets: [0, -1, 2, 1, 2, -1],
        fingers: [0, 0, 3, 1, 2, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["rich", "sophisticated", "lush"],
            styles: ["jazz", "big-band", "contemporary"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_us_d_over_e: {
        id: "e_us_d_over_e",
        name: "D over E",
        symbol: "D/E",
        altSymbols: ["E7sus", "D triad/E"],
        root: "E",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (D over E)",
        intervals: ["1", "4", "b7", "9"],
        notes: ["E", "A", "D", "F#"],
        frets: [0, 0, 0, 2, 3, 2],
        fingers: [0, 0, 0, 1, 3, 2],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["suspended", "open", "gospel"],
            styles: ["jazz", "gospel", "r&b"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // F Upper Structure Triads
    f_us_g_over_f: {
        id: "f_us_g_over_f",
        name: "G over F",
        symbol: "G/F",
        altSymbols: ["Fmaj9(no3)", "G triad/F"],
        root: "F",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (G over F)",
        intervals: ["1", "9", "#11", "13"],
        notes: ["F", "G", "B", "D"],
        frets: [1, -1, 0, 0, 0, -1],
        fingers: [1, 0, 0, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["bright", "sophisticated", "colorful"],
            styles: ["modern-jazz", "fusion", "contemporary"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    f_us_a_over_f: {
        id: "f_us_a_over_f",
        name: "A over F",
        symbol: "A/F",
        altSymbols: ["Fmaj7#11", "A triad/F"],
        root: "F",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (A over F)",
        intervals: ["1", "3", "#11", "7"],
        notes: ["F", "A", "C#", "E"],
        frets: [1, 0, 2, 2, 2, 0],
        fingers: [1, 0, 2, 3, 4, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["bright", "lydian", "floating"],
            styles: ["modern-jazz", "fusion", "contemporary"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    f_us_ab_over_f: {
        id: "f_us_ab_over_f",
        name: "Ab over F",
        symbol: "Ab/F",
        altSymbols: ["F7#9", "Ab triad/F"],
        root: "F",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (Ab over F)",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["F", "Ab", "C", "Eb"],
        frets: [1, -1, 1, 1, 1, -1],
        fingers: [1, 0, 2, 2, 2, 0],
        barre: { fret: 1, fromString: 2, toString: 4 },
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["bluesy", "tense", "hendrix"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    f_us_d_over_f: {
        id: "f_us_d_over_f",
        name: "D over F",
        symbol: "D/F",
        altSymbols: ["Fmaj13", "D triad/F"],
        root: "F",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (D over F)",
        intervals: ["1", "3", "6", "13"],
        notes: ["F", "A", "D", "F#"],
        frets: [1, 0, 2, 2, 3, -1],
        fingers: [1, 0, 2, 3, 4, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["rich", "sophisticated", "lush"],
            styles: ["jazz", "big-band", "contemporary"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    f_us_eb_over_f: {
        id: "f_us_eb_over_f",
        name: "Eb over F",
        symbol: "Eb/F",
        altSymbols: ["F7sus", "Eb triad/F"],
        root: "F",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (Eb over F)",
        intervals: ["1", "4", "b7", "9"],
        notes: ["F", "Bb", "Eb", "G"],
        frets: [1, 1, 1, 3, -1, -1],
        fingers: [1, 1, 1, 3, 0, 0],
        barre: { fret: 1, fromString: 4, toString: 6 },
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["suspended", "open", "gospel"],
            styles: ["jazz", "gospel", "r&b"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // G Upper Structure Triads
    g_us_a_over_g: {
        id: "g_us_a_over_g",
        name: "A over G",
        symbol: "A/G",
        altSymbols: ["Gmaj9(no3)", "A triad/G"],
        root: "G",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (A over G)",
        intervals: ["1", "9", "#11", "13"],
        notes: ["G", "A", "C#", "E"],
        frets: [3, 0, 2, 2, 2, 0],
        fingers: [4, 0, 1, 2, 3, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["bright", "sophisticated", "colorful"],
            styles: ["modern-jazz", "fusion", "contemporary"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    g_us_b_over_g: {
        id: "g_us_b_over_g",
        name: "B over G",
        symbol: "B/G",
        altSymbols: ["Gmaj7#11", "B triad/G"],
        root: "G",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (B over G)",
        intervals: ["1", "3", "#11", "7"],
        notes: ["G", "B", "D#", "F#"],
        frets: [3, 2, 4, 4, 4, -1],
        fingers: [2, 1, 3, 3, 3, 0],
        barre: { fret: 4, fromString: 2, toString: 4 },
        position: 2,
        difficulty: 5,
        categories: {
            moods: ["bright", "lydian", "floating"],
            styles: ["modern-jazz", "fusion", "contemporary"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    g_us_bb_over_g: {
        id: "g_us_bb_over_g",
        name: "Bb over G",
        symbol: "Bb/G",
        altSymbols: ["G7#9", "Bb triad/G"],
        root: "G",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (Bb over G)",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["G", "Bb", "D", "F"],
        frets: [3, -1, 3, 3, 3, -1],
        fingers: [1, 0, 2, 2, 2, 0],
        barre: { fret: 3, fromString: 2, toString: 4 },
        position: 3,
        difficulty: 4,
        categories: {
            moods: ["bluesy", "tense", "hendrix"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    g_us_e_over_g: {
        id: "g_us_e_over_g",
        name: "E over G",
        symbol: "E/G",
        altSymbols: ["Gmaj13", "E triad/G"],
        root: "G",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (E over G)",
        intervals: ["1", "3", "6", "13"],
        notes: ["G", "B", "E", "G#"],
        frets: [3, 2, 2, 1, 0, 0],
        fingers: [4, 2, 3, 1, 0, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["rich", "sophisticated", "lush"],
            styles: ["jazz", "big-band", "contemporary"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    g_us_f_over_g: {
        id: "g_us_f_over_g",
        name: "F over G",
        symbol: "F/G",
        altSymbols: ["G7sus", "F triad/G"],
        root: "G",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (F over G)",
        intervals: ["1", "4", "b7", "9"],
        notes: ["G", "C", "F", "A"],
        frets: [3, 3, 3, 5, -1, -1],
        fingers: [1, 1, 1, 3, 0, 0],
        barre: { fret: 3, fromString: 4, toString: 6 },
        position: 3,
        difficulty: 4,
        categories: {
            moods: ["suspended", "open", "gospel"],
            styles: ["jazz", "gospel", "r&b"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // A Upper Structure Triads
    a_us_b_over_a: {
        id: "a_us_b_over_a",
        name: "B over A",
        symbol: "B/A",
        altSymbols: ["Amaj9(no3)", "B triad/A"],
        root: "A",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (B over A)",
        intervals: ["1", "9", "#11", "13"],
        notes: ["A", "B", "D#", "F#"],
        frets: [-1, 0, 4, 4, 4, -1],
        fingers: [0, 0, 1, 1, 1, 0],
        barre: { fret: 4, fromString: 2, toString: 4 },
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["bright", "sophisticated", "colorful"],
            styles: ["modern-jazz", "fusion", "contemporary"],
            isOpenChord: true,
            isBarreChord: true
        }
    },
    a_us_csharp_over_a: {
        id: "a_us_csharp_over_a",
        name: "C# over A",
        symbol: "C#/A",
        altSymbols: ["Amaj7#11", "C# triad/A"],
        root: "A",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (C# over A)",
        intervals: ["1", "3", "#11", "7"],
        notes: ["A", "C#", "E#", "G#"],
        frets: [-1, 0, 2, 1, 2, -1],
        fingers: [0, 0, 3, 1, 2, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["bright", "lydian", "floating"],
            styles: ["modern-jazz", "fusion", "contemporary"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    a_us_c_over_a: {
        id: "a_us_c_over_a",
        name: "C over A",
        symbol: "C/A",
        altSymbols: ["A7#9", "C triad/A"],
        root: "A",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (C over A)",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["A", "C", "E", "G"],
        frets: [-1, 0, 2, 0, 1, 0],
        fingers: [0, 0, 3, 0, 1, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["bluesy", "tense", "hendrix"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    a_us_fsharp_over_a: {
        id: "a_us_fsharp_over_a",
        name: "F# over A",
        symbol: "F#/A",
        altSymbols: ["Amaj13", "F# triad/A"],
        root: "A",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (F# over A)",
        intervals: ["1", "3", "6", "13"],
        notes: ["A", "C#", "F#", "A#"],
        frets: [-1, 0, 4, 3, 2, 2],
        fingers: [0, 0, 4, 3, 1, 2],
        barre: null,
        position: 2,
        difficulty: 4,
        categories: {
            moods: ["rich", "sophisticated", "lush"],
            styles: ["jazz", "big-band", "contemporary"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    a_us_g_over_a: {
        id: "a_us_g_over_a",
        name: "G over A",
        symbol: "G/A",
        altSymbols: ["A7sus", "G triad/A"],
        root: "A",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (G over A)",
        intervals: ["1", "4", "b7", "9"],
        notes: ["A", "D", "G", "B"],
        frets: [-1, 0, 0, 0, 0, 0],
        fingers: [0, 0, 0, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["suspended", "open", "gospel"],
            styles: ["jazz", "gospel", "r&b"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // Bb Upper Structure Triads
    bb_us_c_over_bb: {
        id: "bb_us_c_over_bb",
        name: "C over Bb",
        symbol: "C/Bb",
        altSymbols: ["Bbmaj9(no3)", "C triad/Bb"],
        root: "Bb",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (C over Bb)",
        intervals: ["1", "9", "#11", "13"],
        notes: ["Bb", "C", "E", "G"],
        frets: [6, -1, 5, 5, 5, -1],
        fingers: [2, 0, 1, 1, 1, 0],
        barre: { fret: 5, fromString: 2, toString: 4 },
        position: 5,
        difficulty: 4,
        categories: {
            moods: ["bright", "sophisticated", "colorful"],
            styles: ["modern-jazz", "fusion", "contemporary"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    bb_us_d_over_bb: {
        id: "bb_us_d_over_bb",
        name: "D over Bb",
        symbol: "D/Bb",
        altSymbols: ["Bbmaj7#11", "D triad/Bb"],
        root: "Bb",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (D over Bb)",
        intervals: ["1", "3", "#11", "7"],
        notes: ["Bb", "D", "F#", "A"],
        frets: [6, 5, 7, 7, 7, -1],
        fingers: [2, 1, 3, 3, 3, 0],
        barre: { fret: 7, fromString: 2, toString: 4 },
        position: 5,
        difficulty: 5,
        categories: {
            moods: ["bright", "lydian", "floating"],
            styles: ["modern-jazz", "fusion", "contemporary"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    bb_us_db_over_bb: {
        id: "bb_us_db_over_bb",
        name: "Db over Bb",
        symbol: "Db/Bb",
        altSymbols: ["Bb7#9", "Db triad/Bb"],
        root: "Bb",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (Db over Bb)",
        intervals: ["1", "b3", "5", "b7"],
        notes: ["Bb", "Db", "F", "Ab"],
        frets: [6, 6, 6, 6, -1, -1],
        fingers: [1, 1, 1, 1, 0, 0],
        barre: { fret: 6, fromString: 3, toString: 6 },
        position: 6,
        difficulty: 4,
        categories: {
            moods: ["bluesy", "tense", "hendrix"],
            styles: ["jazz", "blues", "funk"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    bb_us_g_over_bb: {
        id: "bb_us_g_over_bb",
        name: "G over Bb",
        symbol: "G/Bb",
        altSymbols: ["Bbmaj13", "G triad/Bb"],
        root: "Bb",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (G over Bb)",
        intervals: ["1", "3", "6", "13"],
        notes: ["Bb", "D", "G", "B"],
        frets: [6, 5, 5, 4, 3, 3],
        fingers: [4, 2, 3, 2, 1, 1],
        barre: { fret: 3, fromString: 1, toString: 2 },
        position: 3,
        difficulty: 5,
        categories: {
            moods: ["rich", "sophisticated", "lush"],
            styles: ["jazz", "big-band", "contemporary"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    bb_us_ab_over_bb: {
        id: "bb_us_ab_over_bb",
        name: "Ab over Bb",
        symbol: "Ab/Bb",
        altSymbols: ["Bb7sus", "Ab triad/Bb"],
        root: "Bb",
        quality: "upperStructure",
        voicingType: "upper-structure",
        voicingDescription: "Upper structure (Ab over Bb)",
        intervals: ["1", "4", "b7", "9"],
        notes: ["Bb", "Eb", "Ab", "C"],
        frets: [6, 6, 6, 8, -1, -1],
        fingers: [1, 1, 1, 3, 0, 0],
        barre: { fret: 6, fromString: 4, toString: 6 },
        position: 6,
        difficulty: 4,
        categories: {
            moods: ["suspended", "open", "gospel"],
            styles: ["jazz", "gospel", "r&b"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // ===== ROOTLESS VOICINGS =====
    // Jazz voicings without the root - bass plays the root
    // Essential for jazz combo playing

    // C Rootless Voicings
    c_rootless_maj7: {
        id: "c_rootless_maj7",
        name: "C Major 7 Rootless",
        symbol: "Cmaj7",
        altSymbols: ["CM7 rootless", "CΔ7 rootless"],
        root: "C",
        quality: "major7",
        voicingType: "rootless",
        voicingDescription: "Rootless voicing",
        intervals: ["3", "5", "7", "9"],
        notes: ["E", "G", "B", "D"],
        frets: [-1, -1, 5, 4, 3, 2],
        fingers: [0, 0, 4, 3, 2, 1],
        barre: null,
        position: 2,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "open", "jazz"],
            styles: ["jazz", "bebop", "combo"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_rootless_min7: {
        id: "c_rootless_min7",
        name: "C Minor 7 Rootless",
        symbol: "Cm7",
        altSymbols: ["Cmin7 rootless", "C-7 rootless"],
        root: "C",
        quality: "minor7",
        voicingType: "rootless",
        voicingDescription: "Rootless voicing",
        intervals: ["b3", "5", "b7", "9"],
        notes: ["Eb", "G", "Bb", "D"],
        frets: [-1, -1, 4, 3, 3, 1],
        fingers: [0, 0, 4, 2, 3, 1],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["mellow", "smooth", "jazz"],
            styles: ["jazz", "bebop", "combo"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_rootless_dom7: {
        id: "c_rootless_dom7",
        name: "C Dominant 7 Rootless",
        symbol: "C7",
        altSymbols: ["Cdom7 rootless", "C7 rootless"],
        root: "C",
        quality: "dominant7",
        voicingType: "rootless",
        voicingDescription: "Rootless voicing",
        intervals: ["3", "b7", "9", "13"],
        notes: ["E", "Bb", "D", "A"],
        frets: [-1, -1, 5, 3, 3, 5],
        fingers: [0, 0, 3, 1, 2, 4],
        barre: null,
        position: 3,
        difficulty: 5,
        categories: {
            moods: ["bluesy", "driving", "jazz"],
            styles: ["jazz", "bebop", "combo"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // D Rootless Voicings
    d_rootless_maj7: {
        id: "d_rootless_maj7",
        name: "D Major 7 Rootless",
        symbol: "Dmaj7",
        altSymbols: ["DM7 rootless", "DΔ7 rootless"],
        root: "D",
        quality: "major7",
        voicingType: "rootless",
        voicingDescription: "Rootless voicing",
        intervals: ["3", "5", "7", "9"],
        notes: ["F#", "A", "C#", "E"],
        frets: [-1, -1, 7, 6, 5, 4],
        fingers: [0, 0, 4, 3, 2, 1],
        barre: null,
        position: 4,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "open", "jazz"],
            styles: ["jazz", "bebop", "combo"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_rootless_min7: {
        id: "d_rootless_min7",
        name: "D Minor 7 Rootless",
        symbol: "Dm7",
        altSymbols: ["Dmin7 rootless", "D-7 rootless"],
        root: "D",
        quality: "minor7",
        voicingType: "rootless",
        voicingDescription: "Rootless voicing",
        intervals: ["b3", "5", "b7", "9"],
        notes: ["F", "A", "C", "E"],
        frets: [-1, -1, 6, 5, 5, 3],
        fingers: [0, 0, 4, 2, 3, 1],
        barre: null,
        position: 3,
        difficulty: 4,
        categories: {
            moods: ["mellow", "smooth", "jazz"],
            styles: ["jazz", "bebop", "combo"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    d_rootless_dom7: {
        id: "d_rootless_dom7",
        name: "D Dominant 7 Rootless",
        symbol: "D7",
        altSymbols: ["Ddom7 rootless", "D7 rootless"],
        root: "D",
        quality: "dominant7",
        voicingType: "rootless",
        voicingDescription: "Rootless voicing",
        intervals: ["3", "b7", "9", "13"],
        notes: ["F#", "C", "E", "B"],
        frets: [-1, -1, 7, 5, 5, 7],
        fingers: [0, 0, 3, 1, 2, 4],
        barre: null,
        position: 5,
        difficulty: 5,
        categories: {
            moods: ["bluesy", "driving", "jazz"],
            styles: ["jazz", "bebop", "combo"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // E Rootless Voicings
    e_rootless_maj7: {
        id: "e_rootless_maj7",
        name: "E Major 7 Rootless",
        symbol: "Emaj7",
        altSymbols: ["EM7 rootless", "EΔ7 rootless"],
        root: "E",
        quality: "major7",
        voicingType: "rootless",
        voicingDescription: "Rootless voicing",
        intervals: ["3", "5", "7", "9"],
        notes: ["G#", "B", "D#", "F#"],
        frets: [-1, -1, 9, 8, 7, 6],
        fingers: [0, 0, 4, 3, 2, 1],
        barre: null,
        position: 6,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "open", "jazz"],
            styles: ["jazz", "bebop", "combo"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    e_rootless_min7: {
        id: "e_rootless_min7",
        name: "E Minor 7 Rootless",
        symbol: "Em7",
        altSymbols: ["Emin7 rootless", "E-7 rootless"],
        root: "E",
        quality: "minor7",
        voicingType: "rootless",
        voicingDescription: "Rootless voicing",
        intervals: ["b3", "5", "b7", "9"],
        notes: ["G", "B", "D", "F#"],
        frets: [-1, -1, 0, 0, 0, 2],
        fingers: [0, 0, 0, 0, 0, 2],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["mellow", "smooth", "jazz"],
            styles: ["jazz", "bebop", "combo"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_rootless_dom7: {
        id: "e_rootless_dom7",
        name: "E Dominant 7 Rootless",
        symbol: "E7",
        altSymbols: ["Edom7 rootless", "E7 rootless"],
        root: "E",
        quality: "dominant7",
        voicingType: "rootless",
        voicingDescription: "Rootless voicing",
        intervals: ["3", "b7", "9", "13"],
        notes: ["G#", "D", "F#", "C#"],
        frets: [-1, -1, 9, 7, 7, 9],
        fingers: [0, 0, 3, 1, 2, 4],
        barre: null,
        position: 7,
        difficulty: 5,
        categories: {
            moods: ["bluesy", "driving", "jazz"],
            styles: ["jazz", "bebop", "combo"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // F Rootless Voicings
    f_rootless_maj7: {
        id: "f_rootless_maj7",
        name: "F Major 7 Rootless",
        symbol: "Fmaj7",
        altSymbols: ["FM7 rootless", "FΔ7 rootless"],
        root: "F",
        quality: "major7",
        voicingType: "rootless",
        voicingDescription: "Rootless voicing",
        intervals: ["3", "5", "7", "9"],
        notes: ["A", "C", "E", "G"],
        frets: [-1, -1, 2, 0, 1, 0],
        fingers: [0, 0, 3, 0, 2, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "open", "jazz"],
            styles: ["jazz", "bebop", "combo"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    f_rootless_min7: {
        id: "f_rootless_min7",
        name: "F Minor 7 Rootless",
        symbol: "Fm7",
        altSymbols: ["Fmin7 rootless", "F-7 rootless"],
        root: "F",
        quality: "minor7",
        voicingType: "rootless",
        voicingDescription: "Rootless voicing",
        intervals: ["b3", "5", "b7", "9"],
        notes: ["Ab", "C", "Eb", "G"],
        frets: [-1, -1, 1, 0, 0, 3],
        fingers: [0, 0, 1, 0, 0, 4],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["mellow", "smooth", "jazz"],
            styles: ["jazz", "bebop", "combo"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    f_rootless_dom7: {
        id: "f_rootless_dom7",
        name: "F Dominant 7 Rootless",
        symbol: "F7",
        altSymbols: ["Fdom7 rootless", "F7 rootless"],
        root: "F",
        quality: "dominant7",
        voicingType: "rootless",
        voicingDescription: "Rootless voicing",
        intervals: ["3", "b7", "9", "13"],
        notes: ["A", "Eb", "G", "D"],
        frets: [-1, -1, 2, 3, 3, 1],
        fingers: [0, 0, 1, 3, 4, 1],
        barre: null,
        position: 1,
        difficulty: 5,
        categories: {
            moods: ["bluesy", "driving", "jazz"],
            styles: ["jazz", "bebop", "combo"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // G Rootless Voicings
    g_rootless_maj7: {
        id: "g_rootless_maj7",
        name: "G Major 7 Rootless",
        symbol: "Gmaj7",
        altSymbols: ["GM7 rootless", "GΔ7 rootless"],
        root: "G",
        quality: "major7",
        voicingType: "rootless",
        voicingDescription: "Rootless voicing",
        intervals: ["3", "5", "7", "9"],
        notes: ["B", "D", "F#", "A"],
        frets: [-1, -1, 4, 2, 3, 2],
        fingers: [0, 0, 4, 1, 3, 2],
        barre: null,
        position: 2,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "open", "jazz"],
            styles: ["jazz", "bebop", "combo"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_rootless_min7: {
        id: "g_rootless_min7",
        name: "G Minor 7 Rootless",
        symbol: "Gm7",
        altSymbols: ["Gmin7 rootless", "G-7 rootless"],
        root: "G",
        quality: "minor7",
        voicingType: "rootless",
        voicingDescription: "Rootless voicing",
        intervals: ["b3", "5", "b7", "9"],
        notes: ["Bb", "D", "F", "A"],
        frets: [-1, -1, 3, 2, 2, 5],
        fingers: [0, 0, 2, 1, 1, 4],
        barre: { fret: 2, fromString: 2, toString: 3 },
        position: 2,
        difficulty: 4,
        categories: {
            moods: ["mellow", "smooth", "jazz"],
            styles: ["jazz", "bebop", "combo"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    g_rootless_dom7: {
        id: "g_rootless_dom7",
        name: "G Dominant 7 Rootless",
        symbol: "G7",
        altSymbols: ["Gdom7 rootless", "G7 rootless"],
        root: "G",
        quality: "dominant7",
        voicingType: "rootless",
        voicingDescription: "Rootless voicing",
        intervals: ["3", "b7", "9", "13"],
        notes: ["B", "F", "A", "E"],
        frets: [-1, -1, 4, 5, 5, 0],
        fingers: [0, 0, 1, 3, 4, 0],
        barre: null,
        position: 4,
        difficulty: 5,
        categories: {
            moods: ["bluesy", "driving", "jazz"],
            styles: ["jazz", "bebop", "combo"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // A Rootless Voicings
    a_rootless_maj7: {
        id: "a_rootless_maj7",
        name: "A Major 7 Rootless",
        symbol: "Amaj7",
        altSymbols: ["AM7 rootless", "AΔ7 rootless"],
        root: "A",
        quality: "major7",
        voicingType: "rootless",
        voicingDescription: "Rootless voicing",
        intervals: ["3", "5", "7", "9"],
        notes: ["C#", "E", "G#", "B"],
        frets: [-1, -1, 6, 4, 5, 4],
        fingers: [0, 0, 4, 1, 3, 2],
        barre: null,
        position: 4,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "open", "jazz"],
            styles: ["jazz", "bebop", "combo"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_rootless_min7: {
        id: "a_rootless_min7",
        name: "A Minor 7 Rootless",
        symbol: "Am7",
        altSymbols: ["Amin7 rootless", "A-7 rootless"],
        root: "A",
        quality: "minor7",
        voicingType: "rootless",
        voicingDescription: "Rootless voicing",
        intervals: ["b3", "5", "b7", "9"],
        notes: ["C", "E", "G", "B"],
        frets: [-1, -1, 5, 4, 4, 7],
        fingers: [0, 0, 2, 1, 1, 4],
        barre: { fret: 4, fromString: 2, toString: 3 },
        position: 4,
        difficulty: 4,
        categories: {
            moods: ["mellow", "smooth", "jazz"],
            styles: ["jazz", "bebop", "combo"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    a_rootless_dom7: {
        id: "a_rootless_dom7",
        name: "A Dominant 7 Rootless",
        symbol: "A7",
        altSymbols: ["Adom7 rootless", "A7 rootless"],
        root: "A",
        quality: "dominant7",
        voicingType: "rootless",
        voicingDescription: "Rootless voicing",
        intervals: ["3", "b7", "9", "13"],
        notes: ["C#", "G", "B", "F#"],
        frets: [-1, -1, 6, 7, 7, 2],
        fingers: [0, 0, 1, 3, 4, 1],
        barre: null,
        position: 2,
        difficulty: 5,
        categories: {
            moods: ["bluesy", "driving", "jazz"],
            styles: ["jazz", "bebop", "combo"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // Bb Rootless Voicings
    bb_rootless_maj7: {
        id: "bb_rootless_maj7",
        name: "Bb Major 7 Rootless",
        symbol: "Bbmaj7",
        altSymbols: ["BbM7 rootless", "BbΔ7 rootless"],
        root: "Bb",
        quality: "major7",
        voicingType: "rootless",
        voicingDescription: "Rootless voicing",
        intervals: ["3", "5", "7", "9"],
        notes: ["D", "F", "A", "C"],
        frets: [-1, -1, 7, 5, 6, 5],
        fingers: [0, 0, 4, 1, 3, 2],
        barre: null,
        position: 5,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "open", "jazz"],
            styles: ["jazz", "bebop", "combo"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    bb_rootless_min7: {
        id: "bb_rootless_min7",
        name: "Bb Minor 7 Rootless",
        symbol: "Bbm7",
        altSymbols: ["Bbmin7 rootless", "Bb-7 rootless"],
        root: "Bb",
        quality: "minor7",
        voicingType: "rootless",
        voicingDescription: "Rootless voicing",
        intervals: ["b3", "5", "b7", "9"],
        notes: ["Db", "F", "Ab", "C"],
        frets: [-1, -1, 6, 5, 5, 8],
        fingers: [0, 0, 2, 1, 1, 4],
        barre: { fret: 5, fromString: 2, toString: 3 },
        position: 5,
        difficulty: 4,
        categories: {
            moods: ["mellow", "smooth", "jazz"],
            styles: ["jazz", "bebop", "combo"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    bb_rootless_dom7: {
        id: "bb_rootless_dom7",
        name: "Bb Dominant 7 Rootless",
        symbol: "Bb7",
        altSymbols: ["Bbdom7 rootless", "Bb7 rootless"],
        root: "Bb",
        quality: "dominant7",
        voicingType: "rootless",
        voicingDescription: "Rootless voicing",
        intervals: ["3", "b7", "9", "13"],
        notes: ["D", "Ab", "C", "G"],
        frets: [-1, -1, 7, 8, 8, 3],
        fingers: [0, 0, 1, 3, 4, 1],
        barre: null,
        position: 3,
        difficulty: 5,
        categories: {
            moods: ["bluesy", "driving", "jazz"],
            styles: ["jazz", "bebop", "combo"],
            isOpenChord: false,
            isBarreChord: false
        }
    },

    // Eb Rootless Voicings
    eb_rootless_maj7: {
        id: "eb_rootless_maj7",
        name: "Eb Major 7 Rootless",
        symbol: "Ebmaj7",
        altSymbols: ["EbM7 rootless", "EbΔ7 rootless"],
        root: "Eb",
        quality: "major7",
        voicingType: "rootless",
        voicingDescription: "Rootless voicing",
        intervals: ["3", "5", "7", "9"],
        notes: ["G", "Bb", "D", "F"],
        frets: [-1, -1, 0, 3, 3, 1],
        fingers: [0, 0, 0, 3, 4, 1],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["sophisticated", "open", "jazz"],
            styles: ["jazz", "bebop", "combo"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    eb_rootless_min7: {
        id: "eb_rootless_min7",
        name: "Eb Minor 7 Rootless",
        symbol: "Ebm7",
        altSymbols: ["Ebmin7 rootless", "Eb-7 rootless"],
        root: "Eb",
        quality: "minor7",
        voicingType: "rootless",
        voicingDescription: "Rootless voicing",
        intervals: ["b3", "5", "b7", "9"],
        notes: ["Gb", "Bb", "Db", "F"],
        frets: [-1, -1, 2, 2, 2, 1],
        fingers: [0, 0, 2, 3, 4, 1],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["mellow", "smooth", "jazz"],
            styles: ["jazz", "bebop", "combo"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    eb_rootless_dom7: {
        id: "eb_rootless_dom7",
        name: "Eb Dominant 7 Rootless",
        symbol: "Eb7",
        altSymbols: ["Ebdom7 rootless", "Eb7 rootless"],
        root: "Eb",
        quality: "dominant7",
        voicingType: "rootless",
        voicingDescription: "Rootless voicing",
        intervals: ["3", "b7", "9", "13"],
        notes: ["G", "Db", "F", "C"],
        frets: [-1, -1, 0, 1, 1, 0],
        fingers: [0, 0, 0, 2, 3, 0],
        barre: null,
        position: 1,
        difficulty: 5,
        categories: {
            moods: ["bluesy", "driving", "jazz"],
            styles: ["jazz", "bebop", "combo"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // ============================================
    // BATCH 11: Beautiful/Colorful Jazz Voicings
    // ============================================

    // Maj7#5 Voicings - Dreamy augmented major sound
    c_maj7sharp5_v1: {
        id: "c_maj7sharp5_v1",
        name: "C Major 7#5",
        symbol: "Cmaj7#5",
        altSymbols: ["CMaj7(#5)", "CΔ7#5"],
        root: "C",
        quality: "major7sharp5",
        voicingType: "standard",
        voicingDescription: "Maj7#5 voicing",
        intervals: ["1", "3", "#5", "7"],
        notes: ["C", "E", "G#", "B"],
        frets: [-1, 3, 2, 1, 0, 0],
        fingers: [0, 3, 2, 1, 0, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "ethereal", "mysterious"],
            styles: ["jazz", "impressionist", "contemporary"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    c_maj7sharp5_v2: {
        id: "c_maj7sharp5_v2",
        name: "C Major 7#5",
        symbol: "Cmaj7#5",
        altSymbols: ["CMaj7(#5)", "CΔ7#5"],
        root: "C",
        quality: "major7sharp5",
        voicingType: "standard",
        voicingDescription: "Maj7#5 voicing",
        intervals: ["1", "3", "#5", "7"],
        notes: ["C", "E", "G#", "B"],
        frets: [8, -1, 9, 9, 8, -1],
        fingers: [1, 0, 2, 3, 1, 0],
        barre: { fret: 8, fromString: 6, toString: 3 },
        position: 8,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "ethereal", "mysterious"],
            styles: ["jazz", "impressionist", "contemporary"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    d_maj7sharp5_v1: {
        id: "d_maj7sharp5_v1",
        name: "D Major 7#5",
        symbol: "Dmaj7#5",
        altSymbols: ["DMaj7(#5)", "DΔ7#5"],
        root: "D",
        quality: "major7sharp5",
        voicingType: "standard",
        voicingDescription: "Maj7#5 voicing",
        intervals: ["1", "3", "#5", "7"],
        notes: ["D", "F#", "A#", "C#"],
        frets: [-1, -1, 0, 3, 3, 2],
        fingers: [0, 0, 0, 2, 3, 1],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "ethereal", "mysterious"],
            styles: ["jazz", "impressionist", "contemporary"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    d_maj7sharp5_v2: {
        id: "d_maj7sharp5_v2",
        name: "D Major 7#5",
        symbol: "Dmaj7#5",
        altSymbols: ["DMaj7(#5)", "DΔ7#5"],
        root: "D",
        quality: "major7sharp5",
        voicingType: "standard",
        voicingDescription: "Maj7#5 voicing",
        intervals: ["1", "3", "#5", "7"],
        notes: ["D", "F#", "A#", "C#"],
        frets: [10, -1, 11, 11, 10, -1],
        fingers: [1, 0, 2, 3, 1, 0],
        barre: { fret: 10, fromString: 6, toString: 3 },
        position: 10,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "ethereal", "mysterious"],
            styles: ["jazz", "impressionist", "contemporary"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    e_maj7sharp5_v1: {
        id: "e_maj7sharp5_v1",
        name: "E Major 7#5",
        symbol: "Emaj7#5",
        altSymbols: ["EMaj7(#5)", "EΔ7#5"],
        root: "E",
        quality: "major7sharp5",
        voicingType: "standard",
        voicingDescription: "Maj7#5 voicing",
        intervals: ["1", "3", "#5", "7"],
        notes: ["E", "G#", "B#", "D#"],
        frets: [0, -1, 1, 1, 0, 0],
        fingers: [0, 0, 2, 3, 0, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "ethereal", "mysterious"],
            styles: ["jazz", "impressionist", "contemporary"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_maj7sharp5_v2: {
        id: "e_maj7sharp5_v2",
        name: "E Major 7#5",
        symbol: "Emaj7#5",
        altSymbols: ["EMaj7(#5)", "EΔ7#5"],
        root: "E",
        quality: "major7sharp5",
        voicingType: "standard",
        voicingDescription: "Maj7#5 voicing",
        intervals: ["1", "3", "#5", "7"],
        notes: ["E", "G#", "B#", "D#"],
        frets: [-1, 7, 6, 8, 8, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 6,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "ethereal", "mysterious"],
            styles: ["jazz", "impressionist", "contemporary"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_maj7sharp5_v1: {
        id: "f_maj7sharp5_v1",
        name: "F Major 7#5",
        symbol: "Fmaj7#5",
        altSymbols: ["FMaj7(#5)", "FΔ7#5"],
        root: "F",
        quality: "major7sharp5",
        voicingType: "standard",
        voicingDescription: "Maj7#5 voicing",
        intervals: ["1", "3", "#5", "7"],
        notes: ["F", "A", "C#", "E"],
        frets: [1, 0, 2, 1, 1, 0],
        fingers: [1, 0, 3, 2, 1, 0],
        barre: { fret: 1, fromString: 6, toString: 3 },
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "ethereal", "mysterious"],
            styles: ["jazz", "impressionist", "contemporary"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    f_maj7sharp5_v2: {
        id: "f_maj7sharp5_v2",
        name: "F Major 7#5",
        symbol: "Fmaj7#5",
        altSymbols: ["FMaj7(#5)", "FΔ7#5"],
        root: "F",
        quality: "major7sharp5",
        voicingType: "standard",
        voicingDescription: "Maj7#5 voicing",
        intervals: ["1", "3", "#5", "7"],
        notes: ["F", "A", "C#", "E"],
        frets: [-1, -1, 3, 2, 2, 0],
        fingers: [0, 0, 3, 1, 2, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "ethereal", "mysterious"],
            styles: ["jazz", "impressionist", "contemporary"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    g_maj7sharp5_v1: {
        id: "g_maj7sharp5_v1",
        name: "G Major 7#5",
        symbol: "Gmaj7#5",
        altSymbols: ["GMaj7(#5)", "GΔ7#5"],
        root: "G",
        quality: "major7sharp5",
        voicingType: "standard",
        voicingDescription: "Maj7#5 voicing",
        intervals: ["1", "3", "#5", "7"],
        notes: ["G", "B", "D#", "F#"],
        frets: [3, 2, 4, 3, 3, 2],
        fingers: [2, 1, 4, 3, 3, 1],
        barre: { fret: 2, fromString: 5, toString: 1 },
        position: 2,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "ethereal", "mysterious"],
            styles: ["jazz", "impressionist", "contemporary"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    g_maj7sharp5_v2: {
        id: "g_maj7sharp5_v2",
        name: "G Major 7#5",
        symbol: "Gmaj7#5",
        altSymbols: ["GMaj7(#5)", "GΔ7#5"],
        root: "G",
        quality: "major7sharp5",
        voicingType: "standard",
        voicingDescription: "Maj7#5 voicing",
        intervals: ["1", "3", "#5", "7"],
        notes: ["G", "B", "D#", "F#"],
        frets: [-1, -1, 5, 4, 4, 2],
        fingers: [0, 0, 4, 2, 3, 1],
        barre: null,
        position: 2,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "ethereal", "mysterious"],
            styles: ["jazz", "impressionist", "contemporary"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_maj7sharp5_v1: {
        id: "a_maj7sharp5_v1",
        name: "A Major 7#5",
        symbol: "Amaj7#5",
        altSymbols: ["AMaj7(#5)", "AΔ7#5"],
        root: "A",
        quality: "major7sharp5",
        voicingType: "standard",
        voicingDescription: "Maj7#5 voicing",
        intervals: ["1", "3", "#5", "7"],
        notes: ["A", "C#", "E#", "G#"],
        frets: [-1, 0, 2, 1, 2, 0],
        fingers: [0, 0, 2, 1, 3, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "ethereal", "mysterious"],
            styles: ["jazz", "impressionist", "contemporary"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    a_maj7sharp5_v2: {
        id: "a_maj7sharp5_v2",
        name: "A Major 7#5",
        symbol: "Amaj7#5",
        altSymbols: ["AMaj7(#5)", "AΔ7#5"],
        root: "A",
        quality: "major7sharp5",
        voicingType: "standard",
        voicingDescription: "Maj7#5 voicing",
        intervals: ["1", "3", "#5", "7"],
        notes: ["A", "C#", "E#", "G#"],
        frets: [5, -1, 6, 6, 5, -1],
        fingers: [1, 0, 2, 3, 1, 0],
        barre: { fret: 5, fromString: 6, toString: 3 },
        position: 5,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "ethereal", "mysterious"],
            styles: ["jazz", "impressionist", "contemporary"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    bb_maj7sharp5_v1: {
        id: "bb_maj7sharp5_v1",
        name: "Bb Major 7#5",
        symbol: "Bbmaj7#5",
        altSymbols: ["BbMaj7(#5)", "BbΔ7#5"],
        root: "Bb",
        quality: "major7sharp5",
        voicingType: "standard",
        voicingDescription: "Maj7#5 voicing",
        intervals: ["1", "3", "#5", "7"],
        notes: ["Bb", "D", "F#", "A"],
        frets: [6, -1, 7, 7, 6, -1],
        fingers: [1, 0, 2, 3, 1, 0],
        barre: { fret: 6, fromString: 6, toString: 3 },
        position: 6,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "ethereal", "mysterious"],
            styles: ["jazz", "impressionist", "contemporary"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    bb_maj7sharp5_v2: {
        id: "bb_maj7sharp5_v2",
        name: "Bb Major 7#5",
        symbol: "Bbmaj7#5",
        altSymbols: ["BbMaj7(#5)", "BbΔ7#5"],
        root: "Bb",
        quality: "major7sharp5",
        voicingType: "standard",
        voicingDescription: "Maj7#5 voicing",
        intervals: ["1", "3", "#5", "7"],
        notes: ["Bb", "D", "F#", "A"],
        frets: [-1, 1, 0, 2, 2, 1],
        fingers: [0, 1, 0, 3, 4, 2],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["dreamy", "ethereal", "mysterious"],
            styles: ["jazz", "impressionist", "contemporary"],
            isOpenChord: true,
            isBarreChord: false
        }
    },

    // Maj9#11 Voicings - Ultimate Lydian sound, very ethereal
    c_maj9sharp11_v1: {
        id: "c_maj9sharp11_v1",
        name: "C Major 9#11",
        symbol: "Cmaj9#11",
        altSymbols: ["CΔ9#11", "Cmaj9(#11)", "C Lydian"],
        root: "C",
        quality: "major9sharp11",
        voicingType: "extended",
        voicingDescription: "Maj9#11 (Lydian)",
        intervals: ["1", "3", "7", "9", "#11"],
        notes: ["C", "E", "B", "D", "F#"],
        frets: [-1, 3, 4, 4, 5, 2],
        fingers: [0, 1, 2, 3, 4, 1],
        barre: null,
        position: 2,
        difficulty: 5,
        categories: {
            moods: ["ethereal", "floating", "magical"],
            styles: ["jazz", "impressionist", "film-score"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_maj9sharp11_v2: {
        id: "c_maj9sharp11_v2",
        name: "C Major 9#11",
        symbol: "Cmaj9#11",
        altSymbols: ["CΔ9#11", "Cmaj9(#11)", "C Lydian"],
        root: "C",
        quality: "major9sharp11",
        voicingType: "extended",
        voicingDescription: "Maj9#11 (Lydian)",
        intervals: ["1", "3", "7", "9", "#11"],
        notes: ["C", "E", "B", "D", "F#"],
        frets: [8, -1, 9, 9, 10, 9],
        fingers: [1, 0, 2, 2, 4, 3],
        barre: { fret: 9, fromString: 4, toString: 2 },
        position: 8,
        difficulty: 5,
        categories: {
            moods: ["ethereal", "floating", "magical"],
            styles: ["jazz", "impressionist", "film-score"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    d_maj9sharp11_v1: {
        id: "d_maj9sharp11_v1",
        name: "D Major 9#11",
        symbol: "Dmaj9#11",
        altSymbols: ["DΔ9#11", "Dmaj9(#11)", "D Lydian"],
        root: "D",
        quality: "major9sharp11",
        voicingType: "extended",
        voicingDescription: "Maj9#11 (Lydian)",
        intervals: ["1", "3", "7", "9", "#11"],
        notes: ["D", "F#", "C#", "E", "G#"],
        frets: [-1, -1, 0, 1, 2, 1],
        fingers: [0, 0, 0, 1, 3, 2],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["ethereal", "floating", "magical"],
            styles: ["jazz", "impressionist", "film-score"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    d_maj9sharp11_v2: {
        id: "d_maj9sharp11_v2",
        name: "D Major 9#11",
        symbol: "Dmaj9#11",
        altSymbols: ["DΔ9#11", "Dmaj9(#11)", "D Lydian"],
        root: "D",
        quality: "major9sharp11",
        voicingType: "extended",
        voicingDescription: "Maj9#11 (Lydian)",
        intervals: ["1", "3", "7", "9", "#11"],
        notes: ["D", "F#", "C#", "E", "G#"],
        frets: [10, -1, 11, 11, 12, 11],
        fingers: [1, 0, 2, 2, 4, 3],
        barre: { fret: 11, fromString: 4, toString: 2 },
        position: 10,
        difficulty: 5,
        categories: {
            moods: ["ethereal", "floating", "magical"],
            styles: ["jazz", "impressionist", "film-score"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    e_maj9sharp11_v1: {
        id: "e_maj9sharp11_v1",
        name: "E Major 9#11",
        symbol: "Emaj9#11",
        altSymbols: ["EΔ9#11", "Emaj9(#11)", "E Lydian"],
        root: "E",
        quality: "major9sharp11",
        voicingType: "extended",
        voicingDescription: "Maj9#11 (Lydian)",
        intervals: ["1", "3", "7", "9", "#11"],
        notes: ["E", "G#", "D#", "F#", "A#"],
        frets: [0, -1, 1, 1, 1, 1],
        fingers: [0, 0, 1, 1, 1, 1],
        barre: { fret: 1, fromString: 4, toString: 1 },
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["ethereal", "floating", "magical"],
            styles: ["jazz", "impressionist", "film-score"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    e_maj9sharp11_v2: {
        id: "e_maj9sharp11_v2",
        name: "E Major 9#11",
        symbol: "Emaj9#11",
        altSymbols: ["EΔ9#11", "Emaj9(#11)", "E Lydian"],
        root: "E",
        quality: "major9sharp11",
        voicingType: "extended",
        voicingDescription: "Maj9#11 (Lydian)",
        intervals: ["1", "3", "7", "9", "#11"],
        notes: ["E", "G#", "D#", "F#", "A#"],
        frets: [-1, 7, 8, 8, 9, 8],
        fingers: [0, 1, 2, 2, 4, 3],
        barre: { fret: 8, fromString: 4, toString: 2 },
        position: 7,
        difficulty: 5,
        categories: {
            moods: ["ethereal", "floating", "magical"],
            styles: ["jazz", "impressionist", "film-score"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    f_maj9sharp11_v1: {
        id: "f_maj9sharp11_v1",
        name: "F Major 9#11",
        symbol: "Fmaj9#11",
        altSymbols: ["FΔ9#11", "Fmaj9(#11)", "F Lydian"],
        root: "F",
        quality: "major9sharp11",
        voicingType: "extended",
        voicingDescription: "Maj9#11 (Lydian)",
        intervals: ["1", "3", "7", "9", "#11"],
        notes: ["F", "A", "E", "G", "B"],
        frets: [1, 0, 2, 0, 0, 0],
        fingers: [1, 0, 2, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["ethereal", "floating", "magical"],
            styles: ["jazz", "impressionist", "film-score"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    f_maj9sharp11_v2: {
        id: "f_maj9sharp11_v2",
        name: "F Major 9#11",
        symbol: "Fmaj9#11",
        altSymbols: ["FΔ9#11", "Fmaj9(#11)", "F Lydian"],
        root: "F",
        quality: "major9sharp11",
        voicingType: "extended",
        voicingDescription: "Maj9#11 (Lydian)",
        intervals: ["1", "3", "7", "9", "#11"],
        notes: ["F", "A", "E", "G", "B"],
        frets: [-1, -1, 3, 2, 3, 0],
        fingers: [0, 0, 2, 1, 3, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["ethereal", "floating", "magical"],
            styles: ["jazz", "impressionist", "film-score"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    g_maj9sharp11_v1: {
        id: "g_maj9sharp11_v1",
        name: "G Major 9#11",
        symbol: "Gmaj9#11",
        altSymbols: ["GΔ9#11", "Gmaj9(#11)", "G Lydian"],
        root: "G",
        quality: "major9sharp11",
        voicingType: "extended",
        voicingDescription: "Maj9#11 (Lydian)",
        intervals: ["1", "3", "7", "9", "#11"],
        notes: ["G", "B", "F#", "A", "C#"],
        frets: [3, 2, 4, 2, 2, 2],
        fingers: [2, 1, 4, 1, 1, 1],
        barre: { fret: 2, fromString: 5, toString: 1 },
        position: 2,
        difficulty: 5,
        categories: {
            moods: ["ethereal", "floating", "magical"],
            styles: ["jazz", "impressionist", "film-score"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    g_maj9sharp11_v2: {
        id: "g_maj9sharp11_v2",
        name: "G Major 9#11",
        symbol: "Gmaj9#11",
        altSymbols: ["GΔ9#11", "Gmaj9(#11)", "G Lydian"],
        root: "G",
        quality: "major9sharp11",
        voicingType: "extended",
        voicingDescription: "Maj9#11 (Lydian)",
        intervals: ["1", "3", "7", "9", "#11"],
        notes: ["G", "B", "F#", "A", "C#"],
        frets: [-1, -1, 5, 4, 5, 2],
        fingers: [0, 0, 3, 2, 4, 1],
        barre: null,
        position: 2,
        difficulty: 4,
        categories: {
            moods: ["ethereal", "floating", "magical"],
            styles: ["jazz", "impressionist", "film-score"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_maj9sharp11_v1: {
        id: "a_maj9sharp11_v1",
        name: "A Major 9#11",
        symbol: "Amaj9#11",
        altSymbols: ["AΔ9#11", "Amaj9(#11)", "A Lydian"],
        root: "A",
        quality: "major9sharp11",
        voicingType: "extended",
        voicingDescription: "Maj9#11 (Lydian)",
        intervals: ["1", "3", "7", "9", "#11"],
        notes: ["A", "C#", "G#", "B", "D#"],
        frets: [-1, 0, 1, 1, 1, 1],
        fingers: [0, 0, 1, 1, 1, 1],
        barre: { fret: 1, fromString: 4, toString: 1 },
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["ethereal", "floating", "magical"],
            styles: ["jazz", "impressionist", "film-score"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    a_maj9sharp11_v2: {
        id: "a_maj9sharp11_v2",
        name: "A Major 9#11",
        symbol: "Amaj9#11",
        altSymbols: ["AΔ9#11", "Amaj9(#11)", "A Lydian"],
        root: "A",
        quality: "major9sharp11",
        voicingType: "extended",
        voicingDescription: "Maj9#11 (Lydian)",
        intervals: ["1", "3", "7", "9", "#11"],
        notes: ["A", "C#", "G#", "B", "D#"],
        frets: [5, -1, 6, 6, 7, 6],
        fingers: [1, 0, 2, 2, 4, 3],
        barre: { fret: 6, fromString: 4, toString: 2 },
        position: 5,
        difficulty: 5,
        categories: {
            moods: ["ethereal", "floating", "magical"],
            styles: ["jazz", "impressionist", "film-score"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // 7#9#5 Voicings - Very altered, maximum tension
    c_7sharp9sharp5_v1: {
        id: "c_7sharp9sharp5_v1",
        name: "C 7#9#5",
        symbol: "C7#9#5",
        altSymbols: ["C7(#9#5)", "C7alt"],
        root: "C",
        quality: "dominant7sharp9sharp5",
        voicingType: "altered",
        voicingDescription: "7#9#5 (altered)",
        intervals: ["1", "3", "#5", "b7", "#9"],
        notes: ["C", "E", "G#", "Bb", "D#"],
        frets: [-1, 3, 2, 3, 4, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 2,
        difficulty: 5,
        categories: {
            moods: ["tense", "dramatic", "dissonant"],
            styles: ["jazz", "bebop", "avant-garde"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    c_7sharp9sharp5_v2: {
        id: "c_7sharp9sharp5_v2",
        name: "C 7#9#5",
        symbol: "C7#9#5",
        altSymbols: ["C7(#9#5)", "C7alt"],
        root: "C",
        quality: "dominant7sharp9sharp5",
        voicingType: "altered",
        voicingDescription: "7#9#5 (altered)",
        intervals: ["1", "3", "#5", "b7", "#9"],
        notes: ["C", "E", "G#", "Bb", "D#"],
        frets: [8, -1, 8, 9, 9, -1],
        fingers: [1, 0, 1, 2, 3, 0],
        barre: { fret: 8, fromString: 6, toString: 4 },
        position: 8,
        difficulty: 5,
        categories: {
            moods: ["tense", "dramatic", "dissonant"],
            styles: ["jazz", "bebop", "avant-garde"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    d_7sharp9sharp5_v1: {
        id: "d_7sharp9sharp5_v1",
        name: "D 7#9#5",
        symbol: "D7#9#5",
        altSymbols: ["D7(#9#5)", "D7alt"],
        root: "D",
        quality: "dominant7sharp9sharp5",
        voicingType: "altered",
        voicingDescription: "7#9#5 (altered)",
        intervals: ["1", "3", "#5", "b7", "#9"],
        notes: ["D", "F#", "A#", "C", "E#"],
        frets: [-1, -1, 0, 3, 3, 2],
        fingers: [0, 0, 0, 2, 3, 1],
        barre: null,
        position: 1,
        difficulty: 5,
        categories: {
            moods: ["tense", "dramatic", "dissonant"],
            styles: ["jazz", "bebop", "avant-garde"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_7sharp9sharp5_v1: {
        id: "e_7sharp9sharp5_v1",
        name: "E 7#9#5",
        symbol: "E7#9#5",
        altSymbols: ["E7(#9#5)", "E7alt"],
        root: "E",
        quality: "dominant7sharp9sharp5",
        voicingType: "altered",
        voicingDescription: "7#9#5 (altered)",
        intervals: ["1", "3", "#5", "b7", "#9"],
        notes: ["E", "G#", "B#", "D", "Fx"],
        frets: [0, -1, 0, 1, 1, -1],
        fingers: [0, 0, 0, 1, 2, 0],
        barre: null,
        position: 1,
        difficulty: 5,
        categories: {
            moods: ["tense", "dramatic", "dissonant"],
            styles: ["jazz", "bebop", "avant-garde"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_7sharp9sharp5_v2: {
        id: "e_7sharp9sharp5_v2",
        name: "E 7#9#5",
        symbol: "E7#9#5",
        altSymbols: ["E7(#9#5)", "E7alt"],
        root: "E",
        quality: "dominant7sharp9sharp5",
        voicingType: "altered",
        voicingDescription: "7#9#5 (altered)",
        intervals: ["1", "3", "#5", "b7", "#9"],
        notes: ["E", "G#", "B#", "D", "Fx"],
        frets: [-1, 7, 6, 7, 8, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        barre: null,
        position: 6,
        difficulty: 5,
        categories: {
            moods: ["tense", "dramatic", "dissonant"],
            styles: ["jazz", "bebop", "avant-garde"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    f_7sharp9sharp5_v1: {
        id: "f_7sharp9sharp5_v1",
        name: "F 7#9#5",
        symbol: "F7#9#5",
        altSymbols: ["F7(#9#5)", "F7alt"],
        root: "F",
        quality: "dominant7sharp9sharp5",
        voicingType: "altered",
        voicingDescription: "7#9#5 (altered)",
        intervals: ["1", "3", "#5", "b7", "#9"],
        notes: ["F", "A", "C#", "Eb", "G#"],
        frets: [1, -1, 1, 2, 2, -1],
        fingers: [1, 0, 1, 2, 3, 0],
        barre: { fret: 1, fromString: 6, toString: 4 },
        position: 1,
        difficulty: 5,
        categories: {
            moods: ["tense", "dramatic", "dissonant"],
            styles: ["jazz", "bebop", "avant-garde"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    g_7sharp9sharp5_v1: {
        id: "g_7sharp9sharp5_v1",
        name: "G 7#9#5",
        symbol: "G7#9#5",
        altSymbols: ["G7(#9#5)", "G7alt"],
        root: "G",
        quality: "dominant7sharp9sharp5",
        voicingType: "altered",
        voicingDescription: "7#9#5 (altered)",
        intervals: ["1", "3", "#5", "b7", "#9"],
        notes: ["G", "B", "D#", "F", "A#"],
        frets: [3, -1, 3, 4, 4, -1],
        fingers: [1, 0, 1, 2, 3, 0],
        barre: { fret: 3, fromString: 6, toString: 4 },
        position: 3,
        difficulty: 5,
        categories: {
            moods: ["tense", "dramatic", "dissonant"],
            styles: ["jazz", "bebop", "avant-garde"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    g_7sharp9sharp5_v2: {
        id: "g_7sharp9sharp5_v2",
        name: "G 7#9#5",
        symbol: "G7#9#5",
        altSymbols: ["G7(#9#5)", "G7alt"],
        root: "G",
        quality: "dominant7sharp9sharp5",
        voicingType: "altered",
        voicingDescription: "7#9#5 (altered)",
        intervals: ["1", "3", "#5", "b7", "#9"],
        notes: ["G", "B", "D#", "F", "A#"],
        frets: [-1, -1, 5, 6, 6, 5],
        fingers: [0, 0, 1, 2, 3, 1],
        barre: { fret: 5, fromString: 4, toString: 1 },
        position: 5,
        difficulty: 5,
        categories: {
            moods: ["tense", "dramatic", "dissonant"],
            styles: ["jazz", "bebop", "avant-garde"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    a_7sharp9sharp5_v1: {
        id: "a_7sharp9sharp5_v1",
        name: "A 7#9#5",
        symbol: "A7#9#5",
        altSymbols: ["A7(#9#5)", "A7alt"],
        root: "A",
        quality: "dominant7sharp9sharp5",
        voicingType: "altered",
        voicingDescription: "7#9#5 (altered)",
        intervals: ["1", "3", "#5", "b7", "#9"],
        notes: ["A", "C#", "E#", "G", "B#"],
        frets: [5, -1, 5, 6, 6, -1],
        fingers: [1, 0, 1, 2, 3, 0],
        barre: { fret: 5, fromString: 6, toString: 4 },
        position: 5,
        difficulty: 5,
        categories: {
            moods: ["tense", "dramatic", "dissonant"],
            styles: ["jazz", "bebop", "avant-garde"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // 7b9b5 Voicings - Dark altered dominant
    c_7flat9flat5_v1: {
        id: "c_7flat9flat5_v1",
        name: "C 7b9b5",
        symbol: "C7b9b5",
        altSymbols: ["C7(b9b5)", "C7alt"],
        root: "C",
        quality: "dominant7flat9flat5",
        voicingType: "altered",
        voicingDescription: "7b9b5 (altered)",
        intervals: ["1", "3", "b5", "b7", "b9"],
        notes: ["C", "E", "Gb", "Bb", "Db"],
        frets: [-1, 3, 4, 3, 4, 4],
        fingers: [0, 1, 2, 1, 3, 4],
        barre: { fret: 3, fromString: 5, toString: 4 },
        position: 3,
        difficulty: 5,
        categories: {
            moods: ["dark", "tense", "ominous"],
            styles: ["jazz", "bebop", "film-noir"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    c_7flat9flat5_v2: {
        id: "c_7flat9flat5_v2",
        name: "C 7b9b5",
        symbol: "C7b9b5",
        altSymbols: ["C7(b9b5)", "C7alt"],
        root: "C",
        quality: "dominant7flat9flat5",
        voicingType: "altered",
        voicingDescription: "7b9b5 (altered)",
        intervals: ["1", "3", "b5", "b7", "b9"],
        notes: ["C", "E", "Gb", "Bb", "Db"],
        frets: [8, -1, 8, 9, 8, 9],
        fingers: [1, 0, 1, 3, 2, 4],
        barre: { fret: 8, fromString: 6, toString: 4 },
        position: 8,
        difficulty: 5,
        categories: {
            moods: ["dark", "tense", "ominous"],
            styles: ["jazz", "bebop", "film-noir"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    d_7flat9flat5_v1: {
        id: "d_7flat9flat5_v1",
        name: "D 7b9b5",
        symbol: "D7b9b5",
        altSymbols: ["D7(b9b5)", "D7alt"],
        root: "D",
        quality: "dominant7flat9flat5",
        voicingType: "altered",
        voicingDescription: "7b9b5 (altered)",
        intervals: ["1", "3", "b5", "b7", "b9"],
        notes: ["D", "F#", "Ab", "C", "Eb"],
        frets: [-1, -1, 0, 1, 0, 2],
        fingers: [0, 0, 0, 1, 0, 2],
        barre: null,
        position: 1,
        difficulty: 5,
        categories: {
            moods: ["dark", "tense", "ominous"],
            styles: ["jazz", "bebop", "film-noir"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    d_7flat9flat5_v2: {
        id: "d_7flat9flat5_v2",
        name: "D 7b9b5",
        symbol: "D7b9b5",
        altSymbols: ["D7(b9b5)", "D7alt"],
        root: "D",
        quality: "dominant7flat9flat5",
        voicingType: "altered",
        voicingDescription: "7b9b5 (altered)",
        intervals: ["1", "3", "b5", "b7", "b9"],
        notes: ["D", "F#", "Ab", "C", "Eb"],
        frets: [10, -1, 10, 11, 10, 11],
        fingers: [1, 0, 1, 3, 2, 4],
        barre: { fret: 10, fromString: 6, toString: 4 },
        position: 10,
        difficulty: 5,
        categories: {
            moods: ["dark", "tense", "ominous"],
            styles: ["jazz", "bebop", "film-noir"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    e_7flat9flat5_v1: {
        id: "e_7flat9flat5_v1",
        name: "E 7b9b5",
        symbol: "E7b9b5",
        altSymbols: ["E7(b9b5)", "E7alt"],
        root: "E",
        quality: "dominant7flat9flat5",
        voicingType: "altered",
        voicingDescription: "7b9b5 (altered)",
        intervals: ["1", "3", "b5", "b7", "b9"],
        notes: ["E", "G#", "Bb", "D", "F"],
        frets: [0, -1, 0, 1, 0, 1],
        fingers: [0, 0, 0, 1, 0, 2],
        barre: null,
        position: 1,
        difficulty: 5,
        categories: {
            moods: ["dark", "tense", "ominous"],
            styles: ["jazz", "bebop", "film-noir"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    f_7flat9flat5_v1: {
        id: "f_7flat9flat5_v1",
        name: "F 7b9b5",
        symbol: "F7b9b5",
        altSymbols: ["F7(b9b5)", "F7alt"],
        root: "F",
        quality: "dominant7flat9flat5",
        voicingType: "altered",
        voicingDescription: "7b9b5 (altered)",
        intervals: ["1", "3", "b5", "b7", "b9"],
        notes: ["F", "A", "Cb", "Eb", "Gb"],
        frets: [1, -1, 1, 2, 1, 2],
        fingers: [1, 0, 1, 3, 2, 4],
        barre: { fret: 1, fromString: 6, toString: 3 },
        position: 1,
        difficulty: 5,
        categories: {
            moods: ["dark", "tense", "ominous"],
            styles: ["jazz", "bebop", "film-noir"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    g_7flat9flat5_v1: {
        id: "g_7flat9flat5_v1",
        name: "G 7b9b5",
        symbol: "G7b9b5",
        altSymbols: ["G7(b9b5)", "G7alt"],
        root: "G",
        quality: "dominant7flat9flat5",
        voicingType: "altered",
        voicingDescription: "7b9b5 (altered)",
        intervals: ["1", "3", "b5", "b7", "b9"],
        notes: ["G", "B", "Db", "F", "Ab"],
        frets: [3, -1, 3, 4, 3, 4],
        fingers: [1, 0, 1, 3, 2, 4],
        barre: { fret: 3, fromString: 6, toString: 3 },
        position: 3,
        difficulty: 5,
        categories: {
            moods: ["dark", "tense", "ominous"],
            styles: ["jazz", "bebop", "film-noir"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    g_7flat9flat5_v2: {
        id: "g_7flat9flat5_v2",
        name: "G 7b9b5",
        symbol: "G7b9b5",
        altSymbols: ["G7(b9b5)", "G7alt"],
        root: "G",
        quality: "dominant7flat9flat5",
        voicingType: "altered",
        voicingDescription: "7b9b5 (altered)",
        intervals: ["1", "3", "b5", "b7", "b9"],
        notes: ["G", "B", "Db", "F", "Ab"],
        frets: [-1, -1, 5, 6, 6, 4],
        fingers: [0, 0, 2, 3, 4, 1],
        barre: null,
        position: 4,
        difficulty: 5,
        categories: {
            moods: ["dark", "tense", "ominous"],
            styles: ["jazz", "bebop", "film-noir"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    a_7flat9flat5_v1: {
        id: "a_7flat9flat5_v1",
        name: "A 7b9b5",
        symbol: "A7b9b5",
        altSymbols: ["A7(b9b5)", "A7alt"],
        root: "A",
        quality: "dominant7flat9flat5",
        voicingType: "altered",
        voicingDescription: "7b9b5 (altered)",
        intervals: ["1", "3", "b5", "b7", "b9"],
        notes: ["A", "C#", "Eb", "G", "Bb"],
        frets: [5, -1, 5, 6, 5, 6],
        fingers: [1, 0, 1, 3, 2, 4],
        barre: { fret: 5, fromString: 6, toString: 3 },
        position: 5,
        difficulty: 5,
        categories: {
            moods: ["dark", "tense", "ominous"],
            styles: ["jazz", "bebop", "film-noir"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // Min9b5 Voicings - Extended half-diminished
    c_min9flat5_v1: {
        id: "c_min9flat5_v1",
        name: "C Minor 9b5",
        symbol: "Cm9b5",
        altSymbols: ["Cø9", "Cm9(b5)", "C half-dim9"],
        root: "C",
        quality: "minor9flat5",
        voicingType: "half-diminished",
        voicingDescription: "Min9b5 voicing",
        intervals: ["1", "b3", "b5", "b7", "9"],
        notes: ["C", "Eb", "Gb", "Bb", "D"],
        frets: [-1, 3, 4, 3, 4, 3],
        fingers: [0, 1, 3, 2, 4, 1],
        barre: { fret: 3, fromString: 5, toString: 1 },
        position: 3,
        difficulty: 5,
        categories: {
            moods: ["melancholic", "mysterious", "reflective"],
            styles: ["jazz", "ballad", "film-score"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    c_min9flat5_v2: {
        id: "c_min9flat5_v2",
        name: "C Minor 9b5",
        symbol: "Cm9b5",
        altSymbols: ["Cø9", "Cm9(b5)", "C half-dim9"],
        root: "C",
        quality: "minor9flat5",
        voicingType: "half-diminished",
        voicingDescription: "Min9b5 voicing",
        intervals: ["1", "b3", "b5", "b7", "9"],
        notes: ["C", "Eb", "Gb", "Bb", "D"],
        frets: [8, -1, 8, 8, 8, 10],
        fingers: [1, 0, 1, 1, 1, 4],
        barre: { fret: 8, fromString: 6, toString: 3 },
        position: 8,
        difficulty: 5,
        categories: {
            moods: ["melancholic", "mysterious", "reflective"],
            styles: ["jazz", "ballad", "film-score"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    d_min9flat5_v1: {
        id: "d_min9flat5_v1",
        name: "D Minor 9b5",
        symbol: "Dm9b5",
        altSymbols: ["Dø9", "Dm9(b5)", "D half-dim9"],
        root: "D",
        quality: "minor9flat5",
        voicingType: "half-diminished",
        voicingDescription: "Min9b5 voicing",
        intervals: ["1", "b3", "b5", "b7", "9"],
        notes: ["D", "F", "Ab", "C", "E"],
        frets: [-1, -1, 0, 1, 1, 0],
        fingers: [0, 0, 0, 1, 2, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["melancholic", "mysterious", "reflective"],
            styles: ["jazz", "ballad", "film-score"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    d_min9flat5_v2: {
        id: "d_min9flat5_v2",
        name: "D Minor 9b5",
        symbol: "Dm9b5",
        altSymbols: ["Dø9", "Dm9(b5)", "D half-dim9"],
        root: "D",
        quality: "minor9flat5",
        voicingType: "half-diminished",
        voicingDescription: "Min9b5 voicing",
        intervals: ["1", "b3", "b5", "b7", "9"],
        notes: ["D", "F", "Ab", "C", "E"],
        frets: [10, -1, 10, 10, 10, 12],
        fingers: [1, 0, 1, 1, 1, 4],
        barre: { fret: 10, fromString: 6, toString: 3 },
        position: 10,
        difficulty: 5,
        categories: {
            moods: ["melancholic", "mysterious", "reflective"],
            styles: ["jazz", "ballad", "film-score"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    e_min9flat5_v1: {
        id: "e_min9flat5_v1",
        name: "E Minor 9b5",
        symbol: "Em9b5",
        altSymbols: ["Eø9", "Em9(b5)", "E half-dim9"],
        root: "E",
        quality: "minor9flat5",
        voicingType: "half-diminished",
        voicingDescription: "Min9b5 voicing",
        intervals: ["1", "b3", "b5", "b7", "9"],
        notes: ["E", "G", "Bb", "D", "F#"],
        frets: [0, -1, 0, 0, 0, 2],
        fingers: [0, 0, 0, 0, 0, 2],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["melancholic", "mysterious", "reflective"],
            styles: ["jazz", "ballad", "film-score"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    a_min9flat5_v1: {
        id: "a_min9flat5_v1",
        name: "A Minor 9b5",
        symbol: "Am9b5",
        altSymbols: ["Aø9", "Am9(b5)", "A half-dim9"],
        root: "A",
        quality: "minor9flat5",
        voicingType: "half-diminished",
        voicingDescription: "Min9b5 voicing",
        intervals: ["1", "b3", "b5", "b7", "9"],
        notes: ["A", "C", "Eb", "G", "B"],
        frets: [-1, 0, 1, 0, 1, 0],
        fingers: [0, 0, 2, 0, 3, 0],
        barre: null,
        position: 1,
        difficulty: 4,
        categories: {
            moods: ["melancholic", "mysterious", "reflective"],
            styles: ["jazz", "ballad", "film-score"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    a_min9flat5_v2: {
        id: "a_min9flat5_v2",
        name: "A Minor 9b5",
        symbol: "Am9b5",
        altSymbols: ["Aø9", "Am9(b5)", "A half-dim9"],
        root: "A",
        quality: "minor9flat5",
        voicingType: "half-diminished",
        voicingDescription: "Min9b5 voicing",
        intervals: ["1", "b3", "b5", "b7", "9"],
        notes: ["A", "C", "Eb", "G", "B"],
        frets: [5, -1, 5, 5, 5, 7],
        fingers: [1, 0, 1, 1, 1, 4],
        barre: { fret: 5, fromString: 6, toString: 3 },
        position: 5,
        difficulty: 5,
        categories: {
            moods: ["melancholic", "mysterious", "reflective"],
            styles: ["jazz", "ballad", "film-score"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    b_min9flat5_v1: {
        id: "b_min9flat5_v1",
        name: "B Minor 9b5",
        symbol: "Bm9b5",
        altSymbols: ["Bø9", "Bm9(b5)", "B half-dim9"],
        root: "B",
        quality: "minor9flat5",
        voicingType: "half-diminished",
        voicingDescription: "Min9b5 voicing",
        intervals: ["1", "b3", "b5", "b7", "9"],
        notes: ["B", "D", "F", "A", "C#"],
        frets: [-1, 2, 3, 2, 3, 2],
        fingers: [0, 1, 3, 2, 4, 1],
        barre: { fret: 2, fromString: 5, toString: 1 },
        position: 2,
        difficulty: 5,
        categories: {
            moods: ["melancholic", "mysterious", "reflective"],
            styles: ["jazz", "ballad", "film-score"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    b_min9flat5_v2: {
        id: "b_min9flat5_v2",
        name: "B Minor 9b5",
        symbol: "Bm9b5",
        altSymbols: ["Bø9", "Bm9(b5)", "B half-dim9"],
        root: "B",
        quality: "minor9flat5",
        voicingType: "half-diminished",
        voicingDescription: "Min9b5 voicing",
        intervals: ["1", "b3", "b5", "b7", "9"],
        notes: ["B", "D", "F", "A", "C#"],
        frets: [7, -1, 7, 7, 7, 9],
        fingers: [1, 0, 1, 1, 1, 4],
        barre: { fret: 7, fromString: 6, toString: 3 },
        position: 7,
        difficulty: 5,
        categories: {
            moods: ["melancholic", "mysterious", "reflective"],
            styles: ["jazz", "ballad", "film-score"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    fsharp_min9flat5_v1: {
        id: "fsharp_min9flat5_v1",
        name: "F# Minor 9b5",
        symbol: "F#m9b5",
        altSymbols: ["F#ø9", "F#m9(b5)", "F# half-dim9"],
        root: "F#",
        quality: "minor9flat5",
        voicingType: "half-diminished",
        voicingDescription: "Min9b5 voicing",
        intervals: ["1", "b3", "b5", "b7", "9"],
        notes: ["F#", "A", "C", "E", "G#"],
        frets: [2, -1, 2, 2, 2, 4],
        fingers: [1, 0, 1, 1, 1, 4],
        barre: { fret: 2, fromString: 6, toString: 3 },
        position: 2,
        difficulty: 5,
        categories: {
            moods: ["melancholic", "mysterious", "reflective"],
            styles: ["jazz", "ballad", "film-score"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    fsharp_min9flat5_v2: {
        id: "fsharp_min9flat5_v2",
        name: "F# Minor 9b5",
        symbol: "F#m9b5",
        altSymbols: ["F#ø9", "F#m9(b5)", "F# half-dim9"],
        root: "F#",
        quality: "minor9flat5",
        voicingType: "half-diminished",
        voicingDescription: "Min9b5 voicing",
        intervals: ["1", "b3", "b5", "b7", "9"],
        notes: ["F#", "A", "C", "E", "G#"],
        frets: [-1, -1, 4, 5, 5, 4],
        fingers: [0, 0, 1, 2, 3, 1],
        barre: { fret: 4, fromString: 4, toString: 1 },
        position: 4,
        difficulty: 4,
        categories: {
            moods: ["melancholic", "mysterious", "reflective"],
            styles: ["jazz", "ballad", "film-score"],
            isOpenChord: false,
            isBarreChord: true
        }
    },

    // 6/9 Voicings - Happy, bossa nova sound (filling missing keys)
    e_69_v1: {
        id: "e_69_v1",
        name: "E 6/9",
        symbol: "E6/9",
        altSymbols: ["E69", "Eadd6/9"],
        root: "E",
        quality: "major69",
        voicingType: "6-9",
        voicingDescription: "6/9 voicing",
        intervals: ["1", "3", "5", "6", "9"],
        notes: ["E", "G#", "B", "C#", "F#"],
        frets: [0, 2, 2, 1, 2, 2],
        fingers: [0, 2, 2, 1, 3, 4],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["happy", "sunny", "carefree"],
            styles: ["bossa-nova", "jazz", "pop"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    e_69_v2: {
        id: "e_69_v2",
        name: "E 6/9",
        symbol: "E6/9",
        altSymbols: ["E69", "Eadd6/9"],
        root: "E",
        quality: "major69",
        voicingType: "6-9",
        voicingDescription: "6/9 voicing",
        intervals: ["1", "3", "5", "6", "9"],
        notes: ["E", "G#", "B", "C#", "F#"],
        frets: [-1, 7, 6, 6, 7, 7],
        fingers: [0, 2, 1, 1, 3, 4],
        barre: { fret: 6, fromString: 4, toString: 3 },
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["happy", "sunny", "carefree"],
            styles: ["bossa-nova", "jazz", "pop"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    f_69_v1: {
        id: "f_69_v1",
        name: "F 6/9",
        symbol: "F6/9",
        altSymbols: ["F69", "Fadd6/9"],
        root: "F",
        quality: "major69",
        voicingType: "6-9",
        voicingDescription: "6/9 voicing",
        intervals: ["1", "3", "5", "6", "9"],
        notes: ["F", "A", "C", "D", "G"],
        frets: [1, 0, 0, 0, 1, 0],
        fingers: [1, 0, 0, 0, 2, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["happy", "sunny", "carefree"],
            styles: ["bossa-nova", "jazz", "pop"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    f_69_v2: {
        id: "f_69_v2",
        name: "F 6/9",
        symbol: "F6/9",
        altSymbols: ["F69", "Fadd6/9"],
        root: "F",
        quality: "major69",
        voicingType: "6-9",
        voicingDescription: "6/9 voicing",
        intervals: ["1", "3", "5", "6", "9"],
        notes: ["F", "A", "C", "D", "G"],
        frets: [-1, -1, 3, 2, 3, 3],
        fingers: [0, 0, 2, 1, 3, 4],
        barre: null,
        position: 2,
        difficulty: 3,
        categories: {
            moods: ["happy", "sunny", "carefree"],
            styles: ["bossa-nova", "jazz", "pop"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    g_69_v1: {
        id: "g_69_v1",
        name: "G 6/9",
        symbol: "G6/9",
        altSymbols: ["G69", "Gadd6/9"],
        root: "G",
        quality: "major69",
        voicingType: "6-9",
        voicingDescription: "6/9 voicing",
        intervals: ["1", "3", "5", "6", "9"],
        notes: ["G", "B", "D", "E", "A"],
        frets: [3, 2, 0, 0, 0, 0],
        fingers: [2, 1, 0, 0, 0, 0],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["happy", "sunny", "carefree"],
            styles: ["bossa-nova", "jazz", "pop"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    g_69_v2: {
        id: "g_69_v2",
        name: "G 6/9",
        symbol: "G6/9",
        altSymbols: ["G69", "Gadd6/9"],
        root: "G",
        quality: "major69",
        voicingType: "6-9",
        voicingDescription: "6/9 voicing",
        intervals: ["1", "3", "5", "6", "9"],
        notes: ["G", "B", "D", "E", "A"],
        frets: [-1, -1, 5, 4, 5, 5],
        fingers: [0, 0, 2, 1, 3, 4],
        barre: null,
        position: 4,
        difficulty: 3,
        categories: {
            moods: ["happy", "sunny", "carefree"],
            styles: ["bossa-nova", "jazz", "pop"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    b_69_v1: {
        id: "b_69_v1",
        name: "B 6/9",
        symbol: "B6/9",
        altSymbols: ["B69", "Badd6/9"],
        root: "B",
        quality: "major69",
        voicingType: "6-9",
        voicingDescription: "6/9 voicing",
        intervals: ["1", "3", "5", "6", "9"],
        notes: ["B", "D#", "F#", "G#", "C#"],
        frets: [-1, 2, 1, 1, 2, 2],
        fingers: [0, 2, 1, 1, 3, 4],
        barre: { fret: 1, fromString: 4, toString: 3 },
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["happy", "sunny", "carefree"],
            styles: ["bossa-nova", "jazz", "pop"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    b_69_v2: {
        id: "b_69_v2",
        name: "B 6/9",
        symbol: "B6/9",
        altSymbols: ["B69", "Badd6/9"],
        root: "B",
        quality: "major69",
        voicingType: "6-9",
        voicingDescription: "6/9 voicing",
        intervals: ["1", "3", "5", "6", "9"],
        notes: ["B", "D#", "F#", "G#", "C#"],
        frets: [7, -1, 6, 8, 7, -1],
        fingers: [2, 0, 1, 4, 3, 0],
        barre: null,
        position: 6,
        difficulty: 3,
        categories: {
            moods: ["happy", "sunny", "carefree"],
            styles: ["bossa-nova", "jazz", "pop"],
            isOpenChord: false,
            isBarreChord: false
        }
    },
    bb_69_v1: {
        id: "bb_69_v1",
        name: "Bb 6/9",
        symbol: "Bb6/9",
        altSymbols: ["Bb69", "Bbadd6/9"],
        root: "Bb",
        quality: "major69",
        voicingType: "6-9",
        voicingDescription: "6/9 voicing",
        intervals: ["1", "3", "5", "6", "9"],
        notes: ["Bb", "D", "F", "G", "C"],
        frets: [-1, 1, 0, 0, 1, 1],
        fingers: [0, 1, 0, 0, 2, 3],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["happy", "sunny", "carefree"],
            styles: ["bossa-nova", "jazz", "pop"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    bb_69_v2: {
        id: "bb_69_v2",
        name: "Bb 6/9",
        symbol: "Bb6/9",
        altSymbols: ["Bb69", "Bbadd6/9"],
        root: "Bb",
        quality: "major69",
        voicingType: "6-9",
        voicingDescription: "6/9 voicing",
        intervals: ["1", "3", "5", "6", "9"],
        notes: ["Bb", "D", "F", "G", "C"],
        frets: [6, -1, 5, 5, 6, 6],
        fingers: [2, 0, 1, 1, 3, 4],
        barre: { fret: 5, fromString: 4, toString: 3 },
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["happy", "sunny", "carefree"],
            styles: ["bossa-nova", "jazz", "pop"],
            isOpenChord: false,
            isBarreChord: true
        }
    },
    eb_69_v1: {
        id: "eb_69_v1",
        name: "Eb 6/9",
        symbol: "Eb6/9",
        altSymbols: ["Eb69", "Ebadd6/9"],
        root: "Eb",
        quality: "major69",
        voicingType: "6-9",
        voicingDescription: "6/9 voicing",
        intervals: ["1", "3", "5", "6", "9"],
        notes: ["Eb", "G", "Bb", "C", "F"],
        frets: [-1, -1, 1, 0, 1, 1],
        fingers: [0, 0, 1, 0, 2, 3],
        barre: null,
        position: 1,
        difficulty: 3,
        categories: {
            moods: ["happy", "sunny", "carefree"],
            styles: ["bossa-nova", "jazz", "pop"],
            isOpenChord: true,
            isBarreChord: false
        }
    },
    eb_69_v2: {
        id: "eb_69_v2",
        name: "Eb 6/9",
        symbol: "Eb6/9",
        altSymbols: ["Eb69", "Ebadd6/9"],
        root: "Eb",
        quality: "major69",
        voicingType: "6-9",
        voicingDescription: "6/9 voicing",
        intervals: ["1", "3", "5", "6", "9"],
        notes: ["Eb", "G", "Bb", "C", "F"],
        frets: [-1, 6, 5, 5, 6, 6],
        fingers: [0, 2, 1, 1, 3, 4],
        barre: { fret: 5, fromString: 4, toString: 3 },
        position: 5,
        difficulty: 3,
        categories: {
            moods: ["happy", "sunny", "carefree"],
            styles: ["bossa-nova", "jazz", "pop"],
            isOpenChord: false,
            isBarreChord: true
        }
    }
};

// Helper function to get all chords as an array
function getAllChords() {
    return Object.values(ChordLibrary);
}

// Helper function to get chords by quality
function getChordsByQuality(quality) {
    return getAllChords().filter(chord => chord.quality === quality);
}

// Helper function to get chords by mood
function getChordsByMood(mood) {
    return getAllChords().filter(chord =>
        chord.categories.moods.includes(mood.toLowerCase())
    );
}

// Helper function to get chords by style
function getChordsByStyle(style) {
    return getAllChords().filter(chord =>
        chord.categories.styles.includes(style.toLowerCase())
    );
}

// Helper function to get chords by difficulty
function getChordsByDifficulty(level) {
    if (level === 'beginner') {
        return getAllChords().filter(chord => chord.difficulty <= 2);
    } else if (level === 'advanced') {
        return getAllChords().filter(chord => chord.difficulty >= 3);
    }
    return getAllChords();
}

// Helper function to get chord by ID
function getChordById(id) {
    return ChordLibrary[id] || null;
}

// Helper function to get all voicings for a chord (by name and symbol)
function getVoicingsForChord(chord) {
    const allChords = getAllChords();
    return allChords.filter(c =>
        c.name === chord.name &&
        c.symbol === chord.symbol
    );
}

// Helper function to group chords by their base name (for voicing display)
function groupChordsByName() {
    const groups = {};
    const allChords = getAllChords();

    allChords.forEach(chord => {
        const key = `${chord.name}_${chord.symbol}`;
        if (!groups[key]) {
            groups[key] = {
                name: chord.name,
                symbol: chord.symbol,
                root: chord.root,
                quality: chord.quality,
                voicings: []
            };
        }
        groups[key].voicings.push(chord);
    });

    // Sort voicings by difficulty within each group
    Object.values(groups).forEach(group => {
        group.voicings.sort((a, b) => a.difficulty - b.difficulty);
    });

    return groups;
}

// Helper function to get a unique list of chords (one per name/symbol combination)
// Returns the easiest voicing for each chord by default
function getUniqueChords() {
    const groups = groupChordsByName();
    return Object.values(groups).map(group => group.voicings[0]);
}

// Helper function to get voicing description for display
function getVoicingLabel(chord) {
    if (chord.voicingType) {
        return chord.voicingDescription || chord.voicingType;
    }
    if (chord.categories.isOpenChord) {
        return 'Open position';
    }
    if (chord.categories.isBarreChord) {
        return `Barre (fret ${chord.position})`;
    }
    return `Position ${chord.position}`;
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ChordLibrary,
        getAllChords,
        getChordsByQuality,
        getChordsByMood,
        getChordsByStyle,
        getChordsByDifficulty,
        getChordById,
        getVoicingsForChord,
        groupChordsByName,
        getUniqueChords,
        getVoicingLabel
    };
}
