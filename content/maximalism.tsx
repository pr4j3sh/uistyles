import type { StyleContent } from "@/lib/style-content";

export const maximalism: StyleContent = {
  theme: {
    base: "#2A1128",
    background:
      "radial-gradient(1000px 500px at 20% -10%, rgba(232,180,74,0.18), transparent 60%), radial-gradient(800px 500px at 85% 110%, rgba(255,107,74,0.16), transparent 60%), #2A1128",
    surface: "#3A1836",
    surface2: "#45203F",
    line: "rgba(232,180,74,0.35)",
    text: "#F6E8E4",
    muted: "#C4A8B2",
    accent: "#E8B44A",
    radius: "2px",
    display: "font-serif tracking-tight",
    displayItalicLast: true,
    shadow: "0 10px 30px rgba(0,0,0,0.55), inset 0 1px 0 rgba(232,180,74,0.25)",
  },
  what: "Maximalism is abundance as methodology — pattern on pattern, velvet, gold, deeper inks, dense type, ornament that refuses to apologize. The restraint is not in the palette but in the hierarchy: many voices, one conductor.",
  origin: "From Victorian eclecticism through 70s psychedelia to the 2010s Wallpaper* / Gucci / Kenzo revival — a deliberate counter-argument to a decade of minimalism, built by designers who saw subtraction as a form of censorship.",
  bestFor: [
    "Fashion, beauty and fragrance",
    "Music and nightlife identity",
    "Luxury editorial and commerce",
    "Festivals, cabaret and event brands",
  ],
  avoid: [
    "Data-dense product UI",
    "Government or accessibility-first services",
    "Long-form reading without relief",
  ],
  palette: [
    { name: "Royal", hex: "#2A1128", role: "Deep aubergine canvas" },
    { name: "Plum", hex: "#3A1836", role: "Velvet surface" },
    { name: "Gold", hex: "#E8B44A", role: "Precision accent — the one precious thing" },
    { name: "Coral", hex: "#FF6B4A", role: "Secondary flare" },
    { name: "Emerald", hex: "#1F7A55", role: "Jewel depth" },
    { name: "Blush", hex: "#F6E8E4", role: "Porcelain ink" },
  ],
  typography: [
    { role: "Display", family: "Instrument Serif — 400 italic & roman", note: "52–96px with flourishes; italic for the ostentatious clause, roman for the verb." },
    { role: "Body", family: "Inter — 400 / 500", note: "14–15px on aubergine needs weight 500 to survive pairing with serifs." },
    { role: "Metadata", family: "JetBrains Mono — 9–11px", note: "House sigil strings — CHAP. / AURELIA / 014. Tracked caps, gold on plum." },
  ],
  components: [
    {
      name: "Button",
      description:
        "A gold coin pressed into velvet. Serif italic caps, thick gold border, deep outer shadow — clicking costs you nothing, looking away costs you everything.",
      code: `export const PrimaryButton = () => (
  <button className="h-12 rounded-sm border-2 border-[#E8B44A] bg-gradient-to-b from-[#F5D06F] via-[#E8B44A] to-[#B8802A] px-7 font-serif text-base italic text-[#2A1128] shadow-[0_6px_18px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.6)] [text-shadow:0_1px_0_rgba(255,255,255,0.4)] transition-transform hover:scale-[1.03]">
    Get started
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-col items-center gap-3 s-panel rounded-md p-5">
          <button className="h-12 rounded-sm border-2 border-[#E8B44A] bg-gradient-to-b from-[#F5D06F] via-[#E8B44A] to-[#B8802A] px-7 font-serif text-base italic text-[#2A1128] shadow-[0_6px_18px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.6)] [text-shadow:0_1px_0_rgba(255,255,255,0.4)] transition-transform hover:scale-[1.03]">
            Get started
          </button>
          <button className="font-serif text-base italic text-[#E8B44A] underline underline-offset-4 decoration-2 decoration-[#FF6B4A] hover:text-[#F6E8E4]">
            or read the treatise
          </button>
        </div>
      ),
    },
    {
      name: "Input",
      description:
        "A leather-bound field. Plum fill, gold hairline on focus with a soft glow, porcelain serif italic placeholder — never sans on velvet.",
      code: `export const EmailField = () => (
  <label className="block w-60">
    <span className="mb-2 block font-sans text-[9px] uppercase tracking-[0.35em] text-[#E8B44A]">Email</span>
    <input
      type="email"
      placeholder="you@company.com"
      className="h-12 w-full rounded-sm border border-[rgba(232,180,74,0.4)] bg-[rgba(42,17,40,0.6)] px-4 font-serif text-base italic text-[#F6E8E4] outline-none shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)] transition-all placeholder:text-[#8A6E78] focus:border-[#E8B44A] focus:shadow-[inset_0_2px_6px_rgba(0,0,0,0.5),0_0_0_2px_rgba(232,180,74,0.35)]"
    />
  </label>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-col items-center s-panel rounded-md p-5">
          <label className="w-full">
            <span className="mb-2 block font-sans text-[9px] uppercase tracking-[0.35em] text-[#E8B44A]">Email</span>
            <input
              type="email"
              placeholder="you@company.com"
              className="h-12 w-full rounded-sm border border-[rgba(232,180,74,0.4)] bg-[rgba(42,17,40,0.6)] px-4 font-serif text-base italic text-[#F6E8E4] outline-none shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)] transition-all placeholder:text-[#8A6E78] focus:border-[#E8B44A] focus:shadow-[inset_0_2px_6px_rgba(0,0,0,0.5),0_0_0_2px_rgba(232,180,74,0.35)]"
            />
          </label>
        </div>
      ),
    },
    {
      name: "Badge",
      description:
        "A gilded wax-seal chip. Emerald-on-gold fill, filigree-adjacent border — the kind of mark stamped by a concierge desk you can't afford.",
      code: `export const StatusBadge = () => (
  <span className="inline-flex items-center gap-2 rounded-sm border border-[#E8B44A] bg-[#1F7A55] px-3 py-1.5 font-sans text-[9px] font-bold uppercase tracking-[0.3em] text-[#F6E8E4] shadow-[0_2px_6px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.2)]">
    Stable
  </span>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-wrap items-center justify-center gap-2 s-panel rounded-md p-5">
          <span className="inline-flex items-center gap-2 rounded-sm border border-[#E8B44A] bg-[#1F7A55] px-3 py-1.5 font-sans text-[9px] font-bold uppercase tracking-[0.3em] text-[#F6E8E4] shadow-[0_2px_6px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.2)]">
            Stable
          </span>
          <span className="inline-flex items-center gap-2 rounded-sm border border-[#E8B44A] bg-[#2A1128] px-3 py-1.5 font-sans text-[9px] font-bold uppercase tracking-[0.3em] text-[#E8B44A]">
            v2.4.0
          </span>
        </div>
      ),
    },
    {
      name: "Card",
      description:
        "A velvet placard with gold rules top and bottom. Serif hed, gold metadata, a coral flourish fleuron. Nothing is centered; everything is arranged.",
      code: `export const ChangelogCard = () => (
  <article className="w-64 border-y-2 border-[#E8B44A] bg-[#3A1836] p-5 shadow-[0_10px_26px_rgba(0,0,0,0.5)]">
    <p className="text-right font-sans text-[9px] uppercase tracking-[0.35em] text-[#E8B44A]">CHNG · 002</p>
    <h3 className="mt-2 font-serif text-2xl leading-[1.05] tracking-tight text-[#F6E8E4]">Faster search, <em className="italic text-[#E8B44A]">fewer</em> keystrokes.</h3>
    <p className="mt-3 font-sans text-[11px] leading-relaxed text-[#C4A8B2]">Results stream in as you type; queries now run in 80ms.</p>
    <div className="mt-3 flex items-center gap-2 text-[#E8B44A]" aria-hidden><span className="h-px flex-1 bg-[#E8B44A]" />❦<span className="h-px flex-1 bg-[#E8B44A]" /></div>
  </article>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-col justify-center s-panel rounded-md p-4">
          <article className="w-full border-y-2 border-[#E8B44A] bg-[#3A1836] p-5 shadow-[0_10px_26px_rgba(0,0,0,0.5)]">
            <p className="text-right font-sans text-[9px] uppercase tracking-[0.35em] text-[#E8B44A]">CHNG · 002</p>
            <h3 className="mt-2 font-serif text-2xl leading-[1.05] tracking-tight text-[#F6E8E4]">Faster search, <em className="italic text-[#E8B44A]">fewer</em> keystrokes.</h3>
            <p className="mt-3 font-sans text-[11px] leading-relaxed text-[#C4A8B2]">Results stream in as you type; queries now run in 80ms.</p>
            <div className="mt-3 flex items-center gap-2 text-[#E8B44A]" aria-hidden><span className="h-px flex-1 bg-[#E8B44A]" />❦<span className="h-px flex-1 bg-[#E8B44A]" /></div>
          </article>
        </div>
      ),
    },
    {
      name: "Nav bar",
      description:
        "A gilded theatre proscenium — serif wordmark, gold rules top and bottom, no icons because ornament IS the iconography.",
      code: `export const NavBar = () => (
  <header className="flex h-16 w-full items-center justify-between border-y-2 border-[#E8B44A] bg-[#2A1128] px-6">
    <span className="font-serif text-2xl italic tracking-tight text-[#F6E8E4]">acme<span className="not-italic text-[#E8B44A]">❦</span></span>
    <nav className="flex gap-6">
      {["Programme", "Salon", "Boylesque"].map((item) => (
        <a key={item} href="#" className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C4A8B2] transition-colors hover:text-[#E8B44A]">{item}</a>
      ))}
    </nav>
  </header>
);`,
      size: "wideShort",
      preview: (
        <div className="flex h-full w-full flex-col justify-center rounded-md">
          <div className="flex h-16 w-full items-center justify-between border-y-2 border-[#E8B44A] bg-[#2A1128] px-6">
            <span className="font-serif text-2xl italic tracking-tight text-[#F6E8E4]">acme<span className="not-italic text-[#E8B44A]">❦</span></span>
            <nav className="flex gap-6">
              {["Programme", "Salon", "Boylesque"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C4A8B2] transition-colors hover:text-[#E8B44A]"
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
    "Anchor one precious thing per screen (gold, usually) — everything else serves it",
    "Layer 2–3 patterns max — velvet + filigree + stripe is a composition, not a mess",
    "Serif italic for the ostentatious clause; roman for the verb",
    "Give body text a solid velvet backing — dense pages need resting velvet",
  ],
  donts: [
    "Don't add a fourth pattern — confetti, velvet, filigree; stop",
    "Don't use white sans on saturated fills — reads as a food menu",
    "Don't round more than 2px — geometry stays himalayan",
    "Don't 'maximize' without a hierarchy — it's organized excess or it's chaos",
  ],
};
