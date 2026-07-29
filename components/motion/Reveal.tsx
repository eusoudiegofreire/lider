"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Índice do item numa lista escalonada — cada item atrasa ~70ms a mais (DESIGN.md §6). */
  index?: number;
  className?: string;
};

/**
 * Revelação de card ao entrar na viewport (DESIGN.md §6, motion 2/3): fade +
 * 8px de subida, escalonado, 250ms. `motion-reduce:` (Tailwind, mapeia
 * `prefers-reduced-motion: reduce`) zera a transição via CSS — não precisa de
 * `matchMedia` em JS, o elemento só aparece sem animação.
 */
export function Reveal({ children, index = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`motion-reduce:opacity-100! motion-reduce:translate-y-0! transition-all duration-300 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      } ${className ?? ""}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      {children}
    </div>
  );
}
