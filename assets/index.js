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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./src sync recursive ^\\.\\/.*\\/$":
/*!*****************************!*\
  !*** ./src sync ^\.\/.*\/$ ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ui-dialog/": "./src/ui-dialog/index.js",
	"./ui-msgbox/": "./src/ui-msgbox/index.js",
	"./ui-toast/": "./src/ui-toast/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src sync recursive ^\\.\\/.*\\/$";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


const components = ['ui-dialog', 'ui-msgbox', 'ui-toast'];

components.forEach(n => {
	const c = __webpack_require__("./src sync recursive ^\\.\\/.*\\/$")(`./${n}/`).default;
	customElements.define(c.is, c);
});

window.addEventListener('WebComponentsReady', demo);

function demo() {
	setTimeout(() => document.body.classList.remove('loading'), 300);
	console.log('ready!');
}

/***/ }),

/***/ "./src/ui-dialog/index.css":
/*!*********************************!*\
  !*** ./src/ui-dialog/index.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui-dialog {\n\tposition: fixed;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\ttop: 0;\n\tpadding: 50px;\n\tz-index: 999;\n\talign-items: center;\n\tjustify-content: center;\n\tflex-direction: column;\n\tmax-height: 100vw;\n\tdisplay: none;\n\topacity: 0;\n}\n\n.ui-dialog-backdrop {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\tmin-width: 100%;\n\tmin-height: 100%;\n\tbackground: rgba(0,0,0,.3);\n}\n\n.ui-dialog-content {\n\tposition: relative;\n\tz-index: 9;\n\twidth: 400px;\n\tmin-height: 100px;\n\tmax-height: 300px;\n\tpadding: 20px;\n\tmargin-top: -10%;\n\tfont-size: 16px;\n\tbackground: #fff;\n\tborder-radius: 3px;\n\tbox-shadow: 0 3px 5px 1px rgba(0,0,0,0.4);\n}\n\n.ui-dialog-content-inner {\n\twidth: 100%;\n\theight: 100%;\n\toverflow-y: auto;\n}\n\n.ui-dialog.visible { display: flex; }\n", ""]);

// exports


/***/ }),

/***/ "./src/ui-dialog/index.html":
/*!**********************************!*\
  !*** ./src/ui-dialog/index.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-dialog\">\n\t<div class=\"ui-dialog-backdrop\" tabindex=\"0\"></div>\n\t<div class=\"ui-dialog-content\" tabindex=\"0\">\n\t\t<div class=\"ui-dialog-content-inner\"><slot></slot></div>\n\t</div>\n\t<div class=\"ui-dialog-focus-guard\" tabindex=\"0\"></div>\n</div>\n";

/***/ }),

