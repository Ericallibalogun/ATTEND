import { NextRequest, NextResponse } from 'next/server'

const CONTACT_TO =
  process.env.CONTACT_FORM_TO_EMAIL ?? 'contact@experienceattend.com'

const CONTACT_FROM =
  process.env.CONTACT_FORM_FROM_EMAIL ?? 'Attend Contact <onboarding@resend.dev>'

const INTENT_LABELS: Record<string, string> = {
  'host-agm': 'I want to host an Annual General Meeting',
  'join-agm': 'I want to join an Annual General Meeting',
  'setup-innovation': 'I want to setup an Innovation Challenge',
  'join-innovation': 'I want to participate in an Innovation Challenge',
  'launch-product': 'I want to launch a new Product',
  others: 'Others',
}

type ContactPayload = {
  fullName?: string
  email?: string
  phone?: string
  organization?: string
  intent?: string
  additionalInfo?: string
}

function buildEmailContent(payload: Required<Pick<ContactPayload, 'fullName' | 'email' | 'phone' | 'organization' | 'intent'>> & {
  additionalInfo?: string
}) {
  const intentLabel = INTENT_LABELS[payload.intent] ?? payload.intent
  const additionalInfo = payload.additionalInfo?.trim() || '—'

  const text = [
    'New contact form submission from Attend',
    '',
    `Full Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Organization: ${payload.organization}`,
    `What they want to do: ${intentLabel}`,
    `Additional Info: ${additionalInfo}`,
  ].join('\n')

  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Full Name:</strong> ${escapeHtml(payload.fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(payload.phone)}</p>
    <p><strong>Organization:</strong> ${escapeHtml(payload.organization)}</p>
    <p><strong>What they want to do:</strong> ${escapeHtml(intentLabel)}</p>
    <p><strong>Additional Info:</strong><br />${escapeHtml(additionalInfo).replace(/\n/g, '<br />')}</p>
  `

  return { text, html }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactPayload
    const fullName = body.fullName?.trim()
    const email = body.email?.trim()
    const phone = body.phone?.trim()
    const organization = body.organization?.trim()
    const intent = body.intent?.trim()
    const additionalInfo = body.additionalInfo?.trim()

    if (!fullName || !email || !phone || !organization || !intent) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.warn('RESEND_API_KEY is not configured - skipping email send')
      return NextResponse.json({ success: true, emailSkipped: true })
    }

    const { text, html } = buildEmailContent({
      fullName,
      email,
      phone,
      organization,
      intent,
      additionalInfo,
    })

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: CONTACT_FROM,
        to: [CONTACT_TO],
        reply_to: email,
        subject: `New Attend contact request from ${fullName}`,
        text,
        html,
      }),
    })

    if (!response.ok) {
      const errorBody = await response.text()
      console.error('Resend API error:', errorBody)
      return NextResponse.json(
        { error: 'Unable to send your message right now.' },
        { status: 502 },
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
