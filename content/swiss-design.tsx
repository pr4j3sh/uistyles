import type { StyleContent } from "@/lib/style-content";

export const swissDesign: StyleContent = {
  theme: {
    base: "#FFFFFF",
    background: "#FFFFFF",
    surface: "#FFFFFF",
    surface2: "#F5F4F2",
    line: "#111111",
    text: "#111111",
    muted: "#6E6E6E",
    accent: "#E30613",
    radius: "0px",
    display: "font-sans font-extrabold uppercase leading-[0.9] tracking-[-0.02em]",
    displayItalicLast: false,
  },
  what: "Swiss Design treats typography as architecture. A strict asymmetric grid governs every element, Neue Haas Grotesk sets headlines at monumental scale, and images stay documentary. Order and clarity are the aesthetic, and the page reads as a page before a single word is read.",
  origin: "It came out of the Basel and Zurich art schools in the 1950s, through Josef Müller-Brockmann, Armin Hofmann and Emil Ruder, and was codified in the Neue Grafik journal. It became the grammar of post-war corporate modernism and still structures serious grids on the web.",
  bestFor: [
    "Cultural institutions, museums, publishing",
    "Posters and editorial campaigns",
    "Serious corporate and architecture firms",
    "Designers who want discipline before taste",
  ],
  avoid: [
    "Playful consumer brands",
    "Kids' products or anything needing warmth",
    "Marketing pages that must feel loud or celebratory",
  ],
  palette: [
    { name: "White", hex: "#FFFFFF", role: "Ground" },
    { name: "Ink", hex: "#111111", role: "Type & rules" },
    { name: "Swiss Red", hex: "#E30613", role: "Accent: rules and numerals only" },
    { name: "Gray", hex: "#6E6E6E", role: "Secondary text" },
    { name: "Rule", hex: "#111111", role: "Hairlines & dividers" },
    { name: "Paper", hex: "#F5F4F2", role: "Sunken panels & captions" },
  ],
  typography: [
    { role: "Display", family: "Neue Haas Grotesk, 700 / ExtraBold", note: "Headlines set uppercase, flush left and ragged right, with tight leading. No italic." },
    { role: "Body", family: "Neue Haas Grotesk, 400", note: "15-16px on a 6/8pt baseline grid. Never centered, never justified." },
    { role: "Metadata", family: "JetBrains Mono, 9-11px", note: "Kickers and figure captions. Uppercase, wide tracking." },
  ],
  components: [
    {
      name: "Button",
      description:
        "A black rectangle, white uppercase label, wide tracking. That is the recipe. Hover flips the fill to Swiss Red; there is no shadow and no radius.",
      code: `export const PrimaryButton = () => (
  <button className="inline-flex items-center gap-3 bg-[#111111] px-6 py-3 font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#E30613]">
    Get started
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-col items-center gap-3 s-panel rounded-md p-4">
          <button className="inline-flex items-center gap-3 bg-[#111111] px-6 py-3 font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#E30613]">
            Get started
          </button>
          <button className="font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-[#111111] underline decoration-[#E30613] decoration-2 underline-offset-4 transition-colors hover:text-[#E30613]">
            Catalogue
          </button>
        </div>
      ),
    },
    {
      name: "Input",
      description:
        "An underline, not a box. A hairline black rule sits below an uppercase micro-label, and focus thickens the rule. The field never fills with gray.",
      code: `export const EmailField = () => (
  <label className="block w-60">
    <span className="mb-2 block font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#111111]">Email</span>
    <input
      type="email"
      placeholder="you@company.com"
      className="w-full border-b border-[#111111] bg-transparent pb-2 pt-1 text-[15px] text-[#111111] outline-none transition-all placeholder:text-[#A3A3A3] focus:border-b-2 focus:pb-[7px] focus:border-[#E30613]"
    />
  </label>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-col items-center s-panel rounded-md p-4">
          <label className="w-full">
            <span className="mb-2 block font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#111111]">Email</span>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full border-b border-[#111111] bg-transparent pb-2 pt-1 text-[15px] text-[#111111] outline-none transition-all placeholder:text-[#A3A3A3] focus:border-b-2 focus:pb-[7px] focus:border-[#E30613]"
            />
          </label>
        </div>
      ),
    },
    {
      name: "Badge",
      description:
        "Tiny squared chips in all caps, in black, gray or Swiss Red on white. Never a colored fill with colored text, and never a pill.",
      code: `export const StatusBadge = () => (
  <span className="inline-flex items-center gap-2 bg-[#111111] px-2.5 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-white">
    Stable
  </span>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-wrap items-center justify-center gap-2 s-panel rounded-md p-4">
          <span className="inline-flex items-center gap-2 bg-[#111111] px-2.5 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-white">
            Stable
          </span>
          <span className="inline-flex items-center gap-2 border border-[#111111] bg-white px-2.5 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#111111]">
            v2.4.0
          </span>
          <span className="inline-flex items-center gap-2 bg-[#E30613] px-2.5 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-white">
            New
          </span>
        </div>
      ),
    },
    {
      name: "Card",
      description:
        "A one-pixel black rule around a numbered block: index figure in Swiss Red, headline flush left, one line of body. The grid does the decorating.",
      code: `export const ChangelogCard = () => (
  <article className="w-64 border border-[#111111] bg-white">
    <div className="flex items-baseline justify-between border-b border-[#111111] px-4 py-2">
      <span className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-[#6E6E6E]">Changelog</span>
      <span className="font-sans text-3xl font-extrabold tracking-[-0.03em] text-[#E30613]">02</span>
    </div>
    <div className="px-4 py-3">
      <h3 className="font-sans text-lg font-bold leading-[1.05] tracking-tight text-[#111111]">Faster search, fewer keystrokes.</h3>
      <p className="mt-2 text-[11px] leading-snug text-[#6E6E6E]">Results stream in as you type; queries now run in 80ms.</p>
    </div>
  </article>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-col justify-center s-panel rounded-md p-4">
          <article className="w-full border border-[#111111] bg-white">
            <div className="flex items-baseline justify-between border-b border-[#111111] px-4 py-2">
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-[#6E6E6E]">Changelog</span>
              <span className="font-sans text-3xl font-extrabold tracking-[-0.03em] text-[#E30613]">02</span>
            </div>
            <div className="px-4 py-3">
              <h3 className="font-sans text-lg font-bold leading-[1.05] tracking-tight text-[#111111]">Faster search, fewer keystrokes.</h3>
              <p className="mt-2 text-[11px] leading-snug text-[#6E6E6E]">Results stream in as you type; queries now run in 80ms.</p>
            </div>
          </article>
        </div>
      ),
    },
    {
      name: "Nav bar",
      description:
        "Flush left, all caps, no icons. Wordmark and four tracked links sit on one thick black rule. The rule is the divider, with no border and no shadow.",
      code: `export const NavBar = () => (
  <header className="flex h-14 w-full items-center justify-between border-b-4 border-[#111111] bg-white px-6">
    <span className="font-sans text-[17px] font-extrabold uppercase tracking-[0.08em] text-[#111111]">acme</span>
    <nav className="flex gap-6">
      {["Product", "Pricing", "Changelog", "Docs"].map((item) => (
        <a key={item} href="#" className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#111111] transition-colors hover:text-[#E30613]">{item}</a>
      ))}
    </nav>
  </header>
);`,
      size: "wideShort",
      preview: (
        <div className="flex h-full w-full flex-col justify-center rounded-md">
          <div className="flex h-14 w-full items-center justify-between border-b-4 border-[#111111] bg-white px-6">
            <span className="font-sans text-[17px] font-extrabold uppercase tracking-[0.08em] text-[#111111]">acme</span>
            <nav className="flex gap-6">
              {["Product", "Pricing", "Changelog", "Docs"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#111111] transition-colors hover:text-[#E30613]"
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
    "Set the grid first, then place everything on it.",
    "Flush left, ragged right, generous margins, one accent color.",
    "Set display type uppercase at monumental scale.",
    "Use horizontal rules and numbered blocks, never decoration.",
  ],
  donts: [
    "Don't center text. Left alignment is the style's moral compass.",
    "Don't round corners, add shadows or decorate.",
    "Don't mix typefaces. Neue Haas Grotesk alone, at three weights.",
    "Don't use more than one accent color: red, or none.",
  ],
};
