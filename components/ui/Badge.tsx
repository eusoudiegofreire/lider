import { clsx } from "clsx";
import type { HTMLAttributes } from "react";

type Tone = "orange" | "steel";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: Tone;
};

const tones: Record<Tone, string> = {
  orange: "border-orange text-orange",
  steel: "border-steel text-muted",
};

/**
 * Badge estilo "placa de equipamento": borda quadrada + marcas de parafuso
 * nos cantos (seção 6 do briefing), em vez do badge genérico arredondado.
 */
export function Badge({ tone = "orange", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={clsx(
        "relative inline-flex items-center border px-3 py-1 font-mono text-xs uppercase tracking-widest",
        tones[tone],
        className,
      )}
      {...props}
    >
      <span
        aria-hidden
        className={clsx("absolute -left-[3px] -top-[3px] h-1.5 w-1.5 rounded-full bg-current opacity-70")}
      />
      <span
        aria-hidden
        className={clsx("absolute -bottom-[3px] -right-[3px] h-1.5 w-1.5 rounded-full bg-current opacity-70")}
      />
      {children}
    </span>
  );
}
