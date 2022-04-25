import './style/style.scss';
import { render, calcField, calc } from './script/render';
/* import { buttons } from './script/buttons'; */
import { tabIvents } from './script/tabIvents';
import { result, watcher } from './script/reactivity';

/* render(calc, buttons, inputResult.value); */
watcher(() => {
  calc.innerHTML = ' ';
  render(calc, result.finally, result.prefinally);
});

calcField.addEventListener('keydown', () => tabIvents());
