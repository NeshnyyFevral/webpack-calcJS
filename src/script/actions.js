import { input, resultItem } from './render';

let action = false;
let curOperator = '';

function calculateString(str) {
  return (new Function(`return ${str}`))();
}

export function clickOnNum(num) {
  if (input.innerHTML === '0') {
    input.innerHTML = num;
    curOperator = num;
    resultItem.innerHTML = +calculateString(input.innerHTML).toFixed(8);
    return;
  }
  if (curOperator.includes('e')) return;
  if (curOperator === '0') input.innerHTML += '.';
  input.innerHTML += num;
  curOperator += num;
  resultItem.innerHTML = +calculateString(input.innerHTML).toFixed(8);
  action = false;
}

export function clickOnAct(act) {
  if (action) return;
  input.innerHTML += act;
  curOperator = '';
  resultItem.innerHTML = '';
  action = true;
}

export function clickOnUnary(unary) {
  if (unary === 'AC') {
    action = false;
    input.innerHTML = '0';
    curOperator = '';
    resultItem.innerHTML = '';
    return;
  }
  if (unary === '±') {
    input.innerHTML = +(calculateString(input.innerHTML) * (-1)).toFixed(8);
    curOperator = input.innerHTML;
    resultItem.innerHTML = '';
    return;
  }

  input.innerHTML = input.innerHTML.slice(0, input.innerHTML.length - curOperator.length);
  curOperator = `${+(calculateString(curOperator) / 100).toFixed(7)}`;
  input.innerHTML += curOperator;
  resultItem.innerHTML = +calculateString(input.innerHTML).toFixed(8);
}

export function clickOnFloatingPoint() {
  if (curOperator.includes('.') || action) return;
  input.innerHTML += '.';
  curOperator += '.';
}

export function clickOnResult() {
  input.innerHTML = +calculateString(input.innerHTML).toFixed(8);
  curOperator = input.innerHTML;
  resultItem.innerHTML = '';
}
