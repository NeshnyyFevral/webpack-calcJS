import { result } from './reactivity';

let action = false;
let curOperator = '';
let prefinally = '';

const calculateString = (str) => (new Function(`return ${str}`))();

const clickOnNum = (num) => {
  if (result.finally === '0') {
    prefinally = `${+calculateString(num).toFixed(8)}`;
    result.finally = num;
    curOperator = num;
    return;
  }
  if (curOperator.includes('e')) return;
  if (curOperator === '0') result.finally += '.';
  prefinally = `${+calculateString(result.finally + num).toFixed(8)}`;
  result.finally += num;
  curOperator += num;
  action = false;
};

const clickOnAct = (act) => {
  if (action) return;
  prefinally = '';
  result.finally += act;
  curOperator = '';
  action = true;
};

const clickOnUnary = (unary) => {
  if (unary === 'AC') {
    action = false;
    prefinally = '';
    result.finally = '0';
    curOperator = '';
    return;
  }
  if (unary === '±') {
    prefinally = '';
    result.finally = `${+(calculateString(result.finally) * (-1)).toFixed(8)}`;
    curOperator = result.finally;
    return;
  }

  prefinally = '';
  result.finally = result.finally.slice(0, result.finally.length - curOperator.length);
  curOperator = `${+(calculateString(curOperator) / 100).toFixed(8)}`;
  result.finally += curOperator;
};

const clickOnFloatingPoint = () => {
  if (curOperator.includes('.') || action) return;
  action = true;
  result.finally += '.';
  curOperator += '.';
};

const clickOnResult = () => {
  prefinally = '';
  result.finally = `${+calculateString(result.finally).toFixed(8)}`;
  curOperator = result.finally;
};

export {
  clickOnNum, clickOnAct, clickOnUnary, clickOnFloatingPoint, clickOnResult, prefinally,
};
