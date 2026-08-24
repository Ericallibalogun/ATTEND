import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { siteConfig } from "@/lib/site";
import { BookDemoProvider } from "@/components/layout/book-demo-modal";
import { ComingSoonProvider } from "@/components/layout/coming-soon-modal";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "32x32" }],
    apple: [{ url: "/apple-touch-icon.webp", sizes: "180x180", type: "image/webp" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">
        <BookDemoProvider>
          <ComingSoonProvider>
            {children}
            <ScrollToTop />
          </ComingSoonProvider>
        </BookDemoProvider>
      </body>
    </html>
  );
}
