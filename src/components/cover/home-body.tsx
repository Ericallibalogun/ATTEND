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
      {/* 2cm from screen edges — same padding used across the site */}
      <div className="w-full px-8 pb-16 pt-8 sm:px-12 lg:px-16 lg:pb-24 lg:pt-10">
        {/*
          Outer container (#EFF5F3):
          holds the header text AND the card row.
          Uniform padding so heading edge = card edge (Figma).
        */}
        <div className="w-full bg-[#EFF5F3] p-8 sm:p-12 lg:p-16">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 lg:items-start">
              <div className="lg:col-span-7">
                <p className="mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1E392A]">
                  <span
                    className="inline-block size-1.5 shrink-0 rounded-full bg-[#1E392A]"
                    aria-hidden
                  />
                  ABOUT ATTEND
                </p>
                <h2 className="max-w-[640px] text-[2rem] font-normal leading-[1.12] tracking-[-0.03em] text-[#1A1A1A] sm:text-[2.5rem] lg:text-[3.25rem]">
                  One Platform for your Events and Innovation Challenges
                </h2>
              </div>

              <div className="flex items-start lg:col-span-5 lg:pt-10">
                <p className="max-w-[360px] text-[15px] leading-[1.75] text-[#4A4A4A] lg:ml-auto lg:text-right">
                  Secure. Social. Interactive. Attend powers shareholder
                  meetings, investor events, product launches, hackathons,
                  conferences, and hybrid experiences where every participant
                  can engage with confidence.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/*
            Cards sit on the mint container.
            Each card owns its own gradient only.
            Joined: no gap, no margin between columns.
          */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:mt-16">
            {aboutCards.map((card) => (
              <article
                key={card.title}
                className="flex min-h-[340px] flex-col bg-[linear-gradient(180deg,#F7FFFC_0%,#E2EEEA_100%)] p-7 sm:p-8 lg:min-h-[380px] lg:p-10"
              >
                <Image
                  src={card.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="mb-8 size-7 object-contain object-left"
                />

                <h3 className="mb-4 text-[17px] font-semibold leading-snug text-[#1A1A1A]">
                  {card.title}
                </h3>

                <p className="mb-10 flex-1 text-[13.5px] leading-[1.7] text-[#4A4A4A]">
                  {card.description}
                </p>

                <LearnMoreLink href={card.href} />
              </article>
            ))}
          </div>
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
          <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="flex h-full flex-col items-start lg:col-span-5">
              <p className="mb-3 flex items-center text-xs font-semibold uppercase tracking-widest text-primary">
                <span
                  className="mr-2 inline-block size-1.5 bg-primary"
                  aria-hidden
                />
                CONTACT US
              </p>
              <h2 className="mb-3 text-3xl font-medium leading-tight tracking-tight text-zinc-900 md:text-4xl lg:text-[40px]">
                Let&apos;s help
                <br />
                you get started
              </h2>
              <p className="mb-6 max-w-sm text-[14px] leading-relaxed text-zinc-600">
                Have questions or need support? Our team is here to help you
                plan, set up, and run your events seamlessly.
              </p>

              <div className="relative min-h-[260px] w-full flex-1 overflow-hidden rounded-lg sm:min-h-[360px] lg:min-h-[460px]">
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
              <div className="flex w-full max-w-[660px] flex-col justify-center bg-[#849b96] p-6 sm:p-8">
                <div className="bg-white p-6 shadow-sm sm:p-8 lg:p-10">
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
