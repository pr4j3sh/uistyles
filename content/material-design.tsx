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
  what: "Material 3 — 'Material You' — is Google's living design system: a dynamic, tonal color system (every color has an 'on' pair for contrast), state layers on every interactive surface, springy motion, and elevation expressed through shadow. Surfaces are nested layers of slightly different tones, never hard black-on-white.",
  origin: "Material Design launched at Google I/O 2014 as 'material metaphor' — paper and ink with physical light. Material You (2021) rewrote it around dynamic, seed-derived color and accessibility-first contrast pairs; it is the design language of Android, Pixel and Google Workspace.",
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
    { role: "Body / UI", family: "Roboto Flex — 400 / 500", note: "Variable width axis; set body at 14–16px. Use 500 for buttons and chips." },
    { role: "Display", family: "Roboto Display — 400 / 500", note: "Tight, light headlines at large sizes; avoid bold display type." },
    { role: "Metadata", family: "JetBrains Mono — 9–11px", note: "Used sparingly — chips, section kickers, build tags." },
  ],
  components: [
    {
      name: "Button",
      description:
        "Filled and tonal buttons, both pill-shaped, both carrying a state layer — hover and press tint the surface itself rather than swapping the whole color. No gradients, ever.",
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
        "The filled text field: rounded top, quiet container fill, 2px bottom keyline. Label floats on focus — placeholder disappears on interaction, never doubles as a label.",
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
        "M3 chips. Assist chips are outlined pills; the selected chip flips to filled primary-container with a checkmark. Filter chips, not tags.",
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
        "The elevated container: a tonally-shifted surface carrying elevation 1. Never pure white on pure white — the tone shift IS the elevation system.",
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
        "The small top app bar: tonal surface, nav icon left, three action icons right. Resting state casts no shadow — elevation arrives on scroll.",
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
    "Tint surfaces, not borders — nested tones ARE the elevation system",
    "Put a state layer on every interactive surface — hover tints, never swaps hue",
    "Pair every color with its 'on' color and check the contrast pair",
    "Use pill buttons, tonal chips and rounded 12–28px shapes deliberately",
  ],
  donts: [
    "Don't use pure black on colored surfaces — ink is a color too",
    "Don't outline everything — filled + tonal covers the same jobs",
    "Don't flatten elevation into borders — shadow communicates depth",
    "Don't invent a seed per screen — one seed, one dynamic palette",
  ],
};
