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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/classes/Game.js":
/*!****************************!*\
  !*** ./js/classes/Game.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _MovingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovingObject */ "./js/classes/MovingObject.js");
/* harmony import */ var _utility_Canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/Canvas */ "./js/utility/Canvas.js");



class Game {
  constructor() {
    this.target = _MovingObject__WEBPACK_IMPORTED_MODULE_0__["default"].createRandom()
    this.score = 0

    this.tick = this.tick.bind(this)
    this.updateScore = this.updateScore.bind(this)
  }

  move() {
    this.target.move()
  }

  draw() {
    this.target.draw()
  }

  tick() {
    _utility_Canvas__WEBPACK_IMPORTED_MODULE_1__["default"].clear()
    this.target.move()
    this.target.draw()
    this.target.checkCollision()
    _utility_Canvas__WEBPACK_IMPORTED_MODULE_1__["default"].drawScore(this.score)
    window.requestAnimationFrame(this.tick)
  }

  updateScore(e) {
    if (this.target.checkInObject(e)) this.score++
  }

  start() {
    this.tick()
    _utility_Canvas__WEBPACK_IMPORTED_MODULE_1__["default"].addListener(this.updateScore)
  }
}

/***/ }),

/***/ "./js/classes/MovingObject.js":
/*!************************************!*\
  !*** ./js/classes/MovingObject.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MovingObject; });
/* harmony import */ var _utility_Canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/Canvas.js */ "./js/utility/Canvas.js");
/* harmony import */ var _Vec2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vec2.js */ "./js/classes/Vec2.js");



class MovingObject {
  
  constructor(position, velocity) {
    this.position = new _Vec2_js__WEBPACK_IMPORTED_MODULE_1__["default"](position)
    this.velocity = new _Vec2_js__WEBPACK_IMPORTED_MODULE_1__["default"](velocity)
    this.radius = 20

    this.checkInObject = this.checkInObject.bind(this)
  }

  static createRandom() {
    const position = {
      x: 250,
      y: 250
    }

    const velocity = {
      x: Math.random() * 10 - 5,
      y: Math.random() * 10 - 5
    }

    return new MovingObject(position, velocity)

  }

  move() {
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
  }

  draw() {
    _utility_Canvas_js__WEBPACK_IMPORTED_MODULE_0__["default"].drawCircle({x: this.position.x, y: this.position.y, radius: this.radius})
  }

  checkCollision() {
    if (this.position.x + this.radius > _utility_Canvas_js__WEBPACK_IMPORTED_MODULE_0__["default"].width() || this.position.x - this.radius <= 0) {
      this.velocity.x = -this.velocity.x
    }

    if (this.position.y + this.radius > _utility_Canvas_js__WEBPACK_IMPORTED_MODULE_0__["default"].height() || this.position.y - this.radius <= 0) {
      this.velocity.y = -this.velocity.y
    }
  }

  checkInObject(e) {
    const clickPosition = new _Vec2_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
      x: e.clientX - e.target.offsetLeft,
      y: e.clientY - e.target.offsetTop
    })
    return this.position.distance(clickPosition) < this.radius
  }
}

/***/ }),

/***/ "./js/classes/Vec2.js":
/*!****************************!*\
  !*** ./js/classes/Vec2.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vec2; });
class Vec2 {
  constructor ({x = 0, y = 0}){
    this.x = x,
    this.y = y
  }

  add(vector) {
    return new Vec2({
      x: this.x + vector.x,
      y: this.y + vector.y
    })
  }

  set(object) {
    this.x = object.x
    this.y = object.y
  }

  distance(vector) {
    return Math.sqrt(Math.pow(this.x - vector.x, 2) + Math.pow(this.y - vector.y, 2))
  }
}

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Game */ "./js/classes/Game.js");


const game = new _classes_Game__WEBPACK_IMPORTED_MODULE_0__["default"]
game.start()

/***/ }),

