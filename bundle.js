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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  align-items: center;\n  background: radial-gradient(circle at 100%,\n      #341406e8,\n      #333 50%,\n      #0f1017 75%,\n      #123 75%);\n  background-attachment: fixed;\n  opacity: 1;\n  transition-duration: 0.7s;\n  transition-property: opacity;\n}\n\n.hidden {\n  opacity: 0;\n  transition-duration: unset;\n}\n\nbody.opacity {\n  transition-duration: 0.7s;\n  opacity: 1;\n}\n\nbody.fade {\n  opacity: 0;\n}\n\nheader {\n  width: -webkit-fill-available;\n}\n\n.header {\n  border: 0ch;\n}\n\nh1 {\n  text-align: center;\n  font-size: min(15vw, 8rem);\n  color: #715f36;\n  text-shadow: 3px -7px 5px black;\n}\n\n.h1 {\n  font-size: min(15vw, 4rem);\n}\n\n.instruction2 {\n  color: bisque;\n  text-transform: capitalize;\n}\n\n.input-div,\n.game-over-div {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.input-div {\n  opacity: 1;\n  transition-duration: 0.7s;\n  transition-property: opacity;\n}\n\n.input-div.fade {\n  opacity: 0;\n}\n\n.align-ships {\n  text-align: center;\n  position: relative;\n  margin-bottom: 25px;\n}\n\nlabel {\n  font-size: xx-large;\n  color: aquamarine;\n  color: #9cdfffde;\n  font-variant: unicase;\n}\n\ninput {\n  padding: 15px;\n  border-radius: 10px;\n}\n\n.second-input {\n  position: relative;\n}\n\n.start-btn {\n  width: fit-content;\n  padding: 15px;\n  align-self: center;\n}\n\n.choose-div {\n  margin-top: auto;\n  margin-bottom: auto;\n  text-align: center;\n  opacity: 1;\n  transition-duration: 0.7s;\n  transition-property: opacity;\n}\n\n.choose-div.fade {\n  opacity: 0;\n}\n\n.choose-div>p {\n  font-size: 2rem;\n  text-transform: capitalize;\n  color: #9cdfffde;\n  font-variant: unicase;\n}\n\n.btn-div {\n  text-align: center;\n  margin-top: 10px;\n}\n\n.play-human {\n  margin-left: 20px;\n}\n\n.play-ai,\n.play-human,\n.btn-restart,\n.start-btn {\n  width: 110px;\n  padding: 15px 0;\n  margin-top: 15px;\n  font-weight: bolder;\n}\n\n.axis-btn {\n  margin-top: 10px;\n  padding: 8px;\n  font-weight: bolder;\n  width: 90px;\n}\n\n.align-ships>button {\n  margin-top: 10px;\n  padding: 8px;\n  font-weight: bolder;\n  width: 90px;\n}\n\n.btn-restart {\n  margin: auto;\n}\n\n.game-over {\n  font-size: xxx-large;\n  color: #c3cbeb;\n  text-shadow: 3px -7px 5px black;\n}\n\n.winner,\n.name {\n  font-size: xx-large;\n  color: cadetblue;\n  margin-top: -15px;\n  text-shadow: 0px -5px 2px black;\n}\n\n.game-over-div {\n  text-align: center;\n}\n\n.board-container {\n  display: flex;\n  margin: auto;\n  flex-wrap: wrap;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  row-gap: 60px;\n  column-gap: 50px;\n  margin-bottom: 100px;\n  padding: 0 5px;\n}\n\n.container-div1,\n.container-div2 {\n  /* margin: auto; */\n  width: 400px;\n  height: 400px;\n}\n\n.error-msg {\n  text-align: center;\n  color: greenyellow;\n}\n\n.player,\n.player2 {\n  text-align: center;\n  color: #a5a1cc;\n  font-weight: bolder;\n  margin-bottom: 10px;\n  text-decoration: underline;\n  text-transform: capitalize;\n  text-decoration-line: unset;\n  font-variant: unicase;\n}\n\n.player1-board,\n.player2-board {\n  backdrop-filter: brightness(0.7);\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  height: 100%;\n  border: 1px solid #1d00ff;\n  box-shadow: 7px 5px 9px 2px;\n  background-color: rgb(10 16 64 / 30%);\n}\n\n.player1-grid,\n.player2-grid {\n  border: 1px solid #d7fff4;\n}\n\n.player1-grid:hover,\n.player2-grid:hover {\n  background-color: rgb(255, 183, 183);\n}\n\n.red:hover {\n  background-color: red;\n}\n\n.grey {\n  background-color: rgb(255, 183, 183) !important;\n}\n\n.hide {\n  position: absolute;\n  visibility: hidden;\n}\n\n.show {\n  position: relative;\n  visibility: visible;\n}\n\n.ship {\n  background-color: #00ffff70 !important;\n}\n\n.shots {\n  border-radius: 40px;\n  border-color: black;\n  background-color: #f79e85c4 !important;\n}\n\n.valid-shot {\n  background-color: #ff0000ba !important;\n}\n\n.sunk-ship {\n  background-color: #3c53f1a6 !important;\n}\n\n.blinking {\n  animation: blinkingBackground 2s infinite;\n}\n\nbutton {\n  position: relative;\n  overflow: hidden;\n  transition: background 400ms;\n  color: #fff;\n  background-color: #6200ee;\n  outline: 0;\n  border: 0;\n  box-shadow: 1px 2px 1rem 0px rgb(0 0 0 / 95%);\n  cursor: pointer;\n  border-radius: 5px;\n}\n\n.ripple {\n  position: absolute;\n  border-radius: 50%;\n  transform: scale(0);\n  animation: ripple 600ms linear;\n  background-color: rgba(255, 255, 255, 0.7);\n  width: 100px;\n  height: 100px;\n  margin-top: -50px;\n  margin-left: -50px;\n  opacity: 0;\n}\n\n@keyframes ripple {\n  from {\n    opacity: 1;\n    transform: scale(0);\n  }\n\n  to {\n    transform: scale(4);\n    opacity: 0;\n  }\n}\n\n@keyframes blinkingBackground {\n  0% {\n    color: #004435;\n  }\n\n  25% {\n    color: #ac9dff;\n  }\n\n  50% {\n    color: #137056;\n  }\n\n  70% {\n    color: #ffffff;\n  }\n\n  100% {\n    color: #272063;\n  }\n}\n\n@media screen and (max-width: 600px) {\n\n  .container-div1,\n  .container-div2 {\n    width: 350px;\n    height: 350px;\n  }\n}\n\nfooter {\n  padding: 15px;\n  margin-top: auto;\n  text-align: center;\n  background-color: #bba7a7;\n  width: -webkit-fill-available;\n}", "",{"version":3,"sources":["webpack://./src/modules/style/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  align-items: center;\n  background: radial-gradient(circle at 100%,\n      #341406e8,\n      #333 50%,\n      #0f1017 75%,\n      #123 75%);\n  background-attachment: fixed;\n  opacity: 1;\n  transition-duration: 0.7s;\n  transition-property: opacity;\n}\n\n.hidden {\n  opacity: 0;\n  transition-duration: unset;\n}\n\nbody.opacity {\n  transition-duration: 0.7s;\n  opacity: 1;\n}\n\nbody.fade {\n  opacity: 0;\n}\n\nheader {\n  width: -webkit-fill-available;\n}\n\n.header {\n  border: 0ch;\n}\n\nh1 {\n  text-align: center;\n  font-size: min(15vw, 8rem);\n  color: #715f36;\n  text-shadow: 3px -7px 5px black;\n}\n\n.h1 {\n  font-size: min(15vw, 4rem);\n}\n\n.instruction2 {\n  color: bisque;\n  text-transform: capitalize;\n}\n\n.input-div,\n.game-over-div {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.input-div {\n  opacity: 1;\n  transition-duration: 0.7s;\n  transition-property: opacity;\n}\n\n.input-div.fade {\n  opacity: 0;\n}\n\n.align-ships {\n  text-align: center;\n  position: relative;\n  margin-bottom: 25px;\n}\n\nlabel {\n  font-size: xx-large;\n  color: aquamarine;\n  color: #9cdfffde;\n  font-variant: unicase;\n}\n\ninput {\n  padding: 15px;\n  border-radius: 10px;\n}\n\n.second-input {\n  position: relative;\n}\n\n.start-btn {\n  width: fit-content;\n  padding: 15px;\n  align-self: center;\n}\n\n.choose-div {\n  margin-top: auto;\n  margin-bottom: auto;\n  text-align: center;\n  opacity: 1;\n  transition-duration: 0.7s;\n  transition-property: opacity;\n}\n\n.choose-div.fade {\n  opacity: 0;\n}\n\n.choose-div>p {\n  font-size: 2rem;\n  text-transform: capitalize;\n  color: #9cdfffde;\n  font-variant: unicase;\n}\n\n.btn-div {\n  text-align: center;\n  margin-top: 10px;\n}\n\n.play-human {\n  margin-left: 20px;\n}\n\n.play-ai,\n.play-human,\n.btn-restart,\n.start-btn {\n  width: 110px;\n  padding: 15px 0;\n  margin-top: 15px;\n  font-weight: bolder;\n}\n\n.axis-btn {\n  margin-top: 10px;\n  padding: 8px;\n  font-weight: bolder;\n  width: 90px;\n}\n\n.align-ships>button {\n  margin-top: 10px;\n  padding: 8px;\n  font-weight: bolder;\n  width: 90px;\n}\n\n.btn-restart {\n  margin: auto;\n}\n\n.game-over {\n  font-size: xxx-large;\n  color: #c3cbeb;\n  text-shadow: 3px -7px 5px black;\n}\n\n.winner,\n.name {\n  font-size: xx-large;\n  color: cadetblue;\n  margin-top: -15px;\n  text-shadow: 0px -5px 2px black;\n}\n\n.game-over-div {\n  text-align: center;\n}\n\n.board-container {\n  display: flex;\n  margin: auto;\n  flex-wrap: wrap;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  row-gap: 60px;\n  column-gap: 50px;\n  margin-bottom: 100px;\n  padding: 0 5px;\n}\n\n.container-div1,\n.container-div2 {\n  /* margin: auto; */\n  width: 400px;\n  height: 400px;\n}\n\n.error-msg {\n  text-align: center;\n  color: greenyellow;\n}\n\n.player,\n.player2 {\n  text-align: center;\n  color: #a5a1cc;\n  font-weight: bolder;\n  margin-bottom: 10px;\n  text-decoration: underline;\n  text-transform: capitalize;\n  text-decoration-line: unset;\n  font-variant: unicase;\n}\n\n.player1-board,\n.player2-board {\n  backdrop-filter: brightness(0.7);\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  height: 100%;\n  border: 1px solid #1d00ff;\n  box-shadow: 7px 5px 9px 2px;\n  background-color: rgb(10 16 64 / 30%);\n}\n\n.player1-grid,\n.player2-grid {\n  border: 1px solid #d7fff4;\n}\n\n.player1-grid:hover,\n.player2-grid:hover {\n  background-color: rgb(255, 183, 183);\n}\n\n.red:hover {\n  background-color: red;\n}\n\n.grey {\n  background-color: rgb(255, 183, 183) !important;\n}\n\n.hide {\n  position: absolute;\n  visibility: hidden;\n}\n\n.show {\n  position: relative;\n  visibility: visible;\n}\n\n.ship {\n  background-color: #00ffff70 !important;\n}\n\n.shots {\n  border-radius: 40px;\n  border-color: black;\n  background-color: #f79e85c4 !important;\n}\n\n.valid-shot {\n  background-color: #ff0000ba !important;\n}\n\n.sunk-ship {\n  background-color: #3c53f1a6 !important;\n}\n\n.blinking {\n  animation: blinkingBackground 2s infinite;\n}\n\nbutton {\n  position: relative;\n  overflow: hidden;\n  transition: background 400ms;\n  color: #fff;\n  background-color: #6200ee;\n  outline: 0;\n  border: 0;\n  box-shadow: 1px 2px 1rem 0px rgb(0 0 0 / 95%);\n  cursor: pointer;\n  border-radius: 5px;\n}\n\n.ripple {\n  position: absolute;\n  border-radius: 50%;\n  transform: scale(0);\n  animation: ripple 600ms linear;\n  background-color: rgba(255, 255, 255, 0.7);\n  width: 100px;\n  height: 100px;\n  margin-top: -50px;\n  margin-left: -50px;\n  opacity: 0;\n}\n\n@keyframes ripple {\n  from {\n    opacity: 1;\n    transform: scale(0);\n  }\n\n  to {\n    transform: scale(4);\n    opacity: 0;\n  }\n}\n\n@keyframes blinkingBackground {\n  0% {\n    color: #004435;\n  }\n\n  25% {\n    color: #ac9dff;\n  }\n\n  50% {\n    color: #137056;\n  }\n\n  70% {\n    color: #ffffff;\n  }\n\n  100% {\n    color: #272063;\n  }\n}\n\n@media screen and (max-width: 600px) {\n\n  .container-div1,\n  .container-div2 {\n    width: 350px;\n    height: 350px;\n  }\n}\n\nfooter {\n  padding: 15px;\n  margin-top: auto;\n  text-align: center;\n  background-color: #bba7a7;\n  width: -webkit-fill-available;\n}"],"sourceRoot":""}]);
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
  const instruction2 = (0,_helper_function__WEBPACK_IMPORTED_MODULE_2__.createDomElement)("h3", { class: "instruction2" });
  const name = (0,_helper_function__WEBPACK_IMPORTED_MODULE_2__.createDomElement)("p", { class: "name1" });
  const axisBtn = (0,_helper_function__WEBPACK_IMPORTED_MODULE_2__.createDomElement)("button", { class: "axis-btn" });
  const continueBtn = (0,_helper_function__WEBPACK_IMPORTED_MODULE_2__.createDomElement)("button", {
    class: "continue-btn hide",
  });
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
    const playerName = JSON.parse(localStorage.getItem("playerName"));
    const instruction2 = document.querySelector(".instruction2");
    instruction2.textContent = `${playerName}, Place Your Ships.`;
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
  const player1 = (0,_helper_function__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("h3", { class: "player" });
  const player2 = (0,_helper_function__WEBPACK_IMPORTED_MODULE_0__.createDomElement)("h3", { class: "player2" });
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
let currentShipClass;
let firstHit;

function computerShots() {
  const arrIndex = [];
  const playerBoard2 = document.querySelectorAll(".player1-grid");
  const pushIt = (square, index) => {
    if (square.classList[1] === "space") arrIndex.push(index);
  };
  playerBoard2.forEach(pushIt);
  const ranNum = Math.floor(Math.random() * (arrIndex.length - 1));
  index2 = arrIndex[ranNum];
  findValidHitOnShip(arrIndex, ranNum, playerBoard2);
  const grid2 = playerBoard2[+index2];
  if (grid2) grid2.classList.remove("space");
  return { grid2, index2, playerBoard2 };
}

function findValidHitOnShip(arrIndex, ranNum, playerBoard2) {
  if (_player_vs_computer__WEBPACK_IMPORTED_MODULE_0__.hit && visitedIndex >= 1) {
    visitedIndex = visitedIndex - 1;
    removeFromArray(0, +possibleValidShots[0] - 1);
    removeFromArray(1, +possibleValidShots[1] + 1);
    removeFromArray(2, +possibleValidShots[2] + 10);
    removeFromArray(3, +possibleValidShots[3] - 10);
    increaseVisitedIndex(playerBoard2);
    visitedIndex += 1;
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
    increaseVisitedIndex(playerBoard2);
    increaseVisitedIndex(playerBoard2);
    increaseVisitedIndex(playerBoard2);
    visitedIndex += 1;
  }
  if (_player_vs_computer__WEBPACK_IMPORTED_MODULE_0__.hit === undefined && visitedIndex >= 1 && visitedIndex < 4) {
    increaseVisitedIndex(playerBoard2);
    increaseVisitedIndex(playerBoard2);
    visitedIndex += 1;
  }
  if (_player_vs_computer__WEBPACK_IMPORTED_MODULE_0__.isSunkShipArr && _player_vs_computer__WEBPACK_IMPORTED_MODULE_0__.isSunkShipArr.includes(true)) {
    possibleValidShots = [];
    index2 = arrIndex[ranNum];
    visitedIndex = null;
    firstHit = null;
  }
}

function removeFromArray(index, expression) {
  if (visitedIndex === index) {
    index2 = expression;
    possibleValidShots.splice(index, 1, index2);
  }
}

function increaseVisitedIndex(playerBoard2) {
  index2 = possibleValidShots[visitedIndex];
  if (+index2 < 0) {
    visitedIndex += 1;
    index2 = possibleValidShots[visitedIndex];
  } else if (+index2 > 99) {
    visitedIndex += 1;
    index2 = possibleValidShots[visitedIndex];
  } else if (Number.isNaN(+index2)) {
    visitedIndex += 1;
    index2 = possibleValidShots[visitedIndex];
  } else if (index2 === "010") {
    visitedIndex += 1;
    index2 = possibleValidShots[visitedIndex];
  } else if (
    playerBoard2[+index2] &&
    Array.from(playerBoard2[+index2].classList).includes("shots")
  ) {
    visitedIndex += 1;
    index2 = possibleValidShots[visitedIndex];
  }
  if (
    firstHit &&
    playerBoard2[+index2] &&
    Array.from(playerBoard2[+index2].classList).includes("ship")
  ) {
    Array.from(playerBoard2[firstHit].classList).forEach((klass) => {
      const splitToArray = klass.split("");
      const lastLetter = splitToArray[klass.length - 1];
      if (!Number.isNaN(+lastLetter)) currentShipClass = klass;
    });
    if (
      !Array.from(playerBoard2[+index2].classList).includes(currentShipClass)
    ) {
      visitedIndex += 1;
      index2 = possibleValidShots[visitedIndex];
    }
  }
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
        instruction2.textContent = "Click On Next To Start Playing";
      if (this.classList[0] === "player1-grid")
        instruction2.textContent = "Click On Next To Continue.";
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
  instruction.textContent = "Click Play To Start Game.";
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
/* harmony export */   "isSunkShipArr": () => (/* binding */ isSunkShipArr),
/* harmony export */   "playerShots": () => (/* binding */ playerShots),
/* harmony export */   "resetPlayerVsComputer": () => (/* binding */ resetPlayerVsComputer),
/* harmony export */   "setStopHere": () => (/* binding */ setStopHere),
/* harmony export */   "stopHere": () => (/* binding */ stopHere)
/* harmony export */ });
/* harmony import */ var _find_empty_spot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find-empty-spot */ "./src/modules/dom-interactions/find-empty-spot.js");
/* harmony import */ var _place_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./place-ship */ "./src/modules/dom-interactions/place-ship.js");
/* harmony import */ var _place_ship_random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./place-ship-random */ "./src/modules/dom-interactions/place-ship-random.js");
/* harmony import */ var _valid_hit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./valid-hit */ "./src/modules/dom-interactions/valid-hit.js");





