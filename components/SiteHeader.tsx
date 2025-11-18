'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navItems, primaryCta } from '@/lib/content'

export function SiteHeader() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-full bg-ink px-3 py-1 text-sm font-semibold text-paper shadow-lg"
        >
          <Image src="/logo-planora.png" alt="Planora logo" width={20} height={20} className="h-5 w-5" />
          <span>Planora</span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold transition hover:text-accent ${
                isActive(item.href) ? 'text-accent underline decoration-2 underline-offset-8' : 'text-muted'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={primaryCta}
          className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Schedule 15 min Call
        </a>
      </div>
    </header>
  )
}

