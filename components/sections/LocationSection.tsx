import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapEmbed } from "./MapEmbed";
import { GOOGLE_MAPS_EMBED_URL, INSTAGRAM_HANDLE, NAP, getDirectionsHref } from "@/lib/constants";

/**
 * "A loja" (`copy-lider-home.md` §5, texto exato — endereço/horário/telefone
 * preenchidos com os dados reais já confirmados em `NAP`, não os `[X]` do
 * template). Foto de fachada segue como pendente (ver relatório final) —
 * mesmo padrão de placeholder tracejado já usado no site antes desta sessão.
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
              <dd className="mt-1 text-foreground">{NAP.phone}</dd>
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

          <div className="mt-6 flex aspect-video items-center justify-center rounded-lg border border-dashed border-divider bg-card">
            <p className="px-4 text-center font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground">
              Foto da fachada — a confirmar
            </p>
          </div>
        </div>

        <div className="aspect-video overflow-hidden rounded-lg border border-divider">
          <MapEmbed src={GOOGLE_MAPS_EMBED_URL} title={`Mapa - ${NAP.name}`} />
        </div>
      </div>
    </section>
  );
}
