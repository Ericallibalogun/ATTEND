"use client";

import { useState } from "react";
import Image from "next/image";

const organizerFeatures = [
  "One-click portal setup for registration and team formation.",
  "Automated mentor matching and office hours scheduling.",
  "Real-time score compilation with custom weighting rules.",
  "Automated certificate generation and prize distribution tracking.",
];

const participantFeatures = [
  "Clean team discovery board and skill-based matching tool.",
  "Direct mentor booking and queue management system.",
  "Seamless submission portal for code, decks, and video demos.",
  "Live leaderboard tracking and interactive milestone updates.",
];

export function InnovationRunsRoom() {
  const [activeTab, setActiveTab] = useState<"organizers" | "participants">("organizers");
  const currentFeatures = activeTab === "organizers" ? organizerFeatures : participantFeatures;

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="w-full px-6 lg:px-12">
        <div className="overflow-hidden rounded-none bg-[#083827] text-white p-8 sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            
            {/* Left Image */}
            <div className="relative h-[340px] sm:h-[420px] lg:h-[480px] w-full overflow-hidden rounded-none">
              <Image
                src="/Frame 35776.webp"
                alt="Hackathon team collaborating"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Right Content */}
            <div className="flex flex-col">
              <p className="mb-4 flex items-center text-[11px] font-semibold uppercase tracking-widest text-[#00E58F]">
                <span className="mr-2 inline-block size-1.5 bg-[#00E58F]" aria-hidden />
                HOST & PARTICIPANT PANELS
              </p>

              <h2 className="mb-4 text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Runs the room.
                <br />
                Empowers the builder.
              </h2>

              <p className="mb-8 text-[14px] leading-relaxed text-white/80 max-w-lg">
                Dual-sided controls keep organizers in command while giving hackers a clean, focused workspace.
              </p>

              {/* Tab Toggle Buttons */}
              <div className="mb-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab("organizers")}
                  className={`rounded-full px-6 py-2.5 text-[13px] font-medium transition-all ${
                    activeTab === "organizers"
                      ? "bg-white text-[#083827] shadow-sm"
                      : "border border-white/20 bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  For Organizers
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("participants")}
                  className={`rounded-full px-6 py-2.5 text-[13px] font-medium transition-all ${
                    activeTab === "participants"
                      ? "bg-white text-[#083827] shadow-sm"
                      : "border border-white/20 bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  For Participants
                </button>
              </div>

              {/* Bullet Features List */}
              <ul className="flex flex-col gap-4 text-[13.5px] text-white/90">
                {currentFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 flex size-2 shrink-0 rounded-full bg-[#00E58F]" aria-hidden />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
