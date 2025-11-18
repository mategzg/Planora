import Image from 'next/image'
import Link from 'next/link'
import { navItems } from '@/lib/content'

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-paper py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 text-muted">
          <span className="flex items-center gap-2 rounded-full bg-ink px-3 py-1 text-xs font-semibold text-paper shadow">
            <Image src="/logo-planora.png" alt="Planora logo" width={18} height={18} className="h-4 w-4" />
            Planora
          </span>
          <span className="text-sm">Full-Stack Preview for Miami brokers</span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-accent">
              {item.label}
            </Link>
          ))}
          <a className="text-accent transition hover:opacity-80" href="mailto:planora.testfitgmail.com">
            planora.testfitgmail.com
          </a>
          <a className="text-accent transition hover:opacity-80" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
        <div className="text-xs text-muted">(c) 2025 Planora. All rights reserved.</div>
      </div>
    </footer>
  )
}