/***/ "./src/ui-dialog/index.js":
/*!********************************!*\
  !*** ./src/ui-dialog/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uiDialog; });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/ui-dialog/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/ui-dialog/index.html");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_1__);



const FOCUSABLE_SELECTORS = `
	a[href]:not([tabindex="-1"]),
	input:not([disabled]):not([tabindex="-1"]),
	select:not([disabled]):not([tabindex="-1"]),
	textarea:not([disabled]):not([tabindex="-1"]),
	button:not([disabled]):not([tabindex="-1"]),
	iframe:not([tabindex="-1"]),
	[tabindex]:not([tabindex="-1"]),
	[contentEditable]:not([tabindex="-1"])
`;

const ANIM_CFG = { duration: 300, easing: 'ease-out', fill: 'forwards' };

class uiDialog extends HTMLElement {

	constructor() {
		super();

		this.template = document.createElement('template');
		this.template.innerHTML = `<style>${_index_css__WEBPACK_IMPORTED_MODULE_0___default.a}</style>${_index_html__WEBPACK_IMPORTED_MODULE_1___default.a}`;
		this.templateContent = this.template.content;

		this.observer = new MutationObserver(this.onContentChange.bind(this));
	}

	static get is() {
		return 'ui-dialog';
	}

	static get observedAttributes() {
		return ['open'];
	}

	connectedCallback() {
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(this.templateContent.cloneNode(true));
		this.el = this.shadowRoot.querySelector('.ui-dialog');
		this.contentEl = this.el.querySelector('.ui-dialog-content');

		this.observer.observe(this, { attributes: false, childList: true });
		this.el.addEventListener('click', this.onClick.bind(this));
		this.el.addEventListener('keydown', this.onKeydown.bind(this), true);
		this.el.addEventListener('blur', this.onBlur.bind(this), true);
		this.onContentChange();
	}

	// el moved to a new document
	// adoptedCallback() {}

	// el removed from DOM
	disconnectedCallback() {
		this.observer.disconnect();
		console.log('disconnectedCallback');
	}

	attributeChangedCallback(name, oldVal, newVal) {
		if (name === 'open') {
			if (newVal !== null) this.doOpen();else this.doClose();
		}
	}

	onClick(e) {
		this.tabbingForward = null;
		const tar = e.target;
		const backdropClick = tar.closest('.ui-dialog-backdrop');
		const dialogCloseBtn = tar.getAttribute('close-dialog') !== null;

		if (backdropClick || dialogCloseBtn) this.open = false;
	}

	getFocusableEls() {
		if (!this.focusableElements) {
			let elems = this.querySelectorAll(FOCUSABLE_SELECTORS);
			let first = this.el,
			    last = this.el;
			if (elems.length) {
				first = elems[0];
				last = elems[elems.length - 1];
			} else {
				first = this.el.querySelector('.ui-dialog-backdrop');
				last = this.contentEl;
			}
			this.focusableElements = { first, last };
		}
		return this.focusableElements;
	}

	onBlur(e) {
		if (this.tabbingForward === null) return;

		const target = e.target;
		const { first, last } = this.getFocusableEls();
		let focusEl = null;

		if (this.tabbingForward && target === last) focusEl = first;else if (!this.tabbingForward && target === first) focusEl = last;

		if (focusEl) {
			this.tabbingForward = null;
			focusEl.focus();
			e.preventDefault();
			e.stopImmediatePropagation();
		}
	}

	onKeydown(e) {
		if (e.key === 'Tab') this.tabbingForward = !e.shiftKey;else {
			this.tabbingForward = null;
			if (e.key === 'Escape') this.open = false;
		}
	}

	onContentChange() {
		this.focusableElements = null;
	}

	set open(val) {
		const isOpen = Boolean(val);
		if (isOpen) {
			if (!this.trigger && document.activeElement) this.trigger = document.activeElement;
			this.setAttribute('open', '');
		} else {
			this.removeAttribute('open');
			this.trigger = null;
		}
	}

	get open() {
		return this.hasAttribute('open');
	}

	doOpen(trigger) {
		if (this.visible) return;
		if (trigger) this.trigger = trigger;
		this.el.classList.add('visible');
		this.visible = true;
		this.getFocusableEls().first.focus();
		this.contentEl.animate([{ transform: 'scale(.9)' }, { transform: 'scale(1)' }], ANIM_CFG);
		this.el.animate([{ opacity: 0 }, { opacity: 1 }], ANIM_CFG).onfinish = this.onOpened.bind(this);
	}

	doClose() {
		if (!this.visible) return;
		if (this.trigger) this.trigger.focus();
		this.contentEl.animate([{ transform: 'scale(1)' }, { transform: 'scale(.9)' }], ANIM_CFG);
		this.el.animate([{ opacity: 1 }, { opacity: 0 }], ANIM_CFG).onfinish = this.onClosed.bind(this);
	}

	onOpened() {
		this.dispatchEvent(new CustomEvent('open', {}));
	}

	onClosed() {
		this.el.classList.remove('visible');
		this.visible = false;
		if (this.trigger) this.trigger.focus();
		this.dispatchEvent(new CustomEvent('close', {}));
	}

}

/***/ }),

/***/ "./src/ui-msgbox/index.js":
/*!********************************!*\
  !*** ./src/ui-msgbox/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uiMsgBox; });
/* harmony import */ var _ui_dialog___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui-dialog/ */ "./src/ui-dialog/index.js");


class uiMsgBox extends _ui_dialog___WEBPACK_IMPORTED_MODULE_0__["default"] {

	constructor() {
		super();
	}

	static get is() {
		return 'ui-messagebox';
	}

	onClosed() {
		super.onClosed();
		this.remove();
	}

}

/***/ }),

/***/ "./src/ui-toast/index.css":
/*!********************************!*\
  !*** ./src/ui-toast/index.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.ui-toast-wrapper {\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tz-index: 99;\n\ttext-align: center;\n\tpadding-top: 10px;\n\theight: 0;\n}\n\n\n.ui-toast {\n\tmin-width: 200px;\n\tmax-width: 50%;\n\tdisplay: block;\n\tmargin: 5px auto;\n\tpadding: 20px 30px;\n\ttext-align: center;\n\tborder-radius: 30px;\n\tcolor: rgba(255,255,255, 0.8);\n\tbox-shadow: 0 0 1px 0 rgba(0,0,0, 0.5);\n\topacity: 1;\n\n}\n.ui-toast:focus { box-shadow: 0 0 5px 2px rgba(0,0,0,0.5); outline: none; }\n\n.ui-toast em {\n\tfont-weight: 600;\n\tcolor: #fff;\n\tfont-style: normal;\n}\n\n\n.ui-toast-info { background: rgba(0, 100, 50, 0.8); }\n.ui-toast-warning { background: rgba(120, 86, 0, 0.8); }\n.ui-toast-error { background: rgba(201, 58, 31, 0.8); }\n", ""]);

// exports


/***/ }),

/***/ "./src/ui-toast/index.html":
/*!*********************************!*\
  !*** ./src/ui-toast/index.html ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-toast-wrapper\"></div>\n";

/***/ }),

