import type { Metadata } from 'next'
import { MediaPlaceholder } from '@/components/MediaPlaceholder'
import { caseStudies } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Cases | Planora',
  description: 'See demo Full-Stack Preview cases for Miami tenant-rep brokers: layouts, visuals, and delivery timing.',
  alternates: {
    canonical: 'https://planora-teal.vercel.app/cases',
  },
  openGraph: {
    title: 'Cases | Planora',
    description: 'See demo Full-Stack Preview cases for Miami tenant-rep brokers: layouts, visuals, and delivery timing.',
    url: 'https://planora-teal.vercel.app/cases',
    images: ['/og-planora.png'],
  },
}

export default function CasesPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Cases</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Demo cases for Miami tenant-rep brokers</h1>
        <p className="max-w-3xl text-muted">Two sample deliveries showing how the preview lands with tenants and landlords.</p>
      </header>
      <div className="space-y-6">
        {caseStudies.map((cs) => (
          <article
            key={cs.title}
            className="space-y-3 rounded-2xl border border-slate-200 bg-paper p-5 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{cs.eyebrow}</p>
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
              How it helps: clear tenant story, landlord updates, and easy drop-in assets for email and deck.
            </p>
          </article>
        ))}
      </div>
    </div>
  )
}


