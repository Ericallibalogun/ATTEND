import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url'
import { dataset, projectId } from './env'

export const SANITY_CDN_HOST = 'cdn.sanity.io'

export function isSanityCdnUrl(url: string) {
  return url.includes(SANITY_CDN_HOST)
}

const builder = projectId
  ? createImageUrlBuilder({ projectId, dataset })
  : null

type ImageUrlOptions = {
  width?: number
  quality?: number
}

export function urlForImage(
  source: SanityImageSource,
  options: number | ImageUrlOptions = {},
) {
  if (!builder || !source) return ''

  const { width = 1920, quality = 80 } =
    typeof options === 'number' ? { width: options, quality: 80 } : options

  return builder
    .image(source)
    .width(width)
    .fit('max')
    .auto('format')
    .quality(quality)
    .url()
}
