import type { StyleContent } from "@/lib/style-content";

export const memphisDesign: StyleContent = {
  theme: {
    base: "#FFFDF0",
    background:
      "radial-gradient(circle, rgba(26,26,26,0.12) 1.1px, transparent 1.2px) 0 0 / 18px 18px, #FFFDF0",
    surface: "#FFFFFF",
    surface2: "#FFE9F4",
    line: "#1A1A1A",
    text: "#1A1A1A",
    muted: "#6B6B5C",
    accent: "#FF6EC7",
    radius: "24px",
    display: "font-sans font-black tracking-[-0.02em]",
    displayItalicLast: true,
    shadow: "6px 6px 0 #1A1A1A",
  },
  what: "Memphis Design is postmodern joy: squiggles, zigzags, confetti dots and bold geometry thrown across a page with deliberate chaos. It rejects modernist restraint and embraces sensory overload as a feature, not a bug.",
  origin: "Ettore Sottsass founded the Memphis Group in Milan in 1981, and the movement attacked the crisis of taste in mass-produced design. It lives on in 80s pastel retro and playful consumer brands today.",
  bestFor: [
    "Streetwear and youth culture brands",
    "Music, festivals and event identity",
    "Playful consumer launches",
    "Design education and workshops",
  ],
  avoid: [
    "Enterprise or financial UI",
    "Reading-intensive long-form",
    "Accessibility-first government services",
  ],
  palette: [
    { name: "Confetti", hex: "#FF6EC7", role: "Signature hot pink" },
    { name: "Aqua", hex: "#00D4FF", role: "Water and accents" },
    { name: "Sun", hex: "#FFE45C", role: "Yellow slabs" },
    { name: "Violet", hex: "#B967FF", role: "Deep-field pop" },
    { name: "Ink", hex: "#1A1A1A", role: "Outlines and type" },
    { name: "Paper", hex: "#FFFDF0", role: "Cream ground" },
  ],
  typography: [
    { role: "Display", family: "Inter, 800 / 900", note: "32 to 72px, tight tracking, sentence case with one SHOUTING word. Mix in the occasional serif italic." },
    { role: "Body", family: "Inter, 400 / 500", note: "15px/1.45. Slightly tighter than brutalism, punchier than editorial." },
    { role: "Metadata", family: "JetBrains Mono, 9-11px", note: "Field captions, spec strings, zine callouts, always boxed." },
  ],
  components: [
    {
      name: "Button",
      description:
        "A squiggle-free candy slab: hot pink with a black outline and hard offset shadow. Pressing squishes it toward the shadow.",
      code: `export const PrimaryButton = () => (
  <button className="h-12 rounded-2xl border-[3px] border-[#1A1A1A] bg-[#FF6EC7] px-6 font-sans text-sm font-black uppercase tracking-[0.08em] text-[#1A1A1A] shadow-[5px_5px_0_#1A1A1A] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_#1A1A1A]">
    Get started
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-col items-start gap-3 s-panel rounded-3xl p-4">
          <button className="h-12 rounded-2xl border-[3px] border-[#1A1A1A] bg-[#FF6EC7] px-6 font-sans text-sm font-black uppercase tracking-[0.08em] text-[#1A1A1A] shadow-[5px_5px_0_#1A1A1A] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_#1A1A1A]">
            Get started
          </button>
          <button className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#1A1A1A] underline underline-offset-4 decoration-2 decoration-[#00D4FF]">
            or_read_the_docs
          </button>
        </div>
      ),
    },
    {
      name: "Input",
      description:
        "A confetti-paper well: cream fill, chunky black border, dotted focus cursor. Label in boxed mono, never a floating placeholder wasting the 80s.",
      code: `export const EmailField = () => (
  <label className="block w-60">
    <span className="mb-2 inline-flex items-center border-2 border-[#1A1A1A] bg-[#FFE45C] px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[#1A1A1A]">Email</span>
    <input
      type="email"
      placeholder="you@company.com"
      className="h-12 w-full rounded-2xl border-[3px] border-[#1A1A1A] bg-[#FFFDF0] px-4 font-mono text-sm text-[#1A1A1A] outline-none shadow-[4px_4px_0_#1A1A1A] placeholder:text-[#B5B09A] focus:bg-[#FFFFFF] focus:shadow-[4px_4px_0_#FF6EC7]"
    />
  </label>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-col items-center s-panel rounded-3xl p-4">
          <label className="w-full">
            <span className="mb-2 inline-flex items-center border-2 border-[#1A1A1A] bg-[#FFE45C] px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[#1A1A1A]">Email</span>
            <input
              type="email"
              placeholder="you@company.com"
              className="h-12 w-full rounded-2xl border-[3px] border-[#1A1A1A] bg-[#FFFDF0] px-4 font-mono text-sm text-[#1A1A1A] outline-none shadow-[4px_4px_0_#1A1A1A] placeholder:text-[#B5B09A] focus:bg-[#FFFFFF] focus:shadow-[4px_4px_0_#FF6EC7]"
            />
          </label>
        </div>
      ),
    },
    {
      name: "Badge",
      description:
        "A confetti fleck. Candy fill, ink border, mini offset shadow. Every shape is a deliberate polygon of joy.",
      code: `export const StatusBadge = () => (
  <span className="inline-flex items-center gap-2 rounded-full border-[3px] border-[#1A1A1A] bg-[#00D4FF] px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[#1A1A1A] shadow-[3px_3px_0_#1A1A1A]">
    Stable
  </span>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-wrap items-center justify-center gap-2 s-panel rounded-3xl p-4">
          <span className="inline-flex items-center gap-2 rounded-full border-[3px] border-[#1A1A1A] bg-[#00D4FF] px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[#1A1A1A] shadow-[3px_3px_0_#1A1A1A]">
            Stable
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border-[3px] border-[#1A1A1A] bg-[#B967FF] px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-white shadow-[3px_3px_0_#1A1A1A]">
            v2.4.0
          </span>
        </div>
      ),
    },
    {
      name: "Card",
      description:
        "An oversized party invitation printed at 300dpi: border heavy, tape-yellow masthead strip, offset drop, squiggle-free but loud.",
      code: `export const ChangelogCard = () => (
  <article className="w-64 border-[3px] border-[#1A1A1A] bg-[#FFFDF0] shadow-[6px_6px_0_#1A1A1A]">
    <div className="flex items-center justify-between border-b-[3px] border-[#1A1A1A] bg-[#FFE45C] px-4 py-2">
      <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[#1A1A1A]">CHNG-LOG</span>
      <span className="font-sans text-sm font-black text-[#1A1A1A]">002</span>
    </div>
    <div className="px-4 py-3">
      <h3 className="font-sans text-lg font-black leading-[1.05] tracking-tight text-[#1A1A1A]">Faster search, fewer keystrokes.</h3>
      <p className="mt-2 font-mono text-[10px] leading-snug text-[#6B6B5C]">Results stream in as you type; queries now run in 80ms.</p>
    </div>
  </article>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-col justify-center s-panel rounded-3xl p-4">
          <article className="w-full border-[3px] border-[#1A1A1A] bg-[#FFFDF0] shadow-[6px_6px_0_#1A1A1A]">
            <div className="flex items-center justify-between border-b-[3px] border-[#1A1A1A] bg-[#FFE45C] px-4 py-2">
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[#1A1A1A]">CHNG-LOG</span>
              <span className="font-sans text-sm font-black text-[#1A1A1A]">002</span>
            </div>
            <div className="px-4 py-3">
              <h3 className="font-sans text-lg font-black leading-[1.05] tracking-tight text-[#1A1A1A]">Faster search, fewer keystrokes.</h3>
              <p className="mt-2 font-mono text-[10px] leading-snug text-[#6B6B5C]">Results stream in as you type; queries now run in 80ms.</p>
            </div>
          </article>
        </div>
      ),
    },
    {
      name: "Nav bar",
      description:
        "A ticker-tape bar: cream with a 3px black bottom edge and a geometric logo mark (pink triangle) that winks at 1981.",
      code: `export const NavBar = () => (
  <header className="flex h-16 w-full items-center justify-between border-b-[3px] border-[#1A1A1A] bg-[#FFFDF0] px-4">
    <span className="flex items-center gap-2 text-lg font-black tracking-tight text-[#1A1A1A]">
      <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
        <polygon points="11,1 21,20 1,20" fill="#FF6EC7" stroke="#1A1A1A" strokeWidth="2" strokeLinejoin="round" />
      </svg>
      acme
    </span>
    <nav className="flex gap-5">
      {["FEED", "ZINE", "ABOUT"].map((item) => (
        <a key={item} href="#" className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#1A1A1A] underline underline-offset-4 decoration-2 hover:decoration-[#FF6EC7]">{item}</a>
      ))}
    </nav>
  </header>
);`,
      size: "wideShort",
      preview: (
        <div className="flex h-full w-full flex-col justify-center rounded-md">
          <div className="flex h-16 w-full items-center justify-between border-b-[3px] border-[#1A1A1A] bg-[#FFFDF0] px-4">
            <span className="flex items-center gap-2 text-lg font-black tracking-tight text-[#1A1A1A]">
              <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
                <polygon points="11,1 21,20 1,20" fill="#FF6EC7" stroke="#1A1A1A" strokeWidth="2" strokeLinejoin="round" />
              </svg>
              acme
            </span>
            <nav className="flex gap-5">
              {["FEED", "ZINE", "ABOUT"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#1A1A1A] underline underline-offset-4 decoration-2 transition-colors hover:decoration-[#FF6EC7]"
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
    "Order the chaos. One pattern per screen, placed with intent.",
    "Use at most three hues plus ink: confetti, aqua, sun, black. Done.",
    "Put 2 to 3px outlines everywhere. Memphis is sticker graphics made interactive.",
    "Keep text on pattern inside filled blocks. Readability first, party second.",
  ],
  donts: [
    "Don't put body copy directly on the dot-grid background.",
    "Don't mute the palette. Pastel grays or dusty roses are tax evasion.",
    "Don't round past 28px. The geometry stays chunky and triangular.",
    "Don't use blurred drop shadows. Offset hard shadow, always.",
  ],
};
