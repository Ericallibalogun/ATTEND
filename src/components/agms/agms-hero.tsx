import Image from "next/image";

export function AgmsHero() {
  return (
    <section
      id="hero-section"
      className="relative flex flex-col overflow-hidden max-lg:h-[450px] lg:min-h-[100svh]"
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

      <div className="relative z-10 flex flex-1 flex-col section-x">
        {/* Mobile: 450px frame, 60px below copy; desktop: bottom-anchored. */}
        <div className="flex flex-1 flex-col justify-end max-lg:pb-[60px] max-lg:pt-[var(--home-header-height)] lg:pb-24 lg:pt-[calc(var(--home-header-height)+1.5rem)]">
          <div className="content-max text-left">
            <p className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent sm:mb-5 sm:gap-2.5 sm:text-[11px] sm:tracking-[-0.02em]">
              <span
                className="inline-block size-1.5 shrink-0 rounded-full bg-accent"
                aria-hidden
              />
              THE VIRTUAL EVENT PLATFORM FOR EVERY DECISIVE MOMENT
            </p>
            <h1 className="content-max whitespace-pre-line text-[2rem] font-normal leading-[1.15] tracking-[-0.04em] text-white sm:text-[2.25rem] md:text-[3rem] lg:text-[clamp(2.75rem,2.2vw+1.5rem,4.5rem)]">
              {"Every voice counted.\nEvery moment live."}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
