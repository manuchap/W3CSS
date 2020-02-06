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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/assets/javascripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/javascripts/app.js":
/*!***************************************!*\
  !*** ./app/assets/javascripts/app.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var script_loader_w3c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! script-loader!./w3c.js */ "./node_modules/script-loader/index.js!./app/assets/javascripts/w3c.js");
/* harmony import */ var script_loader_w3c_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(script_loader_w3c_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stylesheets_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stylesheets/app.scss */ "./app/assets/stylesheets/app.scss");
/* harmony import */ var _stylesheets_app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_app_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sections_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/_manager */ "./app/assets/javascripts/sections/_manager.js");
/* harmony import */ var _sections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections */ "./app/assets/javascripts/sections/index.js");
// === Wagon main javascript file ===
 // Tell Webpack to load the style

 // Import the classes required to handle sections



document.addEventListener('DOMContentLoaded', function (event) {
  // Load all the sections
  var sectionsManager = new _sections_manager__WEBPACK_IMPORTED_MODULE_2__["default"](); // Register sections here. DO NOT REMOVE OR UPDATE THIS LINE

  sectionsManager.registerSection('tabs', _sections__WEBPACK_IMPORTED_MODULE_3__["Tab"]);
  sectionsManager.registerSection('accordions', _sections__WEBPACK_IMPORTED_MODULE_3__["Accordion"]);
  sectionsManager.registerSection('slideshows', _sections__WEBPACK_IMPORTED_MODULE_3__["Slideshow"]);
  sectionsManager.registerSection('lists', _sections__WEBPACK_IMPORTED_MODULE_3__["List"]);
  sectionsManager.registerSection('forms', _sections__WEBPACK_IMPORTED_MODULE_3__["Form"]);
  sectionsManager.registerSection('tables', _sections__WEBPACK_IMPORTED_MODULE_3__["Table"]);
  sectionsManager.registerSection('cards', _sections__WEBPACK_IMPORTED_MODULE_3__["Card"]);
  sectionsManager.registerSection('container', _sections__WEBPACK_IMPORTED_MODULE_3__["Container"]);
  sectionsManager.registerSection('columns', _sections__WEBPACK_IMPORTED_MODULE_3__["Column"]);
  sectionsManager.registerSection('iconcards', _sections__WEBPACK_IMPORTED_MODULE_3__["Iconcard"]);
  sectionsManager.registerSection('header', _sections__WEBPACK_IMPORTED_MODULE_3__["Header"]);
  sectionsManager.registerSection('footer', _sections__WEBPACK_IMPORTED_MODULE_3__["Footer"]);
  sectionsManager.registerSection('navigation', _sections__WEBPACK_IMPORTED_MODULE_3__["Navigation"]);
  sectionsManager.start();
});

/***/ }),

/***/ "./app/assets/javascripts/sections/_manager.js":
/*!*****************************************************!*\
  !*** ./app/assets/javascripts/sections/_manager.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Manager =
/*#__PURE__*/
function () {
  function Manager() {
    _classCallCheck(this, Manager);

    this.sections = {};
  }

  _createClass(Manager, [{
    key: "registerSection",
    value: function registerSection(type, actions) {
      console.log(type, actions);
      this.sections[type] = actions;
    }
  }, {
    key: "start",
    value: function start() {
      var _this = this;

      this.eachType(function (type, actions) {
        _this.queryAll(".locomotive-section[data-locomotive-section-type=\"".concat(type, "\"]")).forEach(function (section, index) {
          _this.runAction(actions, 'load', section);
        });
      });
      this.registerEvents();
      window._sectionsManager = this;
    }
  }, {
    key: "registerEvents",
    value: function registerEvents() {
      var _this2 = this;

      var events = {
        section: ['load', 'unload', 'select', 'deselect', 'reorder'],
        block: ['select', 'deselect']
      };

      for (var namespace in events) {
        events[namespace].forEach(function (eventType) {
          var eventName = "locomotive::".concat(namespace, "::").concat(eventType);

          var actionName = _this2.eventTypeToActionName(namespace, eventType);

          document.addEventListener(eventName, function (event) {
            _this2.applyRuleToEvent(actionName, event);
          });
        });
      }
    }
  }, {
    key: "applyRuleToEvent",
    value: function applyRuleToEvent(actionName, event) {
      var _event$detail = event.detail,
          sectionId = _event$detail.sectionId,
          blockId = _event$detail.blockId;
      var section = document.getElementById("locomotive-section-".concat(sectionId));
      var type = section.getAttribute('data-locomotive-section-type');
      var block = this.queryOne("[data-locomotive-block=\"section-".concat(sectionId, "-block-").concat(blockId, "\"]"), section);
      this.runAction(this.sections[type], actionName, section, block);
    }
  }, {
    key: "eventTypeToActionName",
    value: function eventTypeToActionName(namespace, eventType) {
      if (namespace === 'section') return eventType;else return namespace + eventType.charAt(0).toUpperCase() + eventType.slice(1);
    }
  }, {
    key: "runAction",
    value: function runAction(actions, actionName, section, block) {
      var action = actions[actionName];
      if (action !== undefined) action(section, block);
    }
  }, {
    key: "eachType",
    value: function eachType(callback) {
      for (var type in this.sections) {
        var actions = this.sections[type];
        callback(type, actions);
      }
    }
  }, {
    key: "queryAll",
    value: function queryAll(selector, scope) {
      scope = scope ? scope : document;
      return scope.querySelectorAll(selector);
    }
  }, {
    key: "queryOne",
    value: function queryOne(selector, scope) {
      scope = scope ? scope : document;
      return scope.querySelector(selector);
    }
  }, {
    key: "testAction",
    value: function testAction(eventType, section, block) {
      var hasBlock = block !== undefined && block !== null;
      var namespace = hasBlock ? 'block' : 'section';
      var sectionId = section.getAttribute('id').replace('locomotive-section-', '');
      var blockId = hasBlock ? block.getAttribute('data-locomotive-block').replace("section-".concat(sectionId, "-block-"), '') : null;
      var detail = {
        detail: {
          sectionId: sectionId,
          blockId: blockId
        }
      };
      var eventName = "locomotive::".concat(namespace, "::").concat(eventType);
      document.dispatchEvent(new CustomEvent(eventName, detail));
    }
  }]);

  return Manager;
}();

/* harmony default export */ __webpack_exports__["default"] = (Manager);

