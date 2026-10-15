# Arabic Ladder — Design

**Read with:** `PRD.md` (what), `CLAUDE.md` (how to build).
**Baseline:** English Ladder **as built** at commit `58eab3c`, described in that repo's `RECON.md` §6–§7. Arabic Ladder looks and feels the same: the same cream catalogue, screens, components, motion and sound. The one deliberate difference is colour: deep Islamic green where English Ladder has navy (§3). This file repeats the values that must stay identical, so it can be used on its own, and then specifies everything Arabic adds.

**Precedence:** owner's words → this file → English Ladder as built → the portfolio house layer.

---

## 1. The feeling

The same quiet study desk as English Ladder, with one change of light: **a desk where someone keeps a Mushaf and a notebook side by side.** The green board is the cover of a Mushaf with gold tooling; the cream is its paper. Arabic is the most beautiful thing on every screen, set large, with room to breathe, and nothing crowds it.

The three promises carry over unchanged:
1. **Kind.** No lives, timers, streaks, red failure screens or mascots.
2. **Visible progress.** Notches fill; gold means earned; the climb is the one big moment.
3. **Handmade.** Visuals are crafted objects with weight. Letters join in front of you.

One promise is added:

4. **The script is respected.** Arabic is never squeezed, never letter-spaced, never slanted, never set in a face that wasn't designed for it, and never cut off mid-word by styling.

---

## 2. Brand

- **Name:** Arabic Ladder. The Arabic word **سُلَّم** (*sullam*, ladder) appears beside the wordmark as the app's first lesson.
- **Mark:** identical to English Ladder: two rails, three rungs, the top rung in `--rung`. The app icon is the same square with cream rails and a brass top rung, on `#0F3B2E` green instead of navy, so the two apps sit together on a home screen as a pair you can tell apart.
- **Wordmark:** the mark in a 40 px `--board-ink` disc with `--e-1`; "Arabic Ladder" in the Latin display face at `--t-wordmark` 600; underneath, the mono label line "HURUF → B2+" followed by سُلَّم in the Arabic text face at 1rem, `--muted` (`--board-muted` on the sidebar).
- **Board pattern:** English Ladder draws topographic **Contours** on every `.board`. Arabic Ladder draws **Lattice**: a deterministic eight-point star (*khatam*) lattice, in the same strokes and opacities (§9). Together with the green, it identifies the app at a glance.
- **Voice:** a patient older sibling who studied in Cairo. Warm, plain, a little playful, never preachy. The app teaches a language, not religion. It respects that many learners come through the Qur'an and never assumes they do.

---

## 3. Colour

### 3.1 Palette: Mushaf green and cream

English Ladder is navy and cream. Arabic Ladder keeps the cream paper, the brass, the gold and every structural token, and swaps the navy for **deep Islamic green**: the green of a Mushaf cover with gold tooling. The two apps read as a pair (same shapes, paper and gold) that you can tell apart at a glance.

Only the values change. Every token name, every role, and the dark-mode mechanism stay exactly as in English Ladder's `styles/tokens.css`. Copy that file and replace the values below. Rows marked **same** keep English Ladder's value.

| Token | Light | Dark | |
|---|---|---|---|
| `--paper` | `#F6F2E9` | `#0B1914` | light same |
| `--paper-2` | `#EDE6D6` | `#10221B` | light same |
| `--surface` | `#FFFDF8` | `#142A21` | light same |
| `--ink` | `#14241E` | `#ECE9DE` | green-black instead of navy-black |
| `--muted` | `#56655E` | `#A2B4AB` | |
| `--rule` | `#E2D9C6` | `#22382E` | light same |
| `--accent` | `#1E6B4F` | `#7FCBA8` | emerald: buttons, links, focus words |
| `--accent-ink` | `#FFFFFF` | `#0B1914` | |
| `--accent-soft` | `#E0EEE6` | `#173427` | |
| `--board` / `--board-2` | `#0F3B2E` / `#17503F` | `#123A2D` / `#1B4C3B` | the Mushaf-cover green |
| `--board-ink` / `--board-muted` | `#F6F2E9` / `#B5CBBF` | `#F2ECDF` / `#A8C1B5` | |
| `--brass` | `#D2AE72` | `#DDBA7E` | same: gold tooling on green |
| `--rung` / `--rung-soft` | `#B8862E` / `#F7EBCF` | `#E2B45A` / `#2C2516` | same |
| `--good` / `--good-bg` | `#356F25` / `#E7F0DA` | `#A6D68F` / `#1B2A17` | **leaf green**, yellower than the emerald accent (see 3.3) |
| `--off` / `--off-bg` | `#A84432` / `#F8E4DD` | `#EE9A84` / `#331F1B` | same |
| `--easy` / `--easy-soft` | `#2D7480` / `#E1EEF0` | `#7CC4CF` / `#13282B` | teal (was green, which now belongs to the brand) |
| `--medium` / `--medium-soft` | `#2A4A7F` / `#E4E9F2` | `#9DB8E6` / `#1E2C4B` | same navy: a nod to English Ladder |
| `--hard` / `--hard-soft` | `#6A4E8F` / `#EDE7F3` | `#C1A8E6` / `#251E37` | same |
| `--wood` / `--wood-dark` | `#B98A5A` / `#8C6440` | `#9C7550` / `#6E5236` | same |
| `--card` / `--card-top` / `--card-side` | `#D9C3A0` / `#E8D7BA` / `#B79E77` | `#B39C78` / `#C3AE8C` / `#8E7956` | same |
| `--subject` | `#C2533A` | `#E06A4F` | same: the terracotta ball reads well on green |
| `--shadow-rgb` | `15 45 35` | `0 0 0` | green-tinted shadows in light mode |

