Calle — real-world Mexican Spanish
A single-file PWA that teaches spoken Mexican Spanish through the chunks, fillers and fixed phrases natives actually reuse — not grammar tables and formal tenses. An adaptive curriculum keeps the carrier sentence at the learner's level and uses their goals to choose relevant contexts.

Everything lives in one index.html: 368 chunks, 564 everyday words, 802 example sentences, 16 dialogues, 41 sentence patterns, a spaced-repetition engine, a pronunciation scorer and nine study modes. No build step, no dependencies, no backend, no network calls.

Calle is Spanish for "street" — the register this teaches.

Why it's built this way
Traditional courses front-load conjugation and subjunctive mood, then leave you unable to say "I mean, honestly, I couldn't be bothered" — which is what conversation actually sounds like. Calle inverts that:

Chunks over grammar. voy a + verb replaces the entire future tense. tengo que + verb covers obligation without touching the subjunctive. You learn the slot, not the paradigm.
Always in context. No chunk is ever shown alone. Each one carries 2–3 real sentences, so you absorb meaning, collocation and rhythm together.
Mexican, not neutral. ahorita, órale, no manches, la neta, me late, ni modo, ¿mande? — plus register tags so you know what's safe to say in front of whose mother.
Frequency-ordered. Tier 1 is what you'd need in week one; Tier 3 is flavour.
Goals
The core collection is conversational glue — o sea, la neta, es que. It serves every conversation equally. What changes per person is the ground the conversation stands on, so goals add vocabulary on top rather than swapping anything out.

Goal	Adds
✝️ Share my faith	asking permission, testimony language, offering to pray, leaving the door open
🧭 Travel & get around	schedules, tickets, being lost, safety, lodging
🌮 Eat & order	dietary needs, what's in it, ordering for a table
🎭 Talk about culture	music, customs, asking for more, comparing to home
💼 Work & business	meetings, deadlines, confirming, who's in charge
🤝 Make friends	openers, introductions, plans, keeping in touch
Picked during onboarding and changeable any time from Today. Each goal brings its own chunks, at least one dialogue, and a capability milestone ("Share why you believe", "Get anywhere alone"). Goal selection also influences examples: when several level-appropriate sentences are available, Calle prefers one connected to the learner's selected goals.

How goals affect the queue — and what they deliberately don't. The obvious approach, giving goal chunks a scoring bonus, turns out to be wrong: any bonus big enough to lift them is big enough to bury every universal chunk behind them. Tested with two goals selected, the first twenty cards came back 100% goal vocabulary and zero glue — a learner who picks faith would spend a fortnight on religious nouns with nothing to connect them.

So the two streams are woven, two universal to one goal, each internally tier-ordered:

o sea · este… · [travel] ¡aguas! · pues · la neta · [faith] no te preocupes ·
digo · ¿no? · [travel] ¿me repites? · ¿sí me explico? · tipo · [travel] no te entendí
The glue still leads, goal vocabulary arrives from card three, and neither crowds the other out. With no goals set it falls back to plain frequency order.

Core first
Frequency alone put soy, estoy, hay and tengo on day nineteen — they were appended to the array late and inherited the back of their own category, while the queue filled with fillers and reactions. A learner who can greet everybody and state nothing has not had a good first week.

Fifty chunks are flagged core: the spine, the question words, and the frames the Lab plugs together. They are held out of the frequency ordering and woven back one for one, so they all arrive inside week one without burying the glue. It is the same lesson the goal weighting taught — placing them first wholesale would mean thirty cards of bare scaffolding and nothing human to say.

First run
Four cards sell the method — chunks instead of grammar, sentences as blocks, the ear training, mic scoring — then a fifth asks what you're learning Spanish for. Shown once and remembered.

Feedback and reward
Correct answers flash green and play a short rising tone; wrong ones flash red. Consecutive correct answers build a combo (🔥 4 in a row) shown in Review and Listen, and your best run is kept. Completing a session and unlocking a milestone each get their own sound, and a milestone unlock interrupts with a celebration — once, never twice for the same one.

All tones are synthesised with the Web Audio API, so there are no audio files and it works with the network off. Toggle in Settings; on by default.

