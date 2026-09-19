# Calle — real-world Mexican Spanish

A single-file, offline-capable PWA that teaches **spoken Mexican Spanish** through the chunks, fillers and fixed phrases natives actually reuse — not grammar tables and formal tenses.

Everything lives in one `index.html`: 316 chunks, 668 example sentences, 12 dialogues, a spaced-repetition engine, a pronunciation scorer and six study modes. No build step, no dependencies, no backend, no network calls.

*Calle* is Spanish for "street" — the register this teaches.

---

## Why it's built this way

Traditional courses front-load conjugation and subjunctive mood, then leave you unable to say *"I mean, honestly, I couldn't be bothered"* — which is what conversation actually sounds like. Calle inverts that:

- **Chunks over grammar.** `voy a + verb` replaces the entire future tense. `tengo que + verb` covers obligation without touching the subjunctive. You learn the slot, not the paradigm.
- **Always in context.** No chunk is ever shown alone. Each one carries 2–3 real sentences, so you absorb meaning, collocation and rhythm together.
- **Mexican, not neutral.** `ahorita`, `órale`, `no manches`, `la neta`, `me late`, `ni modo`, `¿mande?` — plus register tags so you know what's safe to say in front of whose mother.
- **Frequency-ordered.** Tier 1 is what you'd need in week one; Tier 3 is flavour.

---

## Goals

The core collection is conversational *glue* — `o sea`, `la neta`, `es que`. It serves every conversation equally. What changes per person is the ground the conversation stands on, so goals add vocabulary on top rather than swapping anything out.

| Goal | Adds |
|---|---|
| ✝️ **Share my faith** | asking permission, testimony language, offering to pray, leaving the door open |
| 🧭 **Travel & get around** | schedules, tickets, being lost, safety, lodging |
| 🌮 **Eat & order** | dietary needs, what's in it, ordering for a table |
| 🎭 **Talk about culture** | music, customs, asking for more, comparing to home |
| 💼 **Work & business** | meetings, deadlines, confirming, who's in charge |
| 🤝 **Make friends** | openers, introductions, plans, keeping in touch |

Picked during onboarding and changeable any time from Today. Each goal brings its own chunks, at least one dialogue, and a capability milestone (*"Share why you believe"*, *"Get anywhere alone"*).

**How goals affect the queue — and what they deliberately don't.** The obvious approach, giving goal chunks a scoring bonus, turns out to be wrong: any bonus big enough to lift them is big enough to bury every universal chunk behind them. Tested with two goals selected, the first twenty cards came back **100% goal vocabulary and zero glue** — a learner who picks *faith* would spend a fortnight on religious nouns with nothing to connect them.

So the two streams are **woven, two universal to one goal**, each internally tier-ordered:

```
o sea · este… · [travel] ¡aguas! · pues · la neta · [faith] no te preocupes ·
digo · ¿no? · [travel] ¿me repites? · ¿sí me explico? · tipo · [travel] no te entendí
```

The glue still leads, goal vocabulary arrives from card three, and neither crowds the other out. With no goals set it falls back to plain frequency order.

## First run

Three cards sell the method — chunks instead of grammar, the ear training, mic scoring — then a fourth asks what you're learning Spanish for. Shown once and remembered.

## Feedback and reward

Correct answers flash green and play a short rising tone; wrong ones flash red. Consecutive correct answers build a combo (`🔥 4 in a row`) shown in Review and Listen, and your best run is kept. Completing a session and unlocking a milestone each get their own sound, and a milestone unlock interrupts with a celebration — once, never twice for the same one.

All tones are **synthesised with the Web Audio API**, so there are no audio files and it works with the network off. Toggle in Settings; on by default.

## The six modes

| Mode | What it trains | Needs |
|---|---|---|
| **Learn** | Meeting a new chunk with its examples and audio | — |
| **Review** | Recall, via cloze or translation prompt | — |
| **Listen** | Understanding with **no text on screen** | — |
| **Shadow** | Saying it out loud, scored word by word | mic + net |
| **Quick-fire** | Production against a 5-second clock | mic + net |
| **Conversations** | Turn-taking — holding your end of an exchange | — |

### Learn
Introduces unseen chunks in frequency order: the phrase, what it *does* conversationally (filler, hedge, softener…), a literal gloss where it helps (18 chunks have one — `no manches` is literally "don't stain"), a register tag, and its example sentences with playback.

Where speech and spelling diverge, it shows **how it actually sounds**:

> **¿qué onda?** — sounds like `ké-ÓN-da — one word, no gap`
> **ahorita** — sounds like `o-RÍ-ta — the h is silent (often just "orita")`
> **¿verdad?** — sounds like `ver-DÁ — the final d disappears`

