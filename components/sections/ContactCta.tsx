import { Button } from "@/components/ui/Button";
import { NAP, getWhatsappHref } from "@/lib/constants";

export function ContactCta() {
  return (
    <section className="border-t border-steel bg-ink py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl uppercase text-paper">
            Venha conferir pessoalmente
          </p>
          <p className="mt-2 text-muted">
            {NAP.address.street} — {NAP.address.locality}/{NAP.address.region}
          </p>
          <p className="mt-1 text-sm text-muted">
            Tel/WhatsApp: <span className="font-mono text-brand">{NAP.phone}</span>
          </p>
        </div>

        <Button href={getWhatsappHref("Olá! Vim pelo site da Líder Máquinas.")} size="lg">
          Falar no WhatsApp
        </Button>
      </div>
    </section>
  );
}
