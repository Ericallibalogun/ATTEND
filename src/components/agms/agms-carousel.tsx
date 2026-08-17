"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useBookDemoModal } from "@/components/layout/book-demo-modal";

const carouselCards = [
  {
    number: "01",
    title: "Verified access",
    description:
      "Registration, authentication and entitlement checks for shareholders, proxies, members, delegates and guests real-time attendance, automatic quorum tracking, and secure event registration and ticketing built in from the start.",
    tags: [
      "Registrar integration",
      "Proxy lodgement",
      "Role-based rights",
      "Quorum monitor",
    ],
    image: "/Frame 35774.webp",
  },
  {
    number: "02",
    title: "Live voting & instant results",
    description:
      "Pre-meeting, proxy and live voting on resolutions and elections, weighted by holdings where required, with results tallied and displayed the moment polls close.",
    tags: [
      "Weighted ballots",
      "Confidential",
      "Instant tallies",
      "Exportable results",
    ],
    image: "/Frame 1321325430.webp",
  },
  {
    number: "03",
    title: "Broadcast-quality streaming",
    description:
      "Ultra-HD video, adaptive bitrates, and low latency streaming built for real-time interactions and global audiences.",
    tags: ["Adaptive streaming", "Ultra HD", "Low-latency streaming"],
    image: "/Frame 1321325438.webp",
  },
  {
    number: "04",
    title: "Engagement that flows",
    description:
      "Moderated Q&A, live polls, chat, and virtual networking tools that give remote participants the same standing as room attendees.",
    tags: ["Moderated Q&A", "Live polls", "Virtual networking"],
    image: "/customer_service.webp",
  },
  {
    number: "05",
    title: "Compliance & insight",
    description:
      "Full audit trails, regulatory-ready reports, and robust event analytics delivered instantly post-event.",
    tags: ["Audit trail", "Regulatory reports", "Actionable insights"],
    image: "/analytics_dashboard.webp",
  },
];

