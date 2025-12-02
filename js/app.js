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
            newspaperMode: false
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

        // Tab
        const tab = ArpeggioRenderer.renderTab(arpeggio);

        // Tips
        const tips = document.createElement('div');
        tips.className = 'arpeggio-tips';
        tips.innerHTML = `<span class="arpeggio-tips-label">Tip:</span>${arpeggio.fingeringTips}`;

        card.appendChild(header);
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

        // Update settings panel checkboxes
        const showTabToggle = document.getElementById('show-tab-toggle');
        const showFingerToggle = document.getElementById('show-finger-toggle');
        const showArpeggioTabToggle = document.getElementById('show-arpeggio-tab-toggle');
        const showArpeggioTipsToggle = document.getElementById('show-arpeggio-tips-toggle');
        const showAllArpeggioNotesToggle = document.getElementById('show-all-arpeggio-notes-toggle');
        const darkThemeToggle = document.getElementById('dark-theme-toggle');
        const leftHandedToggle = document.getElementById('left-handed-toggle');
        const newspaperModeToggle = document.getElementById('newspaper-mode-toggle');

        if (showTabToggle) showTabToggle.checked = this.state.settings.showTab;
        if (showFingerToggle) showFingerToggle.checked = this.state.settings.showFingerInfo;
        if (showArpeggioTabToggle) showArpeggioTabToggle.checked = this.state.settings.showArpeggioTab;
        if (showArpeggioTipsToggle) showArpeggioTipsToggle.checked = this.state.settings.showArpeggioTips;
        if (showAllArpeggioNotesToggle) showAllArpeggioNotesToggle.checked = this.state.settings.showAllArpeggioNotes;
        if (darkThemeToggle) darkThemeToggle.checked = this.state.settings.darkTheme;
        if (leftHandedToggle) leftHandedToggle.checked = this.state.settings.leftHanded;
        if (newspaperModeToggle) newspaperModeToggle.checked = this.state.settings.newspaperMode;
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

                    <h4>Reading Tablature (Tab)</h4>
                    <p>Tablature is a simple notation system for guitar:</p>
                    <ul>
                        <li>Six lines represent the six strings (top line = high e, bottom line = low E)</li>
                        <li>Numbers on the lines show which fret to press</li>
                        <li>"0" means play the open string</li>
                        <li>"x" means don't play that string</li>
                        <li>Read tablature from left to right</li>
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
