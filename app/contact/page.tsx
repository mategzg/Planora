import type { Metadata } from 'next'
import { ContactForm } from '@/components/forms/ContactForm'
import { primaryCta } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Contact | Planora',
  description:
    'Contact Planora to schedule a 15-minute call about a Full-Stack Preview for Miami tenant-rep brokers.',
  alternates: {
    canonical: 'https://planora-teal.vercel.app/contact',
  },
  openGraph: {
    title: 'Contact | Planora',
    description:
      'Contact Planora to schedule a 15-minute call about a Full-Stack Preview for Miami tenant-rep brokers.',
    url: 'https://planora-teal.vercel.app/contact',
    images: ['/og-planora.png'],
  },
}

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Contact</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Tell us about the deal and timeline</h1>
        <p className="max-w-3xl text-muted">
          Share the submarket, ft range, and key dates. We'll tell you if a Full-Stack Preview fits and when we can deliver.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-3 rounded-2xl border border-slate-200 bg-paper p-5 shadow-sm lg:col-span-1">
          <p className="text-sm text-muted">Email</p>
          <a className="text-lg font-semibold text-ink" href="mailto:planora.testfitgmail.com">
            planora.testfitgmail.com
          </a>
          <p className="text-sm text-muted">WhatsApp: +51 987 790 457</p>
          <p className="text-sm text-muted">We respond within one business day.</p>
          <a
            href={primaryCta}
            className="inline-flex w-fit rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Schedule 15 min Call
          </a>
        </div>
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}