export function AgmsCarousel() {
  const { openModal } = useBookDemoModal();
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    // Distance so the last card ends flush with the right edge of the mint container
    const distance = Math.max(0, track.scrollWidth - viewport.clientWidth);
    setScrollDistance(distance);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);

    const viewport = viewportRef.current;
    const track = trackRef.current;
    const resizeObserver = new ResizeObserver(measure);
    if (viewport) resizeObserver.observe(viewport);
    if (track) resizeObserver.observe(track);

    return () => {
      window.removeEventListener("resize", measure);
      resizeObserver.disconnect();
    };
  }, [measure]);

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  const goToCard = (targetIdx: number) => {
    if (!containerRef.current) return;
    const clamped = Math.max(
      0,
      Math.min(carouselCards.length - 1, targetIdx),
    );

    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const containerHeight = containerRef.current.offsetHeight;
    const scrollableDistance = Math.max(
      0,
      containerHeight - window.innerHeight,
    );

    const targetScrollY =
      containerTop +
      (clamped / (carouselCards.length - 1)) * scrollableDistance;

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    const currentCardIdx = Math.round(
      scrollYProgress.get() * (carouselCards.length - 1),
    );
    goToCard(currentCardIdx - 1);
  };

  const handleNext = () => {
    const currentCardIdx = Math.round(
      scrollYProgress.get() * (carouselCards.length - 1),
    );
    goToCard(currentCardIdx + 1);
  };

  return (
    <section
      ref={containerRef}
      className="relative h-[220vh] bg-primary sm:h-[280vh] lg:h-[300vh]"
    >
      <div className="sticky top-0 flex h-[100svh] flex-col overflow-hidden px-4 pb-3 pt-5 sm:px-8 sm:pb-4 sm:pt-6 lg:px-16 lg:pt-8">
        {/* Header — mobile: left stack with side-by-side CTAs under body (Figma) */}
        <div className="mb-3 flex w-full flex-col gap-3 sm:mb-4 md:mb-6 md:flex-row md:items-end md:justify-between md:gap-4">
          <div className="min-w-0">
            <p className="mb-2 flex items-center text-[11px] font-semibold uppercase tracking-widest text-[#77b293]">
              <span
                className="mr-2 inline-block size-1.5 bg-[#77b293]"
                aria-hidden
              />
              THE PLATFORM
            </p>
            <h2 className="text-[1.5rem] font-medium leading-tight tracking-tight text-white sm:text-2xl lg:text-4xl">
              Everything a decisive
              <br />
              meeting needs
            </h2>
            <p className="mt-3 max-w-xl text-[12.5px] leading-relaxed text-white/80 sm:mt-4 sm:text-[13px] md:hidden">
              The interactive virtual event experience that replaces a stack of
              disconnected tools with a single, secure virtual event platform.
            </p>
            <div className="mt-4 flex w-full flex-row items-center gap-2.5 md:hidden">
              <button
                type="button"
                onClick={openModal}
                className="inline-flex h-11 min-w-0 flex-1 items-center justify-center gap-2 rounded-full bg-white py-2 pl-1.5 pr-3 text-[12px] font-medium text-primary transition-opacity hover:opacity-90 sm:flex-none sm:justify-start sm:gap-3 sm:pl-2 sm:pr-5 sm:text-[13.5px]"
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-white sm:size-6">
                  <svg
                    className="size-3"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4l4 4-4 4M9 4l4 4-4 4" />
                  </svg>
                </span>
                <span className="truncate">Book a demo</span>
              </button>
            </div>
          </div>

          <div className="hidden w-full max-w-md flex-col items-start gap-3 md:flex md:items-end">
            <p className="text-[13px] leading-relaxed text-white/80 md:text-right">
              The interactive virtual event experience that replaces a stack of
              disconnected tools with a single, secure virtual event platform.
            </p>
            <div className="flex flex-row items-center gap-3">
              <button
                type="button"
                onClick={openModal}
                className="inline-flex h-11 items-center justify-start gap-3 rounded-full bg-white py-2 pl-2 pr-5 text-[13.5px] font-medium text-primary transition-opacity hover:opacity-90"
              >
                <span className="flex size-6 items-center justify-center rounded-full bg-primary text-white">
                  <svg
                    className="size-3"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4l4 4-4 4M9 4l4 4-4 4" />
                  </svg>
                </span>
                Book a demo
              </button>
            </div>
          </div>
        </div>

        {/* Mint viewport */}
        <div
          ref={viewportRef}
          className="relative flex min-h-0 flex-1 items-center overflow-hidden bg-[#EFF5F3]"
        >
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex items-center gap-3 py-4 pl-4 sm:gap-5 sm:py-6 sm:pl-8 lg:gap-6 lg:py-8 lg:pl-10"
          >
            {carouselCards.map((card) => (
              <div
                key={card.number}
                className="flex shrink-0 items-stretch gap-3 border border-black/5 bg-white p-3 shadow-xs sm:gap-6 sm:p-5 lg:gap-8 lg:p-6"
              >
                <div className="flex h-[240px] w-[min(58vw,220px)] shrink-0 flex-col justify-between sm:h-[340px] sm:w-[320px] lg:h-[370px] lg:w-[360px]">
                  <div>
                    <span className="mb-1.5 block text-3xl font-light leading-none text-[#5c8a74] sm:mb-2 sm:text-4xl lg:mb-3 lg:text-5xl">
                      {card.number}
                    </span>
                    <h3 className="mb-1.5 text-base font-semibold text-zinc-900 sm:mb-2 sm:text-lg lg:mb-3 lg:text-xl">
                      {card.title}
                    </h3>
                    <p className="line-clamp-4 text-[11.5px] leading-relaxed text-zinc-600 sm:line-clamp-none sm:text-[12.5px] lg:text-[13.5px]">
                      {card.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-1.5 sm:gap-1.5 sm:pt-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#E2EEE7] px-2 py-0.5 text-[9.5px] font-medium text-[#004D34] sm:px-3 sm:py-1 sm:text-[10.5px] lg:text-[11.5px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative h-[240px] w-[min(38vw,140px)] shrink-0 overflow-hidden sm:h-[340px] sm:w-[280px] lg:h-[370px] lg:w-[320px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 140px, 320px"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Controls */}
        <div className="mt-3 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous slide"
            className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-[#0d553b] text-white transition-all hover:bg-[#126748] active:scale-95"
          >
            <svg
              className="size-4.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next slide"
            className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-[#0d553b] text-white transition-all hover:bg-[#126748] active:scale-95"
          >
            <svg
              className="size-4.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
