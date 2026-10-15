# CLAUDE.md — Arabic Ladder

Guidance for Claude Code in this repository. Read `PRD.md` for what to build and `DESIGN.md` for how it must look. This file covers how to build it.

---

## 1. What this is

A static, levelled Arabic course for Indonesian speakers, from zero script to B2+. Eleven rungs: Huruf 1–2 (script), Easy 1–3, Medium 1–3, Hard 1–3. It teaches Fusha as the backbone, with Egyptian as the spoken strand.

v1 ships the full app shell, the placement check, and **Huruf 1, Huruf 2 and Easy 1** complete with recorded audio and seven visuals. It deploys to GitHub Pages, and progress lives only in the browser.

It is a **sibling of English Ladder** and starts from its code (`andifathulms/english-ladder` at commit `58eab3c`). Everything English Ladder does that isn't English-specific is kept: the screens, tokens, motion, sound, progress store, check engine, test draw, Leitner review and service worker. If something here is unclear, do what English Ladder does.

---

## 2. Starting point

Arabic Ladder is a **copy of English Ladder, then adapted**. It is not a monorepo and not a shared package yet. The owner changes English Ladder often, and a shared package would slow both apps down while they are moving. Extraction into `ladder-core` is planned once both apps settle (§12).

Setup (M0):
1. Clone English Ladder at `58eab3c` into a fresh repo `arabic-ladder` (new git history, keeping a note of the source commit in `README.md`).
2. Delete `content/**` except the directory layout, the English visuals (`NounBuilder`, `NearFar`), and English-only lint rules.
3. Rename everything branded: `english-ladder` storage key, SW cache prefix, manifest, metadata, `Wordmark`, `AppNav` aria-label, export filename, About copy, repo URL.
4. Keep `PlaceScene` (its drawing is reused in Easy 1) and every generic module listed in the English Ladder recon §11.
5. Add `UPSTREAM.md`: a table of files kept verbatim from English Ladder, so later fixes there can be copied across file by file.

---

## 3. Stack

Same as English Ladder:

| Concern | Choice |
|---|---|
| Framework | Next.js 14.2 App Router, `output: 'export'`, `trailingSlash: true`, TypeScript strict |
| UI | React 18.3 |
| Styling | Tailwind 3.4 with the default palette replaced by tokens (`tailwind.config.ts` copied, then extended) |
| Content | gray-matter + js-yaml (`JSON_SCHEMA`) + zod, at build time only |
| Tests | Vitest + Testing Library + jsdom; Playwright + axe |
| Lint | ESLint (next core-web-vitals) + Prettier |
| Fonts | `next/font`: Newsreader, Atkinson Hyperlegible Next (local files, as English Ladder), IBM Plex Mono, **Noto Naskh Arabic, Amiri, IBM Plex Sans Arabic** (Arabic subsets) |
| Audio | Recorded files in `public/audio/` + Web Speech fallback; Web Audio for effects |

Runtime dependencies stay `next`, `react` and `react-dom`. No Arabic NLP library: the text utilities in §7.1 are small and hand-written, and tested.

---

## 4. Commands

```bash
npm run dev             # dev server; shows drafts
npm run build           # content:check, then static export to ./out
npm run preview         # serve ./out
npm run content:check   # schema + Arabic lint + audio manifest check
npm run audio:list      # list Arabic strings without a recording (CSV for the voice actor)
npm run audio:ingest    # import recorded files from ./recordings, normalise, hash-name, update manifest
npm run translit:check  # compare authored tr fields with the generated transliteration
npm run test            # vitest
npm run test:e2e        # playwright
npm run lint
```

`NEXT_PUBLIC_BASE_PATH` and `NEXT_PUBLIC_SHOW_DRAFTS` behave as in English Ladder. Ship with drafts hidden once Huruf 1 is reviewed.

---

## 5. Content model

### 5.1 `content/curriculum.yaml`

