'use client'

import { useState, type FormEvent } from 'react'
import { ftRanges, giftStyles, submarkets } from '@/lib/content'

export function GiftForm() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('success')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-slate-200 bg-paper p-6 shadow-sm"
    >
      <div className="grid gap-3 md:grid-cols-2">
        <label className="space-y-1 text-sm font-semibold text-ink">
          Name
          <input
            required
            name="name"
            className="mt-1 w-full rounded-lg border border-slate-200 bg-soft px-3 py-2 text-sm focus:border-accent focus:outline-none"
          />
        </label>
        <label className="space-y-1 text-sm font-semibold text-ink">
          Company
          <input
            name="company"
            className="mt-1 w-full rounded-lg border border-slate-200 bg-soft px-3 py-2 text-sm focus:border-accent focus:outline-none"
          />
        </label>
        <label className="space-y-1 text-sm font-semibold text-ink">
          Email
          <input
            required
            type="email"
            name="email"
            className="mt-1 w-full rounded-lg border border-slate-200 bg-soft px-3 py-2 text-sm focus:border-accent focus:outline-none"
          />
        </label>
        <label className="space-y-1 text-sm font-semibold text-ink">
          Submarket
          <select
            name="submarket"
            className="mt-1 w-full rounded-lg border border-slate-200 bg-soft px-3 py-2 text-sm focus:border-accent focus:outline-none"
          >
            {submarkets.map((sub) => (
              <option key={sub}>{sub}</option>
            ))}
          </select>
        </label>
        <label className="space-y-1 text-sm font-semibold text-ink">
          Approx ft range
          <select
            name="range"
            className="mt-1 w-full rounded-lg border border-slate-200 bg-soft px-3 py-2 text-sm focus:border-accent focus:outline-none"
          >
            {ftRanges.map((range) => (
              <option key={range}>{range}</option>
            ))}
          </select>
        </label>
        <label className="space-y-1 text-sm font-semibold text-ink">
          Style
          <select
            name="style"
            className="mt-1 w-full rounded-lg border border-slate-200 bg-soft px-3 py-2 text-sm focus:border-accent focus:outline-none"
          >
            {giftStyles.map((style) => (
              <option key={style}>{style}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="space-y-1 text-sm font-semibold text-ink">
        Brand guidelines URL (optional)
        <input
          type="url"
          name="brand"
          placeholder="https://"
          className="mt-1 w-full rounded-lg border border-slate-200 bg-soft px-3 py-2 text-sm focus:border-accent focus:outline-none"
        />
      </label>
      <label className="space-y-1 text-sm font-semibold text-ink">
        Notes (optional)
        <textarea
          name="notes"
          rows={3}
          className="mt-1 w-full rounded-lg border border-slate-200 bg-soft px-3 py-2 text-sm focus:border-accent focus:outline-none"
          placeholder="Reference projects, mood, target audience"
        />
      </label>
      <label className="flex items-start gap-2 text-sm font-semibold text-ink">
        <input
          required
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-slate-300 text-accent focus:ring-accent"
        />
        <span className="font-normal text-muted">
          I accept the preview gift terms (one per company, no revisions, watermarked, non-exclusive use).
        </span>
      </label>
      {status === 'success' && (
        <div
          className="rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm text-emerald-800"
          role="status"
        >
          Thanks! You'll receive your images in 48 hours.
        </div>
      )}
      <button
        type="submit"
        className="w-full rounded-full bg-accent px-4 py-3 text-sm font-semibold text-ink shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-xl"
      >
        Submit and show success
      </button>
    </form>
  )
}