CAPS marks the stressed syllable. 104 chunks carry one; a chunk without a note sounds the way it looks. This is the gap that makes fast Mexican Spanish unintelligible to people who can read it perfectly — silent `h`, seseo, yeísmo, `para` → `pa`, `está` → `tá`, `nada más` → `namás`, final `-d` dropping.

One primary action — **Got it** — adds it to your deck. Passing is a secondary link, because a beginner has no basis to judge a chunk they've just met, and making that a 50/50 decision on every card is friction dressed as choice. A skipped chunk is remembered and sinks below ones you haven't seen.

### Review
The spaced-repetition core. A random example is shown with the chunk **blanked out**, plus the English as a prompt. You recall, reveal, then self-grade Again / Hard / Good / Easy.

86% of examples can be blanked this way. The other 14% are cases where the sentence uses a variant form — `tengo que` appearing inside a conjugated sentence, say — so the app falls back to **produce mode**: it shows the English and asks you to generate the Spanish. That fallback is deliberate, not a failure case; it gives useful variety.

### Listen
The mode that matters most, and the one most apps skip. Needs a few chunks in your deck first — quizzing you on phrases you've never met is a guess, not listening practice, so it says so rather than ambushing you.

Every other mode shows Spanish text while audio plays, which trains *reading with audio support* — you can score full marks and still be lost when a taquero talks to you. Listen plays a sentence with **no text at all** and asks which meaning it was, from four options.

Each chunk carries its own speed level and ramps as you prove yourself:

```
0.70×  →  0.85×  →  1.00×  →  1.15×
slow      easy      normal    fast
```

Right answer moves you up, wrong moves you down. A turtle button gives a one-off slow replay without costing a level.

