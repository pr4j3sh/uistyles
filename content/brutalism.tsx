import type { StyleContent } from "@/lib/style-content";

export const brutalism: StyleContent = {
  theme: {
    base: "#F2F0EA",
    background: "#F2F0EA",
    surface: "#FFFFFF",
    surface2: "#E7E5DE",
    line: "#0A0A0A",
    text: "#0A0A0A",
    muted: "#55554F",
    accent: "#0000EE",
    radius: "0px",
    display: "font-mono font-black uppercase leading-[0.9] tracking-[-0.03em]",
    displayItalicLast: false,
  },
  what: "Brutalism is the web without the styling layer — system fonts, hard black rules, browser-blue underlined links, borders that bite, type at full volume. It refuses the apologetic polish of modern UI in favor of raw, honest, sometimes ugly information.",
  origin: "From Béton brut ('raw concrete') architecture to the 1994 default web — then a full revival from 2014 onward as a rejection of tasteful corporate design (brutalistwebsites.com, pool.io, the manifestos of the 2010s art scenes).",
  bestFor: [
    "Design portfolios and personal sites",
    "Manifestos, zines and underground publishing",
    "Studios with a strong point of view",
    "Pages that are unapologetically themselves",
  ],
  avoid: [
    "Enterprise product UI",
    "Ecommerce and conversion flows",
    "Anything needing warmth or softness",
  ],
  palette: [
    { name: "Paper", hex: "#F2F0EA", role: "Ground — uncoated newsprint" },
    { name: "Ink", hex: "#0A0A0A", role: "Rules & type" },
    { name: "Link", hex: "#0000EE", role: "Links — the one color" },
    { name: "Gray", hex: "#55554F", role: "Secondary text" },
    { name: "Tint", hex: "#E7E5DE", role: "Sunken panels" },
    { name: "White", hex: "#FFFFFF", role: "Raised blocks" },
  ],
  typography: [
    { role: "Display", family: "JetBrains Mono — 700 / 900", note: "Headlines set uppercase at full weight. System mono is the whole aesthetic — no display faces allowed." },
    { role: "Body", family: "JetBrains Mono — 400 / 500", note: "13–15px/1.5. Reads like a terminal, which is the point." },
    { role: "Metadata", family: "JetBrains Mono — 9–11px", note: "Photo credits, timestamps, spec strings. Always prefixed with #, /, or //." },
  ],
  components: [
    {
      name: "Button",
      description:
        "The unstyled element, elevated by intention. 2px border, white fill, black text — on hover the fill flips to black like a printer's registration mark toggling.",
      code: `export const PrimaryButton = () => (
  <button className="border-2 border-[#0A0A0A] bg-white px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.08em] text-[#0A0A0A] transition-colors hover:bg-[#0A0A0A] hover:text-[#F2F0EA]">
    Get started
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-col items-start gap-3 s-panel rounded-md p-5">
          <button className="border-2 border-[#0A0A0A] bg-white px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.08em] text-[#0A0A0A] transition-colors hover:bg-[#0A0A0A] hover:text-[#F2F0EA]">
            Get started
          </button>
          <a href="#" className="font-mono text-sm font-bold text-[#0000EE] underline underline-offset-4 decoration-1 hover:text-[#551A8B]">or_read_the_docs</a>
        </div>
      ),
    },
    {
      name: "Input",
      description:
        "A stock 90s field: 2px hard border, inset shadow, mono text. No rounded corners, no glow. Type something and the caret does all the branding.",
      code: `export const EmailField = () => (
  <label className="block w-60">
    <span className="mb-1.5 block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A0A0A]">Email</span>
    <input
      type="email"
      placeholder="you@company.com"
      className="w-full border-2 border-[#0A0A0A] bg-white px-3 py-2 font-mono text-sm text-[#0A0A0A] outline-none shadow-[inset_2px_2px_0_rgba(0,0,0,0.15)] placeholder:text-[#A6A49D] focus:bg-[#FFFBEA]"
    />
  </label>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-col items-center s-panel rounded-md p-5">
          <label className="w-full">
            <span className="mb-1.5 block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A0A0A]">Email</span>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full border-2 border-[#0A0A0A] bg-white px-3 py-2 font-mono text-sm text-[#0A0A0A] outline-none shadow-[inset_2px_2px_0_rgba(0,0,0,0.15)] placeholder:text-[#A6A49D] focus:bg-[#FFFBEA]"
            />
          </label>
        </div>
      ),
    },
    {
      name: "Badge",
      description:
        "A price tag off a slaughterhouse clipboard. 1px border, mono caps, no fill — the kind of chip you tape to a corkboard.",
      code: `export const StatusBadge = () => (
  <span className="inline-flex items-center gap-2 border border-[#0A0A0A] bg-transparent px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-[#0A0A0A]">
    # STABLE
  </span>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-wrap items-center justify-center gap-2 s-panel rounded-md p-5">
          <span className="inline-flex items-center gap-2 border border-[#0A0A0A] bg-transparent px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-[#0A0A0A]">
            # STABLE
          </span>
          <span className="inline-flex items-center gap-2 border-2 border-[#0A0A0A] bg-[#0A0A0A] px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-[#F2F0EA]">
            # v2.4.0
          </span>
          <span className="inline-flex items-center gap-2 border border-dashed border-[#0A0A0A] bg-transparent px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-[#55554F]">
            {"// ETA"}
          </span>
        </div>
      ),
    },
    {
      name: "Card",
      description:
        "Stacked bordered blocks, divider rules where fields would normally round. A headline reaching toward the edge, mono body beneath.",
      code: `export const ChangelogCard = () => (
  <article className="w-64 border-2 border-[#0A0A0A] bg-white">
    <div className="border-b-2 border-[#0A0A0A] bg-[#0A0A0A] px-3 py-1.5">
      <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[#F2F0EA]">{"// changelog"}</span>
    </div>
    <div className="px-4 py-3">
      <h3 className="font-mono text-base font-black uppercase leading-[1.05] tracking-tight text-[#0A0A0A]">Faster search, fewer keystrokes.</h3>
      <p className="mt-2 font-mono text-[10px] leading-snug text-[#55554F]">Results stream in as you type; queries now run in 80ms.</p>
    </div>
  </article>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-col justify-center s-panel rounded-md p-4">
          <article className="w-full border-2 border-[#0A0A0A] bg-white">
            <div className="border-b-2 border-[#0A0A0A] bg-[#0A0A0A] px-3 py-1.5">
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[#F2F0EA]">{"// changelog"}</span>
            </div>
            <div className="px-4 py-3">
              <h3 className="font-mono text-base font-black uppercase leading-[1.05] tracking-tight text-[#0A0A0A]">Faster search, fewer keystrokes.</h3>
              <p className="mt-2 font-mono text-[10px] leading-snug text-[#55554F]">Results stream in as you type; queries now run in 80ms.</p>
            </div>
          </article>
        </div>
      ),
    },
    {
      name: "Nav bar",
      description:
        "Nineteen ninety-four, redux: underlined blue links, slash separators, one thick black rule across the top. No logo — words do all the branding.",
      code: `export const NavBar = () => (
  <header className="w-full border-t-4 border-[#0A0A0A] bg-[#F2F0EA] pt-3">
    <nav className="flex items-baseline justify-between px-4">
      <span className="font-mono text-[13px] font-black uppercase tracking-tight text-[#0A0A0A]">ACME</span>
      <div className="flex gap-2 font-mono text-[12px] font-bold text-[#0000EE] underline underline-offset-2">
        {["Index", "Work", "About"].map((item, i, arr) => (
          <span key={item}>
            <a href="#">{item}</a>
            {i < arr.length - 1 && <span className="text-[#0A0A0A] no-underline"> / </span>}
          </span>
        ))}
      </div>
    </nav>
  </header>
);`,
      size: "wideShort",
      preview: (
        <div className="flex h-full w-full flex-col justify-center rounded-md">
          <div className="w-full border-t-4 border-[#0A0A0A] bg-[#F2F0EA] pt-3">
            <nav className="flex items-baseline justify-between px-4">
              <span className="font-mono text-[13px] font-black uppercase tracking-tight text-[#0A0A0A]">ACME</span>
              <div className="flex gap-2 font-mono text-[12px] font-bold text-[#0000EE] underline underline-offset-2">
                {["Index", "Work", "About"].map((item, i, arr) => (
                  <span key={item}>
                    <a href="#">{item}</a>
                    {i < arr.length - 1 && <span className="text-[#0A0A0A] no-underline"> / </span>}
                  </span>
                ))}
              </div>
            </nav>
          </div>
        </div>
      ),
    },
  ],
  dos: [
    "Use system mono and system sans — no display faces, ever",
    "1–2px hard black borders — no blur, no radius, no shadow",
    "Underline links in default blue; visited goes purple",
    "Type at full weight, full size — shouting is the point",
  ],
  donts: [
    "Don't round corners, blur anything or soften type",
    "Don't center text unless you're doing it on purpose",
    "Don't add icons — 1994 didn't have them and it was fine",
    "Don't be tasteful — brutalism is not an aesthetic, it's a position",
  ],
};
