import { LOCAL_GEO_RADIUS_METERS, NAP, REGIONAL_STATES, type AreaServedMode } from "./constants";

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

/**
 * JSON-LD `HardwareStore` da Home (seção 5 do briefing). `areaServed` usa o
 * modo "local" (GeoCircle) porque é o alcance do negócio como um todo — a
 * página de Garimpo carrega seu próprio `areaServed` regional separadamente.
 *
 * Campos ainda não confirmados (telefone, horário) ficam de fora do JSON-LD
 * em vez de publicar "[CONFIRMAR]" para os crawlers — o placeholder continua
 * visível na UI (Header/Footer/Localização), só não vai pro dado estruturado.
 */
export function getHardwareStoreSchema() {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HardwareStore",
    name: NAP.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.address.street,
      addressLocality: NAP.address.locality,
      addressRegion: NAP.address.region,
      postalCode: NAP.address.postalCode,
      addressCountry: NAP.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: NAP.geo.latitude,
      longitude: NAP.geo.longitude,
    },
    areaServed: getAreaServed("local"),
  };

  if (NAP.phone !== "[CONFIRMAR]") schema.telephone = NAP.phone;
  if (NAP.hours !== "[CONFIRMAR]") schema.openingHours = NAP.hours;

  return schema;
}
