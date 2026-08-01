import { HomeHeader } from "@/components/cover/home-header";
import { AgmsHero } from "@/components/agms/agms-hero";
import { AgmsBoardroom } from "@/components/agms/agms-boardroom";
import { AgmsCarousel } from "@/components/agms/agms-carousel";
import { AgmsConfidence } from "@/components/agms/agms-confidence";
import { FooterCta } from "@/components/layout/footer-cta";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "AGMs",
  description: "Annual General Meetings — schedules, agendas, and attendee management.",
};

export default function AgmsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <HomeHeader heroId="hero-section" />
      <main className="flex-1">
        <AgmsHero />
        <AgmsBoardroom />
        <AgmsCarousel />
        <AgmsConfidence />
        <FooterCta />
      </main>
      <Footer />
    </div>
  );
}
