"use client";

import { useCallback, useEffect, useState } from "react";
import { heroSlides } from "@/lib/site";

const AUTO_ADVANCE_MS = 3000;

export function useHeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = heroSlides.length;

  const goTo = useCallback(
    (nextIndex: number) => {
      setIndex((nextIndex + total) % total);
    },
    [total],
  );

  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(timer);
  }, [paused, total]);

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
    pause: () => setPaused(true),
    resume: () => setPaused(false),
  };
}
