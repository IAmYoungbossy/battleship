/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/style/style.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/style/style.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nh1 {\n  text-align: center;\n}\n\n.board-container {\n  display: flex;\n  width: min-content;\n  margin: auto;\n  gap: 125px;\n}\n\n.player1-board,\n.player2-board {\n  padding: 1px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  gap: 1px;\n  width: 450px;\n  height: 450px;\n  border: 1px solid black;\n}\n\n.player1-grid,\n.player2-grid {\n  border: 1px solid black;\n}\n\n.player1-grid:hover,\n.player2-grid:hover {\n  background-color: brown;\n}\n\n.ship {\n  background-color: grey;\n}\n\n.shots {\n  background-color: rgb(159, 46, 211);\n}", "",{"version":3,"sources":["webpack://./src/modules/style/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,UAAU;AACZ;;AAEA;;EAEE,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB;;AAEA;;EAEE,uBAAuB;AACzB;;AAEA;;EAEE,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,mCAAmC;AACrC","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nh1 {\n  text-align: center;\n}\n\n.board-container {\n  display: flex;\n  width: min-content;\n  margin: auto;\n  gap: 125px;\n}\n\n.player1-board,\n.player2-board {\n  padding: 1px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  gap: 1px;\n  width: 450px;\n  height: 450px;\n  border: 1px solid black;\n}\n\n.player1-grid,\n.player2-grid {\n  border: 1px solid black;\n}\n\n.player1-grid:hover,\n.player2-grid:hover {\n  background-color: brown;\n}\n\n.ship {\n  background-color: grey;\n}\n\n.shots {\n  background-color: rgb(159, 46, 211);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

"use strict";


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/modules/style/style.css":
/*!*************************************!*\
  !*** ./src/modules/style/style.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/modules/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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

"use strict";


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

"use strict";


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

"use strict";


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
  } // For old IE

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

"use strict";


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

/***/ "./src/modules/2d-array.js":
/*!*********************************!*\
  !*** ./src/modules/2d-array.js ***!
  \*********************************/
/***/ ((module) => {

function create2DArray(num) {
  const board = new Array(num);

  for (let i = 0; i < board.length; i += 1) {
    board[i] = new Array(num);
    for (let j = 0; j < board[i].length; j += 1) {
      board[i][j] = 0;
    }
  }

  return board;
}

module.exports = create2DArray;


/***/ }),

/***/ "./src/modules/dom-interactions/dom-gameboard.js":
/*!*******************************************************!*\
  !*** ./src/modules/dom-interactions/dom-gameboard.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const createDomElement = __webpack_require__(/*! ./helper-function */ "./src/modules/dom-interactions/helper-function.js");

function createGameboard() {
  const { body } = document;
  const boardContainer = createDomElement("div", { class: "board-container" });

  function grids(player, playerGrid) {
    const square = createDomElement("div", { class: player });
    for (let i = 0; i < 100; i += 1) {
      const grid = createDomElement("div", { class: playerGrid });
      square.appendChild(grid);
    }
    return { square };
  }

  boardContainer.appendChild(grids("player1-board", "player1-grid").square);
  boardContainer.appendChild(grids("player2-board", "player2-grid").square);
  body.appendChild(boardContainer);
}

module.exports = createGameboard;


/***/ }),

/***/ "./src/modules/dom-interactions/helper-function.js":
/*!*********************************************************!*\
  !*** ./src/modules/dom-interactions/helper-function.js ***!
  \*********************************************************/
/***/ ((module) => {

/* eslint-disable no-use-before-define */
// Helper function for creating DOM Elements

function createDomElement(type, attributes) {
  const newElement = document.createElement(`${type}`);
  if (attributes == null) return newElement;
  setAttributes(newElement, attributes);
  return newElement;
}

function setAttributes(element, attributes) {
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

module.exports = createDomElement;


/***/ }),

/***/ "./src/modules/dom-interactions/place-ship-random.js":
/*!***********************************************************!*\
  !*** ./src/modules/dom-interactions/place-ship-random.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Gameboard = __webpack_require__(/*! ../gameboard */ "./src/modules/gameboard.js");
const placeShips = __webpack_require__(/*! ../placeShipsOnBoard */ "./src/modules/placeShipsOnBoard.js");

function showShipsRandomly() {
  const squares = document.querySelectorAll(".player2-grid");
  const {
    board, positionShip, receiveAttack, Arr, allShipsSunk,
  } = Gameboard(placeShips.placeComputerShips);
  positionShip();
  // board.flat().forEach((item, index2) => {
  //   if (item === 1) squares[index2].classList.add("ship");
  // });
  return { receiveAttack, Arr, allShipsSunk };
}

module.exports = showShipsRandomly;


/***/ }),

/***/ "./src/modules/dom-interactions/place-ship.js":
/*!****************************************************!*\
  !*** ./src/modules/dom-interactions/place-ship.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable no-use-before-define */
const Gameboard = __webpack_require__(/*! ../gameboard */ "./src/modules/gameboard.js");
const placeShips = __webpack_require__(/*! ../placeShipsOnBoard */ "./src/modules/placeShipsOnBoard.js");

/** Gets ships coordinates from Gameboard and display in DOM */
function showShipsOnBoard() {
  const header = document.querySelector("h1");
  const squares = document.querySelectorAll(".player1-grid");
  const {
    board, positionShip, alignShip, receiveAttack, Arr, allShipsSunk,
  } = Gameboard(placeShips.placePlayerShips);

  const addListener = (square, index) => {
    square.addEventListener(
      "click",
      addBackgroundColor.bind(null, index, positionShip, board, squares),
    );
  };
  header.addEventListener("click", alignShip);
  squares.forEach(addListener);
  return { receiveAttack, Arr, allShipsSunk };
}

/** Adds background colour for missed shots */
function addBackgroundColor(index, positionShip, board, squares) {
  positionShip(index);
  board.flat().forEach((item, index2) => {
    if (item === 1) {
      squares[index2].classList.add("ship");
    }
  });
}

module.exports = showShipsOnBoard;


/***/ }),

/***/ "./src/modules/dom-interactions/shots-fired.js":
/*!*****************************************************!*\
  !*** ./src/modules/dom-interactions/shots-fired.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
const showShipsOnBoard = __webpack_require__(/*! ./place-ship */ "./src/modules/dom-interactions/place-ship.js");
const showShipsRandomly = __webpack_require__(/*! ./place-ship-random */ "./src/modules/dom-interactions/place-ship-random.js");

