import type { StyleContent } from "@/lib/style-content";

export const pixelArtUi: StyleContent = {
  theme: {
    base: "#1A1C2C",
    background:
      "radial-gradient(900px 500px at 80% -10%, rgba(65,166,246,0.12), transparent 65%), radial-gradient(800px 400px at 10% 115%, rgba(255,205,117,0.1), transparent 60%), #1A1C2C",
    surface: "#23253A",
    surface2: "#2E3150",
    line: "#3B5DC9",
    text: "#F4F4F4",
    muted: "#94B0C2",
    accent: "#FFCD75",
    radius: "0px",
    display: "font-mono font-bold uppercase tracking-[0.02em]",
    displaySize: "clamp(1.8rem, 6.5vh, 3.2rem)",
    displayItalicLast: false,
    shadow: "4px 4px 0 #0F1020",
  },
  what: "Pixel Art UI is the interface as an 8-bit cartridge — hard edges, indexed colors, chunky keylines, offset shadows with no blur, and mono type that behaves like a bitmap font. Every corner is a decision, because there is no anti-aliasing to hide behind.",
  origin: "Born in 1970s arcade cabinets and 1980s consoles (NES, Game Boy), codified by 1990s RPG dialog boxes, then reclaimed by indie games and the modern pixel-art revival of the 2010s.",
  bestFor: [
    "Indie games and game storefronts",
    "Creative tools with a playful edge",
    "Retro arcade and esports events",
    "Communities built around nostalgia",
  ],
  avoid: [
    "Finance, healthcare and government services",
    "Long-form reading products",
    "Brands that need to feel premium or quiet",
  ],
  palette: [
    { name: "Cartridge", hex: "#1A1C2C", role: "Canvas — deep console navy" },
    { name: "Sprite", hex: "#F4F4F4", role: "Primary text — 1-bit white" },
    { name: "Coin", hex: "#FFCD75", role: "Accent — gold coin" },
    { name: "HP", hex: "#A7F070", role: "Health / success" },
    { name: "Mana", hex: "#41A6F6", role: "Focus / info" },
    { name: "Danger", hex: "#B13E53", role: "Damage / destructive" },
  ],
  typography: [
    { role: "Display", family: "JetBrains Mono — 700", note: "Uppercase, 32–52px, tight tracking. Read it as a bitmap, not a paragraph." },
    { role: "Body", family: "JetBrains Mono — 400 / 500", note: "13–14px/1.6. Mono everywhere — the bitmap has no proportional widths." },
    { role: "Spec", family: "JetBrains Mono — 9–11px", note: "HUD readouts: HP 100/100, LVL 24, 1UP — always uppercase." },
  ],
  components: [
    {
      name: "Button",
      description:
        "A cartridge key — 3px hard keyline, gold fill, offset black shadow. Pressing translates it into the shadow like a physical arcade button.",
      code: `export const PrimaryButton = () => (
  <button className="h-12 border-[3px] border-[#0F1020] bg-[#FFCD75] px-6 font-mono text-sm font-bold uppercase tracking-[0.14em] text-[#1A1C2C] shadow-[4px_4px_0_#0F1020] transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_#0F1020]">
    Start
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-col items-start gap-3 s-panel rounded-xl p-5">
          <button className="h-12 border-[3px] border-[#0F1020] bg-[#FFCD75] px-6 font-mono text-sm font-bold uppercase tracking-[0.14em] text-[#1A1C2C] shadow-[4px_4px_0_#0F1020] transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_#0F1020]">
            Start
          </button>
          <a href="#" className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#41A6F6] underline underline-offset-4">
            {"// press start to continue"}
          </a>
        </div>
      ),
    },
    {
      name: "Input",
      description:
        "A save-slot field — 3px keyline, inset black well, phosphor-green text. Focus swaps the keyline to mana blue, never to a glow.",
      code: `export const EmailField = () => (
  <label className="block w-60">
    <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.28em] text-[#94B0C2]">Player name</span>
    <input
      type="email"
      placeholder="ENTER NAME"
      className="h-11 w-full border-[3px] border-[#0F1020] bg-[#1A1C2C] px-4 font-mono text-sm uppercase tracking-[0.08em] text-[#A7F070] shadow-[inset_3px_3px_0_rgba(0,0,0,0.45)] caret-[#A7F070] outline-none placeholder:text-[#566C86] focus:border-[#41A6F6]"
    />
  </label>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-col items-center s-panel rounded-xl p-5">
          <label className="w-full">
            <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.28em] text-[#94B0C2]">Player name</span>
            <input
              type="email"
              placeholder="ENTER NAME"
              className="h-11 w-full border-[3px] border-[#0F1020] bg-[#1A1C2C] px-4 font-mono text-sm uppercase tracking-[0.08em] text-[#A7F070] shadow-[inset_3px_3px_0_rgba(0,0,0,0.45)] caret-[#A7F070] outline-none placeholder:text-[#566C86] focus:border-[#41A6F6]"
            />
          </label>
        </div>
      ),
    },
    {
      name: "Badge",
      description:
        "An HP chip — square corners, 2px keyline, one stat per chip. Green for health, gold for coins, red for damage; color is the readout.",
      code: `export const StatusBadge = () => (
  <span className="inline-flex items-center gap-2 border-2 border-[#0F1020] bg-[#A7F070] px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#1A1C2C] shadow-[2px_2px_0_#0F1020]">
    HP 100/100
  </span>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-wrap items-center justify-center gap-3 s-panel rounded-xl p-5">
          <span className="inline-flex items-center gap-2 border-2 border-[#0F1020] bg-[#A7F070] px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#1A1C2C] shadow-[2px_2px_0_#0F1020]">
            HP 100/100
          </span>
          <span className="inline-flex items-center gap-2 border-2 border-[#0F1020] bg-[#FFCD75] px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#1A1C2C] shadow-[2px_2px_0_#0F1020]">
            x024
          </span>
        </div>
      ),
    },
    {
      name: "Card",
      description:
        "An RPG dialog box — 3px white keyline, cartridge-navy panel, hard drop shadow, gold level tag. Text is delivered one beat at a time.",
      code: `export const ChangelogCard = () => (
  <article className="w-64 border-[3px] border-[#F4F4F4] bg-[#23253A] p-4 shadow-[4px_4px_0_#0F1020]">
    <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#FFCD75]">LVL 24 — SHOP</p>
    <h3 className="mt-2 font-mono text-base font-bold uppercase leading-tight tracking-[0.02em] text-[#F4F4F4]">Faster search, fewer keystrokes.</h3>
    <p className="mt-2 font-mono text-[10px] leading-relaxed text-[#94B0C2]">{"// results stream in as you type; queries now 80ms"}</p>
    <p className="mt-3 text-right font-mono text-[11px] text-[#FFCD75]">▼</p>
  </article>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-col justify-center s-panel rounded-xl p-4">
          <article className="w-full border-[3px] border-[#F4F4F4] bg-[#23253A] p-4 shadow-[4px_4px_0_#0F1020]">
            <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#FFCD75]">LVL 24 — SHOP</p>
            <h3 className="mt-2 font-mono text-base font-bold uppercase leading-tight tracking-[0.02em] text-[#F4F4F4]">Faster search, fewer keystrokes.</h3>
            <p className="mt-2 font-mono text-[10px] leading-relaxed text-[#94B0C2]">{"// results stream in as you type; queries now 80ms"}</p>
            <p className="mt-3 text-right font-mono text-[11px] text-[#FFCD75]">▼</p>
          </article>
        </div>
      ),
    },
    {
      name: "Nav bar",
      description:
        "A HUD rail — arcade-blue bar, hard black rule, square coin mark. Links are mono caps; the active item is simply gold, like a selected menu entry.",
      code: `export const NavBar = () => (
  <header className="flex h-12 w-full items-center justify-between border-b-[3px] border-[#0F1020] bg-[#29366F] px-4">
    <span className="flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-[0.12em] text-[#F4F4F4]">
      <span className="h-3 w-3 bg-[#FFCD75]" />
      Acme
    </span>
    <nav className="flex gap-5">
      {["PLAY", "SCORES", "OPTIONS"].map((item) => (
        <a key={item} href="#" className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#94B0C2] transition-colors hover:text-[#FFCD75]">{item}</a>
      ))}
    </nav>
  </header>
);`,
      size: "wideShort",
      preview: (
        <div className="flex h-full w-full flex-col justify-center rounded-md">
          <div className="flex h-12 w-full items-center justify-between border-b-[3px] border-[#0F1020] bg-[#29366F] px-4">
            <span className="flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-[0.12em] text-[#F4F4F4]">
              <span className="h-3 w-3 bg-[#FFCD75]" />
              Acme
            </span>
            <nav className="flex gap-5">
              {["PLAY", "SCORES", "OPTIONS"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#94B0C2] transition-colors hover:text-[#FFCD75]"
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
    "Use a limited indexed palette — 6–8 colors, each with a job",
    "Hard keylines and offset shadows with 0px blur, always",
    "Mono type everywhere — the bitmap grid is the law",
    "Square corners and even pixel steps; no half-measures",
  ],
  donts: [
    "Don't blur or anti-alias key elements — it breaks the illusion",
    "Don't mix a pixel face with a clean grotesque in the same line",
    "Don't use gradients — indexed color means flat fills",
    "Don't make body copy smaller than 10px — legibility is still a stat",
  ],
};
