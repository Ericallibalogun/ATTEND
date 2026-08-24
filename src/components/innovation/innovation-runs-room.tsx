"use client";

import { useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const organizerFeatures = [
  "One dashboard for registrations, teams, submissions and scores",
  "Sponsor tiers with branded tracks and bounties",
  "Comms hub, announcements, reminders, schedule changes",
  "Post-event analytics: participation, quality, conversion to pipeline",
];

const participantFeatures = [
  "Clean team discovery board and skill-based matching tool",
  "Direct mentor booking and queue management system",
  "Seamless submission portal for code, decks, and video demos",
  "Live leaderboard tracking and interactive milestone updates",
];

function CheckIcon() {
  return (
    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-[#00E58F]/50 bg-[#00E58F]/15 text-[#00E58F]">
      <svg className="size-3" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path
          d="M3.5 8.5l3 3 6-6.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function InnovationRunsRoom() {
  const [activeTab, setActiveTab] = useState<"organizers" | "participants">(
    "organizers",
  );
  const currentFeatures =
    activeTab === "organizers" ? organizerFeatures : participantFeatures;

  return (
    <section className="relative w-full overflow-hidden bg-[#083827] py-10 text-white sm:py-16 lg:py-20">
      <ScrollReveal yOffset={60}>
        <div className="section-x w-full">
          <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-14">
            {/* Image — below content on mobile (Figma) */}
            <div className="relative order-2 h-[240px] w-full overflow-hidden shadow-xl sm:min-h-[380px] sm:h-auto lg:order-1 lg:col-span-6 lg:min-h-[560px]">
              <Image
                src="/brainstorming-team.webp"
                alt="Hackathon team collaborating around table"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="order-1 flex h-full flex-col justify-between lg:order-2 lg:col-span-6 lg:pl-4">
              <div>
                <p className="mb-3 flex items-center text-[11px] font-semibold uppercase tracking-widest text-[#00E58F]">
                  <span
                    className="mr-2 inline-block size-1.5 bg-[#00E58F]"
                    aria-hidden
                  />
                  BUILT FOR BOTH SIDES
                </p>

                <h2 className="mb-3 text-[1.75rem] font-medium leading-[1.1] tracking-tight text-white sm:mb-4 sm:text-3xl md:text-4xl lg:text-[46px]">
                  Runs the room.
                  <br />
                  Empowers the builder.
                </h2>

                <p className="mb-5 max-w-lg text-[13.5px] leading-relaxed text-white/80 sm:mb-6 sm:text-[14px]">
                  Organisers get full control. Participants get total clarity. No
                  one is left guessing.
                </p>

                {/* Tab Toggle */}
                <div className="mb-5 inline-flex self-start rounded-full border border-white/15 bg-white/10 p-1 backdrop-blur-xs sm:mb-6 lg:mb-8">
                  <button
                    type="button"
                    onClick={() => setActiveTab("organizers")}
                    className={`rounded-full px-4 py-2 text-[12.5px] font-medium transition-all sm:px-6 sm:text-[13px] ${
                      activeTab === "organizers"
                        ? "bg-white font-semibold text-[#083827] shadow-xs"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    For Organizers
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("participants")}
                    className={`rounded-full px-4 py-2 text-[12.5px] font-medium transition-all sm:px-6 sm:text-[13px] ${
                      activeTab === "participants"
                        ? "bg-white font-semibold text-[#083827] shadow-xs"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    For Participants
                  </button>
                </div>
              </div>

              <div className="mt-2 flex flex-col divide-y divide-white/10 border-b border-t border-white/10 text-[13px] text-white/90 sm:text-[13.5px]">
                {currentFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 py-3.5 sm:py-5"
                  >
                    <span className="lg:hidden">
                      <CheckIcon />
                    </span>
                    <span
                      className="mt-1.5 hidden size-1.5 shrink-0 bg-white lg:inline-block"
                      aria-hidden
                    />
                    <span className="leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
