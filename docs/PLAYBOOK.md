# Planora Frontend PLAYBOOK

## Master Checklist

- [x] 0. Verify environment and existing scripts (typecheck, lint, test, build) - scripts confirmed and gates run.
- [x] 1. Confirm base structure (src, public, docs, tests) and Tailwind setup - structure validated.
- [x] 2. Implement design system (colors, typography, spacing, layout components) - brand palette, fonts, spacing, buttons/cards.
- [x] 3. Build core layout (Header, Footer, PageContainer, basic SEO wrapper) - shared Layout with nav/CTA, footer, SEO helper.
- [x] 4. Implement Home page sections exactly as specified (see spec) - hero, what you get, process, pricing snapshot, gift teaser, cases teaser, quick FAQ, CTA.
- [x] 5. Implement /how-it-works with extended process details - dedicated route with 6 steps, QA chips, placeholders.
- [x] 6. Implement /pricing with tier table, add-ons and individual items - launch tiers, add-ons, individual items, conditions page.
- [x] 7. Implement /cases with 2 demo cases and image placeholders - dedicated cases route with placeholders and bullets.
- [x] 8. Implement /faq with 10-12 key questions and answers - full FAQ route with 11 Q/As.
- [x] 9. Implement /contact (and /gift if separate) with forms and validations - contact and gift routes with mock success states.
- [x] 10. Add basic SEO metadata, Open Graph tags and accessibility pass - per-route title/description/canonical + OG placeholders, focusable CTAs.
- [x] 11. Run full quality gates and update README + /docs/LOG.md with final status - latest typecheck/lint/test/build passing.

## Voice & positioning

- Tone: concise, confident, B2B consultative. Speak to the broker, not the tenant.
- Proof-first: lead with speed (72-96h), fit (2k-20k sq ft), and Miami submarkets (Doral, Blue Lagoon, Coral Gables, Brickell, Kendall, South Broward).
- CTA: "Schedule 15 min Call" primary; "See how it works / See pricing" secondary.

## Design system

- Palette: ink, paper, muted, accent teal, soft backgrounds, alert yellow sparingly.
- Typography: Space Grotesk for headings, Inter for body, JetBrains Mono for numbers.
- Components: rounded cards (rounded-2xl/3xl), subtle borders/shadows, rounded-full buttons with hover lift.

## Information architecture

1. Hero + proof strip
2. Offering grid
3. Process (timeline)
4. Who it's for
5. Pricing snapshot
6. Gift teaser
7. Cases teaser
8. Quick FAQ
9. CTA/contact strip

## Workflow (PDCA)

- Plan: define the next task; align with checklist.
- Do: implement with Tailwind/React components and strict TS.
- Check: run npm run typecheck, npm run lint, npm test, npm run build in that order.
- Act: fix issues, log outcomes in docs/LOG.md, update TODO.

## Content guardrails

- Keep everything specific to Miami and 2k-20k sq ft tenant-rep deals.
- Lead with speed and the fixed preview scope.
- Forms are front-end only until a backend is wired.
