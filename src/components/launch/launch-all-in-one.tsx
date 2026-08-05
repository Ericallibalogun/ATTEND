"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const allInOneCards = [
  {
    number: "01",
    title: "Invitations & guest lists",
    description:
      "Tiered invitations for VIPs, press, partners and public audiences. RSVP tracking, waitlists, reminders and QR check-in for in-room guests.",
    image: "/Frame 35774.webp",
    alt: "Invitations & guest lists - attendee badges",
  },
  {
    number: "02",
    title: "Broadcast-quality staging",
    description:
      "Adaptive low-latency streaming built for markets where connectivity varies, rehearsal mode, backstage cueing and multi-camera support so the show runs to the second.",
    image: "/d19a92ced1ad518052748b12f9e464593833f903.webp",
    alt: "Broadcast-quality staging - presentation setup",
  },
  {
    number: "03",
    title: "Live audience energy",
    description:
      "Reactions, applause moments, live polls and moderated Q&A give remote viewers the same electric clarity as the front row.",
    image: "/image.webp",
    alt: "Live audience energy - broadcast stage",
  },
  {
    number: "04",
    title: "Demos & breakouts",
    description:
      "Route audiences into product demo rooms, press briefings and partner sessions inside dedicated virtual exhibitor booths, each with its own host, materials and capacity rules.",
    image: "/3a18b6d36eead1a8f298c36a398284fd06d5b1c0.webp",
    alt: "Demos & breakouts - camera and lights setup",
  },
  {
    number: "05",
    title: "Leads, replay & analytics",
    description:
      "Every registration, question and poll response becomes structured data, letting you measure ROI of virtual events with replay pages and engagement scoring.",
    image: "/analytics_dashboard.webp",
    alt: "Leads, replay & analytics - high tech dashboard",
  },
];

export function LaunchAllInOne() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount =
        direction === "left"
          ? -scrollContainerRef.current.clientWidth
          : scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#083827] py-16 lg:py-24 text-white overflow-hidden">
      <ScrollReveal yOffset={60}>
        <div className="mx-auto w-full px-6 lg:px-12">
          
          {/* Header Grid */}
          <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_1.2fr] items-end">
            <div>
              <p className="mb-4 flex items-center text-[11px] font-semibold uppercase tracking-widest text-[#00E58F]">
                <span className="mr-2 inline-block size-1.5 bg-[#00E58F]" aria-hidden />
                THE ALL-IN-ONE PLATFORM
              </p>
              <h2 className="text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Everything between the invite and the encore
              </h2>
            </div>

            <div className="flex flex-col items-start lg:items-end">
              <p className="mb-6 text-[14.5px] leading-relaxed text-white/80 max-w-lg lg:text-right">
                The same vetted success, broadcast streaming and live engagement that powers Attend, tuned for the biggest day on your product calendar, with hands-on executive production and on-call broadcast specialists on roll.
              </p>
              
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-[14px] font-medium text-[#083827] transition-all hover:bg-zinc-100 shadow-md"
              >
                <span className="flex size-7 items-center justify-center rounded-full bg-[#083827] text-white">
                  <svg className="size-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4l4 4-4 4M9 4l4 4-4 4" />
                  </svg>
                </span>
                Plan a launch
              </Link>
            </div>
          </div>

          {/* Unified White Container Box */}
          <div className="bg-white p-5 sm:p-8 lg:p-10 text-zinc-900 shadow-2xl overflow-hidden">
            <div
              ref={scrollContainerRef}
              className="flex gap-6 sm:gap-10 overflow-x-auto pb-4 pt-2 scrollbar-none scroll-smooth snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {allInOneCards.map((card, idx) => (
                <div
                  key={idx}
                  className="flex w-full sm:w-[440px] lg:w-[520px] shrink-0 snap-center gap-4 sm:gap-6 items-start border-r border-zinc-100 pr-4 sm:pr-8 last:border-r-0 last:pr-0"
                >
                  {/* Left Text Column */}
                  <div className="flex flex-1 flex-col justify-start">
                    <span className="mb-2 block font-mono text-3xl sm:text-5xl font-light text-zinc-200">
                      {card.number}
                    </span>

                    <h3 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-zinc-900 leading-snug">
                      {card.title}
                    </h3>
                    
                    <p className="text-[12.5px] sm:text-[13px] leading-relaxed text-zinc-600">
                      {card.description}
                    </p>
                  </div>

                  {/* Right Image Column */}
                  <div className="relative h-[160px] sm:h-[240px] lg:h-[280px] w-[110px] sm:w-[180px] lg:w-[220px] shrink-0 overflow-hidden bg-zinc-100">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 110px, 220px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Carousel Navigation Buttons */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:bg-white/20 active:scale-95"
              aria-label="Previous slide"
            >
              <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:bg-white/20 active:scale-95"
              aria-label="Next slide"
            >
              <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}
