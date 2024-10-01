/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/javascripts/index.js":
/*!*************************************!*\
  !*** ./assets/javascripts/index.js ***!
  \*************************************/
/***/ (() => {

eval("(async () => {\r\n    const response = await fetch(\"https://api.restful-api.dev/objects\");\r\n    const json = await response.json();\r\n    console.log(json);\r\n})();\r\n\n\n//# sourceURL=webpack://contoh-webpack-native/./assets/javascripts/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/javascripts/index.js"]();
/******/ 	
/******/ })()
;