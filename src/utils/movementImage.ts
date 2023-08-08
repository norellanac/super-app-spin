const entityImageMapping = {
    'Oxxo Gas': require('../assets/MovsImages/oxxogasmov.png'),
    'Oxxo': require('../assets/MovsImages/oxxomov.png'),
    'Premia': require('../assets/MovsImages/premiamov.png'),
    'Volaris': require('../assets/MovsImages/volarismov.png'),
  };
  
  export function getImageSource(entity: string) {
    return entityImageMapping[entity] || require('../assets/MovsImages/defaultmov.png');
  }
  