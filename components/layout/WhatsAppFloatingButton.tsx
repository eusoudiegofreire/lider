import { getWhatsappHref } from "@/lib/constants";

/**
 * Botão flutuante de WhatsApp — só mobile (`md:hidden`), onde o header com o
 * CTA já visível sai da tela ao rolar a página. Microcopy exata de
 * `copy-lider-home.md` §8.
 */
export function WhatsAppFloatingButton() {
  return (
    <a
      href={getWhatsappHref("Olá! Vim pelo site da Líder Máquinas.")}
      aria-label="Abrir conversa no WhatsApp com a Líder Máquinas"
      className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-lg bg-brand px-4 py-3 font-sans text-sm font-semibold text-paper shadow-none transition-colors hover:bg-brand-hover md:hidden"
    >
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M12.01 2C6.48 2 2 6.48 2 12.01c0 1.98.55 3.83 1.5 5.42L2 22l4.7-1.47a9.96 9.96 0 0 0 5.31 1.53c5.53 0 10.01-4.48 10.01-10.02C22 6.48 17.54 2 12.01 2Zm5.87 14.27c-.25.7-1.24 1.28-2.02 1.44-.54.11-1.24.2-3.6-.77-3.02-1.25-4.96-4.3-5.11-4.5-.15-.2-1.22-1.62-1.22-3.09 0-1.47.77-2.19 1.04-2.49.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.19.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.76 1.26 1.63 2.04 1.12 1 2.06 1.32 2.36 1.47.3.15.48.13.66-.08.18-.2.75-.88.95-1.18.2-.3.4-.25.66-.15.27.1 1.72.81 2.02.96.3.15.5.22.57.35.08.13.08.72-.17 1.42Z" />
      </svg>
      WhatsApp
    </a>
  );
}
