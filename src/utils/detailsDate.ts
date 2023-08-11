export function detailsDate (date: string | Date | any) {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
    const formattedDate = new Date(date).toLocaleDateString('es-ES', options);
    return formattedDate;
  }