"use client";

import Link from "next/link";
import { HeroCtaChevronIcon } from "@/components/cover/hero-cta-icon";

const primaryCtaClassName =
  "inline-flex h-12 w-auto max-w-full shrink-0 items-center justify-center gap-2 rounded-full bg-white pl-2 pr-4 text-[13px] font-medium text-zinc-900 transition-opacity hover:opacity-90 sm:h-[52px] sm:gap-3 sm:pr-7 sm:text-[15px]";

type HeroPrimaryCtaButtonProps = {
  label: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  hideIconOnMobile?: boolean;
};

export function HeroPrimaryCtaButton({
  label,
  onClick,
  href,
  className = "",
  hideIconOnMobile = false,
}: HeroPrimaryCtaButtonProps) {
  const content = (
    <>
      <span
        className={`flex size-8 shrink-0 items-center justify-center rounded-full bg-primary sm:size-[38px] ${
          hideIconOnMobile ? "hidden lg:flex" : ""
        }`}
      >
        <HeroCtaChevronIcon />
      </span>
      <span className="whitespace-nowrap">{label}</span>
    </>
  );

  const classes = [
    primaryCtaClassName,
    hideIconOnMobile ? "max-lg:px-6" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {content}
      </button>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return null;
}
