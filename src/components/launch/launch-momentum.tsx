import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function LaunchMomentum() {
  return (
    <section className="bg-white py-10 text-zinc-900 sm:py-16 lg:py-24">
      <ScrollReveal yOffset={60}>
        <div className="section-x w-full">
          <div className="mb-8 w-full sm:mb-12">
            <p className="mb-3 flex items-center text-[11px] font-semibold uppercase tracking-widest text-[#004D34] sm:mb-4">
              <span
                className="mr-2 inline-block size-1.5 bg-[#004D34]"
                aria-hidden
              />
              POST-EVENT ANALYTICS
            </p>
            <div className="grid items-start gap-4 lg:grid-cols-12 lg:gap-12">
              <h2 className="text-[1.75rem] font-medium leading-tight tracking-tight text-zinc-900 sm:text-3xl md:text-4xl lg:col-span-6 lg:text-5xl">
                The launch ends. The
                <br />
                <span className="sm:whitespace-nowrap">
                  momentum shouldn&apos;t.
                </span>
              </h2>
              <p className="text-[13.5px] leading-relaxed text-zinc-600 sm:text-[14.5px] lg:col-span-5 lg:col-start-8">
                Radically clear reports on guest attendance, video watch time,
                top-asked questions and attendee engagement scores give your
                marketing and sales team the exact signals they need to follow
                up with precision.
              </p>
            </div>
          </div>

          <div className="relative h-[220px] w-full overflow-hidden bg-zinc-900 shadow-2xl sm:h-[520px] lg:h-[680px]">
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
