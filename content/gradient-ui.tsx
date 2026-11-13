import type { StyleContent } from "@/lib/style-content";

export const gradientUi: StyleContent = {
  theme: {
    base: "#2D1152",
    background:
      "radial-gradient(1100px 620px at 18% -10%, #FFC29E 0%, transparent 58%), radial-gradient(950px 560px at 85% 115%, #FF3D8A 0%, transparent 60%), radial-gradient(760px 480px at 60% 45%, #7A3DFF 0%, transparent 63%), linear-gradient(140deg,#FF6A5C 0%,#FF3D8A 45%,#7A3DFF 100%)",
    surface: "rgba(255,255,255,0.12)",
    surface2: "rgba(255,255,255,0.18)",
    line: "rgba(255,255,255,0.25)",
    text: "#FFF4EC",
    muted: "rgba(255,244,236,0.65)",
    accent: "#FFFFFF",
    radius: "22px",
    display: "font-sans font-extrabold tracking-[-0.02em]",
    displayItalicLast: false,
    shadow: "0 26px 64px rgba(45,17,82,0.55), inset 0 1px 0 rgba(255,255,255,0.35)",
  },
  what: "Gradient UI is color in continuous transition: mesh fields, rich diagonal washes, gradient-filled text, gradient strokes on everything that usually holds a flat fill. The page is the artwork, and the content rides it.",
  origin: "Stripe codified it in 2018, Linear in 2020, and the iridescent WebGL wave followed. Gradients moved from decoration to material system, carrying meaning like warmth, depth, energy and momentum.",
  bestFor: [
    "Product launch pages",
    "iridescent dev tools and CLIs (Vercel-ish)",
    "Music and creator platforms",
    "Brands whose product is the feeling",
  ],
  avoid: [
    "Data-dense enterprise UI",
    "Long-form reading pages",
    "Print-adjacent editorial products",
  ],
  palette: [
    { name: "Sunset", hex: "#FF6A5C", role: "Warm lobe, top-left" },
    { name: "Magenta", hex: "#FF3D8A", role: "Mid wash, center" },
    { name: "Violet", hex: "#7A3DFF", role: "Deep field, bottom-right" },
    { name: "Peach", hex: "#FFC29E", role: "Highlight bloom, upper edge" },
    { name: "Cream", hex: "#FFF4EC", role: "Frosted text and chips" },
    { name: "Ink", hex: "#2D1152", role: "Canvas fallback, deep plum" },
  ],
  typography: [
    { role: "Display", family: "Inter, 700 / 800", note: "44 to 88px, tight tracking, sometimes gradient-filled on hero moments only, never on body." },
    { role: "Body", family: "Inter, 400 / 500", note: "14-16px/1.5. On saturated washes always weight 500 or heavier; 400 dissolves." },
    { role: "Spec", family: "JetBrains Mono, 9-11px", note: "Gradient recipes printed on the surface: MESH / 140DEG / SUN / PEA / VIOLET." },
  ],
  components: [
    {
      name: "Button",
      description:
        "Same gradient as the canvas, so it reads as continuous material. A deeper shadow, a specular top lip, and a scale-up hover instead of a color change.",
      code: `export const PrimaryButton = () => (
  <button className="h-12 rounded-full bg-gradient-to-br from-[#FF6A5C] via-[#FF3D8A] to-[#7A3DFF] px-6 text-sm font-bold text-white shadow-[0_8px_24px_rgba(255,61,138,0.45),inset_0_1px_0_rgba(255,255,255,0.4)] transition-transform hover:scale-[1.04]">
    Get started
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-col items-center gap-3 s-panel rounded-2xl p-4">
          <button className="h-12 rounded-full bg-gradient-to-br from-[#FF6A5C] via-[#FF3D8A] to-[#7A3DFF] px-6 text-sm font-bold text-white shadow-[0_8px_24px_rgba(255,61,138,0.45),inset_0_1px_0_rgba(255,255,255,0.4)] transition-transform hover:scale-[1.04]">
            Get started
          </button>
          <button className="font-sans text-sm font-semibold text-[#FFF4EC]/80 hover:text-white">or read the manual</button>
        </div>
      ),
    },
    {
      name: "Input",
      description:
        "A frosted slot inside the gradient wash: white translucency, white hairline, white caret. Frost is louder than contour; borders are implied, not drawn.",
      code: `export const EmailField = () => (
  <label className="block w-60">
    <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.3em] text-[rgba(255,244,236,0.6)]">Email</span>
    <input
      type="email"
      placeholder="you@company.com"
      className="h-12 w-full rounded-2xl border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.12)] px-4 text-[15px] text-[#FFF4EC] shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-2px_6px_rgba(45,17,82,0.35)] outline-none backdrop-blur-md transition-colors caret-white placeholder:text-[rgba(255,244,236,0.45)] focus:border-[rgba(255,255,255,0.55)]"
    />
  </label>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-col items-center s-panel rounded-2xl p-4">
          <label className="w-full">
            <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.3em] text-[rgba(255,244,236,0.6)]">Email</span>
            <input
              type="email"
              placeholder="you@company.com"
              className="h-12 w-full rounded-2xl border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.12)] px-4 text-[15px] text-[#FFF4EC] shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-2px_6px_rgba(45,17,82,0.35)] outline-none backdrop-blur-md transition-colors caret-white placeholder:text-[rgba(255,244,236,0.45)] focus:border-[rgba(255,255,255,0.55)]"
            />
          </label>
        </div>
      ),
    },
    {
      name: "Badge",
      description:
        "A chip filled with the same gradient as the hero. Continuity is the point. White specular lip, tracked white caps.",
      code: `export const StatusBadge = () => (
  <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.4)] bg-gradient-to-r from-[#FF6A5C] via-[#FF3D8A] to-[#7A3DFF] px-3.5 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]">
    Stable
  </span>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-wrap items-center justify-center gap-2 s-panel rounded-2xl p-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.4)] bg-gradient-to-r from-[#FF6A5C] via-[#FF3D8A] to-[#7A3DFF] px-3.5 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]">
            Stable
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] px-3.5 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[rgba(255,244,236,0.75)]">
            v2.4.0
          </span>
        </div>
      ),
    },
    {
      name: "Card",
      description:
        "The polished chrome plate: frosted white slab over the wash, hard specular lip, trailing gradient shadow. Body stays at 500 weight.",
      code: `export const ChangelogCard = () => (
  <div className="w-64 rounded-2xl border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.14)] p-6 shadow-[0_16px_40px_rgba(45,17,82,0.5),inset_0_1px_0_rgba(255,255,255,0.35)] backdrop-blur-xl">
    <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[rgba(255,244,236,0.6)]">CHNG / 002</p>
    <h3 className="mt-2 font-sans text-xl font-bold leading-snug text-[#FFF4EC]">Faster search, <em className="italic">fewer</em> keystrokes.</h3>
    <p className="mt-2 font-sans text-xs font-medium leading-relaxed text-[rgba(255,244,236,0.75)]">Results stream in as you type; queries now run in 80ms.</p>
  </div>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-col justify-center s-panel rounded-2xl p-4">
          <div className="w-full rounded-2xl border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.14)] p-6 shadow-[0_16px_40px_rgba(45,17,82,0.5),inset_0_1px_0_rgba(255,255,255,0.35)] backdrop-blur-xl">
            <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[rgba(255,244,236,0.6)]">CHNG / 002</p>
            <h3 className="mt-2 font-sans text-xl font-bold leading-snug text-[#FFF4EC]">Faster search, <em className="italic">fewer</em> keystrokes.</h3>
            <p className="mt-2 font-sans text-xs font-medium leading-relaxed text-[rgba(255,244,236,0.75)]">Results stream in as you type; queries now run in 80ms.</p>
          </div>
        </div>
      ),
    },
    {
      name: "Nav bar",
      description:
        "A floating gradient rim bar: chrome-white translucency, the same wash at every depth. Continuous material, with no hard junctions between regions.",
      code: `export const NavBar = () => (
  <header className="flex h-16 w-full items-center justify-between rounded-full border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.14)] px-4 shadow-[0_8px_32px_rgba(45,17,82,0.45),inset_0_1px_0_rgba(255,255,255,0.4)] backdrop-blur-2xl">
    <span className="pl-2 text-lg font-extrabold tracking-tight text-[#FFF4EC]">acme</span>
    <nav className="flex gap-5">
      {["Pulse", "Wave", "Verge", "About"].map((item) => (
        <a key={item} href="#" className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[rgba(255,244,236,0.7)] transition-colors hover:text-white">{item}</a>
      ))}
    </nav>
  </header>
);`,
      size: "wideShort",
      preview: (
        <div className="flex h-full w-full flex-col justify-center rounded-full">
          <div className="flex h-16 w-full items-center justify-between rounded-full border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.14)] px-4 shadow-[0_8px_32px_rgba(45,17,82,0.45),inset_0_1px_0_rgba(255,255,255,0.4)] backdrop-blur-2xl">
            <span className="pl-2 text-lg font-extrabold tracking-tight text-[#FFF4EC]">acme</span>
            <nav className="flex gap-5">
              {["Pulse", "Wave", "Verge", "About"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[rgba(255,244,236,0.7)] transition-colors hover:text-white"
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
    "One hero gradient per page. Reuse it at every depth or use nothing at all.",
    "Keep text at 500 weight or heavier on saturated washes. 400 dissolves.",
    "Make buttons use the same gradient as the canvas. Continuity is the material.",
    "Layer radial and linear. Two gradient types, never pure linear.",
  ],
  donts: [
    "Don't use flat fills where a gradient exists. Gradient is the material, not decoration.",
    "Don't add a fourth hue. Sun, magenta, violet; stop there.",
    "Don't gradient-fill body text. Reserve it for hero type at most.",
    "Don't use black text on the wash. It reads as a hole; use cream.",
  ],
};
