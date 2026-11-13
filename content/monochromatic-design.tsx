import type { StyleContent } from "@/lib/style-content";

export const monochromaticDesign: StyleContent = {
  theme: {
    base: "#0A1626",
    background: "linear-gradient(180deg, #0A1626 0%, #0C1B30 100%)",
    surface: "#0F2138",
    surface2: "#16304D",
    line: "#22415F",
    text: "#DCE9F7",
    muted: "#7E9BB8",
    accent: "#4C9AFF",
    radius: "10px",
    display: "font-sans font-semibold tracking-[-0.02em]",
    displayItalicLast: false,
    shadow: "0 1px 0 rgba(220,233,247,0.05), 0 16px 40px rgba(0,0,0,0.35)",
  },
  what: "Monochromatic Design builds an entire interface from one hue: here a single blue, pushed from near-black abyss to pale ice. Hierarchy comes from lightness, not from new colors; depth comes from layers of the same family.",
  origin: "It is a cornerstone of modernist and Swiss practice, later adopted by digital design systems that needed calm, cohesive palettes, from IBM's blue lineage to the single-hue interfaces of 2010s productivity tools.",
  bestFor: [
    "Data-heavy products that need calm",
    "Brands with one strong signature color",
    "Editorial and portfolio surfaces",
    "Design systems with strict token budgets",
  ],
  avoid: [
    "Products that rely on color-coded categories",
    "Playful, high-energy consumer campaigns",
    "Accessibility contexts where hue alone signals state",
  ],
  palette: [
    { name: "Abyss", hex: "#0A1626", role: "Canvas, the deepest step" },
    { name: "Deep", hex: "#0F2138", role: "Surface, panels" },
    { name: "Mid", hex: "#16304D", role: "Raised, sunken wells" },
    { name: "Signal", hex: "#4C9AFF", role: "Accent, the one saturated step" },
    { name: "Steel", hex: "#7E9BB8", role: "Muted text, mid-light" },
    { name: "Ice", hex: "#DCE9F7", role: "Primary text, lightest step" },
  ],
  typography: [
    { role: "Display", family: "Inter, 500 / 600", note: "40 to 60px, tight tracking. One hue means type weight carries the hierarchy." },
    { role: "Body", family: "Inter, 400 / 500", note: "14-15px/1.6. Use Steel for secondary copy and Ice for primary." },
    { role: "Spec", family: "JetBrains Mono, 9-11px", note: "Labels in Signal or Steel. Never introduce a second hue." },
  ],
  components: [
    {
      name: "Button",
      description:
        "The one saturated step: a signal-blue slab on deep blue. Hover adds lightness, not a new color; the label stays abyss-dark for contrast.",
      code: `export const PrimaryButton = () => (
  <button className="h-10 rounded-md bg-[#4C9AFF] px-5 text-sm font-semibold text-[#0A1626] transition-colors hover:bg-[#6BAAFF]">
    Get started
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-col items-start gap-3 s-panel rounded-xl p-5">
          <button className="h-10 rounded-md bg-[#4C9AFF] px-5 text-sm font-semibold text-[#0A1626] transition-colors hover:bg-[#6BAAFF]">
            Get started
          </button>
          <a href="#" className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#7E9BB8] underline underline-offset-4 decoration-[#22415F] hover:text-[#DCE9F7]">
            Read the docs →
          </a>
        </div>
      ),
    },
    {
      name: "Input",
      description:
        "A deeper well in the same hue: mid-blue field, rim border, signal caret. Focus brightens the rim one step; no ring, no glow.",
      code: `export const EmailField = () => (
  <label className="block w-60">
    <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.26em] text-[#7E9BB8]">Email</span>
    <input
      type="email"
      placeholder="you@company.com"
      className="h-10 w-full rounded-md border border-[#22415F] bg-[#16304D] px-4 text-[13px] text-[#DCE9F7] outline-none transition-colors caret-[#4C9AFF] placeholder:text-[#54718C] focus:border-[#4C9AFF]"
    />
  </label>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-col items-center s-panel rounded-xl p-5">
          <label className="w-full">
            <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.26em] text-[#7E9BB8]">Email</span>
            <input
              type="email"
              placeholder="you@company.com"
              className="h-10 w-full rounded-md border border-[#22415F] bg-[#16304D] px-4 text-[13px] text-[#DCE9F7] outline-none transition-colors caret-[#4C9AFF] placeholder:text-[#54718C] focus:border-[#4C9AFF]"
            />
          </label>
        </div>
      ),
    },
    {
      name: "Badge",
      description:
        "A tinted chip: translucent signal over deep blue, with a lighter blue label. Same hue, two more steps of light.",
      code: `export const StatusBadge = () => (
  <span className="inline-flex items-center gap-2 rounded-md border border-[#4C9AFF]/30 bg-[#4C9AFF]/10 px-3 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.26em] text-[#9CC4FF]">
    Stable
  </span>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-wrap items-center justify-center gap-2 s-panel rounded-xl p-5">
          <span className="inline-flex items-center gap-2 rounded-md border border-[#4C9AFF]/30 bg-[#4C9AFF]/10 px-3 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.26em] text-[#9CC4FF]">
            Stable
          </span>
          <span className="inline-flex items-center gap-2 rounded-md border border-[#22415F] bg-[#16304D] px-3 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.26em] text-[#7E9BB8]">
            v2.4.0
          </span>
        </div>
      ),
    },
    {
      name: "Card",
      description:
        "A depth study: panel, headline and three bars stepping from full signal to 30% opacity. One hue, four levels of light; no other color is allowed.",
      code: `export const ChangelogCard = () => (
  <article className="w-64 rounded-xl border border-[#22415F] bg-[#0F2138] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
    <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#4C9AFF]">Depth / 04</p>
    <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-[#DCE9F7]">Faster search, fewer keystrokes.</h3>
    <div className="mt-4 space-y-1.5">
      <div className="h-1.5 w-full rounded-full bg-[#4C9AFF]" />
      <div className="h-1.5 w-4/5 rounded-full bg-[#4C9AFF]/60" />
      <div className="h-1.5 w-3/5 rounded-full bg-[#4C9AFF]/30" />
    </div>
    <p className="mt-3 font-mono text-[9px] text-[#7E9BB8]">{"// one hue; four levels of light"}</p>
  </article>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-col justify-center s-panel rounded-xl p-4">
          <article className="w-full rounded-xl border border-[#22415F] bg-[#0F2138] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
            <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#4C9AFF]">Depth / 04</p>
            <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-[#DCE9F7]">Faster search, fewer keystrokes.</h3>
            <div className="mt-4 space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-[#4C9AFF]" />
              <div className="h-1.5 w-4/5 rounded-full bg-[#4C9AFF]/60" />
              <div className="h-1.5 w-3/5 rounded-full bg-[#4C9AFF]/30" />
            </div>
            <p className="mt-3 font-mono text-[9px] text-[#7E9BB8]">{"// one hue; four levels of light"}</p>
          </article>
        </div>
      ),
    },
    {
      name: "Nav bar",
      description:
        "A tonal rail: surface blue, hairline base, ice wordmark and one signal dot. Navigation is separated by lightness alone.",
      code: `export const NavBar = () => (
  <header className="flex h-12 w-full items-center justify-between border-b border-[#22415F] bg-[#0F2138] px-4">
    <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.28em] text-[#DCE9F7]">Acme<span className="text-[#4C9AFF]">.</span></span>
    <nav className="flex gap-5">
      {["PRODUCT", "DOCS", "ABOUT"].map((item) => (
        <a key={item} href="#" className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#7E9BB8] transition-colors hover:text-[#DCE9F7]">{item}</a>
      ))}
    </nav>
  </header>
);`,
      size: "wideShort",
      preview: (
        <div className="flex h-full w-full flex-col justify-center rounded-md">
          <div className="flex h-12 w-full items-center justify-between border-b border-[#22415F] bg-[#0F2138] px-4">
            <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.28em] text-[#DCE9F7]">Acme<span className="text-[#4C9AFF]">.</span></span>
            <nav className="flex gap-5">
              {["PRODUCT", "DOCS", "ABOUT"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#7E9BB8] transition-colors hover:text-[#DCE9F7]"
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
    "Build a ramp of 6 to 8 steps from one hue, and use every step.",
    "Hierarchy by lightness first, type weight second.",
    "Keep one saturated step for interaction only.",
    "Check contrast on the two lightest steps before shipping.",
  ],
  donts: [
    "Don't sneak in a second hue. Even a 'neutral' warm gray breaks it.",
    "Don't use color alone to signal state; add an icon or text.",
    "Don't put signal blue on everything. It stops being signal.",
    "Don't skip mid-steps. The ramp needs a smooth gradient.",
  ],
};
