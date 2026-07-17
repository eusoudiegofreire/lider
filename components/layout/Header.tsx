import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { CATEGORIES, getWhatsappHref } from "@/lib/constants";

export function Header() {
  return (
    <header className="border-b border-steel bg-ink">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-xl uppercase tracking-wide text-paper">
          Líder Máquinas
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {CATEGORIES.filter((category) => category.phase === 1).map((category) => (
            <Link
              key={category.slug}
              href={`/${category.slug}`}
              className="font-display text-sm uppercase tracking-wide text-muted transition-colors hover:text-orange"
            >
              {category.label}
            </Link>
          ))}
          <Link
            href="/blog"
            className="font-display text-sm uppercase tracking-wide text-muted transition-colors hover:text-orange"
          >
            Blog
          </Link>
        </nav>

        <Button href={getWhatsappHref()} size="sm">
          WhatsApp
        </Button>
      </div>
    </header>
  );
}
