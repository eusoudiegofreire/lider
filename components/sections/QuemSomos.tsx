import Image from "next/image";

import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const TEAM_PHOTO_ALT = "Equipe da Líder Máquinas e Ferramentas em frente à loja em Ariquemes-RO";

/**
 * "Quem Somos" — reestruturada 2026-08-22 pra dar espaço de verdade pra
 * empresa se apresentar (antes era só uma frase de confiança). O texto
 * institucional final (história, tempo de mercado, o que a Líder valoriza)
 * ainda não foi fornecido pelo dono — o parágrafo real acima do placeholder
 * usa só o que já é dado confirmado (local, região, as frentes de trabalho),
 * não é enchimento. Quando o texto chegar, troca só o conteúdo do `Card`
 * abaixo — layout não precisa mudar (mesmo padrão de placeholder de
 * `app/sobre/page.tsx`).
 *
 * Foto sem máscara/clip-path — `aspect-[4/5]` bate a proporção nativa do
 * arquivo (864×1080), então `object-cover` não corta nada (ver histórico em
 * `components/sections/Hero.tsx` pra por que isso importa).
 */
export function QuemSomos() {
  return (
    <section className="border-t border-divider bg-background py-[72px] md:py-[120px]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-start">
        <div>
          <SectionHeading eyebrow="Quem somos" title="A Líder Máquinas e Ferramentas." />

          <p className="mt-4 max-w-[65ch] text-muted-foreground">
            A Líder Máquinas e Ferramentas fica em Ariquemes-RO e atende a região.
            Trabalhamos com garimpo, produtor rural, ferramentas e construção, mecânica —
            assistência técnica de motosserra, roçadeira e ferramenta elétrica —, jardinagem,
            pesca e veterinário: tudo numa loja só, com atendimento também pelo WhatsApp.
          </p>

          <Card className="mt-6 max-w-[65ch] border-dashed">
            <p className="font-mono text-xs uppercase tracking-widest text-brand">
              [Confirmar — texto institucional do dono]
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Espaço reservado pra 2–3 parágrafos sobre a história da loja, o tempo de mercado
              e o que a Líder valoriza — ainda não fornecidos pelo dono. Quando chegarem, é só
              substituir este bloco pelos parágrafos reais, sem mexer no layout.
            </p>
          </Card>
        </div>

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
