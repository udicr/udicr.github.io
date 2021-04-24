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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body\n{\n    margin: 0;\n    padding: 0;\n    width: 100vw;\n    height: 100vh;\n    box-sizing: border-box;\n    background: radial-gradient(circle,#023047, black);\n\n            /*#023047;*/\n}\n/*\n\n* Canvas\n*/\ncanvas{\n}\n\n.container{\n    text-align:center;\n    display: flex;\n    align-items: center; /* align vertical */\n}\nh1{\n    font-size: 5vh;\n    text-align: center;\n    color: white;\n}\nh2{\n    font-size: 4vh;\n    text-align: center;\n    color: #ccc;\n}\np{\n    font-size: 1em ;\n    text-align: center;\n    color: rgba(255, 255, 255, .5);\n}\n\n/*\ntypecontent\n */\n.vscontent\n{\n    height: 40vh;\n    width: 80vw;\n    top: 45%;\n    left: 50%;\n    margin-top: -20vh;\n    margin-left: -40vw;\n    text-align: center;\n    padding: 0.5rem;\n    overflow: hidden;\n}\n.typed-text{\n color: #dd7732;\n}\n.cursor{\n    display: inline-block;\n    width: 3px;\n    min-width: 3px;\n    background-color: #ccc;\n    margin-left: 0.1rem;\n    animation: blink 1s infinite;\n}\n.cursor.typing{\n    animation: none;\n}\n@keyframes blink {\n    0% {background-color: #ccc;}\n    49% {background-color: #ccc;}\n    50% {background-color: transparent;}\n    99% {background-color: transparent;}\n    100% {background-color: #ccc;}\n    100% {background-color: #ccc;}\n\n}\n\n.equation\n{\n    position: absolute;\n    height: 40vh;\n    width: 60vw;\n    top:70%;\n    left: 50%;\n    margin-top: -20vh;\n    margin-left: -30vw;\n\n}\n/*\n * Header\n */\n\n.nav-masthead .nav-link {\n    padding: .25rem 0;\n    font-weight: 700;\n    color: rgba(255, 255, 255, .5);\n    background-color: transparent;\n    border-bottom: .25rem solid transparent;\n}\n\n.nav-masthead .nav-link:hover,\n.nav-masthead .nav-link:focus {\n    border-bottom-color: rgba(255, 255, 255, .25);\n}\n\n.nav-masthead .nav-link + .nav-link {\n    margin-left: 1rem;\n}\n\n.nav-masthead .active {\n    color: #fff;\n    border-bottom-color: #fff;\n}\n\n/*\n* Horizontal Scroll Container (Portfolio)\n */\n\n.slide{\n    text-align: center;\n    display: flex;\n    width: 105vw;\n    height: 100vh;\n}\n.wrapper{\n    display: flex;\n    flex-direction: row;\n    width: 515vw;\n    transform: rotate(90deg) translateY(-100vh);\n    transform-origin: top left;\n}\n.one{\n    background: linear-gradient(#8ecae6,#023047);\n}\n.two{\n    background: linear-gradient(#219EBC,#023047);\n}\n.three{\n    background: linear-gradient(#8ecae6,#023047);\n}\n.four{\n    background: linear-gradient(#219EBC,#023047);\n}\n.five{\n    background: linear-gradient(#8ecae6,#023047);\n}\n.outer-wrapper{\n    width: 100vh;\n    height: 100vw;\n    transform: rotate(-90deg) translateX(-100vh);\n    transform-origin: top left;\n    overflow-y: scroll;\n    overflow-x: hidden;\n    position: absolute;\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n}\n::-webkit-scrollbar{\n    display:none;\n}\n.info-content{\n    padding: 1vw;\n    position: relative;\n    left: 5vw;\n    top: 8vh;\n    width: 90vw;\n    height: 88vh;\n    text-align: left;\n    /*border: solid black 5px;*/\n}\n.info{\n    border: solid black 1px;\n}\n.description{\n    margin-top: 5vh;\n    position: relative;\n    width: 88vw;\n    height: auto;\n    overflow-y: auto;\n    text-align: left;\n    left: -1vw;\n}\n.image-bt{\n    float: right;\n    width: 30em;\n    height: 20em;\n}\n.title{\n    float: left;\n    min-width: 100px;\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;;IAEI,SAAS;IACT,UAAU;IACV,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,kDAAkD;;YAE1C,WAAW;AACvB;AACA;;;CAGC;AACD;AACA;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,mBAAmB,EAAE,mBAAmB;AAC5C;AACA;IACI,cAAc;IACd,kBAAkB;IAClB,YAAY;AAChB;AACA;IACI,cAAc;IACd,kBAAkB;IAClB,WAAW;AACf;AACA;IACI,eAAe;IACf,kBAAkB;IAClB,8BAA8B;AAClC;;AAEA;;EAEE;AACF;;IAEI,YAAY;IACZ,WAAW;IACX,QAAQ;IACR,SAAS;IACT,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,gBAAgB;AACpB;AACA;CACC,cAAc;AACf;AACA;IACI,qBAAqB;IACrB,UAAU;IACV,cAAc;IACd,sBAAsB;IACtB,mBAAmB;IACnB,4BAA4B;AAChC;AACA;IACI,eAAe;AACnB;AACA;IACI,IAAI,sBAAsB,CAAC;IAC3B,KAAK,sBAAsB,CAAC;IAC5B,KAAK,6BAA6B,CAAC;IACnC,KAAK,6BAA6B,CAAC;IACnC,MAAM,sBAAsB,CAAC;IAC7B,MAAM,sBAAsB,CAAC;;AAEjC;;AAEA;;IAEI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,OAAO;IACP,SAAS;IACT,iBAAiB;IACjB,kBAAkB;;AAEtB;AACA;;EAEE;;AAEF;IACI,iBAAiB;IACjB,gBAAgB;IAChB,8BAA8B;IAC9B,6BAA6B;IAC7B,uCAAuC;AAC3C;;AAEA;;IAEI,6CAA6C;AACjD;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,yBAAyB;AAC7B;;AAEA;;EAEE;;AAEF;IACI,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,aAAa;AACjB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,2CAA2C;IAC3C,0BAA0B;AAC9B;AACA;IACI,4CAA4C;AAChD;AACA;IACI,4CAA4C;AAChD;AACA;IACI,4CAA4C;AAChD;AACA;IACI,4CAA4C;AAChD;AACA;IACI,4CAA4C;AAChD;AACA;IACI,YAAY;IACZ,aAAa;IACb,4CAA4C;IAC5C,0BAA0B;IAC1B,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,wBAAwB;AAC5B;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,2BAA2B;AAC/B;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,eAAe;IACf,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;IAChB,UAAU;AACd;AACA;IACI,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;AACA;IACI,WAAW;IACX,gBAAgB;AACpB","sourcesContent":["body\n{\n    margin: 0;\n    padding: 0;\n    width: 100vw;\n    height: 100vh;\n    box-sizing: border-box;\n    background: radial-gradient(circle,#023047, black);\n\n            /*#023047;*/\n}\n/*\n\n* Canvas\n*/\ncanvas{\n}\n\n.container{\n    text-align:center;\n    display: flex;\n    align-items: center; /* align vertical */\n}\nh1{\n    font-size: 5vh;\n    text-align: center;\n    color: white;\n}\nh2{\n    font-size: 4vh;\n    text-align: center;\n    color: #ccc;\n}\np{\n    font-size: 1em ;\n    text-align: center;\n    color: rgba(255, 255, 255, .5);\n}\n\n/*\ntypecontent\n */\n.vscontent\n{\n    height: 40vh;\n    width: 80vw;\n    top: 45%;\n    left: 50%;\n    margin-top: -20vh;\n    margin-left: -40vw;\n    text-align: center;\n    padding: 0.5rem;\n    overflow: hidden;\n}\n.typed-text{\n color: #dd7732;\n}\n.cursor{\n    display: inline-block;\n    width: 3px;\n    min-width: 3px;\n    background-color: #ccc;\n    margin-left: 0.1rem;\n    animation: blink 1s infinite;\n}\n.cursor.typing{\n    animation: none;\n}\n@keyframes blink {\n    0% {background-color: #ccc;}\n    49% {background-color: #ccc;}\n    50% {background-color: transparent;}\n    99% {background-color: transparent;}\n    100% {background-color: #ccc;}\n    100% {background-color: #ccc;}\n\n}\n\n.equation\n{\n    position: absolute;\n    height: 40vh;\n    width: 60vw;\n    top:70%;\n    left: 50%;\n    margin-top: -20vh;\n    margin-left: -30vw;\n\n}\n/*\n * Header\n */\n\n.nav-masthead .nav-link {\n    padding: .25rem 0;\n    font-weight: 700;\n    color: rgba(255, 255, 255, .5);\n    background-color: transparent;\n    border-bottom: .25rem solid transparent;\n}\n\n.nav-masthead .nav-link:hover,\n.nav-masthead .nav-link:focus {\n    border-bottom-color: rgba(255, 255, 255, .25);\n}\n\n.nav-masthead .nav-link + .nav-link {\n    margin-left: 1rem;\n}\n\n.nav-masthead .active {\n    color: #fff;\n    border-bottom-color: #fff;\n}\n\n/*\n* Horizontal Scroll Container (Portfolio)\n */\n\n.slide{\n    text-align: center;\n    display: flex;\n    width: 105vw;\n    height: 100vh;\n}\n.wrapper{\n    display: flex;\n    flex-direction: row;\n    width: 515vw;\n    transform: rotate(90deg) translateY(-100vh);\n    transform-origin: top left;\n}\n.one{\n    background: linear-gradient(#8ecae6,#023047);\n}\n.two{\n    background: linear-gradient(#219EBC,#023047);\n}\n.three{\n    background: linear-gradient(#8ecae6,#023047);\n}\n.four{\n    background: linear-gradient(#219EBC,#023047);\n}\n.five{\n    background: linear-gradient(#8ecae6,#023047);\n}\n.outer-wrapper{\n    width: 100vh;\n    height: 100vw;\n    transform: rotate(-90deg) translateX(-100vh);\n    transform-origin: top left;\n    overflow-y: scroll;\n    overflow-x: hidden;\n    position: absolute;\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n}\n::-webkit-scrollbar{\n    display:none;\n}\n.info-content{\n    padding: 1vw;\n    position: relative;\n    left: 5vw;\n    top: 8vh;\n    width: 90vw;\n    height: 88vh;\n    text-align: left;\n    /*border: solid black 5px;*/\n}\n.info{\n    border: solid black 1px;\n}\n.description{\n    margin-top: 5vh;\n    position: relative;\n    width: 88vw;\n    height: auto;\n    overflow-y: auto;\n    text-align: left;\n    left: -1vw;\n}\n.image-bt{\n    float: right;\n    width: 30em;\n    height: 20em;\n}\n.title{\n    float: left;\n    min-width: 100px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



__webpack_require__(/*! ../css/style.css */ "./src/css/style.css");

var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
var mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};
var colors = ['#8ecae6', '#219EBC', '#FFB703', '#ff9671', '#ffc75f', '#f9f871', '#fb8500']; //'#FFF6E5',
// Event Listeners

addEventListener('mousemove', function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});
addEventListener('resize', function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
}); // Typed Text behavior

