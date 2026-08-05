"use client";

import Image from "next/image";
import { useBookDemoModal } from "@/components/layout/book-demo-modal";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

function DoubleChevronIcon() {
  return (
    <svg aria-hidden className="size-3.5 text-[#004D34]" viewBox="0 0 16 16" fill="none">
      <path d="M4 4l4 4-4 4M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TalkToTeamCta() {
  const { openModal } = useBookDemoModal();

  return (
    <ScrollReveal yOffset={60}>
      <section className="relative flex min-h-[480px] lg:min-h-[560px] flex-col items-center justify-center overflow-hidden py-20 lg:py-28">
      {/* Base Background Color */}
      <div className="absolute inset-0 bg-[#f8fbf9]" />

      {/* Green Glow (Ellipse 169) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/Ellipse 169.webp"
          alt=""
          fill
          className="object-cover object-bottom opacity-90"
          unoptimized
        />
      </div>

      {/* Rectangle Vertical Columns (Frame 1321325422.webp) */}
      <div
        className="absolute inset-0 z-0 mix-blend-multiply opacity-100 pointer-events-none"
        style={{
          backgroundImage: 'url("/Frame 1321325422.webp")',
          backgroundRepeat: 'repeat-x',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center bottom',
        }}
        aria-hidden
      />

      {/* Noise Texture (Noise.webp) */}
      <div className="absolute inset-0 z-0 mix-blend-overlay opacity-50 pointer-events-none">
        <Image
          src="/Noise.webp"
          alt=""
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center md:px-10">
        <p className="mb-4 flex items-center justify-center text-xs font-semibold uppercase tracking-widest text-[#004D34]">
          <span className="mr-2 inline-block size-1.5 bg-[#004D34]" aria-hidden />
          GET STARTED
        </p>
        <h2 className="mb-10 text-3xl font-medium leading-tight tracking-tight text-zinc-900 md:text-5xl lg:text-[54px]">
          Talk to our team about
          <br />
          your next event
        </h2>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={openModal}
            className="inline-flex items-center gap-3 rounded-full bg-[#124b37] py-2.5 pl-2.5 pr-7 text-[15px] font-semibold text-white shadow-sm transition-all duration-300 ease-in-out hover:bg-[#1a5b44] active:scale-95 focus-visible:ring outline-none cursor-pointer"
          >
            <span className="flex size-8 items-center justify-center rounded-full bg-white text-[#004D34]">
              <DoubleChevronIcon />
            </span>
            <span>Book a demo</span>
          </button>
          <button
            type="button"
            onClick={openModal}
            className="inline-flex items-center justify-center rounded-full border border-[#3d6657] bg-[#537e6f]/65 px-7 py-3 text-[15px] font-semibold text-white shadow-xs backdrop-blur-xs transition-all duration-300 ease-in-out hover:bg-[#537e6f]/80 active:scale-95 focus-visible:ring outline-none cursor-pointer"
          >
            Talk to an expert
          </button>
        </div>
      </div>
      </section>
    </ScrollReveal>
  );
}
