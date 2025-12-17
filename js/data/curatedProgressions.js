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
        // Extended progressions (8 chords for Medium length)
        {
            id: 'happy-ext-1',
            name: 'Journey Home',
            description: '8-bar storytelling progression',
            key: 'G',
            chordIds: ['g_major_open', 'd_major_open', 'e_minor_open', 'c_major_open', 'g_major_open', 'd_major_open', 'c_major_open', 'g_major_open'],
            tags: ['extended', 'story', 'folk']
        },
        {
            id: 'happy-ext-2',
            name: 'Celebration Road',
            description: '8-bar party anthem',
            key: 'C',
            chordIds: ['c_major_open', 'g_major_open', 'a_minor_open', 'f_major_barre', 'c_major_open', 'g_major_open', 'f_major_barre', 'c_major_open'],
            tags: ['extended', 'anthem', 'pop']
        },
        {
            id: 'happy-ext-3',
            name: 'Festival Sunrise',
            description: '8-bar uplifting journey',
            key: 'D',
            chordIds: ['d_major_open', 'a_major_open', 'g_major_open', 'd_major_open', 'e_minor_open', 'g_major_open', 'a_major_open', 'd_major_open'],
            tags: ['extended', 'festival', 'uplifting']
        },
        {
            id: 'happy-ext-4',
            name: 'Golden Memories',
            description: '8-bar nostalgic happiness',
            key: 'G',
            chordIds: ['gmaj7_open', 'cmaj7_open', 'am7_open', 'd7_open', 'gmaj7_open', 'em7_open', 'cmaj7_open', 'gmaj7_open'],
            tags: ['extended', 'jazzy', 'warm']
        },
        // New progressions for key coverage
        {
            id: 'happy-f-1',
            name: 'Bright Morning',
            description: 'Classic F major progression - warm and inviting',
            key: 'F',
            chordIds: ['f_major_barre', 'c_major_open', 'd_minor_open', 'bb_major_barre'],
            tags: ['folk', 'bright', 'acoustic']
        },
        {
            id: 'happy-bb-1',
            name: 'Festival Vibes',
            description: 'Bb major progression - big and bold sound',
            key: 'Bb',
            chordIds: ['bb_major_barre', 'f_major_barre', 'g_minor_barre', 'eb_major_barre'],
            tags: ['uplifting', 'celebration', 'bright']
        },
        {
            id: 'happy-eb-1',
            name: 'Sunshine Pop',
            description: 'Eb major - rich and colorful',
            key: 'Eb',
            chordIds: ['eb_major_barre', 'bb_major_barre', 'c_minor_barre', 'ab_major_barre'],
            tags: ['pop', 'bright', 'radio']
        },
        {
            id: 'happy-a-2',
            name: 'Island Breeze',
            description: 'A major progression - guitar-friendly and uplifting',
            key: 'A',
            chordIds: ['a_major_open', 'e_major_open', 'fsharp_minor_barre', 'd_major_open'],
            tags: ['tropical', 'bright', 'summery']
        },
        {
            id: 'happy-e-1',
            name: 'Feel Good Jam',
            description: 'E major rock progression - powerful and positive',
            key: 'E',
            chordIds: ['e_major_open', 'a_major_open', 'b_major_open', 'csharp_minor_barre'],
            tags: ['rock', 'uplifting', 'energetic']
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
            chordIds: ['a_minor_open', 'c_major_open', 'g_major_open', 'f_major_barre', 'a_minor_open', 'g_major_open', 'f_major_barre', 'e_major_open'],
            tags: ['extended', 'emotional', 'dramatic']
        },
        {
            id: 'sad-ext-2',
            name: 'Fading Memories',
            description: '8-bar melancholic reflection',
            key: 'Em',
            chordIds: ['e_minor_open', 'c_major_open', 'g_major_open', 'd_major_open', 'e_minor_open', 'a_minor_open', 'c_major_open', 'e_minor_open'],
            tags: ['extended', 'reflective', 'folk']
        },
        {
            id: 'sad-ext-3',
            name: 'Midnight Tears',
            description: '8-bar jazzy sadness',
            key: 'Am',
            chordIds: ['am7_open', 'dm7_open', 'gmaj7_open', 'cmaj7_open', 'fmaj7_open', 'dm7_open', 'e7_open', 'am7_open'],
            tags: ['extended', 'jazzy', 'sophisticated']
        },
        {
            id: 'sad-ext-4',
            name: 'Winter Walk',
            description: '8-bar contemplative journey',
            key: 'Dm',
            chordIds: ['d_minor_barre', 'a_minor_open', 'c_major_open', 'g_major_open', 'd_minor_barre', 'f_major_barre', 'a_minor_open', 'd_minor_barre'],
            tags: ['extended', 'contemplative', 'moody']
        },
        // New progressions for key coverage
        {
            id: 'sad-cm-1',
            name: 'Winter Blues',
            description: 'C minor progression - deep and somber',
            key: 'Cm',
            chordIds: ['c_minor_barre', 'ab_major_barre', 'eb_major_barre', 'bb_major_barre'],
            tags: ['melancholic', 'dark', 'emotional']
        },
        {
            id: 'sad-cm-2',
            name: 'Lonely Streets',
            description: 'C minor with subdominant movement - heavy emotion',
            key: 'Cm',
            chordIds: ['c_minor_barre', 'f_minor_barre', 'bb_major_barre', 'eb_major_barre'],
            tags: ['urban', 'melancholic', 'introspective']
        },
        {
            id: 'sad-gm-1',
            name: 'Autumn Rain',
            description: 'G minor progression - bittersweet and contemplative',
            key: 'Gm',
            chordIds: ['g_minor_barre', 'eb_major_barre', 'bb_major_barre', 'f_major_barre'],
            tags: ['melancholic', 'gentle', 'reflective']
        },
        {
            id: 'sad-gm-2',
            name: 'Fading Light',
            description: 'G minor with harmonic minor - classical sadness',
            key: 'Gm',
            chordIds: ['g_minor_barre', 'd_minor_barre', 'eb_major_barre', 'd_major_open'],
            tags: ['dramatic', 'emotional', 'minor']
        },
        {
            id: 'sad-fm-1',
            name: 'Broken Dreams',
            description: 'F minor - dark and introspective',
            key: 'Fm',
            chordIds: ['f_minor_barre', 'db_major_barre', 'ab_major_barre', 'eb_major_barre'],
            tags: ['melancholic', 'deep', 'emotional']
        },
        {
            id: 'sad-bm-2',
            name: 'Lost in Thought',
            description: 'B minor progression - wistful and reflective',
            key: 'Bm',
            chordIds: ['b_minor_barre', 'g_major_open', 'd_major_open', 'a_major_open'],
            tags: ['introspective', 'gentle', 'melancholic']
        },
        {
            id: 'sad-dm-2',
            name: 'Silent Tears',
            description: 'D minor with descending bass - powerful sadness',
            key: 'Dm',
            chordIds: ['d_minor_open', 'c_major_open', 'bb_major_barre', 'a_major_open'],
            tags: ['emotional', 'dramatic', 'moving']
        },
        {
            id: 'sad-em-2',
            name: 'Empty Room',
            description: 'E minor progression - stark and honest',
            key: 'Em',
            chordIds: ['e_minor_open', 'a_minor_open', 'd_major_open', 'g_major_open'],
            tags: ['lonely', 'acoustic', 'simple']
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
        },
        // Flowing progressions (5-6 chords for Medium length - dreamy works best with asymmetric lengths)
        {
            id: 'dreamy-flow-1',
            name: 'Drifting Clouds',
            description: '5-chord floating progression',
            key: 'C',
            chordIds: ['cmaj7_open', 'em7_open', 'fmaj7_open', 'gmaj7_open', 'cmaj7_open'],
            tags: ['flowing', 'ethereal', 'ambient']
        },
        {
            id: 'dreamy-flow-2',
            name: 'Twilight Reverie',
            description: '6-chord dreamscape',
            key: 'G',
            chordIds: ['gmaj7_open', 'em7_open', 'cmaj7_open', 'am7_open', 'dmaj7_open', 'gmaj7_open'],
            tags: ['flowing', 'spacey', 'gentle']
        },
        {
            id: 'dreamy-flow-3',
            name: 'Soft Focus',
            description: '5-chord ambient loop',
            key: 'D',
            chordIds: ['dsus2_open', 'gadd9_open', 'asus2_open', 'gadd9_open', 'd_major_open'],
            tags: ['flowing', 'sus', 'minimal']
        },
        {
            id: 'dreamy-flow-4',
            name: 'Aurora Dreams',
            description: '6-chord ethereal journey',
            key: 'C',
            chordIds: ['cadd9_open', 'am7_open', 'fmaj7_open', 'gmaj7_open', 'em7_open', 'cmaj7_open'],
            tags: ['flowing', 'colorful', 'peaceful']
        },
        // Extended progressions (8+ chords for Long length)
        {
            id: 'dreamy-ext-1',
            name: 'Starlit Journey',
            description: '8-bar ethereal exploration',
            key: 'C',
            chordIds: ['cmaj7_open', 'em7_open', 'fmaj7_open', 'gmaj7_open', 'am7_open', 'fmaj7_open', 'gmaj7_open', 'cmaj7_open'],
            tags: ['extended', 'ethereal', 'ambient']
        },
        {
            id: 'dreamy-ext-2',
            name: 'Cloud Wanderer',
            description: '8-bar floating atmosphere',
            key: 'G',
            chordIds: ['gmaj7_open', 'cadd9_open', 'em7_open', 'cmaj7_open', 'gadd9_open', 'am7_open', 'cmaj7_open', 'gmaj7_open'],
            tags: ['extended', 'floating', 'peaceful']
        },
        {
            id: 'dreamy-ext-3',
            name: 'Moonlit Waters',
            description: '8-bar reflective ambience',
            key: 'D',
            chordIds: ['dsus2_open', 'gadd9_open', 'asus2_open', 'd_major_open', 'gadd9_open', 'a_major_open', 'dsus2_open', 'd_major_open'],
            tags: ['extended', 'ambient', 'sus']
        },
        {
            id: 'dreamy-ext-4',
            name: 'Endless Horizon',
            description: '8-bar lo-fi dreamscape',
            key: 'C',
            chordIds: ['cmaj7_open', 'am7_open', 'dm7_open', 'gmaj7_open', 'cmaj7_open', 'fmaj7_open', 'em7_open', 'cmaj7_open'],
            tags: ['extended', 'lo-fi', 'dreamy']
        },
        // New progressions for key coverage
        {
            id: 'dreamy-f-1',
            name: 'Floating Clouds',
            description: 'F major 7th movement - soft and weightless',
            key: 'F',
            chordIds: ['fmaj7_open', 'cmaj7_open', 'am7_open', 'dm7_open'],
            tags: ['ambient', 'peaceful', 'floating']
        },
        {
            id: 'dreamy-bb-1',
            name: 'Stardust',
            description: 'Bb major with suspensions - magical atmosphere',
            key: 'Bb',
            chordIds: ['bbmaj7_barre', 'gm7_barre', 'ebmaj7_barre', 'f_major_barre'],
            tags: ['ethereal', 'spacey', 'beautiful']
        },
        {
            id: 'dreamy-eb-1',
            name: 'Northern Lights',
            description: 'Eb major progression - wide and celestial',
            key: 'Eb',
            chordIds: ['ebmaj7_barre', 'bbmaj7_barre', 'cm7_barre', 'ab_major_barre'],
            tags: ['ambient', 'colorful', 'expansive']
        },
        {
            id: 'dreamy-a-1',
            name: 'Dream Sequence',
            description: 'A major with 7ths - smooth and dreamy',
            key: 'A',
            chordIds: ['amaj7_open', 'fsharpm7_barre', 'dmaj7_open', 'e_major_open'],
            tags: ['ambient', 'flowing', 'gentle']
        },
        {
            id: 'dreamy-e-1',
            name: 'Velvet Sky',
            description: 'E major progression - warm and enveloping',
            key: 'E',
            chordIds: ['emaj7_barre', 'csharpm7_barre', 'amaj7_open', 'b_major_open'],
            tags: ['lush', 'ambient', 'rich']
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
        },
        // Extended progressions (8 chords for Medium length)
        {
            id: 'dark-ext-1',
            name: 'Into the Void',
            description: '8-bar descent into darkness',
            key: 'Am',
            chordIds: ['a_minor_open', 'f_major_barre', 'c_major_open', 'e_major_open', 'a_minor_open', 'dm7_open', 'e7_open', 'a_minor_open'],
            tags: ['extended', 'dramatic', 'intense']
        },
        {
            id: 'dark-ext-2',
            name: 'Cryptic Ritual',
            description: '8-bar mysterious ceremony',
            key: 'Em',
            chordIds: ['e_minor_open', 'c_major_open', 'a_minor_open', 'b7_open', 'e_minor_open', 'd_major_open', 'c_major_open', 'e_minor_open'],
            tags: ['extended', 'mysterious', 'ritual']
        },
        {
            id: 'dark-ext-3',
            name: 'Storm Unleashed',
            description: '8-bar power chord fury',
            key: 'E',
            chordIds: ['e5_power', 'c5_power', 'g5_power', 'd5_power', 'a5_power', 'f5_power', 'g5_power', 'e5_power'],
            tags: ['extended', 'metal', 'powerful']
        },
        {
            id: 'dark-ext-4',
            name: 'Noir Detective',
            description: '8-bar film noir jazz',
            key: 'Dm',
            chordIds: ['dm7_open', 'g7_open', 'cmaj7_open', 'a7_open', 'dm7_open', 'e7_open', 'am7_open', 'dm7_open'],
            tags: ['extended', 'noir', 'jazzy']
        },
        // New progressions for key coverage
        {
            id: 'dark-cm-1',
            name: 'Dark Cathedral',
            description: 'C minor with major V - powerful darkness',
            key: 'Cm',
            chordIds: ['c_minor_barre', 'bb_major_barre', 'ab_major_barre', 'g_major_open'],
            tags: ['gothic', 'dramatic', 'heavy']
        },
        {
            id: 'dark-gm-1',
            name: 'Shadow Realm',
            description: 'G minor progression - lurking shadows',
            key: 'Gm',
            chordIds: ['g_minor_barre', 'eb_major_barre', 'f_major_barre', 'd_major_open'],
            tags: ['mysterious', 'tense', 'dramatic']
        },
        {
            id: 'dark-fm-1',
            name: 'Midnight Ritual',
            description: 'F minor circular progression - hypnotic darkness',
            key: 'Fm',
            chordIds: ['f_minor_barre', 'db_major_barre', 'eb_major_barre', 'f_minor_barre'],
            tags: ['occult', 'mysterious', 'cyclic']
        },
        {
            id: 'dark-bm-1',
            name: 'Conspiracy',
            description: 'B minor with major VI - intrigue and mystery',
            key: 'Bm',
            chordIds: ['b_minor_barre', 'd_major_open', 'e_minor_open', 'fsharp_minor_barre'],
            tags: ['mysterious', 'tense', 'suspenseful']
        },
        {
            id: 'dark-cm-2',
            name: 'The Abyss',
            description: 'C minor with emphasis on iv-V - crushing weight',
            key: 'Cm',
            chordIds: ['c_minor_barre', 'g_minor_barre', 'ab_major_barre', 'bb_major_barre'],
            tags: ['heavy', 'doom', 'powerful']
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
        },
        // Extended progressions (8 chords for Medium length)
        {
            id: 'energetic-ext-1',
            name: 'Arena Rock',
            description: '8-bar stadium anthem',
            key: 'E',
            chordIds: ['e_major_open', 'd_major_open', 'a_major_open', 'e_major_open', 'g_major_open', 'd_major_open', 'a_major_open', 'e_major_open'],
            tags: ['extended', 'arena', 'rock']
        },
        {
            id: 'energetic-ext-2',
            name: 'Highway Cruiser',
            description: '8-bar driving rock',
            key: 'G',
            chordIds: ['g_major_open', 'c_major_open', 'd_major_open', 'g_major_open', 'e_minor_open', 'c_major_open', 'd_major_open', 'g_major_open'],
            tags: ['extended', 'driving', 'classic']
        },
        {
            id: 'energetic-ext-3',
            name: 'Power Surge',
            description: '8-bar power chord assault',
            key: 'E',
            chordIds: ['e5_power', 'g5_power', 'a5_power', 'd5_power', 'e5_power', 'c5_power', 'a5_power', 'e5_power'],
            tags: ['extended', 'metal', 'power']
        },
        {
            id: 'energetic-ext-4',
            name: 'Punk Marathon',
            description: '8-bar high-energy punk',
            key: 'A',
            chordIds: ['a_major_open', 'd_major_open', 'e_major_open', 'a_major_open', 'd_major_open', 'a_major_open', 'e_major_open', 'a_major_open'],
            tags: ['extended', 'punk', 'fast']
        },
        // New progressions for key coverage
        {
            id: 'energetic-f-1',
            name: 'Rock Anthem',
            description: 'F major rock progression - full and bold',
            key: 'F',
            chordIds: ['f_major_barre', 'bb_major_barre', 'c_major_open', 'f_major_barre'],
            tags: ['rock', 'driving', 'powerful']
        },
        {
            id: 'energetic-bb-1',
            name: 'Brass Knuckles',
            description: 'Bb major rock - massive sound',
            key: 'Bb',
            chordIds: ['bb_major_barre', 'eb_major_barre', 'f_major_barre', 'bb_major_barre'],
            tags: ['rock', 'heavy', 'energetic']
        },
        {
            id: 'energetic-eb-1',
            name: 'Thunder Road',
            description: 'Eb major with minor vi - dynamic range',
            key: 'Eb',
            chordIds: ['eb_major_barre', 'ab_major_barre', 'bb_major_barre', 'c_minor_barre'],
            tags: ['rock', 'anthem', 'driving']
        },
        {
            id: 'energetic-a-2',
            name: 'Desert Highway',
            description: 'A major rock staple - pure power',
            key: 'A',
            chordIds: ['a_major_open', 'd_major_open', 'e_major_open', 'a_major_open'],
            tags: ['rock', 'classic', 'driving']
        },
        {
            id: 'energetic-e-1',
            name: 'Stadium Rock',
            description: 'E major progression - arena-ready',
            key: 'E',
            chordIds: ['e_major_open', 'a_major_open', 'b_major_open', 'e_major_open'],
            tags: ['rock', 'anthem', 'massive']
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
            description: '8-bar romantic progression',
            key: 'C',
            chordIds: ['cmaj7_open', 'em7_open', 'fmaj7_open', 'g7_open', 'am7_open', 'dm7_open', 'g7_open', 'cmaj7_open'],
            tags: ['ballad', 'romantic', 'extended']
        },
        {
            id: 'jazzy-ext-2',
            name: 'Bebop Journey',
            description: '8-bar classic jazz exploration',
            key: 'G',
            chordIds: ['gmaj7_open', 'em7_open', 'am7_open', 'd7_open', 'gmaj7_open', 'cmaj7_open', 'am7_open', 'gmaj7_open'],
            tags: ['extended', 'bebop', 'classic']
        },
        {
            id: 'jazzy-ext-3',
            name: 'Late Night Session',
            description: '8-bar smoky club vibes',
            key: 'Am',
            chordIds: ['am7_open', 'dm7_open', 'g7_open', 'cmaj7_open', 'fmaj7_open', 'dm7_open', 'e7_open', 'am7_open'],
            tags: ['extended', 'minor', 'sophisticated']
        },
        {
            id: 'jazzy-ext-4',
            name: 'Smooth Operator',
            description: '8-bar silky smooth jazz',
            key: 'C',
            chordIds: ['cmaj7_open', 'fmaj7_open', 'em7_open', 'am7_open', 'dm7_open', 'g7_open', 'fmaj7_open', 'cmaj7_open'],
            tags: ['extended', 'smooth', 'elegant']
        },
        // New progressions for key coverage
        {
            id: 'jazzy-cm-1',
            name: 'Urban Jazz',
            description: 'C minor ii-V-I - classic jazz in minor',
            key: 'Cm',
            chordIds: ['cm7_barre', 'fm7_barre', 'bb7_barre', 'ebmaj7_barre'],
            tags: ['jazz', 'sophisticated', 'urban']
        },
        {
            id: 'jazzy-gm-1',
            name: 'Jazz Minor Standard',
            description: 'G minor ii-V-I - iconic jazz sound',
            key: 'Gm',
            chordIds: ['gm7_barre', 'cm7_barre', 'f7_barre', 'bbmaj7_barre'],
            tags: ['jazz', 'standard', 'smooth']
        },
        {
            id: 'jazzy-fm-1',
            name: 'Blue Note',
            description: 'F minor ii-V-I - deep jazz harmony',
            key: 'Fm',
            chordIds: ['fm7_barre', 'bbm7_barre', 'eb7_barre', 'abmaj7_barre'],
            tags: ['jazz', 'blue', 'sophisticated']
        },
        {
            id: 'jazzy-bb-1',
            name: 'Sophisticated Lady',
            description: 'Bb major jazz progression - timeless elegance',
            key: 'Bb',
            chordIds: ['bbmaj7_barre', 'gm7_barre', 'cm7_barre', 'f7_barre'],
            tags: ['jazz', 'elegant', 'classic']
        },
        {
            id: 'jazzy-dm-1',
            name: 'Modal Jazz',
            description: 'D dorian vamp - modal jazz exploration',
            key: 'Dm',
            chordIds: ['dm7_open', 'em7_open', 'fmaj7_open', 'em7_open'],
            tags: ['jazz', 'modal', 'modern']
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
        // Extended chill (8 chords for Medium length)
        {
            id: 'chill-ext-1',
            name: 'Meditation',
            description: '8-bar peaceful progression',
            key: 'C',
            chordIds: ['cmaj7_open', 'fmaj7_open', 'cmaj7_open', 'gmaj7_open', 'am7_open', 'fmaj7_open', 'gmaj7_open', 'cmaj7_open'],
            tags: ['meditation', 'peaceful', 'extended']
        },
        {
            id: 'chill-ext-2',
            name: 'Beach Sunset',
            description: '8-bar coastal relaxation',
            key: 'G',
            chordIds: ['gmaj7_open', 'cmaj7_open', 'em7_open', 'am7_open', 'gmaj7_open', 'cadd9_open', 'd_major_open', 'gmaj7_open'],
            tags: ['extended', 'beach', 'relaxing']
        },
        {
            id: 'chill-ext-3',
            name: 'Lazy Afternoon',
            description: '8-bar laid-back groove',
            key: 'C',
            chordIds: ['c_major_open', 'g_major_open', 'a_minor_open', 'f_major_barre', 'c_major_open', 'e_minor_open', 'f_major_barre', 'c_major_open'],
            tags: ['extended', 'mellow', 'acoustic']
        },
        {
            id: 'chill-ext-4',
            name: 'Night Drive',
            description: '8-bar smooth cruising',
            key: 'G',
            chordIds: ['gmaj7_open', 'am7_open', 'cmaj7_open', 'd7_open', 'gmaj7_open', 'em7_open', 'am7_open', 'gmaj7_open'],
            tags: ['extended', 'smooth', 'night']
        },
        // New progressions for key coverage
        {
            id: 'chill-f-1',
            name: 'Lazy Sunday',
            description: 'F major chill progression - effortlessly relaxed',
            key: 'F',
            chordIds: ['fmaj7_open', 'am7_open', 'bb_major_barre', 'c_major_open'],
            tags: ['relaxed', 'peaceful', 'acoustic']
        },
        {
            id: 'chill-bb-1',
            name: 'Coastal Breeze',
            description: 'Bb major laid-back groove',
            key: 'Bb',
            chordIds: ['bbmaj7_barre', 'dm7_open', 'eb_major_barre', 'f_major_barre'],
            tags: ['beach', 'relaxed', 'smooth']
        },
        {
            id: 'chill-eb-1',
            name: 'Mountain View',
            description: 'Eb major relaxation - wide open sound',
            key: 'Eb',
            chordIds: ['ebmaj7_barre', 'gm7_barre', 'ab_major_barre', 'bb_major_barre'],
            tags: ['peaceful', 'expansive', 'chill']
        },
        {
            id: 'chill-a-1',
            name: 'Evening Stroll',
            description: 'A major chill - easy and flowing',
            key: 'A',
            chordIds: ['amaj7_open', 'csharpm7_barre', 'd_major_open', 'e_major_open'],
            tags: ['relaxed', 'gentle', 'acoustic']
        },
        {
            id: 'chill-e-1',
            name: 'Garden Peace',
            description: 'E major tranquility - calm and centered',
            key: 'E',
            chordIds: ['emaj7_barre', 'abm7_barre', 'a_major_open', 'b_major_open'],
            tags: ['peaceful', 'nature', 'serene']
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
