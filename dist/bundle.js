/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/getShipCoordinates.js":
/*!*******************************************!*\
  !*** ./src/modules/getShipCoordinates.js ***!
  \*******************************************/
/***/ ((module) => {

/* eslint-disable no-plusplus */
function getShipCoordinates(array, length, align) {
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

/***/ "./src/modules/hit.js":
/*!****************************!*\
  !*** ./src/modules/hit.js ***!
  \****************************/
/***/ ((module) => {

/* eslint-disable nonblock-statement-body-position */
/* eslint-disable curly */
function hit(shipCoord, receiveAttack) {
  const coordinates = [...shipCoord];

  coordinates.forEach((coord, index) => {
    if (receiveAttack)
      receiveAttack.forEach((attack) => {
        if (coord[0] === attack[0] && coord[1] === attack[1])
          coordinates.splice(index, 1);
      });
  });

  return coordinates;
}

module.exports = hit;


/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const getShipCoordinates = __webpack_require__(/*! ./getShipCoordinates */ "./src/modules/getShipCoordinates.js");
const hit = __webpack_require__(/*! ./hit */ "./src/modules/hit.js");
const sink = __webpack_require__(/*! ./sink */ "./src/modules/sink.js");

function Ship(array, length, align, receiveAttack) {
  const shipCoord = getShipCoordinates(array, length, align);
  const isHit = hit(shipCoord, receiveAttack);
  const isSunk = sink(isHit);
  return { shipCoord, isSunk };
}

module.exports = Ship;


/***/ }),

/***/ "./src/modules/sink.js":
/*!*****************************!*\
  !*** ./src/modules/sink.js ***!
  \*****************************/
/***/ ((module) => {

function sink(isHit) {
  if (isHit.length === 0) return true;
  return false;
}

module.exports = sink;


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
/******/ 			// no module.id needed
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const Ship = __webpack_require__(/*! ./modules/ship */ "./src/modules/ship.js");

console.log(Ship([1, 2], 5, "Y", [1, 2]));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBLElBQUk7QUFDSixvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsR0FBRzs7QUFFSDtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ2hCQSwyQkFBMkIsbUJBQU8sQ0FBQyxpRUFBc0I7QUFDekQsWUFBWSxtQkFBTyxDQUFDLG1DQUFPO0FBQzNCLGFBQWEsbUJBQU8sQ0FBQyxxQ0FBUTs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7VUNMQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7QUN0QkEsYUFBYSxtQkFBTyxDQUFDLDZDQUFnQjs7QUFFckMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2V0U2hpcENvb3JkaW5hdGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9oaXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NpbmsuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5mdW5jdGlvbiBnZXRTaGlwQ29vcmRpbmF0ZXMoYXJyYXksIGxlbmd0aCwgYWxpZ24pIHtcbiAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gW2FycmF5XTtcbiAgaWYgKGFsaWduID09PSBcIlhcIikge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHNoaXBDb29yZGluYXRlcy5wdXNoKFthcnJheVswXSwgYXJyYXlbMV0gKyBpXSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHNoaXBDb29yZGluYXRlcy5wdXNoKFthcnJheVswXSArIGksIGFycmF5WzFdXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzaGlwQ29vcmRpbmF0ZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U2hpcENvb3JkaW5hdGVzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm9uYmxvY2stc3RhdGVtZW50LWJvZHktcG9zaXRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIGN1cmx5ICovXG5mdW5jdGlvbiBoaXQoc2hpcENvb3JkLCByZWNlaXZlQXR0YWNrKSB7XG4gIGNvbnN0IGNvb3JkaW5hdGVzID0gWy4uLnNoaXBDb29yZF07XG5cbiAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmQsIGluZGV4KSA9PiB7XG4gICAgaWYgKHJlY2VpdmVBdHRhY2spXG4gICAgICByZWNlaXZlQXR0YWNrLmZvckVhY2goKGF0dGFjaykgPT4ge1xuICAgICAgICBpZiAoY29vcmRbMF0gPT09IGF0dGFja1swXSAmJiBjb29yZFsxXSA9PT0gYXR0YWNrWzFdKVxuICAgICAgICAgIGNvb3JkaW5hdGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvb3JkaW5hdGVzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhpdDtcbiIsImNvbnN0IGdldFNoaXBDb29yZGluYXRlcyA9IHJlcXVpcmUoXCIuL2dldFNoaXBDb29yZGluYXRlc1wiKTtcbmNvbnN0IGhpdCA9IHJlcXVpcmUoXCIuL2hpdFwiKTtcbmNvbnN0IHNpbmsgPSByZXF1aXJlKFwiLi9zaW5rXCIpO1xuXG5mdW5jdGlvbiBTaGlwKGFycmF5LCBsZW5ndGgsIGFsaWduLCByZWNlaXZlQXR0YWNrKSB7XG4gIGNvbnN0IHNoaXBDb29yZCA9IGdldFNoaXBDb29yZGluYXRlcyhhcnJheSwgbGVuZ3RoLCBhbGlnbik7XG4gIGNvbnN0IGlzSGl0ID0gaGl0KHNoaXBDb29yZCwgcmVjZWl2ZUF0dGFjayk7XG4gIGNvbnN0IGlzU3VuayA9IHNpbmsoaXNIaXQpO1xuICByZXR1cm4geyBzaGlwQ29vcmQsIGlzU3VuayB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNoaXA7XG4iLCJmdW5jdGlvbiBzaW5rKGlzSGl0KSB7XG4gIGlmIChpc0hpdC5sZW5ndGggPT09IDApIHJldHVybiB0cnVlO1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2luaztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJjb25zdCBTaGlwID0gcmVxdWlyZShcIi4vbW9kdWxlcy9zaGlwXCIpO1xuXG5jb25zb2xlLmxvZyhTaGlwKFsxLCAyXSwgNSwgXCJZXCIsIFsxLCAyXSkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9