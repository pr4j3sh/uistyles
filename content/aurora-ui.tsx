import type { StyleContent } from "@/lib/style-content";

export const auroraUi: StyleContent = {
  theme: {
    base: "#04101F",
    background:
      "radial-gradient(900px 520px at 50% -15%, rgba(0,255,163,0.35), transparent 62%), radial-gradient(700px 480px at 85% 20%, rgba(0,212,255,0.3), transparent 60%), radial-gradient(750px 500px at 15% 115%, rgba(185,103,255,0.35), transparent 62%), linear-gradient(180deg,#04101F 0%,#071A33 55%,#04101F 100%)",
    surface: "rgba(255,255,255,0.05)",
    surface2: "rgba(255,255,255,0.08)",
    line: "rgba(0,255,180,0.18)",
    text: "#EAF6FF",
    muted: "rgba(234,246,255,0.55)",
    accent: "#00FFA3",
    radius: "16px",
    display: "font-sans font-semibold tracking-[-0.01em]",
    displayItalicLast: true,
    shadow: "0 22px 55px rgba(0,0,0,0.5), inset 0 1px 0 rgba(0,255,163,0.18)",
  },
  what: "Aurora UI paints northern-light ribbons through a dark sky — flowing curtains of green, teal and violet over deep space. Every surface is a lens: translucent, luminous, slightly radioactive just at the edge of perception.",
  origin: "Crystallized around 2021–22 from Datadog/Stripe 'mesh gradient' marketing sites and the iridescent WebGL shader wave — the aurora borealis as a color system, not a metaphor.",
  bestFor: [
    "Developer tools and observability",
    "AI and data products that feel alive",
    "Music, sleep and wellness brands",
    "Conference and launch pages",
  ],
  avoid: [
    "Financial-services compliance UI",
    "Government or safety-first recreation",
    "Print-adjacent editorial products",
  ],
  palette: [
    { name: "Abyss", hex: "#04101F", role: "Night canvas — polar sky" },
    { name: "Green", hex: "#00FFA3", role: "Auroral emission — primary" },
    { name: "Teal", hex: "#00D4FF", role: "Mid curtain — secondary" },
    { name: "Violet", hex: "#B967FF", role: "Sub-auroral glow — deep field" },
    { name: "Ice", hex: "#EAF6FF", role: "Starfield text" },
    { name: "Mute", hex: "rgba(234,246,255,0.55)", role: "Subsurface text" },
  ],
  typography: [
    { role: "Display", family: "Inter — 500 / 600", note: "36–56px, tight tracking, normal weight — aurora whispers, never shouts." },
    { role: "Body", family: "Inter — 400 / 500", note: "14–15px/1.5. Always weight 500 on dark starfield — thin strokes dissolve." },
    { role: "Spec", family: "JetBrains Mono — 9–11px", note: "Observatory callouts: KVPT / 042 / WAVEFORM. Tracked caps, ice-green." },
  ],
  components: [
    {
      name: "Button",
      description:
        "A green photon traveling through the sky. Transparent fill with an aurora keyline, glow trailing behind — the rare button that glows AND reads.",
      code: `export const PrimaryButton = () => (
  <button className="h-12 rounded-full border border-[#00FFA3]/40 bg-[rgba(0,255,163,0.08)] px-6 text-sm font-semibold text-[#00FFA3] shadow-[0_0_24px_rgba(0,255,163,0.3),inset_0_1px_0_rgba(0,255,163,0.3)] transition-shadow hover:shadow-[0_0_40px_rgba(0,255,163,0.5),inset_0_1px_0_rgba(0,255,163,0.45)]">
    Get started
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-col items-center gap-3 s-panel rounded-2xl p-4">
          <button className="h-12 rounded-full border border-[#00FFA3]/40 bg-[rgba(0,255,163,0.08)] px-6 text-sm font-semibold text-[#00FFA3] shadow-[0_0_24px_rgba(0,255,163,0.3),inset_0_1px_0_rgba(0,255,163,0.3)] transition-shadow hover:shadow-[0_0_40px_rgba(0,255,163,0.5),inset_0_1px_0_rgba(0,255,163,0.45)]">
            Get started
          </button>
          <button className="font-sans text-sm font-semibold text-[rgba(234,246,255,0.6)] hover:text-[#00FFA3]">or read the manual</button>
        </div>
      ),
    },
    {
      name: "Input",
      description:
        "A subsurface lens. Frosted well, green caret, hairline keyline that brightens on focus like a ripple catching light under ice.",
      code: `export const EmailField = () => (
  <label className="block w-60">
    <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.3em] text-[rgba(234,246,255,0.5)]">Email</span>
    <input
      type="email"
      placeholder="you@company.com"
      className="h-12 w-full rounded-2xl border border-[rgba(0,255,163,0.18)] bg-[rgba(4,16,31,0.55)] px-4 text-[15px] text-[#EAF6FF] shadow-[inset_0_1px_0_rgba(0,255,163,0.14),inset_0_-2px_6px_rgba(0,0,0,0.4)] outline-none backdrop-blur-xl transition-colors caret-[#00FFA3] placeholder:text-[rgba(234,246,255,0.3)] focus:border-[#00FFA3]/40"
    />
  </label>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-col items-center s-panel rounded-2xl p-4">
          <label className="w-full">
            <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.3em] text-[rgba(234,246,255,0.5)]">Email</span>
            <input
              type="email"
              placeholder="you@company.com"
              className="h-12 w-full rounded-2xl border border-[rgba(0,255,163,0.18)] bg-[rgba(4,16,31,0.55)] px-4 text-[15px] text-[#EAF6FF] shadow-[inset_0_1px_0_rgba(0,255,163,0.14),inset_0_-2px_6px_rgba(0,0,0,0.4)] outline-none backdrop-blur-xl transition-colors caret-[#00FFA3] placeholder:text-[rgba(234,246,255,0.3)] focus:border-[#00FFA3]/40"
            />
          </label>
        </div>
      ),
    },
    {
      name: "Badge",
      description:
        "A pinprick of auroral emission. Tiny, perfectly round, green-on-dark — an observatory star marker, not a tag.",
      code: `export const StatusBadge = () => (
  <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,255,163,0.4)] bg-[rgba(0,255,163,0.08)] px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.3em] text-[#00FFA3] shadow-[inset_0_1px_0_rgba(0,255,163,0.3)]">
    Stable
  </span>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-wrap items-center justify-center gap-2 s-panel rounded-2xl p-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,255,163,0.4)] bg-[rgba(0,255,163,0.08)] px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.3em] text-[#00FFA3] shadow-[inset_0_1px_0_rgba(0,255,163,0.3)]">
            Stable
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(234,246,255,0.14)] bg-[rgba(255,255,255,0.04)] px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.3em] text-[rgba(234,246,255,0.6)]">
            v2.4.0
          </span>
        </div>
      ),
    },
    {
      name: "Card",
      description:
        "A panel of polar ice over the aurora field. 5% white frost, green specular lip, deep shadow trailing the violet curtain — text stays 500 weight.",
      code: `export const ChangelogCard = () => (
  <div className="w-64 rounded-2xl border border-[rgba(0,255,163,0.16)] bg-[rgba(255,255,255,0.05)] p-6 shadow-[0_14px_36px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(0,255,163,0.22)] backdrop-blur-xl">
    <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[rgba(234,246,255,0.5)]">CHNG / 002</p>
    <h3 className="mt-2 font-sans text-xl font-semibold leading-snug text-[#EAF6FF]">Faster search, <em className="italic text-[#00FFA3]">fewer</em> keystrokes.</h3>
    <p className="mt-2 font-sans text-xs font-medium leading-relaxed text-[rgba(234,246,255,0.65)]">Results stream in as you type; queries now run in 80ms.</p>
  </div>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-col justify-center s-panel rounded-2xl p-4">
          <div className="w-full rounded-2xl border border-[rgba(0,255,163,0.16)] bg-[rgba(255,255,255,0.05)] p-6 shadow-[0_14px_36px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(0,255,163,0.22)] backdrop-blur-xl">
            <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[rgba(234,246,255,0.5)]">CHNG / 002</p>
            <h3 className="mt-2 font-sans text-xl font-semibold leading-snug text-[#EAF6FF]">Faster search, <em className="italic text-[#00FFA3]">fewer</em> keystrokes.</h3>
            <p className="mt-2 font-sans text-xs font-medium leading-relaxed text-[rgba(234,246,255,0.65)]">Results stream in as you type; queries now run in 80ms.</p>
          </div>
        </div>
      ),
    },
    {
      name: "Nav bar",
      description:
        "A aurora-glass navigation rail — heavy-blur translucent band, green wordmark dot, tracked-ice links. The bar stays out of the way of the show.",
      code: `export const NavBar = () => (
  <header className="flex h-16 w-full items-center justify-between border-b border-[rgba(0,255,163,0.14)] bg-[rgba(255,255,255,0.04)] px-4 shadow-[0_8px_28px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(0,255,163,0.2)] backdrop-blur-2xl">
    <span className="pl-2 text-lg font-semibold tracking-tight text-[#EAF6FF]">acme<span className="text-[#00FFA3]">.</span></span>
    <nav className="flex gap-5">
      {["Observatory", "Wave", "Flux", "About"].map((item) => (
        <a key={item} href="#" className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-[rgba(234,246,255,0.55)] transition-colors hover:text-[#00FFA3]">{item}</a>
      ))}
    </nav>
  </header>
);`,
      size: "wideShort",
      preview: (
        <div className="flex h-full w-full flex-col justify-center rounded-md">
          <div className="flex h-16 w-full items-center justify-between border-b border-[rgba(0,255,163,0.14)] bg-[rgba(255,255,255,0.04)] px-4 shadow-[0_8px_28px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(0,255,163,0.2)] backdrop-blur-2xl">
            <span className="pl-2 text-lg font-semibold tracking-tight text-[#EAF6FF]">acme<span className="text-[#00FFA3]">.</span></span>
            <nav className="flex gap-5">
              {["Observatory", "Wave", "Flux", "About"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-[rgba(234,246,255,0.55)] transition-colors hover:text-[#00FFA3]"
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
    "One emission hue + one deep-field hue + ice text — restraint inside abundance",
    "Layer your gradients — radial + linear, two layers minimum, three max",
    "backdrop-blur ≥ 20px — aurora haze is vapor, not smudge",
    "Specular lips on every glass surface — the polar sky reflects on ice",
  ],
  donts: [
    "Don't use flat fills where a gradient exists — auroras are never flat",
    "Don't add a fourth hue — green / teal / violet; stop there",
    "Don't use white text on light cyan — emission peaks at green, not white",
    "Don't place body copy on the bright lobe without a frost backing",
  ],
};
