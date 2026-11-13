"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { STYLE_GROUPS, ALL_STYLES } from "@/lib/styles";
import { searchStyles } from "@/lib/search";

export function HomeFinder() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(() => searchParams.get("q") ?? "");

  // keep the URL shareable as the user types/clears
  useEffect(() => {
    const current = searchParams.get("q") ?? "";
    const trimmed = query.trim();
    if (trimmed === current) return;
    router.replace(trimmed ? `/?q=${encodeURIComponent(trimmed)}` : "/", { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const filtering = query.trim().length > 0;
  const matches = filtering ? searchStyles(query) : [];
  const shown = filtering ? matches.map((m) => m.style) : ALL_STYLES;

  return (
    <div className="hscroll h-full overflow-y-auto">
      {/* ── Hero: same 40vh band as the style pages ─────── */}
      <header className="relative flex h-[40vh] shrink-0 flex-col justify-between overflow-hidden border-b border-line px-6 pb-5 pt-4 lg:px-12 lg:pt-5">
        <div className="flex items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted">
            The UI Style Index / Vol. 01
          </p>
          <span className="hidden font-mono text-[9px] uppercase tracking-[0.3em] text-muted sm:block">
            Styles / 31
          </span>
        </div>
        <h1
          className="max-w-3xl font-serif leading-[0.92] tracking-tight text-paper"
          style={{ fontSize: "clamp(1.9rem, min(10vh, 10.5vw), 6rem)" }}
        >
          Every interface has an <em className="italic text-white/70">accent.</em>
        </h1>
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <p className="max-w-md text-[12px] leading-snug text-white/75 sm:text-[14px] sm:leading-relaxed">
            uistyles is a field guide to 31 interface design styles, from Swiss
            minimalism to synthwave. Each page covers the essentials, renders the
            core components live, and hands you the Tailwind classes.
          </p>
          <div className="hidden items-center gap-6 font-mono text-[9px] uppercase leading-loose tracking-[0.25em] text-muted sm:flex">
            <span>31 styles</span>
            <span className="h-3 w-px bg-white/25" />
            <span>6 families</span>
            <span className="h-3 w-px bg-white/25" />
            <span>Zero fluff</span>
          </div>
        </div>
      </header>

      {/* ── Finder: what do you want to design? ─────────── */}
      <div className="flex flex-col gap-2 border-b border-line px-6 py-4 lg:flex-row lg:items-center lg:gap-6 lg:px-12">
        <label
          htmlFor="style-finder"
          className="shrink-0 font-mono text-[10px] uppercase tracking-[0.3em] text-muted"
        >
          What do you want to design?
        </label>
        <div className="flex flex-1 items-center gap-3 border border-line bg-panel-2 px-4 py-2.5 transition-colors focus-within:border-white/25">
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden className="shrink-0">
            <circle cx="5.5" cy="5.5" r="4" stroke="#8a8a8a" strokeWidth="1.2" />
            <path d="M8.7 8.7L11 11" stroke="#8a8a8a" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <input
            id="style-finder"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Try "news article", "cute kids app", "dark dashboard"…'
            aria-label="Describe what you want to design"
            autoComplete="off"
            spellCheck={false}
            className="w-full bg-transparent text-[13px] tracking-wide text-paper placeholder:text-muted focus:outline-none"
          />
          {filtering && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              data-cursor
              data-cursor-label="Clear"
              className="shrink-0 font-mono text-[11px] text-muted transition-colors hover:text-paper"
            >
              ✕
            </button>
          )}
        </div>
        <p
          aria-live="polite"
          className="shrink-0 font-mono text-[9px] uppercase tracking-[0.3em] text-muted"
        >
          {filtering ? `${shown.length} match${shown.length === 1 ? "" : "es"}` : "31 styles"}
        </p>
      </div>

      {/* ── The index: bento of the styles ────────────────── */}
      {shown.length > 0 ? (
        <div className="grid grid-cols-2 gap-3 p-3 sm:grid-cols-4 lg:grid-cols-6">
          {shown.map((style, i) => {
            // bento rhythm: every 7th cell is wide
            const wide = i % 7 === 0;
            return (
              <Link
                key={style.slug}
                href={`/styles/${style.slug}`}
                data-cursor
                data-cursor-label="View"
                className={`group relative flex min-h-[150px] flex-col justify-between overflow-hidden rounded-lg border border-line bg-panel p-4 transition-colors duration-300 hover:border-paper hover:bg-paper ${
                  wide ? "col-span-2" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] tabular-nums text-muted transition-colors group-hover:text-ink/60">
                    {String(style.index).padStart(2, "0")}
                  </span>
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-colors ${
                      style.status === "available" ? "bg-paper group-hover:bg-ink" : "bg-white/25 group-hover:bg-ink/25"
                    }`}
                  />
                </div>
                <div>
                  <h2
                    className={`font-serif leading-[1.02] tracking-tight text-paper transition-colors group-hover:text-ink ${
                      wide ? "text-3xl" : "text-xl"
                    }`}
                  >
                    {style.name}
                  </h2>
                  <p className="mt-1.5 line-clamp-2 text-[10.5px] leading-snug text-white/75 transition-colors group-hover:text-ink/60">
                    {style.tagline}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 px-6 py-20 text-center">
          <p className="max-w-sm font-serif text-2xl leading-snug text-paper">
            Nothing matches <em className="italic text-white/70">“{query.trim()}”</em> — yet.
          </p>
          <p className="max-w-xs text-[12px] leading-relaxed text-white/65">
            Try words like “blog”, “dashboard”, “cute”, “dark”, “e-commerce” or “gaming”.
          </p>
          <button
            type="button"
            onClick={() => setQuery("")}
            data-cursor
            data-cursor-label="Clear"
            className="mt-2 border border-line px-5 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted transition-colors hover:border-paper hover:text-paper"
          >
            Clear search
          </button>
        </div>
      )}

      {/* ── Colophon ─────────────────────────────────────── */}
      <footer className="flex flex-col justify-between gap-4 border-t border-line px-6 py-8 font-mono text-[9px] uppercase leading-loose tracking-[0.25em] text-muted sm:flex-row lg:px-12">
        <span>uistyles / the ui style index</span>
        <div className="flex flex-wrap gap-x-6 gap-y-1">
          {STYLE_GROUPS.map((g) => (
            <span key={g.name}>{g.name}</span>
          ))}
        </div>
      </footer>
    </div>
  );
}
