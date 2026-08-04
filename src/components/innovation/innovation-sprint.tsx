import Image from "next/image";

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
    <section className="bg-white py-12 lg:py-16 px-6 sm:px-10 lg:px-14 text-zinc-900">
      {/* Mint background container - 2cm away from screen edges */}
      <div className="mx-auto w-full max-w-[1480px] rounded-none bg-[#eff5f1] p-8 sm:p-12 lg:p-16">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 flex items-center justify-center text-xs font-semibold uppercase tracking-widest text-[#004D34]">
            <span className="mr-2 inline-block size-1.5 bg-[#004D34]" aria-hidden />
            THE PLATFORM
          </p>
          <h2 className="mb-4 text-3xl font-medium leading-tight tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
            Built for the pressure of the sprint
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-600">
            The same verified access, live engagement and instant, auditable results that power Attend tuned for builders on a secure, purpose-built virtual hackathon platform.
          </p>
        </div>

        {/* 6 Joined Cards inside Mint Container */}
        <div className="overflow-hidden rounded-none bg-white border border-zinc-200/60 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {sprintCards.map((card, idx) => (
              <div
                key={idx}
                className={`flex flex-col justify-start p-8 sm:p-10 lg:p-11 bg-linear-to-br from-white via-[#f9fcf9] to-[#ebf5ee] transition-colors ${
                  idx < 3 ? "border-b border-zinc-200/60" : ""
                } ${
                  idx % 3 !== 2 ? "md:border-r md:border-zinc-200/60" : ""
                }`}
              >
                <div className="mb-8 relative size-10">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={40}
                    height={40}
                    className="size-10 object-contain"
                  />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-zinc-900 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-zinc-600">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
