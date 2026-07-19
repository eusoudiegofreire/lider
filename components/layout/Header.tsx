import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { CATEGORIES, NAP, getWhatsappHref } from "@/lib/constants";

export function Header() {
  return (
    <header className="section-dark border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          {/* logo-lider.jpg já traz o wordmark "Líder Máquinas" embutido e tem
              fundo branco (sem alpha) — chip branco arredondado (mesmo tom da
              própria logo) evita que apareça como uma caixa solta sobre o
              header escuro, sem cortar o texto num crop circular. */}
          <span className="flex items-center rounded-md bg-paper p-1.5">
            <Image
              src="/logo-lider.jpg"
              alt={NAP.name}
              width={150}
              height={150}
              className="h-9 w-9 rounded-sm"
              priority
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {CATEGORIES.filter((category) => category.phase === 1).map((category) => (
            <Link
              key={category.slug}
              href={`/${category.slug}`}
              className="font-display text-sm uppercase tracking-wide text-muted-foreground transition-colors hover:text-brand"
            >
              {category.label}
            </Link>
          ))}
          <Link
            href="/blog"
            className="font-display text-sm uppercase tracking-wide text-muted-foreground transition-colors hover:text-brand"
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
