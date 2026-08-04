import { GalleryShowcase } from "@/components/gallery/gallery-showcase";
import { TalkToTeamCta } from "@/components/layout/talk-to-team-cta";
import { FooterCta } from "@/components/layout/footer-cta";

export const metadata = {
  title: "Gallery | Attend",
  description: "Photo and media gallery from past ATTEND events including AGMs, Hackathons, and Product Launches.",
};

export default function GalleryPage() {
  return (
    <main className="relative">
      <GalleryShowcase />
      <TalkToTeamCta />
      <FooterCta />
    </main>
  );
}
