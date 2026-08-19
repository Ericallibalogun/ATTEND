import { HomeHeader } from "@/components/cover/home-header";
import { InnovationHero } from "@/components/innovation/innovation-hero";
import { InnovationWorkflow } from "@/components/innovation/innovation-workflow";
import { InnovationRunsRoom } from "@/components/innovation/innovation-runs-room";
import { InnovationSprint } from "@/components/innovation/innovation-sprint";
import { InnovationChallenges } from "@/components/innovation/innovation-challenges";
import { FooterCta } from "@/components/layout/footer-cta";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Innovation Challenge | Attend",
  description:
    "Power innovation challenges, hackathons, and pitchathons with live leaderboards, mentor desks, and automated scoring rubrics.",
};

export default function InnovationServicesPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-white">
      <HomeHeader heroId="hero-section" />
      <main className="flex-1">
        <InnovationHero />
        <InnovationWorkflow />
        <InnovationRunsRoom />
        <InnovationSprint />
        <InnovationChallenges />
        <FooterCta />
      </main>
      <Footer />
    </div>
  );
}
