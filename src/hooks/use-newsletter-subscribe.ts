'use client'

import { useState, type FormEvent } from 'react'
import { subscribeNewsletter } from '@/lib/subscribe-newsletter-client'
import type { NewsletterSource } from '@/lib/newsletter-subscription'

export function useNewsletterSubscribe(source: NewsletterSource) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle',
  )
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      await subscribeNewsletter(email, source)
      setEmail('')
      setStatus('success')
      window.setTimeout(() => setStatus('idle'), 3500)
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error ? error.message : 'Unable to subscribe right now.',
      )
    }
  }

  return {
    email,
    setEmail,
    status,
    errorMessage,
    handleSubmit,
    isSubmitting: status === 'loading',
  }
}