/** Checks for valid shots on ships */
function shots(showShips, className) {
  const playerBoard = document.querySelectorAll(`.${className}`);
  const { receiveAttack, Arr, allShipsSunk } = showShips();
  let count = 0;
  const validShots = (grid, index) => {
    const axis = `${index}`.split("");
    if (axis.length === 1) axis.unshift("0");

    const {
      hitCoord,
      ship5Sunk,
      ship4Sunk,
      ship3Sunk,
      ship2Sunk,
      ship1Sunk,
      ship5Coord,
      ship4Coord,
      ship3Coord,
      ship2Coord,
      ship1Coord,
    } = receiveAttack(axis);

    if (allShipsSunk()) console.log("Works");
    grid.classList.add("shots");
    if (hitCoord) grid.style.background = "red";
    isSunkShip(ship5Sunk, ship5Coord, playerBoard);
    isSunkShip(ship4Sunk, ship4Coord, playerBoard);
    isSunkShip(ship3Sunk, ship3Coord, playerBoard);
    isSunkShip(ship2Sunk, ship2Coord, playerBoard);
    isSunkShip(ship1Sunk, ship1Coord, playerBoard);
  };

  const colourValidShots = (grid, index) => {
    if (
      grid.classList[0] === "player1-grid"
			&& Arr.length === 5
			&& count >= 5
    ) {
      validShots(grid, index);
    }
    if (grid.classList[0] === "player2-grid") {
      randomShots();
      validShots(grid, index);
    }
    count += 1;
  };

  const addListenerToGrid = (grid, index) => {
    grid.addEventListener("click", colourValidShots.bind(null, grid, index));
  };
  playerBoard.forEach(addListenerToGrid);
}

/** Adds background colour when a ship is completely sunk */
function isSunkShip(shipSunk, shipCoord, playerBoard) {
  if (shipSunk === true) {
    shipCoord.forEach((item) => {
      playerBoard.forEach((square, ind) => {
        if (+item.join("") === ind) square.style.background = "blue";
      });
    });
  }
}

function randomShots() {
  const freeSpotArr = [];
  const humanPlayer = document.querySelectorAll(".player1-grid");
  humanPlayer.forEach((square, index) => {
    if (square.classList[1] !== "shots") {
      freeSpotArr.push(index);
    }
  });
  const randomNum = Math.floor(Math.random() * (freeSpotArr.length - 1));
  console.log(randomNum);
  console.log(humanPlayer[randomNum]);
  setTimeout(() => {
    humanPlayer[randomNum].classList.add("shots");
  }, 1000);
}

const computerShots = shots.bind(null, showShipsOnBoard, "player1-grid");
const playerShots = shots.bind(null, showShipsRandomly, "player2-grid");

module.exports = {
  computerShots,
  playerShots,
};


/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable no-return-assign */
const create2DArray = __webpack_require__(/*! ./2d-array */ "./src/modules/2d-array.js");
const Ship = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");

function Gameboard(placePlayerShips) {
  const Arr = [];
  let align = "X";
  const shipArr = [];
  const board = create2DArray(10);
  const alignShip = () => (align = align === "X" ? "Y" : "X");

  const positionShip = (index) => {
    placePlayerShips(Arr, board, shipArr, index, align);
  };

  const receiveAttack = (attack) => {
    let hitCoord;
    let ship5Sunk;
    let ship4Sunk;
    let ship3Sunk;
    let ship2Sunk;
    let ship1Sunk;
    let ship5Coord;
    let ship4Coord;
    let ship3Coord;
    let ship2Coord;
    let ship1Coord;

    const [shipFive, shipFour, shipThree, shipTwo, shipOne] = shipArr;
    const [ship5, ship4, ship3, ship2, ship1] = Arr;
    const array = [ship5, ship4, ship3, ship2, ship1].flat();

    array.forEach((ship) => {
      ship.forEach((coordinate, index) => {
        if (+attack.join("") === +coordinate) {
          hitCoord = ship.splice(index, 1);
          const shi5 = Ship(shipFive.XY, shipFive.shipLenght, shipFive.align);
          ship5Sunk = shi5.isSunk(ship, hitCoord);
          ship5Coord = shi5.shipCoord;
          const shi4 = Ship(shipFour.XY, shipFour.shipLenght, shipFour.align);
          ship4Sunk = shi4.isSunk(ship, hitCoord);
          ship4Coord = shi4.shipCoord;
          const shi3 = Ship(
            shipThree.XY,
            shipThree.shipLenght,
            shipThree.align,
          );
          ship3Sunk = shi3.isSunk(ship, hitCoord);
          ship3Coord = shi3.shipCoord;
          const shi2 = Ship(shipTwo.XY, shipTwo.shipLenght, shipTwo.align);
          ship2Sunk = shi2.isSunk(ship, hitCoord);
          ship2Coord = shi2.shipCoord;
          const shi1 = Ship(shipOne.XY, shipOne.shipLenght, shipOne.align);
          ship1Sunk = shi1.isSunk(ship, hitCoord);
          ship1Coord = shi1.shipCoord;
        }
      });
    });
    return {
      hitCoord,
      ship5Sunk,
      ship4Sunk,
      ship3Sunk,
      ship2Sunk,
      ship1Sunk,
      ship5Coord,
      ship4Coord,
      ship3Coord,
      ship2Coord,
      ship1Coord,
    };
  };

  const allShipsSunk = () => {
    const [ship5, ship4, ship3, ship2, ship1] = Arr.flat();
    if (ship5.length === 0
    && ship4.length === 0
    && ship3.length === 0
    && ship2.length === 0
    && ship1.length === 0
    ) return true;
    return false;
  };

  return {
    Arr,
    board,
    shipArr,
    alignShip,
    allShipsSunk,
    positionShip,
    receiveAttack,
  };
}

module.exports = Gameboard;


/***/ }),

/***/ "./src/modules/getShipCoordinates.js":
/*!*******************************************!*\
  !*** ./src/modules/getShipCoordinates.js ***!
  \*******************************************/
/***/ ((module) => {

/* eslint-disable no-plusplus */
function getShipCoordinates(array, length, align) {
  if (!Array.isArray(array) || array.length < 2) return false;
  const shipCoordinates = [array];
  if (align === "X") {
    for (let i = 1; i < length; i++) {
      shipCoordinates.push([array[0], array[1] + i]);
    }
  } else {
    for (let i = 1; i < length; i++) {
      shipCoordinates.push([array[0] + i, array[1]]);
    }
  }
  return shipCoordinates;
}

module.exports = getShipCoordinates;


/***/ }),

