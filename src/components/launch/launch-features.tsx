import React from "react";

const valueProps = [
  {
    title: "Broadcast-quality",
    description: "Tailored HD video streams with sub-second latency and multi-cam switching.",
  },
  {
    title: "Interactive demos",
    description: "Enable 360° product exploration and live feature walk-throughs.",
  },
  {
    title: "Audience applause",
    description: "Reactions, live polls, and audience voting calculated in real-time.",
  },
  {
    title: "Segmented access",
    description: "VIP embargo previews, press keynotes, and public livestream tiers.",
  },
  {
    title: "Embed & partner",
    description: "Seamlessly embed the launch stream across partner networks & media.",
  },
  {
    title: "Corporate control",
    description: "Permissions, branded chat moderation, and executive dashboard.",
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

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-white p-8 lg:p-10 border border-black/5 shadow-xs transition-shadow hover:shadow-md"
            >
              <div>
                {/* Green Spark Icon */}
                <div className="mb-8 flex size-10 items-center justify-center bg-[#E2EEE7] text-[#004D34]">
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-zinc-900">
                  {item.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-zinc-600">
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
