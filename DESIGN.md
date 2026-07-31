---
name: Líder Máquinas e Ferramentas
description: Site institucional para loja de máquinas e ferramentas em Ariquemes-RO — a ferramenta como objeto de design de engenharia
colors:
  branco: "#FFFFFF"
  branco-frio: "#F5F5F7"
  tinta: "#0B0B0C"
  tinta-suave: "#6E6E73"
  linha: "#E3E3E6"
  linha-forte: "#94949B"
  vermelho: "#9B1B1E"
  vermelho-vivo: "#C1272D"
typography:
  display:
    fontFamily: "Instrument Sans, sans-serif"
    fontSize: "clamp(3rem, 7vw, 6rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Instrument Sans, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Geist Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  none: "0px"
  sm: "8px"
  md: "12px"
spacing:
  section-desktop: "120px"
  section-mobile: "72px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.vermelho}"
    textColor: "{colors.branco}"
    rounded: "{rounded.sm}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.vermelho-vivo}"
    textColor: "{colors.branco}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.tinta}"
    border: "1px solid {colors.linha-forte}"
    rounded: "{rounded.sm}"
    padding: "14px 28px"
  ficha-tecnica-label:
    fontFamily: "Geist Mono, monospace"
    textColor: "{colors.tinta-suave}"
    textTransform: "uppercase"
---

# Design System: Líder Máquinas e Ferramentas

## 1. Overview

**Creative North Star: "A Ferramenta como Objeto de Design"**

Substitui o sistema anterior ("A Engrenagem e a Chapa" — dark-hero, engrenagem girando no scroll, amarelo de sinalização), rejeitado pelo usuário em 2026-07-28 antes de qualquer commit. A ideia central: os produtos que a Líder vende já são peças de engenharia bem projetadas — uma motosserra, um disco abrasivo, um molinete têm forma, peso e propósito. O erro do varejo de ferragens é fotografar isso empilhado sob luz de lâmpada fria, como commodity. A direção aqui é o oposto: fundo claro, produto grande e sozinho, luz boa, uma **anotação técnica** (linha fina + rótulo mono) apontando o detalhe que justifica a compra. É a mesma gramática visual que uma marca de tecnologia usa para apresentar hardware — aplicada a quem vende furadeira.

Isso não é enfeite: é o argumento de venda (precisão, qualidade, estoque de verdade) transformado em layout, e diferencia a Líder de todo concorrente da região que ainda usa banner azul com preço em amarelo.

A segunda camada, herdada e mantida do sistema anterior, continua valendo: a loja não vende categorias, vende para **frentes de trabalho** (garimpo, roça, obra, oficina, rio, pesca, veterinário, abrasivos). Cada card descreve o que resolve pro cliente em texto corrido, não em ficha de dados — ver "Descrição de card" na seção 5.

**Key Characteristics:**
- Fundo **branco por padrão** em toda a página. Uma única seção escura na home inteira — "Garimpo em destaque" — e ela funciona exatamente porque é rara: é a única frente de trabalho que quebra o raio local (envio pra fora de RO).
- Sem engrenagem, sem amarelo de sinalização. O elemento assinatura é a **anotação técnica**: linha de 1px traçada (`stroke-dashoffset`) do produto até um rótulo mono, uma vez por produto em destaque.
- Vermelho da marca é acento puro — CTA, link, borda de destaque, nunca fundo de bloco grande (teto: 5% da área visível de qualquer viewport).
- Zero sombra (exceção: sombra difusa muito suave sob o produto flutuante do hero, para ele "pousar" no branco). Cantos pequenos (8px), nunca acima de 12px.
- Ícone em traço técnico uniforme (1.5px, sem preenchimento) — nunca ícone arredondado estilo app.

## 2. Colors

Paleta clara derivada do vermelho da logo, com neutros quase-preto/quase-branco (nunca `#000`/`#FFF` puro no texto) e uma única cor de acento.

