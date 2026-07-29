import { Button } from "@/components/ui/Button";
import { TechnicalAnnotation } from "@/components/motion/TechnicalAnnotation";
import { getWhatsappHref } from "@/lib/constants";

/**
 * "Garimpo em destaque" (`copy-lider-home.md` §3, texto exato). Única seção
 * escura da página inteira (DESIGN.md §1/§7) — funciona porque é rara: é a
 * única frente de trabalho que quebra o raio local (envio pra 4 estados).
 *
 * Slot de imagem de produto ainda é placeholder — não há foto real de
 * equipamento de garimpo do cliente (mesmo bloqueio já registrado em
 * `LocationSection`/relatório final). A anotação técnica já está montada em
 * cima do placeholder pra a troca por `<Image>` ser o único passo quando a
 * foto chegar.
 */
export function GarimpoDestaque() {
  return (
    <section className="section-dark border-y border-divider bg-background py-[72px] md:py-[120px]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground">
            Envio para todo o Norte
          </p>
          <h2 className="mt-3 text-3xl font-display font-bold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-4xl">
            Equipamento de garimpo sai daqui para quatro estados.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Bomba, mangueira, peneira, motor, chapa, correia e peça de reposição. A gente atende
            garimpeiro de Rondônia, Mato Grosso, Amazonas e Pará — e manda para onde o serviço
            estiver.
          </p>
          <p className="mt-4 text-muted-foreground">
            Manda a foto da peça ou o modelo do equipamento no WhatsApp. A gente confere o
            estoque, passa o preço e resolve o frete na mesma conversa.
          </p>

          <div className="mt-8">
            <Button
              href={getWhatsappHref(
                "Olá! Vim pelo site e quero orçamento de equipamento de garimpo.",
              )}
              variant="invert"
              size="lg"
            >
              Pedir orçamento de garimpo
            </Button>
            <p className="mt-3 text-sm text-muted-foreground">
              Resposta no mesmo dia, em horário comercial.
            </p>
          </div>
        </div>

        <div className="relative aspect-square w-full">
          <div className="flex h-full w-full items-center justify-center rounded-lg border border-divider">
            <p className="px-6 text-center font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground">
              Foto de equipamento de garimpo — a confirmar
            </p>
          </div>
          <TechnicalAnnotation
            label="Bomba de alta vazão"
            from={{ x: 50, y: 45 }}
            to={{ x: 82, y: 22 }}
            tone="dark"
          />
        </div>
      </div>
    </section>
  );
}
