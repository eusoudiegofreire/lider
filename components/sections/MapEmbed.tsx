"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";

type MapEmbedProps = {
  src: string;
  title: string;
};

/**
 * Facade "clique para carregar": o embed do Google Maps (`?output=embed`)
 * carrega o bundle JS completo do Maps (Places, geometry etc. — ~1,7MB de
 * script de terceiro), o que derrubou o LCP medido no Lighthouse. Só monta o
 * iframe depois de interação do usuário, igual ao padrão usado pra embeds
 * pesados do YouTube.
 */
export function MapEmbed({ src, title }: MapEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-grid-technical bg-[length:32px_32px] p-6 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Mapa interativo</p>
        <Button type="button" variant="secondary" onClick={() => setLoaded(true)}>
          Carregar mapa
        </Button>
      </div>
    );
  }

  return (
    <iframe
      src={src}
      title={title}
      className="h-full w-full border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
