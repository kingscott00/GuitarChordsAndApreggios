/**
 * Guitar Chord Explorer - Main Application Controller
 * Manages state, UI interactions, and rendering
 */

const App = {
    // Application state
    state: {
        selectionMode: 'mood',
        currentMood: null,
        currentStyle: null,
        currentKey: 'C',
        currentMode: 'ionian',
        currentRootNote: null,
        voicingFilter: 'all',
        capoFret: 0, // Capo position (0 = no capo, 1-7 = fret position)
        guitarTone: 'acoustic', // Guitar tone preset
        strumStyle: 'single-down', // Strum style preset
        distortion: 0, // Distortion amount (0-100)
        arpeggioSpeed: 120, // Arpeggio tempo in BPM
        chordTypeFilter: 'all',
        voicingPatternFilter: 'all',
        fretRangeFilter: 'all',
        rootNoteFilter: 'all',
        // New filter tab system
        filterTab: 'basic', // 'basic' or 'advanced'
        basicChordTypeFilter: 'all', // Simplified chord type for basic tab
        voicingStyleFilter: 'all', // shell, drop-2, drop-3, quartal, rootless, etc.
        jazzLevelFilter: 'all', // basic, tier-1, tier-2, tier-3
        soundCharacterFilter: 'all', // bright, warm, tense, dreamy, dark, funky
        noteCountFilter: 'all', // all, 3-note, 4-note, 5-plus
        selectedChords: [],
        displayedChords: [],
        hasSearched: false,
        arpeggiosExpanded: false,
        allInfoExpanded: false, // Track global expand/collapse state for More Info sections
        // Progression builder state
        progression: [],
        progressionTemplate: null, // Currently loaded template
        progressionDegrees: [], // Roman numeral degrees for each slot
        progressionPlaying: false,
        progressionPlaybackIndex: 0,
        progressionPlaybackTimer: null,
        beatsPerChord: 4,
        progressionTempo: 100,
        savedProgressions: [],
        // Practice tools state
        metronome: {
            playing: false,
            tempo: 80,
            timeSignature: 4,
            currentBeat: 0,
            accentFirstBeat: true,
            intervalId: null
        },
        drill: {
            active: false,
            interval: 4,
            difficulty: 'beginner',
            withSound: true,
            currentChord: null,
            nextChord: null,
            totalChords: 0,
            startTime: null,
            intervalId: null,
            countdownId: null
        },
        practice: {
            active: false,
            progressionId: null,
            loop: true,
            currentIndex: 0,
            currentBeat: 0,
            intervalId: null
        },
        session: {
            startTime: null,
            chordsPracticed: 0,
            timerInterval: null
        },
        tapTempo: {
            taps: [],
            lastTap: 0
        },
        // Settings state
        settings: {
            showTab: true,
            showFingerInfo: true,
            showArpeggioTab: true,
            showArpeggioTips: true,
            showAllArpeggioNotes: false,
            darkTheme: false,
            leftHanded: false,
            newspaperMode: false,
            compactMode: false,
            diagramDisplayMode: 'fingers' // 'fingers' or 'intervals'
        },
        // Favorites state
        favorites: [],
        // Arpeggio sequence state
        arpeggioSequence: [],
        // Scale Builder state
        scaleBuilder: {
            mode: 'single', // 'single' or 'per-chord'
            showChordTones: false,
            currentScale: null,
            alternativeScales: [],
            perChordModes: [],
            detectedKey: null
        }
    },

    /**
     * Initialize the application
     */
    init() {
        this.loadSettings();
        this.loadCapoSetting();
        this.loadGuitarToneSetting();
        this.loadStrumStyleSetting();
        this.loadDistortionSetting();
        this.loadArpeggioSpeedSetting();
        this.loadFilterSettings();
        this.bindEventListeners();
        this.initVolumeControl();
        this.initSettingsPanel();
        this.initCollapsibleSections();
        this.initArpeggioSequenceBuilder();
        this.initProgressionBuilder();
        this.initScaleBuilder();
        this.initPracticeTools();
        this.loadSavedProgressions();
        this.loadFavorites();
        // Show all chords on initial load
        this.displayAllChords();
    },

    /**
     * Initialize volume control
     */
    initVolumeControl() {
        const volumeBtn = document.getElementById('volume-btn');
        const volumeSlider = document.getElementById('volume-slider');
        const volumeSliderContainer = document.getElementById('volume-slider-container');
        const volumeValue = document.getElementById('volume-value');

        if (!volumeBtn || !volumeSlider) return;

        // Toggle volume slider visibility
        volumeBtn.addEventListener('click', () => {
            volumeSliderContainer.classList.toggle('hidden');
        });

        // Close volume slider when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.volume-control')) {
                volumeSliderContainer.classList.add('hidden');
            }
        });

        // Volume slider change
        volumeSlider.addEventListener('input', (e) => {
            const volume = parseInt(e.target.value) / 100;
            AudioEngine.setVolume(volume);
            volumeValue.textContent = `${e.target.value}%`;

            // Update muted state visual
            volumeBtn.classList.toggle('muted', volume === 0);
        });
    },

    /**
     * Bind all event listeners
     */
    bindEventListeners() {
        // Navigation mode buttons (now inside selection panel)
        document.querySelectorAll('.selection-tab').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleModeChange(e));
        });

        // Mood dropdown
        document.getElementById('mood-dropdown')?.addEventListener('change', (e) => {
            this.state.currentMood = e.target.value || null;
        });

        // Style dropdown
        document.getElementById('style-dropdown')?.addEventListener('change', (e) => {
            this.state.currentStyle = e.target.value || null;
        });

        // Theory selectors
        document.getElementById('key-select')?.addEventListener('change', (e) => {
            this.state.currentKey = e.target.value;
        });

        document.getElementById('mode-select')?.addEventListener('change', (e) => {
            this.state.currentMode = e.target.value;
        });

        // Voicing filter buttons (legacy)
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleVoicingFilter(e));
        });

        // ==========================================
        // Filter Tab System Event Listeners
        // ==========================================

        // Filter tab switching
        document.querySelectorAll('.filter-tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleFilterTabChange(e));
        });

        // Basic Filters Tab
        document.getElementById('basic-chord-type-filter')?.addEventListener('change', (e) => {
            this.handleBasicChordTypeFilter(e);
        });

        document.getElementById('basic-fret-range-filter')?.addEventListener('change', (e) => {
            this.handleFretRangeFilter(e, 'basic');
        });

        // Difficulty filter buttons (Basic tab)
        document.querySelectorAll('.difficulty-filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleDifficultyFilter(e));
        });

        // Advanced Filters Tab
        document.getElementById('chord-type-filter')?.addEventListener('change', (e) => {
            this.handleChordTypeFilter(e);
        });

        document.getElementById('voicing-style-filter')?.addEventListener('change', (e) => {
            this.handleVoicingStyleFilter(e);
        });

        document.getElementById('jazz-level-filter')?.addEventListener('change', (e) => {
            this.handleJazzLevelFilter(e);
        });

        document.getElementById('sound-character-filter')?.addEventListener('change', (e) => {
            this.handleSoundCharacterFilter(e);
        });

        document.getElementById('fret-range-filter')?.addEventListener('change', (e) => {
            this.handleFretRangeFilter(e, 'advanced');
        });

        document.getElementById('note-count-filter')?.addEventListener('change', (e) => {
            this.handleNoteCountFilter(e);
        });

        // Clear filters buttons (both tabs)
        document.getElementById('clear-advanced-filters-btn')?.addEventListener('click', () => {
            this.clearAllFilters();
        });

        // Root note selector (new tab)
        document.getElementById('root-note-select')?.addEventListener('change', (e) => {
            this.state.currentRootNote = e.target.value || null;
        });

        // Capo selector
        document.getElementById('capo-select')?.addEventListener('change', (e) => {
            this.handleCapoChange(parseInt(e.target.value, 10) || 0);
        });

        // Guitar Tone selector
        document.getElementById('guitar-tone-select')?.addEventListener('change', (e) => {
            this.handleGuitarToneChange(e.target.value || 'acoustic');
        });

        // Strum Style selector
        document.getElementById('strum-style-select')?.addEventListener('change', (e) => {
            this.handleStrumStyleChange(e.target.value || 'single-down');
        });

        // Distortion slider
        document.getElementById('distortion-slider')?.addEventListener('input', (e) => {
            this.handleDistortionChange(parseInt(e.target.value, 10) || 0);
        });

        // Arpeggio Speed selector
        document.getElementById('arpeggio-speed-select')?.addEventListener('change', (e) => {
            this.handleArpeggioSpeedChange(parseInt(e.target.value, 10) || 120);
        });

        // Chords toggle
        document.getElementById('chords-toggle')?.addEventListener('click', () => {
            this.toggleChords();
        });

        // Clear all filters button
        document.getElementById('clear-filters-btn')?.addEventListener('click', () => {
            this.clearAllFilters();
        });

        // Show Chords button
        document.getElementById('show-chords-btn')?.addEventListener('click', () => {
            this.showChords();
        });

        // Arpeggio toggle
        document.getElementById('arpeggio-toggle')?.addEventListener('click', () => {
            this.toggleArpeggios();
        });

        // About modal
        document.getElementById('about-btn')?.addEventListener('click', () => {
            this.showAboutModal();
        });
        document.getElementById('about-close')?.addEventListener('click', () => {
            this.closeAboutModal();
        });
        // Close modal when clicking outside
        document.getElementById('about-modal')?.addEventListener('click', (e) => {
            if (e.target.id === 'about-modal') {
                this.closeAboutModal();
            }
        });
    },

    /**
     * Handle navigation mode change
     */
    handleModeChange(e) {
        const mode = e.target.dataset.mode;
        this.state.selectionMode = mode;

        // Update active tab
        document.querySelectorAll('.selection-tab').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === mode);
        });

        // Show/hide appropriate selector
        document.getElementById('mood-selector').classList.toggle('hidden', mode !== 'mood');
        document.getElementById('style-selector').classList.toggle('hidden', mode !== 'style');
        document.getElementById('theory-selector').classList.toggle('hidden', mode !== 'theory');
        document.getElementById('root-note-selector')?.classList.toggle('hidden', mode !== 'root-note');

        // Clear previous selections and hide info banner
        this.clearSelections();
        this.hideSelectionInfo();

        // Reset global info expanded state
        this.resetAllInfoState();
    },


    /**
     * Handle voicing filter change
     */
    handleVoicingFilter(e) {
        const voicing = e.target.dataset.voicing;
        this.state.voicingFilter = voicing;

        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.voicing === voicing);
        });

        // Re-filter displayed chords if we have already searched
        if (this.state.hasSearched) {
            this.applyFiltersAndDisplay();
        }
    },

    /**
     * Handle chord type filter change
     */
    handleChordTypeFilter(e) {
        this.state.chordTypeFilter = e.target.value;

        // Re-filter displayed chords if we have already searched
        if (this.state.hasSearched) {
            this.applyFiltersAndDisplay();
        }
    },

    /**
     * Handle voicing pattern filter change
     */
    handleVoicingPatternFilter(e) {
        this.state.voicingPatternFilter = e.target.value;

        // Re-filter displayed chords if we have already searched
        if (this.state.hasSearched) {
            this.applyFiltersAndDisplay();
        }
    },

    /**
     * Handle fret range filter change
     */
    handleFretRangeFilter(e, source = 'advanced') {
        this.state.fretRangeFilter = e.target.value;

        // Sync both fret range selects
        const basicFret = document.getElementById('basic-fret-range-filter');
        const advancedFret = document.getElementById('fret-range-filter');
        if (source === 'basic' && advancedFret) {
            advancedFret.value = e.target.value;
        } else if (source === 'advanced' && basicFret) {
            basicFret.value = e.target.value;
        }

        this.updateFilterHighlights();
        this.updateAdvancedFiltersIndicator();
        this.saveFilterSettings();

        // Re-filter displayed chords if we have already searched
        if (this.state.hasSearched) {
            this.applyFiltersAndDisplay();
        }
    },

    // ==========================================
    // Filter Tab System Handlers
    // ==========================================

    /**
     * Handle filter tab change
     */
    handleFilterTabChange(e) {
        const tab = e.target.dataset.filterTab || e.target.closest('[data-filter-tab]')?.dataset.filterTab;
        if (!tab) return;

        this.state.filterTab = tab;

        // Update tab buttons
        document.querySelectorAll('.filter-tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filterTab === tab);
        });

        // Update tab content
        document.querySelectorAll('.filter-tab-content').forEach(content => {
            content.classList.toggle('active', content.id === `${tab}-filters-content`);
        });

        this.saveFilterSettings();
    },

    /**
     * Handle basic chord type filter change
     */
    handleBasicChordTypeFilter(e) {
        this.state.basicChordTypeFilter = e.target.value;
        this.updateFilterHighlights();
        this.updateAdvancedFiltersIndicator();
        this.saveFilterSettings();

        if (this.state.hasSearched) {
            this.applyFiltersAndDisplay();
        }
    },

    /**
     * Handle difficulty filter button click (Basic tab)
     */
    handleDifficultyFilter(e) {
        const difficulty = e.target.dataset.difficulty;
        this.state.voicingFilter = difficulty;

        // Update active button
        document.querySelectorAll('.difficulty-filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.difficulty === difficulty);
        });

        // Also update legacy filter buttons if they exist
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.voicing === difficulty);
        });

        this.updateAdvancedFiltersIndicator();
        this.saveFilterSettings();

        if (this.state.hasSearched) {
            this.applyFiltersAndDisplay();
        }
    },

    /**
     * Handle voicing style filter change (Advanced tab)
     */
    handleVoicingStyleFilter(e) {
        this.state.voicingStyleFilter = e.target.value;
        this.updateFilterHighlights();
        this.updateAdvancedFiltersIndicator();
        this.saveFilterSettings();

        if (this.state.hasSearched) {
            this.applyFiltersAndDisplay();
        }
    },

    /**
     * Handle jazz level filter change (Advanced tab)
     */
    handleJazzLevelFilter(e) {
        this.state.jazzLevelFilter = e.target.value;
        this.updateFilterHighlights();
        this.updateAdvancedFiltersIndicator();
        this.saveFilterSettings();

        if (this.state.hasSearched) {
            this.applyFiltersAndDisplay();
        }
    },

    /**
     * Handle sound character filter change (Advanced tab)
     */
    handleSoundCharacterFilter(e) {
        this.state.soundCharacterFilter = e.target.value;
        this.updateFilterHighlights();
        this.updateAdvancedFiltersIndicator();
        this.saveFilterSettings();

        if (this.state.hasSearched) {
            this.applyFiltersAndDisplay();
        }
    },

    /**
     * Handle note count filter change (Advanced tab)
     */
    handleNoteCountFilter(e) {
        this.state.noteCountFilter = e.target.value;
        this.updateFilterHighlights();
        this.updateAdvancedFiltersIndicator();
        this.saveFilterSettings();

        if (this.state.hasSearched) {
            this.applyFiltersAndDisplay();
        }
    },

    /**
     * Update visual highlights on filter dropdowns
     */
    updateFilterHighlights() {
        // Highlight dropdowns with active filters
        const filterSelects = [
            'basic-chord-type-filter',
            'basic-fret-range-filter',
            'chord-type-filter',
            'voicing-style-filter',
            'jazz-level-filter',
            'sound-character-filter',
            'fret-range-filter',
            'note-count-filter'
        ];

        filterSelects.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.classList.toggle('has-filter', el.value !== 'all');
            }
        });
    },

    /**
     * Update the advanced filters indicator dot
     */
    updateAdvancedFiltersIndicator() {
        const indicator = document.getElementById('advanced-indicator');
        if (!indicator) return;

        // Check if any advanced-only filters are active
        const hasAdvancedFilters =
            this.state.chordTypeFilter !== 'all' ||
            this.state.voicingStyleFilter !== 'all' ||
            this.state.jazzLevelFilter !== 'all' ||
            this.state.soundCharacterFilter !== 'all' ||
            this.state.noteCountFilter !== 'all';

        indicator.classList.toggle('hidden', !hasAdvancedFilters);
    },

    /**
     * Check if any advanced filters are active
     */
    hasAdvancedFiltersActive() {
        return this.state.chordTypeFilter !== 'all' ||
               this.state.voicingStyleFilter !== 'all' ||
               this.state.jazzLevelFilter !== 'all' ||
               this.state.soundCharacterFilter !== 'all' ||
               this.state.noteCountFilter !== 'all';
    },

    /**
     * Handle root note filter change
     */
    handleRootNoteFilter(e) {
        const rootNote = e.target.value;
        this.state.rootNoteFilter = rootNote;

        if (rootNote !== 'all') {
            // Root note filter is active - get all chords with this root
            this.state.selectedChords = this.getChordsByRootNote(rootNote);
            this.state.hasSearched = true;

            // Update visual indicators
            this.showRootNoteIndicator(rootNote, this.state.selectedChords.length);
            this.dimMoodStyleTheoryTabs(true);

            // Update selection info to show we're filtering by root
            this.showRootNoteSelectionInfo(rootNote);
        } else {
            // Root note filter deactivated - return to previous mood/style/theory selection
            this.hideRootNoteIndicator();
            this.dimMoodStyleTheoryTabs(false);

            // Re-run the normal showChords flow without clearing filters
            this.reapplyMoodStyleTheorySelection();
        }

        this.applyFiltersAndDisplay();
    },

    /**
     * Get all chords with a specific root note
     */
    getChordsByRootNote(rootNote) {
        const allChords = getAllChords();
        const normalizedRoot = this.normalizeRootNote(rootNote);

        return allChords.filter(chord => {
            const chordRoot = this.normalizeRootNote(chord.root);
            return chordRoot === normalizedRoot;
        });
    },

    /**
     * Normalize root note to handle enharmonic equivalents
     */
    normalizeRootNote(note) {
        if (!note) return null;

        // Map flat notes to their sharp equivalents
        const enharmonics = {
            'Db': 'C#', 'Eb': 'D#', 'Gb': 'F#', 'Ab': 'G#', 'Bb': 'A#'
        };

        const cleanNote = note.trim();
        return enharmonics[cleanNote] || cleanNote;
    },

    /**
     * Show the root note indicator
     */
    showRootNoteIndicator(rootNote, count) {
        const indicator = document.getElementById('root-note-indicator');
        const badge = document.getElementById('root-note-badge');

        if (indicator && badge) {
            // Get display name with enharmonic
            const displayName = this.getRootNoteDisplayName(rootNote);
            badge.textContent = `Showing all ${displayName} chords`;
            indicator.classList.remove('hidden');
        }
    },

    /**
     * Hide the root note indicator
     */
    hideRootNoteIndicator() {
        const indicator = document.getElementById('root-note-indicator');
        if (indicator) {
            indicator.classList.add('hidden');
        }
    },

    /**
     * Get display name for root note (with enharmonic if applicable)
     */
    getRootNoteDisplayName(rootNote) {
        const enharmonicNames = {
            'C#': 'C# / Db',
            'D#': 'D# / Eb',
            'F#': 'F# / Gb',
            'G#': 'G# / Ab',
            'A#': 'A# / Bb'
        };
        return enharmonicNames[rootNote] || rootNote;
    },

    /**
     * Dim the mood/style/theory tabs when root note filter is active
     */
    dimMoodStyleTheoryTabs(dim) {
        const navButtons = document.querySelectorAll('.nav-btn');
        const selectors = document.querySelectorAll('.mood-selector, .style-selector, .theory-selector');

        navButtons.forEach(btn => {
            btn.classList.toggle('dimmed', dim);
        });

        selectors.forEach(sel => {
            sel.classList.toggle('dimmed', dim);
        });
    },

    /**
     * Show selection info for root note filter
     */
    showRootNoteSelectionInfo(rootNote) {
        const displayName = this.getRootNoteDisplayName(rootNote);
        const selectionInfo = {
            name: `All ${displayName} Chords`,
            description: `Showing all chord variations with ${displayName} as the root note`,
            icon: '🎵'
        };
        this.showSelectionInfo(selectionInfo, this.state.selectedChords.length);
    },

    /**
     * Reapply the mood/style/theory selection without clearing other filters
     */
    reapplyMoodStyleTheorySelection() {
        let chords = [];

        switch (this.state.selectionMode) {
            case 'mood':
                if (this.state.currentMood) {
                    chords = SelectionEngine.getChordsByMood(this.state.currentMood);
                    const moodInfo = SelectionEngine.getSelectionInfo('mood', this.state.currentMood);
                    if (moodInfo) this.showSelectionInfo(moodInfo, chords.length);
                } else {
                    chords = getAllChords();
                    this.hideSelectionInfo();
                }
                break;

            case 'style':
                if (this.state.currentStyle) {
                    chords = SelectionEngine.getChordsByStyle(this.state.currentStyle);
                    const styleInfo = SelectionEngine.getSelectionInfo('style', this.state.currentStyle);
                    if (styleInfo) this.showSelectionInfo(styleInfo, chords.length);
                } else {
                    chords = getAllChords();
                    this.hideSelectionInfo();
                }
                break;

            case 'theory':
                chords = SelectionEngine.getChordsByTheory(this.state.currentKey, this.state.currentMode);
                let theoryInfo = SelectionEngine.getSelectionInfo('theory', this.state.currentMode);
                if (theoryInfo) {
                    theoryInfo.name = `${this.state.currentKey} ${theoryInfo.name}`;
                    theoryInfo.icon = '🎼';
                    this.showSelectionInfo(theoryInfo, chords.length);
                }
                break;
        }

        this.state.selectedChords = chords;
    },

    /**
     * Reset root note filter (called when mood/style/theory changes)
     */
    resetRootNoteFilter() {
        this.state.rootNoteFilter = 'all';
        const dropdown = document.getElementById('root-note-filter');
        if (dropdown) dropdown.value = 'all';
        this.hideRootNoteIndicator();
        this.dimMoodStyleTheoryTabs(false);
    },

    /**
     * Clear all filters (both Basic and Advanced tabs)
     */
    clearAllFilters() {
        // Reset Basic tab filters
        this.state.basicChordTypeFilter = 'all';
        this.state.voicingFilter = 'all';

        // Reset Advanced tab filters
        this.state.chordTypeFilter = 'all';
        this.state.voicingStyleFilter = 'all';
        this.state.jazzLevelFilter = 'all';
        this.state.soundCharacterFilter = 'all';
        this.state.noteCountFilter = 'all';

        // Reset shared filters
        this.state.fretRangeFilter = 'all';
        this.state.voicingPatternFilter = 'all';
        // Note: We don't reset rootNoteFilter here as it's a separate concept

        // Reset Basic tab dropdowns
        const basicChordTypeDropdown = document.getElementById('basic-chord-type-filter');
        const basicFretRangeDropdown = document.getElementById('basic-fret-range-filter');
        if (basicChordTypeDropdown) basicChordTypeDropdown.value = 'all';
        if (basicFretRangeDropdown) basicFretRangeDropdown.value = 'all';

        // Reset difficulty buttons
        document.querySelectorAll('.difficulty-filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.difficulty === 'all');
        });

        // Reset legacy filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.voicing === 'all');
        });

        // Reset Advanced tab dropdowns
        const chordTypeDropdown = document.getElementById('chord-type-filter');
        const voicingStyleDropdown = document.getElementById('voicing-style-filter');
        const jazzLevelDropdown = document.getElementById('jazz-level-filter');
        const soundCharacterDropdown = document.getElementById('sound-character-filter');
        const fretRangeDropdown = document.getElementById('fret-range-filter');
        const noteCountDropdown = document.getElementById('note-count-filter');

        if (chordTypeDropdown) chordTypeDropdown.value = 'all';
        if (voicingStyleDropdown) voicingStyleDropdown.value = 'all';
        if (jazzLevelDropdown) jazzLevelDropdown.value = 'all';
        if (soundCharacterDropdown) soundCharacterDropdown.value = 'all';
        if (fretRangeDropdown) fretRangeDropdown.value = 'all';
        if (noteCountDropdown) noteCountDropdown.value = 'all';

        // Update visual indicators
        this.updateFilterHighlights();
        this.updateAdvancedFiltersIndicator();
        this.saveFilterSettings();

        // Re-filter displayed chords if we have already searched
        if (this.state.hasSearched) {
            this.applyFiltersAndDisplay();
        }
    },

    /**
     * Handle capo change
     * @param {number} fret - Capo fret position (0 = no capo, 1-7 = fret position)
     */
    handleCapoChange(fret) {
        this.state.capoFret = fret;
        this.saveCapoSetting();
        this.updateCapoVisualState();

        // Sync capo to audio engine for playback
        if (typeof AudioEngine !== 'undefined') {
            AudioEngine.setCapoFret(fret);
        }

        // Re-render chord cards to show/hide "Sounds as" line
        if (this.state.hasSearched) {
            this.applyFiltersAndDisplay();
        }
    },

    /**
     * Load capo setting from localStorage
     */
    loadCapoSetting() {
        try {
            const saved = localStorage.getItem('guitarExplorerCapoFret');
            if (saved !== null) {
                const fret = parseInt(saved, 10);
                if (!isNaN(fret) && fret >= 0 && fret <= 7) {
                    this.state.capoFret = fret;
                    // Update the dropdown
                    const capoSelect = document.getElementById('capo-select');
                    if (capoSelect) {
                        capoSelect.value = fret.toString();
                    }
                    // Sync to audio engine
                    if (typeof AudioEngine !== 'undefined') {
                        AudioEngine.setCapoFret(fret);
                    }
                }
            }
        } catch (error) {
            console.error('Failed to load capo setting:', error);
        }
        this.updateCapoVisualState();
    },

    /**
     * Save capo setting to localStorage
     */
    saveCapoSetting() {
        try {
            localStorage.setItem('guitarExplorerCapoFret', this.state.capoFret.toString());
        } catch (error) {
            console.error('Failed to save capo setting:', error);
        }
    },

    /**
     * Update capo visual state (highlight when active)
     */
    updateCapoVisualState() {
        const capoControl = document.getElementById('capo-control');
        if (capoControl) {
            capoControl.classList.toggle('capo-active', this.state.capoFret > 0);
        }
    },

    /**
     * Handle guitar tone change
     * @param {string} tone - Guitar tone preset key
     */
    handleGuitarToneChange(tone) {
        this.state.guitarTone = tone;
        this.saveGuitarToneSetting();

        // Sync tone to audio engine for playback
        if (typeof AudioEngine !== 'undefined') {
            AudioEngine.setGuitarTone(tone);
        }
    },

    /**
     * Load guitar tone setting from localStorage
     */
    loadGuitarToneSetting() {
        try {
            const saved = localStorage.getItem('guitarExplorerGuitarTone');
            if (saved !== null) {
                // Validate it's a known tone preset
                const validTones = ['acoustic', 'bright', 'warm', 'electric', 'muted', 'nylon'];
                if (validTones.includes(saved)) {
                    this.state.guitarTone = saved;
                    // Update the dropdown
                    const toneSelect = document.getElementById('guitar-tone-select');
                    if (toneSelect) {
                        toneSelect.value = saved;
                    }
                    // Sync to audio engine
                    if (typeof AudioEngine !== 'undefined') {
                        AudioEngine.setGuitarTone(saved);
                    }
                }
            }
        } catch (error) {
            console.error('Failed to load guitar tone setting:', error);
        }
    },

    /**
     * Save guitar tone setting to localStorage
     */
    saveGuitarToneSetting() {
        try {
            localStorage.setItem('guitarExplorerGuitarTone', this.state.guitarTone);
        } catch (error) {
            console.error('Failed to save guitar tone setting:', error);
        }
    },

    /**
     * Handle strum style change
     * @param {string} style - Strum style preset key
     */
    handleStrumStyleChange(style) {
        this.state.strumStyle = style;
        this.saveStrumStyleSetting();

        // Sync strum style to audio engine for playback
        if (typeof AudioEngine !== 'undefined') {
            AudioEngine.setStrumStyle(style);
        }
    },

    /**
     * Load strum style setting from localStorage
     */
    loadStrumStyleSetting() {
        try {
            const saved = localStorage.getItem('guitarExplorerStrumStyle');
            if (saved !== null) {
                // Validate it's a known strum style preset
                const validStyles = ['single-down', 'slow', 'fast', 'down-up', 'fingerpick'];
                if (validStyles.includes(saved)) {
                    this.state.strumStyle = saved;
                    // Update the dropdown
                    const styleSelect = document.getElementById('strum-style-select');
                    if (styleSelect) {
                        styleSelect.value = saved;
                    }
                    // Sync to audio engine
                    if (typeof AudioEngine !== 'undefined') {
                        AudioEngine.setStrumStyle(saved);
                    }
                }
            }
        } catch (error) {
            console.error('Failed to load strum style setting:', error);
        }
    },

    /**
     * Save strum style setting to localStorage
     */
    saveStrumStyleSetting() {
        try {
            localStorage.setItem('guitarExplorerStrumStyle', this.state.strumStyle);
        } catch (error) {
            console.error('Failed to save strum style setting:', error);
        }
    },

    /**
     * Handle distortion change
     * @param {number} amount - Distortion amount (0-100)
     */
    handleDistortionChange(amount) {
        this.state.distortion = amount;
        this.saveDistortionSetting();
        this.updateDistortionDisplay();

        // Sync distortion to audio engine for playback
        if (typeof AudioEngine !== 'undefined') {
            AudioEngine.setDistortion(amount);
        }
    },

    /**
     * Load distortion setting from localStorage
     */
    loadDistortionSetting() {
        try {
            const saved = localStorage.getItem('guitarExplorerDistortion');
            if (saved !== null) {
                const amount = parseInt(saved, 10);
                if (!isNaN(amount) && amount >= 0 && amount <= 100) {
                    this.state.distortion = amount;
                    // Update the slider
                    const slider = document.getElementById('distortion-slider');
                    if (slider) {
                        slider.value = amount;
                    }
                    this.updateDistortionDisplay();
                    // Sync to audio engine
                    if (typeof AudioEngine !== 'undefined') {
                        AudioEngine.setDistortion(amount);
                    }
                }
            }
        } catch (error) {
            console.error('Failed to load distortion setting:', error);
        }
    },

    /**
     * Save distortion setting to localStorage
     */
    saveDistortionSetting() {
        try {
            localStorage.setItem('guitarExplorerDistortion', this.state.distortion.toString());
        } catch (error) {
            console.error('Failed to save distortion setting:', error);
        }
    },

    /**
     * Update distortion display value
     */
    updateDistortionDisplay() {
        const valueElement = document.getElementById('distortion-value');
        if (valueElement) {
            valueElement.textContent = `${this.state.distortion}%`;
        }
    },

    /**
     * Handle arpeggio speed change
     * @param {number} bpm - Arpeggio tempo in BPM
     */
    handleArpeggioSpeedChange(bpm) {
        this.state.arpeggioSpeed = bpm;
        this.saveArpeggioSpeedSetting();

        // Sync arpeggio tempo to audio engine for playback
        if (typeof AudioEngine !== 'undefined') {
            AudioEngine.setArpeggioTempo(bpm);
        }
    },

    /**
     * Load arpeggio speed setting from localStorage
     */
    loadArpeggioSpeedSetting() {
        try {
            const saved = localStorage.getItem('guitarExplorerArpeggioSpeed');
            if (saved !== null) {
                const bpm = parseInt(saved, 10);
                // Validate it's a valid BPM value
                const validSpeeds = [80, 120, 160, 200];
                if (validSpeeds.includes(bpm)) {
                    this.state.arpeggioSpeed = bpm;
                    // Update the dropdown
                    const speedSelect = document.getElementById('arpeggio-speed-select');
                    if (speedSelect) {
                        speedSelect.value = bpm.toString();
                    }
                    // Sync to audio engine
                    if (typeof AudioEngine !== 'undefined') {
                        AudioEngine.setArpeggioTempo(bpm);
                    }
                }
            }
        } catch (error) {
            console.error('Failed to load arpeggio speed setting:', error);
        }
    },

    /**
     * Save arpeggio speed setting to localStorage
     */
    saveArpeggioSpeedSetting() {
        try {
            localStorage.setItem('guitarExplorerArpeggioSpeed', this.state.arpeggioSpeed.toString());
        } catch (error) {
            console.error('Failed to save arpeggio speed setting:', error);
        }
    },

    // ==========================================
    // Filter Settings Persistence
    // ==========================================

    /**
     * Load filter settings from localStorage
     */
    loadFilterSettings() {
        try {
            const saved = localStorage.getItem('guitarExplorerFilters');
            if (saved) {
                const filters = JSON.parse(saved);

                // Restore filter tab
                if (filters.filterTab) {
                    this.state.filterTab = filters.filterTab;
                    // Update tab UI
                    document.querySelectorAll('.filter-tab-btn').forEach(btn => {
                        btn.classList.toggle('active', btn.dataset.filterTab === filters.filterTab);
                    });
                    document.querySelectorAll('.filter-tab-content').forEach(content => {
                        content.classList.toggle('active', content.id === `${filters.filterTab}-filters-content`);
                    });
                }

                // Restore Basic tab filters
                if (filters.basicChordTypeFilter) {
                    this.state.basicChordTypeFilter = filters.basicChordTypeFilter;
                    const el = document.getElementById('basic-chord-type-filter');
                    if (el) el.value = filters.basicChordTypeFilter;
                }

                if (filters.voicingFilter) {
                    this.state.voicingFilter = filters.voicingFilter;
                    document.querySelectorAll('.difficulty-filter-btn').forEach(btn => {
                        btn.classList.toggle('active', btn.dataset.difficulty === filters.voicingFilter);
                    });
                    document.querySelectorAll('.filter-btn').forEach(btn => {
                        btn.classList.toggle('active', btn.dataset.voicing === filters.voicingFilter);
                    });
                }

                // Restore Advanced tab filters
                if (filters.chordTypeFilter) {
                    this.state.chordTypeFilter = filters.chordTypeFilter;
                    const el = document.getElementById('chord-type-filter');
                    if (el) el.value = filters.chordTypeFilter;
                }

                if (filters.voicingStyleFilter) {
                    this.state.voicingStyleFilter = filters.voicingStyleFilter;
                    const el = document.getElementById('voicing-style-filter');
                    if (el) el.value = filters.voicingStyleFilter;
                }

                if (filters.jazzLevelFilter) {
                    this.state.jazzLevelFilter = filters.jazzLevelFilter;
                    const el = document.getElementById('jazz-level-filter');
                    if (el) el.value = filters.jazzLevelFilter;
                }

                if (filters.soundCharacterFilter) {
                    this.state.soundCharacterFilter = filters.soundCharacterFilter;
                    const el = document.getElementById('sound-character-filter');
                    if (el) el.value = filters.soundCharacterFilter;
                }

                if (filters.noteCountFilter) {
                    this.state.noteCountFilter = filters.noteCountFilter;
                    const el = document.getElementById('note-count-filter');
                    if (el) el.value = filters.noteCountFilter;
                }

                // Restore shared filters
                if (filters.fretRangeFilter) {
                    this.state.fretRangeFilter = filters.fretRangeFilter;
                    const basicEl = document.getElementById('basic-fret-range-filter');
                    const advancedEl = document.getElementById('fret-range-filter');
                    if (basicEl) basicEl.value = filters.fretRangeFilter;
                    if (advancedEl) advancedEl.value = filters.fretRangeFilter;
                }

                // Update visual indicators
                this.updateFilterHighlights();
                this.updateAdvancedFiltersIndicator();
            }
        } catch (error) {
            console.error('Failed to load filter settings:', error);
        }
    },

    /**
     * Save filter settings to localStorage
     */
    saveFilterSettings() {
        try {
            const filters = {
                filterTab: this.state.filterTab,
                basicChordTypeFilter: this.state.basicChordTypeFilter,
                voicingFilter: this.state.voicingFilter,
                chordTypeFilter: this.state.chordTypeFilter,
                voicingStyleFilter: this.state.voicingStyleFilter,
                jazzLevelFilter: this.state.jazzLevelFilter,
                soundCharacterFilter: this.state.soundCharacterFilter,
                noteCountFilter: this.state.noteCountFilter,
                fretRangeFilter: this.state.fretRangeFilter
            };
            localStorage.setItem('guitarExplorerFilters', JSON.stringify(filters));
        } catch (error) {
            console.error('Failed to save filter settings:', error);
        }
    },

    /**
     * Transpose a chord name by semitones
     * @param {string} chordName - Original chord name (e.g., "C Major", "Am", "F#m7")
     * @param {number} semitones - Number of semitones to transpose (positive = up)
     * @returns {string} - Transposed chord name
     */
    transposeChordName(chordName, semitones) {
        if (!chordName || semitones === 0) return chordName;

        // Note order (using sharps)
        const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

        // Extract root note from chord name
        // Handle both "C Major" and "Cm" formats
        let rootMatch = chordName.match(/^([A-G][#b]?)/);
        if (!rootMatch) return chordName;

        let root = rootMatch[1];
        let suffix = chordName.substring(root.length);

        // Normalize flats to sharps
        const flatToSharp = {
            'Db': 'C#', 'Eb': 'D#', 'Fb': 'E', 'Gb': 'F#',
            'Ab': 'G#', 'Bb': 'A#', 'Cb': 'B'
        };
        if (flatToSharp[root]) {
            root = flatToSharp[root];
        }

        // Find current index and transpose
        const currentIndex = notes.indexOf(root);
        if (currentIndex === -1) return chordName;

        const newIndex = (currentIndex + semitones + 12) % 12;
        const newRoot = notes[newIndex];

        return newRoot + suffix;
    },

    /**
     * Get the transposed chord name for display with capo
     * @param {Object} chord - Chord object
     * @returns {string|null} - Transposed chord name or null if no capo
     */
    getCapoTransposedName(chord) {
        if (this.state.capoFret === 0) return null;
        return this.transposeChordName(chord.name, this.state.capoFret);
    },

    /**
     * Update chord count display
     */
    updateChordCount(count) {
        const countElement = document.getElementById('filter-chord-count');
        if (countElement) {
            // Include root note in the count message if active
            const rootNote = this.state.rootNoteFilter;
            if (rootNote !== 'all') {
                const displayName = this.getRootNoteDisplayName(rootNote);
                if (count === 0) {
                    countElement.textContent = `No ${displayName} chords match your filters`;
                    countElement.classList.add('no-results');
                } else {
                    countElement.textContent = `Showing ${count} ${displayName} chord${count === 1 ? '' : 's'}`;
                    countElement.classList.remove('no-results');
                }
            } else if (count === 0) {
                countElement.textContent = 'No chords match your filters';
                countElement.classList.add('no-results');
            } else {
                countElement.textContent = `Showing ${count} chord${count === 1 ? '' : 's'}`;
                countElement.classList.remove('no-results');
            }
        }
    },

    /**
     * Clear all selections
     */
    clearSelections() {
        this.state.currentMood = null;
        this.state.currentStyle = null;

        // Reset dropdowns
        const moodDropdown = document.getElementById('mood-dropdown');
        const styleDropdown = document.getElementById('style-dropdown');
        if (moodDropdown) moodDropdown.value = '';
        if (styleDropdown) styleDropdown.value = '';
    },

    /**
     * Show chords based on current selection
     */
    showChords() {
        let chords = [];
        let selectionInfo = null;

        // Reset root note filter when mood/style/theory is used (not in root-note mode)
        if (this.state.selectionMode !== 'root-note') {
            this.resetRootNoteFilter();
        }

        // Reset the three new filters to "All" when mood/style/theory changes
        this.clearAllFilters();

        // Get chords based on selection mode
        switch (this.state.selectionMode) {
            case 'mood':
                if (this.state.currentMood) {
                    chords = SelectionEngine.getChordsByMood(this.state.currentMood);
                    selectionInfo = SelectionEngine.getSelectionInfo('mood', this.state.currentMood);
                } else {
                    // No mood selected, show all
                    chords = getAllChords();
                }
                break;

            case 'style':
                if (this.state.currentStyle) {
                    chords = SelectionEngine.getChordsByStyle(this.state.currentStyle);
                    selectionInfo = SelectionEngine.getSelectionInfo('style', this.state.currentStyle);
                } else {
                    // No style selected, show all
                    chords = getAllChords();
                }
                break;

            case 'theory':
                chords = SelectionEngine.getChordsByTheory(this.state.currentKey, this.state.currentMode);
                selectionInfo = SelectionEngine.getSelectionInfo('theory', this.state.currentMode);
                if (selectionInfo) {
                    selectionInfo.name = `${this.state.currentKey} ${selectionInfo.name}`;
                    selectionInfo.icon = '🎼';
                }
                break;

            case 'root-note':
                if (this.state.currentRootNote) {
                    // Get all chords and filter by root note
                    chords = SelectionEngine.filterByRootNote(getAllChords(), this.state.currentRootNote);
                    selectionInfo = {
                        name: `${this.state.currentRootNote} Chords`,
                        description: `All chord voicings with ${this.state.currentRootNote} as the root note`,
                        icon: '🎵'
                    };
                } else {
                    // No root note selected, show all
                    chords = getAllChords();
                }
                break;
        }

        this.state.selectedChords = chords;
        this.state.hasSearched = true;

        // Show selection info banner
        if (selectionInfo) {
            this.showSelectionInfo(selectionInfo, chords.length);
        } else {
            this.hideSelectionInfo();
        }

        // Show advanced filters section
        this.showAdvancedFilters();

        this.applyFiltersAndDisplay();
    },

    /**
     * Display all chords (initial load)
     */
    displayAllChords() {
        this.state.selectedChords = getAllChords();
        this.state.hasSearched = false;
        this.hideSelectionInfo();
        this.applyFiltersAndDisplay();
    },

    /**
     * Apply all filters and display chords
     */
    applyFiltersAndDisplay() {
        let chords = [...this.state.selectedChords];

        // Apply voicing/difficulty filter (shared between Basic and Advanced tabs)
        chords = SelectionEngine.filterByDifficulty(chords, this.state.voicingFilter);

        // Apply fret range filter (shared between Basic and Advanced tabs)
        chords = SelectionEngine.filterByFretRange(chords, this.state.fretRangeFilter);

        // Apply Basic tab filters
        if (this.state.basicChordTypeFilter !== 'all') {
            chords = SelectionEngine.filterByBasicChordType(chords, this.state.basicChordTypeFilter);
        }

        // Apply Advanced tab filters
        // Advanced chord type filter (more granular)
        if (this.state.chordTypeFilter !== 'all') {
            chords = SelectionEngine.filterByAdvancedChordType(chords, this.state.chordTypeFilter);
        }

        // Voicing style filter (shell, drop 2, quartal, etc.)
        if (this.state.voicingStyleFilter !== 'all') {
            chords = SelectionEngine.filterByVoicingStyle(chords, this.state.voicingStyleFilter);
        }

        // Jazz level filter
        if (this.state.jazzLevelFilter !== 'all') {
            chords = SelectionEngine.filterByJazzLevel(chords, this.state.jazzLevelFilter);
        }

        // Sound character filter
        if (this.state.soundCharacterFilter !== 'all') {
            chords = SelectionEngine.filterBySoundCharacter(chords, this.state.soundCharacterFilter);
        }

        // Note count filter
        if (this.state.noteCountFilter !== 'all') {
            chords = SelectionEngine.filterByNoteCount(chords, this.state.noteCountFilter);
        }

        // Legacy voicing pattern filter (if still used)
        if (this.state.voicingPatternFilter !== 'all') {
            chords = SelectionEngine.filterByVoicingPattern(chords, this.state.voicingPatternFilter);
        }

        // Sort chords
        chords = SelectionEngine.sortChords(chords, 'root');

        this.state.displayedChords = chords;
        this.renderChordGrid(chords);

        // Update chord count (both basic and advanced)
        this.updateChordCount(chords.length);
        this.updateAdvancedChordCount(chords.length);

        // Show arpeggio section and update if expanded
        this.showArpeggioSection(chords);
    },

    /**
     * Update advanced tab chord count display
     */
    updateAdvancedChordCount(count) {
        const countElement = document.getElementById('advanced-filter-chord-count');
        if (countElement) {
            if (count === 0) {
                countElement.textContent = 'No chords match your filters';
                countElement.classList.add('no-results');
            } else {
                countElement.textContent = `Showing ${count} chord${count === 1 ? '' : 's'}`;
                countElement.classList.remove('no-results');
            }
        }
    },

    /**
     * Show selection info banner
     */
    showSelectionInfo(info, count) {
        const banner = document.getElementById('selection-info');
        const icon = document.getElementById('selection-icon');
        const title = document.getElementById('selection-title');
        const description = document.getElementById('selection-description');
        const countEl = document.getElementById('chord-count');

        icon.textContent = info.icon || '🎸';
        title.textContent = info.name;
        description.textContent = info.description || info.character || '';
        countEl.textContent = `${count} chord${count !== 1 ? 's' : ''}`;

        banner.classList.remove('hidden');
    },

    /**
     * Hide selection info banner
     */
    hideSelectionInfo() {
        const banner = document.getElementById('selection-info');
        banner.classList.add('hidden');
    },

    /**
     * Show filter tabs section (new Basic/Advanced tabs)
     */
    showAdvancedFilters() {
        // Show the new filter tabs section
        const filterTabsSection = document.getElementById('filter-tabs-section');
        if (filterTabsSection) {
            filterTabsSection.classList.remove('hidden');
        }

        // Also show legacy section if it exists (backwards compatibility)
        const filtersSection = document.getElementById('advanced-filters-section');
        if (filtersSection) {
            filtersSection.classList.remove('hidden');
        }
    },

    /**
     * Hide filter tabs section
     */
    hideAdvancedFilters() {
        // Hide the new filter tabs section
        const filterTabsSection = document.getElementById('filter-tabs-section');
        if (filterTabsSection) {
            filterTabsSection.classList.add('hidden');
        }

        // Also hide legacy section if it exists
        const filtersSection = document.getElementById('advanced-filters-section');
        if (filtersSection) {
            filtersSection.classList.add('hidden');
        }
    },

    /**
     * Render the chord grid
     */
    renderChordGrid(chords) {
        const grid = document.getElementById('chord-grid');
        grid.innerHTML = '';

        if (chords.length === 0) {
            grid.innerHTML = this.renderEmptyState();
            return;
        }

        chords.forEach(chord => {
            const card = this.createChordCard(chord);
            grid.appendChild(card);
        });
    },

    /**
     * Get note name for a given string and fret
     */
    getNoteAtFret(stringIndex, fret) {
        // Standard tuning notes for each open string (index 0 = low E, index 5 = high e)
        const openStrings = ['E', 'A', 'D', 'G', 'B', 'E'];
        const chromaticNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

        if (fret === -1) return null; // Muted string

        const openNote = openStrings[stringIndex];
        const openIndex = chromaticNotes.indexOf(openNote);
        const noteIndex = (openIndex + fret) % 12;
        return chromaticNotes[noteIndex];
    },

    /**
     * Get interval name for a note relative to the chord root
     */
    getIntervalName(noteValue, rootValue) {
        const chromaticNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

        // Normalize note names (handle flats)
        const normalizeNote = (note) => {
            const flatToSharp = { 'Db': 'C#', 'Eb': 'D#', 'Fb': 'E', 'Gb': 'F#', 'Ab': 'G#', 'Bb': 'A#', 'Cb': 'B' };
            return flatToSharp[note] || note;
        };

        const noteIdx = chromaticNotes.indexOf(normalizeNote(noteValue));
        const rootIdx = chromaticNotes.indexOf(normalizeNote(rootValue));

        if (noteIdx === -1 || rootIdx === -1) return '?';

        const semitones = (noteIdx - rootIdx + 12) % 12;

        const intervalNames = {
            0: 'Root',
            1: 'b2',
            2: '2',
            3: 'b3',
            4: '3',
            5: '4',
            6: 'b5',
            7: '5',
            8: '#5',
            9: '6',
            10: 'b7',
            11: '7'
        };

        return intervalNames[semitones];
    },

    /**
     * Get string breakdown for a chord
     */
    getStringBreakdown(chord) {
        const stringNames = ['6th', '5th', '4th', '3rd', '2nd', '1st'];
        const breakdown = [];

        for (let i = 0; i < 6; i++) {
            const fret = chord.frets[i];
            if (fret === -1) {
                breakdown.push({ string: stringNames[i], note: null, interval: null, isMuted: true, isOpen: false });
            } else {
                const note = this.getNoteAtFret(i, fret);
                const interval = this.getIntervalName(note, chord.root);
                breakdown.push({
                    string: stringNames[i],
                    note: note,
                    interval: interval,
                    isMuted: false,
                    isOpen: fret === 0
                });
            }
        }

        return breakdown;
    },

    /**
     * Get all notes being played in a chord (in playing order)
     */
    getPlayedNotes(chord) {
        const notes = [];
        for (let i = 0; i < 6; i++) {
            if (chord.frets[i] !== -1) {
                notes.push(this.getNoteAtFret(i, chord.frets[i]));
            }
        }
        return notes;
    },

    /**
     * Get intervals being played in a chord (in playing order)
     */
    getPlayedIntervals(chord) {
        const intervals = [];
        const intervalToNumber = {
            'Root': '1',
            'b2': 'b2',
            '2': '2',
            'b3': 'b3',
            '3': '3',
            '4': '4',
            'b5': 'b5',
            '5': '5',
            '#5': '#5',
            '6': '6',
            'b7': 'b7',
            '7': '7'
        };

        for (let i = 0; i < 6; i++) {
            if (chord.frets[i] !== -1) {
                const note = this.getNoteAtFret(i, chord.frets[i]);
                const interval = this.getIntervalName(note, chord.root);
                intervals.push(intervalToNumber[interval] || interval);
            }
        }
        return intervals;
    },

    /**
     * Get sound character description based on chord type
     */
    getSoundCharacter(chord) {
        const quality = chord.quality || '';
        const intervals = chord.intervals || [];
        const name = chord.name.toLowerCase();

        // Check for specific chord types
        if (name.includes('dim7') || name.includes('diminished 7')) {
            return 'Dark, tense, diminished';
        }
        if (name.includes('dim') || quality === 'diminished') {
            return 'Dark, unstable';
        }
        if (name.includes('aug') || quality === 'augmented') {
            return 'Mysterious, tense';
        }
        if (name.includes('sus2')) {
            return 'Open, airy';
        }
        if (name.includes('sus4') || name.includes('sus')) {
            return 'Unresolved, suspended';
        }
        if (name.includes('add9') || name.includes('add2')) {
            return 'Colorful, shimmering';
        }
        if (name.includes('add11') || name.includes('add4')) {
            return 'Open, resonant';
        }
        if (name.includes('maj13') || name.includes('13')) {
            return 'Lush, sophisticated';
        }
        if (name.includes('maj11') || name.includes('11')) {
            return 'Expansive, modern';
        }
        if (name.includes('maj9')) {
            return 'Dreamy, jazz-like';
        }
        if (name.includes('m9') || name.includes('min9')) {
            return 'Smooth, soulful';
        }
        if (name.includes('9')) {
            return 'Funky, rich';
        }
        if (name.includes('maj7')) {
            return 'Warm, jazzy';
        }
        if (name.includes('m7') || name.includes('min7')) {
            return 'Mellow, sophisticated';
        }
        if (name.includes('7') || quality === 'dominant') {
            return 'Bluesy, driving';
        }
        if (name.includes('6') && !name.includes('b6')) {
            return 'Sweet, nostalgic';
        }
        if (name.includes('power') || (intervals.length === 2 && intervals.includes('1') && intervals.includes('5'))) {
            return 'Powerful, neutral';
        }
        if (quality === 'minor' || name.includes('minor') || name.includes(' m ')) {
            return 'Melancholic, emotional';
        }
        if (quality === 'major' || name.includes('major')) {
            return 'Bright, happy';
        }

        return 'Distinctive, unique';
    },

    /**
     * Get common genres for a chord type
     */
    getCommonGenres(chord) {
        const quality = chord.quality || '';
        const name = chord.name.toLowerCase();
        const intervals = chord.intervals || [];

        // Extended chords (9, 11, 13)
        if (name.includes('13') || name.includes('11') || name.includes('9')) {
            if (name.includes('maj')) {
                return 'Jazz, Neo-soul, R&B';
            }
            return 'Jazz, Funk, R&B';
        }

        // Seventh chords
        if (name.includes('maj7')) {
            return 'Jazz, Bossa Nova, Pop';
        }
        if (name.includes('m7') || name.includes('min7')) {
            return 'Jazz, R&B, Soul';
        }
        if (name.includes('7') || quality === 'dominant') {
            return 'Blues, Jazz, Rock';
        }

        // Diminished
        if (name.includes('dim')) {
            return 'Jazz, Classical, Film';
        }

        // Augmented
        if (name.includes('aug')) {
            return 'Jazz, Classical, Progressive';
        }

        // Suspended
        if (name.includes('sus')) {
            return 'Rock, Alternative, Ambient';
        }

        // Add chords
        if (name.includes('add')) {
            return 'Pop, Rock, Singer-songwriter';
        }

        // Power chords
        if (name.includes('power') || (intervals.length === 2 && intervals.includes('1') && intervals.includes('5'))) {
            return 'Rock, Metal, Punk';
        }

        // Sixth chords
        if (name.includes('6') && !name.includes('b6')) {
            return 'Jazz, Swing, Country';
        }

        // Basic triads
        if (quality === 'minor') {
            return 'Pop, Rock, Folk';
        }
        if (quality === 'major') {
            return 'Pop, Rock, Folk';
        }

        return 'Various genres';
    },

    /**
     * Get voicing info for a chord
     */
    getVoicingInfo(chord) {
        const info = [];

        // Count played notes
        const playedNotes = chord.frets.filter(f => f !== -1).length;
        info.push(`${playedNotes}-note voicing`);

        // Check for barre
        if (chord.barre) {
            info.push('Full barre chord');
        } else if (chord.categories?.isBarreChord) {
            info.push('Barre chord');
        }

        // Position type
        if (chord.categories?.isOpenChord) {
            info.push('Open position');
        } else if (chord.position >= 10) {
            info.push('High position');
        } else if (chord.position >= 5) {
            info.push('Mid position');
        } else {
            info.push('Closed position');
        }

        return info.join(' · ');
    },

    /**
     * Get enharmonic equivalent for a note/chord
     */
    getEnharmonicEquivalent(chord) {
        const enharmonics = {
            'C#': 'Db', 'Db': 'C#',
            'D#': 'Eb', 'Eb': 'D#',
            'F#': 'Gb', 'Gb': 'F#',
            'G#': 'Ab', 'Ab': 'G#',
            'A#': 'Bb', 'Bb': 'A#'
        };

        const root = chord.root;
        if (enharmonics[root]) {
            // Build alternative name
            const altRoot = enharmonics[root];
            const qualityPart = chord.name.replace(root, '').trim();
            return `${altRoot}${qualityPart}`;
        }

        return null;
    },

    /**
     * Copy chord data to clipboard
     */
    async copyChordToClipboard(chord, button) {
        const notes = this.getPlayedNotes(chord).join(' ');
        const fretString = chord.frets.map(f => f === -1 ? 'x' : f).join('');
        const text = `${chord.name} (${fretString}) - Notes: ${notes}`;

        try {
            await navigator.clipboard.writeText(text);

            // Show feedback
            const originalText = button.innerHTML;
            button.innerHTML = '<span class="copied-text">Copied!</span>';
            button.classList.add('copied');

            setTimeout(() => {
                button.innerHTML = originalText;
                button.classList.remove('copied');
            }, 2000);
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.select();

            try {
                document.execCommand('copy');
                const originalText = button.innerHTML;
                button.innerHTML = '<span class="copied-text">Copied!</span>';
                button.classList.add('copied');

                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.classList.remove('copied');
                }, 2000);
            } catch (e) {
                console.error('Copy failed:', e);
            }

            document.body.removeChild(textArea);
        }
    },

    /**
     * Create the More Info section for a chord card
     */
    createMoreInfoSection(chord) {
        const section = document.createElement('div');
        section.className = 'more-info-section collapsed';

        // Toggle button
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'more-info-toggle';
        toggleBtn.innerHTML = `
            <span class="toggle-arrow">&#9654;</span>
            <span class="toggle-text">More Info</span>
        `;
        toggleBtn.addEventListener('click', () => {
            const isCollapsed = section.classList.contains('collapsed');
            section.classList.toggle('collapsed', !isCollapsed);
            toggleBtn.querySelector('.toggle-arrow').innerHTML = isCollapsed ? '&#9660;' : '&#9654;';
        });

        // Content container
        const content = document.createElement('div');
        content.className = 'more-info-content';

        // Get chord data
        const playedNotes = this.getPlayedNotes(chord);
        const playedIntervals = this.getPlayedIntervals(chord);
        const enharmonic = this.getEnharmonicEquivalent(chord);
        const soundCharacter = this.getSoundCharacter(chord);
        const genres = this.getCommonGenres(chord);
        const voicingInfo = this.getVoicingInfo(chord);
        const stringBreakdown = this.getStringBreakdown(chord);

        // Basic Theory Section
        const theorySection = document.createElement('div');
        theorySection.className = 'info-subsection theory-section';
        theorySection.innerHTML = `
            <h5 class="subsection-title">Basic Theory</h5>
            <div class="info-row">
                <span class="info-label">Notes:</span>
                <span class="info-value">${playedNotes.join(' - ')}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Intervals:</span>
                <span class="info-value">${playedIntervals.join(' - ')}</span>
            </div>
            ${enharmonic ? `
            <div class="info-row">
                <span class="info-label">Also known as:</span>
                <span class="info-value enharmonic">${enharmonic}</span>
            </div>
            ` : ''}
        `;

        // String Breakdown Section (collapsible sub-section)
        const stringSection = document.createElement('div');
        stringSection.className = 'info-subsection string-section';

        const stringToggle = document.createElement('button');
        stringToggle.className = 'string-details-toggle collapsed';
        stringToggle.innerHTML = `
            <span class="toggle-arrow">&#9654;</span>
            <span>String Details</span>
        `;

        const stringContent = document.createElement('div');
        stringContent.className = 'string-details-content hidden';

        let stringHTML = '<div class="string-breakdown">';
        stringBreakdown.forEach(s => {
            if (s.isMuted) {
                stringHTML += `
                    <div class="string-line muted">
                        <span class="string-num">${s.string} string:</span>
                        <span class="string-note">Muted (X)</span>
                    </div>
                `;
            } else {
                const openIndicator = s.isOpen ? ' (open)' : '';
                stringHTML += `
                    <div class="string-line">
                        <span class="string-num">${s.string} string:</span>
                        <span class="string-note">${s.note}${openIndicator}</span>
                        <span class="string-interval">(${s.interval})</span>
                    </div>
                `;
            }
        });
        stringHTML += '</div>';
        stringContent.innerHTML = stringHTML;

        stringToggle.addEventListener('click', () => {
            const isCollapsed = stringToggle.classList.contains('collapsed');
            stringToggle.classList.toggle('collapsed', !isCollapsed);
            stringContent.classList.toggle('hidden', !isCollapsed);
            stringToggle.querySelector('.toggle-arrow').innerHTML = isCollapsed ? '&#9660;' : '&#9654;';
        });

        stringSection.appendChild(stringToggle);
        stringSection.appendChild(stringContent);

        // Musical Context Section
        const contextSection = document.createElement('div');
        contextSection.className = 'info-subsection context-section';
        contextSection.innerHTML = `
            <h5 class="subsection-title">Musical Context</h5>
            <div class="info-row">
                <span class="info-label">Character:</span>
                <span class="info-value character">${soundCharacter}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Common in:</span>
                <span class="info-value genres">${genres}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Voicing:</span>
                <span class="info-value voicing">${voicingInfo}</span>
            </div>
        `;

        // Utility Section
        const utilitySection = document.createElement('div');
        utilitySection.className = 'info-subsection utility-section';

        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-chord-btn';
        copyBtn.innerHTML = `<span class="copy-icon">&#128203;</span> Copy Chord`;
        copyBtn.addEventListener('click', () => {
            const currentChord = getChordById(section.closest('.chord-card').dataset.chordId);
            this.copyChordToClipboard(currentChord, copyBtn);
        });

        utilitySection.appendChild(copyBtn);

        // Assemble content
        content.appendChild(theorySection);
        content.appendChild(stringSection);
        content.appendChild(contextSection);
        content.appendChild(utilitySection);

        section.appendChild(toggleBtn);
        section.appendChild(content);

        return section;
    },

    /**
     * Create the Related Chords section for a chord card
     */
    createRelatedChordsSection(chord) {
        const section = document.createElement('div');
        section.className = 'related-chords-section collapsed';

        // Get all chords and calculate related chords
        const allChords = getAllChords();
        const relatedChords = ChordRelationships.getRelatedChords(chord, allChords, 6);

        // Toggle button
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'related-chords-toggle';
        toggleBtn.innerHTML = `
            <span class="toggle-arrow">&#9654;</span>
            <span class="toggle-text">Related Chords</span>
        `;
        toggleBtn.addEventListener('click', () => {
            const isCollapsed = section.classList.contains('collapsed');
            section.classList.toggle('collapsed', !isCollapsed);
            toggleBtn.querySelector('.toggle-arrow').innerHTML = isCollapsed ? '&#9660;' : '&#9654;';
        });

        // Content container
        const content = document.createElement('div');
        content.className = 'related-chords-content';

        if (relatedChords.length > 0) {
            const pillsContainer = document.createElement('div');
            pillsContainer.className = 'related-chords-pills';

            relatedChords.forEach(related => {
                const pill = document.createElement('button');
                pill.className = 'related-chord-pill';
                pill.dataset.chordId = related.chord.id;
                pill.dataset.chordName = related.chord.name;
                pill.title = related.primaryLabel;

                // Create pill content with chord name and relationship label
                pill.innerHTML = `
                    <span class="pill-chord-name">${related.chord.symbol || related.chord.name}</span>
                    <span class="pill-relationship">${related.primaryLabel}</span>
                `;

                pill.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.navigateToRelatedChord(related.chord);
                });

                pillsContainer.appendChild(pill);
            });

            content.appendChild(pillsContainer);
        } else {
            content.innerHTML = '<p class="no-related-chords">No strongly related chords found</p>';
        }

        section.appendChild(toggleBtn);
        section.appendChild(content);

        return section;
    },

    /**
     * Navigate to a related chord (scroll to it or show it if filtered out)
     */
    navigateToRelatedChord(targetChord) {
        // Try to find the chord card in the current view
        const chordGrid = document.getElementById('chord-grid');
        const existingCard = chordGrid.querySelector(`.chord-card[data-chord-id="${targetChord.id}"]`);

        // Also check if any card has the same chord name (different voicing)
        let matchingCard = existingCard;
        if (!matchingCard) {
            const allCards = chordGrid.querySelectorAll('.chord-card');
            for (const card of allCards) {
                const cardChord = getChordById(card.dataset.chordId);
                if (cardChord && cardChord.name === targetChord.name) {
                    matchingCard = card;
                    break;
                }
            }
        }

        if (matchingCard) {
            // Chord is visible - scroll to it and highlight
            this.scrollToAndHighlight(matchingCard);
        } else {
            // Chord is not visible - show toast and temporarily add it
            this.showRelatedChordNotVisible(targetChord);
        }
    },

    /**
     * Scroll to a chord card and briefly highlight it
     */
    scrollToAndHighlight(card) {
        // Scroll the card into view
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Add highlight animation
        card.classList.add('highlight-pulse');

        // Remove highlight after animation
        setTimeout(() => {
            card.classList.remove('highlight-pulse');
        }, 2000);
    },

    /**
     * Show a toast and handle navigation when related chord is not visible
     */
    showRelatedChordNotVisible(targetChord) {
        // Show toast notification
        this.showToast(`Showing ${targetChord.name}`);

        // Temporarily add the chord to the display
        const chordGrid = document.getElementById('chord-grid');

        // Create a temporary card with special styling
        const tempCard = this.createChordCard(targetChord);
        tempCard.classList.add('related-chord-temporary');

        // Insert at the beginning of the grid
        chordGrid.insertBefore(tempCard, chordGrid.firstChild);

        // Scroll to the temporary card
        setTimeout(() => {
            this.scrollToAndHighlight(tempCard);
        }, 100);

        // Add a note that this is a temporary addition
        const tempNote = document.createElement('div');
        tempNote.className = 'temporary-chord-note';
        tempNote.innerHTML = `
            <span>Added from Related Chords</span>
            <button class="remove-temp-chord" title="Remove">×</button>
        `;
        tempCard.insertBefore(tempNote, tempCard.firstChild);

        // Handle remove button
        tempNote.querySelector('.remove-temp-chord').addEventListener('click', (e) => {
            e.stopPropagation();
            tempCard.remove();
        });
    },

    /**
     * Show a toast notification
     */
    showToast(message, duration = 3000) {
        // Remove any existing toast
        const existingToast = document.querySelector('.toast-notification');
        if (existingToast) {
            existingToast.remove();
        }

        // Create toast element
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.textContent = message;

        // Add to document
        document.body.appendChild(toast);

        // Trigger animation
        requestAnimationFrame(() => {
            toast.classList.add('show');
        });

        // Remove after duration
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, duration);
    },

    /**
     * Create a chord card element
     */
    createChordCard(chord) {
        const card = document.createElement('div');
        card.className = 'chord-card';
        card.dataset.chordId = chord.id;

        // Get all voicings for this chord
        const voicings = getVoicingsForChord(chord);

        // Header
        const header = document.createElement('div');
        header.className = 'chord-card-header';

        const nameContainer = document.createElement('div');
        nameContainer.className = 'chord-name-container';

        const name = document.createElement('span');
        name.className = 'chord-name';
        name.textContent = chord.name;

        nameContainer.appendChild(name);

        header.appendChild(nameContainer);

        // Voicing line: dropdown if multiple voicings, read-only label if single voicing
        const voicingLine = document.createElement('div');
        voicingLine.className = 'chord-card-voicing-line';

        const hasMultipleVoicings = voicings.length > 1;

        if (hasMultipleVoicings) {
            // Multiple voicings: show dropdown
            const voicingSelect = document.createElement('select');
            voicingSelect.id = `voicing-${chord.id}`;
            voicingSelect.className = 'voicing-select-compact';

            voicings.forEach(v => {
                const option = document.createElement('option');
                option.value = v.id;
                option.textContent = getVoicingLabel(v);
                if (v.id === chord.id) {
                    option.selected = true;
                }
                voicingSelect.appendChild(option);
            });

            voicingSelect.addEventListener('change', (e) => {
                this.handleVoicingChange(e.target.value, card);
            });

            voicingLine.appendChild(voicingSelect);
        } else {
            // Single voicing: show read-only label
            const voicingLabel = document.createElement('span');
            voicingLabel.className = 'voicing-label-readonly';
            voicingLabel.textContent = getVoicingLabel(chord);
            voicingLine.appendChild(voicingLabel);
        }

        // Body
        const body = document.createElement('div');
        body.className = 'chord-card-body';

        // Chord diagram container
        const diagramContainer = document.createElement('div');
        diagramContainer.className = 'chord-diagram-container';

        // Render SVG chord diagram
        const diagram = ChordRenderer.render(chord);
        diagramContainer.appendChild(diagram);

        // Render tablature
        const tab = TabRenderer.render(chord);

        // Render finger info
        const fingerInfo = TabRenderer.renderFingerInfo(chord);

        // Info line: Roman numeral (left) + Difficulty badge (right)
        const infoLine = document.createElement('div');
        infoLine.className = 'chord-info-line';

        // Roman numeral on the left (if chord has diatonic info)
        const romanNumeral = document.createElement('span');
        romanNumeral.className = 'roman-numeral-small';
        if (chord.diatonicInfo && chord.diatonicInfo.romanNumeral) {
            romanNumeral.textContent = chord.diatonicInfo.romanNumeral;
        }
        // Always add the element (empty if no diatonic info) to maintain spacing
        infoLine.appendChild(romanNumeral);

        // Difficulty badge on the right
        const difficultyBadge = document.createElement('span');
        difficultyBadge.className = `difficulty-badge-small ${this.getDifficultyClass(chord.difficulty)}`;
        difficultyBadge.textContent = this.getDifficultyLabel(chord.difficulty);
        infoLine.appendChild(difficultyBadge);

        body.appendChild(diagramContainer);
        body.appendChild(tab);
        body.appendChild(fingerInfo);
        body.appendChild(infoLine);

        // Actions
        const actions = document.createElement('div');
        actions.className = 'chord-card-actions';

        const playBtn = document.createElement('button');
        playBtn.className = 'action-btn play-btn';
        playBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <span>Play</span>
        `;
        playBtn.title = 'Play chord';
        playBtn.addEventListener('click', (e) => {
            const currentChord = getChordById(card.dataset.chordId);
            this.playChord(currentChord, e.currentTarget);
        });

        const addBtn = document.createElement('button');
        addBtn.className = 'action-btn add-btn';
        addBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <span>Add</span>
        `;
        addBtn.title = 'Add to progression';
        addBtn.addEventListener('click', () => {
            const currentChord = getChordById(card.dataset.chordId);
            if (currentChord) {
                this.addToProgression(currentChord);
                // Visual feedback
                addBtn.classList.add('added');
                setTimeout(() => addBtn.classList.remove('added'), 300);
            }
        });

        actions.appendChild(playBtn);
        actions.appendChild(addBtn);

        // More Info section
        const moreInfoSection = this.createMoreInfoSection(chord);

        // If global expand is active, expand this section
        if (this.state.allInfoExpanded) {
            moreInfoSection.classList.remove('collapsed');
            moreInfoSection.querySelector('.toggle-arrow').innerHTML = '&#9660;';
        }

        // Related Chords section
        const relatedChordsSection = this.createRelatedChordsSection(chord);

        card.appendChild(header);
        // Voicing line (dropdown or read-only label)
        card.appendChild(voicingLine);

        // Capo line (only shown when capo is active)
        if (this.state.capoFret > 0) {
            const capoSoundsAs = document.createElement('div');
            capoSoundsAs.className = 'capo-sounds-as';
            const transposedName = this.getCapoTransposedName(chord);
            capoSoundsAs.innerHTML = `<span class="capo-sounds-as-label">Capo Fret ${this.state.capoFret}:</span> <span class="capo-sounds-as-chord">${transposedName}</span>`;
            card.appendChild(capoSoundsAs);
        }

        card.appendChild(body);
        card.appendChild(actions);
        card.appendChild(moreInfoSection);
        card.appendChild(relatedChordsSection);

        return card;
    },

    /**
     * Handle voicing change from dropdown
     */
    handleVoicingChange(chordId, card) {
        const newChord = getChordById(chordId);
        if (!newChord) return;

        // Update card's chord ID
        card.dataset.chordId = chordId;

        // Update difficulty badge (now in body area)
        const difficultyBadge = card.querySelector('.difficulty-badge-small');
        if (difficultyBadge) {
            difficultyBadge.className = `difficulty-badge-small ${this.getDifficultyClass(newChord.difficulty)}`;
            difficultyBadge.textContent = this.getDifficultyLabel(newChord.difficulty);
        }

        // Update diagram
        const diagramContainer = card.querySelector('.chord-diagram-container');
        diagramContainer.innerHTML = '';
        const newDiagram = ChordRenderer.render(newChord);
        diagramContainer.appendChild(newDiagram);

        // Update tablature
        const oldTab = card.querySelector('.tab-container');
        const newTab = TabRenderer.render(newChord);
        oldTab.replaceWith(newTab);

        // Update finger info
        const oldFingerInfo = card.querySelector('.finger-info');
        const newFingerInfo = TabRenderer.renderFingerInfo(newChord);
        oldFingerInfo.replaceWith(newFingerInfo);

        // Update More Info section
        const oldMoreInfo = card.querySelector('.more-info-section');
        if (oldMoreInfo) {
            const wasExpanded = !oldMoreInfo.classList.contains('collapsed');
            const newMoreInfo = this.createMoreInfoSection(newChord);
            if (wasExpanded || this.state.allInfoExpanded) {
                newMoreInfo.classList.remove('collapsed');
                newMoreInfo.querySelector('.toggle-arrow').innerHTML = '&#9660;';
            }
            oldMoreInfo.replaceWith(newMoreInfo);
        }

        // Update Related Chords section
        const oldRelatedChords = card.querySelector('.related-chords-section');
        if (oldRelatedChords) {
            const wasExpanded = !oldRelatedChords.classList.contains('collapsed');
            const newRelatedChords = this.createRelatedChordsSection(newChord);
            if (wasExpanded) {
                newRelatedChords.classList.remove('collapsed');
                newRelatedChords.querySelector('.toggle-arrow').innerHTML = '&#9660;';
            }
            oldRelatedChords.replaceWith(newRelatedChords);
        }
    },

    /**
     * Show arpeggio section when chords are displayed
     */
    showArpeggioSection(chords) {
        const section = document.getElementById('arpeggio-section');

        // Check if any displayed chords have arpeggios
        const chordsWithArpeggios = chords.filter(chord => getArpeggioForChord(chord.id));

        if (chordsWithArpeggios.length > 0) {
            section.classList.remove('hidden');

            // Update the toggle button text with count
            const toggle = document.getElementById('arpeggio-toggle');
            const toggleText = toggle.querySelector('span');
            toggleText.textContent = `Show Arpeggios (${chordsWithArpeggios.length} available)`;

            // If already expanded, update the content
            if (this.state.arpeggiosExpanded) {
                this.renderArpeggios(chordsWithArpeggios);
            }
        } else {
            section.classList.add('hidden');
        }
    },

    /**
     * Toggle arpeggio section visibility
     */
    toggleChords() {
        const toggle = document.getElementById('chords-toggle');
        const content = document.getElementById('chords-content');

        if (!toggle || !content) return;

        const isExpanded = toggle.classList.contains('expanded');

        toggle.classList.toggle('expanded', !isExpanded);
        content.classList.toggle('hidden', isExpanded);

        // Update toggle text
        const toggleText = toggle.querySelector('span');
        if (toggleText) {
            const chordCount = this.state.displayedChords?.length || 0;
            toggleText.textContent = isExpanded ? `Show Chords (${chordCount})` : 'Available Chords';
        }
    },

    /**
     * Toggle arpeggio section visibility
     */
    toggleArpeggios() {
        const toggle = document.getElementById('arpeggio-toggle');
        const content = document.getElementById('arpeggio-content');

        this.state.arpeggiosExpanded = !this.state.arpeggiosExpanded;

        toggle.classList.toggle('expanded', this.state.arpeggiosExpanded);
        content.classList.toggle('hidden', !this.state.arpeggiosExpanded);

        if (this.state.arpeggiosExpanded) {
            // Get chords with arpeggios
            const chordsWithArpeggios = this.state.displayedChords.filter(
                chord => getArpeggioForChord(chord.id)
            );
            this.renderArpeggios(chordsWithArpeggios);
        }
    },

    /**
     * Toggle all More Info sections
     */
    toggleAllInfo() {
        this.state.allInfoExpanded = !this.state.allInfoExpanded;

        // Update button text
        const btn = document.getElementById('expand-all-info-btn');
        if (btn) {
            if (this.state.allInfoExpanded) {
                btn.innerHTML = '<span class="expand-icon">&#128213;</span> Collapse All Info';
            } else {
                btn.innerHTML = '<span class="expand-icon">&#128214;</span> Expand All Info';
            }
        }

        // Toggle all More Info sections on visible cards
        const cards = document.querySelectorAll('.chord-card .more-info-section');
        cards.forEach(section => {
            if (this.state.allInfoExpanded) {
                section.classList.remove('collapsed');
                const arrow = section.querySelector('.toggle-arrow');
                if (arrow) arrow.innerHTML = '&#9660;';
            } else {
                section.classList.add('collapsed');
                const arrow = section.querySelector('.toggle-arrow');
                if (arrow) arrow.innerHTML = '&#9654;';
            }
        });
    },

    /**
     * Reset global info expanded state (called when filters change)
     */
    resetAllInfoState() {
        this.state.allInfoExpanded = false;
        const btn = document.getElementById('expand-all-info-btn');
        if (btn) {
            btn.innerHTML = '<span class="expand-icon">&#128214;</span> Expand All Info';
        }
    },

    /**
     * Render arpeggios for displayed chords
     */
    renderArpeggios(chords) {
        const arpeggioList = document.getElementById('arpeggio-list');
        if (!arpeggioList) return;

        arpeggioList.innerHTML = '';

        // Initialize pattern style from localStorage
        ArpeggioRenderer.initPatternStyle();

        // Set up global sweep style selector
        this.setupGlobalSweepStyleSelector();

        // Add legend inline with header
        this.setupInlineArpeggioLegend();

        // Render each arpeggio
        chords.forEach(chord => {
            const arpeggio = getArpeggioForChord(chord.id);
            if (arpeggio) {
                const card = this.createArpeggioCard(arpeggio);
                arpeggioList.appendChild(card);
            }
        });
    },

    /**
     * Set up the inline arpeggio legend next to the Available Arpeggios header
     */
    setupInlineArpeggioLegend() {
        const container = document.getElementById('arpeggio-legend-inline');
        if (!container) return;

        container.innerHTML = '';

        const items = [
            { label: 'Root', color: ArpeggioRenderer.config.colors.root },
            { label: '3rd', color: ArpeggioRenderer.config.colors.third },
            { label: '5th', color: ArpeggioRenderer.config.colors.fifth },
            { label: '7th', color: ArpeggioRenderer.config.colors.seventh }
        ];

        items.forEach(item => {
            const legendItem = document.createElement('span');
            legendItem.className = 'legend-item';
            legendItem.innerHTML = `<span class="legend-dot" style="background-color: ${item.color}"></span>${item.label}`;
            container.appendChild(legendItem);
        });
    },

    /**
     * Set up the global sweep style selector
     */
    setupGlobalSweepStyleSelector() {
        const container = document.getElementById('global-sweep-style');
        if (!container) return;

        container.innerHTML = '';

        const selector = document.createElement('div');
        selector.className = 'pattern-style-selector';

        const label = document.createElement('label');
        label.className = 'pattern-style-label';
        label.textContent = 'Sweep Style:';
        selector.appendChild(label);

        const selectWrapper = document.createElement('div');
        selectWrapper.className = 'pattern-style-select-wrapper';

        const select = document.createElement('select');
        select.className = 'pattern-style-select';
        select.id = 'global-pattern-style-select';

        Object.values(ArpeggioRenderer.patternStyles).forEach(style => {
            const option = document.createElement('option');
            option.value = style.id;
            option.textContent = style.name;
            if (style.id === ArpeggioRenderer.currentPatternStyle) {
                option.selected = true;
            }
            select.appendChild(option);
        });

        select.addEventListener('change', (e) => {
            ArpeggioRenderer.setPatternStyle(e.target.value);
            this.updateAllArpeggioTabs(e.target.value);
        });

        selectWrapper.appendChild(select);

        // Info button with tooltip
        const infoBtn = document.createElement('button');
        infoBtn.className = 'pattern-style-info-btn';
        infoBtn.type = 'button';
        infoBtn.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
        `;
        infoBtn.title = ArpeggioRenderer.patternStyles[ArpeggioRenderer.currentPatternStyle].description;

        select.addEventListener('change', () => {
            infoBtn.title = ArpeggioRenderer.patternStyles[select.value].description;
        });

        selectWrapper.appendChild(infoBtn);
        selector.appendChild(selectWrapper);
        container.appendChild(selector);
    },

    /**
     * Create an arpeggio card element
     */
    createArpeggioCard(arpeggio) {
        const card = document.createElement('div');
        card.className = 'arpeggio-card';

        // Header
        const header = document.createElement('div');
        header.className = 'arpeggio-card-header';

        const headerLeft = document.createElement('div');
        headerLeft.className = 'arpeggio-header-left';

        const name = document.createElement('span');
        name.className = 'arpeggio-name';
        name.textContent = arpeggio.name;

        // Notes inline with name
        const notesInline = document.createElement('span');
        notesInline.className = 'arpeggio-notes-inline';
        arpeggio.notes.forEach((note, index) => {
            const badge = document.createElement('span');
            badge.className = `note-badge${index === 0 ? ' root' : ''}`;
            badge.textContent = note;
            notesInline.appendChild(badge);
        });

        const position = document.createElement('span');
        position.className = 'arpeggio-position';
        position.textContent = arpeggio.position;

        headerLeft.appendChild(name);
        headerLeft.appendChild(notesInline);
        headerLeft.appendChild(position);

        // Button container
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = '8px';

        // Play button for arpeggio
        const playBtn = document.createElement('button');
        playBtn.className = 'action-btn arpeggio-play-btn';
        playBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <span>Play</span>
        `;
        playBtn.title = 'Play arpeggio';
        playBtn.addEventListener('click', (e) => this.playArpeggio(arpeggio, e.currentTarget));

        // Add to sequence button
        const addSequenceBtn = document.createElement('button');
        addSequenceBtn.className = 'action-btn add-to-sequence-btn';
        addSequenceBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <span>Add to Sequence</span>
        `;
        addSequenceBtn.title = 'Add to arpeggio sequence';
        addSequenceBtn.addEventListener('click', () => {
            this.addToArpeggioSequence(arpeggio);
            addSequenceBtn.classList.add('added');
            addSequenceBtn.querySelector('span').textContent = 'Added!';
            setTimeout(() => {
                addSequenceBtn.classList.remove('added');
                addSequenceBtn.querySelector('span').textContent = 'Add to Sequence';
            }, 1000);
        });

        buttonContainer.appendChild(playBtn);
        buttonContainer.appendChild(addSequenceBtn);

        header.appendChild(headerLeft);
        header.appendChild(buttonContainer);

        // Diagram container
        const diagramContainer = document.createElement('div');
        diagramContainer.className = 'arpeggio-diagram-container';

        const diagram = ArpeggioRenderer.render(arpeggio, {
            showAllNotes: this.state.settings.showAllArpeggioNotes
        });
        diagramContainer.appendChild(diagram);

        // Tab container
        const tabSection = document.createElement('div');
        tabSection.className = 'arpeggio-tab-section';

        // Tab (using current global pattern style)
        const tab = ArpeggioRenderer.renderTab(arpeggio);
        tabSection.appendChild(tab);

        // Store arpeggio data on card for later updates
        card.dataset.arpeggioId = arpeggio.id;

        // Tips
        const tips = document.createElement('div');
        tips.className = 'arpeggio-tips';
        tips.innerHTML = `<span class="arpeggio-tips-label">Tip:</span>${arpeggio.fingeringTips}`;

        card.appendChild(header);
        card.appendChild(diagramContainer);
        card.appendChild(tabSection);
        card.appendChild(tips);

        return card;
    },

    /**
     * Update all arpeggio tabs when style changes
     */
    updateAllArpeggioTabs(newStyle) {
        // Update all arpeggio tabs with the new style
        document.querySelectorAll('.arpeggio-card').forEach(card => {
            const arpeggioId = card.dataset.arpeggioId;
            if (!arpeggioId) return;

            // Find the arpeggio data using the global function
            const arpeggio = typeof getArpeggioById === 'function' ? getArpeggioById(arpeggioId) : null;
            if (!arpeggio) return;

            // Find and replace the tab container
            const tabContainer = card.querySelector('.arpeggio-tab-container');
            if (tabContainer) {
                const newTab = ArpeggioRenderer.renderTab(arpeggio, newStyle);
                tabContainer.replaceWith(newTab);
            }
        });
    },

    /**
     * Get difficulty class name
     */
    getDifficultyClass(level) {
        if (level <= 1) return 'beginner';
        if (level <= 2) return 'intermediate';
        return 'advanced';
    },

    /**
     * Get difficulty label
     */
    getDifficultyLabel(level) {
        if (level <= 1) return 'Beginner';
        if (level <= 2) return 'Intermediate';
        return 'Advanced';
    },

    /**
     * Render empty state
     */
    renderEmptyState() {
        return `
            <div class="empty-state">
                <svg class="empty-state-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <h3 class="empty-state-title">No chords found</h3>
                <p class="empty-state-description">
                    Try selecting a different mood, style, or adjusting your filters.
                </p>
            </div>
        `;
    },

    /**
     * Play a chord using the audio engine
     */
    async playChord(chord, button = null) {
        // Find the button if not passed (for visual feedback)
        if (!button) {
            const card = document.querySelector(`.chord-card[data-chord-id="${chord.id}"]`);
            button = card?.querySelector('.play-btn');
        }

        try {
            // Add playing state
            if (button) button.classList.add('playing');

            await AudioEngine.playChord(chord, 'down');

            // Remove playing state after strum duration
            setTimeout(() => {
                if (button) button.classList.remove('playing');
            }, AudioEngine.settings.strumSpeed * 6 + 100);
        } catch (error) {
            console.error('Failed to play chord:', error);
            if (button) button.classList.remove('playing');
        }
    },

    /**
     * Play an arpeggio using the audio engine
     */
    async playArpeggio(arpeggio, button = null) {
        try {
            // Add playing state
            if (button) button.classList.add('playing');

            // Get pattern notes based on current style (includes legato info)
            const patternNotes = ArpeggioRenderer.getPatternForPlayback(arpeggio);

            await AudioEngine.playArpeggio(arpeggio, null, patternNotes);

            // Calculate duration and remove playing state
            const beatDuration = 60 / AudioEngine.settings.arpeggioTempo;
            const totalDuration = (patternNotes.length * beatDuration * 0.5 * 1000) + 500;

            setTimeout(() => {
                if (button) button.classList.remove('playing');
            }, totalDuration);
        } catch (error) {
            console.error('Failed to play arpeggio:', error);
            if (button) button.classList.remove('playing');
        }
    },

    // ==========================================
    // PROGRESSION BUILDER METHODS
    // ==========================================

    /**
     * Initialize the progression builder
     */
    initProgressionBuilder() {
        // Template selector
        const templateSelect = document.getElementById('template-select');
        templateSelect?.addEventListener('change', (e) => this.loadTemplate(e.target.value));

        // Beats per chord selector
        const beatsSelect = document.getElementById('beats-per-chord');
        beatsSelect?.addEventListener('change', (e) => {
            this.state.beatsPerChord = parseInt(e.target.value);
        });

        // Tempo slider
        const tempoSlider = document.getElementById('progression-tempo');
        const tempoDisplay = document.getElementById('progression-tempo-display');
        tempoSlider?.addEventListener('input', (e) => {
            this.state.progressionTempo = parseInt(e.target.value);
            if (tempoDisplay) tempoDisplay.textContent = `${e.target.value} BPM`;
        });

        // Control buttons
        document.getElementById('play-progression')?.addEventListener('click', () => this.playProgression());
        document.getElementById('stop-progression')?.addEventListener('click', () => this.stopProgression());
        document.getElementById('clear-progression')?.addEventListener('click', () => this.clearProgression());
        document.getElementById('add-slot')?.addEventListener('click', () => this.addProgressionSlot());
        document.getElementById('save-progression')?.addEventListener('click', () => this.promptSaveProgression());
        document.getElementById('random-progression')?.addEventListener('click', () => this.randomizeProgression());
        document.getElementById('generate-progression-tabs')?.addEventListener('click', () => this.generateProgressionTablature());

        // Initialize slot listeners
        this.initProgressionSlots();
    },

    /**
     * Initialize progression slot event listeners
     */
    initProgressionSlots() {
        const slots = document.querySelectorAll('.progression-slot');
        slots.forEach((slot, index) => {
            this.setupSlotListeners(slot, index);
        });
    },

    /**
     * Setup event listeners for a progression slot
     */
    setupSlotListeners(slot, index) {
        // Click to select slot (for adding chords)
        slot.addEventListener('click', (e) => {
            if (slot.classList.contains('empty')) {
                // Select this slot for adding
                document.querySelectorAll('.progression-slot').forEach(s => s.classList.remove('selected'));
                slot.classList.add('selected');
            }
        });

        // Drag and drop
        slot.setAttribute('draggable', 'false');

        slot.addEventListener('dragstart', (e) => {
            if (!slot.classList.contains('filled')) return;
            slot.classList.add('dragging');
            e.dataTransfer.setData('text/plain', index.toString());
            e.dataTransfer.effectAllowed = 'move';
        });

        slot.addEventListener('dragend', () => {
            slot.classList.remove('dragging');
            document.querySelectorAll('.progression-slot').forEach(s => s.classList.remove('drag-over'));
        });

        slot.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            if (!slot.classList.contains('dragging')) {
                slot.classList.add('drag-over');
            }
        });

        slot.addEventListener('dragleave', () => {
            slot.classList.remove('drag-over');
        });

        slot.addEventListener('drop', (e) => {
            e.preventDefault();
            slot.classList.remove('drag-over');
            const fromIndex = parseInt(e.dataTransfer.getData('text/plain'));
            const toIndex = index;
            if (fromIndex !== toIndex) {
                this.reorderProgression(fromIndex, toIndex);
            }
        });
    },

    /**
     * Add a chord to the progression
     */
    addToProgression(chord) {
        // Find the first empty slot or selected slot
        const slots = document.querySelectorAll('.progression-slot');
        let targetSlot = document.querySelector('.progression-slot.selected.empty');

        if (!targetSlot) {
            // Find first empty slot
            targetSlot = Array.from(slots).find(slot => slot.classList.contains('empty'));
        }

        if (!targetSlot) {
            // All slots full, add a new one
            this.addProgressionSlot();
            targetSlot = document.querySelector('.progression-slot.empty');
        }

        if (targetSlot) {
            const index = parseInt(targetSlot.dataset.index);
            this.state.progression[index] = {
                chordId: chord.id,
                name: chord.name,
                symbol: chord.symbol,
                root: chord.root
            };
            this.renderProgressionSlot(targetSlot, chord);
            targetSlot.classList.remove('selected');

            // Update Scale Builder
            this.updateScaleBuilder();
        }
    },

    /**
     * Render a filled progression slot
     */
    renderProgressionSlot(slot, chord, index) {
        slot.classList.remove('empty');
        slot.classList.add('filled');
        slot.setAttribute('draggable', 'true');

        const slotIndex = index !== undefined ? index : parseInt(slot.dataset.index);
        const progressionItem = this.state.progression[slotIndex];
        const romanNumeral = progressionItem?.romanNumeral || '';

        // Get available chords for this slot (chords that fit this degree)
        const availableChords = this.getAvailableChordsForSlot(slotIndex);

        let dropdownHTML = '';
        if (availableChords.length > 1) {
            dropdownHTML = `
                <select class="slot-chord-select" data-index="${slotIndex}">
                    ${availableChords.map(c =>
                        `<option value="${c.id}" ${c.id === chord.id ? 'selected' : ''}>${c.name} (${c.symbol})</option>`
                    ).join('')}
                </select>
            `;
        }

        slot.innerHTML = `
            ${romanNumeral ? `<span class="slot-roman-numeral">${romanNumeral}</span>` : ''}
            <span class="slot-chord-name">${chord.name}</span>
            <span class="slot-chord-symbol">${chord.symbol}</span>
            ${dropdownHTML}
            <button class="slot-remove" title="Remove chord">&times;</button>
        `;

        // Add remove button listener
        const removeBtn = slot.querySelector('.slot-remove');
        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.removeFromProgression(parseInt(slot.dataset.index));
        });

        // Add dropdown change listener
        const dropdown = slot.querySelector('.slot-chord-select');
        if (dropdown) {
            dropdown.addEventListener('change', (e) => {
                e.stopPropagation();
                this.changeProgressionChord(slotIndex, e.target.value);
            });
        }
    },

    /**
     * Get available chords for a progression slot based on its degree
     */
    getAvailableChordsForSlot(slotIndex) {
        const progressionItem = this.state.progression[slotIndex];
        if (!progressionItem || !progressionItem.degree) {
            // No template - return currently displayed chords
            return this.state.displayedChords.slice(0, 20);
        }

        // Get chords that match this scale degree
        const key = this.state.currentKey;
        const degree = progressionItem.degree;
        const templates = this.getProgressionTemplates();
        const template = templates[this.state.progressionTemplate];

        const isMinor = template?.minorDegrees?.includes(degree) || template?.rootMinor;

        // Get the root note for this degree
        const noteOrder = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        const majorIntervals = [0, 2, 4, 5, 7, 9, 11];
        const keyIndex = noteOrder.indexOf(key);
        const noteIndex = (keyIndex + majorIntervals[degree - 1]) % 12;
        const rootNote = noteOrder[noteIndex];

        // Find all chords with this root
        const allChords = getAllChords();
        const matchingChords = allChords.filter(chord => {
            if (chord.root !== rootNote) return false;
            if (isMinor && chord.quality !== 'minor' && chord.quality !== 'minor7') return false;
            if (!isMinor && chord.quality !== 'major' && chord.quality !== 'major7' && chord.quality !== 'dominant7') return false;
            return true;
        });

        return matchingChords.length > 0 ? matchingChords : [getChordById(progressionItem.chordId)].filter(Boolean);
    },

    /**
     * Change the chord in a progression slot
     */
    changeProgressionChord(slotIndex, newChordId) {
        const newChord = getChordById(newChordId);
        if (!newChord) return;

        // Update the progression state
        const existingItem = this.state.progression[slotIndex];
        this.state.progression[slotIndex] = {
            ...existingItem,
            chordId: newChord.id,
            name: newChord.name,
            symbol: newChord.symbol,
            root: newChord.root
        };

        // Re-render the slot
        const slot = document.querySelector(`.progression-slot[data-index="${slotIndex}"]`);
        if (slot) {
            this.renderProgressionSlot(slot, newChord, slotIndex);
        }

        // Update Scale Builder
        this.updateScaleBuilder();
    },

    /**
     * Remove a chord from the progression
     */
    removeFromProgression(index) {
        this.state.progression[index] = null;

        const slot = document.querySelector(`.progression-slot[data-index="${index}"]`);
        if (slot) {
            slot.classList.remove('filled');
            slot.classList.add('empty');
            slot.setAttribute('draggable', 'false');
            slot.innerHTML = '<span class="slot-placeholder">+</span>';
        }

        // Update Scale Builder
        this.updateScaleBuilder();
    },

    /**
     * Reorder progression slots via drag and drop
     */
    reorderProgression(fromIndex, toIndex) {
        const progression = this.state.progression;

        // Swap the items
        const temp = progression[fromIndex];
        progression[fromIndex] = progression[toIndex];
        progression[toIndex] = temp;

        // Re-render both slots
        this.renderAllProgressionSlots();
    },

    /**
     * Render all progression slots based on current state
     */
    renderAllProgressionSlots() {
        const slotsContainer = document.getElementById('progression-slots');
        const slots = slotsContainer.querySelectorAll('.progression-slot');

        slots.forEach((slot, index) => {
            const chordData = this.state.progression[index];

            if (chordData) {
                const chord = getChordById(chordData.chordId);
                if (chord) {
                    this.renderProgressionSlot(slot, chord);
                } else {
                    // Chord not found, render with saved data
                    slot.classList.remove('empty');
                    slot.classList.add('filled');
                    slot.setAttribute('draggable', 'true');
                    slot.innerHTML = `
                        <span class="slot-chord-name">${chordData.name}</span>
                        <span class="slot-chord-symbol">${chordData.symbol}</span>
                        <button class="slot-remove" title="Remove chord">&times;</button>
                    `;
                    const removeBtn = slot.querySelector('.slot-remove');
                    removeBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        this.removeFromProgression(index);
                    });
                }
            } else {
                slot.classList.remove('filled');
                slot.classList.add('empty');
                slot.setAttribute('draggable', 'false');
                slot.innerHTML = '<span class="slot-placeholder">+</span>';
            }
        });
    },

    /**
     * Add a new progression slot
     */
    addProgressionSlot() {
        const slotsContainer = document.getElementById('progression-slots');
        const currentSlots = slotsContainer.querySelectorAll('.progression-slot');
        const newIndex = currentSlots.length;

        const newSlot = document.createElement('div');
        newSlot.className = 'progression-slot empty';
        newSlot.dataset.index = newIndex;
        newSlot.innerHTML = '<span class="slot-placeholder">+</span>';

        slotsContainer.appendChild(newSlot);
        this.setupSlotListeners(newSlot, newIndex);
    },

    /**
     * Clear the entire progression
     */
    clearProgression() {
        this.stopProgression();
        this.state.progression = [];

        const slotsContainer = document.getElementById('progression-slots');
        slotsContainer.innerHTML = '';

        // Re-create 4 empty slots
        for (let i = 0; i < 4; i++) {
            const slot = document.createElement('div');
            slot.className = 'progression-slot empty';
            slot.dataset.index = i;
            slot.innerHTML = '<span class="slot-placeholder">+</span>';
            slotsContainer.appendChild(slot);
            this.setupSlotListeners(slot, i);
        }

        // Reset template selector
        const templateSelect = document.getElementById('template-select');
        if (templateSelect) templateSelect.value = '';

        // Hide tablature
        document.getElementById('progression-tablature')?.classList.add('hidden');

        // Update Scale Builder
        this.updateScaleBuilder();
    },

    /**
     * Generate tablature for the progression
     */
    generateProgressionTablature() {
        if (this.state.progression.length === 0) {
            alert('Add some chords to the progression first!');
            return;
        }

        const tabContainer = document.getElementById('progression-tablature');
        const tabContent = document.getElementById('progression-tab-content');

        if (!tabContainer || !tabContent) return;

        // Generate combined tablature
        const stringNames = ['e', 'B', 'G', 'D', 'A', 'E'];
        const strings = [[], [], [], [], [], []];
        const separator = '--|';

        this.state.progression.forEach((chordData, chordIndex) => {
            const chord = getChordById(chordData.chordId);
            if (!chord) return;

            // Add separator between chords (except first)
            if (chordIndex > 0) {
                for (let i = 0; i < 6; i++) {
                    strings[i].push(separator);
                }
            }

            // Build tab for this chord
            for (let stringIdx = 0; stringIdx < 6; stringIdx++) {
                const fret = chord.frets[stringIdx];
                if (fret === -1) {
                    strings[stringIdx].push('--');
                } else {
                    strings[stringIdx].push(fret.toString().padStart(2, '-'));
                }
            }
        });

        // Build tablature string with chord labels
        let tabString = '';

        // Add chord names row
        tabString += '   ';
        this.state.progression.forEach((chordData, idx) => {
            const chord = getChordById(chordData.chordId);
            if (chord) {
                const label = chord.symbol.padEnd(5, ' ');
                tabString += (idx > 0 ? '   ' : '') + label;
            }
        });
        tabString += '\n';

        stringNames.forEach((name, idx) => {
            tabString += `${name}|${strings[idx].join('-')}|\n`;
        });

        tabContent.textContent = tabString;
        tabContainer.classList.remove('hidden');
    },

    /**
     * Load a progression template
     */
    loadTemplate(templateId, randomize = false) {
        if (!templateId) return;

        // Clear current progression first
        this.clearProgression();

        // Get template chords based on current key
        const key = this.state.currentKey;
        const templates = this.getProgressionTemplates();
        const template = templates[templateId];

        if (!template) return;

        // Store the template info
        this.state.progressionTemplate = templateId;
        this.state.progressionDegrees = template.degrees.map((degree, idx) => {
            const isMinor = template.minorDegrees?.includes(degree) || template.rootMinor;
            const isFlat = template.flatDegrees?.includes(degree);
            return this.getDegreeRomanNumeral(degree, isMinor, isFlat);
        });

        // Get scale degrees and find matching chords
        const scaleChords = this.getChordsForKey(key, template.degrees, template, randomize);

        scaleChords.forEach((chordInfo, index) => {
            if (chordInfo && index < document.querySelectorAll('.progression-slot').length) {
                const slot = document.querySelector(`.progression-slot[data-index="${index}"]`);
                if (slot) {
                    this.state.progression[index] = chordInfo;
                    this.state.progression[index].degree = template.degrees[index];
                    this.state.progression[index].romanNumeral = this.state.progressionDegrees[index];
                    const chord = getChordById(chordInfo.chordId);
                    if (chord) {
                        this.renderProgressionSlot(slot, chord, index);
                    }
                }
            } else if (chordInfo) {
                // Need to add more slots
                this.addProgressionSlot();
                const slot = document.querySelector(`.progression-slot[data-index="${index}"]`);
                if (slot) {
                    this.state.progression[index] = chordInfo;
                    this.state.progression[index].degree = template.degrees[index];
                    this.state.progression[index].romanNumeral = this.state.progressionDegrees[index];
                    const chord = getChordById(chordInfo.chordId);
                    if (chord) {
                        this.renderProgressionSlot(slot, chord, index);
                    }
                }
            }
        });

        // Update Scale Builder after loading template
        this.updateScaleBuilder();
    },

    /**
     * Get roman numeral for a scale degree
     */
    getDegreeRomanNumeral(degree, isMinor = false, isFlat = false) {
        const numerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];
        let numeral = numerals[degree - 1] || degree.toString();
        if (isFlat) numeral = 'b' + numeral;
        if (isMinor) numeral = numeral.toLowerCase();
        return numeral;
    },

    /**
     * Randomize progression with current template
     */
    randomizeProgression() {
        const templateId = this.state.progressionTemplate || document.getElementById('template-select')?.value;
        if (templateId) {
            this.loadTemplate(templateId, true);
        }
    },

    /**
     * Get progression template definitions
     */
    getProgressionTemplates() {
        return {
            // Basic Templates
            'i-iv-v-i': {
                name: 'I - IV - V - I (Basic)',
                degrees: [1, 4, 5, 1],
                category: 'basic'
            },
            'i-iv-v': {
                name: 'I - IV - V (Three Chord)',
                degrees: [1, 4, 5],
                category: 'basic'
            },
            'i-v-vi-iv': {
                name: 'I - V - vi - IV (Pop)',
                degrees: [1, 5, 6, 4],
                minorDegrees: [6],
                category: 'pop'
            },
            'i-vi-iv-v': {
                name: 'I - vi - IV - V (50s)',
                degrees: [1, 6, 4, 5],
                minorDegrees: [6],
                category: 'pop'
            },
            'vi-iv-i-v': {
                name: 'vi - IV - I - V (Sad Pop)',
                degrees: [6, 4, 1, 5],
                minorDegrees: [6],
                category: 'pop'
            },
            // Country/Folk Templates
            'i-iv-i-v': {
                name: 'I - IV - I - V (Country)',
                degrees: [1, 4, 1, 5],
                category: 'country'
            },
            'i-v-i-iv': {
                name: 'I - V - I - IV (Folk)',
                degrees: [1, 5, 1, 4],
                category: 'folk'
            },
            // Jazz Templates
            'ii-v-i': {
                name: 'ii - V - I (Jazz)',
                degrees: [2, 5, 1],
                minorDegrees: [2],
                category: 'jazz'
            },
            'i-vi-ii-v': {
                name: 'I - vi - ii - V (Rhythm Changes)',
                degrees: [1, 6, 2, 5],
                minorDegrees: [6, 2],
                category: 'jazz'
            },
            'iii-vi-ii-v': {
                name: 'iii - vi - ii - V (Jazz Turnaround)',
                degrees: [3, 6, 2, 5],
                minorDegrees: [3, 6, 2],
                category: 'jazz'
            },
            // Blues Templates
            '12-bar-blues': {
                name: '12-Bar Blues',
                degrees: [1, 1, 1, 1, 4, 4, 1, 1, 5, 4, 1, 5],
                category: 'blues'
            },
            '8-bar-blues': {
                name: '8-Bar Blues',
                degrees: [1, 5, 4, 4, 1, 5, 1, 5],
                category: 'blues'
            },
            // Rock Templates
            'i-bvii-iv': {
                name: 'I - bVII - IV (Rock)',
                degrees: [1, 7, 4],
                flatDegrees: [7],
                category: 'rock'
            },
            'i-iii-iv': {
                name: 'I - iii - IV (Rock Ballad)',
                degrees: [1, 3, 4],
                minorDegrees: [3],
                category: 'rock'
            },
            // Modal Templates
            'i-bvii-bvi-bvii': {
                name: 'i - bVII - bVI - bVII (Aeolian)',
                degrees: [1, 7, 6, 7],
                flatDegrees: [7, 6],
                rootMinor: true,
                category: 'modal'
            },
            'i-iv-bvii-i': {
                name: 'i - IV - bVII - i (Dorian)',
                degrees: [1, 4, 7, 1],
                flatDegrees: [7],
                rootMinor: true,
                category: 'modal'
            },
            // Emotional Templates
            'i-v-iv-i': {
                name: 'I - V - IV - I (Triumphant)',
                degrees: [1, 5, 4, 1],
                category: 'emotional'
            },
            'vi-iv-v-i': {
                name: 'vi - IV - V - I (Hopeful)',
                degrees: [6, 4, 5, 1],
                minorDegrees: [6],
                category: 'emotional'
            },
            'i-iv-vi-v': {
                name: 'I - IV - vi - V (Uplifting)',
                degrees: [1, 4, 6, 5],
                minorDegrees: [6],
                category: 'emotional'
            }
        };
    },

    /**
     * Get chords for a key based on scale degrees
     */
    getChordsForKey(key, degrees, template = null, randomize = false) {
        // Major scale notes
        const noteOrder = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        const majorIntervals = [0, 2, 4, 5, 7, 9, 11]; // Intervals for major scale

        const keyIndex = noteOrder.indexOf(key);
        if (keyIndex === -1) return [];

        // Get scale notes
        const scaleNotes = majorIntervals.map(interval =>
            noteOrder[(keyIndex + interval) % 12]
        );

        // Map degrees to chords
        return degrees.map((degree, idx) => {
            const noteIndex = (degree - 1) % 7;
            const root = scaleNotes[noteIndex];

            // Determine if this degree should be minor
            // Check template first, then default scale rules
            let isMinor = false;
            if (template?.minorDegrees?.includes(degree)) {
                isMinor = true;
            } else if (template?.rootMinor && degree === 1) {
                isMinor = true;
            } else {
                // Default: in major scale ii, iii, vi are minor
                const defaultMinorDegrees = [2, 3, 6];
                isMinor = defaultMinorDegrees.includes(degree);
            }

            // Find all matching chords for this root
            const allChords = getAllChords();
            let matchingChords = [];

            if (isMinor) {
                // Look for minor chords
                matchingChords = allChords.filter(c =>
                    c.root === root && (c.quality === 'minor' || c.quality === 'minor7')
                );
            } else {
                // Look for major/dominant chords
                matchingChords = allChords.filter(c =>
                    c.root === root && (c.quality === 'major' || c.quality === 'dominant7' || c.quality === 'major7')
                );
            }

            // Fallback: find any chord with this root
            if (matchingChords.length === 0) {
                matchingChords = allChords.filter(c => c.root === root);
            }

            if (matchingChords.length === 0) {
                return null;
            }

            // Select chord - random or first (easiest)
            let chord;
            if (randomize && matchingChords.length > 1) {
                chord = matchingChords[Math.floor(Math.random() * matchingChords.length)];
            } else {
                // Sort by difficulty and pick the easiest
                matchingChords.sort((a, b) => a.difficulty - b.difficulty);
                chord = matchingChords[0];
            }

            return {
                chordId: chord.id,
                name: chord.name,
                symbol: chord.symbol,
                root: chord.root
            };
        });
    },

    /**
     * Play the entire progression
     */
    async playProgression() {
        if (this.state.progressionPlaying) return;

        // Get filled slots
        const filledChords = this.state.progression.filter(c => c !== null && c !== undefined);
        if (filledChords.length === 0) return;

        await AudioEngine.init();
        await AudioEngine.resume();

        this.state.progressionPlaying = true;
        this.state.progressionPlaybackIndex = 0;

        // Update play button state
        const playBtn = document.getElementById('play-progression');
        if (playBtn) playBtn.classList.add('playing');

        this.playNextInProgression();
    },

    /**
     * Play the next chord in the progression
     */
    playNextInProgression() {
        if (!this.state.progressionPlaying) return;

        // Find the next filled slot
        const slots = document.querySelectorAll('.progression-slot');
        let currentIndex = this.state.progressionPlaybackIndex;

        // Find next filled slot
        while (currentIndex < this.state.progression.length &&
               (!this.state.progression[currentIndex])) {
            currentIndex++;
        }

        if (currentIndex >= this.state.progression.length) {
            // Loop back to start
            currentIndex = 0;
            while (currentIndex < this.state.progression.length &&
                   (!this.state.progression[currentIndex])) {
                currentIndex++;
            }
        }

        const chordData = this.state.progression[currentIndex];
        if (!chordData) {
            this.stopProgression();
            return;
        }

        const chord = getChordById(chordData.chordId);
        if (!chord) {
            this.stopProgression();
            return;
        }

        // Highlight current slot
        slots.forEach(s => s.classList.remove('playing'));
        const currentSlot = document.querySelector(`.progression-slot[data-index="${currentIndex}"]`);
        if (currentSlot) currentSlot.classList.add('playing');

        // Play the chord
        AudioEngine.playChord(chord, 'down');

        // Calculate timing for next chord
        const beatDuration = 60 / this.state.progressionTempo; // seconds per beat
        const chordDuration = beatDuration * this.state.beatsPerChord * 1000; // ms

        // Move to next index
        this.state.progressionPlaybackIndex = currentIndex + 1;

        // Schedule next chord
        this.state.progressionPlaybackTimer = setTimeout(() => {
            this.playNextInProgression();
        }, chordDuration);
    },

    /**
     * Stop progression playback
     */
    stopProgression() {
        this.state.progressionPlaying = false;

        if (this.state.progressionPlaybackTimer) {
            clearTimeout(this.state.progressionPlaybackTimer);
            this.state.progressionPlaybackTimer = null;
        }

        // Remove playing state from all slots
        document.querySelectorAll('.progression-slot').forEach(s => s.classList.remove('playing'));

        // Update play button state
        const playBtn = document.getElementById('play-progression');
        if (playBtn) playBtn.classList.remove('playing');

        // Stop audio
        AudioEngine.stop();
    },

    /**
     * Prompt user to save progression with a name
     */
    promptSaveProgression() {
        const filledChords = this.state.progression.filter(c => c !== null && c !== undefined);
        if (filledChords.length === 0) {
            alert('Add some chords to the progression first!');
            return;
        }

        const name = prompt('Enter a name for this progression:', `Progression ${this.state.savedProgressions.length + 1}`);
        if (name) {
            this.saveProgression(name);
        }
    },

    /**
     * Save progression to localStorage
     */
    saveProgression(name) {
        const progression = {
            id: Date.now().toString(),
            name: name || `Progression ${this.state.savedProgressions.length + 1}`,
            chords: this.state.progression.filter(c => c !== null),
            beatsPerChord: this.state.beatsPerChord,
            tempo: this.state.progressionTempo,
            key: this.state.currentKey,
            createdAt: new Date().toISOString()
        };

        this.state.savedProgressions.push(progression);
        localStorage.setItem('savedProgressions', JSON.stringify(this.state.savedProgressions));

        this.renderSavedProgressions();
        this.updatePracticeProgressionDropdown();
        return progression;
    },

    /**
     * Load saved progressions from localStorage
     */
    loadSavedProgressions() {
        try {
            const saved = localStorage.getItem('savedProgressions');
            if (saved) {
                this.state.savedProgressions = JSON.parse(saved);
                this.renderSavedProgressions();
                this.updatePracticeProgressionDropdown();
            }
        } catch (error) {
            console.error('Failed to load saved progressions:', error);
            this.state.savedProgressions = [];
        }
    },

    /**
     * Load a saved progression
     */
    loadSavedProgression(progressionId) {
        const saved = this.state.savedProgressions.find(p => p.id === progressionId);
        if (!saved) return;

        this.clearProgression();

        // Restore settings
        this.state.beatsPerChord = saved.beatsPerChord || 4;
        this.state.progressionTempo = saved.tempo || 100;

        // Update UI
        const beatsSelect = document.getElementById('beats-per-chord');
        if (beatsSelect) beatsSelect.value = this.state.beatsPerChord;

        const tempoSlider = document.getElementById('progression-tempo');
        const tempoDisplay = document.getElementById('progression-tempo-display');
        if (tempoSlider) tempoSlider.value = this.state.progressionTempo;
        if (tempoDisplay) tempoDisplay.textContent = `${this.state.progressionTempo} BPM`;

        // Load chords into slots
        saved.chords.forEach((chordData, index) => {
            if (index >= document.querySelectorAll('.progression-slot').length) {
                this.addProgressionSlot();
            }

            const slot = document.querySelector(`.progression-slot[data-index="${index}"]`);
            if (slot && chordData) {
                this.state.progression[index] = chordData;
                const chord = getChordById(chordData.chordId);
                if (chord) {
                    this.renderProgressionSlot(slot, chord);
                }
            }
        });
    },

    /**
     * Delete a saved progression
     */
    deleteSavedProgression(progressionId) {
        this.state.savedProgressions = this.state.savedProgressions.filter(p => p.id !== progressionId);
        localStorage.setItem('savedProgressions', JSON.stringify(this.state.savedProgressions));
        this.renderSavedProgressions();
        this.updatePracticeProgressionDropdown();
    },

    /**
     * Render saved progressions list
     */
    renderSavedProgressions() {
        const container = document.getElementById('saved-progressions');
        const list = document.getElementById('saved-list');

        if (!container || !list) return;

        if (this.state.savedProgressions.length === 0) {
            container.classList.add('hidden');
            return;
        }

        container.classList.remove('hidden');
        list.innerHTML = '';

        this.state.savedProgressions.forEach(prog => {
            const item = document.createElement('div');
            item.className = 'saved-item';

            const chordNames = prog.chords.map(c => c.name).join(' → ');

            item.innerHTML = `
                <div class="saved-item-info">
                    <span class="saved-item-name">${prog.name}</span>
                    <span class="saved-item-chords">${chordNames}</span>
                </div>
                <div class="saved-item-actions">
                    <button class="btn-small load-btn" title="Load">Load</button>
                    <button class="btn-small delete-btn" title="Delete">&times;</button>
                </div>
            `;

            item.querySelector('.load-btn').addEventListener('click', () => {
                this.loadSavedProgression(prog.id);
            });

            item.querySelector('.delete-btn').addEventListener('click', () => {
                this.deleteSavedProgression(prog.id);
            });

            list.appendChild(item);
        });
    },

    // ==========================================
    // PRACTICE TOOLS METHODS
    // ==========================================

    /**
     * Initialize practice tools
     */
    initPracticeTools() {
        // Metronome controls
        document.getElementById('metronome-start')?.addEventListener('click', () => this.toggleMetronome());
        document.getElementById('metronome-tempo')?.addEventListener('input', (e) => this.setMetronomeTempo(parseInt(e.target.value)));
        document.getElementById('tempo-decrease')?.addEventListener('click', () => this.adjustMetronomeTempo(-5));
        document.getElementById('tempo-increase')?.addEventListener('click', () => this.adjustMetronomeTempo(5));
        document.getElementById('time-signature')?.addEventListener('change', (e) => this.setTimeSignature(parseInt(e.target.value)));
        document.getElementById('accent-toggle')?.addEventListener('change', (e) => {
            this.state.metronome.accentFirstBeat = e.target.checked;
        });
        document.getElementById('tap-tempo')?.addEventListener('click', () => this.handleTapTempo());

        // Drill controls
        document.getElementById('drill-start')?.addEventListener('click', () => this.startDrill());
        document.getElementById('drill-stop')?.addEventListener('click', () => this.stopDrill());
        document.getElementById('drill-interval')?.addEventListener('change', (e) => {
            this.state.drill.interval = parseInt(e.target.value);
        });
        document.getElementById('drill-difficulty')?.addEventListener('change', (e) => {
            this.state.drill.difficulty = e.target.value;
        });
        document.getElementById('drill-with-sound')?.addEventListener('change', (e) => {
            this.state.drill.withSound = e.target.checked;
        });

        // Progression practice controls
        document.getElementById('practice-progression-select')?.addEventListener('change', (e) => {
            this.state.practice.progressionId = e.target.value;
            const startBtn = document.getElementById('practice-start');
            if (startBtn) startBtn.disabled = !e.target.value;
        });
        document.getElementById('practice-loop')?.addEventListener('change', (e) => {
            this.state.practice.loop = e.target.checked;
        });
        document.getElementById('practice-start')?.addEventListener('click', () => this.startProgressionPractice());
        document.getElementById('practice-stop')?.addEventListener('click', () => this.stopProgressionPractice());

        // Update beat indicators based on time signature
        this.updateBeatIndicators();

        // Populate progression practice dropdown
        this.updatePracticeProgressionDropdown();
    },

    /**
     * Update beat indicators based on time signature
     */
    updateBeatIndicators() {
        const container = document.getElementById('metronome-beats');
        if (!container) return;

        container.innerHTML = '';
        for (let i = 1; i <= this.state.metronome.timeSignature; i++) {
            const indicator = document.createElement('span');
            indicator.className = 'beat-indicator';
            indicator.dataset.beat = i;
            container.appendChild(indicator);
        }
    },

    /**
     * Toggle metronome on/off
     */
    async toggleMetronome() {
        if (this.state.metronome.playing) {
            this.stopMetronome();
        } else {
            await this.startMetronome();
        }
    },

    /**
     * Start the metronome
     */
    async startMetronome() {
        await AudioEngine.init();
        await AudioEngine.resume();

        this.state.metronome.playing = true;
        this.state.metronome.currentBeat = 0;

        // Start session timer
        this.startSessionTimer();

        // Update button
        const btn = document.getElementById('metronome-start');
        if (btn) {
            btn.classList.add('playing');
            btn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="6" y="6" width="12" height="12"></rect>
                </svg>
                Stop
            `;
        }

        // Calculate interval
        const beatInterval = 60000 / this.state.metronome.tempo;

        // Play first beat immediately
        this.playMetronomeBeat();

        // Set up interval for subsequent beats
        this.state.metronome.intervalId = setInterval(() => {
            this.playMetronomeBeat();
        }, beatInterval);
    },

    /**
     * Stop the metronome
     */
    stopMetronome() {
        this.state.metronome.playing = false;

        if (this.state.metronome.intervalId) {
            clearInterval(this.state.metronome.intervalId);
            this.state.metronome.intervalId = null;
        }

        // Clear beat indicators
        document.querySelectorAll('.beat-indicator').forEach(ind => {
            ind.classList.remove('active', 'accent');
        });

        // Update button
        const btn = document.getElementById('metronome-start');
        if (btn) {
            btn.classList.remove('playing');
            btn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                Start
            `;
        }
    },

    /**
     * Play a metronome beat
     */
    playMetronomeBeat() {
        this.state.metronome.currentBeat++;
        if (this.state.metronome.currentBeat > this.state.metronome.timeSignature) {
            this.state.metronome.currentBeat = 1;
        }

        const isAccent = this.state.metronome.currentBeat === 1 && this.state.metronome.accentFirstBeat;

        // Play click sound
        this.playMetronomeClick(isAccent);

        // Update visual indicators
        document.querySelectorAll('.beat-indicator').forEach(ind => {
            ind.classList.remove('active', 'accent');
        });

        const currentIndicator = document.querySelector(`.beat-indicator[data-beat="${this.state.metronome.currentBeat}"]`);
        if (currentIndicator) {
            currentIndicator.classList.add('active');
            if (isAccent) currentIndicator.classList.add('accent');
        }
    },

    /**
     * Play metronome click sound
     */
    playMetronomeClick(isAccent = false) {
        if (!AudioEngine.context) return;

        const ctx = AudioEngine.context;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Higher frequency for accent
        osc.frequency.value = isAccent ? 1000 : 800;
        osc.type = 'sine';

        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

        osc.connect(gain);
        gain.connect(AudioEngine.masterGain);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.05);
    },

    /**
     * Set metronome tempo
     */
    setMetronomeTempo(tempo) {
        tempo = Math.max(40, Math.min(220, tempo));
        this.state.metronome.tempo = tempo;

        // Update displays
        const display = document.getElementById('tempo-display-large');
        if (display) display.textContent = tempo;

        const slider = document.getElementById('metronome-tempo');
        if (slider) slider.value = tempo;

        // Restart metronome if playing to apply new tempo
        if (this.state.metronome.playing) {
            this.stopMetronome();
            this.startMetronome();
        }
    },

    /**
     * Adjust metronome tempo by delta
     */
    adjustMetronomeTempo(delta) {
        this.setMetronomeTempo(this.state.metronome.tempo + delta);
    },

    /**
     * Set time signature
     */
    setTimeSignature(beats) {
        this.state.metronome.timeSignature = beats;
        this.updateBeatIndicators();

        // Restart metronome if playing
        if (this.state.metronome.playing) {
            this.stopMetronome();
            this.startMetronome();
        }
    },

    /**
     * Handle tap tempo
     */
    handleTapTempo() {
        const now = Date.now();
        const timeSinceLastTap = now - this.state.tapTempo.lastTap;

        // Reset if more than 2 seconds since last tap
        if (timeSinceLastTap > 2000) {
            this.state.tapTempo.taps = [];
        }

        this.state.tapTempo.taps.push(now);
        this.state.tapTempo.lastTap = now;

        // Keep only last 4 taps
        if (this.state.tapTempo.taps.length > 4) {
            this.state.tapTempo.taps.shift();
        }

        // Calculate average if we have at least 2 taps
        if (this.state.tapTempo.taps.length >= 2) {
            const intervals = [];
            for (let i = 1; i < this.state.tapTempo.taps.length; i++) {
                intervals.push(this.state.tapTempo.taps[i] - this.state.tapTempo.taps[i - 1]);
            }
            const avgInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length;
            const bpm = Math.round(60000 / avgInterval);
            this.setMetronomeTempo(bpm);
        }
    },

    /**
     * Start chord drill
     */
    async startDrill() {
        await AudioEngine.init();
        await AudioEngine.resume();

        this.state.drill.active = true;
        this.state.drill.totalChords = 0;
        this.state.drill.startTime = Date.now();

        // Start session timer
        this.startSessionTimer();

        // Show display, hide settings
        document.getElementById('drill-display')?.classList.remove('hidden');
        document.getElementById('drill-settings')?.classList.add('hidden');
        document.getElementById('drill-start')?.classList.add('hidden');
        document.getElementById('drill-stop')?.classList.remove('hidden');
        document.getElementById('drill-results')?.classList.add('hidden');

        // Get first chord
        this.nextDrillChord();
    },

    /**
     * Stop chord drill
     */
    stopDrill() {
        this.state.drill.active = false;

        if (this.state.drill.intervalId) {
            clearInterval(this.state.drill.intervalId);
            this.state.drill.intervalId = null;
        }

        if (this.state.drill.countdownId) {
            clearInterval(this.state.drill.countdownId);
            this.state.drill.countdownId = null;
        }

        // Show results
        const duration = Math.floor((Date.now() - this.state.drill.startTime) / 1000);
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;

        document.getElementById('drill-total-chords').textContent = this.state.drill.totalChords;
        document.getElementById('drill-duration').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

        // Show settings, hide display
        document.getElementById('drill-display')?.classList.add('hidden');
        document.getElementById('drill-settings')?.classList.remove('hidden');
        document.getElementById('drill-start')?.classList.remove('hidden');
        document.getElementById('drill-stop')?.classList.add('hidden');
        document.getElementById('drill-results')?.classList.remove('hidden');
    },

    /**
     * Get next chord for drill
     */
    nextDrillChord() {
        if (!this.state.drill.active) return;

        // Get appropriate chords based on difficulty
        let chords = getAllChords();

        if (this.state.drill.difficulty === 'beginner') {
            chords = chords.filter(c => c.categories.isOpenChord && c.difficulty <= 1);
        } else if (this.state.drill.difficulty === 'intermediate') {
            chords = chords.filter(c => c.difficulty <= 2);
        }
        // Advanced uses all chords

        // Get unique chords by name
        const uniqueChords = [];
        const seen = new Set();
        chords.forEach(c => {
            const key = `${c.name}_${c.symbol}`;
            if (!seen.has(key)) {
                seen.add(key);
                uniqueChords.push(c);
            }
        });

        // Pick random chord (different from current)
        let newChord;
        do {
            newChord = uniqueChords[Math.floor(Math.random() * uniqueChords.length)];
        } while (this.state.drill.currentChord && newChord.id === this.state.drill.currentChord.id && uniqueChords.length > 1);

        // Move next to current
        if (this.state.drill.nextChord) {
            this.state.drill.currentChord = this.state.drill.nextChord;
        } else {
            this.state.drill.currentChord = newChord;
            newChord = uniqueChords[Math.floor(Math.random() * uniqueChords.length)];
        }
        this.state.drill.nextChord = newChord;

        this.state.drill.totalChords++;
        this.state.session.chordsPracticed++;
        this.updateSessionStats();

        // Update display
        const currentChordEl = document.getElementById('drill-current-chord');
        if (currentChordEl) {
            currentChordEl.querySelector('.drill-chord-name').textContent = this.state.drill.currentChord.name;
            currentChordEl.querySelector('.drill-chord-symbol').textContent = this.state.drill.currentChord.symbol || 'Major';
        }

        const nextChordEl = document.getElementById('drill-next-chord');
        if (nextChordEl) {
            nextChordEl.querySelector('.next-chord-name').textContent = this.state.drill.nextChord.name;
        }

        // Play chord sound if enabled
        if (this.state.drill.withSound) {
            AudioEngine.playChord(this.state.drill.currentChord, 'down');
        }

        // Start countdown
        this.startDrillCountdown();
    },

    /**
     * Start drill countdown timer
     */
    startDrillCountdown() {
        const interval = this.state.drill.interval;
        let remaining = interval;

        const countdownText = document.getElementById('countdown-text');
        const countdownProgress = document.getElementById('countdown-progress');
        const circumference = 2 * Math.PI * 45; // r=45

        // Update immediately
        if (countdownText) countdownText.textContent = remaining;
        if (countdownProgress) countdownProgress.style.strokeDashoffset = '0';

        // Clear existing countdown
        if (this.state.drill.countdownId) {
            clearInterval(this.state.drill.countdownId);
        }

        const updateInterval = 100; // Update every 100ms for smooth animation
        let elapsed = 0;

        this.state.drill.countdownId = setInterval(() => {
            if (!this.state.drill.active) return;

            elapsed += updateInterval;
            const progress = elapsed / (interval * 1000);
            remaining = Math.ceil(interval - (elapsed / 1000));

            if (countdownText) countdownText.textContent = Math.max(0, remaining);
            if (countdownProgress) {
                countdownProgress.style.strokeDashoffset = (progress * circumference).toString();
            }

            if (elapsed >= interval * 1000) {
                this.nextDrillChord();
            }
        }, updateInterval);
    },

    /**
     * Start progression practice
     */
    async startProgressionPractice() {
        const progressionId = this.state.practice.progressionId;
        const progression = this.state.savedProgressions.find(p => p.id === progressionId);

        if (!progression || progression.chords.length === 0) return;

        await AudioEngine.init();
        await AudioEngine.resume();

        this.state.practice.active = true;
        this.state.practice.currentIndex = 0;
        this.state.practice.currentBeat = 0;

        // Start session timer
        this.startSessionTimer();

        // Show display
        document.getElementById('progression-practice-display')?.classList.remove('hidden');
        document.getElementById('practice-start')?.classList.add('hidden');
        document.getElementById('practice-stop')?.classList.remove('hidden');

        // Set tempo from metronome
        const beatInterval = 60000 / this.state.metronome.tempo;

        // Play first chord
        this.playPracticeChord(progression);

        // Set up interval
        this.state.practice.intervalId = setInterval(() => {
            this.advancePracticeBeat(progression);
        }, beatInterval);
    },

    /**
     * Stop progression practice
     */
    stopProgressionPractice() {
        this.state.practice.active = false;

        if (this.state.practice.intervalId) {
            clearInterval(this.state.practice.intervalId);
            this.state.practice.intervalId = null;
        }

        document.getElementById('progression-practice-display')?.classList.add('hidden');
        document.getElementById('practice-start')?.classList.remove('hidden');
        document.getElementById('practice-stop')?.classList.add('hidden');
    },

    /**
     * Play current practice chord
     */
    playPracticeChord(progression) {
        const chordData = progression.chords[this.state.practice.currentIndex];
        if (!chordData) return;

        const chord = getChordById(chordData.chordId);

        // Update display
        const display = document.getElementById('practice-chord-display');
        if (display) {
            display.querySelector('.practice-chord-name').textContent = chordData.name;
            display.querySelector('.practice-chord-symbol').textContent = chordData.symbol || 'Major';
        }

        // Play chord
        if (chord) {
            AudioEngine.playChord(chord, 'down');
        }

        // Update stats
        this.state.session.chordsPracticed++;
        this.updateSessionStats();
    },

    /**
     * Advance practice beat
     */
    advancePracticeBeat(progression) {
        if (!this.state.practice.active) return;

        this.state.practice.currentBeat++;
        const beatsPerChord = progression.beatsPerChord || 4;

        // Update progress bar
        const progress = (this.state.practice.currentBeat / beatsPerChord) * 100;
        const progressBar = document.getElementById('practice-progress-bar');
        if (progressBar) progressBar.style.width = `${progress}%`;

        // Update beat counter
        const counter = document.getElementById('practice-beat-counter');
        if (counter) counter.textContent = `Beat ${this.state.practice.currentBeat} of ${beatsPerChord}`;

        // Check if time for next chord
        if (this.state.practice.currentBeat >= beatsPerChord) {
            this.state.practice.currentBeat = 0;
            this.state.practice.currentIndex++;

            // Check if end of progression
            if (this.state.practice.currentIndex >= progression.chords.length) {
                if (this.state.practice.loop) {
                    this.state.practice.currentIndex = 0;
                } else {
                    this.stopProgressionPractice();
                    return;
                }
            }

            this.playPracticeChord(progression);
        }
    },

    /**
     * Update practice progression dropdown
     */
    updatePracticeProgressionDropdown() {
        const select = document.getElementById('practice-progression-select');
        if (!select) return;

        // Clear existing options except first
        while (select.options.length > 1) {
            select.remove(1);
        }

        // Add saved progressions
        this.state.savedProgressions.forEach(prog => {
            const option = document.createElement('option');
            option.value = prog.id;
            option.textContent = prog.name;
            select.appendChild(option);
        });
    },

    /**
     * Start session timer
     */
    startSessionTimer() {
        if (!this.state.session.startTime) {
            this.state.session.startTime = Date.now();
        }

        if (this.state.session.timerInterval) return;

        this.state.session.timerInterval = setInterval(() => {
            this.updateSessionStats();
        }, 1000);
    },

    /**
     * Update session statistics display
     */
    updateSessionStats() {
        // Update time
        if (this.state.session.startTime) {
            const elapsed = Math.floor((Date.now() - this.state.session.startTime) / 1000);
            const minutes = Math.floor(elapsed / 60);
            const seconds = elapsed % 60;
            const timeDisplay = document.getElementById('session-time-value');
            if (timeDisplay) timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }

        // Update chords practiced
        const chordsDisplay = document.getElementById('chords-practiced-value');
        if (chordsDisplay) {
            chordsDisplay.textContent = `${this.state.session.chordsPracticed} chord${this.state.session.chordsPracticed !== 1 ? 's' : ''}`;
        }
    },

    // ==========================================
    // SETTINGS METHODS
    // ==========================================

    /**
     * Load settings from localStorage
     */
    loadSettings() {
        try {
            const saved = localStorage.getItem('guitarExplorerSettings');
            if (saved) {
                const settings = JSON.parse(saved);
                this.state.settings = { ...this.state.settings, ...settings };
            }
        } catch (error) {
            console.error('Failed to load settings:', error);
        }

        // Apply loaded settings
        this.applySettings();
    },

    /**
     * Save settings to localStorage
     */
    saveSettings() {
        try {
            localStorage.setItem('guitarExplorerSettings', JSON.stringify(this.state.settings));
        } catch (error) {
            console.error('Failed to save settings:', error);
        }
    },

    /**
     * Apply all settings
     */
    applySettings() {
        // Apply tab visibility
        const chordGrid = document.getElementById('chord-grid');
        if (chordGrid) {
            chordGrid.classList.toggle('hide-tab', !this.state.settings.showTab);
            chordGrid.classList.toggle('hide-finger-info', !this.state.settings.showFingerInfo);
        }

        // Apply arpeggio visibility
        const arpeggioContent = document.getElementById('arpeggio-content');
        if (arpeggioContent) {
            arpeggioContent.classList.toggle('hide-arpeggio-tab', !this.state.settings.showArpeggioTab);
            arpeggioContent.classList.toggle('hide-arpeggio-tips', !this.state.settings.showArpeggioTips);
        }

        // Apply dark theme
        document.body.classList.toggle('dark-theme', this.state.settings.darkTheme);

        // Apply left-handed mode
        document.body.classList.toggle('left-handed', this.state.settings.leftHanded);

        // Apply newspaper mode
        document.body.classList.toggle('newspaper-mode', this.state.settings.newspaperMode);

        // Apply compact mode
        document.body.classList.toggle('compact-mode', this.state.settings.compactMode);

        // Apply diagram display mode to ChordRenderer
        if (typeof ChordRenderer !== 'undefined') {
            ChordRenderer.config.displayMode = this.state.settings.diagramDisplayMode || 'fingers';
        }

        // Update diagram display dropdown
        const diagramDisplaySelect = document.getElementById('diagram-display-select');
        if (diagramDisplaySelect) {
            diagramDisplaySelect.value = this.state.settings.diagramDisplayMode || 'fingers';
        }

        // Update settings panel checkboxes
        const showTabToggle = document.getElementById('show-tab-toggle');
        const showFingerToggle = document.getElementById('show-finger-toggle');
        const showArpeggioTabToggle = document.getElementById('show-arpeggio-tab-toggle');
        const showArpeggioTipsToggle = document.getElementById('show-arpeggio-tips-toggle');
        const showAllArpeggioNotesToggle = document.getElementById('show-all-arpeggio-notes-toggle');
        const darkThemeToggle = document.getElementById('dark-theme-toggle');
        const leftHandedToggle = document.getElementById('left-handed-toggle');
        const newspaperModeToggle = document.getElementById('newspaper-mode-toggle');
        const compactModeToggle = document.getElementById('compact-mode-toggle');

        if (showTabToggle) showTabToggle.checked = this.state.settings.showTab;
        if (showFingerToggle) showFingerToggle.checked = this.state.settings.showFingerInfo;
        if (showArpeggioTabToggle) showArpeggioTabToggle.checked = this.state.settings.showArpeggioTab;
        if (showArpeggioTipsToggle) showArpeggioTipsToggle.checked = this.state.settings.showArpeggioTips;
        if (showAllArpeggioNotesToggle) showAllArpeggioNotesToggle.checked = this.state.settings.showAllArpeggioNotes;
        if (darkThemeToggle) darkThemeToggle.checked = this.state.settings.darkTheme;
        if (leftHandedToggle) leftHandedToggle.checked = this.state.settings.leftHanded;
        if (newspaperModeToggle) newspaperModeToggle.checked = this.state.settings.newspaperMode;
        if (compactModeToggle) compactModeToggle.checked = this.state.settings.compactMode;
    },

    /**
     * Initialize settings panel
     */
    initSettingsPanel() {
        // Settings button
        document.getElementById('settings-btn')?.addEventListener('click', () => this.toggleSettingsPanel());
        document.getElementById('settings-close')?.addEventListener('click', () => this.closeSettingsPanel());

        // Theme button quick toggle
        document.getElementById('theme-btn')?.addEventListener('click', () => {
            this.state.settings.darkTheme = !this.state.settings.darkTheme;
            this.applySettings();
            this.saveSettings();
        });

        // Settings toggles
        document.getElementById('show-tab-toggle')?.addEventListener('change', (e) => {
            this.state.settings.showTab = e.target.checked;
            this.applySettings();
            this.saveSettings();
        });

        document.getElementById('show-finger-toggle')?.addEventListener('change', (e) => {
            this.state.settings.showFingerInfo = e.target.checked;
            this.applySettings();
            this.saveSettings();
        });

        document.getElementById('show-arpeggio-tab-toggle')?.addEventListener('change', (e) => {
            this.state.settings.showArpeggioTab = e.target.checked;
            this.applySettings();
            this.saveSettings();
        });

        document.getElementById('show-arpeggio-tips-toggle')?.addEventListener('change', (e) => {
            this.state.settings.showArpeggioTips = e.target.checked;
            this.applySettings();
            this.saveSettings();
        });

        document.getElementById('show-all-arpeggio-notes-toggle')?.addEventListener('change', (e) => {
            this.state.settings.showAllArpeggioNotes = e.target.checked;
            this.applySettings();
            this.saveSettings();
            // Re-render arpeggios if any are displayed
            if (this.state.displayedChords.length > 0 && this.state.arpeggiosExpanded) {
                const chordsWithArpeggios = this.state.displayedChords.filter(
                    chord => getArpeggioForChord(chord.id)
                );
                this.renderArpeggios(chordsWithArpeggios);
            }
        });

        document.getElementById('dark-theme-toggle')?.addEventListener('change', (e) => {
            this.state.settings.darkTheme = e.target.checked;
            this.applySettings();
            this.saveSettings();
        });

        document.getElementById('left-handed-toggle')?.addEventListener('change', (e) => {
            this.state.settings.leftHanded = e.target.checked;
            this.applySettings();
            this.saveSettings();
            // Re-render chords with new orientation
            if (this.state.displayedChords.length > 0) {
                this.renderChordGrid(this.state.displayedChords);
            }
        });

        document.getElementById('newspaper-mode-toggle')?.addEventListener('change', (e) => {
            this.state.settings.newspaperMode = e.target.checked;
            this.applySettings();
            this.saveSettings();
        });

        document.getElementById('compact-mode-toggle')?.addEventListener('change', (e) => {
            this.state.settings.compactMode = e.target.checked;
            this.applySettings();
            this.saveSettings();
        });

        // Tuning offset controls
        document.getElementById('tuning-down-btn')?.addEventListener('click', () => {
            this.adjustTuningOffset(-1);
        });

        document.getElementById('tuning-up-btn')?.addEventListener('click', () => {
            this.adjustTuningOffset(1);
        });

        // Initialize tuning offset from localStorage
        this.initTuningOffset();

        // Diagram display mode dropdown
        document.getElementById('diagram-display-select')?.addEventListener('change', (e) => {
            this.setDiagramDisplayMode(e.target.value);
        });
    },

    /**
     * Set diagram display mode (fingers or intervals)
     */
    setDiagramDisplayMode(mode) {
        if (this.state.settings.diagramDisplayMode === mode) return;

        this.state.settings.diagramDisplayMode = mode;
        this.applySettings();
        this.saveSettings();

        // Re-render chords with new display mode
        if (this.state.displayedChords.length > 0) {
            this.renderChordGrid(this.state.displayedChords);
        }
    },

    /**
     * Initialize tuning offset from localStorage and update display
     */
    initTuningOffset() {
        // Load saved tuning offset
        AudioEngine.loadTuningOffset();
        // Update the display
        this.updateTuningDisplay();
        // Update tuning indicator
        this.updateTuningIndicator();
    },

    /**
     * Adjust tuning offset by delta
     * @param {number} delta - Amount to change (+1 or -1 semitone)
     */
    adjustTuningOffset(delta) {
        const currentOffset = AudioEngine.getTuningOffset();
        const newOffset = currentOffset + delta;

        // Check bounds
        if (newOffset < -6 || newOffset > 6) return;

        // Apply the new offset
        AudioEngine.setTuningOffset(newOffset);

        // Update display
        this.updateTuningDisplay();

        // Update tuning indicator on play buttons
        this.updateTuningIndicator();
    },

    /**
     * Update the tuning offset display in settings
     */
    updateTuningDisplay() {
        const { value, label } = AudioEngine.getTuningDisplayText();

        const valueElement = document.getElementById('tuning-value');
        const labelElement = document.getElementById('tuning-label');

        if (valueElement) {
            valueElement.textContent = value;
        }

        if (labelElement) {
            labelElement.textContent = label;
            labelElement.classList.toggle('hidden', !label);
        }

        // Update button states (disable at bounds)
        const offset = AudioEngine.getTuningOffset();
        const downBtn = document.getElementById('tuning-down-btn');
        const upBtn = document.getElementById('tuning-up-btn');

        if (downBtn) {
            downBtn.disabled = offset <= -6;
            downBtn.classList.toggle('disabled', offset <= -6);
        }
        if (upBtn) {
            upBtn.disabled = offset >= 6;
            upBtn.classList.toggle('disabled', offset >= 6);
        }
    },

    /**
     * Update tuning indicator on chord cards
     */
    updateTuningIndicator() {
        const offset = AudioEngine.getTuningOffset();
        const indicator = document.getElementById('tuning-offset-indicator');

        if (offset !== 0) {
            // Show indicator in header
            if (!indicator) {
                this.createTuningIndicator(offset);
            } else {
                const badge = indicator.querySelector('.tuning-indicator-badge');
                if (badge) {
                    badge.textContent = offset > 0 ? `+${offset}` : `${offset}`;
                }
                indicator.classList.remove('hidden');
            }
        } else {
            // Hide indicator
            if (indicator) {
                indicator.classList.add('hidden');
            }
        }
    },

    /**
     * Create the tuning indicator element
     */
    createTuningIndicator(offset) {
        const header = document.querySelector('.header-actions');
        if (!header) return;

        const indicator = document.createElement('div');
        indicator.id = 'tuning-offset-indicator';
        indicator.className = 'tuning-offset-indicator';
        indicator.title = 'Audio pitch adjusted - click Settings to change';
        indicator.innerHTML = `
            <span class="tuning-indicator-icon">🎵</span>
            <span class="tuning-indicator-badge">${offset > 0 ? '+' + offset : offset}</span>
        `;

        // Insert before the settings button
        const settingsBtn = document.getElementById('settings-btn');
        if (settingsBtn) {
            header.insertBefore(indicator, settingsBtn);
        } else {
            header.appendChild(indicator);
        }
    },

    /**
     * Toggle settings panel visibility
     */
    toggleSettingsPanel() {
        const panel = document.getElementById('settings-panel');
        if (panel) {
            panel.classList.toggle('hidden');
        }
    },

    /**
     * Close settings panel
     */
    closeSettingsPanel() {
        const panel = document.getElementById('settings-panel');
        if (panel) {
            panel.classList.add('hidden');
        }
    },

    /**
     * Show About modal with documentation
     */
    showAboutModal() {
        const modal = document.getElementById('about-modal');
        if (!modal) return;

        // Populate content if not already done
        const modalBody = modal.querySelector('.about-modal-body');
        if (modalBody && modalBody.children.length === 0) {
            modalBody.innerHTML = this.getAboutContent();
        }

        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    },

    /**
     * Close About modal
     */
    closeAboutModal() {
        const modal = document.getElementById('about-modal');
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = ''; // Restore scrolling
        }
    },

    /**
     * Get About page content
     */
    getAboutContent() {
        return `
            <div class="about-content">
                <section class="about-section">
                    <h3>Welcome to Guitar Chord Explorer</h3>
                    <p>Guitar Chord Explorer is a comprehensive tool for discovering, learning, and practicing guitar chords and arpeggios. Whether you're a beginner or an advanced player, this app helps you find the perfect chords for your musical needs through mood, style, or music theory.</p>
                </section>

                <section class="about-section">
                    <h3>How to Use This App</h3>

                    <h4>Finding Chords</h4>
                    <p>There are three ways to discover chords:</p>
                    <ul>
                        <li><strong>Mood Mode:</strong> Select a mood (Happy, Sad, Dreamy, etc.) to get chords that evoke that emotion</li>
                        <li><strong>Style Mode:</strong> Choose a musical style (Blues, Jazz, Rock, etc.) to get chords commonly used in that genre</li>
                        <li><strong>Theory Mode:</strong> Select a key and mode to see all chords that belong to that scale</li>
                    </ul>

                    <h4>Filtering Options</h4>
                    <p>Use the filter buttons to narrow down chord results:</p>
                    <ul>
                        <li><strong>All:</strong> Shows all available chord voicings</li>
                        <li><strong>Beginner:</strong> Shows only open position chords that are easier to play</li>
                        <li><strong>Advanced:</strong> Shows barre chords and higher position chords</li>
                    </ul>

                    <h4>Advanced Filters</h4>
                    <p>After clicking "Show Chords", use these advanced filters to refine your results:</p>

                    <p><strong>Root Note Filter:</strong></p>
                    <p>The Root Note filter lets you see all chord variations built on a specific root note. This is perfect for:</p>
                    <ul>
                        <li>Learning all voicings of a particular chord (e.g., all D chords)</li>
                        <li>Exploring different chord qualities with the same root (D Major, D Minor, D7, Dm7, etc.)</li>
                        <li>Finding chord substitutions that share the same root</li>
                        <li>Practicing chord transitions between related voicings</li>
                    </ul>
                    <p><strong>How it works:</strong></p>
                    <ul>
                        <li>Select a root note from the dropdown (C, C#/Db, D, etc.)</li>
                        <li>When active, it overrides the Mood/Style/Theory selection and shows ALL chords with that root</li>
                        <li>The Mood/Style/Theory tabs will appear dimmed to indicate they're bypassed</li>
                        <li>Other filters (Chord Type, Voicing Pattern, etc.) still work to narrow down results</li>
                        <li>Selecting a new Mood/Style/Theory option will reset the Root Note filter back to "All Roots"</li>
                        <li>Sharp/flat equivalents are handled automatically (C# and Db show the same chords)</li>
                    </ul>

                    <p><strong>Chord Type Filter:</strong></p>
                    <ul>
                        <li><strong>Major Triads:</strong> Three-note chords built from the root, major third, and perfect fifth (e.g., C-E-G). They sound bright and stable.</li>
                        <li><strong>Minor Triads:</strong> Three-note chords with a minor third (e.g., C-Eb-G). They sound darker and more somber than major chords.</li>
                        <li><strong>Diminished Triads:</strong> Three-note chords with a minor third and diminished fifth (e.g., C-Eb-Gb). They create tension and instability.</li>
                        <li><strong>Augmented Triads:</strong> Three-note chords with a major third and augmented fifth (e.g., C-E-G#). They sound suspended and unresolved.</li>
                        <li><strong>Seventh Chords:</strong> Four-note chords that add a seventh interval above the root. Common in jazz, blues, and funk.</li>
                        <li><strong>Extended Chords:</strong> Chords that extend beyond the seventh to include ninths, elevenths, or thirteenths. Used for rich, colorful harmonies.</li>
                        <li><strong>Suspended:</strong> Chords where the third is replaced with a second or fourth, creating an open, unresolved sound.</li>
                        <li><strong>Add Chords:</strong> Triads with an added note (like add9), giving extra color without changing the basic chord quality.</li>
                        <li><strong>Power Chords:</strong> Two-note chords containing just the root and fifth. Popular in rock music for their strong, neutral sound.</li>
                    </ul>

                    <p><strong>Voicing Pattern Filter:</strong></p>
                    <ul>
                        <li><strong>Open Position:</strong> Chords that include open (unfretted) strings. Usually easier for beginners and sound bright.</li>
                        <li><strong>All Barre Chords:</strong> Chords where one finger (usually the index) presses multiple strings across the fretboard. Moveable up and down the neck.</li>
                        <li><strong>A-Shape Barre:</strong> Barre chords based on the open A chord shape, with the root on the A string.</li>
                        <li><strong>E-Shape Barre:</strong> Barre chords based on the open E chord shape, with the root on the low E string.</li>
                        <li><strong>Partial Barre:</strong> Chords where one finger covers 2-3 strings rather than the full barre. Easier than full barre chords.</li>
                        <li><strong>Closed Position:</strong> Chords with no open strings, played entirely with fretted notes.</li>
                        <li><strong>High Position:</strong> Chords played at the 10th fret or higher, producing brighter tones.</li>
                        <li><strong>3-Note Voicings:</strong> Chords with exactly 3 notes played. Perfect for jazz voicings, fingerstyle guitar, and voice leading. The reduced note count creates a cleaner, less muddy sound that works well in ensemble settings.</li>
                        <li><strong>4-Note Voicings:</strong> Chords with exactly 4 notes played. Offers balanced fullness without being too dense. Common in jazz and R&B for seventh chord voicings where you need all four chord tones.</li>
                        <li><strong>5+ Note Voicings:</strong> Chords with 5 or more notes played. Produces a full, rich sound ideal for strumming, campfire songs, and when you want maximum resonance from the guitar.</li>
                    </ul>

                    <p><strong>Fret Range Filter:</strong></p>
                    <ul>
                        <li><strong>Low Position (frets 0-5):</strong> Chords near the headstock, including most open chords. Great for beginners.</li>
                        <li><strong>Mid Position (frets 5-9):</strong> Chords in the middle of the neck, common for rhythm playing and transitions.</li>
                        <li><strong>High Position (frets 10+):</strong> Chords higher up the neck with brighter, more focused tones. Used in lead playing and jazz.</li>
                    </ul>

                    <h4>Basic vs Advanced Filter Tabs</h4>
                    <p>The filter section has two tabs to accommodate different levels of filtering needs:</p>

                    <p><strong>Basic Filters Tab:</strong></p>
                    <p>Simplified controls for quick filtering:</p>
                    <ul>
                        <li><strong>Chord Type:</strong> Simple categories - All, Major, Minor, Seventh, Extended</li>
                        <li><strong>Fret Range:</strong> Low (0-5), Mid (5-9), High (10+)</li>
                        <li><strong>Difficulty:</strong> Easy, Medium, Hard - based on barre chords and stretch required</li>
                    </ul>

                    <p><strong>Advanced Filters Tab:</strong></p>
                    <p>More granular controls for experienced players:</p>
                    <ul>
                        <li><strong>Chord Type:</strong> Detailed categories including Triads, 7ths, 9ths, 11ths, 13ths, Altered, Suspended, Add, Power</li>
                        <li><strong>Voicing Style:</strong> Shell voicings, Drop 2, Drop 3, Quartal, Rootless, Barre, Open</li>
                        <li><strong>Jazz Level:</strong> Beginner to advanced jazz chord progressions</li>
                        <li><strong>Sound Character:</strong> Bright, Warm, Tense, Dreamy, Dark, Funky</li>
                        <li><strong>Fret Range:</strong> Same as Basic tab (stays synced)</li>
                        <li><strong>Note Count:</strong> 3-note, 4-note, or 5+ note voicings</li>
                    </ul>

                    <p><strong>How Filters Work Together:</strong></p>
                    <p>All active filters use AND logic - a chord must match ALL selected criteria to appear. For example, if you select "Minor" chord type and "Low" fret range, only minor chords in the low fret position will be shown.</p>

                    <p><strong>Advanced Filters Indicator:</strong></p>
                    <p>When advanced filters are active, a pulsing dot appears on the "Advanced Filters" tab. This helps you remember when filters beyond the basic options are affecting your results. Use the "Clear Filters" button to reset all filters at once.</p>

                    <h5>Jazz Level Guide</h5>
                    <p>The Jazz Level filter organizes chords by complexity for jazz players:</p>
                    <ul>
                        <li><strong>Basic:</strong> Major and minor triads, simple 7th chords - foundations for any style</li>
                        <li><strong>Tier 1 - Essentials:</strong> Dominant 7ths, major/minor 7ths, basic 9ths - the building blocks of jazz harmony</li>
                        <li><strong>Tier 2 - Intermediate:</strong> 11ths, 13ths, altered dominants, diminished - for adding color and movement</li>
                        <li><strong>Tier 3 - Advanced:</strong> Complex altered chords, quartal voicings, advanced extensions - for sophisticated jazz textures</li>
                    </ul>

                    <h5>Sound Character Guide</h5>
                    <p>The Sound Character filter groups chords by their emotional quality:</p>
                    <ul>
                        <li><strong>Bright:</strong> Major chords, add9, 6th chords - happy, uplifting, energetic</li>
                        <li><strong>Warm:</strong> Major 7ths, 69 chords - smooth, cozy, pleasing</li>
                        <li><strong>Tense:</strong> Dominant 7ths, altered chords, diminished - creates movement and wants to resolve</li>
                        <li><strong>Dreamy:</strong> Minor 9ths, major 9ths, add chords with extensions - ethereal, floating quality</li>
                        <li><strong>Dark:</strong> Minor chords, minor 7ths, half-diminished - melancholic, serious, introspective</li>
                        <li><strong>Funky:</strong> 9th chords, 13th chords, dominant variations - groovy, rhythmic, energetic</li>
                    </ul>

                    <h5>Voicing Style Guide</h5>
                    <p>The Voicing Style filter helps you find specific chord construction types:</p>
                    <ul>
                        <li><strong>Shell:</strong> 3-note voicings with root, 3rd, and 7th (or 5th) - clean, essential tones for comping</li>
                        <li><strong>Drop 2:</strong> The second-highest note is dropped an octave - common jazz voicing with good voice leading</li>
                        <li><strong>Drop 3:</strong> The third-highest note is dropped an octave - wider voicing with unique color</li>
                        <li><strong>Quartal:</strong> Built in fourths rather than thirds - modern jazz sound</li>
                        <li><strong>Rootless:</strong> Omits the root note - allows bass player to define the root, common in jazz ensembles</li>
                        <li><strong>Barre:</strong> Full barre chord shapes - moveable, consistent fingering</li>
                        <li><strong>Open:</strong> Uses open strings - resonant, great for acoustic playing</li>
                    </ul>

                    <h4>Reading Chord Diagrams</h4>
                    <p>Chord diagrams show:</p>
                    <ul>
                        <li><strong>Vertical lines:</strong> Represent the six guitar strings (thickest on left = low E, thinnest on right = high e)</li>
                        <li><strong>Horizontal lines:</strong> Represent frets on the guitar neck</li>
                        <li><strong>Dots:</strong> Show where to place your fingers</li>
                        <li><strong>Numbers in dots:</strong> Indicate which finger to use (1=index, 2=middle, 3=ring, 4=pinky)</li>
                        <li><strong>Red dots:</strong> Indicate root notes of the chord</li>
                        <li><strong>"o" above nut:</strong> Play that string open (unfretted)</li>
                        <li><strong>"x" above nut:</strong> Don't play that string (muted)</li>
                        <li><strong>Position number (e.g., "5fr"):</strong> Shows what fret position the chord starts at</li>
                    </ul>

                    <h4>Diagram Display Toggle: Finger Numbers vs Intervals</h4>
                    <p>In the advanced filters area, you'll find a toggle to switch what's displayed on chord diagram dots:</p>

                    <p><strong>Finger Numbers (Default):</strong></p>
                    <ul>
                        <li>Shows which finger to use: 1=index, 2=middle, 3=ring, 4=pinky</li>
                        <li>Best for learning how to physically play the chord</li>
                        <li>Helps develop proper fingering technique</li>
                    </ul>

                    <p><strong>Intervals:</strong></p>
                    <ul>
                        <li>Shows the musical relationship of each note to the root</li>
                        <li>Common intervals: 1 (root), 3 (major third), b3 (minor third), 5 (fifth), b7 (minor seventh), 7 (major seventh)</li>
                        <li>Helps you understand chord construction and music theory</li>
                        <li>Root notes (1) are displayed on red dots for easy identification</li>
                    </ul>

                    <p><strong>Why Learn Intervals?</strong></p>
                    <p>Understanding intervals helps you:</p>
                    <ul>
                        <li>See how chords are built (e.g., a major chord = 1, 3, 5)</li>
                        <li>Understand why chords sound the way they do</li>
                        <li>Transpose chords and patterns to different keys</li>
                        <li>Communicate with other musicians using universal music theory</li>
                        <li>Create your own chord voicings by knowing which notes matter most</li>
                    </ul>

                    <p><strong>Example - C Major Chord:</strong></p>
                    <ul>
                        <li>Notes: C (root), E (major third), G (perfect fifth)</li>
                        <li>Intervals shown on diagram: 1, 3, 5</li>
                        <li>The "3" makes it major (a minor chord would have "b3" instead)</li>
                    </ul>

                    <p>Your display preference is saved automatically and will persist across sessions.</p>

                    <h4>Reading Tablature (Tab)</h4>
                    <p>Tablature is a simple notation system for guitar:</p>
                    <ul>
                        <li>Six lines represent the six strings (top line = high e, bottom line = low E)</li>
                        <li>Numbers on the lines show which fret to press</li>
                        <li>"0" means play the open string</li>
                        <li>"x" means don't play that string</li>
                        <li>Read tablature from left to right</li>
                    </ul>

                    <h4>Chord "More Info" Section</h4>
                    <p>Each chord card has a collapsible "More Info" section that provides detailed educational information about the chord. Click the "More Info" button below the Play/Add buttons to expand it.</p>

                    <p><strong>What You'll Find:</strong></p>
                    <ul>
                        <li><strong>Basic Theory:</strong>
                            <ul>
                                <li><em>Notes:</em> The actual letter names of all notes being played (e.g., "C - E - G - C - E")</li>
                                <li><em>Intervals:</em> The interval formula showing the chord structure (e.g., "1 - 3 - 5 - 1 - 3")</li>
                                <li><em>Also known as:</em> Enharmonic equivalents for sharps/flats (e.g., "C# Major = Db Major")</li>
                            </ul>
                        </li>
                        <li><strong>String Details:</strong> A collapsible breakdown showing exactly what note and interval is played on each string, including muted strings and open strings</li>
                        <li><strong>Musical Context:</strong>
                            <ul>
                                <li><em>Character:</em> Brief description of the chord's sound (e.g., "Bright, happy" for major, "Melancholic, emotional" for minor)</li>
                                <li><em>Common in:</em> Genres where this chord type is frequently used</li>
                                <li><em>Voicing:</em> Information about the chord shape (open position, barre chord, number of notes)</li>
                            </ul>
                        </li>
                        <li><strong>Copy Chord:</strong> Button to copy chord data to your clipboard for notes or sharing</li>
                    </ul>

                    <p><strong>Expand All Info:</strong></p>
                    <p>Use the "Expand All Info" button in the selection info banner to expand or collapse all More Info sections at once. This is helpful when you want to compare theory information across multiple chords.</p>

                    <h4>Related Chords</h4>
                    <p>Each chord card also has a "Related Chords" section that shows musically related chords. This feature helps you discover chords that work well together.</p>

                    <p><strong>How Related Chords Are Determined:</strong></p>
                    <ul>
                        <li><strong>Circle of Fifths:</strong> Chords that are a fourth or fifth apart (e.g., C Major and G Major, or C Major and F Major) have a strong harmonic relationship and sound natural when played together.</li>
                        <li><strong>Relative Major/Minor:</strong> Every major key has a relative minor (and vice versa) that shares the same key signature. For example, C Major and A Minor are relatives.</li>
                        <li><strong>Same Root, Different Quality:</strong> Chords built on the same root note but with different qualities (e.g., C Major, C Minor, C7) are shown as variants.</li>
                        <li><strong>Common Progressions:</strong> Chords that commonly appear together in popular progressions like I-IV-V or ii-V-I.</li>
                        <li><strong>Shared Notes:</strong> Chords that share two or more notes often sound pleasing when played in sequence.</li>
                    </ul>

                    <p><strong>Using Related Chords:</strong></p>
                    <ul>
                        <li>Click any related chord pill to navigate to that chord</li>
                        <li>If the chord is visible on screen, it will scroll into view and briefly highlight</li>
                        <li>If the chord is filtered out, it will be temporarily added to your view</li>
                        <li>Each pill shows a relationship label (like "IV chord" or "relative") as a hint</li>
                    </ul>

                    <p><strong>Why This Matters:</strong></p>
                    <p>Understanding chord relationships helps you:</p>
                    <ul>
                        <li>Build better chord progressions that flow naturally</li>
                        <li>Find substitution chords for more variety</li>
                        <li>Understand the harmonic structure of songs</li>
                        <li>Discover new chords that complement ones you already know</li>
                    </ul>
                </section>

                <section class="about-section">
                    <h3>Arpeggios</h3>

                    <h4>What Are Arpeggios?</h4>
                    <p>An arpeggio is a chord played one note at a time instead of all together. Arpeggios are essential for:</p>
                    <ul>
                        <li>Creating melodic lines that follow the harmony</li>
                        <li>Playing fingerstyle patterns</li>
                        <li>Soloing over chord progressions</li>
                        <li>Understanding chord tones and their locations on the fretboard</li>
                    </ul>

                    <h4>Understanding Arpeggio Diagrams</h4>
                    <p>Arpeggio diagrams use a horizontal fretboard layout:</p>
                    <ul>
                        <li><strong>Horizontal lines:</strong> Represent the six strings (top = high e, bottom = low E)</li>
                        <li><strong>Vertical lines:</strong> Represent frets</li>
                        <li><strong>Colored dots:</strong> Show arpeggio notes with their intervals:
                            <ul>
                                <li><span style="color: #E63946">Red = Root (R)</span> - The fundamental note of the chord</li>
                                <li><span style="color: #457B9D">Blue = 3rd</span> - Defines if the chord is major or minor</li>
                                <li><span style="color: #2A9D8F">Green = 5th</span> - Provides stability to the chord</li>
                                <li><span style="color: #E9C46A">Yellow = 7th</span> - Adds color and tension</li>
                            </ul>
                        </li>
                    </ul>

                    <h4>Show All Arpeggio Notes</h4>
                    <p>In Settings, you can enable "Show All Arpeggio Notes" to see every instance of the arpeggio notes across the entire fretboard (up to the 15th fret). This helps you:</p>
                    <ul>
                        <li>Visualize all possible positions for the arpeggio</li>
                        <li>Connect different positions and create smooth transitions</li>
                        <li>Understand the complete layout of chord tones</li>
                    </ul>

                    <h4>Arpeggio Sequence Builder</h4>
                    <p>Use this feature to:</p>
                    <ul>
                        <li>Select multiple arpeggios and arrange them in order</li>
                        <li>Generate tablature for the entire sequence</li>
                        <li>Play the sequence back to hear how it sounds</li>
                        <li>Practice transitioning between different arpeggios</li>
                    </ul>
                </section>

                <section class="about-section">
                    <h3>Music Theory Explained</h3>

                    <h4>Keys and Scales</h4>
                    <p>A <strong>key</strong> is a group of notes that work well together. When you select a key like "C" in Theory Mode, you're choosing C as the tonal center.</p>

                    <h4>Modes (The Seven Church Modes)</h4>
                    <p>Modes are different scales built from the major scale. Each has its own unique character:</p>

                    <h5>Ionian (Major Scale)</h5>
                    <p>The standard major scale - bright and happy. Example: C Ionian = C, D, E, F, G, A, B</p>
                    <p><strong>Why these chords appear:</strong> When you select C Ionian, you get chords built from each note of the C major scale: C major, D minor, E minor, F major, G major, A minor, B diminished. These are called "diatonic chords" - they all belong to the same key.</p>

                    <h5>Dorian</h5>
                    <p>Minor scale with a raised 6th - jazzy and sophisticated. Example: D Dorian = D, E, F, G, A, B, C</p>
                    <p><strong>Why these chords appear:</strong> D Dorian contains the same notes as C major, but starts on D. You'll see D minor as the tonic (home) chord, with other chords that emphasize the Dorian flavor.</p>

                    <h5>Phrygian</h5>
                    <p>Minor scale with a lowered 2nd - dark and Spanish/flamenco flavored. Example: E Phrygian = E, F, G, A, B, C, D</p>
                    <p><strong>Why these chords appear:</strong> E Phrygian is the C major scale starting on E. The E minor chord is home, and the lowered 2nd (F) creates its distinctive dark sound.</p>

                    <h5>Lydian</h5>
                    <p>Major scale with a raised 4th - dreamy and ethereal. Example: F Lydian = F, G, A, B, C, D, E</p>
                    <p><strong>Why these chords appear:</strong> F Lydian is the C major scale starting on F. F major is the tonic, and the raised 4th (B natural) gives it a floating, magical quality.</p>

                    <h5>Mixolydian</h5>
                    <p>Major scale with a lowered 7th - bluesy and rock-oriented. Example: G Mixolydian = G, A, B, C, D, E, F</p>
                    <p><strong>Why these chords appear:</strong> G Mixolydian is the C major scale starting on G. G major (or G7) is the tonic. This mode is common in rock, blues, and folk music.</p>

                    <h5>Aeolian (Natural Minor)</h5>
                    <p>The standard minor scale - sad and introspective. Example: A Aeolian = A, B, C, D, E, F, G</p>
                    <p><strong>Why these chords appear:</strong> A Aeolian contains the same notes as C major. A minor is the tonic, and you get the "relative minor" chords that create a melancholy sound.</p>

                    <h5>Locrian</h5>
                    <p>Diminished scale - unstable and tense. Example: B Locrian = B, C, D, E, F, G, A</p>
                    <p><strong>Why these chords appear:</strong> B Locrian is the C major scale starting on B. B diminished is the tonic. This mode is the most dissonant and rarely used as a tonal center.</p>

                    <h4>Chord Construction</h4>
                    <p>Chords are built by stacking intervals (distances between notes):</p>
                    <ul>
                        <li><strong>Major chord:</strong> Root + major 3rd + perfect 5th (e.g., C + E + G = C major)</li>
                        <li><strong>Minor chord:</strong> Root + minor 3rd + perfect 5th (e.g., C + Eb + G = C minor)</li>
                        <li><strong>Dominant 7th:</strong> Major chord + minor 7th (e.g., G + B + D + F = G7)</li>
                        <li><strong>Major 7th:</strong> Major chord + major 7th (e.g., C + E + G + B = Cmaj7)</li>
                        <li><strong>Minor 7th:</strong> Minor chord + minor 7th (e.g., D + F + A + C = Dm7)</li>
                        <li><strong>Diminished:</strong> Root + minor 3rd + diminished 5th (e.g., B + D + F = Bdim)</li>
                    </ul>

                    <h4>Understanding Intervals</h4>
                    <p>Intervals are the building blocks of music:</p>
                    <ul>
                        <li><strong>Root (R or 1):</strong> The foundation note</li>
                        <li><strong>Minor 2nd (b2):</strong> 1 semitone - very tense</li>
                        <li><strong>Major 2nd (2):</strong> 2 semitones</li>
                        <li><strong>Minor 3rd (b3):</strong> 3 semitones - gives minor quality</li>
                        <li><strong>Major 3rd (3):</strong> 4 semitones - gives major quality</li>
                        <li><strong>Perfect 4th (4):</strong> 5 semitones</li>
                        <li><strong>Diminished 5th (b5):</strong> 6 semitones - tense</li>
                        <li><strong>Perfect 5th (5):</strong> 7 semitones - stable</li>
                        <li><strong>Minor 6th (b6):</strong> 8 semitones</li>
                        <li><strong>Major 6th (6):</strong> 9 semitones</li>
                        <li><strong>Minor 7th (b7 or 7):</strong> 10 semitones - bluesy</li>
                        <li><strong>Major 7th (M7):</strong> 11 semitones - jazzy</li>
                    </ul>
                </section>

                <section class="about-section">
                    <h3>Progression Builder</h3>
                    <p>Create chord progressions by:</p>
                    <ul>
                        <li>Clicking the "+" slots to add chords from your current selection</li>
                        <li>Choosing from preset templates (I-IV-V, I-V-vi-IV, etc.)</li>
                        <li>Adjusting tempo and beats per chord</li>
                        <li>Playing back the progression to hear how it sounds</li>
                        <li>Generating tablature for the entire progression</li>
                        <li>Saving progressions for later practice</li>
                    </ul>

                    <h4>Roman Numeral Notation</h4>
                    <p>Chord progressions use Roman numerals to show relationships:</p>
                    <ul>
                        <li>Uppercase (I, IV, V) = major chords</li>
                        <li>Lowercase (ii, iii, vi) = minor chords</li>
                        <li>Lowercase with ° (vii°) = diminished chord</li>
                        <li>Numbers like bVII mean lowered 7th scale degree</li>
                    </ul>
                    <p>Example in C major: I=C, ii=Dm, iii=Em, IV=F, V=G, vi=Am, vii°=Bdim</p>
                </section>

                <section class="about-section">
                    <h3>Scale Builder</h3>
                    <p>The Scale Builder shows you what notes to play for lead guitar over your chord progression. It automatically detects the key and suggests appropriate scales!</p>

                    <h4>How It Works</h4>
                    <p>When you add chords to your Progression Builder, the Scale Builder analyzes them and:</p>
                    <ul>
                        <li>Detects the key your progression is in</li>
                        <li>Suggests the best scale to use</li>
                        <li>Offers alternative scale options</li>
                        <li>Shows per-chord modes for advanced players</li>
                    </ul>

                    <h4>Two Modes of Operation</h4>
                    <h5>One Scale for All (Recommended for Beginners)</h5>
                    <p>Uses a single scale over the entire progression. This is the most common approach and works great for most music:</p>
                    <ul>
                        <li><strong>Main Scale:</strong> Automatically suggested based on your progression</li>
                        <li><strong>Alternative Scales:</strong> Click to try different scales that also work</li>
                        <li><strong>Scale Type Selector:</strong> Choose from major, minor, pentatonic, blues, modes, and more</li>
                        <li><strong>Highlight Chord Tones:</strong> Toggle to see which notes are in your chords (blue dots)</li>
                    </ul>

                    <h5>Per-Chord Modes (Advanced)</h5>
                    <p>Shows a different scale/mode for each chord in your progression. This is called "modal playing" and is used in jazz and advanced improvisation:</p>
                    <ul>
                        <li>Each chord gets its own mode (Ionian, Dorian, Mixolydian, etc.)</li>
                        <li>Switch scales as the chord changes</li>
                        <li>Creates more colorful, sophisticated solos</li>
                    </ul>

                    <h4>Understanding the Scale Diagrams</h4>
                    <p>Scale diagrams show the entire guitar neck (0-24 frets):</p>
                    <ul>
                        <li><strong>Red dots:</strong> Root notes - the foundation of the scale</li>
                        <li><strong>Blue dots:</strong> Chord tones (when "Highlight Chord Tones" is enabled)</li>
                        <li><strong>Gray dots:</strong> Passing tones - notes that connect chord tones</li>
                        <li><strong>Horizontal lines:</strong> Strings (top = high e, bottom = low E)</li>
                        <li><strong>Vertical lines:</strong> Frets</li>
                    </ul>

                    <h4>Position Patterns (for Pentatonic & Blues)</h4>
                    <p>When you select a pentatonic or blues scale, you'll see 5 position patterns (also called "boxes"). These are common fingering patterns that help you play the scale in different areas of the neck.</p>

                    <h4>Complete Scale Reference</h4>

                    <h5>Basic Scales (Great for Beginners)</h5>
                    <ul>
                        <li><strong>Major (Ionian):</strong> Happy, bright sound. 7 notes: 1-2-3-4-5-6-7. Use over major key progressions.</li>
                        <li><strong>Natural Minor (Aeolian):</strong> Sad, dark sound. 7 notes: 1-2-b3-4-5-b6-b7. Use over minor key progressions.</li>
                        <li><strong>Major Pentatonic:</strong> Simplified 5-note major scale. 1-2-3-5-6. Sounds happy, works everywhere in major keys. Great for country, rock.</li>
                        <li><strong>Minor Pentatonic:</strong> Simplified 5-note minor scale. 1-b3-4-5-b7. The most popular scale in rock! Easy to learn, sounds great.</li>
                        <li><strong>Blues Scale:</strong> Minor pentatonic + blue note. 1-b3-4-b5-5-b7. That bluesy, gritty sound. The b5 is the "blue note" that gives it character.</li>
                    </ul>

                    <h5>The Seven Modes (Intermediate/Advanced)</h5>
                    <p>Modes are scales built from the major scale, each starting on a different note. They each have a unique character:</p>
                    <ul>
                        <li><strong>Ionian (Mode 1 - Major Scale):</strong> 1-2-3-4-5-6-7. Bright, happy, resolved. The "home base" major sound.</li>
                        <li><strong>Dorian (Mode 2):</strong> 1-2-b3-4-5-6-b7. Minor with a brighter twist. Jazz, funk, Santana. Has that cool minor sound but not too dark.</li>
                        <li><strong>Phrygian (Mode 3):</strong> 1-b2-b3-4-5-b6-b7. Dark, Spanish/flamenco flavor. The b2 makes it exotic and tense. Used in metal too.</li>
                        <li><strong>Lydian (Mode 4):</strong> 1-2-3-#4-5-6-7. Dreamy, floating, magical. The #4 creates a mysterious, ethereal quality. Joe Satriani uses this a lot.</li>
                        <li><strong>Mixolydian (Mode 5):</strong> 1-2-3-4-5-6-b7. Major with attitude. Bluesy rock sound. Think classic rock solos - it's the "7th chord" scale.</li>
                        <li><strong>Aeolian (Mode 6 - Natural Minor):</strong> 1-2-b3-4-5-b6-b7. Pure minor sadness. Most common minor scale. Think sad ballads.</li>
                        <li><strong>Locrian (Mode 7):</strong> 1-b2-b3-4-b5-b6-b7. Unstable, tense, rarely used. The diminished scale. Sounds unresolved, creates tension.</li>
                    </ul>

                    <h5>Advanced Scales</h5>
                    <ul>
                        <li><strong>Harmonic Minor:</strong> 1-2-b3-4-5-b6-7. Natural minor with major 7th. Classical, Egyptian sound. Very dramatic!</li>
                        <li><strong>Melodic Minor:</strong> 1-2-b3-4-5-6-7. Natural minor with raised 6th and 7th. Jazz sound, smooth and sophisticated.</li>
                        <li><strong>Whole Tone:</strong> 1-2-3-#4-#5-b7. All whole steps. Dreamy, floating, no resolution. Sounds like a dream sequence.</li>
                        <li><strong>Diminished:</strong> Alternating whole and half steps. Tense, jazzy, symmetrical. Advanced jazz improvisation.</li>
                    </ul>

                    <h4>Practical Tips for Using Scales</h4>
                    <ul>
                        <li><strong>Start with pentatonics:</strong> They're the easiest and sound great everywhere</li>
                        <li><strong>Learn one position at a time:</strong> Master one box before moving to the next</li>
                        <li><strong>Focus on root notes:</strong> The red dots - always sound good when you land on them</li>
                        <li><strong>Use chord tones:</strong> Blue dots when highlighted - these are the safest, strongest notes</li>
                        <li><strong>Passing tones connect:</strong> Gray dots - use these to move between chord tones</li>
                        <li><strong>Don't just run up and down:</strong> Mix note order, skip notes, create melodies</li>
                        <li><strong>Match the chord:</strong> Land on chord tones when each chord changes</li>
                        <li><strong>Start simple:</strong> Use "One Scale for All" mode first, then try "Per-Chord Modes" when comfortable</li>
                    </ul>

                    <h4>Why These Scales Work Over Your Progression</h4>
                    <p>The Scale Builder uses music theory to find scales that contain all (or most) of the notes in your chord progression:</p>
                    <ul>
                        <li>If all your chords are from one key (diatonic), it suggests that key's scale</li>
                        <li>For example: C-F-G-Am all come from C major, so it suggests C major scale</li>
                        <li>Alternative scales offer different flavors (pentatonic for simplicity, blues for attitude)</li>
                        <li>Per-chord modes let you emphasize each chord's character individually</li>
                    </ul>

                    <h4>When to Use Which Scale</h4>
                    <ul>
                        <li><strong>Rock/Pop:</strong> Minor pentatonic or blues scale (most common!)</li>
                        <li><strong>Country:</strong> Major pentatonic or mixolydian</li>
                        <li><strong>Blues:</strong> Blues scale (obviously!) or mixolydian</li>
                        <li><strong>Jazz:</strong> Modes (dorian over minor chords, mixolydian over dominant 7ths)</li>
                        <li><strong>Metal:</strong> Minor pentatonic, phrygian, or harmonic minor</li>
                        <li><strong>Ballads:</strong> Natural minor or aeolian mode</li>
                        <li><strong>Not sure?:</strong> Try the suggested scale, then experiment with alternatives</li>
                    </ul>
                </section>

                <section class="about-section">
                    <h3>Sound Settings</h3>

                    <h4>Tuning Offset</h4>
                    <p>The Tuning Offset feature lets you adjust the pitch of all audio playback to match alternate guitar tunings.</p>

                    <p><strong>Why use this?</strong></p>
                    <p>Many guitarists tune their instruments down from standard tuning for various reasons:</p>
                    <ul>
                        <li>Half step down (Eb tuning) - Popular in rock/metal for heavier sound</li>
                        <li>Full step down (D tuning) - Even heavier, looser strings</li>
                        <li>Drop tunings for easier power chords</li>
                        <li>To match vocal range or other instruments</li>
                    </ul>

                    <p><strong>How it works:</strong></p>
                    <ul>
                        <li>Open Settings and find the "Sound Settings" section</li>
                        <li>Use the [-] and [+] buttons to adjust the offset (-6 to +6 semitones)</li>
                        <li>Common tuning labels are shown (e.g., "Eb tuning" for -1)</li>
                        <li>When active, a small indicator appears in the header showing the offset</li>
                    </ul>

                    <p><strong>What changes:</strong></p>
                    <ul>
                        <li>All chord playback sounds at the adjusted pitch</li>
                        <li>All arpeggio playback sounds at the adjusted pitch</li>
                        <li>Any other audio in the app is pitch-shifted</li>
                    </ul>

                    <p><strong>What does NOT change:</strong></p>
                    <ul>
                        <li>Chord names still display as written (E Major stays "E Major")</li>
                        <li>Fret diagrams remain unchanged</li>
                        <li>Tab notation remains unchanged</li>
                        <li>Intervals and theory information remain unchanged</li>
                    </ul>

                    <p><strong>Example:</strong></p>
                    <p>If you tune your guitar down a half step and set the offset to -1, when you play an "E Major" chord diagram, the app will play audio that sounds like Eb Major - matching what your guitar actually produces when you play that E Major shape.</p>

                    <p>Your tuning offset setting is automatically saved and will persist across sessions.</p>

                    <h4>Capo Position</h4>
                    <p>The Capo feature helps you see what each chord shape will sound like when you have a capo on your guitar.</p>

                    <p><strong>What is a capo?</strong></p>
                    <p>A capo is a clamp that attaches to the guitar neck and raises the pitch of all strings. It's commonly used to:</p>
                    <ul>
                        <li>Change the key of a song while using familiar chord shapes</li>
                        <li>Play in a higher register with open chord voicings</li>
                        <li>Match the vocal range of a singer</li>
                        <li>Create brighter, chimey tones</li>
                    </ul>

                    <p><strong>How it works:</strong></p>
                    <ul>
                        <li>Open Settings and find the "Sound Settings" section</li>
                        <li>Select your capo position from the dropdown (None, Fret 1-7)</li>
                        <li>Each chord card will show "Capo X: Sounds as [chord]" indicating the actual pitch</li>
                        <li>The chord diagram and fingering remain the same - it's the shape you play</li>
                        <li>When you click Play, you'll hear the transposed chord</li>
                    </ul>

                    <p><strong>Examples:</strong></p>
                    <ul>
                        <li>Capo on Fret 2: C Major shows "Capo 2: Sounds as D Major"</li>
                        <li>Capo on Fret 2: G Major shows "Capo 2: Sounds as A Major"</li>
                        <li>Capo on Fret 2: Am shows "Capo 2: Sounds as Bm"</li>
                        <li>Capo on Fret 5: C Major shows "Capo 5: Sounds as F Major"</li>
                    </ul>

                    <p><strong>Combining with Tuning Offset:</strong></p>
                    <p>Both capo and tuning offset affect audio playback and can be used together. For example:</p>
                    <ul>
                        <li>Capo Fret 2 + Tuning Offset -1 = net +1 semitone from written chord</li>
                        <li>Capo Fret 3 + Tuning Offset 0 = +3 semitones (standard tuning with capo)</li>
                    </ul>

                    <p><strong>Visual indicator:</strong></p>
                    <p>When a capo position is active, the capo dropdown will be highlighted to remind you it's in use.</p>

                    <p>Your capo setting is automatically saved and will persist across sessions.</p>
                </section>

                <section class="about-section">
                    <h3>Practice Tools</h3>

                    <h4>Metronome</h4>
                    <p>Use the metronome to:</p>
                    <ul>
                        <li>Build timing and rhythm skills</li>
                        <li>Practice chord changes at different tempos</li>
                        <li>Gradually increase speed as you improve</li>
                        <li>Use different time signatures (4/4, 3/4, 6/8, 2/4)</li>
                        <li>Enable "Accent First Beat" to hear the downbeat emphasized</li>
                    </ul>

                    <h4>Chord Drill</h4>
                    <p>The Chord Drill randomly selects chords for you to practice:</p>
                    <ul>
                        <li>Choose difficulty level (beginner/intermediate/advanced)</li>
                        <li>Set how long to spend on each chord (2-8 seconds)</li>
                        <li>Enable sound to hear the chord when it changes</li>
                        <li>See the next chord coming to prepare your fingers</li>
                        <li>Track your progress with session statistics</li>
                    </ul>

                    <h4>Progression Practice</h4>
                    <p>Practice your saved progressions with:</p>
                    <ul>
                        <li>Synchronized metronome</li>
                        <li>Visual beat counter</li>
                        <li>Loop mode for continuous practice</li>
                        <li>Progress bar showing position in progression</li>
                    </ul>
                </section>

                <section class="about-section">
                    <h3>Settings</h3>
                    <p>Customize your experience:</p>
                    <ul>
                        <li><strong>Show Chord Tabs:</strong> Toggle chord tablature display</li>
                        <li><strong>Show Finger Positions:</strong> Toggle finger numbers in chord diagrams</li>
                        <li><strong>Show Arpeggio Tabs:</strong> Toggle arpeggio tablature display</li>
                        <li><strong>Show Arpeggio Tips:</strong> Toggle fingering tips for arpeggios</li>
                        <li><strong>Show All Arpeggio Notes:</strong> Display all instances of arpeggio notes across the fretboard</li>
                        <li><strong>Dark Mode:</strong> Switch to a darker color scheme</li>
                        <li><strong>Left-Handed Mode:</strong> Flip diagrams for left-handed players</li>
                        <li><strong>Compact Mode:</strong> Enable to fit more chords on screen with tighter spacing - reduces padding, margins, and font sizes throughout the app for a denser layout</li>
                    </ul>
                </section>

                <section class="about-section">
                    <h3>Tips for Success</h3>
                    <ul>
                        <li><strong>Start slow:</strong> Use the metronome at a comfortable tempo and gradually increase</li>
                        <li><strong>Practice transitions:</strong> Focus on moving smoothly between chords</li>
                        <li><strong>Use arpeggios:</strong> Playing chord tones individually helps you learn their locations</li>
                        <li><strong>Experiment with modes:</strong> Try the same chord progression in different modes to hear how the mood changes</li>
                        <li><strong>Build progressions:</strong> Use the Progression Builder to create and save your own sequences</li>
                        <li><strong>Learn theory gradually:</strong> Understanding why chords work together will make you a better musician</li>
                    </ul>
                </section>

                <section class="about-section">
                    <h3>Credits</h3>
                    <p>Guitar Chord Explorer uses the Web Audio API for sound generation and SVG for diagram rendering. All chord diagrams and tablature are generated programmatically.</p>
                    <p>This app is designed to be a comprehensive learning tool for guitarists of all levels. We hope it helps you on your musical journey!</p>
                </section>
            </div>
        `;
    },

    // ==========================================
    // COLLAPSIBLE SECTIONS
    // ==========================================

    /**
     * Initialize collapsible sections
     */
    initCollapsibleSections() {
        // All sections collapsed by default except chord section
        // Selection panel and Results area stay visible (chord section)

        // Collapse arpeggio section (already has toggle)
        this.state.arpeggiosExpanded = false;

        // Collapse progression builder
        const progressionBuilder = document.getElementById('progression-builder');
        if (progressionBuilder) {
            progressionBuilder.classList.add('collapsed');
        }

        // Collapse practice tools
        const practiceTools = document.getElementById('practice-tools');
        if (practiceTools) {
            practiceTools.classList.add('collapsed');
        }
    },

    /**
     * Toggle section collapse state
     */
    toggleSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.classList.toggle('collapsed');
        }
    },

    // ==========================================
    // FAVORITES METHODS
    // ==========================================

    /**
     * Load favorites from localStorage
     */
    loadFavorites() {
        try {
            const saved = localStorage.getItem('guitarExplorerFavorites');
            if (saved) {
                this.state.favorites = JSON.parse(saved);
            }
        } catch (error) {
            console.error('Failed to load favorites:', error);
            this.state.favorites = [];
        }
    },

    /**
     * Save favorites to localStorage
     */
    saveFavorites() {
        try {
            localStorage.setItem('guitarExplorerFavorites', JSON.stringify(this.state.favorites));
        } catch (error) {
            console.error('Failed to save favorites:', error);
        }
    },

    /**
     * Toggle chord as favorite
     */
    toggleFavorite(chordId) {
        const index = this.state.favorites.indexOf(chordId);
        if (index > -1) {
            this.state.favorites.splice(index, 1);
        } else {
            this.state.favorites.push(chordId);
        }
        this.saveFavorites();
        return index === -1; // Returns true if now favorite
    },

    /**
     * Check if chord is favorite
     */
    isFavorite(chordId) {
        return this.state.favorites.includes(chordId);
    },

    // ==========================================
    // ARPEGGIO SEQUENCE BUILDER METHODS
    // ==========================================

    /**
     * Initialize arpeggio sequence builder
     */
    initArpeggioSequenceBuilder() {
        document.getElementById('clear-sequence')?.addEventListener('click', () => this.clearArpeggioSequence());
        document.getElementById('generate-sequence-tab')?.addEventListener('click', () => this.generateSequenceTablature());
        document.getElementById('random-sequence')?.addEventListener('click', () => this.randomArpeggioSequence());
        document.getElementById('play-sequence-tab')?.addEventListener('click', () => this.playSequenceTablature());
    },

    /**
     * Add arpeggio to sequence
     */
    addToArpeggioSequence(arpeggio) {
        this.state.arpeggioSequence.push({
            id: arpeggio.id || arpeggio.chordId,
            name: arpeggio.name,
            arpeggio: arpeggio
        });
        this.renderArpeggioSequence();
    },

    /**
     * Remove arpeggio from sequence
     */
    removeFromArpeggioSequence(index) {
        this.state.arpeggioSequence.splice(index, 1);
        this.renderArpeggioSequence();
    },

    /**
     * Clear arpeggio sequence
     */
    clearArpeggioSequence() {
        this.state.arpeggioSequence = [];
        this.renderArpeggioSequence();
        document.getElementById('sequence-tablature')?.classList.add('hidden');
    },

    /**
     * Render arpeggio sequence slots
     */
    renderArpeggioSequence() {
        const container = document.getElementById('sequence-slots');
        if (!container) return;

        container.innerHTML = '';

        this.state.arpeggioSequence.forEach((item, index) => {
            const slot = document.createElement('div');
            slot.className = 'sequence-slot-item';
            slot.draggable = true;
            slot.dataset.index = index;

            slot.innerHTML = `
                <span class="slot-name">${item.name}</span>
                <button class="slot-remove" title="Remove">&times;</button>
            `;

            // Remove button
            slot.querySelector('.slot-remove').addEventListener('click', (e) => {
                e.stopPropagation();
                this.removeFromArpeggioSequence(index);
            });

            // Drag events
            slot.addEventListener('dragstart', (e) => {
                slot.classList.add('dragging');
                e.dataTransfer.setData('text/plain', index.toString());
                e.dataTransfer.effectAllowed = 'move';
            });

            slot.addEventListener('dragend', () => {
                slot.classList.remove('dragging');
            });

            slot.addEventListener('dragover', (e) => {
                e.preventDefault();
                const dragging = container.querySelector('.dragging');
                if (dragging && dragging !== slot) {
                    const rect = slot.getBoundingClientRect();
                    const midpoint = rect.left + rect.width / 2;
                    if (e.clientX < midpoint) {
                        container.insertBefore(dragging, slot);
                    } else {
                        container.insertBefore(dragging, slot.nextSibling);
                    }
                }
            });

            slot.addEventListener('drop', (e) => {
                e.preventDefault();
                // Rebuild sequence from DOM order
                const items = container.querySelectorAll('.sequence-slot-item');
                const newSequence = [];
                items.forEach(item => {
                    const idx = parseInt(item.dataset.index);
                    if (this.state.arpeggioSequence[idx]) {
                        newSequence.push(this.state.arpeggioSequence[idx]);
                    }
                });
                this.state.arpeggioSequence = newSequence;
                this.renderArpeggioSequence();
            });

            container.appendChild(slot);
        });
    },

    /**
     * Generate combined tablature for arpeggio sequence
     */
    generateSequenceTablature() {
        if (this.state.arpeggioSequence.length === 0) {
            alert('Add some arpeggios to the sequence first!');
            return;
        }

        const tabContainer = document.getElementById('sequence-tablature');
        const tabContent = document.getElementById('sequence-tab-content');

        if (!tabContainer || !tabContent) return;

        // Generate combined tablature
        const stringNames = ['e', 'B', 'G', 'D', 'A', 'E'];
        const strings = [[], [], [], [], [], []];
        const separator = '---';

        this.state.arpeggioSequence.forEach((item, seqIndex) => {
            const arpeggio = item.arpeggio;
            if (!arpeggio || !arpeggio.pattern) return;

            // Add separator between arpeggios (except first)
            if (seqIndex > 0) {
                for (let i = 0; i < 6; i++) {
                    strings[i].push(separator);
                }
            }

            // Build tab for this arpeggio pattern
            arpeggio.pattern.forEach(step => {
                const stringIdx = 6 - step.string; // Convert string number to array index
                const fret = step.fret.toString().padStart(2, '-');

                for (let i = 0; i < 6; i++) {
                    if (i === stringIdx) {
                        strings[i].push(fret);
                    } else {
                        strings[i].push('--');
                    }
                }
            });
        });

        // Build tablature string
        let tabString = '';
        stringNames.forEach((name, idx) => {
            tabString += `${name}|${strings[idx].join('-')}|\n`;
        });

        tabContent.textContent = tabString;
        tabContainer.classList.remove('hidden');

        // Enable play button
        const playBtn = document.getElementById('play-sequence-tab');
        if (playBtn) {
            playBtn.disabled = false;
        }
    },

    /**
     * Random arpeggio sequence - select 4-8 random arpeggios from displayed chords
     */
    randomArpeggioSequence() {
        // Get displayed chords that have arpeggios
        const availableArpeggios = [];

        this.state.displayedChords.forEach(chord => {
            const arpeggio = getArpeggioForChord(chord.id);
            if (arpeggio) {
                availableArpeggios.push({
                    id: arpeggio.chordId,
                    name: arpeggio.name,
                    arpeggio: arpeggio
                });
            }
        });

        if (availableArpeggios.length === 0) {
            alert('No arpeggios available. Please show some chords first!');
            return;
        }

        // Random count between 4 and 8
        const count = Math.floor(Math.random() * 5) + 4; // 4 to 8
        const actualCount = Math.min(count, availableArpeggios.length);

        // Shuffle and pick
        const shuffled = [...availableArpeggios].sort(() => Math.random() - 0.5);

        // Clear current sequence and add random arpeggios
        this.state.arpeggioSequence = shuffled.slice(0, actualCount);
        this.renderArpeggioSequence();

        // Hide tablature and disable play button (need to regenerate)
        document.getElementById('sequence-tablature')?.classList.add('hidden');
        const playBtn = document.getElementById('play-sequence-tab');
        if (playBtn) {
            playBtn.disabled = true;
        }
    },

    /**
     * Play the arpeggio sequence tablature
     */
    async playSequenceTablature() {
        if (this.state.arpeggioSequence.length === 0) return;

        const playBtn = document.getElementById('play-sequence-tab');
        if (!playBtn || playBtn.disabled) return;

        // Prevent multiple plays
        if (AudioEngine.isPlaying) return;

        // Update button to show playing state
        playBtn.classList.add('playing');
        const originalContent = playBtn.innerHTML;
        playBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
            Playing...
        `;

        await AudioEngine.init();
        await AudioEngine.resume();

        AudioEngine.isPlaying = true;

        const bpm = AudioEngine.settings.arpeggioTempo || 120;
        const beatDuration = 60 / bpm;
        const noteDuration = beatDuration * 0.8;
        const startTime = AudioEngine.context.currentTime + 0.05;

        let noteIndex = 0;
        const gapBetweenArpeggios = 2; // 2 beat gap between arpeggios

        // Play each arpeggio in sequence
        this.state.arpeggioSequence.forEach((item, seqIndex) => {
            const arpeggio = item.arpeggio;
            if (!arpeggio || !arpeggio.pattern) return;

            // Calculate start time for this arpeggio (including gaps)
            const arpeggioStartOffset = noteIndex * beatDuration * 0.5;

            // Play each note in the pattern
            arpeggio.pattern.forEach((note, idx) => {
                const frequency = AudioEngine.getFrequency(note.string, note.fret);
                const noteTime = startTime + arpeggioStartOffset + (idx * beatDuration * 0.5);
                const velocity = note.interval === 'R' ? 0.85 : 0.7;

                AudioEngine.playNote(frequency, noteTime, noteDuration, velocity);
            });

            // Update note index (pattern length + gap)
            noteIndex += arpeggio.pattern.length + gapBetweenArpeggios;
        });

        // Calculate total duration
        const totalDuration = (noteIndex * beatDuration * 0.5 * 1000) + 500;

        // Reset button after playback
        setTimeout(() => {
            AudioEngine.isPlaying = false;
            playBtn.classList.remove('playing');
            playBtn.innerHTML = originalContent;
        }, totalDuration);
    },

    // ==========================================
    // SCALE BUILDER
    // ==========================================

    /**
     * Initialize Scale Builder
     */
    initScaleBuilder() {
        // Scale mode toggle
        document.getElementById('scale-mode-single')?.addEventListener('click', () => {
            this.setScaleMode('single');
        });

        document.getElementById('scale-mode-per-chord')?.addEventListener('click', () => {
            this.setScaleMode('per-chord');
        });

        // Scale key selector
        document.getElementById('scale-key-select')?.addEventListener('change', (e) => {
            if (this.state.scaleBuilder.currentScale) {
                this.state.scaleBuilder.currentScale.root = e.target.value;
                this.renderMainScale();
            }
        });

        // Scale type selector
        document.getElementById('scale-type-select')?.addEventListener('change', (e) => {
            if (e.target.value && this.state.scaleBuilder.currentScale) {
                this.state.scaleBuilder.currentScale.type = e.target.value;
                this.renderMainScale();
            }
        });

        // Chord tones toggle
        document.getElementById('show-chord-tones-toggle')?.addEventListener('change', (e) => {
            this.state.scaleBuilder.showChordTones = e.target.checked;
            this.renderMainScale();
        });

        document.getElementById('show-chord-tones-per-chord-toggle')?.addEventListener('change', (e) => {
            this.state.scaleBuilder.showChordTones = e.target.checked;
            this.renderPerChordModes();
        });

        // Show empty state initially
        this.showScaleEmptyState();
    },

    /**
     * Set scale mode (single or per-chord)
     */
    setScaleMode(mode) {
        this.state.scaleBuilder.mode = mode;

        // Update button states
        document.getElementById('scale-mode-single')?.classList.toggle('active', mode === 'single');
        document.getElementById('scale-mode-per-chord')?.classList.toggle('active', mode === 'per-chord');

        // Toggle sections
        document.getElementById('main-scale-section')?.classList.toggle('hidden', mode !== 'single');
        document.getElementById('per-chord-modes-section')?.classList.toggle('hidden', mode !== 'per-chord');

        // Render appropriate content if progression exists
        const hasValidProgression = this.state.progression.some(item => item !== null && item !== undefined);
        if (hasValidProgression) {
            if (mode === 'single') {
                this.renderMainScale();
            } else {
                this.renderPerChordModes();
            }
        }
    },

    /**
     * Update Scale Builder when progression changes
     */
    updateScaleBuilder() {
        // Check if there are any valid (non-null) entries in the progression
        const hasValidProgression = this.state.progression.some(item => item !== null && item !== undefined);

        if (!hasValidProgression) {
            this.showScaleEmptyState();
            return;
        }

        // Hide empty state
        document.getElementById('scale-empty-state')?.classList.add('hidden');

        // Analyze progression
        const analysis = ScaleDetection.analyzeProgression(this.state.progression);

        // Preserve user's scale type preference if they had selected one
        const previousScaleType = this.state.scaleBuilder.currentScale?.type;
        const newKey = analysis.key;
        
        // If user had selected a specific scale type, try to maintain it with the new key
        if (previousScaleType && newKey) {
            // Check if the previous scale type exists in alternatives or if it's the main scale type
            const matchingAlternative = analysis.alternativeScales.find(s => s.type === previousScaleType);
            
            if (matchingAlternative) {
                // User had selected an alternative scale type, maintain it
                this.state.scaleBuilder.currentScale = matchingAlternative;
            } else if (previousScaleType === analysis.mainScale.type) {
                // User's selection matches the new main scale, use it
                this.state.scaleBuilder.currentScale = analysis.mainScale;
            } else {
                // Try to create a scale with the same type but new key
                const scaleTypeName = this.getScaleTypeName(previousScaleType);
                if (scaleTypeName) {
                    this.state.scaleBuilder.currentScale = {
                        root: newKey.note,
                        type: previousScaleType,
                        name: `${newKey.note} ${scaleTypeName}`,
                        description: this.getScaleDescription(previousScaleType)
                    };
                } else {
                    // Fall back to main scale if we can't preserve the type
                    this.state.scaleBuilder.currentScale = analysis.mainScale;
                }
            }
        } else {
            // No previous scale or first time, use the analyzed main scale
            this.state.scaleBuilder.currentScale = analysis.mainScale;
        }
        
        this.state.scaleBuilder.alternativeScales = analysis.alternativeScales;
        this.state.scaleBuilder.perChordModes = analysis.perChordModes;
        this.state.scaleBuilder.detectedKey = analysis.key;

        // Update UI based on current mode
        if (this.state.scaleBuilder.mode === 'single') {
            this.renderMainScale();
            this.renderAlternativeScales();
        } else {
            this.renderPerChordModes();
        }
    },

    /**
     * Show empty state
     */
    showScaleEmptyState() {
        document.getElementById('scale-empty-state')?.classList.remove('hidden');
        document.getElementById('main-scale-section')?.classList.add('hidden');
        document.getElementById('per-chord-modes-section')?.classList.add('hidden');
        document.getElementById('position-patterns-section')?.classList.add('hidden');
    },

    /**
     * Render main scale (single scale for all)
     */
    renderMainScale() {
        const scale = this.state.scaleBuilder.currentScale;
        if (!scale) return;

        // Show section
        document.getElementById('main-scale-section')?.classList.remove('hidden');

        // Update key selector
        const keySelect = document.getElementById('scale-key-select');
        if (keySelect && scale.root) {
            keySelect.value = scale.root;
        }

        // Update scale type selector
        const scaleSelect = document.getElementById('scale-type-select');
        if (scaleSelect) {
            scaleSelect.value = scale.type;
        }

        // Update scale name with clear key display
        const scaleTypeName = this.getScaleTypeName(scale.type);
        const scaleName = `${scale.root} ${scaleTypeName}`;
        document.getElementById('main-scale-name').textContent = scaleName;
        document.getElementById('main-scale-description').textContent = scale.description || '';

        // Get chord tones from current progression
        const chordTones = this.getProgressionChordTones();

        // Render diagram
        const diagramContainer = document.getElementById('main-scale-diagram');
        if (diagramContainer) {
            diagramContainer.innerHTML = '';
            const diagram = ScaleRenderer.render(scale, {
                showChordTones: this.state.scaleBuilder.showChordTones,
                chordTones: chordTones
            });
            diagramContainer.appendChild(diagram);
        }

        // Render position patterns for all scales
        this.renderPositionPatterns(scale);
    },

    /**
     * Get human-readable scale type name
     */
    getScaleTypeName(scaleType) {
        const scaleNames = {
            'major': 'Major (Ionian)',
            'natural-minor': 'Natural Minor (Aeolian)',
            'major-pentatonic': 'Major Pentatonic',
            'minor-pentatonic': 'Minor Pentatonic',
            'blues': 'Blues Scale',
            'ionian': 'Ionian (Major)',
            'dorian': 'Dorian',
            'phrygian': 'Phrygian',
            'lydian': 'Lydian',
            'mixolydian': 'Mixolydian',
            'aeolian': 'Aeolian (Natural Minor)',
            'locrian': 'Locrian',
            'harmonic-minor': 'Harmonic Minor',
            'melodic-minor': 'Melodic Minor',
            'whole-tone': 'Whole Tone',
            'diminished': 'Diminished'
        };
        return scaleNames[scaleType] || scaleType;
    },

    /**
     * Render alternative scales
     */
    renderAlternativeScales() {
        const container = document.getElementById('alternative-scales');
        if (!container) return;

        container.innerHTML = '';

        if (this.state.scaleBuilder.alternativeScales.length === 0) return;

        const title = document.createElement('h4');
        title.textContent = 'Alternative Scale Options';
        title.style.marginTop = '30px';
        title.style.marginBottom = '15px';
        container.appendChild(title);

        const altGrid = document.createElement('div');
        altGrid.className = 'alternative-scales-grid';
        altGrid.style.display = 'grid';
        altGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
        altGrid.style.gap = '15px';

        this.state.scaleBuilder.alternativeScales.forEach(altScale => {
            const card = document.createElement('div');
            card.className = 'alternative-scale-card';
            card.style.background = 'var(--bg-card)';
            card.style.borderRadius = 'var(--radius-md)';
            card.style.padding = 'var(--spacing-md)';
            card.style.cursor = 'pointer';
            card.style.border = '2px solid transparent';
            card.style.transition = 'border-color 0.2s';

            card.innerHTML = `
                <h5 style="margin: 0 0 8px 0; color: var(--text-primary);">${altScale.name}</h5>
                <p style="margin: 0; font-size: 14px; color: var(--text-secondary);">${altScale.description}</p>
            `;

            card.addEventListener('click', () => {
                this.state.scaleBuilder.currentScale = altScale;
                this.renderMainScale();
            });

            card.addEventListener('mouseenter', () => {
                card.style.borderColor = 'var(--primary-color)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.borderColor = 'transparent';
            });

            altGrid.appendChild(card);
        });

        container.appendChild(altGrid);
    },

    /**
     * Render per-chord modes
     */
    renderPerChordModes() {
        const container = document.getElementById('per-chord-scales-list');
        if (!container) return;

        // Show section
        document.getElementById('per-chord-modes-section')?.classList.remove('hidden');

        container.innerHTML = '';

        if (this.state.scaleBuilder.perChordModes.length === 0) return;

        this.state.scaleBuilder.perChordModes.forEach(modeData => {
            const card = document.createElement('div');
            card.className = 'per-chord-scale-card';
            card.style.marginBottom = '30px';
            card.style.background = 'var(--bg-card)';
            card.style.borderRadius = 'var(--radius-lg)';
            card.style.padding = 'var(--spacing-lg)';
            card.style.boxShadow = '0 2px 8px var(--shadow-color)';

            const header = document.createElement('div');
            header.style.marginBottom = '15px';
            header.innerHTML = `
                <h4 style="margin: 0 0 5px 0; color: var(--primary-color);">
                    Play over ${modeData.chordName}
                </h4>
                <h3 style="margin: 0 0 8px 0; color: var(--text-primary);">
                    ${modeData.scale.name}
                </h3>
                <p style="margin: 0; color: var(--text-secondary); font-size: 14px;">
                    ${modeData.scale.description}
                </p>
            `;
            card.appendChild(header);

            const diagram = ScaleRenderer.render(modeData.scale, {
                showChordTones: this.state.scaleBuilder.showChordTones,
                chordTones: modeData.chordTones
            });
            card.appendChild(diagram);

            container.appendChild(card);
        });
    },

    /**
     * Render position patterns for pentatonic scales
     */
    renderPositionPatterns(scale) {
        const container = document.getElementById('position-patterns-section');
        if (!container) return;

        container.innerHTML = '';

        const patterns = ScaleRenderer.renderPositionPatterns(scale);
        if (patterns) {
            container.appendChild(patterns);
            container.classList.remove('hidden');
        } else {
            container.classList.add('hidden');
        }
    },

    /**
     * Get all chord tones from current progression
     */
    getProgressionChordTones() {
        const allTones = new Set();

        this.state.progression.forEach(chord => {
            const tones = ScaleDetection.getChordTones(chord.root, this.parseChordQuality(chord));
            tones.forEach(tone => allTones.add(tone));
        });

        return Array.from(allTones);
    },

    /**
     * Parse chord quality from chord object
     */
    parseChordQuality(chord) {
        const name = chord.name || '';

        if (name.includes('m7') || name.includes('min7')) return 'minor7';
        if (name.includes('m') || name.includes('min')) return 'minor';
        if (name.includes('7') && !name.includes('maj7')) return 'dominant7';
        if (name.includes('maj7') || name.includes('M7')) return 'major7';
        if (name.includes('dim')) return 'diminished';
        if (name.includes('aug')) return 'augmented';

        return 'major';
    },

    /**
     * Get human-readable name for a scale type
     */
    getScaleTypeName(type) {
        const scaleNames = {
            'major': 'Major',
            'ionian': 'Ionian',
            'dorian': 'Dorian',
            'phrygian': 'Phrygian',
            'lydian': 'Lydian',
            'mixolydian': 'Mixolydian',
            'aeolian': 'Aeolian',
            'locrian': 'Locrian',
            'natural-minor': 'Natural Minor',
            'harmonic-minor': 'Harmonic Minor',
            'melodic-minor': 'Melodic Minor',
            'major-pentatonic': 'Major Pentatonic',
            'minor-pentatonic': 'Minor Pentatonic',
            'blues': 'Blues',
            'whole-tone': 'Whole Tone',
            'diminished': 'Diminished'
        };
        return scaleNames[type] || null;
    },

    /**
     * Get description for a scale type
     */
    getScaleDescription(type) {
        const descriptions = {
            'major-pentatonic': 'Simplified 5-note version - great for beginners, sounds good everywhere',
            'minor-pentatonic': 'Simplified 5-note minor scale - perfect for blues and rock',
            'blues': 'Adds bluesy flavor with the "blue note" (b5)',
            'dorian': 'Minor scale with a brighter sound - great for jazz and funk',
            'mixolydian': 'Major scale with a b7 - perfect for blues and rock',
            'major': 'Contains all the chords in your progression',
            'natural-minor': 'Contains all the chords in your progression',
            'ionian': 'The major scale - bright and happy',
            'aeolian': 'The natural minor scale - melancholic',
            'phrygian': 'Exotic Spanish/Middle Eastern sound',
            'lydian': 'Dreamy, floating sound with raised 4th',
            'locrian': 'Dark and unstable - rarely used',
            'harmonic-minor': 'Classical minor sound with raised 7th',
            'melodic-minor': 'Jazz minor scale',
            'whole-tone': 'Dreamy, ambiguous sound',
            'diminished': 'Symmetrical scale for diminished chords'
        };
        return descriptions[type] || 'Play these notes over your progression';
    }
};

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
