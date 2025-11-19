'use client'

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import QuoteForm from './QuoteForm'

type QuoteFormContextValue = {
  isOpen: boolean
  openForm: () => void
  closeForm: () => void
}

const QuoteFormContext = createContext<QuoteFormContextValue | null>(null)

export function QuoteFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openForm = useCallback(() => setIsOpen(true), [])
  const closeForm = useCallback(() => setIsOpen(false), [])

  const value = useMemo(() => ({ isOpen, openForm, closeForm }), [isOpen, openForm, closeForm])

  return (
    <QuoteFormContext.Provider value={value}>
      {children}
      {isOpen && <QuoteForm onClose={closeForm} />}
    </QuoteFormContext.Provider>
  )
}

export function useQuoteForm() {
  const context = useContext(QuoteFormContext)
  if (!context) {
    throw new Error('useQuoteForm must be used within QuoteFormProvider')
  }
  return context
}