import Link from "next/link";
import { STYLE_GROUPS, ALL_STYLES } from "@/lib/styles";

export default function Home() {
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
          <p className="max-w-md text-[12px] leading-snug text-white/60 sm:text-[14px] sm:leading-relaxed">
            uistyles is a field guide to 31 interface design styles, from Swiss
            minimalism to synthwave. Each page covers the essentials, renders the
            core components live, and hands you the Tailwind classes.
          </p>
          <div className="hidden items-center gap-6 font-mono text-[9px] uppercase leading-loose tracking-[0.25em] text-muted sm:flex">
            <span>31 styles</span>
            <span className="h-3 w-px bg-white/15" />
            <span>6 families</span>
            <span className="h-3 w-px bg-white/15" />
            <span>Zero fluff</span>
          </div>
        </div>
      </header>

      {/* ── The index: bento of all 31 styles ─────────────── */}
      <div className="grid grid-cols-2 gap-3 p-3 sm:grid-cols-4 lg:grid-cols-6">
        {ALL_STYLES.map((style, i) => {
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
                    style.status === "available" ? "bg-paper group-hover:bg-ink" : "bg-white/15 group-hover:bg-ink/25"
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
                <p className="mt-1.5 line-clamp-2 text-[10.5px] leading-snug text-white/45 transition-colors group-hover:text-ink/60">
                  {style.tagline}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

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
