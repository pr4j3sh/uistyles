import Link from "next/link";
import type { CSSProperties } from "react";
import { BentoCell, CellLabel } from "@/components/cells";
import { ComponentCell } from "@/components/ComponentCell";
import { PaletteSwatch } from "@/components/PaletteSwatch";
import { ALL_STYLES, type StyleMeta } from "@/lib/styles";
import { DEFAULT_THEME, type StyleContent } from "@/lib/style-content";

export function StylePage({
  meta,
  content,
}: {
  meta: StyleMeta;
  content?: StyleContent;
}) {
  const theme = content?.theme ?? DEFAULT_THEME;
  const themeVars = {
    "--s-bg": theme.base,
    "--s-surface": theme.surface,
    "--s-surface-2": theme.surface2,
    "--s-line": theme.line,
    "--s-text": theme.text,
    "--s-muted": theme.muted,
    "--s-accent": theme.accent,
    "--s-radius": theme.radius,
    "--s-shadow": theme.shadow ?? "none",
    background: theme.background,
  } as CSSProperties;

  const index = ALL_STYLES.findIndex((s) => s.slug === meta.slug);
  const next = ALL_STYLES[(index + 1) % ALL_STYLES.length];
  const prev = ALL_STYLES[(index - 1 + ALL_STYLES.length) % ALL_STYLES.length];

  return (
    <div
      className="style-scope flex h-full flex-col overflow-hidden"
      style={themeVars}
    >
      {/* ── Row 1 — themed hero band (40vh) ───────────────── */}
      <header className="relative flex h-[40vh] shrink-0 flex-col justify-between overflow-hidden border-b px-5 pb-5 pt-4 lg:px-8 lg:pt-5" style={{ borderColor: "var(--s-line)" }}>
        {/* watermark index */}
        <span
          aria-hidden
          className="s-watermark pointer-events-none absolute -right-6 -top-10 select-none font-serif leading-none"
          style={{ fontSize: "26vh" }}
        >
          {String(meta.index).padStart(2, "0")}
        </span>

        {/* top line: back + chip row + meta */}
        <div className="relative flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <Link
              href="/"
              data-cursor
              data-cursor-label="Index"
              aria-label="Back to style index"
              className="s-muted flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-opacity hover:opacity-100"
              style={{ borderColor: "var(--s-line)" }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M9 2L4.5 7L9 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <span className="s-chip hidden px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.3em] sm:block" style={{ borderRadius: "calc(var(--s-radius) / 2)" }}>
              Style {String(meta.index).padStart(2, "0")} / 30
            </span>
            <span className="s-muted hidden font-mono text-[9px] uppercase tracking-[0.3em] lg:block">
              {meta.category}
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-2 lg:gap-3">
            <Link
              href={`/styles/${prev.slug}`}
              data-cursor
              data-cursor-label={prev.name}
              aria-label={`Previous style: ${prev.name}`}
              className="s-muted flex h-9 w-9 items-center justify-center rounded-full border transition-opacity hover:opacity-100"
              style={{ borderColor: "var(--s-line)" }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path d="M7.5 1.5L3.5 6l4 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href={`/styles/${next.slug}`}
              data-cursor
              data-cursor-label={next.name}
              aria-label={`Next style: ${next.name}`}
              className="flex h-9 w-9 items-center justify-center rounded-full transition-transform hover:scale-105"
              style={{ background: "var(--s-accent)", color: "var(--s-bg)" }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path d="M4.5 1.5L8.5 6l-4 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* the name */}
        <div className="relative">
          <h1
            className={`s-text leading-[0.92] tracking-tight ${theme.display ?? "font-serif"}`}
            style={{ fontSize: theme.displaySize ?? "clamp(3rem, 11vh, 6.5rem)" }}
          >
            {meta.name.split(" ").map((word, i, arr) => {
              const italicize = theme.displayItalicLast ?? true;
              const isLast = i === arr.length - 1;
              return (
                <span key={i} className="block">
                  {isLast && italicize ? <em className="italic opacity-90">{word}</em> : word}
                </span>
              );
            })}
          </h1>
        </div>

        {/* bottom line: tagline + scroll cue */}
        <div className="relative flex items-end justify-between gap-6">
          <p className="s-dim max-w-sm text-[13px] leading-snug lg:text-[14px]">
            {meta.tagline}
          </p>
          <div className="s-muted hidden shrink-0 items-center gap-2 font-mono text-[9px] uppercase tracking-[0.25em] lg:flex">
            Scroll
            <svg width="26" height="8" viewBox="0 0 26 8" fill="none" aria-hidden>
              <path d="M0 4h24M21 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
      </header>

      {/* ── Row 2 — the grid, all cells full height ───────── */}
      <div className="hscroll h-full min-h-0 flex-1 overflow-auto lg:overflow-x-auto lg:overflow-y-hidden">
        <div className="flex min-h-full flex-col gap-3 p-3 lg:h-full lg:min-h-0 lg:min-w-max lg:grid lg:grid-rows-1 lg:[grid-auto-columns:23rem] lg:[grid-auto-flow:column]">
          {content ? (
            <>
              {/* ── The basics ─────────────────────────────────── */}
              <BentoCell kicker="01 — Basics" title="The essentials" className="lg:col-span-2">
                <CellLabel>What it is</CellLabel>
                <p className="text-[12.5px] leading-relaxed" style={{ color: "var(--s-text)", opacity: 0.78 }}>{content.what}</p>

                <div className="mt-4">
                  <CellLabel>Origin</CellLabel>
                  <p className="s-muted text-[12.5px] leading-relaxed">{content.origin}</p>
                </div>

                <div className="mt-4">
                  <CellLabel>Best for</CellLabel>
                  <ul className="space-y-1.5">
                    {content.bestFor.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[12px] leading-snug" style={{ color: "var(--s-text)", opacity: 0.78 }}>
                        <span className="mt-[3px] h-1 w-1 shrink-0 rounded-full" style={{ background: "var(--s-accent)" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <CellLabel>Avoid when</CellLabel>
                  <ul className="space-y-1.5">
                    {content.avoid.map((item) => (
                      <li key={item} className="s-muted flex items-start gap-2 text-[12px] leading-snug">
                        <span className="mt-[3px] font-mono text-[10px] leading-none opacity-60">×</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </BentoCell>

              {/* ── Palette ────────────────────────────────────── */}
              <BentoCell kicker="02 — Palette" title="Color">
                <div className="grid grid-cols-2 gap-2">
                  {content.palette.map((swatch) => (
                    <PaletteSwatch
                      key={swatch.hex + swatch.name}
                      name={swatch.name}
                      hex={swatch.hex}
                      role={swatch.role}
                    />
                  ))}
                </div>
              </BentoCell>

              {/* ── Typography ─────────────────────────────────── */}
              <BentoCell kicker="03 — Type" title="Typography">
                <div className="space-y-3">
                  {content.typography.map((type) => (
                    <div key={type.role} className="s-surface-2 s-border border px-4 py-3" style={{ borderRadius: "calc(var(--s-radius) / 1.5)" }}>
                      <p className="s-muted font-mono text-[9px] uppercase tracking-[0.25em]">
                        {type.role}
                      </p>
                      <p className="s-text mt-1 text-[16px] leading-snug">{type.family}</p>
                      <p className="s-muted mt-1 text-[10.5px] leading-snug opacity-80">{type.note}</p>
                    </div>
                  ))}
                </div>
              </BentoCell>

              {/* ── Components — one shared 3×6 subgrid so all rows align ── */}
              <div className="flex flex-col gap-3 lg:col-span-6 lg:grid lg:grid-rows-[auto_1fr_auto] lg:gap-3 lg:[grid-template-columns:subgrid]">
                {content.components.map((component, i) => (
                  <ComponentCell key={component.name} component={component} number={i + 1} />
                ))}
              </div>

              {/* ── Do / Don't — wide, side by side ────────────── */}
              <BentoCell kicker="The last word" title="Do / Don't" className="col-span-2">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <CellLabel>Do</CellLabel>
                    <ul className="space-y-2">
                      {content.dos.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[12px] leading-snug" style={{ color: "var(--s-text)", opacity: 0.85 }}>
                          <span className="mt-[1px] font-mono text-[10px] leading-snug text-emerald-500">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <CellLabel>Don&apos;t</CellLabel>
                    <ul className="space-y-2">
                      {content.donts.map((item) => (
                        <li key={item} className="s-muted flex items-start gap-2 text-[12px] leading-snug">
                          <span className="mt-[1px] font-mono text-[10px] leading-snug text-red-400">×</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </BentoCell>
            </>
          ) : (
            /* ── Coming soon ─────────────────────────────────── */
            <BentoCell kicker="In production" title="Coming soon" className="lg:col-span-2">
              <p className="s-text font-serif text-3xl leading-tight">
                This style is being <em className="italic opacity-70">written.</em>
              </p>
              <p className="s-dim mt-4 max-w-md text-[12.5px] leading-relaxed">
                Every uistyles page covers the same ground: the essentials, a reference
                palette and type pairing, and four to six core components rendered live —
                each with copy-ready Tailwind classes.
              </p>
              <div className="mt-6 space-y-2">
                {["The essentials — what it is, where it came from", "Reference palette & typography", "Button, card, input, badge, nav bar", "Copy-ready Tailwind classes for each", "Do / Don't cheat sheet"].map((item) => (
                  <div key={item} className="s-surface-2 s-border flex items-center gap-3 border px-4 py-2.5 text-[11.5px]" style={{ color: "var(--s-text)", opacity: 0.75, borderRadius: "calc(var(--s-radius) / 1.5)" }}>
                    <span className="h-1 w-1 rounded-full" style={{ background: "var(--s-accent)" }} />
                    {item}
                  </div>
                ))}
              </div>
            </BentoCell>
          )}

          {/* ── Next style ───────────────────────────────────── */}
          <Link
            href={`/styles/${next.slug}`}
            data-cursor
            data-cursor-label="Next"
            className="s-cell s-next group flex items-center justify-between gap-4 border px-6 py-6 transition-colors duration-300 lg:flex-col lg:items-start lg:justify-between"
          >
            <div className="min-w-0">
              <p className="s-next-kicker s-muted font-mono text-[9px] uppercase tracking-[0.3em] transition-colors">
                Next style
              </p>
              <p className="s-next-name s-text mt-1 truncate font-serif text-2xl transition-colors">
                {next.name}
              </p>
            </div>
            <svg
              width="34" height="12" viewBox="0 0 34 12" fill="none" aria-hidden
              className="s-next-arrow s-muted shrink-0 transition-all duration-300 group-hover:translate-x-1"
            >
              <path d="M0 6h31M26 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
