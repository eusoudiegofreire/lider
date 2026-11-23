import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapEmbed } from "./MapEmbed";
import { GOOGLE_MAPS_EMBED_URL, INSTAGRAM_HANDLE, NAP, getDirectionsHref, getPhoneHref } from "@/lib/constants";

/**
 * "A loja" (`copy-lider-home.md` §5, texto exato — endereço/horário/telefone
 * preenchidos com os dados reais já confirmados em `NAP`, não os `[X]` do
 * template). Foto da fachada em `public/fachada-lider-maquinas-ariquemes.jpg`.
 */
export function LocationSection() {
  return (
    <section id="a-loja" className="mx-auto max-w-6xl px-6 py-[72px] md:py-[120px]">
      <SectionHeading eyebrow="Onde estamos" title="Passa aqui na loja." />

      <p className="mt-4 max-w-2xl text-muted-foreground">
        A gente fica na {NAP.address.street}, em {NAP.address.locality}. Tem estacionamento na
        frente e quem atende conhece o serviço da região.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div>
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Endereço
              </dt>
              <dd className="mt-1 text-foreground">
                {NAP.address.street}
                <br />
                {NAP.address.locality} - {NAP.address.region}, {NAP.address.postalCode}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Horário
              </dt>
              <dd className="mt-1 text-foreground">{NAP.hours}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Telefone
              </dt>
              <dd className="mt-1 text-foreground">
                <a href={getPhoneHref()} className="hover:text-brand">
                  {NAP.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Instagram
              </dt>
              <dd className="mt-1 text-foreground">{INSTAGRAM_HANDLE}</dd>
            </div>
          </dl>

          <div className="mt-6">
            <Button href={getDirectionsHref()}>Traçar rota até a loja</Button>
          </div>

          <div className="relative mt-6 aspect-video overflow-hidden rounded-lg border border-divider">
            <Image
              src="/fachada-lider-maquinas-ariquemes.jpg"
              alt={`Fachada da ${NAP.name} na ${NAP.address.street}, em ${NAP.address.locality}-${NAP.address.region}`}
              fill
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="aspect-video overflow-hidden rounded-lg border border-divider">
          <MapEmbed src={GOOGLE_MAPS_EMBED_URL} title={`Mapa - ${NAP.name}`} />
        </div>
      </div>
    </section>
  );
}
