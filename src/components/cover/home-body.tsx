import Link from "next/link";
import Image from "next/image";
import { FooterCta } from "@/components/layout/footer-cta";
import { ContactUsForm } from "@/components/layout/contact-us-form";

// ... SectionOne content ...

function SectionOne() {
  return (
    <section
      className="bg-[#F8FBF9] py-8 lg:py-12"
      style={{ scrollMarginTop: "var(--home-header-height, 0px)" }}
    >
      <div
        className="mx-auto w-full px-6 lg:px-8"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <p className="mb-4 flex items-center text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="mr-2 inline-block size-1.5 bg-primary" aria-hidden />
              ABOUT ATTEND
            </p>
            <h2 className="text-3xl font-medium leading-tight tracking-tight text-zinc-900 md:text-4xl lg:text-5xl">
              One Platform for your
              <br />
              Events and Innovation Challenges
            </h2>
          </div>
          <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-zinc-600 lg:mt-10 lg:text-right">
            Secure, Social, Interactive. Attend powers shareholder meetings,
            investor events, product launches, hackathons, conferences, and
            hybrid experiences where every participant can engage with
            confidence.
          </p>
        </div>

        <div className="mt-12 lg:mt-16 grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="flex flex-col bg-[#F4F9F6] p-6 sm:p-8 rounded-none border border-black/5">
            <div className="mb-6 relative size-10">
              <Image src="/Brutalism 16.webp" alt="" fill className="object-contain" />
            </div>
            <h3 className="mb-3 text-lg font-semibold text-zinc-900">
              Annual General Meetings (AGMs)
            </h3>
            <p className="mb-8 flex-1 text-[13px] leading-relaxed text-zinc-600">
              Attend is the virtual meetings platform behind AGMs, shareholder meetings, elections, conferences and product launches, one enterprise virtual events software stack where every participant can join.
            </p>
            <Link
              href="/agms"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#004D34] hover:opacity-80"
            >
              Learn More
              <svg className="size-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l4 4-4 4M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col bg-[#F4F9F6] p-6 sm:p-8 rounded-none border border-black/5">
            <div className="mb-6 relative size-10">
              <Image src="/Brutalism 74.webp" alt="" fill className="object-contain" />
            </div>
            <h3 className="mb-3 text-lg font-semibold text-zinc-900">
              Innovation Challenge
            </h3>
            <p className="mb-8 flex-1 text-[13px] leading-relaxed text-zinc-600">
              Attend is the virtual hackathon platform and online challenges platform for running hackathons, innovation challenges and bounties end to end registration, team formation, submissions.
            </p>
            <Link
              href="/hackathons"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#004D34] hover:opacity-80"
            >
              Learn More
              <svg className="size-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l4 4-4 4M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col bg-[#F4F9F6] p-6 sm:p-8 rounded-none border border-black/5">
            <div className="mb-6 relative size-10">
              <Image src="/data-check-double_1.webp" alt="" fill className="object-contain" />
            </div>
            <h3 className="mb-3 text-lg font-semibold text-zinc-900">
              Product Launches
            </h3>
            <p className="mb-8 flex-1 text-[13px] leading-relaxed text-zinc-600">
              Attend is the virtual product launch platform that turns unveilings and brand moments into broadcast-quality events, with audience, press and partners all in the room, wherever they are, on a truly hybrid event platform.
            </p>
            <Link
              href="/product-launch"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#004D34] hover:opacity-80"
            >
              Learn More
              <svg className="size-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l4 4-4 4M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeBody() {
  return (
    <>
      <SectionOne />
      <ContactUsForm />
      <FooterCta />
    </>
  );
}
