import {
  PageShell,
  createPageMetadata,
} from "@/components/layout/page-shell";

export const metadata = createPageMetadata(
  "About Us",
  "Learn about ATTEND and get in touch with our team.",
);

export default function AboutPage() {
  return (
    <PageShell
      title="About Us"
      description="Learn about ATTEND and get in touch with our team."
    />
  );
}
