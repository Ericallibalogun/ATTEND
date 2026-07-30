import {
  PageShell,
  createPageMetadata,
} from "@/components/layout/page-shell";

export const metadata = createPageMetadata(
  "Product Launch",
  "Product launch events — campaigns, highlights, and live reveal experiences.",
);

export default function ProductLaunchPage() {
  return (
    <PageShell
      title="Product Launch"
      description="Product launch events — campaigns, highlights, and live reveal experiences."
    />
  );
}
