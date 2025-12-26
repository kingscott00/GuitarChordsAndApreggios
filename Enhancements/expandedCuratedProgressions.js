/**
 * EXPANDED CURATED PROGRESSIONS
 * 
 * This file contains new progressions to fill gaps in key coverage
 * and add more variety to existing moods.
 * 
 * Current gaps to fill:
 * - Cm (0 progressions) 
 * - Gm (0 progressions)
 * - F (only 1)
 * - Bm (only 1)
 * - Fm (0 progressions)
 * - Bb (0 progressions)
 * - Eb (0 progressions)
 * 
 * Target: Add 50+ new progressions across all moods
 */

const expandedCuratedProgressions = [

    // ============================================
    // HAPPY/UPLIFTING - New Keys & Varieties
    // ============================================
    
    {
        name: "Bright Morning (F Major)",
        key: "F",
        mood: "happy",
        chords: ["F", "C", "Dm", "Bb"],
        tags: ["folk", "bright", "acoustic"],
        description: "Classic F major progression - warm and inviting"
    },
    
    {
        name: "Festival Vibes (Bb Major)",
        key: "Bb",
        mood: "happy",
        chords: ["Bb", "F", "Gm", "Eb"],
        tags: ["uplifting", "celebration", "bright"],
        description: "Bb major progression - big and bold sound"
    },
    
    {
        name: "Sunshine Pop (Eb Major)",
        key: "Eb",
        mood: "happy",
        chords: ["Eb", "Bb", "Cm", "Ab"],
        tags: ["pop", "bright", "radio"],
        description: "Eb major - rich and colorful"
    },
    
    {
        name: "Island Breeze (A Major)",
        key: "A",
        chords: ["A", "E", "F#m", "D"],
        mood: "happy",
        tags: ["tropical", "bright", "summery"],
        description: "A major progression - guitar-friendly and uplifting"
    },
    
    {
        name: "Feel Good Jam (E Major)",
        key: "E",
        chords: ["E", "A", "B", "C#m"],
        mood: "happy",
        tags: ["rock", "uplifting", "energetic"],
        description: "E major rock progression - powerful and positive"
    },

    // ============================================
    // SAD/MELANCHOLIC - New Keys & Varieties  
    // ============================================
    
    {
        name: "Winter Blues (Cm)",
        key: "Cm",
        mood: "sad",
        chords: ["Cm", "Ab", "Eb", "Bb"],
        tags: ["melancholic", "dark", "emotional"],
        description: "C minor progression - deep and somber"
    },
    
    {
        name: "Lonely Streets (Cm)",
        key: "Cm",
        mood: "sad",
        chords: ["Cm", "Fm", "Bb", "Eb"],
        tags: ["urban", "melancholic", "introspective"],
        description: "C minor with subdominant movement - heavy emotion"
    },
    
    {
        name: "Autumn Rain (Gm)",
        key: "Gm",
        mood: "sad",
        chords: ["Gm", "Eb", "Bb", "F"],
        tags: ["melancholic", "gentle", "reflective"],
        description: "G minor progression - bittersweet and contemplative"
    },
    
    {
        name: "Fading Light (Gm)",
        key: "Gm",
        mood: "sad",
        chords: ["Gm", "Dm", "Eb", "D"],
        tags: ["dramatic", "emotional", "minor"],
        description: "G minor with harmonic minor - classical sadness"
    },
    
    {
        name: "Broken Dreams (Fm)",
        key: "Fm",
        mood: "sad",
        chords: ["Fm", "Db", "Ab", "Eb"],
        tags: ["melancholic", "deep", "emotional"],
        description: "F minor - dark and introspective"
    },
    
    {
        name: "Lost in Thought (Bm)",
        key: "Bm",
        mood: "sad",
        chords: ["Bm", "G", "D", "A"],
        tags: ["introspective", "gentle", "melancholic"],
        description: "B minor progression - wistful and reflective"
    },
    
    {
        name: "Silent Tears (Dm)",
        key: "Dm",
        mood: "sad",
        chords: ["Dm", "C", "Bb", "A"],
        tags: ["emotional", "dramatic", "moving"],
        description: "D minor with descending bass - powerful sadness"
    },
    
    {
        name: "Empty Room (Em)",
        key: "Em",
        mood: "sad",
        chords: ["Em", "Am", "D", "G"],
        tags: ["lonely", "acoustic", "simple"],
        description: "E minor progression - stark and honest"
    },

    // ============================================
    // DREAMY/ETHEREAL - New Keys & Varieties
    // ============================================
    
    {
        name: "Floating Clouds (F)",
        key: "F",
        mood: "dreamy",
        chords: ["Fmaj7", "Cmaj7", "Am7", "Dm7"],
        tags: ["ambient", "peaceful", "floating"],
        description: "F major 7th movement - soft and weightless"
    },
    
    {
        name: "Stardust (Bb)",
        key: "Bb",
        mood: "dreamy",
        chords: ["Bbmaj7", "Gm7", "Ebmaj7", "Fsus4"],
        tags: ["ethereal", "spacey", "beautiful"],
        description: "Bb major with suspensions - magical atmosphere"
    },
    
    {
        name: "Northern Lights (Eb)",
        key: "Eb",
        mood: "dreamy",
        chords: ["Ebmaj7", "Bbmaj7", "Cm7", "Ab"],
        tags: ["ambient", "colorful", "expansive"],
        description: "Eb major progression - wide and celestial"
    },
    
    {
        name: "Dream Sequence (A)",
        key: "A",
        mood: "dreamy",
        chords: ["Amaj7", "F#m7", "Dmaj7", "E"],
        tags: ["ambient", "flowing", "gentle"],
        description: "A major with 7ths - smooth and dreamy"
    },
    
    {
        name: "Velvet Sky (E)",
        key: "E",
        mood: "dreamy",
        chords: ["Emaj7", "C#m7", "Amaj7", "B"],
        tags: ["lush", "ambient", "rich"],
        description: "E major progression - warm and enveloping"
    },

    // ============================================
    // DARK/MYSTERIOUS - New Keys & Varieties
    // ============================================
    
    {
        name: "Dark Cathedral (Cm)",
        key: "Cm",
        mood: "dark",
        chords: ["Cm", "Bb", "Ab", "G"],
        tags: ["gothic", "dramatic", "heavy"],
        description: "C minor with major V - powerful darkness"
    },
    
    {
        name: "Shadow Realm (Gm)",
        key: "Gm",
        mood: "dark",
        chords: ["Gm", "Eb", "F", "D"],
        tags: ["mysterious", "tense", "dramatic"],
        description: "G minor progression - lurking shadows"
    },
    
    {
        name: "Midnight Ritual (Fm)",
        key: "Fm",
        mood: "dark",
        chords: ["Fm", "Db", "Eb", "Fm"],
        tags: ["occult", "mysterious", "cyclic"],
        description: "F minor circular progression - hypnotic darkness"
    },
    
    {
        name: "Conspiracy (Bm)",
        key: "Bm",
        mood: "dark",
        chords: ["Bm", "D", "Em", "F#"],
        tags: ["mysterious", "tense", "suspenseful"],
        description: "B minor with major VI - intrigue and mystery"
    },
    
    {
        name: "The Abyss (Cm)",
        key: "Cm",
        mood: "dark",
        chords: ["Cm", "Gm", "Ab", "Bb"],
        tags: ["heavy", "doom", "powerful"],
        description: "C minor with emphasis on iv-V - crushing weight"
    },

    // ============================================
    // ENERGETIC/ROCK - New Keys & Varieties
    // ============================================
    
    {
        name: "Rock Anthem (F)",
        key: "F",
        mood: "energetic",
        chords: ["F", "Bb", "C", "F"],
        tags: ["rock", "driving", "powerful"],
        description: "F major rock progression - full and bold"
    },
    
    {
        name: "Power Surge (Bb)",
        key: "Bb",
        mood: "energetic",
        chords: ["Bb", "Eb", "F", "Bb"],
        tags: ["rock", "heavy", "energetic"],
        description: "Bb major rock - massive sound"
    },
    
    {
        name: "Thunder Road (Eb)",
        key: "Eb",
        mood: "energetic",
        chords: ["Eb", "Ab", "Bb", "Cm"],
        tags: ["rock", "anthem", "driving"],
        description: "Eb major with minor vi - dynamic range"
    },
    
    {
        name: "Desert Highway (A)",
        key: "A",
        mood: "energetic",
        chords: ["A", "D", "E", "A"],
        tags: ["rock", "classic", "driving"],
        description: "A major rock staple - pure power"
    },
    
    {
        name: "Stadium Rock (E)",
        key: "E",
        mood: "energetic",
        chords: ["E", "A", "B", "E"],
        tags: ["rock", "anthem", "massive"],
        description: "E major progression - arena-ready"
    },

    // ============================================
    // JAZZY/SOPHISTICATED - New Keys & Varieties
    // ============================================
    
    {
        name: "Urban Jazz (Cm)",
        key: "Cm",
        mood: "jazzy",
        chords: ["Cm7", "Fm7", "Bb7", "Ebmaj7"],
        tags: ["jazz", "sophisticated", "urban"],
        description: "C minor ii-V-I - classic jazz in minor"
    },
    
    {
        name: "Autumn Leaves (Gm)",
        key: "Gm",
        mood: "jazzy",
        chords: ["Gm7", "Cm7", "F7", "Bbmaj7"],
        tags: ["jazz", "standard", "smooth"],
        description: "G minor ii-V-I - iconic jazz sound"
    },
    
    {
        name: "Blue Note (Fm)",
        key: "Fm",
        mood: "jazzy",
        chords: ["Fm7", "Bbm7", "Eb7", "Abmaj7"],
        tags: ["jazz", "blue", "sophisticated"],
        description: "F minor ii-V-I - deep jazz harmony"
    },
    
    {
        name: "Sophisticated Lady (Bb)",
        key: "Bb",
        mood: "jazzy",
        chords: ["Bbmaj7", "Gm7", "Cm7", "F7"],
        tags: ["jazz", "elegant", "classic"],
        description: "Bb major jazz progression - timeless elegance"
    },
    
    {
        name: "Modal Jazz (Dm)",
        key: "Dm",
        mood: "jazzy",
        chords: ["Dm7", "Em7", "Fmaj7", "Em7"],
        tags: ["jazz", "modal", "modern"],
        description: "D dorian vamp - modal jazz exploration"
    },

    // ============================================
    // CHILL/RELAXED - New Keys & Varieties
    // ============================================
    
    {
        name: "Lazy Sunday (F)",
        key: "F",
        mood: "chill",
        chords: ["Fmaj7", "Am7", "Bb", "C"],
        tags: ["relaxed", "peaceful", "acoustic"],
        description: "F major chill progression - effortlessly relaxed"
    },
    
    {
        name: "Coastal Breeze (Bb)",
        key: "Bb",
        mood: "chill",
        chords: ["Bbmaj7", "Dm7", "Eb", "F"],
        tags: ["beach", "relaxed", "smooth"],
        description: "Bb major laid-back groove"
    },
    
    {
        name: "Mountain View (Eb)",
        key: "Eb",
        mood: "chill",
        chords: ["Ebmaj7", "Gm7", "Ab", "Bb"],
        tags: ["peaceful", "expansive", "chill"],
        description: "Eb major relaxation - wide open sound"
    },
    
    {
        name: "Evening Stroll (A)",
        key: "A",
        mood: "chill",
        chords: ["Amaj7", "C#m7", "D", "E"],
        tags: ["relaxed", "gentle", "acoustic"],
        description: "A major chill - easy and flowing"
    },
    
    {
        name: "Garden Peace (E)",
        key: "E",
        mood: "chill",
        chords: ["Emaj7", "G#m7", "A", "B"],
        tags: ["peaceful", "nature", "serene"],
        description: "E major tranquility - calm and centered"
    }
];

