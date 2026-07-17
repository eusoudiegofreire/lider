import { SectionHeading } from "@/components/ui/SectionHeading";
import { NAP } from "@/lib/constants";

/**
 * Texto institucional ainda não confirmado com o cliente (história, ano de
 * fundação, diferencial — ver _references/pages/01_PONTOS_EM_ABERTO.md). Fica
 * marcado como pendente em vez de inventado.
 */
export function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading eyebrow="Quem somos" title={`A ${NAP.name}`} />

      <div className="mt-8 border border-dashed border-steel bg-surface p-6">
        <p className="font-mono text-xs uppercase tracking-widest text-orange">
          [CONFIRMAR COM O CLIENTE]
        </p>
        <p className="mt-2 max-w-2xl text-muted">
          Texto institucional pendente — história da loja, ano de fundação e diferencial de
          atendimento. Ver <code className="text-paper">_references/pages/01_PONTOS_EM_ABERTO.md</code>.
        </p>
      </div>
    </section>
  );
}
