import type { Metadata } from "next";

import { Button } from "@/components/ui/Button";
import { ProductCategorySection } from "@/components/sections/produtos/ProductCategorySection";
import { BASE_OPEN_GRAPH, getWhatsappHref } from "@/lib/constants";
import { PRODUCTS, PRODUCT_CATEGORY_ORDER } from "@/lib/products";
import { getProductListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Produtos",
  description:
    "Amostra de produtos da Líder Máquinas e Ferramentas em Ariquemes-RO: garimpo, produtor rural, ferramentas, mecânica, pesca, jardinagem e veterinário. Estoque completo na loja física ou pelo WhatsApp.",
  alternates: {
    canonical: "/produtos",
  },
  openGraph: {
    ...BASE_OPEN_GRAPH,
    url: "/produtos",
  },
};

/**
 * Vitrine — AMOSTRA de produtos, não catálogo completo (ver `lib/products.ts`
 * pra contexto de por que essa distinção importa: não temos o catálogo real
 * digitalizado, e fingir que essa lista é exaustiva seria enganoso pro
 * cliente que chega buscando algo específico que não está aqui).
 */
export default function ProdutosPage() {
  const categoriesWithProducts = PRODUCT_CATEGORY_ORDER.map((category) => ({
    ...category,
    products: PRODUCTS.filter((product) => product.category === category.slug),
  })).filter((category) => category.products.length > 0);

  const schema = getProductListSchema(PRODUCTS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="border-b border-divider bg-background py-[72px] md:py-[100px]">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-brand">
            Alguns dos nossos produtos
          </p>
          <h1 className="mt-3 max-w-2xl text-[clamp(2.25rem,5vw,3.5rem)] font-display font-bold leading-[1.05] tracking-[-0.03em] text-foreground">
            Uma amostra do que você encontra na loja.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Essa página mostra só uma parte do que a Líder vende — não é o catálogo completo.
            O estoque de verdade é bem maior e muda toda semana. Pra ver o que tem disponível
            agora, ou pra achar algo que não está aqui, é só chamar no WhatsApp ou passar na
            loja.
          </p>
          <div className="mt-8">
            <Button href={getWhatsappHref("Olá! Vim pelo site e quero saber o que vocês têm em estoque.")}>
              Chamar no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {categoriesWithProducts.map((category) => (
        <ProductCategorySection
          key={category.slug}
          title={category.label}
          products={category.products}
        />
      ))}

      <section className="border-t border-divider bg-card py-[72px] md:py-[100px]">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-foreground sm:text-3xl">
            Não achou o que precisa?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Essa vitrine é só uma amostra. Manda a foto da peça ou o nome do que você procura
            no WhatsApp — a gente confere o estoque na hora.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href={getWhatsappHref("Olá! Vim pelo site e queria saber se vocês têm um produto específico.")}>
              Chamar no WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
