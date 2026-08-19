import type { Metadata } from "next";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapEmbed } from "@/components/sections/MapEmbed";
import {
  INSTAGRAM_HANDLE,
  NAP,
  getDirectionsHref,
  getLocalServedCitiesLine,
  getWhatsappHref,
} from "@/lib/constants";
import { getHardwareStoreSchema } from "@/lib/schema";

const TEAM_PHOTO_ALT = "Equipe da Líder Máquinas e Ferramentas em frente à loja em Ariquemes-RO";

export const metadata: Metadata = {
  title: "Sobre e Localização",
  description:
    "Conheça a Líder Máquinas e Ferramentas, loja física em Ariquemes-RO, e veja endereço, horário e mapa pra chegar até a gente.",
  alternates: {
    canonical: "/sobre",
  },
};

/**
 * O texto institucional de verdade (história, ano de fundação, diferencial)
 * ainda não foi confirmado pelo cliente — mesmo bloqueio já registrado em
 * `_references/pages/01_PONTOS_EM_ABERTO.md`. O parágrafo real logo acima do
 * placeholder usa só o que já é dado confirmado (local, raio de atendimento,
 * frentes de trabalho), não é enchimento — é a diferença entre "não invente"
 * e "não escreva nada".
 */
export default function SobrePage() {
  const schema = getHardwareStoreSchema();
  const addressQuery = encodeURIComponent(
    `${NAP.address.street}, ${NAP.address.locality} - ${NAP.address.region}, ${NAP.address.postalCode}`,
  );
  const mapSrc = `https://www.google.com/maps?q=${addressQuery}&output=embed`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="border-b border-divider bg-background py-[72px] md:py-[100px]">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-brand">Quem somos</p>
          <h1 className="mt-3 max-w-2xl text-[clamp(2.25rem,5vw,3.5rem)] font-display font-bold leading-[1.05] tracking-[-0.03em] text-foreground">
            Sobre a Líder Máquinas e Ferramentas.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            A Líder fica em Ariquemes-RO e atende a região num raio de até 150km. Trabalhamos
            com garimpo, produtor rural, ferramentas e construção, mecânica, jardinagem, pesca
            e veterinário — tudo numa loja só, com atendimento também pelo WhatsApp.
          </p>

          <Card className="mt-8 max-w-2xl border-dashed">
            <p className="font-mono text-xs uppercase tracking-widest text-brand">
              [CONFIRMAR — texto institucional]
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              História da loja, ano de fundação e diferencial ainda não foram confirmados pelo
              cliente. Substituir este bloco quando o texto chegar.
            </p>
          </Card>
        </div>
      </section>

      <section className="border-b border-divider bg-background py-[72px] md:py-[100px]">
        <div className="mx-auto max-w-3xl px-6">
          {/* aspect-[4/5] bate a proporção nativa do arquivo (864×1080) — sem crop,
              a foto inteira aparece dentro da borda (mesma lógica de QuemSomos.tsx
              na Home). Uma caixa mais larga (ex: 16:10) cortaria a foto ao meio e
              mostraria só a placa da loja, não a equipe. */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-divider">
            <Image
              src="/lider hero.jpg"
              alt={TEAM_PHOTO_ALT}
              fill
              sizes="(min-width: 1024px) 768px, 100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Equipe da Líder Máquinas e Ferramentas na loja em Ariquemes-RO.
          </p>
        </div>
      </section>

      <section id="localizacao" className="bg-background py-[72px] md:py-[100px]">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Onde estamos" title="Localização." />

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground">
                    Endereço
                  </dt>
                  <dd className="mt-1 text-foreground">
                    {NAP.address.street}
                    <br />
                    {NAP.address.locality} - {NAP.address.region}, {NAP.address.postalCode}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground">
                    Horário
                  </dt>
                  <dd className="mt-1 text-foreground">{NAP.hours}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground">
                    Telefone
                  </dt>
                  <dd className="mt-1 text-foreground">{NAP.phone}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground">
                    Instagram
                  </dt>
                  <dd className="mt-1 text-foreground">{INSTAGRAM_HANDLE}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground">
                    Atendemos também
                  </dt>
                  <dd className="mt-1 text-foreground">{getLocalServedCitiesLine()}</dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-wrap gap-4">
                <Button href={getDirectionsHref()}>Traçar rota até a loja</Button>
                <Button href={getWhatsappHref("Olá! Vim pelo site da Líder Máquinas.")} variant="secondary">
                  Chamar no WhatsApp
                </Button>
              </div>
            </div>

            <div className="aspect-video overflow-hidden rounded-lg border border-divider">
              <MapEmbed src={mapSrc} title={`Mapa - ${NAP.name}`} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
