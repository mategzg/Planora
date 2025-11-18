# TODO

## Item 0 Scaffold Next.js
- [x] Initialize Next 14 App Router with TS, Tailwind, ESLint
- [x] Remove Vite-specific entry points/config once migrated

## Item 1 Design system & layout
- [x] Port Tailwind tokens and globals to /app/globals.css
- [x] Wire next/font for Space Grotesk, Inter, JetBrains Mono
- [x] Build shared Header/Footer with centralized nav + CTA

## Item 2 Content & routing
- [x] Port home sections (hero, outputs, process, who, pricing snapshot, gift, cases, mini FAQ, CTA)
- [x] Port subpages: how-it-works, pricing, cases, FAQ, contact, gift
- [x] Move placeholders/media blocks to server components
- [x] Double-check anchor/CTA targets for smooth navigation

## Item 3 SEO & metadata
- [x] Add per-route metadata (title, description, OG, canonical to planora-teal.vercel.app)
- [ ] Consider sitemap/robots for deployment

## Item 4 Quality gates
- [x] Run npm run typecheck
- [x] Run npm run lint
- [x] Run npm run build (tests temporarily skipped)

## Item 5 Documentation
- [x] Update LOG.md with migration steps and gate outcomes
- [x] Keep README aligned with Next stack and scripts
