import type { Metadata } from "next";
import { Barlow_Condensed, Work_Sans, IBM_Plex_Mono } from "next/font/google";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NAP, SITE_URL } from "@/lib/constants";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  weight: ["600", "700", "800"],
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: NAP.name,
    template: `${NAP.name} | %s`,
  },
  description: `Site institucional da ${NAP.name} em ${NAP.address.locality} - ${NAP.address.region}.`,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: NAP.name,
    url: SITE_URL,
  },
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
      className={`${barlowCondensed.variable} ${workSans.variable} ${ibmPlexMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
