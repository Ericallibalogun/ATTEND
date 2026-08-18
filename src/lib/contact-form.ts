const AGM_CONTACT_TO =
  process.env.CONTACT_FORM_AGM_EMAIL ?? 'agms@experienceattend.com'

const EVENTS_CONTACT_TO =
  process.env.CONTACT_FORM_EVENTS_EMAIL ?? 'events@experienceattend.com'

const CONTACT_FROM =
  process.env.CONTACT_FORM_FROM_EMAIL ??
  'Attend Contact <notifications@experienceattend.com>'

const AGM_INTENTS = new Set(['host-agm', 'join-agm'])

export const INTENT_LABELS: Record<string, string> = {
  'host-agm': 'I want to host an Annual General Meeting',
  'join-agm': 'I want to join an Annual General Meeting',
  'setup-innovation': 'I want to setup an Innovation Challenge',
  'join-innovation': 'I want to participate in an Innovation Challenge',
  'launch-product': 'I want to launch a new Product',
  others: 'Others',
}

export type ContactFormPayload = {
  fullName: string
  email: string
  phone: string
  organization: string
  intent: string
  additionalInfo?: string
}

export function getContactRecipient(intent: string) {
  return AGM_INTENTS.has(intent) ? AGM_CONTACT_TO : EVENTS_CONTACT_TO
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function buildEmailContent(
  payload: ContactFormPayload & { intentLabel: string },
) {
  const additionalInfo = payload.additionalInfo?.trim() || '—'

  const text = [
    'New contact form submission from Attend',
    '',
    `Full Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Organization: ${payload.organization}`,
    `What they want to do: ${payload.intentLabel}`,
    `Additional Info: ${additionalInfo}`,
  ].join('\n')

  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Full Name:</strong> ${escapeHtml(payload.fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(payload.phone)}</p>
    <p><strong>Organization:</strong> ${escapeHtml(payload.organization)}</p>
    <p><strong>What they want to do:</strong> ${escapeHtml(payload.intentLabel)}</p>
    <p><strong>Additional Info:</strong><br />${escapeHtml(additionalInfo).replace(/\n/g, '<br />')}</p>
  `

  return { text, html }
}

export async function sendContactForm(payload: ContactFormPayload) {
  const serverToken = process.env.POSTMARK_SERVER_TOKEN

  if (!serverToken) {
    console.warn('POSTMARK_SERVER_TOKEN is not configured - skipping email send')
    return { ok: true as const, skipped: true as const }
  }

  const intentLabel = INTENT_LABELS[payload.intent] ?? payload.intent
  const to = getContactRecipient(payload.intent)
  const { text, html } = buildEmailContent({ ...payload, intentLabel })

  const response = await fetch('https://api.postmarkapp.com/email', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Postmark-Server-Token': serverToken,
    },
    body: JSON.stringify({
      From: CONTACT_FROM,
      To: to,
      ReplyTo: payload.email,
      Subject: `New Attend contact request from ${payload.fullName}`,
      TextBody: text,
      HtmlBody: html,
      MessageStream: 'outbound',
    }),
  })

  if (!response.ok) {
    const errorBody = await response.text()
    return { ok: false as const, skipped: false as const, error: errorBody }
  }

  return { ok: true as const, skipped: false as const }
}
