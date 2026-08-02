import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="relative block h-9 lg:h-11 w-32 lg:w-40 transition-opacity hover:opacity-90 shrink-0">
          <Image
            src="/Attend-2_logo.webp"
            alt="Attend"
            fill
            className="object-contain object-left"
            priority
            sizes="(max-width: 1024px) 128px, 160px"
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
