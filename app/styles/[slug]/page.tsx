import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_STYLES, getStyle } from "@/lib/styles";
import { STYLE_CONTENTS } from "@/lib/style-contents";
import { StylePage } from "@/components/StylePage";

export function generateStaticParams() {
  return ALL_STYLES.map((style) => ({ slug: style.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = getStyle(slug);
  if (!meta) return { title: "Not found" };
  return {
    title: meta.name,
    description: `${meta.name}: ${meta.tagline} Learn the basics, palette, typography and core components with copy-ready Tailwind classes.`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = getStyle(slug);
  if (!meta) notFound();

  return <StylePage meta={meta} content={STYLE_CONTENTS[slug]} />;
}
