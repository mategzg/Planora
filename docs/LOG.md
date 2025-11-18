# LOG

## 2025-11-17 11:10 Session start
- Created PLAYBOOK, TODO, LOG scaffolds; verified npm scripts (typecheck, lint, test, build).
- Quality gates: not run (initial setup).

## 2025-11-17 11:29 Home experience & brief form
- Added hero, proof, offering, outcomes, process, CTA, FAQ, and mock brief/contact/gift form with success state; nav anchors; Inter font; base SEO head tags.
- Quality gates: typecheck, lint, test, build (pass).

## 2025-11-17 11:33 Base structure & docs alignment
- Confirmed src/public/docs/tests exist; validated Tailwind config and index.css imports; updated PLAYBOOK/TODO; refreshed .env.example placeholder.
- Quality gates: typecheck, lint, test, build (pass).

## 2025-11-17 11:47 Launch pricing & conditions
- Added Launch pricing tiers with add-ons, individual items, public conditions, gift offer, and pricing anchors/tests.
- Quality gates: typecheck, lint, test, build (pass).

## 2025-11-17 13:11 Case snapshots and nav cleanup
- Added caseStudies data and Case snapshots section; switched header/footer nav to on-page anchors; removed non-ASCII artifacts; aligned tests.
- Quality gates: typecheck, lint, test, build (pass).

## 2025-11-17 13:14 Docs alignment & gates
- Updated PLAYBOOK/TODO to reflect home pricing/case status and cleaned LOG formatting; reran full pipeline after doc edits.
- Quality gates: typecheck, lint, test, build (pass).

## 2025-11-17 13:18 Base structure checklist confirmation
- Reconfirmed src/public/docs/tests present; PLAYBOOK/TODO/LOG exist and Tailwind index imports validated.
- Commands: npm run typecheck, npm run lint, npm test, npm run build (latest run pass).
- Quality gates: typecheck, lint, test, build (pass).

## 2025-11-17 13:19 Public launch pricing tag
- Labeled pricing card as 'Launch pricing (public)' to keep positioning narrow for brokers and avoid implying internal tiers; reran full pipeline.
- Quality gates: typecheck, lint, test, build (pass).

## 2025-11-17 13:20 Public conditions refresh
- Updated public pricing conditions to highlight one revision, SketchUp on request, no rush option, no Revit, 50/50 terms, US$ currency, and gift terms; reran full pipeline after CRLF cleanup.
- Quality gates: typecheck, lint, test, build (pass).
## 2025-11-17 13:55 Gift offer copy + checkbox
- Updated public gift offer text (AI-assisted images, one/company, zero revisions, watermarked, 48h, use-case) and clarified checkbox terms; kept mock success state only.
- Commands: npm run lint, npm test -- --watch=false, npm run build.
- Quality gates: lint, test, build (pass).

## 2025-11-17 15:31 Multi-route rebuild
- Rebuilt App with multi-route architecture (home, how-it-works, pricing, cases, FAQ, contact, gift) plus shared Layout nav config, SEO helper, media placeholders, and CTA mailto links.
- Added dedicated contact and gift forms with mock success states; refreshed case studies and pricing conditions; cleaned tests to cover hero CTA and pricing tiers.
- Commands: npm run typecheck, npm run lint, npm test, npm run build (all pass).
## 2025-11-17 15:34 Final QA pass
- Replaced stray em-dashes with ASCII, re-ran Prettier, lint, tests, and build to confirm clean pipeline.
- Commands: npm run lint, npm test, npm run build (pass).
## 2025-11-17 15:39 ASCII cleanup
- Removed non-ASCII replacement characters in FAQ copy, reran Prettier, lint, tests, and build to keep pipeline green.
- Commands: npx prettier -w src/App.tsx, npm run lint, npm test, npm run build.
## 2025-11-17 18:40 Next.js migration
- Migrated Vite SPA to Next.js 14 App Router with shared nav/header/footer, canonical base set to https://planora-teal.vercel.app, and centralized content data in lib/.
- Ported all pages/components to /app with next/link routing, adjusted Tailwind/PostCSS config to CJS, rewrote globals.css, and removed Vite artifacts.
- Commands: npm run typecheck; npm run lint; npm run build (tests skipped per instruction).
- Quality gates: typecheck OK, lint OK, build OK; test gate paused per user.
## 2025-11-18 Tailwind/CTA precision\n- Enforced en-dash ranges, ft notation, US$ pricing, and updated CTA mailto with contact fallback; refreshed pricing note and quote link.\n- Fixed hero/cases copy, alt labels, footer/header focus, and added gift honeypot + reCAPTCHA env placeholder.\n- Canonicals pointed to https://planora-testfit.vercel.app and CTA/email consistency across pages.\n- Commands: npm run typecheck; npm run lint; npm run build (tests skipped per user).\n- Quality gates: typecheck OK, lint OK, build OK; tests skipped per instruction.\n
