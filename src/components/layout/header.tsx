import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="inline-block transition-opacity hover:opacity-90">
          <Image
            src="/Attend-2_logo.webp"
            alt="Attend"
            width={120}
            height={36}
            className="h-7 w-auto object-contain"
            priority
          />
        </Link>
        <nav className="hidden gap-6 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-600 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
