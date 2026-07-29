import { clsx } from "clsx";
import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-lg border border-border bg-card p-6 text-card-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
