import Image from "next/image";

import { SectionHeading } from "@/components/ui/SectionHeading";

const TEAM_PHOTO_ALT = "Equipe da Líder Máquinas e Ferramentas em frente à loja em Ariquemes-RO";

/**
 * "Quem Somos" — a foto real da equipe (`public/lider hero.jpg`) mora aqui
 * depois de duas tentativas de usá-la no Hero com máscara de gradiente (ver
 * histórico de commits em `components/sections/Hero.tsx`): nenhum ajuste de
 * curva resolveu a leitura de "mancha diagonal amadora" na borda. Aqui a foto
 * entra reta — sem máscara, sem clip-path, `aspect-[4/5]` bate exatamente a
 * proporção nativa do arquivo (864×1080), então `object-cover` não corta nada,
 * só encaixa a foto inteira dentro da borda arredondada.
 */
export function QuemSomos() {
  return (
    <section className="border-t border-divider bg-background py-[72px] md:py-[120px]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">
        <SectionHeading
          eyebrow="Quem atende você"
          title="Um time que conhece o serviço."
          description="Você fala com quem entende de ferramenta, máquina e equipamento de garimpo — não com script de atendimento. A equipe da foto é a mesma que te recebe na loja."
        />

        <div>
          <div className="animate-product-in relative aspect-[4/5] overflow-hidden rounded-lg border border-divider">
            <Image
              src="/lider hero.jpg"
              alt={TEAM_PHOTO_ALT}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Equipe da Líder Máquinas e Ferramentas na loja em Ariquemes-RO.
          </p>
        </div>
      </div>
    </section>
  );
}
