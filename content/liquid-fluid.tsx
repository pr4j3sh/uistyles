import type { StyleContent } from "@/lib/style-content";

export const liquidFluid: StyleContent = {
  theme: {
    base: "#0B1F3A",
    background:
      "radial-gradient(1200px 500px at 15% -10%, rgba(41,230,255,0.28), transparent 60%), radial-gradient(900px 500px at 85% 110%, rgba(162,89,255,0.32), transparent 60%), radial-gradient(600px 400px at 55% 50%, rgba(77,124,254,0.22), transparent 65%), #0B1F3A",
    surface: "#132A47",
    surface2: "#183154",
    line: "rgba(180,220,255,0.16)",
    text: "#F4F9FF",
    muted: "#8FA8CE",
    accent: "#29E6FF",
    radius: "22px",
    display: "font-sans font-extrabold tracking-[-0.02em]",
    displayItalicLast: true,
    displaySize: "clamp(2.3rem, 7vh, 5rem)",
    shadow: "0 24px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.14)",
  },
  what: "Liquid / Fluid UI treats the interface as a living liquid — drifting color fields, morphing blob radii, specular highlights that imply viscosity. Everything feels like it could be tipped, poured or pressed, and motion completes the metaphor rather than decorating it.",
  origin: "From the 2021 'fluid gradient' revival — mesh gradients, WebGL noise shaders and iOS 16's Liquid design experiments — translated to CSS by layering radial gradients, backdrop blur and pointer-follow gradients.",
  bestFor: [
    "Consumer apps and launch pages",
    "Music, fitness, wellbeing and playback UIs",
    "Brands that want motion, atmosphere and depth",
    "WebGL-optional showcases built in pure CSS",
  ],
  avoid: [
    "Reading-heavy long-form",
    "Dense enterprise surfaces",
    "Pages where motion would violate WCAG (no reduced-motion support)",
  ],
  palette: [
    { name: "Deep", hex: "#0B1F3A", role: "Canvas — twilight sea" },
    { name: "Foam", hex: "#F4F9FF", role: "Primary text" },
    { name: "Cyan", hex: "#29E6FF", role: "Specular accent — caustics" },
    { name: "Azure", hex: "#4D7CFE", role: "Mid-field gradient" },
    { name: "Violet", hex: "#A259FF", role: "Deep-field gradient" },
    { name: "Mute", hex: "#8FA8CE", role: "Subsurface text" },
  ],
  typography: [
    { role: "Display", family: "Inter — 700 / 800", note: "40–64px, tight. Liquid wants confident grotesque — never serif (fluidity breaks at stems)." },
    { role: "Body", family: "Inter — 400 / 500", note: "15px/1.55 on a 60ch measure. Calm, slightly cool tracking." },
    { role: "Spec", family: "JetBrains Mono — 9–11px", note: "Kickers print fluid descriptors: VISC / 0.42 / WAVE-01." },
  ],
  components: [
    {
      name: "Button",
      description:
        "A droplet that resists your pointer. Filled with a diagonal cyan→azure wash and a specular top highlight; on press it swells rather than darkening.",
      code: `export const PrimaryButton = () => (
  <button className="h-12 rounded-full bg-gradient-to-br from-[#29E6FF] via-[#4D7CFE] to-[#7B4DFF] px-7 text-sm font-semibold text-[#062041] shadow-[0_8px_24px_rgba(41,230,255,0.35),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-3px_6px_rgba(6,32,65,0.35)] transition-shadow hover:shadow-[0_10px_32px_rgba(41,230,255,0.5),inset_0_1px_0_rgba(255,255,255,0.7),inset_0_-3px_6px_rgba(6,32,65,0.4)]">
    Get started
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-col items-center gap-3 s-panel rounded-3xl p-4">
          <button className="h-12 rounded-full bg-gradient-to-br from-[#29E6FF] via-[#4D7CFE] to-[#7B4DFF] px-7 text-sm font-semibold text-[#062041] shadow-[0_8px_24px_rgba(41,230,255,0.35),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-3px_6px_rgba(6,32,65,0.35)] transition-shadow hover:shadow-[0_10px_32px_rgba(41,230,255,0.5),inset_0_1px_0_rgba(255,255,255,0.7),inset_0_-3px_6px_rgba(6,32,65,0.4)]">
            Get started
          </button>
          <button className="text-sm font-medium text-[#29E6FF]">or read the manual</button>
        </div>
      ),
    },
    {
      name: "Input",
      description:
        "A submerged well. Frosted glass inset, cyan caret, and a hairline that brightens on focus like light through water.",
      code: `export const EmailField = () => (
  <label className="block w-60">
    <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.3em] text-[#8FA8CE]">Email</span>
    <input
      type="email"
      placeholder="you@company.com"
      className="h-12 w-full rounded-2xl border border-[rgba(180,220,255,0.18)] bg-[rgba(19,42,71,0.6)] px-4 text-[15px] text-[#F4F9FF] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-2px_6px_rgba(0,0,0,0.25)] outline-none backdrop-blur-md transition-colors caret-[#29E6FF] placeholder:text-[#5E7CA6] focus:border-[#29E6FF]/50"
    />
  </label>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-col items-center s-panel rounded-3xl p-4">
          <label className="w-full">
            <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.3em] text-[#8FA8CE]">Email</span>
            <input
              type="email"
              placeholder="you@company.com"
              className="h-12 w-full rounded-2xl border border-[rgba(180,220,255,0.18)] bg-[rgba(19,42,71,0.6)] px-4 text-[15px] text-[#F4F9FF] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-2px_6px_rgba(0,0,0,0.25)] outline-none backdrop-blur-md transition-colors caret-[#29E6FF] placeholder:text-[#5E7CA6] focus:border-[#29E6FF]/50"
            />
          </label>
        </div>
      ),
    },
    {
      name: "Badge",
      description:
        "A micro-droplet. Filled with the same gradient as the button family; uppercase mono, tracked — specularity does the differentiation.",
      code: `export const StatusBadge = () => (
  <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(41,230,255,0.35)] bg-[rgba(41,230,255,0.1)] px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.3em] text-[#29E6FF] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
    Stable
  </span>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-wrap items-center justify-center gap-2 s-panel rounded-3xl p-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(41,230,255,0.35)] bg-[rgba(41,230,255,0.1)] px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.3em] text-[#29E6FF] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
            Stable
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(180,220,255,0.16)] bg-[rgba(19,42,71,0.6)] px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.3em] text-[#8FA8CE]">
            v2.4.0
          </span>
        </div>
      ),
    },
    {
      name: "Card",
      description:
        "A frosted slab — heavy blur over a hue vent, hairline caustic border, specular top edge. The card is wet, the way menus get wet in beach clubs.",
      code: `export const ChangelogCard = () => (
  <div className="w-64 rounded-3xl border border-[rgba(180,220,255,0.2)] bg-[rgba(19,42,71,0.55)] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-xl">
    <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#8FA8CE]">Changelog</p>
    <h3 className="mt-3 text-lg font-bold leading-snug text-[#F4F9FF]">Faster search, fewer keystrokes.</h3>
    <p className="mt-2 text-xs leading-relaxed text-[#8FA8CE]">Results stream in as you type; queries now run in 80ms.</p>
  </div>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-col justify-center s-panel rounded-3xl p-4">
          <div className="w-full rounded-3xl border border-[rgba(180,220,255,0.2)] bg-[rgba(19,42,71,0.55)] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-xl">
            <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#8FA8CE]">Changelog</p>
            <h3 className="mt-3 text-lg font-bold leading-snug text-[#F4F9FF]">Faster search, fewer keystrokes.</h3>
            <p className="mt-2 text-xs leading-relaxed text-[#8FA8CE]">Results stream in as you type; queries now run in 80ms.</p>
          </div>
        </div>
      ),
    },
    {
      name: "Nav bar",
      description:
        "A floating wet pill — translucent, heavy backdrop blur, cyan wordmark dot. The bar shears off at the bottom to disappear into the canvas.",
      code: `export const NavBar = () => (
  <header className="flex h-16 w-full items-center justify-between rounded-full border border-[rgba(180,220,255,0.18)] bg-[rgba(19,42,71,0.5)] px-4 shadow-[0_12px_32px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl">
    <span className="pl-2 text-lg font-extrabold tracking-tight text-[#F4F9FF]">acme<span className="text-[#29E6FF]">.</span></span>
    <nav className="flex gap-5">
      {["Pulse", "Wave", "Flux", "About"].map((item) => (
        <a key={item} href="#" className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8FA8CE] transition-colors hover:text-[#29E6FF]">{item}</a>
      ))}
    </nav>
  </header>
);`,
      size: "wideShort",
      preview: (
        <div className="flex h-full w-full flex-col justify-center rounded-full">
          <div className="flex h-16 w-full items-center justify-between rounded-full border border-[rgba(180,220,255,0.18)] bg-[rgba(19,42,71,0.5)] px-4 shadow-[0_12px_32px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl">
            <span className="pl-2 text-lg font-extrabold tracking-tight text-[#F4F9FF]">acme<span className="text-[#29E6FF]">.</span></span>
            <nav className="flex gap-5">
              {["Pulse", "Wave", "Flux", "About"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8FA8CE] transition-colors hover:text-[#29E6FF]"
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
    "One fluid light source — speculars all point the same way",
    "Layer radial-gradients, never flat-color a canvas",
    "backdrop-blur-md or heavier on every glass surface — translucency is the material",
    "Slow the gradient drift to 20s+ — liquid, not lava",
  ],
  donts: [
    "Don't use flat backgrounds — the fluid metaphor needs depth",
    "Don't add white text on mid-tone cyan — drops wash to 30%",
    "Don't reuse 5+ gradient stops without a limiter — it reads as a rainbow, not water",
    "Don't skip prefers-reduced-motion — drift is optional, not required",
  ],
};
