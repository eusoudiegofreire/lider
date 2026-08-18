/**
 * Vitrine de produtos (`/produtos`) — uma AMOSTRA do que a loja vende, não o
 * catálogo completo (não existe catálogo completo digitalizado ainda). Cada
 * item usa uma foto real fornecida pelo cliente (`public/produtos/`, fundo
 * branco, fotografia de produto). Categorias reaproveitam os mesmos slugs de
 * `FRENTES_DE_TRABALHO` (`lib/constants.ts`) — um produto entra em só uma
 * categoria, a mais óbvia pro item.
 *
 * `abrasivos` não aparece aqui: nenhuma foto da leva recebida (2026-08-18,
 * pasta "Imagens Fundo Branco") é de disco/lixa/rebolo. Quando chegar foto
 * de abrasivo, adicionar como uma categoria normal — a home lista o
 * `PRODUCT_CATEGORY_ORDER` completo, mas a página só renderiza categorias
 * com pelo menos 1 produto.
 */

export type ProductCategorySlug =
  | "garimpo"
  | "produtor-rural"
  | "ferramentas"
  | "mecanica"
  | "pesca"
  | "jardinagem"
  | "veterinario"
  | "abrasivos";

export type Product = {
  /** Nome do arquivo em `public/produtos/`, sem o caminho. */
  file: string;
  name: string;
  category: ProductCategorySlug;
};

/** Ordem de exibição das categorias na vitrine (segue a mesma ordem de `FRENTES_DE_TRABALHO`). */
export const PRODUCT_CATEGORY_ORDER: { slug: ProductCategorySlug; label: string }[] = [
  { slug: "garimpo", label: "Garimpo" },
  { slug: "produtor-rural", label: "Produtor Rural" },
  { slug: "ferramentas", label: "Ferramentas e Construção" },
  { slug: "mecanica", label: "Mecânica" },
  { slug: "abrasivos", label: "Abrasivos" },
  { slug: "pesca", label: "Pesca" },
  { slug: "jardinagem", label: "Jardinagem" },
  { slug: "veterinario", label: "Veterinário" },
];

export const PRODUCTS: Product[] = [
  // Garimpo
  {
    file: "bomba-industrial-azul-fundo-branco-lider-maquinas-ariquemes.jpg",
    name: "Bomba Industrial Azul",
    category: "garimpo",
  },
  {
    file: "bomba-industrial-cinza-fundo-branco-lider-maquinas-ariquemes.jpg",
    name: "Bomba Industrial Cinza",
    category: "garimpo",
  },

  // Produtor Rural
  {
    file: "motocultivador-branco-fundo-branco-lider-maquinas-ariquemes.jpg",
    name: "Motocultivador",
    category: "produtor-rural",
  },
  {
    file: "capa-de-chuva-amarela-fundo-branco-lider-maquinas-ariquemes.jpg",
    name: "Capa de Chuva",
    category: "produtor-rural",
  },
  {
    file: "motor-de-popa-toyama-fundo-branco-lider-maquinas-ariquemes.jpg",
    name: "Motor de Popa Toyama",
    category: "produtor-rural",
  },
  {
    file: "chapeus-de-palha-fundo-branco-lider-maquinas-ariquemes.jpg",
    name: "Chapéu de Palha",
    category: "produtor-rural",
  },
  {
    file: "prensa-para-queijo-artesanal-fundo-branco-lider-maquinas-ariquemes.jpg",
    name: "Prensa para Queijo Artesanal",
    category: "produtor-rural",
  },

  // Ferramentas e Construção
  {
    file: "aspirador-po-liquidos-fundo-branco-lider-maquinas-ariquemes.jpg",
    name: "Aspirador de Pó e Líquidos",
    category: "ferramentas",
  },
  {
    file: "carretinha-utilitaria-fundo-branco-lider-maquinas-ariquemes.jpg",
    name: "Carretinha Utilitária",
    category: "ferramentas",
  },
  {
    file: "carrinho-de-mao-tramontina-fundo-branco-lider-maquinas-ariquemes.jpg",
    name: "Carrinho de Mão Tramontina",
    category: "ferramentas",
  },
  {
    file: "esmeril-de-bancada-fundo-branco-lider-maquinas-ariquemes.jpg",
    name: "Esmeril de Bancada",
    category: "ferramentas",
  },
  {
    file: "jogo-de-chaves-isoladas-gedore-fundo-branco-lider-maquinas-ariquemes.jpg",
    name: "Jogo de Chaves Isoladas Gedore",
    category: "ferramentas",
  },
  {
    file: "kit-completo-de-ferramentas-fundo-branco-lider-maquinas-ariquemes.jpg",
    name: "Kit Completo de Ferramentas",
    category: "ferramentas",
  },
  {
    file: "lanterna-recarregavel-worker-fundo-branco-lider-maquinas-ariquemes.jpg",
    name: "Lanterna Recarregável",
    category: "ferramentas",
  },
  {
    file: "lavadora-industrial-media-pressao-fundo-branco-lider-maquinas-ariquemes.jpg",
    name: "Lavadora Industrial de Média Pressão",
    category: "ferramentas",
  },
  {
    file: "luminaria-portatil-emtop-fundo-branco-lider-maquinas-ariquemes.jpg",
    name: "Luminária Portátil",
    category: "ferramentas",
  },

  // Mecânica
  {
    file: "bateria-moura-fundo-branco-lider-maquinas-ariquemes.jpg",
    name: "Bateria Moura",
    category: "mecanica",
  },
  {
    file: "desengripante-spray-brasil-fundo-branco-lider-maquinas-ariquemes.jpg",
    name: "Desengripante Spray",
    category: "mecanica",
  },
  {
    file: "silicone-spray-worker-fundo-branco-lider-maquinas-ariquemes.jpg",
    name: "Silicone Spray",
    category: "mecanica",
  },

  // Pesca
  {
    file: "cadeiras-camping-fundo-branco-lider-maquinas-ariquemes.jpg",
    name: "Cadeira de Camping",
    category: "pesca",
  },
  {
    file: "varas-de-pesca-com-molinetes-fundo-branco-lider-maquinas-ariquemes.jpg",
    name: "Vara de Pesca com Molinete",
    category: "pesca",
  },

  // Jardinagem
  {
    file: "cortador-de-grama-fundo-branco-lider-maquinas-ariquemes.jpg",
    name: "Cortador de Grama",
    category: "jardinagem",
  },
  {
    file: "motosserra-husqvarna-fundo-branco-lider-maquinas-ariquemes.jpg",
    name: "Motosserra Husqvarna",
    category: "jardinagem",
  },

  // Veterinário
  {
    file: "izoot-b12-fundo-branco-lider-maquinas-ariquemes.jpg",
    name: "Izoot B12",
    category: "veterinario",
  },
  {
    file: "umbicura-produto-veterinario-fundo-branco-lider-maquinas-ariquemes.jpg",
    name: "Umbicura",
    category: "veterinario",
  },
];

export function getProductImagePath(file: string): string {
  return `/produtos/${file}`;
}

export function getProductAlt(name: string): string {
  return `${name} à venda na Líder Máquinas em Ariquemes-RO`;
}

export function getProductWhatsappMessage(name: string): string {
  return `Olá! Vim pelo site e quero saber sobre o produto: ${name}.`;
}