/***/ "./js/utility/Canvas.js":
/*!******************************!*\
  !*** ./js/utility/Canvas.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const canvas = document.getElementById('canvas-stage')
const context = canvas.getContext('2d')
const { PI } = Math

/* harmony default export */ __webpack_exports__["default"] = ({
  drawCircle({ x, y, radius = 20, color = 'white', lineWidth = 4 }) {
    context.beginPath()

    context.lineWidth = lineWidth
    context.strokeStyle = color
    context.arc(x, y, radius, 0, 2 * PI)

    context.closePath()
    context.stroke()
  },
  clear() {
    context.clearRect(0, 0, 1e9, 1e9)
  },
  width() {
    return canvas.width
  },
  height() {
    return canvas.height
  },
  addListener(func) {
    canvas.addEventListener('mousedown', func)
  },
  drawScore(score) {
    context.textAlign = 'end'
    context.font = '18px Orbitron'
    context.fillStyle = 'white'
    context.fillText(`score: ${score}`, 480, 30)
  }
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9HYW1lLmpzIiwid2VicGFjazovLy8uL2pzL2NsYXNzZXMvTW92aW5nT2JqZWN0LmpzIiwid2VicGFjazovLy8uL2pzL2NsYXNzZXMvVmVjMi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9qcy91dGlsaXR5L0NhbnZhcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBQ0g7O0FBRXZCO0FBQ2Y7QUFDQSxrQkFBa0IscURBQVk7QUFDOUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHVEQUFNO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBTTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHVEQUFNO0FBQ1Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNyQ0E7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFDYjs7QUFFYjs7QUFFZjtBQUNBLHdCQUF3QixnREFBSTtBQUM1Qix3QkFBd0IsZ0RBQUk7QUFDNUI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSwwREFBTSxhQUFhLDREQUE0RDtBQUNuRjs7QUFFQTtBQUNBLHdDQUF3QywwREFBTTtBQUM5QztBQUNBOztBQUVBLHdDQUF3QywwREFBTTtBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsZ0RBQUk7QUFDbEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDdERBO0FBQUE7QUFBZTtBQUNmLGdCQUFnQixhQUFhO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFpQzs7QUFFakMsaUJBQWlCLHFEQUFJO0FBQ3JCLFk7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFDQTtBQUNBLE9BQU8sS0FBSzs7QUFFRztBQUNmLGNBQWMsb0RBQW9EO0FBQ2xFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsTUFBTTtBQUNyQztBQUNBLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSAnLi9Nb3ZpbmdPYmplY3QnXG5pbXBvcnQgQ2FudmFzIGZyb20gJy4uL3V0aWxpdHkvQ2FudmFzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50YXJnZXQgPSBNb3ZpbmdPYmplY3QuY3JlYXRlUmFuZG9tKClcbiAgICB0aGlzLnNjb3JlID0gMFxuXG4gICAgdGhpcy50aWNrID0gdGhpcy50aWNrLmJpbmQodGhpcylcbiAgICB0aGlzLnVwZGF0ZVNjb3JlID0gdGhpcy51cGRhdGVTY29yZS5iaW5kKHRoaXMpXG4gIH1cblxuICBtb3ZlKCkge1xuICAgIHRoaXMudGFyZ2V0Lm1vdmUoKVxuICB9XG5cbiAgZHJhdygpIHtcbiAgICB0aGlzLnRhcmdldC5kcmF3KClcbiAgfVxuXG4gIHRpY2soKSB7XG4gICAgQ2FudmFzLmNsZWFyKClcbiAgICB0aGlzLnRhcmdldC5tb3ZlKClcbiAgICB0aGlzLnRhcmdldC5kcmF3KClcbiAgICB0aGlzLnRhcmdldC5jaGVja0NvbGxpc2lvbigpXG4gICAgQ2FudmFzLmRyYXdTY29yZSh0aGlzLnNjb3JlKVxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy50aWNrKVxuICB9XG5cbiAgdXBkYXRlU2NvcmUoZSkge1xuICAgIGlmICh0aGlzLnRhcmdldC5jaGVja0luT2JqZWN0KGUpKSB0aGlzLnNjb3JlKytcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMudGljaygpXG4gICAgQ2FudmFzLmFkZExpc3RlbmVyKHRoaXMudXBkYXRlU2NvcmUpXG4gIH1cbn0iLCJpbXBvcnQgQ2FudmFzIGZyb20gJy4uL3V0aWxpdHkvQ2FudmFzLmpzJ1xuaW1wb3J0IFZlYzIgZnJvbSAnLi9WZWMyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpbmdPYmplY3Qge1xuICBcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIHZlbG9jaXR5KSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBWZWMyKHBvc2l0aW9uKVxuICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjMih2ZWxvY2l0eSlcbiAgICB0aGlzLnJhZGl1cyA9IDIwXG5cbiAgICB0aGlzLmNoZWNrSW5PYmplY3QgPSB0aGlzLmNoZWNrSW5PYmplY3QuYmluZCh0aGlzKVxuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVJhbmRvbSgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHtcbiAgICAgIHg6IDI1MCxcbiAgICAgIHk6IDI1MFxuICAgIH1cblxuICAgIGNvbnN0IHZlbG9jaXR5ID0ge1xuICAgICAgeDogTWF0aC5yYW5kb20oKSAqIDEwIC0gNSxcbiAgICAgIHk6IE1hdGgucmFuZG9tKCkgKiAxMCAtIDVcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IE1vdmluZ09iamVjdChwb3NpdGlvbiwgdmVsb2NpdHkpXG5cbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMudmVsb2NpdHkueFxuICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnZlbG9jaXR5LnlcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgQ2FudmFzLmRyYXdDaXJjbGUoe3g6IHRoaXMucG9zaXRpb24ueCwgeTogdGhpcy5wb3NpdGlvbi55LCByYWRpdXM6IHRoaXMucmFkaXVzfSlcbiAgfVxuXG4gIGNoZWNrQ29sbGlzaW9uKCkge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnJhZGl1cyA+IENhbnZhcy53aWR0aCgpIHx8IHRoaXMucG9zaXRpb24ueCAtIHRoaXMucmFkaXVzIDw9IDApIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueCA9IC10aGlzLnZlbG9jaXR5LnhcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5yYWRpdXMgPiBDYW52YXMuaGVpZ2h0KCkgfHwgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5yYWRpdXMgPD0gMCkge1xuICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLXRoaXMudmVsb2NpdHkueVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrSW5PYmplY3QoZSkge1xuICAgIGNvbnN0IGNsaWNrUG9zaXRpb24gPSBuZXcgVmVjMih7XG4gICAgICB4OiBlLmNsaWVudFggLSBlLnRhcmdldC5vZmZzZXRMZWZ0LFxuICAgICAgeTogZS5jbGllbnRZIC0gZS50YXJnZXQub2Zmc2V0VG9wXG4gICAgfSlcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5kaXN0YW5jZShjbGlja1Bvc2l0aW9uKSA8IHRoaXMucmFkaXVzXG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWZWMyIHtcbiAgY29uc3RydWN0b3IgKHt4ID0gMCwgeSA9IDB9KXtcbiAgICB0aGlzLnggPSB4LFxuICAgIHRoaXMueSA9IHlcbiAgfVxuXG4gIGFkZCh2ZWN0b3IpIHtcbiAgICByZXR1cm4gbmV3IFZlYzIoe1xuICAgICAgeDogdGhpcy54ICsgdmVjdG9yLngsXG4gICAgICB5OiB0aGlzLnkgKyB2ZWN0b3IueVxuICAgIH0pXG4gIH1cblxuICBzZXQob2JqZWN0KSB7XG4gICAgdGhpcy54ID0gb2JqZWN0LnhcbiAgICB0aGlzLnkgPSBvYmplY3QueVxuICB9XG5cbiAgZGlzdGFuY2UodmVjdG9yKSB7XG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh0aGlzLnggLSB2ZWN0b3IueCwgMikgKyBNYXRoLnBvdyh0aGlzLnkgLSB2ZWN0b3IueSwgMikpXG4gIH1cbn0iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2NsYXNzZXMvR2FtZSdcblxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lXG5nYW1lLnN0YXJ0KCkiLCJjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzLXN0YWdlJylcbmNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuY29uc3QgeyBQSSB9ID0gTWF0aFxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRyYXdDaXJjbGUoeyB4LCB5LCByYWRpdXMgPSAyMCwgY29sb3IgPSAnd2hpdGUnLCBsaW5lV2lkdGggPSA0IH0pIHtcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpXG5cbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IGxpbmVXaWR0aFxuICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvclxuICAgIGNvbnRleHQuYXJjKHgsIHksIHJhZGl1cywgMCwgMiAqIFBJKVxuXG4gICAgY29udGV4dC5jbG9zZVBhdGgoKVxuICAgIGNvbnRleHQuc3Ryb2tlKClcbiAgfSxcbiAgY2xlYXIoKSB7XG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgMWU5LCAxZTkpXG4gIH0sXG4gIHdpZHRoKCkge1xuICAgIHJldHVybiBjYW52YXMud2lkdGhcbiAgfSxcbiAgaGVpZ2h0KCkge1xuICAgIHJldHVybiBjYW52YXMuaGVpZ2h0XG4gIH0sXG4gIGFkZExpc3RlbmVyKGZ1bmMpIHtcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuYylcbiAgfSxcbiAgZHJhd1Njb3JlKHNjb3JlKSB7XG4gICAgY29udGV4dC50ZXh0QWxpZ24gPSAnZW5kJ1xuICAgIGNvbnRleHQuZm9udCA9ICcxOHB4IE9yYml0cm9uJ1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ3doaXRlJ1xuICAgIGNvbnRleHQuZmlsbFRleHQoYHNjb3JlOiAke3Njb3JlfWAsIDQ4MCwgMzApXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9