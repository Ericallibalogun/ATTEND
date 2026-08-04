import React from "react";
import Image from "next/image";

const valueProps = [
  {
    title: "Broadcast-quality",
    description: "Tailored HD video streams with sub-second latency and multi-cam switching.",
    icon: "/Frame.webp",
  },
  {
    title: "Interactive demos",
    description: "Enable 360° product exploration and live feature walk-throughs.",
    icon: "/Brutalism 74.webp",
  },
  {
    title: "Audience applause",
    description: "Reactions, live polls, and audience voting calculated in real-time.",
    icon: "/Brutalism 74 (1).webp",
  },
  {
    title: "Segmented access",
    description: "VIP embargo previews, press keynotes, and public livestream tiers.",
    icon: "/Frame (1).webp",
  },
  {
    title: "Embed & partner",
    description: "Seamlessly embed the launch stream across partner networks & media.",
    icon: "/Brutalism 16.webp",
  },
  {
    title: "Corporate control",
    description: "Permissions, branded chat moderation, and executive dashboard.",
    icon: "/Vector.webp",
  },
];

export function LaunchFeatures() {
  return (
    <section className="bg-[#F8FBF9] py-16 lg:py-24 text-zinc-900">
      <div className="w-full px-6 lg:px-12">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-4 flex items-center justify-center text-[11px] font-semibold uppercase tracking-widest text-[#004D34]">
            <span className="mr-2 inline-block size-1.5 bg-[#004D34]" aria-hidden />
            FOR TECH & CONSUMER BRANDS
          </p>
          <h2 className="text-3xl font-medium leading-tight tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
            Deliver a high-impact product reveal
          </h2>
        </div>

        {/* 6 Value Prop Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {valueProps.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-white p-6 sm:p-8 rounded-none border border-black/5 shadow-xs"
            >
              <div>
                {/* Icon sitting plainly on card */}
                <div className="mb-5 lg:mb-6 flex items-center h-9">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={36}
                    height={36}
                    className="h-8 lg:h-9 w-auto object-contain object-left"
                  />
                </div>

                <h3 className="mb-2 text-base font-semibold text-zinc-900 lg:text-lg lg:mb-3">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-zinc-600 lg:text-[13.5px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
