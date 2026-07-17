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
