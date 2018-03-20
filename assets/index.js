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
/******/ 	__webpack_require__.p = "../assets/";
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
	"./components/month-picker/": "./client/components/month-picker/index.js",
	"./components/ui-dialog/": "./client/components/ui-dialog/index.js",
	"./components/ui-msgbox/": "./client/components/ui-msgbox/index.js",
	"./components/ui-toast/": "./client/components/ui-toast/index.js",
	"./components/year-picker/": "./client/components/year-picker/index.js",
	"./core/": "./client/core/index.js",
	"./core/util/": "./client/core/util/index.js",
	"./header/": "./client/header/index.js"
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

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyleUrl.js */ "./node_modules/style-loader/lib/addStyleUrl.js")(
  __webpack_require__(/*! !../../node_modules/file-loader/dist/cjs.js!./index.css */ "./node_modules/file-loader/dist/cjs.js!./client/calendar/index.css")
, {"hmr":true});
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

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyleUrl.js */ "./node_modules/style-loader/lib/addStyleUrl.js")(
  __webpack_require__(/*! !../../node_modules/file-loader/dist/cjs.js!./index.css */ "./node_modules/file-loader/dist/cjs.js!./client/categories/index.css")
, {"hmr":true});
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

/***/ "./client/components/month-picker/index.css":
/*!**************************************************!*\
  !*** ./client/components/month-picker/index.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.month-picker {\n\t-moz-user-select: none;\n\tuser-select: none;\n\tposition: relative;\n\twidth: inherit;\n\tdisplay: flex;\n\theight: 100%;\n\tfont: inherit;\n}\n\n\n.month {\n\tposition: relative;\n\tfont: inherit;\n\ttext-transform: uppercase;\n\tflex: 1;\n\tborder: none;\n\tbackground-color: rgba(255,255,255,0.3);\n\theight: 100%;\n\tborder: 1px solid transparent;\n\tborder-width: 0 1px;\n\tpadding-top: 2px;\n\tcolor: rgba(0,0,0,.6);\n}\n\n\n.month.selected {\n\tbackground-color: rgba(255,255,255,0.9);\n\tborder-color: #444;\n\tcolor: rgba(0,0,0,1);\n}\n\n\n.month.current::after {\n\t--dot-size: 7px;\n\n\tcontent: '';\n\tdisplay: block;\n\twidth: var(--dot-size);\n\theight: var(--dot-size);\n\tborder-radius: var(--dot-size);\n\tbackground: linear-gradient(#205DFFFF, #184ACAFF);\n\tposition: absolute;\n\tbottom: 3px;\n\tleft: 50%;\n\ttransform: translateX(-50%);\n\topacity: 0.8;\n}\n", ""]);

// exports


/***/ }),

/***/ "./client/components/month-picker/index.js":
/*!*************************************************!*\
  !*** ./client/components/month-picker/index.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./client/components/month-picker/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const currentMonth = new Date().getMonth();

function btnTemplate(month, i) {
	const cls = ['month', 'month-' + month.toLowerCase(), 'month-' + (i + 1)];
	if (i === currentMonth) cls.push('current');
	return `<button class="${cls.join(' ')}" data-value="${i + 1}">${month.substr(0, 3)}</button>`;
}

class monthPicker extends HTMLElement {

	constructor() {
		super();
		const template = document.createElement('template');
		template.innerHTML = `<style>${_index_css__WEBPACK_IMPORTED_MODULE_0___default.a}</style>${this.template()}`;
		this.templateContent = template.content;
	}

	static get is() {
		return 'month-picker';
	}
	static get observedAttributes() {
		return ['value'];
	}

	connectedCallback() {
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(this.templateContent.cloneNode(true));
		this.el = this.shadowRoot.querySelector('.month-picker');
		this.inputEl = this.el.querySelector('input');
		this.setAttribute('tabindex', 0);

		this.el.addEventListener('click', this.onClick.bind(this));
		if (!this.getAttribute('value')) this.value = new Date().getMonth() + 1;
	}

	attributeChangedCallback(name, oldVal, newVal) {
		if (name === 'value') this.update(newVal);
	}

	template() {
		const monthsHtml = months.map(btnTemplate).join('');
		return `<div class="month-picker">${monthsHtml}</div>`;
	}

	set value(value) {
		this.setAttribute('value', value);
	}

	get value() {
		return this.getAttribute('value');
	}

	update(value) {
		let selected = this.el.querySelectorAll('.month.selected');
		selected.forEach(btn => btn.classList.remove('selected'));
		selected = this.el.querySelector('.month-' + value);
		if (selected) selected.classList.add('selected');
	}

	onClick(e) {
		const target = e.target;

		const monthButton = target.closest('.month');
		if (monthButton) {
			const val = monthButton.dataset.value;
			this.value = val;
			this.fireEvent('change', { value: parseInt(val, 10), month: months[val - 1] });
		}
	}

	fireEvent(name, detail) {
		this.dispatchEvent(new CustomEvent(name, { detail }));
	}

}

customElements.define('month-picker', monthPicker);

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

/***/ "./client/components/year-picker/index.css":
/*!*************************************************!*\
  !*** ./client/components/year-picker/index.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".year-picker {\n\t-moz-user-select: none;\n\tuser-select: none;\n\tposition: relative;\n\tfont: inherit;\n\twidth: inherit;\n\tdisplay: flex;\n\theight: 100%;\n\tbackground-color: rgba(255,255,255,0.9);\n}\n\n.year-picker input {\n\tappearance: textfield;\n\t-webkit-appearance: textfield;\n\t-moz-appearance: textfield;\n\ttext-align: center;\n\tfont: inherit;\n\tmin-width: 3em;\n\tpadding: 3px 0 1px;\n\theight: 100%;\n\tbackground-color: transparent;\n\tflex: 1;\n}\n\n.year-picker .btn {\n\tbackground-color: transparent;\n\tbox-sizing: border-box;\n\tborder: none;\n\theight: 100%;\n\tpadding-bottom: 1px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./client/components/year-picker/index.html":
/*!**************************************************!*\
  !*** ./client/components/year-picker/index.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"year-picker\">\n\t<button class=\"btn prev-year\" title=\"Previous year\">◀</button>\n\t<input class=\"btn\" type=\"number\">\n\t<button class=\"btn next-year\" title=\"Next year\">▶</button>\n</div>";

/***/ }),

/***/ "./client/components/year-picker/index.js":
/*!************************************************!*\
  !*** ./client/components/year-picker/index.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./client/components/year-picker/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./client/components/year-picker/index.html");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_1__);



class yearPicker extends HTMLElement {

	constructor() {
		super();
		this.template = document.createElement('template');
		this.template.innerHTML = `<style>${_index_css__WEBPACK_IMPORTED_MODULE_0___default.a}</style>${_index_html__WEBPACK_IMPORTED_MODULE_1___default.a}`;
		this.templateContent = this.template.content;
	}

	static get is() {
		return 'year-picker';
	}

	static get observedAttributes() {
		return ['value'];
	}

	connectedCallback() {
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(this.templateContent.cloneNode(true));
		this.el = this.shadowRoot.querySelector('.year-picker');
		this.inputEl = this.el.querySelector('input');
		this.setAttribute('tabindex', 0);

		this.el.addEventListener('click', this.onClick.bind(this));
		this.inputEl.addEventListener('input', this.onInput.bind(this));
		if (!this.getAttribute('value')) this.value = new Date().getFullYear();
	}

	attributeChangedCallback(name, oldVal, newVal) {
		if (name === 'value') this.update(newVal);
	}

	set value(val) {
		this.setAttribute('value', val);
	}

	get value() {
		return this.getAttribute('value');
	}

	update(val) {
		this.inputEl.value = val;
	}

	addToValue(val) {
		const value = parseInt(this.value, 10) + val;
		this.value = value;
		this.fireEvent('change', { value });
	}

	onInput() {
		const currentValue = parseInt(this.value, 10);
		const value = parseInt(this.inputEl.value, 10);
		if (currentValue !== value) {
			this.value = value;
			this.fireEvent('change', { value });
		}
	}

	onClick(e) {
		const target = e.target;
		if (target.closest('.prev-year')) return this.addToValue(-1);
		if (target.closest('.next-year')) return this.addToValue(1);
	}

	fireEvent(name, detail) {
		this.dispatchEvent(new CustomEvent(name, { detail }));
	}

}

customElements.define('year-picker', yearPicker);

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

/***/ "./client/header/index.css":
/*!*********************************!*\
  !*** ./client/header/index.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyleUrl.js */ "./node_modules/style-loader/lib/addStyleUrl.js")(
  __webpack_require__(/*! !../../node_modules/file-loader/dist/cjs.js!./index.css */ "./node_modules/file-loader/dist/cjs.js!./client/header/index.css")
, {"hmr":true});
if(false) {}

/***/ }),

/***/ "./client/header/index.js":
/*!********************************!*\
  !*** ./client/header/index.js ***!
  \********************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./client/core/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__(/*! ./index.css */ "./client/header/index.css");
__webpack_require__(/*! ../components/month-picker */ "./client/components/month-picker/index.js");
__webpack_require__(/*! ../components/year-picker */ "./client/components/year-picker/index.js");



const today = new Date();
let el, btnToday, monthPicker, yearPicker, currentDate;

// yyyy-mm-dd
const format = d => d.toISOString().substr(0, 10);
const isSameDay = (d1, d2) => format(d1) === format(d2);

function goTo(day = today) {
	currentDate = day;
	monthPicker[0].value = day.getMonth() + 1;
	yearPicker[0].value = day.getFullYear();
	el.toggleClass('is-today', isSameDay(day, today));
}

function onMonthPickerChange(e) {
	const day = new Date(currentDate);
	day.setMonth(e.detail.value - 1);
	goTo(day);
}

function onYearPickerChange(e) {
	const day = new Date(currentDate);
	day.setYear(e.detail.value);
	goTo(day);
}

function init() {
	el = Object(_core__WEBPACK_IMPORTED_MODULE_0__["$"])('header');
	btnToday = el.find('.btn-today');
	monthPicker = el.find('month-picker');
	yearPicker = el.find('year-picker');

	btnToday.on('click', () => goTo());
	monthPicker.on('change', onMonthPickerChange);
	yearPicker.on('change', onYearPickerChange);

	goTo();
}



/***/ }),

/***/ "./client/index.css":
/*!**************************!*\
  !*** ./client/index.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyleUrl.js */ "./node_modules/style-loader/lib/addStyleUrl.js")(
  __webpack_require__(/*! !../node_modules/file-loader/dist/cjs.js!./index.css */ "./node_modules/file-loader/dist/cjs.js!./client/index.css")
, {"hmr":true});
if(false) {}

/***/ }),

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./index.css */ "./client/index.css");

const components = ['header'];

components.forEach(n => {
	const c = __webpack_require__("./client sync recursive ^\\.\\/.*\\/$")(`./${n}/`);
	c.init();
});

function init() {
	document.body.classList.remove('loading');
	console.log('ready!');
}

if (window.WebComponents.ready) init();else window.addEventListener('WebComponentsReady', init);

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