### Primary
- **Vermelho Líder** (`vermelho`, `#9B1B1E`): CTA primário, link de destaque, borda de ênfase (card Garimpo).
- **Vermelho Vivo** (`vermelho-vivo`, `#C1272D`): hover do botão primário — mais vivo, não mais escuro (lê como "ação em andamento").

### Neutral
- **Branco** (`branco`, `#FFFFFF`): fundo principal de página.
- **Branco Frio** (`branco-frio`, `#F5F5F7`): alternância de seção, fundo de card.
- **Tinta** (`tinta`, `#0B0B0C`): texto principal — quase-preto, nunca cor de fundo de seção comum (reservada à seção Garimpo).
- **Tinta Suave** (`tinta-suave`, `#6E6E73`): texto secundário, legenda.
- **Linha** (`linha`, `#E3E3E6`): divisor decorativo de 1px entre seções e dentro de cards.
- **Linha Forte** (`linha-forte`, `#94949B`, **novo — derivado, não estava no brief original**): borda de campo de formulário, botão secundário e qualquer fronteira interativa. `linha` sozinha mede 1.28:1 contra branco — bonita como divisor decorativo, mas abaixo do mínimo de 3:1 que WCAG exige pra contorno de componente interativo (SC 1.4.11). `linha-forte` foi calculada pra bater exatamente esse piso (2.99:1 → arredondado). Ver regra derivada abaixo.

### Named Rules

**The No-Red-On-Dark Rule.** `vermelho`/`vermelho-vivo` como texto ou borda direto sobre `tinta` (a única seção escura) mede **2.41:1** — falha WCAG mesmo pro limiar de componente (3:1), e falha feio pra texto. Dentro da seção Garimpo, ênfase nunca é cor de marca: é peso/tamanho em `branco`, ou um botão com fundo `branco` sólido e texto `tinta` (contraste 20:1, e efeito de "negativo" que já é o ponto da seção).

**The Divider-Is-Not-a-Boundary Rule.** `linha` (1.28:1 contra `branco`) é estritamente decorativa — separador de seção, borda interna de card. Nunca usar `linha` como borda de input, botão secundário ou qualquer elemento onde o usuário precisa distinguir "isto é clicável/preenchível" — usar `linha-forte` (2.99:1) nesses casos.

**The Body-Text-Passes Rule.** `tinta-suave` sobre `branco` mede **5.06:1** — passa AA pra texto normal (mín. 4.5:1), então pode ser corpo de texto secundário, não só legenda pequena.

## 3. Typography

**Display e corpo:** Instrument Sans — grotesca limpa, leve caráter técnico, não é a Inter que todo site usa. Peso 700 em títulos grandes com tracking negativo (-0.03em), peso 400 no corpo sem tracking. O contraste de escala faz o trabalho de hierarquia: H1 muito grande, corpo discreto (17px).

**Rótulos técnicos:** Geist Mono — só para ficha técnica, medidas, numeração de seção, anotação técnica. Sempre uppercase, tracking positivo (0.08em), tamanho pequeno.

**Proibidas:** Oswald, Bebas Neue, Montserrat, Archivo Expanded (fonte do sistema anterior, descartada junto com a engrenagem).

### Hierarchy
- **Display** (700, `clamp(48px, 7vw, 96px)`, 1.02, tracking -0.03em): H1 único por página.
- **Headline** (600, 1.75rem–2.5rem, 1.1, tracking -0.02em): H2 de seção.
- **Body** (400, 17px, 1.6): parágrafos, largura máxima 65ch.
- **Label** (500, 12px, 1.4, uppercase, tracking 0.08em, Geist Mono): rótulos de ficha técnica, anotação técnica, eyebrows.

### Named Rules
**The Weight-Not-Size Rule.** Hierarquia vem de peso e troca de família (display → mono → corpo), não de tamanho isolado dentro da mesma família.

## 4. Elevation

