const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const NEWSLETTER_SOURCES = ['footer', 'blog', 'blog-post'] as const

export type NewsletterSource = (typeof NEWSLETTER_SOURCES)[number]

export type NewsletterPayload = {
  email: string
  source: NewsletterSource
}

export function isValidNewsletterEmail(email: string): boolean {
  return EMAIL_PATTERN.test(email.trim())
}

function isGoogleAppsScriptWebhook(url: string) {
  return url.includes('script.google.com/macros/s/')
}

function buildGoogleAppsScriptGetUrl(
  webhookUrl: string,
  row: Record<string, string>,
) {
  const url = new URL(webhookUrl)
  url.searchParams.set('email', row.email)
  url.searchParams.set('source', row.source)
  url.searchParams.set('subscribedAt', row.subscribedAt)
  return url.toString()
}

function parseWebhookResponse(responseText: string) {
  try {
    return JSON.parse(responseText) as { success?: boolean; error?: string }
  } catch {
    return null
  }
}

async function callWebhook(webhookUrl: string, row: Record<string, string>) {
  if (isGoogleAppsScriptWebhook(webhookUrl)) {
    const response = await fetch(buildGoogleAppsScriptGetUrl(webhookUrl, row), {
      method: 'GET',
      cache: 'no-store',
      redirect: 'follow',
    })

    const responseText = await response.text().catch(() => '')
    const parsed = parseWebhookResponse(responseText)

    if (parsed?.success) {
      return { ok: true as const }
    }

    if (
      !response.ok ||
      responseText.includes('Page not found') ||
      responseText.includes('unable to open the file')
    ) {
      return {
        ok: false as const,
        error:
          'Spreadsheet webhook is unreachable. Redeploy Apps Script with access set to Anyone.',
      }
    }

    return {
      ok: false as const,
      error: parsed?.error || 'Spreadsheet webhook did not confirm the row.',
    }
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(row),
    cache: 'no-store',
    redirect: 'follow',
  })

  const responseText = await response.text().catch(() => '')

  if (!response.ok) {
    return {
      ok: false as const,
      error: responseText || `Spreadsheet webhook returned ${response.status}.`,
    }
  }

  return { ok: true as const }
}

export async function saveNewsletterSubscription(payload: NewsletterPayload) {
  const webhookUrl = process.env.NEWSLETTER_SHEET_WEBHOOK_URL?.trim()

  if (!webhookUrl) {
    console.warn(
      'NEWSLETTER_SHEET_WEBHOOK_URL is not set — newsletter row was not saved.',
    )
    return { ok: true as const, skipped: true as const }
  }

  const row = {
    email: payload.email.trim().toLowerCase(),
    source: payload.source,
    subscribedAt: new Date().toISOString(),
  }

  try {
    return await callWebhook(webhookUrl, row)
  } catch (error) {
    return {
      ok: false as const,
      error:
        error instanceof Error ? error.message : 'Unable to reach spreadsheet.',
    }
  }
}
