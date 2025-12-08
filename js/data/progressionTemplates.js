/**
 * Guitar Chord Explorer - Expanded Progression Templates
 * Contains mood-mapped progression templates for the Inspire Me feature
 * Each mood has 15-25 templates for variety
 */

const ProgressionTemplates = {
    // ==========================================
    // HAPPY / UPLIFTING PROGRESSIONS
    // ==========================================
    happy: [
        // Classic Pop
        { id: 'happy-1', name: 'Classic Pop', degrees: [1, 5, 6, 4], minorDegrees: [6], description: 'The "Axis of Awesome" progression' },
        { id: 'happy-2', name: '50s Doo-Wop', degrees: [1, 6, 4, 5], minorDegrees: [6], description: 'Classic 50s sound' },
        { id: 'happy-3', name: 'Country Joy', degrees: [1, 4, 1, 5], description: 'Simple country happiness' },
        { id: 'happy-4', name: 'Folk Strum', degrees: [1, 5, 4, 1], description: 'Campfire friendly' },
        { id: 'happy-5', name: 'Triumphant', degrees: [1, 4, 5, 5], description: 'Building energy' },
        // Modern Pop
        { id: 'happy-6', name: 'Modern Bright', degrees: [1, 3, 4, 1], minorDegrees: [3], description: 'Contemporary pop sound' },
        { id: 'happy-7', name: 'Upbeat Drive', degrees: [1, 4, 6, 5], minorDegrees: [6], description: 'Driving rhythm' },
        { id: 'happy-8', name: 'Sunny Day', degrees: [1, 5, 4, 4], description: 'Warm and inviting' },
        { id: 'happy-9', name: 'Feel Good', degrees: [4, 1, 5, 6], minorDegrees: [6], description: 'Instant mood lift' },
        { id: 'happy-10', name: 'Celebration', degrees: [1, 1, 4, 5], description: 'Party vibes' },
        // Extended
        { id: 'happy-11', name: 'Journey', degrees: [1, 5, 6, 4, 1, 5, 4, 4], minorDegrees: [6], description: '8-bar storytelling' },
        { id: 'happy-12', name: 'Anthem Build', degrees: [6, 4, 1, 5], minorDegrees: [6], description: 'Epic chorus progression' },
        { id: 'happy-13', name: 'Sweet Resolution', degrees: [4, 5, 1, 1], description: 'Satisfying ending' },
        { id: 'happy-14', name: 'Hopeful', degrees: [6, 4, 5, 1], minorDegrees: [6], description: 'Light at the end' },
        { id: 'happy-15', name: 'Playful', degrees: [1, 2, 4, 5], minorDegrees: [2], description: 'Bouncy feel' },
        { id: 'happy-16', name: 'Summer Hit', degrees: [1, 5, 2, 4], minorDegrees: [2], description: 'Radio friendly' },
        { id: 'happy-17', name: 'Grateful', degrees: [1, 4, 1, 5, 4, 1], description: 'Thankful energy' },
        { id: 'happy-18', name: 'Carefree', degrees: [1, 4, 5, 4], description: 'Easy going' },
        // 8-bar extended templates for Medium length
        { id: 'happy-19', name: 'Epic Adventure', degrees: [1, 5, 6, 4, 1, 5, 4, 1], minorDegrees: [6], description: '8-bar epic journey' },
        { id: 'happy-20', name: 'Festival Night', degrees: [1, 4, 5, 1, 6, 4, 5, 1], minorDegrees: [6], description: '8-bar celebration' },
        { id: 'happy-21', name: 'Road Trip', degrees: [1, 5, 4, 5, 1, 4, 5, 1], description: '8-bar driving anthem' }
    ],

    // ==========================================
    // SAD / MELANCHOLIC PROGRESSIONS
    // ==========================================
    sad: [
        // Classic Sad
        { id: 'sad-1', name: 'Heartbreak', degrees: [6, 4, 1, 5], minorDegrees: [6], description: 'The classic sad progression' },
        { id: 'sad-2', name: 'Rainy Day', degrees: [1, 5, 6, 4], minorDegrees: [6], description: 'Melancholic pop' },
        { id: 'sad-3', name: 'Lost Love', degrees: [6, 5, 4, 5], minorDegrees: [6], description: 'Wistful longing' },
        { id: 'sad-4', name: 'Memories', degrees: [1, 6, 4, 5], minorDegrees: [6], description: 'Nostalgic reflection' },
        // Minor Key
        { id: 'sad-5', name: 'Minor Descent', degrees: [1, 7, 6, 7], flatDegrees: [7, 6], rootMinor: true, description: 'Aeolian sadness' },
        { id: 'sad-6', name: 'Lament', degrees: [1, 4, 1, 5], rootMinor: true, minorDegrees: [1, 4], description: 'Deep sorrow' },
        { id: 'sad-7', name: 'Tears', degrees: [1, 6, 3, 7], flatDegrees: [7, 6, 3], rootMinor: true, description: 'Natural minor' },
        { id: 'sad-8', name: 'Goodbye', degrees: [1, 5, 6, 3], minorDegrees: [6, 3], description: 'Bittersweet farewell' },
        // Emotional
        { id: 'sad-9', name: 'Regret', degrees: [4, 1, 5, 6], minorDegrees: [6], description: 'Looking back' },
        { id: 'sad-10', name: 'Empty Room', degrees: [1, 3, 4, 1], minorDegrees: [3], description: 'Hollow feeling' },
        { id: 'sad-11', name: 'Fading Away', degrees: [1, 1, 6, 6, 4, 4], minorDegrees: [6], description: 'Descending emotion' },
        { id: 'sad-12', name: 'Winter', degrees: [6, 4, 6, 5], minorDegrees: [6], description: 'Cold and grey' },
        { id: 'sad-13', name: 'Solitude', degrees: [1, 4, 6, 5], minorDegrees: [6], description: 'Alone with thoughts' },
        { id: 'sad-14', name: 'Broken', degrees: [6, 5, 4, 1], minorDegrees: [6], description: 'Shattered' },
        { id: 'sad-15', name: 'Missing You', degrees: [1, 6, 2, 5], minorDegrees: [6, 2], description: 'Yearning' },
        // 8-bar extended templates for Medium length
        { id: 'sad-16', name: 'Long Road Home', degrees: [6, 4, 1, 5, 6, 4, 5, 1], minorDegrees: [6], description: '8-bar emotional journey' },
        { id: 'sad-17', name: 'Fading Light', degrees: [1, 6, 4, 5, 1, 6, 4, 1], minorDegrees: [6], description: '8-bar melancholic cycle' },
        { id: 'sad-18', name: 'Tears Fall', degrees: [6, 5, 4, 5, 6, 4, 1, 5], minorDegrees: [6], description: '8-bar heartbreak' }
    ],

    // ==========================================
    // DREAMY / ATMOSPHERIC PROGRESSIONS
    // ==========================================
    dreamy: [
        // Ambient
        { id: 'dreamy-1', name: 'Floating', degrees: [1, 3, 4, 1], minorDegrees: [3], description: 'Weightless feeling' },
        { id: 'dreamy-2', name: 'Clouds', degrees: [1, 4, 6, 4], minorDegrees: [6], description: 'Soft and pillowy' },
        { id: 'dreamy-3', name: 'Starlight', degrees: [1, 5, 4, 6], minorDegrees: [6], description: 'Night sky wonder' },
        { id: 'dreamy-4', name: 'Mist', degrees: [1, 2, 4, 1], minorDegrees: [2], description: 'Hazy atmosphere' },
        // Suspended
        { id: 'dreamy-5', name: 'Suspension', degrees: [1, 1, 1, 1], qualityOverrides: {0: 'major', 1: 'sus4', 2: 'major', 3: 'sus2'}, description: 'Sus chord movement' },
        { id: 'dreamy-6', name: 'Ethereal', degrees: [1, 5, 1, 4], description: 'Otherworldly' },
        { id: 'dreamy-7', name: 'Shimmer', degrees: [4, 1, 4, 5], description: 'Glistening sound' },
        { id: 'dreamy-8', name: 'Aurora', degrees: [1, 6, 4, 5], minorDegrees: [6], description: 'Northern lights' },
        // Lo-fi
        { id: 'dreamy-9', name: 'Lo-fi Beat', degrees: [2, 5, 1, 1], minorDegrees: [2], description: 'Study session vibes' },
        { id: 'dreamy-10', name: 'Bedroom', degrees: [1, 6, 2, 5], minorDegrees: [6, 2], description: 'Intimate space' },
        { id: 'dreamy-11', name: 'Wistful', degrees: [1, 3, 4, 4], minorDegrees: [3], qualityOverrides: {3: 'minor'}, description: 'Bittersweet nostalgia' },
        { id: 'dreamy-12', name: 'Haze', degrees: [4, 3, 6, 1], minorDegrees: [3, 6], description: 'Foggy morning' },
        { id: 'dreamy-13', name: 'Dream Logic', degrees: [1, 7, 4, 1], flatDegrees: [7], description: 'Surreal feeling' },
        { id: 'dreamy-14', name: 'Twilight', degrees: [1, 4, 6, 5], minorDegrees: [6], description: 'Magic hour' },
        { id: 'dreamy-15', name: 'Ocean', degrees: [1, 4, 1, 5], description: 'Wave-like motion' },
        // 8-bar extended templates for Medium length
        { id: 'dreamy-16', name: 'Starfall', degrees: [1, 3, 4, 1, 6, 4, 5, 1], minorDegrees: [3, 6], description: '8-bar celestial drift' },
        { id: 'dreamy-17', name: 'Endless Sky', degrees: [1, 4, 6, 4, 1, 5, 4, 1], minorDegrees: [6], description: '8-bar expansive atmosphere' },
        { id: 'dreamy-18', name: 'Moonbeam', degrees: [1, 6, 4, 5, 1, 3, 4, 1], minorDegrees: [6, 3], description: '8-bar ethereal glow' }
    ],

    // ==========================================
    // DARK / MYSTERIOUS PROGRESSIONS
    // ==========================================
    dark: [
        // Minor Modal
        { id: 'dark-1', name: 'Shadows', degrees: [1, 7, 6, 7], flatDegrees: [7, 6], rootMinor: true, description: 'Lurking darkness' },
        { id: 'dark-2', name: 'Phrygian Gate', degrees: [1, 2, 1, 7], flatDegrees: [2, 7], rootMinor: true, description: 'Spanish darkness' },
        { id: 'dark-3', name: 'Descent', degrees: [1, 7, 6, 5], flatDegrees: [7, 6], rootMinor: true, description: 'Going deeper' },
        { id: 'dark-4', name: 'Dungeon', degrees: [1, 4, 7, 6], flatDegrees: [7, 6], rootMinor: true, minorDegrees: [1, 4], description: 'Medieval darkness' },
        // Tension
        { id: 'dark-5', name: 'Suspense', degrees: [1, 1, 6, 6], minorDegrees: [6], description: 'Building tension' },
        { id: 'dark-6', name: 'Noir', degrees: [1, 4, 1, 5], rootMinor: true, minorDegrees: [1, 4], description: 'Film noir mood' },
        { id: 'dark-7', name: 'Haunted', degrees: [6, 7, 1, 1], flatDegrees: [7], minorDegrees: [6], description: 'Ghostly presence' },
        { id: 'dark-8', name: 'Venom', degrees: [1, 5, 6, 4], minorDegrees: [6], rootMinor: true, description: 'Poisonous' },
        // Epic Dark
        { id: 'dark-9', name: 'Villain', degrees: [1, 6, 7, 1], flatDegrees: [6, 7], rootMinor: true, description: 'Bad guy theme' },
        { id: 'dark-10', name: 'Storm', degrees: [1, 4, 1, 7], flatDegrees: [7], rootMinor: true, minorDegrees: [1, 4], description: 'Approaching thunder' },
        { id: 'dark-11', name: 'Abyss', degrees: [1, 7, 1, 6], flatDegrees: [7, 6], rootMinor: true, description: 'Endless depth' },
        { id: 'dark-12', name: 'Ritual', degrees: [1, 2, 7, 1], flatDegrees: [2, 7], rootMinor: true, description: 'Ancient ceremony' },
        { id: 'dark-13', name: 'Midnight', degrees: [6, 4, 1, 5], minorDegrees: [6], description: 'Darkest hour' },
        { id: 'dark-14', name: 'Eclipse', degrees: [1, 4, 6, 7], flatDegrees: [7], minorDegrees: [6], rootMinor: true, description: 'Light fading' },
        { id: 'dark-15', name: 'Cryptic', degrees: [1, 5, 7, 4], flatDegrees: [7], rootMinor: true, minorDegrees: [4], description: 'Hidden meaning' },
        // 8-bar extended templates for Medium length
        { id: 'dark-16', name: 'Descent', degrees: [1, 7, 6, 7, 1, 4, 7, 1], flatDegrees: [7, 6], rootMinor: true, description: '8-bar dark journey' },
        { id: 'dark-17', name: 'Nightmare', degrees: [1, 4, 1, 5, 6, 4, 5, 1], minorDegrees: [6], rootMinor: true, description: '8-bar tension cycle' },
        { id: 'dark-18', name: 'Ritual Night', degrees: [1, 7, 4, 1, 6, 7, 4, 1], flatDegrees: [7], minorDegrees: [6], rootMinor: true, description: '8-bar mysterious ceremony' }
    ],

    // ==========================================
    // ENERGETIC / ROCK PROGRESSIONS
    // ==========================================
    energetic: [
        // Classic Rock
        { id: 'energetic-1', name: 'Power Drive', degrees: [1, 7, 4, 1], flatDegrees: [7], description: 'Classic rock power' },
        { id: 'energetic-2', name: 'Stadium', degrees: [1, 5, 7, 4], flatDegrees: [7], description: 'Arena rock anthem' },
        { id: 'energetic-3', name: 'Highway', degrees: [1, 4, 5, 5], description: 'Open road energy' },
        { id: 'energetic-4', name: 'Riff Rock', degrees: [1, 7, 1, 4], flatDegrees: [7], description: 'Guitar hero' },
        // Punk/Alternative
        { id: 'energetic-5', name: 'Punk Spirit', degrees: [1, 4, 5, 1], description: 'Three chord wonder' },
        { id: 'energetic-6', name: 'Garage', degrees: [1, 1, 4, 5], description: 'Raw energy' },
        { id: 'energetic-7', name: 'Mosh Pit', degrees: [1, 5, 4, 5], description: 'Crowd surfer' },
        { id: 'energetic-8', name: 'Breakthrough', degrees: [6, 4, 1, 5], minorDegrees: [6], description: 'Breaking through' },
        // High Energy
        { id: 'energetic-9', name: 'Adrenaline', degrees: [1, 5, 6, 4], minorDegrees: [6], description: 'Heart pumping' },
        { id: 'energetic-10', name: 'Victory', degrees: [1, 4, 5, 1], description: 'Winning moment' },
        { id: 'energetic-11', name: 'Charge', degrees: [1, 1, 1, 5], description: 'Building momentum' },
        { id: 'energetic-12', name: 'Thunder', degrees: [1, 7, 6, 7], flatDegrees: [7, 6], description: 'Powerful storm' },
        { id: 'energetic-13', name: 'Fire', degrees: [1, 4, 7, 4], flatDegrees: [7], description: 'Burning intensity' },
        { id: 'energetic-14', name: 'Sprint', degrees: [1, 5, 4, 5, 1], description: 'Fast and furious' },
        { id: 'energetic-15', name: 'Electric', degrees: [1, 3, 4, 5], minorDegrees: [3], description: 'Shocking energy' },
        { id: 'energetic-16', name: 'Rebel', degrees: [1, 7, 4, 7], flatDegrees: [7], description: 'Against the grain' },
        // 8-bar extended templates for Medium length
        { id: 'energetic-17', name: 'Arena Anthem', degrees: [1, 5, 6, 4, 1, 5, 4, 1], minorDegrees: [6], description: '8-bar stadium rocker' },
        { id: 'energetic-18', name: 'Overdrive', degrees: [1, 4, 5, 1, 7, 4, 5, 1], flatDegrees: [7], description: '8-bar power surge' },
        { id: 'energetic-19', name: 'Full Throttle', degrees: [1, 5, 4, 5, 1, 4, 5, 1], description: '8-bar high octane' }
    ],

    // ==========================================
    // JAZZY / SOPHISTICATED PROGRESSIONS
    // ==========================================
    jazzy: [
        // Classic Jazz
        { id: 'jazzy-1', name: 'ii-V-I', degrees: [2, 5, 1], minorDegrees: [2], description: 'The jazz foundation' },
        { id: 'jazzy-2', name: 'Rhythm Changes', degrees: [1, 6, 2, 5], minorDegrees: [6, 2], description: 'Bebop standard' },
        { id: 'jazzy-3', name: 'Turnaround', degrees: [3, 6, 2, 5], minorDegrees: [3, 6, 2], description: 'Jazz ending' },
        { id: 'jazzy-4', name: 'Bird Blues', degrees: [1, 4, 1, 5, 2, 5, 1], minorDegrees: [2], description: 'Charlie Parker style' },
        // Modal Jazz
        { id: 'jazzy-5', name: 'So What', degrees: [2, 2, 2, 2], minorDegrees: [2], description: 'Miles Davis modal' },
        { id: 'jazzy-6', name: 'Impressions', degrees: [2, 5, 1, 6], minorDegrees: [2, 6], description: 'Coltrane changes' },
        // Smooth Jazz
        { id: 'jazzy-7', name: 'Smooth', degrees: [1, 4, 3, 6], minorDegrees: [3, 6], description: 'Elevator jazz' },
        { id: 'jazzy-8', name: 'Velvet', degrees: [1, 6, 2, 5, 1], minorDegrees: [6, 2], description: 'Silky smooth' },
        { id: 'jazzy-9', name: 'Late Night', degrees: [1, 7, 3, 6, 2, 5], flatDegrees: [7], minorDegrees: [3, 6, 2], description: 'After hours' },
        // Extended
        { id: 'jazzy-10', name: 'Sophisticated', degrees: [1, 1, 2, 5], minorDegrees: [2], description: 'Elegant movement' },
        { id: 'jazzy-11', name: 'Blue Moon', degrees: [1, 6, 2, 5], minorDegrees: [6, 2], description: 'Jazz ballad' },
        { id: 'jazzy-12', name: 'Bebop Line', degrees: [1, 2, 3, 4, 5], minorDegrees: [2, 3], description: 'Walking up' },
        { id: 'jazzy-13', name: 'Cool', degrees: [1, 4, 1, 5], description: 'West coast jazz' },
        { id: 'jazzy-14', name: 'Chromatic', degrees: [1, 7, 6, 5], flatDegrees: [7, 6], description: 'Sliding tones' },
        { id: 'jazzy-15', name: 'Standards', degrees: [1, 4, 2, 5, 1], minorDegrees: [2], description: 'Timeless elegance' },
        // 8-bar extended templates for Medium length
        { id: 'jazzy-16', name: 'Jazz Club', degrees: [1, 6, 2, 5, 1, 4, 2, 5], minorDegrees: [6, 2], description: '8-bar sophisticated swing' },
        { id: 'jazzy-17', name: 'Blue Hour', degrees: [2, 5, 1, 6, 2, 5, 1, 1], minorDegrees: [2, 6], description: '8-bar jazz ballad' },
        { id: 'jazzy-18', name: 'Bebop Night', degrees: [1, 6, 2, 5, 3, 6, 2, 5], minorDegrees: [6, 2, 3], description: '8-bar bebop changes' }
    ],

    // ==========================================
    // CHILL / RELAXED PROGRESSIONS
    // ==========================================
    chill: [
        // Laid Back
        { id: 'chill-1', name: 'Sunday Morning', degrees: [1, 5, 4, 1], description: 'Lazy start' },
        { id: 'chill-2', name: 'Hammock', degrees: [1, 4, 1, 5], description: 'Swaying gently' },
        { id: 'chill-3', name: 'Breeze', degrees: [1, 3, 4, 1], minorDegrees: [3], description: 'Cool wind' },
        { id: 'chill-4', name: 'Sunset', degrees: [1, 6, 4, 5], minorDegrees: [6], description: 'Day ending' },
        // Neo-Soul
        { id: 'chill-5', name: 'Neo-Soul', degrees: [2, 5, 1, 4], minorDegrees: [2], description: 'Modern soul' },
        { id: 'chill-6', name: 'Coffee Shop', degrees: [1, 4, 6, 5], minorDegrees: [6], description: 'Cafe vibes' },
        { id: 'chill-7', name: 'Groove', degrees: [1, 4, 1, 4], description: 'Pocket feel' },
        { id: 'chill-8', name: 'Easy', degrees: [1, 6, 4, 5], minorDegrees: [6], description: 'No stress' },
        // Ambient Chill
        { id: 'chill-9', name: 'Zen', degrees: [1, 4, 1, 1], description: 'Peaceful mind' },
        { id: 'chill-10', name: 'Flow', degrees: [1, 5, 6, 4], minorDegrees: [6], description: 'Going with it' },
        { id: 'chill-11', name: 'Waves', degrees: [1, 4, 5, 4], description: 'Ocean rhythm' },
        { id: 'chill-12', name: 'Garden', degrees: [1, 3, 4, 5], minorDegrees: [3], description: 'Nature sounds' },
        { id: 'chill-13', name: 'Meditate', degrees: [1, 4, 1, 4, 5, 1], description: 'Inner peace' },
        { id: 'chill-14', name: 'Unwind', degrees: [4, 1, 4, 5], description: 'Letting go' },
        { id: 'chill-15', name: 'Mellow', degrees: [1, 6, 2, 5], minorDegrees: [6, 2], description: 'Smooth and soft' },
        // 8-bar extended templates for Medium length
        { id: 'chill-16', name: 'Lazy River', degrees: [1, 4, 6, 5, 1, 4, 5, 1], minorDegrees: [6], description: '8-bar flowing relaxation' },
        { id: 'chill-17', name: 'Sunset Beach', degrees: [1, 5, 6, 4, 1, 5, 4, 1], minorDegrees: [6], description: '8-bar coastal vibes' },
        { id: 'chill-18', name: 'Slow Dance', degrees: [1, 6, 4, 5, 1, 6, 4, 1], minorDegrees: [6], description: '8-bar gentle sway' }
    ]
};

/**
 * Get a random template for a given mood
 * @param {string} mood - The mood category
 * @returns {Object} A random template object
 */
function getRandomTemplate(mood) {
    const templates = ProgressionTemplates[mood];
    if (!templates || templates.length === 0) {
        return ProgressionTemplates.happy[0]; // Fallback
    }
    return templates[Math.floor(Math.random() * templates.length)];
}

/**
 * Get all templates for a mood
 * @param {string} mood - The mood category
 * @returns {Array} Array of template objects
 */
function getTemplatesForMood(mood) {
    return ProgressionTemplates[mood] || ProgressionTemplates.happy;
}

/**
 * Get template by ID
 * @param {string} id - Template ID
 * @returns {Object|null} Template object or null if not found
 */
function getTemplateById(id) {
    for (const mood in ProgressionTemplates) {
        const template = ProgressionTemplates[mood].find(t => t.id === id);
        if (template) return template;
    }
    return null;
}
