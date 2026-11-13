export type StyleStatus = "available" | "soon";

export type StyleMeta = {
  slug: string;
  name: string;
  tagline: string;
  index: number;
  category: string;
  status: StyleStatus;
  /** Searchable vocabulary: moods, use cases, traits. kebab-case. */
  tags: string[];
};

export type StyleGroup = {
  name: string;
  styles: StyleMeta[];
};

const s = (
  slug: string,
  name: string,
  tagline: string,
  index: number,
  category: string,
  status: StyleStatus = "soon",
  tags: string[] = [],
): StyleMeta => ({ slug, name, tagline, index, category, status, tags });

export const STYLE_GROUPS: StyleGroup[] = [
  {
    name: "Foundations & Classics",
    styles: [
      s("minimalism", "Minimalism", "Less, but better. Radical restraint.", 1, "Foundations & Classics", "available", ["minimal", "calm", "serious", "accessible", "saas", "documentation", "portfolio", "landing-page", "light-mode"]),
      s("flat-design", "Flat Design", "Pure shapes, zero decoration.", 2, "Foundations & Classics", "available", ["colorful", "minimal", "friendly", "accessible", "mobile-app", "saas", "landing-page", "e-commerce", "light-mode"]),
      s("material-design", "Material Design", "Paper, ink and tonal depth.", 3, "Foundations & Classics", "available", ["technical", "saas", "mobile-app", "dashboard", "accessible", "documentation", "light-mode", "dark-mode", "serious"]),
      s("swiss-design", "Swiss Design", "Grids, grotesque type, objective clarity.", 4, "Foundations & Classics", "available", ["editorial", "news", "minimal", "serious", "print", "accessible", "high-contrast", "portfolio"]),
      s("editorial-design", "Editorial Design", "The magazine as interface.", 5, "Foundations & Classics", "available", ["editorial", "news", "blog", "magazine", "print", "elegant", "serif"]),
      s("typography-driven", "Typography-driven UI", "Type is the interface.", 6, "Foundations & Classics", "available", ["editorial", "typography", "portfolio", "blog", "minimal", "elegant", "print", "news"]),
    ],
  },
  {
    name: "Soft & Tactile",
    styles: [
      s("neumorphism", "Neumorphism", "Soft extruded plastic surfaces.", 7, "Soft & Tactile", "available", ["soft", "calm", "friendly", "light-mode", "mobile-app", "health", "cozy", "minimal"]),
      s("skeuomorphism", "Skeuomorphism", "Digital objects mimicking physical ones.", 8, "Soft & Tactile", "available", ["textured", "cozy", "nostalgic", "warm", "friendly", "health", "realistic"]),
      s("claymorphism", "Claymorphism", "Puffy, playful, 3D-clay surfaces.", 9, "Soft & Tactile", "available", ["cute", "playful", "friendly", "kids", "mobile-app", "colorful", "landing-page", "rounded"]),
      s("organic-natural", "Organic / Natural UI", "Earth tones, soft edges, calm.", 10, "Soft & Tactile", "available", ["organic", "calm", "cozy", "warm", "health", "food", "natural"]),
      s("liquid-fluid", "Liquid / Fluid UI", "Interfaces in continuous motion.", 11, "Soft & Tactile", "available", ["futuristic", "gradient", "colorful", "landing-page", "marketing", "mobile-app", "energetic"]),
    ],
  },
  {
    name: "Bold & Expressive",
    styles: [
      s("brutalism", "Brutalism", "Raw concrete energy, zero polish.", 12, "Bold & Expressive", "available", ["raw", "bold", "high-contrast", "portfolio", "experimental", "monochrome"]),
      s("neobrutalism", "Neobrutalism", "Brutalism with color and a wink.", 13, "Bold & Expressive", "available", ["bold", "colorful", "playful", "high-contrast", "landing-page", "marketing", "e-commerce"]),
      s("memphis-design", "Memphis Design", "Postmodern chaos, confetti geometry.", 14, "Bold & Expressive", "available", ["playful", "colorful", "energetic", "kids", "gaming", "marketing", "landing-page", "creative"]),
      s("maximalism", "Maximalism", "More is more. Abundance as aesthetic.", 15, "Bold & Expressive", "available", ["luxurious", "bold", "colorful", "e-commerce", "marketing", "maximalist", "print"]),
      s("y2k-design", "Y2K Design", "Chrome, aqua and millennium optimism.", 16, "Bold & Expressive", "available", ["nostalgic", "playful", "colorful", "gaming", "e-commerce", "marketing", "chrome"]),
    ],
  },
  {
    name: "Light & Atmosphere",
    styles: [
      s("glassmorphism", "Glassmorphism", "Frosted glass over vibrant light.", 17, "Light & Atmosphere", "available", ["futuristic", "gradient", "dark-mode", "landing-page", "saas", "marketing", "mobile-app"]),
      s("aurora-ui", "Aurora UI", "Northern lights as a design language.", 18, "Light & Atmosphere", "available", ["gradient", "dark-mode", "futuristic", "calm", "landing-page", "marketing", "elegant"]),
      s("gradient-ui", "Gradient UI", "Color in continuous transition.", 19, "Light & Atmosphere", "available", ["gradient", "colorful", "landing-page", "marketing", "mobile-app", "bold", "futuristic"]),
      s("dark-ui", "Dark UI", "Light on dark, built for long sessions.", 20, "Light & Atmosphere", "available", ["dark-mode", "developer-tool", "dashboard", "saas", "technical", "serious"]),
      s("light-ui", "Light UI", "Bright, airy, quietly confident.", 21, "Light & Atmosphere", "available", ["light-mode", "minimal", "calm", "saas", "documentation", "corporate", "accessible"]),
    ],
  },
  {
    name: "Retro & Futuristic",
    styles: [
      s("cyberpunk-ui", "Cyberpunk UI", "Neon noir, high tech, low life.", 22, "Retro & Futuristic", "available", ["dark-mode", "futuristic", "gaming", "developer-tool", "high-contrast", "bold", "neon"]),
      s("synthwave-ui", "Synthwave UI", "Outrun sunsets and chrome grids.", 23, "Retro & Futuristic", "available", ["nostalgic", "gaming", "dark-mode", "futuristic", "energetic", "retro", "music"]),
      s("retro-vintage-ui", "Retro / Vintage UI", "Warm nostalgia, analog texture.", 24, "Retro & Futuristic", "available", ["nostalgic", "warm", "cozy", "print", "food", "editorial", "retro"]),
      s("pixel-art-ui", "Pixel Art UI", "8-bit charm, hard pixels only.", 25, "Retro & Futuristic", "available", ["gaming", "nostalgic", "playful", "kids", "retro", "pixel"]),
      s("futuristic-ui", "Futuristic UI", "Interfaces from tomorrow, today.", 26, "Retro & Futuristic", "available", ["futuristic", "dark-mode", "technical", "dashboard", "developer-tool", "saas"]),
    ],
  },
  {
    name: "Systems & Surfaces",
    styles: [
      s("bento-grid-design", "Bento Grid Design", "Modular cells, Japanese lunchbox logic.", 27, "Systems & Surfaces", "available", ["dashboard", "saas", "mobile-app", "landing-page", "marketing", "minimal", "grid"]),
      s("monochromatic-design", "Monochromatic Design", "One hue, infinite depth.", 28, "Systems & Surfaces", "available", ["monochrome", "minimal", "elegant", "luxurious", "portfolio", "editorial"]),
      s("industrial-ui", "Industrial UI", "Machined, utilitarian, built to last.", 29, "Systems & Surfaces", "available", ["technical", "raw", "developer-tool", "dashboard", "high-contrast", "monochrome"]),
      s("terminal-ui", "Terminal-inspired UI", "Green phosphor and plain text.", 30, "Systems & Surfaces", "available", ["developer-tool", "dark-mode", "monochrome", "technical", "minimal", "retro"]),
      s("grayscale-ui", "Grayscale UI", "Black, white and every gray between.", 31, "Systems & Surfaces", "available", ["monochrome", "minimal", "accessible", "print", "editorial", "documentation"]),
    ],
  },
];

export const ALL_STYLES: StyleMeta[] = STYLE_GROUPS.flatMap((g) => g.styles);

export const STYLE_MAP = new Map(ALL_STYLES.map((style) => [style.slug, style]));

export function getStyle(slug: string): StyleMeta | undefined {
  return STYLE_MAP.get(slug);
}
