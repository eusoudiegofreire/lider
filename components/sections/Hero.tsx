import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Hero3DGate } from "@/components/three/Hero3DGate";
import { NAP, getWhatsappHref } from "@/lib/constants";

export function Hero() {
  return (
    <section className="section-dark relative overflow-hidden border-b border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <Badge tone="brand">{NAP.address.locality} - {NAP.address.region}</Badge>
          <h1 className="mt-4 font-display text-4xl uppercase leading-tight text-foreground sm:text-5xl">
            Máquinas e Ferramentas para Garimpo, Campo e Oficina em Ariquemes
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            A Líder Máquinas e Ferramentas vende equipamento de garimpo, ferramentas para
            produtor rural e ferramentas em geral, com loja física em Ariquemes-RO e
            atendimento por WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={getWhatsappHref("Olá! Vim pelo site da Líder Máquinas.")}>
              Falar no WhatsApp
            </Button>
            <Button href="#localizacao" variant="secondary">
              Ver localização
            </Button>
          </div>
        </div>

        <div className="relative aspect-square w-full">
          <Hero3DGate />
        </div>
      </div>
    </section>
  );
}
