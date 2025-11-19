import type { Metadata } from 'next'
import Link from 'next/link'
import { MediaPlaceholder } from '@/components/MediaPlaceholder'
import { HomeHero } from '@/components/HomeHero'
import { QuoteFormButton } from '@/components/QuoteFormButton'
import {
  caseStudies,
  offeringItems,
  pricingTiers,
  proofPoints,
  qaChips,
  quickFaqs,
  steps,
  pricingInclusions,
} from '@/lib/content'
import type { LucideIcon } from 'lucide-react'
import { BadgeCheck, GaugeCircle, Image as ImageIcon, Layers, LayoutDashboard, Ruler, Video, Zap } from 'lucide-react'

const whyPlanoraItems: {
  title: string
  traditionalLabel: string
  traditional: string
  planoraLabel: string
  planora: string
  icon: LucideIcon
}[] = [
  {
    title: 'Speed that matches deal velocity',
    traditionalLabel: 'Traditional architects',
    traditional: '2–3 weeks',
    planoraLabel: 'Planora Full-Stack',
    planora: '72–96 hours',
    icon: Zap,
  },
  {
    title: 'Transparent pricing, no surprises',
    traditionalLabel: 'Traditional',
    traditional: 'Hourly rates + revision fees',
    planoraLabel: 'Planora',
    planora: 'Fixed price, 1 revision included',
    icon: GaugeCircle,
  },
  {
    title: 'Built specifically for deals',
    traditionalLabel: 'Traditional',
    traditional: 'Over-designed for construction',
    planoraLabel: 'Planora',
    planora: 'Just enough to close, nothing more',
    icon: Layers,
  },
]

const deliverableIcons: Record<string, LucideIcon> = {
  layout: Ruler,
  plan: LayoutDashboard,
  image: ImageIcon,
  video: Video,
}

export const metadata: Metadata = {
  title: 'Planora | Full-Stack office previews in 72–96 h for Miami brokers',
  description:
    'Full-Stack office previews for tenant-rep brokers in Miami: one test-fit, clean 2D, two stills, and a 60-second video delivered in 72–96 hours for 2k–20k ft² deals.',
  alternates: {
    canonical: 'https://planora-testfit.vercel.app/',
  },
  openGraph: {
    title: 'Planora | Full-Stack office previews in 72–96 h for Miami brokers',
    description:
      'Full-Stack office previews for tenant-rep brokers in Miami: one test-fit, clean 2D, two stills, and a 60-second video delivered in 72–96 hours for 2k–20k ft² deals.',
    url: 'https://planora-testfit.vercel.app/',
    images: ['/og-planora.png'],
  },
}

