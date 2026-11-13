"use client";

import Link from "next/link";

/** Shared crash state for the root and style routes. */
export function ErrorState({ reset }: { reset: () => void }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted">
        Error / something broke
      </p>
      <h1 className="font-serif text-5xl leading-[0.95] tracking-tight text-paper sm:text-7xl">
        A <em className="italic text-white/70">glitch.</em>
      </h1>
      <p className="max-w-xs text-[12px] leading-relaxed text-white/65">
        Something went wrong rendering this page. Try again, or head back to the index.
      </p>
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={reset}
          className="border border-line px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.3em] text-muted transition-colors hover:border-paper hover:text-paper"
        >
          Try again
        </button>
        <Link
          href="/"
          className="px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.3em] text-muted transition-colors hover:text-paper"
        >
          Home →
        </Link>
      </div>
    </div>
  );
}
