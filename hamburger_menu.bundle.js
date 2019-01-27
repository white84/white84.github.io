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
eval("\n\ndocument.getElementById('hamburger-menu').addEventListener('click', function () {\n    var hamburgerMenu = document.getElementById('hamburger-menu');\n    var menu = document.getElementsByClassName('main-menu')[0];\n    var menuItems = document.getElementsByClassName('main-menu-item');\n\n    var body = document.body;\n    var i = 0;\n    if (hamburgerMenu.classList.contains('is-active')) {\n        hamburgerMenu.classList.remove('is-active');\n        body.classList.remove('overflow-nidden');\n        menu.classList.add('is-hidden');\n        for (i = 0; i < menuItems.length; i++) {\n            menuItems[i].style = '';\n        }\n        window.setTimeout(function () {\n            menu.classList.add('main-menu--hide');\n            menu.classList.remove('is-active');\n            menu.classList.remove('is-hidden');\n        }, 500);\n    } else {\n        window.scroll(0, 0);\n        hamburgerMenu.classList.add('is-active');\n        body.classList.add('overflow-nidden');\n        for (i = 0; i < menuItems.length; i++) {\n            menuItems[i].style.transitionDelay = 1 + i / 10 + 's';\n        }\n        menu.classList.remove('main-menu--hide');\n        window.setTimeout(function () {\n            menu.classList.add('is-active');\n        }, 100);\n    }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvaGFtYnVyZ2VyX21lbnUuanM/MmIyMiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbWJ1cmdlck1lbnUiLCJtZW51IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm1lbnVJdGVtcyIsImJvZHkiLCJpIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJsZW5ndGgiLCJzdHlsZSIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJzY3JvbGwiLCJ0cmFuc2l0aW9uRGVsYXkiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFNBQVNDLGNBQVQsQ0FBd0IsZ0JBQXhCLEVBQTBDQyxnQkFBMUMsQ0FBMkQsT0FBM0QsRUFBb0UsWUFBVztBQUMzRSxRQUFNQyxnQkFBZ0JILFNBQVNDLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQXRCO0FBQ0EsUUFBTUcsT0FBT0osU0FBU0ssc0JBQVQsQ0FBZ0MsV0FBaEMsRUFBNkMsQ0FBN0MsQ0FBYjtBQUNBLFFBQU1DLFlBQWFOLFNBQVNLLHNCQUFULENBQWdDLGdCQUFoQyxDQUFuQjs7QUFFQSxRQUFNRSxPQUFPUCxTQUFTTyxJQUF0QjtBQUNBLFFBQUlDLElBQUksQ0FBUjtBQUNBLFFBQUdMLGNBQWNNLFNBQWQsQ0FBd0JDLFFBQXhCLENBQWlDLFdBQWpDLENBQUgsRUFDQTtBQUNJUCxzQkFBY00sU0FBZCxDQUF3QkUsTUFBeEIsQ0FBK0IsV0FBL0I7QUFDQUosYUFBS0UsU0FBTCxDQUFlRSxNQUFmLENBQXNCLGlCQUF0QjtBQUNBUCxhQUFLSyxTQUFMLENBQWVHLEdBQWYsQ0FBbUIsV0FBbkI7QUFDQSxhQUFJSixJQUFJLENBQVIsRUFBV0EsSUFBSUYsVUFBVU8sTUFBekIsRUFBaUNMLEdBQWpDLEVBQ0E7QUFDSUYsc0JBQVVFLENBQVYsRUFBYU0sS0FBYixHQUFxQixFQUFyQjtBQUNIO0FBQ0RDLGVBQU9DLFVBQVAsQ0FBa0IsWUFBTTtBQUNwQlosaUJBQUtLLFNBQUwsQ0FBZUcsR0FBZixDQUFtQixpQkFBbkI7QUFDQVIsaUJBQUtLLFNBQUwsQ0FBZUUsTUFBZixDQUFzQixXQUF0QjtBQUNBUCxpQkFBS0ssU0FBTCxDQUFlRSxNQUFmLENBQXNCLFdBQXRCO0FBQ0gsU0FKRCxFQUlHLEdBSkg7QUFLSCxLQWRELE1BZ0JBO0FBQ0lJLGVBQU9FLE1BQVAsQ0FBYyxDQUFkLEVBQWlCLENBQWpCO0FBQ0FkLHNCQUFjTSxTQUFkLENBQXdCRyxHQUF4QixDQUE0QixXQUE1QjtBQUNBTCxhQUFLRSxTQUFMLENBQWVHLEdBQWYsQ0FBbUIsaUJBQW5CO0FBQ0EsYUFBSUosSUFBSSxDQUFSLEVBQVdBLElBQUlGLFVBQVVPLE1BQXpCLEVBQWlDTCxHQUFqQyxFQUNBO0FBQ0lGLHNCQUFVRSxDQUFWLEVBQWFNLEtBQWIsQ0FBbUJJLGVBQW5CLEdBQXNDLElBQUlWLElBQUksRUFBVCxHQUFlLEdBQXBEO0FBQ0g7QUFDREosYUFBS0ssU0FBTCxDQUFlRSxNQUFmLENBQXNCLGlCQUF0QjtBQUNBSSxlQUFPQyxVQUFQLENBQWtCLFlBQU07QUFDcEJaLGlCQUFLSyxTQUFMLENBQWVHLEdBQWYsQ0FBbUIsV0FBbkI7QUFDSCxTQUZELEVBRUcsR0FGSDtBQUdIO0FBQ0gsQ0FwQ0YiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvaGFtYnVyZ2VyX21lbnUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFtYnVyZ2VyLW1lbnUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkgeyBcclxuICAgIGNvbnN0IGhhbWJ1cmdlck1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFtYnVyZ2VyLW1lbnUnKTtcclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYWluLW1lbnUnKVswXTtcclxuICAgIGNvbnN0IG1lbnVJdGVtcyA9ICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYWluLW1lbnUtaXRlbScpO1xyXG5cclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgdmFyIGkgPSAwO1xyXG4gICAgaWYoaGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKVxyXG4gICAge1xyXG4gICAgICAgIGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvdy1uaWRkZW4nKTtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgIGZvcihpID0gMDsgaSA8IG1lbnVJdGVtcy5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtc1tpXS5zdHlsZSA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbi1tZW51LS1oaWRlJyk7XHJcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsKDAsIDApO1xyXG4gICAgICAgIGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdy1uaWRkZW4nKTtcclxuICAgICAgICBmb3IoaSA9IDA7IGkgPCBtZW51SXRlbXMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtZW51SXRlbXNbaV0uc3R5bGUudHJhbnNpdGlvbkRlbGF5ID0gKDEgKyBpIC8gMTApICsgJ3MnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tbWVudS0taGlkZScpO1xyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG4gfSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/hamburger_menu.js\n");

/***/ })

/******/ });