import Image from "next/image";
import Link from "next/link";
import { CoverHeader } from "@/components/cover/cover-header";
import { siteConfig, heroSlides } from "@/lib/site";
import { CoverCtaButtons } from "@/components/cover/cover-carousel";

export function AgmsHero() {
  const slide = heroSlides[0]; // AGMs slide

  return (
    <section id="hero-section" className="relative flex min-h-screen flex-col overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <Image
          src={slide.image}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Light dark hue at header area only */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-black/60 via-black/25 to-transparent z-[2]" />

      {/* Bottom linear gradient for text block readability */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-[60%] bg-gradient-to-t from-black/90 via-black/40 to-transparent z-[2]" />

      <div className="relative z-10 flex flex-1 flex-col px-6 md:px-10 lg:px-14">
        <div className="flex flex-1 flex-col justify-end pb-16 pt-8 lg:pb-24 lg:pt-12">
          <div className="max-w-[814px] text-left">
            <p className="mb-5 flex items-center gap-2.5 text-[11px] font-normal uppercase tracking-[-0.02em] text-accent">
              <span
                className="inline-block size-1.5 shrink-0 rounded-full bg-accent"
                aria-hidden
              />
              {slide.eyebrow}
            </p>
            <h1 className="max-w-[814px] whitespace-pre-line text-[2.25rem] font-normal leading-[1.2] tracking-[-0.04em] text-white md:text-[3rem] lg:text-[4.5rem]">
              {slide.headline}
            </h1>
            <p className="mt-5 max-w-[52ch] text-left text-[15px] font-normal leading-[1.65] text-white/80 md:text-base">
              {slide.description}
            </p>
            <div className="mt-8 text-left">
              <CoverCtaButtons
                primaryCta={slide.primaryCta}
                secondaryCta={slide.secondaryCta}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
