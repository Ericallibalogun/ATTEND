"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { heroSlides } from "@/lib/site";

const AUTO_ADVANCE_MS = 4000;

export function useHeroCarousel() {
  const [index, setIndex] = useState(0);
  const pausedRef = useRef(false);
  const total = heroSlides.length;

  const prev = useCallback(() => {
    setIndex((current) => (current - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setIndex((current) => (current + 1) % total);
  }, [total]);

  useEffect(() => {
    const tick = () => {
      if (pausedRef.current || document.hidden) return;
      setIndex((current) => (current + 1) % total);
    };

    const timer = window.setInterval(tick, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [total, index]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [prev, next]);

  return {
    index,
    slide: heroSlides[index],
    prev,
    next,
    pause: () => {
      pausedRef.current = true;
    },
    resume: () => {
      pausedRef.current = false;
    },
  };
}
