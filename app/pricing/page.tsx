import type { Metadata } from 'next'
import Link from 'next/link'
import { QuoteFormButton } from '@/components/QuoteFormButton'
import { addOns, individualItems, pricingConditions, pricingTiers, pricingInclusions } from '@/lib/content'
import { BadgeCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing | Planora',
  description:
    'Launch pricing for the Planora Full-Stack Preview (2k–20k ft²): fixed tiers, add-ons, and individual items for Miami tenant-rep brokers.',
  alternates: {
    canonical: 'https://planora-testfit.vercel.app/pricing',
  },
  openGraph: {
    title: 'Pricing | Planora',
    description:
      'Launch pricing for the Planora Full-Stack Preview (2k–20k ft²): fixed tiers, add-ons, and individual items for Miami tenant-rep brokers.',
    url: 'https://planora-testfit.vercel.app/pricing',
    images: ['/og-planora.png'],
  },
}

export default function PricingPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Pricing</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Full Launch pricing and add-ons</h1>
        <p className="max-w-3xl text-muted">Fixed-scope pricing by square footage. One package, no hidden extras.</p>
        <p className="text-sm text-muted">Launch pricing – first 60 days – up to 5 clients</p>
        <p className="rounded-2xl border border-dashed border-accent/40 bg-accent/5 px-4 py-3 text-sm text-ink">
          Launch pricing expires Dec 31, 2025. Lock in US$ 1,000 for 2–5k ft² deals before rates adjust to market.
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pricingTiers.map((tier) => (
          <div
            key={tier.range}
            className="rounded-2xl border border-slate-200 bg-paper p-5 shadow-sm"
          >
            {tier.note && tier.note !== 'Launch' && (
              <span className="mb-3 inline-flex rounded-full bg-soft px-3 py-1 text-xs font-semibold text-accent">{tier.note}</span>
            )}
            <p className="text-lg font-semibold">{tier.range}</p>
            {tier.range === '20k+ ft²' ? (
              <div className="mt-3 space-y-3">
                <p className="text-2xl font-bold text-ink">{tier.price}</p>
                <QuoteFormButton className="w-full rounded-full border border-accent/60 px-4 py-2 text-sm text-accent">
                  Request a quote
                </QuoteFormButton>
              </div>
            ) : (
              <p className="text-2xl font-bold text-ink">{tier.price}</p>
            )}
          </div>
        ))}
      </div>

      <div className="space-y-3 rounded-2xl border border-slate-200 bg-paper p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">What's included at every tier</p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {pricingInclusions.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-muted">
              <BadgeCheck className="h-5 w-5 text-accent" />
              {item}
            </li>
          ))}
        </ul>
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
        <p className="text-xs text-muted">One revision included · SketchUp on request · 50/50 payment</p>
      </div>

      <div className="flex flex-wrap gap-3">
        <QuoteFormButton className="rounded-full bg-accentFill px-5 py-3 text-sm font-semibold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg">
          Get a custom quote
        </QuoteFormButton>
        <Link
          href="/gift"
          className="rounded-full border border-accent/60 px-5 py-3 text-sm font-semibold text-ink transition duration-200 hover:-translate-y-0.5 hover:bg-paper hover:shadow-md"
        >
          Try the 2-image gift
        </Link>
      </div>
    </div>
  )
}