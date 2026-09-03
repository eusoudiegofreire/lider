/**
 * NAP (Nome, Endereço, Telefone) — precisa ser idêntico em todo lugar:
 * site, Google Meu Negócio, redes sociais. Confirmado pelo cliente em 2026-07-18.
 */
export const NAP = {
  name: "Líder Máquinas e Ferramentas",
  /** Endereço completo (com número) confirmado 2026-07-31 via
   * https://share.google/1eRj0u6hM22jcub4d — o Google Meu Negócio real da
   * loja. Antes o número "3395" tinha sido removido do copy de FAQ das
   * páginas de categoria por vir sem confirmação e com bairro errado
   * ("Setor 1", não "Áreas Especiais 01") — este é o dado oficial agora. */
  address: {
    street: "Av. Cap. Silvio, 3395 - Áreas Especiais 01",
    locality: "Ariquemes",
    region: "RO",
    postalCode: "76870-020",
    country: "BR",
  },
  /** Coordenadas do pin real do Google Meu Negócio (confirmado 2026-07-29 via
   * https://maps.app.goo.gl/bAGy35TvZpj8W4N47) — substitui a estimativa
   * anterior, que estava a ~1km de distância do local real. A releitura de
   * 2026-07-31 (mesmo Knowledge Graph ID /g/11tws81d98) mostrou o viewport do
   * mapa a ~30m de distância (@-9.9207138,-63.0351658), mas isso é só o
   * centro de exibição do mapa no momento da consulta, não o pin da loja —
   * mantido o par de coordenadas do marcador preciso (`!3d`/`!4d`) da
   * consulta anterior. */
  geo: {
    latitude: -9.9204513,
    longitude: -63.0359876,
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

/** @lidermaquinaseferramentas — citado no copy final (seção 5/7), sem confirmação separada em NAP pois é handle público, não dado de contato estruturado. */
export const INSTAGRAM_HANDLE = "@lidermaquinaseferramentas";

/** Link clicável do Instagram, derivado do handle público (sem o "@"). */
export function getInstagramHref(): string {
  return `https://instagram.com/${INSTAGRAM_HANDLE.replace("@", "")}`;
}

/**
 * Embed oficial do Google Maps pro ponto "Líder Máquinas" (gerado via
 * Google Maps → Compartilhar → Incorporar um mapa, 2026-08-22) — usado por
 * `MapEmbed` em toda página com seção de localização (Home, `/sobre`,
 * `/contato`). Fonte única: antes cada página montava seu próprio
 * `google.com/maps?q=<endereço>&output=embed` (busca por texto, menos
 * preciso que o embed do place real). Não editar o `pb=` na mão — se o
 * ponto mudar, gerar um novo embed no Google Maps e substituir a URL
 * inteira aqui.
 */
export const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.8107205163747!2d-63.0351177!3d-9.920746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93cc919e29c38e2d%3A0x10c6e73cacdc1b71!2zTMOtZGVyIE3DoXF1aW5hcw!5e1!3m2!1spt-BR!2sbr!4v1787671774516!5m2!1spt-BR!2sbr";

/**
 * Cidades do raio de atendimento local (~150km de Ariquemes) — mesma lista
 * já usada nas páginas de categoria locais (garimpo é regional/estados, as
 * outras são locais/cidades). Centralizado aqui porque estava duplicado como
 * string solta em 4 arquivos (`app/produtor-rural`, `app/ferramentas`,
 * `app/mecanica`, `app/jardinagem`) — risco de uma mudança futura corrigir
 * só uma cópia e deixar as outras desatualizadas.
 */
export const LOCAL_SERVED_CITIES = [
  "Rio Crespo",
  "Cujubim",
  "Monte Negro",
  "Buritis",
  "Machadinho",
  "Jaru",
] as const;

export function getLocalServedCitiesLine(): string {
  return LOCAL_SERVED_CITIES.join(", ");
}

/**
 * Faixa mono de horário do Hero (`copy-lider-home.md` §1: "SEG A SEX [X]H ÀS
 * [X]H · SÁB [X]H ÀS [X]H") — preenchida com o horário real já confirmado em
 * `OPENING_HOURS`, não um placeholder.
 */
export function getHeroHoursLine(): string {
  const weekday = OPENING_HOURS.find((oh) => oh.dayOfWeek.includes("Monday"));
  const saturday = OPENING_HOURS.find((oh) => oh.dayOfWeek.includes("Saturday"));
  const parts = [
    weekday ? `SEG A SEX ${weekday.opens} ÀS ${weekday.closes}` : null,
    saturday ? `SÁB ${saturday.opens} ÀS ${saturday.closes}` : null,
  ].filter(Boolean);
  return `${NAP.address.locality.toUpperCase()} · ${NAP.address.region} — ${parts.join(" · ")}`;
}

/** Link de rota até a loja (Google Maps Directions), a partir do endereço confirmado em `NAP`. */
export function getDirectionsHref(): string {
  const destination = encodeURIComponent(
    `${NAP.address.street}, ${NAP.address.locality} - ${NAP.address.region}, ${NAP.address.postalCode}`,
  );
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
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
  { slug: "ferramentas", label: "Ferramentas e Construção", areaMode: "local", phase: 1 },
  { slug: "mecanica", label: "Mecânica", areaMode: "local", phase: 1 },
  { slug: "abrasivos", label: "Abrasivos", areaMode: "local", phase: 2 },
  { slug: "pesca", label: "Pesca", areaMode: "local", phase: 2 },
  { slug: "jardinagem", label: "Jardinagem", areaMode: "local", phase: 1 },
  { slug: "veterinario", label: "Veterinário", areaMode: "local", phase: 2 },
];

/**
 * As 8 frentes de trabalho da Home (seção 2 do `copy-lider-home.md`, texto
 * de `label`/`blurb` final aprovado — não reescrever). `phase: 1` tem página
 * própria (link interno); `phase: 2` ainda não tem página, então o card
 * inteiro abre o WhatsApp com uma mensagem específica da frente em vez de
 * linkar pra uma rota que não existe.
 *
 * `contexto`: frase de complemento (não é do copy original aprovado — escrita
 * nesta revisão pra substituir os campos ATENDE/ENVIO nos cards, que eram
 * repetitivos entre categorias — ver DESIGN.md). Pode ser revisada livremente.
 * `envioRegional`: só a Garimpo tem — é a única frente que quebra o raio
 * local (o resto é `undefined`, o card não mostra nada no lugar).
 */
export type FrenteDeTrabalho = {
  slug: string;
  numero: string;
  label: string;
  blurb: string;
  contexto: string;
  envioRegional?: string;
  hasPage: boolean;
  whatsappMessage: string;
};

export const FRENTES_DE_TRABALHO: FrenteDeTrabalho[] = [
  {
    slug: "garimpo",
    numero: "01",
    label: "Garimpo",
    blurb: "Bomba, mangueira, peneira, motor, correia e peça de reposição.",
    contexto: "Pra manter o garimpo rodando sem perder dia de trabalho.",
    /* Corrigido 2026-08-22: era "RO, MT, AM e PA" (Pará), nunca confirmado
     * em lugar nenhum — todo documento de referência (briefing, garimpo.md,
     * 01_PONTOS_EM_ABERTO.md) e o schema (REGIONAL_STATES) confirmam RO, AM,
     * AC (Acre) e MT, o mesmo alcance já publicado em /garimpo. */
    envioRegional: "Enviamos para RO, AM, AC e MT",
    hasPage: true,
    whatsappMessage: "Olá! Vim pelo site e quero orçamento de equipamento de garimpo.",
  },
  {
    slug: "produtor-rural",
    numero: "02",
    label: "Produtor Rural",
    blurb: "Arame, cerca, roçadeira, motobomba, pulverizador e equipamento de proteção.",
    contexto: "Pra quem cuida da propriedade todo dia, sem depender de buscar em outra cidade.",
    hasPage: true,
    whatsappMessage: "Olá! Vim pelo site e preciso de item para produtor rural.",
  },
  {
    slug: "ferramentas",
    numero: "03",
    label: "Ferramentas e Construção",
    blurb: "Furadeira, betoneira, carrinho de mão, trena, nível e material de obra.",
    contexto: "Da reforma pequena à obra do zero — o que pedreiro e marceneiro pedem primeiro.",
    hasPage: true,
    whatsappMessage: "Olá! Vim pelo site e quero saber sobre ferramentas e material de construção.",
  },
  {
    slug: "mecanica",
    numero: "04",
    label: "Mecânica",
    /* Corrigido 2026-08-21: "Mecânica" aqui é assistência técnica de motor 2
     * tempos e ferramenta elétrica de trabalho — não venda de peça
     * automotiva/bateria de carro (ver content/blog/mecanica-ariquemes.ts,
     * fonte de verdade confirmada com o cliente). */
    blurb: "Assistência técnica de motosserra, roçadeira e ferramenta elétrica de trabalho.",
    contexto: "Leva pra avaliar antes de comprar outra.",
    hasPage: true,
    whatsappMessage: "Olá! Vim pelo site e quero avaliar o conserto de uma ferramenta/máquina.",
  },
  {
    slug: "abrasivos",
    numero: "05",
    label: "Abrasivos",
    blurb: "Disco de corte, lixa, rebolo e escova de aço. Do desbaste ao acabamento.",
    contexto: "O grão certo pro material certo — evita gastar disco à toa.",
    hasPage: false,
    whatsappMessage: "Olá! Vim pelo site e quero saber sobre abrasivos.",
  },
  {
    slug: "pesca",
    numero: "06",
    label: "Pesca",
    blurb: "Vara, molinete, linha, anzol, isca e caixa térmica que segura gelo no sol.",
    contexto: "Pro dia de pescaria no rio ou na represa, sem faltar o essencial.",
    hasPage: false,
    whatsappMessage: "Olá! Vim pelo site e quero saber sobre artigos de pesca.",
  },
  {
    slug: "jardinagem",
    numero: "07",
    label: "Jardinagem",
    blurb: "Motosserra, aparador, tesoura de poda, mangueira e adubo.",
    contexto: "Pra manter quintal, sítio ou área verde sempre em ordem.",
    hasPage: true,
    whatsappMessage: "Olá! Vim pelo site e quero saber sobre jardinagem.",
  },
  {
    slug: "veterinario",
    numero: "08",
    label: "Veterinário",
    blurb: "Vermífugo, seringa, brinco, sal mineral e item de manejo.",
    contexto: "O básico do manejo animal, direto na loja, sem rodar atrás de agropecuária.",
    hasPage: false,
    whatsappMessage: "Olá! Vim pelo site e quero saber sobre itens veterinários.",
  },
];

/** Estados atendidos pela linha Garimpo (alcance regional amplo). */
export const REGIONAL_STATES = ["Rondônia", "Amazonas", "Acre", "Mato Grosso"] as const;

/** Raio de atendimento local em metros (~150km ao redor de Ariquemes). */
export const LOCAL_GEO_RADIUS_METERS = 150_000;

/**
 * URL base do site — domínio próprio confirmado 2026-08-23. Com `www`: a
 * configuração real na Vercel (verificada 2026-09-03, testada 3x em produção)
 * é o apex (`lidermaquinaseferramentas.com.br`, sem www) devolvendo 308 pro
 * `www` — o inverso do que se assumiu inicialmente. Usar sempre a versão que
 * serve 200 direto, não a que redireciona, senão canonical/sitemap apontam
 * pra uma URL com um pulo a mais. `NEXT_PUBLIC_SITE_URL` está configurada em
 * produção (Vercel) e em `.env.local` (dev); este valor é só o fallback pra
 * qualquer ambiente onde a env var não estiver setada — não deve mais ser o
 * `.vercel.app` (isso já causou canonical/sitemap/schema apontando pro
 * domínio errado antes de a env var existir, ver auditoria 2026-08-23).
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.lidermaquinaseferramentas.com.br";
