import { clsx } from "clsx";
import type { HTMLAttributes } from "react";

type Tone = "brand" | "steel";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: Tone;
};

const tones: Record<Tone, string> = {
  brand: "text-brand",
  steel: "text-muted-foreground",
};

/**
 * Badge estilo "placa de equipamento": borda sólida cor "steel" (o
 * cinza-aço da engrenagem da logo), sem radius, texto mono uppercase — a
 * "chapa" em si é sempre metal, só o texto varia por `tone`. Usa o token
 * semântico `border-border` (não o primitivo `steel` fixo) porque o badge
 * aparece tanto em seção clara quanto escura, e `steel` puro só bate 2.67:1
 * de contraste sobre `ink` (abaixo do mínimo de 3:1 pra componente de UI) —
 * `border-border` resolve pra `steel-light` automaticamente em `.section-dark`.
 *
 * Revisão de auditoria (impeccable): a versão anterior tinha marcas de
 * "parafuso" só em 2 dos 4 cantos a 70% de opacidade, o que lia como
 * marcação de debug/corte em vez de elemento de marca. Removidas — a borda
 * sólida + mono uppercase já comunica "etiqueta industrial" sem precisar do
 * detalhe extra.
 */
export function Badge({ tone = "brand", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center border border-border px-3 py-1 font-mono text-xs uppercase tracking-widest",
        tones[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