### Shadow
Plays a sentence, you repeat it aloud, and the mic scores you. Three reps per phrase. See [Pronunciation scoring](#pronunciation-scoring).

### Quick-fire
English prompt, 5-second countdown, say it in Spanish. Recall with unlimited thinking time doesn't build the sub-second retrieval real conversation needs; this does. Reuses the same scorer.

### Conversations
Twelve exchanges built from chunks already in the collection. You take one side and choose your reply from three options — where the wrong ones are *plausible but off*, usually in register rather than meaning:

> **Them:** ¿Qué le damos, joven?
> - ¿Me regala tres de pastor, porfa? ✅
> - Yo deseo adquirir tres tacos de pastor. ❌ *(grammatically fine, sounds like a robot)*
> - ¿Qué me recomienda de tomar? ❌ *(wrong turn in the conversation)*

| Dialogue | Turns |
|---|---|
| Running into a friend | 6 |
| Ordering tacos | 8 |
| Running late | 6 |
| Turning down an invitation | 6 |
| Asking for directions | 6 |
| Reacting to big news | 6 |
| At the corner shop | 6 |
| Making weekend plans | 6 |
| Sharing your faith | 8 |
| At the bus station | 7 |
| Talking about music | 6 |
| Setting up a meeting | 6 |

Goal-matched conversations sort to the top and are badged *for you*. Finishing replays the whole exchange with per-line audio.

---

## The collection

**316 chunks · 668 example sentences** — 184 universal, 132 tagged to one or more goals

| Key | Category | Count |
|---|---|---|
| `slang` | Slang | 44 |
| `verb` | Verb combos | 32 |
| `social` | Social | 24 |
| `filler` | Fillers | 23 |
| `survive` | Survival | 20 |
| `ask` | Questions | 18 |
| `agree` | Agree / No | 15 |
| `connect` | Connectors | 15 |
| `soften` | Politeness | 15 |
| `reaction` | Reactions | 13 |
| `time` | Time | 13 |
| `opinion` | Opinions | 10 |

Every chunk is tagged `casual`, `neutral` or `vulgar`. The two vulgar entries (`al chile`, `ando en chinga`) show a **careful** badge — they're included because you'll hear them constantly, but you should know before you use them.

### Adding your own

Chunks are one `C(...)` call in the `CHUNKS` array:

```js
C("no manches",                                   // the chunk
  "\"no way!\" — disbelief, surprise or outrage", // what it DOES
  "reaction",                                     // category key
  1,                                              // frequency tier 1-3
  "casual",                                       // casual | neutral | vulgar
  [                                               // 2-3 real sentences
    ["¡No manches! ¿Te ganaste el sorteo?", "No way! You won the raffle?"],
    ["No manches, otra vez se descompuso.",  "No way, it broke down again."]
  ],
  "\"don't stain\"")                              // optional literal gloss
```

IDs are assigned automatically. Adding a chunk is enough — every mode, the search, the category bars and the milestones pick it up with no other changes.

---

## How the engines work

### Spaced repetition

A trimmed SM-2. State per chunk: `{ease, interval, due, reps, lapses, step, status}`.

New cards run two learning steps (1 min → 10 min) before graduating to a 1-day interval. After that:

| Grade | Effect |
|---|---|
| **Again** | back to learning, `ease − 0.2`, lapse recorded |
| **Hard** | `interval × 1.2`, `ease − 0.15` |
| **Good** | `interval × ease` |
| **Easy** | `interval × ease × 1.3`, `ease + 0.15` |

`ease` is clamped to 1.3–2.8. A chunk counts as **mastered** at a 21-day interval. Each button previews its own next interval so the grade is an informed choice.

### Pronunciation scoring

Two ideas do the work.

**1. Alignment, not position matching.** Your attempt is aligned to the target with Needleman–Wunsch, so dropping or adding a word shifts the rest instead of failing everything after it. Each target word comes back marked `hit`, `close` or `miss`; the score is `(hits + 0.5 × close) / target words`.

**2. Comparison by sound, not spelling.** Words are collapsed to how they're actually pronounced in Mexican Spanish before comparison, so the recogniser's spelling choice doesn't cost you points:

| Feature | Effect |
|---|---|
| seseo | `casa` = `caza`, `cerveza` = `serbesa` |
| yeísmo | `llama` = `yama` |
| silent h | `hace` = `ase` |
| b/v merger | `vamos` = `bamos` |
| `qu`/`c` → k | `qué` = `ke` |
| `g`/`j` before e,i | `gente` = `jente` |
| **`r` vs `rr` kept distinct** | `pero` ≠ `perro` |

That last row matters: `r`/`rr` is phonemic in Spanish, so collapsing it would forgive a real error.

### Sentence difficulty

A tier-1 chunk taught inside a sentence full of *other* slang is not a tier-1 lesson. The chunk's frequency tier said nothing about the sentence carrying it, so `o sea` — the very first chunk anyone meets — was introduced with:

> *"O sea, no es que no quiera ir, es que ando sin lana."* — 13 words, three other chunks, and a subjunctive.

Every example sentence is now rated **simple / natural / fast** on its own, from its length plus the tier of any *other* chunks inside it (sub-phrases of the chunk being taught don't count against it). Examples sort gentlest-first, and the sentence you're shown is matched to how well you know the chunk:

| Chunk maturity | Sentences it can draw |
|---|---|
| new / learning | simple |
| interval ≥ 5 days | simple + natural |
| interval ≥ 21 days | all three |

So `o sea` opens with *"O sea, ¿cómo?"* and only reaches that 13-word sentence once the chunk is genuinely known. If nothing gentle enough exists it takes the gentlest that does, never the whole set. 28 Tier-1 chunks had no easy sentence at all and were given one, so **every Tier-1 chunk now has a gentle way in**. Current spread: 70% simple, 24% natural, 6% fast.

### Milestones

Progress reads as **capabilities**, not card counts — "Order without English 7/10" beats "20 mastered". Eight milestones, each a hand-picked bundle of chunks:

🌮 Order without English · 👋 Greet like a local · 😲 React like you mean it · 💬 Stall like a native · 🧠 Hold an opinion · 📖 Tell a story · 🛟 Survive being lost · 🤝 Make plans

A chunk counts toward its milestone once you've either **recalled it** (scheduler status `review` or `mastered`) **or said it well** (85%+ in Shadow or Quick-fire). A milestone claims you can *do* something, so speaking it is evidence too — otherwise the practice modes would move nothing.

### Daily session

One button on Today runs three stages back to back — up to 20 due reviews, then 5 new chunks, then 4 listening items — with a progress bar across the whole thing and a summary of what got done. Stages with nothing to do are skipped, and leaving mid-way abandons the session cleanly.

### Two speaking scores, kept apart

Shadow and Quick-fire both score speech, but they measure different skills:

| | Shows you | Measures |
|---|---|---|
| **Shadow** | the Spanish sentence | pronunciation — you can see what to say |
| **Quick-fire** | the English only, on a clock | recall **and** pronunciation |

Reading aloud will always beat producing cold, so they keep **separate** records (`calle_scores` vs `calle_drills`) and Progress reports them side by side. Pooling them would let the easier task mask the harder one.

---

## Running it

**Just open `index.html`** in any modern browser. Learn, Review, Listen, Conversations and all audio work immediately, with no server and no internet.

**For the microphone modes** (Shadow, Quick-fire) the page must be *served*, because browsers refuse the mic to `file://` pages no matter what you allow — there's no origin to attach the permission to:

```bash
cd <folder with index.html>
python3 -m http.server 8000
# then open http://localhost:8000
```

This is still fully offline — `localhost` never touches the internet.

> **One genuine caveat:** Chrome and Edge don't do speech recognition on-device; they stream audio to Google's servers. So the *scoring* in Shadow and Quick-fire needs a connection even when served locally. Everything else works with the network off. The app detects all of this and says which case you're in — check Settings (⚙).

### Installing on a phone

Serve it over HTTPS (GitHub Pages works) and use **Add to Home Screen**. The web app manifest is generated at runtime with a canvas-drawn icon, so it installs standalone with no extra files.

---

## Architecture

One file, no dependencies, no build:

```
index.html
├── <style>                inline CSS, dark + light via prefers-color-scheme
└── <script>
    ├── 1.  CHUNKS         the 242-chunk collection + category table
    ├── 1b. DIALOGUES      8 scripted exchanges
    ├── 2.  STORAGE        localStorage wrapper, defaults merged on load
    ├── 3.  SRS            SM-2 scheduling
    ├── 4.  SPEECH OUT     TTS: voice selection, error surfacing
    ├── 4b. SPEECH IN      recognition + microphone permission
    ├── 4c. SCORING        phonetic normalisation + alignment
    ├── 5.  HELPERS        escaping, cloze building, toasts
    ├── 6.  VIEWS          one render function per mode
    ├── 7.  EVENTS         single delegated click handler
    └── 8.  PWA            runtime-generated manifest + icon
```

Rendering is deliberately dumb: every view rebuilds its own `innerHTML` from state, and one delegated listener on `document` routes every `data-*` action. No framework, no virtual DOM, no reconciliation to reason about.

### Stored state

All under the `calle_` prefix in `localStorage`:

| Key | Holds |
|---|---|
| `calle_srs` | per-chunk scheduling state |
| `calle_streak` | streak count, last day, per-day activity counts |
| `calle_scores` | best Shadow score per chunk (reading aloud) |
| `calle_drills` | best Quick-fire score per chunk (cold recall) |
| `calle_ears` | listening speed level per chunk |
| `calle_dialogDone` | best % per dialogue |
| `calle_skipped` | chunks you passed on in Learn, so they sink in the queue |
| `calle_unlocked` | milestones already celebrated, so it never fires twice |
| `calle_seenIntro` | whether the first-run intro has been shown |
| `calle_totals` | lifetime reviews, shadow reps, attempts, drills, best combo |
| `calle_settings` | chosen voice, speech rate, sound on/off |

### Backup and restore

Settings → **Backup** exports every key above as one dated JSON file (`calle-progress-2026-09-19.json`), and **Import** restores it — on the same device or a new one.

Import only writes keys it recognises, so a file from elsewhere can't inject anything, and it rejects malformed JSON or a backup from another app without touching what's already there. It replaces rather than merges, so it asks first.

Day keys are built from **local** date parts, not `toISOString()` — UTC would break the streak for anyone behind it (an evening session in Mexico would count as tomorrow).

Day keys use local date parts rather than `toISOString()` for the same reason. Export regularly if the progress matters to you — it's still one browser's storage underneath.

### Typography

Two loaded faces, so the app looks the same on every device rather than inheriting whatever each OS supplies:

| | Face | Used for |
|---|---|---|
| **UI** | [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) | everything the app says |
| **Spanish** | [Fraunces](https://fonts.google.com/specimen/Fraunces) | every chunk, sentence and dialogue line |

The split is the point: **a serif sentence is the language you're learning, sans is the app talking.** Fraunces also sets tighter than a system bold, so Spanish sentences wrap less.

~92KB for both Latin subsets, cached after first load, requested in a single stylesheet with `preconnect` and `font-display: swap` so nothing blocks rendering. System stacks remain the fallback (`--ui` and `--es` custom properties), and they keep the same sans/serif distinction if the fonts never arrive.

---

## Browser support

| | Playback | Mic scoring |
|---|---|---|
| Chrome / Edge | ✅ | ✅ *(served + online)* |
| Safari | ✅ | ✅ *(served)* |
| Firefox | ✅ | ❌ *(no SpeechRecognition)* |

Playback uses whatever Spanish voices your OS has installed. If there are none the app says so and points at the right system settings — it never fails silently. Where scoring isn't available the mic UI hides itself and the manual rep counter takes over.

---

## Known gaps

- **No service worker.** A single file can't register one (blob URLs are rejected as SW scripts), so offline relies on the HTTP cache rather than a guaranteed shell.
- **Tier imbalance** — 167 Tier 1 against 4 Tier 3, so the frequency curve flattens near the end.
