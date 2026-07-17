import { Badge } from "@/components/ui/Badge";

/**
 * Fallback estático para mobile/`prefers-reduced-motion` (seção 6 do briefing:
 * elemento 3D pesado precisa de fallback estático em telas mais fracas).
 */
export function HeroFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-grid-technical bg-[length:32px_32px]">
      <Badge tone="orange">Líder Máquinas e Ferramentas</Badge>
    </div>
  );
}
