# FASE 1 — Fundação

Deriva de: `_references/00_BRIEFING_SITE_LIDER_MAQUINAS.md` (seção 8 — Fase 1, seção 6 — direção de design, seção 5 — SEO/schema, seção 7 — stack)

## Escopo desta fase
Não inclui nenhuma página final (Home fica para a Fase 2). O objetivo é ter a base técnica e visual pronta para que toda página futura só precise compor com o que existe aqui.

1. Scaffold do projeto: Next.js (App Router) + TypeScript + Tailwind + Vercel + GitHub.
2. Design tokens em `tailwind.config.ts` — paleta escura + laranja de destaque, tipografia condensada/industrial para títulos + sans limpa pro corpo (seção 6 do briefing). Sem gradiente roxo-azul, sem glassmorphism decorativo.
3. Estrutura de pastas do projeto.
4. Componentes base: `Button`, `Badge` (estilo "placa"/etiqueta industrial, cantos marcados tipo parafuso), `Card`, `SectionHeading`.
5. `Header` e `Footer` com NAP consistente (mesmo endereço/telefone em todo lugar).
6. `lib/constants.ts` com o NAP (Nome, Endereço, Telefone) e demais dados institucionais fixos (categorias, redes sociais).
7. `lib/schema.ts` com helper para gerar `areaServed` — reutilizável entre a página de Garimpo (lista de estados) e as páginas locais (GeoCircle de 150km), conforme seção 5 do briefing.

## Fora de escopo nesta fase
- Home, páginas de categoria, blog, contato (Fases 2, 3, 4).
- Modelo 3D / React Three Fiber (entra na Home, Fase 2).
- Conteúdo final de texto (copy) — usar placeholders onde o `01_PONTOS_EM_ABERTO.md` ainda não tiver resposta do cliente.

## Decisões técnicas assumidas
- Tailwind com `tailwind.config.ts` (config JS/TS clássica) para os tokens — pedido explícito do usuário, mantém compatibilidade direta com `theme.extend`.
- NAP: usar o endereço confirmado no briefing (Av. Capitão Sílvio, 3395, Setor 1, Ariquemes - RO, 76870-020); telefone/horário ficam como placeholder `[CONFIRMAR]` até resposta do cliente (ver `_references/pages/01_PONTOS_EM_ABERTO.md`).

## Critério de "pronto" desta fase
- [ ] `npm run build` e `npx tsc --noEmit` passam sem erro.
- [ ] `tailwind.config.ts` define: paleta de cor (dark bg + laranja/vermelho de destaque), fontes (display condensada + sans corpo) via `next/font`, tokens de espaçamento/raio se precisarem fugir do default.
- [ ] Estrutura de pastas criada (`app/`, `components/ui/`, `components/layout/`, `lib/`) e documentada.
- [ ] `Button`, `Badge`, `Card`, `SectionHeading` existem em `components/ui/`, tipados, sem depender de conteúdo real (props genéricas).
- [ ] `Header` e `Footer` existem em `components/layout/`, consomem o NAP de `lib/constants.ts` (não hardcoded).
- [ ] `lib/constants.ts` exporta o NAP e não tem valor de telefone "inventado" — placeholder explícito onde não confirmado.
- [ ] `lib/schema.ts` exporta uma função que recebe um "modo" (regional vs. local) e devolve o objeto `areaServed` correto (lista de `State` ou `GeoCircle`), testável isoladamente sem depender de nenhuma página.
- [ ] Nenhuma página de conteúdo (Home/categoria) foi criada ainda — só o layout raiz mínimo necessário pra montar Header/Footer.
- [ ] Repositório com git status limpo ou claramente reportado (o que foi criado, o que ainda não foi commitado).
