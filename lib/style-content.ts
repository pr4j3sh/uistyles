import type { ReactNode } from "react";

export type StyleTheme = {
  /** Solid base color, used for text sitting on an accent fill */
  base: string;
  /** Page background: any CSS background value (color, layered gradients…) */
  background: string;
  /** Cell surface */
  surface: string;
  /** Secondary / sunken surface */
  surface2: string;
  /** Hairline border color */
  line: string;
  /** Primary text */
  text: string;
  /** Muted text */
  muted: string;
  /** Accent, used for the Next-style hover invert */
  accent: string;
  /** Cell corner radius, e.g. "0.5rem" or "0" */
  radius: string;
  /** Optional cell shadow, e.g. "0 20px 40px rgba(0,0,0,.4)" */
  shadow?: string;
  /** Class for the hero name. Defaults to font-serif (italic last word). */
  display?: string;
  /** Hero name font-size, any CSS value. Defaults to clamp(3rem, 11vh, 6.5rem). */
  displaySize?: string;
  /** Italicize the final word of the hero name. Defaults to true. */
  displayItalicLast?: boolean;
};

/** Fallback = uistyles primary UI (used by coming-soon pages). */
export const DEFAULT_THEME: StyleTheme = {
  base: "#0d0d0d",
  background: "#0d0d0d",
  surface: "#101010",
  surface2: "#161616",
  line: "rgba(255, 255, 255, 0.09)",
  text: "#f2f2f0",
  muted: "#8a8a8a",
  accent: "#f2f2f0",
  radius: "0.5rem",
  display: "font-serif",
  displayItalicLast: true,
};

export type ComponentSize = "tall" | "small" | "wide" | "wideShort";

export type StyleComponent = {
  /** Component name, e.g. "Button" */
  name: string;
  /** Short note on how the style treats this component */
  description: string;
  /** Tailwind classes only. Copied verbatim by the user */
  code: string;
  /** Live preview, rendered with the same classes from `code` */
  preview: ReactNode;
  /**
   * `tall` (default) = 1 col × 2 rows · `small` = 1 col × 1 row ·
   * `wide` = 2 cols × 2 rows
   */
  size?: ComponentSize;
};

export type StyleContent = {
  theme: StyleTheme;
  /** One-paragraph definition of the style */
  what: string;
  /** Origin / history, one or two sentences */
  origin: string;
  /** Where this style shines */
  bestFor: string[];
  /** Where to avoid it */
  avoid: string[];
  palette: { name: string; hex: string; role: string }[];
  typography: { role: string; family: string; note: string }[];
  components: StyleComponent[];
  dos: string[];
  donts: string[];
};
