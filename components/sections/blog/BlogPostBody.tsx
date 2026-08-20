import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { getBlogCategoryLabel } from "@/lib/blog/categories";
import { formatBlogDate } from "@/lib/blog/format";
import type { BlogPost } from "@/lib/blog/types";

type BlogPostBodyProps = {
  post: BlogPost;
};

/**
 * Corpo do artigo — cada seção segue a regra answer-first do briefing: H2
 * (pergunta real) direto seguido da resposta (`answer`, em destaque visual —
 * é a frase que Google/IA puxam), contexto depois, tabela quando for
 * comparação. Largura de leitura contida em `max-w-[65ch]` (DESIGN.md).
 */
export function BlogPostBody({ post }: BlogPostBodyProps) {
  const categoryHref = `/${post.category}`;
  const categoryLabel = getBlogCategoryLabel(post.category);

  return (
    <article className="mx-auto max-w-[65ch] px-6 py-[72px] md:py-[100px]">
      <nav aria-label="Breadcrumb" className="font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground">
        <Link href="/blog" className="hover:text-brand">
          Blog
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/blog/tema/${post.category}`} className="hover:text-brand">
          {categoryLabel}
        </Link>
      </nav>

      <p className="mt-4 font-mono text-xs uppercase tracking-[0.08em] text-brand">{categoryLabel}</p>
      <h1 className="mt-3 text-[clamp(2rem,4.5vw,3rem)] font-display font-bold leading-[1.08] tracking-[-0.02em] text-foreground">
        {post.title}
      </h1>
      <time dateTime={post.date} className="mt-3 block text-sm text-muted-foreground">
        {formatBlogDate(post.date)}
      </time>

      <p className="mt-8 text-lg text-foreground">{post.intro}</p>

      <div className="mt-10 space-y-10">
        {post.sections.map((section) => (
          <div key={section.question}>
            <h2 className="text-2xl font-display font-semibold tracking-[-0.01em] text-foreground">
              {section.question}
            </h2>
            <p className="mt-3 text-foreground">{section.answer}</p>
            {section.context?.map((paragraph, index) => (
              <p key={index} className="mt-3 text-muted-foreground">
                {paragraph}
              </p>
            ))}
            {section.table ? (
              <div className="mt-4 overflow-x-auto rounded-lg border border-divider">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-card">
                      {section.table.headers.map((header) => (
                        <th
                          key={header}
                          className="border-b border-divider px-4 py-3 text-left font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className={rowIndex % 2 === 1 ? "bg-card/50" : undefined}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="border-b border-divider px-4 py-3 text-foreground last:border-b-0">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-12 border-t border-divider pt-8">
        <p className="text-foreground">{post.closing}</p>
        <div className="mt-6">
          <Button href={categoryHref} variant="secondary">
            Ver {categoryLabel} na Líder
          </Button>
        </div>
      </div>
    </article>
  );
}
