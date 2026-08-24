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
const HERO_APP_MOCKUP_WIDTH = 3368;
const HERO_APP_MOCKUP_HEIGHT = 1556;
const HERO_APP_MOBILE_MOCKUP_WIDTH = 361;
const HERO_APP_MOBILE_MOCKUP_HEIGHT = 195;

function AppStoreHeroButtons() {
  const { openModal } = useComingSoonModal();
  const storeButtonClassName =
    "inline-flex h-12 w-full min-w-0 items-center justify-center gap-2 rounded-full border border-white/20 bg-white px-2.5 text-zinc-900 shadow-xs transition-opacity hover:opacity-90 lg:h-[52px] lg:w-auto lg:shrink-0 lg:justify-start lg:px-4.5";

  return (
    <div className="grid w-full grid-cols-2 gap-3 lg:flex lg:w-auto lg:shrink-0 lg:gap-3">
      <button
        type="button"
        onClick={openModal}
        className={storeButtonClassName}
      >
        <Image
          src="/Google Play logo.webp"
          alt="Google Play"
          width={18}
          height={18}
          className="size-[18px] shrink-0 object-contain"
        />
        <span className="flex min-w-0 flex-col text-left leading-none">
          <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-wider text-zinc-500 sm:text-[11px]">
            GET IT ON
          </span>
          <span className="text-[11px] font-semibold text-zinc-900 sm:text-[12px] lg:text-[15px]">
            Google Play
          </span>
        </span>
      </button>

      <button
        type="button"
        onClick={openModal}
        className={storeButtonClassName}
      >
        <Image
          src="/Apple logo.webp"
          alt="App Store"
          width={18}
          height={18}
          className="size-[18px] shrink-0 object-contain"
        />
        <span className="flex min-w-0 flex-col text-left leading-none">
          <span className="whitespace-nowrap text-[10px] font-medium tracking-wide text-zinc-500 sm:text-[11px]">
            Download on the
          </span>
          <span className="text-[11px] font-semibold text-zinc-900 sm:text-[12px] lg:text-[15px]">
            App Store
          </span>
        </span>
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
  isActive,
}: {
  eyebrow: string;
  headline: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  isAppButtons?: boolean;
  isActive: boolean;
}) {
  return (
    <div
      className={`hero-crossfade-layer w-full content-max ${
        isAppButtons ? "text-center" : "text-left"
      }`}
      data-active={isActive}
    >
      <p
        className={`flex items-center gap-1.5 text-[10px] font-light uppercase tracking-[-0.02em] text-[#00FF85] sm:gap-2.5 sm:text-[11px] ${
          isAppButtons ? "mb-0 justify-center" : "mb-3 sm:mb-5"
        } ${!isAppButtons ? "font-semibold tracking-[0.14em]" : ""}`}
      >
        <span
          className={`inline-block shrink-0 bg-[#00FF85] ${
            isAppButtons ? "size-1" : "size-1.5 rounded-full"
          }`}
          aria-hidden
        />
        {eyebrow}
      </p>
      <h1
        className={
          isAppButtons
            ? "max-w-[814px] whitespace-pre-line text-[2.5rem] font-normal leading-[1.2] tracking-[-0.04em] text-white sm:text-[2.5rem] lg:text-[clamp(2.75rem,2.2vw+1.5rem,4.25rem)] lg:font-medium lg:leading-[1.15] lg:tracking-tight [@media(max-height:820px)_and_(min-width:1024px)]:lg:text-[clamp(2rem,2vw+0.75rem,3.25rem)]"
            : "content-max whitespace-pre-line text-[2rem] font-medium leading-[1.15] tracking-tight text-white sm:text-[2.25rem] md:text-[3rem] lg:text-[clamp(2.75rem,2.2vw+1.5rem,4.25rem)]"
        }
      >
        {headline}
      </h1>
      {description ? (
        <p
          className={`mt-4 max-w-[52ch] text-[14px] font-normal leading-[1.65] text-white/80 sm:mt-5 sm:text-[15px] md:text-base ${
            isAppButtons ? "mx-auto text-center" : "text-left"
          }`}
        >
          {description}
        </p>
      ) : null}
      <div
        className={`${
          isAppButtons
            ? "mt-6 flex w-full justify-center max-lg:mt-3 lg:mt-4 [@media(max-height:820px)_and_(min-width:1024px)]:lg:mt-3"
            : "mt-6 text-left sm:mt-8"
        }`}
      >
        {isAppButtons ? (
          <div className="flex w-full max-w-[361px] flex-col items-center gap-4 max-lg:gap-4 lg:max-w-none lg:flex-row lg:flex-nowrap lg:items-center lg:justify-center lg:gap-3">
            <AppStoreHeroButtons />
            {primaryCta ? (
              <CoverCtaButtons primaryCta={primaryCta} centered />
            ) : null}
          </div>
        ) : primaryCta && secondaryCta ? (
          <CoverCtaButtons primaryCta={primaryCta} secondaryCta={secondaryCta} />
        ) : null}
      </div>
    </div>
  );
}