Sistema flat por doutrina. Única exceção: sombra difusa e suave (`blur` alto, opacidade baixa, sem offset duro) sob o produto flutuante do hero e da seção Garimpo — existe só pra ancorar o objeto recortado no fundo claro, não é decoração de card. Nenhum outro componente usa `box-shadow`. Separação vem de `linha`/`linha-forte` (1px) e contraste `branco` vs `branco-frio`.

## 5. Components

### Buttons
- **Shape:** cantos em `rounded.sm` (8px).
- **Primary:** fundo `vermelho`, texto `branco`. Hover: fundo `vermelho-vivo`.
- **Secondary:** transparente, borda `linha-forte` (1px), texto `tinta`; hover assume `vermelho` na borda/texto.
- **Sobre a seção Garimpo (fundo `tinta`):** botão primário inverte — fundo `branco`, texto `tinta` (nunca fundo `vermelho` nem texto `vermelho`, ver No-Red-On-Dark Rule).

### Descrição de card (substitui a Ficha Técnica em 2026-07-31)
A ficha técnica (`CATEGORIA`/`ATENDE`/`ENVIO`) foi removida do card da home — os campos `ATENDE`/`ENVIO` repetiam "Ariquemes e região"/"Retirada na loja" em quase todos os 8 cards sem agregar informação. No lugar, o card mostra a lista de produtos (`blurb`) seguida de uma frase curta de contexto/uso (`contexto`), como texto corrido — uma descrição de verdade, não uma tabela de dados repetida por card.

A informação estratégica de alcance regional do Garimpo (a única frente que quebra o raio local) não virou ficha em todo card — só o card de Garimpo ganha uma linha extra em mono vermelho (`envioRegional`, ex: "Enviamos para RO, MT, AM e PA"), como diferencial pontual. O schema estruturado (`areaServed` no JSON-LD) é independente disso e continua vindo de `NAP`/`REGIONAL_STATES`, não do texto do card.

### Cards (frente de trabalho)
- **Background:** `branco-frio`.
- **Border:** `linha` (1px) em todos os 8 cards, sem exceção — nenhum card tem estado "ativo" fixo. O vermelho na borda só aparece em `:hover` (`group-hover:border-brand`), Garimpo incluso.
- **Shadow:** nenhuma.
- **Corner radius:** `rounded.sm` (8px) — nunca acima de `rounded.md` (12px).
- **Hover:** só troca de cor de borda (`linha` → `vermelho`). Sem levantar, sem escalar, sem sombra crescendo.
- **Ícone:** traço técnico 1.5px, sem preenchimento, sem fundo colorido.

### Elemento Assinatura — Anotação Técnica
Substitui a engrenagem do sistema anterior. Sobre cada produto em destaque (hero, Garimpo): uma linha de 1px em `linha-forte` (ou `branco`/40% opacidade sobre a seção Garimpo) sai de um ponto do produto até um rótulo Geist Mono uppercase (`PNEU REFORÇADO`, `MOTOR 2 TEMPOS`, `GRÃO 60`). A linha é desenhada via `stroke-dashoffset` quando entra na viewport; o rótulo aparece em seguida (~100-150ms de atraso). Uma ocorrência por produto — não repetir em todo elemento da página, senão vira ruído em vez de assinatura.

**Obrigatório:** respeitar `prefers-reduced-motion` — linha e rótulo aparecem estáticos, sem traçado, mas continuam visíveis.

### Navigation (Header/Footer)
Ambos **claros** — não herdam o padrão dark do sistema anterior. Header: fundo `branco`, borda inferior `linha`, logo em tamanho real (sem chip escuro, já que o fundo já é claro), CTA de WhatsApp como botão primário vermelho. Footer: fundo `branco-frio`, texto `tinta-suave`, divisor `linha` no topo.

## 6. Motion

