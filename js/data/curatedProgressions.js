/**
 * Guitar Chord Explorer - Curated Progression Database
 * Hand-picked progressions with specific voicings that sound beautiful together
 * Each progression uses voicings selected for smooth voice leading
 */

const CuratedProgressions = {
    // ==========================================
    // HAPPY / UPLIFTING - Beautiful sounding progressions
    // ==========================================
    happy: [
        // Open Position Classics
        {
            id: 'happy-open-1',
            name: 'Campfire Classic',
            description: 'The timeless open chord progression',
            key: 'G',
            chordIds: ['g_major_open', 'c_major_open', 'd_major_open', 'g_major_open'],
            tags: ['folk', 'acoustic', 'beginner']
        },
        {
            id: 'happy-open-2',
            name: 'Summer Song',
            description: 'Bright and uplifting open chords',
            key: 'C',
            chordIds: ['c_major_open', 'g_major_open', 'a_minor_open', 'f_major_barre'],
            tags: ['pop', 'acoustic', 'singalong']
        },
        {
            id: 'happy-open-3',
            name: 'Country Road',
            description: 'Classic country feel',
            key: 'D',
            chordIds: ['d_major_open', 'a_major_open', 'g_major_open', 'd_major_open'],
            tags: ['country', 'folk', 'acoustic']
        },
        {
            id: 'happy-open-4',
            name: 'Acoustic Joy',
            description: 'Feel-good strumming',
            key: 'G',
            chordIds: ['g_major_open', 'd_major_open', 'e_minor_open', 'c_major_open'],
            tags: ['pop', 'acoustic', 'cheerful']
        },
        {
            id: 'happy-open-5',
            name: 'Morning Light',
            description: 'Gentle and warm',
            key: 'A',
            chordIds: ['a_major_open', 'e_major_open', 'd_major_open', 'a_major_open'],
            tags: ['folk', 'acoustic', 'peaceful']
        },
        // Add9 and Sus variations
        {
            id: 'happy-add9-1',
            name: 'Modern Bright',
            description: 'Contemporary pop with add9 colors',
            key: 'C',
            chordIds: ['cadd9_open', 'gadd9_open', 'a_minor_open', 'f_major_barre'],
            tags: ['pop', 'modern', 'colorful']
        },
        {
            id: 'happy-sus-1',
            name: 'Suspended Wonder',
            description: 'Dreamy sus chord movement',
            key: 'D',
            chordIds: ['dsus2_open', 'd_major_open', 'dsus4_open', 'd_major_open'],
            tags: ['ambient', 'dreamy', 'simple']
        },
        {
            id: 'happy-open-6',
            name: 'Anthem Rock',
            description: 'Stadium-ready progression',
            key: 'G',
            chordIds: ['g_major_open', 'cadd9_open', 'e_minor_open', 'd_major_open'],
            tags: ['rock', 'anthem', 'powerful']
        },
        {
            id: 'happy-open-7',
            name: 'Folk Festival',
            description: 'Instant crowd pleaser',
            key: 'C',
            chordIds: ['c_major_open', 'a_minor_open', 'f_major_barre', 'g_major_open'],
            tags: ['folk', 'singalong', 'acoustic']
        },
        {
            id: 'happy-barre-1',
            name: 'Full Band Energy',
            description: 'Rich barre chord voicings',
            key: 'A',
            chordIds: ['a_major_barre', 'e_major_open', 'd_major_barre', 'a_major_barre'],
            tags: ['rock', 'full', 'energetic']
        },
        // 7th chord happiness
        {
            id: 'happy-7th-1',
            name: 'Sunny Afternoon',
            description: 'Laid-back 7th chord groove',
            key: 'G',
            chordIds: ['gmaj7_open', 'cmaj7_open', 'am7_open', 'd7_open'],
            tags: ['jazzy', 'smooth', 'sophisticated']
        },
        {
            id: 'happy-7th-2',
            name: 'Golden Hour',
            description: 'Warm major 7th colors',
            key: 'C',
            chordIds: ['cmaj7_open', 'fmaj7_open', 'em7_open', 'am7_open'],
            tags: ['neo-soul', 'smooth', 'warm']
        },
        // Extended progressions
        {
            id: 'happy-ext-1',
            name: 'Journey Home',
            description: '8-bar storytelling progression',
            key: 'G',
            chordIds: ['g_major_open', 'd_major_open', 'e_minor_open', 'c_major_open', 'g_major_open', 'd_major_open', 'c_major_open', 'g_major_open'],
            tags: ['extended', 'story', 'folk']
        }
    ],

    // ==========================================
    // SAD / MELANCHOLIC - Emotionally moving progressions
    // ==========================================
    sad: [
        // Minor key open progressions
        {
            id: 'sad-open-1',
            name: 'Heartbreak Hotel',
            description: 'Classic sad chord sequence',
            key: 'Am',
            chordIds: ['a_minor_open', 'f_major_barre', 'c_major_open', 'g_major_open'],
            tags: ['emotional', 'acoustic', 'classic']
        },
        {
            id: 'sad-open-2',
            name: 'Rainy Window',
            description: 'Melancholic reflection',
            key: 'Em',
            chordIds: ['e_minor_open', 'c_major_open', 'g_major_open', 'd_major_open'],
            tags: ['folk', 'emotional', 'introspective']
        },
        {
            id: 'sad-open-3',
            name: 'Lost Memories',
            description: 'Wistful and longing',
            key: 'Am',
            chordIds: ['a_minor_open', 'g_major_open', 'f_major_barre', 'e_major_open'],
            tags: ['flamenco', 'emotional', 'dramatic']
        },
        {
            id: 'sad-open-4',
            name: 'Autumn Leaves',
            description: 'Gentle sadness',
            key: 'Am',
            chordIds: ['a_minor_open', 'dm7_open', 'g_major_open', 'c_major_open'],
            tags: ['jazz', 'melancholic', 'smooth']
        },
        // Minor 7th variations
        {
            id: 'sad-7th-1',
            name: 'Blue Evening',
            description: 'Sophisticated melancholy',
            key: 'Am',
            chordIds: ['am7_open', 'dm7_open', 'gmaj7_open', 'cmaj7_open'],
            tags: ['jazzy', 'smooth', 'thoughtful']
        },
        {
            id: 'sad-7th-2',
            name: 'Midnight Thoughts',
            description: 'Late night reflection',
            key: 'Em',
            chordIds: ['em7_open', 'am7_open', 'dmaj7_open', 'gmaj7_open'],
            tags: ['lo-fi', 'introspective', 'gentle']
        },
        {
            id: 'sad-7th-3',
            name: 'Gray Skies',
            description: 'Somber and contemplative',
            key: 'Dm',
            chordIds: ['dm7_open', 'am7_open', 'gmaj7_open', 'fmaj7_open'],
            tags: ['neo-soul', 'moody', 'smooth']
        },
        // Emotional builds
        {
            id: 'sad-build-1',
            name: 'Tears to Hope',
            description: 'Builds from sadness to resolution',
            key: 'Am',
            chordIds: ['a_minor_open', 'f_major_barre', 'g_major_open', 'c_major_open'],
            tags: ['emotional', 'building', 'cinematic']
        },
        {
            id: 'sad-barre-1',
            name: 'City Rain',
            description: 'Urban melancholy',
            key: 'Bm',
            chordIds: ['b_minor_barre', 'g_major_open', 'd_major_open', 'a_major_open'],
            tags: ['indie', 'moody', 'full']
        },
        {
            id: 'sad-ext-1',
            name: 'Long Goodbye',
            description: 'Extended emotional journey',
            key: 'Am',
            chordIds: ['a_minor_open', 'c_major_open', 'g_major_open', 'f_major_barre', 'a_minor_open', 'e_major_open'],
            tags: ['extended', 'emotional', 'dramatic']
        }
    ],

    // ==========================================
    // DREAMY / ATMOSPHERIC - Floating, ambient progressions
    // ==========================================
    dreamy: [
        // Open atmospheric
        {
            id: 'dreamy-open-1',
            name: 'Cloud Nine',
            description: 'Floating and weightless',
            key: 'C',
            chordIds: ['cmaj7_open', 'em7_open', 'fmaj7_open', 'c_major_open'],
            tags: ['ambient', 'ethereal', 'peaceful']
        },
        {
            id: 'dreamy-open-2',
            name: 'Stargazing',
            description: 'Night sky wonder',
            key: 'G',
            chordIds: ['gmaj7_open', 'em7_open', 'cmaj7_open', 'd_major_open'],
            tags: ['ambient', 'spacey', 'calm']
        },
        {
            id: 'dreamy-add9-1',
            name: 'Morning Mist',
            description: 'Gentle add9 atmosphere',
            key: 'C',
            chordIds: ['cadd9_open', 'gadd9_open', 'fmaj7_open', 'cadd9_open'],
            tags: ['ambient', 'peaceful', 'colorful']
        },
        {
            id: 'dreamy-sus-1',
            name: 'Suspended Reality',
            description: 'Floating sus chords',
            key: 'A',
            chordIds: ['asus2_open', 'a_major_open', 'asus4_open', 'a_major_open'],
            tags: ['ambient', 'minimal', 'hypnotic']
        },
        {
            id: 'dreamy-sus-2',
            name: 'Ocean Drift',
            description: 'Wave-like sus movement',
            key: 'D',
            chordIds: ['dsus2_open', 'd_major_open', 'dsus4_open', 'asus2_open'],
            tags: ['ambient', 'flowing', 'peaceful']
        },
        // Lo-fi dreamy
        {
            id: 'dreamy-lofi-1',
            name: 'Study Session',
            description: 'Lo-fi study vibes',
            key: 'C',
            chordIds: ['cmaj7_open', 'am7_open', 'dm7_open', 'gmaj7_open'],
            tags: ['lo-fi', 'chill', 'study']
        },
        {
            id: 'dreamy-lofi-2',
            name: 'Bedroom Producer',
            description: 'Intimate lo-fi beat backing',
            key: 'G',
            chordIds: ['gmaj7_open', 'am7_open', 'cmaj7_open', 'dmaj7_open'],
            tags: ['lo-fi', 'intimate', 'mellow']
        },
        // Extended dreamy
        {
            id: 'dreamy-7th-1',
            name: 'Sunset Drive',
            description: 'Golden hour cruising',
            key: 'G',
            chordIds: ['gmaj7_open', 'cmaj7_open', 'am7_open', 'em7_open'],
            tags: ['smooth', 'warm', 'relaxing']
        },
        {
            id: 'dreamy-color-1',
            name: 'Watercolors',
            description: 'Soft, blended harmonies',
            key: 'C',
            chordIds: ['cmaj7_open', 'fmaj7_open', 'cmaj7_open', 'gmaj7_open'],
            tags: ['ambient', 'soft', 'colorful']
        },
        {
            id: 'dreamy-open-3',
            name: 'First Light',
            description: 'Dawn breaking gently',
            key: 'D',
            chordIds: ['d_major_open', 'gadd9_open', 'asus2_open', 'd_major_open'],
            tags: ['peaceful', 'hopeful', 'gentle']
        }
    ],

    // ==========================================
    // DARK / MYSTERIOUS - Tension and intrigue
    // ==========================================
    dark: [
        // Minor power
        {
            id: 'dark-minor-1',
            name: 'Shadows',
            description: 'Lurking minor intensity',
            key: 'Am',
            chordIds: ['a_minor_open', 'f_major_barre', 'c_major_open', 'e_major_open'],
            tags: ['dramatic', 'intense', 'flamenco']
        },
        {
            id: 'dark-minor-2',
            name: 'Night Stalker',
            description: 'Creeping minor progression',
            key: 'Em',
            chordIds: ['e_minor_open', 'c_major_open', 'a_minor_open', 'b7_open'],
            tags: ['mysterious', 'tension', 'dramatic']
        },
        {
            id: 'dark-barre-1',
            name: 'Dungeon',
            description: 'Medieval darkness',
            key: 'Dm',
            chordIds: ['d_minor_barre', 'a_minor_barre', 'c_major_barre_e', 'g_minor_barre'],
            tags: ['medieval', 'dark', 'full']
        },
        // Power chord darkness
        {
            id: 'dark-power-1',
            name: 'Metal Core',
            description: 'Heavy power chord progression',
            key: 'E',
            chordIds: ['e5_power', 'c5_power', 'g5_power', 'd5_power'],
            tags: ['metal', 'heavy', 'powerful']
        },
        {
            id: 'dark-power-2',
            name: 'Riff Machine',
            description: 'Driving power chord riff',
            key: 'A',
            chordIds: ['a5_power', 'f5_power', 'g5_power', 'a5_power'],
            tags: ['rock', 'driving', 'intense']
        },
        // Diminished tension
        {
            id: 'dark-dim-1',
            name: 'Suspense',
            description: 'Building tension with diminished',
            key: 'Am',
            chordIds: ['a_minor_open', 'bdim_open', 'c_major_open', 'e_major_open'],
            tags: ['suspense', 'tension', 'cinematic']
        },
        // 7th chord darkness
        {
            id: 'dark-7th-1',
            name: 'Film Noir',
            description: 'Smoky noir atmosphere',
            key: 'Am',
            chordIds: ['am7_open', 'dm7_open', 'e7_open', 'am7_open'],
            tags: ['noir', 'jazzy', 'mysterious']
        },
        {
            id: 'dark-7th-2',
            name: 'Midnight Jazz',
            description: 'Dark jazz club vibes',
            key: 'Dm',
            chordIds: ['dm7_open', 'g7_open', 'cmaj7_open', 'a7_open'],
            tags: ['jazz', 'dark', 'sophisticated']
        },
        // Dramatic builds
        {
            id: 'dark-build-1',
            name: 'Storm Approaching',
            description: 'Building darkness',
            key: 'Em',
            chordIds: ['e_minor_open', 'd_major_open', 'c_major_open', 'b7_open'],
            tags: ['dramatic', 'building', 'cinematic']
        },
        {
            id: 'dark-open-1',
            name: 'Haunted',
            description: 'Ghostly presence',
            key: 'Am',
            chordIds: ['a_minor_open', 'e_major_open', 'a_minor_open', 'dm7_open'],
            tags: ['eerie', 'haunting', 'atmospheric']
        }
    ],

    // ==========================================
    // ENERGETIC / ROCK - High energy progressions
    // ==========================================
    energetic: [
        // Classic rock
        {
            id: 'energetic-rock-1',
            name: 'Highway Star',
            description: 'Classic driving rock',
            key: 'E',
            chordIds: ['e_major_open', 'd_major_open', 'a_major_open', 'e_major_open'],
            tags: ['rock', 'classic', 'driving']
        },
        {
            id: 'energetic-rock-2',
            name: 'Stadium Anthem',
            description: 'Arena rock progression',
            key: 'G',
            chordIds: ['g_major_open', 'c_major_open', 'd_major_open', 'g_major_open'],
            tags: ['rock', 'anthem', 'powerful']
        },
        {
            id: 'energetic-rock-3',
            name: 'Garage Band',
            description: 'Raw garage rock energy',
            key: 'A',
            chordIds: ['a_major_open', 'd_major_open', 'e_major_open', 'a_major_open'],
            tags: ['garage', 'raw', 'punk']
        },
        // Power chord energy
        {
            id: 'energetic-power-1',
            name: 'Power Drive',
            description: 'Crushing power chords',
            key: 'E',
            chordIds: ['e5_power', 'g5_power', 'a5_power', 'e5_power'],
            tags: ['metal', 'power', 'heavy']
        },
        {
            id: 'energetic-power-2',
            name: 'Punk Spirit',
            description: 'Fast punk energy',
            key: 'A',
            chordIds: ['a5_power', 'd5_power', 'e5_power', 'a5_power'],
            tags: ['punk', 'fast', 'raw']
        },
        // Barre chord rock
        {
            id: 'energetic-barre-1',
            name: 'Full Throttle',
            description: 'Full barre chord power',
            key: 'F',
            chordIds: ['f_major_barre', 'c_major_barre_e', 'g_major_barre', 'f_major_barre'],
            tags: ['rock', 'full', 'powerful']
        },
        // Alt rock
        {
            id: 'energetic-alt-1',
            name: 'Grunge Groove',
            description: 'Alternative rock feel',
            key: 'E',
            chordIds: ['e_major_open', 'g_major_open', 'a_major_open', 'c_major_open'],
            tags: ['grunge', 'alternative', '90s']
        },
        {
            id: 'energetic-alt-2',
            name: 'Indie Rocker',
            description: 'Modern indie rock',
            key: 'D',
            chordIds: ['d_major_open', 'a_major_open', 'b_minor_barre', 'g_major_open'],
            tags: ['indie', 'modern', 'alternative']
        },
        // High energy pop-rock
        {
            id: 'energetic-pop-1',
            name: 'Radio Hit',
            description: 'Catchy pop-rock energy',
            key: 'G',
            chordIds: ['g_major_open', 'd_major_open', 'e_minor_open', 'c_major_open'],
            tags: ['pop', 'catchy', 'radio']
        },
        {
            id: 'energetic-open-1',
            name: 'Festival Jam',
            description: 'Crowd-pleasing progression',
            key: 'A',
            chordIds: ['a_major_open', 'e_major_open', 'd_major_open', 'a_major_open'],
            tags: ['festival', 'fun', 'energetic']
        }
    ],

    // ==========================================
    // JAZZY / SOPHISTICATED - Complex harmonic progressions
    // ==========================================
    jazzy: [
        // ii-V-I variations
        {
            id: 'jazzy-251-1',
            name: 'Jazz Standard',
            description: 'The essential ii-V-I',
            key: 'C',
            chordIds: ['dm7_open', 'g7_open', 'cmaj7_open'],
            tags: ['jazz', 'classic', 'essential']
        },
        {
            id: 'jazzy-251-2',
            name: 'Bebop Turnaround',
            description: 'Extended ii-V-I with vi',
            key: 'C',
            chordIds: ['cmaj7_open', 'am7_open', 'dm7_open', 'g7_open'],
            tags: ['bebop', 'classic', 'sophisticated']
        },
        // Major 7th progressions
        {
            id: 'jazzy-maj7-1',
            name: 'Smooth Operator',
            description: 'Silky major 7th movement',
            key: 'C',
            chordIds: ['cmaj7_open', 'fmaj7_open', 'em7_open', 'am7_open'],
            tags: ['smooth', 'elegant', 'sophisticated']
        },
        {
            id: 'jazzy-maj7-2',
            name: 'Velvet',
            description: 'Warm major 7th colors',
            key: 'G',
            chordIds: ['gmaj7_open', 'cmaj7_open', 'am7_open', 'dmaj7_open'],
            tags: ['smooth', 'warm', 'relaxing']
        },
        // Minor jazz
        {
            id: 'jazzy-minor-1',
            name: 'Blue Mood',
            description: 'Minor jazz exploration',
            key: 'Am',
            chordIds: ['am7_open', 'dm7_open', 'em7_open', 'am7_open'],
            tags: ['jazz', 'blue', 'introspective']
        },
        {
            id: 'jazzy-minor-2',
            name: 'After Hours',
            description: 'Late night jazz club',
            key: 'Dm',
            chordIds: ['dm7_open', 'g7_open', 'cmaj7_open', 'fmaj7_open'],
            tags: ['jazz', 'late-night', 'smoky']
        },
        // Extended chords
        {
            id: 'jazzy-9th-1',
            name: 'Neo-Soul Groove',
            description: 'Rich 9th chord flavors',
            key: 'C',
            chordIds: ['cmaj9_jazz', 'am9_jazz', 'dm9_jazz', 'g9_jazz'],
            tags: ['neo-soul', 'rich', 'modern']
        },
        // Bossa nova influence
        {
            id: 'jazzy-bossa-1',
            name: 'Bossa Afternoon',
            description: 'Brazilian jazz feel',
            key: 'C',
            chordIds: ['cmaj7_open', 'dm7_open', 'g7_open', 'cmaj7_open'],
            tags: ['bossa', 'brazilian', 'smooth']
        },
        // Gospel/Soul jazz
        {
            id: 'jazzy-gospel-1',
            name: 'Sunday Morning',
            description: 'Gospel-influenced jazz',
            key: 'G',
            chordIds: ['gmaj7_open', 'em7_open', 'am7_open', 'd7_open'],
            tags: ['gospel', 'soulful', 'uplifting']
        },
        {
            id: 'jazzy-ext-1',
            name: 'Jazz Ballad',
            description: 'Extended romantic progression',
            key: 'C',
            chordIds: ['cmaj7_open', 'em7_open', 'fmaj7_open', 'g7_open', 'am7_open', 'dm7_open', 'g7_open', 'cmaj7_open'],
            tags: ['ballad', 'romantic', 'extended']
        }
    ],

    // ==========================================
    // CHILL / RELAXED - Laid back progressions
    // ==========================================
    chill: [
        // Mellow open
        {
            id: 'chill-open-1',
            name: 'Sunday Morning',
            description: 'Lazy weekend vibes',
            key: 'G',
            chordIds: ['g_major_open', 'c_major_open', 'g_major_open', 'd_major_open'],
            tags: ['mellow', 'peaceful', 'acoustic']
        },
        {
            id: 'chill-open-2',
            name: 'Porch Swing',
            description: 'Gentle rocking rhythm',
            key: 'C',
            chordIds: ['c_major_open', 'f_major_barre', 'c_major_open', 'g_major_open'],
            tags: ['folk', 'gentle', 'peaceful']
        },
        // 7th chord chill
        {
            id: 'chill-7th-1',
            name: 'Coffee Shop',
            description: 'Cafe background vibes',
            key: 'C',
            chordIds: ['cmaj7_open', 'am7_open', 'fmaj7_open', 'g_major_open'],
            tags: ['cafe', 'smooth', 'mellow']
        },
        {
            id: 'chill-7th-2',
            name: 'Hammock',
            description: 'Complete relaxation',
            key: 'G',
            chordIds: ['gmaj7_open', 'cmaj7_open', 'em7_open', 'am7_open'],
            tags: ['relaxing', 'peaceful', 'smooth']
        },
        {
            id: 'chill-7th-3',
            name: 'Ocean Breeze',
            description: 'Coastal relaxation',
            key: 'C',
            chordIds: ['cmaj7_open', 'fmaj7_open', 'gmaj7_open', 'cmaj7_open'],
            tags: ['beach', 'coastal', 'peaceful']
        },
        // Add9/sus chill
        {
            id: 'chill-add9-1',
            name: 'Sunset Colors',
            description: 'Colorful add9 progression',
            key: 'G',
            chordIds: ['gadd9_open', 'cadd9_open', 'e_minor_open', 'd_major_open'],
            tags: ['colorful', 'warm', 'mellow']
        },
        {
            id: 'chill-sus-1',
            name: 'Floating',
            description: 'Suspended tranquility',
            key: 'A',
            chordIds: ['asus2_open', 'a_major_open', 'dsus2_open', 'd_major_open'],
            tags: ['ambient', 'floating', 'peaceful']
        },
        // Neo-soul chill
        {
            id: 'chill-soul-1',
            name: 'Neo-Soul Groove',
            description: 'Modern soul relaxation',
            key: 'C',
            chordIds: ['cmaj7_open', 'dm7_open', 'em7_open', 'fmaj7_open'],
            tags: ['neo-soul', 'smooth', 'groove']
        },
        {
            id: 'chill-soul-2',
            name: 'Late Night Drive',
            description: 'Cruising after dark',
            key: 'G',
            chordIds: ['gmaj7_open', 'am7_open', 'cmaj7_open', 'd7_open'],
            tags: ['driving', 'smooth', 'night']
        },
        // Extended chill
        {
            id: 'chill-ext-1',
            name: 'Meditation',
            description: 'Extended peaceful progression',
            key: 'C',
            chordIds: ['cmaj7_open', 'fmaj7_open', 'cmaj7_open', 'gmaj7_open', 'am7_open', 'fmaj7_open'],
            tags: ['meditation', 'peaceful', 'extended']
        }
    ]
};

