import { Button } from "@/components/ui/Button";
import { Hero3DGate } from "@/components/three/Hero3DGate";
import { TechnicalAnnotation } from "@/components/motion/TechnicalAnnotation";
import { getHeroHoursLine, getWhatsappHref } from "@/lib/constants";

/**
 * Copy exata de `copy-lider-home.md` §1 (H1 + subtítulo + CTAs + faixa de
 * horário). O subtítulo original tem a cláusula "atendendo a região há [X]
 * anos" — removida aqui porque o tempo de mercado não foi confirmado pelo
 * cliente (ver relatório final); mostrar "[X]" literal no site ao vivo seria
 * pior do que omitir a frase até ter o dado real.
 *
 * O produto do hero (furadeira) é geometria procedural Three.js (`ToolMesh`),
 * não uma foto — não há um asset real do cliente ainda (ver DESIGN.md §5 /
 * relatório final). Assim que a fotografia de produto chegar, trocar
 * `Hero3DGate` por um `<Image>` recortado é o único ajuste necessário aqui —
 * a anotação técnica e a sombra difusa já estão prontas pra qualquer um dos
 * dois.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-divider bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-[72px] md:grid-cols-2 md:items-center md:py-[120px]">
        <div>
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

        <div className="relative aspect-square w-full animate-product-in">
          {/* Sombra difusa sob o produto — única exceção à doutrina "zero box-shadow" (DESIGN.md §4). */}
          <div
            aria-hidden="true"
            className="absolute inset-x-8 bottom-4 h-10 rounded-full bg-ink/15 blur-2xl"
          />
          <Hero3DGate />
          <TechnicalAnnotation
            label="Feito para trabalho pesado"
            from={{ x: 68, y: 38 }}
            to={{ x: 92, y: 18 }}
          />
        </div>
      </div>
    </section>
  );
}
