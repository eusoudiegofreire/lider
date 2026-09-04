import type { Metadata } from "next";

import { BASE_OPEN_GRAPH } from "@/lib/constants";

const CONTACT_EMAIL = "lidermaquinaseferramentas@gmail.com";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a Líder Máquinas e Ferramentas trata os dados pessoais coletados no site, em conformidade com a LGPD (Lei nº 13.709/2018).",
  alternates: {
    canonical: "/privacidade",
  },
  openGraph: {
    ...BASE_OPEN_GRAPH,
    url: "/privacidade",
  },
};

/**
 * Texto jurídico fornecido pronto pelo cliente (2026-09-04) — não reescrever
 * cláusulas nem palavras. As únicas liberdades tomadas na formatação: (1)
 * blocos com itens separados por ";" no texto original viram `<ul>` aqui,
 * só pra legibilidade (mesmas palavras, sem reescrita); (2) "[DATA]" virou a
 * data de publicação desta página, por extenso.
 */
export default function PrivacidadePage() {
  return (
    <section className="bg-background py-[72px] md:py-[100px]">
      <div className="mx-auto max-w-2xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.08em] text-brand">LGPD</p>
        <h1 className="mt-3 text-[clamp(2rem,5vw,3rem)] font-display font-bold leading-[1.05] tracking-[-0.03em] text-foreground">
          Política de Privacidade — Líder Máquinas e Ferramentas
        </h1>
        <p className="mt-4 font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground">
          Última atualização: 4 de setembro de 2026
        </p>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground">
          <p>
            A Líder Máquinas e Ferramentas (&ldquo;Líder Máquinas&rdquo;, &ldquo;nós&rdquo;)
            respeita a sua privacidade e está comprometida em proteger os dados pessoais que
            você compartilha conosco. Esta Política de Privacidade explica quais informações
            coletamos, como as usamos e quais são os seus direitos, em conformidade com a Lei
            Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
          </p>
          <p>Ao usar este site, você concorda com as práticas descritas nesta política.</p>

          <h2 className="pt-4 text-xl font-display font-bold text-foreground">1. QUEM SOMOS</h2>
          <p>
            A Líder Máquinas e Ferramentas é uma loja física localizada na Av. Capitão Sílvio,
            3395 — Áreas Especiais 01, Ariquemes - RO, CEP 76870-020, que comercializa
            ferragens, ferramentas, máquinas e equipamentos, além de prestar serviço de
            assistência técnica. Para tratar de qualquer assunto relacionado aos seus dados
            pessoais, entre em contato pelo e-mail:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand underline underline-offset-2">
              {CONTACT_EMAIL}
            </a>
            .
          </p>

          <h2 className="pt-4 text-xl font-display font-bold text-foreground">
            2. QUAIS DADOS COLETAMOS
          </h2>
          <p>Coletamos apenas os dados necessários para atender você.</p>
          <p>
            <strong className="font-semibold text-foreground">
              Dados que você nos fornece diretamente:
            </strong>{" "}
            quando você preenche o formulário de contato do site ou nos chama pelo WhatsApp,
            coletamos as informações que você digita — como nome, telefone e a mensagem que
            envia, usadas exclusivamente para responder e atender à sua solicitação.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Dados de navegação:</strong> como
            a maioria dos sites, podemos coletar automaticamente informações técnicas básicas,
            como tipo de navegador, dispositivo e páginas visitadas, por meio de cookies e
            tecnologias semelhantes.
          </p>
          <p>
            Não coletamos dados sensíveis nem dados de crianças e adolescentes de forma
            intencional.
          </p>

          <h2 className="pt-4 text-xl font-display font-bold text-foreground">
            3. COMO USAMOS SEUS DADOS
          </h2>
          <p>Usamos os dados coletados para:</p>
          <ul className="list-disc space-y-2 pl-5 marker:text-brand">
            <li>responder às suas mensagens e solicitações de orçamento ou informação;</li>
            <li>entrar em contato quando você solicita, pelo canal que você escolheu;</li>
            <li>melhorar a experiência e o funcionamento do site;</li>
            <li>cumprir obrigações legais, quando aplicável.</li>
          </ul>
          <p>Não vendemos, alugamos nem comercializamos seus dados pessoais com terceiros.</p>

          <h2 className="pt-4 text-xl font-display font-bold text-foreground">
            4. COMPARTILHAMENTO DE DADOS
          </h2>
          <p>
            Seus dados podem ser tratados por serviços de terceiros que utilizamos para o
            funcionamento do site e do atendimento, como:
          </p>
          <ul className="list-disc space-y-2 pl-5 marker:text-brand">
            <li>provedores de hospedagem e infraestrutura do site;</li>
            <li>WhatsApp (Meta), quando você opta por nos contatar por esse canal;</li>
            <li>ferramentas de mapa e localização (Google Maps), para mostrar o endereço da loja.</li>
          </ul>
          <p>
            Esses serviços possuem suas próprias políticas de privacidade, e o compartilhamento
            se limita ao necessário para prestar o serviço a você.
          </p>

          <h2 className="pt-4 text-xl font-display font-bold text-foreground">
            5. COOKIES E TECNOLOGIAS DE RASTREAMENTO
          </h2>
          <p>
            Este site pode utilizar cookies — pequenos arquivos armazenados no seu navegador —
            para funcionar corretamente e entender como os visitantes usam o site. Futuramente,
            poderemos utilizar ferramentas de análise e publicidade, como Google Analytics,
            Google Ads e Meta Pixel (Facebook/Instagram), para medir o desempenho do site e
            exibir anúncios relevantes. Caso essas ferramentas sejam ativadas, elas poderão
            coletar dados de navegação por meio de cookies para essas finalidades.
          </p>
          <p>
            Você pode, a qualquer momento, gerenciar ou desativar os cookies nas configurações
            do seu navegador.
          </p>

          <h2 className="pt-4 text-xl font-display font-bold text-foreground">
            6. POR QUANTO TEMPO GUARDAMOS SEUS DADOS
          </h2>
          <p>
            Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as
            finalidades descritas nesta política ou para atender a obrigações legais. Após esse
            período, os dados são eliminados ou anonimizados.
          </p>

          <h2 className="pt-4 text-xl font-display font-bold text-foreground">
            7. SEUS DIREITOS (LGPD)
          </h2>
          <p>De acordo com a LGPD, você tem o direito de:</p>
          <ul className="list-disc space-y-2 pl-5 marker:text-brand">
            <li>confirmar se tratamos seus dados e acessá-los;</li>
            <li>corrigir dados incompletos, inexatos ou desatualizados;</li>
            <li>solicitar a anonimização ou eliminação de dados desnecessários;</li>
            <li>solicitar a portabilidade dos seus dados;</li>
            <li>revogar o consentimento e solicitar a exclusão dos dados tratados com base nele;</li>
            <li>obter informação sobre com quem compartilhamos seus dados.</li>
          </ul>
          <p>
            Para exercer qualquer um desses direitos, entre em contato pelo e-mail:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand underline underline-offset-2">
              {CONTACT_EMAIL}
            </a>
            . Responderemos no menor prazo possível.
          </p>

          <h2 className="pt-4 text-xl font-display font-bold text-foreground">8. SEGURANÇA</h2>
          <p>
            Adotamos medidas técnicas e organizacionais razoáveis para proteger seus dados
            contra acesso não autorizado, perda ou uso indevido. Ainda assim, nenhum sistema é
            totalmente imune a riscos, e nos comprometemos a agir com transparência caso ocorra
            qualquer incidente relevante.
          </p>

          <h2 className="pt-4 text-xl font-display font-bold text-foreground">
            9. ALTERAÇÕES NESTA POLÍTICA
          </h2>
          <p>
            Podemos atualizar esta Política de Privacidade periodicamente. A versão mais
            recente estará sempre disponível nesta página, com a data da última atualização no
            topo.
          </p>

          <h2 className="pt-4 text-xl font-display font-bold text-foreground">10. CONTATO</h2>
          <p>
            Em caso de dúvidas sobre esta política ou sobre o tratamento dos seus dados, fale
            conosco:
          </p>
          <address className="not-italic">
            <p>Líder Máquinas e Ferramentas</p>
            <p>
              E-mail:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand underline underline-offset-2">
                {CONTACT_EMAIL}
              </a>
            </p>
            <p>Endereço: Av. Capitão Sílvio, 3395 — Áreas Especiais 01, Ariquemes - RO, CEP 76870-020</p>
            <p>Telefone: (69) 3536-4929</p>
          </address>
        </div>
      </div>
    </section>
  );
}
