"use client";

import Image from "next/image";

export function LaunchHero() {
  return (
    <section
      id="hero-section"
      className="relative flex h-[450px] w-full flex-col overflow-hidden bg-zinc-950 text-white lg:min-h-screen lg:h-auto"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/boardroom3.webp"
          alt="Product Launch Auditorium Stage"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-40 bg-gradient-to-b from-black/70 via-black/30 to-transparent sm:h-44" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[55%] bg-gradient-to-t from-zinc-950 via-zinc-950/55 to-transparent lg:h-[60%] lg:via-zinc-950/60" />
      </div>

      <div className="section-x relative z-10 flex flex-1 flex-col">
        {/* Mobile: 450px frame, 60px below copy; desktop: bottom-anchored */}
        <div className="flex flex-1 flex-col justify-end pb-[60px] pt-[var(--home-header-height)] lg:pb-24 lg:pt-[calc(var(--home-header-height)+1.5rem)]">
          <div className="max-w-3xl text-left">
            <p className="mb-3 flex items-center text-[10px] font-semibold uppercase tracking-[0.14em] text-[#00E58F] sm:mb-4 sm:text-[11px] sm:tracking-[-0.02em]">
              <span
                className="mr-2 inline-block size-1.5 bg-[#00E58F]"
                aria-hidden
              />
              VIRTUAL PRODUCT LAUNCH AND EVENTS
            </p>

            <h1 className="max-w-2xl text-[2rem] font-medium leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[clamp(2.75rem,2.2vw+1.5rem,3.75rem)]">
              Give your product
              <br />
              the reveal it deserves.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
