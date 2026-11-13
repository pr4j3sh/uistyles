import type { StyleContent } from "@/lib/style-content";

export const cyberpunkUi: StyleContent = {
  theme: {
    base: "#0C0A12",
    background:
      "radial-gradient(1000px 600px at 80% -10%, rgba(255,43,209,0.16), transparent 60%), radial-gradient(900px 500px at 10% 115%, rgba(0,245,255,0.14), transparent 60%), #0C0A12",
    surface: "#13111E",
    surface2: "#1B1928",
    line: "rgba(0,245,255,0.22)",
    text: "#ECECF1",
    muted: "#8E8E99",
    accent: "#FF2BD1",
    radius: "4px",
    display: "font-sans font-black uppercase tracking-[-0.01em]",
    displayItalicLast: false,
    shadow: "0 14px 40px rgba(255,43,209,0.18), inset 0 1px 0 rgba(0,245,255,0.14)",
  },
  what: "Cyberpunk UI is neon circuitry over rain-dark asphalt — magenta and cyan glows, scanlines, chamfered corners, chrome that looks hot to the touch. The page is a billboard in a back-alley dystopia.",
  origin: "1982 *Blade Runner* → 1993 *City of Lost Children* → CD PROJEKT RED's *Cyberpunk 2077* (2020) — the visual language of high tech, low life merged with corporate dystopia and street-level noir.",
  bestFor: [
    "Games and game launchers",
    "Crypto and decentralized networks",
    "Electronic music and nightlife brands",
    "Tech-forward security products",
  ],
  avoid: [
    "Government, healthcare, finance (accessibility-critical)",
    "Print-adjacent editorial products",
    "Corporate SaaS that needs trust signals",
  ],
  palette: [
    { name: "Void", hex: "#0C0A12", role: "Canvas — rain-dark asphalt" },
    { name: "Neon", hex: "#FF2BD1", role: "Magenta emission — signature" },
    { name: "Ghost", hex: "#00F5FF", role: "Cyan emission — secondary" },
    { name: "Spark", hex: "#F5E84E", role: "Yellow — warnings & tags" },
    { name: "Chrome", hex: "#C9C9D1", role: "Metallic edge — specular" },
    { name: "Smoke", hex: "#8E8E99", role: "Subsurface text" },
  ],
  typography: [
    { role: "Display", family: "Inter — 800 / 900", note: "42–72px, uppercase, tight tracking, magenta chrome gradient on hero lines only." },
    { role: "Body", family: "Inter — 400 / 500", note: "14–15px/1.5. Cool white at 600+ weight on black — thin strokes vanish." },
    { role: "Spec", family: "JetBrains Mono — 9–11px", note: "Terminal chrome: JACK_IN / 0x3F / UPLINK_SYNCED — always uppercase." },
  ],
  components: [
    {
      name: "Button",
      description:
        "A hot magenta outline that glows — transparent fill, 2px emission, chamfered corners (clip-path), glow tracks hover. The only safe joyride in Night City.",
      code: `export const PrimaryButton = () => (
  <button
    className="h-12 px-6 font-sans text-sm font-black uppercase tracking-[0.18em] text-[#FF2BD1] border-2 border-[#FF2BD1] bg-[rgba(255,43,209,0.06)] [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)] shadow-[0_0_24px_rgba(255,43,209,0.4),inset_0_0_18px_rgba(255,43,209,0.12)] transition-all hover:shadow-[0_0_36px_rgba(255,43,209,0.65),inset_0_0_22px_rgba(255,43,209,0.22)]"
  >
    Jack In
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-col items-start gap-3 s-panel rounded-md p-5">
          <button
            className="h-12 px-6 font-sans text-sm font-black uppercase tracking-[0.18em] text-[#FF2BD1] border-2 border-[#FF2BD1] bg-[rgba(255,43,209,0.06)] [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)] shadow-[0_0_24px_rgba(255,43,209,0.4),inset_0_0_18px_rgba(255,43,209,0.12)] transition-all hover:shadow-[0_0_36px_rgba(255,43,209,0.65),inset_0_0_22px_rgba(255,43,209,0.22)]"
          >
            Jack In
          </button>
          <button className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#00F5FF] underline underline-offset-4 decoration-[#00F5FF]/50 decoration-dotted">
            sys_requirements.txt
          </button>
        </div>
      ),
    },
    {
      name: "Input",
      description:
        "Inset dark terminal — deep maroon-black well, cyan keyline that brightens on focus, monospace caret in green. Placeholder is a ghost, not a label.",
      code: `export const EmailField = () => (
  <label className="block w-60">
    <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.3em] text-[#8E8E99]">
      // AUTH — EMAIL
    </span>
    <input
      type="email"
      placeholder="you@company.com"
      className="h-12 w-full border border-[rgba(0,245,255,0.25)] bg-[#0C0A12] px-4 font-mono text-sm text-[#00F5FF] outline-none shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)] caret-[#00F5FF] placeholder:text-[#3E3E4B] focus:border-[#00F5FF] focus:shadow-[inset_0_2px_6px_rgba(0,0,0,0.6),0_0_14px_rgba(0,245,255,0.3)]"
    />
  </label>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-col items-center s-panel rounded-md p-5">
          <label className="w-full">
            <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.3em] text-[#8E8E99]">
              {"// AUTH — EMAIL"}
            </span>
            <input
              type="email"
              placeholder="you@company.com"
              className="h-12 w-full border border-[rgba(0,245,255,0.25)] bg-[#0C0A12] px-4 font-mono text-sm text-[#00F5FF] outline-none shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)] caret-[#00F5FF] placeholder:text-[#3E3E4B] focus:border-[#00F5FF] focus:shadow-[inset_0_2px_6px_rgba(0,0,0,0.6),0_0_14px_rgba(0,245,255,0.3)]"
            />
          </label>
        </div>
      ),
    },
    {
      name: "Badge",
      description:
        "A one-line ticker — cyan text on 5% cyan with a cyan keyline, uppercase mono. Like a mission-control playlist entry.",
      code: `export const StatusBadge = () => (
  <span className="inline-flex items-center gap-2 border border-[#00F5FF]/50 bg-[rgba(0,245,255,0.06)] px-3 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.3em] text-[#00F5FF] shadow-[0_0_12px_rgba(0,245,255,0.18),inset_0_1px_0_rgba(0,245,255,0.25)]">
    stable
  </span>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-wrap items-center justify-center gap-2 s-panel rounded-md p-5">
          <span className="inline-flex items-center gap-2 border border-[#00F5FF]/50 bg-[rgba(0,245,255,0.06)] px-3 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.3em] text-[#00F5FF] shadow-[0_0_12px_rgba(0,245,255,0.18),inset_0_1px_0_rgba(0,245,255,0.25)]">
            stable
          </span>
          <span className="inline-flex items-center gap-2 border border-[#F5E84E]/50 bg-[rgba(245,232,78,0.06)] px-3 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.3em] text-[#F5E84E] shadow-[0_0_10px_rgba(245,232,78,0.15)]">
            v2.4.0
          </span>
        </div>
      ),
    },
    {
      name: "Card",
      description:
        "A chamfered dark panel — cut-corner geometry, magenta keyline rim, one line of terminal output. The safehouse is lit but the door is armed.",
      code: `export const ChangelogCard = () => (
  <article className="w-64 border border-[rgba(255,43,209,0.4)] bg-[#13111E] p-5 shadow-[0_0_28px_rgba(255,43,209,0.14),inset_0_1px_0_rgba(255,43,209,0.18)] [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)]">
    <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#00F5FF]">CHNG / 002</p>
    <h3 className="mt-2 font-sans text-base font-black uppercase leading-[1.05] tracking-tight text-[#ECECF1]">Faster search, fewer keystrokes.</h3>
    <p className="mt-3 font-mono text-[9px] leading-snug text-[#8E8E99]">{"// results stream in as you type; queries now 80ms"}</p>
  </article>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-col justify-center s-panel rounded-md p-4">
          <article className="w-full border border-[rgba(255,43,209,0.4)] bg-[#13111E] p-5 shadow-[0_0_28px_rgba(255,43,209,0.14),inset_0_1px_0_rgba(255,43,209,0.18)] [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)]">
            <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#00F5FF]">CHNG / 002</p>
            <h3 className="mt-2 font-sans text-base font-black uppercase leading-[1.05] tracking-tight text-[#ECECF1]">Faster search, fewer keystrokes.</h3>
            <p className="mt-3 font-mono text-[9px] leading-snug text-[#8E8E99]">{"// results stream in as you type; queries now 80ms"}</p>
          </article>
        </div>
      ),
    },
    {
      name: "Nav bar",
      description:
        "Chrome on rain — a slim metallic rail with a magenta slash accent, no logo, just a hex glyph and underlined links. Nothing clean lives here.",
      code: `export const NavBar = () => (
  <header className="flex h-14 w-full items-center justify-between border-b border-[rgba(255,255,255,0.08)] bg-gradient-to-b from-[#1B1928] via-[#13111E] to-[#0C0A12] px-4">
    <span className="font-mono text-[14px] font-black uppercase tracking-[0.1em] text-[#ECECF1]">acme<span className="text-[#FF2BD1]">_</span></span>
    <nav className="flex gap-4">
      {["LINK", "NET", "INFO"].map((item) => (
        <a key={item} href="#" className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8E8E99] underline decoration-[#FF2BD1]/60 decoration-2 underline-offset-4 hover:text-[#ECECF1]">{item}</a>
      ))}
    </nav>
  </header>
);`,
      size: "wideShort",
      preview: (
        <div className="flex h-full w-full flex-col justify-center rounded-md">
          <div className="flex h-14 w-full items-center justify-between border-b border-[rgba(255,255,255,0.08)] bg-gradient-to-b from-[#1B1928] via-[#13111E] to-[#0C0A12] px-4">
            <span className="font-mono text-[14px] font-black uppercase tracking-[0.1em] text-[#ECECF1]">acme<span className="text-[#FF2BD1]">_</span></span>
            <nav className="flex gap-4">
              {["LINK", "NET", "INFO"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8E8E99] underline decoration-[#FF2BD1]/60 decoration-2 underline-offset-4 transition-colors hover:text-[#ECECF1]"
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
    "Pick ONE emission hue per region — magenta or cyan, never both fighting",
    "Chamfered corners via clip-path on one signature element per screen",
    "Terminal mono for metadata always — it's the dialect of the genre",
    "Glow ≤ 24px blur — more is bloom, not neon",
  ],
  donts: [
    "Don't use more than two emission hues — the palette dissolves into unicorn",
    "Don't use glows on body copy — eyestrain before enthusiasm",
    "Don't round corners past 4px — cyberpunk has no soft edges",
    "Don't use white as a foreground — it reads as chrome rust, not text",
  ],
};
