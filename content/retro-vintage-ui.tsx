import type { StyleContent } from "@/lib/style-content";

export const retroVintageUi: StyleContent = {
  theme: {
    base: "#F3E7CE",
    background:
      "radial-gradient(1200px 620px at 50% -12%, #FBF3E2 0%, rgba(251,243,226,0) 70%), #F3E7CE",
    surface: "#FAF1DE",
    surface2: "#EFE0C2",
    line: "rgba(43,30,20,0.2)",
    text: "#2B1E14",
    muted: "#7A6248",
    accent: "#C14A2A",
    radius: "6px",
    display: "font-serif font-medium tracking-[-0.01em]",
    displaySize: "clamp(2.2rem, min(7.5vh, 9vw), 4.4rem)",
    displayItalicLast: false,
    shadow: "0 1px 0 rgba(43,30,20,0.06), 4px 4px 0 rgba(43,30,20,0.08)",
  },
  what: "Retro / Vintage UI is print nostalgia translated to screen: cream paper, burnt orange and mustard inks, chunky serif headlines, letterpress-style offset shadows, labels set like a 1970s catalogue. It feels handled, not rendered.",
  origin: "It draws from 1960s and 70s print: Penguin paperbacks, the Whole Earth Catalog, Swiss travel posters and letterpress job printing. The 2010s analog revival in branding and independent publishing brought it back.",
  bestFor: [
    "Coffee, food and hospitality brands",
    "Independent publishers and record labels",
    "Craft goods and heritage products",
    "Events with a warm, human tone",
  ],
  avoid: [
    "Real-time dashboards and dense tooling",
    "Safety-critical or clinical products",
    "Brands that need to read as futuristic",
  ],
  palette: [
    { name: "Paper", hex: "#F3E7CE", role: "Canvas, aged cream stock" },
    { name: "Ink", hex: "#2B1E14", role: "Text, warm letterpress black" },
    { name: "Burnt", hex: "#C14A2A", role: "Primary ink, burnt orange" },
    { name: "Mustard", hex: "#D9A036", role: "Secondary ink, labels" },
    { name: "Olive", hex: "#6E7A46", role: "Tertiary ink, stamps" },
    { name: "Teal", hex: "#2F6B63", role: "Cool counterpoint, links" },
  ],
  typography: [
    { role: "Display", family: "Instrument Serif, 400 / 500", note: "44 to 64px, tight leading, warm ink. One weight, no faux bold." },
    { role: "Body", family: "Inter, 400 / 500", note: "14-15px/1.55. A quiet grotesque keeps the serif headline special." },
    { role: "Spec", family: "JetBrains Mono, 9-11px", note: "Catalogue labels: EST. 1974 / VOL. II / NO. 024. Always uppercase, tracked." },
  ],
  components: [
    {
      name: "Button",
      description:
        "A letterpress block: burnt orange ink, two-pixel warm-black keyline, offset hard shadow. Pressing it pushes the block into the paper.",
      code: `export const PrimaryButton = () => (
  <button className="h-11 rounded-[4px] border-2 border-[#2B1E14] bg-[#C14A2A] px-6 font-serif text-base font-semibold text-[#FAF1DE] shadow-[3px_3px_0_#2B1E14] transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_#2B1E14]">
    Get started
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-col items-start gap-3 s-panel rounded-xl p-5">
          <button className="h-11 rounded-[4px] border-2 border-[#2B1E14] bg-[#C14A2A] px-6 font-serif text-base font-semibold text-[#FAF1DE] shadow-[3px_3px_0_#2B1E14] transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_#2B1E14]">
            Get started
          </button>
          <a href="#" className="font-serif text-sm italic text-[#2F6B63] underline underline-offset-4 decoration-[#2F6B63]/40">
            Est. 1974, read our story
          </a>
        </div>
      ),
    },
    {
      name: "Input",
      description:
        "A ruled correspondence field: cream stock, warm-black keyline, serif placeholder. Focus sinks the paper instead of lighting up.",
      code: `export const EmailField = () => (
  <label className="block w-60">
    <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.28em] text-[#7A6248]">Correspondence</span>
    <input
      type="email"
      placeholder="you@company.com"
      className="h-11 w-full rounded-[4px] border-2 border-[#2B1E14] bg-[#FAF1DE] px-4 font-serif text-base text-[#2B1E14] outline-none transition-shadow caret-[#C14A2A] placeholder:italic placeholder:text-[#A08B6E] focus:bg-white focus:shadow-[inset_2px_2px_0_rgba(43,30,20,0.12)]"
    />
  </label>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-col items-center s-panel rounded-xl p-5">
          <label className="w-full">
            <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.28em] text-[#7A6248]">Correspondence</span>
            <input
              type="email"
              placeholder="you@company.com"
              className="h-11 w-full rounded-[4px] border-2 border-[#2B1E14] bg-[#FAF1DE] px-4 font-serif text-base text-[#2B1E14] outline-none transition-shadow caret-[#C14A2A] placeholder:italic placeholder:text-[#A08B6E] focus:bg-white focus:shadow-[inset_2px_2px_0_rgba(43,30,20,0.12)]"
            />
          </label>
        </div>
      ),
    },
    {
      name: "Badge",
      description:
        "A rubber stamp: dashed keyline, uppercase mono, slightly rotated so it never looks machine placed. Two inks, never more.",
      code: `export const StatusBadge = () => (
  <span className="-rotate-2 inline-flex items-center border border-dashed border-[#C14A2A] px-3 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.28em] text-[#C14A2A]">
    Est. 1974
  </span>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-wrap items-center justify-center gap-3 s-panel rounded-xl p-5">
          <span className="-rotate-2 inline-flex items-center border border-dashed border-[#C14A2A] px-3 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.28em] text-[#C14A2A]">
            Est. 1974
          </span>
          <span className="rotate-1 inline-flex items-center border border-dashed border-[#6E7A46] px-3 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.28em] text-[#6E7A46]">
            No. 024
          </span>
        </div>
      ),
    },
    {
      name: "Card",
      description:
        "A catalogue clipping: cream stock, warm keyline, offset shadow, mono folio above a serif headline. Body copy stays italic, like a caption.",
      code: `export const ChangelogCard = () => (
  <article className="w-64 rounded-[4px] border-2 border-[#2B1E14] bg-[#FAF1DE] p-4 shadow-[4px_4px_0_rgba(43,30,20,0.18)]">
    <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#C14A2A]">Vol. II / No. 4</p>
    <h3 className="mt-2 font-serif text-xl font-medium leading-tight text-[#2B1E14]">Faster search, fewer keystrokes.</h3>
    <p className="mt-2 font-serif text-[12px] italic leading-snug text-[#7A6248]">{"// results stream in as you type; queries now 80ms"}</p>
  </article>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-col justify-center s-panel rounded-xl p-4">
          <article className="w-full rounded-[4px] border-2 border-[#2B1E14] bg-[#FAF1DE] p-4 shadow-[4px_4px_0_rgba(43,30,20,0.18)]">
            <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#C14A2A]">Vol. II / No. 4</p>
            <h3 className="mt-2 font-serif text-xl font-medium leading-tight text-[#2B1E14]">Faster search, fewer keystrokes.</h3>
            <p className="mt-2 font-serif text-[12px] italic leading-snug text-[#7A6248]">{"// results stream in as you type; queries now 80ms"}</p>
          </article>
        </div>
      ),
    },
    {
      name: "Nav bar",
      description:
        "A shopfront fascia: cream board, double bottom rule, serif wordmark with an ampersand. Links are small mono caps, underlined on hover.",
      code: `export const NavBar = () => (
  <header className="flex h-12 w-full items-center justify-between border-b-2 border-[#2B1E14] bg-[#FAF1DE] px-4 shadow-[inset_0_-4px_0_rgba(43,30,20,0.08)]">
    <span className="font-serif text-lg font-medium tracking-tight text-[#2B1E14]">Acme <span className="text-[#C14A2A]">&amp;</span> Co.</span>
    <nav className="flex gap-5">
      {["SHOP", "JOURNAL", "ABOUT"].map((item) => (
        <a key={item} href="#" className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#7A6248] underline-offset-4 transition-colors hover:text-[#2B1E14] hover:underline">{item}</a>
      ))}
    </nav>
  </header>
);`,
      size: "wideShort",
      preview: (
        <div className="flex h-full w-full flex-col justify-center rounded-md">
          <div className="flex h-12 w-full items-center justify-between border-b-2 border-[#2B1E14] bg-[#FAF1DE] px-4 shadow-[inset_0_-4px_0_rgba(43,30,20,0.08)]">
            <span className="font-serif text-lg font-medium tracking-tight text-[#2B1E14]">Acme <span className="text-[#C14A2A]">&amp;</span> Co.</span>
            <nav className="flex gap-5">
              {["SHOP", "JOURNAL", "ABOUT"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#7A6248] underline-offset-4 transition-colors hover:text-[#2B1E14] hover:underline"
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
    "Cream stock, never pure white. #F3E7CE sets the mood.",
    "Two inks per composition: warm black plus one of burnt, mustard or olive.",
    "Use offset hard shadows only. Letterpress, never Gaussian blur.",
    "Serif for voice, mono for labels. Never the reverse.",
  ],
  donts: [
    "Don't add gradients or gloss. Vintage is flat ink on absorbent paper.",
    "Don't use more than three inks. The catalogue collapses into carnival.",
    "Don't round corners past 6px. Letterpress blocks have edges.",
    "Don't set long body copy in the display serif. Save it for headlines.",
  ],
};
