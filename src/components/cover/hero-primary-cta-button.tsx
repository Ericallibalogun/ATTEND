"use client";

import Link from "next/link";
import { HeroCtaChevronIcon } from "@/components/cover/hero-cta-icon";

const primaryCtaClassName =
  "inline-flex h-12 w-auto max-w-full shrink-0 items-center justify-center gap-2 rounded-full bg-white pl-2 pr-4 text-[13px] font-medium transition-opacity hover:opacity-90 sm:h-[52px] sm:gap-3 sm:pr-7 sm:text-[15px]";

type HeroPrimaryCtaButtonProps = {
  label: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: "default" | "brand";
};

export function HeroPrimaryCtaButton({
  label,
  onClick,
  href,
  className = "",
  variant = "default",
}: HeroPrimaryCtaButtonProps) {
  const isBrand = variant === "brand";

  const content = (
    <>
      <span
        className={`flex size-8 shrink-0 items-center justify-center rounded-full sm:size-[38px] ${
          isBrand ? "bg-[#004D34]" : "bg-primary"
        }`}
      >
        <HeroCtaChevronIcon />
      </span>
      <span className={`whitespace-nowrap ${isBrand ? "font-semibold text-[#004D34]" : "text-zinc-900"}`}>
        {label}
      </span>
    </>
  );

  const classes = [
    primaryCtaClassName,
    isBrand ? "border border-[#004D34]" : "text-zinc-900",
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
