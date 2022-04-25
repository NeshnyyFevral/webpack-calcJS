import { result } from './reactivity';

let action = false;
let curOperator = '';

function calculateString(str) {
  return (new Function(`return ${str}`))();
}

export function clickOnNum(num) {
  if (result.finally === '0') {
    result.finally = num;
    curOperator = num;
    result.prefinally = +calculateString(result.finally).toFixed(8);
    return;
  }
  if (curOperator.includes('e')) return;
  if (curOperator === '0') result.finally += '.';
  result.finally += num;
  curOperator += num;
  result.prefinally = +calculateString(result.finally).toFixed(8);
  action = false;
}

export function clickOnAct(act) {
  if (action) return;
  result.finally += act;
  curOperator = '';
  result.prefinally = '';
  action = true;
}

export function clickOnUnary(unary) {
  if (unary === 'AC') {
    action = false;
    result.finally = '0';
    curOperator = '';
    result.prefinally = '';
    return;
  }
  if (unary === '±') {
    result.finally = +(calculateString(result.finally) * (-1)).toFixed(8);
    curOperator = result.finally;
    result.prefinally = '';
    return;
  }

  result.finally = result.finally.slice(0, result.finally.length - curOperator.length);
  curOperator = `${+(calculateString(curOperator) / 100).toFixed(7)}`;
  result.finally += curOperator;
  result.prefinally = +calculateString(result.finally).toFixed(8);
}

export function clickOnFloatingPoint() {
  if (curOperator.includes('.') || action) return;
  action = true;
  result.finally += '.';
  curOperator += '.';
}

export function clickOnResult() {
  result.finally = +calculateString(result.finally).toFixed(8);
  curOperator = result.finally;
  result.prefinally = '';
}
