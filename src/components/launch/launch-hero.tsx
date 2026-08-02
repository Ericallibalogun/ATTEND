"use client";

import Image from "next/image";

export function LaunchHero() {
  return (
    <section id="hero-section" className="relative min-h-[85vh] lg:min-h-screen w-full bg-zinc-950 text-white flex flex-col justify-end overflow-hidden pb-16 pt-32 lg:pb-24 lg:pt-40">
      {/* Background Auditorium Stage Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/boardroom3.webp"
          alt="Product Launch Auditorium Stage"
          fill
          className="object-cover object-center brightness-95 contrast-105"
          priority
          quality={100}
        />
        {/* Subtle Dark Gradient Overlay for Left Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="mb-4 flex items-center text-[11px] font-semibold uppercase tracking-widest text-[#00E58F]">
            <span className="mr-2 inline-block size-1.5 bg-[#00E58F]" aria-hidden />
            VIRTUAL PRODUCT LAUNCH AND EVENTS
          </p>

          {/* Main Headline */}
          <h1 className="mb-4 text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl max-w-2xl">
            Give your product
            <br />
            the reveal it deserves.
          </h1>
        </div>
      </div>
    </section>
  );
}
