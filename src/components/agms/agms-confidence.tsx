export function AgmsConfidence() {
  const stages = [
    {
      badge: "BEFORE",
      title: "Prepare",
      items: [
        "Update your register or delegate list",
        "Open registration & proxy lodgement",
        "Brand the experience as your own",
        "Dry-run with your team",
      ],
    },
    {
      badge: "DURING",
      title: "Run live",
      items: [
        "Authenticate and admit participants",
        "Stream, present and moderate Q&A",
        "Open polls and display instant results",
        "Track quorum and attendance in real time",
      ],
    },
    {
      badge: "AFTER",
      title: "Evidence & improve",
      items: [
        "Publish results and minutes support",
        "Export regulator-ready reports",
        "Share recordings and replays",
        "Review engagement analytics",
      ],
    },
  ];

  return (
    <section className="bg-white py-10 lg:py-14 text-zinc-900">
      <div className="mx-auto w-full px-6 lg:px-12">
        <div className="mb-14 text-center">
          <p className="mb-3 flex items-center justify-center text-[11px] font-semibold uppercase tracking-widest text-primary">
            <span className="mr-2 inline-block size-1.5 bg-primary" aria-hidden />
            HOW IT WORKS
          </p>
          <h2 className="text-3xl font-medium leading-tight tracking-tight text-zinc-900 md:text-4xl lg:text-5xl">
            Confidence at every stage
          </h2>
        </div>

        {/* 3 Separate Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stages.map((stage, i) => {
            // Only Card 1 (DURING / Run live) has the linear gradient
            const isGradient = i === 1;

            return (
              <div 
                key={i} 
                className={`flex flex-col p-8 lg:p-10 ${
                  isGradient 
                    ? 'bg-[linear-gradient(180deg,#F7FFFC_0%,#E2EEEA_100%)]' 
                    : 'bg-[#F4F9F6]'
                }`}
              >
                <p className="mb-8 flex items-center text-[11px] font-semibold uppercase tracking-widest text-primary">
                  <span className="mr-2 inline-block size-1.5 bg-primary" aria-hidden />
                  {stage.badge}
                </p>
                <h3 className="mb-8 text-xl font-medium text-zinc-900">
                  {stage.title}
                </h3>
                
                <ul className="flex flex-col border-t border-black/5">
                  {stage.items.map((item, j) => (
                    <li 
                      key={j} 
                      className="py-4 text-[13.5px] text-zinc-600 border-b border-black/5 last:border-b-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