Dark mode switching, the theme script, and the default light theme are as in English Ladder. Dark mode is a **night study in green**: surfaces go deep green-black rather than navy, and the brass and gold stay warm.

Manifest `theme_color` and the icon background are `#0F3B2E`.

### 3.2 New tokens

| Token | Light | Dark | Role |
|---|---|---|---|
| `--huruf` / `--huruf-soft` | `#865A22` / `#F3E8D6` | `#D9AE6E` / `#2A2216` | Tier colour for the two Huruf rungs (warm ink-brown) |
| `--harakat` | `#1E6B4F` | `#7FCBA8` | Vowel marks when a lesson highlights them (same value as `--accent`, named separately so it can be tuned) |
| `--eg` / `--eg-soft` | `#22668C` / `#E2EEF5` | `#8EC3E0` / `#152836` | The Egyptian strand: Nile blue for label, card edge, dialogue marker |

### 3.3 Keeping "green = brand" apart from "green = correct"

With green as the brand, correct answers can't rely on colour alone. Three things keep them apart:
- **Hue:** the accent is a blue-leaning emerald (`#1E6B4F`); correct is a yellow-leaning leaf green (`#356F25`) on a warm pale background (`#E7F0DA`). Side by side they read as different greens.
- **Shape:** correct states always carry the drawn check icon and the word "Tepat", as in English Ladder.
- **Place:** the accent fills buttons and marks focus words; leaf green appears only on answered pills and the feedback sheet.

Contrast targets, checked by a test over the token file in both themes:
- `--ink`, `--muted`, `--accent`, `--good` and `--off` reach 4.5:1 on `--paper`, `--surface` and their own soft backgrounds.
- `--board-ink` reaches 7:1 on `--board`.
- `--brass` reaches 3:1 on `--board`.

Rules:
- **Gold still means earned.** `--rung` is only for achievements.
- `--harakat` colours vowel marks **only** in Huruf lessons and the HarakatBuilder. Everywhere else, marks take the text colour. Colouring every mark turns text into confetti.
- `--eg` marks Egyptian content, so a learner always knows which variety they are reading. It is never used for Fusha.
- `theme-color` meta follows the **in-app** theme (`--paper` value of the active theme), not the OS. This fixes English Ladder issue 14.

---

## 4. Typography

### 4.1 Families

| Role | Face | Notes |
|---|---|---|
| Latin display | **Newsreader** (variable, opsz), 400/500/600, normal + italic | As English Ladder. Headings, Latin titles, numerals |
| Latin body | **Atkinson Hyperlegible Next** (variable 200–800), normal + italic | As English Ladder. Explanations, UI, Indonesian, **transliteration** |
| Latin mono | **IBM Plex Mono** 400/500/600 | As English Ladder. Labels, counters. Never holds Arabic |
| **Arabic text** | **Noto Naskh Arabic** 400/500/600/700 | Every Arabic sentence, word, tile, option and glossary entry. Naskh is the style Indonesian Qur'an readers already know; Noto Naskh's harakat are clear and well positioned |
| **Arabic display** | **Amiri** 400/700 | Big single letters in Huruf, the سُلَّم wordmark, rung-name Arabic subtitles, the climb moment. Never for running sentences |
| **Arabic UI** | **IBM Plex Sans Arabic** 400/500 | Tiny Arabic inside UI chrome where Naskh is too tall: SVG labels, chips, the word filter. Pairs with Plex Mono |

Load all through `next/font`, self-hosted. Arabic faces load the `arabic` subset only; Latin faces load `latin` and `latin-ext`.

