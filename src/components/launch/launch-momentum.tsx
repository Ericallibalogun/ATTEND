import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function LaunchMomentum() {
  return (
    <section className="bg-white py-16 lg:py-24 text-zinc-900">
      <ScrollReveal yOffset={60}>
        <div className="w-full px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 w-full">
          <p className="mb-4 flex items-center text-[11px] font-semibold uppercase tracking-widest text-[#004D34]">
            <span className="mr-2 inline-block size-1.5 bg-[#004D34]" aria-hidden />
            POST-EVENT ANALYTICS
          </p>
          <div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-12">
            <h2 className="text-3xl font-medium leading-tight tracking-tight text-zinc-900 sm:text-4xl lg:col-span-6 lg:text-5xl">
              The launch ends. The
              <br />
              <span className="whitespace-nowrap">momentum shouldn&apos;t.</span>
            </h2>
            <p className="text-[14.5px] leading-relaxed text-zinc-600 lg:col-span-5 lg:col-start-8">
              Radically clear reports on guest attendance, video watch time,
              top-asked questions and attendee engagement scores give your
              marketing and sales team the exact signals they need to follow up
              with precision.
            </p>
          </div>
        </div>

        {/* Large Hardware & Analytics Showcase Image */}
        <div className="relative h-[360px] sm:h-[520px] lg:h-[680px] w-full overflow-hidden bg-zinc-900 shadow-2xl">
          <Image
            src="/3a18b6d36eead1a8f298c36a398284fd06d5b1c0.webp"
            alt="Broadcast stage camera and lights"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
          />
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
