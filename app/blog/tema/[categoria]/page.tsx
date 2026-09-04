import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogListing } from "@/components/sections/blog/BlogListing";
import { BLOG_CATEGORIES, getBlogCategoryLabel } from "@/lib/blog/categories";
import type { BlogCategorySlug } from "@/lib/blog/types";
import { getBlogPostsByCategory } from "@/content/blog";
import { BASE_OPEN_GRAPH } from "@/lib/constants";
import { getBreadcrumbListSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ categoria: string }>;
};

function isBlogCategory(value: string): value is BlogCategorySlug {
  return BLOG_CATEGORIES.some((category) => category.slug === value);
}

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((category) => ({ categoria: category.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { categoria } = await params;
  if (!isBlogCategory(categoria)) return {};

  const label = getBlogCategoryLabel(categoria);
  return {
    title: `Blog — ${label}`,
    description: `Guias e comparativos sobre ${label.toLowerCase()} — conteúdo direto ao ponto da Líder Máquinas e Ferramentas, em Ariquemes-RO.`,
    alternates: {
      canonical: `/blog/tema/${categoria}`,
    },
    openGraph: {
      ...BASE_OPEN_GRAPH,
      url: `/blog/tema/${categoria}`,
    },
  };
}

export default async function BlogCategoriaPage({ params }: PageProps) {
  const { categoria } = await params;
  if (!isBlogCategory(categoria)) notFound();

  const label = getBlogCategoryLabel(categoria);
  const posts = getBlogPostsByCategory(categoria);
  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: "Início", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: label, path: `/blog/tema/${categoria}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <BlogListing
        eyebrow="Blog"
        title={`Artigos sobre ${label}.`}
        description={`Guias e comparativos de ${label.toLowerCase()} — resposta direta pra dúvida real.`}
        posts={posts}
        activeCategory={categoria}
      />
    </>
  );
}