var textArray = ["udicr.", "a mathematician.", "a coder.", "interested in numerical mathematics.", "udicr."];
var typingDelay = 200;
var erasingDelay = 100;
var newTextDelay = 2000;
var textArrayIndex = 0;
var charIndex = 0;
var typedTextSpan = document.querySelector(".typed-text");
var cursorSpan = document.querySelector(".cursor");

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");

    if (textArrayIndex <= textArray.length - 2) {
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      cursorSpan.classList.remove("typing");
    }
  } else {
    cursorSpan.classList.remove("typing");

    if (textArrayIndex >= textArray.length) {
      typedTextSpan.textContent = "udicr.";
    } else {
      textArrayIndex += 0.5;
      setTimeout(type, typingDelay + 1100);
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, newTextDelay + 250);
  type();
}); // Objects

var Body = /*#__PURE__*/function () {
  function Body(id, x, y, dx, dy, mass, color) {
    _classCallCheck(this, Body);

    this.id = id;
    this.x = x;
    this.y = y;
    this.p = [x, y];
    this.v = [dx, dy];
    this.a = [0, 0];
    this.mass = mass;
    this.radius = Math.pow(mass, 1 / 3) * 3 / (4 * Math.PI) * rho;
    this.color = color;
    this.skip_counter = 0;
  }

  _createClass(Body, [{
    key: "draw",
    value: function draw() {
      c.beginPath();
      c.arc(this.p[0], this.p[1], this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      var _this = this;

      //
      if (this.id == -1) {
        this.x = mouse.x;
        this.y = mouse.y;
        this.p = [this.x, this.y];
      } else {
        this.skip_counter = (this.skip_counter + 1) % skip;

        if (this.skip_counter === 0) {
          oldPoints.unshift(new Point(this.x, this.y, 1, this.color));
        }
      }

      this.a = [0, 0];
      objects.forEach(function (object) {
        if (object.id !== _this.id) {
          var d = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.distance(_this.p[0], _this.p[1], object.p[0], object.p[1]); // Collision detection goes here

          if (d < _this.radius + object.radius) {
            //object lands on this and gets removed from list
            _this.mass += object.mass;
            _this.radius = Math.pow(_this.mass, 1 / 3) * 3 / (4 * Math.PI) * rho;
            _this.v[0] = (_this.v[0] * _this.mass + object.mass * object.v[0]) / (_this.mass + object.mass);
            _this.v[1] = (_this.v[1] * _this.mass + object.mass * object.v[1]) / (_this.mass + object.mass);

            if (object.mass > _this.mass) {
              _this.color = object.color;
            }

            var index = objects.indexOf(object);
            objects.splice(index, 1);
            _this.a[0] = 0;
            _this.a[1] = 0;
          } else {
            _this.a[0] += G * object.mass * (object.p[0] - _this.p[0]) / Math.pow(d, 3);
            _this.a[1] += G * object.mass * (object.p[1] - _this.p[1]) / Math.pow(d, 3);
          }
        }
      });
      this.v[0] += dt * this.a[0];
      this.v[1] += dt * this.a[1];
      this.p[0] += dt * this.v[0];
      this.p[1] += dt * this.v[1];

      if (Math.abs(this.p[0]) > 1.25 * canvas.width || Math.abs(this.p[1]) > 1.25 * canvas.height) {
        var index = objects.indexOf(this);
        objects.splice(index, 1);
      } else {
        this.x = this.p[0];
        this.y = this.p[1];
        this.draw();
      }
    }
  }]);

  return Body;
}(); //OldPoints


var Point = /*#__PURE__*/function () {
  function Point(x, y, radius, color) {
    _classCallCheck(this, Point);

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.age = 0;
  }

  _createClass(Point, [{
    key: "draw",
    value: function draw() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      this.age += 1;

      if (this.age > tail_length) {
        oldPoints.pop();
      }
    }
  }]);

  return Point;
}(); // Implementation


