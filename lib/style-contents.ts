import type { StyleContent } from "@/lib/style-content";
import { ALL_STYLES, STYLE_MAP } from "@/lib/styles";
import { minimalism } from "@/content/minimalism";
import { flatDesign } from "@/content/flat-design";
import { materialDesign } from "@/content/material-design";
import { swissDesign } from "@/content/swiss-design";
import { editorialDesign } from "@/content/editorial-design";
import { typographyDriven } from "@/content/typography-driven";
import { neumorphism } from "@/content/neumorphism";
import { skeuomorphism } from "@/content/skeuomorphism";
import { claymorphism } from "@/content/claymorphism";
import { organicNatural } from "@/content/organic-natural";
import { liquidFluid } from "@/content/liquid-fluid";
import { brutalism } from "@/content/brutalism";
import { neobrutalism } from "@/content/neobrutalism";
import { memphisDesign } from "@/content/memphis-design";
import { maximalism } from "@/content/maximalism";
import { y2kDesign } from "@/content/y2k-design";
import { glassmorphism } from "@/content/glassmorphism";
import { auroraUi } from "@/content/aurora-ui";
import { gradientUi } from "@/content/gradient-ui";
import { darkUi } from "@/content/dark-ui";
import { lightUi } from "@/content/light-ui";
import { cyberpunkUi } from "@/content/cyberpunk-ui";
import { synthwaveUi } from "@/content/synthwave-ui";
import { retroVintageUi } from "@/content/retro-vintage-ui";
import { pixelArtUi } from "@/content/pixel-art-ui";
import { futuristicUi } from "@/content/futuristic-ui";
import { bentoGridDesign } from "@/content/bento-grid-design";
import { monochromaticDesign } from "@/content/monochromatic-design";
import { industrialUi } from "@/content/industrial-ui";
import { terminalUi } from "@/content/terminal-ui";
import { grayscaleUi } from "@/content/grayscale-ui";

/** Registry of fully-written style contents, keyed by slug. */
export const STYLE_CONTENTS: Record<string, StyleContent> = {
  minimalism,
  "flat-design": flatDesign,
  "material-design": materialDesign,
  "swiss-design": swissDesign,
  "editorial-design": editorialDesign,
  "typography-driven": typographyDriven,
  "neumorphism": neumorphism,
  "skeuomorphism": skeuomorphism,
  "claymorphism": claymorphism,
  "organic-natural": organicNatural,
  "liquid-fluid": liquidFluid,
  "brutalism": brutalism,
  "neobrutalism": neobrutalism,
  "memphis-design": memphisDesign,
  "maximalism": maximalism,
  "y2k-design": y2kDesign,
  "glassmorphism": glassmorphism,
  "aurora-ui": auroraUi,
  "gradient-ui": gradientUi,
  "dark-ui": darkUi,
  "light-ui": lightUi,
  "cyberpunk-ui": cyberpunkUi,
  "synthwave-ui": synthwaveUi,
  "retro-vintage-ui": retroVintageUi,
  "pixel-art-ui": pixelArtUi,
  "futuristic-ui": futuristicUi,
  "bento-grid-design": bentoGridDesign,
  "monochromatic-design": monochromaticDesign,
  "industrial-ui": industrialUi,
  "terminal-ui": terminalUi,
  "grayscale-ui": grayscaleUi,
};

// ── Registry ↔ catalog consistency ─────────────────────────────────
// Fail the build loudly when a style is missing its content, or a
// registry entry points at a slug that doesn't exist in the catalog.
const missing = ALL_STYLES.filter((style) => !(style.slug in STYLE_CONTENTS)).map((style) => style.slug);
const unknown = Object.keys(STYLE_CONTENTS).filter((slug) => !STYLE_MAP.has(slug));
if (missing.length > 0 || unknown.length > 0) {
  throw new Error(
    `style-contents registry mismatch. Missing content for: [${missing.join(", ")}]. ` +
      `Unknown registry slugs: [${unknown.join(", ")}].`,
  );
}
