import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Placeholder da Fase 1 — só para validar visualmente os tokens e componentes
 * base. A Home real entra na Fase 2 (ver _references/pages/home.md).
 */
export default function FoundationPreview() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading
        eyebrow="Fase 1 — Fundação"
        title="Design system em construção"
        description="Esta página é só um placeholder para validar tokens, tipografia e componentes base antes de escrever a Home de verdade."
      />

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Button variant="primary">Botão primário</Button>
        <Button variant="secondary">Botão secundário</Button>
        <Button variant="ghost">Botão ghost</Button>
        <Badge tone="orange">Linha Garimpo</Badge>
        <Badge tone="steel">Linha Local</Badge>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card>
          <p className="font-display text-xl uppercase text-paper">Card padrão</p>
          <p className="mt-2 text-sm text-muted">Painel com borda steel sobre fundo surface.</p>
        </Card>
        <Card technical>
          <p className="font-display text-xl uppercase text-paper">Card com grid técnico</p>
          <p className="mt-2 text-sm text-muted">Textura de grid sutil de fundo (seção 6 do briefing).</p>
        </Card>
      </div>
    </div>
  );
}