**Transliteration glyph check:** transliteration needs ā ī ū ḥ ṣ ḍ ṭ ẓ ʿ ʾ. Atkinson Hyperlegible Next is expected to cover them; a test renders all eleven and fails if any falls back (CLAUDE.md §9). If one is missing, transliteration switches to Newsreader (non-italic), never to a system fallback.

### 4.2 Scale

All English Ladder tokens stay exactly as built:

| Token | Size / line-height |
|---|---|
| `--t-hero` | 3rem / 1.05 (2.25rem ≤ 480px) |
| `--t-h1` | 2.125rem / 1.15 |
| `--t-h2` | 1.5rem / 1.2 |
| `--t-sentence` | 1.6rem / 1.3 (1.4 ≤ 480px) |
| `--t-body` | 1.0625rem / 1.6 |
| `--t-small` | 0.9rem / 1.5 |
| `--t-label` | 0.74rem / 1.3 |
| `--t-tab` | 0.72rem / 1.2 |
| `--t-card` | 1.3rem / 1.15 |
| `--t-wordmark` | 1.125rem / 1 |

Headings are display weight 500, as built.

Arabic tokens are added. Arabic letters sit lower in the em box and harakat need vertical room, so Arabic runs **larger and looser** than Latin at the same role:

| Token | Size | Line-height | Face | Use |
|---|---|---|---|---|
| `--t-ar-sentence` | 2.125rem (1.875rem ≤ 480px) | 2.0 | Naskh 500 | The Arabic sentence being taught |
| `--t-ar-body` | 1.5rem | 1.9 | Naskh 400 | Arabic in talk lines, readings, options, tiles |
| `--t-ar-small` | 1.25rem | 1.8 | Naskh 400 | Glossary chips, My words list, review rows |
| `--t-ar-glyph` | 5rem (4rem ≤ 480px) | 1.4 | Amiri 400 | Single letters in Huruf |
| `--t-ar-title` | 1.75rem | 1.6 | Amiri 700 | Arabic subtitles on rung headers, lesson titles in Arabic |
| `--t-tr` | `--t-small` | 1.5 | Atkinson 400, upright | Transliteration |

The **Ukuran teks Arab** setting multiplies only the `--t-ar-*` tokens (100 / 120 / 140%), through `:root[data-ar-size]`. The general text-size setting multiplies everything, Arabic included.

### 4.3 Text conventions

English Ladder's conventions stay: Indonesian is italic and `--muted`; the focus word is `--accent`; wrong sentences are `--off` and struck through; headings use `text-wrap: balance`.

Arabic rules (every one of these is required):
- **Arabic is never italic, never uppercase-transformed, and never letter-spaced.** Any class that adds `letter-spacing`, `text-transform` or `font-style: italic` must not reach Arabic. `.label` and `.eyebrow` never contain Arabic.
- **Arabic never changes font weight inside a word.** A weight change switches font instances and breaks letter joining. The focus style for Arabic is **colour plus underline only**: `--accent`, a 2 px underline with 6 px offset (below the descenders and kasrah), and no bold.
- **A focus boundary inside a word keeps the letters joined.** The renderer inserts a zero-width joiner (U+200D) on both sides of the boundary (CLAUDE.md §7.4). Example: the *al-* in الكتاب is highlighted, and the lam still joins the kaf.
- **Transliteration is upright, never italic** (italic means Indonesian). It is `--muted` at `--t-tr`, sits directly under the Arabic, and carries `lang="ar-Latn"`. The focus part of the transliteration is underlined to match the Arabic focus.
- **Egyptian lines** carry a small `EG` mono chip in `--eg` before them (on the inline-start side of the Indonesian layout) and `lang="ar-EG"`.
- **Digits:** UI numerals are Western (1 2 3). Arabic-Indic digits (١ ٢ ٣) appear only inside Arabic content and the numbers lesson.
- **Punctuation:** Arabic sentences use Arabic punctuation (، ؛ ؟).

---

## 5. Space, shape, depth, motion

Identical to English Ladder as built:
- **Space:** `--s-1` 4px … `--s-8` 64px; `--gutter`; `--tabbar-h` 64px; `--sidebar-w` 256px.
- **Radius:** `--r-sm` 6px, `--r-md` 10px, `--r-lg` 18px, `--r-xl` 24px, full 999px.
- **Depth:**
  - `--e-1`: `0 0 0 1px var(--rule), 0 1px 2px rgb(var(--shadow-rgb) / 0.04), 0 8px 24px -16px rgb(var(--shadow-rgb) / 0.18)`
  - `--e-2`: `0 18px 40px -28px rgb(var(--shadow-rgb) / 0.45)`
