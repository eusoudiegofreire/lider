# SPEC — Garimpo

Deriva de: `_references/00_BRIEFING_SITE_LIDER_MAQUINAS.md` (seção 1 — a mais importante para esta página, 3, 5)

## ⚠️ Diferença estrutural desta página vs. as demais
Alcance **regional amplo**: Rondônia, Amazonas, Acre, Mato Grosso — não só Ariquemes. Quase não existe loja especializada em equipamento de garimpo nessas regiões, então esta página compete por buscas de fora do estado. Isso muda H1, schema e CTA (ver abaixo) — não é só uma página de categoria igual às outras.

## SEO
- **H1**: sem amarrar só a Ariquemes. Ex: `Equipamentos para Garimpo em Rondônia e Região` (não `... em Ariquemes`).
- **`areaServed`** (schema `Product`/`ItemList` desta página):
```json
"areaServed": [
  {"@type": "State", "name": "Rondônia"},
  {"@type": "State", "name": "Amazonas"},
  {"@type": "State", "name": "Acre"},
  {"@type": "State", "name": "Mato Grosso"}
]
```
- Title/meta description: mencionar a região ampla, não só a cidade.
- URL: `/garimpo`

## Estrutura da página (segue esqueleto da seção 3 do briefing)
1. H1 único (ver acima).
2. Bloco de abertura answer-first (2-3 frases): o que a Líder oferece em equipamento de garimpo, antes de qualquer enrolação.
3. Vitrine das principais linhas de produto (bateias, peneiras, motobombas, equipamento de mineração manual etc. — confirmar catálogo real com cliente).
4. FAQ (H2 em formato de pergunta) — rascunho de perguntas, ajustar com cliente:
   - "Qual equipamento é essencial para começar no garimpo?"
   - "A Líder vende equipamento de garimpo em Ariquemes?"
   - "A Líder entrega equipamento de garimpo para outros estados (Amazonas, Acre, Mato Grosso)?" — **depende do ponto em aberto abaixo**
   - "Quais as formas de pagamento para quem compra de fora de Rondônia?"
   - "Qual o equipamento mais procurado por garimpeiros iniciantes?"
5. CTA de loja física + **menção a atendimento/envio para fora do estado** (condicional — ver ponto em aberto).
6. Schema: `Product`/`ItemList` (linha de produtos) + `FAQPage` (bloco de perguntas).

## 🔴 Ponto em aberto (bloqueia o CTA final e o texto de FAQ sobre frete)
Confirmar com o cliente: a Líder atende cliente de fora (Manaus, Acre, MT) só por telefone/WhatsApp com despacho, ou é sempre presencial mesmo vindo de longe? Isso muda:
- Se o CTA menciona frete/envio e formas de pagamento à distância, ou só "venha conferir pessoalmente".
- O conteúdo do blog associado a esta linha (seção 4 do briefing already assume que pode captar busca de fora).

**Não escrever o texto final de CTA e FAQ de frete até essa resposta.**

## Blog associado (linha Garimpo — ver seção 4 do briefing)
Guias de escolha e conteúdo que capta busca de fora do estado, sem amarrar toda frase a "Ariquemes" (a cidade já aparece na página de contato/localização). Exemplos: "Como escolher uma bateia de garimpo", "Onde comprar equipamento de garimpo em Rondônia".
