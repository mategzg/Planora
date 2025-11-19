'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'
import { CheckCircle2, Clock, Mail, X } from 'lucide-react'

type QuoteFormProps = {
  onClose: () => void
}

const initialState = {
  name: '',
  company: '',
  email: '',
  footage: '2–5k',
  submarket: 'Doral',
  timeline: 'This week',
}

const footageOptions = ['2–5k', '5–10k', '10–15k', '15–20k', 'Over 20k']
const submarketOptions = ['Doral', 'Blue Lagoon', 'Coral Gables', 'Brickell', 'Kendall', 'South Broward', 'Other']
const timelineOptions = ['This week', 'Next week', 'This month', 'Next month', 'Just exploring']

export default function QuoteForm({ onClose }: QuoteFormProps) {
  const [formData, setFormData] = useState(initialState)
  const [submitted, setSubmitted] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleChange = (field: keyof typeof initialState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    timeoutRef.current = setTimeout(() => {
      setSubmitted(false)
      setFormData({ ...initialState })
      onClose()
    }, 3000)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 px-4 py-10" onClick={onClose}>
      <div className="relative w-full max-w-lg rounded-2xl bg-paper p-8 shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          onClick={() => {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current)
            }
            setSubmitted(false)
            setFormData({ ...initialState })
            onClose()
          }}
          className="absolute right-4 top-4 rounded-full border border-muted/40 p-1 text-muted transition hover:border-accent hover:text-accent"
          aria-label="Close form"
        >
          <X className="h-4 w-4" />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center gap-3 text-center">
            <CheckCircle2 className="h-12 w-12 text-accent" />
            <p className="text-2xl font-semibold text-ink">Thanks! We'll be in touch soon.</p>
            <p className="text-sm text-muted">You'll receive a custom quote + Calendly link within 2 hours.</p>
          </div>
        ) : (
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Get a custom quote</p>
              <h3 className="mt-2 text-2xl font-semibold text-ink">Share the basics and we'll reply in under 2 hours.</h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-muted">
                Name
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(event) => handleChange('name', event.target.value)}
                  className="mt-1 w-full rounded-lg border border-muted/30 px-4 py-2.5 text-ink shadow-sm focus:border-accent focus:outline-none"
                />
              </label>
              <label className="text-sm text-muted">
                Company
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(event) => handleChange('company', event.target.value)}
                  className="mt-1 w-full rounded-lg border border-muted/30 px-4 py-2.5 text-ink shadow-sm focus:border-accent focus:outline-none"
                />
              </label>
              <label className="text-sm text-muted sm:col-span-2">
                Email
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(event) => handleChange('email', event.target.value)}
                  className="mt-1 w-full rounded-lg border border-muted/30 px-4 py-2.5 text-ink shadow-sm focus:border-accent focus:outline-none"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-muted">
                Square footage range
                <select
                  value={formData.footage}
                  onChange={(event) => handleChange('footage', event.target.value)}
                  className="mt-1 w-full rounded-lg border border-muted/30 px-4 py-2.5 text-ink shadow-sm focus:border-accent focus:outline-none"
                >
                  {footageOptions.map((option) => (
                    <option key={option} value={option}>
                      {option} ft²
                    </option>
                  ))}
                </select>
              </label>
              <label className="text-sm text-muted">
                Submarket
                <select
                  value={formData.submarket}
                  onChange={(event) => handleChange('submarket', event.target.value)}
                  className="mt-1 w-full rounded-lg border border-muted/30 px-4 py-2.5 text-ink shadow-sm focus:border-accent focus:outline-none"
                >
                  {submarketOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <label className="text-sm text-muted sm:col-span-2">
                Preferred timeline
                <select
                  value={formData.timeline}
                  onChange={(event) => handleChange('timeline', event.target.value)}
                  className="mt-1 w-full rounded-lg border border-muted/30 px-4 py-2.5 text-ink shadow-sm focus:border-accent focus:outline-none"
                >
                  {timelineOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-accentFill px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <Clock className="h-4 w-4" /> Get quote + schedule call
            </button>

            <p className="flex items-center gap-2 text-sm text-muted">
              <Mail className="h-4 w-4" /> Or email us directly: planora.testfit@gmail.com
            </p>
          </form>
        )}
      </div>
    </div>
  )
}