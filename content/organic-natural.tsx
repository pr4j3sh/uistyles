import type { StyleContent } from "@/lib/style-content";

export const organicNatural: StyleContent = {
  theme: {
    base: "#F5F0E6",
    background: "#F5F0E6",
    surface: "#FFFFFF",
    surface2: "#EDE7D8",
    line: "#D9D2C2",
    text: "#2E3A2C",
    muted: "#7C7466",
    accent: "#B3552F",
    radius: "16px",
    display: "font-serif tracking-tight",
    displayItalicLast: true,
    displaySize: "clamp(2.2rem, 6.8vh, 4.5rem)",
    shadow: "0 1px 2px rgba(46,58,44,0.08), 0 8px 24px rgba(46,58,44,0.12)",
  },
  what: "Organic / Natural UI treats the screen like a page of pressed botanicals: warm cream grounds, moss and terracotta, arches and blobs instead of rectangles, a serif hed with grotesque body, generous margins. It slows the eye down on purpose.",
  origin: "It grew from Scandinavian and Japanese craft culture and the 2019 to 2021 slow web movement. Climate, food, wellness and craft brands wanted their sites to feel sun-warmed rather than screen-lit.",
  bestFor: [
    "Climate, food and wellness brands",
    "Coffee, ceramics, craft and agriculture",
    "Yoga, skincare and slow-reading products",
    "Editorial commerce with a conscience",
  ],
  avoid: [
    "Fintech, enterprise and data-dense product UI",
    "Dark-mode-first experiences",
    "Anything needing hard edges and panic-speed scanning",
  ],
  palette: [
    { name: "Cream", hex: "#F5F0E6", role: "Ground, sun-warmed stock" },
    { name: "Moss", hex: "#2E3A2C", role: "Primary text & heds" },
    { name: "Terracotta", hex: "#B3552F", role: "Accent, arches and links" },
    { name: "Sage", hex: "#9CAF88", role: "Soft chips & fills" },
    { name: "Sand", hex: "#EDE7D8", role: "Sunken panels" },
    { name: "Ochre", hex: "#C9973C", role: "Highlight, rare use" },
  ],
  typography: [
    { role: "Display", family: "Instrument Serif, 400 italic and roman", note: "Heds at 40 to 72px with loose leading. Roman for statements, italic for the softening clause." },
    { role: "Body", family: "Inter, 400 / 500", note: "16px/1.65 on a 62ch measure. Relaxed, never shouting." },
    { role: "Metadata", family: "JetBrains Mono, 9-11px", note: "Kickers for botanical callouts: LEAF / 03 / WILDCRAFT." },
  ],
  components: [
    {
      name: "Button",
      description:
        "A river stone: oval radius, terracotta clay, warm ink on hover. The shadow is a soft pool of moss-colored light, not a cast drop.",
      code: `export const PrimaryButton = () => (
  <button className="inline-flex items-center gap-3 rounded-full bg-[#B3552F] px-7 py-3 text-sm font-semibold text-[#F5F0E6] shadow-[0_6px_16px_rgba(179,85,47,0.35),inset_0_1px_0_rgba(255,255,255,0.35)] transition-colors hover:bg-[#9C4A26]">
    Get started
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-col items-center gap-3 s-panel rounded-2xl p-4">
          <button className="inline-flex items-center gap-3 rounded-full bg-[#B3552F] px-7 py-3 text-sm font-semibold text-[#F5F0E6] shadow-[0_6px_16px_rgba(179,85,47,0.35),inset_0_1px_0_rgba(255,255,255,0.35)] transition-colors hover:bg-[#9C4A26]">
            Get started
          </button>
          <button className="text-sm font-medium text-[#B3552F] underline decoration-[#9CAF88] decoration-2 underline-offset-4 transition-colors hover:text-[#2E3A2C]">
            or read the field notes
          </button>
        </div>
      ),
    },
    {
      name: "Input",
      description:
        "A glazed well: cream fill, sage keyline on focus, moss text. The label sits above like a pressed leaf caption.",
      code: `export const EmailField = () => (
  <label className="block w-60">
    <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.3em] text-[#7C7466]">Email</span>
    <input
      type="email"
      placeholder="you@company.com"
      className="w-full rounded-xl border border-[#D9D2C2] bg-[#FDFCF9] px-4 py-3 text-[15px] text-[#2E3A2C] shadow-[inset_0_1px_3px_rgba(46,58,44,0.1)] outline-none transition-all placeholder:text-[#B5AEA0] focus:border-[#9CAF88] focus:ring-2 focus:ring-[#9CAF88]/40"
    />
  </label>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-col items-center s-panel rounded-2xl p-4">
          <label className="w-full">
            <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.3em] text-[#7C7466]">Email</span>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-xl border border-[#D9D2C2] bg-[#FDFCF9] px-4 py-3 text-[15px] text-[#2E3A2C] shadow-[inset_0_1px_3px_rgba(46,58,44,0.1)] outline-none transition-all placeholder:text-[#B5AEA0] focus:border-[#9CAF88] focus:ring-2 focus:ring-[#9CAF88]/40"
            />
          </label>
        </div>
      ),
    },
    {
      name: "Badge",
      description:
        "A pressed leaf caption: sage pill, moss text, a single terracotta seed dot. Lowercase, tracked loosely, never shouting.",
      code: `export const StatusBadge = () => (
  <span className="inline-flex items-center gap-2 rounded-full border border-[#9CAF88] bg-[#F5F8F0] px-3.5 py-1.5 text-[10px] font-semibold lowercase tracking-[0.2em] text-[#2E3A2C]">
    <span className="h-1.5 w-1.5 rounded-full bg-[#B3552F]" />
    stable
  </span>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-wrap items-center justify-center gap-2 s-panel rounded-2xl p-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#9CAF88] bg-[#F5F8F0] px-3.5 py-1.5 text-[10px] font-semibold lowercase tracking-[0.2em] text-[#2E3A2C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B3552F]" />
            stable
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D9D2C2] bg-[#FDFCF9] px-3.5 py-1.5 text-[10px] font-semibold lowercase tracking-[0.2em] text-[#7C7466]">
            v2.4.0
          </span>
        </div>
      ),
    },
    {
      name: "Card",
      description:
        "The arch card, a Romanesque window with a serif inscription inside. Moss ink, terracotta kicker, a single italic clause to soften the hed.",
      code: `export const ChangelogCard = () => (
  <article className="[border-radius:120px_120px_16px_16px] w-60 border border-[#D9D2C2] bg-white pt-10 text-center shadow-[0_2px_4px_rgba(46,58,44,0.08),0_12px_32px_rgba(46,58,44,0.14)]">
    <svg viewBox="0 0 100 40" className="mx-auto h-10 w-24 text-[#9CAF88]" aria-hidden>
      <path d="M50 4c-16 10-22 26 0 34 22-8 16-24 0-34Z" fill="currentColor" opacity="0.35" />
      <path d="M50 12v22M40 20h20M42 28h16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
    <p className="mt-3 font-sans text-[9px] uppercase tracking-[0.35em] text-[#B3552F]">Changelog</p>
    <h3 className="mt-2 px-4 font-serif text-xl leading-snug tracking-tight text-[#2E3A2C]">Faster search, <em className="italic">fewer</em> keystrokes.</h3>
    <p className="mt-3 border-t border-[#EDE7D8] px-5 py-3 text-[10px] leading-relaxed text-[#7C7466]">Results stream in as you type; queries now run in 80ms.</p>
  </article>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-col justify-center s-panel rounded-2xl p-4">
          <article className="[border-radius:120px_120px_16px_16px] w-full border border-[#D9D2C2] bg-white pt-8 text-center shadow-[0_2px_4px_rgba(46,58,44,0.08),0_12px_32px_rgba(46,58,44,0.14)]">
            <svg viewBox="0 0 100 40" className="mx-auto h-9 w-20 text-[#9CAF88]" aria-hidden>
              <path d="M50 4c-16 10-22 26 0 34 22-8 16-24 0-34Z" fill="currentColor" opacity="0.35" />
              <path d="M50 12v22M40 20h20M42 28h16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <p className="mt-3 font-sans text-[9px] uppercase tracking-[0.35em] text-[#B3552F]">Changelog</p>
            <h3 className="mt-2 px-4 font-serif text-[19px] leading-snug tracking-tight text-[#2E3A2C]">Faster search, <em className="italic">fewer</em> keystrokes.</h3>
            <p className="mt-3 border-t border-[#EDE7D8] px-5 py-3 text-[10px] leading-relaxed text-[#7C7466]">Results stream in as you type; queries now run in 80ms.</p>
          </article>
        </div>
      ),
    },
    {
      name: "Nav bar",
      description:
        "A pressed-leaf masthead: serif wordmark, tracked sage links, a terracotta seed divider. Nothing screams; the paper does the talking.",
      code: `export const NavBar = () => (
  <header className="flex h-16 w-full items-center justify-between border-b border-[#D9D2C2] bg-[#F5F0E6] px-6">
    <span className="font-serif text-2xl tracking-tight text-[#2E3A2C]">acme<span className="text-[#B3552F]">.</span></span>
    <nav className="flex items-center gap-6">
      {["Grove", "Harvest", "Journal", "Visit"].map((item) => (
        <a key={item} href="#" className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-[#2E3A2C] transition-colors hover:text-[#B3552F]">{item}</a>
      ))}
    </nav>
  </header>
);`,
      size: "wideShort",
      preview: (
        <div className="flex h-full w-full flex-col justify-center rounded-md">
          <div className="flex h-16 w-full items-center justify-between border-b border-[#D9D2C2] bg-[#F5F0E6] px-6">
            <span className="font-serif text-2xl tracking-tight text-[#2E3A2C]">acme<span className="text-[#B3552F]">.</span></span>
            <nav className="flex items-center gap-6">
              {["Grove", "Harvest", "Journal", "Visit"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-[#2E3A2C] transition-colors hover:text-[#B3552F]"
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
    "Pair a serif hed with grotesque body, and use an italic clause for softening.",
    "Use arches and blobs, never hard corners or neon accents.",
    "Choose sage, terracotta and ochre over blue and pink. The earth decides.",
    "Keep the measure at 52ch max. Reading is a garden stroll, not a sprint.",
  ],
  donts: [
    "Don't use cold grays or pure black. Moss and cream instead.",
    "Don't round more than 20% of the page. It stops being a landscape.",
    "Don't center hed text. The organic world doesn't stand at parade rest.",
    "Don't add gradients or glows. Light falls through leaves, not pixels.",
  ],
};
