# SUNO Control Guide

Related: [[rachel-lyricist]] [[Memory Loop]]

A tactical system for controlling vocal performance, genre, instrumentation, structure, mix, emotional intensity, and iteration. Built for catalog creation (sync, artist pitching, brand music).

---

## Core Rule: Suno Responds to Hierarchy

Suno prioritizes in this order:
1. Genre
2. Era
3. Instrumentation
4. Vocal Type
5. Energy / Emotion
6. Production adjectives
7. Mix / Technical terms

If something keeps getting ignored, move it earlier in the prompt.

---

## Vocal Control

**Weak:** "emotional female vocal"
**Controlled:** "intimate breathy female vocal, close-mic, restrained dynamics, controlled vibrato"

### Soft / Intimate
- close-mic whisper vocal, low-register female vocal, fragile head-voice, conversational phrasing, minimal vibrato, breath-led tone

### Powerful
- belt-driven chorus, chest-dominant vocal, sustained high notes, gospel-style ad libs, wide vibrato

### Indie / Cool
- detached monotone vocal, slightly lazy phrasing, understated delivery, dry vocal minimal reverb

### Commercial Pop
- polished radio pop vocal, layered doubles in chorus, stacked harmonies, tight tuning

### Brackets for Performance Direction
Place on their own line, immediately before the lyric. Use 1–3 per section max.
- `[whisper]`, `[spoken]`, `[belt]`, `[spoken, dry]`, `[whisper, close mic]`, `[belt, full power]`

---

## Instrumentation Control

**Generic:** "pop song with guitar and drums"
**Controlled:** "120 BPM modern alt-pop, muted palm guitar in verses, punchy tight kick, dry snare, minimal sub bass, atmospheric synth pads in pre-chorus, wide stereo chorus with layered guitars"

### Sync-Friendly Cheats
- minimal production, edit-friendly structure, instrumental breaks, no long intro, clean ending hit

### Cinematic Cheats
- hybrid orchestral, low strings pulse, braaam impacts, evolving tension bed, cinematic percussion hits

---

## Structure Control

Always define structure or Suno may ramble.

**Sync-ready:** Short intro (2 bars), immediate verse entry, chorus by 0:30.

**Example structure:**
4-bar intro → Verse → Pre-chorus → Chorus → Verse → Chorus → Bridge (half-time breakdown) → Final chorus → Clean button ending

---

## Energy & BPM

- 68–78 BPM = slow emotional
- 95–110 BPM = pop midtempo
- 118–128 BPM = dance pop
- 130–150 BPM = trap

Energy cues: driving, restrained, pulsing, minimal and spacious, explosive chorus, slow build, tension release structure

---

## Production Era Control

- 80s analog synth production
- 90s alternative rock mix
- early 2000s R&B drums
- modern Spotify pop production
- cinematic hybrid trailer production
- 2010s EDM festival drop energy

---

## Mix & Master Tone

- wide stereo image, mono verse wide chorus, warm analog saturation, bright modern master, lo-fi filtered intro, punchy transient drums, radio-ready polish

---

## Pro Prompt Template

```
Genre + BPM + Era reference
Instrumentation specifics
Vocal type + vocal mix style
Emotional arc description
Song structure breakdown
Production and mix notes
Mood keywords
```

**Example:**
112 BPM modern alt-pop with early 2010s indie influence. Clean delay guitar in verses, muted kick, tight dry snare, sub bass under chorus, wide stereo synth pads. Intimate breathy female vocal, close-mic, minimal vibrato in verses. Chorus explodes with layered harmonies and higher octave doubles. Structure: short intro, verse, pre-chorus lift, big hook chorus, second verse minimal, bridge half-time breakdown, final chorus with ad libs. Bright modern master, wide stereo chorus, clean ending hit. Mood: longing, cinematic, restrained but powerful.

---

## Iteration Strategy

Never regenerate randomly.
1. Lock the instrumental first. If it works, keep it identical — adjust only vocal.
2. Lock the vocal. If it works, keep it identical — adjust structure or chorus language.

Small controlled changes = evolution without chaos.

---

## Common Mistakes
- Too many adjectives
- Contradictory styles
- No BPM
- No structure
- Dense lyrics
- No dynamic arc

---

## Sync Catalog Checklist
- Instrumental intro
- No long vocal tail
- Clear lyrical theme
- Universal language
- Strong edit points
- Instrumental break sections
- Final clean button ending

---

## Layered Prompt Method
- Pass 1: Generate instrumental-first vibe
- Pass 2: Keep instrumental identical, refine vocal performance
- Pass 3: Refine structure and chorus impact

Treat like production passes, not slot machine spins.
