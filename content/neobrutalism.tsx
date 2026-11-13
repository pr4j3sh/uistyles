import type { StyleContent } from "@/lib/style-content";

export const neobrutalism: StyleContent = {
  theme: {
    base: "#FFFDF5",
    background: "#FFFDF5",
    surface: "#FFFFFF",
    surface2: "#FBF6E9",
    line: "#111111",
    text: "#111111",
    muted: "#5B584C",
    accent: "#FFDC58",
    radius: "12px",
    display: "font-sans font-black tracking-[-0.02em]",
    displayItalicLast: false,
    shadow: "6px 6px 0 #111111",
  },
  what: "Neobrutalism is Brutalism with the volume turned up: thick black borders, hard offset shadows with zero blur, saturated pastels, chunky type. It is the internet winking at raw web culture, rude on purpose and playful underneath.",
  origin: "It descends directly from the 2014 brutalist web revival, tempered by the 2019 to 2021 webcore and arcade aesthetic and Webflow's default templates. It became the look of indie dev tools, zine sites and a generation raised on MSN Messenger and Neopets.",
  bestFor: [
    "Indie dev tools and CLI toys",
    "Creative portfolios with a wink",
    "Big loud launches and event pages",
    "Brands with strong opinions and zero pretense",
  ],
  avoid: [
    "Enterprise and financial UI",
    "Calm, premium editorial commerce",
    "Accessibility-critical dense tables",
  ],
  palette: [
    { name: "Cream", hex: "#FFFDF5", role: "Ground, newsprint paper" },
    { name: "Ink", hex: "#111111", role: "Borders and type" },
    { name: "Signal", hex: "#FFDC58", role: "Action slabs and highlights" },
    { name: "Coral", hex: "#FF6B9D", role: "Secondary accent" },
    { name: "Blue", hex: "#6FA8FF", role: "Link and water" },
    { name: "Mint", hex: "#B9FBC0", role: "Success and pastels" },
  ],
  typography: [
    { role: "Display", family: "Inter, 800 / 900", note: "32 to 64px, tight tracking, sentence case with one shouty word. No italics, no serif." },
    { role: "Body", family: "Inter, 400 / 500", note: "15px/1.5. Slightly tighter than editorial, never shouting." },
    { role: "Metadata", family: "JetBrains Mono, 9-11px", note: "Field notes and labels. Uppercase, tracked, always in a bordered cell." },
  ],
  components: [
    {
      name: "Button",
      description:
        "A slab of yellow with black edging and a hard offset shadow. Hover translates it to meet its shadow; press jams it shut.",
      code: `export const PrimaryButton = () => (
  <button className="h-12 rounded-xl border-2 border-[#111111] bg-[#FFDC58] px-6 text-sm font-black uppercase tracking-[0.1em] text-[#111111] shadow-[4px_4px_0_#111111] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#111111] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_#111111]">
    Get started
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-col items-start gap-3 s-panel rounded-2xl p-4">
          <button className="h-12 rounded-xl border-2 border-[#111111] bg-[#FFDC58] px-6 text-sm font-black uppercase tracking-[0.1em] text-[#111111] shadow-[4px_4px_0_#111111] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#111111] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_#111111]">
            Get started
          </button>
          <button className="font-sans text-sm font-bold text-[#111111] underline underline-offset-4 decoration-2 hover:decoration-[#FF6B9D]">
            or read the docs
          </button>
        </div>
      ),
    },
    {
      name: "Input",
      description:
        "Bordered like it means it: 2px black outline on paper, hard offset shadow, mono caret. No soft focus ring; the field sits proud of the page.",
      code: `export const EmailField = () => (
  <label className="block w-60">
    <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.25em] text-[#111111]">Email</span>
    <input
      type="email"
      placeholder="you@company.com"
      className="h-12 w-full rounded-xl border-2 border-[#111111] bg-white px-4 font-mono text-sm text-[#111111] outline-none shadow-[3px_3px_0_#111111] placeholder:text-[#B8B4A3] focus:shadow-[3px_3px_0_#FF6B9D]"
    />
  </label>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-col items-center s-panel rounded-2xl p-4">
          <label className="w-full">
            <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.25em] text-[#111111]">Email</span>
            <input
              type="email"
              placeholder="you@company.com"
              className="h-12 w-full rounded-xl border-2 border-[#111111] bg-white px-4 font-mono text-sm text-[#111111] outline-none shadow-[3px_3px_0_#111111] placeholder:text-[#B8B4A3] focus:shadow-[3px_3px_0_#FF6B9D]"
            />
          </label>
        </div>
      ),
    },
    {
      name: "Badge",
      description:
        "Tiny loud stickers: candy fills with black edging and a mini offset shadow. Pink for status, yellow for version, mint for success.",
      code: `export const StatusBadge = () => (
  <span className="inline-flex items-center gap-2 rounded-lg border-2 border-[#111111] bg-[#FF6B9D] px-3 py-1 font-mono text-[9px] font-black uppercase tracking-[0.25em] text-[#111111] shadow-[2px_2px_0_#111111]">
    Stable
  </span>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-wrap items-center justify-center gap-2 s-panel rounded-2xl p-4">
          <span className="inline-flex items-center gap-2 rounded-lg border-2 border-[#111111] bg-[#FF6B9D] px-3 py-1 font-mono text-[9px] font-black uppercase tracking-[0.25em] text-[#111111] shadow-[2px_2px_0_#111111]">
            Stable
          </span>
          <span className="inline-flex items-center gap-2 rounded-lg border-2 border-[#111111] bg-[#FFDC58] px-3 py-1 font-mono text-[9px] font-black uppercase tracking-[0.25em] text-[#111111] shadow-[2px_2px_0_#111111]">
            v2.4.0
          </span>
        </div>
      ),
    },
    {
      name: "Card",
      description:
        "A slab of printed newsprint with a black edge and a drop that punches. Hed at full weight, body in mono for that telex-printer hum.",
      code: `export const ChangelogCard = () => (
  <article className="w-64 rounded-2xl border-2 border-[#111111] bg-white p-5 shadow-[6px_6px_0_#111111]">
    <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#5B584C]">CHNG-LOG / 002</p>
    <h3 className="mt-2 font-sans text-xl font-black leading-[1.05] tracking-tight text-[#111111]">Faster search, fewer keystrokes.</h3>
    <p className="mt-3 border-t-2 border-[#111111] pt-3 font-mono text-[10px] leading-snug text-[#5B584C]">Results stream in as you type; queries now run in 80ms.</p>
  </article>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-col justify-center s-panel rounded-2xl p-4">
          <article className="w-full rounded-2xl border-2 border-[#111111] bg-white p-5 shadow-[6px_6px_0_#111111]">
            <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#5B584C]">CHNG-LOG / 002</p>
            <h3 className="mt-2 font-sans text-xl font-black leading-[1.05] tracking-tight text-[#111111]">Faster search, fewer keystrokes.</h3>
            <p className="mt-3 border-t-2 border-[#111111] pt-3 font-mono text-[10px] leading-snug text-[#5B584C]">Results stream in as you type; queries now run in 80ms.</p>
          </article>
        </div>
      ),
    },
    {
      name: "Nav bar",
      description:
        "A sticker bar: white with a 3px black bottom edge and a coral logo dot chunky enough to read from orbit.",
      code: `export const NavBar = () => (
  <header className="flex h-16 w-full items-center justify-between border-b-[3px] border-[#111111] bg-[#FFFDF5] px-4">
    <span className="flex items-center gap-2 text-lg font-black tracking-tight text-[#111111]">
      <span className="h-4 w-4 rounded-full border-2 border-[#111111] bg-[#FF6B9D]" aria-hidden />
      acme
    </span>
    <nav className="flex gap-5">
      {["FEED", "DOCS", "ABOUT"].map((item) => (
        <a key={item} href="#" className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#111111] underline underline-offset-4 decoration-2 hover:decoration-[#FF6B9D]">{item}</a>
      ))}
    </nav>
  </header>
);`,
      size: "wideShort",
      preview: (
        <div className="flex h-full w-full flex-col justify-center rounded-md">
          <div className="flex h-16 w-full items-center justify-between border-b-[3px] border-[#111111] bg-[#FFFDF5] px-4">
            <span className="flex items-center gap-2 text-lg font-black tracking-tight text-[#111111]">
              <span className="h-4 w-4 rounded-full border-2 border-[#111111] bg-[#FF6B9D]" aria-hidden />
              acme
            </span>
            <nav className="flex gap-5">
              {["FEED", "DOCS", "ABOUT"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#111111] underline underline-offset-4 decoration-2 transition-colors hover:decoration-[#FF6B9D]"
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
    "Set 2 to 3px borders with hard offset shadows. Zero blur, ever.",
    "Use one signal color per region: yellow slabs, pink stickers, blue links.",
    "Keep heavy black text on cream. Newsprint, not white paper.",
    "Go chunky on type, borders and shadows. Commit or don't bother.",
  ],
  donts: [
    "Don't blur any shadow. Neobrutalism is shadow as border.",
    "Don't round past 16px or use soft gradients.",
    "Don't use muted pastels without a saturated partner. It dies to beige.",
    "Don't apologize with small text. Shout, but mean it.",
  ],
};
