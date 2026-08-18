import Image from "next/image";

export function InnovationHero() {
  return (
    <section
      id="hero-section"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-black text-white lg:min-h-[85vh]"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/boardroom-2.webp"
          alt="Hackathon whiteboard ideation"
          fill
          priority
          quality={100}
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Base dim — bright whiteboard needs overall darkening */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-black/45" />

        {/* Logo + hamburger readability */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-48 bg-gradient-to-b from-black/80 via-black/45 to-transparent sm:h-56" />

        {/* Mid band for centered mobile copy */}
        <div className="pointer-events-none absolute inset-x-0 top-[28%] z-[2] h-[50%] bg-gradient-to-b from-transparent via-black/50 to-transparent lg:hidden" />

        {/* Bottom / desktop text anchor */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[55%] bg-gradient-to-t from-black/80 via-black/35 to-transparent lg:h-[65%] lg:from-black/90 lg:via-black/45" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col px-5 sm:px-8 lg:px-12">
        <div className="flex flex-1 flex-col justify-center pb-10 pt-[calc(var(--home-header-height,72px)+1.5rem)] lg:justify-end lg:pb-28 lg:pt-[calc(var(--home-header-height,72px)+1.5rem)]">
          <div className="max-w-2xl text-left drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
            <p className="mb-3 flex items-center text-[10px] font-semibold uppercase tracking-[0.14em] text-[#00E58F] sm:mb-6 sm:text-xs sm:tracking-[-0.02em]">
              <span
                className="mr-2 inline-block size-1.5 bg-[#00E58F]"
                aria-hidden
              />
              INNOVATION CHALLENGES & HACKATHONS
            </p>
            <h1 className="text-[2rem] font-medium leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Where ideas race
              <br />
              the clock.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
