import type { StyleComponent } from "@/lib/style-content";
import { CellLabel } from "@/components/cells";
import { CodeBlock } from "@/components/CodeBlock";

/**
 * A component cell — rendered INSIDE the shared 3×6 component grid
 * (see StylePage): the three children bind to the grid's subgrid row
 * tracks, so every cell's description / stage / code rows align
 * horizontally regardless of content length.
 */
export function ComponentCell({
  component,
  number,
}: {
  component: StyleComponent;
  number: number;
}) {
  const isWide =
    component.size === "wide" || component.size === "wideShort";

  return (
    <section
      className={`s-cell flex flex-col overflow-hidden ${
        isWide ? "lg:col-span-2" : ""
      } lg:row-span-3 lg:grid lg:[grid-template-columns:subgrid] lg:[grid-template-rows:subgrid]`}
    >
      {/* row 1 — kicker + description (sized by the tallest cell, no clamp) */}
      <div className="flex flex-col lg:col-span-full">
        <header className="s-cell-header flex shrink-0 items-baseline justify-between gap-3 border-b px-5 py-3">
          <p className="s-muted font-mono text-[9px] uppercase tracking-[0.3em]">
            Component {String(number).padStart(2, "0")}
          </p>
          <p className="s-faint truncate font-mono text-[9px] uppercase tracking-[0.3em]">
            {component.name}
          </p>
        </header>
        <div
          className="flex flex-1 items-center border-b px-5 py-2"
          style={{ borderColor: "var(--s-line)" }}
        >
          <p className="s-dim text-[12px] leading-snug">{component.description}</p>
        </div>
      </div>

      {/* row 2 — specimen stage */}
      <div className="min-h-[120px] p-2 lg:col-span-full lg:min-h-0">
        <div className="s-stage flex h-full w-full items-center justify-center overflow-hidden p-4">
          {component.preview}
        </div>
      </div>

      {/* row 3 — code */}
      <div className="shrink-0 px-2 pb-2 lg:col-span-full">
        <CellLabel>Tailwind — copy the classes</CellLabel>
        <CodeBlock code={component.code} />
      </div>
    </section>
  );
}
