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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  align-items: center;\n  background: radial-gradient(circle at 100%,\n      #341406e8,\n      #333 50%,\n      #0f1017 75%,\n      #123 75%);\n}\n\nheader {\n  width: -webkit-fill-available;\n}\n\n.header {\n  border: 0ch;\n}\n\nh1 {\n  text-align: center;\n  font-size: 8rem;\n  color: #715f36;\n  text-shadow: 3px -7px 5px black;\n}\n\n.h1 {\n  font-size: 4rem;\n}\n\n.instruction2 {\n  color: aqua;\n  text-transform: uppercase;\n}\n\n.input-div,\n.game-over-div {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 100px;\n}\n\n.game-over-div {\n  margin-top: 65px;\n}\n\n.align-ships {\n  text-align: center;\n  position: relative;\n}\n\nlabel {\n  font-size: xx-large;\n  color: aquamarine;\n}\n\ninput {\n  padding: 15px;\n  border-radius: 10px;\n}\n\n.second-input {\n  position: relative;\n}\n\n.start-btn {\n  width: fit-content;\n  padding: 15px;\n  align-self: center;\n}\n\n.choose-div {\n  margin-top: 100px;\n  text-align: center;\n}\n\n.choose-div>p {\n  font-size: 2rem;\n  text-transform: capitalize;\n  color: aquamarine;\n}\n\n.btn-div {\n  text-align: center;\n  margin-top: 10px;\n}\n\n.play-human {\n  margin-left: 20px;\n}\n\n.play-ai,\n.play-human,\n.btn-restart,\n.start-btn {\n  width: 100px;\n  padding: 15px 0;\n  font-weight: bolder;\n}\n\n.axis-btn {\n  margin-top: 10px;\n  padding: 8px;\n  font-weight: bolder;\n  width: 90px;\n}\n\n.align-ships>button {\n  margin-top: 10px;\n  padding: 8px;\n  font-weight: bolder;\n  width: 90px;\n}\n\n.btn-restart {\n  margin: auto;\n}\n\n.game-over {\n  font-size: xxx-large;\n  color: #c3cbeb;\n  text-shadow: 3px -7px 5px black;\n}\n\n.winner,\n.name {\n  font-size: xx-large;\n  color: cadetblue;\n  margin-top: -15px;\n  text-shadow: 0px -5px 5px;\n}\n\n.game-over-div {\n  text-align: center;\n}\n\n.board-container {\n  display: flex;\n  margin: auto;\n  flex-wrap: wrap;\n  width: 100%;\n  justify-content: space-between;\n  gap: 20px;\n}\n\n.player1-board,\n.player2-board {\n  backdrop-filter: brightness(0.7);\n  padding: 1px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  gap: 1px;\n  width: 450px;\n  height: 450px;\n  margin: auto;\n  border: 1px solid #f2f2f2;\n  box-shadow: 7px 5px 9px 2px;\n}\n\n.player1-grid,\n.player2-grid {\n  border: 1px solid #f8f8f8;\n}\n\n.player1-grid:hover,\n.player2-grid:hover {\n  background-color: rgb(255, 183, 183);\n}\n\n.red:hover {\n  background-color: red;\n}\n\n.grey {\n  background-color: rgb(255, 183, 183) !important;\n}\n\n.hide {\n  position: absolute;\n  visibility: hidden;\n}\n\n.show {\n  position: relative;\n  visibility: visible;\n}\n\n.ship {\n  background-color: #00ffff70 !important;\n}\n\n.shots {\n  border-radius: 40px;\n  background-color: white !important;\n}\n\n.valid-shot {\n  background-color: red !important;\n}\n\n.sunk-ship {\n  background-color: blue !important;\n}\n\nfooter {\n  padding: 15px;\n  margin-top: auto;\n  text-align: center;\n  background-color: #bba7a7;\n  width: -webkit-fill-available;\n}", "",{"version":3,"sources":["webpack://./src/modules/style/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,mBAAmB;EACnB;;;;eAIa;AACf;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,cAAc;EACd,+BAA+B;AACjC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,yBAAyB;AAC3B;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,0BAA0B;EAC1B,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;;;EAIE,YAAY;EACZ,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,oBAAoB;EACpB,cAAc;EACd,+BAA+B;AACjC;;AAEA;;EAEE,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,eAAe;EACf,WAAW;EACX,8BAA8B;EAC9B,SAAS;AACX;;AAEA;;EAEE,gCAAgC;EAChC,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,yBAAyB;EACzB,2BAA2B;AAC7B;;AAEA;;EAEE,yBAAyB;AAC3B;;AAEA;;EAEE,oCAAoC;AACtC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,+CAA+C;AACjD;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,mBAAmB;EACnB,kCAAkC;AACpC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,kBAAkB;EAClB,yBAAyB;EACzB,6BAA6B;AAC/B","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  align-items: center;\n  background: radial-gradient(circle at 100%,\n      #341406e8,\n      #333 50%,\n      #0f1017 75%,\n      #123 75%);\n}\n\nheader {\n  width: -webkit-fill-available;\n}\n\n.header {\n  border: 0ch;\n}\n\nh1 {\n  text-align: center;\n  font-size: 8rem;\n  color: #715f36;\n  text-shadow: 3px -7px 5px black;\n}\n\n.h1 {\n  font-size: 4rem;\n}\n\n.instruction2 {\n  color: aqua;\n  text-transform: uppercase;\n}\n\n.input-div,\n.game-over-div {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 100px;\n}\n\n.game-over-div {\n  margin-top: 65px;\n}\n\n.align-ships {\n  text-align: center;\n  position: relative;\n}\n\nlabel {\n  font-size: xx-large;\n  color: aquamarine;\n}\n\ninput {\n  padding: 15px;\n  border-radius: 10px;\n}\n\n.second-input {\n  position: relative;\n}\n\n.start-btn {\n  width: fit-content;\n  padding: 15px;\n  align-self: center;\n}\n\n.choose-div {\n  margin-top: 100px;\n  text-align: center;\n}\n\n.choose-div>p {\n  font-size: 2rem;\n  text-transform: capitalize;\n  color: aquamarine;\n}\n\n.btn-div {\n  text-align: center;\n  margin-top: 10px;\n}\n\n.play-human {\n  margin-left: 20px;\n}\n\n.play-ai,\n.play-human,\n.btn-restart,\n.start-btn {\n  width: 100px;\n  padding: 15px 0;\n  font-weight: bolder;\n}\n\n.axis-btn {\n  margin-top: 10px;\n  padding: 8px;\n  font-weight: bolder;\n  width: 90px;\n}\n\n.align-ships>button {\n  margin-top: 10px;\n  padding: 8px;\n  font-weight: bolder;\n  width: 90px;\n}\n\n.btn-restart {\n  margin: auto;\n}\n\n.game-over {\n  font-size: xxx-large;\n  color: #c3cbeb;\n  text-shadow: 3px -7px 5px black;\n}\n\n.winner,\n.name {\n  font-size: xx-large;\n  color: cadetblue;\n  margin-top: -15px;\n  text-shadow: 0px -5px 5px;\n}\n\n.game-over-div {\n  text-align: center;\n}\n\n.board-container {\n  display: flex;\n  margin: auto;\n  flex-wrap: wrap;\n  width: 100%;\n  justify-content: space-between;\n  gap: 20px;\n}\n\n.player1-board,\n.player2-board {\n  backdrop-filter: brightness(0.7);\n  padding: 1px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  gap: 1px;\n  width: 450px;\n  height: 450px;\n  margin: auto;\n  border: 1px solid #f2f2f2;\n  box-shadow: 7px 5px 9px 2px;\n}\n\n.player1-grid,\n.player2-grid {\n  border: 1px solid #f8f8f8;\n}\n\n.player1-grid:hover,\n.player2-grid:hover {\n  background-color: rgb(255, 183, 183);\n}\n\n.red:hover {\n  background-color: red;\n}\n\n.grey {\n  background-color: rgb(255, 183, 183) !important;\n}\n\n.hide {\n  position: absolute;\n  visibility: hidden;\n}\n\n.show {\n  position: relative;\n  visibility: visible;\n}\n\n.ship {\n  background-color: #00ffff70 !important;\n}\n\n.shots {\n  border-radius: 40px;\n  background-color: white !important;\n}\n\n.valid-shot {\n  background-color: red !important;\n}\n\n.sunk-ship {\n  background-color: blue !important;\n}\n\nfooter {\n  padding: 15px;\n  margin-top: auto;\n  text-align: center;\n  background-color: #bba7a7;\n  width: -webkit-fill-available;\n}"],"sourceRoot":""}]);
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
  const name = (0,_helper_function__WEBPACK_IMPORTED_MODULE_2__.createDomElement)("p", { class: "name1" });
  const axisBtn = (0,_helper_function__WEBPACK_IMPORTED_MODULE_2__.createDomElement)("button", { class: "axis-btn" });

  const continueBtn = (0,_helper_function__WEBPACK_IMPORTED_MODULE_2__.createDomElement)("button", {
    class: "continue-btn hide",
  });
  const playName = JSON.parse(localStorage.getItem("playerName"));
  instruction2.textContent = `${playName}, Place Your Ships.`;
  playAi.textContent = "PLAY AI";
  playHuman.textContent = "PLAY HUMAN";
  axisBtn.textContent = "Horizontal";
  continueBtn.textContent = "Next";
  btnDiv.append(playAi, playHuman);
  alignShipDiv.append(instruction2, axisBtn, continueBtn);
  name.textContent = `Hello ${playerName},`;
  instruction.textContent = "Choose Your Enemy.";
  chooseDiv.append(name, instruction, btnDiv);
  continueBtn.addEventListener("click", () => {
    lengthOfShip = 5;
    counter = 5;
  });
  const changeAxis = () =>
    (axisBtn.textContent =
      axisBtn.textContent === "Horizontal" ? "Vertical" : "Horizontal");
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
      if (axisBtn && axisBtn.textContent === "Horizontal") {
        index1 = `${axis[0]}${axis[1]}`;
        index2 = `${axis[0]}${+axis[1] + 1}`;
        index3 = `${axis[0]}${+axis[1] + 2}`;
        index4 = `${axis[0]}${+axis[1] + 3}`;
        index5 = `${axis[0]}${+axis[1] + 4}`;
        playerBoard[+index1].classList.add("red");
      }
      if (axisBtn && axisBtn.textContent === "Vertical") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0E2RTtBQUMxQzs7QUFFbkMsMEZBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3N0eWxlL3N0eWxlLmNzcz83NGQwIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzLzJkLWFycmF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20taW50ZXJhY3Rpb25zL2Nob29zZS1wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS1pbnRlcmFjdGlvbnMvZG9tLWdhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLWludGVyYWN0aW9ucy9nZXQtcGxheWVyLW5hbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS1pbnRlcmFjdGlvbnMvaGVscGVyLWZ1bmN0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20taW50ZXJhY3Rpb25zL25hbWUtaW5wdXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS1pbnRlcmFjdGlvbnMvcGFnZS1mb290ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS1pbnRlcmFjdGlvbnMvcGFnZS1nZXQtbmFtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLWludGVyYWN0aW9ucy9wYWdlLWhlYWRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLWludGVyYWN0aW9ucy9wbGFjZS1zaGlwLXJhbmRvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLWludGVyYWN0aW9ucy9wbGFjZS1zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20taW50ZXJhY3Rpb25zL3BsYXllci12cy1jb21wdXRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nZXRTaGlwQ29vcmRpbmF0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYWNlU2hpcHNPbkJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NocC1heGlzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy92YWxpZC1tb3ZlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDEwMCUsXFxuICAgICAgIzM0MTQwNmU4LFxcbiAgICAgICMzMzMgNTAlLFxcbiAgICAgICMwZjEwMTcgNzUlLFxcbiAgICAgICMxMjMgNzUlKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJvcmRlcjogMGNoO1xcbn1cXG5cXG5oMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDhyZW07XFxuICBjb2xvcjogIzcxNWYzNjtcXG4gIHRleHQtc2hhZG93OiAzcHggLTdweCA1cHggYmxhY2s7XFxufVxcblxcbi5oMSB7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbi5pbnN0cnVjdGlvbjIge1xcbiAgY29sb3I6IGFxdWE7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4uaW5wdXQtZGl2LFxcbi5nYW1lLW92ZXItZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcbi5nYW1lLW92ZXItZGl2IHtcXG4gIG1hcmdpbi10b3A6IDY1cHg7XFxufVxcblxcbi5hbGlnbi1zaGlwcyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICBjb2xvcjogYXF1YW1hcmluZTtcXG59XFxuXFxuaW5wdXQge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5zZWNvbmQtaW5wdXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc3RhcnQtYnRuIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jaG9vc2UtZGl2IHtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2hvb3NlLWRpdj5wIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcblxcbi5idG4tZGl2IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5wbGF5LWh1bWFuIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4ucGxheS1haSxcXG4ucGxheS1odW1hbixcXG4uYnRuLXJlc3RhcnQsXFxuLnN0YXJ0LWJ0biB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4uYXhpcy1idG4ge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICB3aWR0aDogOTBweDtcXG59XFxuXFxuLmFsaWduLXNoaXBzPmJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIHdpZHRoOiA5MHB4O1xcbn1cXG5cXG4uYnRuLXJlc3RhcnQge1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uZ2FtZS1vdmVyIHtcXG4gIGZvbnQtc2l6ZTogeHh4LWxhcmdlO1xcbiAgY29sb3I6ICNjM2NiZWI7XFxuICB0ZXh0LXNoYWRvdzogM3B4IC03cHggNXB4IGJsYWNrO1xcbn1cXG5cXG4ud2lubmVyLFxcbi5uYW1lIHtcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICBjb2xvcjogY2FkZXRibHVlO1xcbiAgbWFyZ2luLXRvcDogLTE1cHg7XFxuICB0ZXh0LXNoYWRvdzogMHB4IC01cHggNXB4O1xcbn1cXG5cXG4uZ2FtZS1vdmVyLWRpdiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ucGxheWVyMS1ib2FyZCxcXG4ucGxheWVyMi1ib2FyZCB7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJyaWdodG5lc3MoMC43KTtcXG4gIHBhZGRpbmc6IDFweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdhcDogMXB4O1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgaGVpZ2h0OiA0NTBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMmYyZjI7XFxuICBib3gtc2hhZG93OiA3cHggNXB4IDlweCAycHg7XFxufVxcblxcbi5wbGF5ZXIxLWdyaWQsXFxuLnBsYXllcjItZ3JpZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZjhmOGY4O1xcbn1cXG5cXG4ucGxheWVyMS1ncmlkOmhvdmVyLFxcbi5wbGF5ZXIyLWdyaWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTgzLCAxODMpO1xcbn1cXG5cXG4ucmVkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmdyZXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTgzLCAxODMpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5oaWRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnNob3cge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZmZmZjcwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zaG90cyB7XFxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcXG59XFxuXFxuLnZhbGlkLXNob3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zdW5rLXNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJhN2E3O1xcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tb2R1bGVzL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQjs7OztlQUlhO0FBQ2Y7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7RUFJRSxZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsK0JBQStCO0FBQ2pDOztBQUVBOztFQUVFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsU0FBUztBQUNYOztBQUVBOztFQUVFLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxRQUFRO0VBQ1IsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLDJCQUEyQjtBQUM3Qjs7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDEwMCUsXFxuICAgICAgIzM0MTQwNmU4LFxcbiAgICAgICMzMzMgNTAlLFxcbiAgICAgICMwZjEwMTcgNzUlLFxcbiAgICAgICMxMjMgNzUlKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJvcmRlcjogMGNoO1xcbn1cXG5cXG5oMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDhyZW07XFxuICBjb2xvcjogIzcxNWYzNjtcXG4gIHRleHQtc2hhZG93OiAzcHggLTdweCA1cHggYmxhY2s7XFxufVxcblxcbi5oMSB7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbi5pbnN0cnVjdGlvbjIge1xcbiAgY29sb3I6IGFxdWE7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4uaW5wdXQtZGl2LFxcbi5nYW1lLW92ZXItZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcbi5nYW1lLW92ZXItZGl2IHtcXG4gIG1hcmdpbi10b3A6IDY1cHg7XFxufVxcblxcbi5hbGlnbi1zaGlwcyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICBjb2xvcjogYXF1YW1hcmluZTtcXG59XFxuXFxuaW5wdXQge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5zZWNvbmQtaW5wdXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc3RhcnQtYnRuIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jaG9vc2UtZGl2IHtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2hvb3NlLWRpdj5wIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcblxcbi5idG4tZGl2IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5wbGF5LWh1bWFuIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4ucGxheS1haSxcXG4ucGxheS1odW1hbixcXG4uYnRuLXJlc3RhcnQsXFxuLnN0YXJ0LWJ0biB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4uYXhpcy1idG4ge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICB3aWR0aDogOTBweDtcXG59XFxuXFxuLmFsaWduLXNoaXBzPmJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIHdpZHRoOiA5MHB4O1xcbn1cXG5cXG4uYnRuLXJlc3RhcnQge1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uZ2FtZS1vdmVyIHtcXG4gIGZvbnQtc2l6ZTogeHh4LWxhcmdlO1xcbiAgY29sb3I6ICNjM2NiZWI7XFxuICB0ZXh0LXNoYWRvdzogM3B4IC03cHggNXB4IGJsYWNrO1xcbn1cXG5cXG4ud2lubmVyLFxcbi5uYW1lIHtcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICBjb2xvcjogY2FkZXRibHVlO1xcbiAgbWFyZ2luLXRvcDogLTE1cHg7XFxuICB0ZXh0LXNoYWRvdzogMHB4IC01cHggNXB4O1xcbn1cXG5cXG4uZ2FtZS1vdmVyLWRpdiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ucGxheWVyMS1ib2FyZCxcXG4ucGxheWVyMi1ib2FyZCB7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJyaWdodG5lc3MoMC43KTtcXG4gIHBhZGRpbmc6IDFweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdhcDogMXB4O1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgaGVpZ2h0OiA0NTBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMmYyZjI7XFxuICBib3gtc2hhZG93OiA3cHggNXB4IDlweCAycHg7XFxufVxcblxcbi5wbGF5ZXIxLWdyaWQsXFxuLnBsYXllcjItZ3JpZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZjhmOGY4O1xcbn1cXG5cXG4ucGxheWVyMS1ncmlkOmhvdmVyLFxcbi5wbGF5ZXIyLWdyaWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTgzLCAxODMpO1xcbn1cXG5cXG4ucmVkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmdyZXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTgzLCAxODMpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5oaWRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnNob3cge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZmZmZjcwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zaG90cyB7XFxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcXG59XFxuXFxuLnZhbGlkLXNob3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zdW5rLXNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJhN2E3O1xcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gY3JlYXRlMkRBcnJheShudW0pIHtcbiAgY29uc3QgYm9hcmQgPSBuZXcgQXJyYXkobnVtKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgYm9hcmRbaV0gPSBuZXcgQXJyYXkobnVtKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJvYXJkW2ldLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBib2FyZFtpXVtqXSA9IDA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJvYXJkO1xufVxuXG5leHBvcnQge2NyZWF0ZTJEQXJyYXl9O1xuIiwiaW1wb3J0IHsgaHVtYW5QbGF5ZXJzIH0gZnJvbSBcIi4uL3BsYXllclwiO1xuaW1wb3J0IHsgY3JlYXRlR2FtZWJvYXJkIH0gZnJvbSBcIi4vZG9tLWdhbWVib2FyZFwiO1xuaW1wb3J0IHsgY3JlYXRlRG9tRWxlbWVudCB9IGZyb20gXCIuL2hlbHBlci1mdW5jdGlvblwiO1xuaW1wb3J0IHsgY3JlYXRlSW5wdXRFbGVtIH0gZnJvbSBcIi4vbmFtZS1pbnB1dFwiO1xuaW1wb3J0IHsgcGxheWVyU2hvdHMgfSBmcm9tIFwiLi9wbGF5ZXItdnMtY29tcHV0ZXJcIjtcblxubGV0IGxlbmd0aE9mU2hpcCA9IDU7XG5sZXQgY291bnRlciA9IDU7XG5cbmZ1bmN0aW9uIGNob29zZVBsYXllcihwbGF5ZXJOYW1lKSB7XG4gIGNvbnN0IGNob29zZURpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJjaG9vc2UtZGl2XCIgfSk7XG4gIGNvbnN0IGJ0bkRpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJidG4tZGl2XCIgfSk7XG4gIGNvbnN0IHBsYXlBaSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJidXR0b25cIiwgeyBjbGFzczogXCJwbGF5LWFpXCIgfSk7XG4gIGNvbnN0IHBsYXlIdW1hbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJidXR0b25cIiwgeyBjbGFzczogXCJwbGF5LWh1bWFuXCIgfSk7XG4gIGNvbnN0IGluc3RydWN0aW9uID0gY3JlYXRlRG9tRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGFsaWduU2hpcERpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJhbGlnbi1zaGlwc1wiIH0pO1xuICBjb25zdCBpbnN0cnVjdGlvbjIgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcImluc3RydWN0aW9uMlwiIH0pO1xuICBjb25zdCBuYW1lID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJuYW1lMVwiIH0pO1xuICBjb25zdCBheGlzQnRuID0gY3JlYXRlRG9tRWxlbWVudChcImJ1dHRvblwiLCB7IGNsYXNzOiBcImF4aXMtYnRuXCIgfSk7XG5cbiAgY29uc3QgY29udGludWVCdG4gPSBjcmVhdGVEb21FbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICBjbGFzczogXCJjb250aW51ZS1idG4gaGlkZVwiLFxuICB9KTtcbiAgY29uc3QgcGxheU5hbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGxheWVyTmFtZVwiKSk7XG4gIGluc3RydWN0aW9uMi50ZXh0Q29udGVudCA9IGAke3BsYXlOYW1lfSwgUGxhY2UgWW91ciBTaGlwcy5gO1xuICBwbGF5QWkudGV4dENvbnRlbnQgPSBcIlBMQVkgQUlcIjtcbiAgcGxheUh1bWFuLnRleHRDb250ZW50ID0gXCJQTEFZIEhVTUFOXCI7XG4gIGF4aXNCdG4udGV4dENvbnRlbnQgPSBcIkhvcml6b250YWxcIjtcbiAgY29udGludWVCdG4udGV4dENvbnRlbnQgPSBcIk5leHRcIjtcbiAgYnRuRGl2LmFwcGVuZChwbGF5QWksIHBsYXlIdW1hbik7XG4gIGFsaWduU2hpcERpdi5hcHBlbmQoaW5zdHJ1Y3Rpb24yLCBheGlzQnRuLCBjb250aW51ZUJ0bik7XG4gIG5hbWUudGV4dENvbnRlbnQgPSBgSGVsbG8gJHtwbGF5ZXJOYW1lfSxgO1xuICBpbnN0cnVjdGlvbi50ZXh0Q29udGVudCA9IFwiQ2hvb3NlIFlvdXIgRW5lbXkuXCI7XG4gIGNob29zZURpdi5hcHBlbmQobmFtZSwgaW5zdHJ1Y3Rpb24sIGJ0bkRpdik7XG4gIGNvbnRpbnVlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGVuZ3RoT2ZTaGlwID0gNTtcbiAgICBjb3VudGVyID0gNTtcbiAgfSk7XG4gIGNvbnN0IGNoYW5nZUF4aXMgPSAoKSA9PlxuICAgIChheGlzQnRuLnRleHRDb250ZW50ID1cbiAgICAgIGF4aXNCdG4udGV4dENvbnRlbnQgPT09IFwiSG9yaXpvbnRhbFwiID8gXCJWZXJ0aWNhbFwiIDogXCJIb3Jpem9udGFsXCIpO1xuICBheGlzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VBeGlzKTtcbiAgcGxheUFpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJjbGlja1wiLFxuICAgIGluc2VydEJvYXJkLmJpbmQobnVsbCwgYWxpZ25TaGlwRGl2LCBjaG9vc2VEaXYsIHBsYXllclNob3RzKVxuICApO1xuICBwbGF5SHVtYW4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImNsaWNrXCIsXG4gICAgcGxheWVyMk5hbWUuYmluZChudWxsLCBjaG9vc2VEaXYsIGh1bWFuUGxheWVycywgYWxpZ25TaGlwRGl2KVxuICApO1xuICByZXR1cm4gY2hvb3NlRGl2O1xufVxuZnVuY3Rpb24gaW5zZXJ0Qm9hcmQoYWxpZ25TaGlwRGl2LCBjaG9vc2VEaXYsIHBsYXllclNob3QpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpO1xuICBjb25zdCBoZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcbiAgY29uc3QgeyBib2FyZENvbnRhaW5lciB9ID0gY3JlYXRlR2FtZWJvYXJkKCk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaDFcIik7XG4gIGhlYWQuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoYWxpZ25TaGlwRGl2LCBjaG9vc2VEaXYpO1xuICBkb2N1bWVudC5ib2R5LnJlcGxhY2VDaGlsZChib2FyZENvbnRhaW5lciwgY2hvb3NlRGl2KTtcbiAgYWRkSG92ZXIoXCIucGxheWVyMS1ncmlkXCIpO1xuICBhZGRIb3ZlcihcIi5wbGF5ZXIyLWdyaWRcIik7XG4gIHBsYXllclNob3QoKTtcbn1cbmZ1bmN0aW9uIGFkZEhvdmVyKGNsYXNzTmFtZSkge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2xhc3NOYW1lKTtcbiAgcGxheWVyQm9hcmQuZm9yRWFjaChwbGFjZVNoaXBIb3Zlcik7XG4gIGZ1bmN0aW9uIHBsYWNlU2hpcEhvdmVyKGdyaWQsIGluZGV4KSB7XG4gICAgY29uc3QgYXhpcyA9IGAke2luZGV4fWAuc3BsaXQoXCJcIik7XG4gICAgaWYgKGF4aXMubGVuZ3RoID09PSAxKSBheGlzLnVuc2hpZnQoXCIwXCIpO1xuICAgIGNvbnN0IGluZGV4QXJyID0gW107XG4gICAgY29uc3QgcmVtb3ZlSG92ZXJFZmZlY3QgPSAoaW5kZXgpID0+IHtcbiAgICAgIGlmIChwbGF5ZXJCb2FyZCkgcGxheWVyQm9hcmRbK2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKFwiZ3JleVwiKTtcbiAgICB9O1xuICAgIGNvbnN0IGVtcHR5SW5kZXhBcnIgPSAoKSA9PiB7XG4gICAgICBpbmRleEFyci5mb3JFYWNoKHJlbW92ZUhvdmVyRWZmZWN0KTtcbiAgICAgIGluZGV4QXJyLnNwbGljZSgwKTtcbiAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcInJlZFwiKTtcbiAgICB9O1xuICAgIGNvbnN0IHNldFNoaXBMZW5ndGggPSAoKSA9PiB7XG4gICAgICBpZiAoQXJyYXkuZnJvbShncmlkLmNsYXNzTGlzdCkuaW5jbHVkZXMoXCJncmV5XCIpKSB7XG4gICAgICAgIGNvdW50ZXItLTtcbiAgICAgICAgaWYgKGNvdW50ZXIgPT09IDQpIGxlbmd0aE9mU2hpcCA9IDQ7XG4gICAgICAgIGlmIChjb3VudGVyID09PSAzKSBsZW5ndGhPZlNoaXAgPSAzO1xuICAgICAgICBpZiAoY291bnRlciA9PT0gMikgbGVuZ3RoT2ZTaGlwID0gMztcbiAgICAgICAgaWYgKGNvdW50ZXIgPT09IDEpIGxlbmd0aE9mU2hpcCA9IDI7XG4gICAgICAgIGlmIChjb3VudGVyID09PSAwKSBsZW5ndGhPZlNoaXAgPSAwO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgYWRkVG9JbmRleEFyciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGF4aXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF4aXMtYnRuXCIpO1xuICAgICAgbGV0IGluZGV4MSwgaW5kZXgyLCBpbmRleDMsIGluZGV4NCwgaW5kZXg1O1xuICAgICAgaWYgKGF4aXNCdG4gJiYgYXhpc0J0bi50ZXh0Q29udGVudCA9PT0gXCJIb3Jpem9udGFsXCIpIHtcbiAgICAgICAgaW5kZXgxID0gYCR7YXhpc1swXX0ke2F4aXNbMV19YDtcbiAgICAgICAgaW5kZXgyID0gYCR7YXhpc1swXX0keytheGlzWzFdICsgMX1gO1xuICAgICAgICBpbmRleDMgPSBgJHtheGlzWzBdfSR7K2F4aXNbMV0gKyAyfWA7XG4gICAgICAgIGluZGV4NCA9IGAke2F4aXNbMF19JHsrYXhpc1sxXSArIDN9YDtcbiAgICAgICAgaW5kZXg1ID0gYCR7YXhpc1swXX0keytheGlzWzFdICsgNH1gO1xuICAgICAgICBwbGF5ZXJCb2FyZFsraW5kZXgxXS5jbGFzc0xpc3QuYWRkKFwicmVkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGF4aXNCdG4gJiYgYXhpc0J0bi50ZXh0Q29udGVudCA9PT0gXCJWZXJ0aWNhbFwiKSB7XG4gICAgICAgIGluZGV4MSA9IGAke2F4aXNbMF19JHtheGlzWzFdfWA7XG4gICAgICAgIGluZGV4MiA9IGAkeytgJHtheGlzWzBdfSR7YXhpc1sxXX1gICsgMTB9YDtcbiAgICAgICAgaW5kZXgzID0gYCR7K2Ake2F4aXNbMF19JHtheGlzWzFdfWAgKyAyMH1gO1xuICAgICAgICBpbmRleDQgPSBgJHsrYCR7YXhpc1swXX0ke2F4aXNbMV19YCArIDMwfWA7XG4gICAgICAgIGluZGV4NSA9IGAkeytgJHtheGlzWzBdfSR7YXhpc1sxXX1gICsgNDB9YDtcbiAgICAgICAgcGxheWVyQm9hcmRbK2luZGV4MV0uY2xhc3NMaXN0LmFkZChcInJlZFwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxlbmd0aE9mU2hpcCA9PT0gNSkge1xuICAgICAgICBhZGRPbmx5VmFsaWRTcGFjZShpbmRleDEsIGluZGV4QXJyLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAgIGFkZE9ubHlWYWxpZFNwYWNlKGluZGV4MiwgaW5kZXhBcnIsIHBsYXllckJvYXJkKTtcbiAgICAgICAgYWRkT25seVZhbGlkU3BhY2UoaW5kZXgzLCBpbmRleEFyciwgcGxheWVyQm9hcmQpO1xuICAgICAgICBhZGRPbmx5VmFsaWRTcGFjZShpbmRleDQsIGluZGV4QXJyLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAgIGFkZE9ubHlWYWxpZFNwYWNlKGluZGV4NSwgaW5kZXhBcnIsIHBsYXllckJvYXJkKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleDEgJiYgbGVuZ3RoT2ZTaGlwID09PSA0KSB7XG4gICAgICAgIGFkZE9ubHlWYWxpZFNwYWNlKGluZGV4MSwgaW5kZXhBcnIsIHBsYXllckJvYXJkKTtcbiAgICAgICAgYWRkT25seVZhbGlkU3BhY2UoaW5kZXgyLCBpbmRleEFyciwgcGxheWVyQm9hcmQpO1xuICAgICAgICBhZGRPbmx5VmFsaWRTcGFjZShpbmRleDMsIGluZGV4QXJyLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAgIGFkZE9ubHlWYWxpZFNwYWNlKGluZGV4NCwgaW5kZXhBcnIsIHBsYXllckJvYXJkKTtcbiAgICAgIH1cbiAgICAgIGlmIChsZW5ndGhPZlNoaXAgPT09IDMpIHtcbiAgICAgICAgYWRkT25seVZhbGlkU3BhY2UoaW5kZXgxLCBpbmRleEFyciwgcGxheWVyQm9hcmQpO1xuICAgICAgICBhZGRPbmx5VmFsaWRTcGFjZShpbmRleDIsIGluZGV4QXJyLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAgIGFkZE9ubHlWYWxpZFNwYWNlKGluZGV4MywgaW5kZXhBcnIsIHBsYXllckJvYXJkKTtcbiAgICAgIH1cbiAgICAgIGlmIChsZW5ndGhPZlNoaXAgPT09IDIpIHtcbiAgICAgICAgYWRkT25seVZhbGlkU3BhY2UoaW5kZXgxLCBpbmRleEFyciwgcGxheWVyQm9hcmQpO1xuICAgICAgICBhZGRPbmx5VmFsaWRTcGFjZShpbmRleDIsIGluZGV4QXJyLCBwbGF5ZXJCb2FyZCk7XG4gICAgICB9XG4gICAgICBjb25zdCBhZGRIb3ZlckVmZmVjdCA9IChpbmRleCkgPT5cbiAgICAgICAgcGxheWVyQm9hcmRbK2luZGV4XS5jbGFzc0xpc3QuYWRkKFwiZ3JleVwiKTtcbiAgICAgIGxldCBjb3VudGVyMiA9IGNvdW50ZXI7XG4gICAgICBpZiAoY291bnRlciA8PSAyKSBjb3VudGVyMiA9IGNvdW50ZXIgKyAxO1xuICAgICAgaWYgKGluZGV4QXJyLmxlbmd0aCA9PT0gY291bnRlcjIpIHtcbiAgICAgICAgaW5kZXhBcnIuZm9yRWFjaChhZGRIb3ZlckVmZmVjdCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZXRTaGlwTGVuZ3RoKTtcbiAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGFkZFRvSW5kZXhBcnIpO1xuICAgIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZW1wdHlJbmRleEFycik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkT25seVZhbGlkU3BhY2UoaW5kZXgsIGluZGV4QXJyLCBwbGF5ZXJCb2FyZCkge1xuICBpZiAoaW5kZXggJiYgaW5kZXgubGVuZ3RoID09PSAyKSBpbmRleEFyci5wdXNoKGluZGV4KTtcbiAgaWYgKFxuICAgIHBsYXllckJvYXJkWytpbmRleF0gJiZcbiAgICBBcnJheS5mcm9tKHBsYXllckJvYXJkWytpbmRleF0uY2xhc3NMaXN0KS5pbmNsdWRlcyhcInNoaXBcIilcbiAgKVxuICAgIGluZGV4QXJyLnBvcCgpO1xufVxuXG5mdW5jdGlvbiBwbGF5ZXIyTmFtZShjaG9vc2VEaXYsIHBsYXllclNob3QsIGFsaWduU2hpcERpdikge1xuICBjb25zdCB7IGlucHV0RGl2LCBzdGFydEJ0biwgbmFtZUlucHV0IH0gPSBjcmVhdGVJbnB1dEVsZW0oXG4gICAgXCJFbnRlciBIdW1hbiBOYW1lXCIsXG4gICAgXCJDb250aW51ZVwiXG4gICk7XG4gIGRvY3VtZW50LmJvZHkucmVwbGFjZUNoaWxkKGlucHV0RGl2LCBjaG9vc2VEaXYpO1xuICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwiY2xpY2tcIixcbiAgICBwbGF5ZXIxQm9hcmQuYmluZChudWxsLCBuYW1lSW5wdXQsIGlucHV0RGl2LCBwbGF5ZXJTaG90LCBhbGlnblNoaXBEaXYpXG4gICk7XG59XG5mdW5jdGlvbiBwbGF5ZXIxQm9hcmQobmFtZUlucHV0LCBpbnB1dERpdiwgcGxheWVyU2hvdCwgYWxpZ25TaGlwRGl2KSB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwic2Vjb25kLWlucHV0XCIpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInBsYXllcjJOYW1lXCIsIEpTT04uc3RyaW5naWZ5KGAke25hbWVJbnB1dC52YWx1ZX1gKSk7XG4gIGluc2VydEJvYXJkKGFsaWduU2hpcERpdiwgaW5wdXREaXYsIHBsYXllclNob3QpO1xufVxuXG5leHBvcnQgeyBjaG9vc2VQbGF5ZXIgfTtcbiIsImltcG9ydCB7Y3JlYXRlRG9tRWxlbWVudH0gZnJvbSBcIi4vaGVscGVyLWZ1bmN0aW9uXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUdhbWVib2FyZCgpIHtcbiAgY29uc3QgYm9hcmRDb250YWluZXIgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiYm9hcmQtY29udGFpbmVyXCIgfSk7XG4gIGNvbnN0IGdyaWRzID0gKHBsYXllciwgcGxheWVyR3JpZCkgPT4ge1xuICAgIGNvbnN0IHNxdWFyZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogcGxheWVyIH0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGdyaWQgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IHBsYXllckdyaWQgfSk7XG4gICAgICBzcXVhcmUuYXBwZW5kQ2hpbGQoZ3JpZCk7XG4gICAgfVxuICAgIHJldHVybiBzcXVhcmU7XG4gIH07XG4gIGJvYXJkQ29udGFpbmVyLmFwcGVuZChcbiAgICBncmlkcyhcInBsYXllcjEtYm9hcmRcIiwgXCJwbGF5ZXIxLWdyaWQgc3BhY2VcIiksXG4gICAgZ3JpZHMoXCJwbGF5ZXIyLWJvYXJkIGhpZGVcIiwgXCJwbGF5ZXIyLWdyaWQgc3BhY2VcIiksXG4gICk7XG4gIHJldHVybiB7IGJvYXJkQ29udGFpbmVyIH07XG59XG5cbmV4cG9ydCB7Y3JlYXRlR2FtZWJvYXJkfTtcbiIsImltcG9ydCB7Y2hvb3NlUGxheWVyfSBmcm9tIFwiLi9jaG9vc2UtcGxheWVyXCI7XG5pbXBvcnQge2NyZWF0ZUlucHV0RWxlbX0gZnJvbSBcIi4vbmFtZS1pbnB1dFwiO1xuXG5mdW5jdGlvbiBnZXROYW1lKG5hbWVEZXRhaWxzKSB7XG4gIGNvbnN0IHsgaW5wdXREaXYsIHN0YXJ0QnRuLCBuYW1lSW5wdXQgfSA9IGNyZWF0ZUlucHV0RWxlbShcbiAgICBuYW1lRGV0YWlscyxcbiAgICBcIlNUQVJUIEdBTUVcIixcbiAgKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoaW5wdXREaXYpO1xuICBnZXRJbnB1dFZhbHVlKHN0YXJ0QnRuLCBuYW1lSW5wdXQpO1xufVxuXG5mdW5jdGlvbiBnZXRJbnB1dFZhbHVlKHN0YXJ0QnRuLCBuYW1lSW5wdXQpIHtcbiAgY29uc3QgZ2V0TmFtZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtZGl2XCIpO1xuICBjb25zdCByZXBsYWNlTmFtZURpdiA9ICgpID0+IHtcbiAgICBjb25zdCBjaG9vc2VEaXYgPSBjaG9vc2VQbGF5ZXIobmFtZUlucHV0LnZhbHVlKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlcGxhY2VDaGlsZChjaG9vc2VEaXYsIGdldE5hbWVEaXYpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicGxheWVyTmFtZVwiLCBKU09OLnN0cmluZ2lmeShgJHtuYW1lSW5wdXQudmFsdWV9YCkpO1xuICB9O1xuICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVwbGFjZU5hbWVEaXYpO1xufVxuXG5leHBvcnQgeyBnZXROYW1lIH07XG4iLCJmdW5jdGlvbiBjcmVhdGVEb21FbGVtZW50KHR5cGUsIGF0dHJpYnV0ZXMpIHtcbiAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKTtcbiAgaWYgKGF0dHJpYnV0ZXMgPT0gbnVsbCkgcmV0dXJuIG5ld0VsZW1lbnQ7XG4gIHNldEF0dHJpYnV0ZXMobmV3RWxlbWVudCwgYXR0cmlidXRlcyk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gIH0pO1xufVxuXG5leHBvcnQge2NyZWF0ZURvbUVsZW1lbnR9O1xuIiwiaW1wb3J0IHtjcmVhdGVEb21FbGVtZW50fSBmcm9tIFwiLi9oZWxwZXItZnVuY3Rpb25cIjtcblxuZnVuY3Rpb24gY3JlYXRlSW5wdXRFbGVtKG5hbWVEZXRhaWxzLCBidG5OYW1lKSB7XG4gIGNvbnN0IGlucHV0RGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImlucHV0LWRpdlwiIH0pO1xuICBjb25zdCBsYWJlbCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJsYWJlbFwiLCB7IGZvcjogXCJuYW1lXCIgfSk7XG4gIGNvbnN0IG5hbWVJbnB1dCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gICAgaWQ6IFwibmFtZVwiLFxuICAgIHR5cGU6IFwidGV4dFwiLFxuICAgIHBsYWNlaG9sZGVyOiBcIkxldGFtXCIsXG4gIH0pO1xuICBjb25zdCBlcnJvck1zZyA9IGNyZWF0ZURvbUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3M6IFwiZXJyb3ItbXNnXCIgfSk7XG4gIGNvbnN0IHN0YXJ0QnRuID0gY3JlYXRlRG9tRWxlbWVudChcImJ1dHRvblwiLCB7IGNsYXNzOiBcInN0YXJ0LWJ0blwiIH0pO1xuXG4gIGxhYmVsLnRleHRDb250ZW50ID0gbmFtZURldGFpbHM7XG4gIHN0YXJ0QnRuLnRleHRDb250ZW50ID0gYnRuTmFtZTtcbiAgaW5wdXREaXYuYXBwZW5kKGxhYmVsLCBuYW1lSW5wdXQsIGVycm9yTXNnLCBzdGFydEJ0bik7XG4gIHJldHVybiB7IGlucHV0RGl2LCBzdGFydEJ0biwgbmFtZUlucHV0IH07XG59XG5cbmV4cG9ydCB7Y3JlYXRlSW5wdXRFbGVtfTtcbiIsImltcG9ydCB7Y3JlYXRlRG9tRWxlbWVudH0gZnJvbSBcIi4vaGVscGVyLWZ1bmN0aW9uXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gY3JlYXRlRG9tRWxlbWVudChcImZvb3RlclwiKTtcbiAgY29uc3QgYW5jaG9yTGluayA9IGNyZWF0ZURvbUVsZW1lbnQoXCJhXCIsIHtcbiAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9JQW1Zb3VuZ2Jvc3N5L2JhdHRsZXNoaXBcIixcbiAgfSk7XG4gIGNvbnN0IGdpdEh1Ykljb24gPSBjcmVhdGVEb21FbGVtZW50KFwiaVwiLCB7IGNsYXNzOiBcImZhIGZhLWdpdGh1YlwiIH0pO1xuICBhbmNob3JMaW5rLmFwcGVuZENoaWxkKGdpdEh1Ykljb24pO1xuICBmb290ZXIuYXBwZW5kKFwiQ29weXJpZ2h0IFxcdTAwQTkgMjAyMiBJQW1Zb3VuZ2Jvc3N5XCIsIFwiICBcIiwgYW5jaG9yTGluayk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuZXhwb3J0ICB7Y3JlYXRlRm9vdGVyfTtcbiIsImltcG9ydCB7IGNyZWF0ZUZvb3RlciB9IGZyb20gXCIuL3BhZ2UtZm9vdGVyXCI7XG5pbXBvcnQgeyBnZXROYW1lIH0gZnJvbSBcIi4vZ2V0LXBsYXllci1uYW1lXCI7XG5pbXBvcnQgeyBjcmVhdGVIZWFkZXIgfSBmcm9tIFwiLi9wYWdlLWhlYWRlclwiO1xuaW1wb3J0IHsgY3JlYXRlRG9tRWxlbWVudCB9IGZyb20gXCIuL2hlbHBlci1mdW5jdGlvblwiO1xuXG5mdW5jdGlvbiByZW5kZXJHZXROYW1lUGFnZSgpIHtcbiAgY3JlYXRlSGVhZGVyKFwicGFnZS1vbmUtaGVhZGVyXCIpO1xuICBnZXROYW1lKFwiRW50ZXIgUGxheWVyJ3MgTmFtZTpcIik7XG4gIGNyZWF0ZUZvb3RlcigpO1xufVxuXG5mdW5jdGlvbiBhbm5vdW5jZVdpbm5lcihwbGF5ZXJOYW1lKSB7XG4gIGNvbnN0IGdhbWVPdmVyRGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImdhbWUtb3Zlci1kaXZcIiB9KTtcbiAgY29uc3QgZ2FtZU92ZXIgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcImdhbWUtb3ZlclwiIH0pO1xuICBjb25zdCB3aW5uZXIgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcIndpbm5lclwiIH0pO1xuICBjb25zdCBuYW1lID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJuYW1lXCIgfSk7XG4gIGNvbnN0IHJlc3RhcnRCdG4gPSBjcmVhdGVEb21FbGVtZW50KFwiYnV0dG9uXCIsIHsgY2xhc3M6IFwiYnRuLXJlc3RhcnRcIiB9KTtcbiAgcmVzdGFydEJ0bi50ZXh0Q29udGVudCA9IFwiUkVTVEFSVFwiO1xuICBnYW1lT3Zlci50ZXh0Q29udGVudCA9IFwiR0FNRSBPVkVSXCI7XG4gIG5hbWUudGV4dENvbnRlbnQgPSBwbGF5ZXJOYW1lO1xuICB3aW5uZXIudGV4dENvbnRlbnQgPSBcIlRoZSBXaW5uZXIgSXNcIjtcbiAgZ2FtZU92ZXJEaXYuYXBwZW5kKGdhbWVPdmVyLCB3aW5uZXIsIG5hbWUsIHJlc3RhcnRCdG4pO1xuICByZW5kZXJHZXROYW1lUGFnZSgpO1xuICBjb25zdCBnZXROYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC1kaXZcIik7XG4gIGRvY3VtZW50LmJvZHkucmVwbGFjZUNoaWxkKGdhbWVPdmVyRGl2LCBnZXROYW1lRGl2KTtcbn1cblxuZnVuY3Rpb24gcmVzdGFydCgpIHtcbiAgY29uc3QgcmVzdGFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGFsaWduRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGlnbi1zaGlwc1wiKTtcbiAgY29uc3QgYWxpZ25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRpbnVlLWJ0blwiKTtcbiAgY29uc3QgYXhpc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXhpcy1idG5cIik7XG4gIGFsaWduRGl2LnJlcGxhY2VDaGlsZChyZXN0YXJ0LCBhbGlnbkJ0bik7XG4gIHJlc3RhcnQudGV4dENvbnRlbnQgPSBcIlJlc3RhcnRcIjtcbiAgaWYgKGF4aXNCdG4pIGF4aXNCdG4ucmVtb3ZlKCk7XG4gIHJlc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlcmVuZGVyR2V0TmFtZVBhZ2UpO1xufVxuXG5mdW5jdGlvbiByZXJlbmRlckdldE5hbWVQYWdlKCkge1xuICB3aGlsZSAoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKVxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgcmVuZGVyR2V0TmFtZVBhZ2UoKTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyR2V0TmFtZVBhZ2UsIHJlc3RhcnQsIGFubm91bmNlV2lubmVyIH07XG4iLCJpbXBvcnQge2NyZWF0ZURvbUVsZW1lbnR9IGZyb20gXCIuL2hlbHBlci1mdW5jdGlvblwiO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGdhbWVUaXRsZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJoMVwiLCB7IGNsYXNzOiBjbGFzc05hbWUgfSk7XG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZURvbUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IHsgYm9keSB9ID0gZG9jdW1lbnQ7XG4gIGdhbWVUaXRsZS50ZXh0Q29udGVudCA9IFwiQkFUVExFU0hJUFwiO1xuICBoZWFkZXIuYXBwZW5kKGdhbWVUaXRsZSk7XG4gIGJvZHkuYXBwZW5kKGhlYWRlcik7XG59XG5cbmV4cG9ydCB7Y3JlYXRlSGVhZGVyfTtcbiIsImltcG9ydCB7R2FtZWJvYXJkfSBmcm9tIFwiLi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBwbGFjZUNvbXB1dGVyU2hpcHMgfSBmcm9tIFwiLi4vcGxhY2VTaGlwc09uQm9hcmRcIjtcblxuZnVuY3Rpb24gc2hvd1NoaXBzUmFuZG9tbHkoKSB7XG4gIGNvbnN0IHtcbiAgICBwb3NpdGlvblNoaXAsIHJlY2VpdmVBdHRhY2ssIGFsbFNoaXBzU3VuaywgQXJyLFxuICB9ID0gR2FtZWJvYXJkKHBsYWNlQ29tcHV0ZXJTaGlwcyk7XG4gIHBvc2l0aW9uU2hpcCgpO1xuICByZXR1cm4geyByZWNlaXZlQXR0YWNrLCBhbGxTaGlwc1N1bmssIEFyciB9O1xufVxuXG5leHBvcnQge3Nob3dTaGlwc1JhbmRvbWx5fTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5pbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBwbGFjZVBsYXllclNoaXBzIH0gZnJvbSBcIi4uL3BsYWNlU2hpcHNPbkJvYXJkXCI7XG5pbXBvcnQgeyByZXN0YXJ0IH0gZnJvbSBcIi4vcGFnZS1nZXQtbmFtZVwiO1xuXG4vKiogR2V0cyBzaGlwcyBjb29yZGluYXRlcyBmcm9tIEdhbWVib2FyZCBhbmQgZGlzcGxheSBpbiBET00gKi9cbmZ1bmN0aW9uIHNob3dTaGlwc09uQm9hcmQoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGFsaWduID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5heGlzLWJ0blwiKTtcbiAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NsYXNzTmFtZX1gKTtcbiAgY29uc3QgaW5zdHJ1Y3Rpb24yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnN0cnVjdGlvbjJcIik7XG4gIGNvbnN0IHsgYm9hcmQsIHBvc2l0aW9uU2hpcCwgYWxpZ25TaGlwLCByZWNlaXZlQXR0YWNrLCBhbGxTaGlwc1N1bmssIEFyciB9ID1cbiAgICBHYW1lYm9hcmQocGxhY2VQbGF5ZXJTaGlwcyk7XG5cbiAgaWYgKHRoaXMuY2xhc3NMaXN0ICYmIHRoaXMuY2xhc3NMaXN0WzBdID09PSBcInBsYXllcjEtZ3JpZFwiKSB7XG4gICAgY29uc3QgcGxheWVyTmFtZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwbGF5ZXJOYW1lXCIpKTtcbiAgICBpbnN0cnVjdGlvbjIudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJOYW1lfSwgUGxhY2UgWW91ciBTaGlwcy5gO1xuICB9XG5cbiAgY29uc3QgYWRkTGlzdGVuZXIgPSAoc3F1YXJlLCBpbmRleCkgPT4ge1xuICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgYWRkQmdDb2xvci5iaW5kKFxuICAgICAgICB0aGlzLFxuICAgICAgICBpbmRleCxcbiAgICAgICAgcG9zaXRpb25TaGlwLFxuICAgICAgICBib2FyZCxcbiAgICAgICAgc3F1YXJlcyxcbiAgICAgICAgQXJyLFxuICAgICAgICBpbnN0cnVjdGlvbjJcbiAgICAgIClcbiAgICApO1xuICB9O1xuICBhbGlnbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWxpZ25TaGlwKTtcbiAgc3F1YXJlcy5mb3JFYWNoKGFkZExpc3RlbmVyLmJpbmQodGhpcykpO1xuICByZXR1cm4gW3JlY2VpdmVBdHRhY2ssIEFyciwgYWxsU2hpcHNTdW5rXTtcbn1cblxuLyoqIEFkZHMgYmFja2dyb3VuZCBjb2xvdXIgZm9yIG1pc3NlZCBzaG90cyAqL1xuZnVuY3Rpb24gYWRkQmdDb2xvcihpbmRleCwgcG9zaXRpb25TaGlwLCBib2FyZCwgc3F1YXJlcywgQXJyLCBpbnN0cnVjdGlvbjIpIHtcbiAgY29uc3QgcGxheWVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyMS1ib2FyZFwiKTtcbiAgY29uc3QgcGxheWVyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyMi1ib2FyZFwiKTtcbiAgcG9zaXRpb25TaGlwKGluZGV4KTtcbiAgYm9hcmQuZmxhdCgpLmZvckVhY2goKGl0ZW0sIGluZGV4MikgPT4ge1xuICAgIGlmIChpdGVtID09PSAyIHx8IGl0ZW0gPT09IDMgfHwgaXRlbSA9PT0gNCB8fCBpdGVtID09PSA1IHx8IGl0ZW0gPT09IDYpXG4gICAgICBzcXVhcmVzW2luZGV4Ml0uY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgaWYgKGl0ZW0gPT09IDIpIHNxdWFyZXNbaW5kZXgyXS5jbGFzc0xpc3QuYWRkKFwic2hpcDJcIik7XG4gICAgaWYgKGl0ZW0gPT09IDMpIHNxdWFyZXNbaW5kZXgyXS5jbGFzc0xpc3QuYWRkKFwic2hpcDNcIik7XG4gICAgaWYgKGl0ZW0gPT09IDYpIHNxdWFyZXNbaW5kZXgyXS5jbGFzc0xpc3QuYWRkKFwic2hpcDZcIik7XG4gICAgaWYgKGl0ZW0gPT09IDQpIHNxdWFyZXNbaW5kZXgyXS5jbGFzc0xpc3QuYWRkKFwic2hpcDRcIik7XG4gICAgaWYgKGl0ZW0gPT09IDUpIHNxdWFyZXNbaW5kZXgyXS5jbGFzc0xpc3QuYWRkKFwic2hpcDVcIik7XG4gIH0pO1xuXG4gIGlmIChwbGF5ZXIxLmNsYXNzTGlzdFsxXSA9PT0gXCJoaWRlXCIgfHwgcGxheWVyMi5jbGFzc0xpc3RbMV0gPT09IFwiaGlkZVwiKSB7XG4gICAgaWYgKEFyci5sZW5ndGggPT09IDUgJiYgdGhpcyA9PT0gZG9jdW1lbnQpIHNob3dFbmVteVdhdGVyKCk7XG4gICAgZWxzZSBpZiAoQXJyLmxlbmd0aCA9PT0gNSkge1xuICAgICAgaWYgKHRoaXMuY2xhc3NMaXN0WzBdID09PSBcInBsYXllcjItZ3JpZFwiKVxuICAgICAgICBpbnN0cnVjdGlvbjIudGV4dENvbnRlbnQgPSBcIkNMSUNLIE9OIE5FWFQgVE8gU1RBUlQgUExBWUlOR1wiO1xuICAgICAgaWYgKHRoaXMuY2xhc3NMaXN0WzBdID09PSBcInBsYXllcjEtZ3JpZFwiKVxuICAgICAgICBpbnN0cnVjdGlvbjIudGV4dENvbnRlbnQgPSBcIkNMSUNLIE9OIE5FWFQgVE8gQ09OVElOVUVcIjtcbiAgICAgIHNob3dFbmVteS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChBcnJheS5mcm9tKHBsYXllcjEuY2xhc3NMaXN0KS5pbmNsdWRlcyhcImhpZGVcIikpIHJldHVybjtcbiAgaWYgKEFycmF5LmZyb20ocGxheWVyMi5jbGFzc0xpc3QpLmluY2x1ZGVzKFwiaGlkZVwiKSkgcmV0dXJuO1xuICBpZiAoQXJyLmxlbmd0aCA9PT0gNSAmJiB0aGlzICE9PSBkb2N1bWVudCkge1xuICAgIGJvYXJkLmZsYXQoKS5mb3JFYWNoKChpdGVtLCBpbmRleDIpID0+IHtcbiAgICAgIGlmIChpdGVtID09PSAyIHx8IGl0ZW0gPT09IDMgfHwgaXRlbSA9PT0gNCB8fCBpdGVtID09PSA1IHx8IGl0ZW0gPT09IDYpXG4gICAgICAgIHNxdWFyZXNbaW5kZXgyXS5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFwiKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93RW5lbXkoKSB7XG4gIGNvbnN0IHBsYXllck5hbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGxheWVyMk5hbWVcIikpO1xuICBjb25zdCBpbnN0cnVjdGlvbjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluc3RydWN0aW9uMlwiKTtcbiAgY29uc3QgcGxheWVyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyMi1ib2FyZFwiKTtcbiAgY29uc3QgcGxheWVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyMS1ib2FyZFwiKTtcbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyMS1ncmlkXCIpO1xuICBjb25zdCB7IHN0YXJ0QnRuLCBjb250aW51ZUJ0biB9ID0gY3JlYXRlUGxheUJ0bigpO1xuICBjb250aW51ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgc3RhcnRCdG4uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG5cbiAgY29uc3Qgc2hvd1NoaXBzID0gKCkgPT4ge1xuICAgIGluc3RydWN0aW9uMi50ZXh0Q29udGVudCA9IGAke3BsYXllck5hbWV9LCBQbGFjZSBZb3VyIFNoaXBzLmA7XG4gICAgcGxheWVyMi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICBwbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgIGNvbnRpbnVlQnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgIHN0YXJ0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuXG4gICAgZ3JpZC5mb3JFYWNoKChzcXIpID0+IHtcbiAgICAgIGlmIChBcnJheS5mcm9tKHNxci5jbGFzc0xpc3QpLmluY2x1ZGVzKFwic2hpcFwiKSlcbiAgICAgICAgc3FyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwXCIpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNob3dTaGlwczIgPSAoKSA9PiB7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyMi1ncmlkXCIpO1xuICAgIGdyaWQuZm9yRWFjaCgoc3FyKSA9PiB7XG4gICAgICBpZiAoQXJyYXkuZnJvbShzcXIuY2xhc3NMaXN0KS5pbmNsdWRlcyhcInNoaXBcIikpXG4gICAgICAgIHNxci5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFwiKTtcbiAgICB9KTtcbiAgICBpbnN0cnVjdGlvbjIudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJOYW1lfSwgdGFrZSBhIHNob3QuYDtcbiAgICBwbGF5ZXIxLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIHJlc3RhcnQoKTtcbiAgfTtcblxuICBpZiAodGhpcy5jbGFzc0xpc3RbMF0gPT09IFwicGxheWVyMS1ncmlkXCIpXG4gICAgY29udGludWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dTaGlwcyk7XG4gIGlmICh0aGlzLmNsYXNzTGlzdFswXSA9PT0gXCJwbGF5ZXIyLWdyaWRcIilcbiAgICBjb250aW51ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1NoaXBzMik7XG59XG5cbmZ1bmN0aW9uIHNob3dFbmVteVdhdGVyKCkge1xuICBjb25zdCBwbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcjItYm9hcmRcIik7XG4gIGNvbnN0IHsgc3RhcnRCdG4sIGluc3RydWN0aW9uIH0gPSBjcmVhdGVQbGF5QnRuKCk7XG4gIGluc3RydWN0aW9uLnRleHRDb250ZW50ID0gXCJDTElDSyBQTEFZIFRPIFNUQVJUIFBMQVlJTkdcIjtcbiAgc3RhcnRCdG4udGV4dENvbnRlbnQgPSBcIlBsYXlcIjtcbiAgY29uc3Qgc2hvd1NoaXBzID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllck5hbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGxheWVyTmFtZVwiKSk7XG4gICAgcGxheWVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIGluc3RydWN0aW9uLnRleHRDb250ZW50ID0gYFdhaXRpbmcgZm9yICR7cGxheWVyTmFtZX0ncyBzaG90YDtcbiAgICByZXN0YXJ0KCk7XG4gIH07XG4gIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93U2hpcHMpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQbGF5QnRuKCkge1xuICBjb25zdCBzaGlwQXhpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxpZ24tc2hpcHNcIik7XG4gIGNvbnN0IGNvbnRpbnVlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250aW51ZS1idG5cIik7XG4gIGNvbnN0IGluc3RydWN0aW9uID0gc2hpcEF4aXMuY2hpbGRyZW5bMF07XG4gIGNvbnN0IHN0YXJ0QnRuID0gc2hpcEF4aXMuY2hpbGRyZW5bMV07XG4gIHJldHVybiB7IHN0YXJ0QnRuLCBpbnN0cnVjdGlvbiwgY29udGludWVCdG4gfTtcbn1cblxuZXhwb3J0IHsgc2hvd1NoaXBzT25Cb2FyZCB9O1xuIiwiaW1wb3J0IHsgYW5ub3VuY2VXaW5uZXIgfSBmcm9tIFwiLi9wYWdlLWdldC1uYW1lXCI7XG5pbXBvcnQgeyBzaG93U2hpcHNPbkJvYXJkIH0gZnJvbSBcIi4vcGxhY2Utc2hpcFwiO1xuaW1wb3J0IHsgc2hvd1NoaXBzUmFuZG9tbHkgfSBmcm9tIFwiLi9wbGFjZS1zaGlwLXJhbmRvbVwiO1xuXG5sZXQgaGl0LFxuICBpbmRleDIsXG4gIHRpbWUgPSAwLFxuICBpc1N1bmtTaGlwQXJyYXksXG4gIHZpc2l0ZWRJbmRleCA9IG51bGwsXG4gIHBvc3NpYmxlVmFsaWRTaG90cyA9IFtdLFxuICBzdG9wSGVyZSA9IDAsXG4gIGZpcnN0SGl0O1xuXG4vKiogQ2hlY2tzIGZvciB2YWxpZCBzaG90cyBvbiBzaGlwcyAqL1xuZnVuY3Rpb24gc2hvdHMoc2hvd1NoaXBzLCBjbGFzc05hbWUpIHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjbGFzc05hbWV9YCk7XG4gIGNvbnN0IHsgcmVjZWl2ZUF0dGFjaywgYWxsU2hpcHNTdW5rIH0gPSBzaG93U2hpcHMoKTtcbiAgY29uc3QgW3JlY2VpdmVBdHRhY2syLCAsIGFsbFNoaXBzU3VuazJdID0gc2hvd1NoaXBzT25Cb2FyZC5jYWxsKFxuICAgIGRvY3VtZW50LFxuICAgIFwicGxheWVyMS1ncmlkXCJcbiAgKTtcbiAgY29uc3QgYWRkTGlzdGVuZXJUb0dyaWQgPSAoZ3JpZCwgaW5kZXgpID0+XG4gICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgYWx0ZXJuYXRlU2hvdHMuYmluZChcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZ3JpZCxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIHJlY2VpdmVBdHRhY2syLFxuICAgICAgICBwbGF5ZXJCb2FyZCxcbiAgICAgICAgYWxsU2hpcHNTdW5rLFxuICAgICAgICBhbGxTaGlwc1N1bmsyXG4gICAgICApXG4gICAgKTtcbiAgcGxheWVyQm9hcmQuZm9yRWFjaChhZGRMaXN0ZW5lclRvR3JpZCk7XG59XG5cbi8qKiBBbHRlcm5hdGUgc2hvdHMgYmV0d2VlbiBjb21wdXRlciBhbmQgcGxheWVyICovXG5mdW5jdGlvbiBhbHRlcm5hdGVTaG90cyhcbiAgZ3JpZCxcbiAgaW5kZXgsXG4gIHJlY2VpdmVBdHRhY2ssXG4gIHJlY2VpdmVBdHRhY2syLFxuICBwbGF5ZXJCb2FyZCxcbiAgYWxsU2hpcHNTdW5rLFxuICBhbGxTaGlwc1N1bmsyXG4pIHtcbiAgY29uc3QgaW5zdHJ1Y3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsaWduLXNoaXBzXCIpLmNoaWxkcmVuWzBdO1xuICBpZiAoQXJyYXkuZnJvbShncmlkLmNsYXNzTGlzdCkuaW5jbHVkZXMoXCJzaG90c1wiKSkgcmV0dXJuO1xuICBpZiAoc3RvcEhlcmUgPT09IDEpIHJldHVybjtcbiAgaWYgKHRpbWUgPT09IDEpIHJldHVybjtcbiAgdGltZSA9IDE7XG4gIGNvbnN0IHBsYXllck5hbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGxheWVyTmFtZVwiKSk7XG4gIGNvbnN0IHsgZ3JpZDIsIGluZGV4MiwgcGxheWVyQm9hcmQyIH0gPSBjb21wdXRlclNob3RzKCk7XG4gIGluc3RydWN0aW9uLnRleHRDb250ZW50ID0gXCJXYWl0aW5nIGZvciBDb21wdXRlcidzIFNob3QuXCI7XG4gIHZhbGlkU2hvdHMoXG4gICAgZ3JpZCxcbiAgICBpbmRleCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIHBsYXllckJvYXJkLFxuICAgIGFsbFNoaXBzU3VuayxcbiAgICBpbnN0cnVjdGlvbixcbiAgICBwbGF5ZXJOYW1lXG4gICk7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdGltZSA9IDA7XG4gICAgY29uc3QgcGxheWVyTmFtZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwbGF5ZXJOYW1lXCIpKTtcbiAgICBjb25zdCBBSU5hbWUgPSBcIkNvbXB1dGVyXCI7XG4gICAgaWYgKHN0b3BIZXJlID09PSAxKSByZXR1cm47XG4gICAgaW5zdHJ1Y3Rpb24udGV4dENvbnRlbnQgPSBgV2FpdGluZyBmb3IgJHtwbGF5ZXJOYW1lfSdzIFNob3QuYDtcbiAgICBjb25zdCB7IGhpdENvb3JkIH0gPSB2YWxpZFNob3RzKFxuICAgICAgZ3JpZDIsXG4gICAgICBpbmRleDIsXG4gICAgICByZWNlaXZlQXR0YWNrMixcbiAgICAgIHBsYXllckJvYXJkMixcbiAgICAgIGFsbFNoaXBzU3VuazIsXG4gICAgICBpbnN0cnVjdGlvbixcbiAgICAgIEFJTmFtZVxuICAgICk7XG4gICAgaGl0ID0gaGl0Q29vcmQ7XG4gIH0sIDE1MDApO1xufVxuXG4vKiogQ29sb3VycyB2YWxpZCBzaG90cyByZWQgKi9cbmZ1bmN0aW9uIHZhbGlkU2hvdHMoXG4gIGdyaWQsXG4gIGluZGV4LFxuICByZWNlaXZlQXR0YWNrLFxuICBwbGF5ZXJCb2FyZCxcbiAgYWxsU2hpcHNTdW5rLFxuICBpbnN0cnVjdGlvbixcbiAgcGxheWVyTmFtZVxuKSB7XG4gIGNvbnN0IGF4aXMgPSBgJHtpbmRleH1gLnNwbGl0KFwiXCIpO1xuICBpZiAoYXhpcy5sZW5ndGggPT09IDEpIGF4aXMudW5zaGlmdChcIjBcIik7XG5cbiAgY29uc3Qge1xuICAgIGhpdENvb3JkLFxuICAgIHNoaXA1U3VuayxcbiAgICBzaGlwNFN1bmssXG4gICAgc2hpcDNTdW5rLFxuICAgIHNoaXAyU3VuayxcbiAgICBzaGlwMVN1bmssXG4gICAgc2hpcDVDb29yZCxcbiAgICBzaGlwNENvb3JkLFxuICAgIHNoaXAzQ29vcmQsXG4gICAgc2hpcDJDb29yZCxcbiAgICBzaGlwMUNvb3JkLFxuICB9ID0gcmVjZWl2ZUF0dGFjayhheGlzKTtcblxuICBpZiAoZ3JpZCkgZ3JpZC5jbGFzc0xpc3QuYWRkKFwic2hvdHNcIik7XG4gIGlmIChoaXRDb29yZCkgZ3JpZC5jbGFzc0xpc3QuYWRkKFwidmFsaWQtc2hvdFwiKTtcblxuICBpc1N1bmtTaGlwKHNoaXA1U3Vuaywgc2hpcDVDb29yZCwgcGxheWVyQm9hcmQpO1xuICBpc1N1bmtTaGlwKHNoaXA0U3Vuaywgc2hpcDRDb29yZCwgcGxheWVyQm9hcmQpO1xuICBpc1N1bmtTaGlwKHNoaXAzU3Vuaywgc2hpcDNDb29yZCwgcGxheWVyQm9hcmQpO1xuICBpc1N1bmtTaGlwKHNoaXAyU3Vuaywgc2hpcDJDb29yZCwgcGxheWVyQm9hcmQpO1xuICBpc1N1bmtTaGlwKHNoaXAxU3Vuaywgc2hpcDFDb29yZCwgcGxheWVyQm9hcmQpO1xuXG4gIGlmIChhbGxTaGlwc1N1bmsoKSkge1xuICAgIGluc3RydWN0aW9uLnRleHRDb250ZW50ID0gXCJnYW1lIG92ZXIuXCI7XG4gICAgc3RvcEhlcmUgPSAxO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgd2hpbGUgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgYW5ub3VuY2VXaW5uZXIocGxheWVyTmFtZSk7XG4gICAgfSwgMjAwMCk7XG4gIH1cblxuICBpc1N1bmtTaGlwQXJyYXkgPSBbc2hpcDVTdW5rLCBzaGlwNFN1bmssIHNoaXAzU3Vuaywgc2hpcDJTdW5rLCBzaGlwMVN1bmtdO1xuXG4gIHJldHVybiB7IGhpdENvb3JkIH07XG59XG5cbi8qKiBBZGRzIGJsdWUgYmFja2dyb3VuZCBjb2xvdXIgd2hlbiBhIHNoaXAgaXMgY29tcGxldGVseSBzdW5rICovXG5mdW5jdGlvbiBpc1N1bmtTaGlwKHNoaXBTdW5rLCBzaGlwQ29vcmQsIHBsYXllckJvYXJkKSB7XG4gIGNvbnN0IGFkZEJsdWVCZyA9IChpdGVtKSA9PlxuICAgIHBsYXllckJvYXJkLmZvckVhY2goKHNxdWFyZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmICgraXRlbS5qb2luKFwiXCIpID09PSBpbmRleCkgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzdW5rLXNoaXBcIik7XG4gICAgfSk7XG4gIGlmIChzaGlwU3VuayA9PT0gdHJ1ZSkgc2hpcENvb3JkLmZvckVhY2goYWRkQmx1ZUJnKTtcbn1cbmZ1bmN0aW9uIGNvbXB1dGVyU2hvdHMoKSB7XG4gIGNvbnN0IGFyckluZGV4ID0gW107XG4gIGNvbnN0IHBsYXllckJvYXJkMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyMS1ncmlkXCIpO1xuICBjb25zdCBwdXNoID0gKHNxdWFyZSwgaW5kZXgpID0+IHtcbiAgICBpZiAoc3F1YXJlLmNsYXNzTGlzdFsxXSA9PT0gXCJzcGFjZVwiKSBhcnJJbmRleC5wdXNoKGluZGV4KTtcbiAgfTtcbiAgcGxheWVyQm9hcmQyLmZvckVhY2gocHVzaCk7XG4gIGNvbnN0IHJhbk51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChhcnJJbmRleC5sZW5ndGggLSAxKSk7XG4gIGluZGV4MiA9IGFyckluZGV4W3Jhbk51bV07XG4gIGZpbmRWYWxpZFNob3RzKGFyckluZGV4LCByYW5OdW0sIHBsYXllckJvYXJkMik7XG4gIGNvbnN0IGdyaWQyID0gcGxheWVyQm9hcmQyW2luZGV4Ml07XG4gIGlmIChncmlkMikgZ3JpZDIuY2xhc3NMaXN0LnJlbW92ZShcInNwYWNlXCIpO1xuICByZXR1cm4geyBncmlkMiwgaW5kZXgyLCBwbGF5ZXJCb2FyZDIgfTtcbn1cblxuZnVuY3Rpb24gZmluZFZhbGlkU2hvdHMoYXJySW5kZXgsIHJhbk51bSwgcGxheWVyQm9hcmQyKSB7XG4gIGlmIChoaXQgJiYgdmlzaXRlZEluZGV4ID49IDEpIHtcbiAgICB2aXNpdGVkSW5kZXggPSB2aXNpdGVkSW5kZXggLSAxO1xuICAgIHJlbW92ZUZyb21BcnJheSgwLCArcG9zc2libGVWYWxpZFNob3RzWzBdIC0gMSk7XG4gICAgcmVtb3ZlRnJvbUFycmF5KDEsICtwb3NzaWJsZVZhbGlkU2hvdHNbMV0gKyAxKTtcbiAgICByZW1vdmVGcm9tQXJyYXkoMiwgK3Bvc3NpYmxlVmFsaWRTaG90c1syXSArIDEwKTtcbiAgICByZW1vdmVGcm9tQXJyYXkoMywgK3Bvc3NpYmxlVmFsaWRTaG90c1szXSAtIDEwKTtcbiAgICBpbmNyZWFzZVZpc2l0ZWRJbmRleChwbGF5ZXJCb2FyZDIpO1xuICAgIHZpc2l0ZWRJbmRleCsrO1xuICB9XG4gIGlmIChoaXQgJiYgdmlzaXRlZEluZGV4ID09PSBudWxsKSB7XG4gICAgZmlyc3RIaXQgPSAraGl0WzBdO1xuICAgIGNvbnN0IHNwbGl0SGl0ID0gaGl0WzBdLnNwbGl0KFwiXCIpO1xuICAgIHBvc3NpYmxlVmFsaWRTaG90cyA9IFtcbiAgICAgIHNwbGl0SGl0WzBdICsgKCtzcGxpdEhpdFsxXSAtIDEpLFxuICAgICAgc3BsaXRIaXRbMF0gKyAoK3NwbGl0SGl0WzFdICsgMSksXG4gICAgICArc3BsaXRIaXRbMF0gKyAxICsgc3BsaXRIaXRbMV0sXG4gICAgICArc3BsaXRIaXRbMF0gLSAxICsgc3BsaXRIaXRbMV0sXG4gICAgXTtcbiAgICB2aXNpdGVkSW5kZXggPSAwO1xuICAgIGluZGV4MiA9IHBvc3NpYmxlVmFsaWRTaG90c1t2aXNpdGVkSW5kZXhdO1xuICAgIGluY3JlYXNlVmlzaXRlZEluZGV4KHBsYXllckJvYXJkMik7XG4gICAgaW5jcmVhc2VWaXNpdGVkSW5kZXgocGxheWVyQm9hcmQyKTtcbiAgICBpbmNyZWFzZVZpc2l0ZWRJbmRleChwbGF5ZXJCb2FyZDIpO1xuICAgIHZpc2l0ZWRJbmRleCsrO1xuICB9XG4gIGlmIChoaXQgPT09IHVuZGVmaW5lZCAmJiB2aXNpdGVkSW5kZXggPj0gMSAmJiB2aXNpdGVkSW5kZXggPCA0KSB7XG4gICAgaW5kZXgyID0gcG9zc2libGVWYWxpZFNob3RzW3Zpc2l0ZWRJbmRleF07XG4gICAgaW5jcmVhc2VWaXNpdGVkSW5kZXgocGxheWVyQm9hcmQyKTtcbiAgICBpbmNyZWFzZVZpc2l0ZWRJbmRleChwbGF5ZXJCb2FyZDIpO1xuICAgIHZpc2l0ZWRJbmRleCsrO1xuICB9XG4gIGlmIChpc1N1bmtTaGlwQXJyYXkgJiYgaXNTdW5rU2hpcEFycmF5LmluY2x1ZGVzKHRydWUpKSB7XG4gICAgcG9zc2libGVWYWxpZFNob3RzLnNwbGljZSgwKTtcbiAgICBpbmRleDIgPSBhcnJJbmRleFtyYW5OdW1dO1xuICAgIHZpc2l0ZWRJbmRleCA9IG51bGw7XG4gICAgZmlyc3RIaXQgPSBudWxsO1xuICB9XG59XG5mdW5jdGlvbiByZW1vdmVGcm9tQXJyYXkoaW5kZXgsIGV4cHJlc3Npb24pIHtcbiAgaWYgKHZpc2l0ZWRJbmRleCA9PT0gaW5kZXgpIHtcbiAgICBpbmRleDIgPSBleHByZXNzaW9uO1xuICAgIHBvc3NpYmxlVmFsaWRTaG90cy5zcGxpY2UodmlzaXRlZEluZGV4LCAxLCBpbmRleDIpO1xuICB9XG59XG5mdW5jdGlvbiBpbmNyZWFzZVZpc2l0ZWRJbmRleChwbGF5ZXJCb2FyZDIpIHtcbiAgaWYgKFxuICAgICtpbmRleDIgPCAwIHx8XG4gICAgK2luZGV4MiA+IDk5IHx8XG4gICAgaXNOYU4oK2luZGV4MikgfHxcbiAgICBpbmRleDIgPT09IFwiMDEwXCIgfHxcbiAgICBBcnJheS5mcm9tKHBsYXllckJvYXJkMlsraW5kZXgyXS5jbGFzc0xpc3QpLmluY2x1ZGVzKFwic2hvdHNcIilcbiAgKSB7XG4gICAgdmlzaXRlZEluZGV4Kys7XG4gIH1cbiAgaW5kZXgyID0gK3Bvc3NpYmxlVmFsaWRTaG90c1t2aXNpdGVkSW5kZXhdO1xuICBpZiAoXG4gICAgZmlyc3RIaXQgJiZcbiAgICBwbGF5ZXJCb2FyZDJbK2luZGV4Ml0gJiZcbiAgICBBcnJheS5mcm9tKHBsYXllckJvYXJkMlsraW5kZXgyXS5jbGFzc0xpc3QpLmluY2x1ZGVzKFwic2hpcFwiKSAmJlxuICAgIHBsYXllckJvYXJkMlsraW5kZXgyXS5jbGFzc0xpc3RbM10gIT09IHBsYXllckJvYXJkMltmaXJzdEhpdF0uY2xhc3NMaXN0WzJdXG4gICkge1xuICAgIHZpc2l0ZWRJbmRleCsrO1xuICB9XG4gIGluZGV4MiA9ICtwb3NzaWJsZVZhbGlkU2hvdHNbdmlzaXRlZEluZGV4XTtcbn1cblxuY29uc3QgcGxheWVyU2hvdHMgPSBzaG90cy5iaW5kKG51bGwsIHNob3dTaGlwc1JhbmRvbWx5LCBcInBsYXllcjItZ3JpZFwiKTtcbmV4cG9ydCB7IHBsYXllclNob3RzLCB2YWxpZFNob3RzLCBzdG9wSGVyZSB9O1xuIiwiaW1wb3J0IHtjcmVhdGUyREFycmF5fSBmcm9tIFwiLi8yZC1hcnJheVwiO1xuaW1wb3J0IHtTaGlwfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmZ1bmN0aW9uIEdhbWVib2FyZChwbGFjZVBsYXllclNoaXBzKSB7XG4gIGNvbnN0IEFyciA9IFtdO1xuICBsZXQgYWxpZ24gPSBcIlhcIjtcbiAgY29uc3Qgc2hpcEFyciA9IFtdO1xuICBjb25zdCBib2FyZCA9IGNyZWF0ZTJEQXJyYXkoMTApO1xuICBjb25zdCBhbGlnblNoaXAgPSAoKSA9PiAoYWxpZ24gPSBhbGlnbiA9PT0gXCJYXCIgPyBcIllcIiA6IFwiWFwiKTtcblxuICBjb25zdCBwb3NpdGlvblNoaXAgPSAoaW5kZXgpID0+IHtcbiAgICBwbGFjZVBsYXllclNoaXBzKEFyciwgYm9hcmQsIHNoaXBBcnIsIGluZGV4LCBhbGlnbik7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChhdHRhY2spID0+IHtcbiAgICBsZXQgaGl0Q29vcmQ7XG4gICAgbGV0IHNoaXA1U3VuaztcbiAgICBsZXQgc2hpcDRTdW5rO1xuICAgIGxldCBzaGlwM1N1bms7XG4gICAgbGV0IHNoaXAyU3VuaztcbiAgICBsZXQgc2hpcDFTdW5rO1xuICAgIGxldCBzaGlwNUNvb3JkO1xuICAgIGxldCBzaGlwNENvb3JkO1xuICAgIGxldCBzaGlwM0Nvb3JkO1xuICAgIGxldCBzaGlwMkNvb3JkO1xuICAgIGxldCBzaGlwMUNvb3JkO1xuXG4gICAgY29uc3QgW3NoaXBGaXZlLCBzaGlwRm91ciwgc2hpcFRocmVlLCBzaGlwVHdvLCBzaGlwT25lXSA9IHNoaXBBcnI7XG4gICAgY29uc3QgW3NoaXA1LCBzaGlwNCwgc2hpcDMsIHNoaXAyLCBzaGlwMV0gPSBBcnI7XG4gICAgY29uc3QgYXJyYXkgPSBbc2hpcDUsIHNoaXA0LCBzaGlwMywgc2hpcDIsIHNoaXAxXS5mbGF0KCk7XG5cbiAgICBhcnJheS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBzaGlwLmZvckVhY2goKGNvb3JkaW5hdGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmICgrYXR0YWNrLmpvaW4oXCJcIikgPT09ICtjb29yZGluYXRlKSB7XG4gICAgICAgICAgaGl0Q29vcmQgPSBzaGlwLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgY29uc3Qgc2hpNSA9IFNoaXAoc2hpcEZpdmUuWFksIHNoaXBGaXZlLnNoaXBMZW5naHQsIHNoaXBGaXZlLmFsaWduKTtcbiAgICAgICAgICBzaGlwNVN1bmsgPSBzaGk1LmlzU3VuayhzaGlwLCBoaXRDb29yZCk7XG4gICAgICAgICAgc2hpcDVDb29yZCA9IHNoaTUuc2hpcENvb3JkO1xuICAgICAgICAgIGNvbnN0IHNoaTQgPSBTaGlwKHNoaXBGb3VyLlhZLCBzaGlwRm91ci5zaGlwTGVuZ2h0LCBzaGlwRm91ci5hbGlnbik7XG4gICAgICAgICAgc2hpcDRTdW5rID0gc2hpNC5pc1N1bmsoc2hpcCwgaGl0Q29vcmQpO1xuICAgICAgICAgIHNoaXA0Q29vcmQgPSBzaGk0LnNoaXBDb29yZDtcbiAgICAgICAgICBjb25zdCBzaGkzID0gU2hpcChcbiAgICAgICAgICAgIHNoaXBUaHJlZS5YWSxcbiAgICAgICAgICAgIHNoaXBUaHJlZS5zaGlwTGVuZ2h0LFxuICAgICAgICAgICAgc2hpcFRocmVlLmFsaWduLFxuICAgICAgICAgICk7XG4gICAgICAgICAgc2hpcDNTdW5rID0gc2hpMy5pc1N1bmsoc2hpcCwgaGl0Q29vcmQpO1xuICAgICAgICAgIHNoaXAzQ29vcmQgPSBzaGkzLnNoaXBDb29yZDtcbiAgICAgICAgICBjb25zdCBzaGkyID0gU2hpcChzaGlwVHdvLlhZLCBzaGlwVHdvLnNoaXBMZW5naHQsIHNoaXBUd28uYWxpZ24pO1xuICAgICAgICAgIHNoaXAyU3VuayA9IHNoaTIuaXNTdW5rKHNoaXAsIGhpdENvb3JkKTtcbiAgICAgICAgICBzaGlwMkNvb3JkID0gc2hpMi5zaGlwQ29vcmQ7XG4gICAgICAgICAgY29uc3Qgc2hpMSA9IFNoaXAoc2hpcE9uZS5YWSwgc2hpcE9uZS5zaGlwTGVuZ2h0LCBzaGlwT25lLmFsaWduKTtcbiAgICAgICAgICBzaGlwMVN1bmsgPSBzaGkxLmlzU3VuayhzaGlwLCBoaXRDb29yZCk7XG4gICAgICAgICAgc2hpcDFDb29yZCA9IHNoaTEuc2hpcENvb3JkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgaGl0Q29vcmQsXG4gICAgICBzaGlwNVN1bmssXG4gICAgICBzaGlwNFN1bmssXG4gICAgICBzaGlwM1N1bmssXG4gICAgICBzaGlwMlN1bmssXG4gICAgICBzaGlwMVN1bmssXG4gICAgICBzaGlwNUNvb3JkLFxuICAgICAgc2hpcDRDb29yZCxcbiAgICAgIHNoaXAzQ29vcmQsXG4gICAgICBzaGlwMkNvb3JkLFxuICAgICAgc2hpcDFDb29yZCxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IGFsbFNoaXBzU3VuayA9ICgpID0+IHtcbiAgICBjb25zdCBbc2hpcDUsIHNoaXA0LCBzaGlwMywgc2hpcDIsIHNoaXAxXSA9IEFyci5mbGF0KCk7XG4gICAgaWYgKHNoaXA1Lmxlbmd0aCA9PT0gMFxuICAgICYmIHNoaXA0Lmxlbmd0aCA9PT0gMFxuICAgICYmIHNoaXAzLmxlbmd0aCA9PT0gMFxuICAgICYmIHNoaXAyLmxlbmd0aCA9PT0gMFxuICAgICYmIHNoaXAxLmxlbmd0aCA9PT0gMFxuICAgICkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgQXJyLFxuICAgIGJvYXJkLFxuICAgIHNoaXBBcnIsXG4gICAgYWxpZ25TaGlwLFxuICAgIGFsbFNoaXBzU3VuayxcbiAgICBwb3NpdGlvblNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgfTtcbn1cblxuZXhwb3J0IHtHYW1lYm9hcmR9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmZ1bmN0aW9uIGdldFNoaXBDb29yZGluYXRlcyhhcnJheSwgbGVuZ3RoLCBhbGlnbikge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpIHx8IGFycmF5Lmxlbmd0aCA8IDIpIHJldHVybiBmYWxzZTtcbiAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gW2FycmF5XTtcbiAgaWYgKGFsaWduID09PSBcIlhcIikge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHNoaXBDb29yZGluYXRlcy5wdXNoKFthcnJheVswXSwgYXJyYXlbMV0gKyBpXSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHNoaXBDb29yZGluYXRlcy5wdXNoKFthcnJheVswXSArIGksIGFycmF5WzFdXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzaGlwQ29vcmRpbmF0ZXM7XG59XG5cbmV4cG9ydCB7Z2V0U2hpcENvb3JkaW5hdGVzfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJldHVybi1hc3NpZ24gKi9cbmltcG9ydCB7c2hpcEF4aXN9IGZyb20gXCIuL3NocC1heGlzXCI7XG5cbmZ1bmN0aW9uIHBsYWNlUGxheWVyU2hpcHMoQXJyLCBib2FyZCwgc2hpcEFyciwgaW5kZXgsIGFsaWduKSB7XG4gIGxldCBzaGlwTGVuZ2h0O1xuICBjb25zdCBhc3NpZ25WYWx1ZSA9ICh2YWx1ZSkgPT4gKHNoaXBMZW5naHQgPSB2YWx1ZSk7XG4gIGlmIChBcnIubGVuZ3RoID4gNCkgcmV0dXJuO1xuICBhc3NpZ25MZW5ndGhUb1NoaXBzKEFyciwgYXNzaWduVmFsdWUpO1xuICBwbGFjZVNoaXBzKGluZGV4LCBzaGlwTGVuZ2h0LCBhbGlnbiwgYm9hcmQsIEFyciwgc2hpcEFycik7XG59XG5cbmZ1bmN0aW9uIHBsYWNlQ29tcHV0ZXJTaGlwcyhBcnIsIGJvYXJkLCBzaGlwQXJyKSB7XG4gIGNvbnN0IGFsaWduQXJyID0gW1wiWFwiLCBcIllcIl07XG4gIGxldCBzaGlwTGVuZ2h0O1xuICBjb25zdCBhc3NpZ25WYWx1ZSA9ICh2YWx1ZSkgPT4gKHNoaXBMZW5naHQgPSB2YWx1ZSk7XG4gIHdoaWxlIChBcnIubGVuZ3RoIDwgNSkge1xuICAgIGFzc2lnbkxlbmd0aFRvU2hpcHMoQXJyLCBhc3NpZ25WYWx1ZSk7XG4gICAgY29uc3QgYWxpZ25JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFsaWduQXJyLmxlbmd0aCk7XG4gICAgY29uc3QgYWxpZ24gPSBhbGlnbkFyclthbGlnbkluZGV4XTtcbiAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgcGxhY2VTaGlwcyhpbmRleCwgc2hpcExlbmdodCwgYWxpZ24sIGJvYXJkLCBBcnIsIHNoaXBBcnIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2lnbkxlbmd0aFRvU2hpcHMoQXJyLCBhc3NpZ25WYWx1ZSkge1xuICBpZiAoQXJyLmxlbmd0aCA9PT0gMCkgYXNzaWduVmFsdWUoNSk7XG4gIGlmIChBcnIubGVuZ3RoID09PSAxKSBhc3NpZ25WYWx1ZSg0KTtcbiAgaWYgKEFyci5sZW5ndGggPT09IDIpIGFzc2lnblZhbHVlKDMpO1xuICBpZiAoQXJyLmxlbmd0aCA9PT0gMykgYXNzaWduVmFsdWUoMyk7XG4gIGlmIChBcnIubGVuZ3RoID09PSA0KSBhc3NpZ25WYWx1ZSgyKTtcbn1cblxuZnVuY3Rpb24gcGxhY2VTaGlwcyhpbmRleCwgc2hpcExlbmdodCwgYWxpZ24sIGJvYXJkLCBBcnIsIHNoaXBBcnIpIHtcbiAgY29uc3QgYXhpcyA9IGAke2luZGV4fWAuc3BsaXQoXCJcIik7XG4gIGlmIChheGlzLmxlbmd0aCA9PT0gMSkgYXhpcy51bnNoaWZ0KFwiMFwiKTtcbiAgY29uc3Qgc2hpcENvb3JkID0gc2hpcEF4aXMoc2hpcExlbmdodCwgK2F4aXNbMF0sICtheGlzWzFdLCBzaGlwTGVuZ2h0LCBhbGlnbiwgYm9hcmQpO1xuICBpZiAoc2hpcENvb3JkLmxlbmd0aCAhPT0gMCkge1xuICAgIEFyci5wdXNoKHNoaXBDb29yZCk7XG4gICAgc2hpcEFyci5wdXNoKHsgWFk6IFsrYXhpc1swXSwgK2F4aXNbMV1dLCBhbGlnbiwgc2hpcExlbmdodCB9KTtcbiAgfVxufVxuXG5leHBvcnQgeyBwbGFjZVBsYXllclNoaXBzLCBwbGFjZUNvbXB1dGVyU2hpcHMgfTtcbiIsImltcG9ydCB7IHNob3dTaGlwc09uQm9hcmQgfSBmcm9tIFwiLi9kb20taW50ZXJhY3Rpb25zL3BsYWNlLXNoaXBcIjtcbmltcG9ydCB7IHN0b3BIZXJlLCB2YWxpZFNob3RzIH0gZnJvbSBcIi4vZG9tLWludGVyYWN0aW9ucy9wbGF5ZXItdnMtY29tcHV0ZXJcIjtcblxubGV0IGNvdW50ID0gMDtcbmxldCBjb3VudDIgPSAwO1xubGV0IHRpbWUgPSAxO1xuXG4vKiogQ2hlY2tzIGZvciB2YWxpZCBzaG90cyBvbiBzaGlwcyAqL1xuZnVuY3Rpb24gcGxheWVyKGNsYXNzTmFtZSwgY2xhc3NOYW1lMikge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NsYXNzTmFtZX1gKTtcbiAgY29uc3QgcGxhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y2xhc3NOYW1lMn1gKTtcbiAgY29uc3QgW3JlY2VpdmVBdHRhY2ssIEFyciwgYWxsU2hpcHNTdW5rXSA9IHNob3dTaGlwc09uQm9hcmQuY2FsbChcbiAgICBwbGFbMF0sXG4gICAgY2xhc3NOYW1lMlxuICApO1xuICBjb25zdCBhZGRMaXN0ZW5lclRvR3JpZCA9IChncmlkLCBpbmRleCkgPT5cbiAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICBzaG90cy5iaW5kKFxuICAgICAgICBudWxsLFxuICAgICAgICBBcnIsXG4gICAgICAgIGdyaWQsXG4gICAgICAgIGluZGV4LFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBwbGF5ZXJCb2FyZCxcbiAgICAgICAgYWxsU2hpcHNTdW5rXG4gICAgICApXG4gICAgKTtcbiAgcGxheWVyQm9hcmQuZm9yRWFjaChhZGRMaXN0ZW5lclRvR3JpZCk7XG59XG5cbi8qKiBTaG90cyBieSBwbGF5ZXIgKi9cbmZ1bmN0aW9uIHNob3RzKEFyciwgZ3JpZCwgaW5kZXgsIHJlY2VpdmVBdHRhY2ssIHBsYXllckJvYXJkLCBhbGxTaGlwc1N1bmspIHtcbiAgY29uc3QgcGxheWVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyMS1ib2FyZFwiKTtcbiAgY29uc3QgcGxheWVyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyMi1ib2FyZFwiKTtcbiAgY29uc3QgcGxheWVyTmFtZTEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGxheWVyTmFtZVwiKSk7XG4gIGNvbnN0IHBsYXllck5hbWUyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBsYXllcjJOYW1lXCIpKTtcbiAgY29uc3QgaW5zdHJ1Y3Rpb24yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnN0cnVjdGlvbjJcIik7XG5cbiAgaWYgKEFycmF5LmZyb20oZ3JpZC5jbGFzc0xpc3QpLmluY2x1ZGVzKFwic2hvdHNcIikpIHJldHVybjtcbiAgaWYgKGdyaWQuY2xhc3NMaXN0WzBdID09PSBcInBsYXllcjEtZ3JpZFwiICYmIEFyci5sZW5ndGggPj0gNSkge1xuICAgIGlmIChjb3VudCA+PSAxICYmIHRpbWUgPT09IDApIHtcbiAgICAgIGlmIChBcnJheS5mcm9tKHBsYXllcjEuY2xhc3NMaXN0KS5pbmNsdWRlcyhcImhpZGVcIikpIHJldHVybjtcbiAgICAgIGlmIChBcnJheS5mcm9tKHBsYXllcjIuY2xhc3NMaXN0KS5pbmNsdWRlcyhcImhpZGVcIikpIHJldHVybjtcbiAgICAgIGlmIChzdG9wSGVyZSA9PT0gMSkgcmV0dXJuO1xuICAgICAgaW5zdHJ1Y3Rpb24yLnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZTF9LCB0YWtlIHlvdXIgc2hvdC5gO1xuICAgICAgdmFsaWRTaG90cyhncmlkLCBpbmRleCwgcmVjZWl2ZUF0dGFjaywgcGxheWVyQm9hcmQsIGFsbFNoaXBzU3VuaywgaW5zdHJ1Y3Rpb24yLCBwbGF5ZXJOYW1lMik7XG4gICAgfVxuICAgIHRpbWUgPSAxO1xuICAgIGNvdW50ICs9IDE7XG4gIH1cbiAgaWYgKGdyaWQuY2xhc3NMaXN0WzBdID09PSBcInBsYXllcjItZ3JpZFwiICYmIEFyci5sZW5ndGggPj0gNSkge1xuICAgIGlmIChjb3VudDIgPj0gMSAmJiB0aW1lID09PSAxKSB7XG4gICAgICBpZiAoQXJyYXkuZnJvbShwbGF5ZXIxLmNsYXNzTGlzdCkuaW5jbHVkZXMoXCJoaWRlXCIpKSByZXR1cm47XG4gICAgICBpZiAoQXJyYXkuZnJvbShwbGF5ZXIyLmNsYXNzTGlzdCkuaW5jbHVkZXMoXCJoaWRlXCIpKSByZXR1cm47XG4gICAgICBpbnN0cnVjdGlvbjIudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJOYW1lMn0sIHRha2UgeW91ciBzaG90LmA7XG4gICAgICB2YWxpZFNob3RzKGdyaWQsIGluZGV4LCByZWNlaXZlQXR0YWNrLCBwbGF5ZXJCb2FyZCwgYWxsU2hpcHNTdW5rLCBpbnN0cnVjdGlvbjIsIHBsYXllck5hbWUxKTtcbiAgICB9XG4gICAgdGltZSA9IDA7XG4gICAgY291bnQyICs9IDE7XG4gIH1cbn1cblxuZnVuY3Rpb24gaHVtYW5QbGF5ZXJzKCkge1xuICBwbGF5ZXIoXCJwbGF5ZXIxLWdyaWRcIiwgXCJwbGF5ZXIxLWdyaWRcIik7XG4gIHBsYXllcihcInBsYXllcjItZ3JpZFwiLCBcInBsYXllcjItZ3JpZFwiKTtcbn1cblxuZXhwb3J0IHsgaHVtYW5QbGF5ZXJzIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuaW1wb3J0IHtnZXRTaGlwQ29vcmRpbmF0ZXN9IGZyb20gXCIuL2dldFNoaXBDb29yZGluYXRlc1wiO1xuXG5mdW5jdGlvbiBTaGlwKGFycmF5LCBsZW5ndGgsIGFsaWduKSB7XG4gIGNvbnN0IHNoaXBDb29yZCA9IGdldFNoaXBDb29yZGluYXRlcyhhcnJheSwgbGVuZ3RoLCBhbGlnbik7XG4gIGlmICghQXJyYXkuaXNBcnJheShzaGlwQ29vcmQpICYmICFzaGlwQ29vcmQubGVuZ3RoID4gMCkgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBpc1N1bmsgPSAoY29vcmQsIGhpdENvb3JkKSA9PiB7XG4gICAgZm9yIChjb25zdCBYWSBvZiBzaGlwQ29vcmQpIHtcbiAgICAgIGlmIChoaXRDb29yZC5qb2luKFwiXCIpID09PSBYWS5qb2luKFwiXCIpKSBpZiAoY29vcmQubGVuZ3RoIDw9IDApIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gY29vcmQubGVuZ3RoO1xuICB9O1xuICByZXR1cm4geyBzaGlwQ29vcmQsIGlzU3VuayB9O1xufVxuXG5leHBvcnQge1NoaXB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmltcG9ydCB7U2hpcH0gZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHtjaGVja1ZhbGlkTW92ZX0gZnJvbSBcIi4vdmFsaWQtbW92ZVwiO1xuXG5mdW5jdGlvbiBzaGlwQXhpcyhudW0sIHgsIHksIGxlbmd0aCwgYWxpZ24sIGJvYXJkLCByZWNlaXZlQXR0YWNrKSB7XG4gIGNvbnN0IHNoaXAgPSBTaGlwKFt4LCB5XSwgbGVuZ3RoLCBhbGlnbiwgcmVjZWl2ZUF0dGFjaykuc2hpcENvb3JkO1xuICBjb25zdCBzaGlwQ29vcmRzID0gY2hlY2tWYWxpZE1vdmUobnVtLCBzaGlwLCBib2FyZCk7XG4gIGNvbnN0IGFycmF5Q29vcmQgPSBbXTtcblxuICBhcnJheUNvb3JkLnB1c2goc2hpcENvb3Jkcyk7XG4gIGFycmF5Q29vcmQuZm9yRWFjaCgoY29vcmQsIGluZGV4KSA9PiB7XG4gICAgaWYgKCFjb29yZCkgYXJyYXlDb29yZC5zcGxpY2UoaW5kZXgsIDEpO1xuICB9KTtcblxuICByZXR1cm4gYXJyYXlDb29yZDtcbn1cblxuZXhwb3J0IHtzaGlwQXhpc307XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xubGV0IGNvdW50ZXIgPSAwO1xuZnVuY3Rpb24gY2hlY2tWYWxpZE1vdmUobnVtLCBzaGlwLCBib2FyZEFycmF5KSB7XG4gIGxldCBudW1Db3B5ID0gbnVtO1xuICBjb25zdCBkb21Cb2FyZEFycnJheSA9IFtdO1xuICBpZiAoIXNoaXApIHJldHVybiBmYWxzZTtcbiAgZm9yIChsZXQgaSA9IHNoaXAubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICBpZiAoXG4gICAgICArc2hpcFtpXVswXSA+IDkgfHxcbiAgICAgICtzaGlwW2ldWzFdID4gOSB8fFxuICAgICAgYm9hcmRBcnJheVsrc2hpcFtpXVswXV1bK3NoaXBbaV1bMV1dICE9PSAwXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIGlmIChudW0gPT0gMykgY291bnRlcisrO1xuICBpZiAoY291bnRlciA9PT0gMikgbnVtQ29weSA9IDY7XG4gIFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoXG4gICAgICBib2FyZEFycmF5WytzaGlwW2ldWzBdXVsrc2hpcFtpXVsxXV0gPT09IDIgfHxcbiAgICAgIGJvYXJkQXJyYXlbK3NoaXBbaV1bMF1dWytzaGlwW2ldWzFdXSA9PT0gMyB8fFxuICAgICAgYm9hcmRBcnJheVsrc2hpcFtpXVswXV1bK3NoaXBbaV1bMV1dID09PSA0IHx8XG4gICAgICBib2FyZEFycmF5WytzaGlwW2ldWzBdXVsrc2hpcFtpXVsxXV0gPT09IDVcbiAgICApXG4gICAgICByZXR1cm47XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgYm9hcmRBcnJheVsrc2hpcFtpXVswXV1bK3NoaXBbaV1bMV1dID0gbnVtQ29weTtcbiAgICBkb21Cb2FyZEFycnJheS5wdXNoKGAke3NoaXBbaV1bMF19JHtzaGlwW2ldWzFdfWApO1xuICB9XG5cbiAgaWYgKGNvdW50ZXIgPT09IDIpIGNvdW50ZXIgPSAwO1xuXG4gIHJldHVybiBkb21Cb2FyZEFycnJheTtcbn1cblxuZXhwb3J0IHsgY2hlY2tWYWxpZE1vdmUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHJlbmRlckdldE5hbWVQYWdlIH0gZnJvbSBcIi4vbW9kdWxlcy9kb20taW50ZXJhY3Rpb25zL3BhZ2UtZ2V0LW5hbWVcIjtcbmltcG9ydCBcIi4vbW9kdWxlcy9zdHlsZS9zdHlsZS5jc3NcIjtcblxucmVuZGVyR2V0TmFtZVBhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==