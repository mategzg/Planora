import { render, screen } from '@testing-library/react'
import { describe, expect, it, beforeEach } from 'vitest'
import App from '../src/App'

describe('Planora site', () => {
  beforeEach(() => {
    window.history.pushState({}, '', '/')
  })

  it('renders the home hero with the core promise and CTAs', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 1, name: /close faster with a full-stack preview/i }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /schedule 15 min call/i }).length).toBeGreaterThan(0)
    expect(screen.getByRole('link', { name: /see how it works/i })).toBeInTheDocument()
  })

  it('shows pricing tiers on the pricing page', () => {
    window.history.pushState({}, '', '/pricing')
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 1, name: /full launch pricing/i }),
    ).toBeInTheDocument()
    expect(
      screen.getAllByText(/US\$ 1,000|US\$ 1,300|US\$ 1,700|US\$ 2,100/i).length,
    ).toBeGreaterThanOrEqual(4)
    expect(screen.getByText(/Request a quote/i)).toBeInTheDocument()
  })
})
