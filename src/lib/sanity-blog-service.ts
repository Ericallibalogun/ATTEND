import { client } from '@/sanity/client'
import { urlForImage } from '@/sanity/image'
import { sampleBlogPosts, type BlogPost } from './blog-data'

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  if (!client) {
    return sampleBlogPosts
  }

  try {
    const query = `*[_type == "post"] | order(publishedAt desc) {
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

    const rawPosts = await client.fetch(query)

    if (!rawPosts || rawPosts.length === 0) {
      return sampleBlogPosts
    }

    return rawPosts.map((post: any) => ({
      id: post._id,
      slug: post.slug || post._id,
      title: post.title,
      excerpt: post.excerpt,
      category: post.category || 'General',
      readTime: post.readTime || '5 min read',
      date: post.date ? new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recently',
      image: post.coverImage ? urlForImage(post.coverImage) : '/boardroom-2.webp',
      featured: Boolean(post.featured),
      content: {
        intro: post.intro || post.excerpt,
        sections: (post.sections || []).map((sec: any) => ({
          heading: sec.heading || '',
          body: sec.body || '',
        })),
      },
    }))
  } catch (error) {
    console.warn('Sanity fetch error, using static blog posts fallback:', error)
    return sampleBlogPosts
  }
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await fetchBlogPosts()
  return posts.find((p) => p.slug === slug) || posts[0] || null
}
