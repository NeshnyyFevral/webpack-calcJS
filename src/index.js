import './style/style.scss';
import { render, calcField } from './script/render';
import { buttons } from './script/buttons';
import { tabIvents } from './script/tabIvents';

const calc = document.querySelector('.calc');
render(calc, buttons);

calcField.addEventListener('keydown', () => tabIvents());
