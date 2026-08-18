import type { Product } from "@/lib/products";
import { ProductCard } from "./ProductCard";

type ProductCategorySectionProps = {
  title: string;
  products: Product[];
};

export function ProductCategorySection({ title, products }: ProductCategorySectionProps) {
  return (
    <section className="border-t border-divider py-[72px] first:border-t-0 md:py-[80px]">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-foreground sm:text-3xl">
          {title}
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.file} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
