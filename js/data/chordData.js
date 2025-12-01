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
