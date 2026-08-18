"use client";

import Image from "next/image";
import {
  CoverCarousel,
  CoverCtaButtons,
  useHeroCarousel,
} from "@/components/cover/cover-carousel";
import { useComingSoonModal } from "@/components/layout/coming-soon-modal";
import { heroSlides } from "@/lib/site";

const HERO_APP_BG_WIDTH = 1440;
const HERO_APP_BG_HEIGHT = 810;

function DoubleChevronIcon({ className = "text-white" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={`size-3.5 ${className}`}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M4 4l4 4-4 4M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AppStoreHeroButtons() {
  const { openModal } = useComingSoonModal();

  return (
    <div className="flex w-full flex-col items-stretch gap-3 lg:w-auto lg:flex-row lg:flex-wrap lg:items-center">
      <div className="grid w-full grid-cols-2 gap-3 lg:contents">
        <button
          type="button"
          onClick={openModal}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white px-3 text-zinc-900 shadow-xs transition-opacity hover:opacity-90 sm:justify-start sm:px-4.5"
        >
          <Image
            src="/Google Play logo.webp"
            alt="Google Play"
            width={20}
            height={20}
            className="size-5 shrink-0 object-contain"
          />
          <span className="flex flex-col text-left leading-none">
            <span className="whitespace-nowrap text-[7.5px] font-medium uppercase tracking-wider text-zinc-500 sm:text-[8px]">
              GET IT ON
            </span>
            <span className="text-[11px] font-semibold text-zinc-900 sm:text-[12px]">
              Google Play
            </span>
          </span>
        </button>

        <button
          type="button"
          onClick={openModal}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white px-3 text-zinc-900 shadow-xs transition-opacity hover:opacity-90 sm:justify-start sm:px-4.5"
        >
          <Image
            src="/Apple logo.webp"
            alt="App Store"
            width={20}
            height={20}
            className="size-5 shrink-0 object-contain"
          />
          <span className="flex flex-col text-left leading-none">
            <span className="whitespace-nowrap text-[7.5px] font-medium uppercase tracking-wider text-zinc-500 sm:text-[8px]">
              Download on the
            </span>
            <span className="text-[11px] font-semibold text-zinc-900 sm:text-[12px]">
              App Store
            </span>
          </span>
        </button>
      </div>

      <button
        type="button"
        onClick={openModal}
        className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-white pl-2 pr-6 text-[15px] font-semibold text-[#004D34] shadow-xs transition-opacity hover:opacity-90 lg:w-fit lg:justify-start"
      >
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#004D34]">
          <DoubleChevronIcon className="text-white" />
        </span>
        <span>Launch Web App</span>
      </button>
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
    <div key={slideKey} className="hero-slide-animate w-full max-w-[814px] text-left">
      <p className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#00FF85] sm:mb-5 sm:gap-2.5 sm:text-[11px] sm:tracking-[-0.02em]">
        <span
          className="inline-block size-1.5 shrink-0 rounded-full bg-[#00FF85]"
          aria-hidden
        />
        {eyebrow}
      </p>
      <h1 className="max-w-[814px] whitespace-pre-line text-[2rem] font-medium leading-[1.15] tracking-tight text-white sm:text-[2.25rem] md:text-[3rem] lg:text-[4.25rem]">
        {headline}
      </h1>
      {description ? (
        <p className="mt-4 max-w-[52ch] text-left text-[14px] font-normal leading-[1.65] text-white/80 sm:mt-5 sm:text-[15px] md:text-base">
          {description}
        </p>
      ) : null}
      <div className="mt-6 text-left sm:mt-8">
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
              className="hero-bg-layer absolute inset-0"
              data-active={isActive}
              style={{ zIndex: isActive ? 1 : 0 }}
              aria-hidden={!isActive}
            >
              <Image
                src={slide.backgroundImage ?? "/Rectangle 14 (1).webp"}
                alt=""
                width={HERO_APP_BG_WIDTH}
                height={HERO_APP_BG_HEIGHT}
                priority={isActive}
                quality={100}
                className="absolute left-1/2 top-1/2 h-auto w-auto min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover object-center"
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
            <>
              <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-40 bg-gradient-to-b from-black/70 via-black/30 to-transparent sm:h-44" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[70%] bg-gradient-to-t from-[#062419]/95 via-[#062419]/50 to-transparent" />
            </>
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
  const isAppSlide = Boolean(slide.isAppButtons);

  return (
    <section
      id={id}
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <HeroBackgrounds activeIndex={index} />

      {!isAppSlide && (
        <div className="pointer-events-none absolute -left-16 -top-16 z-[2] size-[280px] opacity-85 mix-blend-screen sm:size-[400px] lg:size-[600px]">
          <Image
            src="/Ellipse 433.webp"
            alt=""
            fill
            priority
            className="object-contain object-top-left"
            sizes="(max-width: 640px) 280px, 600px"
          />
        </div>
      )}

      {/* Desktop mockup overlay for Get Started */}
      {isAppSlide && (
        <div className="pointer-events-none absolute bottom-0 right-0 z-[5] hidden h-[88vh] w-[66vw] lg:block xl:h-[94vh] xl:w-[68vw]">
          <Image
            src={slide.image}
            alt=""
            fill
            priority
            className="object-contain object-right-bottom"
            sizes="68vw"
          />
        </div>
      )}

      <div
        className={`relative z-10 flex flex-1 flex-col px-5 sm:px-8 md:px-10 lg:px-14 ${
          isAppSlide
            ? "pb-8 pt-[calc(var(--home-header-height,72px)+0.75rem)] lg:justify-end lg:pb-24 lg:pt-12"
            : "justify-end pb-10 pt-[calc(var(--home-header-height,72px)+1rem)] sm:pb-16 lg:pb-24 lg:pt-12"
        }`}
      >
        {/* Mobile Get Started: full-width mockups above copy (Figma) */}
        {isAppSlide && (
          <div className="relative -mx-5 mb-5 h-[44svh] w-[calc(100%+2.5rem)] overflow-hidden sm:-mx-8 sm:mb-6 sm:h-[48svh] sm:w-[calc(100%+4rem)] lg:hidden">
            <Image
              src={slide.image}
              alt="Attend mobile and desktop experience"
              fill
              priority
              quality={100}
              className="scale-[1.2] object-contain object-center"
              sizes="100vw"
            />
          </div>
        )}

        <div
          className={`grid items-end gap-8 lg:grid-cols-[minmax(0,750px)_1fr] lg:gap-12 ${
            isAppSlide ? "flex-1 lg:flex-none" : ""
          }`}
        >
          <HeroSlideContent
            slideKey={index}
            eyebrow={slide.eyebrow}
            headline={slide.headline}
            description={slide.description}
            primaryCta={slide.primaryCta}
            secondaryCta={slide.secondaryCta}
            isAppButtons={slide.isAppButtons}
          />

          {/* Mobile / tablet carousel — desktop sits on the far right edge */}
          <div
            className={`flex justify-center lg:hidden ${
              isAppSlide ? "mt-auto" : ""
            }`}
          >
            <CoverCarousel index={index} onPrev={prev} onNext={next} />
          </div>
        </div>
      </div>

      {/* Desktop: slide controls pinned to the far right edge (Figma) */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden items-end pb-10 pr-6 lg:flex xl:pr-10 xl:pb-12">
        <div className="pointer-events-auto">
          <CoverCarousel index={index} onPrev={prev} onNext={next} />
        </div>
      </div>
    </section>
  );
}
