import type { StyleContent } from "@/lib/style-content";

export const industrialUi: StyleContent = {
  theme: {
    base: "#D8D4CB",
    background:
      "repeating-linear-gradient(90deg, rgba(34,34,31,0.035) 0 1px, transparent 1px 24px), repeating-linear-gradient(0deg, rgba(34,34,31,0.035) 0 1px, transparent 1px 24px), linear-gradient(180deg, #DEDAD2 0%, #D8D4CB 100%)",
    surface: "#E8E5DE",
    surface2: "#CFCAC0",
    line: "#A9A398",
    text: "#22221F",
    muted: "#6B675E",
    accent: "#E8590C",
    radius: "2px",
    display: "font-mono font-bold uppercase tracking-[-0.02em]",
    displayItalicLast: false,
    shadow: "3px 3px 0 rgba(34,34,31,0.15)",
  },
  what: "Industrial UI is equipment you can trust — concrete surfaces, machined keylines, safety-orange callouts, and mono labels stencilled like a work order. It is deliberately utilitarian: every element looks specified, numbered and built to survive a factory floor.",
  origin: "Borrowed from mid-century industrial design and safety signage, then from 1970s control panels and 1990s technical manuals — later revived by hardware startups and engineering brands that wanted to signal durability over polish.",
  bestFor: [
    "Manufacturing and logistics platforms",
    "Hardware and engineering brands",
    "Developer tools with a no-nonsense tone",
    "Field operations and equipment dashboards",
  ],
  avoid: [
    "Lifestyle, beauty and wellness brands",
    "Playful consumer apps for children",
    "Luxury products where softness is the point",
  ],
  palette: [
    { name: "Concrete", hex: "#D8D4CB", role: "Canvas — poured surface" },
    { name: "Cream", hex: "#F0EEE8", role: "Panel — spec sheet" },
    { name: "Steel", hex: "#8A8880", role: "Machined secondary" },
    { name: "Graphite", hex: "#22221F", role: "Text & structure" },
    { name: "Safety", hex: "#E8590C", role: "Accent — action & caution" },
    { name: "Caution", hex: "#F2C14E", role: "Hazard tags — attention" },
  ],
  typography: [
    { role: "Display", family: "JetBrains Mono — 700", note: "36–56px, uppercase, tight. Reads as a stencil on a shipping crate." },
    { role: "Body", family: "Inter — 400 / 500", note: "13–14px/1.55. Plain and functional; this is a manual, not a magazine." },
    { role: "Spec", family: "JetBrains Mono — 9–11px", note: "Part numbers, revisions, tolerances — uppercase, tracked, never decorative." },
  ],
  components: [
    {
      name: "Button",
      description:
        "A safety-orange actuator — flat fill, graphite keyline, hard offset shadow. Pressing translates it into the shadow like a real push-button.",
      code: `export const PrimaryButton = () => (
  <button className="h-11 border border-[#22221F] bg-[#E8590C] px-6 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#F0EEE8] shadow-[3px_3px_0_#22221F] transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_#22221F]">
    Run job
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-col items-start gap-3 s-panel rounded-xl p-5">
          <button className="h-11 border border-[#22221F] bg-[#E8590C] px-6 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#F0EEE8] shadow-[3px_3px_0_#22221F] transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_#22221F]">
            Run job
          </button>
          <a href="#" className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6B675E] underline underline-offset-4 decoration-[#A9A398] hover:text-[#22221F]">
            View spec sheet →
          </a>
        </div>
      ),
    },
    {
      name: "Input",
      description:
        "A serial-number field — cream plate, steel keyline, mono value. Focus swaps the keyline to safety orange; there is no other feedback.",
      code: `export const EmailField = () => (
  <label className="block w-60">
    <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.22em] text-[#6B675E]">Serial no.</span>
    <input
      type="text"
      placeholder="SN-0000-00"
      className="h-11 w-full rounded-[2px] border border-[#A9A398] bg-[#F0EEE8] px-3 font-mono text-sm uppercase tracking-[0.08em] text-[#22221F] outline-none transition-colors caret-[#E8590C] placeholder:text-[#A9A398] focus:border-[#E8590C]"
    />
  </label>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-col items-center s-panel rounded-xl p-5">
          <label className="w-full">
            <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.22em] text-[#6B675E]">Serial no.</span>
            <input
              type="text"
              placeholder="SN-0000-00"
              className="h-11 w-full rounded-[2px] border border-[#A9A398] bg-[#F0EEE8] px-3 font-mono text-sm uppercase tracking-[0.08em] text-[#22221F] outline-none transition-colors caret-[#E8590C] placeholder:text-[#A9A398] focus:border-[#E8590C]"
            />
          </label>
        </div>
      ),
    },
    {
      name: "Badge",
      description:
        "A specification plate — square corners, mono caps, one caution-yellow tag and one steel tag. It looks riveted on, not styled on.",
      code: `export const StatusBadge = () => (
  <span className="inline-flex items-center gap-2 border border-[#22221F] bg-[#F2C14E] px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#22221F]">
    Rev 04
  </span>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-wrap items-center justify-center gap-2 s-panel rounded-xl p-5">
          <span className="inline-flex items-center gap-2 border border-[#22221F] bg-[#F2C14E] px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#22221F]">
            Rev 04
          </span>
          <span className="inline-flex items-center gap-2 border border-[#22221F] bg-[#CFCAC0] px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#22221F]">
            ISO 9001
          </span>
        </div>
      ),
    },
    {
      name: "Card",
      description:
        "A work order — orange header strip, ruled body, dashed separators and mono key/value rows. Information is tabulated, never narrated.",
      code: `export const ChangelogCard = () => (
  <article className="w-64 border border-[#22221F] bg-[#F0EEE8] shadow-[3px_3px_0_rgba(34,34,31,0.15)]">
    <div className="flex items-center justify-between border-b border-[#22221F] bg-[#E8590C] px-3 py-1.5 font-mono text-[8px] font-bold uppercase tracking-[0.24em] text-[#F0EEE8]">
      <span>Work order</span><span>024</span>
    </div>
    <div className="p-4">
      <h3 className="font-mono text-base font-bold uppercase leading-tight text-[#22221F]">Faster search, fewer keystrokes.</h3>
      <dl className="mt-3 space-y-1.5 border-t border-dashed border-[#A9A398] pt-3 font-mono text-[9px] uppercase tracking-[0.12em]">
        <div className="flex justify-between"><dt className="text-[#6B675E]">Latency</dt><dd className="text-[#22221F]">80ms</dd></div>
        <div className="flex justify-between"><dt className="text-[#6B675E]">Status</dt><dd className="text-[#E8590C]">Passed</dd></div>
      </dl>
    </div>
  </article>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-col justify-center s-panel rounded-xl p-4">
          <article className="w-full border border-[#22221F] bg-[#F0EEE8] shadow-[3px_3px_0_rgba(34,34,31,0.15)]">
            <div className="flex items-center justify-between border-b border-[#22221F] bg-[#E8590C] px-3 py-1.5 font-mono text-[8px] font-bold uppercase tracking-[0.24em] text-[#F0EEE8]">
              <span>Work order</span><span>024</span>
            </div>
            <div className="p-4">
              <h3 className="font-mono text-base font-bold uppercase leading-tight text-[#22221F]">Faster search, fewer keystrokes.</h3>
              <dl className="mt-3 space-y-1.5 border-t border-dashed border-[#A9A398] pt-3 font-mono text-[9px] uppercase tracking-[0.12em]">
                <div className="flex justify-between"><dt className="text-[#6B675E]">Latency</dt><dd className="text-[#22221F]">80ms</dd></div>
                <div className="flex justify-between"><dt className="text-[#6B675E]">Status</dt><dd className="text-[#E8590C]">Passed</dd></div>
              </dl>
            </div>
          </article>
        </div>
      ),
    },
    {
      name: "Nav bar",
      description:
        "An equipment rail — cream plate, graphite rule, mono wordmark with a double slash, serial number on the right. No logo, just identification.",
      code: `export const NavBar = () => (
  <header className="flex h-12 w-full items-center justify-between border-b-2 border-[#22221F] bg-[#F0EEE8] px-4">
    <span className="font-mono text-[13px] font-bold uppercase tracking-[0.1em] text-[#22221F]">Acme<span className="text-[#E8590C]">{"//"}</span>Mfg</span>
    <nav className="flex items-center gap-5">
      {["PLANT", "UNITS", "DOCS"].map((item) => (
        <a key={item} href="#" className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#6B675E] transition-colors hover:text-[#22221F]">{item}</a>
      ))}
      <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#A9A398]">SN-0042</span>
    </nav>
  </header>
);`,
      size: "wideShort",
      preview: (
        <div className="flex h-full w-full flex-col justify-center rounded-md">
          <div className="flex h-12 w-full items-center justify-between border-b-2 border-[#22221F] bg-[#F0EEE8] px-4">
            <span className="font-mono text-[13px] font-bold uppercase tracking-[0.1em] text-[#22221F]">Acme<span className="text-[#E8590C]">{"//"}</span>Mfg</span>
            <nav className="flex items-center gap-5">
              {["PLANT", "UNITS", "DOCS"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#6B675E] transition-colors hover:text-[#22221F]"
                >
                  {item}
                </a>
              ))}
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#A9A398]">SN-0042</span>
            </nav>
          </div>
        </div>
      ),
    },
  ],
  dos: [
    "Keep corners at 0–2px — machined parts do not have soft edges",
    "One safety color for action and caution; everything else is gray",
    "Label with mono caps and real units — 80ms, REV 04, SN-0042",
    "Use hard offset shadows, never blur — contact, not atmosphere",
  ],
  donts: [
    "Don't use rounded pills or playful illustration",
    "Don't add gradients to surfaces — concrete is flat",
    "Don't decorate with orange — reserve it for action and warning",
    "Don't hide the numbers — this style is honest about specifications",
  ],
};