/**
 * Get a random curated progression for a mood
 * @param {string} mood - The mood category
 * @returns {Object} A random curated progression
 */
function getRandomCuratedProgression(mood) {
    const progressions = CuratedProgressions[mood];
    if (!progressions || progressions.length === 0) {
        return CuratedProgressions.happy[0]; // Fallback
    }
    return progressions[Math.floor(Math.random() * progressions.length)];
}

/**
 * Get all curated progressions for a mood
 * @param {string} mood - The mood category
 * @returns {Array} Array of curated progression objects
 */
function getCuratedProgressionsForMood(mood) {
    return CuratedProgressions[mood] || CuratedProgressions.happy;
}

/**
 * Get curated progression by ID
 * @param {string} id - Progression ID
 * @returns {Object|null} Progression object or null
 */
function getCuratedProgressionById(id) {
    for (const mood in CuratedProgressions) {
        const progression = CuratedProgressions[mood].find(p => p.id === id);
        if (progression) return progression;
    }
    return null;
}

/**
 * Get curated progressions by tag
 * @param {string} tag - Tag to search for
 * @returns {Array} Array of matching progressions
 */
function getCuratedProgressionsByTag(tag) {
    const results = [];
    for (const mood in CuratedProgressions) {
        const matches = CuratedProgressions[mood].filter(p =>
            p.tags && p.tags.includes(tag)
        );
        results.push(...matches);
    }
    return results;
}

/**
 * Get total count of curated progressions
 * @returns {number} Total count
 */
function getCuratedProgressionCount() {
    let count = 0;
    for (const mood in CuratedProgressions) {
        count += CuratedProgressions[mood].length;
    }
    return count;
}
