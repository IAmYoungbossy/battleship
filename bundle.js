/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/style/style.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/style/style.css ***!
  \***************************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  align-items: center;\n  background: radial-gradient(\n    circle at 100%,\n    #341406e8,\n    #333 50%,\n    #0f1017 75%,\n    #123 75%\n  );\n}\n\nheader {\n  width: -webkit-fill-available;\n}\n\n.header {\n  border: 0ch;\n}\n\nh1 {\n  text-align: center;\n  font-size: 8rem;\n  color: #715f36;\n  text-shadow: 3px -7px 5px black;\n}\n\n.h1 {\n  font-size: 4rem;\n}\n\n.instruction2 {\n  color: aqua;\n  text-transform: uppercase;\n}\n\n.input-div,\n.game-over-div {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 100px;\n}\n\n.game-over-div {\n  margin-top: 65px;\n}\n\n.align-ships {\n  text-align: center;\n  position: relative;\n}\n\nlabel {\n  font-size: xx-large;\n  color: aquamarine;\n}\n\ninput {\n  padding: 15px;\n  border-radius: 10px;\n}\n\n.second-input {\n  position: relative;\n}\n\n.start-btn {\n  width: fit-content;\n  padding: 15px;\n  align-self: center;\n}\n\n.choose-div {\n  margin-top: 100px;\n}\n\n.choose-div > p {\n  font-size: 2rem;\n  text-transform: capitalize;\n  color: aquamarine;\n}\n\n.btn-div {\n  text-align: center;\n  margin-top: 10px;\n}\n\n.play-human {\n  margin-left: 20px;\n}\n\n.play-ai,\n.play-human,\n.btn-restart {\n  width: 100px;\n  padding: 15px 0;\n}\n\n.btn-restart {\n  margin: auto;\n}\n\n.game-over {\n  font-size: xxx-large;\n  color: #c3cbeb;\n  text-shadow: 3px -7px 5px black;\n}\n\n.winner,\n.name {\n  font-size: xx-large;\n  color: cadetblue;\n  margin-top: -15px;\n  text-shadow: 0px -5px 5px;\n}\n\n.game-over-div {\n  text-align: center;\n}\n\n.board-container {\n  display: flex;\n  margin: auto;\n  flex-wrap: wrap;\n  width: 100%;\n  justify-content: space-between;\n  gap: 20px;\n}\n\n.player1-board,\n.player2-board {\n  backdrop-filter: brightness(0.7);\n  padding: 1px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  gap: 1px;\n  width: 450px;\n  height: 450px;\n  margin: auto;\n  border: 1px solid #f2f2f2;\n}\n\n.player1-grid,\n.player2-grid {\n  border: 1px solid #f8f8f8;\n}\n\n.player1-grid:hover,\n.player2-grid:hover {\n  background-color: rgb(255, 183, 183);\n}\n\n.red:hover {\n  background-color: red;\n}\n\n.grey {\n  background-color: rgb(255, 183, 183) !important;\n}\n\n.hide {\n  position: absolute;\n  visibility: hidden;\n}\n\n.show {\n  position: relative;\n  visibility: visible;\n}\n\n.ship {\n  background-color: #00ffff70 !important;\n}\n\n.shots {\n  border-radius: 40px;\n  background-color: white !important;\n}\n\n.valid-shot {\n  background-color: red !important;\n}\n\n.sunk-ship {\n  background-color: blue !important;\n}\n\nfooter {\n  padding: 15px;\n  margin-top: auto;\n  text-align: center;\n  background-color: #bba7a7;\n  width: -webkit-fill-available;\n}\n", "",{"version":3,"sources":["webpack://./src/modules/style/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,mBAAmB;EACnB;;;;;;GAMC;AACH;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,cAAc;EACd,+BAA+B;AACjC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,yBAAyB;AAC3B;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,0BAA0B;EAC1B,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;;EAGE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,oBAAoB;EACpB,cAAc;EACd,+BAA+B;AACjC;;AAEA;;EAEE,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,eAAe;EACf,WAAW;EACX,8BAA8B;EAC9B,SAAS;AACX;;AAEA;;EAEE,gCAAgC;EAChC,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;;EAEE,yBAAyB;AAC3B;;AAEA;;EAEE,oCAAoC;AACtC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,+CAA+C;AACjD;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,mBAAmB;EACnB,kCAAkC;AACpC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,kBAAkB;EAClB,yBAAyB;EACzB,6BAA6B;AAC/B","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  align-items: center;\n  background: radial-gradient(\n    circle at 100%,\n    #341406e8,\n    #333 50%,\n    #0f1017 75%,\n    #123 75%\n  );\n}\n\nheader {\n  width: -webkit-fill-available;\n}\n\n.header {\n  border: 0ch;\n}\n\nh1 {\n  text-align: center;\n  font-size: 8rem;\n  color: #715f36;\n  text-shadow: 3px -7px 5px black;\n}\n\n.h1 {\n  font-size: 4rem;\n}\n\n.instruction2 {\n  color: aqua;\n  text-transform: uppercase;\n}\n\n.input-div,\n.game-over-div {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 100px;\n}\n\n.game-over-div {\n  margin-top: 65px;\n}\n\n.align-ships {\n  text-align: center;\n  position: relative;\n}\n\nlabel {\n  font-size: xx-large;\n  color: aquamarine;\n}\n\ninput {\n  padding: 15px;\n  border-radius: 10px;\n}\n\n.second-input {\n  position: relative;\n}\n\n.start-btn {\n  width: fit-content;\n  padding: 15px;\n  align-self: center;\n}\n\n.choose-div {\n  margin-top: 100px;\n}\n\n.choose-div > p {\n  font-size: 2rem;\n  text-transform: capitalize;\n  color: aquamarine;\n}\n\n.btn-div {\n  text-align: center;\n  margin-top: 10px;\n}\n\n.play-human {\n  margin-left: 20px;\n}\n\n.play-ai,\n.play-human,\n.btn-restart {\n  width: 100px;\n  padding: 15px 0;\n}\n\n.btn-restart {\n  margin: auto;\n}\n\n.game-over {\n  font-size: xxx-large;\n  color: #c3cbeb;\n  text-shadow: 3px -7px 5px black;\n}\n\n.winner,\n.name {\n  font-size: xx-large;\n  color: cadetblue;\n  margin-top: -15px;\n  text-shadow: 0px -5px 5px;\n}\n\n.game-over-div {\n  text-align: center;\n}\n\n.board-container {\n  display: flex;\n  margin: auto;\n  flex-wrap: wrap;\n  width: 100%;\n  justify-content: space-between;\n  gap: 20px;\n}\n\n.player1-board,\n.player2-board {\n  backdrop-filter: brightness(0.7);\n  padding: 1px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  gap: 1px;\n  width: 450px;\n  height: 450px;\n  margin: auto;\n  border: 1px solid #f2f2f2;\n}\n\n.player1-grid,\n.player2-grid {\n  border: 1px solid #f8f8f8;\n}\n\n.player1-grid:hover,\n.player2-grid:hover {\n  background-color: rgb(255, 183, 183);\n}\n\n.red:hover {\n  background-color: red;\n}\n\n.grey {\n  background-color: rgb(255, 183, 183) !important;\n}\n\n.hide {\n  position: absolute;\n  visibility: hidden;\n}\n\n.show {\n  position: relative;\n  visibility: visible;\n}\n\n.ship {\n  background-color: #00ffff70 !important;\n}\n\n.shots {\n  border-radius: 40px;\n  background-color: white !important;\n}\n\n.valid-shot {\n  background-color: red !important;\n}\n\n.sunk-ship {\n  background-color: blue !important;\n}\n\nfooter {\n  padding: 15px;\n  margin-top: auto;\n  text-align: center;\n  background-color: #bba7a7;\n  width: -webkit-fill-available;\n}\n"],"sourceRoot":""}]);
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create2DArray": () => (/* binding */ create2DArray)
/* harmony export */ });
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




/***/ }),

/***/ "./src/modules/dom-interactions/choose-player.js":
/*!*******************************************************!*\
  !*** ./src/modules/dom-interactions/choose-player.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "choosePlayer": () => (/* binding */ choosePlayer)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../player */ "./src/modules/player.js");
/* harmony import */ var _dom_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-gameboard */ "./src/modules/dom-interactions/dom-gameboard.js");
/* harmony import */ var _helper_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper-function */ "./src/modules/dom-interactions/helper-function.js");
/* harmony import */ var _name_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./name-input */ "./src/modules/dom-interactions/name-input.js");
/* harmony import */ var _player_vs_computer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player-vs-computer */ "./src/modules/dom-interactions/player-vs-computer.js");






let lengthOfShip = 5;
let counter = 5;

function choosePlayer(playerName) {
  const chooseDiv = (0,_helper_function__WEBPACK_IMPORTED_MODULE_2__.createDomElement)("div", { class: "choose-div" });
  const btnDiv = (0,_helper_function__WEBPACK_IMPORTED_MODULE_2__.createDomElement)("div", { class: "btn-div" });
  const playAi = (0,_helper_function__WEBPACK_IMPORTED_MODULE_2__.createDomElement)("button", { class: "play-ai" });
  const playHuman = (0,_helper_function__WEBPACK_IMPORTED_MODULE_2__.createDomElement)("button", { class: "play-human" });
  const instruction = (0,_helper_function__WEBPACK_IMPORTED_MODULE_2__.createDomElement)("p");
  const alignShipDiv = (0,_helper_function__WEBPACK_IMPORTED_MODULE_2__.createDomElement)("div", { class: "align-ships" });
  const instruction2 = (0,_helper_function__WEBPACK_IMPORTED_MODULE_2__.createDomElement)("p", { class: "instruction2" });
  const axisBtn = (0,_helper_function__WEBPACK_IMPORTED_MODULE_2__.createDomElement)("button", { class: "axis-btn" });
  const continueBtn = (0,_helper_function__WEBPACK_IMPORTED_MODULE_2__.createDomElement)("button", {
    class: "continue-btn hide",
  });
  const playName = JSON.parse(localStorage.getItem("playerName"));
  instruction2.textContent = `${playName}, Place Your Ships.`;
  playAi.textContent = "PLAY AI";
  playHuman.textContent = "PLAY HUMAN";
  axisBtn.textContent = "X AXIS";
  continueBtn.textContent = "Next";
  btnDiv.append(playAi, playHuman);
  alignShipDiv.append(instruction2, axisBtn, continueBtn);
  instruction.textContent = `${playerName}, Choose Your Enemy.`;
  chooseDiv.append(instruction, btnDiv);
  continueBtn.addEventListener("click", () => {
    lengthOfShip = 5;
    counter = 5;
  });
  const changeAxis = () =>
    (axisBtn.textContent =
      axisBtn.textContent === "X AXIS" ? "Y AXIS" : "X AXIS");
  axisBtn.addEventListener("click", changeAxis);
  playAi.addEventListener(
    "click",
    insertBoard.bind(null, alignShipDiv, chooseDiv, _player_vs_computer__WEBPACK_IMPORTED_MODULE_4__.playerShots)
  );
  playHuman.addEventListener(
    "click",
    player2Name.bind(null, chooseDiv, _player__WEBPACK_IMPORTED_MODULE_0__.humanPlayers, alignShipDiv)
  );
  return chooseDiv;
}
function insertBoard(alignShipDiv, chooseDiv, playerShot) {
  const header = document.querySelector("h1");
  const head = document.querySelector("header");
  const { boardContainer } = (0,_dom_gameboard__WEBPACK_IMPORTED_MODULE_1__.createGameboard)();
  header.classList.add("h1");
  head.classList.add("header");
  document.body.insertBefore(alignShipDiv, chooseDiv);
  document.body.replaceChild(boardContainer, chooseDiv);
  addHover(".player1-grid");
  addHover(".player2-grid");
  playerShot();
}
function addHover(className) {
  const playerBoard = document.querySelectorAll(className);
  playerBoard.forEach(placeShipHover);
  function placeShipHover(grid, index) {
    const axis = `${index}`.split("");
    if (axis.length === 1) axis.unshift("0");
    const indexArr = [];
    const removeHoverEffect = (index) => {
      if (playerBoard) playerBoard[+index].classList.remove("grey");
    };
    const emptyIndexArr = () => {
      indexArr.forEach(removeHoverEffect);
      indexArr.splice(0);
      grid.classList.remove("red");
    };
    const setShipLength = () => {
      if (Array.from(grid.classList).includes("grey")) {
        counter--;
        if (counter === 4) lengthOfShip = 4;
        if (counter === 3) lengthOfShip = 3;
        if (counter === 2) lengthOfShip = 3;
        if (counter === 1) lengthOfShip = 2;
        if (counter === 0) lengthOfShip = 0;
      }
    };
    const addToIndexArr = () => {
      const axisBtn = document.querySelector(".axis-btn");
      let index1, index2, index3, index4, index5;
      if (axisBtn && axisBtn.textContent === "X AXIS") {
        index1 = `${axis[0]}${axis[1]}`;
        index2 = `${axis[0]}${+axis[1] + 1}`;
        index3 = `${axis[0]}${+axis[1] + 2}`;
        index4 = `${axis[0]}${+axis[1] + 3}`;
        index5 = `${axis[0]}${+axis[1] + 4}`;
        playerBoard[+index1].classList.add("red");
      }
      if (axisBtn && axisBtn.textContent === "Y AXIS") {
        index1 = `${axis[0]}${axis[1]}`;
        index2 = `${+`${axis[0]}${axis[1]}` + 10}`;
        index3 = `${+`${axis[0]}${axis[1]}` + 20}`;
        index4 = `${+`${axis[0]}${axis[1]}` + 30}`;
        index5 = `${+`${axis[0]}${axis[1]}` + 40}`;
        playerBoard[+index1].classList.add("red");
      }

      if (lengthOfShip === 5) {
        addOnlyValidSpace(index1, indexArr, playerBoard);
        addOnlyValidSpace(index2, indexArr, playerBoard);
        addOnlyValidSpace(index3, indexArr, playerBoard);
        addOnlyValidSpace(index4, indexArr, playerBoard);
        addOnlyValidSpace(index5, indexArr, playerBoard);
      }
      if (index1 && lengthOfShip === 4) {
        addOnlyValidSpace(index1, indexArr, playerBoard);
        addOnlyValidSpace(index2, indexArr, playerBoard);
        addOnlyValidSpace(index3, indexArr, playerBoard);
        addOnlyValidSpace(index4, indexArr, playerBoard);
      }
      if (lengthOfShip === 3) {
        addOnlyValidSpace(index1, indexArr, playerBoard);
        addOnlyValidSpace(index2, indexArr, playerBoard);
        addOnlyValidSpace(index3, indexArr, playerBoard);
      }
      if (lengthOfShip === 2) {
        addOnlyValidSpace(index1, indexArr, playerBoard);
        addOnlyValidSpace(index2, indexArr, playerBoard);
      }
      const addHoverEffect = (index) =>
        playerBoard[+index].classList.add("grey");
      let counter2 = counter;
      if (counter <= 2) counter2 = counter + 1;
      if (indexArr.length === counter2) {
        indexArr.forEach(addHoverEffect);
      }
    };
    grid.addEventListener("click", setShipLength);
    grid.addEventListener("mouseenter", addToIndexArr);
    grid.addEventListener("mouseleave", emptyIndexArr);
  }
}

function addOnlyValidSpace(index, indexArr, playerBoard) {
  if (index && index.length === 2) indexArr.push(index);
  if (
    playerBoard[+index] &&
    Array.from(playerBoard[+index].classList).includes("ship")
  )
    indexArr.pop();
}

function player2Name(chooseDiv, playerShot, alignShipDiv) {
  const { inputDiv, startBtn, nameInput } = (0,_name_input__WEBPACK_IMPORTED_MODULE_3__.createInputElem)(
    "Enter Human Name",
    "Continue"
  );
  document.body.replaceChild(inputDiv, chooseDiv);
  startBtn.addEventListener(
    "click",
    player1Board.bind(null, nameInput, inputDiv, playerShot, alignShipDiv)
  );
}
function player1Board(nameInput, inputDiv, playerShot, alignShipDiv) {
  const input = document.querySelector("input");
  input.classList.add("second-input");
  localStorage.setItem("player2Name", JSON.stringify(`${nameInput.value}`));
  insertBoard(alignShipDiv, inputDiv, playerShot);
}




/***/ }),

/***/ "./src/modules/dom-interactions/dom-gameboard.js":
/*!*******************************************************!*\
  !*** ./src/modules/dom-interactions/dom-gameboard.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGameboard": () => (/* binding */ createGameboard)
/* harmony export */ });
/* harmony import */ var _helper_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-function */ "./src/modules/dom-interactions/helper-function.js");


function createGameboard() {
  const boardContainer = (0,_helper_function__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div", { class: "board-container" });
  const grids = (player, playerGrid) => {
    const square = (0,_helper_function__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div", { class: player });
    for (let i = 0; i < 100; i += 1) {
      const grid = (0,_helper_function__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div", { class: playerGrid });
      square.appendChild(grid);
    }
    return square;
  };
  boardContainer.append(
    grids("player1-board", "player1-grid space"),
    grids("player2-board hide", "player2-grid space"),
  );
  return { boardContainer };
}




/***/ }),

/***/ "./src/modules/dom-interactions/get-player-name.js":
/*!*********************************************************!*\
  !*** ./src/modules/dom-interactions/get-player-name.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getName": () => (/* binding */ getName)
