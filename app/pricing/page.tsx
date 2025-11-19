import type { Metadata } from 'next'
import Link from 'next/link'
import {
  addOns,
  individualItems,
  pricingConditions,
  pricingTiers,
  primaryCta,
} from '@/lib/content'

const quoteMailto = 'mailto:planora.testfit@gmail.com?subject=Planora%20%20quote%20request%20%20%5BBroker%5D%20%20%5BSubmarket%5D%20%20%5BFt%5D&body=Hi%20Planora%20team,%0D%0A%0D%0AWe%20need%20a%20quote%20for%20a%20space%20above%2020k%20ft%20in%20%5BSubmarket%5D.%0D%0ACompany:%20%5BCompany%5D.%20Timeline:%20%5BDate%5D.%0D%0APlease%20advise%20next%20steps.%0D%0A%20[Name],%20[Phone]';

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
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Pricing</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Full Launch pricing and add-ons</h1>
        <p className="max-w-3xl text-muted">Fixed-scope pricing by square footage. One package, no hidden extras.</p>
        <p className="text-sm text-muted">Launch pricing – first 60 days – up to 5 clients</p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pricingTiers.map((tier) => (
          <div
            key={tier.range}
            className="rounded-2xl border border-slate-200 bg-paper p-5 shadow-sm"
          >
            <p className="text-lg font-semibold">{tier.range}</p>
            {tier.range === '20k+ ft²' ? (
              <a
                href={quoteMailto}
                className="text-2xl font-bold text-accent underline underline-offset-4"
              >
                Request a quote
              </a>
            ) : (
              <p className="text-2xl font-bold text-ink">{tier.price}</p>
            )}
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
        <p className="text-xs text-muted">One revision included · SketchUp on request · 50/50 payment</p>
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href={primaryCta}
          className="rounded-full bg-accentFill px-5 py-3 text-sm font-semibold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Schedule 15 min Call
        </a>
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




