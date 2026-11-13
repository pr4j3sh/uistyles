"use client";

import { useState } from "react";
import { copyToClipboard } from "@/lib/clipboard";

/** Click-to-copy palette swatch. Copies the hex value. */
export function PaletteSwatch({
  name,
  hex,
  role,
}: {
  name: string;
  hex: string;
  role: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await copyToClipboard(hex);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <button
      type="button"
      onClick={copy}
      data-cursor
      data-cursor-label={copied ? "Copied" : "Copy"}
      title={`Copy ${hex}`}
      className="group rounded-sm text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper/70 focus-visible:outline-solid"
      aria-label={`Copy ${hex}`}
    >
      <div
        className="s-border h-16 border transition-transform duration-200 group-hover:-translate-y-0.5"
        style={{ background: hex, borderRadius: "calc(var(--s-radius) / 2)" }}
      />
      <p className="s-text mt-1.5 h-4 truncate text-[10.5px] font-medium leading-4 opacity-85">
        {name}
      </p>
      <p className="mt-1 min-h-[22px] break-words font-mono text-[8.5px] uppercase leading-[1.35] tracking-wide">
        {copied ? (
          <span style={{ color: "var(--s-accent)" }}>Copied ✓</span>
        ) : (
          <span className="s-muted">{hex} · {role}</span>
        )}
      </p>
    </button>
  );
}
