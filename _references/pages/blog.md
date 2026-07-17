# SPEC — Blog

Deriva de: `_references/00_BRIEFING_SITE_LIDER_MAQUINAS.md` (seção 4, 8 — Fase 4)

## Objetivo
Conteúdo educativo Q&A, answer-first, específico o bastante pra ser citado por IA (ChatGPT, Gemini, AI Overviews) e ranquear no Google — dividido em duas linhas editoriais conforme o alcance geográfico (ver seção 1 do briefing).

## Estrutura técnica
1. **Listagem** (`/blog`): grid de posts, filtro por categoria (Garimpo vs. demais linhas), cada card com título, data, categoria, imagem.
2. **Página de post** (`/blog/[slug]`): H1 = tema, H2s = perguntas reais que a pessoa digitaria no Google. Primeira frase depois de cada H2 = resposta direta (answer-first), parágrafos de contexto depois. Listas/tabelas sempre que houver comparação.
3. Schema `Article`/`BlogPosting` por post + `BreadcrumbList`.
4. Sitemap deve incluir todas as rotas de post dinamicamente (ver `feedback_seo_pages` — sitemap.ts com todas as rotas públicas).

## Duas linhas editoriais (seção 1 e 4 do briefing)
**Linha Garimpo** (alcance RO/AM/AC/MT):
- Guias de escolha: "Como escolher uma bateia de garimpo", "Equipamento essencial pra começar no garimpo"
- Conteúdo que capta busca de fora do estado: "Onde comprar equipamento de garimpo em Rondônia", "Equipamento de garimpo para quem vem do Amazonas/Acre/Mato Grosso"
- Não amarrar toda frase a "Ariquemes" — a cidade fica na página de contato/localização.
- CTA suave no fim considerando menção a atendimento à distância **apenas se confirmado o ponto em aberto da spec `garimpo.md`**.

**Linha demais categorias** (alcance local ~80-150km):
- Guias de escolha e manutenção: "Como escolher uma motosserra", "Como afiar a corrente da motosserra em casa"
- Comparativos: "Roçadeira elétrica x a gasolina: qual vale mais a pena"
- Sempre com cidade/região no título ou H2 quando fizer sentido.

## Cadência sugerida
1 artigo por semana, alternando entre as duas linhas (seção 4 do briefing).

## Primeiros 3-5 artigos (Fase 4 do plano — seção 8)
A decidir com o cliente — sugestão inicial (2 Garimpo + 3 locais), mas confirmar antes de escrever:
- [ ] "Como escolher uma bateia de garimpo" (Garimpo)
- [ ] "Onde comprar equipamento de garimpo em Rondônia" (Garimpo)
- [ ] "Como escolher uma motosserra" (local)
- [ ] "Roçadeira elétrica x a gasolina: qual vale mais a pena" (local)
- [ ] "Onde comprar ferramentas para produtor rural em Ariquemes" (local)
