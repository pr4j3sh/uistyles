import type { StyleContent } from "@/lib/style-content";

export const synthwaveUi: StyleContent = {
  theme: {
    base: "#0B0033",
    background:
      "radial-gradient(800px 340px at 50% 68%, rgba(255,217,94,0.55), rgba(255,159,28,0.28) 40%, transparent 75%), linear-gradient(180deg,#0B0033 0%,#2B1055 38%,#FF2A6D 72%,#FF9F1C 88%,#FFD95E 100%)",
    surface: "rgba(11,0,51,0.72)",
    surface2: "rgba(11,0,51,0.85)",
    line: "rgba(5,241,247,0.35)",
    text: "#FFF3E0",
    muted: "rgba(255,243,224,0.6)",
    accent: "#FF2A6D",
    radius: "8px",
    display: "font-sans font-black uppercase tracking-[-0.01em]",
    displayItalicLast: false,
    shadow: "0 0 40px rgba(255,42,109,0.35), inset 0 1px 0 rgba(5,241,247,0.3)",
  },
  what: "Synthwave UI is 1984 driven by a subwoofer: sunset gradient skies, chrome outrun, neon sun discs, magenta laser lines over a violet horizon. It is the visual soundtrack of drive and vaporwave, distilled into interface language.",
  origin: "It comes from 1980s film (Blade Runner, The Terminator) and video games, recolored by 2010s outrun internet culture (Kavinsky, The Midnight, Gunship) and the retrowave music-video aesthetic.",
  bestFor: [
    "Synthwave music and retrowave artists",
    "Gaming and arcade nostalgia",
    "Electronic music production tools",
    "Night-drive themed products and events",
  ],
  avoid: [
    "Enterprise or government services",
    "Healthcare and safety-critical flows",
    "Print-adjacent editorial products",
  ],
  palette: [
    { name: "Midnight", hex: "#0B0033", role: "Canvas, upper sky" },
    { name: "Neon", hex: "#FF2A6D", role: "Laser horizon, signature" },
    { name: "Sun", hex: "#FF9F1C", role: "Outrun sun disc" },
    { name: "Bloom", hex: "#FFD95E", role: "Horizon glow" },
    { name: "Grid", hex: "#05F1F7", role: "Chrome grid lines" },
    { name: "Orchid", hex: "#B24BF3", role: "Deep-field violet" },
  ],
  typography: [
    { role: "Display", family: "Inter, 800 / 900", note: "44 to 72px uppercase, amber to pink gradient fill on hero lines. Chrome reflection, not solid color." },
    { role: "Body", family: "Inter, 400 / 500", note: "14-15px/1.5. Cool white at 500 weight; thin strokes dissolve on the night sky." },
    { role: "Spec", family: "JetBrains Mono, 9-11px", note: "Terminal chrome: 0x2B1055 / SUB / GRID-84. Uppercase, dim amber." },
  ],
  components: [
    {
      name: "Button",
      description:
        "A chrome-edge outrun slab: amber to pink gradient, chrome rim border, and a trailing magenta glow on hover. Pressing sinks it to the road.",
      code: `export const PrimaryButton = () => (
  <button className="h-12 rounded-md border-2 border-[#05F1F7] bg-gradient-to-r from-[#FFD95E] via-[#FF9F1C] to-[#FF2A6D] px-6 font-sans text-sm font-black uppercase tracking-[0.18em] text-[#0B0033] shadow-[0_0_26px_rgba(255,42,109,0.5),inset_0_1px_0_rgba(255,255,255,0.6)] [text-shadow:0_1px_0_rgba(255,255,255,0.4)] transition-shadow hover:shadow-[0_0_40px_rgba(255,42,109,0.75),inset_0_1px_0_rgba(255,255,255,0.7)]">
    Get started
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-col items-start gap-3 s-panel rounded-xl p-5">
          <button className="h-12 rounded-md border-2 border-[#05F1F7] bg-gradient-to-r from-[#FFD95E] via-[#FF9F1C] to-[#FF2A6D] px-6 font-sans text-sm font-black uppercase tracking-[0.18em] text-[#0B0033] shadow-[0_0_26px_rgba(255,42,109,0.5),inset_0_1px_0_rgba(255,255,255,0.6)] [text-shadow:0_1px_0_rgba(255,255,255,0.4)] transition-shadow hover:shadow-[0_0_40px_rgba(255,42,109,0.75),inset_0_1px_0_rgba(255,255,255,0.7)]">
            Get started
          </button>
          <a href="#" className="font-mono text-xs font-medium text-[#05F1F7] underline underline-offset-4 decoration-[#05F1F7]/60 decoration-dotted">
            {"// sys_requirements.txt"}
          </a>
        </div>
      ),
    },
    {
      name: "Input",
      description:
        "A HUD slot in the dashboard: deep violet glass well, cyan keyline that brightens on focus, chrome caret in orchid. The placeholder is a phantom, not a label.",
      code: `export const EmailField = () => (
  <label className="block w-60">
    <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.3em] text-[rgba(255,243,224,0.55)]">
      // AUTH / GRID
    </span>
    <input
      type="email"
      placeholder="you@company.com"
      className="h-12 w-full rounded-md border border-[rgba(5,241,247,0.35)] bg-[rgba(11,0,51,0.65)] px-4 font-mono text-sm text-[#05F1F7] outline-none shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)] caret-[#05F1F7] backdrop-blur-md transition-colors placeholder:text-[rgba(255,243,224,0.3)] focus:border-[#05F1F7] focus:shadow-[inset_0_2px_6px_rgba(0,0,0,0.6),0_0_18px_rgba(5,241,247,0.3)]"
    />
  </label>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-col items-center s-panel rounded-xl p-5">
          <label className="w-full">
            <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.3em] text-[rgba(255,243,224,0.55)]">
              {"// AUTH / GRID"}
            </span>
            <input
              type="email"
              placeholder="you@company.com"
              className="h-12 w-full rounded-md border border-[rgba(5,241,247,0.35)] bg-[rgba(11,0,51,0.65)] px-4 font-mono text-sm text-[#05F1F7] outline-none shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)] caret-[#05F1F7] backdrop-blur-md transition-colors placeholder:text-[rgba(255,243,224,0.3)] focus:border-[#05F1F7] focus:shadow-[inset_0_2px_6px_rgba(0,0,0,0.6),0_0_18px_rgba(5,241,247,0.3)]"
            />
          </label>
        </div>
      ),
    },
    {
      name: "Badge",
      description:
        "A chrome grid-line tag: cyan emission on 8% cyan fill with a cyan keyline. Like a score display on a vintage arcade cabinet.",
      code: `export const StatusBadge = () => (
  <span className="inline-flex items-center gap-2 border border-[#05F1F7]/50 bg-[rgba(5,241,247,0.06)] px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[#05F1F7] shadow-[0_0_14px_rgba(5,241,247,0.25),inset_0_1px_0_rgba(5,241,247,0.3)]">
    Stable
  </span>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-wrap items-center justify-center gap-2 s-panel rounded-xl p-5">
          <span className="inline-flex items-center gap-2 border border-[#05F1F7]/50 bg-[rgba(5,241,247,0.06)] px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[#05F1F7] shadow-[0_0_14px_rgba(5,241,247,0.25),inset_0_1px_0_rgba(5,241,247,0.3)]">
            Stable
          </span>
          <span className="inline-flex items-center gap-2 border border-[#FFD95E]/50 bg-[rgba(255,217,94,0.06)] px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[#FFD95E] shadow-[0_0_12px_rgba(255,217,94,0.22)]">
            v2.4.0
          </span>
        </div>
      ),
    },
    {
      name: "Card",
      description:
        "A holographic HUD panel: deep violet glass with a neon laser keyline and chrome-ruled output. The safehouse has a neon sign out front.",
      code: `export const ChangelogCard = () => (
  <article className="w-64 rounded-md border border-[rgba(255,42,109,0.45)] bg-[rgba(11,0,51,0.72)] p-5 shadow-[0_0_30px_rgba(255,42,109,0.28),inset_0_1px_0_rgba(5,241,247,0.25)] backdrop-blur-xl">
    <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#05F1F7]">CHNG / 002</p>
    <h3 className="mt-2 font-sans text-base font-black uppercase leading-[1.05] tracking-tight text-[#FFF3E0]">Faster search, <span className="bg-gradient-to-r from-[#FFD95E] via-[#FF9F1C] to-[#FF2A6D] bg-clip-text text-transparent">fewer</span> keystrokes.</h3>
    <p className="mt-3 font-mono text-[9px] leading-snug text-[rgba(255,243,224,0.55)]">{"// results stream in as you type; queries now 80ms"}</p>
  </article>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-col justify-center s-panel rounded-xl p-4">
          <article className="w-full rounded-md border border-[rgba(255,42,109,0.45)] bg-[rgba(11,0,51,0.72)] p-5 shadow-[0_0_30px_rgba(255,42,109,0.28),inset_0_1px_0_rgba(5,241,247,0.25)] backdrop-blur-xl">
            <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#05F1F7]">CHNG / 002</p>
            <h3 className="mt-2 font-sans text-base font-black uppercase leading-[1.05] tracking-tight text-[#FFF3E0]">Faster search, <span className="bg-gradient-to-r from-[#FFD95E] via-[#FF9F1C] to-[#FF2A6D] bg-clip-text text-transparent">fewer</span> keystrokes.</h3>
            <p className="mt-3 font-mono text-[9px] leading-snug text-[rgba(255,243,224,0.55)]">{"// results stream in as you type; queries now 80ms"}</p>
          </article>
        </div>
      ),
    },
    {
      name: "Nav bar",
      description:
        "A chrome rail on the night sky: violet glass, one cyan slash accent, links underlined with magenta dashes. Synths before sentences.",
      code: `export const NavBar = () => (
  <header className="flex h-14 w-full items-center justify-between border-b border-[rgba(5,241,247,0.25)] bg-[rgba(11,0,51,0.55)] px-4 shadow-[0_0_18px_rgba(255,42,109,0.2)] backdrop-blur-xl">
    <span className="font-mono text-[14px] font-black uppercase tracking-[0.1em] text-[#FFF3E0]">acme<span className="text-[#FF2A6D]">_</span></span>
    <nav className="flex gap-4">
      {["GRID", "WAVE", "ABOUT"].map((item) => (
        <a key={item} href="#" className="font-mono text-[9px] uppercase tracking-[0.3em] text-[rgba(255,243,224,0.6)] underline decoration-[#FF2A6D] decoration-2 underline-offset-4 hover:text-[#FFF3E0]">{item}</a>
      ))}
    </nav>
  </header>
);`,
      size: "wideShort",
      preview: (
        <div className="flex h-full w-full flex-col justify-center rounded-md">
          <div className="flex h-14 w-full items-center justify-between border-b border-[rgba(5,241,247,0.25)] bg-[rgba(11,0,51,0.55)] px-4 shadow-[0_0_18px_rgba(255,42,109,0.2)] backdrop-blur-xl">
            <span className="font-mono text-[14px] font-black uppercase tracking-[0.1em] text-[#FFF3E0]">acme<span className="text-[#FF2A6D]">_</span></span>
            <nav className="flex gap-4">
              {["GRID", "WAVE", "ABOUT"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-mono text-[9px] uppercase tracking-[0.3em] text-[rgba(255,243,224,0.6)] underline decoration-[#FF2A6D] decoration-2 underline-offset-4 transition-colors hover:text-[#FFF3E0]"
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
    "Layer sunset sky gradients; never flat color. Horizon glow is mandatory.",
    "One sun disc per page. Outrun has exactly one star.",
    "Use chrome rim borders on at least one element. Steel steals the show.",
    "Keep magenta glow at 26px blur or less. More is bloom, not neon.",
  ],
  donts: [
    "Don't add a second horizon. One perspective, one sun, one road.",
    "Don't use white text directly on the hottest part of the sky (amber or pink).",
    "Don't mix in sterile SaaS grays. The palette needs heat.",
    "Don't forget the chrome. Outrun without specular is just magenta.",
  ],
};
