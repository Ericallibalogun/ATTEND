import { client } from '@/sanity/client'
import { urlForImage } from '@/sanity/image'
import { sanityGalleryFetchOptions } from '@/lib/sanity-fetch-options'

export interface GalleryCategory {
  id: string
  title: string
  images: { src: string; alt: string }[]
}

export const defaultGalleryCategories: GalleryCategory[] = [
  {
    id: "agm",
    title: "Annual General Meeting (AGM)",
    images: [
      { src: "/agm_real_1.webp", alt: "Executive Corporate Boardroom at Dusk" },
      { src: "/Frame_6086.webp", alt: "Annual General Meeting Keynote Presentation" },
      { src: "/boardroom.webp", alt: "Executive AGM Boardroom Setup" },
      { src: "/Frame 1321325430.webp", alt: "Verified Access & Voting Interface" },
    ],
  },
  {
    id: "innovation",
    title: "Innovation Challenge",
    images: [
      { src: "/innovation_real_1.webp", alt: "Tech Innovation Workshop Room" },
      { src: "/Frame_6086_1.webp", alt: "Innovation Challenge Pitch Stage" },
      { src: "/Frame 35776 (1).webp", alt: "Innovation Challenge Sprint" },
      { src: "/Frame 35774 (1).webp", alt: "Judge Scoring and Leaderboard Finale" },
    ],
  },
  {
    id: "hackathons",
    title: "Hackathons",
    images: [
      { src: "/hackathon_real_1.webp", alt: "Modern Tech Hackathon Architecture" },
      { src: "/Frame 35776.webp", alt: "Live Pitching and Mentor Office Hours" },
      { src: "/cropped_collage.webp", alt: "Hackathon Builder Collaboration" },
      { src: "/collage.webp", alt: "Hackathon Team Presentation" },
    ],
  },
  {
    id: "launch",
    title: "Launch Event",
    images: [
      { src: "/boardroom3.webp", alt: "Product Launch Stage Reveal Platform" },
      { src: "/3a18b6d36eead1a8f298c36a398284fd06d5b1c0.webp", alt: "Broadcast Stage Camera & Lights" },
      { src: "/d19a92ced1ad518052748b12f9e464593833f903.webp", alt: "Hardware Keynote Presentation" },
      { src: "/Frame 1321325422.webp", alt: "Registration Check-in Desk" },
    ],
  },
]

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

function mergeSanityIntoDefaults(
  sanityImagesByCategory: Record<string, { src: string; alt: string }[]>,
): GalleryCategory[] {
  return defaultGalleryCategories.map((category) => {
    const sanityImages = sanityImagesByCategory[category.id]
    if (sanityImages && sanityImages.length > 0) {
      return { ...category, images: sanityImages }
    }
    return category
  })
}

export async function fetchGalleryCategories(): Promise<GalleryCategory[]> {
  if (!client) {
    console.warn(
      'Sanity client unavailable (missing NEXT_PUBLIC_SANITY_PROJECT_ID). Using static gallery images.',
    )
    return defaultGalleryCategories
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
      return defaultGalleryCategories
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

    return mergeSanityIntoDefaults(sanityImagesByCategory)
  } catch (error) {
    console.warn('Sanity fetch error, using static gallery categories fallback:', error)
    return defaultGalleryCategories
  }
}
