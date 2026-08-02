import Image from "next/image";

export function LaunchMomentum() {
  return (
    <section className="bg-white py-16 lg:py-24 text-zinc-900">
      <div className="w-full px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 max-w-4xl">
          <p className="mb-4 flex items-center text-[11px] font-semibold uppercase tracking-widest text-[#004D34]">
            <span className="mr-2 inline-block size-1.5 bg-[#004D34]" aria-hidden />
            POST-EVENT ANALYTICS
          </p>
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] items-start">
            <h2 className="text-3xl font-medium leading-tight tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
              The launch ends. The momentum shouldn’t.
            </h2>
            <p className="text-[14.5px] leading-relaxed text-zinc-600">
              Radically clear reports on guest attendance, video watch time, top-asked questions and attendee engagement scores give your marketing and sales team the exact signals they need to follow up with precision.
            </p>
          </div>
        </div>

        {/* Large Hardware & Analytics Showcase Image */}
        <div className="relative h-[360px] sm:h-[520px] lg:h-[680px] w-full overflow-hidden bg-zinc-900 shadow-2xl">
          <Image
            src="/3a18b6d36eead1a8f298c36a398284fd06d5b1c0.png"
            alt="Broadcast stage camera and lights"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
