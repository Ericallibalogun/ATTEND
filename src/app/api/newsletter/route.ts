import { NextRequest, NextResponse } from 'next/server'
import {
  isValidNewsletterEmail,
  NEWSLETTER_SOURCES,
  saveNewsletterSubscription,
  type NewsletterSource,
} from '@/lib/newsletter-subscription'

type NewsletterRequestBody = {
  email?: string
  source?: NewsletterSource
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as NewsletterRequestBody
    const email = body.email?.trim() ?? ''
    const source = body.source

    if (!email || !isValidNewsletterEmail(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 },
      )
    }

    if (!source || !NEWSLETTER_SOURCES.includes(source)) {
      return NextResponse.json({ error: 'Invalid subscription source.' }, { status: 400 })
    }

    const result = await saveNewsletterSubscription({ email, source })

    if (!result.ok) {
      console.error('Newsletter sheet error:', result.error)
      return NextResponse.json(
        { error: 'Unable to save your subscription right now.' },
        { status: 502 },
      )
    }

    return NextResponse.json({
      success: true,
      ...(result.skipped ? { sheetSkipped: true } : {}),
    })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
