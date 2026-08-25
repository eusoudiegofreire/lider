import type { Metadata } from "next";

import { ContactCta } from "@/components/sections/ContactCta";
import { FrentesDeTrabalho } from "@/components/sections/FrentesDeTrabalho";
import { Hero } from "@/components/sections/Hero";
import { LocationSection } from "@/components/sections/LocationSection";
import { PorQueComprar } from "@/components/sections/PorQueComprar";
import { QuemSomos } from "@/components/sections/QuemSomos";
import { getHardwareStoreSchema } from "@/lib/schema";

/**
 * Título/description exatos de `copy-lider-home.md` §META. `title.absolute`
 * evita que o template do layout raiz (`${NAP.name} | %s`) duplique o nome
 * da marca — o título da Home já vem completo do copy.
 */
export const metadata: Metadata = {
  title: {
    absolute: "Líder Máquinas — Ferramentas e Ferragens em Ariquemes RO",
  },
  description:
    "Ferragens, abrasivos, ferramentas e máquinas em Ariquemes, Rondônia. Garimpo, agro, obra, mecânica e pesca. Loja física com estoque e envio para o Norte.",
  openGraph: {
    title: "Líder Máquinas Ferragens e Abrasivos — Ariquemes, RO",
    description: "Da roça ao garimpo, da obra ao rio. Tudo para quem trabalha pesado em Rondônia.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const schema = getHardwareStoreSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero />
      <FrentesDeTrabalho />
      <PorQueComprar />
      <QuemSomos />
      <LocationSection />
      <ContactCta />
    </>
  );
}
