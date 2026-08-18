import Image from "next/image";

export function AgmsHero() {
  return (
    <section
      id="hero-section"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/boardroom.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-40 bg-gradient-to-b from-black/70 via-black/30 to-transparent sm:h-44" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[55%] bg-gradient-to-t from-black/80 via-black/35 to-transparent lg:h-[70%] lg:from-black/90 lg:via-black/45" />

      <div className="relative z-10 flex flex-1 flex-col px-5 sm:px-8 md:px-10 lg:px-14">
        {/* Mobile: vertically centered copy (Figma). Desktop: bottom-anchored. */}
        <div className="flex flex-1 flex-col justify-center pt-[var(--home-header-height,72px)] pb-8 sm:pb-12 lg:justify-end lg:pb-24 lg:pt-[calc(var(--home-header-height,72px)+1.5rem)]">
          <div className="max-w-[814px] text-left">
            <p className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent sm:mb-5 sm:gap-2.5 sm:text-[11px] sm:tracking-[-0.02em]">
              <span
                className="inline-block size-1.5 shrink-0 rounded-full bg-accent"
                aria-hidden
              />
              THE VIRTUAL EVENT PLATFORM FOR EVERY DECISIVE MOMENT
            </p>
            <h1 className="max-w-[814px] whitespace-pre-line text-[2rem] font-normal leading-[1.15] tracking-[-0.04em] text-white sm:text-[2.25rem] md:text-[3rem] lg:text-[4.5rem]">
              {"Every voice counted.\nEvery moment live."}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