- **Motion:**
  - `--ease` `cubic-bezier(0.2, 0.7, 0.2, 1)`; `--ease-object` `cubic-bezier(0.3, 1.25, 0.4, 1)`; `--ease-moment` `cubic-bezier(0.2, 0.8, 0.2, 1)`
  - `--m-quick-d` 120ms; `--m-base-d` 220ms; `--m-object-d` 380ms; `--m-moment-d` 900ms; `--m-check-d` 250ms; `--m-shift` 12px
  - `.notch-settle` 1400ms, which becomes a token here: `--m-settle-d: 1400ms`
- **Reduced motion:** the same overrides (base 120ms, object 0ms, moment 120ms, shift 0px).

The app shell does **not** mirror (§6.1), so step transitions keep English Ladder's direction: the next step comes in from the right.

New motion:

| Name | Duration / easing | Use |
|---|---|---|
| **join** | `--m-object-d`, `--ease-object` | WordJoiner and spell tiles: each isolated letter slides into place, then cross-fades (`--m-quick-d`) into its contextual form |
| **mark-drop** | `--m-base-d`, `--ease-object` | HarakatBuilder: the chosen mark drops onto the letter from 10px above (below-marks rise from 10px below) |
| **fold** | `--m-object-d` | SunMoon: the lam fades to 0 while a syaddah fades in on the sun letter |
| **reveal** | `--m-quick-d` | Hold-to-show-harakat: marks fade in while held, out on release |

With reduced motion, all four become instant state changes.

---

## 6. Layout and screens

### 6.1 Direction model

- The page is **left-to-right**: `<html lang="id" dir="ltr">`. The interface is Indonesian, and the app shell, tab bar, sidebar, ladder, arrows and step order behave exactly as in English Ladder.
- Every Arabic run is an **RTL island**: `lang="ar" dir="rtl"` on its own block or `<bdi>`. Inside an island, text aligns to `start` (the right edge).
- This mirrors the bilingual layout Indonesians know from printed Qur'an translations and kitab: Arabic on the right, Indonesian on the left below it.
- All CSS in Arabic-bearing components uses logical properties (`ps-`, `pe-`, `ms-`, `me-`, `start-`, `end-`, `text-start`), so a component works the same whichever side its island sits.

### 6.2 Home

As English Ladder (wordmark row, date eyebrow, greeting with accented last word, green board, lesson strip, quick review row, ladder card; sidebar on desktop). Two changes:

**First visit, two doors.** The board shows:

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ MULAI DI SINI                        ┃  ← brass label
┃                              سُلَّم   ┃  ← Amiri, board-ink, top inline-end
┃ Mulai dari anak tangga *pertama*     ┃  ← text-h1, last word brass italic
┃                                      ┃
┃ ┌──────────────────────────────────┐ ┃
┃ │ Belum bisa baca huruf Arab       │ ┃  ← btn-board, full width
┃ │ Mulai dari Huruf 1           →   │ ┃
┃ └──────────────────────────────────┘ ┃
┃ ┌──────────────────────────────────┐ ┃
┃ │ Sudah bisa baca Al-Qur'an        │ ┃  ← ghost on board (board-ink ring)
┃ │ Cek huruf, 20 soal, ±8 menit →   │ ┃
┃ └──────────────────────────────────┘ ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

Two-line buttons: the first line is body 700, the second is `--t-small` `--board-muted`.

**Continue quote.** The quoted resume sentence on the board is Arabic in `--t-ar-body` Naskh, right-aligned in its island, with the transliteration beneath it in `--board-muted` when the rung shows transliteration. A gap blank renders as a brass underline 3em wide.

### 6.3 Ladder

Same rails, rows, notches and tier sections. Changes:
- **Tiers top to bottom:** Hard → Medium → Easy → **Huruf**. The Huruf section eyebrow reads "● HURUF · PRA-A1" with an `--huruf` dot.
- Each row can carry an Arabic subtitle after the Latin name, in `--t-ar-small` Plex Sans Arabic `--muted` (e.g. Huruf 1 · الحروف). It is hidden below 380 px.
- Optional rungs show "· pilihan", as in English Ladder. Rungs climbed through placement show "· lewat cek" in `--muted` instead of a test score.

### 6.4 The Arabic sentence block (`ArSentence`)

The most-used component. Phone and desktop:

```
┌──────────────────────────────────────────────┐
│                     الكُرَةُ [[تَحْتَ]] الطَّاوِلَةِ  ▶ │  ← RTL island, Naskh --t-ar-sentence, focus in accent + underline
│ al-kuratu taḥta ṭ-ṭāwilati                   │  ← transliteration, upright muted, focus underlined
│ Bolanya di bawah meja.                       │  ← Indonesian, italic muted
└──────────────────────────────────────────────┘
```

