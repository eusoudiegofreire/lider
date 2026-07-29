# Brand Guidelines — Líder Máquinas e Ferramentas

Fonte da verdade da identidade visual, junto com `DESIGN.md` (a referência mais completa — este arquivo é o resumo de paleta/contraste). Substitui a paleta "Engrenagem e Chapa" (vermelho oxblood + Archivo Expanded + amarelo de sinalização, dark-hero), descartada em 2026-07-28 antes de qualquer commit, a pedido do usuário.

## Logo

- Arquivo: `public/logo-lider.jpg` (150×150, JPG sem alpha, fundo branco embutido).
- Composição: engrenagem (cinza-aço) à esquerda + wordmark "LÍDER MÁQUINAS" (vermelho) à direita, dentro de uma "chapa" arredondada.
- **Regra de uso:** nunca recolorir o logo nem aplicar crop circular — o wordmark chega perto da borda direita/inferior do quadro.
- Área de proteção mínima: pelo menos a largura do "L" de "LÍDER" em todos os lados.
- **A engrenagem do logo estático permanece** — só o elemento de UI animado (engrenagem girando no scroll) foi removido. O logo em si não muda.
- Header agora é claro (fundo `branco`), então o logo aparece direto, sem chip escuro.

## Paleta

### Cores de marca

| Token | Hex | Papel |
|---|---|---|
| `vermelho` | `#9B1B1E` | Vermelho oxblood — cor de acento, CTA, link, borda de destaque |
| `vermelho-vivo` | `#C1272D` | Hover/estado ativo do botão primário |

### Neutros

| Token | Hex | Papel |
|---|---|---|
| `branco` | `#FFFFFF` | Fundo principal de página |
| `branco-frio` | `#F5F5F7` | Alternância de seção, fundo de card |
| `tinta` | `#0B0B0C` | Texto principal / fundo da única seção escura (Garimpo) |
| `tinta-suave` | `#6E6E73` | Texto secundário, legenda |
| `linha` | `#E3E3E6` | Divisor decorativo 1px (não usar como borda interativa) |
| `linha-forte` | `#94949B` | Borda de input, botão secundário, qualquer fronteira interativa |

## Regras de contraste (WCAG 2.1, calculado)

AA = 4.5:1 (texto normal) / 3:1 (UI/texto grande/fronteira de componente). AAA = 7:1 / 4.5:1.

| Combinação | Razão | Resultado |
|---|---|---|
| `tinta` texto sobre `branco` fundo | ~19.6:1 | ✅ AAA |
| `tinta-suave` texto sobre `branco` fundo | 5.06:1 | ✅ AA (texto normal) |
| `vermelho` texto sobre `branco` fundo | 8.17:1 | ✅ AAA |
| `branco` texto sobre `vermelho` fundo (botão primário) | 8.17:1 | ✅ AAA |
| `branco` texto sobre `vermelho-vivo` fundo (hover) | 5.84:1 | ✅ AA |
| `vermelho` texto/borda sobre `tinta` fundo | **2.41:1** | ❌ **FALHA** |
| `branco` texto sobre `tinta` fundo (seção Garimpo) | ~19.6:1 | ✅ AAA |
| `linha` (#E3E3E6) sobre `branco` | 1.28:1 | Decorativo apenas — não é fronteira de componente |
| `linha-forte` (#94949B) sobre `branco` | ~2.99:1 | ✅ Bate o piso de 3:1 pra fronteira interativa (SC 1.4.11) |

### Regras derivadas

1. **`vermelho`/`vermelho-vivo` nunca como texto/borda sobre `tinta`.** Falha WCAG mesmo pro limiar de componente (2.41:1 < 3:1). Na seção Garimpo, ênfase é sempre `branco` (peso/tamanho) ou botão com fundo `branco` sólido/texto `tinta` — nunca vermelho em cima de preto.
2. **`linha` é decorativa, não interativa.** Pra input, botão secundário, qualquer elemento onde o usuário precisa identificar "isto é clicável", usar `linha-forte`.
3. **`tinta-suave` pode ser corpo de texto secundário**, não só legenda pequena — passa AA pra texto normal (5.06:1).
4. Botão primário: fundo `vermelho`/`vermelho-vivo`, texto sempre `branco`.

## Tipografia

- Display + corpo: Instrument Sans (700/-0.03em em títulos grandes, 400 no corpo de 17px) — troca o Archivo Expanded/Inter Tight do sistema anterior.
- Mono/rótulo: Geist Mono (ficha técnica, anotação técnica, labels) — troca o IBM Plex Mono do sistema anterior (função idêntica, fonte trocada por decisão do novo brief).

## Onde fundo escuro é permitido

**Só a seção "Garimpo em destaque".** Diferente do sistema anterior (que também tinha Hero, Rodapé e faixas de CTA em dark) — agora Header, Footer, Hero e CTAs são todos claros. Uma seção escura na página inteira, e ela significa alguma coisa: é a única frente de trabalho que quebra o raio local de atendimento.
