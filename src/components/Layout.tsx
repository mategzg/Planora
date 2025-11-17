import { Link, NavLink } from 'react-router-dom'
import type { ReactNode } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/logo-planora.svg'

export type NavItem = {
  label: string
  to: string
}

const primaryCta =
  'mailto:planora.testfitgmail.com?subject=Full-Stack%20Preview%20%5Bft%20range%5D%20%5BSubmarket%5D%20%5BTarget%20date%5D&body=Broker%20name:%0ACompany:%0AFt%20range:%0ASubmarket:%0ATimeline:%0A'

export function Layout({ children, navItems }: { children: ReactNode; navItems: NavItem[] }) {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      'text-sm font-semibold transition hover:text-accent',
      isActive ? 'text-accent underline decoration-2 underline-offset-8' : 'text-muted',
    ].join(' ')

  return (
    <div className="min-h-screen bg-soft text-ink">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="flex items-center gap-3 rounded-full bg-ink px-3 py-1 text-sm font-semibold text-paper shadow-lg"
          >
            <img src={viteLogo} alt="Planora logo" className="h-5 w-5" />
            <span>Planora</span>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === '/'}>
                {item.label}
              </NavLink>
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

      <main className="mx-auto max-w-6xl px-6 pb-20 pt-12">{children}</main>

      <footer className="border-t border-slate-200 bg-paper py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-muted">
            <span className="rounded-full bg-ink px-3 py-1 text-xs font-semibold text-paper shadow">
              Planora
            </span>
            <span className="text-sm">Full-Stack Preview for Miami brokers</span>
            <img src={reactLogo} alt="React" className="h-5 w-5" />
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
            <a
              className="text-accent transition hover:opacity-80"
              href="mailto:planora.testfitgmail.com"
            >
              planora.testfitgmail.com
            </a>
            <a
              className="text-accent transition hover:opacity-80"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="text-xs text-muted">(c) 2025 Planora. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
