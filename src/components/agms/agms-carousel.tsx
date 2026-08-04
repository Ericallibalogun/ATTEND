"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const carouselCards = [
  {
    number: "01",
    title: "Verified access",
    description:
      "Registration, authentication and entitlement checks for shareholders, proxies, members, delegates and guests real-time attendance, automatic quorum tracking, and secure event registration and ticketing built in from the start.",
    tags: ["Registrar integration", "Proxy lodgement", "Role-based rights", "Quorum monitor"],
    image: "/Frame 1321325430.webp",
  },
  {
    number: "02",
    title: "Live voting & instant results",
    description:
      "Pre-meeting, proxy and live voting on resolutions and elections, weighted by holdings where required, with results tallied and displayed the moment polls close.",
    tags: ["Weighted ballots", "Confidential", "Instant tallies", "Exportable results"],
    image: "/Frame 1321325438.webp",
  },
  {
    number: "03",
    title: "Broadcast-quality streaming",
    description:
      "Ultra-HD video, adaptive bitrates, and low latency streaming built for real-time interactions and global audiences.",
    tags: ["Adaptive streaming", "Ultra HD", "Low-latency streaming"],
    image: "/Frame 35774.webp",
  },
  {
    number: "04",
    title: "Engagement that flows",
    description:
      "Moderated Q&A, live polls, chat, and virtual networking tools that give remote participants the same standing as room attendees.",
    tags: ["Moderated Q&A", "Live polls", "Virtual networking"],
    image: "/boardroom-2.webp",
  },
  {
    number: "05",
    title: "Compliance & insight",
    description:
      "Full audit trails, regulatory-ready reports, and robust event analytics delivered instantly post-event.",
    tags: ["Audit trail", "Regulatory reports", "Actionable insights"],
    image: "/boardroom3.webp",
  },
];

export function AgmsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  const handlePrev = () => {
    if (!containerRef.current) return;
    const currentProgress = scrollYProgress.get();
    const currentCardIdx = Math.round(currentProgress * (carouselCards.length - 1));
    const targetIdx = Math.max(0, currentCardIdx - 1);

    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const containerHeight = containerRef.current.offsetHeight;
    const scrollableDistance = Math.max(0, containerHeight - window.innerHeight);

    const targetScrollY = containerTop + (targetIdx / (carouselCards.length - 1)) * scrollableDistance;

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    if (!containerRef.current) return;
    const currentProgress = scrollYProgress.get();
    const currentCardIdx = Math.round(currentProgress * (carouselCards.length - 1));
    const targetIdx = Math.min(carouselCards.length - 1, currentCardIdx + 1);

    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const containerHeight = containerRef.current.offsetHeight;
    const scrollableDistance = Math.max(0, containerHeight - window.innerHeight);

    const targetScrollY = containerTop + (targetIdx / (carouselCards.length - 1)) * scrollableDistance;

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  };

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-primary">
      {/* Sticky container */}
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden px-6 pt-6 lg:pt-8 pb-4 lg:px-12">
        
        {/* Header section */}
        <div className="w-full mb-4 lg:mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 flex items-center text-[11px] font-semibold uppercase tracking-widest text-[#77b293]">
              <span className="mr-2 inline-block size-1.5 bg-[#77b293]" aria-hidden />
              THE PLATFORM
            </p>
            <h2 className="text-2xl font-medium leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
              Everything a decisive
              <br />
              meeting needs
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3 max-w-md">
            <p className="text-[13px] leading-relaxed text-white/80 md:text-right">
              The interactive virtual event experience that replaces a stack of disconnected tools with a single, secure virtual event platform.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 rounded-full bg-white py-2 pl-2 pr-5 text-[13.5px] font-medium text-primary transition-opacity hover:opacity-90"
              >
                <span className="flex size-6 items-center justify-center rounded-full bg-primary text-white">
                  <svg className="size-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4l4 4-4 4M9 4l4 4-4 4" />
                  </svg>
                </span>
                Book a demo
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[13.5px] font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                Talk to an expert
              </Link>
            </div>
          </div>
        </div>

        {/* Main horizontal slider container */}
        <div className="relative flex flex-1 min-h-0 items-center overflow-hidden bg-[#F4F9F6] rounded-none py-2">
          <motion.div 
            style={{ x }} 
            className="flex items-center gap-6 lg:gap-10 px-6 lg:px-10"
          >
            {carouselCards.map((card, idx) => (
              <div 
                key={idx} 
                className="flex shrink-0 items-center gap-5 sm:gap-6 lg:gap-8 bg-white p-5 lg:p-6 border border-black/5 shadow-xs"
              >
                {/* Text Column Card */}
                <div className="flex w-[82vw] sm:w-[340px] lg:w-[380px] h-[290px] sm:h-[340px] lg:h-[370px] shrink-0 flex-col justify-between">
                  <div>
                    <span className="mb-2 lg:mb-3 block text-4xl lg:text-5xl font-light leading-none text-[#5c8a74]">
                      {card.number}
                    </span>
                    <h3 className="mb-2 lg:mb-3 text-lg lg:text-xl font-semibold text-zinc-900">
                      {card.title}
                    </h3>
                    <p className="text-[12.5px] lg:text-[13.5px] leading-relaxed text-zinc-600">
                      {card.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {card.tags.map((tag, tagIdx) => (
                      <span 
                        key={tagIdx} 
                        className="rounded-full bg-[#E2EEE7] px-3 py-1 text-[10.5px] lg:text-[11.5px] font-medium text-[#004D34]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image Column Card */}
                <div className="relative w-[82vw] sm:w-[320px] lg:w-[360px] h-[290px] sm:h-[340px] lg:h-[370px] shrink-0 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover object-center"
                    quality={100}
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Carousel Controls */}
        <div className="mt-3 flex items-center justify-center gap-3">
          <button 
            type="button"
            onClick={handlePrev}
            aria-label="Previous slide"
            className="flex size-10 items-center justify-center rounded-full bg-[#0d553b] text-white transition-all hover:bg-[#126748] active:scale-95 cursor-pointer"
          >
            <svg className="size-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            type="button"
            onClick={handleNext}
            aria-label="Next slide"
            className="flex size-10 items-center justify-center rounded-full bg-[#0d553b] text-white transition-all hover:bg-[#126748] active:scale-95 cursor-pointer"
          >
            <svg className="size-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
