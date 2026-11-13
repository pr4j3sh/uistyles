import type { StyleContent } from "@/lib/style-content";

export const bentoGridDesign: StyleContent = {
  theme: {
    base: "#F6F4EF",
    background: "#F6F4EF",
    surface: "#FFFFFF",
    surface2: "#F0EDE6",
    line: "#E4DFD5",
    text: "#171717",
    muted: "#6B6B6B",
    accent: "#FF6B5B",
    radius: "20px",
    display: "font-sans font-semibold tracking-[-0.035em]",
    displaySize: "clamp(2rem, 7vh, 3.6rem)",
    displayItalicLast: false,
    shadow: "0 2px 8px rgba(23,23,23,0.04), 0 12px 32px rgba(23,23,23,0.06)",
  },
  what: "Bento Grid Design is the Japanese lunchbox as layout system: a page of unequal but harmonious cells, each holding one idea, with generous rounding and air between them. Nothing is decorative; every compartment earns its place.",
  origin: "It takes its name from the bento box and was popularized in product design around 2020 to 2022 by Apple keynote grids, Linear changelogs and a wave of portfolio sites built on modular dashboard aesthetics.",
  bestFor: [
    "Feature overviews and product homepages",
    "Dashboards with mixed content types",
    "Portfolios and personal sites",
    "Design-system and changelog indexes",
  ],
  avoid: [
    "Long-form reading where flow matters",
    "Dense data tables with many columns",
    "Interfaces that need one clear focal point",
  ],
  palette: [
    { name: "Porcelain", hex: "#F6F4EF", role: "Canvas, warm off-white" },
    { name: "Ink", hex: "#171717", role: "Text and primary action" },
    { name: "Coral", hex: "#FF6B5B", role: "Tile, primary accent" },
    { name: "Sun", hex: "#FFD84D", role: "Tile, warm highlight" },
    { name: "Sky", hex: "#5B8DEF", role: "Tile, cool highlight" },
    { name: "Sage", hex: "#A8C686", role: "Tile, quiet highlight" },
  ],
  typography: [
    { role: "Display", family: "Inter, 500 / 600", note: "40 to 60px, tight tracking. The grid is the drama; the type stays composed." },
    { role: "Body", family: "Inter, 400 / 500", note: "14-15px/1.55. One idea per cell. If it needs two, it needs two cells." },
    { role: "Spec", family: "JetBrains Mono, 9-11px", note: "Tile labels: LATENCY / QUERIES / UPTIME. Uppercase, tracked, quiet." },
  ],
  components: [
    {
      name: "Button",
      description:
        "A compact black pill: one action, no icon clutter. Hover lifts the fill a step, and the shape echoes the rounding of every tile around it.",
      code: `export const PrimaryButton = () => (
  <button className="h-11 rounded-full bg-[#171717] px-6 text-sm font-medium text-white transition-colors hover:bg-[#2E2E2E]">
    Get started
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-col items-start gap-3 s-panel rounded-xl p-5">
          <button className="h-11 rounded-full bg-[#171717] px-6 text-sm font-medium text-white transition-colors hover:bg-[#2E2E2E]">
            Get started
          </button>
          <a href="#" className="text-xs font-medium text-[#6B6B6B] underline underline-offset-4 hover:text-[#171717]">
            Browse the grid →
          </a>
        </div>
      ),
    },
    {
      name: "Input",
      description:
        "A rounded white well inside the grid: hairline rim, soft inner field, no heavy borders. Focus darkens the rim and nothing else moves.",
      code: `export const EmailField = () => (
  <label className="block w-60">
    <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.26em] text-[#6B6B6B]">Email</span>
    <input
      type="email"
      placeholder="you@company.com"
      className="h-11 w-full rounded-2xl border border-[#E4DFD5] bg-white px-4 text-sm text-[#171717] outline-none transition-colors caret-[#FF6B5B] placeholder:text-[#A3A3A3] focus:border-[#171717]"
    />
  </label>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-col items-center s-panel rounded-xl p-5">
          <label className="w-full">
            <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.26em] text-[#6B6B6B]">Email</span>
            <input
              type="email"
              placeholder="you@company.com"
              className="h-11 w-full rounded-2xl border border-[#E4DFD5] bg-white px-4 text-sm text-[#171717] outline-none transition-colors caret-[#FF6B5B] placeholder:text-[#A3A3A3] focus:border-[#171717]"
            />
          </label>
        </div>
      ),
    },
    {
      name: "Badge",
      description:
        "A colored compartment label: pill shape, tinted fill, matching text. Coral for new, sun for beta; color is the only hierarchy.",
      code: `export const StatusBadge = () => (
  <span className="inline-flex items-center gap-2 rounded-full bg-[#FF6B5B] px-3 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.24em] text-[#171717]">
    New
  </span>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-wrap items-center justify-center gap-2 s-panel rounded-xl p-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FF6B5B] px-3 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.24em] text-[#171717]">
            New
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFD84D] px-3 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.24em] text-[#171717]">
            Beta
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E4DFD5] bg-white px-3 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.24em] text-[#6B6B6B]">
            v2.4.0
          </span>
        </div>
      ),
    },
    {
      name: "Card",
      description:
        "A bento inside a bento: one wide coral tile for the headline metric, two smaller tiles for supporting data. The card is the layout, not a wrapper.",
      code: `export const ChangelogCard = () => (
  <article className="w-64 rounded-[20px] border border-[#E4DFD5] bg-white p-2.5 shadow-[0_2px_8px_rgba(23,23,23,0.04)]">
    <div className="grid grid-cols-2 gap-2">
      <div className="col-span-2 rounded-[14px] bg-[#FF6B5B] p-3">
        <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#171717]/70">Latency</p>
        <p className="mt-1 font-sans text-2xl font-semibold tracking-tight text-[#171717]">80ms</p>
      </div>
      <div className="rounded-[14px] bg-[#FFD84D] p-2.5">
        <p className="font-mono text-[8px] uppercase tracking-[0.24em] text-[#171717]/70">Queries</p>
        <p className="mt-1 font-sans text-base font-semibold text-[#171717]">24.6k</p>
      </div>
      <div className="rounded-[14px] bg-[#A8C686] p-2.5">
        <p className="font-mono text-[8px] uppercase tracking-[0.24em] text-[#171717]/70">Uptime</p>
        <p className="mt-1 font-sans text-base font-semibold text-[#171717]">99.9%</p>
      </div>
    </div>
  </article>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-col justify-center s-panel rounded-xl p-4">
          <article className="w-full rounded-[20px] border border-[#E4DFD5] bg-white p-2.5 shadow-[0_2px_8px_rgba(23,23,23,0.04)]">
            <div className="grid grid-cols-2 gap-2">
              <div className="col-span-2 rounded-[14px] bg-[#FF6B5B] p-3">
                <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#171717]/70">Latency</p>
                <p className="mt-1 font-sans text-2xl font-semibold tracking-tight text-[#171717]">80ms</p>
              </div>
              <div className="rounded-[14px] bg-[#FFD84D] p-2.5">
                <p className="font-mono text-[8px] uppercase tracking-[0.24em] text-[#171717]/70">Queries</p>
                <p className="mt-1 font-sans text-base font-semibold text-[#171717]">24.6k</p>
              </div>
              <div className="rounded-[14px] bg-[#A8C686] p-2.5">
                <p className="font-mono text-[8px] uppercase tracking-[0.24em] text-[#171717]/70">Uptime</p>
                <p className="mt-1 font-sans text-base font-semibold text-[#171717]">99.9%</p>
              </div>
            </div>
          </article>
        </div>
      ),
    },
    {
      name: "Nav bar",
      description:
        "A floating pill rail, detached from the top edge, fully rounded, white on porcelain. Logo, links and an avatar sit inside one continuous capsule.",
      code: `export const NavBar = () => (
  <header className="flex h-14 w-full items-center justify-center bg-[#F6F4EF] px-4">
    <div className="flex h-12 w-full max-w-md items-center justify-between rounded-full border border-[#E4DFD5] bg-white px-2 shadow-[0_2px_8px_rgba(23,23,23,0.05)]">
      <span className="flex items-center gap-2 pl-2 font-sans text-sm font-semibold tracking-tight text-[#171717]">
        <span className="h-5 w-5 rounded-full bg-[#FF6B5B]" />
        Acme
      </span>
      <nav className="flex items-center gap-4">
        {["Product", "Pricing", "About"].map((item) => (
          <a key={item} href="#" className="text-xs font-medium text-[#6B6B6B] transition-colors hover:text-[#171717]">{item}</a>
        ))}
      </nav>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171717] font-mono text-[9px] text-white">PR</span>
    </div>
  </header>
);`,
      size: "wideShort",
      preview: (
        <div className="flex h-full w-full flex-col justify-center rounded-md">
          <div className="flex h-14 w-full items-center justify-center bg-[#F6F4EF] px-4">
            <div className="flex h-12 w-full max-w-md items-center justify-between rounded-full border border-[#E4DFD5] bg-white px-2 shadow-[0_2px_8px_rgba(23,23,23,0.05)]">
              <span className="flex items-center gap-2 pl-2 font-sans text-sm font-semibold tracking-tight text-[#171717]">
                <span className="h-5 w-5 rounded-full bg-[#FF6B5B]" />
                Acme
              </span>
              <nav className="flex items-center gap-4">
                {["Product", "Pricing", "About"].map((item) => (
                  <a key={item} href="#" className="text-xs font-medium text-[#6B6B6B] transition-colors hover:text-[#171717]">
                    {item}
                  </a>
                ))}
              </nav>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171717] font-mono text-[9px] text-white">PR</span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  dos: [
    "Vary cell sizes. Equal cells are a table, not a bento.",
    "One idea per compartment. Overflow means another cell.",
    "Generous gap (8 to 16px) and large radius (16 to 24px) hold it together.",
    "Color-block one or two tiles; leave the rest white.",
  ],
  donts: [
    "Don't fill every tile with color. The grid becomes noise.",
    "Don't use more than three tile hues per view.",
    "Don't shrink type to fit a cell. Resize the cell.",
    "Don't align everything to one size. The rhythm is the point.",
  ],
};
