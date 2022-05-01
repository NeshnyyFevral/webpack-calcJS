import './style/style.scss';
import { render, calcField, calc } from './script/render';
import { tabIvents } from './script/tabIvents';
import { result, watcher } from './script/reactivity';

calcField.addEventListener('keydown', () => tabIvents());

watcher(() => {
  render(calc, result.finally, result.prefinally);
});
