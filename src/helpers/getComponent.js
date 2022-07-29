import { components } from '../Components/ComponentsList';

export function getComponent(componentName) {
  return components.find((item, index, array) => (item.name === componentName ? array[index] : null));
}
