type FichaTecnicaProps = {
  categoria: string;
  atende: string;
  envio: string;
};

/**
 * Bloco "ficha técnica" (DESIGN.md §5) — substitui o badge de área de
 * atendimento. Não é decoração: o rótulo ATENDE carrega a informação de
 * negócio mais importante (Garimpo é multi-estado, as outras 7 frentes são
 * raio local em Ariquemes).
 */
export function FichaTecnica({ categoria, atende, envio }: FichaTecnicaProps) {
  const rows: Array<[string, string]> = [
    ["CATEGORIA", categoria],
    ["ATENDE", atende],
    ["ENVIO", envio],
  ];

  return (
    <dl className="mt-4 space-y-1 font-mono text-xs uppercase tracking-wide">
      {rows.map(([label, value]) => (
        <div key={label} className="flex gap-2">
          <dt className="w-20 shrink-0 text-muted-foreground">{label}</dt>
          <dd className="text-card-foreground">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
