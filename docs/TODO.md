# TODO

## Item 0 Verify environment
- [x] Check package.json scripts for typecheck, lint, test, build
- [x] Run each script once and capture output in LOG.md
- [ ] Add Git hook/CI note to enforce pipeline order

## Item 1 Base structure
- [x] Confirm src/, public/, docs/, tests/ exist
- [x] Create docs/PLAYBOOK.md, docs/TODO.md, docs/LOG.md
- [x] Validate Tailwind config and main CSS imports

## Item 2 Implement design system
- [x] Set primary color, typography (Inter/Space Grotesk/mono), radii, shadows
- [ ] Extract reusable button/card section components (optional polish)
- [ ] Add dark-mode tokens if needed later

## Item 3 Build core layout
- [x] Header/nav/footer shared Layout with CTA and active state
- [x] SEO helper component (title/description/canonical/OG)
- [ ] Add OG image asset once available

## Item 4 Implement Home page sections
- [x] Hero, proof, offering, process, who, pricing snapshot, gift teaser, cases teaser, quick FAQ, CTA
- [x] Include visual placeholders for future media
- [ ] Add scroll/anchor tests for nav links

## Item 5 Implement /how-it-works
- [x] Dedicated route with 6-step timeline and QA chips
- [x] Placeholder thumbnails for process visuals

## Item 6 Implement /pricing
- [x] Launch tiers (2k-20k ft), >20k quote, add-ons, individual items, conditions
- [ ] Add billing/terms FAQ snippet inside page (optional)

## Item 7 Implement /cases
- [x] Two demo cases with placeholders and bullet outcomes
- [ ] Add optional metrics or CTA per case

## Item 8 Implement /faq page
- [x] 10-12 questions/answers beyond home FAQ
- [ ] Add accordion interaction + aria-expanded (optional)

## Item 9 Implement /contact and /gift forms
- [x] Dedicated contact and gift routes with mock success state
- [ ] Add client-side validation states/tests

## Item 10 Add SEO/OG/accessibility
- [x] Per-route titles, descriptions, canonical, OG placeholder
- [ ] Run axe/lighthouse pass and log any fixes
- [ ] Add sitemap/robots when routes are ready

## Item 11 Run quality gates and update docs
- [x] Run typecheck, lint, test, build after changes
- [x] Update README and LOG with gate outcomes
- [ ] Automate LOG/README update step in CI checklist
