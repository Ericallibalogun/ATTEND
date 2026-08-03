"use client";

import Image from "next/image";
import {
  CoverCarousel,
  CoverCtaButtons,
  useHeroCarousel,
} from "@/components/cover/cover-carousel";
import { heroSlides } from "@/lib/site";

function HeroSlideContent({
  eyebrow,
  headline,
  description,
  primaryCta,
  secondaryCta,
  slideKey,
}: {
  eyebrow: string;
  headline: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  slideKey: number;
}) {
  return (
    <div key={slideKey} className="hero-slide-animate max-w-[814px] text-left">
      <p className="mb-5 flex items-center gap-2.5 text-[11px] font-normal uppercase tracking-[-0.02em] text-accent">
        <span
          className="inline-block size-1.5 shrink-0 rounded-full bg-accent"
          aria-hidden
        />
        {eyebrow}
      </p>
      <h1 className="max-w-[814px] whitespace-pre-line text-[2.25rem] font-normal leading-[1.2] tracking-[-0.04em] text-white md:text-[3rem] lg:text-[4.5rem]">
        {headline}
      </h1>
      <p className="mt-5 max-w-[52ch] text-left text-[15px] font-normal leading-[1.65] text-white/80 md:text-base">
        {description}
      </p>
      <div className="mt-8 text-left">
        <CoverCtaButtons primaryCta={primaryCta} secondaryCta={secondaryCta} />
      </div>
    </div>
  );
}

function HeroBackgrounds({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {heroSlides.map((slide, i) => {
        const isActive = i === activeIndex;

        return (
          <div
            key={slide.image}
            className="hero-bg-layer absolute inset-0"
            data-active={isActive}
            style={{ zIndex: isActive ? 1 : 0 }}
            aria-hidden={!isActive}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={i === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        );
      })}
    </div>
  );
}

type CoverHeroContentProps = {
  id?: string;
};

export function CoverHeroContent({ id }: CoverHeroContentProps) {
  const { index, slide, prev, next, pause, resume } = useHeroCarousel();

  return (
    <section
      id={id}
      className="relative flex min-h-screen flex-col overflow-hidden"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <HeroBackgrounds activeIndex={index} />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        aria-hidden
      >
        {/* Base scrim — darkens the full image */}
        <div className="absolute inset-0 bg-black/35" />
        {/* Left gradient — hero copy readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/10" />
        {/* Top gradient — logo, nav links, and buttons */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/25 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col px-6 md:px-10 lg:px-14">
        <div className="flex flex-1 flex-col justify-end pb-16 pt-8 lg:pb-24 lg:pt-12">
          <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,814px)_1fr] lg:gap-16">
            <HeroSlideContent
              slideKey={index}
              eyebrow={slide.eyebrow}
              headline={slide.headline}
              description={slide.description}
              primaryCta={slide.primaryCta}
              secondaryCta={slide.secondaryCta}
            />

            <div className="flex justify-start lg:justify-end lg:self-end">
              <CoverCarousel index={index} onPrev={prev} onNext={next} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
