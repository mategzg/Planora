import type { Metadata } from 'next'
import { GiftForm } from '@/components/forms/GiftForm'

export const metadata: Metadata = {
  title: 'Gift: 2 images in 48h | Planora',
  description:
    'Get two AI-assisted images in 48 hours for Miami tenant-rep brokers. One per company, no revisions, watermark included.',
  alternates: {
    canonical: 'https://planora-teal.vercel.app/gift',
  },
  openGraph: {
    title: 'Gift: 2 images in 48h | Planora',
    description:
      'Get two AI-assisted images in 48 hours for Miami tenant-rep brokers. One per company, no revisions, watermark included.',
    url: 'https://planora-teal.vercel.app/gift',
    images: ['/og-planora.png'],
  },
}

export default function GiftPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Gift</p>
        <h1 className="text-3xl font-bold sm:text-4xl">2 images in 48 hours</h1>
        <p className="max-w-3xl text-muted">
          Two AI-assisted images, mid-quality, aligned to your style and a generic office shell. One per company. Zero revisions. Watermarked. Delivery in 48 hours.
        </p>
      </header>

      <GiftForm />
    </div>
  )
}


