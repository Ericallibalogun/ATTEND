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
        <div className="bg-white border border-zinc-200/80 p-6 sm:p-8 lg:p-10 shadow-xs lg:grid lg:grid-cols-3 lg:gap-8 lg:divide-y-0 lg:bg-transparent lg:p-0 lg:border-0 lg:shadow-none divide-y divide-zinc-100">
          {valueProps.map((item, idx) => (
            <div
              key={idx}
              className="py-6 first:pt-0 last:pb-0 lg:flex lg:flex-col lg:justify-between lg:bg-white lg:p-8 lg:border lg:border-black/5 lg:shadow-xs lg:py-8"
            >
              <div>
                {/* Green Icon Circle */}
                <div className="mb-4 lg:mb-8 flex size-9 lg:size-10 items-center justify-center rounded-full bg-[#E2EEE7]">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={24}
                    height={24}
                    className="size-5 lg:size-6 object-contain"
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