/**
 * GUIDELINES FOR CREATING GREAT CURATED PROGRESSIONS
 * 
 * Use this when adding more progressions:
 * 
 * 1. VOICE LEADING - Pick voicings that minimize hand movement
 *    Example: G(open) → C(open) → D(open) flows smoothly
 *    Bad: G(open) → C(barre 8th fret) → D(open) = big jumps
 * 
 * 2. KEY VARIETY - Make sure each mood has progressions in:
 *    - All 12 major keys
 *    - All 12 minor keys (for appropriate moods)
 * 
 * 3. LENGTH DISTRIBUTION per mood:
 *    - Short (2-4 chords): 40%
 *    - Medium (5-7 chords): 40%
 *    - Long (8+ chords): 20%
 * 
 * 4. DIFFICULTY VARIETY per mood:
 *    - Simple (open chords): 40%
 *    - Colorful (mix of open + extensions): 40%
 *    - Advanced (barre, jazz, complex): 20%
 * 
 * 5. MUSICAL PRINCIPLES:
 *    - Start or end on the tonic (key chord)
 *    - Use diatonic chords (from the key) 90% of the time
 *    - Borrowed chords add color but use sparingly
 *    - Ensure chords create a satisfying resolution
 * 
 * 6. TAGS - Use 2-4 relevant tags:
 *    - Genre: jazz, rock, folk, pop, blues
 *    - Mood: bright, dark, peaceful, energetic
 *    - Context: acoustic, electric, singalong, anthem
 *    - Difficulty: beginner, intermediate, advanced
 * 
 * 7. DESCRIPTION - Make it helpful:
 *    - Mention the key
 *    - Describe the sound/feeling
 *    - Note any special techniques or characteristics
 */

/**
 * RECOMMENDED PROGRESSION ADDITIONS (To Reach 150+ Total)
 * 
 * Current gaps and targets:
 * 
 * KEYS NEEDING MORE COVERAGE:
 * - F: Need 15 more (currently 1)
 * - Bb: Need 15 more (currently 0)
 * - Eb: Need 15 more (currently 0)
 * - Cm: Need 10 more (currently 0)
 * - Gm: Need 10 more (currently 0)
 * - Fm: Need 10 more (currently 0)
 * - Bm: Need 8 more (currently 1)
 * - F#/Gb: Need 8 more (currently 0)
 * - C#m: Need 8 more (currently 0)
 * 
 * MOOD DISTRIBUTION TARGET (150 progressions):
 * - Happy: 25 progressions (currently 14) → Need 11 more
 * - Sad: 22 progressions (currently 12) → Need 10 more
 * - Dreamy: 25 progressions (currently 16) → Need 9 more
 * - Dark: 20 progressions (currently 14) → Need 6 more
 * - Energetic: 20 progressions (currently 14) → Need 6 more
 * - Jazzy: 18 progressions (currently 12) → Need 6 more
 * - Chill: 20 progressions (currently 12) → Need 8 more
 */

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = expandedCuratedProgressions;
}
