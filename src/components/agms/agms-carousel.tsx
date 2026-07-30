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

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-primary">
      {/* Sticky container */}
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden px-6 pt-12 pb-6 lg:px-12">
        
        {/* Header section */}
        <div className="w-full mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 flex items-center text-[11px] font-semibold uppercase tracking-widest text-[#77b293]">
              <span className="mr-2 inline-block size-1.5 bg-[#77b293]" aria-hidden />
              THE PLATFORM
            </p>
            <h2 className="text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              Everything a decisive
              <br />
              meeting needs
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4 max-w-md">
            <p className="text-[13px] leading-relaxed text-white/80 md:text-right">
              The interactive virtual event experience that replaces a stack of disconnected tools with a single, secure virtual event platform.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 rounded-full bg-white py-2.5 pl-2.5 pr-6 text-[14px] font-medium text-primary transition-opacity hover:opacity-90"
              >
                <span className="flex size-7 items-center justify-center rounded-full bg-primary text-white">
                  <svg className="size-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4l4 4-4 4M9 4l4 4-4 4" />
                  </svg>
                </span>
                Book a demo
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-[14px] font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                Talk to an expert
              </Link>
            </div>
          </div>
        </div>

        {/* Main horizontal slider container */}
        <div className="relative flex flex-1 items-center overflow-hidden bg-[#F4F9F6] rounded-none">
          <motion.div 
            style={{ x }} 
            className="flex items-center gap-10 lg:gap-16 p-6 lg:p-12"
          >
            {carouselCards.map((card, idx) => (
              <div key={idx} className="flex shrink-0 items-center gap-4 sm:gap-6 lg:gap-8">
                {/* Text Column Card */}
                <div className="flex w-[85vw] sm:w-[380px] lg:w-[460px] h-[380px] sm:h-[440px] lg:h-[490px] shrink-0 flex-col justify-between p-4 lg:p-6">
                  <div>
                    <span className="mb-4 lg:mb-6 block text-5xl lg:text-7xl font-light text-[#D3E3DA]">
                      {card.number}
                    </span>
                    <h3 className="mb-3 lg:mb-4 text-xl lg:text-2xl font-semibold text-zinc-900">
                      {card.title}
                    </h3>
                    <p className="text-[13px] lg:text-[14px] leading-relaxed text-zinc-600">
                      {card.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-3 lg:pt-4">
                    {card.tags.map((tag, tagIdx) => (
                      <span 
                        key={tagIdx} 
                        className="rounded-full bg-[#E2EEE7] px-3.5 py-1.5 lg:px-4 lg:py-2 text-[11px] lg:text-[12px] font-medium text-[#004D34]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image Column Card */}
                <div className="relative w-[85vw] sm:w-[360px] lg:w-[430px] h-[380px] sm:h-[440px] lg:h-[490px] shrink-0 overflow-hidden rounded-none">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 85vw, 430px"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Carousel Controls */}
        <div className="mt-5 flex items-center justify-center gap-4">
          <button 
            type="button"
            aria-label="Previous slide"
            className="flex size-11 items-center justify-center rounded-full bg-[#0d553b] text-white transition-colors hover:bg-[#126748]"
          >
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            type="button"
            aria-label="Next slide"
            className="flex size-11 items-center justify-center rounded-full bg-[#0d553b] text-white transition-colors hover:bg-[#126748]"
          >
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
