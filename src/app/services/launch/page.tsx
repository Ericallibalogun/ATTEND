import { Metadata } from "next";
import { HomeHeader } from "@/components/cover/home-header";
import { LaunchHero } from "@/components/launch/launch-hero";
import { LaunchFeatures } from "@/components/launch/launch-features";
import { LaunchRunOfShow } from "@/components/launch/launch-run-of-show";
import { LaunchAllInOne } from "@/components/launch/launch-all-in-one";
import { LaunchMomentum } from "@/components/launch/launch-momentum";
import { FooterCta } from "@/components/layout/footer-cta";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Product Launch Events | Attend",
  description:
    "Deliver high-impact, broadcast-quality product launches with Attend. Keynote webcasts, interactive demo rooms, and post-event momentum.",
};

export default function LaunchServicePage() {
  return (
    <div className="relative min-h-screen bg-white font-sans text-zinc-900 selection:bg-[#004D34] selection:text-white">
      <HomeHeader heroId="hero-section" />
      <main className="relative">
        <LaunchHero />
        <LaunchFeatures />
        <LaunchRunOfShow />
        <LaunchAllInOne />
        <LaunchMomentum />
                <FooterCta />
      </main>
      <Footer />
    </div>
  );
}
