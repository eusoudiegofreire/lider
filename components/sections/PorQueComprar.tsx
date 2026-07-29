import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * "Por que comprar na Líder" (`copy-lider-home.md` §4, texto exato). Prova 3
 * originalmente é "[X] anos em Ariquemes" — o tempo de mercado não foi
 * confirmado pelo cliente, então o título fica sem o número (o corpo do
 * texto já não depende dele) em vez de mostrar um placeholder quebrado no
 * site ao vivo. Ver relatório final para o dado pendente.
 */
const PROVAS = [
  {
    title: "Estoque na prateleira",
    body: "O que você precisa hoje, você leva hoje. Não é catálogo com prazo de 15 dias — é mercadoria na loja, na sua mão.",
  },
  {
    title: "Vendedor que entende do serviço",
    body: "Traz a peça velha, traz a foto no celular, traz do jeito que der. A gente compara na hora e acha a certa. Quem já comprou errado na internet sabe o que isso vale.",
  },
  {
    title: "Anos em Ariquemes",
    body: "A gente não vai sumir depois da venda. Deu problema, você sabe onde nos encontrar.",
  },
];

export function PorQueComprar() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-[72px] md:py-[120px]">
      <SectionHeading eyebrow="Por que aqui" title="Três motivos, sem enrolação." />

      <div className="mt-10 grid gap-10 md:grid-cols-3 md:divide-x md:divide-divider">
        {PROVAS.map((prova, index) => (
          <div key={prova.title} className={index > 0 ? "md:pl-10" : undefined}>
            <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
            <p className="mt-2 font-display text-xl font-semibold text-foreground">{prova.title}</p>
            <p className="mt-2 text-muted-foreground">{prova.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
