'use client'

import { Play } from 'lucide-react'
import { useQuoteForm } from './QuoteFormProvider'

type ProofPoint = {
  label: string
  value: string
  detail: string
}

export function HomeHero({ proofPoints }: { proofPoints: ProofPoint[] }) {
  const { openForm } = useQuoteForm()

  return (
    <section className="grid min-h-[85vh] items-center gap-12 py-20 lg:grid-cols-2">
      <div className="flex flex-col">
        <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-accent">For tenant-rep brokers  Miami  2k–20k ft²</p>
        <h1 className="mt-6 text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-[64px] lg:leading-[1.1]">
          Help tenants decide faster with a Full-Stack Preview in 72–96h
        </h1>
        <p className="mt-8 max-w-xl text-[19px] leading-relaxed text-muted">
          One decision-ready option: test-fit, clean 2D, two stills, and a 60-second video—built for tenant-rep deals in Miami's key submarkets.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={openForm}
            className="rounded-lg bg-accentFill px-8 py-4 text-base font-semibold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Get a custom quote
          </button>
          <button
            type="button"
            onClick={() => {
              document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="rounded-lg border-2 border-accent/60 px-8 py-4 text-base font-semibold text-accent transition duration-200 hover:bg-accent/5"
          >
            See how it works
          </button>
        </div>
        <p className="mt-4 text-sm font-medium text-muted">Receive pricing + Calendly link within 2 hours</p>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {proofPoints.map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-200 bg-paper p-4 shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">{item.label}</p>
              <p className="mt-2 text-2xl font-semibold text-ink">{item.value}</p>
              <p className="mt-1 text-sm text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="order-2 lg:order-2">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink via-ink to-slate-900 shadow-2xl">
          <div className="absolute inset-0 opacity-40">
            <div className="h-full w-full bg-[radial-gradient(circle_at_25%_25%,rgba(23,195,206,0.35),transparent_55%)]" />
          </div>
          <div className="relative flex min-h-[360px] flex-col justify-between gap-10 p-8 text-paper">
            <div className="flex items-center gap-3 text-sm font-semibold text-white">
              <span className="rounded-full bg-white/10 p-3 text-accent">
                <Play className="h-8 w-8" />
              </span>
              Preview: 60-second walkthrough
            </div>
            <div>
              <p className="text-3xl font-semibold">Shot for mid-ticket deals in Miami</p>
              <p className="mt-2 text-sm text-white/80">Email-ready pacing plus a single call-to-action frame.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}