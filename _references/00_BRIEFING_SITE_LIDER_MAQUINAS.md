# BRIEFING — Site Institucional Líder Máquinas e Ferramentas
**Preparado por:** DLX Digital · Diego Freire
**Cliente:** Líder Máquinas e Ferramentas (Ariquemes-RO)
**Uso:** documento de referência para desenvolvimento com Claude Code (VS Code) → GitHub → Vercel

---

## 0. Como usar este documento

Este briefing é o "_references/00_BRIEFING.md_" do projeto — a constituição que o Claude Code vai consultar em cada etapa. Ele está dividido em blocos que seguem sua metodologia (Spec → Break → Plan → Execute). Recomendo colar este arquivo inteiro na pasta `_references/` do repositório antes de abrir o Claude Code, e então atacar cada página como uma spec separada (`_references/pages/home.md`, `_references/pages/garimpo.md`, etc.) derivada deste briefing.

---

## 1. Objetivo do projeto

Site institucional (não é loja virtual/e-commerce) para a Líder Máquinas. O ponto mais importante deste briefing é que **o alcance geográfico não é igual para todas as categorias** — isso muda o SEO técnico de cada página, não é um detalhe de conteúdo.

**A lógica real do negócio:**

- **Garimpo → alcance regional amplo (RO, AM, AC, MT).** Quase não existe loja especializada em equipamento de garimpo nessas regiões, então a Líder compete (e pode ranquear) para quem procura em Manaus, no Acre, em Mato Grosso — estados com atividade garimpeira. Essa é a categoria que traz cliente de fora.
- **Produtor Rural, Ferramentas, Mecânica, Jardinagem → alcance local (raio de ~80 a 150 km de Ariquemes).** Aqui a concorrência é outra loja física da região, e ninguém vai atravessar dois estados pra comprar uma roçadeira. O jogo é aparecer pra quem está em Ariquemes e cidades vizinhas (Rio Crespo, Cujubim, Monte Negro, Buritis, Machadinho, Jaru, Ouro Preto do Oeste, etc. — o raio que fizer sentido pro negócio).

**Isso muda como cada página é construída:**

| | Página Garimpo | Demais páginas (Produtor Rural, Ferramentas, Mecânica, Jardinagem) |
|---|---|---|
| Alcance-alvo | RO + AM + AC + MT | Ariquemes + raio de ~80–150km |
| Palavra-chave no H1/title | Sem amarrar só a Ariquemes — ex: "Equipamentos para Garimpo" ou "Equipamentos para Garimpo em Rondônia e região" | Sempre com cidade: "Ferramentas para Produtor Rural em Ariquemes" |
| Schema de área de atendimento | `areaServed` incluindo RO, AM, AC, MT (ou as cidades-polo de garimpo dessas regiões) | `areaServed` = Ariquemes + cidades do raio local |
| Conteúdo de blog associado | Pode citar termos de busca de fora (ex: "onde comprar bateia em Manaus", "equipamento de garimpo Rondônia") | Sempre com o nome da cidade/região embutido |
| CTA | Loja física + **entrega/envio para fora** (precisa confirmar se a Líder despacha para outros estados — isso é decisão de operação, não só de site) | Loja física / WhatsApp, presencial |

**Ponto em aberto:** se a Líder vai atender cliente de fora só por telefone/WhatsApp com despacho, ou se é presencial mesmo vindo de longe — isso muda o texto de CTA da página de Garimpo (ex: incluir informação de frete/envio, formas de pagamento à distância). Vale confirmar antes de escrever o conteúdo final dessa página.

---

## 2. Arquitetura de páginas

### Sua proposta original (mantida):
1. **Home** — apresentação ampla da Líder, o que trabalham, contato
2. **Garimpo** — página específica
3. **Produtor Rural** — página específica
4. **Ferramentas** — página específica (como no bio do Instagram)

### Sugestão de expansão (avaliar, não obrigatório):

