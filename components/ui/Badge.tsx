import { clsx } from "clsx";
import type { HTMLAttributes } from "react";

type Tone = "brand" | "muted";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: Tone;
};

const tones: Record<Tone, string> = {
  brand: "text-brand",
  muted: "text-muted-foreground",
};

/**
 * Etiqueta mono com borda fina — usa o token semântico `border-border` (não
 * um primitivo fixo) porque o badge aparece tanto em seção clara quanto na
 * seção escura de Garimpo, e `border-border` já resolve pra `steel-light`
 * automaticamente dentro de `.section-dark` (ver app/globals.css).
 */
export function Badge({ tone = "brand", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-sm border border-border px-3 py-1 font-mono text-xs uppercase tracking-[0.08em]",
        tones[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
