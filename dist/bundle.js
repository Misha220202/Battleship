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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/earth.jpg */ \"./src/assets/images/earth.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    position: relative;\n    padding: 2rem;\n    display: grid;\n    place-items: center;\n    min-height: 100vh;\n    font-family: gagliostro;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    color: white;\n}\n\n.gameCenter {\n    padding: 3rem;\n    background-color: rgba(58, 58, 58, 0.5);\n}\n\n.setPlayerBoard {\n    display: grid;\n    grid-template-columns: auto 3fr;\n    grid-template-rows: auto 5fr auto;\n    gap: 2rem;\n}\n\n.setPlayerBoard>h2 {\n    grid-column: 1/3;\n    text-align: center;\n    padding: 1rem 0;\n    border-radius: 0.5rem;\n    background-color: black;\n}\n\n.playerBoard,\n.botBoard {\n    width: 35rem;\n    height: 35rem;\n    background-color: rgba(29, 37, 82, 0.5);\n    outline: 2px solid white;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.chooseShip {\n    display: grid;\n    gap: 1rem;\n    border: 1px solid white;\n    border-radius: 0.5rem;\n}\n\n.shipContainer {\n    display: flex;\n    align-items: center;\n    border: 1px solid white;\n    border-radius: 0.5rem;\n    padding: 0 1rem;\n}\n\n.shipContainer>span {\n    width: 6rem;\n    font-size: 1.3rem;\n    text-align: center;\n}\n\n.shipContainer img {\n    height: 3.5rem;\n    max-width: 17rem;\n    filter: invert(54%) sepia(91%) saturate(200%) hue-rotate(200deg) brightness(90%) contrast(105%);\n}\n\n.controlBoard {\n    grid-column: 1/3;\n    display: flex;\n    justify-content: space-around;\n}\n\n.controlBoard>button {\n    height: 4rem;\n    width: 25%;\n    border: 2px solid grey;\n    border-radius: 0.5rem;\n    background-color: black;\n    color: white;\n    font-size: 1.3rem;\n}\n\n.gaming {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr auto 1fr;\n    gap: 3rem;\n}\n\n.screen {\n    grid-column: 1/3;\n    background-color: rgba(232, 232, 232, 0.5);\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    font-size: 1.5rem;\n}\n\n.hidden {\n    visibility: hidden;\n}\n\n.chosen {\n    background-color: rgb(82, 79, 89);\n}\n\n.cell {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    outline: 1px solid white;\n}\n\n.cell>div {\n    height: 75%;\n    width: 75%;\n}\n\n.playerBoard .placed {\n    background-color: darkblue;\n}\n\n.setPlayerBoard>.playerBoard .adjacent,\n.sunkAdjacent {\n    background-color: lightgray;\n}\n\n.playerBoard .missed,\n.botBoard .missed {\n    background-color: red;\n    border-radius: 50%;\n}\n\n.playerBoard .hit,\n.botBoard .hit {\n    background-color: green;\n    border-radius: 50%;\n}\n\n.active {\n    background-color: blue;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\nfooter {\n    position: absolute;\n    bottom: 0.2rem;\n    text-align: center;\n    width: 100%;\n    font: normal 1rem sans-serif;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/boardFunctions.js":
/*!*******************************!*\
  !*** ./src/boardFunctions.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateBoard: () => (/* binding */ updateBoard)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\nconst updateBoard = (node, friend, enemy) => {\n  while (node.firstChild) {\n    node.removeChild(node.firstChild);\n  }\n  for (let i = 0; i < friend.gameBoard.size; i++) {\n    for (let j = 0; j < friend.gameBoard.size; j++) {\n      const cell = document.createElement('div');\n      cell.innerHTML = `\n            <div class=\"hitOrMiss\"></div>`;\n      cell.classList.add('cell');\n      cell.dataset.info = `${i},${j}`;\n      cell.obj = friend.gameBoard.board[i][j];\n      const hitOrMiss = cell.firstElementChild;\n      if (cell.obj) {\n        cell.classList.add('placed');\n        if (enemy.attacks.has(`${i},${j}`)) {\n          hitOrMiss.classList.remove('placed');\n          hitOrMiss.classList.add('hit');\n        }\n      }\n      if (friend.gameBoard.getAllAdjacentCoordinates().has(`${i},${j}`)) {\n        cell.classList.add('adjacent');\n      }\n      if (friend.gameBoard.getSunkAdjacentCoordinates().has(`${i},${j}`)) {\n        cell.classList.add('sunkAdjacent');\n      }\n      if (friend.gameBoard.missedAttacks.has(`${i},${j}`)) {\n        hitOrMiss.classList.add('missed');\n      }\n      node.appendChild(cell);\n    }\n  }\n};\n\n\n//# sourceURL=webpack://battleship/./src/boardFunctions.js?");

