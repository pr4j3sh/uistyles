export type StyleStatus = "available" | "soon";

export type StyleMeta = {
  slug: string;
  name: string;
  tagline: string;
  index: number;
  category: string;
  status: StyleStatus;
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
): StyleMeta => ({ slug, name, tagline, index, category, status });

export const STYLE_GROUPS: StyleGroup[] = [
  {
    name: "Foundations & Classics",
    styles: [
      s("minimalism", "Minimalism", "Less, but better. Radical restraint.", 1, "Foundations & Classics", "available"),
      s("flat-design", "Flat Design", "Pure shapes, zero decoration.", 2, "Foundations & Classics", "available"),
      s("material-design", "Material Design", "Paper, ink and honest elevation.", 3, "Foundations & Classics", "available"),
      s("swiss-design", "Swiss Design", "Grids, grotesque type, objective clarity.", 4, "Foundations & Classics", "available"),
      s("editorial-design", "Editorial Design", "The magazine as interface.", 5, "Foundations & Classics", "available"),
      s("typography-driven", "Typography-driven UI", "Type is the interface.", 6, "Foundations & Classics", "available"),
    ],
  },
  {
    name: "Soft & Tactile",
    styles: [
      s("neumorphism", "Neumorphism", "Soft extruded plastic surfaces.", 7, "Soft & Tactile"),
      s("skeuomorphism", "Skeuomorphism", "Digital objects mimicking physical ones.", 8, "Soft & Tactile"),
      s("claymorphism", "Claymorphism", "Puffy, playful, 3D-clay surfaces.", 9, "Soft & Tactile"),
      s("organic-natural", "Organic / Natural UI", "Earth tones, soft edges, calm.", 10, "Soft & Tactile"),
      s("liquid-fluid", "Liquid / Fluid UI", "Interfaces in continuous motion.", 11, "Soft & Tactile"),
    ],
  },
  {
    name: "Bold & Expressive",
    styles: [
      s("brutalism", "Brutalism", "Raw concrete energy, zero polish.", 12, "Bold & Expressive"),
      s("neobrutalism", "Neobrutalism", "Brutalism with color and a wink.", 13, "Bold & Expressive"),
      s("memphis-design", "Memphis Design", "Postmodern chaos, confetti geometry.", 14, "Bold & Expressive"),
      s("maximalism", "Maximalism", "More is more. Abundance as aesthetic.", 15, "Bold & Expressive"),
      s("y2k-design", "Y2K Design", "Chrome, aqua and millennium optimism.", 16, "Bold & Expressive"),
    ],
  },
  {
    name: "Light & Atmosphere",
    styles: [
      s("glassmorphism", "Glassmorphism", "Frosted glass over vibrant light.", 17, "Light & Atmosphere"),
      s("aurora-ui", "Aurora UI", "Northern lights as a design language.", 18, "Light & Atmosphere"),
      s("gradient-ui", "Gradient UI", "Color in continuous transition.", 19, "Light & Atmosphere"),
      s("dark-ui", "Dark UI", "Light on dark, engineered for focus.", 20, "Light & Atmosphere"),
      s("light-ui", "Light UI", "Bright, airy, quietly confident.", 21, "Light & Atmosphere"),
    ],
  },
  {
    name: "Retro & Futuristic",
    styles: [
      s("cyberpunk-ui", "Cyberpunk UI", "Neon noir, high tech, low life.", 22, "Retro & Futuristic"),
      s("synthwave-ui", "Synthwave UI", "Outrun sunsets and chrome grids.", 23, "Retro & Futuristic"),
      s("retro-vintage-ui", "Retro / Vintage UI", "Warm nostalgia, analog texture.", 24, "Retro & Futuristic"),
      s("pixel-art-ui", "Pixel Art UI", "8-bit charm, hard pixels only.", 25, "Retro & Futuristic"),
      s("futuristic-ui", "Futuristic UI", "Interfaces from tomorrow, today.", 26, "Retro & Futuristic"),
    ],
  },
  {
    name: "Systems & Surfaces",
    styles: [
      s("bento-grid-design", "Bento Grid Design", "Modular cells, Japanese lunchbox logic.", 27, "Systems & Surfaces"),
      s("monochromatic-design", "Monochromatic Design", "One hue, infinite depth.", 28, "Systems & Surfaces"),
      s("industrial-ui", "Industrial UI", "Machined, utilitarian, built to last.", 29, "Systems & Surfaces"),
      s("terminal-ui", "Terminal-inspired UI", "Green phosphor and honest text.", 30, "Systems & Surfaces"),
    ],
  },
];

export const ALL_STYLES: StyleMeta[] = STYLE_GROUPS.flatMap((g) => g.styles);

export const STYLE_MAP = new Map(ALL_STYLES.map((style) => [style.slug, style]));

export function getStyle(slug: string): StyleMeta | undefined {
  return STYLE_MAP.get(slug);
}
