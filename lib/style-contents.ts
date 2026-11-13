import type { StyleContent } from "@/lib/style-content";
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
};
