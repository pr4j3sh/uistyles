import type { StyleContent } from "@/lib/style-content";
import { minimalism } from "@/content/minimalism";
import { flatDesign } from "@/content/flat-design";
import { materialDesign } from "@/content/material-design";

/** Registry of fully-written style contents, keyed by slug. */
export const STYLE_CONTENTS: Record<string, StyleContent> = {
  minimalism,
  "flat-design": flatDesign,
  "material-design": materialDesign,
};
