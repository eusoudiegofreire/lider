# Product

## Register

brand

## Users

Dois públicos distintos, por categoria de produto (ver seção 1 do briefing):

- **Garimpo**: alcance regional amplo (Rondônia, Amazonas, Acre, Mato Grosso) — garimpeiros e compradores de equipamento de mineração manual, muitos de fora do estado, comparando por WhatsApp antes de decidir.
- **Produtor Rural / Ferramentas**: alcance local (raio ~80-150km de Ariquemes) — moradores de Ariquemes e cidades vizinhas (Rio Crespo, Cujubim, Monte Negro, Buritis, Machadinho, Jaru) buscando ferramenta/equipamento pra usar já, com decisão rápida "ir na loja ou não".

Contexto de uso: majoritariamente celular, busca no Google ou vindo do Instagram, decidindo em poucos segundos se vale a pena visitar a loja física ou mandar WhatsApp.

## Product Purpose

Site institucional (não e-commerce) da Líder Máquinas e Ferramentas, loja física em Ariquemes-RO. Existe pra converter busca local/regional em visita à loja ou contato por WhatsApp — não pra vender online. Sucesso = usuário liga/manda WhatsApp ou vai até a loja sabendo exatamente que a Líder atende a categoria que ele procura.

## Brand Personality

Industrial, direto, sem enrolação — "placa de equipamento", não vitrine de SaaS. Confiança de quem trabalha com ferramenta de verdade, não promessa de marketing genérica.

## Anti-references

Da seção 6 do briefing (explícito do cliente, "sem cara de IA"):
- Hero genérico com gradiente roxo-azul e blob decorativo
- Cards com sombra suave + ícone de biblioteca genérica + texto centralizado, em fileira de 3
- Glassmorphism sem motivo
- Tipografia default (Inter em tudo, sem hierarquia forte)
- Qualquer coisa que pareça "template de SaaS" em vez de loja de ferramentas

## Design Principles

1. **Placa de equipamento, não card de SaaS** — motivo industrial (bordas marcadas, etiqueta de produto), não o vocabulário visual genérico de dashboard.
2. **Fundo claro é o padrão** (revisão de 2026-07-18) — escuro fica reservado a hero/rodapé/CTA, não é mais a identidade base do site.
3. **Contraste é regra, não sugestão** — toda combinação de cor precisa passar WCAG AA no mínimo antes de ir pro ar (ver docs/brand-guidelines.md).
4. **Alcance geográfico muda o conteúdo, não só o visual** — Garimpo (regional) e as demais categorias (local) têm ângulos de copy e schema diferentes; o sistema visual precisa suportar os dois sem parecer duas marcas diferentes.
5. **Fotografia real > ilustração genérica** — quando as fotos de produto/loja chegarem, substituem qualquer placeholder decorativo, não competem com ele.

## Accessibility & Inclusion

WCAG 2.1 AA como piso em todo texto/UI; AAA como meta em corpo de texto contínuo (parágrafos). Nenhuma combinação de cor deve ser usada sem checar contraste primeiro — ver tabela calculada em `docs/brand-guidelines.md`. `prefers-reduced-motion` já respeitado no Hero 3D (`components/three/Hero3DGate.tsx`).
