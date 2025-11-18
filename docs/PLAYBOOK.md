# Planora  Frontend PLAYBOOK

## Master Checklist

- [x] 0. Scaffold a fresh Next.js 14 project (App Router, TS, Tailwind, ESLint)
- [x] 1. Port Tailwind tokens (ink/paper/muted/accent/soft/alert) and globals
- [x] 2. Install and configure fonts via next/font (Space Grotesk, Inter, JetBrains Mono)
- [x] 3. Create global layout in /app/layout.tsx with Header + Footer
- [x] 4. Port ALL components from Vite project to Next (shared placeholders/cards/forms)
- [x] 5. Rebuild routing: Home, How it Works, Pricing, Cases, FAQ, Contact, Gift
- [x] 6. Implement SEO per route via export const metadata (title/description/canonical/OG)
- [x] 7. Set SSG (default App Router) and avoid forcing CSR unnecessarily
- [x] 8. Replace all react-router patterns with next/link + server components
- [x] 9. Verify internal anchors/scroll + CTA navigation
- [x] 10. Re-create all section placeholders and cards as server components
- [x] 11. Run quality gates: typecheck, lint, build (tests temporarily skipped by instruction)
- [x] 12. Update PLAYBOOK/TODO/LOG with migration results and commands run

## Voice & positioning
- Tone: concise, confident, B2B consultative. Speak to the broker, not the tenant.
- Proof-first: speed (72-96h), fit (2k-20k sq ft), Miami submarkets (Doral, Blue Lagoon, Coral Gables, Brickell, Kendall, South Broward).
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
- Do: implement with Tailwind/Next components and strict TS.
- Check: run npm run typecheck, npm run lint, npm run build (tests temporarily paused).
- Act: fix issues, log outcomes in docs/LOG.md, update TODO.
