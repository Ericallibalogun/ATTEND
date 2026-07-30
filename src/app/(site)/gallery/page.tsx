import {
  PageShell,
  createPageMetadata,
} from "@/components/layout/page-shell";

export const metadata = createPageMetadata(
  "Gallery",
  "Photo and media gallery from past ATTEND events.",
);

export default function GalleryPage() {
  return (
    <PageShell
      title="Gallery"
      description="Photo and media gallery from past ATTEND events."
    />
  );
}
