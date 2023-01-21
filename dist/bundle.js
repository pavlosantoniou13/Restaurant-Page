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

/***/ "./src/clear-box.js":
/*!**************************!*\
  !*** ./src/clear-box.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nfunction clearBox(content, card){\n    content.removeChild(card)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearBox);\n\n//# sourceURL=webpack://restaurant/./src/clear-box.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst content = document.querySelector(\".content\")\n\nfunction pageLoad(){\n    //Create all elements\n    let card1 = document.createElement(\"div\");\n    let title = document.createElement(\"h1\")\n    let cardText = document.createElement(\"div\")\n    let para = document.createElement(\"p\");\n\n    content.appendChild(card1).className = \"card\";\n    card1.appendChild(title).className = \"title\";\n    card1.appendChild(cardText).className = \"card-text\";\n    cardText.appendChild(para).className = \"para\";\n\n    title.innerHTML = \"gamieste\"\n    cardText.innerHTML = \"htan enas gaidaros me megala autia cringe\"\n\n\n\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _clear_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clear-box */ \"./src/clear-box.js\");\n/* harmony import */ var _replace_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./replace-content */ \"./src/replace-content.js\");\n\n\n\n\nconst content = document.querySelector(\".content\")\nconst menuBtn = document.querySelector(\".menu\")\nconst homeBtn = document.querySelector(\".home\")\n;(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n\nhomeBtn.addEventListener(\"click\", () => {\n  // move the card declaration here\n  const card = document.querySelector(\".card\")\n  ;(0,_clear_box__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(content, card)\n    ;(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    \n})\n\n\n\nmenuBtn.addEventListener(\"click\", () => {\n  // and moved the card declaration here\n  const card = document.querySelector(\".card\")\n  ;(0,_clear_box__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(content, card)\n  ;(0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n})\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst content = document.querySelector(\".content\")\n\nfunction menu(){\n    //Create all elements\n    let card = document.createElement(\"div\");\n    let title = document.createElement(\"h1\")\n    let cardText = document.createElement(\"div\")\n    let para = document.createElement(\"p\");\n\n    content.appendChild(card).className = \"card\";\n    card.appendChild(title).className = \"title\";\n    card.appendChild(cardText).className = \"card-text\";\n    cardText.appendChild(para).className = \"para\";\n\n    title.innerHTML = \"Menu\"\n    cardText.innerHTML = \"tao tao tao\"\n\n\n    \n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/replace-content.js":
/*!********************************!*\
  !*** ./src/replace-content.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst content =  document.querySelector(\".content\")\nconst contentItem = content.children[0]\n\nfunction replace(newItem, oldItem){\n    const contentItem = content.children[0]\n    content.replaceChild(newItem, oldItem)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (replace);\n\n//# sourceURL=webpack://restaurant/./src/replace-content.js?");

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