/**
 * Guitar Chord Explorer - Scale Renderer
 * Generates SVG fretboard diagrams for scales and modes
 */

const ScaleRenderer = {
    // Configuration for extended fretboard view
    config: {
        width: 1000,
        height: 180,
        padding: { top: 30, right: 30, bottom: 30, left: 50 },
        numStrings: 6,
        numFrets: 24, // Show full neck
        dotRadius: 10,
        rootDotRadius: 12,
        fretMarkers: [3, 5, 7, 9, 12, 15, 17, 19, 21, 24],
        doubleDotFrets: [12, 24],
        colors: {
            fretboard: '#D4A574',
            fret: '#8B7355',
            string: '#B8B8B8',
            nut: '#1A1A1A',
            fretMarker: '#C4A060',
            root: '#E63946',
            chordTone: '#457B9D',
            passingTone: '#666666',
            text: '#333333'
        }
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
        const numFrets = endFret - startFret + 1;
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
     * Render scale diagram
     * @param {Object} scale - Scale object with root, type, and optional chordTones
     * @param {Object} options - Rendering options
     */
    render(scale, options = {}) {
        const startFret = 0;
        const endFret = this.config.numFrets;
        const showChordTones = options.showChordTones || false;
        const chordTones = options.chordTones || [];

        // Generate all scale notes
        const scaleNotes = this.generateScaleNotes(scale, chordTones, showChordTones);

        const dims = this.getDimensions(startFret, endFret);

        const svg = this.createSVGElement('svg');
        svg.setAttribute('class', 'scale-diagram');
        svg.setAttribute('width', dims.width);
        svg.setAttribute('height', dims.height);
        svg.setAttribute('viewBox', `0 0 ${dims.width} ${dims.height}`);
        svg.setAttribute('aria-label', `${scale.name} scale diagram`);

        // Render components
        svg.appendChild(this.renderFretboard(dims));
        svg.appendChild(this.renderStrings(dims));
        svg.appendChild(this.renderFrets(dims, startFret));
        svg.appendChild(this.renderFretMarkers(dims, startFret));
        svg.appendChild(this.renderFretNumbers(dims, startFret));
        svg.appendChild(this.renderNotes(dims, scaleNotes, startFret, scale.root));
        svg.appendChild(this.renderStringLabels(dims));

        return svg;
    },

    /**
     * Generate all scale notes across the fretboard
     */
    generateScaleNotes(scale, chordTones, showChordTones) {
        const allNotes = [];
        const scaleIntervals = this.getScaleIntervals(scale.type);
        const scaleNotesSet = this.calculateScaleNotes(scale.root, scaleIntervals);

        // For each string (0=low E, 5=high e)
        for (let string = 0; string < 6; string++) {
            // For each fret on this string
            for (let fret = 0; fret <= this.config.numFrets; fret++) {
                const note = this.getNoteAtStringFret(string, fret);

                if (scaleNotesSet.includes(note)) {
                    const isRoot = note === scale.root;
                    const isChordTone = chordTones.includes(note);

                    allNotes.push({
                        string,
                        fret,
                        note,
                        isRoot,
                        isChordTone,
                        showChordTones
                    });
                }
            }
        }

        return allNotes;
    },

    /**
     * Get scale intervals (in semitones from root)
     */
    getScaleIntervals(scaleType) {
        const scales = {
            // Major scales and modes
            'major': [0, 2, 4, 5, 7, 9, 11],
            'ionian': [0, 2, 4, 5, 7, 9, 11],
            'dorian': [0, 2, 3, 5, 7, 9, 10],
            'phrygian': [0, 1, 3, 5, 7, 8, 10],
            'lydian': [0, 2, 4, 6, 7, 9, 11],
            'mixolydian': [0, 2, 4, 5, 7, 9, 10],
            'aeolian': [0, 2, 3, 5, 7, 8, 10],
            'locrian': [0, 1, 3, 5, 6, 8, 10],

            // Minor scales
            'natural-minor': [0, 2, 3, 5, 7, 8, 10],
            'harmonic-minor': [0, 2, 3, 5, 7, 8, 11],
            'melodic-minor': [0, 2, 3, 5, 7, 9, 11],

            // Pentatonic scales
            'major-pentatonic': [0, 2, 4, 7, 9],
            'minor-pentatonic': [0, 3, 5, 7, 10],

            // Blues
            'blues': [0, 3, 5, 6, 7, 10],

            // Exotic scales
            'whole-tone': [0, 2, 4, 6, 8, 10],
            'diminished': [0, 2, 3, 5, 6, 8, 9, 11],
            'chromatic': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        };

        return scales[scaleType] || scales['major'];
    },

    /**
     * Calculate all notes in a scale given root and intervals
     */
    calculateScaleNotes(root, intervals) {
        const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        const rootIndex = notes.indexOf(root);

        return intervals.map(interval => {
            const noteIndex = (rootIndex + interval) % 12;
            return notes[noteIndex];
        });
    },

    /**
     * Get the note name at a specific string and fret
     */
    getNoteAtStringFret(stringIndex, fret) {
        const openStrings = ['E', 'A', 'D', 'G', 'B', 'E'];
        const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

        const openNote = openStrings[stringIndex];
        const openNoteIndex = notes.indexOf(openNote);
        const noteIndex = (openNoteIndex + fret) % 12;

        return notes[noteIndex];
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

        const stringWidths = [1, 1.2, 1.5, 2, 2.5, 3]; // High e to low E

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
                    // Double dot (12th and 24th fret)
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

        // Show fret numbers at markers and edges
        for (let i = 0; i <= dims.numFrets; i++) {
            const fretNum = startFret + i;

            // Show at fret markers or every 5 frets
            if (fretNum === 0 || this.config.fretMarkers.includes(fretNum) || fretNum % 5 === 0) {
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
     * Render scale notes on the fretboard
     */
    renderNotes(dims, notes, startFret, rootNote) {
        const group = this.createSVGElement('g');
        group.setAttribute('class', 'notes-group');

        for (const noteData of notes) {
            // Reverse string index to match high-to-low display order
            const stringY = dims.startY + ((5 - noteData.string) * dims.stringSpacing);
            const fretIndex = noteData.fret - startFret;

            // Calculate X position
            let noteX;
            if (noteData.fret === 0) {
                noteX = dims.startX - 15; // Left of nut for open strings
            } else {
                noteX = dims.startX + (fretIndex * dims.fretWidth) - (dims.fretWidth / 2);
            }

            // Determine color based on note type
            let color;
            let radius;
            if (noteData.isRoot) {
                color = this.config.colors.root;
                radius = this.config.rootDotRadius;
            } else if (noteData.showChordTones && noteData.isChordTone) {
                color = this.config.colors.chordTone;
                radius = this.config.dotRadius;
            } else {
                color = this.config.colors.passingTone;
                radius = this.config.dotRadius;
            }

            // Draw note circle
            const circle = this.createSVGElement('circle');
            circle.setAttribute('cx', noteX);
            circle.setAttribute('cy', stringY);
            circle.setAttribute('r', radius);
            circle.setAttribute('fill', color);

            if (noteData.isRoot) {
                circle.setAttribute('stroke', '#FFF');
                circle.setAttribute('stroke-width', 2);
            }

            group.appendChild(circle);
        }

        return group;
    },

    /**
     * Render string labels on the left
     */
    renderStringLabels(dims) {
        const group = this.createSVGElement('g');
        group.setAttribute('class', 'string-labels-group');

        const labels = ['e', 'B', 'G', 'D', 'A', 'E'];
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
     * Render position patterns for scales
     */
    renderPositionPatterns(scale) {
        const container = document.createElement('div');
        container.className = 'position-patterns-container';

        const title = document.createElement('h4');
        title.textContent = 'Position Patterns';
        title.style.marginTop = '20px';
        title.style.marginBottom = '15px';
        container.appendChild(title);

        const description = document.createElement('p');
        description.textContent = 'The 5 common positions/boxes for this scale:';
        description.style.marginBottom = '15px';
        description.style.color = '#666';
        container.appendChild(description);

        const patternsGrid = document.createElement('div');
        patternsGrid.className = 'position-patterns-grid';
        patternsGrid.style.display = 'grid';
        patternsGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
        patternsGrid.style.gap = '20px';

        // Generate 5 position patterns
        for (let position = 1; position <= 5; position++) {
            const patternCard = this.renderPositionPattern(scale, position);
            patternsGrid.appendChild(patternCard);
        }

        container.appendChild(patternsGrid);
        return container;
    },

    /**
     * Render a single position pattern
     */
    renderPositionPattern(scale, position) {
        const card = document.createElement('div');
        card.className = 'position-pattern-card';
        card.style.background = 'var(--bg-card)';
        card.style.borderRadius = 'var(--radius-md)';
        card.style.padding = 'var(--spacing-md)';
        card.style.boxShadow = '0 2px 4px var(--shadow-color)';

        const header = document.createElement('div');
        header.textContent = `Position ${position}`;
        header.style.fontWeight = '600';
        header.style.marginBottom = '10px';
        header.style.color = 'var(--text-primary)';
        card.appendChild(header);

        // Calculate starting fret for this position
        const scaleIntervals = this.getScaleIntervals(scale.type);
        const notesPerPosition = scaleIntervals.length;
        const startFret = ((position - 1) * 2) % 12;

        // Render small diagram showing just this position (4-5 frets)
        const positionScale = {
            root: scale.root,
            type: scale.type,
            name: `${scale.name} - Position ${position}`
        };

        const miniDiagram = this.renderMiniPosition(positionScale, startFret);
        card.appendChild(miniDiagram);

        return card;
    },

    /**
     * Render a mini position diagram (showing 4-5 frets)
     */
    renderMiniPosition(scale, startFret) {
        const endFret = startFret + 4;
        const scaleNotes = this.generateScaleNotes(scale, [], false);

        // Filter to only notes in this fret range
        const filteredNotes = scaleNotes.filter(n =>
            n.fret >= startFret && n.fret <= endFret
        );

        const dims = this.getDimensions(startFret, endFret);
        dims.width = 250;

        const svg = this.createSVGElement('svg');
        svg.setAttribute('width', dims.width);
        svg.setAttribute('height', dims.height);
        svg.setAttribute('viewBox', `0 0 ${dims.width} ${dims.height}`);

        svg.appendChild(this.renderFretboard(dims));
        svg.appendChild(this.renderStrings(dims));
        svg.appendChild(this.renderFrets(dims, startFret));
        svg.appendChild(this.renderNotes(dims, filteredNotes, startFret, scale.root));
        svg.appendChild(this.renderStringLabels(dims));

        return svg;
    }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ScaleRenderer;
}
