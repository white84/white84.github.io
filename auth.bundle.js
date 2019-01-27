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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/auth.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/auth.js":
/*!************************************!*\
  !*** ./src/assets/scripts/auth.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconsole.log(\"auth module loaded\");\n\nvar parallaxContainer = document.querySelector('.parallax');\nvar layers = Array.from(parallaxContainer.children);\nconsole.log(layers);\n\nvar moveLayers = function moveLayers(e) {\n    var initialX = window.innerWidth / 2 - e.pageX;\n    var initialY = window.innerHeight / 2 - e.pageY;\n\n    layers.forEach(function (layer, i) {\n        var deliver = i / 100;\n        var positionX = initialX * deliver;\n        var positionY = initialY * deliver;\n        var bottomPosition = window.innerHeight / 2 * deliver;\n        var image = layer.children[0];\n\n        image.style.bottom = '-' + bottomPosition + 'px';\n        //debugger;\n        layer.style.transform = 'translate(' + positionX + 'px, ' + positionY + 'px)';\n    });\n    //console.log(initialX, initialY);\n};\n\nwindow.addEventListener('mousemove', moveLayers);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz85ZWY0Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJwYXJhbGxheENvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxheWVycyIsIkFycmF5IiwiZnJvbSIsImNoaWxkcmVuIiwibW92ZUxheWVycyIsImUiLCJpbml0aWFsWCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJwYWdlWCIsImluaXRpYWxZIiwiaW5uZXJIZWlnaHQiLCJwYWdlWSIsImZvckVhY2giLCJsYXllciIsImkiLCJkZWxpdmVyIiwicG9zaXRpb25YIiwicG9zaXRpb25ZIiwiYm90dG9tUG9zaXRpb24iLCJpbWFnZSIsInN0eWxlIiwiYm90dG9tIiwidHJhbnNmb3JtIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsUUFBUUMsR0FBUixDQUFZLG9CQUFaOztBQUVBLElBQU1DLG9CQUFvQkMsU0FBU0MsYUFBVCxDQUF1QixXQUF2QixDQUExQjtBQUNBLElBQU1DLFNBQVNDLE1BQU1DLElBQU4sQ0FBV0wsa0JBQWtCTSxRQUE3QixDQUFmO0FBQ0FSLFFBQVFDLEdBQVIsQ0FBWUksTUFBWjs7QUFFQSxJQUFNSSxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3RCLFFBQU1DLFdBQVlDLE9BQU9DLFVBQVAsR0FBb0IsQ0FBckIsR0FBMEJILEVBQUVJLEtBQTdDO0FBQ0EsUUFBTUMsV0FBWUgsT0FBT0ksV0FBUCxHQUFxQixDQUF0QixHQUEyQk4sRUFBRU8sS0FBOUM7O0FBRUFaLFdBQU9hLE9BQVAsQ0FBZSxVQUFDQyxLQUFELEVBQVFDLENBQVIsRUFBYztBQUN6QixZQUFNQyxVQUFVRCxJQUFJLEdBQXBCO0FBQ0EsWUFBTUUsWUFBWVgsV0FBV1UsT0FBN0I7QUFDQSxZQUFNRSxZQUFZUixXQUFXTSxPQUE3QjtBQUNBLFlBQU1HLGlCQUFrQlosT0FBT0ksV0FBUCxHQUFxQixDQUF0QixHQUEyQkssT0FBbEQ7QUFDQSxZQUFNSSxRQUFRTixNQUFNWCxRQUFOLENBQWUsQ0FBZixDQUFkOztBQUVBaUIsY0FBTUMsS0FBTixDQUFZQyxNQUFaLFNBQXlCSCxjQUF6QjtBQUNBO0FBQ0FMLGNBQU1PLEtBQU4sQ0FBWUUsU0FBWixrQkFBcUNOLFNBQXJDLFlBQXFEQyxTQUFyRDtBQUNILEtBVkQ7QUFXQTtBQUNILENBaEJEOztBQWtCQVgsT0FBT2lCLGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDcEIsVUFBckMiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiYXV0aCBtb2R1bGUgbG9hZGVkXCIpO1xyXG5cclxuY29uc3QgcGFyYWxsYXhDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFyYWxsYXgnKTtcclxuY29uc3QgbGF5ZXJzID0gQXJyYXkuZnJvbShwYXJhbGxheENvbnRhaW5lci5jaGlsZHJlbik7XHJcbmNvbnNvbGUubG9nKGxheWVycyk7XHJcblxyXG5jb25zdCBtb3ZlTGF5ZXJzID0gKGUpID0+IHtcclxuICAgIGNvbnN0IGluaXRpYWxYID0gKHdpbmRvdy5pbm5lcldpZHRoIC8gMikgLSBlLnBhZ2VYO1xyXG4gICAgY29uc3QgaW5pdGlhbFkgPSAod2luZG93LmlubmVySGVpZ2h0IC8gMikgLSBlLnBhZ2VZO1xyXG5cclxuICAgIGxheWVycy5mb3JFYWNoKChsYXllciwgaSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRlbGl2ZXIgPSBpIC8gMTAwO1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uWCA9IGluaXRpYWxYICogZGVsaXZlcjtcclxuICAgICAgICBjb25zdCBwb3NpdGlvblkgPSBpbml0aWFsWSAqIGRlbGl2ZXI7XHJcbiAgICAgICAgY29uc3QgYm90dG9tUG9zaXRpb24gPSAod2luZG93LmlubmVySGVpZ2h0IC8gMikgKiBkZWxpdmVyO1xyXG4gICAgICAgIGNvbnN0IGltYWdlID0gbGF5ZXIuY2hpbGRyZW5bMF07XHJcblxyXG4gICAgICAgIGltYWdlLnN0eWxlLmJvdHRvbSA9IGAtJHtib3R0b21Qb3NpdGlvbn1weGA7XHJcbiAgICAgICAgLy9kZWJ1Z2dlcjtcclxuICAgICAgICBsYXllci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7cG9zaXRpb25YfXB4LCAke3Bvc2l0aW9uWX1weClgO1xyXG4gICAgfSlcclxuICAgIC8vY29uc29sZS5sb2coaW5pdGlhbFgsIGluaXRpYWxZKTtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdmVMYXllcnMpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/auth.js\n");

/***/ })

/******/ });