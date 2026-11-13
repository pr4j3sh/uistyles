import type { StyleContent } from "@/lib/style-content";

export const futuristicUi: StyleContent = {
  theme: {
    base: "#05070E",
    background:
      "radial-gradient(1000px 560px at 82% -8%, rgba(94,231,255,0.14), transparent 62%), radial-gradient(900px 520px at 6% 112%, rgba(124,92,255,0.12), transparent 62%), #05070E",
    surface: "rgba(12,18,32,0.72)",
    surface2: "rgba(18,28,48,0.82)",
    line: "rgba(94,231,255,0.22)",
    text: "#E6F4FF",
    muted: "#7E93AD",
    accent: "#5EE7FF",
    radius: "14px",
    display: "font-sans font-medium tracking-[-0.03em]",
    displayItalicLast: false,
    shadow: "0 24px 64px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.07)",
  },
  what: "Futuristic UI is a calm heads-up display: deep space navy, frosted glass panels, hairline cyan instrumentation, and data that reads as telemetry. It suggests capability without shouting, the future as a quiet, well-run control room.",
  origin: "It inherits from 2000s sci-fi film HUDs (Minority Report, Iron Man) and aerospace glass cockpits, then was refined by 2020s AR interfaces like visionOS into thin lines, translucency and restrained glow.",
  bestFor: [
    "Spatial and AR-adjacent products",
    "AI, robotics and deep-tech platforms",
    "Data-rich control and monitoring surfaces",
    "Premium hardware launches",
  ],
  avoid: [
    "Warm, human, community-led brands",
    "Print-first editorial products",
    "Regulated forms where clarity beats atmosphere",
  ],
  palette: [
    { name: "Space", hex: "#05070E", role: "Canvas, deep orbital navy" },
    { name: "Glass", hex: "#121C30", role: "Panel, frosted substrate" },
    { name: "Ion", hex: "#5EE7FF", role: "Accent, instrumentation" },
    { name: "Nova", hex: "#7C5CFF", role: "Secondary emission, violet" },
    { name: "Signal", hex: "#E6F4FF", role: "Primary text, cold white" },
    { name: "Telemetry", hex: "#7E93AD", role: "Secondary data, dim steel" },
  ],
  typography: [
    { role: "Display", family: "Inter, 400 / 500", note: "40 to 64px, tight tracking, light weight. Authority is quiet, never bold." },
    { role: "Body", family: "Inter, 400 / 500", note: "14-15px/1.6. Cold white on navy; never pure white." },
    { role: "Spec", family: "JetBrains Mono, 9-11px", note: "Telemetry: ORBIT / 24.6 / SYS-NOMINAL. Uppercase, wide tracking." },
  ],
  components: [
    {
      name: "Button",
      description:
        "A glass capsule with an ion rim: translucent cyan fill, inner top highlight, soft halo. Hover raises the fill, never the glow.",
      code: `export const PrimaryButton = () => (
  <button className="h-11 rounded-full border border-[#5EE7FF]/60 bg-[#5EE7FF]/10 px-6 text-sm font-medium text-[#5EE7FF] shadow-[0_0_24px_rgba(94,231,255,0.18),inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-md transition-colors hover:bg-[#5EE7FF]/20">
    Get started
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-col items-start gap-3 s-panel rounded-xl p-5">
          <button className="h-11 rounded-full border border-[#5EE7FF]/60 bg-[#5EE7FF]/10 px-6 text-sm font-medium text-[#5EE7FF] shadow-[0_0_24px_rgba(94,231,255,0.18),inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-md transition-colors hover:bg-[#5EE7FF]/20">
            Get started
          </button>
          <a href="#" className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#7E93AD] hover:text-[#E6F4FF]">
            Read the brief →
          </a>
        </div>
      ),
    },
    {
      name: "Input",
      description:
        "An instrumentation field: glass well, hairline rim, mono value in ion cyan. Focus tightens the rim to full opacity instead of blooming.",
      code: `export const EmailField = () => (
  <label className="block w-60">
    <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.28em] text-[#7E93AD]">Operator ID</span>
    <input
      type="email"
      placeholder="you@company.com"
      className="h-11 w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 font-mono text-sm text-[#E6F4FF] outline-none backdrop-blur-md transition-colors caret-[#5EE7FF] placeholder:text-[#4E6178] focus:border-[#5EE7FF]/70 focus:shadow-[0_0_0_1px_rgba(94,231,255,0.35)]"
    />
  </label>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-col items-center s-panel rounded-xl p-5">
          <label className="w-full">
            <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.28em] text-[#7E93AD]">Operator ID</span>
            <input
              type="email"
              placeholder="you@company.com"
              className="h-11 w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 font-mono text-sm text-[#E6F4FF] outline-none backdrop-blur-md transition-colors caret-[#5EE7FF] placeholder:text-[#4E6178] focus:border-[#5EE7FF]/70 focus:shadow-[0_0_0_1px_rgba(94,231,255,0.35)]"
            />
          </label>
        </div>
      ),
    },
    {
      name: "Badge",
      description:
        "A status beacon: pill, hairline rim, one pulsing dot. Ion cyan means nominal; violet means standby. No iconography needed.",
      code: `export const StatusBadge = () => (
  <span className="inline-flex items-center gap-2 rounded-full border border-[#5EE7FF]/30 bg-[#5EE7FF]/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.28em] text-[#5EE7FF]">
    <span className="h-1.5 w-1.5 rounded-full bg-[#5EE7FF] shadow-[0_0_8px_#5EE7FF]" />
    Nominal
  </span>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-wrap items-center justify-center gap-2 s-panel rounded-xl p-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#5EE7FF]/30 bg-[#5EE7FF]/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.28em] text-[#5EE7FF]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#5EE7FF] shadow-[0_0_8px_#5EE7FF]" />
            Nominal
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#7C5CFF]/30 bg-[#7C5CFF]/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.28em] text-[#A99BFF]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7C5CFF] shadow-[0_0_8px_#7C5CFF]" />
            Standby
          </span>
        </div>
      ),
    },
    {
      name: "Card",
      description:
        "A telemetry panel: frosted glass, hairline rim, mono heading row and two live readouts. Data is arranged like a cockpit gauge, not a marketing card.",
      code: `export const ChangelogCard = () => (
  <article className="w-64 rounded-xl border border-[#5EE7FF]/25 bg-[#121C30]/80 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl">
    <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.3em] text-[#7E93AD]">
      <span>Sys / 024</span>
      <span className="text-[#5EE7FF]">Live</span>
    </div>
    <h3 className="mt-3 font-sans text-lg font-medium leading-snug tracking-tight text-[#E6F4FF]">Faster search, fewer keystrokes.</h3>
    <div className="mt-3 grid grid-cols-2 gap-2 border-t border-white/10 pt-3 font-mono text-[9px] uppercase tracking-[0.16em]">
      <div><p className="text-[#7E93AD]">Latency</p><p className="mt-1 text-[#5EE7FF]">80ms</p></div>
      <div><p className="text-[#7E93AD]">Queries</p><p className="mt-1 text-[#E6F4FF]">24.6k</p></div>
    </div>
  </article>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-col justify-center s-panel rounded-xl p-4">
          <article className="w-full rounded-xl border border-[#5EE7FF]/25 bg-[#121C30]/80 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl">
            <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.3em] text-[#7E93AD]">
              <span>Sys / 024</span>
              <span className="text-[#5EE7FF]">Live</span>
            </div>
            <h3 className="mt-3 font-sans text-lg font-medium leading-snug tracking-tight text-[#E6F4FF]">Faster search, fewer keystrokes.</h3>
            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-white/10 pt-3 font-mono text-[9px] uppercase tracking-[0.16em]">
              <div><p className="text-[#7E93AD]">Latency</p><p className="mt-1 text-[#5EE7FF]">80ms</p></div>
              <div><p className="text-[#7E93AD]">Queries</p><p className="mt-1 text-[#E6F4FF]">24.6k</p></div>
            </div>
          </article>
        </div>
      ),
    },
    {
      name: "Nav bar",
      description:
        "A command rail: glass strip, hairline base, tracked mono wordmark and a live link indicator. It reads as equipment, not as a website header.",
      code: `export const NavBar = () => (
  <header className="flex h-12 w-full items-center justify-between border-b border-[#5EE7FF]/20 bg-[#0A1220]/70 px-4 backdrop-blur-xl">
    <span className="font-mono text-[12px] font-medium uppercase tracking-[0.3em] text-[#E6F4FF]">Orbital<span className="text-[#5EE7FF]">/</span></span>
    <nav className="flex items-center gap-5">
      {["SYSTEM", "NETWORK", "ABOUT"].map((item) => (
        <a key={item} href="#" className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#7E93AD] transition-colors hover:text-[#5EE7FF]">{item}</a>
      ))}
      <span className="h-1.5 w-1.5 rounded-full bg-[#5EE7FF] shadow-[0_0_8px_#5EE7FF]" />
    </nav>
  </header>
);`,
      size: "wideShort",
      preview: (
        <div className="flex h-full w-full flex-col justify-center rounded-md">
          <div className="flex h-12 w-full items-center justify-between border-b border-[#5EE7FF]/20 bg-[#0A1220]/70 px-4 backdrop-blur-xl">
            <span className="font-mono text-[12px] font-medium uppercase tracking-[0.3em] text-[#E6F4FF]">Orbital<span className="text-[#5EE7FF]">/</span></span>
            <nav className="flex items-center gap-5">
              {["SYSTEM", "NETWORK", "ABOUT"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#7E93AD] transition-colors hover:text-[#5EE7FF]"
                >
                  {item}
                </a>
              ))}
              <span className="h-1.5 w-1.5 rounded-full bg-[#5EE7FF] shadow-[0_0_8px_#5EE7FF]" />
            </nav>
          </div>
        </div>
      ),
    },
  ],
  dos: [
    "Hairlines carry structure: 1px ion rims, never thick borders.",
    "Glass panels need a background worth blurring. Keep atmosphere alive.",
    "Use mono for all telemetry. Numbers should look measured.",
    "One accent family: ion cyan for nominal, violet for standby.",
  ],
  donts: [
    "Don't stack glows. Halos are for beacons, not for paragraphs.",
    "Don't use pure white text. #E6F4FF keeps the cold depth.",
    "Don't animate everything. Motion is a status signal, not decoration.",
    "Don't mix in warm colors. The palette lives between 200 and 270 degrees.",
  ],
};
