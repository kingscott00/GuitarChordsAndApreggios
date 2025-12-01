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
        displayedChords: []
    },

    /**
     * Initialize the application
     */
    init() {
        this.bindEventListeners();
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

        // Clear previous selections
        this.clearSelections();
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

        // Re-filter displayed chords
        this.filterAndDisplayChords();
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
        let chords = getAllChords();

        // Filter by mode
        switch (this.state.selectionMode) {
            case 'mood':
                if (this.state.currentMood) {
                    chords = getChordsByMood(this.state.currentMood);
                }
                break;
            case 'style':
                if (this.state.currentStyle) {
                    chords = getChordsByStyle(this.state.currentStyle);
                }
                break;
            case 'theory':
                // For Phase 1, just show all chords
                // Theory filtering will be implemented in Phase 2
                break;
        }

        this.state.selectedChords = chords;
        this.filterAndDisplayChords();
    },

    /**
     * Display all chords (initial load)
     */
    displayAllChords() {
        this.state.selectedChords = getAllChords();
        this.filterAndDisplayChords();
    },

    /**
     * Apply voicing filter and display chords
     */
    filterAndDisplayChords() {
        let chords = this.state.selectedChords;

        // Apply voicing filter
        chords = getChordsByDifficulty(this.state.voicingFilter);

        // If we have a mood/style selected, intersect with that selection
        if (this.state.selectedChords.length > 0 && this.state.selectedChords !== getAllChords()) {
            const selectedIds = new Set(this.state.selectedChords.map(c => c.id));
            chords = chords.filter(c => selectedIds.has(c.id));
        }

        this.state.displayedChords = chords;
        this.renderChordGrid(chords);
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

        const name = document.createElement('span');
        name.className = 'chord-name';
        name.textContent = chord.name;

        const symbol = document.createElement('span');
        symbol.className = 'chord-symbol';
        symbol.textContent = chord.symbol;

        header.appendChild(name);
        header.appendChild(symbol);

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

        // Difficulty badge
        const difficultyBadge = document.createElement('span');
        difficultyBadge.className = `difficulty-badge ${this.getDifficultyClass(chord.difficulty)}`;
        difficultyBadge.textContent = this.getDifficultyLabel(chord.difficulty);
        header.appendChild(difficultyBadge);

        card.appendChild(header);
        card.appendChild(body);
        card.appendChild(actions);

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
