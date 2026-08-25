"use client";

import { useEffect, useRef, useState } from "react";

type MapEmbedProps = {
  src: string;
  title: string;
};

/**
 * Carrega o iframe do Google Maps sozinho quando a seção entra na viewport
 * (`IntersectionObserver`, mesmo padrão de `components/motion/Reveal.tsx`) —
 * não precisa mais de clique. O embed (`?output=embed`/`/maps/embed?pb=...`)
 * carrega o bundle JS completo do Maps (Places, geometry etc. — ~1,7MB de
 * script de terceiro), o que já derrubou o LCP medido no Lighthouse antes;
 * só montar o iframe perto da viewport preserva isso.
 *
 * `rootMargin: "200px"` dispara a montagem ~200px antes do container ficar
 * visível de verdade, pra o mapa já estar pronto quando o usuário chega —
 * sem salto/espera visível. O placeholder ocupa o mesmo espaço do iframe
 * (`h-full w-full` dentro do wrapper com `aspect-video` já definido pelas 3
 * páginas que usam este componente), então não há CLS na troca.
 */
export function MapEmbed({ src, title }: MapEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || loaded) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [loaded]);

  return (
    <div ref={containerRef} className="h-full w-full">
      {loaded ? (
        <iframe
          src={src}
          title={title}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <div
          aria-hidden="true"
          className="flex h-full w-full flex-col items-center justify-center gap-2 bg-card"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground">
            <path d="M9 20l-6-3V5l6 3m0 12l6-3m-6 3V8m6 9l6 3V6l-6-3m0 15V5m0 0L9 8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Mapa</p>
        </div>
      )}
    </div>
  );
}
