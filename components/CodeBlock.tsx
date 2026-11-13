"use client";

import { useMemo, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";

/** Code block themed to the active style page (var(--s-*)), syntax-highlighted. */
export function CodeBlock({
  code,
  label = "tsx + tailwind",
}: {
  code: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  const html = useMemo(
    () => Prism.highlight(code, Prism.languages.tsx, "tsx"),
    [code],
  );

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div
      className="s-border flex h-full flex-col overflow-hidden border"
      style={{ background: "var(--s-surface-2)", borderRadius: "var(--s-radius)" }}
    >
      <div
        className="flex shrink-0 items-center justify-between border-b px-3 py-1"
        style={{ borderColor: "var(--s-line)" }}
      >
        <div className="flex items-center gap-1.5">
          {[0, 0, 0].map((_, i) => (
            <span
              key={i}
              className="h-2 w-2 rounded-full"
              style={{ background: "color-mix(in srgb, var(--s-text) 18%, transparent)" }}
            />
          ))}
          <span className="s-muted ml-2 font-mono text-[9px] uppercase tracking-[0.22em]">
            {label}
          </span>
        </div>
        <button
          type="button"
          onClick={copy}
          data-cursor
          data-cursor-label={copied ? "Copied" : "Copy"}
          className="s-muted flex items-center gap-1.5 border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.2em] transition-opacity hover:opacity-100"
          style={{
            borderColor: "var(--s-line)",
            borderRadius: "calc(var(--s-radius) / 2.5)",
          }}
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                <path d="M1.5 5.5L4 8L8.5 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ color: "var(--s-accent)" }}>Copied</span>
            </>
          ) : (
            <>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                <rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.1" />
                <path d="M7 3V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1" stroke="currentColor" strokeWidth="1.1" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      <pre
        className="codeblock h-36 flex-none overflow-y-auto overflow-x-hidden whitespace-pre-wrap [overflow-wrap:anywhere] px-3 py-2 font-mono text-[9.5px] leading-[1.5]"
        style={{ color: "color-mix(in srgb, var(--s-text) 88%, transparent)" }}
      >
        <code dangerouslySetInnerHTML={{ __html: html }} />
      </pre>
    </div>
  );
}
