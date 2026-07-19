import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getWhatsappHref } from "@/lib/constants";

type CategoryHeroProps = {
  badge: string;
  title: string;
  intro: string;
};

/**
 * H1 único da página de categoria + bloco de abertura answer-first (seção 3
 * do briefing) — 2-3 frases respondendo o que a Líder oferece antes de
 * qualquer outra coisa.
 */
export function CategoryHero({ badge, title, intro }: CategoryHeroProps) {
  return (
    <section className="section-dark border-b border-border bg-background py-20">
      <div className="mx-auto max-w-4xl px-6">
        <Badge tone="brand">{badge}</Badge>
        <h1 className="mt-4 font-display text-4xl uppercase leading-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{intro}</p>
        <div className="mt-8">
          <Button href={getWhatsappHref("Olá! Vim pelo site da Líder Máquinas.")}>
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
