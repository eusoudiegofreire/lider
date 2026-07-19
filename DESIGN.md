---
name: Líder Máquinas e Ferramentas
description: Site institucional industrial para loja de máquinas e ferramentas em Ariquemes-RO
colors:
  brand: "#8c292d"
  brand-deep: "#6e1f23"
  brand-light: "#a83a3f"
  steel: "#555868"
  steel-light: "#7b7f8f"
  steel-dark: "#3a3d49"
  paper: "#f4f1ea"
  ink: "#101211"
  cloud: "#eae6dd"
  charcoal: "#181b19"
  stone: "#6b655c"
  stone-dark: "#b5afa6"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.02em"
  body:
    fontFamily: "Work Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.2em"
rounded:
  none: "0px"
  sm: "2px"
  md: "6px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.brand-deep}"
    textColor: "{colors.paper}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  badge:
    backgroundColor: "transparent"
    textColor: "{colors.brand}"
    rounded: "{rounded.sm}"
    padding: "4px 12px"
---

# Design System: Líder Máquinas e Ferramentas

## 1. Overview

**Creative North Star: "A Placa de Equipamento"**

O sistema parte de uma chapa de identificação de máquina industrial: metal (steel), tinta estampada (brand/bordô) e a superfície onde ela é aparafusada — que, numa oficina de verdade, é clara (parede, bancada, papel de manual), não um painel escuro de dashboard. A versão anterior deste sistema tratava o site inteiro como um "painel escuro" — bonito, mas mais perto de ferramenta de SaaS do que de loja física. Esta revisão corrige isso: **fundo claro é a bancada onde tudo acontece; fundo escuro é reservado às poucas peças que fazem sentido serem de metal escuro** (o hero, o rodapé, uma faixa de CTA).

O sistema rejeita explicitamente (ver PRODUCT.md): hero com gradiente roxo-azul e blob decorativo, cards com sombra suave e ícone genérico centralizado, glassmorphism sem motivo, tipografia default sem hierarquia. Nada aqui deve parecer "template de SaaS" — deve parecer que foi desenhado por quem entende de ferramenta.

**Key Characteristics:**
- Fundo claro (papel) como padrão; fundo escuro (tinta/metal) só em hero, rodapé e CTA
- Tipografia condensada e pesada pra títulos, contrastando com corpo de texto neutro
- Zero sombra — profundidade vem de borda e contraste de fundo, nunca de `box-shadow`
- Cantos retos ou quase retos (radius mínimo) — nada de `rounded-2xl` suave de app consumer
- Cor de marca (bordô) usada com moderação — é tinta estampada numa chapa, não o fundo de tudo

## 2. Colors

A paleta é **Restrained com um acento Committed pontual**: neutros dominam a leitura (papel/tinta), o bordô aparece só onde precisa puxar o olho (CTA, links, ênfase) — nunca como cor de fundo de seção inteira.

