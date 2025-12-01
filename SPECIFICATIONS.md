# Guitar Chord Explorer - Application Specification Document

## Version 1.0 | December 2024

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Technology Stack](#2-technology-stack)
3. [Application Architecture](#3-application-architecture)
4. [Core Features](#4-core-features)
5. [User Interface Design](#5-user-interface-design)
6. [Data Structures](#6-data-structures)
7. [Audio System](#7-audio-system)
8. [Rendering Systems](#8-rendering-systems)
9. [Additional Features](#9-additional-features)
10. [Development Phases](#10-development-phases)
11. [File Structure](#11-file-structure)
12. [Technical Requirements](#12-technical-requirements)

---

## 1. Project Overview

### 1.1 Purpose

Guitar Chord Explorer is a comprehensive web application designed to help guitarists discover, learn, and practice chords and arpeggios. The application provides multiple intuitive ways to explore chords based on mood, musical style, or music theory concepts.

### 1.2 Target Users

- Beginner guitarists learning chord shapes
- Intermediate players exploring new voicings and styles
- Advanced players studying theory and expanding their chord vocabulary
- Songwriters seeking chords that match specific moods or genres

### 1.3 Core Value Proposition

- Multiple discovery pathways (mood, style, theory)
- Visual chord diagrams with finger positions
- Tablature for chords and arpeggios
- Audio playback for learning by ear
- Practice tools including metronome and drill modes

---

## 2. Technology Stack

### 2.1 Core Technologies

| Technology | Purpose |
|------------|---------|
| HTML5 | Application structure and semantic markup |
| CSS3 | Styling, layout (Grid/Flexbox), animations, theming |
| Vanilla JavaScript (ES6+) | Application logic, state management, DOM manipulation |
| SVG | Scalable chord diagrams and fretboard visualizations |
| Web Audio API | Sound synthesis and audio playback |
| Local Storage API | Persisting user preferences and favorites |

### 2.2 Optional Libraries (If Needed)

| Library | Purpose | Fallback |
|---------|---------|----------|
| Tone.js | Enhanced audio synthesis | Native Web Audio API |
| None required | - | - |

### 2.3 Hosting Requirements

- **Minimum**: Can run as a local HTML file opened in browser
- **Recommended**: Static file hosting (GitHub Pages, Netlify, Vercel)
- **No backend server required**

---

## 3. Application Architecture

### 3.1 Architecture Pattern

Client-side Single Page Application (SPA) with modular JavaScript architecture.

### 3.2 Module Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        index.html                           │
│                    (Application Shell)                      │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                         app.js                              │
│              (Main Controller / State Manager)              │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
┌───────────────┐    ┌───────────────┐    ┌───────────────┐
│  chordData.js │    │ arpeggioData.js│    │  scaleData.js │
│ (Chord Library)│    │(Arpeggio Lib) │    │ (Scale/Mode)  │
└───────────────┘    └───────────────┘    └───────────────┘
        │                     │                     │
        └─────────────────────┼─────────────────────┘
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                     selectionEngine.js                      │
│        (Mood/Style/Theory Selection Logic)                  │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
┌───────────────┐    ┌───────────────┐    ┌───────────────┐
│  renderer.js  │    │ tabRenderer.js│    │   audio.js    │
│(Chord Diagrams)│    │ (Tablature)   │    │  (Playback)   │
└───────────────┘    └───────────────┘    └───────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      utilities.js                           │
│    (Metronome, Practice Tools, Storage, Helpers)            │
└─────────────────────────────────────────────────────────────┘
```

### 3.3 State Management

The application maintains a central state object managed by `app.js`:

```javascript
const AppState = {
    // Current selection mode
    selectionMode: 'mood' | 'style' | 'theory',
    
    // Selection values
    currentMood: null,
    currentStyle: null,
    currentKey: 'C',
    currentMode: 'ionian',
    
    // Display settings
    showVoicings: 'beginner' | 'advanced' | 'all',
    leftHanded: false,
    theme: 'light' | 'dark',
    fretsToShow: 5,
    
    // Current results
    selectedChords: [],
    selectedArpeggios: [],
    
    // Progression builder
    progression: [],
    
    // Practice mode
    practiceMode: false,
    metronomeActive: false,
    tempo: 80,
    
    // User data
    favorites: [],
    recentSelections: []
};
```

---

## 4. Core Features

### 4.1 Chord Selection Modes

#### 4.1.1 Mood-Based Selection

Users select from emotional/tonal qualities to discover appropriate chords.

| Mood | Description | Chord Types Included |
|------|-------------|---------------------|
| Happy | Bright, uplifting | Major, Major 7, add9, 6 chords |
| Sad / Melancholic | Somber, reflective | Minor, minor 7, minor 9 |
| Dreamy / Ethereal | Floating, ambient | add9, sus2, sus4, maj7, maj9 |
| Tense / Dramatic | Suspenseful, dark | Diminished, augmented, dom7♭9, dom7♯9 |
| Peaceful / Calm | Relaxed, serene | Open major, simple triads, sus2 |
| Romantic | Warm, intimate | Major 7, minor 7, 6/9 chords |
| Energetic | Driving, powerful | Power chords, major, dom7 |
| Mysterious | Intriguing, uncertain | Minor, diminished, altered dominants |

**Implementation**: Each mood maps to an array of chord qualities and specific voicings that evoke that feeling.

#### 4.1.2 Style-Based Selection

Users select a musical genre to see chords commonly used in that style.

| Style | Description | Characteristic Chords |
|-------|-------------|----------------------|
| Blues | 12-bar patterns, shuffle feel | Dom7, Dom9, 7♯9, 13 chords |
| Jazz | Extended harmony, voice leading | Maj7, min7, dom7, dim7, altered |
| Spanish / Flamenco | Phrygian flavor, dramatic | Am, G, F, E (Andalusian), sus chords |
| Folk / Acoustic | Open chords, singalong | Open position major/minor, sus4 |
| Rock / Pop | Power and energy | Power chords, barre chords, add9 |
| Classical | Proper voice leading | Triads, 7ths with classical fingerings |
| Country | Twangy, melodic | Open chords, 6ths, major pentatonic based |
| R&B / Soul | Smooth, rich harmony | 9ths, 11ths, 13ths, altered chords |
| Funk | Rhythmic, percussive | 9th chords, min7, dom7 (partial voicings) |
| Bossa Nova | Brazilian jazz | Maj7, min7, dom7♭5, 6/9 |

**Implementation**: Each style includes common chord progressions, recommended voicings, and style-specific playing notes.

#### 4.1.3 Theory-Based Selection

Users select a key and mode to see diatonic chords.

**Key Selection**: All 12 chromatic keys (C, C♯/D♭, D, D♯/E♭, E, F, F♯/G♭, G, G♯/A♭, A, A♯/B♭, B)

**Mode Selection**:

| Mode | Scale Degrees | Character |
|------|---------------|-----------|
| Ionian (Major) | 1 2 3 4 5 6 7 | Bright, standard major |
| Dorian | 1 2 ♭3 4 5 6 ♭7 | Minor with raised 6th, jazzy |
| Phrygian | 1 ♭2 ♭3 4 5 ♭6 ♭7 | Spanish, dark minor |
| Lydian | 1 2 3 ♯4 5 6 7 | Dreamy, raised 4th |
| Mixolydian | 1 2 3 4 5 6 ♭7 | Dominant, bluesy major |
| Aeolian (Natural Minor) | 1 2 ♭3 4 5 ♭6 ♭7 | Standard minor |
| Locrian | 1 ♭2 ♭3 4 ♭5 ♭6 ♭7 | Diminished, unstable |

**Output**: 
- All 7 diatonic chords for the selected key/mode
- Roman numeral analysis (I, ii, iii, IV, V, vi, vii°)
- Chord quality labels
- Common progressions in that mode

### 4.2 Chord Display

Each chord displays the following information:

1. **Chord Name**: Full name (e.g., "C Major 7") and symbol (e.g., "Cmaj7")
2. **Chord Diagram**: SVG fretboard showing finger positions
3. **Finger Numbers**: Which fingers to use (1=index through 4=pinky, T=thumb)
4. **Fret Position**: Position marker for barre chords
5. **Open/Muted Strings**: Indicators above nut
6. **Interval Labels**: Optional overlay showing root, 3rd, 5th, 7th, etc.
7. **Tablature**: 6-line tab showing fret numbers

### 4.3 Arpeggio Display

Each chord includes associated arpeggio patterns:

1. **Arpeggio Name**: Matching the chord (e.g., "Cmaj7 Arpeggio")
2. **Fretboard Diagram**: Full pattern across multiple positions
3. **Root Note Indicators**: Highlighted root notes
4. **Tablature**: Ascending and descending pattern
5. **Suggested Fingering**: Right and left hand fingering
6. **Position Markers**: CAGED position reference where applicable

### 4.4 Multiple Voicings

For each chord, provide 2-4 voicing options:

| Voicing Type | Description | Difficulty |
|--------------|-------------|------------|
| Open Position | Near the nut, uses open strings | Beginner |
| Barre Position | Moveable shape, 1st position | Intermediate |
| Higher Position | Up the neck, often partial voicings | Intermediate |
| Jazz Voicing | Shell voicings, drop 2/drop 3 | Advanced |

Users can filter voicings by difficulty level.

---

## 5. User Interface Design

### 5.1 Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│                         HEADER                              │
│  Logo    [Mood] [Style] [Theory]    Settings ⚙️  Theme 🌓   │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                    SELECTION PANEL                          │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  [Mood/Style/Theory specific controls]              │   │
│  │  [Key selector if Theory mode]                      │   │
│  │  [Voicing filter: Beginner | Advanced | All]        │   │
│  └─────────────────────────────────────────────────────┘   │
│                    [ SHOW CHORDS BUTTON ]                   │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                     RESULTS AREA                            │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │  Chord   │ │  Chord   │ │  Chord   │ │  Chord   │       │
│  │  Card 1  │ │  Card 2  │ │  Card 3  │ │  Card 4  │       │
│  │          │ │          │ │          │ │          │       │
│  │ [Diagram]│ │ [Diagram]│ │ [Diagram]│ │ [Diagram]│       │
│  │ [Tab]    │ │ [Tab]    │ │ [Tab]    │ │ [Tab]    │       │
│  │ 🔊 ⭐ +  │ │ 🔊 ⭐ +  │ │ 🔊 ⭐ +  │ │ 🔊 ⭐ +  │       │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘       │
│                                                             │
│  [Show Arpeggios ▼]                                        │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              Arpeggio Section (collapsible)         │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                  PROGRESSION BUILDER                        │
│  [ Chord 1 ] → [ Chord 2 ] → [ Chord 3 ] → [ + Add ]       │
│  [ Play All 🔊 ]  [ Clear ]  [ Save ]  [ Export ]          │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                    PRACTICE TOOLS                           │
│  Metronome: [60]───●───────[200] BPM   [ ▶️ Start ]        │
│  [ Random Chord Drill ]  [ Progression Practice ]           │
└─────────────────────────────────────────────────────────────┘
```

### 5.2 Chord Card Component

Each chord is displayed in a card with the following structure:

```
┌────────────────────────────┐
│  C Major 7        Cmaj7    │  ← Name and symbol
│  ════════════════════════  │
│      ○   ○       ○         │  ← Open/mute indicators
│  ┌─┬─┬─┬─┬─┬─┐             │
│  ├─┼─┼─┼─┼─┼─┤  1st fret   │  ← Fretboard diagram
│  ├─┼─●─┼─┼─┼─┤  2nd fret   │     with finger dots
│  ├─┼─┼─●─●─┼─┤  3rd fret   │
│  ├─┼─┼─┼─┼─┼─┤  4th fret   │
│  └─┴─┴─┴─┴─┴─┘             │
│    E A D G B e             │  ← String labels
│                            │
│  TAB:                      │
│  e|--0--                   │  ← Tablature
│  B|--0--                   │
│  G|--4--                   │
│  D|--5--                   │
│  A|--3--                   │
│  E|-----                   │
│                            │
│  Fingers: x 3 2 0 0 0      │  ← Finger numbers
│                            │
│  [🔊 Play] [⭐ Fav] [+ Prog]│  ← Action buttons
│  [📋 Voicings ▼]           │  ← Voicing selector
└────────────────────────────┘
```

### 5.3 Responsive Design

| Breakpoint | Layout |
|------------|--------|
| Desktop (>1024px) | 4 chord cards per row, full sidebar |
| Tablet (768-1024px) | 2-3 cards per row, collapsible tools |
| Mobile (<768px) | 1 card per row, bottom sheet for tools |

### 5.4 Theme Support

**Light Theme**:
- Background: #FFFFFF
- Card background: #F5F5F5
- Text: #333333
- Accent: #2196F3
- Fretboard: Wood tones (#D4A574)

**Dark Theme**:
- Background: #1A1A2E
- Card background: #16213E
- Text: #EAEAEA
- Accent: #00D9FF
- Fretboard: Dark wood (#3D2914)

---

## 6. Data Structures

### 6.1 Chord Definition Schema

```javascript
const ChordDefinition = {
    id: "cmaj7_open",                    // Unique identifier
    name: "C Major 7",                   // Full name
    symbol: "Cmaj7",                     // Chord symbol
    altSymbols: ["CΔ7", "CM7"],          // Alternative symbols
    root: "C",                           // Root note
    quality: "major7",                   // Chord quality
    
    // Intervals from root
    intervals: ["1", "3", "5", "7"],
    
    // Notes in the chord
    notes: ["C", "E", "G", "B"],
    
    // Fret positions for each string (low E to high e)
    // -1 = muted, 0 = open
    frets: [-1, 3, 2, 0, 0, 0],
    
    // Finger numbers (0 = open/not played, 1-4 = fingers, 5 = thumb)
    fingers: [0, 3, 2, 0, 0, 0],
    
    // Barre information (if applicable)
    barre: null,  // or { fret: 1, fromString: 1, toString: 6 }
    
    // Position on neck (1 = open position)
    position: 1,
    
    // Difficulty rating 1-5
    difficulty: 1,
    
    // Categories for filtering
    categories: {
        moods: ["happy", "peaceful", "dreamy"],
        styles: ["jazz", "pop", "bossa"],
        isOpenChord: true,
        isBarreChord: false
    },
    
    // Related arpeggio pattern ID
    arpeggioId: "cmaj7_arp_pos1",
    
    // Alternative voicings (references to other chord IDs)
    alternateVoicings: ["cmaj7_barre_3", "cmaj7_jazz_8"]
};
```

### 6.2 Arpeggio Definition Schema

```javascript
const ArpeggioDefinition = {
    id: "cmaj7_arp_pos1",
    name: "C Major 7 Arpeggio",
    chordId: "cmaj7_open",              // Related chord
    root: "C",
    quality: "major7",
    
    // Notes in order
    notes: ["C", "E", "G", "B"],
    
    // Pattern as array of {string, fret} objects
    pattern: [
        { string: 5, fret: 3 },  // C (root)
        { string: 4, fret: 2 },  // E (3rd)
        { string: 4, fret: 5 },  // G (5th)
        { string: 3, fret: 4 },  // B (7th)
        { string: 2, fret: 5 },  // C (octave)
        // ... continues
    ],
    
    // Tablature string (ascending)
    tabAscending: `
e|----------------0----|
B|------------0-1------|
G|--------0-4----------|
D|----2-5--------------|
A|-3-------------------|
E|---------------------|
    `,
    
    // Tablature string (descending)
    tabDescending: `
e|----0----------------|
B|------1-0------------|
G|----------4-0--------|
D|--------------5-2----|
A|------------------3--|
E|---------------------|
    `,
    
    // Position/CAGED reference
    position: "C shape",
    
    // Suggested fingering
    leftHandFingering: [2, 1, 1, 3, 4],
    
    difficulty: 2
};
```

### 6.3 Scale/Mode Definition Schema

```javascript
const ModeDefinition = {
    id: "ionian",
    name: "Ionian",
    alternateName: "Major Scale",
    
    // Intervals from root (in semitones)
    intervals: [0, 2, 4, 5, 7, 9, 11],
    
    // Scale degrees
    degrees: ["1", "2", "3", "4", "5", "6", "7"],
    
    // Diatonic chord qualities for each degree
    chordQualities: [
        "major",      // I
        "minor",      // ii
        "minor",      // iii
        "major",      // IV
        "major",      // V (or dominant7)
        "minor",      // vi
        "diminished"  // vii°
    ],
    
    // Roman numerals
    romanNumerals: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
    
    // Common progressions in this mode
    commonProgressions: [
        { name: "Pop", numerals: ["I", "V", "vi", "IV"] },
        { name: "Classic", numerals: ["I", "IV", "V", "I"] },
        { name: "50s", numerals: ["I", "vi", "IV", "V"] }
    ],
    
    // Character description
    character: "Bright, happy, resolved",
    
    // Associated moods
    moods: ["happy", "peaceful", "energetic"]
};
```

### 6.4 Mood/Style Mapping Schema

```javascript
const MoodMapping = {
    id: "happy",
    name: "Happy",
    description: "Bright, uplifting, joyful",
    
    // Chord qualities that evoke this mood
    chordQualities: ["major", "major7", "add9", "6", "sus2"],
    
    // Preferred keys
    suggestedKeys: ["C", "G", "D", "A", "E"],
    
    // Specific chord IDs to include
    featuredChords: ["cmaj_open", "gmaj_open", "dmaj_open"],
    
    // Voicing preferences
    voicingPreferences: {
        preferOpen: true,
        preferBright: true
    },
    
    // Suggested progressions
    progressions: [
        ["I", "IV", "V", "I"],
        ["I", "V", "vi", "IV"]
    ]
};

const StyleMapping = {
    id: "blues",
    name: "Blues",
    description: "12-bar patterns, shuffle feel, expressive bends",
    
    // Characteristic chord qualities
    chordQualities: ["dominant7", "9", "13", "7#9"],
    
    // Standard progressions
    progressions: [
        {
            name: "12-Bar Blues",
            bars: ["I7", "I7", "I7", "I7", "IV7", "IV7", "I7", "I7", "V7", "IV7", "I7", "V7"]
        }
    ],
    
    // Suggested keys for this style
    suggestedKeys: ["E", "A", "G", "C"],
    
    // Specific voicing preferences
    voicingNotes: "Use partial voicings for rhythm, full voicings for comping",
    
    // Featured chord voicings
    featuredChords: ["e7_open", "a7_open", "b7_barre"]
};
```

---

## 7. Audio System

### 7.1 Audio Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      AudioEngine                            │
├─────────────────────────────────────────────────────────────┤
│  - Web Audio API Context                                    │
│  - Master gain node                                         │
│  - Guitar sound synthesizer                                 │
│  - Note frequency mapping                                   │
│  - Strum pattern generator                                  │
│  - Arpeggio sequencer                                       │
│  - Metronome oscillator                                     │
└─────────────────────────────────────────────────────────────┘
```

### 7.2 Sound Generation

**Option A: Synthesized Sound (Default)**
- Use Web Audio API oscillators
- Karplus-Strong algorithm for plucked string sound
- ADSR envelope for realistic decay
- Per-string timing offset for strum effect

**Option B: Sampled Sound (Enhanced)**
- Pre-recorded guitar samples per note
- Multiple velocity layers
- String resonance samples
- Larger file size but more realistic

### 7.3 Audio Features

| Feature | Description |
|---------|-------------|
| Chord Strum | Play all chord notes with slight timing offset |
| Arpeggio Play | Sequential note playback with adjustable tempo |
| Single Note | Click any note in diagram to hear it |
| Metronome | Adjustable BPM click track |
| Progression Playback | Play entire progression with timing |

### 7.4 Audio Parameters

```javascript
const AudioSettings = {
    masterVolume: 0.7,          // 0-1
    strumSpeed: 50,             // ms between strings
    strumDirection: 'down',     // 'down' | 'up' | 'alternate'
    noteDecay: 2.0,             // seconds
    arpeggioTempo: 120,         // BPM
    metronomeTempo: 80,         // BPM
    metronomeSound: 'click',    // 'click' | 'woodblock' | 'hihat'
    metronomeAccent: true       // Accent beat 1
};
```

### 7.5 Note Frequency Reference

Standard tuning frequencies (A4 = 440Hz):

| String | Open Note | Frequency |
|--------|-----------|-----------|
| 6 (Low E) | E2 | 82.41 Hz |
| 5 | A2 | 110.00 Hz |
| 4 | D3 | 146.83 Hz |
| 3 | G3 | 196.00 Hz |
| 2 | B3 | 246.94 Hz |
| 1 (High e) | E4 | 329.63 Hz |

Frequency calculation: `f = baseFreq * 2^(fret/12)`

---

## 8. Rendering Systems

### 8.1 Chord Diagram Renderer

**SVG-based rendering with the following specifications:**

```javascript
const DiagramConfig = {
    // Dimensions
    width: 200,
    height: 280,
    
    // Fretboard
    numFrets: 5,               // Default frets shown
    numStrings: 6,
    fretWidth: 30,
    stringSpacing: 28,
    nutHeight: 8,
    
    // Visual elements
    dotRadius: 10,
    barreHeight: 8,
    openCircleRadius: 6,
    mutedXSize: 8,
    
    // Colors (theme-dependent)
    fretboardColor: '#D4A574',
    fretColor: '#8B7355',
    stringColor: '#C0C0C0',
    dotColor: '#333333',
    rootDotColor: '#E63946',
    textColor: '#333333',
    
    // Labels
    showFingerNumbers: true,
    showIntervalLabels: false,  // Toggle-able
    showStringLabels: true
};
```

**Diagram Elements:**
1. Fretboard background (rounded rectangle)
2. Nut (thick top line for open position, or position marker)
3. Frets (horizontal lines)
4. Strings (vertical lines, varying thickness)
5. Finger dots (filled circles)
6. Root note indicator (different color or outline)
7. Barre indicator (rounded rectangle spanning strings)
8. Open string markers (○ above nut)
9. Muted string markers (✕ above nut)
10. Finger numbers (inside or below dots)
11. Fret position number (beside diagram if not open position)

### 8.2 Tablature Renderer

**Text-based or SVG tablature with specifications:**

```javascript
const TabConfig = {
    // Display options
    fontFamily: 'monospace',
    fontSize: 14,
    lineHeight: 1.4,
    
    // String labels
    stringLabels: ['e', 'B', 'G', 'D', 'A', 'E'],
    
    // Note spacing
    noteWidth: 3,              // Characters per note position
    measureWidth: 16,          // Characters per measure
    
    // Visual options
    showBarLines: true,
    showTimeSignature: false,
    useLetterNotes: false      // Show note names instead of fret numbers
};
```

**Tab Format:**
```
e|--0--3--5--3--0--|
B|--1--3--5--3--1--|
G|--0--4--6--4--0--|
D|--2--5--7--5--2--|
A|--3--5--7--5--3--|
E|-----------------|
```

### 8.3 Fretboard Visualizer (for Arpeggios/Scales)

**Extended fretboard view for showing patterns:**

```javascript
const FretboardConfig = {
    // Extended fretboard
    numFrets: 15,
    showFretNumbers: true,
    showFretMarkers: true,      // Dots at 3,5,7,9,12,15
    
    // Note display
    showAllOctaves: true,
    highlightRoot: true,
    showIntervalColors: true,
    
    // Interval color coding
    intervalColors: {
        root: '#E63946',
        third: '#457B9D',
        fifth: '#2A9D8F',
        seventh: '#E9C46A',
        other: '#264653'
    }
};
```

---

## 9. Additional Features

### 9.1 Progression Builder

**Functionality:**
- Drag and drop chords into progression slots
- Click "+" on chord card to add to progression
- Reorder chords via drag and drop
- Remove chords from progression
- Play entire progression with adjustable tempo
- Save progressions to local storage
- Load progression templates (I-IV-V-I, ii-V-I, 12-bar blues, etc.)

**Progression Data Structure:**
```javascript
const Progression = {
    id: "prog_12345",
    name: "My Progression",
    chords: ["cmaj_open", "gmaj_open", "amin_open", "fmaj_open"],
    beatsPerChord: 4,
    tempo: 100,
    createdAt: "2024-12-01T10:00:00Z"
};
```

### 9.2 Practice Tools

#### 9.2.1 Metronome

- Tempo range: 40-220 BPM
- Time signatures: 2/4, 3/4, 4/4, 6/8
- Accent on beat 1
- Visual beat indicator
- Tap tempo feature

#### 9.2.2 Random Chord Drill

- Randomly displays chords from current selection
- Configurable interval (2-30 seconds)
- Audio cue option
- Score tracking (correct identifications)
- Difficulty progression

#### 9.2.3 Progression Practice Mode

- Loops current progression
- Highlights current chord
- Count-in option (1 bar)
- Adjustable loop speed

### 9.3 Favorites System

- Star icon on each chord card
- Favorites stored in local storage
- View all favorites in dedicated section
- Export/import favorites as JSON

### 9.4 Left-Handed Mode

- Toggle in settings
- Mirrors all chord diagrams horizontally
- Adjusts string labels
- Updates tablature orientation

### 9.5 Reference Information Panel

**For each chord, optional expandable info:**
- Intervals explained
- Scale relationship
- Common uses
- Tips for fingering
- Related chords (same shape, different root)

### 9.6 Export Options

- **Print View**: Formatted for printing chord sheets
- **PDF Export**: Download as PDF (using browser print)
- **Image Export**: Save individual diagrams as PNG
- **Text Export**: Copy tablature as plain text

---

## 10. Development Phases

### Phase 1: Foundation (Core Display)
**Goal**: Basic chord display system working

**Tasks:**
1. Set up project structure and files
2. Create HTML shell with layout structure
3. Implement basic CSS styling (light theme)
4. Create chord data structure with 20-30 common chords
5. Build SVG chord diagram renderer
6. Build tablature renderer
7. Display static chord cards

**Deliverable**: Page that displays a grid of chord cards with diagrams and tabs

---

### Phase 2: Selection System
**Goal**: All three selection modes functional

**Tasks:**
1. Build mood selection UI and logic
2. Build style selection UI and logic
3. Build theory selection UI (key + mode dropdowns)
4. Implement selection engine that filters chord library
5. Add "Show Chords" button functionality
6. Display results based on selection

**Deliverable**: User can select mood/style/theory and see relevant chords

---

### Phase 3: Arpeggio System
**Goal**: Arpeggios display alongside chords

**Tasks:**
1. Create arpeggio data structure
2. Link arpeggios to their parent chords
3. Build arpeggio fretboard diagram renderer
4. Build arpeggio tablature renderer
5. Add collapsible arpeggio section to UI
6. Display arpeggios for selected chords

**Deliverable**: Each chord shows its associated arpeggio pattern and tab

---

### Phase 4: Audio Playback
**Goal**: Users can hear chords and arpeggios

**Tasks:**
1. Set up Web Audio API context
2. Implement guitar sound synthesis (Karplus-Strong or samples)
3. Build chord strum playback
4. Build arpeggio sequential playback
5. Add play buttons to chord cards
6. Implement volume control

**Deliverable**: Clicking play buttons produces realistic guitar sounds

---

### Phase 5: Multiple Voicings
**Goal**: Show alternate fingerings for each chord

**Tasks:**
1. Expand chord database with multiple voicings per chord
2. Add voicing selector dropdown to chord cards
3. Implement difficulty filter (beginner/advanced/all)
4. Update display when voicing changes
5. Link audio to selected voicing

**Deliverable**: Users can explore 2-4 voicings per chord

---

### Phase 6: Progression Builder
**Goal**: Users can build and play chord progressions

**Tasks:**
1. Create progression builder UI component
2. Implement "add to progression" functionality
3. Add drag-and-drop reordering
4. Build progression playback with timing
5. Add progression templates
6. Implement save/load to local storage

**Deliverable**: Fully functional progression builder with playback

---

### Phase 7: Practice Tools
**Goal**: Metronome and practice modes working

**Tasks:**
1. Build metronome with visual and audio feedback
2. Implement random chord drill mode
3. Build progression practice mode
4. Add tempo controls
5. Create practice session statistics

**Deliverable**: Complete practice toolkit for users

---

### Phase 8: Polish and Enhancements
**Goal**: Complete application with all features

**Tasks:**
1. Implement dark theme
2. Add left-handed mode
3. Build favorites system
4. Add interval labels toggle
5. Implement scale overlay for chord diagrams
6. Add related chord suggestions
7. Build export functionality (print, image)
8. Responsive design refinements
9. Performance optimization
10. Cross-browser testing

**Deliverable**: Production-ready application

---

## 11. File Structure

```
guitar-chord-explorer/
│
├── index.html                 # Main HTML file
├── manifest.json              # PWA manifest (optional)
├── favicon.ico                # Favicon
│
├── css/
│   ├── styles.css             # Main stylesheet
│   ├── themes.css             # Theme definitions
│   ├── components.css         # Component-specific styles
│   └── responsive.css         # Media queries
│
├── js/
│   ├── app.js                 # Main application controller
│   ├── state.js               # State management
│   │
│   ├── data/
│   │   ├── chordData.js       # Chord definitions library
│   │   ├── arpeggioData.js    # Arpeggio definitions
│   │   ├── scaleData.js       # Scale/mode definitions
│   │   ├── moodMappings.js    # Mood to chord mappings
│   │   └── styleMappings.js   # Style to chord mappings
│   │
│   ├── engines/
│   │   ├── selectionEngine.js # Chord selection logic
│   │   └── theoryEngine.js    # Music theory calculations
│   │
│   ├── renderers/
│   │   ├── chordRenderer.js   # SVG chord diagram generator
│   │   ├── tabRenderer.js     # Tablature renderer
│   │   ├── fretboardRenderer.js # Full fretboard view
│   │   └── uiRenderer.js      # UI component rendering
│   │
│   ├── audio/
│   │   ├── audioEngine.js     # Web Audio API setup
│   │   ├── synthesizer.js     # Sound synthesis
│   │   └── metronome.js       # Metronome functionality
│   │
│   ├── features/
│   │   ├── progression.js     # Progression builder
│   │   ├── practice.js        # Practice mode tools
│   │   ├── favorites.js       # Favorites management
│   │   └── export.js          # Export functionality
│   │
│   └── utils/
│       ├── storage.js         # Local storage helpers
│       ├── helpers.js         # Utility functions
│       └── constants.js       # App-wide constants
│
├── assets/
│   ├── icons/                 # UI icons (SVG)
│   └── audio/                 # Audio samples (if using samples)
│
└── docs/
    └── README.md              # Project documentation
```

---

## 12. Technical Requirements

### 12.1 Browser Support

| Browser | Minimum Version |
|---------|-----------------|
| Chrome | 80+ |
| Firefox | 75+ |
| Safari | 13+ |
| Edge | 80+ |

### 12.2 Required Web APIs

- Web Audio API (sound)
- SVG (graphics)
- Local Storage (persistence)
- CSS Grid/Flexbox (layout)
- ES6+ JavaScript features

### 12.3 Performance Targets

| Metric | Target |
|--------|--------|
| Initial load | < 2 seconds |
| Chord display update | < 100ms |
| Audio latency | < 50ms |
| Memory usage | < 100MB |

### 12.4 Accessibility Requirements

- Keyboard navigation support
- ARIA labels for interactive elements
- Sufficient color contrast (WCAG AA)
- Screen reader compatible chord descriptions
- Focus indicators

### 12.5 Testing Checklist

- [ ] All chord diagrams render correctly
- [ ] All tablature displays accurately
- [ ] Audio plays without distortion
- [ ] Selection filters return correct results
- [ ] Progression builder saves/loads correctly
- [ ] Responsive layout works at all breakpoints
- [ ] Dark theme displays correctly
- [ ] Left-handed mode mirrors properly
- [ ] Local storage persists across sessions
- [ ] Export functions produce valid output

---

## Appendix A: Chord Library Scope

### Minimum Chord Coverage (Phase 1-2)

**Major Chords**: C, D, E, F, G, A, B (open + barre positions)
**Minor Chords**: Cm, Dm, Em, Fm, Gm, Am, Bm (open + barre)
**Seventh Chords**: C7, D7, E7, G7, A7, B7
**Major Seventh**: Cmaj7, Dmaj7, Fmaj7, Gmaj7, Amaj7
**Minor Seventh**: Cm7, Dm7, Em7, Am7
**Suspended**: Csus2, Csus4, Dsus2, Dsus4, Asus2, Asus4

**Total Phase 1-2**: ~60 chord voicings

### Extended Chord Coverage (Phase 5+)

**Add Chords**: Cadd9, Dadd9, Gadd9, etc.
**Ninth Chords**: C9, D9, G9, etc.
**Diminished**: Cdim, Ddim, etc.
**Augmented**: Caug, Daug, etc.
**Altered Dominants**: 7b5, 7#5, 7b9, 7#9
**Extended Jazz**: 11, 13, maj9, min9, min11

**Total Full Library**: ~200-300 chord voicings

---

## Appendix B: Sample Chord Data Entry

```javascript
// Example of a complete chord entry
{
    id: "gmaj_open",
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
        styles: ["folk", "rock", "pop", "country"],
        isOpenChord: true,
        isBarreChord: false
    },
    arpeggioId: "gmaj_arp_pos1",
    alternateVoicings: ["gmaj_barre_3", "gmaj_high_7"]
}
```

---

## Appendix C: Implementation Notes

### Note-to-Frequency Conversion

```javascript
function noteToFrequency(note, octave) {
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const semitone = notes.indexOf(note);
    const midiNumber = (octave + 1) * 12 + semitone;
    return 440 * Math.pow(2, (midiNumber - 69) / 12);
}
```

### Fret-to-Note Conversion

```javascript
const openStrings = ['E', 'A', 'D', 'G', 'B', 'E'];  // 6th to 1st
const openOctaves = [2, 2, 3, 3, 3, 4];

function fretToNote(stringNum, fret) {
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const openNote = openStrings[stringNum];
    const openOctave = openOctaves[stringNum];
    const startIndex = notes.indexOf(openNote);
    const newIndex = (startIndex + fret) % 12;
    const octaveOffset = Math.floor((startIndex + fret) / 12);
    return {
        note: notes[newIndex],
        octave: openOctave + octaveOffset
    };
}
```

---

## Document History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | December 2024 | Initial specification |

---

*End of Specification Document*
