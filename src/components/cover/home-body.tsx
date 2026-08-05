import Link from "next/link";
import Image from "next/image";
import { FooterCta } from "@/components/layout/footer-cta";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

function SectionOne() {
  return (
    <section
      className="bg-[#F8FBF9] py-16 lg:py-24"
      style={{ scrollMarginTop: "var(--home-header-height, 0px)" }}
    >
      <div
        className="mx-auto w-full px-6 lg:px-8 max-w-7xl"
      >
        <ScrollReveal>
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
        </ScrollReveal>

        <div className="mt-12 lg:mt-16 grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <ScrollReveal delay={0.1}>
          <div className="group flex flex-col bg-[#F4F9F6] p-6 sm:p-8 rounded-none border border-black/5 transition-all duration-300 hover:shadow-md hover:border-black/10 hover:-translate-y-1">
            <div className="mb-6 relative size-10">
              <Image src="/Brutalism 16.webp" alt="" fill sizes="40px" className="object-contain" />
            </div>
            <h3 className="mb-3 text-lg font-semibold text-zinc-900 group-hover:text-primary transition-colors">
              Annual General Meetings (AGMs)
            </h3>
            <p className="mb-8 flex-1 text-[13px] leading-relaxed text-zinc-600">
              Attend is the virtual meetings platform behind AGMs, shareholder meetings, elections, conferences and product launches, one enterprise virtual events software stack where every participant can join.
            </p>
            <Link
              href="/agms"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#004D34] transition-all hover:opacity-80 active:scale-95 focus-visible:ring outline-none rounded"
            >
              Learn More
              <svg className="size-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l4 4-4 4M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
          </ScrollReveal>

          {/* Card 2 */}
          <ScrollReveal delay={0.2}>
          <div className="group flex flex-col bg-[#F4F9F6] p-6 sm:p-8 rounded-none border border-black/5 transition-all duration-300 hover:shadow-md hover:border-black/10 hover:-translate-y-1">
            <div className="mb-6 relative size-10">
              <Image src="/Brutalism 74.webp" alt="" fill sizes="40px" className="object-contain" />
            </div>
            <h3 className="mb-3 text-lg font-semibold text-zinc-900 group-hover:text-primary transition-colors">
              Innovation Challenge
            </h3>
            <p className="mb-8 flex-1 text-[13px] leading-relaxed text-zinc-600">
              Attend is the virtual hackathon platform and online challenges platform for running hackathons, innovation challenges and bounties end to end registration, team formation, submissions.
            </p>
            <Link
              href="/hackathons"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#004D34] transition-all hover:opacity-80 active:scale-95 focus-visible:ring outline-none rounded"
            >
              Learn More
              <svg className="size-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l4 4-4 4M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
          </ScrollReveal>

          {/* Card 3 */}
          <ScrollReveal delay={0.3}>
          <div className="group flex flex-col bg-[#F4F9F6] p-6 sm:p-8 rounded-none border border-black/5 transition-all duration-300 hover:shadow-md hover:border-black/10 hover:-translate-y-1">
            <div className="mb-6 relative size-10">
              <Image src="/data-check-double_1.webp" alt="" fill sizes="40px" className="object-contain" />
            </div>
            <h3 className="mb-3 text-lg font-semibold text-zinc-900 group-hover:text-primary transition-colors">
              Product Launches
            </h3>
            <p className="mb-8 flex-1 text-[13px] leading-relaxed text-zinc-600">
              Attend is the virtual product launch platform that turns unveilings and brand moments into broadcast-quality events, with audience, press and partners all in the room, wherever they are, on a truly hybrid event platform.
            </p>
            <Link
              href="/product-launch"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#004D34] transition-all hover:opacity-80 active:scale-95 focus-visible:ring outline-none rounded"
            >
              Learn More
              <svg className="size-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l4 4-4 4M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function SectionTwo() {
  return (
    <section className="bg-white py-12 lg:py-20">
      <ScrollReveal yOffset={60}>
        <div className="mx-auto w-full px-6 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-stretch">
          {/* Left Column: Text + Image matching form height */}
          <div className="flex flex-col items-start lg:col-span-5 h-full">
            <p className="mb-3 flex items-center text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="mr-2 inline-block size-1.5 bg-primary" aria-hidden />
              CONTACT US
            </p>
            <h2 className="mb-3 text-3xl font-medium leading-tight tracking-tight text-zinc-900 md:text-4xl lg:text-[40px]">
              Let&apos;s help
              <br />
              you get started
            </h2>
            <p className="mb-6 max-w-sm text-[14px] leading-relaxed text-zinc-600">
              Have questions or need support? Our team is here to help you plan,
              set up, and run your events seamlessly.
            </p>

            <div className="relative w-full flex-1 min-h-[260px] sm:min-h-[360px] lg:min-h-[460px] overflow-hidden rounded-lg">
              <Image
                src="/collage.webp"
                alt="Event collage"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Right Column: Properly Proportioned Form */}
          <div className="lg:col-span-7 flex justify-start lg:justify-end h-full">
            <div className="w-full max-w-[660px] bg-[#849b96] p-6 sm:p-8 flex flex-col justify-center">
              <div className="bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
                <form className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="fullName" className="mb-2 block text-[13px] font-medium text-zinc-900">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      className="w-full rounded-full border border-black/5 bg-[#f3f6f4] px-5 py-3.5 text-[14px] text-zinc-900 outline-none focus:border-primary/30 focus:bg-white focus:ring-2 focus:ring-primary/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-[13px] font-medium text-zinc-900">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-full border border-black/5 bg-[#f3f6f4] px-5 py-3.5 text-[14px] text-zinc-900 outline-none focus:border-primary/30 focus:bg-white focus:ring-2 focus:ring-primary/10"
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-[13px] font-medium text-zinc-900">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full rounded-full border border-black/5 bg-[#f3f6f4] px-5 py-3.5 text-[14px] text-zinc-900 outline-none focus:border-primary/30 focus:bg-white focus:ring-2 focus:ring-primary/10"
                      />
                    </div>
                    <div>
                      <label htmlFor="org" className="mb-2 block text-[13px] font-medium text-zinc-900">
                        Organization
                      </label>
                      <input
                        type="text"
                        id="org"
                        className="w-full rounded-full border border-black/5 bg-[#f3f6f4] px-5 py-3.5 text-[14px] text-zinc-900 outline-none focus:border-primary/30 focus:bg-white focus:ring-2 focus:ring-primary/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="intent" className="mb-2 block text-[13px] font-medium text-zinc-900">
                      What do you want to do?
                    </label>
                    <div className="relative">
                      <select
                        id="intent"
                        className="w-full appearance-none rounded-full border border-black/5 bg-[#f3f6f4] px-5 py-3.5 text-[14px] text-zinc-500 outline-none focus:border-primary/30 focus:bg-white focus:ring-2 focus:ring-primary/10"
                      >
                        <option value="">Select option</option>
                        <option>I want to host an Annual General Meeting</option>
                        <option>I want to join an Annual General Meeting</option>
                        <option>I want to setup an Innovation Challenge</option>
                        <option>I want to participate in an Innovation Challenge</option>
                        <option>I want to launch a new Product</option>
                        <option>Others</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-zinc-500">
                        <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="info" className="mb-2 block text-[13px] font-medium text-zinc-900">
                      Additional info
                    </label>
                    <textarea
                      id="info"
                      rows={3}
                      className="w-full resize-none rounded-2xl border border-black/5 bg-[#f3f6f4] p-4 text-[14px] text-zinc-900 outline-none focus:border-primary/30 focus:bg-white focus:ring-2 focus:ring-primary/10"
                    ></textarea>
                  </div>

                  <div className="mt-1 flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 rounded-full bg-primary py-2.5 pl-2.5 pr-7 text-[14px] font-medium text-white transition-opacity hover:opacity-90 shadow-sm"
                    >
                      <span className="flex size-7 items-center justify-center rounded-full bg-white text-primary">
                        <svg className="size-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4l4 4-4 4M9 4l4 4-4 4" />
                        </svg>
                      </span>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}

// SectionThree (CTA Banner) was extracted to FooterCta

export function HomeBody() {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <FooterCta />
    </>
  );
}
