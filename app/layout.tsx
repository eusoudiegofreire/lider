import type { Metadata } from "next";
import { Instrument_Sans, Geist_Mono } from "next/font/google";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/layout/WhatsAppFloatingButton";
import { BASE_OPEN_GRAPH, NAP, SITE_URL, TWITTER_CARD } from "@/lib/constants";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  weight: ["500"],
  subsets: ["latin"],
  display: "swap",
});

/**
 * Imagem de Open Graph/Twitter — gerada estaticamente (não via
 * `app/opengraph-image.tsx`/`ImageResponse`) pra manter controle explícito
 * sobre a URL absoluta (via `SITE_URL`) e o card final, ver auditoria de
 * qualidade 2026-09-04. Logo real (`public/logo sem fundo.png`) sobre fundo
 * bordô da marca, 1200x630 (tamanho padrão recomendado por
 * Facebook/WhatsApp/LinkedIn). `BASE_OPEN_GRAPH`/`TWITTER_CARD` ficam
 * centralizados em `lib/constants.ts` — toda página com seu próprio bloco
 * `openGraph` precisa espalhar `...BASE_OPEN_GRAPH` (ver comentário lá, é o
 * merge raso do Next entre segmentos).
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: NAP.name,
    template: `${NAP.name} | %s`,
  },
  description: `Site institucional da ${NAP.name} em ${NAP.address.locality} - ${NAP.address.region}.`,
  openGraph: {
    ...BASE_OPEN_GRAPH,
    url: SITE_URL,
  },
  twitter: TWITTER_CARD,
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${instrumentSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
