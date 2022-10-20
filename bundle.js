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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  align-items: center;\n  background: radial-gradient(\n    circle at 100%,\n    #341406e8,\n    #333 50%,\n    #0f1017 75%,\n    #123 75%\n  );\n  background-attachment: fixed;\n  opacity: 1;\n  transition-duration: 0.7s;\n  transition-property: opacity;\n}\n\n.hidden {\n  opacity: 0;\n  transition-duration: unset;\n}\n\nbody.opacity {\n  transition-duration: 0.7s;\n  opacity: 1;\n}\n\nbody.fade {\n  opacity: 0;\n}\n\nheader {\n  width: -webkit-fill-available;\n}\n\n.header {\n  border: 0ch;\n}\n\nh1 {\n  text-align: center;\n  font-size: min(15vw, 8rem);\n  color: #715f36;\n  text-shadow: 3px -7px 5px black;\n}\n\n.h1 {\n  font-size: min(15vw, 4rem);\n}\n\n.instruction2 {\n  color: aqua;\n  text-transform: uppercase;\n}\n\n.input-div,\n.game-over-div {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 100px;\n}\n\n.input-div {\n  opacity: 1;\n  transition-duration: 0.7s;\n  transition-property: opacity;\n}\n\n.input-div.fade {\n  opacity: 0;\n}\n\n.game-over-div {\n  margin-top: 65px;\n}\n\n.align-ships {\n  text-align: center;\n  position: relative;\n}\n\nlabel {\n  font-size: xx-large;\n  color: aquamarine;\n}\n\ninput {\n  padding: 15px;\n  border-radius: 10px;\n}\n\n.second-input {\n  position: relative;\n}\n\n.start-btn {\n  width: fit-content;\n  padding: 15px;\n  align-self: center;\n}\n\n.choose-div {\n  margin-top: 100px;\n  text-align: center;\n  opacity: 1;\n  transition-duration: 0.7s;\n  transition-property: opacity;\n}\n\n.choose-div.fade {\n  opacity: 0;\n}\n\n.choose-div > p {\n  font-size: 2rem;\n  text-transform: capitalize;\n  color: aquamarine;\n}\n\n.btn-div {\n  text-align: center;\n  margin-top: 10px;\n}\n\n.play-human {\n  margin-left: 20px;\n}\n\n.play-ai,\n.play-human,\n.btn-restart,\n.start-btn {\n  width: 110px;\n  padding: 15px 0;\n  font-weight: bolder;\n}\n\n.axis-btn {\n  margin-top: 10px;\n  padding: 8px;\n  font-weight: bolder;\n  width: 90px;\n}\n\n.align-ships > button {\n  margin-top: 10px;\n  padding: 8px;\n  font-weight: bolder;\n  width: 90px;\n}\n\n.btn-restart {\n  margin: auto;\n}\n\n.game-over {\n  font-size: xxx-large;\n  color: #c3cbeb;\n  text-shadow: 3px -7px 5px black;\n}\n\n.winner,\n.name {\n  font-size: xx-large;\n  color: cadetblue;\n  margin-top: -15px;\n  text-shadow: 0px -5px 2px black;\n}\n\n.game-over-div {\n  text-align: center;\n}\n\n.board-container {\n  display: flex;\n  margin: auto;\n  flex-wrap: wrap;\n  width: 100%;\n  justify-content: space-between;\n  gap: 20px;\n  row-gap: 60px;\n  margin-top: 5px;\n  margin-bottom: 50px;\n  padding: 0 5px;\n}\n\n.container-div1,\n.container-div2 {\n  margin: auto;\n  width: 430px;\n  height: 430px;\n}\n\n.error-msg {\n  text-align: center;\n  color: greenyellow;\n}\n\n.player,\n.player2 {\n  text-align: center;\n  color: #dedaff;\n  font-weight: bolder;\n  margin-bottom: 10px;\n  font-family: monospace;\n  text-decoration: underline;\n  text-transform: uppercase;\n  text-decoration-line: underline;\n}\n\n.player1-board,\n.player2-board {\n  backdrop-filter: brightness(0.7);\n  padding: 1px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  height: 100%;\n  margin: auto;\n  border: 1px solid #f2f2f2;\n  box-shadow: 7px 5px 9px 2px;\n}\n\n.player1-grid,\n.player2-grid {\n  border: 1px solid #f8f8f8;\n}\n\n.player1-grid:hover,\n.player2-grid:hover {\n  background-color: rgb(255, 183, 183);\n}\n\n.red:hover {\n  background-color: red;\n}\n\n.grey {\n  background-color: rgb(255, 183, 183) !important;\n}\n\n.hide {\n  position: absolute;\n  visibility: hidden;\n}\n\n.show {\n  position: relative;\n  visibility: visible;\n}\n\n.ship {\n  background-color: #00ffff70 !important;\n}\n\n.shots {\n  border-radius: 40px;\n  background-color: white !important;\n}\n\n.valid-shot {\n  background-color: red !important;\n}\n\n.sunk-ship {\n  background-color: blue !important;\n}\n\n.blinking {\n  animation: blinkingBackground 2s infinite;\n}\n\nbutton {\n  position: relative;\n  overflow: hidden;\n  transition: background 400ms;\n  color: #fff;\n  background-color: #6200ee;\n  outline: 0;\n  border: 0;\n  box-shadow: 1px 2px 1rem 0px rgb(0 0 0 / 95%);\n  cursor: pointer;\n  border-radius: 5px;\n}\n\n.ripple {\n  position: absolute;\n  border-radius: 50%;\n  transform: scale(0);\n  animation: ripple 600ms linear;\n  background-color: rgba(255, 255, 255, 0.7);\n  width: 100px;\n  height: 100px;\n  margin-top: -50px;\n  margin-left: -50px;\n  opacity: 0;\n}\n\n@keyframes ripple {\n  from {\n    opacity: 1;\n    transform: scale(0);\n  }\n  to{\n    transform: scale(4);\n    opacity: 0;\n  }\n}\n\n@keyframes blinkingBackground {\n  0% {\n    color: #004435;\n  }\n\n  25% {\n    color: #ac9dff;\n  }\n\n  50% {\n    color: #137056;\n  }\n\n  70% {\n    color: #ffffff;\n  }\n\n  100% {\n    color: #272063;\n  }\n}\n\n@media screen and (max-width: 800px) {\n  .board-container {\n    margin-top: 25px;\n  }\n}\n\nfooter {\n  padding: 15px;\n  margin-top: auto;\n  text-align: center;\n  background-color: #bba7a7;\n  width: -webkit-fill-available;\n}\n", "",{"version":3,"sources":["webpack://./src/modules/style/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  align-items: center;\n  background: radial-gradient(\n    circle at 100%,\n    #341406e8,\n    #333 50%,\n    #0f1017 75%,\n    #123 75%\n  );\n  background-attachment: fixed;\n  opacity: 1;\n  transition-duration: 0.7s;\n  transition-property: opacity;\n}\n\n.hidden {\n  opacity: 0;\n  transition-duration: unset;\n}\n\nbody.opacity {\n  transition-duration: 0.7s;\n  opacity: 1;\n}\n\nbody.fade {\n  opacity: 0;\n}\n\nheader {\n  width: -webkit-fill-available;\n}\n\n.header {\n  border: 0ch;\n}\n\nh1 {\n  text-align: center;\n  font-size: min(15vw, 8rem);\n  color: #715f36;\n  text-shadow: 3px -7px 5px black;\n}\n\n.h1 {\n  font-size: min(15vw, 4rem);\n}\n\n.instruction2 {\n  color: aqua;\n  text-transform: uppercase;\n}\n\n.input-div,\n.game-over-div {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 100px;\n}\n\n.input-div {\n  opacity: 1;\n  transition-duration: 0.7s;\n  transition-property: opacity;\n}\n\n.input-div.fade {\n  opacity: 0;\n}\n\n.game-over-div {\n  margin-top: 65px;\n}\n\n.align-ships {\n  text-align: center;\n  position: relative;\n}\n\nlabel {\n  font-size: xx-large;\n  color: aquamarine;\n}\n\ninput {\n  padding: 15px;\n  border-radius: 10px;\n}\n\n.second-input {\n  position: relative;\n}\n\n.start-btn {\n  width: fit-content;\n  padding: 15px;\n  align-self: center;\n}\n\n.choose-div {\n  margin-top: 100px;\n  text-align: center;\n  opacity: 1;\n  transition-duration: 0.7s;\n  transition-property: opacity;\n}\n\n.choose-div.fade {\n  opacity: 0;\n}\n\n.choose-div > p {\n  font-size: 2rem;\n  text-transform: capitalize;\n  color: aquamarine;\n}\n\n.btn-div {\n  text-align: center;\n  margin-top: 10px;\n}\n\n.play-human {\n  margin-left: 20px;\n}\n\n.play-ai,\n.play-human,\n.btn-restart,\n.start-btn {\n  width: 110px;\n  padding: 15px 0;\n  font-weight: bolder;\n}\n\n.axis-btn {\n  margin-top: 10px;\n  padding: 8px;\n  font-weight: bolder;\n  width: 90px;\n}\n\n.align-ships > button {\n  margin-top: 10px;\n  padding: 8px;\n  font-weight: bolder;\n  width: 90px;\n}\n\n.btn-restart {\n  margin: auto;\n}\n\n.game-over {\n  font-size: xxx-large;\n  color: #c3cbeb;\n  text-shadow: 3px -7px 5px black;\n}\n\n.winner,\n.name {\n  font-size: xx-large;\n  color: cadetblue;\n  margin-top: -15px;\n  text-shadow: 0px -5px 2px black;\n}\n\n.game-over-div {\n  text-align: center;\n}\n\n.board-container {\n  display: flex;\n  margin: auto;\n  flex-wrap: wrap;\n  width: 100%;\n  justify-content: space-between;\n  gap: 20px;\n  row-gap: 60px;\n  margin-top: 5px;\n  margin-bottom: 50px;\n  padding: 0 5px;\n}\n\n.container-div1,\n.container-div2 {\n  margin: auto;\n  width: 430px;\n  height: 430px;\n}\n\n.error-msg {\n  text-align: center;\n  color: greenyellow;\n}\n\n.player,\n.player2 {\n  text-align: center;\n  color: #dedaff;\n  font-weight: bolder;\n  margin-bottom: 10px;\n  font-family: monospace;\n  text-decoration: underline;\n  text-transform: uppercase;\n  text-decoration-line: underline;\n}\n\n.player1-board,\n.player2-board {\n  backdrop-filter: brightness(0.7);\n  padding: 1px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  height: 100%;\n  margin: auto;\n  border: 1px solid #f2f2f2;\n  box-shadow: 7px 5px 9px 2px;\n}\n\n.player1-grid,\n.player2-grid {\n  border: 1px solid #f8f8f8;\n}\n\n.player1-grid:hover,\n.player2-grid:hover {\n  background-color: rgb(255, 183, 183);\n}\n\n.red:hover {\n  background-color: red;\n}\n\n.grey {\n  background-color: rgb(255, 183, 183) !important;\n}\n\n.hide {\n  position: absolute;\n  visibility: hidden;\n}\n\n.show {\n  position: relative;\n  visibility: visible;\n}\n\n.ship {\n  background-color: #00ffff70 !important;\n}\n\n.shots {\n  border-radius: 40px;\n  background-color: white !important;\n}\n\n.valid-shot {\n  background-color: red !important;\n}\n\n.sunk-ship {\n  background-color: blue !important;\n}\n\n.blinking {\n  animation: blinkingBackground 2s infinite;\n}\n\nbutton {\n  position: relative;\n  overflow: hidden;\n  transition: background 400ms;\n  color: #fff;\n  background-color: #6200ee;\n  outline: 0;\n  border: 0;\n  box-shadow: 1px 2px 1rem 0px rgb(0 0 0 / 95%);\n  cursor: pointer;\n  border-radius: 5px;\n}\n\n.ripple {\n  position: absolute;\n  border-radius: 50%;\n  transform: scale(0);\n  animation: ripple 600ms linear;\n  background-color: rgba(255, 255, 255, 0.7);\n  width: 100px;\n  height: 100px;\n  margin-top: -50px;\n  margin-left: -50px;\n  opacity: 0;\n}\n\n@keyframes ripple {\n  from {\n    opacity: 1;\n    transform: scale(0);\n  }\n  to{\n    transform: scale(4);\n    opacity: 0;\n  }\n}\n\n@keyframes blinkingBackground {\n  0% {\n    color: #004435;\n  }\n\n  25% {\n    color: #ac9dff;\n  }\n\n  50% {\n    color: #137056;\n  }\n\n  70% {\n    color: #ffffff;\n  }\n\n  100% {\n    color: #272063;\n  }\n}\n\n@media screen and (max-width: 800px) {\n  .board-container {\n    margin-top: 25px;\n  }\n}\n\nfooter {\n  padding: 15px;\n  margin-top: auto;\n  text-align: center;\n  background-color: #bba7a7;\n  width: -webkit-fill-available;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/modules/dom-interactions/player.js");
/* harmony import */ var _dom_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-gameboard */ "./src/modules/dom-interactions/dom-gameboard.js");
/* harmony import */ var _helper_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper-function */ "./src/modules/dom-interactions/helper-function.js");
/* harmony import */ var _name_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./name-input */ "./src/modules/dom-interactions/name-input.js");
/* harmony import */ var _player_vs_computer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player-vs-computer */ "./src/modules/dom-interactions/player-vs-computer.js");
/* harmony import */ var _get_player_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-player-name */ "./src/modules/dom-interactions/get-player-name.js");
/* harmony import */ var _ship_hover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ship-hover */ "./src/modules/dom-interactions/ship-hover.js");
/* harmony import */ var _ripple_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ripple-button */ "./src/modules/dom-interactions/ripple-button.js");









/** Creates Div container for choosing your opponent. */
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
  addListenerToBtn(
    continueBtn,
    axisBtn,
    playAi,
    alignShipDiv,
    chooseDiv,
    playHuman
  );

  return chooseDiv;
}

function addListenerToBtn(
  continueBtn,
  axisBtn,
  playAi,
  alignShipDiv,
  chooseDiv,
  playHuman
) {
  continueBtn.addEventListener("click", _ship_hover__WEBPACK_IMPORTED_MODULE_6__.resetShipHover);
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
}

function insertBoard(alignShipDiv, chooseDiv, playerShot) {
  const header = document.querySelector("h1");
  const head = document.querySelector("header");
  const { boardContainer } = (0,_dom_gameboard__WEBPACK_IMPORTED_MODULE_1__.createGameboard)();
  document.body.classList.add("fade");
  setTimeout(() => {
    header.classList.add("h1");
    head.classList.add("header");
    document.body.classList.remove("fade");
    document.body.insertBefore(alignShipDiv, chooseDiv);
    document.body.replaceChild(boardContainer, chooseDiv);
    (0,_ship_hover__WEBPACK_IMPORTED_MODULE_6__.addHover)(".player1-grid");
    (0,_ship_hover__WEBPACK_IMPORTED_MODULE_6__.addHover)(".player2-grid");
    playerShot();
    setPlayersName();
    (0,_ripple_button__WEBPACK_IMPORTED_MODULE_7__.addRippleEffect)();
  }, 400);
}

function setPlayersName() {
  const player1 = document.querySelector(".player");
  const player2 = document.querySelector(".player2");
  const playerName = JSON.parse(localStorage.getItem("playerName"));
  const playerName2 = JSON.parse(localStorage.getItem("player2Name"));
  player1.textContent = `Player 1: ${playerName}`;
  player2.textContent = `Player 2: ${playerName2}`;
}

function player2Name(chooseDiv, playerShot, alignShipDiv) {
  const { inputDiv, startBtn, nameInput } = (0,_name_input__WEBPACK_IMPORTED_MODULE_3__.createInputElem)(
    "Enter Human Name",
    "Continue"
  );
  document.body.classList.add("fade");
  setTimeout(() => {
    document.body.classList.remove("fade");
    document.body.replaceChild(inputDiv, chooseDiv);
    startBtn.addEventListener(
      "click",
      player1Board.bind(null, nameInput, inputDiv, playerShot, alignShipDiv)
    );
    (0,_ripple_button__WEBPACK_IMPORTED_MODULE_7__.addRippleEffect)();
  }, 400);
}

