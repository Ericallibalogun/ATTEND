"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { useBookDemoModal } from "@/components/layout/book-demo-modal";
import { useComingSoonModal } from "@/components/layout/coming-soon-modal";

function NavArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={`size-3 shrink-0 opacity-90 ${className ?? ""}`}
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M3 9L9 3M9 3H4M9 3V8"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export type CoverHeaderVariant = "hero" | "solid";

type CoverHeaderProps = {
  variant?: CoverHeaderVariant;
  className?: string;
};

export function CoverHeader({
  variant = "hero",
  className = "",
}: CoverHeaderProps) {
  const isHero = variant === "hero";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useBookDemoModal();
  const { openModal: openComingSoonModal } = useComingSoonModal();

  return (
    <>
      <header
        className={`${
          isHero
            ? "relative z-20 py-2 lg:py-2.5"
            : "border-b border-zinc-200/80 bg-white/95 backdrop-blur-md shadow-sm z-20 py-2 lg:py-2.5"
        } ${className}`}
      >
      <div className="section-x mx-auto w-full">
        <div className="flex items-center justify-between gap-6">
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-90 shrink-0"
          >
            <Image
              src="/Attend-2_logo.webp"
              alt="Attend"
              width={120}
              height={34}
              className={`h-6 sm:h-7 lg:h-7 w-auto max-w-[125px] object-contain transition-all ${
                isHero ? "brightness-0 invert" : ""
              }`}
              priority
            />
          </Link>

          <div className="hidden items-center gap-2.5 lg:flex">
            <button
              onClick={() => openModal()}
              type="button"
              className={`rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium transition-colors ${
                isHero
                  ? "border border-white/40 bg-transparent text-white hover:bg-white/10"
                  : "border border-primary/25 bg-transparent text-primary hover:bg-primary/5"
              }`}
            >
              Contact us
            </button>
            <button
              type="button"
              onClick={openComingSoonModal}
              className={`rounded-full px-4.5 py-1.5 text-xs font-semibold transition-opacity hover:opacity-90 sm:text-sm ${
                isHero
                  ? "bg-white text-primary"
                  : "bg-primary text-white"
              }`}
            >
              Login
            </button>
          </div>

          <button
            type="button"
            className="flex size-11 items-center justify-center lg:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <svg
              className={`size-6 ${isHero ? "text-white" : "text-primary"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isHero ? (
        <>
          <nav className="section-x mx-auto mt-4 hidden w-full lg:grid lg:grid-cols-5 lg:gap-6">
            {siteConfig.coverNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex min-w-0 flex-col"
              >
                <div className="flex items-center justify-end border-t border-white/20 pt-1 text-white/80">
                  <NavArrowIcon className="size-2.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <span className="mt-0.5 text-[11px] sm:text-[12px] font-medium leading-snug text-white transition-colors group-hover:text-white/90">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </>
      ) : (
        <nav className="section-x mx-auto mt-4 hidden w-full pb-2 lg:grid lg:grid-cols-5 lg:gap-6">
            {siteConfig.coverNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex min-w-0 flex-col"
            >
              <div className="flex items-center justify-end border-t border-zinc-200/80 pt-1 text-zinc-400">
                <NavArrowIcon className="size-2.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <span className="mt-0.5 text-[11px] sm:text-[12px] font-medium leading-snug text-zinc-800 transition-colors group-hover:text-primary">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      )}
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#f4f7f5] lg:hidden">
          <div className="flex items-center justify-between px-6 py-6">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-bold tracking-tight text-primary"
            >
              {siteConfig.name}
            </Link>
            <button
              type="button"
              className="flex size-11 items-center justify-center text-zinc-900"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              <svg
                className="size-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col px-8 pt-4">
            {siteConfig.coverNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-4 text-[13px] font-medium text-zinc-900 transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-4 px-8 pb-10">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openModal();
              }}
              type="button"
              className="flex min-h-11 w-full items-center justify-center rounded-full border border-primary/25 bg-transparent py-3 text-[13px] font-semibold text-primary transition-colors hover:bg-primary/5"
            >
              Contact us
            </button>
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                openComingSoonModal();
              }}
              className="flex min-h-11 w-full items-center justify-center rounded-full bg-primary py-3 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
}
