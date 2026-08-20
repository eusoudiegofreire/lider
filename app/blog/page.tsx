import type { Metadata } from "next";

import { BlogListing } from "@/components/sections/blog/BlogListing";
import { getAllBlogPostsSorted } from "@/content/blog";
import { getBreadcrumbListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guias e comparativos sobre garimpo, produtor rural, ferramentas, mecânica e jardinagem — conteúdo direto ao ponto da Líder Máquinas e Ferramentas, em Ariquemes-RO.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const posts = getAllBlogPostsSorted();
  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: "Início", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <BlogListing
        eyebrow="Blog"
        title="Guias e comparativos pra quem trabalha pesado."
        description="Resposta direta pras dúvidas mais comuns de garimpo, produtor rural, ferramentas, mecânica e jardinagem."
        posts={posts}
      />
    </>
  );
}
