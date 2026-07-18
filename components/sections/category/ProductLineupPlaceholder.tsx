import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PLACEHOLDER_SLOTS = [1, 2, 3];

/**
 * Vitrine de produtos/linhas (seção 3 do briefing) — o catálogo real por
 * categoria ainda não foi confirmado pelo cliente (ver
 * `_references/pages/01_PONTOS_EM_ABERTO.md`), então mostra slots marcados
 * como pendentes em vez de inventar linha/produto/marca.
 */
export function ProductLineupPlaceholder() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        eyebrow="Vitrine de produtos"
        title="Linhas desta categoria"
        description="Catálogo em confirmação com o cliente."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {PLACEHOLDER_SLOTS.map((slot) => (
          <Card key={slot} className="border-dashed">
            <p className="font-mono text-xs uppercase tracking-widest text-brand">
              [CONFIRMAR COM O CLIENTE]
            </p>
            <p className="mt-2 text-sm text-muted">Linha de produto a confirmar.</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