/* harmony export */ });
/* harmony import */ var _choose_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./choose-player */ "./src/modules/dom-interactions/choose-player.js");
/* harmony import */ var _name_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./name-input */ "./src/modules/dom-interactions/name-input.js");



function getName(nameDetails) {
  const { inputDiv, startBtn, nameInput } = (0,_name_input__WEBPACK_IMPORTED_MODULE_1__.createInputElem)(
    nameDetails,
    "START GAME",
  );
  document.body.append(inputDiv);
  getInputValue(startBtn, nameInput);
}

function getInputValue(startBtn, nameInput) {
  const getNameDiv = document.querySelector(".input-div");
  const replaceNameDiv = () => {
    const chooseDiv = (0,_choose_player__WEBPACK_IMPORTED_MODULE_0__.choosePlayer)(nameInput.value);
    document.body.replaceChild(chooseDiv, getNameDiv);
    localStorage.setItem("playerName", JSON.stringify(`${nameInput.value}`));
  };
  startBtn.addEventListener("click", replaceNameDiv);
}




/***/ }),

/***/ "./src/modules/dom-interactions/helper-function.js":
/*!*********************************************************!*\
  !*** ./src/modules/dom-interactions/helper-function.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDomElement": () => (/* binding */ createDomElement)
/* harmony export */ });
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




/***/ }),

/***/ "./src/modules/dom-interactions/name-input.js":
/*!****************************************************!*\
  !*** ./src/modules/dom-interactions/name-input.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createInputElem": () => (/* binding */ createInputElem)
/* harmony export */ });
/* harmony import */ var _helper_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-function */ "./src/modules/dom-interactions/helper-function.js");


function createInputElem(nameDetails, btnName) {
  const inputDiv = (0,_helper_function__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div", { class: "input-div" });
  const label = (0,_helper_function__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("label", { for: "name" });
  const nameInput = (0,_helper_function__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("input", {
    id: "name",
    type: "text",
    placeholder: "Letam",
  });
  const errorMsg = (0,_helper_function__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("span", { class: "error-msg" });
  const startBtn = (0,_helper_function__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("button", { class: "start-btn" });

  label.textContent = nameDetails;
  startBtn.textContent = btnName;
  inputDiv.append(label, nameInput, errorMsg, startBtn);
  return { inputDiv, startBtn, nameInput };
}




/***/ }),

/***/ "./src/modules/dom-interactions/page-footer.js":
/*!*****************************************************!*\
  !*** ./src/modules/dom-interactions/page-footer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFooter": () => (/* binding */ createFooter)
/* harmony export */ });
/* harmony import */ var _helper_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-function */ "./src/modules/dom-interactions/helper-function.js");


function createFooter() {
  const footer = (0,_helper_function__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("footer");
  const anchorLink = (0,_helper_function__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("a", {
    href: "https://github.com/IAmYoungbossy/battleship",
  });
  const gitHubIcon = (0,_helper_function__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("i", { class: "fa fa-github" });
  anchorLink.appendChild(gitHubIcon);
  footer.append("Copyright \u00A9 2022 IAmYoungbossy", "  ", anchorLink);
  document.body.appendChild(footer);
}




/***/ }),

/***/ "./src/modules/dom-interactions/page-get-name.js":
/*!*******************************************************!*\
  !*** ./src/modules/dom-interactions/page-get-name.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "announceWinner": () => (/* binding */ announceWinner),
/* harmony export */   "renderGetNamePage": () => (/* binding */ renderGetNamePage),
/* harmony export */   "restart": () => (/* binding */ restart)
/* harmony export */ });
/* harmony import */ var _page_footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-footer */ "./src/modules/dom-interactions/page-footer.js");
/* harmony import */ var _get_player_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-player-name */ "./src/modules/dom-interactions/get-player-name.js");
/* harmony import */ var _page_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-header */ "./src/modules/dom-interactions/page-header.js");
/* harmony import */ var _helper_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper-function */ "./src/modules/dom-interactions/helper-function.js");





function renderGetNamePage() {
  (0,_page_header__WEBPACK_IMPORTED_MODULE_2__.createHeader)("page-one-header");
  (0,_get_player_name__WEBPACK_IMPORTED_MODULE_1__.getName)("Enter Player's Name:");
  (0,_page_footer__WEBPACK_IMPORTED_MODULE_0__.createFooter)();
}

function announceWinner(playerName) {
  const gameOverDiv = (0,_helper_function__WEBPACK_IMPORTED_MODULE_3__.createDomElement)("div", { class: "game-over-div" });
  const gameOver = (0,_helper_function__WEBPACK_IMPORTED_MODULE_3__.createDomElement)("p", { class: "game-over" });
  const winner = (0,_helper_function__WEBPACK_IMPORTED_MODULE_3__.createDomElement)("p", { class: "winner" });
  const name = (0,_helper_function__WEBPACK_IMPORTED_MODULE_3__.createDomElement)("p", { class: "name" });
  const restartBtn = (0,_helper_function__WEBPACK_IMPORTED_MODULE_3__.createDomElement)("button", { class: "btn-restart" });
  restartBtn.textContent = "RESTART";
  gameOver.textContent = "GAME OVER";
  name.textContent = playerName;
  winner.textContent = "The Winner Is";
  gameOverDiv.append(gameOver, winner, name, restartBtn);
  renderGetNamePage();
  const getNameDiv = document.querySelector(".input-div");
  document.body.replaceChild(gameOverDiv, getNameDiv);
}

function restart() {
  const restart = document.createElement("button");
  const alignDiv = document.querySelector(".align-ships");
  const alignBtn = document.querySelector(".continue-btn");
  const axisBtn = document.querySelector(".axis-btn");
  alignDiv.replaceChild(restart, alignBtn);
  restart.textContent = "Restart";
  if (axisBtn) axisBtn.remove();
  restart.addEventListener("click", rerenderGetNamePage);
}

function rerenderGetNamePage() {
  while (document.body.firstChild)
    document.body.removeChild(document.body.firstChild);
  renderGetNamePage();
}




/***/ }),

/***/ "./src/modules/dom-interactions/page-header.js":
/*!*****************************************************!*\
  !*** ./src/modules/dom-interactions/page-header.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _helper_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-function */ "./src/modules/dom-interactions/helper-function.js");


function createHeader(className) {
  const gameTitle = (0,_helper_function__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("h1", { class: className });
  const header = (0,_helper_function__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("header");
  const { body } = document;
  gameTitle.textContent = "BATTLESHIP";
  header.append(gameTitle);
  body.append(header);
}




/***/ }),

/***/ "./src/modules/dom-interactions/place-ship-random.js":
/*!***********************************************************!*\
  !*** ./src/modules/dom-interactions/place-ship-random.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showShipsRandomly": () => (/* binding */ showShipsRandomly)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _placeShipsOnBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../placeShipsOnBoard */ "./src/modules/placeShipsOnBoard.js");



function showShipsRandomly() {
  const {
    positionShip, receiveAttack, allShipsSunk, Arr,
  } = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)(_placeShipsOnBoard__WEBPACK_IMPORTED_MODULE_1__.placeComputerShips);
  positionShip();
  return { receiveAttack, allShipsSunk, Arr };
}




/***/ }),

/***/ "./src/modules/dom-interactions/place-ship.js":
/*!****************************************************!*\
  !*** ./src/modules/dom-interactions/place-ship.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showShipsOnBoard": () => (/* binding */ showShipsOnBoard)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _placeShipsOnBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../placeShipsOnBoard */ "./src/modules/placeShipsOnBoard.js");
/* harmony import */ var _page_get_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-get-name */ "./src/modules/dom-interactions/page-get-name.js");
/* eslint-disable no-use-before-define */




/** Gets ships coordinates from Gameboard and display in DOM */
function showShipsOnBoard(className) {
  const align = document.querySelector(".axis-btn");
  const squares = document.querySelectorAll(`.${className}`);
  const instruction2 = document.querySelector(".instruction2");
  const { board, positionShip, alignShip, receiveAttack, allShipsSunk, Arr } =
    (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)(_placeShipsOnBoard__WEBPACK_IMPORTED_MODULE_1__.placePlayerShips);

  if (this.classList && this.classList[0] === "player1-grid") {
    const playerName = JSON.parse(localStorage.getItem("playerName"));
    instruction2.textContent = `${playerName}, Place Your Ships.`;
  }

  const addListener = (square, index) => {
    square.addEventListener(
      "click",
      addBgColor.bind(
        this,
        index,
        positionShip,
        board,
        squares,
        Arr,
        instruction2
      )
    );
  };
  align.addEventListener("click", alignShip);
  squares.forEach(addListener.bind(this));
  return [receiveAttack, Arr, allShipsSunk];
}

/** Adds background colour for missed shots */
function addBgColor(index, positionShip, board, squares, Arr, instruction2) {
  const player1 = document.querySelector(".player1-board");
  const player2 = document.querySelector(".player2-board");
  positionShip(index);
  board.flat().forEach((item, index2) => {
    if (item === 2 || item === 3 || item === 4 || item === 5 || item === 6)
      squares[index2].classList.add("ship");
    if (item === 2) squares[index2].classList.add("ship2");
    if (item === 3) squares[index2].classList.add("ship3");
    if (item === 6) squares[index2].classList.add("ship6");
    if (item === 4) squares[index2].classList.add("ship4");
    if (item === 5) squares[index2].classList.add("ship5");
  });

  if (player1.classList[1] === "hide" || player2.classList[1] === "hide") {
    if (Arr.length === 5 && this === document) showEnemyWater();
    else if (Arr.length === 5) {
      if (this.classList[0] === "player2-grid")
        instruction2.textContent = "CLICK ON NEXT TO START PLAYING";
      if (this.classList[0] === "player1-grid")
        instruction2.textContent = "CLICK ON NEXT TO CONTINUE";
      showEnemy.call(this);
    }
  }

  if (Array.from(player1.classList).includes("hide")) return;
  if (Array.from(player2.classList).includes("hide")) return;
  if (Arr.length === 5 && this !== document) {
    board.flat().forEach((item, index2) => {
      if (item === 2 || item === 3 || item === 4 || item === 5 || item === 6)
        squares[index2].classList.remove("ship");
    });
  }
}

function showEnemy() {
  const playerName = JSON.parse(localStorage.getItem("player2Name"));
  const instruction2 = document.querySelector(".instruction2");
  const player2 = document.querySelector(".player2-board");
  const player1 = document.querySelector(".player1-board");
  const grid = document.querySelectorAll(".player1-grid");
  const { startBtn, continueBtn } = createPlayBtn();
  continueBtn.classList.remove("hide");
  startBtn.classList.add("hide");

  const showShips = () => {
    instruction2.textContent = `${playerName}, Place Your Ships.`;
    player2.classList.remove("hide");
    player1.classList.add("hide");
    continueBtn.classList.add("hide");
    startBtn.classList.remove("hide");

    grid.forEach((sqr) => {
      if (Array.from(sqr.classList).includes("ship"))
        sqr.classList.remove("ship");
    });
  };

  const showShips2 = () => {
    const grid = document.querySelectorAll(".player2-grid");
    grid.forEach((sqr) => {
      if (Array.from(sqr.classList).includes("ship"))
        sqr.classList.remove("ship");
    });
    instruction2.textContent = `${playerName}, take a shot.`;
    player1.classList.remove("hide");
    (0,_page_get_name__WEBPACK_IMPORTED_MODULE_2__.restart)();
  };

  if (this.classList[0] === "player1-grid")
    continueBtn.addEventListener("click", showShips);
  if (this.classList[0] === "player2-grid")
    continueBtn.addEventListener("click", showShips2);
}

function showEnemyWater() {
  const player = document.querySelector(".player2-board");
  const { startBtn, instruction } = createPlayBtn();
  instruction.textContent = "CLICK PLAY TO START PLAYING";
  startBtn.textContent = "Play";
  const showShips = () => {
    const playerName = JSON.parse(localStorage.getItem("playerName"));
    player.classList.remove("hide");
    instruction.textContent = `Waiting for ${playerName}'s shot`;
    (0,_page_get_name__WEBPACK_IMPORTED_MODULE_2__.restart)();
  };
  startBtn.addEventListener("click", showShips);
}

function createPlayBtn() {
  const shipAxis = document.querySelector(".align-ships");
  const continueBtn = document.querySelector(".continue-btn");
  const instruction = shipAxis.children[0];
  const startBtn = shipAxis.children[1];
  return { startBtn, instruction, continueBtn };
}




/***/ }),

/***/ "./src/modules/dom-interactions/player-vs-computer.js":
/*!************************************************************!*\
  !*** ./src/modules/dom-interactions/player-vs-computer.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playerShots": () => (/* binding */ playerShots),
/* harmony export */   "stopHere": () => (/* binding */ stopHere),
/* harmony export */   "validShots": () => (/* binding */ validShots)
/* harmony export */ });
/* harmony import */ var _page_get_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-get-name */ "./src/modules/dom-interactions/page-get-name.js");
/* harmony import */ var _place_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./place-ship */ "./src/modules/dom-interactions/place-ship.js");
/* harmony import */ var _place_ship_random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./place-ship-random */ "./src/modules/dom-interactions/place-ship-random.js");




let hit,
  index2,
  time = 0,
  isSunkShipArray,
  visitedIndex = null,
  possibleValidShots = [],
  stopHere = 0,
  firstHit;

/** Checks for valid shots on ships */
function shots(showShips, className) {
  const playerBoard = document.querySelectorAll(`.${className}`);
  const { receiveAttack, allShipsSunk } = showShips();
  const [receiveAttack2, , allShipsSunk2] = _place_ship__WEBPACK_IMPORTED_MODULE_1__.showShipsOnBoard.call(
    document,
    "player1-grid"
  );
  const addListenerToGrid = (grid, index) =>
    grid.addEventListener(
      "click",
      alternateShots.bind(
        null,
        grid,
        index,
        receiveAttack,
        receiveAttack2,
        playerBoard,
        allShipsSunk,
        allShipsSunk2
      )
    );
  playerBoard.forEach(addListenerToGrid);
}

/** Alternate shots between computer and player */
function alternateShots(
  grid,
  index,
  receiveAttack,
  receiveAttack2,
  playerBoard,
  allShipsSunk,
  allShipsSunk2
) {
  const instruction = document.querySelector(".align-ships").children[0];
  if (Array.from(grid.classList).includes("shots")) return;
  if (stopHere === 1) return;
  if (time === 1) return;
  time = 1;
  const playerName = JSON.parse(localStorage.getItem("playerName"));
  const { grid2, index2, playerBoard2 } = computerShots();
  instruction.textContent = "Waiting for Computer's Shot.";
  validShots(
    grid,
    index,
    receiveAttack,
    playerBoard,
    allShipsSunk,
    instruction,
    playerName
  );

  setTimeout(() => {
    time = 0;
    const playerName = JSON.parse(localStorage.getItem("playerName"));
    const AIName = "Computer";
    if (stopHere === 1) return;
    instruction.textContent = `Waiting for ${playerName}'s Shot.`;
    const { hitCoord } = validShots(
      grid2,
      index2,
      receiveAttack2,
      playerBoard2,
      allShipsSunk2,
      instruction,
      AIName
    );
    hit = hitCoord;
  }, 1500);
}

/** Colours valid shots red */
function validShots(
  grid,
  index,
  receiveAttack,
  playerBoard,
  allShipsSunk,
  instruction,
  playerName
) {
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

  if (grid) grid.classList.add("shots");
  if (hitCoord) grid.classList.add("valid-shot");

  isSunkShip(ship5Sunk, ship5Coord, playerBoard);
  isSunkShip(ship4Sunk, ship4Coord, playerBoard);
  isSunkShip(ship3Sunk, ship3Coord, playerBoard);
  isSunkShip(ship2Sunk, ship2Coord, playerBoard);
  isSunkShip(ship1Sunk, ship1Coord, playerBoard);

  if (allShipsSunk()) {
    instruction.textContent = "game over.";
    stopHere = 1;
    setTimeout(() => {
      while (document.body.firstChild)
        document.body.removeChild(document.body.firstChild);
      (0,_page_get_name__WEBPACK_IMPORTED_MODULE_0__.announceWinner)(playerName);
    }, 2000);
  }

  isSunkShipArray = [ship5Sunk, ship4Sunk, ship3Sunk, ship2Sunk, ship1Sunk];

  return { hitCoord };
}

/** Adds blue background colour when a ship is completely sunk */
function isSunkShip(shipSunk, shipCoord, playerBoard) {
  const addBlueBg = (item) =>
    playerBoard.forEach((square, index) => {
      if (+item.join("") === index) square.classList.add("sunk-ship");
    });
  if (shipSunk === true) shipCoord.forEach(addBlueBg);
}
function computerShots() {
  const arrIndex = [];
  const playerBoard2 = document.querySelectorAll(".player1-grid");
  const push = (square, index) => {
    if (square.classList[1] === "space") arrIndex.push(index);
  };
  playerBoard2.forEach(push);
  const ranNum = Math.floor(Math.random() * (arrIndex.length - 1));
  index2 = arrIndex[ranNum];
  findValidShots(arrIndex, ranNum, playerBoard2);
  const grid2 = playerBoard2[index2];
  if (grid2) grid2.classList.remove("space");
  return { grid2, index2, playerBoard2 };
}

