"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useBookDemoModal } from "@/components/layout/book-demo-modal";
import { CarouselCardImage } from "@/components/ui/carousel-card-image";

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
    image: "/launch-stage.webp",
    alt: "Broadcast-quality staging - presentation setup",
  },
  {
    number: "03",
    title: "Live audience energy",
    description:
      "Reactions, applause moments, live polls and moderated Q&A give remote viewers the same electric clarity as the front row.",
    image: "/customer-support-1.webp",
    alt: "Live audience energy - broadcast stage",
  },
  {
    number: "04",
    title: "Demos & breakouts",
    description:
      "Route audiences into product demo rooms, press briefings and partner sessions inside dedicated virtual exhibitor booths, each with its own host, materials and capacity rules.",
    image: "/demo-room.webp",
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
  const { openModal } = useBookDemoModal();
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollDistanceRef = useRef(0);
  const [scrollDistance, setScrollDistance] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  scrollDistanceRef.current = scrollDistance;

  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const distance = Math.max(0, track.scrollWidth - viewport.clientWidth);
    setScrollDistance((prev) => (prev === distance ? prev : distance));
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

  const x = useTransform(scrollYProgress, (progress) => {
    return -progress * scrollDistanceRef.current;
  });

  const goToCard = (targetIdx: number) => {
    if (!containerRef.current) return;
    const clamped = Math.max(
      0,
      Math.min(allInOneCards.length - 1, targetIdx),
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
      (clamped / (allInOneCards.length - 1)) * scrollableDistance;

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    const currentCardIdx = Math.round(
      scrollYProgress.get() * (allInOneCards.length - 1),
    );
    goToCard(currentCardIdx - 1);
  };

  const handleNext = () => {
    const currentCardIdx = Math.round(
      scrollYProgress.get() * (allInOneCards.length - 1),
    );
    goToCard(currentCardIdx + 1);
  };

  return (
    <section
      ref={containerRef}
      className="relative h-[220vh] bg-[#083827] sm:h-[280vh] lg:h-[300vh]"
    >
      <div className="sticky top-0 flex h-[100svh] flex-col overflow-hidden pb-4 pt-5 sm:pb-5 sm:pt-6 lg:pb-6 lg:pt-8">
        {/* Header */}
        <div className="section-x mb-3 w-full shrink-0 sm:mb-4 lg:mb-6">
          <div className="grid items-end gap-5 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <p className="mb-3 flex items-center text-[11px] font-semibold uppercase tracking-widest text-[#00E58F] sm:mb-4">
                <span
                  className="mr-2 inline-block size-1.5 bg-[#00E58F]"
                  aria-hidden
                />
                PLATFORM
              </p>
              <h2 className="max-w-xl text-[1.75rem] font-medium leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                Everything between the invite and the encore
              </h2>
              <p className="mt-3 max-w-md text-[13.5px] leading-relaxed text-white/80 lg:hidden">
                The same vetted success, broadcast streaming and live engagement
                that powers Attend, tuned for the biggest day on your product
                calendar.
              </p>
              <button
                type="button"
                onClick={openModal}
                className="mt-5 inline-flex h-11 items-center gap-3 rounded-full bg-white py-2 pl-2 pr-5 text-[13.5px] font-medium text-[#083827] transition-opacity hover:opacity-90 lg:hidden"
              >
                <span className="flex size-7 items-center justify-center rounded-full bg-[#083827] text-white">
                  <svg
                    className="size-3"
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
              </button>
            </div>

            <div className="hidden flex-col items-start lg:col-span-6 lg:flex lg:items-end">
              <p className="mb-6 max-w-md text-[15px] leading-relaxed text-white/80 lg:text-right">
                The same vetted success, broadcast streaming and live engagement
                that powers Attend, tuned for the biggest day on your product
                calendar.
              </p>

              <button
                type="button"
                onClick={openModal}
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
              </button>
            </div>
          </div>
        </div>

        {/* Mobile: inset mint card + tight controls. Desktop: full-bleed white strip. */}
        <div className="flex min-h-0 flex-1 flex-col lg:shrink-0 lg:flex-none">
          <div className="section-x flex min-h-0 w-full flex-1 items-center lg:block lg:flex-none lg:px-0">
            <div
              ref={viewportRef}
              className="relative w-full overflow-hidden bg-[#EFF5F3] lg:bg-white"
            >
              <motion.div
                ref={trackRef}
                style={{ x }}
                className="flex items-stretch will-change-transform [transform:translateZ(0)] lg:items-end"
              >
                {allInOneCards.map((card, cardIndex) => (
                  <div
                    key={card.number}
                    className="flex h-[280px] w-full shrink-0 items-stretch gap-3 border border-black/5 bg-white p-3 sm:h-[300px] sm:gap-4 sm:p-4 lg:h-[480px] lg:w-[680px] lg:gap-0 lg:border-0 lg:bg-transparent lg:p-0"
                  >
                    <div className="flex min-w-0 flex-1 flex-col justify-between lg:px-10 lg:py-12">
                      <span className="block text-[2.75rem] font-light leading-none tracking-tight text-[#5c8a74]/40 sm:text-[3.25rem] lg:text-[6.5rem] lg:text-zinc-200">
                        {card.number}
                      </span>

                      <div>
                        <h3 className="mb-1.5 text-[15px] font-semibold leading-snug text-zinc-900 sm:mb-2 sm:text-base lg:mb-3 lg:text-[1.35rem]">
                          {card.title}
                        </h3>
                        <p className="line-clamp-4 text-[12px] leading-relaxed text-zinc-600 sm:line-clamp-none sm:text-[12.5px] lg:max-w-[34ch] lg:text-[14.5px]">
                          {card.description}
                        </p>
                      </div>
                    </div>

                    <div className="relative isolate h-full w-[38%] max-w-[132px] shrink-0 overflow-hidden sm:w-[42%] sm:max-w-[160px] lg:w-[300px] lg:max-w-none">
                      <CarouselCardImage
                        src={card.image}
                        alt={card.alt}
                        maxDisplayWidth={300}
                        priority={cardIndex < 2}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="mt-4 flex shrink-0 items-center justify-center gap-3 lg:mt-5">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous slide"
              className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20 active:scale-95 sm:size-12"
            >
              <svg
                className="size-4 sm:size-5"
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
              onClick={handleNext}
              aria-label="Next slide"
              className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20 active:scale-95 sm:size-12"
            >
              <svg
                className="size-4 sm:size-5"
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
        </div>
      </div>
    </section>
  );
}
