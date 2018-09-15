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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _slider = __webpack_require__(/*! ./slider.js */ \"./src/js/slider.js\");\n\nvar _slider2 = _interopRequireDefault(_slider);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Call Slider\n(0, _slider2.default)();\n\n// Call Slider Window Resize\nwindow.onresize = function () {\n    (0, _slider2.default)();\n};\n\n// Click Remove Item\ndocument.querySelectorAll('.neon-slider-history-btn-remove').forEach(function (btnRemove) {\n    btnRemove.addEventListener(\"click\", function () {\n        var $li = this.parentNode.parentNode.parentNode.parentNode.parentNode;\n        var $ul = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;\n        var wrapper = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;\n\n        $li.classList.add('removed');\n\n        if ($ul.querySelectorAll('li:not(.removed)').length === 0) {\n            wrapper.classList.add('empty');\n        }\n    });\n});\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function () {\n    var $slider = document.getElementsByClassName('neon-slider');\n    var $ul = document.getElementsByClassName('neon-slider-items')[0];\n    var sizeUl = 0;\n    window.sizeLi = document.body.offsetWidth / $ul.children.length;\n\n    // Slides\n    var LIClick = function LIClick() {\n        var $this = this;\n        var translate3d = 0;\n        var sizeLi = window.sizeLi;\n\n        if (document.body.offsetWidth > 768) {\n            if ($this.dataset.indexNumber == 1) {\n                translate3d = sizeLi / 2;\n            } else if ($this.dataset.indexNumber == 2) {\n                translate3d = (sizeLi - sizeLi / 2) * -1;\n            } else {\n                translate3d = (sizeLi * ($this.dataset.indexNumber - 1) - sizeLi / 2) * -1;\n            }\n        } else {\n            if ($this.dataset.indexNumber == 1) {\n                translate3d = 0;\n            } else {\n                translate3d = sizeLi * ($this.dataset.indexNumber - 1) * -1;\n            }\n        }\n\n        $ul.style.transform = 'translate3d(' + translate3d + 'px, 0px, 0px)';\n\n        for (var i = 0; i < $ul.children.length; i++) {\n            $ul.children[i].classList.remove('active');\n        }\n\n        $this.classList.add('active');\n\n        $dots.children[$this.dataset.indexNumber - 1].click();\n    };\n\n    var countItem = 0;\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n        for (var _iterator = $ul.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var liElement = _step.value;\n\n            countItem++;\n            liElement.dataset.indexNumber = countItem;\n\n            // Set spacing <LI>(margin, padding, border)\n            var style = liElement.currentStyle || window.getComputedStyle(liElement),\n                margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight),\n                padding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight),\n                border = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);\n            var spacing = margin - padding + border;\n\n            // Set width <LI>\n            if (document.body.offsetWidth > 768) {\n                sizeLi = $slider[0].offsetWidth / 2;\n            } else {\n                sizeLi = $slider[0].offsetWidth - 30;\n            }\n\n            liElement.style.width = sizeLi + 'px';\n\n            // Set width <Ul>\n            if (sizeUl === 0) {\n                sizeUl = sizeLi + spacing / 2 * 3;\n            }\n            sizeUl = sizeUl + sizeLi;\n\n            if (!$slider[0].classList.contains('active')) {\n                if (document.body.offsetWidth > 768) {\n                    $ul.style.transform = 'translate3d(' + sizeLi / 2 + 'px, 0px, 0px)';\n                } else {\n                    $ul.style.transform = 'translate3d(0px, 0px, 0px)';\n                }\n\n                liElement.addEventListener(\"click\", LIClick, false);\n            }\n        }\n\n        // Dots\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return) {\n                _iterator.return();\n            }\n        } finally {\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n\n    var $dots = document.getElementsByClassName('neon-slider-dots')[0];\n    var DotsClick = function DotsClick() {\n        var $this = this;\n\n        $ul.children[$this.dataset.indexNumber - 1].click();\n\n        for (var i = 0; i < $dots.children.length; i++) {\n            $dots.children[i].classList.remove('active');\n        }\n\n        $this.classList.add('active');\n    };\n\n    var countDots = 0;\n    var _iteratorNormalCompletion2 = true;\n    var _didIteratorError2 = false;\n    var _iteratorError2 = undefined;\n\n    try {\n        for (var _iterator2 = $dots.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n            var dotElement = _step2.value;\n\n            countDots++;\n            dotElement.dataset.indexNumber = countDots;\n\n            if (!$slider[0].classList.contains('active')) {\n                dotElement.addEventListener(\"click\", DotsClick, false);\n            }\n        }\n    } catch (err) {\n        _didIteratorError2 = true;\n        _iteratorError2 = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion2 && _iterator2.return) {\n                _iterator2.return();\n            }\n        } finally {\n            if (_didIteratorError2) {\n                throw _iteratorError2;\n            }\n        }\n    }\n\n    if ($ul.getElementsByClassName('active').length) {\n        $ul.getElementsByClassName('active')[0].click();\n    } else {\n        $ul.children[0].classList.add('active');\n        $dots.children[0].classList.add('active');\n    }\n\n    $ul.style.width = sizeUl + 'px';\n\n    $slider[0].classList.add('active');\n};\n\n//# sourceURL=webpack:///./src/js/slider.js?");

/***/ })

/******/ });