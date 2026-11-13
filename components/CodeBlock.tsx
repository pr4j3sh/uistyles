"use client";

import { useEffect, useState } from "react";
import { copyToClipboard } from "@/lib/clipboard";

/**
 * Prism + the TSX grammar are dynamically imported on mount (sequentially, so
 * the load-order dependencies hold), keeping them out of the initial client
 * bundle. Until the highlight lands, the raw code is rendered unstyled.
 */
async function highlight(code: string): Promise<string> {
  const Prism = (await import("prismjs")).default;
  await import("prismjs/components/prism-markup");
  await import("prismjs/components/prism-css");
  await import("prismjs/components/prism-javascript");
  await import("prismjs/components/prism-typescript");
  await import("prismjs/components/prism-jsx");
  await import("prismjs/components/prism-tsx");
  return Prism.highlight(code, Prism.languages.tsx ?? {}, "tsx");
}

/** Code block themed to the active style page (var(--s-*)), syntax-highlighted. */
/**
 * SECURITY: `dangerouslySetInnerHTML` renders Prism's output. Prism escapes the
 * code it highlights and every `code` string in this repo is authored, not
 * user-supplied — that invariant must hold. Do not feed this component
 * unsanitized external input; swap in a sanitizer (e.g. DOMPurify) if you ever
 * do.
 */
export function CodeBlock({
  code,
  label = "tsx + tailwind",
}: {
  code: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    highlight(code)
      .then((h) => {
        if (!cancelled) setHtml(h);
      })
      .catch(() => {
        /* keep the raw code fallback */
      });
    return () => {
      cancelled = true;
    };
  }, [code]);

  const copy = async () => {
    await copyToClipboard(code);
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
        {html !== null ? (
          <code dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <code>{code}</code>
        )}
      </pre>
    </div>
  );
}
