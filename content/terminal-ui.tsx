import type { StyleContent } from "@/lib/style-content";

export const terminalUi: StyleContent = {
  theme: {
    base: "#050806",
    background:
      "repeating-linear-gradient(0deg, rgba(74,246,38,0.03) 0 1px, transparent 1px 3px), radial-gradient(900px 520px at 50% -10%, rgba(74,246,38,0.1), transparent 65%), #050806",
    surface: "#08120B",
    surface2: "#0C1A10",
    line: "#1C3A24",
    text: "#B8F5C0",
    muted: "#5C8A64",
    accent: "#4AF626",
    radius: "0px",
    display: "font-mono font-bold tracking-[-0.02em]",
    displayItalicLast: false,
    shadow: "0 0 0 1px rgba(74,246,38,0.12), 0 0 24px rgba(74,246,38,0.06)",
  },
  what: "Terminal-inspired UI is the command line taken seriously as a visual language — black glass, phosphor green, monospace everything, bracket-delimited actions and prompts that tell you exactly where you are. Nothing is hidden behind an icon.",
  origin: "From 1970s VT100 and phosphor CRTs through 1980s BBS culture and 2000s IRC clients, revived by developer tools and the 2020s terminal-aesthetic wave in marketing sites and dashboards.",
  bestFor: [
    "Developer tools, CLIs and infrastructure",
    "Security and observability products",
    "Documentation with a hacker tone",
    "Communities around open source",
  ],
  avoid: [
    "Consumer apps for non-technical audiences",
    "Healthcare and public-sector services",
    "Brands that need warmth or approachability",
  ],
  palette: [
    { name: "Void", hex: "#050806", role: "Canvas — CRT black" },
    { name: "Phosphor", hex: "#4AF626", role: "Accent — primary emission" },
    { name: "Amber", hex: "#FFB000", role: "Warning — secondary emission" },
    { name: "Ash", hex: "#B8F5C0", role: "Primary text — soft phosphor" },
    { name: "Dim", hex: "#5C8A64", role: "Muted text & prompts" },
    { name: "Grid", hex: "#1C3A24", role: "Borders & scanline structure" },
  ],
  typography: [
    { role: "Display", family: "JetBrains Mono — 700", note: "36–56px, tight, sentence case. The machine speaks in one voice." },
    { role: "Body", family: "JetBrains Mono — 400 / 500", note: "13–14px/1.65. Mono body is the point; keep lines short." },
    { role: "Spec", family: "JetBrains Mono — 9–11px", note: "Prompts, exit codes, paths — lowercase paths, uppercase labels." },
  ],
  components: [
    {
      name: "Button",
      description:
        "A bracketed command — flat green keyline, 10% phosphor fill, uppercase mono label. It reads as something you type, not something you click.",
      code: `export const PrimaryButton = () => (
  <button className="h-10 border border-[#4AF626] bg-[#4AF626]/10 px-5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#4AF626] transition-colors hover:bg-[#4AF626]/20">
    [ Execute ]
  </button>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-col items-start gap-3 s-panel rounded-xl p-5">
          <button className="h-10 border border-[#4AF626] bg-[#4AF626]/10 px-5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#4AF626] transition-colors hover:bg-[#4AF626]/20">
            [ Execute ]
          </button>
          <a href="#" className="font-mono text-[10px] text-[#5C8A64] underline underline-offset-4 hover:text-[#B8F5C0]">
            $ man acme
          </a>
        </div>
      ),
    },
    {
      name: "Input",
      description:
        "A live prompt — dollar sign, blinking-ready caret, no chrome. The field is a line in the shell; focus brightens the border only.",
      code: `export const EmailField = () => (
  <label className="block w-60">
    <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.24em] text-[#5C8A64]">user@acme:~$</span>
    <div className="flex h-11 w-full items-center gap-2 border border-[#1C3A24] bg-[#08120B] px-3 font-mono text-sm transition-colors focus-within:border-[#4AF626]">
      <span className="text-[#4AF626]">$</span>
      <input
        type="text"
        placeholder="type a command"
        className="min-w-0 flex-1 bg-transparent text-[#4AF626] outline-none caret-[#4AF626] placeholder:text-[#3E5C46]"
      />
    </div>
  </label>
);`,
      size: "small",
      preview: (
        <div className="flex w-60 flex-col items-center s-panel rounded-xl p-5">
          <label className="w-full">
            <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.24em] text-[#5C8A64]">user@acme:~$</span>
            <div className="flex h-11 w-full items-center gap-2 border border-[#1C3A24] bg-[#08120B] px-3 font-mono text-sm transition-colors focus-within:border-[#4AF626]">
              <span className="text-[#4AF626]">$</span>
              <input
                type="text"
                placeholder="type a command"
                className="min-w-0 flex-1 bg-transparent text-[#4AF626] outline-none caret-[#4AF626] placeholder:text-[#3E5C46]"
              />
            </div>
          </label>
        </div>
      ),
    },
    {
      name: "Badge",
      description:
        "An exit code — bracketed mono tag, phosphor for OK and amber for warnings. Status is text, not a colored dot; the terminal has no icons.",
      code: `export const StatusBadge = () => (
  <span className="inline-flex items-center border border-[#4AF626]/40 bg-[#4AF626]/10 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#4AF626]">
    [ OK ]
  </span>
);`,
      size: "small",
      preview: (
        <div className="flex w-56 flex-wrap items-center justify-center gap-2 s-panel rounded-xl p-5">
          <span className="inline-flex items-center border border-[#4AF626]/40 bg-[#4AF626]/10 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#4AF626]">
            [ OK ]
          </span>
          <span className="inline-flex items-center border border-[#FFB000]/40 bg-[#FFB000]/10 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#FFB000]">
            [ WARN ]
          </span>
        </div>
      ),
    },
    {
      name: "Card",
      description:
        "A terminal window — title bar with three square lamps, a command, two lines of output and a blinking cursor. The transcript is the content.",
      code: `export const ChangelogCard = () => (
  <article className="w-64 border border-[#1C3A24] bg-[#08120B] font-mono shadow-[0_0_0_1px_rgba(74,246,38,0.12)]">
    <div className="flex items-center gap-1.5 border-b border-[#1C3A24] bg-[#0C1A10] px-3 py-2">
      <span className="h-2 w-2 bg-[#FFB000]" />
      <span className="h-2 w-2 bg-[#4AF626]" />
      <span className="h-2 w-2 bg-[#5C8A64]" />
      <span className="ml-2 text-[8px] uppercase tracking-[0.24em] text-[#5C8A64]">acme — zsh</span>
    </div>
    <div className="p-4 text-[10px] leading-relaxed">
      <p className="text-[#4AF626]">$ acme search --fast</p>
      <p className="mt-1 text-[#B8F5C0]">→ results stream as you type</p>
      <p className="text-[#5C8A64]">→ queries now 80ms</p>
      <p className="mt-2 text-[#4AF626]">$ <span className="animate-pulse">█</span></p>
    </div>
  </article>
);`,
      size: "small",
      preview: (
        <div className="flex w-64 flex-col justify-center s-panel rounded-xl p-4">
          <article className="w-full border border-[#1C3A24] bg-[#08120B] font-mono shadow-[0_0_0_1px_rgba(74,246,38,0.12)]">
            <div className="flex items-center gap-1.5 border-b border-[#1C3A24] bg-[#0C1A10] px-3 py-2">
              <span className="h-2 w-2 bg-[#FFB000]" />
              <span className="h-2 w-2 bg-[#4AF626]" />
              <span className="h-2 w-2 bg-[#5C8A64]" />
              <span className="ml-2 text-[8px] uppercase tracking-[0.24em] text-[#5C8A64]">acme — zsh</span>
            </div>
            <div className="p-4 text-[10px] leading-relaxed">
              <p className="text-[#4AF626]">$ acme search --fast</p>
              <p className="mt-1 text-[#B8F5C0]">→ results stream as you type</p>
              <p className="text-[#5C8A64]">→ queries now 80ms</p>
              <p className="mt-2 text-[#4AF626]">$ <span className="animate-pulse">█</span></p>
            </div>
          </article>
        </div>
      ),
    },
    {
      name: "Nav bar",
      description:
        "A shell prompt as header — user@host in phosphor, path-style links in dim green, no logo. You always know where you are.",
      code: `export const NavBar = () => (
  <header className="flex h-12 w-full items-center justify-between border-b border-[#1C3A24] bg-[#050806] px-4 font-mono">
    <span className="text-[12px] text-[#5C8A64]">acme@prod<span className="text-[#4AF626]">:~$</span></span>
    <nav className="flex gap-5">
      {["./docs", "./status", "./about"].map((item) => (
        <a key={item} href="#" className="text-[10px] text-[#5C8A64] transition-colors hover:text-[#4AF626]">{item}</a>
      ))}
    </nav>
  </header>
);`,
      size: "wideShort",
      preview: (
        <div className="flex h-full w-full flex-col justify-center rounded-md">
          <div className="flex h-12 w-full items-center justify-between border-b border-[#1C3A24] bg-[#050806] px-4 font-mono">
            <span className="text-[12px] text-[#5C8A64]">acme@prod<span className="text-[#4AF626]">:~$</span></span>
            <nav className="flex gap-5">
              {["./docs", "./status", "./about"].map((item) => (
                <a key={item} href="#" className="text-[10px] text-[#5C8A64] transition-colors hover:text-[#4AF626]">
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
    "Mono for every glyph — proportional type breaks the spell",
    "Phosphor green for action, amber for warnings; nothing else glows",
    "Show the prompt and the path — orientation is the interface",
    "Keep lines short and outputs honest; the terminal never markets",
  ],
  donts: [
    "Don't add icons where a word would do",
    "Don't use soft shadows or rounded corners — CRTs have neither",
    "Don't glow body text — reserve emission for accents and prompts",
    "Don't fake typing animations longer than a beat; waiting is not a feature",
  ],
};
