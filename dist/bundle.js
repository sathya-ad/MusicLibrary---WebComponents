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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _song_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./song-list */ \"./src/song-list.js\");\n/* harmony import */ var _song_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./song-input */ \"./src/song-input.js\");\n/* harmony import */ var _song_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./song-item */ \"./src/song-item.js\");\n\n\n\nwindow.customElements.define(\"song-list\", _song_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nwindow.customElements.define(\"song-input\", _song_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nwindow.customElements.define(\"song-item\", _song_item__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/song-input.js":
/*!***************************!*\
  !*** ./src/song-input.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SongInput; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar templateTodoInput = document.createElement(\"template\");\ntemplateTodoInput.innerHTML = \"\\n    <style>\\n        #new-song-form {\\n            position: relative;\\n            font-size: 24px;\\n            border-bottom: 1px solid #ededed;\\n        }\\n        #new-song {\\n            padding: 16px 16px 16px 60px;\\n            border: none;\\n            background: rgba(0, 0, 0, 0.003);\\n            position: relative;\\n            margin: 0;\\n            width: 100%;\\n            font-size: 24px;\\n            font-family: inherit;\\n            font-weight: inherit;\\n            line-height: 1.4em;\\n            border: 0;\\n            outline: none;\\n            color: inherit;\\n            padding: 6px;\\n            border: 1px solid #CCC;\\n            box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\\n            box-sizing: border-box;\\n        }\\n    </style>\\n    <form id=\\\"new-song-form\\\">\\n        <input id=\\\"new-song\\\" type=\\\"text\\\" placeholder=\\\"Add the sonnng name\\\" />\\n    </form>\\n\";\n\nvar SongInput =\n/*#__PURE__*/\nfunction (_HTMLElement) {\n  _inherits(SongInput, _HTMLElement);\n\n  function SongInput() {\n    var _this;\n\n    _classCallCheck(this, SongInput);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(SongInput).call(this));\n    _this._root = _this.attachShadow({\n      mode: \"open\"\n    });\n    return _this;\n  }\n\n  _createClass(SongInput, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      console.log(\"TodoInput ADDED TO THE DOM\");\n\n      this._root.appendChild(templateTodoInput.content.cloneNode(true));\n\n      this.$form = this._root.querySelector(\"form\");\n      this.$input = this._root.querySelector(\"input\");\n    }\n  }, {\n    key: \"disconnectedCallback\",\n    value: function disconnectedCallback() {\n      console.log(\"TodoInput REMOVED TO THE DOM\");\n    }\n  }]);\n\n  return SongInput;\n}(_wrapNativeSuper(HTMLElement));\n\n\n\n//# sourceURL=webpack:///./src/song-input.js?");

/***/ }),