/***/ "./src/ui-toast/index.js":
/*!*******************************!*\
  !*** ./src/ui-toast/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uiToast; });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/ui-toast/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/ui-toast/index.html");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_1__);



const ANIM_CFG = { duration: 300, easing: 'ease-out', fill: 'forwards' };
const TOAST_TIMEOUT = 5000;

class uiToast extends HTMLElement {

	constructor() {
		super();

		this.template = document.createElement('template');
		this.template.innerHTML = `<style>${_index_css__WEBPACK_IMPORTED_MODULE_0___default.a}</style>${_index_html__WEBPACK_IMPORTED_MODULE_1___default.a}`;
		this.templateContent = this.template.content;
	}

	static get is() {
		return 'ui-toast';
	}

	static get observedAttributes() {}

	connectedCallback() {
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(this.templateContent.cloneNode(true));
		this.el = this.shadowRoot.querySelector('.ui-toast-wrapper');
		this.el.addEventListener('click', this.onClick.bind(this));
		this.el.addEventListener('keydown', this.onKeydown.bind(this), true);
	}

	show({ msg = '', type = 'info', autoclose = true }) {
		if (document.activeElement) this.trigger = document.activeElement;
		const toast = document.createElement('div');
		toast.setAttribute('tabindex', 0);
		toast.className = `ui-toast ui-toast-${type}`;
		toast.innerHTML = msg;
		this.el.appendChild(toast);
		toast.focus();

		const TOASTH = toast.getBoundingClientRect().height;
		const props = [{ opacity: 0, marginTop: `-${TOASTH}px`, transform: 'scale(0.8)' }, { opacity: 1, marginTop: 0, transform: 'scale(1)' }];
		const anim = toast.animate(props, ANIM_CFG);
		if (autoclose) {
			anim.onfinish = () => setTimeout(() => this.hide(toast), TOAST_TIMEOUT);
		}
	}

	hide(toast) {
		const TOASTH = toast.getBoundingClientRect().height;
		toast.classList.add('ui-toast-hiding');
		const props = [{ opacity: 1, marginTop: 0, transform: 'scale(1)' }, { opacity: 0, marginTop: `-${TOASTH}px`, transform: 'scale(0.8)' }];
		const anim = toast.animate(props, ANIM_CFG);
		anim.onfinish = () => toast.remove();

		const toasts = this.el.querySelectorAll('.ui-toast:not(.ui-toast-hiding)');
		if (toasts.length) toasts[toasts.length - 1].focus();else if (this.trigger) this.trigger.focus();
	}

	onClick(e) {
		const toast = e.target.closest('.ui-toast');
		if (toast) this.hide(toast);
	}

	onKeydown(e) {
		if (e.key === 'Escape') {
			e.stopImmediatePropagation();
			e.preventDefault();
			this.onClick(e);
		}
	}

}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYyBzeW5jIF5cXC5cXC8uKlxcLyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91aS1kaWFsb2cvaW5kZXguY3NzIiwid2VicGFjazovLy8uL3NyYy91aS1kaWFsb2cvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdWktZGlhbG9nL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91aS1tc2dib3gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLXRvYXN0L2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWktdG9hc3QvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdWktdG9hc3QvaW5kZXguanMiXSwibmFtZXMiOlsiY29tcG9uZW50cyIsImZvckVhY2giLCJuIiwiYyIsImRlZmF1bHQiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSIsImlzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlbW8iLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiY29uc29sZSIsImxvZyIsIkZPQ1VTQUJMRV9TRUxFQ1RPUlMiLCJBTklNX0NGRyIsImR1cmF0aW9uIiwiZWFzaW5nIiwiZmlsbCIsInVpRGlhbG9nIiwiSFRNTEVsZW1lbnQiLCJjb25zdHJ1Y3RvciIsInRlbXBsYXRlIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInRlbXBsYXRlQ29udGVudCIsImNvbnRlbnQiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJvbkNvbnRlbnRDaGFuZ2UiLCJiaW5kIiwib2JzZXJ2ZWRBdHRyaWJ1dGVzIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwic2hhZG93Um9vdCIsImFwcGVuZENoaWxkIiwiY2xvbmVOb2RlIiwiZWwiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudEVsIiwib2JzZXJ2ZSIsImF0dHJpYnV0ZXMiLCJjaGlsZExpc3QiLCJvbkNsaWNrIiwib25LZXlkb3duIiwib25CbHVyIiwiZGlzY29ubmVjdGVkQ2FsbGJhY2siLCJkaXNjb25uZWN0IiwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIiwibmFtZSIsIm9sZFZhbCIsIm5ld1ZhbCIsImRvT3BlbiIsImRvQ2xvc2UiLCJlIiwidGFiYmluZ0ZvcndhcmQiLCJ0YXIiLCJ0YXJnZXQiLCJiYWNrZHJvcENsaWNrIiwiY2xvc2VzdCIsImRpYWxvZ0Nsb3NlQnRuIiwiZ2V0QXR0cmlidXRlIiwib3BlbiIsImdldEZvY3VzYWJsZUVscyIsImZvY3VzYWJsZUVsZW1lbnRzIiwiZWxlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmlyc3QiLCJsYXN0IiwibGVuZ3RoIiwiZm9jdXNFbCIsImZvY3VzIiwicHJldmVudERlZmF1bHQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJrZXkiLCJzaGlmdEtleSIsInZhbCIsImlzT3BlbiIsIkJvb2xlYW4iLCJ0cmlnZ2VyIiwiYWN0aXZlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImhhc0F0dHJpYnV0ZSIsInZpc2libGUiLCJhZGQiLCJhbmltYXRlIiwidHJhbnNmb3JtIiwib3BhY2l0eSIsIm9uZmluaXNoIiwib25PcGVuZWQiLCJvbkNsb3NlZCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsInVpTXNnQm94IiwiVE9BU1RfVElNRU9VVCIsInVpVG9hc3QiLCJzaG93IiwibXNnIiwidHlwZSIsImF1dG9jbG9zZSIsInRvYXN0IiwiY2xhc3NOYW1lIiwiVE9BU1RIIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0IiwicHJvcHMiLCJtYXJnaW5Ub3AiLCJhbmltIiwiaGlk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IFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsInZhciBtYXAgPSB7XG5cdFwiLi91aS1kaWFsb2cvXCI6IFwiLi9zcmMvdWktZGlhbG9nL2luZGV4LmpzXCIsXG5cdFwiLi91aS1tc2dib3gvXCI6IFwiLi9zcmMvdWktbXNnYm94L2luZGV4LmpzXCIsXG5cdFwiLi91aS10b2FzdC9cIjogXCIuL3NyYy91aS10b2FzdC9pbmRleC5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHRyZXR1cm4gbW9kdWxlO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIG1vZHVsZSBcIicgKyByZXEgKyAnXCIuJyk7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwvJFwiOyIsIlxuY29uc3QgY29tcG9uZW50cyA9IFtcblx0J3VpLWRpYWxvZycsXG5cdCd1aS1tc2dib3gnLFxuXHQndWktdG9hc3QnLFxuXTtcblxuXG5cbmNvbXBvbmVudHMuZm9yRWFjaChuID0+IHtcblx0Y29uc3QgYyA9IHJlcXVpcmUoYC4vJHtufS9gKS5kZWZhdWx0O1xuXHRjdXN0b21FbGVtZW50cy5kZWZpbmUoYy5pcywgYyk7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ1dlYkNvbXBvbmVudHNSZWFkeScsIGRlbW8pO1xuXG5cblxuXG5mdW5jdGlvbiBkZW1vICgpIHtcblx0c2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKSwgMzAwKTtcblx0Y29uc29sZS5sb2coJ3JlYWR5IScpO1xufVxuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi51aS1kaWFsb2cge1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHRsZWZ0OiAwO1xcblxcdHJpZ2h0OiAwO1xcblxcdGJvdHRvbTogMDtcXG5cXHR0b3A6IDA7XFxuXFx0cGFkZGluZzogNTBweDtcXG5cXHR6LWluZGV4OiA5OTk7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdG1heC1oZWlnaHQ6IDEwMHZ3O1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0b3BhY2l0eTogMDtcXG59XFxuXFxuLnVpLWRpYWxvZy1iYWNrZHJvcCB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGxlZnQ6IDA7XFxuXFx0dG9wOiAwO1xcblxcdG1pbi13aWR0aDogMTAwJTtcXG5cXHRtaW4taGVpZ2h0OiAxMDAlO1xcblxcdGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjMpO1xcbn1cXG5cXG4udWktZGlhbG9nLWNvbnRlbnQge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR6LWluZGV4OiA5O1xcblxcdHdpZHRoOiA0MDBweDtcXG5cXHRtaW4taGVpZ2h0OiAxMDBweDtcXG5cXHRtYXgtaGVpZ2h0OiAzMDBweDtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdG1hcmdpbi10b3A6IC0xMCU7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0Ym9yZGVyLXJhZGl1czogM3B4O1xcblxcdGJveC1zaGFkb3c6IDAgM3B4IDVweCAxcHggcmdiYSgwLDAsMCwwLjQpO1xcbn1cXG5cXG4udWktZGlhbG9nLWNvbnRlbnQtaW5uZXIge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4udWktZGlhbG9nLnZpc2libGUgeyBkaXNwbGF5OiBmbGV4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInVpLWRpYWxvZ1xcXCI+XFxuXFx0PGRpdiBjbGFzcz1cXFwidWktZGlhbG9nLWJhY2tkcm9wXFxcIiB0YWJpbmRleD1cXFwiMFxcXCI+PC9kaXY+XFxuXFx0PGRpdiBjbGFzcz1cXFwidWktZGlhbG9nLWNvbnRlbnRcXFwiIHRhYmluZGV4PVxcXCIwXFxcIj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ1aS1kaWFsb2ctY29udGVudC1pbm5lclxcXCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxcblxcdDwvZGl2PlxcblxcdDxkaXYgY2xhc3M9XFxcInVpLWRpYWxvZy1mb2N1cy1ndWFyZFxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiPjwvZGl2PlxcbjwvZGl2PlxcblwiOyIsImltcG9ydCBzdHlsZSBmcm9tICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC5odG1sJztcblxuXG5jb25zdCBGT0NVU0FCTEVfU0VMRUNUT1JTID0gYFxuXHRhW2hyZWZdOm5vdChbdGFiaW5kZXg9XCItMVwiXSksXG5cdGlucHV0Om5vdChbZGlzYWJsZWRdKTpub3QoW3RhYmluZGV4PVwiLTFcIl0pLFxuXHRzZWxlY3Q6bm90KFtkaXNhYmxlZF0pOm5vdChbdGFiaW5kZXg9XCItMVwiXSksXG5cdHRleHRhcmVhOm5vdChbZGlzYWJsZWRdKTpub3QoW3RhYmluZGV4PVwiLTFcIl0pLFxuXHRidXR0b246bm90KFtkaXNhYmxlZF0pOm5vdChbdGFiaW5kZXg9XCItMVwiXSksXG5cdGlmcmFtZTpub3QoW3RhYmluZGV4PVwiLTFcIl0pLFxuXHRbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSksXG5cdFtjb250ZW50RWRpdGFibGVdOm5vdChbdGFiaW5kZXg9XCItMVwiXSlcbmA7XG5cblxuY29uc3QgQU5JTV9DRkcgPSB7ZHVyYXRpb246IDMwMCwgZWFzaW5nOiAnZWFzZS1vdXQnLCBmaWxsOiAnZm9yd2FyZHMnfTtcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB1aURpYWxvZyBleHRlbmRzIEhUTUxFbGVtZW50IHtcblxuXHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMudGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXHRcdHRoaXMudGVtcGxhdGUuaW5uZXJIVE1MID0gYDxzdHlsZT4ke3N0eWxlfTwvc3R5bGU+JHt0ZW1wbGF0ZX1gO1xuXHRcdHRoaXMudGVtcGxhdGVDb250ZW50ID0gdGhpcy50ZW1wbGF0ZS5jb250ZW50O1xuXG5cdFx0dGhpcy5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMub25Db250ZW50Q2hhbmdlLmJpbmQodGhpcykpO1xuXHR9XG5cblx0c3RhdGljIGdldCBpcyAoKSB7IHJldHVybiAndWktZGlhbG9nJzsgfVxuXG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzICgpIHtcblx0XHRyZXR1cm4gWydvcGVuJ107XG5cdH1cblxuXHRjb25uZWN0ZWRDYWxsYmFjayAoKSB7XG5cdFx0dGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cdFx0dGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHRoaXMudGVtcGxhdGVDb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG5cdFx0dGhpcy5lbCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcudWktZGlhbG9nJyk7XG5cdFx0dGhpcy5jb250ZW50RWwgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy51aS1kaWFsb2ctY29udGVudCcpO1xuXG5cdFx0dGhpcy5vYnNlcnZlci5vYnNlcnZlKHRoaXMsIHsgYXR0cmlidXRlczogZmFsc2UsIGNoaWxkTGlzdDogdHJ1ZSB9KTtcblx0XHR0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlkb3duLmJpbmQodGhpcyksIHRydWUpO1xuXHRcdHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMub25CbHVyLmJpbmQodGhpcyksIHRydWUpO1xuXHRcdHRoaXMub25Db250ZW50Q2hhbmdlKCk7XG5cdH1cblxuXHQvLyBlbCBtb3ZlZCB0byBhIG5ldyBkb2N1bWVudFxuXHQvLyBhZG9wdGVkQ2FsbGJhY2soKSB7fVxuXG5cdC8vIGVsIHJlbW92ZWQgZnJvbSBET01cblx0ZGlzY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xuXHRcdHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHRcdGNvbnNvbGUubG9nKCdkaXNjb25uZWN0ZWRDYWxsYmFjaycpO1xuXHR9XG5cblxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsLCBuZXdWYWwpIHtcblx0XHRpZiAobmFtZSA9PT0gJ29wZW4nKSB7XG5cdFx0XHRpZiAobmV3VmFsICE9PSBudWxsKSB0aGlzLmRvT3BlbigpO1xuXHRcdFx0ZWxzZSB0aGlzLmRvQ2xvc2UoKTtcblxuXHRcdH1cblx0fVxuXG5cblx0b25DbGljayAoZSkge1xuXHRcdHRoaXMudGFiYmluZ0ZvcndhcmQgPSBudWxsO1xuXHRcdGNvbnN0IHRhciA9IGUudGFyZ2V0O1xuXHRcdGNvbnN0IGJhY2tkcm9wQ2xpY2sgPSB0YXIuY2xvc2VzdCgnLnVpLWRpYWxvZy1iYWNrZHJvcCcpO1xuXHRcdGNvbnN0IGRpYWxvZ0Nsb3NlQnRuID0gdGFyLmdldEF0dHJpYnV0ZSgnY2xvc2UtZGlhbG9nJykgIT09IG51bGw7XG5cblx0XHRpZiAoYmFja2Ryb3BDbGljayB8fCBkaWFsb2dDbG9zZUJ0bikgdGhpcy5vcGVuID0gZmFsc2U7XG5cdH1cblxuXG5cdGdldEZvY3VzYWJsZUVscyAoKSB7XG5cdFx0aWYgKCF0aGlzLmZvY3VzYWJsZUVsZW1lbnRzKSB7XG5cdFx0XHRsZXQgZWxlbXMgPSB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoRk9DVVNBQkxFX1NFTEVDVE9SUyk7XG5cdFx0XHRsZXQgZmlyc3QgPSB0aGlzLmVsLCBsYXN0ID0gdGhpcy5lbDtcblx0XHRcdGlmIChlbGVtcy5sZW5ndGgpIHtcblx0XHRcdFx0Zmlyc3QgPSBlbGVtc1swXTtcblx0XHRcdFx0bGFzdCA9IGVsZW1zW2VsZW1zLmxlbmd0aCAtIDFdO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGZpcnN0ID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcudWktZGlhbG9nLWJhY2tkcm9wJyk7XG5cdFx0XHRcdGxhc3QgPSB0aGlzLmNvbnRlbnRFbDtcblx0XHRcdH1cblx0XHRcdHRoaXMuZm9jdXNhYmxlRWxlbWVudHMgPSB7Zmlyc3QsIGxhc3R9O1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5mb2N1c2FibGVFbGVtZW50cztcblx0fVxuXG5cblx0b25CbHVyIChlKSB7XG5cdFx0aWYgKHRoaXMudGFiYmluZ0ZvcndhcmQgPT09IG51bGwpIHJldHVybjtcblxuXHRcdGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuXHRcdGNvbnN0IHtmaXJzdCwgbGFzdH0gPSB0aGlzLmdldEZvY3VzYWJsZUVscygpO1xuXHRcdGxldCBmb2N1c0VsID0gbnVsbDtcblxuXHRcdGlmICh0aGlzLnRhYmJpbmdGb3J3YXJkICYmIHRhcmdldCA9PT0gbGFzdCkgZm9jdXNFbCA9IGZpcnN0O1xuXHRcdGVsc2UgaWYgKCF0aGlzLnRhYmJpbmdGb3J3YXJkICYmIHRhcmdldCA9PT0gZmlyc3QpIGZvY3VzRWwgPSBsYXN0O1xuXG5cdFx0aWYgKGZvY3VzRWwpIHtcblx0XHRcdHRoaXMudGFiYmluZ0ZvcndhcmQgPSBudWxsO1xuXHRcdFx0Zm9jdXNFbC5mb2N1cygpO1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHR9XG5cdH1cblxuXG5cdG9uS2V5ZG93biAoZSkge1xuXHRcdGlmIChlLmtleSA9PT0gJ1RhYicpIHRoaXMudGFiYmluZ0ZvcndhcmQgPSAhZS5zaGlmdEtleTtcblx0XHRlbHNlIHtcblx0XHRcdHRoaXMudGFiYmluZ0ZvcndhcmQgPSBudWxsO1xuXHRcdFx0aWYgKGUua2V5ID09PSAnRXNjYXBlJykgdGhpcy5vcGVuID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblxuXHRvbkNvbnRlbnRDaGFuZ2UgKCkge1xuXHRcdHRoaXMuZm9jdXNhYmxlRWxlbWVudHMgPSBudWxsO1xuXHR9XG5cblxuXHRzZXQgb3BlbiAodmFsKSB7XG5cdFx0Y29uc3QgaXNPcGVuID0gQm9vbGVhbih2YWwpO1xuXHRcdGlmIChpc09wZW4pIHtcblx0XHRcdGlmICghdGhpcy50cmlnZ2VyICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHRoaXMudHJpZ2dlciA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnb3BlbicsICcnKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnb3BlbicpO1xuXHRcdFx0dGhpcy50cmlnZ2VyID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRnZXQgb3BlbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdvcGVuJyk7XG5cdH1cblxuXG5cblx0ZG9PcGVuICh0cmlnZ2VyKSB7XG5cdFx0aWYgKHRoaXMudmlzaWJsZSkgcmV0dXJuO1xuXHRcdGlmICh0cmlnZ2VyKSB0aGlzLnRyaWdnZXIgPSB0cmlnZ2VyO1xuXHRcdHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuXHRcdHRoaXMudmlzaWJsZSA9IHRydWU7XG5cdFx0dGhpcy5nZXRGb2N1c2FibGVFbHMoKS5maXJzdC5mb2N1cygpO1xuXHRcdHRoaXMuY29udGVudEVsLmFuaW1hdGUoW3t0cmFuc2Zvcm06ICdzY2FsZSguOSknfSwge3RyYW5zZm9ybTogJ3NjYWxlKDEpJ31dLCBBTklNX0NGRyk7XG5cdFx0dGhpcy5lbFxuXHRcdFx0LmFuaW1hdGUoW3sgb3BhY2l0eTogMCB9LCB7b3BhY2l0eTogMX1dLCBBTklNX0NGRylcblx0XHRcdC5vbmZpbmlzaCA9IHRoaXMub25PcGVuZWQuYmluZCh0aGlzKTtcblx0fVxuXG5cdGRvQ2xvc2UgKCkge1xuXHRcdGlmICghdGhpcy52aXNpYmxlKSByZXR1cm47XG5cdFx0aWYgKHRoaXMudHJpZ2dlcikgdGhpcy50cmlnZ2VyLmZvY3VzKCk7XG5cdFx0dGhpcy5jb250ZW50RWwuYW5pbWF0ZShbe3RyYW5zZm9ybTogJ3NjYWxlKDEpJ30sIHt0cmFuc2Zvcm06ICdzY2FsZSguOSknfV0sIEFOSU1fQ0ZHKTtcblx0XHR0aGlzLmVsXG5cdFx0XHQuYW5pbWF0ZShbeyBvcGFjaXR5OiAxIH0sIHtvcGFjaXR5OiAwfV0sIEFOSU1fQ0ZHKVxuXHRcdFx0Lm9uZmluaXNoID0gdGhpcy5vbkNsb3NlZC5iaW5kKHRoaXMpO1xuXHR9XG5cblxuXHRvbk9wZW5lZCAoKSB7XG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnb3BlbicsIHt9KSk7XG5cdH1cblxuXHRvbkNsb3NlZCAoKSB7XG5cdFx0dGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG5cdFx0dGhpcy52aXNpYmxlID0gZmFsc2U7XG5cdFx0aWYgKHRoaXMudHJpZ2dlcikgdGhpcy50cmlnZ2VyLmZvY3VzKCk7XG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2xvc2UnLCB7fSkpO1xuXHR9XG5cblxufVxuIiwiaW1wb3J0IHVpRGlhbG9nIGZyb20gJy4uL3VpLWRpYWxvZy8nO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdWlNc2dCb3ggZXh0ZW5kcyB1aURpYWxvZyB7XG5cblx0Y29uc3RydWN0b3IgKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0fVxuXG5cdHN0YXRpYyBnZXQgaXMgKCkgeyByZXR1cm4gJ3VpLW1lc3NhZ2Vib3gnOyB9XG5cblxuXHRvbkNsb3NlZCAoKSB7XG5cdFx0c3VwZXIub25DbG9zZWQoKTtcblx0XHR0aGlzLnJlbW92ZSgpO1xuXHR9XG5cbn1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnVpLXRvYXN0LXdyYXBwZXIge1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG5cXHRyaWdodDogMDtcXG5cXHR6LWluZGV4OiA5OTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0cGFkZGluZy10b3A6IDEwcHg7XFxuXFx0aGVpZ2h0OiAwO1xcbn1cXG5cXG5cXG4udWktdG9hc3Qge1xcblxcdG1pbi13aWR0aDogMjAwcHg7XFxuXFx0bWF4LXdpZHRoOiA1MCU7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0bWFyZ2luOiA1cHggYXV0bztcXG5cXHRwYWRkaW5nOiAyMHB4IDMwcHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuXFx0Y29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsIDAuOCk7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDFweCAwIHJnYmEoMCwwLDAsIDAuNSk7XFxuXFx0b3BhY2l0eTogMTtcXG5cXG59XFxuLnVpLXRvYXN0OmZvY3VzIHsgYm94LXNoYWRvdzogMCAwIDVweCAycHggcmdiYSgwLDAsMCwwLjUpOyBvdXRsaW5lOiBub25lOyB9XFxuXFxuLnVpLXRvYXN0IGVtIHtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcblxcdGNvbG9yOiAjZmZmO1xcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuXFxuLnVpLXRvYXN0LWluZm8geyBiYWNrZ3JvdW5kOiByZ2JhKDAsIDEwMCwgNTAsIDAuOCk7IH1cXG4udWktdG9hc3Qtd2FybmluZyB7IGJhY2tncm91bmQ6IHJnYmEoMTIwLCA4NiwgMCwgMC44KTsgfVxcbi51aS10b2FzdC1lcnJvciB7IGJhY2tncm91bmQ6IHJnYmEoMjAxLCA1OCwgMzEsIDAuOCk7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwidWktdG9hc3Qtd3JhcHBlclxcXCI+PC9kaXY+XFxuXCI7IiwiaW1wb3J0IHN0eWxlIGZyb20gJy4vaW5kZXguY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4Lmh0bWwnO1xuXG5cbmNvbnN0IEFOSU1fQ0ZHID0ge2R1cmF0aW9uOiAzMDAsIGVhc2luZzogJ2Vhc2Utb3V0JywgZmlsbDogJ2ZvcndhcmRzJ307XG5jb25zdCBUT0FTVF9USU1FT1VUID0gNTAwMDtcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdWlUb2FzdCBleHRlbmRzIEhUTUxFbGVtZW50IHtcblxuXHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMudGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXHRcdHRoaXMudGVtcGxhdGUuaW5uZXJIVE1MID0gYDxzdHlsZT4ke3N0eWxlfTwvc3R5bGU+JHt0ZW1wbGF0ZX1gO1xuXHRcdHRoaXMudGVtcGxhdGVDb250ZW50ID0gdGhpcy50ZW1wbGF0ZS5jb250ZW50O1xuXHR9XG5cblx0c3RhdGljIGdldCBpcyAoKSB7IHJldHVybiAndWktdG9hc3QnOyB9XG5cblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMgKCkge31cblxuXHRjb25uZWN0ZWRDYWxsYmFjayAoKSB7XG5cdFx0dGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cdFx0dGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHRoaXMudGVtcGxhdGVDb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG5cdFx0dGhpcy5lbCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcudWktdG9hc3Qtd3JhcHBlcicpO1xuXHRcdHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleWRvd24uYmluZCh0aGlzKSwgdHJ1ZSk7XG5cdH1cblxuXG5cdHNob3cgKHsgbXNnID0gJycsIHR5cGUgPSAnaW5mbycsIGF1dG9jbG9zZSA9IHRydWUgfSkge1xuXHRcdGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB0aGlzLnRyaWdnZXIgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXHRcdGNvbnN0IHRvYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dG9hc3Quc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDApO1xuXHRcdHRvYXN0LmNsYXNzTmFtZSA9IGB1aS10b2FzdCB1aS10b2FzdC0ke3R5cGV9YDtcblx0XHR0b2FzdC5pbm5lckhUTUwgPSBtc2c7XG5cdFx0dGhpcy5lbC5hcHBlbmRDaGlsZCh0b2FzdCk7XG5cdFx0dG9hc3QuZm9jdXMoKTtcblxuXHRcdGNvbnN0IFRPQVNUSCA9IHRvYXN0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblx0XHRjb25zdCBwcm9wcyA9IFtcblx0XHRcdHtvcGFjaXR5OiAwLCBtYXJnaW5Ub3A6IGAtJHtUT0FTVEh9cHhgLCB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJ30sXG5cdFx0XHR7b3BhY2l0eTogMSwgbWFyZ2luVG9wOiAwLCB0cmFuc2Zvcm06ICdzY2FsZSgxKSd9XG5cdFx0XTtcblx0XHRjb25zdCBhbmltID0gdG9hc3QuYW5pbWF0ZShwcm9wcywgQU5JTV9DRkcpO1xuXHRcdGlmIChhdXRvY2xvc2UpIHtcblx0XHRcdGFuaW0ub25maW5pc2ggPSAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaGlkZSh0b2FzdCksIFRPQVNUX1RJTUVPVVQpO1xuXHRcdH1cblx0fVxuXG5cblx0aGlkZSAodG9hc3QpIHtcblx0XHRjb25zdCBUT0FTVEggPSB0b2FzdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cdFx0dG9hc3QuY2xhc3NMaXN0LmFkZCgndWktdG9hc3QtaGlkaW5nJyk7XG5cdFx0Y29uc3QgcHJvcHMgPSBbXG5cdFx0XHR7b3BhY2l0eTogMSwgbWFyZ2luVG9wOiAwLCB0cmFuc2Zvcm06ICdzY2FsZSgxKSd9LFxuXHRcdFx0e29wYWNpdHk6IDAsIG1hcmdpblRvcDogYC0ke1RPQVNUSH1weGAsIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknfVxuXHRcdF07XG5cdFx0Y29uc3QgYW5pbSA9IHRvYXN0LmFuaW1hdGUocHJvcHMsIEFOSU1fQ0ZHKTtcblx0XHRhbmltLm9uZmluaXNoID0gKCkgPT4gdG9hc3QucmVtb3ZlKCk7XG5cblx0XHRjb25zdCB0b2FzdHMgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy51aS10b2FzdDpub3QoLnVpLXRvYXN0LWhpZGluZyknKTtcblx0XHRpZiAodG9hc3RzLmxlbmd0aCkgdG9hc3RzW3RvYXN0cy5sZW5ndGggLSAxXS5mb2N1cygpO1xuXHRcdGVsc2UgaWYgKHRoaXMudHJpZ2dlcikgdGhpcy50cmlnZ2VyLmZvY3VzKCk7XG5cdH1cblxuXG5cdG9uQ2xpY2sgKGUpIHtcblx0XHRjb25zdCB0b2FzdCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy51aS10b2FzdCcpO1xuXHRcdGlmICh0b2FzdCkgdGhpcy5oaWRlKHRvYXN0KTtcblx0fVxuXG5cblx0b25LZXlkb3duIChlKSB7XG5cdFx0aWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuXHRcdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRoaXMub25DbGljayhlKTtcblx0XHR9XG5cdH1cblxuXG5cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==