import type { Metadata } from "next";

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/contato/ContactForm";
import { MapEmbed } from "@/components/sections/MapEmbed";
import {
  INSTAGRAM_HANDLE,
  NAP,
  getDirectionsHref,
  getInstagramHref,
  getWhatsappHref,
} from "@/lib/constants";
import { getHardwareStoreSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Líder Máquinas e Ferramentas em Ariquemes-RO: WhatsApp, telefone, endereço, horário e mapa. Loja física com atendimento também online.",
  alternates: {
    canonical: "/contato",
  },
};

export default function ContatoPage() {
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
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-brand">Fala com a gente</p>
          <h1 className="mt-3 max-w-2xl text-[clamp(2.25rem,5vw,3.5rem)] font-display font-bold leading-[1.05] tracking-[-0.03em] text-foreground">
            Contato
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            O jeito mais rápido de falar com a gente é pelo WhatsApp. Se preferir, liga, manda
            mensagem por aqui ou passa direto na loja em Ariquemes-RO.
          </p>
          <div className="mt-8">
            <Button href={getWhatsappHref("Olá! Vim pelo site e quero falar com a Líder Máquinas.")} size="lg">
              Chamar no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-divider bg-background py-[72px] md:py-[100px]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Fale pelo formulário"
              title="Manda sua mensagem."
              description="Preenche os campos abaixo — a gente abre o WhatsApp com tudo já escrito, você só confirma o envio."
            />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Outros contatos" title="Endereço e horário." />
            <dl className="mt-6 space-y-4 text-sm">
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
                  Telefone / WhatsApp
                </dt>
                <dd className="mt-1 text-foreground">
                  <a href={`tel:+55${NAP.phone.replace(/\D/g, "")}`} className="hover:text-brand">
                    {NAP.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground">
                  Instagram
                </dt>
                <dd className="mt-1 text-foreground">
                  <a
                    href={getInstagramHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand"
                  >
                    {INSTAGRAM_HANDLE}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap gap-4">
              <Button href={getDirectionsHref()} variant="secondary">
                Traçar rota até a loja
              </Button>
            </div>

            <div className="mt-6 aspect-video overflow-hidden rounded-lg border border-divider">
              <MapEmbed src={mapSrc} title={`Mapa - ${NAP.name}`} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
