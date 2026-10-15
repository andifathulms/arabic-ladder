# Arabic Ladder — Product Requirements (v1)

**Status:** Draft for build · **Owner:** Fathul · **Date:** 15 October 2026
**Companion docs:** `CLAUDE.md` (how to build), `DESIGN.md` (how it looks and feels)
**Sibling:** English Ladder, as built at commit `58eab3c` (see `RECON.md` from that repo). Arabic Ladder reuses its engine, screens and theme. This document covers only what Arabic needs.

---

## 1. Summary

Arabic Ladder is a levelled Arabic course for Indonesian speakers, starting from **complete zero**: no script, no sounds, no words. It runs from reading the first letter to reading unvowelled Arabic text and holding everyday conversations.

It keeps everything that works in English Ladder: the ladder, six-step lessons, interactive visuals, the check engine, quick review, rung tests, the climb moment, the cream catalogue look (in deep Islamic green instead of navy), progress saved only in the browser, and static hosting on GitHub Pages.

Five things make it an Arabic course rather than a copy:

1. **Two script rungs before Easy 1.** *Huruf 1* teaches the letters with short vowels from the first lesson, Iqra'-style; *Huruf 2* teaches long vowels, sukun, syaddah, tanwin and the sounds Indonesians tend to merge. Learners who can already read the Qur'an can test out of them on day one.
2. **Two supports that fade.** Transliteration (Latin spelling) is shown at first and disappears by Easy 3. Vowel marks (*harakat*) are complete at first and thin out from Medium 2, because real Arabic is written without them.
3. **Fusha plus Egyptian.** The course teaches Modern Standard Arabic (*Fusha*) as the backbone: grammar, reading, writing. Every lesson also shows how Egyptians actually say it (*'Amiyah Mesir*), the most widely understood spoken variety, through film, TV and music.
4. **Built for Indonesian speakers.** Lessons start from the hundreds of Arabic loanwords Indonesians already know, flag where meanings shifted, and train the sound contrasts Indonesian merges (ع/ء, ح/ه, ق/ك, ذ/ز/ظ, ث/س/ص).
5. **The longer ladder Arabic needs.** Eleven rungs and about 124 lessons, against English Ladder's ten rungs and about 90. Arabic takes an Indonesian speaker roughly twice as long to reach the same level, and the ladder says so plainly.

**v1 ships Huruf 1, Huruf 2 and Easy 1, complete:** 34 lessons, three rung tests, the placement check for Qur'an readers, a reading for Huruf 2 and Easy 1 plus an Egyptian dialogue for Easy 1, seven visuals, recorded audio for every letter and every lesson sentence, and the full app shell with all eleven rungs on the ladder.

---

## 2. Goals and non-goals

### Goals (v1)
- Someone who has never seen Arabic script can, after Huruf 1–2, read any fully vowelled word aloud correctly, without transliteration.
- Someone who can read the Qur'an can pass the placement check in under 10 minutes and start at Easy 1.
- After Easy 1, a learner can introduce themselves, describe people and things, ask and answer simple questions, and say where things are, in both Fusha and Egyptian.
- Every Arabic sentence in v1 has native-speaker audio. Browser speech is the fallback only.
- No Arabic text in a shipped lesson has been seen only by AI. Every reviewed lesson names its reviewer.

### Non-goals (v1)
- Speaking assessment or microphone input.
- Handwriting input (tracing letters with a finger). Planned for a later Huruf update.
- Gulf, Levantine or Maghrebi dialects. Recognition notes may appear at Hard 2; there are no full tracks.
- Qur'anic tajwid as a subject. The app helps Qur'an readers understand meaning; it does not teach recitation rules.
- Accounts, sync, leaderboards, analytics, ads.

---

## 3. Audience

| Persona | Starting point | Door into the app |
|---|---|---|
| **True beginner** | Can't read Arabic script at all | Huruf 1, lesson 1 |
| **Qur'an reader** (the largest group, and the owner) | Reads vowelled script fluently, knows almost no meaning or grammar, can't hold a conversation | Placement check → Easy 1 (or Huruf 2 if the sound lessons are needed) |
| **Returning madrasah or pesantren student** | Knows some *nahwu* terms and vocabulary, never learned to speak | Placement check → Easy 1, moves quickly to Easy 2–3 |
| **Job seeker for the Arab world** | Any of the above, wants speaking | The Egyptian strand in every lesson; the dialogue capstones |

Copy, pacing and explanations assume a true beginner. Placement makes sure nobody is forced through what they already know.

---

## 4. The curriculum

### 4.1 How this sequence was checked

The order follows what established beginner Arabic programmes do, so a teacher reviewing it should recognise it:
- **Indonesian script methods (Iqra', Qiraati):** letters are taught **with short vowels from the first lesson**, as syllables (ba bi bu), not as bare letters first.
- **Durus al-Lughah al-'Arabiyyah (Madinah) and Al-'Arabiyyah li an-Nasyi'in**, widely used in pesantren: nominal sentences, هذا/ذلك, gender, *al-*, iḍāfah and prepositions before verbs, with case endings noticed from the start, and the past tense as the first verb form.
- **Al-Kitaab fii Ta'allum al-'Arabiyya:** Fusha and a spoken dialect (Egyptian or Levantine) taught side by side from the beginning, with vocabulary targets per unit.

Where Arabic Ladder deliberately differs:
- Full case grammar (*i'rab*) is postponed to Medium 3–Hard 1, as in Al-Kitaab, rather than taught as rules in the first weeks as in Madinah. Endings are *seen and named* from Easy 1, never hidden.
- The Indonesian-speaker contrast (sounds Indonesian merges, loanword meaning shifts) is added throughout. No textbook does this for Indonesians specifically.

A qualified Arabic teacher must still approve the sequence before content is written beyond Easy 1 (§12).

### 4.2 Rungs

| # | Rung | Tier | CEFR | Lessons | New words | Harakat | Transliteration | Status |
|---|---|---|---|---|---|---|---|---|
| 0 | **Huruf 1** · Huruf dan vokal pendek | huruf | Pre-A1 | 12 + test | 40 | full | always | **v1** |
| 1 | **Huruf 2** · Mad, sukun, syaddah | huruf | Pre-A1 | 10 + test | 40 | full | always | **v1** |
| 2 | **Easy 1** · Kalimat tanpa kata kerja | easy | A1− | 12 + test | 150 | full | always | **v1** |
| 3 | Easy 2 · Kata kerja pertama | easy | A1 | 12 + test | 200 | full | on request | v1.1 |
| 4 | Easy 3 · Hari-hariku | easy | A2− | 12 + test | 200 | full | off | v1.2 |
| 5 | Medium 1 · Pola kata | medium | A2 | 12 + test | 250 | full | off | later |
| 6 | Medium 2 · Bentuk kata kerja | medium | B1− | 12 + test | 250 | partial | off | later |
| 7 | Medium 3 · Kalimat bersambung | medium | B1 | 12 + test | 250 | partial | off | later |
| 8 | Hard 1 · I'rab | hard | B1+ | 10 + test | 300 | partial | off | later |
| 9 | Hard 2 · Bahasa media dan kerja | hard | B2 | 10 + test | 300 | none | off | later |
| 10 | Hard 3 · Teks asli | hard | B2+ | 10 + test | 300 | none | off | later |

That's 124 lessons and about 2,300 words. Both Huruf rungs are `optional: true`, like English Ladder's Starter: they are never chosen as the learner's current rung on their own, and passing the placement check marks them climbed.

The "new words" column is a target for authors, checked by `content:check` (±20%). Around 600 words by the end of Easy 3 matches what beginner textbooks reach in their first year.

The CEFR column is a guide, not a promise. Arabic CEFR alignment is less established than for European languages. The About page explains this, and says that reaching B2 takes most Indonesian adults two to three years of steady study.

### 4.3 Topics per rung

**Huruf 1 · Huruf dan vokal pendek (letters with short vowels)**

Every letter is taught with fathah, kasrah and dhammah from the start, so learners read syllables (بَ بِ بُ) and short words from lesson 2, the way Iqra' does. Letters are grouped by shape family, so the dots are the only new thing to learn.

1. *Kamu sudah tahu banyak*: right to left; the three short vowels; 10 loanwords you already know, shown as pictures of words (كِتَاب kitab, وَقْت waktu, كُرْسِيّ kursi)
2. ب ت ث with a i u: بَ بِ بُ, تَ, ثَ; first words
3. ن ي and the "tooth" shape in the middle of a word
4. ج ح خ
5. The six letters that never join forward: ا د ذ ر ز و
6. س ش ص ض
7. ط ظ ع غ
8. ف ق
9. ك ل and the lam-alif ligature (لا)
10. م ه (all four forms of ha)
11. Hamza on its seats (ء أ إ ؤ ئ); ta marbuta (ة); alif maqsura (ى)
12. Reading words letter by letter: joining and the four forms, with copying (writing practice on screen)

**Huruf 2 · Mad, sukun, syaddah (long vowels, stops and doubling)**
1. Long vowels: alif, ya and waw as vowels (mad)
2. Sukun: the stopped consonant
3. Syaddah: the doubled consonant
4. Tanwin: -an, -in, -un
5. *Al-*: sun letters and moon letters
6. Hamzat wasl: the alif you don't pronounce
7. Sounds Indonesian merges (1): ع vs ء, ح vs ه, خ vs ك
8. Sounds Indonesian merges (2): ق vs ك, ث/س/ص, ذ/ز/ظ, ض vs د
9. Dictation: hear a word, write it (imla')
10. Reading without transliteration: a short passage, fully vowelled

**Easy 1 · Kalimat tanpa kata kerja (sentences without verbs)**
1. Greetings, Fusha and Egyptian (السَّلَامُ عَلَيْكُمْ، صَبَاحُ الخَيْرِ، إزَّيَّك)
2. I, you (m), you (f): أنا، أنتَ، أنتِ; there is no *am/is/are*
3. He, she, and gender: هو، هي; ta marbuta (ة) marks most feminine nouns
4. This and that: هٰذا، هٰذه، ذٰلك، تلك; ما هذا؟
5. *Al-* on nouns: a book, the book (كِتَابٌ، الكِتَابُ); why *a book* ends in *-un* (tanwin as "a")
6. Adjectives come after the noun and agree in gender and definiteness (بَيْتٌ كَبِيرٌ، البَيْتُ الكَبِيرُ)
7. Nisba: إندونيسيّ, مصريّ; nationalities and jobs
8. Questions: من، أين، هل; answers with نَعَمْ / لَا
9. Numbers 1–10 for counting, and Arabic-Indic digits (١ ٢ ٣)
10. Possession with iḍāfah: بَيْتُ أَحْمَدَ، بَابُ البَيْتِ; **noticing endings**: the second word ends in *-i*
11. Possessive endings: كتابي، كتابكَ، كتابكِ، كتابه، كتابها
12. Where things are: في، على، تحت، بجانب، خلف، أمام; **noticing endings**: after a preposition, *-i* again (فِي البَيْتِ)

**Easy 2 onward (outline, entered in `curriculum.yaml` in v1 with `status: soon`)**
- **Easy 2 · Kata kerja pertama:** the **past tense first**, as the base form dictionaries use (كَتَبَ); **the root idea** (k-t-b); past tense for all persons; the **present tense** built from it (يَكْتُبُ); negation with ما (past) and لا (present); plural pronouns; يوجد / هناك (there is); عندي (to have); sound plurals (-ūn, -āt).
- **Easy 3 · Hari-hariku:** daily routine; days and time; numbers 11–100; ليس; أريد / أستطيع + أن; future (سـ، سوف); imperative; كان; first broken plurals; verbs with fixed prepositions; the nominative and accusative endings named (*-u*, *-a*) as a pattern you've been seeing.
- **Medium 1 · Pola kata:** root and pattern in depth; broken plural patterns; the dual; comparative and superlative (أفعل); verb forms II–IV; object pronouns; relative clauses (الذي، التي).
- **Medium 2 · Bentuk kata kerja:** verb forms V–X; weak verbs (hollow, defective, assimilated); subjunctive and jussive (أن، لن، لم); the verbal noun (masdar); numbers with nouns.
- **Medium 3 · Kalimat bersambung:** the case system as a system; كان and its sisters; إنّ and its sisters; passive; active and passive participles; reported speech; ḥāl clauses.
- **Hard 1 · I'rab:** full case and mood system; diptotes; exception (إلّا); reading unvowelled text by grammar.
- **Hard 2 · Bahasa media dan kerja:** news Arabic; job ads, CVs and formal emails; register (Fusha vs Egyptian vs Gulf, for recognition).
- **Hard 3 · Teks asli:** idioms and proverbs; a bridge to Qur'anic and classical Arabic (recognition, with translation); rhetoric; long authentic texts.

### 4.4 The four skills

A teacher covers listening, speaking, reading and writing. Arabic Ladder covers each, within what a static app can do:

| Skill | How |
|---|---|
| **Reading** | Every lesson; the two fades; readings at each rung |
| **Listening** | Recorded audio on every Arabic line; `listen` items; Ngobrol dialogues |
| **Writing** | Copying in Huruf 1; `spell` items; **dictation** (`spell` with audio and no written prompt) from Huruf 2 onward |
| **Speaking** | **Tirukan** (repeat after): each Examples step ends with one sentence to repeat aloud after the recording, with a replay button and a pause long enough to speak. There is no scoring and no microphone in v1; the prompt builds the habit. A recording-and-compare mode is planned for v2 |

### 4.5 The two fades

**Transliteration** (rung field `translit`):
- `always`: shown under every Arabic sentence (Huruf 1 to Easy 1).
- `on-request`: hidden by default; the **Latin** toggle in the lesson top bar shows it for that lesson (Easy 2).
- `off`: never shown in lessons, but still available in My words (Easy 3 onward).

In Huruf 1–2 transliteration is shown, but every check item that tests reading hides it, so learners can't read the Latin instead of the Arabic.

**Harakat** (rung field `harakat`):
- `full`: every letter vowelled (Huruf 1 to Medium 1).
- `partial`: shaddah, tanwin, and the vowels on the lesson's focus words are kept; the rest are removed (Medium 2 to Hard 1).
- `none`: no harakat, as in newspapers (Hard 2 and up).
- At `partial` and `none`, pressing and holding any Arabic sentence (or pressing **H** on a keyboard) shows it fully vowelled while held.

Content is **always authored fully vowelled**. The app removes marks at render time, so the same content works at every level.

### 4.6 Fusha and Egyptian

- Every example, dialogue and glossary entry is in Fusha.
- Where Egyptian says it differently, the item carries an Egyptian variant in Arabic script with its own transliteration. The **Mesir** strand card shows these side by side (§5.3).
- Each rung ends with two capstones: **Baca dan dengar** (a Fusha text, as in English Ladder) and **Ngobrol** (a 6–10 line Egyptian dialogue with audio, transliteration, translation and 3–4 check items).
- Explanations name the key Egyptian sound shifts once, when they first matter: ج is said /g/, ق is often a glottal stop, ث becomes /t/ or /s/, ذ becomes /d/ or /z/.

### 4.7 Grammar and vocabulary inventory rule

Same rule as English Ladder: Arabic in a lesson may use only structures from earlier rungs plus the current rung's inventory up to and including this lesson. Arabic-specific rules are added:
- **No verbs before Easy 2** (except fixed greetings and chunks listed in the lexicon as `chunk`).
- **Script before words:** Huruf 1 examples may use only letters taught so far, plus whole loanwords the learner already knows from Indonesian, shown as pictures of words rather than reading tasks.
- **Endings are never explained before they are named.** Up to Easy 3, case endings appear in vowelled text and are pointed out as patterns ("after a preposition, *-i*"), not as rules with terms like *majrur*. Terms arrive in Medium 3.

### 4.8 Spiral threads
As in English Ladder. Threads include `script`, `sounds`, `gender`, `definiteness`, `endings`, `pronouns`, `questions`, `numbers`, `possession`, `prepositions`, `verbs`, `roots`, `plurals`, `negation`, `cases`, `register`, `egyptian`.

---

## 5. Features

Everything in English Ladder §5 carries over: home (board, lesson strip, ladder), rung page, six-step lesson player, check step with feedback sheet, rung test, climb moment, quick review with Leitner boxes, My words, Saya, Settings, About. Only the changes are listed here.

### 5.1 Home: two doors
First visit shows the green board with two choices instead of one button:
- **Belum bisa baca huruf Arab** → Huruf 1, lesson 1.
- **Sudah bisa baca Al-Qur'an** → the placement check (§5.2).

One sentence explains the difference. After the first choice, the board behaves exactly like English Ladder's continue card.

### 5.2 Placement check (Cek huruf)
- 20 items: letter recognition in all four forms (6), reading vowelled words (6, choose the transliteration), harakat (4), sound contrasts by listening (4).
- No feedback during the check, same feel as a rung test.
- **18+ correct:** Huruf 1 and Huruf 2 are marked climbed; the learner starts at Easy 1.
- **14–17:** Huruf 1 marked climbed; the learner is sent to Huruf 2, with the lessons behind their misses highlighted.
- **Under 14:** start at Huruf 1, with no judgement in the wording.
- It can be retaken any time from the Huruf 1 rung page. It never un-climbs a rung.

### 5.3 Lesson player
Same six steps: Konsep, Lihat, Contoh, Bandingkan, Latihan, Selesai.

Changes:
- **Arabic sentence block** (DESIGN §6.4): Arabic right-aligned and large, then transliteration, then the Indonesian translation. Play button on every Arabic line.
- **Top bar toggles** replace English Ladder's ID/EN pill:
  - **Latin** (transliteration on/off): visible only when the rung's `translit` is `on-request`.
  - **Harakat** (always/only while held): visible only when the rung's `harakat` is `partial` or `none`.
  - Both apply **to the current lesson only** and reset when the lesson closes. (This fixes English Ladder recon issue 5, where the toggle overwrote a global setting.)
- **Strand cards:**
  - **Bunyi** (sound): a pronunciation point with playable words and a mouth diagram when it's a consonant (§7).
  - **Mesir** (Egyptian): Fusha line ↔ Egyptian line, each with transliteration and audio, plus a one-line note.
  - **Kata** (words): loanword meaning shifts, e.g. *kalimat* means a sentence in Indonesian but a single word in Arabic (كلمة); *ahli* is an expert in Indonesian but family in Arabic (أهل).
  - **Ngobrol** (talk): a 2–4 line exchange, in Fusha or Egyptian, marked as which.
- **Tirukan** (repeat after): the Examples step ends with one sentence to repeat aloud: it plays, pauses for about the length of the sentence plus one second, then plays again. Nothing is recorded or scored.
- **Explanations** are always in Bahasa Indonesia, with an English UI option as in English Ladder. There is no explanation-language fade; the fades are transliteration and harakat.

### 5.4 Check engine
All six English Ladder item types carry over (`choice`, `gap`, `order`, `scene`, `fix`, `listen`). Arabic adds three:

| Type | Interaction | Example |
|---|---|---|
| `read` | An Arabic word or phrase is shown; pick its transliteration or meaning | كِتَاب → kitāb / kattāb / kutub |
| `spell` | Tap letter tiles (isolated forms) in order; the answer line shows them **joined** as a real word as you go. With `audio` and no written prompt, it is **dictation** (imla') | ك ت ا ب → كتاب |
| `mark` | A word with one letter's vowel missing; listen and pick the harakat | دَ ـ رْ سٌ → choose ـُ ـَ ـِ |

Grading (CLAUDE.md §7.3):
- Arabic comparisons are normalised (Unicode NFC, no tatweel, Arabic punctuation stripped).
- Each item has `match: exact | loose`. `loose` also ignores harakat and unifies alef/hamza seats. The default is `loose`, but `exact` is required for every item in Huruf 1–2 and for any item whose point is the vowel or the hamza.
- `order` items in Arabic compare tokens right to left as written. There is no case rule.

### 5.5 Rung tests and capstones
- Huruf 1: draw 14 of 28, pass 11. Huruf 2: draw 12 of 24, pass 9. Easy 1: draw 16 of 36, pass 12.
- Capstones per live rung: `reading.yaml` (Fusha) and `dialogue.yaml` (Egyptian). Huruf 1 has neither; Huruf 2 has a reading only.
- **Capstone completion is saved** (fixes English Ladder recon issue 4): a done flag per capstone, shown as a small mark on the rung page, and answers recorded for review.

### 5.6 Audio
Arabic text-to-speech in browsers is uneven: it often mispronounces vowelled text, can't say isolated letters well, and there is almost no Egyptian voice. So audio is **recorded files first, browser speech second**:
- Every Arabic string in content gets an audio key (a hash of the fully vowelled text plus variety: `fusha` or `eg`).
- `public/audio/<key>.mp3` is played if it exists (mono, 48 kbps, trimmed, loudness-normalised).
- If there's no file, browser speech is used: an `ar-EG` voice for Egyptian, any `ar-*` for Fusha. If neither exists, the play button is hidden, as in English Ladder.
- **v1 requirement:** all letters, letter-plus-vowel syllables and Huruf words (around 400 clips) and every Easy 1 example, dialogue line and glossary word are recorded by a native speaker before the rung goes live. A script lists missing recordings (CLAUDE.md §8).
- Speed setting: 0.75× / 1×, applied to recorded files through `playbackRate` with pitch preserved.

### 5.7 My words
As in English Ladder, plus:
- Each word shows Arabic (always fully vowelled), transliteration (always, whatever the rung), Indonesian, and the Egyptian form if it differs.
- Gender badge (m/f) for nouns; the root (e.g. ك-ت-ب) once Easy 3 has introduced roots.
- Search accepts Arabic with or without harakat, transliteration, or Indonesian.

### 5.8 Settings (changes)
- **Suara:** Pace 0.75× / 1×; voice gender for browser speech; "Coba suara" plays a recorded sample if one exists.
- **Bahasa:** interface language (Indonesian / English). The explanation-language setting is removed.
- **Tampilan:** adds *Ukuran teks Arab* (100 / 120 / 140%), separate from the general text size, because harakat need room at small sizes.
- Accent options are removed.

### 5.9 Known English Ladder issues fixed here
From the English Ladder recon §13, Arabic Ladder ships with these fixed: quick review gets an exit control (3); capstones save completion (4); the lesson toggle is lesson-scoped (5); the test progress bar is labelled by question, not step (6); notch counts come from data, with no `/8` string patch (7); the climb title is translated (13); the theme-color meta follows the in-app theme (14); the Done-screen glossary has audio (15); My words groups label the rung (11).

---

## 6. Content model (summary)

Full schema in CLAUDE.md §5. The main difference from English Ladder is that **target-language fields are named by language**, so there is no field called `en` holding Arabic:

| Field | Meaning |
|---|---|
| `ar` | Arabic (Fusha), fully vowelled, with `[[focus]]` markup |
| `tr` | Transliteration of `ar` |
| `eg` / `eg_tr` | Egyptian variant and its transliteration (optional) |
| `id` | Indonesian translation |
| `en` | English translation for the English UI (optional; falls back to `id`) |

UI-facing bilingual fields (`why`, `summary`, `description`, `note`, `tip`) keep English Ladder's `{ id, en }` shape.

Every lesson has `status: draft | reviewed`, and a reviewed lesson must have `review: { by, date, eg_by? }`. A lesson with Egyptian lines needs `eg_by` before it can be reviewed.

---

## 7. Visual components (v1)

All visuals follow English Ladder's illustration system (DESIGN §10). Six ship in v1:

| Visual | Rung | What it shows |
|---|---|---|
| **LetterForms** | Huruf 1 | A letter in its isolated, initial, medial and final forms, inside a real word that lights the position. Toggle to see dots added and removed across a shape family (ب ت ث ن ي). Non-joining letters show the gap they leave. |
| **WordJoiner** | Huruf 1 | Type or tap letters and watch them join into a word, with each letter's chosen form labelled underneath. A "lepas" (pull apart) control separates the word back into isolated letters. |
| **HarakatBuilder** | Huruf 1–2 | One letter, then pick a mark (fathah, kasrah, dhammah, sukun, syaddah, tanwin, mad). The syllable updates and plays. Shows where the mark sits (above or below) and its sound in transliteration. |
| **Makhraj** | Huruf 1–2 | A side view of the mouth and throat (an original, stylised section, not an anatomy diagram) with the place each sound is made. Pick two letters (ع and ء, ح and ه, ق and ك) to compare where each is produced. |
| **SunMoon** | Huruf 2 | *Al-* joined to a noun. With a moon letter, the lam is spoken; with a sun letter, the lam folds into the next letter and a syaddah appears. Uses the 14 + 14 letters as a sorted board. |
| **PlaceScene (Arabic)** | Easy 1 | English Ladder's table, box and ball, unchanged in drawing, with Arabic prepositions and sentences (الكرةُ تحتَ الطاولةِ). |

Easy 1 also uses **Agreement**, a light HTML visual: pick a noun and an adjective, and see the adjective take ة for a feminine noun and ال for a definite one. It is counted with the others; seven in total.

Later visuals (spec'd when their rung starts): **RootMachine** (one root poured into patterns), **ConjugationGrid**, **PluralPatterns**, **CaseEndings**.

---

## 8. Progress data

Same model as English Ladder (CLAUDE.md §7.2), with:
- storage key `arabic-ladder:v1`
- a `capstones` record: `{ [rungId]: { reading?: done-date, dialogue?: done-date } }`
- `placement: { score, total, date, result: 'easy-1' | 'huruf-2' | 'huruf-1' }`
- settings: `uiLang`, `voice`, `rate`, `sfx`, `textSize`, `arabicSize`, `theme`, `motion`

---

## 9. Non-functional requirements

Same as English Ladder (performance, offline, WCAG 2.2 AA, 360 px phones, static hosting, privacy), plus:
- **Arabic rendering:** letters must join correctly in every component, including focus highlights inside a word and the spell-tile answer line. Harakat must not collide with the line above or below at any text size.
- **Bidirectional text:** Arabic never appears without `lang="ar" dir="rtl"`. Indonesian and transliteration never inherit RTL.
- **Audio weight:** recorded audio is lazy-loaded per lesson and cached by the service worker when played. A whole rung's audio stays under 8 MB.
- **Fonts:** Arabic faces subset to Arabic plus the Latin needed for transliteration; first lesson load under 200 KB of fonts.

---

## 10. Success measures

Tested with people, as for English Ladder:
- 5 true beginners finish Huruf 1–2 unaided; at least 4 of 5 then read 10 unseen vowelled words aloud correctly.
- 5 Qur'an readers take the placement check; it places at least 4 of 5 where they themselves agree they belong.
- Easy 1 testers score ≥ 75% on the rung test.
- A native Egyptian speaker rates every Ngobrol dialogue as natural.

---

## 11. Release plan

| Release | Contents |
|---|---|
| **v1.0-huruf** | App shell, all eleven rungs on the ladder, placement check, Huruf 1 and Huruf 2 complete with audio, five script visuals |
| **v1.0** | Easy 1 complete with audio, Agreement and PlaceScene (Arabic), Easy 1 reading and dialogue |
| v1.1 | Easy 2 + ConjugationGrid |
| v1.2 | Easy 3 + RootMachine |
| later | Medium and Hard rungs, one per release; letter tracing |

Huruf ships first because it stands alone: a complete script course is useful even before any grammar exists.

---

## 12. Decisions made

0. **Sequence approval:** a qualified Arabic teacher reviews §4 before any content beyond Easy 1 is written, and signs off each rung's topic list before its lessons are drafted.

1. **Dialect:** Egyptian, as the most widely understood spoken variety. Gulf recognition appears in Hard 2 only.
2. **Page direction:** the interface stays left-to-right (the UI is Indonesian); Arabic text is set right-to-left inside it. No mirrored app shell (CLAUDE.md §6).
3. **Transliteration scheme:** Indonesian-friendly academic style, based on the SKB Menteri Agama–Mendikbud 1987 tables (ts, ḥ, kh, dz, sy, ṣ, ḍ, ṭ, ẓ, ʿ, gh, ā ī ū). Authored in content, checked by a script.
4. **Script face:** Naskh, the style Indonesian Qur'an readers already know.
5. **Audio:** recorded first, browser speech as fallback.
6. **Reviewer:** an Arabic teacher or native speaker must review each lesson; an Egyptian speaker reviews every Egyptian line.

## 13. Open questions (not blocking v1)
- Who records the audio, and at what cost? Is one Egyptian voice (male or female) enough for v1, or one of each?
- Are open-licensed letter recordings (e.g. on Wikimedia Commons) good and consistent enough to use for Huruf, with attribution?
- Should a later update add a Qur'anic vocabulary track (the 300 most frequent Qur'anic words) as an optional side rung, given the audience?
