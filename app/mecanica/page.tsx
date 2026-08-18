import type { Metadata } from "next";

import { CategoryCta } from "@/components/sections/category/CategoryCta";
import { CategoryFaq } from "@/components/sections/category/CategoryFaq";
import { CategoryHero } from "@/components/sections/category/CategoryHero";
import { CategoryProductLineup } from "@/components/sections/category/CategoryProductLineup";
import { NAP } from "@/lib/constants";
import { getCategoryServiceSchema, getFaqPageSchema, type FaqItem } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Mecânica em Ariquemes - RO",
  description:
    "Peças, ferramentas e produtos de manutenção pra mecânica na Líder Máquinas e Ferramentas, em Ariquemes-RO. Loja física e atendimento pelo WhatsApp.",
  alternates: {
    canonical: "/mecanica",
  },
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Onde encontrar peças e ferramentas de mecânica em Ariquemes?",
    answer: `Na loja física da Líder Máquinas e Ferramentas, na ${NAP.address.street}, ${NAP.address.locality} - ${NAP.address.region}, ou pelo WhatsApp.`,
  },
  {
    question: "A Líder atende oficinas e mecânicos de cidades vizinhas a Ariquemes?",
    answer:
      "Sim — a Líder atende Ariquemes e cidades num raio de até 150km, como Rio Crespo, Cujubim, Monte Negro, Buritis, Machadinho e Jaru.",
  },
  {
    question: "Vocês têm peça pra qual tipo de veículo?",
    answer:
      "Trabalhamos com itens de uso geral pra veículos leves e máquinas. Pra saber se temos a peça certa pro seu veículo, o mais rápido é confirmar direto com a loja pelo WhatsApp.",
  },
  {
    question: "A Líder vende bateria automotiva?",
    answer:
      "Sim, temos baterias Moura disponíveis — fale com a loja pra saber os modelos em estoque no momento.",
  },
  {
    question: "Quais marcas de ferramentas de oficina a Líder trabalha?",
    answer: "Catálogo de marcas em confirmação. Fale com a loja pra saber as opções disponíveis.",
  },
  {
    question: "A Líder faz serviço de mecânica ou só vende peças e produtos?",
    answer: "Isso ainda não foi confirmado para o site — pergunte na loja ou pelo WhatsApp.",
  },
];

export default function MecanicaPage() {
  const serviceSchema = getCategoryServiceSchema({ name: "Mecânica", mode: "local" });
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
        title="Peças e Ferramentas de Mecânica em Ariquemes"
        intro="A Líder Máquinas e Ferramentas vende peças, ferramentas e produtos de manutenção pra mecânica em Ariquemes-RO, atendendo quem cuida de veículo, máquina ou equipamento no dia a dia. A loja fica em Ariquemes e atende clientes num raio de até 150km, incluindo Rio Crespo, Cujubim, Monte Negro, Buritis, Machadinho e Jaru."
      />

      <CategoryProductLineup category="mecanica" />

      <CategoryFaq items={FAQ_ITEMS} />

      <CategoryCta message="Venha ver as peças e ferramentas disponíveis direto na loja, em Ariquemes-RO." />
    </>
  );
}