**Approach:** preciso, não chamativo — motion aqui separa "limpo" de "vazio", mas é sutil por princípio. Quatro momentos, nada além disso:
1. **Anotação técnica** — linha traçada + rótulo com atraso. Único elemento que alguém nota conscientemente.
2. **Entrada dos cards** de frente de trabalho — fade + 12px de subida, escalonado em 60ms, `ease-out`, 300-400ms. Uma vez só, sem repetir ao voltar pro topo.
3. **Produto no hero/Garimpo** — fade + escala de 0.98 → 1, muito discreto.
4. **Botões e cards** — só mudança de cor de borda/fundo, 150ms.

**Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` como padrão único. Sem `linear`, sem bounce, sem spring exagerado.

**Sem:** parallax, contador animado, texto que digita sozinho, elemento fixo girando (isso mata a engrenagem do sistema anterior de vez), carrossel/slider no hero.

## 7. Do's and Don'ts

### Do:
- **Do** manter fundo claro (`branco`/`branco-frio`) em toda seção nova — a seção Garimpo é a única exceção da página inteira.
- **Do** usar `vermelho` só sobre fundo claro — nunca texto/borda direto sobre `tinta`.
- **Do** usar `linha-forte`, não `linha`, em qualquer borda que precise comunicar "isto é interativo" (input, botão secundário).
- **Do** manter zero `box-shadow` fora da sombra difusa sob produto flutuante.
- **Do** respeitar `prefers-reduced-motion` na anotação técnica e em qualquer reveal.

### Don't:
- **Don't** fundo escuro em mais de uma seção.
- **Don't** gradiente colorido, glassmorphism, `backdrop-blur`.
- **Don't** engrenagem ou qualquer loop de rotação automática — motivo do sistema anterior, descartado.
- **Don't** amarelo de sinalização ou qualquer cor fora dos 7 tokens desta paleta.
- **Don't** ícone arredondado estilo app ou preenchido — aqui é traço fino uniforme.
- **Don't** vermelho como fundo de bloco grande (teto 5% da tela).
- **Don't** cantos acima de 12px em qualquer elemento.
- **Don't** carrossel/slider no hero, vídeo de fundo, texto que digita sozinho.

## 8. Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-07-28 | Substituição completa do sistema "Engrenagem e Chapa" (dark-hero, engrenagem no scroll, amarelo de sinalização) pelo sistema "A Ferramenta como Objeto de Design" (branco por padrão, anotação técnica, sem amarelo) | Direção nova entregue pelo usuário via prompt completo, confirmada explicitamente como a versão que prevalece sobre o trabalho não commitado da sessão anterior |
| 2026-07-28 | Header e Footer passam a ser claros (eram dark no sistema anterior) | O novo brief só reserva fundo escuro pra seção Garimpo; manter Header/Footer dark quebraria a regra "uma seção escura na página inteira" |
| 2026-07-28 | Criação do token `linha-forte` (#94949B), não presente no brief original | `linha` (#E3E3E6) mede 1.28:1 contra branco — bonito como divisor decorativo, mas o próprio brief exige "contraste mínimo AA" e WCAG SC 1.4.11 pede 3:1 pra fronteira de componente interativo. Calculado pra bater ~3:1, evita introduzir uma cor fora da paleta pra resolver isso |
| 2026-07-28 | Ficha técnica (mono, `CATEGORIA`/`ATENDE`/`ENVIO`) mantida do sistema anterior | Estrutura de informação já validada pelo usuário nos dois briefs — o que muda é só o peso visual (borda pesada → sem borda própria, vive dentro do card) |
| 2026-07-31 | Ficha técnica removida do card da home; substituída por descrição corrida (`blurb` + `contexto`) + linha `envioRegional` só no card de Garimpo. Borda vermelha vira hover-only em todos os 8 cards, nenhum estado "ativo" fixo | `ATENDE`/`ENVIO` repetiam o mesmo valor em quase todo card sem ajudar o usuário a decidir; borda fixa no Garimpo lia como bug de estado "selecionado" grudado |
