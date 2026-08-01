import Link from "next/link";
import Image from "next/image";
import { FooterCta } from "@/components/layout/footer-cta";

function SectionOne() {
  return (
    <section
      className="bg-[#F8FBF9] py-8 lg:py-12"
      style={{ scrollMarginTop: "var(--home-header-height, 0px)" }}
    >
      <div
        className="mx-auto w-full px-6 lg:px-12"
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

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="flex flex-col bg-gradient-to-b from-[#f2f8f4] to-[#e4ede7] p-8 sm:p-10">
            <div className="mb-8">
              <svg className="size-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 3v18m9-9H3m15.364-6.364l-12.728 12.728m12.728 0L5.636 5.636" />
              </svg>
            </div>
            <h3 className="mb-3 text-lg font-medium text-zinc-900">
              Annual General Meetings (AGMs)
            </h3>
            <p className="mb-8 flex-1 text-[13px] leading-relaxed text-zinc-700">
              Attend is the virtual meetings platform behind AGMs, shareholder
              meetings, elections, conferences and product launches, one
              enterprise virtual events software stack where every participant
              can join.
            </p>
            <Link
              href="/agms"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:opacity-80"
            >
              Learn More
              <svg className="size-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l4 4-4 4M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col bg-gradient-to-b from-[#f2f8f4] to-[#e4ede7] p-8 sm:p-10">
            <div className="mb-8">
              <svg className="size-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 3L4 9l8 6 8-6-8-6zm0 12l-8-6v6l8 6 8-6v-6l-8 6z" />
              </svg>
            </div>
            <h3 className="mb-3 text-lg font-medium text-zinc-900">
              Innovation Challenge
            </h3>
            <p className="mb-8 flex-1 text-[13px] leading-relaxed text-zinc-700">
              Attend is the virtual hackathon platform and online challenges
              platform for running hackathons, innovation challenges and bounties
              end to end registration, team formation, submissions.
            </p>
            <Link
              href="/hackathons"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:opacity-80"
            >
              Learn More
              <svg className="size-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l4 4-4 4M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col bg-gradient-to-b from-[#f2f8f4] to-[#e4ede7] p-8 sm:p-10">
            <div className="mb-8">
              <svg className="size-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="mb-3 text-lg font-medium text-zinc-900">
              Launch Event
            </h3>
            <p className="mb-8 flex-1 text-[13px] leading-relaxed text-zinc-700">
              Attend is the virtual product launch platform that turns unveilings
              and brand moments into broadcast-quality events, with audience,
              press and partners all in the room, wherever they are, on a truly
              hybrid event platform.
            </p>
            <Link
              href="/product-launch"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:opacity-80"
            >
              Learn More
              <svg className="size-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l4 4-4 4M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTwo() {
  return (
    <section className="bg-white py-10 lg:py-16">
      <div className="mx-auto w-full px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24 xl:grid-cols-[1.5fr_1fr]">
          <div className="flex flex-col">
            <p className="mb-4 flex items-center text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="mr-2 inline-block size-1.5 bg-primary" aria-hidden />
              CONTACT US
            </p>
            <h2 className="mb-6 text-3xl font-medium leading-tight tracking-tight text-zinc-900 md:text-4xl lg:text-5xl">
              Let&apos;s help
              <br />
              you get started
            </h2>
            <p className="mb-12 max-w-md text-[15px] leading-relaxed text-zinc-600">
              Have questions or need support? Our team is here to help you plan,
              set up, and run your events seamlessly.
            </p>

            <div className="relative w-full max-w-2xl flex-1 xl:max-w-[800px]">
              <Image
                src="/collage.webp"
                alt="Event collage"
                width={800}
                height={800}
                style={{ width: "100%", height: "auto" }}
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="lg:pl-4">
            <div className="bg-[#849b96] p-6 sm:p-8">
              <div className="bg-white p-8 sm:p-10">
                <form className="flex flex-col gap-6">
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

                  <div className="grid gap-6 sm:grid-cols-2">
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
                      rows={4}
                      className="w-full resize-none rounded-2xl border border-black/5 bg-[#f3f6f4] p-5 text-[14px] text-zinc-900 outline-none focus:border-primary/30 focus:bg-white focus:ring-2 focus:ring-primary/10"
                    ></textarea>
                  </div>

                  <div className="mt-2 flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 rounded-full bg-primary py-2.5 pl-2.5 pr-8 text-[15px] font-medium text-white transition-opacity hover:opacity-90"
                    >
                      <span className="flex size-8 items-center justify-center rounded-full bg-white text-primary">
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
