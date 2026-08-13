export const sanityGalleryFetchOptions = {
  next: { revalidate: 0, tags: ['gallery'] as string[] },
} as const

export const sanityBlogFetchOptions = {
  next: { revalidate: 0, tags: ['blog'] as string[] },
} as const
