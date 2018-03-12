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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client sync recursive ^\\.\\/.*\\/$":
/*!********************************!*\
  !*** ./client sync ^\.\/.*\/$ ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./calendar/": "./client/calendar/index.js",
	"./categories/": "./client/categories/index.js",
	"./components/calendar/": "./client/components/calendar/index.js",
	"./components/ui-dialog/": "./client/components/ui-dialog/index.js",
	"./components/ui-msgbox/": "./client/components/ui-msgbox/index.js",
	"./components/ui-toast/": "./client/components/ui-toast/index.js",
	"./core/": "./client/core/index.js",
	"./core/util/": "./client/core/util/index.js"
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
webpackContext.id = "./client sync recursive ^\\.\\/.*\\/$";

/***/ }),

/***/ "./client/calendar/index.css":
/*!***********************************!*\
  !*** ./client/calendar/index.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./index.css */ "./node_modules/css-loader/index.js!./client/calendar/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./client/calendar/index.js":
/*!**********************************!*\
  !*** ./client/calendar/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__(/*! ./index.css */ "./client/calendar/index.css");

function init() {
	console.log('calendar sidebar is ready!');
}

/* harmony default export */ __webpack_exports__["default"] = ({
	init
});

/***/ }),

/***/ "./client/categories/index.css":
/*!*************************************!*\
  !*** ./client/categories/index.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./index.css */ "./node_modules/css-loader/index.js!./client/categories/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./client/categories/index.js":
/*!************************************!*\
  !*** ./client/categories/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__(/*! ./index.css */ "./client/categories/index.css");

function init() {
	console.log('categories sidebar ready!');
}

/* harmony default export */ __webpack_exports__["default"] = ({
	init
});

/***/ }),

/***/ "./client/components/calendar/index.css":
/*!**********************************************!*\
  !*** ./client/components/calendar/index.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".calendar {\n\t--first-day: 1;\n\t-moz-user-select: none;\n\tuser-select: none;\n\tcursor: default;\n\twidth: inherit;\n\tposition: relative;\n\tfont: normal 1em sans-serif;\n}\n\n.calendar .day-card {\n\tpadding: 20px 0 32px;\n\tmargin-bottom: 2px;\n\ttext-align: center;\n\tbackground: #cee;\n}\n\n.calendar h1,\n.calendar h2 { margin: 0; line-height: 1; font: inherit; text-transform: uppercase; }\n.calendar h1 { font-size: 4.6em; }\n\n.calendar nav {\n\tlist-style: none;\n\tpadding: 0;\n\tmargin: 0;\n\tdisplay: grid;\n\tgrid-gap: 0;\n\tgrid-template-columns: repeat(7, 1fr);\n}\n\n.calendar a {\n\tpadding: 5px 5px 3px 0;\n\ttext-align: right;\n\tcolor: inherit;\n\ttext-decoration: none;\n}\n\n.calendar .months {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\toverflow: hidden;\n\tmargin: -20px 0 0;\n\tpadding: 0 5px;\n}\n.calendar .months a { padding: 3px 0; }\n\n.calendar .weekdays { border-top: 1px solid #888; border-bottom: 1px solid #888; }\n.calendar .weekdays a { background: #ccc; }\n\n.calendar .months a,\n.calendar .days a { cursor: pointer; }\n\n.calendar .months a:hover,\n.calendar .days a:hover { color: #9bf; }\n\n.calendar .selected { font-weight: bold; color: blue !important; }\n\n.days-28 .day-29, .days-28 .day-30, .days-28 .day-31,\n.days-29 .day-30, .days-29 .day-31,\n.days-30 .day-31 { display: none; }\n\n.calendar .day-1 { grid-column-start: var(--first-day); }\n\n.year {\n\tdisplay: flex;\n\talign-items: stretch;\n\tjustify-content: end;\n\tposition: absolute;\n\ttop: 5px;\n\tleft: 0;\n\tright: 0;\n}\n.year .filler { flex: 1; }\n\n.year button { background: none; border: none; cursor: pointer; border-radius: 3px; }\n.year button:hover { color: blue; }\n\n.year span {\n\tdisplay: flex;\n\talign-items: center;\n\talign-content: center;\n\tpadding-top: 3px;\n\tmargin: 0 3px;\n}\n\n\n", ""]);

// exports


/***/ }),

/***/ "./client/components/calendar/index.html":
/*!***********************************************!*\
  !*** ./client/components/calendar/index.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"calendar\"><div class=\"day-card\"></div>\n\t<div class=\"year\">\n\t\t<button class=\"today\" title=\"Go to today\">Today</button>\n\t\t<div class=\"filler\"></div>\n\t\t<button class=\"prev-year\" title=\"Previous year\">◀</button>\n\t\t<span>2018</span>\n\t\t<button class=\"next-year\" title=\"Next year\">▶</button>\n\t</div>\n\t<nav class=\"months\"></nav><nav class=\"weekdays\"></nav><nav class=\"days\"></nav>\n</div>";

/***/ }),

/***/ "./client/components/calendar/index.js":
/*!*********************************************!*\
  !*** ./client/components/calendar/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return perfectCalendar; });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./client/components/calendar/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./client/components/calendar/index.html");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_1__);



const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class perfectCalendar extends HTMLElement {

	constructor() {
		super();
		this.template = document.createElement('template');
		this.template.innerHTML = `<style>${_index_css__WEBPACK_IMPORTED_MODULE_0___default.a}</style>${_index_html__WEBPACK_IMPORTED_MODULE_1___default.a}`;
		this.templateContent = this.template.content;
	}

	static get is() {
		return 'perfect-calendar';
	}
	static get observedAttributes() {
		return ['date'];
	}

	connectedCallback() {
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(this.templateContent.cloneNode(true));
		this.el = this.shadowRoot.querySelector('.calendar');
		this.dayCard = this.el.querySelector('.day-card');

		this.monthsEl = this.el.querySelector('.months');
		this.weekdaysEl = this.el.querySelector('.weekdays');
		this.daysEl = this.el.querySelector('.days');
		this.fillCalendar();

		this.el.addEventListener('click', this.onClick.bind(this));
		if (!this.getAttribute('date')) this.date = new Date();
	}

	attributeChangedCallback(name, oldVal, newVal) {
		if (name === 'date') this.upDate(newVal);
	}

	set date(val) {
		if (typeof val !== 'string') val = this.format(val);
		this.setAttribute('date', val);
	}

	get date() {
		return this.getAttribute('date');
	}

	get fullDate() {
		const date = new Date(this.date);
		return Object.assign({}, this.dateObj, { date, dateStr: this.date });
	}

	// yyyy-mm-dd
	format(d) {
		return d.toISOString().substr(0, 10);
	}

	upDate(date) {
		date = date || this.getAttribute('date');
		if (!date || !this.el) return;
		this.realDate = new Date(date);

		const y = this.realDate.getFullYear();
		const m = this.realDate.getMonth();
		const d = this.realDate.getDate();
		const month = months[m];
		const firstDayOfMonth = new Date(Date.UTC(y, m, 1)).getDay() || 7; // make Sun 7 not 0
		const daysInMonth = new Date(Date.UTC(y, m + 1, 0)).getDate();
		const weekday = weekdays[(this.realDate.getDay() || 7) - 1];
		this.dateObj = { y, m, d, month, firstDayOfMonth, daysInMonth, weekday };
		this.render();
	}

	render() {
		this.el.style.setProperty('--first-day', this.dateObj.firstDayOfMonth);
		this.el.className = 'calendar days-' + this.dateObj.daysInMonth;
		this.dayCard.innerHTML = this.getDayCard();
		this.el.querySelector('.year span').innerText = this.dateObj.y;

		if (this.selectedDay) this.selectedDay.classList.remove('selected');
		this.selectedDay = this.daysEl.querySelector('.day-' + this.dateObj.d);
		this.selectedDay.classList.add('selected');

		if (this.selectedMonth) this.selectedMonth.classList.remove('selected');
		this.selectedMonth = this.monthsEl.querySelectorAll('a')[this.dateObj.m];
		this.selectedMonth.classList.add('selected');
	}

	getDayCard() {
		return `<h1>${this.dateObj.d}</h1><h2>${this.dateObj.weekday}</h2>`;
	}

	fillCalendar() {
		this.monthsEl.innerHTML = months.map(m => `<a href="#${m}">${m.substr(0, 3)}</a>`).join('');
		this.weekdaysEl.innerHTML = weekdays.map(m => `<a>${m.substr(0, 3)}</a>`).join('');
		const days = Array(31).fill(0).map((n, i) => i + 1).map(i => `<a href="#${i}" class="day-${i}">${i}</a>`);
		this.daysEl.innerHTML = days.join('');
	}

	setDate(y = this.dateObj.y, m = this.dateObj.m, d = this.dateObj.d) {
		if (y instanceof Date) return this.setDate(y.getFullYear(), y.getMonth(), y.getDate());
		const date = new Date(Date.UTC(y, m, d));
		if (date !== this.realDate) {
			this.date = date;
			this.dispatchEvent(new CustomEvent('change', { detail: this.fullDate }));
		}
	}

	onClick(e) {
		const target = e.target;
		const dayEl = target.closest('.days a');
		if (dayEl) {
			const dayEls = this.daysEl.children;
			const day = Array.prototype.indexOf.call(dayEls, dayEl) + 1;
			e.preventDefault();
			return this.setDate(undefined, undefined, day);
		}

		const monthEl = target.closest('.months a');
		if (monthEl) {
			const monthsEls = monthEl.parentNode.children;
			const month = Array.prototype.indexOf.call(monthsEls, monthEl);
			e.preventDefault();
			return this.setDate(undefined, month);
		}

		const today = target.closest('.today');
		if (today) return this.setDate(new Date());

		const prevYear = target.closest('.prev-year');
		if (prevYear) return this.setDate(this.dateObj.y - 1);

		const nextYear = target.closest('.next-year');
		if (nextYear) return this.setDate(this.dateObj.y + 1);
	}

}

// customElements.define('perfect-calendar', perfectCalendar);

/***/ }),

/***/ "./client/components/ui-dialog/index.css":
/*!***********************************************!*\
  !*** ./client/components/ui-dialog/index.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui-dialog {\n\tposition: fixed;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\ttop: 0;\n\tpadding: 50px;\n\tz-index: 999;\n\talign-items: center;\n\tjustify-content: center;\n\tflex-direction: column;\n\tmax-height: 100vw;\n\tdisplay: none;\n\topacity: 0;\n}\n\n.ui-dialog-backdrop {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\tmin-width: 100%;\n\tmin-height: 100%;\n\tbackground: rgba(0,0,0,.3);\n}\n\n.ui-dialog-content {\n\tposition: relative;\n\tz-index: 9;\n\twidth: 400px;\n\tmin-height: 100px;\n\tmax-height: 300px;\n\tpadding: 20px;\n\tmargin-top: -10%;\n\tfont-size: 16px;\n\tbackground: #fff;\n\tborder-radius: 3px;\n\tbox-shadow: 0 3px 5px 1px rgba(0,0,0,0.4);\n}\n\n.ui-dialog-content-inner {\n\twidth: 100%;\n\theight: 100%;\n\toverflow-y: auto;\n}\n\n.ui-dialog.visible { display: flex; }\n", ""]);

// exports


/***/ }),

/***/ "./client/components/ui-dialog/index.html":
/*!************************************************!*\
  !*** ./client/components/ui-dialog/index.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-dialog\">\n\t<div class=\"ui-dialog-backdrop\" tabindex=\"0\"></div>\n\t<div class=\"ui-dialog-content\" tabindex=\"0\">\n\t\t<div class=\"ui-dialog-content-inner\"><slot></slot></div>\n\t</div>\n\t<div class=\"ui-dialog-focus-guard\" tabindex=\"0\"></div>\n</div>\n";

/***/ }),

/***/ "./client/components/ui-dialog/index.js":
/*!**********************************************!*\
  !*** ./client/components/ui-dialog/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uiDialog; });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./client/components/ui-dialog/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./client/components/ui-dialog/index.html");
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

/***/ "./client/components/ui-msgbox/index.js":
/*!**********************************************!*\
  !*** ./client/components/ui-msgbox/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uiMsgBox; });
/* harmony import */ var _ui_dialog___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui-dialog/ */ "./client/components/ui-dialog/index.js");


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

/***/ "./client/components/ui-toast/index.css":
/*!**********************************************!*\
  !*** ./client/components/ui-toast/index.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.ui-toast-wrapper {\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tz-index: 99;\n\ttext-align: center;\n\tpadding-top: 10px;\n\theight: 0;\n}\n\n\n.ui-toast {\n\tmin-width: 200px;\n\tmax-width: 50%;\n\tdisplay: block;\n\tmargin: 5px auto;\n\tpadding: 20px 30px;\n\ttext-align: center;\n\tborder-radius: 30px;\n\tcolor: rgba(255,255,255, 0.8);\n\tbox-shadow: 0 0 1px 0 rgba(0,0,0, 0.5);\n\topacity: 1;\n\n}\n.ui-toast:focus { box-shadow: 0 0 5px 2px rgba(0,0,0,0.5); outline: none; }\n\n.ui-toast em {\n\tfont-weight: 600;\n\tcolor: #fff;\n\tfont-style: normal;\n}\n\n\n.ui-toast-info { background: rgba(0, 100, 50, 0.8); }\n.ui-toast-warning { background: rgba(120, 86, 0, 0.8); }\n.ui-toast-error { background: rgba(201, 58, 31, 0.8); }\n", ""]);

// exports


/***/ }),

/***/ "./client/components/ui-toast/index.html":
/*!***********************************************!*\
  !*** ./client/components/ui-toast/index.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-toast-wrapper\"></div>\n";

/***/ }),

/***/ "./client/components/ui-toast/index.js":
/*!*********************************************!*\
  !*** ./client/components/ui-toast/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uiToast; });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./client/components/ui-toast/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./client/components/ui-toast/index.html");
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

/***/ }),

/***/ "./client/core/events.js":
/*!*******************************!*\
  !*** ./client/core/events.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {

	document: {
		clicked: 'document-clicked',
		keyup: 'document-keyup'
	},

	toast: {
		info: 'toast-info',
		error: 'toast-error',
		warning: 'toast-warning'
	}

};

/***/ }),

/***/ "./client/core/helper.js":
/*!*******************************!*\
  !*** ./client/core/helper.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



// function init (components, path = '../') {
// 	components = [...new Set(components)];	// unique
// 	components.forEach(c => {
// 		const m = require(path + c);
// 		if (m && m.init) m.init();
// 	});

// 	window.focus();
// }


// module.exports = {

// 	init
// };

/***/ }),

/***/ "./client/core/index.js":
/*!******************************!*\
  !*** ./client/core/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const EVENT = __webpack_require__(/*! ./events */ "./client/core/events.js");
const helper = __webpack_require__(/*! ./helper */ "./client/core/helper.js");
const $ = __webpack_require__(/*! ./util */ "./client/core/util/index.js");

module.exports = {
	$,
	helper,
	EVENT
};

/***/ }),

/***/ "./client/core/util/ajax.js":
/*!**********************************!*\
  !*** ./client/core/util/ajax.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const util = __webpack_require__(/*! ./util */ "./client/core/util/util.js");

const baseUrl = '';

function ajax(options) {
	if (typeof options === 'string') options = { url: options };

	let resp;
	let data = options.data || '';
	const req = new XMLHttpRequest();

	options.url = baseUrl + options.url;
	options.method = options.method || 'GET';
	options.type = options.type || 'json';

	if (data) {
		if (options.method.toLowerCase() === 'get') options.url += util.serialize(data);else if (options.type === 'json') data = JSON.stringify(data);
	}
	return new Promise((resolve, reject) => {
		req.open(options.method, options.url, true);
		req.onload = () => {
			if (req.status >= 200 && req.status < 400) {
				try {
					resp = JSON.parse(req.responseText);
				} catch (e) {
					resp = req.responseText;
				}
				resolve(resp);
			} else reject(req.statusText);
		};
		req.onerror = () => reject(req.statusText);
		req.setRequestHeader('Content-Type', `application/${options.type}; charset=UTF-8`);
		req.send(data);
	});
}

module.exports = {
	ajax,
	get: (url, data) => ajax({ url, data: data || {} }),
	post: (url, data) => ajax({ url, data: data || {}, method: 'POST' }),
	put: (url, data) => ajax({ url, data: data || {}, method: 'PUT' }),
	del: (url, data) => ajax({ url, data: data || {}, method: 'DELETE' })
};

/***/ }),

/***/ "./client/core/util/form.js":
/*!**********************************!*\
  !*** ./client/core/util/form.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const keyBreaker = /[^[\]]+/g;
const numberMatcher = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/;

function _isNumber(value) {
	if (typeof value === 'number') return true;
	if (typeof value !== 'string') return false;
	return value.match(numberMatcher);
}

function _decodeEntities(str) {
	const d = document.createElement('div');
	d.innerHTML = str;
	return d.innerText || d.textContent;
}

function _getInputs(form) {
	const inputs = form.querySelectorAll('[name]');
	return Array.prototype.slice.call(inputs) || [];
}

/**
 * Form component
 * @param {object} el - form DOM element
 */
function Form(el) {
	if (!el) return null;
	if (!(this instanceof Form)) return new Form(el);
	this.form = el;
	if (el.elements) this.inputs = el.elements;
}

Form.prototype.set = function (params = {}, clear) {
	this.suspendObserve = true;
	if (this.animFrame) cancelAnimationFrame(this.animFrame);

	const inputs = _getInputs(this.form);
	for (let input of inputs) {
		const name = input.name;
		let value = typeof params[name] === 'undefined' ? '' : params[name];

		// if name is object, e.g. user[name], userData[address][street], update value to read this correctly
		if (name.indexOf('[') > -1) {
			let v = params;
			let names = name.replace(/[[\]]/g, '|').split('|');
			for (let n of names) {
				if (v[n]) v = v[n];else {
					v = undefined;break;
				}
			}
			value = v;
		}

		// if clear==true and no value = clear field, otherwise - leave it as it was
		if (clear !== true && (value === undefined || !params[name])) continue;

		// if no value - clear field
		if (value === null || value === undefined) value = '';

		// decode html special chars (entities)
		if (typeof value === 'string' && value.indexOf('&') > -1) value = _decodeEntities(value);

		if (input.type === 'radio') input.checked = input.value.toString() === value.toString();else if (input.type === 'checkbox') input.checked = value;else if (input.tagName === 'SELECT') {
			if (value === '' || value === undefined) input.selectedIndex = 0;else input.value = value;
		} else input.value = value;
	}
	this.suspendObserve = false;

	return this.update();
};

