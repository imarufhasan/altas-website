# ATLAS / LMCS — Next.js Site

## Run korte (Setup)

```bash
npm install
npm run dev
```

Browser e open koro: http://localhost:3000

## Production build

```bash
npm run build
npm start
```

## Structure

- `app/` — every page (route). Each folder = one URL.
  - `/` Home
  - `/how-lmcs-works`
  - `/project-assessment`
  - `/project-drift`
  - `/delivery-confidence`
  - `/insights` (landing) and `/insights/all` (archive) and `/insights/[slug]` (article)
  - `/about`
  - `/contact`
  - `/legal/*` (Privacy, Terms, Cookie, Accessibility, Contact Notice)
- `components/` — reusable pieces used across pages: `Navbar`, `Footer`, `Button`, `PageHero`, `CTASection`, `SectionLabel`, `DomainCard`, `InsightCard`, `StepCard`, `Container`, `LegalPage`.
- `lib/nav.ts` — single source of truth for the top navigation + footer links. Change a link here and it updates everywhere.
- `lib/insights.ts` — all article/insight content, shared by Home, Insights, Insights archive, and the article detail page.

## Notes

- Every nav item and the "Contact Us" button in the header are real `next/link` links that route to their own page (top section fully clickable, as requested).
- Fonts use system serif/sans stacks (no external Google Fonts call), so the site works fully offline too.
