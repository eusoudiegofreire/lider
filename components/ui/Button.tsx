import Link from "next/link";
import { clsx } from "clsx";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-display uppercase tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  // texto sempre claro no primário: --color-brand é um vermelho escuro
  // (oxblood), então o texto é sempre `paper`, independente da seção — não
  // "inverte" porque o fundo do botão já é fixo (brand), não a seção.
  primary: "bg-brand text-paper hover:bg-brand-deep",
  // secondary/ghost aparecem tanto em seção clara quanto escura (ex: o botão
  // "Carregar mapa" fica numa seção clara) — usam os tokens semânticos pra
  // herdar a cor certa automaticamente em vez de fixar `text-paper`.
  secondary: "border border-border text-foreground hover:border-brand hover:text-brand",
  ghost: "text-foreground hover:text-brand",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ variant = "primary", size = "md", className, ...props }: ButtonProps) {
  const classes = clsx(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {props.children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {buttonProps.children}
    </button>
  );
}
