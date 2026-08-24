import Image from "next/image";

type CarouselCardImageProps = {
  src: string;
  alt: string;
  /** CSS display width at the largest breakpoint (px). */
  maxDisplayWidth: number;
  priority?: boolean;
};

/**
 * Carousel card photos are static, pre-compressed WebP assets in /public.
 * Serve them at full source resolution (no Next resize pass) and request
 * enough pixels for retina so the browser is not upscaling a tiny variant.
 */
export function CarouselCardImage({
  src,
  alt,
  maxDisplayWidth,
  priority = false,
}: CarouselCardImageProps) {
  const retinaWidth = maxDisplayWidth * 2;

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      quality={100}
      unoptimized
      draggable={false}
      className="object-cover object-center"
      sizes={`(max-width: 640px) ${Math.round(maxDisplayWidth * 0.5 * 2)}px, ${retinaWidth}px`}
    />
  );
}