function player1Board(nameInput, inputDiv, playerShot, alignShipDiv) {
  if (nameInput.value.trim() === "") {
    (0,_get_player_name__WEBPACK_IMPORTED_MODULE_5__.preventEmptyInput)(nameInput);
    return;
  }
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


/** Creates DOM gameboard */
function createGameboard() {
  const boardContainer = (0,_helper_function__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div", { class: "board-container" });
  const containerDiv1 = (0,_helper_function__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div", { class: "container-div1" });
  const containerDiv2 = (0,_helper_function__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div", { class: "container-div2 hide" });
  const player1 = (0,_helper_function__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("p", { class: "player" });
  const player2 = (0,_helper_function__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("p", { class: "player2" });
  const grids = (player, playerGrid) => {
    const square = (0,_helper_function__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div", { class: player });
    for (let i = 0; i < 100; i += 1) {
      const grid = (0,_helper_function__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("div", { class: playerGrid });
      square.appendChild(grid);
    }
    return square;
  };
  containerDiv1.append(player1, grids("player1-board", "player1-grid space"));
  containerDiv2.append(
    player2,
    grids("player2-board hide", "player2-grid space")
  );
  boardContainer.append(containerDiv1, containerDiv2);
  return { boardContainer };
}




/***/ }),

/***/ "./src/modules/dom-interactions/find-empty-spot.js":
/*!*********************************************************!*\
  !*** ./src/modules/dom-interactions/find-empty-spot.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "computerShots": () => (/* binding */ computerShots)
/* harmony export */ });
/* harmony import */ var _player_vs_computer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player-vs-computer */ "./src/modules/dom-interactions/player-vs-computer.js");


let index2;
let visitedIndex = null;
let possibleValidShots = [];
let firstHit;

function computerShots() {
  const arrIndex = [];
  const playerBoard2 = document.querySelectorAll(".player1-grid");
  const push = (square, index) => {
    if (square.classList[1] === "space") arrIndex.push(index);
  };
  playerBoard2.forEach(push);
  const ranNum = Math.floor(Math.random() * (arrIndex.length - 1));
  index2 = arrIndex[ranNum];
  findEmptySpace(arrIndex, ranNum, playerBoard2);
  const grid2 = playerBoard2[index2];
  if (grid2) grid2.classList.remove("space");
  return { grid2, index2, playerBoard2 };
}

function findEmptySpace(arrIndex, ranNum, playerBoard2) {
  if (_player_vs_computer__WEBPACK_IMPORTED_MODULE_0__.hit && visitedIndex >= 1) {
    visitedIndex = visitedIndex - 1;
    removeFromArray(0, +possibleValidShots[0] - 1);
    removeFromArray(1, +possibleValidShots[1] + 1);
    removeFromArray(2, +possibleValidShots[2] + 10);
    removeFromArray(3, +possibleValidShots[3] - 10);
    increaseVisitedIndex(playerBoard2);
    visitedIndex++;
  }
  if (_player_vs_computer__WEBPACK_IMPORTED_MODULE_0__.hit && visitedIndex === null) {
    firstHit = +_player_vs_computer__WEBPACK_IMPORTED_MODULE_0__.hit[0];
    const splitHit = _player_vs_computer__WEBPACK_IMPORTED_MODULE_0__.hit[0].split("");
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
  if (_player_vs_computer__WEBPACK_IMPORTED_MODULE_0__.hit === undefined && visitedIndex >= 1 && visitedIndex < 4) {
    index2 = possibleValidShots[visitedIndex];
    increaseVisitedIndex(playerBoard2);
    increaseVisitedIndex(playerBoard2);
    visitedIndex++;
  }
  if (_player_vs_computer__WEBPACK_IMPORTED_MODULE_0__.isSunkShipArray && _player_vs_computer__WEBPACK_IMPORTED_MODULE_0__.isSunkShipArray.includes(true)) {
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




/***/ }),

/***/ "./src/modules/dom-interactions/get-player-name.js":
/*!*********************************************************!*\
  !*** ./src/modules/dom-interactions/get-player-name.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getName": () => (/* binding */ getName),
/* harmony export */   "preventEmptyInput": () => (/* binding */ preventEmptyInput)
/* harmony export */ });
/* harmony import */ var _choose_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./choose-player */ "./src/modules/dom-interactions/choose-player.js");
/* harmony import */ var _name_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./name-input */ "./src/modules/dom-interactions/name-input.js");
/* harmony import */ var _ripple_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ripple-button */ "./src/modules/dom-interactions/ripple-button.js");




function getName(nameDetails) {
  const { inputDiv, startBtn, nameInput } = (0,_name_input__WEBPACK_IMPORTED_MODULE_1__.createInputElem)(
    nameDetails,
    "START GAME"
  );
  document.body.append(inputDiv);
  getInputValue(startBtn, nameInput);
}

function getInputValue(startBtn, nameInput) {
  const getNameDiv = document.querySelector(".input-div");
  const replaceNameDiv = () => {
    if (nameInput.value.trim() === "") {
      preventEmptyInput(nameInput);
      return;
    }
    document.body.classList.add("fade");
    setTimeout(() => {
      document.body.classList.remove("fade");
      const chooseDiv = (0,_choose_player__WEBPACK_IMPORTED_MODULE_0__.choosePlayer)(nameInput.value);
      document.body.replaceChild(chooseDiv, getNameDiv);
      localStorage.setItem("playerName", JSON.stringify(`${nameInput.value}`));
      (0,_ripple_button__WEBPACK_IMPORTED_MODULE_2__.addRippleEffect)();
    }, 500);
  };
  startBtn.addEventListener("click", replaceNameDiv);
}

function preventEmptyInput(nameInput) {
  const errorMsg = document.querySelector(".error-msg");
  errorMsg.classList.remove("hide");
  setTimeout(() => {
    errorMsg.classList.add("hide");
    nameInput.value = "";
  }, 2000);
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
  const errorMsg = (0,_helper_function__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("span", { class: "error-msg hide" });
  const startBtn = (0,_helper_function__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("button", { class: "start-btn" });

  errorMsg.textContent = "Enter A Valid Name";
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
/* harmony import */ var _player_vs_computer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player-vs-computer */ "./src/modules/dom-interactions/player-vs-computer.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player */ "./src/modules/dom-interactions/player.js");
/* harmony import */ var _ship_hover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ship-hover */ "./src/modules/dom-interactions/ship-hover.js");
/* harmony import */ var _ripple_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ripple-button */ "./src/modules/dom-interactions/ripple-button.js");









function renderGetNamePage() {
  document.body.classList.add("hidden");
  (0,_page_header__WEBPACK_IMPORTED_MODULE_2__.createHeader)("page-one-header");
  (0,_get_player_name__WEBPACK_IMPORTED_MODULE_1__.getName)("Enter Player's Name:");
  (0,_page_footer__WEBPACK_IMPORTED_MODULE_0__.createFooter)();
}

function announceWinner(playerName) {
  const gameOverDiv = (0,_helper_function__WEBPACK_IMPORTED_MODULE_3__.createDomElement)("div", { class: "game-over-div" });
  const gameOver = (0,_helper_function__WEBPACK_IMPORTED_MODULE_3__.createDomElement)("p", { class: "game-over blinking" });
  const winner = (0,_helper_function__WEBPACK_IMPORTED_MODULE_3__.createDomElement)("p", { class: "winner" });
  const name = (0,_helper_function__WEBPACK_IMPORTED_MODULE_3__.createDomElement)("p", { class: "name" });
  const restartBtn = (0,_helper_function__WEBPACK_IMPORTED_MODULE_3__.createDomElement)("button", { class: "btn-restart" });
  restartBtn.textContent = "RESTART";
  gameOver.textContent = "GAME OVER";
  name.textContent = playerName;
  winner.textContent = "The Winner Is";
  gameOverDiv.append(gameOver, winner, name, restartBtn);
  document.body.classList.add("fade");
  setTimeout(() => {
    document.body.classList.remove("fade");
    renderGetNamePage();
    const getNameDiv = document.querySelector(".input-div");
    document.body.replaceChild(gameOverDiv, getNameDiv);
    restartBtn.addEventListener("click", () => rerenderGetNamePage());
    (0,_ripple_button__WEBPACK_IMPORTED_MODULE_7__.addRippleEffect)();
  }, 400);
}

function restart() {
  const restart = document.createElement("button");
  const alignDiv = document.querySelector(".align-ships");
  const alignBtn = document.querySelector(".continue-btn");
  const axisBtn = document.querySelector(".axis-btn");
  if (alignBtn) alignDiv.replaceChild(restart, alignBtn);
  restart.textContent = "Restart";
  if (axisBtn) axisBtn.remove();
  restart.addEventListener("click", rerenderGetNamePage);
}

function rerenderGetNamePage() {
  document.body.classList.add("fade");
  setTimeout(() => {
    document.body.classList.remove("fade");
    while (document.body.firstChild)
    document.body.removeChild(document.body.firstChild);
  renderGetNamePage();
  (0,_ship_hover__WEBPACK_IMPORTED_MODULE_6__.resetShipHover)();
  (0,_player_vs_computer__WEBPACK_IMPORTED_MODULE_4__.resetPlayerVsComputer)();
  (0,_player__WEBPACK_IMPORTED_MODULE_5__.resetHumanPlayer)();
  (0,_ripple_button__WEBPACK_IMPORTED_MODULE_7__.addRippleEffect)();
  }, 400);
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
/* harmony import */ var _ripple_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ripple-button */ "./src/modules/dom-interactions/ripple-button.js");
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
      "click", addBgColor.bind(
        this, index, positionShip, board, squares, Arr, instruction2
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

/** Function gets called when you choose to play human */
function showEnemy() {
  const playerName = JSON.parse(localStorage.getItem("player2Name"));
  const instruction2 = document.querySelector(".instruction2");
  const player2 = document.querySelector(".player2-board");
  const containerDiv2 = document.querySelector(".container-div2");
  const player1 = document.querySelector(".player1-board");
  const containerDiv1 = document.querySelector(".container-div1");
  const grid = document.querySelectorAll(".player1-grid");
  const { startBtn, continueBtn } = createPlayBtn();
  continueBtn.classList.remove("hide");
  startBtn.classList.add("hide");

  const showShips = () => {
    document.body.classList.add("fade");
    setTimeout(() => {
      document.body.classList.remove("fade");
      instruction2.textContent = `${playerName}, Place Your Ships.`;
      player2.classList.remove("hide");
      containerDiv2.classList.remove("hide");
      player1.classList.add("hide");
      containerDiv1.classList.add("hide");
      continueBtn.classList.add("hide");
      startBtn.classList.remove("hide");
      grid.forEach((sqr) => {
        if (Array.from(sqr.classList).includes("ship"))
          sqr.classList.remove("ship");
      });
      (0,_ripple_button__WEBPACK_IMPORTED_MODULE_3__.addRippleEffect)();
    }, 400);
  };

  const showShips2 = () => {
    const grid = document.querySelectorAll(".player2-grid");
    grid.forEach((sqr) => {
      if (Array.from(sqr.classList).includes("ship"))
        sqr.classList.remove("ship");
    });
    document.body.classList.add("fade");
    setTimeout(() => {
      document.body.classList.remove("fade");
      instruction2.textContent = `${playerName}, take a shot.`;
      player1.classList.remove("hide");
      containerDiv1.classList.remove("hide");
      containerDiv2.classList.remove("hide");
      (0,_page_get_name__WEBPACK_IMPORTED_MODULE_2__.restart)();
      (0,_ripple_button__WEBPACK_IMPORTED_MODULE_3__.addRippleEffect)();
    }, 400);
  };

  if (this.classList[0] === "player1-grid")
    continueBtn.addEventListener("click", showShips);
  if (this.classList[0] === "player2-grid")
    continueBtn.addEventListener("click", showShips2);
}

/** Function gets called when you choose to play against Computer */
function showEnemyWater() {
  const player = document.querySelector(".player2-board");
  const containerDiv2 = document.querySelector(".container-div2");
  const { startBtn, instruction } = createPlayBtn();
  (0,_ripple_button__WEBPACK_IMPORTED_MODULE_3__.addRippleEffect)();
  instruction.textContent = "CLICK PLAY TO START PLAYING";
  startBtn.textContent = "Play";
  const showShips = () => {
    startBtn.textContent = "Play";
    document.body.classList.add("fade");
    setTimeout(() => {
      document.body.classList.remove("fade");
      const playerName = JSON.parse(localStorage.getItem("playerName"));
      player.classList.remove("hide");
      containerDiv2.classList.remove("hide");
      instruction.textContent = `Waiting for ${playerName}'s shot`;
      (0,_page_get_name__WEBPACK_IMPORTED_MODULE_2__.restart)();
      (0,_ripple_button__WEBPACK_IMPORTED_MODULE_3__.addRippleEffect)();
    }, 400);
  };
  startBtn.addEventListener("click", showShips);
}

function createPlayBtn() {
  const shipAxis = document.querySelector(".align-ships");
  const continueBtn = document.querySelector(".continue-btn");
  const instruction = shipAxis.children[0];
  const startBtn = shipAxis.children[1];
  (0,_ripple_button__WEBPACK_IMPORTED_MODULE_3__.addRippleEffect)();
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
/* harmony export */   "hit": () => (/* binding */ hit),
/* harmony export */   "isSunkShipArray": () => (/* binding */ isSunkShipArray),
/* harmony export */   "playerShots": () => (/* binding */ playerShots),
/* harmony export */   "resetPlayerVsComputer": () => (/* binding */ resetPlayerVsComputer),
/* harmony export */   "stopHere": () => (/* binding */ stopHere),
/* harmony export */   "validShots": () => (/* binding */ validShots)
/* harmony export */ });
/* harmony import */ var _find_empty_spot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find-empty-spot */ "./src/modules/dom-interactions/find-empty-spot.js");
/* harmony import */ var _page_get_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-get-name */ "./src/modules/dom-interactions/page-get-name.js");
/* harmony import */ var _place_ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./place-ship */ "./src/modules/dom-interactions/place-ship.js");
/* harmony import */ var _place_ship_random__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./place-ship-random */ "./src/modules/dom-interactions/place-ship-random.js");





let hit;
let time = 0;
let stopHere = 0;
let isSunkShipArray;

/** Checks for valid shots on ships */
function shots(showShips, className) {
  const playerBoard = document.querySelectorAll(`.${className}`);

  localStorage.setItem("player2Name", JSON.stringify("Computer"));
  const { receiveAttack, allShipsSunk } = showShips();
  const [receiveAttack2, , allShipsSunk2] = _place_ship__WEBPACK_IMPORTED_MODULE_2__.showShipsOnBoard.call(
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
  const { grid2, index2, playerBoard2 } = (0,_find_empty_spot__WEBPACK_IMPORTED_MODULE_0__.computerShots)();
  instruction.textContent = "Waiting for Computer's Shot.";
  validShots(
    grid, index, receiveAttack, playerBoard, allShipsSunk, instruction, playerName
  );

  setTimeout(() => {
    time = 0;
    const playerName = JSON.parse(localStorage.getItem("playerName"));
    const AIName = "Computer";
    if (stopHere === 1) return;
    instruction.textContent = `Waiting for ${playerName}'s Shot.`;
    const { hitCoord } = validShots(
      grid2, index2, receiveAttack2, playerBoard2, allShipsSunk2, instruction, AIName
    );
    hit = hitCoord;
  }, 1500);
}

/** Colours valid shots red */
function validShots(
  grid, index, receiveAttack, playerBoard, allShipsSunk, instruction, playerName
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
      (0,_page_get_name__WEBPACK_IMPORTED_MODULE_1__.announceWinner)(playerName);
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

function resetPlayerVsComputer() {
  time = 0;
  stopHere = 0;
}

const playerShots = shots.bind(null, _place_ship_random__WEBPACK_IMPORTED_MODULE_3__.showShipsRandomly, "player2-grid");



/***/ }),

/***/ "./src/modules/dom-interactions/player.js":
/*!************************************************!*\
  !*** ./src/modules/dom-interactions/player.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "humanPlayers": () => (/* binding */ humanPlayers),
/* harmony export */   "resetHumanPlayer": () => (/* binding */ resetHumanPlayer)
/* harmony export */ });
/* harmony import */ var _place_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./place-ship */ "./src/modules/dom-interactions/place-ship.js");
/* harmony import */ var _player_vs_computer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player-vs-computer */ "./src/modules/dom-interactions/player-vs-computer.js");



let count = 0;
let count2 = 0;
let time = 1;

/** Checks for valid shots on ships */
function player(className) {
  const playerBoard = document.querySelectorAll(`.${className}`);
  const [receiveAttack, Arr, allShipsSunk] = _place_ship__WEBPACK_IMPORTED_MODULE_0__.showShipsOnBoard.call(
    playerBoard[0],
    className
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
      if (_player_vs_computer__WEBPACK_IMPORTED_MODULE_1__.stopHere === 1) return;
      instruction2.textContent = `${playerName1}, take your shot.`;
      (0,_player_vs_computer__WEBPACK_IMPORTED_MODULE_1__.validShots)(
        grid,
        index,
        receiveAttack,
        playerBoard,
        allShipsSunk,
        instruction2,
        playerName2
      );
    }
    time = 1;
    count += 1;
  }
  if (grid.classList[0] === "player2-grid" && Arr.length >= 5) {
    if (count2 >= 1 && time === 1) {
      if (Array.from(player1.classList).includes("hide")) return;
      if (Array.from(player2.classList).includes("hide")) return;
      instruction2.textContent = `${playerName2}, take your shot.`;
      (0,_player_vs_computer__WEBPACK_IMPORTED_MODULE_1__.validShots)(
        grid,
        index,
        receiveAttack,
        playerBoard,
        allShipsSunk,
        instruction2,
        playerName1
      );
    }
    time = 0;
    count2 += 1;
  }
}

function humanPlayers() {
  player("player1-grid");
  player("player2-grid");
}

function resetHumanPlayer() {
  count = 0;
  count2 = 0;
  time = 1;
}




/***/ }),

/***/ "./src/modules/dom-interactions/ripple-button.js":
/*!*******************************************************!*\
  !*** ./src/modules/dom-interactions/ripple-button.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addRippleEffect": () => (/* binding */ addRippleEffect)
/* harmony export */ });
function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);

  circle.style.width = circle.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft}px`;
  circle.style.top = `${event.clientY - button.offsetTop}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];
  if (ripple) ripple.remove();
  button.appendChild(circle);
}

function addRippleEffect() {
  const buttons = document.querySelectorAll("button");
  for (const button of buttons) {
    button.addEventListener("mouseenter", createRipple);
    button.addEventListener("click", createRipple);
  }
}




/***/ }),

/***/ "./src/modules/dom-interactions/ship-hover.js":
/*!****************************************************!*\
  !*** ./src/modules/dom-interactions/ship-hover.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addHover": () => (/* binding */ addHover),
/* harmony export */   "resetShipHover": () => (/* binding */ resetShipHover)
/* harmony export */ });
let lengthOfShip = 5;
let counter = 5;