/***/ }),

/***/ "./app/assets/javascripts/sections/accordions.js":
/*!*******************************************************!*\
  !*** ./app/assets/javascripts/sections/accordions.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Section = {// load: (section) => {
  // },
  // unload: (section) => {
  // },
  // select: (section) => {
  // },
  // deselect: (section) => {
  // },
  // reorder: (section) => {
  // },
  // blockSelect: (section, block) => {
  // },
  // blockDeSelect: (section, block) => {
  // }
};
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./app/assets/javascripts/sections/cards.js":
/*!**************************************************!*\
  !*** ./app/assets/javascripts/sections/cards.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Section = {// load: (section) => {
  // },
  // unload: (section) => {
  // },
  // select: (section) => {
  // },
  // deselect: (section) => {
  // },
  // reorder: (section) => {
  // },
  // blockSelect: (section, block) => {
  // },
  // blockDeSelect: (section, block) => {
  // }
};
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./app/assets/javascripts/sections/columns.js":
/*!****************************************************!*\
  !*** ./app/assets/javascripts/sections/columns.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Section = {// load: (section) => {
  // },
  // unload: (section) => {
  // },
  // select: (section) => {
  // },
  // deselect: (section) => {
  // },
  // reorder: (section) => {
  // },
  // blockSelect: (section, block) => {
  // },
  // blockDeSelect: (section, block) => {
  // }
};
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./app/assets/javascripts/sections/container.js":
/*!******************************************************!*\
  !*** ./app/assets/javascripts/sections/container.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Container = {// load: (section) => {
  // },
  // unload: (section) => {
  // },
  // select: (section) => {
  // },
  // deselect: (section) => {
  // },
  // reorder: (section) => {
  // },
  // blockSelect: (section, block) => {
  // },
  // blockDeSelect: (section, block) => {
  // }
};
/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./app/assets/javascripts/sections/footer.js":
/*!***************************************************!*\
  !*** ./app/assets/javascripts/sections/footer.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Section = {// load: (section) => {
  // },
  // unload: (section) => {
  // },
  // select: (section) => {
  // },
  // deselect: (section) => {
  // },
  // reorder: (section) => {
  // },
  // blockSelect: (section, block) => {
  // },
  // blockDeSelect: (section, block) => {
  // }
};
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./app/assets/javascripts/sections/forms.js":
/*!**************************************************!*\
  !*** ./app/assets/javascripts/sections/forms.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Section = {// load: (section) => {
  // },
  // unload: (section) => {
  // },
  // select: (section) => {
  // },
  // deselect: (section) => {
  // },
  // reorder: (section) => {
  // },
  // blockSelect: (section, block) => {
  // },
  // blockDeSelect: (section, block) => {
  // }
};
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./app/assets/javascripts/sections/header.js":
/*!***************************************************!*\
  !*** ./app/assets/javascripts/sections/header.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Section = {// load: (section) => {
  // const { sectionId } = event.detail;
  // const $section = $(`#locomotive-section-${sectionId}`);
  // },
  // unload: (section) => {
  // },
  // select: (section) => {
  // },
  // deselect: (section) => {
  // },
  // reorder: (section) => {
  // },
  // blockSelect: (section, block) => {
  // },
  // blockDeSelect: (section, block) => {
  // }
};
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./app/assets/javascripts/sections/iconcards.js":
/*!******************************************************!*\
  !*** ./app/assets/javascripts/sections/iconcards.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Section = {// load: (section) => {
  // },
  // unload: (section) => {
  // },
  // select: (section) => {
  // },
  // deselect: (section) => {
  // },
  // reorder: (section) => {
  // },
  // blockSelect: (section, block) => {
  // },
  // blockDeSelect: (section, block) => {
  // }
};
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./app/assets/javascripts/sections/index.js":
/*!**************************************************!*\
  !*** ./app/assets/javascripts/sections/index.js ***!
  \**************************************************/
/*! exports provided: Navigation, Footer, Header, Iconcard, Column, Container, Card, Table, Form, List, Slideshow, Accordion, Tab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation */ "./app/assets/javascripts/sections/navigation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return _navigation__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./app/assets/javascripts/sections/footer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _footer__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./app/assets/javascripts/sections/header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _header__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _iconcards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iconcards */ "./app/assets/javascripts/sections/iconcards.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Iconcard", function() { return _iconcards__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _columns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./columns */ "./app/assets/javascripts/sections/columns.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return _columns__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./container */ "./app/assets/javascripts/sections/container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _container__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cards */ "./app/assets/javascripts/sections/cards.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _cards__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _tables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tables */ "./app/assets/javascripts/sections/tables.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _tables__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forms */ "./app/assets/javascripts/sections/forms.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _forms__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lists */ "./app/assets/javascripts/sections/lists.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _lists__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _slideshows__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./slideshows */ "./app/assets/javascripts/sections/slideshows.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slideshow", function() { return _slideshows__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _accordions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./accordions */ "./app/assets/javascripts/sections/accordions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return _accordions__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tabs */ "./app/assets/javascripts/sections/tabs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return _tabs__WEBPACK_IMPORTED_MODULE_12__["default"]; });















/***/ }),

