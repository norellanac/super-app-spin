export function completeDate(date: Date) {
    const months = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio',
      'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];
  
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'numeric',
      year: 'numeric',
    };
  
    const formattedDate = new Date(date).toLocaleDateString('es-ES', options);
    const [day, month, year] = formattedDate.split('/');
  
    return `${day} de ${months[parseInt(month) - 1]} del ${year}`;
  }
  