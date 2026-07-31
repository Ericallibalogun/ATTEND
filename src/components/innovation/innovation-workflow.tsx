import Image from "next/image";

const workflowSteps = [
  {
    number: "01",
    title: "Open Call",
    duration: "DAY 01 - 04",
    description: "Submissions, registration & team discovery all in one central hub.",
  },
  {
    number: "02",
    title: "Team Matching",
    duration: "DAY 04 & DAY 05",
    description: null,
  },
  {
    number: "03",
    title: "Build & Mentor Sessions",
    duration: "MID-WEEK",
    description: null,
  },
  {
    number: "04",
    title: "Presentation Submission",
    duration: "DAY 06",
    description: null,
  },
  {
    number: "05",
    title: "Judging & Leaderboard",
    duration: "LIVE",
    description: null,
  },
  {
    number: "06",
    title: "Winner Announcement",
    duration: "DEMO DAY",
    description: null,
  },
];

export function InnovationWorkflow() {
  return (
    <section className="bg-white py-20 lg:py-28 text-zinc-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-start">
          
          {/* Left Content */}
          <div className="flex flex-col">
            <p className="mb-4 flex items-center text-[11px] font-semibold uppercase tracking-widest text-primary">
              <span className="mr-2 inline-block size-1.5 bg-primary" aria-hidden />
              END-TO-END WORKFLOW
            </p>
            
            <h2 className="mb-6 text-3xl font-medium leading-tight tracking-tight text-zinc-900 lg:text-4xl">
              From open call to demo day,
              <br className="hidden sm:inline" />
              {" "}without the duct tape
            </h2>

            <p className="mb-10 text-[14px] leading-relaxed text-zinc-600 max-w-xl">
              The platform manages registration, team matching, mentor check-ins, and judging rubrics in one place—so you focus on innovation, not logistical fires.
            </p>

            {/* Steps Timeline Table */}
            <div className="flex flex-col border-t border-black/10">
              {workflowSteps.map((step, idx) => (
                <div key={idx} className="border-b border-black/10 py-4 transition-colors hover:bg-black/[0.01]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-[13px] font-medium text-zinc-400 font-mono">
                        {step.number}
                      </span>
                      <span className="text-[15px] font-medium text-zinc-900">
                        {step.title}
                      </span>
                    </div>
                    <span className="rounded bg-[#E2EEE7] px-2.5 py-1 text-[10px] font-semibold tracking-wider text-[#004D34]">
                      {step.duration}
                    </span>
                  </div>
                  {step.description && (
                    <p className="mt-2 pl-9 text-[13px] text-zinc-500">
                      {step.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[480px] sm:h-[580px] lg:h-[640px] w-full overflow-hidden rounded-2xl bg-zinc-100 shadow-xl">
            <Image
              src="/Frame 35774 (1).webp"
              alt="Hackathon award trophy and certificates"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