- **Layout:** an LTR row `[text block (grows)] [play 44px]`. Inside the text block, the Arabic line is an RTL island aligned to the right edge, so its first word sits next to the play button. Transliteration and Indonesian are LTR and left-aligned below.
- **Spacing:** 4px between Arabic and transliteration; 2px between transliteration and Indonesian. Arabic line-height comes from the token, so harakat never touch the line above.
- **Speaking highlight:** the word being spoken gets `--accent-soft` behind the **whole word** (never part of a word). Recorded audio has word timings from the manifest when they exist (CLAUDE.md §8); browser speech uses boundary events when they fire; with neither, there's no highlight.
- **Hold to show harakat** (rungs at `partial`/`none`): a long press (350ms) or the H key shows full harakat while held. A small hint appears once per lesson: "Tahan kalimat untuk melihat harakat."
- **Focus note:** tapping the focus word opens its note, as in English Ladder.

Variants:
- `body`: `--t-ar-body` for talk lines, readings and options
- `glyph`: a single letter in Amiri `--t-ar-glyph`, centred on `--paper-2`
- `pair`: inside PairCard, as English Ladder, with "✕ TERDENGAR ANEH" / "✓ ALAMI" labels

### 6.5 Lesson player

As English Ladder: sticky top bar with back, 6-segment StepBar, counter and close; the content column; the sticky BottomActionBar; the feedback sheet on correct answers; screen reader step announcements.

**Top bar toggles** take the place of English Ladder's ID|EN pill:
- **Latin**: a pill switch, shown only when the rung's `translit` is `on-request`.
- **Harakat**: a pill switch labelled with a small fathah glyph in Plex Sans Arabic plus "Harakat", shown only when the rung's `harakat` is `partial` or `none`. On means always show full marks for this lesson.
- Both are **lesson-scoped**. Each is a 32px pill in `--paper-2` that turns `--accent-soft` with `--accent` text when on.

**Concept step:** the Latin title (h1), the Indonesian title in italic, and the Arabic title in `--t-ar-title` Amiri, right-aligned on the same block as an RTL island.

### 6.6 Strand cards

| Card | Look |
|---|---|
| **Bunyi** | `--paper-2` card; mono label "BUNYI"; the focus sound as a large Amiri glyph pair (e.g. ح · ه) with play buttons; a mini Makhraj thumbnail (§8.4) when the point is a consonant; tip in body |
| **Mesir** | `--surface` card with a 3px inline-start edge in `--eg` and label "● MESIR" in `--eg`. Two rows: "FUSHA" then "MESIR", each an `ArSentence` (body variant) with its own transliteration and play button; a one-line note under them |
| **Kata** | `--accent-soft` card, as English Ladder's WordsCard: Indonesian loanword ↔ Arabic original, each meaning in one line, e.g. *kalimat* (kalimat, ID) ↔ كَلِمَة (satu kata, AR) |
| **Ngobrol** | As English Ladder's TalkCard; Egyptian dialogues get the `EG` chip on the card header |

### 6.6b Tirukan (repeat after)
- A quiet card at the end of the Examples step: mono label "TIRUKAN", the sentence as an `ArSentence`, and one large round play button (56px, `--accent`).
- Pressing it plays the recording, then shows a thin `--accent` bar that fills over the pause (sentence length + 1s) with the word "Giliranmu" in `--muted`, then plays once more.
- Nothing is recorded. The card says once, in small text: "Ucapkan keras-keras. Tidak ada yang merekam."

### 6.7 Check items (Arabic)

- **Options with Arabic** are full-width pills in `--t-ar-body`, Arabic right-aligned in an RTL island inside the pill; the number-key badge (1–4) sits on the left in mono.
- **Options with transliteration** (in `read` items) are normal LTR pills.
- **`spell`** (TileTray, Arabic):
  - Tiles show **isolated** letter forms in Naskh `--t-ar-body` on 52×52 tiles, `--surface`, 2px `--rule`.
  - The answer line is a single RTL island that renders the placed letters **as one joined string**, never as separate spans: the learner sees ك, then كت, then كتا, then كتاب form as they tap.
  - Below it, a faint row of slot dots in RTL order shows how many letters are left.
  - Tapping the answer line removes the last letter.
