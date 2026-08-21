# SPEC — Mecânica

Deriva de: `_references/00_BRIEFING_SITE_LIDER_MAQUINAS.md` (seções 1, 2, 3, 5 — ver nota de
correção na seção 2) e `content/blog/mecanica-ariquemes.ts` (fonte de verdade confirmada
com o cliente por áudio, 2026-08-21).

Status: **no ar** — implementada em `app/mecanica/page.tsx`, corrigida em 2026-08-21. A
versão original desta spec (venda de peça automotiva/oficina) estava errada e chegou a
ser publicada antes da correção; este arquivo foi reescrito pra não repetir o erro numa
sessão futura.

## O que "Mecânica" é, de verdade

**Não é venda de peça automotiva.** É **assistência técnica (conserto)**, com duas frentes:

1. **Motores 2 tempos** — roçadeira, motosserra, atomizador.
2. **Ferramenta elétrica de trabalho** — esmerilhadeira, furadeira, serra circular,
   lavadora de alta pressão e afins.

**Não atende** eletrodoméstico comum (ventilador, airfryer etc.) — só ferramenta/máquina
de trabalho.

## Alcance
Local — mesmo raio ~150km de Ariquemes que Produtor Rural/Ferramentas/Jardinagem
(`areaServed` mode `"local"`, GeoCircle de `LOCAL_GEO_RADIUS_METERS` em `lib/constants.ts`).

## SEO
- H1 real, no ar: `Assistência Técnica de Motosserra, Roçadeira e Ferramenta Elétrica em Ariquemes`.
- `areaServed`: GeoCircle 150km (mesmo padrão de `produtor-rural.md`/`jardinagem`).
- URL: `/mecanica`

## Estrutura (no ar)
`CategoryHero` (badge "Alcance local", H1 + bloco answer-first citando as duas frentes de
serviço) → **sem vitrine de produtos** (de propósito — é página de serviço, não de venda,
mostrar produto ali misturaria as duas coisas) → `CategoryFaq` (6 perguntas reais, ver
abaixo) → `CategoryCta` (mensagem e texto de WhatsApp customizados pro contexto de
avaliação de conserto, via props `whatsappMessage`/`message` do componente).

## Schema
`Service` (via `getCategoryServiceSchema`), **não** `Product`/`ItemList` — é serviço de
reparo, não catálogo de produto à venda. `serviceType`/`name` específicos: "Assistência
Técnica de Motosserra, Roçadeira e Ferramenta Elétrica". `FAQPage` a partir do mesmo
array de perguntas exibido na página.

## FAQ (no ar, `FAQ_ITEMS` em `app/mecanica/page.tsx`)
1. Onde fazer assistência técnica de motosserra e ferramenta elétrica em Ariquemes?
2. A Líder atende clientes de cidades vizinhas a Ariquemes?
3. Vocês consertam motosserra e roçadeira?
4. Consertam ferramenta elétrica também?
5. Como funciona o atendimento da assistência técnica?
6. Vale a pena consertar a ferramenta ou comprar outra?

## CTA
Título "Leva pra avaliar" — leva a ferramenta/máquina na loja ou manda o defeito pelo
WhatsApp pra avaliação. Não é CTA de compra.

## Relacionado
- Card "Mecânica" na Home (`FRENTES_DE_TRABALHO` em `lib/constants.ts`) usa a mesma
  descrição de assistência técnica — mantido consistente com esta página.
- `lib/products.ts` tem um produto real "Bateria Moura" categorizado como `"mecanica"`
  (aparece em `/produtos`) — decisão do cliente foi manter essa foto na vitrine geral, mas
  **não** mostrar vitrine de produto nenhuma em `/mecanica` (ver seção "Estrutura" acima).
  Isso não é inconsistência: `/produtos` é amostra geral de itens à venda, `/mecanica` é
  a página do serviço de conserto — são coisas diferentes que só compartilham o nome da
  categoria.
