'use client'

import { useQuoteForm } from './QuoteFormProvider'

type ProofPoint = {
  label: string
  value: string
  detail: string
}

const eyebrowText = 'For office tenant-rep brokers  2k–20k ft² in Miami'
const heroSubhead = "One fixed-scope package with test-fit, clean 2D, two stills and a 60-second video—built to move mid-ticket office deals before your client looks at the next building."

export function HomeHero({ proofPoints }: { proofPoints: ProofPoint[] }) {
  const { openForm } = useQuoteForm()

  const scrollToProcess = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-[85vh] py-20 md:py-28">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs uppercase tracking-wider text-accent font-medium mb-4">{eyebrowText}</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-ink mb-6">
            Help tenants decide faster with a Full-Stack Preview in 72–96h
          </h1>
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-8">{heroSubhead}</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={openForm}
              className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent/90 hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get a custom quote
            </button>
            <button
              type="button"
              onClick={scrollToProcess}
              className="border-2 border-accent/30 text-accent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent/5 hover:border-accent/50 transition-all duration-200"
            >
              See how it works
            </button>
          </div>
          <p className="text-sm text-muted mt-4">Receive pricing + Calendly link within 2 hours</p>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {proofPoints.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-muted/20 bg-paper p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">{item.label}</p>
                <p className="mt-2 text-2xl font-semibold text-ink">{item.value}</p>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-first lg:order-last">
          <div className="relative overflow-hidden rounded-3xl border border-accent/10 bg-gradient-to-br from-soft via-soft to-accent/10 shadow-2xl">
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: 'linear-gradient(#17C3CE 1px, transparent 1px), linear-gradient(90deg, #17C3CE 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />
            <div className="relative flex min-h-[360px] flex-col justify-between gap-10 p-10 text-center">
              <div>
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-accent/30 bg-white/80 text-4xl">
                  ▶
                </div>
                <p className="text-xl font-semibold text-ink">Preview: 60-second walkthrough</p>
                <p className="mt-2 text-sm text-muted">
                  Shot for mid-ticket Miami deals—email-ready pacing with one clear CTA frame.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
