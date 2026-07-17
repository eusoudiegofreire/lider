import type { Metadata } from "next";

import { About } from "@/components/sections/About";
import { CategoryShowcase } from "@/components/sections/CategoryShowcase";
import { ContactCta } from "@/components/sections/ContactCta";
import { Hero } from "@/components/sections/Hero";
import { LocationSection } from "@/components/sections/LocationSection";
import { getHardwareStoreSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Loja em Ariquemes - RO",
  description:
    "Equipamentos para garimpo, ferramentas para produtor rural e ferramentas em geral em Ariquemes-RO. Loja física e atendimento pelo WhatsApp.",
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
      <About />
      <CategoryShowcase />
      <LocationSection />
      <ContactCta />
    </>
  );
}
