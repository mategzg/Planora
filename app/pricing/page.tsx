import type { Metadata } from 'next'
import Link from 'next/link'
import { QuoteFormButton } from '@/components/QuoteFormButton'
import { addOns, individualItems, pricingConditions, pricingTiers, pricingInclusions } from '@/lib/content'

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
    <div className="space-y-12">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Pricing</p>
        <h1 className="text-3xl md:text-4xl font-bold">Full Launch pricing and add-ons</h1>
        <p className="text-lg text-muted">Fixed-scope pricing by square footage. One package, no surprises, no hourly rates.</p>
        <p className="text-sm text-muted">Launch pricing – first 60 days – up to 5 clients</p>
      </header>

      <p className="rounded-2xl border border-accent/15 bg-paper/70 px-4 py-3 text-sm text-muted text-center italic">
        Launch pricing expires Feb 7, 2026. Lock in US$ 1,000 for 2–5k ft² deals before rates adjust to market.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pricingTiers.map((tier) => (
          <div
            key={tier.range}
            className="rounded-2xl border border-muted/20 bg-paper p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
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
              <p className="text-2xl font-bold text-ink">{tier.price}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 max-w-4xl mx-auto bg-soft rounded-xl p-8 border border-muted/10">
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

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3 rounded-2xl border border-muted/20 bg-paper p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
          <h2 className="text-xl font-semibold text-ink">Add-ons</h2>
          <ul className="space-y-2 text-sm text-muted">
            {addOns.map((add) => (
              <li key={add.title} className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-ink">{add.title}</p>
                  <p>{add.detail}</p>
                </div>
                <span className="text-sm font-semibold text-ink">{add.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 rounded-2xl border border-muted/20 bg-paper p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
          <h2 className="text-xl font-semibold text-ink">Individual items</h2>
          <ul className="space-y-2 text-sm text-muted">
            {individualItems.map((item) => (
              <li key={item.title} className="flex items-center justify-between">
                <span className="font-semibold text-ink">{item.title}</span>
                <span className="text-sm font-semibold text-ink">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-2 rounded-2xl border border-muted/20 bg-paper p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-ink">Conditions</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
          {pricingConditions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-3">
        <QuoteFormButton className="rounded-full bg-accentFill px-5 py-3 text-sm font-semibold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg">
          Schedule 15 min Call
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
