import { ScrollReveal } from "@/components/ui/scroll-reveal";

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
] as const;

export function AgmsConfidence() {
  return (
    <section className="bg-white text-zinc-900">
      {/* 2cm from screen edges — full width, no max-width cap */}
      <div className="w-full px-8 py-12 sm:px-12 lg:px-16 lg:py-16">
        <ScrollReveal yOffset={60}>
          <div className="mb-12 text-center lg:mb-14">
            <p className="mb-3 flex items-center justify-center text-[11px] font-semibold uppercase tracking-widest text-primary">
              <span
                className="mr-2 inline-block size-1.5 bg-primary"
                aria-hidden
              />
              HOW IT WORKS
            </p>
            <h2 className="text-3xl font-medium leading-tight tracking-tight text-zinc-900 md:text-4xl lg:text-5xl">
              Confidence at every stage
            </h2>
          </div>

          {/* 3 equal-width cards spanning the full content width */}
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
            {stages.map((stage, i) => {
              const isGradient = i === 1;

              return (
                <article
                  key={stage.badge}
                  className="flex min-h-[420px] w-full flex-col p-8 lg:min-h-[460px] lg:p-10"
                  style={
                    isGradient
                      ? {
                          background:
                            "radial-gradient(120% 90% at 0% 100%, #E2EEEA 0%, #F7FFFC 42%, #FFFFFF 72%)",
                        }
                      : { backgroundColor: "#F4F9F6" }
                  }
                >
                  <p className="mb-6 flex items-center text-[11px] font-semibold uppercase tracking-widest text-primary lg:mb-8">
                    <span
                      className="mr-2 inline-block size-1.5 bg-primary"
                      aria-hidden
                    />
                    {stage.badge}
                  </p>
                  <h3 className="mb-6 text-xl font-medium text-zinc-900 lg:mb-8">
                    {stage.title}
                  </h3>

                  <ul className="flex flex-col border-t border-black/5">
                    {stage.items.map((item) => (
                      <li
                        key={item}
                        className="border-b border-black/5 py-4 text-[13.5px] text-zinc-600 last:border-b-0"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
