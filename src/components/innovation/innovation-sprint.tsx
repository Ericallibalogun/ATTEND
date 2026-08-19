import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const sprintCards = [
  {
    title: "Registration & team formation",
    description:
      "Skill-tagged profiles, team invitations and auto-matching bring the right builders together fast, while caps, waitlists and eligibility rules are enforced automatically through our event registration and ticketing tools.",
    icon: "/apps_1.webp",
  },
  {
    title: "Submission hub",
    description:
      "Repos, videos, decks and documents all collected against each track, versioned, timestamped and locked the moment the deadline hits.",
    icon: "/data_check_double_1.webp",
  },
  {
    title: "Judging & leaderboards",
    description:
      "Custom rubrics, independent scoring and normalisation feed live leaderboards, backed by the same ballot integrity we bring to AGM voting.",
    icon: "/Brutalism_74_1.webp",
  },
  {
    title: "Streamed demo days",
    description:
      "Broadcast-quality pitches come to life with moderated Q&A and audience-choice voting, streamed adaptively so no one misses a moment, whatever their bandwidth.",
    icon: "/Brutalism_74_2.webp",
  },
  {
    title: "Mentorship & comms",
    description:
      "Office-hour booking, announcements, schedule and rule updates all flow through one channel of truth, so no participant is ever left guessing.",
    icon: "/Brutalism_16_1.webp",
  },
  {
    title: "Pipeline analytics",
    description:
      "Track participation and submission quality, and see which teams convert into ventures, hires or products, challenge over challenge.",
    icon: "/Brutalism_16_2.webp",
  },
];

export function InnovationSprint() {
  return (
    <section className="bg-white text-zinc-900">
      <div className="section-x w-full py-8 sm:py-12 lg:py-16">
        <ScrollReveal yOffset={60}>
          <div className="w-full bg-[#EFF5F3] p-5 sm:p-10 lg:p-16">
            <div className="mb-8 text-left sm:mb-14 sm:text-center">
              <p className="mb-3 flex items-center text-[11px] font-semibold uppercase tracking-widest text-[#004D34] sm:justify-center sm:text-xs">
                <span
                  className="mr-2 inline-block size-1.5 bg-[#004D34]"
                  aria-hidden
                />
                THE PLATFORM
              </p>
              <h2 className="mb-3 text-[1.75rem] font-medium leading-tight tracking-tight text-zinc-900 sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
                Built for the pressure of the sprint
              </h2>
              <p className="max-w-2xl text-[13.5px] leading-relaxed text-zinc-600 sm:mx-auto sm:text-sm">
                The same verified access, live engagement and instant, auditable
                results that power Attend tuned for builders on a secure,
                purpose-built virtual hackathon platform.
              </p>
            </div>

            <div className="overflow-hidden border border-[#d7e5df]">
              <div className="grid grid-cols-1 md:grid-cols-3">
                {sprintCards.map((card, idx) => (
                  <article
                    key={card.title}
                    className={`flex min-h-0 flex-col justify-start p-5 sm:min-h-[280px] sm:p-8 lg:min-h-[300px] lg:p-11 ${
                      idx < sprintCards.length - 1
                        ? "border-b border-[#d7e5df] md:border-b-0"
                        : ""
                    } ${idx < 3 ? "md:border-b md:border-[#d7e5df]" : ""} ${
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
                    <h3 className="mb-2 text-[15px] font-semibold tracking-tight text-zinc-900 sm:mb-3 sm:text-lg">
                      {card.title}
                    </h3>
                    <p className="text-[12.5px] leading-relaxed text-zinc-600 sm:text-[13.5px]">
                      {card.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
