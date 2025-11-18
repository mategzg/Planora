# Planora

Marketing MVP for **Planora Full-Stack Preview (72-96h)** built with Next.js 14 (App Router) + TypeScript + Tailwind CSS. Target: tenant-rep office brokers in Miami (2k-20k ft). Includes dedicated routes (home, how-it-works, pricing, cases, FAQ, contact, gift), shared layout/nav, SEO metadata per page, and front-end-only forms with success states.

## Quick start

```bash
npm install
npm run dev
```

Next.js serves on port 3000 by default.

## npm scripts

- `npm run dev`: Next dev server with HMR.
- `npm run build`: production build (`next build`).
- `npm run start`: run the production build (`next start`).
- `npm run lint`: Next/ESLint flat config.
- `npm run typecheck`: strict TypeScript check.
- `npm run test`: Vitest + Testing Library (jsdom).
- `npm run check`: lint + typecheck + test + build.

## Quality pipeline (order)

1. `npm run typecheck`
2. `npm run lint`
3. `npm test`
4. `npm run build`

## Routes

- `/`: home with hero, offer details, process, pricing snapshot, gift and case teasers, quick FAQ, CTA.
- `/how-it-works`: 6-step timeline and QA checks.
- `/pricing`: launch tiers, add-ons, individual items, conditions, CTA.
- `/cases`: three demo cases with placeholders for plan/render/video.
- `/faq`: 11 Q/As beyond the mini FAQ.
- `/contact`: mock contact form + contact info.
- `/gift`: gift form (2 images in 48h) with mock success.

## Design system

- Colors: ink #0B0B0B, paper #FFFFFF, muted #8A8F98, accent teal #17C3CE, soft gray #F3F4F6, alert yellow #FFD447 (sparingly).
- Typography: Space Grotesk for headings, Inter for body, JetBrains Mono for numeric snippets (via `next/font`).
- Components: rounded cards (2xl/3xl), subtle borders/shadows, rounded-full buttons with hover lift (prefers-reduced-motion friendly).

## Testing

- Vitest + Testing Library with jest-dom extensions (`tests/setupTests.ts`).
- Current coverage: home hero promise/CTA and pricing tiers on `/pricing` (`tests/App.test.tsx`).

## Environment variables

- None required. Add `NEXT_PUBLIC_`-prefixed vars to `.env.example` if a future integration is added.

## Notes

- Forms are front-end only; submissions show a success UI but do not post to a backend.
- Each page exports Metadata for title/description/OG/canonical; layout sets global fonts and defaults.
- Run the quality pipeline before shipping to keep gates green.
