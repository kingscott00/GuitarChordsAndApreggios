/**
 * Guitar Chord Explorer - Arpeggio Renderer
 * Generates SVG fretboard diagrams for arpeggio patterns
 */

const ArpeggioRenderer = {
    // Pattern style options
    patternStyles: {
        standard: {
            id: 'standard',
            name: 'Standard',
            description: 'Learn the basic shape first - one note per string ascending/descending'
        },
        hammerPulloff: {
            id: 'hammerPulloff',
            name: 'With Hammer-on/Pull-off',
            description: 'Adds flair and musicality - hammer to a higher note at the top, pull off on the way back'
        },
        twoPerString: {
            id: 'twoPerString',
            name: 'Two Notes Per String',
            description: 'Expands range, builds speed - play two notes on each string using legato'
        }
    },

    // Current pattern style (loaded from localStorage)
    currentPatternStyle: 'standard',

    /**
     * Initialize pattern style from localStorage
     */
    initPatternStyle() {
        const saved = localStorage.getItem('arpeggioPatternStyle');
        if (saved && this.patternStyles[saved]) {
            this.currentPatternStyle = saved;
        }
    },

    /**
     * Set pattern style and save to localStorage
     */
    setPatternStyle(styleId) {
        if (this.patternStyles[styleId]) {
            this.currentPatternStyle = styleId;
            localStorage.setItem('arpeggioPatternStyle', styleId);
        }
    },

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
     * @param {Object} arpeggio - Arpeggio data object
     * @param {Object} options - Rendering options (optional)
     * @param {boolean} options.showAllNotes - Show all note instances across entire fretboard
     */
    render(arpeggio, options = {}) {
        const showAllNotes = options.showAllNotes || false;

        // If showing all notes, use extended fretboard (0-15)
        const startFret = showAllNotes ? 0 : Math.max(0, arpeggio.startFret - 1);
        const endFret = showAllNotes ? 15 : arpeggio.endFret + 1;

        // Generate pattern with all notes if needed
        const pattern = showAllNotes ? this.generateAllNotes(arpeggio) : arpeggio.pattern;
        const modifiedArpeggio = { ...arpeggio, pattern };

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
        svg.appendChild(this.renderNotes(dims, modifiedArpeggio, startFret));
        svg.appendChild(this.renderStringLabels(dims));

        return svg;
    },

    /**
     * Generate all instances of arpeggio notes across the fretboard
     * @param {Object} arpeggio - Original arpeggio object
     * @returns {Array} - Extended pattern with all note instances
     */
    generateAllNotes(arpeggio) {
        // Get the unique intervals used in the arpeggio
        const intervalsUsed = [...new Set(arpeggio.pattern.map(n => n.interval))];

        // Map intervals to semitones from root
        const intervalToSemitones = {
            'R': 0, '1': 0,
            'b2': 1, '2': 2,
            'b3': 3, '3': 4,
            '4': 5,
            'b5': 6, '5': 7,
            'b6': 8, '6': 9,
            'b7': 10, '7': 11, 'M7': 11
        };

        // Get the note names for this arpeggio (e.g., C, E, G for C major)
        const allNotes = [];
        const numFrets = 15; // Show up to 15th fret

        // For each string (0=low E, 5=high e)
        for (let string = 0; string < 6; string++) {
            // For each fret on this string
            for (let fret = 0; fret <= numFrets; fret++) {
                // Calculate what note is at this position
                const note = this.getNoteAtStringFret(string, fret);

                // Check if this note is in the arpeggio
                const matchingInterval = intervalsUsed.find(interval => {
                    return arpeggio.notes.includes(note);
                });

                if (arpeggio.notes.includes(note)) {
                    // Determine which interval this note represents
                    let interval = 'R'; // default

                    // Find the interval by comparing with arpeggio notes
                    const noteIndex = arpeggio.notes.indexOf(note);
                    if (noteIndex >= 0 && noteIndex < arpeggio.pattern.length) {
                        // Try to find a matching interval from the original pattern
                        const originalNote = arpeggio.pattern.find(p => {
                            const patternNote = this.getNoteAtStringFret(p.string, p.fret);
                            return patternNote === note;
                        });

                        if (originalNote) {
                            interval = originalNote.interval;
                        } else {
                            // Assign interval based on position in notes array
                            if (noteIndex === 0) interval = 'R';
                            else if (noteIndex === 1) interval = arpeggio.quality === 'minor' ? 'b3' : '3';
                            else if (noteIndex === 2) interval = '5';
                            else if (noteIndex === 3) interval = arpeggio.quality.includes('7') ?
                                (arpeggio.quality.includes('maj') ? 'M7' : 'b7') : '7';
                        }
                    }

                    allNotes.push({
                        string,
                        fret,
                        finger: 0, // No specific fingering for all notes view
                        interval
                    });
                }
            }
        }

        return allNotes;
    },

    /**
     * Get the note name at a specific string and fret
     * @param {number} stringIndex - String index (0=low E, 5=high e)
     * @param {number} fret - Fret number
     * @returns {string} - Note name
     */
    getNoteAtStringFret(stringIndex, fret) {
        const openStrings = ['E', 'A', 'D', 'G', 'B', 'E']; // Low E to high e
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

        const stringWidths = [1, 1.2, 1.5, 2, 2.5, 3]; // High e to low E (reversed)

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

        // Show all fret numbers without skipping
        for (let i = 0; i <= dims.numFrets; i++) {
            const fretNum = startFret + i;
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

        return group;
    },

    /**
     * Render arpeggio notes on the fretboard
     */
    renderNotes(dims, arpeggio, startFret) {
        const group = this.createSVGElement('g');
        group.setAttribute('class', 'notes-group');

        for (const note of arpeggio.pattern) {
            // Reverse string index to match high-to-low display order
            const stringY = dims.startY + ((5 - note.string) * dims.stringSpacing);
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
     * Render pattern style selector
     */
    renderPatternStyleSelector(arpeggio, onChangeCallback) {
        const container = document.createElement('div');
        container.className = 'pattern-style-selector';

        const label = document.createElement('label');
        label.className = 'pattern-style-label';
        label.textContent = 'Sweep Style:';
        container.appendChild(label);

        const selectWrapper = document.createElement('div');
        selectWrapper.className = 'pattern-style-select-wrapper';

        const select = document.createElement('select');
        select.className = 'pattern-style-select';
        select.id = `pattern-style-${arpeggio.id}`;

        Object.values(this.patternStyles).forEach(style => {
            const option = document.createElement('option');
            option.value = style.id;
            option.textContent = style.name;
            if (style.id === this.currentPatternStyle) {
                option.selected = true;
            }
            select.appendChild(option);
        });

        select.addEventListener('change', (e) => {
            this.setPatternStyle(e.target.value);
            if (onChangeCallback) {
                onChangeCallback(e.target.value);
            }
        });

        selectWrapper.appendChild(select);

        // Info icon with tooltip
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
        infoBtn.title = this.patternStyles[this.currentPatternStyle].description;

        // Update tooltip on style change
        select.addEventListener('change', () => {
            infoBtn.title = this.patternStyles[select.value].description;
        });

        selectWrapper.appendChild(infoBtn);
        container.appendChild(selectWrapper);

        return container;
    },

    /**
     * Generate tablature for arpeggio pattern based on current style
     */
    renderTab(arpeggio, patternStyle = null) {
        const style = patternStyle || this.currentPatternStyle;

        const container = document.createElement('div');
        container.className = 'arpeggio-tab-container';

        const label = document.createElement('div');
        label.className = 'tab-label';
        label.textContent = 'ARPEGGIO TAB';
        container.appendChild(label);

        const tabPre = document.createElement('pre');
        tabPre.className = 'tablature arpeggio-tablature';
        tabPre.id = `arpeggio-tab-${arpeggio.id}`;

        // Generate tab based on style
        let tabContent;
        switch (style) {
            case 'hammerPulloff':
                tabContent = this.generateHammerPulloffTab(arpeggio);
                break;
            case 'twoPerString':
                tabContent = this.generateTwoPerStringTab(arpeggio);
                break;
            default:
                tabContent = this.generateStandardTab(arpeggio);
        }

        tabPre.textContent = tabContent;
        container.appendChild(tabPre);

        return container;
    },

    /**
     * Generate standard tab (one note per string)
     */
    generateStandardTab(arpeggio) {
        const stringLabels = ['e', 'B', 'G', 'D', 'A', 'E'];
        const lines = stringLabels.map(s => `${s}|`);

        // Sort pattern by string then fret for ascending order
        const sortedPattern = [...arpeggio.pattern].sort((a, b) => {
            if (a.string !== b.string) return a.string - b.string;
            return a.fret - b.fret;
        });

        // Add each note to the tab
        sortedPattern.forEach(note => {
            const stringIndex = 5 - note.string;
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

        return lines.join('\n');
    },

    /**
     * Generate tab with hammer-on at top, pull-off on way back
     */
    generateHammerPulloffTab(arpeggio) {
        const stringLabels = ['e', 'B', 'G', 'D', 'A', 'E'];
        const lines = stringLabels.map(s => `${s}|`);

        // Sort pattern by string then fret for ascending order
        const sortedPattern = [...arpeggio.pattern].sort((a, b) => {
            if (a.string !== b.string) return a.string - b.string;
            return a.fret - b.fret;
        });

        // Find the highest string used (for hammer-on position)
        const highestStringNote = sortedPattern[sortedPattern.length - 1];
        const hammerFret = highestStringNote.fret + 2; // Hammer 2 frets higher

        // ASCENDING: normal notes until the top, then hammer-on
        sortedPattern.forEach((note, idx) => {
            const stringIndex = 5 - note.string;

            if (idx === sortedPattern.length - 1) {
                // Last note: add hammer-on
                const notation = `${note.fret}h${hammerFret}`;
                const padded = notation.padStart(4, '-');

                for (let i = 0; i < 6; i++) {
                    if (i === stringIndex) {
                        lines[i] += padded + '-';
                    } else {
                        lines[i] += '-----';
                    }
                }
            } else {
                const fretStr = note.fret.toString().padStart(2, '-');
                for (let i = 0; i < 6; i++) {
                    if (i === stringIndex) {
                        lines[i] += fretStr + '-';
                    } else {
                        lines[i] += '---';
                    }
                }
            }
        });

        // DESCENDING: pull-off at top, then normal notes
        const descendingPattern = [...sortedPattern].reverse();

        descendingPattern.forEach((note, idx) => {
            const stringIndex = 5 - note.string;

            if (idx === 0) {
                // First note on the way down: pull-off
                const notation = `${hammerFret}p${note.fret}`;
                const padded = notation.padStart(4, '-');

                for (let i = 0; i < 6; i++) {
                    if (i === stringIndex) {
                        lines[i] += padded + '-';
                    } else {
                        lines[i] += '-----';
                    }
                }
            } else {
                const fretStr = note.fret.toString().padStart(2, '-');
                for (let i = 0; i < 6; i++) {
                    if (i === stringIndex) {
                        lines[i] += fretStr + '-';
                    } else {
                        lines[i] += '---';
                    }
                }
            }
        });

        // Close the tab lines
        lines.forEach((line, i) => {
            lines[i] = line + '|';
        });

        return lines.join('\n');
    },

    /**
     * Generate tab with two notes per string
     */
    generateTwoPerStringTab(arpeggio) {
        const stringLabels = ['e', 'B', 'G', 'D', 'A', 'E'];
        const lines = stringLabels.map(s => `${s}|`);

        // Sort pattern by string then fret
        const sortedPattern = [...arpeggio.pattern].sort((a, b) => {
            if (a.string !== b.string) return a.string - b.string;
            return a.fret - b.fret;
        });

        // Group notes by string
        const notesByString = {};
        sortedPattern.forEach(note => {
            if (!notesByString[note.string]) {
                notesByString[note.string] = [];
            }
            notesByString[note.string].push(note);
        });

        // ASCENDING with hammer-ons
        const stringsUsed = Object.keys(notesByString).map(Number).sort((a, b) => a - b);

        stringsUsed.forEach(stringNum => {
            const notes = notesByString[stringNum];
            const stringIndex = 5 - stringNum;

            if (notes.length >= 2) {
                // Two notes on this string - use hammer-on ascending
                const lowFret = notes[0].fret;
                const highFret = notes[notes.length - 1].fret;
                const notation = `${lowFret}h${highFret}`;
                const padded = notation.padStart(4, '-');

                for (let i = 0; i < 6; i++) {
                    if (i === stringIndex) {
                        lines[i] += padded + '-';
                    } else {
                        lines[i] += '-----';
                    }
                }
            } else if (notes.length === 1) {
                // Single note - calculate a second note 3-4 frets higher
                const baseFret = notes[0].fret;
                const secondFret = baseFret + 3;
                const notation = `${baseFret}h${secondFret}`;
                const padded = notation.padStart(4, '-');

                for (let i = 0; i < 6; i++) {
                    if (i === stringIndex) {
                        lines[i] += padded + '-';
                    } else {
                        lines[i] += '-----';
                    }
                }
            }
        });

        // DESCENDING with pull-offs
        stringsUsed.reverse().forEach(stringNum => {
            const notes = notesByString[stringNum];
            const stringIndex = 5 - stringNum;

            if (notes.length >= 2) {
                const lowFret = notes[0].fret;
                const highFret = notes[notes.length - 1].fret;
                const notation = `${highFret}p${lowFret}`;
                const padded = notation.padStart(4, '-');

                for (let i = 0; i < 6; i++) {
                    if (i === stringIndex) {
                        lines[i] += padded + '-';
                    } else {
                        lines[i] += '-----';
                    }
                }
            } else if (notes.length === 1) {
                const baseFret = notes[0].fret;
                const secondFret = baseFret + 3;
                const notation = `${secondFret}p${baseFret}`;
                const padded = notation.padStart(4, '-');

                for (let i = 0; i < 6; i++) {
                    if (i === stringIndex) {
                        lines[i] += padded + '-';
                    } else {
                        lines[i] += '-----';
                    }
                }
            }
        });

        // Close the tab lines
        lines.forEach((line, i) => {
            lines[i] = line + '|';
        });

        return lines.join('\n');
    },

    /**
     * Get pattern data for audio playback
     * Returns array of notes with timing and legato info
     */
    getPatternForPlayback(arpeggio, patternStyle = null) {
        const style = patternStyle || this.currentPatternStyle;

        // Sort pattern ascending
        const sortedPattern = [...arpeggio.pattern].sort((a, b) => {
            if (a.string !== b.string) return a.string - b.string;
            return a.fret - b.fret;
        });

        const playbackNotes = [];

        switch (style) {
            case 'hammerPulloff':
                return this.getHammerPulloffPlayback(sortedPattern);
            case 'twoPerString':
                return this.getTwoPerStringPlayback(sortedPattern);
            default:
                // Standard: just ascending then descending
                sortedPattern.forEach(note => {
                    playbackNotes.push({
                        string: note.string,
                        fret: note.fret,
                        legato: false,
                        interval: note.interval
                    });
                });
                // Descending (skip the top note as it's already played)
                [...sortedPattern].reverse().slice(1).forEach(note => {
                    playbackNotes.push({
                        string: note.string,
                        fret: note.fret,
                        legato: false,
                        interval: note.interval
                    });
                });
                return playbackNotes;
        }
    },

    /**
     * Get playback notes for hammer-on/pull-off style
     */
    getHammerPulloffPlayback(sortedPattern) {
        const playbackNotes = [];
        const highestNote = sortedPattern[sortedPattern.length - 1];
        const hammerFret = highestNote.fret + 2;

        // Ascending
        sortedPattern.forEach((note, idx) => {
            playbackNotes.push({
                string: note.string,
                fret: note.fret,
                legato: false,
                interval: note.interval
            });

            // Add hammer-on at the top
            if (idx === sortedPattern.length - 1) {
                playbackNotes.push({
                    string: note.string,
                    fret: hammerFret,
                    legato: true, // Hammer-on = legato
                    interval: 'h'
                });
            }
        });

        // Descending with pull-off at top
        playbackNotes.push({
            string: highestNote.string,
            fret: highestNote.fret,
            legato: true, // Pull-off = legato
            interval: 'p'
        });

        [...sortedPattern].reverse().slice(1).forEach(note => {
            playbackNotes.push({
                string: note.string,
                fret: note.fret,
                legato: false,
                interval: note.interval
            });
        });

        return playbackNotes;
    },

    /**
     * Get playback notes for two-notes-per-string style
     */
    getTwoPerStringPlayback(sortedPattern) {
        const playbackNotes = [];

        // Group by string
        const notesByString = {};
        sortedPattern.forEach(note => {
            if (!notesByString[note.string]) {
                notesByString[note.string] = [];
            }
            notesByString[note.string].push(note);
        });

        const stringsUsed = Object.keys(notesByString).map(Number).sort((a, b) => a - b);

        // Ascending with hammer-ons
        stringsUsed.forEach(stringNum => {
            const notes = notesByString[stringNum];
            const lowFret = notes[0].fret;
            const highFret = notes.length >= 2 ? notes[notes.length - 1].fret : lowFret + 3;

            playbackNotes.push({
                string: stringNum,
                fret: lowFret,
                legato: false,
                interval: notes[0].interval
            });
            playbackNotes.push({
                string: stringNum,
                fret: highFret,
                legato: true,
                interval: 'h'
            });
        });

        // Descending with pull-offs
        stringsUsed.reverse().forEach(stringNum => {
            const notes = notesByString[stringNum];
            const lowFret = notes[0].fret;
            const highFret = notes.length >= 2 ? notes[notes.length - 1].fret : lowFret + 3;

            playbackNotes.push({
                string: stringNum,
                fret: highFret,
                legato: false,
                interval: notes.length >= 2 ? notes[notes.length - 1].interval : 'p'
            });
            playbackNotes.push({
                string: stringNum,
                fret: lowFret,
                legato: true,
                interval: 'p'
            });
        });

        return playbackNotes;
    }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ArpeggioRenderer;
}
