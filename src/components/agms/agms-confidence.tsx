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
    <section id="confidence" className="bg-white text-zinc-900">
      <div className="w-full px-4 py-10 sm:px-8 sm:py-12 lg:px-16 lg:py-16">
        <ScrollReveal yOffset={60}>
          <div className="mb-8 text-center sm:mb-12 lg:mb-14">
            <p className="mb-3 flex items-center justify-center text-[11px] font-semibold uppercase tracking-widest text-primary">
              <span
                className="mr-2 inline-block size-1.5 bg-primary"
                aria-hidden
              />
              HOW IT WORKS
            </p>
            <h2 className="text-[1.75rem] font-medium leading-tight tracking-tight text-zinc-900 sm:text-3xl md:text-4xl lg:text-5xl">
              Confidence at every stage
            </h2>
          </div>

          <div className="grid w-full grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
            {stages.map((stage, i) => {
              const isGradient = i === 1;

              return (
                <article
                  key={stage.badge}
                  className="flex min-h-0 w-full flex-col p-6 sm:min-h-[380px] sm:p-8 lg:min-h-[460px] lg:p-10"
                  style={
                    isGradient
                      ? {
                          background:
                            "radial-gradient(120% 90% at 0% 100%, #E2EEEA 0%, #F7FFFC 42%, #FFFFFF 72%)",
                        }
                      : { backgroundColor: "#F4F9F6" }
                  }
                >
                  <p className="mb-4 flex items-center text-[11px] font-semibold uppercase tracking-widest text-primary sm:mb-6 lg:mb-8">
                    <span
                      className="mr-2 inline-block size-1.5 bg-primary"
                      aria-hidden
                    />
                    {stage.badge}
                  </p>
                  <h3 className="mb-4 text-lg font-medium text-zinc-900 sm:mb-6 sm:text-xl lg:mb-8">
                    {stage.title}
                  </h3>

                  <ul className="flex flex-col border-t border-black/5">
                    {stage.items.map((item) => (
                      <li
                        key={item}
                        className="border-b border-black/5 py-3.5 text-[13px] text-zinc-600 last:border-b-0 sm:py-4 sm:text-[13.5px]"
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
