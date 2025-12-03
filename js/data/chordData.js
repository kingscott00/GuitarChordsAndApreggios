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
