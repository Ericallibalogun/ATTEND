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

export function InnovationRunsRoom() {
  const [activeTab, setActiveTab] = useState<"organizers" | "participants">("organizers");
  const currentFeatures = activeTab === "organizers" ? organizerFeatures : participantFeatures;

  return (
    <section className="relative w-full overflow-hidden bg-[#083827] py-12 sm:py-16 lg:py-20 text-white">
      <ScrollReveal yOffset={60}>
        <div className="w-full px-6 sm:px-10 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 lg:items-stretch">
          
          {/* Left Column: Image */}
          <div className="order-2 lg:order-1 lg:col-span-6 relative min-h-[380px] sm:min-h-[480px] lg:min-h-[560px] h-full w-full overflow-hidden rounded-none shadow-xl">
            <Image
              src="/Frame 35776.webp"
              alt="Hackathon team collaborating around table"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right Column: Content starting and ending flush with Image */}
          <div className="order-1 lg:order-2 lg:col-span-6 flex flex-col justify-between h-full pl-0 lg:pl-4">
            <div>
              <p className="mb-3 flex items-center text-[11px] font-semibold uppercase tracking-widest text-[#00E58F]">
                <span className="mr-2 inline-block size-1.5 bg-[#00E58F]" aria-hidden />
                BUILT FOR BOTH SIDES
              </p>

              <h2 className="mb-4 text-3xl font-medium leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[46px]">
                Runs the room.
                <br />
                Empowers the builder.
              </h2>

              <p className="mb-6 text-[14px] leading-relaxed text-white/80 max-w-lg">
                Organisers get full control. Participants get total clarity. No one <br /> is left guessing.
              </p>

              {/* Tab Toggle Pill */}
              <div className="mb-6 lg:mb-8 inline-flex self-start rounded-full bg-white/10 p-1 border border-white/15 backdrop-blur-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab("organizers")}
                  className={`rounded-full px-6 py-2 text-[13px] font-medium transition-all ${
                    activeTab === "organizers"
                      ? "bg-white text-[#083827] font-semibold shadow-xs"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  For Organizers
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("participants")}
                  className={`rounded-full px-6 py-2 text-[13px] font-medium transition-all ${
                    activeTab === "participants"
                      ? "bg-white text-[#083827] font-semibold shadow-xs"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  For Participants
                </button>
              </div>
            </div>

            {/* Feature List with Generous Padding taking up the vertical space */}
            <div className="flex flex-col text-[13.5px] text-white/90 divide-y divide-white/10 border-t border-b border-white/10 mt-2">
              {currentFeatures.map((feature, idx) => (
                <div key={idx} className="py-4.5 sm:py-5 lg:py-5.5 flex items-start gap-3">
                  <span className="mt-1.5 inline-block size-1.5 shrink-0 bg-white font-bold" aria-hidden />
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
