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

/***/ "./client/components/month-picker/index.css":
/*!**************************************************!*\
  !*** ./client/components/month-picker/index.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.month-picker {\n\t-moz-user-select: none;\n\tuser-select: none;\n\tposition: relative;\n\twidth: inherit;\n\tdisplay: flex;\n\theight: 100%;\n\tfont: inherit;\n}\n\n\n.month {\n\tposition: relative;\n\tfont: inherit;\n\tfont-size: 12px;\n\ttext-transform: uppercase;\n\tflex: 1;\n\tborder: none;\n\tbackground-color: rgba(255,255,255,0.3);\n\theight: 100%;\n\tborder: 1px solid transparent;\n\tborder-width: 0 1px;\n\tpadding-top: 2px;\n\tcolor: rgba(0,0,0,.6);\n}\n\n\n.month.selected {\n\tbackground-color: rgba(255,255,255,0.9);\n\tborder-color: #444;\n\tcolor: rgba(0,0,0,1);\n}\n\n\n.month.current::after {\n\tcontent: '';\n\tdisplay: block;\n\twidth: 5px;\n\theight: 5px;\n\tborder-radius: 5px;\n\tbackground: linear-gradient(#205DFFFF, #184ACAFF);\n\tposition: absolute;\n\tbottom: 1px;\n\tleft: 50%;\n\ttransform: translateX(-50%);\n\topacity: 0.8;\n}\n", ""]);

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
exports.push([module.i, ".year-picker {\n\t-moz-user-select: none;\n\tuser-select: none;\n\tposition: relative;\n\tfont: normal 1em sans-serif;\n\twidth: inherit;\n\tdisplay: flex;\n\theight: 100%;\n\tbackground-color: rgba(255,255,255,0.9);\n}\n\n.year-picker input {\n\tappearance: textfield;\n\t-webkit-appearance: textfield;\n\t-moz-appearance: textfield;\n\ttext-align: center;\n\tfont: inherit;\n\tmin-width: 3em;\n\tpadding: 2px 0 1px;\n\theight: 100%;\n\tbackground-color: transparent;\n}\n\n.year-picker .btn {\n\tbox-sizing: border-box;\n\tborder: none;\n\theight: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./client/components/year-picker/index.html":
/*!**************************************************!*\
  !*** ./client/components/year-picker/index.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"year-picker\">\n\t<button class=\"btn prev-year\" title=\"Previous year\">◀</button>\n\t<input class=\"btn\" type=\"number\" min=\"2000\" max=\"3000\">\n\t<button class=\"btn next-year\" title=\"Next year\">▶</button>\n</div>";

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


var content = __webpack_require__(/*! !../../node_modules/css-loader!./index.css */ "./node_modules/css-loader/index.js!./client/header/index.css");

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
let el, btnToday, monthPicker, yearPicker;

const isSameDay = (d1, d2) => Math.abs(d1 - d2) < 86400;

function goTo(day = today) {
	monthPicker[0].value = day.getMonth() + 1;
	yearPicker[0].value = day.getFullYear();
	btnToday.toggleClass('active', isSameDay(day, today));
}

function onTodayBtnClick() {
	goTo();
}

function onMonthPickerChange(e) {
	const day = new Date();
	day.setMonth(e.detail.value - 1);
	goTo(day);
}

function onYearPickerChange(e) {
	const day = new Date();
	day.setYear(e.detail.value);
	goTo(day);
}

