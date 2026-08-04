import Link from "next/link";
import Image from "next/image";

function DoubleChevronIcon() {
  return (
    <svg aria-hidden className="size-3.5 text-white" viewBox="0 0 16 16" fill="none">
      <path d="M4 4l4 4-4 4M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FooterCta() {
  return (
    <section className="relative w-full overflow-hidden bg-primary px-4 sm:px-6 lg:px-12 pt-6 sm:pt-8 lg:pt-12 pb-0 text-zinc-900">
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

        {/* Main Content Layout */}
        <div className="relative z-10 grid items-end gap-6 lg:grid-cols-12 lg:gap-4">
          {/* Left Column: Text + Badges */}
          <div className="flex flex-col items-start lg:col-span-7 p-6 sm:p-10 lg:py-14 lg:pl-14 lg:pr-4">
            <p className="mb-3 flex items-center text-xs font-semibold uppercase tracking-[-0.02em] text-[#004D34]">
              <span className="mr-2 inline-block size-1.5 bg-[#004D34]" aria-hidden />
              GET STARTED
            </p>
            <h2 className="mb-6 text-2xl font-semibold leading-[1.2] tracking-tight text-zinc-900 sm:text-4xl lg:text-[42px] max-w-xl">
              Stay connected and in control across mobile or desktop, wherever you are.
            </h2>

            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Google Play */}
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 rounded-full border border-zinc-300/80 bg-white px-4.5 py-2.5 text-zinc-900 shadow-xs transition-opacity hover:opacity-90 justify-center sm:justify-start"
              >
                <Image
                  src="/Google Play logo.webp"
                  alt="Google Play"
                  width={20}
                  height={20}
                  className="size-5 shrink-0 object-contain"
                />
                <span className="flex flex-col text-left leading-none">
                  <span className="text-[8px] uppercase tracking-wider text-zinc-500 font-medium">GET IT ON</span>
                  <span className="text-[12px] font-semibold text-zinc-900">Google Play</span>
                </span>
              </Link>

              {/* App Store */}
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 rounded-full border border-zinc-300/80 bg-white px-4.5 py-2.5 text-zinc-900 shadow-xs transition-opacity hover:opacity-90 justify-center sm:justify-start"
              >
                <Image
                  src="/Apple logo.webp"
                  alt="App Store"
                  width={20}
                  height={20}
                  className="size-5 shrink-0 object-contain"
                />
                <span className="flex flex-col text-left leading-none">
                  <span className="text-[8px] uppercase tracking-wider text-zinc-500 font-medium">Download on the</span>
                  <span className="text-[12px] font-semibold text-zinc-900">App Store</span>
                </span>
              </Link>

              {/* Launch Web App */}
              <Link
                href="/about"
                className="inline-flex items-center gap-3 rounded-full border border-[#004D34] bg-white py-2 pl-2 pr-6 text-[15px] font-semibold text-[#004D34] shadow-xs transition-opacity hover:opacity-90 justify-center sm:justify-start"
              >
                <span className="flex size-8 items-center justify-center rounded-full bg-[#004D34] text-white">
                  <DoubleChevronIcon />
                </span>
                <span>Launch Web App</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Mobile App Mockups Image */}
          <div className="flex items-end justify-center lg:col-span-5 lg:justify-start lg:-ml-6 px-4 lg:px-0 lg:pr-4">
            <div className="relative h-[240px] sm:h-[340px] lg:h-[440px] w-full max-w-[480px]">
              <Image
                src="/Group_6093.webp"
                alt="Attend mobile and desktop app experience"
                fill
                className="object-contain object-bottom drop-shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
