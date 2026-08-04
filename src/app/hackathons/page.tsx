import { HomeHeader } from "@/components/cover/home-header";
import { InnovationHero } from "@/components/innovation/innovation-hero";
import { InnovationWorkflow } from "@/components/innovation/innovation-workflow";
import { InnovationRunsRoom } from "@/components/innovation/innovation-runs-room";
import { InnovationSprint } from "@/components/innovation/innovation-sprint";
import { InnovationChallenges } from "@/components/innovation/innovation-challenges";
import { TalkToTeamCta } from "@/components/layout/talk-to-team-cta";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Innovation Challenge & Hackathons | Attend",
  description:
    "Power innovation challenges, hackathons, and pitchathons with live leaderboards, mentor desks, and automated scoring rubrics.",
};

export default function HackathonsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <HomeHeader heroId="hero-section" />
      <main className="flex-1">
        <InnovationHero />
        <InnovationWorkflow />
        <InnovationRunsRoom />
        <InnovationSprint />
        <InnovationChallenges />
        <TalkToTeamCta />
      </main>
      <Footer />
    </div>
  );
}