O perfil do Instagram da Líder já usa **4 categorias como destaques**: Garimpo, Produtor Rural, Jardinagem e Mecânicas — além de Pesca e Contato. Isso indica que essas já são linhas de produto reconhecidas pelo negócio. Do ponto de vista de SEO, cada categoria de produto forte = uma página própria = uma chance a mais de aparecer no Google para uma busca específica ("ferramentas de jardinagem Ariquemes" tem buscador diferente de "ferramentas para garimpo Ariquemes"). Recomendo:

5. **Mecânica** — ferramentas automotivas/oficina
6. **Jardinagem** — se o volume de produtos justificar

Se preferir começar enxuto, dá para lançar as 4 páginas originais primeiro e adicionar Mecânica/Jardinagem numa segunda fase — o site não precisa nascer completo.

### Páginas de suporte (essenciais para SEO local e institucional):
7. **Sobre / Localização** — endereço completo, mapa incorporado, horário, fotos da fachada/interior
8. **Blog** — conteúdo educativo (ver seção 4)
9. **Contato** — formulário + WhatsApp + telefone

---

## 3. Estrutura de cada página de categoria (Garimpo, Produtor Rural, Ferramentas, Mecânica...)

Cada página segue o mesmo esqueleto, adaptado ao público:

1. **H1 único** — formato pergunta ou afirmação direta com palavra-chave local. Ex: `<h1>Ferramentas para Garimpo em Ariquemes</h1>`
2. **Bloco de abertura (answer-first)** — 2–3 frases respondendo "o que a Líder oferece para [categoria]" antes de qualquer enrolação — isso é o que o Google e as IAs (ChatGPT, Gemini, AI Overviews) mais valorizam para citar a página.
3. **Vitrine de produtos/linhas** — não precisa ser catálogo completo (não é e-commerce), mas mostrar as principais linhas com foto e nome.
4. **Bloco de FAQ (H2 em formato de pergunta)** — 4 a 6 perguntas reais do público daquela categoria. Exemplos para Garimpo: "Qual equipamento é essencial para começar no garimpo?", "A Líder vende equipamento de garimpo em Ariquemes?". Cada resposta curta, direta, sem enrolação.
5. **CTA de loja física** — endereço, WhatsApp, "venha conferir pessoalmente".
6. **Schema markup** — `Product` ou `ItemList` para a linha de produtos + `FAQPage` para o bloco de perguntas (ver seção 5).

---

## 4. Estratégia de conteúdo (blog)

Baseado no material de SEO/GEO que você enviou, a lógica é: **conteúdo Q&A, answer-first, específico o suficiente pra ser citado por IA** — mas agora dividido por alcance, seguindo a seção 1:

**Blog — linha Garimpo (alcance RO/AM/AC/MT):**
- Guias de escolha ("Como escolher uma bateia de garimpo", "Equipamento essencial pra começar no garimpo")
- Conteúdo que capta busca de fora do estado ("Onde comprar equipamento de garimpo em Rondônia", "Equipamento de garimpo para quem vem do Amazonas/Acre/Mato Grosso")
- Não precisa (e não deve) amarrar toda frase a "Ariquemes" — a cidade aparece na página de contato/localização, não precisa repetir em todo H2

**Blog — demais linhas (alcance local ~80–150km):**
- Guias de escolha e manutenção ("Como escolher uma motosserra", "Como afiar a corrente da motosserra em casa")
- Comparativos ("Roçadeira elétrica x a gasolina: qual vale mais a pena")
- Sempre com cidade/região no título ou H2 quando fizer sentido ("Onde comprar ferramentas para produtor rural em Ariquemes")

**Cadência sugerida:** 1 artigo por semana, alternando entre as duas linhas.

**Regra de formatação de cada post (vale para as duas linhas):**
- H1 = tema, H2s = perguntas reais que a pessoa digitaria no Google
- Primeira frase depois de cada H2 = a resposta direta (answer-first) — parágrafos de contexto vêm depois
- Listas e tabelas sempre que houver comparação (isso ajuda tanto em featured snippets quanto em respostas de IA)
- CTA suave no fim — na linha Garimpo, considerar mencionar atendimento a distância se aplicável (ver ponto em aberto na seção 1)

---

## 5. SEO técnico e Schema — checklist por página

