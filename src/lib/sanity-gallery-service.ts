import { client } from '@/sanity/client'
import { urlForImage } from '@/sanity/image'
import { sanityGalleryFetchOptions } from '@/lib/sanity-fetch-options'

export interface GalleryCategory {
  id: string
  title: string
  images: { src: string; alt: string }[]
}

const GALLERY_CATEGORY_LABELS: Record<string, string> = {
  agm: 'Annual General Meeting (AGM)',
  innovation: 'Innovation Challenge',
  hackathons: 'Hackathons',
  launch: 'Launch Event',
}

const GALLERY_CATEGORY_ORDER = ['agm', 'innovation', 'hackathons', 'launch'] as const

const GALLERY_CATEGORY_ALIASES: Record<string, GalleryCategory['id']> = {
  agm: 'agm',
  agms: 'agm',
  innovation: 'innovation',
  hackathon: 'hackathons',
  hackathons: 'hackathons',
  launch: 'launch',
}

function normalizeGalleryCategory(category: string | undefined): GalleryCategory['id'] | null {
  const key = (category || '').toLowerCase().trim()
  return GALLERY_CATEGORY_ALIASES[key] ?? null
}

function buildGalleryCategories(
  sanityImagesByCategory: Record<string, { src: string; alt: string }[]>,
): GalleryCategory[] {
  return GALLERY_CATEGORY_ORDER.flatMap((id) => {
    const images = sanityImagesByCategory[id]
    if (!images || images.length === 0) return []

    return [
      {
        id,
        title: GALLERY_CATEGORY_LABELS[id],
        images,
      },
    ]
  })
}

export async function fetchGalleryCategories(): Promise<GalleryCategory[]> {
  if (!client) {
    console.warn(
      'Sanity client unavailable (missing NEXT_PUBLIC_SANITY_PROJECT_ID). Returning no gallery images.',
    )
    return []
  }

  try {
    const query = `*[_type == "galleryItem" && !(_id in path("drafts.**"))] | order(order asc) {
      _id,
      title,
      category,
      images,
      image
    }`

    const rawItems = await client.fetch(query, {}, sanityGalleryFetchOptions)

    if (!rawItems || rawItems.length === 0) {
      return []
    }

    const sanityImagesByCategory: Record<string, { src: string; alt: string }[]> = {}

    rawItems.forEach((item: {
      title?: string
      category?: string
      image?: unknown
      images?: Array<{ alt?: string }>
    }) => {
      const catKey = normalizeGalleryCategory(item.category)
      if (!catKey) {
        console.warn(`Unknown gallery category "${item.category}" on item "${item.title}"`)
        return
      }

      if (!sanityImagesByCategory[catKey]) {
        sanityImagesByCategory[catKey] = []
      }

      if (item.image) {
        const src = urlForImage(item.image, { width: 1600, quality: 75 })
        if (src) {
          sanityImagesByCategory[catKey].push({
            src,
            alt: item.title || 'Event photo',
          })
        }
      }

      if (item.images && Array.isArray(item.images)) {
        item.images.forEach((img) => {
          const src = urlForImage(img, { width: 1600, quality: 75 })
          if (src) {
            sanityImagesByCategory[catKey].push({
              src,
              alt: img.alt || item.title || 'Event photo',
            })
          }
        })
      }
    })

    return buildGalleryCategories(sanityImagesByCategory)
  } catch (error) {
    console.warn('Sanity fetch error, returning no gallery images:', error)
    return []
  }
}