function addHover(className) {
  const playerBoard = document.querySelectorAll(className);
  playerBoard.forEach(placeShipHover);
  function placeShipHover(grid, index) {
    const axis = `${index}`.split("");
    if (axis.length === 1) axis.unshift("0");
    const indexArr = [];
    const removeHoverEffect = (index) => {
      if (playerBoard[+index]) playerBoard[+index].classList.remove("grey");
    };
    const emptyIndexArr = () => {
      indexArr.forEach(removeHoverEffect);
      indexArr.splice(0);
    };
    const setShipLength = () => {
      if (
        Array.from(grid.classList).includes("grey") &&
        !Array.from(grid.classList).includes("ship")
      ) {
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
      if (counter < 1)
        playerBoard.forEach((sqr) => sqr.classList.remove("red"));
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

function resetShipHover() {
  lengthOfShip = 5;
  counter = 5;
}




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

/** This function places ships on the gameboard with their length */
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
/* harmony import */ var _modules_dom_interactions_ripple_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom-interactions/ripple-button */ "./src/modules/dom-interactions/ripple-button.js");
/* harmony import */ var _modules_style_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/style/style.css */ "./src/modules/style/style.css");




(0,_modules_dom_interactions_page_get_name__WEBPACK_IMPORTED_MODULE_0__.renderGetNamePage)();
(0,_modules_dom_interactions_ripple_button__WEBPACK_IMPORTED_MODULE_1__.addRippleEffect)();

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.body.classList.add("opacity");
  }, 400);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc3R5bGUvc3R5bGUuY3NzPzc0ZDAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvMmQtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS1pbnRlcmFjdGlvbnMvY2hvb3NlLXBsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLWludGVyYWN0aW9ucy9kb20tZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20taW50ZXJhY3Rpb25zL2ZpbmQtZW1wdHktc3BvdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLWludGVyYWN0aW9ucy9nZXQtcGxheWVyLW5hbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS1pbnRlcmFjdGlvbnMvaGVscGVyLWZ1bmN0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20taW50ZXJhY3Rpb25zL25hbWUtaW5wdXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS1pbnRlcmFjdGlvbnMvcGFnZS1mb290ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS1pbnRlcmFjdGlvbnMvcGFnZS1nZXQtbmFtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLWludGVyYWN0aW9ucy9wYWdlLWhlYWRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLWludGVyYWN0aW9ucy9wbGFjZS1zaGlwLXJhbmRvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLWludGVyYWN0aW9ucy9wbGFjZS1zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20taW50ZXJhY3Rpb25zL3BsYXllci12cy1jb21wdXRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLWludGVyYWN0aW9ucy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS1pbnRlcmFjdGlvbnMvcmlwcGxlLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLWludGVyYWN0aW9ucy9zaGlwLWhvdmVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dldFNoaXBDb29yZGluYXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcGxhY2VTaGlwc09uQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NocC1heGlzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy92YWxpZC1tb3ZlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXFxuICAgIGNpcmNsZSBhdCAxMDAlLFxcbiAgICAjMzQxNDA2ZTgsXFxuICAgICMzMzMgNTAlLFxcbiAgICAjMGYxMDE3IDc1JSxcXG4gICAgIzEyMyA3NSVcXG4gICk7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuN3M7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB1bnNldDtcXG59XFxuXFxuYm9keS5vcGFjaXR5IHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuN3M7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5ib2R5LmZhZGUge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJvcmRlcjogMGNoO1xcbn1cXG5cXG5oMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IG1pbigxNXZ3LCA4cmVtKTtcXG4gIGNvbG9yOiAjNzE1ZjM2O1xcbiAgdGV4dC1zaGFkb3c6IDNweCAtN3B4IDVweCBibGFjaztcXG59XFxuXFxuLmgxIHtcXG4gIGZvbnQtc2l6ZTogbWluKDE1dncsIDRyZW0pO1xcbn1cXG5cXG4uaW5zdHJ1Y3Rpb24yIHtcXG4gIGNvbG9yOiBhcXVhO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLmlucHV0LWRpdixcXG4uZ2FtZS1vdmVyLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5cXG4uaW5wdXQtZGl2IHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjdzO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcXG59XFxuXFxuLmlucHV0LWRpdi5mYWRlIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5nYW1lLW92ZXItZGl2IHtcXG4gIG1hcmdpbi10b3A6IDY1cHg7XFxufVxcblxcbi5hbGlnbi1zaGlwcyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICBjb2xvcjogYXF1YW1hcmluZTtcXG59XFxuXFxuaW5wdXQge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5zZWNvbmQtaW5wdXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc3RhcnQtYnRuIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jaG9vc2UtZGl2IHtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuN3M7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xcbn1cXG5cXG4uY2hvb3NlLWRpdi5mYWRlIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5jaG9vc2UtZGl2ID4gcCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIGNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG5cXG4uYnRuLWRpdiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ucGxheS1odW1hbiB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuLnBsYXktYWksXFxuLnBsYXktaHVtYW4sXFxuLmJ0bi1yZXN0YXJ0LFxcbi5zdGFydC1idG4ge1xcbiAgd2lkdGg6IDExMHB4O1xcbiAgcGFkZGluZzogMTVweCAwO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLmF4aXMtYnRuIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgd2lkdGg6IDkwcHg7XFxufVxcblxcbi5hbGlnbi1zaGlwcyA+IGJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIHdpZHRoOiA5MHB4O1xcbn1cXG5cXG4uYnRuLXJlc3RhcnQge1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uZ2FtZS1vdmVyIHtcXG4gIGZvbnQtc2l6ZTogeHh4LWxhcmdlO1xcbiAgY29sb3I6ICNjM2NiZWI7XFxuICB0ZXh0LXNoYWRvdzogM3B4IC03cHggNXB4IGJsYWNrO1xcbn1cXG5cXG4ud2lubmVyLFxcbi5uYW1lIHtcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICBjb2xvcjogY2FkZXRibHVlO1xcbiAgbWFyZ2luLXRvcDogLTE1cHg7XFxuICB0ZXh0LXNoYWRvdzogMHB4IC01cHggMnB4IGJsYWNrO1xcbn1cXG5cXG4uZ2FtZS1vdmVyLWRpdiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcm93LWdhcDogNjBweDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICBwYWRkaW5nOiAwIDVweDtcXG59XFxuXFxuLmNvbnRhaW5lci1kaXYxLFxcbi5jb250YWluZXItZGl2MiB7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogNDMwcHg7XFxuICBoZWlnaHQ6IDQzMHB4O1xcbn1cXG5cXG4uZXJyb3ItbXNnIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiBncmVlbnllbGxvdztcXG59XFxuXFxuLnBsYXllcixcXG4ucGxheWVyMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2RlZGFmZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XFxufVxcblxcbi5wbGF5ZXIxLWJvYXJkLFxcbi5wbGF5ZXIyLWJvYXJkIHtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcygwLjcpO1xcbiAgcGFkZGluZzogMXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2YyZjJmMjtcXG4gIGJveC1zaGFkb3c6IDdweCA1cHggOXB4IDJweDtcXG59XFxuXFxuLnBsYXllcjEtZ3JpZCxcXG4ucGxheWVyMi1ncmlkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmOGY4Zjg7XFxufVxcblxcbi5wbGF5ZXIxLWdyaWQ6aG92ZXIsXFxuLnBsYXllcjItZ3JpZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxODMsIDE4Myk7XFxufVxcblxcbi5yZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uZ3JleSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxODMsIDE4MykgIWltcG9ydGFudDtcXG59XFxuXFxuLmhpZGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uc2hvdyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmZmZmNzAgIWltcG9ydGFudDtcXG59XFxuXFxuLnNob3RzIHtcXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4udmFsaWQtc2hvdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcXG59XFxuXFxuLnN1bmstc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ibGlua2luZyB7XFxuICBhbmltYXRpb246IGJsaW5raW5nQmFja2dyb3VuZCAycyBpbmZpbml0ZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDQwMG1zO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjIwMGVlO1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGJveC1zaGFkb3c6IDFweCAycHggMXJlbSAwcHggcmdiKDAgMCAwIC8gOTUlKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnJpcHBsZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgYW5pbWF0aW9uOiByaXBwbGUgNjAwbXMgbGluZWFyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIG1hcmdpbi10b3A6IC01MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IC01MHB4O1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuQGtleWZyYW1lcyByaXBwbGUge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB9XFxuICB0b3tcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSg0KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBibGlua2luZ0JhY2tncm91bmQge1xcbiAgMCUge1xcbiAgICBjb2xvcjogIzAwNDQzNTtcXG4gIH1cXG5cXG4gIDI1JSB7XFxuICAgIGNvbG9yOiAjYWM5ZGZmO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgY29sb3I6ICMxMzcwNTY7XFxuICB9XFxuXFxuICA3MCUge1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBjb2xvcjogIzI3MjA2MztcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5ib2FyZC1jb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgfVxcbn1cXG5cXG5mb290ZXIge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJhN2E3O1xcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tb2R1bGVzL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQjs7Ozs7O0dBTUM7RUFDRCw0QkFBNEI7RUFDNUIsVUFBVTtFQUNWLHlCQUF5QjtFQUN6Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsY0FBYztF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QjtFQUNsQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLDBDQUEwQztFQUMxQyxZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXFxuICAgIGNpcmNsZSBhdCAxMDAlLFxcbiAgICAjMzQxNDA2ZTgsXFxuICAgICMzMzMgNTAlLFxcbiAgICAjMGYxMDE3IDc1JSxcXG4gICAgIzEyMyA3NSVcXG4gICk7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuN3M7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB1bnNldDtcXG59XFxuXFxuYm9keS5vcGFjaXR5IHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuN3M7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5ib2R5LmZhZGUge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJvcmRlcjogMGNoO1xcbn1cXG5cXG5oMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IG1pbigxNXZ3LCA4cmVtKTtcXG4gIGNvbG9yOiAjNzE1ZjM2O1xcbiAgdGV4dC1zaGFkb3c6IDNweCAtN3B4IDVweCBibGFjaztcXG59XFxuXFxuLmgxIHtcXG4gIGZvbnQtc2l6ZTogbWluKDE1dncsIDRyZW0pO1xcbn1cXG5cXG4uaW5zdHJ1Y3Rpb24yIHtcXG4gIGNvbG9yOiBhcXVhO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLmlucHV0LWRpdixcXG4uZ2FtZS1vdmVyLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5cXG4uaW5wdXQtZGl2IHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjdzO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcXG59XFxuXFxuLmlucHV0LWRpdi5mYWRlIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5nYW1lLW92ZXItZGl2IHtcXG4gIG1hcmdpbi10b3A6IDY1cHg7XFxufVxcblxcbi5hbGlnbi1zaGlwcyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICBjb2xvcjogYXF1YW1hcmluZTtcXG59XFxuXFxuaW5wdXQge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5zZWNvbmQtaW5wdXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc3RhcnQtYnRuIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jaG9vc2UtZGl2IHtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuN3M7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xcbn1cXG5cXG4uY2hvb3NlLWRpdi5mYWRlIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5jaG9vc2UtZGl2ID4gcCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIGNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG5cXG4uYnRuLWRpdiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ucGxheS1odW1hbiB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuLnBsYXktYWksXFxuLnBsYXktaHVtYW4sXFxuLmJ0bi1yZXN0YXJ0LFxcbi5zdGFydC1idG4ge1xcbiAgd2lkdGg6IDExMHB4O1xcbiAgcGFkZGluZzogMTVweCAwO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLmF4aXMtYnRuIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgd2lkdGg6IDkwcHg7XFxufVxcblxcbi5hbGlnbi1zaGlwcyA+IGJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIHdpZHRoOiA5MHB4O1xcbn1cXG5cXG4uYnRuLXJlc3RhcnQge1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uZ2FtZS1vdmVyIHtcXG4gIGZvbnQtc2l6ZTogeHh4LWxhcmdlO1xcbiAgY29sb3I6ICNjM2NiZWI7XFxuICB0ZXh0LXNoYWRvdzogM3B4IC03cHggNXB4IGJsYWNrO1xcbn1cXG5cXG4ud2lubmVyLFxcbi5uYW1lIHtcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICBjb2xvcjogY2FkZXRibHVlO1xcbiAgbWFyZ2luLXRvcDogLTE1cHg7XFxuICB0ZXh0LXNoYWRvdzogMHB4IC01cHggMnB4IGJsYWNrO1xcbn1cXG5cXG4uZ2FtZS1vdmVyLWRpdiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcm93LWdhcDogNjBweDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICBwYWRkaW5nOiAwIDVweDtcXG59XFxuXFxuLmNvbnRhaW5lci1kaXYxLFxcbi5jb250YWluZXItZGl2MiB7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogNDMwcHg7XFxuICBoZWlnaHQ6IDQzMHB4O1xcbn1cXG5cXG4uZXJyb3ItbXNnIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiBncmVlbnllbGxvdztcXG59XFxuXFxuLnBsYXllcixcXG4ucGxheWVyMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2RlZGFmZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XFxufVxcblxcbi5wbGF5ZXIxLWJvYXJkLFxcbi5wbGF5ZXIyLWJvYXJkIHtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcygwLjcpO1xcbiAgcGFkZGluZzogMXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2YyZjJmMjtcXG4gIGJveC1zaGFkb3c6IDdweCA1cHggOXB4IDJweDtcXG59XFxuXFxuLnBsYXllcjEtZ3JpZCxcXG4ucGxheWVyMi1ncmlkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmOGY4Zjg7XFxufVxcblxcbi5wbGF5ZXIxLWdyaWQ6aG92ZXIsXFxuLnBsYXllcjItZ3JpZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxODMsIDE4Myk7XFxufVxcblxcbi5yZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uZ3JleSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxODMsIDE4MykgIWltcG9ydGFudDtcXG59XFxuXFxuLmhpZGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uc2hvdyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmZmZmNzAgIWltcG9ydGFudDtcXG59XFxuXFxuLnNob3RzIHtcXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4udmFsaWQtc2hvdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcXG59XFxuXFxuLnN1bmstc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ibGlua2luZyB7XFxuICBhbmltYXRpb246IGJsaW5raW5nQmFja2dyb3VuZCAycyBpbmZpbml0ZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDQwMG1zO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjIwMGVlO1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGJveC1zaGFkb3c6IDFweCAycHggMXJlbSAwcHggcmdiKDAgMCAwIC8gOTUlKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnJpcHBsZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgYW5pbWF0aW9uOiByaXBwbGUgNjAwbXMgbGluZWFyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIG1hcmdpbi10b3A6IC01MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IC01MHB4O1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuQGtleWZyYW1lcyByaXBwbGUge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB9XFxuICB0b3tcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSg0KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBibGlua2luZ0JhY2tncm91bmQge1xcbiAgMCUge1xcbiAgICBjb2xvcjogIzAwNDQzNTtcXG4gIH1cXG5cXG4gIDI1JSB7XFxuICAgIGNvbG9yOiAjYWM5ZGZmO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgY29sb3I6ICMxMzcwNTY7XFxuICB9XFxuXFxuICA3MCUge1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBjb2xvcjogIzI3MjA2MztcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5ib2FyZC1jb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgfVxcbn1cXG5cXG5mb290ZXIge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJhN2E3O1xcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gY3JlYXRlMkRBcnJheShudW0pIHtcbiAgY29uc3QgYm9hcmQgPSBuZXcgQXJyYXkobnVtKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgYm9hcmRbaV0gPSBuZXcgQXJyYXkobnVtKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJvYXJkW2ldLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBib2FyZFtpXVtqXSA9IDA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJvYXJkO1xufVxuXG5leHBvcnQge2NyZWF0ZTJEQXJyYXl9O1xuIiwiaW1wb3J0IHsgaHVtYW5QbGF5ZXJzIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyBjcmVhdGVHYW1lYm9hcmQgfSBmcm9tIFwiLi9kb20tZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBjcmVhdGVEb21FbGVtZW50IH0gZnJvbSBcIi4vaGVscGVyLWZ1bmN0aW9uXCI7XG5pbXBvcnQgeyBjcmVhdGVJbnB1dEVsZW0gfSBmcm9tIFwiLi9uYW1lLWlucHV0XCI7XG5pbXBvcnQgeyBwbGF5ZXJTaG90cyB9IGZyb20gXCIuL3BsYXllci12cy1jb21wdXRlclwiO1xuaW1wb3J0IHsgcHJldmVudEVtcHR5SW5wdXQgfSBmcm9tIFwiLi9nZXQtcGxheWVyLW5hbWVcIjtcbmltcG9ydCB7IGFkZEhvdmVyLCByZXNldFNoaXBIb3ZlciB9IGZyb20gXCIuL3NoaXAtaG92ZXJcIjtcbmltcG9ydCB7IGFkZFJpcHBsZUVmZmVjdCB9IGZyb20gXCIuL3JpcHBsZS1idXR0b25cIjtcblxuLyoqIENyZWF0ZXMgRGl2IGNvbnRhaW5lciBmb3IgY2hvb3NpbmcgeW91ciBvcHBvbmVudC4gKi9cbmZ1bmN0aW9uIGNob29zZVBsYXllcihwbGF5ZXJOYW1lKSB7XG4gIGNvbnN0IGNob29zZURpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJjaG9vc2UtZGl2XCIgfSk7XG4gIGNvbnN0IGJ0bkRpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJidG4tZGl2XCIgfSk7XG4gIGNvbnN0IHBsYXlBaSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJidXR0b25cIiwgeyBjbGFzczogXCJwbGF5LWFpXCIgfSk7XG4gIGNvbnN0IHBsYXlIdW1hbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJidXR0b25cIiwgeyBjbGFzczogXCJwbGF5LWh1bWFuXCIgfSk7XG4gIGNvbnN0IGluc3RydWN0aW9uID0gY3JlYXRlRG9tRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGFsaWduU2hpcERpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJhbGlnbi1zaGlwc1wiIH0pO1xuICBjb25zdCBpbnN0cnVjdGlvbjIgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcImluc3RydWN0aW9uMlwiIH0pO1xuICBjb25zdCBuYW1lID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJuYW1lMVwiIH0pO1xuICBjb25zdCBheGlzQnRuID0gY3JlYXRlRG9tRWxlbWVudChcImJ1dHRvblwiLCB7IGNsYXNzOiBcImF4aXMtYnRuXCIgfSk7XG4gIGNvbnN0IGNvbnRpbnVlQnRuID0gY3JlYXRlRG9tRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgY2xhc3M6IFwiY29udGludWUtYnRuIGhpZGVcIixcbiAgfSk7XG4gIGNvbnN0IHBsYXlOYW1lID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBsYXllck5hbWVcIikpO1xuICBpbnN0cnVjdGlvbjIudGV4dENvbnRlbnQgPSBgJHtwbGF5TmFtZX0sIFBsYWNlIFlvdXIgU2hpcHMuYDtcbiAgcGxheUFpLnRleHRDb250ZW50ID0gXCJQTEFZIEFJXCI7XG4gIHBsYXlIdW1hbi50ZXh0Q29udGVudCA9IFwiUExBWSBIVU1BTlwiO1xuICBheGlzQnRuLnRleHRDb250ZW50ID0gXCJIb3Jpem9udGFsXCI7XG4gIGNvbnRpbnVlQnRuLnRleHRDb250ZW50ID0gXCJOZXh0XCI7XG4gIGJ0bkRpdi5hcHBlbmQocGxheUFpLCBwbGF5SHVtYW4pO1xuICBhbGlnblNoaXBEaXYuYXBwZW5kKGluc3RydWN0aW9uMiwgYXhpc0J0biwgY29udGludWVCdG4pO1xuICBuYW1lLnRleHRDb250ZW50ID0gYEhlbGxvICR7cGxheWVyTmFtZX0sYDtcbiAgaW5zdHJ1Y3Rpb24udGV4dENvbnRlbnQgPSBcIkNob29zZSBZb3VyIEVuZW15LlwiO1xuICBjaG9vc2VEaXYuYXBwZW5kKG5hbWUsIGluc3RydWN0aW9uLCBidG5EaXYpO1xuICBhZGRMaXN0ZW5lclRvQnRuKFxuICAgIGNvbnRpbnVlQnRuLFxuICAgIGF4aXNCdG4sXG4gICAgcGxheUFpLFxuICAgIGFsaWduU2hpcERpdixcbiAgICBjaG9vc2VEaXYsXG4gICAgcGxheUh1bWFuXG4gICk7XG5cbiAgcmV0dXJuIGNob29zZURpdjtcbn1cblxuZnVuY3Rpb24gYWRkTGlzdGVuZXJUb0J0bihcbiAgY29udGludWVCdG4sXG4gIGF4aXNCdG4sXG4gIHBsYXlBaSxcbiAgYWxpZ25TaGlwRGl2LFxuICBjaG9vc2VEaXYsXG4gIHBsYXlIdW1hblxuKSB7XG4gIGNvbnRpbnVlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXNldFNoaXBIb3Zlcik7XG4gIGNvbnN0IGNoYW5nZUF4aXMgPSAoKSA9PlxuICAgIChheGlzQnRuLnRleHRDb250ZW50ID1cbiAgICAgIGF4aXNCdG4udGV4dENvbnRlbnQgPT09IFwiSG9yaXpvbnRhbFwiID8gXCJWZXJ0aWNhbFwiIDogXCJIb3Jpem9udGFsXCIpO1xuICBheGlzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VBeGlzKTtcbiAgcGxheUFpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJjbGlja1wiLFxuICAgIGluc2VydEJvYXJkLmJpbmQobnVsbCwgYWxpZ25TaGlwRGl2LCBjaG9vc2VEaXYsIHBsYXllclNob3RzKVxuICApO1xuICBwbGF5SHVtYW4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImNsaWNrXCIsXG4gICAgcGxheWVyMk5hbWUuYmluZChudWxsLCBjaG9vc2VEaXYsIGh1bWFuUGxheWVycywgYWxpZ25TaGlwRGl2KVxuICApO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRCb2FyZChhbGlnblNoaXBEaXYsIGNob29zZURpdiwgcGxheWVyU2hvdCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIik7XG4gIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuICBjb25zdCB7IGJvYXJkQ29udGFpbmVyIH0gPSBjcmVhdGVHYW1lYm9hcmQoKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiZmFkZVwiKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoMVwiKTtcbiAgICBoZWFkLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiZmFkZVwiKTtcbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShhbGlnblNoaXBEaXYsIGNob29zZURpdik7XG4gICAgZG9jdW1lbnQuYm9keS5yZXBsYWNlQ2hpbGQoYm9hcmRDb250YWluZXIsIGNob29zZURpdik7XG4gICAgYWRkSG92ZXIoXCIucGxheWVyMS1ncmlkXCIpO1xuICAgIGFkZEhvdmVyKFwiLnBsYXllcjItZ3JpZFwiKTtcbiAgICBwbGF5ZXJTaG90KCk7XG4gICAgc2V0UGxheWVyc05hbWUoKTtcbiAgICBhZGRSaXBwbGVFZmZlY3QoKTtcbiAgfSwgNDAwKTtcbn1cblxuZnVuY3Rpb24gc2V0UGxheWVyc05hbWUoKSB7XG4gIGNvbnN0IHBsYXllcjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllclwiKTtcbiAgY29uc3QgcGxheWVyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyMlwiKTtcbiAgY29uc3QgcGxheWVyTmFtZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwbGF5ZXJOYW1lXCIpKTtcbiAgY29uc3QgcGxheWVyTmFtZTIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGxheWVyMk5hbWVcIikpO1xuICBwbGF5ZXIxLnRleHRDb250ZW50ID0gYFBsYXllciAxOiAke3BsYXllck5hbWV9YDtcbiAgcGxheWVyMi50ZXh0Q29udGVudCA9IGBQbGF5ZXIgMjogJHtwbGF5ZXJOYW1lMn1gO1xufVxuXG5mdW5jdGlvbiBwbGF5ZXIyTmFtZShjaG9vc2VEaXYsIHBsYXllclNob3QsIGFsaWduU2hpcERpdikge1xuICBjb25zdCB7IGlucHV0RGl2LCBzdGFydEJ0biwgbmFtZUlucHV0IH0gPSBjcmVhdGVJbnB1dEVsZW0oXG4gICAgXCJFbnRlciBIdW1hbiBOYW1lXCIsXG4gICAgXCJDb250aW51ZVwiXG4gICk7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImZhZGVcIik7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImZhZGVcIik7XG4gICAgZG9jdW1lbnQuYm9keS5yZXBsYWNlQ2hpbGQoaW5wdXREaXYsIGNob29zZURpdik7XG4gICAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIHBsYXllcjFCb2FyZC5iaW5kKG51bGwsIG5hbWVJbnB1dCwgaW5wdXREaXYsIHBsYXllclNob3QsIGFsaWduU2hpcERpdilcbiAgICApO1xuICAgIGFkZFJpcHBsZUVmZmVjdCgpO1xuICB9LCA0MDApO1xufVxuXG5mdW5jdGlvbiBwbGF5ZXIxQm9hcmQobmFtZUlucHV0LCBpbnB1dERpdiwgcGxheWVyU2hvdCwgYWxpZ25TaGlwRGl2KSB7XG4gIGlmIChuYW1lSW5wdXQudmFsdWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcHJldmVudEVtcHR5SW5wdXQobmFtZUlucHV0KTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJzZWNvbmQtaW5wdXRcIik7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicGxheWVyMk5hbWVcIiwgSlNPTi5zdHJpbmdpZnkoYCR7bmFtZUlucHV0LnZhbHVlfWApKTtcbiAgaW5zZXJ0Qm9hcmQoYWxpZ25TaGlwRGl2LCBpbnB1dERpdiwgcGxheWVyU2hvdCk7XG59XG5cbmV4cG9ydCB7IGNob29zZVBsYXllciB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRG9tRWxlbWVudCB9IGZyb20gXCIuL2hlbHBlci1mdW5jdGlvblwiO1xuXG4vKiogQ3JlYXRlcyBET00gZ2FtZWJvYXJkICovXG5mdW5jdGlvbiBjcmVhdGVHYW1lYm9hcmQoKSB7XG4gIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImJvYXJkLWNvbnRhaW5lclwiIH0pO1xuICBjb25zdCBjb250YWluZXJEaXYxID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImNvbnRhaW5lci1kaXYxXCIgfSk7XG4gIGNvbnN0IGNvbnRhaW5lckRpdjIgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiY29udGFpbmVyLWRpdjIgaGlkZVwiIH0pO1xuICBjb25zdCBwbGF5ZXIxID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJwbGF5ZXJcIiB9KTtcbiAgY29uc3QgcGxheWVyMiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwicGxheWVyMlwiIH0pO1xuICBjb25zdCBncmlkcyA9IChwbGF5ZXIsIHBsYXllckdyaWQpID0+IHtcbiAgICBjb25zdCBzcXVhcmUgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IHBsYXllciB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBncmlkID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBwbGF5ZXJHcmlkIH0pO1xuICAgICAgc3F1YXJlLmFwcGVuZENoaWxkKGdyaWQpO1xuICAgIH1cbiAgICByZXR1cm4gc3F1YXJlO1xuICB9O1xuICBjb250YWluZXJEaXYxLmFwcGVuZChwbGF5ZXIxLCBncmlkcyhcInBsYXllcjEtYm9hcmRcIiwgXCJwbGF5ZXIxLWdyaWQgc3BhY2VcIikpO1xuICBjb250YWluZXJEaXYyLmFwcGVuZChcbiAgICBwbGF5ZXIyLFxuICAgIGdyaWRzKFwicGxheWVyMi1ib2FyZCBoaWRlXCIsIFwicGxheWVyMi1ncmlkIHNwYWNlXCIpXG4gICk7XG4gIGJvYXJkQ29udGFpbmVyLmFwcGVuZChjb250YWluZXJEaXYxLCBjb250YWluZXJEaXYyKTtcbiAgcmV0dXJuIHsgYm9hcmRDb250YWluZXIgfTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlR2FtZWJvYXJkIH07XG4iLCJpbXBvcnQgeyBoaXQsIGlzU3Vua1NoaXBBcnJheSB9IGZyb20gXCIuL3BsYXllci12cy1jb21wdXRlclwiO1xuXG5sZXQgaW5kZXgyO1xubGV0IHZpc2l0ZWRJbmRleCA9IG51bGw7XG5sZXQgcG9zc2libGVWYWxpZFNob3RzID0gW107XG5sZXQgZmlyc3RIaXQ7XG5cbmZ1bmN0aW9uIGNvbXB1dGVyU2hvdHMoKSB7XG4gIGNvbnN0IGFyckluZGV4ID0gW107XG4gIGNvbnN0IHBsYXllckJvYXJkMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyMS1ncmlkXCIpO1xuICBjb25zdCBwdXNoID0gKHNxdWFyZSwgaW5kZXgpID0+IHtcbiAgICBpZiAoc3F1YXJlLmNsYXNzTGlzdFsxXSA9PT0gXCJzcGFjZVwiKSBhcnJJbmRleC5wdXNoKGluZGV4KTtcbiAgfTtcbiAgcGxheWVyQm9hcmQyLmZvckVhY2gocHVzaCk7XG4gIGNvbnN0IHJhbk51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChhcnJJbmRleC5sZW5ndGggLSAxKSk7XG4gIGluZGV4MiA9IGFyckluZGV4W3Jhbk51bV07XG4gIGZpbmRFbXB0eVNwYWNlKGFyckluZGV4LCByYW5OdW0sIHBsYXllckJvYXJkMik7XG4gIGNvbnN0IGdyaWQyID0gcGxheWVyQm9hcmQyW2luZGV4Ml07XG4gIGlmIChncmlkMikgZ3JpZDIuY2xhc3NMaXN0LnJlbW92ZShcInNwYWNlXCIpO1xuICByZXR1cm4geyBncmlkMiwgaW5kZXgyLCBwbGF5ZXJCb2FyZDIgfTtcbn1cblxuZnVuY3Rpb24gZmluZEVtcHR5U3BhY2UoYXJySW5kZXgsIHJhbk51bSwgcGxheWVyQm9hcmQyKSB7XG4gIGlmIChoaXQgJiYgdmlzaXRlZEluZGV4ID49IDEpIHtcbiAgICB2aXNpdGVkSW5kZXggPSB2aXNpdGVkSW5kZXggLSAxO1xuICAgIHJlbW92ZUZyb21BcnJheSgwLCArcG9zc2libGVWYWxpZFNob3RzWzBdIC0gMSk7XG4gICAgcmVtb3ZlRnJvbUFycmF5KDEsICtwb3NzaWJsZVZhbGlkU2hvdHNbMV0gKyAxKTtcbiAgICByZW1vdmVGcm9tQXJyYXkoMiwgK3Bvc3NpYmxlVmFsaWRTaG90c1syXSArIDEwKTtcbiAgICByZW1vdmVGcm9tQXJyYXkoMywgK3Bvc3NpYmxlVmFsaWRTaG90c1szXSAtIDEwKTtcbiAgICBpbmNyZWFzZVZpc2l0ZWRJbmRleChwbGF5ZXJCb2FyZDIpO1xuICAgIHZpc2l0ZWRJbmRleCsrO1xuICB9XG4gIGlmIChoaXQgJiYgdmlzaXRlZEluZGV4ID09PSBudWxsKSB7XG4gICAgZmlyc3RIaXQgPSAraGl0WzBdO1xuICAgIGNvbnN0IHNwbGl0SGl0ID0gaGl0WzBdLnNwbGl0KFwiXCIpO1xuICAgIHBvc3NpYmxlVmFsaWRTaG90cyA9IFtcbiAgICAgIHNwbGl0SGl0WzBdICsgKCtzcGxpdEhpdFsxXSAtIDEpLFxuICAgICAgc3BsaXRIaXRbMF0gKyAoK3NwbGl0SGl0WzFdICsgMSksXG4gICAgICArc3BsaXRIaXRbMF0gKyAxICsgc3BsaXRIaXRbMV0sXG4gICAgICArc3BsaXRIaXRbMF0gLSAxICsgc3BsaXRIaXRbMV0sXG4gICAgXTtcbiAgICB2aXNpdGVkSW5kZXggPSAwO1xuICAgIGluZGV4MiA9IHBvc3NpYmxlVmFsaWRTaG90c1t2aXNpdGVkSW5kZXhdO1xuICAgIGluY3JlYXNlVmlzaXRlZEluZGV4KHBsYXllckJvYXJkMik7XG4gICAgaW5jcmVhc2VWaXNpdGVkSW5kZXgocGxheWVyQm9hcmQyKTtcbiAgICBpbmNyZWFzZVZpc2l0ZWRJbmRleChwbGF5ZXJCb2FyZDIpO1xuICAgIHZpc2l0ZWRJbmRleCsrO1xuICB9XG4gIGlmIChoaXQgPT09IHVuZGVmaW5lZCAmJiB2aXNpdGVkSW5kZXggPj0gMSAmJiB2aXNpdGVkSW5kZXggPCA0KSB7XG4gICAgaW5kZXgyID0gcG9zc2libGVWYWxpZFNob3RzW3Zpc2l0ZWRJbmRleF07XG4gICAgaW5jcmVhc2VWaXNpdGVkSW5kZXgocGxheWVyQm9hcmQyKTtcbiAgICBpbmNyZWFzZVZpc2l0ZWRJbmRleChwbGF5ZXJCb2FyZDIpO1xuICAgIHZpc2l0ZWRJbmRleCsrO1xuICB9XG4gIGlmIChpc1N1bmtTaGlwQXJyYXkgJiYgaXNTdW5rU2hpcEFycmF5LmluY2x1ZGVzKHRydWUpKSB7XG4gICAgcG9zc2libGVWYWxpZFNob3RzLnNwbGljZSgwKTtcbiAgICBpbmRleDIgPSBhcnJJbmRleFtyYW5OdW1dO1xuICAgIHZpc2l0ZWRJbmRleCA9IG51bGw7XG4gICAgZmlyc3RIaXQgPSBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZyb21BcnJheShpbmRleCwgZXhwcmVzc2lvbikge1xuICBpZiAodmlzaXRlZEluZGV4ID09PSBpbmRleCkge1xuICAgIGluZGV4MiA9IGV4cHJlc3Npb247XG4gICAgcG9zc2libGVWYWxpZFNob3RzLnNwbGljZSh2aXNpdGVkSW5kZXgsIDEsIGluZGV4Mik7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5jcmVhc2VWaXNpdGVkSW5kZXgocGxheWVyQm9hcmQyKSB7XG4gIGlmIChcbiAgICAraW5kZXgyIDwgMCB8fFxuICAgICtpbmRleDIgPiA5OSB8fFxuICAgIGlzTmFOKCtpbmRleDIpIHx8XG4gICAgaW5kZXgyID09PSBcIjAxMFwiIHx8XG4gICAgQXJyYXkuZnJvbShwbGF5ZXJCb2FyZDJbK2luZGV4Ml0uY2xhc3NMaXN0KS5pbmNsdWRlcyhcInNob3RzXCIpXG4gICkge1xuICAgIHZpc2l0ZWRJbmRleCsrO1xuICB9XG4gIGluZGV4MiA9ICtwb3NzaWJsZVZhbGlkU2hvdHNbdmlzaXRlZEluZGV4XTtcbiAgaWYgKFxuICAgIGZpcnN0SGl0ICYmXG4gICAgcGxheWVyQm9hcmQyWytpbmRleDJdICYmXG4gICAgQXJyYXkuZnJvbShwbGF5ZXJCb2FyZDJbK2luZGV4Ml0uY2xhc3NMaXN0KS5pbmNsdWRlcyhcInNoaXBcIikgJiZcbiAgICBwbGF5ZXJCb2FyZDJbK2luZGV4Ml0uY2xhc3NMaXN0WzNdICE9PSBwbGF5ZXJCb2FyZDJbZmlyc3RIaXRdLmNsYXNzTGlzdFsyXVxuICApIHtcbiAgICB2aXNpdGVkSW5kZXgrKztcbiAgfVxuICBpbmRleDIgPSArcG9zc2libGVWYWxpZFNob3RzW3Zpc2l0ZWRJbmRleF07XG59XG5cbmV4cG9ydCB7IGNvbXB1dGVyU2hvdHMgfTtcbiIsImltcG9ydCB7IGNob29zZVBsYXllciB9IGZyb20gXCIuL2Nob29zZS1wbGF5ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUlucHV0RWxlbSB9IGZyb20gXCIuL25hbWUtaW5wdXRcIjtcbmltcG9ydCB7IGFkZFJpcHBsZUVmZmVjdCB9IGZyb20gXCIuL3JpcHBsZS1idXR0b25cIjtcblxuZnVuY3Rpb24gZ2V0TmFtZShuYW1lRGV0YWlscykge1xuICBjb25zdCB7IGlucHV0RGl2LCBzdGFydEJ0biwgbmFtZUlucHV0IH0gPSBjcmVhdGVJbnB1dEVsZW0oXG4gICAgbmFtZURldGFpbHMsXG4gICAgXCJTVEFSVCBHQU1FXCJcbiAgKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoaW5wdXREaXYpO1xuICBnZXRJbnB1dFZhbHVlKHN0YXJ0QnRuLCBuYW1lSW5wdXQpO1xufVxuXG5mdW5jdGlvbiBnZXRJbnB1dFZhbHVlKHN0YXJ0QnRuLCBuYW1lSW5wdXQpIHtcbiAgY29uc3QgZ2V0TmFtZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtZGl2XCIpO1xuICBjb25zdCByZXBsYWNlTmFtZURpdiA9ICgpID0+IHtcbiAgICBpZiAobmFtZUlucHV0LnZhbHVlLnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgcHJldmVudEVtcHR5SW5wdXQobmFtZUlucHV0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiZmFkZVwiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImZhZGVcIik7XG4gICAgICBjb25zdCBjaG9vc2VEaXYgPSBjaG9vc2VQbGF5ZXIobmFtZUlucHV0LnZhbHVlKTtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVwbGFjZUNoaWxkKGNob29zZURpdiwgZ2V0TmFtZURpdik7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInBsYXllck5hbWVcIiwgSlNPTi5zdHJpbmdpZnkoYCR7bmFtZUlucHV0LnZhbHVlfWApKTtcbiAgICAgIGFkZFJpcHBsZUVmZmVjdCgpO1xuICAgIH0sIDUwMCk7XG4gIH07XG4gIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXBsYWNlTmFtZURpdik7XG59XG5cbmZ1bmN0aW9uIHByZXZlbnRFbXB0eUlucHV0KG5hbWVJbnB1dCkge1xuICBjb25zdCBlcnJvck1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3ItbXNnXCIpO1xuICBlcnJvck1zZy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZXJyb3JNc2cuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgbmFtZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgfSwgMjAwMCk7XG59XG5cbmV4cG9ydCB7IGdldE5hbWUsIHByZXZlbnRFbXB0eUlucHV0IH07XG4iLCJmdW5jdGlvbiBjcmVhdGVEb21FbGVtZW50KHR5cGUsIGF0dHJpYnV0ZXMpIHtcbiAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKTtcbiAgaWYgKGF0dHJpYnV0ZXMgPT0gbnVsbCkgcmV0dXJuIG5ld0VsZW1lbnQ7XG4gIHNldEF0dHJpYnV0ZXMobmV3RWxlbWVudCwgYXR0cmlidXRlcyk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gIH0pO1xufVxuXG5leHBvcnQge2NyZWF0ZURvbUVsZW1lbnR9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRG9tRWxlbWVudCB9IGZyb20gXCIuL2hlbHBlci1mdW5jdGlvblwiO1xuXG5mdW5jdGlvbiBjcmVhdGVJbnB1dEVsZW0obmFtZURldGFpbHMsIGJ0bk5hbWUpIHtcbiAgY29uc3QgaW5wdXREaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiaW5wdXQtZGl2XCIgfSk7XG4gIGNvbnN0IGxhYmVsID0gY3JlYXRlRG9tRWxlbWVudChcImxhYmVsXCIsIHsgZm9yOiBcIm5hbWVcIiB9KTtcbiAgY29uc3QgbmFtZUlucHV0ID0gY3JlYXRlRG9tRWxlbWVudChcImlucHV0XCIsIHtcbiAgICBpZDogXCJuYW1lXCIsXG4gICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgcGxhY2Vob2xkZXI6IFwiTGV0YW1cIixcbiAgfSk7XG4gIGNvbnN0IGVycm9yTXNnID0gY3JlYXRlRG9tRWxlbWVudChcInNwYW5cIiwgeyBjbGFzczogXCJlcnJvci1tc2cgaGlkZVwiIH0pO1xuICBjb25zdCBzdGFydEJ0biA9IGNyZWF0ZURvbUVsZW1lbnQoXCJidXR0b25cIiwgeyBjbGFzczogXCJzdGFydC1idG5cIiB9KTtcblxuICBlcnJvck1zZy50ZXh0Q29udGVudCA9IFwiRW50ZXIgQSBWYWxpZCBOYW1lXCI7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gbmFtZURldGFpbHM7XG4gIHN0YXJ0QnRuLnRleHRDb250ZW50ID0gYnRuTmFtZTtcbiAgaW5wdXREaXYuYXBwZW5kKGxhYmVsLCBuYW1lSW5wdXQsIGVycm9yTXNnLCBzdGFydEJ0bik7XG4gIHJldHVybiB7IGlucHV0RGl2LCBzdGFydEJ0biwgbmFtZUlucHV0IH07XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUlucHV0RWxlbSB9O1xuIiwiaW1wb3J0IHtjcmVhdGVEb21FbGVtZW50fSBmcm9tIFwiLi9oZWxwZXItZnVuY3Rpb25cIjtcblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBjcmVhdGVEb21FbGVtZW50KFwiZm9vdGVyXCIpO1xuICBjb25zdCBhbmNob3JMaW5rID0gY3JlYXRlRG9tRWxlbWVudChcImFcIiwge1xuICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL0lBbVlvdW5nYm9zc3kvYmF0dGxlc2hpcFwiLFxuICB9KTtcbiAgY29uc3QgZ2l0SHViSWNvbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpXCIsIHsgY2xhc3M6IFwiZmEgZmEtZ2l0aHViXCIgfSk7XG4gIGFuY2hvckxpbmsuYXBwZW5kQ2hpbGQoZ2l0SHViSWNvbik7XG4gIGZvb3Rlci5hcHBlbmQoXCJDb3B5cmlnaHQgXFx1MDBBOSAyMDIyIElBbVlvdW5nYm9zc3lcIiwgXCIgIFwiLCBhbmNob3JMaW5rKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5leHBvcnQgIHtjcmVhdGVGb290ZXJ9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRm9vdGVyIH0gZnJvbSBcIi4vcGFnZS1mb290ZXJcIjtcbmltcG9ydCB7IGdldE5hbWUgfSBmcm9tIFwiLi9nZXQtcGxheWVyLW5hbWVcIjtcbmltcG9ydCB7IGNyZWF0ZUhlYWRlciB9IGZyb20gXCIuL3BhZ2UtaGVhZGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVEb21FbGVtZW50IH0gZnJvbSBcIi4vaGVscGVyLWZ1bmN0aW9uXCI7XG5pbXBvcnQgeyByZXNldFBsYXllclZzQ29tcHV0ZXIgfSBmcm9tIFwiLi9wbGF5ZXItdnMtY29tcHV0ZXJcIjtcbmltcG9ydCB7IHJlc2V0SHVtYW5QbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB7IHJlc2V0U2hpcEhvdmVyIH0gZnJvbSBcIi4vc2hpcC1ob3ZlclwiO1xuaW1wb3J0IHsgYWRkUmlwcGxlRWZmZWN0IH0gZnJvbSBcIi4vcmlwcGxlLWJ1dHRvblwiO1xuXG5mdW5jdGlvbiByZW5kZXJHZXROYW1lUGFnZSgpIHtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICBjcmVhdGVIZWFkZXIoXCJwYWdlLW9uZS1oZWFkZXJcIik7XG4gIGdldE5hbWUoXCJFbnRlciBQbGF5ZXIncyBOYW1lOlwiKTtcbiAgY3JlYXRlRm9vdGVyKCk7XG59XG5cbmZ1bmN0aW9uIGFubm91bmNlV2lubmVyKHBsYXllck5hbWUpIHtcbiAgY29uc3QgZ2FtZU92ZXJEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiZ2FtZS1vdmVyLWRpdlwiIH0pO1xuICBjb25zdCBnYW1lT3ZlciA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwiZ2FtZS1vdmVyIGJsaW5raW5nXCIgfSk7XG4gIGNvbnN0IHdpbm5lciA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwid2lubmVyXCIgfSk7XG4gIGNvbnN0IG5hbWUgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcIm5hbWVcIiB9KTtcbiAgY29uc3QgcmVzdGFydEJ0biA9IGNyZWF0ZURvbUVsZW1lbnQoXCJidXR0b25cIiwgeyBjbGFzczogXCJidG4tcmVzdGFydFwiIH0pO1xuICByZXN0YXJ0QnRuLnRleHRDb250ZW50ID0gXCJSRVNUQVJUXCI7XG4gIGdhbWVPdmVyLnRleHRDb250ZW50ID0gXCJHQU1FIE9WRVJcIjtcbiAgbmFtZS50ZXh0Q29udGVudCA9IHBsYXllck5hbWU7XG4gIHdpbm5lci50ZXh0Q29udGVudCA9IFwiVGhlIFdpbm5lciBJc1wiO1xuICBnYW1lT3ZlckRpdi5hcHBlbmQoZ2FtZU92ZXIsIHdpbm5lciwgbmFtZSwgcmVzdGFydEJ0bik7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImZhZGVcIik7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImZhZGVcIik7XG4gICAgcmVuZGVyR2V0TmFtZVBhZ2UoKTtcbiAgICBjb25zdCBnZXROYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC1kaXZcIik7XG4gICAgZG9jdW1lbnQuYm9keS5yZXBsYWNlQ2hpbGQoZ2FtZU92ZXJEaXYsIGdldE5hbWVEaXYpO1xuICAgIHJlc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHJlcmVuZGVyR2V0TmFtZVBhZ2UoKSk7XG4gICAgYWRkUmlwcGxlRWZmZWN0KCk7XG4gIH0sIDQwMCk7XG59XG5cbmZ1bmN0aW9uIHJlc3RhcnQoKSB7XG4gIGNvbnN0IHJlc3RhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBhbGlnbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxpZ24tc2hpcHNcIik7XG4gIGNvbnN0IGFsaWduQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250aW51ZS1idG5cIik7XG4gIGNvbnN0IGF4aXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF4aXMtYnRuXCIpO1xuICBpZiAoYWxpZ25CdG4pIGFsaWduRGl2LnJlcGxhY2VDaGlsZChyZXN0YXJ0LCBhbGlnbkJ0bik7XG4gIHJlc3RhcnQudGV4dENvbnRlbnQgPSBcIlJlc3RhcnRcIjtcbiAgaWYgKGF4aXNCdG4pIGF4aXNCdG4ucmVtb3ZlKCk7XG4gIHJlc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlcmVuZGVyR2V0TmFtZVBhZ2UpO1xufVxuXG5mdW5jdGlvbiByZXJlbmRlckdldE5hbWVQYWdlKCkge1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJmYWRlXCIpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJmYWRlXCIpO1xuICAgIHdoaWxlIChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICByZW5kZXJHZXROYW1lUGFnZSgpO1xuICByZXNldFNoaXBIb3ZlcigpO1xuICByZXNldFBsYXllclZzQ29tcHV0ZXIoKTtcbiAgcmVzZXRIdW1hblBsYXllcigpO1xuICBhZGRSaXBwbGVFZmZlY3QoKTtcbiAgfSwgNDAwKTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyR2V0TmFtZVBhZ2UsIHJlc3RhcnQsIGFubm91bmNlV2lubmVyIH07XG4iLCJpbXBvcnQge2NyZWF0ZURvbUVsZW1lbnR9IGZyb20gXCIuL2hlbHBlci1mdW5jdGlvblwiO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGdhbWVUaXRsZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJoMVwiLCB7IGNsYXNzOiBjbGFzc05hbWUgfSk7XG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZURvbUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IHsgYm9keSB9ID0gZG9jdW1lbnQ7XG4gIGdhbWVUaXRsZS50ZXh0Q29udGVudCA9IFwiQkFUVExFU0hJUFwiO1xuICBoZWFkZXIuYXBwZW5kKGdhbWVUaXRsZSk7XG4gIGJvZHkuYXBwZW5kKGhlYWRlcik7XG59XG5cbmV4cG9ydCB7Y3JlYXRlSGVhZGVyfTtcbiIsImltcG9ydCB7R2FtZWJvYXJkfSBmcm9tIFwiLi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBwbGFjZUNvbXB1dGVyU2hpcHMgfSBmcm9tIFwiLi4vcGxhY2VTaGlwc09uQm9hcmRcIjtcblxuZnVuY3Rpb24gc2hvd1NoaXBzUmFuZG9tbHkoKSB7XG4gIGNvbnN0IHtcbiAgICBwb3NpdGlvblNoaXAsIHJlY2VpdmVBdHRhY2ssIGFsbFNoaXBzU3VuaywgQXJyLFxuICB9ID0gR2FtZWJvYXJkKHBsYWNlQ29tcHV0ZXJTaGlwcyk7XG4gIHBvc2l0aW9uU2hpcCgpO1xuICByZXR1cm4geyByZWNlaXZlQXR0YWNrLCBhbGxTaGlwc1N1bmssIEFyciB9O1xufVxuXG5leHBvcnQge3Nob3dTaGlwc1JhbmRvbWx5fTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5pbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBwbGFjZVBsYXllclNoaXBzIH0gZnJvbSBcIi4uL3BsYWNlU2hpcHNPbkJvYXJkXCI7XG5pbXBvcnQgeyByZXN0YXJ0IH0gZnJvbSBcIi4vcGFnZS1nZXQtbmFtZVwiO1xuaW1wb3J0IHsgYWRkUmlwcGxlRWZmZWN0IH0gZnJvbSBcIi4vcmlwcGxlLWJ1dHRvblwiO1xuXG4vKiogR2V0cyBzaGlwcyBjb29yZGluYXRlcyBmcm9tIEdhbWVib2FyZCBhbmQgZGlzcGxheSBpbiBET00gKi9cbmZ1bmN0aW9uIHNob3dTaGlwc09uQm9hcmQoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGFsaWduID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5heGlzLWJ0blwiKTtcbiAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NsYXNzTmFtZX1gKTtcbiAgY29uc3QgaW5zdHJ1Y3Rpb24yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnN0cnVjdGlvbjJcIik7XG4gIGNvbnN0IHsgYm9hcmQsIHBvc2l0aW9uU2hpcCwgYWxpZ25TaGlwLCByZWNlaXZlQXR0YWNrLCBhbGxTaGlwc1N1bmssIEFyciB9ID1cbiAgICBHYW1lYm9hcmQocGxhY2VQbGF5ZXJTaGlwcyk7XG5cbiAgaWYgKHRoaXMuY2xhc3NMaXN0ICYmIHRoaXMuY2xhc3NMaXN0WzBdID09PSBcInBsYXllcjEtZ3JpZFwiKSB7XG4gICAgY29uc3QgcGxheWVyTmFtZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwbGF5ZXJOYW1lXCIpKTtcbiAgICBpbnN0cnVjdGlvbjIudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJOYW1lfSwgUGxhY2UgWW91ciBTaGlwcy5gO1xuICB9XG5cbiAgY29uc3QgYWRkTGlzdGVuZXIgPSAoc3F1YXJlLCBpbmRleCkgPT4ge1xuICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLCBhZGRCZ0NvbG9yLmJpbmQoXG4gICAgICAgIHRoaXMsIGluZGV4LCBwb3NpdGlvblNoaXAsIGJvYXJkLCBzcXVhcmVzLCBBcnIsIGluc3RydWN0aW9uMlxuICAgICAgKVxuICAgICk7XG4gIH07XG4gIGFsaWduLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhbGlnblNoaXApO1xuICBzcXVhcmVzLmZvckVhY2goYWRkTGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gIHJldHVybiBbcmVjZWl2ZUF0dGFjaywgQXJyLCBhbGxTaGlwc1N1bmtdO1xufVxuXG4vKiogQWRkcyBiYWNrZ3JvdW5kIGNvbG91ciBmb3IgbWlzc2VkIHNob3RzICovXG5mdW5jdGlvbiBhZGRCZ0NvbG9yKGluZGV4LCBwb3NpdGlvblNoaXAsIGJvYXJkLCBzcXVhcmVzLCBBcnIsIGluc3RydWN0aW9uMikge1xuICBjb25zdCBwbGF5ZXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXIxLWJvYXJkXCIpO1xuICBjb25zdCBwbGF5ZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXIyLWJvYXJkXCIpO1xuICBwb3NpdGlvblNoaXAoaW5kZXgpO1xuICBib2FyZC5mbGF0KCkuZm9yRWFjaCgoaXRlbSwgaW5kZXgyKSA9PiB7XG4gICAgaWYgKGl0ZW0gPT09IDIgfHwgaXRlbSA9PT0gMyB8fCBpdGVtID09PSA0IHx8IGl0ZW0gPT09IDUgfHwgaXRlbSA9PT0gNilcbiAgICAgIHNxdWFyZXNbaW5kZXgyXS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICBpZiAoaXRlbSA9PT0gMikgc3F1YXJlc1tpbmRleDJdLmNsYXNzTGlzdC5hZGQoXCJzaGlwMlwiKTtcbiAgICBpZiAoaXRlbSA9PT0gMykgc3F1YXJlc1tpbmRleDJdLmNsYXNzTGlzdC5hZGQoXCJzaGlwM1wiKTtcbiAgICBpZiAoaXRlbSA9PT0gNikgc3F1YXJlc1tpbmRleDJdLmNsYXNzTGlzdC5hZGQoXCJzaGlwNlwiKTtcbiAgICBpZiAoaXRlbSA9PT0gNCkgc3F1YXJlc1tpbmRleDJdLmNsYXNzTGlzdC5hZGQoXCJzaGlwNFwiKTtcbiAgICBpZiAoaXRlbSA9PT0gNSkgc3F1YXJlc1tpbmRleDJdLmNsYXNzTGlzdC5hZGQoXCJzaGlwNVwiKTtcbiAgfSk7XG5cbiAgaWYgKHBsYXllcjEuY2xhc3NMaXN0WzFdID09PSBcImhpZGVcIiB8fCBwbGF5ZXIyLmNsYXNzTGlzdFsxXSA9PT0gXCJoaWRlXCIpIHtcbiAgICBpZiAoQXJyLmxlbmd0aCA9PT0gNSAmJiB0aGlzID09PSBkb2N1bWVudCkgc2hvd0VuZW15V2F0ZXIoKTtcbiAgICBlbHNlIGlmIChBcnIubGVuZ3RoID09PSA1KSB7XG4gICAgICBpZiAodGhpcy5jbGFzc0xpc3RbMF0gPT09IFwicGxheWVyMi1ncmlkXCIpXG4gICAgICAgIGluc3RydWN0aW9uMi50ZXh0Q29udGVudCA9IFwiQ0xJQ0sgT04gTkVYVCBUTyBTVEFSVCBQTEFZSU5HXCI7XG4gICAgICBpZiAodGhpcy5jbGFzc0xpc3RbMF0gPT09IFwicGxheWVyMS1ncmlkXCIpXG4gICAgICAgIGluc3RydWN0aW9uMi50ZXh0Q29udGVudCA9IFwiQ0xJQ0sgT04gTkVYVCBUTyBDT05USU5VRVwiO1xuICAgICAgc2hvd0VuZW15LmNhbGwodGhpcyk7XG4gICAgfVxuICB9XG4gIGlmIChBcnJheS5mcm9tKHBsYXllcjEuY2xhc3NMaXN0KS5pbmNsdWRlcyhcImhpZGVcIikpIHJldHVybjtcbiAgaWYgKEFycmF5LmZyb20ocGxheWVyMi5jbGFzc0xpc3QpLmluY2x1ZGVzKFwiaGlkZVwiKSkgcmV0dXJuO1xuICBpZiAoQXJyLmxlbmd0aCA9PT0gNSAmJiB0aGlzICE9PSBkb2N1bWVudCkge1xuICAgIGJvYXJkLmZsYXQoKS5mb3JFYWNoKChpdGVtLCBpbmRleDIpID0+IHtcbiAgICAgIGlmIChpdGVtID09PSAyIHx8IGl0ZW0gPT09IDMgfHwgaXRlbSA9PT0gNCB8fCBpdGVtID09PSA1IHx8IGl0ZW0gPT09IDYpXG4gICAgICAgIHNxdWFyZXNbaW5kZXgyXS5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFwiKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vKiogRnVuY3Rpb24gZ2V0cyBjYWxsZWQgd2hlbiB5b3UgY2hvb3NlIHRvIHBsYXkgaHVtYW4gKi9cbmZ1bmN0aW9uIHNob3dFbmVteSgpIHtcbiAgY29uc3QgcGxheWVyTmFtZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwbGF5ZXIyTmFtZVwiKSk7XG4gIGNvbnN0IGluc3RydWN0aW9uMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5zdHJ1Y3Rpb24yXCIpO1xuICBjb25zdCBwbGF5ZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXIyLWJvYXJkXCIpO1xuICBjb25zdCBjb250YWluZXJEaXYyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItZGl2MlwiKTtcbiAgY29uc3QgcGxheWVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyMS1ib2FyZFwiKTtcbiAgY29uc3QgY29udGFpbmVyRGl2MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyLWRpdjFcIik7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllcjEtZ3JpZFwiKTtcbiAgY29uc3QgeyBzdGFydEJ0biwgY29udGludWVCdG4gfSA9IGNyZWF0ZVBsYXlCdG4oKTtcbiAgY29udGludWVCdG4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gIHN0YXJ0QnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXG4gIGNvbnN0IHNob3dTaGlwcyA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJmYWRlXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiZmFkZVwiKTtcbiAgICAgIGluc3RydWN0aW9uMi50ZXh0Q29udGVudCA9IGAke3BsYXllck5hbWV9LCBQbGFjZSBZb3VyIFNoaXBzLmA7XG4gICAgICBwbGF5ZXIyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgY29udGFpbmVyRGl2Mi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgIHBsYXllcjEuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICBjb250YWluZXJEaXYxLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgY29udGludWVCdG4uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICBzdGFydEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgIGdyaWQuZm9yRWFjaCgoc3FyKSA9PiB7XG4gICAgICAgIGlmIChBcnJheS5mcm9tKHNxci5jbGFzc0xpc3QpLmluY2x1ZGVzKFwic2hpcFwiKSlcbiAgICAgICAgICBzcXIuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBcIik7XG4gICAgICB9KTtcbiAgICAgIGFkZFJpcHBsZUVmZmVjdCgpO1xuICAgIH0sIDQwMCk7XG4gIH07XG5cbiAgY29uc3Qgc2hvd1NoaXBzMiA9ICgpID0+IHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXIyLWdyaWRcIik7XG4gICAgZ3JpZC5mb3JFYWNoKChzcXIpID0+IHtcbiAgICAgIGlmIChBcnJheS5mcm9tKHNxci5jbGFzc0xpc3QpLmluY2x1ZGVzKFwic2hpcFwiKSlcbiAgICAgICAgc3FyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwXCIpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImZhZGVcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJmYWRlXCIpO1xuICAgICAgaW5zdHJ1Y3Rpb24yLnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZX0sIHRha2UgYSBzaG90LmA7XG4gICAgICBwbGF5ZXIxLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgY29udGFpbmVyRGl2MS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgIGNvbnRhaW5lckRpdjIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICByZXN0YXJ0KCk7XG4gICAgICBhZGRSaXBwbGVFZmZlY3QoKTtcbiAgICB9LCA0MDApO1xuICB9O1xuXG4gIGlmICh0aGlzLmNsYXNzTGlzdFswXSA9PT0gXCJwbGF5ZXIxLWdyaWRcIilcbiAgICBjb250aW51ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1NoaXBzKTtcbiAgaWYgKHRoaXMuY2xhc3NMaXN0WzBdID09PSBcInBsYXllcjItZ3JpZFwiKVxuICAgIGNvbnRpbnVlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93U2hpcHMyKTtcbn1cblxuLyoqIEZ1bmN0aW9uIGdldHMgY2FsbGVkIHdoZW4geW91IGNob29zZSB0byBwbGF5IGFnYWluc3QgQ29tcHV0ZXIgKi9cbmZ1bmN0aW9uIHNob3dFbmVteVdhdGVyKCkge1xuICBjb25zdCBwbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcjItYm9hcmRcIik7XG4gIGNvbnN0IGNvbnRhaW5lckRpdjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lci1kaXYyXCIpO1xuICBjb25zdCB7IHN0YXJ0QnRuLCBpbnN0cnVjdGlvbiB9ID0gY3JlYXRlUGxheUJ0bigpO1xuICBhZGRSaXBwbGVFZmZlY3QoKTtcbiAgaW5zdHJ1Y3Rpb24udGV4dENvbnRlbnQgPSBcIkNMSUNLIFBMQVkgVE8gU1RBUlQgUExBWUlOR1wiO1xuICBzdGFydEJ0bi50ZXh0Q29udGVudCA9IFwiUGxheVwiO1xuICBjb25zdCBzaG93U2hpcHMgPSAoKSA9PiB7XG4gICAgc3RhcnRCdG4udGV4dENvbnRlbnQgPSBcIlBsYXlcIjtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJmYWRlXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiZmFkZVwiKTtcbiAgICAgIGNvbnN0IHBsYXllck5hbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGxheWVyTmFtZVwiKSk7XG4gICAgICBwbGF5ZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICBjb250YWluZXJEaXYyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgaW5zdHJ1Y3Rpb24udGV4dENvbnRlbnQgPSBgV2FpdGluZyBmb3IgJHtwbGF5ZXJOYW1lfSdzIHNob3RgO1xuICAgICAgcmVzdGFydCgpO1xuICAgICAgYWRkUmlwcGxlRWZmZWN0KCk7XG4gICAgfSwgNDAwKTtcbiAgfTtcbiAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dTaGlwcyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBsYXlCdG4oKSB7XG4gIGNvbnN0IHNoaXBBeGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGlnbi1zaGlwc1wiKTtcbiAgY29uc3QgY29udGludWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRpbnVlLWJ0blwiKTtcbiAgY29uc3QgaW5zdHJ1Y3Rpb24gPSBzaGlwQXhpcy5jaGlsZHJlblswXTtcbiAgY29uc3Qgc3RhcnRCdG4gPSBzaGlwQXhpcy5jaGlsZHJlblsxXTtcbiAgYWRkUmlwcGxlRWZmZWN0KCk7XG4gIHJldHVybiB7IHN0YXJ0QnRuLCBpbnN0cnVjdGlvbiwgY29udGludWVCdG4gfTtcbn1cblxuZXhwb3J0IHsgc2hvd1NoaXBzT25Cb2FyZCB9O1xuIiwiaW1wb3J0IHsgY29tcHV0ZXJTaG90cyB9IGZyb20gXCIuL2ZpbmQtZW1wdHktc3BvdFwiO1xuaW1wb3J0IHsgYW5ub3VuY2VXaW5uZXIgfSBmcm9tIFwiLi9wYWdlLWdldC1uYW1lXCI7XG5pbXBvcnQgeyBzaG93U2hpcHNPbkJvYXJkIH0gZnJvbSBcIi4vcGxhY2Utc2hpcFwiO1xuaW1wb3J0IHsgc2hvd1NoaXBzUmFuZG9tbHkgfSBmcm9tIFwiLi9wbGFjZS1zaGlwLXJhbmRvbVwiO1xuXG5sZXQgaGl0O1xubGV0IHRpbWUgPSAwO1xubGV0IHN0b3BIZXJlID0gMDtcbmxldCBpc1N1bmtTaGlwQXJyYXk7XG5cbi8qKiBDaGVja3MgZm9yIHZhbGlkIHNob3RzIG9uIHNoaXBzICovXG5mdW5jdGlvbiBzaG90cyhzaG93U2hpcHMsIGNsYXNzTmFtZSkge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NsYXNzTmFtZX1gKTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInBsYXllcjJOYW1lXCIsIEpTT04uc3RyaW5naWZ5KFwiQ29tcHV0ZXJcIikpO1xuICBjb25zdCB7IHJlY2VpdmVBdHRhY2ssIGFsbFNoaXBzU3VuayB9ID0gc2hvd1NoaXBzKCk7XG4gIGNvbnN0IFtyZWNlaXZlQXR0YWNrMiwgLCBhbGxTaGlwc1N1bmsyXSA9IHNob3dTaGlwc09uQm9hcmQuY2FsbChcbiAgICBkb2N1bWVudCxcbiAgICBcInBsYXllcjEtZ3JpZFwiXG4gICk7XG4gIGNvbnN0IGFkZExpc3RlbmVyVG9HcmlkID0gKGdyaWQsIGluZGV4KSA9PlxuICAgIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIGFsdGVybmF0ZVNob3RzLmJpbmQoXG4gICAgICAgIG51bGwsXG4gICAgICAgIGdyaWQsXG4gICAgICAgIGluZGV4LFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICByZWNlaXZlQXR0YWNrMixcbiAgICAgICAgcGxheWVyQm9hcmQsXG4gICAgICAgIGFsbFNoaXBzU3VuayxcbiAgICAgICAgYWxsU2hpcHNTdW5rMlxuICAgICAgKVxuICAgICk7XG4gIHBsYXllckJvYXJkLmZvckVhY2goYWRkTGlzdGVuZXJUb0dyaWQpO1xufVxuXG4vKiogQWx0ZXJuYXRlIHNob3RzIGJldHdlZW4gY29tcHV0ZXIgYW5kIHBsYXllciAqL1xuZnVuY3Rpb24gYWx0ZXJuYXRlU2hvdHMoXG4gIGdyaWQsXG4gIGluZGV4LFxuICByZWNlaXZlQXR0YWNrLFxuICByZWNlaXZlQXR0YWNrMixcbiAgcGxheWVyQm9hcmQsXG4gIGFsbFNoaXBzU3VuayxcbiAgYWxsU2hpcHNTdW5rMlxuKSB7XG4gIGNvbnN0IGluc3RydWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGlnbi1zaGlwc1wiKS5jaGlsZHJlblswXTtcbiAgaWYgKEFycmF5LmZyb20oZ3JpZC5jbGFzc0xpc3QpLmluY2x1ZGVzKFwic2hvdHNcIikpIHJldHVybjtcbiAgaWYgKHN0b3BIZXJlID09PSAxKSByZXR1cm47XG4gIGlmICh0aW1lID09PSAxKSByZXR1cm47XG4gIHRpbWUgPSAxO1xuICBjb25zdCBwbGF5ZXJOYW1lID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBsYXllck5hbWVcIikpO1xuICBjb25zdCB7IGdyaWQyLCBpbmRleDIsIHBsYXllckJvYXJkMiB9ID0gY29tcHV0ZXJTaG90cygpO1xuICBpbnN0cnVjdGlvbi50ZXh0Q29udGVudCA9IFwiV2FpdGluZyBmb3IgQ29tcHV0ZXIncyBTaG90LlwiO1xuICB2YWxpZFNob3RzKFxuICAgIGdyaWQsIGluZGV4LCByZWNlaXZlQXR0YWNrLCBwbGF5ZXJCb2FyZCwgYWxsU2hpcHNTdW5rLCBpbnN0cnVjdGlvbiwgcGxheWVyTmFtZVxuICApO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHRpbWUgPSAwO1xuICAgIGNvbnN0IHBsYXllck5hbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGxheWVyTmFtZVwiKSk7XG4gICAgY29uc3QgQUlOYW1lID0gXCJDb21wdXRlclwiO1xuICAgIGlmIChzdG9wSGVyZSA9PT0gMSkgcmV0dXJuO1xuICAgIGluc3RydWN0aW9uLnRleHRDb250ZW50ID0gYFdhaXRpbmcgZm9yICR7cGxheWVyTmFtZX0ncyBTaG90LmA7XG4gICAgY29uc3QgeyBoaXRDb29yZCB9ID0gdmFsaWRTaG90cyhcbiAgICAgIGdyaWQyLCBpbmRleDIsIHJlY2VpdmVBdHRhY2syLCBwbGF5ZXJCb2FyZDIsIGFsbFNoaXBzU3VuazIsIGluc3RydWN0aW9uLCBBSU5hbWVcbiAgICApO1xuICAgIGhpdCA9IGhpdENvb3JkO1xuICB9LCAxNTAwKTtcbn1cblxuLyoqIENvbG91cnMgdmFsaWQgc2hvdHMgcmVkICovXG5mdW5jdGlvbiB2YWxpZFNob3RzKFxuICBncmlkLCBpbmRleCwgcmVjZWl2ZUF0dGFjaywgcGxheWVyQm9hcmQsIGFsbFNoaXBzU3VuaywgaW5zdHJ1Y3Rpb24sIHBsYXllck5hbWVcbikge1xuICBjb25zdCBheGlzID0gYCR7aW5kZXh9YC5zcGxpdChcIlwiKTtcbiAgaWYgKGF4aXMubGVuZ3RoID09PSAxKSBheGlzLnVuc2hpZnQoXCIwXCIpO1xuXG4gIGNvbnN0IHtcbiAgICBoaXRDb29yZCxcbiAgICBzaGlwNVN1bmssXG4gICAgc2hpcDRTdW5rLFxuICAgIHNoaXAzU3VuayxcbiAgICBzaGlwMlN1bmssXG4gICAgc2hpcDFTdW5rLFxuICAgIHNoaXA1Q29vcmQsXG4gICAgc2hpcDRDb29yZCxcbiAgICBzaGlwM0Nvb3JkLFxuICAgIHNoaXAyQ29vcmQsXG4gICAgc2hpcDFDb29yZCxcbiAgfSA9IHJlY2VpdmVBdHRhY2soYXhpcyk7XG5cbiAgaWYgKGdyaWQpIGdyaWQuY2xhc3NMaXN0LmFkZChcInNob3RzXCIpO1xuICBpZiAoaGl0Q29vcmQpIGdyaWQuY2xhc3NMaXN0LmFkZChcInZhbGlkLXNob3RcIik7XG5cbiAgaXNTdW5rU2hpcChzaGlwNVN1bmssIHNoaXA1Q29vcmQsIHBsYXllckJvYXJkKTtcbiAgaXNTdW5rU2hpcChzaGlwNFN1bmssIHNoaXA0Q29vcmQsIHBsYXllckJvYXJkKTtcbiAgaXNTdW5rU2hpcChzaGlwM1N1bmssIHNoaXAzQ29vcmQsIHBsYXllckJvYXJkKTtcbiAgaXNTdW5rU2hpcChzaGlwMlN1bmssIHNoaXAyQ29vcmQsIHBsYXllckJvYXJkKTtcbiAgaXNTdW5rU2hpcChzaGlwMVN1bmssIHNoaXAxQ29vcmQsIHBsYXllckJvYXJkKTtcblxuICBpZiAoYWxsU2hpcHNTdW5rKCkpIHtcbiAgICBpbnN0cnVjdGlvbi50ZXh0Q29udGVudCA9IFwiZ2FtZSBvdmVyLlwiO1xuICAgIHN0b3BIZXJlID0gMTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHdoaWxlIChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgICAgIGFubm91bmNlV2lubmVyKHBsYXllck5hbWUpO1xuICAgIH0sIDIwMDApO1xuICB9XG5cbiAgaXNTdW5rU2hpcEFycmF5ID0gW3NoaXA1U3Vuaywgc2hpcDRTdW5rLCBzaGlwM1N1bmssIHNoaXAyU3Vuaywgc2hpcDFTdW5rXTtcblxuICByZXR1cm4geyBoaXRDb29yZCB9O1xufVxuXG4vKiogQWRkcyBibHVlIGJhY2tncm91bmQgY29sb3VyIHdoZW4gYSBzaGlwIGlzIGNvbXBsZXRlbHkgc3VuayAqL1xuZnVuY3Rpb24gaXNTdW5rU2hpcChzaGlwU3Vuaywgc2hpcENvb3JkLCBwbGF5ZXJCb2FyZCkge1xuICBjb25zdCBhZGRCbHVlQmcgPSAoaXRlbSkgPT5cbiAgICBwbGF5ZXJCb2FyZC5mb3JFYWNoKChzcXVhcmUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoK2l0ZW0uam9pbihcIlwiKSA9PT0gaW5kZXgpIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3Vuay1zaGlwXCIpO1xuICAgIH0pO1xuICBpZiAoc2hpcFN1bmsgPT09IHRydWUpIHNoaXBDb29yZC5mb3JFYWNoKGFkZEJsdWVCZyk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0UGxheWVyVnNDb21wdXRlcigpIHtcbiAgdGltZSA9IDA7XG4gIHN0b3BIZXJlID0gMDtcbn1cblxuY29uc3QgcGxheWVyU2hvdHMgPSBzaG90cy5iaW5kKG51bGwsIHNob3dTaGlwc1JhbmRvbWx5LCBcInBsYXllcjItZ3JpZFwiKTtcbmV4cG9ydCB7XG4gIHBsYXllclNob3RzLFxuICB2YWxpZFNob3RzLFxuICBzdG9wSGVyZSxcbiAgcmVzZXRQbGF5ZXJWc0NvbXB1dGVyLFxuICBoaXQsXG4gIGlzU3Vua1NoaXBBcnJheSxcbn07XG4iLCJpbXBvcnQgeyBzaG93U2hpcHNPbkJvYXJkIH0gZnJvbSBcIi4vcGxhY2Utc2hpcFwiO1xuaW1wb3J0IHsgc3RvcEhlcmUsIHZhbGlkU2hvdHMgfSBmcm9tIFwiLi9wbGF5ZXItdnMtY29tcHV0ZXJcIjtcblxubGV0IGNvdW50ID0gMDtcbmxldCBjb3VudDIgPSAwO1xubGV0IHRpbWUgPSAxO1xuXG4vKiogQ2hlY2tzIGZvciB2YWxpZCBzaG90cyBvbiBzaGlwcyAqL1xuZnVuY3Rpb24gcGxheWVyKGNsYXNzTmFtZSkge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NsYXNzTmFtZX1gKTtcbiAgY29uc3QgW3JlY2VpdmVBdHRhY2ssIEFyciwgYWxsU2hpcHNTdW5rXSA9IHNob3dTaGlwc09uQm9hcmQuY2FsbChcbiAgICBwbGF5ZXJCb2FyZFswXSxcbiAgICBjbGFzc05hbWVcbiAgKTtcbiAgY29uc3QgYWRkTGlzdGVuZXJUb0dyaWQgPSAoZ3JpZCwgaW5kZXgpID0+XG4gICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgc2hvdHMuYmluZChcbiAgICAgICAgbnVsbCxcbiAgICAgICAgQXJyLFxuICAgICAgICBncmlkLFxuICAgICAgICBpbmRleCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgcGxheWVyQm9hcmQsXG4gICAgICAgIGFsbFNoaXBzU3Vua1xuICAgICAgKVxuICAgICk7XG4gIHBsYXllckJvYXJkLmZvckVhY2goYWRkTGlzdGVuZXJUb0dyaWQpO1xufVxuXG4vKiogU2hvdHMgYnkgcGxheWVyICovXG5mdW5jdGlvbiBzaG90cyhBcnIsIGdyaWQsIGluZGV4LCByZWNlaXZlQXR0YWNrLCBwbGF5ZXJCb2FyZCwgYWxsU2hpcHNTdW5rKSB7XG4gIGNvbnN0IHBsYXllcjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcjEtYm9hcmRcIik7XG4gIGNvbnN0IHBsYXllcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcjItYm9hcmRcIik7XG4gIGNvbnN0IHBsYXllck5hbWUxID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBsYXllck5hbWVcIikpO1xuICBjb25zdCBwbGF5ZXJOYW1lMiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwbGF5ZXIyTmFtZVwiKSk7XG4gIGNvbnN0IGluc3RydWN0aW9uMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5zdHJ1Y3Rpb24yXCIpO1xuXG4gIGlmIChBcnJheS5mcm9tKGdyaWQuY2xhc3NMaXN0KS5pbmNsdWRlcyhcInNob3RzXCIpKSByZXR1cm47XG4gIGlmIChncmlkLmNsYXNzTGlzdFswXSA9PT0gXCJwbGF5ZXIxLWdyaWRcIiAmJiBBcnIubGVuZ3RoID49IDUpIHtcbiAgICBpZiAoY291bnQgPj0gMSAmJiB0aW1lID09PSAwKSB7XG4gICAgICBpZiAoQXJyYXkuZnJvbShwbGF5ZXIxLmNsYXNzTGlzdCkuaW5jbHVkZXMoXCJoaWRlXCIpKSByZXR1cm47XG4gICAgICBpZiAoQXJyYXkuZnJvbShwbGF5ZXIyLmNsYXNzTGlzdCkuaW5jbHVkZXMoXCJoaWRlXCIpKSByZXR1cm47XG4gICAgICBpZiAoc3RvcEhlcmUgPT09IDEpIHJldHVybjtcbiAgICAgIGluc3RydWN0aW9uMi50ZXh0Q29udGVudCA9IGAke3BsYXllck5hbWUxfSwgdGFrZSB5b3VyIHNob3QuYDtcbiAgICAgIHZhbGlkU2hvdHMoXG4gICAgICAgIGdyaWQsXG4gICAgICAgIGluZGV4LFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBwbGF5ZXJCb2FyZCxcbiAgICAgICAgYWxsU2hpcHNTdW5rLFxuICAgICAgICBpbnN0cnVjdGlvbjIsXG4gICAgICAgIHBsYXllck5hbWUyXG4gICAgICApO1xuICAgIH1cbiAgICB0aW1lID0gMTtcbiAgICBjb3VudCArPSAxO1xuICB9XG4gIGlmIChncmlkLmNsYXNzTGlzdFswXSA9PT0gXCJwbGF5ZXIyLWdyaWRcIiAmJiBBcnIubGVuZ3RoID49IDUpIHtcbiAgICBpZiAoY291bnQyID49IDEgJiYgdGltZSA9PT0gMSkge1xuICAgICAgaWYgKEFycmF5LmZyb20ocGxheWVyMS5jbGFzc0xpc3QpLmluY2x1ZGVzKFwiaGlkZVwiKSkgcmV0dXJuO1xuICAgICAgaWYgKEFycmF5LmZyb20ocGxheWVyMi5jbGFzc0xpc3QpLmluY2x1ZGVzKFwiaGlkZVwiKSkgcmV0dXJuO1xuICAgICAgaW5zdHJ1Y3Rpb24yLnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZTJ9LCB0YWtlIHlvdXIgc2hvdC5gO1xuICAgICAgdmFsaWRTaG90cyhcbiAgICAgICAgZ3JpZCxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIHBsYXllckJvYXJkLFxuICAgICAgICBhbGxTaGlwc1N1bmssXG4gICAgICAgIGluc3RydWN0aW9uMixcbiAgICAgICAgcGxheWVyTmFtZTFcbiAgICAgICk7XG4gICAgfVxuICAgIHRpbWUgPSAwO1xuICAgIGNvdW50MiArPSAxO1xuICB9XG59XG5cbmZ1bmN0aW9uIGh1bWFuUGxheWVycygpIHtcbiAgcGxheWVyKFwicGxheWVyMS1ncmlkXCIpO1xuICBwbGF5ZXIoXCJwbGF5ZXIyLWdyaWRcIik7XG59XG5cbmZ1bmN0aW9uIHJlc2V0SHVtYW5QbGF5ZXIoKSB7XG4gIGNvdW50ID0gMDtcbiAgY291bnQyID0gMDtcbiAgdGltZSA9IDE7XG59XG5cbmV4cG9ydCB7IGh1bWFuUGxheWVycywgcmVzZXRIdW1hblBsYXllciB9O1xuIiwiZnVuY3Rpb24gY3JlYXRlUmlwcGxlKGV2ZW50KSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gIGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBkaWFtZXRlciA9IE1hdGgubWF4KGJ1dHRvbi5jbGllbnRXaWR0aCwgYnV0dG9uLmNsaWVudEhlaWdodCk7XG5cbiAgY2lyY2xlLnN0eWxlLndpZHRoID0gY2lyY2xlLmhlaWdodCA9IGAke2RpYW1ldGVyfXB4YDtcbiAgY2lyY2xlLnN0eWxlLmxlZnQgPSBgJHtldmVudC5jbGllbnRYIC0gYnV0dG9uLm9mZnNldExlZnR9cHhgO1xuICBjaXJjbGUuc3R5bGUudG9wID0gYCR7ZXZlbnQuY2xpZW50WSAtIGJ1dHRvbi5vZmZzZXRUb3B9cHhgO1xuICBjaXJjbGUuY2xhc3NMaXN0LmFkZChcInJpcHBsZVwiKTtcblxuICBjb25zdCByaXBwbGUgPSBidXR0b24uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInJpcHBsZVwiKVswXTtcbiAgaWYgKHJpcHBsZSkgcmlwcGxlLnJlbW92ZSgpO1xuICBidXR0b24uYXBwZW5kQ2hpbGQoY2lyY2xlKTtcbn1cblxuZnVuY3Rpb24gYWRkUmlwcGxlRWZmZWN0KCkge1xuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcbiAgZm9yIChjb25zdCBidXR0b24gb2YgYnV0dG9ucykge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBjcmVhdGVSaXBwbGUpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlUmlwcGxlKTtcbiAgfVxufVxuXG5leHBvcnQgeyBhZGRSaXBwbGVFZmZlY3QgfTtcbiIsImxldCBsZW5ndGhPZlNoaXAgPSA1O1xubGV0IGNvdW50ZXIgPSA1O1xuXG5mdW5jdGlvbiBhZGRIb3ZlcihjbGFzc05hbWUpIHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNsYXNzTmFtZSk7XG4gIHBsYXllckJvYXJkLmZvckVhY2gocGxhY2VTaGlwSG92ZXIpO1xuICBmdW5jdGlvbiBwbGFjZVNoaXBIb3ZlcihncmlkLCBpbmRleCkge1xuICAgIGNvbnN0IGF4aXMgPSBgJHtpbmRleH1gLnNwbGl0KFwiXCIpO1xuICAgIGlmIChheGlzLmxlbmd0aCA9PT0gMSkgYXhpcy51bnNoaWZ0KFwiMFwiKTtcbiAgICBjb25zdCBpbmRleEFyciA9IFtdO1xuICAgIGNvbnN0IHJlbW92ZUhvdmVyRWZmZWN0ID0gKGluZGV4KSA9PiB7XG4gICAgICBpZiAocGxheWVyQm9hcmRbK2luZGV4XSkgcGxheWVyQm9hcmRbK2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKFwiZ3JleVwiKTtcbiAgICB9O1xuICAgIGNvbnN0IGVtcHR5SW5kZXhBcnIgPSAoKSA9PiB7XG4gICAgICBpbmRleEFyci5mb3JFYWNoKHJlbW92ZUhvdmVyRWZmZWN0KTtcbiAgICAgIGluZGV4QXJyLnNwbGljZSgwKTtcbiAgICB9O1xuICAgIGNvbnN0IHNldFNoaXBMZW5ndGggPSAoKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIEFycmF5LmZyb20oZ3JpZC5jbGFzc0xpc3QpLmluY2x1ZGVzKFwiZ3JleVwiKSAmJlxuICAgICAgICAhQXJyYXkuZnJvbShncmlkLmNsYXNzTGlzdCkuaW5jbHVkZXMoXCJzaGlwXCIpXG4gICAgICApIHtcbiAgICAgICAgY291bnRlci0tO1xuICAgICAgICBpZiAoY291bnRlciA9PT0gNCkgbGVuZ3RoT2ZTaGlwID0gNDtcbiAgICAgICAgaWYgKGNvdW50ZXIgPT09IDMpIGxlbmd0aE9mU2hpcCA9IDM7XG4gICAgICAgIGlmIChjb3VudGVyID09PSAyKSBsZW5ndGhPZlNoaXAgPSAzO1xuICAgICAgICBpZiAoY291bnRlciA9PT0gMSkgbGVuZ3RoT2ZTaGlwID0gMjtcbiAgICAgICAgaWYgKGNvdW50ZXIgPT09IDApIGxlbmd0aE9mU2hpcCA9IDA7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBhZGRUb0luZGV4QXJyID0gKCkgPT4ge1xuICAgICAgY29uc3QgYXhpc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXhpcy1idG5cIik7XG4gICAgICBsZXQgaW5kZXgxLCBpbmRleDIsIGluZGV4MywgaW5kZXg0LCBpbmRleDU7XG4gICAgICBpZiAoYXhpc0J0biAmJiBheGlzQnRuLnRleHRDb250ZW50ID09PSBcIkhvcml6b250YWxcIikge1xuICAgICAgICBpbmRleDEgPSBgJHtheGlzWzBdfSR7YXhpc1sxXX1gO1xuICAgICAgICBpbmRleDIgPSBgJHtheGlzWzBdfSR7K2F4aXNbMV0gKyAxfWA7XG4gICAgICAgIGluZGV4MyA9IGAke2F4aXNbMF19JHsrYXhpc1sxXSArIDJ9YDtcbiAgICAgICAgaW5kZXg0ID0gYCR7YXhpc1swXX0keytheGlzWzFdICsgM31gO1xuICAgICAgICBpbmRleDUgPSBgJHtheGlzWzBdfSR7K2F4aXNbMV0gKyA0fWA7XG4gICAgICAgIHBsYXllckJvYXJkWytpbmRleDFdLmNsYXNzTGlzdC5hZGQoXCJyZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoYXhpc0J0biAmJiBheGlzQnRuLnRleHRDb250ZW50ID09PSBcIlZlcnRpY2FsXCIpIHtcbiAgICAgICAgaW5kZXgxID0gYCR7YXhpc1swXX0ke2F4aXNbMV19YDtcbiAgICAgICAgaW5kZXgyID0gYCR7K2Ake2F4aXNbMF19JHtheGlzWzFdfWAgKyAxMH1gO1xuICAgICAgICBpbmRleDMgPSBgJHsrYCR7YXhpc1swXX0ke2F4aXNbMV19YCArIDIwfWA7XG4gICAgICAgIGluZGV4NCA9IGAkeytgJHtheGlzWzBdfSR7YXhpc1sxXX1gICsgMzB9YDtcbiAgICAgICAgaW5kZXg1ID0gYCR7K2Ake2F4aXNbMF19JHtheGlzWzFdfWAgKyA0MH1gO1xuICAgICAgICBwbGF5ZXJCb2FyZFsraW5kZXgxXS5jbGFzc0xpc3QuYWRkKFwicmVkXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobGVuZ3RoT2ZTaGlwID09PSA1KSB7XG4gICAgICAgIGFkZE9ubHlWYWxpZFNwYWNlKGluZGV4MSwgaW5kZXhBcnIsIHBsYXllckJvYXJkKTtcbiAgICAgICAgYWRkT25seVZhbGlkU3BhY2UoaW5kZXgyLCBpbmRleEFyciwgcGxheWVyQm9hcmQpO1xuICAgICAgICBhZGRPbmx5VmFsaWRTcGFjZShpbmRleDMsIGluZGV4QXJyLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAgIGFkZE9ubHlWYWxpZFNwYWNlKGluZGV4NCwgaW5kZXhBcnIsIHBsYXllckJvYXJkKTtcbiAgICAgICAgYWRkT25seVZhbGlkU3BhY2UoaW5kZXg1LCBpbmRleEFyciwgcGxheWVyQm9hcmQpO1xuICAgICAgfVxuICAgICAgaWYgKGluZGV4MSAmJiBsZW5ndGhPZlNoaXAgPT09IDQpIHtcbiAgICAgICAgYWRkT25seVZhbGlkU3BhY2UoaW5kZXgxLCBpbmRleEFyciwgcGxheWVyQm9hcmQpO1xuICAgICAgICBhZGRPbmx5VmFsaWRTcGFjZShpbmRleDIsIGluZGV4QXJyLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAgIGFkZE9ubHlWYWxpZFNwYWNlKGluZGV4MywgaW5kZXhBcnIsIHBsYXllckJvYXJkKTtcbiAgICAgICAgYWRkT25seVZhbGlkU3BhY2UoaW5kZXg0LCBpbmRleEFyciwgcGxheWVyQm9hcmQpO1xuICAgICAgfVxuICAgICAgaWYgKGxlbmd0aE9mU2hpcCA9PT0gMykge1xuICAgICAgICBhZGRPbmx5VmFsaWRTcGFjZShpbmRleDEsIGluZGV4QXJyLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAgIGFkZE9ubHlWYWxpZFNwYWNlKGluZGV4MiwgaW5kZXhBcnIsIHBsYXllckJvYXJkKTtcbiAgICAgICAgYWRkT25seVZhbGlkU3BhY2UoaW5kZXgzLCBpbmRleEFyciwgcGxheWVyQm9hcmQpO1xuICAgICAgfVxuICAgICAgaWYgKGxlbmd0aE9mU2hpcCA9PT0gMikge1xuICAgICAgICBhZGRPbmx5VmFsaWRTcGFjZShpbmRleDEsIGluZGV4QXJyLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAgIGFkZE9ubHlWYWxpZFNwYWNlKGluZGV4MiwgaW5kZXhBcnIsIHBsYXllckJvYXJkKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFkZEhvdmVyRWZmZWN0ID0gKGluZGV4KSA9PlxuICAgICAgICBwbGF5ZXJCb2FyZFsraW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJncmV5XCIpO1xuICAgICAgbGV0IGNvdW50ZXIyID0gY291bnRlcjtcbiAgICAgIGlmIChjb3VudGVyIDw9IDIpIGNvdW50ZXIyID0gY291bnRlciArIDE7XG4gICAgICBpZiAoaW5kZXhBcnIubGVuZ3RoID09PSBjb3VudGVyMikge1xuICAgICAgICBpbmRleEFyci5mb3JFYWNoKGFkZEhvdmVyRWZmZWN0KTtcbiAgICAgIH1cbiAgICAgIGlmIChjb3VudGVyIDwgMSlcbiAgICAgICAgcGxheWVyQm9hcmQuZm9yRWFjaCgoc3FyKSA9PiBzcXIuY2xhc3NMaXN0LnJlbW92ZShcInJlZFwiKSk7XG4gICAgfTtcbiAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZXRTaGlwTGVuZ3RoKTtcbiAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGFkZFRvSW5kZXhBcnIpO1xuICAgIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZW1wdHlJbmRleEFycik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkT25seVZhbGlkU3BhY2UoaW5kZXgsIGluZGV4QXJyLCBwbGF5ZXJCb2FyZCkge1xuICBpZiAoaW5kZXggJiYgaW5kZXgubGVuZ3RoID09PSAyKSBpbmRleEFyci5wdXNoKGluZGV4KTtcbiAgaWYgKFxuICAgIHBsYXllckJvYXJkWytpbmRleF0gJiZcbiAgICBBcnJheS5mcm9tKHBsYXllckJvYXJkWytpbmRleF0uY2xhc3NMaXN0KS5pbmNsdWRlcyhcInNoaXBcIilcbiAgKVxuICAgIGluZGV4QXJyLnBvcCgpO1xufVxuXG5mdW5jdGlvbiByZXNldFNoaXBIb3ZlcigpIHtcbiAgbGVuZ3RoT2ZTaGlwID0gNTtcbiAgY291bnRlciA9IDU7XG59XG5cbmV4cG9ydCB7IGFkZEhvdmVyLCByZXNldFNoaXBIb3ZlciB9O1xuIiwiaW1wb3J0IHtjcmVhdGUyREFycmF5fSBmcm9tIFwiLi8yZC1hcnJheVwiO1xuaW1wb3J0IHtTaGlwfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmZ1bmN0aW9uIEdhbWVib2FyZChwbGFjZVBsYXllclNoaXBzKSB7XG4gIGNvbnN0IEFyciA9IFtdO1xuICBsZXQgYWxpZ24gPSBcIlhcIjtcbiAgY29uc3Qgc2hpcEFyciA9IFtdO1xuICBjb25zdCBib2FyZCA9IGNyZWF0ZTJEQXJyYXkoMTApO1xuICBjb25zdCBhbGlnblNoaXAgPSAoKSA9PiAoYWxpZ24gPSBhbGlnbiA9PT0gXCJYXCIgPyBcIllcIiA6IFwiWFwiKTtcblxuICBjb25zdCBwb3NpdGlvblNoaXAgPSAoaW5kZXgpID0+IHtcbiAgICBwbGFjZVBsYXllclNoaXBzKEFyciwgYm9hcmQsIHNoaXBBcnIsIGluZGV4LCBhbGlnbik7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChhdHRhY2spID0+IHtcbiAgICBsZXQgaGl0Q29vcmQ7XG4gICAgbGV0IHNoaXA1U3VuaztcbiAgICBsZXQgc2hpcDRTdW5rO1xuICAgIGxldCBzaGlwM1N1bms7XG4gICAgbGV0IHNoaXAyU3VuaztcbiAgICBsZXQgc2hpcDFTdW5rO1xuICAgIGxldCBzaGlwNUNvb3JkO1xuICAgIGxldCBzaGlwNENvb3JkO1xuICAgIGxldCBzaGlwM0Nvb3JkO1xuICAgIGxldCBzaGlwMkNvb3JkO1xuICAgIGxldCBzaGlwMUNvb3JkO1xuXG4gICAgY29uc3QgW3NoaXBGaXZlLCBzaGlwRm91ciwgc2hpcFRocmVlLCBzaGlwVHdvLCBzaGlwT25lXSA9IHNoaXBBcnI7XG4gICAgY29uc3QgW3NoaXA1LCBzaGlwNCwgc2hpcDMsIHNoaXAyLCBzaGlwMV0gPSBBcnI7XG4gICAgY29uc3QgYXJyYXkgPSBbc2hpcDUsIHNoaXA0LCBzaGlwMywgc2hpcDIsIHNoaXAxXS5mbGF0KCk7XG5cbiAgICBhcnJheS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBzaGlwLmZvckVhY2goKGNvb3JkaW5hdGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmICgrYXR0YWNrLmpvaW4oXCJcIikgPT09ICtjb29yZGluYXRlKSB7XG4gICAgICAgICAgaGl0Q29vcmQgPSBzaGlwLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgY29uc3Qgc2hpNSA9IFNoaXAoc2hpcEZpdmUuWFksIHNoaXBGaXZlLnNoaXBMZW5naHQsIHNoaXBGaXZlLmFsaWduKTtcbiAgICAgICAgICBzaGlwNVN1bmsgPSBzaGk1LmlzU3VuayhzaGlwLCBoaXRDb29yZCk7XG4gICAgICAgICAgc2hpcDVDb29yZCA9IHNoaTUuc2hpcENvb3JkO1xuICAgICAgICAgIGNvbnN0IHNoaTQgPSBTaGlwKHNoaXBGb3VyLlhZLCBzaGlwRm91ci5zaGlwTGVuZ2h0LCBzaGlwRm91ci5hbGlnbik7XG4gICAgICAgICAgc2hpcDRTdW5rID0gc2hpNC5pc1N1bmsoc2hpcCwgaGl0Q29vcmQpO1xuICAgICAgICAgIHNoaXA0Q29vcmQgPSBzaGk0LnNoaXBDb29yZDtcbiAgICAgICAgICBjb25zdCBzaGkzID0gU2hpcChcbiAgICAgICAgICAgIHNoaXBUaHJlZS5YWSxcbiAgICAgICAgICAgIHNoaXBUaHJlZS5zaGlwTGVuZ2h0LFxuICAgICAgICAgICAgc2hpcFRocmVlLmFsaWduLFxuICAgICAgICAgICk7XG4gICAgICAgICAgc2hpcDNTdW5rID0gc2hpMy5pc1N1bmsoc2hpcCwgaGl0Q29vcmQpO1xuICAgICAgICAgIHNoaXAzQ29vcmQgPSBzaGkzLnNoaXBDb29yZDtcbiAgICAgICAgICBjb25zdCBzaGkyID0gU2hpcChzaGlwVHdvLlhZLCBzaGlwVHdvLnNoaXBMZW5naHQsIHNoaXBUd28uYWxpZ24pO1xuICAgICAgICAgIHNoaXAyU3VuayA9IHNoaTIuaXNTdW5rKHNoaXAsIGhpdENvb3JkKTtcbiAgICAgICAgICBzaGlwMkNvb3JkID0gc2hpMi5zaGlwQ29vcmQ7XG4gICAgICAgICAgY29uc3Qgc2hpMSA9IFNoaXAoc2hpcE9uZS5YWSwgc2hpcE9uZS5zaGlwTGVuZ2h0LCBzaGlwT25lLmFsaWduKTtcbiAgICAgICAgICBzaGlwMVN1bmsgPSBzaGkxLmlzU3VuayhzaGlwLCBoaXRDb29yZCk7XG4gICAgICAgICAgc2hpcDFDb29yZCA9IHNoaTEuc2hpcENvb3JkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgaGl0Q29vcmQsXG4gICAgICBzaGlwNVN1bmssXG4gICAgICBzaGlwNFN1bmssXG4gICAgICBzaGlwM1N1bmssXG4gICAgICBzaGlwMlN1bmssXG4gICAgICBzaGlwMVN1bmssXG4gICAgICBzaGlwNUNvb3JkLFxuICAgICAgc2hpcDRDb29yZCxcbiAgICAgIHNoaXAzQ29vcmQsXG4gICAgICBzaGlwMkNvb3JkLFxuICAgICAgc2hpcDFDb29yZCxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IGFsbFNoaXBzU3VuayA9ICgpID0+IHtcbiAgICBjb25zdCBbc2hpcDUsIHNoaXA0LCBzaGlwMywgc2hpcDIsIHNoaXAxXSA9IEFyci5mbGF0KCk7XG4gICAgaWYgKHNoaXA1Lmxlbmd0aCA9PT0gMFxuICAgICYmIHNoaXA0Lmxlbmd0aCA9PT0gMFxuICAgICYmIHNoaXAzLmxlbmd0aCA9PT0gMFxuICAgICYmIHNoaXAyLmxlbmd0aCA9PT0gMFxuICAgICYmIHNoaXAxLmxlbmd0aCA9PT0gMFxuICAgICkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgQXJyLFxuICAgIGJvYXJkLFxuICAgIHNoaXBBcnIsXG4gICAgYWxpZ25TaGlwLFxuICAgIGFsbFNoaXBzU3VuayxcbiAgICBwb3NpdGlvblNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgfTtcbn1cblxuZXhwb3J0IHtHYW1lYm9hcmR9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmZ1bmN0aW9uIGdldFNoaXBDb29yZGluYXRlcyhhcnJheSwgbGVuZ3RoLCBhbGlnbikge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpIHx8IGFycmF5Lmxlbmd0aCA8IDIpIHJldHVybiBmYWxzZTtcbiAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gW2FycmF5XTtcbiAgaWYgKGFsaWduID09PSBcIlhcIikge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHNoaXBDb29yZGluYXRlcy5wdXNoKFthcnJheVswXSwgYXJyYXlbMV0gKyBpXSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHNoaXBDb29yZGluYXRlcy5wdXNoKFthcnJheVswXSArIGksIGFycmF5WzFdXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzaGlwQ29vcmRpbmF0ZXM7XG59XG5cbmV4cG9ydCB7Z2V0U2hpcENvb3JkaW5hdGVzfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJldHVybi1hc3NpZ24gKi9cbmltcG9ydCB7c2hpcEF4aXN9IGZyb20gXCIuL3NocC1heGlzXCI7XG5cbmZ1bmN0aW9uIHBsYWNlUGxheWVyU2hpcHMoQXJyLCBib2FyZCwgc2hpcEFyciwgaW5kZXgsIGFsaWduKSB7XG4gIGxldCBzaGlwTGVuZ2h0O1xuICBjb25zdCBhc3NpZ25WYWx1ZSA9ICh2YWx1ZSkgPT4gKHNoaXBMZW5naHQgPSB2YWx1ZSk7XG4gIGlmIChBcnIubGVuZ3RoID4gNCkgcmV0dXJuO1xuICBhc3NpZ25MZW5ndGhUb1NoaXBzKEFyciwgYXNzaWduVmFsdWUpO1xuICBwbGFjZVNoaXBzKGluZGV4LCBzaGlwTGVuZ2h0LCBhbGlnbiwgYm9hcmQsIEFyciwgc2hpcEFycik7XG59XG5cbmZ1bmN0aW9uIHBsYWNlQ29tcHV0ZXJTaGlwcyhBcnIsIGJvYXJkLCBzaGlwQXJyKSB7XG4gIGNvbnN0IGFsaWduQXJyID0gW1wiWFwiLCBcIllcIl07XG4gIGxldCBzaGlwTGVuZ2h0O1xuICBjb25zdCBhc3NpZ25WYWx1ZSA9ICh2YWx1ZSkgPT4gKHNoaXBMZW5naHQgPSB2YWx1ZSk7XG4gIHdoaWxlIChBcnIubGVuZ3RoIDwgNSkge1xuICAgIGFzc2lnbkxlbmd0aFRvU2hpcHMoQXJyLCBhc3NpZ25WYWx1ZSk7XG4gICAgY29uc3QgYWxpZ25JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFsaWduQXJyLmxlbmd0aCk7XG4gICAgY29uc3QgYWxpZ24gPSBhbGlnbkFyclthbGlnbkluZGV4XTtcbiAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgcGxhY2VTaGlwcyhpbmRleCwgc2hpcExlbmdodCwgYWxpZ24sIGJvYXJkLCBBcnIsIHNoaXBBcnIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2lnbkxlbmd0aFRvU2hpcHMoQXJyLCBhc3NpZ25WYWx1ZSkge1xuICBpZiAoQXJyLmxlbmd0aCA9PT0gMCkgYXNzaWduVmFsdWUoNSk7XG4gIGlmIChBcnIubGVuZ3RoID09PSAxKSBhc3NpZ25WYWx1ZSg0KTtcbiAgaWYgKEFyci5sZW5ndGggPT09IDIpIGFzc2lnblZhbHVlKDMpO1xuICBpZiAoQXJyLmxlbmd0aCA9PT0gMykgYXNzaWduVmFsdWUoMyk7XG4gIGlmIChBcnIubGVuZ3RoID09PSA0KSBhc3NpZ25WYWx1ZSgyKTtcbn1cblxuZnVuY3Rpb24gcGxhY2VTaGlwcyhpbmRleCwgc2hpcExlbmdodCwgYWxpZ24sIGJvYXJkLCBBcnIsIHNoaXBBcnIpIHtcbiAgY29uc3QgYXhpcyA9IGAke2luZGV4fWAuc3BsaXQoXCJcIik7XG4gIGlmIChheGlzLmxlbmd0aCA9PT0gMSkgYXhpcy51bnNoaWZ0KFwiMFwiKTtcbiAgY29uc3Qgc2hpcENvb3JkID0gc2hpcEF4aXMoc2hpcExlbmdodCwgK2F4aXNbMF0sICtheGlzWzFdLCBzaGlwTGVuZ2h0LCBhbGlnbiwgYm9hcmQpO1xuICBpZiAoc2hpcENvb3JkLmxlbmd0aCAhPT0gMCkge1xuICAgIEFyci5wdXNoKHNoaXBDb29yZCk7XG4gICAgc2hpcEFyci5wdXNoKHsgWFk6IFsrYXhpc1swXSwgK2F4aXNbMV1dLCBhbGlnbiwgc2hpcExlbmdodCB9KTtcbiAgfVxufVxuXG5leHBvcnQgeyBwbGFjZVBsYXllclNoaXBzLCBwbGFjZUNvbXB1dGVyU2hpcHMgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5pbXBvcnQge2dldFNoaXBDb29yZGluYXRlc30gZnJvbSBcIi4vZ2V0U2hpcENvb3JkaW5hdGVzXCI7XG5cbmZ1bmN0aW9uIFNoaXAoYXJyYXksIGxlbmd0aCwgYWxpZ24pIHtcbiAgY29uc3Qgc2hpcENvb3JkID0gZ2V0U2hpcENvb3JkaW5hdGVzKGFycmF5LCBsZW5ndGgsIGFsaWduKTtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHNoaXBDb29yZCkgJiYgIXNoaXBDb29yZC5sZW5ndGggPiAwKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IGlzU3VuayA9IChjb29yZCwgaGl0Q29vcmQpID0+IHtcbiAgICBmb3IgKGNvbnN0IFhZIG9mIHNoaXBDb29yZCkge1xuICAgICAgaWYgKGhpdENvb3JkLmpvaW4oXCJcIikgPT09IFhZLmpvaW4oXCJcIikpIGlmIChjb29yZC5sZW5ndGggPD0gMCkgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBjb29yZC5sZW5ndGg7XG4gIH07XG4gIHJldHVybiB7IHNoaXBDb29yZCwgaXNTdW5rIH07XG59XG5cbmV4cG9ydCB7U2hpcH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0IHtTaGlwfSBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQge2NoZWNrVmFsaWRNb3ZlfSBmcm9tIFwiLi92YWxpZC1tb3ZlXCI7XG5cbmZ1bmN0aW9uIHNoaXBBeGlzKG51bSwgeCwgeSwgbGVuZ3RoLCBhbGlnbiwgYm9hcmQsIHJlY2VpdmVBdHRhY2spIHtcbiAgY29uc3Qgc2hpcCA9IFNoaXAoW3gsIHldLCBsZW5ndGgsIGFsaWduLCByZWNlaXZlQXR0YWNrKS5zaGlwQ29vcmQ7XG4gIGNvbnN0IHNoaXBDb29yZHMgPSBjaGVja1ZhbGlkTW92ZShudW0sIHNoaXAsIGJvYXJkKTtcbiAgY29uc3QgYXJyYXlDb29yZCA9IFtdO1xuXG4gIGFycmF5Q29vcmQucHVzaChzaGlwQ29vcmRzKTtcbiAgYXJyYXlDb29yZC5mb3JFYWNoKChjb29yZCwgaW5kZXgpID0+IHtcbiAgICBpZiAoIWNvb3JkKSBhcnJheUNvb3JkLnNwbGljZShpbmRleCwgMSk7XG4gIH0pO1xuXG4gIHJldHVybiBhcnJheUNvb3JkO1xufVxuXG5leHBvcnQge3NoaXBBeGlzfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG5sZXQgY291bnRlciA9IDA7XG5cbi8qKiBUaGlzIGZ1bmN0aW9uIHBsYWNlcyBzaGlwcyBvbiB0aGUgZ2FtZWJvYXJkIHdpdGggdGhlaXIgbGVuZ3RoICovXG5mdW5jdGlvbiBjaGVja1ZhbGlkTW92ZShudW0sIHNoaXAsIGJvYXJkQXJyYXkpIHtcbiAgbGV0IG51bUNvcHkgPSBudW07XG4gIGNvbnN0IGRvbUJvYXJkQXJycmF5ID0gW107XG4gIGlmICghc2hpcCkgcmV0dXJuIGZhbHNlO1xuICBmb3IgKGxldCBpID0gc2hpcC5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgIGlmIChcbiAgICAgICtzaGlwW2ldWzBdID4gOSB8fFxuICAgICAgK3NoaXBbaV1bMV0gPiA5IHx8XG4gICAgICBib2FyZEFycmF5WytzaGlwW2ldWzBdXVsrc2hpcFtpXVsxXV0gIT09IDBcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgaWYgKG51bSA9PSAzKSBjb3VudGVyKys7XG4gIGlmIChjb3VudGVyID09PSAyKSBudW1Db3B5ID0gNjtcbiAgXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChcbiAgICAgIGJvYXJkQXJyYXlbK3NoaXBbaV1bMF1dWytzaGlwW2ldWzFdXSA9PT0gMiB8fFxuICAgICAgYm9hcmRBcnJheVsrc2hpcFtpXVswXV1bK3NoaXBbaV1bMV1dID09PSAzIHx8XG4gICAgICBib2FyZEFycmF5WytzaGlwW2ldWzBdXVsrc2hpcFtpXVsxXV0gPT09IDQgfHxcbiAgICAgIGJvYXJkQXJyYXlbK3NoaXBbaV1bMF1dWytzaGlwW2ldWzFdXSA9PT0gNVxuICAgIClcbiAgICAgIHJldHVybjtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBib2FyZEFycmF5WytzaGlwW2ldWzBdXVsrc2hpcFtpXVsxXV0gPSBudW1Db3B5O1xuICAgIGRvbUJvYXJkQXJycmF5LnB1c2goYCR7c2hpcFtpXVswXX0ke3NoaXBbaV1bMV19YCk7XG4gIH1cblxuICBpZiAoY291bnRlciA9PT0gMikgY291bnRlciA9IDA7XG5cbiAgcmV0dXJuIGRvbUJvYXJkQXJycmF5O1xufVxuXG5leHBvcnQgeyBjaGVja1ZhbGlkTW92ZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgcmVuZGVyR2V0TmFtZVBhZ2UgfSBmcm9tIFwiLi9tb2R1bGVzL2RvbS1pbnRlcmFjdGlvbnMvcGFnZS1nZXQtbmFtZVwiO1xuaW1wb3J0IHsgYWRkUmlwcGxlRWZmZWN0IH0gZnJvbSBcIi4vbW9kdWxlcy9kb20taW50ZXJhY3Rpb25zL3JpcHBsZS1idXR0b25cIjtcbmltcG9ydCBcIi4vbW9kdWxlcy9zdHlsZS9zdHlsZS5jc3NcIjtcblxucmVuZGVyR2V0TmFtZVBhZ2UoKTtcbmFkZFJpcHBsZUVmZmVjdCgpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcIm9wYWNpdHlcIik7XG4gIH0sIDQwMCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==