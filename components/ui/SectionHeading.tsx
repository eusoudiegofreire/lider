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
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 font-display text-3xl uppercase tracking-wide text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-3 max-w-2xl text-muted-foreground">{description}</p> : null}
    </div>
  );
}