function findValidShots(arrIndex, ranNum, playerBoard2) {
  if (hit && visitedIndex >= 1) {
    visitedIndex = visitedIndex - 1;
    removeFromArray(0, +possibleValidShots[0] - 1);
    removeFromArray(1, +possibleValidShots[1] + 1);
    removeFromArray(2, +possibleValidShots[2] + 10);
    removeFromArray(3, +possibleValidShots[3] - 10);
    increaseVisitedIndex(playerBoard2);
    visitedIndex++;
  }
  if (hit && visitedIndex === null) {
    firstHit = +hit[0];
    const splitHit = hit[0].split("");
    possibleValidShots = [
      splitHit[0] + (+splitHit[1] - 1),
      splitHit[0] + (+splitHit[1] + 1),
      +splitHit[0] + 1 + splitHit[1],
      +splitHit[0] - 1 + splitHit[1],
    ];
    visitedIndex = 0;
    index2 = possibleValidShots[visitedIndex];
    increaseVisitedIndex(playerBoard2);
    increaseVisitedIndex(playerBoard2);
    increaseVisitedIndex(playerBoard2);
    visitedIndex++;
  }
  if (hit === undefined && visitedIndex >= 1 && visitedIndex < 4) {
    index2 = possibleValidShots[visitedIndex];
    increaseVisitedIndex(playerBoard2);
    increaseVisitedIndex(playerBoard2);
    visitedIndex++;
  }
  if (isSunkShipArray && isSunkShipArray.includes(true)) {
    possibleValidShots.splice(0);
    index2 = arrIndex[ranNum];
    visitedIndex = null;
    firstHit = null;
  }
}
function removeFromArray(index, expression) {
  if (visitedIndex === index) {
    index2 = expression;
    possibleValidShots.splice(visitedIndex, 1, index2);
  }
}
function increaseVisitedIndex(playerBoard2) {
  if (
    +index2 < 0 ||
    +index2 > 99 ||
    isNaN(+index2) ||
    index2 === "010" ||
    Array.from(playerBoard2[+index2].classList).includes("shots")
  ) {
    visitedIndex++;
  }
  index2 = +possibleValidShots[visitedIndex];
  if (
    firstHit &&
    playerBoard2[+index2] &&
    Array.from(playerBoard2[+index2].classList).includes("ship") &&
    playerBoard2[+index2].classList[3] !== playerBoard2[firstHit].classList[2]
  ) {
    visitedIndex++;
  }
  index2 = +possibleValidShots[visitedIndex];
}

const playerShots = shots.bind(null, _place_ship_random__WEBPACK_IMPORTED_MODULE_2__.showShipsRandomly, "player2-grid");



/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _2d_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./2d-array */ "./src/modules/2d-array.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");



function Gameboard(placePlayerShips) {
  const Arr = [];
  let align = "X";
  const shipArr = [];
  const board = (0,_2d_array__WEBPACK_IMPORTED_MODULE_0__.create2DArray)(10);
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
          const shi5 = (0,_ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(shipFive.XY, shipFive.shipLenght, shipFive.align);
          ship5Sunk = shi5.isSunk(ship, hitCoord);
          ship5Coord = shi5.shipCoord;
          const shi4 = (0,_ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(shipFour.XY, shipFour.shipLenght, shipFour.align);
          ship4Sunk = shi4.isSunk(ship, hitCoord);
          ship4Coord = shi4.shipCoord;
          const shi3 = (0,_ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(
            shipThree.XY,
            shipThree.shipLenght,
            shipThree.align,
          );
          ship3Sunk = shi3.isSunk(ship, hitCoord);
          ship3Coord = shi3.shipCoord;
          const shi2 = (0,_ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(shipTwo.XY, shipTwo.shipLenght, shipTwo.align);
          ship2Sunk = shi2.isSunk(ship, hitCoord);
          ship2Coord = shi2.shipCoord;
          const shi1 = (0,_ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(shipOne.XY, shipOne.shipLenght, shipOne.align);
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




/***/ }),

/***/ "./src/modules/getShipCoordinates.js":
/*!*******************************************!*\
  !*** ./src/modules/getShipCoordinates.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getShipCoordinates": () => (/* binding */ getShipCoordinates)
/* harmony export */ });
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




/***/ }),

/***/ "./src/modules/placeShipsOnBoard.js":
/*!******************************************!*\
  !*** ./src/modules/placeShipsOnBoard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "placeComputerShips": () => (/* binding */ placeComputerShips),
/* harmony export */   "placePlayerShips": () => (/* binding */ placePlayerShips)
/* harmony export */ });
/* harmony import */ var _shp_axis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shp-axis */ "./src/modules/shp-axis.js");
/* eslint-disable no-return-assign */


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
  const shipCoord = (0,_shp_axis__WEBPACK_IMPORTED_MODULE_0__.shipAxis)(shipLenght, +axis[0], +axis[1], shipLenght, align, board);
  if (shipCoord.length !== 0) {
    Arr.push(shipCoord);
    shipArr.push({ XY: [+axis[0], +axis[1]], align, shipLenght });
  }
}




/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "humanPlayers": () => (/* binding */ humanPlayers)
/* harmony export */ });
/* harmony import */ var _dom_interactions_place_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-interactions/place-ship */ "./src/modules/dom-interactions/place-ship.js");
/* harmony import */ var _dom_interactions_player_vs_computer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-interactions/player-vs-computer */ "./src/modules/dom-interactions/player-vs-computer.js");



let count = 0;
let count2 = 0;
let time = 1;

/** Checks for valid shots on ships */
function player(className, className2) {
  const playerBoard = document.querySelectorAll(`.${className}`);
  const pla = document.querySelectorAll(`.${className2}`);
  const [receiveAttack, Arr, allShipsSunk] = _dom_interactions_place_ship__WEBPACK_IMPORTED_MODULE_0__.showShipsOnBoard.call(
    pla[0],
    className2
  );
  const addListenerToGrid = (grid, index) =>
    grid.addEventListener(
      "click",
      shots.bind(
        null,
        Arr,
        grid,
        index,
        receiveAttack,
        playerBoard,
        allShipsSunk
      )
    );
  playerBoard.forEach(addListenerToGrid);
}

/** Shots by player */
function shots(Arr, grid, index, receiveAttack, playerBoard, allShipsSunk) {
  const player1 = document.querySelector(".player1-board");
  const player2 = document.querySelector(".player2-board");
  const playerName1 = JSON.parse(localStorage.getItem("playerName"));
  const playerName2 = JSON.parse(localStorage.getItem("player2Name"));
  const instruction2 = document.querySelector(".instruction2");

  if (Array.from(grid.classList).includes("shots")) return;
  if (grid.classList[0] === "player1-grid" && Arr.length >= 5) {
    if (count >= 1 && time === 0) {
      if (Array.from(player1.classList).includes("hide")) return;
      if (Array.from(player2.classList).includes("hide")) return;
      if (_dom_interactions_player_vs_computer__WEBPACK_IMPORTED_MODULE_1__.stopHere === 1) return;
      instruction2.textContent = `${playerName1}, take your shot.`;
      (0,_dom_interactions_player_vs_computer__WEBPACK_IMPORTED_MODULE_1__.validShots)(grid, index, receiveAttack, playerBoard, allShipsSunk, instruction2, playerName2);
    }
    time = 1;
    count += 1;
  }
  if (grid.classList[0] === "player2-grid" && Arr.length >= 5) {
    if (count2 >= 1 && time === 1) {
      if (Array.from(player1.classList).includes("hide")) return;
      if (Array.from(player2.classList).includes("hide")) return;
      instruction2.textContent = `${playerName2}, take your shot.`;
      (0,_dom_interactions_player_vs_computer__WEBPACK_IMPORTED_MODULE_1__.validShots)(grid, index, receiveAttack, playerBoard, allShipsSunk, instruction2, playerName1);
    }
    time = 0;
    count2 += 1;
  }
}

function humanPlayers() {
  player("player1-grid", "player1-grid");
  player("player2-grid", "player2-grid");
}




/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
/* harmony import */ var _getShipCoordinates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getShipCoordinates */ "./src/modules/getShipCoordinates.js");
/* eslint-disable no-restricted-syntax */


function Ship(array, length, align) {
  const shipCoord = (0,_getShipCoordinates__WEBPACK_IMPORTED_MODULE_0__.getShipCoordinates)(array, length, align);
  if (!Array.isArray(shipCoord) && !shipCoord.length > 0) return false;
  const isSunk = (coord, hitCoord) => {
    for (const XY of shipCoord) {
      if (hitCoord.join("") === XY.join("")) if (coord.length <= 0) return true;
    }
    return coord.length;
  };
  return { shipCoord, isSunk };
}




/***/ }),

/***/ "./src/modules/shp-axis.js":
/*!*********************************!*\
  !*** ./src/modules/shp-axis.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shipAxis": () => (/* binding */ shipAxis)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");
/* harmony import */ var _valid_move__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./valid-move */ "./src/modules/valid-move.js");
/* eslint-disable no-plusplus */



function shipAxis(num, x, y, length, align, board, receiveAttack) {
  const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)([x, y], length, align, receiveAttack).shipCoord;
  const shipCoords = (0,_valid_move__WEBPACK_IMPORTED_MODULE_1__.checkValidMove)(num, ship, board);
  const arrayCoord = [];

  arrayCoord.push(shipCoords);
  arrayCoord.forEach((coord, index) => {
    if (!coord) arrayCoord.splice(index, 1);
  });

  return arrayCoord;
}




/***/ }),

/***/ "./src/modules/valid-move.js":
/*!***********************************!*\
  !*** ./src/modules/valid-move.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkValidMove": () => (/* binding */ checkValidMove)
/* harmony export */ });
/* eslint-disable consistent-return */
let counter = 0;
function checkValidMove(num, ship, boardArray) {
  let numCopy = num;
  const domBoardArrray = [];
  if (!ship) return false;
  for (let i = ship.length - 1; i >= 0; i -= 1) {
    if (
      +ship[i][0] > 9 ||
      +ship[i][1] > 9 ||
      boardArray[+ship[i][0]][+ship[i][1]] !== 0
    ) {
      return;
    }
  }
  if (num == 3) counter++;
  if (counter === 2) numCopy = 6;
  
  for (let i = 0; i < ship.length; i += 1) {
    if (
      boardArray[+ship[i][0]][+ship[i][1]] === 2 ||
      boardArray[+ship[i][0]][+ship[i][1]] === 3 ||
      boardArray[+ship[i][0]][+ship[i][1]] === 4 ||
      boardArray[+ship[i][0]][+ship[i][1]] === 5
    )
      return;
  }
  for (let i = 0; i < ship.length; i += 1) {
    boardArray[+ship[i][0]][+ship[i][1]] = numCopy;
    domBoardArrray.push(`${ship[i][0]}${ship[i][1]}`);
  }

  if (counter === 2) counter = 0;

  return domBoardArrray;
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_dom_interactions_page_get_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom-interactions/page-get-name */ "./src/modules/dom-interactions/page-get-name.js");
/* harmony import */ var _modules_style_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/style/style.css */ "./src/modules/style/style.css");



