import { client } from '@/sanity/client'
import { urlForImage } from '@/sanity/image'
import { sanityBlogFetchOptions } from '@/lib/sanity-fetch-options'
import { type BlogPost } from './blog-data'

const blogQuery = `*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
  _id,
  "slug": slug.current,
  title,
  excerpt,
  category,
  readTime,
  "date": publishedAt,
  coverImage,
  featured,
  intro,
  sections
}`

function mapSanityPost(post: {
  _id: string
  slug?: string
  title: string
  excerpt: string
  category?: string
  readTime?: string
  date?: string
  coverImage?: unknown
  featured?: boolean
  intro?: string
  sections?: Array<{ heading?: string; body?: string }>
}): BlogPost {
  return {
    id: post._id,
    slug: post.slug || post._id,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category || 'General',
    readTime: post.readTime || '5 min read',
    date: post.date
      ? new Date(post.date).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })
      : 'Recently',
    image: post.coverImage
      ? urlForImage(post.coverImage, { width: 1400, quality: 80 })
      : '/boardroom-2.webp',
    featured: Boolean(post.featured),
    content: {
      intro: post.intro || post.excerpt,
      sections: (post.sections || []).map((sec) => ({
        heading: sec.heading || '',
        body: sec.body || '',
      })),
    },
  }
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  if (!client) {
    console.warn(
      'Sanity client unavailable (missing NEXT_PUBLIC_SANITY_PROJECT_ID). Returning no blog posts.',
    )
    return []
  }

  try {
    const rawPosts = await client.fetch(blogQuery, {}, sanityBlogFetchOptions)

    if (!rawPosts || rawPosts.length === 0) {
      return []
    }

    return rawPosts.map(mapSanityPost)
  } catch (error) {
    console.warn('Sanity fetch error, returning no blog posts:', error)
    return []
  }
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!client) {
    console.warn(
      'Sanity client unavailable (missing NEXT_PUBLIC_SANITY_PROJECT_ID). Returning no blog post.',
    )
    return null
  }

  try {
    const query = `*[_type == "post" && !(_id in path("drafts.**")) && slug.current == $slug][0] {
      _id,
      "slug": slug.current,
      title,
      excerpt,
      category,
      readTime,
      "date": publishedAt,
      coverImage,
      featured,
      intro,
      sections
    }`

    const post = await client.fetch(query, { slug }, sanityBlogFetchOptions)
    return post ? mapSanityPost(post) : null
  } catch (error) {
    console.warn('Sanity fetch error for blog slug, returning no blog post:', error)
    return null
  }
}
