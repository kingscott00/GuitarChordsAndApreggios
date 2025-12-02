/**
 * Guitar Chord Explorer - SVG Chord Diagram Renderer
 * Generates SVG chord diagrams from chord data
 */

const ChordRenderer = {
    // Default configuration
    config: {
        width: 180,
        height: 220,
        padding: { top: 30, right: 20, bottom: 30, left: 30 },
        numFrets: 5,
        numStrings: 6,
        dotRadius: 10,
        openCircleRadius: 6,
        mutedXSize: 6,
        nutHeight: 6,
        colors: {
            fretboard: '#D4A574',
            fret: '#8B7355',
            string: '#B8B8B8',
            nut: '#1A1A1A',
            dot: '#333333',
            dotRoot: '#E63946',
            text: '#333333',
            openString: '#333333',
            mutedString: '#666666'
        }
    },

    /**
     * Calculate dimensions based on config
     */
    getDimensions() {
        const { width, height, padding, numFrets, numStrings } = this.config;
        const fretboardWidth = width - padding.left - padding.right;
        const fretboardHeight = height - padding.top - padding.bottom;
        const stringSpacing = fretboardWidth / (numStrings - 1);
        const fretSpacing = fretboardHeight / numFrets;

        return {
            width,
            height,
            fretboardWidth,
            fretboardHeight,
            stringSpacing,
            fretSpacing,
            startX: padding.left,
            startY: padding.top
        };
    },

    /**
     * Create SVG element with namespace
     */
    createSVGElement(tag) {
        return document.createElementNS('http://www.w3.org/2000/svg', tag);
    },

    /**
     * Render a complete chord diagram
     * @param {Object} chord - Chord data object
     * @returns {SVGElement} - Complete SVG element
     */
    render(chord) {
        const dims = this.getDimensions();
        const svg = this.createSVGElement('svg');
        svg.setAttribute('class', 'chord-diagram');
        svg.setAttribute('width', dims.width);
        svg.setAttribute('height', dims.height);
        svg.setAttribute('viewBox', `0 0 ${dims.width} ${dims.height}`);
        svg.setAttribute('aria-label', `${chord.name} chord diagram`);

        // Render components
        svg.appendChild(this.renderFretboard(dims, chord.position));
        svg.appendChild(this.renderStrings(dims));
        svg.appendChild(this.renderFrets(dims));
        svg.appendChild(this.renderNut(dims, chord.position));
        svg.appendChild(this.renderOpenMutedMarkers(dims, chord.frets));
        svg.appendChild(this.renderFingerDots(dims, chord));
        svg.appendChild(this.renderStringLabels(dims));

        // Render position marker if not open position
        if (chord.position > 1) {
            svg.appendChild(this.renderPositionMarker(dims, chord.position));
        }

        // Render barre if present and valid
        // Only render barre if it's actually a barre chord (barre spans multiple strings)
        if (chord.barre && this.shouldRenderBarre(chord)) {
            svg.appendChild(this.renderBarre(dims, chord.barre, chord.position));
        }

        return svg;
    },

    /**
     * Determine if a barre should be rendered
     * Barre should only render if there are actually multiple fretted notes at the barre fret
     */
    shouldRenderBarre(chord) {
        if (!chord.barre) return false;

        const barreFret = chord.barre.fret;
        const fromString = chord.barre.fromString;
        const toString = chord.barre.toString;

        // Count how many strings in the barre range are actually fretted at the barre fret
        let barredCount = 0;
        for (let i = fromString; i <= toString; i++) {
            if (chord.frets[i] === barreFret) {
                barredCount++;
            }
        }

        // Only render barre if at least 2 strings are barred
        return barredCount >= 2;
    },

    /**
     * Render fretboard background
     */
    renderFretboard(dims) {
        const group = this.createSVGElement('g');
        group.setAttribute('class', 'fretboard-group');

        const rect = this.createSVGElement('rect');
        rect.setAttribute('class', 'fretboard');
        rect.setAttribute('x', dims.startX);
        rect.setAttribute('y', dims.startY);
        rect.setAttribute('width', dims.fretboardWidth);
        rect.setAttribute('height', dims.fretboardHeight);
        rect.setAttribute('fill', this.config.colors.fretboard);
        rect.setAttribute('rx', 2);
        rect.setAttribute('ry', 2);

        group.appendChild(rect);
        return group;
    },

    /**
     * Render guitar strings (vertical lines)
     */
    renderStrings(dims) {
        const group = this.createSVGElement('g');
        group.setAttribute('class', 'strings-group');

        // String thickness varies from high to low (1 to 6)
        const stringWidths = [1, 1.2, 1.5, 2, 2.5, 3];

        for (let i = 0; i < this.config.numStrings; i++) {
            const x = dims.startX + (i * dims.stringSpacing);
            const line = this.createSVGElement('line');
            line.setAttribute('class', `string string-${i + 1}`);
            line.setAttribute('x1', x);
            line.setAttribute('y1', dims.startY);
            line.setAttribute('x2', x);
            line.setAttribute('y2', dims.startY + dims.fretboardHeight);
            line.setAttribute('stroke', this.config.colors.string);
            line.setAttribute('stroke-width', stringWidths[i]);
            group.appendChild(line);
        }

        return group;
    },

    /**
     * Render frets (horizontal lines)
     */
    renderFrets(dims) {
        const group = this.createSVGElement('g');
        group.setAttribute('class', 'frets-group');

        for (let i = 0; i <= this.config.numFrets; i++) {
            const y = dims.startY + (i * dims.fretSpacing);
            const line = this.createSVGElement('line');
            line.setAttribute('class', 'fret');
            line.setAttribute('x1', dims.startX);
            line.setAttribute('y1', y);
            line.setAttribute('x2', dims.startX + dims.fretboardWidth);
            line.setAttribute('y2', y);
            line.setAttribute('stroke', this.config.colors.fret);
            line.setAttribute('stroke-width', i === 0 ? 1 : 2);
            group.appendChild(line);
        }

        return group;
    },

    /**
     * Render the nut (thick top bar for open position)
     */
    renderNut(dims, position) {
        const group = this.createSVGElement('g');
        group.setAttribute('class', 'nut-group');

        if (position === 1) {
            const rect = this.createSVGElement('rect');
            rect.setAttribute('class', 'nut');
            rect.setAttribute('x', dims.startX - 2);
            rect.setAttribute('y', dims.startY - this.config.nutHeight);
            rect.setAttribute('width', dims.fretboardWidth + 4);
            rect.setAttribute('height', this.config.nutHeight);
            rect.setAttribute('fill', this.config.colors.nut);
            rect.setAttribute('rx', 1);
            group.appendChild(rect);
        }

        return group;
    },

    /**
     * Render open (o) and muted (x) string markers above the nut
     */
    renderOpenMutedMarkers(dims, frets) {
        const group = this.createSVGElement('g');
        group.setAttribute('class', 'markers-group');

        const markerY = dims.startY - this.config.nutHeight - 12;

        for (let i = 0; i < frets.length; i++) {
            const x = dims.startX + (i * dims.stringSpacing);

            if (frets[i] === 0) {
                // Open string - draw circle
                const circle = this.createSVGElement('circle');
                circle.setAttribute('class', 'open-string');
                circle.setAttribute('cx', x);
                circle.setAttribute('cy', markerY);
                circle.setAttribute('r', this.config.openCircleRadius);
                circle.setAttribute('fill', 'none');
                circle.setAttribute('stroke', this.config.colors.openString);
                circle.setAttribute('stroke-width', 2);
                group.appendChild(circle);
            } else if (frets[i] === -1) {
                // Muted string - draw X
                const size = this.config.mutedXSize;
                const line1 = this.createSVGElement('line');
                line1.setAttribute('class', 'muted-string');
                line1.setAttribute('x1', x - size);
                line1.setAttribute('y1', markerY - size);
                line1.setAttribute('x2', x + size);
                line1.setAttribute('y2', markerY + size);
                line1.setAttribute('stroke', this.config.colors.mutedString);
                line1.setAttribute('stroke-width', 2);
                line1.setAttribute('stroke-linecap', 'round');

                const line2 = this.createSVGElement('line');
                line2.setAttribute('class', 'muted-string');
                line2.setAttribute('x1', x + size);
                line2.setAttribute('y1', markerY - size);
                line2.setAttribute('x2', x - size);
                line2.setAttribute('y2', markerY + size);
                line2.setAttribute('stroke', this.config.colors.mutedString);
                line2.setAttribute('stroke-width', 2);
                line2.setAttribute('stroke-linecap', 'round');

                group.appendChild(line1);
                group.appendChild(line2);
            }
        }

        return group;
    },

    /**
     * Render finger dots on the fretboard
     */
    renderFingerDots(dims, chord) {
        const group = this.createSVGElement('g');
        group.setAttribute('class', 'dots-group');

        const { frets, fingers, root, notes } = chord;
        const rootNote = root;

        for (let stringIndex = 0; stringIndex < frets.length; stringIndex++) {
            const fret = frets[stringIndex];

            // Skip open and muted strings
            if (fret <= 0) continue;

            // Calculate position (adjust fret for chord position if needed)
            let displayFret = fret;
            if (chord.position > 1) {
                displayFret = fret - chord.position + 1;
            }

            const x = dims.startX + (stringIndex * dims.stringSpacing);
            // Position dot in the middle of the fret space
            const y = dims.startY + ((displayFret - 0.5) * dims.fretSpacing);

            // Check if this note is the root
            const noteAtPosition = this.getNoteAtPosition(stringIndex, fret);
            const isRoot = noteAtPosition === rootNote;

            // Draw the dot
            const circle = this.createSVGElement('circle');
            circle.setAttribute('class', `finger-dot${isRoot ? ' root' : ''}`);
            circle.setAttribute('cx', x);
            circle.setAttribute('cy', y);
            circle.setAttribute('r', this.config.dotRadius);
            circle.setAttribute('fill', isRoot ? this.config.colors.dotRoot : this.config.colors.dot);
            group.appendChild(circle);

            // Draw finger number
            const finger = fingers[stringIndex];
            if (finger > 0) {
                const text = this.createSVGElement('text');
                text.setAttribute('class', 'finger-number');
                text.setAttribute('x', x);
                text.setAttribute('y', y);
                text.setAttribute('fill', 'white');
                text.setAttribute('font-size', '11');
                text.setAttribute('font-weight', '600');
                text.setAttribute('font-family', 'sans-serif');
                text.setAttribute('text-anchor', 'middle');
                text.setAttribute('dominant-baseline', 'central');
                text.textContent = finger.toString();
                group.appendChild(text);
            }
        }

        return group;
    },

    /**
     * Render barre indicator
     */
    renderBarre(dims, barre, chordPosition = 1) {
        const group = this.createSVGElement('g');
        group.setAttribute('class', 'barre-group');

        const fromX = dims.startX + (barre.fromString * dims.stringSpacing);
        const toX = dims.startX + (barre.toString * dims.stringSpacing);

        // Adjust barre fret for chord position (same as finger dots)
        let displayFret = barre.fret;
        if (chordPosition > 1) {
            displayFret = barre.fret - chordPosition + 1;
        }

        const y = dims.startY + ((displayFret - 0.5) * dims.fretSpacing);

        // Use a semi-transparent curved bar that doesn't cover finger dots
        const rect = this.createSVGElement('rect');
        rect.setAttribute('class', 'barre');
        rect.setAttribute('x', fromX);
        rect.setAttribute('y', y - 6);
        rect.setAttribute('width', toX - fromX);
        rect.setAttribute('height', 12);
        rect.setAttribute('fill', 'rgba(255, 255, 255, 0.85)');
        rect.setAttribute('stroke', this.config.colors.dot);
        rect.setAttribute('stroke-width', '2');
        rect.setAttribute('rx', 6);
        rect.setAttribute('ry', 6);

        group.appendChild(rect);
        return group;
    },

    /**
     * Render string labels at the bottom
     */
    renderStringLabels(dims) {
        const group = this.createSVGElement('g');
        group.setAttribute('class', 'labels-group');

        const labels = ['E', 'A', 'D', 'G', 'B', 'e'];
        const y = dims.startY + dims.fretboardHeight + 18;

        for (let i = 0; i < labels.length; i++) {
            const x = dims.startX + (i * dims.stringSpacing);
            const text = this.createSVGElement('text');
            text.setAttribute('class', 'string-label');
            text.setAttribute('x', x);
            text.setAttribute('y', y);
            text.setAttribute('fill', '#999');
            text.setAttribute('font-size', '11');
            text.setAttribute('font-family', 'sans-serif');
            text.setAttribute('text-anchor', 'middle');
            text.textContent = labels[i];
            group.appendChild(text);
        }

        return group;
    },

    /**
     * Render position marker for non-open position chords
     */
    renderPositionMarker(dims, position) {
        const group = this.createSVGElement('g');
        group.setAttribute('class', 'position-marker-group');

        const x = dims.startX - 18;
        const y = dims.startY + (dims.fretSpacing * 0.5);

        const text = this.createSVGElement('text');
        text.setAttribute('class', 'position-marker');
        text.setAttribute('x', x);
        text.setAttribute('y', y);
        text.setAttribute('fill', this.config.colors.text);
        text.setAttribute('font-size', '12');
        text.setAttribute('font-weight', '500');
        text.setAttribute('font-family', 'sans-serif');
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('dominant-baseline', 'central');
        text.textContent = position + 'fr';

        group.appendChild(text);
        return group;
    },

    /**
     * Get the note at a specific string and fret position
     */
    getNoteAtPosition(stringIndex, fret) {
        const openStrings = ['E', 'A', 'D', 'G', 'B', 'E'];
        const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

        const openNote = openStrings[stringIndex];
        const openNoteIndex = notes.indexOf(openNote);
        const noteIndex = (openNoteIndex + fret) % 12;

        return notes[noteIndex];
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
    module.exports = ChordRenderer;
}
