import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/sections/produtos/ProductCard";
import { PRODUCTS, type ProductCategorySlug } from "@/lib/products";

type CategoryProductLineupProps = {
  category: ProductCategorySlug;
};

/**
 * Vitrine de produtos de uma página de categoria — reaproveita o mesmo
 * `ProductCard` da vitrine geral (`/produtos`), filtrado pra essa categoria.
 * Se a categoria ainda não tem foto real (ex: Abrasivos), cai no mesmo
 * placeholder "[CONFIRMAR COM O CLIENTE]" que `ProductLineupPlaceholder` já
 * usava, em vez de inventar produto.
 */
export function CategoryProductLineup({ category }: CategoryProductLineupProps) {
  const products = PRODUCTS.filter((product) => product.category === category);

  if (products.length === 0) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Vitrine de produtos"
          title="Linhas desta categoria"
          description="Catálogo em confirmação com o cliente."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Card className="border-dashed">
            <p className="font-mono text-xs uppercase tracking-widest text-brand">
              [CONFIRMAR COM O CLIENTE]
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Linha de produto a confirmar.</p>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        eyebrow="Vitrine de produtos"
        title="Alguns produtos desta categoria"
        description="Amostra do que temos disponível — o estoque completo é maior e muda toda semana. Fale com a loja pra ver mais opções."
      />
      <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.file} product={product} />
        ))}
      </div>
    </section>
  );
}
