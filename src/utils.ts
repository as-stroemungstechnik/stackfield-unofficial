export function formatDate(date: Date) {
  const utcYear = date.getUTCFullYear().toString();
  const utcMonth = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const utcDate = date.getUTCDate().toString().padStart(2, '0');

  const utcHours = date.getUTCHours().toString().padStart(2, '0');
  const utcMinutes = date.getUTCMinutes().toString().padStart(2, '0');

  return `${utcYear}-${utcMonth}-${utcDate} ${utcHours}:${utcMinutes}`;
}