/***/ "./src/song-item.js":
/*!**************************!*\
  !*** ./src/song-item.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SongItem; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar templateSongItem = document.createElement(\"template\");\ntemplateSongItem.innerHTML = \"\\n    <style>\\n      :host {\\n        display: block;\\n      }\\n      li.item {\\n        font-size: 24px;\\n        display: block;\\n        position: relative;\\n        border-bottom: 1px solid #ededed;\\n      }\\n      li.item input {\\n        text-align: center;\\n        width: 40px;\\n        /* auto, since non-WebKit browsers doesn't support input styling */\\n        height: auto;\\n        position: absolute;\\n        top: 9px;\\n        bottom: 0;\\n        margin: auto 0;\\n        border: none;\\n        /* Mobile Safari */\\n        -webkit-appearance: none;\\n        appearance: none;\\n      }\\n      li.item input:after {\\n        content: url('data:image/svg+xml;utf8,<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"40\\\" height=\\\"40\\\" viewBox=\\\"-10 -18 100 135\\\"><circle cx=\\\"50\\\" cy=\\\"50\\\" r=\\\"50\\\" fill=\\\"none\\\" stroke=\\\"#ededed\\\" stroke-width=\\\"3\\\"/></svg>');\\n      }\\n      li.item input:checked:after {\\n        content: url('data:image/svg+xml;utf8,<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"40\\\" height=\\\"40\\\" viewBox=\\\"-10 -18 100 135\\\"><circle cx=\\\"50\\\" cy=\\\"50\\\" r=\\\"50\\\" fill=\\\"none\\\" stroke=\\\"#bddad5\\\" stroke-width=\\\"3\\\"/><path fill=\\\"#5dc2af\\\" d=\\\"M72 25L42 71 27 56l-4 4 20 20 34-52z\\\"/></svg>');\\n      }\\n      li.item label {\\n        white-space: pre;\\n        word-break: break-word;\\n        padding: 15px 60px 15px 15px;\\n        margin-left: 45px;\\n        display: block;\\n        line-height: 1.2;\\n        transition: color 0.4s;\\n      }\\n      li.item.completed label {\\n        color: #d9d9d9;\\n        text-decoration: line-through;\\n      }\\n      li.item button,\\n      li.item input[type=\\\"checkbox\\\"] {\\n        outline: none;\\n      }\\n      li.item button {\\n        margin: 0;\\n        padding: 0;\\n        border: 0;\\n        background: none;\\n        font-size: 100%;\\n        vertical-align: baseline;\\n        font-family: inherit;\\n        font-weight: inherit;\\n        color: inherit;\\n        -webkit-appearance: none;\\n        appearance: none;\\n        -webkit-font-smoothing: antialiased;\\n        -moz-font-smoothing: antialiased;\\n        font-smoothing: antialiased;\\n      }\\n      li.item .destroy {\\n        position: absolute;\\n        top: 0;\\n        right: 10px;\\n        bottom: 0;\\n        width: 40px;\\n        height: 40px;\\n        margin: auto 0;\\n        font-size: 30px;\\n        color: #cc9a9a;\\n        margin-bottom: 11px;\\n        transition: color 0.2s ease-out;\\n      }\\n      li.item .destroy:hover {\\n        color: #af5b5e;\\n      }\\n    </style>\\n    <li class=\\\"item\\\">\\n        <input type=\\\"checkbox\\\">\\n        <label></label>\\n        <button class=\\\"destroy\\\">x</button>\\n    </li>\\n\";\n\nvar SongItem =\n/*#__PURE__*/\nfunction (_HTMLElement) {\n  _inherits(SongItem, _HTMLElement);\n\n  function SongItem() {\n    var _this;\n\n    _classCallCheck(this, SongItem);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(SongItem).call(this));\n    _this._root = _this.attachShadow({\n      mode: \"open\"\n    });\n    _this._fav = _this.fav;\n    _this._index = _this.index;\n    _this._name = \"\";\n    return _this;\n  }\n\n  _createClass(SongItem, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      var _this2 = this;\n\n      console.log(\"comes here\");\n\n      this._root.appendChild(templateSongItem.content.cloneNode(true));\n\n      this.$removeButton = this._root.querySelector(\".destroy\");\n      this.$removeButton.addEventListener(\"click\", function (e) {\n        e.preventDefault();\n\n        _this2.dispatchEvent(new CustomEvent(\"onRemove\", {\n          detail: _this2.index\n        }));\n      });\n\n      this._render();\n    }\n  }, {\n    key: \"attributeChangedCallback\",\n    value: function attributeChangedCallback(name, oldValue, newValue) {\n      this._name = newValue;\n    }\n  }, {\n    key: \"_render\",\n    value: function _render() {\n      console.log(this._name);\n      this._root.querySelector(\"label\").textContent = this._name;\n    }\n  }], [{\n    key: \"observedAttributes\",\n    get: function get() {\n      return [\"name\"];\n    }\n  }]);\n\n  return SongItem;\n}(_wrapNativeSuper(HTMLElement));\n\n\n\n//# sourceURL=webpack:///./src/song-item.js?");

/***/ }),

/***/ "./src/song-list.js":
/*!**************************!*\
  !*** ./src/song-list.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SongList; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar templateSongList = document.createElement(\"template\");\ntemplateSongList.innerHTML = \"\\n    <style>\\n        h1 {\\n            font-size: 60px;\\n            font-weight: 100;\\n            text-align: center;\\n            color: rgba(175, 47, 47, 0.15);\\n        }\\n        section {\\n            background: #fff;\\n            margin: 30px 0 40px 0;\\n            position: relative;\\n            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\\n        }\\n        #list-container {\\n            margin: 0;\\n            padding: 0;\\n            list-style: none;\\n            border-top: 1px solid #e6e6e6;\\n        }\\n    </style>\\n    <h1>My Music Library </h1>\\n    <section>\\n        <song-input></song-input>\\n        <ul id=\\\"list-container\\\"></ul>\\n    </section>\";\n\nvar SongList =\n/*#__PURE__*/\nfunction (_HTMLElement) {\n  _inherits(SongList, _HTMLElement);\n\n  function SongList() {\n    var _this;\n\n    _classCallCheck(this, SongList);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(SongList).call(this));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"removeItem\", function (e) {\n      console.log(\"comes here\");\n      console.log(e);\n    });\n\n    _this._root = _this.attachShadow({\n      mode: \"open\"\n    }); //initial state\n\n    _this._songsList = [{\n      name: \"We dont talk anymore\",\n      fav: true\n    }, {\n      name: \"There's nothing holding me back\",\n      fav: true\n    }, {\n      name: \"Attention\",\n      fav: false\n    }];\n    return _this;\n  }\n\n  _createClass(SongList, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      this._root.appendChild(templateSongList.content.cloneNode(true));\n\n      this._render();\n    }\n  }, {\n    key: \"_render\",\n    value: function _render() {\n      var _this2 = this;\n\n      this._songsList.forEach(function (item, index) {\n        _this2.$listContainer = _this2._root.querySelector(\"#list-container\");\n        var $item = document.createElement(\"song-item\");\n        $item.setAttribute(\"name\", item.name);\n        $item.setAttribute(\"fav\", item.fav); //$item.querySelector(\"label\").innerHTML = item.name;\n\n        $item.index = index;\n        $item.addEventListener(\"onRemove\", _this2.removeItem.bind(_this2));\n\n        _this2.$listContainer.appendChild($item);\n      });\n    }\n  }]);\n\n  return SongList;\n}(_wrapNativeSuper(HTMLElement));\n\n\n\n//# sourceURL=webpack:///./src/song-list.js?");

/***/ })

/******/ });