/***/ "./app/assets/javascripts/sections/lists.js":
/*!**************************************************!*\
  !*** ./app/assets/javascripts/sections/lists.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Section = {// load: (section) => {
  // },
  // unload: (section) => {
  // },
  // select: (section) => {
  // },
  // deselect: (section) => {
  // },
  // reorder: (section) => {
  // },
  // blockSelect: (section, block) => {
  // },
  // blockDeSelect: (section, block) => {
  // }
};
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./app/assets/javascripts/sections/navigation.js":
/*!*******************************************************!*\
  !*** ./app/assets/javascripts/sections/navigation.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Section = {// load: (section) => {
  // },
  // unload: (section) => {
  // },
  // select: (section) => {
  // },
  // deselect: (section) => {
  // },
  // reorder: (section) => {
  // },
  // blockSelect: (section, block) => {
  // },
  // blockDeSelect: (section, block) => {
  // }
};
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./app/assets/javascripts/sections/slideshows.js":
/*!*******************************************************!*\
  !*** ./app/assets/javascripts/sections/slideshows.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Section = {// load: (section) => {
  // },
  // unload: (section) => {
  // },
  // select: (section) => {
  // },
  // deselect: (section) => {
  // },
  // reorder: (section) => {
  // },
  // blockSelect: (section, block) => {
  // },
  // blockDeSelect: (section, block) => {
  // }
};
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./app/assets/javascripts/sections/tables.js":
/*!***************************************************!*\
  !*** ./app/assets/javascripts/sections/tables.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Section = {// load: (section) => {
  // },
  // unload: (section) => {
  // },
  // select: (section) => {
  // },
  // deselect: (section) => {
  // },
  // reorder: (section) => {
  // },
  // blockSelect: (section, block) => {
  // },
  // blockDeSelect: (section, block) => {
  // }
};
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./app/assets/javascripts/sections/tabs.js":
/*!*************************************************!*\
  !*** ./app/assets/javascripts/sections/tabs.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Section = {// load: (section) => {
  // },
  // unload: (section) => {
  // },
  // select: (section) => {
  // },
  // deselect: (section) => {
  // },
  // reorder: (section) => {
  // },
  // blockSelect: (section, block) => {
  // },
  // blockDeSelect: (section, block) => {
  // }
};
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./app/assets/stylesheets/app.scss":
/*!*****************************************!*\
  !*** ./app/assets/stylesheets/app.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader!../../../node_modules/postcss-loader/lib!../../../node_modules/sass-loader/lib/loader.js!./app.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./app/assets/stylesheets/app.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./app/assets/stylesheets/app.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js!./app/assets/stylesheets/app.scss ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/babel-loader/lib/index.js?!./app/assets/javascripts/w3c.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/babel-loader/lib??ref--4!./app/assets/javascripts/w3c.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "// Modal\nfunction modalon() {\n  document.getElementById('id01').style.display = 'block';\n}\n\nfunction modaloff() {\n  document.getElementById('id01').style.display = 'none';\n} // Side navigation\n\n\nfunction w3_open() {\n  var x = document.getElementById(\"mySidebar\");\n  x.style.width = \"100%\";\n  x.style.fontSize = \"40px\";\n  x.style.paddingTop = \"10%\";\n  x.style.display = \"block\";\n}\n\nfunction w3_close() {\n  document.getElementById(\"mySidebar\").style.display = \"none\";\n} // Tabs\n\n\nfunction openCity(evt, cityName) {\n  var i;\n  var x = document.getElementsByClassName(\"city\");\n\n  for (i = 0; i < x.length; i++) {\n    x[i].style.display = \"none\";\n  }\n\n  var activebtn = document.getElementsByClassName(\"testbtn\");\n\n  for (i = 0; i < x.length; i++) {\n    activebtn[i].className = activebtn[i].className.replace(\" w3-dark-grey\", \"\");\n  }\n\n  document.getElementById(cityName).style.display = \"block\";\n  evt.currentTarget.className += \" w3-dark-grey\";\n}\n\nvar mybtn = document.getElementsByClassName(\"testbtn\")[0];\nmybtn.click(); // Accordions\n\nfunction myAccFunc(id) {\n  var x = document.getElementById(id);\n\n  if (x.className.indexOf(\"w3-show\") == -1) {\n    x.className += \" w3-show\";\n  } else {\n    x.className = x.className.replace(\" w3-show\", \"\");\n  }\n} // Slideshows\n\n\nvar slideIndex = 1;\n\nfunction plusDivs(n) {\n  slideIndex = slideIndex + n;\n  showDivs(slideIndex);\n}\n\nfunction showDivs(n) {\n  var x = document.getElementsByClassName(\"mySlides\");\n\n  if (n > x.length) {\n    slideIndex = 1;\n  }\n\n  if (n < 1) {\n    slideIndex = x.length;\n  }\n\n  ;\n\n  for (i = 0; i < x.length; i++) {\n    x[i].style.display = \"none\";\n  }\n\n  x[slideIndex - 1].style.display = \"block\";\n}\n\nshowDivs(1); // Progress Bars\n\nfunction move() {\n  var elem = document.getElementById(\"myBar\");\n  var width = 5;\n  var id = setInterval(frame, 10);\n\n  function frame() {\n    if (width == 100) {\n      clearInterval(id);\n    } else {\n      width++;\n      elem.style.width = width + '%';\n      elem.innerHTML = width * 1 + '%';\n    }\n  }\n} // Scroll to top\n\n\nvar scrollToTop = function scrollToTop() {\n  var c = document.documentElement.scrollTop || document.body.scrollTop;\n\n  if (c > 0) {\n    window.requestAnimationFrame(scrollToTop);\n    window.scrollTo(0, c - c / 8);\n  }\n}; // Fast enough for ya?\n\n\nvar renderStart = new Date().getTime();\n\nwindow.onload = function () {\n  var elapsed = new Date().getTime() - renderStart;\n  console.log('Rendered in ' + elapsed + 'ms');\n};"

/***/ }),

/***/ "./node_modules/script-loader/addScript.js":
/*!*************************************************!*\
  !*** ./node_modules/script-loader/addScript.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	function log(error) {
		(typeof console !== "undefined")
		&& (console.error || console.log)("[Script Loader]", error);
	}

	// Check for IE =< 8
	function isIE() {
		return typeof attachEvent !== "undefined" && typeof addEventListener === "undefined";
	}

	try {
		if (typeof execScript !== "undefined" && isIE()) {
			execScript(src);
		} else if (typeof eval !== "undefined") {
			eval.call(null, src);
		} else {
			log("EvalError: No eval function available");
		}
	} catch (error) {
		log(error);
	}
}


/***/ }),

