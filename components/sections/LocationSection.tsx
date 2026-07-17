import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapEmbed } from "./MapEmbed";
import { NAP } from "@/lib/constants";

export function LocationSection() {
  const addressQuery = encodeURIComponent(
    `${NAP.address.street}, ${NAP.address.locality} - ${NAP.address.region}, ${NAP.address.postalCode}`,
  );
  const mapSrc = `https://www.google.com/maps?q=${addressQuery}&output=embed`;

  return (
    <section id="localizacao" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading eyebrow="Onde estamos" title="Loja física em Ariquemes" />

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div>
          <address className="not-italic text-muted">
            {NAP.address.street}
            <br />
            {NAP.address.locality} - {NAP.address.region}, {NAP.address.postalCode}
          </address>

          <p className="mt-4 text-sm text-paper">
            Horário:{" "}
            <span className="font-mono text-orange">
              {NAP.hours === "[CONFIRMAR]" ? "[CONFIRMAR]" : NAP.hours}
            </span>
          </p>

          <div className="mt-6 flex aspect-video items-center justify-center border border-dashed border-steel bg-grid-technical bg-[length:32px_32px]">
            <p className="px-4 text-center font-mono text-xs uppercase tracking-widest text-muted">
              [Foto da fachada a confirmar]
            </p>
          </div>
        </div>

        <div className="aspect-video overflow-hidden border border-steel">
          <MapEmbed src={mapSrc} title={`Mapa - ${NAP.name}`} />
        </div>
      </div>
    </section>
  );
}
