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
          ? -scrollContainerRef.current.clientWidth * 0.5
          : scrollContainerRef.current.clientWidth * 0.5;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="overflow-hidden bg-[#083827] py-16 text-white lg:py-24">
      <ScrollReveal yOffset={60}>
        {/* Header — 2cm inset */}
        <div className="mb-12 w-full px-8 sm:px-12 lg:mb-14 lg:px-16">
          <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <p className="mb-4 flex items-center text-[11px] font-semibold uppercase tracking-widest text-[#00E58F]">
                <span
                  className="mr-2 inline-block size-1.5 bg-[#00E58F]"
                  aria-hidden
                />
                PLATFORM
              </p>
              <h2 className="max-w-xl text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Everything between the invite and the encore
              </h2>
            </div>

            <div className="flex flex-col items-start lg:col-span-6 lg:items-end">
              <p className="mb-6 max-w-md text-[15px] leading-relaxed text-white/80 lg:text-right">
                The same vetted success, broadcast streaming and live engagement
                that powers Attend, tuned for the biggest day on your product
                calendar.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center gap-3 rounded-full bg-white py-2.5 pl-2.5 pr-7 text-[15px] font-medium text-[#083827] transition-opacity hover:opacity-90"
              >
                <span className="flex size-9 items-center justify-center rounded-full bg-[#083827] text-white">
                  <svg
                    className="size-3.5"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4l4 4-4 4M9 4l4 4-4 4" />
                  </svg>
                </span>
                Plan a launch
              </Link>
            </div>
          </div>
        </div>

        {/*
          White strip — full bleed (Figma).
          Larger card height / images / type so it matches the design scale.
        */}
        <div className="bg-white text-zinc-900">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scroll-smooth scrollbar-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {allInOneCards.map((card) => (
              <div
                key={card.number}
                className="flex h-[360px] w-[min(94vw,560px)] shrink-0 sm:h-[420px] sm:w-[620px] lg:h-[480px] lg:w-[680px]"
              >
                {/* Text: number top, title + body bottom */}
                <div className="flex min-w-0 flex-1 flex-col justify-between px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                  <span className="block text-[4.5rem] font-light leading-none tracking-tight text-zinc-200 sm:text-[5.5rem] lg:text-[6.5rem]">
                    {card.number}
                  </span>

                  <div>
                    <h3 className="mb-3 text-lg font-semibold leading-snug text-zinc-900 sm:text-xl lg:text-[1.35rem]">
                      {card.title}
                    </h3>
                    <p className="max-w-[34ch] text-[13.5px] leading-relaxed text-zinc-600 sm:text-[14.5px]">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Square image — full height of strip */}
                <div className="relative h-full w-[160px] shrink-0 sm:w-[240px] lg:w-[300px]">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 160px, (max-width: 1024px) 240px, 300px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel arrows */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="flex size-12 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20 active:scale-95"
            aria-label="Previous slide"
          >
            <svg
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="flex size-12 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20 active:scale-95"
            aria-label="Next slide"
          >
            <svg
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
}
