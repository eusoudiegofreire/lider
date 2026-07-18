# Pontos em aberto — confirmar com o cliente (Líder Máquinas e Ferramentas) antes de fechar o conteúdo final

Consolidado a partir das specs individuais em `_references/pages/`. Atualizar este arquivo conforme as respostas chegarem — ele é o checklist que desbloqueia o texto final de cada página.

## Bloqueia conteúdo — prioridade alta
- [x] **Garimpo — atendimento fora de RO**: confirmado em 2026-07-18 — a Líder despacha equipamento de garimpo pra fora de Rondônia (Amazonas, Acre, Mato Grosso e região), frete e pagamento combinados por WhatsApp. CTA e FAQ de `/garimpo` atualizados, TODOs removidos do código.
- [x] **NAP oficial**: confirmado em 2026-07-18 — endereço, telefone, WhatsApp e horário reais em `lib/constants.ts` (ver seção "NAP confirmado" abaixo). Todo `"[CONFIRMAR]"` ligado a esses campos foi removido do código (Header, Footer, Localização, CTAs).
- [ ] **Fotos reais**: fachada, interior da loja, e (conforme combinado em 2026-07-18) fotos de **alguns produtos representativos por categoria** — não precisa ser o catálogo completo. Ainda sem esse material.
- [ ] **Catálogo real por categoria**: linhas de produto específicas de Garimpo, Produtor Rural, Ferramentas (e Mecânica/Jardinagem se entrarem). Continua como placeholder em `ProductLineupPlaceholder.tsx`.

## NAP confirmado (2026-07-18)
- Endereço: Av. Capitão Sílvio, Áreas Especiais 01, Ariquemes - RO, 76870-020
- Telefone comercial: (69) 3536-4929
- WhatsApp (vendedor, CTA principal do site): +55 69 99317-9347
- Horário: Seg a Sex 07:30–18:00 · Sáb 07:30–12:00 · Dom fechado
- **Nota:** as coordenadas `NAP.geo` (usadas no mapa embed e no `GeoCircle` do schema) continuam sendo o ponto aproximado de Ariquemes já usado desde a Fase 1 — não foram recalculadas pro endereço novo ("Áreas Especiais 01"). Vale conferir/ajustar se a precisão do pino no mapa importar.

## Decisões de escopo
- [ ] Mecânica e Jardinagem entram na Fase 1 (junto com Garimpo/Produtor Rural/Ferramentas) ou ficam para uma Fase 2? (briefing seção 2 trata como opcional)
- [ ] Delimitar escopo exato de "Ferramentas" vs. "Mecânica" pra não competir pela mesma palavra-chave (ver `ferramentas.md`)
- [ ] Formato do formulário de contato: n8n (webhook) ou API route própria + destino final do lead (ver `contato.md`)
- [ ] Nota/quantidade de avaliações do Google Meu Negócio, se for usar `aggregateRating` no schema

## Confirmação de stack (seção 7 do briefing, assumida a partir do padrão de trabalho do Diego)
- [x] Next.js (App Router) + Vercel + GitHub + Tailwind confirmado no setup da Fase 1. React Three Fiber usado sem `drei` (bundle mais enxuto); Framer Motion ainda não entrou (só chega nas páginas de categoria, Fase 3).
- [ ] **Domínio definitivo**: `lib/constants.ts` usa `SITE_URL` com fallback `https://lider-maquinas.vercel.app` (padrão de deploy da Vercel) até o domínio real ser definido — usado em `metadataBase`, `sitemap.ts`, `robots.ts`, canonical. Atualizar quando o domínio for comprado/confirmado.

## Fase 2 (Home) — decisões tomadas
- **Modelo 3D**: sem asset `.glb` fornecido, então o modelo é uma furadeira estilizada construída com primitivas do Three.js (não é uma ilustração de estoque nem um arquivo baixado de origem desconhecida). Se o cliente tiver preferência por uma ferramenta específica (picareta, motosserra) ou um modelo 3D real depois, dá pra trocar sem mexer na arquitetura (Hero3DGate/HeroCanvas).
- **Mapa**: trocado de iframe direto para padrão "clique para carregar" (`components/sections/MapEmbed.tsx`) — o embed do Google Maps carrega ~1,7MB de JS de terceiro (Places, geometry etc.) mesmo sem API key, o que derrubava o LCP medido no Lighthouse. Agora só carrega após clique do usuário.
- **Texto institucional "Quem é a Líder"**: ainda não escrito — a seção existe na Home, mas mostra um bloco claramente marcado `[CONFIRMAR COM O CLIENTE]` em vez de texto inventado. Continua pendente.

## Fase 3 (páginas de categoria) — status
- **`app/garimpo/page.tsx`**: os `TODO(pendencia-cliente)` foram removidos em 2026-07-18 — atendimento fora de RO confirmado (ver "NAP confirmado" acima). CTA e FAQ de entrega atualizados pra informar o despacho, sem detalhar valores/prazos (não definidos ainda).
- **As 3 páginas** (`/ferramentas`, `/produtor-rural`, `/garimpo`) continuam usando `components/sections/category/ProductLineupPlaceholder.tsx` — vitrine com 3 slots marcados `[CONFIRMAR COM O CLIENTE]`, sem produto/marca inventados. Trocar por `ItemList` real no schema (`lib/schema.ts`) quando o catálogo (ou as fotos de produtos representativos) chegar.
- FAQ de cada página: perguntas que pediam recomendação de produto específico ou marca seguem com resposta genérica "fale com a loja" — isso não muda até o catálogo ser confirmado.

---
**Único bloqueio real restante:** catálogo de produtos e fotos (fachada, interior, produtos representativos por categoria). Tudo relacionado a NAP e à política de entrega do Garimpo já está confirmado e implementado.

**Próximo passo depois de resolver isso:** Fase 4 — Blog (estrutura de listagem + posts) e Fase 5 — SEO técnico final (Search Console, GMB). Mecânica/Jardinagem seguem fora de escopo até decisão do cliente (ver "Decisões de escopo" acima).
