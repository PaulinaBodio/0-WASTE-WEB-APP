/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"* {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n}\\n\\n:root {\\n    --dark-green: #0a2401;\\n    --green: #95b038;\\n    --lime-green: #dbe586;\\n    --cheese-yellow: #e8a000;\\n    --yellow: #ffd643;\\n    --main-font: 'Raleway', sans-serif;\\n}\\n\\nbody {\\n    background-color: whitesmoke;\\n    font-family: var(--main-font);\\n}\\n\\n.container {\\n    display: flex;\\n    width: 100%;\\n    flex-wrap: wrap;\\n}\\n\\n\\n.top-bar {\\n    width: 100%;\\n    height: 8vh;\\n    font-weight: 300;\\n    background-color: var(--green);\\n    font-family: 'Open Sans Condensed', sans-serif;\\n    color: whitesmoke;\\n    letter-spacing: 5px;\\n    position: fixed;\\n    z-index: 2;\\n}\\n\\n.top-bar h2 {\\n    padding: .5%;\\n    margin-left: 2%;\\n    font-size: 2rem;\\n}\\n\\nmain {\\n    margin-top: 8vh;\\n    width: 100vw;\\n    height: 70vh;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    background: url('/src/img/bg.jpg') no-repeat fixed;\\n    background-position: cover;\\n    color: var(--dark-green);\\n    position: relative;\\n}\\n\\n.filter {\\n    position: absolute;\\n    background-color: rgba(255, 255, 255, 0.5);\\n    width: 95%;\\n    height: 90%;\\n}\\n\\nmain h1 {\\n    font-size: 3rem;\\n    z-index: 1;\\n}\\n\\nmain h2 {\\n    margin: 1.5%;\\n    z-index: 1;\\n}\\n\\n.search-bar {\\n    width: 30%;\\n    height: 10%;\\n    padding: 2%;\\n    font-size: 1rem;\\n    border: 1px solid var(--lime-green);\\n    background-color: white; \\n    z-index: 1;\\n}\\n\\n#search {\\n    width: 30%;\\n    height: 10%;\\n    margin: 1%;\\n    background-color: var(--green);\\n    font-family: var(--main-font);\\n    font-size: 1rem;\\n    font-weight: 600;\\n    border: none;\\n    color: var(--dark-green);\\n    transition: .5s;\\n    z-index: 1;\\n}\\n\\n#search:hover {\\n    background-color: var(--lime-green);\\n    cursor: pointer;\\n}\\n\\n.recipes-banner {\\n    width: 100vw;\\n    margin-top: .5%;\\n    display: flex;\\n    flex-direction: row;\\n    flex-wrap: wrap;\\n    justify-content: center;\\n    align-items: stretch;\\n}\\n\\n.recipe {\\n    width: 32%;\\n    margin: .5%;\\n    padding: 2.5% ;\\n    border: 1px solid var(--lime-green);\\n    border-radius: 2%;\\n    display:block;\\n    background-color: white;\\n    overflow: hidden;\\n}\\n\\n.recipe h3 {\\n    text-align: center;\\n    justify-self: center;\\n    font-size: 1.5rem;\\n}\\n\\n.recipe img {\\n    width: 100%;\\n    margin-bottom: 2%;\\n}\\n\\n.recipe ul {\\n    font-weight: 600;\\n}\\n\\n.recipe li {\\n    margin-left: 10%;\\n    font-weight: 400;\\n}\\n\\n.recipe p {\\n    text-decoration: none;\\n    color: black;\\n    font-size: 1.3rem;\\n    padding-top: 8%;\\n    display: block;\\n    transition: .5s;\\n}\\n\\n/* .recipe p:hover {\\n    cursor: pointer;\\n    color: var(--dark-green);\\n} */\\n\\np.show-more\\n{\\n    text-decoration: none;\\n    color: var(--green);\\n    font-size: 1.3rem;\\n    padding-top: 8%;\\n    display: block;\\n    transition: .5s;\\n}\\np.show-more:hover {\\n    cursor: pointer;\\n    color: var(--dark-green);\\n    cursor: pointer;\\n} \\n\\n.recipe-information\\n{\\n    max-width:100%;\\n    text-align: justify;\\n}\\n\\n.descrption {\\n    margin: 1%;\\n    text-align: justify;\\n}\\n\\nfooter {\\n    width: 100vw;\\n    /* height: 20vh; */\\n    margin-top: 1%;\\n    background-color: var(--lime-green);\\n    text-align: center;\\n}\\n\\nfooter p {\\n    font-weight: 600;\\n    font-size: 0.8rem;\\n    margin: 4%;\\n    color: var(--dark-green);\\n}\\n\\n\\n@media only screen and (min-width: 641px) and (max-width: 1024px) {\\n    main {\\n        height: 100vh;\\n    }\\n\\n    main h2 {\\n        margin: 5%;\\n    }\\n\\n    .search-bar {\\n        width: 80%;\\n        height: 8%;\\n    }\\n\\n    #search {\\n        width: 80%;\\n        height: 8%;\\n        margin-top: 5%;\\n        font-size: 1.5rem;\\n    }\\n\\n    .recipe {\\n        width: 45%;\\n    }\\n}\\n\\n@media only screen and (max-width: 640px) {\\n    \\n    main {\\n        height: 100vh;\\n    }\\n\\n    main h1 {\\n        font-size: 2rem;\\n    }\\n\\n    .search-bar {\\n        width: 80%;\\n        height: 8%;\\n        padding: 2%;\\n    }\\n\\n    #search {\\n        width: 80%;\\n        height: 8%;\\n        margin-top: 5%;\\n        font-size: 1.5rem;\\n    }\\n\\n    .recipes-banner {\\n        flex-direction: column;\\n    }\\n\\n    .recipe {\\n        width: 98%;\\n    }\\n   \\n}\\n\\n\\n\\n/*custom scroll-bar*/\\n\\n::-webkit-scrollbar {\\n    width: 10px;\\n}\\n\\n::-webkit-scrollbar-track {\\n    box-shadow: inset 0 0 5px whitesmoke; \\n    border-radius: 10px;\\n}\\n::-webkit-scrollbar-thumb {\\n    background: var(--yellow);\\n    border-radius: 10px;\\n}\\n\\n::-webkit-scrollbar-thumb:hover {\\n    background: var(--cheese-yellow);\\n}\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// ref: https://github.com/tc39/proposal-global\nvar getGlobal = function () {\n\t// the only reliable means to get the global object is\n\t// `Function('return this')()`\n\t// However, this causes CSP violations in Chrome apps.\n\tif (typeof self !== 'undefined') { return self; }\n\tif (typeof window !== 'undefined') { return window; }\n\tif (typeof global !== 'undefined') { return global; }\n\tthrow new Error('unable to locate global object');\n}\n\nvar global = getGlobal();\n\nmodule.exports = exports = global.fetch;\n\n// Needed for TypeScript and Webpack.\nexports.default = global.fetch.bind(global);\n\nexports.Headers = global.Headers;\nexports.Request = global.Request;\nexports.Response = global.Response;\n\n//# sourceURL=webpack:///./node_modules/node-fetch/browser.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/img/bg.jpg":
/*!************************!*\
  !*** ./src/img/bg.jpg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"d9223524d10fc4e19282535f61e6c8d6.jpg\";\n\n//# sourceURL=webpack:///./src/img/bg.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_bg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/bg.jpg */ \"./src/img/bg.jpg\");\n/* harmony import */ var _img_bg_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_bg_jpg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _variables_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../variables.json */ \"./variables.json\");\nvar _variables_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../variables.json */ \"./variables.json\", 1);\n\n\n\nvar fetch = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n\n\nvar APIHOST = \"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com\";\nvar APIKEY = _variables_json__WEBPACK_IMPORTED_MODULE_2__.API_KEY;\nvar urlInfo = \"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information\";\nvar element = document.querySelector('.recipes-banner');\nvar searchBar = document.querySelector('.search-bar');\nvar searchButton = document.getElementById(\"search\");\ndocument.getElementById('search').addEventListener('click', recipes);\n\nfunction recipes() {\n  var urlSearch = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=6&ranking=1&ignorePantry=false&ingredients=';\n  var typedIngred = searchBar.value;\n  urlSearch += typedIngred;\n  console.log(urlSearch);\n  fetch(urlSearch, {\n    \"method\": \"GET\",\n    \"headers\": {\n      \"x-rapidapi-host\": APIHOST,\n      \"x-rapidapi-key\": APIKEY\n    }\n  }).then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    var output = '';\n    var ids = [];\n    data.forEach(function (rec) {\n      output += \"   \\n                <div class=\\\"recipe \".concat(rec.id, \"\\\">\\n                    <h3>\").concat(rec.title, \"</h3> <br>\\n                    <img src=\\\"\").concat(rec.image, \"\\\" alt=\\\"\\\">\\n                    <div class=\\\"recipe-ingredients id-\").concat(rec.id, \"\\\"> \\n                    <ul> Ingredients\\n             \");\n      rec.usedIngredients.forEach(function (elem) {\n        output += \"\\n                <li>\".concat(elem.original, \"</li>\\n                    \");\n      });\n      rec.missedIngredients.forEach(function (item) {\n        output += \"\\n                <li>\".concat(item.original, \"</li>\\n                \");\n      });\n      output += \"\\n             </ul>\\n             </div>\\n             <p class=\\\"show-more id-\".concat(rec.id, \"\\\">Show more...</p>\\n                 <div class=\\\"recipe-information id-\").concat(rec.id, \"\\\"> </div>\\n                </div>\\n            \");\n      ids.push(\"\".concat(rec.id));\n    });\n    element.innerHTML = output;\n    return ids;\n  }).then(function (tab) {\n    tab.forEach(function (id) {\n      document.querySelector(\".show-more.id-\".concat(id)).addEventListener('click', function () {\n        information(id);\n      }, {\n        once: true\n      });\n    });\n  })[\"catch\"](function (err) {\n    console.log(err);\n  });\n  scrollToRecipes();\n}\n\nfunction information(id) {\n  fetch(\"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/\".concat(id, \"/information\"), {\n    \"method\": \"GET\",\n    \"headers\": {\n      \"x-rapidapi-host\": APIHOST,\n      \"x-rapidapi-key\": APIKEY\n    }\n  }).then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    var details = document.createElement('p');\n    if (Boolean(data.instructions)) details.innerHTML = data.instructions;else details.innerHTML = \"Unfortunately, there are no more details about the recipe.\";\n    document.querySelector(\".recipe-information.id-\".concat(id)).appendChild(details);\n    document.querySelector(\".show-more.id-\".concat(id)).innerHTML = \"Show less...\";\n    document.querySelector(\".show-more.id-\".concat(id)).addEventListener('click', function () {\n      hideOrShow(id);\n    });\n  });\n}\n\nfunction hideOrShow(id) {\n  var showButton = document.querySelector(\".show-more.id-\".concat(id));\n  var recipeInfo = document.querySelector(\".recipe-information.id-\".concat(id));\n\n  if (showButton.textContent == 'Show more...') {\n    recipeInfo.style.display = \"initial\";\n    showButton.innerHTML = \"Show less...\";\n  } else {\n    recipeInfo.style.display = \"none\";\n    showButton.innerHTML = \"Show more...\";\n  }\n} // searching with enter button\n\n\nsearchBar.addEventListener(\"keyup\", function (event) {\n  // for enter key down\n  if (event.keyCode === 13) {\n    event.preventDefault();\n    searchButton.click(); //   scrollToRecipes();\n  }\n});\n\nfunction scrollToRecipes() {\n  var $container = $(\"html,body\");\n  var $scrollTo = $('.recipes-banner');\n  $container.animate({\n    scrollTop: $scrollTo.offset().top\n  }, 1500);\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./variables.json":
/*!************************!*\
  !*** ./variables.json ***!
  \************************/
/*! exports provided: API_KEY, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"API_KEY\\\":\\\"e588f4717cmsh07874114003d4f6p16b43djsne9acf9c4e451\\\"}\");\n\n//# sourceURL=webpack:///./variables.json?");

/***/ })

/******/ });