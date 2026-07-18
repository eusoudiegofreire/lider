import type { Metadata } from "next";

import { CategoryCta } from "@/components/sections/category/CategoryCta";
import { CategoryFaq } from "@/components/sections/category/CategoryFaq";
import { CategoryHero } from "@/components/sections/category/CategoryHero";
import { ProductLineupPlaceholder } from "@/components/sections/category/ProductLineupPlaceholder";
import { getCategoryServiceSchema, getFaqPageSchema, type FaqItem } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Ferramentas Produtor Rural",
  description:
    "Ferramentas e equipamentos para produtor rural na Líder Máquinas e Ferramentas, em Ariquemes-RO. Atendemos num raio de até 150km. Loja física e WhatsApp.",
  alternates: {
    canonical: "/produtor-rural",
  },
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Onde comprar ferramentas para produtor rural em Ariquemes?",
    answer:
      "Na loja física da Líder Máquinas e Ferramentas, na Av. Capitão Sílvio, 3395, Setor 1, Ariquemes - RO, ou pelo WhatsApp.",
  },
  {
    question: "A Líder atende produtores de cidades vizinhas a Ariquemes?",
    answer:
      "Sim — a Líder atende Ariquemes e cidades num raio de até 150km, como Rio Crespo, Cujubim, Monte Negro, Buritis, Machadinho e Jaru.",
  },
  {
    question: "Qual roçadeira é mais indicada para propriedade rural pequena?",
    answer:
      "Essa recomendação depende do catálogo disponível no momento — fale com a loja pra uma indicação certa pro seu uso.",
  },
  {
    question: "A Líder vende peças de reposição para implementos agrícolas?",
    answer: "Catálogo de peças de reposição em confirmação. Fale com a loja pra saber a disponibilidade.",
  },
];

export default function ProdutorRuralPage() {
  const serviceSchema = getCategoryServiceSchema({ name: "Produtor Rural", mode: "local" });
  const faqSchema = getFaqPageSchema(FAQ_ITEMS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <CategoryHero
        badge="Alcance local"
        title="Ferramentas para Produtor Rural em Ariquemes"
        intro="A Líder Máquinas e Ferramentas atende produtores rurais de Ariquemes e região, com ferramentas e equipamentos para uso na propriedade. A loja está em Ariquemes-RO e atende clientes num raio de até 150km, incluindo Rio Crespo, Cujubim, Monte Negro, Buritis, Machadinho e Jaru."
      />

      <ProductLineupPlaceholder />

      <CategoryFaq items={FAQ_ITEMS} />

      <CategoryCta message="Venha conferir as opções disponíveis direto na loja, em Ariquemes-RO." />
    </>
  );
}
