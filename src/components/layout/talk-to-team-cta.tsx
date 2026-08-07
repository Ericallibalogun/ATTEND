"use client";

import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useBookDemoModal } from "@/components/layout/book-demo-modal";

function DoubleChevronIcon() {
  return (
    <svg
      aria-hidden
      className="size-3.5 text-[#004D34]"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M4 4l4 4-4 4M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TalkToTeamCta() {
  const { openModal } = useBookDemoModal();

  return (
    <ScrollReveal yOffset={40}>
      <section className="relative w-full overflow-hidden px-4 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-16">
        <div className="relative overflow-hidden bg-linear-to-r from-white via-[#ebf4ef] to-[#cbe2d5] px-5 py-10 text-center sm:px-10 sm:py-14 lg:py-16">
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-45 mix-blend-multiply"
            style={{
              backgroundImage: 'url("/Frame 1321325422.webp")',
              backgroundRepeat: "repeat-x",
              backgroundSize: "100% 100%",
              backgroundPosition: "center bottom",
            }}
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 z-0">
            <Image
              src="/Ellipse 169.webp"
              alt=""
              fill
              className="object-cover object-right-bottom opacity-70"
              unoptimized
            />
          </div>
          <div className="pointer-events-none absolute inset-0 z-0 mix-blend-overlay opacity-40">
            <Image
              src="/Noise.webp"
              alt=""
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center">
            <p className="mb-3 flex items-center text-[11px] font-semibold uppercase tracking-widest text-[#004D34] sm:mb-4">
              <span
                className="mr-2 inline-block size-1.5 bg-[#004D34]"
                aria-hidden
              />
              GET STARTED
            </p>
            <h2 className="mb-6 max-w-xl text-[1.65rem] font-semibold leading-[1.2] tracking-tight text-zinc-900 sm:mb-8 sm:text-3xl lg:text-4xl">
              Talk to our team about
              <br />
              your next event
            </h2>

            <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              {/* Book a demo removed — Talk to an expert is primary */}
              <button
                type="button"
                onClick={openModal}
                className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-full bg-[#004D34] pl-2 pr-6 text-[14px] font-medium text-white transition-opacity hover:opacity-90 sm:h-[52px] sm:w-auto sm:justify-start sm:pr-7 sm:text-[15px]"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white sm:size-[38px]">
                  <DoubleChevronIcon />
                </span>
                <span>Talk to an expert</span>
              </button>

              <Link
                href="/about"
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-[#004D34]/40 bg-white/40 px-6 text-[14px] font-medium text-[#004D34] backdrop-blur-sm transition-colors hover:bg-white/60 sm:h-[52px] sm:w-auto sm:px-7 sm:text-[15px]"
              >
                Launch Web App
              </Link>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