/***/ "./src/modules/placeShipsOnBoard.js":
/*!******************************************!*\
  !*** ./src/modules/placeShipsOnBoard.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable no-use-before-define */
/* eslint-disable no-return-assign */
const shipAxis = __webpack_require__(/*! ./shp-axis */ "./src/modules/shp-axis.js");

function placePlayerShips(Arr, board, shipArr, index, align) {
  let shipLenght;
  const assignValue = (value) => (shipLenght = value);
  if (Arr.length > 4) return;
  assignLengthToShips(Arr, assignValue);
  placeShips(index, shipLenght, align, board, Arr, shipArr);
}

function placeComputerShips(Arr, board, shipArr) {
  const alignArr = ["X", "Y"];
  let shipLenght;
  const assignValue = (value) => (shipLenght = value);
  while (Arr.length < 5) {
    assignLengthToShips(Arr, assignValue);
    const alignIndex = Math.floor(Math.random() * alignArr.length);
    const align = alignArr[alignIndex];
    const index = Math.floor(Math.random() * 100);
    placeShips(index, shipLenght, align, board, Arr, shipArr);
  }
}

function assignLengthToShips(Arr, assignValue) {
  if (Arr.length === 0) assignValue(5);
  if (Arr.length === 1) assignValue(4);
  if (Arr.length === 2) assignValue(3);
  if (Arr.length === 3) assignValue(3);
  if (Arr.length === 4) assignValue(2);
}

function placeShips(index, shipLenght, align, board, Arr, shipArr) {
  const axis = `${index}`.split("");
  if (axis.length === 1) axis.unshift("0");
  const shipCoord = shipAxis(+axis[0], +axis[1], shipLenght, align, board);
  if (shipCoord.length !== 0) {
    Arr.push(shipCoord);
    shipArr.push({ XY: [+axis[0], +axis[1]], align, shipLenght });
  }
}

module.exports = {
  placePlayerShips,
  placeComputerShips,
};


/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable no-restricted-syntax */
const getShipCoordinates = __webpack_require__(/*! ./getShipCoordinates */ "./src/modules/getShipCoordinates.js");

function Ship(array, length, align) {
  const shipCoord = getShipCoordinates(array, length, align);
  if (!Array.isArray(shipCoord) && !shipCoord.length > 0) return false;
  const isSunk = (coord, hitCoord) => {
    for (const XY of shipCoord) {
      if (hitCoord.join("") === XY.join("")) if (coord.length <= 0) return true;
    }
    return coord.length;
  };
  return { shipCoord, isSunk };
}

module.exports = Ship;


/***/ }),

/***/ "./src/modules/shp-axis.js":
/*!*********************************!*\
  !*** ./src/modules/shp-axis.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable no-plusplus */
const Ship = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");
const checkValidMove = __webpack_require__(/*! ./valid-move */ "./src/modules/valid-move.js");

function shipAxis(x, y, length, align, board, receiveAttack) {
  const ship = Ship([x, y], length, align, receiveAttack).shipCoord;
  const shipCoords = checkValidMove(ship, board);
  const arrayCoord = [];

  arrayCoord.push(shipCoords);
  arrayCoord.forEach((coord, index) => {
    if (!coord) arrayCoord.splice(index, 1);
  });

  return arrayCoord;
}

module.exports = shipAxis;


/***/ }),

/***/ "./src/modules/valid-move.js":
/*!***********************************!*\
  !*** ./src/modules/valid-move.js ***!
  \***********************************/
/***/ ((module) => {

/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
function checkValidMove(ship, boardArray) {
  const domBoardArrray = [];

  if (!ship) return false;
  for (let i = ship.length - 1; i >= 0; i -= 1) {
    if (
      +ship[i][0] > 9
  || +ship[i][1] > 9
  || boardArray[+ship[i][0]][+ship[i][1]] !== 0
    ) { return; }
  }
  for (let i = 0; i < ship.length; i += 1) {
    if (boardArray[+ship[i][0]][+ship[i][1]] === 1) return;
  }
  for (let i = 0; i < ship.length; i += 1) {
    boardArray[+ship[i][0]][+ship[i][1]] = 1;
    domBoardArrray.push(`${ship[i][0]}${ship[i][1]}`);
  }

  return domBoardArrray;
}

module.exports = checkValidMove;


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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_dom_interactions_dom_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom-interactions/dom-gameboard */ "./src/modules/dom-interactions/dom-gameboard.js");
/* harmony import */ var _modules_dom_interactions_dom_gameboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_dom_interactions_dom_gameboard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_dom_interactions_shots_fired__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom-interactions/shots-fired */ "./src/modules/dom-interactions/shots-fired.js");
/* harmony import */ var _modules_dom_interactions_shots_fired__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_dom_interactions_shots_fired__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_style_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/style/style.css */ "./src/modules/style/style.css");




