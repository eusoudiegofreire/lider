# SPEC — Home

Deriva de: `_references/00_BRIEFING_SITE_LIDER_MAQUINAS.md` (seções 2, 5, 6, 7, 8 — Fase 2)

## Objetivo da página
Apresentação ampla da Líder Máquinas e Ferramentas: quem é, o que trabalha, e distribuir o tráfego para as páginas de categoria (Garimpo, Produtor Rural, Ferramentas, e futuramente Mecânica/Jardinagem). Não é página de venda de um produto específico — é o hub institucional.

## Alcance / SEO
- `areaServed`: combinar os dois modelos do briefing (seção 5) — GeoCircle de 150km em torno de Ariquemes para o negócio como um todo, mas sem excluir a menção a Garimpo/RO-AM-AC-MT no texto (a Home linka para a página de Garimpo, que carrega seu próprio `areaServed` regional).
- Schema principal: `HardwareStore` (ver bloco JSON no briefing, seção 5) na Home e reaproveitado no layout raiz.
- Title (50–60 char): algo como `Líder Máquinas e Ferramentas | Ariquemes - RO` — confirmar naming exato com cliente.
- Meta description (120–156 char): mencionar as linhas de produto + cidade.

## Estrutura da página
1. **Header** — logo, nav (Home / Garimpo / Produtor Rural / Ferramentas / [Mecânica] / [Jardinagem] / Blog / Contato), WhatsApp CTA fixo.
2. **Hero** — modelo 3D leve (React Three Fiber + drei) de uma ferramenta que gira lentamente e reage a mouse/scroll; H1 único institucional (ex: "Máquinas e Ferramentas para Garimpo, Campo e Oficina em Ariquemes"); subheadline answer-first (2-3 frases: o que a Líder vende, pra quem, onde fica).
3. **Vitrine de categorias** — cards para Garimpo, Produtor Rural, Ferramentas (+ Mecânica/Jardinagem se entrarem na Fase 1), cada um linkando para a página própria. Evitar o clichê "3 cards com ícone genérico centralizado" (ver seção 6 do briefing) — usar motivo "placa de equipamento"/etiqueta industrial e foto real de produto quando disponível.
4. **Transição 3D por categoria** — ao passar o mouse/clicar em uma categoria no menu ou nos cards, o modelo 3D do hero faz morph/crossfade para o objeto daquela linha (picareta → trator/roçadeira → furadeira).
5. **Seção "Quem é a Líder"** — texto institucional curto, tempo de mercado, diferencial (loja física, atendimento).
6. **Localização** — endereço completo, mapa incorporado (Google Maps embed), horário de funcionamento, foto da fachada.
7. **CTA final** — WhatsApp + telefone + endereço.
8. **Footer** — NAP consistente (idêntico ao Google Meu Negócio), redes sociais, links de categoria, link para Blog.

## Placeholders a confirmar com o cliente antes de finalizar
- [ ] Telefone/WhatsApp oficial
- [ ] Horário de funcionamento exato (assumido Seg-Sáb 08:00-18:00 no briefing)
- [ ] Fotos reais da fachada/loja/produtos (briefing marca isso como prioridade antes do lançamento)
- [ ] Confirmar se Mecânica/Jardinagem entram já na Fase 1 ou ficam para depois (briefing sugere fase 2 opcional)
- [ ] Texto institucional "quem é a Líder" (história, ano de fundação, diferencial)

## Performance
3D pesado só aqui na Home (lazy-load, fallback estático mobile) — páginas de categoria usam só Framer Motion 2D, conforme seção 6 do briefing.
