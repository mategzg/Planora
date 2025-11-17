import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { Layout, type NavItem } from './components/Layout'

const SITE_URL = 'https://planora.miami'
const primaryCta =
  'mailto:planora.testfitgmail.com?subject=Full-Stack%20Preview%20%5Bft%20range%5D%20%5BSubmarket%5D%20%5BTarget%20date%5D&body=Broker%20name:%0ACompany:%0AFt%20range:%0ASubmarket:%0ATimeline:%0A'

const navItems: NavItem[] = [
  { label: 'How it works', to: '/how-it-works' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Cases', to: '/cases' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Gift', to: '/gift' },
  { label: 'Contact', to: '/contact' },
]

const proofPoints = [
  {
    label: 'Delivery',
    value: '72-96 h',
    detail: 'Calendar hours from intake completion to preview drop-off.',
  },
  {
    label: 'Scope',
    value: '2k-20k ft',
    detail: 'Doral, Blue Lagoon, Coral Gables, Brickell, Kendall, South Broward.',
  },
  {
    label: 'Built for',
    value: 'Tenant-rep brokers',
    detail: 'Decision-ready visuals to help tenants compare options fast.',
  },
]

const offeringItems = [
  {
    title: 'Test-fit option',
    description:
      'One clear layout with basic ratios, adjacencies, and notes for tenant reps and their clients.',
  },
  {
    title: 'Clean 2D plan + section/axo',
    description:
      'A readable plan and one simple section or axo you can drop into decks and emails.',
  },
  {
    title: 'Two still images',
    description: 'Tenant-friendly stills that show space, light, and mood without overselling.',
  },
  {
    title: '60-second video',
    description:
      'A short walkthrough tailored to how brokers actually pitch: email, calls, landlord updates.',
  },
]

const steps = [
  {
    title: 'Brief & upload',
    detail: 'Share the shell (DWG/PDF/JPG), ft range, headcount, and basic use.',
  },
  {
    title: 'Pre-flight call (T+0 h)',
    detail: 'A 15-minute call to align on ratios, risks, style, and timing; SLA starts.',
  },
  { title: 'Test-fit (T+36-48 h)', detail: 'One layout option with basic ratios and notes.' },
  {
    title: 'Renders (T+48-72 h)',
    detail: 'Two stills aligned with the test-fit and your audience.',
  },
  { title: 'Video (T+72-96 h)', detail: 'A 60-second walkthrough edited for real broker use.' },
  { title: 'One revision & delivery', detail: 'One round of changes included, then final files.' },
]

const qaChips = ['Layout', 'Ratios & ADA (macro)', 'Graphics & Naming']

const pricingTiers = [
  { range: '2-5k ft', price: 'US$ 1,000', note: 'Launch' },
  { range: '5-10k ft', price: 'US$ 1,300', note: 'Launch' },
  { range: '10-15k ft', price: 'US$ 1,700', note: 'Launch' },
  { range: '15-20k ft', price: 'US$ 2,100', note: 'Launch' },
  { range: '20k+ ft', price: 'Request a quote', note: 'Scope review' },
]

const pricingConditions = [
  'Launch pricing (public) for Miami tenant-rep office previews (2k-20k ft); >20k by quote.',
  'Scope: 1 test-fit, 1 clean 2D plan (PDF A3), 1 section/axonometric, 2 JPG stills, 1x60s MP4, schematic only.',
  'One revision included; SketchUp 3D model available on request; no Revit export.',
  'Delivery window 72-96h from intake completion; no 48h rush option in public offer.',
  'Payment: 50/50 (deposit + delivery). Currency always shown as US$.',
  'Not for construction or permitting; tenant-facing and landlord-ready preview materials.',
  'File formats: PDF A3, DWG, 2x JPG stills, 1x MP4 video with subtle brand overlay.',
]