/***/ "./node_modules/script-loader/index.js!./app/assets/javascripts/w3c.js":
/*!********************************************************************!*\
  !*** ./node_modules/script-loader!./app/assets/javascripts/w3c.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !./node_modules/script-loader/addScript.js */ "./node_modules/script-loader/addScript.js")(__webpack_require__(/*! !./node_modules/raw-loader!./node_modules/babel-loader/lib??ref--4!./app/assets/javascripts/w3c.js */ "./node_modules/raw-loader/index.js!./node_modules/babel-loader/lib/index.js?!./app/assets/javascripts/w3c.js"))

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0cy9zZWN0aW9ucy9fbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHRzL3NlY3Rpb25zL2FjY29yZGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0cy9zZWN0aW9ucy9jYXJkcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHRzL3NlY3Rpb25zL2NvbHVtbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0cy9zZWN0aW9ucy9jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0cy9zZWN0aW9ucy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0cy9zZWN0aW9ucy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHRzL3NlY3Rpb25zL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHRzL3NlY3Rpb25zL2ljb25jYXJkcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHRzL3NlY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdHMvc2VjdGlvbnMvbGlzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0cy9zZWN0aW9ucy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdHMvc2VjdGlvbnMvc2xpZGVzaG93cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHRzL3NlY3Rpb25zL3RhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHRzL3NlY3Rpb25zL3RhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9zdHlsZXNoZWV0cy9hcHAuc2Nzcz9lNTY3Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvc3R5bGVzaGVldHMvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0cy93M2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NjcmlwdC1sb2FkZXIvYWRkU2NyaXB0LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdHMvdzNjLmpzPzM3ZjEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJzZWN0aW9uc01hbmFnZXIiLCJTZWN0aW9uc01hbmFnZXIiLCJyZWdpc3RlclNlY3Rpb24iLCJTZWN0aW9ucyIsInN0YXJ0IiwiTWFuYWdlciIsInNlY3Rpb25zIiwidHlwZSIsImFjdGlvbnMiLCJjb25zb2xlIiwibG9nIiwiZWFjaFR5cGUiLCJxdWVyeUFsbCIsImZvckVhY2giLCJzZWN0aW9uIiwiaW5kZXgiLCJydW5BY3Rpb24iLCJyZWdpc3RlckV2ZW50cyIsIndpbmRvdyIsIl9zZWN0aW9uc01hbmFnZXIiLCJldmVudHMiLCJibG9jayIsIm5hbWVzcGFjZSIsImV2ZW50VHlwZSIsImV2ZW50TmFtZSIsImFjdGlvbk5hbWUiLCJldmVudFR5cGVUb0FjdGlvbk5hbWUiLCJhcHBseVJ1bGVUb0V2ZW50IiwiZGV0YWlsIiwic2VjdGlvbklkIiwiYmxvY2tJZCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0QXR0cmlidXRlIiwicXVlcnlPbmUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiYWN0aW9uIiwidW5kZWZpbmVkIiwiY2FsbGJhY2siLCJzZWxlY3RvciIsInNjb3BlIiwicXVlcnlTZWxlY3RvckFsbCIsInF1ZXJ5U2VsZWN0b3IiLCJoYXNCbG9jayIsInJlcGxhY2UiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJTZWN0aW9uIiwiQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FHQTs7Q0FHQTs7QUFDQTtBQUNBO0FBRUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFVBQUFDLEtBQUssRUFBSTtBQUVyRDtBQUNBLE1BQU1DLGVBQWUsR0FBRyxJQUFJQyx5REFBSixFQUF4QixDQUhxRCxDQUtyRDs7QUFDQUQsaUJBQWUsQ0FBQ0UsZUFBaEIsQ0FBZ0MsTUFB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RztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMVhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSIsImZpbGUiOiJqYXZhc2NyaXB0cy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FwcC9hc3NldHMvamF2YXNjcmlwdHMvYXBwLmpzXCIpO1xuIiwiLy8gPT09IFdhZ29uIG1haW4gamF2YXNjcmlwdCBmaWxlID09PVxuaW1wb3J0IHczYyBmcm9tICdzY3JpcHQtbG9hZGVyIS4vdzNjLmpzJztcblxuLy8gVGVsbCBXZWJwYWNrIHRvIGxvYWQgdGhlIHN0eWxlXG5pbXBvcnQgJy4uL3N0eWxlc2hlZXRzL2FwcC5zY3NzJztcblxuLy8gSW1wb3J0IHRoZSBjbGFzc2VzIHJlcXVpcmVkIHRvIGhhbmRsZSBzZWN0aW9uc1xuaW1wb3J0IFNlY3Rpb25zTWFuYWdlciBmcm9tICcuL3NlY3Rpb25zL19tYW5hZ2VyJztcbmltcG9ydCAqIGFzIFNlY3Rpb25zIGZyb20gJy4vc2VjdGlvbnMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZXZlbnQgPT4ge1xuXG4gIC8vIExvYWQgYWxsIHRoZSBzZWN0aW9uc1xuICBjb25zdCBzZWN0aW9uc01hbmFnZXIgPSBuZXcgU2VjdGlvbnNNYW5hZ2VyKCk7XG5cbiAgLy8gUmVnaXN0ZXIgc2VjdGlvbnMgaGVyZS4gRE8gTk9UIFJFTU9WRSBPUiBVUERBVEUgVEhJUyBMSU5FXG4gIHNlY3Rpb25zTWFuYWdlci5yZWdpc3RlclNlY3Rpb24oJ3RhYnMnLCBTZWN0aW9ucy5UYWIpO1xuICBzZWN0aW9uc01hbmFnZXIucmVnaXN0ZXJTZWN0aW9uKCdhY2NvcmRpb25zJywgU2VjdGlvbnMuQWNjb3JkaW9uKTtcbiAgc2VjdGlvbnNNYW5hZ2VyLnJlZ2lzdGVyU2VjdGlvbignc2xpZGVzaG93cycsIFNlY3Rpb25zLlNsaWRlc2hvdyk7XG4gIHNlY3Rpb25zTWFuYWdlci5yZWdpc3RlclNlY3Rpb24oJ2xpc3RzJywgU2VjdGlvbnMuTGlzdCk7XG4gIHNlY3Rpb25zTWFuYWdlci5yZWdpc3RlclNlY3Rpb24oJ2Zvcm1zJywgU2VjdGlvbnMuRm9ybSk7XG4gIHNlY3Rpb25zTWFuYWdlci5yZWdpc3RlclNlY3Rpb24oJ3RhYmxlcycsIFNlY3Rpb25zLlRhYmxlKTtcbiAgc2VjdGlvbnNNYW5hZ2VyLnJlZ2lzdGVyU2VjdGlvbignY2FyZHMnLCBTZWN0aW9ucy5DYXJkKTtcbiAgc2VjdGlvbnNNYW5hZ2VyLnJlZ2lzdGVyU2VjdGlvbignY29udGFpbmVyJywgU2VjdGlvbnMuQ29udGFpbmVyKTtcbiAgc2VjdGlvbnNNYW5hZ2VyLnJlZ2lzdGVyU2VjdGlvbignY29sdW1ucycsIFNlY3Rpb25zLkNvbHVtbik7XG4gIHNlY3Rpb25zTWFuYWdlci5yZWdpc3RlclNlY3Rpb24oJ2ljb25jYXJkcycsIFNlY3Rpb25zLkljb25jYXJkKTtcbiAgc2VjdGlvbnNNYW5hZ2VyLnJlZ2lzdGVyU2VjdGlvbignaGVhZGVyJywgU2VjdGlvbnMuSGVhZGVyKTtcbiAgc2VjdGlvbnNNYW5hZ2VyLnJlZ2lzdGVyU2VjdGlvbignZm9vdGVyJywgU2VjdGlvbnMuRm9vdGVyKTtcbiAgc2VjdGlvbnNNYW5hZ2VyLnJlZ2lzdGVyU2VjdGlvbignbmF2aWdhdGlvbicsIFNlY3Rpb25zLk5hdmlnYXRpb24pO1xuXG4gIHNlY3Rpb25zTWFuYWdlci5zdGFydCgpO1xuXG59KTtcbiIsImNsYXNzIE1hbmFnZXIge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2VjdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHJlZ2lzdGVyU2VjdGlvbih0eXBlLCBhY3Rpb25zKSB7XG4gICAgY29uc29sZS5sb2codHlwZSwgYWN0aW9ucyk7XG4gICAgdGhpcy5zZWN0aW9uc1t0eXBlXSA9IGFjdGlvbnM7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLmVhY2hUeXBlKCh0eXBlLCBhY3Rpb25zKSA9PiB7XG4gICAgICB0aGlzLnF1ZXJ5QWxsKGAubG9jb21vdGl2ZS1zZWN0aW9uW2RhdGEtbG9jb21vdGl2ZS1zZWN0aW9uLXR5cGU9XCIke3R5cGV9XCJdYCkuZm9yRWFjaCgoc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5ydW5BY3Rpb24oYWN0aW9ucywgJ2xvYWQnLCBzZWN0aW9uKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcblxuICAgIHdpbmRvdy5fc2VjdGlvbnNNYW5hZ2VyID0gdGhpcztcbiAgfVxuXG4gIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgIGNvbnN0IGV2ZW50cyA9IHtcbiAgICAgIHNlY3Rpb246IFsnbG9hZCcsICd1bmxvYWQnLCAnc2VsZWN0JywgJ2Rlc2VsZWN0JywgJ3Jlb3JkZXInXSxcbiAgICAgIGJsb2NrOiBbJ3NlbGVjdCcsICdkZXNlbGVjdCddXG4gICAgfVxuXG4gICAgZm9yICh2YXIgbmFtZXNwYWNlIGluIGV2ZW50cykge1xuICAgICAgZXZlbnRzW25hbWVzcGFjZV0uZm9yRWFjaChldmVudFR5cGUgPT4ge1xuICAgICAgICBjb25zdCBldmVudE5hbWUgPSBgbG9jb21vdGl2ZTo6JHtuYW1lc3BhY2V9Ojoke2V2ZW50VHlwZX1gO1xuICAgICAgICBjb25zdCBhY3Rpb25OYW1lID0gdGhpcy5ldmVudFR5cGVUb0FjdGlvbk5hbWUobmFtZXNwYWNlLCBldmVudFR5cGUpO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5hcHBseVJ1bGVUb0V2ZW50KGFjdGlvbk5hbWUsIGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhcHBseVJ1bGVUb0V2ZW50KGFjdGlvbk5hbWUsIGV2ZW50KSB7XG4gICAgY29uc3QgeyBzZWN0aW9uSWQsIGJsb2NrSWQgfSA9IGV2ZW50LmRldGFpbDtcbiAgICBjb25zdCBzZWN0aW9uICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbG9jb21vdGl2ZS1zZWN0aW9uLSR7c2VjdGlvbklkfWApO1xuICAgIGNvbnN0IHR5cGUgICAgICA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKCdkYXRhLWxvY29tb3RpdmUtc2VjdGlvbi10eXBlJyk7XG4gICAgY29uc3QgYmxvY2sgICAgID0gdGhpcy5xdWVyeU9uZShgW2RhdGEtbG9jb21vdGl2ZS1ibG9jaz1cInNlY3Rpb24tJHtzZWN0aW9uSWR9LWJsb2NrLSR7YmxvY2tJZH1cIl1gLCBzZWN0aW9uKTtcblxuICAgIHRoaXMucnVuQWN0aW9uKHRoaXMuc2VjdGlvbnNbdHlwZV0sIGFjdGlvbk5hbWUsIHNlY3Rpb24sIGJsb2NrKVxuICB9XG5cbiAgZXZlbnRUeXBlVG9BY3Rpb25OYW1lKG5hbWVzcGFjZSwgZXZlbnRUeXBlKSB7XG4gICAgaWYgKG5hbWVzcGFjZSA9PT0gJ3NlY3Rpb24nKVxuICAgICAgcmV0dXJuIGV2ZW50VHlwZTtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gbmFtZXNwYWNlICsgZXZlbnRUeXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZXZlbnRUeXBlLnNsaWNlKDEpO1xuICB9XG5cbiAgcnVuQWN0aW9uKGFjdGlvbnMsIGFjdGlvbk5hbWUsIHNlY3Rpb24sIGJsb2NrKSB7XG4gICAgY29uc3QgYWN0aW9uID0gYWN0aW9uc1thY3Rpb25OYW1lXTtcblxuICAgIGlmIChhY3Rpb24gIT09IHVuZGVmaW5lZClcbiAgICAgIGFjdGlvbihzZWN0aW9uLCBibG9jayk7XG4gIH1cblxuICBlYWNoVHlwZShjYWxsYmFjaykge1xuICAgIGZvciAodmFyIHR5cGUgaW4gdGhpcy5zZWN0aW9ucykge1xuICAgICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuc2VjdGlvbnNbdHlwZV07XG4gICAgICBjYWxsYmFjayh0eXBlLCBhY3Rpb25zKVxuICAgIH1cbiAgfVxuXG4gIHF1ZXJ5QWxsKHNlbGVjdG9yLCBzY29wZSkge1xuICAgIHNjb3BlID0gc2NvcGUgPyBzY29wZSA6IGRvY3VtZW50O1xuICAgIHJldHVybiBzY29wZS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgfVxuXG4gIHF1ZXJ5T25lKHNlbGVjdG9yLCBzY29wZSkge1xuICAgIHNjb3BlID0gc2NvcGUgPyBzY29wZSA6IGRvY3VtZW50O1xuICAgIHJldHVybiBzY29wZS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfVxuXG4gIHRlc3RBY3Rpb24oZXZlbnRUeXBlLCBzZWN0aW9uLCBibG9jaykge1xuICAgIGNvbnN0IGhhc0Jsb2NrICA9IGJsb2NrICE9PSB1bmRlZmluZWQgJiYgYmxvY2sgIT09IG51bGwgO1xuICAgIGNvbnN0IG5hbWVzcGFjZSA9IGhhc0Jsb2NrID8gJ2Jsb2NrJyA6ICdzZWN0aW9uJztcbiAgICBjb25zdCBzZWN0aW9uSWQgPSBzZWN0aW9uLmdldEF0dHJpYnV0ZSgnaWQnKS5yZXBsYWNlKCdsb2NvbW90aXZlLXNlY3Rpb24tJywgJycpO1xuICAgIGNvbnN0IGJsb2NrSWQgICA9IGhhc0Jsb2NrID8gYmxvY2suZ2V0QXR0cmlidXRlKCdkYXRhLWxvY29tb3RpdmUtYmxvY2snKS5yZXBsYWNlKGBzZWN0aW9uLSR7c2VjdGlvbklkfS1ibG9jay1gLCAnJykgOiBudWxsO1xuICAgIGNvbnN0IGRldGFpbCAgICA9IHsgZGV0YWlsOiB7IHNlY3Rpb25JZCwgYmxvY2tJZCB9IH07XG4gICAgY29uc3QgZXZlbnROYW1lID0gYGxvY29tb3RpdmU6OiR7bmFtZXNwYWNlfTo6JHtldmVudFR5cGV9YDtcblxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgZGV0YWlsKSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VyO1xuIiwiY29uc3QgU2VjdGlvbiA9IHtcblxuICAvLyBsb2FkOiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIHVubG9hZDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBzZWxlY3Q6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gZGVzZWxlY3Q6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gcmVvcmRlcjogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBibG9ja1NlbGVjdDogKHNlY3Rpb24sIGJsb2NrKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gYmxvY2tEZVNlbGVjdDogKHNlY3Rpb24sIGJsb2NrKSA9PiB7XG4gIC8vIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIiwiY29uc3QgU2VjdGlvbiA9IHtcblxuICAvLyBsb2FkOiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIHVubG9hZDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBzZWxlY3Q6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gZGVzZWxlY3Q6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gcmVvcmRlcjogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBibG9ja1NlbGVjdDogKHNlY3Rpb24sIGJsb2NrKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gYmxvY2tEZVNlbGVjdDogKHNlY3Rpb24sIGJsb2NrKSA9PiB7XG4gIC8vIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIiwiY29uc3QgU2VjdGlvbiA9IHtcblxuICAvLyBsb2FkOiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIHVubG9hZDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBzZWxlY3Q6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gZGVzZWxlY3Q6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gcmVvcmRlcjogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBibG9ja1NlbGVjdDogKHNlY3Rpb24sIGJsb2NrKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gYmxvY2tEZVNlbGVjdDogKHNlY3Rpb24sIGJsb2NrKSA9PiB7XG4gIC8vIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIiwiY29uc3QgQ29udGFpbmVyID0ge1xuXG4gIC8vIGxvYWQ6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gdW5sb2FkOiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIHNlbGVjdDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBkZXNlbGVjdDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyByZW9yZGVyOiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIGJsb2NrU2VsZWN0OiAoc2VjdGlvbiwgYmxvY2spID0+IHtcbiAgLy8gfSxcblxuICAvLyBibG9ja0RlU2VsZWN0OiAoc2VjdGlvbiwgYmxvY2spID0+IHtcbiAgLy8gfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbiIsImNvbnN0IFNlY3Rpb24gPSB7XG5cbiAgLy8gbG9hZDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyB1bmxvYWQ6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gc2VsZWN0OiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIGRlc2VsZWN0OiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIHJlb3JkZXI6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gYmxvY2tTZWxlY3Q6IChzZWN0aW9uLCBibG9jaykgPT4ge1xuICAvLyB9LFxuXG4gIC8vIGJsb2NrRGVTZWxlY3Q6IChzZWN0aW9uLCBibG9jaykgPT4ge1xuICAvLyB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcbiIsImNvbnN0IFNlY3Rpb24gPSB7XG5cbiAgLy8gbG9hZDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyB1bmxvYWQ6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gc2VsZWN0OiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIGRlc2VsZWN0OiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIHJlb3JkZXI6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gYmxvY2tTZWxlY3Q6IChzZWN0aW9uLCBibG9jaykgPT4ge1xuICAvLyB9LFxuXG4gIC8vIGJsb2NrRGVTZWxlY3Q6IChzZWN0aW9uLCBibG9jaykgPT4ge1xuICAvLyB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcbiIsImNvbnN0IFNlY3Rpb24gPSB7XG5cbiAgLy8gbG9hZDogKHNlY3Rpb24pID0+IHtcbiAgICAvLyBjb25zdCB7IHNlY3Rpb25JZCB9ID0gZXZlbnQuZGV0YWlsO1xuICAgIC8vIGNvbnN0ICRzZWN0aW9uID0gJChgI2xvY29tb3RpdmUtc2VjdGlvbi0ke3NlY3Rpb25JZH1gKTtcbiAgLy8gfSxcblxuICAvLyB1bmxvYWQ6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gc2VsZWN0OiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIGRlc2VsZWN0OiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIHJlb3JkZXI6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gYmxvY2tTZWxlY3Q6IChzZWN0aW9uLCBibG9jaykgPT4ge1xuICAvLyB9LFxuXG4gIC8vIGJsb2NrRGVTZWxlY3Q6IChzZWN0aW9uLCBibG9jaykgPT4ge1xuICAvLyB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcbiIsImNvbnN0IFNlY3Rpb24gPSB7XG5cbiAgLy8gbG9hZDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyB1bmxvYWQ6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gc2VsZWN0OiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIGRlc2VsZWN0OiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIHJlb3JkZXI6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gYmxvY2tTZWxlY3Q6IChzZWN0aW9uLCBibG9jaykgPT4ge1xuICAvLyB9LFxuXG4gIC8vIGJsb2NrRGVTZWxlY3Q6IChzZWN0aW9uLCBibG9jaykgPT4ge1xuICAvLyB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgTmF2aWdhdGlvbiB9IGZyb20gJy4vbmF2aWdhdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZvb3RlciB9IGZyb20gJy4vZm9vdGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGVhZGVyIH0gZnJvbSAnLi9oZWFkZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBJY29uY2FyZCB9IGZyb20gJy4vaWNvbmNhcmRzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29sdW1uIH0gZnJvbSAnLi9jb2x1bW5zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29udGFpbmVyIH0gZnJvbSAnLi9jb250YWluZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkIH0gZnJvbSAnLi9jYXJkcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRhYmxlIH0gZnJvbSAnLi90YWJsZXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGb3JtIH0gZnJvbSAnLi9mb3Jtcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExpc3QgfSBmcm9tICcuL2xpc3RzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2xpZGVzaG93IH0gZnJvbSAnLi9zbGlkZXNob3dzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQWNjb3JkaW9uIH0gZnJvbSAnLi9hY2NvcmRpb25zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGFiIH0gZnJvbSAnLi90YWJzJztcbiIsImNvbnN0IFNlY3Rpb24gPSB7XG5cbiAgLy8gbG9hZDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyB1bmxvYWQ6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gc2VsZWN0OiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIGRlc2VsZWN0OiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIHJlb3JkZXI6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gYmxvY2tTZWxlY3Q6IChzZWN0aW9uLCBibG9jaykgPT4ge1xuICAvLyB9LFxuXG4gIC8vIGJsb2NrRGVTZWxlY3Q6IChzZWN0aW9uLCBibG9jaykgPT4ge1xuICAvLyB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcbiIsImNvbnN0IFNlY3Rpb24gPSB7XG5cbiAgLy8gbG9hZDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyB1bmxvYWQ6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gc2VsZWN0OiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIGRlc2VsZWN0OiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIHJlb3JkZXI6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gYmxvY2tTZWxlY3Q6IChzZWN0aW9uLCBibG9jaykgPT4ge1xuICAvLyB9LFxuXG4gIC8vIGJsb2NrRGVTZWxlY3Q6IChzZWN0aW9uLCBibG9jaykgPT4ge1xuICAvLyB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcbiIsImNvbnN0IFNlY3Rpb24gPSB7XG5cbiAgLy8gbG9hZDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyB1bmxvYWQ6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gc2VsZWN0OiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIGRlc2VsZWN0OiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIHJlb3JkZXI6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gYmxvY2tTZWxlY3Q6IChzZWN0aW9uLCBibG9jaykgPT4ge1xuICAvLyB9LFxuXG4gIC8vIGJsb2NrRGVTZWxlY3Q6IChzZWN0aW9uLCBibG9jaykgPT4ge1xuICAvLyB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcbiIsImNvbnN0IFNlY3Rpb24gPSB7XG5cbiAgLy8gbG9hZDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyB1bmxvYWQ6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gc2VsZWN0OiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIGRlc2VsZWN0OiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIHJlb3JkZXI6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gYmxvY2tTZWxlY3Q6IChzZWN0aW9uLCBibG9jaykgPT4ge1xuICAvLyB9LFxuXG4gIC8vIGJsb2NrRGVTZWxlY3Q6IChzZWN0aW9uLCBibG9jaykgPT4ge1xuICAvLyB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcbiIsImNvbnN0IFNlY3Rpb24gPSB7XG5cbiAgLy8gbG9hZDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyB1bmxvYWQ6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gc2VsZWN0OiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIGRlc2VsZWN0OiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIHJlb3JkZXI6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gYmxvY2tTZWxlY3Q6IChzZWN0aW9uLCBibG9jaykgPT4ge1xuICAvLyB9LFxuXG4gIC8vIGJsb2NrRGVTZWxlY3Q6IChzZWN0aW9uLCBibG9jaykgPT4ge1xuICAvLyB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2FwcC5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2FwcC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9hcHAuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvLyBNb2RhbFxcbmZ1bmN0aW9uIG1vZGFsb24oKSB7XFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWQwMScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xcbn1cXG5cXG5mdW5jdGlvbiBtb2RhbG9mZigpIHtcXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZDAxJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcXG59IC8vIFNpZGUgbmF2aWdhdGlvblxcblxcblxcbmZ1bmN0aW9uIHczX29wZW4oKSB7XFxuICB2YXIgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxcXCJteVNpZGViYXJcXFwiKTtcXG4gIHguc3R5bGUud2lkdGggPSBcXFwiMTAwJVxcXCI7XFxuICB4LnN0eWxlLmZvbnRTaXplID0gXFxcIjQwcHhcXFwiO1xcbiAgeC5zdHlsZS5wYWRkaW5nVG9wID0gXFxcIjEwJVxcXCI7XFxuICB4LnN0eWxlLmRpc3BsYXkgPSBcXFwiYmxvY2tcXFwiO1xcbn1cXG5cXG5mdW5jdGlvbiB3M19jbG9zZSgpIHtcXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxcXCJteVNpZGViYXJcXFwiKS5zdHlsZS5kaXNwbGF5ID0gXFxcIm5vbmVcXFwiO1xcbn0gLy8gVGFic1xcblxcblxcbmZ1bmN0aW9uIG9wZW5DaXR5KGV2dCwgY2l0eU5hbWUpIHtcXG4gIHZhciBpO1xcbiAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxcXCJjaXR5XFxcIik7XFxuXFxuICBmb3IgKGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xcbiAgICB4W2ldLnN0eWxlLmRpc3BsYXkgPSBcXFwibm9uZVxcXCI7XFxuICB9XFxuXFxuICB2YXIgYWN0aXZlYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcXFwidGVzdGJ0blxcXCIpO1xcblxcbiAgZm9yIChpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcXG4gICAgYWN0aXZlYnRuW2ldLmNsYXNzTmFtZSA9IGFjdGl2ZWJ0bltpXS5jbGFzc05hbWUucmVwbGFjZShcXFwiIHczLWRhcmstZ3JleVxcXCIsIFxcXCJcXFwiKTtcXG4gIH1cXG5cXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNpdHlOYW1lKS5zdHlsZS5kaXNwbGF5ID0gXFxcImJsb2NrXFxcIjtcXG4gIGV2dC5jdXJyZW50VGFyZ2V0LmNsYXNzTmFtZSArPSBcXFwiIHczLWRhcmstZ3JleVxcXCI7XFxufVxcblxcbnZhciBteWJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXFxcInRlc3RidG5cXFwiKVswXTtcXG5teWJ0bi5jbGljaygpOyAvLyBBY2NvcmRpb25zXFxuXFxuZnVuY3Rpb24gbXlBY2NGdW5jKGlkKSB7XFxuICB2YXIgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcXG5cXG4gIGlmICh4LmNsYXNzTmFtZS5pbmRleE9mKFxcXCJ3My1zaG93XFxcIikgPT0gLTEpIHtcXG4gICAgeC5jbGFzc05hbWUgKz0gXFxcIiB3My1zaG93XFxcIjtcXG4gIH0gZWxzZSB7XFxuICAgIHguY2xhc3NOYW1lID0geC5jbGFzc05hbWUucmVwbGFjZShcXFwiIHczLXNob3dcXFwiLCBcXFwiXFxcIik7XFxuICB9XFxufSAvLyBTbGlkZXNob3dzXFxuXFxuXFxudmFyIHNsaWRlSW5kZXggPSAxO1xcblxcbmZ1bmN0aW9uIHBsdXNEaXZzKG4pIHtcXG4gIHNsaWRlSW5kZXggPSBzbGlkZUluZGV4ICsgbjtcXG4gIHNob3dEaXZzKHNsaWRlSW5kZXgpO1xcbn1cXG5cXG5mdW5jdGlvbiBzaG93RGl2cyhuKSB7XFxuICB2YXIgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXFxcIm15U2xpZGVzXFxcIik7XFxuXFxuICBpZiAobiA+IHgubGVuZ3RoKSB7XFxuICAgIHNsaWRlSW5kZXggPSAxO1xcbiAgfVxcblxcbiAgaWYgKG4gPCAxKSB7XFxuICAgIHNsaWRlSW5kZXggPSB4Lmxlbmd0aDtcXG4gIH1cXG5cXG4gIDtcXG5cXG4gIGZvciAoaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XFxuICAgIHhbaV0uc3R5bGUuZGlzcGxheSA9IFxcXCJub25lXFxcIjtcXG4gIH1cXG5cXG4gIHhbc2xpZGVJbmRleCAtIDFdLnN0eWxlLmRpc3BsYXkgPSBcXFwiYmxvY2tcXFwiO1xcbn1cXG5cXG5zaG93RGl2cygxKTsgLy8gUHJvZ3Jlc3MgQmFyc1xcblxcbmZ1bmN0aW9uIG1vdmUoKSB7XFxuICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxcXCJteUJhclxcXCIpO1xcbiAgdmFyIHdpZHRoID0gNTtcXG4gIHZhciBpZCA9IHNldEludGVydmFsKGZyYW1lLCAxMCk7XFxuXFxuICBmdW5jdGlvbiBmcmFtZSgpIHtcXG4gICAgaWYgKHdpZHRoID09IDEwMCkge1xcbiAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xcbiAgICB9IGVsc2Uge1xcbiAgICAgIHdpZHRoKys7XFxuICAgICAgZWxlbS5zdHlsZS53aWR0aCA9IHdpZHRoICsgJyUnO1xcbiAgICAgIGVsZW0uaW5uZXJIVE1MID0gd2lkdGggKiAxICsgJyUnO1xcbiAgICB9XFxuICB9XFxufSAvLyBTY3JvbGwgdG8gdG9wXFxuXFxuXFxudmFyIHNjcm9sbFRvVG9wID0gZnVuY3Rpb24gc2Nyb2xsVG9Ub3AoKSB7XFxuICB2YXIgYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XFxuXFxuICBpZiAoYyA+IDApIHtcXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzY3JvbGxUb1RvcCk7XFxuICAgIHdpbmRvdy5zY3JvbGxUbygwLCBjIC0gYyAvIDgpO1xcbiAgfVxcbn07IC8vIEZhc3QgZW5vdWdoIGZvciB5YT9cXG5cXG5cXG52YXIgcmVuZGVyU3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcXG5cXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xcbiAgdmFyIGVsYXBzZWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHJlbmRlclN0YXJ0O1xcbiAgY29uc29sZS5sb2coJ1JlbmRlcmVkIGluICcgKyBlbGFwc2VkICsgJ21zJyk7XFxufTtcIiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNyYykge1xuXHRmdW5jdGlvbiBsb2coZXJyb3IpIHtcblx0XHQodHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIpXG5cdFx0JiYgKGNvbnNvbGUuZXJyb3IgfHwgY29uc29sZS5sb2cpKFwiW1NjcmlwdCBMb2FkZXJdXCIsIGVycm9yKTtcblx0fVxuXG5cdC8vIENoZWNrIGZvciBJRSA9PCA4XG5cdGZ1bmN0aW9uIGlzSUUoKSB7XG5cdFx0cmV0dXJuIHR5cGVvZiBhdHRhY2hFdmVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgYWRkRXZlbnRMaXN0ZW5lciA9PT0gXCJ1bmRlZmluZWRcIjtcblx0fVxuXG5cdHRyeSB7XG5cdFx0aWYgKHR5cGVvZiBleGVjU2NyaXB0ICE9PSBcInVuZGVmaW5lZFwiICYmIGlzSUUoKSkge1xuXHRcdFx0ZXhlY1NjcmlwdChzcmMpO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGV2YWwgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdGV2YWwuY2FsbChudWxsLCBzcmMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsb2coXCJFdmFsRXJyb3I6IE5vIGV2YWwgZnVuY3Rpb24gYXZhaWxhYmxlXCIpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRsb2coZXJyb3IpO1xuXHR9XG59XG4iLCJyZXF1aXJlKFwiISEvVXNlcnMvbWFudWNoYXAvU2l0ZXMvV2Fnb24vVzNDU1Mvbm9kZV9tb2R1bGVzL3NjcmlwdC1sb2FkZXIvYWRkU2NyaXB0LmpzXCIpKHJlcXVpcmUoXCIhIS9Vc2Vycy9tYW51Y2hhcC9TaXRlcy9XYWdvbi9XM0NTUy9ub2RlX21vZHVsZXMvcmF3LWxvYWRlci9pbmRleC5qcyEvVXNlcnMvbWFudWNoYXAvU2l0ZXMvV2Fnb24vVzNDU1Mvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNCEvVXNlcnMvbWFudWNoYXAvU2l0ZXMvV2Fnb24vVzNDU1MvYXBwL2Fzc2V0cy9qYXZhc2NyaXB0cy93M2MuanNcIikpIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=