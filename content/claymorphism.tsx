import type { StyleContent } from "@/lib/style-content";

export const claymorphism: StyleContent = {
  theme: {
    base: "#EFE9FB",
    background: "#EFE9FB",
    surface: "#FFFFFF",
    surface2: "#FFFFFF",
    line: "#E4D9F5",
    text: "#3A3345",
    muted: "#8A7F99",
    accent: "#FF8A5C",
    radius: "28px",
    display: "font-sans font-extrabold tracking-[-0.02em]",
    displayItalicLast: false,
    shadow: "0 14px 30px rgba(74,51,109,0.18), inset 0 2px 0 rgba(255,255,255,0.85), inset 0 -6px 12px rgba(74,51,109,0.12)",
  },
  what: "Claymorphism renders every surface as a puff of matte clay — pastel tones, enormous radii, a top-light specular line, a soft ground shadow. Nothing is flat, nothing is sharp, and everything looks like it can be poked.",
  origin: "Distilled from the 2020–21 3D illustration wave (Spline, Dribbble's 'soft 3D clay' trend, clay 3D icon sets) — CSS folk translated rendered clay into layered gradients and dual inset/outer shadows.",
  bestFor: [
    "Playful consumer products",
    "Children's and education apps",
    "Portfolios and launch pages",
    "App icons and empty states",
  ],
  avoid: [
    "Enterprise, B2B or financial UI",
    "Reading-heavy content",
    "Interfaces with density above ~3 primary actions per screen",
  ],
  palette: [
    { name: "Periwinkle", hex: "#EFE9FB", role: "Canvas — studio backdrop" },
    { name: "Ink", hex: "#3A3345", role: "Primary text" },
    { name: "Peach", hex: "#FFD0B8", role: "Warm puff" },
    { name: "Mint", hex: "#C4EBD6", role: "Cool puff" },
    { name: "Butter", hex: "#FFF3B0", role: "Highlight puff" },
    { name: "Coral", hex: "#FF8A5C", role: "Accent — pressed states" },
  ],
  typography: [
    { role: "Body / UI", family: "Baloo 2 / Nunito — 400 / 600 / 800", note: "Extra-Bold is the house voice; rounded terminals only. Set 14–16px." },
    { role: "Display", family: "Baloo 2 — 700 / 800", note: "38–64px, chunky, tight tracking, never uppercase." },
    { role: "Spec", family: "JetBrains Mono — 9–11px", note: "Kickers for puff elevation tokens. Uppercase, wide tracking." },
  ],
  components: [
    {
      name: "Button",
      description:
        "A puff you press. Gradient from a light tint to the hue itself, a fat radius, a deep plum ground shadow — and `active:` flattens it into the desk.",
      code: `export const PrimaryButton = () => (
  <button className="h-14 rounded-full bg-gradient-to-b from-[#FFB59A] via-[#FF8A5C] to-[#F2653A] px-8 text-base font-extrabold text-white shadow-[0_10px_24px_rgba(242,101,58,0.4),inset_0_2px_0_rgba(255,255,255,0.6),inset_0_-6px_10px_rgba(158,58,25,0.5)] transition-all active:translate-y-1 active:shadow-[0_4px_12px_rgba(242,101,58,0.45),inset_0_2px_6px_rgba(158,58,25,0.6)]">
    Get started
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-col items-center gap-3 s-panel rounded-[32px] p-4">
          <button className="h-14 rounded-full bg-gradient-to-b from-[#FFB59A] via-[#FF8A5C] to-[#F2653A] px-8 text-base font-extrabold text-white shadow-[0_10px_24px_rgba(242,101,58,0.4),inset_0_2px_0_rgba(255,255,255,0.6),inset_0_-6px_10px_rgba(158,58,25,0.5)] transition-all active:translate-y-1 active:shadow-[0_4px_12px_rgba(242,101,58,0.45),inset_0_2px_6px_rgba(158,58,25,0.6)]">
            Get started
          </button>
          <button className="text-sm font-bold text-[#FF8A5C]">or read the docs</button>
        </div>
      ),
    },
    {
      name: "Input",
      description:
        "A dented dimple — white puff well with a hard top-left inset shadow and buttery inner glow, like a thumb pressed into clay.",
      code: `export const EmailField = () => (
  <label className="block w-60">
    <span className="mb-2 block text-xs font-extrabold text-[#3A3345]">Email</span>
    <input
      type="email"
      placeholder="you@company.com"
      className="h-14 w-full rounded-2xl bg-[#FFF7F0] px-5 text-[15px] font-semibold text-[#3A3345] shadow-[inset_0_3px_8px_rgba(74,51,109,0.25),inset_0_-2px_2px_rgba(255,255,255,0.9)] outline-none placeholder:text-[#C4BCCF]"
    />
  </label>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-col items-center s-panel rounded-[32px] p-4">
          <label className="w-full">
            <span className="mb-2 block text-xs font-extrabold text-[#3A3345]">Email</span>
            <input
              type="email"
              placeholder="you@company.com"
              className="h-14 w-full rounded-2xl bg-[#FFF7F0] px-5 text-[15px] font-semibold text-[#3A3345] shadow-[inset_0_3px_8px_rgba(74,51,109,0.25),inset_0_-2px_2px_rgba(255,255,255,0.9)] outline-none placeholder:text-[#C4BCCF]"
            />
          </label>
        </div>
      ),
    },
    {
      name: "Badge",
      description:
        "Candy dots with inset highlight only — peach, mint or butter, ink-dark text. If it needs to be read, make it bigger than a grape.",
      code: `export const StatusBadge = () => (
  <span className="inline-flex items-center gap-2 rounded-full bg-[#C4EBD6] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#2B6B45] shadow-[0_4px_10px_rgba(43,107,69,0.25),inset_0_2px_0_rgba(255,255,255,0.8),inset_0_-3px_6px_rgba(43,107,69,0.3)]">
    Stable
  </span>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-wrap items-center justify-center gap-2 s-panel rounded-[32px] p-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#C4EBD6] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#2B6B45] shadow-[0_4px_10px_rgba(43,107,69,0.25),inset_0_2px_0_rgba(255,255,255,0.8),inset_0_-3px_6px_rgba(43,107,69,0.3)]">
            Stable
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFD0B8] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#8A3E1C] shadow-[0_4px_10px_rgba(138,62,28,0.25),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-3px_6px_rgba(138,62,28,0.3)]">
            v2.4.0
          </span>
        </div>
      ),
    },
    {
      name: "Card",
      description:
        "A puff slab — peach by default, sitting on violet. White inset highlight along the top edge and a deep plum shadow beneath.",
      code: `export const ChangelogCard = () => (
  <div className="w-64 rounded-[32px] bg-gradient-to-b from-[#FFE3D4] to-[#FFD0B8] p-6 shadow-[0_16px_32px_rgba(74,51,109,0.28),inset_0_3px_0_rgba(255,255,255,0.85),inset_0_-8px_14px_rgba(74,51,109,0.12)]">
    <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#8A7F99]">Changelog</p>
    <h3 className="mt-3 text-lg font-extrabold leading-snug text-[#3A3345]">Faster search, fewer keystrokes.</h3>
    <p className="mt-2 text-xs font-semibold leading-relaxed text-[#6B6079]">Results stream in as you type; queries now run in 80ms.</p>
  </div>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-col justify-center s-panel rounded-[32px] p-4">
          <div className="w-full rounded-[32px] bg-gradient-to-b from-[#FFE3D4] to-[#FFD0B8] p-6 shadow-[0_16px_32px_rgba(74,51,109,0.28),inset_0_3px_0_rgba(255,255,255,0.85),inset_0_-8px_14px_rgba(74,51,109,0.12)]">
            <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#8A7F99]">Changelog</p>
            <h3 className="mt-3 text-lg font-extrabold leading-snug text-[#3A3345]">Faster search, fewer keystrokes.</h3>
            <p className="mt-2 text-xs font-semibold leading-relaxed text-[#6B6079]">Results stream in as you type; queries now run in 80ms.</p>
          </div>
        </div>
      ),
    },
    {
      name: "Nav bar",
      description:
        "A floating whipped bar — thick white pill, chunky round icon buttons, coral brand dot. Shadow carries it above the desk.",
      code: `export const NavBar = () => (
  <header className="flex h-16 w-full items-center justify-between rounded-full bg-white px-3 shadow-[0_12px_28px_rgba(74,51,109,0.28),inset_0_2px_0_rgba(255,255,255,0.9)]">
    <span className="pl-3 text-xl font-extrabold tracking-tight text-[#3A3345]">acme<span className="text-[#FF8A5C]">.</span></span>
    <div className="flex gap-2">
      <button aria-label="Menu" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EFE9FB] text-[#3A3345] shadow-[inset_0_-2px_4px_rgba(74,51,109,0.18),inset_0_2px_0_rgba(255,255,255,0.9)] active:shadow-[inset_0_3px_6px_rgba(74,51,109,0.3)]">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden><path d="M4 6h12M4 10h12M4 14h12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
      </button>
      <button aria-label="Search" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF8A5C] text-white shadow-[inset_0_-2px_4px_rgba(158,58,25,0.4),inset_0_2px_0_rgba(255,255,255,0.6)] active:shadow-[inset_0_3px_6px_rgba(158,58,25,0.5)]">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden><circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="2.2" /><path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
      </button>
    </div>
  </header>
);`,
      size: "wideShort",
      preview: (
        <div className="flex h-full w-full flex-col justify-center rounded-full">
          <div className="flex h-16 w-full items-center justify-between rounded-full bg-white px-3 shadow-[0_12px_28px_rgba(74,51,109,0.28),inset_0_2px_0_rgba(255,255,255,0.9)]">
            <span className="pl-3 text-xl font-extrabold tracking-tight text-[#3A3345]">acme<span className="text-[#FF8A5C]">.</span></span>
            <div className="flex gap-2">
              <button aria-label="Menu" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EFE9FB] text-[#3A3345] shadow-[inset_0_-2px_4px_rgba(74,51,109,0.18),inset_0_2px_0_rgba(255,255,255,0.9)]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden><path d="M4 6h12M4 10h12M4 14h12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
              </button>
              <button aria-label="Search" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF8A5C] text-white shadow-[inset_0_-2px_4px_rgba(158,58,25,0.4),inset_0_2px_0_rgba(255,255,255,0.6)]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden><circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="2.2" /><path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
              </button>
            </div>
          </div>
        </div>
      ),
    },
  ],
  dos: [
    "Give every puff one outline layer and one inset top light — never both blurred",
    "Keep the canvas a single pastel hue — puffs need a quiet stage",
    "Radius 24–44px minimum — sharper corners are illegal in this house",
    "Pressed states squash translate-y, not just shadow",
  ],
  donts: [
    "Don't stack more than one elevation level per screen",
    "Don't use neon or saturated primaries — clay is pastel, always",
    "Don't put white text on pastel fills — pick ink for contrast",
    "Don't render text on curved puffs — reading soft type defeats the point",
  ],
};
