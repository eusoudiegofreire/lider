# SPEC — Contato

Deriva de: `_references/00_BRIEFING_SITE_LIDER_MAQUINAS.md` (seções 2, 7)

## Objetivo
Formulário de contato + WhatsApp + telefone. Página de conversão simples, sem necessidade de 3D/animação pesada.

## Estrutura
1. Formulário: nome, telefone/WhatsApp, categoria de interesse (Garimpo/Produtor Rural/Ferramentas/Mecânica/Jardinagem), mensagem.
2. Botão WhatsApp direto (link `wa.me` com número oficial).
3. Telefone clicável (`tel:`).
4. Endereço + mapa (pode reaproveitar o embed da página Sobre/Localização).
5. Horário de funcionamento.

## Integração do formulário
Briefing (seção 7) sugere n8n (já usado no stack do Diego) ou API route própria. Decidir:
- [ ] n8n (webhook) — ver padrão já usado no projeto Sorrir Odontologia (`[[project_sorrir_odontologia]]` na memória) para lead qualification com webhook.
- [ ] API route própria (`/api/contato`) enviando por e-mail ou salvando em algum destino.

## SEO
- Schema `ContactPage` + reaproveitar `HardwareStore`/`LocalBusiness` com `contactPoint`.
- URL: `/contato`

## Placeholders a confirmar
- [ ] Número de WhatsApp oficial
- [ ] Destino do formulário (e-mail? n8n? CRM?)
- [ ] Se a categoria "Garimpo" no formulário precisa de campo extra (ex: cidade/estado de origem, já que atende fora de RO)
