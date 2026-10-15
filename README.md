# Arabic Ladder

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
