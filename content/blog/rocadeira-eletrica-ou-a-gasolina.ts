import type { BlogPost } from "@/lib/blog/types";

/**
 * Artigo de exemplo pra validar o template (Fase 4). Conteúdo geral sobre
 * roçadeira elétrica x a gasolina — não inventa preço, estoque nem marca
 * específica da Líder; é conteúdo educativo de verdade, com a menção à loja
 * só no fechamento (regra do briefing).
 */
export const rocadeiraEletricaOuAGasolina: BlogPost = {
  slug: "rocadeira-eletrica-ou-a-gasolina",
  title: "Roçadeira Elétrica ou a Gasolina: Qual Vale Mais a Pena?",
  category: "jardinagem",
  date: "2026-08-18",
  excerpt:
    "Elétrica ou a gasolina: qual roçadeira rende mais, qual dá menos manutenção e qual serve pro seu terreno. Comparação direta pra decidir sem enrolação.",
  intro:
    "Depende do terreno: pra quintal e área residencial, a elétrica dá conta com menos manutenção e menos barulho; pra terreno grande, mato alto ou uso pesado, a gasolina rende mais porque não depende de bateria nem cabo.",
  sections: [
    {
      question: "Qual roçadeira é mais forte, a elétrica ou a gasolina?",
      answer:
        "A roçadeira a gasolina é mais forte — ela dá conta de mato alto, terreno irregular e uso pesado sem perder força no meio do serviço.",
      context: [
        "O motor a combustão mantém a potência constante enquanto tiver combustível, independente de quanto tempo você usa sem parar. A elétrica, principalmente a de bateria, perde performance conforme a carga cai, e em mato mais grosso o motor elétrico pode superaquecer se for exigido demais por muito tempo seguido.",
      ],
    },
    {
      question: "Roçadeira elétrica serve para terreno grande?",
      answer:
        "Serve, mas com limitação — a autonomia da bateria ou o alcance do cabo tornam a elétrica mais indicada pra terreno pequeno e médio.",
      context: [
        "Se for elétrica de cabo, o alcance da extensão vira o limite prático — e nem todo terreno tem tomada por perto. Se for a bateria, a autonomia (normalmente entre 30 e 60 minutos de uso contínuo, variando por modelo) costuma exigir parar pra recarregar ou trocar de bateria no meio do serviço, quando o terreno é grande.",
      ],
    },
    {
      question: "Qual roçadeira dá menos trabalho de manutenção?",
      answer:
        "A elétrica dá bem menos trabalho de manutenção — não tem troca de óleo, mistura de combustível, vela nem filtro de ar pra limpar.",
      context: [
        "A roçadeira a gasolina pede manutenção periódica pra manter o rendimento: mistura de combustível na proporção certa, troca de vela, limpeza ou troca do filtro de ar e verificação do carburador de tempos em tempos. É mais serviço, mas também é o motivo dela aguentar uso pesado por mais tempo sem perder força.",
      ],
    },
    {
      question: "Roçadeira elétrica x a gasolina: comparação direta",
      answer: "Na tabela abaixo dá pra comparar de uma vez os pontos que mais pesam na decisão.",
      table: {
        headers: ["Critério", "Elétrica", "A gasolina"],
        rows: [
          ["Potência", "Boa pra mato baixo e médio", "Alta — dá conta de mato alto e denso"],
          ["Autonomia", "Limitada por bateria ou cabo", "Só depende de ter combustível"],
          ["Manutenção", "Baixa", "Regular (óleo, vela, filtro de ar)"],
          ["Ruído", "Baixo", "Alto"],
          ["Peso médio", "Mais leve", "Mais pesada"],
          ["Ideal para", "Quintal e área residencial", "Sítio, terreno grande, mato alto"],
        ],
      },
    },
    {
      question: "Quanto custa uma roçadeira, em média?",
      answer:
        "O preço varia bastante pela potência e pela marca — em geral a elétrica custa menos na compra, mas a gasolina pode compensar no rendimento se o uso for pesado e frequente.",
      context: [
        "Não dá pra cravar um valor único porque isso muda de loja pra loja e de mês pra mês — o mais direto é comparar modelos específicos com quem vende, considerando o tipo de terreno e a frequência de uso que você tem.",
      ],
    },
  ],
  closing:
    "Na Líder, em Ariquemes, trabalhamos com roçadeira elétrica e a gasolina. Se você já sabe o tipo de terreno que vai cortar, a gente ajuda a escolher o modelo certo — fala com a gente pelo WhatsApp ou dá uma passada na loja.",
};
