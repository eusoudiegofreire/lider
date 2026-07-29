import { clsx } from "clsx";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={clsx(align === "center" && "text-center", className)}>
      {eyebrow ? (
        <p className="font-mono text-xs uppercase tracking-[0.08em] text-brand">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 font-display text-3xl tracking-[-0.02em] text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-[65ch] text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
