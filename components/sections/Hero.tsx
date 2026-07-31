import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { getHeroHoursLine, getWhatsappHref } from "@/lib/constants";

const HERO_PHOTO_ALT = "Equipe da Líder Máquinas e Ferramentas em frente à loja em Ariquemes-RO";

/**
 * Copy exata de `copy-lider-home.md` §1 (H1 + subtítulo + CTAs + faixa de
 * horário). O subtítulo original tem a cláusula "atendendo a região há [X]
 * anos" — removida aqui porque o tempo de mercado não foi confirmado pelo
 * cliente (ver relatório final); mostrar "[X]" literal no site ao vivo seria
 * pior do que omitir a frase até ter o dado real.
 *
 * Foto real da equipe (`public/lider hero.jpg`) substitui o placeholder 3D
 * procedural (`ToolMesh`, mantido em components/three/ pra reaproveitar
 * depois — não era um asset real do cliente).
 *
 * Dois tratamentos por breakpoint porque a foto é retrato (864×1080) e uma
 * régua horizontal do time não cabe empilhada sobre o texto no mobile sem
 * ficar enorme e feia:
 * - Desktop (md+): sangra na metade direita da viewport, com máscara de
 *   gradiente na borda esquerda fundindo com o branco do fundo.
 * - Mobile: vira o fundo da seção inteira, com scrim escuro por cima pra
 *   garantir contraste do texto (branco) — texto e CTA secundário trocam de
 *   cor com o breakpoint (claro sobre a foto, escuro sobre o branco).
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-divider bg-background">
      {/* Fundo mobile: foto cobre a seção inteira, scrim escuro garante contraste do texto. */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/lider hero.jpg"
          alt={HERO_PHOTO_ALT}
          fill
          priority
          sizes="100vw"
          className="animate-product-in object-cover object-[center_22%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink/85"
        />
      </div>

      {/* Foto desktop: sangra até a borda direita da viewport, funde com o branco à esquerda.
          A máscara é puramente horizontal (to right) — sem clip-path em lugar nenhum. O que
          parecia "corte diagonal" era a própria foto: o chão claro (embaixo) some no branco
          bem antes da porta escura da loja (em cima) sob a MESMA % de transparência, porque
          o chão já começa perto do branco e a porta não. Duas correções pra isso, não uma:
          1) `brightness-90` nivela um pouco o contraste da foto antes da máscara agir, reduzindo
             a diferença de luminância entre chão e porta (sem achatar a foto real).
          2) A máscara ganhou um stop intermediário (curva com "ease", não 2 pontos lineares) e
             foi alongada de 30% pra 44% — o corte linear de 30% já ficava 97% opaco aos 29%,
             o que lia como transição dura ("colada"); o novo perfil suaviza a entrada e distribui
             a transição por mais largura do painel. */}
      <div className="absolute inset-y-0 right-0 hidden w-[55%] overflow-hidden md:block">
        <Image
          src="/lider hero.jpg"
          alt={HERO_PHOTO_ALT}
          fill
          priority
          sizes="(min-width: 768px) 55vw, 100vw"
          className="animate-product-in object-cover object-[center_22%] brightness-90 [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.55)_22%,black_44%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.55)_22%,black_44%)]"
        />
        {/* Harmoniza a temperatura da foto com o vermelho da marca — mascarado igual à foto, senão
            o tom vermelho (mix-blend-multiply) vaza pro lado branco e a "fusão" nunca fica 100% pura. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-brand/10 mix-blend-multiply [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.55)_22%,black_44%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.55)_22%,black_44%)]"
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-6 py-[72px] md:grid-cols-2 md:items-center md:py-[120px]">
        <div>
          <h1 className="text-[clamp(3rem,7vw,4.5rem)] font-display font-bold leading-[1.02] tracking-[-0.03em] text-paper md:text-foreground">
            Da roça ao garimpo, da obra ao rio.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-paper/90 md:text-muted-foreground">
            Ferragens, abrasivos e máquinas para quem trabalha em Rondônia. Loja física em
            Ariquemes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={getWhatsappHref("Olá! Vim pelo site da Líder Máquinas.")}>
              Chamar no WhatsApp
            </Button>
            {/* Dois elementos, cada um escondido/mostrado por um DIV wrapper (não por
                classe direto no botão): o variant="secondary" já fixa `inline-flex`
                sem prefixo de breakpoint, então uma classe `hidden` direto nele entraria
                em conflito de cascata imprevisível com essa classe. Isolar a visibilidade
                num wrapper evita a colisão. */}
            <div className="md:hidden">
              <Link
                href="#a-loja"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-paper/50 px-6 py-3 text-base font-sans font-semibold text-paper transition-colors hover:border-paper hover:bg-paper/10"
              >
                Como chegar na loja
              </Link>
            </div>
            <div className="hidden md:block">
              <Button href="#a-loja" variant="secondary">
                Como chegar na loja
              </Button>
            </div>
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.08em] text-paper/80 md:text-muted-foreground">
            {getHeroHoursLine()}
          </p>
        </div>
      </div>
    </section>
  );
}
