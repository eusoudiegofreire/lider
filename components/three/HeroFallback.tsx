import { Badge } from "@/components/ui/Badge";

/**
 * Fallback estático para mobile/`prefers-reduced-motion` — o produto 3D
 * pesado só entra em telas que aguentam (ver `Hero3DGate`).
 */
export function HeroFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-lg border border-divider bg-card">
      <Badge tone="brand">Líder Máquinas e Ferramentas</Badge>
    </div>
  );
}