let hit;
let time = 0;
let stopHere = 0;
let isSunkShipArr;

/** Checks for valid shots on ships */
function shots(showShips, className) {
  const playerBoard = document.querySelectorAll(`.${className}`);
  localStorage.setItem("player2Name", JSON.stringify("Computer"));
  const { receiveAttack, allShipsSunk } = showShips();
  const [receiveAttack2, , allShipsSunk2] = _place_ship__WEBPACK_IMPORTED_MODULE_1__.showShipsOnBoard.call(
    document,
    "player1-grid"
  );
  const addListenerToGrid = (grid, index) => grid.addEventListener(
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
  if (time === 1) return;
  if (stopHere === 1) return;
  if (Array.from(grid.classList).includes("shots")) return;
  const playerName = JSON.parse(localStorage.getItem("playerName"));
  const instruction = document.querySelector(".align-ships").children[0];
  instruction.textContent = "Waiting for Computer's Shot.";
  (0,_valid_hit__WEBPACK_IMPORTED_MODULE_3__.validShots)(
    grid,
    index,
    receiveAttack,
    playerBoard,
    allShipsSunk,
    instruction,
    playerName
  );
  time = 1;

  setTimeout(() => {
    time = 0;
    const AIName = "Computer";
    if (stopHere === 1) return;
    const { grid2, index2, playerBoard2 } = (0,_find_empty_spot__WEBPACK_IMPORTED_MODULE_0__.computerShots)();
    instruction.textContent = `Waiting for ${playerName}'s Shot.`;
    const { hitCoord, isSunkShipArray } = (0,_valid_hit__WEBPACK_IMPORTED_MODULE_3__.validShots)(
      grid2,
      index2,
      receiveAttack2,
      playerBoard2,
      allShipsSunk2,
      instruction,
      AIName
    );
    hit = hitCoord;
    isSunkShipArr = [...isSunkShipArray];
  }, 1500);
}

function resetPlayerVsComputer() {
  time = 0;
  stopHere = 0;
}

function setStopHere() {
  stopHere = 1;
}

const playerShots = shots.bind(null, _place_ship_random__WEBPACK_IMPORTED_MODULE_2__.showShipsRandomly, "player2-grid");



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
/* harmony import */ var _valid_hit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./valid-hit */ "./src/modules/dom-interactions/valid-hit.js");




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
  const addListenerToGrid = (grid, index) => grid.addEventListener(
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
      (0,_valid_hit__WEBPACK_IMPORTED_MODULE_2__.validShots)(
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
      (0,_valid_hit__WEBPACK_IMPORTED_MODULE_2__.validShots)(
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

/***/ "./src/modules/dom-interactions/valid-hit.js":
/*!***************************************************!*\
  !*** ./src/modules/dom-interactions/valid-hit.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validShots": () => (/* binding */ validShots)
/* harmony export */ });
/* harmony import */ var _page_get_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-get-name */ "./src/modules/dom-interactions/page-get-name.js");
/* harmony import */ var _player_vs_computer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player-vs-computer */ "./src/modules/dom-interactions/player-vs-computer.js");



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
    (0,_player_vs_computer__WEBPACK_IMPORTED_MODULE_1__.setStopHere)();
    setTimeout(() => {
      while (document.body.firstChild)
        document.body.removeChild(document.body.firstChild);
      (0,_page_get_name__WEBPACK_IMPORTED_MODULE_0__.announceWinner)(playerName);
    }, 2000);
  }

  const isSunkShipArray = [
    ship5Sunk,
    ship4Sunk,
    ship3Sunk,
    ship2Sunk,
    ship1Sunk,
  ];
  return { hitCoord, isSunkShipArray };
}

