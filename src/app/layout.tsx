import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { siteConfig } from "@/lib/site";
import { BookDemoProvider } from "@/components/layout/book-demo-modal";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">
        <BookDemoProvider>{children}</BookDemoProvider>
      </body>
    </html>
  );
}
