import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

function DoubleChevronIcon() {
  return (
    <svg aria-hidden className="size-3.5 text-white" viewBox="0 0 16 16" fill="none">
      <path d="M4 4l4 4-4 4M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FooterCta() {
  return (
    <ScrollReveal yOffset={60}>
      <section className="relative w-full overflow-hidden bg-primary px-3 pb-0 pt-4 text-zinc-900 sm:px-6 sm:pt-8 lg:px-12 lg:pt-12">
      {/* Dark Green Background Texture (Rectangle 14 (1).webp) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/Rectangle 14 (1).webp"
          alt=""
          fill
          className="object-cover object-center"
          quality={100}
        />
      </div>

      {/* Inner Banner Card */}
      <div className="relative z-10 mx-auto w-full overflow-hidden bg-linear-to-r from-white via-[#ebf4ef] to-[#cbe2d5]">
        {/* Vertical Column Stripe Grid (Frame 1321325422.webp) */}
        <div
          className="absolute inset-0 z-0 opacity-45 mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage: 'url("/Frame 1321325422.webp")',
            backgroundRepeat: 'repeat-x',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center bottom',
          }}
          aria-hidden
        />

        {/* Green Glow (Ellipse 169) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/Ellipse 169.webp"
            alt=""
            fill
            className="object-cover object-right-bottom opacity-85"
            unoptimized
          />
        </div>

        {/* Noise Grain Overlay (Noise.webp) */}
        <div className="absolute inset-0 z-0 mix-blend-overlay opacity-40 pointer-events-none">
          <Image
            src="/Noise.webp"
            alt=""
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Main Content Layout — mobile: tight stack text → buttons → mockups */}
        <div className="relative z-10 grid items-end gap-0 lg:grid-cols-12 lg:gap-2">
          <div className="flex flex-col items-start px-5 pb-2 pt-5 sm:p-10 lg:col-span-6 lg:py-16 lg:pl-16 lg:pr-4">
            <p className="mb-2.5 flex items-center text-xs font-semibold uppercase tracking-[-0.02em] text-[#004D34] sm:mb-3.5">
              <span
                className="mr-2 inline-block size-1.5 bg-[#004D34]"
                aria-hidden
              />
              GET STARTED
            </p>
            <h2 className="mb-4 max-w-xl whitespace-pre-line text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-zinc-900 sm:mb-8 sm:text-4xl lg:text-[44px]">
              {"Stay connected\nwherever you are"}
            </h2>

            <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <div className="grid w-full grid-cols-2 gap-2.5 sm:contents">
                <Link
                  href="/about"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[#004D34] bg-white px-3 text-zinc-900 shadow-xs transition-opacity hover:opacity-90 sm:h-12 sm:justify-start sm:gap-2.5 sm:px-5"
                >
                  <Image
                    src="/Google Play logo.webp"
                    alt="Google Play"
                    width={22}
                    height={22}
                    className="size-5 shrink-0 object-contain sm:size-5.5"
                  />
                  <span className="flex flex-col text-left leading-none">
                    <span className="text-[7.5px] font-medium uppercase tracking-wider text-zinc-600 sm:text-[8.5px]">
                      GET IT ON
                    </span>
                    <span className="text-[11px] font-semibold text-zinc-900 sm:text-[13px]">
                      Google Play
                    </span>
                  </span>
                </Link>

                <Link
                  href="/about"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[#004D34] bg-white px-3 text-zinc-900 shadow-xs transition-opacity hover:opacity-90 sm:h-12 sm:justify-start sm:gap-2.5 sm:px-5"
                >
                  <Image
                    src="/Apple logo.webp"
                    alt="App Store"
                    width={22}
                    height={22}
                    className="size-5 shrink-0 object-contain sm:size-5.5"
                  />
                  <span className="flex flex-col text-left leading-none">
                    <span className="text-[7.5px] font-medium uppercase tracking-wider text-zinc-600 sm:text-[8.5px]">
                      Download on the
                    </span>
                    <span className="text-[11px] font-semibold text-zinc-900 sm:text-[13px]">
                      App Store
                    </span>
                  </span>
                </Link>
              </div>

              <Link
                href="/about"
                className="inline-flex h-11 w-full items-center justify-center gap-3 rounded-full border border-[#004D34] bg-white pl-2 pr-6 text-[14px] font-semibold text-[#004D34] shadow-xs transition-opacity hover:opacity-90 sm:h-12 sm:w-auto sm:justify-start sm:text-[15px]"
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#004D34] text-white sm:size-8">
                  <DoubleChevronIcon />
                </span>
                <span>Launch Web App</span>
              </Link>
            </div>
          </div>

          <div className="flex items-end justify-center lg:col-span-6 lg:justify-end">
            <div className="relative -mt-1 h-[260px] w-full sm:mt-0 sm:h-[400px] sm:max-w-[620px] lg:h-[600px] lg:max-w-[840px]">
              <Image
                src="/svg_vector_2026-08-03.webp"
                alt="Attend mobile and desktop app experience"
                fill
                className="scale-[1.08] object-contain object-bottom drop-shadow-xl sm:scale-100 sm:object-right-bottom"
                priority
                quality={100}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 560px, 840px"
              />
            </div>
          </div>
        </div>
      </div>
      </section>
    </ScrollReveal>
  );
}
