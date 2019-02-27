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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\n// Enum background types.\r\nvar Backgrounds;\r\n(function (Backgrounds) {\r\n    Backgrounds[\"Orange\"] = \"orange\";\r\n    Backgrounds[\"LightYellow\"] = \"lightyellow\";\r\n})(Backgrounds || (Backgrounds = {}));\r\n;\r\n// Elements class instance.\r\nvar Elements = /** @class */ (function () {\r\n    /**\r\n     * Read only property that can not be modified. The constructor can't be called since it's private.\r\n     */\r\n    function Elements() {\r\n        var _this = this;\r\n        this.elements = {};\r\n        this.setElementById = function (value) {\r\n            var _a;\r\n            var ele = document.getElementById(value);\r\n            _this.elements = __assign({}, _this.elements, (_a = {}, _a[value] = ele, _a));\r\n            return ele;\r\n        };\r\n        this.getElementsById = function () {\r\n            return _this.elements;\r\n        };\r\n    }\r\n    /**\r\n     * If get instance has not been initialized then it will construct a new OnlyOne class object,\r\n     * then store it into the instance property. If it has already been created then it will simply\r\n     * return the instance property.\r\n     * This assures that there will only ever be one instance.\r\n     */\r\n    Elements.getInstance = function () {\r\n        if (!Elements.instance) {\r\n            Elements.instance = new Elements();\r\n        }\r\n        return Elements.instance;\r\n    };\r\n    return Elements;\r\n}());\r\nvar elements = Elements.getInstance();\r\nvar appEl = elements.setElementById('App');\r\nvar Button = elements.setElementById('Button');\r\nvar OnlyButton = elements.setElementById('OnlyButton');\r\nif (appEl) {\r\n    appEl.style.backgroundColor = Backgrounds.Orange;\r\n}\r\nvar ClickHandler = /** @class */ (function () {\r\n    function ClickHandler() {\r\n        var _this = this;\r\n        this.bodyEle = appEl;\r\n        this.currentBackground = Backgrounds.Orange;\r\n        this.onClickHandler = function () {\r\n            switch (_this.currentBackground) {\r\n                case Backgrounds.Orange:\r\n                    _this.currentBackground = Backgrounds.LightYellow;\r\n                    break;\r\n                case Backgrounds.LightYellow:\r\n                    _this.currentBackground = Backgrounds.Orange;\r\n                    break;\r\n            }\r\n            if (_this.bodyEle) {\r\n                _this.bodyEle.style.backgroundColor = _this.currentBackground;\r\n            }\r\n        };\r\n    }\r\n    return ClickHandler;\r\n}());\r\n// Private Constructors & Singletons (added with TypeScript 2.0)\r\nvar OnlyOneClickHandler = /** @class */ (function () {\r\n    /**\r\n     * Read only property that can not be modified. The constructor can't be called since it's private.\r\n     */\r\n    function OnlyOneClickHandler(name) {\r\n        var _this = this;\r\n        this.name = name;\r\n        this.bodyEle = appEl;\r\n        this.currentBackground = Backgrounds.Orange;\r\n        this.onClickHandler = function () {\r\n            switch (_this.currentBackground) {\r\n                case Backgrounds.Orange:\r\n                    _this.currentBackground = Backgrounds.LightYellow;\r\n                    break;\r\n                case Backgrounds.LightYellow:\r\n                    _this.currentBackground = Backgrounds.Orange;\r\n                    break;\r\n            }\r\n            if (_this.bodyEle) {\r\n                _this.bodyEle.style.backgroundColor = _this.currentBackground;\r\n            }\r\n        };\r\n    }\r\n    /**\r\n     * If get instance has not been initialized then it will construct a new OnlyOne class object,\r\n     * then store it into the instance property. If it has already been created then it will simply\r\n     * return the instance property.\r\n     * This assures that there will only ever be one instance.\r\n     */\r\n    OnlyOneClickHandler.getInstance = function () {\r\n        if (!OnlyOneClickHandler.instance) {\r\n            OnlyOneClickHandler.instance = new OnlyOneClickHandler('The Only One');\r\n        }\r\n        return OnlyOneClickHandler.instance;\r\n    };\r\n    return OnlyOneClickHandler;\r\n}());\r\nvar anotherClickHandler = OnlyOneClickHandler.getInstance();\r\nvar clickHandler = new ClickHandler();\r\nif (Button) {\r\n    Button.onclick = clickHandler.onClickHandler;\r\n}\r\nif (OnlyButton) {\r\n    OnlyButton.onclick = anotherClickHandler.onClickHandler;\r\n}\r\nvar activeElements = elements.getElementsById();\r\nconsole.log(activeElements);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cz9mMWIyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbi8vIEVudW0gYmFja2dyb3VuZCB0eXBlcy5cclxudmFyIEJhY2tncm91bmRzO1xyXG4oZnVuY3Rpb24gKEJhY2tncm91bmRzKSB7XHJcbiAgICBCYWNrZ3JvdW5kc1tcIk9yYW5nZVwiXSA9IFwib3JhbmdlXCI7XHJcbiAgICBCYWNrZ3JvdW5kc1tcIkxpZ2h0WWVsbG93XCJdID0gXCJsaWdodHllbGxvd1wiO1xyXG59KShCYWNrZ3JvdW5kcyB8fCAoQmFja2dyb3VuZHMgPSB7fSkpO1xyXG47XHJcbi8vIEVsZW1lbnRzIGNsYXNzIGluc3RhbmNlLlxyXG52YXIgRWxlbWVudHMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIFJlYWQgb25seSBwcm9wZXJ0eSB0aGF0IGNhbiBub3QgYmUgbW9kaWZpZWQuIFRoZSBjb25zdHJ1Y3RvciBjYW4ndCBiZSBjYWxsZWQgc2luY2UgaXQncyBwcml2YXRlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBFbGVtZW50cygpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSB7fTtcclxuICAgICAgICB0aGlzLnNldEVsZW1lbnRCeUlkID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgdmFyIGVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZhbHVlKTtcclxuICAgICAgICAgICAgX3RoaXMuZWxlbWVudHMgPSBfX2Fzc2lnbih7fSwgX3RoaXMuZWxlbWVudHMsIChfYSA9IHt9LCBfYVt2YWx1ZV0gPSBlbGUsIF9hKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdldEVsZW1lbnRzQnlJZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmVsZW1lbnRzO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElmIGdldCBpbnN0YW5jZSBoYXMgbm90IGJlZW4gaW5pdGlhbGl6ZWQgdGhlbiBpdCB3aWxsIGNvbnN0cnVjdCBhIG5ldyBPbmx5T25lIGNsYXNzIG9iamVjdCxcclxuICAgICAqIHRoZW4gc3RvcmUgaXQgaW50byB0aGUgaW5zdGFuY2UgcHJvcGVydHkuIElmIGl0IGhhcyBhbHJlYWR5IGJlZW4gY3JlYXRlZCB0aGVuIGl0IHdpbGwgc2ltcGx5XHJcbiAgICAgKiByZXR1cm4gdGhlIGluc3RhbmNlIHByb3BlcnR5LlxyXG4gICAgICogVGhpcyBhc3N1cmVzIHRoYXQgdGhlcmUgd2lsbCBvbmx5IGV2ZXIgYmUgb25lIGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBFbGVtZW50cy5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIUVsZW1lbnRzLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIEVsZW1lbnRzLmluc3RhbmNlID0gbmV3IEVsZW1lbnRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBFbGVtZW50cy5pbnN0YW5jZTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRWxlbWVudHM7XHJcbn0oKSk7XHJcbnZhciBlbGVtZW50cyA9IEVsZW1lbnRzLmdldEluc3RhbmNlKCk7XHJcbnZhciBhcHBFbCA9IGVsZW1lbnRzLnNldEVsZW1lbnRCeUlkKCdBcHAnKTtcclxudmFyIEJ1dHRvbiA9IGVsZW1lbnRzLnNldEVsZW1lbnRCeUlkKCdCdXR0b24nKTtcclxudmFyIE9ubHlCdXR0b24gPSBlbGVtZW50cy5zZXRFbGVtZW50QnlJZCgnT25seUJ1dHRvbicpO1xyXG5pZiAoYXBwRWwpIHtcclxuICAgIGFwcEVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IEJhY2tncm91bmRzLk9yYW5nZTtcclxufVxyXG52YXIgQ2xpY2tIYW5kbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2xpY2tIYW5kbGVyKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib2R5RWxlID0gYXBwRWw7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QmFja2dyb3VuZCA9IEJhY2tncm91bmRzLk9yYW5nZTtcclxuICAgICAgICB0aGlzLm9uQ2xpY2tIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF90aGlzLmN1cnJlbnRCYWNrZ3JvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEJhY2tncm91bmRzLk9yYW5nZTpcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jdXJyZW50QmFja2dyb3VuZCA9IEJhY2tncm91bmRzLkxpZ2h0WWVsbG93O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBCYWNrZ3JvdW5kcy5MaWdodFllbGxvdzpcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jdXJyZW50QmFja2dyb3VuZCA9IEJhY2tncm91bmRzLk9yYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX3RoaXMuYm9keUVsZSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuYm9keUVsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBfdGhpcy5jdXJyZW50QmFja2dyb3VuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQ2xpY2tIYW5kbGVyO1xyXG59KCkpO1xyXG4vLyBQcml2YXRlIENvbnN0cnVjdG9ycyAmIFNpbmdsZXRvbnMgKGFkZGVkIHdpdGggVHlwZVNjcmlwdCAyLjApXHJcbnZhciBPbmx5T25lQ2xpY2tIYW5kbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZWFkIG9ubHkgcHJvcGVydHkgdGhhdCBjYW4gbm90IGJlIG1vZGlmaWVkLiBUaGUgY29uc3RydWN0b3IgY2FuJ3QgYmUgY2FsbGVkIHNpbmNlIGl0J3MgcHJpdmF0ZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gT25seU9uZUNsaWNrSGFuZGxlcihuYW1lKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuYm9keUVsZSA9IGFwcEVsO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEJhY2tncm91bmQgPSBCYWNrZ3JvdW5kcy5PcmFuZ2U7XHJcbiAgICAgICAgdGhpcy5vbkNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfdGhpcy5jdXJyZW50QmFja2dyb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBCYWNrZ3JvdW5kcy5PcmFuZ2U6XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY3VycmVudEJhY2tncm91bmQgPSBCYWNrZ3JvdW5kcy5MaWdodFllbGxvdztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgQmFja2dyb3VuZHMuTGlnaHRZZWxsb3c6XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY3VycmVudEJhY2tncm91bmQgPSBCYWNrZ3JvdW5kcy5PcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF90aGlzLmJvZHlFbGUpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmJvZHlFbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gX3RoaXMuY3VycmVudEJhY2tncm91bmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJZiBnZXQgaW5zdGFuY2UgaGFzIG5vdCBiZWVuIGluaXRpYWxpemVkIHRoZW4gaXQgd2lsbCBjb25zdHJ1Y3QgYSBuZXcgT25seU9uZSBjbGFzcyBvYmplY3QsXHJcbiAgICAgKiB0aGVuIHN0b3JlIGl0IGludG8gdGhlIGluc3RhbmNlIHByb3BlcnR5LiBJZiBpdCBoYXMgYWxyZWFkeSBiZWVuIGNyZWF0ZWQgdGhlbiBpdCB3aWxsIHNpbXBseVxyXG4gICAgICogcmV0dXJuIHRoZSBpbnN0YW5jZSBwcm9wZXJ0eS5cclxuICAgICAqIFRoaXMgYXNzdXJlcyB0aGF0IHRoZXJlIHdpbGwgb25seSBldmVyIGJlIG9uZSBpbnN0YW5jZS5cclxuICAgICAqL1xyXG4gICAgT25seU9uZUNsaWNrSGFuZGxlci5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIU9ubHlPbmVDbGlja0hhbmRsZXIuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgT25seU9uZUNsaWNrSGFuZGxlci5pbnN0YW5jZSA9IG5ldyBPbmx5T25lQ2xpY2tIYW5kbGVyKCdUaGUgT25seSBPbmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE9ubHlPbmVDbGlja0hhbmRsZXIuaW5zdGFuY2U7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE9ubHlPbmVDbGlja0hhbmRsZXI7XHJcbn0oKSk7XHJcbnZhciBhbm90aGVyQ2xpY2tIYW5kbGVyID0gT25seU9uZUNsaWNrSGFuZGxlci5nZXRJbnN0YW5jZSgpO1xyXG52YXIgY2xpY2tIYW5kbGVyID0gbmV3IENsaWNrSGFuZGxlcigpO1xyXG5pZiAoQnV0dG9uKSB7XHJcbiAgICBCdXR0b24ub25jbGljayA9IGNsaWNrSGFuZGxlci5vbkNsaWNrSGFuZGxlcjtcclxufVxyXG5pZiAoT25seUJ1dHRvbikge1xyXG4gICAgT25seUJ1dHRvbi5vbmNsaWNrID0gYW5vdGhlckNsaWNrSGFuZGxlci5vbkNsaWNrSGFuZGxlcjtcclxufVxyXG52YXIgYWN0aXZlRWxlbWVudHMgPSBlbGVtZW50cy5nZXRFbGVtZW50c0J5SWQoKTtcclxuY29uc29sZS5sb2coYWN0aXZlRWxlbWVudHMpO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.ts\n");

/***/ })

/******/ });