Form.prototype.get = function (convert = false) {
	const inputs = _getInputs(this.form);
	let data = {},
	    current;

	for (let input of inputs) {
		let type = input.type && input.type.toLowerCase(),
		    value,
		    parts,
		    lastPart,
		    last;

		// if we are submit or disabled - ignore
		if (type === 'submit' || !input.name || input.disabled) continue;

		value = input.value;
		parts = input.name.match(keyBreaker);

		// return only "checked" radio value
		if (type === 'radio' && !input.checked) continue;

		// convert chekbox to [true | false]
		if (type === 'checkbox') value = input.checked;

		if (convert) {
			if (_isNumber(value)) {
				let tv = parseFloat(value);
				let cmp = tv + '';
				// convert (string)100.00 to (int)100
				if (value.indexOf('.') > 0) cmp = tv.toFixed(value.split('.')[1].length);
				if (cmp === value) value = tv;
			} else if (value === 'true') value = true;else if (value === 'false') value = false;
			if (value === '') value = null;
		}

		current = data;
		// go through and create nested objects
		for (let i = 0; i < parts.length - 1; i++) {
			current[parts[i]] = current[parts[i]] || {};
			current = current[parts[i]];
		}
		lastPart = parts[parts.length - 1];

		// now we are on the last part, set the value
		last = current[lastPart];
		if (last) {
			if (!Array.isArray(last)) current[lastPart] = last === undefined ? [] : [last];
			current[lastPart].push(value);
		} else current[lastPart] = value;
	}

	return data;
};

Form.prototype.reset = function () {
	this.set({});
};

Form.prototype.clear = function () {
	this.set({}, true);
};

Form.prototype.update = function () {
	if (this.animFrame) cancelAnimationFrame(this.animFrame);
	if (!this.observeCb) return;
	if (this.suspendObserve) return;
	for (let field of this.form.elements) {
		let fname = field.name.replace(/[[\]]/g, '_') + 'val',
		    ov = this.form.dataset[fname],
		    v = field.value;
		if (fname === 'val') continue;
		if (field.type === 'checkbox') {
			v = field.checked;
			ov = ov === 'true';
		} else if (field.type === 'radio' && !field.checked) continue;
		if (typeof ov === 'undefined' && typeof v !== 'undefined') {
			if (field.type === 'radio') this.observeCb(v, ov, field);
			ov = this.form.dataset[fname] = v;
		} else if (ov !== v) {
			this.form.dataset[fname] = v;
			this.observeCb(v, ov, field);
		}
	}

	this.animFrame = requestAnimationFrame(this.update.bind(this));
};
Form.prototype.observe = function (cb) {
	this.update(this.observeCb = cb);
};
Form.prototype.observeStop = function () {
	this.observeCb = null;
};

module.exports = Form;

/***/ }),

/***/ "./client/core/util/index.js":
/*!***********************************!*\
  !*** ./client/core/util/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const longClick = __webpack_require__(/*! ./long-click */ "./client/core/util/long-click.js");
const sizzle = __webpack_require__(/*! ./sizzle */ "./client/core/util/sizzle.js");
const ajax = __webpack_require__(/*! ./ajax */ "./client/core/util/ajax.js");
const form = __webpack_require__(/*! ./form */ "./client/core/util/form.js");
const pubsub = __webpack_require__(/*! ./pubsub */ "./client/core/util/pubsub.js");
const keys = __webpack_require__(/*! ./keys */ "./client/core/util/keys.js");
const util = __webpack_require__(/*! ./util */ "./client/core/util/util.js");

let all = { ajax, form };
Object.assign(all, ajax, pubsub, keys, util);
for (let prop in all) sizzle[prop] = all[prop];

longClick.init();

module.exports = sizzle;

/***/ }),

/***/ "./client/core/util/keys.js":
/*!**********************************!*\
  !*** ./client/core/util/keys.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const keys = {
	A: 65,
	X: 88,
	C: 67,
	D: 68,
	V: 86,
	Z: 90,

	F1: 112,
	F2: 113,
	F5: 116,
	TAB: 9,
	ESC: 27,

	BCKSPC: 8,
	BACKSPACE: 8,
	ENTER: 13,
	SPACE: 32,
	PGUP: 33,
	PGDOWN: 34,
	END: 35,
	HOME: 36,
	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40,
	INS: 45,
	DEL: 46,
	MINUS: 173,
	PLUS: 61,
	DOT: 190,
	SLASH: 191,

	MACMINUS: 189,
	MACPLUS: 187,

	NUMSTAR: 106,
	NUMMINUS: 109,
	NUMPLUS: 107,
	NUMDOT: 110,
	NUMSLASH: 111
},
      digits = {
	48: 1, // 0
	49: 1, // 1
	50: 1, // 2
	51: 1, // 3
	52: 1, // 4
	53: 1, // 5
	54: 1, // 6
	55: 1, // 7
	56: 1, // 8
	57: 1, // 9
	96: 1, // numpad 0
	97: 1, // numpad 1
	98: 1, // numpad 2
	99: 1, // numpad 3
	100: 1, // numpad 4
	101: 1, // numpad 5
	102: 1, // numpad 6
	103: 1, // numpad 7
	104: 1, // numpad 8
	105: 1 // numpad 9
},
      allowedChars = {
	8: 1, // backspace
	9: 1, // tab
	46: 1, // del
	35: 1, // end
	36: 1, // home
	37: 1, // left
	39: 1 // right
};

// math operators: + - * / ( ) .
function isMath(e) {
	const k = e.keyCode;
	if (k === keys.SPACE) return true;
	if (k === keys.NUMDOT || k === keys.DOT && !e.shiftKey) return true;
	if (k === keys.NUMMINUS || k === keys.MINUS && !e.shiftKey) return true;
	if (k === keys.NUMPLUS || k === keys.PLUS && e.shiftKey) return true;
	if (k === keys.NUMSLASH || k === keys.SLASH && !e.shiftKey) return true;
	if (k === keys.MACMINUS && !e.shiftKey) return true;
	if (k === keys.MACPLUS && e.shiftKey) return true;

	if (e.shiftKey) {
		if (k === 56 || k === 57 || k === 48) return true;
	}
	return false;
}

// digits + navigation + copy/cut/paste + math operators
function isCutCopyPaste(e) {
	const k = e.keyCode;
	const ctrlOrCmd = e && (e.ctrlKey === true || e.metaKey === true);
	return ctrlOrCmd && (k === keys.X || k === keys.C || k === keys.V);
}

// a - z
function isAlpha(e) {
	return e.keyCode >= 65 && e.keyCode <= 90 && !e.ctrlKey && !e.metaKey;
}

function isDigit(e) {
	return digits[e.keyCode] === 1 && !e.shiftKey;
}

function isAlphaNumeric(e) {
	return isAlpha(e) || isDigit(e);
}

function isNavChar(e) {
	return allowedChars[e.keyCode] === 1;
}

function isNumberField(e) {
	const isEnter = e.keyCode === 13;
	return isDigit(e) || isNavChar(e) || isCutCopyPaste(e) || isEnter;
}

module.exports = {
	keys,
	isNavChar,
	isCutCopyPaste,
	isDigit,
	isAlpha,
	isMath,
	isAlphaNumeric,
	isNumberField
};

/***/ }),

/***/ "./client/core/util/long-click.js":
/*!****************************************!*\
  !*** ./client/core/util/long-click.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const DELAY = 1000;
const EVENT_NAME = 'longclick';

let timer = null;
let isReady = false;

const reset = () => clearTimeout(timer);

function fireEvent(e) {
  e.target.dispatchEvent(new CustomEvent(EVENT_NAME, { bubbles: true, cancelable: true }));
  reset();
}

function init() {
  if (isReady) return;
  // patch CustomEvent to allow constructor creation (IE/Chrome)
  // - resolved once initCustomEvent no longer exists
  if ('initCustomEvent' in document.createEvent('CustomEvent')) {
    window.CustomEvent = function (event, params) {
      params = params || { bubbles: false, cancelable: false, detail: undefined };
      const evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    };
    window.CustomEvent.prototype = window.Event.prototype;
  }

  document.addEventListener('mouseup', reset);
  document.addEventListener('mouseout', reset);
  document.addEventListener('mousemove', reset);
  document.addEventListener('mousedown', e => {
    timer = setTimeout(fireEvent.bind(e, e), DELAY);
  });
  isReady = true;
}

module.exports = {
  init
};

/***/ }),

/***/ "./client/core/util/pubsub.js":
/*!************************************!*\
  !*** ./client/core/util/pubsub.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const _cache = {};

function trigger(topic, ...args) {
	if (!_cache[topic]) return;
	_cache[topic].forEach(cb => {
		if (typeof cb === 'function') cb.apply(cb, args);
	});
}

function on(topic, callback) {
	if (!_cache[topic]) _cache[topic] = [];
	_cache[topic].push(callback);
	return [topic, callback]; // handle for off
}

function off(handle) {
	let [topic, cb] = handle,
	    ca = _cache[topic];
	cb = cb.toString();
	if (!ca) return;

	ca.forEach((fn, i) => {
		if (fn.toString() === cb) ca.splice(i, 1);
	});
}

module.exports = { on, off, trigger };

/***/ }),

/***/ "./client/core/util/sizzle.js":
/*!************************************!*\
  !*** ./client/core/util/sizzle.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// const Velocity = require('velocity-animate');

const type = obj => obj ? Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() : 'undefined';
const isNodeList = nodes => typeof nodes === 'object' && /^(htmlcollection|nodelist|object)$/.test(type(nodes)) && (nodes.length === 0 || typeof nodes[0] === 'object' && nodes[0].nodeType > 0);

function sizzle(mixed, context) {
	if (!mixed) return [];
	let el;
	if (typeof mixed !== 'string') el = mixed;

	// is html - create new element
	else if (/<[a-z][\s\S]*>/i.test(mixed)) {
			el = new DOMParser().parseFromString(mixed, 'text/html').body.firstChild;
		}
		// is selector - find element
		else el = (context || document).querySelectorAll(mixed);

	if (el.nodeType) el = [el];else if (isNodeList(el)) el = Array.from(el);

	return Object.assign(el || [], sizzle.fn);
}

sizzle.fn = {};
sizzle.fn.find = function (selector) {
	return sizzle(selector, this[0]);
};
sizzle.fn.first = function () {
	return sizzle(this[0]);
};
sizzle.fn.last = function () {
	return sizzle(this[this.length - 1]);
};
sizzle.fn.eq = function (idx) {
	return sizzle(this[idx || 0]);
};

sizzle.fn.appendTo = function (parent) {
	if (!this || !this.length) return this;
	if (typeof parent === 'string') parent = sizzle(parent);else if (!Array.isArray(parent)) parent = [parent];
	parent[0].appendChild(this[0]);
	return this;
};

sizzle.fn.append = function (child) {
	if (!this || !this.length) return this;
	if (typeof child === 'string') child = sizzle(child);
	this[0].appendChild(child[0]);
	return this;
};

sizzle.fn.on = function (eventName, cb) {
	if (!this || !this.length) return this;
	this.forEach(el => {
		el.addEventListener(eventName, cb);
	});
	return this;
};

sizzle.fn.off = function (eventName, cb) {
	if (!this || !this.length) return this;
	this.forEach(el => {
		el.removeEventListener(eventName, cb);
	});
	return this;
};

sizzle.fn.is = function (selector) {
	if (!this || !this.length) return false;
	return this[0].matches(selector);
};

sizzle.fn.closest = function (cls) {
	if (!this || !this.length) return false;
	return sizzle(this[0].closest(cls));
};

/**
 * Modify element class list
 * @param  {array} el        array of elements
 * @param  {string} action   add, remove or toggle
 * @param  {string} cls      space separated list of classes to add/remove/toggle
 * @param  {boolean} cond    [optional] true or false for toggle
 * @return {array}           same array of elements
 */
function modElCls(el, action, cls, cond) {
	if (!el || !el.length) return el;
	cls = ('' + cls).split(' ');
	if (typeof cond === 'boolean') {
		el.forEach(e => cls.forEach(c => e.classList[action](c, cond)));
	} else el.forEach(e => cls.forEach(c => e.classList[action](c)));
	return el;
}

sizzle.fn.addClass = function (cls) {
	return modElCls(this, 'add', cls);
};
sizzle.fn.removeClass = function (cls) {
	return modElCls(this, 'remove', cls);
};
sizzle.fn.toggleClass = function (cls, cond) {
	return modElCls(this, 'toggle', cls, cond);
};
sizzle.fn.hasClass = function (cls) {
	if (!this || !this.length) return false;
	return this[0].classList.contains(cls);
};

sizzle.fn.toggle = function (cond) {
	return cond ? this.show() : this.hide();
};

sizzle.fn.hide = function () {
	this.forEach(el => {
		el.style.display = 'none';
	});
	return this;
};

sizzle.fn.show = function () {
	this.forEach(el => {
		el.style.display = 'block';
	});
	return this;
};

sizzle.fn.html = function (html) {
	if (!this || !this.length) return this;
	if (typeof html === 'undefined') return this[0].innerHTML;
	this.forEach(el => {
		el.innerHTML = html;
	});
	return this;
};

sizzle.fn.text = function (text) {
	if (!this || !this.length) return this;
	if (typeof text === 'undefined') return this[0].innerText;
	this.forEach(el => {
		el.innerText = text;
	});
	return this;
};

sizzle.fn.remove = function () {
	if (!this || !this.length) return this;
	this.forEach(el => el.remove());
	return this;
};

sizzle.fn.data = function (key) {
	if (!this || !this.length) return this;
	if (!this[0].dataset) return null;
	if (key) return this[0].dataset[key];
	return this[0].dataset;
};

sizzle.fn.attr = function (attr, value) {
	if (!this || !this.length) return false;
	if (typeof value === 'undefined') return this[0].getAttribute(attr);
	this.forEach(el => {
		el.setAttribute(attr, value);
	});
};

function animateElement(from, to, opts) {
	return el => new Promise(resolve => {
		const anim = el.animate([from, to], opts);
		anim.oncancel = resolve;
		anim.onfinish = resolve;
	});
}

sizzle.fn.animate = function (from, to, options = {}) {
	const dflt = { duration: 300, easing: 'ease-out', fill: 'forwards' };
	const opts = Object.assign({}, dflt, options);
	const all = this.map(animateElement(from, to, opts));
	return Promise.all(all);
};

// sizzle.fn.animate = function (from, to, options = {}) {
// 	const opts = Object.assign({}, {duration: 300, easing: 'ease-out'}, options);
// 	const fromTo = {};
// 	for (let key in from) fromTo[key] = [ to[key], from[key] ];
// 	return Velocity(this, fromTo, opts);
// };


module.exports = sizzle;

/***/ }),

/***/ "./client/core/util/util.js":
/*!**********************************!*\
  !*** ./client/core/util/util.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const type = obj => obj ? Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() : 'undefined';

const trim = (str, chars = '\\s') => ('' + str).replace(new RegExp(`(^${chars}+)|(${chars}+$)`, 'g'), '');
const ltrim = (str, chars = '\\s') => ('' + str).replace(new RegExp(`^${chars}+`), '');
const rtrim = (str, chars = '\\s') => ('' + str).replace(new RegExp(`${chars}+$`), '');

const rand = (max, min = 0) => Math.floor(Math.random() * (max - min + 1) + min);

const ucfirst = s => ('' + s).toLowerCase().replace(/\b([a-z])/gi, c => c.toUpperCase());

function isNumber(v) {
	if (typeof v === 'number') return true;
	if (typeof v !== 'string') return false;
	return (/^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/.test(v)
	);
}

function formatNumber(num) {
	num = Math.round(0 + num * 100) / 100;
	return num.toLocaleString('en-GB', { minimumFractionDigits: 2 });
}

function serialize(obj) {
	const keys = Object.keys(obj);
	if (!keys || !keys.length) return '';
	return '?' + keys.reduce((a, k) => {
		a.push(k + '=' + encodeURIComponent(obj[k]));
		return a;
	}, []).join('&');
}

function varToRealType(v) {
	if (isNumber(v)) {
		let originalv = v;
		v = parseFloat('' + v);
		if ('' + v !== originalv) v = originalv;
	} else if (v === 'true') v = true;else if (v === 'false') v = false;
	if (v === '') v = undefined;
	if (type(v) === 'array') v = v.map(val => varToRealType(val));
	return v;
}

function isObjectEmpty(x) {
	if (!x || typeof x !== 'object') return true;
	return Object.keys(x).length === 0;
}

function sanitize(v) {
	const div = document.createElement('DIV');
	div.innerHTML = v || '';
	return div.textContent || div.innerText || '';
}

function fuzzy(hay, s) {
	s = ('' + s).toLowerCase();
	hay = ('' + hay).toLowerCase();
	let n = -1;
	for (let l of s) if (!~(n = hay.indexOf(l, n + 1))) return false;
	return true;
}

function parseUrl(url) {
	let urlt;
	try {
		urlt = new URL(url);
	} catch (e) {
		urlt = null;
	}
	return urlt;
}

function prettyDate(time) {
	const date = new Date((time || '').replace(/-/g, '/').replace(/[TZ]/g, ' '));
	const diff = (new Date().getTime() - date.getTime()) / 1000;
	const day_diff = Math.floor(diff / 86400);
	if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31) return date.toLocaleString();
	return day_diff === 0 && (diff < 60 && 'just now' || diff < 120 && '1 minute ago' || diff < 3600 && Math.floor(diff / 60) + ' minutes ago' || diff < 7200 && '1 hour ago' || diff < 86400 && Math.floor(diff / 3600) + ' hours ago') || day_diff === 1 && 'Yesterday' || day_diff < 7 && day_diff + ' days ago' || day_diff < 31 && Math.ceil(day_diff / 7) + ' weeks ago';
}

module.exports = {
	fuzzy,
	ltrim,
	rtrim,
	trim,
	ucfirst,
	type,
	rand,
	isNumber,
	formatNumber,
	varToRealType,
	isObjectEmpty,
	sanitize,
	serialize,
	parseUrl,
	months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	prettyDate
};

/***/ }),

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const components = ['components/calendar', 'calendar', 'categories'];

