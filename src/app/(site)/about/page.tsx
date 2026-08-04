import { ContactUsForm } from "@/components/layout/contact-us-form";
import { TalkToTeamCta } from "@/components/layout/talk-to-team-cta";
import { FooterCta } from "@/components/layout/footer-cta";

export const metadata = {
  title: "About Us | Attend",
  description: "Learn about ATTEND and get in touch with our team to help set up and run your events seamlessly.",
};

export default function AboutPage() {
  return (
    <main className="relative bg-white pt-12 sm:pt-16">
      <ContactUsForm />
      <TalkToTeamCta />
      <FooterCta />
    </main>
  );
}
