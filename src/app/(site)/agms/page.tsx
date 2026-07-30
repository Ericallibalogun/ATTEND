import {
  PageShell,
  createPageMetadata,
} from "@/components/layout/page-shell";

export const metadata = createPageMetadata(
  "AGMs",
  "Annual General Meetings — schedules, agendas, and attendee management.",
);

export default function AgmsPage() {
  return (
    <PageShell
      title="AGMs"
      description="Annual General Meetings — schedules, agendas, and attendee management."
    />
  );
}
