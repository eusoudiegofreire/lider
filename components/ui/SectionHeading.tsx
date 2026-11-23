import { clsx } from "clsx";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  /** Nível do título. Padrão h2; use "h1" quando o heading é o título principal da página. */
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div className={clsx(align === "center" && "text-center", className)}>
      {eyebrow ? (
        <p className="font-mono text-xs uppercase tracking-[0.08em] text-brand">{eyebrow}</p>
      ) : null}
      <Tag className="mt-2 font-display text-3xl tracking-[-0.02em] text-foreground sm:text-4xl">
        {title}
      </Tag>
      {description ? (
        <p className="mt-3 max-w-[65ch] text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
