import Image from "next/image";
import { CoverHeader } from "@/components/cover/cover-header";

export function InnovationHero() {
  return (
    <section id="hero-section" className="relative flex min-h-[70vh] lg:min-h-[85vh] flex-col justify-end overflow-hidden bg-black text-white">
      {/* Background Image with Dark Vignette/Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/boardroom-2.webp"
          alt="Hackathon whiteboard ideation"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Light dark hue at header area only */}
        <div className="pointer-events-none absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-black/60 via-black/25 to-transparent z-[2]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full px-6 lg:px-12 pb-20 pt-32 lg:pb-28">
        <div className="max-w-2xl">
          <p className="mb-6 flex items-center text-xs font-semibold uppercase tracking-[-0.02em] text-[#00E58F]">
            <span className="mr-2 inline-block size-1.5 bg-[#00E58F]" aria-hidden />
            INNOVATION CHALLENGES & HACKATHONS
          </p>
          <h1 className="text-4xl font-medium leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Where ideas race
            <br />
            the clock.
          </h1>
        </div>
      </div>
    </section>
  );
}
