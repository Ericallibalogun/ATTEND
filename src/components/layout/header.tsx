import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center transition-opacity hover:opacity-90 shrink-0">
          <Image
            src="/Attend-2_logo.webp"
            alt="Attend"
            width={160}
            height={48}
            className="h-9 lg:h-11 w-auto max-w-[160px] object-contain"
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
