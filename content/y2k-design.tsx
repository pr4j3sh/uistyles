import type { StyleContent } from "@/lib/style-content";

export const y2kDesign: StyleContent = {
  theme: {
    base: "#E8ECF2",
    background:
      "radial-gradient(600px 400px at 12% -10%, rgba(0,240,255,0.3), transparent 60%), radial-gradient(500px 400px at 92% 115%, rgba(74,107,255,0.28), transparent 60%), linear-gradient(180deg,#F4F6FB 0%,#E2E7EF 100%)",
    surface: "#FFFFFF",
    surface2: "#EDF1F7",
    line: "#C3CBD9",
    text: "#1B2333",
    muted: "#67718A",
    accent: "#00E0FF",
    radius: "20px",
    display: "font-sans font-extrabold tracking-[-0.02em]",
    displayItalicLast: false,
    shadow: "0 10px 28px rgba(27,35,51,0.22), inset 0 1px 0 #FFFFFF, inset 0 -3px 6px rgba(27,35,51,0.12)",
  },
  what: "Y2K Design is millennium optimism rendered in chrome and aqua — iridescent gradients, glossy plastics, bubble type, orbs, starbursts, translucency everywhere. The world was going to be run by robots; the UI should look like a holographic Palm Pilot.",
  origin: "Peaked 1998–2004 around the millennium bug, iMac G3, MSN Messenger and the first dot-com bubble — then got memed back in 2020 as Y2K-core. Built from DMG software, metallic hardware packaging and Winamp skins.",
  bestFor: [
    "Music and DJ platforms",
    "Nostalgia-first consumer brands",
    "Sneaker and streetwear drops",
    "Experimental product launches",
  ],
  avoid: [
    "Enterprise or government services",
    "Accessibility-first critical flows",
    "Reading-first editorial products",
  ],
  palette: [
    { name: "Platinum", hex: "#F4F6FB", role: "Iridescent ground" },
    { name: "Ink", hex: "#1B2333", role: "Primary text" },
    { name: "Aqua", hex: "#00E0FF", role: "Specular highlight" },
    { name: "Hyperblue", hex: "#4A6BFF", role: "Chrome deep field" },
    { name: "Grape", hex: "#B86BFF", role: "Orb violet" },
    { name: "Steel", hex: "#C3CBD9", role: "Brushed metal" },
  ],
  typography: [
    { role: "Display", family: "Inter — 700 / 800", note: "40–64px with tight spacing; chrome-gradient text on hero moments only, never on body." },
    { role: "Body", family: "Inter — 400 / 500", note: "14–15px/1.5, slightly cool-toned, never serif." },
    { role: "Metadata", family: "JetBrains Mono — 9–11px", note: "Build stamps, version tags and DOT-COM era micro-copy: BUILD_0042.SYS." },
  ],
  components: [
    {
      name: "Button",
      description:
        "An iridescent aqua capsule — candy blue → cyan → mint wash, specular highlight bar, and a chrome rim border. Clicking makes a satisfyingly wet 'thock'.",
      code: `export const PrimaryButton = () => (
  <button className="h-12 rounded-full border border-[#3B4C74] bg-gradient-to-b from-[#8FF3FF] via-[#00D4F0] to-[#0089C9] px-6 text-sm font-bold text-[#04263B] shadow-[0_6px_14px_rgba(0,180,220,0.4),inset_0_1px_0_rgba(255,255,255,0.85),inset_0_-2px_5px_rgba(0,60,90,0.4)] [text-shadow:0_1px_0_rgba(255,255,255,0.5)] transition-all hover:from-[#A8F6FF] hover:via-[#1AE0F8] hover:to-[#00A0E0] active:shadow-[inset_0_2px_5px_rgba(0,60,90,0.5)]">
    Get started
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-col items-center gap-3 s-panel rounded-2xl p-4">
          <button className="h-12 rounded-full border border-[#3B4C74] bg-gradient-to-b from-[#8FF3FF] via-[#00D4F0] to-[#0089C9] px-6 text-sm font-bold text-[#04263B] shadow-[0_6px_14px_rgba(0,180,220,0.4),inset_0_1px_0_rgba(255,255,255,0.85),inset_0_-2px_5px_rgba(0,60,90,0.4)] [text-shadow:0_1px_0_rgba(255,255,255,0.5)] transition-all hover:from-[#A8F6FF] hover:via-[#1AE0F8] hover:to-[#00A0E0] active:shadow-[inset_0_2px_5px_rgba(0,60,90,0.5)]">
            Get started
          </button>
          <button className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#4A6BFF] underline decoration-dotted underline-offset-4 hover:text-[#00E0FF]">
            or the FAQ.txt
          </button>
        </div>
      ),
    },
    {
      name: "Input",
      description:
        "A frosted inset slot — white translucency over lavender, inner glow, cyan caret. Focus brightens the rim like a CD jewel case under UV.",
      code: `export const EmailField = () => (
  <label className="block w-60">
    <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.3em] text-[#67718A]">Email</span>
    <input
      type="email"
      placeholder="you@company.com"
      className="h-12 w-full rounded-full border border-[#C3CBD9] bg-[rgba(255,255,255,0.75)] px-5 text-[15px] text-[#1B2333] shadow-[inset_0_2px_6px_rgba(27,35,51,0.18),inset_0_-1px_0_rgba(255,255,255,0.8)] outline-none backdrop-blur-md transition-all placeholder:text-[#9AA4B8] focus:border-[#00E0FF] focus:shadow-[inset_0_2px_6px_rgba(27,35,51,0.2),inset_0_-1px_0_rgba(255,255,255,0.9),0_0_0_3px_rgba(0,224,255,0.35)]"
    />
  </label>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-col items-center s-panel rounded-2xl p-4">
          <label className="w-full">
            <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.3em] text-[#67718A]">Email</span>
            <input
              type="email"
              placeholder="you@company.com"
              className="h-12 w-full rounded-full border border-[#C3CBD9] bg-[rgba(255,255,255,0.75)] px-5 text-[15px] text-[#1B2333] shadow-[inset_0_2px_6px_rgba(27,35,51,0.18),inset_0_-1px_0_rgba(255,255,255,0.8)] outline-none backdrop-blur-md transition-all placeholder:text-[#9AA4B8] focus:border-[#00E0FF] focus:shadow-[inset_0_2px_6px_rgba(27,35,51,0.2),inset_0_-1px_0_rgba(255,255,255,0.9),0_0_0_3px_rgba(0,224,255,0.35)]"
            />
          </label>
        </div>
      ),
    },
    {
      name: "Badge",
      description:
        "An iridescent candy chip — aqua-to-grape gradient pill with a chrome seam. Tiny, glossy, slightly too shiny for its own good.",
      code: `export const StatusBadge = () => (
  <span className="inline-flex items-center gap-2 rounded-full border border-[#3B4C74] bg-gradient-to-r from-[#00E0FF] via-[#4A6BFF] to-[#B86BFF] px-3.5 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-white shadow-[0_2px_6px_rgba(74,107,255,0.45),inset_0_1px_0_rgba(255,255,255,0.75)] [text-shadow:0_1px_1px_rgba(0,20,40,0.5)]">
    Stable
  </span>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-wrap items-center justify-center gap-2 s-panel rounded-2xl p-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#3B4C74] bg-gradient-to-r from-[#00E0FF] via-[#4A6BFF] to-[#B86BFF] px-3.5 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-white shadow-[0_2px_6px_rgba(74,107,255,0.45),inset_0_1px_0_rgba(255,255,255,0.75)] [text-shadow:0_1px_1px_rgba(0,20,40,0.5)]">
            Stable
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C3CBD9] bg-white px-3.5 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[#1B2333] shadow-[inset_0_1px_0_#FFFFFF,0_1px_2px_rgba(27,35,51,0.15)]">
            v2.4.0
          </span>
        </div>
      ),
    },
    {
      name: "Card",
      description:
        "A chrome-framed DMG window — brushed steel outer rim, white-gloss interior, specular highlight — like a Software Update dialog from 2000.",
      code: `export const ChangelogCard = () => (
  <div className="w-64 rounded-2xl border border-[#8A93A6] bg-gradient-to-b from-[#D4DAE6] via-[#E8ECF2] to-[#C3CBD9] p-[6px] shadow-[0_10px_28px_rgba(27,35,51,0.35),inset_0_1px_0_#FFFFFF]">
    <div className="rounded-xl border border-[#8A93A6] bg-white shadow-[inset_0_1px_0_#FFFFFF]">
      <div className="flex items-center justify-between border-b border-[#C3CBD9] bg-gradient-to-b from-[#FDFEFF] to-[#EDF1F7] px-3 py-1.5 rounded-t-xl">
        <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#67718A]">CHANGELOG.SYS</span>
        <div className="flex gap-1"><span className="h-2 w-2 rounded-full bg-[#FF5F57]" /><span className="h-2 w-2 rounded-full bg-[#FEBC2E]" /><span className="h-2 w-2 rounded-full bg-[#28C840]" /></div>
      </div>
      <div className="px-4 py-3">
        <h3 className="font-sans text-sm font-bold leading-tight text-[#1B2333]">Faster search, fewer keystrokes.</h3>
        <p className="mt-1 font-mono text-[9px] leading-snug text-[#67718A]">Results stream in as you type; queries now run in 80ms.</p>
      </div>
    </div>
  </div>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-col justify-center s-panel rounded-2xl p-4">
          <div className="w-full rounded-2xl border border-[#8A93A6] bg-gradient-to-b from-[#D4DAE6] via-[#E8ECF2] to-[#C3CBD9] p-[6px] shadow-[0_10px_28px_rgba(27,35,51,0.35),inset_0_1px_0_#FFFFFF]">
            <div className="rounded-xl border border-[#8A93A6] bg-white shadow-[inset_0_1px_0_#FFFFFF]">
              <div className="flex items-center justify-between rounded-t-xl border-b border-[#C3CBD9] bg-gradient-to-b from-[#FDFEFF] to-[#EDF1F7] px-3 py-1.5">
                <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#67718A]">CHANGELOG.SYS</span>
                <div className="flex gap-1"><span className="h-2 w-2 rounded-full bg-[#FF5F57]" /><span className="h-2 w-2 rounded-full bg-[#FEBC2E]" /><span className="h-2 w-2 rounded-full bg-[#28C840]" /></div>
              </div>
              <div className="px-4 py-3">
                <h3 className="font-sans text-sm font-bold leading-tight text-[#1B2333]">Faster search, fewer keystrokes.</h3>
                <p className="mt-1 font-mono text-[9px] leading-snug text-[#67718A]">Results stream in as you type; queries now run in 80ms.</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Nav bar",
      description:
        "A chrome toolbar — horizontal brushed-silver gradient, three glossy orb traffic-lights, one aqua dot for the brand. The future, 1999 model.",
      code: `export const NavBar = () => (
  <header className="flex h-14 w-full items-center justify-between border-b border-[#8A93A6] bg-gradient-to-b from-[#FDFEFF] via-[#E8ECF2] to-[#C3CBD9] px-4 shadow-[inset_0_1px_0_#FFFFFF,0_1px_2px_rgba(27,35,51,0.25)]">
    <div className="flex items-center gap-2">
      <span className="h-4 w-4 rounded-full bg-[radial-gradient(circle_at_35%_35%,#B8F6FF_0%,#00D4F0_45%,#0089C9_100%)] shadow-[inset_0_-1px_2px_rgba(0,60,90,0.45),0_1px_1px_rgba(255,255,255,0.8)]" aria-hidden />
      <span className="text-[16px] font-bold tracking-tight text-[#1B2333]">acme</span>
    </div>
    <div className="flex gap-3 font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-[#67718A]">
      {["SYS", "NET", "ABOUT"].map((item) => (
        <a key={item} href="#" className="hover:text-[#00E0FF]">{item}</a>
      ))}
    </div>
  </header>
);`,
      size: "wideShort",
      preview: (
        <div className="flex h-full w-full flex-col justify-center rounded-md">
          <div className="flex h-14 w-full items-center justify-between border-b border-[#8A93A6] bg-gradient-to-b from-[#FDFEFF] via-[#E8ECF2] to-[#C3CBD9] px-4 shadow-[inset_0_1px_0_#FFFFFF,0_1px_2px_rgba(27,35,51,0.25)]">
            <div className="flex items-center gap-2">
              <span className="h-4 w-4 rounded-full bg-[radial-gradient(circle_at_35%_35%,#B8F6FF_0%,#00D4F0_45%,#0089C9_100%)] shadow-[inset_0_-1px_2px_rgba(0,60,90,0.45),0_1px_1px_rgba(255,255,255,0.8)]" aria-hidden />
              <span className="text-[16px] font-bold tracking-tight text-[#1B2333]">acme</span>
            </div>
            <div className="flex gap-3 font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-[#67718A]">
              {["SYS", "NET", "ABOUT"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="transition-colors hover:text-[#00E0FF]"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ],
  dos: [
    "Chrome + aqua + one violet — cap the millennial palette at three hues",
    "Specular bars on every glossy surface — the shine is the story",
    "Mono build-stamp micro-copy everywhere: v2.4.0 / BUILD_0042",
    "Translucency over gradients — glass over chrome over plastic",
  ],
  donts: [
    "Don't use flat colors where a gradient exists — flatness kills the futurism",
    "Don't mix in modern minimalism — one Y2K decision per screen, not a hybrid",
    "Don't use white text on aqua — the cyan is a highlighter, not a body fill",
    "Don't render real Apple logos — chrome is a style, trademarks are not",
  ],
};
