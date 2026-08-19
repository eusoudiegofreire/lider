import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { CATEGORIES, NAP, getWhatsappHref } from "@/lib/constants";

export function Header() {
  return (
    <header className="border-b border-divider bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-lider.jpg"
            alt={NAP.name}
            width={150}
            height={150}
            className="h-10 w-10 rounded-sm"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {CATEGORIES.filter((category) => category.phase === 1).map((category) => (
            <Link
              key={category.slug}
              href={`/${category.slug}`}
              className="font-sans text-sm text-muted-foreground transition-colors hover:text-brand"
            >
              {category.label}
            </Link>
          ))}
          <Link
            href="/produtos"
            className="font-sans text-sm text-muted-foreground transition-colors hover:text-brand"
          >
            Produtos
          </Link>
          <Link
            href="/sobre"
            className="font-sans text-sm text-muted-foreground transition-colors hover:text-brand"
          >
            Sobre
          </Link>
          <Link
            href="/contato"
            className="font-sans text-sm text-muted-foreground transition-colors hover:text-brand"
          >
            Contato
          </Link>
          <Link
            href="/blog"
            className="font-sans text-sm text-muted-foreground transition-colors hover:text-brand"
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
