import Image from 'next/image'
import type { Metadata } from 'next'
import { caseStudies } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Cases | Planora',
  description: 'See demo Full-Stack Preview cases for Miami tenant-rep brokers: layouts, visuals, and delivery timing.',
  alternates: {
    canonical: 'https://planora-testfit.vercel.app/cases',
  },
  openGraph: {
    title: 'Cases | Planora',
    description: 'See demo Full-Stack Preview cases for Miami tenant-rep brokers: layouts, visuals, and delivery timing.',
    url: 'https://planora-testfit.vercel.app/cases',
    images: ['/og-planora.png'],
  },
}

export default function CasesPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Cases</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Demo cases for Miami tenant-rep brokers</h1>
        <p className="max-w-3xl text-muted">One sample delivery showing how the preview lands with tenants and landlords.</p>
      </header>
      <div className="space-y-6">
        {caseStudies.map((cs) => (
          <article
            key={cs.title}
            className="space-y-4 rounded-2xl border border-slate-200 bg-paper p-5 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{cs.eyebrow}</p>
            <h2 className="text-xl font-semibold text-ink">{cs.title}</h2>
            <p className="text-sm text-muted">{cs.body}</p>
            <div className="grid gap-3 lg:grid-cols-[1.35fr,0.65fr]">
              <Image
                src={cs.media.plan.src}
                alt={cs.media.plan.alt}
                width={1600}
                height={1200}
                className="h-full w-full rounded-2xl border border-muted/20 object-cover"
                sizes="(min-width: 1024px) 60vw, 100vw"
                priority
              />
              <div className="space-y-3">
                {cs.media.renders.map((render) => (
                  <Image
                    key={render.src}
                    src={render.src}
                    alt={render.alt}
                    width={1600}
                    height={900}
                    className="h-full w-full rounded-2xl border border-muted/20 object-cover"
                    sizes="(min-width: 1024px) 28vw, 100vw"
                  />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <video
                className="w-full rounded-2xl border border-muted/20 bg-black shadow-sm"
                controls
                playsInline
                poster={cs.media.video.poster}
                preload="metadata"
              >
                <source src={cs.media.video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {cs.media.video.caption ? (
                <p className="text-xs text-muted">{cs.media.video.caption}</p>
              ) : null}
            </div>
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



