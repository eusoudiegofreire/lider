import { Button } from "@/components/ui/Button";
import { getHeroHoursLine, getWhatsappHref } from "@/lib/constants";

/**
 * Copy exata de `copy-lider-home.md` §1 (H1 + subtítulo + CTAs + faixa de
 * horário). O subtítulo original tem a cláusula "atendendo a região há [X]
 * anos" — removida aqui porque o tempo de mercado não foi confirmado pelo
 * cliente (ver relatório final); mostrar "[X]" literal no site ao vivo seria
 * pior do que omitir a frase até ter o dado real.
 *
 * Revertido em 2026-07-31: a foto da equipe (public/lider hero.jpg) tinha
 * sido usada aqui com uma máscara de gradiente pra sangrar na metade direita
 * do hero, mas nenhum ajuste de curva/luminância resolveu a leitura de
 * "mancha diagonal amadora" na borda — a combinação de fundo claro + retrato
 * cortado nessa proporção não fundia bem. A foto foi movida pra `QuemSomos`
 * (mais abaixo na home), como imagem reta, sem máscara. Aqui o hero fica só
 * com o texto — coluna única, largura contida (`max-w-2xl`) dentro do
 * respiro generoso da seção, em vez de forçar uma segunda coluna vazia ou
 * um elemento gráfico de preenchimento que não tinha motivo pra existir.
 */
export function Hero() {
  return (
    <section className="border-b border-divider bg-background">
      <div className="mx-auto max-w-6xl px-6 py-[72px] md:py-[160px]">
        <div className="max-w-2xl">
          <h1 className="text-[clamp(3rem,7vw,4.5rem)] font-display font-bold leading-[1.02] tracking-[-0.03em] text-foreground">
            Da roça ao garimpo, da obra ao rio.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Ferragens, abrasivos e máquinas para quem trabalha em Rondônia. Loja física em
            Ariquemes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={getWhatsappHref("Olá! Vim pelo site da Líder Máquinas.")}>
              Chamar no WhatsApp
            </Button>
            <Button href="#a-loja" variant="secondary">
              Como chegar na loja
            </Button>
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground">
            {getHeroHoursLine()}
          </p>
        </div>
      </div>
    </section>
  );
}
