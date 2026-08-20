"use client";

import Image from "next/image";
import Link from "next/link";
import { HeroPrimaryCtaButton } from "@/components/cover/hero-primary-cta-button";
import { useBookDemoModal } from "@/components/layout/book-demo-modal";
import { useComingSoonModal } from "@/components/layout/coming-soon-modal";
import { heroSlides } from "@/lib/site";

function CarouselArrow({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/15"
    >
      <svg aria-hidden className="size-4" viewBox="0 0 16 16" fill="none">
        <path
          d={direction === "prev" ? "M10 3L5 8L10 13" : "M6 3L11 8L6 13"}
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

type CoverCarouselProps = {
  index: number;
  onPrev: () => void;
  onNext: () => void;
};

export function CoverCarousel({ index, onPrev, onNext }: CoverCarouselProps) {
  const slide = heroSlides[index];
  const segmentWidth = 100 / heroSlides.length;

  return (
    /* Fixed footprint so bar + arrows stay the same on every slide */
    <div className="flex w-full max-w-[min(100%,360px)] flex-col items-stretch">
      <div className="relative mb-2.5 h-px w-full bg-white/25">
        <div
          className="absolute top-0 h-px bg-white transition-all duration-500 ease-out"
          style={{
            left: `${index * segmentWidth}%`,
            width: `${segmentWidth}%`,
          }}
        />
      </div>

      <div className="flex w-full items-center justify-between gap-3">
        <CarouselArrow direction="prev" onClick={onPrev} />
        <Link
          href={slide.href}
          className="flex h-[2.75rem] min-w-0 flex-1 items-center justify-center px-1 text-center text-sm font-normal leading-snug text-white transition-opacity hover:opacity-80 sm:text-base md:text-[17px]"
        >
          <span className="line-clamp-2 whitespace-pre-line">{slide.label}</span>
        </Link>
        <CarouselArrow direction="next" onClick={onNext} />
      </div>
    </div>
  );
}

type CoverCtaButtonsProps = {
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  centered?: boolean;
};

const secondaryCtaClassName =
  "inline-flex h-12 w-auto max-w-full shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 px-4 text-[13px] font-medium text-white backdrop-blur-md transition-colors hover:bg-white/15 sm:h-[52px] sm:px-7 sm:text-[15px]";

export function CoverCtaButtons({
  primaryCta,
  secondaryCta,
  centered = false,
}: CoverCtaButtonsProps) {
  const { openModal } = useBookDemoModal();
  const { openModal: openComingSoonModal } = useComingSoonModal();
  const opensDemoModal = (label: string) =>
    label === "Book a demo" || label === "Plan a launch";
  const opensComingSoonModal = (label: string) => label === "Launch Web App";

  return (
    <div
      className={`flex flex-row flex-wrap items-center gap-3 sm:gap-4 ${
        centered
          ? "w-auto justify-start lg:justify-center"
          : "w-full max-w-full"
      }`}
    >
      {primaryCta &&
        (opensDemoModal(primaryCta.label) ? (
          <HeroPrimaryCtaButton label={primaryCta.label} onClick={openModal} />
        ) : opensComingSoonModal(primaryCta.label) ? (
          <HeroPrimaryCtaButton
            label={primaryCta.label}
            onClick={openComingSoonModal}
            variant="brand"
            className="max-lg:w-fit max-lg:max-w-[220px] max-lg:justify-start max-lg:gap-1.5 max-lg:pl-1.5 max-lg:pr-4"
          />
        ) : (
          <HeroPrimaryCtaButton label={primaryCta.label} href={primaryCta.href} />
        ))}
      {secondaryCta &&
        (secondaryCta.label === "Contact Us" ? (
          <button
            type="button"
            onClick={openModal}
            className={secondaryCtaClassName}
          >
            <span className="whitespace-nowrap">{secondaryCta.label}</span>
          </button>
        ) : (
          <Link href={secondaryCta.href} className={secondaryCtaClassName}>
            <span className="whitespace-nowrap">{secondaryCta.label}</span>
          </Link>
        ))}
    </div>
  );
}

export { useHeroCarousel } from "@/components/cover/use-hero-carousel";
