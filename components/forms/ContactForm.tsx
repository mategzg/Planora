'use client'

import { useState, type FormEvent } from 'react'
import { ftRanges, submarkets } from '@/lib/content'

export function ContactForm() {
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
          Phone (optional)
          <input
            name="phone"
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
      </div>
      <label className="space-y-1 text-sm font-semibold text-ink">
        Desired timeline
        <input
          name="timeline"
          className="mt-1 w-full rounded-lg border border-slate-200 bg-soft px-3 py-2 text-sm focus:border-accent focus:outline-none"
        />
      </label>
      <label className="space-y-1 text-sm font-semibold text-ink">
        Message
        <textarea
          name="message"
          rows={4}
          className="mt-1 w-full rounded-lg border border-slate-200 bg-soft px-3 py-2 text-sm focus:border-accent focus:outline-none"
          placeholder="Submarket details, ft range, key dates"
        />
      </label>
      {status === 'success' && (
        <div
          className="rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm text-emerald-800"
          role="status"
        >
          Thanks! We'll reply within one business day.
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

