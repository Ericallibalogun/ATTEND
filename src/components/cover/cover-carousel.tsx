"use client";

import Image from "next/image";
import Link from "next/link";
import { useBookDemoModal } from "@/components/layout/book-demo-modal";
import { heroSlides } from "@/lib/site";

function DoubleChevronIcon() {
  return (
    <svg
      aria-hidden
      className="size-4 text-white"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M5 4L9 8L5 12"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 4L13 8L9 12"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
    <div className="flex w-[280px] flex-col items-stretch sm:w-[320px] md:w-[360px]">
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
};

export function CoverCtaButtons({
  primaryCta = { label: "Launch Web App", href: "/about" },
  secondaryCta = { label: "Contact Us", href: "/about" },
}: CoverCtaButtonsProps) {
  const { openModal } = useBookDemoModal();

  return (
    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
      {primaryCta && (
        <Link
          href={primaryCta.href}
          className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-full bg-white pl-2 pr-6 text-[14px] font-medium text-zinc-900 transition-opacity hover:opacity-90 sm:h-[52px] sm:w-auto sm:justify-start sm:pr-7 sm:text-[15px]"
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary sm:size-[38px]">
            <DoubleChevronIcon />
          </span>
          <span>{primaryCta.label}</span>
        </Link>
      )}
      {secondaryCta &&
        (secondaryCta.label === "Contact Us" ? (
          <button
            type="button"
            onClick={openModal}
            className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 text-[14px] font-medium text-white backdrop-blur-md transition-colors hover:bg-white/15 sm:h-[52px] sm:w-auto sm:px-7 sm:text-[15px]"
          >
            <span>{secondaryCta.label}</span>
          </button>
        ) : (
          <Link
            href={secondaryCta.href}
            className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 text-[14px] font-medium text-white backdrop-blur-md transition-colors hover:bg-white/15 sm:h-[52px] sm:w-auto sm:px-7 sm:text-[15px]"
          >
            <span>{secondaryCta.label}</span>
          </Link>
        ))}
    </div>
  );
}

export { useHeroCarousel } from "@/components/cover/use-hero-carousel";
