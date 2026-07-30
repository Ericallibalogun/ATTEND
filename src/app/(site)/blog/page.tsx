import {
  PageShell,
  createPageMetadata,
} from "@/components/layout/page-shell";

export const metadata = createPageMetadata(
  "Blog",
  "News, updates, and insights from the ATTEND team.",
);

export default function BlogPage() {
  return (
    <PageShell
      title="Blog"
      description="News, updates, and insights from the ATTEND team."
    />
  );
}
