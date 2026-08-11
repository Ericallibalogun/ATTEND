import { client } from '@/sanity/client'
import { urlForImage } from '@/sanity/image'

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

export async function fetchGalleryCategories(): Promise<GalleryCategory[]> {
  if (!client) {
    return defaultGalleryCategories
  }

  try {
    const query = `*[_type == "galleryItem"] | order(order asc) {
      _id,
      title,
      category,
      images,
      image
    }`

    const rawItems = await client.fetch(query)

    if (!rawItems || rawItems.length === 0) {
      return defaultGalleryCategories
    }

    const categoriesMap: Record<string, { title: string; images: { src: string; alt: string }[] }> = {
      agm: { title: "Annual General Meeting (AGM)", images: [] },
      innovation: { title: "Innovation Challenge", images: [] },
      hackathons: { title: "Hackathons", images: [] },
      launch: { title: "Launch Event", images: [] },
    }

    rawItems.forEach((item: any) => {
      const catKey = (item.category || 'agm').toLowerCase()
      if (!categoriesMap[catKey]) {
        categoriesMap[catKey] = {
          title: item.category.charAt(0).toUpperCase() + item.category.slice(1),
          images: [],
        }
      }

      // Handle the legacy single image field
      if (item.image) {
        categoriesMap[catKey].images.push({
          src: urlForImage(item.image),
          alt: item.title || 'Event photo',
        })
      }

      // Handle the new bulk images array field
      if (item.images && Array.isArray(item.images)) {
        item.images.forEach((img: any) => {
          categoriesMap[catKey].images.push({
            src: urlForImage(img),
            alt: img.alt || item.title || 'Event photo',
          })
        })
      }
    })

    const result = Object.entries(categoriesMap)
      .filter(([_, cat]) => cat.images.length > 0)
      .map(([id, cat]) => ({
        id,
        title: cat.title,
        images: cat.images,
      }))

    return result.length > 0 ? result : defaultGalleryCategories
  } catch (error) {
    console.warn('Sanity fetch error, using static gallery categories fallback:', error)
    return defaultGalleryCategories
  }
}
