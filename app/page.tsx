import type { Metadata } from 'next'
import Link from 'next/link'
import { MediaPlaceholder } from '@/components/MediaPlaceholder'
import {
  caseStudies,
  offeringItems,
  pricingTiers,
  primaryCta,
  proofPoints,
  qaChips,
  quickFaqs,
  steps,
} from '@/lib/content'

export const metadata: Metadata = {
  title: 'Planora | Full-Stack office previews in 72�96 h for Miami brokers',
  description:
    'Full-Stack office previews for tenant-rep brokers in Miami: one test-fit, clean 2D, two stills, and a 60-second video delivered in 72�96 hours for 2k�20k ft deals.',
  alternates: {
    canonical: 'https://planora-testfit.vercel.app/',
  },
  openGraph: {
    title: 'Planora | Full-Stack office previews in 72�96 h for Miami brokers',
    description:
      'Full-Stack office previews for tenant-rep brokers in Miami: one test-fit, clean 2D, two stills, and a 60-second video delivered in 72�96 hours for 2k�20k ft deals.',
    url: 'https://planora-testfit.vercel.app/',
    images: ['/og-planora.png'],
  },
}

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            For tenant-rep brokers  Miami  2k�20k ft
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Close faster with a Full-Stack Preview in 72�96 h
          </h1>
          <p className="max-w-2xl text-lg text-muted">
            One decision-ready option: test-fit, clean 2D, two stills, and a 60-second video�built for tenant-rep deals in Miami's key submarkets.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={primaryCta}
              className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-ink shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Schedule 15 min Call
            </a>
            <Link
              href="/how-it-works"
              className="rounded-full border border-accent/60 px-5 py-3 text-sm font-semibold text-ink transition duration-200 hover:-translate-y-0.5 hover:bg-paper hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              See how it works
            </Link>
          </div>
          <p className="text-xs text-muted">or use the contact form <Link href="/contact" className="underline">/contact</Link>.</p>
          <p className="text-sm text-muted">Not for construction. No permit/seal. Schematic only.</p>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {proofPoints.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-paper p-4 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{item.label}</p>
                <p className="mt-2 text-xl font-semibold text-ink">{item.value}</p>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-2xl shadow-md">
          <MediaPlaceholder label="Demo - Full-Stack Preview 60s" />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center transition duration-200 group-hover:scale-105">
            <div className="h-14 w-14 rounded-full bg-ink/70 text-paper shadow-lg transition duration-200 group-hover:scale-105">
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
          <h2 className="text-2xl font-semibold sm:text-3xl">What you get in 72�96 hours</h2>
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

      <section className="space-y-4">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Who it's for</p>
          <h2 className="text-2xl font-semibold sm:text-3xl">Who it's for</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-paper p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Tenant-rep office brokers</h3>
            <p className="mt-2 text-sm text-muted">Decision-ready visuals to help tenants compare options quickly.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-paper p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Leasing teams & landlords</h3>
            <p className="mt-2 text-sm text-muted">Refresh listings and cut days on market in key Miami submarkets.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-paper p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Mid-ticket office deals</h3>
            <p className="mt-2 text-sm text-muted">2k to 2-?0k ft in Doral, Blue Lagoon, Coral Gables, Brickell, Kendall, South Broward.</p>
          </div>
        </div>
      </section>

      <section id="pricing" className="space-y-4">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Pricing</p>
          <h2 className="text-2xl font-semibold sm:text-3xl">Pricing for 2k�20k ft offices</h2>
          <p className="max-w-3xl text-muted">Fixed-scope pricing by square footage. One package, no hidden extras.</p>
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
        <p className="text-sm text-muted">One revision included - SketchUp model on request - 50/50 payment - No rush - No Revit.</p>
        <Link
          href="/pricing"
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
          Have a live deal or a listing to refresh? Share a few details and we'll send two mid-quality images aligned with your style, free of charge.
        </p>
        <ul className="grid gap-2 sm:grid-cols-3">
          <li className="text-sm text-soft">One per company.</li>
          <li className="text-sm text-soft">No revisions.</li>
          <li className="text-sm text-soft">Watermark included.</li>
        </ul>
        <Link
          href="/gift"
          className="inline-flex w-fit rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
        >
          Get 2 images in 48 h
        </Link>
      </section>

      <section id="cases" className="space-y-4">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Cases</p>
          <h2 className="text-2xl font-semibold sm:text-3xl">See a Full-Stack Preview in context</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {caseStudies.slice(0, 2).map((cs) => (
            <article
              key={cs.title}
              className="group space-y-3 rounded-2xl border border-slate-200 bg-paper p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{cs.eyebrow}</p>
              <h3 className="text-xl font-semibold text-ink">{cs.title}</h3>
              <p className="text-sm text-muted">{cs.body}</p>
              <MediaPlaceholder label="Placeholder - render still" aspect="aspect-[4/3]" />
              <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
                {cs.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <Link
                href="/cases"
                className="inline-flex w-fit rounded-full border border-accent/60 px-4 py-2 text-sm font-semibold text-ink transition duration-200 hover:-translate-y-0.5 hover:bg-paper hover:shadow-md"
              >
                View details
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Quick answers</p>
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
          href="/faq"
          className="inline-flex w-fit rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
        >
          See full FAQ
        </Link>
      </section>
      <section id="cta" className="overflow-hidden rounded-3xl bg-ink px-8 py-10 text-paper shadow-xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Next step</p>
            <h2 className="text-2xl font-semibold sm:text-3xl">Tell us about the deal and timeline</h2>
            <p className="max-w-2xl text-sm text-soft">
              Share the submarket, ft range, and key dates. We will tell you if a Full-Stack Preview fits and when we can deliver.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={primaryCta}
              className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-ink shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Schedule 15 min Call
            </a>
            <a
              href="mailto:planora.testfit@gmail.com"
              className="rounded-full border border-accent/40 bg-transparent px-5 py-3 text-sm font-semibold text-paper transition duration-200 hover:-translate-y-0.5 hover:bg-paper hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Or email us at planora.testfit@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

