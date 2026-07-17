import Link from "next/link";

import { CATEGORIES, NAP } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-steel bg-ink">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-lg uppercase tracking-wide text-paper">{NAP.name}</p>
          <address className="mt-3 not-italic text-sm text-muted">
            {NAP.address.street}
            <br />
            {NAP.address.locality} - {NAP.address.region}, {NAP.address.postalCode}
          </address>
          <p className="mt-3 text-sm text-muted">Tel/WhatsApp: {NAP.phone}</p>
          <p className="text-sm text-muted">Horário: {NAP.hours}</p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-orange">Categorias</p>
          <ul className="mt-3 space-y-2">
            {CATEGORIES.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/${category.slug}`}
                  className="text-sm text-muted transition-colors hover:text-orange"
                >
                  {category.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-orange">Institucional</p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/sobre" className="text-sm text-muted transition-colors hover:text-orange">
                Sobre / Localização
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-sm text-muted transition-colors hover:text-orange">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contato" className="text-sm text-muted transition-colors hover:text-orange">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-steel px-6 py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} {NAP.name}
      </div>
    </footer>
  );
}
