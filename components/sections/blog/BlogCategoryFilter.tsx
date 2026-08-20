import Link from "next/link";
import { clsx } from "clsx";

import { BLOG_CATEGORIES } from "@/lib/blog/categories";
import type { BlogCategorySlug } from "@/lib/blog/types";

type BlogCategoryFilterProps = {
  /** `undefined` = "Todos" (índice principal `/blog`) está ativo. */
  active?: BlogCategorySlug;
};

const pillBase =
  "rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-[0.08em] transition-colors";

/**
 * Filtro por tema — são links reais pra `/blog` ou `/blog/tema/[categoria]`,
 * não um toggle client-side: cada filtro é uma URL própria, indexável e
 * compartilhável (melhor pra SEO que um estado de UI que some ao recarregar).
 */
export function BlogCategoryFilter({ active }: BlogCategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href="/blog"
        className={clsx(
          pillBase,
          active === undefined
            ? "border-brand bg-brand text-paper"
            : "border-border text-foreground hover:border-brand hover:text-brand",
        )}
      >
        Todos
      </Link>
      {BLOG_CATEGORIES.map((category) => (
        <Link
          key={category.slug}
          href={`/blog/tema/${category.slug}`}
          className={clsx(
            pillBase,
            active === category.slug
              ? "border-brand bg-brand text-paper"
              : "border-border text-foreground hover:border-brand hover:text-brand",
          )}
        >
          {category.label}
        </Link>
      ))}
    </div>
  );
}
