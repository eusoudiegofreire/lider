# FASE 2 — Home

Deriva de: `_references/00_BRIEFING_SITE_LIDER_MAQUINAS.md` (seção 8 — Fase 2, seções 5/6/7) e `_references/pages/home.md` (spec de conteúdo da página).

Este arquivo não existia ainda — criado agora seguindo o mesmo padrão do `01_fase1_fundacao.md`, pra termos um critério de "pronto" concreto no fim da fase.

## Escopo desta fase (ordem de execução)
1. **Hero** — H1 institucional + subheadline answer-first + modelo 3D leve (React Three Fiber) que gira sozinho e reage a mouse/scroll.
2. **Quem é a Líder** — texto institucional curto.
3. **Vitrine de categorias** — cards para Garimpo, Produtor Rural, Ferramentas (categorias de Fase 1 em `lib/constants.ts`).
4. **Localização** — endereço real, mapa incorporado, horário, foto da fachada.
5. **CTA final / rodapé de contato** — WhatsApp + telefone + endereço, antes do Footer global (que já existe desde a Fase 1).

Header e Footer já existem (Fase 1) e são reaproveitados, não recriados.

## Fora de escopo nesta fase
- Transição 3D por categoria (morph do modelo ao passar o mouse no menu) — fica pra uma iteração futura, não faz parte deste lote de 5 seções.
- Páginas de categoria (Garimpo, Produtor Rural, Ferramentas) — os cards da vitrine linkam pra rotas que ainda não existem (Fase 3).
- Conteúdo definitivo de "Quem é a Líder" e foto real da fachada — ver placeholders abaixo.

## Regra de placeholders (reforçada pelo usuário)
NAP em `lib/constants.ts` ainda tem `phone`, `whatsapp` e `hours` como `"[CONFIRMAR]"`. Onde esses campos aparecem na Home (Localização, CTA final) e já apareciam no Header/Footer (Fase 1), o placeholder precisa ficar **visível e claramente marcado na UI** — nunca substituído por um valor inventado. Mesma lógica se aplica a qualquer outro dado que não temos ainda (texto institucional, foto da fachada): marcar como pendente, não inventar.

## Decisões técnicas desta fase
- **Modelo 3D**: sem asset `.glb` real disponível (não fornecido pelo cliente, e não é seguro baixar um modelo de origem desconhecida da internet sem licença clara). Construído **proceduralmente** com primitivas do Three.js (cilindros/caixas formando uma furadeira estilizada), nas cores da paleta (steel/orange) — mantém leve, sem dependência externa de arquivo, e evita o clichê de "ilustração genérica de estoque".
- **Lazy-load + fallback mobile**: o Canvas 3D só monta no client (`next/dynamic`, `ssr: false`) e só em viewport ≥ md e sem `prefers-reduced-motion`; abaixo disso, renderiza um fallback estático (textura de grid + badge), conforme seção 6 do briefing.
- **Mapa**: embed do Google Maps via URL de busca (`?q=...&output=embed`), sem precisar de API key, usando o endereço real do NAP.
- **SEO**: aplicado nesta fase mesmo sem ser Fase 5 explícita no briefing, porque é regra permanente do usuário (aplicar SEO técnico em toda página nova): metadata da Home, JSON-LD `HardwareStore` (reaproveitando `lib/schema.ts`), `sitemap.ts` e `robots.ts` iniciais.

## Critério de "pronto" desta fase
- [ ] `npm run build` e `npx tsc --noEmit` passam sem erro.
- [ ] As 5 seções existem em `app/page.tsx` (ou componentes de seção importados), na ordem: Hero → Quem é a Líder → Vitrine de categorias → Localização → CTA final.
- [ ] Hero renderiza H1 + subheadline via SSR (não depende do JS do 3D pra aparecer) — o texto é o provável elemento de LCP, não o Canvas.
- [ ] Modelo 3D: gira sozinho, reage a mouse (parallax/tilt) e a scroll; carrega via lazy-load client-only; tem fallback estático em mobile/`prefers-reduced-motion`.
- [ ] Vitrine de categorias usa os componentes `Card`/`Badge` já existentes (Fase 1), sem clichê de "3 ícones genéricos centralizados".
- [ ] Localização mostra endereço real, mapa embed funcional, e `[CONFIRMAR]` visível para horário e foto da fachada (não inventados).
- [ ] CTA final usa `getWhatsappHref()` (linka `#` enquanto não confirmado) e mostra telefone como `[CONFIRMAR]` visível.
- [ ] Home tem `metadata` (title 50–60 char, description 120–156 char) e JSON-LD `HardwareStore` com `areaServed` local (via `getAreaServed("local")`).
- [ ] `app/sitemap.ts` e `app/robots.ts` existem e incluem a rota `/`.
- [ ] Lighthouse/PageSpeed local rodado com o 3D carregado — LCP registrado e comentado (meta do briefing: LCP ≤ 2,5s).
- [ ] Repositório com git status limpo ou claramente reportado.
