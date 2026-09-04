import type { Metadata } from "next";

import { Button } from "@/components/ui/Button";
import { FRENTES_DE_TRABALHO, getWhatsappHref } from "@/lib/constants";

/**
 * `robots: { index: false }` é explícito aqui de propósito — sem isto, o
 * merge raso do Next (ver `BASE_OPEN_GRAPH` em `lib/constants.ts`) faria esta
 * página herdar o `robots: { index: true, follow: true }` do layout raiz.
 * O Next já injeta `<meta name="robots" content="noindex">` sozinho em toda
 * página com status 404 (`node_modules/next/dist/docs/.../not-found.md`),
 * então sem este override a página acabaria com DUAS tags conflitantes
 * (`noindex` automática + `index, follow` herdada do layout) — pior que a
 * pequena duplicação de `noindex` que este override causa.
 */
export const metadata: Metadata = {
  title: "Página não encontrada",
  description: "O link que você acessou não existe ou saiu do ar.",
  robots: {
    index: false,
    follow: true,
  },
};

/** Só as frentes que já têm página própria — as `phase: 2` não têm rota pra linkar. */
const CATEGORIAS_RAPIDAS = FRENTES_DE_TRABALHO.filter((frente) => frente.hasPage);

export default function NotFound() {
  return (
    <section className="bg-background py-[96px] md:py-[140px]">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.08em] text-brand">Erro 404</p>
        <h1 className="mt-3 text-[clamp(2rem,5vw,3.5rem)] font-display font-bold leading-[1.05] tracking-[-0.03em] text-foreground">
          Essa página a gente não achou no estoque.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          O link que você clicou não existe ou saiu do ar. Volta pro início ou fala direto com a
          gente pelo WhatsApp — a gente ajuda a achar o que você precisa.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/">Voltar pro início</Button>
          <Button
            href={getWhatsappHref("Olá! Cheguei no site, mas o link que eu cliquei deu erro.")}
            variant="secondary"
          >
            Falar no WhatsApp
          </Button>
        </div>

        <div className="mt-14 border-t border-divider pt-8">
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground">
            Ou vai direto pra uma frente de trabalho
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {CATEGORIAS_RAPIDAS.map((frente) => (
              <Button key={frente.slug} href={`/${frente.slug}`} variant="ghost" size="sm">
                {frente.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
