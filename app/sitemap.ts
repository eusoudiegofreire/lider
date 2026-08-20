import type { MetadataRoute } from "next";

import { BLOG_CATEGORIES } from "@/lib/blog/categories";
import { CATEGORIES, SITE_URL } from "@/lib/constants";
import { BLOG_POSTS } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const categoryRoutes: MetadataRoute.Sitemap = CATEGORIES.filter(
    (category) => category.phase === 1,
  ).map((category) => ({
    url: `${SITE_URL}/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const blogCategoryRoutes: MetadataRoute.Sitemap = BLOG_CATEGORIES.map((category) => ({
    url: `${SITE_URL}/blog/tema/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  // Cada post entra dinamicamente — novo artigo em content/blog/ aparece aqui
  // sozinho, não precisa lembrar de atualizar o sitemap na mão.
  const blogPostRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
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
    {
      url: `${SITE_URL}/sobre`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/contato`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...blogCategoryRoutes,
    ...blogPostRoutes,
  ];
}
