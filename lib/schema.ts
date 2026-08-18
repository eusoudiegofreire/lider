import {
  LOCAL_GEO_RADIUS_METERS,
  NAP,
  OPENING_HOURS,
  REGIONAL_STATES,
  SITE_URL,
  type AreaServedMode,
} from "./constants";
import { getProductImagePath, type Product } from "./products";

type StateAreaServed = { "@type": "State"; name: string };

type GeoCircleAreaServed = {
  "@type": "GeoCircle";
  geoMidpoint: { "@type": "GeoCoordinates"; latitude: number; longitude: number };
  geoRadius: string;
};

/**
 * Devolve o `areaServed` correto para o JSON-LD de uma página, conforme a seção 5
 * do briefing: linha Garimpo usa a lista de estados (alcance regional), as demais
 * categorias usam um GeoCircle de ~150km ao redor de Ariquemes (alcance local).
 */
export function getAreaServed(mode: AreaServedMode): StateAreaServed[] | GeoCircleAreaServed {
  if (mode === "regional") {
    return REGIONAL_STATES.map((name) => ({ "@type": "State" as const, name }));
  }

  return {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: NAP.geo.latitude,
      longitude: NAP.geo.longitude,
    },
    geoRadius: String(LOCAL_GEO_RADIUS_METERS),
  };
}

function buildPostalAddress() {
  return {
    "@type": "PostalAddress" as const,
    streetAddress: NAP.address.street,
    addressLocality: NAP.address.locality,
    addressRegion: NAP.address.region,
    postalCode: NAP.address.postalCode,
    addressCountry: NAP.address.country,
  };
}

/**
 * JSON-LD `HardwareStore` da Home (seção 5 do briefing). `areaServed` usa o
 * modo "local" (GeoCircle) porque é o alcance do negócio como um todo — a
 * página de Garimpo carrega seu próprio `areaServed` regional separadamente.
 */
export function getHardwareStoreSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HardwareStore",
    name: NAP.name,
    address: buildPostalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: NAP.geo.latitude,
      longitude: NAP.geo.longitude,
    },
    areaServed: getAreaServed("local"),
    telephone: NAP.phone,
    openingHoursSpecification: OPENING_HOURS.map((oh) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: oh.dayOfWeek,
      opens: oh.opens,
      closes: oh.closes,
    })),
  };
}

export type FaqItem = { question: string; answer: string };

/**
 * JSON-LD `FAQPage` a partir do mesmo conteúdo exibido na página (Fase 3 —
 * páginas de categoria). As respostas nunca devem conter produto, marca ou
 * preço inventado — isso é responsabilidade de quem monta o array `faqs`.
 */
export function getFaqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * JSON-LD `Service` para uma página de categoria (Garimpo, Produtor Rural,
 * Ferramentas...). Não emite `Product`/`ItemList` porque o catálogo real
 * ainda não foi confirmado pelo cliente (ver
 * `_references/pages/01_PONTOS_EM_ABERTO.md`) e um ItemList exige listar
 * itens reais — quando o catálogo chegar, complementar com um `ItemList` de
 * verdade em vez de expandir este helper com produtos fabricados.
 */
export function getCategoryServiceSchema({
  name,
  mode,
}: {
  name: string;
  mode: AreaServedMode;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name: `${name} — ${NAP.name}`,
    provider: {
      "@type": "HardwareStore",
      name: NAP.name,
      address: buildPostalAddress(),
    },
    areaServed: getAreaServed(mode),
  };
}

/**
 * JSON-LD `ItemList` da vitrine de produtos (`/produtos`) — a página em si já
 * deixa claro no texto que é uma amostra, não o catálogo completo (ver
 * `lib/products.ts`), e o schema segue a mesma regra: sem `offers`/preço/
 * disponibilidade inventados. Cada item é um `Product` com só nome, imagem e
 * a loja como vendedor — dado real, nada fabricado.
 */
export function getProductListSchema(products: Product[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Amostra de produtos — ${NAP.name}`,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        image: `${SITE_URL}${getProductImagePath(product.file)}`,
        brand: {
          "@type": "Organization",
          name: NAP.name,
        },
        seller: {
          "@type": "HardwareStore",
          name: NAP.name,
          address: buildPostalAddress(),
        },
      },
    })),
  };
}
