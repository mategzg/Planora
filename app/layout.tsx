import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import type { ReactNode } from 'react'
import { SITE_URL } from '@/lib/content'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-space-grotesk' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], weight: ['500'], variable: '--font-jetbrains-mono' })

const defaultTitle = 'Planora | Full-Stack office previews in 72–96 h for Miami brokers'
const defaultDescription =
  'Full-Stack office previews for tenant-rep brokers in Miami: one test-fit, clean 2D, two stills, and a 60-second video delivered in 72–96 hours for 2k–20k ft² deals.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: '%s | Planora',
  },
  description: defaultDescription,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: SITE_URL,
    images: ['/og-planora.png'],
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
        <div className="min-h-screen bg-soft text-ink">
          <SiteHeader />
          <main className="mx-auto max-w-6xl px-6 pb-20 pt-12">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}




