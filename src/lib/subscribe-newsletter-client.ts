import type { NewsletterSource } from '@/lib/newsletter-subscription'

export async function subscribeNewsletter(
  email: string,
  source: NewsletterSource,
) {
  const response = await fetch('/api/newsletter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, source }),
  })

  const data = (await response.json()) as { error?: string }

  if (!response.ok) {
    throw new Error(data.error ?? 'Unable to subscribe right now.')
  }

  return data
}
