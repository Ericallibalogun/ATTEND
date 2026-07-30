import Link from "next/link";
import Image from "next/image";

export function FooterCta() {
  return (
    <section className="relative flex min-h-[500px] flex-col items-center justify-center overflow-hidden py-24 lg:py-32">
      {/* Base Background Color */}
      <div className="absolute inset-0 bg-[#f8fbf9]" />

      {/* Green Glow (Ellipse) pushed to the very back */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Ellipse 169.webp"
          alt=""
          fill
          className="object-cover object-bottom opacity-90"
          unoptimized
        />
      </div>

      {/* Lines (Rectangle) on top of the ellipse, set to multiply so the solid background becomes transparent */}
      <div
        className="absolute inset-0 z-0 opacity-100 mix-blend-multiply"
        style={{
          backgroundImage: 'url("/Rectangle 229.webp")',
          backgroundRepeat: 'repeat-x',
          backgroundSize: 'auto 100%',
        }}
      />

      {/* Noise Texture */}
      <div className="absolute inset-0 z-0 mix-blend-overlay opacity-50">
        <Image
          src="/Noise.webp"
          alt=""
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center md:px-10">
        <p className="mb-4 flex items-center justify-center text-xs font-semibold uppercase tracking-widest text-primary">
          <span className="mr-2 inline-block size-1.5 bg-primary" aria-hidden />
          GET STARTED
        </p>
        <h2 className="mb-10 text-3xl font-medium leading-tight tracking-tight text-zinc-900 md:text-5xl">
          Talk to our team about
          <br />
          your next event
        </h2>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/about"
            className="inline-flex items-center gap-3 rounded-full bg-primary py-2.5 pl-2.5 pr-8 text-[15px] font-medium text-white transition-opacity hover:opacity-90"
          >
            <span className="flex size-8 items-center justify-center rounded-full bg-white text-primary">
              <svg className="size-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l4 4-4 4M9 4l4 4-4 4" />
              </svg>
            </span>
            Book a demo
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full border border-black/10 bg-[#8dae9d]/80 px-8 py-3.5 text-[15px] font-medium text-white backdrop-blur-sm transition-colors hover:bg-[#7d9e8d]/90"
          >
            Talk to an expert
          </Link>
        </div>
      </div>
    </section>
  );
}
