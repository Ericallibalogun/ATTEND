import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const features = [
  {
    iconSrc: "/Brutalism 16.webp",
    title: "AGMs & Shareholder Meetings",
    description:
      "Run statutory meetings with verified registration, proxy handling, live resolution voting and a full audit trail, end to end.",
  },
  {
    iconSrc: "/apps 1.webp",
    title: "Elections & Polls",
    description:
      "Secure ballots for boards, associations, unions and cooperatives, scheduled or live, with instant, verifiable results.",
  },
  {
    iconSrc: "/apps 1.webp",
    title: "Investor Relations",
    description:
      "Earnings calls, capital-raising roadshows and analyst briefings with moderated Q&A and broadcast-quality streaming.",
  },
  {
    iconSrc: "/Brutalism 74.webp",
    title: "Conferences & Summits",
    description:
      "Multi-track agendas, speaker management, networking and sponsor visibility for flagship industry gatherings.",
  },
];

export function AgmsBoardroom() {
  return (
    <section className="bg-white">
      <div className="w-full px-4 py-8 sm:px-8 sm:py-10 lg:px-16 lg:py-14">
        <div className="w-full bg-[#EFF5F3] p-5 sm:p-10 lg:p-14">
          <ScrollReveal yOffset={60}>
            <div className="grid items-stretch gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10 xl:gap-12">
              {/* Collage — below content on mobile (Figma) */}
              <div className="relative order-2 aspect-[4/3] w-full sm:min-h-[400px] sm:aspect-auto lg:order-1 lg:h-full lg:min-h-[580px]">
                <Image
                  src="/renewed_collage.webp"
                  alt="Events collage"
                  fill
                  className="object-contain object-center lg:object-left"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>

              <div className="order-1 flex flex-col lg:order-2">
                <div className="mb-6 sm:mb-10">
                  <p className="mb-3 flex items-center text-[11px] font-semibold uppercase tracking-widest text-primary sm:mb-4">
                    <span
                      className="mr-2 inline-block size-1.5 bg-primary"
                      aria-hidden
                    />
                    ONE PLATFORM, EVERY GATHERING
                  </p>
                  <h2 className="mb-3 text-[1.75rem] font-medium leading-tight tracking-tight text-zinc-900 sm:mb-5 sm:text-3xl md:text-4xl lg:text-5xl">
                    From the boardroom
                    <br />
                    to the big stage
                  </h2>
                  <p className="max-w-xl text-[13.5px] leading-relaxed text-zinc-600 sm:text-[14px]">
                    Attend adapts to the occasion, the same verified access,
                    live engagement and instant results, whether you&apos;re
                    passing resolutions or crowning a winning team.
                  </p>
                </div>

                <div className="overflow-hidden border border-[#d7e5df]">
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    {features.map((feature, idx) => (
                      <article
                        key={feature.title}
                        className={`flex min-h-0 flex-col justify-start p-5 sm:min-h-[220px] sm:p-6 lg:min-h-[240px] lg:p-8 ${
                          idx < features.length - 1
                            ? "border-b border-[#d7e5df] sm:border-b-0"
                            : ""
                        } ${
                          idx < 2 ? "sm:border-b sm:border-[#d7e5df]" : ""
                        } ${
                          idx % 2 === 0
                            ? "sm:border-r sm:border-[#d7e5df]"
                            : ""
                        }`}
                        style={{
                          background:
                            "radial-gradient(120% 90% at 0% 100%, #E2EEEA 0%, #F7FFFC 42%, #FFFFFF 72%)",
                        }}
                      >
                        <Image
                          src={feature.iconSrc}
                          alt=""
                          width={28}
                          height={28}
                          className="mb-5 size-7 object-contain object-left sm:mb-8"
                        />
                        <h3 className="mb-2 text-[15px] font-semibold text-zinc-900 sm:mb-3 sm:text-[16px]">
                          {feature.title}
                        </h3>
                        <p className="text-[12.5px] leading-relaxed text-zinc-600 sm:text-[13px]">
                          {feature.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