- **`order`** with Arabic words: tiles are whole words (each its own island) and the answer line flows right-to-left.
- **`mark`**: the word in `--t-ar-sentence` with the target letter outlined by a 2px dashed `--accent` circle; options are pills, each showing the mark on a dotted circle (◌َ ◌ِ ◌ُ ◌ْ ◌ّ) in Amiri with a Latin name beneath ("fathah").
- **Dictation** (`spell` with `dictation: true`): no written word, only a 56px play button and the tile tray; the answer line still joins as letters are placed.
- Feedback (wrong pill, hint after two misses, the feedback sheet in `--good-bg`, sounds) is exactly as English Ladder.

### 6.8 Rung page, test, climb, review, words, Saya, settings, about

All as English Ladder, with:
- **Rung header board:** Lattice instead of Contours; the Arabic rung subtitle in Amiri `--t-ar-title`, `--board-muted`, under the Latin name.
- **Rung page lesson rows:** Latin title, Indonesian italic, and an Arabic keyword chip at the inline-end (e.g. «تَحْتَ») in `--t-ar-small`.
- **Capstone cards** below the lesson list: "Baca dan dengar" (book icon) and "Ngobrol · Mesir" (`--eg` edge). Each shows a ✓ and the date when done.
- **Test** progress uses a bar labelled "Soal i dari N" (fixes English Ladder issue 6).
- **Climb moment:** green board with Lattice; the rung's Arabic name in Amiri `--t-ar-title` brass above the Latin title; the title "Huruf 1 · naik" is translated, not English (fixes issue 13). The line under it: "Satu anak tangga lagi. *Pelan-pelan, tapi naik.*" followed by سُلَّمًا سُلَّمًا in Amiri `--board-muted` (*sullaman sullaman*, rung by rung).
- **Quick review** running state gets a close ✕ in its header (fixes issue 3).
- **My words:** each row has Arabic (Naskh `--t-ar-small`, always fully vowelled), transliteration, Indonesian italic, an m/f gender chip, and the Egyptian form on a second line with the `EG` chip. Groups are labelled "Huruf 2 · Pelajaran 3" (fixes issue 11).
- **Settings:** adds "Ukuran teks Arab" (100 / 120 / 140%) with a live preview line: كِتَابٌ جَدِيدٌ (*kitābun jadīdun*, a new book). Accent options are removed.

### 6.9 Placement check (Cek huruf)

Same frame as the rung test (focus mode, counter, no feedback until the end). Intro: "Cek huruf · 20 soal · tanpa waktu. Hasilnya menentukan dari mana kamu mulai. Kamu bisa mengulang kapan saja."

Results screen:
- the score in `--t-hero`
- one plain sentence on the placement, e.g. "Kamu siap mulai dari Easy 1. Huruf 1 dan Huruf 2 ditandai sudah dinaiki."
- the ladder fragment showing where they land, with the you-are-here marker
- buttons: "Mulai Easy 1 →" (or the placed rung) and "Lihat jawaban"

When Huruf rungs are marked climbed through placement, the climb moment does **not** play. It is reserved for climbing by doing the work.

---

## 7. Components (inventory)

Everything in English Ladder's component list carries over. New or changed:

| Component | Status |
|---|---|
| `ArSentence` | new (replaces `Sentence` for target text) |
| `Translit` | new: upright muted line with focus underline |
| `ArIsland` | new: `<bdi>`/block wrapper setting `lang`, `dir`, face, size |
| `HoldReveal` | new: long-press / H key harakat reveal |
| `EgChip` | new |
| `StrandCards` | changed: Bunyi, Mesir, Kata, Ngobrol |
| `LessonTopToggles` | new: Latin + Harakat, lesson-scoped (replaces `ExplainToggle`) |
| `TwoDoorWelcome` | new: board state for first visit |
| `PlacementRunner` | new: built on `TestRunner` |
| `CapstoneCard` | new: reading and dialogue entries with done state |
| `Lattice` | new: board pattern (replaces `Contours`) |
| `ArTileTray` | new: spell mode joined answer line; Arabic order mode |
| `MarkOption` | new: harakat option pill |
| `TirukanCard` | new: repeat-after card |
| `Wordmark` | changed: Arabic Ladder + سُلَّم |

---

## 8. Visuals

All visuals follow English Ladder's illustration system: oblique 2.5D, light from the top-left, three tones per object, no outlines except 1.5px edges, ground shadows in `--ink` at 0.08, the subject in `--subject`, mono labels in `--muted`, a `--paper-2` stage with `--r-lg` and 16px padding, a radiogroup with roving focus, and a live text alternative. Letters are not 3D objects; they sit on the stage as type.

