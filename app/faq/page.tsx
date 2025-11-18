import type { Metadata } from 'next'
import { faqs } from '@/lib/content'

export const metadata: Metadata = {
  title: 'FAQ | Planora',
  description:
    "Answers to common questions about the Planora Full-Stack Preview: inputs, timeline, revisions, pricing, NDA, and scope.",
  alternates: {
    canonical: 'https://planora-teal.vercel.app/faq',
  },
  openGraph: {
    title: 'FAQ | Planora',
    description:
      "Answers to common questions about the Planora Full-Stack Preview: inputs, timeline, revisions, pricing, NDA, and scope.",
    url: 'https://planora-teal.vercel.app/faq',
    images: ['/og-planora.png'],
  },
}

export default function FaqPage() {
  return (
    <div className="space-y-8">
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


