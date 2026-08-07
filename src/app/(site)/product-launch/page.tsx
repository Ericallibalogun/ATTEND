import { LaunchHero } from "@/components/launch/launch-hero";
import { LaunchFeatures } from "@/components/launch/launch-features";
import { LaunchRunOfShow } from "@/components/launch/launch-run-of-show";
import { LaunchAllInOne } from "@/components/launch/launch-all-in-one";
import { LaunchMomentum } from "@/components/launch/launch-momentum";
import { FooterCta } from "@/components/layout/footer-cta";

export const metadata = {
  title: "Product Launch Events | Attend",
  description:
    "Deliver high-impact, broadcast-quality product launches with Attend. Keynote webcasts, interactive demo rooms, and post-event momentum.",
};

export default function ProductLaunchPage() {
  return (
    <main className="relative">
      <LaunchHero />
      <LaunchFeatures />
      <LaunchRunOfShow />
      <LaunchAllInOne />
      <LaunchMomentum />
            <FooterCta />
    </main>
  );
}
