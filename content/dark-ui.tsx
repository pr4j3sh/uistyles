import type { StyleContent } from "@/lib/style-content";

export const darkUi: StyleContent = {
  theme: {
    base: "#0E0F12",
    background: "#0E0F12",
    surface: "#16181D",
    surface2: "#1E2027",
    line: "#2A2D36",
    text: "#E8E9EB",
    muted: "#9CA0A8",
    accent: "#6E8FFF",
    radius: "10px",
    display: "font-sans font-semibold tracking-[-0.01em]",
    displayItalicLast: false,
    shadow: "0 8px 24px rgba(0,0,0,0.5)",
  },
  what: "Dark UI is the working dark theme done with discipline: a near-black canvas (#0E0F12), three elevation levels of charcoal panels, hairline borders doing all the separation, one periwinkle accent. Built for long sessions, not demos.",
  origin: "It runs from terminal culture and 2009 dark IDE themes like Solarized Dark and Monokai to the 2020 to 2022 design systems at Vercel and Linear. This is engineering UI that earned its keep in dark rooms.",
  bestFor: [
    "Developer tools and IDEs",
    "Monitoring and observability dashboards",
    "Long-session product apps",
    "CLI-adjacent web surfaces",
  ],
  avoid: [
    "Marketing-first launch pages",
    "Print-adjacent editorial products",
    "Status signaling that depends on color alone (saturation carries too much weight)",
  ],
  palette: [
    { name: "Abyss", hex: "#0E0F12", role: "Canvas, near-black" },
    { name: "Surface", hex: "#16181D", role: "Panel, elevation 1" },
    { name: "Raised", hex: "#1E2027", role: "Panel, elevation 2" },
    { name: "Hairline", hex: "#2A2D36", role: "Borders and dividers" },
    { name: "Ink", hex: "#E8E9EB", role: "Primary text, warm white" },
    { name: "Periwinkle", hex: "#6E8FFF", role: "Accent, focus and primary actions" },
  ],
  typography: [
    { role: "Body / UI", family: "Inter, 400 / 500 / 600", note: "14-15px/1.5. Avoid 700 on dark; bloom smears the strokes at screen distance." },
    { role: "Display", family: "Inter, 500 / 600", note: "36 to 52px. Tight tracking on 600, never 800. Heavy weights smear on dark." },
    { role: "Spec", family: "JetBrains Mono, 9-11px", note: "Logs, exit codes, PIDs. Uppercase, dim, tracked." },
  ],
  components: [
    {
      name: "Button",
      description:
        "A filled periwinkle slab: solid, flat, deliberate. On hover the fill brightens a half step; on press it drops two shadow stops. No glow.",
      code: `export const PrimaryButton = () => (
  <button className="h-10 inline-flex items-center gap-2 rounded-md bg-[#6E8FFF] px-5 text-sm font-semibold text-[#0E0F12] transition-colors hover:bg-[#7F9BFF] active:bg-[#5A7BFF]">
    Get started
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-col items-start gap-3 s-panel rounded-xl p-5">
          <button className="h-10 inline-flex items-center gap-2 rounded-md bg-[#6E8FFF] px-5 text-sm font-semibold text-[#0E0F12] transition-colors hover:bg-[#7F9BFF] active:bg-[#5A7BFF]">
            Get started
          </button>
          <a href="#" className="font-mono text-xs font-medium text-[#9CA0A8] underline underline-offset-4 decoration-[#2A2D36] hover:text-[#E8E9EB]">
            docs →
          </a>
        </div>
      ),
    },
    {
      name: "Input",
      description:
        "A slightly lifted sunken well. The border handles focus with no glow and no ring, just the hairline shifting periwinkle. The caret matches the accent.",
      code: `export const EmailField = () => (
  <label className="block w-60">
    <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.28em] text-[#9CA0A8]">Email</span>
    <input
      type="email"
      placeholder="you@company.com"
      className="h-10 w-full rounded-md border border-[#2A2D36] bg-[#16181D] px-4 text-[13px] text-[#E8E9EB] outline-none transition-colors caret-[#6E8FFF] placeholder:text-[#5A5D66] focus:border-[#6E8FFF]"
    />
  </label>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-col items-center s-panel rounded-xl p-5">
          <label className="w-full">
            <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.28em] text-[#9CA0A8]">Email</span>
            <input
              type="email"
              placeholder="you@company.com"
              className="h-10 w-full rounded-md border border-[#2A2D36] bg-[#16181D] px-4 text-[13px] text-[#E8E9EB] outline-none transition-colors caret-[#6E8FFF] placeholder:text-[#5A5D66] focus:border-[#6E8FFF]"
            />
          </label>
        </div>
      ),
    },
    {
      name: "Badge",
      description:
        "A quiet chip: filled raised panel with periwinkle text for the one thing that matters (v2.4.0). Everything else stays gray.",
      code: `export const StatusBadge = () => (
  <span className="inline-flex items-center gap-2 rounded-md border border-[#2A2D36] bg-[#1E2027] px-3 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.28em] text-[#6E8FFF]">
    Stable
  </span>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-wrap items-center justify-center gap-2 s-panel rounded-xl p-5">
          <span className="inline-flex items-center gap-2 rounded-md border border-[#2A2D36] bg-[#1E2027] px-3 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.28em] text-[#6E8FFF]">
            Stable
          </span>
          <span className="inline-flex items-center gap-2 rounded-md border border-[#2A2D36] bg-[#16181D] px-3 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.28em] text-[#9CA0A8]">
            v2.4.0
          </span>
        </div>
      ),
    },
    {
      name: "Card",
      description:
        "A hairline container with a periwinkle kicker and one line of log output. Borders separate contexts; shadows separate nothing.",
      code: `export const ChangelogCard = () => (
  <article className="w-64 rounded-md border border-[#2A2D36] bg-[#16181D] p-4">
    <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#6E8FFF]">EXIT / 0</p>
    <h3 className="mt-2 font-sans text-base font-semibold leading-snug text-[#E8E9EB]">Faster search, fewer keystrokes.</h3>
    <p className="mt-2 font-mono text-[9px] leading-snug text-[#9CA0A8]">{"// results stream in as you type; queries now 80ms"}</p>
  </article>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-col justify-center s-panel rounded-xl p-4">
          <article className="w-full rounded-md border border-[#2A2D36] bg-[#16181D] p-4">
            <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#6E8FFF]">EXIT / 0</p>
            <h3 className="mt-2 font-sans text-base font-semibold leading-snug text-[#E8E9EB]">Faster search, fewer keystrokes.</h3>
            <p className="mt-2 font-mono text-[9px] leading-snug text-[#9CA0A8]">{"// results stream in as you type; queries now 80ms"}</p>
          </article>
        </div>
      ),
    },
    {
      name: "Nav bar",
      description:
        "Hairline top rail: near-black, gray wordmark, periwinkle dot. Zero elevation, zero brand, zero glow. It belongs on a workstation.",
      code: `export const NavBar = () => (
  <header className="flex h-12 w-full items-center justify-between border-b border-[#2A2D36] bg-[#0E0F12] px-4">
    <span className="font-mono text-[13px] font-medium tracking-tight text-[#E8E9EB]">acme<span className="text-[#6E8FFF]">.</span></span>
    <nav className="flex gap-5">
      {["ENV", "BUILD", "DOCS", "ABOUT"].map((item) => (
        <a key={item} href="#" className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#9CA0A8] transition-colors hover:text-[#E8E9EB]">{item}</a>
      ))}
    </nav>
  </header>
);`,
      size: "wideShort",
      preview: (
        <div className="flex h-full w-full flex-col justify-center rounded-md">
          <div className="flex h-12 w-full items-center justify-between border-b border-[#2A2D36] bg-[#0E0F12] px-4">
            <span className="font-mono text-[13px] font-medium tracking-tight text-[#E8E9EB]">acme<span className="text-[#6E8FFF]">.</span></span>
            <nav className="flex gap-5">
              {["ENV", "BUILD", "DOCS", "ABOUT"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#9CA0A8] transition-colors hover:text-[#E8E9EB]"
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
    "Borders separate; shadows almost never. Dark needs edges, not depth.",
    "Three elevation levels max: abyss, surface, raised. Stop there.",
    "Ink is #E8E9EB, never #FFFFFF. Warm white doesn't bloom.",
    "Accent means interaction only: primary actions and focus, nothing else.",
  ],
  donts: [
    "Don't use pure black #000. #0E0F12 is deliberate; #000 is an absence.",
    "Don't use glow shadows. Dark UI eats glow and turns it into smear.",
    "Don't use more than one accent hue. Periwinkle is the only accent.",
    "Don't set body text heavier than 600 weight. Bloom hits at 1x DPR.",
  ],
};
