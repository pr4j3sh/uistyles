import type { StyleContent } from "@/lib/style-content";

export const glassmorphism: StyleContent = {
  theme: {
    base: "#141A2E",
    background:
      "radial-gradient(900px 560px at 15% -10%, rgba(255,107,107,0.55), transparent 62%), radial-gradient(800px 520px at 88% 115%, rgba(139,92,246,0.6), transparent 60%), radial-gradient(700px 500px at 62% 45%, rgba(232,74,140,0.4), transparent 62%), radial-gradient(500px 380px at 30% 90%, rgba(14,165,233,0.35), transparent 65%), #141A2E",
    surface: "rgba(255,255,255,0.09)",
    surface2: "rgba(255,255,255,0.12)",
    line: "rgba(255,255,255,0.18)",
    text: "#F8FAFC",
    muted: "rgba(248,250,252,0.6)",
    accent: "#22D3EE",
    radius: "18px",
    display: "font-sans font-semibold tracking-[-0.01em]",
    displayItalicLast: false,
    shadow: "0 24px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.28)",
  },
  what: "Glassmorphism is frost: white translucency blurred over a loud gradient backdrop, edged with a hairline of specular light. The material is the point. Light, diffusion and depth, not a colored panel.",
  origin: "It pulled together iOS 13 vibrancy in 2019, macOS Big Sur sidebars in 2020, Windows 11 Mica and Acrylic in 2021, and the Figma community's glass UI wave. It was the first post-flat technique to insist the background be part of the composition.",
  bestFor: [
    "Product launches and hero sections",
    "Media players and music UIs",
    "Dashboards that showcase design skill",
    "macOS/iOS-adjacent tooling",
  ],
  avoid: [
    "Data-dense enterprise tables",
    "Government and safety-first services",
    "Reading-heavy long-form",
  ],
  palette: [
    { name: "Coral", hex: "#FF6B6B", role: "Sunset lobe, top-left" },
    { name: "Magenta", hex: "#E84A8C", role: "Noon wash, center" },
    { name: "Violet", hex: "#8B5CF6", role: "Dusk lobe, bottom-right" },
    { name: "Cyan", hex: "#22D3EE", role: "Specular accent, interactive glow" },
    { name: "Ink", hex: "#141A2E", role: "Canvas fallback, twilight slate" },
    { name: "White", hex: "#F8FAFC", role: "Frost edge, specular highlight" },
  ],
  typography: [
    { role: "Display", family: "Inter, 500 / 600", note: "34 to 56px, tight tracking, normal weight on purpose. Frost whispers rather than shouts." },
    { role: "Body", family: "Inter, 400 / 500", note: "14-15px/1.5. Always 500 weight or heavier on glass. Thin strokes vanish into blur." },
    { role: "Spec", family: "JetBrains Mono, 9-11px", note: "Backdrop / 40px / 0.09 / SAT 140%. Print the recipe on the panel." },
  ],
  components: [
    {
      name: "Button",
      description:
        "A caustic cyan glow behind glass: translucent fill, specular top edge, heavy backdrop blur. The hover deepens the light rather than darkening the fill.",
      code: `export const PrimaryButton = () => (
  <button className="h-12 rounded-full border border-[#22D3EE]/35 bg-[rgba(34,211,238,0.15)] px-6 text-sm font-semibold text-[#F8FAFC] shadow-[0_0_24px_rgba(34,211,238,0.35),inset_0_1px_0_rgba(255,255,255,0.4)] backdrop-blur-md transition-shadow hover:shadow-[0_0_36px_rgba(34,211,238,0.55),inset_0_1px_0_rgba(255,255,255,0.5)]">
    Get started
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-col items-center gap-3 s-panel rounded-2xl p-4">
          <button className="h-12 rounded-full border border-[#22D3EE]/35 bg-[rgba(34,211,238,0.15)] px-6 text-sm font-semibold text-[#F8FAFC] shadow-[0_0_24px_rgba(34,211,238,0.35),inset_0_1px_0_rgba(255,255,255,0.4)] backdrop-blur-md transition-shadow hover:shadow-[0_0_36px_rgba(34,211,238,0.55),inset_0_1px_0_rgba(255,255,255,0.5)]">
            Get started
          </button>
          <button className="font-sans text-sm font-semibold text-[#F8FAFC]/80 hover:text-[#FFFFFF]">or read the manual</button>
        </div>
      ),
    },
    {
      name: "Input",
      description:
        "A frosted slot: translucent well, white hairline, cyan caret. The placeholder disappears on focus, and the hairline ignites like light through water.",
      code: `export const EmailField = () => (
  <label className="block w-60">
    <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.3em] text-[rgba(248,250,252,0.55)]">Email</span>
    <input
      type="email"
      placeholder="you@company.com"
      className="h-12 w-full rounded-2xl border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.08)] px-4 text-[15px] text-[#F8FAFC] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3),inset_0_-1px_0_rgba(255,255,255,0.22)] outline-none backdrop-blur-xl transition-colors caret-[#22D3EE] placeholder:text-[rgba(248,250,252,0.35)] focus:border-[#22D3EE]/50"
    />
  </label>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-col items-center s-panel rounded-2xl p-4">
          <label className="w-full">
            <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.3em] text-[rgba(248,250,252,0.55)]">Email</span>
            <input
              type="email"
              placeholder="you@company.com"
              className="h-12 w-full rounded-2xl border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.08)] px-4 text-[15px] text-[#F8FAFC] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3),inset_0_-1px_0_rgba(255,255,255,0.22)] outline-none backdrop-blur-xl transition-colors caret-[#22D3EE] placeholder:text-[rgba(248,250,252,0.35)] focus:border-[#22D3EE]/50"
            />
          </label>
        </div>
      ),
    },
    {
      name: "Badge",
      description:
        "A caustic fleck: cyan fill, white specular top edge. Micro size on purpose; glass badges drown in blur at larger sizes.",
      code: `export const StatusBadge = () => (
  <span className="inline-flex items-center gap-2 rounded-full border border-[#22D3EE]/40 bg-[rgba(34,211,238,0.12)] px-3 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.3em] text-[#22D3EE] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
    Stable
  </span>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-wrap items-center justify-center gap-2 s-panel rounded-2xl p-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#22D3EE]/40 bg-[rgba(34,211,238,0.12)] px-3 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.3em] text-[#22D3EE] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
            Stable
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.16)] bg-[rgba(255,255,255,0.08)] px-3 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.3em] text-[rgba(248,250,252,0.7)]">
            v2.4.0
          </span>
        </div>
      ),
    },
    {
      name: "Card",
      description:
        "The poster slab: frosted white at 9%, specular top edge, a deep drop shadow trailing the sunset. Body text at 500 weight or heavier, never 400.",
      code: `export const ChangelogCard = () => (
  <div className="w-64 rounded-2xl border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.09)] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.28)] backdrop-blur-xl">
    <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[rgba(248,250,252,0.55)]">CHNG / 002</p>
    <h3 className="mt-2 font-sans text-xl font-semibold leading-snug text-[#F8FAFC]">Faster search, fewer keystrokes.</h3>
    <p className="mt-2 font-sans text-xs font-medium leading-relaxed text-[rgba(248,250,252,0.7)]">Results stream in as you type; queries now run in 80ms.</p>
  </div>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-col justify-center s-panel rounded-2xl p-4">
          <div className="w-full rounded-2xl border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.09)] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.28)] backdrop-blur-xl">
            <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[rgba(248,250,252,0.55)]">CHNG / 002</p>
            <h3 className="mt-2 font-sans text-xl font-semibold leading-snug text-[#F8FAFC]">Faster search, fewer keystrokes.</h3>
            <p className="mt-2 font-sans text-xs font-medium leading-relaxed text-[rgba(248,250,252,0.7)]">Results stream in as you type; queries now run in 80ms.</p>
          </div>
        </div>
      ),
    },
    {
      name: "Nav bar",
      description:
        "A floating frosted pill, the canonical macOS vibe. Cyan wordmark dot, translucent, heavy blur; the bar hovers above the sunset.",
      code: `export const NavBar = () => (
  <header className="flex h-16 w-full items-center justify-between rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] px-4 shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.3)] backdrop-blur-2xl">
    <span className="pl-2 text-lg font-semibold tracking-tight text-[#F8FAFC]">acme<span className="text-[#22D3EE]">.</span></span>
    <div className="flex gap-5">
      {["Pulse", "Wave", "Flux", "About"].map((item) => (
        <a key={item} href="#" className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[rgba(248,250,252,0.65)] transition-colors hover:text-[#22D3EE]">{item}</a>
      ))}
    </div>
  </header>
);`,
      size: "wideShort",
      preview: (
        <div className="flex h-full w-full flex-col justify-center rounded-full">
          <div className="flex h-16 w-full items-center justify-between rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] px-4 shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.3)] backdrop-blur-2xl">
            <span className="pl-2 text-lg font-semibold tracking-tight text-[#F8FAFC]">acme<span className="text-[#22D3EE]">.</span></span>
            <div className="flex gap-5">
              {["Pulse", "Wave", "Flux", "About"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[rgba(248,250,252,0.65)] transition-colors hover:text-[#22D3EE]"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ],
  dos: [
    "Put loud color behind the glass. Blur needs something to blur.",
    "Use one specular source per screen, at the top edge. Consistency sells the material.",
    "Set body text at 500 weight or heavier on glass. Weight 400 vaporizes in the blur.",
    "Use backdrop-blur-xl or 2xl. Anything below 12px is smudge, not frost.",
  ],
  donts: [
    "Don't use plain white text on white glass. It's a whiteout, not a panel.",
    "Don't layer more than two frosted depths. The magic desaturates fast.",
    "Don't let body copy sit on a busy blob without a frost backing.",
    "Don't skip the specular lip. Without it, glass is just transparency.",
  ],
};