### 8.1 LetterForms (Huruf 1)
- **Stage:** the chosen letter at `--t-ar-glyph` centred; below it a row of four cells labelled (in mono) SENDIRI · AWAL · TENGAH · AKHIR, ordered right-to-left to match reading direction. Each cell shows the form in Naskh 3rem, inside a real short word in which that form occurs, with the letter coloured `--subject` and the rest `--ink`.
- Colouring part of a word uses colour only (no weight change), with ZWJ at both sides of the coloured letter so the joining is preserved.
- **Family toggle:** for dot families (ب ت ث ن ي, ج ح خ, د ذ, ر ز, س ش, ص ض, ط ظ, ع غ, ف ق), a row of pills switches the dots. The dots animate in and out with `mark-drop`, while the body of the letter stays still, which shows that the dots are the only difference.
- **Non-joiners** (ا د ذ ر ز و): the initial and medial cells show a visible gap after the letter, marked with a small `--muted` bracket labelled "tidak menyambung ke kiri".
- **Controls:** a 7×4 alphabet grid (RTL order) in Plex Sans Arabic 1.25rem chips, plus the four position cells as a radiogroup.

### 8.2 WordJoiner (Huruf 1)
- An RTL row of letter tiles (isolated forms) that the learner taps from an alphabet tray, and above it the joined word at `--t-ar-sentence`.
- **"Lepas"** (pull apart) animates the joined word out into tiles with the `join` motion reversed.
- Under each letter of the joined word, a tiny mono label names the form used (awal/tengah/akhir/sendiri).
- Presets: كتب, مدرسة, بيت, قلم, ورد (the last one is all non-joiners).

### 8.3 HarakatBuilder (Huruf 1–2)
- In Huruf 1 the picker offers only fathah, kasrah and dhammah; the full set unlocks in Huruf 2.
- One consonant at `--t-ar-glyph`, with a dotted circle where a mark goes.
- Mark picker: fathah, kasrah, dhammah, sukun, syaddah, tanwin fath/kasr/damm, and mad (ا ي و added after). Each is a `MarkOption` pill.
- Picking a mark drops it in (`mark-drop`) in `--harakat`, plays the syllable, and shows the transliteration large below (ba, bi, bu, b, bba…).
- **Stack mode** (syaddah + vowel) shows both marks in their correct order.

### 8.4 Makhraj (Huruf 2)
- An original, stylised side section of the head: lips, teeth, the tongue as one shape, the palate, and the throat drawn as three bands (upper, middle, lower). Flat fills in `--card` / `--card-top` / `--card-side`, with the tongue in `--subject` at 60% so it reads as the moving part.
- Not an anatomy illustration: no teeth detail, no cutaway skull, only what's needed to see "front, middle, back, throat".
- **Compare mode:** pick two letters; each place of articulation glows (radius 14 circle in `--accent` at 25%, a 2px ring in `--accent`), with labels in mono: "ع · tengah tenggorokan", "ء · pangkal tenggorokan".
- Pairs offered: ع/ء, ح/ه, خ/ك, ق/ك, ث/س, ص/س, ذ/ز, ظ/ز, ض/د, ط/ت.
- A thumbnail version (120×90) appears in Bunyi strand cards.

### 8.5 SunMoon (Huruf 2)
- A 2×14 board of letter chips, moon letters on one side and sun letters on the other (sorted RTL), with a sun or moon line icon on each half's header.
- Pick a letter: ال + a short noun beginning with it appears at `--t-ar-sentence`. For a sun letter, the lam fades (`fold`) and a syaddah drops onto the sun letter in `--harakat`; the transliteration changes from *al-sh…* to *ash-sh…*. For a moon letter, the lam takes a sukun and stays.

### 8.6 PlaceScene, Arabic (Easy 1)
- English Ladder's scene unchanged: table, box and ball, the same draw-order slots and the same motion.
- The preposition radiogroup and sentence are Arabic: فِي، عَلَى، تَحْتَ، بِجَانِبِ، خَلْفَ، أَمَامَ, with the sentence الكُرَةُ ___ الصُّنْدُوقِ / الطَّاوِلَةِ and Indonesian below it.
- SVG labels: `table · طاولة · meja` in Plex Sans Arabic + Plex Mono.

### 8.7 Agreement (Easy 1, HTML)
- Two columns: noun chips (m/f marked with a tiny chip) and adjective chips.
- The result phrase shows at `--t-ar-sentence`. When the noun is feminine, the adjective's ة appears in `--subject`; when "definite" is switched on, ال appears on **both** words in `--subject`.
- A line underneath states the rule in Indonesian: "Kata sifat ikut jenis dan *al-* kata bendanya."

---

## 9. Lattice (board pattern)

