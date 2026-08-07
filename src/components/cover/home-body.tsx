import Link from "next/link";
import Image from "next/image";
import { FooterCta } from "@/components/layout/footer-cta";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const aboutCards = [
  {
    icon: "/Brutalism 16.webp",
    title: "Annual General Meetings (AGMs)",
    description:
      "Attend is the virtual meetings platform behind AGMs, shareholder meetings, elections, conferences and product launches, one enterprise virtual events software stack where every participant can join.",
    href: "/agms",
  },
  {
    icon: "/Brutalism 74.webp",
    title: "Innovation Challenge",
    description:
      "Attend is the virtual hackathon platform and online challenges platform for running hackathons, innovation challenges and bounties end to end registration, team formation, submissions.",
    href: "/hackathons",
  },
  {
    icon: "/data-check-double_1.webp",
    title: "Launch Event",
    description:
      "Attend is the virtual product launch platform that turns unveilings and brand moments into broadcast-quality events, with audience, press and partners all in the room, wherever they are, on a truly hybrid event platform.",
    href: "/product-launch",
  },
] as const;

function LearnMoreLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1 text-[13px] font-semibold text-[#1E392A] transition-opacity hover:opacity-75"
    >
      Learn More
      <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
        &gt;&gt;
      </span>
    </Link>
  );
}

function SectionOne() {
  return (
    <section
      className="bg-white"
      style={{ scrollMarginTop: "var(--home-header-height, 0px)" }}
    >
      <div className="w-full px-4 pb-12 pt-6 sm:px-8 sm:pb-16 sm:pt-8 lg:px-16 lg:pb-24 lg:pt-10">
        <div className="w-full bg-[#EFF5F3] p-5 sm:p-10 lg:p-16">
          <ScrollReveal>
            <div className="grid gap-5 lg:grid-cols-12 lg:items-start lg:gap-12">
              <div className="lg:col-span-7">
                <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1E392A] sm:mb-5">
                  <span
                    className="inline-block size-1.5 shrink-0 rounded-full bg-[#1E392A]"
                    aria-hidden
                  />
                  ABOUT ATTEND
                </p>
                <h2 className="max-w-[640px] text-[1.75rem] font-normal leading-[1.15] tracking-[-0.03em] text-[#1A1A1A] sm:text-[2.5rem] lg:text-[3.25rem]">
                  One Platform for your Events and Innovation Challenges
                </h2>
              </div>

              <div className="flex items-start lg:col-span-5 lg:pt-10">
                <p className="max-w-[360px] text-[14px] leading-[1.7] text-[#4A4A4A] sm:text-[15px] sm:leading-[1.75] lg:ml-auto lg:text-right">
                  Secure. Social. Interactive. Attend powers shareholder
                  meetings, investor events, product launches, hackathons,
                  conferences, and hybrid experiences where every participant
                  can engage with confidence.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Mobile: stacked with hairline borders; desktop: joined 3-col */}
          <div className="mt-8 overflow-hidden border border-[#d7e5df] sm:mt-12 lg:mt-16 lg:border-0">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {aboutCards.map((card, idx) => (
                <article
                  key={card.title}
                  className={`flex min-h-0 flex-col p-6 sm:min-h-[340px] sm:p-8 lg:min-h-[380px] lg:p-10 ${
                    idx < aboutCards.length - 1
                      ? "border-b border-[#d7e5df] md:border-b-0"
                      : ""
                  } ${
                    idx % 3 !== 2 ? "md:border-r md:border-[#d7e5df]" : ""
                  }`}
                  style={{
                    background:
                      "radial-gradient(120% 90% at 0% 100%, #E2EEEA 0%, #F7FFFC 42%, #FFFFFF 72%)",
                  }}
                >
                  <Image
                    src={card.icon}
                    alt=""
                    width={28}
                    height={28}
                    className="mb-5 size-7 object-contain object-left sm:mb-8"
                  />

                  <h3 className="mb-3 text-[16px] font-semibold leading-snug text-[#1A1A1A] sm:mb-4 sm:text-[17px]">
                    {card.title}
                  </h3>

                  <p className="mb-6 flex-1 text-[13px] leading-[1.65] text-[#4A4A4A] sm:mb-10 sm:text-[13.5px] sm:leading-[1.7]">
                    {card.description}
                  </p>

                  <LearnMoreLink href={card.href} />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTwo() {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-20">
      <ScrollReveal yOffset={60}>
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-12">
          <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="flex h-full flex-col items-start lg:col-span-5">
              <p className="mb-3 flex items-center text-xs font-semibold uppercase tracking-widest text-primary">
                <span
                  className="mr-2 inline-block size-1.5 bg-primary"
                  aria-hidden
                />
                CONTACT US
              </p>
              <h2 className="mb-3 text-[1.75rem] font-medium leading-tight tracking-tight text-zinc-900 sm:text-3xl md:text-4xl lg:text-[40px]">
                Let&apos;s help
                <br />
                you get started
              </h2>
              <p className="mb-6 max-w-sm text-[14px] leading-relaxed text-zinc-600">
                Have questions or need support? Our team is here to help you
                plan, set up, and run your events seamlessly.
              </p>

              <div className="relative mb-2 aspect-[4/3] w-full overflow-hidden sm:mb-0 sm:min-h-[360px] sm:flex-1 sm:aspect-auto lg:min-h-[460px]">
                <Image
                  src="/collage.webp"
                  alt="Event collage"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="flex h-full justify-start lg:col-span-7 lg:justify-end">
              <div className="flex w-full max-w-[660px] flex-col justify-center bg-[#849b96] p-4 sm:p-8">
                <div className="bg-white p-5 shadow-sm sm:p-8 lg:p-10">
                  <form className="flex flex-col gap-5">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="mb-2 block text-[13px] font-medium text-zinc-900"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        className="w-full rounded-full border border-black/5 bg-[#f3f6f4] px-5 py-3.5 text-[14px] text-zinc-900 outline-none focus:border-primary/30 focus:bg-white focus:ring-2 focus:ring-primary/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-[13px] font-medium text-zinc-900"
                      >
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
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-[13px] font-medium text-zinc-900"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full rounded-full border border-black/5 bg-[#f3f6f4] px-5 py-3.5 text-[14px] text-zinc-900 outline-none focus:border-primary/30 focus:bg-white focus:ring-2 focus:ring-primary/10"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="org"
                          className="mb-2 block text-[13px] font-medium text-zinc-900"
                        >
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
                      <label
                        htmlFor="intent"
                        className="mb-2 block text-[13px] font-medium text-zinc-900"
                      >
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
                          <svg
                            className="size-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="info"
                        className="mb-2 block text-[13px] font-medium text-zinc-900"
                      >
                        Additional info
                      </label>
                      <textarea
                        id="info"
                        rows={3}
                        className="w-full resize-none rounded-2xl border border-black/5 bg-[#f3f6f4] p-4 text-[14px] text-zinc-900 outline-none focus:border-primary/30 focus:bg-white focus:ring-2 focus:ring-primary/10"
                      />
                    </div>

                    <div className="mt-1 flex justify-end">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-3 rounded-full bg-primary py-2.5 pl-2.5 pr-7 text-[14px] font-medium text-white shadow-sm transition-opacity hover:opacity-90"
                      >
                        <span className="flex size-7 items-center justify-center rounded-full bg-white text-primary">
                          <svg
                            className="size-3.5"
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
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

export function HomeBody() {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <FooterCta />
    </>
  );
}
