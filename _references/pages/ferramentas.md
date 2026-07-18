# SPEC — Ferramentas

Deriva de: `_references/00_BRIEFING_SITE_LIDER_MAQUINAS.md` (seções 1, 3, 5)

## Alcance
**Local** — mesmo raio de ~80–150km de Ariquemes que Produtor Rural/Mecânica/Jardinagem. Mesma lógica: ninguém atravessa estado por uma ferramenta, o jogo é aparecer pra quem está perto.

## SEO
- **H1**: sempre com cidade. Ex: `Ferramentas para Casa e Obra em Ariquemes` (ajustar naming — no bio do Instagram da Líder essa categoria já existe como "Ferramentas" genérica; confirmar se é ferramentas manuais, elétricas, construção civil, ou um mix).
- **`areaServed`**: mesmo `GeoCircle` de 150km usado em Produtor Rural (ver spec produtor-rural.md).
- URL: `/ferramentas`

## Estrutura da página
1. H1 com cidade.
2. Bloco de abertura answer-first: o que a Líder oferece em ferramentas, 2-3 frases.
3. Vitrine de linhas — ferramentas manuais, elétricas, materiais de construção/obra (confirmar escopo exato do catálogo com cliente — é a categoria mais genérica das quatro, vale delimitar bem pra não competir/sobrepor com Mecânica).
4. FAQ (rascunho, ajustar com cliente):
   - "Onde comprar ferramentas em Ariquemes?"
   - "A Líder vende ferramentas elétricas e manuais?"
   - "Quais marcas de ferramentas a Líder trabalha?"
   - "A Líder faz manutenção/assistência de ferramentas elétricas?"
5. CTA de loja física.
6. Schema: `Product`/`ItemList` + `FAQPage`.

## Ponto em aberto
Delimitar escopo exato desta categoria vs. Mecânica (seção 2 do briefing) — evitar página duplicada/competindo pela mesma palavra-chave. Confirmar com cliente o que entra em cada uma.

## Placeholders a confirmar
- [ ] Catálogo real / marcas trabalhadas
- [ ] Fotos de produto reais

## Blog associado
Mesma lógica de Produtor Rural — guias e comparativos com cidade/região no título.

## Critério de "pronto" (Fase 3)
- [x] `npm run build` e `npx tsc --noEmit` sem erro.
- [x] `/ferramentas` com H1 único, bloco answer-first, vitrine (placeholder marcado — catálogo real ainda não confirmado), FAQ em H2, CTA de loja física.
- [x] Nenhum produto, marca ou preço inventado — onde a pergunta do FAQ pede isso, resposta fica marcada como pendente.
- [x] Schema: `Service`/`FAQPage` com `areaServed` via `getAreaServed("local")` (helper da Fase 1). Sem `Product`/`ItemList` fabricado.
- [x] Metadata (title/description) e JSON-LD presentes.
- [x] Header/Footer (já existentes) linkam corretamente pra essa rota (sem mudança necessária, só validar que não quebrou).
