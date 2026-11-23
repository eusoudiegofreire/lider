import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { CATEGORIES, NAP, getPhoneHref, getWhatsappHref } from "@/lib/constants";

export function Header() {
  return (
    <header className="border-b border-divider bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo-lider.jpg"
            alt={NAP.name}
            width={150}
            height={150}
            className="h-10 w-10 rounded-sm"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-x-5 lg:flex xl:gap-x-7">
          {CATEGORIES.filter((category) => category.phase === 1).map((category) => (
            <Link
              key={category.slug}
              href={`/${category.slug}`}
              className="whitespace-nowrap font-sans text-sm text-muted-foreground transition-colors hover:text-brand"
            >
              {category.label}
            </Link>
          ))}
          <Link
            href="/produtos"
            className="whitespace-nowrap font-sans text-sm text-muted-foreground transition-colors hover:text-brand"
          >
            Produtos
          </Link>
          <Link
            href="/sobre"
            className="whitespace-nowrap font-sans text-sm text-muted-foreground transition-colors hover:text-brand"
          >
            Sobre
          </Link>
          <Link
            href="/contato"
            className="whitespace-nowrap font-sans text-sm text-muted-foreground transition-colors hover:text-brand"
          >
            Contato
          </Link>
          <Link
            href="/blog"
            className="whitespace-nowrap font-sans text-sm text-muted-foreground transition-colors hover:text-brand"
          >
            Blog
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-5">
          <a
            href={getPhoneHref()}
            className="hidden whitespace-nowrap font-sans text-sm font-medium text-foreground transition-colors hover:text-brand xl:inline"
          >
            {NAP.phone}
          </a>
          <Button href={getWhatsappHref()} size="sm">
            WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
}