var rho = 2.0;
var G = 6.67 * Math.pow(10, -2);
var dt = 0.1;
var objects;
var oldPoints;
var tail_length = 200;
var N;
var v0 = 1.5;
var skip = 4;

function init() {
  //N
  N = Math.floor(canvas.width * canvas.height / 30000); //Objects

  objects = [];

  for (var i = 0; i < N; i++) {
    objects.push(new Body(i, _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(0, canvas.width), _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(0, canvas.height), _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(-v0, v0), _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(-v0, v0), _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(500, 1000), _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomColor(colors)));
  }

  var mouseObject;
  mouseObject = new Body(-1, mouse.x, mouse.y, 0, 0, 4000, 'yellow');
  objects.unshift(mouseObject); //old points

  oldPoints = [];
} //time-step measurement
//needed?
// Animation Loop


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  objects.forEach(function (object) {
    object.update();
  });
  oldPoints.forEach(function (point) {
    point.update();
  });
  oldPoints.forEach(function (point) {
    point.draw();
  });

  if (objects.length < 3) {
    init();
  }
}

init();
animate();

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

function hexToRgb(h) {
  var r = parseInt(cutHex(h).substring(0, 2), 16);
  var g = parseInt(cutHex(h).substring(2, 4), 16);
  var b = parseInt(cutHex(h).substring(4, 6), 16);
  return r, g, b;
}

function cutHex(h) {
  return h.charAt(0) == "#" ? h.substring(1, 7) : h;
}

module.exports = {
  randomIntFromRange: randomIntFromRange,
  randomColor: randomColor,
  distance: distance,
  hexToRgb: hexToRgb
};

/***/ })

/******/ });
//# sourceMappingURL=HOME.canvas.bundle.js.map