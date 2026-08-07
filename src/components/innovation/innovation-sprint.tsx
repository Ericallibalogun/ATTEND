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
      {/* 2cm from screen edges — full width */}
      <div className="w-full px-8 py-12 sm:px-12 lg:px-16 lg:py-16">
        <ScrollReveal yOffset={60}>
          <div className="w-full bg-[#EFF5F3] p-8 sm:p-12 lg:p-16">
            <div className="mb-14 text-center">
              <p className="mb-3 flex items-center justify-center text-xs font-semibold uppercase tracking-widest text-[#004D34]">
                <span
                  className="mr-2 inline-block size-1.5 bg-[#004D34]"
                  aria-hidden
                />
                THE PLATFORM
              </p>
              <h2 className="mb-4 text-3xl font-medium leading-tight tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
                Built for the pressure of the sprint
              </h2>
              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-600">
                The same verified access, live engagement and instant, auditable
                results that power Attend tuned for builders on a secure,
                purpose-built virtual hackathon platform.
              </p>
            </div>

            {/*
              Figma cards:
              - joined 3×2 grid with hairline borders
              - each cell: soft mint glow from bottom-left → white
            */}
            <div className="overflow-hidden border border-[#d7e5df]">
              <div className="grid grid-cols-1 md:grid-cols-3">
                {sprintCards.map((card, idx) => (
                  <article
                    key={card.title}
                    className={`flex min-h-[280px] flex-col justify-start p-8 sm:p-10 lg:min-h-[300px] lg:p-11 ${
                      idx < 3 ? "border-b border-[#d7e5df]" : ""
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
                      className="mb-8 size-7 object-contain object-left"
                    />
                    <h3 className="mb-3 text-lg font-semibold tracking-tight text-zinc-900">
                      {card.title}
                    </h3>
                    <p className="text-[13.5px] leading-relaxed text-zinc-600">
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
