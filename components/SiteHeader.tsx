'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navItems } from '@/lib/content'
import { QuoteFormButton } from '@/components/QuoteFormButton'

export function SiteHeader() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center" aria-label="Planora home">
          <Image
            src="/logo-planora.png"
            alt="Planora"
            width={180}
            height={44}
            priority
            className="h-11 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                isActive(item.href) ? 'text-accent underline decoration-2 underline-offset-8' : 'text-muted'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <QuoteFormButton className="rounded-full bg-accentFill px-4 py-2 text-sm font-semibold text-white shadow-md transition duration-200 hover:brightness-95">
          Schedule 15 min Call
        </QuoteFormButton>
      </div>
    </header>
  )
}

