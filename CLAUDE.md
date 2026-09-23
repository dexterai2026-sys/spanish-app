# Working rules for this repo

## Update README.md with every push

The README is the spec, not a courtesy. Any push that changes behaviour,
content counts, modes, ordering or settings updates it in the same commit.

That means, concretely:

- **Counts.** Chunk, sentence and dialogue totals, the category table and the
  per-goal figures. Read them out of the running app rather than adding up by
  hand — they have been wrong by more than half a category before.
- **Modes.** A new study mode goes in the modes table and gets a section.
- **Anything a learner would notice.** Ordering rules, a new setting, a
  changed default.

The failure this prevents is real and has happened twice: the README
described a pronunciation feature and an adaptive curriculum that were not in
the file, and category counts sat a release behind. Documentation that
overstates the app is worse than none, because the next person trusts it.

If a change genuinely needs no README edit, that is fine — but decide it,
don't default to it.

## Things that will bite you

**Chunk ids are positional.** `C()` assigns `"c" + index`, so inserting a
chunk mid-array renumbers every id after it and silently detaches saved
progress from the chunk it belonged to. **Always append.** This already caused
a crash: saved ids stopped resolving and four practice modes dereferenced the
`undefined` from `byId()`.

**Appending has an ordering cost.** New chunks land at the back of their own
category, and `spreadByCategory` preserves array order within a category — so
essential material appended late arrives weeks in. That is what the `core`
flag is for: flag it and it gets woven to the front. Check where something
actually lands before assuming frequency order will do the right thing.

**The whole UI is built by script into an empty `<main>`.** Anything thrown
before the first paint leaves a blank page, which is why `fatal()` is
registered at the top of the script and `render()` is wrapped. Don't remove
that safety net, and don't let a change depend on helpers defined below it.

**New chunks need the layers, not just examples.** A card is chunk, meaning,
register, `SOUNDS`, `NOTES` where the meaning does not survive translation, a
literal gloss where it helps, and sentences. Content added in bulk tends to
arrive with examples only, which a learner notices as the cards getting
thinner partway through — it happened once already, to all 52 chunks added
after the original 316. When adding chunks, add their `SOUNDS` and `NOTES`
entries in the same commit.

**The Sentence Lab generates Spanish.** That means it can generate wrong
Spanish. New blocks carry their constraints — nouns list the engines they
combine with, person-marked verbs pick a side, motion verbs refuse place
tails. Adding a block without its constraints ships an error to a learner.

## Checking work

There is no test suite. Before pushing, load the app in a browser and drive
the change — fresh state and returning state, and every view. The saved-state
scenarios worth re-running are: empty, a deck of 120, ids that no longer
resolve, and a legacy `learner` shape.
