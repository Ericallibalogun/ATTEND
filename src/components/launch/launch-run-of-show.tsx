"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const STEP_DURATION = 5000; // 5 seconds per stage

const runOfShowStages = [
  {
    time: "T-14 DAYS",
    title: "Build anticipation",
    bullets: [
      "Branded invites & RSVP tiers",
      "Teaser page and calendar holds",
      "Waitlists for oversubscribed sessions",
    ],
  },
  {
    time: "T-1 HOUR",
    title: "Open the doors",
    bullets: [
      "Verified check-in for guests, press and VIPs",
      "Pre-show loop and countdown build the room",
    ],
  },
  {
    time: "T-0, LIVE",
    title: "The reveal",
    bullets: [
      "Broadcast-quality keynote with rehearsed cutaways",
      "Live demos and reaction moments",
      "On stage and on stream at once",
    ],
  },
  {
    time: "T+FOLLOW-THROUGH",
    title: "Keep the momentum",
    bullets: [
      "On-demand replay with chapter markers",
      "Automated follow-up sequences by segment",
      "Pipeline attribution from first click to close",
    ],
  },
];

export function LaunchRunOfShow() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) {
      startTimeRef.current = null;
      return;
    }

    if (startTimeRef.current === null) {
      startTimeRef.current = performance.now();
    }

    const interval = setInterval(() => {
      if (startTimeRef.current === null) return;
      const elapsed = performance.now() - startTimeRef.current;
      const currentProgress = Math.min((elapsed / STEP_DURATION) * 100, 100);

      if (elapsed >= STEP_DURATION) {
        startTimeRef.current = performance.now();
        setProgress(0);
        setActiveIdx((prev) => (prev + 1) % runOfShowStages.length);
      } else {
        setProgress(currentProgress);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isPaused, activeIdx]);

  const handleStageClick = (idx: number) => {
    // eslint-disable-next-line react-hooks/purity
    startTimeRef.current = performance.now();
    setProgress(0);
    setActiveIdx(idx);
  };

  const getStageWidth = (idx: number) => {
    if (idx < activeIdx) return "100%";
    if (idx === activeIdx) return `${progress}%`;
    return "0%";
  };

  return (
    <section className="bg-white py-10 text-zinc-900 sm:py-16 lg:py-24">
      <ScrollReveal yOffset={60}>
        <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          
          {/* Left Content */}
          <div className="flex flex-col">
            <p className="mb-3 flex items-center text-[11px] font-semibold uppercase tracking-widest text-[#004D34] sm:mb-4">
              <span className="mr-2 inline-block size-1.5 bg-[#004D34]" aria-hidden />
              THE RUN OF SHOW
            </p>
            
            <h2 className="mb-4 text-[1.75rem] font-medium leading-[1.15] tracking-tight text-zinc-900 sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
              A launch is a story told
              <br />
              in order.
            </h2>

            <p className="mb-8 max-w-xl text-[13.5px] leading-relaxed text-zinc-600 sm:mb-10 sm:text-[14px]">
              Attend structures the whole arc, from anticipation, doors, reveal, proof and follow-through, so the moment lands exactly as rehearsed.
            </p>

            {/* Stages Table */}
            <div
              className="flex flex-col border-t border-black/10"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {runOfShowStages.map((stage, idx) => {
                const isActive = activeIdx === idx;
                const isCompleted = idx < activeIdx;
                const stageWidth = getStageWidth(idx);

                return (
                  <div
                    key={idx}
                    onClick={() => handleStageClick(idx)}
                    className={`relative cursor-pointer border-b border-black/10 px-2 py-4 transition-all duration-300 sm:px-3 sm:py-6 ${
                      isActive
                        ? "bg-[#EAF3EE]/90 shadow-xs"
                        : isCompleted
                        ? "bg-black/[0.01]"
                        : "hover:bg-black/[0.015]"
                    }`}
                  >
                    {/* Animated Top Green Progress Line */}
                    <div className="absolute inset-x-0 top-0 h-[3px] bg-black/5 overflow-hidden">
                      <div
                        className="h-full bg-[#004D34] transition-all duration-100 ease-linear"
                        style={{
                          width: stageWidth,
                        }}
                      />
                    </div>

                    <div className="grid grid-cols-1 items-start gap-2 sm:grid-cols-[140px_1fr] sm:gap-4">
                      {/* Time Tag */}
                      <p className="flex items-center text-[10px] font-semibold uppercase tracking-wider text-[#004D34] sm:text-[11px]">
                        <span className="mr-1.5 inline-block size-1.5 bg-[#004D34]" aria-hidden />
                        {stage.time}
                      </p>

                      {/* Stage Content */}
                      <div>
                        <h3 className="text-[15px] font-semibold text-zinc-900 sm:text-[16px]">
                          {stage.title}
                        </h3>

                        {/* Collapsible Stage Bullets */}
                        <div
                          className={`grid transition-all duration-300 ease-in-out ${
                            isActive
                              ? "mt-3 grid-rows-[1fr] opacity-100"
                              : "mt-0 grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <ul className="flex flex-col gap-2 pb-1 text-[13px] text-zinc-600 sm:text-[13.5px]">
                              {stage.bullets.map((bullet, bIdx) => (
                                <li key={bIdx} className="flex items-start gap-2">
                                  <span className="mt-1.5 size-1 shrink-0 rounded-full bg-zinc-400" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image — below stages on mobile */}
          <div className="relative h-[240px] w-full overflow-hidden bg-zinc-900 shadow-xl sm:h-[420px] lg:h-full lg:min-h-[720px]">
            <Image
              src="/3a18b6d36eead1a8f298c36a398284fd06d5b1c0.webp"
              alt="Launch Event Camera and Stage Setup"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </div>

        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
