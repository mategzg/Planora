'use client'

import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { useQuoteForm } from './QuoteFormProvider'

type QuoteFormButtonProps = {
  children: ReactNode
  className?: string
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'>

const baseClasses = 'font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'

export function QuoteFormButton({ children, className = '', ...rest }: QuoteFormButtonProps) {
  const { openForm } = useQuoteForm()

  return (
    <button type="button" {...rest} onClick={openForm} className={`${baseClasses} ${className}`.trim()}>
      {children}
    </button>
  )
}