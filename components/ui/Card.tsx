import { clsx } from "clsx";
import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  /** Aplica a textura de grid técnico sutil (seção 6 do briefing) atrás do conteúdo. */
  technical?: boolean;
};

export function Card({ technical = false, className, children, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden border border-border bg-card text-card-foreground p-6",
        technical && "bg-grid-technical bg-[length:40px_40px]",
        className,
      )}
      {...props}
    >
      <div className="relative">{children}</div>
    </div>
  );
}