```yaml
rungs:
  - id: huruf-1
    name: Huruf 1
    name_ar: "الحُرُوف"
    tier: huruf                  # huruf | easy | medium | hard
    cefr: Pre-A1
    status: live                 # live | soon
    optional: true
    lessons: 12                  # notch count; must equal the number of lesson files once live (checked)
    harakat: full                # full | partial | none
    translit: always             # always | on-request | off
    words_target: 40             # new glossary words for the rung; content:check warns outside ±20%
    description: { id: "...", en: "..." }
    topics: [...]
    threads: [script, sounds]
    inventory: [letters-ba-family, ...]
  # … all eleven rungs, later ones status: soon
```

`explain_lang` is gone: explanations are always Indonesian, with English as a UI-language option. `lessons` must equal the lesson file count for live rungs (a check, so the English Ladder `/8` hack can't come back).

### 5.2 Lesson file `content/<rung>/<nn>-<slug>.md`

```yaml
id: easy1-12-prepositions
rung: easy-1
order: 12
status: draft                    # draft | reviewed
review: { by: "Ust. …", date: 2026-11-02, eg_by: "…" }   # required when reviewed
minutes: 8
title: { id: "Di mana bendanya?", en: "Where things are", ar: "أَيْنَ؟" }
summary: { id: "...", en: "..." }
introduces: [prep-place]
spiral: prepositions
visual: { id: place-scene-ar, props: { initial: tahta } }   # or worked: [...]
examples:
  - ar: "الكِتَابُ [[عَلَى]] الطَّاوِلَةِ."
    tr: "al-kitābu [[ʿalā]] ṭ-ṭāwilati."
    id: "Bukunya di atas meja."
    en: "The book is on the table."          # optional
    eg: "الكِتَاب [[عَلَى]] الطَّرَابِيزَة."
    eg_tr: "il-kitāb [[ʿala]] ṭ-ṭarabēza."
    note: { id: "...", en: "..." }            # optional
pair:
  off: { ar: "...", tr: "..." }
  natural: { ar: "...", tr: "..." }
sound:      { focus: "ع", compare: "ء", words: [{ ar, tr }], tip: { id, en } }   # Bunyi
eg_note:    { id: "...", en: "..." }        # Mesir card note; the card is built from examples that have eg
words:      { id: "...", en: "..." }        # Kata card (loanword shifts)
talk:       { variety: fusha | eg, lines: [{ who, ar, tr, id, en? }] }
tirukan:    { ar: "...", tr: "...", id: "..." }   # repeat-after sentence closing the Examples step; must have a recording
check: [ ...items, 4–6 ]
glossary:
  - { ar: "طَاوِلَة", tr: "ṭāwila", id: "meja", gender: f, eg: "طَرَابِيزَة", eg_tr: "ṭarabēza", root: "ط-و-ل" }
next: easy1-…
```

Body sections: `## concept.id`, `## concept.en`, `## contrast.id`, `## contrast.en`, parsed exactly as in English Ladder.

Markup inside prose: `**…**` is a target-language (Arabic or transliterated) term; `*…*` is Indonesian. A bare Arabic run inside prose is detected automatically and wrapped in an island (§7.4).

### 5.3 Check items

Shared fields: `id`, `cue?`, `why: { id, en }`, `from?`, `match?: exact | loose` (default `loose`).

| type | fields |
|---|---|
| `choice`, `gap`, `fix` | as English Ladder; strings may be Arabic |
| `order` | `tiles`, `answer`, `accept?`; `dir: rtl` is inferred when tiles are Arabic |
| `scene` | `visual { id, props }`, `options`, `answer` |
| `listen` | `audio` (Arabic text, resolved to a recording), `variety: fusha | eg`, `options`, `answer` |
| `read` | `ar` (shown), `options` (transliterations or Indonesian meanings), `answer` |
| `spell` | `letters` (isolated letters as tiles, may include distractors), `answer` (the joined word), `audio?` + `dictation?: true` (play the word, hide the written prompt: imla') |
| `mark` | `ar` (fully vowelled word), `target` (index of the base letter), `options` (mark names: `fatha`, `kasra`, `damma`, `sukun`, `shadda`, `tanwin-fath`, `tanwin-kasr`, `tanwin-damm`), `answer` |

Rules:
- Every Huruf 1–2 item and every `mark` item is `match: exact` (checked).
- Items that test reading (`read`, `spell`, `mark`, and `choice`/`gap` with Arabic options in Huruf rungs) never show transliteration, whatever the rung's `translit` (enforced in `CheckItemView`).
- A `spell` answer must be exactly the joined `letters` minus distractors, in order (checked).

### 5.4 Other content files
- `content/<rung>/test.yaml`: `{ rung, draw, pass, items }`, as English Ladder.
- `content/placement.yaml`: `{ items (20, tagged by section: forms | reading | harakat | sounds), thresholds: { easy1: 18, huruf2: 14 } }`.
- `content/<rung>/reading.yaml`: a Fusha text as English Ladder, with `ar`, `tr`, `id`, glossary and items.
- `content/<rung>/dialogue.yaml`: `{ rung, title, lines: [{ who, ar, tr, id }], items }`, Egyptian.
- `content/data/letters.yaml`: all 28 letters plus hamza forms, ة and ى: `{ letter, name_id, name_ar, tr, joins_left: bool, family, forms: { isolated, initial, medial, final }, example_words: { initial, medial, final }, makhraj: id, sun: bool }`.
- `content/data/makhraj.yaml`: articulation points with SVG coordinates and Indonesian labels.
- `content/lexicon/core.yaml`: entries `{ ar (vowelled), pos: noun|adj|verb|particle|pron|chunk|num, gender?, rung, root? }`.
- `public/audio/manifest.json`: `{ [key]: { file, dur, words?: [startMs…] } }`, written by `audio:ingest`.

---

## 6. Bidirectional rules (read before touching any component)

1. **The page is LTR.** `<html lang="id" dir="ltr">`. Don't mirror the shell, the arrows, the step transitions or the tab bar.
2. **All Arabic goes through `ArIsland`** (`components/ar/ArIsland.tsx`), which sets `lang`, `dir="rtl"`, the font family and the size token. A `<bdi>` is used inline and a `<div>` for blocks. Never render Arabic in a bare element.
3. **Logical properties only** in any component that can contain Arabic: `ps/pe/ms/me/start/end`, `text-start/end`, `border-s/e`. A lint rule (`scripts/lint-physical.ts`, run in `content:check`) fails the build on `pl-`, `pr-`, `ml-`, `mr-`, `left-`, `right-`, `text-left`, `text-right`, `border-l`, `border-r` in `components/ar/**`, `components/check/**` and `components/lesson/**`. The fixes from English Ladder recon §10 are applied to the copied components in M1.
4. **Keyboard:** Arrow keys inside an RTL radiogroup or tile tray follow visual direction (Left = next item in RTL order). `useRoving` takes a `dir` argument. Lesson step navigation keeps LTR arrows (the shell is LTR).
5. **Joining safety:**
   - Never split an Arabic word into multiple elements unless every split point is wrapped with U+200D on both sides (`joinSafeSplit()` in §7.1).
   - Never change `font-weight`, `font-family`, `font-size` or `letter-spacing` inside a word. Colour and `text-decoration` only.
6. **Typography guards:** `.label`, `.eyebrow`, `uppercase`, `tracking-*` and `italic` must not reach Arabic. `ArIsland` resets `letter-spacing: normal; text-transform: none; font-style: normal`.

---

## 7. Architecture

### 7.1 `lib/arabic/` (new, pure, fully unit-tested)

| Function | Purpose |
|---|---|
| `normalise(s)` | NFC; strip tatweel (U+0640); convert Arabic punctuation ، ؛ ؟ to a canonical set; collapse whitespace |
| `stripHarakat(s, keep?)` | Remove U+064B–U+0652, U+0670, U+06E1 etc.; `keep` can preserve shaddah, tanwin or marks inside given ranges (used for `partial`) |
| `looseKey(s)` | `normalise` + `stripHarakat` + unify أ إ آ ٱ → ا, ى → ي (word-final), ة → ه (word-final). Used by `loose` grading and search only |
| `tokenise(s)` | Split into words on whitespace and punctuation, keeping offsets into the original string |
| `joinSafeSplit(word, ranges)` | Split a word into styled segments, inserting U+200D at each internal boundary on both sides |
| `isArabic(ch)` / `findArabicRuns(text)` | Detect runs in mixed prose so `Prose` can wrap them in islands |
| `transliterate(vowelled)` | Generate a transliteration (SKB-style) from fully vowelled Fusha: sun-letter assimilation, hamzat wasl, ta marbuta pausal vs construct, long vowels, shaddah doubling. Used by `translit:check` and to draft content. Authored `tr` stays the truth |
| `partialHarakat(s, focusRanges)` | Keep shaddah, tanwin and marks inside focus ranges; strip the rest |
| `letterForm(letter, position)` | Map to presentation forms only for display in LetterForms labels. Real text always uses base letters and lets the font shape |

### 7.2 Rendering harakat and transliteration
- The `LessonContext` provides `{ harakat: 'full' | 'partial' | 'none', showTranslit: boolean, revealHeld: boolean }`, built from the rung, the lesson-scoped toggles and HoldReveal.
- `ArSentence` computes the displayed string: full → as authored; partial → `partialHarakat`; none → `stripHarakat`; when `revealHeld` is true or the Harakat toggle is on → as authored.
- Toggles are **lesson-scoped** state in `LessonPlayer`, not settings. They reset when the lesson closes.

### 7.3 Grading (`lib/check/grade.ts`, adapted)
- Pass in a `compare(a, b, match)` function: `exact` → `normalise(a) === normalise(b)`; `loose` → `looseKey(a) === looseKey(b)`.
- `sameOrder`: compare token arrays with `compare`. Drop English Ladder's first-word case rule. Strip trailing punctuation in both scripts.
- `spell`: compare `normalise(joined)` with `normalise(answer)`.
- `mark`: compare the mark name.
- Transliteration options (in `read` items) compare with Latin rules: case-insensitive, and ʿ/ʾ/' treated as equal.

### 7.4 Components (new or changed)
- `components/ar/ArIsland.tsx`, `ArSentence.tsx`, `Translit.tsx`, `HoldReveal.tsx`, `EgChip.tsx`
- `components/lesson/Sentence.tsx` → used only for Latin; target sentences use `ArSentence`
- `components/lesson/Prose.tsx` → wraps detected Arabic runs in `ArIsland` (inline); `**term**` renders accent bold for Latin terms, and accent colour only (no bold) for Arabic
- `components/lesson/LessonTopToggles.tsx` → replaces `ExplainToggle`
- `components/lesson/StrandCards.tsx` → Bunyi, Mesir, Kata, Ngobrol
- `components/check/ArTileTray.tsx` → spell mode renders the answer as one `ArIsland` string; order mode flows RTL
- `components/check/MarkOption.tsx`
- `components/check/PlacementRunner.tsx` → built on `TestRunner`, with section scoring and placement result
- `components/ladder/TwoDoorWelcome.tsx`, `CapstoneCard.tsx`
- `components/ui/Lattice.tsx` → replaces `Contours` (deterministic generator, no hand-written paths)
- `components/visuals/`: `LetterForms`, `WordJoiner`, `HarakatBuilder`, `Makhraj`, `SunMoon`, `PlaceSceneAr` (wraps the copied `PlaceScene` drawing with Arabic labels and sentence), `Agreement`. Register them in `registry.ts` and `lib/visualIds.ts`.

### 7.5 Progress
- Copy `lib/progress/*`. Key `arabic-ladder:v1`, `SCHEMA_VERSION = 1` (fresh app).
- Add `capstones` and `placement` to the state and `normalize()`.
- Settings: `uiLang`, `voice`, `rate`, `sfx`, `textSize`, `arabicSize: 100|120|140`, `theme`, `motion`. Remove `explain` and `accent`.
- Placement: `applyPlacement(result)` marks rungs climbed with `via: 'placement'` and never un-climbs. `RungProgress` gets `via?: 'test' | 'placement'`.
- Capstones: `completeCapstone(rungId, kind)`; capstone answers call `recordAnswer` like lesson items.

### 7.6 Theme and fonts
- Copy `styles/tokens.css`, `styles/globals.css`, `tailwind.config.ts`, `app/themeScript.ts`, then replace the colour values with DESIGN §3.1 (green palette). Token names stay the same, so no component changes. Add a unit test that checks the DESIGN §3.3 contrast targets over the token file.
- Regenerate the icons with `scripts/make-icons.mjs` on `#0F3B2E`; set manifest `theme_color` to `#0F3B2E`.
- Add DESIGN §3.2 tokens and §4.2 Arabic type tokens; add `data-ar-size` handling to the theme script and `applySettings`.
- `theme-color` meta is set at runtime from the active theme.
- `app/fonts.ts`: add the three Arabic faces with `subsets: ['arabic']`, and `latin-ext` to Atkinson and Newsreader for transliteration.
- Tailwind: add `font-ar`, `font-ar-display`, `font-ar-ui` and the `text-ar-*` sizes.

### 7.7 Speech and audio (`lib/speech/`)
- `audioFor(text, variety)` → key = `sha1(normalise(text) + '|' + variety).slice(0, 12)` → manifest lookup.
- `play(text, { variety, rate, onWord })`: if a recording exists, play it through one shared `HTMLAudioElement` with `preservesPitch = true` and `playbackRate = rate`, calling `onWord` from manifest word timings when present. Otherwise use Web Speech with a voice scorer: `variety: eg` prefers `ar-EG`; Fusha prefers `ar-SA`, then any `ar-*`. Prefer neural/natural/online voices, penalise novelty voices, and keep the gender setting (as English Ladder).
- `canPlay(text, variety)` is true if a recording exists or an Arabic voice exists. The PlayButton hides otherwise.
- `chunks()` splits on `. ! ? ؟ ۔` as well as Latin punctuation.
- The service worker caches `/audio/*` cache-first after the first play. It never precaches all audio.

### 7.8 i18n
- Copy the `id`/`en` tables and replace English-specific strings (recon §11). The climb title is translated in both tables.
- Add keys for: two doors, placement, toggles, hold hint, strand card labels, capstones, Arabic size, letter names (via `letters.yaml`, not i18n).

### 7.9 Service worker
Copy `public/sw.js`. Cache prefix `arabic-ladder-`, version `v0.1.0`. Precache the shell routes plus `rung/huruf-1/`, `rung/huruf-2/`, `rung/easy-1/`, `placement/`. Audio is cache-first on demand.

---

## 8. Content and accuracy rules (most important section)

1. **Always author fully vowelled Fusha.** Every `ar` string carries complete harakat, including case endings where grammatically required (in pausal form at sentence end only when that is what's taught). The app removes marks at render time; content never omits them.
2. **Grammar inventory.** Same rule as English Ladder, enforced by lint (sequence follows PRD §4.1–§4.3; don't reorder topics without the owner):
   - No verbs before Easy 2 (any lexicon entry with `pos: verb` in Huruf 1–2 or Easy 1 fails, except `chunk` entries such as greetings).
   - Past tense is taught before present (Easy 2). No dual before Medium 1, no broken plurals taught before Easy 3 (glossary may list a plural as a word, marked `pl`).
   - Case-ending **terms** (marfu', manshub, majrur, i'rab) may not appear in explanations before Medium 3. Endings may be pointed out as patterns earlier.
   - Huruf 1: each letter is introduced together with fathah, kasrah and dhammah; examples use only letters and marks taught so far.
3. **Script inventory in Huruf 1.** Example words in a Huruf 1 lesson use only letters taught so far, with short vowels only (no mad, sukun or syaddah until Huruf 2). Lint checks against `letters.yaml` order. Known-loanword "picture words" are allowed in lesson 1 only, marked `display_only: true`.
4. **Lexicon.** Every Arabic word (after clitic stripping: و ف ب ل ك ال, and the possessive suffixes ي ك ه ها نا كم هم) must be in `core.yaml` for this rung or earlier, or in a glossary so far. Unknown words are errors in reviewed lessons and warnings in drafts. Lint compares with `looseKey`.
5. **Harakat completeness.** In every `ar` string, each consonant must carry a vowel, sukun or shaddah+vowel, except long-vowel letters, the lam of sun letters, hamzat wasl and the final letter in pausal position. Lint warns, and errors for reviewed lessons.
6. **Transliteration.** Every `ar` needs a `tr`. `translit:check` warns when `tr` differs from `transliterate(ar)` beyond allowed variants (pausal endings, wasl). Use the scheme in §10.
7. **Egyptian.** Write Egyptian in Arabic script as Egyptians write it (e.g. إزَّيَّك، عَايِز، مِش), vowelled only where it helps reading. `eg_tr` uses the same scheme with Egyptian sounds: ج → g, ق → ʾ where Cairene uses a glottal stop, ث → t/s, ذ → d/z. Never invent Egyptian: if unsure, leave `eg` out and add a `TODO(eg)` note in the frontmatter comment for the reviewer.
8. **Indonesian.** Natural informal-standard Indonesian (*kamu*); meaning, not word-for-word.
9. **Everyday content.** Family, work, market, school, travel, food, weather, phones; Egyptian scenes from daily Cairo life (taxi, koshary, the metro). Names: Indonesian (Rina, Budi, Andi, Siti, Dewi) and Arab (Ahmad, Fatimah, Omar, Mona, Karim, Huda). No politics. Religious vocabulary only as everyday language.
10. **Reviews.**
    - Claude drafts with `status: draft` and never sets `reviewed`.
    - Reviewed lessons need `review.by` and `review.date`; lessons with any `eg` field need `review.eg_by` too. `content:check` enforces both.
11. **One idea per lesson, 4–6 examples, 4–6 checks, 6–12 glossary entries**, as English Ladder.
12. **Ids are permanent.** Don't rename check item ids or lesson ids after they ship; reorder with `order` only (English Ladder recon issue 2).

---

## 9. Testing

Everything English Ladder tests, plus:
- **Unit (`lib/arabic`):** normalise, stripHarakat (with keep ranges), looseKey, tokenise offsets, joinSafeSplit (ZWJ placement), transliterate against a table of 150 known pairs (sun letters, wasl, ta marbuta, shaddah, tanwin, long vowels), partialHarakat.
- **Grading:** exact vs loose, Arabic punctuation, `spell`, `mark`, transliteration option equivalence.
- **Component:**
  - `ArSentence` sets `lang`/`dir`, shows the right harakat level, HoldReveal works by pointer and the H key
  - focus mid-word renders with ZWJ
  - `ArTileTray` spell mode renders a single joined island
  - `LessonTopToggles` reset on unmount
  - `useRoving` with `dir="rtl"`
- **Visual:** a Playwright test renders a "joining sheet" page (every letter in four forms, focus mid-word cases, spell answer lines) and compares screenshots against reviewed baselines. This is the one place pixel snapshots are used, because joining bugs are invisible to DOM tests.
- **Fonts:** a Playwright test checks `document.fonts` for the Arabic faces and renders the transliteration glyph set, failing on fallback.
- **E2E:**
  - door 1 → Huruf 1 lesson 1 → done
  - door 2 → placement with seeded answers → lands on Easy 1, Huruf rungs marked "lewat cek", no climb moment
  - an Easy 1 lesson with the Harakat toggle
  - capstone done flag persists
- **Accessibility:** axe on every route in both themes, plus Arabic size 140%.

---

## 10. Transliteration scheme

| Arabic | tr | Arabic | tr | Arabic | tr |
|---|---|---|---|---|---|
| ا (long) | ā | ز | z | ق | q |
| ب | b | س | s | ك | k |
| ت | t | ش | sy | ل | l |
| ث | ts | ص | ṣ | م | m |
| ج | j (EG: g) | ض | ḍ | ن | n |
| ح | ḥ | ط | ṭ | ه | h |
| خ | kh | ظ | ẓ | و | w / ū |
| د | d | ع | ʿ | ي | y / ī |
| ذ | dz | غ | gh | ء | ʾ |
| ر | r | ف | f | ة | a / at (construct) |

Short vowels: a, i, u. Shaddah doubles the consonant (*kattaba*); a doubled digraph is written in full twice (*asy-syamsu*, not *assyamsu*). Sun letters assimilate: *asy-syamsu*. Hamzat wasl after a vowel drops the a: *fī l-bayti*. Initial hamza isn't written: *ana*, not *ʾana*.

---

## 11. Build order

Finish each milestone with tests passing before starting the next.

1. **M0 Fork:** §2 steps; app builds empty; storage, SW, metadata and brand renamed; `UPSTREAM.md`.
2. **M1 Bidi foundation:**
   - `ArIsland`, logical-property pass over copied components (recon §10 list), `useRoving` with `dir`, physical-CSS lint
   - Arabic fonts and tokens; `data-ar-size`; `theme-color` fix
3. **M2 Arabic text core:** `lib/arabic/*` with unit tests; grading adapted; `ArSentence`, `Translit`, `HoldReveal`, `Prose` island wrapping; the joining-sheet screenshot test.
4. **M3 Content pipeline:**
   - new schema (§5) with `ar/tr/id/en/eg` fields, new item types, `letters.yaml`, lexicon
   - Arabic lint (§8 rules 2–6, 10), `translit:check`, `lessons` count check
   - curriculum with all eleven rungs
5. **M4 Shell changes:**
   - Lattice; two-door welcome; Huruf tier on the ladder; Arabic subtitles
   - capstone cards; lesson-scoped toggles; strand cards; English Ladder fixes from PRD §5.9
6. **M5 Check engine:** `read`, `spell` (ArTileTray), `mark` (MarkOption); placement runner and `applyPlacement`.
7. **M6 Audio pipeline:** manifest, `audio:list`, `audio:ingest` (ffmpeg loudness normalise to −16 LUFS, trim, mono 48 kbps mp3), playback with rate and word timings, Web Speech fallback, SW caching.
8. **M7 Huruf visuals:** LetterForms, WordJoiner, HarakatBuilder, Makhraj, SunMoon.
9. **M8 Huruf content:**
   - draft all 22 lessons, the two test pools, the placement pool and the Huruf 2 reading
   - letter and syllable recording list exported for the voice actor
   - **Release v1.0-huruf** once reviewed and recorded
10. **M9 Easy 1:** Agreement and PlaceSceneAr; 12 lessons, test pool, reading and Egyptian dialogue; recording list.
11. **M10 Polish:** delight list from English Ladder DESIGN §8, reduced-motion pass, axe, Lighthouse ≥ 95 mobile, DESIGN §14 quality checklist. **Release v1.0.**

---

## 12. Keeping the two apps in step

- `UPSTREAM.md` lists every file copied from English Ladder and whether it is **verbatim**, **adapted** or **replaced**.
- When English Ladder changes a verbatim file, copy it across and run the tests. When it changes an adapted file, port the change by hand and note it in `UPSTREAM.md`.
- Once both apps have been stable for a month, extract the verbatim set into a `ladder-core` package (English Ladder recon §11 has the proposed split). Don't start that before v1.0.

---

## 13. Definition of done

As English Ladder (both themes, 360px, 130% text, keyboard, screen reader, storage blocked, base path, no literal colours), plus:
- Arabic joins correctly and harakat clear the lines above and below at 140% Arabic size.
- Every Arabic element has `lang` and `dir`; no physical CSS in Arabic-bearing components.
- `content:check` is clean, including the Arabic lint and the reviewer fields for reviewed lessons.
- Every Arabic string in a live rung has a recording, or is listed by `audio:list` and marked as accepted with fallback.

---

## 14. Don't

Everything in English Ladder's list, plus:
- Don't mirror the app shell or set `dir="rtl"` on `<html>`.
- Don't render Arabic outside `ArIsland`.
- Don't bold, italicise, uppercase or letter-space Arabic; don't change weight inside a word.
- Don't split Arabic words into elements without `joinSafeSplit`.
- Don't use presentation-form code points (U+FB50–U+FEFF) in content; store base letters and let the font shape them.
- Don't author Arabic without full harakat.
- Don't write Egyptian you aren't sure of; leave it for the reviewer.
- Don't set `status: reviewed` or fill `review` fields.
- Don't precache all audio in the service worker.
- Don't start the `ladder-core` extraction before v1.0.