function HeroAppMockups({ activeIndex }: { activeIndex: number }) {
  const appSlides = heroSlides
    .map((slide, slideIndex) => ({ slide, slideIndex }))
    .filter(({ slide }) => slide.isAppButtons);

  return (
    <>
      <div className="absolute inset-x-0 bottom-0 z-10 section-x lg:hidden">
        <div className="relative mx-auto h-[195px] w-full max-w-[361px]">
          {appSlides.map(({ slide, slideIndex }) => (
            <div
              key={`mobile-mockup-${slideIndex}`}
              className="hero-crossfade-layer absolute inset-0 flex items-end justify-center"
              data-active={slideIndex === activeIndex}
              style={{ zIndex: slideIndex === activeIndex ? 1 : 0 }}
              aria-hidden={slideIndex !== activeIndex}
            >
              <Image
                src={slide.mobileMockupImage ?? slide.image}
                alt="Attend mobile and desktop experience"
                width={HERO_APP_MOBILE_MOCKUP_WIDTH}
                height={HERO_APP_MOBILE_MOCKUP_HEIGHT}
                priority={slideIndex === activeIndex}
                quality={100}
                className="block h-auto w-full max-w-[361px] object-contain object-bottom"
                sizes="361px"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative hidden min-h-0 w-full flex-1 items-end justify-center overflow-hidden lg:flex">
        <div className="relative flex w-full justify-center">
          {appSlides.map(({ slide, slideIndex }) => (
            <div
              key={`desktop-mockup-${slideIndex}`}
              className={`hero-crossfade-layer flex w-full justify-center overflow-hidden ${
                slideIndex === 0 ? "relative" : "absolute inset-x-0 bottom-0"
              }`}
              data-active={slideIndex === activeIndex}
              style={{ zIndex: slideIndex === activeIndex ? 1 : 0 }}
              aria-hidden={slideIndex !== activeIndex}
            >
              <Image
                src={slide.image}
                alt=""
                width={HERO_APP_MOCKUP_WIDTH}
                height={HERO_APP_MOCKUP_HEIGHT}
                priority={slideIndex === activeIndex}
                quality={100}
                className="h-auto max-h-full w-auto max-w-[min(720px,78vw)] object-contain object-bottom xl:max-w-[min(960px,90vw)]"
                sizes="(max-width: 1280px) 78vw, 960px"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function HeroStandardSlides({ activeIndex }: { activeIndex: number }) {
  const standardSlides = heroSlides
    .map((slide, slideIndex) => ({ slide, slideIndex }))
    .filter(({ slide }) => !slide.isAppButtons);

  return (
    <div className="relative w-full">
      {standardSlides.map(({ slide, slideIndex }, layerIndex) => (
        <div
          key={slide.image}
          className={layerIndex === 0 ? "relative" : "absolute inset-x-0 top-0"}
        >
          <HeroSlideContent
            eyebrow={slide.eyebrow}
            headline={slide.headline}
            description={slide.description}
            primaryCta={slide.primaryCta}
            secondaryCta={slide.secondaryCta}
            isAppButtons={slide.isAppButtons}
            isActive={activeIndex === slideIndex}
          />
        </div>
      ))}
    </div>
  );
}

function HeroAppSlideCopy({ activeIndex }: { activeIndex: number }) {
  const appSlides = heroSlides
    .map((slide, slideIndex) => ({ slide, slideIndex }))
    .filter(({ slide }) => slide.isAppButtons);

  return (
    <div className="relative w-full content-max">
      {appSlides.map(({ slide, slideIndex }, layerIndex) => (
        <div
          key={slide.image}
          className={layerIndex === 0 ? "relative" : "absolute inset-x-0 top-0"}
        >
          <HeroSlideContent
            eyebrow={slide.eyebrow}
            headline={slide.headline}
            description={slide.description}
            primaryCta={slide.primaryCta}
            secondaryCta={slide.secondaryCta}
            isAppButtons={slide.isAppButtons}
            isActive={activeIndex === slideIndex}
          />
        </div>
      ))}
    </div>
  );
}

function HeroBackgrounds({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {heroSlides.map((slide, i) => {
        const isActive = i === activeIndex;

        if (slide.isAppButtons) {
          const desktopBg =
            slide.backgroundImage ?? "/HERO SECTION VARIANTS (1).webp";
          const mobileBg =
            slide.mobileBackgroundImage ??
            slide.backgroundImage ??
            "/iPhone 14 & 15 Pro - 1.webp";

          return (
            <div
              key={slide.image}
              className="hero-bg-layer absolute inset-0"
              data-active={isActive}
              style={{ zIndex: isActive ? 1 : 0 }}
              aria-hidden={!isActive}
            >
              <Image
                src={desktopBg}
                alt=""
                width={HERO_APP_BG_WIDTH}
                height={HERO_APP_BG_HEIGHT}
                priority={isActive}
                quality={100}
                className="absolute left-1/2 top-1/2 hidden h-auto w-auto min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover object-center lg:block"
                sizes="100vw"
              />
              <Image
                src={mobileBg}
                alt=""
                width={HERO_APP_BG_WIDTH}
                height={HERO_APP_BG_HEIGHT}
                priority={isActive}
                quality={100}
                className="absolute left-1/2 top-1/2 h-auto w-auto min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover object-center lg:hidden"
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
  const { index, slide, prev, next } = useHeroCarousel();
  const isAppSlide = Boolean(slide.isAppButtons);

  return (
    <section
      id={id}
      className={`relative flex flex-col overflow-hidden ${
        isAppSlide
          ? "min-h-0 max-lg:h-[640px] max-lg:max-h-[640px] lg:min-h-[100svh]"
          : "min-h-[100svh]"
      }`}
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

      <div
        className={`relative z-10 flex min-h-0 flex-1 flex-col section-x ${
          isAppSlide
            ? "items-center max-lg:justify-end max-lg:pb-[calc(195px+0.125rem)] max-lg:pt-[calc(var(--home-header-height)+1rem)] lg:justify-between lg:gap-3 lg:pb-3 lg:pt-0 [@media(max-height:820px)_and_(min-width:1024px)]:lg:gap-2 [@media(max-height:820px)_and_(min-width:1024px)]:lg:pb-2"
            : "justify-end pb-10 pt-[calc(var(--home-header-height)+1rem)] sm:pb-16 lg:pb-24 lg:pt-[calc(var(--home-header-height)+1.5rem)]"
        }`}
      >
        {isAppSlide ? (
          <>
            <div
              aria-hidden
              className="hidden w-full shrink-0 lg:block lg:h-[var(--home-header-height)]"
            />
            <div className="flex w-full shrink-0 flex-col items-center content-max lg:pt-5 xl:pt-6">
              <HeroAppSlideCopy activeIndex={index} />
            </div>
            <HeroAppMockups activeIndex={index} />
          </>
        ) : (
          <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12">
            <HeroStandardSlides activeIndex={index} />

            <div className="flex justify-center lg:hidden">
              <CoverCarousel index={index} onPrev={prev} onNext={next} />
            </div>
          </div>
        )}
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
