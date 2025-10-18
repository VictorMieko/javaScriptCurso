/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --primary-color: rgb(25, 25, 26);/*variavel global em css*/
    --prmary-color-darker: #311875;
}

*{
    box-sizing: border-box;
    outline: 0;
}
body{
    padding: 0;
    margin: 0;
    background-color: var(--primary-color);/*para utlizar use "var"*/
    font-family: 'Open sans', sans-serif;
    font-size: 1.3em;
    line-height: 1.5em;
}

.container{
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 50px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.search-container{
    position: relative;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
}
.suggestion-list{
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;

    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    border-top: none;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    z-index: 100;
    max-height: 300px;
    overflow-y: auto;
}
.suggestion-list li{
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 15px;
    cursor: pointer;
    border-bottom: 1px solid #eee;
}
.suggestion-list li:hover{
    background-color: #f0f0f0;
}
.hidden{
    display: none;
}
.suggestion-img{
    width: 40px;
    height: 60px;
    object-fit: cover;
    border-radius: 4px;
    flex-shrink: 0;
}
.suggestion-title{
    flex-grow: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.container-content{
    display: flex;
    align-items: stretch;
    gap: 20px;
    width: 100%;
        
}
.img-anime{
    width: 225px;
    height: 309px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    flex-shrink: 0;
}
.container-sinopse{
    display: block;
    max-height: 309px;
    flex-grow: 1;
    overflow-wrap: break-word;
    overflow-y: auto;
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 5px;
    line-height: 1.6;
}
#synopse-anime{
    margin: 0;
    line-height: 1.6;
}

.container-sinopse::-webkit-scrollbar {
    width: 8px;
}
.container-sinopse::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
}
.container-sinopse::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
}

.container-episode {
    display: flex;
    align-items: baseline;
    gap: 10px;
}

.h2-title{
    margin-top: 0;
}

.input-search{
    border-radius: 10px;
    background-color: #f9f9f9;

}

