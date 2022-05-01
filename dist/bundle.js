/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.scss */ \"./src/style/style.scss\");\n/* harmony import */ var _script_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/render */ \"./src/script/render.js\");\n/* harmony import */ var _script_tabIvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script/tabIvents */ \"./src/script/tabIvents.js\");\n/* harmony import */ var _script_reactivity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script/reactivity */ \"./src/script/reactivity.js\");\n\n\n\n\n_script_render__WEBPACK_IMPORTED_MODULE_1__.calcField.addEventListener('keydown', () => (0,_script_tabIvents__WEBPACK_IMPORTED_MODULE_2__.tabIvents)());\n(0,_script_reactivity__WEBPACK_IMPORTED_MODULE_3__.watcher)(() => {\n  (0,_script_render__WEBPACK_IMPORTED_MODULE_1__.render)(_script_render__WEBPACK_IMPORTED_MODULE_1__.calc, _script_reactivity__WEBPACK_IMPORTED_MODULE_3__.result[\"finally\"], _script_reactivity__WEBPACK_IMPORTED_MODULE_3__.result.prefinally);\n});\n\n//# sourceURL=webpack://webpack-formyself/./src/index.js?");

/***/ }),

/***/ "./src/script/actions.js":
/*!*******************************!*\
  !*** ./src/script/actions.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clickOnAct\": () => (/* binding */ clickOnAct),\n/* harmony export */   \"clickOnFloatingPoint\": () => (/* binding */ clickOnFloatingPoint),\n/* harmony export */   \"clickOnNum\": () => (/* binding */ clickOnNum),\n/* harmony export */   \"clickOnResult\": () => (/* binding */ clickOnResult),\n/* harmony export */   \"clickOnUnary\": () => (/* binding */ clickOnUnary)\n/* harmony export */ });\n/* harmony import */ var _reactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reactivity */ \"./src/script/reactivity.js\");\n\nlet action = false;\nlet curOperator = '';\n\nconst calculateString = str => new Function(`return ${str}`)();\n\nconst clickOnNum = num => {\n  if (_reactivity__WEBPACK_IMPORTED_MODULE_0__.result[\"finally\"] === '0') {\n    _reactivity__WEBPACK_IMPORTED_MODULE_0__.result[\"finally\"] = num;\n    curOperator = num;\n    _reactivity__WEBPACK_IMPORTED_MODULE_0__.result.prefinally = `${+calculateString(_reactivity__WEBPACK_IMPORTED_MODULE_0__.result[\"finally\"]).toFixed(8)}`;\n    return;\n  }\n\n  if (curOperator.includes('e')) return;\n  if (curOperator === '0') _reactivity__WEBPACK_IMPORTED_MODULE_0__.result[\"finally\"] += '.';\n  _reactivity__WEBPACK_IMPORTED_MODULE_0__.result[\"finally\"] += num;\n  curOperator += num;\n  _reactivity__WEBPACK_IMPORTED_MODULE_0__.result.prefinally = `${+calculateString(_reactivity__WEBPACK_IMPORTED_MODULE_0__.result[\"finally\"]).toFixed(8)}`;\n  action = false;\n};\n\nconst clickOnAct = act => {\n  if (action) return;\n  _reactivity__WEBPACK_IMPORTED_MODULE_0__.result[\"finally\"] += act;\n  curOperator = '';\n  _reactivity__WEBPACK_IMPORTED_MODULE_0__.result.prefinally = '';\n  action = true;\n};\n\nconst clickOnUnary = unary => {\n  if (unary === 'AC') {\n    action = false;\n    _reactivity__WEBPACK_IMPORTED_MODULE_0__.result[\"finally\"] = '0';\n    curOperator = '';\n    _reactivity__WEBPACK_IMPORTED_MODULE_0__.result.prefinally = '';\n    return;\n  }\n\n  if (unary === '±') {\n    _reactivity__WEBPACK_IMPORTED_MODULE_0__.result[\"finally\"] = `${+(calculateString(_reactivity__WEBPACK_IMPORTED_MODULE_0__.result[\"finally\"]) * -1).toFixed(8)}`;\n    curOperator = _reactivity__WEBPACK_IMPORTED_MODULE_0__.result[\"finally\"];\n    _reactivity__WEBPACK_IMPORTED_MODULE_0__.result.prefinally = '';\n    return;\n  }\n\n  _reactivity__WEBPACK_IMPORTED_MODULE_0__.result[\"finally\"] = _reactivity__WEBPACK_IMPORTED_MODULE_0__.result[\"finally\"].slice(0, _reactivity__WEBPACK_IMPORTED_MODULE_0__.result[\"finally\"].length - curOperator.length);\n  curOperator = `${+(calculateString(curOperator) / 100).toFixed(7)}`;\n  _reactivity__WEBPACK_IMPORTED_MODULE_0__.result[\"finally\"] += curOperator;\n  _reactivity__WEBPACK_IMPORTED_MODULE_0__.result.prefinally = `${+calculateString(_reactivity__WEBPACK_IMPORTED_MODULE_0__.result[\"finally\"]).toFixed(8)}`;\n};\n\nconst clickOnFloatingPoint = () => {\n  if (curOperator.includes('.') || action) return;\n  action = true;\n  _reactivity__WEBPACK_IMPORTED_MODULE_0__.result[\"finally\"] += '.';\n  curOperator += '.';\n};\n\nconst clickOnResult = () => {\n  _reactivity__WEBPACK_IMPORTED_MODULE_0__.result[\"finally\"] = `${+calculateString(_reactivity__WEBPACK_IMPORTED_MODULE_0__.result[\"finally\"]).toFixed(8)}`;\n  curOperator = _reactivity__WEBPACK_IMPORTED_MODULE_0__.result[\"finally\"];\n  _reactivity__WEBPACK_IMPORTED_MODULE_0__.result.prefinally = '';\n};\n\n\n\n//# sourceURL=webpack://webpack-formyself/./src/script/actions.js?");

