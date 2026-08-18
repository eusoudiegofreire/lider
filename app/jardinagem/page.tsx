import type { Metadata } from "next";

import { CategoryCta } from "@/components/sections/category/CategoryCta";
import { CategoryFaq } from "@/components/sections/category/CategoryFaq";
import { CategoryHero } from "@/components/sections/category/CategoryHero";
import { CategoryProductLineup } from "@/components/sections/category/CategoryProductLineup";
import { NAP } from "@/lib/constants";
import { getCategoryServiceSchema, getFaqPageSchema, type FaqItem } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Equipamentos de Jardinagem em Ariquemes - RO",
  description:
    "Motosserra, cortador de grama e equipamentos de jardinagem na Líder Máquinas e Ferramentas, em Ariquemes-RO. Loja física e atendimento pelo WhatsApp.",
  alternates: {
    canonical: "/jardinagem",
  },
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Onde comprar equipamento de jardinagem em Ariquemes?",
    answer: `Na loja física da Líder Máquinas e Ferramentas, na ${NAP.address.street}, ${NAP.address.locality} - ${NAP.address.region}, ou pelo WhatsApp.`,
  },
  {
    question: "A Líder atende quem mora fora de Ariquemes?",
    answer:
      "Sim — a Líder atende Ariquemes e cidades num raio de até 150km, como Rio Crespo, Cujubim, Monte Negro, Buritis, Machadinho e Jaru.",
  },
  {
    question: "Qual cortador de grama serve pra terreno grande?",
    answer:
      "Depende do tamanho da área e do tipo de terreno — fale com a loja pra uma indicação certa pro seu caso.",
  },
  {
    question: "Vocês vendem motosserra?",
    answer:
      "Sim, temos motosserra Husqvarna disponível — confirme o modelo em estoque com a loja pelo WhatsApp.",
  },
  {
    question: "A Líder faz manutenção ou afiação de corrente de motosserra?",
    answer: "Isso ainda não foi confirmado para o site — pergunte na loja ou pelo WhatsApp.",
  },
  {
    question: "Quais marcas de equipamento de jardinagem a Líder trabalha?",
    answer: "Catálogo de marcas em confirmação. Fale com a loja pra saber as opções disponíveis.",
  },
];

export default function JardinagemPage() {
  const serviceSchema = getCategoryServiceSchema({ name: "Jardinagem", mode: "local" });
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
        title="Equipamentos de Jardinagem em Ariquemes"
        intro="A Líder Máquinas e Ferramentas vende equipamento de jardinagem em Ariquemes-RO — motosserra, cortador de grama e itens pra manter quintal, sítio ou área verde em ordem. A loja fica em Ariquemes e atende clientes num raio de até 150km, incluindo Rio Crespo, Cujubim, Monte Negro, Buritis, Machadinho e Jaru."
      />

      <CategoryProductLineup category="jardinagem" />

      <CategoryFaq items={FAQ_ITEMS} />

      <CategoryCta message="Venha ver o equipamento de jardinagem disponível direto na loja, em Ariquemes-RO." />
    </>
  );
}