_modules_dom_interactions_dom_gameboard__WEBPACK_IMPORTED_MODULE_0___default()();
(0,_modules_dom_interactions_shots_fired__WEBPACK_IMPORTED_MODULE_1__.computerShots)();
(0,_modules_dom_interactions_shots_fired__WEBPACK_IMPORTED_MODULE_1__.playerShots)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7Ozs7Ozs7Ozs7O0FDZkE7QUFDQSxhQUFhLG1CQUFPLENBQUMscUNBQVE7QUFDN0IsdUJBQXVCLG1CQUFPLENBQUMsaURBQWM7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MsUUFBUTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQSwyQkFBMkIsV0FBVyxFQUFFLFdBQVc7QUFDbkQ7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztVQ3hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBdUU7QUFDYTtBQUNqRDs7QUFFbkMsOEVBQWU7QUFDZixvRkFBYTtBQUNiLGtGQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3N0eWxlL3N0eWxlLmNzcz83NGQwIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzLzJkLWFycmF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20taW50ZXJhY3Rpb25zL2RvbS1nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS1pbnRlcmFjdGlvbnMvaGVscGVyLWZ1bmN0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20taW50ZXJhY3Rpb25zL3BsYWNlLXNoaXAtcmFuZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20taW50ZXJhY3Rpb25zL3BsYWNlLXNoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS1pbnRlcmFjdGlvbnMvc2hvdHMtZmlyZWQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2V0U2hpcENvb3JkaW5hdGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGFjZVNoaXBzT25Cb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hwLWF4aXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3ZhbGlkLW1vdmUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZ2FwOiAxMjVweDtcXG59XFxuXFxuLnBsYXllcjEtYm9hcmQsXFxuLnBsYXllcjItYm9hcmQge1xcbiAgcGFkZGluZzogMXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ2FwOiAxcHg7XFxuICB3aWR0aDogNDUwcHg7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5wbGF5ZXIxLWdyaWQsXFxuLnBsYXllcjItZ3JpZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnBsYXllcjEtZ3JpZDpob3ZlcixcXG4ucGxheWVyMi1ncmlkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4uc2hvdHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OSwgNDYsIDIxMSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tb2R1bGVzL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBOztFQUVFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLFFBQVE7RUFDUixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSx1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZ2FwOiAxMjVweDtcXG59XFxuXFxuLnBsYXllcjEtYm9hcmQsXFxuLnBsYXllcjItYm9hcmQge1xcbiAgcGFkZGluZzogMXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ2FwOiAxcHg7XFxuICB3aWR0aDogNDUwcHg7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5wbGF5ZXIxLWdyaWQsXFxuLnBsYXllcjItZ3JpZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnBsYXllcjEtZ3JpZDpob3ZlcixcXG4ucGxheWVyMi1ncmlkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4uc2hvdHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OSwgNDYsIDIxMSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gY3JlYXRlMkRBcnJheShudW0pIHtcbiAgY29uc3QgYm9hcmQgPSBuZXcgQXJyYXkobnVtKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgYm9hcmRbaV0gPSBuZXcgQXJyYXkobnVtKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJvYXJkW2ldLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBib2FyZFtpXVtqXSA9IDA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJvYXJkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZTJEQXJyYXk7XG4iLCJjb25zdCBjcmVhdGVEb21FbGVtZW50ID0gcmVxdWlyZShcIi4vaGVscGVyLWZ1bmN0aW9uXCIpO1xuXG5mdW5jdGlvbiBjcmVhdGVHYW1lYm9hcmQoKSB7XG4gIGNvbnN0IHsgYm9keSB9ID0gZG9jdW1lbnQ7XG4gIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImJvYXJkLWNvbnRhaW5lclwiIH0pO1xuXG4gIGZ1bmN0aW9uIGdyaWRzKHBsYXllciwgcGxheWVyR3JpZCkge1xuICAgIGNvbnN0IHNxdWFyZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogcGxheWVyIH0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGdyaWQgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IHBsYXllckdyaWQgfSk7XG4gICAgICBzcXVhcmUuYXBwZW5kQ2hpbGQoZ3JpZCk7XG4gICAgfVxuICAgIHJldHVybiB7IHNxdWFyZSB9O1xuICB9XG5cbiAgYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZHMoXCJwbGF5ZXIxLWJvYXJkXCIsIFwicGxheWVyMS1ncmlkXCIpLnNxdWFyZSk7XG4gIGJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWRzKFwicGxheWVyMi1ib2FyZFwiLCBcInBsYXllcjItZ3JpZFwiKS5zcXVhcmUpO1xuICBib2R5LmFwcGVuZENoaWxkKGJvYXJkQ29udGFpbmVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVHYW1lYm9hcmQ7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLy8gSGVscGVyIGZ1bmN0aW9uIGZvciBjcmVhdGluZyBET00gRWxlbWVudHNcblxuZnVuY3Rpb24gY3JlYXRlRG9tRWxlbWVudCh0eXBlLCBhdHRyaWJ1dGVzKSB7XG4gIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3R5cGV9YCk7XG4gIGlmIChhdHRyaWJ1dGVzID09IG51bGwpIHJldHVybiBuZXdFbGVtZW50O1xuICBzZXRBdHRyaWJ1dGVzKG5ld0VsZW1lbnQsIGF0dHJpYnV0ZXMpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVEb21FbGVtZW50O1xuIiwiY29uc3QgR2FtZWJvYXJkID0gcmVxdWlyZShcIi4uL2dhbWVib2FyZFwiKTtcbmNvbnN0IHBsYWNlU2hpcHMgPSByZXF1aXJlKFwiLi4vcGxhY2VTaGlwc09uQm9hcmRcIik7XG5cbmZ1bmN0aW9uIHNob3dTaGlwc1JhbmRvbWx5KCkge1xuICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXIyLWdyaWRcIik7XG4gIGNvbnN0IHtcbiAgICBib2FyZCwgcG9zaXRpb25TaGlwLCByZWNlaXZlQXR0YWNrLCBBcnIsIGFsbFNoaXBzU3VuayxcbiAgfSA9IEdhbWVib2FyZChwbGFjZVNoaXBzLnBsYWNlQ29tcHV0ZXJTaGlwcyk7XG4gIHBvc2l0aW9uU2hpcCgpO1xuICAvLyBib2FyZC5mbGF0KCkuZm9yRWFjaCgoaXRlbSwgaW5kZXgyKSA9PiB7XG4gIC8vICAgaWYgKGl0ZW0gPT09IDEpIHNxdWFyZXNbaW5kZXgyXS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgLy8gfSk7XG4gIHJldHVybiB7IHJlY2VpdmVBdHRhY2ssIEFyciwgYWxsU2hpcHNTdW5rIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvd1NoaXBzUmFuZG9tbHk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuY29uc3QgR2FtZWJvYXJkID0gcmVxdWlyZShcIi4uL2dhbWVib2FyZFwiKTtcbmNvbnN0IHBsYWNlU2hpcHMgPSByZXF1aXJlKFwiLi4vcGxhY2VTaGlwc09uQm9hcmRcIik7XG5cbi8qKiBHZXRzIHNoaXBzIGNvb3JkaW5hdGVzIGZyb20gR2FtZWJvYXJkIGFuZCBkaXNwbGF5IGluIERPTSAqL1xuZnVuY3Rpb24gc2hvd1NoaXBzT25Cb2FyZCgpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpO1xuICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXIxLWdyaWRcIik7XG4gIGNvbnN0IHtcbiAgICBib2FyZCwgcG9zaXRpb25TaGlwLCBhbGlnblNoaXAsIHJlY2VpdmVBdHRhY2ssIEFyciwgYWxsU2hpcHNTdW5rLFxuICB9ID0gR2FtZWJvYXJkKHBsYWNlU2hpcHMucGxhY2VQbGF5ZXJTaGlwcyk7XG5cbiAgY29uc3QgYWRkTGlzdGVuZXIgPSAoc3F1YXJlLCBpbmRleCkgPT4ge1xuICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgYWRkQmFja2dyb3VuZENvbG9yLmJpbmQobnVsbCwgaW5kZXgsIHBvc2l0aW9uU2hpcCwgYm9hcmQsIHNxdWFyZXMpLFxuICAgICk7XG4gIH07XG4gIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWxpZ25TaGlwKTtcbiAgc3F1YXJlcy5mb3JFYWNoKGFkZExpc3RlbmVyKTtcbiAgcmV0dXJuIHsgcmVjZWl2ZUF0dGFjaywgQXJyLCBhbGxTaGlwc1N1bmsgfTtcbn1cblxuLyoqIEFkZHMgYmFja2dyb3VuZCBjb2xvdXIgZm9yIG1pc3NlZCBzaG90cyAqL1xuZnVuY3Rpb24gYWRkQmFja2dyb3VuZENvbG9yKGluZGV4LCBwb3NpdGlvblNoaXAsIGJvYXJkLCBzcXVhcmVzKSB7XG4gIHBvc2l0aW9uU2hpcChpbmRleCk7XG4gIGJvYXJkLmZsYXQoKS5mb3JFYWNoKChpdGVtLCBpbmRleDIpID0+IHtcbiAgICBpZiAoaXRlbSA9PT0gMSkge1xuICAgICAgc3F1YXJlc1tpbmRleDJdLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvd1NoaXBzT25Cb2FyZDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuY29uc3Qgc2hvd1NoaXBzT25Cb2FyZCA9IHJlcXVpcmUoXCIuL3BsYWNlLXNoaXBcIik7XG5jb25zdCBzaG93U2hpcHNSYW5kb21seSA9IHJlcXVpcmUoXCIuL3BsYWNlLXNoaXAtcmFuZG9tXCIpO1xuXG4vKiogQ2hlY2tzIGZvciB2YWxpZCBzaG90cyBvbiBzaGlwcyAqL1xuZnVuY3Rpb24gc2hvdHMoc2hvd1NoaXBzLCBjbGFzc05hbWUpIHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjbGFzc05hbWV9YCk7XG4gIGNvbnN0IHsgcmVjZWl2ZUF0dGFjaywgQXJyLCBhbGxTaGlwc1N1bmsgfSA9IHNob3dTaGlwcygpO1xuICBsZXQgY291bnQgPSAwO1xuICBjb25zdCB2YWxpZFNob3RzID0gKGdyaWQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgYXhpcyA9IGAke2luZGV4fWAuc3BsaXQoXCJcIik7XG4gICAgaWYgKGF4aXMubGVuZ3RoID09PSAxKSBheGlzLnVuc2hpZnQoXCIwXCIpO1xuXG4gICAgY29uc3Qge1xuICAgICAgaGl0Q29vcmQsXG4gICAgICBzaGlwNVN1bmssXG4gICAgICBzaGlwNFN1bmssXG4gICAgICBzaGlwM1N1bmssXG4gICAgICBzaGlwMlN1bmssXG4gICAgICBzaGlwMVN1bmssXG4gICAgICBzaGlwNUNvb3JkLFxuICAgICAgc2hpcDRDb29yZCxcbiAgICAgIHNoaXAzQ29vcmQsXG4gICAgICBzaGlwMkNvb3JkLFxuICAgICAgc2hpcDFDb29yZCxcbiAgICB9ID0gcmVjZWl2ZUF0dGFjayhheGlzKTtcblxuICAgIGlmIChhbGxTaGlwc1N1bmsoKSkgY29uc29sZS5sb2coXCJXb3Jrc1wiKTtcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJzaG90c1wiKTtcbiAgICBpZiAoaGl0Q29vcmQpIGdyaWQuc3R5bGUuYmFja2dyb3VuZCA9IFwicmVkXCI7XG4gICAgaXNTdW5rU2hpcChzaGlwNVN1bmssIHNoaXA1Q29vcmQsIHBsYXllckJvYXJkKTtcbiAgICBpc1N1bmtTaGlwKHNoaXA0U3Vuaywgc2hpcDRDb29yZCwgcGxheWVyQm9hcmQpO1xuICAgIGlzU3Vua1NoaXAoc2hpcDNTdW5rLCBzaGlwM0Nvb3JkLCBwbGF5ZXJCb2FyZCk7XG4gICAgaXNTdW5rU2hpcChzaGlwMlN1bmssIHNoaXAyQ29vcmQsIHBsYXllckJvYXJkKTtcbiAgICBpc1N1bmtTaGlwKHNoaXAxU3Vuaywgc2hpcDFDb29yZCwgcGxheWVyQm9hcmQpO1xuICB9O1xuXG4gIGNvbnN0IGNvbG91clZhbGlkU2hvdHMgPSAoZ3JpZCwgaW5kZXgpID0+IHtcbiAgICBpZiAoXG4gICAgICBncmlkLmNsYXNzTGlzdFswXSA9PT0gXCJwbGF5ZXIxLWdyaWRcIlxuXHRcdFx0JiYgQXJyLmxlbmd0aCA9PT0gNVxuXHRcdFx0JiYgY291bnQgPj0gNVxuICAgICkge1xuICAgICAgdmFsaWRTaG90cyhncmlkLCBpbmRleCk7XG4gICAgfVxuICAgIGlmIChncmlkLmNsYXNzTGlzdFswXSA9PT0gXCJwbGF5ZXIyLWdyaWRcIikge1xuICAgICAgcmFuZG9tU2hvdHMoKTtcbiAgICAgIHZhbGlkU2hvdHMoZ3JpZCwgaW5kZXgpO1xuICAgIH1cbiAgICBjb3VudCArPSAxO1xuICB9O1xuXG4gIGNvbnN0IGFkZExpc3RlbmVyVG9HcmlkID0gKGdyaWQsIGluZGV4KSA9PiB7XG4gICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29sb3VyVmFsaWRTaG90cy5iaW5kKG51bGwsIGdyaWQsIGluZGV4KSk7XG4gIH07XG4gIHBsYXllckJvYXJkLmZvckVhY2goYWRkTGlzdGVuZXJUb0dyaWQpO1xufVxuXG4vKiogQWRkcyBiYWNrZ3JvdW5kIGNvbG91ciB3aGVuIGEgc2hpcCBpcyBjb21wbGV0ZWx5IHN1bmsgKi9cbmZ1bmN0aW9uIGlzU3Vua1NoaXAoc2hpcFN1bmssIHNoaXBDb29yZCwgcGxheWVyQm9hcmQpIHtcbiAgaWYgKHNoaXBTdW5rID09PSB0cnVlKSB7XG4gICAgc2hpcENvb3JkLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIHBsYXllckJvYXJkLmZvckVhY2goKHNxdWFyZSwgaW5kKSA9PiB7XG4gICAgICAgIGlmICgraXRlbS5qb2luKFwiXCIpID09PSBpbmQpIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJibHVlXCI7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByYW5kb21TaG90cygpIHtcbiAgY29uc3QgZnJlZVNwb3RBcnIgPSBbXTtcbiAgY29uc3QgaHVtYW5QbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllcjEtZ3JpZFwiKTtcbiAgaHVtYW5QbGF5ZXIuZm9yRWFjaCgoc3F1YXJlLCBpbmRleCkgPT4ge1xuICAgIGlmIChzcXVhcmUuY2xhc3NMaXN0WzFdICE9PSBcInNob3RzXCIpIHtcbiAgICAgIGZyZWVTcG90QXJyLnB1c2goaW5kZXgpO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IHJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChmcmVlU3BvdEFyci5sZW5ndGggLSAxKSk7XG4gIGNvbnNvbGUubG9nKHJhbmRvbU51bSk7XG4gIGNvbnNvbGUubG9nKGh1bWFuUGxheWVyW3JhbmRvbU51bV0pO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBodW1hblBsYXllcltyYW5kb21OdW1dLmNsYXNzTGlzdC5hZGQoXCJzaG90c1wiKTtcbiAgfSwgMTAwMCk7XG59XG5cbmNvbnN0IGNvbXB1dGVyU2hvdHMgPSBzaG90cy5iaW5kKG51bGwsIHNob3dTaGlwc09uQm9hcmQsIFwicGxheWVyMS1ncmlkXCIpO1xuY29uc3QgcGxheWVyU2hvdHMgPSBzaG90cy5iaW5kKG51bGwsIHNob3dTaGlwc1JhbmRvbWx5LCBcInBsYXllcjItZ3JpZFwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNvbXB1dGVyU2hvdHMsXG4gIHBsYXllclNob3RzLFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJldHVybi1hc3NpZ24gKi9cbmNvbnN0IGNyZWF0ZTJEQXJyYXkgPSByZXF1aXJlKFwiLi8yZC1hcnJheVwiKTtcbmNvbnN0IFNoaXAgPSByZXF1aXJlKFwiLi9zaGlwXCIpO1xuXG5mdW5jdGlvbiBHYW1lYm9hcmQocGxhY2VQbGF5ZXJTaGlwcykge1xuICBjb25zdCBBcnIgPSBbXTtcbiAgbGV0IGFsaWduID0gXCJYXCI7XG4gIGNvbnN0IHNoaXBBcnIgPSBbXTtcbiAgY29uc3QgYm9hcmQgPSBjcmVhdGUyREFycmF5KDEwKTtcbiAgY29uc3QgYWxpZ25TaGlwID0gKCkgPT4gKGFsaWduID0gYWxpZ24gPT09IFwiWFwiID8gXCJZXCIgOiBcIlhcIik7XG5cbiAgY29uc3QgcG9zaXRpb25TaGlwID0gKGluZGV4KSA9PiB7XG4gICAgcGxhY2VQbGF5ZXJTaGlwcyhBcnIsIGJvYXJkLCBzaGlwQXJyLCBpbmRleCwgYWxpZ24pO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoYXR0YWNrKSA9PiB7XG4gICAgbGV0IGhpdENvb3JkO1xuICAgIGxldCBzaGlwNVN1bms7XG4gICAgbGV0IHNoaXA0U3VuaztcbiAgICBsZXQgc2hpcDNTdW5rO1xuICAgIGxldCBzaGlwMlN1bms7XG4gICAgbGV0IHNoaXAxU3VuaztcbiAgICBsZXQgc2hpcDVDb29yZDtcbiAgICBsZXQgc2hpcDRDb29yZDtcbiAgICBsZXQgc2hpcDNDb29yZDtcbiAgICBsZXQgc2hpcDJDb29yZDtcbiAgICBsZXQgc2hpcDFDb29yZDtcblxuICAgIGNvbnN0IFtzaGlwRml2ZSwgc2hpcEZvdXIsIHNoaXBUaHJlZSwgc2hpcFR3bywgc2hpcE9uZV0gPSBzaGlwQXJyO1xuICAgIGNvbnN0IFtzaGlwNSwgc2hpcDQsIHNoaXAzLCBzaGlwMiwgc2hpcDFdID0gQXJyO1xuICAgIGNvbnN0IGFycmF5ID0gW3NoaXA1LCBzaGlwNCwgc2hpcDMsIHNoaXAyLCBzaGlwMV0uZmxhdCgpO1xuXG4gICAgYXJyYXkuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgc2hpcC5mb3JFYWNoKChjb29yZGluYXRlLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoK2F0dGFjay5qb2luKFwiXCIpID09PSArY29vcmRpbmF0ZSkge1xuICAgICAgICAgIGhpdENvb3JkID0gc2hpcC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIGNvbnN0IHNoaTUgPSBTaGlwKHNoaXBGaXZlLlhZLCBzaGlwRml2ZS5zaGlwTGVuZ2h0LCBzaGlwRml2ZS5hbGlnbik7XG4gICAgICAgICAgc2hpcDVTdW5rID0gc2hpNS5pc1N1bmsoc2hpcCwgaGl0Q29vcmQpO1xuICAgICAgICAgIHNoaXA1Q29vcmQgPSBzaGk1LnNoaXBDb29yZDtcbiAgICAgICAgICBjb25zdCBzaGk0ID0gU2hpcChzaGlwRm91ci5YWSwgc2hpcEZvdXIuc2hpcExlbmdodCwgc2hpcEZvdXIuYWxpZ24pO1xuICAgICAgICAgIHNoaXA0U3VuayA9IHNoaTQuaXNTdW5rKHNoaXAsIGhpdENvb3JkKTtcbiAgICAgICAgICBzaGlwNENvb3JkID0gc2hpNC5zaGlwQ29vcmQ7XG4gICAgICAgICAgY29uc3Qgc2hpMyA9IFNoaXAoXG4gICAgICAgICAgICBzaGlwVGhyZWUuWFksXG4gICAgICAgICAgICBzaGlwVGhyZWUuc2hpcExlbmdodCxcbiAgICAgICAgICAgIHNoaXBUaHJlZS5hbGlnbixcbiAgICAgICAgICApO1xuICAgICAgICAgIHNoaXAzU3VuayA9IHNoaTMuaXNTdW5rKHNoaXAsIGhpdENvb3JkKTtcbiAgICAgICAgICBzaGlwM0Nvb3JkID0gc2hpMy5zaGlwQ29vcmQ7XG4gICAgICAgICAgY29uc3Qgc2hpMiA9IFNoaXAoc2hpcFR3by5YWSwgc2hpcFR3by5zaGlwTGVuZ2h0LCBzaGlwVHdvLmFsaWduKTtcbiAgICAgICAgICBzaGlwMlN1bmsgPSBzaGkyLmlzU3VuayhzaGlwLCBoaXRDb29yZCk7XG4gICAgICAgICAgc2hpcDJDb29yZCA9IHNoaTIuc2hpcENvb3JkO1xuICAgICAgICAgIGNvbnN0IHNoaTEgPSBTaGlwKHNoaXBPbmUuWFksIHNoaXBPbmUuc2hpcExlbmdodCwgc2hpcE9uZS5hbGlnbik7XG4gICAgICAgICAgc2hpcDFTdW5rID0gc2hpMS5pc1N1bmsoc2hpcCwgaGl0Q29vcmQpO1xuICAgICAgICAgIHNoaXAxQ29vcmQgPSBzaGkxLnNoaXBDb29yZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhpdENvb3JkLFxuICAgICAgc2hpcDVTdW5rLFxuICAgICAgc2hpcDRTdW5rLFxuICAgICAgc2hpcDNTdW5rLFxuICAgICAgc2hpcDJTdW5rLFxuICAgICAgc2hpcDFTdW5rLFxuICAgICAgc2hpcDVDb29yZCxcbiAgICAgIHNoaXA0Q29vcmQsXG4gICAgICBzaGlwM0Nvb3JkLFxuICAgICAgc2hpcDJDb29yZCxcbiAgICAgIHNoaXAxQ29vcmQsXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgY29uc3QgW3NoaXA1LCBzaGlwNCwgc2hpcDMsIHNoaXAyLCBzaGlwMV0gPSBBcnIuZmxhdCgpO1xuICAgIGlmIChzaGlwNS5sZW5ndGggPT09IDBcbiAgICAmJiBzaGlwNC5sZW5ndGggPT09IDBcbiAgICAmJiBzaGlwMy5sZW5ndGggPT09IDBcbiAgICAmJiBzaGlwMi5sZW5ndGggPT09IDBcbiAgICAmJiBzaGlwMS5sZW5ndGggPT09IDBcbiAgICApIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIEFycixcbiAgICBib2FyZCxcbiAgICBzaGlwQXJyLFxuICAgIGFsaWduU2hpcCxcbiAgICBhbGxTaGlwc1N1bmssXG4gICAgcG9zaXRpb25TaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZWJvYXJkO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmZ1bmN0aW9uIGdldFNoaXBDb29yZGluYXRlcyhhcnJheSwgbGVuZ3RoLCBhbGlnbikge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpIHx8IGFycmF5Lmxlbmd0aCA8IDIpIHJldHVybiBmYWxzZTtcbiAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gW2FycmF5XTtcbiAgaWYgKGFsaWduID09PSBcIlhcIikge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHNoaXBDb29yZGluYXRlcy5wdXNoKFthcnJheVswXSwgYXJyYXlbMV0gKyBpXSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHNoaXBDb29yZGluYXRlcy5wdXNoKFthcnJheVswXSArIGksIGFycmF5WzFdXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzaGlwQ29vcmRpbmF0ZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U2hpcENvb3JkaW5hdGVzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJldHVybi1hc3NpZ24gKi9cbmNvbnN0IHNoaXBBeGlzID0gcmVxdWlyZShcIi4vc2hwLWF4aXNcIik7XG5cbmZ1bmN0aW9uIHBsYWNlUGxheWVyU2hpcHMoQXJyLCBib2FyZCwgc2hpcEFyciwgaW5kZXgsIGFsaWduKSB7XG4gIGxldCBzaGlwTGVuZ2h0O1xuICBjb25zdCBhc3NpZ25WYWx1ZSA9ICh2YWx1ZSkgPT4gKHNoaXBMZW5naHQgPSB2YWx1ZSk7XG4gIGlmIChBcnIubGVuZ3RoID4gNCkgcmV0dXJuO1xuICBhc3NpZ25MZW5ndGhUb1NoaXBzKEFyciwgYXNzaWduVmFsdWUpO1xuICBwbGFjZVNoaXBzKGluZGV4LCBzaGlwTGVuZ2h0LCBhbGlnbiwgYm9hcmQsIEFyciwgc2hpcEFycik7XG59XG5cbmZ1bmN0aW9uIHBsYWNlQ29tcHV0ZXJTaGlwcyhBcnIsIGJvYXJkLCBzaGlwQXJyKSB7XG4gIGNvbnN0IGFsaWduQXJyID0gW1wiWFwiLCBcIllcIl07XG4gIGxldCBzaGlwTGVuZ2h0O1xuICBjb25zdCBhc3NpZ25WYWx1ZSA9ICh2YWx1ZSkgPT4gKHNoaXBMZW5naHQgPSB2YWx1ZSk7XG4gIHdoaWxlIChBcnIubGVuZ3RoIDwgNSkge1xuICAgIGFzc2lnbkxlbmd0aFRvU2hpcHMoQXJyLCBhc3NpZ25WYWx1ZSk7XG4gICAgY29uc3QgYWxpZ25JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFsaWduQXJyLmxlbmd0aCk7XG4gICAgY29uc3QgYWxpZ24gPSBhbGlnbkFyclthbGlnbkluZGV4XTtcbiAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgcGxhY2VTaGlwcyhpbmRleCwgc2hpcExlbmdodCwgYWxpZ24sIGJvYXJkLCBBcnIsIHNoaXBBcnIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2lnbkxlbmd0aFRvU2hpcHMoQXJyLCBhc3NpZ25WYWx1ZSkge1xuICBpZiAoQXJyLmxlbmd0aCA9PT0gMCkgYXNzaWduVmFsdWUoNSk7XG4gIGlmIChBcnIubGVuZ3RoID09PSAxKSBhc3NpZ25WYWx1ZSg0KTtcbiAgaWYgKEFyci5sZW5ndGggPT09IDIpIGFzc2lnblZhbHVlKDMpO1xuICBpZiAoQXJyLmxlbmd0aCA9PT0gMykgYXNzaWduVmFsdWUoMyk7XG4gIGlmIChBcnIubGVuZ3RoID09PSA0KSBhc3NpZ25WYWx1ZSgyKTtcbn1cblxuZnVuY3Rpb24gcGxhY2VTaGlwcyhpbmRleCwgc2hpcExlbmdodCwgYWxpZ24sIGJvYXJkLCBBcnIsIHNoaXBBcnIpIHtcbiAgY29uc3QgYXhpcyA9IGAke2luZGV4fWAuc3BsaXQoXCJcIik7XG4gIGlmIChheGlzLmxlbmd0aCA9PT0gMSkgYXhpcy51bnNoaWZ0KFwiMFwiKTtcbiAgY29uc3Qgc2hpcENvb3JkID0gc2hpcEF4aXMoK2F4aXNbMF0sICtheGlzWzFdLCBzaGlwTGVuZ2h0LCBhbGlnbiwgYm9hcmQpO1xuICBpZiAoc2hpcENvb3JkLmxlbmd0aCAhPT0gMCkge1xuICAgIEFyci5wdXNoKHNoaXBDb29yZCk7XG4gICAgc2hpcEFyci5wdXNoKHsgWFk6IFsrYXhpc1swXSwgK2F4aXNbMV1dLCBhbGlnbiwgc2hpcExlbmdodCB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGxhY2VQbGF5ZXJTaGlwcyxcbiAgcGxhY2VDb21wdXRlclNoaXBzLFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5jb25zdCBnZXRTaGlwQ29vcmRpbmF0ZXMgPSByZXF1aXJlKFwiLi9nZXRTaGlwQ29vcmRpbmF0ZXNcIik7XG5cbmZ1bmN0aW9uIFNoaXAoYXJyYXksIGxlbmd0aCwgYWxpZ24pIHtcbiAgY29uc3Qgc2hpcENvb3JkID0gZ2V0U2hpcENvb3JkaW5hdGVzKGFycmF5LCBsZW5ndGgsIGFsaWduKTtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHNoaXBDb29yZCkgJiYgIXNoaXBDb29yZC5sZW5ndGggPiAwKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IGlzU3VuayA9IChjb29yZCwgaGl0Q29vcmQpID0+IHtcbiAgICBmb3IgKGNvbnN0IFhZIG9mIHNoaXBDb29yZCkge1xuICAgICAgaWYgKGhpdENvb3JkLmpvaW4oXCJcIikgPT09IFhZLmpvaW4oXCJcIikpIGlmIChjb29yZC5sZW5ndGggPD0gMCkgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBjb29yZC5sZW5ndGg7XG4gIH07XG4gIHJldHVybiB7IHNoaXBDb29yZCwgaXNTdW5rIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2hpcDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5jb25zdCBTaGlwID0gcmVxdWlyZShcIi4vc2hpcFwiKTtcbmNvbnN0IGNoZWNrVmFsaWRNb3ZlID0gcmVxdWlyZShcIi4vdmFsaWQtbW92ZVwiKTtcblxuZnVuY3Rpb24gc2hpcEF4aXMoeCwgeSwgbGVuZ3RoLCBhbGlnbiwgYm9hcmQsIHJlY2VpdmVBdHRhY2spIHtcbiAgY29uc3Qgc2hpcCA9IFNoaXAoW3gsIHldLCBsZW5ndGgsIGFsaWduLCByZWNlaXZlQXR0YWNrKS5zaGlwQ29vcmQ7XG4gIGNvbnN0IHNoaXBDb29yZHMgPSBjaGVja1ZhbGlkTW92ZShzaGlwLCBib2FyZCk7XG4gIGNvbnN0IGFycmF5Q29vcmQgPSBbXTtcblxuICBhcnJheUNvb3JkLnB1c2goc2hpcENvb3Jkcyk7XG4gIGFycmF5Q29vcmQuZm9yRWFjaCgoY29vcmQsIGluZGV4KSA9PiB7XG4gICAgaWYgKCFjb29yZCkgYXJyYXlDb29yZC5zcGxpY2UoaW5kZXgsIDEpO1xuICB9KTtcblxuICByZXR1cm4gYXJyYXlDb29yZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaGlwQXhpcztcbiIsIi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuZnVuY3Rpb24gY2hlY2tWYWxpZE1vdmUoc2hpcCwgYm9hcmRBcnJheSkge1xuICBjb25zdCBkb21Cb2FyZEFycnJheSA9IFtdO1xuXG4gIGlmICghc2hpcCkgcmV0dXJuIGZhbHNlO1xuICBmb3IgKGxldCBpID0gc2hpcC5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgIGlmIChcbiAgICAgICtzaGlwW2ldWzBdID4gOVxuICB8fCArc2hpcFtpXVsxXSA+IDlcbiAgfHwgYm9hcmRBcnJheVsrc2hpcFtpXVswXV1bK3NoaXBbaV1bMV1dICE9PSAwXG4gICAgKSB7IHJldHVybjsgfVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChib2FyZEFycmF5WytzaGlwW2ldWzBdXVsrc2hpcFtpXVsxXV0gPT09IDEpIHJldHVybjtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBib2FyZEFycmF5WytzaGlwW2ldWzBdXVsrc2hpcFtpXVsxXV0gPSAxO1xuICAgIGRvbUJvYXJkQXJycmF5LnB1c2goYCR7c2hpcFtpXVswXX0ke3NoaXBbaV1bMV19YCk7XG4gIH1cblxuICByZXR1cm4gZG9tQm9hcmRBcnJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tWYWxpZE1vdmU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgY3JlYXRlR2FtZWJvYXJkIGZyb20gXCIuL21vZHVsZXMvZG9tLWludGVyYWN0aW9ucy9kb20tZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBjb21wdXRlclNob3RzLCBwbGF5ZXJTaG90cyB9IGZyb20gXCIuL21vZHVsZXMvZG9tLWludGVyYWN0aW9ucy9zaG90cy1maXJlZFwiO1xuaW1wb3J0IFwiLi9tb2R1bGVzL3N0eWxlL3N0eWxlLmNzc1wiO1xuXG5jcmVhdGVHYW1lYm9hcmQoKTtcbmNvbXB1dGVyU2hvdHMoKTtcbnBsYXllclNob3RzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=