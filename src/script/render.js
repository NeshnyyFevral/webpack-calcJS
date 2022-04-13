function createButton(b) {
  const button = document.createElement('button');
  if (b.text === 'AC' || b.text === '±' || b.text === '%') button.classList.add('calc__unary');
  else if (b.text === '/' || b.text === '+' || b.text === '-' || b.text === '*' || b.text === '=') button.classList.add('calc__act');
  else button.classList.add('calc__num');
  if (b.text === '0') button.classList.add('calc__num--long');
  button.innerHTML = b.text;
  button.onclick = b.onClick;
  return button;
}

const input = document.createElement('div');
input.classList.add('calc__input');
input.innerHTML = '0';

const calcField = document.createElement('div');
calcField.classList.add('calc__field');

const resultItem = document.createElement('div');
resultItem.classList.add('calc__result');
resultItem.innerHTML = '';

function render(desc, buttons) {
  desc.append(input);
  desc.append(resultItem);
  desc.append(calcField);

  buttons.forEach((element) => {
    const button = createButton(element);
    calcField.append(button);
  });
}

export {
  input, calcField, resultItem, render,
};
