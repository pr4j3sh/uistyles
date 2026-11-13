import type { StyleContent } from "@/lib/style-content";

export const minimalism: StyleContent = {
  theme: {
    base: "#FAFAF9",
    background: "#FAFAF9",
    surface: "#FFFFFF",
    surface2: "#F4F4F2",
    line: "#E7E5E0",
    text: "#111111",
    muted: "#6B7280",
    accent: "#111111",
    radius: "0.5rem",
    display: "font-sans font-semibold tracking-[-0.035em]",
    displayItalicLast: false,
  },
  what: "Minimalism keeps only what the interface needs. Whitespace does the grouping, hierarchy comes from scale and weight, and decoration is treated as noise. Every element has to justify its place.",
  origin:
    "It grew out of the 1960s art and architecture scene, where Mies van der Rohe's 'less is more' met Dieter Rams' work at Braun. The web adopted it through flat design and Apple's product era, and it is still the default grammar for serious product UI.",
  bestFor: [
    "Productivity and focus tools",
    "Premium SaaS and developer tools",
    "Content where reading is the product",
    "Long-lived design systems",
  ],
  avoid: [
    "Playful or entertainment-first brands",
    "Dense dashboards that need strong signaling",
    "Marketing pages that must feel loud or maximalist",
  ],
  palette: [
    { name: "Paper", hex: "#FAFAF9", role: "Background" },
    { name: "Ink", hex: "#111111", role: "Text & primary actions" },
    { name: "Stone", hex: "#6B7280", role: "Secondary text" },
    { name: "Hairline", hex: "#E7E5E0", role: "Borders & dividers" },
    { name: "Signal", hex: "#C2410C", role: "Rare accent, one per view" },
    { name: "Surface", hex: "#F4F4F2", role: "Sunken panels" },
  ],
  typography: [
    {
      role: "Body / UI",
      family: "Inter, 400 / 500",
      note: "Neutral grotesque with a tall x-height. Set 15-16px with 1.5-1.6 leading.",
    },
    {
      role: "Display accent",
      family: "Instrument Serif, italic",
      note: "One italic word per headline, nothing more.",
    },
    {
      role: "Metadata",
      family: "JetBrains Mono, 9-11px",
      note: "Labels, kickers, timestamps. Uppercase with wide tracking.",
    },
  ],
  components: [
    {
      name: "Button",
      description:
        "One solid black action per view. Secondary actions are quiet text or hairline-bordered ghosts, never a second black button.",
      code: `export const PrimaryButton = () => (
  <button className="inline-flex items-center gap-2 rounded-sm bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700">
    Get started <span aria-hidden>→</span>
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-col items-center gap-3 s-panel rounded-md p-4">
          <button className="inline-flex items-center gap-2 rounded-sm bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700">
            Get started
            <span aria-hidden>→</span>
          </button>
          <button className="text-sm font-medium text-neutral-700 underline decoration-neutral-400 underline-offset-4 transition-colors hover:text-neutral-900">
            or read the docs
          </button>
        </div>
      ),
    },
    {
      name: "Input",
      description:
        "A quiet rectangle that wakes up on focus. Label above, 15px text inside, hairline border, nothing else.",
      code: `export const EmailField = () => (
  <label className="block w-60">
    <span className="mb-1.5 block font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600">
      Email
    </span>
    <input
      type="email"
      placeholder="you@company.com"
      className="w-full rounded-md border border-neutral-200 bg-white px-4 py-2.5 text-[15px] text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-900"
    />
  </label>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-col items-center s-panel rounded-md p-4">
          <label className="w-full">
            <span className="mb-1.5 block font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600">
              Email
            </span>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-md border border-neutral-200 bg-white px-4 py-2.5 text-[15px] text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-900"
            />
          </label>
        </div>
      ),
    },
    {
      name: "Badge",
      description:
        "Status at a whisper. A neutral pill with tiny mono or 500-weight text. Save the signal orange for the one state that matters most.",
      code: `export const StatusBadge = () => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
    Stable
  </span>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-wrap items-center justify-center gap-2 s-panel rounded-md p-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" /> Stable
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">
            v2.4.0
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-800">
            Beta
          </span>
        </div>
      ),
    },
    {
      name: "Card",
      description:
        "A hairline border and generous padding do all the work. No shadows. Depth comes from whitespace and a clear typographic hierarchy.",
      code: `export const ChangelogCard = () => (
  <div className="w-64 rounded-md border border-neutral-200 bg-white p-4">
    <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-neutral-400">
      Changelog
    </p>
    <h3 className="mt-1 text-[13px] font-semibold leading-snug text-neutral-900">
      Faster search, fewer keystrokes.
    </h3>
    <p className="mt-0.5 text-[10.5px] leading-relaxed text-neutral-500">
      Results stream in as you type; queries now run in 80ms.
    </p>
  </div>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-col justify-center s-panel rounded-md p-4">
          <div className="w-full rounded-md border border-neutral-200 bg-white p-4">
            <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-neutral-400">
              Changelog
            </p>
            <h3 className="mt-1 text-[13px] font-semibold leading-snug text-neutral-900">
              Faster search, fewer keystrokes.
            </h3>
            <p className="mt-0.5 text-[10.5px] leading-relaxed text-neutral-500">
              Results stream in as you type; queries now run in 80ms.
            </p>
          </div>
        </div>
      ),
    },
    {
      name: "Nav bar",
      description:
        "Logo left, four links, one black button right. The links carry no background and no icons. Type and alignment handle the wayfinding.",
      code: `export const NavBar = () => (
  <header className="flex h-14 w-full items-center justify-between border-b border-neutral-200 bg-white/80 px-6 backdrop-blur">
    <span className="text-[15px] font-semibold tracking-tight text-neutral-900">
      acme<span className="text-orange-700">.</span>
    </span>
    <nav className="hidden gap-6 sm:flex">
      {["Product", "Pricing", "Changelog", "Docs"].map((item) => (
        <a key={item} href="#" className="text-sm text-neutral-500 transition-colors hover:text-neutral-900">{item}</a>
      ))}
    </nav>
    <button className="rounded-sm bg-neutral-900 px-4 py-1.5 text-[13px] font-medium text-white transition-colors hover:bg-neutral-700">Sign in</button>
  </header>
);`,
      size: "wideShort",
      preview: (
        <div className="flex h-full w-full flex-col justify-center rounded-md bg-white">
          <div className="flex h-14 w-full items-center justify-between border-b border-neutral-200 bg-white/80 px-6 backdrop-blur">
            <span className="text-[15px] font-semibold tracking-tight text-neutral-900">
              acme<span className="text-orange-700">.</span>
            </span>
            <nav className="hidden gap-6 sm:flex">
              {["Product", "Pricing", "Changelog", "Docs"].map((item) => (
                <a key={item} href="#" className="text-sm text-neutral-500 transition-colors hover:text-neutral-900">{item}</a>
              ))}
            </nav>
            <button className="rounded-sm bg-neutral-900 px-4 py-1.5 text-[13px] font-medium text-white transition-colors hover:bg-neutral-700">
              Sign in
            </button>
          </div>
        </div>
      ),
    },
  ],
  dos: [
    "Let whitespace do the grouping. Remove a border before you add one.",
    "Use one black button per screen. Everything else should stay quiet.",
    "Keep the palette to ink, paper and one rare accent.",
    "Set type on a strict modular scale and stick to it.",
  ],
  donts: [
    "Don't add shadows, gradients or glows. Restraint is the style.",
    "Don't use more than two typefaces.",
    "Don't fill empty space. The emptiness is the message.",
    "Don't animate for delight. Animate only to clarify a change.",
  ],
};
