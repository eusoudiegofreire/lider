# Brand Guidelines — Líder Máquinas e Ferramentas

Fonte da verdade da identidade visual. Deriva do logo oficial (`public/logo-lider.jpg`) e substitui a paleta laranja/DLX usada nas Fases 1-3.

## Logo

- Arquivo: `public/logo-lider.jpg` (150×150, JPG sem alpha, fundo branco embutido).
- Composição: engrenagem (cinza-aço) à esquerda + wordmark "LÍDER MÁQUINAS" (bordô) à direita, dentro de uma "chapa" arredondada.
- **Regra de uso:** nunca recolorir o logo nem aplicar crop circular — o wordmark chega perto da borda direita/inferior do quadro; um crop `rounded-full` corta a palavra "MAQUINAS" (já corrigido no Header nesta sessão anterior).
- Área de proteção mínima: pelo menos a largura do "L" de "LÍDER" em todos os lados.
- Sobre fundo escuro, sempre exibir dentro de um chip/fundo claro (o próprio logo não tem versão para fundo escuro).

## Paleta

### Cores de marca (extraídas do logo)

| Token | Hex | Papel |
|---|---|---|
| `brand` | `#8C292D` | Bordô/oxblood — cor primária, do wordmark da logo |
| `brand-deep` | `#6E1F23` | Hover/pressed de botão primário, texto de ênfase extra |
| `brand-light` | `#A83A3F` | Acentos sutis — **só sobre fundo claro** (ver contraste abaixo) |
| `steel` | `#555868` | Cinza-azulado da engrenagem — cor secundária/neutra de marca |
| `steel-light` | `#7B7F8F` | Variante clara do steel — **usar em vez de `steel` sobre fundo escuro** |
| `steel-dark` | `#3A3D49` | Variante escura — bordas/divisores sobre fundo claro |

### Neutros — variante clara (padrão do site) e escura (hero/rodapé/CTA)

O site deixa de ser dark-mode-first. **Fundo claro é o padrão de toda página; fundo escuro fica restrito a hero, rodapé e faixas de CTA pontuais.**

| Papel | Token claro (padrão) | Token escuro (hero/footer/CTA) |
|---|---|---|
| Fundo de página | `paper` `#F4F1EA` | `ink` `#101211` |
| Fundo de card/painel | `surface-light` `#EAE6DD` *(novo)* | `surface` `#181B19` |
| Texto principal | `ink` `#101211` | `paper` `#F4F1EA` |
| Texto secundário/legenda | `muted` `#6B655C` *(redefinido — antes `#9A948C`)* | `muted-dark` `#B5AFA6` *(novo — antes o site usava `#9A948C` também no escuro, e é isso que causava o parágrafo ilegível)* |

`ink` e `paper` continuam sendo o mesmo par de hex de antes — só invertem qual é "fundo" e qual é "texto" dependendo da seção (clara vs. escura). `muted` é redefinido porque o valor antigo (`#9A948C`) foi calibrado só para uso sobre fundo escuro; sobre o novo fundo claro padrão ele fica com contraste baixo.

## Regras de contraste (WCAG 2.1, calculado — não estimado)

Calculei a razão de contraste real de cada combinação candidata (fórmula de luminância relativa da W3C). AA = 4.5:1 (texto normal) / 3:1 (UI/texto grande). AAA = 7:1 / 4.5:1.

| Combinação | Razão | Resultado |
|---|---|---|
| `ink` texto sobre `paper` fundo (corpo de texto padrão) | 16.67:1 | ✅ AAA |
| `paper` texto sobre `ink` fundo (títulos em seção escura) | 16.67:1 | ✅ AAA |
| `brand` texto sobre `paper` fundo | 7.54:1 | ✅ AAA |
| `brand` texto sobre `ink` fundo | **2.21:1** | ❌ **FALHA** |
| `brand-light` texto sobre `paper` fundo | 5.57:1 | ✅ AA |
| `brand-light` texto sobre `ink` fundo | **2.99:1** | ❌ **FALHA** |
| `paper` texto sobre `brand` fundo (botão primário) | 7.54:1 | ✅ AAA |
| `steel` texto/borda sobre `paper` fundo | 6.24:1 | ✅ AA (AAA como componente de UI) |
| `steel` texto/borda sobre `ink` fundo | **2.67:1** | ❌ **FALHA** |
| `steel-light` borda sobre `ink` fundo | 4.72:1 | ✅ AAA (componente de UI) |
| `steel-dark` borda sobre `paper` fundo | 9.58:1 | ✅ AAA |
| `muted` (novo, `#6B655C`) texto sobre `paper` fundo | 5.11:1 | ✅ AA |
| `muted-dark` (novo, `#B5AFA6`) texto sobre `ink` fundo | 8.64:1 | ✅ AAA |
| ~~`muted` antigo (`#9A948C`) sobre `ink`~~ (bug relatado) | 6.26:1 | ⚠️ AA, mas abaixo de AAA — perceptualmente "lavado" em corpo de texto contínuo, por isso a leitura ruim reportada |

### Regras derivadas (aplicar daqui pra frente)

1. **`brand` e `brand-light` nunca como cor de texto/borda sobre fundo escuro (`ink`/`surface`).** Falha WCAG (2.21:1 e 2.99:1). Sobre `ink`, usar `paper` para texto de ênfase — não existe uma variante de `brand` que funcione sobre fundo escuro nesta paleta.
2. **`steel` (base) nunca como texto/borda sobre fundo escuro** — usar `steel-light` nesse contexto.
3. Sobre fundo claro, `brand`, `brand-deep`, `steel` e `steel-dark` funcionam bem como texto ou borda; `brand-light` só até AA (usar como acento, não como corpo de texto longo).
4. Botão primário: sempre `brand`/`brand-deep` de fundo com **texto `paper`** (nunca `ink` — essa era a falha do botão antes desta sessão, 2.21:1).

## Tipografia (mantida — não fazia parte do problema relatado)

- Display: Barlow Condensed (títulos, uppercase, peso 600-800)
- Corpo: Work Sans
- Mono/acento: IBM Plex Mono (labels, badges, dados técnicos)

## Onde fundo escuro continua permitido

Hero da Home, Rodapé (Footer global) e faixas de CTA final (`ContactCta`/`CategoryCta`). Todo o resto do site (About, vitrines, FAQ, cards de categoria, corpo das páginas de categoria) passa a ser fundo claro por padrão.
