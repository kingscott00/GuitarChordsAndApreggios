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
        voicingFilter: 'all',
        selectedChords: [],
        displayedChords: [],
        hasSearched: false,
        arpeggiosExpanded: false,
        // Progression builder state
        progression: [],
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
            darkTheme: false,
            leftHanded: false
        },
        // Favorites state
        favorites: [],
        // Arpeggio sequence state
        arpeggioSequence: []
    },

    /**
     * Initialize the application
     */
    init() {
        this.loadSettings();
        this.bindEventListeners();
        this.initVolumeControl();
        this.initSettingsPanel();
        this.initCollapsibleSections();
        this.initArpeggioSequenceBuilder();
        this.initProgressionBuilder();
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
        // Navigation mode buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
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

        // Voicing filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleVoicingFilter(e));
        });

        // Show Chords button
        document.getElementById('show-chords-btn')?.addEventListener('click', () => {
            this.showChords();
        });

        // Arpeggio toggle
        document.getElementById('arpeggio-toggle')?.addEventListener('click', () => {
            this.toggleArpeggios();
        });
    },

    /**
     * Handle navigation mode change
     */
    handleModeChange(e) {
        const mode = e.target.dataset.mode;
        this.state.selectionMode = mode;

        // Update active button
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === mode);
        });

        // Show/hide appropriate selector
        document.getElementById('mood-selector').classList.toggle('hidden', mode !== 'mood');
        document.getElementById('style-selector').classList.toggle('hidden', mode !== 'style');
        document.getElementById('theory-selector').classList.toggle('hidden', mode !== 'theory');

        // Clear previous selections and hide info banner
        this.clearSelections();
        this.hideSelectionInfo();
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
        }

        this.state.selectedChords = chords;
        this.state.hasSearched = true;

        // Show selection info banner
        if (selectionInfo) {
            this.showSelectionInfo(selectionInfo, chords.length);
        } else {
            this.hideSelectionInfo();
        }

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
     * Apply voicing filter and display chords
     */
    applyFiltersAndDisplay() {
        let chords = [...this.state.selectedChords];

        // Apply voicing/difficulty filter
        chords = SelectionEngine.filterByDifficulty(chords, this.state.voicingFilter);

        // Sort chords
        chords = SelectionEngine.sortChords(chords, 'root');

        this.state.displayedChords = chords;
        this.renderChordGrid(chords);

        // Show arpeggio section and update if expanded
        this.showArpeggioSection(chords);
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

        // Add roman numeral if in theory mode and chord has diatonic info
        if (chord.diatonicInfo) {
            const romanNumeral = document.createElement('span');
            romanNumeral.className = 'theory-badge';
            romanNumeral.innerHTML = `<span class="roman-numeral">${chord.diatonicInfo.romanNumeral}</span>`;
            nameContainer.appendChild(romanNumeral);
        }

        const headerRight = document.createElement('div');
        headerRight.className = 'chord-header-right';

        const symbol = document.createElement('span');
        symbol.className = 'chord-symbol';
        symbol.textContent = chord.symbol;

        // Difficulty badge
        const difficultyBadge = document.createElement('span');
        difficultyBadge.className = `difficulty-badge ${this.getDifficultyClass(chord.difficulty)}`;
        difficultyBadge.textContent = this.getDifficultyLabel(chord.difficulty);

        headerRight.appendChild(symbol);
        headerRight.appendChild(difficultyBadge);

        header.appendChild(nameContainer);
        header.appendChild(headerRight);

        // Body
        const body = document.createElement('div');
        body.className = 'chord-card-body';

        // Voicing selector (only show if multiple voicings exist)
        if (voicings.length > 1) {
            const voicingSelector = document.createElement('div');
            voicingSelector.className = 'voicing-selector';

            const voicingLabel = document.createElement('label');
            voicingLabel.textContent = 'Voicing:';
            voicingLabel.setAttribute('for', `voicing-${chord.id}`);

            const voicingSelect = document.createElement('select');
            voicingSelect.id = `voicing-${chord.id}`;
            voicingSelect.className = 'voicing-select';

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

            voicingSelector.appendChild(voicingLabel);
            voicingSelector.appendChild(voicingSelect);
            body.appendChild(voicingSelector);
        }

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

        body.appendChild(diagramContainer);
        body.appendChild(tab);
        body.appendChild(fingerInfo);

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

        const favBtn = document.createElement('button');
        const isFavorite = this.isFavorite(chord.id);
        favBtn.className = `action-btn fav-btn${isFavorite ? ' active' : ''}`;
        favBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="${isFavorite ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>${isFavorite ? 'Favorited' : 'Favorite'}</span>
        `;
        favBtn.title = 'Toggle favorite';
        favBtn.addEventListener('click', () => {
            const currentChord = getChordById(card.dataset.chordId);
            if (currentChord) {
                const nowFavorite = this.toggleFavorite(currentChord.id);
                favBtn.classList.toggle('active', nowFavorite);
                favBtn.querySelector('svg').setAttribute('fill', nowFavorite ? 'currentColor' : 'none');
                favBtn.querySelector('span').textContent = nowFavorite ? 'Favorited' : 'Favorite';
            }
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
        actions.appendChild(favBtn);
        actions.appendChild(addBtn);

        card.appendChild(header);
        card.appendChild(body);
        card.appendChild(actions);

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

        // Update difficulty badge
        const difficultyBadge = card.querySelector('.difficulty-badge');
        difficultyBadge.className = `difficulty-badge ${this.getDifficultyClass(newChord.difficulty)}`;
        difficultyBadge.textContent = this.getDifficultyLabel(newChord.difficulty);

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
     * Render arpeggios for displayed chords
     */
    renderArpeggios(chords) {
        const arpeggioList = document.getElementById('arpeggio-list');
        if (!arpeggioList) return;

        arpeggioList.innerHTML = '';

        // Add legend at the top
        const legend = ArpeggioRenderer.renderLegend();
        arpeggioList.appendChild(legend);

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

        const position = document.createElement('span');
        position.className = 'arpeggio-position';
        position.textContent = arpeggio.position;

        headerLeft.appendChild(name);
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

        // Notes display
        const notesContainer = document.createElement('div');
        notesContainer.className = 'arpeggio-notes';

        arpeggio.notes.forEach((note, index) => {
            const badge = document.createElement('span');
            badge.className = `note-badge${index === 0 ? ' root' : ''}`;
            badge.textContent = note;
            notesContainer.appendChild(badge);
        });

        // Diagram container
        const diagramContainer = document.createElement('div');
        diagramContainer.className = 'arpeggio-diagram-container';

        const diagram = ArpeggioRenderer.render(arpeggio);
        diagramContainer.appendChild(diagram);

        // Tab
        const tab = ArpeggioRenderer.renderTab(arpeggio);

        // Tips
        const tips = document.createElement('div');
        tips.className = 'arpeggio-tips';
        tips.innerHTML = `<span class="arpeggio-tips-label">Tip:</span>${arpeggio.fingeringTips}`;

        card.appendChild(header);
        card.appendChild(notesContainer);
        card.appendChild(diagramContainer);
        card.appendChild(tab);
        card.appendChild(tips);

        return card;
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

            await AudioEngine.playArpeggio(arpeggio);

            // Calculate duration and remove playing state
            const beatDuration = 60 / AudioEngine.settings.arpeggioTempo;
            const totalDuration = (arpeggio.pattern.length * beatDuration * 0.5 * 1000) + 500;

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
                symbol: chord.symbol
            };
            this.renderProgressionSlot(targetSlot, chord);
            targetSlot.classList.remove('selected');
        }
    },

    /**
     * Render a filled progression slot
     */
    renderProgressionSlot(slot, chord) {
        slot.classList.remove('empty');
        slot.classList.add('filled');
        slot.setAttribute('draggable', 'true');

        slot.innerHTML = `
            <span class="slot-chord-name">${chord.name}</span>
            <span class="slot-chord-symbol">${chord.symbol}</span>
            <button class="slot-remove" title="Remove chord">&times;</button>
        `;

        // Add remove button listener
        const removeBtn = slot.querySelector('.slot-remove');
        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.removeFromProgression(parseInt(slot.dataset.index));
        });
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
    },

    /**
     * Load a progression template
     */
    loadTemplate(templateId) {
        if (!templateId) return;

        // Clear current progression first
        this.clearProgression();

        // Get template chords based on current key
        const key = this.state.currentKey;
        const templates = this.getProgressionTemplates();
        const template = templates[templateId];

        if (!template) return;

        // Get scale degrees and find matching chords
        const scaleChords = this.getChordsForKey(key, template.degrees);

        scaleChords.forEach((chordInfo, index) => {
            if (chordInfo && index < document.querySelectorAll('.progression-slot').length) {
                const slot = document.querySelector(`.progression-slot[data-index="${index}"]`);
                if (slot) {
                    this.state.progression[index] = chordInfo;
                    const chord = getChordById(chordInfo.chordId);
                    if (chord) {
                        this.renderProgressionSlot(slot, chord);
                    }
                }
            } else if (chordInfo) {
                // Need to add more slots
                this.addProgressionSlot();
                const slot = document.querySelector(`.progression-slot[data-index="${index}"]`);
                if (slot) {
                    this.state.progression[index] = chordInfo;
                    const chord = getChordById(chordInfo.chordId);
                    if (chord) {
                        this.renderProgressionSlot(slot, chord);
                    }
                }
            }
        });
    },

    /**
     * Get progression template definitions
     */
    getProgressionTemplates() {
        return {
            'i-iv-v-i': {
                name: 'I - IV - V - I (Basic)',
                degrees: [1, 4, 5, 1]
            },
            'i-v-vi-iv': {
                name: 'I - V - vi - IV (Pop)',
                degrees: [1, 5, 6, 4],
                minorDegrees: [6] // 6th degree is minor
            },
            'ii-v-i': {
                name: 'ii - V - I (Jazz)',
                degrees: [2, 5, 1],
                minorDegrees: [2]
            },
            'i-vi-iv-v': {
                name: 'I - vi - IV - V (50s)',
                degrees: [1, 6, 4, 5],
                minorDegrees: [6]
            },
            '12-bar-blues': {
                name: '12-Bar Blues',
                degrees: [1, 1, 1, 1, 4, 4, 1, 1, 5, 4, 1, 5]
            },
            'i-iv-i-v': {
                name: 'I - IV - I - V (Country)',
                degrees: [1, 4, 1, 5]
            }
        };
    },

    /**
     * Get chords for a key based on scale degrees
     */
    getChordsForKey(key, degrees) {
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
            // In major scale: ii, iii, vi are minor
            const minorDegrees = [2, 3, 6];
            const isMinor = minorDegrees.includes(degree);

            // Find a chord matching this root
            const allChords = getAllChords();
            let chord;

            if (isMinor) {
                // Look for minor chord
                chord = allChords.find(c =>
                    c.name === root + 'm' ||
                    (c.name.startsWith(root) && c.symbol === 'm')
                );
            }

            if (!chord) {
                // Look for major chord
                chord = allChords.find(c =>
                    c.name === root ||
                    (c.name === root && c.symbol === '')
                );
            }

            if (!chord) {
                // Fallback: find any chord with this root
                chord = allChords.find(c => c.name.startsWith(root));
            }

            if (chord) {
                return {
                    chordId: chord.id,
                    name: chord.name,
                    symbol: chord.symbol
                };
            }

            return null;
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

        // Apply dark theme
        document.body.classList.toggle('dark-theme', this.state.settings.darkTheme);

        // Apply left-handed mode
        document.body.classList.toggle('left-handed', this.state.settings.leftHanded);

        // Update settings panel checkboxes
        const showTabToggle = document.getElementById('show-tab-toggle');
        const showFingerToggle = document.getElementById('show-finger-toggle');
        const darkThemeToggle = document.getElementById('dark-theme-toggle');
        const leftHandedToggle = document.getElementById('left-handed-toggle');

        if (showTabToggle) showTabToggle.checked = this.state.settings.showTab;
        if (showFingerToggle) showFingerToggle.checked = this.state.settings.showFingerInfo;
        if (darkThemeToggle) darkThemeToggle.checked = this.state.settings.darkTheme;
        if (leftHandedToggle) leftHandedToggle.checked = this.state.settings.leftHanded;
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
    }
};

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
