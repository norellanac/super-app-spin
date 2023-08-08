export function formatDate(date: string) {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: 'numeric',
    };
    const formattedDate = new Date(date).toLocaleDateString('es-ES', options);
    return formattedDate;
  }