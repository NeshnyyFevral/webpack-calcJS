import { buttons } from './buttons';

const calc = document.querySelector('.calc');

function createButton(b) {
  const button = document.createElement('button');
  if (b.text === 'AC' || b.text === '±' || b.text === '%') button.classList.add('calc__unary');
  else if (b.text === '/' || b.text === '+' || b.text === '-' || b.text === '*' || b.text === '=') button.classList.add('calc__act');
  else button.classList.add('calc__num');
  if (b.text === '0') button.classList.add('calc__num--long');
  button.innerText = b.text;
  button.onclick = b.onClick;
  return button;
}

const createElement = (tagName, className) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  return element;
};

/* const input = document.createElement('div');
input.classList.add('calc__input');

const calcField = document.createElement('div');
calcField.classList.add('calc__field');

const resultItem = document.createElement('div');
resultItem.classList.add('calc__result'); */

const input = createElement('div', 'calc__input');
const calcField = createElement('div', 'calc__field');
const resultItem = createElement('div', 'calc__result');

const buttonElements = [];
buttons.forEach((element) => {
  const button = createButton(element);
  buttonElements.push(button);
});

function render(desc, result, preResult) {
  desc.append(input);
  desc.append(resultItem);
  desc.append(calcField);
  buttonElements.forEach((buttonElement) => {
    calcField.append(buttonElement);
  });

  input.innerText = result;
  resultItem.innerText = preResult;
}

export {
  input, calcField, resultItem, render, calc,
};
