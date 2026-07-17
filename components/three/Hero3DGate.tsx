"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import { HeroFallback } from "./HeroFallback";

const HeroCanvas = dynamic(() => import("./HeroCanvas").then((mod) => mod.HeroCanvas), {
  ssr: false,
  loading: () => <HeroFallback />,
});

/**
 * Decide se o Canvas 3D deve montar: só em viewport >= md e sem
 * `prefers-reduced-motion`. Em qualquer outro caso, mostra o fallback estático
 * — o modelo 3D pesado só entra em telas que aguentam (seção 6 do briefing).
 */
export function Hero3DGate() {
  const [shouldRender3D, setShouldRender3D] = useState(false);

  useEffect(() => {
    const viewportQuery = window.matchMedia("(min-width: 768px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    function evaluate() {
      setShouldRender3D(viewportQuery.matches && !motionQuery.matches);
    }

    evaluate();
    viewportQuery.addEventListener("change", evaluate);
    motionQuery.addEventListener("change", evaluate);

    return () => {
      viewportQuery.removeEventListener("change", evaluate);
      motionQuery.removeEventListener("change", evaluate);
    };
  }, []);

  return shouldRender3D ? <HeroCanvas /> : <HeroFallback />;
}
