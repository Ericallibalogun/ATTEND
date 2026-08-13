import Image, { type ImageProps } from 'next/image'
import { isSanityCdnUrl } from '@/sanity/image'

export function SanityImage({ src, unoptimized, ...props }: ImageProps) {
  const srcString = typeof src === 'string' ? src : ''
  const useSanityCdn = isSanityCdnUrl(srcString)

  return (
    <Image
      {...props}
      src={src}
      unoptimized={unoptimized ?? useSanityCdn}
    />
  )
}
