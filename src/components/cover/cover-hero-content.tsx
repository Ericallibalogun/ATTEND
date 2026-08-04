"use client";

import Link from "next/link";
import Image from "next/image";
import {
  CoverCarousel,
  CoverCtaButtons,
  useHeroCarousel,
} from "@/components/cover/cover-carousel";
import { heroSlides } from "@/lib/site";

function DoubleChevronIcon() {
  return (
    <svg aria-hidden className="size-3.5 text-white" viewBox="0 0 16 16" fill="none">
      <path d="M4 4l4 4-4 4M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AppStoreHeroButtons() {
  return (
    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
      {/* Google Play */}
      <Link
        href="/about"
        className="inline-flex items-center gap-2.5 rounded-full border border-zinc-300/80 bg-white px-4.5 py-2.5 text-zinc-900 shadow-xs transition-opacity hover:opacity-90"
      >
        <Image
          src="/Google Play logo.webp"
          alt="Google Play"
          width={20}
          height={20}
          className="size-5 shrink-0 object-contain"
        />
        <span className="flex flex-col text-left leading-none">
          <span className="text-[8px] uppercase tracking-wider text-zinc-500 font-medium">GET IT ON</span>
          <span className="text-[12px] font-semibold text-zinc-900">Google Play</span>
        </span>
      </Link>

      {/* App Store */}
      <Link
        href="/about"
        className="inline-flex items-center gap-2.5 rounded-full border border-zinc-300/80 bg-white px-4.5 py-2.5 text-zinc-900 shadow-xs transition-opacity hover:opacity-90"
      >
        <Image
          src="/Apple logo.webp"
          alt="App Store"
          width={20}
          height={20}
          className="size-5 shrink-0 object-contain"
        />
        <span className="flex flex-col text-left leading-none">
          <span className="text-[8px] uppercase tracking-wider text-zinc-500 font-medium">Download on the</span>
          <span className="text-[12px] font-semibold text-zinc-900">App Store</span>
        </span>
      </Link>

      {/* Launch Web App */}
      <Link
        href="/about"
        className="inline-flex items-center gap-3 rounded-full border border-[#004D34] bg-white py-2 pl-2 pr-6 text-[15px] font-semibold text-[#004D34] shadow-xs transition-opacity hover:opacity-90"
      >
        <span className="flex size-8 items-center justify-center rounded-full bg-[#004D34] text-white">
          <DoubleChevronIcon />
        </span>
        <span>Launch Web App</span>
      </Link>
    </div>
  );
}

function HeroSlideContent({
  eyebrow,
  headline,
  description,
  primaryCta,
  secondaryCta,
  isAppButtons,
  slideKey,
}: {
  eyebrow: string;
  headline: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  isAppButtons?: boolean;
  slideKey: number;
}) {
  return (
    <div key={slideKey} className="hero-slide-animate max-w-[814px] text-left">
      <p className="mb-5 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[-0.02em] text-[#00FF85]">
        <span
          className="inline-block size-1.5 shrink-0 rounded-full bg-[#00FF85]"
          aria-hidden
        />
        {eyebrow}
      </p>
      <h1 className="max-w-[814px] whitespace-pre-line text-[2.25rem] font-medium leading-[1.15] tracking-tight text-white md:text-[3rem] lg:text-[4.25rem]">
        {headline}
      </h1>
      {description ? (
        <p className="mt-5 max-w-[52ch] text-left text-[15px] font-normal leading-[1.65] text-white/80 md:text-base">
          {description}
        </p>
      ) : null}
      <div className="mt-8 text-left">
        {isAppButtons ? (
          <AppStoreHeroButtons />
        ) : primaryCta && secondaryCta ? (
          <CoverCtaButtons primaryCta={primaryCta} secondaryCta={secondaryCta} />
        ) : null}
      </div>
    </div>
  );
}

function HeroBackgrounds({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {heroSlides.map((slide, i) => {
        const isActive = i === activeIndex;

        if (slide.isAppButtons) {
          return (
            <div
              key={slide.image}
              className="hero-bg-layer absolute inset-0 bg-[#062419]"
              data-active={isActive}
              style={{ zIndex: isActive ? 1 : 0 }}
              aria-hidden={!isActive}
            >
              {/* Background texture */}
              <Image
                src="/Rectangle 14 (1).webp"
                alt=""
                fill
                priority={isActive}
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
          );
        }

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

      {/* Top-Left Logo Ellipse Glow (Ellipse 433.webp) */}
      <div className="pointer-events-none absolute -top-16 -left-16 z-[2] size-[400px] sm:size-[500px] lg:size-[600px] opacity-85 mix-blend-screen">
        <Image
          src="/Ellipse 433.webp"
          alt=""
          fill
          priority
          className="object-contain object-top-left"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        aria-hidden
      >
        {/* Base scrim — darkens the full image for photo slides */}
        {!slide.isAppButtons && <div className="absolute inset-0 bg-black/35" />}
        {/* Left gradient — hero copy readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />
        {/* Top gradient — logo, nav links, and buttons */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/25 to-transparent" />
      </div>

      {/* Right side Laptop & Mobile Mockup layer for AppButtons slide */}
      {slide.isAppButtons && (
        <div className="pointer-events-none absolute right-0 bottom-0 z-[5] flex items-end justify-end w-full lg:w-[52vw] h-[55vh] sm:h-[65vh] lg:h-[75vh] xl:h-[82vh] pr-4 lg:pr-12 pb-14 lg:pb-18">
          <div className="relative w-full h-full max-w-[700px] lg:max-w-[800px] xl:max-w-[900px]">
            <Image
              src={slide.image}
              alt="Attend mobile and desktop experience"
              fill
              priority
              className="object-contain object-right-bottom"
              sizes="(max-width: 1024px) 100vw, 52vw"
            />
          </div>
        </div>
      )}

      <div className="relative z-10 flex flex-1 flex-col px-6 md:px-10 lg:px-14">
        <div className="flex flex-1 flex-col justify-end pb-16 pt-8 lg:pb-24 lg:pt-12">
          <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,750px)_1fr] lg:gap-12">
            <HeroSlideContent
              slideKey={index}
              eyebrow={slide.eyebrow}
              headline={slide.headline}
              description={slide.description}
              primaryCta={slide.primaryCta}
              secondaryCta={slide.secondaryCta}
              isAppButtons={slide.isAppButtons}
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