The nine modes
Mode	What it trains	Needs
Learn	Meeting a new chunk with its examples and audio	—
Review	Recall, via cloze or translation prompt	—
Listen	Understanding with no text on screen	—
Shadow	Saying it out loud, scored word by word	mic + net
Quick-fire	Production against a 5-second clock	mic + net
Build it	Filling a frame's slot — production without a mic	—
Sentence Lab	Assembling a whole sentence from blocks	—
Words	Everyday vocabulary, scheduled in its own right	—
Conversations	Turn-taking — holding your end of an exchange	—
Rounds
The three open-ended practice modes run in rounds rather than forever — Listen 10 items, Shadow 8 phrases, Quick-fire 8 prompts — each ending on a summary with an Another round button.

They originally topped their queues up silently whenever they emptied, so they had no finish line at all: you came out of a daily session that ended with a summary straight into a mode that never ended, and a perfect run earned no acknowledgement. The daily session still sets its own listening quota and is unaffected.

Learn
Introduces unseen chunks in a prerequisite-aware, level-capped order: the phrase, what it does conversationally (filler, hedge, softener…), a literal gloss where it helps (18 chunks have one — no manches is literally "don't stain"), a register tag, and its example sentences with playback.

Learn shows at most two examples inside the learner's current comprehension ceiling. Later-stage examples remain available in a collapsed section, so rich native usage is preserved without making it part of the beginner lesson.

Where speech and spelling diverge, it shows how it actually sounds:

¿qué onda? — sounds like ké-ÓN-da — one word, no gap ahorita — sounds like o-RÍ-ta — the h is silent (often just "orita") ¿verdad? — sounds like ver-DÁ — the final d disappears

CAPS marks the stressed syllable. 104 chunks carry one; a chunk without a note sounds the way it looks. This is the gap that makes fast Mexican Spanish unintelligible to people who can read it perfectly — silent h, seseo, yeísmo, para → pa, está → tá, nada más → namás, final -d dropping.

One primary action — Got it — adds it to your deck. Passing is a secondary link, because a beginner has no basis to judge a chunk they've just met, and making that a 50/50 decision on every card is friction dressed as choice. A skipped chunk is remembered and sinks below ones you haven't seen.

Review
The spaced-repetition core. A random example is shown with the chunk blanked out, plus the English as a prompt. You recall, reveal, then self-grade Again / Hard / Good / Easy.

86% of examples can be blanked this way. The other 14% are cases where the sentence uses a variant form — tengo que appearing inside a conjugated sentence, say — so the app falls back to produce mode: it shows the English and asks you to generate the Spanish. That fallback is deliberate, not a failure case; it gives useful variety.

Listen
The mode that matters most, and the one most apps skip. Needs a few chunks in your deck first — quizzing you on phrases you've never met is a guess, not listening practice, so it says so rather than ambushing you.

Every other mode shows Spanish text while audio plays, which trains reading with audio support — you can score full marks and still be lost when a taquero talks to you. Listen plays a sentence with no text at all and asks which meaning it was, from four options.

Each chunk carries its own speed level and ramps as you prove yourself:

0.70×  →  0.85×  →  1.00×  →  1.15×
slow      easy      normal    fast
Right answer moves you up, wrong moves you down. A turtle button gives a one-off slow replay without costing a level. Ten items to a round, then a score.

Shadow
Plays a sentence, you repeat it aloud, and the mic scores you. Three reps per phrase, eight phrases to a round. See Pronunciation scoring.

Quick-fire
English prompt, 5-second countdown, say it in Spanish. Recall with unlimited thinking time doesn't build the sub-second retrieval real conversation needs; this does. Reuses the same scorer. Eight prompts to a round.

Conversations
Sixteen exchanges built from chunks already in the collection. You take one side and choose your reply from three options — where the wrong ones are plausible but off, usually in register rather than meaning:

Them: ¿Qué le damos, joven?

¿Me regala tres de pastor, porfa? ✅
Yo deseo adquirir tres tacos de pastor. ❌ (grammatically fine, sounds like a robot)
¿Qué me recomienda de tomar? ❌ (wrong turn in the conversation)
Dialogue	Turns
Running into a friend	6
Ordering tacos	8
Running late	6
Turning down an invitation	6
Asking for directions	6
Reacting to big news	6
At the corner shop	6
Making weekend plans	6
Sharing your faith	8
At the bus station	7
Talking about music	6
Setting up a meeting	6
Someone asks what you believe	8
Talking about a tradition	6
The bus is late	6
Paying at the market	8
Goal-matched conversations sort to the top and are badged for you. Finishing replays the whole exchange with per-line audio.

