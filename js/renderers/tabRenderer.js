/**
 * Guitar Chord Explorer - Tablature Renderer
 * Generates text-based tablature from chord data
 */

const TabRenderer = {
    // Configuration
    config: {
        stringLabels: ['e', 'B', 'G', 'D', 'A', 'E'],
        noteWidth: 3,
        showStringLabels: true,
        separator: '|'
    },

    /**
     * Render tablature for a chord
     * @param {Object} chord - Chord data object
     * @returns {HTMLElement} - Tab container element
     */
    render(chord) {
        const container = document.createElement('div');
        container.className = 'tab-container';

        const label = document.createElement('div');
        label.className = 'tab-label';
        label.textContent = 'TAB';
        container.appendChild(label);

        const tabElement = document.createElement('pre');
        tabElement.className = 'tablature';
        tabElement.setAttribute('aria-label', `Tablature for ${chord.name}`);

        const tabText = this.generateTabText(chord);
        tabElement.innerHTML = tabText;

        container.appendChild(tabElement);
        return container;
    },

    /**
     * Generate tablature text from chord data
     * @param {Object} chord - Chord data object
     * @returns {string} - Formatted tablature string
     */
    generateTabText(chord) {
        const { frets } = chord;
        const lines = [];

        // Strings are ordered high to low (e, B, G, D, A, E)
        // frets array is ordered low to high (E, A, D, G, B, e)
        // So we need to reverse for display
        const reversedFrets = [...frets].reverse();

        for (let i = 0; i < this.config.stringLabels.length; i++) {
            const stringLabel = this.config.stringLabels[i];
            const fret = reversedFrets[i];
            const fretDisplay = this.formatFretNumber(fret);

            const line = `<span class="string-line"><span class="string-name">${stringLabel}${this.config.separator}</span><span class="${fret === -1 ? 'muted' : 'fret-number'}">--${fretDisplay}--</span></span>`;
            lines.push(line);
        }

        return lines.join('\n');
    },

    /**
     * Format fret number for display
     * @param {number} fret - Fret number (-1 for muted, 0 for open)
     * @returns {string} - Formatted fret string
     */
    formatFretNumber(fret) {
        if (fret === -1) {
            return 'x';
        } else if (fret === 0) {
            return '0';
        } else if (fret < 10) {
            return fret.toString();
        } else {
            return fret.toString();
        }
    },

    /**
     * Render tablature as plain text (for copying)
     * @param {Object} chord - Chord data object
     * @returns {string} - Plain text tablature
     */
    renderPlainText(chord) {
        const { frets } = chord;
        const lines = [];
        const reversedFrets = [...frets].reverse();

        for (let i = 0; i < this.config.stringLabels.length; i++) {
            const stringLabel = this.config.stringLabels[i];
            const fret = reversedFrets[i];
            const fretDisplay = this.formatFretNumber(fret);
            lines.push(`${stringLabel}|--${fretDisplay}--`);
        }

        return lines.join('\n');
    },

    /**
     * Render extended tablature showing multiple chord positions
     * @param {Array} chords - Array of chord data objects
     * @param {number} beatsPerChord - Beats per chord
     * @returns {HTMLElement} - Tab container element
     */
    renderProgression(chords, beatsPerChord = 4) {
        const container = document.createElement('div');
        container.className = 'tab-container progression-tab';

        const label = document.createElement('div');
        label.className = 'tab-label';
        label.textContent = 'PROGRESSION TAB';
        container.appendChild(label);

        const tabElement = document.createElement('pre');
        tabElement.className = 'tablature';

        const tabText = this.generateProgressionTabText(chords, beatsPerChord);
        tabElement.textContent = tabText;

        container.appendChild(tabElement);
        return container;
    },

    /**
     * Generate progression tablature text
     * @param {Array} chords - Array of chord data objects
     * @param {number} beatsPerChord - Beats per chord
     * @returns {string} - Formatted tablature string
     */
    generateProgressionTabText(chords, beatsPerChord) {
        const lines = ['', '', '', '', '', ''];
        const stringLabels = this.config.stringLabels;

        // Add string labels
        for (let i = 0; i < stringLabels.length; i++) {
            lines[i] = stringLabels[i] + '|';
        }

        // Add each chord
        for (const chord of chords) {
            const reversedFrets = [...chord.frets].reverse();

            for (let stringIndex = 0; stringIndex < 6; stringIndex++) {
                const fret = reversedFrets[stringIndex];
                const fretDisplay = this.formatFretNumber(fret);

                // Add the fret with spacing
                lines[stringIndex] += '--' + fretDisplay.padStart(2, '-');

                // Add beat separators
                for (let beat = 1; beat < beatsPerChord; beat++) {
                    lines[stringIndex] += '----';
                }

                lines[stringIndex] += '--|';
            }
        }

        return lines.join('\n');
    },

    /**
     * Generate compact finger position display
     * @param {Object} chord - Chord data object
     * @returns {HTMLElement} - Finger info element
     */
    renderFingerInfo(chord) {
        const container = document.createElement('div');
        container.className = 'finger-info';

        const label = document.createElement('span');
        label.className = 'finger-info-label';
        label.textContent = 'Fingers:';

        const positions = document.createElement('span');
        positions.className = 'finger-positions';

        // Format finger positions (from low E to high e)
        const fingerDisplay = chord.fingers.map(f => {
            if (f === 0) return 'x';
            return f.toString();
        }).join(' ');

        positions.textContent = fingerDisplay;

        container.appendChild(label);
        container.appendChild(positions);

        return container;
    },

    /**
     * Update renderer configuration
     */
    setConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
    }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TabRenderer;
}