- A deterministic khatam lattice: eight-point stars formed by two overlapping squares at 45°, on a 72px grid, with the interlace drawn as single strokes (no fills).
- **Strokes:** `--board-ink` at 0.07 opacity, 1px; every fourth star in `--brass` at 0.22. These are English Ladder's Contours values.
- Same SVG approach: one `viewBox="0 0 720 360"` with `preserveAspectRatio="xMaxYMid slice"`, generated in code (no hand-written path data), `aria-hidden`.
- **Fade mask:** the lattice fades out toward the inline-start edge (a linear gradient mask from 100% at the end edge to 0% at 55%), so text on the board always sits on plain green.

---

## 10. Sound

English Ladder's synthesised effects unchanged: correct (E5→A5), wrong (A3 triangle), lessonDone (C5 E5 G5), climbed (C5 E5 G5 C6 with delay), the same envelope and `PEAK = 0.1`, created after the first gesture. No sounds in tests or the placement check.

Recorded speech is separate from these effects (PRD §5.6).

---

## 11. Copy voice

As English Ladder: informal-standard Indonesian (*kamu*), short sentences, specific feedback, no shaming, no exclamation marks except at the climb, no emoji.

Arabic-specific:
- Introduce Arabic grammar terms once, with the Indonesian first: "jenis kata (*mudzakkar*/*muannats*)". Many learners met these terms in pesantren; many didn't. Neither group should feel lost.
- Say "Fusha" and "bahasa Mesir" (or "'Amiyah Mesir" once, explained). Don't say "Arabic slang".
- Religious phrases appear only as language: السَّلَامُ عَلَيْكُمْ is taught as a greeting, with its meaning. The app doesn't preach, and it doesn't avoid religious vocabulary that is part of everyday Arabic.
- Loanword notes are friendly, never corrective about Indonesian: "Di bahasa Indonesia *kalimat* berarti satu kalimat. Di bahasa Arab, كَلِمَة hanya satu kata."

Sample strings:

| Place | Bahasa Indonesia | English |
|---|---|---|
| Door 1 | Belum bisa baca huruf Arab | I can't read Arabic script yet |
| Door 2 | Sudah bisa baca Al-Qur'an | I can already read the Qur'an |
| Hold hint | Tahan kalimat untuk melihat harakat. | Hold a sentence to see its vowel marks. |
| Wrong | Belum tepat, coba lagi. | Not quite, try again. |
| Placement result | Kamu siap mulai dari Easy 1. | You're ready to start at Easy 1. |
| Climb | Satu anak tangga lagi. Pelan-pelan, tapi naik. | One more rung. Slowly, but upward. |

---

## 12. Accessibility

English Ladder §12 applies in full, plus:
- Every Arabic element has `lang="ar"` (or `ar-EG`) and `dir="rtl"`; transliteration has `lang="ar-Latn"`; Indonesian has `lang="id"`.
- Screen-reader text for visuals names letters by their Indonesian names ("huruf ba, bentuk awal") as well as the glyph.
- `spell` tiles have accessible names ("kaf", "ta"), and the joined answer is announced as a word.
- Hold-to-reveal has a keyboard equivalent (H) and a toggle equivalent (the Harakat pill), so no one needs a long press.
- Arabic text size is adjustable separately, up to 140%. Layouts must survive 140% Arabic at 130% general text size on a 360px screen.
- Harakat contrast: marks in `--harakat` meet 3:1 against `--surface` and `--paper-2` in both themes.

---

## 13. Things this app never does

Everything in English Ladder's list (lives, timers, streak counters, mascots, emoji, confetti, gradients, glass, interrupting popups, locked lessons, red failure screens), plus:
- Arabic in a non-Arabic font, in italic, uppercase, letter-spaced, or bold-inside-a-word.
- Arabic letters split into separate spans in a way that breaks joining.
- Transliteration set in italic.
- Mirroring the app shell.
- Calligraphic or decorative Arabic where the learner must read it.
- Religious imagery (mosque silhouettes, crescents, praying hands) as decoration.

---

## 14. Quality bar (check before calling a screen done)

All of English Ladder's checks, plus:
- [ ] Every Arabic string joins correctly, including focus highlights mid-word, spell tiles and coloured letters in LetterForms
- [ ] Harakat never touch the line above or below at 140% Arabic size
- [ ] No Arabic falls back to a system font (check DevTools "Rendered fonts")
- [ ] Every transliteration glyph renders in the intended face
- [ ] Arabic islands are right-aligned; Indonesian and transliteration are left-aligned beneath
- [ ] Egyptian content always shows the EG chip and `--eg` edge
- [ ] Gold appears only for achievements; `--harakat` only in harakat lessons