/***/ "./node_modules/file-loader/dist/cjs.js!./client/calendar/index.css":
/*!**************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js!./client/calendar/index.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "10bfeedf131d1ae6a9d23d756456c524.css";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js!./client/categories/index.css":
/*!****************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js!./client/categories/index.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "875e854be37cbc0cfc879f83890adc2f.css";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js!./client/header/index.css":
/*!************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js!./client/header/index.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f609fc2d82f0823a3e772ecb838e0e6c.css";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js!./client/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js!./client/index.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "419cb8fc810261d00ba3833168a0971c.css";

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyleUrl.js":
/*!******************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyleUrl.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

function addAttrs (element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

module.exports = function addStyleUrl (url, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	options.hmr = typeof options.hmr === 'undefined' ? true : options.hmr;

	var link = document.createElement("link");

	link.rel = "stylesheet";
	link.type = "text/css";
	link.href = url;

	addAttrs(link, options.attrs);

	var head = document.getElementsByTagName("head")[0];

	head.appendChild(link);

	if (options.hmr && module.hot) {
		return function(url) {
			if(typeof url === "string") {
				link.href = url;
			} else {
				head.removeChild(link);
			}
		};
	}
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50IHN5bmMgXlxcLlxcLy4qXFwvJCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY2FsZW5kYXIvaW5kZXguY3NzPzIzOWQiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NhbGVuZGFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jYXRlZ29yaWVzL2luZGV4LmNzcz9iMmJmIiwid2VicGFjazovLy8uL2NsaWVudC9jYXRlZ29yaWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2NhbGVuZGFyL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9jYWxlbmRhci9pbmRleC5odG1sIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2NhbGVuZGFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL21vbnRoLXBpY2tlci9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvbW9udGgtcGlja2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL3VpLWRpYWxvZy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvdWktZGlhbG9nL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvdWktZGlhbG9nL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL3VpLW1zZ2JveC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy91aS10b2FzdC9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvdWktdG9hc3QvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy91aS10b2FzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy95ZWFyLXBpY2tlci9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMveWVhci1waWNrZXIvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy95ZWFyLXBpY2tlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29yZS9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvcmUvaGVscGVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb3JlL3V0aWwvYWpheC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29yZS91dGlsL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvcmUvdXRpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29yZS91dGlsL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvcmUvdXRpbC9sb25nLWNsaWNrLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb3JlL3V0aWwvcHVic3ViLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb3JlL3V0aWwvc2l6emxlLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb3JlL3V0aWwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvaGVhZGVyL2luZGV4LmNzcz9hMWUxIiwid2VicGFjazovLy8uL2NsaWVudC9oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2luZGV4LmNzcz8yZDIwIiwid2VicGFjazovLy8uL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NhbGVuZGFyL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY2F0ZWdvcmllcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2hlYWRlci9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZVVybC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJpbml0IiwiY29uc29sZSIsImxvZyIsIndlZWtkYXlzIiwibW9udGhzIiwicGVyZmVjdENhbGVuZGFyIiwiSFRNTEVsZW1lbnQiLCJjb25zdHJ1Y3RvciIsInRlbXBsYXRlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwidGVtcGxhdGVDb250ZW50IiwiY29udGVudCIsImlzIiwib2JzZXJ2ZWRBdHRyaWJ1dGVzIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwic2hhZG93Um9vdCIsImFwcGVuZENoaWxkIiwiY2xvbmVOb2RlIiwiZWwiLCJxdWVyeVNlbGVjdG9yIiwiZGF5Q2FyZCIsIm1vbnRoc0VsIiwid2Vla2RheXNFbCIsImRheXNFbCIsImZpbGxDYWxlbmRhciIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkNsaWNrIiwiYmluZCIsImdldEF0dHJpYnV0ZSIsImRhdGUiLCJEYXRlIiwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIiwibmFtZSIsIm9sZFZhbCIsIm5ld1ZhbCIsInVwRGF0ZSIsInZhbCIsImZvcm1hdCIsInNldEF0dHJpYnV0ZSIsImZ1bGxEYXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiZGF0ZU9iaiIsImRhdGVTdHIiLCJkIiwidG9JU09TdHJpbmciLCJzdWJzdHIiLCJyZWFsRGF0ZSIsInkiLCJnZXRGdWxsWWVhciIsIm0iLCJnZXRNb250aCIsImdldERhdGUiLCJtb250aCIsImZpcnN0RGF5T2ZNb250aCIsIlVUQyIsImdldERheSIsImRheXNJbk1vbnRoIiwid2Vla2RheSIsInJlbmRlciIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJjbGFzc05hbWUiLCJnZXREYXlDYXJkIiwiaW5uZXJUZXh0Iiwic2VsZWN0ZWREYXkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJzZWxlY3RlZE1vbnRoIiwicXVlcnlTZWxlY3RvckFsbCIsIm1hcCIsImpvaW4iLCJkYXlzIiwiQXJyYXkiLCJmaWxsIiwibiIsImkiLCJzZXREYXRlIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiZSIsInRhcmdldCIsImRheUVsIiwiY2xvc2VzdCIsImRheUVscyIsImNoaWxkcmVuIiwiZGF5IiwicHJvdG90eXBlIiwiaW5kZXhPZiIsImNhbGwiLCJwcmV2ZW50RGVmYXVsdCIsInVuZGVmaW5lZCIsIm1vbnRoRWwiLCJtb250aHNFbHMiLCJwYXJlbnROb2RlIiwidG9kYXkiLCJwcmV2WWVhciIsIm5leHRZZWFyIiwiY3VycmVudE1vbnRoIiwiYnRuVGVtcGxhdGUiLCJjbHMiLCJ0b0xvd2VyQ2FzZSIsInB1c2giLCJtb250aFBpY2tlciIsImlucHV0RWwiLCJ2YWx1ZSIsInVwZGF0ZSIsIm1vbnRoc0h0bWwiLCJzZWxlY3RlZCIsImZvckVhY2giLCJidG4iLCJtb250aEJ1dHRvbiIsImRhdGFzZXQiLCJmaXJlRXZlbnQiLCJwYXJzZUludCIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiRk9DVVNBQkxFX1NFTEVDVE9SUyIsIkFOSU1fQ0ZHIiwiZHVyYXRpb24iLCJlYXNpbmciLCJ1aURpYWxvZyIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm9uQ29udGVudENoYW5nZSIsImNvbnRlbnRFbCIsIm9ic2VydmUiLCJhdHRyaWJ1dGVzIiwiY2hpbGRMaXN0Iiwib25LZXlkb3duIiwib25CbHVyIiwiZGlzY29ubmVjdGVkQ2FsbGJhY2siLCJkaXNjb25uZWN0IiwiZG9PcGVuIiwiZG9DbG9zZSIsInRhYmJpbmdGb3J3YXJkIiwidGFyIiwiYmFja2Ryb3BDbGljayIsImRpYWxvZ0Nsb3NlQnRuIiwib3BlbiIsImdldEZvY3VzYWJsZUVscyIsImZvY3VzYWJsZUVsZW1lbnRzIiwiZWxlbXMiLCJmaXJzdCIsImxhc3QiLCJsZW5ndGgiLCJmb2N1c0VsIiwiZm9jdXMiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJrZXkiLCJzaGlmdEtleSIsImlzT3BlbiIsIkJvb2xlYW4iLCJ0cmlnZ2VyIiwiYWN0aXZlRWxlbWVudCIsInJlbW92ZUF0dHJpYnV0ZSIsImhhc0F0dHJpYnV0ZSIsInZpc2libGUiLCJhbmltYXRlIiwidHJhbnNmb3JtIiwib3BhY2l0eSIsIm9uZmluaXNoIiwib25PcGVuZWQiLCJvbkNsb3NlZCIsInVpTXNnQm94IiwiVE9BU1RfVElNRU9VVCIsInVpVG9hc3QiLCJzaG93IiwibXNnIiwidHlwZSIsImF1dG9jbG9zZSIsInRvYXN0IiwiVE9BU1RIIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0IiwicHJvcHMiLCJtYXJnaW5Ub3AiLCJhbmltIiwic2V0VGltZW91dCIsImhpZGUiLCJ0b2FzdHMiLCJ5ZWFyUGlja2VyIiwib25JbnB1dCIsImFkZFRvVmFsdWUiLCJjdXJyZW50VmFsdWUiLCJtb2R1bGUiLCJleHBvcnRzIiwiY2xpY2tlZCIsImtleXVwIiwiaW5mbyIsImVycm9yIiwid2FybmluZyIsIkVWRU5UIiwiaGVscGVyIiwiJCIsInV0aWwiLCJiYXNlVXJsIiwiYWpheCIsIm9wdGlvbnMiLCJ1cmwiLCJyZXNwIiwiZGF0YSIsInJlcSIsIlhNTEh0dHBSZXF1ZXN0IiwibWV0aG9kIiwic2VyaWFsaXplIiwiSlNPTiIsInN0cmluZ2lmeSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib25sb2FkIiwic3RhdHVzIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJzdGF0dXNUZXh0Iiwib25lcnJvciIsInNldFJlcXVlc3RIZWFkZXIiLCJzZW5kIiwiZ2V0IiwicG9zdCIsInB1dCIsImRlbCIsImtleUJyZWFrZXIiLCJudW1iZXJNYXRjaGVyIiwiX2lzTnVtYmVyIiwibWF0Y2giLCJfZGVjb2RlRW50aXRpZXMiLCJzdHIiLCJ0ZXh0Q29udGVudCIsIl9nZXRJbnB1dHMiLCJmb3JtIiwiaW5wdXRzIiwic2xpY2UiLCJGb3JtIiwiZWxlbWVudHMiLCJzZXQiLCJwYXJhbXMiLCJjbGVhciIsInN1c3BlbmRPYnNlcnZlIiwiYW5pbUZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJpbnB1dCIsInYiLCJuYW1lcyIsInJlcGxhY2UiLCJzcGxpdCIsImNoZWNrZWQiLCJ0b1N0cmluZyIsInRhZ05hbWUiLCJzZWxlY3RlZEluZGV4IiwiY29udmVydCIsImN1cnJlbnQiLCJwYXJ0cyIsImxhc3RQYXJ0IiwiZGlzYWJsZWQiLCJ0diIsInBhcnNlRmxvYXQiLCJjbXAiLCJ0b0ZpeGVkIiwiaXNBcnJheSIsInJlc2V0Iiwib2JzZXJ2ZUNiIiwiZmllbGQiLCJmbmFtZSIsIm92IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2IiLCJvYnNlcnZlU3RvcCIsImxvbmdDbGljayIsInNpenpsZSIsInB1YnN1YiIsImtleXMiLCJhbGwiLCJwcm9wIiwiQSIsIlgiLCJDIiwiRCIsIlYiLCJaIiwiRjEiLCJGMiIsIkY1IiwiVEFCIiwiRVNDIiwiQkNLU1BDIiwiQkFDS1NQQUNFIiwiRU5URVIiLCJTUEFDRSIsIlBHVVAiLCJQR0RPV04iLCJFTkQiLCJIT01FIiwiTEVGVCIsIlVQIiwiUklHSFQiLCJET1dOIiwiSU5TIiwiREVMIiwiTUlOVVMiLCJQTFVTIiwiRE9UIiwiU0xBU0giLCJNQUNNSU5VUyIsIk1BQ1BMVVMiLCJOVU1TVEFSIiwiTlVNTUlOVVMiLCJOVU1QTFVTIiwiTlVNRE9UIiwiTlVNU0xBU0giLCJkaWdpdHMiLCJhbGxvd2VkQ2hhcnMiLCJpc01hdGgiLCJrIiwia2V5Q29kZSIsImlzQ3V0Q29weVBhc3RlIiwiY3RybE9yQ21kIiwiY3RybEtleSIsIm1ldGFLZXkiLCJpc0FscGhhIiwiaXNEaWdpdCIsImlzQWxwaGFOdW1lcmljIiwiaXNOYXZDaGFyIiwiaXNOdW1iZXJGaWVsZCIsImlzRW50ZXIiLCJERUxBWSIsIkVWRU5UX05BTUUiLCJ0aW1lciIsImlzUmVhZHkiLCJjbGVhclRpbWVvdXQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImNyZWF0ZUV2ZW50Iiwid2luZG93IiwiZXZlbnQiLCJldnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJFdmVudCIsIl9jYWNoZSIsInRvcGljIiwiYXJncyIsImFwcGx5Iiwib24iLCJjYWxsYmFjayIsIm9mZiIsImhhbmRsZSIsImNhIiwiZm4iLCJzcGxpY2UiLCJvYmoiLCJpc05vZGVMaXN0Iiwibm9kZXMiLCJ0ZXN0Iiwibm9kZVR5cGUiLCJtaXhlZCIsImNvbnRleHQiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJib2R5IiwiZmlyc3RDaGlsZCIsImZyb20iLCJmaW5kIiwic2VsZWN0b3IiLCJlcSIsImlkeCIsImFwcGVuZFRvIiwicGFyZW50IiwiYXBwZW5kIiwiY2hpbGQiLCJldmVudE5hbWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWF0Y2hlcyIsIm1vZEVsQ2xzIiwiYWN0aW9uIiwiY29uZCIsImMiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwidG9nZ2xlQ2xhc3MiLCJoYXNDbGFzcyIsImNvbnRhaW5zIiwidG9nZ2xlIiwiZGlzcGxheSIsImh0bWwiLCJ0ZXh0IiwiYXR0ciIsImFuaW1hdGVFbGVtZW50IiwidG8iLCJvcHRzIiwib25jYW5jZWwiLCJkZmx0IiwidHJpbSIsImNoYXJzIiwiUmVnRXhwIiwibHRyaW0iLCJydHJpbSIsInJhbmQiLCJtYXgiLCJtaW4iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ1Y2ZpcnN0IiwicyIsInRvVXBwZXJDYXNlIiwiaXNOdW1iZXIiLCJmb3JtYXROdW1iZXIiLCJudW0iLCJyb3VuZCIsInRvTG9jYWxlU3RyaW5nIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwicmVkdWNlIiwiYSIsImVuY29kZVVSSUNvbXBvbmVudCIsInZhclRvUmVhbFR5cGUiLCJvcmlnaW5hbHYiLCJpc09iamVjdEVtcHR5IiwieCIsInNhbml0aXplIiwiZGl2IiwiZnV6enkiLCJoYXkiLCJsIiwicGFyc2VVcmwiLCJ1cmx0IiwiVVJMIiwicHJldHR5RGF0ZSIsInRpbWUiLCJkaWZmIiwiZ2V0VGltZSIsImRheV9kaWZmIiwiaXNOYU4iLCJjZWlsIiwiYnRuVG9kYXkiLCJjdXJyZW50RGF0ZSIsImlzU2FtZURheSIsImQxIiwiZDIiLCJnb1RvIiwib25Nb250aFBpY2tlckNoYW5nZSIsInNldE1vbnRoIiwib25ZZWFyUGlja2VyQ2hhbmdlIiwic2V0WWVhciIsImNvbXBvbmVudHMiLCJXZWJDb21wb25lbnRzIiwicmVhZHkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RDs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBLEdBQUcsV0FB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Ozs7Ozs7Ozs7OztBQ0FBLGdGOzs7Ozs7Ozs7OztBQ0FBLGdGOzs7Ozs7Ozs7OztBQ0FBLGdGOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuLi9hc3NldHMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY2xpZW50L2luZGV4LmpzXCIpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2NhbGVuZGFyL1wiOiBcIi4vY2xpZW50L2NhbGVuZGFyL2luZGV4LmpzXCIsXG5cdFwiLi9jYXRlZ29yaWVzL1wiOiBcIi4vY2xpZW50L2NhdGVnb3JpZXMvaW5kZXguanNcIixcblx0XCIuL2NvbXBvbmVudHMvY2FsZW5kYXIvXCI6IFwiLi9jbGllbnQvY29tcG9uZW50cy9jYWxlbmRhci9pbmRleC5qc1wiLFxuXHRcIi4vY29tcG9uZW50cy9tb250aC1waWNrZXIvXCI6IFwiLi9jbGllbnQvY29tcG9uZW50cy9tb250aC1waWNrZXIvaW5kZXguanNcIixcblx0XCIuL2NvbXBvbmVudHMvdWktZGlhbG9nL1wiOiBcIi4vY2xpZW50L2NvbXBvbmVudHMvdWktZGlhbG9nL2luZGV4LmpzXCIsXG5cdFwiLi9jb21wb25lbnRzL3VpLW1zZ2JveC9cIjogXCIuL2NsaWVudC9jb21wb25lbnRzL3VpLW1zZ2JveC9pbmRleC5qc1wiLFxuXHRcIi4vY29tcG9uZW50cy91aS10b2FzdC9cIjogXCIuL2NsaWVudC9jb21wb25lbnRzL3VpLXRvYXN0L2luZGV4LmpzXCIsXG5cdFwiLi9jb21wb25lbnRzL3llYXItcGlja2VyL1wiOiBcIi4vY2xpZW50L2NvbXBvbmVudHMveWVhci1waWNrZXIvaW5kZXguanNcIixcblx0XCIuL2NvcmUvXCI6IFwiLi9jbGllbnQvY29yZS9pbmRleC5qc1wiLFxuXHRcIi4vY29yZS91dGlsL1wiOiBcIi4vY2xpZW50L2NvcmUvdXRpbC9pbmRleC5qc1wiLFxuXHRcIi4vaGVhZGVyL1wiOiBcIi4vY2xpZW50L2hlYWRlci9pbmRleC5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHRyZXR1cm4gbW9kdWxlO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIG1vZHVsZSBcIicgKyByZXEgKyAnXCIuJyk7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9jbGllbnQgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwvJFwiOyIsInZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlVXJsLmpzXCIpKFxuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIilcbiwge1wiaG1yXCI6dHJ1ZX0pO1xuaWYobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZShyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIikpO1xuICB9KTtcblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJyZXF1aXJlKCcuL2luZGV4LmNzcycpO1xuXG5cbmZ1bmN0aW9uIGluaXQgKCkge1xuXHRjb25zb2xlLmxvZygnY2FsZW5kYXIgc2lkZWJhciBpcyByZWFkeSEnKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGluaXRcbn07XG4iLCJ2YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZVVybC5qc1wiKShcbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCIpXG4sIHtcImhtclwiOnRydWV9KTtcbmlmKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCIpKTtcbiAgfSk7XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwicmVxdWlyZSgnLi9pbmRleC5jc3MnKTtcblxuXG5mdW5jdGlvbiBpbml0ICgpIHtcblx0Y29uc29sZS5sb2coJ2NhdGVnb3JpZXMgc2lkZWJhciByZWFkeSEnKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGluaXRcbn07XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jYWxlbmRhciB7XFxuXFx0LS1maXJzdC1kYXk6IDE7XFxuXFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXHRjdXJzb3I6IGRlZmF1bHQ7XFxuXFx0d2lkdGg6IGluaGVyaXQ7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGZvbnQ6IG5vcm1hbCAxZW0gc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNhbGVuZGFyIC5kYXktY2FyZCB7XFxuXFx0cGFkZGluZzogMjBweCAwIDMycHg7XFxuXFx0bWFyZ2luLWJvdHRvbTogMnB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kOiAjY2VlO1xcbn1cXG5cXG4uY2FsZW5kYXIgaDEsXFxuLmNhbGVuZGFyIGgyIHsgbWFyZ2luOiAwOyBsaW5lLWhlaWdodDogMTsgZm9udDogaW5oZXJpdDsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcbi5jYWxlbmRhciBoMSB7IGZvbnQtc2l6ZTogNC42ZW07IH1cXG5cXG4uY2FsZW5kYXIgbmF2IHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0bWFyZ2luOiAwO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC1nYXA6IDA7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXG59XFxuXFxuLmNhbGVuZGFyIGEge1xcblxcdHBhZGRpbmc6IDVweCA1cHggM3B4IDA7XFxuXFx0dGV4dC1hbGlnbjogcmlnaHQ7XFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uY2FsZW5kYXIgLm1vbnRocyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRtYXJnaW46IC0yMHB4IDAgMDtcXG5cXHRwYWRkaW5nOiAwIDVweDtcXG59XFxuLmNhbGVuZGFyIC5tb250aHMgYSB7IHBhZGRpbmc6IDNweCAwOyB9XFxuXFxuLmNhbGVuZGFyIC53ZWVrZGF5cyB7IGJvcmRlci10b3A6IDFweCBzb2xpZCAjODg4OyBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzg4ODsgfVxcbi5jYWxlbmRhciAud2Vla2RheXMgYSB7IGJhY2tncm91bmQ6ICNjY2M7IH1cXG5cXG4uY2FsZW5kYXIgLm1vbnRocyBhLFxcbi5jYWxlbmRhciAuZGF5cyBhIHsgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLmNhbGVuZGFyIC5tb250aHMgYTpob3ZlcixcXG4uY2FsZW5kYXIgLmRheXMgYTpob3ZlciB7IGNvbG9yOiAjOWJmOyB9XFxuXFxuLmNhbGVuZGFyIC5zZWxlY3RlZCB7IGZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogYmx1ZSAhaW1wb3J0YW50OyB9XFxuXFxuLmRheXMtMjggLmRheS0yOSwgLmRheXMtMjggLmRheS0zMCwgLmRheXMtMjggLmRheS0zMSxcXG4uZGF5cy0yOSAuZGF5LTMwLCAuZGF5cy0yOSAuZGF5LTMxLFxcbi5kYXlzLTMwIC5kYXktMzEgeyBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmNhbGVuZGFyIC5kYXktMSB7IGdyaWQtY29sdW1uLXN0YXJ0OiB2YXIoLS1maXJzdC1kYXkpOyB9XFxuXFxuLnllYXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuXFx0anVzdGlmeS1jb250ZW50OiBlbmQ7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNXB4O1xcblxcdGxlZnQ6IDA7XFxuXFx0cmlnaHQ6IDA7XFxufVxcbi55ZWFyIC5maWxsZXIgeyBmbGV4OiAxOyB9XFxuXFxuLnllYXIgYnV0dG9uIHsgYmFja2dyb3VuZDogbm9uZTsgYm9yZGVyOiBub25lOyBjdXJzb3I6IHBvaW50ZXI7IGJvcmRlci1yYWRpdXM6IDNweDsgfVxcbi55ZWFyIGJ1dHRvbjpob3ZlciB7IGNvbG9yOiBibHVlOyB9XFxuXFxuLnllYXIgc3BhbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRwYWRkaW5nLXRvcDogM3B4O1xcblxcdG1hcmdpbjogMCAzcHg7XFxufVxcblxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjYWxlbmRhclxcXCI+PGRpdiBjbGFzcz1cXFwiZGF5LWNhcmRcXFwiPjwvZGl2PlxcblxcdDxkaXYgY2xhc3M9XFxcInllYXJcXFwiPlxcblxcdFxcdDxidXR0b24gY2xhc3M9XFxcInRvZGF5XFxcIiB0aXRsZT1cXFwiR28gdG8gdG9kYXlcXFwiPlRvZGF5PC9idXR0b24+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiZmlsbGVyXFxcIj48L2Rpdj5cXG5cXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJwcmV2LXllYXJcXFwiIHRpdGxlPVxcXCJQcmV2aW91cyB5ZWFyXFxcIj7il4A8L2J1dHRvbj5cXG5cXHRcXHQ8c3Bhbj4yMDE4PC9zcGFuPlxcblxcdFxcdDxidXR0b24gY2xhc3M9XFxcIm5leHQteWVhclxcXCIgdGl0bGU9XFxcIk5leHQgeWVhclxcXCI+4pa2PC9idXR0b24+XFxuXFx0PC9kaXY+XFxuXFx0PG5hdiBjbGFzcz1cXFwibW9udGhzXFxcIj48L25hdj48bmF2IGNsYXNzPVxcXCJ3ZWVrZGF5c1xcXCI+PC9uYXY+PG5hdiBjbGFzcz1cXFwiZGF5c1xcXCI+PC9uYXY+XFxuPC9kaXY+XCI7IiwiaW1wb3J0IHN0eWxlIGZyb20gJy4vaW5kZXguY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4Lmh0bWwnO1xuXG5jb25zdCB3ZWVrZGF5cyA9IFsnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheScsICdTdW5kYXknXTtcbmNvbnN0IG1vbnRocyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwZXJmZWN0Q2FsZW5kYXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG5cblx0Y29uc3RydWN0b3IgKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy50ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cdFx0dGhpcy50ZW1wbGF0ZS5pbm5lckhUTUwgPSBgPHN0eWxlPiR7c3R5bGV9PC9zdHlsZT4ke3RlbXBsYXRlfWA7XG5cdFx0dGhpcy50ZW1wbGF0ZUNvbnRlbnQgPSB0aGlzLnRlbXBsYXRlLmNvbnRlbnQ7XG5cdH1cblxuXHRzdGF0aWMgZ2V0IGlzICgpIHsgcmV0dXJuICdwZXJmZWN0LWNhbGVuZGFyJzsgfVxuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcyAoKSB7IHJldHVybiBbJ2RhdGUnXTsgfVxuXG5cdGNvbm5lY3RlZENhbGxiYWNrICgpIHtcblx0XHR0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcblx0XHR0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodGhpcy50ZW1wbGF0ZUNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcblx0XHR0aGlzLmVsID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5jYWxlbmRhcicpO1xuXHRcdHRoaXMuZGF5Q2FyZCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignLmRheS1jYXJkJyk7XG5cblx0XHR0aGlzLm1vbnRoc0VsID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcubW9udGhzJyk7XG5cdFx0dGhpcy53ZWVrZGF5c0VsID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcud2Vla2RheXMnKTtcblx0XHR0aGlzLmRheXNFbCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignLmRheXMnKTtcblx0XHR0aGlzLmZpbGxDYWxlbmRhcigpO1xuXG5cdFx0dGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcblx0XHRpZiAoIXRoaXMuZ2V0QXR0cmlidXRlKCdkYXRlJykpIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKCk7XG5cdH1cblxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsLCBuZXdWYWwpIHtcblx0XHRpZiAobmFtZSA9PT0gJ2RhdGUnKSB0aGlzLnVwRGF0ZShuZXdWYWwpO1xuXHR9XG5cblx0c2V0IGRhdGUgKHZhbCkge1xuXHRcdGlmICh0eXBlb2YgdmFsICE9PSAnc3RyaW5nJykgdmFsID0gdGhpcy5mb3JtYXQodmFsKTtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnZGF0ZScsIHZhbCk7XG5cdH1cblxuXHRnZXQgZGF0ZSAoKSB7IHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0ZScpOyB9XG5cblx0Z2V0IGZ1bGxEYXRlICgpIHtcblx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy5kYXRlKTtcblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kYXRlT2JqLCB7IGRhdGUsIGRhdGVTdHI6IHRoaXMuZGF0ZSB9KTtcblx0fVxuXG5cdC8vIHl5eXktbW0tZGRcblx0Zm9ybWF0IChkKSB7IHJldHVybiBkLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDEwKTsgfVxuXG5cdHVwRGF0ZSAoZGF0ZSkge1xuXHRcdGRhdGUgPSBkYXRlIHx8IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRlJyk7XG5cdFx0aWYgKCFkYXRlIHx8ICF0aGlzLmVsKSByZXR1cm47XG5cdFx0dGhpcy5yZWFsRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuXG5cdFx0Y29uc3QgeSA9IHRoaXMucmVhbERhdGUuZ2V0RnVsbFllYXIoKTtcblx0XHRjb25zdCBtID0gdGhpcy5yZWFsRGF0ZS5nZXRNb250aCgpO1xuXHRcdGNvbnN0IGQgPSB0aGlzLnJlYWxEYXRlLmdldERhdGUoKTtcblx0XHRjb25zdCBtb250aCA9IG1vbnRoc1ttXTtcblx0XHRjb25zdCBmaXJzdERheU9mTW9udGggPSBuZXcgRGF0ZShEYXRlLlVUQyh5LCBtLCAxKSkuZ2V0RGF5KCkgfHwgNztcdC8vIG1ha2UgU3VuIDcgbm90IDBcblx0XHRjb25zdCBkYXlzSW5Nb250aCA9IG5ldyBEYXRlKERhdGUuVVRDKHksIG0gKyAxLCAwKSkuZ2V0RGF0ZSgpO1xuXHRcdGNvbnN0IHdlZWtkYXkgPSB3ZWVrZGF5c1sodGhpcy5yZWFsRGF0ZS5nZXREYXkoKSB8fCA3KSAtIDFdO1xuXHRcdHRoaXMuZGF0ZU9iaiA9IHsgeSwgbSwgZCwgbW9udGgsIGZpcnN0RGF5T2ZNb250aCwgZGF5c0luTW9udGgsIHdlZWtkYXkgfTtcblx0XHR0aGlzLnJlbmRlcigpO1xuXHR9XG5cblx0cmVuZGVyICgpIHtcblx0XHR0aGlzLmVsLnN0eWxlLnNldFByb3BlcnR5KCctLWZpcnN0LWRheScsIHRoaXMuZGF0ZU9iai5maXJzdERheU9mTW9udGgpO1xuXHRcdHRoaXMuZWwuY2xhc3NOYW1lID0gJ2NhbGVuZGFyIGRheXMtJyArIHRoaXMuZGF0ZU9iai5kYXlzSW5Nb250aDtcblx0XHR0aGlzLmRheUNhcmQuaW5uZXJIVE1MID0gdGhpcy5nZXREYXlDYXJkKCk7XG5cdFx0dGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcueWVhciBzcGFuJykuaW5uZXJUZXh0ID0gdGhpcy5kYXRlT2JqLnk7XG5cblx0XHRpZiAodGhpcy5zZWxlY3RlZERheSkgdGhpcy5zZWxlY3RlZERheS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuXHRcdHRoaXMuc2VsZWN0ZWREYXkgPSB0aGlzLmRheXNFbC5xdWVyeVNlbGVjdG9yKCcuZGF5LScgKyB0aGlzLmRhdGVPYmouZCk7XG5cdFx0dGhpcy5zZWxlY3RlZERheS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuXG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWRNb250aCkgdGhpcy5zZWxlY3RlZE1vbnRoLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG5cdFx0dGhpcy5zZWxlY3RlZE1vbnRoID0gdGhpcy5tb250aHNFbC5xdWVyeVNlbGVjdG9yQWxsKCdhJylbdGhpcy5kYXRlT2JqLm1dO1xuXHRcdHRoaXMuc2VsZWN0ZWRNb250aC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuXHR9XG5cblx0Z2V0RGF5Q2FyZCAoKSB7IHJldHVybiBgPGgxPiR7dGhpcy5kYXRlT2JqLmR9PC9oMT48aDI+JHt0aGlzLmRhdGVPYmoud2Vla2RheX08L2gyPmA7IH1cblxuXHRmaWxsQ2FsZW5kYXIgKCkge1xuXHRcdHRoaXMubW9udGhzRWwuaW5uZXJIVE1MID0gbW9udGhzLm1hcChtID0+IGA8YSBocmVmPVwiIyR7bX1cIj4ke20uc3Vic3RyKDAsIDMpfTwvYT5gKS5qb2luKCcnKTtcblx0XHR0aGlzLndlZWtkYXlzRWwuaW5uZXJIVE1MID0gd2Vla2RheXMubWFwKG0gPT4gYDxhPiR7bS5zdWJzdHIoMCwgMyl9PC9hPmApLmpvaW4oJycpO1xuXHRcdGNvbnN0IGRheXMgPSBBcnJheSgzMSkuZmlsbCgwKS5tYXAoKG4sIGkpID0+IGkgKyAxKS5tYXAoaSA9PiBgPGEgaHJlZj1cIiMke2l9XCIgY2xhc3M9XCJkYXktJHtpfVwiPiR7aX08L2E+YCk7XG5cdFx0dGhpcy5kYXlzRWwuaW5uZXJIVE1MID0gZGF5cy5qb2luKCcnKTtcblx0fVxuXG5cdHNldERhdGUgKHkgPSB0aGlzLmRhdGVPYmoueSwgbSA9IHRoaXMuZGF0ZU9iai5tLCBkID0gdGhpcy5kYXRlT2JqLmQpIHtcblx0XHRpZiAoeSBpbnN0YW5jZW9mIERhdGUpIHJldHVybiB0aGlzLnNldERhdGUoeS5nZXRGdWxsWWVhcigpLCB5LmdldE1vbnRoKCksIHkuZ2V0RGF0ZSgpKTtcblx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoeSwgbSwgZCkpO1xuXHRcdGlmIChkYXRlICE9PSB0aGlzLnJlYWxEYXRlKSB7XG5cdFx0XHR0aGlzLmRhdGUgPSBkYXRlO1xuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlJywgeyBkZXRhaWw6IHRoaXMuZnVsbERhdGUgfSkpO1xuXHRcdH1cblx0fVxuXG5cdG9uQ2xpY2sgKGUpIHtcblx0XHRjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcblx0XHRjb25zdCBkYXlFbCA9IHRhcmdldC5jbG9zZXN0KCcuZGF5cyBhJyk7XG5cdFx0aWYgKGRheUVsKSB7XG5cdFx0XHRjb25zdCBkYXlFbHMgPSB0aGlzLmRheXNFbC5jaGlsZHJlbjtcblx0XHRcdGNvbnN0IGRheSA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoZGF5RWxzLCBkYXlFbCkgKyAxO1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0cmV0dXJuIHRoaXMuc2V0RGF0ZSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgZGF5KTtcblx0XHR9XG5cblx0XHRjb25zdCBtb250aEVsID0gdGFyZ2V0LmNsb3Nlc3QoJy5tb250aHMgYScpO1xuXHRcdGlmIChtb250aEVsKSB7XG5cdFx0XHRjb25zdCBtb250aHNFbHMgPSBtb250aEVsLnBhcmVudE5vZGUuY2hpbGRyZW47XG5cdFx0XHRjb25zdCBtb250aCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwobW9udGhzRWxzLCBtb250aEVsKTtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHJldHVybiB0aGlzLnNldERhdGUodW5kZWZpbmVkLCBtb250aCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdG9kYXkgPSB0YXJnZXQuY2xvc2VzdCgnLnRvZGF5Jyk7XG5cdFx0aWYgKHRvZGF5KSByZXR1cm4gdGhpcy5zZXREYXRlKG5ldyBEYXRlKCkpO1xuXG5cdFx0Y29uc3QgcHJldlllYXIgPSB0YXJnZXQuY2xvc2VzdCgnLnByZXYteWVhcicpO1xuXHRcdGlmIChwcmV2WWVhcikgcmV0dXJuIHRoaXMuc2V0RGF0ZSh0aGlzLmRhdGVPYmoueSAtIDEpO1xuXG5cdFx0Y29uc3QgbmV4dFllYXIgPSB0YXJnZXQuY2xvc2VzdCgnLm5leHQteWVhcicpO1xuXHRcdGlmIChuZXh0WWVhcikgcmV0dXJuIHRoaXMuc2V0RGF0ZSh0aGlzLmRhdGVPYmoueSArIDEpO1xuXHR9XG5cbn1cblxuLy8gY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdwZXJmZWN0LWNhbGVuZGFyJywgcGVyZmVjdENhbGVuZGFyKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLm1vbnRoLXBpY2tlciB7XFxuXFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0d2lkdGg6IGluaGVyaXQ7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG59XFxuXFxuXFxuLm1vbnRoIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcdGZsZXg6IDE7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuXFx0Ym9yZGVyLXdpZHRoOiAwIDFweDtcXG5cXHRwYWRkaW5nLXRvcDogMnB4O1xcblxcdGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcXG59XFxuXFxuXFxuLm1vbnRoLnNlbGVjdGVkIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7XFxuXFx0Ym9yZGVyLWNvbG9yOiAjNDQ0O1xcblxcdGNvbG9yOiByZ2JhKDAsMCwwLDEpO1xcbn1cXG5cXG5cXG4ubW9udGguY3VycmVudDo6YWZ0ZXIge1xcblxcdC0tZG90LXNpemU6IDdweDtcXG5cXG5cXHRjb250ZW50OiAnJztcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHR3aWR0aDogdmFyKC0tZG90LXNpemUpO1xcblxcdGhlaWdodDogdmFyKC0tZG90LXNpemUpO1xcblxcdGJvcmRlci1yYWRpdXM6IHZhcigtLWRvdC1zaXplKTtcXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzIwNURGRkZGLCAjMTg0QUNBRkYpO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRib3R0b206IDNweDtcXG5cXHRsZWZ0OiA1MCU7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcblxcdG9wYWNpdHk6IDAuODtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiaW1wb3J0IHN0eWxlIGZyb20gJy4vaW5kZXguY3NzJztcbmNvbnN0IG1vbnRocyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddO1xuXG5jb25zdCBjdXJyZW50TW9udGggPSAobmV3IERhdGUoKSkuZ2V0TW9udGgoKTtcblxuZnVuY3Rpb24gYnRuVGVtcGxhdGUgKG1vbnRoLCBpKSB7XG5cdGNvbnN0IGNscyA9IFsnbW9udGgnLCAnbW9udGgtJyArIG1vbnRoLnRvTG93ZXJDYXNlKCksICdtb250aC0nICsgKGkgKyAxKSBdO1xuXHRpZiAoaSA9PT0gY3VycmVudE1vbnRoKSBjbHMucHVzaCgnY3VycmVudCcpO1xuXHRyZXR1cm4gYDxidXR0b24gY2xhc3M9XCIke2Nscy5qb2luKCcgJyl9XCIgZGF0YS12YWx1ZT1cIiR7aSArIDF9XCI+JHttb250aC5zdWJzdHIoMCwgMyl9PC9idXR0b24+YDtcbn1cblxuXG5cbmNsYXNzIG1vbnRoUGlja2VyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXG5cdGNvbnN0cnVjdG9yICgpIHtcblx0XHRzdXBlcigpO1xuXHRcdGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblx0XHR0ZW1wbGF0ZS5pbm5lckhUTUwgPSBgPHN0eWxlPiR7c3R5bGV9PC9zdHlsZT4ke3RoaXMudGVtcGxhdGUoKX1gO1xuXHRcdHRoaXMudGVtcGxhdGVDb250ZW50ID0gdGVtcGxhdGUuY29udGVudDtcblx0fVxuXG5cdHN0YXRpYyBnZXQgaXMgKCkgeyByZXR1cm4gJ21vbnRoLXBpY2tlcic7IH1cblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMgKCkgeyByZXR1cm4gWyd2YWx1ZSddOyB9XG5cblx0Y29ubmVjdGVkQ2FsbGJhY2sgKCkge1xuXHRcdHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuXHRcdHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0aGlzLnRlbXBsYXRlQ29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuXHRcdHRoaXMuZWwgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLm1vbnRoLXBpY2tlcicpO1xuXHRcdHRoaXMuaW5wdXRFbCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAwKTtcblxuXHRcdHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSk7XG5cdFx0aWYgKCF0aGlzLmdldEF0dHJpYnV0ZSgndmFsdWUnKSkgdGhpcy52YWx1ZSA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDE7XG5cdH1cblxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgKG5hbWUsIG9sZFZhbCwgbmV3VmFsKSB7XG5cdFx0aWYgKG5hbWUgPT09ICd2YWx1ZScpIHRoaXMudXBkYXRlKG5ld1ZhbCk7XG5cdH1cblxuXG5cdHRlbXBsYXRlICgpIHtcblx0XHRjb25zdCBtb250aHNIdG1sID0gbW9udGhzLm1hcChidG5UZW1wbGF0ZSkuam9pbignJyk7XG5cdFx0cmV0dXJuIGA8ZGl2IGNsYXNzPVwibW9udGgtcGlja2VyXCI+JHttb250aHNIdG1sfTwvZGl2PmA7XG5cdH1cblxuXHRzZXQgdmFsdWUgKHZhbHVlKSB7IHRoaXMuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKTsgfVxuXG5cdGdldCB2YWx1ZSAoKSB7IHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndmFsdWUnKTsgfVxuXG5cdHVwZGF0ZSAodmFsdWUpIHtcblx0XHRsZXQgc2VsZWN0ZWQgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb250aC5zZWxlY3RlZCcpO1xuXHRcdHNlbGVjdGVkLmZvckVhY2goYnRuID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpKTtcblx0XHRzZWxlY3RlZCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignLm1vbnRoLScgKyB2YWx1ZSk7XG5cdFx0aWYgKHNlbGVjdGVkKSBzZWxlY3RlZC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuXHR9XG5cblx0b25DbGljayAoZSkge1xuXHRcdGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuXG5cdFx0Y29uc3QgbW9udGhCdXR0b24gPSB0YXJnZXQuY2xvc2VzdCgnLm1vbnRoJyk7XG5cdFx0aWYgKG1vbnRoQnV0dG9uKSB7XG5cdFx0XHRjb25zdCB2YWwgPSBtb250aEJ1dHRvbi5kYXRhc2V0LnZhbHVlO1xuXHRcdFx0dGhpcy52YWx1ZSA9IHZhbDtcblx0XHRcdHRoaXMuZmlyZUV2ZW50KCdjaGFuZ2UnLCB7IHZhbHVlOiBwYXJzZUludCh2YWwsIDEwKSwgbW9udGg6IG1vbnRoc1t2YWwgLSAxXSB9KTtcblx0XHR9XG5cdH1cblxuXHRmaXJlRXZlbnQgKG5hbWUsIGRldGFpbCkge1xuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQobmFtZSwgeyBkZXRhaWwgfSkpO1xuXHR9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdtb250aC1waWNrZXInLCBtb250aFBpY2tlcik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi51aS1kaWFsb2cge1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHRsZWZ0OiAwO1xcblxcdHJpZ2h0OiAwO1xcblxcdGJvdHRvbTogMDtcXG5cXHR0b3A6IDA7XFxuXFx0cGFkZGluZzogNTBweDtcXG5cXHR6LWluZGV4OiA5OTk7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdG1heC1oZWlnaHQ6IDEwMHZ3O1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0b3BhY2l0eTogMDtcXG59XFxuXFxuLnVpLWRpYWxvZy1iYWNrZHJvcCB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGxlZnQ6IDA7XFxuXFx0dG9wOiAwO1xcblxcdG1pbi13aWR0aDogMTAwJTtcXG5cXHRtaW4taGVpZ2h0OiAxMDAlO1xcblxcdGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjMpO1xcbn1cXG5cXG4udWktZGlhbG9nLWNvbnRlbnQge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR6LWluZGV4OiA5O1xcblxcdHdpZHRoOiA0MDBweDtcXG5cXHRtaW4taGVpZ2h0OiAxMDBweDtcXG5cXHRtYXgtaGVpZ2h0OiAzMDBweDtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdG1hcmdpbi10b3A6IC0xMCU7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0Ym9yZGVyLXJhZGl1czogM3B4O1xcblxcdGJveC1zaGFkb3c6IDAgM3B4IDVweCAxcHggcmdiYSgwLDAsMCwwLjQpO1xcbn1cXG5cXG4udWktZGlhbG9nLWNvbnRlbnQtaW5uZXIge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4udWktZGlhbG9nLnZpc2libGUgeyBkaXNwbGF5OiBmbGV4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInVpLWRpYWxvZ1xcXCI+XFxuXFx0PGRpdiBjbGFzcz1cXFwidWktZGlhbG9nLWJhY2tkcm9wXFxcIiB0YWJpbmRleD1cXFwiMFxcXCI+PC9kaXY+XFxuXFx0PGRpdiBjbGFzcz1cXFwidWktZGlhbG9nLWNvbnRlbnRcXFwiIHRhYmluZGV4PVxcXCIwXFxcIj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ1aS1kaWFsb2ctY29udGVudC1pbm5lclxcXCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxcblxcdDwvZGl2PlxcblxcdDxkaXYgY2xhc3M9XFxcInVpLWRpYWxvZy1mb2N1cy1ndWFyZFxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiPjwvZGl2PlxcbjwvZGl2PlxcblwiOyIsImltcG9ydCBzdHlsZSBmcm9tICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC5odG1sJztcblxuXG5jb25zdCBGT0NVU0FCTEVfU0VMRUNUT1JTID0gYFxuXHRhW2hyZWZdOm5vdChbdGFiaW5kZXg9XCItMVwiXSksXG5cdGlucHV0Om5vdChbZGlzYWJsZWRdKTpub3QoW3RhYmluZGV4PVwiLTFcIl0pLFxuXHRzZWxlY3Q6bm90KFtkaXNhYmxlZF0pOm5vdChbdGFiaW5kZXg9XCItMVwiXSksXG5cdHRleHRhcmVhOm5vdChbZGlzYWJsZWRdKTpub3QoW3RhYmluZGV4PVwiLTFcIl0pLFxuXHRidXR0b246bm90KFtkaXNhYmxlZF0pOm5vdChbdGFiaW5kZXg9XCItMVwiXSksXG5cdGlmcmFtZTpub3QoW3RhYmluZGV4PVwiLTFcIl0pLFxuXHRbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSksXG5cdFtjb250ZW50RWRpdGFibGVdOm5vdChbdGFiaW5kZXg9XCItMVwiXSlcbmA7XG5cblxuY29uc3QgQU5JTV9DRkcgPSB7ZHVyYXRpb246IDMwMCwgZWFzaW5nOiAnZWFzZS1vdXQnLCBmaWxsOiAnZm9yd2FyZHMnfTtcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB1aURpYWxvZyBleHRlbmRzIEhUTUxFbGVtZW50IHtcblxuXHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMudGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXHRcdHRoaXMudGVtcGxhdGUuaW5uZXJIVE1MID0gYDxzdHlsZT4ke3N0eWxlfTwvc3R5bGU+JHt0ZW1wbGF0ZX1gO1xuXHRcdHRoaXMudGVtcGxhdGVDb250ZW50ID0gdGhpcy50ZW1wbGF0ZS5jb250ZW50O1xuXG5cdFx0dGhpcy5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMub25Db250ZW50Q2hhbmdlLmJpbmQodGhpcykpO1xuXHR9XG5cblx0c3RhdGljIGdldCBpcyAoKSB7IHJldHVybiAndWktZGlhbG9nJzsgfVxuXG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzICgpIHtcblx0XHRyZXR1cm4gWydvcGVuJ107XG5cdH1cblxuXHRjb25uZWN0ZWRDYWxsYmFjayAoKSB7XG5cdFx0dGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cdFx0dGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHRoaXMudGVtcGxhdGVDb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG5cdFx0dGhpcy5lbCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcudWktZGlhbG9nJyk7XG5cdFx0dGhpcy5jb250ZW50RWwgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy51aS1kaWFsb2ctY29udGVudCcpO1xuXG5cdFx0dGhpcy5vYnNlcnZlci5vYnNlcnZlKHRoaXMsIHsgYXR0cmlidXRlczogZmFsc2UsIGNoaWxkTGlzdDogdHJ1ZSB9KTtcblx0XHR0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlkb3duLmJpbmQodGhpcyksIHRydWUpO1xuXHRcdHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMub25CbHVyLmJpbmQodGhpcyksIHRydWUpO1xuXHRcdHRoaXMub25Db250ZW50Q2hhbmdlKCk7XG5cdH1cblxuXHQvLyBlbCBtb3ZlZCB0byBhIG5ldyBkb2N1bWVudFxuXHQvLyBhZG9wdGVkQ2FsbGJhY2soKSB7fVxuXG5cdC8vIGVsIHJlbW92ZWQgZnJvbSBET01cblx0ZGlzY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xuXHRcdHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHRcdGNvbnNvbGUubG9nKCdkaXNjb25uZWN0ZWRDYWxsYmFjaycpO1xuXHR9XG5cblxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsLCBuZXdWYWwpIHtcblx0XHRpZiAobmFtZSA9PT0gJ29wZW4nKSB7XG5cdFx0XHRpZiAobmV3VmFsICE9PSBudWxsKSB0aGlzLmRvT3BlbigpO1xuXHRcdFx0ZWxzZSB0aGlzLmRvQ2xvc2UoKTtcblxuXHRcdH1cblx0fVxuXG5cblx0b25DbGljayAoZSkge1xuXHRcdHRoaXMudGFiYmluZ0ZvcndhcmQgPSBudWxsO1xuXHRcdGNvbnN0IHRhciA9IGUudGFyZ2V0O1xuXHRcdGNvbnN0IGJhY2tkcm9wQ2xpY2sgPSB0YXIuY2xvc2VzdCgnLnVpLWRpYWxvZy1iYWNrZHJvcCcpO1xuXHRcdGNvbnN0IGRpYWxvZ0Nsb3NlQnRuID0gdGFyLmdldEF0dHJpYnV0ZSgnY2xvc2UtZGlhbG9nJykgIT09IG51bGw7XG5cblx0XHRpZiAoYmFja2Ryb3BDbGljayB8fCBkaWFsb2dDbG9zZUJ0bikgdGhpcy5vcGVuID0gZmFsc2U7XG5cdH1cblxuXG5cdGdldEZvY3VzYWJsZUVscyAoKSB7XG5cdFx0aWYgKCF0aGlzLmZvY3VzYWJsZUVsZW1lbnRzKSB7XG5cdFx0XHRsZXQgZWxlbXMgPSB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoRk9DVVNBQkxFX1NFTEVDVE9SUyk7XG5cdFx0XHRsZXQgZmlyc3QgPSB0aGlzLmVsLCBsYXN0ID0gdGhpcy5lbDtcblx0XHRcdGlmIChlbGVtcy5sZW5ndGgpIHtcblx0XHRcdFx0Zmlyc3QgPSBlbGVtc1swXTtcblx0XHRcdFx0bGFzdCA9IGVsZW1zW2VsZW1zLmxlbmd0aCAtIDFdO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGZpcnN0ID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcudWktZGlhbG9nLWJhY2tkcm9wJyk7XG5cdFx0XHRcdGxhc3QgPSB0aGlzLmNvbnRlbnRFbDtcblx0XHRcdH1cblx0XHRcdHRoaXMuZm9jdXNhYmxlRWxlbWVudHMgPSB7Zmlyc3QsIGxhc3R9O1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5mb2N1c2FibGVFbGVtZW50cztcblx0fVxuXG5cblx0b25CbHVyIChlKSB7XG5cdFx0aWYgKHRoaXMudGFiYmluZ0ZvcndhcmQgPT09IG51bGwpIHJldHVybjtcblxuXHRcdGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuXHRcdGNvbnN0IHtmaXJzdCwgbGFzdH0gPSB0aGlzLmdldEZvY3VzYWJsZUVscygpO1xuXHRcdGxldCBmb2N1c0VsID0gbnVsbDtcblxuXHRcdGlmICh0aGlzLnRhYmJpbmdGb3J3YXJkICYmIHRhcmdldCA9PT0gbGFzdCkgZm9jdXNFbCA9IGZpcnN0O1xuXHRcdGVsc2UgaWYgKCF0aGlzLnRhYmJpbmdGb3J3YXJkICYmIHRhcmdldCA9PT0gZmlyc3QpIGZvY3VzRWwgPSBsYXN0O1xuXG5cdFx0aWYgKGZvY3VzRWwpIHtcblx0XHRcdHRoaXMudGFiYmluZ0ZvcndhcmQgPSBudWxsO1xuXHRcdFx0Zm9jdXNFbC5mb2N1cygpO1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHR9XG5cdH1cblxuXG5cdG9uS2V5ZG93biAoZSkge1xuXHRcdGlmIChlLmtleSA9PT0gJ1RhYicpIHRoaXMudGFiYmluZ0ZvcndhcmQgPSAhZS5zaGlmdEtleTtcblx0XHRlbHNlIHtcblx0XHRcdHRoaXMudGFiYmluZ0ZvcndhcmQgPSBudWxsO1xuXHRcdFx0aWYgKGUua2V5ID09PSAnRXNjYXBlJykgdGhpcy5vcGVuID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblxuXHRvbkNvbnRlbnRDaGFuZ2UgKCkge1xuXHRcdHRoaXMuZm9jdXNhYmxlRWxlbWVudHMgPSBudWxsO1xuXHR9XG5cblxuXHRzZXQgb3BlbiAodmFsKSB7XG5cdFx0Y29uc3QgaXNPcGVuID0gQm9vbGVhbih2YWwpO1xuXHRcdGlmIChpc09wZW4pIHtcblx0XHRcdGlmICghdGhpcy50cmlnZ2VyICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHRoaXMudHJpZ2dlciA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnb3BlbicsICcnKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnb3BlbicpO1xuXHRcdFx0dGhpcy50cmlnZ2VyID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRnZXQgb3BlbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdvcGVuJyk7XG5cdH1cblxuXG5cblx0ZG9PcGVuICh0cmlnZ2VyKSB7XG5cdFx0aWYgKHRoaXMudmlzaWJsZSkgcmV0dXJuO1xuXHRcdGlmICh0cmlnZ2VyKSB0aGlzLnRyaWdnZXIgPSB0cmlnZ2VyO1xuXHRcdHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuXHRcdHRoaXMudmlzaWJsZSA9IHRydWU7XG5cdFx0dGhpcy5nZXRGb2N1c2FibGVFbHMoKS5maXJzdC5mb2N1cygpO1xuXHRcdHRoaXMuY29udGVudEVsLmFuaW1hdGUoW3t0cmFuc2Zvcm06ICdzY2FsZSguOSknfSwge3RyYW5zZm9ybTogJ3NjYWxlKDEpJ31dLCBBTklNX0NGRyk7XG5cdFx0dGhpcy5lbFxuXHRcdFx0LmFuaW1hdGUoW3sgb3BhY2l0eTogMCB9LCB7b3BhY2l0eTogMX1dLCBBTklNX0NGRylcblx0XHRcdC5vbmZpbmlzaCA9IHRoaXMub25PcGVuZWQuYmluZCh0aGlzKTtcblx0fVxuXG5cdGRvQ2xvc2UgKCkge1xuXHRcdGlmICghdGhpcy52aXNpYmxlKSByZXR1cm47XG5cdFx0aWYgKHRoaXMudHJpZ2dlcikgdGhpcy50cmlnZ2VyLmZvY3VzKCk7XG5cdFx0dGhpcy5jb250ZW50RWwuYW5pbWF0ZShbe3RyYW5zZm9ybTogJ3NjYWxlKDEpJ30sIHt0cmFuc2Zvcm06ICdzY2FsZSguOSknfV0sIEFOSU1fQ0ZHKTtcblx0XHR0aGlzLmVsXG5cdFx0XHQuYW5pbWF0ZShbeyBvcGFjaXR5OiAxIH0sIHtvcGFjaXR5OiAwfV0sIEFOSU1fQ0ZHKVxuXHRcdFx0Lm9uZmluaXNoID0gdGhpcy5vbkNsb3NlZC5iaW5kKHRoaXMpO1xuXHR9XG5cblxuXHRvbk9wZW5lZCAoKSB7XG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnb3BlbicsIHt9KSk7XG5cdH1cblxuXHRvbkNsb3NlZCAoKSB7XG5cdFx0dGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG5cdFx0dGhpcy52aXNpYmxlID0gZmFsc2U7XG5cdFx0aWYgKHRoaXMudHJpZ2dlcikgdGhpcy50cmlnZ2VyLmZvY3VzKCk7XG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2xvc2UnLCB7fSkpO1xuXHR9XG5cblxufVxuIiwiaW1wb3J0IHVpRGlhbG9nIGZyb20gJy4uL3VpLWRpYWxvZy8nO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdWlNc2dCb3ggZXh0ZW5kcyB1aURpYWxvZyB7XG5cblx0Y29uc3RydWN0b3IgKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0fVxuXG5cdHN0YXRpYyBnZXQgaXMgKCkgeyByZXR1cm4gJ3VpLW1lc3NhZ2Vib3gnOyB9XG5cblxuXHRvbkNsb3NlZCAoKSB7XG5cdFx0c3VwZXIub25DbG9zZWQoKTtcblx0XHR0aGlzLnJlbW92ZSgpO1xuXHR9XG5cbn1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnVpLXRvYXN0LXdyYXBwZXIge1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG5cXHRyaWdodDogMDtcXG5cXHR6LWluZGV4OiA5OTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0cGFkZGluZy10b3A6IDEwcHg7XFxuXFx0aGVpZ2h0OiAwO1xcbn1cXG5cXG5cXG4udWktdG9hc3Qge1xcblxcdG1pbi13aWR0aDogMjAwcHg7XFxuXFx0bWF4LXdpZHRoOiA1MCU7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0bWFyZ2luOiA1cHggYXV0bztcXG5cXHRwYWRkaW5nOiAyMHB4IDMwcHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuXFx0Y29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsIDAuOCk7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDFweCAwIHJnYmEoMCwwLDAsIDAuNSk7XFxuXFx0b3BhY2l0eTogMTtcXG5cXG59XFxuLnVpLXRvYXN0OmZvY3VzIHsgYm94LXNoYWRvdzogMCAwIDVweCAycHggcmdiYSgwLDAsMCwwLjUpOyBvdXRsaW5lOiBub25lOyB9XFxuXFxuLnVpLXRvYXN0IGVtIHtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcblxcdGNvbG9yOiAjZmZmO1xcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuXFxuLnVpLXRvYXN0LWluZm8geyBiYWNrZ3JvdW5kOiByZ2JhKDAsIDEwMCwgNTAsIDAuOCk7IH1cXG4udWktdG9hc3Qtd2FybmluZyB7IGJhY2tncm91bmQ6IHJnYmEoMTIwLCA4NiwgMCwgMC44KTsgfVxcbi51aS10b2FzdC1lcnJvciB7IGJhY2tncm91bmQ6IHJnYmEoMjAxLCA1OCwgMzEsIDAuOCk7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwidWktdG9hc3Qtd3JhcHBlclxcXCI+PC9kaXY+XFxuXCI7IiwiaW1wb3J0IHN0eWxlIGZyb20gJy4vaW5kZXguY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4Lmh0bWwnO1xuXG5cbmNvbnN0IEFOSU1fQ0ZHID0ge2R1cmF0aW9uOiAzMDAsIGVhc2luZzogJ2Vhc2Utb3V0JywgZmlsbDogJ2ZvcndhcmRzJ307XG5jb25zdCBUT0FTVF9USU1FT1VUID0gNTAwMDtcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdWlUb2FzdCBleHRlbmRzIEhUTUxFbGVtZW50IHtcblxuXHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMudGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXHRcdHRoaXMudGVtcGxhdGUuaW5uZXJIVE1MID0gYDxzdHlsZT4ke3N0eWxlfTwvc3R5bGU+JHt0ZW1wbGF0ZX1gO1xuXHRcdHRoaXMudGVtcGxhdGVDb250ZW50ID0gdGhpcy50ZW1wbGF0ZS5jb250ZW50O1xuXHR9XG5cblx0c3RhdGljIGdldCBpcyAoKSB7IHJldHVybiAndWktdG9hc3QnOyB9XG5cblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMgKCkge31cblxuXHRjb25uZWN0ZWRDYWxsYmFjayAoKSB7XG5cdFx0dGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cdFx0dGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHRoaXMudGVtcGxhdGVDb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG5cdFx0dGhpcy5lbCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcudWktdG9hc3Qtd3JhcHBlcicpO1xuXHRcdHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleWRvd24uYmluZCh0aGlzKSwgdHJ1ZSk7XG5cdH1cblxuXG5cdHNob3cgKHsgbXNnID0gJycsIHR5cGUgPSAnaW5mbycsIGF1dG9jbG9zZSA9IHRydWUgfSkge1xuXHRcdGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB0aGlzLnRyaWdnZXIgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXHRcdGNvbnN0IHRvYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dG9hc3Quc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDApO1xuXHRcdHRvYXN0LmNsYXNzTmFtZSA9IGB1aS10b2FzdCB1aS10b2FzdC0ke3R5cGV9YDtcblx0XHR0b2FzdC5pbm5lckhUTUwgPSBtc2c7XG5cdFx0dGhpcy5lbC5hcHBlbmRDaGlsZCh0b2FzdCk7XG5cdFx0dG9hc3QuZm9jdXMoKTtcblxuXHRcdGNvbnN0IFRPQVNUSCA9IHRvYXN0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblx0XHRjb25zdCBwcm9wcyA9IFtcblx0XHRcdHtvcGFjaXR5OiAwLCBtYXJnaW5Ub3A6IGAtJHtUT0FTVEh9cHhgLCB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJ30sXG5cdFx0XHR7b3BhY2l0eTogMSwgbWFyZ2luVG9wOiAwLCB0cmFuc2Zvcm06ICdzY2FsZSgxKSd9XG5cdFx0XTtcblx0XHRjb25zdCBhbmltID0gdG9hc3QuYW5pbWF0ZShwcm9wcywgQU5JTV9DRkcpO1xuXHRcdGlmIChhdXRvY2xvc2UpIHtcblx0XHRcdGFuaW0ub25maW5pc2ggPSAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaGlkZSh0b2FzdCksIFRPQVNUX1RJTUVPVVQpO1xuXHRcdH1cblx0fVxuXG5cblx0aGlkZSAodG9hc3QpIHtcblx0XHRjb25zdCBUT0FTVEggPSB0b2FzdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cdFx0dG9hc3QuY2xhc3NMaXN0LmFkZCgndWktdG9hc3QtaGlkaW5nJyk7XG5cdFx0Y29uc3QgcHJvcHMgPSBbXG5cdFx0XHR7b3BhY2l0eTogMSwgbWFyZ2luVG9wOiAwLCB0cmFuc2Zvcm06ICdzY2FsZSgxKSd9LFxuXHRcdFx0e29wYWNpdHk6IDAsIG1hcmdpblRvcDogYC0ke1RPQVNUSH1weGAsIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknfVxuXHRcdF07XG5cdFx0Y29uc3QgYW5pbSA9IHRvYXN0LmFuaW1hdGUocHJvcHMsIEFOSU1fQ0ZHKTtcblx0XHRhbmltLm9uZmluaXNoID0gKCkgPT4gdG9hc3QucmVtb3ZlKCk7XG5cblx0XHRjb25zdCB0b2FzdHMgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy51aS10b2FzdDpub3QoLnVpLXRvYXN0LWhpZGluZyknKTtcblx0XHRpZiAodG9hc3RzLmxlbmd0aCkgdG9hc3RzW3RvYXN0cy5sZW5ndGggLSAxXS5mb2N1cygpO1xuXHRcdGVsc2UgaWYgKHRoaXMudHJpZ2dlcikgdGhpcy50cmlnZ2VyLmZvY3VzKCk7XG5cdH1cblxuXG5cdG9uQ2xpY2sgKGUpIHtcblx0XHRjb25zdCB0b2FzdCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy51aS10b2FzdCcpO1xuXHRcdGlmICh0b2FzdCkgdGhpcy5oaWRlKHRvYXN0KTtcblx0fVxuXG5cblx0b25LZXlkb3duIChlKSB7XG5cdFx0aWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuXHRcdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRoaXMub25DbGljayhlKTtcblx0XHR9XG5cdH1cblxuXG5cblxufVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIueWVhci1waWNrZXIge1xcblxcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0d2lkdGg6IGluaGVyaXQ7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xcbn1cXG5cXG4ueWVhci1waWNrZXIgaW5wdXQge1xcblxcdGFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG5cXHQtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHRtaW4td2lkdGg6IDNlbTtcXG5cXHRwYWRkaW5nOiAzcHggMCAxcHg7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcdGZsZXg6IDE7XFxufVxcblxcbi55ZWFyLXBpY2tlciAuYnRuIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cGFkZGluZy1ib3R0b206IDFweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInllYXItcGlja2VyXFxcIj5cXG5cXHQ8YnV0dG9uIGNsYXNzPVxcXCJidG4gcHJldi15ZWFyXFxcIiB0aXRsZT1cXFwiUHJldmlvdXMgeWVhclxcXCI+4peAPC9idXR0b24+XFxuXFx0PGlucHV0IGNsYXNzPVxcXCJidG5cXFwiIHR5cGU9XFxcIm51bWJlclxcXCI+XFxuXFx0PGJ1dHRvbiBjbGFzcz1cXFwiYnRuIG5leHQteWVhclxcXCIgdGl0bGU9XFxcIk5leHQgeWVhclxcXCI+4pa2PC9idXR0b24+XFxuPC9kaXY+XCI7IiwiaW1wb3J0IHN0eWxlIGZyb20gJy4vaW5kZXguY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4Lmh0bWwnO1xuXG5jbGFzcyB5ZWFyUGlja2VyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXG5cdGNvbnN0cnVjdG9yICgpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMudGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXHRcdHRoaXMudGVtcGxhdGUuaW5uZXJIVE1MID0gYDxzdHlsZT4ke3N0eWxlfTwvc3R5bGU+JHt0ZW1wbGF0ZX1gO1xuXHRcdHRoaXMudGVtcGxhdGVDb250ZW50ID0gdGhpcy50ZW1wbGF0ZS5jb250ZW50O1xuXHR9XG5cblx0c3RhdGljIGdldCBpcyAoKSB7IHJldHVybiAneWVhci1waWNrZXInOyB9XG5cblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMgKCkgeyByZXR1cm4gWyd2YWx1ZSddOyB9XG5cblx0Y29ubmVjdGVkQ2FsbGJhY2sgKCkge1xuXHRcdHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuXHRcdHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0aGlzLnRlbXBsYXRlQ29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuXHRcdHRoaXMuZWwgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLnllYXItcGlja2VyJyk7XG5cdFx0dGhpcy5pbnB1dEVsID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDApO1xuXG5cdFx0dGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLm9uSW5wdXQuYmluZCh0aGlzKSk7XG5cdFx0aWYgKCF0aGlzLmdldEF0dHJpYnV0ZSgndmFsdWUnKSkgdGhpcy52YWx1ZSA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcblx0fVxuXG5cdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayAobmFtZSwgb2xkVmFsLCBuZXdWYWwpIHtcblx0XHRpZiAobmFtZSA9PT0gJ3ZhbHVlJykgdGhpcy51cGRhdGUobmV3VmFsKTtcblx0fVxuXG5cblx0c2V0IHZhbHVlICh2YWwpIHsgdGhpcy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsKTsgfVxuXG5cdGdldCB2YWx1ZSAoKSB7IHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndmFsdWUnKTsgfVxuXG5cdHVwZGF0ZSAodmFsKSB7IHRoaXMuaW5wdXRFbC52YWx1ZSA9IHZhbDsgfVxuXG5cdGFkZFRvVmFsdWUgKHZhbCkge1xuXHRcdGNvbnN0IHZhbHVlID0gcGFyc2VJbnQodGhpcy52YWx1ZSwgMTApICsgdmFsO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0XHR0aGlzLmZpcmVFdmVudCgnY2hhbmdlJywgeyB2YWx1ZSB9KTtcblx0fVxuXG5cdG9uSW5wdXQgKCkge1xuXHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHBhcnNlSW50KHRoaXMudmFsdWUsIDEwKTtcblx0XHRjb25zdCB2YWx1ZSA9IHBhcnNlSW50KHRoaXMuaW5wdXRFbC52YWx1ZSwgMTApO1xuXHRcdGlmIChjdXJyZW50VmFsdWUgIT09IHZhbHVlKSB7XG5cdFx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdFx0XHR0aGlzLmZpcmVFdmVudCgnY2hhbmdlJywgeyB2YWx1ZSB9KTtcblx0XHR9XG5cdH1cblxuXHRvbkNsaWNrIChlKSB7XG5cdFx0Y29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG5cdFx0aWYgKHRhcmdldC5jbG9zZXN0KCcucHJldi15ZWFyJykpIHJldHVybiB0aGlzLmFkZFRvVmFsdWUoLTEpO1xuXHRcdGlmICh0YXJnZXQuY2xvc2VzdCgnLm5leHQteWVhcicpKSByZXR1cm4gdGhpcy5hZGRUb1ZhbHVlKDEpO1xuXHR9XG5cblx0ZmlyZUV2ZW50IChuYW1lLCBkZXRhaWwpIHtcblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KG5hbWUsIHsgZGV0YWlsIH0pKTtcblx0fVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgneWVhci1waWNrZXInLCB5ZWFyUGlja2VyKTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXG5cdGRvY3VtZW50OiB7XG5cdFx0Y2xpY2tlZDogJ2RvY3VtZW50LWNsaWNrZWQnLFxuXHRcdGtleXVwOiAnZG9jdW1lbnQta2V5dXAnXG5cdH0sXG5cblx0dG9hc3Q6IHtcblx0XHRpbmZvOiAndG9hc3QtaW5mbycsXG5cdFx0ZXJyb3I6ICd0b2FzdC1lcnJvcicsXG5cdFx0d2FybmluZzogJ3RvYXN0LXdhcm5pbmcnLFxuXHR9LFxuXG59O1xuIiwiXG5cbi8vIGZ1bmN0aW9uIGluaXQgKGNvbXBvbmVudHMsIHBhdGggPSAnLi4vJykge1xuLy8gXHRjb21wb25lbnRzID0gWy4uLm5ldyBTZXQoY29tcG9uZW50cyldO1x0Ly8gdW5pcXVlXG4vLyBcdGNvbXBvbmVudHMuZm9yRWFjaChjID0+IHtcbi8vIFx0XHRjb25zdCBtID0gcmVxdWlyZShwYXRoICsgYyk7XG4vLyBcdFx0aWYgKG0gJiYgbS5pbml0KSBtLmluaXQoKTtcbi8vIFx0fSk7XG5cbi8vIFx0d2luZG93LmZvY3VzKCk7XG4vLyB9XG5cblxuLy8gbW9kdWxlLmV4cG9ydHMgPSB7XG5cbi8vIFx0aW5pdFxuLy8gfTtcbiIsImNvbnN0IEVWRU5UID0gcmVxdWlyZSgnLi9ldmVudHMnKTtcbmNvbnN0IGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyJyk7XG5jb25zdCAkID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHQkLFxuXHRoZWxwZXIsXG5cdEVWRU5ULFxufTtcbiIsImNvbnN0IHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuY29uc3QgYmFzZVVybCA9ICcnO1xuXG5mdW5jdGlvbiBhamF4IChvcHRpb25zKSB7XG5cdGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIG9wdGlvbnMgPSB7IHVybDogb3B0aW9ucyB9O1xuXG5cdGxldCByZXNwO1xuXHRsZXQgZGF0YSA9IG9wdGlvbnMuZGF0YSB8fCAnJztcblx0Y29uc3QgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cblx0b3B0aW9ucy51cmwgPSBiYXNlVXJsICsgb3B0aW9ucy51cmw7XG5cdG9wdGlvbnMubWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgJ0dFVCc7XG5cdG9wdGlvbnMudHlwZSA9IG9wdGlvbnMudHlwZSB8fCAnanNvbic7XG5cblx0aWYgKGRhdGEpIHtcblx0XHRpZiAob3B0aW9ucy5tZXRob2QudG9Mb3dlckNhc2UoKSA9PT0gJ2dldCcpIG9wdGlvbnMudXJsICs9IHV0aWwuc2VyaWFsaXplKGRhdGEpO1xuXHRcdGVsc2UgaWYgKG9wdGlvbnMudHlwZSA9PT0gJ2pzb24nKSBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG5cdH1cblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRyZXEub3BlbihvcHRpb25zLm1ldGhvZCwgb3B0aW9ucy51cmwsIHRydWUpO1xuXHRcdHJlcS5vbmxvYWQgPSAoKSA9PiB7XG5cdFx0XHRpZiAocmVxLnN0YXR1cyA+PSAyMDAgJiYgcmVxLnN0YXR1cyA8IDQwMCkge1xuXHRcdFx0XHR0cnkgeyByZXNwID0gSlNPTi5wYXJzZShyZXEucmVzcG9uc2VUZXh0KTsgfVxuXHRcdFx0XHRjYXRjaCAoZSkgeyByZXNwID0gcmVxLnJlc3BvbnNlVGV4dDsgfVxuXHRcdFx0XHRyZXNvbHZlKHJlc3ApO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSByZWplY3QocmVxLnN0YXR1c1RleHQpO1xuXHRcdH07XG5cdFx0cmVxLm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxLnN0YXR1c1RleHQpO1xuXHRcdHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCBgYXBwbGljYXRpb24vJHtvcHRpb25zLnR5cGV9OyBjaGFyc2V0PVVURi04YCk7XG5cdFx0cmVxLnNlbmQoZGF0YSk7XG5cdH0pO1xufVxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGFqYXgsXG5cdGdldDogKHVybCwgZGF0YSkgPT4gYWpheCh7IHVybCwgZGF0YTogZGF0YSB8fCB7fSB9KSxcblx0cG9zdDogKHVybCwgZGF0YSkgPT4gYWpheCh7IHVybCwgZGF0YTogZGF0YSB8fCB7fSwgbWV0aG9kOiAnUE9TVCcgfSksXG5cdHB1dDogKHVybCwgZGF0YSkgPT4gYWpheCh7IHVybCwgZGF0YTogZGF0YSB8fCB7fSwgbWV0aG9kOiAnUFVUJyB9KSxcblx0ZGVsOiAodXJsLCBkYXRhKSA9PiBhamF4KHsgdXJsLCBkYXRhOiBkYXRhIHx8IHt9LCBtZXRob2Q6ICdERUxFVEUnIH0pXG59O1xuIiwiY29uc3Qga2V5QnJlYWtlciA9IC9bXltcXF1dKy9nO1xuY29uc3QgbnVtYmVyTWF0Y2hlciA9IC9eWy0rXT9bMC05XSpcXC4/WzAtOV0rKFtlRV1bLStdP1swLTldKyk/JC87XG5cbmZ1bmN0aW9uIF9pc051bWJlciAodmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHJldHVybiB0cnVlO1xuXHRpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykgcmV0dXJuIGZhbHNlO1xuXHRyZXR1cm4gdmFsdWUubWF0Y2gobnVtYmVyTWF0Y2hlcik7XG59XG5cbmZ1bmN0aW9uIF9kZWNvZGVFbnRpdGllcyAoc3RyKSB7XG5cdGNvbnN0IGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ZC5pbm5lckhUTUwgPSBzdHI7XG5cdHJldHVybiBkLmlubmVyVGV4dCB8fCBkLnRleHRDb250ZW50O1xufVxuXG5mdW5jdGlvbiBfZ2V0SW5wdXRzIChmb3JtKSB7XG5cdGNvbnN0IGlucHV0cyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnW25hbWVdJyk7XG5cdHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChpbnB1dHMpIHx8IFtdO1xufVxuXG5cblxuLyoqXG4gKiBGb3JtIGNvbXBvbmVudFxuICogQHBhcmFtIHtvYmplY3R9IGVsIC0gZm9ybSBET00gZWxlbWVudFxuICovXG5mdW5jdGlvbiBGb3JtIChlbCkge1xuXHRpZiAoIWVsKSByZXR1cm4gbnVsbDtcblx0aWYgKCEodGhpcyBpbnN0YW5jZW9mIEZvcm0pKSByZXR1cm4gbmV3IEZvcm0oZWwpO1xuXHR0aGlzLmZvcm0gPSBlbDtcblx0aWYgKGVsLmVsZW1lbnRzKSB0aGlzLmlucHV0cyA9IGVsLmVsZW1lbnRzO1xufVxuXG5Gb3JtLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAocGFyYW1zID0ge30sIGNsZWFyKSB7XG5cdHRoaXMuc3VzcGVuZE9ic2VydmUgPSB0cnVlO1xuXHRpZiAodGhpcy5hbmltRnJhbWUpIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbUZyYW1lKTtcblxuXHRjb25zdCBpbnB1dHMgPSBfZ2V0SW5wdXRzKHRoaXMuZm9ybSk7XG5cdGZvciAobGV0IGlucHV0IG9mIGlucHV0cykge1xuXHRcdGNvbnN0IG5hbWUgPSBpbnB1dC5uYW1lO1xuXHRcdGxldCB2YWx1ZSA9ICh0eXBlb2YgcGFyYW1zW25hbWVdID09PSAndW5kZWZpbmVkJyA/ICcnIDogcGFyYW1zW25hbWVdKTtcblxuXHRcdC8vIGlmIG5hbWUgaXMgb2JqZWN0LCBlLmcuIHVzZXJbbmFtZV0sIHVzZXJEYXRhW2FkZHJlc3NdW3N0cmVldF0sIHVwZGF0ZSB2YWx1ZSB0byByZWFkIHRoaXMgY29ycmVjdGx5XG5cdFx0aWYgKG5hbWUuaW5kZXhPZignWycpID4gLTEpIHtcblx0XHRcdGxldCB2ID0gcGFyYW1zO1xuXHRcdFx0bGV0IG5hbWVzID0gbmFtZS5yZXBsYWNlKC9bW1xcXV0vZywgJ3wnKS5zcGxpdCgnfCcpO1xuXHRcdFx0Zm9yIChsZXQgbiBvZiBuYW1lcykge1xuXHRcdFx0XHRpZiAodltuXSkgdiA9IHZbbl07XG5cdFx0XHRcdGVsc2UgeyB2ID0gdW5kZWZpbmVkOyBicmVhazsgfVxuXHRcdFx0fVxuXHRcdFx0dmFsdWUgPSB2O1xuXHRcdH1cblxuXHRcdC8vIGlmIGNsZWFyPT10cnVlIGFuZCBubyB2YWx1ZSA9IGNsZWFyIGZpZWxkLCBvdGhlcndpc2UgLSBsZWF2ZSBpdCBhcyBpdCB3YXNcblx0XHRpZiAoY2xlYXIgIT09IHRydWUgJiYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgIXBhcmFtc1tuYW1lXSkpIGNvbnRpbnVlO1xuXG5cdFx0Ly8gaWYgbm8gdmFsdWUgLSBjbGVhciBmaWVsZFxuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB2YWx1ZSA9ICcnO1xuXG5cdFx0Ly8gZGVjb2RlIGh0bWwgc3BlY2lhbCBjaGFycyAoZW50aXRpZXMpXG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5kZXhPZignJicpID4gLTEpIHZhbHVlID0gX2RlY29kZUVudGl0aWVzKHZhbHVlKTtcblxuXHRcdGlmIChpbnB1dC50eXBlID09PSAncmFkaW8nKSBpbnB1dC5jaGVja2VkID0gKGlucHV0LnZhbHVlLnRvU3RyaW5nKCkgPT09IHZhbHVlLnRvU3RyaW5nKCkpO1xuXHRcdGVsc2UgaWYgKGlucHV0LnR5cGUgPT09ICdjaGVja2JveCcpIGlucHV0LmNoZWNrZWQgPSB2YWx1ZTtcblx0XHRlbHNlIGlmIChpbnB1dC50YWdOYW1lID09PSAnU0VMRUNUJykge1xuXHRcdFx0aWYgKHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSBpbnB1dC5zZWxlY3RlZEluZGV4ID0gMDtcblx0XHRcdGVsc2UgaW5wdXQudmFsdWUgPSB2YWx1ZTtcblx0XHR9XG5cdFx0ZWxzZSBpbnB1dC52YWx1ZSA9IHZhbHVlO1xuXHR9XG5cdHRoaXMuc3VzcGVuZE9ic2VydmUgPSBmYWxzZTtcblxuXHRyZXR1cm4gdGhpcy51cGRhdGUoKTtcbn07XG5cblxuRm9ybS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGNvbnZlcnQgPSBmYWxzZSkge1xuXHRjb25zdCBpbnB1dHMgPSBfZ2V0SW5wdXRzKHRoaXMuZm9ybSk7XG5cdGxldCBkYXRhID0ge30sIGN1cnJlbnQ7XG5cblx0Zm9yIChsZXQgaW5wdXQgb2YgaW5wdXRzKSB7XG5cdFx0bGV0IHR5cGUgPSBpbnB1dC50eXBlICYmIGlucHV0LnR5cGUudG9Mb3dlckNhc2UoKSwgdmFsdWUsIHBhcnRzLCBsYXN0UGFydCwgbGFzdDtcblxuXHRcdC8vIGlmIHdlIGFyZSBzdWJtaXQgb3IgZGlzYWJsZWQgLSBpZ25vcmVcblx0XHRpZiAoKHR5cGUgPT09ICdzdWJtaXQnKSB8fCAhaW5wdXQubmFtZSB8fCBpbnB1dC5kaXNhYmxlZCkgY29udGludWU7XG5cblx0XHR2YWx1ZSA9IGlucHV0LnZhbHVlO1xuXHRcdHBhcnRzID0gaW5wdXQubmFtZS5tYXRjaChrZXlCcmVha2VyKTtcblxuXHRcdC8vIHJldHVybiBvbmx5IFwiY2hlY2tlZFwiIHJhZGlvIHZhbHVlXG5cdFx0aWYgKHR5cGUgPT09ICdyYWRpbycgJiYgIWlucHV0LmNoZWNrZWQpIGNvbnRpbnVlO1xuXG5cdFx0Ly8gY29udmVydCBjaGVrYm94IHRvIFt0cnVlIHwgZmFsc2VdXG5cdFx0aWYgKHR5cGUgPT09ICdjaGVja2JveCcpIHZhbHVlID0gaW5wdXQuY2hlY2tlZDtcblxuXHRcdGlmIChjb252ZXJ0KSB7XG5cdFx0XHRpZiAoX2lzTnVtYmVyKHZhbHVlKSkge1xuXHRcdFx0XHRsZXQgdHYgPSBwYXJzZUZsb2F0KHZhbHVlKTtcblx0XHRcdFx0bGV0IGNtcCA9IHR2ICsgJyc7XG5cdFx0XHRcdC8vIGNvbnZlcnQgKHN0cmluZykxMDAuMDAgdG8gKGludCkxMDBcblx0XHRcdFx0aWYgKHZhbHVlLmluZGV4T2YoJy4nKSA+IDApIGNtcCA9IHR2LnRvRml4ZWQodmFsdWUuc3BsaXQoJy4nKVsxXS5sZW5ndGgpO1xuXHRcdFx0XHRpZiAoY21wID09PSB2YWx1ZSkgdmFsdWUgPSB0djtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKHZhbHVlID09PSAndHJ1ZScpIHZhbHVlID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKHZhbHVlID09PSAnZmFsc2UnKSB2YWx1ZSA9IGZhbHNlO1xuXHRcdFx0aWYgKHZhbHVlID09PSAnJykgdmFsdWUgPSBudWxsO1xuXHRcdH1cblxuXHRcdGN1cnJlbnQgPSBkYXRhO1xuXHRcdC8vIGdvIHRocm91Z2ggYW5kIGNyZWF0ZSBuZXN0ZWQgb2JqZWN0c1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0XHRjdXJyZW50W3BhcnRzW2ldXSA9IGN1cnJlbnRbcGFydHNbaV1dIHx8IHt9O1xuXHRcdFx0Y3VycmVudCA9IGN1cnJlbnRbcGFydHNbaV1dO1xuXHRcdH1cblx0XHRsYXN0UGFydCA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdO1xuXG5cdFx0Ly8gbm93IHdlIGFyZSBvbiB0aGUgbGFzdCBwYXJ0LCBzZXQgdGhlIHZhbHVlXG5cdFx0bGFzdCA9IGN1cnJlbnRbbGFzdFBhcnRdO1xuXHRcdGlmIChsYXN0KSB7XG5cdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkobGFzdCkpIGN1cnJlbnRbbGFzdFBhcnRdID0gKGxhc3QgPT09IHVuZGVmaW5lZCA/IFtdIDogW2xhc3RdKTtcblx0XHRcdGN1cnJlbnRbbGFzdFBhcnRdLnB1c2godmFsdWUpO1xuXHRcdH1cblx0XHRlbHNlIGN1cnJlbnRbbGFzdFBhcnRdID0gdmFsdWU7XG5cdH1cblxuXHRyZXR1cm4gZGF0YTtcbn07XG5cbkZvcm0ucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkgeyB0aGlzLnNldCh7fSk7IH07XG5cbkZvcm0ucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkgeyB0aGlzLnNldCh7fSwgdHJ1ZSk7IH07XG5cblxuRm9ybS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuXHRpZiAodGhpcy5hbmltRnJhbWUpIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbUZyYW1lKTtcblx0aWYgKCF0aGlzLm9ic2VydmVDYikgcmV0dXJuO1xuXHRpZiAodGhpcy5zdXNwZW5kT2JzZXJ2ZSkgcmV0dXJuO1xuXHRmb3IgKGxldCBmaWVsZCBvZiB0aGlzLmZvcm0uZWxlbWVudHMpIHtcblx0XHRsZXQgZm5hbWUgPSBmaWVsZC5uYW1lLnJlcGxhY2UoL1tbXFxdXS9nLCAnXycpICsgJ3ZhbCcsXG5cdFx0XHRvdiA9IHRoaXMuZm9ybS5kYXRhc2V0W2ZuYW1lXSxcblx0XHRcdHYgPSBmaWVsZC52YWx1ZTtcblx0XHRpZiAoZm5hbWUgPT09ICd2YWwnKSBjb250aW51ZTtcblx0XHRpZiAoZmllbGQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuXHRcdFx0diA9IGZpZWxkLmNoZWNrZWQ7XG5cdFx0XHRvdiA9IChvdiA9PT0gJ3RydWUnKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoZmllbGQudHlwZSA9PT0gJ3JhZGlvJyAmJiAhZmllbGQuY2hlY2tlZCkgY29udGludWU7XG5cdFx0aWYgKHR5cGVvZiBvdiA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHYgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRpZiAoZmllbGQudHlwZSA9PT0gJ3JhZGlvJykgdGhpcy5vYnNlcnZlQ2Iodiwgb3YsIGZpZWxkKTtcblx0XHRcdG92ID0gdGhpcy5mb3JtLmRhdGFzZXRbZm5hbWVdID0gdjtcblx0XHR9XG5cdFx0ZWxzZSBpZiAob3YgIT09IHYpIHtcblx0XHRcdHRoaXMuZm9ybS5kYXRhc2V0W2ZuYW1lXSA9IHY7XG5cdFx0XHR0aGlzLm9ic2VydmVDYih2LCBvdiwgZmllbGQpO1xuXHRcdH1cblx0fVxuXG5cdHRoaXMuYW5pbUZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xufTtcbkZvcm0ucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAoY2IpIHsgdGhpcy51cGRhdGUodGhpcy5vYnNlcnZlQ2IgPSBjYik7IH07XG5Gb3JtLnByb3RvdHlwZS5vYnNlcnZlU3RvcCA9IGZ1bmN0aW9uICgpIHsgdGhpcy5vYnNlcnZlQ2IgPSBudWxsOyB9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtO1xuIiwiY29uc3QgbG9uZ0NsaWNrID0gcmVxdWlyZSgnLi9sb25nLWNsaWNrJyk7XG5jb25zdCBzaXp6bGUgPSByZXF1aXJlKCcuL3NpenpsZScpO1xuY29uc3QgYWpheCA9IHJlcXVpcmUoJy4vYWpheCcpO1xuY29uc3QgZm9ybSA9IHJlcXVpcmUoJy4vZm9ybScpO1xuY29uc3QgcHVic3ViID0gcmVxdWlyZSgnLi9wdWJzdWInKTtcbmNvbnN0IGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcbmNvbnN0IHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxubGV0IGFsbCA9IHsgYWpheCwgZm9ybSB9O1xuT2JqZWN0LmFzc2lnbihhbGwsIGFqYXgsIHB1YnN1Yiwga2V5cywgdXRpbCk7XG5mb3IgKGxldCBwcm9wIGluIGFsbCkgc2l6emxlW3Byb3BdID0gYWxsW3Byb3BdO1xuXG5cbmxvbmdDbGljay5pbml0KCk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBzaXp6bGU7XG4iLCJjb25zdCBrZXlzID0ge1xuXHRcdEE6IDY1LFxuXHRcdFg6IDg4LFxuXHRcdEM6IDY3LFxuXHRcdEQ6IDY4LFxuXHRcdFY6IDg2LFxuXHRcdFo6IDkwLFxuXG5cdFx0RjE6IDExMixcblx0XHRGMjogMTEzLFxuXHRcdEY1OiAxMTYsXG5cdFx0VEFCOiA5LFxuXHRcdEVTQzogMjcsXG5cblx0XHRCQ0tTUEM6IDgsXG5cdFx0QkFDS1NQQUNFOiA4LFxuXHRcdEVOVEVSOiAxMyxcblx0XHRTUEFDRTogMzIsXG5cdFx0UEdVUDogMzMsXG5cdFx0UEdET1dOOiAzNCxcblx0XHRFTkQ6IDM1LFxuXHRcdEhPTUU6IDM2LFxuXHRcdExFRlQ6IDM3LFxuXHRcdFVQOiAzOCxcblx0XHRSSUdIVDogMzksXG5cdFx0RE9XTjogNDAsXG5cdFx0SU5TOiA0NSxcblx0XHRERUw6IDQ2LFxuXHRcdE1JTlVTOiAxNzMsXG5cdFx0UExVUzogNjEsXG5cdFx0RE9UOiAxOTAsXG5cdFx0U0xBU0g6IDE5MSxcblxuXHRcdE1BQ01JTlVTOiAxODksXG5cdFx0TUFDUExVUzogMTg3LFxuXG5cdFx0TlVNU1RBUjogMTA2LFxuXHRcdE5VTU1JTlVTOiAxMDksXG5cdFx0TlVNUExVUzogMTA3LFxuXHRcdE5VTURPVDogMTEwLFxuXHRcdE5VTVNMQVNIOiAxMTFcblx0fSxcblx0ZGlnaXRzID0ge1xuXHRcdDQ4OiAxLFx0XHQvLyAwXG5cdFx0NDk6IDEsXHRcdC8vIDFcblx0XHQ1MDogMSxcdFx0Ly8gMlxuXHRcdDUxOiAxLFx0XHQvLyAzXG5cdFx0NTI6IDEsXHRcdC8vIDRcblx0XHQ1MzogMSxcdFx0Ly8gNVxuXHRcdDU0OiAxLFx0XHQvLyA2XG5cdFx0NTU6IDEsXHRcdC8vIDdcblx0XHQ1NjogMSxcdFx0Ly8gOFxuXHRcdDU3OiAxLFx0XHQvLyA5XG5cdFx0OTY6IDEsXHRcdC8vIG51bXBhZCAwXG5cdFx0OTc6IDEsXHRcdC8vIG51bXBhZCAxXG5cdFx0OTg6IDEsXHRcdC8vIG51bXBhZCAyXG5cdFx0OTk6IDEsXHRcdC8vIG51bXBhZCAzXG5cdFx0MTAwOiAxLFx0XHQvLyBudW1wYWQgNFxuXHRcdDEwMTogMSxcdFx0Ly8gbnVtcGFkIDVcblx0XHQxMDI6IDEsXHRcdC8vIG51bXBhZCA2XG5cdFx0MTAzOiAxLFx0XHQvLyBudW1wYWQgN1xuXHRcdDEwNDogMSxcdFx0Ly8gbnVtcGFkIDhcblx0XHQxMDU6IDFcdFx0Ly8gbnVtcGFkIDlcblx0fSxcblx0YWxsb3dlZENoYXJzID0ge1xuXHRcdDg6IDEsXHRcdC8vIGJhY2tzcGFjZVxuXHRcdDk6IDEsXHRcdC8vIHRhYlxuXHRcdDQ2OiAxLFx0XHQvLyBkZWxcblx0XHQzNTogMSxcdFx0Ly8gZW5kXG5cdFx0MzY6IDEsXHRcdC8vIGhvbWVcblx0XHQzNzogMSxcdFx0Ly8gbGVmdFxuXHRcdDM5OiAxXHRcdC8vIHJpZ2h0XG5cdH07XG5cbi8vIG1hdGggb3BlcmF0b3JzOiArIC0gKiAvICggKSAuXG5mdW5jdGlvbiBpc01hdGggKGUpIHtcblx0Y29uc3QgayA9IGUua2V5Q29kZTtcblx0aWYgKGsgPT09IGtleXMuU1BBQ0UpIHJldHVybiB0cnVlO1xuXHRpZiAoayA9PT0ga2V5cy5OVU1ET1QgfHwgKGsgPT09IGtleXMuRE9UICYmICFlLnNoaWZ0S2V5KSkgcmV0dXJuIHRydWU7XG5cdGlmIChrID09PSBrZXlzLk5VTU1JTlVTIHx8IChrID09PSBrZXlzLk1JTlVTICYmICFlLnNoaWZ0S2V5KSkgcmV0dXJuIHRydWU7XG5cdGlmIChrID09PSBrZXlzLk5VTVBMVVMgfHwgKGsgPT09IGtleXMuUExVUyAmJiBlLnNoaWZ0S2V5KSkgcmV0dXJuIHRydWU7XG5cdGlmIChrID09PSBrZXlzLk5VTVNMQVNIIHx8IChrID09PSBrZXlzLlNMQVNIICYmICFlLnNoaWZ0S2V5KSkgcmV0dXJuIHRydWU7XG5cdGlmIChrID09PSBrZXlzLk1BQ01JTlVTICYmICFlLnNoaWZ0S2V5KSByZXR1cm4gdHJ1ZTtcblx0aWYgKGsgPT09IGtleXMuTUFDUExVUyAmJiBlLnNoaWZ0S2V5KSByZXR1cm4gdHJ1ZTtcblxuXHRpZiAoZS5zaGlmdEtleSkge1xuXHRcdGlmIChrID09PSA1NiB8fCBrID09PSA1NyB8fCBrID09PSA0OCkgcmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufVxuXG4vLyBkaWdpdHMgKyBuYXZpZ2F0aW9uICsgY29weS9jdXQvcGFzdGUgKyBtYXRoIG9wZXJhdG9yc1xuZnVuY3Rpb24gaXNDdXRDb3B5UGFzdGUgKGUpIHtcblx0Y29uc3QgayA9IGUua2V5Q29kZTtcblx0Y29uc3QgY3RybE9yQ21kID0gZSAmJiAoZS5jdHJsS2V5ID09PSB0cnVlIHx8IGUubWV0YUtleSA9PT0gdHJ1ZSk7XG5cdHJldHVybiBjdHJsT3JDbWQgJiYgKGsgPT09IGtleXMuWCB8fCBrID09PSBrZXlzLkMgfHwgayA9PT0ga2V5cy5WKTtcbn1cblxuLy8gYSAtIHpcbmZ1bmN0aW9uIGlzQWxwaGEgKGUpIHsgcmV0dXJuIChlLmtleUNvZGUgPj0gNjUgJiYgZS5rZXlDb2RlIDw9IDkwICYmICFlLmN0cmxLZXkgJiYgIWUubWV0YUtleSk7IH1cblxuZnVuY3Rpb24gaXNEaWdpdCAoZSkgeyByZXR1cm4gZGlnaXRzW2Uua2V5Q29kZV0gPT09IDEgJiYgIWUuc2hpZnRLZXk7IH1cblxuZnVuY3Rpb24gaXNBbHBoYU51bWVyaWMgKGUpIHsgcmV0dXJuIGlzQWxwaGEoZSkgfHwgaXNEaWdpdChlKTsgfVxuXG5mdW5jdGlvbiBpc05hdkNoYXIgKGUpIHsgcmV0dXJuIGFsbG93ZWRDaGFyc1tlLmtleUNvZGVdID09PSAxOyB9XG5cbmZ1bmN0aW9uIGlzTnVtYmVyRmllbGQgKGUpIHtcblx0Y29uc3QgaXNFbnRlciA9IChlLmtleUNvZGUgPT09IDEzKTtcblx0cmV0dXJuIGlzRGlnaXQoZSkgfHwgaXNOYXZDaGFyKGUpIHx8IGlzQ3V0Q29weVBhc3RlKGUpIHx8IGlzRW50ZXI7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGtleXMsXG5cdGlzTmF2Q2hhcixcblx0aXNDdXRDb3B5UGFzdGUsXG5cdGlzRGlnaXQsXG5cdGlzQWxwaGEsXG5cdGlzTWF0aCxcblx0aXNBbHBoYU51bWVyaWMsXG5cdGlzTnVtYmVyRmllbGQsXG59O1xuIiwiY29uc3QgREVMQVkgPSAxMDAwO1xyY29uc3QgRVZFTlRfTkFNRSA9ICdsb25nY2xpY2snO1xyXHJsZXQgdGltZXIgPSBudWxsO1xybGV0IGlzUmVhZHkgPSBmYWxzZTtcclxyY29uc3QgcmVzZXQgPSAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xyXHJmdW5jdGlvbiBmaXJlRXZlbnQgKGUpIHtcclx0ZS50YXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoRVZFTlRfTkFNRSwgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlIH0pKTtcclx0cmVzZXQoKTtccn1cclxyZnVuY3Rpb24gaW5pdCAoKSB7XHJcdGlmIChpc1JlYWR5KSByZXR1cm47XHJcdC8vIHBhdGNoIEN1c3RvbUV2ZW50IHRvIGFsbG93IGNvbnN0cnVjdG9yIGNyZWF0aW9uIChJRS9DaHJvbWUpXHJcdC8vIC0gcmVzb2x2ZWQgb25jZSBpbml0Q3VzdG9tRXZlbnQgbm8gbG9uZ2VyIGV4aXN0c1xyXHRpZiAoJ2luaXRDdXN0b21FdmVudCcgaW4gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50JykpIHtcclx0XHR3aW5kb3cuQ3VzdG9tRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQsIHBhcmFtcykge1xyXHRcdFx0cGFyYW1zID0gcGFyYW1zIHx8IHsgYnViYmxlczogZmFsc2UsIGNhbmNlbGFibGU6IGZhbHNlLCBkZXRhaWw6IHVuZGVmaW5lZCB9O1xyXHRcdFx0Y29uc3QgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XHJcdFx0XHRldnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwpO1xyXHRcdFx0cmV0dXJuIGV2dDtcclx0XHR9O1xyXHRcdHdpbmRvdy5DdXN0b21FdmVudC5wcm90b3R5cGUgPSB3aW5kb3cuRXZlbnQucHJvdG90eXBlO1xyXHR9XHJcclx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHJlc2V0KTtcclx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCByZXNldCk7XHJcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHJlc2V0KTtcclx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XHJcdFx0dGltZXIgPSBzZXRUaW1lb3V0KGZpcmVFdmVudC5iaW5kKGUsIGUpLCBERUxBWSk7XHJcdH0pO1xyXHRpc1JlYWR5ID0gdHJ1ZTtccn1cclxyXHJtb2R1bGUuZXhwb3J0cyA9IHtcclx0aW5pdFxyfTtcciIsImNvbnN0IF9jYWNoZSA9IHt9O1xuXG5mdW5jdGlvbiB0cmlnZ2VyICh0b3BpYywgLi4uYXJncykge1xuXHRpZiAoIV9jYWNoZVt0b3BpY10pIHJldHVybjtcblx0X2NhY2hlW3RvcGljXS5mb3JFYWNoKGNiID0+IHtcblx0XHRpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYi5hcHBseShjYiwgYXJncyk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBvbiAodG9waWMsIGNhbGxiYWNrKSB7XG5cdGlmICghX2NhY2hlW3RvcGljXSkgX2NhY2hlW3RvcGljXSA9IFtdO1xuXHRfY2FjaGVbdG9waWNdLnB1c2goY2FsbGJhY2spO1xuXHRyZXR1cm4gW3RvcGljLCBjYWxsYmFja107ICAgICAgIC8vIGhhbmRsZSBmb3Igb2ZmXG59XG5cbmZ1bmN0aW9uIG9mZiAoaGFuZGxlKSB7XG5cdGxldCBbdG9waWMsIGNiXSA9IGhhbmRsZSwgY2EgPSBfY2FjaGVbdG9waWNdO1xuXHRjYiA9IGNiLnRvU3RyaW5nKCk7XG5cdGlmICghY2EpIHJldHVybjtcblxuXHRjYS5mb3JFYWNoKChmbiwgaSkgPT4ge1xuXHRcdGlmIChmbi50b1N0cmluZygpID09PSBjYikgY2Euc3BsaWNlKGksIDEpO1xuXHR9KTtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgb24sIG9mZiwgdHJpZ2dlciB9O1xuIiwiLy8gY29uc3QgVmVsb2NpdHkgPSByZXF1aXJlKCd2ZWxvY2l0eS1hbmltYXRlJyk7XG5cbmNvbnN0IHR5cGUgPSBvYmogPT4gb2JqID8gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikuc2xpY2UoOCwgLTEpLnRvTG93ZXJDYXNlKCkgOiAndW5kZWZpbmVkJztcbmNvbnN0IGlzTm9kZUxpc3QgPSBub2RlcyA9PiAodHlwZW9mIG5vZGVzID09PSAnb2JqZWN0JykgJiZcblx0XHQvXihodG1sY29sbGVjdGlvbnxub2RlbGlzdHxvYmplY3QpJC8udGVzdCh0eXBlKG5vZGVzKSkgJiZcblx0XHQobm9kZXMubGVuZ3RoID09PSAwIHx8ICh0eXBlb2Ygbm9kZXNbMF0gPT09ICdvYmplY3QnICYmIG5vZGVzWzBdLm5vZGVUeXBlID4gMCkpO1xuXG5cbmZ1bmN0aW9uIHNpenpsZSAobWl4ZWQsIGNvbnRleHQpIHtcblx0aWYgKCFtaXhlZCkgcmV0dXJuIFtdO1xuXHRsZXQgZWw7XG5cdGlmICh0eXBlb2YgbWl4ZWQgIT09ICdzdHJpbmcnKSBlbCA9IG1peGVkO1xuXG5cdC8vIGlzIGh0bWwgLSBjcmVhdGUgbmV3IGVsZW1lbnRcblx0ZWxzZSBpZiAoLzxbYS16XVtcXHNcXFNdKj4vaS50ZXN0KG1peGVkKSkge1xuXHRcdGVsID0gKG5ldyBET01QYXJzZXIoKSkucGFyc2VGcm9tU3RyaW5nKG1peGVkLCAndGV4dC9odG1sJykuYm9keS5maXJzdENoaWxkO1xuXHR9XG5cdC8vIGlzIHNlbGVjdG9yIC0gZmluZCBlbGVtZW50XG5cdGVsc2UgZWwgPSAoY29udGV4dCB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChtaXhlZCk7XG5cblx0aWYgKGVsLm5vZGVUeXBlKSBlbCA9IFtlbF07XG5cdGVsc2UgaWYgKGlzTm9kZUxpc3QoZWwpKSBlbCA9IEFycmF5LmZyb20oZWwpO1xuXG5cdHJldHVybiBPYmplY3QuYXNzaWduKGVsIHx8IFtdLCBzaXp6bGUuZm4pO1xufVxuXG5cbnNpenpsZS5mbiA9IHt9O1xuc2l6emxlLmZuLmZpbmQgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHsgcmV0dXJuIHNpenpsZShzZWxlY3RvciwgdGhpc1swXSk7IH07XG5zaXp6bGUuZm4uZmlyc3QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzaXp6bGUodGhpc1swXSk7IH07XG5zaXp6bGUuZm4ubGFzdCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNpenpsZSh0aGlzW3RoaXMubGVuZ3RoIC0gMV0pOyB9O1xuc2l6emxlLmZuLmVxID0gZnVuY3Rpb24gKGlkeCkgeyByZXR1cm4gc2l6emxlKHRoaXNbaWR4IHx8IDBdKTsgfTtcblxuXG5zaXp6bGUuZm4uYXBwZW5kVG8gPSBmdW5jdGlvbiAocGFyZW50KSB7XG5cdGlmICghdGhpcyB8fCAhdGhpcy5sZW5ndGgpIHJldHVybiB0aGlzO1xuXHRpZiAodHlwZW9mIHBhcmVudCA9PT0gJ3N0cmluZycpIHBhcmVudCA9IHNpenpsZShwYXJlbnQpO1xuXHRlbHNlIGlmICghQXJyYXkuaXNBcnJheShwYXJlbnQpKSBwYXJlbnQgPSBbcGFyZW50XTtcblx0cGFyZW50WzBdLmFwcGVuZENoaWxkKHRoaXNbMF0pO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbnNpenpsZS5mbi5hcHBlbmQgPSBmdW5jdGlvbiAoY2hpbGQpIHtcblx0aWYgKCF0aGlzIHx8ICF0aGlzLmxlbmd0aCkgcmV0dXJuIHRoaXM7XG5cdGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnKSBjaGlsZCA9IHNpenpsZShjaGlsZCk7XG5cdHRoaXNbMF0uYXBwZW5kQ2hpbGQoY2hpbGRbMF0pO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbnNpenpsZS5mbi5vbiA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGNiKSB7XG5cdGlmICghdGhpcyB8fCAhdGhpcy5sZW5ndGgpIHJldHVybiB0aGlzO1xuXHR0aGlzLmZvckVhY2goZWwgPT4ge1xuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYik7XG5cdH0pO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbnNpenpsZS5mbi5vZmYgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBjYikge1xuXHRpZiAoIXRoaXMgfHwgIXRoaXMubGVuZ3RoKSByZXR1cm4gdGhpcztcblx0dGhpcy5mb3JFYWNoKGVsID0+IHtcblx0XHRlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2IpO1xuXHR9KTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG5zaXp6bGUuZm4uaXMgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcblx0aWYgKCF0aGlzIHx8ICF0aGlzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXHRyZXR1cm4gdGhpc1swXS5tYXRjaGVzKHNlbGVjdG9yKTtcbn07XG5cbnNpenpsZS5mbi5jbG9zZXN0ID0gZnVuY3Rpb24gKGNscykge1xuXHRpZiAoIXRoaXMgfHwgIXRoaXMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cdHJldHVybiBzaXp6bGUodGhpc1swXS5jbG9zZXN0KGNscykpO1xufTtcblxuLyoqXG4gKiBNb2RpZnkgZWxlbWVudCBjbGFzcyBsaXN0XG4gKiBAcGFyYW0gIHthcnJheX0gZWwgICAgICAgIGFycmF5IG9mIGVsZW1lbnRzXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGFjdGlvbiAgIGFkZCwgcmVtb3ZlIG9yIHRvZ2dsZVxuICogQHBhcmFtICB7c3RyaW5nfSBjbHMgICAgICBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZiBjbGFzc2VzIHRvIGFkZC9yZW1vdmUvdG9nZ2xlXG4gKiBAcGFyYW0gIHtib29sZWFufSBjb25kICAgIFtvcHRpb25hbF0gdHJ1ZSBvciBmYWxzZSBmb3IgdG9nZ2xlXG4gKiBAcmV0dXJuIHthcnJheX0gICAgICAgICAgIHNhbWUgYXJyYXkgb2YgZWxlbWVudHNcbiAqL1xuZnVuY3Rpb24gbW9kRWxDbHMgKGVsLCBhY3Rpb24sIGNscywgY29uZCkge1xuXHRpZiAoIWVsIHx8ICFlbC5sZW5ndGgpIHJldHVybiBlbDtcblx0Y2xzID0gKCcnICsgY2xzKS5zcGxpdCgnICcpO1xuXHRpZiAodHlwZW9mIGNvbmQgPT09ICdib29sZWFuJykge1xuXHRcdGVsLmZvckVhY2goZSA9PiBjbHMuZm9yRWFjaChjID0+IGUuY2xhc3NMaXN0W2FjdGlvbl0oYywgY29uZCkpKTtcblx0fVxuXHRlbHNlIGVsLmZvckVhY2goZSA9PiBjbHMuZm9yRWFjaChjID0+IGUuY2xhc3NMaXN0W2FjdGlvbl0oYykpKTtcblx0cmV0dXJuIGVsO1xufVxuXG5zaXp6bGUuZm4uYWRkQ2xhc3MgPSBmdW5jdGlvbiAoY2xzKSB7IHJldHVybiBtb2RFbENscyh0aGlzLCAnYWRkJywgY2xzKTsgfTtcbnNpenpsZS5mbi5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIChjbHMpIHsgcmV0dXJuIG1vZEVsQ2xzKHRoaXMsICdyZW1vdmUnLCBjbHMpOyB9O1xuc2l6emxlLmZuLnRvZ2dsZUNsYXNzID0gZnVuY3Rpb24gKGNscywgY29uZCkgeyByZXR1cm4gbW9kRWxDbHModGhpcywgJ3RvZ2dsZScsIGNscywgY29uZCk7IH07XG5zaXp6bGUuZm4uaGFzQ2xhc3MgPSBmdW5jdGlvbiAoY2xzKSB7XG5cdGlmICghdGhpcyB8fCAhdGhpcy5sZW5ndGgpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuIHRoaXNbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKGNscyk7XG59O1xuXG5zaXp6bGUuZm4udG9nZ2xlID0gZnVuY3Rpb24gKGNvbmQpIHtcblx0cmV0dXJuIGNvbmQgPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xufTtcblxuc2l6emxlLmZuLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuZm9yRWFjaChlbCA9PiB7IGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IH0pO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbnNpenpsZS5mbi5zaG93ID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLmZvckVhY2goZWwgPT4geyBlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzsgfSk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuc2l6emxlLmZuLmh0bWwgPSBmdW5jdGlvbiAoaHRtbCkge1xuXHRpZiAoIXRoaXMgfHwgIXRoaXMubGVuZ3RoKSByZXR1cm4gdGhpcztcblx0aWYgKHR5cGVvZiBodG1sID09PSAndW5kZWZpbmVkJykgcmV0dXJuIHRoaXNbMF0uaW5uZXJIVE1MO1xuXHR0aGlzLmZvckVhY2goZWwgPT4geyBlbC5pbm5lckhUTUwgPSBodG1sOyB9KTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG5zaXp6bGUuZm4udGV4dCA9IGZ1bmN0aW9uICh0ZXh0KSB7XG5cdGlmICghdGhpcyB8fCAhdGhpcy5sZW5ndGgpIHJldHVybiB0aGlzO1xuXHRpZiAodHlwZW9mIHRleHQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gdGhpc1swXS5pbm5lclRleHQ7XG5cdHRoaXMuZm9yRWFjaChlbCA9PiB7IGVsLmlubmVyVGV4dCA9IHRleHQ7IH0pO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbnNpenpsZS5mbi5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICghdGhpcyB8fCAhdGhpcy5sZW5ndGgpIHJldHVybiB0aGlzO1xuXHR0aGlzLmZvckVhY2goZWwgPT4gZWwucmVtb3ZlKCkpO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbnNpenpsZS5mbi5kYXRhID0gZnVuY3Rpb24gKGtleSkge1xuXHRpZiAoIXRoaXMgfHwgIXRoaXMubGVuZ3RoKSByZXR1cm4gdGhpcztcblx0aWYgKCF0aGlzWzBdLmRhdGFzZXQpIHJldHVybiBudWxsO1xuXHRpZiAoa2V5KSByZXR1cm4gdGhpc1swXS5kYXRhc2V0W2tleV07XG5cdHJldHVybiB0aGlzWzBdLmRhdGFzZXQ7XG59O1xuXG5cbnNpenpsZS5mbi5hdHRyID0gZnVuY3Rpb24gKGF0dHIsIHZhbHVlKSB7XG5cdGlmICghdGhpcyB8fCAhdGhpcy5sZW5ndGgpIHJldHVybiBmYWxzZTtcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiB0aGlzWzBdLmdldEF0dHJpYnV0ZShhdHRyKTtcblx0dGhpcy5mb3JFYWNoKGVsID0+IHsgZWwuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKTsgfSk7XG59O1xuXG5cbmZ1bmN0aW9uIGFuaW1hdGVFbGVtZW50IChmcm9tLCB0bywgb3B0cykge1xuXHRyZXR1cm4gZWwgPT4gbmV3IFByb21pc2UgKHJlc29sdmUgPT4ge1xuXHRcdGNvbnN0IGFuaW0gPSBlbC5hbmltYXRlKFtmcm9tLCB0b10sIG9wdHMpO1xuXHRcdGFuaW0ub25jYW5jZWwgPSByZXNvbHZlO1xuXHRcdGFuaW0ub25maW5pc2ggPSByZXNvbHZlO1xuXHR9KTtcbn1cblxuc2l6emxlLmZuLmFuaW1hdGUgPSBmdW5jdGlvbiAoZnJvbSwgdG8sIG9wdGlvbnMgPSB7fSkge1xuXHRjb25zdCBkZmx0ID0ge2R1cmF0aW9uOiAzMDAsIGVhc2luZzogJ2Vhc2Utb3V0JywgZmlsbDogJ2ZvcndhcmRzJ307XG5cdGNvbnN0IG9wdHMgPSBPYmplY3QuYXNzaWduKHt9LCBkZmx0LCBvcHRpb25zKTtcblx0Y29uc3QgYWxsID0gdGhpcy5tYXAoYW5pbWF0ZUVsZW1lbnQoZnJvbSwgdG8sIG9wdHMpKTtcblx0cmV0dXJuIFByb21pc2UuYWxsKGFsbCk7XG59O1xuXG5cbi8vIHNpenpsZS5mbi5hbmltYXRlID0gZnVuY3Rpb24gKGZyb20sIHRvLCBvcHRpb25zID0ge30pIHtcbi8vIFx0Y29uc3Qgb3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIHtkdXJhdGlvbjogMzAwLCBlYXNpbmc6ICdlYXNlLW91dCd9LCBvcHRpb25zKTtcbi8vIFx0Y29uc3QgZnJvbVRvID0ge307XG4vLyBcdGZvciAobGV0IGtleSBpbiBmcm9tKSBmcm9tVG9ba2V5XSA9IFsgdG9ba2V5XSwgZnJvbVtrZXldIF07XG4vLyBcdHJldHVybiBWZWxvY2l0eSh0aGlzLCBmcm9tVG8sIG9wdHMpO1xuLy8gfTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHNpenpsZTtcbiIsImNvbnN0IHR5cGUgPSBvYmogPT4gb2JqID8gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikuc2xpY2UoOCwgLTEpLnRvTG93ZXJDYXNlKCkgOiAndW5kZWZpbmVkJztcblxuY29uc3QgdHJpbSA9IChzdHIsIGNoYXJzID0gJ1xcXFxzJykgPT4gKCcnICsgc3RyKS5yZXBsYWNlKG5ldyBSZWdFeHAoYCheJHtjaGFyc30rKXwoJHtjaGFyc30rJClgLCAnZycpLCAnJyk7XG5jb25zdCBsdHJpbSA9IChzdHIsIGNoYXJzID0gJ1xcXFxzJykgPT4gKCcnICsgc3RyKS5yZXBsYWNlKG5ldyBSZWdFeHAoYF4ke2NoYXJzfStgKSwgJycpO1xuY29uc3QgcnRyaW0gPSAoc3RyLCBjaGFycyA9ICdcXFxccycpID0+ICgnJyArIHN0cikucmVwbGFjZShuZXcgUmVnRXhwKGAke2NoYXJzfSskYCksICcnKTtcblxuY29uc3QgcmFuZCA9IChtYXgsIG1pbiA9IDApID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG5cbmNvbnN0IHVjZmlyc3QgPSAocykgPT4gKCcnICsgcykudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXGIoW2Etel0pL2dpLCBjID0+IGMudG9VcHBlckNhc2UoKSk7XG5cblxuZnVuY3Rpb24gaXNOdW1iZXIgKHYpIHtcblx0aWYgKHR5cGVvZiB2ID09PSAnbnVtYmVyJykgcmV0dXJuIHRydWU7XG5cdGlmICh0eXBlb2YgdiAhPT0gJ3N0cmluZycpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuICgvXlstK10/WzAtOV0qXFwuP1swLTldKyhbZUVdWy0rXT9bMC05XSspPyQvKS50ZXN0KHYpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXROdW1iZXIgKG51bSkge1xuXHRudW0gPSBNYXRoLnJvdW5kKDAgKyBudW0gKiAxMDApIC8gMTAwO1xuXHRyZXR1cm4gbnVtLnRvTG9jYWxlU3RyaW5nKCdlbi1HQicsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pO1xufVxuXG5mdW5jdGlvbiBzZXJpYWxpemUgKG9iaikge1xuXHRjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblx0aWYgKCFrZXlzIHx8ICFrZXlzLmxlbmd0aCkgcmV0dXJuICcnO1xuXHRyZXR1cm4gJz8nICsga2V5cy5yZWR1Y2UoKGEsIGspID0+IHtcblx0XHRhLnB1c2goayArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba10pKTtcblx0XHRyZXR1cm4gYTtcblx0fSwgW10pLmpvaW4oJyYnKTtcbn1cblxuZnVuY3Rpb24gdmFyVG9SZWFsVHlwZSAodikge1xuXHRpZiAoaXNOdW1iZXIodikpIHtcblx0XHRsZXQgb3JpZ2luYWx2ID0gdjtcblx0XHR2ID0gcGFyc2VGbG9hdCgnJyArIHYpO1xuXHRcdGlmICgoJycgKyB2KSAhPT0gb3JpZ2luYWx2KSB2ID0gb3JpZ2luYWx2O1xuXHR9XG5cdGVsc2UgaWYgKHYgPT09ICd0cnVlJykgdiA9IHRydWU7XG5cdGVsc2UgaWYgKHYgPT09ICdmYWxzZScpIHYgPSBmYWxzZTtcblx0aWYgKHYgPT09ICcnKSB2ID0gdW5kZWZpbmVkO1xuXHRpZiAodHlwZSh2KSA9PT0gJ2FycmF5JykgdiA9IHYubWFwKHZhbCA9PiB2YXJUb1JlYWxUeXBlKHZhbCkpO1xuXHRyZXR1cm4gdjtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3RFbXB0eSAoeCkge1xuXHRpZiAoIXggfHwgdHlwZW9mIHggIT09ICdvYmplY3QnKSByZXR1cm4gdHJ1ZTtcblx0cmV0dXJuIE9iamVjdC5rZXlzKHgpLmxlbmd0aCA9PT0gMDtcbn1cblxuZnVuY3Rpb24gc2FuaXRpemUgKHYpIHtcblx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG5cdGRpdi5pbm5lckhUTUwgPSB2IHx8ICcnO1xuXHRyZXR1cm4gZGl2LnRleHRDb250ZW50IHx8IGRpdi5pbm5lclRleHQgfHwgJyc7XG59XG5cblxuZnVuY3Rpb24gZnV6enkgKGhheSwgcykge1xuXHRzID0gKCcnICsgcykudG9Mb3dlckNhc2UoKTtcblx0aGF5ID0gKCcnICsgaGF5KS50b0xvd2VyQ2FzZSgpO1xuXHRsZXQgbiA9IC0xO1xuXHRmb3IgKGxldCBsIG9mIHMpIGlmICghfihuID0gaGF5LmluZGV4T2YobCwgbiArIDEpKSkgcmV0dXJuIGZhbHNlO1xuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuXG5mdW5jdGlvbiBwYXJzZVVybCAodXJsKSB7XG5cdGxldCB1cmx0O1xuXHR0cnkgeyB1cmx0ID0gbmV3IFVSTCh1cmwpOyB9XG5cdGNhdGNoIChlKSB7IHVybHQgPSBudWxsOyB9XG5cdHJldHVybiB1cmx0O1xufVxuXG5cbmZ1bmN0aW9uIHByZXR0eURhdGUgKHRpbWUpIHtcblx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKCh0aW1lIHx8ICcnKS5yZXBsYWNlKC8tL2csICcvJykucmVwbGFjZSgvW1RaXS9nLCAnICcpKTtcblx0Y29uc3QgZGlmZiA9ICgoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAtIGRhdGUuZ2V0VGltZSgpKSAvIDEwMDApO1xuXHRjb25zdCBkYXlfZGlmZiA9IE1hdGguZmxvb3IoZGlmZiAvIDg2NDAwKTtcblx0aWYgKGlzTmFOKGRheV9kaWZmKSB8fCBkYXlfZGlmZiA8IDAgfHwgZGF5X2RpZmYgPj0gMzEpIHJldHVybiBkYXRlLnRvTG9jYWxlU3RyaW5nKCk7XG5cdHJldHVybiBkYXlfZGlmZiA9PT0gMCAmJiAoXG5cdFx0ZGlmZiA8IDYwICYmICdqdXN0IG5vdycgfHxcblx0XHRkaWZmIDwgMTIwICYmICcxIG1pbnV0ZSBhZ28nIHx8XG5cdFx0ZGlmZiA8IDM2MDAgJiYgTWF0aC5mbG9vcihkaWZmIC8gNjApICsgJyBtaW51dGVzIGFnbycgfHxcblx0XHRkaWZmIDwgNzIwMCAmJiAnMSBob3VyIGFnbycgfHxcblx0XHRkaWZmIDwgODY0MDAgJiYgTWF0aC5mbG9vcihkaWZmIC8gMzYwMCkgKyAnIGhvdXJzIGFnbydcblx0KSB8fFxuXHRcdGRheV9kaWZmID09PSAxICYmICdZZXN0ZXJkYXknIHx8XG5cdFx0ZGF5X2RpZmYgPCA3ICYmIGRheV9kaWZmICsgJyBkYXlzIGFnbycgfHxcblx0XHRkYXlfZGlmZiA8IDMxICYmIE1hdGguY2VpbChkYXlfZGlmZiAvIDcpICsgJyB3ZWVrcyBhZ28nO1xufVxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGZ1enp5LFxuXHRsdHJpbSxcblx0cnRyaW0sXG5cdHRyaW0sXG5cdHVjZmlyc3QsXG5cdHR5cGUsXG5cdHJhbmQsXG5cdGlzTnVtYmVyLFxuXHRmb3JtYXROdW1iZXIsXG5cdHZhclRvUmVhbFR5cGUsXG5cdGlzT2JqZWN0RW1wdHksXG5cdHNhbml0aXplLFxuXHRzZXJpYWxpemUsXG5cdHBhcnNlVXJsLFxuXHRtb250aHM6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcblx0cHJldHR5RGF0ZSxcbn07XG4iLCJ2YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZVVybC5qc1wiKShcbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCIpXG4sIHtcImhtclwiOnRydWV9KTtcbmlmKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUocmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCIpKTtcbiAgfSk7XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwicmVxdWlyZSgnLi9pbmRleC5jc3MnKTtcbnJlcXVpcmUoJy4uL2NvbXBvbmVudHMvbW9udGgtcGlja2VyJyk7XG5yZXF1aXJlKCcuLi9jb21wb25lbnRzL3llYXItcGlja2VyJyk7XG5cbmltcG9ydCB7JH0gZnJvbSAnLi4vY29yZSc7XG5cbmNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbmxldCBlbCwgYnRuVG9kYXksIG1vbnRoUGlja2VyLCB5ZWFyUGlja2VyLCBjdXJyZW50RGF0ZTtcblxuXG4vLyB5eXl5LW1tLWRkXG5jb25zdCBmb3JtYXQgPSBkID0+IGQudG9JU09TdHJpbmcoKS5zdWJzdHIoMCwgMTApO1xuY29uc3QgaXNTYW1lRGF5ID0gKGQxLCBkMikgPT4gZm9ybWF0KGQxKSA9PT0gZm9ybWF0KGQyKTtcblxuXG5cbmZ1bmN0aW9uIGdvVG8gKGRheSA9IHRvZGF5KSB7XG5cdGN1cnJlbnREYXRlID0gZGF5O1xuXHRtb250aFBpY2tlclswXS52YWx1ZSA9IGRheS5nZXRNb250aCgpICsgMTtcblx0eWVhclBpY2tlclswXS52YWx1ZSA9IGRheS5nZXRGdWxsWWVhcigpO1xuXHRlbC50b2dnbGVDbGFzcygnaXMtdG9kYXknLCBpc1NhbWVEYXkoZGF5LCB0b2RheSkpO1xufVxuXG5cbmZ1bmN0aW9uIG9uTW9udGhQaWNrZXJDaGFuZ2UgKGUpIHtcblx0Y29uc3QgZGF5ID0gbmV3IERhdGUoY3VycmVudERhdGUpO1xuXHRkYXkuc2V0TW9udGgoZS5kZXRhaWwudmFsdWUgLSAxKTtcblx0Z29UbyhkYXkpO1xufVxuXG5mdW5jdGlvbiBvblllYXJQaWNrZXJDaGFuZ2UgKGUpIHtcblx0Y29uc3QgZGF5ID0gbmV3IERhdGUoY3VycmVudERhdGUpO1xuXHRkYXkuc2V0WWVhcihlLmRldGFpbC52YWx1ZSk7XG5cdGdvVG8oZGF5KTtcbn1cblxuXG5cblxuZnVuY3Rpb24gaW5pdCAoKSB7XG5cdGVsID0gJCgnaGVhZGVyJyk7XG5cdGJ0blRvZGF5ID0gZWwuZmluZCgnLmJ0bi10b2RheScpO1xuXHRtb250aFBpY2tlciA9IGVsLmZpbmQoJ21vbnRoLXBpY2tlcicpO1xuXHR5ZWFyUGlja2VyID0gZWwuZmluZCgneWVhci1waWNrZXInKTtcblxuXHRidG5Ub2RheS5vbignY2xpY2snLCAoKSA9PiBnb1RvKCkpO1xuXHRtb250aFBpY2tlci5vbignY2hhbmdlJywgb25Nb250aFBpY2tlckNoYW5nZSk7XG5cdHllYXJQaWNrZXIub24oJ2NoYW5nZScsIG9uWWVhclBpY2tlckNoYW5nZSk7XG5cblx0Z29UbygpO1xufVxuXG5cbmV4cG9ydCB7XG5cdGluaXRcbn07XG4iLCJ2YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZVVybC5qc1wiKShcbiAgcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCIpXG4sIHtcImhtclwiOnRydWV9KTtcbmlmKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUocmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCIpKTtcbiAgfSk7XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwicmVxdWlyZSgnLi9pbmRleC5jc3MnKTtcblxuXG5cbmNvbnN0IGNvbXBvbmVudHMgPSBbXG5cdCdoZWFkZXInLFxuXTtcblxuXG5jb21wb25lbnRzLmZvckVhY2gobiA9PiB7XG5cdGNvbnN0IGMgPSByZXF1aXJlKGAuLyR7bn0vYCk7XG5cdGMuaW5pdCgpO1xufSk7XG5cblxuZnVuY3Rpb24gaW5pdCAoKSB7XG5cdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xuXHRjb25zb2xlLmxvZygncmVhZHkhJyk7XG59XG5cblxuaWYgKHdpbmRvdy5XZWJDb21wb25lbnRzLnJlYWR5KSBpbml0KCk7XG5lbHNlIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdXZWJDb21wb25lbnRzUmVhZHknLCBpbml0KTtcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjEwYmZlZWRmMTMxZDFhZTZhOWQyM2Q3NTY0NTZjNTI0LmNzc1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjg3NWU4NTRiZTM3Y2JjMGNmYzg3OWY4Mzg5MGFkYzJmLmNzc1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImY2MDlmYzJkODJmMDgyM2EzZTc3MmVjYjgzOGUwZTZjLmNzc1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQxOWNiOGZjODEwMjYxZDAwYmEzODMzMTY4YTA5NzFjLmNzc1wiOyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbGVtZW50LCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYWRkU3R5bGVVcmwgKHVybCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdG9wdGlvbnMuaG1yID0gdHlwZW9mIG9wdGlvbnMuaG1yID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBvcHRpb25zLmhtcjtcblxuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGxpbmsucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cdGxpbmsudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0bGluay5ocmVmID0gdXJsO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXG5cdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuXG5cdGhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG5cblx0aWYgKG9wdGlvbnMuaG1yICYmIG1vZHVsZS5ob3QpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24odXJsKSB7XG5cdFx0XHRpZih0eXBlb2YgdXJsID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdGxpbmsuaHJlZiA9IHVybDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhlYWQucmVtb3ZlQ2hpbGQobGluayk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9