Adaptado do documento que você enviou (que era focado em clínica odontológica) para o segmento de ferramentas/material de construção. O tipo de negócio no schema.org não é `Dentist` — é `HardwareStore` (subtipo de `Store` → `LocalBusiness`).

**Schema da Home / Contato / Localização:**
```json
{
  "@context": "https://schema.org",
  "@type": "HardwareStore",
  "name": "Líder Máquinas e Ferramentas",
  "image": "https://[site]/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Capitão Sílvio, 3395, Setor 1",
    "addressLocality": "Ariquemes",
    "addressRegion": "RO",
    "postalCode": "76870-020",
    "addressCountry": "BR"
  },
  "telephone": "+55XX...",
  "openingHours": "Mo-Sa 08:00-18:00",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "X.X",
    "reviewCount": "XX"
  }
}
```

**Campo-chave para a estratégia geográfica: `areaServed`**

Esse é o campo do schema que diz ao Google (e às IAs) qual território cada página atende — é ele que operacionaliza a divisão da seção 1:

```json
// Página de Garimpo
"areaServed": [
  {"@type": "State", "name": "Rondônia"},
  {"@type": "State", "name": "Amazonas"},
  {"@type": "State", "name": "Acre"},
  {"@type": "State", "name": "Mato Grosso"}
]
```

```json
// Páginas locais (Produtor Rural, Ferramentas, Mecânica, Jardinagem)
"areaServed": {
  "@type": "GeoCircle",
  "geoMidpoint": {
    "@type": "GeoCoordinates",
    "latitude": -9.9133,
    "longitude": -63.0419
  },
  "geoRadius": "150000"
}
```

O `GeoCircle` com raio de 150km (em metros) é a forma correta de sinalizar "atendo essa região ao redor de Ariquemes" sem precisar listar cidade por cidade — mas dá pra complementar citando as principais cidades do raio (Rio Crespo, Cujubim, Monte Negro, Buritis, Jaru...) no texto da página, o que ajuda tanto SEO quanto leitura humana.



**Checklist técnico geral (todas as páginas):**
- [ ] 1 único `<h1>` por página, com palavra-chave principal
- [ ] `<title>` 50–60 caracteres, `<meta description>` 120–156 caracteres, sempre com cidade quando a página for de intenção local
- [ ] URLs limpas: `/ferramentas`, `/garimpo`, `/produtor-rural`, `/mecanica`, não `/pagina?id=3`
- [ ] Alt-text descritivo em toda imagem (não "img1.jpg")
- [ ] Mobile-first — testar no Mobile-Friendly Test do Google
- [ ] Core Web Vitals: LCP ≤ 2,5s, INP ≤ 200ms, CLS ≤ 0,1 — atenção redobrada por causa das animações/3D (ver seção 6)
- [ ] Sitemap XML + robots.txt corretos
- [ ] HTTPS (padrão no Vercel)
- [ ] NAP (Nome, Endereço, Telefone) idêntico em todo lugar — site, Google Meu Negócio, redes sociais

---

## 6. Direção de design — "sem cara de IA"

Isso é o ponto mais importante pra alinhar antes de qualquer linha de código, porque é onde sites gerados rápido costumam falhar. O que **evitar** (os clichês que gritam "gerado por IA"):
- Hero genérico com gradiente roxo-azul e blob decorativo
- Cards com sombra suave + ícone de biblioteca genérica + texto centralizado, repetidos em fileira de 3
- Glassmorphism sem motivo
- Tipografia default (Inter em tudo, sem hierarquia forte)
- Sem textura, sem identidade — parece template de SaaS, não loja de ferramentas

**O que usar em vez disso** (seguindo a identidade que já vem sendo construída pra Líder — laranja/vermelho DLX + estética industrial):
- **Tipografia com peso** — uma display font condensada/industrial para títulos (ex: Archivo Black, Barlow Condensed) + uma sans limpa pro corpo. Contraste forte de peso, não só de cor.
- **Motivo "placa de equipamento"** — bordas com cantos marcados tipo parafuso, badges estilo etiqueta de produto industrial, paleta escura + laranja de destaque — mesma linguagem visual já usada na proposta comercial e no material anterior da marca.
- **Fotografia real** — produto de verdade, loja de verdade, não ilustração genérica. Se não tiver fotos boas ainda, isso deveria ser prioridade antes do lançamento do site.
- **Textura de grid técnico sutil** de fundo em seções escuras (referência: desenho técnico/plano de engenharia), não gradiente decorativo.

