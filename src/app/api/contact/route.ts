import { NextRequest, NextResponse } from 'next/server'

const AGM_CONTACT_TO =
  process.env.CONTACT_FORM_AGM_EMAIL ?? 'agms@experienceattend.com'

const EVENTS_CONTACT_TO =
  process.env.CONTACT_FORM_EVENTS_EMAIL ?? 'events@experienceattend.com'

const AGM_INTENTS = new Set(['host-agm', 'join-agm'])

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

function getContactRecipient(intent: string) {
  return AGM_INTENTS.has(intent) ? AGM_CONTACT_TO : EVENTS_CONTACT_TO
}

async function sendContactEmail(
  to: string,
  payload: {
    fullName: string
    email: string
    phone: string
    organization: string
    intentLabel: string
    additionalInfo: string
  },
) {
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: payload.fullName,
      email: payload.email,
      phone: payload.phone,
      organization: payload.organization,
      intent: payload.intentLabel,
      message: payload.additionalInfo,
      _subject: `New Attend contact request from ${payload.fullName}`,
      _replyto: payload.email,
      _template: 'table',
    }),
  })

  const result = (await response.json()) as { success?: string; message?: string }
  return { ok: response.ok && Boolean(result.success), result }
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactPayload
    const fullName = body.fullName?.trim()
    const email = body.email?.trim()
    const phone = body.phone?.trim()
    const organization = body.organization?.trim()
    const intent = body.intent?.trim()
    const additionalInfo = body.additionalInfo?.trim() || '—'

    if (!fullName || !email || !phone || !organization || !intent) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    const intentLabel = INTENT_LABELS[intent] ?? intent
    const contactTo = getContactRecipient(intent)

    const { ok, result } = await sendContactEmail(contactTo, {
      fullName,
      email,
      phone,
      organization,
      intentLabel,
      additionalInfo,
    })

    if (!ok) {
      console.error('FormSubmit error:', result)
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
