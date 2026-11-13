import type { StyleContent } from "@/lib/style-content";

export const neumorphism: StyleContent = {
  theme: {
    base: "#E0E5EC",
    background: "#E0E5EC",
    surface: "#E0E5EC",
    surface2: "#E0E5EC",
    line: "#D1D9E6",
    text: "#4A4A4A",
    muted: "#8F9BA8",
    accent: "#6C63FF",
    radius: "20px",
    display: "font-sans font-semibold tracking-[-0.01em]",
    displayItalicLast: false,
    shadow: "-9px -9px 18px #ffffff, 9px 9px 18px #a3b1c6",
  },
  what: "Neumorphism renders interfaces as extruded plastic. The background and the surface share the same color, and depth comes entirely from a top-left highlight shadow and a bottom-right shade shadow. Buttons rest raised, wells sit inset, and nothing ever detaches from the page.",
  origin: "It was a 2019 Dribbble revival, led by Adam Morse, Alex Palluco and a wave of 'neumorphism' generators, built on soft-skeuomorph experiments that had circulated since the early CSS shadow days. It peaked in 2019 and 2020 and remains one of the most misused looks in modern UI.",
  bestFor: [
    "Portfolio showcases and design reels",
    "Single-card hero sections",
    "Settings panels, switches and toggles",
    "Calculators and music-player chrome",
  ],
  avoid: [
    "Dense product interfaces",
    "Accessibility-critical paths (contrast failures are common)",
    "Pages with more than two depth levels",
    "Content-first reading contexts",
  ],
  palette: [
    { name: "Surface", hex: "#E0E5EC", role: "Canvas, same as background" },
    { name: "Ink", hex: "#4A4A4A", role: "Primary text" },
    { name: "Shade", hex: "#A3B1C6", role: "Bottom-right shadow" },
    { name: "Highlight", hex: "#FFFFFF", role: "Top-left shadow" },
    { name: "Muted", hex: "#8F9BA8", role: "Secondary text" },
    { name: "Indigo", hex: "#6C63FF", role: "Single accent, pressed state" },
  ],
  typography: [
    { role: "Body / UI", family: "Nunito, 400 / 600 / 700", note: "Rounded terminals are the style. Set 14-16px and avoid weight 800 and above." },
    { role: "Display", family: "Nunito, 600", note: "Headlines at 40 to 64px with soft tracking. Never uppercase unless brief." },
    { role: "Spec", family: "JetBrains Mono, 9-11px", note: "Shadow values and token names. Kickers uppercase, wide tracking." },
  ],
  components: [
    {
      name: "Button",
      description:
        "The raised slab: same color as the page, dual shadows only. When pressed, the shadows invert and the surface sinks below the page plane.",
      code: `export const PrimaryButton = () => (
  <button className="rounded-2xl bg-[#E0E5EC] px-6 py-3 text-sm font-semibold text-[#4A4A4A] shadow-[-6px_-6px_12px_#ffffff,6px_6px_12px_#a3b1c6] transition-all active:shadow-[inset_-4px_-4px_10px_#ffffff,inset_4px_4px_10px_#a3b1c6]">
    Get started
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-col items-center gap-3 s-panel rounded-3xl p-4">
          <button className="rounded-2xl bg-[#E0E5EC] px-6 py-3 text-sm font-semibold text-[#4A4A4A] shadow-[-6px_-6px_12px_#ffffff,6px_6px_12px_#a3b1c6] transition-all active:shadow-[inset_-4px_-4px_10px_#ffffff,inset_4px_4px_10px_#a3b1c6]">
            Get started
          </button>
          <button className="text-sm font-semibold text-[#6C63FF]">or read the docs</button>
        </div>
      ),
    },
    {
      name: "Input",
      description:
        "An inset well. The shadows move inside the field and the edges look poured. Typed values appear to sink below the surface, never shout.",
      code: `export const EmailField = () => (
  <label className="block w-60">
    <span className="mb-2 block text-xs font-semibold text-[#4A4A4A]">Email</span>
    <input
      type="email"
      placeholder="you@company.com"
      className="w-full rounded-xl bg-[#E0E5EC] px-4 py-3 text-[15px] text-[#4A4A4A] shadow-[inset_6px_6px_12px_#a3b1c6,inset_-6px_-6px_12px_#ffffff] outline-none placeholder:text-[#9AA5B2]"
    />
  </label>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-col items-center s-panel rounded-3xl p-4">
          <label className="w-full">
            <span className="mb-2 block text-xs font-semibold text-[#4A4A4A]">Email</span>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-xl bg-[#E0E5EC] px-4 py-3 text-[15px] text-[#4A4A4A] shadow-[inset_6px_6px_12px_#a3b1c6,inset_-6px_-6px_12px_#ffffff] outline-none placeholder:text-[#9AA5B2]"
            />
          </label>
        </div>
      ),
    },
    {
      name: "Badge",
      description:
        "A small puff of the same material: raised chip, muted accent text. Never a colored fill, because the fill is the shadow math.",
      code: `export const StatusBadge = () => (
  <span className="inline-flex items-center gap-2 rounded-full bg-[#E0E5EC] px-4 py-1.5 text-xs font-semibold text-[#6C63FF] shadow-[-4px_-4px_8px_#ffffff,4px_4px_8px_#a3b1c6]">
    Stable
  </span>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-wrap items-center justify-center gap-2 s-panel rounded-3xl p-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E0E5EC] px-4 py-1.5 text-xs font-semibold text-[#6C63FF] shadow-[-4px_-4px_8px_#ffffff,4px_4px_8px_#a3b1c6]">
            Stable
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E0E5EC] px-4 py-1.5 text-xs font-semibold text-[#4A4A4A] shadow-[-4px_-4px_8px_#ffffff,4px_4px_8px_#a3b1c6]">
            v2.4.0
          </span>
        </div>
      ),
    },
    {
      name: "Card",
      description:
        "A sea of #E0E5EC floating on identical #E0E5EC. A dual shadow and nothing else, the softest thing on the page.",
      code: `export const ChangelogCard = () => (
  <div className="w-64 rounded-3xl bg-[#E0E5EC] p-6 shadow-[-10px_-10px_20px_#ffffff,10px_10px_20px_#a3b1c6]">
    <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#8F9BA8]">Changelog</p>
    <h3 className="mt-3 text-lg font-semibold leading-snug text-[#4A4A4A]">Faster search, fewer keystrokes.</h3>
    <p className="mt-2 text-xs leading-relaxed text-[#8F9BA8]">Results stream in as you type; queries now run in 80ms.</p>
  </div>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-col justify-center s-panel rounded-3xl p-4">
          <div className="w-full rounded-3xl bg-[#E0E5EC] p-6 shadow-[-10px_-10px_20px_#ffffff,10px_10px_20px_#a3b1c6]">
            <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#8F9BA8]">Changelog</p>
            <h3 className="mt-3 text-lg font-semibold leading-snug text-[#4A4A4A]">Faster search, fewer keystrokes.</h3>
            <p className="mt-2 text-xs leading-relaxed text-[#8F9BA8]">Results stream in as you type; queries now run in 80ms.</p>
          </div>
        </div>
      ),
    },
    {
      name: "Nav bar",
      description:
        "Round soft-icon buttons, the signature neumorphism gesture. The bar is flat #E0E5EC and the icons sit in raised circles.",
      code: `export const NavBar = () => (
  <header className="flex h-16 w-full items-center justify-between bg-[#E0E5EC] px-4">
    <span className="text-xl font-bold tracking-tight text-[#4A4A4A]">acme<span className="text-[#6C63FF]">.</span></span>
    <div className="flex gap-3">
      <button aria-label="Menu" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E0E5EC] text-[#4A4A4A] shadow-[-5px_-5px_10px_#ffffff,5px_5px_10px_#a3b1c6] active:shadow-[inset_-3px_-3px_6px_#ffffff,inset_3px_3px_6px_#a3b1c6]">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden><path d="M2.5 4.5h13M2.5 9h13M2.5 13.5h13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
      </button>
      <button aria-label="Search" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E0E5EC] text-[#4A4A4A] shadow-[-5px_-5px_10px_#ffffff,5px_5px_10px_#a3b1c6] active:shadow-[inset_-3px_-3px_6px_#ffffff,inset_3px_3px_6px_#a3b1c6]">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden><circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.6" /><path d="M12 12l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
      </button>
    </div>
  </header>
);`,
      size: "wideShort",
      preview: (
        <div className="flex h-full w-full flex-col justify-center rounded-3xl">
          <div className="flex h-16 w-full items-center justify-between bg-[#E0E5EC] px-4">
            <span className="text-xl font-bold tracking-tight text-[#4A4A4A]">acme<span className="text-[#6C63FF]">.</span></span>
            <div className="flex gap-3">
              <button aria-label="Menu" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E0E5EC] text-[#4A4A4A] shadow-[-5px_-5px_10px_#ffffff,5px_5px_10px_#a3b1c6] active:shadow-[inset_-3px_-3px_6px_#ffffff,inset_3px_3px_6px_#a3b1c6]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden><path d="M2.5 4.5h13M2.5 9h13M2.5 13.5h13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              </button>
              <button aria-label="Search" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E0E5EC] text-[#4A4A4A] shadow-[-5px_-5px_10px_#ffffff,5px_5px_10px_#a3b1c6] active:shadow-[inset_-3px_-3px_6px_#ffffff,inset_3px_3px_6px_#a3b1c6]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden><circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.6" /><path d="M12 12l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              </button>
            </div>
          </div>
        </div>
      ),
    },
  ],
  dos: [
    "Keep background and surface the same color. Depth is shadow math, not fill.",
    "Light from the top left, shade to the bottom right. Never mix directions.",
    "Use the same shadow values across the app, so there is one light source.",
    "Reserve accent color for the single primary action.",
  ],
  donts: [
    "Don't stack more than two depth levels. It reads as mud.",
    "Don't use dark backgrounds until you convert highlights correctly. The light source stays top left.",
    "Don't put small light text on raised surfaces. Contrast fails.",
    "Don't use colored fills. They break the extrusion illusion.",
  ],
};
