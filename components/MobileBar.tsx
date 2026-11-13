"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ALL_STYLES } from "@/lib/styles";

/** Compact top bar for small screens — the sidebar is desktop-only. */
export function MobileBar() {
  const pathname = usePathname();

  return (
    <div className="flex h-12 shrink-0 items-center gap-4 border-b border-line bg-panel px-4 lg:hidden">
      <Link
        href="/"
        className="shrink-0 font-serif text-lg leading-none tracking-tight text-paper"
      >
        uistyles
      </Link>
      <div className="hscroll flex h-full flex-1 items-center gap-2 overflow-x-auto whitespace-nowrap">
        {ALL_STYLES.map((style) => {
          const href = `/styles/${style.slug}`;
          const active = pathname === href;
          return (
            <Link
              key={style.slug}
              href={href}
              className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors ${
                active
                  ? "border-paper bg-paper text-ink"
                  : "border-line text-muted hover:text-paper"
              }`}
            >
              {style.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
