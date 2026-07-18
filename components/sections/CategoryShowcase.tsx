import Link from "next/link";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CATEGORIES } from "@/lib/constants";

export function CategoryShowcase() {
  const phase1Categories = CATEGORIES.filter((category) => category.phase === 1);

  return (
    <section className="border-t border-steel bg-surface py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Linhas de produto" title="O que a Líder trabalha" />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {phase1Categories.map((category) => (
            <Link key={category.slug} href={`/${category.slug}`} className="group block">
              <Card technical className="h-full transition-colors group-hover:border-brand">
                <Badge tone={category.areaMode === "regional" ? "brand" : "steel"}>
                  {category.areaMode === "regional" ? "Alcance regional" : "Alcance local"}
                </Badge>
                <p className="mt-4 font-display text-2xl uppercase text-paper">
                  {category.label}
                </p>
                <p className="mt-2 text-sm text-muted">
                  Conheça as linhas de {category.label.toLowerCase()} da Líder.
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