form input, form label, form button{
    display: block;
    width: 100%;
    margin-bottom: 10px;
}
form input{
    font-size: 24px;
    height: 50px;
    padding: 0 20px;
}
form input:focus{
    outline: 1px solid var(--primary-color);
}
form button{
    border: none;
    background-color: var(--primary-color);
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    height: 50px;
    cursor: pointer;
    margin-top: 30px;
}
form button:hover{
    background-color: var(--prmary-color-darker);
}
form button:active{
    color: #000;
    background-color: rgba(61, 135, 204, 0.993);
}`, "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"AACA;IACI,gCAAgC,CAAC,yBAAyB;IAC1D,8BAA8B;AAClC;;AAEA;IACI,sBAAsB;IACtB,UAAU;AACd;AACA;IACI,UAAU;IACV,SAAS;IACT,sCAAsC,CAAC,yBAAyB;IAChE,oCAAoC;IACpC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,iBAAiB;IACjB,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,wCAAwC;AAC5C;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,gBAAgB;IAChB,cAAc;AAClB;AACA;IACI,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,QAAQ;;IAER,qBAAqB;IACrB,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,sBAAsB;IACtB,gBAAgB;IAChB,qCAAqC;IACrC,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,iBAAiB;IACjB,eAAe;IACf,6BAA6B;AACjC;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,aAAa;AACjB;AACA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,cAAc;AAClB;AACA;IACI,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,oBAAoB;IACpB,SAAS;IACT,WAAW;;AAEf;AACA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,wCAAwC;IACxC,cAAc;AAClB;AACA;IACI,cAAc;IACd,iBAAiB;IACjB,YAAY;IACZ,yBAAyB;IACzB,gBAAgB;IAChB,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,UAAU;AACd;AACA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,SAAS;AACb;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;;AAE7B;;AAEA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,YAAY;IACZ,eAAe;AACnB;AACA;IACI,uCAAuC;AAC3C;AACA;IACI,YAAY;IACZ,sCAAsC;IACtC,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,4CAA4C;AAChD;AACA;IACI,WAAW;IACX,2CAA2C;AAC/C","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');\r\n:root{\r\n    --primary-color: rgb(25, 25, 26);/*variavel global em css*/\r\n    --prmary-color-darker: #311875;\r\n}\r\n\r\n*{\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\nbody{\r\n    padding: 0;\r\n    margin: 0;\r\n    background-color: var(--primary-color);/*para utlizar use \"var\"*/\r\n    font-family: 'Open sans', sans-serif;\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n}\r\n\r\n.container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 80%;\r\n    margin: 50px auto;\r\n    background-color: #fff;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.search-container{\r\n    position: relative;\r\n    width: 100%;\r\n    max-width: 500px;\r\n    margin: 0 auto;\r\n}\r\n.suggestion-list{\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 0;\r\n    right: 0;\r\n\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: #fff;\r\n    border: 1px solid #ccc;\r\n    border-top: none;\r\n    box-shadow: 0 4px 6px rgba(0,0,0,0.1);\r\n    z-index: 100;\r\n    max-height: 300px;\r\n    overflow-y: auto;\r\n}\r\n.suggestion-list li{\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    padding: 8px 15px;\r\n    cursor: pointer;\r\n    border-bottom: 1px solid #eee;\r\n}\r\n.suggestion-list li:hover{\r\n    background-color: #f0f0f0;\r\n}\r\n.hidden{\r\n    display: none;\r\n}\r\n.suggestion-img{\r\n    width: 40px;\r\n    height: 60px;\r\n    object-fit: cover;\r\n    border-radius: 4px;\r\n    flex-shrink: 0;\r\n}\r\n.suggestion-title{\r\n    flex-grow: 1;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.container-content{\r\n    display: flex;\r\n    align-items: stretch;\r\n    gap: 20px;\r\n    width: 100%;\r\n        \r\n}\r\n.img-anime{\r\n    width: 225px;\r\n    height: 309px;\r\n    border-radius: 4px;\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n    flex-shrink: 0;\r\n}\r\n.container-sinopse{\r\n    display: block;\r\n    max-height: 309px;\r\n    flex-grow: 1;\r\n    overflow-wrap: break-word;\r\n    overflow-y: auto;\r\n    padding: 10px;\r\n    background-color: #f9f9f9;\r\n    border-radius: 5px;\r\n    line-height: 1.6;\r\n}\r\n#synopse-anime{\r\n    margin: 0;\r\n    line-height: 1.6;\r\n}\r\n\r\n.container-sinopse::-webkit-scrollbar {\r\n    width: 8px;\r\n}\r\n.container-sinopse::-webkit-scrollbar-thumb {\r\n    background: #ccc;\r\n    border-radius: 4px;\r\n}\r\n.container-sinopse::-webkit-scrollbar-thumb:hover {\r\n    background: #b3b3b3;\r\n}\r\n\r\n.container-episode {\r\n    display: flex;\r\n    align-items: baseline;\r\n    gap: 10px;\r\n}\r\n\r\n.h2-title{\r\n    margin-top: 0;\r\n}\r\n\r\n.input-search{\r\n    border-radius: 10px;\r\n    background-color: #f9f9f9;\r\n\r\n}\r\n\r\nform input, form label, form button{\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\nform input{\r\n    font-size: 24px;\r\n    height: 50px;\r\n    padding: 0 20px;\r\n}\r\nform input:focus{\r\n    outline: 1px solid var(--primary-color);\r\n}\r\nform button{\r\n    border: none;\r\n    background-color: var(--primary-color);\r\n    color: #fff;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    height: 50px;\r\n    cursor: pointer;\r\n    margin-top: 30px;\r\n}\r\nform button:hover{\r\n    background-color: var(--prmary-color-darker);\r\n}\r\nform button:active{\r\n    color: #000;\r\n    background-color: rgba(61, 135, 204, 0.993);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/modules/apiAnime.js":
/*!*********************************!*\
  !*** ./src/modules/apiAnime.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchAnime: () => (/* binding */ fetchAnime)
/* harmony export */ });
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function fetchAnime(_x) {
  return _fetchAnime.apply(this, arguments);
}
function _fetchAnime() {
  _fetchAnime = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(nome) {
    var response, data, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.n = 1;
          return fetch("https://api.jikan.moe/v4/anime?q=".concat(encodeURIComponent(nome)));
        case 1:
          response = _context.v;
          _context.p = 2;
          if (response.ok) {
            _context.n = 3;
            break;
          }
          throw new Error("Erro na API: Status ".concat(response.status));
        case 3:
          _context.n = 4;
          return response.json();
        case 4:
          data = _context.v;
          return _context.a(2, data.data);
        case 5:
          _context.p = 5;
          _t = _context.v;
          console.error("Falha ao buscar dados do anime: ".concat(_t));
          return _context.a(2, []);
      }
    }, _callee, null, [[2, 5]]);
  }));
  return _fetchAnime.apply(this, arguments);
}

/***/ }),

/***/ "./src/modules/getAnime.js":
/*!*********************************!*\
  !*** ./src/modules/getAnime.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupAutoCompleteListener: () => (/* binding */ setupAutoCompleteListener),
/* harmony export */   setupSearchListener: () => (/* binding */ setupSearchListener)
/* harmony export */ });
var form = document.querySelector('.form');
var input = document.querySelector('.input-search');
function setupSearchListener(callback) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var query = input.value.trim();
    if (query) callback(query);
    input.value = '';
  });
}
function setupAutoCompleteListener(callback) {
  input.addEventListener('input', function () {
    var query = input.value.trim();
    callback(query);
  });
}

/***/ }),

/***/ "./src/modules/renderer.js":
/*!*********************************!*\
  !*** ./src/modules/renderer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideSuggestion: () => (/* binding */ hideSuggestion),
/* harmony export */   renderSuggestion: () => (/* binding */ renderSuggestion),
/* harmony export */   setAnimeOnPage: () => (/* binding */ setAnimeOnPage)
/* harmony export */ });
var animeNome = document.querySelector('.title-anime');
var nomeJapones = document.querySelector('.title-anime-english');
var numEpisodios = document.querySelector('.episode-number');
var imgAnime = document.querySelector('.img-anime');
var sinopseAnime = document.querySelector('#synopse-anime');
function setAnimeOnPage(animeFinal) {
  if (!animeFinal) return;
  animeNome.innerHTML = animeFinal.title;
  nomeJapones.innerHTML = animeFinal.title_english;
  imgAnime.src = animeFinal.images.jpg.image_url;
  sinopseAnime.innerHTML = animeFinal.synopsis;
  imgAnime.alt = "Capa do anime ".concat(animeFinal.title);
  numEpisodios.innerHTML = animeFinal.episodes || 'Em lançamento';
}
var suggestionList = document.getElementById('suggestion-list');
function renderSuggestion(animes, onSuggestionClick) {
  suggestionList.innerHTML = '';
  if (!animes || animes.length === 0) return suggestionList.classList.add('hidden');
  suggestionList.classList.remove('hidden');
  animes.slice(0, 5).forEach(function (anime) {
    var li = document.createElement('li');
    var img = document.createElement('img');
    img.src = anime.images.jpg.image_url;
    img.alt = anime.title;
    img.classList.add('suggestion-img');
    var titleSpan = document.createElement('span');
    titleSpan.textContent = anime.title;
    titleSpan.classList.add('suggestion-title');
    li.appendChild(img);
    li.appendChild(titleSpan);
    li.addEventListener('click', function () {
      onSuggestionClick(anime);
    });
    suggestionList.appendChild(li);
  });
}
function hideSuggestion() {
  suggestionList.classList.add('hidden');
}

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_getAnime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/getAnime */ "./src/modules/getAnime.js");
/* harmony import */ var _modules_apiAnime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/apiAnime */ "./src/modules/apiAnime.js");
/* harmony import */ var _modules_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/renderer */ "./src/modules/renderer.js");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




var debounceTimer;
function renderAnime(_x) {
  return _renderAnime.apply(this, arguments);
}
function _renderAnime() {
  _renderAnime = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(query) {
    var animes, pesquisa, animePesquisado;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          if (query) {
            _context.n = 1;
            break;
          }
          return _context.a(2);
        case 1:
          (0,_modules_renderer__WEBPACK_IMPORTED_MODULE_2__.hideSuggestion)();
          _context.n = 2;
          return (0,_modules_apiAnime__WEBPACK_IMPORTED_MODULE_1__.fetchAnime)(query);
        case 2:
          animes = _context.v;
          if (!(!animes || animes.length === 0)) {
            _context.n = 3;
            break;
          }
          return _context.a(2);
        case 3:
          //animes.forEach(anime => {
          //   console.log(`🎬 ${anime.title} - Episódios: ${anime.episodes}`);
          //});
          pesquisa = animes.find(function (anime) {
            return anime.title.toLowerCase() === query.toLowerCase();
          });
          animePesquisado = pesquisa || animes[0];
          (0,_modules_renderer__WEBPACK_IMPORTED_MODULE_2__.setAnimeOnPage)(animePesquisado);
        case 4:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _renderAnime.apply(this, arguments);
}
function handleAutoComplete(_x2) {
  return _handleAutoComplete.apply(this, arguments);
}
function _handleAutoComplete() {
  _handleAutoComplete = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(query) {
    var animes, suggestionClickHandler;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          if (!(query.length < 3)) {
            _context2.n = 1;
            break;
          }
          return _context2.a(2, (0,_modules_renderer__WEBPACK_IMPORTED_MODULE_2__.hideSuggestion)());
        case 1:
          _context2.n = 2;
          return (0,_modules_apiAnime__WEBPACK_IMPORTED_MODULE_1__.fetchAnime)(query);
        case 2:
          animes = _context2.v;
          suggestionClickHandler = function suggestionClickHandler(anime) {
            document.querySelector('.input-search').value = anime.title;
            renderAnime(anime.title);
          };
          (0,_modules_renderer__WEBPACK_IMPORTED_MODULE_2__.renderSuggestion)(animes, suggestionClickHandler);
        case 3:
          return _context2.a(2);
      }
    }, _callee2);
  }));
  return _handleAutoComplete.apply(this, arguments);
}
function init() {
  (0,_modules_getAnime__WEBPACK_IMPORTED_MODULE_0__.setupSearchListener)(function (query) {
    renderAnime(query);
  });

  // timer para não sobrecarregar a api durante a busca
  (0,_modules_getAnime__WEBPACK_IMPORTED_MODULE_0__.setupAutoCompleteListener)(function (query) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function () {
      handleAutoComplete(query);
    }, 300);
  });

  // esconder o autocomplete quando clicar fora
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.search-container')) {
      (0,_modules_renderer__WEBPACK_IMPORTED_MODULE_2__.hideSuggestion)();
    }
  });
  renderAnime('Cowboy Bebop');
}
init();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map