### Primary
- **Bordô Industrial** (#8c292d): cor de marca — botão primário, links de destaque, badges de ênfase. Extraída do wordmark do logo. **Nunca usada como texto sobre fundo escuro** (falha WCAG, 2.21:1 — ver regra abaixo).
- **Bordô Profundo** (#6e1f23): hover/pressed do botão primário, texto de ênfase forte sobre papel.
- **Bordô Claro** (#a83a3f): acento sutil, só sobre fundo claro, só até AA (5.57:1) — não usar em corpo de texto longo.

### Secondary
- **Cinza-Aço** (#555868): cor secundária de marca — extraída da engrenagem do logo. Borda/detalhe padrão em seção clara.
- **Cinza-Aço Claro** (#7b7f8f): mesma família, versão que funciona sobre fundo escuro (4.72:1) — usar em vez do steel base dentro de `.section-dark`.
- **Cinza-Aço Escuro** (#3a3d49): versão mais definida, bordas/divisores de maior contraste sobre papel.

### Neutral
- **Papel** (#f4f1ea): fundo padrão de página (novo default) / cor de texto dentro de seções escuras.
- **Tinta** (#101211): cor de texto padrão sobre papel / fundo das seções escuras (hero, rodapé, CTA).
- **Nuvem** (#eae6dd): fundo de card/painel em seção clara — um degrau abaixo do papel, não branco puro.
- **Carvão** (#181b19): fundo de card/painel dentro de seção escura.
- **Pedra** (#6b655c): texto secundário/legenda sobre fundo claro (5.11:1 AA).
- **Pedra Clara** (#b5afa6): texto secundário sobre fundo escuro (8.64:1 AAA) — substitui o cinza antigo (#9a948c, que só batia 6.26:1 e ficava "lavado" em parágrafo longo).

### Named Rules
**The No-Brand-On-Dark Rule.** Bordô (`brand`/`brand-light`) nunca é cor de texto ou borda direto sobre `ink`/`charcoal`. Não existe uma variante de bordô que passe contraste sobre fundo escuro nesta paleta — dentro de seção escura, ênfase é feita com `paper` (peso/tamanho), não com cor de marca.

**The Light-By-Default Rule.** Toda seção nasce clara (`background`/`foreground` = papel/tinta). Só entra fundo escuro (`.section-dark`) em hero, rodapé, e uma eventual faixa de CTA — nunca como default de página inteira.

## 3. Typography

**Display Font:** Barlow Condensed (com fallback sans-serif)
**Body Font:** Work Sans (com fallback sans-serif)
**Label/Mono Font:** IBM Plex Mono (com fallback monospace)

**Character:** Condensada e pesada nos títulos (peso de placa estampada, letras verticais e cheias), contra um corpo de texto neutro e legível (Work Sans) — o contraste de peso é que carrega a hierarquia, não o tamanho sozinho. O mono entra só em detalhe técnico: legendas, labels de badge, dados.

### Hierarchy
- **Display** (700, `clamp(2rem, 5vw, 3rem)`, 1.1): H1 de cada página — sempre uppercase, sempre único por página.
- **Headline** (700, 1.5rem–2rem, 1.15): H2 de seção (SectionHeading, perguntas de FAQ).
- **Body** (400, 1rem, 1.6): parágrafos — cap de 65-75ch de largura de linha.
- **Label** (400, 0.75rem, 1.4, uppercase, tracking 0.2em): eyebrows, badges, legendas de campo.

### Named Rules
**The Weight-Not-Size Rule.** Hierarquia vem primeiro de peso e da troca display→corpo, não de inflar tamanho de fonte — um H2 e um H1 podem estar próximos em tamanho, nunca em peso/tratamento.

## 4. Elevation

Sistema **flat por doutrina, não por preguiça** — nenhum componente usa `box-shadow`. Profundidade e hierarquia vêm de borda (`border-steel`/`border-steel-light`) e de contraste de fundo entre `background` e `card` (papel vs. nuvem, tinta vs. carvão). Isso é coerente com o motivo "chapa de metal": uma placa de equipamento não paira sobre a superfície, ela está aparafusada nela.

### Named Rules
**The No-Shadow Rule.** Se um componente parece precisar de sombra pra se destacar, o problema é contraste de fundo ou borda insuficiente — resolver ali, nunca com `box-shadow`.

## 5. Components

### Buttons
- **Shape:** cantos retos (`rounded: none`) — nenhum botão tem radius.
- **Primary:** fundo `brand` (#8c292d), texto `paper` (#f4f1ea) — nunca texto escuro (falha de contraste corrigida nesta revisão). Padding 12px/24px.
- **Hover:** fundo `brand-deep` (#6e1f23).
- **Secondary:** transparente, borda `border` (steel/steel-light conforme seção), texto `foreground`; hover assume `brand` na borda e no texto.
- **Ghost:** sem fundo/borda, só texto `foreground`; hover assume `brand`.

### Badges ("placa de equipamento")
- **Estilo:** borda `steel`/`steel-light` (nunca `brand` na borda), com duas marcas de "parafuso" — pequenos círculos sólidos `steel` nos cantos superior-esquerdo e inferior-direito. A cor do texto (`brand` ou `foreground`/`muted`) é o único elemento que varia por ênfase; a "chapa" em si (borda + parafusos) é sempre metal.
- **Ponto sob auditoria nesta revisão:** a implementação atual (`Badge.tsx`) já usa borda sólida, mas com dois pontinhos de "parafuso" a 70% de opacidade só nos cantos superior-esquerdo/inferior-direito — o resultado visual (cantos "interrompidos", só 2 dos 4 marcados) pode ler como marca de corte/registro de debug em vez de elemento de marca. Avaliar no audit se resolve com 4 cantos, opacidade maior, ou remover os pontos e manter só a borda + a etiqueta mono já resolve a leitura de "placa".

### Cards / Containers
- **Corner Style:** reto ou radius mínimo (2-6px), nunca `rounded-xl`/`rounded-2xl`.
- **Background:** `card` (nuvem em seção clara, carvão em seção escura) — nunca igual ao `background` da seção (precisa de contraste próprio pra se distinguir como painel).
- **Shadow Strategy:** nenhuma (ver Elevation).
- **Border:** `border-border` (steel/steel-light conforme seção).

### Navigation (Header/Footer)
- **Header:** fundo escuro fixo (`.section-dark`), logo em chip `paper` (o próprio arquivo do logo tem fundo branco embutido), links em `muted-foreground` com hover `brand`, CTA de WhatsApp como botão primário.
- **Footer:** mesma lógica de seção escura, títulos de coluna em `brand`, links em `muted-foreground`/hover `brand`.

## 6. Do's and Don'ts

### Do:
- **Do** usar `background`/`foreground` (papel/tinta) como padrão em toda seção nova — fundo escuro é exceção, não regra.
- **Do** usar `brand` só sobre fundo claro (botão, texto de ênfase, borda pontual) — nunca como texto/borda direto sobre `ink`/`charcoal`.
- **Do** manter badges com borda sólida e cor de "metal" (steel), reservando cor de marca só pro texto.
- **Do** manter zero `box-shadow` em qualquer componente — profundidade vem de borda e contraste de fundo.
- **Do** validar contraste (mínimo AA, meta AAA em corpo de texto) antes de introduzir qualquer combinação de cor nova — ver tabela calculada em `docs/brand-guidelines.md`.

### Don't:
- **Don't** usar hero com gradiente roxo-azul e blob decorativo (anti-referência explícita do cliente).
- **Don't** usar cards com sombra suave, ícone de biblioteca genérica e texto centralizado em fileira de 3.
- **Don't** usar glassmorphism sem motivo funcional.
- **Don't** deixar tipografia "default" sem hierarquia de peso (o clichê "Inter em tudo").
- **Don't** usar borda tracejada (`border-dashed`) fora do contexto de "pendente/placeholder" (About, ProductLineupPlaceholder) — nesses dois lugares o tracejado é intencional (sinaliza conteúdo aguardando confirmação do cliente); em qualquer elemento de marca permanente (badge, card final), a borda é sempre sólida.
- **Don't** aplicar `rounded-full` no logo — o wordmark "MAQUINAS" chega perto da borda direita do arquivo, um crop circular corta o texto.
