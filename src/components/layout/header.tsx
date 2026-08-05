"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center transition-opacity hover:opacity-90 shrink-0 outline-none rounded focus-visible:ring">
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
          {siteConfig.nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm font-medium transition-all duration-200 outline-none rounded px-1 py-0.5 focus-visible:ring ${
                  isActive
                    ? "text-[#1a3d2e]"
                    : "text-zinc-500 hover:text-[#1a3d2e]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
