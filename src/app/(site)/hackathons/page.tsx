import {
  PageShell,
  createPageMetadata,
} from "@/components/layout/page-shell";

export const metadata = createPageMetadata(
  "Hackathons",
  "Hackathon events with live leaderboards, demo days, and team scoring.",
);

export default function HackathonsPage() {
  return (
    <PageShell
      title="Hackathons"
      description="Hackathon events with live leaderboards, demo days, and team scoring."
    />
  );
}