Sentence Lab
The plug-in method. Almost everything a beginner needs to say is a lead plus one or two slots:

    quiero        + comer              + ahorita
    tengo que     + salir temprano     + mañana
    ¿puedo        + orar por ti        + sin presión

The Lab shows the English, names the slot you are filling, and has you assemble the Spanish a piece at a time — so what is learned is the assembly rule rather than any one sentence.

Curated, not combinatorial. The first version generated by combining any lead with any verb with any tail. That is grammatical and useless: it produced "acabo de creer", "hay que tomar contigo" and "me gusta vivir ahorita" — Spanish that parses and that nobody has ever said. A learner cannot tell the difference, which makes a free generator worse than none.

So the fillers are scoped to the pattern they belong to. Every option in a slot is written to read naturally after that particular lead, so every sentence the app can build is one someone would actually say. 41 patterns, about 260 sentences, all of them real — fewer than free combination would give and worth having.

Pattern	Count
universal	22
faith	4
food · travel · work · friends · culture	3 each

Goals steer it. A pattern belonging to a goal is three times as likely to come up for someone who picked that goal, so a faith learner builds quiero orar por ti and ¿puedo compartir algo contigo? rather than sentences about buying things — roughly 44% of their round. The universal shapes still appear, because every conversation needs them whatever it is about.

Build it
The frames are the best thing in the collection — voy a + verb really does replace the future tense — and they used to be taught as though they were sentences: a card to recognise, never a thing to build with. Build it shows the English and an empty slot, and asks which filler belongs in it.

voy a ___        I'm going to rest
                 → descansar · pasar · cancelar · invitarte

Twelve frames, six fillers each, eight to a round. The wrong options come from other frames, so they are real Spanish that simply does not fit this slot; same-frame fillers would usually be just as correct, and the discrimination worth training is which frame takes what.

It needs no microphone. Shadow and Quick-fire are the only other production modes and neither runs on an iPhone, where the Web Speech API has no recognition in any browser — so half the audience had recognition practice and nothing asking them to produce.

What comes back
The collection has fifty-two ways to ask something and used to teach nothing about the reply, which is the failure people actually have: you ask ¿por dónde queda? well enough to convince someone you speak Spanish, and they answer at full speed.

Sixteen of the highest-value questions carry the three or four replies you will really get — directions that assume you know the street, a card machine that is down, the last bus having gone. They appear alongside the question in Learn, marked recognition-only, and Listen plays one instead of an example on about a third of that chunk's turns. The wrong options there are other real replies, so the round cannot be passed by picking the only thing that sounds like an answer.

Register, and what nobody tells you
Every chunk carries casual, neutral or vulgar, and the card says who it is for — friends and people your own age, or safe with anyone, or close friends and read the room. This is the difference between güey and mucho gusto, and it is not visible from a translation.

Fourteen chunks also carry a culture note, for the cases where the words survive translation and the meaning does not. ahorita earns the longest: it can mean now, in twenty minutes, or never, and nothing shorter than a paragraph conveys that. Also mande, provecho, con permiso, ¿me regalas?, ni modo and güey — the ones where the mistake is social rather than grammatical.

Salty language can be switched off in Settings, which keeps the two vulgar chunks out of the deck without pretending they are not said.

The spine
Chunks get you talking; a smaller set stops you hitting a ceiling two weeks in. Thirty-four of them cover what no paraphrase gets around:

The past, which the collection could not express at all though half of conversation is recounting what happened — fui a, fue, estuvo, me dijo, tuve que, no pude, estaba, taught as frames the same way voy a + verb already replaces the future.
Numbers and the clock, missing outright, which quietly broke the two goals that need them most: the app taught ¿cuánto es? and left you unable to understand the answer.
The forms with no way round them — hay, soy, estoy, es, está, tengo, me gusta — with ser and estar split by what they are for rather than explained, so the distinction arrives as two chunks instead of a rule.
The little words that go before the verb — lo, me lo, le — which are what let everything else be aimed at someone other than yourself.

