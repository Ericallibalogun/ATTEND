"use client";

import Image from "next/image";

export function LaunchHero() {
  return (
    <section id="hero-section" className="relative min-h-[85vh] lg:min-h-screen w-full bg-zinc-950 text-white flex flex-col justify-end overflow-hidden pb-16 pt-32 lg:pb-24 lg:pt-40">
      {/* Background Auditorium Stage Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/3a18b6d36eead1a8f298c36a398284fd06d5b1c0.png"
          alt="Product Launch Auditorium Stage"
          fill
          className="object-cover object-center opacity-60"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p className="mb-4 flex items-center text-[11px] font-semibold uppercase tracking-widest text-[#00E58F]">
            <span className="mr-2.5 inline-block size-2 bg-[#00E58F]" aria-hidden />
            PRODUCT LAUNCHES & REVEALS
          </p>

          {/* Main Headline */}
          <h1 className="mb-6 text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl max-w-3xl">
            Give your product
            <br />
            the reveal it deserves.
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-[15px] sm:text-base leading-relaxed text-zinc-300">
            From keynote webcasts to virtual demo rooms and press briefings, Attend powers seamless, high-stakes product launches for global audiences.
          </p>
        </div>
      </div>
    </section>
  );
}
