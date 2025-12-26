/**
 * UI/UX IMPROVEMENTS FOR NON-THEORY GUITARISTS
 * 
 * This file contains helper functions and UI templates for making
 * scale suggestions actually useful and actionable for players
 * who don't understand music theory.
 */

const ScaleUIHelpers = {

    /**
     * Convert technical scale info into beginner-friendly guidance
     */
    generateBeginnerGuidance(mainScale, chordProgression) {
        const guidance = {
            headline: this.getHeadline(mainScale),
            whatToPlay: this.getWhatToPlay(mainScale),
            whyItWorks: this.getWhyItWorks(mainScale, chordProgression),
            howToPractice: this.getHowToPractice(mainScale, chordProgression),
            visualPattern: this.getVisualPattern(mainScale),
            nextSteps: this.getNextSteps(mainScale)
        };
        
        return guidance;
    },

    /**
     * Simple, catchy headline
     */
    getHeadline(scale) {
        const headlines = {
            'ionian': '🎸 Play the Major Scale',
            'aeolian': '🎸 Play the Natural Minor Scale',
            'harmonic_minor': '🎸 Play the Harmonic Minor Scale',
            'major_pentatonic': '🎸 Play the Major Pentatonic (Easiest!)',
            'minor_pentatonic': '🎸 Play the Minor Pentatonic (Rock Classic!)',
            'blues': '🎸 Play the Blues Scale (Add Some Attitude!)',
            'dorian': '🎸 Play the Dorian Mode (Jazzy Minor)',
            'mixolydian': '🎸 Play the Mixolydian Mode (Bluesy Major)'
        };
        
        return headlines[scale.type] || `🎸 Play ${scale.name}`;
    },

    /**
     * Plain English instructions
     */
    getWhatToPlay(scale) {
        const root = scale.root;
        const notes = scale.notes || [];
        const notesStr = notes.join(' - ');
        
        const instructions = {
            'ionian': `The ${root} major scale: ${notesStr}\n\nThis is like the "do-re-mi-fa-sol-la-ti-do" you learned in school, but starting from ${root}.`,
            
            'aeolian': `The ${root} natural minor scale: ${notesStr}\n\nThis has a darker, sadder sound than the major scale.`,
            
            'harmonic_minor': `The ${root} harmonic minor scale: ${notesStr}\n\nLike natural minor but with a raised 7th note. This creates a more dramatic, exotic sound and is essential for this progression.`,
            
            'major_pentatonic': `The ${root} major pentatonic: ${notesStr}\n\nOnly 5 notes! This is the easiest and safest scale. Almost impossible to play a wrong note.`,
            
            'minor_pentatonic': `The ${root} minor pentatonic: ${notesStr}\n\nOnly 5 notes! This is the foundation of rock, blues, and countless guitar solos.`,
            
            'blues': `The ${root} blues scale: ${notesStr}\n\nThe pentatonic scale with one extra "blues note" that adds attitude and edge.`
        };
        
        return instructions[scale.type] || `Play these notes: ${notesStr}`;
    },

    /**
     * Explain WHY this scale works
     */
    getWhyItWorks(scale, chordProgression) {
        const chordNames = chordProgression.map(c => c.name || c.root).join(', ');
        
        if (scale.reasoning) {
            // Use the reasoning from scale detection if available
            return `💡 ${scale.reasoning}`;
        }
        
        const explanations = {
            'ionian': `All the chords in this progression (${chordNames}) come from the ${scale.root} major scale. That means every note in these chords is also in the scale!`,
            
            'aeolian': `All the chords in this progression (${chordNames}) come from the ${scale.root} natural minor scale. The scale contains every note in every chord.`,
            
            'harmonic_minor': `This progression includes chords that need the raised 7th note (like major V chords in minor keys). The harmonic minor scale is the only minor scale that fits all the chords.`,
            
            'major_pentatonic': `The pentatonic scale is a simplified version of the major scale. It removes the two "unstable" notes, leaving only the notes that always sound good.`,
            
            'minor_pentatonic': `This scale contains the core notes of minor chords. It's impossible to hit a "wrong" note because all 5 notes work over minor progressions.`
        };
        
        return explanations[scale.type] || `This scale matches the chords in your progression.`;
    },

    /**
     * Actionable practice instructions
     */
    getHowToPractice(scale, chordProgression) {
        const steps = [
            {
                title: "Step 1: Play the scale alone",
                instruction: "Practice going up and down the scale slowly. Get familiar with the finger positions."
            },
            {
                title: "Step 2: Play the chords alone",
                instruction: `Strum through the chord progression: ${this.formatChordList(chordProgression)}. Get comfortable with the chord changes.`
            },
            {
                title: "Step 3: Play scale OVER the chords",
                instruction: "Have someone play the chords (or use a loop pedal), then improvise melodies using the scale notes. Start simple - even just playing random notes from the scale will sound musical!"
            },
            {
                title: "Step 4: Land on chord tones",
                instruction: "Advanced tip: Try to land on notes that are IN the current chord when that chord is playing. These notes will sound the most 'at home'."
            }
        ];
        
        return steps;
    },

    /**
     * Visual fretboard pattern (simplified description)
     */
    getVisualPattern(scale) {
        // This would ideally generate actual fretboard diagrams
        // For now, provide text guidance
        
        const patterns = {
            'major_pentatonic': {
                name: "Box 1 Pattern (Most Common)",
                description: "Start with your first finger on the root note on the low E string. The pattern forms a box shape that's easy to remember.",
                shape: "Two notes per string in a rectangular pattern"
            },
            'minor_pentatonic': {
                name: "Box 1 Pattern (Most Common)",  
                description: "Start with your first finger on the root note. This is THE most common scale pattern in rock guitar.",
                shape: "Two notes per string, easily spans one fret"
            },
            'ionian': {
                name: "Three-Notes-Per-String Pattern",
                description: "The major scale works well with 3 notes on each string, allowing you to cover two octaves smoothly.",
                shape: "Covers about 4-5 frets vertically"
            },
            'aeolian': {
                name: "Natural Minor Pattern",
                description: "Very similar to the major scale pattern but starting from a different position.",
                shape: "Three notes per string pattern"
            }
        };
        
        return patterns[scale.type] || {
            name: `${scale.name} Pattern`,
            description: "Learn the scale in one position first, then explore other positions on the neck.",
            shape: "Standard scale fingering"
        };
    },

    /**
     * Suggest what to learn next
     */
    getNextSteps(scale) {
        const nextSteps = {
            'major_pentatonic': [
                "Try the minor pentatonic scale in the same key",
                "Add the blues note to make it the blues scale",
                "Learn the full major scale (adds 2 more notes)"
            ],
            'minor_pentatonic': [
                "Add the blues note (the ♭5) for more attitude",
                "Learn the major pentatonic for contrast",
                "Explore the natural minor scale (7 notes)"
            ],
            'blues': [
                "Try just the pentatonic without the blue note for comparison",
                "Learn blues licks and phrases using this scale",
                "Explore bending the blue note for authentic blues sound"
            ],
            'ionian': [
                "Learn the modes: Same notes, different starting points!",
                "Try emphasizing different scale degrees for variety",
                "Explore the major pentatonic for simpler soloing"
            ],
            'aeolian': [
                "Learn harmonic minor (raised 7th)",
                "Try the minor pentatonic for simpler soloing",
                "Explore the Dorian mode for a brighter minor sound"
            ],
            'harmonic_minor': [
                "Practice the natural minor scale for comparison",
                "Focus on the exotic raised 7th sound",
                "Learn Phrygian Dominant mode (5th mode of harmonic minor)"
            ]
        };
        
        return nextSteps[scale.type] || [
            "Master this scale in multiple positions",
            "Try improvising melodies using only these notes",
            "Learn the related scales and modes"
        ];
    },

    /**
     * Format chord list for readability
     */
    formatChordList(chordProgression) {
        const names = chordProgression.map((c, i) => {
            const name = c.name || c.root;
            return `${i + 1}. ${name}`;
        });
        return names.join(' → ');
    },

    /**
     * Generate complete beginner-friendly scale display HTML
     */
    generateScaleDisplayHTML(scale, chordProgression, validation) {
        const guidance = this.generateBeginnerGuidance(scale, chordProgression);
        
        // Validation warning if scale doesn't fit perfectly
        let validationHTML = '';
        if (validation && !validation.isValid) {
            validationHTML = `
                <div class="scale-warning">
                    <span class="warning-icon">⚠️</span>
                    <div class="warning-content">
                        <strong>Note:</strong> This scale doesn't fit every chord perfectly (${validation.confidence}% match).
                        ${validation.problems.map(p => `
                            <div class="problem-detail">
                                • ${p.chordName} has notes outside this scale: ${p.missingNotes.join(', ')}
                            </div>
                        `).join('')}
                        <div class="suggestion">${validation.problems[0].suggestion}</div>
                    </div>
                </div>
            `;
        } else {
            validationHTML = `
                <div class="scale-success">
                    ✓ This scale fits all chords perfectly!
                </div>
            `;
        }
        
        return `
            <div class="beginner-scale-guide">
                <h2 class="scale-headline">${guidance.headline}</h2>
                
                ${validationHTML}
                
                <div class="scale-section what-to-play">
                    <h3>What to Play</h3>
                    <p>${guidance.whatToPlay}</p>
                </div>
                
                <div class="scale-section why-it-works">
                    <h3>Why This Works</h3>
                    <p>${guidance.whyItWorks}</p>
                </div>
                
                <div class="scale-section how-to-practice">
                    <h3>How to Practice</h3>
                    ${guidance.howToPractice.map((step, i) => `
                        <div class="practice-step">
                            <h4>${step.title}</h4>
                            <p>${step.instruction}</p>
                        </div>
                    `).join('')}
                </div>
                
                <div class="scale-section visual-pattern">
                    <h3>Fretboard Pattern</h3>
                    <h4>${guidance.visualPattern.name}</h4>
                    <p>${guidance.visualPattern.description}</p>
                    <p class="pattern-shape"><em>${guidance.visualPattern.shape}</em></p>
                </div>
                
                <div class="scale-section next-steps">
                    <h3>Next Steps</h3>
                    <ul>
                        ${guidance.nextSteps.map(step => `<li>${step}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    },

    /**
     * Simple toggle between "Beginner View" and "Theory View"
     */
    generateViewToggle() {
        return `
            <div class="scale-view-toggle">
                <button class="view-toggle-btn active" data-view="beginner">
                    🎸 Beginner Guide
                </button>
                <button class="view-toggle-btn" data-view="theory">
                    📚 Music Theory
                </button>
            </div>
        `;
    },

    /**
     * CSS for the beginner guide (add to your stylesheet)
     */
    getRequiredCSS() {
        return `
/* Beginner Scale Guide Styles */
.beginner-scale-guide {
    padding: 20px;
    background: var(--card-bg);
    border-radius: 8px;
    margin: 20px 0;
}

.scale-headline {
    font-size: 24px;
    color: var(--primary-color);
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--border-color);
}

.scale-warning {
    background: rgba(255, 193, 7, 0.1);
    border-left: 4px solid #ffc107;
    padding: 15px;
    margin: 15px 0;
    border-radius: 4px;
    display: flex;
    gap: 10px;
}

.warning-icon {
    font-size: 24px;
    flex-shrink: 0;
}

.scale-success {
    background: rgba(76, 175, 80, 0.1);
    border-left: 4px solid #4caf50;
    padding: 15px;
    margin: 15px 0;
    border-radius: 4px;
    color: #4caf50;
    font-weight: 500;
}

.problem-detail {
    font-size: 14px;
    margin: 5px 0;
    color: var(--text-secondary);
}

.suggestion {
    margin-top: 10px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
    font-style: italic;
}

.scale-section {
    margin: 25px 0;
}

.scale-section h3 {
    color: var(--primary-color);
    font-size: 18px;
    margin-bottom: 10px;
}

.scale-section h4 {
    color: var(--text-primary);
    font-size: 16px;
    margin: 10px 0 5px 0;
}

.practice-step {
    background: rgba(255, 255, 255, 0.03);
    padding: 15px;
    border-radius: 6px;
    margin: 10px 0;
    border-left: 3px solid var(--accent-color);
}

.practice-step h4 {
    color: var(--accent-color);
    margin-bottom: 8px;
}

.pattern-shape {
    font-style: italic;
    color: var(--text-secondary);
    margin-top: 8px;
}

.next-steps ul {
    list-style: none;
    padding: 0;
}

.next-steps li {
    padding: 10px;
    margin: 8px 0;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 4px;
    border-left: 3px solid var(--primary-color);
}

.next-steps li:before {
    content: "→ ";
    color: var(--primary-color);
    font-weight: bold;
    margin-right: 8px;
}

.scale-view-toggle {
    display: flex;
    gap: 10px;
    margin: 20px 0;
    justify-content: center;
}

.view-toggle-btn {
    padding: 10px 20px;
    border: 2px solid var(--border-color);
    background: var(--card-bg);
    color: var(--text-primary);
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 14px;
    font-weight: 500;
}

.view-toggle-btn:hover {
    border-color: var(--primary-color);
    background: rgba(var(--primary-color-rgb), 0.1);
}

.view-toggle-btn.active {
    background: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
}

/* Dark mode adjustments */
@media (prefers-color-scheme: dark) {
    .scale-warning {
        background: rgba(255, 193, 7, 0.15);
    }
    
    .scale-success {
        background: rgba(76, 175, 80, 0.15);
    }
}
        `;
    }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ScaleUIHelpers;
}