/** Adds blue background colour when a ship is completely sunk */
function isSunkShip(shipSunk, shipCoord, playerBoard) {
  const addBlueBg = (item) =>
    playerBoard.forEach((square, index) => {
      if (+item.join("") === index) square.classList.add("sunk-ship");
    });
  if (shipSunk === true) shipCoord.forEach(addBlueBg);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQTZFO0FBQ0Y7QUFDeEM7O0FBRW5DLDBGQUFpQjtBQUNqQix3RkFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zdHlsZS9zdHlsZS5jc3M/NzRkMCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy8yZC1hcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLWludGVyYWN0aW9ucy9jaG9vc2UtcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20taW50ZXJhY3Rpb25zL2RvbS1nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS1pbnRlcmFjdGlvbnMvZmluZC1lbXB0eS1zcG90LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20taW50ZXJhY3Rpb25zL2dldC1wbGF5ZXItbmFtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLWludGVyYWN0aW9ucy9oZWxwZXItZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS1pbnRlcmFjdGlvbnMvbmFtZS1pbnB1dC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLWludGVyYWN0aW9ucy9wYWdlLWZvb3Rlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLWludGVyYWN0aW9ucy9wYWdlLWdldC1uYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20taW50ZXJhY3Rpb25zL3BhZ2UtaGVhZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20taW50ZXJhY3Rpb25zL3BsYWNlLXNoaXAtcmFuZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20taW50ZXJhY3Rpb25zL3BsYWNlLXNoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS1pbnRlcmFjdGlvbnMvcGxheWVyLXZzLWNvbXB1dGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20taW50ZXJhY3Rpb25zL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLWludGVyYWN0aW9ucy9yaXBwbGUtYnV0dG9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20taW50ZXJhY3Rpb25zL3NoaXAtaG92ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS1pbnRlcmFjdGlvbnMvdmFsaWQtaGl0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dldFNoaXBDb29yZGluYXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcGxhY2VTaGlwc09uQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NocC1heGlzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy92YWxpZC1tb3ZlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDEwMCUsXFxuICAgICAgIzM0MTQwNmU4LFxcbiAgICAgICMzMzMgNTAlLFxcbiAgICAgICMwZjEwMTcgNzUlLFxcbiAgICAgICMxMjMgNzUlKTtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC43cztcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHVuc2V0O1xcbn1cXG5cXG5ib2R5Lm9wYWNpdHkge1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC43cztcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbmJvZHkuZmFkZSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYm9yZGVyOiAwY2g7XFxufVxcblxcbmgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogbWluKDE1dncsIDhyZW0pO1xcbiAgY29sb3I6ICM3MTVmMzY7XFxuICB0ZXh0LXNoYWRvdzogM3B4IC03cHggNXB4IGJsYWNrO1xcbn1cXG5cXG4uaDEge1xcbiAgZm9udC1zaXplOiBtaW4oMTV2dywgNHJlbSk7XFxufVxcblxcbi5pbnN0cnVjdGlvbjIge1xcbiAgY29sb3I6IGJpc3F1ZTtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG4uaW5wdXQtZGl2LFxcbi5nYW1lLW92ZXItZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNXB4O1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxufVxcblxcbi5pbnB1dC1kaXYge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuN3M7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xcbn1cXG5cXG4uaW5wdXQtZGl2LmZhZGUge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmFsaWduLXNoaXBzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XFxufVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICBjb2xvcjogYXF1YW1hcmluZTtcXG4gIGNvbG9yOiAjOWNkZmZmZGU7XFxuICBmb250LXZhcmlhbnQ6IHVuaWNhc2U7XFxufVxcblxcbmlucHV0IHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uc2Vjb25kLWlucHV0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnN0YXJ0LWJ0biB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uY2hvb3NlLWRpdiB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjdzO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcXG59XFxuXFxuLmNob29zZS1kaXYuZmFkZSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uY2hvb3NlLWRpdj5wIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgY29sb3I6ICM5Y2RmZmZkZTtcXG4gIGZvbnQtdmFyaWFudDogdW5pY2FzZTtcXG59XFxuXFxuLmJ0bi1kaXYge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLnBsYXktaHVtYW4ge1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5wbGF5LWFpLFxcbi5wbGF5LWh1bWFuLFxcbi5idG4tcmVzdGFydCxcXG4uc3RhcnQtYnRuIHtcXG4gIHdpZHRoOiAxMTBweDtcXG4gIHBhZGRpbmc6IDE1cHggMDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4uYXhpcy1idG4ge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICB3aWR0aDogOTBweDtcXG59XFxuXFxuLmFsaWduLXNoaXBzPmJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIHdpZHRoOiA5MHB4O1xcbn1cXG5cXG4uYnRuLXJlc3RhcnQge1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uZ2FtZS1vdmVyIHtcXG4gIGZvbnQtc2l6ZTogeHh4LWxhcmdlO1xcbiAgY29sb3I6ICNjM2NiZWI7XFxuICB0ZXh0LXNoYWRvdzogM3B4IC03cHggNXB4IGJsYWNrO1xcbn1cXG5cXG4ud2lubmVyLFxcbi5uYW1lIHtcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICBjb2xvcjogY2FkZXRibHVlO1xcbiAgbWFyZ2luLXRvcDogLTE1cHg7XFxuICB0ZXh0LXNoYWRvdzogMHB4IC01cHggMnB4IGJsYWNrO1xcbn1cXG5cXG4uZ2FtZS1vdmVyLWRpdiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcm93LWdhcDogNjBweDtcXG4gIGNvbHVtbi1nYXA6IDUwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG5cXG4uY29udGFpbmVyLWRpdjEsXFxuLmNvbnRhaW5lci1kaXYyIHtcXG4gIC8qIG1hcmdpbjogYXV0bzsgKi9cXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxufVxcblxcbi5lcnJvci1tc2cge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IGdyZWVueWVsbG93O1xcbn1cXG5cXG4ucGxheWVyLFxcbi5wbGF5ZXIyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjYTVhMWNjO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuc2V0O1xcbiAgZm9udC12YXJpYW50OiB1bmljYXNlO1xcbn1cXG5cXG4ucGxheWVyMS1ib2FyZCxcXG4ucGxheWVyMi1ib2FyZCB7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJyaWdodG5lc3MoMC43KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxZDAwZmY7XFxuICBib3gtc2hhZG93OiA3cHggNXB4IDlweCAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAgMTYgNjQgLyAzMCUpO1xcbn1cXG5cXG4ucGxheWVyMS1ncmlkLFxcbi5wbGF5ZXIyLWdyaWQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q3ZmZmNDtcXG59XFxuXFxuLnBsYXllcjEtZ3JpZDpob3ZlcixcXG4ucGxheWVyMi1ncmlkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE4MywgMTgzKTtcXG59XFxuXFxuLnJlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5ncmV5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE4MywgMTgzKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaGlkZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5zaG93IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGZmZmY3MCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2hvdHMge1xcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjc5ZTg1YzQgIWltcG9ydGFudDtcXG59XFxuXFxuLnZhbGlkLXNob3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMGJhICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zdW5rLXNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjNTNmMWE2ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ibGlua2luZyB7XFxuICBhbmltYXRpb246IGJsaW5raW5nQmFja2dyb3VuZCAycyBpbmZpbml0ZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDQwMG1zO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjIwMGVlO1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGJveC1zaGFkb3c6IDFweCAycHggMXJlbSAwcHggcmdiKDAgMCAwIC8gOTUlKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnJpcHBsZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgYW5pbWF0aW9uOiByaXBwbGUgNjAwbXMgbGluZWFyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIG1hcmdpbi10b3A6IC01MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IC01MHB4O1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuQGtleWZyYW1lcyByaXBwbGUge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoNCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYmxpbmtpbmdCYWNrZ3JvdW5kIHtcXG4gIDAlIHtcXG4gICAgY29sb3I6ICMwMDQ0MzU7XFxuICB9XFxuXFxuICAyNSUge1xcbiAgICBjb2xvcjogI2FjOWRmZjtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIGNvbG9yOiAjMTM3MDU2O1xcbiAgfVxcblxcbiAgNzAlIHtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgY29sb3I6ICMyNzIwNjM7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuXFxuICAuY29udGFpbmVyLWRpdjEsXFxuICAuY29udGFpbmVyLWRpdjIge1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogMzUwcHg7XFxuICB9XFxufVxcblxcbmZvb3RlciB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmE3YTc7XFxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZHVsZXMvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25COzs7O2VBSWE7RUFDYiw0QkFBNEI7RUFDNUIsVUFBVTtFQUNWLHlCQUF5QjtFQUN6Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Us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VTtJQUNWLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTs7RUFFRTs7SUFFRSxZQUFZO0lBQ1osYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsNkJBQTZCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTAwJSxcXG4gICAgICAjMzQxNDA2ZTgsXFxuICAgICAgIzMzMyA1MCUsXFxuICAgICAgIzBmMTAxNyA3NSUsXFxuICAgICAgIzEyMyA3NSUpO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjdzO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdW5zZXQ7XFxufVxcblxcbmJvZHkub3BhY2l0eSB7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjdzO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuYm9keS5mYWRlIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbmhlYWRlciB7XFxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBib3JkZXI6IDBjaDtcXG59XFxuXFxuaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiBtaW4oMTV2dywgOHJlbSk7XFxuICBjb2xvcjogIzcxNWYzNjtcXG4gIHRleHQtc2hhZG93OiAzcHggLTdweCA1cHggYmxhY2s7XFxufVxcblxcbi5oMSB7XFxuICBmb250LXNpemU6IG1pbigxNXZ3LCA0cmVtKTtcXG59XFxuXFxuLmluc3RydWN0aW9uMiB7XFxuICBjb2xvcjogYmlzcXVlO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcbi5pbnB1dC1kaXYsXFxuLmdhbWUtb3Zlci1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE1cHg7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG59XFxuXFxuLmlucHV0LWRpdiB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC43cztcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XFxufVxcblxcbi5pbnB1dC1kaXYuZmFkZSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uYWxpZ24tc2hpcHMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG59XFxuXFxubGFiZWwge1xcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG4gIGNvbG9yOiBhcXVhbWFyaW5lO1xcbiAgY29sb3I6ICM5Y2RmZmZkZTtcXG4gIGZvbnQtdmFyaWFudDogdW5pY2FzZTtcXG59XFxuXFxuaW5wdXQge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5zZWNvbmQtaW5wdXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc3RhcnQtYnRuIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jaG9vc2UtZGl2IHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuN3M7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xcbn1cXG5cXG4uY2hvb3NlLWRpdi5mYWRlIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5jaG9vc2UtZGl2PnAge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBjb2xvcjogIzljZGZmZmRlO1xcbiAgZm9udC12YXJpYW50OiB1bmljYXNlO1xcbn1cXG5cXG4uYnRuLWRpdiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ucGxheS1odW1hbiB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuLnBsYXktYWksXFxuLnBsYXktaHVtYW4sXFxuLmJ0bi1yZXN0YXJ0LFxcbi5zdGFydC1idG4ge1xcbiAgd2lkdGg6IDExMHB4O1xcbiAgcGFkZGluZzogMTVweCAwO1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi5heGlzLWJ0biB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIHdpZHRoOiA5MHB4O1xcbn1cXG5cXG4uYWxpZ24tc2hpcHM+YnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgd2lkdGg6IDkwcHg7XFxufVxcblxcbi5idG4tcmVzdGFydCB7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5nYW1lLW92ZXIge1xcbiAgZm9udC1zaXplOiB4eHgtbGFyZ2U7XFxuICBjb2xvcjogI2MzY2JlYjtcXG4gIHRleHQtc2hhZG93OiAzcHggLTdweCA1cHggYmxhY2s7XFxufVxcblxcbi53aW5uZXIsXFxuLm5hbWUge1xcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG4gIGNvbG9yOiBjYWRldGJsdWU7XFxuICBtYXJnaW4tdG9wOiAtMTVweDtcXG4gIHRleHQtc2hhZG93OiAwcHggLTVweCAycHggYmxhY2s7XFxufVxcblxcbi5nYW1lLW92ZXItZGl2IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICByb3ctZ2FwOiA2MHB4O1xcbiAgY29sdW1uLWdhcDogNTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgcGFkZGluZzogMCA1cHg7XFxufVxcblxcbi5jb250YWluZXItZGl2MSxcXG4uY29udGFpbmVyLWRpdjIge1xcbiAgLyogbWFyZ2luOiBhdXRvOyAqL1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG59XFxuXFxuLmVycm9yLW1zZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogZ3JlZW55ZWxsb3c7XFxufVxcblxcbi5wbGF5ZXIsXFxuLnBsYXllcjIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNhNWExY2M7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5zZXQ7XFxuICBmb250LXZhcmlhbnQ6IHVuaWNhc2U7XFxufVxcblxcbi5wbGF5ZXIxLWJvYXJkLFxcbi5wbGF5ZXIyLWJvYXJkIHtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcygwLjcpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzFkMDBmZjtcXG4gIGJveC1zaGFkb3c6IDdweCA1cHggOXB4IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMCAxNiA2NCAvIDMwJSk7XFxufVxcblxcbi5wbGF5ZXIxLWdyaWQsXFxuLnBsYXllcjItZ3JpZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDdmZmY0O1xcbn1cXG5cXG4ucGxheWVyMS1ncmlkOmhvdmVyLFxcbi5wbGF5ZXIyLWdyaWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTgzLCAxODMpO1xcbn1cXG5cXG4ucmVkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmdyZXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTgzLCAxODMpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5oaWRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnNob3cge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZmZmZjcwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zaG90cyB7XFxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNzllODVjNCAhaW1wb3J0YW50O1xcbn1cXG5cXG4udmFsaWQtc2hvdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwYmEgIWltcG9ydGFudDtcXG59XFxuXFxuLnN1bmstc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M1M2YxYTYgIWltcG9ydGFudDtcXG59XFxuXFxuLmJsaW5raW5nIHtcXG4gIGFuaW1hdGlvbjogYmxpbmtpbmdCYWNrZ3JvdW5kIDJzIGluZmluaXRlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgNDAwbXM7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MjAwZWU7XFxuICBvdXRsaW5lOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm94LXNoYWRvdzogMXB4IDJweCAxcmVtIDBweCByZ2IoMCAwIDAgLyA5NSUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucmlwcGxlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICBhbmltYXRpb246IHJpcHBsZSA2MDBtcyBsaW5lYXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgbWFyZ2luLXRvcDogLTUwcHg7XFxuICBtYXJnaW4tbGVmdDogLTUwcHg7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJpcHBsZSB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSg0KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBibGlua2luZ0JhY2tncm91bmQge1xcbiAgMCUge1xcbiAgICBjb2xvcjogIzAwNDQzNTtcXG4gIH1cXG5cXG4gIDI1JSB7XFxuICAgIGNvbG9yOiAjYWM5ZGZmO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgY29sb3I6ICMxMzcwNTY7XFxuICB9XFxuXFxuICA3MCUge1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBjb2xvcjogIzI3MjA2MztcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG5cXG4gIC5jb250YWluZXItZGl2MSxcXG4gIC5jb250YWluZXItZGl2MiB7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgaGVpZ2h0OiAzNTBweDtcXG4gIH1cXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYTdhNztcXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGNyZWF0ZTJEQXJyYXkobnVtKSB7XG4gIGNvbnN0IGJvYXJkID0gbmV3IEFycmF5KG51bSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGJvYXJkW2ldID0gbmV3IEFycmF5KG51bSk7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZFtpXS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgYm9hcmRbaV1bal0gPSAwO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBib2FyZDtcbn1cblxuZXhwb3J0IHtjcmVhdGUyREFycmF5fTtcbiIsImltcG9ydCB7IGh1bWFuUGxheWVycyB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgY3JlYXRlR2FtZWJvYXJkIH0gZnJvbSBcIi4vZG9tLWdhbWVib2FyZFwiO1xuaW1wb3J0IHsgY3JlYXRlRG9tRWxlbWVudCB9IGZyb20gXCIuL2hlbHBlci1mdW5jdGlvblwiO1xuaW1wb3J0IHsgY3JlYXRlSW5wdXRFbGVtIH0gZnJvbSBcIi4vbmFtZS1pbnB1dFwiO1xuaW1wb3J0IHsgcGxheWVyU2hvdHMgfSBmcm9tIFwiLi9wbGF5ZXItdnMtY29tcHV0ZXJcIjtcbmltcG9ydCB7IHByZXZlbnRFbXB0eUlucHV0IH0gZnJvbSBcIi4vZ2V0LXBsYXllci1uYW1lXCI7XG5pbXBvcnQgeyBhZGRIb3ZlciwgcmVzZXRTaGlwSG92ZXIgfSBmcm9tIFwiLi9zaGlwLWhvdmVyXCI7XG5pbXBvcnQgeyBhZGRSaXBwbGVFZmZlY3QgfSBmcm9tIFwiLi9yaXBwbGUtYnV0dG9uXCI7XG5cbi8qKiBDcmVhdGVzIERpdiBjb250YWluZXIgZm9yIGNob29zaW5nIHlvdXIgb3Bwb25lbnQuICovXG5mdW5jdGlvbiBjaG9vc2VQbGF5ZXIocGxheWVyTmFtZSkge1xuICBjb25zdCBjaG9vc2VEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiY2hvb3NlLWRpdlwiIH0pO1xuICBjb25zdCBidG5EaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiYnRuLWRpdlwiIH0pO1xuICBjb25zdCBwbGF5QWkgPSBjcmVhdGVEb21FbGVtZW50KFwiYnV0dG9uXCIsIHsgY2xhc3M6IFwicGxheS1haVwiIH0pO1xuICBjb25zdCBwbGF5SHVtYW4gPSBjcmVhdGVEb21FbGVtZW50KFwiYnV0dG9uXCIsIHsgY2xhc3M6IFwicGxheS1odW1hblwiIH0pO1xuICBjb25zdCBpbnN0cnVjdGlvbiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBhbGlnblNoaXBEaXYgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiYWxpZ24tc2hpcHNcIiB9KTtcbiAgY29uc3QgaW5zdHJ1Y3Rpb24yID0gY3JlYXRlRG9tRWxlbWVudChcImgzXCIsIHsgY2xhc3M6IFwiaW5zdHJ1Y3Rpb24yXCIgfSk7XG4gIGNvbnN0IG5hbWUgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcIm5hbWUxXCIgfSk7XG4gIGNvbnN0IGF4aXNCdG4gPSBjcmVhdGVEb21FbGVtZW50KFwiYnV0dG9uXCIsIHsgY2xhc3M6IFwiYXhpcy1idG5cIiB9KTtcbiAgY29uc3QgY29udGludWVCdG4gPSBjcmVhdGVEb21FbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICBjbGFzczogXCJjb250aW51ZS1idG4gaGlkZVwiLFxuICB9KTtcbiAgcGxheUFpLnRleHRDb250ZW50ID0gXCJQTEFZIEFJXCI7XG4gIHBsYXlIdW1hbi50ZXh0Q29udGVudCA9IFwiUExBWSBIVU1BTlwiO1xuICBheGlzQnRuLnRleHRDb250ZW50ID0gXCJIb3Jpem9udGFsXCI7XG4gIGNvbnRpbnVlQnRuLnRleHRDb250ZW50ID0gXCJOZXh0XCI7XG4gIGJ0bkRpdi5hcHBlbmQocGxheUFpLCBwbGF5SHVtYW4pO1xuICBhbGlnblNoaXBEaXYuYXBwZW5kKGluc3RydWN0aW9uMiwgYXhpc0J0biwgY29udGludWVCdG4pO1xuICBuYW1lLnRleHRDb250ZW50ID0gYEhlbGxvICR7cGxheWVyTmFtZX0sYDtcbiAgaW5zdHJ1Y3Rpb24udGV4dENvbnRlbnQgPSBcIkNob29zZSBZb3VyIEVuZW15LlwiO1xuICBjaG9vc2VEaXYuYXBwZW5kKG5hbWUsIGluc3RydWN0aW9uLCBidG5EaXYpO1xuICBhZGRMaXN0ZW5lclRvQnRuKFxuICAgIGNvbnRpbnVlQnRuLFxuICAgIGF4aXNCdG4sXG4gICAgcGxheUFpLFxuICAgIGFsaWduU2hpcERpdixcbiAgICBjaG9vc2VEaXYsXG4gICAgcGxheUh1bWFuXG4gICk7XG5cbiAgcmV0dXJuIGNob29zZURpdjtcbn1cblxuZnVuY3Rpb24gYWRkTGlzdGVuZXJUb0J0bihcbiAgY29udGludWVCdG4sXG4gIGF4aXNCdG4sXG4gIHBsYXlBaSxcbiAgYWxpZ25TaGlwRGl2LFxuICBjaG9vc2VEaXYsXG4gIHBsYXlIdW1hblxuKSB7XG4gIGNvbnRpbnVlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXNldFNoaXBIb3Zlcik7XG4gIGNvbnN0IGNoYW5nZUF4aXMgPSAoKSA9PlxuICAgIChheGlzQnRuLnRleHRDb250ZW50ID1cbiAgICAgIGF4aXNCdG4udGV4dENvbnRlbnQgPT09IFwiSG9yaXpvbnRhbFwiID8gXCJWZXJ0aWNhbFwiIDogXCJIb3Jpem9udGFsXCIpO1xuICBheGlzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VBeGlzKTtcbiAgcGxheUFpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJjbGlja1wiLFxuICAgIGluc2VydEJvYXJkLmJpbmQobnVsbCwgYWxpZ25TaGlwRGl2LCBjaG9vc2VEaXYsIHBsYXllclNob3RzKVxuICApO1xuICBwbGF5SHVtYW4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImNsaWNrXCIsXG4gICAgcGxheWVyMk5hbWUuYmluZChudWxsLCBjaG9vc2VEaXYsIGh1bWFuUGxheWVycywgYWxpZ25TaGlwRGl2KVxuICApO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRCb2FyZChhbGlnblNoaXBEaXYsIGNob29zZURpdiwgcGxheWVyU2hvdCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIik7XG4gIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuICBjb25zdCB7IGJvYXJkQ29udGFpbmVyIH0gPSBjcmVhdGVHYW1lYm9hcmQoKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiZmFkZVwiKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoMVwiKTtcbiAgICBoZWFkLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiZmFkZVwiKTtcbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShhbGlnblNoaXBEaXYsIGNob29zZURpdik7XG4gICAgZG9jdW1lbnQuYm9keS5yZXBsYWNlQ2hpbGQoYm9hcmRDb250YWluZXIsIGNob29zZURpdik7XG4gICAgY29uc3QgcGxheWVyTmFtZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwbGF5ZXJOYW1lXCIpKTtcbiAgICBjb25zdCBpbnN0cnVjdGlvbjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluc3RydWN0aW9uMlwiKTtcbiAgICBpbnN0cnVjdGlvbjIudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJOYW1lfSwgUGxhY2UgWW91ciBTaGlwcy5gO1xuICAgIGFkZEhvdmVyKFwiLnBsYXllcjEtZ3JpZFwiKTtcbiAgICBhZGRIb3ZlcihcIi5wbGF5ZXIyLWdyaWRcIik7XG4gICAgcGxheWVyU2hvdCgpO1xuICAgIHNldFBsYXllcnNOYW1lKCk7XG4gICAgYWRkUmlwcGxlRWZmZWN0KCk7XG4gIH0sIDQwMCk7XG59XG5cbmZ1bmN0aW9uIHNldFBsYXllcnNOYW1lKCkge1xuICBjb25zdCBwbGF5ZXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJcIik7XG4gIGNvbnN0IHBsYXllcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcjJcIik7XG4gIGNvbnN0IHBsYXllck5hbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGxheWVyTmFtZVwiKSk7XG4gIGNvbnN0IHBsYXllck5hbWUyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBsYXllcjJOYW1lXCIpKTtcbiAgcGxheWVyMS50ZXh0Q29udGVudCA9IGBQbGF5ZXIgMTogJHtwbGF5ZXJOYW1lfWA7XG4gIHBsYXllcjIudGV4dENvbnRlbnQgPSBgUGxheWVyIDI6ICR7cGxheWVyTmFtZTJ9YDtcbn1cblxuZnVuY3Rpb24gcGxheWVyMk5hbWUoY2hvb3NlRGl2LCBwbGF5ZXJTaG90LCBhbGlnblNoaXBEaXYpIHtcbiAgY29uc3QgeyBpbnB1dERpdiwgc3RhcnRCdG4sIG5hbWVJbnB1dCB9ID0gY3JlYXRlSW5wdXRFbGVtKFxuICAgIFwiRW50ZXIgSHVtYW4gTmFtZVwiLFxuICAgIFwiQ29udGludWVcIlxuICApO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJmYWRlXCIpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJmYWRlXCIpO1xuICAgIGRvY3VtZW50LmJvZHkucmVwbGFjZUNoaWxkKGlucHV0RGl2LCBjaG9vc2VEaXYpO1xuICAgIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICBwbGF5ZXIxQm9hcmQuYmluZChudWxsLCBuYW1lSW5wdXQsIGlucHV0RGl2LCBwbGF5ZXJTaG90LCBhbGlnblNoaXBEaXYpXG4gICAgKTtcbiAgICBhZGRSaXBwbGVFZmZlY3QoKTtcbiAgfSwgNDAwKTtcbn1cblxuZnVuY3Rpb24gcGxheWVyMUJvYXJkKG5hbWVJbnB1dCwgaW5wdXREaXYsIHBsYXllclNob3QsIGFsaWduU2hpcERpdikge1xuICBpZiAobmFtZUlucHV0LnZhbHVlLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIHByZXZlbnRFbXB0eUlucHV0KG5hbWVJbnB1dCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwic2Vjb25kLWlucHV0XCIpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInBsYXllcjJOYW1lXCIsIEpTT04uc3RyaW5naWZ5KGAke25hbWVJbnB1dC52YWx1ZX1gKSk7XG4gIGluc2VydEJvYXJkKGFsaWduU2hpcERpdiwgaW5wdXREaXYsIHBsYXllclNob3QpO1xufVxuXG5leHBvcnQgeyBjaG9vc2VQbGF5ZXIgfTtcbiIsImltcG9ydCB7IGNyZWF0ZURvbUVsZW1lbnQgfSBmcm9tIFwiLi9oZWxwZXItZnVuY3Rpb25cIjtcblxuLyoqIENyZWF0ZXMgRE9NIGdhbWVib2FyZCAqL1xuZnVuY3Rpb24gY3JlYXRlR2FtZWJvYXJkKCkge1xuICBjb25zdCBib2FyZENvbnRhaW5lciA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJib2FyZC1jb250YWluZXJcIiB9KTtcbiAgY29uc3QgY29udGFpbmVyRGl2MSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJjb250YWluZXItZGl2MVwiIH0pO1xuICBjb25zdCBjb250YWluZXJEaXYyID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImNvbnRhaW5lci1kaXYyIGhpZGVcIiB9KTtcbiAgY29uc3QgcGxheWVyMSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJoM1wiLCB7IGNsYXNzOiBcInBsYXllclwiIH0pO1xuICBjb25zdCBwbGF5ZXIyID0gY3JlYXRlRG9tRWxlbWVudChcImgzXCIsIHsgY2xhc3M6IFwicGxheWVyMlwiIH0pO1xuICBjb25zdCBncmlkcyA9IChwbGF5ZXIsIHBsYXllckdyaWQpID0+IHtcbiAgICBjb25zdCBzcXVhcmUgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IHBsYXllciB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBncmlkID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBwbGF5ZXJHcmlkIH0pO1xuICAgICAgc3F1YXJlLmFwcGVuZENoaWxkKGdyaWQpO1xuICAgIH1cbiAgICByZXR1cm4gc3F1YXJlO1xuICB9O1xuICBjb250YWluZXJEaXYxLmFwcGVuZChwbGF5ZXIxLCBncmlkcyhcInBsYXllcjEtYm9hcmRcIiwgXCJwbGF5ZXIxLWdyaWQgc3BhY2VcIikpO1xuICBjb250YWluZXJEaXYyLmFwcGVuZChcbiAgICBwbGF5ZXIyLFxuICAgIGdyaWRzKFwicGxheWVyMi1ib2FyZCBoaWRlXCIsIFwicGxheWVyMi1ncmlkIHNwYWNlXCIpXG4gICk7XG4gIGJvYXJkQ29udGFpbmVyLmFwcGVuZChjb250YWluZXJEaXYxLCBjb250YWluZXJEaXYyKTtcbiAgcmV0dXJuIHsgYm9hcmRDb250YWluZXIgfTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlR2FtZWJvYXJkIH07XG4iLCJpbXBvcnQgeyBoaXQsIGlzU3Vua1NoaXBBcnIgfSBmcm9tIFwiLi9wbGF5ZXItdnMtY29tcHV0ZXJcIjtcblxubGV0IGluZGV4MjtcbmxldCB2aXNpdGVkSW5kZXggPSBudWxsO1xubGV0IHBvc3NpYmxlVmFsaWRTaG90cyA9IFtdO1xubGV0IGN1cnJlbnRTaGlwQ2xhc3M7XG5sZXQgZmlyc3RIaXQ7XG5cbmZ1bmN0aW9uIGNvbXB1dGVyU2hvdHMoKSB7XG4gIGNvbnN0IGFyckluZGV4ID0gW107XG4gIGNvbnN0IHBsYXllckJvYXJkMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyMS1ncmlkXCIpO1xuICBjb25zdCBwdXNoSXQgPSAoc3F1YXJlLCBpbmRleCkgPT4ge1xuICAgIGlmIChzcXVhcmUuY2xhc3NMaXN0WzFdID09PSBcInNwYWNlXCIpIGFyckluZGV4LnB1c2goaW5kZXgpO1xuICB9O1xuICBwbGF5ZXJCb2FyZDIuZm9yRWFjaChwdXNoSXQpO1xuICBjb25zdCByYW5OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoYXJySW5kZXgubGVuZ3RoIC0gMSkpO1xuICBpbmRleDIgPSBhcnJJbmRleFtyYW5OdW1dO1xuICBmaW5kVmFsaWRIaXRPblNoaXAoYXJySW5kZXgsIHJhbk51bSwgcGxheWVyQm9hcmQyKTtcbiAgY29uc3QgZ3JpZDIgPSBwbGF5ZXJCb2FyZDJbK2luZGV4Ml07XG4gIGlmIChncmlkMikgZ3JpZDIuY2xhc3NMaXN0LnJlbW92ZShcInNwYWNlXCIpO1xuICByZXR1cm4geyBncmlkMiwgaW5kZXgyLCBwbGF5ZXJCb2FyZDIgfTtcbn1cblxuZnVuY3Rpb24gZmluZFZhbGlkSGl0T25TaGlwKGFyckluZGV4LCByYW5OdW0sIHBsYXllckJvYXJkMikge1xuICBpZiAoaGl0ICYmIHZpc2l0ZWRJbmRleCA+PSAxKSB7XG4gICAgdmlzaXRlZEluZGV4ID0gdmlzaXRlZEluZGV4IC0gMTtcbiAgICByZW1vdmVGcm9tQXJyYXkoMCwgK3Bvc3NpYmxlVmFsaWRTaG90c1swXSAtIDEpO1xuICAgIHJlbW92ZUZyb21BcnJheSgxLCArcG9zc2libGVWYWxpZFNob3RzWzFdICsgMSk7XG4gICAgcmVtb3ZlRnJvbUFycmF5KDIsICtwb3NzaWJsZVZhbGlkU2hvdHNbMl0gKyAxMCk7XG4gICAgcmVtb3ZlRnJvbUFycmF5KDMsICtwb3NzaWJsZVZhbGlkU2hvdHNbM10gLSAxMCk7XG4gICAgaW5jcmVhc2VWaXNpdGVkSW5kZXgocGxheWVyQm9hcmQyKTtcbiAgICB2aXNpdGVkSW5kZXggKz0gMTtcbiAgfVxuICBpZiAoaGl0ICYmIHZpc2l0ZWRJbmRleCA9PT0gbnVsbCkge1xuICAgIGZpcnN0SGl0ID0gK2hpdFswXTtcbiAgICBjb25zdCBzcGxpdEhpdCA9IGhpdFswXS5zcGxpdChcIlwiKTtcbiAgICBwb3NzaWJsZVZhbGlkU2hvdHMgPSBbXG4gICAgICBzcGxpdEhpdFswXSArICgrc3BsaXRIaXRbMV0gLSAxKSxcbiAgICAgIHNwbGl0SGl0WzBdICsgKCtzcGxpdEhpdFsxXSArIDEpLFxuICAgICAgK3NwbGl0SGl0WzBdICsgMSArIHNwbGl0SGl0WzFdLFxuICAgICAgK3NwbGl0SGl0WzBdIC0gMSArIHNwbGl0SGl0WzFdLFxuICAgIF07XG4gICAgdmlzaXRlZEluZGV4ID0gMDtcbiAgICBpbmNyZWFzZVZpc2l0ZWRJbmRleChwbGF5ZXJCb2FyZDIpO1xuICAgIGluY3JlYXNlVmlzaXRlZEluZGV4KHBsYXllckJvYXJkMik7XG4gICAgaW5jcmVhc2VWaXNpdGVkSW5kZXgocGxheWVyQm9hcmQyKTtcbiAgICB2aXNpdGVkSW5kZXggKz0gMTtcbiAgfVxuICBpZiAoaGl0ID09PSB1bmRlZmluZWQgJiYgdmlzaXRlZEluZGV4ID49IDEgJiYgdmlzaXRlZEluZGV4IDwgNCkge1xuICAgIGluY3JlYXNlVmlzaXRlZEluZGV4KHBsYXllckJvYXJkMik7XG4gICAgaW5jcmVhc2VWaXNpdGVkSW5kZXgocGxheWVyQm9hcmQyKTtcbiAgICB2aXNpdGVkSW5kZXggKz0gMTtcbiAgfVxuICBpZiAoaXNTdW5rU2hpcEFyciAmJiBpc1N1bmtTaGlwQXJyLmluY2x1ZGVzKHRydWUpKSB7XG4gICAgcG9zc2libGVWYWxpZFNob3RzID0gW107XG4gICAgaW5kZXgyID0gYXJySW5kZXhbcmFuTnVtXTtcbiAgICB2aXNpdGVkSW5kZXggPSBudWxsO1xuICAgIGZpcnN0SGl0ID0gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVGcm9tQXJyYXkoaW5kZXgsIGV4cHJlc3Npb24pIHtcbiAgaWYgKHZpc2l0ZWRJbmRleCA9PT0gaW5kZXgpIHtcbiAgICBpbmRleDIgPSBleHByZXNzaW9uO1xuICAgIHBvc3NpYmxlVmFsaWRTaG90cy5zcGxpY2UoaW5kZXgsIDEsIGluZGV4Mik7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5jcmVhc2VWaXNpdGVkSW5kZXgocGxheWVyQm9hcmQyKSB7XG4gIGluZGV4MiA9IHBvc3NpYmxlVmFsaWRTaG90c1t2aXNpdGVkSW5kZXhdO1xuICBpZiAoK2luZGV4MiA8IDApIHtcbiAgICB2aXNpdGVkSW5kZXggKz0gMTtcbiAgICBpbmRleDIgPSBwb3NzaWJsZVZhbGlkU2hvdHNbdmlzaXRlZEluZGV4XTtcbiAgfSBlbHNlIGlmICgraW5kZXgyID4gOTkpIHtcbiAgICB2aXNpdGVkSW5kZXggKz0gMTtcbiAgICBpbmRleDIgPSBwb3NzaWJsZVZhbGlkU2hvdHNbdmlzaXRlZEluZGV4XTtcbiAgfSBlbHNlIGlmIChOdW1iZXIuaXNOYU4oK2luZGV4MikpIHtcbiAgICB2aXNpdGVkSW5kZXggKz0gMTtcbiAgICBpbmRleDIgPSBwb3NzaWJsZVZhbGlkU2hvdHNbdmlzaXRlZEluZGV4XTtcbiAgfSBlbHNlIGlmIChpbmRleDIgPT09IFwiMDEwXCIpIHtcbiAgICB2aXNpdGVkSW5kZXggKz0gMTtcbiAgICBpbmRleDIgPSBwb3NzaWJsZVZhbGlkU2hvdHNbdmlzaXRlZEluZGV4XTtcbiAgfSBlbHNlIGlmIChcbiAgICBwbGF5ZXJCb2FyZDJbK2luZGV4Ml0gJiZcbiAgICBBcnJheS5mcm9tKHBsYXllckJvYXJkMlsraW5kZXgyXS5jbGFzc0xpc3QpLmluY2x1ZGVzKFwic2hvdHNcIilcbiAgKSB7XG4gICAgdmlzaXRlZEluZGV4ICs9IDE7XG4gICAgaW5kZXgyID0gcG9zc2libGVWYWxpZFNob3RzW3Zpc2l0ZWRJbmRleF07XG4gIH1cbiAgaWYgKFxuICAgIGZpcnN0SGl0ICYmXG4gICAgcGxheWVyQm9hcmQyWytpbmRleDJdICYmXG4gICAgQXJyYXkuZnJvbShwbGF5ZXJCb2FyZDJbK2luZGV4Ml0uY2xhc3NMaXN0KS5pbmNsdWRlcyhcInNoaXBcIilcbiAgKSB7XG4gICAgQXJyYXkuZnJvbShwbGF5ZXJCb2FyZDJbZmlyc3RIaXRdLmNsYXNzTGlzdCkuZm9yRWFjaCgoa2xhc3MpID0+IHtcbiAgICAgIGNvbnN0IHNwbGl0VG9BcnJheSA9IGtsYXNzLnNwbGl0KFwiXCIpO1xuICAgICAgY29uc3QgbGFzdExldHRlciA9IHNwbGl0VG9BcnJheVtrbGFzcy5sZW5ndGggLSAxXTtcbiAgICAgIGlmICghTnVtYmVyLmlzTmFOKCtsYXN0TGV0dGVyKSkgY3VycmVudFNoaXBDbGFzcyA9IGtsYXNzO1xuICAgIH0pO1xuICAgIGlmIChcbiAgICAgICFBcnJheS5mcm9tKHBsYXllckJvYXJkMlsraW5kZXgyXS5jbGFzc0xpc3QpLmluY2x1ZGVzKGN1cnJlbnRTaGlwQ2xhc3MpXG4gICAgKSB7XG4gICAgICB2aXNpdGVkSW5kZXggKz0gMTtcbiAgICAgIGluZGV4MiA9IHBvc3NpYmxlVmFsaWRTaG90c1t2aXNpdGVkSW5kZXhdO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBjb21wdXRlclNob3RzIH07XG4iLCJpbXBvcnQgeyBjaG9vc2VQbGF5ZXIgfSBmcm9tIFwiLi9jaG9vc2UtcGxheWVyXCI7XG5pbXBvcnQgeyBjcmVhdGVJbnB1dEVsZW0gfSBmcm9tIFwiLi9uYW1lLWlucHV0XCI7XG5pbXBvcnQgeyBhZGRSaXBwbGVFZmZlY3QgfSBmcm9tIFwiLi9yaXBwbGUtYnV0dG9uXCI7XG5cbmZ1bmN0aW9uIGdldE5hbWUobmFtZURldGFpbHMpIHtcbiAgY29uc3QgeyBpbnB1dERpdiwgc3RhcnRCdG4sIG5hbWVJbnB1dCB9ID0gY3JlYXRlSW5wdXRFbGVtKFxuICAgIG5hbWVEZXRhaWxzLFxuICAgIFwiU1RBUlQgR0FNRVwiXG4gICk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKGlucHV0RGl2KTtcbiAgZ2V0SW5wdXRWYWx1ZShzdGFydEJ0biwgbmFtZUlucHV0KTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZShzdGFydEJ0biwgbmFtZUlucHV0KSB7XG4gIGNvbnN0IGdldE5hbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LWRpdlwiKTtcbiAgY29uc3QgcmVwbGFjZU5hbWVEaXYgPSAoKSA9PiB7XG4gICAgaWYgKG5hbWVJbnB1dC52YWx1ZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgIHByZXZlbnRFbXB0eUlucHV0KG5hbWVJbnB1dCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImZhZGVcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJmYWRlXCIpO1xuICAgICAgY29uc3QgY2hvb3NlRGl2ID0gY2hvb3NlUGxheWVyKG5hbWVJbnB1dC52YWx1ZSk7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlcGxhY2VDaGlsZChjaG9vc2VEaXYsIGdldE5hbWVEaXYpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwbGF5ZXJOYW1lXCIsIEpTT04uc3RyaW5naWZ5KGAke25hbWVJbnB1dC52YWx1ZX1gKSk7XG4gICAgICBhZGRSaXBwbGVFZmZlY3QoKTtcbiAgICB9LCA1MDApO1xuICB9O1xuICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVwbGFjZU5hbWVEaXYpO1xufVxuXG5mdW5jdGlvbiBwcmV2ZW50RW1wdHlJbnB1dChuYW1lSW5wdXQpIHtcbiAgY29uc3QgZXJyb3JNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yLW1zZ1wiKTtcbiAgZXJyb3JNc2cuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGVycm9yTXNnLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgIG5hbWVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIH0sIDIwMDApO1xufVxuXG5leHBvcnQgeyBnZXROYW1lLCBwcmV2ZW50RW1wdHlJbnB1dCB9O1xuIiwiZnVuY3Rpb24gY3JlYXRlRG9tRWxlbWVudCh0eXBlLCBhdHRyaWJ1dGVzKSB7XG4gIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3R5cGV9YCk7XG4gIGlmIChhdHRyaWJ1dGVzID09IG51bGwpIHJldHVybiBuZXdFbGVtZW50O1xuICBzZXRBdHRyaWJ1dGVzKG5ld0VsZW1lbnQsIGF0dHJpYnV0ZXMpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICB9KTtcbn1cblxuZXhwb3J0IHtjcmVhdGVEb21FbGVtZW50fTtcbiIsImltcG9ydCB7IGNyZWF0ZURvbUVsZW1lbnQgfSBmcm9tIFwiLi9oZWxwZXItZnVuY3Rpb25cIjtcblxuZnVuY3Rpb24gY3JlYXRlSW5wdXRFbGVtKG5hbWVEZXRhaWxzLCBidG5OYW1lKSB7XG4gIGNvbnN0IGlucHV0RGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImlucHV0LWRpdlwiIH0pO1xuICBjb25zdCBsYWJlbCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJsYWJlbFwiLCB7IGZvcjogXCJuYW1lXCIgfSk7XG4gIGNvbnN0IG5hbWVJbnB1dCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gICAgaWQ6IFwibmFtZVwiLFxuICAgIHR5cGU6IFwidGV4dFwiLFxuICAgIHBsYWNlaG9sZGVyOiBcIkxldGFtXCIsXG4gIH0pO1xuICBjb25zdCBlcnJvck1zZyA9IGNyZWF0ZURvbUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3M6IFwiZXJyb3ItbXNnIGhpZGVcIiB9KTtcbiAgY29uc3Qgc3RhcnRCdG4gPSBjcmVhdGVEb21FbGVtZW50KFwiYnV0dG9uXCIsIHsgY2xhc3M6IFwic3RhcnQtYnRuXCIgfSk7XG5cbiAgZXJyb3JNc2cudGV4dENvbnRlbnQgPSBcIkVudGVyIEEgVmFsaWQgTmFtZVwiO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IG5hbWVEZXRhaWxzO1xuICBzdGFydEJ0bi50ZXh0Q29udGVudCA9IGJ0bk5hbWU7XG4gIGlucHV0RGl2LmFwcGVuZChsYWJlbCwgbmFtZUlucHV0LCBlcnJvck1zZywgc3RhcnRCdG4pO1xuICByZXR1cm4geyBpbnB1dERpdiwgc3RhcnRCdG4sIG5hbWVJbnB1dCB9O1xufVxuXG5leHBvcnQgeyBjcmVhdGVJbnB1dEVsZW0gfTtcbiIsImltcG9ydCB7Y3JlYXRlRG9tRWxlbWVudH0gZnJvbSBcIi4vaGVscGVyLWZ1bmN0aW9uXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gY3JlYXRlRG9tRWxlbWVudChcImZvb3RlclwiKTtcbiAgY29uc3QgYW5jaG9yTGluayA9IGNyZWF0ZURvbUVsZW1lbnQoXCJhXCIsIHtcbiAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9JQW1Zb3VuZ2Jvc3N5L2JhdHRsZXNoaXBcIixcbiAgfSk7XG4gIGNvbnN0IGdpdEh1Ykljb24gPSBjcmVhdGVEb21FbGVtZW50KFwiaVwiLCB7IGNsYXNzOiBcImZhIGZhLWdpdGh1YlwiIH0pO1xuICBhbmNob3JMaW5rLmFwcGVuZENoaWxkKGdpdEh1Ykljb24pO1xuICBmb290ZXIuYXBwZW5kKFwiQ29weXJpZ2h0IFxcdTAwQTkgMjAyMiBJQW1Zb3VuZ2Jvc3N5XCIsIFwiICBcIiwgYW5jaG9yTGluayk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuZXhwb3J0ICB7Y3JlYXRlRm9vdGVyfTtcbiIsImltcG9ydCB7IGNyZWF0ZUZvb3RlciB9IGZyb20gXCIuL3BhZ2UtZm9vdGVyXCI7XG5pbXBvcnQgeyBnZXROYW1lIH0gZnJvbSBcIi4vZ2V0LXBsYXllci1uYW1lXCI7XG5pbXBvcnQgeyBjcmVhdGVIZWFkZXIgfSBmcm9tIFwiLi9wYWdlLWhlYWRlclwiO1xuaW1wb3J0IHsgY3JlYXRlRG9tRWxlbWVudCB9IGZyb20gXCIuL2hlbHBlci1mdW5jdGlvblwiO1xuaW1wb3J0IHsgcmVzZXRQbGF5ZXJWc0NvbXB1dGVyIH0gZnJvbSBcIi4vcGxheWVyLXZzLWNvbXB1dGVyXCI7XG5pbXBvcnQgeyByZXNldEh1bWFuUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyByZXNldFNoaXBIb3ZlciB9IGZyb20gXCIuL3NoaXAtaG92ZXJcIjtcbmltcG9ydCB7IGFkZFJpcHBsZUVmZmVjdCB9IGZyb20gXCIuL3JpcHBsZS1idXR0b25cIjtcblxuZnVuY3Rpb24gcmVuZGVyR2V0TmFtZVBhZ2UoKSB7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgY3JlYXRlSGVhZGVyKFwicGFnZS1vbmUtaGVhZGVyXCIpO1xuICBnZXROYW1lKFwiRW50ZXIgUGxheWVyJ3MgTmFtZTpcIik7XG4gIGNyZWF0ZUZvb3RlcigpO1xufVxuXG5mdW5jdGlvbiBhbm5vdW5jZVdpbm5lcihwbGF5ZXJOYW1lKSB7XG4gIGNvbnN0IGdhbWVPdmVyRGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImdhbWUtb3Zlci1kaXZcIiB9KTtcbiAgY29uc3QgZ2FtZU92ZXIgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcImdhbWUtb3ZlciBibGlua2luZ1wiIH0pO1xuICBjb25zdCB3aW5uZXIgPSBjcmVhdGVEb21FbGVtZW50KFwicFwiLCB7IGNsYXNzOiBcIndpbm5lclwiIH0pO1xuICBjb25zdCBuYW1lID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJuYW1lXCIgfSk7XG4gIGNvbnN0IHJlc3RhcnRCdG4gPSBjcmVhdGVEb21FbGVtZW50KFwiYnV0dG9uXCIsIHsgY2xhc3M6IFwiYnRuLXJlc3RhcnRcIiB9KTtcbiAgcmVzdGFydEJ0bi50ZXh0Q29udGVudCA9IFwiUkVTVEFSVFwiO1xuICBnYW1lT3Zlci50ZXh0Q29udGVudCA9IFwiR0FNRSBPVkVSXCI7XG4gIG5hbWUudGV4dENvbnRlbnQgPSBwbGF5ZXJOYW1lO1xuICB3aW5uZXIudGV4dENvbnRlbnQgPSBcIlRoZSBXaW5uZXIgSXNcIjtcbiAgZ2FtZU92ZXJEaXYuYXBwZW5kKGdhbWVPdmVyLCB3aW5uZXIsIG5hbWUsIHJlc3RhcnRCdG4pO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJmYWRlXCIpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJmYWRlXCIpO1xuICAgIHJlbmRlckdldE5hbWVQYWdlKCk7XG4gICAgY29uc3QgZ2V0TmFtZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtZGl2XCIpO1xuICAgIGRvY3VtZW50LmJvZHkucmVwbGFjZUNoaWxkKGdhbWVPdmVyRGl2LCBnZXROYW1lRGl2KTtcbiAgICByZXN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiByZXJlbmRlckdldE5hbWVQYWdlKCkpO1xuICAgIGFkZFJpcHBsZUVmZmVjdCgpO1xuICB9LCA0MDApO1xufVxuXG5mdW5jdGlvbiByZXN0YXJ0KCkge1xuICBjb25zdCByZXN0YXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgYWxpZ25EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsaWduLXNoaXBzXCIpO1xuICBjb25zdCBhbGlnbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGludWUtYnRuXCIpO1xuICBjb25zdCBheGlzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5heGlzLWJ0blwiKTtcbiAgaWYgKGFsaWduQnRuKSBhbGlnbkRpdi5yZXBsYWNlQ2hpbGQocmVzdGFydCwgYWxpZ25CdG4pO1xuICByZXN0YXJ0LnRleHRDb250ZW50ID0gXCJSZXN0YXJ0XCI7XG4gIGlmIChheGlzQnRuKSBheGlzQnRuLnJlbW92ZSgpO1xuICByZXN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXJlbmRlckdldE5hbWVQYWdlKTtcbn1cblxuZnVuY3Rpb24gcmVyZW5kZXJHZXROYW1lUGFnZSgpIHtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiZmFkZVwiKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiZmFkZVwiKTtcbiAgICB3aGlsZSAoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKVxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgcmVuZGVyR2V0TmFtZVBhZ2UoKTtcbiAgcmVzZXRTaGlwSG92ZXIoKTtcbiAgcmVzZXRQbGF5ZXJWc0NvbXB1dGVyKCk7XG4gIHJlc2V0SHVtYW5QbGF5ZXIoKTtcbiAgYWRkUmlwcGxlRWZmZWN0KCk7XG4gIH0sIDQwMCk7XG59XG5cbmV4cG9ydCB7IHJlbmRlckdldE5hbWVQYWdlLCByZXN0YXJ0LCBhbm5vdW5jZVdpbm5lciB9O1xuIiwiaW1wb3J0IHtjcmVhdGVEb21FbGVtZW50fSBmcm9tIFwiLi9oZWxwZXItZnVuY3Rpb25cIjtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKGNsYXNzTmFtZSkge1xuICBjb25zdCBnYW1lVGl0bGUgPSBjcmVhdGVEb21FbGVtZW50KFwiaDFcIiwgeyBjbGFzczogY2xhc3NOYW1lIH0pO1xuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVEb21FbGVtZW50KFwiaGVhZGVyXCIpO1xuICBjb25zdCB7IGJvZHkgfSA9IGRvY3VtZW50O1xuICBnYW1lVGl0bGUudGV4dENvbnRlbnQgPSBcIkJBVFRMRVNISVBcIjtcbiAgaGVhZGVyLmFwcGVuZChnYW1lVGl0bGUpO1xuICBib2R5LmFwcGVuZChoZWFkZXIpO1xufVxuXG5leHBvcnQge2NyZWF0ZUhlYWRlcn07XG4iLCJpbXBvcnQge0dhbWVib2FyZH0gZnJvbSBcIi4uL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgcGxhY2VDb21wdXRlclNoaXBzIH0gZnJvbSBcIi4uL3BsYWNlU2hpcHNPbkJvYXJkXCI7XG5cbmZ1bmN0aW9uIHNob3dTaGlwc1JhbmRvbWx5KCkge1xuICBjb25zdCB7XG4gICAgcG9zaXRpb25TaGlwLCByZWNlaXZlQXR0YWNrLCBhbGxTaGlwc1N1bmssIEFycixcbiAgfSA9IEdhbWVib2FyZChwbGFjZUNvbXB1dGVyU2hpcHMpO1xuICBwb3NpdGlvblNoaXAoKTtcbiAgcmV0dXJuIHsgcmVjZWl2ZUF0dGFjaywgYWxsU2hpcHNTdW5rLCBBcnIgfTtcbn1cblxuZXhwb3J0IHtzaG93U2hpcHNSYW5kb21seX07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4uL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgcGxhY2VQbGF5ZXJTaGlwcyB9IGZyb20gXCIuLi9wbGFjZVNoaXBzT25Cb2FyZFwiO1xuaW1wb3J0IHsgcmVzdGFydCB9IGZyb20gXCIuL3BhZ2UtZ2V0LW5hbWVcIjtcbmltcG9ydCB7IGFkZFJpcHBsZUVmZmVjdCB9IGZyb20gXCIuL3JpcHBsZS1idXR0b25cIjtcblxuLyoqIEdldHMgc2hpcHMgY29vcmRpbmF0ZXMgZnJvbSBHYW1lYm9hcmQgYW5kIGRpc3BsYXkgaW4gRE9NICovXG5mdW5jdGlvbiBzaG93U2hpcHNPbkJvYXJkKGNsYXNzTmFtZSkge1xuICBjb25zdCBhbGlnbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXhpcy1idG5cIik7XG4gIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjbGFzc05hbWV9YCk7XG4gIGNvbnN0IGluc3RydWN0aW9uMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5zdHJ1Y3Rpb24yXCIpO1xuICBjb25zdCB7IGJvYXJkLCBwb3NpdGlvblNoaXAsIGFsaWduU2hpcCwgcmVjZWl2ZUF0dGFjaywgYWxsU2hpcHNTdW5rLCBBcnIgfSA9XG4gICAgR2FtZWJvYXJkKHBsYWNlUGxheWVyU2hpcHMpO1xuXG4gIGlmICh0aGlzLmNsYXNzTGlzdCAmJiB0aGlzLmNsYXNzTGlzdFswXSA9PT0gXCJwbGF5ZXIxLWdyaWRcIikge1xuICAgIGNvbnN0IHBsYXllck5hbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGxheWVyTmFtZVwiKSk7XG4gICAgaW5zdHJ1Y3Rpb24yLnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZX0sIFBsYWNlIFlvdXIgU2hpcHMuYDtcbiAgfVxuXG4gIGNvbnN0IGFkZExpc3RlbmVyID0gKHNxdWFyZSwgaW5kZXgpID0+IHtcbiAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIiwgYWRkQmdDb2xvci5iaW5kKFxuICAgICAgICB0aGlzLCBpbmRleCwgcG9zaXRpb25TaGlwLCBib2FyZCwgc3F1YXJlcywgQXJyLCBpbnN0cnVjdGlvbjJcbiAgICAgIClcbiAgICApO1xuICB9O1xuICBhbGlnbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWxpZ25TaGlwKTtcbiAgc3F1YXJlcy5mb3JFYWNoKGFkZExpc3RlbmVyLmJpbmQodGhpcykpO1xuICByZXR1cm4gW3JlY2VpdmVBdHRhY2ssIEFyciwgYWxsU2hpcHNTdW5rXTtcbn1cblxuLyoqIEFkZHMgYmFja2dyb3VuZCBjb2xvdXIgZm9yIG1pc3NlZCBzaG90cyAqL1xuZnVuY3Rpb24gYWRkQmdDb2xvcihpbmRleCwgcG9zaXRpb25TaGlwLCBib2FyZCwgc3F1YXJlcywgQXJyLCBpbnN0cnVjdGlvbjIpIHtcbiAgY29uc3QgcGxheWVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyMS1ib2FyZFwiKTtcbiAgY29uc3QgcGxheWVyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyMi1ib2FyZFwiKTtcbiAgcG9zaXRpb25TaGlwKGluZGV4KTtcbiAgYm9hcmQuZmxhdCgpLmZvckVhY2goKGl0ZW0sIGluZGV4MikgPT4ge1xuICAgIGlmIChpdGVtID09PSAyIHx8IGl0ZW0gPT09IDMgfHwgaXRlbSA9PT0gNCB8fCBpdGVtID09PSA1IHx8IGl0ZW0gPT09IDYpXG4gICAgICBzcXVhcmVzW2luZGV4Ml0uY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgaWYgKGl0ZW0gPT09IDIpIHNxdWFyZXNbaW5kZXgyXS5jbGFzc0xpc3QuYWRkKFwic2hpcDJcIik7XG4gICAgaWYgKGl0ZW0gPT09IDMpIHNxdWFyZXNbaW5kZXgyXS5jbGFzc0xpc3QuYWRkKFwic2hpcDNcIik7XG4gICAgaWYgKGl0ZW0gPT09IDYpIHNxdWFyZXNbaW5kZXgyXS5jbGFzc0xpc3QuYWRkKFwic2hpcDZcIik7XG4gICAgaWYgKGl0ZW0gPT09IDQpIHNxdWFyZXNbaW5kZXgyXS5jbGFzc0xpc3QuYWRkKFwic2hpcDRcIik7XG4gICAgaWYgKGl0ZW0gPT09IDUpIHNxdWFyZXNbaW5kZXgyXS5jbGFzc0xpc3QuYWRkKFwic2hpcDVcIik7XG4gIH0pO1xuXG4gIGlmIChwbGF5ZXIxLmNsYXNzTGlzdFsxXSA9PT0gXCJoaWRlXCIgfHwgcGxheWVyMi5jbGFzc0xpc3RbMV0gPT09IFwiaGlkZVwiKSB7XG4gICAgaWYgKEFyci5sZW5ndGggPT09IDUgJiYgdGhpcyA9PT0gZG9jdW1lbnQpIHNob3dFbmVteVdhdGVyKCk7XG4gICAgZWxzZSBpZiAoQXJyLmxlbmd0aCA9PT0gNSkge1xuICAgICAgaWYgKHRoaXMuY2xhc3NMaXN0WzBdID09PSBcInBsYXllcjItZ3JpZFwiKVxuICAgICAgICBpbnN0cnVjdGlvbjIudGV4dENvbnRlbnQgPSBcIkNsaWNrIE9uIE5leHQgVG8gU3RhcnQgUGxheWluZ1wiO1xuICAgICAgaWYgKHRoaXMuY2xhc3NMaXN0WzBdID09PSBcInBsYXllcjEtZ3JpZFwiKVxuICAgICAgICBpbnN0cnVjdGlvbjIudGV4dENvbnRlbnQgPSBcIkNsaWNrIE9uIE5leHQgVG8gQ29udGludWUuXCI7XG4gICAgICBzaG93RW5lbXkuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH1cbiAgaWYgKEFycmF5LmZyb20ocGxheWVyMS5jbGFzc0xpc3QpLmluY2x1ZGVzKFwiaGlkZVwiKSkgcmV0dXJuO1xuICBpZiAoQXJyYXkuZnJvbShwbGF5ZXIyLmNsYXNzTGlzdCkuaW5jbHVkZXMoXCJoaWRlXCIpKSByZXR1cm47XG4gIGlmIChBcnIubGVuZ3RoID09PSA1ICYmIHRoaXMgIT09IGRvY3VtZW50KSB7XG4gICAgYm9hcmQuZmxhdCgpLmZvckVhY2goKGl0ZW0sIGluZGV4MikgPT4ge1xuICAgICAgaWYgKGl0ZW0gPT09IDIgfHwgaXRlbSA9PT0gMyB8fCBpdGVtID09PSA0IHx8IGl0ZW0gPT09IDUgfHwgaXRlbSA9PT0gNilcbiAgICAgICAgc3F1YXJlc1tpbmRleDJdLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwXCIpO1xuICAgIH0pO1xuICB9XG59XG5cbi8qKiBGdW5jdGlvbiBnZXRzIGNhbGxlZCB3aGVuIHlvdSBjaG9vc2UgdG8gcGxheSBodW1hbiAqL1xuZnVuY3Rpb24gc2hvd0VuZW15KCkge1xuICBjb25zdCBwbGF5ZXJOYW1lID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBsYXllcjJOYW1lXCIpKTtcbiAgY29uc3QgaW5zdHJ1Y3Rpb24yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnN0cnVjdGlvbjJcIik7XG4gIGNvbnN0IHBsYXllcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcjItYm9hcmRcIik7XG4gIGNvbnN0IGNvbnRhaW5lckRpdjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lci1kaXYyXCIpO1xuICBjb25zdCBwbGF5ZXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXIxLWJvYXJkXCIpO1xuICBjb25zdCBjb250YWluZXJEaXYxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItZGl2MVwiKTtcbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyMS1ncmlkXCIpO1xuICBjb25zdCB7IHN0YXJ0QnRuLCBjb250aW51ZUJ0biB9ID0gY3JlYXRlUGxheUJ0bigpO1xuICBjb250aW51ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgc3RhcnRCdG4uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG5cbiAgY29uc3Qgc2hvd1NoaXBzID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImZhZGVcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJmYWRlXCIpO1xuICAgICAgaW5zdHJ1Y3Rpb24yLnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZX0sIFBsYWNlIFlvdXIgU2hpcHMuYDtcbiAgICAgIHBsYXllcjIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICBjb250YWluZXJEaXYyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgcGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgIGNvbnRhaW5lckRpdjEuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICBjb250aW51ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgIHN0YXJ0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgZ3JpZC5mb3JFYWNoKChzcXIpID0+IHtcbiAgICAgICAgaWYgKEFycmF5LmZyb20oc3FyLmNsYXNzTGlzdCkuaW5jbHVkZXMoXCJzaGlwXCIpKVxuICAgICAgICAgIHNxci5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFwiKTtcbiAgICAgIH0pO1xuICAgICAgYWRkUmlwcGxlRWZmZWN0KCk7XG4gICAgfSwgNDAwKTtcbiAgfTtcblxuICBjb25zdCBzaG93U2hpcHMyID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllcjItZ3JpZFwiKTtcbiAgICBncmlkLmZvckVhY2goKHNxcikgPT4ge1xuICAgICAgaWYgKEFycmF5LmZyb20oc3FyLmNsYXNzTGlzdCkuaW5jbHVkZXMoXCJzaGlwXCIpKVxuICAgICAgICBzcXIuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBcIik7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiZmFkZVwiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImZhZGVcIik7XG4gICAgICBpbnN0cnVjdGlvbjIudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJOYW1lfSwgdGFrZSBhIHNob3QuYDtcbiAgICAgIHBsYXllcjEuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICBjb250YWluZXJEaXYxLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgY29udGFpbmVyRGl2Mi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgIHJlc3RhcnQoKTtcbiAgICAgIGFkZFJpcHBsZUVmZmVjdCgpO1xuICAgIH0sIDQwMCk7XG4gIH07XG5cbiAgaWYgKHRoaXMuY2xhc3NMaXN0WzBdID09PSBcInBsYXllcjEtZ3JpZFwiKVxuICAgIGNvbnRpbnVlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93U2hpcHMpO1xuICBpZiAodGhpcy5jbGFzc0xpc3RbMF0gPT09IFwicGxheWVyMi1ncmlkXCIpXG4gICAgY29udGludWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dTaGlwczIpO1xufVxuXG4vKiogRnVuY3Rpb24gZ2V0cyBjYWxsZWQgd2hlbiB5b3UgY2hvb3NlIHRvIHBsYXkgYWdhaW5zdCBDb21wdXRlciAqL1xuZnVuY3Rpb24gc2hvd0VuZW15V2F0ZXIoKSB7XG4gIGNvbnN0IHBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyMi1ib2FyZFwiKTtcbiAgY29uc3QgY29udGFpbmVyRGl2MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyLWRpdjJcIik7XG4gIGNvbnN0IHsgc3RhcnRCdG4sIGluc3RydWN0aW9uIH0gPSBjcmVhdGVQbGF5QnRuKCk7XG4gIGFkZFJpcHBsZUVmZmVjdCgpO1xuICBpbnN0cnVjdGlvbi50ZXh0Q29udGVudCA9IFwiQ2xpY2sgUGxheSBUbyBTdGFydCBHYW1lLlwiO1xuICBzdGFydEJ0bi50ZXh0Q29udGVudCA9IFwiUGxheVwiO1xuICBjb25zdCBzaG93U2hpcHMgPSAoKSA9PiB7XG4gICAgc3RhcnRCdG4udGV4dENvbnRlbnQgPSBcIlBsYXlcIjtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJmYWRlXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiZmFkZVwiKTtcbiAgICAgIGNvbnN0IHBsYXllck5hbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGxheWVyTmFtZVwiKSk7XG4gICAgICBwbGF5ZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICBjb250YWluZXJEaXYyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgaW5zdHJ1Y3Rpb24udGV4dENvbnRlbnQgPSBgV2FpdGluZyBmb3IgJHtwbGF5ZXJOYW1lfSdzIHNob3RgO1xuICAgICAgcmVzdGFydCgpO1xuICAgICAgYWRkUmlwcGxlRWZmZWN0KCk7XG4gICAgfSwgNDAwKTtcbiAgfTtcbiAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dTaGlwcyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBsYXlCdG4oKSB7XG4gIGNvbnN0IHNoaXBBeGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGlnbi1zaGlwc1wiKTtcbiAgY29uc3QgY29udGludWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRpbnVlLWJ0blwiKTtcbiAgY29uc3QgaW5zdHJ1Y3Rpb24gPSBzaGlwQXhpcy5jaGlsZHJlblswXTtcbiAgY29uc3Qgc3RhcnRCdG4gPSBzaGlwQXhpcy5jaGlsZHJlblsxXTtcbiAgYWRkUmlwcGxlRWZmZWN0KCk7XG4gIHJldHVybiB7IHN0YXJ0QnRuLCBpbnN0cnVjdGlvbiwgY29udGludWVCdG4gfTtcbn1cblxuZXhwb3J0IHsgc2hvd1NoaXBzT25Cb2FyZCB9O1xuIiwiaW1wb3J0IHsgY29tcHV0ZXJTaG90cyB9IGZyb20gXCIuL2ZpbmQtZW1wdHktc3BvdFwiO1xuaW1wb3J0IHsgc2hvd1NoaXBzT25Cb2FyZCB9IGZyb20gXCIuL3BsYWNlLXNoaXBcIjtcbmltcG9ydCB7IHNob3dTaGlwc1JhbmRvbWx5IH0gZnJvbSBcIi4vcGxhY2Utc2hpcC1yYW5kb21cIjtcbmltcG9ydCB7IHZhbGlkU2hvdHMgfSBmcm9tIFwiLi92YWxpZC1oaXRcIjtcblxubGV0IGhpdDtcbmxldCB0aW1lID0gMDtcbmxldCBzdG9wSGVyZSA9IDA7XG5sZXQgaXNTdW5rU2hpcEFycjtcblxuLyoqIENoZWNrcyBmb3IgdmFsaWQgc2hvdHMgb24gc2hpcHMgKi9cbmZ1bmN0aW9uIHNob3RzKHNob3dTaGlwcywgY2xhc3NOYW1lKSB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y2xhc3NOYW1lfWApO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInBsYXllcjJOYW1lXCIsIEpTT04uc3RyaW5naWZ5KFwiQ29tcHV0ZXJcIikpO1xuICBjb25zdCB7IHJlY2VpdmVBdHRhY2ssIGFsbFNoaXBzU3VuayB9ID0gc2hvd1NoaXBzKCk7XG4gIGNvbnN0IFtyZWNlaXZlQXR0YWNrMiwgLCBhbGxTaGlwc1N1bmsyXSA9IHNob3dTaGlwc09uQm9hcmQuY2FsbChcbiAgICBkb2N1bWVudCxcbiAgICBcInBsYXllcjEtZ3JpZFwiXG4gICk7XG4gIGNvbnN0IGFkZExpc3RlbmVyVG9HcmlkID0gKGdyaWQsIGluZGV4KSA9PiBncmlkLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICBhbHRlcm5hdGVTaG90cy5iaW5kKFxuICAgICAgICBudWxsLFxuICAgICAgICBncmlkLFxuICAgICAgICBpbmRleCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgcmVjZWl2ZUF0dGFjazIsXG4gICAgICAgIHBsYXllckJvYXJkLFxuICAgICAgICBhbGxTaGlwc1N1bmssXG4gICAgICAgIGFsbFNoaXBzU3VuazJcbiAgICAgIClcbiAgICApO1xuICBwbGF5ZXJCb2FyZC5mb3JFYWNoKGFkZExpc3RlbmVyVG9HcmlkKTtcbn1cblxuLyoqIEFsdGVybmF0ZSBzaG90cyBiZXR3ZWVuIGNvbXB1dGVyIGFuZCBwbGF5ZXIgKi9cbmZ1bmN0aW9uIGFsdGVybmF0ZVNob3RzKFxuICBncmlkLFxuICBpbmRleCxcbiAgcmVjZWl2ZUF0dGFjayxcbiAgcmVjZWl2ZUF0dGFjazIsXG4gIHBsYXllckJvYXJkLFxuICBhbGxTaGlwc1N1bmssXG4gIGFsbFNoaXBzU3VuazJcbikge1xuICBpZiAodGltZSA9PT0gMSkgcmV0dXJuO1xuICBpZiAoc3RvcEhlcmUgPT09IDEpIHJldHVybjtcbiAgaWYgKEFycmF5LmZyb20oZ3JpZC5jbGFzc0xpc3QpLmluY2x1ZGVzKFwic2hvdHNcIikpIHJldHVybjtcbiAgY29uc3QgcGxheWVyTmFtZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwbGF5ZXJOYW1lXCIpKTtcbiAgY29uc3QgaW5zdHJ1Y3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsaWduLXNoaXBzXCIpLmNoaWxkcmVuWzBdO1xuICBpbnN0cnVjdGlvbi50ZXh0Q29udGVudCA9IFwiV2FpdGluZyBmb3IgQ29tcHV0ZXIncyBTaG90LlwiO1xuICB2YWxpZFNob3RzKFxuICAgIGdyaWQsXG4gICAgaW5kZXgsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBwbGF5ZXJCb2FyZCxcbiAgICBhbGxTaGlwc1N1bmssXG4gICAgaW5zdHJ1Y3Rpb24sXG4gICAgcGxheWVyTmFtZVxuICApO1xuICB0aW1lID0gMTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0aW1lID0gMDtcbiAgICBjb25zdCBBSU5hbWUgPSBcIkNvbXB1dGVyXCI7XG4gICAgaWYgKHN0b3BIZXJlID09PSAxKSByZXR1cm47XG4gICAgY29uc3QgeyBncmlkMiwgaW5kZXgyLCBwbGF5ZXJCb2FyZDIgfSA9IGNvbXB1dGVyU2hvdHMoKTtcbiAgICBpbnN0cnVjdGlvbi50ZXh0Q29udGVudCA9IGBXYWl0aW5nIGZvciAke3BsYXllck5hbWV9J3MgU2hvdC5gO1xuICAgIGNvbnN0IHsgaGl0Q29vcmQsIGlzU3Vua1NoaXBBcnJheSB9ID0gdmFsaWRTaG90cyhcbiAgICAgIGdyaWQyLFxuICAgICAgaW5kZXgyLFxuICAgICAgcmVjZWl2ZUF0dGFjazIsXG4gICAgICBwbGF5ZXJCb2FyZDIsXG4gICAgICBhbGxTaGlwc1N1bmsyLFxuICAgICAgaW5zdHJ1Y3Rpb24sXG4gICAgICBBSU5hbWVcbiAgICApO1xuICAgIGhpdCA9IGhpdENvb3JkO1xuICAgIGlzU3Vua1NoaXBBcnIgPSBbLi4uaXNTdW5rU2hpcEFycmF5XTtcbiAgfSwgMTUwMCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0UGxheWVyVnNDb21wdXRlcigpIHtcbiAgdGltZSA9IDA7XG4gIHN0b3BIZXJlID0gMDtcbn1cblxuZnVuY3Rpb24gc2V0U3RvcEhlcmUoKSB7XG4gIHN0b3BIZXJlID0gMTtcbn1cblxuY29uc3QgcGxheWVyU2hvdHMgPSBzaG90cy5iaW5kKG51bGwsIHNob3dTaGlwc1JhbmRvbWx5LCBcInBsYXllcjItZ3JpZFwiKTtcbmV4cG9ydCB7XG4gIHBsYXllclNob3RzLFxuICBzdG9wSGVyZSxcbiAgcmVzZXRQbGF5ZXJWc0NvbXB1dGVyLFxuICBpc1N1bmtTaGlwQXJyLFxuICBoaXQsXG4gIHNldFN0b3BIZXJlXG59O1xuIiwiaW1wb3J0IHsgc2hvd1NoaXBzT25Cb2FyZCB9IGZyb20gXCIuL3BsYWNlLXNoaXBcIjtcbmltcG9ydCB7IHN0b3BIZXJlIH0gZnJvbSBcIi4vcGxheWVyLXZzLWNvbXB1dGVyXCI7XG5pbXBvcnQgeyB2YWxpZFNob3RzIH0gZnJvbSBcIi4vdmFsaWQtaGl0XCI7XG5cbmxldCBjb3VudCA9IDA7XG5sZXQgY291bnQyID0gMDtcbmxldCB0aW1lID0gMTtcblxuLyoqIENoZWNrcyBmb3IgdmFsaWQgc2hvdHMgb24gc2hpcHMgKi9cbmZ1bmN0aW9uIHBsYXllcihjbGFzc05hbWUpIHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjbGFzc05hbWV9YCk7XG4gIGNvbnN0IFtyZWNlaXZlQXR0YWNrLCBBcnIsIGFsbFNoaXBzU3Vua10gPSBzaG93U2hpcHNPbkJvYXJkLmNhbGwoXG4gICAgcGxheWVyQm9hcmRbMF0sXG4gICAgY2xhc3NOYW1lXG4gICk7XG4gIGNvbnN0IGFkZExpc3RlbmVyVG9HcmlkID0gKGdyaWQsIGluZGV4KSA9PiBncmlkLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICBzaG90cy5iaW5kKFxuICAgICAgICBudWxsLFxuICAgICAgICBBcnIsXG4gICAgICAgIGdyaWQsXG4gICAgICAgIGluZGV4LFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBwbGF5ZXJCb2FyZCxcbiAgICAgICAgYWxsU2hpcHNTdW5rXG4gICAgICApXG4gICAgKTtcbiAgcGxheWVyQm9hcmQuZm9yRWFjaChhZGRMaXN0ZW5lclRvR3JpZCk7XG59XG5cbi8qKiBTaG90cyBieSBwbGF5ZXIgKi9cbmZ1bmN0aW9uIHNob3RzKEFyciwgZ3JpZCwgaW5kZXgsIHJlY2VpdmVBdHRhY2ssIHBsYXllckJvYXJkLCBhbGxTaGlwc1N1bmspIHtcbiAgY29uc3QgcGxheWVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyMS1ib2FyZFwiKTtcbiAgY29uc3QgcGxheWVyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyMi1ib2FyZFwiKTtcbiAgY29uc3QgcGxheWVyTmFtZTEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGxheWVyTmFtZVwiKSk7XG4gIGNvbnN0IHBsYXllck5hbWUyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBsYXllcjJOYW1lXCIpKTtcbiAgY29uc3QgaW5zdHJ1Y3Rpb24yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnN0cnVjdGlvbjJcIik7XG5cbiAgaWYgKEFycmF5LmZyb20oZ3JpZC5jbGFzc0xpc3QpLmluY2x1ZGVzKFwic2hvdHNcIikpIHJldHVybjtcbiAgaWYgKGdyaWQuY2xhc3NMaXN0WzBdID09PSBcInBsYXllcjEtZ3JpZFwiICYmIEFyci5sZW5ndGggPj0gNSkge1xuICAgIGlmIChjb3VudCA+PSAxICYmIHRpbWUgPT09IDApIHtcbiAgICAgIGlmIChBcnJheS5mcm9tKHBsYXllcjEuY2xhc3NMaXN0KS5pbmNsdWRlcyhcImhpZGVcIikpIHJldHVybjtcbiAgICAgIGlmIChBcnJheS5mcm9tKHBsYXllcjIuY2xhc3NMaXN0KS5pbmNsdWRlcyhcImhpZGVcIikpIHJldHVybjtcbiAgICAgIGlmIChzdG9wSGVyZSA9PT0gMSkgcmV0dXJuO1xuICAgICAgaW5zdHJ1Y3Rpb24yLnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZTF9LCB0YWtlIHlvdXIgc2hvdC5gO1xuICAgICAgdmFsaWRTaG90cyhcbiAgICAgICAgZ3JpZCxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIHBsYXllckJvYXJkLFxuICAgICAgICBhbGxTaGlwc1N1bmssXG4gICAgICAgIGluc3RydWN0aW9uMixcbiAgICAgICAgcGxheWVyTmFtZTJcbiAgICAgICk7XG4gICAgfVxuICAgIHRpbWUgPSAxO1xuICAgIGNvdW50ICs9IDE7XG4gIH1cbiAgaWYgKGdyaWQuY2xhc3NMaXN0WzBdID09PSBcInBsYXllcjItZ3JpZFwiICYmIEFyci5sZW5ndGggPj0gNSkge1xuICAgIGlmIChjb3VudDIgPj0gMSAmJiB0aW1lID09PSAxKSB7XG4gICAgICBpZiAoQXJyYXkuZnJvbShwbGF5ZXIxLmNsYXNzTGlzdCkuaW5jbHVkZXMoXCJoaWRlXCIpKSByZXR1cm47XG4gICAgICBpZiAoQXJyYXkuZnJvbShwbGF5ZXIyLmNsYXNzTGlzdCkuaW5jbHVkZXMoXCJoaWRlXCIpKSByZXR1cm47XG4gICAgICBpbnN0cnVjdGlvbjIudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJOYW1lMn0sIHRha2UgeW91ciBzaG90LmA7XG4gICAgICB2YWxpZFNob3RzKFxuICAgICAgICBncmlkLFxuICAgICAgICBpbmRleCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgcGxheWVyQm9hcmQsXG4gICAgICAgIGFsbFNoaXBzU3VuayxcbiAgICAgICAgaW5zdHJ1Y3Rpb24yLFxuICAgICAgICBwbGF5ZXJOYW1lMVxuICAgICAgKTtcbiAgICB9XG4gICAgdGltZSA9IDA7XG4gICAgY291bnQyICs9IDE7XG4gIH1cbn1cblxuZnVuY3Rpb24gaHVtYW5QbGF5ZXJzKCkge1xuICBwbGF5ZXIoXCJwbGF5ZXIxLWdyaWRcIik7XG4gIHBsYXllcihcInBsYXllcjItZ3JpZFwiKTtcbn1cblxuZnVuY3Rpb24gcmVzZXRIdW1hblBsYXllcigpIHtcbiAgY291bnQgPSAwO1xuICBjb3VudDIgPSAwO1xuICB0aW1lID0gMTtcbn1cblxuZXhwb3J0IHsgaHVtYW5QbGF5ZXJzLCByZXNldEh1bWFuUGxheWVyIH07XG4iLCJmdW5jdGlvbiBjcmVhdGVSaXBwbGUoZXZlbnQpIHtcbiAgY29uc3QgYnV0dG9uID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IGRpYW1ldGVyID0gTWF0aC5tYXgoYnV0dG9uLmNsaWVudFdpZHRoLCBidXR0b24uY2xpZW50SGVpZ2h0KTtcblxuICBjaXJjbGUuc3R5bGUud2lkdGggPSBjaXJjbGUuaGVpZ2h0ID0gYCR7ZGlhbWV0ZXJ9cHhgO1xuICBjaXJjbGUuc3R5bGUubGVmdCA9IGAke2V2ZW50LmNsaWVudFggLSBidXR0b24ub2Zmc2V0TGVmdH1weGA7XG4gIGNpcmNsZS5zdHlsZS50b3AgPSBgJHtldmVudC5jbGllbnRZIC0gYnV0dG9uLm9mZnNldFRvcH1weGA7XG4gIGNpcmNsZS5jbGFzc0xpc3QuYWRkKFwicmlwcGxlXCIpO1xuXG4gIGNvbnN0IHJpcHBsZSA9IGJ1dHRvbi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicmlwcGxlXCIpWzBdO1xuICBpZiAocmlwcGxlKSByaXBwbGUucmVtb3ZlKCk7XG4gIGJ1dHRvbi5hcHBlbmRDaGlsZChjaXJjbGUpO1xufVxuXG5mdW5jdGlvbiBhZGRSaXBwbGVFZmZlY3QoKSB7XG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xuICBmb3IgKGNvbnN0IGJ1dHRvbiBvZiBidXR0b25zKSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGNyZWF0ZVJpcHBsZSk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVSaXBwbGUpO1xuICB9XG59XG5cbmV4cG9ydCB7IGFkZFJpcHBsZUVmZmVjdCB9O1xuIiwibGV0IGxlbmd0aE9mU2hpcCA9IDU7XG5sZXQgY291bnRlciA9IDU7XG5cbmZ1bmN0aW9uIGFkZEhvdmVyKGNsYXNzTmFtZSkge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2xhc3NOYW1lKTtcbiAgcGxheWVyQm9hcmQuZm9yRWFjaChwbGFjZVNoaXBIb3Zlcik7XG4gIGZ1bmN0aW9uIHBsYWNlU2hpcEhvdmVyKGdyaWQsIGluZGV4KSB7XG4gICAgY29uc3QgYXhpcyA9IGAke2luZGV4fWAuc3BsaXQoXCJcIik7XG4gICAgaWYgKGF4aXMubGVuZ3RoID09PSAxKSBheGlzLnVuc2hpZnQoXCIwXCIpO1xuICAgIGNvbnN0IGluZGV4QXJyID0gW107XG4gICAgY29uc3QgcmVtb3ZlSG92ZXJFZmZlY3QgPSAoaW5kZXgpID0+IHtcbiAgICAgIGlmIChwbGF5ZXJCb2FyZFsraW5kZXhdKSBwbGF5ZXJCb2FyZFsraW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoXCJncmV5XCIpO1xuICAgIH07XG4gICAgY29uc3QgZW1wdHlJbmRleEFyciA9ICgpID0+IHtcbiAgICAgIGluZGV4QXJyLmZvckVhY2gocmVtb3ZlSG92ZXJFZmZlY3QpO1xuICAgICAgaW5kZXhBcnIuc3BsaWNlKDApO1xuICAgIH07XG4gICAgY29uc3Qgc2V0U2hpcExlbmd0aCA9ICgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgQXJyYXkuZnJvbShncmlkLmNsYXNzTGlzdCkuaW5jbHVkZXMoXCJncmV5XCIpICYmXG4gICAgICAgICFBcnJheS5mcm9tKGdyaWQuY2xhc3NMaXN0KS5pbmNsdWRlcyhcInNoaXBcIilcbiAgICAgICkge1xuICAgICAgICBjb3VudGVyLS07XG4gICAgICAgIGlmIChjb3VudGVyID09PSA0KSBsZW5ndGhPZlNoaXAgPSA0O1xuICAgICAgICBpZiAoY291bnRlciA9PT0gMykgbGVuZ3RoT2ZTaGlwID0gMztcbiAgICAgICAgaWYgKGNvdW50ZXIgPT09IDIpIGxlbmd0aE9mU2hpcCA9IDM7XG4gICAgICAgIGlmIChjb3VudGVyID09PSAxKSBsZW5ndGhPZlNoaXAgPSAyO1xuICAgICAgICBpZiAoY291bnRlciA9PT0gMCkgbGVuZ3RoT2ZTaGlwID0gMDtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGFkZFRvSW5kZXhBcnIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBheGlzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5heGlzLWJ0blwiKTtcbiAgICAgIGxldCBpbmRleDEsIGluZGV4MiwgaW5kZXgzLCBpbmRleDQsIGluZGV4NTtcbiAgICAgIGlmIChheGlzQnRuICYmIGF4aXNCdG4udGV4dENvbnRlbnQgPT09IFwiSG9yaXpvbnRhbFwiKSB7XG4gICAgICAgIGluZGV4MSA9IGAke2F4aXNbMF19JHtheGlzWzFdfWA7XG4gICAgICAgIGluZGV4MiA9IGAke2F4aXNbMF19JHsrYXhpc1sxXSArIDF9YDtcbiAgICAgICAgaW5kZXgzID0gYCR7YXhpc1swXX0keytheGlzWzFdICsgMn1gO1xuICAgICAgICBpbmRleDQgPSBgJHtheGlzWzBdfSR7K2F4aXNbMV0gKyAzfWA7XG4gICAgICAgIGluZGV4NSA9IGAke2F4aXNbMF19JHsrYXhpc1sxXSArIDR9YDtcbiAgICAgICAgcGxheWVyQm9hcmRbK2luZGV4MV0uY2xhc3NMaXN0LmFkZChcInJlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChheGlzQnRuICYmIGF4aXNCdG4udGV4dENvbnRlbnQgPT09IFwiVmVydGljYWxcIikge1xuICAgICAgICBpbmRleDEgPSBgJHtheGlzWzBdfSR7YXhpc1sxXX1gO1xuICAgICAgICBpbmRleDIgPSBgJHsrYCR7YXhpc1swXX0ke2F4aXNbMV19YCArIDEwfWA7XG4gICAgICAgIGluZGV4MyA9IGAkeytgJHtheGlzWzBdfSR7YXhpc1sxXX1gICsgMjB9YDtcbiAgICAgICAgaW5kZXg0ID0gYCR7K2Ake2F4aXNbMF19JHtheGlzWzFdfWAgKyAzMH1gO1xuICAgICAgICBpbmRleDUgPSBgJHsrYCR7YXhpc1swXX0ke2F4aXNbMV19YCArIDQwfWA7XG4gICAgICAgIHBsYXllckJvYXJkWytpbmRleDFdLmNsYXNzTGlzdC5hZGQoXCJyZWRcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChsZW5ndGhPZlNoaXAgPT09IDUpIHtcbiAgICAgICAgYWRkT25seVZhbGlkU3BhY2UoaW5kZXgxLCBpbmRleEFyciwgcGxheWVyQm9hcmQpO1xuICAgICAgICBhZGRPbmx5VmFsaWRTcGFjZShpbmRleDIsIGluZGV4QXJyLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAgIGFkZE9ubHlWYWxpZFNwYWNlKGluZGV4MywgaW5kZXhBcnIsIHBsYXllckJvYXJkKTtcbiAgICAgICAgYWRkT25seVZhbGlkU3BhY2UoaW5kZXg0LCBpbmRleEFyciwgcGxheWVyQm9hcmQpO1xuICAgICAgICBhZGRPbmx5VmFsaWRTcGFjZShpbmRleDUsIGluZGV4QXJyLCBwbGF5ZXJCb2FyZCk7XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXgxICYmIGxlbmd0aE9mU2hpcCA9PT0gNCkge1xuICAgICAgICBhZGRPbmx5VmFsaWRTcGFjZShpbmRleDEsIGluZGV4QXJyLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAgIGFkZE9ubHlWYWxpZFNwYWNlKGluZGV4MiwgaW5kZXhBcnIsIHBsYXllckJvYXJkKTtcbiAgICAgICAgYWRkT25seVZhbGlkU3BhY2UoaW5kZXgzLCBpbmRleEFyciwgcGxheWVyQm9hcmQpO1xuICAgICAgICBhZGRPbmx5VmFsaWRTcGFjZShpbmRleDQsIGluZGV4QXJyLCBwbGF5ZXJCb2FyZCk7XG4gICAgICB9XG4gICAgICBpZiAobGVuZ3RoT2ZTaGlwID09PSAzKSB7XG4gICAgICAgIGFkZE9ubHlWYWxpZFNwYWNlKGluZGV4MSwgaW5kZXhBcnIsIHBsYXllckJvYXJkKTtcbiAgICAgICAgYWRkT25seVZhbGlkU3BhY2UoaW5kZXgyLCBpbmRleEFyciwgcGxheWVyQm9hcmQpO1xuICAgICAgICBhZGRPbmx5VmFsaWRTcGFjZShpbmRleDMsIGluZGV4QXJyLCBwbGF5ZXJCb2FyZCk7XG4gICAgICB9XG4gICAgICBpZiAobGVuZ3RoT2ZTaGlwID09PSAyKSB7XG4gICAgICAgIGFkZE9ubHlWYWxpZFNwYWNlKGluZGV4MSwgaW5kZXhBcnIsIHBsYXllckJvYXJkKTtcbiAgICAgICAgYWRkT25seVZhbGlkU3BhY2UoaW5kZXgyLCBpbmRleEFyciwgcGxheWVyQm9hcmQpO1xuICAgICAgfVxuICAgICAgY29uc3QgYWRkSG92ZXJFZmZlY3QgPSAoaW5kZXgpID0+XG4gICAgICAgIHBsYXllckJvYXJkWytpbmRleF0uY2xhc3NMaXN0LmFkZChcImdyZXlcIik7XG4gICAgICBsZXQgY291bnRlcjIgPSBjb3VudGVyO1xuICAgICAgaWYgKGNvdW50ZXIgPD0gMikgY291bnRlcjIgPSBjb3VudGVyICsgMTtcbiAgICAgIGlmIChpbmRleEFyci5sZW5ndGggPT09IGNvdW50ZXIyKSB7XG4gICAgICAgIGluZGV4QXJyLmZvckVhY2goYWRkSG92ZXJFZmZlY3QpO1xuICAgICAgfVxuICAgICAgaWYgKGNvdW50ZXIgPCAxKVxuICAgICAgICBwbGF5ZXJCb2FyZC5mb3JFYWNoKChzcXIpID0+IHNxci5jbGFzc0xpc3QucmVtb3ZlKFwicmVkXCIpKTtcbiAgICB9O1xuICAgIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNldFNoaXBMZW5ndGgpO1xuICAgIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgYWRkVG9JbmRleEFycik7XG4gICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBlbXB0eUluZGV4QXJyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRPbmx5VmFsaWRTcGFjZShpbmRleCwgaW5kZXhBcnIsIHBsYXllckJvYXJkKSB7XG4gIGlmIChpbmRleCAmJiBpbmRleC5sZW5ndGggPT09IDIpIGluZGV4QXJyLnB1c2goaW5kZXgpO1xuICBpZiAoXG4gICAgcGxheWVyQm9hcmRbK2luZGV4XSAmJlxuICAgIEFycmF5LmZyb20ocGxheWVyQm9hcmRbK2luZGV4XS5jbGFzc0xpc3QpLmluY2x1ZGVzKFwic2hpcFwiKVxuICApXG4gICAgaW5kZXhBcnIucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0U2hpcEhvdmVyKCkge1xuICBsZW5ndGhPZlNoaXAgPSA1O1xuICBjb3VudGVyID0gNTtcbn1cblxuZXhwb3J0IHsgYWRkSG92ZXIsIHJlc2V0U2hpcEhvdmVyIH07XG4iLCJpbXBvcnQgeyBhbm5vdW5jZVdpbm5lciB9IGZyb20gXCIuL3BhZ2UtZ2V0LW5hbWVcIjtcbmltcG9ydCB7IHNldFN0b3BIZXJlIH0gZnJvbSBcIi4vcGxheWVyLXZzLWNvbXB1dGVyXCI7XG5cbi8qKiBDb2xvdXJzIHZhbGlkIHNob3RzIHJlZCAqL1xuZnVuY3Rpb24gdmFsaWRTaG90cyhcbiAgZ3JpZCxcbiAgaW5kZXgsXG4gIHJlY2VpdmVBdHRhY2ssXG4gIHBsYXllckJvYXJkLFxuICBhbGxTaGlwc1N1bmssXG4gIGluc3RydWN0aW9uLFxuICBwbGF5ZXJOYW1lXG4pIHtcbiAgY29uc3QgYXhpcyA9IGAke2luZGV4fWAuc3BsaXQoXCJcIik7XG4gIGlmIChheGlzLmxlbmd0aCA9PT0gMSkgYXhpcy51bnNoaWZ0KFwiMFwiKTtcblxuICBjb25zdCB7XG4gICAgaGl0Q29vcmQsXG4gICAgc2hpcDVTdW5rLFxuICAgIHNoaXA0U3VuayxcbiAgICBzaGlwM1N1bmssXG4gICAgc2hpcDJTdW5rLFxuICAgIHNoaXAxU3VuayxcbiAgICBzaGlwNUNvb3JkLFxuICAgIHNoaXA0Q29vcmQsXG4gICAgc2hpcDNDb29yZCxcbiAgICBzaGlwMkNvb3JkLFxuICAgIHNoaXAxQ29vcmQsXG4gIH0gPSByZWNlaXZlQXR0YWNrKGF4aXMpO1xuXG4gIGlmIChncmlkKSBncmlkLmNsYXNzTGlzdC5hZGQoXCJzaG90c1wiKTtcbiAgaWYgKGhpdENvb3JkKSBncmlkLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZC1zaG90XCIpO1xuXG4gIGlzU3Vua1NoaXAoc2hpcDVTdW5rLCBzaGlwNUNvb3JkLCBwbGF5ZXJCb2FyZCk7XG4gIGlzU3Vua1NoaXAoc2hpcDRTdW5rLCBzaGlwNENvb3JkLCBwbGF5ZXJCb2FyZCk7XG4gIGlzU3Vua1NoaXAoc2hpcDNTdW5rLCBzaGlwM0Nvb3JkLCBwbGF5ZXJCb2FyZCk7XG4gIGlzU3Vua1NoaXAoc2hpcDJTdW5rLCBzaGlwMkNvb3JkLCBwbGF5ZXJCb2FyZCk7XG4gIGlzU3Vua1NoaXAoc2hpcDFTdW5rLCBzaGlwMUNvb3JkLCBwbGF5ZXJCb2FyZCk7XG5cbiAgaWYgKGFsbFNoaXBzU3VuaygpKSB7XG4gICAgaW5zdHJ1Y3Rpb24udGV4dENvbnRlbnQgPSBcImdhbWUgb3Zlci5cIjtcbiAgICBzZXRTdG9wSGVyZSgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgd2hpbGUgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgYW5ub3VuY2VXaW5uZXIocGxheWVyTmFtZSk7XG4gICAgfSwgMjAwMCk7XG4gIH1cblxuICBjb25zdCBpc1N1bmtTaGlwQXJyYXkgPSBbXG4gICAgc2hpcDVTdW5rLFxuICAgIHNoaXA0U3VuayxcbiAgICBzaGlwM1N1bmssXG4gICAgc2hpcDJTdW5rLFxuICAgIHNoaXAxU3VuayxcbiAgXTtcbiAgcmV0dXJuIHsgaGl0Q29vcmQsIGlzU3Vua1NoaXBBcnJheSB9O1xufVxuXG4vKiogQWRkcyBibHVlIGJhY2tncm91bmQgY29sb3VyIHdoZW4gYSBzaGlwIGlzIGNvbXBsZXRlbHkgc3VuayAqL1xuZnVuY3Rpb24gaXNTdW5rU2hpcChzaGlwU3Vuaywgc2hpcENvb3JkLCBwbGF5ZXJCb2FyZCkge1xuICBjb25zdCBhZGRCbHVlQmcgPSAoaXRlbSkgPT5cbiAgICBwbGF5ZXJCb2FyZC5mb3JFYWNoKChzcXVhcmUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoK2l0ZW0uam9pbihcIlwiKSA9PT0gaW5kZXgpIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3Vuay1zaGlwXCIpO1xuICAgIH0pO1xuICBpZiAoc2hpcFN1bmsgPT09IHRydWUpIHNoaXBDb29yZC5mb3JFYWNoKGFkZEJsdWVCZyk7XG59XG5cbmV4cG9ydCB7IHZhbGlkU2hvdHMgfTtcbiIsImltcG9ydCB7Y3JlYXRlMkRBcnJheX0gZnJvbSBcIi4vMmQtYXJyYXlcIjtcbmltcG9ydCB7U2hpcH0gZnJvbSBcIi4vc2hpcFwiO1xuXG5mdW5jdGlvbiBHYW1lYm9hcmQocGxhY2VQbGF5ZXJTaGlwcykge1xuICBjb25zdCBBcnIgPSBbXTtcbiAgbGV0IGFsaWduID0gXCJYXCI7XG4gIGNvbnN0IHNoaXBBcnIgPSBbXTtcbiAgY29uc3QgYm9hcmQgPSBjcmVhdGUyREFycmF5KDEwKTtcbiAgY29uc3QgYWxpZ25TaGlwID0gKCkgPT4gKGFsaWduID0gYWxpZ24gPT09IFwiWFwiID8gXCJZXCIgOiBcIlhcIik7XG5cbiAgY29uc3QgcG9zaXRpb25TaGlwID0gKGluZGV4KSA9PiB7XG4gICAgcGxhY2VQbGF5ZXJTaGlwcyhBcnIsIGJvYXJkLCBzaGlwQXJyLCBpbmRleCwgYWxpZ24pO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoYXR0YWNrKSA9PiB7XG4gICAgbGV0IGhpdENvb3JkO1xuICAgIGxldCBzaGlwNVN1bms7XG4gICAgbGV0IHNoaXA0U3VuaztcbiAgICBsZXQgc2hpcDNTdW5rO1xuICAgIGxldCBzaGlwMlN1bms7XG4gICAgbGV0IHNoaXAxU3VuaztcbiAgICBsZXQgc2hpcDVDb29yZDtcbiAgICBsZXQgc2hpcDRDb29yZDtcbiAgICBsZXQgc2hpcDNDb29yZDtcbiAgICBsZXQgc2hpcDJDb29yZDtcbiAgICBsZXQgc2hpcDFDb29yZDtcblxuICAgIGNvbnN0IFtzaGlwRml2ZSwgc2hpcEZvdXIsIHNoaXBUaHJlZSwgc2hpcFR3bywgc2hpcE9uZV0gPSBzaGlwQXJyO1xuICAgIGNvbnN0IFtzaGlwNSwgc2hpcDQsIHNoaXAzLCBzaGlwMiwgc2hpcDFdID0gQXJyO1xuICAgIGNvbnN0IGFycmF5ID0gW3NoaXA1LCBzaGlwNCwgc2hpcDMsIHNoaXAyLCBzaGlwMV0uZmxhdCgpO1xuXG4gICAgYXJyYXkuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgc2hpcC5mb3JFYWNoKChjb29yZGluYXRlLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoK2F0dGFjay5qb2luKFwiXCIpID09PSArY29vcmRpbmF0ZSkge1xuICAgICAgICAgIGhpdENvb3JkID0gc2hpcC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIGNvbnN0IHNoaTUgPSBTaGlwKHNoaXBGaXZlLlhZLCBzaGlwRml2ZS5zaGlwTGVuZ2h0LCBzaGlwRml2ZS5hbGlnbik7XG4gICAgICAgICAgc2hpcDVTdW5rID0gc2hpNS5pc1N1bmsoc2hpcCwgaGl0Q29vcmQpO1xuICAgICAgICAgIHNoaXA1Q29vcmQgPSBzaGk1LnNoaXBDb29yZDtcbiAgICAgICAgICBjb25zdCBzaGk0ID0gU2hpcChzaGlwRm91ci5YWSwgc2hpcEZvdXIuc2hpcExlbmdodCwgc2hpcEZvdXIuYWxpZ24pO1xuICAgICAgICAgIHNoaXA0U3VuayA9IHNoaTQuaXNTdW5rKHNoaXAsIGhpdENvb3JkKTtcbiAgICAgICAgICBzaGlwNENvb3JkID0gc2hpNC5zaGlwQ29vcmQ7XG4gICAgICAgICAgY29uc3Qgc2hpMyA9IFNoaXAoXG4gICAgICAgICAgICBzaGlwVGhyZWUuWFksXG4gICAgICAgICAgICBzaGlwVGhyZWUuc2hpcExlbmdodCxcbiAgICAgICAgICAgIHNoaXBUaHJlZS5hbGlnbixcbiAgICAgICAgICApO1xuICAgICAgICAgIHNoaXAzU3VuayA9IHNoaTMuaXNTdW5rKHNoaXAsIGhpdENvb3JkKTtcbiAgICAgICAgICBzaGlwM0Nvb3JkID0gc2hpMy5zaGlwQ29vcmQ7XG4gICAgICAgICAgY29uc3Qgc2hpMiA9IFNoaXAoc2hpcFR3by5YWSwgc2hpcFR3by5zaGlwTGVuZ2h0LCBzaGlwVHdvLmFsaWduKTtcbiAgICAgICAgICBzaGlwMlN1bmsgPSBzaGkyLmlzU3VuayhzaGlwLCBoaXRDb29yZCk7XG4gICAgICAgICAgc2hpcDJDb29yZCA9IHNoaTIuc2hpcENvb3JkO1xuICAgICAgICAgIGNvbnN0IHNoaTEgPSBTaGlwKHNoaXBPbmUuWFksIHNoaXBPbmUuc2hpcExlbmdodCwgc2hpcE9uZS5hbGlnbik7XG4gICAgICAgICAgc2hpcDFTdW5rID0gc2hpMS5pc1N1bmsoc2hpcCwgaGl0Q29vcmQpO1xuICAgICAgICAgIHNoaXAxQ29vcmQgPSBzaGkxLnNoaXBDb29yZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhpdENvb3JkLFxuICAgICAgc2hpcDVTdW5rLFxuICAgICAgc2hpcDRTdW5rLFxuICAgICAgc2hpcDNTdW5rLFxuICAgICAgc2hpcDJTdW5rLFxuICAgICAgc2hpcDFTdW5rLFxuICAgICAgc2hpcDVDb29yZCxcbiAgICAgIHNoaXA0Q29vcmQsXG4gICAgICBzaGlwM0Nvb3JkLFxuICAgICAgc2hpcDJDb29yZCxcbiAgICAgIHNoaXAxQ29vcmQsXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgY29uc3QgW3NoaXA1LCBzaGlwNCwgc2hpcDMsIHNoaXAyLCBzaGlwMV0gPSBBcnIuZmxhdCgpO1xuICAgIGlmIChzaGlwNS5sZW5ndGggPT09IDBcbiAgICAmJiBzaGlwNC5sZW5ndGggPT09IDBcbiAgICAmJiBzaGlwMy5sZW5ndGggPT09IDBcbiAgICAmJiBzaGlwMi5sZW5ndGggPT09IDBcbiAgICAmJiBzaGlwMS5sZW5ndGggPT09IDBcbiAgICApIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIEFycixcbiAgICBib2FyZCxcbiAgICBzaGlwQXJyLFxuICAgIGFsaWduU2hpcCxcbiAgICBhbGxTaGlwc1N1bmssXG4gICAgcG9zaXRpb25TaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gIH07XG59XG5cbmV4cG9ydCB7R2FtZWJvYXJkfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5mdW5jdGlvbiBnZXRTaGlwQ29vcmRpbmF0ZXMoYXJyYXksIGxlbmd0aCwgYWxpZ24pIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSB8fCBhcnJheS5sZW5ndGggPCAyKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IHNoaXBDb29yZGluYXRlcyA9IFthcnJheV07XG4gIGlmIChhbGlnbiA9PT0gXCJYXCIpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaChbYXJyYXlbMF0sIGFycmF5WzFdICsgaV0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaChbYXJyYXlbMF0gKyBpLCBhcnJheVsxXV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2hpcENvb3JkaW5hdGVzO1xufVxuXG5leHBvcnQge2dldFNoaXBDb29yZGluYXRlc307XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXR1cm4tYXNzaWduICovXG5pbXBvcnQge3NoaXBBeGlzfSBmcm9tIFwiLi9zaHAtYXhpc1wiO1xuXG5mdW5jdGlvbiBwbGFjZVBsYXllclNoaXBzKEFyciwgYm9hcmQsIHNoaXBBcnIsIGluZGV4LCBhbGlnbikge1xuICBsZXQgc2hpcExlbmdodDtcbiAgY29uc3QgYXNzaWduVmFsdWUgPSAodmFsdWUpID0+IChzaGlwTGVuZ2h0ID0gdmFsdWUpO1xuICBpZiAoQXJyLmxlbmd0aCA+IDQpIHJldHVybjtcbiAgYXNzaWduTGVuZ3RoVG9TaGlwcyhBcnIsIGFzc2lnblZhbHVlKTtcbiAgcGxhY2VTaGlwcyhpbmRleCwgc2hpcExlbmdodCwgYWxpZ24sIGJvYXJkLCBBcnIsIHNoaXBBcnIpO1xufVxuXG5mdW5jdGlvbiBwbGFjZUNvbXB1dGVyU2hpcHMoQXJyLCBib2FyZCwgc2hpcEFycikge1xuICBjb25zdCBhbGlnbkFyciA9IFtcIlhcIiwgXCJZXCJdO1xuICBsZXQgc2hpcExlbmdodDtcbiAgY29uc3QgYXNzaWduVmFsdWUgPSAodmFsdWUpID0+IChzaGlwTGVuZ2h0ID0gdmFsdWUpO1xuICB3aGlsZSAoQXJyLmxlbmd0aCA8IDUpIHtcbiAgICBhc3NpZ25MZW5ndGhUb1NoaXBzKEFyciwgYXNzaWduVmFsdWUpO1xuICAgIGNvbnN0IGFsaWduSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhbGlnbkFyci5sZW5ndGgpO1xuICAgIGNvbnN0IGFsaWduID0gYWxpZ25BcnJbYWxpZ25JbmRleF07XG4gICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgIHBsYWNlU2hpcHMoaW5kZXgsIHNoaXBMZW5naHQsIGFsaWduLCBib2FyZCwgQXJyLCBzaGlwQXJyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NpZ25MZW5ndGhUb1NoaXBzKEFyciwgYXNzaWduVmFsdWUpIHtcbiAgaWYgKEFyci5sZW5ndGggPT09IDApIGFzc2lnblZhbHVlKDUpO1xuICBpZiAoQXJyLmxlbmd0aCA9PT0gMSkgYXNzaWduVmFsdWUoNCk7XG4gIGlmIChBcnIubGVuZ3RoID09PSAyKSBhc3NpZ25WYWx1ZSgzKTtcbiAgaWYgKEFyci5sZW5ndGggPT09IDMpIGFzc2lnblZhbHVlKDMpO1xuICBpZiAoQXJyLmxlbmd0aCA9PT0gNCkgYXNzaWduVmFsdWUoMik7XG59XG5cbmZ1bmN0aW9uIHBsYWNlU2hpcHMoaW5kZXgsIHNoaXBMZW5naHQsIGFsaWduLCBib2FyZCwgQXJyLCBzaGlwQXJyKSB7XG4gIGNvbnN0IGF4aXMgPSBgJHtpbmRleH1gLnNwbGl0KFwiXCIpO1xuICBpZiAoYXhpcy5sZW5ndGggPT09IDEpIGF4aXMudW5zaGlmdChcIjBcIik7XG4gIGNvbnN0IHNoaXBDb29yZCA9IHNoaXBBeGlzKHNoaXBMZW5naHQsICtheGlzWzBdLCArYXhpc1sxXSwgc2hpcExlbmdodCwgYWxpZ24sIGJvYXJkKTtcbiAgaWYgKHNoaXBDb29yZC5sZW5ndGggIT09IDApIHtcbiAgICBBcnIucHVzaChzaGlwQ29vcmQpO1xuICAgIHNoaXBBcnIucHVzaCh7IFhZOiBbK2F4aXNbMF0sICtheGlzWzFdXSwgYWxpZ24sIHNoaXBMZW5naHQgfSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgcGxhY2VQbGF5ZXJTaGlwcywgcGxhY2VDb21wdXRlclNoaXBzIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuaW1wb3J0IHtnZXRTaGlwQ29vcmRpbmF0ZXN9IGZyb20gXCIuL2dldFNoaXBDb29yZGluYXRlc1wiO1xuXG5mdW5jdGlvbiBTaGlwKGFycmF5LCBsZW5ndGgsIGFsaWduKSB7XG4gIGNvbnN0IHNoaXBDb29yZCA9IGdldFNoaXBDb29yZGluYXRlcyhhcnJheSwgbGVuZ3RoLCBhbGlnbik7XG4gIGlmICghQXJyYXkuaXNBcnJheShzaGlwQ29vcmQpICYmICFzaGlwQ29vcmQubGVuZ3RoID4gMCkgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBpc1N1bmsgPSAoY29vcmQsIGhpdENvb3JkKSA9PiB7XG4gICAgZm9yIChjb25zdCBYWSBvZiBzaGlwQ29vcmQpIHtcbiAgICAgIGlmIChoaXRDb29yZC5qb2luKFwiXCIpID09PSBYWS5qb2luKFwiXCIpKSBpZiAoY29vcmQubGVuZ3RoIDw9IDApIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gY29vcmQubGVuZ3RoO1xuICB9O1xuICByZXR1cm4geyBzaGlwQ29vcmQsIGlzU3VuayB9O1xufVxuXG5leHBvcnQge1NoaXB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmltcG9ydCB7U2hpcH0gZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHtjaGVja1ZhbGlkTW92ZX0gZnJvbSBcIi4vdmFsaWQtbW92ZVwiO1xuXG5mdW5jdGlvbiBzaGlwQXhpcyhudW0sIHgsIHksIGxlbmd0aCwgYWxpZ24sIGJvYXJkLCByZWNlaXZlQXR0YWNrKSB7XG4gIGNvbnN0IHNoaXAgPSBTaGlwKFt4LCB5XSwgbGVuZ3RoLCBhbGlnbiwgcmVjZWl2ZUF0dGFjaykuc2hpcENvb3JkO1xuICBjb25zdCBzaGlwQ29vcmRzID0gY2hlY2tWYWxpZE1vdmUobnVtLCBzaGlwLCBib2FyZCk7XG4gIGNvbnN0IGFycmF5Q29vcmQgPSBbXTtcblxuICBhcnJheUNvb3JkLnB1c2goc2hpcENvb3Jkcyk7XG4gIGFycmF5Q29vcmQuZm9yRWFjaCgoY29vcmQsIGluZGV4KSA9PiB7XG4gICAgaWYgKCFjb29yZCkgYXJyYXlDb29yZC5zcGxpY2UoaW5kZXgsIDEpO1xuICB9KTtcblxuICByZXR1cm4gYXJyYXlDb29yZDtcbn1cblxuZXhwb3J0IHtzaGlwQXhpc307XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xubGV0IGNvdW50ZXIgPSAwO1xuXG4vKiogVGhpcyBmdW5jdGlvbiBwbGFjZXMgc2hpcHMgb24gdGhlIGdhbWVib2FyZCB3aXRoIHRoZWlyIGxlbmd0aCAqL1xuZnVuY3Rpb24gY2hlY2tWYWxpZE1vdmUobnVtLCBzaGlwLCBib2FyZEFycmF5KSB7XG4gIGxldCBudW1Db3B5ID0gbnVtO1xuICBjb25zdCBkb21Cb2FyZEFycnJheSA9IFtdO1xuICBpZiAoIXNoaXApIHJldHVybiBmYWxzZTtcbiAgZm9yIChsZXQgaSA9IHNoaXAubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICBpZiAoXG4gICAgICArc2hpcFtpXVswXSA+IDkgfHxcbiAgICAgICtzaGlwW2ldWzFdID4gOSB8fFxuICAgICAgYm9hcmRBcnJheVsrc2hpcFtpXVswXV1bK3NoaXBbaV1bMV1dICE9PSAwXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIGlmIChudW0gPT0gMykgY291bnRlcisrO1xuICBpZiAoY291bnRlciA9PT0gMikgbnVtQ29weSA9IDY7XG4gIFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoXG4gICAgICBib2FyZEFycmF5WytzaGlwW2ldWzBdXVsrc2hpcFtpXVsxXV0gPT09IDIgfHxcbiAgICAgIGJvYXJkQXJyYXlbK3NoaXBbaV1bMF1dWytzaGlwW2ldWzFdXSA9PT0gMyB8fFxuICAgICAgYm9hcmRBcnJheVsrc2hpcFtpXVswXV1bK3NoaXBbaV1bMV1dID09PSA0IHx8XG4gICAgICBib2FyZEFycmF5WytzaGlwW2ldWzBdXVsrc2hpcFtpXVsxXV0gPT09IDVcbiAgICApXG4gICAgICByZXR1cm47XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgYm9hcmRBcnJheVsrc2hpcFtpXVswXV1bK3NoaXBbaV1bMV1dID0gbnVtQ29weTtcbiAgICBkb21Cb2FyZEFycnJheS5wdXNoKGAke3NoaXBbaV1bMF19JHtzaGlwW2ldWzFdfWApO1xuICB9XG5cbiAgaWYgKGNvdW50ZXIgPT09IDIpIGNvdW50ZXIgPSAwO1xuXG4gIHJldHVybiBkb21Cb2FyZEFycnJheTtcbn1cblxuZXhwb3J0IHsgY2hlY2tWYWxpZE1vdmUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHJlbmRlckdldE5hbWVQYWdlIH0gZnJvbSBcIi4vbW9kdWxlcy9kb20taW50ZXJhY3Rpb25zL3BhZ2UtZ2V0LW5hbWVcIjtcbmltcG9ydCB7IGFkZFJpcHBsZUVmZmVjdCB9IGZyb20gXCIuL21vZHVsZXMvZG9tLWludGVyYWN0aW9ucy9yaXBwbGUtYnV0dG9uXCI7XG5pbXBvcnQgXCIuL21vZHVsZXMvc3R5bGUvc3R5bGUuY3NzXCI7XG5cbnJlbmRlckdldE5hbWVQYWdlKCk7XG5hZGRSaXBwbGVFZmZlY3QoKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJvcGFjaXR5XCIpO1xuICB9LCA0MDApO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=