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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  align-items: center;\n  background: radial-gradient(circle at 100%,\n      #341406e8,\n      #333 50%,\n      #0f1017 75%,\n      #123 75%);\n  background-attachment: fixed;\n  opacity: 1;\n  transition-duration: 0.7s;\n  transition-property: opacity;\n}\n\n.hidden {\n  opacity: 0;\n  transition-duration: unset;\n}\n\nbody.opacity {\n  transition-duration: 0.7s;\n  opacity: 1;\n}\n\nbody.fade {\n  opacity: 0;\n}\n\nheader {\n  width: -webkit-fill-available;\n}\n\n.header {\n  border: 0ch;\n}\n\nh1 {\n  text-align: center;\n  font-size: min(15vw, 8rem);\n  color: #715f36;\n  text-shadow: 3px -7px 5px black;\n}\n\n.h1 {\n  font-size: min(15vw, 4rem);\n}\n\n.instruction2 {\n  color: bisque;\n  text-transform: capitalize;\n}\n\n.input-div,\n.game-over-div {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.input-div {\n  opacity: 1;\n  transition-duration: 0.7s;\n  transition-property: opacity;\n}\n\n.input-div.fade {\n  opacity: 0;\n}\n\n.align-ships {\n  text-align: center;\n  position: relative;\n  margin-bottom: 25px;\n}\n\nlabel {\n  font-size: xx-large;\n  color: aquamarine;\n  color: #9cdfffde;\n  font-variant: unicase;\n}\n\ninput {\n  padding: 15px;\n  border-radius: 10px;\n  outline: none;\n  border: none;\n}\n\n.second-input {\n  position: relative;\n}\n\n.start-btn {\n  width: fit-content;\n  padding: 15px;\n  align-self: center;\n}\n\n.choose-div {\n  margin-top: auto;\n  margin-bottom: auto;\n  text-align: center;\n  opacity: 1;\n  transition-duration: 0.7s;\n  transition-property: opacity;\n}\n\n.choose-div.fade {\n  opacity: 0;\n}\n\n.choose-div>p {\n  font-size: 2rem;\n  text-transform: capitalize;\n  color: #9cdfffde;\n  font-variant: unicase;\n}\n\n.btn-div {\n  text-align: center;\n  margin-top: 10px;\n}\n\n.play-human {\n  margin-left: 20px;\n}\n\n.play-ai,\n.play-human,\n.btn-restart,\n.start-btn {\n  width: 110px;\n  padding: 15px 0;\n  margin-top: 15px;\n  font-weight: bolder;\n}\n\n.axis-btn {\n  margin-top: 10px;\n  padding: 8px;\n  font-weight: bolder;\n  width: 90px;\n}\n\n.align-ships>button {\n  margin-top: 10px;\n  padding: 8px;\n  font-weight: bolder;\n  width: 90px;\n}\n\n.btn-restart {\n  margin: auto;\n}\n\n.game-over {\n  font-size: xxx-large;\n  color: #c3cbeb;\n  text-shadow: 3px -7px 5px black;\n}\n\n.winner,\n.name {\n  font-size: xx-large;\n  color: cadetblue;\n  margin-top: -15px;\n  text-shadow: 0px -5px 2px black;\n}\n\n.game-over-div {\n  text-align: center;\n}\n\n.board-container {\n  display: flex;\n  margin: auto;\n  flex-wrap: wrap;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  row-gap: 60px;\n  column-gap: 50px;\n  margin-bottom: 100px;\n  padding: 0 5px;\n}\n\n.container-div1,\n.container-div2 {\n  /* margin: auto; */\n  width: 400px;\n  height: 400px;\n}\n\n.error-msg {\n  text-align: center;\n  color: greenyellow;\n}\n\n.player,\n.player2 {\n  text-align: center;\n  color: #a5a1cc;\n  font-weight: bolder;\n  margin-bottom: 10px;\n  text-decoration: underline;\n  text-transform: capitalize;\n  text-decoration-line: unset;\n  font-variant: unicase;\n}\n\n.player1-board,\n.player2-board {\n  backdrop-filter: brightness(0.7);\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  height: 100%;\n  border: 1px solid #1d00ff;\n  box-shadow: 7px 5px 9px 2px;\n  background-color: rgb(10 16 64 / 30%);\n}\n\n.player1-grid,\n.player2-grid {\n  border: 1px solid #d7fff4;\n}\n\n.player1-grid:hover,\n.player2-grid:hover {\n  background-color: rgb(255, 183, 183);\n}\n\n.red:hover {\n  background-color: red;\n  border-color: black !important;\n}\n\n.grey {\n  background-color: rgb(255, 183, 183) !important;\n  border-color: black !important;\n}\n\n.hide {\n  position: absolute;\n  visibility: hidden;\n}\n\n.show {\n  position: relative;\n  visibility: visible;\n}\n\n.ship {\n  background-color: #00ffff70 !important;\n  border-color: #00000099 !important;\n}\n\n.shots {\n  border-radius: 40px;\n  border-color: black;\n  background-color: #f79e85c4 !important;\n}\n\n.valid-shot {\n  background-color: #ff0000ba !important;\n}\n\n.sunk-ship {\n  background-color: #3c53f1a6 !important;\n}\n\nbody::-webkit-scrollbar {\n  width: 12px;\n}\n\nbody::-webkit-scrollbar-track {\n  background: #112233;\n}\n\nbody::-webkit-scrollbar-thumb {\n  background-color: #112233;\n  border-radius: 20px;\n  border: 1px solid bisque;\n}\n\n.blinking {\n  animation: blinkingBackground 2s infinite;\n}\n\nbutton {\n  position: relative;\n  overflow: hidden;\n  transition: background 400ms;\n  color: #fff;\n  background-color: #6200ee;\n  outline: 0;\n  border: 0;\n  box-shadow: 1px 2px 1rem 0px rgb(0 0 0 / 95%);\n  cursor: pointer;\n  border-radius: 5px;\n}\n\n.ripple {\n  position: absolute;\n  border-radius: 50%;\n  transform: scale(0);\n  animation: ripple 600ms linear;\n  background-color: rgba(255, 255, 255, 0.7);\n  width: 100px;\n  height: 100px;\n  margin-top: -50px;\n  margin-left: -50px;\n  opacity: 0;\n}\n\n@keyframes ripple {\n  from {\n    opacity: 1;\n    transform: scale(0);\n  }\n\n  to {\n    transform: scale(4);\n    opacity: 0;\n  }\n}\n\n@keyframes blinkingBackground {\n  0% {\n    color: #004435;\n  }\n\n  25% {\n    color: #ac9dff;\n  }\n\n  50% {\n    color: #137056;\n  }\n\n  70% {\n    color: #ffffff;\n  }\n\n  100% {\n    color: #272063;\n  }\n}\n\n@media screen and (max-width: 600px) {\n\n  .container-div1,\n  .container-div2 {\n    width: 350px;\n    height: 350px;\n  }\n}\n\nfooter {\n  padding: 15px;\n  margin-top: auto;\n  text-align: center;\n  background-color: #bba7a7;\n  width: -webkit-fill-available;\n}", "",{"version":3,"sources":["webpack://./src/modules/style/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  align-items: center;\n  background: radial-gradient(circle at 100%,\n      #341406e8,\n      #333 50%,\n      #0f1017 75%,\n      #123 75%);\n  background-attachment: fixed;\n  opacity: 1;\n  transition-duration: 0.7s;\n  transition-property: opacity;\n}\n\n.hidden {\n  opacity: 0;\n  transition-duration: unset;\n}\n\nbody.opacity {\n  transition-duration: 0.7s;\n  opacity: 1;\n}\n\nbody.fade {\n  opacity: 0;\n}\n\nheader {\n  width: -webkit-fill-available;\n}\n\n.header {\n  border: 0ch;\n}\n\nh1 {\n  text-align: center;\n  font-size: min(15vw, 8rem);\n  color: #715f36;\n  text-shadow: 3px -7px 5px black;\n}\n\n.h1 {\n  font-size: min(15vw, 4rem);\n}\n\n.instruction2 {\n  color: bisque;\n  text-transform: capitalize;\n}\n\n.input-div,\n.game-over-div {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.input-div {\n  opacity: 1;\n  transition-duration: 0.7s;\n  transition-property: opacity;\n}\n\n.input-div.fade {\n  opacity: 0;\n}\n\n.align-ships {\n  text-align: center;\n  position: relative;\n  margin-bottom: 25px;\n}\n\nlabel {\n  font-size: xx-large;\n  color: aquamarine;\n  color: #9cdfffde;\n  font-variant: unicase;\n}\n\ninput {\n  padding: 15px;\n  border-radius: 10px;\n  outline: none;\n  border: none;\n}\n\n.second-input {\n  position: relative;\n}\n\n.start-btn {\n  width: fit-content;\n  padding: 15px;\n  align-self: center;\n}\n\n.choose-div {\n  margin-top: auto;\n  margin-bottom: auto;\n  text-align: center;\n  opacity: 1;\n  transition-duration: 0.7s;\n  transition-property: opacity;\n}\n\n.choose-div.fade {\n  opacity: 0;\n}\n\n.choose-div>p {\n  font-size: 2rem;\n  text-transform: capitalize;\n  color: #9cdfffde;\n  font-variant: unicase;\n}\n\n.btn-div {\n  text-align: center;\n  margin-top: 10px;\n}\n\n.play-human {\n  margin-left: 20px;\n}\n\n.play-ai,\n.play-human,\n.btn-restart,\n.start-btn {\n  width: 110px;\n  padding: 15px 0;\n  margin-top: 15px;\n  font-weight: bolder;\n}\n\n.axis-btn {\n  margin-top: 10px;\n  padding: 8px;\n  font-weight: bolder;\n  width: 90px;\n}\n\n.align-ships>button {\n  margin-top: 10px;\n  padding: 8px;\n  font-weight: bolder;\n  width: 90px;\n}\n\n.btn-restart {\n  margin: auto;\n}\n\n.game-over {\n  font-size: xxx-large;\n  color: #c3cbeb;\n  text-shadow: 3px -7px 5px black;\n}\n\n.winner,\n.name {\n  font-size: xx-large;\n  color: cadetblue;\n  margin-top: -15px;\n  text-shadow: 0px -5px 2px black;\n}\n\n.game-over-div {\n  text-align: center;\n}\n\n.board-container {\n  display: flex;\n  margin: auto;\n  flex-wrap: wrap;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  row-gap: 60px;\n  column-gap: 50px;\n  margin-bottom: 100px;\n  padding: 0 5px;\n}\n\n.container-div1,\n.container-div2 {\n  /* margin: auto; */\n  width: 400px;\n  height: 400px;\n}\n\n.error-msg {\n  text-align: center;\n  color: greenyellow;\n}\n\n.player,\n.player2 {\n  text-align: center;\n  color: #a5a1cc;\n  font-weight: bolder;\n  margin-bottom: 10px;\n  text-decoration: underline;\n  text-transform: capitalize;\n  text-decoration-line: unset;\n  font-variant: unicase;\n}\n\n.player1-board,\n.player2-board {\n  backdrop-filter: brightness(0.7);\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  height: 100%;\n  border: 1px solid #1d00ff;\n  box-shadow: 7px 5px 9px 2px;\n  background-color: rgb(10 16 64 / 30%);\n}\n\n.player1-grid,\n.player2-grid {\n  border: 1px solid #d7fff4;\n}\n\n.player1-grid:hover,\n.player2-grid:hover {\n  background-color: rgb(255, 183, 183);\n}\n\n.red:hover {\n  background-color: red;\n  border-color: black !important;\n}\n\n.grey {\n  background-color: rgb(255, 183, 183) !important;\n  border-color: black !important;\n}\n\n.hide {\n  position: absolute;\n  visibility: hidden;\n}\n\n.show {\n  position: relative;\n  visibility: visible;\n}\n\n.ship {\n  background-color: #00ffff70 !important;\n  border-color: #00000099 !important;\n}\n\n.shots {\n  border-radius: 40px;\n  border-color: black;\n  background-color: #f79e85c4 !important;\n}\n\n.valid-shot {\n  background-color: #ff0000ba !important;\n}\n\n.sunk-ship {\n  background-color: #3c53f1a6 !important;\n}\n\nbody::-webkit-scrollbar {\n  width: 12px;\n}\n\nbody::-webkit-scrollbar-track {\n  background: #112233;\n}\n\nbody::-webkit-scrollbar-thumb {\n  background-color: #112233;\n  border-radius: 20px;\n  border: 1px solid bisque;\n}\n\n.blinking {\n  animation: blinkingBackground 2s infinite;\n}\n\nbutton {\n  position: relative;\n  overflow: hidden;\n  transition: background 400ms;\n  color: #fff;\n  background-color: #6200ee;\n  outline: 0;\n  border: 0;\n  box-shadow: 1px 2px 1rem 0px rgb(0 0 0 / 95%);\n  cursor: pointer;\n  border-radius: 5px;\n}\n\n.ripple {\n  position: absolute;\n  border-radius: 50%;\n  transform: scale(0);\n  animation: ripple 600ms linear;\n  background-color: rgba(255, 255, 255, 0.7);\n  width: 100px;\n  height: 100px;\n  margin-top: -50px;\n  margin-left: -50px;\n  opacity: 0;\n}\n\n@keyframes ripple {\n  from {\n    opacity: 1;\n    transform: scale(0);\n  }\n\n  to {\n    transform: scale(4);\n    opacity: 0;\n  }\n}\n\n@keyframes blinkingBackground {\n  0% {\n    color: #004435;\n  }\n\n  25% {\n    color: #ac9dff;\n  }\n\n  50% {\n    color: #137056;\n  }\n\n  70% {\n    color: #ffffff;\n  }\n\n  100% {\n    color: #272063;\n  }\n}\n\n@media screen and (max-width: 600px) {\n\n  .container-div1,\n  .container-div2 {\n    width: 350px;\n    height: 350px;\n  }\n}\n\nfooter {\n  padding: 15px;\n  margin-top: auto;\n  text-align: center;\n  background-color: #bba7a7;\n  width: -webkit-fill-available;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUg7QUFDQTs7QUFFa0I7Ozs7Ozs7Ozs7Ozs7OztBQ2pCbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFFBQVE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQSwyQkFBMkIsV0FBVyxFQUFFLFdBQVc7QUFDbkQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFMEI7Ozs7Ozs7VUN2QzFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0E2RTtBQUNGO0FBQ3hDOztBQUVuQywwRkFBaUI7QUFDakIsd0ZBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc3R5bGUvc3R5bGUuY3NzPzc0ZDAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvMmQtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS1pbnRlcmFjdGlvbnMvY2hvb3NlLXBsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLWludGVyYWN0aW9ucy9kb20tZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20taW50ZXJhY3Rpb25zL2ZpbmQtZW1wdHktc3BvdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLWludGVyYWN0aW9ucy9nZXQtcGxheWVyLW5hbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS1pbnRlcmFjdGlvbnMvaGVscGVyLWZ1bmN0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20taW50ZXJhY3Rpb25zL25hbWUtaW5wdXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS1pbnRlcmFjdGlvbnMvcGFnZS1mb290ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS1pbnRlcmFjdGlvbnMvcGFnZS1nZXQtbmFtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLWludGVyYWN0aW9ucy9wYWdlLWhlYWRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLWludGVyYWN0aW9ucy9wbGFjZS1zaGlwLXJhbmRvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLWludGVyYWN0aW9ucy9wbGFjZS1zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20taW50ZXJhY3Rpb25zL3BsYXllci12cy1jb21wdXRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLWludGVyYWN0aW9ucy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS1pbnRlcmFjdGlvbnMvcmlwcGxlLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLWludGVyYWN0aW9ucy9zaGlwLWhvdmVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20taW50ZXJhY3Rpb25zL3ZhbGlkLWhpdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nZXRTaGlwQ29vcmRpbmF0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYWNlU2hpcHNPbkJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaHAtYXhpcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvdmFsaWQtbW92ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAxMDAlLFxcbiAgICAgICMzNDE0MDZlOCxcXG4gICAgICAjMzMzIDUwJSxcXG4gICAgICAjMGYxMDE3IDc1JSxcXG4gICAgICAjMTIzIDc1JSk7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuN3M7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB1bnNldDtcXG59XFxuXFxuYm9keS5vcGFjaXR5IHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuN3M7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5ib2R5LmZhZGUge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJvcmRlcjogMGNoO1xcbn1cXG5cXG5oMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IG1pbigxNXZ3LCA4cmVtKTtcXG4gIGNvbG9yOiAjNzE1ZjM2O1xcbiAgdGV4dC1zaGFkb3c6IDNweCAtN3B4IDVweCBibGFjaztcXG59XFxuXFxuLmgxIHtcXG4gIGZvbnQtc2l6ZTogbWluKDE1dncsIDRyZW0pO1xcbn1cXG5cXG4uaW5zdHJ1Y3Rpb24yIHtcXG4gIGNvbG9yOiBiaXNxdWU7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuLmlucHV0LWRpdixcXG4uZ2FtZS1vdmVyLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTVweDtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbn1cXG5cXG4uaW5wdXQtZGl2IHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjdzO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcXG59XFxuXFxuLmlucHV0LWRpdi5mYWRlIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5hbGlnbi1zaGlwcyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbn1cXG5cXG5sYWJlbCB7XFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcbiAgY29sb3I6IGFxdWFtYXJpbmU7XFxuICBjb2xvcjogIzljZGZmZmRlO1xcbiAgZm9udC12YXJpYW50OiB1bmljYXNlO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5zZWNvbmQtaW5wdXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc3RhcnQtYnRuIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jaG9vc2UtZGl2IHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuN3M7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xcbn1cXG5cXG4uY2hvb3NlLWRpdi5mYWRlIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5jaG9vc2UtZGl2PnAge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBjb2xvcjogIzljZGZmZmRlO1xcbiAgZm9udC12YXJpYW50OiB1bmljYXNlO1xcbn1cXG5cXG4uYnRuLWRpdiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ucGxheS1odW1hbiB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuLnBsYXktYWksXFxuLnBsYXktaHVtYW4sXFxuLmJ0bi1yZXN0YXJ0LFxcbi5zdGFydC1idG4ge1xcbiAgd2lkdGg6IDExMHB4O1xcbiAgcGFkZGluZzogMTVweCAwO1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi5heGlzLWJ0biB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIHdpZHRoOiA5MHB4O1xcbn1cXG5cXG4uYWxpZ24tc2hpcHM+YnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgd2lkdGg6IDkwcHg7XFxufVxcblxcbi5idG4tcmVzdGFydCB7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5nYW1lLW92ZXIge1xcbiAgZm9udC1zaXplOiB4eHgtbGFyZ2U7XFxuICBjb2xvcjogI2MzY2JlYjtcXG4gIHRleHQtc2hhZG93OiAzcHggLTdweCA1cHggYmxhY2s7XFxufVxcblxcbi53aW5uZXIsXFxuLm5hbWUge1xcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG4gIGNvbG9yOiBjYWRldGJsdWU7XFxuICBtYXJnaW4tdG9wOiAtMTVweDtcXG4gIHRleHQtc2hhZG93OiAwcHggLTVweCAycHggYmxhY2s7XFxufVxcblxcbi5nYW1lLW92ZXItZGl2IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICByb3ctZ2FwOiA2MHB4O1xcbiAgY29sdW1uLWdhcDogNTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgcGFkZGluZzogMCA1cHg7XFxufVxcblxcbi5jb250YWluZXItZGl2MSxcXG4uY29udGFpbmVyLWRpdjIge1xcbiAgLyogbWFyZ2luOiBhdXRvOyAqL1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG59XFxuXFxuLmVycm9yLW1zZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogZ3JlZW55ZWxsb3c7XFxufVxcblxcbi5wbGF5ZXIsXFxuLnBsYXllcjIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNhNWExY2M7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5zZXQ7XFxuICBmb250LXZhcmlhbnQ6IHVuaWNhc2U7XFxufVxcblxcbi5wbGF5ZXIxLWJvYXJkLFxcbi5wbGF5ZXIyLWJvYXJkIHtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcygwLjcpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzFkMDBmZjtcXG4gIGJveC1zaGFkb3c6IDdweCA1cHggOXB4IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMCAxNiA2NCAvIDMwJSk7XFxufVxcblxcbi5wbGF5ZXIxLWdyaWQsXFxuLnBsYXllcjItZ3JpZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDdmZmY0O1xcbn1cXG5cXG4ucGxheWVyMS1ncmlkOmhvdmVyLFxcbi5wbGF5ZXIyLWdyaWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTgzLCAxODMpO1xcbn1cXG5cXG4ucmVkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGJvcmRlci1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcXG59XFxuXFxuLmdyZXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTgzLCAxODMpICFpbXBvcnRhbnQ7XFxuICBib3JkZXItY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XFxufVxcblxcbi5oaWRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnNob3cge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZmZmZjcwICFpbXBvcnRhbnQ7XFxuICBib3JkZXItY29sb3I6ICMwMDAwMDA5OSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2hvdHMge1xcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjc5ZTg1YzQgIWltcG9ydGFudDtcXG59XFxuXFxuLnZhbGlkLXNob3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMGJhICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zdW5rLXNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjNTNmMWE2ICFpbXBvcnRhbnQ7XFxufVxcblxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxMnB4O1xcbn1cXG5cXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiAjMTEyMjMzO1xcbn1cXG5cXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEyMjMzO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJpc3F1ZTtcXG59XFxuXFxuLmJsaW5raW5nIHtcXG4gIGFuaW1hdGlvbjogYmxpbmtpbmdCYWNrZ3JvdW5kIDJzIGluZmluaXRlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgNDAwbXM7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MjAwZWU7XFxuICBvdXRsaW5lOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm94LXNoYWRvdzogMXB4IDJweCAxcmVtIDBweCByZ2IoMCAwIDAgLyA5NSUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucmlwcGxlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICBhbmltYXRpb246IHJpcHBsZSA2MDBtcyBsaW5lYXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgbWFyZ2luLXRvcDogLTUwcHg7XFxuICBtYXJnaW4tbGVmdDogLTUwcHg7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJpcHBsZSB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSg0KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBibGlua2luZ0JhY2tncm91bmQge1xcbiAgMCUge1xcbiAgICBjb2xvcjogIzAwNDQzNTtcXG4gIH1cXG5cXG4gIDI1JSB7XFxuICAgIGNvbG9yOiAjYWM5ZGZmO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgY29sb3I6ICMxMzcwNTY7XFxuICB9XFxuXFxuICA3MCUge1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBjb2xvcjogIzI3MjA2MztcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG5cXG4gIC5jb250YWluZXItZGl2MSxcXG4gIC5jb250YWluZXItZGl2MiB7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgaGVpZ2h0OiAzNTBweDtcXG4gIH1cXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYTdhNztcXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbW9kdWxlcy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkI7Ozs7ZUFJYTtFQUNiLDRCQUE0QjtFQUM1QixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFVBQVU7RUFDViwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtFQUN6Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtC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QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTs7RUFFRTs7SUFFRSxZQUFZO0lBQ1osYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsNkJBQTZCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTAwJSxcXG4gICAgICAjMzQxNDA2ZTgsXFxuICAgICAgIzMzMyA1MCUsXFxuICAgICAgIzBmMTAxNyA3NSUsXFxuICAgICAgIzEyMyA3NSUpO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjdzO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdW5zZXQ7XFxufVxcblxcbmJvZHkub3BhY2l0eSB7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjdzO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuYm9keS5mYWRlIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbmhlYWRlciB7XFxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBib3JkZXI6IDBjaDtcXG59XFxuXFxuaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiBtaW4oMTV2dywgOHJlbSk7XFxuICBjb2xvcjogIzcxNWYzNjtcXG4gIHRleHQtc2hhZG93OiAzcHggLTdweCA1cHggYmxhY2s7XFxufVxcblxcbi5oMSB7XFxuICBmb250LXNpemU6IG1pbigxNXZ3LCA0cmVtKTtcXG59XFxuXFxuLmluc3RydWN0aW9uMiB7XFxuICBjb2xvcjogYmlzcXVlO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcbi5pbnB1dC1kaXYsXFxuLmdhbWUtb3Zlci1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE1cHg7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG59XFxuXFxuLmlucHV0LWRpdiB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC43cztcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XFxufVxcblxcbi5pbnB1dC1kaXYuZmFkZSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uYWxpZ24tc2hpcHMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG59XFxuXFxubGFiZWwge1xcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG4gIGNvbG9yOiBhcXVhbWFyaW5lO1xcbiAgY29sb3I6ICM5Y2RmZmZkZTtcXG4gIGZvbnQtdmFyaWFudDogdW5pY2FzZTtcXG59XFxuXFxuaW5wdXQge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uc2Vjb25kLWlucHV0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnN0YXJ0LWJ0biB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uY2hvb3NlLWRpdiB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjdzO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcXG59XFxuXFxuLmNob29zZS1kaXYuZmFkZSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uY2hvb3NlLWRpdj5wIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgY29sb3I6ICM5Y2RmZmZkZTtcXG4gIGZvbnQtdmFyaWFudDogdW5pY2FzZTtcXG59XFxuXFxuLmJ0bi1kaXYge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLnBsYXktaHVtYW4ge1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5wbGF5LWFpLFxcbi5wbGF5LWh1bWFuLFxcbi5idG4tcmVzdGFydCxcXG4uc3RhcnQtYnRuIHtcXG4gIHdpZHRoOiAxMTBweDtcXG4gIHBhZGRpbmc6IDE1cHggMDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4uYXhpcy1idG4ge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICB3aWR0aDogOTBweDtcXG59XFxuXFxuLmFsaWduLXNoaXBzPmJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIHdpZHRoOiA5MHB4O1xcbn1cXG5cXG4uYnRuLXJlc3RhcnQge1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uZ2FtZS1vdmVyIHtcXG4gIGZvbnQtc2l6ZTogeHh4LWxhcmdlO1xcbiAgY29sb3I6ICNjM2NiZWI7XFxuICB0ZXh0LXNoYWRvdzogM3B4IC03cHggNXB4IGJsYWNrO1xcbn1cXG5cXG4ud2lubmVyLFxcbi5uYW1lIHtcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICBjb2xvcjogY2FkZXRibHVlO1xcbiAgbWFyZ2luLXRvcDogLTE1cHg7XFxuICB0ZXh0LXNoYWRvdzogMHB4IC01cHggMnB4IGJsYWNrO1xcbn1cXG5cXG4uZ2FtZS1vdmVyLWRpdiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcm93LWdhcDogNjBweDtcXG4gIGNvbHVtbi1nYXA6IDUwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG5cXG4uY29udGFpbmVyLWRpdjEsXFxuLmNvbnRhaW5lci1kaXYyIHtcXG4gIC8qIG1hcmdpbjogYXV0bzsgKi9cXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxufVxcblxcbi5lcnJvci1tc2cge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IGdyZWVueWVsbG93O1xcbn1cXG5cXG4ucGxheWVyLFxcbi5wbGF5ZXIyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjYTVhMWNjO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuc2V0O1xcbiAgZm9udC12YXJpYW50OiB1bmljYXNlO1xcbn1cXG5cXG4ucGxheWVyMS1ib2FyZCxcXG4ucGxheWVyMi1ib2FyZCB7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJyaWdodG5lc3MoMC43KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxZDAwZmY7XFxuICBib3gtc2hhZG93OiA3cHggNXB4IDlweCAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAgMTYgNjQgLyAzMCUpO1xcbn1cXG5cXG4ucGxheWVyMS1ncmlkLFxcbi5wbGF5ZXIyLWdyaWQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q3ZmZmNDtcXG59XFxuXFxuLnBsYXllcjEtZ3JpZDpob3ZlcixcXG4ucGxheWVyMi1ncmlkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE4MywgMTgzKTtcXG59XFxuXFxuLnJlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBib3JkZXItY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ncmV5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE4MywgMTgzKSAhaW1wb3J0YW50O1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaGlkZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5zaG93IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGZmZmY3MCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwOTkgIWltcG9ydGFudDtcXG59XFxuXFxuLnNob3RzIHtcXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3OWU4NWM0ICFpbXBvcnRhbnQ7XFxufVxcblxcbi52YWxpZC1zaG90IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDBiYSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc3Vuay1zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzUzZjFhNiAhaW1wb3J0YW50O1xcbn1cXG5cXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTJweDtcXG59XFxuXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogIzExMjIzMztcXG59XFxuXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMjIzMztcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBiaXNxdWU7XFxufVxcblxcbi5ibGlua2luZyB7XFxuICBhbmltYXRpb246IGJsaW5raW5nQmFja2dyb3VuZCAycyBpbmZpbml0ZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDQwMG1zO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjIwMGVlO1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGJveC1zaGFkb3c6IDFweCAycHggMXJlbSAwcHggcmdiKDAgMCAwIC8gOTUlKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnJpcHBsZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgYW5pbWF0aW9uOiByaXBwbGUgNjAwbXMgbGluZWFyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIG1hcmdpbi10b3A6IC01MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IC01MHB4O1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuQGtleWZyYW1lcyByaXBwbGUge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoNCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYmxpbmtpbmdCYWNrZ3JvdW5kIHtcXG4gIDAlIHtcXG4gICAgY29sb3I6ICMwMDQ0MzU7XFxuICB9XFxuXFxuICAyNSUge1xcbiAgICBjb2xvcjogI2FjOWRmZjtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIGNvbG9yOiAjMTM3MDU2O1xcbiAgfVxcblxcbiAgNzAlIHtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgY29sb3I6ICMyNzIwNjM7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuXFxuICAuY29udGFpbmVyLWRpdjEsXFxuICAuY29udGFpbmVyLWRpdjIge1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogMzUwcHg7XFxuICB9XFxufVxcblxcbmZvb3RlciB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmE3YTc7XFxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjcmVhdGUyREFycmF5KG51bSkge1xuICBjb25zdCBib2FyZCA9IG5ldyBBcnJheShudW0pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBib2FyZFtpXSA9IG5ldyBBcnJheShudW0pO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmRbaV0ubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIGJvYXJkW2ldW2pdID0gMDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYm9hcmQ7XG59XG5cbmV4cG9ydCB7Y3JlYXRlMkRBcnJheX07XG4iLCJpbXBvcnQgeyBodW1hblBsYXllcnMgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUdhbWVib2FyZCB9IGZyb20gXCIuL2RvbS1nYW1lYm9hcmRcIjtcbmltcG9ydCB7IGNyZWF0ZURvbUVsZW1lbnQgfSBmcm9tIFwiLi9oZWxwZXItZnVuY3Rpb25cIjtcbmltcG9ydCB7IGNyZWF0ZUlucHV0RWxlbSB9IGZyb20gXCIuL25hbWUtaW5wdXRcIjtcbmltcG9ydCB7IHBsYXllclNob3RzIH0gZnJvbSBcIi4vcGxheWVyLXZzLWNvbXB1dGVyXCI7XG5pbXBvcnQgeyBwcmV2ZW50RW1wdHlJbnB1dCB9IGZyb20gXCIuL2dldC1wbGF5ZXItbmFtZVwiO1xuaW1wb3J0IHsgYWRkSG92ZXIsIHJlc2V0U2hpcEhvdmVyIH0gZnJvbSBcIi4vc2hpcC1ob3ZlclwiO1xuaW1wb3J0IHsgYWRkUmlwcGxlRWZmZWN0IH0gZnJvbSBcIi4vcmlwcGxlLWJ1dHRvblwiO1xuXG4vKiogQ3JlYXRlcyBEaXYgY29udGFpbmVyIGZvciBjaG9vc2luZyB5b3VyIG9wcG9uZW50LiAqL1xuZnVuY3Rpb24gY2hvb3NlUGxheWVyKHBsYXllck5hbWUpIHtcbiAgY29uc3QgY2hvb3NlRGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImNob29zZS1kaXZcIiB9KTtcbiAgY29uc3QgYnRuRGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImJ0bi1kaXZcIiB9KTtcbiAgY29uc3QgcGxheUFpID0gY3JlYXRlRG9tRWxlbWVudChcImJ1dHRvblwiLCB7IGNsYXNzOiBcInBsYXktYWlcIiB9KTtcbiAgY29uc3QgcGxheUh1bWFuID0gY3JlYXRlRG9tRWxlbWVudChcImJ1dHRvblwiLCB7IGNsYXNzOiBcInBsYXktaHVtYW5cIiB9KTtcbiAgY29uc3QgaW5zdHJ1Y3Rpb24gPSBjcmVhdGVEb21FbGVtZW50KFwicFwiKTtcbiAgY29uc3QgYWxpZ25TaGlwRGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImFsaWduLXNoaXBzXCIgfSk7XG4gIGNvbnN0IGluc3RydWN0aW9uMiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJoM1wiLCB7IGNsYXNzOiBcImluc3RydWN0aW9uMlwiIH0pO1xuICBjb25zdCBuYW1lID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJuYW1lMVwiIH0pO1xuICBjb25zdCBheGlzQnRuID0gY3JlYXRlRG9tRWxlbWVudChcImJ1dHRvblwiLCB7IGNsYXNzOiBcImF4aXMtYnRuXCIgfSk7XG4gIGNvbnN0IGNvbnRpbnVlQnRuID0gY3JlYXRlRG9tRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgY2xhc3M6IFwiY29udGludWUtYnRuIGhpZGVcIixcbiAgfSk7XG4gIHBsYXlBaS50ZXh0Q29udGVudCA9IFwiUExBWSBBSVwiO1xuICBwbGF5SHVtYW4udGV4dENvbnRlbnQgPSBcIlBMQVkgSFVNQU5cIjtcbiAgYXhpc0J0bi50ZXh0Q29udGVudCA9IFwiSG9yaXpvbnRhbFwiO1xuICBjb250aW51ZUJ0bi50ZXh0Q29udGVudCA9IFwiTmV4dFwiO1xuICBidG5EaXYuYXBwZW5kKHBsYXlBaSwgcGxheUh1bWFuKTtcbiAgYWxpZ25TaGlwRGl2LmFwcGVuZChpbnN0cnVjdGlvbjIsIGF4aXNCdG4sIGNvbnRpbnVlQnRuKTtcbiAgbmFtZS50ZXh0Q29udGVudCA9IGBIZWxsbyAke3BsYXllck5hbWV9LGA7XG4gIGluc3RydWN0aW9uLnRleHRDb250ZW50ID0gXCJDaG9vc2UgWW91ciBFbmVteS5cIjtcbiAgY2hvb3NlRGl2LmFwcGVuZChuYW1lLCBpbnN0cnVjdGlvbiwgYnRuRGl2KTtcbiAgYWRkTGlzdGVuZXJUb0J0bihcbiAgICBjb250aW51ZUJ0bixcbiAgICBheGlzQnRuLFxuICAgIHBsYXlBaSxcbiAgICBhbGlnblNoaXBEaXYsXG4gICAgY2hvb3NlRGl2LFxuICAgIHBsYXlIdW1hblxuICApO1xuXG4gIHJldHVybiBjaG9vc2VEaXY7XG59XG5cbmZ1bmN0aW9uIGFkZExpc3RlbmVyVG9CdG4oXG4gIGNvbnRpbnVlQnRuLFxuICBheGlzQnRuLFxuICBwbGF5QWksXG4gIGFsaWduU2hpcERpdixcbiAgY2hvb3NlRGl2LFxuICBwbGF5SHVtYW5cbikge1xuICBjb250aW51ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVzZXRTaGlwSG92ZXIpO1xuICBjb25zdCBjaGFuZ2VBeGlzID0gKCkgPT5cbiAgICAoYXhpc0J0bi50ZXh0Q29udGVudCA9XG4gICAgICBheGlzQnRuLnRleHRDb250ZW50ID09PSBcIkhvcml6b250YWxcIiA/IFwiVmVydGljYWxcIiA6IFwiSG9yaXpvbnRhbFwiKTtcbiAgYXhpc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlQXhpcyk7XG4gIHBsYXlBaS5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwiY2xpY2tcIixcbiAgICBpbnNlcnRCb2FyZC5iaW5kKG51bGwsIGFsaWduU2hpcERpdiwgY2hvb3NlRGl2LCBwbGF5ZXJTaG90cylcbiAgKTtcbiAgcGxheUh1bWFuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJjbGlja1wiLFxuICAgIHBsYXllcjJOYW1lLmJpbmQobnVsbCwgY2hvb3NlRGl2LCBodW1hblBsYXllcnMsIGFsaWduU2hpcERpdilcbiAgKTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0Qm9hcmQoYWxpZ25TaGlwRGl2LCBjaG9vc2VEaXYsIHBsYXllclNob3QpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpO1xuICBjb25zdCBoZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcbiAgY29uc3QgeyBib2FyZENvbnRhaW5lciB9ID0gY3JlYXRlR2FtZWJvYXJkKCk7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImZhZGVcIik7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaDFcIik7XG4gICAgaGVhZC5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImZhZGVcIik7XG4gICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoYWxpZ25TaGlwRGl2LCBjaG9vc2VEaXYpO1xuICAgIGRvY3VtZW50LmJvZHkucmVwbGFjZUNoaWxkKGJvYXJkQ29udGFpbmVyLCBjaG9vc2VEaXYpO1xuICAgIGNvbnN0IHBsYXllck5hbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGxheWVyTmFtZVwiKSk7XG4gICAgY29uc3QgaW5zdHJ1Y3Rpb24yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnN0cnVjdGlvbjJcIik7XG4gICAgaW5zdHJ1Y3Rpb24yLnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZX0sIFBsYWNlIFlvdXIgU2hpcHMuYDtcbiAgICBhZGRIb3ZlcihcIi5wbGF5ZXIxLWdyaWRcIik7XG4gICAgYWRkSG92ZXIoXCIucGxheWVyMi1ncmlkXCIpO1xuICAgIHBsYXllclNob3QoKTtcbiAgICBzZXRQbGF5ZXJzTmFtZSgpO1xuICAgIGFkZFJpcHBsZUVmZmVjdCgpO1xuICB9LCA0MDApO1xufVxuXG5mdW5jdGlvbiBzZXRQbGF5ZXJzTmFtZSgpIHtcbiAgY29uc3QgcGxheWVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyXCIpO1xuICBjb25zdCBwbGF5ZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXIyXCIpO1xuICBjb25zdCBwbGF5ZXJOYW1lID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBsYXllck5hbWVcIikpO1xuICBjb25zdCBwbGF5ZXJOYW1lMiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwbGF5ZXIyTmFtZVwiKSk7XG4gIHBsYXllcjEudGV4dENvbnRlbnQgPSBgUGxheWVyIDE6ICR7cGxheWVyTmFtZX1gO1xuICBwbGF5ZXIyLnRleHRDb250ZW50ID0gYFBsYXllciAyOiAke3BsYXllck5hbWUyfWA7XG59XG5cbmZ1bmN0aW9uIHBsYXllcjJOYW1lKGNob29zZURpdiwgcGxheWVyU2hvdCwgYWxpZ25TaGlwRGl2KSB7XG4gIGNvbnN0IHsgaW5wdXREaXYsIHN0YXJ0QnRuLCBuYW1lSW5wdXQgfSA9IGNyZWF0ZUlucHV0RWxlbShcbiAgICBcIkVudGVyIEh1bWFuIE5hbWVcIixcbiAgICBcIkNvbnRpbnVlXCJcbiAgKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiZmFkZVwiKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiZmFkZVwiKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlcGxhY2VDaGlsZChpbnB1dERpdiwgY2hvb3NlRGl2KTtcbiAgICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgcGxheWVyMUJvYXJkLmJpbmQobnVsbCwgbmFtZUlucHV0LCBpbnB1dERpdiwgcGxheWVyU2hvdCwgYWxpZ25TaGlwRGl2KVxuICAgICk7XG4gICAgYWRkUmlwcGxlRWZmZWN0KCk7XG4gIH0sIDQwMCk7XG59XG5cbmZ1bmN0aW9uIHBsYXllcjFCb2FyZChuYW1lSW5wdXQsIGlucHV0RGl2LCBwbGF5ZXJTaG90LCBhbGlnblNoaXBEaXYpIHtcbiAgaWYgKG5hbWVJbnB1dC52YWx1ZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICBwcmV2ZW50RW1wdHlJbnB1dChuYW1lSW5wdXQpO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZChcInNlY29uZC1pbnB1dFwiKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwbGF5ZXIyTmFtZVwiLCBKU09OLnN0cmluZ2lmeShgJHtuYW1lSW5wdXQudmFsdWV9YCkpO1xuICBpbnNlcnRCb2FyZChhbGlnblNoaXBEaXYsIGlucHV0RGl2LCBwbGF5ZXJTaG90KTtcbn1cblxuZXhwb3J0IHsgY2hvb3NlUGxheWVyIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVEb21FbGVtZW50IH0gZnJvbSBcIi4vaGVscGVyLWZ1bmN0aW9uXCI7XG5cbi8qKiBDcmVhdGVzIERPTSBnYW1lYm9hcmQgKi9cbmZ1bmN0aW9uIGNyZWF0ZUdhbWVib2FyZCgpIHtcbiAgY29uc3QgYm9hcmRDb250YWluZXIgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiYm9hcmQtY29udGFpbmVyXCIgfSk7XG4gIGNvbnN0IGNvbnRhaW5lckRpdjEgPSBjcmVhdGVEb21FbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiY29udGFpbmVyLWRpdjFcIiB9KTtcbiAgY29uc3QgY29udGFpbmVyRGl2MiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJjb250YWluZXItZGl2MiBoaWRlXCIgfSk7XG4gIGNvbnN0IHBsYXllcjEgPSBjcmVhdGVEb21FbGVtZW50KFwiaDNcIiwgeyBjbGFzczogXCJwbGF5ZXJcIiB9KTtcbiAgY29uc3QgcGxheWVyMiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJoM1wiLCB7IGNsYXNzOiBcInBsYXllcjJcIiB9KTtcbiAgY29uc3QgZ3JpZHMgPSAocGxheWVyLCBwbGF5ZXJHcmlkKSA9PiB7XG4gICAgY29uc3Qgc3F1YXJlID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBwbGF5ZXIgfSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgICAgY29uc3QgZ3JpZCA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogcGxheWVyR3JpZCB9KTtcbiAgICAgIHNxdWFyZS5hcHBlbmRDaGlsZChncmlkKTtcbiAgICB9XG4gICAgcmV0dXJuIHNxdWFyZTtcbiAgfTtcbiAgY29udGFpbmVyRGl2MS5hcHBlbmQocGxheWVyMSwgZ3JpZHMoXCJwbGF5ZXIxLWJvYXJkXCIsIFwicGxheWVyMS1ncmlkIHNwYWNlXCIpKTtcbiAgY29udGFpbmVyRGl2Mi5hcHBlbmQoXG4gICAgcGxheWVyMixcbiAgICBncmlkcyhcInBsYXllcjItYm9hcmQgaGlkZVwiLCBcInBsYXllcjItZ3JpZCBzcGFjZVwiKVxuICApO1xuICBib2FyZENvbnRhaW5lci5hcHBlbmQoY29udGFpbmVyRGl2MSwgY29udGFpbmVyRGl2Mik7XG4gIHJldHVybiB7IGJvYXJkQ29udGFpbmVyIH07XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUdhbWVib2FyZCB9O1xuIiwiaW1wb3J0IHsgaGl0LCBpc1N1bmtTaGlwQXJyIH0gZnJvbSBcIi4vcGxheWVyLXZzLWNvbXB1dGVyXCI7XG5cbmxldCBpbmRleDI7XG5sZXQgdmlzaXRlZEluZGV4ID0gbnVsbDtcbmxldCBwb3NzaWJsZVZhbGlkU2hvdHMgPSBbXTtcbmxldCBjdXJyZW50U2hpcENsYXNzO1xubGV0IGZpcnN0SGl0O1xuXG5mdW5jdGlvbiBjb21wdXRlclNob3RzKCkge1xuICBjb25zdCBhcnJJbmRleCA9IFtdO1xuICBjb25zdCBwbGF5ZXJCb2FyZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllcjEtZ3JpZFwiKTtcbiAgY29uc3QgcHVzaEl0ID0gKHNxdWFyZSwgaW5kZXgpID0+IHtcbiAgICBpZiAoc3F1YXJlLmNsYXNzTGlzdFsxXSA9PT0gXCJzcGFjZVwiKSBhcnJJbmRleC5wdXNoKGluZGV4KTtcbiAgfTtcbiAgcGxheWVyQm9hcmQyLmZvckVhY2gocHVzaEl0KTtcbiAgY29uc3QgcmFuTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGFyckluZGV4Lmxlbmd0aCAtIDEpKTtcbiAgaW5kZXgyID0gYXJySW5kZXhbcmFuTnVtXTtcbiAgZmluZFZhbGlkSGl0T25TaGlwKGFyckluZGV4LCByYW5OdW0sIHBsYXllckJvYXJkMik7XG4gIGNvbnN0IGdyaWQyID0gcGxheWVyQm9hcmQyWytpbmRleDJdO1xuICBpZiAoZ3JpZDIpIGdyaWQyLmNsYXNzTGlzdC5yZW1vdmUoXCJzcGFjZVwiKTtcbiAgcmV0dXJuIHsgZ3JpZDIsIGluZGV4MiwgcGxheWVyQm9hcmQyIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRWYWxpZEhpdE9uU2hpcChhcnJJbmRleCwgcmFuTnVtLCBwbGF5ZXJCb2FyZDIpIHtcbiAgaWYgKGhpdCAmJiB2aXNpdGVkSW5kZXggPj0gMSkge1xuICAgIHZpc2l0ZWRJbmRleCA9IHZpc2l0ZWRJbmRleCAtIDE7XG4gICAgcmVtb3ZlRnJvbUFycmF5KDAsICtwb3NzaWJsZVZhbGlkU2hvdHNbMF0gLSAxKTtcbiAgICByZW1vdmVGcm9tQXJyYXkoMSwgK3Bvc3NpYmxlVmFsaWRTaG90c1sxXSArIDEpO1xuICAgIHJlbW92ZUZyb21BcnJheSgyLCArcG9zc2libGVWYWxpZFNob3RzWzJdICsgMTApO1xuICAgIHJlbW92ZUZyb21BcnJheSgzLCArcG9zc2libGVWYWxpZFNob3RzWzNdIC0gMTApO1xuICAgIGluY3JlYXNlVmlzaXRlZEluZGV4KHBsYXllckJvYXJkMik7XG4gICAgdmlzaXRlZEluZGV4ICs9IDE7XG4gIH1cbiAgaWYgKGhpdCAmJiB2aXNpdGVkSW5kZXggPT09IG51bGwpIHtcbiAgICBmaXJzdEhpdCA9ICtoaXRbMF07XG4gICAgY29uc3Qgc3BsaXRIaXQgPSBoaXRbMF0uc3BsaXQoXCJcIik7XG4gICAgcG9zc2libGVWYWxpZFNob3RzID0gW1xuICAgICAgc3BsaXRIaXRbMF0gKyAoK3NwbGl0SGl0WzFdIC0gMSksXG4gICAgICBzcGxpdEhpdFswXSArICgrc3BsaXRIaXRbMV0gKyAxKSxcbiAgICAgICtzcGxpdEhpdFswXSArIDEgKyBzcGxpdEhpdFsxXSxcbiAgICAgICtzcGxpdEhpdFswXSAtIDEgKyBzcGxpdEhpdFsxXSxcbiAgICBdO1xuICAgIHZpc2l0ZWRJbmRleCA9IDA7XG4gICAgaW5jcmVhc2VWaXNpdGVkSW5kZXgocGxheWVyQm9hcmQyKTtcbiAgICBpbmNyZWFzZVZpc2l0ZWRJbmRleChwbGF5ZXJCb2FyZDIpO1xuICAgIGluY3JlYXNlVmlzaXRlZEluZGV4KHBsYXllckJvYXJkMik7XG4gICAgdmlzaXRlZEluZGV4ICs9IDE7XG4gIH1cbiAgaWYgKGhpdCA9PT0gdW5kZWZpbmVkICYmIHZpc2l0ZWRJbmRleCA+PSAxICYmIHZpc2l0ZWRJbmRleCA8IDQpIHtcbiAgICBpbmNyZWFzZVZpc2l0ZWRJbmRleChwbGF5ZXJCb2FyZDIpO1xuICAgIGluY3JlYXNlVmlzaXRlZEluZGV4KHBsYXllckJvYXJkMik7XG4gICAgdmlzaXRlZEluZGV4ICs9IDE7XG4gIH1cbiAgaWYgKGlzU3Vua1NoaXBBcnIgJiYgaXNTdW5rU2hpcEFyci5pbmNsdWRlcyh0cnVlKSkge1xuICAgIHBvc3NpYmxlVmFsaWRTaG90cyA9IFtdO1xuICAgIGluZGV4MiA9IGFyckluZGV4W3Jhbk51bV07XG4gICAgdmlzaXRlZEluZGV4ID0gbnVsbDtcbiAgICBmaXJzdEhpdCA9IG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlRnJvbUFycmF5KGluZGV4LCBleHByZXNzaW9uKSB7XG4gIGlmICh2aXNpdGVkSW5kZXggPT09IGluZGV4KSB7XG4gICAgaW5kZXgyID0gZXhwcmVzc2lvbjtcbiAgICBwb3NzaWJsZVZhbGlkU2hvdHMuc3BsaWNlKGluZGV4LCAxLCBpbmRleDIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluY3JlYXNlVmlzaXRlZEluZGV4KHBsYXllckJvYXJkMikge1xuICBpbmRleDIgPSBwb3NzaWJsZVZhbGlkU2hvdHNbdmlzaXRlZEluZGV4XTtcbiAgaWYgKCtpbmRleDIgPCAwKSB7XG4gICAgdmlzaXRlZEluZGV4ICs9IDE7XG4gICAgaW5kZXgyID0gcG9zc2libGVWYWxpZFNob3RzW3Zpc2l0ZWRJbmRleF07XG4gIH0gZWxzZSBpZiAoK2luZGV4MiA+IDk5KSB7XG4gICAgdmlzaXRlZEluZGV4ICs9IDE7XG4gICAgaW5kZXgyID0gcG9zc2libGVWYWxpZFNob3RzW3Zpc2l0ZWRJbmRleF07XG4gIH0gZWxzZSBpZiAoTnVtYmVyLmlzTmFOKCtpbmRleDIpKSB7XG4gICAgdmlzaXRlZEluZGV4ICs9IDE7XG4gICAgaW5kZXgyID0gcG9zc2libGVWYWxpZFNob3RzW3Zpc2l0ZWRJbmRleF07XG4gIH0gZWxzZSBpZiAoaW5kZXgyID09PSBcIjAxMFwiKSB7XG4gICAgdmlzaXRlZEluZGV4ICs9IDE7XG4gICAgaW5kZXgyID0gcG9zc2libGVWYWxpZFNob3RzW3Zpc2l0ZWRJbmRleF07XG4gIH0gZWxzZSBpZiAoXG4gICAgcGxheWVyQm9hcmQyWytpbmRleDJdICYmXG4gICAgQXJyYXkuZnJvbShwbGF5ZXJCb2FyZDJbK2luZGV4Ml0uY2xhc3NMaXN0KS5pbmNsdWRlcyhcInNob3RzXCIpXG4gICkge1xuICAgIHZpc2l0ZWRJbmRleCArPSAxO1xuICAgIGluZGV4MiA9IHBvc3NpYmxlVmFsaWRTaG90c1t2aXNpdGVkSW5kZXhdO1xuICB9XG4gIGlmIChcbiAgICBmaXJzdEhpdCAmJlxuICAgIHBsYXllckJvYXJkMlsraW5kZXgyXSAmJlxuICAgIEFycmF5LmZyb20ocGxheWVyQm9hcmQyWytpbmRleDJdLmNsYXNzTGlzdCkuaW5jbHVkZXMoXCJzaGlwXCIpXG4gICkge1xuICAgIEFycmF5LmZyb20ocGxheWVyQm9hcmQyW2ZpcnN0SGl0XS5jbGFzc0xpc3QpLmZvckVhY2goKGtsYXNzKSA9PiB7XG4gICAgICBjb25zdCBzcGxpdFRvQXJyYXkgPSBrbGFzcy5zcGxpdChcIlwiKTtcbiAgICAgIGNvbnN0IGxhc3RMZXR0ZXIgPSBzcGxpdFRvQXJyYXlba2xhc3MubGVuZ3RoIC0gMV07XG4gICAgICBpZiAoIU51bWJlci5pc05hTigrbGFzdExldHRlcikpIGN1cnJlbnRTaGlwQ2xhc3MgPSBrbGFzcztcbiAgICB9KTtcbiAgICBpZiAoXG4gICAgICAhQXJyYXkuZnJvbShwbGF5ZXJCb2FyZDJbK2luZGV4Ml0uY2xhc3NMaXN0KS5pbmNsdWRlcyhjdXJyZW50U2hpcENsYXNzKVxuICAgICkge1xuICAgICAgdmlzaXRlZEluZGV4ICs9IDE7XG4gICAgICBpbmRleDIgPSBwb3NzaWJsZVZhbGlkU2hvdHNbdmlzaXRlZEluZGV4XTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgY29tcHV0ZXJTaG90cyB9O1xuIiwiaW1wb3J0IHsgY2hvb3NlUGxheWVyIH0gZnJvbSBcIi4vY2hvb3NlLXBsYXllclwiO1xuaW1wb3J0IHsgY3JlYXRlSW5wdXRFbGVtIH0gZnJvbSBcIi4vbmFtZS1pbnB1dFwiO1xuaW1wb3J0IHsgYWRkUmlwcGxlRWZmZWN0IH0gZnJvbSBcIi4vcmlwcGxlLWJ1dHRvblwiO1xuXG5mdW5jdGlvbiBnZXROYW1lKG5hbWVEZXRhaWxzKSB7XG4gIGNvbnN0IHsgaW5wdXREaXYsIHN0YXJ0QnRuLCBuYW1lSW5wdXQgfSA9IGNyZWF0ZUlucHV0RWxlbShcbiAgICBuYW1lRGV0YWlscyxcbiAgICBcIlNUQVJUIEdBTUVcIlxuICApO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChpbnB1dERpdik7XG4gIGdldElucHV0VmFsdWUoc3RhcnRCdG4sIG5hbWVJbnB1dCk7XG59XG5cbmZ1bmN0aW9uIGdldElucHV0VmFsdWUoc3RhcnRCdG4sIG5hbWVJbnB1dCkge1xuICBjb25zdCBnZXROYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC1kaXZcIik7XG4gIGNvbnN0IHJlcGxhY2VOYW1lRGl2ID0gKCkgPT4ge1xuICAgIGlmIChuYW1lSW5wdXQudmFsdWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICBwcmV2ZW50RW1wdHlJbnB1dChuYW1lSW5wdXQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJmYWRlXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiZmFkZVwiKTtcbiAgICAgIGNvbnN0IGNob29zZURpdiA9IGNob29zZVBsYXllcihuYW1lSW5wdXQudmFsdWUpO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZXBsYWNlQ2hpbGQoY2hvb3NlRGl2LCBnZXROYW1lRGl2KTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicGxheWVyTmFtZVwiLCBKU09OLnN0cmluZ2lmeShgJHtuYW1lSW5wdXQudmFsdWV9YCkpO1xuICAgICAgYWRkUmlwcGxlRWZmZWN0KCk7XG4gICAgfSwgNTAwKTtcbiAgfTtcbiAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlcGxhY2VOYW1lRGl2KTtcbn1cblxuZnVuY3Rpb24gcHJldmVudEVtcHR5SW5wdXQobmFtZUlucHV0KSB7XG4gIGNvbnN0IGVycm9yTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvci1tc2dcIik7XG4gIGVycm9yTXNnLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBlcnJvck1zZy5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICBuYW1lSW5wdXQudmFsdWUgPSBcIlwiO1xuICB9LCAyMDAwKTtcbn1cblxuZXhwb3J0IHsgZ2V0TmFtZSwgcHJldmVudEVtcHR5SW5wdXQgfTtcbiIsImZ1bmN0aW9uIGNyZWF0ZURvbUVsZW1lbnQodHlwZSwgYXR0cmlidXRlcykge1xuICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApO1xuICBpZiAoYXR0cmlidXRlcyA9PSBudWxsKSByZXR1cm4gbmV3RWxlbWVudDtcbiAgc2V0QXR0cmlidXRlcyhuZXdFbGVtZW50LCBhdHRyaWJ1dGVzKTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuICBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7Y3JlYXRlRG9tRWxlbWVudH07XG4iLCJpbXBvcnQgeyBjcmVhdGVEb21FbGVtZW50IH0gZnJvbSBcIi4vaGVscGVyLWZ1bmN0aW9uXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUlucHV0RWxlbShuYW1lRGV0YWlscywgYnRuTmFtZSkge1xuICBjb25zdCBpbnB1dERpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJpbnB1dC1kaXZcIiB9KTtcbiAgY29uc3QgbGFiZWwgPSBjcmVhdGVEb21FbGVtZW50KFwibGFiZWxcIiwgeyBmb3I6IFwibmFtZVwiIH0pO1xuICBjb25zdCBuYW1lSW5wdXQgPSBjcmVhdGVEb21FbGVtZW50KFwiaW5wdXRcIiwge1xuICAgIGlkOiBcIm5hbWVcIixcbiAgICB0eXBlOiBcInRleHRcIixcbiAgICBwbGFjZWhvbGRlcjogXCJMZXRhbVwiLFxuICB9KTtcbiAgY29uc3QgZXJyb3JNc2cgPSBjcmVhdGVEb21FbGVtZW50KFwic3BhblwiLCB7IGNsYXNzOiBcImVycm9yLW1zZyBoaWRlXCIgfSk7XG4gIGNvbnN0IHN0YXJ0QnRuID0gY3JlYXRlRG9tRWxlbWVudChcImJ1dHRvblwiLCB7IGNsYXNzOiBcInN0YXJ0LWJ0blwiIH0pO1xuXG4gIGVycm9yTXNnLnRleHRDb250ZW50ID0gXCJFbnRlciBBIFZhbGlkIE5hbWVcIjtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBuYW1lRGV0YWlscztcbiAgc3RhcnRCdG4udGV4dENvbnRlbnQgPSBidG5OYW1lO1xuICBpbnB1dERpdi5hcHBlbmQobGFiZWwsIG5hbWVJbnB1dCwgZXJyb3JNc2csIHN0YXJ0QnRuKTtcbiAgcmV0dXJuIHsgaW5wdXREaXYsIHN0YXJ0QnRuLCBuYW1lSW5wdXQgfTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlSW5wdXRFbGVtIH07XG4iLCJpbXBvcnQge2NyZWF0ZURvbUVsZW1lbnR9IGZyb20gXCIuL2hlbHBlci1mdW5jdGlvblwiO1xuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGNyZWF0ZURvbUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGNvbnN0IGFuY2hvckxpbmsgPSBjcmVhdGVEb21FbGVtZW50KFwiYVwiLCB7XG4gICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vSUFtWW91bmdib3NzeS9iYXR0bGVzaGlwXCIsXG4gIH0pO1xuICBjb25zdCBnaXRIdWJJY29uID0gY3JlYXRlRG9tRWxlbWVudChcImlcIiwgeyBjbGFzczogXCJmYSBmYS1naXRodWJcIiB9KTtcbiAgYW5jaG9yTGluay5hcHBlbmRDaGlsZChnaXRIdWJJY29uKTtcbiAgZm9vdGVyLmFwcGVuZChcIkNvcHlyaWdodCBcXHUwMEE5IDIwMjIgSUFtWW91bmdib3NzeVwiLCBcIiAgXCIsIGFuY2hvckxpbmspO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmV4cG9ydCAge2NyZWF0ZUZvb3Rlcn07XG4iLCJpbXBvcnQgeyBjcmVhdGVGb290ZXIgfSBmcm9tIFwiLi9wYWdlLWZvb3RlclwiO1xuaW1wb3J0IHsgZ2V0TmFtZSB9IGZyb20gXCIuL2dldC1wbGF5ZXItbmFtZVwiO1xuaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSBcIi4vcGFnZS1oZWFkZXJcIjtcbmltcG9ydCB7IGNyZWF0ZURvbUVsZW1lbnQgfSBmcm9tIFwiLi9oZWxwZXItZnVuY3Rpb25cIjtcbmltcG9ydCB7IHJlc2V0UGxheWVyVnNDb21wdXRlciB9IGZyb20gXCIuL3BsYXllci12cy1jb21wdXRlclwiO1xuaW1wb3J0IHsgcmVzZXRIdW1hblBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgcmVzZXRTaGlwSG92ZXIgfSBmcm9tIFwiLi9zaGlwLWhvdmVyXCI7XG5pbXBvcnQgeyBhZGRSaXBwbGVFZmZlY3QgfSBmcm9tIFwiLi9yaXBwbGUtYnV0dG9uXCI7XG5cbmZ1bmN0aW9uIHJlbmRlckdldE5hbWVQYWdlKCkge1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIGNyZWF0ZUhlYWRlcihcInBhZ2Utb25lLWhlYWRlclwiKTtcbiAgZ2V0TmFtZShcIkVudGVyIFBsYXllcidzIE5hbWU6XCIpO1xuICBjcmVhdGVGb290ZXIoKTtcbn1cblxuZnVuY3Rpb24gYW5ub3VuY2VXaW5uZXIocGxheWVyTmFtZSkge1xuICBjb25zdCBnYW1lT3ZlckRpdiA9IGNyZWF0ZURvbUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJnYW1lLW92ZXItZGl2XCIgfSk7XG4gIGNvbnN0IGdhbWVPdmVyID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJnYW1lLW92ZXIgYmxpbmtpbmdcIiB9KTtcbiAgY29uc3Qgd2lubmVyID0gY3JlYXRlRG9tRWxlbWVudChcInBcIiwgeyBjbGFzczogXCJ3aW5uZXJcIiB9KTtcbiAgY29uc3QgbmFtZSA9IGNyZWF0ZURvbUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwibmFtZVwiIH0pO1xuICBjb25zdCByZXN0YXJ0QnRuID0gY3JlYXRlRG9tRWxlbWVudChcImJ1dHRvblwiLCB7IGNsYXNzOiBcImJ0bi1yZXN0YXJ0XCIgfSk7XG4gIHJlc3RhcnRCdG4udGV4dENvbnRlbnQgPSBcIlJFU1RBUlRcIjtcbiAgZ2FtZU92ZXIudGV4dENvbnRlbnQgPSBcIkdBTUUgT1ZFUlwiO1xuICBuYW1lLnRleHRDb250ZW50ID0gcGxheWVyTmFtZTtcbiAgd2lubmVyLnRleHRDb250ZW50ID0gXCJUaGUgV2lubmVyIElzXCI7XG4gIGdhbWVPdmVyRGl2LmFwcGVuZChnYW1lT3Zlciwgd2lubmVyLCBuYW1lLCByZXN0YXJ0QnRuKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiZmFkZVwiKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiZmFkZVwiKTtcbiAgICByZW5kZXJHZXROYW1lUGFnZSgpO1xuICAgIGNvbnN0IGdldE5hbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LWRpdlwiKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlcGxhY2VDaGlsZChnYW1lT3ZlckRpdiwgZ2V0TmFtZURpdik7XG4gICAgcmVzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcmVyZW5kZXJHZXROYW1lUGFnZSgpKTtcbiAgICBhZGRSaXBwbGVFZmZlY3QoKTtcbiAgfSwgNDAwKTtcbn1cblxuZnVuY3Rpb24gcmVzdGFydCgpIHtcbiAgY29uc3QgcmVzdGFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGFsaWduRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGlnbi1zaGlwc1wiKTtcbiAgY29uc3QgYWxpZ25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRpbnVlLWJ0blwiKTtcbiAgY29uc3QgYXhpc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXhpcy1idG5cIik7XG4gIGlmIChhbGlnbkJ0bikgYWxpZ25EaXYucmVwbGFjZUNoaWxkKHJlc3RhcnQsIGFsaWduQnRuKTtcbiAgcmVzdGFydC50ZXh0Q29udGVudCA9IFwiUmVzdGFydFwiO1xuICBpZiAoYXhpc0J0bikgYXhpc0J0bi5yZW1vdmUoKTtcbiAgcmVzdGFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVyZW5kZXJHZXROYW1lUGFnZSk7XG59XG5cbmZ1bmN0aW9uIHJlcmVuZGVyR2V0TmFtZVBhZ2UoKSB7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImZhZGVcIik7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImZhZGVcIik7XG4gICAgd2hpbGUgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZClcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gIHJlbmRlckdldE5hbWVQYWdlKCk7XG4gIHJlc2V0U2hpcEhvdmVyKCk7XG4gIHJlc2V0UGxheWVyVnNDb21wdXRlcigpO1xuICByZXNldEh1bWFuUGxheWVyKCk7XG4gIGFkZFJpcHBsZUVmZmVjdCgpO1xuICB9LCA0MDApO1xufVxuXG5leHBvcnQgeyByZW5kZXJHZXROYW1lUGFnZSwgcmVzdGFydCwgYW5ub3VuY2VXaW5uZXIgfTtcbiIsImltcG9ydCB7Y3JlYXRlRG9tRWxlbWVudH0gZnJvbSBcIi4vaGVscGVyLWZ1bmN0aW9uXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcihjbGFzc05hbWUpIHtcbiAgY29uc3QgZ2FtZVRpdGxlID0gY3JlYXRlRG9tRWxlbWVudChcImgxXCIsIHsgY2xhc3M6IGNsYXNzTmFtZSB9KTtcbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlRG9tRWxlbWVudChcImhlYWRlclwiKTtcbiAgY29uc3QgeyBib2R5IH0gPSBkb2N1bWVudDtcbiAgZ2FtZVRpdGxlLnRleHRDb250ZW50ID0gXCJCQVRUTEVTSElQXCI7XG4gIGhlYWRlci5hcHBlbmQoZ2FtZVRpdGxlKTtcbiAgYm9keS5hcHBlbmQoaGVhZGVyKTtcbn1cblxuZXhwb3J0IHtjcmVhdGVIZWFkZXJ9O1xuIiwiaW1wb3J0IHtHYW1lYm9hcmR9IGZyb20gXCIuLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IHBsYWNlQ29tcHV0ZXJTaGlwcyB9IGZyb20gXCIuLi9wbGFjZVNoaXBzT25Cb2FyZFwiO1xuXG5mdW5jdGlvbiBzaG93U2hpcHNSYW5kb21seSgpIHtcbiAgY29uc3Qge1xuICAgIHBvc2l0aW9uU2hpcCwgcmVjZWl2ZUF0dGFjaywgYWxsU2hpcHNTdW5rLCBBcnIsXG4gIH0gPSBHYW1lYm9hcmQocGxhY2VDb21wdXRlclNoaXBzKTtcbiAgcG9zaXRpb25TaGlwKCk7XG4gIHJldHVybiB7IHJlY2VpdmVBdHRhY2ssIGFsbFNoaXBzU3VuaywgQXJyIH07XG59XG5cbmV4cG9ydCB7c2hvd1NoaXBzUmFuZG9tbHl9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbmltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IHBsYWNlUGxheWVyU2hpcHMgfSBmcm9tIFwiLi4vcGxhY2VTaGlwc09uQm9hcmRcIjtcbmltcG9ydCB7IHJlc3RhcnQgfSBmcm9tIFwiLi9wYWdlLWdldC1uYW1lXCI7XG5pbXBvcnQgeyBhZGRSaXBwbGVFZmZlY3QgfSBmcm9tIFwiLi9yaXBwbGUtYnV0dG9uXCI7XG5cbi8qKiBHZXRzIHNoaXBzIGNvb3JkaW5hdGVzIGZyb20gR2FtZWJvYXJkIGFuZCBkaXNwbGF5IGluIERPTSAqL1xuZnVuY3Rpb24gc2hvd1NoaXBzT25Cb2FyZChjbGFzc05hbWUpIHtcbiAgY29uc3QgYWxpZ24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF4aXMtYnRuXCIpO1xuICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y2xhc3NOYW1lfWApO1xuICBjb25zdCBpbnN0cnVjdGlvbjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluc3RydWN0aW9uMlwiKTtcbiAgY29uc3QgeyBib2FyZCwgcG9zaXRpb25TaGlwLCBhbGlnblNoaXAsIHJlY2VpdmVBdHRhY2ssIGFsbFNoaXBzU3VuaywgQXJyIH0gPVxuICAgIEdhbWVib2FyZChwbGFjZVBsYXllclNoaXBzKTtcblxuICBpZiAodGhpcy5jbGFzc0xpc3QgJiYgdGhpcy5jbGFzc0xpc3RbMF0gPT09IFwicGxheWVyMS1ncmlkXCIpIHtcbiAgICBjb25zdCBwbGF5ZXJOYW1lID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBsYXllck5hbWVcIikpO1xuICAgIGluc3RydWN0aW9uMi50ZXh0Q29udGVudCA9IGAke3BsYXllck5hbWV9LCBQbGFjZSBZb3VyIFNoaXBzLmA7XG4gIH1cblxuICBjb25zdCBhZGRMaXN0ZW5lciA9IChzcXVhcmUsIGluZGV4KSA9PiB7XG4gICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsIGFkZEJnQ29sb3IuYmluZChcbiAgICAgICAgdGhpcywgaW5kZXgsIHBvc2l0aW9uU2hpcCwgYm9hcmQsIHNxdWFyZXMsIEFyciwgaW5zdHJ1Y3Rpb24yXG4gICAgICApXG4gICAgKTtcbiAgfTtcbiAgYWxpZ24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFsaWduU2hpcCk7XG4gIHNxdWFyZXMuZm9yRWFjaChhZGRMaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgcmV0dXJuIFtyZWNlaXZlQXR0YWNrLCBBcnIsIGFsbFNoaXBzU3Vua107XG59XG5cbi8qKiBBZGRzIGJhY2tncm91bmQgY29sb3VyIGZvciBtaXNzZWQgc2hvdHMgKi9cbmZ1bmN0aW9uIGFkZEJnQ29sb3IoaW5kZXgsIHBvc2l0aW9uU2hpcCwgYm9hcmQsIHNxdWFyZXMsIEFyciwgaW5zdHJ1Y3Rpb24yKSB7XG4gIGNvbnN0IHBsYXllcjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcjEtYm9hcmRcIik7XG4gIGNvbnN0IHBsYXllcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcjItYm9hcmRcIik7XG4gIHBvc2l0aW9uU2hpcChpbmRleCk7XG4gIGJvYXJkLmZsYXQoKS5mb3JFYWNoKChpdGVtLCBpbmRleDIpID0+IHtcbiAgICBpZiAoaXRlbSA9PT0gMiB8fCBpdGVtID09PSAzIHx8IGl0ZW0gPT09IDQgfHwgaXRlbSA9PT0gNSB8fCBpdGVtID09PSA2KVxuICAgICAgc3F1YXJlc1tpbmRleDJdLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgIGlmIChpdGVtID09PSAyKSBzcXVhcmVzW2luZGV4Ml0uY2xhc3NMaXN0LmFkZChcInNoaXAyXCIpO1xuICAgIGlmIChpdGVtID09PSAzKSBzcXVhcmVzW2luZGV4Ml0uY2xhc3NMaXN0LmFkZChcInNoaXAzXCIpO1xuICAgIGlmIChpdGVtID09PSA2KSBzcXVhcmVzW2luZGV4Ml0uY2xhc3NMaXN0LmFkZChcInNoaXA2XCIpO1xuICAgIGlmIChpdGVtID09PSA0KSBzcXVhcmVzW2luZGV4Ml0uY2xhc3NMaXN0LmFkZChcInNoaXA0XCIpO1xuICAgIGlmIChpdGVtID09PSA1KSBzcXVhcmVzW2luZGV4Ml0uY2xhc3NMaXN0LmFkZChcInNoaXA1XCIpO1xuICB9KTtcblxuICBpZiAocGxheWVyMS5jbGFzc0xpc3RbMV0gPT09IFwiaGlkZVwiIHx8IHBsYXllcjIuY2xhc3NMaXN0WzFdID09PSBcImhpZGVcIikge1xuICAgIGlmIChBcnIubGVuZ3RoID09PSA1ICYmIHRoaXMgPT09IGRvY3VtZW50KSBzaG93RW5lbXlXYXRlcigpO1xuICAgIGVsc2UgaWYgKEFyci5sZW5ndGggPT09IDUpIHtcbiAgICAgIGlmICh0aGlzLmNsYXNzTGlzdFswXSA9PT0gXCJwbGF5ZXIyLWdyaWRcIilcbiAgICAgICAgaW5zdHJ1Y3Rpb24yLnRleHRDb250ZW50ID0gXCJDbGljayBPbiBOZXh0IFRvIFN0YXJ0IFBsYXlpbmdcIjtcbiAgICAgIGlmICh0aGlzLmNsYXNzTGlzdFswXSA9PT0gXCJwbGF5ZXIxLWdyaWRcIilcbiAgICAgICAgaW5zdHJ1Y3Rpb24yLnRleHRDb250ZW50ID0gXCJDbGljayBPbiBOZXh0IFRvIENvbnRpbnVlLlwiO1xuICAgICAgc2hvd0VuZW15LmNhbGwodGhpcyk7XG4gICAgfVxuICB9XG4gIGlmIChBcnJheS5mcm9tKHBsYXllcjEuY2xhc3NMaXN0KS5pbmNsdWRlcyhcImhpZGVcIikpIHJldHVybjtcbiAgaWYgKEFycmF5LmZyb20ocGxheWVyMi5jbGFzc0xpc3QpLmluY2x1ZGVzKFwiaGlkZVwiKSkgcmV0dXJuO1xuICBpZiAoQXJyLmxlbmd0aCA9PT0gNSAmJiB0aGlzICE9PSBkb2N1bWVudCkge1xuICAgIGJvYXJkLmZsYXQoKS5mb3JFYWNoKChpdGVtLCBpbmRleDIpID0+IHtcbiAgICAgIGlmIChpdGVtID09PSAyIHx8IGl0ZW0gPT09IDMgfHwgaXRlbSA9PT0gNCB8fCBpdGVtID09PSA1IHx8IGl0ZW0gPT09IDYpXG4gICAgICAgIHNxdWFyZXNbaW5kZXgyXS5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFwiKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vKiogRnVuY3Rpb24gZ2V0cyBjYWxsZWQgd2hlbiB5b3UgY2hvb3NlIHRvIHBsYXkgaHVtYW4gKi9cbmZ1bmN0aW9uIHNob3dFbmVteSgpIHtcbiAgY29uc3QgcGxheWVyTmFtZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwbGF5ZXIyTmFtZVwiKSk7XG4gIGNvbnN0IGluc3RydWN0aW9uMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5zdHJ1Y3Rpb24yXCIpO1xuICBjb25zdCBwbGF5ZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXIyLWJvYXJkXCIpO1xuICBjb25zdCBjb250YWluZXJEaXYyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItZGl2MlwiKTtcbiAgY29uc3QgcGxheWVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyMS1ib2FyZFwiKTtcbiAgY29uc3QgY29udGFpbmVyRGl2MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyLWRpdjFcIik7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllcjEtZ3JpZFwiKTtcbiAgY29uc3QgeyBzdGFydEJ0biwgY29udGludWVCdG4gfSA9IGNyZWF0ZVBsYXlCdG4oKTtcbiAgY29udGludWVCdG4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gIHN0YXJ0QnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXG4gIGNvbnN0IHNob3dTaGlwcyA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJmYWRlXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiZmFkZVwiKTtcbiAgICAgIGluc3RydWN0aW9uMi50ZXh0Q29udGVudCA9IGAke3BsYXllck5hbWV9LCBQbGFjZSBZb3VyIFNoaXBzLmA7XG4gICAgICBwbGF5ZXIyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgY29udGFpbmVyRGl2Mi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgIHBsYXllcjEuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICBjb250YWluZXJEaXYxLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgY29udGludWVCdG4uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICBzdGFydEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgIGdyaWQuZm9yRWFjaCgoc3FyKSA9PiB7XG4gICAgICAgIGlmIChBcnJheS5mcm9tKHNxci5jbGFzc0xpc3QpLmluY2x1ZGVzKFwic2hpcFwiKSlcbiAgICAgICAgICBzcXIuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBcIik7XG4gICAgICB9KTtcbiAgICAgIGFkZFJpcHBsZUVmZmVjdCgpO1xuICAgIH0sIDQwMCk7XG4gIH07XG5cbiAgY29uc3Qgc2hvd1NoaXBzMiA9ICgpID0+IHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXIyLWdyaWRcIik7XG4gICAgZ3JpZC5mb3JFYWNoKChzcXIpID0+IHtcbiAgICAgIGlmIChBcnJheS5mcm9tKHNxci5jbGFzc0xpc3QpLmluY2x1ZGVzKFwic2hpcFwiKSlcbiAgICAgICAgc3FyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwXCIpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImZhZGVcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJmYWRlXCIpO1xuICAgICAgaW5zdHJ1Y3Rpb24yLnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZX0sIHRha2UgYSBzaG90LmA7XG4gICAgICBwbGF5ZXIxLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgY29udGFpbmVyRGl2MS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgIGNvbnRhaW5lckRpdjIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICByZXN0YXJ0KCk7XG4gICAgICBhZGRSaXBwbGVFZmZlY3QoKTtcbiAgICB9LCA0MDApO1xuICB9O1xuXG4gIGlmICh0aGlzLmNsYXNzTGlzdFswXSA9PT0gXCJwbGF5ZXIxLWdyaWRcIilcbiAgICBjb250aW51ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1NoaXBzKTtcbiAgaWYgKHRoaXMuY2xhc3NMaXN0WzBdID09PSBcInBsYXllcjItZ3JpZFwiKVxuICAgIGNvbnRpbnVlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93U2hpcHMyKTtcbn1cblxuLyoqIEZ1bmN0aW9uIGdldHMgY2FsbGVkIHdoZW4geW91IGNob29zZSB0byBwbGF5IGFnYWluc3QgQ29tcHV0ZXIgKi9cbmZ1bmN0aW9uIHNob3dFbmVteVdhdGVyKCkge1xuICBjb25zdCBwbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcjItYm9hcmRcIik7XG4gIGNvbnN0IGNvbnRhaW5lckRpdjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lci1kaXYyXCIpO1xuICBjb25zdCB7IHN0YXJ0QnRuLCBpbnN0cnVjdGlvbiB9ID0gY3JlYXRlUGxheUJ0bigpO1xuICBhZGRSaXBwbGVFZmZlY3QoKTtcbiAgaW5zdHJ1Y3Rpb24udGV4dENvbnRlbnQgPSBcIkNsaWNrIFBsYXkgVG8gU3RhcnQgR2FtZS5cIjtcbiAgc3RhcnRCdG4udGV4dENvbnRlbnQgPSBcIlBsYXlcIjtcbiAgY29uc3Qgc2hvd1NoaXBzID0gKCkgPT4ge1xuICAgIHN0YXJ0QnRuLnRleHRDb250ZW50ID0gXCJQbGF5XCI7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiZmFkZVwiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImZhZGVcIik7XG4gICAgICBjb25zdCBwbGF5ZXJOYW1lID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBsYXllck5hbWVcIikpO1xuICAgICAgcGxheWVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgY29udGFpbmVyRGl2Mi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgIGluc3RydWN0aW9uLnRleHRDb250ZW50ID0gYFdhaXRpbmcgZm9yICR7cGxheWVyTmFtZX0ncyBzaG90YDtcbiAgICAgIHJlc3RhcnQoKTtcbiAgICAgIGFkZFJpcHBsZUVmZmVjdCgpO1xuICAgIH0sIDQwMCk7XG4gIH07XG4gIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93U2hpcHMpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQbGF5QnRuKCkge1xuICBjb25zdCBzaGlwQXhpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxpZ24tc2hpcHNcIik7XG4gIGNvbnN0IGNvbnRpbnVlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250aW51ZS1idG5cIik7XG4gIGNvbnN0IGluc3RydWN0aW9uID0gc2hpcEF4aXMuY2hpbGRyZW5bMF07XG4gIGNvbnN0IHN0YXJ0QnRuID0gc2hpcEF4aXMuY2hpbGRyZW5bMV07XG4gIGFkZFJpcHBsZUVmZmVjdCgpO1xuICByZXR1cm4geyBzdGFydEJ0biwgaW5zdHJ1Y3Rpb24sIGNvbnRpbnVlQnRuIH07XG59XG5cbmV4cG9ydCB7IHNob3dTaGlwc09uQm9hcmQgfTtcbiIsImltcG9ydCB7IGNvbXB1dGVyU2hvdHMgfSBmcm9tIFwiLi9maW5kLWVtcHR5LXNwb3RcIjtcbmltcG9ydCB7IHNob3dTaGlwc09uQm9hcmQgfSBmcm9tIFwiLi9wbGFjZS1zaGlwXCI7XG5pbXBvcnQgeyBzaG93U2hpcHNSYW5kb21seSB9IGZyb20gXCIuL3BsYWNlLXNoaXAtcmFuZG9tXCI7XG5pbXBvcnQgeyB2YWxpZFNob3RzIH0gZnJvbSBcIi4vdmFsaWQtaGl0XCI7XG5cbmxldCBoaXQ7XG5sZXQgdGltZSA9IDA7XG5sZXQgc3RvcEhlcmUgPSAwO1xubGV0IGlzU3Vua1NoaXBBcnI7XG5cbi8qKiBDaGVja3MgZm9yIHZhbGlkIHNob3RzIG9uIHNoaXBzICovXG5mdW5jdGlvbiBzaG90cyhzaG93U2hpcHMsIGNsYXNzTmFtZSkge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NsYXNzTmFtZX1gKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwbGF5ZXIyTmFtZVwiLCBKU09OLnN0cmluZ2lmeShcIkNvbXB1dGVyXCIpKTtcbiAgY29uc3QgeyByZWNlaXZlQXR0YWNrLCBhbGxTaGlwc1N1bmsgfSA9IHNob3dTaGlwcygpO1xuICBjb25zdCBbcmVjZWl2ZUF0dGFjazIsICwgYWxsU2hpcHNTdW5rMl0gPSBzaG93U2hpcHNPbkJvYXJkLmNhbGwoXG4gICAgZG9jdW1lbnQsXG4gICAgXCJwbGF5ZXIxLWdyaWRcIlxuICApO1xuICBjb25zdCBhZGRMaXN0ZW5lclRvR3JpZCA9IChncmlkLCBpbmRleCkgPT4gZ3JpZC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgYWx0ZXJuYXRlU2hvdHMuYmluZChcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZ3JpZCxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIHJlY2VpdmVBdHRhY2syLFxuICAgICAgICBwbGF5ZXJCb2FyZCxcbiAgICAgICAgYWxsU2hpcHNTdW5rLFxuICAgICAgICBhbGxTaGlwc1N1bmsyXG4gICAgICApXG4gICAgKTtcbiAgcGxheWVyQm9hcmQuZm9yRWFjaChhZGRMaXN0ZW5lclRvR3JpZCk7XG59XG5cbi8qKiBBbHRlcm5hdGUgc2hvdHMgYmV0d2VlbiBjb21wdXRlciBhbmQgcGxheWVyICovXG5mdW5jdGlvbiBhbHRlcm5hdGVTaG90cyhcbiAgZ3JpZCxcbiAgaW5kZXgsXG4gIHJlY2VpdmVBdHRhY2ssXG4gIHJlY2VpdmVBdHRhY2syLFxuICBwbGF5ZXJCb2FyZCxcbiAgYWxsU2hpcHNTdW5rLFxuICBhbGxTaGlwc1N1bmsyXG4pIHtcbiAgaWYgKHRpbWUgPT09IDEpIHJldHVybjtcbiAgaWYgKHN0b3BIZXJlID09PSAxKSByZXR1cm47XG4gIGlmIChBcnJheS5mcm9tKGdyaWQuY2xhc3NMaXN0KS5pbmNsdWRlcyhcInNob3RzXCIpKSByZXR1cm47XG4gIGNvbnN0IHBsYXllck5hbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGxheWVyTmFtZVwiKSk7XG4gIGNvbnN0IGluc3RydWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGlnbi1zaGlwc1wiKS5jaGlsZHJlblswXTtcbiAgaW5zdHJ1Y3Rpb24udGV4dENvbnRlbnQgPSBcIldhaXRpbmcgZm9yIENvbXB1dGVyJ3MgU2hvdC5cIjtcbiAgdmFsaWRTaG90cyhcbiAgICBncmlkLFxuICAgIGluZGV4LFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgcGxheWVyQm9hcmQsXG4gICAgYWxsU2hpcHNTdW5rLFxuICAgIGluc3RydWN0aW9uLFxuICAgIHBsYXllck5hbWVcbiAgKTtcbiAgdGltZSA9IDE7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdGltZSA9IDA7XG4gICAgY29uc3QgQUlOYW1lID0gXCJDb21wdXRlclwiO1xuICAgIGlmIChzdG9wSGVyZSA9PT0gMSkgcmV0dXJuO1xuICAgIGNvbnN0IHsgZ3JpZDIsIGluZGV4MiwgcGxheWVyQm9hcmQyIH0gPSBjb21wdXRlclNob3RzKCk7XG4gICAgaW5zdHJ1Y3Rpb24udGV4dENvbnRlbnQgPSBgV2FpdGluZyBmb3IgJHtwbGF5ZXJOYW1lfSdzIFNob3QuYDtcbiAgICBjb25zdCB7IGhpdENvb3JkLCBpc1N1bmtTaGlwQXJyYXkgfSA9IHZhbGlkU2hvdHMoXG4gICAgICBncmlkMixcbiAgICAgIGluZGV4MixcbiAgICAgIHJlY2VpdmVBdHRhY2syLFxuICAgICAgcGxheWVyQm9hcmQyLFxuICAgICAgYWxsU2hpcHNTdW5rMixcbiAgICAgIGluc3RydWN0aW9uLFxuICAgICAgQUlOYW1lXG4gICAgKTtcbiAgICBoaXQgPSBoaXRDb29yZDtcbiAgICBpc1N1bmtTaGlwQXJyID0gWy4uLmlzU3Vua1NoaXBBcnJheV07XG4gIH0sIDE1MDApO1xufVxuXG5mdW5jdGlvbiByZXNldFBsYXllclZzQ29tcHV0ZXIoKSB7XG4gIHRpbWUgPSAwO1xuICBzdG9wSGVyZSA9IDA7XG59XG5cbmZ1bmN0aW9uIHNldFN0b3BIZXJlKCkge1xuICBzdG9wSGVyZSA9IDE7XG59XG5cbmNvbnN0IHBsYXllclNob3RzID0gc2hvdHMuYmluZChudWxsLCBzaG93U2hpcHNSYW5kb21seSwgXCJwbGF5ZXIyLWdyaWRcIik7XG5leHBvcnQge1xuICBwbGF5ZXJTaG90cyxcbiAgc3RvcEhlcmUsXG4gIHJlc2V0UGxheWVyVnNDb21wdXRlcixcbiAgaXNTdW5rU2hpcEFycixcbiAgaGl0LFxuICBzZXRTdG9wSGVyZVxufTtcbiIsImltcG9ydCB7IHNob3dTaGlwc09uQm9hcmQgfSBmcm9tIFwiLi9wbGFjZS1zaGlwXCI7XG5pbXBvcnQgeyBzdG9wSGVyZSB9IGZyb20gXCIuL3BsYXllci12cy1jb21wdXRlclwiO1xuaW1wb3J0IHsgdmFsaWRTaG90cyB9IGZyb20gXCIuL3ZhbGlkLWhpdFwiO1xuXG5sZXQgY291bnQgPSAwO1xubGV0IGNvdW50MiA9IDA7XG5sZXQgdGltZSA9IDE7XG5cbi8qKiBDaGVja3MgZm9yIHZhbGlkIHNob3RzIG9uIHNoaXBzICovXG5mdW5jdGlvbiBwbGF5ZXIoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y2xhc3NOYW1lfWApO1xuICBjb25zdCBbcmVjZWl2ZUF0dGFjaywgQXJyLCBhbGxTaGlwc1N1bmtdID0gc2hvd1NoaXBzT25Cb2FyZC5jYWxsKFxuICAgIHBsYXllckJvYXJkWzBdLFxuICAgIGNsYXNzTmFtZVxuICApO1xuICBjb25zdCBhZGRMaXN0ZW5lclRvR3JpZCA9IChncmlkLCBpbmRleCkgPT4gZ3JpZC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgc2hvdHMuYmluZChcbiAgICAgICAgbnVsbCxcbiAgICAgICAgQXJyLFxuICAgICAgICBncmlkLFxuICAgICAgICBpbmRleCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgcGxheWVyQm9hcmQsXG4gICAgICAgIGFsbFNoaXBzU3Vua1xuICAgICAgKVxuICAgICk7XG4gIHBsYXllckJvYXJkLmZvckVhY2goYWRkTGlzdGVuZXJUb0dyaWQpO1xufVxuXG4vKiogU2hvdHMgYnkgcGxheWVyICovXG5mdW5jdGlvbiBzaG90cyhBcnIsIGdyaWQsIGluZGV4LCByZWNlaXZlQXR0YWNrLCBwbGF5ZXJCb2FyZCwgYWxsU2hpcHNTdW5rKSB7XG4gIGNvbnN0IHBsYXllcjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcjEtYm9hcmRcIik7XG4gIGNvbnN0IHBsYXllcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcjItYm9hcmRcIik7XG4gIGNvbnN0IHBsYXllck5hbWUxID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBsYXllck5hbWVcIikpO1xuICBjb25zdCBwbGF5ZXJOYW1lMiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwbGF5ZXIyTmFtZVwiKSk7XG4gIGNvbnN0IGluc3RydWN0aW9uMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5zdHJ1Y3Rpb24yXCIpO1xuXG4gIGlmIChBcnJheS5mcm9tKGdyaWQuY2xhc3NMaXN0KS5pbmNsdWRlcyhcInNob3RzXCIpKSByZXR1cm47XG4gIGlmIChncmlkLmNsYXNzTGlzdFswXSA9PT0gXCJwbGF5ZXIxLWdyaWRcIiAmJiBBcnIubGVuZ3RoID49IDUpIHtcbiAgICBpZiAoY291bnQgPj0gMSAmJiB0aW1lID09PSAwKSB7XG4gICAgICBpZiAoQXJyYXkuZnJvbShwbGF5ZXIxLmNsYXNzTGlzdCkuaW5jbHVkZXMoXCJoaWRlXCIpKSByZXR1cm47XG4gICAgICBpZiAoQXJyYXkuZnJvbShwbGF5ZXIyLmNsYXNzTGlzdCkuaW5jbHVkZXMoXCJoaWRlXCIpKSByZXR1cm47XG4gICAgICBpZiAoc3RvcEhlcmUgPT09IDEpIHJldHVybjtcbiAgICAgIGluc3RydWN0aW9uMi50ZXh0Q29udGVudCA9IGAke3BsYXllck5hbWUxfSwgdGFrZSB5b3VyIHNob3QuYDtcbiAgICAgIHZhbGlkU2hvdHMoXG4gICAgICAgIGdyaWQsXG4gICAgICAgIGluZGV4LFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBwbGF5ZXJCb2FyZCxcbiAgICAgICAgYWxsU2hpcHNTdW5rLFxuICAgICAgICBpbnN0cnVjdGlvbjIsXG4gICAgICAgIHBsYXllck5hbWUyXG4gICAgICApO1xuICAgIH1cbiAgICB0aW1lID0gMTtcbiAgICBjb3VudCArPSAxO1xuICB9XG4gIGlmIChncmlkLmNsYXNzTGlzdFswXSA9PT0gXCJwbGF5ZXIyLWdyaWRcIiAmJiBBcnIubGVuZ3RoID49IDUpIHtcbiAgICBpZiAoY291bnQyID49IDEgJiYgdGltZSA9PT0gMSkge1xuICAgICAgaWYgKEFycmF5LmZyb20ocGxheWVyMS5jbGFzc0xpc3QpLmluY2x1ZGVzKFwiaGlkZVwiKSkgcmV0dXJuO1xuICAgICAgaWYgKEFycmF5LmZyb20ocGxheWVyMi5jbGFzc0xpc3QpLmluY2x1ZGVzKFwiaGlkZVwiKSkgcmV0dXJuO1xuICAgICAgaW5zdHJ1Y3Rpb24yLnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZTJ9LCB0YWtlIHlvdXIgc2hvdC5gO1xuICAgICAgdmFsaWRTaG90cyhcbiAgICAgICAgZ3JpZCxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIHBsYXllckJvYXJkLFxuICAgICAgICBhbGxTaGlwc1N1bmssXG4gICAgICAgIGluc3RydWN0aW9uMixcbiAgICAgICAgcGxheWVyTmFtZTFcbiAgICAgICk7XG4gICAgfVxuICAgIHRpbWUgPSAwO1xuICAgIGNvdW50MiArPSAxO1xuICB9XG59XG5cbmZ1bmN0aW9uIGh1bWFuUGxheWVycygpIHtcbiAgcGxheWVyKFwicGxheWVyMS1ncmlkXCIpO1xuICBwbGF5ZXIoXCJwbGF5ZXIyLWdyaWRcIik7XG59XG5cbmZ1bmN0aW9uIHJlc2V0SHVtYW5QbGF5ZXIoKSB7XG4gIGNvdW50ID0gMDtcbiAgY291bnQyID0gMDtcbiAgdGltZSA9IDE7XG59XG5cbmV4cG9ydCB7IGh1bWFuUGxheWVycywgcmVzZXRIdW1hblBsYXllciB9O1xuIiwiZnVuY3Rpb24gY3JlYXRlUmlwcGxlKGV2ZW50KSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gIGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBkaWFtZXRlciA9IE1hdGgubWF4KGJ1dHRvbi5jbGllbnRXaWR0aCwgYnV0dG9uLmNsaWVudEhlaWdodCk7XG5cbiAgY2lyY2xlLnN0eWxlLndpZHRoID0gY2lyY2xlLmhlaWdodCA9IGAke2RpYW1ldGVyfXB4YDtcbiAgY2lyY2xlLnN0eWxlLmxlZnQgPSBgJHtldmVudC5jbGllbnRYIC0gYnV0dG9uLm9mZnNldExlZnR9cHhgO1xuICBjaXJjbGUuc3R5bGUudG9wID0gYCR7ZXZlbnQuY2xpZW50WSAtIGJ1dHRvbi5vZmZzZXRUb3B9cHhgO1xuICBjaXJjbGUuY2xhc3NMaXN0LmFkZChcInJpcHBsZVwiKTtcblxuICBjb25zdCByaXBwbGUgPSBidXR0b24uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInJpcHBsZVwiKVswXTtcbiAgaWYgKHJpcHBsZSkgcmlwcGxlLnJlbW92ZSgpO1xuICBidXR0b24uYXBwZW5kQ2hpbGQoY2lyY2xlKTtcbn1cblxuZnVuY3Rpb24gYWRkUmlwcGxlRWZmZWN0KCkge1xuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcbiAgZm9yIChjb25zdCBidXR0b24gb2YgYnV0dG9ucykge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBjcmVhdGVSaXBwbGUpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlUmlwcGxlKTtcbiAgfVxufVxuXG5leHBvcnQgeyBhZGRSaXBwbGVFZmZlY3QgfTtcbiIsImxldCBsZW5ndGhPZlNoaXAgPSA1O1xubGV0IGNvdW50ZXIgPSA1O1xuXG5mdW5jdGlvbiBhZGRIb3ZlcihjbGFzc05hbWUpIHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNsYXNzTmFtZSk7XG4gIHBsYXllckJvYXJkLmZvckVhY2gocGxhY2VTaGlwSG92ZXIpO1xuICBmdW5jdGlvbiBwbGFjZVNoaXBIb3ZlcihncmlkLCBpbmRleCkge1xuICAgIGNvbnN0IGF4aXMgPSBgJHtpbmRleH1gLnNwbGl0KFwiXCIpO1xuICAgIGlmIChheGlzLmxlbmd0aCA9PT0gMSkgYXhpcy51bnNoaWZ0KFwiMFwiKTtcbiAgICBjb25zdCBpbmRleEFyciA9IFtdO1xuICAgIGNvbnN0IHJlbW92ZUhvdmVyRWZmZWN0ID0gKGluZGV4KSA9PiB7XG4gICAgICBpZiAocGxheWVyQm9hcmRbK2luZGV4XSkgcGxheWVyQm9hcmRbK2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKFwiZ3JleVwiKTtcbiAgICB9O1xuICAgIGNvbnN0IGVtcHR5SW5kZXhBcnIgPSAoKSA9PiB7XG4gICAgICBpbmRleEFyci5mb3JFYWNoKHJlbW92ZUhvdmVyRWZmZWN0KTtcbiAgICAgIGluZGV4QXJyLnNwbGljZSgwKTtcbiAgICB9O1xuICAgIGNvbnN0IHNldFNoaXBMZW5ndGggPSAoKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIEFycmF5LmZyb20oZ3JpZC5jbGFzc0xpc3QpLmluY2x1ZGVzKFwiZ3JleVwiKSAmJlxuICAgICAgICAhQXJyYXkuZnJvbShncmlkLmNsYXNzTGlzdCkuaW5jbHVkZXMoXCJzaGlwXCIpXG4gICAgICApIHtcbiAgICAgICAgY291bnRlci0tO1xuICAgICAgICBpZiAoY291bnRlciA9PT0gNCkgbGVuZ3RoT2ZTaGlwID0gNDtcbiAgICAgICAgaWYgKGNvdW50ZXIgPT09IDMpIGxlbmd0aE9mU2hpcCA9IDM7XG4gICAgICAgIGlmIChjb3VudGVyID09PSAyKSBsZW5ndGhPZlNoaXAgPSAzO1xuICAgICAgICBpZiAoY291bnRlciA9PT0gMSkgbGVuZ3RoT2ZTaGlwID0gMjtcbiAgICAgICAgaWYgKGNvdW50ZXIgPT09IDApIGxlbmd0aE9mU2hpcCA9IDA7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBhZGRUb0luZGV4QXJyID0gKCkgPT4ge1xuICAgICAgY29uc3QgYXhpc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXhpcy1idG5cIik7XG4gICAgICBsZXQgaW5kZXgxLCBpbmRleDIsIGluZGV4MywgaW5kZXg0LCBpbmRleDU7XG4gICAgICBpZiAoYXhpc0J0biAmJiBheGlzQnRuLnRleHRDb250ZW50ID09PSBcIkhvcml6b250YWxcIikge1xuICAgICAgICBpbmRleDEgPSBgJHtheGlzWzBdfSR7YXhpc1sxXX1gO1xuICAgICAgICBpbmRleDIgPSBgJHtheGlzWzBdfSR7K2F4aXNbMV0gKyAxfWA7XG4gICAgICAgIGluZGV4MyA9IGAke2F4aXNbMF19JHsrYXhpc1sxXSArIDJ9YDtcbiAgICAgICAgaW5kZXg0ID0gYCR7YXhpc1swXX0keytheGlzWzFdICsgM31gO1xuICAgICAgICBpbmRleDUgPSBgJHtheGlzWzBdfSR7K2F4aXNbMV0gKyA0fWA7XG4gICAgICAgIHBsYXllckJvYXJkWytpbmRleDFdLmNsYXNzTGlzdC5hZGQoXCJyZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoYXhpc0J0biAmJiBheGlzQnRuLnRleHRDb250ZW50ID09PSBcIlZlcnRpY2FsXCIpIHtcbiAgICAgICAgaW5kZXgxID0gYCR7YXhpc1swXX0ke2F4aXNbMV19YDtcbiAgICAgICAgaW5kZXgyID0gYCR7K2Ake2F4aXNbMF19JHtheGlzWzFdfWAgKyAxMH1gO1xuICAgICAgICBpbmRleDMgPSBgJHsrYCR7YXhpc1swXX0ke2F4aXNbMV19YCArIDIwfWA7XG4gICAgICAgIGluZGV4NCA9IGAkeytgJHtheGlzWzBdfSR7YXhpc1sxXX1gICsgMzB9YDtcbiAgICAgICAgaW5kZXg1ID0gYCR7K2Ake2F4aXNbMF19JHtheGlzWzFdfWAgKyA0MH1gO1xuICAgICAgICBwbGF5ZXJCb2FyZFsraW5kZXgxXS5jbGFzc0xpc3QuYWRkKFwicmVkXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobGVuZ3RoT2ZTaGlwID09PSA1KSB7XG4gICAgICAgIGFkZE9ubHlWYWxpZFNwYWNlKGluZGV4MSwgaW5kZXhBcnIsIHBsYXllckJvYXJkKTtcbiAgICAgICAgYWRkT25seVZhbGlkU3BhY2UoaW5kZXgyLCBpbmRleEFyciwgcGxheWVyQm9hcmQpO1xuICAgICAgICBhZGRPbmx5VmFsaWRTcGFjZShpbmRleDMsIGluZGV4QXJyLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAgIGFkZE9ubHlWYWxpZFNwYWNlKGluZGV4NCwgaW5kZXhBcnIsIHBsYXllckJvYXJkKTtcbiAgICAgICAgYWRkT25seVZhbGlkU3BhY2UoaW5kZXg1LCBpbmRleEFyciwgcGxheWVyQm9hcmQpO1xuICAgICAgfVxuICAgICAgaWYgKGluZGV4MSAmJiBsZW5ndGhPZlNoaXAgPT09IDQpIHtcbiAgICAgICAgYWRkT25seVZhbGlkU3BhY2UoaW5kZXgxLCBpbmRleEFyciwgcGxheWVyQm9hcmQpO1xuICAgICAgICBhZGRPbmx5VmFsaWRTcGFjZShpbmRleDIsIGluZGV4QXJyLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAgIGFkZE9ubHlWYWxpZFNwYWNlKGluZGV4MywgaW5kZXhBcnIsIHBsYXllckJvYXJkKTtcbiAgICAgICAgYWRkT25seVZhbGlkU3BhY2UoaW5kZXg0LCBpbmRleEFyciwgcGxheWVyQm9hcmQpO1xuICAgICAgfVxuICAgICAgaWYgKGxlbmd0aE9mU2hpcCA9PT0gMykge1xuICAgICAgICBhZGRPbmx5VmFsaWRTcGFjZShpbmRleDEsIGluZGV4QXJyLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAgIGFkZE9ubHlWYWxpZFNwYWNlKGluZGV4MiwgaW5kZXhBcnIsIHBsYXllckJvYXJkKTtcbiAgICAgICAgYWRkT25seVZhbGlkU3BhY2UoaW5kZXgzLCBpbmRleEFyciwgcGxheWVyQm9hcmQpO1xuICAgICAgfVxuICAgICAgaWYgKGxlbmd0aE9mU2hpcCA9PT0gMikge1xuICAgICAgICBhZGRPbmx5VmFsaWRTcGFjZShpbmRleDEsIGluZGV4QXJyLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAgIGFkZE9ubHlWYWxpZFNwYWNlKGluZGV4MiwgaW5kZXhBcnIsIHBsYXllckJvYXJkKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFkZEhvdmVyRWZmZWN0ID0gKGluZGV4KSA9PlxuICAgICAgICBwbGF5ZXJCb2FyZFsraW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJncmV5XCIpO1xuICAgICAgbGV0IGNvdW50ZXIyID0gY291bnRlcjtcbiAgICAgIGlmIChjb3VudGVyIDw9IDIpIGNvdW50ZXIyID0gY291bnRlciArIDE7XG4gICAgICBpZiAoaW5kZXhBcnIubGVuZ3RoID09PSBjb3VudGVyMikge1xuICAgICAgICBpbmRleEFyci5mb3JFYWNoKGFkZEhvdmVyRWZmZWN0KTtcbiAgICAgIH1cbiAgICAgIGlmIChjb3VudGVyIDwgMSlcbiAgICAgICAgcGxheWVyQm9hcmQuZm9yRWFjaCgoc3FyKSA9PiBzcXIuY2xhc3NMaXN0LnJlbW92ZShcInJlZFwiKSk7XG4gICAgfTtcbiAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZXRTaGlwTGVuZ3RoKTtcbiAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGFkZFRvSW5kZXhBcnIpO1xuICAgIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZW1wdHlJbmRleEFycik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkT25seVZhbGlkU3BhY2UoaW5kZXgsIGluZGV4QXJyLCBwbGF5ZXJCb2FyZCkge1xuICBpZiAoaW5kZXggJiYgaW5kZXgubGVuZ3RoID09PSAyKSBpbmRleEFyci5wdXNoKGluZGV4KTtcbiAgaWYgKFxuICAgIHBsYXllckJvYXJkWytpbmRleF0gJiZcbiAgICBBcnJheS5mcm9tKHBsYXllckJvYXJkWytpbmRleF0uY2xhc3NMaXN0KS5pbmNsdWRlcyhcInNoaXBcIilcbiAgKVxuICAgIGluZGV4QXJyLnBvcCgpO1xufVxuXG5mdW5jdGlvbiByZXNldFNoaXBIb3ZlcigpIHtcbiAgbGVuZ3RoT2ZTaGlwID0gNTtcbiAgY291bnRlciA9IDU7XG59XG5cbmV4cG9ydCB7IGFkZEhvdmVyLCByZXNldFNoaXBIb3ZlciB9O1xuIiwiaW1wb3J0IHsgYW5ub3VuY2VXaW5uZXIgfSBmcm9tIFwiLi9wYWdlLWdldC1uYW1lXCI7XG5pbXBvcnQgeyBzZXRTdG9wSGVyZSB9IGZyb20gXCIuL3BsYXllci12cy1jb21wdXRlclwiO1xuXG4vKiogQ29sb3VycyB2YWxpZCBzaG90cyByZWQgKi9cbmZ1bmN0aW9uIHZhbGlkU2hvdHMoXG4gIGdyaWQsXG4gIGluZGV4LFxuICByZWNlaXZlQXR0YWNrLFxuICBwbGF5ZXJCb2FyZCxcbiAgYWxsU2hpcHNTdW5rLFxuICBpbnN0cnVjdGlvbixcbiAgcGxheWVyTmFtZVxuKSB7XG4gIGNvbnN0IGF4aXMgPSBgJHtpbmRleH1gLnNwbGl0KFwiXCIpO1xuICBpZiAoYXhpcy5sZW5ndGggPT09IDEpIGF4aXMudW5zaGlmdChcIjBcIik7XG5cbiAgY29uc3Qge1xuICAgIGhpdENvb3JkLFxuICAgIHNoaXA1U3VuayxcbiAgICBzaGlwNFN1bmssXG4gICAgc2hpcDNTdW5rLFxuICAgIHNoaXAyU3VuayxcbiAgICBzaGlwMVN1bmssXG4gICAgc2hpcDVDb29yZCxcbiAgICBzaGlwNENvb3JkLFxuICAgIHNoaXAzQ29vcmQsXG4gICAgc2hpcDJDb29yZCxcbiAgICBzaGlwMUNvb3JkLFxuICB9ID0gcmVjZWl2ZUF0dGFjayhheGlzKTtcblxuICBpZiAoZ3JpZCkgZ3JpZC5jbGFzc0xpc3QuYWRkKFwic2hvdHNcIik7XG4gIGlmIChoaXRDb29yZCkgZ3JpZC5jbGFzc0xpc3QuYWRkKFwidmFsaWQtc2hvdFwiKTtcblxuICBpc1N1bmtTaGlwKHNoaXA1U3Vuaywgc2hpcDVDb29yZCwgcGxheWVyQm9hcmQpO1xuICBpc1N1bmtTaGlwKHNoaXA0U3Vuaywgc2hpcDRDb29yZCwgcGxheWVyQm9hcmQpO1xuICBpc1N1bmtTaGlwKHNoaXAzU3Vuaywgc2hpcDNDb29yZCwgcGxheWVyQm9hcmQpO1xuICBpc1N1bmtTaGlwKHNoaXAyU3Vuaywgc2hpcDJDb29yZCwgcGxheWVyQm9hcmQpO1xuICBpc1N1bmtTaGlwKHNoaXAxU3Vuaywgc2hpcDFDb29yZCwgcGxheWVyQm9hcmQpO1xuXG4gIGlmIChhbGxTaGlwc1N1bmsoKSkge1xuICAgIGluc3RydWN0aW9uLnRleHRDb250ZW50ID0gXCJnYW1lIG92ZXIuXCI7XG4gICAgc2V0U3RvcEhlcmUoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHdoaWxlIChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgICAgIGFubm91bmNlV2lubmVyKHBsYXllck5hbWUpO1xuICAgIH0sIDIwMDApO1xuICB9XG5cbiAgY29uc3QgaXNTdW5rU2hpcEFycmF5ID0gW1xuICAgIHNoaXA1U3VuayxcbiAgICBzaGlwNFN1bmssXG4gICAgc2hpcDNTdW5rLFxuICAgIHNoaXAyU3VuayxcbiAgICBzaGlwMVN1bmssXG4gIF07XG4gIHJldHVybiB7IGhpdENvb3JkLCBpc1N1bmtTaGlwQXJyYXkgfTtcbn1cblxuLyoqIEFkZHMgYmx1ZSBiYWNrZ3JvdW5kIGNvbG91ciB3aGVuIGEgc2hpcCBpcyBjb21wbGV0ZWx5IHN1bmsgKi9cbmZ1bmN0aW9uIGlzU3Vua1NoaXAoc2hpcFN1bmssIHNoaXBDb29yZCwgcGxheWVyQm9hcmQpIHtcbiAgY29uc3QgYWRkQmx1ZUJnID0gKGl0ZW0pID0+XG4gICAgcGxheWVyQm9hcmQuZm9yRWFjaCgoc3F1YXJlLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKCtpdGVtLmpvaW4oXCJcIikgPT09IGluZGV4KSBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInN1bmstc2hpcFwiKTtcbiAgICB9KTtcbiAgaWYgKHNoaXBTdW5rID09PSB0cnVlKSBzaGlwQ29vcmQuZm9yRWFjaChhZGRCbHVlQmcpO1xufVxuXG5leHBvcnQgeyB2YWxpZFNob3RzIH07XG4iLCJpbXBvcnQge2NyZWF0ZTJEQXJyYXl9IGZyb20gXCIuLzJkLWFycmF5XCI7XG5pbXBvcnQge1NoaXB9IGZyb20gXCIuL3NoaXBcIjtcblxuZnVuY3Rpb24gR2FtZWJvYXJkKHBsYWNlUGxheWVyU2hpcHMpIHtcbiAgY29uc3QgQXJyID0gW107XG4gIGxldCBhbGlnbiA9IFwiWFwiO1xuICBjb25zdCBzaGlwQXJyID0gW107XG4gIGNvbnN0IGJvYXJkID0gY3JlYXRlMkRBcnJheSgxMCk7XG4gIGNvbnN0IGFsaWduU2hpcCA9ICgpID0+IChhbGlnbiA9IGFsaWduID09PSBcIlhcIiA/IFwiWVwiIDogXCJYXCIpO1xuXG4gIGNvbnN0IHBvc2l0aW9uU2hpcCA9IChpbmRleCkgPT4ge1xuICAgIHBsYWNlUGxheWVyU2hpcHMoQXJyLCBib2FyZCwgc2hpcEFyciwgaW5kZXgsIGFsaWduKTtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGF0dGFjaykgPT4ge1xuICAgIGxldCBoaXRDb29yZDtcbiAgICBsZXQgc2hpcDVTdW5rO1xuICAgIGxldCBzaGlwNFN1bms7XG4gICAgbGV0IHNoaXAzU3VuaztcbiAgICBsZXQgc2hpcDJTdW5rO1xuICAgIGxldCBzaGlwMVN1bms7XG4gICAgbGV0IHNoaXA1Q29vcmQ7XG4gICAgbGV0IHNoaXA0Q29vcmQ7XG4gICAgbGV0IHNoaXAzQ29vcmQ7XG4gICAgbGV0IHNoaXAyQ29vcmQ7XG4gICAgbGV0IHNoaXAxQ29vcmQ7XG5cbiAgICBjb25zdCBbc2hpcEZpdmUsIHNoaXBGb3VyLCBzaGlwVGhyZWUsIHNoaXBUd28sIHNoaXBPbmVdID0gc2hpcEFycjtcbiAgICBjb25zdCBbc2hpcDUsIHNoaXA0LCBzaGlwMywgc2hpcDIsIHNoaXAxXSA9IEFycjtcbiAgICBjb25zdCBhcnJheSA9IFtzaGlwNSwgc2hpcDQsIHNoaXAzLCBzaGlwMiwgc2hpcDFdLmZsYXQoKTtcblxuICAgIGFycmF5LmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHNoaXAuZm9yRWFjaCgoY29vcmRpbmF0ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKCthdHRhY2suam9pbihcIlwiKSA9PT0gK2Nvb3JkaW5hdGUpIHtcbiAgICAgICAgICBoaXRDb29yZCA9IHNoaXAuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICBjb25zdCBzaGk1ID0gU2hpcChzaGlwRml2ZS5YWSwgc2hpcEZpdmUuc2hpcExlbmdodCwgc2hpcEZpdmUuYWxpZ24pO1xuICAgICAgICAgIHNoaXA1U3VuayA9IHNoaTUuaXNTdW5rKHNoaXAsIGhpdENvb3JkKTtcbiAgICAgICAgICBzaGlwNUNvb3JkID0gc2hpNS5zaGlwQ29vcmQ7XG4gICAgICAgICAgY29uc3Qgc2hpNCA9IFNoaXAoc2hpcEZvdXIuWFksIHNoaXBGb3VyLnNoaXBMZW5naHQsIHNoaXBGb3VyLmFsaWduKTtcbiAgICAgICAgICBzaGlwNFN1bmsgPSBzaGk0LmlzU3VuayhzaGlwLCBoaXRDb29yZCk7XG4gICAgICAgICAgc2hpcDRDb29yZCA9IHNoaTQuc2hpcENvb3JkO1xuICAgICAgICAgIGNvbnN0IHNoaTMgPSBTaGlwKFxuICAgICAgICAgICAgc2hpcFRocmVlLlhZLFxuICAgICAgICAgICAgc2hpcFRocmVlLnNoaXBMZW5naHQsXG4gICAgICAgICAgICBzaGlwVGhyZWUuYWxpZ24sXG4gICAgICAgICAgKTtcbiAgICAgICAgICBzaGlwM1N1bmsgPSBzaGkzLmlzU3VuayhzaGlwLCBoaXRDb29yZCk7XG4gICAgICAgICAgc2hpcDNDb29yZCA9IHNoaTMuc2hpcENvb3JkO1xuICAgICAgICAgIGNvbnN0IHNoaTIgPSBTaGlwKHNoaXBUd28uWFksIHNoaXBUd28uc2hpcExlbmdodCwgc2hpcFR3by5hbGlnbik7XG4gICAgICAgICAgc2hpcDJTdW5rID0gc2hpMi5pc1N1bmsoc2hpcCwgaGl0Q29vcmQpO1xuICAgICAgICAgIHNoaXAyQ29vcmQgPSBzaGkyLnNoaXBDb29yZDtcbiAgICAgICAgICBjb25zdCBzaGkxID0gU2hpcChzaGlwT25lLlhZLCBzaGlwT25lLnNoaXBMZW5naHQsIHNoaXBPbmUuYWxpZ24pO1xuICAgICAgICAgIHNoaXAxU3VuayA9IHNoaTEuaXNTdW5rKHNoaXAsIGhpdENvb3JkKTtcbiAgICAgICAgICBzaGlwMUNvb3JkID0gc2hpMS5zaGlwQ29vcmQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBoaXRDb29yZCxcbiAgICAgIHNoaXA1U3VuayxcbiAgICAgIHNoaXA0U3VuayxcbiAgICAgIHNoaXAzU3VuayxcbiAgICAgIHNoaXAyU3VuayxcbiAgICAgIHNoaXAxU3VuayxcbiAgICAgIHNoaXA1Q29vcmQsXG4gICAgICBzaGlwNENvb3JkLFxuICAgICAgc2hpcDNDb29yZCxcbiAgICAgIHNoaXAyQ29vcmQsXG4gICAgICBzaGlwMUNvb3JkLFxuICAgIH07XG4gIH07XG5cbiAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgIGNvbnN0IFtzaGlwNSwgc2hpcDQsIHNoaXAzLCBzaGlwMiwgc2hpcDFdID0gQXJyLmZsYXQoKTtcbiAgICBpZiAoc2hpcDUubGVuZ3RoID09PSAwXG4gICAgJiYgc2hpcDQubGVuZ3RoID09PSAwXG4gICAgJiYgc2hpcDMubGVuZ3RoID09PSAwXG4gICAgJiYgc2hpcDIubGVuZ3RoID09PSAwXG4gICAgJiYgc2hpcDEubGVuZ3RoID09PSAwXG4gICAgKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBBcnIsXG4gICAgYm9hcmQsXG4gICAgc2hpcEFycixcbiAgICBhbGlnblNoaXAsXG4gICAgYWxsU2hpcHNTdW5rLFxuICAgIHBvc2l0aW9uU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICB9O1xufVxuXG5leHBvcnQge0dhbWVib2FyZH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuZnVuY3Rpb24gZ2V0U2hpcENvb3JkaW5hdGVzKGFycmF5LCBsZW5ndGgsIGFsaWduKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkgfHwgYXJyYXkubGVuZ3RoIDwgMikgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBbYXJyYXldO1xuICBpZiAoYWxpZ24gPT09IFwiWFwiKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgc2hpcENvb3JkaW5hdGVzLnB1c2goW2FycmF5WzBdLCBhcnJheVsxXSArIGldKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgc2hpcENvb3JkaW5hdGVzLnB1c2goW2FycmF5WzBdICsgaSwgYXJyYXlbMV1dKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNoaXBDb29yZGluYXRlcztcbn1cblxuZXhwb3J0IHtnZXRTaGlwQ29vcmRpbmF0ZXN9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmV0dXJuLWFzc2lnbiAqL1xuaW1wb3J0IHtzaGlwQXhpc30gZnJvbSBcIi4vc2hwLWF4aXNcIjtcblxuZnVuY3Rpb24gcGxhY2VQbGF5ZXJTaGlwcyhBcnIsIGJvYXJkLCBzaGlwQXJyLCBpbmRleCwgYWxpZ24pIHtcbiAgbGV0IHNoaXBMZW5naHQ7XG4gIGNvbnN0IGFzc2lnblZhbHVlID0gKHZhbHVlKSA9PiAoc2hpcExlbmdodCA9IHZhbHVlKTtcbiAgaWYgKEFyci5sZW5ndGggPiA0KSByZXR1cm47XG4gIGFzc2lnbkxlbmd0aFRvU2hpcHMoQXJyLCBhc3NpZ25WYWx1ZSk7XG4gIHBsYWNlU2hpcHMoaW5kZXgsIHNoaXBMZW5naHQsIGFsaWduLCBib2FyZCwgQXJyLCBzaGlwQXJyKTtcbn1cblxuZnVuY3Rpb24gcGxhY2VDb21wdXRlclNoaXBzKEFyciwgYm9hcmQsIHNoaXBBcnIpIHtcbiAgY29uc3QgYWxpZ25BcnIgPSBbXCJYXCIsIFwiWVwiXTtcbiAgbGV0IHNoaXBMZW5naHQ7XG4gIGNvbnN0IGFzc2lnblZhbHVlID0gKHZhbHVlKSA9PiAoc2hpcExlbmdodCA9IHZhbHVlKTtcbiAgd2hpbGUgKEFyci5sZW5ndGggPCA1KSB7XG4gICAgYXNzaWduTGVuZ3RoVG9TaGlwcyhBcnIsIGFzc2lnblZhbHVlKTtcbiAgICBjb25zdCBhbGlnbkluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWxpZ25BcnIubGVuZ3RoKTtcbiAgICBjb25zdCBhbGlnbiA9IGFsaWduQXJyW2FsaWduSW5kZXhdO1xuICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICBwbGFjZVNoaXBzKGluZGV4LCBzaGlwTGVuZ2h0LCBhbGlnbiwgYm9hcmQsIEFyciwgc2hpcEFycik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzaWduTGVuZ3RoVG9TaGlwcyhBcnIsIGFzc2lnblZhbHVlKSB7XG4gIGlmIChBcnIubGVuZ3RoID09PSAwKSBhc3NpZ25WYWx1ZSg1KTtcbiAgaWYgKEFyci5sZW5ndGggPT09IDEpIGFzc2lnblZhbHVlKDQpO1xuICBpZiAoQXJyLmxlbmd0aCA9PT0gMikgYXNzaWduVmFsdWUoMyk7XG4gIGlmIChBcnIubGVuZ3RoID09PSAzKSBhc3NpZ25WYWx1ZSgzKTtcbiAgaWYgKEFyci5sZW5ndGggPT09IDQpIGFzc2lnblZhbHVlKDIpO1xufVxuXG5mdW5jdGlvbiBwbGFjZVNoaXBzKGluZGV4LCBzaGlwTGVuZ2h0LCBhbGlnbiwgYm9hcmQsIEFyciwgc2hpcEFycikge1xuICBjb25zdCBheGlzID0gYCR7aW5kZXh9YC5zcGxpdChcIlwiKTtcbiAgaWYgKGF4aXMubGVuZ3RoID09PSAxKSBheGlzLnVuc2hpZnQoXCIwXCIpO1xuICBjb25zdCBzaGlwQ29vcmQgPSBzaGlwQXhpcyhzaGlwTGVuZ2h0LCArYXhpc1swXSwgK2F4aXNbMV0sIHNoaXBMZW5naHQsIGFsaWduLCBib2FyZCk7XG4gIGlmIChzaGlwQ29vcmQubGVuZ3RoICE9PSAwKSB7XG4gICAgQXJyLnB1c2goc2hpcENvb3JkKTtcbiAgICBzaGlwQXJyLnB1c2goeyBYWTogWytheGlzWzBdLCArYXhpc1sxXV0sIGFsaWduLCBzaGlwTGVuZ2h0IH0pO1xuICB9XG59XG5cbmV4cG9ydCB7IHBsYWNlUGxheWVyU2hpcHMsIHBsYWNlQ29tcHV0ZXJTaGlwcyB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbmltcG9ydCB7Z2V0U2hpcENvb3JkaW5hdGVzfSBmcm9tIFwiLi9nZXRTaGlwQ29vcmRpbmF0ZXNcIjtcblxuZnVuY3Rpb24gU2hpcChhcnJheSwgbGVuZ3RoLCBhbGlnbikge1xuICBjb25zdCBzaGlwQ29vcmQgPSBnZXRTaGlwQ29vcmRpbmF0ZXMoYXJyYXksIGxlbmd0aCwgYWxpZ24pO1xuICBpZiAoIUFycmF5LmlzQXJyYXkoc2hpcENvb3JkKSAmJiAhc2hpcENvb3JkLmxlbmd0aCA+IDApIHJldHVybiBmYWxzZTtcbiAgY29uc3QgaXNTdW5rID0gKGNvb3JkLCBoaXRDb29yZCkgPT4ge1xuICAgIGZvciAoY29uc3QgWFkgb2Ygc2hpcENvb3JkKSB7XG4gICAgICBpZiAoaGl0Q29vcmQuam9pbihcIlwiKSA9PT0gWFkuam9pbihcIlwiKSkgaWYgKGNvb3JkLmxlbmd0aCA8PSAwKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGNvb3JkLmxlbmd0aDtcbiAgfTtcbiAgcmV0dXJuIHsgc2hpcENvb3JkLCBpc1N1bmsgfTtcbn1cblxuZXhwb3J0IHtTaGlwfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5pbXBvcnQge1NoaXB9IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7Y2hlY2tWYWxpZE1vdmV9IGZyb20gXCIuL3ZhbGlkLW1vdmVcIjtcblxuZnVuY3Rpb24gc2hpcEF4aXMobnVtLCB4LCB5LCBsZW5ndGgsIGFsaWduLCBib2FyZCwgcmVjZWl2ZUF0dGFjaykge1xuICBjb25zdCBzaGlwID0gU2hpcChbeCwgeV0sIGxlbmd0aCwgYWxpZ24sIHJlY2VpdmVBdHRhY2spLnNoaXBDb29yZDtcbiAgY29uc3Qgc2hpcENvb3JkcyA9IGNoZWNrVmFsaWRNb3ZlKG51bSwgc2hpcCwgYm9hcmQpO1xuICBjb25zdCBhcnJheUNvb3JkID0gW107XG5cbiAgYXJyYXlDb29yZC5wdXNoKHNoaXBDb29yZHMpO1xuICBhcnJheUNvb3JkLmZvckVhY2goKGNvb3JkLCBpbmRleCkgPT4ge1xuICAgIGlmICghY29vcmQpIGFycmF5Q29vcmQuc3BsaWNlKGluZGV4LCAxKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGFycmF5Q29vcmQ7XG59XG5cbmV4cG9ydCB7c2hpcEF4aXN9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cbmxldCBjb3VudGVyID0gMDtcblxuLyoqIFRoaXMgZnVuY3Rpb24gcGxhY2VzIHNoaXBzIG9uIHRoZSBnYW1lYm9hcmQgd2l0aCB0aGVpciBsZW5ndGggKi9cbmZ1bmN0aW9uIGNoZWNrVmFsaWRNb3ZlKG51bSwgc2hpcCwgYm9hcmRBcnJheSkge1xuICBsZXQgbnVtQ29weSA9IG51bTtcbiAgY29uc3QgZG9tQm9hcmRBcnJyYXkgPSBbXTtcbiAgaWYgKCFzaGlwKSByZXR1cm4gZmFsc2U7XG4gIGZvciAobGV0IGkgPSBzaGlwLmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgaWYgKFxuICAgICAgK3NoaXBbaV1bMF0gPiA5IHx8XG4gICAgICArc2hpcFtpXVsxXSA+IDkgfHxcbiAgICAgIGJvYXJkQXJyYXlbK3NoaXBbaV1bMF1dWytzaGlwW2ldWzFdXSAhPT0gMFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBpZiAobnVtID09IDMpIGNvdW50ZXIrKztcbiAgaWYgKGNvdW50ZXIgPT09IDIpIG51bUNvcHkgPSA2O1xuICBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKFxuICAgICAgYm9hcmRBcnJheVsrc2hpcFtpXVswXV1bK3NoaXBbaV1bMV1dID09PSAyIHx8XG4gICAgICBib2FyZEFycmF5WytzaGlwW2ldWzBdXVsrc2hpcFtpXVsxXV0gPT09IDMgfHxcbiAgICAgIGJvYXJkQXJyYXlbK3NoaXBbaV1bMF1dWytzaGlwW2ldWzFdXSA9PT0gNCB8fFxuICAgICAgYm9hcmRBcnJheVsrc2hpcFtpXVswXV1bK3NoaXBbaV1bMV1dID09PSA1XG4gICAgKVxuICAgICAgcmV0dXJuO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGJvYXJkQXJyYXlbK3NoaXBbaV1bMF1dWytzaGlwW2ldWzFdXSA9IG51bUNvcHk7XG4gICAgZG9tQm9hcmRBcnJyYXkucHVzaChgJHtzaGlwW2ldWzBdfSR7c2hpcFtpXVsxXX1gKTtcbiAgfVxuXG4gIGlmIChjb3VudGVyID09PSAyKSBjb3VudGVyID0gMDtcblxuICByZXR1cm4gZG9tQm9hcmRBcnJyYXk7XG59XG5cbmV4cG9ydCB7IGNoZWNrVmFsaWRNb3ZlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyByZW5kZXJHZXROYW1lUGFnZSB9IGZyb20gXCIuL21vZHVsZXMvZG9tLWludGVyYWN0aW9ucy9wYWdlLWdldC1uYW1lXCI7XG5pbXBvcnQgeyBhZGRSaXBwbGVFZmZlY3QgfSBmcm9tIFwiLi9tb2R1bGVzL2RvbS1pbnRlcmFjdGlvbnMvcmlwcGxlLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi9tb2R1bGVzL3N0eWxlL3N0eWxlLmNzc1wiO1xuXG5yZW5kZXJHZXROYW1lUGFnZSgpO1xuYWRkUmlwcGxlRWZmZWN0KCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwib3BhY2l0eVwiKTtcbiAgfSwgNDAwKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9