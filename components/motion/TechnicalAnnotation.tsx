"use client";

import { useEffect, useRef, useState } from "react";

type Point = { x: number; y: number };

type TechnicalAnnotationProps = {
  /** Rótulo mono (ex: "MOTOR SEM ESCOVA", "GRÃO 60"). */
  label: string;
  /** Ponto de partida, perto do produto, em % do container relativo. */
  from: Point;
  /** Ponto de chegada, onde o rótulo aparece, em % do container relativo. */
  to: Point;
  /** `dark` = sobre a seção Garimpo (fundo `tinta`), `light` = resto do site. */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Elemento assinatura (DESIGN.md §5) — substitui a engrenagem do sistema
 * anterior. Linha de 1px desenhada via `stroke-dashoffset` quando o produto
 * entra na viewport, seguida do rótulo mono. Uma ocorrência por produto —
 * repetir em todo elemento da página vira ruído, não assinatura.
 *
 * `prefers-reduced-motion`: pula a animação e mostra linha/rótulo estáticos,
 * mas continuam visíveis (não é um elemento puramente decorativo — a linha
 * aponta o detalhe que justifica a compra).
 */
export function TechnicalAnnotation({
  label,
  from,
  to,
  tone = "light",
  className,
}: TechnicalAnnotationProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  // Lido uma vez, na inicialização preguiçosa do state — não dentro de um
  // efeito, pra não disparar setState síncrono no mount (react-hooks/set-state-in-effect).
  const [instant] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [visible, setVisible] = useState(instant);

  useEffect(() => {
    if (instant) return;

    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [instant]);

  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const length = Math.hypot(dx, dy) * 5; // aproximação em "unidades de % de container", suficiente pro dash

  const lineColor = tone === "dark" ? "rgba(255,255,255,0.5)" : "var(--color-steel)";
  const labelClass = tone === "dark" ? "text-paper/80" : "text-muted-foreground";

  // Ancora o rótulo pro lado oposto de onde a linha "chega" — evita que texto
  // longo estoure a borda direita em telas estreitas (a linha quase sempre
  // aponta pra um canto, então o rótulo cresce pro lado com mais espaço).
  const anchorRight = to.x > 55;

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className ?? ""}`}
    >
      <svg className="absolute inset-0 h-full w-full overflow-visible">
        <circle cx={`${from.x}%`} cy={`${from.y}%`} r="2.5" fill={lineColor} />
        <line
          x1={`${from.x}%`}
          y1={`${from.y}%`}
          x2={`${to.x}%`}
          y2={`${to.y}%`}
          stroke={lineColor}
          strokeWidth={1}
          style={{
            strokeDasharray: length,
            strokeDashoffset: visible ? 0 : length,
            transition: instant ? "none" : "stroke-dashoffset 500ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
      </svg>
      <span
        className={`absolute max-w-[42%] font-mono text-[10px] uppercase leading-snug tracking-[0.08em] sm:text-[11px] ${labelClass}`}
        style={{
          [anchorRight ? "right" : "left"]: `${anchorRight ? 100 - to.x : to.x}%`,
          top: `${to.y}%`,
          textAlign: anchorRight ? "right" : "left",
          transform: `translate(${anchorRight ? "-10px" : "10px"}, -50%)`,
          opacity: visible ? 1 : 0,
          transition: instant ? "none" : "opacity 300ms cubic-bezier(0.22, 1, 0.36, 1) 450ms",
        }}
      >
        {label}
      </span>
    </div>
  );
}