(0,_modules_dom_interactions_page_get_name__WEBPACK_IMPORTED_MODULE_0__.renderGetNamePage)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3N0eWxlL3N0eWxlLmNzcz83NGQwIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzLzJkLWFycmF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20taW50ZXJhY3Rpb25zL2Nob29zZS1wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS1pbnRlcmFjdGlvbnMvZG9tLWdhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLWludGVyYWN0aW9ucy9nZXQtcGxheWVyLW5hbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS1pbnRlcmFjdGlvbnMvaGVscGVyLWZ1bmN0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20taW50ZXJhY3Rpb25zL25hbWUtaW5wdXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS1pbnRlcmFjdGlvbnMvcGFnZS1mb290ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS1pbnRlcmFjdGlvbnMvcGFnZS1nZXQtbmFtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLWludGVyYWN0aW9ucy9wYWdlLWhlYWRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLWludGVyYWN0aW9ucy9wbGFjZS1zaGlwLXJhbmRvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLWludGVyYWN0aW9ucy9wbGFjZS1zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20taW50ZXJhY3Rpb25zL3BsYXllci12cy1jb21wdXRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nZXRTaGlwQ29vcmRpbmF0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYWNlU2hpcHNPbkJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NocC1heGlzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy92YWxpZC1tb3ZlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXFxuICAgIGNpcmNsZSBhdCAxMDAlLFxcbiAgICAjMzQxNDA2ZTgsXFxuICAgICMzMzMgNTAlLFxcbiAgICAjMGYxMDE3IDc1JSxcXG4gICAgIzEyMyA3NSVcXG4gICk7XFxufVxcblxcbmhlYWRlciB7XFxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBib3JkZXI6IDBjaDtcXG59XFxuXFxuaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA4cmVtO1xcbiAgY29sb3I6ICM3MTVmMzY7XFxuICB0ZXh0LXNoYWRvdzogM3B4IC03cHggNXB4IGJsYWNrO1xcbn1cXG5cXG4uaDEge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4uaW5zdHJ1Y3Rpb24yIHtcXG4gIGNvbG9yOiBhcXVhO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLmlucHV0LWRpdixcXG4uZ2FtZS1vdmVyLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5cXG4uZ2FtZS1vdmVyLWRpdiB7XFxuICBtYXJnaW4tdG9wOiA2NXB4O1xcbn1cXG5cXG4uYWxpZ24tc2hpcHMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcbiAgY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcblxcbmlucHV0IHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uc2Vjb25kLWlucHV0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnN0YXJ0LWJ0biB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uY2hvb3NlLWRpdiB7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG59XFxuXFxuLmNob29zZS1kaXYgPiBwIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcblxcbi5idG4tZGl2IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5wbGF5LWh1bWFuIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4ucGxheS1haSxcXG4ucGxheS1odW1hbixcXG4uYnRuLXJlc3RhcnQge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgcGFkZGluZzogMTVweCAwO1xcbn1cXG5cXG4uYnRuLXJlc3RhcnQge1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uZ2FtZS1vdmVyIHtcXG4gIGZvbnQtc2l6ZTogeHh4LWxhcmdlO1xcbiAgY29sb3I6ICNjM2NiZWI7XFxuICB0ZXh0LXNoYWRvdzogM3B4IC03cHggNXB4IGJsYWNrO1xcbn1cXG5cXG4ud2lubmVyLFxcbi5uYW1lIHtcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICBjb2xvcjogY2FkZXRibHVlO1xcbiAgbWFyZ2luLXRvcDogLTE1cHg7XFxuICB0ZXh0LXNoYWRvdzogMHB4IC01cHggNXB4O1xcbn1cXG5cXG4uZ2FtZS1vdmVyLWRpdiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ucGxheWVyMS1ib2FyZCxcXG4ucGxheWVyMi1ib2FyZCB7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJyaWdodG5lc3MoMC43KTtcXG4gIHBhZGRpbmc6IDFweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdhcDogMXB4O1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgaGVpZ2h0OiA0NTBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMmYyZjI7XFxufVxcblxcbi5wbGF5ZXIxLWdyaWQsXFxuLnBsYXllcjItZ3JpZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZjhmOGY4O1xcbn1cXG5cXG4ucGxheWVyMS1ncmlkOmhvdmVyLFxcbi5wbGF5ZXIyLWdyaWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTgzLCAxODMpO1xcbn1cXG5cXG4ucmVkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmdyZXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTgzLCAxODMpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5oaWRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnNob3cge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZmZmZjcwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zaG90cyB7XFxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcXG59XFxuXFxuLnZhbGlkLXNob3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zdW5rLXNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJhN2E3O1xcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tb2R1bGVzL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQjs7Ozs7O0dBTUM7QUFDSDs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsK0JBQStCO0FBQ2pDOztBQUVBOztFQUVFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsU0FBUztBQUNYOztBQUVBOztFQUVFLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxRQUFRO0VBQ1IsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsNkJBQTZCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgY2lyY2xlIGF0IDEwMCUsXFxuICAgICMzNDE0MDZlOCxcXG4gICAgIzMzMyA1MCUsXFxuICAgICMwZjEwMTcgNzUlLFxcbiAgICAjMTIzIDc1JVxcbiAgKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJvcmRlcjogMGNoO1xcbn1cXG5cXG5oMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDhyZW07XFxuICBjb2xvcjogIzcxNWYzNjtcXG4gIHRleHQtc2hhZG93OiAzcHggLTdweCA1cHggYmxhY2s7XFxufVxcblxcbi5oMSB7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbi5pbnN0cnVjdGlvbjIge1xcbiAgY29sb3I6IGFxdWE7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4uaW5wdXQtZGl2LFxcbi5nYW1lLW92ZXItZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcbi5nYW1lLW92ZXItZGl2IHtcXG4gIG1hcmdpbi10b3A6IDY1cHg7XFxufVxcblxcbi5hbGlnbi1zaGlwcyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICBjb2xvcjogYXF1YW1hcmluZTtcXG59XFxuXFxuaW5wdXQge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5zZWNvbmQtaW5wdXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc3RhcnQtYnRuIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jaG9vc2UtZGl2IHtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5cXG4uY2hvb3NlLWRpdiA+IHAge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBjb2xvcjogYXF1YW1hcmluZTtcXG59XFxuXFxuLmJ0bi1kaXYge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLnBsYXktaHVtYW4ge1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5wbGF5LWFpLFxcbi5wbGF5LWh1bWFuLFxcbi5idG4tcmVzdGFydCB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxufVxcblxcbi5idG4tcmVzdGFydCB7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5nYW1lLW92ZXIge1xcbiAgZm9udC1zaXplOiB4eHgtbGFyZ2U7XFxuICBjb2xvcjogI2MzY2JlYjtcXG4gIHRleHQtc2hhZG93OiAzcHggLTdweCA1cHggYmxhY2s7XFxufVxcblxcbi53aW5uZXIsXFxuLm5hbWUge1xcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG4gIGNvbG9yOiBjYWRldGJsdWU7XFxuICBtYXJnaW4tdG9wOiAtMTVweDtcXG4gIHRleHQtc2hhZG93OiAwcHggLTVweCA1cHg7XFxufVxcblxcbi5nYW1lLW92ZXItZGl2IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5wbGF5ZXIxLWJvYXJkLFxcbi5wbGF5ZXIyLWJvYXJkIHtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcygwLjcpO1xcbiAgcGFkZGluZzogMXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ2FwOiAxcHg7XFxuICB3aWR0aDogNDUwcHg7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2YyZjJmMjtcXG59XFxuXFxuLnBsYXllcjEtZ3JpZCxcXG4ucGxheWVyMi1ncmlkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmOGY4Zjg7XFxufVxcblxcbi5wbGF5ZXIxLWdyaWQ6aG92ZXIsXFxuLnBsYXllcjItZ3JpZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxODMsIDE4Myk7XFxufVxcblxcbi5yZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uZ3JleSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxODMsIDE4MykgIWltcG9ydGFudDtcXG59XFxuXFxuLmhpZGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uc2hvdyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmZmZmNzAgIWltcG9ydGFudDtcXG59XFxuXFxuLnNob3RzIHtcXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4udmFsaWQtc2hvdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcXG59XFxuXFxuLnN1bmstc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XFxufVxcblxcbmZvb3RlciB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmE3YTc7XFxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjcmVhdGUyREFycmF5KG51bSkge1xuICBjb25zdCBib2FyZCA9IG5ldyBBcnJheShudW0pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBib2FyZFtpXSA9IG5ldyBBcnJheShudW0pO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmRbaV0ubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIGJvYXJkW2ldW2pdID0gMDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYm9hcmQ7XG59XG5cbmV4cG9ydCB7Y3JlYXRlMkRBcnJheX07XG4iLCJpbXBvcnQgeyBodW1hblBsYXllcnMgfSBmcm9tIFwiLi4vcGxheWVyXCI7XG5pbXBvcnQgeyBjcmVhdGVHYW1lYm9hcmQgfSBmcm9tIFwiLi9kb20tZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBjcmVhdGVEb21FbGVtZW50IH0gZnJvbSBcIi4vaGVscGVyLWZ1bmN0aW9uXCI7XG5pbXBvcnQgeyBjcmVhdGVJbnB1dEVsZW0gfSBmcm9tIFwiLi9uYW1lLWlucHV0XCI7XG5pbXBvcnQgeyBwbGF5ZXJTaG90cyB9IGZyb20gXCIuL3BsYXllci12cy1jb21wdXRlclwiO1xuXG5sZXQgbGVuZ3RoT2ZTaGlwID0gNTtcbmxldCBjb3VudGVyID0gNTtcblxuZnVuY3Rpb24gY2hvb3NlUGxheWVyKHBsYXllck5hbWUpIHtcbiAgY29uc3QgY2hvb3NlRGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImNob29zZS1kaXZcIiB9KTtcbiAgY29uc3QgYnRuRGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImJ0bi1kaXZcIiB9KTtcbiAgY29uc3QgcGxheUFpID0gY3JlYXRlRG9tRWxlbWVudChcImJ1dHRvblwiLCB7IGNsYXNzOiBcInBsYXktYWlcIiB9KTtcbiAgY29uc3QgcGxheUh1bWFuID0gY3JlYXRlRG9tRWxlbWVudChcImJ1dHRvblwiLCB7IGNsYXNzOiBcInBsYXktaHVtYW5cIiB9KTtcbiAgY29uc3QgaW5zdHJ1Y3Rpb24gPSBjcmVhdGVEb21FbGVtZW50KFwicFwiKTtcbiAgY29uc3QgYWxpZ25TaGlwRGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImFsaWduLXNoaXBzXCIgfSk7XG4gIGNvbnN0IGluc3RydWN0aW9uMiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwiaW5zdHJ1Y3Rpb24yXCIgfSk7XG4gIGNvbnN0IGF4aXNCdG4gPSBjcmVhdGVEb21FbGVtZW50KFwiYnV0dG9uXCIsIHsgY2xhc3M6IFwiYXhpcy1idG5cIiB9KTtcbiAgY29uc3QgY29udGludWVCdG4gPSBjcmVhdGVEb21FbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICBjbGFzczogXCJjb250aW51ZS1idG4gaGlkZVwiLFxuICB9KTtcbiAgY29uc3QgcGxheU5hbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGxheWVyTmFtZVwiKSk7XG4gIGluc3RydWN0aW9uMi50ZXh0Q29udGVudCA9IGAke3BsYXlOYW1lfSwgUGxhY2UgWW91ciBTaGlwcy5gO1xuICBwbGF5QWkudGV4dENvbnRlbnQgPSBcIlBMQVkgQUlcIjtcbiAgcGxheUh1bWFuLnRleHRDb250ZW50ID0gXCJQTEFZIEhVTUFOXCI7XG4gIGF4aXNCdG4udGV4dENvbnRlbnQgPSBcIlggQVhJU1wiO1xuICBjb250aW51ZUJ0bi50ZXh0Q29udGVudCA9IFwiTmV4dFwiO1xuICBidG5EaXYuYXBwZW5kKHBsYXlBaSwgcGxheUh1bWFuKTtcbiAgYWxpZ25TaGlwRGl2LmFwcGVuZChpbnN0cnVjdGlvbjIsIGF4aXNCdG4sIGNvbnRpbnVlQnRuKTtcbiAgaW5zdHJ1Y3Rpb24udGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJOYW1lfSwgQ2hvb3NlIFlvdXIgRW5lbXkuYDtcbiAgY2hvb3NlRGl2LmFwcGVuZChpbnN0cnVjdGlvbiwgYnRuRGl2KTtcbiAgY29udGludWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZW5ndGhPZlNoaXAgPSA1O1xuICAgIGNvdW50ZXIgPSA1O1xuICB9KTtcbiAgY29uc3QgY2hhbmdlQXhpcyA9ICgpID0+XG4gICAgKGF4aXNCdG4udGV4dENvbnRlbnQgPVxuICAgICAgYXhpc0J0bi50ZXh0Q29udGVudCA9PT0gXCJYIEFYSVNcIiA/IFwiWSBBWElTXCIgOiBcIlggQVhJU1wiKTtcbiAgYXhpc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlQXhpcyk7XG4gIHBsYXlBaS5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwiY2xpY2tcIixcbiAgICBpbnNlcnRCb2FyZC5iaW5kKG51bGwsIGFsaWduU2hpcERpdiwgY2hvb3NlRGl2LCBwbGF5ZXJTaG90cylcbiAgKTtcbiAgcGxheUh1bWFuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJjbGlja1wiLFxuICAgIHBsYXllcjJOYW1lLmJpbmQobnVsbCwgY2hvb3NlRGl2LCBodW1hblBsYXllcnMsIGFsaWduU2hpcERpdilcbiAgKTtcbiAgcmV0dXJuIGNob29zZURpdjtcbn1cbmZ1bmN0aW9uIGluc2VydEJvYXJkKGFsaWduU2hpcERpdiwgY2hvb3NlRGl2LCBwbGF5ZXJTaG90KSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKTtcbiAgY29uc3QgaGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG4gIGNvbnN0IHsgYm9hcmRDb250YWluZXIgfSA9IGNyZWF0ZUdhbWVib2FyZCgpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImgxXCIpO1xuICBoZWFkLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGFsaWduU2hpcERpdiwgY2hvb3NlRGl2KTtcbiAgZG9jdW1lbnQuYm9keS5yZXBsYWNlQ2hpbGQoYm9hcmRDb250YWluZXIsIGNob29zZURpdik7XG4gIGFkZEhvdmVyKFwiLnBsYXllcjEtZ3JpZFwiKTtcbiAgYWRkSG92ZXIoXCIucGxheWVyMi1ncmlkXCIpO1xuICBwbGF5ZXJTaG90KCk7XG59XG5mdW5jdGlvbiBhZGRIb3ZlcihjbGFzc05hbWUpIHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNsYXNzTmFtZSk7XG4gIHBsYXllckJvYXJkLmZvckVhY2gocGxhY2VTaGlwSG92ZXIpO1xuICBmdW5jdGlvbiBwbGFjZVNoaXBIb3ZlcihncmlkLCBpbmRleCkge1xuICAgIGNvbnN0IGF4aXMgPSBgJHtpbmRleH1gLnNwbGl0KFwiXCIpO1xuICAgIGlmIChheGlzLmxlbmd0aCA9PT0gMSkgYXhpcy51bnNoaWZ0KFwiMFwiKTtcbiAgICBjb25zdCBpbmRleEFyciA9IFtdO1xuICAgIGNvbnN0IHJlbW92ZUhvdmVyRWZmZWN0ID0gKGluZGV4KSA9PiB7XG4gICAgICBpZiAocGxheWVyQm9hcmQpIHBsYXllckJvYXJkWytpbmRleF0uY2xhc3NMaXN0LnJlbW92ZShcImdyZXlcIik7XG4gICAgfTtcbiAgICBjb25zdCBlbXB0eUluZGV4QXJyID0gKCkgPT4ge1xuICAgICAgaW5kZXhBcnIuZm9yRWFjaChyZW1vdmVIb3ZlckVmZmVjdCk7XG4gICAgICBpbmRleEFyci5zcGxpY2UoMCk7XG4gICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJyZWRcIik7XG4gICAgfTtcbiAgICBjb25zdCBzZXRTaGlwTGVuZ3RoID0gKCkgPT4ge1xuICAgICAgaWYgKEFycmF5LmZyb20oZ3JpZC5jbGFzc0xpc3QpLmluY2x1ZGVzKFwiZ3JleVwiKSkge1xuICAgICAgICBjb3VudGVyLS07XG4gICAgICAgIGlmIChjb3VudGVyID09PSA0KSBsZW5ndGhPZlNoaXAgPSA0O1xuICAgICAgICBpZiAoY291bnRlciA9PT0gMykgbGVuZ3RoT2ZTaGlwID0gMztcbiAgICAgICAgaWYgKGNvdW50ZXIgPT09IDIpIGxlbmd0aE9mU2hpcCA9IDM7XG4gICAgICAgIGlmIChjb3VudGVyID09PSAxKSBsZW5ndGhPZlNoaXAgPSAyO1xuICAgICAgICBpZiAoY291bnRlciA9PT0gMCkgbGVuZ3RoT2ZTaGlwID0gMDtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGFkZFRvSW5kZXhBcnIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBheGlzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5heGlzLWJ0blwiKTtcbiAgICAgIGxldCBpbmRleDEsIGluZGV4MiwgaW5kZXgzLCBpbmRleDQsIGluZGV4NTtcbiAgICAgIGlmIChheGlzQnRuICYmIGF4aXNCdG4udGV4dENvbnRlbnQgPT09IFwiWCBBWElTXCIpIHtcbiAgICAgICAgaW5kZXgxID0gYCR7YXhpc1swXX0ke2F4aXNbMV19YDtcbiAgICAgICAgaW5kZXgyID0gYCR7YXhpc1swXX0keytheGlzWzFdICsgMX1gO1xuICAgICAgICBpbmRleDMgPSBgJHtheGlzWzBdfSR7K2F4aXNbMV0gKyAyfWA7XG4gICAgICAgIGluZGV4NCA9IGAke2F4aXNbMF19JHsrYXhpc1sxXSArIDN9YDtcbiAgICAgICAgaW5kZXg1ID0gYCR7YXhpc1swXX0keytheGlzWzFdICsgNH1gO1xuICAgICAgICBwbGF5ZXJCb2FyZFsraW5kZXgxXS5jbGFzc0xpc3QuYWRkKFwicmVkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGF4aXNCdG4gJiYgYXhpc0J0bi50ZXh0Q29udGVudCA9PT0gXCJZIEFYSVNcIikge1xuICAgICAgICBpbmRleDEgPSBgJHtheGlzWzBdfSR7YXhpc1sxXX1gO1xuICAgICAgICBpbmRleDIgPSBgJHsrYCR7YXhpc1swXX0ke2F4aXNbMV19YCArIDEwfWA7XG4gICAgICAgIGluZGV4MyA9IGAkeytgJHtheGlzWzBdfSR7YXhpc1sxXX1gICsgMjB9YDtcbiAgICAgICAgaW5kZXg0ID0gYCR7K2Ake2F4aXNbMF19JHtheGlzWzFdfWAgKyAzMH1gO1xuICAgICAgICBpbmRleDUgPSBgJHsrYCR7YXhpc1swXX0ke2F4aXNbMV19YCArIDQwfWA7XG4gICAgICAgIHBsYXllckJvYXJkWytpbmRleDFdLmNsYXNzTGlzdC5hZGQoXCJyZWRcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChsZW5ndGhPZlNoaXAgPT09IDUpIHtcbiAgICAgICAgYWRkT25seVZhbGlkU3BhY2UoaW5kZXgxLCBpbmRleEFyciwgcGxheWVyQm9hcmQpO1xuICAgICAgICBhZGRPbmx5VmFsaWRTcGFjZShpbmRleDIsIGluZGV4QXJyLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAgIGFkZE9ubHlWYWxpZFNwYWNlKGluZGV4MywgaW5kZXhBcnIsIHBsYXllckJvYXJkKTtcbiAgICAgICAgYWRkT25seVZhbGlkU3BhY2UoaW5kZXg0LCBpbmRleEFyciwgcGxheWVyQm9hcmQpO1xuICAgICAgICBhZGRPbmx5VmFsaWRTcGFjZShpbmRleDUsIGluZGV4QXJyLCBwbGF5ZXJCb2FyZCk7XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXgxICYmIGxlbmd0aE9mU2hpcCA9PT0gNCkge1xuICAgICAgICBhZGRPbmx5VmFsaWRTcGFjZShpbmRleDEsIGluZGV4QXJyLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAgIGFkZE9ubHlWYWxpZFNwYWNlKGluZGV4MiwgaW5kZXhBcnIsIHBsYXllckJvYXJkKTtcbiAgICAgICAgYWRkT25seVZhbGlkU3BhY2UoaW5kZXgzLCBpbmRleEFyciwgcGxheWVyQm9hcmQpO1xuICAgICAgICBhZGRPbmx5VmFsaWRTcGFjZShpbmRleDQsIGluZGV4QXJyLCBwbGF5ZXJCb2FyZCk7XG4gICAgICB9XG4gICAgICBpZiAobGVuZ3RoT2ZTaGlwID09PSAzKSB7XG4gICAgICAgIGFkZE9ubHlWYWxpZFNwYWNlKGluZGV4MSwgaW5kZXhBcnIsIHBsYXllckJvYXJkKTtcbiAgICAgICAgYWRkT25seVZhbGlkU3BhY2UoaW5kZXgyLCBpbmRleEFyciwgcGxheWVyQm9hcmQpO1xuICAgICAgICBhZGRPbmx5VmFsaWRTcGFjZShpbmRleDMsIGluZGV4QXJyLCBwbGF5ZXJCb2FyZCk7XG4gICAgICB9XG4gICAgICBpZiAobGVuZ3RoT2ZTaGlwID09PSAyKSB7XG4gICAgICAgIGFkZE9ubHlWYWxpZFNwYWNlKGluZGV4MSwgaW5kZXhBcnIsIHBsYXllckJvYXJkKTtcbiAgICAgICAgYWRkT25seVZhbGlkU3BhY2UoaW5kZXgyLCBpbmRleEFyciwgcGxheWVyQm9hcmQpO1xuICAgICAgfVxuICAgICAgY29uc3QgYWRkSG92ZXJFZmZlY3QgPSAoaW5kZXgpID0+XG4gICAgICAgIHBsYXllckJvYXJkWytpbmRleF0uY2xhc3NMaXN0LmFkZChcImdyZXlcIik7XG4gICAgICBsZXQgY291bnRlcjIgPSBjb3VudGVyO1xuICAgICAgaWYgKGNvdW50ZXIgPD0gMikgY291bnRlcjIgPSBjb3VudGVyICsgMTtcbiAgICAgIGlmIChpbmRleEFyci5sZW5ndGggPT09IGNvdW50ZXIyKSB7XG4gICAgICAgIGluZGV4QXJyLmZvckVhY2goYWRkSG92ZXJFZmZlY3QpO1xuICAgICAgfVxuICAgIH07XG4gICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2V0U2hpcExlbmd0aCk7XG4gICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBhZGRUb0luZGV4QXJyKTtcbiAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGVtcHR5SW5kZXhBcnIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZE9ubHlWYWxpZFNwYWNlKGluZGV4LCBpbmRleEFyciwgcGxheWVyQm9hcmQpIHtcbiAgaWYgKGluZGV4ICYmIGluZGV4Lmxlbmd0aCA9PT0gMikgaW5kZXhBcnIucHVzaChpbmRleCk7XG4gIGlmIChcbiAgICBwbGF5ZXJCb2FyZFsraW5kZXhdICYmXG4gICAgQXJyYXkuZnJvbShwbGF5ZXJCb2FyZFsraW5kZXhdLmNsYXNzTGlzdCkuaW5jbHVkZXMoXCJzaGlwXCIpXG4gIClcbiAgICBpbmRleEFyci5wb3AoKTtcbn1cblxuZnVuY3Rpb24gcGxheWVyMk5hbWUoY2hvb3NlRGl2LCBwbGF5ZXJTaG90LCBhbGlnblNoaXBEaXYpIHtcbiAgY29uc3QgeyBpbnB1dERpdiwgc3RhcnRCdG4sIG5hbWVJbnB1dCB9ID0gY3JlYXRlSW5wdXRFbGVtKFxuICAgIFwiRW50ZXIgSHVtYW4gTmFtZVwiLFxuICAgIFwiQ29udGludWVcIlxuICApO1xuICBkb2N1bWVudC5ib2R5LnJlcGxhY2VDaGlsZChpbnB1dERpdiwgY2hvb3NlRGl2KTtcbiAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImNsaWNrXCIsXG4gICAgcGxheWVyMUJvYXJkLmJpbmQobnVsbCwgbmFtZUlucHV0LCBpbnB1dERpdiwgcGxheWVyU2hvdCwgYWxpZ25TaGlwRGl2KVxuICApO1xufVxuZnVuY3Rpb24gcGxheWVyMUJvYXJkKG5hbWVJbnB1dCwgaW5wdXREaXYsIHBsYXllclNob3QsIGFsaWduU2hpcERpdikge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZChcInNlY29uZC1pbnB1dFwiKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwbGF5ZXIyTmFtZVwiLCBKU09OLnN0cmluZ2lmeShgJHtuYW1lSW5wdXQudmFsdWV9YCkpO1xuICBpbnNlcnRCb2FyZChhbGlnblNoaXBEaXYsIGlucHV0RGl2LCBwbGF5ZXJTaG90KTtcbn1cblxuZXhwb3J0IHsgY2hvb3NlUGxheWVyIH07XG4iLCJpbXBvcnQge2NyZWF0ZURvbUVsZW1lbnR9IGZyb20gXCIuL2hlbHBlci1mdW5jdGlvblwiO1xuXG5mdW5jdGlvbiBjcmVhdGVHYW1lYm9hcmQoKSB7XG4gIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImJvYXJkLWNvbnRhaW5lclwiIH0pO1xuICBjb25zdCBncmlkcyA9IChwbGF5ZXIsIHBsYXllckdyaWQpID0+IHtcbiAgICBjb25zdCBzcXVhcmUgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IHBsYXllciB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBncmlkID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBwbGF5ZXJHcmlkIH0pO1xuICAgICAgc3F1YXJlLmFwcGVuZENoaWxkKGdyaWQpO1xuICAgIH1cbiAgICByZXR1cm4gc3F1YXJlO1xuICB9O1xuICBib2FyZENvbnRhaW5lci5hcHBlbmQoXG4gICAgZ3JpZHMoXCJwbGF5ZXIxLWJvYXJkXCIsIFwicGxheWVyMS1ncmlkIHNwYWNlXCIpLFxuICAgIGdyaWRzKFwicGxheWVyMi1ib2FyZCBoaWRlXCIsIFwicGxheWVyMi1ncmlkIHNwYWNlXCIpLFxuICApO1xuICByZXR1cm4geyBib2FyZENvbnRhaW5lciB9O1xufVxuXG5leHBvcnQge2NyZWF0ZUdhbWVib2FyZH07XG4iLCJpbXBvcnQge2Nob29zZVBsYXllcn0gZnJvbSBcIi4vY2hvb3NlLXBsYXllclwiO1xuaW1wb3J0IHtjcmVhdGVJbnB1dEVsZW19IGZyb20gXCIuL25hbWUtaW5wdXRcIjtcblxuZnVuY3Rpb24gZ2V0TmFtZShuYW1lRGV0YWlscykge1xuICBjb25zdCB7IGlucHV0RGl2LCBzdGFydEJ0biwgbmFtZUlucHV0IH0gPSBjcmVhdGVJbnB1dEVsZW0oXG4gICAgbmFtZURldGFpbHMsXG4gICAgXCJTVEFSVCBHQU1FXCIsXG4gICk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKGlucHV0RGl2KTtcbiAgZ2V0SW5wdXRWYWx1ZShzdGFydEJ0biwgbmFtZUlucHV0KTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZShzdGFydEJ0biwgbmFtZUlucHV0KSB7XG4gIGNvbnN0IGdldE5hbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LWRpdlwiKTtcbiAgY29uc3QgcmVwbGFjZU5hbWVEaXYgPSAoKSA9PiB7XG4gICAgY29uc3QgY2hvb3NlRGl2ID0gY2hvb3NlUGxheWVyKG5hbWVJbnB1dC52YWx1ZSk7XG4gICAgZG9jdW1lbnQuYm9keS5yZXBsYWNlQ2hpbGQoY2hvb3NlRGl2LCBnZXROYW1lRGl2KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInBsYXllck5hbWVcIiwgSlNPTi5zdHJpbmdpZnkoYCR7bmFtZUlucHV0LnZhbHVlfWApKTtcbiAgfTtcbiAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlcGxhY2VOYW1lRGl2KTtcbn1cblxuZXhwb3J0IHsgZ2V0TmFtZSB9O1xuIiwiZnVuY3Rpb24gY3JlYXRlRG9tRWxlbWVudCh0eXBlLCBhdHRyaWJ1dGVzKSB7XG4gIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3R5cGV9YCk7XG4gIGlmIChhdHRyaWJ1dGVzID09IG51bGwpIHJldHVybiBuZXdFbGVtZW50O1xuICBzZXRBdHRyaWJ1dGVzKG5ld0VsZW1lbnQsIGF0dHJpYnV0ZXMpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICB9KTtcbn1cblxuZXhwb3J0IHtjcmVhdGVEb21FbGVtZW50fTtcbiIsImltcG9ydCB7Y3JlYXRlRG9tRWxlbWVudH0gZnJvbSBcIi4vaGVscGVyLWZ1bmN0aW9uXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUlucHV0RWxlbShuYW1lRGV0YWlscywgYnRuTmFtZSkge1xuICBjb25zdCBpbnB1dERpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJpbnB1dC1kaXZcIiB9KTtcbiAgY29uc3QgbGFiZWwgPSBjcmVhdGVEb21FbGVtZW50KFwibGFiZWxcIiwgeyBmb3I6IFwibmFtZVwiIH0pO1xuICBjb25zdCBuYW1lSW5wdXQgPSBjcmVhdGVEb21FbGVtZW50KFwiaW5wdXRcIiwge1xuICAgIGlkOiBcIm5hbWVcIixcbiAgICB0eXBlOiBcInRleHRcIixcbiAgICBwbGFjZWhvbGRlcjogXCJMZXRhbVwiLFxuICB9KTtcbiAgY29uc3QgZXJyb3JNc2cgPSBjcmVhdGVEb21FbGVtZW50KFwic3BhblwiLCB7IGNsYXNzOiBcImVycm9yLW1zZ1wiIH0pO1xuICBjb25zdCBzdGFydEJ0biA9IGNyZWF0ZURvbUVsZW1lbnQoXCJidXR0b25cIiwgeyBjbGFzczogXCJzdGFydC1idG5cIiB9KTtcblxuICBsYWJlbC50ZXh0Q29udGVudCA9IG5hbWVEZXRhaWxzO1xuICBzdGFydEJ0bi50ZXh0Q29udGVudCA9IGJ0bk5hbWU7XG4gIGlucHV0RGl2LmFwcGVuZChsYWJlbCwgbmFtZUlucHV0LCBlcnJvck1zZywgc3RhcnRCdG4pO1xuICByZXR1cm4geyBpbnB1dERpdiwgc3RhcnRCdG4sIG5hbWVJbnB1dCB9O1xufVxuXG5leHBvcnQge2NyZWF0ZUlucHV0RWxlbX07XG4iLCJpbXBvcnQge2NyZWF0ZURvbUVsZW1lbnR9IGZyb20gXCIuL2hlbHBlci1mdW5jdGlvblwiO1xuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGNyZWF0ZURvbUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGNvbnN0IGFuY2hvckxpbmsgPSBjcmVhdGVEb21FbGVtZW50KFwiYVwiLCB7XG4gICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vSUFtWW91bmdib3NzeS9iYXR0bGVzaGlwXCIsXG4gIH0pO1xuICBjb25zdCBnaXRIdWJJY29uID0gY3JlYXRlRG9tRWxlbWVudChcImlcIiwgeyBjbGFzczogXCJmYSBmYS1naXRodWJcIiB9KTtcbiAgYW5jaG9yTGluay5hcHBlbmRDaGlsZChnaXRIdWJJY29uKTtcbiAgZm9vdGVyLmFwcGVuZChcIkNvcHlyaWdodCBcXHUwMEE5IDIwMjIgSUFtWW91bmdib3NzeVwiLCBcIiAgXCIsIGFuY2hvckxpbmspO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmV4cG9ydCAge2NyZWF0ZUZvb3Rlcn07XG4iLCJpbXBvcnQgeyBjcmVhdGVGb290ZXIgfSBmcm9tIFwiLi9wYWdlLWZvb3RlclwiO1xuaW1wb3J0IHsgZ2V0TmFtZSB9IGZyb20gXCIuL2dldC1wbGF5ZXItbmFtZVwiO1xuaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSBcIi4vcGFnZS1oZWFkZXJcIjtcbmltcG9ydCB7IGNyZWF0ZURvbUVsZW1lbnQgfSBmcm9tIFwiLi9oZWxwZXItZnVuY3Rpb25cIjtcblxuZnVuY3Rpb24gcmVuZGVyR2V0TmFtZVBhZ2UoKSB7XG4gIGNyZWF0ZUhlYWRlcihcInBhZ2Utb25lLWhlYWRlclwiKTtcbiAgZ2V0TmFtZShcIkVudGVyIFBsYXllcidzIE5hbWU6XCIpO1xuICBjcmVhdGVGb290ZXIoKTtcbn1cblxuZnVuY3Rpb24gYW5ub3VuY2VXaW5uZXIocGxheWVyTmFtZSkge1xuICBjb25zdCBnYW1lT3ZlckRpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJnYW1lLW92ZXItZGl2XCIgfSk7XG4gIGNvbnN0IGdhbWVPdmVyID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJnYW1lLW92ZXJcIiB9KTtcbiAgY29uc3Qgd2lubmVyID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJ3aW5uZXJcIiB9KTtcbiAgY29uc3QgbmFtZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwibmFtZVwiIH0pO1xuICBjb25zdCByZXN0YXJ0QnRuID0gY3JlYXRlRG9tRWxlbWVudChcImJ1dHRvblwiLCB7IGNsYXNzOiBcImJ0bi1yZXN0YXJ0XCIgfSk7XG4gIHJlc3RhcnRCdG4udGV4dENvbnRlbnQgPSBcIlJFU1RBUlRcIjtcbiAgZ2FtZU92ZXIudGV4dENvbnRlbnQgPSBcIkdBTUUgT1ZFUlwiO1xuICBuYW1lLnRleHRDb250ZW50ID0gcGxheWVyTmFtZTtcbiAgd2lubmVyLnRleHRDb250ZW50ID0gXCJUaGUgV2lubmVyIElzXCI7XG4gIGdhbWVPdmVyRGl2LmFwcGVuZChnYW1lT3Zlciwgd2lubmVyLCBuYW1lLCByZXN0YXJ0QnRuKTtcbiAgcmVuZGVyR2V0TmFtZVBhZ2UoKTtcbiAgY29uc3QgZ2V0TmFtZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtZGl2XCIpO1xuICBkb2N1bWVudC5ib2R5LnJlcGxhY2VDaGlsZChnYW1lT3ZlckRpdiwgZ2V0TmFtZURpdik7XG59XG5cbmZ1bmN0aW9uIHJlc3RhcnQoKSB7XG4gIGNvbnN0IHJlc3RhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBhbGlnbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxpZ24tc2hpcHNcIik7XG4gIGNvbnN0IGFsaWduQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250aW51ZS1idG5cIik7XG4gIGNvbnN0IGF4aXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF4aXMtYnRuXCIpO1xuICBhbGlnbkRpdi5yZXBsYWNlQ2hpbGQocmVzdGFydCwgYWxpZ25CdG4pO1xuICByZXN0YXJ0LnRleHRDb250ZW50ID0gXCJSZXN0YXJ0XCI7XG4gIGlmIChheGlzQnRuKSBheGlzQnRuLnJlbW92ZSgpO1xuICByZXN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXJlbmRlckdldE5hbWVQYWdlKTtcbn1cblxuZnVuY3Rpb24gcmVyZW5kZXJHZXROYW1lUGFnZSgpIHtcbiAgd2hpbGUgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZClcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gIHJlbmRlckdldE5hbWVQYWdlKCk7XG59XG5cbmV4cG9ydCB7IHJlbmRlckdldE5hbWVQYWdlLCByZXN0YXJ0LCBhbm5vdW5jZVdpbm5lciB9O1xuIiwiaW1wb3J0IHtjcmVhdGVEb21FbGVtZW50fSBmcm9tIFwiLi9oZWxwZXItZnVuY3Rpb25cIjtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKGNsYXNzTmFtZSkge1xuICBjb25zdCBnYW1lVGl0bGUgPSBjcmVhdGVEb21FbGVtZW50KFwiaDFcIiwgeyBjbGFzczogY2xhc3NOYW1lIH0pO1xuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVEb21FbGVtZW50KFwiaGVhZGVyXCIpO1xuICBjb25zdCB7IGJvZHkgfSA9IGRvY3VtZW50O1xuICBnYW1lVGl0bGUudGV4dENvbnRlbnQgPSBcIkJBVFRMRVNISVBcIjtcbiAgaGVhZGVyLmFwcGVuZChnYW1lVGl0bGUpO1xuICBib2R5LmFwcGVuZChoZWFkZXIpO1xufVxuXG5leHBvcnQge2NyZWF0ZUhlYWRlcn07XG4iLCJpbXBvcnQge0dhbWVib2FyZH0gZnJvbSBcIi4uL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgcGxhY2VDb21wdXRlclNoaXBzIH0gZnJvbSBcIi4uL3BsYWNlU2hpcHNPbkJvYXJkXCI7XG5cbmZ1bmN0aW9uIHNob3dTaGlwc1JhbmRvbWx5KCkge1xuICBjb25zdCB7XG4gICAgcG9zaXRpb25TaGlwLCByZWNlaXZlQXR0YWNrLCBhbGxTaGlwc1N1bmssIEFycixcbiAgfSA9IEdhbWVib2FyZChwbGFjZUNvbXB1dGVyU2hpcHMpO1xuICBwb3NpdGlvblNoaXAoKTtcbiAgcmV0dXJuIHsgcmVjZWl2ZUF0dGFjaywgYWxsU2hpcHNTdW5rLCBBcnIgfTtcbn1cblxuZXhwb3J0IHtzaG93U2hpcHNSYW5kb21seX07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4uL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgcGxhY2VQbGF5ZXJTaGlwcyB9IGZyb20gXCIuLi9wbGFjZVNoaXBzT25Cb2FyZFwiO1xuaW1wb3J0IHsgcmVzdGFydCB9IGZyb20gXCIuL3BhZ2UtZ2V0LW5hbWVcIjtcblxuLyoqIEdldHMgc2hpcHMgY29vcmRpbmF0ZXMgZnJvbSBHYW1lYm9hcmQgYW5kIGRpc3BsYXkgaW4gRE9NICovXG5mdW5jdGlvbiBzaG93U2hpcHNPbkJvYXJkKGNsYXNzTmFtZSkge1xuICBjb25zdCBhbGlnbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXhpcy1idG5cIik7XG4gIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjbGFzc05hbWV9YCk7XG4gIGNvbnN0IGluc3RydWN0aW9uMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5zdHJ1Y3Rpb24yXCIpO1xuICBjb25zdCB7IGJvYXJkLCBwb3NpdGlvblNoaXAsIGFsaWduU2hpcCwgcmVjZWl2ZUF0dGFjaywgYWxsU2hpcHNTdW5rLCBBcnIgfSA9XG4gICAgR2FtZWJvYXJkKHBsYWNlUGxheWVyU2hpcHMpO1xuXG4gIGlmICh0aGlzLmNsYXNzTGlzdCAmJiB0aGlzLmNsYXNzTGlzdFswXSA9PT0gXCJwbGF5ZXIxLWdyaWRcIikge1xuICAgIGNvbnN0IHBsYXllck5hbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGxheWVyTmFtZVwiKSk7XG4gICAgaW5zdHJ1Y3Rpb24yLnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZX0sIFBsYWNlIFlvdXIgU2hpcHMuYDtcbiAgfVxuXG4gIGNvbnN0IGFkZExpc3RlbmVyID0gKHNxdWFyZSwgaW5kZXgpID0+IHtcbiAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIGFkZEJnQ29sb3IuYmluZChcbiAgICAgICAgdGhpcyxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIHBvc2l0aW9uU2hpcCxcbiAgICAgICAgYm9hcmQsXG4gICAgICAgIHNxdWFyZXMsXG4gICAgICAgIEFycixcbiAgICAgICAgaW5zdHJ1Y3Rpb24yXG4gICAgICApXG4gICAgKTtcbiAgfTtcbiAgYWxpZ24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFsaWduU2hpcCk7XG4gIHNxdWFyZXMuZm9yRWFjaChhZGRMaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgcmV0dXJuIFtyZWNlaXZlQXR0YWNrLCBBcnIsIGFsbFNoaXBzU3Vua107XG59XG5cbi8qKiBBZGRzIGJhY2tncm91bmQgY29sb3VyIGZvciBtaXNzZWQgc2hvdHMgKi9cbmZ1bmN0aW9uIGFkZEJnQ29sb3IoaW5kZXgsIHBvc2l0aW9uU2hpcCwgYm9hcmQsIHNxdWFyZXMsIEFyciwgaW5zdHJ1Y3Rpb24yKSB7XG4gIGNvbnN0IHBsYXllcjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcjEtYm9hcmRcIik7XG4gIGNvbnN0IHBsYXllcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcjItYm9hcmRcIik7XG4gIHBvc2l0aW9uU2hpcChpbmRleCk7XG4gIGJvYXJkLmZsYXQoKS5mb3JFYWNoKChpdGVtLCBpbmRleDIpID0+IHtcbiAgICBpZiAoaXRlbSA9PT0gMiB8fCBpdGVtID09PSAzIHx8IGl0ZW0gPT09IDQgfHwgaXRlbSA9PT0gNSB8fCBpdGVtID09PSA2KVxuICAgICAgc3F1YXJlc1tpbmRleDJdLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgIGlmIChpdGVtID09PSAyKSBzcXVhcmVzW2luZGV4Ml0uY2xhc3NMaXN0LmFkZChcInNoaXAyXCIpO1xuICAgIGlmIChpdGVtID09PSAzKSBzcXVhcmVzW2luZGV4Ml0uY2xhc3NMaXN0LmFkZChcInNoaXAzXCIpO1xuICAgIGlmIChpdGVtID09PSA2KSBzcXVhcmVzW2luZGV4Ml0uY2xhc3NMaXN0LmFkZChcInNoaXA2XCIpO1xuICAgIGlmIChpdGVtID09PSA0KSBzcXVhcmVzW2luZGV4Ml0uY2xhc3NMaXN0LmFkZChcInNoaXA0XCIpO1xuICAgIGlmIChpdGVtID09PSA1KSBzcXVhcmVzW2luZGV4Ml0uY2xhc3NMaXN0LmFkZChcInNoaXA1XCIpO1xuICB9KTtcblxuICBpZiAocGxheWVyMS5jbGFzc0xpc3RbMV0gPT09IFwiaGlkZVwiIHx8IHBsYXllcjIuY2xhc3NMaXN0WzFdID09PSBcImhpZGVcIikge1xuICAgIGlmIChBcnIubGVuZ3RoID09PSA1ICYmIHRoaXMgPT09IGRvY3VtZW50KSBzaG93RW5lbXlXYXRlcigpO1xuICAgIGVsc2UgaWYgKEFyci5sZW5ndGggPT09IDUpIHtcbiAgICAgIGlmICh0aGlzLmNsYXNzTGlzdFswXSA9PT0gXCJwbGF5ZXIyLWdyaWRcIilcbiAgICAgICAgaW5zdHJ1Y3Rpb24yLnRleHRDb250ZW50ID0gXCJDTElDSyBPTiBORVhUIFRPIFNUQVJUIFBMQVlJTkdcIjtcbiAgICAgIGlmICh0aGlzLmNsYXNzTGlzdFswXSA9PT0gXCJwbGF5ZXIxLWdyaWRcIilcbiAgICAgICAgaW5zdHJ1Y3Rpb24yLnRleHRDb250ZW50ID0gXCJDTElDSyBPTiBORVhUIFRPIENPTlRJTlVFXCI7XG4gICAgICBzaG93RW5lbXkuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBpZiAoQXJyYXkuZnJvbShwbGF5ZXIxLmNsYXNzTGlzdCkuaW5jbHVkZXMoXCJoaWRlXCIpKSByZXR1cm47XG4gIGlmIChBcnJheS5mcm9tKHBsYXllcjIuY2xhc3NMaXN0KS5pbmNsdWRlcyhcImhpZGVcIikpIHJldHVybjtcbiAgaWYgKEFyci5sZW5ndGggPT09IDUgJiYgdGhpcyAhPT0gZG9jdW1lbnQpIHtcbiAgICBib2FyZC5mbGF0KCkuZm9yRWFjaCgoaXRlbSwgaW5kZXgyKSA9PiB7XG4gICAgICBpZiAoaXRlbSA9PT0gMiB8fCBpdGVtID09PSAzIHx8IGl0ZW0gPT09IDQgfHwgaXRlbSA9PT0gNSB8fCBpdGVtID09PSA2KVxuICAgICAgICBzcXVhcmVzW2luZGV4Ml0uY2xhc3NMaXN0LnJlbW92ZShcInNoaXBcIik7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd0VuZW15KCkge1xuICBjb25zdCBwbGF5ZXJOYW1lID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBsYXllcjJOYW1lXCIpKTtcbiAgY29uc3QgaW5zdHJ1Y3Rpb24yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnN0cnVjdGlvbjJcIik7XG4gIGNvbnN0IHBsYXllcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcjItYm9hcmRcIik7XG4gIGNvbnN0IHBsYXllcjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcjEtYm9hcmRcIik7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllcjEtZ3JpZFwiKTtcbiAgY29uc3QgeyBzdGFydEJ0biwgY29udGludWVCdG4gfSA9IGNyZWF0ZVBsYXlCdG4oKTtcbiAgY29udGludWVCdG4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gIHN0YXJ0QnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXG4gIGNvbnN0IHNob3dTaGlwcyA9ICgpID0+IHtcbiAgICBpbnN0cnVjdGlvbjIudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJOYW1lfSwgUGxhY2UgWW91ciBTaGlwcy5gO1xuICAgIHBsYXllcjIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgcGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICBjb250aW51ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICBzdGFydEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcblxuICAgIGdyaWQuZm9yRWFjaCgoc3FyKSA9PiB7XG4gICAgICBpZiAoQXJyYXkuZnJvbShzcXIuY2xhc3NMaXN0KS5pbmNsdWRlcyhcInNoaXBcIikpXG4gICAgICAgIHNxci5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFwiKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzaG93U2hpcHMyID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllcjItZ3JpZFwiKTtcbiAgICBncmlkLmZvckVhY2goKHNxcikgPT4ge1xuICAgICAgaWYgKEFycmF5LmZyb20oc3FyLmNsYXNzTGlzdCkuaW5jbHVkZXMoXCJzaGlwXCIpKVxuICAgICAgICBzcXIuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBcIik7XG4gICAgfSk7XG4gICAgaW5zdHJ1Y3Rpb24yLnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZX0sIHRha2UgYSBzaG90LmA7XG4gICAgcGxheWVyMS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICByZXN0YXJ0KCk7XG4gIH07XG5cbiAgaWYgKHRoaXMuY2xhc3NMaXN0WzBdID09PSBcInBsYXllcjEtZ3JpZFwiKVxuICAgIGNvbnRpbnVlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93U2hpcHMpO1xuICBpZiAodGhpcy5jbGFzc0xpc3RbMF0gPT09IFwicGxheWVyMi1ncmlkXCIpXG4gICAgY29udGludWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dTaGlwczIpO1xufVxuXG5mdW5jdGlvbiBzaG93RW5lbXlXYXRlcigpIHtcbiAgY29uc3QgcGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXIyLWJvYXJkXCIpO1xuICBjb25zdCB7IHN0YXJ0QnRuLCBpbnN0cnVjdGlvbiB9ID0gY3JlYXRlUGxheUJ0bigpO1xuICBpbnN0cnVjdGlvbi50ZXh0Q29udGVudCA9IFwiQ0xJQ0sgUExBWSBUTyBTVEFSVCBQTEFZSU5HXCI7XG4gIHN0YXJ0QnRuLnRleHRDb250ZW50ID0gXCJQbGF5XCI7XG4gIGNvbnN0IHNob3dTaGlwcyA9ICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJOYW1lID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBsYXllck5hbWVcIikpO1xuICAgIHBsYXllci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICBpbnN0cnVjdGlvbi50ZXh0Q29udGVudCA9IGBXYWl0aW5nIGZvciAke3BsYXllck5hbWV9J3Mgc2hvdGA7XG4gICAgcmVzdGFydCgpO1xuICB9O1xuICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1NoaXBzKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGxheUJ0bigpIHtcbiAgY29uc3Qgc2hpcEF4aXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsaWduLXNoaXBzXCIpO1xuICBjb25zdCBjb250aW51ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGludWUtYnRuXCIpO1xuICBjb25zdCBpbnN0cnVjdGlvbiA9IHNoaXBBeGlzLmNoaWxkcmVuWzBdO1xuICBjb25zdCBzdGFydEJ0biA9IHNoaXBBeGlzLmNoaWxkcmVuWzFdO1xuICByZXR1cm4geyBzdGFydEJ0biwgaW5zdHJ1Y3Rpb24sIGNvbnRpbnVlQnRuIH07XG59XG5cbmV4cG9ydCB7IHNob3dTaGlwc09uQm9hcmQgfTtcbiIsImltcG9ydCB7IGFubm91bmNlV2lubmVyIH0gZnJvbSBcIi4vcGFnZS1nZXQtbmFtZVwiO1xuaW1wb3J0IHsgc2hvd1NoaXBzT25Cb2FyZCB9IGZyb20gXCIuL3BsYWNlLXNoaXBcIjtcbmltcG9ydCB7IHNob3dTaGlwc1JhbmRvbWx5IH0gZnJvbSBcIi4vcGxhY2Utc2hpcC1yYW5kb21cIjtcblxubGV0IGhpdCxcbiAgaW5kZXgyLFxuICB0aW1lID0gMCxcbiAgaXNTdW5rU2hpcEFycmF5LFxuICB2aXNpdGVkSW5kZXggPSBudWxsLFxuICBwb3NzaWJsZVZhbGlkU2hvdHMgPSBbXSxcbiAgc3RvcEhlcmUgPSAwLFxuICBmaXJzdEhpdDtcblxuLyoqIENoZWNrcyBmb3IgdmFsaWQgc2hvdHMgb24gc2hpcHMgKi9cbmZ1bmN0aW9uIHNob3RzKHNob3dTaGlwcywgY2xhc3NOYW1lKSB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y2xhc3NOYW1lfWApO1xuICBjb25zdCB7IHJlY2VpdmVBdHRhY2ssIGFsbFNoaXBzU3VuayB9ID0gc2hvd1NoaXBzKCk7XG4gIGNvbnN0IFtyZWNlaXZlQXR0YWNrMiwgLCBhbGxTaGlwc1N1bmsyXSA9IHNob3dTaGlwc09uQm9hcmQuY2FsbChcbiAgICBkb2N1bWVudCxcbiAgICBcInBsYXllcjEtZ3JpZFwiXG4gICk7XG4gIGNvbnN0IGFkZExpc3RlbmVyVG9HcmlkID0gKGdyaWQsIGluZGV4KSA9PlxuICAgIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIGFsdGVybmF0ZVNob3RzLmJpbmQoXG4gICAgICAgIG51bGwsXG4gICAgICAgIGdyaWQsXG4gICAgICAgIGluZGV4LFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICByZWNlaXZlQXR0YWNrMixcbiAgICAgICAgcGxheWVyQm9hcmQsXG4gICAgICAgIGFsbFNoaXBzU3VuayxcbiAgICAgICAgYWxsU2hpcHNTdW5rMlxuICAgICAgKVxuICAgICk7XG4gIHBsYXllckJvYXJkLmZvckVhY2goYWRkTGlzdGVuZXJUb0dyaWQpO1xufVxuXG4vKiogQWx0ZXJuYXRlIHNob3RzIGJldHdlZW4gY29tcHV0ZXIgYW5kIHBsYXllciAqL1xuZnVuY3Rpb24gYWx0ZXJuYXRlU2hvdHMoXG4gIGdyaWQsXG4gIGluZGV4LFxuICByZWNlaXZlQXR0YWNrLFxuICByZWNlaXZlQXR0YWNrMixcbiAgcGxheWVyQm9hcmQsXG4gIGFsbFNoaXBzU3VuayxcbiAgYWxsU2hpcHNTdW5rMlxuKSB7XG4gIGNvbnN0IGluc3RydWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGlnbi1zaGlwc1wiKS5jaGlsZHJlblswXTtcbiAgaWYgKEFycmF5LmZyb20oZ3JpZC5jbGFzc0xpc3QpLmluY2x1ZGVzKFwic2hvdHNcIikpIHJldHVybjtcbiAgaWYgKHN0b3BIZXJlID09PSAxKSByZXR1cm47XG4gIGlmICh0aW1lID09PSAxKSByZXR1cm47XG4gIHRpbWUgPSAxO1xuICBjb25zdCBwbGF5ZXJOYW1lID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBsYXllck5hbWVcIikpO1xuICBjb25zdCB7IGdyaWQyLCBpbmRleDIsIHBsYXllckJvYXJkMiB9ID0gY29tcHV0ZXJTaG90cygpO1xuICBpbnN0cnVjdGlvbi50ZXh0Q29udGVudCA9IFwiV2FpdGluZyBmb3IgQ29tcHV0ZXIncyBTaG90LlwiO1xuICB2YWxpZFNob3RzKFxuICAgIGdyaWQsXG4gICAgaW5kZXgsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBwbGF5ZXJCb2FyZCxcbiAgICBhbGxTaGlwc1N1bmssXG4gICAgaW5zdHJ1Y3Rpb24sXG4gICAgcGxheWVyTmFtZVxuICApO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHRpbWUgPSAwO1xuICAgIGNvbnN0IHBsYXllck5hbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGxheWVyTmFtZVwiKSk7XG4gICAgY29uc3QgQUlOYW1lID0gXCJDb21wdXRlclwiO1xuICAgIGlmIChzdG9wSGVyZSA9PT0gMSkgcmV0dXJuO1xuICAgIGluc3RydWN0aW9uLnRleHRDb250ZW50ID0gYFdhaXRpbmcgZm9yICR7cGxheWVyTmFtZX0ncyBTaG90LmA7XG4gICAgY29uc3QgeyBoaXRDb29yZCB9ID0gdmFsaWRTaG90cyhcbiAgICAgIGdyaWQyLFxuICAgICAgaW5kZXgyLFxuICAgICAgcmVjZWl2ZUF0dGFjazIsXG4gICAgICBwbGF5ZXJCb2FyZDIsXG4gICAgICBhbGxTaGlwc1N1bmsyLFxuICAgICAgaW5zdHJ1Y3Rpb24sXG4gICAgICBBSU5hbWVcbiAgICApO1xuICAgIGhpdCA9IGhpdENvb3JkO1xuICB9LCAxNTAwKTtcbn1cblxuLyoqIENvbG91cnMgdmFsaWQgc2hvdHMgcmVkICovXG5mdW5jdGlvbiB2YWxpZFNob3RzKFxuICBncmlkLFxuICBpbmRleCxcbiAgcmVjZWl2ZUF0dGFjayxcbiAgcGxheWVyQm9hcmQsXG4gIGFsbFNoaXBzU3VuayxcbiAgaW5zdHJ1Y3Rpb24sXG4gIHBsYXllck5hbWVcbikge1xuICBjb25zdCBheGlzID0gYCR7aW5kZXh9YC5zcGxpdChcIlwiKTtcbiAgaWYgKGF4aXMubGVuZ3RoID09PSAxKSBheGlzLnVuc2hpZnQoXCIwXCIpO1xuXG4gIGNvbnN0IHtcbiAgICBoaXRDb29yZCxcbiAgICBzaGlwNVN1bmssXG4gICAgc2hpcDRTdW5rLFxuICAgIHNoaXAzU3VuayxcbiAgICBzaGlwMlN1bmssXG4gICAgc2hpcDFTdW5rLFxuICAgIHNoaXA1Q29vcmQsXG4gICAgc2hpcDRDb29yZCxcbiAgICBzaGlwM0Nvb3JkLFxuICAgIHNoaXAyQ29vcmQsXG4gICAgc2hpcDFDb29yZCxcbiAgfSA9IHJlY2VpdmVBdHRhY2soYXhpcyk7XG5cbiAgaWYgKGdyaWQpIGdyaWQuY2xhc3NMaXN0LmFkZChcInNob3RzXCIpO1xuICBpZiAoaGl0Q29vcmQpIGdyaWQuY2xhc3NMaXN0LmFkZChcInZhbGlkLXNob3RcIik7XG5cbiAgaXNTdW5rU2hpcChzaGlwNVN1bmssIHNoaXA1Q29vcmQsIHBsYXllckJvYXJkKTtcbiAgaXNTdW5rU2hpcChzaGlwNFN1bmssIHNoaXA0Q29vcmQsIHBsYXllckJvYXJkKTtcbiAgaXNTdW5rU2hpcChzaGlwM1N1bmssIHNoaXAzQ29vcmQsIHBsYXllckJvYXJkKTtcbiAgaXNTdW5rU2hpcChzaGlwMlN1bmssIHNoaXAyQ29vcmQsIHBsYXllckJvYXJkKTtcbiAgaXNTdW5rU2hpcChzaGlwMVN1bmssIHNoaXAxQ29vcmQsIHBsYXllckJvYXJkKTtcblxuICBpZiAoYWxsU2hpcHNTdW5rKCkpIHtcbiAgICBpbnN0cnVjdGlvbi50ZXh0Q29udGVudCA9IFwiZ2FtZSBvdmVyLlwiO1xuICAgIHN0b3BIZXJlID0gMTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHdoaWxlIChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgICAgIGFubm91bmNlV2lubmVyKHBsYXllck5hbWUpO1xuICAgIH0sIDIwMDApO1xuICB9XG5cbiAgaXNTdW5rU2hpcEFycmF5ID0gW3NoaXA1U3Vuaywgc2hpcDRTdW5rLCBzaGlwM1N1bmssIHNoaXAyU3Vuaywgc2hpcDFTdW5rXTtcblxuICByZXR1cm4geyBoaXRDb29yZCB9O1xufVxuXG4vKiogQWRkcyBibHVlIGJhY2tncm91bmQgY29sb3VyIHdoZW4gYSBzaGlwIGlzIGNvbXBsZXRlbHkgc3VuayAqL1xuZnVuY3Rpb24gaXNTdW5rU2hpcChzaGlwU3Vuaywgc2hpcENvb3JkLCBwbGF5ZXJCb2FyZCkge1xuICBjb25zdCBhZGRCbHVlQmcgPSAoaXRlbSkgPT5cbiAgICBwbGF5ZXJCb2FyZC5mb3JFYWNoKChzcXVhcmUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoK2l0ZW0uam9pbihcIlwiKSA9PT0gaW5kZXgpIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3Vuay1zaGlwXCIpO1xuICAgIH0pO1xuICBpZiAoc2hpcFN1bmsgPT09IHRydWUpIHNoaXBDb29yZC5mb3JFYWNoKGFkZEJsdWVCZyk7XG59XG5mdW5jdGlvbiBjb21wdXRlclNob3RzKCkge1xuICBjb25zdCBhcnJJbmRleCA9IFtdO1xuICBjb25zdCBwbGF5ZXJCb2FyZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllcjEtZ3JpZFwiKTtcbiAgY29uc3QgcHVzaCA9IChzcXVhcmUsIGluZGV4KSA9PiB7XG4gICAgaWYgKHNxdWFyZS5jbGFzc0xpc3RbMV0gPT09IFwic3BhY2VcIikgYXJySW5kZXgucHVzaChpbmRleCk7XG4gIH07XG4gIHBsYXllckJvYXJkMi5mb3JFYWNoKHB1c2gpO1xuICBjb25zdCByYW5OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoYXJySW5kZXgubGVuZ3RoIC0gMSkpO1xuICBpbmRleDIgPSBhcnJJbmRleFtyYW5OdW1dO1xuICBmaW5kVmFsaWRTaG90cyhhcnJJbmRleCwgcmFuTnVtLCBwbGF5ZXJCb2FyZDIpO1xuICBjb25zdCBncmlkMiA9IHBsYXllckJvYXJkMltpbmRleDJdO1xuICBpZiAoZ3JpZDIpIGdyaWQyLmNsYXNzTGlzdC5yZW1vdmUoXCJzcGFjZVwiKTtcbiAgcmV0dXJuIHsgZ3JpZDIsIGluZGV4MiwgcGxheWVyQm9hcmQyIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRWYWxpZFNob3RzKGFyckluZGV4LCByYW5OdW0sIHBsYXllckJvYXJkMikge1xuICBpZiAoaGl0ICYmIHZpc2l0ZWRJbmRleCA+PSAxKSB7XG4gICAgdmlzaXRlZEluZGV4ID0gdmlzaXRlZEluZGV4IC0gMTtcbiAgICByZW1vdmVGcm9tQXJyYXkoMCwgK3Bvc3NpYmxlVmFsaWRTaG90c1swXSAtIDEpO1xuICAgIHJlbW92ZUZyb21BcnJheSgxLCArcG9zc2libGVWYWxpZFNob3RzWzFdICsgMSk7XG4gICAgcmVtb3ZlRnJvbUFycmF5KDIsICtwb3NzaWJsZVZhbGlkU2hvdHNbMl0gKyAxMCk7XG4gICAgcmVtb3ZlRnJvbUFycmF5KDMsICtwb3NzaWJsZVZhbGlkU2hvdHNbM10gLSAxMCk7XG4gICAgaW5jcmVhc2VWaXNpdGVkSW5kZXgocGxheWVyQm9hcmQyKTtcbiAgICB2aXNpdGVkSW5kZXgrKztcbiAgfVxuICBpZiAoaGl0ICYmIHZpc2l0ZWRJbmRleCA9PT0gbnVsbCkge1xuICAgIGZpcnN0SGl0ID0gK2hpdFswXTtcbiAgICBjb25zdCBzcGxpdEhpdCA9IGhpdFswXS5zcGxpdChcIlwiKTtcbiAgICBwb3NzaWJsZVZhbGlkU2hvdHMgPSBbXG4gICAgICBzcGxpdEhpdFswXSArICgrc3BsaXRIaXRbMV0gLSAxKSxcbiAgICAgIHNwbGl0SGl0WzBdICsgKCtzcGxpdEhpdFsxXSArIDEpLFxuICAgICAgK3NwbGl0SGl0WzBdICsgMSArIHNwbGl0SGl0WzFdLFxuICAgICAgK3NwbGl0SGl0WzBdIC0gMSArIHNwbGl0SGl0WzFdLFxuICAgIF07XG4gICAgdmlzaXRlZEluZGV4ID0gMDtcbiAgICBpbmRleDIgPSBwb3NzaWJsZVZhbGlkU2hvdHNbdmlzaXRlZEluZGV4XTtcbiAgICBpbmNyZWFzZVZpc2l0ZWRJbmRleChwbGF5ZXJCb2FyZDIpO1xuICAgIGluY3JlYXNlVmlzaXRlZEluZGV4KHBsYXllckJvYXJkMik7XG4gICAgaW5jcmVhc2VWaXNpdGVkSW5kZXgocGxheWVyQm9hcmQyKTtcbiAgICB2aXNpdGVkSW5kZXgrKztcbiAgfVxuICBpZiAoaGl0ID09PSB1bmRlZmluZWQgJiYgdmlzaXRlZEluZGV4ID49IDEgJiYgdmlzaXRlZEluZGV4IDwgNCkge1xuICAgIGluZGV4MiA9IHBvc3NpYmxlVmFsaWRTaG90c1t2aXNpdGVkSW5kZXhdO1xuICAgIGluY3JlYXNlVmlzaXRlZEluZGV4KHBsYXllckJvYXJkMik7XG4gICAgaW5jcmVhc2VWaXNpdGVkSW5kZXgocGxheWVyQm9hcmQyKTtcbiAgICB2aXNpdGVkSW5kZXgrKztcbiAgfVxuICBpZiAoaXNTdW5rU2hpcEFycmF5ICYmIGlzU3Vua1NoaXBBcnJheS5pbmNsdWRlcyh0cnVlKSkge1xuICAgIHBvc3NpYmxlVmFsaWRTaG90cy5zcGxpY2UoMCk7XG4gICAgaW5kZXgyID0gYXJySW5kZXhbcmFuTnVtXTtcbiAgICB2aXNpdGVkSW5kZXggPSBudWxsO1xuICAgIGZpcnN0SGl0ID0gbnVsbDtcbiAgfVxufVxuZnVuY3Rpb24gcmVtb3ZlRnJvbUFycmF5KGluZGV4LCBleHByZXNzaW9uKSB7XG4gIGlmICh2aXNpdGVkSW5kZXggPT09IGluZGV4KSB7XG4gICAgaW5kZXgyID0gZXhwcmVzc2lvbjtcbiAgICBwb3NzaWJsZVZhbGlkU2hvdHMuc3BsaWNlKHZpc2l0ZWRJbmRleCwgMSwgaW5kZXgyKTtcbiAgfVxufVxuZnVuY3Rpb24gaW5jcmVhc2VWaXNpdGVkSW5kZXgocGxheWVyQm9hcmQyKSB7XG4gIGlmIChcbiAgICAraW5kZXgyIDwgMCB8fFxuICAgICtpbmRleDIgPiA5OSB8fFxuICAgIGlzTmFOKCtpbmRleDIpIHx8XG4gICAgaW5kZXgyID09PSBcIjAxMFwiIHx8XG4gICAgQXJyYXkuZnJvbShwbGF5ZXJCb2FyZDJbK2luZGV4Ml0uY2xhc3NMaXN0KS5pbmNsdWRlcyhcInNob3RzXCIpXG4gICkge1xuICAgIHZpc2l0ZWRJbmRleCsrO1xuICB9XG4gIGluZGV4MiA9ICtwb3NzaWJsZVZhbGlkU2hvdHNbdmlzaXRlZEluZGV4XTtcbiAgaWYgKFxuICAgIGZpcnN0SGl0ICYmXG4gICAgcGxheWVyQm9hcmQyWytpbmRleDJdICYmXG4gICAgQXJyYXkuZnJvbShwbGF5ZXJCb2FyZDJbK2luZGV4Ml0uY2xhc3NMaXN0KS5pbmNsdWRlcyhcInNoaXBcIikgJiZcbiAgICBwbGF5ZXJCb2FyZDJbK2luZGV4Ml0uY2xhc3NMaXN0WzNdICE9PSBwbGF5ZXJCb2FyZDJbZmlyc3RIaXRdLmNsYXNzTGlzdFsyXVxuICApIHtcbiAgICB2aXNpdGVkSW5kZXgrKztcbiAgfVxuICBpbmRleDIgPSArcG9zc2libGVWYWxpZFNob3RzW3Zpc2l0ZWRJbmRleF07XG59XG5cbmNvbnN0IHBsYXllclNob3RzID0gc2hvdHMuYmluZChudWxsLCBzaG93U2hpcHNSYW5kb21seSwgXCJwbGF5ZXIyLWdyaWRcIik7XG5leHBvcnQgeyBwbGF5ZXJTaG90cywgdmFsaWRTaG90cywgc3RvcEhlcmUgfTtcbiIsImltcG9ydCB7Y3JlYXRlMkRBcnJheX0gZnJvbSBcIi4vMmQtYXJyYXlcIjtcbmltcG9ydCB7U2hpcH0gZnJvbSBcIi4vc2hpcFwiO1xuXG5mdW5jdGlvbiBHYW1lYm9hcmQocGxhY2VQbGF5ZXJTaGlwcykge1xuICBjb25zdCBBcnIgPSBbXTtcbiAgbGV0IGFsaWduID0gXCJYXCI7XG4gIGNvbnN0IHNoaXBBcnIgPSBbXTtcbiAgY29uc3QgYm9hcmQgPSBjcmVhdGUyREFycmF5KDEwKTtcbiAgY29uc3QgYWxpZ25TaGlwID0gKCkgPT4gKGFsaWduID0gYWxpZ24gPT09IFwiWFwiID8gXCJZXCIgOiBcIlhcIik7XG5cbiAgY29uc3QgcG9zaXRpb25TaGlwID0gKGluZGV4KSA9PiB7XG4gICAgcGxhY2VQbGF5ZXJTaGlwcyhBcnIsIGJvYXJkLCBzaGlwQXJyLCBpbmRleCwgYWxpZ24pO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoYXR0YWNrKSA9PiB7XG4gICAgbGV0IGhpdENvb3JkO1xuICAgIGxldCBzaGlwNVN1bms7XG4gICAgbGV0IHNoaXA0U3VuaztcbiAgICBsZXQgc2hpcDNTdW5rO1xuICAgIGxldCBzaGlwMlN1bms7XG4gICAgbGV0IHNoaXAxU3VuaztcbiAgICBsZXQgc2hpcDVDb29yZDtcbiAgICBsZXQgc2hpcDRDb29yZDtcbiAgICBsZXQgc2hpcDNDb29yZDtcbiAgICBsZXQgc2hpcDJDb29yZDtcbiAgICBsZXQgc2hpcDFDb29yZDtcblxuICAgIGNvbnN0IFtzaGlwRml2ZSwgc2hpcEZvdXIsIHNoaXBUaHJlZSwgc2hpcFR3bywgc2hpcE9uZV0gPSBzaGlwQXJyO1xuICAgIGNvbnN0IFtzaGlwNSwgc2hpcDQsIHNoaXAzLCBzaGlwMiwgc2hpcDFdID0gQXJyO1xuICAgIGNvbnN0IGFycmF5ID0gW3NoaXA1LCBzaGlwNCwgc2hpcDMsIHNoaXAyLCBzaGlwMV0uZmxhdCgpO1xuXG4gICAgYXJyYXkuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgc2hpcC5mb3JFYWNoKChjb29yZGluYXRlLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoK2F0dGFjay5qb2luKFwiXCIpID09PSArY29vcmRpbmF0ZSkge1xuICAgICAgICAgIGhpdENvb3JkID0gc2hpcC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIGNvbnN0IHNoaTUgPSBTaGlwKHNoaXBGaXZlLlhZLCBzaGlwRml2ZS5zaGlwTGVuZ2h0LCBzaGlwRml2ZS5hbGlnbik7XG4gICAgICAgICAgc2hpcDVTdW5rID0gc2hpNS5pc1N1bmsoc2hpcCwgaGl0Q29vcmQpO1xuICAgICAgICAgIHNoaXA1Q29vcmQgPSBzaGk1LnNoaXBDb29yZDtcbiAgICAgICAgICBjb25zdCBzaGk0ID0gU2hpcChzaGlwRm91ci5YWSwgc2hpcEZvdXIuc2hpcExlbmdodCwgc2hpcEZvdXIuYWxpZ24pO1xuICAgICAgICAgIHNoaXA0U3VuayA9IHNoaTQuaXNTdW5rKHNoaXAsIGhpdENvb3JkKTtcbiAgICAgICAgICBzaGlwNENvb3JkID0gc2hpNC5zaGlwQ29vcmQ7XG4gICAgICAgICAgY29uc3Qgc2hpMyA9IFNoaXAoXG4gICAgICAgICAgICBzaGlwVGhyZWUuWFksXG4gICAgICAgICAgICBzaGlwVGhyZWUuc2hpcExlbmdodCxcbiAgICAgICAgICAgIHNoaXBUaHJlZS5hbGlnbixcbiAgICAgICAgICApO1xuICAgICAgICAgIHNoaXAzU3VuayA9IHNoaTMuaXNTdW5rKHNoaXAsIGhpdENvb3JkKTtcbiAgICAgICAgICBzaGlwM0Nvb3JkID0gc2hpMy5zaGlwQ29vcmQ7XG4gICAgICAgICAgY29uc3Qgc2hpMiA9IFNoaXAoc2hpcFR3by5YWSwgc2hpcFR3by5zaGlwTGVuZ2h0LCBzaGlwVHdvLmFsaWduKTtcbiAgICAgICAgICBzaGlwMlN1bmsgPSBzaGkyLmlzU3VuayhzaGlwLCBoaXRDb29yZCk7XG4gICAgICAgICAgc2hpcDJDb29yZCA9IHNoaTIuc2hpcENvb3JkO1xuICAgICAgICAgIGNvbnN0IHNoaTEgPSBTaGlwKHNoaXBPbmUuWFksIHNoaXBPbmUuc2hpcExlbmdodCwgc2hpcE9uZS5hbGlnbik7XG4gICAgICAgICAgc2hpcDFTdW5rID0gc2hpMS5pc1N1bmsoc2hpcCwgaGl0Q29vcmQpO1xuICAgICAgICAgIHNoaXAxQ29vcmQgPSBzaGkxLnNoaXBDb29yZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhpdENvb3JkLFxuICAgICAgc2hpcDVTdW5rLFxuICAgICAgc2hpcDRTdW5rLFxuICAgICAgc2hpcDNTdW5rLFxuICAgICAgc2hpcDJTdW5rLFxuICAgICAgc2hpcDFTdW5rLFxuICAgICAgc2hpcDVDb29yZCxcbiAgICAgIHNoaXA0Q29vcmQsXG4gICAgICBzaGlwM0Nvb3JkLFxuICAgICAgc2hpcDJDb29yZCxcbiAgICAgIHNoaXAxQ29vcmQsXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgY29uc3QgW3NoaXA1LCBzaGlwNCwgc2hpcDMsIHNoaXAyLCBzaGlwMV0gPSBBcnIuZmxhdCgpO1xuICAgIGlmIChzaGlwNS5sZW5ndGggPT09IDBcbiAgICAmJiBzaGlwNC5sZW5ndGggPT09IDBcbiAgICAmJiBzaGlwMy5sZW5ndGggPT09IDBcbiAgICAmJiBzaGlwMi5sZW5ndGggPT09IDBcbiAgICAmJiBzaGlwMS5sZW5ndGggPT09IDBcbiAgICApIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIEFycixcbiAgICBib2FyZCxcbiAgICBzaGlwQXJyLFxuICAgIGFsaWduU2hpcCxcbiAgICBhbGxTaGlwc1N1bmssXG4gICAgcG9zaXRpb25TaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gIH07XG59XG5cbmV4cG9ydCB7R2FtZWJvYXJkfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5mdW5jdGlvbiBnZXRTaGlwQ29vcmRpbmF0ZXMoYXJyYXksIGxlbmd0aCwgYWxpZ24pIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSB8fCBhcnJheS5sZW5ndGggPCAyKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IHNoaXBDb29yZGluYXRlcyA9IFthcnJheV07XG4gIGlmIChhbGlnbiA9PT0gXCJYXCIpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaChbYXJyYXlbMF0sIGFycmF5WzFdICsgaV0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaChbYXJyYXlbMF0gKyBpLCBhcnJheVsxXV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2hpcENvb3JkaW5hdGVzO1xufVxuXG5leHBvcnQge2dldFNoaXBDb29yZGluYXRlc307XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXR1cm4tYXNzaWduICovXG5pbXBvcnQge3NoaXBBeGlzfSBmcm9tIFwiLi9zaHAtYXhpc1wiO1xuXG5mdW5jdGlvbiBwbGFjZVBsYXllclNoaXBzKEFyciwgYm9hcmQsIHNoaXBBcnIsIGluZGV4LCBhbGlnbikge1xuICBsZXQgc2hpcExlbmdodDtcbiAgY29uc3QgYXNzaWduVmFsdWUgPSAodmFsdWUpID0+IChzaGlwTGVuZ2h0ID0gdmFsdWUpO1xuICBpZiAoQXJyLmxlbmd0aCA+IDQpIHJldHVybjtcbiAgYXNzaWduTGVuZ3RoVG9TaGlwcyhBcnIsIGFzc2lnblZhbHVlKTtcbiAgcGxhY2VTaGlwcyhpbmRleCwgc2hpcExlbmdodCwgYWxpZ24sIGJvYXJkLCBBcnIsIHNoaXBBcnIpO1xufVxuXG5mdW5jdGlvbiBwbGFjZUNvbXB1dGVyU2hpcHMoQXJyLCBib2FyZCwgc2hpcEFycikge1xuICBjb25zdCBhbGlnbkFyciA9IFtcIlhcIiwgXCJZXCJdO1xuICBsZXQgc2hpcExlbmdodDtcbiAgY29uc3QgYXNzaWduVmFsdWUgPSAodmFsdWUpID0+IChzaGlwTGVuZ2h0ID0gdmFsdWUpO1xuICB3aGlsZSAoQXJyLmxlbmd0aCA8IDUpIHtcbiAgICBhc3NpZ25MZW5ndGhUb1NoaXBzKEFyciwgYXNzaWduVmFsdWUpO1xuICAgIGNvbnN0IGFsaWduSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhbGlnbkFyci5sZW5ndGgpO1xuICAgIGNvbnN0IGFsaWduID0gYWxpZ25BcnJbYWxpZ25JbmRleF07XG4gICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgIHBsYWNlU2hpcHMoaW5kZXgsIHNoaXBMZW5naHQsIGFsaWduLCBib2FyZCwgQXJyLCBzaGlwQXJyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NpZ25MZW5ndGhUb1NoaXBzKEFyciwgYXNzaWduVmFsdWUpIHtcbiAgaWYgKEFyci5sZW5ndGggPT09IDApIGFzc2lnblZhbHVlKDUpO1xuICBpZiAoQXJyLmxlbmd0aCA9PT0gMSkgYXNzaWduVmFsdWUoNCk7XG4gIGlmIChBcnIubGVuZ3RoID09PSAyKSBhc3NpZ25WYWx1ZSgzKTtcbiAgaWYgKEFyci5sZW5ndGggPT09IDMpIGFzc2lnblZhbHVlKDMpO1xuICBpZiAoQXJyLmxlbmd0aCA9PT0gNCkgYXNzaWduVmFsdWUoMik7XG59XG5cbmZ1bmN0aW9uIHBsYWNlU2hpcHMoaW5kZXgsIHNoaXBMZW5naHQsIGFsaWduLCBib2FyZCwgQXJyLCBzaGlwQXJyKSB7XG4gIGNvbnN0IGF4aXMgPSBgJHtpbmRleH1gLnNwbGl0KFwiXCIpO1xuICBpZiAoYXhpcy5sZW5ndGggPT09IDEpIGF4aXMudW5zaGlmdChcIjBcIik7XG4gIGNvbnN0IHNoaXBDb29yZCA9IHNoaXBBeGlzKHNoaXBMZW5naHQsICtheGlzWzBdLCArYXhpc1sxXSwgc2hpcExlbmdodCwgYWxpZ24sIGJvYXJkKTtcbiAgaWYgKHNoaXBDb29yZC5sZW5ndGggIT09IDApIHtcbiAgICBBcnIucHVzaChzaGlwQ29vcmQpO1xuICAgIHNoaXBBcnIucHVzaCh7IFhZOiBbK2F4aXNbMF0sICtheGlzWzFdXSwgYWxpZ24sIHNoaXBMZW5naHQgfSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgcGxhY2VQbGF5ZXJTaGlwcywgcGxhY2VDb21wdXRlclNoaXBzIH07XG4iLCJpbXBvcnQgeyBzaG93U2hpcHNPbkJvYXJkIH0gZnJvbSBcIi4vZG9tLWludGVyYWN0aW9ucy9wbGFjZS1zaGlwXCI7XG5pbXBvcnQgeyBzdG9wSGVyZSwgdmFsaWRTaG90cyB9IGZyb20gXCIuL2RvbS1pbnRlcmFjdGlvbnMvcGxheWVyLXZzLWNvbXB1dGVyXCI7XG5cbmxldCBjb3VudCA9IDA7XG5sZXQgY291bnQyID0gMDtcbmxldCB0aW1lID0gMTtcblxuLyoqIENoZWNrcyBmb3IgdmFsaWQgc2hvdHMgb24gc2hpcHMgKi9cbmZ1bmN0aW9uIHBsYXllcihjbGFzc05hbWUsIGNsYXNzTmFtZTIpIHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjbGFzc05hbWV9YCk7XG4gIGNvbnN0IHBsYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NsYXNzTmFtZTJ9YCk7XG4gIGNvbnN0IFtyZWNlaXZlQXR0YWNrLCBBcnIsIGFsbFNoaXBzU3Vua10gPSBzaG93U2hpcHNPbkJvYXJkLmNhbGwoXG4gICAgcGxhWzBdLFxuICAgIGNsYXNzTmFtZTJcbiAgKTtcbiAgY29uc3QgYWRkTGlzdGVuZXJUb0dyaWQgPSAoZ3JpZCwgaW5kZXgpID0+XG4gICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgc2hvdHMuYmluZChcbiAgICAgICAgbnVsbCxcbiAgICAgICAgQXJyLFxuICAgICAgICBncmlkLFxuICAgICAgICBpbmRleCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgcGxheWVyQm9hcmQsXG4gICAgICAgIGFsbFNoaXBzU3Vua1xuICAgICAgKVxuICAgICk7XG4gIHBsYXllckJvYXJkLmZvckVhY2goYWRkTGlzdGVuZXJUb0dyaWQpO1xufVxuXG4vKiogU2hvdHMgYnkgcGxheWVyICovXG5mdW5jdGlvbiBzaG90cyhBcnIsIGdyaWQsIGluZGV4LCByZWNlaXZlQXR0YWNrLCBwbGF5ZXJCb2FyZCwgYWxsU2hpcHNTdW5rKSB7XG4gIGNvbnN0IHBsYXllcjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcjEtYm9hcmRcIik7XG4gIGNvbnN0IHBsYXllcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcjItYm9hcmRcIik7XG4gIGNvbnN0IHBsYXllck5hbWUxID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBsYXllck5hbWVcIikpO1xuICBjb25zdCBwbGF5ZXJOYW1lMiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwbGF5ZXIyTmFtZVwiKSk7XG4gIGNvbnN0IGluc3RydWN0aW9uMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5zdHJ1Y3Rpb24yXCIpO1xuXG4gIGlmIChBcnJheS5mcm9tKGdyaWQuY2xhc3NMaXN0KS5pbmNsdWRlcyhcInNob3RzXCIpKSByZXR1cm47XG4gIGlmIChncmlkLmNsYXNzTGlzdFswXSA9PT0gXCJwbGF5ZXIxLWdyaWRcIiAmJiBBcnIubGVuZ3RoID49IDUpIHtcbiAgICBpZiAoY291bnQgPj0gMSAmJiB0aW1lID09PSAwKSB7XG4gICAgICBpZiAoQXJyYXkuZnJvbShwbGF5ZXIxLmNsYXNzTGlzdCkuaW5jbHVkZXMoXCJoaWRlXCIpKSByZXR1cm47XG4gICAgICBpZiAoQXJyYXkuZnJvbShwbGF5ZXIyLmNsYXNzTGlzdCkuaW5jbHVkZXMoXCJoaWRlXCIpKSByZXR1cm47XG4gICAgICBpZiAoc3RvcEhlcmUgPT09IDEpIHJldHVybjtcbiAgICAgIGluc3RydWN0aW9uMi50ZXh0Q29udGVudCA9IGAke3BsYXllck5hbWUxfSwgdGFrZSB5b3VyIHNob3QuYDtcbiAgICAgIHZhbGlkU2hvdHMoZ3JpZCwgaW5kZXgsIHJlY2VpdmVBdHRhY2ssIHBsYXllckJvYXJkLCBhbGxTaGlwc1N1bmssIGluc3RydWN0aW9uMiwgcGxheWVyTmFtZTIpO1xuICAgIH1cbiAgICB0aW1lID0gMTtcbiAgICBjb3VudCArPSAxO1xuICB9XG4gIGlmIChncmlkLmNsYXNzTGlzdFswXSA9PT0gXCJwbGF5ZXIyLWdyaWRcIiAmJiBBcnIubGVuZ3RoID49IDUpIHtcbiAgICBpZiAoY291bnQyID49IDEgJiYgdGltZSA9PT0gMSkge1xuICAgICAgaWYgKEFycmF5LmZyb20ocGxheWVyMS5jbGFzc0xpc3QpLmluY2x1ZGVzKFwiaGlkZVwiKSkgcmV0dXJuO1xuICAgICAgaWYgKEFycmF5LmZyb20ocGxheWVyMi5jbGFzc0xpc3QpLmluY2x1ZGVzKFwiaGlkZVwiKSkgcmV0dXJuO1xuICAgICAgaW5zdHJ1Y3Rpb24yLnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZTJ9LCB0YWtlIHlvdXIgc2hvdC5gO1xuICAgICAgdmFsaWRTaG90cyhncmlkLCBpbmRleCwgcmVjZWl2ZUF0dGFjaywgcGxheWVyQm9hcmQsIGFsbFNoaXBzU3VuaywgaW5zdHJ1Y3Rpb24yLCBwbGF5ZXJOYW1lMSk7XG4gICAgfVxuICAgIHRpbWUgPSAwO1xuICAgIGNvdW50MiArPSAxO1xuICB9XG59XG5cbmZ1bmN0aW9uIGh1bWFuUGxheWVycygpIHtcbiAgcGxheWVyKFwicGxheWVyMS1ncmlkXCIsIFwicGxheWVyMS1ncmlkXCIpO1xuICBwbGF5ZXIoXCJwbGF5ZXIyLWdyaWRcIiwgXCJwbGF5ZXIyLWdyaWRcIik7XG59XG5cbmV4cG9ydCB7IGh1bWFuUGxheWVycyB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbmltcG9ydCB7Z2V0U2hpcENvb3JkaW5hdGVzfSBmcm9tIFwiLi9nZXRTaGlwQ29vcmRpbmF0ZXNcIjtcblxuZnVuY3Rpb24gU2hpcChhcnJheSwgbGVuZ3RoLCBhbGlnbikge1xuICBjb25zdCBzaGlwQ29vcmQgPSBnZXRTaGlwQ29vcmRpbmF0ZXMoYXJyYXksIGxlbmd0aCwgYWxpZ24pO1xuICBpZiAoIUFycmF5LmlzQXJyYXkoc2hpcENvb3JkKSAmJiAhc2hpcENvb3JkLmxlbmd0aCA+IDApIHJldHVybiBmYWxzZTtcbiAgY29uc3QgaXNTdW5rID0gKGNvb3JkLCBoaXRDb29yZCkgPT4ge1xuICAgIGZvciAoY29uc3QgWFkgb2Ygc2hpcENvb3JkKSB7XG4gICAgICBpZiAoaGl0Q29vcmQuam9pbihcIlwiKSA9PT0gWFkuam9pbihcIlwiKSkgaWYgKGNvb3JkLmxlbmd0aCA8PSAwKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGNvb3JkLmxlbmd0aDtcbiAgfTtcbiAgcmV0dXJuIHsgc2hpcENvb3JkLCBpc1N1bmsgfTtcbn1cblxuZXhwb3J0IHtTaGlwfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5pbXBvcnQge1NoaXB9IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7Y2hlY2tWYWxpZE1vdmV9IGZyb20gXCIuL3ZhbGlkLW1vdmVcIjtcblxuZnVuY3Rpb24gc2hpcEF4aXMobnVtLCB4LCB5LCBsZW5ndGgsIGFsaWduLCBib2FyZCwgcmVjZWl2ZUF0dGFjaykge1xuICBjb25zdCBzaGlwID0gU2hpcChbeCwgeV0sIGxlbmd0aCwgYWxpZ24sIHJlY2VpdmVBdHRhY2spLnNoaXBDb29yZDtcbiAgY29uc3Qgc2hpcENvb3JkcyA9IGNoZWNrVmFsaWRNb3ZlKG51bSwgc2hpcCwgYm9hcmQpO1xuICBjb25zdCBhcnJheUNvb3JkID0gW107XG5cbiAgYXJyYXlDb29yZC5wdXNoKHNoaXBDb29yZHMpO1xuICBhcnJheUNvb3JkLmZvckVhY2goKGNvb3JkLCBpbmRleCkgPT4ge1xuICAgIGlmICghY29vcmQpIGFycmF5Q29vcmQuc3BsaWNlKGluZGV4LCAxKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGFycmF5Q29vcmQ7XG59XG5cbmV4cG9ydCB7c2hpcEF4aXN9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cbmxldCBjb3VudGVyID0gMDtcbmZ1bmN0aW9uIGNoZWNrVmFsaWRNb3ZlKG51bSwgc2hpcCwgYm9hcmRBcnJheSkge1xuICBsZXQgbnVtQ29weSA9IG51bTtcbiAgY29uc3QgZG9tQm9hcmRBcnJyYXkgPSBbXTtcbiAgaWYgKCFzaGlwKSByZXR1cm4gZmFsc2U7XG4gIGZvciAobGV0IGkgPSBzaGlwLmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgaWYgKFxuICAgICAgK3NoaXBbaV1bMF0gPiA5IHx8XG4gICAgICArc2hpcFtpXVsxXSA+IDkgfHxcbiAgICAgIGJvYXJkQXJyYXlbK3NoaXBbaV1bMF1dWytzaGlwW2ldWzFdXSAhPT0gMFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBpZiAobnVtID09IDMpIGNvdW50ZXIrKztcbiAgaWYgKGNvdW50ZXIgPT09IDIpIG51bUNvcHkgPSA2O1xuICBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKFxuICAgICAgYm9hcmRBcnJheVsrc2hpcFtpXVswXV1bK3NoaXBbaV1bMV1dID09PSAyIHx8XG4gICAgICBib2FyZEFycmF5WytzaGlwW2ldWzBdXVsrc2hpcFtpXVsxXV0gPT09IDMgfHxcbiAgICAgIGJvYXJkQXJyYXlbK3NoaXBbaV1bMF1dWytzaGlwW2ldWzFdXSA9PT0gNCB8fFxuICAgICAgYm9hcmRBcnJheVsrc2hpcFtpXVswXV1bK3NoaXBbaV1bMV1dID09PSA1XG4gICAgKVxuICAgICAgcmV0dXJuO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGJvYXJkQXJyYXlbK3NoaXBbaV1bMF1dWytzaGlwW2ldWzFdXSA9IG51bUNvcHk7XG4gICAgZG9tQm9hcmRBcnJyYXkucHVzaChgJHtzaGlwW2ldWzBdfSR7c2hpcFtpXVsxXX1gKTtcbiAgfVxuXG4gIGlmIChjb3VudGVyID09PSAyKSBjb3VudGVyID0gMDtcblxuICByZXR1cm4gZG9tQm9hcmRBcnJyYXk7XG59XG5cbmV4cG9ydCB7IGNoZWNrVmFsaWRNb3ZlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyByZW5kZXJHZXROYW1lUGFnZSB9IGZyb20gXCIuL21vZHVsZXMvZG9tLWludGVyYWN0aW9ucy9wYWdlLWdldC1uYW1lXCI7XG5pbXBvcnQgXCIuL21vZHVsZXMvc3R5bGUvc3R5bGUuY3NzXCI7XG5cbnJlbmRlckdldE5hbWVQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=