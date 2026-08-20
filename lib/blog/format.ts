/** "2026-08-18" -> "18 de agosto de 2026". */
export function formatBlogDate(iso: string): string {
  const date = new Date(`${iso}T00:00:00`);
  return new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}
