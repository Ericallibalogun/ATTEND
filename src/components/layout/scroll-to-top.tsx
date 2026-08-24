"use client";

import { useEffect, useState } from "react";

const SHOW_AFTER_PX = 320;

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
  });
}

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed right-4 z-50 flex size-11 items-center justify-center rounded-full border border-zinc-900/10 bg-white/55 text-zinc-800 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-zinc-900/15 hover:bg-white/75 active:scale-95 sm:right-6 sm:size-12 ${
        visible
          ? "pointer-events-auto bottom-[max(1.25rem,env(safe-area-inset-bottom))] translate-y-0 opacity-100 sm:bottom-6"
          : "pointer-events-none bottom-[max(1.25rem,env(safe-area-inset-bottom))] translate-y-2 opacity-0 sm:bottom-6"
      }`}
    >
      <svg
        className="size-5 sm:size-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
