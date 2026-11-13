import type { StyleContent } from "@/lib/style-content";

export const grayscaleUi: StyleContent = {
  theme: {
    base: "#0A0A0A",
    background: "linear-gradient(180deg, #0A0A0A 0%, #111111 100%)",
    surface: "#121212",
    surface2: "#1A1A1A",
    line: "#2A2A2A",
    text: "#F5F5F5",
    muted: "#8C8C8C",
    accent: "#F5F5F5",
    radius: "8px",
    display: "font-sans font-semibold tracking-[-0.035em]",
    displayItalicLast: false,
    shadow: "0 1px 0 rgba(255,255,255,0.04), 0 18px 44px rgba(0,0,0,0.55)",
  },
  what: "Grayscale UI builds the entire interface from black, white and the values between. With no hue to separate things, structure carries the page: value steps, type weight, spacing and edges. The restraint reads as confidence, and it puts the content first.",
  origin: "Black-and-white photography and Swiss poster design proved that tone alone can separate foreground from ground. Interface systems picked up the discipline through monochrome print grids and later through neutral token sets that start in gray before brand color arrives.",
  bestFor: [
    "Editorial, portfolio and studio sites",
    "Products where the content should lead",
    "Brand systems with a tight color budget",
    "Photography, film and archive tools",
  ],
  avoid: [
    "Dashboards that depend on color-coded states",
    "Playful campaigns that need heat",
    "Charts with many overlapping series",
  ],
  palette: [
    { name: "Carbon", hex: "#0A0A0A", role: "Canvas, the deepest step" },
    { name: "Graphite", hex: "#121212", role: "Surface, panels and cards" },
    { name: "Ash", hex: "#1A1A1A", role: "Raised wells and inputs" },
    { name: "Hairline", hex: "#2A2A2A", role: "Borders and dividers" },
    { name: "Steel", hex: "#8C8C8C", role: "Muted text and icons" },
    { name: "Porcelain", hex: "#F5F5F5", role: "Primary text and the one action tone" },
  ],
  typography: [
    { role: "Display", family: "Inter, 500 / 600", note: "40 to 64px, tight tracking. With no hue, weight and size carry the hierarchy." },
    { role: "Body", family: "Inter, 400 / 500", note: "14-15px/1.6. Porcelain for primary copy, Steel for support." },
    { role: "Spec", family: "JetBrains Mono, 9-11px", note: "Labels and values in Steel. Uppercase and wide tracking keep them quiet." },
  ],
  components: [
    {
      name: "Button",
      description:
        "The primary action is a Porcelain slab with Carbon text. Hover steps the fill down one value; no hue is needed to make it read as the main path.",
      code: `export const PrimaryButton = () => (
  <button className="h-10 rounded-md bg-[#F5F5F5] px-5 text-sm font-semibold text-[#0A0A0A] transition-colors hover:bg-[#D9D9D9]">
    Get started
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-col items-start gap-3 s-panel rounded-xl p-5">
          <button className="h-10 rounded-md bg-[#F5F5F5] px-5 text-sm font-semibold text-[#0A0A0A] transition-colors hover:bg-[#D9D9D9]">
            Get started
          </button>
          <a href="#" className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#8C8C8C] underline underline-offset-4 decoration-[#2A2A2A] hover:text-[#F5F5F5]">
            Read the docs →
          </a>
        </div>
      ),
    },
    {
      name: "Input",
      description:
        "A field sits one value above the card: Ash on Graphite, held by a Hairline rim. Focus brightens the rim to Porcelain and nothing else moves.",
      code: `export const EmailField = () => (
  <label className="block w-60">
    <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.26em] text-[#8C8C8C]">Email</span>
    <input
      type="email"
      placeholder="you@company.com"
      className="h-10 w-full rounded-md border border-[#2A2A2A] bg-[#1A1A1A] px-4 text-[13px] text-[#F5F5F5] outline-none transition-colors caret-[#F5F5F5] placeholder:text-[#5E5E5E] focus:border-[#F5F5F5]"
    />
  </label>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-col items-center s-panel rounded-xl p-5">
          <label className="w-full">
            <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.26em] text-[#8C8C8C]">Email</span>
            <input
              type="email"
              placeholder="you@company.com"
              className="h-10 w-full rounded-md border border-[#2A2A2A] bg-[#1A1A1A] px-4 text-[13px] text-[#F5F5F5] outline-none transition-colors caret-[#F5F5F5] placeholder:text-[#5E5E5E] focus:border-[#F5F5F5]"
            />
          </label>
        </div>
      ),
    },
    {
      name: "Badge",
      description:
        "Status chips work as value pairs: an outlined Steel tag for neutral state and a Porcelain tag for the active one. The label carries the meaning.",
      code: `export const StatusBadge = () => (
  <span className="inline-flex items-center gap-2 rounded-md border border-[#2A2A2A] bg-[#1A1A1A] px-3 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.26em] text-[#8C8C8C]">
    Stable
  </span>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-wrap items-center justify-center gap-2 s-panel rounded-xl p-5">
          <span className="inline-flex items-center gap-2 rounded-md border border-[#2A2A2A] bg-[#1A1A1A] px-3 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.26em] text-[#8C8C8C]">
            Stable
          </span>
          <span className="inline-flex items-center gap-2 rounded-md bg-[#F5F5F5] px-3 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.26em] text-[#0A0A0A]">
            Live
          </span>
        </div>
      ),
    },
    {
      name: "Card",
      description:
        "A Graphite panel on Carbon with a Hairline edge. The three bars run Porcelain, mid gray and low gray, so depth comes from the ramp itself.",
      code: `export const ChangelogCard = () => (
  <article className="w-64 rounded-xl border border-[#2A2A2A] bg-[#121212] p-4 shadow-[0_18px_44px_rgba(0,0,0,0.55)]">
    <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#8C8C8C]">Value / 05</p>
    <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-[#F5F5F5]">Less color, more structure.</h3>
    <div className="mt-4 space-y-1.5">
      <div className="h-1.5 w-full rounded-full bg-[#F5F5F5]" />
      <div className="h-1.5 w-4/5 rounded-full bg-[#F5F5F5]/55" />
      <div className="h-1.5 w-3/5 rounded-full bg-[#F5F5F5]/25" />
    </div>
    <p className="mt-3 font-mono text-[9px] text-[#8C8C8C]">{"// five steps, no hue"}</p>
  </article>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-col justify-center s-panel rounded-xl p-4">
          <article className="w-full rounded-xl border border-[#2A2A2A] bg-[#121212] p-4 shadow-[0_18px_44px_rgba(0,0,0,0.55)]">
            <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#8C8C8C]">Value / 05</p>
            <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-[#F5F5F5]">Less color, more structure.</h3>
            <div className="mt-4 space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-[#F5F5F5]" />
              <div className="h-1.5 w-4/5 rounded-full bg-[#F5F5F5]/55" />
              <div className="h-1.5 w-3/5 rounded-full bg-[#F5F5F5]/25" />
            </div>
            <p className="mt-3 font-mono text-[9px] text-[#8C8C8C]">{"// five steps, no hue"}</p>
          </article>
        </div>
      ),
    },
    {
      name: "Nav bar",
      description:
        "A Graphite rail over the Carbon canvas. The current link takes a Porcelain underline, the rest sit in Steel; position is shown by value, not color.",
      code: `export const NavBar = () => (
  <header className="flex h-12 w-full items-center justify-between border-b border-[#2A2A2A] bg-[#121212] px-4">
    <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.28em] text-[#F5F5F5]">Acme<span className="text-[#8C8C8C]">.</span></span>
    <nav className="flex gap-5">
      {["PRODUCT", "DOCS", "ABOUT"].map((item, i) => (
        <a key={item} href="#" className={\`border-b pb-0.5 font-mono text-[9px] uppercase tracking-[0.28em] transition-colors hover:text-[#F5F5F5] \${i === 0 ? "border-[#F5F5F5] text-[#F5F5F5]" : "border-transparent text-[#8C8C8C]"}\`}>{item}</a>
      ))}
    </nav>
  </header>
);`,
      size: "wideShort",
      preview: (
        <div className="flex h-full w-full flex-col justify-center rounded-md">
          <div className="flex h-12 w-full items-center justify-between border-b border-[#2A2A2A] bg-[#121212] px-4">
            <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.28em] text-[#F5F5F5]">Acme<span className="text-[#8C8C8C]">.</span></span>
            <nav className="flex gap-5">
              {["PRODUCT", "DOCS", "ABOUT"].map((item, i) => (
                <a
                  key={item}
                  href="#"
                  className={`border-b pb-0.5 font-mono text-[9px] uppercase tracking-[0.28em] transition-colors hover:text-[#F5F5F5] ${i === 0 ? "border-[#F5F5F5] text-[#F5F5F5]" : "border-transparent text-[#8C8C8C]"}`}
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
    "Build a ramp of five or more values and use every step.",
    "Separate layers with hairlines and value shifts before adding shadow.",
    "Keep Porcelain for text and one primary action.",
    "Test contrast at each step. Gray fails without warning.",
  ],
  donts: [
    "Don't warm or cool the grays. One tinted neutral breaks the set.",
    "Don't signal status with gray alone. Add a word or an icon.",
    "Don't put Porcelain on every button. The primary action disappears.",
    "Don't lean on faint hairlines to explain structure.",
  ],
};
