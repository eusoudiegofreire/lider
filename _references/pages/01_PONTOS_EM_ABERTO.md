# Pontos em aberto — confirmar com o cliente (Líder Máquinas e Ferramentas) antes de fechar o conteúdo final

Consolidado a partir das specs individuais em `_references/pages/`. Atualizar este arquivo conforme as respostas chegarem — ele é o checklist que desbloqueia o texto final de cada página.

## Bloqueia conteúdo — prioridade alta
- [ ] **Garimpo — atendimento fora de RO**: a Líder despacha/vende à distância para Amazonas, Acre e Mato Grosso, ou é sempre presencial mesmo pra quem vem de longe? Define CTA, FAQ de frete e ângulo do blog da linha Garimpo. (ver `garimpo.md`)
- [ ] **NAP oficial**: telefone/WhatsApp definitivo, horário de funcionamento exato (assumido Seg-Sáb 08:00-18:00 no briefing). Precisa ser idêntico em site, Google Meu Negócio e redes sociais.
- [ ] **Fotos reais**: fachada, interior da loja, produtos por categoria. Briefing marca isso como prioridade antes do lançamento — o design depende de fotografia real, não ilustração genérica (seção 6).
- [ ] **Catálogo real por categoria**: linhas de produto específicas de Garimpo, Produtor Rural, Ferramentas (e Mecânica/Jardinagem se entrarem).

## Decisões de escopo
- [ ] Mecânica e Jardinagem entram na Fase 1 (junto com Garimpo/Produtor Rural/Ferramentas) ou ficam para uma Fase 2? (briefing seção 2 trata como opcional)
- [ ] Delimitar escopo exato de "Ferramentas" vs. "Mecânica" pra não competir pela mesma palavra-chave (ver `ferramentas.md`)
- [ ] Formato do formulário de contato: n8n (webhook) ou API route própria + destino final do lead (ver `contato.md`)
- [ ] Nota/quantidade de avaliações do Google Meu Negócio, se for usar `aggregateRating` no schema

## Confirmação de stack (seção 7 do briefing, assumida a partir do padrão de trabalho do Diego)
- [ ] Confirmar Next.js (App Router) + Vercel + GitHub + React Three Fiber/drei + Framer Motion + Tailwind — se algum ponto for diferente do que o cliente/Diego tem em mente, ajustar antes do setup de Fase 1.

---
**Próximo passo depois de resolver isso:** iniciar a Fase 1 do plano de execução (seção 8 do briefing) — scaffold Next.js, design system (tokens de cor/tipografia "placa de equipamento" da seção 6), Header/Footer com NAP.
