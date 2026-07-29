import type { SVGProps } from "react";

/**
 * Ícones de linha das 8 frentes de trabalho (DESIGN.md: "traço técnico 2px,
 * sem preenchimento, sem cor de fundo — nunca ícone arredondado estilo app").
 * Desenhados à mão em vez de importar uma lib de ícone consumer (Lucide,
 * Heroicons) porque o traço "blueprint" pedido no brief não é o estilo
 * dessas libs — e evita adicionar dependência nova a um site que prioriza
 * peso de página (público em 4G fraco).
 */

const iconProps: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function GarimpoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M3 9c0 5 4 9 9 9s9-4 9-9" />
      <path d="M3 9h18" />
      <circle cx="9" cy="13.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="12" cy="15.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="15" cy="13" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ProdutorRuralIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="6.5" cy="17.5" r="2.5" />
      <circle cx="17" cy="18" r="1.6" />
      <path d="M6.5 15V7h6l3 4h3v5.5" />
      <path d="M9 7v3h6" />
    </svg>
  );
}

function FerramentasIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M14.7 6.3a3 3 0 0 0-4 4L4 17l3 3 6.7-6.7a3 3 0 0 0 4-4l-2.2 2.2-2-2Z" />
    </svg>
  );
}

function MecanicaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="9" y="3" width="6" height="6" />
      <path d="M12 9v6" />
      <rect x="7" y="15" width="10" height="6" />
    </svg>
  );
}

function AbrasivosIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="2.5" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI) / 4;
        const x1 = 12 + Math.cos(angle) * 8;
        const y1 = 12 + Math.sin(angle) * 8;
        const x2 = 12 + Math.cos(angle) * 9.5;
        const y2 = 12 + Math.sin(angle) * 9.5;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
    </svg>
  );
}

function PescaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M12 3v11" />
      <path d="M12 14a3 3 0 1 0 3 3" />
      <circle cx="12" cy="3" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function JardinagemIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="6" cy="18" r="2.2" />
      <path d="M7.6 7.5 19 19" />
      <path d="M7.6 16.5 19 5" />
    </svg>
  );
}

function VeterinarioIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M18.5 5.5 20 4" />
      <rect x="10.5" y="9.5" width="9" height="4" rx="0.5" transform="rotate(45 15 11.5)" />
      <path d="M12.5 12.5 4 21" />
      <path d="M9 15l-1.5-1.5M11 13l-1.5-1.5" />
    </svg>
  );
}

export const CATEGORY_ICONS: Record<string, (props: SVGProps<SVGSVGElement>) => React.JSX.Element> = {
  garimpo: GarimpoIcon,
  "produtor-rural": ProdutorRuralIcon,
  ferramentas: FerramentasIcon,
  mecanica: MecanicaIcon,
  abrasivos: AbrasivosIcon,
  pesca: PescaIcon,
  jardinagem: JardinagemIcon,
  veterinario: VeterinarioIcon,
};
