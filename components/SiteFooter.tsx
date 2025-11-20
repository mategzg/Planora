import Image from 'next/image'
import Link from 'next/link'
import { navItems } from '@/lib/content'

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 text-muted">
          <Link href="/" className="flex items-center" aria-label="Planora home">
            <Image src="/logo-planora.png" alt="Planora" width={180} height={44} className="h-11 w-auto object-contain" />
          </Link>
          <span className="text-sm">Full-Stack Preview for Miami brokers</span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-accent">
              {item.label}
            </Link>
          ))}
          <a className="text-accent transition hover:opacity-80" href="mailto:planora.testfit@gmail.com">
            planora.testfit@gmail.com
          </a>
        </div>
      </div>
      <div className="border-t border-muted/10 text-center px-6 pt-8 pb-4">
        <p className="text-sm text-muted">Built by architecture graduates who understand how deals actually move.</p>
      </div>
      <div className="text-center pb-6 text-xs text-muted">© 2025 Planora. All rights reserved.</div>
    </footer>
  )
}