const addOns = [
  {
    title: '+1 test-fit option',
    price: 'US$ 180 (Launch)',
    detail: 'Adds another scenario for headcount or layout.',
  },
  {
    title: '+1 render',
    price: 'US$ 400',
    detail: 'Additional still image (interior or interior/exterior) at Launch quality.',
  },
  {
    title: '+30s of extra video',
    price: 'US$ 800',
    detail: 'Adds 30 seconds of camera moves to the MP4 deliverable.',
  },
]

const individualItems = [
  { title: 'Test-fit only', price: 'US$ 0.12/ft (min US$ 600)' },
  { title: 'Single render', price: 'US$ 400' },
  { title: '60-second video only', price: 'US$ 1,000' },
]

const caseStudies = [
  {
    eyebrow: 'Demo - 3k ft - Delivered in 72 h',
    title: 'Suburban office for a tech tenant',
    body: 'One test-fit option focused on hybrid work.',
    bullets: [
      'Clean 2D + axo for landlord updates.',
      'Two stills + 60-second video for tenant and landlord.',
    ],
  },
  {
    eyebrow: 'Demo - 14k ft - Delivered in 72 h',
    title: 'Multi-tenant floor for a finance client',
    body: 'Single option aligned with target ratios.',
    bullets: [
      'Clean 2D + section for internal review.',
      'Two stills + 60-second video for the leasing team.',
    ],
  },
  {
    eyebrow: 'Demo - 8k ft - Delivered in 84 h',
    title: 'Hybrid floorplate for a growth tenant',
    body: 'Balanced focus rooms + open plan for Miami corridors.',
    bullets: [
      'Test-fit aligned to headcount and ratios.',
      'Placeholder stills + 60s walkthrough for landlord/tenant.',
    ],
  },
]

const quickFaqs = [
  {
    question: 'What do I need to provide?',
    answer:
      'Shell plan if available (DWG/PDF/JPG), ft range, headcount, basic use. Brand guidelines optional.',
  },
  {
    question: 'When does the 72-96h timeline start?',
    answer: 'Once we confirm the brief on a quick pre-flight call and have all inputs.',
  },
  {
    question: "What's included in the price?",
    answer:
      'One test-fit, clean 2D plan + section/axo, two stills, 60-second video, and one revision.',
  },
  {
    question: 'Is this for construction?',
    answer: 'No. All outputs are schematic only-no permit/seal.',
  },
]

const faqs = [
  {
    question: 'What inputs do you need to start?',
    answer:
      'Shell (DWG/PDF/JPG) if available, ft range, headcount, basic use, and any style cues. If no shell, we use a generic footprint to move fast.',
  },
  {
    question: 'When does the 72-96h SLA start?',
    answer:
      'After the pre-flight call confirms the brief and files. If inputs are missing, the SLA pauses until we have them.',
  },
  {
    question: 'How many revisions are included?',
    answer: 'One round of revisions after the first drop-off is included.',
  },
  {
    question: 'How do you price footage?',
    answer: 'Public Launch tiers cover 2k-20k ft. >20k ft is quoted after a quick scope review.',
  },
  {
    question: 'Can you work under NDA?',
    answer: 'Yes. NDA available on request. Intake materials stay confidential.',
  },
  {
    question: 'How can I reuse the outputs?',
    answer:
      'They are tenant-facing and landlord-ready. Use stills and video in emails, listings, LOIs, and internal decks.',
  },
  {
    question: 'Is this for construction or permitting?',
    answer: 'No. Schematic only-no permit/seal, no MEP, no CD set.',
  },
  {
    question: 'Which submarkets do you focus on?',
    answer:
      'Doral, Blue Lagoon, Coral Gables, Brickell, Kendall, and South Broward. Other Miami areas on request.',
  },
  {
    question: 'Do you offer add-ons?',
    answer: 'Yes: extra test-fit, extra render, and +30s video as listed on the pricing page.',
  },
  { question: 'How is payment handled?', answer: '50/50 (deposit + delivery), invoiced in US$.' },
  { question: 'Can I request a SketchUp model?', answer: 'Yes, on request. No Revit export.' },
]