components.forEach(n => {
	const c = __webpack_require__("./client sync recursive ^\\.\\/.*\\/$")(`./${n}/`).default;
	if (c.is) customElements.define(c.is, c);else c.init();
});

function init() {
	setTimeout(() => document.body.classList.remove('loading'), 300);
	console.log('ready!');
}

if (window.WebComponents.ready) init();else window.addEventListener('WebComponentsReady', init);

/***/ }),

/***/ "./node_modules/css-loader/index.js!./client/calendar/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader!./client/calendar/index.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#calendar {\n\tposition: absolute;\n\twidth: 260px;\n\tleft: 0;\n\ttop: 0;\n\tbottom: 0;\n\tborder: 1px solid red;\n\tfont-size: 12px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./client/categories/index.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader!./client/categories/index.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#categories {\n\tposition: absolute;\n\twidth: 260px;\n\tleft: 260px;\n\ttop: 0;\n\tbottom: 0;\n\tborder: 1px solid green;\n}\n\n", ""]);

// exports


/***/ }),

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

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50IHN5bmMgXlxcLlxcLy4qXFwvJCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY2FsZW5kYXIvaW5kZXguY3NzP2Q0NzEiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NhbGVuZGFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jYXRlZ29yaWVzL2luZGV4LmNzcz8xOGVmIiwid2VicGFjazovLy8uL2NsaWVudC9jYXRlZ29yaWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2NhbGVuZGFyL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9jYWxlbmRhci9pbmRleC5odG1sIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2NhbGVuZGFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL3VpLWRpYWxvZy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvdWktZGlhbG9nL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvdWktZGlhbG9nL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL3VpLW1zZ2JveC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy91aS10b2FzdC9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvdWktdG9hc3QvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy91aS10b2FzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29yZS9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvcmUvaGVscGVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb3JlL3V0aWwvYWpheC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29yZS91dGlsL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvcmUvdXRpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29yZS91dGlsL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvcmUvdXRpbC9sb25nLWNsaWNrLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb3JlL3V0aWwvcHVic3ViLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb3JlL3V0aWwvc2l6emxlLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb3JlL3V0aWwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NhbGVuZGFyL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY2F0ZWdvcmllcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJpbml0IiwiY29uc29sZSIsImxvZyIsIndlZWtkYXlzIiwibW9udGhzIiwicGVyZmVjdENhbGVuZGFyIiwiSFRNTEVsZW1lbnQiLCJjb25zdHJ1Y3RvciIsInRlbXBsYXRlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwidGVtcGxhdGVDb250ZW50IiwiY29udGVudCIsImlzIiwib2JzZXJ2ZWRBdHRyaWJ1dGVzIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwic2hhZG93Um9vdCIsImFwcGVuZENoaWxkIiwiY2xvbmVOb2RlIiwiZWwiLCJxdWVyeVNlbGVjdG9yIiwiZGF5Q2FyZCIsIm1vbnRoc0VsIiwid2Vla2RheXNFbCIsImRheXNFbCIsImZpbGxDYWxlbmRhciIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkNsaWNrIiwiYmluZCIsImdldEF0dHJpYnV0ZSIsImRhdGUiLCJEYXRlIiwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIiwibmFtZSIsIm9sZFZhbCIsIm5ld1ZhbCIsInVwRGF0ZSIsInZhbCIsImZvcm1hdCIsInNldEF0dHJpYnV0ZSIsImZ1bGxEYXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiZGF0ZU9iaiIsImRhdGVTdHIiLCJkIiwidG9JU09TdHJpbmciLCJzdWJzdHIiLCJyZWFsRGF0ZSIsInkiLCJnZXRGdWxsWWVhciIsIm0iLCJnZXRNb250aCIsImdldERhdGUiLCJtb250aCIsImZpcnN0RGF5T2ZNb250aCIsIlVUQyIsImdldERheSIsImRheXNJbk1vbnRoIiwid2Vla2RheSIsInJlbmRlciIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJjbGFzc05hbWUiLCJnZXREYXlDYXJkIiwiaW5uZXJUZXh0Iiwic2VsZWN0ZWREYXkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJzZWxlY3RlZE1vbnRoIiwicXVlcnlTZWxlY3RvckFsbCIsIm1hcCIsImpvaW4iLCJkYXlzIiwiQXJyYXkiLCJmaWxsIiwibiIsImkiLCJzZXREYXRlIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiZSIsInRhcmdldCIsImRheUVsIiwiY2xvc2VzdCIsImRheUVscyIsImNoaWxkcmVuIiwiZGF5IiwicHJvdG90eXBlIiwiaW5kZXhPZiIsImNhbGwiLCJwcmV2ZW50RGVmYXVsdCIsInVuZGVmaW5lZCIsIm1vbnRoRWwiLCJtb250aHNFbHMiLCJwYXJlbnROb2RlIiwidG9kYXkiLCJwcmV2WWVhciIsIm5leHRZZWFyIiwiRk9DVVNBQkxFX1NFTEVDVE9SUyIsIkFOSU1fQ0ZHIiwiZHVyYXRpb24iLCJlYXNpbmciLCJ1aURpYWxvZyIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm9uQ29udGVudENoYW5nZSIsImNvbnRlbnRFbCIsIm9ic2VydmUiLCJhdHRyaWJ1dGVzIiwiY2hpbGRMaXN0Iiwib25LZXlkb3duIiwib25CbHVyIiwiZGlzY29ubmVjdGVkQ2FsbGJhY2siLCJkaXNjb25uZWN0IiwiZG9PcGVuIiwiZG9DbG9zZSIsInRhYmJpbmdGb3J3YXJkIiwidGFyIiwiYmFja2Ryb3BDbGljayIsImRpYWxvZ0Nsb3NlQnRuIiwib3BlbiIsImdldEZvY3VzYWJsZUVscyIsImZvY3VzYWJsZUVsZW1lbnRzIiwiZWxlbXMiLCJmaXJzdCIsImxhc3QiLCJsZW5ndGgiLCJmb2N1c0VsIiwiZm9jdXMiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJrZXkiLCJzaGlmdEtleSIsImlzT3BlbiIsIkJvb2xlYW4iLCJ0cmlnZ2VyIiwiYWN0aXZlRWxlbWVudCIsInJlbW92ZUF0dHJpYnV0ZSIsImhhc0F0dHJpYnV0ZSIsInZpc2libGUiLCJhbmltYXRlIiwidHJhbnNmb3JtIiwib3BhY2l0eSIsIm9uZmluaXNoIiwib25PcGVuZWQiLCJvbkNsb3NlZCIsInVpTXNnQm94IiwiVE9BU1RfVElNRU9VVCIsInVpVG9hc3QiLCJzaG93IiwibXNnIiwidHlwZSIsImF1dG9jbG9zZSIsInRvYXN0IiwiVE9BU1RIIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0IiwicHJvcHMiLCJtYXJnaW5Ub3AiLCJhbmltIiwic2V0VGltZW91dCIsImhpZGUiLCJ0b2FzdHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiY2xpY2tlZCIsImtleXVwIiwiaW5mbyIsImVycm9yIiwid2FybmluZyIsIkVWRU5UIiwiaGVscGVyIiwiJCIsInV0aWwiLCJiYXNlVXJsIiwiYWpheCIsIm9wdGlvbnMiLCJ1cmwiLCJyZXNwIiwiZGF0YSIsInJlcSIsIlhNTEh0dHBSZXF1ZXN0IiwibWV0aG9kIiwidG9Mb3dlckNhc2UiLCJzZXJpYWxpemUiLCJKU09OIiwic3RyaW5naWZ5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvbmxvYWQiLCJzdGF0dXMiLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsInN0YXR1c1RleHQiLCJvbmVycm9yIiwic2V0UmVxdWVzdEhlYWRlciIsInNlbmQiLCJnZXQiLCJwb3N0IiwicHV0IiwiZGVsIiwia2V5QnJlYWtlciIsIm51bWJlck1hdGNoZXIiLCJfaXNOdW1iZXIiLCJ2YWx1ZSIsIm1hdGNoIiwiX2RlY29kZUVudGl0aWVzIiwic3RyIiwidGV4dENvbnRlbnQiLCJfZ2V0SW5wdXRzIiwiZm9ybSIsImlucHV0cyIsInNsaWNlIiwiRm9ybSIsImVsZW1lbnRzIiwic2V0IiwicGFyYW1zIiwiY2xlYXIiLCJzdXNwZW5kT2JzZXJ2ZSIsImFuaW1GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaW5wdXQiLCJ2IiwibmFtZXMiLCJyZXBsYWNlIiwic3BsaXQiLCJjaGVja2VkIiwidG9TdHJpbmciLCJ0YWdOYW1lIiwic2VsZWN0ZWRJbmRleCIsInVwZGF0ZSIsImNvbnZlcnQiLCJjdXJyZW50IiwicGFydHMiLCJsYXN0UGFydCIsImRpc2FibGVkIiwidHYiLCJwYXJzZUZsb2F0IiwiY21wIiwidG9GaXhlZCIsImlzQXJyYXkiLCJwdXNoIiwicmVzZXQiLCJvYnNlcnZlQ2IiLCJmaWVsZCIsImZuYW1lIiwib3YiLCJkYXRhc2V0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2IiLCJvYnNlcnZlU3RvcCIsImxvbmdDbGljayIsInNpenpsZSIsInB1YnN1YiIsImtleXMiLCJhbGwiLCJwcm9wIiwiQSIsIlgiLCJDIiwiRCIsIlYiLCJaIiwiRjEiLCJGMiIsIkY1IiwiVEFCIiwiRVNDIiwiQkNLU1BDIiwiQkFDS1NQQUNFIiwiRU5URVIiLCJTUEFDRSIsIlBHVVAiLCJQR0RPV04iLCJFTkQiLCJIT01FIiwiTEVGVCIsIlVQIiwiUklHSFQiLCJET1dOIiwiSU5TIiwiREVMIiwiTUlOVVMiLCJQTFVTIiwiRE9UIiwiU0xBU0giLCJNQUNNSU5VUyIsIk1BQ1BMVVMiLCJOVU1TVEFSIiwiTlVNTUlOVVMiLCJOVU1QTFVTIiwiTlVNRE9UIiwiTlVNU0xBU0giLCJkaWdpdHMiLCJhbGxvd2VkQ2hhcnMiLCJpc01hdGgiLCJrIiwia2V5Q29kZSIsImlzQ3V0Q29weVBhc3RlIiwiY3RybE9yQ21kIiwiY3RybEtleSIsIm1ldGFLZXkiLCJpc0FscGhhIiwiaXNEaWdpdCIsImlzQWxwaGFOdW1lcmljIiwiaXNOYXZDaGFyIiwiaXNOdW1iZXJGaWVsZCIsImlzRW50ZXIiLCJERUxBWSIsIkVWRU5UX05BTUUiLCJ0aW1lciIsImlzUmVhZHkiLCJjbGVhclRpbWVvdXQiLCJmaXJlRXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImNyZWF0ZUV2ZW50Iiwid2luZG93IiwiZXZlbnQiLCJldnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJFdmVudCIsIl9jYWNoZSIsInRvcGljIiwiYXJncyIsImZvckVhY2giLCJhcHBseSIsIm9uIiwiY2FsbGJhY2siLCJvZmYiLCJoYW5kbGUiLCJjYSIsImZuIiwic3BsaWNlIiwib2JqIiwiaXNOb2RlTGlzdCIsIm5vZGVzIiwidGVzdCIsIm5vZGVUeXBlIiwibWl4ZWQiLCJjb250ZXh0IiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiYm9keSIsImZpcnN0Q2hpbGQiLCJmcm9tIiwiZmluZCIsInNlbGVjdG9yIiwiZXEiLCJpZHgiLCJhcHBlbmRUbyIsInBhcmVudCIsImFwcGVuZCIsImNoaWxkIiwiZXZlbnROYW1lIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hdGNoZXMiLCJjbHMiLCJtb2RFbENscyIsImFjdGlvbiIsImNvbmQiLCJjIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUNsYXNzIiwiaGFzQ2xhc3MiLCJjb250YWlucyIsInRvZ2dsZSIsImRpc3BsYXkiLCJodG1sIiwidGV4dCIsImF0dHIiLCJhbmltYXRlRWxlbWVudCIsInRvIiwib3B0cyIsIm9uY2FuY2VsIiwiZGZsdCIsInRyaW0iLCJjaGFycyIsIlJlZ0V4cCIsImx0cmltIiwicnRyaW0iLCJyYW5kIiwibWF4IiwibWluIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidWNmaXJzdCIsInMiLCJ0b1VwcGVyQ2FzZSIsImlzTnVtYmVyIiwiZm9ybWF0TnVtYmVyIiwibnVtIiwicm91bmQiLCJ0b0xvY2FsZVN0cmluZyIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsInJlZHVjZSIsImEiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ2YXJUb1JlYWxUeXBlIiwib3JpZ2luYWx2IiwiaXNPYmplY3RFbXB0eSIsIngiLCJzYW5pdGl6ZSIsImRpdiIsImZ1enp5IiwiaGF5IiwibCIsInBhcnNlVXJsIiwidXJsdCIsIlVSTCIsInByZXR0eURhdGUiLCJ0aW1lIiwiZGlmZiIsImdldFRpbWUiLCJkYXlfZGlmZiIsImlzTmFOIiwiY2VpbCIsImNvbXBvbmVudHMiLCJkZWZhdWx0IiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJXZWJDb21wb25lbnRzIiwicmVhZHkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0WEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY2xpZW50L2luZGV4LmpzXCIpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2NhbGVuZGFyL1wiOiBcIi4vY2xpZW50L2NhbGVuZGFyL2luZGV4LmpzXCIsXG5cdFwiLi9jYXRlZ29yaWVzL1wiOiBcIi4vY2xpZW50L2NhdGVnb3JpZXMvaW5kZXguanNcIixcblx0XCIuL2NvbXBvbmVudHMvY2FsZW5kYXIvXCI6IFwiLi9jbGllbnQvY29tcG9uZW50cy9jYWxlbmRhci9pbmRleC5qc1wiLFxuXHRcIi4vY29tcG9uZW50cy91aS1kaWFsb2cvXCI6IFwiLi9jbGllbnQvY29tcG9uZW50cy91aS1kaWFsb2cvaW5kZXguanNcIixcblx0XCIuL2NvbXBvbmVudHMvdWktbXNnYm94L1wiOiBcIi4vY2xpZW50L2NvbXBvbmVudHMvdWktbXNnYm94L2luZGV4LmpzXCIsXG5cdFwiLi9jb21wb25lbnRzL3VpLXRvYXN0L1wiOiBcIi4vY2xpZW50L2NvbXBvbmVudHMvdWktdG9hc3QvaW5kZXguanNcIixcblx0XCIuL2NvcmUvXCI6IFwiLi9jbGllbnQvY29yZS9pbmRleC5qc1wiLFxuXHRcIi4vY29yZS91dGlsL1wiOiBcIi4vY2xpZW50L2NvcmUvdXRpbC9pbmRleC5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHRyZXR1cm4gbW9kdWxlO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIG1vZHVsZSBcIicgKyByZXEgKyAnXCIuJyk7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9jbGllbnQgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwvJFwiOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInJlcXVpcmUoJy4vaW5kZXguY3NzJyk7XG5cblxuZnVuY3Rpb24gaW5pdCAoKSB7XG5cdGNvbnNvbGUubG9nKCdjYWxlbmRhciBzaWRlYmFyIGlzIHJlYWR5IScpO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0aW5pdFxufTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInJlcXVpcmUoJy4vaW5kZXguY3NzJyk7XG5cblxuZnVuY3Rpb24gaW5pdCAoKSB7XG5cdGNvbnNvbGUubG9nKCdjYXRlZ29yaWVzIHNpZGViYXIgcmVhZHkhJyk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRpbml0XG59O1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2FsZW5kYXIge1xcblxcdC0tZmlyc3QtZGF5OiAxO1xcblxcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0Y3Vyc29yOiBkZWZhdWx0O1xcblxcdHdpZHRoOiBpbmhlcml0O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRmb250OiBub3JtYWwgMWVtIHNhbnMtc2VyaWY7XFxufVxcblxcbi5jYWxlbmRhciAuZGF5LWNhcmQge1xcblxcdHBhZGRpbmc6IDIwcHggMCAzMnB4O1xcblxcdG1hcmdpbi1ib3R0b206IDJweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZDogI2NlZTtcXG59XFxuXFxuLmNhbGVuZGFyIGgxLFxcbi5jYWxlbmRhciBoMiB7IG1hcmdpbjogMDsgbGluZS1oZWlnaHQ6IDE7IGZvbnQ6IGluaGVyaXQ7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG4uY2FsZW5kYXIgaDEgeyBmb250LXNpemU6IDQuNmVtOyB9XFxuXFxuLmNhbGVuZGFyIG5hdiB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdG1hcmdpbjogMDtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtZ2FwOiAwO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxufVxcblxcbi5jYWxlbmRhciBhIHtcXG5cXHRwYWRkaW5nOiA1cHggNXB4IDNweCAwO1xcblxcdHRleHQtYWxpZ246IHJpZ2h0O1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmNhbGVuZGFyIC5tb250aHMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0bWFyZ2luOiAtMjBweCAwIDA7XFxuXFx0cGFkZGluZzogMCA1cHg7XFxufVxcbi5jYWxlbmRhciAubW9udGhzIGEgeyBwYWRkaW5nOiAzcHggMDsgfVxcblxcbi5jYWxlbmRhciAud2Vla2RheXMgeyBib3JkZXItdG9wOiAxcHggc29saWQgIzg4ODsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ODg7IH1cXG4uY2FsZW5kYXIgLndlZWtkYXlzIGEgeyBiYWNrZ3JvdW5kOiAjY2NjOyB9XFxuXFxuLmNhbGVuZGFyIC5tb250aHMgYSxcXG4uY2FsZW5kYXIgLmRheXMgYSB7IGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5jYWxlbmRhciAubW9udGhzIGE6aG92ZXIsXFxuLmNhbGVuZGFyIC5kYXlzIGE6aG92ZXIgeyBjb2xvcjogIzliZjsgfVxcblxcbi5jYWxlbmRhciAuc2VsZWN0ZWQgeyBmb250LXdlaWdodDogYm9sZDsgY29sb3I6IGJsdWUgIWltcG9ydGFudDsgfVxcblxcbi5kYXlzLTI4IC5kYXktMjksIC5kYXlzLTI4IC5kYXktMzAsIC5kYXlzLTI4IC5kYXktMzEsXFxuLmRheXMtMjkgLmRheS0zMCwgLmRheXMtMjkgLmRheS0zMSxcXG4uZGF5cy0zMCAuZGF5LTMxIHsgZGlzcGxheTogbm9uZTsgfVxcblxcbi5jYWxlbmRhciAuZGF5LTEgeyBncmlkLWNvbHVtbi1zdGFydDogdmFyKC0tZmlyc3QtZGF5KTsgfVxcblxcbi55ZWFyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcblxcdGp1c3RpZnktY29udGVudDogZW5kO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDVweDtcXG5cXHRsZWZ0OiAwO1xcblxcdHJpZ2h0OiAwO1xcbn1cXG4ueWVhciAuZmlsbGVyIHsgZmxleDogMTsgfVxcblxcbi55ZWFyIGJ1dHRvbiB7IGJhY2tncm91bmQ6IG5vbmU7IGJvcmRlcjogbm9uZTsgY3Vyc29yOiBwb2ludGVyOyBib3JkZXItcmFkaXVzOiAzcHg7IH1cXG4ueWVhciBidXR0b246aG92ZXIgeyBjb2xvcjogYmx1ZTsgfVxcblxcbi55ZWFyIHNwYW4ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuXFx0cGFkZGluZy10b3A6IDNweDtcXG5cXHRtYXJnaW46IDAgM3B4O1xcbn1cXG5cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY2FsZW5kYXJcXFwiPjxkaXYgY2xhc3M9XFxcImRheS1jYXJkXFxcIj48L2Rpdj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCJ5ZWFyXFxcIj5cXG5cXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJ0b2RheVxcXCIgdGl0bGU9XFxcIkdvIHRvIHRvZGF5XFxcIj5Ub2RheTwvYnV0dG9uPlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcImZpbGxlclxcXCI+PC9kaXY+XFxuXFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwicHJldi15ZWFyXFxcIiB0aXRsZT1cXFwiUHJldmlvdXMgeWVhclxcXCI+4peAPC9idXR0b24+XFxuXFx0XFx0PHNwYW4+MjAxODwvc3Bhbj5cXG5cXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJuZXh0LXllYXJcXFwiIHRpdGxlPVxcXCJOZXh0IHllYXJcXFwiPuKWtjwvYnV0dG9uPlxcblxcdDwvZGl2PlxcblxcdDxuYXYgY2xhc3M9XFxcIm1vbnRoc1xcXCI+PC9uYXY+PG5hdiBjbGFzcz1cXFwid2Vla2RheXNcXFwiPjwvbmF2PjxuYXYgY2xhc3M9XFxcImRheXNcXFwiPjwvbmF2PlxcbjwvZGl2PlwiOyIsImltcG9ydCBzdHlsZSBmcm9tICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC5odG1sJztcblxuY29uc3Qgd2Vla2RheXMgPSBbJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknLCAnU3VuZGF5J107XG5jb25zdCBtb250aHMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGVyZmVjdENhbGVuZGFyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXG5cdGNvbnN0cnVjdG9yICgpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMudGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXHRcdHRoaXMudGVtcGxhdGUuaW5uZXJIVE1MID0gYDxzdHlsZT4ke3N0eWxlfTwvc3R5bGU+JHt0ZW1wbGF0ZX1gO1xuXHRcdHRoaXMudGVtcGxhdGVDb250ZW50ID0gdGhpcy50ZW1wbGF0ZS5jb250ZW50O1xuXHR9XG5cblx0c3RhdGljIGdldCBpcyAoKSB7IHJldHVybiAncGVyZmVjdC1jYWxlbmRhcic7IH1cblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMgKCkgeyByZXR1cm4gWydkYXRlJ107IH1cblxuXHRjb25uZWN0ZWRDYWxsYmFjayAoKSB7XG5cdFx0dGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cdFx0dGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHRoaXMudGVtcGxhdGVDb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG5cdFx0dGhpcy5lbCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcuY2FsZW5kYXInKTtcblx0XHR0aGlzLmRheUNhcmQgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy5kYXktY2FyZCcpO1xuXG5cdFx0dGhpcy5tb250aHNFbCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignLm1vbnRocycpO1xuXHRcdHRoaXMud2Vla2RheXNFbCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignLndlZWtkYXlzJyk7XG5cdFx0dGhpcy5kYXlzRWwgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy5kYXlzJyk7XG5cdFx0dGhpcy5maWxsQ2FsZW5kYXIoKTtcblxuXHRcdHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSk7XG5cdFx0aWYgKCF0aGlzLmdldEF0dHJpYnV0ZSgnZGF0ZScpKSB0aGlzLmRhdGUgPSBuZXcgRGF0ZSgpO1xuXHR9XG5cblx0YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbCwgbmV3VmFsKSB7XG5cdFx0aWYgKG5hbWUgPT09ICdkYXRlJykgdGhpcy51cERhdGUobmV3VmFsKTtcblx0fVxuXG5cdHNldCBkYXRlICh2YWwpIHtcblx0XHRpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycpIHZhbCA9IHRoaXMuZm9ybWF0KHZhbCk7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2RhdGUnLCB2YWwpO1xuXHR9XG5cblx0Z2V0IGRhdGUgKCkgeyByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGUnKTsgfVxuXG5cdGdldCBmdWxsRGF0ZSAoKSB7XG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMuZGF0ZSk7XG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGF0ZU9iaiwgeyBkYXRlLCBkYXRlU3RyOiB0aGlzLmRhdGUgfSk7XG5cdH1cblxuXHQvLyB5eXl5LW1tLWRkXG5cdGZvcm1hdCAoZCkgeyByZXR1cm4gZC50b0lTT1N0cmluZygpLnN1YnN0cigwLCAxMCk7IH1cblxuXHR1cERhdGUgKGRhdGUpIHtcblx0XHRkYXRlID0gZGF0ZSB8fCB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0ZScpO1xuXHRcdGlmICghZGF0ZSB8fCAhdGhpcy5lbCkgcmV0dXJuO1xuXHRcdHRoaXMucmVhbERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcblxuXHRcdGNvbnN0IHkgPSB0aGlzLnJlYWxEYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0Y29uc3QgbSA9IHRoaXMucmVhbERhdGUuZ2V0TW9udGgoKTtcblx0XHRjb25zdCBkID0gdGhpcy5yZWFsRGF0ZS5nZXREYXRlKCk7XG5cdFx0Y29uc3QgbW9udGggPSBtb250aHNbbV07XG5cdFx0Y29uc3QgZmlyc3REYXlPZk1vbnRoID0gbmV3IERhdGUoRGF0ZS5VVEMoeSwgbSwgMSkpLmdldERheSgpIHx8IDc7XHQvLyBtYWtlIFN1biA3IG5vdCAwXG5cdFx0Y29uc3QgZGF5c0luTW9udGggPSBuZXcgRGF0ZShEYXRlLlVUQyh5LCBtICsgMSwgMCkpLmdldERhdGUoKTtcblx0XHRjb25zdCB3ZWVrZGF5ID0gd2Vla2RheXNbKHRoaXMucmVhbERhdGUuZ2V0RGF5KCkgfHwgNykgLSAxXTtcblx0XHR0aGlzLmRhdGVPYmogPSB7IHksIG0sIGQsIG1vbnRoLCBmaXJzdERheU9mTW9udGgsIGRheXNJbk1vbnRoLCB3ZWVrZGF5IH07XG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0fVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0dGhpcy5lbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1maXJzdC1kYXknLCB0aGlzLmRhdGVPYmouZmlyc3REYXlPZk1vbnRoKTtcblx0XHR0aGlzLmVsLmNsYXNzTmFtZSA9ICdjYWxlbmRhciBkYXlzLScgKyB0aGlzLmRhdGVPYmouZGF5c0luTW9udGg7XG5cdFx0dGhpcy5kYXlDYXJkLmlubmVySFRNTCA9IHRoaXMuZ2V0RGF5Q2FyZCgpO1xuXHRcdHRoaXMuZWwucXVlcnlTZWxlY3RvcignLnllYXIgc3BhbicpLmlubmVyVGV4dCA9IHRoaXMuZGF0ZU9iai55O1xuXG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWREYXkpIHRoaXMuc2VsZWN0ZWREYXkuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcblx0XHR0aGlzLnNlbGVjdGVkRGF5ID0gdGhpcy5kYXlzRWwucXVlcnlTZWxlY3RvcignLmRheS0nICsgdGhpcy5kYXRlT2JqLmQpO1xuXHRcdHRoaXMuc2VsZWN0ZWREYXkuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcblxuXHRcdGlmICh0aGlzLnNlbGVjdGVkTW9udGgpIHRoaXMuc2VsZWN0ZWRNb250aC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuXHRcdHRoaXMuc2VsZWN0ZWRNb250aCA9IHRoaXMubW9udGhzRWwucXVlcnlTZWxlY3RvckFsbCgnYScpW3RoaXMuZGF0ZU9iai5tXTtcblx0XHR0aGlzLnNlbGVjdGVkTW9udGguY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcblx0fVxuXG5cdGdldERheUNhcmQgKCkgeyByZXR1cm4gYDxoMT4ke3RoaXMuZGF0ZU9iai5kfTwvaDE+PGgyPiR7dGhpcy5kYXRlT2JqLndlZWtkYXl9PC9oMj5gOyB9XG5cblx0ZmlsbENhbGVuZGFyICgpIHtcblx0XHR0aGlzLm1vbnRoc0VsLmlubmVySFRNTCA9IG1vbnRocy5tYXAobSA9PiBgPGEgaHJlZj1cIiMke219XCI+JHttLnN1YnN0cigwLCAzKX08L2E+YCkuam9pbignJyk7XG5cdFx0dGhpcy53ZWVrZGF5c0VsLmlubmVySFRNTCA9IHdlZWtkYXlzLm1hcChtID0+IGA8YT4ke20uc3Vic3RyKDAsIDMpfTwvYT5gKS5qb2luKCcnKTtcblx0XHRjb25zdCBkYXlzID0gQXJyYXkoMzEpLmZpbGwoMCkubWFwKChuLCBpKSA9PiBpICsgMSkubWFwKGkgPT4gYDxhIGhyZWY9XCIjJHtpfVwiIGNsYXNzPVwiZGF5LSR7aX1cIj4ke2l9PC9hPmApO1xuXHRcdHRoaXMuZGF5c0VsLmlubmVySFRNTCA9IGRheXMuam9pbignJyk7XG5cdH1cblxuXHRzZXREYXRlICh5ID0gdGhpcy5kYXRlT2JqLnksIG0gPSB0aGlzLmRhdGVPYmoubSwgZCA9IHRoaXMuZGF0ZU9iai5kKSB7XG5cdFx0aWYgKHkgaW5zdGFuY2VvZiBEYXRlKSByZXR1cm4gdGhpcy5zZXREYXRlKHkuZ2V0RnVsbFllYXIoKSwgeS5nZXRNb250aCgpLCB5LmdldERhdGUoKSk7XG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKHksIG0sIGQpKTtcblx0XHRpZiAoZGF0ZSAhPT0gdGhpcy5yZWFsRGF0ZSkge1xuXHRcdFx0dGhpcy5kYXRlID0gZGF0ZTtcblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZScsIHsgZGV0YWlsOiB0aGlzLmZ1bGxEYXRlIH0pKTtcblx0XHR9XG5cdH1cblxuXHRvbkNsaWNrIChlKSB7XG5cdFx0Y29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG5cdFx0Y29uc3QgZGF5RWwgPSB0YXJnZXQuY2xvc2VzdCgnLmRheXMgYScpO1xuXHRcdGlmIChkYXlFbCkge1xuXHRcdFx0Y29uc3QgZGF5RWxzID0gdGhpcy5kYXlzRWwuY2hpbGRyZW47XG5cdFx0XHRjb25zdCBkYXkgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGRheUVscywgZGF5RWwpICsgMTtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHJldHVybiB0aGlzLnNldERhdGUodW5kZWZpbmVkLCB1bmRlZmluZWQsIGRheSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbW9udGhFbCA9IHRhcmdldC5jbG9zZXN0KCcubW9udGhzIGEnKTtcblx0XHRpZiAobW9udGhFbCkge1xuXHRcdFx0Y29uc3QgbW9udGhzRWxzID0gbW9udGhFbC5wYXJlbnROb2RlLmNoaWxkcmVuO1xuXHRcdFx0Y29uc3QgbW9udGggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKG1vbnRoc0VscywgbW9udGhFbCk7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRyZXR1cm4gdGhpcy5zZXREYXRlKHVuZGVmaW5lZCwgbW9udGgpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHRvZGF5ID0gdGFyZ2V0LmNsb3Nlc3QoJy50b2RheScpO1xuXHRcdGlmICh0b2RheSkgcmV0dXJuIHRoaXMuc2V0RGF0ZShuZXcgRGF0ZSgpKTtcblxuXHRcdGNvbnN0IHByZXZZZWFyID0gdGFyZ2V0LmNsb3Nlc3QoJy5wcmV2LXllYXInKTtcblx0XHRpZiAocHJldlllYXIpIHJldHVybiB0aGlzLnNldERhdGUodGhpcy5kYXRlT2JqLnkgLSAxKTtcblxuXHRcdGNvbnN0IG5leHRZZWFyID0gdGFyZ2V0LmNsb3Nlc3QoJy5uZXh0LXllYXInKTtcblx0XHRpZiAobmV4dFllYXIpIHJldHVybiB0aGlzLnNldERhdGUodGhpcy5kYXRlT2JqLnkgKyAxKTtcblx0fVxuXG59XG5cbi8vIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgncGVyZmVjdC1jYWxlbmRhcicsIHBlcmZlY3RDYWxlbmRhcik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi51aS1kaWFsb2cge1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHRsZWZ0OiAwO1xcblxcdHJpZ2h0OiAwO1xcblxcdGJvdHRvbTogMDtcXG5cXHR0b3A6IDA7XFxuXFx0cGFkZGluZzogNTBweDtcXG5cXHR6LWluZGV4OiA5OTk7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdG1heC1oZWlnaHQ6IDEwMHZ3O1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0b3BhY2l0eTogMDtcXG59XFxuXFxuLnVpLWRpYWxvZy1iYWNrZHJvcCB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGxlZnQ6IDA7XFxuXFx0dG9wOiAwO1xcblxcdG1pbi13aWR0aDogMTAwJTtcXG5cXHRtaW4taGVpZ2h0OiAxMDAlO1xcblxcdGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjMpO1xcbn1cXG5cXG4udWktZGlhbG9nLWNvbnRlbnQge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR6LWluZGV4OiA5O1xcblxcdHdpZHRoOiA0MDBweDtcXG5cXHRtaW4taGVpZ2h0OiAxMDBweDtcXG5cXHRtYXgtaGVpZ2h0OiAzMDBweDtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdG1hcmdpbi10b3A6IC0xMCU7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0Ym9yZGVyLXJhZGl1czogM3B4O1xcblxcdGJveC1zaGFkb3c6IDAgM3B4IDVweCAxcHggcmdiYSgwLDAsMCwwLjQpO1xcbn1cXG5cXG4udWktZGlhbG9nLWNvbnRlbnQtaW5uZXIge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4udWktZGlhbG9nLnZpc2libGUgeyBkaXNwbGF5OiBmbGV4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInVpLWRpYWxvZ1xcXCI+XFxuXFx0PGRpdiBjbGFzcz1cXFwidWktZGlhbG9nLWJhY2tkcm9wXFxcIiB0YWJpbmRleD1cXFwiMFxcXCI+PC9kaXY+XFxuXFx0PGRpdiBjbGFzcz1cXFwidWktZGlhbG9nLWNvbnRlbnRcXFwiIHRhYmluZGV4PVxcXCIwXFxcIj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ1aS1kaWFsb2ctY29udGVudC1pbm5lclxcXCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxcblxcdDwvZGl2PlxcblxcdDxkaXYgY2xhc3M9XFxcInVpLWRpYWxvZy1mb2N1cy1ndWFyZFxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiPjwvZGl2PlxcbjwvZGl2PlxcblwiOyIsImltcG9ydCBzdHlsZSBmcm9tICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC5odG1sJztcblxuXG5jb25zdCBGT0NVU0FCTEVfU0VMRUNUT1JTID0gYFxuXHRhW2hyZWZdOm5vdChbdGFiaW5kZXg9XCItMVwiXSksXG5cdGlucHV0Om5vdChbZGlzYWJsZWRdKTpub3QoW3RhYmluZGV4PVwiLTFcIl0pLFxuXHRzZWxlY3Q6bm90KFtkaXNhYmxlZF0pOm5vdChbdGFiaW5kZXg9XCItMVwiXSksXG5cdHRleHRhcmVhOm5vdChbZGlzYWJsZWRdKTpub3QoW3RhYmluZGV4PVwiLTFcIl0pLFxuXHRidXR0b246bm90KFtkaXNhYmxlZF0pOm5vdChbdGFiaW5kZXg9XCItMVwiXSksXG5cdGlmcmFtZTpub3QoW3RhYmluZGV4PVwiLTFcIl0pLFxuXHRbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSksXG5cdFtjb250ZW50RWRpdGFibGVdOm5vdChbdGFiaW5kZXg9XCItMVwiXSlcbmA7XG5cblxuY29uc3QgQU5JTV9DRkcgPSB7ZHVyYXRpb246IDMwMCwgZWFzaW5nOiAnZWFzZS1vdXQnLCBmaWxsOiAnZm9yd2FyZHMnfTtcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB1aURpYWxvZyBleHRlbmRzIEhUTUxFbGVtZW50IHtcblxuXHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMudGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXHRcdHRoaXMudGVtcGxhdGUuaW5uZXJIVE1MID0gYDxzdHlsZT4ke3N0eWxlfTwvc3R5bGU+JHt0ZW1wbGF0ZX1gO1xuXHRcdHRoaXMudGVtcGxhdGVDb250ZW50ID0gdGhpcy50ZW1wbGF0ZS5jb250ZW50O1xuXG5cdFx0dGhpcy5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMub25Db250ZW50Q2hhbmdlLmJpbmQodGhpcykpO1xuXHR9XG5cblx0c3RhdGljIGdldCBpcyAoKSB7IHJldHVybiAndWktZGlhbG9nJzsgfVxuXG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzICgpIHtcblx0XHRyZXR1cm4gWydvcGVuJ107XG5cdH1cblxuXHRjb25uZWN0ZWRDYWxsYmFjayAoKSB7XG5cdFx0dGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cdFx0dGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHRoaXMudGVtcGxhdGVDb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG5cdFx0dGhpcy5lbCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcudWktZGlhbG9nJyk7XG5cdFx0dGhpcy5jb250ZW50RWwgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy51aS1kaWFsb2ctY29udGVudCcpO1xuXG5cdFx0dGhpcy5vYnNlcnZlci5vYnNlcnZlKHRoaXMsIHsgYXR0cmlidXRlczogZmFsc2UsIGNoaWxkTGlzdDogdHJ1ZSB9KTtcblx0XHR0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlkb3duLmJpbmQodGhpcyksIHRydWUpO1xuXHRcdHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMub25CbHVyLmJpbmQodGhpcyksIHRydWUpO1xuXHRcdHRoaXMub25Db250ZW50Q2hhbmdlKCk7XG5cdH1cblxuXHQvLyBlbCBtb3ZlZCB0byBhIG5ldyBkb2N1bWVudFxuXHQvLyBhZG9wdGVkQ2FsbGJhY2soKSB7fVxuXG5cdC8vIGVsIHJlbW92ZWQgZnJvbSBET01cblx0ZGlzY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xuXHRcdHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHRcdGNvbnNvbGUubG9nKCdkaXNjb25uZWN0ZWRDYWxsYmFjaycpO1xuXHR9XG5cblxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsLCBuZXdWYWwpIHtcblx0XHRpZiAobmFtZSA9PT0gJ29wZW4nKSB7XG5cdFx0XHRpZiAobmV3VmFsICE9PSBudWxsKSB0aGlzLmRvT3BlbigpO1xuXHRcdFx0ZWxzZSB0aGlzLmRvQ2xvc2UoKTtcblxuXHRcdH1cblx0fVxuXG5cblx0b25DbGljayAoZSkge1xuXHRcdHRoaXMudGFiYmluZ0ZvcndhcmQgPSBudWxsO1xuXHRcdGNvbnN0IHRhciA9IGUudGFyZ2V0O1xuXHRcdGNvbnN0IGJhY2tkcm9wQ2xpY2sgPSB0YXIuY2xvc2VzdCgnLnVpLWRpYWxvZy1iYWNrZHJvcCcpO1xuXHRcdGNvbnN0IGRpYWxvZ0Nsb3NlQnRuID0gdGFyLmdldEF0dHJpYnV0ZSgnY2xvc2UtZGlhbG9nJykgIT09IG51bGw7XG5cblx0XHRpZiAoYmFja2Ryb3BDbGljayB8fCBkaWFsb2dDbG9zZUJ0bikgdGhpcy5vcGVuID0gZmFsc2U7XG5cdH1cblxuXG5cdGdldEZvY3VzYWJsZUVscyAoKSB7XG5cdFx0aWYgKCF0aGlzLmZvY3VzYWJsZUVsZW1lbnRzKSB7XG5cdFx0XHRsZXQgZWxlbXMgPSB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoRk9DVVNBQkxFX1NFTEVDVE9SUyk7XG5cdFx0XHRsZXQgZmlyc3QgPSB0aGlzLmVsLCBsYXN0ID0gdGhpcy5lbDtcblx0XHRcdGlmIChlbGVtcy5sZW5ndGgpIHtcblx0XHRcdFx0Zmlyc3QgPSBlbGVtc1swXTtcblx0XHRcdFx0bGFzdCA9IGVsZW1zW2VsZW1zLmxlbmd0aCAtIDFdO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGZpcnN0ID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcudWktZGlhbG9nLWJhY2tkcm9wJyk7XG5cdFx0XHRcdGxhc3QgPSB0aGlzLmNvbnRlbnRFbDtcblx0XHRcdH1cblx0XHRcdHRoaXMuZm9jdXNhYmxlRWxlbWVudHMgPSB7Zmlyc3QsIGxhc3R9O1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5mb2N1c2FibGVFbGVtZW50cztcblx0fVxuXG5cblx0b25CbHVyIChlKSB7XG5cdFx0aWYgKHRoaXMudGFiYmluZ0ZvcndhcmQgPT09IG51bGwpIHJldHVybjtcblxuXHRcdGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuXHRcdGNvbnN0IHtmaXJzdCwgbGFzdH0gPSB0aGlzLmdldEZvY3VzYWJsZUVscygpO1xuXHRcdGxldCBmb2N1c0VsID0gbnVsbDtcblxuXHRcdGlmICh0aGlzLnRhYmJpbmdGb3J3YXJkICYmIHRhcmdldCA9PT0gbGFzdCkgZm9jdXNFbCA9IGZpcnN0O1xuXHRcdGVsc2UgaWYgKCF0aGlzLnRhYmJpbmdGb3J3YXJkICYmIHRhcmdldCA9PT0gZmlyc3QpIGZvY3VzRWwgPSBsYXN0O1xuXG5cdFx0aWYgKGZvY3VzRWwpIHtcblx0XHRcdHRoaXMudGFiYmluZ0ZvcndhcmQgPSBudWxsO1xuXHRcdFx0Zm9jdXNFbC5mb2N1cygpO1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHR9XG5cdH1cblxuXG5cdG9uS2V5ZG93biAoZSkge1xuXHRcdGlmIChlLmtleSA9PT0gJ1RhYicpIHRoaXMudGFiYmluZ0ZvcndhcmQgPSAhZS5zaGlmdEtleTtcblx0XHRlbHNlIHtcblx0XHRcdHRoaXMudGFiYmluZ0ZvcndhcmQgPSBudWxsO1xuXHRcdFx0aWYgKGUua2V5ID09PSAnRXNjYXBlJykgdGhpcy5vcGVuID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblxuXHRvbkNvbnRlbnRDaGFuZ2UgKCkge1xuXHRcdHRoaXMuZm9jdXNhYmxlRWxlbWVudHMgPSBudWxsO1xuXHR9XG5cblxuXHRzZXQgb3BlbiAodmFsKSB7XG5cdFx0Y29uc3QgaXNPcGVuID0gQm9vbGVhbih2YWwpO1xuXHRcdGlmIChpc09wZW4pIHtcblx0XHRcdGlmICghdGhpcy50cmlnZ2VyICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHRoaXMudHJpZ2dlciA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnb3BlbicsICcnKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnb3BlbicpO1xuXHRcdFx0dGhpcy50cmlnZ2VyID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRnZXQgb3BlbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdvcGVuJyk7XG5cdH1cblxuXG5cblx0ZG9PcGVuICh0cmlnZ2VyKSB7XG5cdFx0aWYgKHRoaXMudmlzaWJsZSkgcmV0dXJuO1xuXHRcdGlmICh0cmlnZ2VyKSB0aGlzLnRyaWdnZXIgPSB0cmlnZ2VyO1xuXHRcdHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuXHRcdHRoaXMudmlzaWJsZSA9IHRydWU7XG5cdFx0dGhpcy5nZXRGb2N1c2FibGVFbHMoKS5maXJzdC5mb2N1cygpO1xuXHRcdHRoaXMuY29udGVudEVsLmFuaW1hdGUoW3t0cmFuc2Zvcm06ICdzY2FsZSguOSknfSwge3RyYW5zZm9ybTogJ3NjYWxlKDEpJ31dLCBBTklNX0NGRyk7XG5cdFx0dGhpcy5lbFxuXHRcdFx0LmFuaW1hdGUoW3sgb3BhY2l0eTogMCB9LCB7b3BhY2l0eTogMX1dLCBBTklNX0NGRylcblx0XHRcdC5vbmZpbmlzaCA9IHRoaXMub25PcGVuZWQuYmluZCh0aGlzKTtcblx0fVxuXG5cdGRvQ2xvc2UgKCkge1xuXHRcdGlmICghdGhpcy52aXNpYmxlKSByZXR1cm47XG5cdFx0aWYgKHRoaXMudHJpZ2dlcikgdGhpcy50cmlnZ2VyLmZvY3VzKCk7XG5cdFx0dGhpcy5jb250ZW50RWwuYW5pbWF0ZShbe3RyYW5zZm9ybTogJ3NjYWxlKDEpJ30sIHt0cmFuc2Zvcm06ICdzY2FsZSguOSknfV0sIEFOSU1fQ0ZHKTtcblx0XHR0aGlzLmVsXG5cdFx0XHQuYW5pbWF0ZShbeyBvcGFjaXR5OiAxIH0sIHtvcGFjaXR5OiAwfV0sIEFOSU1fQ0ZHKVxuXHRcdFx0Lm9uZmluaXNoID0gdGhpcy5vbkNsb3NlZC5iaW5kKHRoaXMpO1xuXHR9XG5cblxuXHRvbk9wZW5lZCAoKSB7XG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnb3BlbicsIHt9KSk7XG5cdH1cblxuXHRvbkNsb3NlZCAoKSB7XG5cdFx0dGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG5cdFx0dGhpcy52aXNpYmxlID0gZmFsc2U7XG5cdFx0aWYgKHRoaXMudHJpZ2dlcikgdGhpcy50cmlnZ2VyLmZvY3VzKCk7XG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2xvc2UnLCB7fSkpO1xuXHR9XG5cblxufVxuIiwiaW1wb3J0IHVpRGlhbG9nIGZyb20gJy4uL3VpLWRpYWxvZy8nO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdWlNc2dCb3ggZXh0ZW5kcyB1aURpYWxvZyB7XG5cblx0Y29uc3RydWN0b3IgKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0fVxuXG5cdHN0YXRpYyBnZXQgaXMgKCkgeyByZXR1cm4gJ3VpLW1lc3NhZ2Vib3gnOyB9XG5cblxuXHRvbkNsb3NlZCAoKSB7XG5cdFx0c3VwZXIub25DbG9zZWQoKTtcblx0XHR0aGlzLnJlbW92ZSgpO1xuXHR9XG5cbn1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnVpLXRvYXN0LXdyYXBwZXIge1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG5cXHRyaWdodDogMDtcXG5cXHR6LWluZGV4OiA5OTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0cGFkZGluZy10b3A6IDEwcHg7XFxuXFx0aGVpZ2h0OiAwO1xcbn1cXG5cXG5cXG4udWktdG9hc3Qge1xcblxcdG1pbi13aWR0aDogMjAwcHg7XFxuXFx0bWF4LXdpZHRoOiA1MCU7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0bWFyZ2luOiA1cHggYXV0bztcXG5cXHRwYWRkaW5nOiAyMHB4IDMwcHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuXFx0Y29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsIDAuOCk7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDFweCAwIHJnYmEoMCwwLDAsIDAuNSk7XFxuXFx0b3BhY2l0eTogMTtcXG5cXG59XFxuLnVpLXRvYXN0OmZvY3VzIHsgYm94LXNoYWRvdzogMCAwIDVweCAycHggcmdiYSgwLDAsMCwwLjUpOyBvdXRsaW5lOiBub25lOyB9XFxuXFxuLnVpLXRvYXN0IGVtIHtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcblxcdGNvbG9yOiAjZmZmO1xcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuXFxuLnVpLXRvYXN0LWluZm8geyBiYWNrZ3JvdW5kOiByZ2JhKDAsIDEwMCwgNTAsIDAuOCk7IH1cXG4udWktdG9hc3Qtd2FybmluZyB7IGJhY2tncm91bmQ6IHJnYmEoMTIwLCA4NiwgMCwgMC44KTsgfVxcbi51aS10b2FzdC1lcnJvciB7IGJhY2tncm91bmQ6IHJnYmEoMjAxLCA1OCwgMzEsIDAuOCk7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwidWktdG9hc3Qtd3JhcHBlclxcXCI+PC9kaXY+XFxuXCI7IiwiaW1wb3J0IHN0eWxlIGZyb20gJy4vaW5kZXguY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4Lmh0bWwnO1xuXG5cbmNvbnN0IEFOSU1fQ0ZHID0ge2R1cmF0aW9uOiAzMDAsIGVhc2luZzogJ2Vhc2Utb3V0JywgZmlsbDogJ2ZvcndhcmRzJ307XG5jb25zdCBUT0FTVF9USU1FT1VUID0gNTAwMDtcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdWlUb2FzdCBleHRlbmRzIEhUTUxFbGVtZW50IHtcblxuXHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMudGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXHRcdHRoaXMudGVtcGxhdGUuaW5uZXJIVE1MID0gYDxzdHlsZT4ke3N0eWxlfTwvc3R5bGU+JHt0ZW1wbGF0ZX1gO1xuXHRcdHRoaXMudGVtcGxhdGVDb250ZW50ID0gdGhpcy50ZW1wbGF0ZS5jb250ZW50O1xuXHR9XG5cblx0c3RhdGljIGdldCBpcyAoKSB7IHJldHVybiAndWktdG9hc3QnOyB9XG5cblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMgKCkge31cblxuXHRjb25uZWN0ZWRDYWxsYmFjayAoKSB7XG5cdFx0dGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cdFx0dGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHRoaXMudGVtcGxhdGVDb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG5cdFx0dGhpcy5lbCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcudWktdG9hc3Qtd3JhcHBlcicpO1xuXHRcdHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleWRvd24uYmluZCh0aGlzKSwgdHJ1ZSk7XG5cdH1cblxuXG5cdHNob3cgKHsgbXNnID0gJycsIHR5cGUgPSAnaW5mbycsIGF1dG9jbG9zZSA9IHRydWUgfSkge1xuXHRcdGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB0aGlzLnRyaWdnZXIgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXHRcdGNvbnN0IHRvYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dG9hc3Quc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDApO1xuXHRcdHRvYXN0LmNsYXNzTmFtZSA9IGB1aS10b2FzdCB1aS10b2FzdC0ke3R5cGV9YDtcblx0XHR0b2FzdC5pbm5lckhUTUwgPSBtc2c7XG5cdFx0dGhpcy5lbC5hcHBlbmRDaGlsZCh0b2FzdCk7XG5cdFx0dG9hc3QuZm9jdXMoKTtcblxuXHRcdGNvbnN0IFRPQVNUSCA9IHRvYXN0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblx0XHRjb25zdCBwcm9wcyA9IFtcblx0XHRcdHtvcGFjaXR5OiAwLCBtYXJnaW5Ub3A6IGAtJHtUT0FTVEh9cHhgLCB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJ30sXG5cdFx0XHR7b3BhY2l0eTogMSwgbWFyZ2luVG9wOiAwLCB0cmFuc2Zvcm06ICdzY2FsZSgxKSd9XG5cdFx0XTtcblx0XHRjb25zdCBhbmltID0gdG9hc3QuYW5pbWF0ZShwcm9wcywgQU5JTV9DRkcpO1xuXHRcdGlmIChhdXRvY2xvc2UpIHtcblx0XHRcdGFuaW0ub25maW5pc2ggPSAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaGlkZSh0b2FzdCksIFRPQVNUX1RJTUVPVVQpO1xuXHRcdH1cblx0fVxuXG5cblx0aGlkZSAodG9hc3QpIHtcblx0XHRjb25zdCBUT0FTVEggPSB0b2FzdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cdFx0dG9hc3QuY2xhc3NMaXN0LmFkZCgndWktdG9hc3QtaGlkaW5nJyk7XG5cdFx0Y29uc3QgcHJvcHMgPSBbXG5cdFx0XHR7b3BhY2l0eTogMSwgbWFyZ2luVG9wOiAwLCB0cmFuc2Zvcm06ICdzY2FsZSgxKSd9LFxuXHRcdFx0e29wYWNpdHk6IDAsIG1hcmdpblRvcDogYC0ke1RPQVNUSH1weGAsIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknfVxuXHRcdF07XG5cdFx0Y29uc3QgYW5pbSA9IHRvYXN0LmFuaW1hdGUocHJvcHMsIEFOSU1fQ0ZHKTtcblx0XHRhbmltLm9uZmluaXNoID0gKCkgPT4gdG9hc3QucmVtb3ZlKCk7XG5cblx0XHRjb25zdCB0b2FzdHMgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy51aS10b2FzdDpub3QoLnVpLXRvYXN0LWhpZGluZyknKTtcblx0XHRpZiAodG9hc3RzLmxlbmd0aCkgdG9hc3RzW3RvYXN0cy5sZW5ndGggLSAxXS5mb2N1cygpO1xuXHRcdGVsc2UgaWYgKHRoaXMudHJpZ2dlcikgdGhpcy50cmlnZ2VyLmZvY3VzKCk7XG5cdH1cblxuXG5cdG9uQ2xpY2sgKGUpIHtcblx0XHRjb25zdCB0b2FzdCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy51aS10b2FzdCcpO1xuXHRcdGlmICh0b2FzdCkgdGhpcy5oaWRlKHRvYXN0KTtcblx0fVxuXG5cblx0b25LZXlkb3duIChlKSB7XG5cdFx0aWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuXHRcdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRoaXMub25DbGljayhlKTtcblx0XHR9XG5cdH1cblxuXG5cblxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cblx0ZG9jdW1lbnQ6IHtcblx0XHRjbGlja2VkOiAnZG9jdW1lbnQtY2xpY2tlZCcsXG5cdFx0a2V5dXA6ICdkb2N1bWVudC1rZXl1cCdcblx0fSxcblxuXHR0b2FzdDoge1xuXHRcdGluZm86ICd0b2FzdC1pbmZvJyxcblx0XHRlcnJvcjogJ3RvYXN0LWVycm9yJyxcblx0XHR3YXJuaW5nOiAndG9hc3Qtd2FybmluZycsXG5cdH0sXG5cbn07XG4iLCJcblxuLy8gZnVuY3Rpb24gaW5pdCAoY29tcG9uZW50cywgcGF0aCA9ICcuLi8nKSB7XG4vLyBcdGNvbXBvbmVudHMgPSBbLi4ubmV3IFNldChjb21wb25lbnRzKV07XHQvLyB1bmlxdWVcbi8vIFx0Y29tcG9uZW50cy5mb3JFYWNoKGMgPT4ge1xuLy8gXHRcdGNvbnN0IG0gPSByZXF1aXJlKHBhdGggKyBjKTtcbi8vIFx0XHRpZiAobSAmJiBtLmluaXQpIG0uaW5pdCgpO1xuLy8gXHR9KTtcblxuLy8gXHR3aW5kb3cuZm9jdXMoKTtcbi8vIH1cblxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IHtcblxuLy8gXHRpbml0XG4vLyB9O1xuIiwiY29uc3QgRVZFTlQgPSByZXF1aXJlKCcuL2V2ZW50cycpO1xuY29uc3QgaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXInKTtcbmNvbnN0ICQgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdCQsXG5cdGhlbHBlcixcblx0RVZFTlQsXG59O1xuIiwiY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5jb25zdCBiYXNlVXJsID0gJyc7XG5cbmZ1bmN0aW9uIGFqYXggKG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykgb3B0aW9ucyA9IHsgdXJsOiBvcHRpb25zIH07XG5cblx0bGV0IHJlc3A7XG5cdGxldCBkYXRhID0gb3B0aW9ucy5kYXRhIHx8ICcnO1xuXHRjb25zdCByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuXHRvcHRpb25zLnVybCA9IGJhc2VVcmwgKyBvcHRpb25zLnVybDtcblx0b3B0aW9ucy5tZXRob2QgPSBvcHRpb25zLm1ldGhvZCB8fCAnR0VUJztcblx0b3B0aW9ucy50eXBlID0gb3B0aW9ucy50eXBlIHx8ICdqc29uJztcblxuXHRpZiAoZGF0YSkge1xuXHRcdGlmIChvcHRpb25zLm1ldGhvZC50b0xvd2VyQ2FzZSgpID09PSAnZ2V0Jykgb3B0aW9ucy51cmwgKz0gdXRpbC5zZXJpYWxpemUoZGF0YSk7XG5cdFx0ZWxzZSBpZiAob3B0aW9ucy50eXBlID09PSAnanNvbicpIGRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblx0fVxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdHJlcS5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLnVybCwgdHJ1ZSk7XG5cdFx0cmVxLm9ubG9hZCA9ICgpID0+IHtcblx0XHRcdGlmIChyZXEuc3RhdHVzID49IDIwMCAmJiByZXEuc3RhdHVzIDwgNDAwKSB7XG5cdFx0XHRcdHRyeSB7IHJlc3AgPSBKU09OLnBhcnNlKHJlcS5yZXNwb25zZVRleHQpOyB9XG5cdFx0XHRcdGNhdGNoIChlKSB7IHJlc3AgPSByZXEucmVzcG9uc2VUZXh0OyB9XG5cdFx0XHRcdHJlc29sdmUocmVzcCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHJlamVjdChyZXEuc3RhdHVzVGV4dCk7XG5cdFx0fTtcblx0XHRyZXEub25lcnJvciA9ICgpID0+IHJlamVjdChyZXEuc3RhdHVzVGV4dCk7XG5cdFx0cmVxLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsIGBhcHBsaWNhdGlvbi8ke29wdGlvbnMudHlwZX07IGNoYXJzZXQ9VVRGLThgKTtcblx0XHRyZXEuc2VuZChkYXRhKTtcblx0fSk7XG59XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0YWpheCxcblx0Z2V0OiAodXJsLCBkYXRhKSA9PiBhamF4KHsgdXJsLCBkYXRhOiBkYXRhIHx8IHt9IH0pLFxuXHRwb3N0OiAodXJsLCBkYXRhKSA9PiBhamF4KHsgdXJsLCBkYXRhOiBkYXRhIHx8IHt9LCBtZXRob2Q6ICdQT1NUJyB9KSxcblx0cHV0OiAodXJsLCBkYXRhKSA9PiBhamF4KHsgdXJsLCBkYXRhOiBkYXRhIHx8IHt9LCBtZXRob2Q6ICdQVVQnIH0pLFxuXHRkZWw6ICh1cmwsIGRhdGEpID0+IGFqYXgoeyB1cmwsIGRhdGE6IGRhdGEgfHwge30sIG1ldGhvZDogJ0RFTEVURScgfSlcbn07XG4iLCJjb25zdCBrZXlCcmVha2VyID0gL1teW1xcXV0rL2c7XG5jb25zdCBudW1iZXJNYXRjaGVyID0gL15bLStdP1swLTldKlxcLj9bMC05XSsoW2VFXVstK10/WzAtOV0rKT8kLztcblxuZnVuY3Rpb24gX2lzTnVtYmVyICh2YWx1ZSkge1xuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykgcmV0dXJuIHRydWU7XG5cdGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSByZXR1cm4gZmFsc2U7XG5cdHJldHVybiB2YWx1ZS5tYXRjaChudW1iZXJNYXRjaGVyKTtcbn1cblxuZnVuY3Rpb24gX2RlY29kZUVudGl0aWVzIChzdHIpIHtcblx0Y29uc3QgZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRkLmlubmVySFRNTCA9IHN0cjtcblx0cmV0dXJuIGQuaW5uZXJUZXh0IHx8IGQudGV4dENvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIF9nZXRJbnB1dHMgKGZvcm0pIHtcblx0Y29uc3QgaW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZV0nKTtcblx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGlucHV0cykgfHwgW107XG59XG5cblxuXG4vKipcbiAqIEZvcm0gY29tcG9uZW50XG4gKiBAcGFyYW0ge29iamVjdH0gZWwgLSBmb3JtIERPTSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIEZvcm0gKGVsKSB7XG5cdGlmICghZWwpIHJldHVybiBudWxsO1xuXHRpZiAoISh0aGlzIGluc3RhbmNlb2YgRm9ybSkpIHJldHVybiBuZXcgRm9ybShlbCk7XG5cdHRoaXMuZm9ybSA9IGVsO1xuXHRpZiAoZWwuZWxlbWVudHMpIHRoaXMuaW5wdXRzID0gZWwuZWxlbWVudHM7XG59XG5cbkZvcm0ucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChwYXJhbXMgPSB7fSwgY2xlYXIpIHtcblx0dGhpcy5zdXNwZW5kT2JzZXJ2ZSA9IHRydWU7XG5cdGlmICh0aGlzLmFuaW1GcmFtZSkgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltRnJhbWUpO1xuXG5cdGNvbnN0IGlucHV0cyA9IF9nZXRJbnB1dHModGhpcy5mb3JtKTtcblx0Zm9yIChsZXQgaW5wdXQgb2YgaW5wdXRzKSB7XG5cdFx0Y29uc3QgbmFtZSA9IGlucHV0Lm5hbWU7XG5cdFx0bGV0IHZhbHVlID0gKHR5cGVvZiBwYXJhbXNbbmFtZV0gPT09ICd1bmRlZmluZWQnID8gJycgOiBwYXJhbXNbbmFtZV0pO1xuXG5cdFx0Ly8gaWYgbmFtZSBpcyBvYmplY3QsIGUuZy4gdXNlcltuYW1lXSwgdXNlckRhdGFbYWRkcmVzc11bc3RyZWV0XSwgdXBkYXRlIHZhbHVlIHRvIHJlYWQgdGhpcyBjb3JyZWN0bHlcblx0XHRpZiAobmFtZS5pbmRleE9mKCdbJykgPiAtMSkge1xuXHRcdFx0bGV0IHYgPSBwYXJhbXM7XG5cdFx0XHRsZXQgbmFtZXMgPSBuYW1lLnJlcGxhY2UoL1tbXFxdXS9nLCAnfCcpLnNwbGl0KCd8Jyk7XG5cdFx0XHRmb3IgKGxldCBuIG9mIG5hbWVzKSB7XG5cdFx0XHRcdGlmICh2W25dKSB2ID0gdltuXTtcblx0XHRcdFx0ZWxzZSB7IHYgPSB1bmRlZmluZWQ7IGJyZWFrOyB9XG5cdFx0XHR9XG5cdFx0XHR2YWx1ZSA9IHY7XG5cdFx0fVxuXG5cdFx0Ly8gaWYgY2xlYXI9PXRydWUgYW5kIG5vIHZhbHVlID0gY2xlYXIgZmllbGQsIG90aGVyd2lzZSAtIGxlYXZlIGl0IGFzIGl0IHdhc1xuXHRcdGlmIChjbGVhciAhPT0gdHJ1ZSAmJiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCAhcGFyYW1zW25hbWVdKSkgY29udGludWU7XG5cblx0XHQvLyBpZiBubyB2YWx1ZSAtIGNsZWFyIGZpZWxkXG5cdFx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHZhbHVlID0gJyc7XG5cblx0XHQvLyBkZWNvZGUgaHRtbCBzcGVjaWFsIGNoYXJzIChlbnRpdGllcylcblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5pbmRleE9mKCcmJykgPiAtMSkgdmFsdWUgPSBfZGVjb2RlRW50aXRpZXModmFsdWUpO1xuXG5cdFx0aWYgKGlucHV0LnR5cGUgPT09ICdyYWRpbycpIGlucHV0LmNoZWNrZWQgPSAoaW5wdXQudmFsdWUudG9TdHJpbmcoKSA9PT0gdmFsdWUudG9TdHJpbmcoKSk7XG5cdFx0ZWxzZSBpZiAoaW5wdXQudHlwZSA9PT0gJ2NoZWNrYm94JykgaW5wdXQuY2hlY2tlZCA9IHZhbHVlO1xuXHRcdGVsc2UgaWYgKGlucHV0LnRhZ05hbWUgPT09ICdTRUxFQ1QnKSB7XG5cdFx0XHRpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIGlucHV0LnNlbGVjdGVkSW5kZXggPSAwO1xuXHRcdFx0ZWxzZSBpbnB1dC52YWx1ZSA9IHZhbHVlO1xuXHRcdH1cblx0XHRlbHNlIGlucHV0LnZhbHVlID0gdmFsdWU7XG5cdH1cblx0dGhpcy5zdXNwZW5kT2JzZXJ2ZSA9IGZhbHNlO1xuXG5cdHJldHVybiB0aGlzLnVwZGF0ZSgpO1xufTtcblxuXG5Gb3JtLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoY29udmVydCA9IGZhbHNlKSB7XG5cdGNvbnN0IGlucHV0cyA9IF9nZXRJbnB1dHModGhpcy5mb3JtKTtcblx0bGV0IGRhdGEgPSB7fSwgY3VycmVudDtcblxuXHRmb3IgKGxldCBpbnB1dCBvZiBpbnB1dHMpIHtcblx0XHRsZXQgdHlwZSA9IGlucHV0LnR5cGUgJiYgaW5wdXQudHlwZS50b0xvd2VyQ2FzZSgpLCB2YWx1ZSwgcGFydHMsIGxhc3RQYXJ0LCBsYXN0O1xuXG5cdFx0Ly8gaWYgd2UgYXJlIHN1Ym1pdCBvciBkaXNhYmxlZCAtIGlnbm9yZVxuXHRcdGlmICgodHlwZSA9PT0gJ3N1Ym1pdCcpIHx8ICFpbnB1dC5uYW1lIHx8IGlucHV0LmRpc2FibGVkKSBjb250aW51ZTtcblxuXHRcdHZhbHVlID0gaW5wdXQudmFsdWU7XG5cdFx0cGFydHMgPSBpbnB1dC5uYW1lLm1hdGNoKGtleUJyZWFrZXIpO1xuXG5cdFx0Ly8gcmV0dXJuIG9ubHkgXCJjaGVja2VkXCIgcmFkaW8gdmFsdWVcblx0XHRpZiAodHlwZSA9PT0gJ3JhZGlvJyAmJiAhaW5wdXQuY2hlY2tlZCkgY29udGludWU7XG5cblx0XHQvLyBjb252ZXJ0IGNoZWtib3ggdG8gW3RydWUgfCBmYWxzZV1cblx0XHRpZiAodHlwZSA9PT0gJ2NoZWNrYm94JykgdmFsdWUgPSBpbnB1dC5jaGVja2VkO1xuXG5cdFx0aWYgKGNvbnZlcnQpIHtcblx0XHRcdGlmIChfaXNOdW1iZXIodmFsdWUpKSB7XG5cdFx0XHRcdGxldCB0diA9IHBhcnNlRmxvYXQodmFsdWUpO1xuXHRcdFx0XHRsZXQgY21wID0gdHYgKyAnJztcblx0XHRcdFx0Ly8gY29udmVydCAoc3RyaW5nKTEwMC4wMCB0byAoaW50KTEwMFxuXHRcdFx0XHRpZiAodmFsdWUuaW5kZXhPZignLicpID4gMCkgY21wID0gdHYudG9GaXhlZCh2YWx1ZS5zcGxpdCgnLicpWzFdLmxlbmd0aCk7XG5cdFx0XHRcdGlmIChjbXAgPT09IHZhbHVlKSB2YWx1ZSA9IHR2O1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAodmFsdWUgPT09ICd0cnVlJykgdmFsdWUgPSB0cnVlO1xuXHRcdFx0ZWxzZSBpZiAodmFsdWUgPT09ICdmYWxzZScpIHZhbHVlID0gZmFsc2U7XG5cdFx0XHRpZiAodmFsdWUgPT09ICcnKSB2YWx1ZSA9IG51bGw7XG5cdFx0fVxuXG5cdFx0Y3VycmVudCA9IGRhdGE7XG5cdFx0Ly8gZ28gdGhyb3VnaCBhbmQgY3JlYXRlIG5lc3RlZCBvYmplY3RzXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdGN1cnJlbnRbcGFydHNbaV1dID0gY3VycmVudFtwYXJ0c1tpXV0gfHwge307XG5cdFx0XHRjdXJyZW50ID0gY3VycmVudFtwYXJ0c1tpXV07XG5cdFx0fVxuXHRcdGxhc3RQYXJ0ID0gcGFydHNbcGFydHMubGVuZ3RoIC0gMV07XG5cblx0XHQvLyBub3cgd2UgYXJlIG9uIHRoZSBsYXN0IHBhcnQsIHNldCB0aGUgdmFsdWVcblx0XHRsYXN0ID0gY3VycmVudFtsYXN0UGFydF07XG5cdFx0aWYgKGxhc3QpIHtcblx0XHRcdGlmICghQXJyYXkuaXNBcnJheShsYXN0KSkgY3VycmVudFtsYXN0UGFydF0gPSAobGFzdCA9PT0gdW5kZWZpbmVkID8gW10gOiBbbGFzdF0pO1xuXHRcdFx0Y3VycmVudFtsYXN0UGFydF0ucHVzaCh2YWx1ZSk7XG5cdFx0fVxuXHRcdGVsc2UgY3VycmVudFtsYXN0UGFydF0gPSB2YWx1ZTtcblx0fVxuXG5cdHJldHVybiBkYXRhO1xufTtcblxuRm9ybS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7IHRoaXMuc2V0KHt9KTsgfTtcblxuRm9ybS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7IHRoaXMuc2V0KHt9LCB0cnVlKTsgfTtcblxuXG5Gb3JtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICh0aGlzLmFuaW1GcmFtZSkgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltRnJhbWUpO1xuXHRpZiAoIXRoaXMub2JzZXJ2ZUNiKSByZXR1cm47XG5cdGlmICh0aGlzLnN1c3BlbmRPYnNlcnZlKSByZXR1cm47XG5cdGZvciAobGV0IGZpZWxkIG9mIHRoaXMuZm9ybS5lbGVtZW50cykge1xuXHRcdGxldCBmbmFtZSA9IGZpZWxkLm5hbWUucmVwbGFjZSgvW1tcXF1dL2csICdfJykgKyAndmFsJyxcblx0XHRcdG92ID0gdGhpcy5mb3JtLmRhdGFzZXRbZm5hbWVdLFxuXHRcdFx0diA9IGZpZWxkLnZhbHVlO1xuXHRcdGlmIChmbmFtZSA9PT0gJ3ZhbCcpIGNvbnRpbnVlO1xuXHRcdGlmIChmaWVsZC50eXBlID09PSAnY2hlY2tib3gnKSB7XG5cdFx0XHR2ID0gZmllbGQuY2hlY2tlZDtcblx0XHRcdG92ID0gKG92ID09PSAndHJ1ZScpO1xuXHRcdH1cblx0XHRlbHNlIGlmIChmaWVsZC50eXBlID09PSAncmFkaW8nICYmICFmaWVsZC5jaGVja2VkKSBjb250aW51ZTtcblx0XHRpZiAodHlwZW9mIG92ID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgdiAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGlmIChmaWVsZC50eXBlID09PSAncmFkaW8nKSB0aGlzLm9ic2VydmVDYih2LCBvdiwgZmllbGQpO1xuXHRcdFx0b3YgPSB0aGlzLmZvcm0uZGF0YXNldFtmbmFtZV0gPSB2O1xuXHRcdH1cblx0XHRlbHNlIGlmIChvdiAhPT0gdikge1xuXHRcdFx0dGhpcy5mb3JtLmRhdGFzZXRbZm5hbWVdID0gdjtcblx0XHRcdHRoaXMub2JzZXJ2ZUNiKHYsIG92LCBmaWVsZCk7XG5cdFx0fVxuXHR9XG5cblx0dGhpcy5hbmltRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG59O1xuRm9ybS5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChjYikgeyB0aGlzLnVwZGF0ZSh0aGlzLm9ic2VydmVDYiA9IGNiKTsgfTtcbkZvcm0ucHJvdG90eXBlLm9ic2VydmVTdG9wID0gZnVuY3Rpb24gKCkgeyB0aGlzLm9ic2VydmVDYiA9IG51bGw7IH07XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEZvcm07XG4iLCJjb25zdCBsb25nQ2xpY2sgPSByZXF1aXJlKCcuL2xvbmctY2xpY2snKTtcbmNvbnN0IHNpenpsZSA9IHJlcXVpcmUoJy4vc2l6emxlJyk7XG5jb25zdCBhamF4ID0gcmVxdWlyZSgnLi9hamF4Jyk7XG5jb25zdCBmb3JtID0gcmVxdWlyZSgnLi9mb3JtJyk7XG5jb25zdCBwdWJzdWIgPSByZXF1aXJlKCcuL3B1YnN1YicpO1xuY29uc3Qga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5sZXQgYWxsID0geyBhamF4LCBmb3JtIH07XG5PYmplY3QuYXNzaWduKGFsbCwgYWpheCwgcHVic3ViLCBrZXlzLCB1dGlsKTtcbmZvciAobGV0IHByb3AgaW4gYWxsKSBzaXp6bGVbcHJvcF0gPSBhbGxbcHJvcF07XG5cblxubG9uZ0NsaWNrLmluaXQoKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHNpenpsZTtcbiIsImNvbnN0IGtleXMgPSB7XG5cdFx0QTogNjUsXG5cdFx0WDogODgsXG5cdFx0QzogNjcsXG5cdFx0RDogNjgsXG5cdFx0VjogODYsXG5cdFx0WjogOTAsXG5cblx0XHRGMTogMTEyLFxuXHRcdEYyOiAxMTMsXG5cdFx0RjU6IDExNixcblx0XHRUQUI6IDksXG5cdFx0RVNDOiAyNyxcblxuXHRcdEJDS1NQQzogOCxcblx0XHRCQUNLU1BBQ0U6IDgsXG5cdFx0RU5URVI6IDEzLFxuXHRcdFNQQUNFOiAzMixcblx0XHRQR1VQOiAzMyxcblx0XHRQR0RPV046IDM0LFxuXHRcdEVORDogMzUsXG5cdFx0SE9NRTogMzYsXG5cdFx0TEVGVDogMzcsXG5cdFx0VVA6IDM4LFxuXHRcdFJJR0hUOiAzOSxcblx0XHRET1dOOiA0MCxcblx0XHRJTlM6IDQ1LFxuXHRcdERFTDogNDYsXG5cdFx0TUlOVVM6IDE3Myxcblx0XHRQTFVTOiA2MSxcblx0XHRET1Q6IDE5MCxcblx0XHRTTEFTSDogMTkxLFxuXG5cdFx0TUFDTUlOVVM6IDE4OSxcblx0XHRNQUNQTFVTOiAxODcsXG5cblx0XHROVU1TVEFSOiAxMDYsXG5cdFx0TlVNTUlOVVM6IDEwOSxcblx0XHROVU1QTFVTOiAxMDcsXG5cdFx0TlVNRE9UOiAxMTAsXG5cdFx0TlVNU0xBU0g6IDExMVxuXHR9LFxuXHRkaWdpdHMgPSB7XG5cdFx0NDg6IDEsXHRcdC8vIDBcblx0XHQ0OTogMSxcdFx0Ly8gMVxuXHRcdDUwOiAxLFx0XHQvLyAyXG5cdFx0NTE6IDEsXHRcdC8vIDNcblx0XHQ1MjogMSxcdFx0Ly8gNFxuXHRcdDUzOiAxLFx0XHQvLyA1XG5cdFx0NTQ6IDEsXHRcdC8vIDZcblx0XHQ1NTogMSxcdFx0Ly8gN1xuXHRcdDU2OiAxLFx0XHQvLyA4XG5cdFx0NTc6IDEsXHRcdC8vIDlcblx0XHQ5NjogMSxcdFx0Ly8gbnVtcGFkIDBcblx0XHQ5NzogMSxcdFx0Ly8gbnVtcGFkIDFcblx0XHQ5ODogMSxcdFx0Ly8gbnVtcGFkIDJcblx0XHQ5OTogMSxcdFx0Ly8gbnVtcGFkIDNcblx0XHQxMDA6IDEsXHRcdC8vIG51bXBhZCA0XG5cdFx0MTAxOiAxLFx0XHQvLyBudW1wYWQgNVxuXHRcdDEwMjogMSxcdFx0Ly8gbnVtcGFkIDZcblx0XHQxMDM6IDEsXHRcdC8vIG51bXBhZCA3XG5cdFx0MTA0OiAxLFx0XHQvLyBudW1wYWQgOFxuXHRcdDEwNTogMVx0XHQvLyBudW1wYWQgOVxuXHR9LFxuXHRhbGxvd2VkQ2hhcnMgPSB7XG5cdFx0ODogMSxcdFx0Ly8gYmFja3NwYWNlXG5cdFx0OTogMSxcdFx0Ly8gdGFiXG5cdFx0NDY6IDEsXHRcdC8vIGRlbFxuXHRcdDM1OiAxLFx0XHQvLyBlbmRcblx0XHQzNjogMSxcdFx0Ly8gaG9tZVxuXHRcdDM3OiAxLFx0XHQvLyBsZWZ0XG5cdFx0Mzk6IDFcdFx0Ly8gcmlnaHRcblx0fTtcblxuLy8gbWF0aCBvcGVyYXRvcnM6ICsgLSAqIC8gKCApIC5cbmZ1bmN0aW9uIGlzTWF0aCAoZSkge1xuXHRjb25zdCBrID0gZS5rZXlDb2RlO1xuXHRpZiAoayA9PT0ga2V5cy5TUEFDRSkgcmV0dXJuIHRydWU7XG5cdGlmIChrID09PSBrZXlzLk5VTURPVCB8fCAoayA9PT0ga2V5cy5ET1QgJiYgIWUuc2hpZnRLZXkpKSByZXR1cm4gdHJ1ZTtcblx0aWYgKGsgPT09IGtleXMuTlVNTUlOVVMgfHwgKGsgPT09IGtleXMuTUlOVVMgJiYgIWUuc2hpZnRLZXkpKSByZXR1cm4gdHJ1ZTtcblx0aWYgKGsgPT09IGtleXMuTlVNUExVUyB8fCAoayA9PT0ga2V5cy5QTFVTICYmIGUuc2hpZnRLZXkpKSByZXR1cm4gdHJ1ZTtcblx0aWYgKGsgPT09IGtleXMuTlVNU0xBU0ggfHwgKGsgPT09IGtleXMuU0xBU0ggJiYgIWUuc2hpZnRLZXkpKSByZXR1cm4gdHJ1ZTtcblx0aWYgKGsgPT09IGtleXMuTUFDTUlOVVMgJiYgIWUuc2hpZnRLZXkpIHJldHVybiB0cnVlO1xuXHRpZiAoayA9PT0ga2V5cy5NQUNQTFVTICYmIGUuc2hpZnRLZXkpIHJldHVybiB0cnVlO1xuXG5cdGlmIChlLnNoaWZ0S2V5KSB7XG5cdFx0aWYgKGsgPT09IDU2IHx8IGsgPT09IDU3IHx8IGsgPT09IDQ4KSByZXR1cm4gdHJ1ZTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG5cbi8vIGRpZ2l0cyArIG5hdmlnYXRpb24gKyBjb3B5L2N1dC9wYXN0ZSArIG1hdGggb3BlcmF0b3JzXG5mdW5jdGlvbiBpc0N1dENvcHlQYXN0ZSAoZSkge1xuXHRjb25zdCBrID0gZS5rZXlDb2RlO1xuXHRjb25zdCBjdHJsT3JDbWQgPSBlICYmIChlLmN0cmxLZXkgPT09IHRydWUgfHwgZS5tZXRhS2V5ID09PSB0cnVlKTtcblx0cmV0dXJuIGN0cmxPckNtZCAmJiAoayA9PT0ga2V5cy5YIHx8IGsgPT09IGtleXMuQyB8fCBrID09PSBrZXlzLlYpO1xufVxuXG4vLyBhIC0gelxuZnVuY3Rpb24gaXNBbHBoYSAoZSkgeyByZXR1cm4gKGUua2V5Q29kZSA+PSA2NSAmJiBlLmtleUNvZGUgPD0gOTAgJiYgIWUuY3RybEtleSAmJiAhZS5tZXRhS2V5KTsgfVxuXG5mdW5jdGlvbiBpc0RpZ2l0IChlKSB7IHJldHVybiBkaWdpdHNbZS5rZXlDb2RlXSA9PT0gMSAmJiAhZS5zaGlmdEtleTsgfVxuXG5mdW5jdGlvbiBpc0FscGhhTnVtZXJpYyAoZSkgeyByZXR1cm4gaXNBbHBoYShlKSB8fCBpc0RpZ2l0KGUpOyB9XG5cbmZ1bmN0aW9uIGlzTmF2Q2hhciAoZSkgeyByZXR1cm4gYWxsb3dlZENoYXJzW2Uua2V5Q29kZV0gPT09IDE7IH1cblxuZnVuY3Rpb24gaXNOdW1iZXJGaWVsZCAoZSkge1xuXHRjb25zdCBpc0VudGVyID0gKGUua2V5Q29kZSA9PT0gMTMpO1xuXHRyZXR1cm4gaXNEaWdpdChlKSB8fCBpc05hdkNoYXIoZSkgfHwgaXNDdXRDb3B5UGFzdGUoZSkgfHwgaXNFbnRlcjtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0a2V5cyxcblx0aXNOYXZDaGFyLFxuXHRpc0N1dENvcHlQYXN0ZSxcblx0aXNEaWdpdCxcblx0aXNBbHBoYSxcblx0aXNNYXRoLFxuXHRpc0FscGhhTnVtZXJpYyxcblx0aXNOdW1iZXJGaWVsZCxcbn07XG4iLCJjb25zdCBERUxBWSA9IDEwMDA7XHJjb25zdCBFVkVOVF9OQU1FID0gJ2xvbmdjbGljayc7XHJccmxldCB0aW1lciA9IG51bGw7XHJsZXQgaXNSZWFkeSA9IGZhbHNlO1xyXHJjb25zdCByZXNldCA9ICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XHJccmZ1bmN0aW9uIGZpcmVFdmVudCAoZSkge1xyXHRlLnRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChFVkVOVF9OQU1FLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUgfSkpO1xyXHRyZXNldCgpO1xyfVxyXHJmdW5jdGlvbiBpbml0ICgpIHtcclx0aWYgKGlzUmVhZHkpIHJldHVybjtcclx0Ly8gcGF0Y2ggQ3VzdG9tRXZlbnQgdG8gYWxsb3cgY29uc3RydWN0b3IgY3JlYXRpb24gKElFL0Nocm9tZSlcclx0Ly8gLSByZXNvbHZlZCBvbmNlIGluaXRDdXN0b21FdmVudCBubyBsb25nZXIgZXhpc3RzXHJcdGlmICgnaW5pdEN1c3RvbUV2ZW50JyBpbiBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKSkge1xyXHRcdHdpbmRvdy5DdXN0b21FdmVudCA9IGZ1bmN0aW9uIChldmVudCwgcGFyYW1zKSB7XHJcdFx0XHRwYXJhbXMgPSBwYXJhbXMgfHwgeyBidWJibGVzOiBmYWxzZSwgY2FuY2VsYWJsZTogZmFsc2UsIGRldGFpbDogdW5kZWZpbmVkIH07XHJcdFx0XHRjb25zdCBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcclx0XHRcdGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCk7XHJcdFx0XHRyZXR1cm4gZXZ0O1xyXHRcdH07XHJcdFx0d2luZG93LkN1c3RvbUV2ZW50LnByb3RvdHlwZSA9IHdpbmRvdy5FdmVudC5wcm90b3R5cGU7XHJcdH1cclxyXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgcmVzZXQpO1xyXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHJlc2V0KTtcclx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgcmVzZXQpO1xyXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcclx0XHR0aW1lciA9IHNldFRpbWVvdXQoZmlyZUV2ZW50LmJpbmQoZSwgZSksIERFTEFZKTtcclx0fSk7XHJcdGlzUmVhZHkgPSB0cnVlO1xyfVxyXHJccm1vZHVsZS5leHBvcnRzID0ge1xyXHRpbml0XHJ9O1xyIiwiY29uc3QgX2NhY2hlID0ge307XG5cbmZ1bmN0aW9uIHRyaWdnZXIgKHRvcGljLCAuLi5hcmdzKSB7XG5cdGlmICghX2NhY2hlW3RvcGljXSkgcmV0dXJuO1xuXHRfY2FjaGVbdG9waWNdLmZvckVhY2goY2IgPT4ge1xuXHRcdGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiLmFwcGx5KGNiLCBhcmdzKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIG9uICh0b3BpYywgY2FsbGJhY2spIHtcblx0aWYgKCFfY2FjaGVbdG9waWNdKSBfY2FjaGVbdG9waWNdID0gW107XG5cdF9jYWNoZVt0b3BpY10ucHVzaChjYWxsYmFjayk7XG5cdHJldHVybiBbdG9waWMsIGNhbGxiYWNrXTsgICAgICAgLy8gaGFuZGxlIGZvciBvZmZcbn1cblxuZnVuY3Rpb24gb2ZmIChoYW5kbGUpIHtcblx0bGV0IFt0b3BpYywgY2JdID0gaGFuZGxlLCBjYSA9IF9jYWNoZVt0b3BpY107XG5cdGNiID0gY2IudG9TdHJpbmcoKTtcblx0aWYgKCFjYSkgcmV0dXJuO1xuXG5cdGNhLmZvckVhY2goKGZuLCBpKSA9PiB7XG5cdFx0aWYgKGZuLnRvU3RyaW5nKCkgPT09IGNiKSBjYS5zcGxpY2UoaSwgMSk7XG5cdH0pO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0geyBvbiwgb2ZmLCB0cmlnZ2VyIH07XG4iLCIvLyBjb25zdCBWZWxvY2l0eSA9IHJlcXVpcmUoJ3ZlbG9jaXR5LWFuaW1hdGUnKTtcblxuY29uc3QgdHlwZSA9IG9iaiA9PiBvYmogPyBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKS5zbGljZSg4LCAtMSkudG9Mb3dlckNhc2UoKSA6ICd1bmRlZmluZWQnO1xuY29uc3QgaXNOb2RlTGlzdCA9IG5vZGVzID0+ICh0eXBlb2Ygbm9kZXMgPT09ICdvYmplY3QnKSAmJlxuXHRcdC9eKGh0bWxjb2xsZWN0aW9ufG5vZGVsaXN0fG9iamVjdCkkLy50ZXN0KHR5cGUobm9kZXMpKSAmJlxuXHRcdChub2Rlcy5sZW5ndGggPT09IDAgfHwgKHR5cGVvZiBub2Rlc1swXSA9PT0gJ29iamVjdCcgJiYgbm9kZXNbMF0ubm9kZVR5cGUgPiAwKSk7XG5cblxuZnVuY3Rpb24gc2l6emxlIChtaXhlZCwgY29udGV4dCkge1xuXHRpZiAoIW1peGVkKSByZXR1cm4gW107XG5cdGxldCBlbDtcblx0aWYgKHR5cGVvZiBtaXhlZCAhPT0gJ3N0cmluZycpIGVsID0gbWl4ZWQ7XG5cblx0Ly8gaXMgaHRtbCAtIGNyZWF0ZSBuZXcgZWxlbWVudFxuXHRlbHNlIGlmICgvPFthLXpdW1xcc1xcU10qPi9pLnRlc3QobWl4ZWQpKSB7XG5cdFx0ZWwgPSAobmV3IERPTVBhcnNlcigpKS5wYXJzZUZyb21TdHJpbmcobWl4ZWQsICd0ZXh0L2h0bWwnKS5ib2R5LmZpcnN0Q2hpbGQ7XG5cdH1cblx0Ly8gaXMgc2VsZWN0b3IgLSBmaW5kIGVsZW1lbnRcblx0ZWxzZSBlbCA9IChjb250ZXh0IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKG1peGVkKTtcblxuXHRpZiAoZWwubm9kZVR5cGUpIGVsID0gW2VsXTtcblx0ZWxzZSBpZiAoaXNOb2RlTGlzdChlbCkpIGVsID0gQXJyYXkuZnJvbShlbCk7XG5cblx0cmV0dXJuIE9iamVjdC5hc3NpZ24oZWwgfHwgW10sIHNpenpsZS5mbik7XG59XG5cblxuc2l6emxlLmZuID0ge307XG5zaXp6bGUuZm4uZmluZCA9IGZ1bmN0aW9uIChzZWxlY3RvcikgeyByZXR1cm4gc2l6emxlKHNlbGVjdG9yLCB0aGlzWzBdKTsgfTtcbnNpenpsZS5mbi5maXJzdCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNpenpsZSh0aGlzWzBdKTsgfTtcbnNpenpsZS5mbi5sYXN0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc2l6emxlKHRoaXNbdGhpcy5sZW5ndGggLSAxXSk7IH07XG5zaXp6bGUuZm4uZXEgPSBmdW5jdGlvbiAoaWR4KSB7IHJldHVybiBzaXp6bGUodGhpc1tpZHggfHwgMF0pOyB9O1xuXG5cbnNpenpsZS5mbi5hcHBlbmRUbyA9IGZ1bmN0aW9uIChwYXJlbnQpIHtcblx0aWYgKCF0aGlzIHx8ICF0aGlzLmxlbmd0aCkgcmV0dXJuIHRoaXM7XG5cdGlmICh0eXBlb2YgcGFyZW50ID09PSAnc3RyaW5nJykgcGFyZW50ID0gc2l6emxlKHBhcmVudCk7XG5cdGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KHBhcmVudCkpIHBhcmVudCA9IFtwYXJlbnRdO1xuXHRwYXJlbnRbMF0uYXBwZW5kQ2hpbGQodGhpc1swXSk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuc2l6emxlLmZuLmFwcGVuZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xuXHRpZiAoIXRoaXMgfHwgIXRoaXMubGVuZ3RoKSByZXR1cm4gdGhpcztcblx0aWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycpIGNoaWxkID0gc2l6emxlKGNoaWxkKTtcblx0dGhpc1swXS5hcHBlbmRDaGlsZChjaGlsZFswXSk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuc2l6emxlLmZuLm9uID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgY2IpIHtcblx0aWYgKCF0aGlzIHx8ICF0aGlzLmxlbmd0aCkgcmV0dXJuIHRoaXM7XG5cdHRoaXMuZm9yRWFjaChlbCA9PiB7XG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNiKTtcblx0fSk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuc2l6emxlLmZuLm9mZiA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGNiKSB7XG5cdGlmICghdGhpcyB8fCAhdGhpcy5sZW5ndGgpIHJldHVybiB0aGlzO1xuXHR0aGlzLmZvckVhY2goZWwgPT4ge1xuXHRcdGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYik7XG5cdH0pO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbnNpenpsZS5mbi5pcyA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuXHRpZiAoIXRoaXMgfHwgIXRoaXMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cdHJldHVybiB0aGlzWzBdLm1hdGNoZXMoc2VsZWN0b3IpO1xufTtcblxuc2l6emxlLmZuLmNsb3Nlc3QgPSBmdW5jdGlvbiAoY2xzKSB7XG5cdGlmICghdGhpcyB8fCAhdGhpcy5sZW5ndGgpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuIHNpenpsZSh0aGlzWzBdLmNsb3Nlc3QoY2xzKSk7XG59O1xuXG4vKipcbiAqIE1vZGlmeSBlbGVtZW50IGNsYXNzIGxpc3RcbiAqIEBwYXJhbSAge2FycmF5fSBlbCAgICAgICAgYXJyYXkgb2YgZWxlbWVudHNcbiAqIEBwYXJhbSAge3N0cmluZ30gYWN0aW9uICAgYWRkLCByZW1vdmUgb3IgdG9nZ2xlXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNscyAgICAgIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mIGNsYXNzZXMgdG8gYWRkL3JlbW92ZS90b2dnbGVcbiAqIEBwYXJhbSAge2Jvb2xlYW59IGNvbmQgICAgW29wdGlvbmFsXSB0cnVlIG9yIGZhbHNlIGZvciB0b2dnbGVcbiAqIEByZXR1cm4ge2FycmF5fSAgICAgICAgICAgc2FtZSBhcnJheSBvZiBlbGVtZW50c1xuICovXG5mdW5jdGlvbiBtb2RFbENscyAoZWwsIGFjdGlvbiwgY2xzLCBjb25kKSB7XG5cdGlmICghZWwgfHwgIWVsLmxlbmd0aCkgcmV0dXJuIGVsO1xuXHRjbHMgPSAoJycgKyBjbHMpLnNwbGl0KCcgJyk7XG5cdGlmICh0eXBlb2YgY29uZCA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0ZWwuZm9yRWFjaChlID0+IGNscy5mb3JFYWNoKGMgPT4gZS5jbGFzc0xpc3RbYWN0aW9uXShjLCBjb25kKSkpO1xuXHR9XG5cdGVsc2UgZWwuZm9yRWFjaChlID0+IGNscy5mb3JFYWNoKGMgPT4gZS5jbGFzc0xpc3RbYWN0aW9uXShjKSkpO1xuXHRyZXR1cm4gZWw7XG59XG5cbnNpenpsZS5mbi5hZGRDbGFzcyA9IGZ1bmN0aW9uIChjbHMpIHsgcmV0dXJuIG1vZEVsQ2xzKHRoaXMsICdhZGQnLCBjbHMpOyB9O1xuc2l6emxlLmZuLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24gKGNscykgeyByZXR1cm4gbW9kRWxDbHModGhpcywgJ3JlbW92ZScsIGNscyk7IH07XG5zaXp6bGUuZm4udG9nZ2xlQ2xhc3MgPSBmdW5jdGlvbiAoY2xzLCBjb25kKSB7IHJldHVybiBtb2RFbENscyh0aGlzLCAndG9nZ2xlJywgY2xzLCBjb25kKTsgfTtcbnNpenpsZS5mbi5oYXNDbGFzcyA9IGZ1bmN0aW9uIChjbHMpIHtcblx0aWYgKCF0aGlzIHx8ICF0aGlzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXHRyZXR1cm4gdGhpc1swXS5jbGFzc0xpc3QuY29udGFpbnMoY2xzKTtcbn07XG5cbnNpenpsZS5mbi50b2dnbGUgPSBmdW5jdGlvbiAoY29uZCkge1xuXHRyZXR1cm4gY29uZCA/IHRoaXMuc2hvdygpIDogdGhpcy5oaWRlKCk7XG59O1xuXG5zaXp6bGUuZm4uaGlkZSA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5mb3JFYWNoKGVsID0+IHsgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgfSk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuc2l6emxlLmZuLnNob3cgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuZm9yRWFjaChlbCA9PiB7IGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyB9KTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG5zaXp6bGUuZm4uaHRtbCA9IGZ1bmN0aW9uIChodG1sKSB7XG5cdGlmICghdGhpcyB8fCAhdGhpcy5sZW5ndGgpIHJldHVybiB0aGlzO1xuXHRpZiAodHlwZW9mIGh0bWwgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gdGhpc1swXS5pbm5lckhUTUw7XG5cdHRoaXMuZm9yRWFjaChlbCA9PiB7IGVsLmlubmVySFRNTCA9IGh0bWw7IH0pO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbnNpenpsZS5mbi50ZXh0ID0gZnVuY3Rpb24gKHRleHQpIHtcblx0aWYgKCF0aGlzIHx8ICF0aGlzLmxlbmd0aCkgcmV0dXJuIHRoaXM7XG5cdGlmICh0eXBlb2YgdGV4dCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiB0aGlzWzBdLmlubmVyVGV4dDtcblx0dGhpcy5mb3JFYWNoKGVsID0+IHsgZWwuaW5uZXJUZXh0ID0gdGV4dDsgfSk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuc2l6emxlLmZuLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKCF0aGlzIHx8ICF0aGlzLmxlbmd0aCkgcmV0dXJuIHRoaXM7XG5cdHRoaXMuZm9yRWFjaChlbCA9PiBlbC5yZW1vdmUoKSk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuc2l6emxlLmZuLmRhdGEgPSBmdW5jdGlvbiAoa2V5KSB7XG5cdGlmICghdGhpcyB8fCAhdGhpcy5sZW5ndGgpIHJldHVybiB0aGlzO1xuXHRpZiAoIXRoaXNbMF0uZGF0YXNldCkgcmV0dXJuIG51bGw7XG5cdGlmIChrZXkpIHJldHVybiB0aGlzWzBdLmRhdGFzZXRba2V5XTtcblx0cmV0dXJuIHRoaXNbMF0uZGF0YXNldDtcbn07XG5cblxuc2l6emxlLmZuLmF0dHIgPSBmdW5jdGlvbiAoYXR0ciwgdmFsdWUpIHtcblx0aWYgKCF0aGlzIHx8ICF0aGlzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXHRpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykgcmV0dXJuIHRoaXNbMF0uZ2V0QXR0cmlidXRlKGF0dHIpO1xuXHR0aGlzLmZvckVhY2goZWwgPT4geyBlbC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpOyB9KTtcbn07XG5cblxuZnVuY3Rpb24gYW5pbWF0ZUVsZW1lbnQgKGZyb20sIHRvLCBvcHRzKSB7XG5cdHJldHVybiBlbCA9PiBuZXcgUHJvbWlzZSAocmVzb2x2ZSA9PiB7XG5cdFx0Y29uc3QgYW5pbSA9IGVsLmFuaW1hdGUoW2Zyb20sIHRvXSwgb3B0cyk7XG5cdFx0YW5pbS5vbmNhbmNlbCA9IHJlc29sdmU7XG5cdFx0YW5pbS5vbmZpbmlzaCA9IHJlc29sdmU7XG5cdH0pO1xufVxuXG5zaXp6bGUuZm4uYW5pbWF0ZSA9IGZ1bmN0aW9uIChmcm9tLCB0bywgb3B0aW9ucyA9IHt9KSB7XG5cdGNvbnN0IGRmbHQgPSB7ZHVyYXRpb246IDMwMCwgZWFzaW5nOiAnZWFzZS1vdXQnLCBmaWxsOiAnZm9yd2FyZHMnfTtcblx0Y29uc3Qgb3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIGRmbHQsIG9wdGlvbnMpO1xuXHRjb25zdCBhbGwgPSB0aGlzLm1hcChhbmltYXRlRWxlbWVudChmcm9tLCB0bywgb3B0cykpO1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoYWxsKTtcbn07XG5cblxuLy8gc2l6emxlLmZuLmFuaW1hdGUgPSBmdW5jdGlvbiAoZnJvbSwgdG8sIG9wdGlvbnMgPSB7fSkge1xuLy8gXHRjb25zdCBvcHRzID0gT2JqZWN0LmFzc2lnbih7fSwge2R1cmF0aW9uOiAzMDAsIGVhc2luZzogJ2Vhc2Utb3V0J30sIG9wdGlvbnMpO1xuLy8gXHRjb25zdCBmcm9tVG8gPSB7fTtcbi8vIFx0Zm9yIChsZXQga2V5IGluIGZyb20pIGZyb21Ub1trZXldID0gWyB0b1trZXldLCBmcm9tW2tleV0gXTtcbi8vIFx0cmV0dXJuIFZlbG9jaXR5KHRoaXMsIGZyb21Ubywgb3B0cyk7XG4vLyB9O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gc2l6emxlO1xuIiwiY29uc3QgdHlwZSA9IG9iaiA9PiBvYmogPyBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKS5zbGljZSg4LCAtMSkudG9Mb3dlckNhc2UoKSA6ICd1bmRlZmluZWQnO1xuXG5jb25zdCB0cmltID0gKHN0ciwgY2hhcnMgPSAnXFxcXHMnKSA9PiAoJycgKyBzdHIpLnJlcGxhY2UobmV3IFJlZ0V4cChgKF4ke2NoYXJzfSspfCgke2NoYXJzfSskKWAsICdnJyksICcnKTtcbmNvbnN0IGx0cmltID0gKHN0ciwgY2hhcnMgPSAnXFxcXHMnKSA9PiAoJycgKyBzdHIpLnJlcGxhY2UobmV3IFJlZ0V4cChgXiR7Y2hhcnN9K2ApLCAnJyk7XG5jb25zdCBydHJpbSA9IChzdHIsIGNoYXJzID0gJ1xcXFxzJykgPT4gKCcnICsgc3RyKS5yZXBsYWNlKG5ldyBSZWdFeHAoYCR7Y2hhcnN9KyRgKSwgJycpO1xuXG5jb25zdCByYW5kID0gKG1heCwgbWluID0gMCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcblxuY29uc3QgdWNmaXJzdCA9IChzKSA9PiAoJycgKyBzKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xcYihbYS16XSkvZ2ksIGMgPT4gYy50b1VwcGVyQ2FzZSgpKTtcblxuXG5mdW5jdGlvbiBpc051bWJlciAodikge1xuXHRpZiAodHlwZW9mIHYgPT09ICdudW1iZXInKSByZXR1cm4gdHJ1ZTtcblx0aWYgKHR5cGVvZiB2ICE9PSAnc3RyaW5nJykgcmV0dXJuIGZhbHNlO1xuXHRyZXR1cm4gKC9eWy0rXT9bMC05XSpcXC4/WzAtOV0rKFtlRV1bLStdP1swLTldKyk/JC8pLnRlc3Qodik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdE51bWJlciAobnVtKSB7XG5cdG51bSA9IE1hdGgucm91bmQoMCArIG51bSAqIDEwMCkgLyAxMDA7XG5cdHJldHVybiBudW0udG9Mb2NhbGVTdHJpbmcoJ2VuLUdCJywgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSk7XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZSAob2JqKSB7XG5cdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXHRpZiAoIWtleXMgfHwgIWtleXMubGVuZ3RoKSByZXR1cm4gJyc7XG5cdHJldHVybiAnPycgKyBrZXlzLnJlZHVjZSgoYSwgaykgPT4ge1xuXHRcdGEucHVzaChrICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrXSkpO1xuXHRcdHJldHVybiBhO1xuXHR9LCBbXSkuam9pbignJicpO1xufVxuXG5mdW5jdGlvbiB2YXJUb1JlYWxUeXBlICh2KSB7XG5cdGlmIChpc051bWJlcih2KSkge1xuXHRcdGxldCBvcmlnaW5hbHYgPSB2O1xuXHRcdHYgPSBwYXJzZUZsb2F0KCcnICsgdik7XG5cdFx0aWYgKCgnJyArIHYpICE9PSBvcmlnaW5hbHYpIHYgPSBvcmlnaW5hbHY7XG5cdH1cblx0ZWxzZSBpZiAodiA9PT0gJ3RydWUnKSB2ID0gdHJ1ZTtcblx0ZWxzZSBpZiAodiA9PT0gJ2ZhbHNlJykgdiA9IGZhbHNlO1xuXHRpZiAodiA9PT0gJycpIHYgPSB1bmRlZmluZWQ7XG5cdGlmICh0eXBlKHYpID09PSAnYXJyYXknKSB2ID0gdi5tYXAodmFsID0+IHZhclRvUmVhbFR5cGUodmFsKSk7XG5cdHJldHVybiB2O1xufVxuXG5mdW5jdGlvbiBpc09iamVjdEVtcHR5ICh4KSB7XG5cdGlmICgheCB8fCB0eXBlb2YgeCAhPT0gJ29iamVjdCcpIHJldHVybiB0cnVlO1xuXHRyZXR1cm4gT2JqZWN0LmtleXMoeCkubGVuZ3RoID09PSAwO1xufVxuXG5mdW5jdGlvbiBzYW5pdGl6ZSAodikge1xuXHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcblx0ZGl2LmlubmVySFRNTCA9IHYgfHwgJyc7XG5cdHJldHVybiBkaXYudGV4dENvbnRlbnQgfHwgZGl2LmlubmVyVGV4dCB8fCAnJztcbn1cblxuXG5mdW5jdGlvbiBmdXp6eSAoaGF5LCBzKSB7XG5cdHMgPSAoJycgKyBzKS50b0xvd2VyQ2FzZSgpO1xuXHRoYXkgPSAoJycgKyBoYXkpLnRvTG93ZXJDYXNlKCk7XG5cdGxldCBuID0gLTE7XG5cdGZvciAobGV0IGwgb2YgcykgaWYgKCF+KG4gPSBoYXkuaW5kZXhPZihsLCBuICsgMSkpKSByZXR1cm4gZmFsc2U7XG5cdHJldHVybiB0cnVlO1xufVxuXG5cbmZ1bmN0aW9uIHBhcnNlVXJsICh1cmwpIHtcblx0bGV0IHVybHQ7XG5cdHRyeSB7IHVybHQgPSBuZXcgVVJMKHVybCk7IH1cblx0Y2F0Y2ggKGUpIHsgdXJsdCA9IG51bGw7IH1cblx0cmV0dXJuIHVybHQ7XG59XG5cblxuZnVuY3Rpb24gcHJldHR5RGF0ZSAodGltZSkge1xuXHRjb25zdCBkYXRlID0gbmV3IERhdGUoKHRpbWUgfHwgJycpLnJlcGxhY2UoLy0vZywgJy8nKS5yZXBsYWNlKC9bVFpdL2csICcgJykpO1xuXHRjb25zdCBkaWZmID0gKCgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC0gZGF0ZS5nZXRUaW1lKCkpIC8gMTAwMCk7XG5cdGNvbnN0IGRheV9kaWZmID0gTWF0aC5mbG9vcihkaWZmIC8gODY0MDApO1xuXHRpZiAoaXNOYU4oZGF5X2RpZmYpIHx8IGRheV9kaWZmIDwgMCB8fCBkYXlfZGlmZiA+PSAzMSkgcmV0dXJuIGRhdGUudG9Mb2NhbGVTdHJpbmcoKTtcblx0cmV0dXJuIGRheV9kaWZmID09PSAwICYmIChcblx0XHRkaWZmIDwgNjAgJiYgJ2p1c3Qgbm93JyB8fFxuXHRcdGRpZmYgPCAxMjAgJiYgJzEgbWludXRlIGFnbycgfHxcblx0XHRkaWZmIDwgMzYwMCAmJiBNYXRoLmZsb29yKGRpZmYgLyA2MCkgKyAnIG1pbnV0ZXMgYWdvJyB8fFxuXHRcdGRpZmYgPCA3MjAwICYmICcxIGhvdXIgYWdvJyB8fFxuXHRcdGRpZmYgPCA4NjQwMCAmJiBNYXRoLmZsb29yKGRpZmYgLyAzNjAwKSArICcgaG91cnMgYWdvJ1xuXHQpIHx8XG5cdFx0ZGF5X2RpZmYgPT09IDEgJiYgJ1llc3RlcmRheScgfHxcblx0XHRkYXlfZGlmZiA8IDcgJiYgZGF5X2RpZmYgKyAnIGRheXMgYWdvJyB8fFxuXHRcdGRheV9kaWZmIDwgMzEgJiYgTWF0aC5jZWlsKGRheV9kaWZmIC8gNykgKyAnIHdlZWtzIGFnbyc7XG59XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0ZnV6enksXG5cdGx0cmltLFxuXHRydHJpbSxcblx0dHJpbSxcblx0dWNmaXJzdCxcblx0dHlwZSxcblx0cmFuZCxcblx0aXNOdW1iZXIsXG5cdGZvcm1hdE51bWJlcixcblx0dmFyVG9SZWFsVHlwZSxcblx0aXNPYmplY3RFbXB0eSxcblx0c2FuaXRpemUsXG5cdHNlcmlhbGl6ZSxcblx0cGFyc2VVcmwsXG5cdG1vbnRoczogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuXHRwcmV0dHlEYXRlLFxufTtcbiIsImNvbnN0IGNvbXBvbmVudHMgPSBbXG5cdCdjb21wb25lbnRzL2NhbGVuZGFyJyxcblx0J2NhbGVuZGFyJyxcblx0J2NhdGVnb3JpZXMnLFxuXTtcblxuXG5cbmNvbXBvbmVudHMuZm9yRWFjaChuID0+IHtcblx0Y29uc3QgYyA9IHJlcXVpcmUoYC4vJHtufS9gKS5kZWZhdWx0O1xuXHRpZiAoYy5pcykgY3VzdG9tRWxlbWVudHMuZGVmaW5lKGMuaXMsIGMpO1xuXHRlbHNlIGMuaW5pdCgpO1xufSk7XG5cblxuZnVuY3Rpb24gaW5pdCAoKSB7XG5cdHNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyksIDMwMCk7XG5cdGNvbnNvbGUubG9nKCdyZWFkeSEnKTtcbn1cblxuXG5pZiAod2luZG93LldlYkNvbXBvbmVudHMucmVhZHkpIGluaXQoKTtcbmVsc2Ugd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ1dlYkNvbXBvbmVudHNSZWFkeScsIGluaXQpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjY2FsZW5kYXIge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR3aWR0aDogMjYwcHg7XFxuXFx0bGVmdDogMDtcXG5cXHR0b3A6IDA7XFxuXFx0Ym90dG9tOiAwO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG5cXHRmb250LXNpemU6IDEycHg7XFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI2NhdGVnb3JpZXMge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR3aWR0aDogMjYwcHg7XFxuXFx0bGVmdDogMjYwcHg7XFxuXFx0dG9wOiAwO1xcblxcdGJvdHRvbTogMDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9