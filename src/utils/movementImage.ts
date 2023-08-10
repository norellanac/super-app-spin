type Entity = 'Oxxo Gas' | 'Oxxo' | 'Premia' | 'Volaris' | 'VIX' | 'Smart Fit' | string;

const entityImageMapping: Record<Entity, any> = {
  'Oxxo Gas': require('../assets/MovsImages/oxxogasmov.png'),
  'Oxxo': require('../assets/MovsImages/oxxomov.png'),
  'Premia': require('../assets/MovsImages/premiamov.png'),
  'Volaris': require('../assets/MovsImages/volarismov.png'),
  'VIX': require('../assets/MovsImages/VIX.png'),
  'Smart Fit': require('../assets/MovsImages/Smart.png')
};

export function getImageSource(entity: Entity): any {
  return entityImageMapping[entity] || require('../assets/MovsImages/defaultmov.png');
}
