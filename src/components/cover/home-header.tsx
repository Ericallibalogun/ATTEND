"use client";

import { useEffect, useRef, useState } from "react";
import { CoverHeader } from "@/components/cover/cover-header";

type HomeHeaderProps = {
  heroId: string;
};

export function HomeHeader({ heroId }: HomeHeaderProps) {
  const [isPastHero, setIsPastHero] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = document.getElementById(heroId);
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsPastHero(!entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [heroId]);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const syncHeight = () => {
      document.documentElement.style.setProperty(
        "--home-header-height",
        `${el.offsetHeight}px`,
      );
    };

    syncHeight();
    const observer = new ResizeObserver(syncHeight);
    observer.observe(el);
    return () => observer.disconnect();
  }, [isPastHero]);

  return (
    <div ref={headerRef} className="fixed inset-x-0 top-0 z-50">
      <CoverHeader variant={isPastHero ? "solid" : "hero"} />
    </div>
  );
}
