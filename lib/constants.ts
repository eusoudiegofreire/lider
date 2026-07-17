/**
 * NAP (Nome, Endereço, Telefone) — precisa ser idêntico em todo lugar:
 * site, Google Meu Negócio, redes sociais. Ver _references/pages/01_PONTOS_EM_ABERTO.md
 * para os campos ainda não confirmados pelo cliente.
 */
export const NAP = {
  name: "Líder Máquinas e Ferramentas",
  address: {
    street: "Av. Capitão Sílvio, 3395, Setor 1",
    locality: "Ariquemes",
    region: "RO",
    postalCode: "76870-020",
    country: "BR",
  },
  geo: {
    latitude: -9.9133,
    longitude: -63.0419,
  },
  /** Placeholder — confirmar telefone oficial com o cliente antes de publicar. */
  phone: "[CONFIRMAR]" as string,
  /** Placeholder — confirmar número de WhatsApp oficial com o cliente antes de publicar. */
  whatsapp: "[CONFIRMAR]" as string,
  /** Placeholder — briefing assume Seg-Sáb 08:00-18:00, confirmar com o cliente. */
  hours: "[CONFIRMAR]" as string,
} as const;

/** Retorna o link do WhatsApp, ou "#" enquanto o número não for confirmado. */
export function getWhatsappHref(message?: string): string {
  if (NAP.whatsapp === "[CONFIRMAR]") return "#";
  const digits = NAP.whatsapp.replace(/\D/g, "");
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${digits}${text}`;
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