export default function HomePage() {
  return (
    <div className="space-y-16">
      <HomeHero proofPoints={proofPoints} />

      <section className="py-20 md:py-28 space-y-8 rounded-3xl bg-paper p-8 shadow-sm">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Why Planora</p>
          <h2 className="text-3xl font-semibold text-ink">Why brokers choose Planora over traditional architects</h2>
          <p className="max-w-3xl text-muted">
            We're not a full-service firm. We're a specialized preview service built for mid-ticket office deals.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {whyPlanoraItems.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-accent/10 p-3 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-lg font-semibold text-ink">{item.title}</p>
                </div>
                <div className="space-y-3 text-sm font-medium text-ink">
                  <div className="rounded-2xl border border-muted/40 bg-soft px-4 py-3">
                    <p className="text-xs uppercase text-muted">{item.traditionalLabel}</p>
                    <p>{item.traditional}</p>
                  </div>
                  <div className="rounded-2xl border border-accent/40 bg-white px-4 py-3 shadow-sm">
                    <p className="text-xs uppercase text-accent">{item.planoraLabel}</p>
                    <p>{item.planora}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section id="what-you-get" className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Outputs</p>
          <h2 className="text-3xl font-semibold text-ink">What you get in 72–96 hours</h2>
          <p className="max-w-3xl text-muted">One Full-Stack Preview. Four deal-ready outputs.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {offeringItems.map((item) => {
            const Icon = deliverableIcons[item.icon] ?? BadgeCheck
            return (
              <article
                key={item.title}
                className="bg-paper rounded-xl p-8 border border-muted/10 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-2xl bg-soft p-3 text-accent">
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">Deliverable</p>
                </div>
                <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </article>
            )
          })}
        </div>
        <p className="text-sm text-muted">Formats: PDF (A3), DWG, 2 JPG, 1 MP4. Not for construction. No permit/seal.</p>
      </section>

      <section id="how-it-works" className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Process</p>
          <h2 className="text-3xl font-semibold text-ink">How the Full-Stack Preview works</h2>
          <p className="max-w-3xl text-muted">Six steps. Your SLA starts at the pre-flight call.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-paper p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accentFill/10 text-ink">
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
              className="rounded-full border border-accent/30 bg-white px-4 py-1.5 text-xs font-semibold text-ink"
            >
              {chip}
            </span>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 space-y-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Who it's for</p>
          <h2 className="text-3xl font-semibold text-ink">Who it's for</h2>
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
            <p className="mt-2 text-sm text-muted">2k–20k ft² in Doral, Blue Lagoon, Coral Gables, Brickell, Kendall, South Broward.</p>
          </div>
        </div>
      </section>

            <section id="pricing" className="py-20 md:py-28 space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink">Pricing for 2k–20k ft² offices</h2>
          <p className="text-lg md:text-xl text-muted">Fixed-scope pricing by square footage. One package, no surprises, no hourly rates.</p>
        </div>
        <p className="text-sm text-muted italic border border-accent/15 bg-paper/70 px-5 py-3 rounded-2xl max-w-3xl">
          Launch pricing expires Dec 31, 2025. Lock in US$ 1,000 for 2–5k ft² deals before rates adjust to market.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div key={tier.range} className="rounded-2xl border border-muted/20 bg-paper p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
              {tier.note && tier.note !== 'Launch' && (
                <span className="mb-3 inline-flex rounded-full bg-soft px-3 py-1 text-xs font-semibold text-accent">{tier.note}</span>
              )}
              <p className="text-lg font-semibold">{tier.range}</p>
              {tier.range === '20k+ ft²' ? (
                <div className="mt-3 space-y-3">
                  <QuoteFormButton className="w-full rounded-full border border-accent/60 px-4 py-2 text-sm text-accent">
                    Request a quote
                  </QuoteFormButton>
                </div>
              ) : (
                <p className="mt-3 text-2xl font-bold text-ink">{tier.price}</p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 max-w-4xl mx-auto bg-soft rounded-xl p-8 border border-muted/10">
          <h3 className="font-semibold text-lg mb-6 text-center">What's included at every tier:</h3>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-3 text-base">
            {pricingInclusions.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-accent text-xl mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <Link
          href="/pricing"
          className="inline-flex w-fit rounded-full bg-accentFill px-5 py-3 text-sm font-semibold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
        >
          See full pricing & add-ons
        </Link>
      </section>

            <section id="gift" className="py-20 md:py-24 bg-gradient-to-br from-soft to-accent/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not ready for the full package? Start with 2 free style images in 48h
          </h2>
          <p className="text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto">
            Perfect for testing our quality before a live deal—or refreshing a stale listing with zero risk.
          </p>
          <div className="bg-paper rounded-xl p-8 mb-8 text-left max-w-2xl mx-auto border border-accent/20 shadow-md">
            <h3 className="font-semibold text-lg mb-6">What you'll get:</h3>
            <ul className="space-y-4 text-base">
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl mt-0.5">✓</span>
                <span><strong>2 AI-assisted images</strong> showing your client's preferred style (Modern Minimal, Tech Chic, or Warm Contemporary) applied to a generic office shell</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl mt-0.5">✓</span>
                <span><strong>48-hour delivery</strong>—no plan needed, just tell us the vibe</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl mt-0.5">✓</span>
                <span><strong>One per company</strong> (we trust Miami brokers—this is about building relationships, not gatekeeping)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl mt-0.5">✓</span>
                <span className="text-muted">Subtle watermark (removable if you upgrade to Full-Stack Preview)</span>
              </li>
            </ul>
          </div>
          <Link
            href="/gift"
            className="inline-block bg-accent text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-accent/90 hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Claim your free images
          </Link>
        </div>
      </section>

      <section id="cases" className="space-y-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Cases</p>
          <h2 className="text-3xl font-semibold text-ink">See a Full-Stack Preview in context</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {caseStudies.slice(0, 2).map((cs) => (
            <article
              key={cs.title}
              className="group space-y-3 rounded-2xl border border-slate-200 bg-paper p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{cs.eyebrow}</p>
              <h3 className="text-xl font-semibold text-ink">{cs.title}</h3>
              <p className="text-sm text-muted">{cs.body}</p>
              <div className="grid gap-3 md:grid-cols-2">
                <MediaPlaceholder label="Clean plan and axonometric demo · 3k ft²" aspect="aspect-[4/3]" icon="plan" />
                <div className="space-y-3">
                  <MediaPlaceholder label="Render still · demo set 1" aspect="aspect-[4/3]" icon="image" />
                  <MediaPlaceholder label="Render still · demo set 1" aspect="aspect-[4/3]" icon="image" />
                </div>
              </div>
              <MediaPlaceholder label="Video thumbnail · 60-second walkthrough" icon="video" />
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

      <section className="py-20 md:py-28 space-y-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Quick answers</p>
          <h2 className="text-3xl font-semibold text-ink">Quick answers for busy brokers</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {quickFaqs.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-slate-200 bg-paper p-5 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">FAQ</p>
              <h3 className="mt-1 text-lg font-semibold text-ink">{item.question}</h3>
              <p className="mt-2 text-sm text-muted">{item.answer}</p>
            </div>
          ))}
        </div>
        <Link
          href="/faq"
          className="inline-flex w-fit rounded-full bg-accentFill px-4 py-2 text-sm font-semibold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
        >
          See full FAQ
        </Link>
      </section>

      <section id="cta" className="overflow-hidden rounded-3xl bg-ink px-8 py-10 text-paper shadow-xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Next step</p>
            <h2 className="text-3xl font-semibold">Tell us about the deal and timeline</h2>
            <p className="max-w-2xl text-sm text-soft">
              Share the submarket, ft range, and key dates. We will tell you if a Full-Stack Preview fits and when we can deliver.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <QuoteFormButton className="rounded-full bg-accentFill px-5 py-3 text-sm font-semibold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-xl">
              Schedule 15 min Call
            </QuoteFormButton>
            <Link
              href="/contact"
              className="rounded-full border border-accent/40 bg-transparent px-5 py-3 text-sm font-semibold text-paper transition duration-200 hover:-translate-y-0.5 hover:bg-paper hover:text-ink"
            >
              Use the contact form
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
