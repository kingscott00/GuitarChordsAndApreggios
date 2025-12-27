# 🎸 Quick Testing Reference Card

## Test Cases for Music Theory Enhancements

Use these specific test cases to verify your implementation is working correctly.

---

## ✅ Test 1: Harmonic Minor Detection (CRITICAL)

**Setup:**
- Mood: Dark
- Complexity: Simple  
- Length: Short
- Key: A minor (custom)
- Use Curated: Yes

**Try to get:** "Shadows" progression (Am → F → C → E)

**Expected Main Scale:**
```
✓ A Harmonic Minor (A B C D E F G#)
Reasoning: "This progression contains a major V chord"
```

**NOT:** ❌ A Aeolian (would have G natural, which clashes with E major's G#)

**How to Verify:**
1. Load the progression
2. Check Scale Builder section
3. Main scale should say "Harmonic Minor"
4. Should have explanation about major V chord

---

## ✅ Test 2: Natural Minor Preserved

**Setup:**
- Mood: Sad
- Get progression: "Heartbreak Hotel" (Am → F → C → G)

**Expected Main Scale:**
```
✓ A Aeolian (Natural Minor) - A B C D E F G
```

**Why:** No major V chord (it's G major, which is bVII, not V), so natural minor is correct.

**Validation:** Should show "✓ Fits all chords perfectly (100%)"

---

## ✅ Test 3: Key Detection Tiebreaker

**Setup:**
- Build manually: Am → F → C → G

**Expected Detection:**
```
Key: A minor (not C major)
Score breakdown:
- 4 diatonic chords: +40 points
- First chord (Am): +15 points
- Tonic appears 1 time: +5 points
Total: 60 points

C major would get:
- 4 diatonic chords: +40 points
- No bonus (first/last don't match)
Total: 40 points
```

**How to Verify:** 
- Am should win despite tie in diatonic matches
- Scale should be A Aeolian (or A minor pentatonic)

---

## ✅ Test 4: Scale Validation Warning

**Setup:**
- Mood: Dark
- Get "Shadows" BUT if it still suggests Aeolian (before fix)

**Expected Warning:**
```
⚠️ Main scale doesn't fit all chords (75% match)

Problems:
• E major has G# (not in A Aeolian)
  Suggestion: Try Harmonic Minor instead
```

**After Fix:**
Should NOT see this warning because it correctly suggests Harmonic Minor from the start.

---

## ✅ Test 5: New Key Coverage (Cm)

**Setup:**
- Inspire Me
- Mood: Sad
- Key: C minor (custom)
- Length: Short

**Expected:**
- Should find progressions (not "No progressions available")
- Examples: "Winter Blues", "Lonely Streets", "Dark Cathedral"

**Before Expansion:** Would silently ignore key and give random key
**After Expansion:** Returns Cm progressions

---

## ✅ Test 6: New Key Coverage (Gm)

**Setup:**
- Inspire Me  
- Mood: Sad
- Key: G minor (custom)
- Length: Short

**Expected:**
- Should find: "Autumn Rain", "Fading Light", or "Shadow Realm"
- Scale suggestion: G Aeolian or G Harmonic Minor

---

## ✅ Test 7: Progression Variety

**Setup:**
- Generate 10 progressions:
- Mood: Happy
- Complexity: Colorful
- Length: Short
- Key: Random
- Use Curated: Yes

**Expected Variety:**
- At least 7-8 different root notes should appear
- No single chord should appear in >30% of progressions
- Should see different keys (C, G, D, A, E, etc.)

**Problem to Avoid:** 
- Getting Gmaj7 in 8 out of 10 progressions (was a bug)

---

## ✅ Test 8: No Power Chords in Advanced

**Setup:**
- Inspire Me
- Mood: Energetic  
- Complexity: **Advanced**
- Use Curated: No (Generated)

**Expected:**
- Chords like: maj7, min7, 9th, dominant7
- Extended jazz voicings

**Should NOT Get:**
- E5, A5, G5 (power chords)
- These should only appear in Simple complexity

---

## ✅ Test 9: Beginner View Toggle

**Setup:**
- Load any progression
- Click "🎸 Beginner Guide" button

**Expected Display:**
```
🎸 Play the [Scale Name]

What to Play:
[Plain English description]
The [X] major scale: [notes]
This is like "do-re-mi"...

Why This Works:
All the chords in this progression come from [X] major...

How to Practice:
Step 1: Play the scale alone...
Step 2: Play the chords alone...
Step 3: Play scale OVER the chords...
Step 4: Land on chord tones...
```

**Should NOT See:**
- Technical jargon without explanation
- Roman numeral analysis (unless in theory view)
- Confusing modal terminology

---

## ✅ Test 10: Scale Confidence Display

**Test A - Perfect Fit:**
- Progression: C → G → Am → F (all diatonic to C major)
- Expected: "✓ Fits all chords perfectly (100% match)"

**Test B - Partial Fit:**
- Progression: C → Ab → G → C (Ab is borrowed chord)
- Expected: "⚠️ Partial match (75% match)"
- Should list: "Ab major has Ab (not in C Ionian)"

---

## 🔍 Visual Verification Checklist

After implementing, check these visual elements:

### Scale Builder Section:
- [ ] Toggle buttons (Beginner / Theory) are visible and clickable
- [ ] Validation badge appears (green ✓ or yellow ⚠️)
- [ ] Scale notes are displayed clearly
- [ ] Practice steps are numbered and formatted nicely
- [ ] Warnings (if any) are highlighted in yellow/orange

### Inspire Me Section:
- [ ] Key selection is respected (no more silent fallback)
- [ ] Progressions have variety (different chords/voicings)
- [ ] No unexpected power chords in Advanced mode
- [ ] All moods have progressions in all major keys

---

## 🐛 Quick Debugging Commands

### Check Current Scale Detection:
```javascript
// In browser console
const chords = app.state.progression; // or however you access it
const analysis = ScaleDetection.analyzeProgression(chords, null);
console.log('Detected Key:', analysis.key);
console.log('Main Scale:', analysis.mainScale);
```

### Check Scale Validation:
```javascript
const mainScale = analysis.mainScale;
const chords = app.state.progression;
const validation = ScaleDetection.validateScaleFitness(mainScale, chords);
console.log('Valid?', validation.isValid);
console.log('Confidence:', validation.confidence + '%');
console.log('Problems:', validation.problems);
```

### Check Available Progressions:
```javascript
const mood = 'sad';
const key = 'Cm';
const progs = curatedProgressions.filter(p => 
    p.mood === mood && p.key === key
);
console.log(`Found ${progs.length} progressions for ${key} in ${mood} mood`);
```

### Verify Chord Database:
```javascript
function findChord(chordName) {
    return chordData.find(c => {
        const name = `${c.root}${getQualitySymbol(c.quality)}`;
        return name === chordName;
    });
}

// Test examples:
console.log('Cm exists?', findChord('Cm') !== undefined);
console.log('Gmaj7 exists?', findChord('Gmaj7') !== undefined);
console.log('Ab exists?', findChord('Ab') !== undefined);
```

---

## 📊 Success Criteria Summary

| Test | Pass Criteria | Priority |
|------|--------------|----------|
| Harmonic Minor Detection | "Shadows" suggests Harmonic Minor (not Aeolian) | 🔴 CRITICAL |
| Natural Minor Preserved | "Heartbreak Hotel" still uses Aeolian | 🟡 HIGH |
| Key Tiebreaker | Am → F → C → G detects A minor (not C) | 🟡 HIGH |
| Scale Validation | Shows warnings when scale doesn't fit | 🟡 HIGH |
| Cm Key Coverage | At least 3 progressions available | 🟢 MEDIUM |
| Gm Key Coverage | At least 3 progressions available | 🟢 MEDIUM |
| Progression Variety | No chord appears >30% in 10 random | 🟡 HIGH |
| No Power Chords | Advanced mode excludes E5, A5, etc. | 🟡 HIGH |
| Beginner View | Clear, jargon-free explanations | 🟢 MEDIUM |
| Confidence Display | Shows percentage and problems | 🟢 MEDIUM |

**Overall Pass:** 9/10 tests passing (minimum)

---

## 🎯 Quick Fix Reference

**Problem:** Scale suggests Aeolian but progression has major V
**Fix:** Check `hasMajorVChord()` is implemented and called

**Problem:** Key detection still ties between relative major/minor  
**Fix:** Check `addTiebreakerScoring()` is being called

**Problem:** New progressions don't appear
**Fix:** Clear cache, check syntax, verify import

**Problem:** Validation shows 100% but should show warning
**Fix:** Check `getNotesInChord()` includes all chord qualities

**Problem:** Beginner view is blank
**Fix:** Check `generateScaleDisplayHTML()` and container IDs match

---

## 💾 Save These Test Progressions

For quick testing, bookmark these progressions:

```javascript
// Test progression builder
const testProgressions = {
    harmonicMinorTest: ['Am', 'F', 'C', 'E'],        // Should → Harmonic Minor
    naturalMinorTest: ['Am', 'F', 'C', 'G'],         // Should → Aeolian
    tiebreakerTest: ['Am', 'F', 'C', 'G'],           // Should detect Am (not C)
    borrowedChordTest: ['C', 'Ab', 'G', 'C'],        // Should show warning
    diatonicTest: ['C', 'G', 'Am', 'F'],             // Should be 100% valid
};

// Load a test:
function loadTest(name) {
    const chords = testProgressions[name];
    // ... load into your progression builder
}
```

---

*Keep this card handy while testing!* 🎸
