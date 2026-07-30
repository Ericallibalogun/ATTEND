import {
  PageShell,
  createPageMetadata,
} from "@/components/layout/page-shell";

export const metadata = createPageMetadata(
  "Login",
  "Sign in to your ATTEND account.",
);

export default function LoginPage() {
  return (
    <PageShell
      title="Login"
      description="Sign in to your ATTEND account."
    />
  );
}
