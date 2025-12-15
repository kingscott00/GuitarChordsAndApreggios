# Guitar Chords & Arpeggios - Music Theory Documentation

**Purpose:** This document provides comprehensive details about the music theory content in this application for review and testing by music theory experts.

---

## Table of Contents
1. [Chords Available](#1-chords-available)
2. [Arpeggios Available](#2-arpeggios-available)
3. [Scales and Modes](#3-scales-and-modes)
4. [Curated Progressions](#4-curated-progressions)
5. [Progression Templates](#5-progression-templates)
6. [How the "Inspire Me" Button Works](#6-how-the-inspire-me-button-works)
7. [Scale Detection Algorithm](#7-scale-detection-algorithm)
8. [Sample Outputs](#8-sample-outputs)

---

## 1. Chords Available

The application contains **200+ chord voicings** organized by quality/type.

### Chord Qualities Supported

| Quality | Intervals | Example Symbol |
|---------|-----------|----------------|
| Major | 1, 3, 5 | C, G, D |
| Minor | 1, b3, 5 | Am, Em, Dm |
| Dominant 7 | 1, 3, 5, b7 | C7, G7, E7 |
| Major 7 | 1, 3, 5, 7 | Cmaj7, Gmaj7 |
| Minor 7 | 1, b3, 5, b7 | Am7, Em7, Dm7 |
| Diminished | 1, b3, b5 | Bdim, C#dim |
| Diminished 7 | 1, b3, b5, bb7 | Cdim7, Bdim7 |
| Augmented | 1, 3, #5 | Caug, Eaug |
| Sus2 | 1, 2, 5 | Dsus2, Asus2 |
| Sus4 | 1, 4, 5 | Dsus4, Asus4 |
| Add9 | 1, 3, 5, 9 | Cadd9, Gadd9 |
| Minor 7b5 (Half-Dim) | 1, b3, b5, b7 | Bm7b5, Am7b5 |
| Power Chords | 1, 5 | E5, A5, G5 |
| 6th Chords | 1, 3, 5, 6 | C6, G6 |
| 9th Chords | 1, 3, 5, b7, 9 | G9, C9 |

### Chord Voicing Types

Each chord root can have multiple voicings:
- **Open Position** - Uses open strings, beginner-friendly (difficulty 1)
- **Barre Chord (E-shape)** - Root on 6th string (difficulty 2-3)
- **Barre Chord (A-shape)** - Root on 5th string (difficulty 2-3)
- **Jazz Voicings** - Drop-2, shell voicings (difficulty 3-5)

### Root Notes Available
All 12 chromatic notes: C, C#/Db, D, D#/Eb, E, F, F#/Gb, G, G#/Ab, A, A#/Bb, B

### Sample Chord Definitions

**C Major (Open)**
- Frets: x-3-2-0-1-0 (low to high E)
- Notes: C-E-G-C-E
- Intervals: 1-3-5-1-3

**Am7 (Open)**
- Frets: x-0-2-0-1-0
- Notes: A-E-G-C-E
- Intervals: 1-5-b7-b3-5

**F Major (Barre)**
- Frets: 1-3-3-2-1-1
- Notes: F-C-F-A-C-F
- Intervals: 1-5-1-3-5-1

---

## 2. Arpeggios Available

The application contains **55 arpeggio patterns** covering all major arpeggio types.

### Arpeggio Categories

| Category | Count | Examples |
|----------|-------|----------|
| Major | 14 | C, D, E, F, G, A, B, F#, Bb, Eb, Ab (multiple positions) |
| Minor | 8 | Am, Em, Dm, Cm, Gm, Fm, Bm |
| Dominant 7 | 8 | C7, D7, E7, F7, G7, A7, B7, Bb7 |
| Major 7 | 8 | Cmaj7, Dmaj7, Emaj7, Fmaj7, Gmaj7, Amaj7, Bbmaj7 |
| Minor 7 | 7 | Am7, Em7, Dm7, Cm7, Gm7, Fm7, Bm7 |
| Diminished 7 | 6 | Cdim7, Ddim7, Edim7, F#dim7, G#dim7, Bdim7 |
| Augmented | 4 | Caug, Eaug, Gaug, Abaug |
| Minor 7b5 | 6 | Bm7b5, Em7b5, Am7b5, Dm7b5, F#m7b5, C#m7b5 |

### Arpeggio Data Structure

Each arpeggio includes:
- **Pattern**: Array of {string, fret, finger, interval} for each note
- **Position**: Fret position name (e.g., "Open Position", "5th Position")
- **Difficulty**: 1-3 scale
- **Notes**: The chord tones in the arpeggio
- **Fingering Tips**: Playing advice

### Sample Arpeggio Definition

**A Minor Arpeggio (Open Position)**
```
Notes: A, C, E
Pattern:
  String 5 (A): Fret 0 (open) - Root
  String 5 (A): Fret 3 - b3 (C)
  String 4 (D): Fret 2 - 5th (E)
  String 4 (D): Fret 7 - Root (A)
  String 3 (G): Fret 5 - b3 (C)
  String 2 (B): Fret 5 - 5th (E)
  String 2 (B): Fret 10 - Root (A)
```

---

## 3. Scales and Modes

The application supports all **7 modes** of the major scale with full interval and chord quality mappings.

### Mode Definitions

| Mode | Intervals (Semitones) | Scale Degrees | Character |
|------|----------------------|---------------|-----------|
| **Ionian (Major)** | 0, 2, 4, 5, 7, 9, 11 | 1, 2, 3, 4, 5, 6, 7 | Bright, happy, resolved |
| **Dorian** | 0, 2, 3, 5, 7, 9, 10 | 1, 2, b3, 4, 5, 6, b7 | Minor but hopeful, jazzy |
| **Phrygian** | 0, 1, 3, 5, 7, 8, 10 | 1, b2, b3, 4, 5, b6, b7 | Spanish, dark, exotic |
| **Lydian** | 0, 2, 4, 6, 7, 9, 11 | 1, 2, 3, #4, 5, 6, 7 | Dreamy, floating, bright |
| **Mixolydian** | 0, 2, 4, 5, 7, 9, 10 | 1, 2, 3, 4, 5, 6, b7 | Bluesy major, rock feel |
| **Aeolian (Natural Minor)** | 0, 2, 3, 5, 7, 8, 10 | 1, 2, b3, 4, 5, b6, b7 | Sad, dark, natural minor |
| **Locrian** | 0, 1, 3, 5, 6, 8, 10 | 1, b2, b3, 4, b5, b6, b7 | Unstable, tense, rarely used |

### Diatonic Chord Qualities per Mode

**Ionian (Major Key):**
| Degree | I | ii | iii | IV | V | vi | vii° |
|--------|---|----|----|----|----|----|----|
| Quality | Major | Minor | Minor | Major | Major | Minor | Diminished |
| 7th | Maj7 | Min7 | Min7 | Maj7 | Dom7 | Min7 | Half-dim |

**Aeolian (Natural Minor Key):**
| Degree | i | ii° | III | iv | v | VI | VII |
|--------|---|----|----|----|----|----|----|
| Quality | Minor | Diminished | Major | Minor | Minor | Major | Major |
| 7th | Min7 | Half-dim | Maj7 | Min7 | Min7 | Maj7 | Dom7 |

### Additional Scales Referenced

- **Major Pentatonic**: 1, 2, 3, 5, 6 (removes 4th and 7th)
- **Minor Pentatonic**: 1, b3, 4, 5, b7 (removes 2nd and b6th)
- **Blues Scale**: 1, b3, 4, b5, 5, b7 (pentatonic + blue note)

---

## 4. Curated Progressions

The application contains **84 hand-curated progressions** with specific chord voicings selected for smooth voice leading.

### Progressions by Mood

#### HAPPY/UPLIFTING (14 progressions)

| Name | Key | Chords | Tags |
|------|-----|--------|------|
| Campfire Classic | G | G → C → D → G | folk, acoustic, beginner |
| Summer Song | C | C → G → Am → F | pop, acoustic, singalong |
| Country Road | D | D → A → G → D | country, folk, acoustic |
| Acoustic Joy | G | G → D → Em → C | pop, acoustic, cheerful |
| Morning Light | A | A → E → D → A | folk, acoustic, peaceful |
| Modern Bright | C | Cadd9 → Gadd9 → Am → F | pop, modern, colorful |
| Suspended Wonder | D | Dsus2 → D → Dsus4 → D | ambient, dreamy, simple |
| Anthem Rock | G | G → Cadd9 → Em → D | rock, anthem, powerful |
| Folk Festival | C | C → Am → F → G | folk, singalong, acoustic |
| Full Band Energy | A | A(barre) → E → D(barre) → A | rock, full, energetic |
| Sunny Afternoon | G | Gmaj7 → Cmaj7 → Am7 → D7 | jazzy, smooth, sophisticated |
| Golden Hour | C | Cmaj7 → Fmaj7 → Em7 → Am7 | neo-soul, smooth, warm |
| Journey Home | G | G → D → Em → C → G → D → C → G | extended, story, folk |
| Celebration Road | C | C → G → Am → F → C → G → F → C | extended, anthem, pop |

#### SAD/MELANCHOLIC (12 progressions)

| Name | Key | Chords | Tags |
|------|-----|--------|------|
| Heartbreak Hotel | Am | Am → F → C → G | emotional, acoustic, classic |
| Rainy Window | Em | Em → C → G → D | folk, emotional, introspective |
| Lost Memories | Am | Am → G → F → E | flamenco, emotional, dramatic |
| Autumn Leaves | Am | Am → Dm7 → G → C | jazz, melancholic, smooth |
| Blue Evening | Am | Am7 → Dm7 → Gmaj7 → Cmaj7 | jazzy, smooth, thoughtful |
| Midnight Thoughts | Em | Em7 → Am7 → Dmaj7 → Gmaj7 | lo-fi, introspective, gentle |
| Gray Skies | Dm | Dm7 → Am7 → Gmaj7 → Fmaj7 | neo-soul, moody, smooth |
| Tears to Hope | Am | Am → F → G → C | emotional, building, cinematic |
| City Rain | Bm | Bm → G → D → A | indie, moody, full |
| Long Goodbye | Am | Am → C → G → F → Am → G → F → E | extended, emotional, dramatic |
| Fading Memories | Em | Em → C → G → D → Em → Am → C → Em | extended, reflective, folk |
| Midnight Tears | Am | Am7 → Dm7 → Gmaj7 → Cmaj7 → Fmaj7 → Dm7 → E7 → Am7 | extended, jazzy |

#### DREAMY/ETHEREAL (16 progressions)

| Name | Key | Chords | Tags |
|------|-----|--------|------|
| Cloud Nine | C | Cmaj7 → Em7 → Fmaj7 → C | ambient, ethereal, peaceful |
| Stargazing | G | Gmaj7 → Em7 → Cmaj7 → D | ambient, spacey, calm |
| Morning Mist | C | Cadd9 → Gadd9 → Fmaj7 → Cadd9 | ambient, peaceful, colorful |
| Suspended Reality | A | Asus2 → A → Asus4 → A | ambient, minimal, hypnotic |
| Ocean Drift | D | Dsus2 → D → Dsus4 → Asus2 | ambient, flowing, peaceful |
| Study Session | C | Cmaj7 → Am7 → Dm7 → Gmaj7 | lo-fi, chill, study |
| Bedroom Producer | G | Gmaj7 → Am7 → Cmaj7 → Dmaj7 | lo-fi, intimate, mellow |
| Sunset Drive | G | Gmaj7 → Cmaj7 → Am7 → Em7 | smooth, warm, relaxing |
| Watercolors | C | Cmaj7 → Fmaj7 → Cmaj7 → Gmaj7 | ambient, soft, colorful |
| First Light | D | D → Gadd9 → Asus2 → D | peaceful, hopeful, gentle |
| Drifting Clouds | C | Cmaj7 → Em7 → Fmaj7 → Gmaj7 → Cmaj7 | flowing, ethereal (5 chords) |
| Twilight Reverie | G | Gmaj7 → Em7 → Cmaj7 → Am7 → Dmaj7 → Gmaj7 | flowing, spacey (6 chords) |
| Soft Focus | D | Dsus2 → Gadd9 → Asus2 → Gadd9 → D | flowing, sus, minimal (5 chords) |
| Aurora Dreams | C | Cadd9 → Am7 → Fmaj7 → Gmaj7 → Em7 → Cmaj7 | flowing, colorful (6 chords) |
| Starlit Journey | C | Cmaj7 → Em7 → Fmaj7 → Gmaj7 → Am7 → Fmaj7 → Gmaj7 → Cmaj7 | extended (8 chords) |
| Cloud Wanderer | G | Gmaj7 → Cadd9 → Em7 → Cmaj7 → Gadd9 → Am7 → Cmaj7 → Gmaj7 | extended (8 chords) |

#### DARK/MYSTERIOUS (14 progressions)

| Name | Key | Chords | Tags |
|------|-----|--------|------|
| Shadows | Am | Am → F → C → E | dramatic, intense, flamenco |
| Night Stalker | Em | Em → C → Am → B7 | mysterious, tension, dramatic |
| Dungeon | Dm | Dm(barre) → Am(barre) → C(barre) → Gm(barre) | medieval, dark, full |
| Metal Core | E | E5 → C5 → G5 → D5 | metal, heavy, powerful |
| Riff Machine | A | A5 → F5 → G5 → A5 | rock, driving, intense |
| Suspense | Am | Am → Bdim → C → E | suspense, tension, cinematic |
| Film Noir | Am | Am7 → Dm7 → E7 → Am7 | noir, jazzy, mysterious |
| Midnight Jazz | Dm | Dm7 → G7 → Cmaj7 → A7 | jazz, dark, sophisticated |
| Storm Approaching | Em | Em → D → C → B7 | dramatic, building, cinematic |
| Haunted | Am | Am → E → Am → Dm7 | eerie, haunting, atmospheric |
| Into the Void | Am | Am → F → C → E → Am → Dm7 → E7 → Am | extended, dramatic (8 chords) |
| Cryptic Ritual | Em | Em → C → Am → B7 → Em → D → C → Em | extended, mysterious (8 chords) |
| Storm Unleashed | E | E5 → C5 → G5 → D5 → A5 → F5 → G5 → E5 | extended, metal (8 chords) |
| Noir Detective | Dm | Dm7 → G7 → Cmaj7 → A7 → Dm7 → E7 → Am7 → Dm7 | extended, noir (8 chords) |

#### ENERGETIC/ROCK (14 progressions)

| Name | Key | Chords | Tags |
|------|-----|--------|------|
| Highway Star | E | E → D → A → E | rock, classic, driving |
| Stadium Anthem | G | G → C → D → G | rock, anthem, powerful |
| Garage Band | A | A → D → E → A | garage, raw, punk |
| Power Drive | E | E5 → G5 → A5 → E5 | metal, power, heavy |
| Punk Spirit | A | A5 → D5 → E5 → A5 | punk, fast, raw |
| Full Throttle | F | F(barre) → C(barre) → G(barre) → F | rock, full, powerful |
| Grunge Groove | E | E → G → A → C | grunge, alternative, 90s |
| Indie Rocker | D | D → A → Bm → G | indie, modern, alternative |
| Radio Hit | G | G → D → Em → C | pop, catchy, radio |
| Festival Jam | A | A → E → D → A | festival, fun, energetic |
| Arena Rock | E | E → D → A → E → G → D → A → E | extended, arena (8 chords) |
| Highway Cruiser | G | G → C → D → G → Em → C → D → G | extended, driving (8 chords) |
| Power Surge | E | E5 → G5 → A5 → D5 → E5 → C5 → A5 → E5 | extended, metal (8 chords) |
| Punk Marathon | A | A → D → E → A → D → A → E → A | extended, punk (8 chords) |

#### JAZZY/SOPHISTICATED (12 progressions)

| Name | Key | Chords | Tags |
|------|-----|--------|------|
| Jazz Standard | C | Dm7 → G7 → Cmaj7 | jazz, classic, essential (ii-V-I) |
| Bebop Turnaround | C | Cmaj7 → Am7 → Dm7 → G7 | bebop, classic, sophisticated |
| Smooth Operator | C | Cmaj7 → Fmaj7 → Em7 → Am7 | smooth, elegant, sophisticated |
| Velvet | G | Gmaj7 → Cmaj7 → Am7 → Dmaj7 | smooth, warm, relaxing |
| Blue Mood | Am | Am7 → Dm7 → Em7 → Am7 | jazz, blue, introspective |
| After Hours | Dm | Dm7 → G7 → Cmaj7 → Fmaj7 | jazz, late-night, smoky |
| Neo-Soul Groove | C | Cmaj9 → Am9 → Dm9 → G9 | neo-soul, rich, modern |
| Bossa Afternoon | C | Cmaj7 → Dm7 → G7 → Cmaj7 | bossa, brazilian, smooth |
| Sunday Morning | G | Gmaj7 → Em7 → Am7 → D7 | gospel, soulful, uplifting |
| Jazz Ballad | C | Cmaj7 → Em7 → Fmaj7 → G7 → Am7 → Dm7 → G7 → Cmaj7 | ballad, romantic (8 chords) |
| Bebop Journey | G | Gmaj7 → Em7 → Am7 → D7 → Gmaj7 → Cmaj7 → Am7 → Gmaj7 | bebop, classic (8 chords) |
| Late Night Session | Am | Am7 → Dm7 → G7 → Cmaj7 → Fmaj7 → Dm7 → E7 → Am7 | extended, minor (8 chords) |

#### CHILL/RELAXED (12 progressions)

| Name | Key | Chords | Tags |
|------|-----|--------|------|
| Sunday Morning | G | G → C → G → D | mellow, peaceful, acoustic |
| Porch Swing | C | C → F → C → G | folk, gentle, peaceful |
| Coffee Shop | C | Cmaj7 → Am7 → Fmaj7 → G | cafe, smooth, mellow |
| Hammock | G | Gmaj7 → Cmaj7 → Em7 → Am7 | relaxing, peaceful, smooth |
| Ocean Breeze | C | Cmaj7 → Fmaj7 → Gmaj7 → Cmaj7 | beach, coastal, peaceful |
| Sunset Colors | G | Gadd9 → Cadd9 → Em → D | colorful, warm, mellow |
| Floating | A | Asus2 → A → Dsus2 → D | ambient, floating, peaceful |
| Neo-Soul Groove | C | Cmaj7 → Dm7 → Em7 → Fmaj7 | neo-soul, smooth, groove |
| Late Night Drive | G | Gmaj7 → Am7 → Cmaj7 → D7 | driving, smooth, night |
| Meditation | C | Cmaj7 → Fmaj7 → Cmaj7 → Gmaj7 → Am7 → Fmaj7 → Gmaj7 → Cmaj7 | meditation, peaceful (8 chords) |
| Beach Sunset | G | Gmaj7 → Cmaj7 → Em7 → Am7 → Gmaj7 → Cadd9 → D → Gmaj7 | beach, relaxing (8 chords) |
| Lazy Afternoon | C | C → G → Am → F → C → Em → F → C | mellow, acoustic (8 chords) |

---

## 5. Progression Templates

Beyond curated progressions, the app has **134 abstract templates** using Roman numerals for dynamic generation.

### Template Structure

Each template defines:
- **degrees**: Scale degrees as numbers (1-7)
- **minorDegrees**: Which degrees should be minor chords
- **flatDegrees**: Which degrees should be flattened (bVII, bVI, etc.)
- **qualityOverrides**: Override specific chord qualities at positions
- **rootMinor**: If true, treats degree 1 as minor (for minor key progressions)

### Templates by Mood (Examples)

#### Happy (21 templates)
| Name | Degrees | Notes |
|------|---------|-------|
| Classic Pop | I-V-vi-IV | "Axis of Awesome" progression |
| 50s Doo-Wop | I-vi-IV-V | Classic 50s sound |
| Country Joy | I-IV-I-V | Simple country |
| Feel Good | IV-I-V-vi | Instant mood lift |
| Epic Adventure | I-V-vi-IV-I-V-IV-I | 8-bar epic journey |

#### Sad (18 templates)
| Name | Degrees | Notes |
|------|---------|-------|
| Heartbreak | vi-IV-I-V | Classic sad progression |
| Minor Descent | i-bVII-bVI-bVII | Aeolian sadness |
| Lament | i-iv-i-V | Deep sorrow (minor key) |
| Long Road Home | vi-IV-I-V-vi-IV-V-I | 8-bar emotional journey |

#### Dreamy (22 templates)
| Name | Degrees | Notes |
|------|---------|-------|
| Floating | I-iii-IV-I | Weightless feeling |
| Suspension | I(sus4)-I-I(sus2)-I | Sus chord movement |
| Lo-fi Beat | ii-V-I-I | Study session vibes |
| Starfall | I-iii-IV-I-vi-IV-V-I | 8-bar celestial drift |

#### Dark (18 templates)
| Name | Degrees | Notes |
|------|---------|-------|
| Shadows | i-bVII-bVI-bVII | Lurking darkness |
| Phrygian Gate | i-bII-i-bVII | Spanish darkness |
| Villain | i-bVI-bVII-i | Bad guy theme |
| Nightmare | i-iv-i-V-bVI-iv-V-i | 8-bar tension cycle |

#### Energetic (19 templates)
| Name | Degrees | Notes |
|------|---------|-------|
| Power Drive | I-bVII-IV-I | Classic rock power |
| Stadium | I-V-bVII-IV | Arena rock anthem |
| Punk Spirit | I-IV-V-I | Three chord wonder |
| Arena Anthem | I-V-vi-IV-I-V-IV-I | 8-bar stadium rocker |

#### Jazzy (18 templates)
| Name | Degrees | Notes |
|------|---------|-------|
| ii-V-I | ii-V-I | The jazz foundation |
| Rhythm Changes | I-vi-ii-V | Bebop standard |
| Turnaround | iii-vi-ii-V | Jazz ending |
| Bird Blues | I-IV-I-V-ii-V-I | Charlie Parker style |

#### Chill (18 templates)
| Name | Degrees | Notes |
|------|---------|-------|
| Sunday Morning | I-V-IV-I | Lazy start |
| Neo-Soul | ii-V-I-IV | Modern soul |
| Hammock | I-IV-I-V | Swaying gently |
| Lazy River | I-IV-vi-V-I-IV-V-I | 8-bar flowing relaxation |

---

## 6. How the "Inspire Me" Button Works

### User Input Parameters

1. **Mood** (7 options):
   - Happy, Sad, Dreamy, Dark, Energetic, Jazzy, Chill

2. **Complexity** (3 levels):
   - **Simple**: Difficulty ≤ 2, open chords only
   - **Colorful**: Difficulty ≤ 3, mix of open and extended chords
   - **Advanced**: Difficulty ≤ 5, includes jazz voicings

3. **Length** (mood-specific):
   - **Short**: 2-4 chords
   - **Medium**: 5-8 chords (varies by mood)
   - **Long**: 8-12+ chords

4. **Key Mode**:
   - **Random**: Selects from mood-appropriate keys
   - **Custom**: User selects specific key

5. **Use Curated** (checkbox):
   - If checked, uses hand-picked progressions with optimized voicings
   - If unchecked, generates from templates with voice leading algorithm

### Algorithm Flow

```
User clicks "Inspire Me"
         │
         ▼
┌─────────────────────────────────┐
│ 1. Gather User Inputs           │
│    - mood, complexity, length   │
│    - keyMode, selectedKey       │
│    - useCurated                 │
└─────────────────────────────────┘
         │
         ▼
    ┌────┴────┐
    │useCurated?│
    └────┬────┘
    Yes  │  No
    │    │
    ▼    ▼
┌──────────┐  ┌──────────────────────┐
│ CURATED  │  │ GENERATED (Templates)│
│ PATH     │  │ PATH                 │
└──────────┘  └──────────────────────┘
```

### CURATED PATH (loadCuratedProgression)

1. Get all curated progressions for the selected mood
2. Filter by length using mood-specific ranges:
   - Short: 1-4 chords
   - Medium: 5-8 chords (dreamy: 5-6)
   - Long: 8+ chords
3. Filter by key if user selected custom key
4. Randomly select one progression from filtered list
5. Load exact chord voicings from database (pre-optimized for voice leading)
6. Detect key mode (major/minor) based on progression key
7. Update Scale Builder with appropriate scales

### GENERATED PATH (loadGeneratedProgression)

1. Get template list for the selected mood
2. Filter templates by length range
3. If no matching templates, fall back to built-in templates
4. Randomly select one template
5. Determine key:
   - Random: Pick from mood's suggested keys
   - Custom: Use user's selection
6. **Apply Voice Leading Algorithm** (see below)
7. Update Scale Builder with appropriate scales

### Voice Leading Algorithm (getChordsForKeyWithVoiceLeading)

For each degree in the template:

1. **Calculate Root Note**:
   - Use scale degree to find note in key
   - Handle flat degrees (bVII = 10 semitones from root)

2. **Determine Chord Quality**:
   - Check qualityOverrides in template
   - Check minorDegrees array
   - Check rootMinor flag
   - Default: Use diatonic quality (2, 3, 6 are minor in major key)

3. **Build Allowed Qualities Based on Complexity**:
   - Simple: major, minor, dominant7
   - Colorful: + add9, sus2, sus4, major7, minor7
   - Advanced: + 9th chords, jazz voicings

4. **Find Matching Chords**:
   - Filter chord library by root note
   - Filter by allowed qualities
   - Filter by difficulty ≤ max for complexity
   - Exclude already-used chord IDs (prevent duplicates)

5. **Apply Voice Leading Selection**:
   - **First chord**: Prefer open/low position voicings
   - **Subsequent chords**:
     - Sort candidates by proximity to previous chord's fret position
     - Select from top 40% for variety while maintaining smoothness
     - This minimizes large hand position jumps

6. **Return Selected Chord** with metadata:
   - chordId, root, quality, degree, romanNumeral

### Mood-Specific Key Recommendations

| Mood | Suggested Keys |
|------|----------------|
| Happy | C, G, D, A, E |
| Sad | Am, Em, Dm |
| Dreamy | C, G, D, F |
| Dark | Am, Em, Dm, Bm |
| Energetic | E, A, D, G |
| Jazzy | C, F, Bb, Eb |
| Chill | C, G, D, A |

---

## 7. Scale Detection Algorithm

When a progression is loaded, the app automatically suggests scales.

### Phase 1: Key Detection (detectKey)

1. Try all 12 possible root notes (C through B)
2. For each root, test both major and minor modes
3. Score each key by counting how many progression chords fit diatonically:
   - Each exact match = +10 points
   - Quality matching is flexible (major7 ≈ major, minor7 ≈ minor)
4. Apply +100 bonus if result matches the key hint from Inspire Me
5. Return highest-scoring key {note, mode, score}

### Phase 2: Main Scale Selection (getMainScale)

Based on detected key:
- **Major key detected** → Suggest Ionian (Major) scale
- **Minor key detected** → Suggest Aeolian (Natural Minor) scale
- **No clear key** → Suggest Pentatonic based on first chord

### Phase 3: Alternative Scales (getAlternativeScales)

Always suggested:
1. **Pentatonic** (Major or Minor depending on key)
   - "Simplified 5-note version - great for beginners"
2. **Blues Scale**
   - "Adds bluesy flavor with the blue note (b5)"

Conditional suggestions:
3. **Dorian** - If progression has minor chords in a major key context
   - "Minor scale with brighter sound - great for jazz and funk"
4. **Mixolydian** - If progression contains dominant7 chords
   - "Major scale with b7 - perfect for blues and rock"

### Phase 4: Per-Chord Modes (getPerChordModes)

For advanced players, suggests which mode to play over each individual chord:

| Chord Quality | Suggested Mode | Reason |
|---------------|----------------|--------|
| Major/Maj7 | Ionian | Bright major sound |
| Minor/Min7 (ii) | Dorian | Jazzy minor feel |
| Minor/Min7 (iii) | Phrygian | Dark, Spanish flavor |
| Minor/Min7 (vi) | Aeolian | Standard minor |
| Dominant7 | Mixolydian | Bluesy rock sound |
| Diminished | Locrian | Unstable, tense |

---

## 8. Sample Outputs

Below are example outputs from the "Inspire Me" button showing what a music theory expert would see.

### Sample 1: Happy, Short, Key of G (Curated)

**Settings:**
- Mood: Happy
- Complexity: Colorful
- Length: Short
- Key: G (custom)
- Use Curated: Yes

**Output:**
```
Progression: "Anthem Rock"
Key: G Major

Chords:
1. G Major (open) - I
2. Cadd9 (open) - IV
3. E Minor (open) - vi
4. D Major (open) - V

Suggested Scales:
• Main: G Ionian (Major) - G A B C D E F#
• Alternative 1: G Major Pentatonic - G A B D E
• Alternative 2: G Blues - G Bb C Db D F
• Alternative 3: G Mixolydian - G A B C D E F (for bluesy feel)
```

**Music Theory Analysis:**
- Standard I-IV-vi-V progression in G major
- All chords are diatonic to G major
- The vi chord (Em) provides the emotional contrast
- Cadd9 adds color with the added 9th (D note)

---

### Sample 2: Sad, Medium, Random Key (Curated)

**Settings:**
- Mood: Sad
- Complexity: Colorful
- Length: Medium
- Key: Random
- Use Curated: Yes

**Output:**
```
Progression: "Midnight Tears"
Key: A Minor

Chords:
1. Am7 - i7
2. Dm7 - iv7
3. Gmaj7 - bVII maj7
4. Cmaj7 - bIII maj7
5. Fmaj7 - bVI maj7
6. Dm7 - iv7
7. E7 - V7
8. Am7 - i7

Suggested Scales:
• Main: A Aeolian (Natural Minor) - A B C D E F G
• Alternative 1: A Minor Pentatonic - A C D E G
• Alternative 2: A Blues - A C D Eb E G
• Alternative 3: A Dorian - A B C D E F# G (brighter minor option)
```

**Music Theory Analysis:**
- 8-bar progression in A natural minor
- Uses diatonic 7th chords throughout for sophistication
- bVII-bIII-bVI movement creates descending bass line
- E7 (V7) creates tension resolving to Am7
- Classic minor key jazz/lo-fi progression

---

### Sample 3: Jazzy, Short, Key of C (Generated)

**Settings:**
- Mood: Jazzy
- Complexity: Advanced
- Length: Short
- Key: C (custom)
- Use Curated: No (Generated)

**Output:**
```
Progression: "ii-V-I" (Generated)
Key: C Major

Chords:
1. Dm7 - ii7
2. G7 - V7
3. Cmaj7 - Imaj7

Suggested Scales:
• Main: C Ionian (Major) - C D E F G A B
• Alternative 1: C Major Pentatonic - C D E G A
• Alternative 2: C Blues - C Eb F Gb G Bb

Per-Chord Mode Suggestions:
• Over Dm7: D Dorian - D E F G A B C
• Over G7: G Mixolydian - G A B C D E F
• Over Cmaj7: C Ionian - C D E F G A B
```

**Music Theory Analysis:**
- The fundamental jazz progression (ii-V-I)
- Dm7 (ii) contains D-F-A-C (all in C major)
- G7 (V) contains G-B-D-F (dominant creates tension)
- Cmaj7 (I) resolves the tension
- Voice leading: F (in Dm7) → F (in G7) → E (in Cmaj7)
- Voice leading: C (in Dm7) → B (in G7) → B (in Cmaj7)

---

### Sample 4: Dark, Short, Random Key (Curated)

**Settings:**
- Mood: Dark
- Complexity: Colorful
- Length: Short
- Key: Random
- Use Curated: Yes

**Output:**
```
Progression: "Shadows"
Key: A Minor

Chords:
1. Am - i
2. F - bVI
3. C - bIII
4. E - V

Suggested Scales:
• Main: A Aeolian (Natural Minor) - A B C D E F G
• Alternative 1: A Minor Pentatonic - A C D E G
• Alternative 2: A Harmonic Minor - A B C D E F G# (for the E major)
• Alternative 3: A Phrygian - A Bb C D E F G (Spanish/dark flavor)
```

**Music Theory Analysis:**
- Andalusian-influenced progression (i-bVI-bIII-V)
- The E major chord is borrowed (harmonic minor's V)
- This creates the classic "flamenco" or "Spanish" sound
- The G# in E major creates strong pull back to Am
- bVI-bIII movement is characteristic of Aeolian mode

---

### Sample 5: Dreamy, Medium (5-6 chords), Random Key (Curated)

**Settings:**
- Mood: Dreamy
- Complexity: Colorful
- Length: Medium (Flowing 5-6)
- Key: Random
- Use Curated: Yes

**Output:**
```
Progression: "Aurora Dreams"
Key: C Major

Chords:
1. Cadd9 - Iadd9
2. Am7 - vi7
3. Fmaj7 - IVmaj7
4. Gmaj7 - Vmaj7
5. Em7 - iii7
6. Cmaj7 - Imaj7

Suggested Scales:
• Main: C Ionian (Major) - C D E F G A B
• Alternative 1: C Major Pentatonic - C D E G A
• Alternative 2: C Lydian - C D E F# G A B (dreamy, floating)

Per-Chord Mode Suggestions:
• Over Cadd9: C Ionian
• Over Am7: A Aeolian
• Over Fmaj7: F Lydian (for dreamy quality)
• Over Gmaj7: G Ionian
• Over Em7: E Phrygian or E Aeolian
• Over Cmaj7: C Ionian
```

**Music Theory Analysis:**
- 6-chord dreamy progression using extended chords
- All chords are diatonic to C major
- The add9 and maj7 extensions create the "dreamy" quality
- Asymmetric 6-chord length works well for ambient/ethereal moods
- The iii chord (Em7) adds depth before returning home

---

### Sample 6: Energetic, Long, Key of E (Generated)

**Settings:**
- Mood: Energetic
- Complexity: Simple
- Length: Long
- Key: E (custom)
- Use Curated: No (Generated)

**Output:**
```
Progression: "Arena Anthem" (Generated)
Key: E Major

Chords:
1. E - I
2. B - V
3. C#m - vi
4. A - IV
5. E - I
6. B - V
7. A - IV
8. E - I

Suggested Scales:
• Main: E Ionian (Major) - E F# G# A B C# D#
• Alternative 1: E Major Pentatonic - E F# G# B C#
• Alternative 2: E Mixolydian - E F# G# A B C# D (rock/blues feel)
```

**Music Theory Analysis:**
- 8-bar rock anthem structure (I-V-vi-IV repeated with variation)
- Standard "four chord song" extended to 8 bars
- Second half variation (I-V-IV-I) provides satisfying resolution
- All open chord shapes in E major = easy to play with power
- Classic arena rock formula used by countless hit songs

---

### Sample 7: Chill, Short, Random Key (Curated)

**Settings:**
- Mood: Chill
- Complexity: Colorful
- Length: Short
- Key: Random
- Use Curated: Yes

**Output:**
```
Progression: "Coffee Shop"
Key: C Major

Chords:
1. Cmaj7 - Imaj7
2. Am7 - vi7
3. Fmaj7 - IVmaj7
4. G - V

Suggested Scales:
• Main: C Ionian (Major) - C D E F G A B
• Alternative 1: C Major Pentatonic - C D E G A
• Alternative 2: C Blues - C Eb F Gb G Bb
• Alternative 3: C Dorian - C D Eb F G A Bb (for neo-soul flavor)
```

**Music Theory Analysis:**
- Smooth I-vi-IV-V with 7th chord extensions
- Classic "coffee shop" or lo-fi beat progression
- The maj7 chords create warm, sophisticated sound
- The plain G (not G7) at the end keeps it relaxed
- Voice leading creates smooth bass motion: C → A → F → G

---

## Summary Statistics

| Category | Count |
|----------|-------|
| Total Chord Voicings | 200+ |
| Arpeggio Patterns | 55 |
| Scale Modes | 7 |
| Curated Progressions | 84 |
| Template Progressions | 134 |
| Mood Categories | 7 |
| Complexity Levels | 3 |
| Length Options | 3 (mood-specific) |

---

## Testing Recommendations for Music Theory Expert

1. **Chord Accuracy**: Verify that chord intervals and notes match standard music theory
2. **Scale/Mode Correctness**: Confirm mode intervals and diatonic chord mappings
3. **Progression Quality**: Test that curated progressions sound musical and follow voice leading principles
4. **Scale Detection**: Verify the algorithm correctly identifies keys from various progressions
5. **Mode Suggestions**: Confirm per-chord mode recommendations are appropriate
6. **Roman Numeral Analysis**: Check that degree labeling is correct for each key

---

*Document generated for music theory review and testing purposes.*
