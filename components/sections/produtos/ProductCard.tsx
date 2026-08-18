import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getWhatsappHref } from "@/lib/constants";
import {
  getProductAlt,
  getProductImagePath,
  getProductWhatsappMessage,
  type Product,
} from "@/lib/products";

type ProductCardProps = {
  product: Product;
};

/**
 * Card de produto da vitrine. Foto em `object-contain` (não `cover`) porque
 * os produtos têm proporções muito diferentes entre si (motosserra é larga,
 * vara de pesca é longa e fina) — cortar pra preencher um quadrado
 * distorceria ou cortaria produto. A caixa da foto é `bg-white` sólido
 * (bate com o fundo branco já embutido na própria foto) dentro do `Card`
 * (`bg-card`, um cinza-claro/`branco-frio`) — é essa borda sutil entre os
 * dois brancos que evita o retângulo branco "colado" contra o fundo da
 * página (ver DESIGN.md).
 */
export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card>
      <div className="relative aspect-square overflow-hidden rounded-md bg-white">
        <Image
          src={getProductImagePath(product.file)}
          alt={getProductAlt(product.name)}
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
          className="object-contain p-4"
        />
      </div>
      <p className="mt-4 font-display text-base font-semibold text-card-foreground">
        {product.name}
      </p>
      <div className="mt-3">
        <Button
          href={getWhatsappHref(getProductWhatsappMessage(product.name))}
          variant="secondary"
          size="sm"
          className="w-full"
        >
          Consultar
        </Button>
      </div>
    </Card>
  );
}
