import { revalidatePath, revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

export async function POST(req: NextRequest) {
  try {
    const secret = process.env.SANITY_REVALIDATE_SECRET
    if (!secret) {
      return new NextResponse('Missing SANITY_REVALIDATE_SECRET', { status: 500 })
    }

    const { isValidSignature, body } = await parseBody(req, secret)

    if (!isValidSignature) {
      return new NextResponse('Invalid signature', { status: 401 })
    }

    if (body?._type === 'galleryItem') {
      revalidateTag('gallery', 'max')
      revalidatePath('/gallery')
    }

    if (body?._type === 'post') {
      revalidateTag('blog', 'max')
      revalidatePath('/blog')
      const slug = (body as { slug?: { current?: string } }).slug?.current
      if (slug) {
        revalidatePath(`/blog/${slug}`)
      }
    }

    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (error) {
    console.error('Sanity revalidation error:', error)
    return new NextResponse('Webhook error', { status: 500 })
  }
}