const submarkets = [
  'Doral',
  'Blue Lagoon',
  'Coral Gables',
  'Brickell',
  'Kendall',
  'Broward South',
  'Other',
]
const ftRanges = ['2-5k ft', '5-10k ft', '10-15k ft', '15-20k ft', '20k+ ft']
const giftStyles = ['Modern Minimal', 'Tech Chic', 'Warm Contemporary']

function Seo({ title, description, path }: { title: string; description: string; path: string }) {
  useEffect(() => {
    document.title = title

    const setNamedMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('name', name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    const setPropertyMeta = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('property', property)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    const setLink = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`)
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', rel)
        document.head.appendChild(link)
      }
      link.setAttribute('href', href)
    }

    setNamedMeta('description', description)
    setPropertyMeta('og:title', title)
    setPropertyMeta('og:description', description)
    setPropertyMeta('og:image', `${SITE_URL}/og-planora.png`)
    setLink('canonical', `${SITE_URL}${path}`)
  }, [title, description, path])

  return null
}

function MediaPlaceholder({ label, aspect = 'aspect-[16/9]' }: { label: string; aspect?: string }) {
  return (
    <div
      className={`${aspect} relative overflow-hidden rounded-2xl border border-accent/40 bg-soft shadow-inner`}
    >
      <div className="absolute inset-0 grid place-items-center text-sm font-semibold text-muted">
        <span className="rounded-full bg-white/80 px-3 py-1 text-ink shadow">{label}</span>
      </div>
    </div>
  )
}
function HomePage() {
  return (
    <div className="space-y-16">
      <Seo
        title="Planora | Full-Stack office previews in 72-96 h for Miami brokers"
        description="Full-Stack office previews for tenant-rep brokers in Miami: one test-fit, clean 2D, two stills, and a 60-second video delivered in 72-96 hours for 2k-20k ft deals."
        path="/"
      />

      <section className="grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            For office tenant-rep brokers - 2k-20k ft in Miami
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Close faster with a Full-Stack Preview in 72-96 h
          </h1>
          <p className="max-w-2xl text-lg text-muted">
            One fixed-scope package with a test-fit, clean 2D, two stills, and a 60-second
            video-built to move mid-ticket office deals in Miami's key submarkets.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={primaryCta}
              className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-ink shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Schedule 15 min Call
            </a>
            <Link
              to="/how-it-works"
              className="rounded-full border border-accent/60 px-5 py-3 text-sm font-semibold text-ink transition duration-200 hover:-translate-y-0.5 hover:bg-paper hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              See how it works
            </Link>
          </div>
          <p className="text-sm text-muted">
            Not for construction. No permit/seal. Schematic only.
          </p>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {proofPoints.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-paper p-4 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {item.label}
                </p>
                <p className="mt-2 text-xl font-semibold text-ink">{item.value}</p>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <MediaPlaceholder label="Demo - Full-Stack Preview 60s" />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-14 w-14 rounded-full bg-ink/70 text-paper shadow-lg transition duration-200">
              <svg viewBox="0 0 24 24" fill="none" className="h-full w-full p-4">
                <path d="M8 5v14l11-7-11-7Z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="what-you-get" className="space-y-4">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Outputs</p>
          <h2 className="text-2xl font-semibold sm:text-3xl">What you get in 72-96 hours</h2>
          <p className="max-w-3xl text-muted">One Full-Stack Preview. Four deal-ready outputs.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {offeringItems.map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-slate-200 bg-paper p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </article>
          ))}
        </div>
        <p className="text-sm text-muted">
          Formats: PDF (A3), DWG, 2 JPG, 1 MP4 - Not for construction. No permit/seal.
        </p>
      </section>

      <section id="how-it-works" className="space-y-6">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Process</p>
          <h2 className="text-2xl font-semibold sm:text-3xl">How the Full-Stack Preview works</h2>
          <p className="max-w-3xl text-muted">Six steps. Your SLA starts at the pre-flight call.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-paper p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-ink">
                  {idx + 1}
                </span>
                Step {idx + 1}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.detail}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {qaChips.map((chip) => (
            <span
              key={chip}
              className="rounded-full bg-ink px-3 py-1 text-xs font-semibold text-paper"
            >
              {chip}
            </span>
          ))}
        </div>
      </section>

      <section id="who" className="space-y-4">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Who it's for
          </p>
          <h2 className="text-2xl font-semibold sm:text-3xl">Who it's for</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-paper p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Tenant-rep office brokers</h3>
            <p className="mt-2 text-sm text-muted">
              Decision-ready visuals to help tenants compare options quickly.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-paper p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Leasing teams & landlords</h3>
            <p className="mt-2 text-sm text-muted">
              Refresh listings and cut days on market in key Miami submarkets.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-paper p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Mid-ticket office deals</h3>
            <p className="mt-2 text-sm text-muted">
              2k to 20k ft in Doral, Blue Lagoon, Coral Gables, Brickell, Kendall, South Broward.
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="space-y-4">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Pricing</p>
          <h2 className="text-2xl font-semibold sm:text-3xl">Pricing for 2k-20k ft offices</h2>
          <p className="max-w-3xl text-muted">
            Fixed-scope pricing by square footage. One package, no hidden extras.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.range}
              className="rounded-2xl border border-slate-200 bg-paper p-5 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Launch</p>
              <p className="text-lg font-semibold">{tier.range}</p>
              <p className="text-2xl font-bold text-ink">{tier.price}</p>
              <p className="text-sm text-muted">{tier.note}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted">
          One revision included - SketchUp model on request - 50/50 payment - No rush - No Revit.
        </p>
        <Link
          to="/pricing"
          className="inline-flex w-fit rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
        >
          See full pricing & add-ons
        </Link>
      </section>

      <section id="gift" className="space-y-3 rounded-3xl bg-ink px-6 py-8 text-paper shadow-xl">
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Gift</p>
          <h2 className="text-2xl font-semibold sm:text-3xl">Try us with 2 images in 48 hours</h2>
        </div>
        <p className="max-w-3xl text-soft">
          Have a live deal or a listing to refresh? Share a few details and we'll send two
          mid-quality images aligned with your style, free of charge.
        </p>
        <ul className="grid gap-2 sm:grid-cols-3">
          <li className="text-sm text-soft">One per company.</li>
          <li className="text-sm text-soft">No revisions.</li>
          <li className="text-sm text-soft">Watermark included.</li>
        </ul>
        <Link
          to="/gift"
          className="inline-flex w-fit rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
        >
          Get 2 images in 48 h
        </Link>
      </section>

      <section id="cases" className="space-y-4">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Cases</p>
          <h2 className="text-2xl font-semibold sm:text-3xl">
            See a Full-Stack Preview in context
          </h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {caseStudies.slice(0, 2).map((cs) => (
            <article
              key={cs.title}
              className="group space-y-3 rounded-2xl border border-slate-200 bg-paper p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {cs.eyebrow}
              </p>
              <h3 className="text-xl font-semibold text-ink">{cs.title}</h3>
              <p className="text-sm text-muted">{cs.body}</p>
              <MediaPlaceholder label="Placeholder - plan + axo + still" aspect="aspect-[4/3]" />
              <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
                {cs.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <Link
                to="/cases"
                className="inline-flex w-fit rounded-full border border-accent px-4 py-2 text-sm font-semibold text-ink transition duration-200 hover:-translate-y-0.5 hover:bg-accent hover:text-ink"
              >
                View details
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section id="quick-faq" className="space-y-4">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Quick answers
          </p>
          <h2 className="text-2xl font-semibold sm:text-3xl">Quick answers for busy brokers</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {quickFaqs.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-slate-200 bg-paper p-5 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">FAQ</p>
              <h3 className="mt-1 text-lg font-semibold text-ink">{item.question}</h3>
              <p className="mt-2 text-sm text-muted">{item.answer}</p>
            </div>
          ))}
        </div>
        <Link
          to="/faq"
          className="inline-flex w-fit rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
        >
          See full FAQ
        </Link>
      </section>

      <section
        id="cta"
        className="overflow-hidden rounded-3xl bg-ink px-8 py-10 text-paper shadow-xl"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Next step
            </p>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Tell us about the deal and timeline
            </h2>
            <p className="max-w-2xl text-sm text-soft">
              Share the submarket, ft range, and key dates. We will tell you if a Full-Stack Preview
              fits and when we can deliver.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={primaryCta}
              className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-ink shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Schedule 15 min Call
            </a>
            <a
              href="mailto:planora.testfitgmail.com"
              className="rounded-full border border-accent/40 bg-transparent px-5 py-3 text-sm font-semibold text-paper transition duration-200 hover:-translate-y-0.5 hover:bg-paper hover:text-ink"
            >
              Or email us at planora.testfitgmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
function HowItWorksPage() {
  return (
    <div className="space-y-12">
      <Seo
        title="How it works | Planora"
        description="See the 6-step Full-Stack Preview process for Miami tenant-rep brokers: brief, pre-flight call, test-fit, renders, video, and delivery."
        path="/how-it-works"
      />
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Process</p>
        <h1 className="text-3xl font-bold sm:text-4xl">How the Full-Stack Preview works</h1>
        <p className="max-w-3xl text-muted">
          SLA starts at the pre-flight call and pauses if inputs are incomplete.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {steps.map((step, idx) => (
          <article
            key={step.title}
            className="space-y-3 rounded-2xl border border-slate-200 bg-paper p-5 shadow-sm"
          >
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span>Step {idx + 1}</span>
              <span>{step.title.includes('T+') ? step.title.split(' ')[0] : '72-96 h'}</span>
            </div>
            <h2 className="text-lg font-semibold text-ink">{step.title}</h2>
            <p className="text-sm text-muted">{step.detail}</p>
            <MediaPlaceholder label="Placeholder - process visual" aspect="aspect-[4/3]" />
          </article>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {qaChips.map((chip) => (
          <span
            key={chip}
            className="rounded-full bg-ink px-3 py-1 text-xs font-semibold text-paper"
          >
            {chip}
          </span>
        ))}
      </div>
      <p className="text-sm text-muted">
        SLA starts at pre-flight call and pauses if inputs are incomplete.
      </p>
    </div>
  )
}

function PricingPage() {
  return (
    <div className="space-y-10">
      <Seo
        title="Pricing | Planora"
        description="Launch pricing for the Planora Full-Stack Preview (2k-20k ft): fixed tiers, add-ons, and individual items for Miami tenant-rep brokers."
        path="/pricing"
      />
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Pricing</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Full Launch pricing and add-ons</h1>
        <p className="max-w-3xl text-muted">
          Fixed-scope pricing by square footage. One package, no hidden extras.
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pricingTiers.map((tier) => (
          <div
            key={tier.range}
            className="rounded-2xl border border-slate-200 bg-paper p-5 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Launch</p>
            <p className="text-lg font-semibold">{tier.range}</p>
            <p className="text-2xl font-bold text-ink">{tier.price}</p>
            <p className="text-sm text-muted">{tier.note}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-3 rounded-2xl border border-slate-200 bg-paper p-5 shadow-sm">
          <h2 className="text-xl font-semibold text-ink">Add-ons</h2>
          <ul className="space-y-2">
            {addOns.map((add) => (
              <li
                key={add.title}
                className="flex items-start justify-between gap-3 text-sm text-muted"
              >
                <div>
                  <p className="font-semibold text-ink">{add.title}</p>
                  <p>{add.detail}</p>
                </div>
                <span className="text-sm font-semibold text-ink">{add.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 rounded-2xl border border-slate-200 bg-paper p-5 shadow-sm">
          <h2 className="text-xl font-semibold text-ink">Individual items</h2>
          <ul className="space-y-2">
            {individualItems.map((item) => (
              <li key={item.title} className="flex items-center justify-between text-sm text-muted">
                <span className="font-semibold text-ink">{item.title}</span>
                <span className="text-sm font-semibold text-ink">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-2 rounded-2xl border border-slate-200 bg-paper p-5 shadow-sm">
        <h2 className="text-xl font-semibold text-ink">Conditions</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
          {pricingConditions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href={primaryCta}
          className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-ink shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
        >
          Book the preview
        </a>
        <Link
          to="/contact"
          className="rounded-full border border-accent px-5 py-3 text-sm font-semibold text-ink transition duration-200 hover:-translate-y-0.5 hover:bg-accent hover:text-ink"
        >
          Ask about timing
        </Link>
      </div>
    </div>
  )
}
function CasesPage() {
  return (
    <div className="space-y-10">
      <Seo
        title="Cases | Planora"
        description="See demo Full-Stack Preview cases for Miami tenant-rep brokers: layouts, visuals, and delivery timing."
        path="/cases"
      />
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Cases</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Demo cases for Miami tenant-rep brokers</h1>
        <p className="max-w-3xl text-muted">
          Two sample deliveries showing how the preview lands with tenants and landlords.
        </p>
      </header>
      <div className="space-y-6">
        {caseStudies.map((cs) => (
          <article
            key={cs.title}
            className="space-y-3 rounded-2xl border border-slate-200 bg-paper p-5 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {cs.eyebrow}
            </p>
            <h2 className="text-xl font-semibold text-ink">{cs.title}</h2>
            <p className="text-sm text-muted">{cs.body}</p>
            <div className="grid gap-3 md:grid-cols-2">
              <MediaPlaceholder label="Placeholder - plan + axo" aspect="aspect-[4/3]" />
              <div className="space-y-3">
                <MediaPlaceholder label="Placeholder - render #1" aspect="aspect-[4/3]" />
                <MediaPlaceholder label="Placeholder - render #2" aspect="aspect-[4/3]" />
              </div>
            </div>
            <MediaPlaceholder label="Placeholder - 60s video frame" />
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
              {cs.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <p className="text-sm text-muted">
              How it helps: clear tenant story, landlord updates, and easy drop-in assets for email
              and deck.
            </p>
          </article>
        ))}
      </div>
    </div>
  )
}

function FaqPage() {
  return (
    <div className="space-y-8">
      <Seo
        title="FAQ | Planora"
        description="Answers to common questions about the Planora Full-Stack Preview: inputs, timeline, revisions, pricing, NDA, and scope."
        path="/faq"
      />
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">FAQ</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Full FAQ for brokers</h1>
        <p className="max-w-3xl text-muted">Ready-to-use details for busy tenant-rep teams.</p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {faqs.map((item) => (
          <article
            key={item.question}
            className="rounded-2xl border border-slate-200 bg-paper p-5 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-ink">{item.question}</h2>
            <p className="mt-2 text-sm text-muted">{item.answer}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('success')
  }

  return (
    <div className="space-y-8">
      <Seo
        title="Contact | Planora"
        description="Contact Planora to schedule a 15-minute call about a Full-Stack Preview for Miami tenant-rep brokers."
        path="/contact"
      />
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Contact</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Tell us about the deal and timeline</h1>
        <p className="max-w-3xl text-muted">
          Share the submarket, ft range, and key dates. We'll tell you if a Full-Stack Preview fits
          and when we can deliver.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-3 rounded-2xl border border-slate-200 bg-paper p-5 shadow-sm lg:col-span-1">
          <p className="text-sm text-muted">Email</p>
          <a className="text-lg font-semibold text-ink" href="mailto:planora.testfitgmail.com">
            planora.testfitgmail.com
          </a>
          <p className="text-sm text-muted">WhatsApp: +51 987 790 457</p>
          <p className="text-sm text-muted">We respond within one business day.</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-slate-200 bg-paper p-6 shadow-sm lg:col-span-2"
        >
          <div className="grid gap-3 md:grid-cols-2">
            <label className="space-y-1 text-sm font-semibold text-ink">
              Name
              <input
                required
                name="name"
                className="mt-1 w-full rounded-lg border border-slate-200 bg-soft px-3 py-2 text-sm focus:border-accent focus:outline-none"
              />
            </label>
            <label className="space-y-1 text-sm font-semibold text-ink">
              Company
              <input
                name="company"
                className="mt-1 w-full rounded-lg border border-slate-200 bg-soft px-3 py-2 text-sm focus:border-accent focus:outline-none"
              />
            </label>
            <label className="space-y-1 text-sm font-semibold text-ink">
              Email
              <input
                required
                type="email"
                name="email"
                className="mt-1 w-full rounded-lg border border-slate-200 bg-soft px-3 py-2 text-sm focus:border-accent focus:outline-none"
              />
            </label>
            <label className="space-y-1 text-sm font-semibold text-ink">
              Phone (optional)
              <input
                name="phone"
                className="mt-1 w-full rounded-lg border border-slate-200 bg-soft px-3 py-2 text-sm focus:border-accent focus:outline-none"
              />
            </label>
            <label className="space-y-1 text-sm font-semibold text-ink">
              Submarket
              <select
                name="submarket"
                className="mt-1 w-full rounded-lg border border-slate-200 bg-soft px-3 py-2 text-sm focus:border-accent focus:outline-none"
              >
                {submarkets.map((sub) => (
                  <option key={sub}>{sub}</option>
                ))}
              </select>
            </label>
            <label className="space-y-1 text-sm font-semibold text-ink">
              Approx ft range
              <select
                name="range"
                className="mt-1 w-full rounded-lg border border-slate-200 bg-soft px-3 py-2 text-sm focus:border-accent focus:outline-none"
              >
                {ftRanges.map((range) => (
                  <option key={range}>{range}</option>
                ))}
              </select>
            </label>
          </div>
          <label className="space-y-1 text-sm font-semibold text-ink">
            Desired timeline
            <input
              name="timeline"
              placeholder="Target date or window"
              className="mt-1 w-full rounded-lg border border-slate-200 bg-soft px-3 py-2 text-sm focus:border-accent focus:outline-none"
            />
          </label>
          <label className="space-y-1 text-sm font-semibold text-ink">
            Message
            <textarea
              name="message"
              rows={4}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-soft px-3 py-2 text-sm focus:border-accent focus:outline-none"
              placeholder="Submarket, timing, headcount ranges, TI targets"
            />
          </label>
          {status === 'success' && (
            <div
              className="rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm text-emerald-800"
              role="status"
            >
              Thanks! We'll reply with timing and fit within one business day.
            </div>
          )}
          <button
            type="submit"
            className="w-full rounded-full bg-accent px-4 py-3 text-sm font-semibold text-ink shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Submit and see success state
          </button>
        </form>
      </div>
    </div>
  )
}

function GiftPage() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('success')
  }

  return (
    <div className="space-y-8">
      <Seo
        title="Gift: 2 images in 48h | Planora"
        description="Get two AI-assisted images in 48 hours for Miami tenant-rep brokers. One per company, no revisions, watermark included."
        path="/gift"
      />
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Gift</p>
        <h1 className="text-3xl font-bold sm:text-4xl">2 images in 48 hours</h1>
        <p className="max-w-3xl text-muted">
          Two AI-assisted images, mid-quality, aligned to your style and a generic office shell. One
          per company. Zero revisions. Watermarked. Delivery in 48 hours.
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-2xl border border-slate-200 bg-paper p-6 shadow-sm"
      >
        <div className="grid gap-3 md:grid-cols-2">
          <label className="space-y-1 text-sm font-semibold text-ink">
            Name
            <input
              required
              name="name"
              className="mt-1 w-full rounded-lg border border-slate-200 bg-soft px-3 py-2 text-sm focus:border-accent focus:outline-none"
            />
          </label>
          <label className="space-y-1 text-sm font-semibold text-ink">
            Company
            <input
              name="company"
              className="mt-1 w-full rounded-lg border border-slate-200 bg-soft px-3 py-2 text-sm focus:border-accent focus:outline-none"
            />
          </label>
          <label className="space-y-1 text-sm font-semibold text-ink">
            Email
            <input
              required
              type="email"
              name="email"
              className="mt-1 w-full rounded-lg border border-slate-200 bg-soft px-3 py-2 text-sm focus:border-accent focus:outline-none"
            />
          </label>
          <label className="space-y-1 text-sm font-semibold text-ink">
            Submarket
            <select
              name="submarket"
              className="mt-1 w-full rounded-lg border border-slate-200 bg-soft px-3 py-2 text-sm focus:border-accent focus:outline-none"
            >
              {submarkets.map((sub) => (
                <option key={sub}>{sub}</option>
              ))}
            </select>
          </label>
          <label className="space-y-1 text-sm font-semibold text-ink">
            Approx ft range
            <select
              name="range"
              className="mt-1 w-full rounded-lg border border-slate-200 bg-soft px-3 py-2 text-sm focus:border-accent focus:outline-none"
            >
              {ftRanges.map((range) => (
                <option key={range}>{range}</option>
              ))}
            </select>
          </label>
          <label className="space-y-1 text-sm font-semibold text-ink">
            Style
            <select
              name="style"
              className="mt-1 w-full rounded-lg border border-slate-200 bg-soft px-3 py-2 text-sm focus:border-accent focus:outline-none"
            >
              {giftStyles.map((style) => (
                <option key={style}>{style}</option>
              ))}
            </select>
          </label>
        </div>
        <label className="space-y-1 text-sm font-semibold text-ink">
          Brand guidelines URL (optional)
          <input
            type="url"
            name="brand"
            placeholder="https://"
            className="mt-1 w-full rounded-lg border border-slate-200 bg-soft px-3 py-2 text-sm focus:border-accent focus:outline-none"
          />
        </label>
        <label className="space-y-1 text-sm font-semibold text-ink">
          Notes (optional)
          <textarea
            name="notes"
            rows={3}
            className="mt-1 w-full rounded-lg border border-slate-200 bg-soft px-3 py-2 text-sm focus:border-accent focus:outline-none"
            placeholder="Reference projects, mood, target audience"
          />
        </label>
        <label className="flex items-start gap-2 text-sm font-semibold text-ink">
          <input
            required
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-slate-300 text-accent focus:ring-accent"
          />
          <span className="font-normal text-muted">
            I accept the preview gift terms (one per company, no revisions, watermarked,
            non-exclusive use).
          </span>
        </label>
        {status === 'success' && (
          <div
            className="rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm text-emerald-800"
            role="status"
          >
            Thanks! You'll receive your images in 48 hours.
          </div>
        )}
        <button
          type="submit"
          className="w-full rounded-full bg-accent px-4 py-3 text-sm font-semibold text-ink shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-xl"
        >
          Submit and show success
        </button>
      </form>
    </div>
  )
}
function NotFoundPage() {
  return (
    <div className="space-y-6">
      <Seo
        title="Page not found | Planora"
        description="Page not found. Use the navigation to explore Planora's Full-Stack Preview for Miami brokers."
        path="/404"
      />
      <h1 className="text-3xl font-bold sm:text-4xl">Page not found.</h1>
      <p className="max-w-2xl text-muted">
        If you're a broker and ended up here, use the navigation above or schedule a 15 min call.
      </p>
      <Link
        to="/"
        className="inline-flex w-fit rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
      >
        Back to home
      </Link>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout navItems={navItems}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gift" element={<GiftPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
