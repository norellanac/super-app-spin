export function generatePromoCode() {
    const randomNumber1 = Math.floor(Math.random() * 100000000000000000);

    const longNumber = `
    ${randomNumber1}
    `;
  
    return longNumber;
  }