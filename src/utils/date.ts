export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat("ca-ES").format(new Date(dateString));
}