function init() {
	el = Object(_core__WEBPACK_IMPORTED_MODULE_0__["$"])('header');
	btnToday = el.find('.btn-today');
	monthPicker = el.find('month-picker');
	yearPicker = el.find('year-picker');

	btnToday.on('click', onTodayBtnClick);
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


var content = __webpack_require__(/*! !../node_modules/css-loader!./index.css */ "./node_modules/css-loader/index.js!./client/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

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
exports.push([module.i, "#categories {\n\tposition: absolute;\n\twidth: 260px;\n\tleft: 260px;\n\ttop: 34px;\n\tbottom: 0;\n\tborder: 1px solid green;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./client/header/index.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader!./client/header/index.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\n\tdisplay: flex;\n\theight: 32px;\n\talign-items: center;\n\tborder-top: 1px solid #444;\n\tborder-bottom: 1px solid #444;\n}\nheader month-picker { height: 100%; flex: 1; margin: 0 1px; }\nheader year-picker { height: 100%; width: 100px; }\n\n\nheader .btn-today {\n\theight: 100%;\n\tbox-sizing: inherit;\n\tborder: 1px solid transparent;\n\tborder-width: 0 1px;\n\tbackground: #ffffff4d;\n\tfont: inherit;\n\tfont-size: 12px;\n\tpadding-top: 2px;\n\ttext-transform: uppercase;\n\twidth: 100px;\n}\n\n.btn-today.active {\n\tbackground-color: #ffffffe6;\n\tborder-color: #444;\n\tcolor: #000;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./client/index.css":
/*!****************************************************!*\
  !*** ./node_modules/css-loader!./client/index.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body { margin: 0; padding: 0; height: 100%; overflow: hidden; }\n\nbody { box-sizing: border-box; background: #666;\n\tfont: normal 1em sans-serif;\n}\n\nbody * { box-sizing: inherit; }\n\n", ""]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50IHN5bmMgXlxcLlxcLy4qXFwvJCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY2FsZW5kYXIvaW5kZXguY3NzP2Q0NzEiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NhbGVuZGFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jYXRlZ29yaWVzL2luZGV4LmNzcz8xOGVmIiwid2VicGFjazovLy8uL2NsaWVudC9jYXRlZ29yaWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2NhbGVuZGFyL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9jYWxlbmRhci9pbmRleC5odG1sIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2NhbGVuZGFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL21vbnRoLXBpY2tlci9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvbW9udGgtcGlja2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL3VpLWRpYWxvZy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvdWktZGlhbG9nL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvdWktZGlhbG9nL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL3VpLW1zZ2JveC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy91aS10b2FzdC9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvdWktdG9hc3QvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy91aS10b2FzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy95ZWFyLXBpY2tlci9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMveWVhci1waWNrZXIvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy95ZWFyLXBpY2tlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29yZS9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvcmUvaGVscGVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb3JlL3V0aWwvYWpheC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29yZS91dGlsL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvcmUvdXRpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29yZS91dGlsL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvcmUvdXRpbC9sb25nLWNsaWNrLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb3JlL3V0aWwvcHVic3ViLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb3JlL3V0aWwvc2l6emxlLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb3JlL3V0aWwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvaGVhZGVyL2luZGV4LmNzcz8zNmFmIiwid2VicGFjazovLy8uL2NsaWVudC9oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2luZGV4LmNzcz80OTUwIiwid2VicGFjazovLy8uL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY2FsZW5kYXIvaW5kZXguY3NzIiwid2VicGFjazovLy8uL2NsaWVudC9jYXRlZ29yaWVzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvaGVhZGVyL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvaW5kZXguY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiaW5pdCIsImNvbnNvbGUiLCJsb2ciLCJ3ZWVrZGF5cyIsIm1vbnRocyIsInBlcmZlY3RDYWxlbmRhciIsIkhUTUxFbGVtZW50IiwiY29uc3RydWN0b3IiLCJ0ZW1wbGF0ZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInRlbXBsYXRlQ29udGVudCIsImNvbnRlbnQiLCJpcyIsIm9ic2VydmVkQXR0cmlidXRlcyIsImNvbm5lY3RlZENhbGxiYWNrIiwiYXR0YWNoU2hhZG93IiwibW9kZSIsInNoYWRvd1Jvb3QiLCJhcHBlbmRDaGlsZCIsImNsb25lTm9kZSIsImVsIiwicXVlcnlTZWxlY3RvciIsImRheUNhcmQiLCJtb250aHNFbCIsIndlZWtkYXlzRWwiLCJkYXlzRWwiLCJmaWxsQ2FsZW5kYXIiLCJhZGRFdmVudExpc3RlbmVyIiwib25DbGljayIsImJpbmQiLCJnZXRBdHRyaWJ1dGUiLCJkYXRlIiwiRGF0ZSIsImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayIsIm5hbWUiLCJvbGRWYWwiLCJuZXdWYWwiLCJ1cERhdGUiLCJ2YWwiLCJmb3JtYXQiLCJzZXRBdHRyaWJ1dGUiLCJmdWxsRGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsImRhdGVPYmoiLCJkYXRlU3RyIiwiZCIsInRvSVNPU3RyaW5nIiwic3Vic3RyIiwicmVhbERhdGUiLCJ5IiwiZ2V0RnVsbFllYXIiLCJtIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwibW9udGgiLCJmaXJzdERheU9mTW9udGgiLCJVVEMiLCJnZXREYXkiLCJkYXlzSW5Nb250aCIsIndlZWtkYXkiLCJyZW5kZXIiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiY2xhc3NOYW1lIiwiZ2V0RGF5Q2FyZCIsImlubmVyVGV4dCIsInNlbGVjdGVkRGF5IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic2VsZWN0ZWRNb250aCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtYXAiLCJqb2luIiwiZGF5cyIsIkFycmF5IiwiZmlsbCIsIm4iLCJpIiwic2V0RGF0ZSIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImUiLCJ0YXJnZXQiLCJkYXlFbCIsImNsb3Nlc3QiLCJkYXlFbHMiLCJjaGlsZHJlbiIsImRheSIsInByb3RvdHlwZSIsImluZGV4T2YiLCJjYWxsIiwicHJldmVudERlZmF1bHQiLCJ1bmRlZmluZWQiLCJtb250aEVsIiwibW9udGhzRWxzIiwicGFyZW50Tm9kZSIsInRvZGF5IiwicHJldlllYXIiLCJuZXh0WWVhciIsImN1cnJlbnRNb250aCIsImJ0blRlbXBsYXRlIiwiY2xzIiwidG9Mb3dlckNhc2UiLCJwdXNoIiwibW9udGhQaWNrZXIiLCJpbnB1dEVsIiwidmFsdWUiLCJ1cGRhdGUiLCJtb250aHNIdG1sIiwic2VsZWN0ZWQiLCJmb3JFYWNoIiwiYnRuIiwibW9udGhCdXR0b24iLCJkYXRhc2V0IiwiZmlyZUV2ZW50IiwicGFyc2VJbnQiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSIsIkZPQ1VTQUJMRV9TRUxFQ1RPUlMiLCJBTklNX0NGRyIsImR1cmF0aW9uIiwiZWFzaW5nIiwidWlEaWFsb2ciLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJvbkNvbnRlbnRDaGFuZ2UiLCJjb250ZW50RWwiLCJvYnNlcnZlIiwiYXR0cmlidXRlcyIsImNoaWxkTGlzdCIsIm9uS2V5ZG93biIsIm9uQmx1ciIsImRpc2Nvbm5lY3RlZENhbGxiYWNrIiwiZGlzY29ubmVjdCIsImRvT3BlbiIsImRvQ2xvc2UiLCJ0YWJiaW5nRm9yd2FyZCIsInRhciIsImJhY2tkcm9wQ2xpY2siLCJkaWFsb2dDbG9zZUJ0biIsIm9wZW4iLCJnZXRGb2N1c2FibGVFbHMiLCJmb2N1c2FibGVFbGVtZW50cyIsImVsZW1zIiwiZmlyc3QiLCJsYXN0IiwibGVuZ3RoIiwiZm9jdXNFbCIsImZvY3VzIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwia2V5Iiwic2hpZnRLZXkiLCJpc09wZW4iLCJCb29sZWFuIiwidHJpZ2dlciIsImFjdGl2ZUVsZW1lbnQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJoYXNBdHRyaWJ1dGUiLCJ2aXNpYmxlIiwiYW5pbWF0ZSIsInRyYW5zZm9ybSIsIm9wYWNpdHkiLCJvbmZpbmlzaCIsIm9uT3BlbmVkIiwib25DbG9zZWQiLCJ1aU1zZ0JveCIsIlRPQVNUX1RJTUVPVVQiLCJ1aVRvYXN0Iiwic2hvdyIsIm1zZyIsInR5cGUiLCJhdXRvY2xvc2UiLCJ0b2FzdCIsIlRPQVNUSCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsInByb3BzIiwibWFyZ2luVG9wIiwiYW5pbSIsInNldFRpbWVvdXQiLCJoaWRlIiwidG9hc3RzIiwieWVhclBpY2tlciIsIm9uSW5wdXQiLCJhZGRUb1ZhbHVlIiwiY3VycmVudFZhbHVlIiwibW9kdWxlIiwiZXhwb3J0cyIsImNsaWNrZWQiLCJrZXl1cCIsImluZm8iLCJlcnJvciIsIndhcm5pbmciLCJFVkVOVCIsImhlbHBlciIsIiQiLCJ1dGlsIiwiYmFzZVVybCIsImFqYXgiLCJvcHRpb25zIiwidXJsIiwicmVzcCIsImRhdGEiLCJyZXEiLCJYTUxIdHRwUmVxdWVzdCIsIm1ldGhvZCIsInNlcmlhbGl6ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9ubG9hZCIsInN0YXR1cyIsInBhcnNlIiwicmVzcG9uc2VUZXh0Iiwic3RhdHVzVGV4dCIsIm9uZXJyb3IiLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2VuZCIsImdldCIsInBvc3QiLCJwdXQiLCJkZWwiLCJrZXlCcmVha2VyIiwibnVtYmVyTWF0Y2hlciIsIl9pc051bWJlciIsIm1hdGNoIiwiX2RlY29kZUVudGl0aWVzIiwic3RyIiwidGV4dENvbnRlbnQiLCJfZ2V0SW5wdXRzIiwiZm9ybSIsImlucHV0cyIsInNsaWNlIiwiRm9ybSIsImVsZW1lbnRzIiwic2V0IiwicGFyYW1zIiwiY2xlYXIiLCJzdXNwZW5kT2JzZXJ2ZSIsImFuaW1GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaW5wdXQiLCJ2IiwibmFtZXMiLCJyZXBsYWNlIiwic3BsaXQiLCJjaGVja2VkIiwidG9TdHJpbmciLCJ0YWdOYW1lIiwic2VsZWN0ZWRJbmRleCIsImNvbnZlcnQiLCJjdXJyZW50IiwicGFydHMiLCJsYXN0UGFydCIsImRpc2FibGVkIiwidHYiLCJwYXJzZUZsb2F0IiwiY21wIiwidG9GaXhlZCIsImlzQXJyYXkiLCJyZXNldCIsIm9ic2VydmVDYiIsImZpZWxkIiwiZm5hbWUiLCJvdiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNiIiwib2JzZXJ2ZVN0b3AiLCJsb25nQ2xpY2siLCJzaXp6bGUiLCJwdWJzdWIiLCJrZXlzIiwiYWxsIiwicHJvcCIsIkEiLCJYIiwiQyIsIkQiLCJWIiwiWiIsIkYxIiwiRjIiLCJGNSIsIlRBQiIsIkVTQyIsIkJDS1NQQyIsIkJBQ0tTUEFDRSIsIkVOVEVSIiwiU1BBQ0UiLCJQR1VQIiwiUEdET1dOIiwiRU5EIiwiSE9NRSIsIkxFRlQiLCJVUCIsIlJJR0hUIiwiRE9XTiIsIklOUyIsIkRFTCIsIk1JTlVTIiwiUExVUyIsIkRPVCIsIlNMQVNIIiwiTUFDTUlOVVMiLCJNQUNQTFVTIiwiTlVNU1RBUiIsIk5VTU1JTlVTIiwiTlVNUExVUyIsIk5VTURPVCIsIk5VTVNMQVNIIiwiZGlnaXRzIiwiYWxsb3dlZENoYXJzIiwiaXNNYXRoIiwiayIsImtleUNvZGUiLCJpc0N1dENvcHlQYXN0ZSIsImN0cmxPckNtZCIsImN0cmxLZXkiLCJtZXRhS2V5IiwiaXNBbHBoYSIsImlzRGlnaXQiLCJpc0FscGhhTnVtZXJpYyIsImlzTmF2Q2hhciIsImlzTnVtYmVyRmllbGQiLCJpc0VudGVyIiwiREVMQVkiLCJFVkVOVF9OQU1FIiwidGltZXIiLCJpc1JlYWR5IiwiY2xlYXJUaW1lb3V0IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJjcmVhdGVFdmVudCIsIndpbmRvdyIsImV2ZW50IiwiZXZ0IiwiaW5pdEN1c3RvbUV2ZW50IiwiRXZlbnQiLCJfY2FjaGUiLCJ0b3BpYyIsImFyZ3MiLCJhcHBseSIsIm9uIiwiY2FsbGJhY2siLCJvZmYiLCJoYW5kbGUiLCJjYSIsImZuIiwic3BsaWNlIiwib2JqIiwiaXNOb2RlTGlzdCIsIm5vZGVzIiwidGVzdCIsIm5vZGVUeXBlIiwibWl4ZWQiLCJjb250ZXh0IiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiYm9keSIsImZpcnN0Q2hpbGQiLCJmcm9tIiwiZmluZCIsInNlbGVjdG9yIiwiZXEiLCJpZHgiLCJhcHBlbmRUbyIsInBhcmVudCIsImFwcGVuZCIsImNoaWxkIiwiZXZlbnROYW1lIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hdGNoZXMiLCJtb2RFbENscyIsImFjdGlvbiIsImNvbmQiLCJjIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUNsYXNzIiwiaGFzQ2xhc3MiLCJjb250YWlucyIsInRvZ2dsZSIsImRpc3BsYXkiLCJodG1sIiwidGV4dCIsImF0dHIiLCJhbmltYXRlRWxlbWVudCIsInRvIiwib3B0cyIsIm9uY2FuY2VsIiwiZGZsdCIsInRyaW0iLCJjaGFycyIsIlJlZ0V4cCIsImx0cmltIiwicnRyaW0iLCJyYW5kIiwibWF4IiwibWluIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidWNmaXJzdCIsInMiLCJ0b1VwcGVyQ2FzZSIsImlzTnVtYmVyIiwiZm9ybWF0TnVtYmVyIiwibnVtIiwicm91bmQiLCJ0b0xvY2FsZVN0cmluZyIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsInJlZHVjZSIsImEiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ2YXJUb1JlYWxUeXBlIiwib3JpZ2luYWx2IiwiaXNPYmplY3RFbXB0eSIsIngiLCJzYW5pdGl6ZSIsImRpdiIsImZ1enp5IiwiaGF5IiwibCIsInBhcnNlVXJsIiwidXJsdCIsIlVSTCIsInByZXR0eURhdGUiLCJ0aW1lIiwiZGlmZiIsImdldFRpbWUiLCJkYXlfZGlmZiIsImlzTmFOIiwiY2VpbCIsImJ0blRvZGF5IiwiaXNTYW1lRGF5IiwiZDEiLCJkMiIsImFicyIsImdvVG8iLCJvblRvZGF5QnRuQ2xpY2siLCJvbk1vbnRoUGlja2VyQ2hhbmdlIiwic2V0TW9udGgiLCJvblllYXJQaWNrZXJDaGFuZ2UiLCJzZXRZZWFyIiwiY29tcG9uZW50cyIsIldlYkNvbXBvbmVudHMiLCJyZWFkeSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREOzs7Ozs7Ozs7Ozs7QUNq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Q0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdFhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NsaWVudC9pbmRleC5qc1wiKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9jYWxlbmRhci9cIjogXCIuL2NsaWVudC9jYWxlbmRhci9pbmRleC5qc1wiLFxuXHRcIi4vY2F0ZWdvcmllcy9cIjogXCIuL2NsaWVudC9jYXRlZ29yaWVzL2luZGV4LmpzXCIsXG5cdFwiLi9jb21wb25lbnRzL2NhbGVuZGFyL1wiOiBcIi4vY2xpZW50L2NvbXBvbmVudHMvY2FsZW5kYXIvaW5kZXguanNcIixcblx0XCIuL2NvbXBvbmVudHMvbW9udGgtcGlja2VyL1wiOiBcIi4vY2xpZW50L2NvbXBvbmVudHMvbW9udGgtcGlja2VyL2luZGV4LmpzXCIsXG5cdFwiLi9jb21wb25lbnRzL3VpLWRpYWxvZy9cIjogXCIuL2NsaWVudC9jb21wb25lbnRzL3VpLWRpYWxvZy9pbmRleC5qc1wiLFxuXHRcIi4vY29tcG9uZW50cy91aS1tc2dib3gvXCI6IFwiLi9jbGllbnQvY29tcG9uZW50cy91aS1tc2dib3gvaW5kZXguanNcIixcblx0XCIuL2NvbXBvbmVudHMvdWktdG9hc3QvXCI6IFwiLi9jbGllbnQvY29tcG9uZW50cy91aS10b2FzdC9pbmRleC5qc1wiLFxuXHRcIi4vY29tcG9uZW50cy95ZWFyLXBpY2tlci9cIjogXCIuL2NsaWVudC9jb21wb25lbnRzL3llYXItcGlja2VyL2luZGV4LmpzXCIsXG5cdFwiLi9jb3JlL1wiOiBcIi4vY2xpZW50L2NvcmUvaW5kZXguanNcIixcblx0XCIuL2NvcmUvdXRpbC9cIjogXCIuL2NsaWVudC9jb3JlL3V0aWwvaW5kZXguanNcIixcblx0XCIuL2hlYWRlci9cIjogXCIuL2NsaWVudC9oZWFkZXIvaW5kZXguanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0cmV0dXJuIG1vZHVsZTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKCdDYW5ub3QgZmluZCBtb2R1bGUgXCInICsgcmVxICsgJ1wiLicpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vY2xpZW50IHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLyRcIjsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJyZXF1aXJlKCcuL2luZGV4LmNzcycpO1xuXG5cbmZ1bmN0aW9uIGluaXQgKCkge1xuXHRjb25zb2xlLmxvZygnY2FsZW5kYXIgc2lkZWJhciBpcyByZWFkeSEnKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGluaXRcbn07XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJyZXF1aXJlKCcuL2luZGV4LmNzcycpO1xuXG5cbmZ1bmN0aW9uIGluaXQgKCkge1xuXHRjb25zb2xlLmxvZygnY2F0ZWdvcmllcyBzaWRlYmFyIHJlYWR5IScpO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0aW5pdFxufTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNhbGVuZGFyIHtcXG5cXHQtLWZpcnN0LWRheTogMTtcXG5cXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcdGN1cnNvcjogZGVmYXVsdDtcXG5cXHR3aWR0aDogaW5oZXJpdDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Zm9udDogbm9ybWFsIDFlbSBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY2FsZW5kYXIgLmRheS1jYXJkIHtcXG5cXHRwYWRkaW5nOiAyMHB4IDAgMzJweDtcXG5cXHRtYXJnaW4tYm90dG9tOiAycHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJhY2tncm91bmQ6ICNjZWU7XFxufVxcblxcbi5jYWxlbmRhciBoMSxcXG4uY2FsZW5kYXIgaDIgeyBtYXJnaW46IDA7IGxpbmUtaGVpZ2h0OiAxOyBmb250OiBpbmhlcml0OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuLmNhbGVuZGFyIGgxIHsgZm9udC1zaXplOiA0LjZlbTsgfVxcblxcbi5jYWxlbmRhciBuYXYge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRtYXJnaW46IDA7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLWdhcDogMDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcbn1cXG5cXG4uY2FsZW5kYXIgYSB7XFxuXFx0cGFkZGluZzogNXB4IDVweCAzcHggMDtcXG5cXHR0ZXh0LWFsaWduOiByaWdodDtcXG5cXHRjb2xvcjogaW5oZXJpdDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5jYWxlbmRhciAubW9udGhzIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdG1hcmdpbjogLTIwcHggMCAwO1xcblxcdHBhZGRpbmc6IDAgNXB4O1xcbn1cXG4uY2FsZW5kYXIgLm1vbnRocyBhIHsgcGFkZGluZzogM3B4IDA7IH1cXG5cXG4uY2FsZW5kYXIgLndlZWtkYXlzIHsgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM4ODg7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODg4OyB9XFxuLmNhbGVuZGFyIC53ZWVrZGF5cyBhIHsgYmFja2dyb3VuZDogI2NjYzsgfVxcblxcbi5jYWxlbmRhciAubW9udGhzIGEsXFxuLmNhbGVuZGFyIC5kYXlzIGEgeyBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uY2FsZW5kYXIgLm1vbnRocyBhOmhvdmVyLFxcbi5jYWxlbmRhciAuZGF5cyBhOmhvdmVyIHsgY29sb3I6ICM5YmY7IH1cXG5cXG4uY2FsZW5kYXIgLnNlbGVjdGVkIHsgZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiBibHVlICFpbXBvcnRhbnQ7IH1cXG5cXG4uZGF5cy0yOCAuZGF5LTI5LCAuZGF5cy0yOCAuZGF5LTMwLCAuZGF5cy0yOCAuZGF5LTMxLFxcbi5kYXlzLTI5IC5kYXktMzAsIC5kYXlzLTI5IC5kYXktMzEsXFxuLmRheXMtMzAgLmRheS0zMSB7IGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uY2FsZW5kYXIgLmRheS0xIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHZhcigtLWZpcnN0LWRheSk7IH1cXG5cXG4ueWVhciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA1cHg7XFxuXFx0bGVmdDogMDtcXG5cXHRyaWdodDogMDtcXG59XFxuLnllYXIgLmZpbGxlciB7IGZsZXg6IDE7IH1cXG5cXG4ueWVhciBidXR0b24geyBiYWNrZ3JvdW5kOiBub25lOyBib3JkZXI6IG5vbmU7IGN1cnNvcjogcG9pbnRlcjsgYm9yZGVyLXJhZGl1czogM3B4OyB9XFxuLnllYXIgYnV0dG9uOmhvdmVyIHsgY29sb3I6IGJsdWU7IH1cXG5cXG4ueWVhciBzcGFuIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0YWxpZ24tY29udGVudDogY2VudGVyO1xcblxcdHBhZGRpbmctdG9wOiAzcHg7XFxuXFx0bWFyZ2luOiAwIDNweDtcXG59XFxuXFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNhbGVuZGFyXFxcIj48ZGl2IGNsYXNzPVxcXCJkYXktY2FyZFxcXCI+PC9kaXY+XFxuXFx0PGRpdiBjbGFzcz1cXFwieWVhclxcXCI+XFxuXFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwidG9kYXlcXFwiIHRpdGxlPVxcXCJHbyB0byB0b2RheVxcXCI+VG9kYXk8L2J1dHRvbj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJmaWxsZXJcXFwiPjwvZGl2PlxcblxcdFxcdDxidXR0b24gY2xhc3M9XFxcInByZXYteWVhclxcXCIgdGl0bGU9XFxcIlByZXZpb3VzIHllYXJcXFwiPuKXgDwvYnV0dG9uPlxcblxcdFxcdDxzcGFuPjIwMTg8L3NwYW4+XFxuXFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwibmV4dC15ZWFyXFxcIiB0aXRsZT1cXFwiTmV4dCB5ZWFyXFxcIj7ilrY8L2J1dHRvbj5cXG5cXHQ8L2Rpdj5cXG5cXHQ8bmF2IGNsYXNzPVxcXCJtb250aHNcXFwiPjwvbmF2PjxuYXYgY2xhc3M9XFxcIndlZWtkYXlzXFxcIj48L25hdj48bmF2IGNsYXNzPVxcXCJkYXlzXFxcIj48L25hdj5cXG48L2Rpdj5cIjsiLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXguaHRtbCc7XG5cbmNvbnN0IHdlZWtkYXlzID0gWydNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5JywgJ1N1bmRheSddO1xuY29uc3QgbW9udGhzID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ107XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBlcmZlY3RDYWxlbmRhciBleHRlbmRzIEhUTUxFbGVtZW50IHtcblxuXHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblx0XHR0aGlzLnRlbXBsYXRlLmlubmVySFRNTCA9IGA8c3R5bGU+JHtzdHlsZX08L3N0eWxlPiR7dGVtcGxhdGV9YDtcblx0XHR0aGlzLnRlbXBsYXRlQ29udGVudCA9IHRoaXMudGVtcGxhdGUuY29udGVudDtcblx0fVxuXG5cdHN0YXRpYyBnZXQgaXMgKCkgeyByZXR1cm4gJ3BlcmZlY3QtY2FsZW5kYXInOyB9XG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzICgpIHsgcmV0dXJuIFsnZGF0ZSddOyB9XG5cblx0Y29ubmVjdGVkQ2FsbGJhY2sgKCkge1xuXHRcdHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuXHRcdHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0aGlzLnRlbXBsYXRlQ29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuXHRcdHRoaXMuZWwgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLmNhbGVuZGFyJyk7XG5cdFx0dGhpcy5kYXlDYXJkID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcuZGF5LWNhcmQnKTtcblxuXHRcdHRoaXMubW9udGhzRWwgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy5tb250aHMnKTtcblx0XHR0aGlzLndlZWtkYXlzRWwgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy53ZWVrZGF5cycpO1xuXHRcdHRoaXMuZGF5c0VsID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcuZGF5cycpO1xuXHRcdHRoaXMuZmlsbENhbGVuZGFyKCk7XG5cblx0XHR0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrLmJpbmQodGhpcykpO1xuXHRcdGlmICghdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGUnKSkgdGhpcy5kYXRlID0gbmV3IERhdGUoKTtcblx0fVxuXG5cdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWwsIG5ld1ZhbCkge1xuXHRcdGlmIChuYW1lID09PSAnZGF0ZScpIHRoaXMudXBEYXRlKG5ld1ZhbCk7XG5cdH1cblxuXHRzZXQgZGF0ZSAodmFsKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWwgIT09ICdzdHJpbmcnKSB2YWwgPSB0aGlzLmZvcm1hdCh2YWwpO1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdkYXRlJywgdmFsKTtcblx0fVxuXG5cdGdldCBkYXRlICgpIHsgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRlJyk7IH1cblxuXHRnZXQgZnVsbERhdGUgKCkge1xuXHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLmRhdGUpO1xuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRhdGVPYmosIHsgZGF0ZSwgZGF0ZVN0cjogdGhpcy5kYXRlIH0pO1xuXHR9XG5cblx0Ly8geXl5eS1tbS1kZFxuXHRmb3JtYXQgKGQpIHsgcmV0dXJuIGQudG9JU09TdHJpbmcoKS5zdWJzdHIoMCwgMTApOyB9XG5cblx0dXBEYXRlIChkYXRlKSB7XG5cdFx0ZGF0ZSA9IGRhdGUgfHwgdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGUnKTtcblx0XHRpZiAoIWRhdGUgfHwgIXRoaXMuZWwpIHJldHVybjtcblx0XHR0aGlzLnJlYWxEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG5cblx0XHRjb25zdCB5ID0gdGhpcy5yZWFsRGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRcdGNvbnN0IG0gPSB0aGlzLnJlYWxEYXRlLmdldE1vbnRoKCk7XG5cdFx0Y29uc3QgZCA9IHRoaXMucmVhbERhdGUuZ2V0RGF0ZSgpO1xuXHRcdGNvbnN0IG1vbnRoID0gbW9udGhzW21dO1xuXHRcdGNvbnN0IGZpcnN0RGF5T2ZNb250aCA9IG5ldyBEYXRlKERhdGUuVVRDKHksIG0sIDEpKS5nZXREYXkoKSB8fCA3O1x0Ly8gbWFrZSBTdW4gNyBub3QgMFxuXHRcdGNvbnN0IGRheXNJbk1vbnRoID0gbmV3IERhdGUoRGF0ZS5VVEMoeSwgbSArIDEsIDApKS5nZXREYXRlKCk7XG5cdFx0Y29uc3Qgd2Vla2RheSA9IHdlZWtkYXlzWyh0aGlzLnJlYWxEYXRlLmdldERheSgpIHx8IDcpIC0gMV07XG5cdFx0dGhpcy5kYXRlT2JqID0geyB5LCBtLCBkLCBtb250aCwgZmlyc3REYXlPZk1vbnRoLCBkYXlzSW5Nb250aCwgd2Vla2RheSB9O1xuXHRcdHRoaXMucmVuZGVyKCk7XG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdHRoaXMuZWwuc3R5bGUuc2V0UHJvcGVydHkoJy0tZmlyc3QtZGF5JywgdGhpcy5kYXRlT2JqLmZpcnN0RGF5T2ZNb250aCk7XG5cdFx0dGhpcy5lbC5jbGFzc05hbWUgPSAnY2FsZW5kYXIgZGF5cy0nICsgdGhpcy5kYXRlT2JqLmRheXNJbk1vbnRoO1xuXHRcdHRoaXMuZGF5Q2FyZC5pbm5lckhUTUwgPSB0aGlzLmdldERheUNhcmQoKTtcblx0XHR0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy55ZWFyIHNwYW4nKS5pbm5lclRleHQgPSB0aGlzLmRhdGVPYmoueTtcblxuXHRcdGlmICh0aGlzLnNlbGVjdGVkRGF5KSB0aGlzLnNlbGVjdGVkRGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG5cdFx0dGhpcy5zZWxlY3RlZERheSA9IHRoaXMuZGF5c0VsLnF1ZXJ5U2VsZWN0b3IoJy5kYXktJyArIHRoaXMuZGF0ZU9iai5kKTtcblx0XHR0aGlzLnNlbGVjdGVkRGF5LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG5cblx0XHRpZiAodGhpcy5zZWxlY3RlZE1vbnRoKSB0aGlzLnNlbGVjdGVkTW9udGguY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcblx0XHR0aGlzLnNlbGVjdGVkTW9udGggPSB0aGlzLm1vbnRoc0VsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKVt0aGlzLmRhdGVPYmoubV07XG5cdFx0dGhpcy5zZWxlY3RlZE1vbnRoLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG5cdH1cblxuXHRnZXREYXlDYXJkICgpIHsgcmV0dXJuIGA8aDE+JHt0aGlzLmRhdGVPYmouZH08L2gxPjxoMj4ke3RoaXMuZGF0ZU9iai53ZWVrZGF5fTwvaDI+YDsgfVxuXG5cdGZpbGxDYWxlbmRhciAoKSB7XG5cdFx0dGhpcy5tb250aHNFbC5pbm5lckhUTUwgPSBtb250aHMubWFwKG0gPT4gYDxhIGhyZWY9XCIjJHttfVwiPiR7bS5zdWJzdHIoMCwgMyl9PC9hPmApLmpvaW4oJycpO1xuXHRcdHRoaXMud2Vla2RheXNFbC5pbm5lckhUTUwgPSB3ZWVrZGF5cy5tYXAobSA9PiBgPGE+JHttLnN1YnN0cigwLCAzKX08L2E+YCkuam9pbignJyk7XG5cdFx0Y29uc3QgZGF5cyA9IEFycmF5KDMxKS5maWxsKDApLm1hcCgobiwgaSkgPT4gaSArIDEpLm1hcChpID0+IGA8YSBocmVmPVwiIyR7aX1cIiBjbGFzcz1cImRheS0ke2l9XCI+JHtpfTwvYT5gKTtcblx0XHR0aGlzLmRheXNFbC5pbm5lckhUTUwgPSBkYXlzLmpvaW4oJycpO1xuXHR9XG5cblx0c2V0RGF0ZSAoeSA9IHRoaXMuZGF0ZU9iai55LCBtID0gdGhpcy5kYXRlT2JqLm0sIGQgPSB0aGlzLmRhdGVPYmouZCkge1xuXHRcdGlmICh5IGluc3RhbmNlb2YgRGF0ZSkgcmV0dXJuIHRoaXMuc2V0RGF0ZSh5LmdldEZ1bGxZZWFyKCksIHkuZ2V0TW9udGgoKSwgeS5nZXREYXRlKCkpO1xuXHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyh5LCBtLCBkKSk7XG5cdFx0aWYgKGRhdGUgIT09IHRoaXMucmVhbERhdGUpIHtcblx0XHRcdHRoaXMuZGF0ZSA9IGRhdGU7XG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2UnLCB7IGRldGFpbDogdGhpcy5mdWxsRGF0ZSB9KSk7XG5cdFx0fVxuXHR9XG5cblx0b25DbGljayAoZSkge1xuXHRcdGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuXHRcdGNvbnN0IGRheUVsID0gdGFyZ2V0LmNsb3Nlc3QoJy5kYXlzIGEnKTtcblx0XHRpZiAoZGF5RWwpIHtcblx0XHRcdGNvbnN0IGRheUVscyA9IHRoaXMuZGF5c0VsLmNoaWxkcmVuO1xuXHRcdFx0Y29uc3QgZGF5ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChkYXlFbHMsIGRheUVsKSArIDE7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRyZXR1cm4gdGhpcy5zZXREYXRlKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBkYXkpO1xuXHRcdH1cblxuXHRcdGNvbnN0IG1vbnRoRWwgPSB0YXJnZXQuY2xvc2VzdCgnLm1vbnRocyBhJyk7XG5cdFx0aWYgKG1vbnRoRWwpIHtcblx0XHRcdGNvbnN0IG1vbnRoc0VscyA9IG1vbnRoRWwucGFyZW50Tm9kZS5jaGlsZHJlbjtcblx0XHRcdGNvbnN0IG1vbnRoID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChtb250aHNFbHMsIG1vbnRoRWwpO1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0cmV0dXJuIHRoaXMuc2V0RGF0ZSh1bmRlZmluZWQsIG1vbnRoKTtcblx0XHR9XG5cblx0XHRjb25zdCB0b2RheSA9IHRhcmdldC5jbG9zZXN0KCcudG9kYXknKTtcblx0XHRpZiAodG9kYXkpIHJldHVybiB0aGlzLnNldERhdGUobmV3IERhdGUoKSk7XG5cblx0XHRjb25zdCBwcmV2WWVhciA9IHRhcmdldC5jbG9zZXN0KCcucHJldi15ZWFyJyk7XG5cdFx0aWYgKHByZXZZZWFyKSByZXR1cm4gdGhpcy5zZXREYXRlKHRoaXMuZGF0ZU9iai55IC0gMSk7XG5cblx0XHRjb25zdCBuZXh0WWVhciA9IHRhcmdldC5jbG9zZXN0KCcubmV4dC15ZWFyJyk7XG5cdFx0aWYgKG5leHRZZWFyKSByZXR1cm4gdGhpcy5zZXREYXRlKHRoaXMuZGF0ZU9iai55ICsgMSk7XG5cdH1cblxufVxuXG4vLyBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ3BlcmZlY3QtY2FsZW5kYXInLCBwZXJmZWN0Q2FsZW5kYXIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ubW9udGgtcGlja2VyIHtcXG5cXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR3aWR0aDogaW5oZXJpdDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcbn1cXG5cXG5cXG4ubW9udGgge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdGZvbnQtc2l6ZTogMTJweDtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcdGZsZXg6IDE7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuXFx0Ym9yZGVyLXdpZHRoOiAwIDFweDtcXG5cXHRwYWRkaW5nLXRvcDogMnB4O1xcblxcdGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcXG59XFxuXFxuXFxuLm1vbnRoLnNlbGVjdGVkIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7XFxuXFx0Ym9yZGVyLWNvbG9yOiAjNDQ0O1xcblxcdGNvbG9yOiByZ2JhKDAsMCwwLDEpO1xcbn1cXG5cXG5cXG4ubW9udGguY3VycmVudDo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdHdpZHRoOiA1cHg7XFxuXFx0aGVpZ2h0OiA1cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMjA1REZGRkYsICMxODRBQ0FGRik7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGJvdHRvbTogMXB4O1xcblxcdGxlZnQ6IDUwJTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuXFx0b3BhY2l0eTogMC44O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi9pbmRleC5jc3MnO1xuY29uc3QgbW9udGhzID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ107XG5cbmNvbnN0IGN1cnJlbnRNb250aCA9IChuZXcgRGF0ZSgpKS5nZXRNb250aCgpO1xuXG5mdW5jdGlvbiBidG5UZW1wbGF0ZSAobW9udGgsIGkpIHtcblx0Y29uc3QgY2xzID0gWydtb250aCcsICdtb250aC0nICsgbW9udGgudG9Mb3dlckNhc2UoKSwgJ21vbnRoLScgKyAoaSArIDEpIF07XG5cdGlmIChpID09PSBjdXJyZW50TW9udGgpIGNscy5wdXNoKCdjdXJyZW50Jyk7XG5cdHJldHVybiBgPGJ1dHRvbiBjbGFzcz1cIiR7Y2xzLmpvaW4oJyAnKX1cIiBkYXRhLXZhbHVlPVwiJHtpICsgMX1cIj4ke21vbnRoLnN1YnN0cigwLCAzKX08L2J1dHRvbj5gO1xufVxuXG5cblxuY2xhc3MgbW9udGhQaWNrZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG5cblx0Y29uc3RydWN0b3IgKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0Y29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXHRcdHRlbXBsYXRlLmlubmVySFRNTCA9IGA8c3R5bGU+JHtzdHlsZX08L3N0eWxlPiR7dGhpcy50ZW1wbGF0ZSgpfWA7XG5cdFx0dGhpcy50ZW1wbGF0ZUNvbnRlbnQgPSB0ZW1wbGF0ZS5jb250ZW50O1xuXHR9XG5cblx0c3RhdGljIGdldCBpcyAoKSB7IHJldHVybiAnbW9udGgtcGlja2VyJzsgfVxuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcyAoKSB7IHJldHVybiBbJ3ZhbHVlJ107IH1cblxuXHRjb25uZWN0ZWRDYWxsYmFjayAoKSB7XG5cdFx0dGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cdFx0dGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHRoaXMudGVtcGxhdGVDb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG5cdFx0dGhpcy5lbCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcubW9udGgtcGlja2VyJyk7XG5cdFx0dGhpcy5pbnB1dEVsID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDApO1xuXG5cdFx0dGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcblx0XHRpZiAoIXRoaXMuZ2V0QXR0cmlidXRlKCd2YWx1ZScpKSB0aGlzLnZhbHVlID0gbmV3IERhdGUoKS5nZXRNb250aCgpICsgMTtcblx0fVxuXG5cdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayAobmFtZSwgb2xkVmFsLCBuZXdWYWwpIHtcblx0XHRpZiAobmFtZSA9PT0gJ3ZhbHVlJykgdGhpcy51cGRhdGUobmV3VmFsKTtcblx0fVxuXG5cblx0dGVtcGxhdGUgKCkge1xuXHRcdGNvbnN0IG1vbnRoc0h0bWwgPSBtb250aHMubWFwKGJ0blRlbXBsYXRlKS5qb2luKCcnKTtcblx0XHRyZXR1cm4gYDxkaXYgY2xhc3M9XCJtb250aC1waWNrZXJcIj4ke21vbnRoc0h0bWx9PC9kaXY+YDtcblx0fVxuXG5cdHNldCB2YWx1ZSAodmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpOyB9XG5cblx0Z2V0IHZhbHVlICgpIHsgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd2YWx1ZScpOyB9XG5cblx0dXBkYXRlICh2YWx1ZSkge1xuXHRcdGxldCBzZWxlY3RlZCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnLm1vbnRoLnNlbGVjdGVkJyk7XG5cdFx0c2VsZWN0ZWQuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJykpO1xuXHRcdHNlbGVjdGVkID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcubW9udGgtJyArIHZhbHVlKTtcblx0XHRpZiAoc2VsZWN0ZWQpIHNlbGVjdGVkLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG5cdH1cblxuXHRvbkNsaWNrIChlKSB7XG5cdFx0Y29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG5cblx0XHRjb25zdCBtb250aEJ1dHRvbiA9IHRhcmdldC5jbG9zZXN0KCcubW9udGgnKTtcblx0XHRpZiAobW9udGhCdXR0b24pIHtcblx0XHRcdGNvbnN0IHZhbCA9IG1vbnRoQnV0dG9uLmRhdGFzZXQudmFsdWU7XG5cdFx0XHR0aGlzLnZhbHVlID0gdmFsO1xuXHRcdFx0dGhpcy5maXJlRXZlbnQoJ2NoYW5nZScsIHsgdmFsdWU6IHBhcnNlSW50KHZhbCwgMTApLCBtb250aDogbW9udGhzW3ZhbCAtIDFdIH0pO1xuXHRcdH1cblx0fVxuXG5cdGZpcmVFdmVudCAobmFtZSwgZGV0YWlsKSB7XG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChuYW1lLCB7IGRldGFpbCB9KSk7XG5cdH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ21vbnRoLXBpY2tlcicsIG1vbnRoUGlja2VyKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnVpLWRpYWxvZyB7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdGxlZnQ6IDA7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0Ym90dG9tOiAwO1xcblxcdHRvcDogMDtcXG5cXHRwYWRkaW5nOiA1MHB4O1xcblxcdHotaW5kZXg6IDk5OTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0bWF4LWhlaWdodDogMTAwdnc7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRvcGFjaXR5OiAwO1xcbn1cXG5cXG4udWktZGlhbG9nLWJhY2tkcm9wIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0bGVmdDogMDtcXG5cXHR0b3A6IDA7XFxuXFx0bWluLXdpZHRoOiAxMDAlO1xcblxcdG1pbi1oZWlnaHQ6IDEwMCU7XFxuXFx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMyk7XFxufVxcblxcbi51aS1kaWFsb2ctY29udGVudCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHotaW5kZXg6IDk7XFxuXFx0d2lkdGg6IDQwMHB4O1xcblxcdG1pbi1oZWlnaHQ6IDEwMHB4O1xcblxcdG1heC1oZWlnaHQ6IDMwMHB4O1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0bWFyZ2luLXRvcDogLTEwJTtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRib3JkZXItcmFkaXVzOiAzcHg7XFxuXFx0Ym94LXNoYWRvdzogMCAzcHggNXB4IDFweCByZ2JhKDAsMCwwLDAuNCk7XFxufVxcblxcbi51aS1kaWFsb2ctY29udGVudC1pbm5lciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi51aS1kaWFsb2cudmlzaWJsZSB7IGRpc3BsYXk6IGZsZXg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwidWktZGlhbG9nXFxcIj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCJ1aS1kaWFsb2ctYmFja2Ryb3BcXFwiIHRhYmluZGV4PVxcXCIwXFxcIj48L2Rpdj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCJ1aS1kaWFsb2ctY29udGVudFxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiPlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcInVpLWRpYWxvZy1jb250ZW50LWlubmVyXFxcIj48c2xvdD48L3Nsb3Q+PC9kaXY+XFxuXFx0PC9kaXY+XFxuXFx0PGRpdiBjbGFzcz1cXFwidWktZGlhbG9nLWZvY3VzLWd1YXJkXFxcIiB0YWJpbmRleD1cXFwiMFxcXCI+PC9kaXY+XFxuPC9kaXY+XFxuXCI7IiwiaW1wb3J0IHN0eWxlIGZyb20gJy4vaW5kZXguY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4Lmh0bWwnO1xuXG5cbmNvbnN0IEZPQ1VTQUJMRV9TRUxFQ1RPUlMgPSBgXG5cdGFbaHJlZl06bm90KFt0YWJpbmRleD1cIi0xXCJdKSxcblx0aW5wdXQ6bm90KFtkaXNhYmxlZF0pOm5vdChbdGFiaW5kZXg9XCItMVwiXSksXG5cdHNlbGVjdDpub3QoW2Rpc2FibGVkXSk6bm90KFt0YWJpbmRleD1cIi0xXCJdKSxcblx0dGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pOm5vdChbdGFiaW5kZXg9XCItMVwiXSksXG5cdGJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6bm90KFt0YWJpbmRleD1cIi0xXCJdKSxcblx0aWZyYW1lOm5vdChbdGFiaW5kZXg9XCItMVwiXSksXG5cdFt0YWJpbmRleF06bm90KFt0YWJpbmRleD1cIi0xXCJdKSxcblx0W2NvbnRlbnRFZGl0YWJsZV06bm90KFt0YWJpbmRleD1cIi0xXCJdKVxuYDtcblxuXG5jb25zdCBBTklNX0NGRyA9IHtkdXJhdGlvbjogMzAwLCBlYXNpbmc6ICdlYXNlLW91dCcsIGZpbGw6ICdmb3J3YXJkcyd9O1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHVpRGlhbG9nIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXG5cdGNvbnN0cnVjdG9yICgpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy50ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cdFx0dGhpcy50ZW1wbGF0ZS5pbm5lckhUTUwgPSBgPHN0eWxlPiR7c3R5bGV9PC9zdHlsZT4ke3RlbXBsYXRlfWA7XG5cdFx0dGhpcy50ZW1wbGF0ZUNvbnRlbnQgPSB0aGlzLnRlbXBsYXRlLmNvbnRlbnQ7XG5cblx0XHR0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5vbkNvbnRlbnRDaGFuZ2UuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRzdGF0aWMgZ2V0IGlzICgpIHsgcmV0dXJuICd1aS1kaWFsb2cnOyB9XG5cblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMgKCkge1xuXHRcdHJldHVybiBbJ29wZW4nXTtcblx0fVxuXG5cdGNvbm5lY3RlZENhbGxiYWNrICgpIHtcblx0XHR0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcblx0XHR0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodGhpcy50ZW1wbGF0ZUNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcblx0XHR0aGlzLmVsID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy51aS1kaWFsb2cnKTtcblx0XHR0aGlzLmNvbnRlbnRFbCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignLnVpLWRpYWxvZy1jb250ZW50Jyk7XG5cblx0XHR0aGlzLm9ic2VydmVyLm9ic2VydmUodGhpcywgeyBhdHRyaWJ1dGVzOiBmYWxzZSwgY2hpbGRMaXN0OiB0cnVlIH0pO1xuXHRcdHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleWRvd24uYmluZCh0aGlzKSwgdHJ1ZSk7XG5cdFx0dGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5vbkJsdXIuYmluZCh0aGlzKSwgdHJ1ZSk7XG5cdFx0dGhpcy5vbkNvbnRlbnRDaGFuZ2UoKTtcblx0fVxuXG5cdC8vIGVsIG1vdmVkIHRvIGEgbmV3IGRvY3VtZW50XG5cdC8vIGFkb3B0ZWRDYWxsYmFjaygpIHt9XG5cblx0Ly8gZWwgcmVtb3ZlZCBmcm9tIERPTVxuXHRkaXNjb25uZWN0ZWRDYWxsYmFjayAoKSB7XG5cdFx0dGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cdFx0Y29uc29sZS5sb2coJ2Rpc2Nvbm5lY3RlZENhbGxiYWNrJyk7XG5cdH1cblxuXG5cdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWwsIG5ld1ZhbCkge1xuXHRcdGlmIChuYW1lID09PSAnb3BlbicpIHtcblx0XHRcdGlmIChuZXdWYWwgIT09IG51bGwpIHRoaXMuZG9PcGVuKCk7XG5cdFx0XHRlbHNlIHRoaXMuZG9DbG9zZSgpO1xuXG5cdFx0fVxuXHR9XG5cblxuXHRvbkNsaWNrIChlKSB7XG5cdFx0dGhpcy50YWJiaW5nRm9yd2FyZCA9IG51bGw7XG5cdFx0Y29uc3QgdGFyID0gZS50YXJnZXQ7XG5cdFx0Y29uc3QgYmFja2Ryb3BDbGljayA9IHRhci5jbG9zZXN0KCcudWktZGlhbG9nLWJhY2tkcm9wJyk7XG5cdFx0Y29uc3QgZGlhbG9nQ2xvc2VCdG4gPSB0YXIuZ2V0QXR0cmlidXRlKCdjbG9zZS1kaWFsb2cnKSAhPT0gbnVsbDtcblxuXHRcdGlmIChiYWNrZHJvcENsaWNrIHx8IGRpYWxvZ0Nsb3NlQnRuKSB0aGlzLm9wZW4gPSBmYWxzZTtcblx0fVxuXG5cblx0Z2V0Rm9jdXNhYmxlRWxzICgpIHtcblx0XHRpZiAoIXRoaXMuZm9jdXNhYmxlRWxlbWVudHMpIHtcblx0XHRcdGxldCBlbGVtcyA9IHRoaXMucXVlcnlTZWxlY3RvckFsbChGT0NVU0FCTEVfU0VMRUNUT1JTKTtcblx0XHRcdGxldCBmaXJzdCA9IHRoaXMuZWwsIGxhc3QgPSB0aGlzLmVsO1xuXHRcdFx0aWYgKGVsZW1zLmxlbmd0aCkge1xuXHRcdFx0XHRmaXJzdCA9IGVsZW1zWzBdO1xuXHRcdFx0XHRsYXN0ID0gZWxlbXNbZWxlbXMubGVuZ3RoIC0gMV07XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Zmlyc3QgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy51aS1kaWFsb2ctYmFja2Ryb3AnKTtcblx0XHRcdFx0bGFzdCA9IHRoaXMuY29udGVudEVsO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5mb2N1c2FibGVFbGVtZW50cyA9IHtmaXJzdCwgbGFzdH07XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmZvY3VzYWJsZUVsZW1lbnRzO1xuXHR9XG5cblxuXHRvbkJsdXIgKGUpIHtcblx0XHRpZiAodGhpcy50YWJiaW5nRm9yd2FyZCA9PT0gbnVsbCkgcmV0dXJuO1xuXG5cdFx0Y29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG5cdFx0Y29uc3Qge2ZpcnN0LCBsYXN0fSA9IHRoaXMuZ2V0Rm9jdXNhYmxlRWxzKCk7XG5cdFx0bGV0IGZvY3VzRWwgPSBudWxsO1xuXG5cdFx0aWYgKHRoaXMudGFiYmluZ0ZvcndhcmQgJiYgdGFyZ2V0ID09PSBsYXN0KSBmb2N1c0VsID0gZmlyc3Q7XG5cdFx0ZWxzZSBpZiAoIXRoaXMudGFiYmluZ0ZvcndhcmQgJiYgdGFyZ2V0ID09PSBmaXJzdCkgZm9jdXNFbCA9IGxhc3Q7XG5cblx0XHRpZiAoZm9jdXNFbCkge1xuXHRcdFx0dGhpcy50YWJiaW5nRm9yd2FyZCA9IG51bGw7XG5cdFx0XHRmb2N1c0VsLmZvY3VzKCk7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXHRcdH1cblx0fVxuXG5cblx0b25LZXlkb3duIChlKSB7XG5cdFx0aWYgKGUua2V5ID09PSAnVGFiJykgdGhpcy50YWJiaW5nRm9yd2FyZCA9ICFlLnNoaWZ0S2V5O1xuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy50YWJiaW5nRm9yd2FyZCA9IG51bGw7XG5cdFx0XHRpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB0aGlzLm9wZW4gPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXG5cdG9uQ29udGVudENoYW5nZSAoKSB7XG5cdFx0dGhpcy5mb2N1c2FibGVFbGVtZW50cyA9IG51bGw7XG5cdH1cblxuXG5cdHNldCBvcGVuICh2YWwpIHtcblx0XHRjb25zdCBpc09wZW4gPSBCb29sZWFuKHZhbCk7XG5cdFx0aWYgKGlzT3Blbikge1xuXHRcdFx0aWYgKCF0aGlzLnRyaWdnZXIgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkgdGhpcy50cmlnZ2VyID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKCdvcGVuJywgJycpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKCdvcGVuJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIgPSBudWxsO1xuXHRcdH1cblx0fVxuXG5cdGdldCBvcGVuICgpIHtcblx0XHRyZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ29wZW4nKTtcblx0fVxuXG5cblxuXHRkb09wZW4gKHRyaWdnZXIpIHtcblx0XHRpZiAodGhpcy52aXNpYmxlKSByZXR1cm47XG5cdFx0aWYgKHRyaWdnZXIpIHRoaXMudHJpZ2dlciA9IHRyaWdnZXI7XG5cdFx0dGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG5cdFx0dGhpcy52aXNpYmxlID0gdHJ1ZTtcblx0XHR0aGlzLmdldEZvY3VzYWJsZUVscygpLmZpcnN0LmZvY3VzKCk7XG5cdFx0dGhpcy5jb250ZW50RWwuYW5pbWF0ZShbe3RyYW5zZm9ybTogJ3NjYWxlKC45KSd9LCB7dHJhbnNmb3JtOiAnc2NhbGUoMSknfV0sIEFOSU1fQ0ZHKTtcblx0XHR0aGlzLmVsXG5cdFx0XHQuYW5pbWF0ZShbeyBvcGFjaXR5OiAwIH0sIHtvcGFjaXR5OiAxfV0sIEFOSU1fQ0ZHKVxuXHRcdFx0Lm9uZmluaXNoID0gdGhpcy5vbk9wZW5lZC5iaW5kKHRoaXMpO1xuXHR9XG5cblx0ZG9DbG9zZSAoKSB7XG5cdFx0aWYgKCF0aGlzLnZpc2libGUpIHJldHVybjtcblx0XHRpZiAodGhpcy50cmlnZ2VyKSB0aGlzLnRyaWdnZXIuZm9jdXMoKTtcblx0XHR0aGlzLmNvbnRlbnRFbC5hbmltYXRlKFt7dHJhbnNmb3JtOiAnc2NhbGUoMSknfSwge3RyYW5zZm9ybTogJ3NjYWxlKC45KSd9XSwgQU5JTV9DRkcpO1xuXHRcdHRoaXMuZWxcblx0XHRcdC5hbmltYXRlKFt7IG9wYWNpdHk6IDEgfSwge29wYWNpdHk6IDB9XSwgQU5JTV9DRkcpXG5cdFx0XHQub25maW5pc2ggPSB0aGlzLm9uQ2xvc2VkLmJpbmQodGhpcyk7XG5cdH1cblxuXG5cdG9uT3BlbmVkICgpIHtcblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdvcGVuJywge30pKTtcblx0fVxuXG5cdG9uQ2xvc2VkICgpIHtcblx0XHR0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcblx0XHR0aGlzLnZpc2libGUgPSBmYWxzZTtcblx0XHRpZiAodGhpcy50cmlnZ2VyKSB0aGlzLnRyaWdnZXIuZm9jdXMoKTtcblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjbG9zZScsIHt9KSk7XG5cdH1cblxuXG59XG4iLCJpbXBvcnQgdWlEaWFsb2cgZnJvbSAnLi4vdWktZGlhbG9nLyc7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB1aU1zZ0JveCBleHRlbmRzIHVpRGlhbG9nIHtcblxuXHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHR9XG5cblx0c3RhdGljIGdldCBpcyAoKSB7IHJldHVybiAndWktbWVzc2FnZWJveCc7IH1cblxuXG5cdG9uQ2xvc2VkICgpIHtcblx0XHRzdXBlci5vbkNsb3NlZCgpO1xuXHRcdHRoaXMucmVtb3ZlKCk7XG5cdH1cblxufVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udWktdG9hc3Qtd3JhcHBlciB7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdHJpZ2h0OiAwO1xcblxcdHotaW5kZXg6IDk5O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRwYWRkaW5nLXRvcDogMTBweDtcXG5cXHRoZWlnaHQ6IDA7XFxufVxcblxcblxcbi51aS10b2FzdCB7XFxuXFx0bWluLXdpZHRoOiAyMDBweDtcXG5cXHRtYXgtd2lkdGg6IDUwJTtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRtYXJnaW46IDVweCBhdXRvO1xcblxcdHBhZGRpbmc6IDIwcHggMzBweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Ym9yZGVyLXJhZGl1czogMzBweDtcXG5cXHRjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwgMC44KTtcXG5cXHRib3gtc2hhZG93OiAwIDAgMXB4IDAgcmdiYSgwLDAsMCwgMC41KTtcXG5cXHRvcGFjaXR5OiAxO1xcblxcbn1cXG4udWktdG9hc3Q6Zm9jdXMgeyBib3gtc2hhZG93OiAwIDAgNXB4IDJweCByZ2JhKDAsMCwwLDAuNSk7IG91dGxpbmU6IG5vbmU7IH1cXG5cXG4udWktdG9hc3QgZW0ge1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0Y29sb3I6ICNmZmY7XFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5cXG4udWktdG9hc3QtaW5mbyB7IGJhY2tncm91bmQ6IHJnYmEoMCwgMTAwLCA1MCwgMC44KTsgfVxcbi51aS10b2FzdC13YXJuaW5nIHsgYmFja2dyb3VuZDogcmdiYSgxMjAsIDg2LCAwLCAwLjgpOyB9XFxuLnVpLXRvYXN0LWVycm9yIHsgYmFja2dyb3VuZDogcmdiYSgyMDEsIDU4LCAzMSwgMC44KTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJ1aS10b2FzdC13cmFwcGVyXFxcIj48L2Rpdj5cXG5cIjsiLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXguaHRtbCc7XG5cblxuY29uc3QgQU5JTV9DRkcgPSB7ZHVyYXRpb246IDMwMCwgZWFzaW5nOiAnZWFzZS1vdXQnLCBmaWxsOiAnZm9yd2FyZHMnfTtcbmNvbnN0IFRPQVNUX1RJTUVPVVQgPSA1MDAwO1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB1aVRvYXN0IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXG5cdGNvbnN0cnVjdG9yICgpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy50ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cdFx0dGhpcy50ZW1wbGF0ZS5pbm5lckhUTUwgPSBgPHN0eWxlPiR7c3R5bGV9PC9zdHlsZT4ke3RlbXBsYXRlfWA7XG5cdFx0dGhpcy50ZW1wbGF0ZUNvbnRlbnQgPSB0aGlzLnRlbXBsYXRlLmNvbnRlbnQ7XG5cdH1cblxuXHRzdGF0aWMgZ2V0IGlzICgpIHsgcmV0dXJuICd1aS10b2FzdCc7IH1cblxuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcyAoKSB7fVxuXG5cdGNvbm5lY3RlZENhbGxiYWNrICgpIHtcblx0XHR0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcblx0XHR0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodGhpcy50ZW1wbGF0ZUNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcblx0XHR0aGlzLmVsID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy51aS10b2FzdC13cmFwcGVyJyk7XG5cdFx0dGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5ZG93bi5iaW5kKHRoaXMpLCB0cnVlKTtcblx0fVxuXG5cblx0c2hvdyAoeyBtc2cgPSAnJywgdHlwZSA9ICdpbmZvJywgYXV0b2Nsb3NlID0gdHJ1ZSB9KSB7XG5cdFx0aWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHRoaXMudHJpZ2dlciA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cdFx0Y29uc3QgdG9hc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0b2FzdC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XG5cdFx0dG9hc3QuY2xhc3NOYW1lID0gYHVpLXRvYXN0IHVpLXRvYXN0LSR7dHlwZX1gO1xuXHRcdHRvYXN0LmlubmVySFRNTCA9IG1zZztcblx0XHR0aGlzLmVsLmFwcGVuZENoaWxkKHRvYXN0KTtcblx0XHR0b2FzdC5mb2N1cygpO1xuXG5cdFx0Y29uc3QgVE9BU1RIID0gdG9hc3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXHRcdGNvbnN0IHByb3BzID0gW1xuXHRcdFx0e29wYWNpdHk6IDAsIG1hcmdpblRvcDogYC0ke1RPQVNUSH1weGAsIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknfSxcblx0XHRcdHtvcGFjaXR5OiAxLCBtYXJnaW5Ub3A6IDAsIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ31cblx0XHRdO1xuXHRcdGNvbnN0IGFuaW0gPSB0b2FzdC5hbmltYXRlKHByb3BzLCBBTklNX0NGRyk7XG5cdFx0aWYgKGF1dG9jbG9zZSkge1xuXHRcdFx0YW5pbS5vbmZpbmlzaCA9ICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5oaWRlKHRvYXN0KSwgVE9BU1RfVElNRU9VVCk7XG5cdFx0fVxuXHR9XG5cblxuXHRoaWRlICh0b2FzdCkge1xuXHRcdGNvbnN0IFRPQVNUSCA9IHRvYXN0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblx0XHR0b2FzdC5jbGFzc0xpc3QuYWRkKCd1aS10b2FzdC1oaWRpbmcnKTtcblx0XHRjb25zdCBwcm9wcyA9IFtcblx0XHRcdHtvcGFjaXR5OiAxLCBtYXJnaW5Ub3A6IDAsIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ30sXG5cdFx0XHR7b3BhY2l0eTogMCwgbWFyZ2luVG9wOiBgLSR7VE9BU1RIfXB4YCwgdHJhbnNmb3JtOiAnc2NhbGUoMC44KSd9XG5cdFx0XTtcblx0XHRjb25zdCBhbmltID0gdG9hc3QuYW5pbWF0ZShwcm9wcywgQU5JTV9DRkcpO1xuXHRcdGFuaW0ub25maW5pc2ggPSAoKSA9PiB0b2FzdC5yZW1vdmUoKTtcblxuXHRcdGNvbnN0IHRvYXN0cyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnLnVpLXRvYXN0Om5vdCgudWktdG9hc3QtaGlkaW5nKScpO1xuXHRcdGlmICh0b2FzdHMubGVuZ3RoKSB0b2FzdHNbdG9hc3RzLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG5cdFx0ZWxzZSBpZiAodGhpcy50cmlnZ2VyKSB0aGlzLnRyaWdnZXIuZm9jdXMoKTtcblx0fVxuXG5cblx0b25DbGljayAoZSkge1xuXHRcdGNvbnN0IHRvYXN0ID0gZS50YXJnZXQuY2xvc2VzdCgnLnVpLXRvYXN0Jyk7XG5cdFx0aWYgKHRvYXN0KSB0aGlzLmhpZGUodG9hc3QpO1xuXHR9XG5cblxuXHRvbktleWRvd24gKGUpIHtcblx0XHRpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG5cdFx0XHRlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dGhpcy5vbkNsaWNrKGUpO1xuXHRcdH1cblx0fVxuXG5cblxuXG59XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi55ZWFyLXBpY2tlciB7XFxuXFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Zm9udDogbm9ybWFsIDFlbSBzYW5zLXNlcmlmO1xcblxcdHdpZHRoOiBpbmhlcml0O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC45KTtcXG59XFxuXFxuLnllYXItcGlja2VyIGlucHV0IHtcXG5cXHRhcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuXFx0LW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0bWluLXdpZHRoOiAzZW07XFxuXFx0cGFkZGluZzogMnB4IDAgMXB4O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnllYXItcGlja2VyIC5idG4ge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGhlaWdodDogMTAwJTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInllYXItcGlja2VyXFxcIj5cXG5cXHQ8YnV0dG9uIGNsYXNzPVxcXCJidG4gcHJldi15ZWFyXFxcIiB0aXRsZT1cXFwiUHJldmlvdXMgeWVhclxcXCI+4peAPC9idXR0b24+XFxuXFx0PGlucHV0IGNsYXNzPVxcXCJidG5cXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgbWluPVxcXCIyMDAwXFxcIiBtYXg9XFxcIjMwMDBcXFwiPlxcblxcdDxidXR0b24gY2xhc3M9XFxcImJ0biBuZXh0LXllYXJcXFwiIHRpdGxlPVxcXCJOZXh0IHllYXJcXFwiPuKWtjwvYnV0dG9uPlxcbjwvZGl2PlwiOyIsImltcG9ydCBzdHlsZSBmcm9tICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC5odG1sJztcblxuY2xhc3MgeWVhclBpY2tlciBleHRlbmRzIEhUTUxFbGVtZW50IHtcblxuXHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblx0XHR0aGlzLnRlbXBsYXRlLmlubmVySFRNTCA9IGA8c3R5bGU+JHtzdHlsZX08L3N0eWxlPiR7dGVtcGxhdGV9YDtcblx0XHR0aGlzLnRlbXBsYXRlQ29udGVudCA9IHRoaXMudGVtcGxhdGUuY29udGVudDtcblx0fVxuXG5cdHN0YXRpYyBnZXQgaXMgKCkgeyByZXR1cm4gJ3llYXItcGlja2VyJzsgfVxuXG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzICgpIHsgcmV0dXJuIFsndmFsdWUnXTsgfVxuXG5cdGNvbm5lY3RlZENhbGxiYWNrICgpIHtcblx0XHR0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcblx0XHR0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodGhpcy50ZW1wbGF0ZUNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcblx0XHR0aGlzLmVsID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy55ZWFyLXBpY2tlcicpO1xuXHRcdHRoaXMuaW5wdXRFbCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAwKTtcblxuXHRcdHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5pbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5vbklucHV0LmJpbmQodGhpcykpO1xuXHRcdGlmICghdGhpcy5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpIHRoaXMudmFsdWUgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG5cdH1cblxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgKG5hbWUsIG9sZFZhbCwgbmV3VmFsKSB7XG5cdFx0aWYgKG5hbWUgPT09ICd2YWx1ZScpIHRoaXMudXBkYXRlKG5ld1ZhbCk7XG5cdH1cblxuXG5cdHNldCB2YWx1ZSAodmFsKSB7IHRoaXMuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbCk7IH1cblxuXHRnZXQgdmFsdWUgKCkgeyByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7IH1cblxuXHR1cGRhdGUgKHZhbCkgeyB0aGlzLmlucHV0RWwudmFsdWUgPSB2YWw7IH1cblxuXHRhZGRUb1ZhbHVlICh2YWwpIHtcblx0XHRjb25zdCB2YWx1ZSA9IHBhcnNlSW50KHRoaXMudmFsdWUsIDEwKSArIHZhbDtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5maXJlRXZlbnQoJ2NoYW5nZScsIHsgdmFsdWUgfSk7XG5cdH1cblxuXHRvbklucHV0ICgpIHtcblx0XHRjb25zdCBjdXJyZW50VmFsdWUgPSBwYXJzZUludCh0aGlzLnZhbHVlLCAxMCk7XG5cdFx0Y29uc3QgdmFsdWUgPSBwYXJzZUludCh0aGlzLmlucHV0RWwudmFsdWUsIDEwKTtcblx0XHRpZiAoY3VycmVudFZhbHVlICE9PSB2YWx1ZSkge1xuXHRcdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHRcdFx0dGhpcy5maXJlRXZlbnQoJ2NoYW5nZScsIHsgdmFsdWUgfSk7XG5cdFx0fVxuXHR9XG5cblx0b25DbGljayAoZSkge1xuXHRcdGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuXHRcdGlmICh0YXJnZXQuY2xvc2VzdCgnLnByZXYteWVhcicpKSByZXR1cm4gdGhpcy5hZGRUb1ZhbHVlKC0xKTtcblx0XHRpZiAodGFyZ2V0LmNsb3Nlc3QoJy5uZXh0LXllYXInKSkgcmV0dXJuIHRoaXMuYWRkVG9WYWx1ZSgxKTtcblx0fVxuXG5cdGZpcmVFdmVudCAobmFtZSwgZGV0YWlsKSB7XG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChuYW1lLCB7IGRldGFpbCB9KSk7XG5cdH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3llYXItcGlja2VyJywgeWVhclBpY2tlcik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblxuXHRkb2N1bWVudDoge1xuXHRcdGNsaWNrZWQ6ICdkb2N1bWVudC1jbGlja2VkJyxcblx0XHRrZXl1cDogJ2RvY3VtZW50LWtleXVwJ1xuXHR9LFxuXG5cdHRvYXN0OiB7XG5cdFx0aW5mbzogJ3RvYXN0LWluZm8nLFxuXHRcdGVycm9yOiAndG9hc3QtZXJyb3InLFxuXHRcdHdhcm5pbmc6ICd0b2FzdC13YXJuaW5nJyxcblx0fSxcblxufTtcbiIsIlxuXG4vLyBmdW5jdGlvbiBpbml0IChjb21wb25lbnRzLCBwYXRoID0gJy4uLycpIHtcbi8vIFx0Y29tcG9uZW50cyA9IFsuLi5uZXcgU2V0KGNvbXBvbmVudHMpXTtcdC8vIHVuaXF1ZVxuLy8gXHRjb21wb25lbnRzLmZvckVhY2goYyA9PiB7XG4vLyBcdFx0Y29uc3QgbSA9IHJlcXVpcmUocGF0aCArIGMpO1xuLy8gXHRcdGlmIChtICYmIG0uaW5pdCkgbS5pbml0KCk7XG4vLyBcdH0pO1xuXG4vLyBcdHdpbmRvdy5mb2N1cygpO1xuLy8gfVxuXG5cbi8vIG1vZHVsZS5leHBvcnRzID0ge1xuXG4vLyBcdGluaXRcbi8vIH07XG4iLCJjb25zdCBFVkVOVCA9IHJlcXVpcmUoJy4vZXZlbnRzJyk7XG5jb25zdCBoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlcicpO1xuY29uc3QgJCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0JCxcblx0aGVscGVyLFxuXHRFVkVOVCxcbn07XG4iLCJjb25zdCB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbmNvbnN0IGJhc2VVcmwgPSAnJztcblxuZnVuY3Rpb24gYWpheCAob3B0aW9ucykge1xuXHRpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSBvcHRpb25zID0geyB1cmw6IG9wdGlvbnMgfTtcblxuXHRsZXQgcmVzcDtcblx0bGV0IGRhdGEgPSBvcHRpb25zLmRhdGEgfHwgJyc7XG5cdGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG5cdG9wdGlvbnMudXJsID0gYmFzZVVybCArIG9wdGlvbnMudXJsO1xuXHRvcHRpb25zLm1ldGhvZCA9IG9wdGlvbnMubWV0aG9kIHx8ICdHRVQnO1xuXHRvcHRpb25zLnR5cGUgPSBvcHRpb25zLnR5cGUgfHwgJ2pzb24nO1xuXG5cdGlmIChkYXRhKSB7XG5cdFx0aWYgKG9wdGlvbnMubWV0aG9kLnRvTG93ZXJDYXNlKCkgPT09ICdnZXQnKSBvcHRpb25zLnVybCArPSB1dGlsLnNlcmlhbGl6ZShkYXRhKTtcblx0XHRlbHNlIGlmIChvcHRpb25zLnR5cGUgPT09ICdqc29uJykgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXHR9XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0cmVxLm9wZW4ob3B0aW9ucy5tZXRob2QsIG9wdGlvbnMudXJsLCB0cnVlKTtcblx0XHRyZXEub25sb2FkID0gKCkgPT4ge1xuXHRcdFx0aWYgKHJlcS5zdGF0dXMgPj0gMjAwICYmIHJlcS5zdGF0dXMgPCA0MDApIHtcblx0XHRcdFx0dHJ5IHsgcmVzcCA9IEpTT04ucGFyc2UocmVxLnJlc3BvbnNlVGV4dCk7IH1cblx0XHRcdFx0Y2F0Y2ggKGUpIHsgcmVzcCA9IHJlcS5yZXNwb25zZVRleHQ7IH1cblx0XHRcdFx0cmVzb2x2ZShyZXNwKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgcmVqZWN0KHJlcS5zdGF0dXNUZXh0KTtcblx0XHR9O1xuXHRcdHJlcS5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHJlcS5zdGF0dXNUZXh0KTtcblx0XHRyZXEuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgYGFwcGxpY2F0aW9uLyR7b3B0aW9ucy50eXBlfTsgY2hhcnNldD1VVEYtOGApO1xuXHRcdHJlcS5zZW5kKGRhdGEpO1xuXHR9KTtcbn1cblxuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRhamF4LFxuXHRnZXQ6ICh1cmwsIGRhdGEpID0+IGFqYXgoeyB1cmwsIGRhdGE6IGRhdGEgfHwge30gfSksXG5cdHBvc3Q6ICh1cmwsIGRhdGEpID0+IGFqYXgoeyB1cmwsIGRhdGE6IGRhdGEgfHwge30sIG1ldGhvZDogJ1BPU1QnIH0pLFxuXHRwdXQ6ICh1cmwsIGRhdGEpID0+IGFqYXgoeyB1cmwsIGRhdGE6IGRhdGEgfHwge30sIG1ldGhvZDogJ1BVVCcgfSksXG5cdGRlbDogKHVybCwgZGF0YSkgPT4gYWpheCh7IHVybCwgZGF0YTogZGF0YSB8fCB7fSwgbWV0aG9kOiAnREVMRVRFJyB9KVxufTtcbiIsImNvbnN0IGtleUJyZWFrZXIgPSAvW15bXFxdXSsvZztcbmNvbnN0IG51bWJlck1hdGNoZXIgPSAvXlstK10/WzAtOV0qXFwuP1swLTldKyhbZUVdWy0rXT9bMC05XSspPyQvO1xuXG5mdW5jdGlvbiBfaXNOdW1iZXIgKHZhbHVlKSB7XG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSByZXR1cm4gdHJ1ZTtcblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuIHZhbHVlLm1hdGNoKG51bWJlck1hdGNoZXIpO1xufVxuXG5mdW5jdGlvbiBfZGVjb2RlRW50aXRpZXMgKHN0cikge1xuXHRjb25zdCBkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGQuaW5uZXJIVE1MID0gc3RyO1xuXHRyZXR1cm4gZC5pbm5lclRleHQgfHwgZC50ZXh0Q29udGVudDtcbn1cblxuZnVuY3Rpb24gX2dldElucHV0cyAoZm9ybSkge1xuXHRjb25zdCBpbnB1dHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lXScpO1xuXHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoaW5wdXRzKSB8fCBbXTtcbn1cblxuXG5cbi8qKlxuICogRm9ybSBjb21wb25lbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBlbCAtIGZvcm0gRE9NIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gRm9ybSAoZWwpIHtcblx0aWYgKCFlbCkgcmV0dXJuIG51bGw7XG5cdGlmICghKHRoaXMgaW5zdGFuY2VvZiBGb3JtKSkgcmV0dXJuIG5ldyBGb3JtKGVsKTtcblx0dGhpcy5mb3JtID0gZWw7XG5cdGlmIChlbC5lbGVtZW50cykgdGhpcy5pbnB1dHMgPSBlbC5lbGVtZW50cztcbn1cblxuRm9ybS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHBhcmFtcyA9IHt9LCBjbGVhcikge1xuXHR0aGlzLnN1c3BlbmRPYnNlcnZlID0gdHJ1ZTtcblx0aWYgKHRoaXMuYW5pbUZyYW1lKSBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1GcmFtZSk7XG5cblx0Y29uc3QgaW5wdXRzID0gX2dldElucHV0cyh0aGlzLmZvcm0pO1xuXHRmb3IgKGxldCBpbnB1dCBvZiBpbnB1dHMpIHtcblx0XHRjb25zdCBuYW1lID0gaW5wdXQubmFtZTtcblx0XHRsZXQgdmFsdWUgPSAodHlwZW9mIHBhcmFtc1tuYW1lXSA9PT0gJ3VuZGVmaW5lZCcgPyAnJyA6IHBhcmFtc1tuYW1lXSk7XG5cblx0XHQvLyBpZiBuYW1lIGlzIG9iamVjdCwgZS5nLiB1c2VyW25hbWVdLCB1c2VyRGF0YVthZGRyZXNzXVtzdHJlZXRdLCB1cGRhdGUgdmFsdWUgdG8gcmVhZCB0aGlzIGNvcnJlY3RseVxuXHRcdGlmIChuYW1lLmluZGV4T2YoJ1snKSA+IC0xKSB7XG5cdFx0XHRsZXQgdiA9IHBhcmFtcztcblx0XHRcdGxldCBuYW1lcyA9IG5hbWUucmVwbGFjZSgvW1tcXF1dL2csICd8Jykuc3BsaXQoJ3wnKTtcblx0XHRcdGZvciAobGV0IG4gb2YgbmFtZXMpIHtcblx0XHRcdFx0aWYgKHZbbl0pIHYgPSB2W25dO1xuXHRcdFx0XHRlbHNlIHsgdiA9IHVuZGVmaW5lZDsgYnJlYWs7IH1cblx0XHRcdH1cblx0XHRcdHZhbHVlID0gdjtcblx0XHR9XG5cblx0XHQvLyBpZiBjbGVhcj09dHJ1ZSBhbmQgbm8gdmFsdWUgPSBjbGVhciBmaWVsZCwgb3RoZXJ3aXNlIC0gbGVhdmUgaXQgYXMgaXQgd2FzXG5cdFx0aWYgKGNsZWFyICE9PSB0cnVlICYmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8ICFwYXJhbXNbbmFtZV0pKSBjb250aW51ZTtcblxuXHRcdC8vIGlmIG5vIHZhbHVlIC0gY2xlYXIgZmllbGRcblx0XHRpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkgdmFsdWUgPSAnJztcblxuXHRcdC8vIGRlY29kZSBodG1sIHNwZWNpYWwgY2hhcnMgKGVudGl0aWVzKVxuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluZGV4T2YoJyYnKSA+IC0xKSB2YWx1ZSA9IF9kZWNvZGVFbnRpdGllcyh2YWx1ZSk7XG5cblx0XHRpZiAoaW5wdXQudHlwZSA9PT0gJ3JhZGlvJykgaW5wdXQuY2hlY2tlZCA9IChpbnB1dC52YWx1ZS50b1N0cmluZygpID09PSB2YWx1ZS50b1N0cmluZygpKTtcblx0XHRlbHNlIGlmIChpbnB1dC50eXBlID09PSAnY2hlY2tib3gnKSBpbnB1dC5jaGVja2VkID0gdmFsdWU7XG5cdFx0ZWxzZSBpZiAoaW5wdXQudGFnTmFtZSA9PT0gJ1NFTEVDVCcpIHtcblx0XHRcdGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkgaW5wdXQuc2VsZWN0ZWRJbmRleCA9IDA7XG5cdFx0XHRlbHNlIGlucHV0LnZhbHVlID0gdmFsdWU7XG5cdFx0fVxuXHRcdGVsc2UgaW5wdXQudmFsdWUgPSB2YWx1ZTtcblx0fVxuXHR0aGlzLnN1c3BlbmRPYnNlcnZlID0gZmFsc2U7XG5cblx0cmV0dXJuIHRoaXMudXBkYXRlKCk7XG59O1xuXG5cbkZvcm0ucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChjb252ZXJ0ID0gZmFsc2UpIHtcblx0Y29uc3QgaW5wdXRzID0gX2dldElucHV0cyh0aGlzLmZvcm0pO1xuXHRsZXQgZGF0YSA9IHt9LCBjdXJyZW50O1xuXG5cdGZvciAobGV0IGlucHV0IG9mIGlucHV0cykge1xuXHRcdGxldCB0eXBlID0gaW5wdXQudHlwZSAmJiBpbnB1dC50eXBlLnRvTG93ZXJDYXNlKCksIHZhbHVlLCBwYXJ0cywgbGFzdFBhcnQsIGxhc3Q7XG5cblx0XHQvLyBpZiB3ZSBhcmUgc3VibWl0IG9yIGRpc2FibGVkIC0gaWdub3JlXG5cdFx0aWYgKCh0eXBlID09PSAnc3VibWl0JykgfHwgIWlucHV0Lm5hbWUgfHwgaW5wdXQuZGlzYWJsZWQpIGNvbnRpbnVlO1xuXG5cdFx0dmFsdWUgPSBpbnB1dC52YWx1ZTtcblx0XHRwYXJ0cyA9IGlucHV0Lm5hbWUubWF0Y2goa2V5QnJlYWtlcik7XG5cblx0XHQvLyByZXR1cm4gb25seSBcImNoZWNrZWRcIiByYWRpbyB2YWx1ZVxuXHRcdGlmICh0eXBlID09PSAncmFkaW8nICYmICFpbnB1dC5jaGVja2VkKSBjb250aW51ZTtcblxuXHRcdC8vIGNvbnZlcnQgY2hla2JveCB0byBbdHJ1ZSB8IGZhbHNlXVxuXHRcdGlmICh0eXBlID09PSAnY2hlY2tib3gnKSB2YWx1ZSA9IGlucHV0LmNoZWNrZWQ7XG5cblx0XHRpZiAoY29udmVydCkge1xuXHRcdFx0aWYgKF9pc051bWJlcih2YWx1ZSkpIHtcblx0XHRcdFx0bGV0IHR2ID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cdFx0XHRcdGxldCBjbXAgPSB0diArICcnO1xuXHRcdFx0XHQvLyBjb252ZXJ0IChzdHJpbmcpMTAwLjAwIHRvIChpbnQpMTAwXG5cdFx0XHRcdGlmICh2YWx1ZS5pbmRleE9mKCcuJykgPiAwKSBjbXAgPSB0di50b0ZpeGVkKHZhbHVlLnNwbGl0KCcuJylbMV0ubGVuZ3RoKTtcblx0XHRcdFx0aWYgKGNtcCA9PT0gdmFsdWUpIHZhbHVlID0gdHY7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICh2YWx1ZSA9PT0gJ3RydWUnKSB2YWx1ZSA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh2YWx1ZSA9PT0gJ2ZhbHNlJykgdmFsdWUgPSBmYWxzZTtcblx0XHRcdGlmICh2YWx1ZSA9PT0gJycpIHZhbHVlID0gbnVsbDtcblx0XHR9XG5cblx0XHRjdXJyZW50ID0gZGF0YTtcblx0XHQvLyBnbyB0aHJvdWdoIGFuZCBjcmVhdGUgbmVzdGVkIG9iamVjdHNcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aCAtIDE7IGkrKykge1xuXHRcdFx0Y3VycmVudFtwYXJ0c1tpXV0gPSBjdXJyZW50W3BhcnRzW2ldXSB8fCB7fTtcblx0XHRcdGN1cnJlbnQgPSBjdXJyZW50W3BhcnRzW2ldXTtcblx0XHR9XG5cdFx0bGFzdFBhcnQgPSBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXTtcblxuXHRcdC8vIG5vdyB3ZSBhcmUgb24gdGhlIGxhc3QgcGFydCwgc2V0IHRoZSB2YWx1ZVxuXHRcdGxhc3QgPSBjdXJyZW50W2xhc3RQYXJ0XTtcblx0XHRpZiAobGFzdCkge1xuXHRcdFx0aWYgKCFBcnJheS5pc0FycmF5KGxhc3QpKSBjdXJyZW50W2xhc3RQYXJ0XSA9IChsYXN0ID09PSB1bmRlZmluZWQgPyBbXSA6IFtsYXN0XSk7XG5cdFx0XHRjdXJyZW50W2xhc3RQYXJ0XS5wdXNoKHZhbHVlKTtcblx0XHR9XG5cdFx0ZWxzZSBjdXJyZW50W2xhc3RQYXJ0XSA9IHZhbHVlO1xuXHR9XG5cblx0cmV0dXJuIGRhdGE7XG59O1xuXG5Gb3JtLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHsgdGhpcy5zZXQoe30pOyB9O1xuXG5Gb3JtLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHsgdGhpcy5zZXQoe30sIHRydWUpOyB9O1xuXG5cbkZvcm0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKHRoaXMuYW5pbUZyYW1lKSBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1GcmFtZSk7XG5cdGlmICghdGhpcy5vYnNlcnZlQ2IpIHJldHVybjtcblx0aWYgKHRoaXMuc3VzcGVuZE9ic2VydmUpIHJldHVybjtcblx0Zm9yIChsZXQgZmllbGQgb2YgdGhpcy5mb3JtLmVsZW1lbnRzKSB7XG5cdFx0bGV0IGZuYW1lID0gZmllbGQubmFtZS5yZXBsYWNlKC9bW1xcXV0vZywgJ18nKSArICd2YWwnLFxuXHRcdFx0b3YgPSB0aGlzLmZvcm0uZGF0YXNldFtmbmFtZV0sXG5cdFx0XHR2ID0gZmllbGQudmFsdWU7XG5cdFx0aWYgKGZuYW1lID09PSAndmFsJykgY29udGludWU7XG5cdFx0aWYgKGZpZWxkLnR5cGUgPT09ICdjaGVja2JveCcpIHtcblx0XHRcdHYgPSBmaWVsZC5jaGVja2VkO1xuXHRcdFx0b3YgPSAob3YgPT09ICd0cnVlJyk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09ICdyYWRpbycgJiYgIWZpZWxkLmNoZWNrZWQpIGNvbnRpbnVlO1xuXHRcdGlmICh0eXBlb2Ygb3YgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB2ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0aWYgKGZpZWxkLnR5cGUgPT09ICdyYWRpbycpIHRoaXMub2JzZXJ2ZUNiKHYsIG92LCBmaWVsZCk7XG5cdFx0XHRvdiA9IHRoaXMuZm9ybS5kYXRhc2V0W2ZuYW1lXSA9IHY7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKG92ICE9PSB2KSB7XG5cdFx0XHR0aGlzLmZvcm0uZGF0YXNldFtmbmFtZV0gPSB2O1xuXHRcdFx0dGhpcy5vYnNlcnZlQ2Iodiwgb3YsIGZpZWxkKTtcblx0XHR9XG5cdH1cblxuXHR0aGlzLmFuaW1GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcbn07XG5Gb3JtLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKGNiKSB7IHRoaXMudXBkYXRlKHRoaXMub2JzZXJ2ZUNiID0gY2IpOyB9O1xuRm9ybS5wcm90b3R5cGUub2JzZXJ2ZVN0b3AgPSBmdW5jdGlvbiAoKSB7IHRoaXMub2JzZXJ2ZUNiID0gbnVsbDsgfTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gRm9ybTtcbiIsImNvbnN0IGxvbmdDbGljayA9IHJlcXVpcmUoJy4vbG9uZy1jbGljaycpO1xuY29uc3Qgc2l6emxlID0gcmVxdWlyZSgnLi9zaXp6bGUnKTtcbmNvbnN0IGFqYXggPSByZXF1aXJlKCcuL2FqYXgnKTtcbmNvbnN0IGZvcm0gPSByZXF1aXJlKCcuL2Zvcm0nKTtcbmNvbnN0IHB1YnN1YiA9IHJlcXVpcmUoJy4vcHVic3ViJyk7XG5jb25zdCBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5jb25zdCB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbmxldCBhbGwgPSB7IGFqYXgsIGZvcm0gfTtcbk9iamVjdC5hc3NpZ24oYWxsLCBhamF4LCBwdWJzdWIsIGtleXMsIHV0aWwpO1xuZm9yIChsZXQgcHJvcCBpbiBhbGwpIHNpenpsZVtwcm9wXSA9IGFsbFtwcm9wXTtcblxuXG5sb25nQ2xpY2suaW5pdCgpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gc2l6emxlO1xuIiwiY29uc3Qga2V5cyA9IHtcblx0XHRBOiA2NSxcblx0XHRYOiA4OCxcblx0XHRDOiA2Nyxcblx0XHREOiA2OCxcblx0XHRWOiA4Nixcblx0XHRaOiA5MCxcblxuXHRcdEYxOiAxMTIsXG5cdFx0RjI6IDExMyxcblx0XHRGNTogMTE2LFxuXHRcdFRBQjogOSxcblx0XHRFU0M6IDI3LFxuXG5cdFx0QkNLU1BDOiA4LFxuXHRcdEJBQ0tTUEFDRTogOCxcblx0XHRFTlRFUjogMTMsXG5cdFx0U1BBQ0U6IDMyLFxuXHRcdFBHVVA6IDMzLFxuXHRcdFBHRE9XTjogMzQsXG5cdFx0RU5EOiAzNSxcblx0XHRIT01FOiAzNixcblx0XHRMRUZUOiAzNyxcblx0XHRVUDogMzgsXG5cdFx0UklHSFQ6IDM5LFxuXHRcdERPV046IDQwLFxuXHRcdElOUzogNDUsXG5cdFx0REVMOiA0Nixcblx0XHRNSU5VUzogMTczLFxuXHRcdFBMVVM6IDYxLFxuXHRcdERPVDogMTkwLFxuXHRcdFNMQVNIOiAxOTEsXG5cblx0XHRNQUNNSU5VUzogMTg5LFxuXHRcdE1BQ1BMVVM6IDE4NyxcblxuXHRcdE5VTVNUQVI6IDEwNixcblx0XHROVU1NSU5VUzogMTA5LFxuXHRcdE5VTVBMVVM6IDEwNyxcblx0XHROVU1ET1Q6IDExMCxcblx0XHROVU1TTEFTSDogMTExXG5cdH0sXG5cdGRpZ2l0cyA9IHtcblx0XHQ0ODogMSxcdFx0Ly8gMFxuXHRcdDQ5OiAxLFx0XHQvLyAxXG5cdFx0NTA6IDEsXHRcdC8vIDJcblx0XHQ1MTogMSxcdFx0Ly8gM1xuXHRcdDUyOiAxLFx0XHQvLyA0XG5cdFx0NTM6IDEsXHRcdC8vIDVcblx0XHQ1NDogMSxcdFx0Ly8gNlxuXHRcdDU1OiAxLFx0XHQvLyA3XG5cdFx0NTY6IDEsXHRcdC8vIDhcblx0XHQ1NzogMSxcdFx0Ly8gOVxuXHRcdDk2OiAxLFx0XHQvLyBudW1wYWQgMFxuXHRcdDk3OiAxLFx0XHQvLyBudW1wYWQgMVxuXHRcdDk4OiAxLFx0XHQvLyBudW1wYWQgMlxuXHRcdDk5OiAxLFx0XHQvLyBudW1wYWQgM1xuXHRcdDEwMDogMSxcdFx0Ly8gbnVtcGFkIDRcblx0XHQxMDE6IDEsXHRcdC8vIG51bXBhZCA1XG5cdFx0MTAyOiAxLFx0XHQvLyBudW1wYWQgNlxuXHRcdDEwMzogMSxcdFx0Ly8gbnVtcGFkIDdcblx0XHQxMDQ6IDEsXHRcdC8vIG51bXBhZCA4XG5cdFx0MTA1OiAxXHRcdC8vIG51bXBhZCA5XG5cdH0sXG5cdGFsbG93ZWRDaGFycyA9IHtcblx0XHQ4OiAxLFx0XHQvLyBiYWNrc3BhY2Vcblx0XHQ5OiAxLFx0XHQvLyB0YWJcblx0XHQ0NjogMSxcdFx0Ly8gZGVsXG5cdFx0MzU6IDEsXHRcdC8vIGVuZFxuXHRcdDM2OiAxLFx0XHQvLyBob21lXG5cdFx0Mzc6IDEsXHRcdC8vIGxlZnRcblx0XHQzOTogMVx0XHQvLyByaWdodFxuXHR9O1xuXG4vLyBtYXRoIG9wZXJhdG9yczogKyAtICogLyAoICkgLlxuZnVuY3Rpb24gaXNNYXRoIChlKSB7XG5cdGNvbnN0IGsgPSBlLmtleUNvZGU7XG5cdGlmIChrID09PSBrZXlzLlNQQUNFKSByZXR1cm4gdHJ1ZTtcblx0aWYgKGsgPT09IGtleXMuTlVNRE9UIHx8IChrID09PSBrZXlzLkRPVCAmJiAhZS5zaGlmdEtleSkpIHJldHVybiB0cnVlO1xuXHRpZiAoayA9PT0ga2V5cy5OVU1NSU5VUyB8fCAoayA9PT0ga2V5cy5NSU5VUyAmJiAhZS5zaGlmdEtleSkpIHJldHVybiB0cnVlO1xuXHRpZiAoayA9PT0ga2V5cy5OVU1QTFVTIHx8IChrID09PSBrZXlzLlBMVVMgJiYgZS5zaGlmdEtleSkpIHJldHVybiB0cnVlO1xuXHRpZiAoayA9PT0ga2V5cy5OVU1TTEFTSCB8fCAoayA9PT0ga2V5cy5TTEFTSCAmJiAhZS5zaGlmdEtleSkpIHJldHVybiB0cnVlO1xuXHRpZiAoayA9PT0ga2V5cy5NQUNNSU5VUyAmJiAhZS5zaGlmdEtleSkgcmV0dXJuIHRydWU7XG5cdGlmIChrID09PSBrZXlzLk1BQ1BMVVMgJiYgZS5zaGlmdEtleSkgcmV0dXJuIHRydWU7XG5cblx0aWYgKGUuc2hpZnRLZXkpIHtcblx0XHRpZiAoayA9PT0gNTYgfHwgayA9PT0gNTcgfHwgayA9PT0gNDgpIHJldHVybiB0cnVlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn1cblxuLy8gZGlnaXRzICsgbmF2aWdhdGlvbiArIGNvcHkvY3V0L3Bhc3RlICsgbWF0aCBvcGVyYXRvcnNcbmZ1bmN0aW9uIGlzQ3V0Q29weVBhc3RlIChlKSB7XG5cdGNvbnN0IGsgPSBlLmtleUNvZGU7XG5cdGNvbnN0IGN0cmxPckNtZCA9IGUgJiYgKGUuY3RybEtleSA9PT0gdHJ1ZSB8fCBlLm1ldGFLZXkgPT09IHRydWUpO1xuXHRyZXR1cm4gY3RybE9yQ21kICYmIChrID09PSBrZXlzLlggfHwgayA9PT0ga2V5cy5DIHx8IGsgPT09IGtleXMuVik7XG59XG5cbi8vIGEgLSB6XG5mdW5jdGlvbiBpc0FscGhhIChlKSB7IHJldHVybiAoZS5rZXlDb2RlID49IDY1ICYmIGUua2V5Q29kZSA8PSA5MCAmJiAhZS5jdHJsS2V5ICYmICFlLm1ldGFLZXkpOyB9XG5cbmZ1bmN0aW9uIGlzRGlnaXQgKGUpIHsgcmV0dXJuIGRpZ2l0c1tlLmtleUNvZGVdID09PSAxICYmICFlLnNoaWZ0S2V5OyB9XG5cbmZ1bmN0aW9uIGlzQWxwaGFOdW1lcmljIChlKSB7IHJldHVybiBpc0FscGhhKGUpIHx8IGlzRGlnaXQoZSk7IH1cblxuZnVuY3Rpb24gaXNOYXZDaGFyIChlKSB7IHJldHVybiBhbGxvd2VkQ2hhcnNbZS5rZXlDb2RlXSA9PT0gMTsgfVxuXG5mdW5jdGlvbiBpc051bWJlckZpZWxkIChlKSB7XG5cdGNvbnN0IGlzRW50ZXIgPSAoZS5rZXlDb2RlID09PSAxMyk7XG5cdHJldHVybiBpc0RpZ2l0KGUpIHx8IGlzTmF2Q2hhcihlKSB8fCBpc0N1dENvcHlQYXN0ZShlKSB8fCBpc0VudGVyO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRrZXlzLFxuXHRpc05hdkNoYXIsXG5cdGlzQ3V0Q29weVBhc3RlLFxuXHRpc0RpZ2l0LFxuXHRpc0FscGhhLFxuXHRpc01hdGgsXG5cdGlzQWxwaGFOdW1lcmljLFxuXHRpc051bWJlckZpZWxkLFxufTtcbiIsImNvbnN0IERFTEFZID0gMTAwMDtccmNvbnN0IEVWRU5UX05BTUUgPSAnbG9uZ2NsaWNrJztcclxybGV0IHRpbWVyID0gbnVsbDtccmxldCBpc1JlYWR5ID0gZmFsc2U7XHJccmNvbnN0IHJlc2V0ID0gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxyZnVuY3Rpb24gZmlyZUV2ZW50IChlKSB7XHJcdGUudGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEVWRU5UX05BTUUsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9KSk7XHJcdHJlc2V0KCk7XHJ9XHJccmZ1bmN0aW9uIGluaXQgKCkge1xyXHRpZiAoaXNSZWFkeSkgcmV0dXJuO1xyXHQvLyBwYXRjaCBDdXN0b21FdmVudCB0byBhbGxvdyBjb25zdHJ1Y3RvciBjcmVhdGlvbiAoSUUvQ2hyb21lKVxyXHQvLyAtIHJlc29sdmVkIG9uY2UgaW5pdEN1c3RvbUV2ZW50IG5vIGxvbmdlciBleGlzdHNcclx0aWYgKCdpbml0Q3VzdG9tRXZlbnQnIGluIGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpKSB7XHJcdFx0d2luZG93LkN1c3RvbUV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50LCBwYXJhbXMpIHtcclx0XHRcdHBhcmFtcyA9IHBhcmFtcyB8fCB7IGJ1YmJsZXM6IGZhbHNlLCBjYW5jZWxhYmxlOiBmYWxzZSwgZGV0YWlsOiB1bmRlZmluZWQgfTtcclx0XHRcdGNvbnN0IGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xyXHRcdFx0ZXZ0LmluaXRDdXN0b21FdmVudChldmVudCwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsKTtcclx0XHRcdHJldHVybiBldnQ7XHJcdFx0fTtcclx0XHR3aW5kb3cuQ3VzdG9tRXZlbnQucHJvdG90eXBlID0gd2luZG93LkV2ZW50LnByb3RvdHlwZTtcclx0fVxyXHJcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCByZXNldCk7XHJcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgcmVzZXQpO1xyXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCByZXNldCk7XHJcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4ge1xyXHRcdHRpbWVyID0gc2V0VGltZW91dChmaXJlRXZlbnQuYmluZChlLCBlKSwgREVMQVkpO1xyXHR9KTtcclx0aXNSZWFkeSA9IHRydWU7XHJ9XHJcclxybW9kdWxlLmV4cG9ydHMgPSB7XHJcdGluaXRccn07XHIiLCJjb25zdCBfY2FjaGUgPSB7fTtcblxuZnVuY3Rpb24gdHJpZ2dlciAodG9waWMsIC4uLmFyZ3MpIHtcblx0aWYgKCFfY2FjaGVbdG9waWNdKSByZXR1cm47XG5cdF9jYWNoZVt0b3BpY10uZm9yRWFjaChjYiA9PiB7XG5cdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IuYXBwbHkoY2IsIGFyZ3MpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gb24gKHRvcGljLCBjYWxsYmFjaykge1xuXHRpZiAoIV9jYWNoZVt0b3BpY10pIF9jYWNoZVt0b3BpY10gPSBbXTtcblx0X2NhY2hlW3RvcGljXS5wdXNoKGNhbGxiYWNrKTtcblx0cmV0dXJuIFt0b3BpYywgY2FsbGJhY2tdOyAgICAgICAvLyBoYW5kbGUgZm9yIG9mZlxufVxuXG5mdW5jdGlvbiBvZmYgKGhhbmRsZSkge1xuXHRsZXQgW3RvcGljLCBjYl0gPSBoYW5kbGUsIGNhID0gX2NhY2hlW3RvcGljXTtcblx0Y2IgPSBjYi50b1N0cmluZygpO1xuXHRpZiAoIWNhKSByZXR1cm47XG5cblx0Y2EuZm9yRWFjaCgoZm4sIGkpID0+IHtcblx0XHRpZiAoZm4udG9TdHJpbmcoKSA9PT0gY2IpIGNhLnNwbGljZShpLCAxKTtcblx0fSk7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7IG9uLCBvZmYsIHRyaWdnZXIgfTtcbiIsIi8vIGNvbnN0IFZlbG9jaXR5ID0gcmVxdWlyZSgndmVsb2NpdHktYW5pbWF0ZScpO1xuXG5jb25zdCB0eXBlID0gb2JqID0+IG9iaiA/IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopLnNsaWNlKDgsIC0xKS50b0xvd2VyQ2FzZSgpIDogJ3VuZGVmaW5lZCc7XG5jb25zdCBpc05vZGVMaXN0ID0gbm9kZXMgPT4gKHR5cGVvZiBub2RlcyA9PT0gJ29iamVjdCcpICYmXG5cdFx0L14oaHRtbGNvbGxlY3Rpb258bm9kZWxpc3R8b2JqZWN0KSQvLnRlc3QodHlwZShub2RlcykpICYmXG5cdFx0KG5vZGVzLmxlbmd0aCA9PT0gMCB8fCAodHlwZW9mIG5vZGVzWzBdID09PSAnb2JqZWN0JyAmJiBub2Rlc1swXS5ub2RlVHlwZSA+IDApKTtcblxuXG5mdW5jdGlvbiBzaXp6bGUgKG1peGVkLCBjb250ZXh0KSB7XG5cdGlmICghbWl4ZWQpIHJldHVybiBbXTtcblx0bGV0IGVsO1xuXHRpZiAodHlwZW9mIG1peGVkICE9PSAnc3RyaW5nJykgZWwgPSBtaXhlZDtcblxuXHQvLyBpcyBodG1sIC0gY3JlYXRlIG5ldyBlbGVtZW50XG5cdGVsc2UgaWYgKC88W2Etel1bXFxzXFxTXSo+L2kudGVzdChtaXhlZCkpIHtcblx0XHRlbCA9IChuZXcgRE9NUGFyc2VyKCkpLnBhcnNlRnJvbVN0cmluZyhtaXhlZCwgJ3RleHQvaHRtbCcpLmJvZHkuZmlyc3RDaGlsZDtcblx0fVxuXHQvLyBpcyBzZWxlY3RvciAtIGZpbmQgZWxlbWVudFxuXHRlbHNlIGVsID0gKGNvbnRleHQgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwobWl4ZWQpO1xuXG5cdGlmIChlbC5ub2RlVHlwZSkgZWwgPSBbZWxdO1xuXHRlbHNlIGlmIChpc05vZGVMaXN0KGVsKSkgZWwgPSBBcnJheS5mcm9tKGVsKTtcblxuXHRyZXR1cm4gT2JqZWN0LmFzc2lnbihlbCB8fCBbXSwgc2l6emxlLmZuKTtcbn1cblxuXG5zaXp6bGUuZm4gPSB7fTtcbnNpenpsZS5mbi5maW5kID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7IHJldHVybiBzaXp6bGUoc2VsZWN0b3IsIHRoaXNbMF0pOyB9O1xuc2l6emxlLmZuLmZpcnN0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc2l6emxlKHRoaXNbMF0pOyB9O1xuc2l6emxlLmZuLmxhc3QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzaXp6bGUodGhpc1t0aGlzLmxlbmd0aCAtIDFdKTsgfTtcbnNpenpsZS5mbi5lcSA9IGZ1bmN0aW9uIChpZHgpIHsgcmV0dXJuIHNpenpsZSh0aGlzW2lkeCB8fCAwXSk7IH07XG5cblxuc2l6emxlLmZuLmFwcGVuZFRvID0gZnVuY3Rpb24gKHBhcmVudCkge1xuXHRpZiAoIXRoaXMgfHwgIXRoaXMubGVuZ3RoKSByZXR1cm4gdGhpcztcblx0aWYgKHR5cGVvZiBwYXJlbnQgPT09ICdzdHJpbmcnKSBwYXJlbnQgPSBzaXp6bGUocGFyZW50KTtcblx0ZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkocGFyZW50KSkgcGFyZW50ID0gW3BhcmVudF07XG5cdHBhcmVudFswXS5hcHBlbmRDaGlsZCh0aGlzWzBdKTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG5zaXp6bGUuZm4uYXBwZW5kID0gZnVuY3Rpb24gKGNoaWxkKSB7XG5cdGlmICghdGhpcyB8fCAhdGhpcy5sZW5ndGgpIHJldHVybiB0aGlzO1xuXHRpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykgY2hpbGQgPSBzaXp6bGUoY2hpbGQpO1xuXHR0aGlzWzBdLmFwcGVuZENoaWxkKGNoaWxkWzBdKTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG5zaXp6bGUuZm4ub24gPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBjYikge1xuXHRpZiAoIXRoaXMgfHwgIXRoaXMubGVuZ3RoKSByZXR1cm4gdGhpcztcblx0dGhpcy5mb3JFYWNoKGVsID0+IHtcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2IpO1xuXHR9KTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG5zaXp6bGUuZm4ub2ZmID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgY2IpIHtcblx0aWYgKCF0aGlzIHx8ICF0aGlzLmxlbmd0aCkgcmV0dXJuIHRoaXM7XG5cdHRoaXMuZm9yRWFjaChlbCA9PiB7XG5cdFx0ZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNiKTtcblx0fSk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuc2l6emxlLmZuLmlzID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG5cdGlmICghdGhpcyB8fCAhdGhpcy5sZW5ndGgpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuIHRoaXNbMF0ubWF0Y2hlcyhzZWxlY3Rvcik7XG59O1xuXG5zaXp6bGUuZm4uY2xvc2VzdCA9IGZ1bmN0aW9uIChjbHMpIHtcblx0aWYgKCF0aGlzIHx8ICF0aGlzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXHRyZXR1cm4gc2l6emxlKHRoaXNbMF0uY2xvc2VzdChjbHMpKTtcbn07XG5cbi8qKlxuICogTW9kaWZ5IGVsZW1lbnQgY2xhc3MgbGlzdFxuICogQHBhcmFtICB7YXJyYXl9IGVsICAgICAgICBhcnJheSBvZiBlbGVtZW50c1xuICogQHBhcmFtICB7c3RyaW5nfSBhY3Rpb24gICBhZGQsIHJlbW92ZSBvciB0b2dnbGVcbiAqIEBwYXJhbSAge3N0cmluZ30gY2xzICAgICAgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2YgY2xhc3NlcyB0byBhZGQvcmVtb3ZlL3RvZ2dsZVxuICogQHBhcmFtICB7Ym9vbGVhbn0gY29uZCAgICBbb3B0aW9uYWxdIHRydWUgb3IgZmFsc2UgZm9yIHRvZ2dsZVxuICogQHJldHVybiB7YXJyYXl9ICAgICAgICAgICBzYW1lIGFycmF5IG9mIGVsZW1lbnRzXG4gKi9cbmZ1bmN0aW9uIG1vZEVsQ2xzIChlbCwgYWN0aW9uLCBjbHMsIGNvbmQpIHtcblx0aWYgKCFlbCB8fCAhZWwubGVuZ3RoKSByZXR1cm4gZWw7XG5cdGNscyA9ICgnJyArIGNscykuc3BsaXQoJyAnKTtcblx0aWYgKHR5cGVvZiBjb25kID09PSAnYm9vbGVhbicpIHtcblx0XHRlbC5mb3JFYWNoKGUgPT4gY2xzLmZvckVhY2goYyA9PiBlLmNsYXNzTGlzdFthY3Rpb25dKGMsIGNvbmQpKSk7XG5cdH1cblx0ZWxzZSBlbC5mb3JFYWNoKGUgPT4gY2xzLmZvckVhY2goYyA9PiBlLmNsYXNzTGlzdFthY3Rpb25dKGMpKSk7XG5cdHJldHVybiBlbDtcbn1cblxuc2l6emxlLmZuLmFkZENsYXNzID0gZnVuY3Rpb24gKGNscykgeyByZXR1cm4gbW9kRWxDbHModGhpcywgJ2FkZCcsIGNscyk7IH07XG5zaXp6bGUuZm4ucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiAoY2xzKSB7IHJldHVybiBtb2RFbENscyh0aGlzLCAncmVtb3ZlJywgY2xzKTsgfTtcbnNpenpsZS5mbi50b2dnbGVDbGFzcyA9IGZ1bmN0aW9uIChjbHMsIGNvbmQpIHsgcmV0dXJuIG1vZEVsQ2xzKHRoaXMsICd0b2dnbGUnLCBjbHMsIGNvbmQpOyB9O1xuc2l6emxlLmZuLmhhc0NsYXNzID0gZnVuY3Rpb24gKGNscykge1xuXHRpZiAoIXRoaXMgfHwgIXRoaXMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cdHJldHVybiB0aGlzWzBdLmNsYXNzTGlzdC5jb250YWlucyhjbHMpO1xufTtcblxuc2l6emxlLmZuLnRvZ2dsZSA9IGZ1bmN0aW9uIChjb25kKSB7XG5cdHJldHVybiBjb25kID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcbn07XG5cbnNpenpsZS5mbi5oaWRlID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLmZvckVhY2goZWwgPT4geyBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9KTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG5zaXp6bGUuZm4uc2hvdyA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5mb3JFYWNoKGVsID0+IHsgZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7IH0pO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbnNpenpsZS5mbi5odG1sID0gZnVuY3Rpb24gKGh0bWwpIHtcblx0aWYgKCF0aGlzIHx8ICF0aGlzLmxlbmd0aCkgcmV0dXJuIHRoaXM7XG5cdGlmICh0eXBlb2YgaHRtbCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiB0aGlzWzBdLmlubmVySFRNTDtcblx0dGhpcy5mb3JFYWNoKGVsID0+IHsgZWwuaW5uZXJIVE1MID0gaHRtbDsgfSk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuc2l6emxlLmZuLnRleHQgPSBmdW5jdGlvbiAodGV4dCkge1xuXHRpZiAoIXRoaXMgfHwgIXRoaXMubGVuZ3RoKSByZXR1cm4gdGhpcztcblx0aWYgKHR5cGVvZiB0ZXh0ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIHRoaXNbMF0uaW5uZXJUZXh0O1xuXHR0aGlzLmZvckVhY2goZWwgPT4geyBlbC5pbm5lclRleHQgPSB0ZXh0OyB9KTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG5zaXp6bGUuZm4ucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRpZiAoIXRoaXMgfHwgIXRoaXMubGVuZ3RoKSByZXR1cm4gdGhpcztcblx0dGhpcy5mb3JFYWNoKGVsID0+IGVsLnJlbW92ZSgpKTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG5zaXp6bGUuZm4uZGF0YSA9IGZ1bmN0aW9uIChrZXkpIHtcblx0aWYgKCF0aGlzIHx8ICF0aGlzLmxlbmd0aCkgcmV0dXJuIHRoaXM7XG5cdGlmICghdGhpc1swXS5kYXRhc2V0KSByZXR1cm4gbnVsbDtcblx0aWYgKGtleSkgcmV0dXJuIHRoaXNbMF0uZGF0YXNldFtrZXldO1xuXHRyZXR1cm4gdGhpc1swXS5kYXRhc2V0O1xufTtcblxuXG5zaXp6bGUuZm4uYXR0ciA9IGZ1bmN0aW9uIChhdHRyLCB2YWx1ZSkge1xuXHRpZiAoIXRoaXMgfHwgIXRoaXMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gdGhpc1swXS5nZXRBdHRyaWJ1dGUoYXR0cik7XG5cdHRoaXMuZm9yRWFjaChlbCA9PiB7IGVsLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSk7IH0pO1xufTtcblxuXG5mdW5jdGlvbiBhbmltYXRlRWxlbWVudCAoZnJvbSwgdG8sIG9wdHMpIHtcblx0cmV0dXJuIGVsID0+IG5ldyBQcm9taXNlIChyZXNvbHZlID0+IHtcblx0XHRjb25zdCBhbmltID0gZWwuYW5pbWF0ZShbZnJvbSwgdG9dLCBvcHRzKTtcblx0XHRhbmltLm9uY2FuY2VsID0gcmVzb2x2ZTtcblx0XHRhbmltLm9uZmluaXNoID0gcmVzb2x2ZTtcblx0fSk7XG59XG5cbnNpenpsZS5mbi5hbmltYXRlID0gZnVuY3Rpb24gKGZyb20sIHRvLCBvcHRpb25zID0ge30pIHtcblx0Y29uc3QgZGZsdCA9IHtkdXJhdGlvbjogMzAwLCBlYXNpbmc6ICdlYXNlLW91dCcsIGZpbGw6ICdmb3J3YXJkcyd9O1xuXHRjb25zdCBvcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgZGZsdCwgb3B0aW9ucyk7XG5cdGNvbnN0IGFsbCA9IHRoaXMubWFwKGFuaW1hdGVFbGVtZW50KGZyb20sIHRvLCBvcHRzKSk7XG5cdHJldHVybiBQcm9taXNlLmFsbChhbGwpO1xufTtcblxuXG4vLyBzaXp6bGUuZm4uYW5pbWF0ZSA9IGZ1bmN0aW9uIChmcm9tLCB0bywgb3B0aW9ucyA9IHt9KSB7XG4vLyBcdGNvbnN0IG9wdHMgPSBPYmplY3QuYXNzaWduKHt9LCB7ZHVyYXRpb246IDMwMCwgZWFzaW5nOiAnZWFzZS1vdXQnfSwgb3B0aW9ucyk7XG4vLyBcdGNvbnN0IGZyb21UbyA9IHt9O1xuLy8gXHRmb3IgKGxldCBrZXkgaW4gZnJvbSkgZnJvbVRvW2tleV0gPSBbIHRvW2tleV0sIGZyb21ba2V5XSBdO1xuLy8gXHRyZXR1cm4gVmVsb2NpdHkodGhpcywgZnJvbVRvLCBvcHRzKTtcbi8vIH07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBzaXp6bGU7XG4iLCJjb25zdCB0eXBlID0gb2JqID0+IG9iaiA/IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopLnNsaWNlKDgsIC0xKS50b0xvd2VyQ2FzZSgpIDogJ3VuZGVmaW5lZCc7XG5cbmNvbnN0IHRyaW0gPSAoc3RyLCBjaGFycyA9ICdcXFxccycpID0+ICgnJyArIHN0cikucmVwbGFjZShuZXcgUmVnRXhwKGAoXiR7Y2hhcnN9Kyl8KCR7Y2hhcnN9KyQpYCwgJ2cnKSwgJycpO1xuY29uc3QgbHRyaW0gPSAoc3RyLCBjaGFycyA9ICdcXFxccycpID0+ICgnJyArIHN0cikucmVwbGFjZShuZXcgUmVnRXhwKGBeJHtjaGFyc30rYCksICcnKTtcbmNvbnN0IHJ0cmltID0gKHN0ciwgY2hhcnMgPSAnXFxcXHMnKSA9PiAoJycgKyBzdHIpLnJlcGxhY2UobmV3IFJlZ0V4cChgJHtjaGFyc30rJGApLCAnJyk7XG5cbmNvbnN0IHJhbmQgPSAobWF4LCBtaW4gPSAwKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xuXG5jb25zdCB1Y2ZpcnN0ID0gKHMpID0+ICgnJyArIHMpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxiKFthLXpdKS9naSwgYyA9PiBjLnRvVXBwZXJDYXNlKCkpO1xuXG5cbmZ1bmN0aW9uIGlzTnVtYmVyICh2KSB7XG5cdGlmICh0eXBlb2YgdiA9PT0gJ251bWJlcicpIHJldHVybiB0cnVlO1xuXHRpZiAodHlwZW9mIHYgIT09ICdzdHJpbmcnKSByZXR1cm4gZmFsc2U7XG5cdHJldHVybiAoL15bLStdP1swLTldKlxcLj9bMC05XSsoW2VFXVstK10/WzAtOV0rKT8kLykudGVzdCh2KTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0TnVtYmVyIChudW0pIHtcblx0bnVtID0gTWF0aC5yb3VuZCgwICsgbnVtICogMTAwKSAvIDEwMDtcblx0cmV0dXJuIG51bS50b0xvY2FsZVN0cmluZygnZW4tR0InLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiB9KTtcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplIChvYmopIHtcblx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cdGlmICgha2V5cyB8fCAha2V5cy5sZW5ndGgpIHJldHVybiAnJztcblx0cmV0dXJuICc/JyArIGtleXMucmVkdWNlKChhLCBrKSA9PiB7XG5cdFx0YS5wdXNoKGsgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tdKSk7XG5cdFx0cmV0dXJuIGE7XG5cdH0sIFtdKS5qb2luKCcmJyk7XG59XG5cbmZ1bmN0aW9uIHZhclRvUmVhbFR5cGUgKHYpIHtcblx0aWYgKGlzTnVtYmVyKHYpKSB7XG5cdFx0bGV0IG9yaWdpbmFsdiA9IHY7XG5cdFx0diA9IHBhcnNlRmxvYXQoJycgKyB2KTtcblx0XHRpZiAoKCcnICsgdikgIT09IG9yaWdpbmFsdikgdiA9IG9yaWdpbmFsdjtcblx0fVxuXHRlbHNlIGlmICh2ID09PSAndHJ1ZScpIHYgPSB0cnVlO1xuXHRlbHNlIGlmICh2ID09PSAnZmFsc2UnKSB2ID0gZmFsc2U7XG5cdGlmICh2ID09PSAnJykgdiA9IHVuZGVmaW5lZDtcblx0aWYgKHR5cGUodikgPT09ICdhcnJheScpIHYgPSB2Lm1hcCh2YWwgPT4gdmFyVG9SZWFsVHlwZSh2YWwpKTtcblx0cmV0dXJuIHY7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0RW1wdHkgKHgpIHtcblx0aWYgKCF4IHx8IHR5cGVvZiB4ICE9PSAnb2JqZWN0JykgcmV0dXJuIHRydWU7XG5cdHJldHVybiBPYmplY3Qua2V5cyh4KS5sZW5ndGggPT09IDA7XG59XG5cbmZ1bmN0aW9uIHNhbml0aXplICh2KSB7XG5cdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuXHRkaXYuaW5uZXJIVE1MID0gdiB8fCAnJztcblx0cmV0dXJuIGRpdi50ZXh0Q29udGVudCB8fCBkaXYuaW5uZXJUZXh0IHx8ICcnO1xufVxuXG5cbmZ1bmN0aW9uIGZ1enp5IChoYXksIHMpIHtcblx0cyA9ICgnJyArIHMpLnRvTG93ZXJDYXNlKCk7XG5cdGhheSA9ICgnJyArIGhheSkudG9Mb3dlckNhc2UoKTtcblx0bGV0IG4gPSAtMTtcblx0Zm9yIChsZXQgbCBvZiBzKSBpZiAoIX4obiA9IGhheS5pbmRleE9mKGwsIG4gKyAxKSkpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuIHRydWU7XG59XG5cblxuZnVuY3Rpb24gcGFyc2VVcmwgKHVybCkge1xuXHRsZXQgdXJsdDtcblx0dHJ5IHsgdXJsdCA9IG5ldyBVUkwodXJsKTsgfVxuXHRjYXRjaCAoZSkgeyB1cmx0ID0gbnVsbDsgfVxuXHRyZXR1cm4gdXJsdDtcbn1cblxuXG5mdW5jdGlvbiBwcmV0dHlEYXRlICh0aW1lKSB7XG5cdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgodGltZSB8fCAnJykucmVwbGFjZSgvLS9nLCAnLycpLnJlcGxhY2UoL1tUWl0vZywgJyAnKSk7XG5cdGNvbnN0IGRpZmYgPSAoKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLSBkYXRlLmdldFRpbWUoKSkgLyAxMDAwKTtcblx0Y29uc3QgZGF5X2RpZmYgPSBNYXRoLmZsb29yKGRpZmYgLyA4NjQwMCk7XG5cdGlmIChpc05hTihkYXlfZGlmZikgfHwgZGF5X2RpZmYgPCAwIHx8IGRheV9kaWZmID49IDMxKSByZXR1cm4gZGF0ZS50b0xvY2FsZVN0cmluZygpO1xuXHRyZXR1cm4gZGF5X2RpZmYgPT09IDAgJiYgKFxuXHRcdGRpZmYgPCA2MCAmJiAnanVzdCBub3cnIHx8XG5cdFx0ZGlmZiA8IDEyMCAmJiAnMSBtaW51dGUgYWdvJyB8fFxuXHRcdGRpZmYgPCAzNjAwICYmIE1hdGguZmxvb3IoZGlmZiAvIDYwKSArICcgbWludXRlcyBhZ28nIHx8XG5cdFx0ZGlmZiA8IDcyMDAgJiYgJzEgaG91ciBhZ28nIHx8XG5cdFx0ZGlmZiA8IDg2NDAwICYmIE1hdGguZmxvb3IoZGlmZiAvIDM2MDApICsgJyBob3VycyBhZ28nXG5cdCkgfHxcblx0XHRkYXlfZGlmZiA9PT0gMSAmJiAnWWVzdGVyZGF5JyB8fFxuXHRcdGRheV9kaWZmIDwgNyAmJiBkYXlfZGlmZiArICcgZGF5cyBhZ28nIHx8XG5cdFx0ZGF5X2RpZmYgPCAzMSAmJiBNYXRoLmNlaWwoZGF5X2RpZmYgLyA3KSArICcgd2Vla3MgYWdvJztcbn1cblxuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRmdXp6eSxcblx0bHRyaW0sXG5cdHJ0cmltLFxuXHR0cmltLFxuXHR1Y2ZpcnN0LFxuXHR0eXBlLFxuXHRyYW5kLFxuXHRpc051bWJlcixcblx0Zm9ybWF0TnVtYmVyLFxuXHR2YXJUb1JlYWxUeXBlLFxuXHRpc09iamVjdEVtcHR5LFxuXHRzYW5pdGl6ZSxcblx0c2VyaWFsaXplLFxuXHRwYXJzZVVybCxcblx0bW9udGhzOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG5cdHByZXR0eURhdGUsXG59O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwicmVxdWlyZSgnLi9pbmRleC5jc3MnKTtcbnJlcXVpcmUoJy4uL2NvbXBvbmVudHMvbW9udGgtcGlja2VyJyk7XG5yZXF1aXJlKCcuLi9jb21wb25lbnRzL3llYXItcGlja2VyJyk7XG5cbmltcG9ydCB7JH0gZnJvbSAnLi4vY29yZSc7XG5cbmNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbmxldCBlbCwgYnRuVG9kYXksIG1vbnRoUGlja2VyLCB5ZWFyUGlja2VyO1xuXG5jb25zdCBpc1NhbWVEYXkgPSAoZDEsIGQyKSA9PiAoTWF0aC5hYnMoZDEgLSBkMikgPCA4NjQwMCk7XG5cblxuXG5mdW5jdGlvbiBnb1RvIChkYXkgPSB0b2RheSkge1xuXHRtb250aFBpY2tlclswXS52YWx1ZSA9IGRheS5nZXRNb250aCgpICsgMTtcblx0eWVhclBpY2tlclswXS52YWx1ZSA9IGRheS5nZXRGdWxsWWVhcigpO1xuXHRidG5Ub2RheS50b2dnbGVDbGFzcygnYWN0aXZlJywgaXNTYW1lRGF5KGRheSwgdG9kYXkpKTtcbn1cblxuXG5mdW5jdGlvbiBvblRvZGF5QnRuQ2xpY2sgKCkge1xuXHRnb1RvKCk7XG59XG5cbmZ1bmN0aW9uIG9uTW9udGhQaWNrZXJDaGFuZ2UgKGUpIHtcblx0Y29uc3QgZGF5ID0gbmV3IERhdGUoKTtcblx0ZGF5LnNldE1vbnRoKGUuZGV0YWlsLnZhbHVlIC0gMSk7XG5cdGdvVG8oZGF5KTtcbn1cblxuZnVuY3Rpb24gb25ZZWFyUGlja2VyQ2hhbmdlIChlKSB7XG5cdGNvbnN0IGRheSA9IG5ldyBEYXRlKCk7XG5cdGRheS5zZXRZZWFyKGUuZGV0YWlsLnZhbHVlKTtcblx0Z29UbyhkYXkpO1xufVxuXG5cblxuXG5mdW5jdGlvbiBpbml0ICgpIHtcblx0ZWwgPSAkKCdoZWFkZXInKTtcblx0YnRuVG9kYXkgPSBlbC5maW5kKCcuYnRuLXRvZGF5Jyk7XG5cdG1vbnRoUGlja2VyID0gZWwuZmluZCgnbW9udGgtcGlja2VyJyk7XG5cdHllYXJQaWNrZXIgPSBlbC5maW5kKCd5ZWFyLXBpY2tlcicpO1xuXG5cdGJ0blRvZGF5Lm9uKCdjbGljaycsIG9uVG9kYXlCdG5DbGljayk7XG5cdG1vbnRoUGlja2VyLm9uKCdjaGFuZ2UnLCBvbk1vbnRoUGlja2VyQ2hhbmdlKTtcblx0eWVhclBpY2tlci5vbignY2hhbmdlJywgb25ZZWFyUGlja2VyQ2hhbmdlKTtcblxuXHRnb1RvKCk7XG59XG5cblxuZXhwb3J0IHtcblx0aW5pdFxufTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInJlcXVpcmUoJy4vaW5kZXguY3NzJyk7XG5cblxuXG5jb25zdCBjb21wb25lbnRzID0gW1xuXHQnaGVhZGVyJyxcbl07XG5cblxuY29tcG9uZW50cy5mb3JFYWNoKG4gPT4ge1xuXHRjb25zdCBjID0gcmVxdWlyZShgLi8ke259L2ApO1xuXHRjLmluaXQoKTtcbn0pO1xuXG5cbmZ1bmN0aW9uIGluaXQgKCkge1xuXHRjb25zb2xlLmxvZygncmVhZHkhJyk7XG59XG5cblxuaWYgKHdpbmRvdy5XZWJDb21wb25lbnRzLnJlYWR5KSBpbml0KCk7XG5lbHNlIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdXZWJDb21wb25lbnRzUmVhZHknLCBpbml0KTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI2NhbGVuZGFyIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0d2lkdGg6IDI2MHB4O1xcblxcdGxlZnQ6IDA7XFxuXFx0dG9wOiAwO1xcblxcdGJvdHRvbTogMDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNjYXRlZ29yaWVzIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0d2lkdGg6IDI2MHB4O1xcblxcdGxlZnQ6IDI2MHB4O1xcblxcdHRvcDogMzRweDtcXG5cXHRib3R0b206IDA7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaGVhZGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGhlaWdodDogMzJweDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDQ0O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDQ0O1xcbn1cXG5oZWFkZXIgbW9udGgtcGlja2VyIHsgaGVpZ2h0OiAxMDAlOyBmbGV4OiAxOyBtYXJnaW46IDAgMXB4OyB9XFxuaGVhZGVyIHllYXItcGlja2VyIHsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwcHg7IH1cXG5cXG5cXG5oZWFkZXIgLmJ0bi10b2RheSB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGJveC1zaXppbmc6IGluaGVyaXQ7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuXFx0Ym9yZGVyLXdpZHRoOiAwIDFweDtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmZmZmNGQ7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHRmb250LXNpemU6IDEycHg7XFxuXFx0cGFkZGluZy10b3A6IDJweDtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcdHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLmJ0bi10b2RheS5hY3RpdmUge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZlNjtcXG5cXHRib3JkZXItY29sb3I6ICM0NDQ7XFxuXFx0Y29sb3I6ICMwMDA7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSB7IG1hcmdpbjogMDsgcGFkZGluZzogMDsgaGVpZ2h0OiAxMDAlOyBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuYm9keSB7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IGJhY2tncm91bmQ6ICM2NjY7XFxuXFx0Zm9udDogbm9ybWFsIDFlbSBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5ICogeyBib3gtc2l6aW5nOiBpbmhlcml0OyB9XFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9