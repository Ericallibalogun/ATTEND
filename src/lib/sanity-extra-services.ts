import { client } from '@/sanity/client'
import { urlForImage } from '@/sanity/image'

export interface EventItem {
  id: string
  title: string
  slug: string
  eventType: string
  eventDate: string
  location: string
  description: string
  coverImage?: string
  registrationLink?: string
  featured: boolean
}

// Fallbacks
export const fallbackEvents: EventItem[] = [
  {
    id: 'e1',
    title: 'Attend Global Summit',
    slug: 'attend-global-summit',
    eventType: 'Conference',
    eventDate: new Date().toISOString(),
    location: 'Virtual',
    description: 'The premier event for virtual event professionals.',
    featured: true,
  },
]

export async function fetchEvents(): Promise<EventItem[]> {
  if (!client) return fallbackEvents
  try {
    const query = `*[_type == "event"] | order(eventDate asc) {
      _id, title, "slug": slug.current, eventType, eventDate, location, description, coverImage, registrationLink, featured
    }`
    const rawItems = await client.fetch(query)
    if (!rawItems || rawItems.length === 0) return fallbackEvents

    return rawItems.map((item: any) => ({
      id: item._id,
      title: item.title,
      slug: item.slug,
      eventType: item.eventType,
      eventDate: item.eventDate,
      location: item.location || 'Virtual',
      description: item.description || '',
      coverImage: item.coverImage ? urlForImage(item.coverImage) : undefined,
      registrationLink: item.registrationLink,
      featured: Boolean(item.featured),
    }))
  } catch (error) {
    console.warn('Sanity fetch error for events, using fallback', error)
    return fallbackEvents
  }
}
