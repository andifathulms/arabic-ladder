# Upstream: English Ladder

Arabic Ladder started as a copy of [English Ladder](https://github.com/andifathulms/english-ladder) at commit **`58eab3c`** ("feat(speech): clearer voice selection, female by default"). It is not a fork on GitHub and shares no git history.

Every file copied from English Ladder is listed below:

- **verbatim**: identical to English Ladder at `58eab3c`. When English Ladder changes it, copy the new version across and run the tests.
- **adapted**: copied, then changed for Arabic. Port English Ladder fixes by hand and add a line to the log below.
- **replaced**: removed, with an Arabic counterpart (or nothing) in its place.

Regenerate the table after adapting files:

```bash
git clone https://github.com/andifathulms/english-ladder /tmp/el && git -C /tmp/el checkout 58eab3c
node scripts/upstream.mjs /tmp/el
```

Once both apps have been stable for a month after v1.0, the verbatim set is extracted into a shared `ladder-core` package (CLAUDE.md §12). Not before.

## Files

<!-- table -->
| English Ladder file | Status | Arabic Ladder counterpart |
|---|---|---|
| `.eslintrc.json` | verbatim | |
| `.github/workflows/deploy.yml` | verbatim | |
| `.gitignore` | verbatim | |
| `.prettierignore` | verbatim | |
| `.prettierrc` | verbatim | |
| `app/about/page.tsx` | verbatim | |
| `app/font-files/AtkinsonNext-Italic-Variable.woff2` | verbatim | |
| `app/font-files/AtkinsonNext-Variable.woff2` | verbatim | |
| `app/font-files/README.md` | verbatim | |
| `app/fonts.ts` | verbatim | |
| `app/layout.tsx` | adapted | |
| `app/me/page.tsx` | verbatim | |
| `app/not-found.tsx` | verbatim | |
| `app/page.tsx` | verbatim | |
| `app/review/page.tsx` | adapted | |
| `app/rung/[rung]/[lesson]/page.tsx` | adapted | |
| `app/rung/[rung]/page.tsx` | verbatim | |
| `app/rung/[rung]/read/page.tsx` | verbatim | |
| `app/rung/[rung]/test/page.tsx` | adapted | |
| `app/settings/page.tsx` | verbatim | |
| `app/themeScript.ts` | adapted | |
| `app/words/page.tsx` | adapted | |
| `components/AboutView.tsx` | adapted | |
| `components/MeView.tsx` | verbatim | |
| `components/ProgressProvider.tsx` | verbatim | |
| `components/SettingsView.tsx` | adapted | |
| `components/WordsView.tsx` | adapted | |
| `components/check/CheckItemView.tsx` | adapted | |
| `components/check/CheckStep.tsx` | adapted | |
| `components/check/ClimbMoment.tsx` | verbatim | |
| `components/check/OptionPill.tsx` | verbatim | |
| `components/check/ReviewRunner.tsx` | adapted | |
| `components/check/TestRunner.tsx` | adapted | |
| `components/check/TileTray.tsx` | verbatim | |
| `components/check/WhyLine.tsx` | verbatim | |
| `components/ladder/ContinueCard.tsx` | verbatim | |
| `components/ladder/HomeView.tsx` | adapted | |
| `components/ladder/LadderRail.tsx` | verbatim | |
| `components/ladder/LessonRow.tsx` | verbatim | |
| `components/ladder/LessonStrip.tsx` | verbatim | |
| `components/ladder/NotchBar.tsx` | verbatim | |
| `components/ladder/RungDetail.tsx` | verbatim | |
| `components/ladder/RungView.tsx` | verbatim | |
| `components/ladder/WeekStrip.tsx` | verbatim | |
| `components/lesson/BottomActionBar.tsx` | verbatim | |
| `components/lesson/ExplainToggle.tsx` | replaced | components/lesson/LessonTopToggles.tsx |
| `components/lesson/LessonPlayer.tsx` | adapted | |
| `components/lesson/PairCard.tsx` | verbatim | |
| `components/lesson/PlayButton.tsx` | verbatim | |
| `components/lesson/Prose.tsx` | verbatim | |
| `components/lesson/ReadingView.tsx` | verbatim | |
| `components/lesson/Sentence.tsx` | verbatim | |
| `components/lesson/StepBar.tsx` | verbatim | |
| `components/lesson/StepLabel.tsx` | verbatim | |
| `components/lesson/StrandCards.tsx` | verbatim | |
| `components/lesson/steps.ts` | verbatim | |
| `components/ui/AppHeader.tsx` | verbatim | |
| `components/ui/AppNav.tsx` | adapted | |
| `components/ui/AppShell.tsx` | verbatim | |
| `components/ui/Badge.tsx` | verbatim | |
| `components/ui/Contours.tsx` | replaced | components/ui/Lattice.tsx |
| `components/ui/Icon.tsx` | verbatim | |
| `components/ui/Mark.tsx` | adapted | |
| `components/ui/PageShell.tsx` | verbatim | |
| `components/ui/ProgressRing.tsx` | verbatim | |
| `components/ui/Segmented.tsx` | verbatim | |
| `components/ui/TierDot.tsx` | verbatim | |
| `components/ui/Toggle.tsx` | verbatim | |
| `components/ui/tier.ts` | verbatim | |
| `components/useSpeech.ts` | verbatim | |
| `components/visuals/NearFar.tsx` | replaced | (removed: English only) |
| `components/visuals/NounBuilder.tsx` | replaced | (removed: English only) |
| `components/visuals/PlaceScene.tsx` | verbatim | |
| `components/visuals/VisualStage.tsx` | adapted | |
| `components/visuals/nounLogic.ts` | replaced | (removed: English only) |
| `components/visuals/placeLogic.ts` | verbatim | |
| `components/visuals/registry.ts` | adapted | |
| `components/visuals/types.ts` | verbatim | |
| `components/visuals/useRoving.ts` | verbatim | |
| `lib/basePath.ts` | adapted | |
| `lib/check/draw.ts` | verbatim | |
| `lib/check/grade.ts` | verbatim | |
| `lib/check/leitner.ts` | verbatim | |
| `lib/check/random.ts` | verbatim | |
| `lib/check/text.ts` | verbatim | |
| `lib/content/lint.ts` | adapted | |
| `lib/content/load.ts` | adapted | |
| `lib/content/schema.ts` | adapted | |
| `lib/content/sections.ts` | verbatim | |
| `lib/i18n/en.ts` | adapted | |
| `lib/i18n/id.ts` | adapted | |
| `lib/i18n/index.ts` | verbatim | |
| `lib/markup.ts` | verbatim | |
| `lib/progress/constants.ts` | adapted | |
| `lib/progress/defaults.ts` | verbatim | |
| `lib/progress/derive.ts` | verbatim | |
| `lib/progress/migrations.ts` | adapted | |
| `lib/progress/store.ts` | verbatim | |
| `lib/progress/types.ts` | verbatim | |
| `lib/routes.ts` | verbatim | |
| `lib/speech/sfx.ts` | verbatim | |
| `lib/speech/speak.ts` | verbatim | |
| `lib/sw.ts` | verbatim | |
| `lib/types.ts` | adapted | |
| `lib/visualIds.ts` | adapted | |
| `next.config.mjs` | verbatim | |
| `package-lock.json` | adapted | |
| `package.json` | adapted | |
| `playwright.config.ts` | verbatim | |
| `postcss.config.mjs` | verbatim | |
| `public/icons/icon-192.png` | verbatim | |
| `public/icons/icon-512.png` | verbatim | |
| `public/icons/icon-maskable-512.png` | verbatim | |
| `public/icons/icon.svg` | adapted | |
| `public/manifest.webmanifest` | adapted | |
| `public/sw.js` | adapted | |
| `scripts/content-check.ts` | adapted | |
| `scripts/make-icons.mjs` | adapted | |
| `scripts/serve.mjs` | verbatim | |
| `styles/globals.css` | verbatim | |
| `styles/tokens.css` | verbatim | |
| `tailwind.config.ts` | verbatim | |
| `tests/e2e/a11y.spec.ts` | adapted | |
| `tests/e2e/flows.spec.ts` | replaced | tests/e2e/flows.spec.ts (Arabic flows) |
| `tests/e2e/helpers.ts` | verbatim | |
| `tests/setup.ts` | verbatim | |
| `tests/unit/Sentence.test.tsx` | verbatim | |
| `tests/unit/check-ui.test.tsx` | verbatim | |
| `tests/unit/check.test.ts` | verbatim | |
| `tests/unit/content.test.ts` | adapted | |
| `tests/unit/i18n.test.ts` | verbatim | |
| `tests/unit/markup.test.ts` | verbatim | |
| `tests/unit/progress.test.ts` | adapted | |
| `tests/unit/speech.test.ts` | verbatim | |
| `tests/unit/tier.test.ts` | verbatim | |
| `tests/unit/visuals.test.tsx` | replaced | tests/unit/visuals.test.tsx (Arabic visuals) |
| `tsconfig.json` | verbatim | |
| `vitest.config.ts` | verbatim | |
<!-- /table -->

## Port log

| Date | English Ladder commit | Files | Note |
|---|---|---|---|
| 2026-10-15 | `58eab3c` | all | Initial copy |
