import { render, screen } from '@testing-library/react'
import HomePage from '@/app/page'
import PricingPage from '@/app/pricing/page'

describe('Planora marketing pages', () => {
  it('renders the home hero headline', () => {
    render(<HomePage />)
    expect(screen.getByText(/Full-Stack Preview in 72-96 h/i)).toBeInTheDocument()
  })

  it('shows the primary CTA on home', () => {
    render(<HomePage />)
    expect(screen.getAllByText(/Schedule 15 min Call/i)[0]).toBeInTheDocument()
  })

  it('lists all launch pricing tiers', () => {
    render(<PricingPage />)
    expect(screen.getByText('US$ 1,000')).toBeInTheDocument()
    expect(screen.getByText('US$ 1,300')).toBeInTheDocument()
    expect(screen.getByText('US$ 1,700')).toBeInTheDocument()
    expect(screen.getByText('US$ 2,100')).toBeInTheDocument()
  })
})

