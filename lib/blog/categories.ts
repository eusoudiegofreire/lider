import { CATEGORIES } from "@/lib/constants";
import type { BlogCategorySlug } from "./types";

/**
 * As 5 categorias que o blog cobre (nem todas as 8 frentes de trabalho têm
 * conteúdo editorial ainda — Abrasivos, Pesca e Veterinário ficam de fora
 * por enquanto). Labels vêm de `CATEGORIES` (fonte única), não duplicadas
 * aqui, pra não arriscar o texto divergir do resto do site.
 */
const BLOG_CATEGORY_SLUGS: BlogCategorySlug[] = [
  "garimpo",
  "produtor-rural",
  "ferramentas",
  "mecanica",
  "jardinagem",
];

export const BLOG_CATEGORIES = BLOG_CATEGORY_SLUGS.map((slug) => {
  const category = CATEGORIES.find((c) => c.slug === slug);
  if (!category) {
    throw new Error(`Categoria de blog "${slug}" não existe em CATEGORIES`);
  }
  return { slug, label: category.label };
});

export function getBlogCategoryLabel(slug: BlogCategorySlug): string {
  return BLOG_CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
}
