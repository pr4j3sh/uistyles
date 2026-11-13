import type { StyleContent } from "@/lib/style-content";

export const skeuomorphism: StyleContent = {
  theme: {
    base: "#E8E4DF",
    background: "linear-gradient(180deg,#EDEAE4 0%,#E3DFD7 100%)",
    surface: "#FBF8F3",
    surface2: "#F3EEE7",
    line: "#C9C3B8",
    text: "#26221C",
    muted: "#7A7265",
    accent: "#1D6FCB",
    radius: "10px",
    display: "font-sans font-bold tracking-[-0.01em]",
    displayItalicLast: false,
    shadow: "0 1px 2px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.25)",
  },
  what: "Skeuomorphism makes the digital object look like its physical ancestor — linen texture on the canvas, brushed metal on chrome, aqua-lacquer buttons with a specular highlight, paper stock for documents. Depth, material and light do the affording; words come second.",
  origin: "The language of pre-flat Apple — OS X Aqua (2001), iOS 1–6 (2007–2013) — built to teach desktop newcomers by mimicking real objects: calendar stitches, green leather contacts, linen backgrounds. Apple killed it with iOS 7, flat design proving interfaces needed no ancestors.",
  bestFor: [
    "Nostalgia and retro product brands",
    "Toy-like, playful interfaces and games",
    "Tactile, heavyweight showcases",
    "Design-history education",
  ],
  avoid: [
    "Dense product UI",
    "Content-first reading contexts",
    "Performance-sensitive pages (textures cost bytes)",
    "Anything needing long-term maintenance",
  ],
  palette: [
    { name: "Linen", hex: "#E8E4DF", role: "Canvas — woven stock" },
    { name: "Paper", hex: "#FBF8F3", role: "Document surfaces" },
    { name: "Meta", hex: "#B9B9BE", role: "Brushed metal chrome" },
    { name: "Aqua", hex: "#1D6FCB", role: "Action lacquer" },
    { name: "Ink", hex: "#26221C", role: "Type & hairlines" },
    { name: "Leather", hex: "#8A5A2B", role: "Leather accents" },
  ],
  typography: [
    { role: "Body / UI", family: "Helvetica Neue / Arial — 400 / 700", note: "Helvetica was Apple's house voice here; bold white over aqua with a soft text-shadow." },
    { role: "Display", family: "Instrument Serif — 400 / italic", note: "For document mastheads and 'printed' moments — serif here reads as paper." },
    { role: "Metadata", family: "JetBrains Mono — 9–11px", note: "Engraved label style for tactile controls. Uppercase, tracked." },
  ],
  components: [
    {
      name: "Button",
      description:
        "The Aqua slab. A vertical blue gradient with a specular line across the top third, a darkening bottom edge, white bold text with a soft shadow — and a press that physically displaces.",
      code: `export const PrimaryButton = () => (
  <button
    className="h-11 rounded-xl border border-[#0A4A8A] bg-gradient-to-b from-[#8FCBF9] via-[#2E8CD6] to-[#1A5FA8] px-6 text-sm font-bold text-white shadow-[0_2px_4px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.7)] transition-all [text-shadow:0_-1px_0_rgba(0,0,0,0.45)] hover:from-[#A8D7FC] hover:via-[#3A97DE] hover:to-[#1D6FCB] active:from-[#1661A8] active:to-[#0F4E85] active:shadow-[0_1px_2px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(0,0,0,0.5)]"
  >
    Get started
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-col items-center gap-3 s-panel rounded-2xl p-4">
          <button
            className="h-11 rounded-xl border border-[#0A4A8A] bg-gradient-to-b from-[#8FCBF9] via-[#2E8CD6] to-[#1A5FA8] px-6 text-sm font-bold text-white shadow-[0_2px_4px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.7)] transition-all [text-shadow:0_-1px_0_rgba(0,0,0,0.45)] hover:from-[#A8D7FC] hover:via-[#3A97DE] hover:to-[#1D6FCB] active:from-[#1661A8] active:to-[#0F4E85] active:shadow-[0_1px_2px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(0,0,0,0.5)]"
          >
            Get started
          </button>
          <button className="text-xs font-bold text-[#1A5FA8] underline underline-offset-2 [text-shadow:0_1px_0_rgba(255,255,255,0.8)]">
            or read the manual
          </button>
        </div>
      ),
    },
    {
      name: "Input",
      description:
        "An inset glass well. A hard inner shadow bites the top-left, a single bottom-right highlight rims it, and anything typed sinks below the surface.",
      code: `export const EmailField = () => (
  <label className="block w-60">
    <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.3em] text-[#3F3A30] [text-shadow:0_1px_0_rgba(255,255,255,0.8)]">Email</span>
    <input
      type="email"
      placeholder="you@company.com"
      className="w-full rounded-md border border-[#C9C3B8] bg-[#FDFCF9] px-4 py-2.5 text-[14px] text-[#26221C] shadow-[inset_0_2px_4px_rgba(0,0,0,0.25),inset_0_-1px_0_rgba(255,255,255,0.9)] outline-none placeholder:text-[#A89E8C]"
    />
  </label>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-col items-center s-panel rounded-2xl p-4">
          <label className="w-full">
            <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.3em] text-[#3F3A30] [text-shadow:0_1px_0_rgba(255,255,255,0.8)]">Email</span>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-md border border-[#C9C3B8] bg-[#FDFCF9] px-4 py-2.5 text-[14px] text-[#26221C] shadow-[inset_0_2px_4px_rgba(0,0,0,0.25),inset_0_-1px_0_rgba(255,255,255,0.9)] outline-none placeholder:text-[#A89E8C]"
            />
          </label>
        </div>
      ),
    },
    {
      name: "Badge",
      description:
        "A stitched leather tag. Dashed inner border, warm brown hide, pale stitch marks — the calendar's secret family tree.",
      code: `export const StatusBadge = () => (
  <span className="inline-flex items-center gap-2 rounded-sm border-2 border-dashed border-[#C9A87C] bg-gradient-to-b from-[#A8754A] to-[#7A5025] px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[#FBF1DE] [text-shadow:0_1px_1px_rgba(0,0,0,0.6)]">
    Stable
  </span>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-wrap items-center justify-center gap-2 s-panel rounded-2xl p-4">
          <span className="inline-flex items-center gap-2 rounded-sm border-2 border-dashed border-[#C9A87C] bg-gradient-to-b from-[#A8754A] to-[#7A5025] px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[#FBF1DE] [text-shadow:0_1px_1px_rgba(0,0,0,0.6)]">
            Stable
          </span>
          <span className="inline-flex items-center gap-2 rounded-sm border border-[#C9C3B8] bg-[#FBF8F3] px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[#4A4436] [text-shadow:0_1px_0_rgba(255,255,255,0.8)]">
            v2.4.0
          </span>
        </div>
      ),
    },
    {
      name: "Card",
      description:
        "Heavyweight paper under a real drop shadow. Deckle edge via a double border and a serif masthead feel — a document you can lift.",
      code: `export const ChangelogCard = () => (
  <div className="w-64 border-2 border-[#C9C3B8] bg-[#FBF8F3] p-6 shadow-[0_6px_18px_rgba(0,0,0,0.35),inset_0_1px_0_#FFFFFF] [background-image:repeating-linear-gradient(0deg,transparent_0_3px,rgba(0,0,0,0.015)_3px_4px)]">
    <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#7A7265]">Changelog</p>
    <h3 className="mt-2 font-serif text-xl leading-snug text-[#26221C]">Faster search, fewer keystrokes.</h3>
    <p className="mt-2 text-xs leading-relaxed text-[#7A7265]">Results stream in as you type; queries now run in 80ms.</p>
  </div>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-col justify-center s-panel rounded-2xl p-4">
          <div className="w-full border-2 border-[#C9C3B8] bg-[#FBF8F3] p-6 shadow-[0_6px_18px_rgba(0,0,0,0.35),inset_0_1px_0_#FFFFFF] [background-image:repeating-linear-gradient(0deg,transparent_0_3px,rgba(0,0,0,0.015)_3px_4px)]">
            <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#7A7265]">Changelog</p>
            <h3 className="mt-2 font-serif text-xl leading-snug text-[#26221C]">Faster search, fewer keystrokes.</h3>
            <p className="mt-2 text-xs leading-relaxed text-[#7A7265]">Results stream in as you type; queries now run in 80ms.</p>
          </div>
        </div>
      ),
    },
    {
      name: "Nav bar",
      description:
        "Brushed metal chrome: vertical highlight-to-shade gradient, hairline seam, engraved icons. The OS X Tiger joke, played straight.",
      code: `export const NavBar = () => (
  <header className="flex h-14 w-full items-center justify-between border-b border-[#8F8F94] bg-gradient-to-b from-[#EFEFEF] via-[#C9C9CD] to-[#9A9AA0] px-4 shadow-[inset_0_1px_0_#FFFFFF,0_1px_3px_rgba(0,0,0,0.5)]">
    <span className="text-[17px] font-bold text-[#3F3F44] [text-shadow:0_1px_0_rgba(255,255,255,0.9)]">acme<span className="text-[#1D6FCB]">.</span></span>
    <div className="flex gap-2">
      <button aria-label="Menu" className="flex h-9 w-9 items-center justify-center rounded-md border border-[#8F8F94] bg-gradient-to-b from-[#E4E4E7] to-[#B9B9BE] text-[#3F3F44] shadow-[inset_0_1px_0_#FFFFFF,0_1px_2px_rgba(0,0,0,0.4)] active:shadow-[inset_0_1px_3px_rgba(0,0,0,0.4)]">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden><path d="M2 4h11M2 7.5h11M2 11h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
      </button>
      <button aria-label="Search" className="flex h-9 w-9 items-center justify-center rounded-md border border-[#8F8F94] bg-gradient-to-b from-[#E4E4E7] to-[#B9B9BE] text-[#3F3F44] shadow-[inset_0_1px_0_#FFFFFF,0_1px_2px_rgba(0,0,0,0.4)] active:shadow-[inset_0_1px_3px_rgba(0,0,0,0.4)]">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden><circle cx="6.8" cy="6.8" r="4.4" stroke="currentColor" strokeWidth="1.5" /><path d="M10.5 10.5L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
      </button>
    </div>
  </header>
);`,
      size: "wideShort",
      preview: (
        <div className="flex h-full w-full flex-col justify-center rounded-md">
          <div className="flex h-14 w-full items-center justify-between border-b border-[#8F8F94] bg-gradient-to-b from-[#EFEFEF] via-[#C9C9CD] to-[#9A9AA0] px-4 shadow-[inset_0_1px_0_#FFFFFF,0_1px_3px_rgba(0,0,0,0.5)]">
            <span className="text-[17px] font-bold text-[#3F3F44] [text-shadow:0_1px_0_rgba(255,255,255,0.9)]">acme<span className="text-[#1D6FCB]">.</span></span>
            <div className="flex gap-2">
              <button aria-label="Menu" className="flex h-9 w-9 items-center justify-center rounded-md border border-[#8F8F94] bg-gradient-to-b from-[#E4E4E7] to-[#B9B9BE] text-[#3F3F44] shadow-[inset_0_1px_0_#FFFFFF,0_1px_2px_rgba(0,0,0,0.4)] active:shadow-[inset_0_1px_3px_rgba(0,0,0,0.4)]">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden><path d="M2 4h11M2 7.5h11M2 11h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </button>
              <button aria-label="Search" className="flex h-9 w-9 items-center justify-center rounded-md border border-[#8F8F94] bg-gradient-to-b from-[#E4E4E7] to-[#B9B9BE] text-[#3F3F44] shadow-[inset_0_1px_0_#FFFFFF,0_1px_2px_rgba(0,0,0,0.4)] active:shadow-[inset_0_1px_3px_rgba(0,0,0,0.4)]">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden><circle cx="6.8" cy="6.8" r="4.4" stroke="currentColor" strokeWidth="1.5" /><path d="M10.5 10.5L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </button>
            </div>
          </div>
        </div>
      ),
    },
  ],
  dos: [
    "Pick ONE material per surface and rendered honestly — linen, metal, lacquer or paper",
    "Light source above 10-o'clock — highlights on top, shade below, always",
    "Press states must physically displace, not merely darken",
    "Use CSS gradients for textures — never stock photos",
  ],
  donts: [
    "Don't mix more than two materials on one screen",
    "Don't use photos of real linen/leather/wood — gradients, not images",
    "Don't add thin drop shadows — skeuomorph drops belong deep",
    "Don't use flat hover states — press, don't glow",
  ],
};
