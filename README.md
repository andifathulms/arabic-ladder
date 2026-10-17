# Arabic Ladder

> **Development has moved.** Arabic Ladder now lives in the Ladder monorepo, on the shared engine
> (`apps/arabic` in [english-ladder](https://github.com/andifathulms/english-ladder)). This repository
> is the deploy target only: the monorepo builds the app and pushes it to this repo's `gh-pages`
> branch, which GitHub Pages serves at <https://andifathulms.github.io/arabic-ladder/> (same URL,
> same progress storage). Please open issues and changes there. The code below is the last
> standalone version (`aedfae7`), kept for reference.

A calm, levelled Arabic course for Indonesian speakers, from the very first letter to reading unvowelled Arabic. Eleven rungs: **Huruf 1–2** (script), **Easy 1–3**, **Medium 1–3**, **Hard 1–3**. Fusha (Modern Standard Arabic) is the backbone; Egyptian Arabic is the spoken strand.

- `PRD.md`: what to build
- `DESIGN.md`: how it looks and feels
- `CLAUDE.md`: how to build it
- `UPSTREAM.md`: which files came from English Ladder

## Origin

Arabic Ladder is a sibling of [English Ladder](https://github.com/andifathulms/english-ladder). It began as a copy of English Ladder at commit **`58eab3c`**, with a fresh git history, and was then adapted for Arabic.

## Develop

```bash
npm ci
npm run dev             # dev server; shows drafts
npm run build           # content:check, then static export to ./out
npm run preview         # serve ./out
npm run test            # unit tests
npm run test:e2e        # Playwright (build first)
```

Progress lives only in the browser (`localStorage`, key `arabic-ladder:v1`). The site is a static export deployed to GitHub Pages by `.github/workflows/deploy.yml`.

## Content status

All lessons are **drafts** written with AI help. They must be reviewed by an Arabic teacher or native speaker (and Egyptian lines by an Egyptian speaker) before they are marked `reviewed`. The deployed site shows drafts, each with a Draft badge.

## Audio

Every Arabic string is keyed by `sha1(normalise(text) + '|' + variety)[0:12]` and played from `public/audio/<key>-<hash>.mp3` when a recording exists; otherwise the browser's Arabic voice is used (`ar-EG` for Egyptian, `ar-SA` then any `ar-*` for Fusha), and play buttons hide where there is neither.

```bash
npm run audio:list > recordings.csv   # strings without a recording: key,variety,text,where
# the voice actor returns one file per row, named <key>.wav, into ./recordings
npm run audio:ingest                  # trim, −16 LUFS, mono 48 kbps MP3, update the manifest (needs ffmpeg)
```

Optional word timings for the speaking highlight: `recordings/<key>.words.json`, an array of word start times in milliseconds. Until recordings exist, `content/audio/fallback.yaml` accepts the browser-speech fallback for drafts.