Words
Chunks are things you say whole. Words are what you swap into them, and until recently the app did not teach them at all — they rode along inside example sentences, uncounted and unscheduled. Measured across everything the app contained, 44% of its vocabulary appeared exactly once. A word met once is decoration, not teaching, so the real taught vocabulary was about 440 recurring items where conversational fluency wants nearer two thousand.

564 everyday words are now first-class material, scheduled through the same SM-2 engine as chunks and reviewed the same way: the English is shown, you recall the Spanish, you reveal and grade yourself. Nouns carry their article, because la mano is how you learn the gender and "mano, feminine" is how you forget it.

Domain	Count
Everyday verbs	72
Food & drink	55
Feelings & people	50
Describing things	50
Around the house · Time & money	45
Body & health	44
Work & money	43
Family & people · Places & getting around	42
Weather & nature	40
Clothes	36

They are dealt a domain at a time, so a learner meets a spread rather than sixty kitchen nouns before a single feeling. The daily session carries a word quota alongside the chunk quota — six, twelve or twenty depending on pace.

Talking about other people
Every pattern used to be yo or tú: a learner could talk about themselves and ask the other person things, and could not mention a third party at all. No "my brother works there", no "she told me", no "we're going". Most of any real conversation is about people who are not in the room, so mi hermano, ella, ellos, nosotros and ¿tu familia…? are now shapes you can build.

Four shapes were missing alongside them — negation past a bare no, giving a reason with porque, comparing with más … que, and anchoring in time with cuando. Without those a learner can name things and cannot argue, explain, prefer or narrate, which is most of talking.

The collection
368 chunks · 564 words · 802 example sentences — 204 universal, 164 tagged to one or more goals

Key	Category	Count
ask	Questions	61
verb	Verb combos	55
slang	Slang	44
social	Social	35
survive	Survival	31
filler	Fillers	23
time	Time	22
opinion	Opinions	21
connect	Connectors	20
soften	Politeness	19
reaction	Reactions	16
agree	Agree / No	15
number	Numbers	6
Every chunk is tagged casual, neutral or vulgar. The two vulgar entries (al chile, ando en chinga) show a careful badge — they're included because you'll hear them constantly, but you should know before you use them.

Adding your own
Chunks are one C(...) call in the CHUNKS array:

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
IDs are assigned automatically and positionally, so append rather than insert: adding a chunk in the middle renumbers every id after it and detaches saved progress from what it was attached to. New material goes at the end of the array for that reason.

Adding a chunk is enough — every mode, the search, the category bars and the milestones pick it up with no other changes. Four side tables key off the chunk text and are optional:

Table	Adds
SOUNDS	how it actually sounds, when spelling hides it
NOTES	a culture note, where translation loses the meaning
ANSWERS	the replies you'll get, if the chunk is a question
EXTRA_EXAMPLES	more sentences for a chunk that does several jobs

How the engines work
Spaced repetition
A trimmed SM-2. State per chunk: {ease, interval, due, reps, lapses, step, status}.

New cards run two learning steps (1 min → 10 min) before graduating to a 1-day interval. After that:

Grade	Effect
Again	back to learning, ease − 0.2, lapse recorded
Hard	interval × 1.2, ease − 0.15
Good	interval × ease
Easy	interval × ease × 1.3, ease + 0.15
ease is clamped to 1.3–2.8. A chunk counts as mastered at a 21-day interval. Each button previews its own next interval so the grade is an informed choice.

Pronunciation scoring
Two ideas do the work.

1. Alignment, not position matching. Your attempt is aligned to the target with Needleman–Wunsch, so dropping or adding a word shifts the rest instead of failing everything after it. Each target word comes back marked hit, close or miss; the score is (hits + 0.5 × close) / target words.

2. Comparison by sound, not spelling. Words are collapsed to how they're actually pronounced in Mexican Spanish before comparison, so the recogniser's spelling choice doesn't cost you points:

Feature	Effect
seseo	casa = caza, cerveza = serbesa
yeísmo	llama = yama
silent h	hace = ase
b/v merger	vamos = bamos
qu/c → k	qué = ke
g/j before e,i	gente = jente
r vs rr kept distinct	pero ≠ perro
That last row matters: r/rr is phonemic in Spanish, so collapsing it would forgive a real error.

