import { NextRequest, NextResponse } from 'next/server'
import { sendContactForm } from '@/lib/contact-form'

type ContactPayload = {
  fullName?: string
  email?: string
  phone?: string
  organization?: string
  intent?: string
  additionalInfo?: string
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactPayload
    const fullName = body.fullName?.trim()
    const email = body.email?.trim()
    const phone = body.phone?.trim()
    const organization = body.organization?.trim()
    const intent = body.intent?.trim()

    if (!fullName || !email || !phone || !organization || !intent) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    const { ok, result } = await sendContactForm({
      fullName,
      email,
      phone,
      organization,
      intent,
      additionalInfo: body.additionalInfo?.trim(),
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
