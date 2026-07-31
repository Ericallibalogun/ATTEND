const sprintCards = [
  {
    title: "Rapid team formation",
    description: "Skill-based matching, looking-for-team discovery, and automated squad assembly so no idea is left without builders.",
  },
  {
    title: "Mentor desk",
    description: "Schedule office hours, queue up for live support, and get real-time assistance from mentors without leaving the platform.",
  },
  {
    title: "Judging & rubric matrix",
    description: "Custom scoring criteria, judge assignment, anti-bias controls, and instant score aggregation for fast, fair results.",
  },
  {
    title: "Streamlined submissions",
    description: "Code repository links, video pitch embeds, presentation decks, and artifact uploads supported in one standardized submission flow.",
  },
  {
    title: "Instant leaderboards",
    description: "Live score calculations, reveal animations, category awards, and real-time standings for high-energy demo day reveals.",
  },
  {
    title: "Trophy & analytics",
    description: "Post-event reports, participant engagement stats, project archives, and exportable data for sponsor reporting.",
  },
];

export function InnovationSprint() {
  return (
    <section className="bg-[#F4F9F6] py-20 lg:py-28 text-zinc-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 flex items-center justify-center text-[11px] font-semibold uppercase tracking-widest text-primary">
            <span className="mr-2 inline-block size-1.5 bg-primary" aria-hidden />
            DESIGNED FOR SPEED
          </p>
          <h2 className="mb-4 text-3xl font-medium leading-tight tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
            Built for the pressure of the sprint
          </h2>
          <p className="mx-auto max-w-2xl text-[14px] leading-relaxed text-zinc-600">
            Every feature is engineered to remove friction, keep participants focused on building, and give organizers total visibility into progress.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {sprintCards.map((card, idx) => (
            <div 
              key={idx} 
              className="flex flex-col justify-between bg-white p-8 lg:p-10 transition-shadow hover:shadow-lg border border-black/5"
            >
              <div>
                {/* Green Spark Icon */}
                <div className="mb-8 flex size-10 items-center justify-center rounded-xl bg-[#E2EEE7] text-primary">
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-zinc-900">
                  {card.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-zinc-600">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
