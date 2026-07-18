/**
 * NAP (Nome, Endereço, Telefone) — precisa ser idêntico em todo lugar:
 * site, Google Meu Negócio, redes sociais. Confirmado pelo cliente em 2026-07-18.
 */
export const NAP = {
  name: "Líder Máquinas e Ferramentas",
  address: {
    street: "Av. Capitão Sílvio, Áreas Especiais 01",
    locality: "Ariquemes",
    region: "RO",
    postalCode: "76870-020",
    country: "BR",
  },
  geo: {
    latitude: -9.9133,
    longitude: -63.0419,
  },
  /** Telefone comercial da loja. */
  phone: "(69) 3536-4929",
  /** WhatsApp do vendedor — usado como CTA principal do site. */
  whatsapp: "+55 69 99317-9347",
  /** Texto de exibição do horário — ver `OPENING_HOURS` para o formato estruturado (schema.org). */
  hours: "Seg a Sex: 07:30–18:00 · Sáb: 07:30–12:00 · Dom: fechado",
} as const;

export type OpeningHours = {
  /** Nomes de dia em inglês, conforme schema.org `DayOfWeek`. */
  dayOfWeek: string[];
  opens: string;
  closes: string;
};

/** Horário estruturado pro `openingHoursSpecification` do JSON-LD. Domingo fica de fora (fechado). */
export const OPENING_HOURS: OpeningHours[] = [
  { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:30", closes: "18:00" },
  { dayOfWeek: ["Saturday"], opens: "07:30", closes: "12:00" },
];

/**
 * Retorna o link do WhatsApp no formato oficial fornecido pelo cliente
 * (`api.whatsapp.com/send`, não `wa.me`).
 */
export function getWhatsappHref(message?: string): string {
  const digits = NAP.whatsapp.replace(/\D/g, "");
  const text = message ? `text=${encodeURIComponent(message)}` : "text";
  return `https://api.whatsapp.com/send/?phone=${digits}&${text}&type=phone_number&app_absent=0`;
}

export type AreaServedMode = "regional" | "local";

export type Category = {
  slug: string;
  label: string;
  areaMode: AreaServedMode;
  /** Fase do plano de execução em que a página entra (ver _references/00_BRIEFING...). */
  phase: 1 | 2;
};

export const CATEGORIES: Category[] = [
  { slug: "garimpo", label: "Garimpo", areaMode: "regional", phase: 1 },
  { slug: "produtor-rural", label: "Produtor Rural", areaMode: "local", phase: 1 },
  { slug: "ferramentas", label: "Ferramentas", areaMode: "local", phase: 1 },
  { slug: "mecanica", label: "Mecânica", areaMode: "local", phase: 2 },
  { slug: "jardinagem", label: "Jardinagem", areaMode: "local", phase: 2 },
];

/** Estados atendidos pela linha Garimpo (alcance regional amplo). */
export const REGIONAL_STATES = ["Rondônia", "Amazonas", "Acre", "Mato Grosso"] as const;

/** Raio de atendimento local em metros (~150km ao redor de Ariquemes). */
export const LOCAL_GEO_RADIUS_METERS = 150_000;

/**
 * URL base do site — usa a URL de deploy da Vercel até o domínio definitivo
 * ser confirmado (ver `_references/pages/01_PONTOS_EM_ABERTO.md`). Ajustar aqui
 * quando o domínio real for definido.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lider-maquinas.vercel.app";
