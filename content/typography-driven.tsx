import type { StyleContent } from "@/lib/style-content";

export const typographyDriven: StyleContent = {
  theme: {
    base: "#F4F1EC",
    background: "#F4F1EC",
    surface: "#F4F1EC",
    surface2: "#E7E4DC",
    line: "#141414",
    text: "#141414",
    muted: "#7A776E",
    accent: "#D9FF3F",
    radius: "0px",
    display: "font-sans font-black leading-[0.88] tracking-[-0.04em]",
    displayItalicLast: false,
  },
  what: "Typography-driven UI uses type as the interface — scale, weight, measure and rhythm do everything images, icons and chrome would. Pages read like a typesetter's specimen: kickers print their own spec strings (H1 / 140px / −4% / 900), headlines are the layout, and decoration is banned in favor of typographic mass.",
  origin: "From the 1960s Swiss poster grid to the 2010s studio/foundry wave (Klim, Colophon) and Awwwards type-as-art-direction, it is what happens when typography is promoted from content to the artwork itself.",
  bestFor: [
    "Design studios and foundries",
    "Monochrome product launches",
    "Portfolios and manifesto-style pages",
    "Typeface specimens and foundries' sites",
  ],
  avoid: [
    "Utility apps and transactional flows",
    "Dense dashboards",
    "Pages that need imagery to sell",
  ],
  palette: [
    { name: "Bone", hex: "#F4F1EC", role: "Ground — uncoated stock" },
    { name: "Ink", hex: "#141414", role: "Mass & rules" },
    { name: "Chartreuse", hex: "#D9FF3F", role: "Single accent — marks & fills" },
    { name: "Gray", hex: "#7A776E", role: "Spec metadata" },
    { name: "Rule", hex: "#141414", role: "Hairlines & baselines" },
    { name: "Tint", hex: "#E7E4DC", role: "Sunken specimen panels" },
  ],
  typography: [
    { role: "Display", family: "Inter — 900 (Black)", note: "Headlines at 60–160px, tracking −4%, locked leading. Weight IS the image." },
    { role: "Text", family: "Inter — 400 / 500", note: "15px/1.55 on a 65ch measure. Flush-left, ragged-right, never justified." },
    { role: "Spec", family: "JetBrains Mono — 9–11px", note: "Printed measurements, kicker strings and figure labels. Uppercase, tracked." },
  ],
  components: [
    {
      name: "Button",
      description:
        "A word, an arrow, a weight — no fill needed. The arrow advances on hover and gravity comes from 900-weight caps, not from a background block.",
      code: `export const PrimaryButton = () => (
  <button className="group inline-flex items-baseline gap-3 font-sans text-2xl font-black uppercase leading-none tracking-[-0.02em] text-[#141414]">
    Read
    <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>—→</span>
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-col items-start gap-4 s-panel rounded-md p-5">
          <button className="group inline-flex items-baseline gap-3 font-sans text-2xl font-black uppercase leading-none tracking-[-0.02em] text-[#141414]">
            Read
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>—→</span>
          </button>
          <button className="font-sans text-base font-semibold uppercase leading-none tracking-[0.14em] text-[#7A776E] underline underline-offset-4 decoration-2 transition-colors hover:text-[#141414] hover:decoration-[#D9FF3F]">
            Catalogue
          </button>
        </div>
      ),
    },
    {
      name: "Input",
      description:
        "A typesetter's field — label printed like a spec mark (BASELINE / W), rule below, chartreuse caret. No box, no fill, no icon.",
      code: `export const EmailField = () => (
  <label className="block w-60">
    <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.3em] text-[#7A776E]">
      BASELINE / W — Email
    </span>
    <input
      type="email"
      placeholder="you@company.com"
      className="w-full border-b border-[#141414] bg-transparent pb-2 pt-1 font-sans text-lg font-medium text-[#141414] outline-none transition-colors caret-[#D9FF3F] placeholder:text-[#B7B4AA] focus:border-b-2 focus:border-[#141414]"
    />
  </label>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-col items-center s-panel rounded-md p-5">
          <label className="w-full">
            <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.3em] text-[#7A776E]">
              BASELINE / W — Email
            </span>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full border-b border-[#141414] bg-transparent pb-2 pt-1 font-sans text-lg font-medium text-[#141414] outline-none transition-colors caret-[#D9FF3F] placeholder:text-[#B7B4AA] focus:border-b-2 focus:border-[#141414]"
            />
          </label>
        </div>
      ),
    },
    {
      name: "Badge",
      description:
        "A spec callout, not a pill. Mono, tracked, broken baseline — half the character of a printed specimen sheet.",
      code: `export const SpecChip = () => (
  <span className="inline-flex items-center gap-2 bg-[#141414] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.3em] text-[#D9FF3F]">
    TT-04 / H1
  </span>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-wrap items-center justify-center gap-2 s-panel rounded-md p-4">
          <span className="inline-flex items-center gap-2 bg-[#141414] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.3em] text-[#D9FF3F]">
            TT-04 / H1
          </span>
          <span className="inline-flex items-center gap-2 border border-[#141414] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.3em] text-[#141414]">
            900 / −4%
          </span>
          <span className="inline-flex items-center gap-2 bg-[#E7E4DC] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.3em] text-[#7A776E]">
            W/H 65CH
          </span>
        </div>
      ),
    },
    {
      name: "Card",
      description:
        "One giant digit, one black heading, one line of mono — proof that imagery is optional when weight does the transport.",
      code: `export const SpecCard = () => (
  <article className="w-64 border border-[#141414] bg-[#F4F1EC] p-5">
    <span className="font-sans text-6xl font-black leading-[0.85] tracking-[-0.05em] text-[#141414]">01</span>
    <h3 className="mt-3 font-sans text-2xl font-black leading-[0.95] tracking-tight text-[#141414]">Faster search, fewer keystrokes.</h3>
    <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.28em] text-[#7A776E]">80MS / INCREMENTAL / 24FPS</p>
  </article>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-col justify-center s-panel rounded-md p-4">
          <article className="w-full border border-[#141414] bg-[#F4F1EC] p-5">
            <span className="font-sans text-6xl font-black leading-[0.85] tracking-[-0.05em] text-[#141414]">01</span>
            <h3 className="mt-3 font-sans text-2xl font-black leading-[0.95] tracking-tight text-[#141414]">Faster search, fewer keystrokes.</h3>
            <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.28em] text-[#7A776E]">80MS / INCREMENTAL / 24FPS</p>
          </article>
        </div>
      ),
    },
    {
      name: "Nav bar",
      description:
        "A headline that navigates: oversized wordmark, type-only menu, ink rule underneath. The primary job of this bar is to be read out loud.",
      code: `export const NavBar = () => (
  <header className="flex h-16 w-full items-center justify-between border-b-2 border-[#141414] bg-[#F4F1EC] px-6">
    <span className="font-sans text-2xl font-black tracking-[-0.03em] text-[#141414]">ACME</span>
    <nav className="flex gap-5">
      {["INDEX", "WORK", "TYPE", "INFO"].map((item) => (
        <a key={item} href="#" className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#141414] transition-colors hover:text-[#D9FF3F] hover:bg-[#141414] hover:px-2">{item}</a>
      ))}
    </nav>
  </header>
);`,
      size: "wideShort",
      preview: (
        <div className="flex h-full w-full flex-col justify-center rounded-md">
          <div className="flex h-16 w-full items-center justify-between border-b-2 border-[#141414] bg-[#F4F1EC] px-6">
            <span className="font-sans text-2xl font-black tracking-[-0.03em] text-[#141414]">ACME</span>
            <nav className="flex gap-5">
              {["INDEX", "WORK", "TYPE", "INFO"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#141414] transition-colors hover:bg-[#141414] hover:px-2 hover:text-[#D9FF3F]"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      ),
    },
  ],
  dos: [
    "Set type first, spacing second, color third — never reverse that order",
    "Print the spec on the page — 900 / −4% / 65CH — it is the decoration",
    "Use weight jumps (400 → 900) instead of size jumps where possible",
    "One accent color, placed with intent, never for fills of blocks",
  ],
  donts: [
    "Don't add images, icons or illustration — type is the artwork",
    "Don't justify text; flush-left ragged-right is the contract",
    "Don't set anything below 10px — small print punishes readers",
    "Don't round corners or add shadows — hard edges, hard ink",
  ],
};
