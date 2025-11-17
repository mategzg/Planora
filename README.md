# Planora

Marketing MVP for **Planora Full-Stack Preview (72-96h)** built with Vite + React + TypeScript + Tailwind CSS. Target: tenant-rep office brokers in Miami (2k-20k ft). Includes dedicated routes (home, how-it-works, pricing, cases, FAQ, contact, gift), shared layout/nav, and front-end-only forms with success states.

## Quick start

```bash
npm install
npm run dev
```

Vite defaults to port 5173; if busy it picks the next free one.

## npm scripts

- `npm run dev`: dev server with HMR.
- `npm run build`: production build (`tsc -b` + `vite build`).
- `npm run preview`: serve the built app.
- `npm run lint`: ESLint (flat config) with Prettier.
- `npm run typecheck`: strict TypeScript check.
- `npm run test`: Vitest + Testing Library (jsdom).
- `npm run check`: lint + typecheck + test (good for CI/pre-commit).

## Quality pipeline (order)

1. `npm run typecheck`
2. `npm run lint`
3. `npm test`
4. `npm run build`

## Routes

- `/`: home with hero, offer details, process, pricing snapshot, gift and case teasers, quick FAQ, CTA.
- `/how-it-works`: 6-step timeline and QA checks.
- `/pricing`: launch tiers, add-ons, individual items, conditions, CTA.
- `/cases`: two demo cases with placeholders for plan/render/video.
- `/faq`: 11 Q/As beyond the mini FAQ.
- `/contact`: mock contact form + contact info.
- `/gift`: gift form (2 images in 48h) with mock success.

## Design system

- Colors: ink #0B0B0B, paper #FFFFFF, muted #8A8F98, accent teal #17C3CE, soft gray #F3F4F6, alert yellow #FFD447 (sparingly).
- Typography: Space Grotesk for headings, Inter for body, JetBrains Mono for numeric snippets.
- Components: rounded cards (2xl/3xl), subtle borders/shadows, rounded-full buttons with hover lift (prefers-reduced-motion friendly).

## Testing

- Vitest + Testing Library with jest-dom extensions (`src/setupTests.ts`).
- Current coverage: home hero promise/CTAs and pricing tiers on `/pricing` (`tests/App.test.tsx`).

## Environment variables

- Create `.env` from `.env.example` if needed; frontend vars must prefix `VITE_`.

## Notes

- Forms are front-end only; submissions show success UI but do not post to a backend.
- SEO helper sets title/description/canonical/OG placeholders per route.
- Run the quality pipeline before shipping to keep gates green.
