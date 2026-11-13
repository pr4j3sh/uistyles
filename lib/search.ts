import { ALL_STYLES, type StyleMeta } from "@/lib/styles";

/**
 * Tiny client-side style finder.
 * Tokenizes the query, expands a few synonyms, and scores styles by
 * tag / name / tagline / category matches. No dependencies, no LLM.
 */

const SYNONYMS: Record<string, string[]> = {
  news: ["editorial", "article", "blog", "magazine"],
  article: ["editorial", "news", "blog"],
  blog: ["editorial", "article", "news"],
  magazine: ["editorial", "news", "print"],
  newspaper: ["news", "editorial"],
  cute: ["playful", "kawaii", "friendly"],
  kawaii: ["cute", "playful"],
  shop: ["e-commerce"],
  store: ["e-commerce"],
  ecommerce: ["e-commerce"],
  docs: ["documentation"],
  finance: ["fintech"],
  money: ["fintech"],
  dark: ["dark-mode"],
  light: ["light-mode"],
  game: ["gaming"],
  retro: ["nostalgic"],
  vintage: ["nostalgic"],
  app: ["mobile-app"],
  phone: ["mobile-app"],
  website: ["landing-page"],
  site: ["landing-page"],
  writing: ["blog", "editorial"],
  children: ["kids"],
  soft: ["neumorphism", "cozy", "calm"],
};

function tokenize(query: string): string[] {
  return query
    .toLowerCase()
    .split(/[^a-z0-9-]+/)
    .map((t) => t.trim())
    .filter(Boolean);
}

function expand(tokens: string[]): string[] {
  const out = new Set(tokens);
  for (const token of tokens) {
    for (const syn of SYNONYMS[token] ?? []) out.add(syn);
  }
  return [...out];
}

export type StyleMatch = { style: StyleMeta; score: number };

/** Rank styles against a free-text query. Returns score > 0, best first. */
export function searchStyles(query: string): StyleMatch[] {
  const raw = tokenize(query);
  if (raw.length === 0) return [];

  const direct = new Set(raw);
  const tokens = expand(raw);

  const matches: StyleMatch[] = [];
  for (const style of ALL_STYLES) {
    let score = 0;
    const tagString = style.tags.join(" ");
    const name = style.name.toLowerCase();
    const tagline = style.tagline.toLowerCase();
    const category = style.category.toLowerCase();

    for (const token of tokens) {
      const isDirect = direct.has(token);
      // exact tag hit
      if (style.tags.includes(token)) {
        score += isDirect ? 3 : 2;
        continue;
      }
      // partial tag hit, only for reasonably long tokens to avoid
      // false positives like "app" ⊂ "landing-page"
      if (token.length >= 4 && tagString.includes(token)) {
        score += 1;
        continue;
      }
      if (name.includes(token)) score += isDirect ? 2 : 1;
      else if (tagline.includes(token)) score += 1;
      else if (category.includes(token)) score += 1;
    }

    if (score > 0) matches.push({ style, score });
  }

  return matches.sort((a, b) => b.score - a.score || a.style.index - b.style.index);
}
