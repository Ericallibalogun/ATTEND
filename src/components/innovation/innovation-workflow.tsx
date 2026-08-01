import Image from "next/image";

const workflowSteps = [
  {
    number: "01",
    title: "Open the call",
    role: "ORGANISER",
    description:
      "Publish your challenge with tracks, prizes, rules and a timeline, and watch branded registration go live in minutes.",
  },
  {
    number: "02",
    title: "Form teams",
    role: "PARTICIPANTS",
    description:
      "Builders browse profiles by skill, pitch their ideas and team up, or get matched automatically. With virtual networking tools built right in, the right teammate is never a matter of luck.",
  },
  {
    number: "03",
    title: "Build with support",
    role: "MENTORS + TEAMS",
    description:
      "Mentor office hours, workshops, announcements and resource drops keep momentum going through the sprint, all powered by our virtual workshop software.",
  },
  {
    number: "04",
    title: "Submit before the buzzer",
    role: "TEAMS",
    description:
      "Repos, decks, demo videos and write-ups all land in one submission hub, timestamped, versioned and locked the second the deadline hits.",
  },
  {
    number: "05",
    title: "Judge on the record",
    role: "JUDGES",
    description:
      "Judges score against your rubric, independently and transparently. Conflicts get flagged, scores get normalised, and every decision stays auditable.",
  },
  {
    number: "06",
    title: "Crown the winners",
    role: "EVERYONE",
    description:
      "Demo day goes live: streamed pitches, audience-choice voting and a leaderboard finale, followed by prize disbursement tracking so nothing falls through the cracks.",
  },
];

export function InnovationWorkflow() {
  return (
    <section className="bg-[#F8FBF9] py-14 lg:py-20 text-zinc-900">
      <div className="w-full px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 items-start">
          
          {/* Left Content */}
          <div className="flex flex-col">
            <p className="mb-4 flex items-center text-[11px] font-semibold uppercase tracking-widest text-[#004D34]">
              <span className="mr-2 inline-block size-1.5 bg-[#004D34]" aria-hidden />
              THE CHALLENGE LIFECYCLE
            </p>
            
            <h2 className="mb-6 text-3xl font-medium leading-[1.15] tracking-tight text-zinc-900 sm:text-4xl lg:text-[2.75rem]">
              From open call to demo day,
              <br />
              without the duct tape
            </h2>

            <p className="mb-10 text-[14px] leading-relaxed text-zinc-600 max-w-xl">
              Most hackathons run on six disconnected tools. Attend runs the whole sequence in one place, every stage feeding the next, backed by the same event registration and ticketing engine used for enterprise meetings.
            </p>

            {/* Stepper Table / Accordion List */}
            <div className="flex flex-col border-t border-black/10">
              {workflowSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="border-b border-black/10 py-5 transition-colors hover:bg-black/[0.015]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="text-[14px] font-medium text-zinc-400 font-mono">
                        {step.number}
                      </span>
                      <h3 className="text-[16px] font-medium text-zinc-900">
                        {step.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider text-[#004D34] uppercase shrink-0">
                      {step.role}
                    </span>
                  </div>
                  
                  <p className="mt-3 pl-8 text-[13.5px] leading-relaxed text-zinc-600 max-w-lg">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[340px] sm:h-[520px] lg:h-full lg:min-h-[780px] w-full overflow-hidden rounded-none bg-zinc-900 shadow-xl">
            <Image
              src="/Frame 35774 (1).webp"
              alt="Hackathon award trophy and certificates"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
