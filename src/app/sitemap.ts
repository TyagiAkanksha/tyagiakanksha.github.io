import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { getAllProjects } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects().map((p) => ({
    url: `${site.url}/projects/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    ...projects,
  ];
}