/***/ }),

/***/ "./src/script/buttons.js":
/*!*******************************!*\
  !*** ./src/script/buttons.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buttons\": () => (/* binding */ buttons)\n/* harmony export */ });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./src/script/actions.js\");\n\nconst buttons = [{\n  text: 'AC',\n  onClick: () => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.clickOnUnary)('AC')\n}, {\n  text: '±',\n  onClick: () => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.clickOnUnary)('±')\n}, {\n  text: '%',\n  onClick: () => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.clickOnUnary)('%')\n}, {\n  text: '/',\n  onClick: () => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.clickOnAct)('/')\n}, {\n  text: '7',\n  onClick: () => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.clickOnNum)('7')\n}, {\n  text: '8',\n  onClick: () => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.clickOnNum)('8')\n}, {\n  text: '9',\n  onClick: () => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.clickOnNum)('9')\n}, {\n  text: '*',\n  onClick: () => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.clickOnAct)('*')\n}, {\n  text: '4',\n  onClick: () => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.clickOnNum)('4')\n}, {\n  text: '5',\n  onClick: () => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.clickOnNum)('5')\n}, {\n  text: '6',\n  onClick: () => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.clickOnNum)('6')\n}, {\n  text: '-',\n  onClick: () => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.clickOnAct)('-')\n}, {\n  text: '1',\n  onClick: () => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.clickOnNum)('1')\n}, {\n  text: '2',\n  onClick: () => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.clickOnNum)('2')\n}, {\n  text: '3',\n  onClick: () => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.clickOnNum)('3')\n}, {\n  text: '+',\n  onClick: () => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.clickOnAct)('+')\n}, {\n  text: '0',\n  onClick: () => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.clickOnNum)('0')\n}, {\n  text: '.',\n  onClick: () => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.clickOnFloatingPoint)()\n}, {\n  text: '=',\n  onClick: () => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.clickOnResult)()\n}];\n\n//# sourceURL=webpack://webpack-formyself/./src/script/buttons.js?");

/***/ }),

