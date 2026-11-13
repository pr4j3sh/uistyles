import type { ReactNode } from "react";

/** A single cell in the horizontal bento grid. Themed via CSS vars (.style-scope). */
export function BentoCell({
  kicker,
  title,
  children,
  className = "",
  bodyClassName = "",
  bleed = false,
}: {
  kicker?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  /** remove the default body padding (for fixed internal rows) */
  bleed?: boolean;
}) {
  return (
    <section
      className={`s-cell flex min-h-[280px] flex-col overflow-hidden lg:min-h-0 ${className}`}
    >
      {(kicker || title) && (
        <header className="s-cell-header flex shrink-0 items-baseline justify-between gap-3 px-5 py-3">
          <p className="s-muted font-mono text-[9px] uppercase tracking-[0.3em]">
            {kicker}
          </p>
          {title && (
            <p className="s-faint font-mono text-[9px] uppercase tracking-[0.3em]">
              {title}
            </p>
          )}
        </header>
      )}
      <div
        className={`hscroll min-h-0 flex-1 ${
          bleed ? "flex flex-col overflow-hidden" : "overflow-y-auto px-5 py-4"
        } ${bodyClassName}`}
      >
        {children}
      </div>
    </section>
  );
}

/** Small mono section label inside a cell. */
export function CellLabel({ children }: { children: ReactNode }) {
  return (
    <p className="s-muted mb-1 font-mono text-[9px] uppercase tracking-[0.25em]">
      {children}
    </p>
  );
}
