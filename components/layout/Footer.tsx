import Link from "next/link";

import { FRENTES_DE_TRABALHO, INSTAGRAM_HANDLE, NAP, getDirectionsHref, getWhatsappHref } from "@/lib/constants";

/**
 * Rodapé (`copy-lider-home.md` §7). Assinatura usa o nome de marca do copy
 * ("Líder Máquinas Ferragens e Abrasivos") como texto de apresentação — a
 * linha legal continua usando `NAP.name` ("Líder Máquinas e Ferramentas"),
 * o nome já confirmado pelo cliente e usado no JSON-LD/GMB (ver relatório
 * final: as duas grafias aparecem no copy e precisam de confirmação de qual
 * é a razão social/nome de fachada real). CNPJ segue pendente — omitido em
 * vez de mostrar um placeholder quebrado.
 */
export function Footer() {
  return (
    <footer className="border-t border-divider bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-display text-lg leading-tight text-card-foreground">
            Líder Máquinas Ferragens e Abrasivos
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Ferramentas, ferragens e máquinas em Ariquemes, Rondônia.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-brand">Frentes de trabalho</p>
          <ul className="mt-3 space-y-2">
            {FRENTES_DE_TRABALHO.map((frente) =>
              frente.hasPage ? (
                <li key={frente.slug}>
                  <Link
                    href={`/${frente.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-brand"
                  >
                    {frente.label}
                  </Link>
                </li>
              ) : (
                <li key={frente.slug} className="text-sm text-muted-foreground">
                  {frente.label}
                </li>
              ),
            )}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-brand">A loja</p>
          <address className="mt-3 space-y-2 not-italic text-sm text-muted-foreground">
            <p>
              {NAP.address.street}
              <br />
              {NAP.address.locality} - {NAP.address.region}, {NAP.address.postalCode}
            </p>
            <p>{NAP.hours}</p>
            <p>
              <a href={getDirectionsHref()} className="transition-colors hover:text-brand">
                Como chegar
              </a>
            </p>
          </address>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-brand">Contato</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href={getWhatsappHref("Olá! Vim pelo site da Líder Máquinas.")}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-brand"
              >
                WhatsApp
              </a>
            </li>
            <li>Tel: {NAP.phone}</li>
            <li>{INSTAGRAM_HANDLE}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-divider px-6 py-4 text-center text-xs text-muted-foreground">
        {NAP.address.street} · {NAP.address.locality}/{NAP.address.region}
        <br />© {new Date().getFullYear()} {NAP.name}
      </div>
    </footer>
  );
}
