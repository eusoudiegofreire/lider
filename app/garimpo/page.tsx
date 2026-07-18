import type { Metadata } from "next";

import { CategoryCta } from "@/components/sections/category/CategoryCta";
import { CategoryFaq } from "@/components/sections/category/CategoryFaq";
import { CategoryHero } from "@/components/sections/category/CategoryHero";
import { ProductLineupPlaceholder } from "@/components/sections/category/ProductLineupPlaceholder";
import { getCategoryServiceSchema, getFaqPageSchema, type FaqItem } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Equipamentos para Garimpo",
  description:
    "Equipamentos para garimpo na Líder Máquinas e Ferramentas (Ariquemes-RO), atendendo Rondônia, Amazonas, Acre e Mato Grosso. Loja física e WhatsApp.",
  alternates: {
    canonical: "/garimpo",
  },
};

// TODO(pendencia-cliente): confirmar se a Líder despacha/vende à distância
// pra fora de RO (Amazonas, Acre, Mato Grosso) ou se o atendimento a quem
// vem de longe é sempre presencial. Enquanto isso não for confirmado, o CTA
// final e a resposta da FAQ abaixo usam texto neutro — não decidir por conta
// própria qual dos dois caminhos usar. Ver _references/pages/garimpo.md
// (seção "Ponto em aberto") e _references/pages/01_PONTOS_EM_ABERTO.md.
const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Qual equipamento é essencial para começar no garimpo?",
    answer:
      "Isso depende do tipo de garimpo e do equipamento disponível no momento — fale com a loja pra uma indicação certa.",
  },
  {
    question: "A Líder vende equipamento de garimpo em Ariquemes?",
    answer: "Sim, a Líder Máquinas e Ferramentas tem loja física em Ariquemes-RO com equipamentos para garimpo.",
  },
  {
    question: "A Líder entrega equipamento de garimpo para outros estados (Amazonas, Acre, Mato Grosso)?",
    answer: "Fale conosco pra saber sobre entrega pra sua região.",
  },
  {
    question: "Quais as formas de pagamento para quem compra de fora de Rondônia?",
    answer:
      "Ainda estamos confirmando as opções de pagamento pra quem compra de fora de Rondônia — fale com a loja pra mais detalhes.",
  },
  {
    question: "Qual o equipamento mais procurado por garimpeiros iniciantes?",
    answer:
      "Isso varia conforme o catálogo disponível — fale com a loja pra saber o que costuma ser mais procurado no momento.",
  },
];

export default function GarimpoPage() {
  const serviceSchema = getCategoryServiceSchema({ name: "Garimpo", mode: "regional" });
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
        badge="Rondônia, Amazonas, Acre e Mato Grosso"
        title="Equipamentos para Garimpo em Rondônia e Região"
        intro="A Líder Máquinas e Ferramentas vende equipamentos para garimpo, atendendo Rondônia e as regiões de garimpo do Amazonas, Acre e Mato Grosso. A loja fica em Ariquemes-RO, com atendimento também por WhatsApp."
      />

      <ProductLineupPlaceholder />

      <CategoryFaq items={FAQ_ITEMS} />

      {/*
        TODO(pendencia-cliente): mesmo ponto em aberto do array FAQ_ITEMS acima
        — trocar esta mensagem por um texto definitivo (frete/despacho vs.
        presencial) assim que o cliente confirmar.
      */}
      <CategoryCta
        title="Fale conosco"
        message="Fale conosco pra saber sobre entrega pra sua região."
      />
    </>
  );
}
