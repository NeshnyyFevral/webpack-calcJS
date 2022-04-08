import {
  clickOnNum, clickOnAct, clickOnUnary, clickOnFloatingPoint, clickOnResult,
} from './actions';

export const buttons = [
  { text: 'AC', onClick: () => clickOnUnary('AC') },
  { text: '±', onClick: () => clickOnUnary('±') },
  { text: '%', onClick: () => clickOnUnary('%') },
  { text: '/', onClick: () => clickOnAct('/') },
  { text: '7', onClick: () => clickOnNum('7') },
  { text: '8', onClick: () => clickOnNum('8') },
  { text: '9', onClick: () => clickOnNum('9') },
  { text: '*', onClick: () => clickOnAct('*') },
  { text: '4', onClick: () => clickOnNum('4') },
  { text: '5', onClick: () => clickOnNum('5') },
  { text: '6', onClick: () => clickOnNum('6') },
  { text: '-', onClick: () => clickOnAct('-') },
  { text: '1', onClick: () => clickOnNum('1') },
  { text: '2', onClick: () => clickOnNum('2') },
  { text: '3', onClick: () => clickOnNum('3') },
  { text: '+', onClick: () => clickOnAct('+') },
  { text: '0', onClick: () => clickOnNum('0') },
  { text: '.', onClick: () => clickOnFloatingPoint() },
  { text: '=', onClick: () => clickOnResult() },
];
