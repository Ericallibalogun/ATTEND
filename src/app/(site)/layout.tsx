import { Footer } from "@/components/layout/footer";
import { HomeHeader } from "@/components/cover/home-header";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <HomeHeader heroId="hero-section" />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
