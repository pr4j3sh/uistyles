import type { StyleContent } from "@/lib/style-content";

export const editorialDesign: StyleContent = {
  theme: {
    base: "#FDFBF7",
    background: "#FDFBF7",
    surface: "#FFFFFF",
    surface2: "#F3EFE7",
    line: "#141414",
    text: "#141414",
    muted: "#6B6660",
    accent: "#8C2B1D",
    radius: "2px",
    display: "font-serif tracking-tight",
    displayItalicLast: true,
  },
  what: "Editorial design treats the page like a magazine spread — typography first, imagery as documentary support, hierarchy told through kicker, hed, dek and byline. It is the visual grammar of considered publishing: every element has a reading order and a reason to exist.",
  origin: "From broadsheets and literary magazines through the New York Times web era to Substack and Ghost, editorial design is what happens when a publication trusts its typography more than its chrome — the page reads like print translated to screen.",
  bestFor: [
    "Newsletters and independent publishing",
    "Media brands with a point of view",
    "Long-form features and essays",
    "Commerce pages with strong stories (lookbooks, guides)",
  ],
  avoid: [
    "Dashboards and dense transactional UI",
    "Playful or toy-like products",
    "Flows where scanning a table beats reading an argument",
  ],
  palette: [
    { name: "Paper", hex: "#FDFBF7", role: "Ground — warm stock" },
    { name: "Ink", hex: "#141414", role: "Body type" },
    { name: "Oxblood", hex: "#8C2B1D", role: "Kickers & rules" },
    { name: "Gray", hex: "#6B6660", role: "Bylines & captions" },
    { name: "Rule", hex: "#141414", role: "Hairlines & dividers" },
    { name: "Sand", hex: "#F3EFE7", role: "Sunken panels & pull-quotes" },
  ],
  typography: [
    { role: "Display", family: "Instrument Serif — 400 italic & roman", note: "Heds at 44–72px, tight leading, optical alignment. Italic for emphasis, not whole sentences." },
    { role: "Body", family: "Inter — 400 / 500", note: "16–17px/1.6 on a 60–75ch measure. Flush-left, ragged-right, hyphenate rarely." },
    { role: "Kicker / Byline", family: "JetBrains Mono — 9–11px", note: "Uppercase, tracked, oxblood for kickers; gray for bylines and folio metadata." },
  ],
  components: [
    {
      name: "Button",
      description:
        "An understated, letter-pressed control — hairline black border, tracked caps, generous padding; fills black (or oxblood) on hover. Nothing glows, nothing floats.",
      code: `export const PrimaryButton = () => (
  <button className="inline-flex items-center gap-3 border border-[#141414] bg-transparent px-6 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#141414] transition-colors hover:bg-[#141414] hover:text-[#FDFBF7]">
    Subscribe
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-col items-center gap-3 s-panel rounded-md p-4">
          <button className="inline-flex items-center gap-3 border border-[#141414] bg-transparent px-6 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#141414] transition-colors hover:bg-[#141414] hover:text-[#FDFBF7]">
            Subscribe
          </button>
          <button className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C2B1D] underline underline-offset-4 transition-colors hover:text-[#141414]">
            Read the issue
          </button>
        </div>
      ),
    },
    {
      name: "Input",
      description:
        "A field that reads like a line in a letter — hairline rule under the value, uppercase micro-label above, focus thickens the rule to oxblood. Fill is optional and always paper-toned.",
      code: `export const EmailField = () => (
  <label className="block w-60">
    <span className="mb-2 block font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-[#6B6660]">Email</span>
    <input
      type="email"
      placeholder="you@company.com"
      className="w-full border-b border-[#141414] bg-transparent pb-2 pt-1 font-serif text-[17px] italic text-[#141414] outline-none transition-all placeholder:text-[#A8A294] focus:border-b-2 focus:border-[#8C2B1D] focus:pb-[7px]"
    />
  </label>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-col items-center s-panel rounded-md p-4">
          <label className="w-full">
            <span className="mb-2 block font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-[#6B6660]">Email</span>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full border-b border-[#141414] bg-transparent pb-2 pt-1 font-serif text-[17px] italic text-[#141414] outline-none transition-all placeholder:text-[#A8A294] focus:border-b-2 focus:border-[#8C2B1D] focus:pb-[7px]"
            />
          </label>
        </div>
      ),
    },
    {
      name: "Badge",
      description:
        "A kicker you can press. Hairline-bordered, tracked caps, oxblood or ink on paper — never a filled pill; this is a magazine, not an app bar.",
      code: `export const KickerChip = () => (
  <button className="inline-flex items-center gap-2 border border-[#8C2B1D] bg-transparent px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8C2B1D] transition-colors hover:bg-[#8C2B1D] hover:text-[#FDFBF7]">
    Culture
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-wrap items-center justify-center gap-2 s-panel rounded-md p-4">
          <button className="inline-flex items-center gap-2 border border-[#8C2B1D] bg-transparent px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8C2B1D] transition-colors hover:bg-[#8C2B1D] hover:text-[#FDFBF7]">
            Culture
          </button>
          <button className="inline-flex items-center gap-2 border border-[#141414] bg-transparent px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-[#141414] transition-colors hover:bg-[#141414] hover:text-[#FDFBF7]">
            Analysis
          </button>
          <button className="inline-flex items-center gap-2 border border-[#A8A294] bg-transparent px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-[#6B6660]">
            6 min read
          </button>
        </div>
      ),
    },
    {
      name: "Card",
      description:
        "The article card. Oxblood kicker, one line hed in serif, byline in tracked caps — the hairline below does the cropping, the hed does the persuading.",
      code: `export const ArticleCard = () => (
  <article className="w-64 border-t-2 border-[#141414] bg-white py-4">
    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8C2B1D]">The Grid</p>
    <h3 className="mt-2 font-serif text-[22px] leading-[1.15] tracking-tight text-[#141414]">Faster search, fewer keystrokes.</h3>
    <p className="mt-2 font-sans text-[10px] uppercase tracking-[0.22em] text-[#6B6660]">By Ada · 6 min read</p>
  </article>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-col justify-center s-panel rounded-md p-4">
          <article className="w-full border-t-2 border-[#141414] bg-white py-4">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8C2B1D]">The Grid</p>
            <h3 className="mt-2 font-serif text-[22px] leading-[1.15] tracking-tight text-[#141414]">Faster search, fewer keystrokes.</h3>
            <p className="mt-2 font-sans text-[10px] uppercase tracking-[0.22em] text-[#6B6660]">By Ada · 6 min read</p>
          </article>
        </div>
      ),
    },
    {
      name: "Nav bar",
      description:
        "The masthead: serif wordmark at real size, section names tracked in caps below a double rule — two hairlines, one thick one thin — the NYT trick.",
      code: `export const Masthead = () => (
  <header className="flex h-16 w-full items-center justify-between border-y-4 border-double border-t-[3px] border-b border-[#141414] bg-[#FDFBF7] px-6">
    <span className="font-serif text-2xl tracking-tight text-[#141414]">The Ledger</span>
    <nav className="flex gap-5">
      {["Politics", "Tech", "Culture", "Books"].map((item) => (
        <a key={item} href="#" className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-[#141414] transition-colors hover:text-[#8C2B1D]">{item}</a>
      ))}
    </nav>
  </header>
);`,
      size: "wideShort",
      preview: (
        <div className="flex h-full w-full flex-col justify-center rounded-md">
          <div className="flex h-16 w-full items-center justify-between border-y-4 border-double border-t-[3px] border-b border-[#141414] bg-[#FDFBF7] px-6">
            <span className="font-serif text-2xl tracking-tight text-[#141414]">The Ledger</span>
            <nav className="flex gap-5">
              {["Politics", "Tech", "Culture", "Books"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-[#141414] transition-colors hover:text-[#8C2B1D]"
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
    "Keep measure at 60–75 characters — the line length is the design",
    "Use kicker → hed → dek → byline in that exact order, every time",
    "Double-rule the masthead: thick hairline above, thin below",
    "One oxblood kicker per screen; everything else stays ink and paper",
  ],
  donts: [
    "Don't center paragraphs — flush-left is non-negotiable",
    "Don't exceed two typefaces — serif display, grotesque body, done",
    "Don't fill blocks with solid color — rules and type are the structure",
    "Don't use drop shadows, glows or rounded UI chrome",
  ],
};
