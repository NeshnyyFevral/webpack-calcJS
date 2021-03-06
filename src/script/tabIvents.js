import { calcField } from './render';

export const tabIvents = () => {
  const firstTabElem = calcField.children[0];
  const lastTabElem = calcField.children[calcField.children.length - 1];

  lastTabElem.onkeydown = (event) => {
    if (event.key === 'Tab' && !event.shiftKey) {
      firstTabElem.focus();
      return false;
    }
    return null;
  };
  firstTabElem.onkeydown = (event) => {
    if (event.key === 'Tab' && event.shiftKey) {
      lastTabElem.focus();
      return false;
    }
    return null;
  };
};
