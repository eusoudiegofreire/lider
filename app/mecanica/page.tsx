import type { Metadata } from "next";

import { CategoryCta } from "@/components/sections/category/CategoryCta";
import { CategoryFaq } from "@/components/sections/category/CategoryFaq";
import { CategoryHero } from "@/components/sections/category/CategoryHero";
import { NAP, getLocalServedCitiesLine } from "@/lib/constants";
import { getCategoryServiceSchema, getFaqPageSchema, type FaqItem } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Assistência Técnica em Ariquemes - RO",
  description:
    "Assistência técnica de motosserra, roçadeira, atomizador e ferramenta elétrica de trabalho na Líder Máquinas e Ferramentas, em Ariquemes-RO. Loja física e atendimento pelo WhatsApp.",
  alternates: {
    canonical: "/mecanica",
  },
};

/**
 * Corrigido 2026-08-21 conforme áudio do cliente (fonte de verdade:
 * content/blog/mecanica-ariquemes.ts): "Mecânica" na Líder é assistência
 * técnica de motor 2 tempos (roçadeira, motosserra, atomizador) e ferramenta
 * elétrica de trabalho — NÃO peça automotiva/bateria de carro. A versão
 * anterior desta página (FAQ sobre "peça pra veículo"/"bateria Moura") estava
 * errada e foi removida por completo, não só editada.
 */
const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Onde fazer assistência técnica de motosserra e ferramenta elétrica em Ariquemes?",
    answer: `Na loja física da Líder Máquinas e Ferramentas, na ${NAP.address.street}, ${NAP.address.locality} - ${NAP.address.region}, ou pelo WhatsApp.`,
  },
  {
    question: "A Líder atende clientes de cidades vizinhas a Ariquemes?",
    answer: `Sim — a Líder atende Ariquemes e cidades num raio de até 150km, como ${getLocalServedCitiesLine()}.`,
  },
  {
    question: "Vocês consertam motosserra e roçadeira?",
    answer:
      "Sim — a Líder faz assistência técnica de motores 2 tempos, que é o motor de roçadeira, motosserra e atomizador.",
  },
  {
    question: "Consertam ferramenta elétrica também?",
    answer:
      "Sim. Além dos motores 2 tempos, a assistência atende ferramenta elétrica de trabalho — esmerilhadeira, furadeira, serra circular, lavadora de alta pressão e afins. Não atende eletrodoméstico comum, como ventilador ou airfryer.",
  },
  {
    question: "Como funciona o atendimento da assistência técnica?",
    answer: "É só levar o equipamento na loja ou mandar o defeito pelo WhatsApp que a gente avalia.",
  },
  {
    question: "Vale a pena consertar a ferramenta ou comprar outra?",
    answer:
      "Depende do defeito e do estado da ferramenta — em muitos casos o conserto sai bem mais barato que comprar uma nova, principalmente em ferramenta de qualidade.",
  },
];

export default function MecanicaPage() {
  const serviceSchema = getCategoryServiceSchema({
    name: "Assistência Técnica de Motosserra, Roçadeira e Ferramenta Elétrica",
    mode: "local",
  });
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
        title="Assistência Técnica de Motosserra, Roçadeira e Ferramenta Elétrica em Ariquemes"
        intro={`A Líder Máquinas, em Ariquemes-RO, tem assistência técnica pra motores 2 tempos — roçadeira, motosserra, atomizador — e pra ferramenta elétrica de trabalho, como esmerilhadeira, furadeira, serra circular e lavadora de alta pressão. A loja fica em Ariquemes e atende clientes num raio de até 150km, incluindo ${getLocalServedCitiesLine()}.`}
      />

      {/* Sem vitrine de produtos aqui de propósito: esta página é sobre o
          serviço de conserto, não venda de peça — mostrar produto misturaria
          as duas coisas de novo. */}

      <CategoryFaq items={FAQ_ITEMS} />

      <CategoryCta
        title="Leva pra avaliar"
        message="Leva a ferramenta ou máquina na loja, em Ariquemes-RO, ou manda o defeito pelo WhatsApp pra gente avaliar."
        whatsappMessage="Olá! Vim pelo site e quero avaliar o conserto de uma ferramenta/máquina."
      />
    </>
  );
}
