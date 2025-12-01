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
        arpeggiosExpanded: false
    },

    /**
     * Initialize the application
     */
    init() {
        this.bindEventListeners();
        // Show all chords on initial load
        this.displayAllChords();
    },

    /**
     * Bind all event listeners
     */
    bindEventListeners() {
        // Navigation mode buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleModeChange(e));
        });

        // Mood selector buttons
        document.querySelectorAll('#mood-selector .selector-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleMoodSelect(e));
        });

        // Style selector buttons
        document.querySelectorAll('#style-selector .selector-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleStyleSelect(e));
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
     * Handle mood selection
     */
    handleMoodSelect(e) {
        const mood = e.target.dataset.mood;

        // Toggle selection
        if (this.state.currentMood === mood) {
            this.state.currentMood = null;
            e.target.classList.remove('active');
        } else {
            // Remove active from all mood buttons
            document.querySelectorAll('#mood-selector .selector-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            this.state.currentMood = mood;
            e.target.classList.add('active');
        }
    },

    /**
     * Handle style selection
     */
    handleStyleSelect(e) {
        const style = e.target.dataset.style;

        // Toggle selection
        if (this.state.currentStyle === style) {
            this.state.currentStyle = null;
            e.target.classList.remove('active');
        } else {
            // Remove active from all style buttons
            document.querySelectorAll('#style-selector .selector-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            this.state.currentStyle = style;
            e.target.classList.add('active');
        }
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

        document.querySelectorAll('.selector-btn').forEach(btn => {
            btn.classList.remove('active');
        });
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

        // Header
        const header = document.createElement('div');
        header.className = 'chord-card-header';

        const nameContainer = document.createElement('div');

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

        const symbol = document.createElement('span');
        symbol.className = 'chord-symbol';
        symbol.textContent = chord.symbol;

        header.appendChild(nameContainer);
        header.appendChild(symbol);

        // Difficulty badge
        const difficultyBadge = document.createElement('span');
        difficultyBadge.className = `difficulty-badge ${this.getDifficultyClass(chord.difficulty)}`;
        difficultyBadge.textContent = this.getDifficultyLabel(chord.difficulty);
        header.appendChild(difficultyBadge);

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

        body.appendChild(diagramContainer);
        body.appendChild(tab);
        body.appendChild(fingerInfo);

        // Actions (placeholder for Phase 4+)
        const actions = document.createElement('div');
        actions.className = 'chord-card-actions';

        const playBtn = document.createElement('button');
        playBtn.className = 'action-btn';
        playBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <span>Play</span>
        `;
        playBtn.disabled = true;
        playBtn.title = 'Audio playback coming in Phase 4';

        const favBtn = document.createElement('button');
        favBtn.className = 'action-btn';
        favBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>Favorite</span>
        `;
        favBtn.disabled = true;
        favBtn.title = 'Favorites coming in Phase 8';

        const addBtn = document.createElement('button');
        addBtn.className = 'action-btn';
        addBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <span>Add</span>
        `;
        addBtn.disabled = true;
        addBtn.title = 'Progression builder coming in Phase 6';

        actions.appendChild(playBtn);
        actions.appendChild(favBtn);
        actions.appendChild(addBtn);

        card.appendChild(header);
        card.appendChild(body);
        card.appendChild(actions);

        return card;
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
        const content = document.getElementById('arpeggio-content');
        content.innerHTML = '';

        // Add legend at the top
        const legend = ArpeggioRenderer.renderLegend();
        content.appendChild(legend);

        // Render each arpeggio
        chords.forEach(chord => {
            const arpeggio = getArpeggioForChord(chord.id);
            if (arpeggio) {
                const card = this.createArpeggioCard(arpeggio);
                content.appendChild(card);
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

        const name = document.createElement('span');
        name.className = 'arpeggio-name';
        name.textContent = arpeggio.name;

        const position = document.createElement('span');
        position.className = 'arpeggio-position';
        position.textContent = arpeggio.position;

        header.appendChild(name);
        header.appendChild(position);

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
    }
};

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
