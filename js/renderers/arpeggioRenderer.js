/**
 * Guitar Chord Explorer - Arpeggio Renderer
 * Generates SVG fretboard diagrams for arpeggio patterns
 */

const ArpeggioRenderer = {
    // Configuration for extended fretboard view
    config: {
        width: 500,
        height: 180,
        padding: { top: 30, right: 30, bottom: 30, left: 50 },
        numStrings: 6,
        defaultFrets: 12,
        dotRadius: 12,
        rootDotRadius: 14,
        fretMarkers: [3, 5, 7, 9, 12, 15],
        doubleDotFrets: [12],
        colors: {
            fretboard: '#D4A574',
            fret: '#8B7355',
            string: '#B8B8B8',
            nut: '#1A1A1A',
            fretMarker: '#C4A060',
            root: '#E63946',
            third: '#457B9D',
            fifth: '#2A9D8F',
            seventh: '#E9C46A',
            other: '#666666',
            text: '#333333'
        }
    },

    /**
     * Get color for interval
     */
    getIntervalColor(interval) {
        const colorMap = {
            'R': this.config.colors.root,
            '1': this.config.colors.root,
            '3': this.config.colors.third,
            'b3': this.config.colors.third,
            '5': this.config.colors.fifth,
            '7': this.config.colors.seventh,
            'b7': this.config.colors.seventh,
            'M7': this.config.colors.seventh
        };
        return colorMap[interval] || this.config.colors.other;
    },

    /**
     * Create SVG element
     */
    createSVGElement(tag) {
        return document.createElementNS('http://www.w3.org/2000/svg', tag);
    },

    /**
     * Calculate dimensions based on fret range
     */
    getDimensions(startFret, endFret) {
        const numFrets = endFret - startFret + 2; // +2 for padding
        const { padding, height, numStrings } = this.config;
        const fretboardHeight = height - padding.top - padding.bottom;
        const stringSpacing = fretboardHeight / (numStrings - 1);
        const fretWidth = 40;
        const width = padding.left + padding.right + (numFrets * fretWidth);

        return {
            width,
            height,
            fretboardWidth: numFrets * fretWidth,
            fretboardHeight,
            stringSpacing,
            fretWidth,
            numFrets,
            startX: padding.left,
            startY: padding.top
        };
    },

    /**
     * Render arpeggio diagram
     */
    render(arpeggio) {
        const startFret = Math.max(0, arpeggio.startFret - 1);
        const endFret = arpeggio.endFret + 1;
        const dims = this.getDimensions(startFret, endFret);

        const svg = this.createSVGElement('svg');
        svg.setAttribute('class', 'arpeggio-diagram');
        svg.setAttribute('width', dims.width);
        svg.setAttribute('height', dims.height);
        svg.setAttribute('viewBox', `0 0 ${dims.width} ${dims.height}`);
        svg.setAttribute('aria-label', `${arpeggio.name} fretboard diagram`);

        // Render components
        svg.appendChild(this.renderFretboard(dims));
        svg.appendChild(this.renderStrings(dims));
        svg.appendChild(this.renderFrets(dims, startFret));
        svg.appendChild(this.renderFretMarkers(dims, startFret));
        svg.appendChild(this.renderFretNumbers(dims, startFret));
        svg.appendChild(this.renderNotes(dims, arpeggio, startFret));
        svg.appendChild(this.renderStringLabels(dims));

        return svg;
    },

    /**
     * Render fretboard background
     */
    renderFretboard(dims) {
        const group = this.createSVGElement('g');
        group.setAttribute('class', 'fretboard-group');

        const rect = this.createSVGElement('rect');
        rect.setAttribute('x', dims.startX);
        rect.setAttribute('y', dims.startY);
        rect.setAttribute('width', dims.fretboardWidth);
        rect.setAttribute('height', dims.fretboardHeight);
        rect.setAttribute('fill', this.config.colors.fretboard);
        rect.setAttribute('rx', 3);

        group.appendChild(rect);
        return group;
    },

    /**
     * Render strings (horizontal lines)
     */
    renderStrings(dims) {
        const group = this.createSVGElement('g');
        group.setAttribute('class', 'strings-group');

        const stringWidths = [3, 2.5, 2, 1.5, 1.2, 1]; // Low E to high e

        for (let i = 0; i < this.config.numStrings; i++) {
            const y = dims.startY + (i * dims.stringSpacing);
            const line = this.createSVGElement('line');
            line.setAttribute('x1', dims.startX);
            line.setAttribute('y1', y);
            line.setAttribute('x2', dims.startX + dims.fretboardWidth);
            line.setAttribute('y2', y);
            line.setAttribute('stroke', this.config.colors.string);
            line.setAttribute('stroke-width', stringWidths[i]);
            group.appendChild(line);
        }

        return group;
    },

    /**
     * Render frets (vertical lines)
     */
    renderFrets(dims, startFret) {
        const group = this.createSVGElement('g');
        group.setAttribute('class', 'frets-group');

        for (let i = 0; i <= dims.numFrets; i++) {
            const x = dims.startX + (i * dims.fretWidth);
            const line = this.createSVGElement('line');
            line.setAttribute('x1', x);
            line.setAttribute('y1', dims.startY);
            line.setAttribute('x2', x);
            line.setAttribute('y2', dims.startY + dims.fretboardHeight);

            // Make the nut (fret 0) thicker
            if (startFret === 0 && i === 0) {
                line.setAttribute('stroke', this.config.colors.nut);
                line.setAttribute('stroke-width', 6);
            } else {
                line.setAttribute('stroke', this.config.colors.fret);
                line.setAttribute('stroke-width', 2);
            }

            group.appendChild(line);
        }

        return group;
    },

    /**
     * Render fret position markers (dots)
     */
    renderFretMarkers(dims, startFret) {
        const group = this.createSVGElement('g');
        group.setAttribute('class', 'fret-markers-group');

        const markerY = dims.startY + (dims.fretboardHeight / 2);

        for (let i = 0; i <= dims.numFrets; i++) {
            const fretNum = startFret + i;

            if (this.config.fretMarkers.includes(fretNum)) {
                const x = dims.startX + (i * dims.fretWidth) - (dims.fretWidth / 2);

                if (this.config.doubleDotFrets.includes(fretNum)) {
                    // Double dot (12th fret)
                    const offset = dims.fretboardHeight / 4;
                    const dot1 = this.createSVGElement('circle');
                    dot1.setAttribute('cx', x);
                    dot1.setAttribute('cy', markerY - offset);
                    dot1.setAttribute('r', 5);
                    dot1.setAttribute('fill', this.config.colors.fretMarker);
                    group.appendChild(dot1);

                    const dot2 = this.createSVGElement('circle');
                    dot2.setAttribute('cx', x);
                    dot2.setAttribute('cy', markerY + offset);
                    dot2.setAttribute('r', 5);
                    dot2.setAttribute('fill', this.config.colors.fretMarker);
                    group.appendChild(dot2);
                } else {
                    // Single dot
                    const dot = this.createSVGElement('circle');
                    dot.setAttribute('cx', x);
                    dot.setAttribute('cy', markerY);
                    dot.setAttribute('r', 5);
                    dot.setAttribute('fill', this.config.colors.fretMarker);
                    group.appendChild(dot);
                }
            }
        }

        return group;
    },

    /**
     * Render fret numbers below the fretboard
     */
    renderFretNumbers(dims, startFret) {
        const group = this.createSVGElement('g');
        group.setAttribute('class', 'fret-numbers-group');

        const y = dims.startY + dims.fretboardHeight + 20;

        // Show fret number every few frets or at start
        for (let i = 0; i <= dims.numFrets; i++) {
            const fretNum = startFret + i;
            // Show at nut, fret markers, and edges
            if (fretNum === 0 || this.config.fretMarkers.includes(fretNum) || i === 0 || i === dims.numFrets) {
                const x = dims.startX + (i * dims.fretWidth) - (i === 0 ? 0 : dims.fretWidth / 2);

                const text = this.createSVGElement('text');
                text.setAttribute('x', x);
                text.setAttribute('y', y);
                text.setAttribute('fill', '#999');
                text.setAttribute('font-size', '11');
                text.setAttribute('font-family', 'sans-serif');
                text.setAttribute('text-anchor', 'middle');
                text.textContent = fretNum.toString();
                group.appendChild(text);
            }
        }

        return group;
    },

    /**
     * Render arpeggio notes on the fretboard
     */
    renderNotes(dims, arpeggio, startFret) {
        const group = this.createSVGElement('g');
        group.setAttribute('class', 'notes-group');

        for (const note of arpeggio.pattern) {
            const stringY = dims.startY + (note.string * dims.stringSpacing);
            const fretIndex = note.fret - startFret;

            // Calculate X position (in middle of fret space, or at nut for open strings)
            let noteX;
            if (note.fret === 0) {
                noteX = dims.startX - 15; // Left of nut for open strings
            } else {
                noteX = dims.startX + (fretIndex * dims.fretWidth) - (dims.fretWidth / 2);
            }

            const isRoot = note.interval === 'R' || note.interval === '1';
            const radius = isRoot ? this.config.rootDotRadius : this.config.dotRadius;
            const color = this.getIntervalColor(note.interval);

            // Draw note circle
            const circle = this.createSVGElement('circle');
            circle.setAttribute('cx', noteX);
            circle.setAttribute('cy', stringY);
            circle.setAttribute('r', radius);
            circle.setAttribute('fill', color);

            if (isRoot) {
                circle.setAttribute('stroke', '#FFF');
                circle.setAttribute('stroke-width', 2);
            }

            group.appendChild(circle);

            // Draw interval label
            const text = this.createSVGElement('text');
            text.setAttribute('x', noteX);
            text.setAttribute('y', stringY);
            text.setAttribute('fill', 'white');
            text.setAttribute('font-size', isRoot ? '11' : '10');
            text.setAttribute('font-weight', '600');
            text.setAttribute('font-family', 'sans-serif');
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('dominant-baseline', 'central');
            text.textContent = note.interval;
            group.appendChild(text);
        }

        return group;
    },

    /**
     * Render string labels on the left
     */
    renderStringLabels(dims) {
        const group = this.createSVGElement('g');
        group.setAttribute('class', 'string-labels-group');

        const labels = ['E', 'A', 'D', 'G', 'B', 'e'];
        const x = dims.startX - 30;

        for (let i = 0; i < labels.length; i++) {
            const y = dims.startY + (i * dims.stringSpacing);
            const text = this.createSVGElement('text');
            text.setAttribute('x', x);
            text.setAttribute('y', y);
            text.setAttribute('fill', '#666');
            text.setAttribute('font-size', '12');
            text.setAttribute('font-weight', '500');
            text.setAttribute('font-family', 'sans-serif');
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('dominant-baseline', 'central');
            text.textContent = labels[i];
            group.appendChild(text);
        }

        return group;
    },

    /**
     * Render a compact legend showing interval colors
     */
    renderLegend() {
        const container = document.createElement('div');
        container.className = 'arpeggio-legend';

        const items = [
            { interval: 'R', label: 'Root', color: this.config.colors.root },
            { interval: '3', label: '3rd', color: this.config.colors.third },
            { interval: '5', label: '5th', color: this.config.colors.fifth },
            { interval: '7', label: '7th', color: this.config.colors.seventh }
        ];

        items.forEach(item => {
            const legendItem = document.createElement('span');
            legendItem.className = 'legend-item';
            legendItem.innerHTML = `<span class="legend-dot" style="background-color: ${item.color}"></span>${item.label}`;
            container.appendChild(legendItem);
        });

        return container;
    },

    /**
     * Generate tablature for ascending arpeggio pattern
     */
    renderTab(arpeggio) {
        const container = document.createElement('div');
        container.className = 'arpeggio-tab-container';

        const label = document.createElement('div');
        label.className = 'tab-label';
        label.textContent = 'ARPEGGIO TAB';
        container.appendChild(label);

        const tabPre = document.createElement('pre');
        tabPre.className = 'tablature arpeggio-tablature';

        // Initialize tab lines
        const stringLabels = ['e', 'B', 'G', 'D', 'A', 'E'];
        const lines = stringLabels.map(s => `${s}|`);

        // Sort pattern by string then fret for ascending order
        const sortedPattern = [...arpeggio.pattern].sort((a, b) => {
            // Sort by string (low to high: 0 is low E)
            // Then by fret (low to high)
            if (a.string !== b.string) return b.string - a.string;
            return a.fret - b.fret;
        });

        // Add each note to the tab
        sortedPattern.forEach(note => {
            const stringIndex = 5 - note.string; // Reverse for display (e on top)
            const fretStr = note.fret.toString().padStart(2, '-');

            for (let i = 0; i < 6; i++) {
                if (i === stringIndex) {
                    lines[i] += fretStr + '-';
                } else {
                    lines[i] += '---';
                }
            }
        });

        // Close the tab lines
        lines.forEach((line, i) => {
            lines[i] = line + '|';
        });

        tabPre.textContent = lines.join('\n');
        container.appendChild(tabPre);

        return container;
    }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ArpeggioRenderer;
}
