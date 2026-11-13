import type { MetadataRoute } from "next";
import { ALL_STYLES } from "@/lib/styles";

export const dynamic = "force-static";

const siteUrl = "https://uistyles.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, priority: 1 },
    ...ALL_STYLES.map((style) => ({
      url: `${siteUrl}/styles/${style.slug}`,
      priority: 0.8,
    })),
  ];
}
