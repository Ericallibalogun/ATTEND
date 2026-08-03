import Link from "next/link";
import Image from "next/image";

function DoubleChevronIcon() {
  return (
    <svg aria-hidden className="size-3.5 text-primary" viewBox="0 0 16 16" fill="none">
      <path d="M4 4l4 4-4 4M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FooterCta() {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-r from-white via-[#ebf4ef] to-[#a4ceb7] pt-14 lg:pt-20 pb-0 text-zinc-900">
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

      {/* Main Content Layout */}
      <div className="relative z-10 mx-auto w-full px-8 sm:px-12 lg:px-16">
        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Text + Badges */}
          <div className="flex flex-col items-start lg:col-span-7 pb-14 lg:pb-20 pt-2">
            <p className="mb-4 flex items-center text-xs font-semibold uppercase tracking-[-0.02em] text-primary">
              <span className="mr-2 inline-block size-1.5 bg-primary" aria-hidden />
              GET STARTED
            </p>
            <h2 className="mb-8 text-3xl font-medium leading-[1.15] tracking-tight text-zinc-900 sm:text-4xl lg:text-[44px] max-w-xl">
              Stay connected and in control across mobile or desktop, wherever you are.
            </h2>

            {/* Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Google Play */}
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 rounded-full border border-zinc-300/80 bg-white px-4.5 py-2 text-zinc-900 shadow-xs transition-opacity hover:opacity-90"
              >
                <svg className="size-5 shrink-0 text-zinc-900" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.99 1.99 0 0 1-.61-1.424V3.238c0-.545.22-1.042.609-1.424zM15.206 13.414l2.766-2.766-3.805-2.196-2.375 2.375 3.414 2.587zm3.83-3.83c.394.227.636.646.636 1.102 0 .456-.242.875-.636 1.102l-1.921 1.109-2.909-2.909 2.909-2.909 1.921 1.109zM3.609 22.186L13.792 12 11.206 9.414 3.609 22.186z" />
                </svg>
                <span className="flex flex-col text-left leading-none">
                  <span className="text-[8px] uppercase tracking-wider text-zinc-500 font-medium">GET IT ON</span>
                  <span className="text-[12px] font-semibold text-zinc-900">Google Play</span>
                </span>
              </Link>

              {/* App Store */}
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 rounded-full border border-zinc-300/80 bg-white px-4.5 py-2 text-zinc-900 shadow-xs transition-opacity hover:opacity-90"
              >
                <svg className="size-5 shrink-0 text-zinc-900" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.46c.64-.78 1.08-1.85.96-2.93-.93.04-2.07.62-2.74 1.4-.6.69-1.13 1.79-.98 2.86 1.05.08 2.12-.55 2.76-1.33z" />
                </svg>
                <span className="flex flex-col text-left leading-none">
                  <span className="text-[8px] uppercase tracking-wider text-zinc-500 font-medium">Download on the</span>
                  <span className="text-[12px] font-semibold text-zinc-900">App Store</span>
                </span>
              </Link>

              {/* Launch Web App */}
              <Link
                href="/about"
                className="inline-flex h-[42px] items-center gap-2.5 rounded-full border border-primary/40 bg-white px-5 text-sm font-semibold text-[#004D34] shadow-xs transition-opacity hover:opacity-90"
              >
                <span className="flex size-6 items-center justify-center rounded-full bg-primary/10">
                  <DoubleChevronIcon />
                </span>
                <span>Launch Web App</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Mobile App Mockups Image */}
          <div className="flex items-end justify-center lg:col-span-5 lg:justify-end pr-0 lg:pr-4">
            <div className="relative h-[340px] sm:h-[420px] lg:h-[465px] w-full max-w-[530px]">
              <Image
                src="/Group_6093.webp"
                alt="Attend mobile and desktop app experience"
                fill
                className="object-contain object-bottom drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
