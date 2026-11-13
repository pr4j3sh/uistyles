import type { StyleContent } from "@/lib/style-content";

export const flatDesign: StyleContent = {
  theme: {
    base: "#FFFFFF",
    background: "#FFFFFF",
    surface: "#FFFFFF",
    surface2: "#F3F4F6",
    line: "#E5E7EB",
    text: "#1F2937",
    muted: "#6B7280",
    accent: "#0078D7",
    radius: "0px",
    display: "font-sans font-semibold tracking-[-0.02em]",
    displayItalicLast: false,
  },
  what: "Flat design strips away every skeuomorphic cue — no gradients, no shadows, no textures, no bevels. Hierarchy is built from solid color blocks, simple geometry and type weight alone, so interfaces stay fast to read and fast to build.",
  origin: "Born from Microsoft's Metro design language (2010–12) and Apple's radical iOS 7 redesign (2013), flat design rejected the glossy realism of the web 2.0 era and became the default visual grammar of early mobile and modern SaaS.",
  bestFor: [
    "Dashboards and data-dense apps",
    "SaaS products and design systems",
    "Marketing sites that ship fast and scale",
    "Icons and illustration systems",
  ],
  avoid: [
    "Brands that need rich, tactile warmth",
    "Interfaces where elevation must be felt, not seen",
    "Content where subtle depth aids comprehension",
  ],
  palette: [
    { name: "Canvas", hex: "#FFFFFF", role: "Background" },
    { name: "Ink", hex: "#1F2937", role: "Primary text" },
    { name: "Azure", hex: "#0078D7", role: "Primary action & links" },
    { name: "Teal", hex: "#00ABA9", role: "Secondary action" },
    { name: "Amber", hex: "#FFB900", role: "Warnings & highlights" },
    { name: "Porcelain", hex: "#F3F4F6", role: "Sunken panels & tiles" },
  ],
  typography: [
    { role: "UI / Body", family: "Open Sans — 400 / 600 / 700", note: "The canonical flat face; set labels and body at 13–15px, 600 weight for actions." },
    { role: "Display", family: "Metro LG / Open Sans — 600", note: "Tight, confident headlines; all weight, no italics." },
    { role: "Metadata", family: "JetBrains Mono — 9–11px", note: "Tile labels and section kickers. Uppercase, wide tracking." },
  ],
  components: [
    {
      name: "Button",
      description:
        "A solid slab of color — no gradient, no shadow, no radius. Sentence case, 600 weight; the hover state is one step darker on the same hue, never a glow.",
      code: `export const PrimaryButton = () => (
  <button className="inline-flex items-center gap-2 bg-[#0078D7] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#005FB8]">
    Get started
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-col items-center gap-3 s-panel rounded-md p-4">
          <button className="inline-flex items-center gap-2 bg-[#0078D7] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#005FB8]">
            Get started
          </button>
          <button className="text-sm font-semibold text-[#0078D7] transition-colors hover:text-[#005FB8]">
            or read the docs
          </button>
        </div>
      ),
    },
    {
      name: "Input",
      description:
        "A filled gray field that ignites on focus — background lifts to white and a two-pixel azure keyline appears. No inner shadow, no corner carving.",
      code: `export const EmailField = () => (
  <label className="block w-60">
    <span className="mb-1.5 block text-xs font-semibold text-[#1F2937]">Email</span>
    <input
      type="email"
      placeholder="you@company.com"
      className="w-full border-2 border-transparent bg-[#F3F4F6] px-4 py-2.5 text-[15px] text-[#1F2937] outline-none transition-colors placeholder:text-[#9CA3AF] focus:border-[#0078D7] focus:bg-white"
    />
  </label>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-col items-center s-panel rounded-md p-4">
          <label className="w-full">
            <span className="mb-1.5 block text-xs font-semibold text-[#1F2937]">Email</span>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full border-2 border-transparent bg-[#F3F4F6] px-4 py-2.5 text-[15px] text-[#1F2937] outline-none transition-colors placeholder:text-[#9CA3AF] focus:border-[#0078D7] focus:bg-white"
            />
          </label>
        </div>
      ),
    },
    {
      name: "Badge",
      description:
        "A solid chip of meaning — azure, teal or amber with white bold text, squared corners. Color is the message; size and weight agree with it.",
      code: `export const StatusBadge = () => (
  <span className="inline-flex items-center gap-1.5 bg-[#00ABA9] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-white">
    Stable
  </span>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-wrap items-center justify-center gap-2 s-panel rounded-md p-4">
          <span className="inline-flex items-center gap-1.5 bg-[#00ABA9] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-white">
            Stable
          </span>
          <span className="inline-flex items-center gap-1.5 bg-[#1F2937] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-white">
            v2.4.0
          </span>
          <span className="inline-flex items-center gap-1.5 bg-[#FFB900] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#1F2937]">
            Beta
          </span>
        </div>
      ),
    },
    {
      name: "Card",
      description:
        "The Metro tile: one flat color field, white type, no chrome. Size and color do the entire hierarchy — a small white kicker, a big confident headline.",
      code: `export const ChangelogCard = () => (
  <div className="w-64 bg-[#0078D7] p-5 text-white">
    <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/70">
      Changelog
    </p>
    <h3 className="mt-2 text-lg font-semibold leading-tight">
      Faster search, fewer keystrokes.
    </h3>
    <p className="mt-2 text-sm leading-snug text-white/80">
      Results stream in as you type; queries now run in 80ms.
    </p>
  </div>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-col justify-center s-panel rounded-md p-4">
          <div className="w-full bg-[#0078D7] p-5 text-white">
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/70">
              Changelog
            </p>
            <h3 className="mt-2 text-lg font-semibold leading-tight">
              Faster search, fewer keystrokes.
            </h3>
            <p className="mt-2 text-sm leading-snug text-white/80">
              Results stream in as you type; queries now run in 80ms.
            </p>
          </div>
        </div>
      ),
    },
    {
      name: "Nav bar",
      description:
        "Wordmark left, flat links, no icons and no borders inside — one four-pixel azure rule at the bottom does all the wayfinding.",
      code: `export const NavBar = () => (
  <header className="flex h-14 w-full items-center justify-between border-b-4 border-[#0078D7] bg-white px-6">
    <span className="text-[17px] font-bold tracking-tight text-[#1F2937]">
      acme<span className="text-[#0078D7]">.</span>
    </span>
    <nav className="hidden gap-6 sm:flex">
      {["Product", "Pricing", "Changelog", "Docs"].map((item) => (
        <a key={item} href="#" className="text-sm font-semibold text-[#1F2937] transition-colors hover:text-[#0078D7]">{item}</a>
      ))}
    </nav>
    <button className="bg-[#0078D7] px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-[#005FB8]">Sign in</button>
  </header>
);`,
      size: "wideShort",
      preview: (
        <div className="flex h-full w-full flex-col justify-center rounded-md">
          <div className="flex h-14 w-full items-center justify-between border-b-4 border-[#0078D7] bg-white px-6">
            <span className="text-[17px] font-bold tracking-tight text-[#1F2937]">
              acme<span className="text-[#0078D7]">.</span>
            </span>
            <nav className="hidden gap-6 sm:flex">
              {["Product", "Pricing", "Changelog", "Docs"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-semibold text-[#1F2937] transition-colors hover:text-[#0078D7]"
                >
                  {item}
                </a>
              ))}
            </nav>
            <button className="bg-[#0078D7] px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-[#005FB8]">
              Sign in
            </button>
          </div>
        </div>
      ),
    },
  ],
  dos: [
    "Reserve color for meaning — one azure per screen, purpose per hue",
    "Use weight and size for hierarchy, never elevation",
    "Keep geometry simple: squares and generous rectangles",
    "Ship confident, high-contrast text over every fill",
  ],
  donts: [
    "Don't add gradients, shadows, bevels or textures",
    "Don't round corners — flat design is honest geometry",
    "Don't pick a rainbow — three intentional hues, max",
    "Don't shrink touch targets — flat removes affordance, so go big",
  ],
};
