import type { Metadata } from "next";

import { CategoryCta } from "@/components/sections/category/CategoryCta";
import { CategoryFaq } from "@/components/sections/category/CategoryFaq";
import { CategoryHero } from "@/components/sections/category/CategoryHero";
import { ProductLineupPlaceholder } from "@/components/sections/category/ProductLineupPlaceholder";
import { BASE_OPEN_GRAPH, NAP } from "@/lib/constants";
import { getCategoryServiceSchema, getFaqPageSchema, type FaqItem } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Ferramentas em Ariquemes - RO",
  description:
    "Ferramentas para casa e obra na Líder Máquinas e Ferramentas, loja física em Ariquemes-RO com atendimento também pelo WhatsApp.",
  alternates: {
    canonical: "/ferramentas",
  },
  openGraph: {
    ...BASE_OPEN_GRAPH,
    url: "/ferramentas",
  },
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Onde comprar ferramentas em Ariquemes?",
    answer: `Na loja física da Líder Máquinas e Ferramentas, na ${NAP.address.street}, ${NAP.address.locality} - ${NAP.address.region}, ou pelo WhatsApp.`,
  },
  {
    question: "A Líder vende ferramentas elétricas e manuais?",
    answer:
      "A linha de ferramentas da Líder está com o catálogo em confirmação — fale com a loja pelo WhatsApp pra saber a disponibilidade de itens elétricos e manuais no momento.",
  },
  {
    question: "Quais marcas de ferramentas a Líder trabalha?",
    answer: "Catálogo de marcas em confirmação. Entre em contato pra saber as opções disponíveis.",
  },
  {
    question: "A Líder faz manutenção ou assistência de ferramentas elétricas?",
    answer:
      "Esse serviço ainda não foi confirmado para o site — pergunte na loja ou pelo WhatsApp.",
  },
];

export default function FerramentasPage() {
  const serviceSchema = getCategoryServiceSchema({ name: "Ferramentas", mode: "local" });
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
        title="Ferramentas para Casa e Obra em Ariquemes"
        intro="A Líder Máquinas e Ferramentas vende ferramentas para uso doméstico e para obra em Ariquemes-RO, atendendo quem precisa equipar a casa, a oficina ou o canteiro de obra. A loja fica em Ariquemes e atende toda a região num raio de até 150km."
      />

      <ProductLineupPlaceholder />

      <CategoryFaq items={FAQ_ITEMS} />

      <CategoryCta message="Você pode ver as ferramentas disponíveis direto na loja, em Ariquemes-RO." />
    </>
  );
}
