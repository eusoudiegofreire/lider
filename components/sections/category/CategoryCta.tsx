import { Button } from "@/components/ui/Button";
import { NAP, getWhatsappHref } from "@/lib/constants";

type CategoryCtaProps = {
  title?: string;
  message: string;
};

export function CategoryCta({ title = "Venha conferir pessoalmente", message }: CategoryCtaProps) {
  return (
    <section className="section-dark border-t border-border bg-background py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl uppercase text-foreground">{title}</p>
          <p className="mt-2 max-w-xl text-muted-foreground">{message}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            {NAP.address.street} — {NAP.address.locality}/{NAP.address.region}
          </p>
          {/* brand (bordô) falha contraste sobre fundo escuro (2.21:1) — ver
              docs/brand-guidelines.md — ênfase aqui é por peso, não cor. */}
          <p className="mt-1 text-sm text-muted-foreground">
            Tel/WhatsApp: <span className="font-mono text-foreground">{NAP.phone}</span>
          </p>
        </div>

        <Button href={getWhatsappHref("Olá! Vim pelo site da Líder Máquinas.")} size="lg">
          Falar no WhatsApp
        </Button>
      </div>
    </section>
  );
}
