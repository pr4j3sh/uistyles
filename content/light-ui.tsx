import type { StyleContent } from "@/lib/style-content";

export const lightUi: StyleContent = {
  theme: {
    base: "#FAFAFA",
    background: "#FAFAFA",
    surface: "#FFFFFF",
    surface2: "#F1F1F1",
    line: "#E4E4E7",
    text: "#111111",
    muted: "#666666",
    accent: "#0070F3",
    radius: "8px",
    display: "font-sans font-semibold tracking-[-0.02em]",
    displayItalicLast: false,
    shadow: "0 1px 3px rgba(17,17,17,0.08), 0 8px 24px rgba(17,17,17,0.06)",
  },
  what: "Light UI is the clean optimistic workhorse — near-white canvas, hairline borders, ink-dark type, one confident accent. Engineered for sunlit rooms and fast reading; everything is quiet except the task at hand.",
  origin: "From 2014 Stripe documentation prestige through Vercel/Linear's 2021–22 light themes — the airy counterpart to dark engineering UI, built for daylight and docs.",
  bestFor: [
    "Developer docs and marketing-adjacent surfaces",
    "Productivity and task apps",
    "Reading-first tools and notes",
    "Consumer products that want optimism",
  ],
  avoid: [
    "Dark-room engineering contexts",
    "Heavy data-dense dashboards needing contrast depth",
    "Minimal aesthetic fatigue from Vercel-clone sameness",
  ],
  palette: [
    { name: "Paper", hex: "#FAFAFA", role: "Canvas — near-white" },
    { name: "Ink", hex: "#111111", role: "Primary text & primary action" },
    { name: "Slate", hex: "#666666", role: "Secondary text" },
    { name: "Hairline", hex: "#E4E4E7", role: "Borders & dividers" },
    { name: "Mist", hex: "#F1F1F1", role: "Sunken panels" },
    { name: "Blue", hex: "#0070F3", role: "Accent — focus & links" },
  ],
  typography: [
    { role: "Body / UI", family: "Inter — 400 / 500 / 600", note: "14–15px/1.5. 600 for headings, never 700+ — light UI punishes heaviness." },
    { role: "Display", family: "Inter — 500 / 600", note: "36–56px, tight tracking. Airy by construction, not emptiness." },
    { role: "Spec", family: "JetBrains Mono — 9–11px", note: "Exit codes, versions, CI tags — uppercase, tracked, dim." },
  ],
  components: [
    {
      name: "Button",
      description:
        "The black slab — Vercel's primary action. Ink-filled, white text, no glow; hover darkens one stop. The accent blue belongs to links and focus, not this button.",
      code: `export const PrimaryButton = () => (
  <button className="h-10 inline-flex items-center gap-2 rounded-md bg-[#111111] px-5 text-sm font-medium text-white transition-colors hover:bg-[#2E2E2E] active:bg-[#1A1A1A]">
    Get started
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-col items-start gap-3 s-panel rounded-xl p-5">
          <button className="h-10 inline-flex items-center gap-2 rounded-md bg-[#111111] px-5 text-sm font-medium text-white transition-colors hover:bg-[#2E2E2E] active:bg-[#1A1A1A]">
            Get started
          </button>
          <a href="#" className="font-mono text-xs font-medium text-[#0070F3] underline underline-offset-4 decoration-[#0070F3]/40 hover:decoration-[#0070F3]">
            docs →
          </a>
        </div>
      ),
    },
    {
      name: "Input",
      description:
        "A sunken mist field — hairline handles focus with the accent blue; no glow, no ring, just the 1px lighting up. Caret matches accent.",
      code: `export const EmailField = () => (
  <label className="block w-60">
    <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.28em] text-[#666666]">Email</span>
    <input
      type="email"
      placeholder="you@company.com"
      className="h-10 w-full rounded-md border border-[#E4E4E7] bg-[#FAFAFA] px-4 text-[13px] text-[#111111] outline-none transition-colors caret-[#0070F3] placeholder:text-[#A1A1AA] focus:border-[#0070F3]"
    />
  </label>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-col items-center s-panel rounded-xl p-5">
          <label className="w-full">
            <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.28em] text-[#666666]">Email</span>
            <input
              type="email"
              placeholder="you@company.com"
              className="h-10 w-full rounded-md border border-[#E4E4E7] bg-[#FAFAFA] px-4 text-[13px] text-[#111111] outline-none transition-colors caret-[#0070F3] placeholder:text-[#A1A1AA] focus:border-[#0070F3]"
            />
          </label>
        </div>
      ),
    },
    {
      name: "Badge",
      description:
        "A quiet chip — white on hairline with the accent blue for the one thing that matters. Everything else gray.",
      code: `export const StatusBadge = () => (
  <span className="inline-flex items-center gap-2 rounded-md border border-[#E4E4E7] bg-white px-3 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.28em] text-[#0070F3]">
    Stable
  </span>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-wrap items-center justify-center gap-2 s-panel rounded-xl p-5">
          <span className="inline-flex items-center gap-2 rounded-md border border-[#E4E4E7] bg-white px-3 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.28em] text-[#0070F3]">
            Stable
          </span>
          <span className="inline-flex items-center gap-2 rounded-md border border-[#E4E4E7] bg-[#FAFAFA] px-3 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.28em] text-[#666666]">
            v2.4.0
          </span>
        </div>
      ),
    },
    {
      name: "Card",
      description:
        "A white card on paper — hairline, soft shadow, hairline kicker. No color except one blue link; the task is the hero.",
      code: `export const ChangelogCard = () => (
  <article className="w-64 rounded-md border border-[#E4E4E7] bg-white p-4 shadow-[0_1px_2px_rgba(17,17,17,0.06)]">
    <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#0070F3]">EXIT / 0</p>
    <h3 className="mt-2 font-sans text-base font-semibold leading-snug text-[#111111]">Faster search, fewer keystrokes.</h3>
    <p className="mt-2 font-mono text-[9px] leading-snug text-[#666666]">{"// results stream in as you type; queries now 80ms"}</p>
  </article>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-col justify-center s-panel rounded-xl p-4">
          <article className="w-full rounded-md border border-[#E4E4E7] bg-white p-4 shadow-[0_1px_2px_rgba(17,17,17,0.06)]">
            <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#0070F3]">EXIT / 0</p>
            <h3 className="mt-2 font-sans text-base font-semibold leading-snug text-[#111111]">Faster search, fewer keystrokes.</h3>
            <p className="mt-2 font-mono text-[9px] leading-snug text-[#666666]">{"// results stream in as you type; queries now 80ms"}</p>
          </article>
        </div>
      ),
    },
    {
      name: "Nav bar",
      description:
        "Hairline bottom rail — paper background, gray wordmark, blue dot. No elevation, no brand; the docs are the hero.",
      code: `export const NavBar = () => (
  <header className="flex h-12 w-full items-center justify-between border-b border-[#E4E4E7] bg-[#FAFAFA] px-4">
    <span className="font-mono text-[13px] font-medium tracking-tight text-[#111111]">acme<span className="text-[#0070F3]">.</span></span>
    <nav className="flex gap-5">
      {["DOCS", "BLOG", "ABOUT"].map((item) => (
        <a key={item} href="#" className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#666666] transition-colors hover:text-[#111111]">{item}</a>
      ))}
    </nav>
  </header>
);`,
      size: "wideShort",
      preview: (
        <div className="flex h-full w-full flex-col justify-center rounded-md">
          <div className="flex h-12 w-full items-center justify-between border-b border-[#E4E4E7] bg-[#FAFAFA] px-4">
            <span className="font-mono text-[13px] font-medium tracking-tight text-[#111111]">acme<span className="text-[#0070F3]">.</span></span>
            <nav className="flex gap-5">
              {["DOCS", "BLOG", "ABOUT"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#666666] transition-colors hover:text-[#111111]"
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
    "Hairline borders separate everything — card, row, column; shadow only on cards",
    "Accent blue = focus and links only — primary action is always black slab",
    "Ink-dark text, never pure #000 — #111 keeps the page from slapping",
    "Whitespace is the budget — keep cells generous, airy, quiet",
  ],
  donts: [
    "Don't use glows — light UI uses shadows, never bloom",
    "Don't add color for variety — black / gray / one blue; stop there",
    "Don't set body text above 600 — light UI punishes heaviness",
    "Don't stack more than two elevation levels — paper / white; done",
  ],
};
