import type { BlogPost } from "@/lib/blog/types";
import { equipamentoGarimpoAriquemes } from "./equipamento-garimpo-ariquemes";
import { ferramentaProdutorRuralAriquemes } from "./ferramenta-produtor-rural-ariquemes";
import { ferramentasConstrucaoAriquemes } from "./ferramentas-construcao-ariquemes";
import { jardinagemAriquemes } from "./jardinagem-ariquemes";
import { mecanicaAriquemes } from "./mecanica-ariquemes";
import { rocadeiraEletricaOuAGasolina } from "./rocadeira-eletrica-ou-a-gasolina";

/**
 * Todos os posts do blog. Pra adicionar um novo: criar um arquivo em
 * `content/blog/<slug>.ts` exportando um `BlogPost` (ver
 * `rocadeira-eletrica-ou-a-gasolina.ts` como molde) e listar aqui — o
 * `generateStaticParams` de `/blog/[slug]`, o sitemap e a listagem pegam o
 * post automaticamente, sem precisar tocar em outro arquivo.
 */
export const BLOG_POSTS: BlogPost[] = [
  rocadeiraEletricaOuAGasolina,
  equipamentoGarimpoAriquemes,
  ferramentaProdutorRuralAriquemes,
  ferramentasConstrucaoAriquemes,
  mecanicaAriquemes,
  jardinagemAriquemes,
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(category: BlogPost["category"]): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.category === category).sort((a, b) =>
    b.date.localeCompare(a.date),
  );
}

export function getAllBlogPostsSorted(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));
}
