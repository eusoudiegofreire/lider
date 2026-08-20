/**
 * Blog (Fase 4 do briefing, ver `_references/pages/blog.md`) — conteúdo Q&A
 * answer-first: H1 é a pergunta/tema de busca real, cada H2 é outra pergunta
 * real, e a primeira frase depois do H2 é a resposta direta (o que Google/IA
 * puxam pra responder) — contexto vem só depois. Modelado como dado
 * estruturado (não markdown/MDX livre) de propósito: o formato tipado
 * OBRIGA a resposta direta a existir como campo próprio, em vez de confiar
 * que quem escrever o próximo artigo lembre da regra no meio de um parágrafo
 * corrido.
 */

export type BlogCategorySlug = "garimpo" | "produtor-rural" | "ferramentas" | "mecanica" | "jardinagem";

export type BlogTable = {
  headers: string[];
  rows: string[][];
};

export type BlogSection = {
  /** H2 — pergunta real que a pessoa digitaria no Google. */
  question: string;
  /** Primeira frase depois do H2 — a resposta direta (answer-first). */
  answer: string;
  /** Parágrafo(s) de contexto, depois da resposta direta. Um item = um parágrafo. */
  context?: string[];
  /** Tabela comparativa, quando o H2 for uma comparação (ver blog.md). */
  table?: BlogTable;
};

export type BlogPost = {
  slug: string;
  /** H1 — pergunta ou tema de busca real, não título de propaganda. */
  title: string;
  category: BlogCategorySlug;
  /** ISO (YYYY-MM-DD). */
  date: string;
  /** Resumo pro card de listagem e pra meta description — 1-2 frases, sem enrolação. */
  excerpt: string;
  /** Resposta direta do H1 em si, antes do primeiro H2. */
  intro: string;
  sections: BlogSection[];
  /**
   * Frase de fechamento com a menção à Líder — sutil, no fim, nunca no meio
   * empurrando venda (regra explícita do briefing). Ex: "na Líder, em
   * Ariquemes, trabalhamos com essa linha e ajudamos você a escolher."
   */
  closing: string;
};
