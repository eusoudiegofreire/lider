import { clsx } from "clsx";
import type { HTMLAttributes } from "react";

type Tone = "brand" | "steel";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: Tone;
};

const tones: Record<Tone, string> = {
  brand: "text-brand",
  steel: "text-muted",
};

/**
 * Badge estilo "placa de equipamento": a placa em si (borda + marcas de
 * parafuso nos cantos) é sempre cor steel — o cinza-aço da engrenagem da
 * logo, como se fosse metal de verdade — e só o texto varia por `tone`
 * (brand = destaque, steel = informação secundária).
 */
export function Badge({ tone = "brand", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={clsx(
        "relative inline-flex items-center border border-steel px-3 py-1 font-mono text-xs uppercase tracking-widest",
        tones[tone],
        className,
      )}
      {...props}
    >
      <span aria-hidden className="absolute -left-[3px] -top-[3px] h-1.5 w-1.5 rounded-full bg-steel opacity-70" />
      <span aria-hidden className="absolute -bottom-[3px] -right-[3px] h-1.5 w-1.5 rounded-full bg-steel opacity-70" />
      {children}
    </span>
  );
}