### Animação e elementos 3D

Sua ideia de vídeo/elemento 3D que muda conforme a pessoa navega é ótima — aqui está como estruturar isso tecnicamente pro Claude Code:

- **Hero da Home:** modelo 3D leve (ex: uma ferramenta específica — picareta, motosserra, furadeira) renderizado com **React Three Fiber** (camada React sobre Three.js), que gira lentamente sozinho e reage ao mouse/scroll.
- **Transição por categoria:** ao passar o mouse ou clicar em "Garimpo" / "Produtor Rural" / "Ferramentas" no menu, o modelo 3D **faz morph ou crossfade** para o objeto daquela categoria (picareta → trator/roçadeira → furadeira). Isso é o efeito "escolhe na página e o 3D muda" que você descreveu.
- **Scroll animations:** usar **Framer Motion** para fade-in/slide-in de seções conforme o usuário rola a página — sutil, não exagerado.
- **Ícones/elementos pequenos animados:** **Lottie** para animações leves (ex: ícone de WhatsApp pulsando), mais leve que 3D pra elementos pequenos.
- **Cuidado com performance:** todo elemento 3D/animado precisa ser lazy-loaded e ter fallback estático para mobile mais fraco — senão quebra os Core Web Vitals da seção 5. Regra prática: 3D pesado só na Home; páginas de categoria usam animação 2D (Framer Motion) para carregar rápido.

Você mencionou que tem a skill de design no VS Code — vale apontar essa skill pro Claude Code logo na primeira spec, junto com este briefing, para manter consistência de tokens (cores, espaçamento, tipografia) em todas as páginas.

---

## 7. Stack técnica (assumida a partir do seu padrão de trabalho)

- **Framework:** Next.js (App Router)
- **Deploy:** Vercel
- **Versionamento:** GitHub
- **3D:** React Three Fiber + drei
- **Animação:** Framer Motion
- **Estilo:** Tailwind (com tokens de design customizados — não default)
- **Formulário de contato:** integração simples (ex: n8n, já que você usa no seu stack) ou API route própria

*Se algum desses pontos não for o que você tem em mente, me avisa que ajusto o briefing antes de gerar as specs por página.*

---

## 8. Plano de execução faseado (Spec → Break → Plan → Execute)

**Fase 1 — Fundação**
- Setup do projeto (Next.js + Vercel + GitHub)
- Design system: cores, tipografia, componentes base (botão, card, badge estilo "placa")
- Header/Footer com NAP consistente

**Fase 2 — Home**
- Hero com elemento 3D
- Seção "quem é a Líder"
- Vitrine das categorias (Garimpo, Produtor Rural, Ferramentas...)
- Localização + CTA

**Fase 3 — Páginas de categoria**
- Uma spec por página (Garimpo → Produtor Rural → Ferramentas → Mecânica/Jardinagem se entrar)
- Schema `ItemList` + `FAQPage` em cada uma

**Fase 4 — Blog e conteúdo**
- Estrutura do blog (listagem + página de post)
- Primeiros 3–5 artigos conforme seção 4

**Fase 5 — SEO técnico final + Google Meu Negócio**
- Sitemap, robots.txt, Search Console
- Otimização do GMB (fora do escopo do site em si, mas anda junto)

---

## 9. Próximos passos

1. Você valida ou ajusta este briefing (principalmente seções 2, 6 e 7).
2. A gente quebra a Fase 1 e a Home em specs individuais dentro de `_references/pages/`.
3. Você abre o Claude Code apontando pra esse repositório com este briefing + a spec da etapa atual.

Qualquer ajuste no meio do caminho, atualiza este arquivo primeiro — ele é a fonte da verdade do projeto.
