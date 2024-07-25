/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((module) => {

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
module.exports = {
  randomIntFromRange: randomIntFromRange,
  randomColor: randomColor,
  distance: distance
};

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.backgroundColor = "black";
var mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};
var colors = ["#55AD9B", "#F6FB7A", "#FFFED3", "#FFA38F", "#FFD18E", "#7743DB", "#91DDCF", "#B0EBB4", "#E178C5", "#FFBB64", "#00A9FF", "#FFFFFF"];

// Event Listeners
addEventListener("mousemove", function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});
addEventListener("resize", function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
});
var mousedown = false;
window.addEventListener("mousedown", function () {
  mousedown = true;
});
window.addEventListener("mouseup", function () {
  mousedown = false;
});

// Objects
var Circles = /*#__PURE__*/function () {
  function Circles(x, y, radius, color) {
    _classCallCheck(this, Circles);
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }
  _createClass(Circles, [{
    key: "draw",
    value: function draw() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.shadowColor = this.color;
      c.shadowBlur = 10;
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }]);
  return Circles;
}(); // Implementation
var circle;
var nitrate = 500;
function init() {
  circle = [];
  for (var i = 0; i < nitrate; i++) {
    var canvaswidth = canvas.width + nitrate;
    var canvasheight = canvas.height + nitrate;
    var cr2 = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
    var radius = Math.random() * 3;
    var x = Math.random() * (canvaswidth - radius * 2) - canvaswidth / 2 + radius;
    var y = Math.random() * (canvasheight - radius * 2) - canvasheight / 2 + radius;
    for (var j = 0; j < circle.length; j++) {
      if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.distance)(x, y, circle[j].x, circle[j].y) - radius * 2 < 0) {
        x = Math.random() * (canvaswidth - radius * 2) - canvaswidth / 2 + radius;
        y = Math.random() * (canvasheight - radius * 2) - canvasheight / 2 + radius;
        j -= 1;
      }
    }
    var color = cr2;
    circle.push(new Circles(x, y, radius, color));
  }
}
var increment = 0;
var alpha = 1;
// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "rgba(10, 10, 10, ".concat(alpha, ")");
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.save();
  c.translate(canvas.width / 2, canvas.height / 2);
  c.rotate(increment);
  circle.forEach(function (circle) {
    circle.update();
  });
  c.restore();
  increment += 0.001;
  if (mousedown) {
    if (alpha >= 0.1) {
      alpha -= 0.01;
    }
  } else if (!mousedown) {
    if (alpha < 1) {
      alpha += 0.01;
    }
  }
}
init();
animate();
})();

/******/ })()
;
//# sourceMappingURL=canvas.bundle.js.map