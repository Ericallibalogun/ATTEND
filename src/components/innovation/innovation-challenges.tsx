import Image from "next/image";

const useCaseTags = [
  "Internal AI Hackathons",
  "Open-source Sprints",
  "Student Challenges",
  "University Tech Competitions",
  "Venture Innovation Days",
  "Corporate Idea Pitchathons",
  "Developer Hackathons",
  "Design Jams",
  "Web3 & Game Dev Hackathons",
];

export function InnovationChallenges() {
  return (
    <section className="bg-white py-10 lg:py-14 text-zinc-900">
      <div className="w-full px-6 lg:px-12">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-4 flex items-center justify-center text-[11px] font-semibold uppercase tracking-widest text-primary">
            <span className="mr-2 inline-block size-1.5 bg-primary" aria-hidden />
            USE CASES
          </p>
          <h2 className="text-3xl font-medium leading-tight tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
            One engine, many kinds
            <br />
            of challenge
          </h2>
        </div>

        {/* Pill Tags */}
        <div className="mb-16 flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
          {useCaseTags.map((tag, idx) => (
            <span
              key={idx}
              className="rounded-full bg-[#F4F9F6] border border-black/5 px-5 py-2.5 text-[13px] font-medium text-zinc-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Large Display Monitor Image - LIVE LEADERBOARD */}
        <div className="relative h-[240px] sm:h-[420px] lg:h-[560px] w-full overflow-hidden rounded-none bg-zinc-900 shadow-2xl">
          <Image
            src="/Frame 35776 (1).webp"
            alt="Live Leaderboard Monitor Screen"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>

      </div>
    </section>
  );
}
