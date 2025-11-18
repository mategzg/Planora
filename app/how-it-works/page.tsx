import type { Metadata } from 'next'
import { MediaPlaceholder } from '@/components/MediaPlaceholder'
import { qaChips, steps } from '@/lib/content'

export const metadata: Metadata = {
  title: 'How it works | Planora',
  description:
    "See the 6-step Full-Stack Preview process for Miami tenant-rep brokers: brief, pre-flight call, test-fit, renders, video, and delivery.",
  alternates: {
    canonical: 'https://planora-testfit.vercel.app/how-it-works',
  },
  openGraph: {
    title: 'How it works | Planora',
    description:
      "See the 6-step Full-Stack Preview process for Miami tenant-rep brokers: brief, pre-flight call, test-fit, renders, video, and delivery.",
    url: 'https://planora-testfit.vercel.app/how-it-works',
    images: ['/og-planora.png'],
  },
}

export default function HowItWorksPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Process</p>
        <h1 className="text-3xl font-bold sm:text-4xl">How the Full-Stack Preview works</h1>
        <p className="max-w-3xl text-muted">SLA starts at the pre-flight call and pauses if inputs are incomplete.</p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {steps.map((step, idx) => (
          <article
            key={step.title}
            className="space-y-3 rounded-2xl border border-slate-200 bg-paper p-5 shadow-sm"
          >
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span>Step {idx + 1}</span>
              <span>{step.title.includes('T+') ? step.title.split(' ')[0] : '72&ndash;96 h'}</span>
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
      <p className="text-sm text-muted">SLA starts at pre-flight call and pauses if inputs are incomplete.</p>
    </div>
  )
}









