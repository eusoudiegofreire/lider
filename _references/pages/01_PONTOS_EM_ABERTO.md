# Pontos em aberto — confirmar com o cliente (Líder Máquinas e Ferramentas) antes de fechar o conteúdo final

Consolidado a partir das specs individuais em `_references/pages/`. Atualizar este arquivo conforme as respostas chegarem — ele é o checklist que desbloqueia o texto final de cada página.

## Bloqueia conteúdo — prioridade alta
- [ ] **Garimpo — atendimento fora de RO**: a Líder despacha/vende à distância para Amazonas, Acre e Mato Grosso, ou é sempre presencial mesmo pra quem vem de longe? Define CTA, FAQ de frete e ângulo do blog da linha Garimpo. (ver `garimpo.md`)
- [ ] **NAP oficial**: telefone/WhatsApp definitivo, horário de funcionamento exato (assumido Seg-Sáb 08:00-18:00 no briefing). Precisa ser idêntico em site, Google Meu Negócio e redes sociais.
- [ ] **Fotos reais**: fachada, interior da loja, produtos por categoria. Briefing marca isso como prioridade antes do lançamento — o design depende de fotografia real, não ilustração genérica (seção 6).
- [ ] **Catálogo real por categoria**: linhas de produto específicas de Garimpo, Produtor Rural, Ferramentas (e Mecânica/Jardinagem se entrarem).

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
- **Texto institucional "Quem é a Líder"**: ainda não escrito — a seção existe na Home, mas mostra um bloco claramente marcado `[CONFIRMAR COM O CLIENTE]` em vez de texto inventado.

## Fase 3 (páginas de categoria) — o que ficou marcado no código esperando confirmação
- **`app/garimpo/page.tsx`**: comentário `TODO(pendencia-cliente)` acima do array `FAQ_ITEMS` e outro acima do `<CategoryCta>`, apontando pro ponto em aberto de atendimento fora de RO. CTA e a resposta da FAQ de entrega estão com texto neutro ("Fale conosco pra saber sobre entrega pra sua região") até a confirmação chegar.
- **As 3 páginas** (`/ferramentas`, `/produtor-rural`, `/garimpo`) usam `components/sections/category/ProductLineupPlaceholder.tsx` — vitrine com 3 slots marcados `[CONFIRMAR COM O CLIENTE]` em vez de produto/marca inventados. Trocar por `ItemList` real no schema (`lib/schema.ts`) quando o catálogo chegar.
- FAQ de cada página: perguntas que pediam recomendação de produto específico, marca ou forma de pagamento à distância ficaram com resposta genérica "fale com a loja" em vez de resposta inventada.

---
**Próximo passo depois de resolver isso:** Fase 4 — Blog (estrutura de listagem + posts) e Fase 5 — SEO técnico final (Search Console, GMB). Mecânica/Jardinagem seguem fora de escopo até decisão do cliente (ver "Decisões de escopo" acima).
