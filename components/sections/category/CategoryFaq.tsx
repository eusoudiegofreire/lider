import type { FaqItem } from "@/lib/schema";

type CategoryFaqProps = {
  items: FaqItem[];
};

/**
 * Bloco de FAQ com cada pergunta em H2 (seção 3 do briefing pede
 * explicitamente "H2 em formato de pergunta") — não usa `SectionHeading`
 * aqui porque isso geraria um H2 extra só pro rótulo "Perguntas frequentes".
 */
export function CategoryFaq({ items }: CategoryFaqProps) {
  return (
    <section className="border-t border-border bg-card py-20">
      <div className="mx-auto max-w-4xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
          Perguntas frequentes
        </p>
        <div className="mt-6 space-y-8">
          {items.map((item) => (
            <div key={item.question}>
              <h2 className="font-display text-xl uppercase text-card-foreground">{item.question}</h2>
              <p className="mt-2 text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
