import { SectionHeading } from "@/components/ui/SectionHeading";
import { getWhatsappHref } from "@/lib/constants";

/**
 * "Contato" (`copy-lider-home.md` §6, texto e mensagens pré-preenchidas
 * exatas). Cada botão abre o WhatsApp já com a mensagem certa pro assunto —
 * evita o cliente ter que digitar o contexto de novo.
 */
const ASSUNTOS = [
  { label: "Orçamento de garimpo", message: "Olá! Vim pelo site e quero orçamento de equipamento de garimpo." },
  { label: "Produtor rural", message: "Olá! Vim pelo site e preciso de item para produtor rural." },
  {
    label: "Ferramentas e obra",
    message: "Olá! Vim pelo site e quero saber sobre ferramentas e material de construção.",
  },
  { label: "Outro assunto", message: "Olá! Vim pelo site e queria tirar uma dúvida." },
];

export function ContactCta() {
  return (
    <section className="border-t border-divider bg-card py-[72px] md:py-[120px]">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Fala com a gente."
          description="Manda a foto da peça, o modelo da máquina ou só a dúvida mesmo. A gente responde em horário comercial."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ASSUNTOS.map((assunto) => (
            <a
              key={assunto.label}
              href={getWhatsappHref(assunto.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border px-5 py-4 text-center font-sans text-sm font-medium text-foreground transition-colors hover:border-brand hover:text-brand"
            >
              {assunto.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
