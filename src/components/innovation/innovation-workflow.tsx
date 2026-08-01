"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const STEP_DURATION = 5000; // 5 seconds per step

const workflowSteps = [
  {
    number: "01",
    title: "Open the call",
    role: "ORGANISER",
    description:
      "Publish your challenge with tracks, prizes, rules and a timeline, and watch branded registration go live in minutes.",
  },
  {
    number: "02",
    title: "Form teams",
    role: "PARTICIPANTS",
    description:
      "Builders browse profiles by skill, pitch their ideas and team up, or get matched automatically. With virtual networking tools built right in, the right teammate is never a matter of luck.",
  },
  {
    number: "03",
    title: "Build with support",
    role: "MENTORS + TEAMS",
    description:
      "Mentor office hours, workshops, announcements and resource drops keep momentum going through the sprint, all powered by our virtual workshop software.",
  },
  {
    number: "04",
    title: "Submit before the buzzer",
    role: "TEAMS",
    description:
      "Repos, decks, demo videos and write-ups all land in one submission hub, timestamped, versioned and locked the second the deadline hits.",
  },
  {
    number: "05",
    title: "Judge on the record",
    role: "JUDGES",
    description:
      "Judges score against your rubric, independently and transparently. Conflicts get flagged, scores get normalised, and every decision stays auditable.",
  },
  {
    number: "06",
    title: "Crown the winners",
    role: "EVERYONE",
    description:
      "Demo day goes live: streamed pitches, audience-choice voting and a leaderboard finale, followed by prize disbursement tracking so nothing falls through the cracks.",
  },
];

export function InnovationWorkflow() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 50; // update progress every 50ms
    const increment = (intervalTime / STEP_DURATION) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + increment >= 100) {
          setActiveIdx((current) => (current + 1) % workflowSteps.length);
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPaused, activeIdx]);

  const handleStepClick = (idx: number) => {
    setActiveIdx(idx);
    setProgress(0);
  };

  return (
    <section className="bg-[#F8FBF9] py-14 lg:py-20 text-zinc-900">
      <div className="w-full px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 items-start">
          
          {/* Left Content */}
          <div className="flex flex-col">
            <p className="mb-4 flex items-center text-[11px] font-semibold uppercase tracking-widest text-[#004D34]">
              <span className="mr-2 inline-block size-1.5 bg-[#004D34]" aria-hidden />
              THE CHALLENGE LIFECYCLE
            </p>
            
            <h2 className="mb-6 text-3xl font-medium leading-[1.15] tracking-tight text-zinc-900 sm:text-4xl lg:text-[2.75rem]">
              From open call to demo day,
              <br />
              without the duct tape
            </h2>

            <p className="mb-10 text-[14px] leading-relaxed text-zinc-600 max-w-xl">
              Most hackathons run on six disconnected tools. Attend runs the whole sequence in one place, every stage feeding the next, backed by the same event registration and ticketing engine used for enterprise meetings.
            </p>

            {/* Interactive Stepper Accordion List */}
            <div
              className="flex flex-col border-t border-black/10"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {workflowSteps.map((step, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => handleStepClick(idx)}
                    className={`relative cursor-pointer border-b border-black/10 transition-all duration-300 ${
                      isActive
                        ? "bg-[#EAF3EE]/80 py-5 px-4 shadow-xs"
                        : "py-4 px-2 opacity-75 hover:opacity-100 hover:bg-black/[0.01]"
                    }`}
                  >
                    {/* Animated Top Green Progress Line */}
                    <div className="absolute inset-x-0 top-0 h-[2.5px] bg-black/5 overflow-hidden">
                      <div
                        className="h-full bg-[#004D34] transition-all duration-75 ease-linear"
                        style={{
                          width: isActive ? `${progress}%` : "0%",
                        }}
                      />
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span
                          className={`text-[14px] font-mono transition-colors ${
                            isActive ? "font-bold text-[#004D34]" : "font-medium text-zinc-400"
                          }`}
                        >
                          {step.number}
                        </span>
                        <h3
                          className={`text-[16px] transition-colors ${
                            isActive ? "font-semibold text-zinc-900" : "font-medium text-zinc-800"
                          }`}
                        >
                          {step.title}
                        </h3>
                      </div>
                      <span className="text-[11px] font-semibold tracking-wider text-[#004D34] uppercase shrink-0">
                        {step.role}
                      </span>
                    </div>

                    {/* Smooth Collapsible Description */}
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isActive
                          ? "grid-rows-[1fr] opacity-100 mt-3"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pl-8 text-[13.5px] leading-relaxed text-zinc-600 max-w-lg">
                          {step.description}
                        </p>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[340px] sm:h-[520px] lg:h-full lg:min-h-[780px] w-full overflow-hidden rounded-none bg-zinc-900 shadow-xl">
            <Image
              src="/Frame 35774 (1).webp"
              alt="Hackathon award trophy and certificates"
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
