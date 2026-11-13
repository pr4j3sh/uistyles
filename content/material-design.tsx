import type { StyleContent } from "@/lib/style-content";

export const materialDesign: StyleContent = {
  theme: {
    base: "#FFFBFE",
    background: "#FFFBFE",
    surface: "#FFFBFE",
    surface2: "#F3EDF7",
    line: "#CAC4D0",
    text: "#1D1B20",
    muted: "#49454F",
    accent: "#6750A4",
    radius: "12px",
    display: "font-sans font-normal tracking-[-0.02em]",
    displayItalicLast: false,
  },
  what: "Material 3, also called Material You, is Google's living design system. It pairs a dynamic tonal palette (every color has an 'on' pair for contrast) with state layers, springy motion and shadows that express elevation. Surfaces are nested tones, never hard black on white.",
  origin: "Material Design launched at Google I/O in 2014 with a 'material metaphor' of paper and ink under physical light. Material You arrived in 2021 and rebuilt the system around seed-derived color and accessible contrast pairs. It now shapes Android, Pixel and Google Workspace.",
  bestFor: [
    "Android / cross-platform consumer apps",
    "Product suites that need one living system",
    "Teams that want Google's accessibility baked in",
    "Design systems that generate color programmatically",
  ],
  avoid: [
    "Strict brand-locked marketing where one hue rules",
    "Illustration-led editorial sites with bespoke art direction",
    "Interfaces that must avoid Google-adjacent familiarity",
  ],
  palette: [
    { name: "Surface", hex: "#FFFBFE", role: "Base canvas" },
    { name: "Ink", hex: "#1D1B20", role: "On-surface text" },
    { name: "Primary", hex: "#6750A4", role: "Filled actions" },
    { name: "Primary Container", hex: "#EADDFF", role: "Tonal surfaces & chips" },
    { name: "Secondary", hex: "#625B71", role: "Secondary actions" },
    { name: "Outline Variant", hex: "#CAC4D0", role: "Filled-field borders & chips" },
  ],
  typography: [
    { role: "Body / UI", family: "Roboto Flex, 400 / 500", note: "Variable width axis. Set body at 14 to 16px, with 500 for buttons and chips." },
    { role: "Display", family: "Roboto Display, 400 / 500", note: "Tight, light headlines at large sizes. Avoid bold display type." },
    { role: "Metadata", family: "JetBrains Mono, 9-11px", note: "Used sparingly for chips, section kickers and build tags." },
  ],
  components: [
    {
      name: "Button",
      description:
        "Filled and tonal buttons, both pill-shaped and both carrying a state layer. Hover and press tint the surface instead of swapping the fill. No gradients.",
      code: `export const PrimaryButton = () => (
  <button className="h-10 rounded-full bg-[#6750A4] px-6 text-sm font-medium text-white shadow-[0_1px_3px_rgba(0,0,0,0.3),0_1px_2px_rgba(0,0,0,0.15)] transition-shadow hover:shadow-[0_2px_6px_rgba(0,0,0,0.35),0_1px_2px_rgba(0,0,0,0.2)]">
    Get started
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-col items-center gap-3 s-panel rounded-xl p-4">
          <button className="h-10 rounded-full bg-[#6750A4] px-6 text-sm font-medium text-white shadow-[0_1px_3px_rgba(0,0,0,0.3),0_1px_2px_rgba(0,0,0,0.15)] transition-shadow hover:shadow-[0_2px_6px_rgba(0,0,0,0.35),0_1px_2px_rgba(0,0,0,0.2)]">
            Get started
          </button>
          <button className="h-10 rounded-full bg-[#EADDFF] px-6 text-sm font-medium text-[#21005D] transition-colors hover:bg-[#E3D6FD]">
            tonal variant
          </button>
        </div>
      ),
    },
    {
      name: "Input",
      description:
        "The filled text field: rounded top, quiet container fill, two-pixel bottom keyline. The label floats on focus and the placeholder disappears. It never doubles as a label.",
      code: `export const EmailField = () => (
  <label className="relative block w-64">
    <input
      type="email"
      placeholder=" "
      className="peer w-full rounded-t-md border-b-2 border-[#79747E] bg-[#F3EDF7] px-4 pb-2 pt-6 text-[15px] text-[#1D1B20] outline-none transition-colors placeholder-transparent focus:border-[#6750A4]"
    />
    <span className="pointer-events-none absolute left-4 top-2 text-[11px] text-[#49454F] transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-[15px] peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-[#6750A4]">
      Email
    </span>
  </label>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-col items-center s-panel rounded-xl p-4">
          <label className="relative block w-full">
            <input
              type="email"
              placeholder=" "
              className="peer w-full rounded-t-md border-b-2 border-[#79747E] bg-[#F3EDF7] px-4 pb-2 pt-6 text-[15px] text-[#1D1B20] outline-none transition-colors placeholder-transparent focus:border-[#6750A4]"
            />
            <span className="pointer-events-none absolute left-4 top-2 text-[11px] text-[#49454F] transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-[15px] peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-[#6750A4]">
              Email
            </span>
          </label>
        </div>
      ),
    },
    {
      name: "Badge",
      description:
        "M3 chips. Assist chips are outlined pills, and a selected chip flips to filled primary-container with a checkmark. These are filter chips, not tags.",
      code: `export const AssistChip = () => (
  <button className="h-8 rounded-lg border border-[#CAC4D0] bg-transparent px-3 text-sm font-medium text-[#1D1B20] transition-colors hover:bg-[#1D1B20]/5">
    Changelog
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-wrap items-center justify-center gap-2 s-panel rounded-xl p-4">
          <button className="h-8 rounded-lg border border-[#CAC4D0] bg-transparent px-3 text-sm font-medium text-[#1D1B20] transition-colors hover:bg-[#1D1B20]/5">
            Changelog
          </button>
          <button className="h-8 rounded-lg bg-[#EADDFF] pl-2 pr-3 text-sm font-medium text-[#21005D]">
            <span className="inline-flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M2.5 7.5l3 3 6-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Stable
            </span>
          </button>
          <button className="h-8 rounded-lg border border-[#CAC4D0] px-3 text-sm font-medium text-[#49454F]">
            v2.4.0
          </button>
        </div>
      ),
    },
    {
      name: "Card",
      description:
        "The elevated container: a tonally shifted surface at elevation 1. Never white on white, because the tone shift is the elevation system.",
      code: `export const ChangelogCard = () => (
  <div className="w-64 rounded-xl bg-[#ECE6F0] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.25),0_1px_3px_rgba(0,0,0,0.12)]">
    <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#49454F]">
      Changelog
    </p>
    <h3 className="mt-2 text-base font-medium leading-snug text-[#1D1B20]">
      Faster search, fewer keystrokes.
    </h3>
    <p className="mt-1 text-[12px] leading-relaxed text-[#49454F]">
      Results stream in as you type; queries now run in 80ms.
    </p>
  </div>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-col justify-center s-panel rounded-xl p-4">
          <div className="w-full rounded-xl bg-[#ECE6F0] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.25),0_1px_3px_rgba(0,0,0,0.12)]">
            <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#49454F]">
              Changelog
            </p>
            <h3 className="mt-2 text-base font-medium leading-snug text-[#1D1B20]">
              Faster search, fewer keystrokes.
            </h3>
            <p className="mt-1 text-[12px] leading-relaxed text-[#49454F]">
              Results stream in as you type; queries now run in 80ms.
            </p>
          </div>
        </div>
      ),
    },
    {
      name: "Nav bar",
      description:
        "The small top app bar: tonal surface, nav icon left, three action icons right. It casts no shadow at rest; elevation arrives when the page scrolls.",
      code: `export const NavBar = () => (
  <header className="flex h-16 w-full items-center gap-2 bg-[#F3EDF7] px-2">
    <button aria-label="Open menu" className="flex h-12 w-12 items-center justify-center rounded-full text-[#1D1B20] transition-colors hover:bg-[#1D1B20]/5">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden><path d="M3 5.5h14M3 10h14M3 14.5h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
    </button>
    <span className="flex-1 text-[22px] font-normal text-[#1D1B20]">acme</span>
    <button aria-label="Search" className="flex h-12 w-12 items-center justify-center rounded-full text-[#1D1B20] transition-colors hover:bg-[#1D1B20]/5">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden><circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.6" /><path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
    </button>
    <button aria-label="More options" className="flex h-12 w-12 items-center justify-center rounded-full text-[#1D1B20] transition-colors hover:bg-[#1D1B20]/5">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden><circle cx="10" cy="4.5" r="1.6" /><circle cx="10" cy="10" r="1.6" /><circle cx="10" cy="15.5" r="1.6" /></svg>
    </button>
  </header>
);`,
      size: "wideShort",
      preview: (
        <div className="flex h-full w-full flex-col justify-center rounded-xl">
          <div className="flex h-16 w-full items-center gap-2 bg-[#F3EDF7] px-2">
            <button aria-label="Open menu" className="flex h-12 w-12 items-center justify-center rounded-full text-[#1D1B20] transition-colors hover:bg-[#1D1B20]/5">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden><path d="M3 5.5h14M3 10h14M3 14.5h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
            </button>
            <span className="flex-1 text-[22px] font-normal text-[#1D1B20]">acme</span>
            <button aria-label="Search" className="flex h-12 w-12 items-center justify-center rounded-full text-[#1D1B20] transition-colors hover:bg-[#1D1B20]/5">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden><circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.6" /><path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
            </button>
            <button aria-label="More options" className="flex h-12 w-12 items-center justify-center rounded-full text-[#1D1B20] transition-colors hover:bg-[#1D1B20]/5">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden><circle cx="10" cy="4.5" r="1.6" /><circle cx="10" cy="10" r="1.6" /><circle cx="10" cy="15.5" r="1.6" /></svg>
            </button>
          </div>
        </div>
      ),
    },
  ],
  dos: [
    "Tint surfaces instead of drawing borders. Nested tones are the elevation system.",
    "Put a state layer on every interactive surface. Hover tints; it never swaps hue.",
    "Pair every color with its 'on' color and check the contrast.",
    "Use pill buttons, tonal chips and 12 to 28px rounding on purpose.",
  ],
  donts: [
    "Don't use pure black on colored surfaces. Ink is a color too.",
    "Don't outline everything. Filled and tonal surfaces cover the same jobs.",
    "Don't flatten elevation into borders. Shadow communicates depth.",
    "Don't invent a seed per screen. One seed, one dynamic palette.",
  ],
};
