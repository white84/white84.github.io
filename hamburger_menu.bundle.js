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
eval("\n\ndocument.getElementById('hamburger-menu').addEventListener('click', function () {\n    var hamburgerMenu = document.getElementById('hamburger-menu');\n    var menu = document.getElementsByClassName('main-menu')[0];\n    var menuItems = document.getElementsByClassName('main-menu-item');\n\n    var body = document.body;\n    var i = 0;\n    if (hamburgerMenu.classList.contains('is-active')) {\n        hamburgerMenu.classList.remove('is-active');\n        body.classList.remove('overflow-nidden');\n        menu.classList.add('is-hidden');\n        for (i = 0; i < menuItems.length; i++) {\n            menuItems[i].style = '';\n        }\n        window.setTimeout(function () {\n            menu.classList.add('main-menu--hide');\n            menu.classList.remove('is-active');\n            menu.classList.remove('is-hidden');\n        }, 500);\n    } else {\n        hamburgerMenu.classList.add('is-active');\n        body.classList.add('overflow-nidden');\n        for (i = 0; i < menuItems.length; i++) {\n            menuItems[i].style.transitionDelay = 1 + i / 10 + 's';\n        }\n        menu.classList.remove('main-menu--hide');\n        window.setTimeout(function () {\n            menu.classList.add('is-active');\n            window.scroll(0, 0);\n        }, 100);\n    }\n});\n\nvar parallax = document.getElementsByClassName('parallax')[0];\nwindow.onscroll = function () {\n    var scrolled = window.pageYOffset || document.documentElement.scrollTop;\n    parallax.scrollTop = scrolled;\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvaGFtYnVyZ2VyX21lbnUuanM/MmIyMiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbWJ1cmdlck1lbnUiLCJtZW51IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm1lbnVJdGVtcyIsImJvZHkiLCJpIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJsZW5ndGgiLCJzdHlsZSIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJ0cmFuc2l0aW9uRGVsYXkiLCJzY3JvbGwiLCJwYXJhbGxheCIsIm9uc2Nyb2xsIiwic2Nyb2xsZWQiLCJwYWdlWU9mZnNldCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsU0FBU0MsY0FBVCxDQUF3QixnQkFBeEIsRUFBMENDLGdCQUExQyxDQUEyRCxPQUEzRCxFQUFvRSxZQUFXO0FBQzNFLFFBQU1DLGdCQUFnQkgsU0FBU0MsY0FBVCxDQUF3QixnQkFBeEIsQ0FBdEI7QUFDQSxRQUFNRyxPQUFPSixTQUFTSyxzQkFBVCxDQUFnQyxXQUFoQyxFQUE2QyxDQUE3QyxDQUFiO0FBQ0EsUUFBTUMsWUFBYU4sU0FBU0ssc0JBQVQsQ0FBZ0MsZ0JBQWhDLENBQW5COztBQUVBLFFBQU1FLE9BQU9QLFNBQVNPLElBQXRCO0FBQ0EsUUFBSUMsSUFBSSxDQUFSO0FBQ0EsUUFBR0wsY0FBY00sU0FBZCxDQUF3QkMsUUFBeEIsQ0FBaUMsV0FBakMsQ0FBSCxFQUNBO0FBQ0lQLHNCQUFjTSxTQUFkLENBQXdCRSxNQUF4QixDQUErQixXQUEvQjtBQUNBSixhQUFLRSxTQUFMLENBQWVFLE1BQWYsQ0FBc0IsaUJBQXRCO0FBQ0FQLGFBQUtLLFNBQUwsQ0FBZUcsR0FBZixDQUFtQixXQUFuQjtBQUNBLGFBQUlKLElBQUksQ0FBUixFQUFXQSxJQUFJRixVQUFVTyxNQUF6QixFQUFpQ0wsR0FBakMsRUFDQTtBQUNJRixzQkFBVUUsQ0FBVixFQUFhTSxLQUFiLEdBQXFCLEVBQXJCO0FBQ0g7QUFDREMsZUFBT0MsVUFBUCxDQUFrQixZQUFNO0FBQ3BCWixpQkFBS0ssU0FBTCxDQUFlRyxHQUFmLENBQW1CLGlCQUFuQjtBQUNBUixpQkFBS0ssU0FBTCxDQUFlRSxNQUFmLENBQXNCLFdBQXRCO0FBQ0FQLGlCQUFLSyxTQUFMLENBQWVFLE1BQWYsQ0FBc0IsV0FBdEI7QUFDSCxTQUpELEVBSUcsR0FKSDtBQUtILEtBZEQsTUFnQkE7QUFDSVIsc0JBQWNNLFNBQWQsQ0FBd0JHLEdBQXhCLENBQTRCLFdBQTVCO0FBQ0FMLGFBQUtFLFNBQUwsQ0FBZUcsR0FBZixDQUFtQixpQkFBbkI7QUFDQSxhQUFJSixJQUFJLENBQVIsRUFBV0EsSUFBSUYsVUFBVU8sTUFBekIsRUFBaUNMLEdBQWpDLEVBQ0E7QUFDSUYsc0JBQVVFLENBQVYsRUFBYU0sS0FBYixDQUFtQkcsZUFBbkIsR0FBc0MsSUFBSVQsSUFBSSxFQUFULEdBQWUsR0FBcEQ7QUFDSDtBQUNESixhQUFLSyxTQUFMLENBQWVFLE1BQWYsQ0FBc0IsaUJBQXRCO0FBQ0FJLGVBQU9DLFVBQVAsQ0FBa0IsWUFBTTtBQUNwQlosaUJBQUtLLFNBQUwsQ0FBZUcsR0FBZixDQUFtQixXQUFuQjtBQUNBRyxtQkFBT0csTUFBUCxDQUFjLENBQWQsRUFBaUIsQ0FBakI7QUFDSCxTQUhELEVBR0csR0FISDtBQUlIO0FBQ0gsQ0FwQ0Y7O0FBc0NDLElBQUlDLFdBQVduQixTQUFTSyxzQkFBVCxDQUFnQyxVQUFoQyxFQUE0QyxDQUE1QyxDQUFmO0FBQ0FVLE9BQU9LLFFBQVAsR0FBa0IsWUFBVztBQUMxQixRQUFJQyxXQUFXTixPQUFPTyxXQUFQLElBQXNCdEIsU0FBU3VCLGVBQVQsQ0FBeUJDLFNBQTlEO0FBQ0NMLGFBQVNLLFNBQVQsR0FBcUJILFFBQXJCO0FBQ0gsQ0FIRCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9oYW1idXJnZXJfbWVudS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYW1idXJnZXItbWVudScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7IFxyXG4gICAgY29uc3QgaGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYW1idXJnZXItbWVudScpO1xyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21haW4tbWVudScpWzBdO1xyXG4gICAgY29uc3QgbWVudUl0ZW1zID0gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21haW4tbWVudS1pdGVtJyk7XHJcblxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICB2YXIgaSA9IDA7XHJcbiAgICBpZihoYW1idXJnZXJNZW51LmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykpXHJcbiAgICB7XHJcbiAgICAgICAgaGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93LW5pZGRlbicpO1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XHJcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgbWVudUl0ZW1zLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWVudUl0ZW1zW2ldLnN0eWxlID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtYWluLW1lbnUtLWhpZGUnKTtcclxuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdy1uaWRkZW4nKTtcclxuICAgICAgICBmb3IoaSA9IDA7IGkgPCBtZW51SXRlbXMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtZW51SXRlbXNbaV0uc3R5bGUudHJhbnNpdGlvbkRlbGF5ID0gKDEgKyBpIC8gMTApICsgJ3MnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tbWVudS0taGlkZScpO1xyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbCgwLCAwKTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG4gfSlcclxuXHJcbiB2YXIgcGFyYWxsYXggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYXJhbGxheCcpWzBdO1xyXG4gd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgc2Nyb2xsZWQgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgICBwYXJhbGxheC5zY3JvbGxUb3AgPSBzY3JvbGxlZDtcclxuIH07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/hamburger_menu.js\n");

/***/ })

/******/ });