Adaptive curriculum
Calle stores a learner profile with a conversational-fluency target, Mexican dialect, informal/natural register and four independently adapting skills:

Skill	Evidence
Vocabulary	Review grades and chunk difficulty
Sentence comprehension	Review grades and sentence level
Listening	Correct meaning at the current audio/sentence level
Speaking	Shadow and Quick-fire pronunciation/production scores
The default starting band is strong A1 / emerging A2. It can be reset to A1, A2, B1 or B2 in Settings. Progress moves slowly and only after a minimum evidence window; a single lucky or difficult answer cannot jump the course. Progress displays the current ceiling for every skill.

Frequency and difficulty are separate. Every chunk receives a learningLevel, while selected constructions also carry explicit prerequisites. newCards() first chooses chunks that are both inside the vocabulary ceiling and whose prerequisites have graduated from learning. Frequency tier and goal weaving then order that eligible set.

This implements the central rule: the thing being taught should normally be the hardest thing in the sentence.

Sentence difficulty
A tier-1 chunk taught inside a sentence full of other slang is not a tier-1 lesson. The chunk's frequency tier said nothing about the sentence carrying it, so o sea — the very first chunk anyone meets — was introduced with:

"O sea, no es que no quiera ir, es que ando sin lana." — 13 words, three other chunks, and a subjunctive.

Every example sentence is rated A1 / A2 / B1 / B2 on its own. The deterministic rating considers length, other chunks, multi-clause structure, hypotheticals and high-load grammar such as common subjunctive patterns. Sub-phrases of the chunk being taught do not count against it.

The selected sentence is constrained by both chunk maturity and the relevant learner skill:

Chunk maturity	Maximum before learner ceiling
new / learning	A1
interval ≥ 5 days	A1–A2
interval ≥ 21 days	A1–B2
The effective maximum is min(chunk maturity, learner skill ceiling). Mastering o sea therefore cannot expose an A1 learner to a B1 carrier sentence. If nothing fits, Calle takes only the gentlest available example rather than opening the entire set. When several eligible examples exist, selected goals break the tie in favor of useful personal contexts.

Milestones
Progress reads as capabilities, not card counts — "Order without English 7/10" beats "20 mastered". Eight milestones, each a hand-picked bundle of chunks:

🌮 Order without English · 👋 Greet like a local · 😲 React like you mean it · 💬 Stall like a native · 🧠 Hold an opinion · 📖 Tell a story · 🛟 Survive being lost · 🤝 Make plans

A chunk counts toward its milestone once you've either recalled it (scheduler status review or mastered) or said it well (85%+ in Shadow or Quick-fire). A milestone claims you can do something, so speaking it is evidence too — otherwise the practice modes would move nothing.

Pace
New chunks per day is a setting, not a constant. It was five, hardcoded, which put the whole collection sixty-three days out — a strange thing for an app whose first screen promises speed.

Pace	New/day	Reviews	Listening
Steady	5	20	4
Brisk (default)	12	40	8
Intense	20	60	12

Today shows where the chosen pace lands: at Brisk, all 350 in about a month. The projection uses what is left rather than the whole collection, so it shortens as you go.

Practice follows the session
Practice used to draw uniformly from the whole deck, so a chunk met an hour ago was no likelier to come up than one from three weeks back: the session taught and practice ignored it. Every mode now leads with what today put down, then stretches past it.

Mode	Leads with
Quick-fire	today's chunks ~65% of prompts, the rest pulled back from the wider deck
Shadow	today's first, then the rest of the deck
Listen	today's first, within the chunks already in the deck
Build it	only frames you have actually met, today's first
Sentence Lab	patterns matching your goals

The stretch matters as much as the reinforcement — a round that only ever asks for what you just met is a memory test, not recall — which is why none of them draws from today alone. The session summary closes the loop: it names the chunks you just did and offers to drill or build with them rather than dropping you back on the home screen.

Backlog
Reviews compound. At Brisk, day seven has fifty-three cards due against a cap of forty, and nothing used to say so — a silently growing backlog is the week-two quit point. Past what one session holds, Today says how many are waiting and offers a reviews-only catch-up that clears without adding to the pile.

