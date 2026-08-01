"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

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
  const progressRef = useRef(0);
  const isPausedRef = useRef(isPaused);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    let animFrameId: number;

    const animate = (timestamp: number) => {
      if (isPausedRef.current) {
        startTimeRef.current = timestamp - (progressRef.current / 100) * STEP_DURATION;
        animFrameId = requestAnimationFrame(animate);
        return;
      }

      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp - (progressRef.current / 100) * STEP_DURATION;
      }

      const elapsed = timestamp - startTimeRef.current;
      const currentProgress = Math.min((elapsed / STEP_DURATION) * 100, 100);

      progressRef.current = currentProgress;
      setProgress(currentProgress);

      if (elapsed >= STEP_DURATION) {
        startTimeRef.current = null;
        progressRef.current = 0;
        setProgress(0);
        setActiveIdx((prev) => (prev + 1) % runOfShowStages.length);
      } else {
        animFrameId = requestAnimationFrame(animate);
      }
    };

    animFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrameId);
    };
  }, [activeIdx]);

  const handleStageClick = (idx: number) => {
    startTimeRef.current = null;
    progressRef.current = 0;
    setProgress(0);
    setActiveIdx(idx);
  };

  const getStageWidth = (idx: number) => {
    if (idx < activeIdx) return "100%";
    if (idx === activeIdx) return `${progress}%`;
    return "0%";
  };

  return (
    <section className="bg-white py-16 lg:py-24 text-zinc-900">
      <div className="w-full px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-start">
          
          {/* Left Content */}
          <div className="flex flex-col">
            <p className="mb-4 flex items-center text-[11px] font-semibold uppercase tracking-widest text-[#004D34]">
              <span className="mr-2 inline-block size-1.5 bg-[#004D34]" aria-hidden />
              THE RUN OF SHOW
            </p>
            
            <h2 className="mb-6 text-3xl font-medium leading-[1.15] tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
              A launch is a story told
              <br />
              in order.
            </h2>

            <p className="mb-10 text-[14px] leading-relaxed text-zinc-600 max-w-xl">
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
                    className={`relative cursor-pointer border-b border-black/10 py-6 px-3 transition-all duration-300 ${
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
                        className="h-full bg-[#004D34]"
                        style={{
                          width: stageWidth,
                        }}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-4 items-start">
                      {/* Time Tag */}
                      <p className="flex items-center text-[11px] font-semibold uppercase tracking-wider text-[#004D34]">
                        <span className="mr-1.5 inline-block size-1.5 bg-[#004D34]" aria-hidden />
                        {stage.time}
                      </p>

                      {/* Stage Content */}
                      <div>
                        <h3 className="mb-3 text-[16px] font-semibold text-zinc-900">
                          {stage.title}
                        </h3>
                        <ul className="flex flex-col gap-2 text-[13.5px] text-zinc-600">
                          {stage.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-center gap-2">
                              <span className="size-1 rounded-full bg-zinc-400" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[360px] sm:h-[540px] lg:h-full lg:min-h-[720px] w-full overflow-hidden bg-zinc-900 shadow-xl">
            <Image
              src="/3a18b6d36eead1a8f298c36a398284fd06d5b1c0.png"
              alt="Launch Event Camera and Stage Setup"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
