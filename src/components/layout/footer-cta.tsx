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
      <section className="relative w-full overflow-hidden bg-[#0A2518] px-3 pb-0 pt-4 text-zinc-900 sm:px-6 sm:pt-8 lg:px-12 lg:pt-16">
        {/* Dark Green Background Texture */}
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
        <div className="relative z-10 mx-auto w-full overflow-hidden">
          {/* Mobile Background */}
          <div className="absolute inset-0 z-0 sm:hidden pointer-events-none">
            <Image
              src="/CTA_BG_MOBILE.webp"
              alt=""
              fill
              className="object-cover object-center"
              priority
              quality={100}
            />
          </div>
          {/* Desktop Background */}
          <div className="absolute inset-0 z-0 hidden sm:block pointer-events-none">
            <Image
              src="/CTA_BG_DESKTOP.webp"
              alt=""
              fill
              className="object-cover object-center"
              priority
              quality={100}
            />
          </div>

          {/* Main Content Layout */}
          <div className="relative z-10 mx-auto w-full px-4 sm:px-8 lg:px-16 pt-12 pb-0 sm:pt-20 sm:pb-0">
            <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-2">
              <div className="flex flex-col items-start pb-8 lg:col-span-6 lg:pb-24">
                <p className="mb-2.5 flex items-center text-xs font-semibold uppercase tracking-[-0.02em] text-[#004D34] sm:mb-3.5">
                  <span
                    className="mr-2 inline-block size-1.5 bg-[#004D34]"
                    aria-hidden
                  />
                  GET STARTED
                </p>
                <h2 className="mb-6 max-w-none text-[2rem] font-semibold leading-[1.1] tracking-tight text-zinc-900 sm:mb-8 sm:text-4xl md:text-5xl lg:text-[52px]">
                Stay connected and <br className="hidden sm:block" />
                in control across mobile or <br className="hidden sm:block" />
                desktop, wherever you are.
              </h2>

                <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                  <div className="grid w-full grid-cols-2 gap-2.5 sm:contents">
                    <Link
                      href="/about"
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#004D34] bg-white px-3 text-zinc-900 shadow-xs transition-opacity hover:opacity-90 sm:h-14 sm:justify-start sm:gap-2.5 sm:px-6"
                    >
                      <Image
                        src="/Google Play logo.webp"
                        alt="Google Play"
                        width={24}
                        height={24}
                        className="size-5 shrink-0 object-contain sm:size-6"
                      />
                      <span className="flex flex-col text-left leading-none">
                        <span className="text-[8px] font-medium uppercase tracking-wider text-zinc-600 sm:text-[9px]">
                          GET IT ON
                        </span>
                        <span className="text-[12px] font-semibold text-zinc-900 sm:text-[14px] mt-0.5">
                          Google Play
                        </span>
                      </span>
                    </Link>

                    <Link
                      href="/about"
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#004D34] bg-white px-3 text-zinc-900 shadow-xs transition-opacity hover:opacity-90 sm:h-14 sm:justify-start sm:gap-2.5 sm:px-6"
                    >
                      <Image
                        src="/Apple logo.webp"
                        alt="App Store"
                        width={24}
                        height={24}
                        className="size-5 shrink-0 object-contain sm:size-6"
                      />
                      <span className="flex flex-col text-left leading-none">
                        <span className="text-[8px] font-medium uppercase tracking-wider text-zinc-600 sm:text-[9px]">
                          Download on the
                        </span>
                        <span className="text-[12px] font-semibold text-zinc-900 sm:text-[14px] mt-0.5">
                          App Store
                        </span>
                      </span>
                    </Link>
                  </div>

                  <Link
                    href="https://app.experienceattend.com"
                    className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-full border border-[#004D34] bg-white pl-2 pr-6 text-[14px] font-semibold text-[#004D34] shadow-xs transition-opacity hover:opacity-90 sm:h-14 sm:w-auto sm:justify-start sm:text-[16px]"
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#004D34] text-white sm:size-10">
                      <DoubleChevronIcon />
                    </span>
                    <span>Launch Web App</span>
                  </Link>
                </div>
              </div>

              <div className="flex items-end justify-center lg:col-span-6 lg:justify-end">
                <div className="relative w-full h-[280px] sm:h-[400px] lg:h-[500px]">
                  <Image
                    src="/Group_6099.webp"
                    alt="Attend mobile and desktop app experience"
                    fill
                    className="object-contain object-bottom sm:object-right-bottom"
                    priority
                    quality={100}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
