"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/Button";
import { getWhatsappHref } from "@/lib/constants";

/**
 * Sem backend de envio configurado — o "formulário" só monta a mensagem do
 * WhatsApp a partir dos campos e abre o link (`preventDefault` no submit,
 * não deixa a página recarregar; não existe rota de API pra receber isso).
 */
export function ContactForm() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const linhas = [`Olá! Meu nome é ${nome || "..."}.`];
    if (telefone) linhas.push(`Meu telefone/WhatsApp: ${telefone}.`);
    if (mensagem) linhas.push(mensagem);

    window.open(getWhatsappHref(linhas.join(" ")), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nome" className="font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus-visible:border-brand"
          placeholder="Seu nome"
        />
      </div>

      <div>
        <label htmlFor="telefone" className="font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground">
          Telefone / WhatsApp
        </label>
        <input
          id="telefone"
          name="telefone"
          type="tel"
          required
          value={telefone}
          onChange={(event) => setTelefone(event.target.value)}
          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus-visible:border-brand"
          placeholder="(69) 90000-0000"
        />
      </div>

      <div>
        <label htmlFor="mensagem" className="font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={4}
          value={mensagem}
          onChange={(event) => setMensagem(event.target.value)}
          className="mt-2 w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus-visible:border-brand"
          placeholder="Conta o que você precisa..."
        />
      </div>

      <Button type="submit" className="w-full sm:w-auto">
        Enviar pelo WhatsApp
      </Button>
      <p className="text-sm text-muted-foreground">
        Ao enviar, o WhatsApp abre numa nova aba com sua mensagem já preenchida.
      </p>
    </form>
  );
}
