import Link from "next/link";

import { CATEGORY_ICONS } from "@/components/icons/CategoryIcons";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { FRENTES_DE_TRABALHO, getWhatsappHref } from "@/lib/constants";

/**
 * Grid das 8 frentes de trabalho (`copy-lider-home.md` §2, texto exato — não
 * reescrever). As 3 com página própria (`hasPage`) linkam pra rota interna;
 * as outras 5 abrem o WhatsApp direto com mensagem específica da frente, em
 * vez de linkar pra uma página de categoria que ainda não existe.
 */
export function FrentesDeTrabalho() {
  return (
    <section className="border-t border-divider bg-background py-[72px] md:py-[120px]">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="O que a gente atende"
          title="Oito frentes de trabalho, uma loja só."
          description="Cada serviço pede uma coisa diferente. Aqui você acha o que precisa sem rodar a cidade."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FRENTES_DE_TRABALHO.map((frente, index) => {
            const Icon = CATEGORY_ICONS[frente.slug];

            const cardBody = (
              <Card className="h-full transition-colors group-hover:border-brand">
                <div className="flex items-start justify-between">
                  <Icon aria-hidden="true" className="h-8 w-8 text-steel" />
                  <span className="font-mono text-xs text-muted-foreground">{frente.numero}</span>
                </div>
                <p className="mt-4 font-display text-xl font-semibold text-card-foreground">
                  {frente.label}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {frente.blurb} {frente.contexto}
                </p>
                {frente.envioRegional ? (
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.08em] text-brand">
                    {frente.envioRegional}
                  </p>
                ) : null}
              </Card>
            );

            return (
              <Reveal key={frente.slug} index={index}>
                {frente.hasPage ? (
                  <Link href={`/${frente.slug}`} className="group block h-full">
                    {cardBody}
                  </Link>
                ) : (
                  <a
                    href={getWhatsappHref(frente.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full"
                  >
                    {cardBody}
                  </a>
                )}
              </Reveal>
            );
          })}
        </div>

        <p className="mt-10 text-center text-muted-foreground">
          Não achou o que procura?{" "}
          <a
            href={getWhatsappHref("Olá! Vim pelo site e queria tirar uma dúvida.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand underline underline-offset-4 hover:text-brand-hover"
          >
            Chama no WhatsApp
          </a>{" "}
          com a foto da peça que a gente localiza.
        </p>
      </div>
    </section>
  );
}
