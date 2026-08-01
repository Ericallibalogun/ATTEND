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

      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
        {/* Base scrim — darkens the full image */}
        <div className="absolute inset-0 bg-black/35" />
        {/* Left gradient — hero copy readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/10" />
        {/* Top gradient — logo, nav links, and buttons */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/25 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col px-6 md:px-10 lg:px-14">
        <div className="flex flex-1 flex-col justify-end pb-16 pt-8 lg:pb-24 lg:pt-12">
          <div className="max-w-[814px] text-left">
            <p className="mb-5 flex items-center gap-2.5 text-[11px] font-normal uppercase tracking-[0.22em] text-accent">
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
