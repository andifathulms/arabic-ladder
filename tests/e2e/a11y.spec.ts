import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const routes = ['/', '/review/', '/words/', '/me/', '/settings/', '/about/'];

for (const scheme of ['light', 'dark'] as const) {
  for (const route of routes) {
    test(`axe: ${route} (${scheme})`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: scheme });
      // Light is the default theme; dark is a setting, so choose it explicitly.
      if (scheme === 'dark') {
        await page.addInitScript(() =>
          localStorage.setItem('arabic-ladder:v1', JSON.stringify({ schemaVersion: 1, settings: { theme: 'dark' } })),
        );
      }
      await page.goto(route);
      // Visit the See step too, so visuals are checked.
      if (/\/rung\/[a-z0-9-]+\/\d{2}-/.test(route)) await page.getByRole('button', { name: /^Lanjut/ }).click();
      await page.waitForTimeout(300);
      const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
      const serious = results.violations.filter((v) => v.impact === 'serious' || v.impact === 'critical');
      expect(serious.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`)).toEqual([]);
    });
  }
}
