import type { MetadataRoute } from "next";

import { CATEGORIES, SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const categoryRoutes: MetadataRoute.Sitemap = CATEGORIES.filter(
    (category) => category.phase === 1,
  ).map((category) => ({
    url: `${SITE_URL}/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...categoryRoutes,
    {
      url: `${SITE_URL}/produtos`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];
}
