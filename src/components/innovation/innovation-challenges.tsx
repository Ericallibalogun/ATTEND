import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const useCaseTags = [
  "Corporate hackathons",
  "Open innovation calls",
  "Campus challenges",
  "Bounty programmes",
  "Accelerator demo days",
  "Datathons & AI challenges",
  "Case competitions",
  "Design sprints",
  "+ full-scale innovation summits",
];

export function InnovationChallenges() {
  return (
    <section className="bg-white py-8 text-zinc-900 sm:py-10 lg:py-14">
      <ScrollReveal yOffset={60}>
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="mb-8 text-center sm:mb-12">
            <p className="mb-3 flex items-center justify-center text-[11px] font-semibold uppercase tracking-widest text-primary sm:mb-4">
              <span
                className="mr-2 inline-block size-1.5 bg-primary"
                aria-hidden
              />
              USE CASES
            </p>
            <h2 className="text-[1.75rem] font-medium leading-tight tracking-tight text-zinc-900 sm:text-3xl md:text-4xl lg:text-5xl">
              One engine, many kinds
              <br />
              of challenge
            </h2>
          </div>

          <div className="mx-auto mb-8 flex max-w-4xl flex-wrap items-center justify-center gap-2.5 sm:mb-12 sm:gap-3 lg:mb-16">
            {useCaseTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-black/5 bg-[#F4F9F6] px-3.5 py-2.5 text-center text-[12px] font-medium text-zinc-700 sm:px-5 sm:text-[13px]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="relative h-[200px] w-full overflow-hidden bg-zinc-900 shadow-2xl sm:h-[420px] lg:h-[560px]">
            <Image
              src="/Frame 35776 (1).webp"
              alt="Live Leaderboard Monitor Screen"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