Daily session
One button on Today runs three stages back to back — up to 20 due reviews, then a pace-sized batch of new chunks, then the listening quota — with a progress bar across the whole thing and a summary of what got done. Stages with nothing to do are skipped, and leaving mid-way abandons the session cleanly.

Two speaking scores, kept apart
Shadow and Quick-fire both score speech, but they measure different skills:

Shows you	Measures
Shadow	the Spanish sentence	pronunciation — you can see what to say
Quick-fire	the English only, on a clock	recall and pronunciation
Reading aloud will always beat producing cold, so they keep separate records (calle_scores vs calle_drills) and Progress reports them side by side. Pooling them would let the easier task mask the harder one.

Running it
Just open index.html in any modern browser. Learn, Review, Listen, Conversations and all audio work immediately, with no server and no internet.

For the microphone modes (Shadow, Quick-fire) the page must be served, because browsers refuse the mic to file:// pages no matter what you allow — there's no origin to attach the permission to:

cd <folder with index.html>
python3 -m http.server 8000
# then open http://localhost:8000
This is still fully offline — localhost never touches the internet.

One genuine caveat: Chrome and Edge don't do speech recognition on-device; they stream audio to Google's servers. So the scoring in Shadow and Quick-fire needs a connection even when served locally. Everything else works with the network off. The app detects all of this and says which case you're in — check Settings (⚙).

Installing on a phone
Serve it over HTTPS (GitHub Pages works) and use Add to Home Screen. The web app manifest is generated at runtime with a canvas-drawn icon, so it installs standalone with no extra files.

Architecture
One file, no dependencies, no build:

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
Rendering is deliberately dumb: every view rebuilds its own innerHTML from state, and one delegated listener on document routes every data-* action. No framework, no virtual DOM, no reconciliation to reason about.

Stored state
All under the calle_ prefix in localStorage:

Key	Holds
calle_srs	per-chunk scheduling state
calle_streak	streak count, last day, per-day activity counts
calle_scores	best Shadow score per chunk (reading aloud)
calle_drills	best Quick-fire score per chunk (cold recall)
calle_ears	listening speed level per chunk
calle_dialogDone	best % per dialogue
calle_skipped	chunks you passed on in Learn, so they sink in the queue
calle_unlocked	milestones already celebrated, so it never fires twice
calle_seenIntro	whether the first-run intro has been shown
calle_totals	lifetime reviews, shadow reps, attempts, drills, best combo
calle_settings	chosen voice, speech rate, sound on/off
Backup and restore
Settings → Backup exports every key above as one dated JSON file (calle-progress-2026-09-19.json), and Import restores it — on the same device or a new one.

Import only writes keys it recognises, so a file from elsewhere can't inject anything, and it rejects malformed JSON or a backup from another app without touching what's already there. It replaces rather than merges, so it asks first.

Day keys are built from local date parts, not toISOString() — UTC would break the streak for anyone behind it (an evening session in Mexico would count as tomorrow).

Day keys use local date parts rather than toISOString() for the same reason. Export regularly if the progress matters to you — it's still one browser's storage underneath.

Typography
Two loaded faces, so the app looks the same on every device rather than inheriting whatever each OS supplies:

Face	Used for
UI	Plus Jakarta Sans	everything the app says
Spanish	Fraunces	every chunk, sentence and dialogue line
The split is the point: a serif sentence is the language you're learning, sans is the app talking. Fraunces also sets tighter than a system bold, so Spanish sentences wrap less.

~92KB for both Latin subsets, cached after first load, requested in a single stylesheet with preconnect and font-display: swap so nothing blocks rendering. System stacks remain the fallback (--ui and --es custom properties), and they keep the same sans/serif distinction if the fonts never arrive.

Browser support
Playback	Mic scoring
Chrome / Edge	✅	✅ (served + online)
Safari	✅	✅ (served)
Firefox	✅	❌ (no SpeechRecognition)
Playback uses whatever Spanish voices your OS has installed. If there are none the app says so and points at the right system settings — it never fails silently. Where scoring isn't available the mic UI hides itself and the manual rep counter takes over.

Known gaps
No service worker. A single file can't register one (blob URLs are rejected as SW scripts), so offline relies on the HTTP cache rather than a guaranteed shell.
Tier imbalance — 167 Tier 1 against 4 Tier 3, so the frequency curve flattens near the end.