/***/ "./src/script/reactivity.js":
/*!**********************************!*\
  !*** ./src/script/reactivity.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"result\": () => (/* binding */ result),\n/* harmony export */   \"watcher\": () => (/* binding */ watcher)\n/* harmony export */ });\nlet target = null;\n\nclass Dep {\n  constructor() {\n    this.subscribers = [];\n  }\n\n  depend() {\n    if (target && !this.subscribers.includes(target)) {\n      this.subscribers.push(target);\n    }\n  }\n\n  notify() {\n    this.subscribers.forEach(e => e());\n  }\n\n}\n\nconst result = {\n  prefinally: '',\n  finally: '0'\n};\nObject.keys(result).forEach(key => {\n  let value = result[key];\n  const dep = new Dep();\n  Object.defineProperty(result, key, {\n    get() {\n      dep.depend();\n      return value;\n    },\n\n    set(newValue) {\n      value = newValue;\n      dep.notify();\n    }\n\n  });\n});\n\nconst watcher = func => {\n  target = func;\n  target();\n  target = null;\n};\n\n\n\n//# sourceURL=webpack://webpack-formyself/./src/script/reactivity.js?");

/***/ }),

/***/ "./src/script/render.js":
/*!******************************!*\
  !*** ./src/script/render.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calc\": () => (/* binding */ calc),\n/* harmony export */   \"calcField\": () => (/* binding */ calcField),\n/* harmony export */   \"input\": () => (/* binding */ input),\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"resultItem\": () => (/* binding */ resultItem)\n/* harmony export */ });\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons */ \"./src/script/buttons.js\");\n\nconst calc = document.querySelector('.calc');\n\nconst createButton = b => {\n  const button = document.createElement('button');\n  if (b.text === 'AC' || b.text === '±' || b.text === '%') button.classList.add('calc__unary');else if (b.text === '/' || b.text === '+' || b.text === '-' || b.text === '*' || b.text === '=') button.classList.add('calc__act');else button.classList.add('calc__num');\n  if (b.text === '0') button.classList.add('calc__num--long');\n  button.innerText = b.text;\n  button.onclick = b.onClick;\n  return button;\n};\n\nconst createElement = (tagName, className) => {\n  const element = document.createElement(tagName);\n  element.classList.add(className);\n  return element;\n};\n\nconst input = createElement('div', 'calc__input');\nconst calcField = createElement('div', 'calc__field');\nconst resultItem = createElement('div', 'calc__result');\nconst buttonElements = [];\n_buttons__WEBPACK_IMPORTED_MODULE_0__.buttons.forEach(element => {\n  const button = createButton(element);\n  buttonElements.push(button);\n});\n\nconst render = (desc, result, preResult) => {\n  desc.append(input);\n  desc.append(resultItem);\n  desc.append(calcField);\n  buttonElements.forEach(buttonElement => {\n    calcField.append(buttonElement);\n  });\n  input.innerText = result;\n  resultItem.innerText = preResult;\n};\n\n\n\n//# sourceURL=webpack://webpack-formyself/./src/script/render.js?");

/***/ }),

/***/ "./src/script/tabIvents.js":
/*!*********************************!*\
  !*** ./src/script/tabIvents.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tabIvents\": () => (/* binding */ tabIvents)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/script/render.js\");\n\nconst tabIvents = () => {\n  const firstTabElem = _render__WEBPACK_IMPORTED_MODULE_0__.calcField.children[0];\n  const lastTabElem = _render__WEBPACK_IMPORTED_MODULE_0__.calcField.children[_render__WEBPACK_IMPORTED_MODULE_0__.calcField.children.length - 1];\n\n  lastTabElem.onkeydown = event => {\n    if (event.key === 'Tab' && !event.shiftKey) {\n      firstTabElem.focus();\n      return false;\n    }\n\n    return null;\n  };\n\n  firstTabElem.onkeydown = event => {\n    if (event.key === 'Tab' && event.shiftKey) {\n      lastTabElem.focus();\n      return false;\n    }\n\n    return null;\n  };\n};\n\n//# sourceURL=webpack://webpack-formyself/./src/script/tabIvents.js?");

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-formyself/./src/style/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;