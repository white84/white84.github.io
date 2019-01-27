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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/hamburger_menu.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/hamburger_menu.js":
/*!**********************************************!*\
  !*** ./src/assets/scripts/hamburger_menu.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.getElementById('hamburger-menu').addEventListener('click', function () {\n    var hamburgerMenu = document.getElementById('hamburger-menu');\n    var menu = document.getElementsByClassName('main-menu')[0];\n    var menuItems = document.getElementsByClassName('main-menu-item');\n    var body = document.body;\n    if (hamburgerMenu.classList.contains('is-active')) {\n        hamburgerMenu.classList.remove('is-active');\n        body.classList.remove('overflow-nidden');\n        menu.classList.remove('is-active');\n        for (var i = 0; i < menuItems.length; i++) {\n            menuItems[i].style = '';\n        }\n    } else {\n        window.scroll(0, 0);\n        hamburgerMenu.classList.add('is-active');\n        body.classList.add('overflow-nidden');\n        menu.classList.add('is-active');\n        for (var i = 0; i < menuItems.length; i++) {\n            menuItems[i].style.transitionDelay = 1 + i / 10 + 's';\n        }\n    }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvaGFtYnVyZ2VyX21lbnUuanM/MmIyMiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbWJ1cmdlck1lbnUiLCJtZW51IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm1lbnVJdGVtcyIsImJvZHkiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImkiLCJsZW5ndGgiLCJzdHlsZSIsIndpbmRvdyIsInNjcm9sbCIsImFkZCIsInRyYW5zaXRpb25EZWxheSJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsU0FBU0MsY0FBVCxDQUF3QixnQkFBeEIsRUFBMENDLGdCQUExQyxDQUEyRCxPQUEzRCxFQUFvRSxZQUFXO0FBQzNFLFFBQU1DLGdCQUFnQkgsU0FBU0MsY0FBVCxDQUF3QixnQkFBeEIsQ0FBdEI7QUFDQSxRQUFNRyxPQUFPSixTQUFTSyxzQkFBVCxDQUFnQyxXQUFoQyxFQUE2QyxDQUE3QyxDQUFiO0FBQ0EsUUFBSUMsWUFBYU4sU0FBU0ssc0JBQVQsQ0FBZ0MsZ0JBQWhDLENBQWpCO0FBQ0EsUUFBTUUsT0FBT1AsU0FBU08sSUFBdEI7QUFDQSxRQUFHSixjQUFjSyxTQUFkLENBQXdCQyxRQUF4QixDQUFpQyxXQUFqQyxDQUFILEVBQ0E7QUFDSU4sc0JBQWNLLFNBQWQsQ0FBd0JFLE1BQXhCLENBQStCLFdBQS9CO0FBQ0FILGFBQUtDLFNBQUwsQ0FBZUUsTUFBZixDQUFzQixpQkFBdEI7QUFDQU4sYUFBS0ksU0FBTCxDQUFlRSxNQUFmLENBQXNCLFdBQXRCO0FBQ0EsYUFBSSxJQUFJQyxJQUFJLENBQVosRUFBZUEsSUFBSUwsVUFBVU0sTUFBN0IsRUFBcUNELEdBQXJDLEVBQ0E7QUFDSUwsc0JBQVVLLENBQVYsRUFBYUUsS0FBYixHQUFxQixFQUFyQjtBQUNIO0FBQ0osS0FURCxNQVdBO0FBQ0lDLGVBQU9DLE1BQVAsQ0FBYyxDQUFkLEVBQWlCLENBQWpCO0FBQ0FaLHNCQUFjSyxTQUFkLENBQXdCUSxHQUF4QixDQUE0QixXQUE1QjtBQUNBVCxhQUFLQyxTQUFMLENBQWVRLEdBQWYsQ0FBbUIsaUJBQW5CO0FBQ0FaLGFBQUtJLFNBQUwsQ0FBZVEsR0FBZixDQUFtQixXQUFuQjtBQUNBLGFBQUksSUFBSUwsSUFBSSxDQUFaLEVBQWVBLElBQUlMLFVBQVVNLE1BQTdCLEVBQXFDRCxHQUFyQyxFQUNBO0FBQ0lMLHNCQUFVSyxDQUFWLEVBQWFFLEtBQWIsQ0FBbUJJLGVBQW5CLEdBQXNDLElBQUlOLElBQUksRUFBVCxHQUFlLEdBQXBEO0FBQ0g7QUFDSjtBQUNILENBMUJGIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL2hhbWJ1cmdlcl9tZW51LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhbWJ1cmdlci1tZW51JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHsgXHJcbiAgICBjb25zdCBoYW1idXJnZXJNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhbWJ1cmdlci1tZW51Jyk7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFpbi1tZW51JylbMF07XHJcbiAgICB2YXIgbWVudUl0ZW1zID0gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21haW4tbWVudS1pdGVtJyk7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICAgIGlmKGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSlcclxuICAgIHtcclxuICAgICAgICBoYW1idXJnZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3ctbmlkZGVuJyk7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbWVudUl0ZW1zLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWVudUl0ZW1zW2ldLnN0eWxlID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGwoMCwgMCk7XHJcbiAgICAgICAgaGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93LW5pZGRlbicpO1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IG1lbnVJdGVtcy5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtc1tpXS5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSAoMSArIGkgLyAxMCkgKyAncyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gfSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/hamburger_menu.js\n");

/***/ })

/******/ });