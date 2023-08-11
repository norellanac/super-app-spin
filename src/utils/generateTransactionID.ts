export function generateTransactionID() {
    const chars = '0123456789abcdef';
    let uuid = '';
  
    for (let i = 0; i < 32; i++) {
      if (i === 8 || i === 12 || i === 16 || i === 20) {
        uuid += '-';
      }
      const randomIndex = Math.floor(Math.random() * chars.length);
      uuid += chars[randomIndex];
    }
  
    return uuid;
  }