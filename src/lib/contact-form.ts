const AGM_CONTACT_TO =
  process.env.CONTACT_FORM_AGM_EMAIL ?? 'agms@experienceattend.com'

const EVENTS_CONTACT_TO =
  process.env.CONTACT_FORM_EVENTS_EMAIL ?? 'events@experienceattend.com'

const CONTACT_FROM =
  process.env.CONTACT_FORM_FROM_EMAIL ??
  'Attend Contact <contact@experienceattend.com>'

const AGM_INTENTS = new Set(['host-agm', 'join-agm'])

export const INTENT_LABELS: Record<string, string> = {
  'host-agm': 'I want to host an Annual General Meeting',
  'join-agm': 'I want to join an Annual General Meeting',
  'setup-innovation': 'I want to setup an Innovation Challenge',
  'join-innovation': 'I want to participate in an Innovation Challenge',
  'launch-product': 'I want to launch a new Product',
  others: 'Others',
}

export type ContactTopic = 'agm' | 'innovation' | 'launch'

const AGM_KEYWORD_PATTERNS = [
  /\bagm\b/i,
  /\bagms\b/i,
  /annual general meeting/i,
  /shareholder meeting/i,
  /general meeting/i,
  /shareholder/i,
  /proxy vote/i,
  /proxy lodgement/i,
]

const INNOVATION_KEYWORD_PATTERNS = [
  /innovation challenge/i,
  /\binnovation\b/i,
  /\bhackathon\b/i,
  /\bideathon\b/i,
]

const LAUNCH_KEYWORD_PATTERNS = [
  /product launch/i,
  /launch a product/i,
  /launch event/i,
  /launching a product/i,
  /new product launch/i,
  /\blaunch\b/i,
]

export type ContactFormPayload = {
  fullName: string
  email: string
  phone: string
  organization: string
  intent: string
  additionalInfo?: string
}

/** When intent is "Others", infer topic from free-text additional info. */
export function detectTopicFromAdditionalInfo(
  additionalInfo?: string,
): ContactTopic | null {
  const text = additionalInfo?.trim()
  if (!text) return null

  if (AGM_KEYWORD_PATTERNS.some((pattern) => pattern.test(text))) {
    return 'agm'
  }
  if (INNOVATION_KEYWORD_PATTERNS.some((pattern) => pattern.test(text))) {
    return 'innovation'
  }
  if (LAUNCH_KEYWORD_PATTERNS.some((pattern) => pattern.test(text))) {
    return 'launch'
  }

  return null
}

export function getContactRecipient(intent: string, additionalInfo?: string) {
  if (AGM_INTENTS.has(intent)) {
    return AGM_CONTACT_TO
  }

  if (intent === 'others') {
    const topic = detectTopicFromAdditionalInfo(additionalInfo)
    if (topic === 'agm') {
      return AGM_CONTACT_TO
    }
  }

  return EVENTS_CONTACT_TO
}

function getRoutingNote(intent: string, additionalInfo?: string) {
  if (intent !== 'others') return null

  const topic = detectTopicFromAdditionalInfo(additionalInfo)
  if (!topic) return null

  const topicLabels: Record<ContactTopic, string> = {
    agm: 'AGM / shareholder meetings',
    innovation: 'Innovation Challenge',
    launch: 'Product launch',
  }

  const inbox =
    topic === 'agm' ? 'AGM inbox (agms@)' : 'Events inbox (events@)'

  return `Auto-routed to the ${inbox} based on keywords in additional info (${topicLabels[topic]}).`
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
  payload: ContactFormPayload & { intentLabel: string; routingNote?: string | null },
) {
  const additionalInfo = payload.additionalInfo?.trim() || '—'
  const routingNote = payload.routingNote?.trim()

  const textLines = [
    'New contact form submission from Attend',
    '',
    `Full Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Organization: ${payload.organization}`,
    `What they want to do: ${payload.intentLabel}`,
    `Additional Info: ${additionalInfo}`,
  ]

  if (routingNote) {
    textLines.splice(2, 0, routingNote, '')
  }

  const htmlParts = [
    routingNote
      ? `<p><strong>Routing:</strong> ${escapeHtml(routingNote)}</p>`
      : '',
    '<h2>New contact form submission</h2>',
    `<p><strong>Full Name:</strong> ${escapeHtml(payload.fullName)}</p>`,
    `<p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>`,
    `<p><strong>Phone:</strong> ${escapeHtml(payload.phone)}</p>`,
    `<p><strong>Organization:</strong> ${escapeHtml(payload.organization)}</p>`,
    `<p><strong>What they want to do:</strong> ${escapeHtml(payload.intentLabel)}</p>`,
    `<p><strong>Additional Info:</strong><br />${escapeHtml(additionalInfo).replace(/\n/g, '<br />')}</p>`,
  ]

  return { text: textLines.join('\n'), html: htmlParts.filter(Boolean).join('\n') }
}

export async function sendContactForm(payload: ContactFormPayload) {
  const serverToken = process.env.POSTMARK_SERVER_TOKEN

  if (!serverToken) {
    console.warn('POSTMARK_SERVER_TOKEN is not configured - skipping email send')
    return { ok: true as const, skipped: true as const }
  }

  const intentLabel = INTENT_LABELS[payload.intent] ?? payload.intent
  const routingNote = getRoutingNote(payload.intent, payload.additionalInfo)
  const to = getContactRecipient(payload.intent, payload.additionalInfo)
  const { text, html } = buildEmailContent({
    ...payload,
    intentLabel,
    routingNote,
  })

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
