# SPEC — Produtor Rural

Deriva de: `_references/00_BRIEFING_SITE_LIDER_MAQUINAS.md` (seções 1, 3, 5)

## Alcance
**Local** — raio de ~80 a 150km de Ariquemes (Rio Crespo, Cujubim, Monte Negro, Buritis, Machadinho, Jaru, Ouro Preto do Oeste etc.). A concorrência aqui é outra loja física da região, não um concorrente de outro estado.

## SEO
- **H1**: sempre com cidade. Ex: `Ferramentas para Produtor Rural em Ariquemes`.
- **`areaServed`** (schema `Product`/`ItemList` desta página):
```json
"areaServed": {
  "@type": "GeoCircle",
  "geoMidpoint": {"@type": "GeoCoordinates", "latitude": -9.9133, "longitude": -63.0419},
  "geoRadius": "150000"
}
```
- Complementar no texto da página citando as cidades do raio (ajuda SEO e leitura humana) — ver lista acima.
- URL: `/produtor-rural`

## Estrutura da página (esqueleto seção 3 do briefing)
1. H1 com cidade (acima).
2. Bloco de abertura answer-first: o que a Líder oferece para produtor rural, direto, 2-3 frases.
3. Vitrine de produtos/linhas — roçadeiras, motobombas de irrigação, implementos agrícolas, EPIs de campo etc. (confirmar catálogo real com cliente).
4. FAQ (rascunho, ajustar com cliente):
   - "Onde comprar ferramentas para produtor rural em Ariquemes?"
   - "A Líder atende produtores de cidades vizinhas a Ariquemes?"
   - "Qual roçadeira é mais indicada para propriedade rural pequena?"
   - "A Líder vende peças de reposição para implementos agrícolas?"
5. CTA de loja física — endereço, WhatsApp, "venha conferir pessoalmente" (sem componente de frete/fora do estado, diferente da página de Garimpo).
6. Schema: `Product`/`ItemList` + `FAQPage`.

## Placeholders a confirmar
- [ ] Catálogo real de linhas de produto para produtor rural
- [ ] Fotos de produto reais

## Blog associado
Guias de escolha e manutenção, comparativos, sempre com cidade/região no título ou H2 (ex: "Roçadeira elétrica x a gasolina: qual vale mais a pena", "Onde comprar ferramentas para produtor rural em Ariquemes").

## Critério de "pronto" (Fase 3)
- [ ] `npm run build` e `npx tsc --noEmit` sem erro.
- [ ] `/produtor-rural` com H1 único (com "Ariquemes"), bloco answer-first citando as cidades do raio, vitrine (placeholder marcado), FAQ em H2, CTA de loja física sem menção a frete/fora do estado.
- [ ] Nenhum produto, marca ou preço inventado.
- [ ] Schema: `Service`/`FAQPage` com `areaServed` via `getAreaServed("local")`.
- [ ] Metadata (title/description) e JSON-LD presentes.