/***/ }),

/***/ "./src/findParentContainer.js":
/*!************************************!*\
  !*** ./src/findParentContainer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   findParentContainerByClass: () => (/* binding */ findParentContainerByClass)\n/* harmony export */ });\nconst findParentContainerByClass = (target, className) => {\n  if (target.classList.contains(className)) {\n    return target;\n  }\n  if (target == document.body) {\n    return null;\n  }\n  return findParentContainerByClass(target.parentElement, className);\n};\n\n\n//# sourceURL=webpack://battleship/./src/findParentContainer.js?");

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameBoard: () => (/* binding */ GameBoard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\nclass GameBoard {\n  constructor(size = 10) {\n    this.size = size;\n    this.init();\n  }\n\n  init() {\n    this.board = Array(this.size)\n      .fill()\n      .map(() => Array(this.size).fill(null));\n    this.missedAttacks = new Set();\n    this.shipsToPlace = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.generateShips)();\n    this.ships = [];\n    this.shipBeingAttacked = null;\n  }\n\n  isValidCoordinate(x, y) {\n    return x >= 0 && x < this.size && y >= 0 && y < this.size;\n  }\n\n  getAdjacent(x, y) {\n    return [\n      [x - 1, y - 1],\n      [x - 1, y],\n      [x - 1, y + 1],\n      [x, y - 1],\n      [x, y + 1],\n      [x + 1, y - 1],\n      [x + 1, y],\n      [x + 1, y + 1],\n    ];\n  }\n\n  getAllAdjacentCoordinates() {\n    const allAdjacents = new Set();\n    for (let shipObj of this.ships) {\n      for (let [adjX, adjY] of shipObj.adjacentCoordinates) {\n        allAdjacents.add(`${adjX},${adjY}`);\n      }\n    }\n    return allAdjacents;\n  }\n\n  getSunkAdjacentCoordinates() {\n    const sunkAdjacents = new Set();\n    for (let shipObj of this.ships.filter((shipObj) => shipObj.ship.isSunk())) {\n      for (let [adjX, adjY] of shipObj.adjacentCoordinates) {\n        sunkAdjacents.add(`${adjX},${adjY}`);\n      }\n    }\n    return sunkAdjacents;\n  }\n\n  canPlaceShip(shipCoordinates) {\n    const allAdjacents = this.getAllAdjacentCoordinates();\n    for (let [x, y] of shipCoordinates) {\n      if (\n        !this.isValidCoordinate(x, y) ||\n        this.board[x][y] !== null ||\n        allAdjacents.has(`${x},${y}`)\n      ) {\n        return false;\n      }\n    }\n    return true;\n  }\n\n  getShipCoordinates(ship, x, y, direction) {\n    const shipCoordinates = [];\n    if (direction == 'horizontal') {\n      for (let i = 0; i < ship.length; i++) {\n        shipCoordinates.push([x, y + i]);\n      }\n    } else if (direction == 'vertical') {\n      for (let j = 0; j < ship.length; j++) {\n        shipCoordinates.push([x + j, y]);\n      }\n    }\n    return shipCoordinates;\n  }\n\n  placeShip(ship, x, y, direction = 'horizontal') {\n    const shipCoordinates = this.getShipCoordinates(ship, x, y, direction);\n    if (this.canPlaceShip(shipCoordinates)) {\n      const adjacentCoordinates = new Set();\n      for (let [shipX, shipY] of shipCoordinates) {\n        this.board[shipX][shipY] = ship;\n\n        const adjacents = this.getAdjacent(shipX, shipY);\n        for (let [adjX, adjY] of adjacents) {\n          const adjCoordinate = `${adjX},${adjY}`;\n          if (\n            this.isValidCoordinate(adjX, adjY) &&\n            !shipCoordinates.some(([sX, sY]) => sX == adjX && sY == adjY)\n          ) {\n            adjacentCoordinates.add(adjCoordinate);\n          }\n        }\n      }\n\n      this.shipsToPlace.splice(this.shipsToPlace.indexOf(ship), 1);\n\n      const placedShip = {\n        ship: ship,\n        coordinates: shipCoordinates,\n        adjacentCoordinates: Array.from(adjacentCoordinates).map((coord) =>\n          coord.split(',').map(Number)\n        ),\n      };\n      this.ships.push(placedShip);\n\n      return placedShip;\n    }\n  }\n\n  placeShipRandomly() {\n    while (this.shipsToPlace[0]) {\n      const ship = this.shipsToPlace[0];\n      let placed = false;\n      while (!placed) {\n        const direction = Math.random() > 0.5 ? 'horizontal' : 'vertical';\n        const x = Math.floor(Math.random() * this.size);\n        const y = Math.floor(Math.random() * this.size);\n        const shipCoordinates = this.getShipCoordinates(ship, x, y, direction);\n        if (this.canPlaceShip(shipCoordinates)) {\n          this.placeShip(ship, x, y, direction);\n          placed = true;\n        }\n      }\n    }\n  }\n\n  receiveAttack(x, y) {\n    for (let shipObj of this.ships) {\n      const { ship, coordinates } = shipObj;\n      for (let [shipX, shipY] of coordinates) {\n        if (shipX == x && shipY == y) {\n          ship.hit();\n          this.shipBeingAttacked = ship;\n          if (ship.isSunk()) {\n            this.shipBeingAttacked = null;\n            return ship.length;\n          }\n          return ship.hits;\n        }\n      }\n    }\n    this.missedAttacks.add(`${x},${y}`);\n    return false;\n  }\n\n  quantityShipsSunk() {\n    return this.ships.filter((shipObj) => !shipObj.ship.isSunk()).length;\n  }\n\n  allShipsSunk() {\n    return this.ships.every((shipObj) => shipObj.ship.isSunk());\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/gameBoard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _findParentContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./findParentContainer */ \"./src/findParentContainer.js\");\n/* harmony import */ var _boardFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boardFunctions */ \"./src/boardFunctions.js\");\n\n\n\n\n\n\nconst player = new _player__WEBPACK_IMPORTED_MODULE_1__.Player();\nconst bot = new _player__WEBPACK_IMPORTED_MODULE_1__.Bot();\nbot.gameBoard.placeShipRandomly();\n\nconst gameCenter = document.querySelector('.gameCenter');\n\nfunction buildStartPageDom() {\n  const carrierURL = __webpack_require__(/*! ./assets/images/carrier.svg */ \"./src/assets/images/carrier.svg\");\n  const battleShipURL = __webpack_require__(/*! ./assets/images/battleShip.svg */ \"./src/assets/images/battleShip.svg\");\n  const subMarineURL = __webpack_require__(/*! ./assets/images/subMarine.svg */ \"./src/assets/images/subMarine.svg\");\n  const destroyerURL = __webpack_require__(/*! ./assets/images/destroyer.svg */ \"./src/assets/images/destroyer.svg\");\n  const patrolBoatURL = __webpack_require__(/*! ./assets/images/patrolBoat.svg */ \"./src/assets/images/patrolBoat.svg\");\n\n  gameCenter.innerHTML = `\n    <div class=\"setPlayerBoard\">\n        <h2>Place your ships</h2>\n        <div class=\"playerBoard\"></div>\n        <div class=\"chooseShip\">\n            <div class=\"shipContainer\" id=\"carrier\">\n                <span>carrier<br>(5f)</span>\n                <div class=\"shipIcon\"><img src=\"${carrierURL}\" alt=\"carrier\"></div>\n            </div>\n            <div class=\"shipContainer\" id=\"battleShip\">\n                <span>battleShip<br>(4f)</span>\n                <div class=\"shipIcon\"><img src=\"${battleShipURL}\" alt=\"battleShip\"></div>\n            </div>\n            <div class=\"shipContainer\" id=\"subMarine\">\n                <span>subMarine<br>(3f)</span>\n                <div class=\"shipIcon\"><img src=\"${subMarineURL}\" alt=\"subMarine\"></div>\n            </div>\n            <div class=\"shipContainer\" id=\"destroyer\">\n                <span>destroyer<br>(3f)</span>\n                <div class=\"shipIcon\"><img src=\"${destroyerURL}\" alt=\"destroyer\"></div>\n            </div>\n            <div class=\"shipContainer\" id=\"patrolBoat\">\n                <span>patrolBoat<br>(2f)</span>\n                <div class=\"shipIcon\"><img src=\"${patrolBoatURL}\" alt=\"patrolBoat\"></div>\n            </div>\n        </div>\n        <div class=\"controlBoard\">\n            <button value=\"horizontal\">horizontal</button>\n            <button value=\"random\">Random</button>\n            <button value=\"reset\">Reset</button>\n            <button value=\"start\">Start</button>\n        </div>\n    </div>`;\n}\n\nfunction initStartPage() {\n  const setPlayerBoard = document.querySelector('.setPlayerBoard');\n\n  const playerBoard = setPlayerBoard.querySelector('.playerBoard');\n  (0,_boardFunctions__WEBPACK_IMPORTED_MODULE_3__.updateBoard)(playerBoard, player, bot);\n\n  const chooseShip = setPlayerBoard.querySelector('.chooseShip');\n  const chooseCarrier = chooseShip.querySelector('#carrier');\n  const chooseBattleShip = chooseShip.querySelector('#battleShip');\n  const chooseSubMarine = chooseShip.querySelector('#subMarine');\n  const chooseDestroyer = chooseShip.querySelector('#destroyer');\n  const choosePatrolBoat = chooseShip.querySelector('#patrolBoat');\n\n  const [patrolBoat, destroyer, subMarine, battleShip, carrier] =\n    player.gameBoard.shipsToPlace;\n  chooseCarrier.obj = carrier;\n  chooseBattleShip.obj = battleShip;\n  chooseSubMarine.obj = subMarine;\n  chooseDestroyer.obj = destroyer;\n  choosePatrolBoat.obj = patrolBoat;\n\n  const chooseShipNodes = setPlayerBoard.querySelectorAll('.shipContainer');\n\n  const controlBoard = setPlayerBoard.querySelector('.controlBoard');\n  let direction = 'horizontal';\n\n  controlBoard.addEventListener('click', (e) => {\n    const target = e.target;\n    if (target.value == 'horizontal' || target.value == 'vertical') {\n      target.value = target.value == 'horizontal' ? 'vertical' : 'horizontal';\n      direction = target.value;\n      target.textContent = target.value;\n    } else if (target.value == 'random') {\n      player.gameBoard.init();\n      player.gameBoard.placeShipRandomly();\n      (0,_boardFunctions__WEBPACK_IMPORTED_MODULE_3__.updateBoard)(playerBoard, player, bot);\n      chooseShipNodes.forEach((chooseShipNode) => {\n        chooseShipNode.classList.remove('chosen');\n        chooseShipNode.classList.add('hidden');\n      });\n    } else if (target.value == 'reset') {\n      location.reload();\n    } else if (target.value == 'start') {\n      if (player.gameBoard.shipsToPlace.length == 0) {\n        startGame();\n      }\n    }\n  });\n\n  chooseShip.addEventListener('click', (e) => {\n    const target = e.target;\n    const chooseShipNode = (0,_findParentContainer__WEBPACK_IMPORTED_MODULE_2__.findParentContainerByClass)(target, 'shipContainer');\n    if (chooseShipNode && !chooseShipNode.classList.contains('hidden')) {\n      chooseShipNodes.forEach((chooseShipNode) => {\n        chooseShipNode.classList.remove('chosen');\n      });\n      chooseShipNode.classList.add('chosen');\n    }\n  });\n\n  playerBoard.addEventListener('mousemove', (e) => {\n    const chooseShipNode = chooseShip.querySelector('.chosen');\n    const cell = (0,_findParentContainer__WEBPACK_IMPORTED_MODULE_2__.findParentContainerByClass)(e.target, 'cell');\n    if (chooseShipNode && cell.dataset.info) {\n      const cells = playerBoard.querySelectorAll('.cell');\n      cells.forEach((cell) => cell.classList.remove('active'));\n\n      const [mouseY, mouseX] = cell.dataset.info.split(',').map(Number);\n      const size = player.gameBoard.size;\n      const col = mouseX;\n      const row = mouseY;\n      const index = row * size + col;\n\n      const brushWidth = chooseShipNode.obj.length;\n      if (direction == 'horizontal') {\n        if (col + brushWidth - 1 < size) {\n          for (let i = 0; i < brushWidth; i++) {\n            cells[index + i].classList.add('active');\n          }\n        }\n      } else {\n        if (row + brushWidth - 1 < size) {\n          for (let i = 0; i < brushWidth; i++) {\n            cells[index + i * size].classList.add('active');\n          }\n        }\n      }\n    }\n  });\n\n  playerBoard.addEventListener('click', (e) => {\n    const chooseShipNode = chooseShip.querySelector('.chosen');\n    const cell = (0,_findParentContainer__WEBPACK_IMPORTED_MODULE_2__.findParentContainerByClass)(e.target, 'cell');\n    if (chooseShipNode && cell.dataset.info) {\n      const [mouseY, mouseX] = cell.dataset.info.split(',').map(Number);\n      const col = mouseX;\n      const row = mouseY;\n\n      const brushWidth = chooseShipNode.obj.length;\n      const shipCoordinates = [];\n      if (direction == 'horizontal') {\n        for (let i = 0; i < brushWidth; i++) {\n          shipCoordinates.push([row, col + i]);\n        }\n      } else {\n        for (let j = 0; j < brushWidth; j++) {\n          shipCoordinates.push([row + j, col]);\n        }\n      }\n\n      const ship = chooseShipNode.obj;\n      if (player.gameBoard.canPlaceShip(shipCoordinates)) {\n        player.gameBoard.placeShip(ship, row, col, direction);\n        (0,_boardFunctions__WEBPACK_IMPORTED_MODULE_3__.updateBoard)(playerBoard, player, bot);\n        chooseShipNode.classList.remove('chosen');\n        chooseShipNode.classList.add('hidden');\n      }\n    }\n  });\n}\n\nfunction startGame() {\n  gameCenter.innerHTML = `\n        <div class=\"gaming\">\n            <div class=\"screen\">\n                <div class=\"player\">\n                    <p>Player<span class=\"hidden\"> is the Winner!</span></p>\n                    <p><span id=\"playerShips\">5</span> ships left.</p>\n                </div>\n                <div class=\"bot\">\n                    <p>Bot<span class=\"hidden\"> is the Winner!</span></p>\n                    <p><span id=\"botShips\">5</span> ships left.</p>\n                </div>\n            </div>\n            <div class=\"playerBoard\"></div>\n            <div class=\"botBoard\"></div>\n            <div class=\"controlBoard\">\n                <button class=\"restart\">Restart</button>\n            </div>\n        </div>`;\n\n  const gaming = gameCenter.querySelector('.gaming');\n  const playerBoard = gaming.querySelector('.playerBoard');\n  const botBoard = gaming.querySelector('.botBoard');\n  (0,_boardFunctions__WEBPACK_IMPORTED_MODULE_3__.updateBoard)(playerBoard, player, bot);\n  (0,_boardFunctions__WEBPACK_IMPORTED_MODULE_3__.updateBoard)(botBoard, bot, player);\n\n  let playerTurn = true;\n  botBoard.addEventListener('click', (e) => {\n    if (playerTurn&&!player.checkWinner(bot)) {\n      const screen = gaming.querySelector('.screen');\n      const playerScreen = screen.querySelector('.screen>.player .hidden');\n      const playerShip = screen.querySelector('.screen>.player #playerShips');\n      const botScreen = screen.querySelector('.screen>.bot .hidden');\n      const botShip = screen.querySelector('.screen>.bot #botShips');\n\n      const cell = (0,_findParentContainer__WEBPACK_IMPORTED_MODULE_2__.findParentContainerByClass)(e.target, 'cell');\n      const [mouseY, mouseX] = cell.dataset.info.split(',').map(Number);\n      const col = mouseX;\n      const row = mouseY;\n      const attackKey = `${row},${col}`;\n\n      const announceWinner = (name) => {\n        if (!name) {\n          return;\n        }\n        if (name == 'player') {\n          playerScreen.classList.remove('hidden');\n        }\n        if (name == 'bot') {\n          botScreen.classList.remove('hidden');\n        }\n      };\n\n      if (!player.attacks.has(attackKey)) {\n        player.attack(bot.gameBoard, row, col);\n        playerTurn=false;\n        (0,_boardFunctions__WEBPACK_IMPORTED_MODULE_3__.updateBoard)(botBoard, bot, player);\n        botShip.textContent = bot.gameBoard.quantityShipsSunk();\n        announceWinner(player.checkWinner(bot));\n        if (!player.checkWinner(bot)) {\n          setTimeout(() => {\n            bot.botAttack(player.gameBoard);\n            playerTurn = true;\n            (0,_boardFunctions__WEBPACK_IMPORTED_MODULE_3__.updateBoard)(playerBoard, player, bot);\n            playerShip.textContent = player.gameBoard.quantityShipsSunk();\n            announceWinner(player.checkWinner(bot));\n          }, 500);\n        }\n      }\n    }\n  });\n\n  const restart = gaming.querySelector('.restart');\n  restart.addEventListener('click', () => {\n    location.reload();\n  });\n}\n\nwindow.onload = () => {\n  buildStartPageDom();\n  initStartPage();\n};\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Bot: () => (/* binding */ Bot),\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\n\n\nclass Player {\n  constructor() {\n    this.gameBoard = new _gameBoard__WEBPACK_IMPORTED_MODULE_0__.GameBoard();\n    this.attacks = new Set();\n    this.name = 'player';\n  }\n\n  attack(opponentGameBoard, x, y) {\n    const attackKey = `${x},${y}`;\n    if (this.attacks.has(attackKey)) {\n      return false;\n    }\n    this.attacks.add(attackKey);\n    return opponentGameBoard.receiveAttack(x, y);\n  }\n\n  checkWinner(opponent) {\n    if (this.gameBoard.allShipsSunk()) {\n      return opponent.name;\n    }\n    if (opponent.gameBoard.allShipsSunk()) {\n      return this.name;\n    }\n    return null;\n  }\n}\n\nclass Bot extends Player {\n  constructor() {\n    super();\n    this.name = 'bot';\n    this.firstTarget = null; //firstHit\n    this.currentTarget = null; //lastHit\n    this.lastHitDirection = null;\n  }\n\n  #oppositeDirection(direction) {\n    const newDirection =\n      direction == 'left'\n        ? 'right'\n        : direction == 'right'\n          ? 'left'\n          : direction == 'up'\n            ? 'down'\n            : direction == 'down'\n              ? 'up'\n              : null;\n    return newDirection;\n  }\n\n  #calculateCoord(lastHitDirection, x, y) {\n    const [nextX, nextY] =\n      lastHitDirection == 'left'\n        ? [x, y - 1]\n        : lastHitDirection == 'right'\n          ? [x, y + 1]\n          : lastHitDirection == 'up'\n            ? [x - 1, y]\n            : lastHitDirection == 'down'\n              ? [x + 1, y]\n              : null;\n    return [nextX, nextY];\n  }\n\n  #calculateDirection([firstX, firstY], [secondX, secondY]) {\n    const direction =\n      secondX == firstX && secondY == firstY - 1\n        ? 'left'\n        : secondX == firstX && secondY == firstY + 1\n          ? 'right'\n          : secondX == firstX - 1 && secondY == firstY\n            ? 'up'\n            : secondX == firstX + 1 && secondY == firstY\n              ? 'down'\n              : null;\n    return direction;\n  }\n\n  attack(opponentGameBoard, x, y) {\n    const hit = super.attack(opponentGameBoard, x, y);\n    if (opponentGameBoard.shipBeingAttacked) {\n      if (hit == 1) {\n        this.firstTarget = [x, y];\n        this.currentTarget = [x, y];\n      } else if (hit > 1 && hit < opponentGameBoard.shipBeingAttacked.length) {\n        if (this.currentTarget) {\n          const [targetX, targetY] = this.currentTarget;\n          this.lastHitDirection = this.#calculateDirection(\n            [targetX, targetY],\n            [x, y]\n          );\n        }\n        this.currentTarget = [x, y];\n      } else if (hit == false) {\n        this.currentTarget = this.firstTarget;\n        this.lastHitDirection = this.#oppositeDirection(this.lastHitDirection);\n      }\n    } else {\n      this.firstTarget = null;\n      this.currentTarget = null;\n      this.lastHitDirection = null;\n    }\n    return hit;\n  }\n\n  botAttack(opponentGameBoard) {\n    let x, y;\n    if (this.currentTarget) {\n      const [targetX, targetY] = this.currentTarget;\n      let nextMove;\n      if (this.lastHitDirection) {\n        nextMove = [\n          this.#calculateCoord(this.lastHitDirection, targetX, targetY),\n        ];\n        const [nextX, nextY] = nextMove[0];\n        if (this.attacks.has(`${nextX},${nextY}`)) {\n          const [firstTargetX, firstTargetY] = this.firstTarget;\n          nextMove = [\n            this.#calculateCoord(\n              this.#oppositeDirection(this.lastHitDirection),\n              firstTargetX,\n              firstTargetY\n            ),\n          ];\n        }\n      } else {\n        nextMove = [\n          [targetX - 1, targetY],\n          [targetX + 1, targetY],\n          [targetX, targetY - 1],\n          [targetX, targetY + 1],\n        ];\n      }\n      for (let [nextX, nextY] of nextMove) {\n        if (\n          opponentGameBoard.isValidCoordinate(nextX, nextY) &&\n          !this.attacks.has(`${nextX},${nextY}`) &&\n          !opponentGameBoard\n            .getSunkAdjacentCoordinates()\n            .has(`${nextX},${nextY}`)\n        ) {\n          return this.attack(opponentGameBoard, nextX, nextY);\n        }\n      }\n    }\n\n    do {\n      x = Math.floor(Math.random() * opponentGameBoard.size);\n      y = Math.floor(Math.random() * opponentGameBoard.size);\n    } while (\n      this.attacks.has(`${x},${y}`) ||\n      opponentGameBoard.getSunkAdjacentCoordinates().has(`${x},${y}`)\n    );\n    return this.attack(opponentGameBoard, x, y);\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship),\n/* harmony export */   generateShips: () => (/* binding */ generateShips)\n/* harmony export */ });\nclass Ship {\n  constructor(length, hits = 0) {\n    this.length = length;\n    this.hits = hits;\n  }\n\n  hit(time = 1) {\n    while (time > 0) {\n      this.hits++;\n      time--;\n    }\n    return this.hits;\n  }\n\n  isSunk() {\n    return this.length <= this.hits;\n  }\n}\n\nconst generateShips = () => {\n  const patrolBoat = new Ship(2);\n  const destroyer = new Ship(3);\n  const subMarine = new Ship(3);\n  const battleShip = new Ship(4);\n  const carrier = new Ship(5);\n  return [patrolBoat, destroyer, subMarine, battleShip, carrier];\n};\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ }),

/***/ "./src/assets/images/battleShip.svg":
/*!******************************************!*\
  !*** ./src/assets/images/battleShip.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/battleShip69be4df16a9a79625ec9.svg\";\n\n//# sourceURL=webpack://battleship/./src/assets/images/battleShip.svg?");

/***/ }),

/***/ "./src/assets/images/carrier.svg":
/*!***************************************!*\
  !*** ./src/assets/images/carrier.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/carrier008846a84b2a34dde315.svg\";\n\n//# sourceURL=webpack://battleship/./src/assets/images/carrier.svg?");

/***/ }),

/***/ "./src/assets/images/destroyer.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/destroyer.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/destroyerd3e87b67a091a7b85628.svg\";\n\n//# sourceURL=webpack://battleship/./src/assets/images/destroyer.svg?");

/***/ }),

/***/ "./src/assets/images/earth.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/earth.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/earthbe4eab597c008474a9fc.jpg\";\n\n//# sourceURL=webpack://battleship/./src/assets/images/earth.jpg?");

/***/ }),

/***/ "./src/assets/images/patrolBoat.svg":
/*!******************************************!*\
  !*** ./src/assets/images/patrolBoat.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/patrolBoat5050c3ee4e2425de07ce.svg\";\n\n//# sourceURL=webpack://battleship/./src/assets/images/patrolBoat.svg?");

/***/ }),

/***/ "./src/assets/images/subMarine.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/subMarine.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/subMarine71ee6bde3829e4d27560.svg\";\n\n//# sourceURL=webpack://battleship/./src/assets/images/subMarine.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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