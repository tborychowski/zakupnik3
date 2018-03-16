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

/***/ "./client/components/month-picker/index.css":
/*!**************************************************!*\
  !*** ./client/components/month-picker/index.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.month-picker {\n\t-moz-user-select: none;\n\tuser-select: none;\n\tposition: relative;\n\twidth: inherit;\n\tdisplay: flex;\n\theight: 100%;\n\tfont: inherit;\n}\n\n\n.month {\n\tfont: inherit;\n\tfont-size: 12px;\n\ttext-transform: uppercase;\n\tflex: 1;\n\tborder: none;\n\tbackground-color: rgba(255,255,255,0.3);\n\theight: 100%;\n\tborder: 1px solid transparent;\n\tborder-width: 0 1px;\n\tpadding-top: 2px;\n\tcolor: rgba(0,0,0,.6);\n}\n\n\n.month.selected {\n\tbackground-color: rgba(255,255,255,0.9);\n\tborder-color: #444;\n\tcolor: rgba(0,0,0,1);\n}\n", ""]);

// exports


/***/ }),

/***/ "./client/components/month-picker/index.js":
/*!*************************************************!*\
  !*** ./client/components/month-picker/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return monthPicker; });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./client/components/month-picker/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const btnTemplate = (month, i) => `<button
	class="month month-${month.toLowerCase()} month-${i + 1}"
	data-value="${i + 1}">${month.substr(0, 3)}</button>`;

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
		this.fireEvent('change', { value: parseInt(value, 10), month: months[value - 1] });
	}

	onClick(e) {
		const target = e.target;

		const monthButton = target.closest('.month');
		if (monthButton) {
			const val = monthButton.dataset.value;
			this.value = val;
		}
	}

	fireEvent(name, detail) {
		this.dispatchEvent(new CustomEvent(name, { detail }));
	}

}

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return yearPicker; });
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

const components = ['components/calendar', 'components/year-picker', 'components/month-picker', 'categories'];

components.forEach(n => {
	const c = __webpack_require__("./client sync recursive ^\\.\\/.*\\/$")(`./${n}/`).default;
	if (c.is) customElements.define(c.is, c);else c.init();
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

/***/ "./node_modules/css-loader/index.js!./client/index.css":
/*!****************************************************!*\
  !*** ./node_modules/css-loader!./client/index.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body { margin: 0; padding: 0; height: 100%; overflow: hidden; }\n\nbody { box-sizing: border-box; background: #666;\n\tfont: normal 1em sans-serif;\n}\n\nbody * { box-sizing: inherit; }\n\n\nheader {\n\tdisplay: flex;\n\theight: 32px;\n\talign-items: center;\n\tborder-top: 1px solid #444;\n\tborder-bottom: 1px solid #444;\n}\nheader month-picker { height: 100%; flex: 1; margin-right: 1px; }\nheader year-picker { height: 100%; width: 100px; }\n\n\n\n\n\n\n\nbutton {\n\tpadding: 10px 20px;\n\tfont-size: 16px;\n\tcursor: pointer;\n\tcolor: inherit;\n\tborder-radius: 3px;\n\tbackground: #ddd;\n\tborder: 1px solid #bbb;\n\tposition: relative;\n\tmargin-bottom: 1px;\n}\n\nbutton[outline] { background: none; }\n\nbutton:focus,\nbutton:hover { background: #bbb; }\n\nbutton:active {\n\tbackground: #aaa;\n\ttransform: translateY(1px);\n\tmargin-bottom: 0;\n}\n", ""]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50IHN5bmMgXlxcLlxcLy4qXFwvJCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY2FsZW5kYXIvaW5kZXguY3NzP2Q0NzEiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NhbGVuZGFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jYXRlZ29yaWVzL2luZGV4LmNzcz8xOGVmIiwid2VicGFjazovLy8uL2NsaWVudC9jYXRlZ29yaWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2NhbGVuZGFyL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9jYWxlbmRhci9pbmRleC5odG1sIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2NhbGVuZGFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL21vbnRoLXBpY2tlci9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvbW9udGgtcGlja2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL3VpLWRpYWxvZy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvdWktZGlhbG9nL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvdWktZGlhbG9nL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL3VpLW1zZ2JveC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy91aS10b2FzdC9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvdWktdG9hc3QvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy91aS10b2FzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy95ZWFyLXBpY2tlci9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMveWVhci1waWNrZXIvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy95ZWFyLXBpY2tlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29yZS9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvcmUvaGVscGVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb3JlL3V0aWwvYWpheC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29yZS91dGlsL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvcmUvdXRpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29yZS91dGlsL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvcmUvdXRpbC9sb25nLWNsaWNrLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb3JlL3V0aWwvcHVic3ViLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb3JlL3V0aWwvc2l6emxlLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb3JlL3V0aWwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvaW5kZXguY3NzPzQ5NTAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jYWxlbmRhci9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NhdGVnb3JpZXMvaW5kZXguY3NzIiwid2VicGFjazovLy8uL2NsaWVudC9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJpbml0IiwiY29uc29sZSIsImxvZyIsIndlZWtkYXlzIiwibW9udGhzIiwicGVyZmVjdENhbGVuZGFyIiwiSFRNTEVsZW1lbnQiLCJjb25zdHJ1Y3RvciIsInRlbXBsYXRlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwidGVtcGxhdGVDb250ZW50IiwiY29udGVudCIsImlzIiwib2JzZXJ2ZWRBdHRyaWJ1dGVzIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwic2hhZG93Um9vdCIsImFwcGVuZENoaWxkIiwiY2xvbmVOb2RlIiwiZWwiLCJxdWVyeVNlbGVjdG9yIiwiZGF5Q2FyZCIsIm1vbnRoc0VsIiwid2Vla2RheXNFbCIsImRheXNFbCIsImZpbGxDYWxlbmRhciIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkNsaWNrIiwiYmluZCIsImdldEF0dHJpYnV0ZSIsImRhdGUiLCJEYXRlIiwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIiwibmFtZSIsIm9sZFZhbCIsIm5ld1ZhbCIsInVwRGF0ZSIsInZhbCIsImZvcm1hdCIsInNldEF0dHJpYnV0ZSIsImZ1bGxEYXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiZGF0ZU9iaiIsImRhdGVTdHIiLCJkIiwidG9JU09TdHJpbmciLCJzdWJzdHIiLCJyZWFsRGF0ZSIsInkiLCJnZXRGdWxsWWVhciIsIm0iLCJnZXRNb250aCIsImdldERhdGUiLCJtb250aCIsImZpcnN0RGF5T2ZNb250aCIsIlVUQyIsImdldERheSIsImRheXNJbk1vbnRoIiwid2Vla2RheSIsInJlbmRlciIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJjbGFzc05hbWUiLCJnZXREYXlDYXJkIiwiaW5uZXJUZXh0Iiwic2VsZWN0ZWREYXkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJzZWxlY3RlZE1vbnRoIiwicXVlcnlTZWxlY3RvckFsbCIsIm1hcCIsImpvaW4iLCJkYXlzIiwiQXJyYXkiLCJmaWxsIiwibiIsImkiLCJzZXREYXRlIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiZSIsInRhcmdldCIsImRheUVsIiwiY2xvc2VzdCIsImRheUVscyIsImNoaWxkcmVuIiwiZGF5IiwicHJvdG90eXBlIiwiaW5kZXhPZiIsImNhbGwiLCJwcmV2ZW50RGVmYXVsdCIsInVuZGVmaW5lZCIsIm1vbnRoRWwiLCJtb250aHNFbHMiLCJwYXJlbnROb2RlIiwidG9kYXkiLCJwcmV2WWVhciIsIm5leHRZZWFyIiwiYnRuVGVtcGxhdGUiLCJ0b0xvd2VyQ2FzZSIsIm1vbnRoUGlja2VyIiwiaW5wdXRFbCIsInZhbHVlIiwidXBkYXRlIiwibW9udGhzSHRtbCIsInNlbGVjdGVkIiwiZm9yRWFjaCIsImJ0biIsImZpcmVFdmVudCIsInBhcnNlSW50IiwibW9udGhCdXR0b24iLCJkYXRhc2V0IiwiRk9DVVNBQkxFX1NFTEVDVE9SUyIsIkFOSU1fQ0ZHIiwiZHVyYXRpb24iLCJlYXNpbmciLCJ1aURpYWxvZyIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm9uQ29udGVudENoYW5nZSIsImNvbnRlbnRFbCIsIm9ic2VydmUiLCJhdHRyaWJ1dGVzIiwiY2hpbGRMaXN0Iiwib25LZXlkb3duIiwib25CbHVyIiwiZGlzY29ubmVjdGVkQ2FsbGJhY2siLCJkaXNjb25uZWN0IiwiZG9PcGVuIiwiZG9DbG9zZSIsInRhYmJpbmdGb3J3YXJkIiwidGFyIiwiYmFja2Ryb3BDbGljayIsImRpYWxvZ0Nsb3NlQnRuIiwib3BlbiIsImdldEZvY3VzYWJsZUVscyIsImZvY3VzYWJsZUVsZW1lbnRzIiwiZWxlbXMiLCJmaXJzdCIsImxhc3QiLCJsZW5ndGgiLCJmb2N1c0VsIiwiZm9jdXMiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJrZXkiLCJzaGlmdEtleSIsImlzT3BlbiIsIkJvb2xlYW4iLCJ0cmlnZ2VyIiwiYWN0aXZlRWxlbWVudCIsInJlbW92ZUF0dHJpYnV0ZSIsImhhc0F0dHJpYnV0ZSIsInZpc2libGUiLCJhbmltYXRlIiwidHJhbnNmb3JtIiwib3BhY2l0eSIsIm9uZmluaXNoIiwib25PcGVuZWQiLCJvbkNsb3NlZCIsInVpTXNnQm94IiwiVE9BU1RfVElNRU9VVCIsInVpVG9hc3QiLCJzaG93IiwibXNnIiwidHlwZSIsImF1dG9jbG9zZSIsInRvYXN0IiwiVE9BU1RIIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0IiwicHJvcHMiLCJtYXJnaW5Ub3AiLCJhbmltIiwic2V0VGltZW91dCIsImhpZGUiLCJ0b2FzdHMiLCJ5ZWFyUGlja2VyIiwib25JbnB1dCIsImFkZFRvVmFsdWUiLCJjdXJyZW50VmFsdWUiLCJtb2R1bGUiLCJleHBvcnRzIiwiY2xpY2tlZCIsImtleXVwIiwiaW5mbyIsImVycm9yIiwid2FybmluZyIsIkVWRU5UIiwiaGVscGVyIiwiJCIsInV0aWwiLCJiYXNlVXJsIiwiYWpheCIsIm9wdGlvbnMiLCJ1cmwiLCJyZXNwIiwiZGF0YSIsInJlcSIsIlhNTEh0dHBSZXF1ZXN0IiwibWV0aG9kIiwic2VyaWFsaXplIiwiSlNPTiIsInN0cmluZ2lmeSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib25sb2FkIiwic3RhdHVzIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJzdGF0dXNUZXh0Iiwib25lcnJvciIsInNldFJlcXVlc3RIZWFkZXIiLCJzZW5kIiwiZ2V0IiwicG9zdCIsInB1dCIsImRlbCIsImtleUJyZWFrZXIiLCJudW1iZXJNYXRjaGVyIiwiX2lzTnVtYmVyIiwibWF0Y2giLCJfZGVjb2RlRW50aXRpZXMiLCJzdHIiLCJ0ZXh0Q29udGVudCIsIl9nZXRJbnB1dHMiLCJmb3JtIiwiaW5wdXRzIiwic2xpY2UiLCJGb3JtIiwiZWxlbWVudHMiLCJzZXQiLCJwYXJhbXMiLCJjbGVhciIsInN1c3BlbmRPYnNlcnZlIiwiYW5pbUZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJpbnB1dCIsInYiLCJuYW1lcyIsInJlcGxhY2UiLCJzcGxpdCIsImNoZWNrZWQiLCJ0b1N0cmluZyIsInRhZ05hbWUiLCJzZWxlY3RlZEluZGV4IiwiY29udmVydCIsImN1cnJlbnQiLCJwYXJ0cyIsImxhc3RQYXJ0IiwiZGlzYWJsZWQiLCJ0diIsInBhcnNlRmxvYXQiLCJjbXAiLCJ0b0ZpeGVkIiwiaXNBcnJheSIsInB1c2giLCJyZXNldCIsIm9ic2VydmVDYiIsImZpZWxkIiwiZm5hbWUiLCJvdiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNiIiwib2JzZXJ2ZVN0b3AiLCJsb25nQ2xpY2siLCJzaXp6bGUiLCJwdWJzdWIiLCJrZXlzIiwiYWxsIiwicHJvcCIsIkEiLCJYIiwiQyIsIkQiLCJWIiwiWiIsIkYxIiwiRjIiLCJGNSIsIlRBQiIsIkVTQyIsIkJDS1NQQyIsIkJBQ0tTUEFDRSIsIkVOVEVSIiwiU1BBQ0UiLCJQR1VQIiwiUEdET1dOIiwiRU5EIiwiSE9NRSIsIkxFRlQiLCJVUCIsIlJJR0hUIiwiRE9XTiIsIklOUyIsIkRFTCIsIk1JTlVTIiwiUExVUyIsIkRPVCIsIlNMQVNIIiwiTUFDTUlOVVMiLCJNQUNQTFVTIiwiTlVNU1RBUiIsIk5VTU1JTlVTIiwiTlVNUExVUyIsIk5VTURPVCIsIk5VTVNMQVNIIiwiZGlnaXRzIiwiYWxsb3dlZENoYXJzIiwiaXNNYXRoIiwiayIsImtleUNvZGUiLCJpc0N1dENvcHlQYXN0ZSIsImN0cmxPckNtZCIsImN0cmxLZXkiLCJtZXRhS2V5IiwiaXNBbHBoYSIsImlzRGlnaXQiLCJpc0FscGhhTnVtZXJpYyIsImlzTmF2Q2hhciIsImlzTnVtYmVyRmllbGQiLCJpc0VudGVyIiwiREVMQVkiLCJFVkVOVF9OQU1FIiwidGltZXIiLCJpc1JlYWR5IiwiY2xlYXJUaW1lb3V0IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJjcmVhdGVFdmVudCIsIndpbmRvdyIsImV2ZW50IiwiZXZ0IiwiaW5pdEN1c3RvbUV2ZW50IiwiRXZlbnQiLCJfY2FjaGUiLCJ0b3BpYyIsImFyZ3MiLCJhcHBseSIsIm9uIiwiY2FsbGJhY2siLCJvZmYiLCJoYW5kbGUiLCJjYSIsImZuIiwic3BsaWNlIiwib2JqIiwiaXNOb2RlTGlzdCIsIm5vZGVzIiwidGVzdCIsIm5vZGVUeXBlIiwibWl4ZWQiLCJjb250ZXh0IiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiYm9keSIsImZpcnN0Q2hpbGQiLCJmcm9tIiwiZmluZCIsInNlbGVjdG9yIiwiZXEiLCJpZHgiLCJhcHBlbmRUbyIsInBhcmVudCIsImFwcGVuZCIsImNoaWxkIiwiZXZlbnROYW1lIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hdGNoZXMiLCJjbHMiLCJtb2RFbENscyIsImFjdGlvbiIsImNvbmQiLCJjIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUNsYXNzIiwiaGFzQ2xhc3MiLCJjb250YWlucyIsInRvZ2dsZSIsImRpc3BsYXkiLCJodG1sIiwidGV4dCIsImF0dHIiLCJhbmltYXRlRWxlbWVudCIsInRvIiwib3B0cyIsIm9uY2FuY2VsIiwiZGZsdCIsInRyaW0iLCJjaGFycyIsIlJlZ0V4cCIsImx0cmltIiwicnRyaW0iLCJyYW5kIiwibWF4IiwibWluIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidWNmaXJzdCIsInMiLCJ0b1VwcGVyQ2FzZSIsImlzTnVtYmVyIiwiZm9ybWF0TnVtYmVyIiwibnVtIiwicm91bmQiLCJ0b0xvY2FsZVN0cmluZyIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsInJlZHVjZSIsImEiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ2YXJUb1JlYWxUeXBlIiwib3JpZ2luYWx2IiwiaXNPYmplY3RFbXB0eSIsIngiLCJzYW5pdGl6ZSIsImRpdiIsImZ1enp5IiwiaGF5IiwibCIsInBhcnNlVXJsIiwidXJsdCIsIlVSTCIsInByZXR0eURhdGUiLCJ0aW1lIiwiZGlmZiIsImdldFRpbWUiLCJkYXlfZGlmZiIsImlzTmFOIiwiY2VpbCIsImNvbXBvbmVudHMiLCJkZWZhdWx0IiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJXZWJDb21wb25lbnRzIiwicmVhZHkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEQ7Ozs7Ozs7Ozs7OztBQ2hDQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBLFk7Ozs7Ozs7Ozs7Ozs7QUNuQkEsbUJBQUFBLENBQVEsZ0RBQVI7O0FBR0EsU0FBU0MsSUFBVCxHQUFpQjtBQUNoQkMsU0FBUUMsR0FBUixDQUFZLDRCQUFaO0FBQ0E7O0FBR0QsK0RBQWU7QUFDZEY7QUFEYyxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ1BBOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FB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RUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0WEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY2xpZW50L2luZGV4LmpzXCIpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2NhbGVuZGFyL1wiOiBcIi4vY2xpZW50L2NhbGVuZGFyL2luZGV4LmpzXCIsXG5cdFwiLi9jYXRlZ29yaWVzL1wiOiBcIi4vY2xpZW50L2NhdGVnb3JpZXMvaW5kZXguanNcIixcblx0XCIuL2NvbXBvbmVudHMvY2FsZW5kYXIvXCI6IFwiLi9jbGllbnQvY29tcG9uZW50cy9jYWxlbmRhci9pbmRleC5qc1wiLFxuXHRcIi4vY29tcG9uZW50cy9tb250aC1waWNrZXIvXCI6IFwiLi9jbGllbnQvY29tcG9uZW50cy9tb250aC1waWNrZXIvaW5kZXguanNcIixcblx0XCIuL2NvbXBvbmVudHMvdWktZGlhbG9nL1wiOiBcIi4vY2xpZW50L2NvbXBvbmVudHMvdWktZGlhbG9nL2luZGV4LmpzXCIsXG5cdFwiLi9jb21wb25lbnRzL3VpLW1zZ2JveC9cIjogXCIuL2NsaWVudC9jb21wb25lbnRzL3VpLW1zZ2JveC9pbmRleC5qc1wiLFxuXHRcIi4vY29tcG9uZW50cy91aS10b2FzdC9cIjogXCIuL2NsaWVudC9jb21wb25lbnRzL3VpLXRvYXN0L2luZGV4LmpzXCIsXG5cdFwiLi9jb21wb25lbnRzL3llYXItcGlja2VyL1wiOiBcIi4vY2xpZW50L2NvbXBvbmVudHMveWVhci1waWNrZXIvaW5kZXguanNcIixcblx0XCIuL2NvcmUvXCI6IFwiLi9jbGllbnQvY29yZS9pbmRleC5qc1wiLFxuXHRcIi4vY29yZS91dGlsL1wiOiBcIi4vY2xpZW50L2NvcmUvdXRpbC9pbmRleC5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHRyZXR1cm4gbW9kdWxlO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIG1vZHVsZSBcIicgKyByZXEgKyAnXCIuJyk7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9jbGllbnQgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwvJFwiOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInJlcXVpcmUoJy4vaW5kZXguY3NzJyk7XG5cblxuZnVuY3Rpb24gaW5pdCAoKSB7XG5cdGNvbnNvbGUubG9nKCdjYWxlbmRhciBzaWRlYmFyIGlzIHJlYWR5IScpO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0aW5pdFxufTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInJlcXVpcmUoJy4vaW5kZXguY3NzJyk7XG5cblxuZnVuY3Rpb24gaW5pdCAoKSB7XG5cdGNvbnNvbGUubG9nKCdjYXRlZ29yaWVzIHNpZGViYXIgcmVhZHkhJyk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRpbml0XG59O1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2FsZW5kYXIge1xcblxcdC0tZmlyc3QtZGF5OiAxO1xcblxcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0Y3Vyc29yOiBkZWZhdWx0O1xcblxcdHdpZHRoOiBpbmhlcml0O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRmb250OiBub3JtYWwgMWVtIHNhbnMtc2VyaWY7XFxufVxcblxcbi5jYWxlbmRhciAuZGF5LWNhcmQge1xcblxcdHBhZGRpbmc6IDIwcHggMCAzMnB4O1xcblxcdG1hcmdpbi1ib3R0b206IDJweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZDogI2NlZTtcXG59XFxuXFxuLmNhbGVuZGFyIGgxLFxcbi5jYWxlbmRhciBoMiB7IG1hcmdpbjogMDsgbGluZS1oZWlnaHQ6IDE7IGZvbnQ6IGluaGVyaXQ7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG4uY2FsZW5kYXIgaDEgeyBmb250LXNpemU6IDQuNmVtOyB9XFxuXFxuLmNhbGVuZGFyIG5hdiB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdG1hcmdpbjogMDtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtZ2FwOiAwO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxufVxcblxcbi5jYWxlbmRhciBhIHtcXG5cXHRwYWRkaW5nOiA1cHggNXB4IDNweCAwO1xcblxcdHRleHQtYWxpZ246IHJpZ2h0O1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmNhbGVuZGFyIC5tb250aHMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0bWFyZ2luOiAtMjBweCAwIDA7XFxuXFx0cGFkZGluZzogMCA1cHg7XFxufVxcbi5jYWxlbmRhciAubW9udGhzIGEgeyBwYWRkaW5nOiAzcHggMDsgfVxcblxcbi5jYWxlbmRhciAud2Vla2RheXMgeyBib3JkZXItdG9wOiAxcHggc29saWQgIzg4ODsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ODg7IH1cXG4uY2FsZW5kYXIgLndlZWtkYXlzIGEgeyBiYWNrZ3JvdW5kOiAjY2NjOyB9XFxuXFxuLmNhbGVuZGFyIC5tb250aHMgYSxcXG4uY2FsZW5kYXIgLmRheXMgYSB7IGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5jYWxlbmRhciAubW9udGhzIGE6aG92ZXIsXFxuLmNhbGVuZGFyIC5kYXlzIGE6aG92ZXIgeyBjb2xvcjogIzliZjsgfVxcblxcbi5jYWxlbmRhciAuc2VsZWN0ZWQgeyBmb250LXdlaWdodDogYm9sZDsgY29sb3I6IGJsdWUgIWltcG9ydGFudDsgfVxcblxcbi5kYXlzLTI4IC5kYXktMjksIC5kYXlzLTI4IC5kYXktMzAsIC5kYXlzLTI4IC5kYXktMzEsXFxuLmRheXMtMjkgLmRheS0zMCwgLmRheXMtMjkgLmRheS0zMSxcXG4uZGF5cy0zMCAuZGF5LTMxIHsgZGlzcGxheTogbm9uZTsgfVxcblxcbi5jYWxlbmRhciAuZGF5LTEgeyBncmlkLWNvbHVtbi1zdGFydDogdmFyKC0tZmlyc3QtZGF5KTsgfVxcblxcbi55ZWFyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcblxcdGp1c3RpZnktY29udGVudDogZW5kO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDVweDtcXG5cXHRsZWZ0OiAwO1xcblxcdHJpZ2h0OiAwO1xcbn1cXG4ueWVhciAuZmlsbGVyIHsgZmxleDogMTsgfVxcblxcbi55ZWFyIGJ1dHRvbiB7IGJhY2tncm91bmQ6IG5vbmU7IGJvcmRlcjogbm9uZTsgY3Vyc29yOiBwb2ludGVyOyBib3JkZXItcmFkaXVzOiAzcHg7IH1cXG4ueWVhciBidXR0b246aG92ZXIgeyBjb2xvcjogYmx1ZTsgfVxcblxcbi55ZWFyIHNwYW4ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuXFx0cGFkZGluZy10b3A6IDNweDtcXG5cXHRtYXJnaW46IDAgM3B4O1xcbn1cXG5cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY2FsZW5kYXJcXFwiPjxkaXYgY2xhc3M9XFxcImRheS1jYXJkXFxcIj48L2Rpdj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCJ5ZWFyXFxcIj5cXG5cXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJ0b2RheVxcXCIgdGl0bGU9XFxcIkdvIHRvIHRvZGF5XFxcIj5Ub2RheTwvYnV0dG9uPlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcImZpbGxlclxcXCI+PC9kaXY+XFxuXFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwicHJldi15ZWFyXFxcIiB0aXRsZT1cXFwiUHJldmlvdXMgeWVhclxcXCI+4peAPC9idXR0b24+XFxuXFx0XFx0PHNwYW4+MjAxODwvc3Bhbj5cXG5cXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJuZXh0LXllYXJcXFwiIHRpdGxlPVxcXCJOZXh0IHllYXJcXFwiPuKWtjwvYnV0dG9uPlxcblxcdDwvZGl2PlxcblxcdDxuYXYgY2xhc3M9XFxcIm1vbnRoc1xcXCI+PC9uYXY+PG5hdiBjbGFzcz1cXFwid2Vla2RheXNcXFwiPjwvbmF2PjxuYXYgY2xhc3M9XFxcImRheXNcXFwiPjwvbmF2PlxcbjwvZGl2PlwiOyIsImltcG9ydCBzdHlsZSBmcm9tICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC5odG1sJztcblxuY29uc3Qgd2Vla2RheXMgPSBbJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknLCAnU3VuZGF5J107XG5jb25zdCBtb250aHMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGVyZmVjdENhbGVuZGFyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXG5cdGNvbnN0cnVjdG9yICgpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMudGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXHRcdHRoaXMudGVtcGxhdGUuaW5uZXJIVE1MID0gYDxzdHlsZT4ke3N0eWxlfTwvc3R5bGU+JHt0ZW1wbGF0ZX1gO1xuXHRcdHRoaXMudGVtcGxhdGVDb250ZW50ID0gdGhpcy50ZW1wbGF0ZS5jb250ZW50O1xuXHR9XG5cblx0c3RhdGljIGdldCBpcyAoKSB7IHJldHVybiAncGVyZmVjdC1jYWxlbmRhcic7IH1cblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMgKCkgeyByZXR1cm4gWydkYXRlJ107IH1cblxuXHRjb25uZWN0ZWRDYWxsYmFjayAoKSB7XG5cdFx0dGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cdFx0dGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHRoaXMudGVtcGxhdGVDb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG5cdFx0dGhpcy5lbCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcuY2FsZW5kYXInKTtcblx0XHR0aGlzLmRheUNhcmQgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy5kYXktY2FyZCcpO1xuXG5cdFx0dGhpcy5tb250aHNFbCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignLm1vbnRocycpO1xuXHRcdHRoaXMud2Vla2RheXNFbCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignLndlZWtkYXlzJyk7XG5cdFx0dGhpcy5kYXlzRWwgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy5kYXlzJyk7XG5cdFx0dGhpcy5maWxsQ2FsZW5kYXIoKTtcblxuXHRcdHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSk7XG5cdFx0aWYgKCF0aGlzLmdldEF0dHJpYnV0ZSgnZGF0ZScpKSB0aGlzLmRhdGUgPSBuZXcgRGF0ZSgpO1xuXHR9XG5cblx0YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbCwgbmV3VmFsKSB7XG5cdFx0aWYgKG5hbWUgPT09ICdkYXRlJykgdGhpcy51cERhdGUobmV3VmFsKTtcblx0fVxuXG5cdHNldCBkYXRlICh2YWwpIHtcblx0XHRpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycpIHZhbCA9IHRoaXMuZm9ybWF0KHZhbCk7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2RhdGUnLCB2YWwpO1xuXHR9XG5cblx0Z2V0IGRhdGUgKCkgeyByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGUnKTsgfVxuXG5cdGdldCBmdWxsRGF0ZSAoKSB7XG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMuZGF0ZSk7XG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGF0ZU9iaiwgeyBkYXRlLCBkYXRlU3RyOiB0aGlzLmRhdGUgfSk7XG5cdH1cblxuXHQvLyB5eXl5LW1tLWRkXG5cdGZvcm1hdCAoZCkgeyByZXR1cm4gZC50b0lTT1N0cmluZygpLnN1YnN0cigwLCAxMCk7IH1cblxuXHR1cERhdGUgKGRhdGUpIHtcblx0XHRkYXRlID0gZGF0ZSB8fCB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0ZScpO1xuXHRcdGlmICghZGF0ZSB8fCAhdGhpcy5lbCkgcmV0dXJuO1xuXHRcdHRoaXMucmVhbERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcblxuXHRcdGNvbnN0IHkgPSB0aGlzLnJlYWxEYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0Y29uc3QgbSA9IHRoaXMucmVhbERhdGUuZ2V0TW9udGgoKTtcblx0XHRjb25zdCBkID0gdGhpcy5yZWFsRGF0ZS5nZXREYXRlKCk7XG5cdFx0Y29uc3QgbW9udGggPSBtb250aHNbbV07XG5cdFx0Y29uc3QgZmlyc3REYXlPZk1vbnRoID0gbmV3IERhdGUoRGF0ZS5VVEMoeSwgbSwgMSkpLmdldERheSgpIHx8IDc7XHQvLyBtYWtlIFN1biA3IG5vdCAwXG5cdFx0Y29uc3QgZGF5c0luTW9udGggPSBuZXcgRGF0ZShEYXRlLlVUQyh5LCBtICsgMSwgMCkpLmdldERhdGUoKTtcblx0XHRjb25zdCB3ZWVrZGF5ID0gd2Vla2RheXNbKHRoaXMucmVhbERhdGUuZ2V0RGF5KCkgfHwgNykgLSAxXTtcblx0XHR0aGlzLmRhdGVPYmogPSB7IHksIG0sIGQsIG1vbnRoLCBmaXJzdERheU9mTW9udGgsIGRheXNJbk1vbnRoLCB3ZWVrZGF5IH07XG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0fVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0dGhpcy5lbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1maXJzdC1kYXknLCB0aGlzLmRhdGVPYmouZmlyc3REYXlPZk1vbnRoKTtcblx0XHR0aGlzLmVsLmNsYXNzTmFtZSA9ICdjYWxlbmRhciBkYXlzLScgKyB0aGlzLmRhdGVPYmouZGF5c0luTW9udGg7XG5cdFx0dGhpcy5kYXlDYXJkLmlubmVySFRNTCA9IHRoaXMuZ2V0RGF5Q2FyZCgpO1xuXHRcdHRoaXMuZWwucXVlcnlTZWxlY3RvcignLnllYXIgc3BhbicpLmlubmVyVGV4dCA9IHRoaXMuZGF0ZU9iai55O1xuXG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWREYXkpIHRoaXMuc2VsZWN0ZWREYXkuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcblx0XHR0aGlzLnNlbGVjdGVkRGF5ID0gdGhpcy5kYXlzRWwucXVlcnlTZWxlY3RvcignLmRheS0nICsgdGhpcy5kYXRlT2JqLmQpO1xuXHRcdHRoaXMuc2VsZWN0ZWREYXkuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcblxuXHRcdGlmICh0aGlzLnNlbGVjdGVkTW9udGgpIHRoaXMuc2VsZWN0ZWRNb250aC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuXHRcdHRoaXMuc2VsZWN0ZWRNb250aCA9IHRoaXMubW9udGhzRWwucXVlcnlTZWxlY3RvckFsbCgnYScpW3RoaXMuZGF0ZU9iai5tXTtcblx0XHR0aGlzLnNlbGVjdGVkTW9udGguY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcblx0fVxuXG5cdGdldERheUNhcmQgKCkgeyByZXR1cm4gYDxoMT4ke3RoaXMuZGF0ZU9iai5kfTwvaDE+PGgyPiR7dGhpcy5kYXRlT2JqLndlZWtkYXl9PC9oMj5gOyB9XG5cblx0ZmlsbENhbGVuZGFyICgpIHtcblx0XHR0aGlzLm1vbnRoc0VsLmlubmVySFRNTCA9IG1vbnRocy5tYXAobSA9PiBgPGEgaHJlZj1cIiMke219XCI+JHttLnN1YnN0cigwLCAzKX08L2E+YCkuam9pbignJyk7XG5cdFx0dGhpcy53ZWVrZGF5c0VsLmlubmVySFRNTCA9IHdlZWtkYXlzLm1hcChtID0+IGA8YT4ke20uc3Vic3RyKDAsIDMpfTwvYT5gKS5qb2luKCcnKTtcblx0XHRjb25zdCBkYXlzID0gQXJyYXkoMzEpLmZpbGwoMCkubWFwKChuLCBpKSA9PiBpICsgMSkubWFwKGkgPT4gYDxhIGhyZWY9XCIjJHtpfVwiIGNsYXNzPVwiZGF5LSR7aX1cIj4ke2l9PC9hPmApO1xuXHRcdHRoaXMuZGF5c0VsLmlubmVySFRNTCA9IGRheXMuam9pbignJyk7XG5cdH1cblxuXHRzZXREYXRlICh5ID0gdGhpcy5kYXRlT2JqLnksIG0gPSB0aGlzLmRhdGVPYmoubSwgZCA9IHRoaXMuZGF0ZU9iai5kKSB7XG5cdFx0aWYgKHkgaW5zdGFuY2VvZiBEYXRlKSByZXR1cm4gdGhpcy5zZXREYXRlKHkuZ2V0RnVsbFllYXIoKSwgeS5nZXRNb250aCgpLCB5LmdldERhdGUoKSk7XG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKHksIG0sIGQpKTtcblx0XHRpZiAoZGF0ZSAhPT0gdGhpcy5yZWFsRGF0ZSkge1xuXHRcdFx0dGhpcy5kYXRlID0gZGF0ZTtcblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZScsIHsgZGV0YWlsOiB0aGlzLmZ1bGxEYXRlIH0pKTtcblx0XHR9XG5cdH1cblxuXHRvbkNsaWNrIChlKSB7XG5cdFx0Y29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG5cdFx0Y29uc3QgZGF5RWwgPSB0YXJnZXQuY2xvc2VzdCgnLmRheXMgYScpO1xuXHRcdGlmIChkYXlFbCkge1xuXHRcdFx0Y29uc3QgZGF5RWxzID0gdGhpcy5kYXlzRWwuY2hpbGRyZW47XG5cdFx0XHRjb25zdCBkYXkgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGRheUVscywgZGF5RWwpICsgMTtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHJldHVybiB0aGlzLnNldERhdGUodW5kZWZpbmVkLCB1bmRlZmluZWQsIGRheSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbW9udGhFbCA9IHRhcmdldC5jbG9zZXN0KCcubW9udGhzIGEnKTtcblx0XHRpZiAobW9udGhFbCkge1xuXHRcdFx0Y29uc3QgbW9udGhzRWxzID0gbW9udGhFbC5wYXJlbnROb2RlLmNoaWxkcmVuO1xuXHRcdFx0Y29uc3QgbW9udGggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKG1vbnRoc0VscywgbW9udGhFbCk7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRyZXR1cm4gdGhpcy5zZXREYXRlKHVuZGVmaW5lZCwgbW9udGgpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHRvZGF5ID0gdGFyZ2V0LmNsb3Nlc3QoJy50b2RheScpO1xuXHRcdGlmICh0b2RheSkgcmV0dXJuIHRoaXMuc2V0RGF0ZShuZXcgRGF0ZSgpKTtcblxuXHRcdGNvbnN0IHByZXZZZWFyID0gdGFyZ2V0LmNsb3Nlc3QoJy5wcmV2LXllYXInKTtcblx0XHRpZiAocHJldlllYXIpIHJldHVybiB0aGlzLnNldERhdGUodGhpcy5kYXRlT2JqLnkgLSAxKTtcblxuXHRcdGNvbnN0IG5leHRZZWFyID0gdGFyZ2V0LmNsb3Nlc3QoJy5uZXh0LXllYXInKTtcblx0XHRpZiAobmV4dFllYXIpIHJldHVybiB0aGlzLnNldERhdGUodGhpcy5kYXRlT2JqLnkgKyAxKTtcblx0fVxuXG59XG5cbi8vIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgncGVyZmVjdC1jYWxlbmRhcicsIHBlcmZlY3RDYWxlbmRhcik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5tb250aC1waWNrZXIge1xcblxcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHdpZHRoOiBpbmhlcml0O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcblxcbi5tb250aCB7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHRmb250LXNpemU6IDEycHg7XFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXHRmbGV4OiAxO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcblxcdGJvcmRlci13aWR0aDogMCAxcHg7XFxuXFx0cGFkZGluZy10b3A6IDJweDtcXG5cXHRjb2xvcjogcmdiYSgwLDAsMCwuNik7XFxufVxcblxcblxcbi5tb250aC5zZWxlY3RlZCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xcblxcdGJvcmRlci1jb2xvcjogIzQ0NDtcXG5cXHRjb2xvcjogcmdiYSgwLDAsMCwxKTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiaW1wb3J0IHN0eWxlIGZyb20gJy4vaW5kZXguY3NzJztcbmNvbnN0IG1vbnRocyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddO1xuXG5jb25zdCBidG5UZW1wbGF0ZSA9IChtb250aCwgaSkgPT4gYDxidXR0b25cblx0Y2xhc3M9XCJtb250aCBtb250aC0ke21vbnRoLnRvTG93ZXJDYXNlKCl9IG1vbnRoLSR7aSArIDF9XCJcblx0ZGF0YS12YWx1ZT1cIiR7aSArIDF9XCI+JHttb250aC5zdWJzdHIoMCwgMyl9PC9idXR0b24+YDtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG1vbnRoUGlja2VyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXG5cdGNvbnN0cnVjdG9yICgpIHtcblx0XHRzdXBlcigpO1xuXHRcdGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblx0XHR0ZW1wbGF0ZS5pbm5lckhUTUwgPSBgPHN0eWxlPiR7c3R5bGV9PC9zdHlsZT4ke3RoaXMudGVtcGxhdGUoKX1gO1xuXHRcdHRoaXMudGVtcGxhdGVDb250ZW50ID0gdGVtcGxhdGUuY29udGVudDtcblx0fVxuXG5cdHN0YXRpYyBnZXQgaXMgKCkgeyByZXR1cm4gJ21vbnRoLXBpY2tlcic7IH1cblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMgKCkgeyByZXR1cm4gWyd2YWx1ZSddOyB9XG5cblx0Y29ubmVjdGVkQ2FsbGJhY2sgKCkge1xuXHRcdHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuXHRcdHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0aGlzLnRlbXBsYXRlQ29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuXHRcdHRoaXMuZWwgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLm1vbnRoLXBpY2tlcicpO1xuXHRcdHRoaXMuaW5wdXRFbCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAwKTtcblxuXHRcdHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSk7XG5cdFx0aWYgKCF0aGlzLmdldEF0dHJpYnV0ZSgndmFsdWUnKSkgdGhpcy52YWx1ZSA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDE7XG5cdH1cblxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgKG5hbWUsIG9sZFZhbCwgbmV3VmFsKSB7XG5cdFx0aWYgKG5hbWUgPT09ICd2YWx1ZScpIHRoaXMudXBkYXRlKG5ld1ZhbCk7XG5cdH1cblxuXG5cdHRlbXBsYXRlICgpIHtcblx0XHRjb25zdCBtb250aHNIdG1sID0gbW9udGhzLm1hcChidG5UZW1wbGF0ZSkuam9pbignJyk7XG5cdFx0cmV0dXJuIGA8ZGl2IGNsYXNzPVwibW9udGgtcGlja2VyXCI+JHttb250aHNIdG1sfTwvZGl2PmA7XG5cdH1cblxuXHRzZXQgdmFsdWUgKHZhbHVlKSB7IHRoaXMuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKTsgfVxuXG5cdGdldCB2YWx1ZSAoKSB7IHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndmFsdWUnKTsgfVxuXG5cdHVwZGF0ZSAodmFsdWUpIHtcblx0XHRsZXQgc2VsZWN0ZWQgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb250aC5zZWxlY3RlZCcpO1xuXHRcdHNlbGVjdGVkLmZvckVhY2goYnRuID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpKTtcblx0XHRzZWxlY3RlZCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignLm1vbnRoLScgKyB2YWx1ZSk7XG5cdFx0aWYgKHNlbGVjdGVkKSBzZWxlY3RlZC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuXHRcdHRoaXMuZmlyZUV2ZW50KCdjaGFuZ2UnLCB7IHZhbHVlOiBwYXJzZUludCh2YWx1ZSwgMTApLCBtb250aDogbW9udGhzW3ZhbHVlIC0gMV0gfSk7XG5cdH1cblxuXHRvbkNsaWNrIChlKSB7XG5cdFx0Y29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG5cblx0XHRjb25zdCBtb250aEJ1dHRvbiA9IHRhcmdldC5jbG9zZXN0KCcubW9udGgnKTtcblx0XHRpZiAobW9udGhCdXR0b24pIHtcblx0XHRcdGNvbnN0IHZhbCA9IG1vbnRoQnV0dG9uLmRhdGFzZXQudmFsdWU7XG5cdFx0XHR0aGlzLnZhbHVlID0gdmFsO1xuXHRcdH1cblx0fVxuXG5cdGZpcmVFdmVudCAobmFtZSwgZGV0YWlsKSB7XG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChuYW1lLCB7IGRldGFpbCB9KSk7XG5cdH1cblxufVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudWktZGlhbG9nIHtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0bGVmdDogMDtcXG5cXHRyaWdodDogMDtcXG5cXHRib3R0b206IDA7XFxuXFx0dG9wOiAwO1xcblxcdHBhZGRpbmc6IDUwcHg7XFxuXFx0ei1pbmRleDogOTk5O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRtYXgtaGVpZ2h0OiAxMDB2dztcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdG9wYWNpdHk6IDA7XFxufVxcblxcbi51aS1kaWFsb2ctYmFja2Ryb3Age1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRsZWZ0OiAwO1xcblxcdHRvcDogMDtcXG5cXHRtaW4td2lkdGg6IDEwMCU7XFxuXFx0bWluLWhlaWdodDogMTAwJTtcXG5cXHRiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC4zKTtcXG59XFxuXFxuLnVpLWRpYWxvZy1jb250ZW50IHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ei1pbmRleDogOTtcXG5cXHR3aWR0aDogNDAwcHg7XFxuXFx0bWluLWhlaWdodDogMTAwcHg7XFxuXFx0bWF4LWhlaWdodDogMzAwcHg7XFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHRtYXJnaW4tdG9wOiAtMTAlO1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXHRib3gtc2hhZG93OiAwIDNweCA1cHggMXB4IHJnYmEoMCwwLDAsMC40KTtcXG59XFxuXFxuLnVpLWRpYWxvZy1jb250ZW50LWlubmVyIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0b3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnVpLWRpYWxvZy52aXNpYmxlIHsgZGlzcGxheTogZmxleDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJ1aS1kaWFsb2dcXFwiPlxcblxcdDxkaXYgY2xhc3M9XFxcInVpLWRpYWxvZy1iYWNrZHJvcFxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiPjwvZGl2PlxcblxcdDxkaXYgY2xhc3M9XFxcInVpLWRpYWxvZy1jb250ZW50XFxcIiB0YWJpbmRleD1cXFwiMFxcXCI+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwidWktZGlhbG9nLWNvbnRlbnQtaW5uZXJcXFwiPjxzbG90Pjwvc2xvdD48L2Rpdj5cXG5cXHQ8L2Rpdj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCJ1aS1kaWFsb2ctZm9jdXMtZ3VhcmRcXFwiIHRhYmluZGV4PVxcXCIwXFxcIj48L2Rpdj5cXG48L2Rpdj5cXG5cIjsiLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXguaHRtbCc7XG5cblxuY29uc3QgRk9DVVNBQkxFX1NFTEVDVE9SUyA9IGBcblx0YVtocmVmXTpub3QoW3RhYmluZGV4PVwiLTFcIl0pLFxuXHRpbnB1dDpub3QoW2Rpc2FibGVkXSk6bm90KFt0YWJpbmRleD1cIi0xXCJdKSxcblx0c2VsZWN0Om5vdChbZGlzYWJsZWRdKTpub3QoW3RhYmluZGV4PVwiLTFcIl0pLFxuXHR0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSk6bm90KFt0YWJpbmRleD1cIi0xXCJdKSxcblx0YnV0dG9uOm5vdChbZGlzYWJsZWRdKTpub3QoW3RhYmluZGV4PVwiLTFcIl0pLFxuXHRpZnJhbWU6bm90KFt0YWJpbmRleD1cIi0xXCJdKSxcblx0W3RhYmluZGV4XTpub3QoW3RhYmluZGV4PVwiLTFcIl0pLFxuXHRbY29udGVudEVkaXRhYmxlXTpub3QoW3RhYmluZGV4PVwiLTFcIl0pXG5gO1xuXG5cbmNvbnN0IEFOSU1fQ0ZHID0ge2R1cmF0aW9uOiAzMDAsIGVhc2luZzogJ2Vhc2Utb3V0JywgZmlsbDogJ2ZvcndhcmRzJ307XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdWlEaWFsb2cgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG5cblx0Y29uc3RydWN0b3IgKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLnRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblx0XHR0aGlzLnRlbXBsYXRlLmlubmVySFRNTCA9IGA8c3R5bGU+JHtzdHlsZX08L3N0eWxlPiR7dGVtcGxhdGV9YDtcblx0XHR0aGlzLnRlbXBsYXRlQ29udGVudCA9IHRoaXMudGVtcGxhdGUuY29udGVudDtcblxuXHRcdHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLm9uQ29udGVudENoYW5nZS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdHN0YXRpYyBnZXQgaXMgKCkgeyByZXR1cm4gJ3VpLWRpYWxvZyc7IH1cblxuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcyAoKSB7XG5cdFx0cmV0dXJuIFsnb3BlbiddO1xuXHR9XG5cblx0Y29ubmVjdGVkQ2FsbGJhY2sgKCkge1xuXHRcdHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuXHRcdHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0aGlzLnRlbXBsYXRlQ29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuXHRcdHRoaXMuZWwgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLnVpLWRpYWxvZycpO1xuXHRcdHRoaXMuY29udGVudEVsID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcudWktZGlhbG9nLWNvbnRlbnQnKTtcblxuXHRcdHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLCB7IGF0dHJpYnV0ZXM6IGZhbHNlLCBjaGlsZExpc3Q6IHRydWUgfSk7XG5cdFx0dGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5ZG93bi5iaW5kKHRoaXMpLCB0cnVlKTtcblx0XHR0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpLCB0cnVlKTtcblx0XHR0aGlzLm9uQ29udGVudENoYW5nZSgpO1xuXHR9XG5cblx0Ly8gZWwgbW92ZWQgdG8gYSBuZXcgZG9jdW1lbnRcblx0Ly8gYWRvcHRlZENhbGxiYWNrKCkge31cblxuXHQvLyBlbCByZW1vdmVkIGZyb20gRE9NXG5cdGRpc2Nvbm5lY3RlZENhbGxiYWNrICgpIHtcblx0XHR0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblx0XHRjb25zb2xlLmxvZygnZGlzY29ubmVjdGVkQ2FsbGJhY2snKTtcblx0fVxuXG5cblx0YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbCwgbmV3VmFsKSB7XG5cdFx0aWYgKG5hbWUgPT09ICdvcGVuJykge1xuXHRcdFx0aWYgKG5ld1ZhbCAhPT0gbnVsbCkgdGhpcy5kb09wZW4oKTtcblx0XHRcdGVsc2UgdGhpcy5kb0Nsb3NlKCk7XG5cblx0XHR9XG5cdH1cblxuXG5cdG9uQ2xpY2sgKGUpIHtcblx0XHR0aGlzLnRhYmJpbmdGb3J3YXJkID0gbnVsbDtcblx0XHRjb25zdCB0YXIgPSBlLnRhcmdldDtcblx0XHRjb25zdCBiYWNrZHJvcENsaWNrID0gdGFyLmNsb3Nlc3QoJy51aS1kaWFsb2ctYmFja2Ryb3AnKTtcblx0XHRjb25zdCBkaWFsb2dDbG9zZUJ0biA9IHRhci5nZXRBdHRyaWJ1dGUoJ2Nsb3NlLWRpYWxvZycpICE9PSBudWxsO1xuXG5cdFx0aWYgKGJhY2tkcm9wQ2xpY2sgfHwgZGlhbG9nQ2xvc2VCdG4pIHRoaXMub3BlbiA9IGZhbHNlO1xuXHR9XG5cblxuXHRnZXRGb2N1c2FibGVFbHMgKCkge1xuXHRcdGlmICghdGhpcy5mb2N1c2FibGVFbGVtZW50cykge1xuXHRcdFx0bGV0IGVsZW1zID0gdGhpcy5xdWVyeVNlbGVjdG9yQWxsKEZPQ1VTQUJMRV9TRUxFQ1RPUlMpO1xuXHRcdFx0bGV0IGZpcnN0ID0gdGhpcy5lbCwgbGFzdCA9IHRoaXMuZWw7XG5cdFx0XHRpZiAoZWxlbXMubGVuZ3RoKSB7XG5cdFx0XHRcdGZpcnN0ID0gZWxlbXNbMF07XG5cdFx0XHRcdGxhc3QgPSBlbGVtc1tlbGVtcy5sZW5ndGggLSAxXTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRmaXJzdCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignLnVpLWRpYWxvZy1iYWNrZHJvcCcpO1xuXHRcdFx0XHRsYXN0ID0gdGhpcy5jb250ZW50RWw7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmZvY3VzYWJsZUVsZW1lbnRzID0ge2ZpcnN0LCBsYXN0fTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuZm9jdXNhYmxlRWxlbWVudHM7XG5cdH1cblxuXG5cdG9uQmx1ciAoZSkge1xuXHRcdGlmICh0aGlzLnRhYmJpbmdGb3J3YXJkID09PSBudWxsKSByZXR1cm47XG5cblx0XHRjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcblx0XHRjb25zdCB7Zmlyc3QsIGxhc3R9ID0gdGhpcy5nZXRGb2N1c2FibGVFbHMoKTtcblx0XHRsZXQgZm9jdXNFbCA9IG51bGw7XG5cblx0XHRpZiAodGhpcy50YWJiaW5nRm9yd2FyZCAmJiB0YXJnZXQgPT09IGxhc3QpIGZvY3VzRWwgPSBmaXJzdDtcblx0XHRlbHNlIGlmICghdGhpcy50YWJiaW5nRm9yd2FyZCAmJiB0YXJnZXQgPT09IGZpcnN0KSBmb2N1c0VsID0gbGFzdDtcblxuXHRcdGlmIChmb2N1c0VsKSB7XG5cdFx0XHR0aGlzLnRhYmJpbmdGb3J3YXJkID0gbnVsbDtcblx0XHRcdGZvY3VzRWwuZm9jdXMoKTtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cdFx0fVxuXHR9XG5cblxuXHRvbktleWRvd24gKGUpIHtcblx0XHRpZiAoZS5rZXkgPT09ICdUYWInKSB0aGlzLnRhYmJpbmdGb3J3YXJkID0gIWUuc2hpZnRLZXk7XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLnRhYmJpbmdGb3J3YXJkID0gbnVsbDtcblx0XHRcdGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHRoaXMub3BlbiA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cblx0b25Db250ZW50Q2hhbmdlICgpIHtcblx0XHR0aGlzLmZvY3VzYWJsZUVsZW1lbnRzID0gbnVsbDtcblx0fVxuXG5cblx0c2V0IG9wZW4gKHZhbCkge1xuXHRcdGNvbnN0IGlzT3BlbiA9IEJvb2xlYW4odmFsKTtcblx0XHRpZiAoaXNPcGVuKSB7XG5cdFx0XHRpZiAoIXRoaXMudHJpZ2dlciAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB0aGlzLnRyaWdnZXIgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ29wZW4nLCAnJyk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ29wZW4nKTtcblx0XHRcdHRoaXMudHJpZ2dlciA9IG51bGw7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IG9wZW4gKCkge1xuXHRcdHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgnb3BlbicpO1xuXHR9XG5cblxuXG5cdGRvT3BlbiAodHJpZ2dlcikge1xuXHRcdGlmICh0aGlzLnZpc2libGUpIHJldHVybjtcblx0XHRpZiAodHJpZ2dlcikgdGhpcy50cmlnZ2VyID0gdHJpZ2dlcjtcblx0XHR0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcblx0XHR0aGlzLnZpc2libGUgPSB0cnVlO1xuXHRcdHRoaXMuZ2V0Rm9jdXNhYmxlRWxzKCkuZmlyc3QuZm9jdXMoKTtcblx0XHR0aGlzLmNvbnRlbnRFbC5hbmltYXRlKFt7dHJhbnNmb3JtOiAnc2NhbGUoLjkpJ30sIHt0cmFuc2Zvcm06ICdzY2FsZSgxKSd9XSwgQU5JTV9DRkcpO1xuXHRcdHRoaXMuZWxcblx0XHRcdC5hbmltYXRlKFt7IG9wYWNpdHk6IDAgfSwge29wYWNpdHk6IDF9XSwgQU5JTV9DRkcpXG5cdFx0XHQub25maW5pc2ggPSB0aGlzLm9uT3BlbmVkLmJpbmQodGhpcyk7XG5cdH1cblxuXHRkb0Nsb3NlICgpIHtcblx0XHRpZiAoIXRoaXMudmlzaWJsZSkgcmV0dXJuO1xuXHRcdGlmICh0aGlzLnRyaWdnZXIpIHRoaXMudHJpZ2dlci5mb2N1cygpO1xuXHRcdHRoaXMuY29udGVudEVsLmFuaW1hdGUoW3t0cmFuc2Zvcm06ICdzY2FsZSgxKSd9LCB7dHJhbnNmb3JtOiAnc2NhbGUoLjkpJ31dLCBBTklNX0NGRyk7XG5cdFx0dGhpcy5lbFxuXHRcdFx0LmFuaW1hdGUoW3sgb3BhY2l0eTogMSB9LCB7b3BhY2l0eTogMH1dLCBBTklNX0NGRylcblx0XHRcdC5vbmZpbmlzaCA9IHRoaXMub25DbG9zZWQuYmluZCh0aGlzKTtcblx0fVxuXG5cblx0b25PcGVuZWQgKCkge1xuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ29wZW4nLCB7fSkpO1xuXHR9XG5cblx0b25DbG9zZWQgKCkge1xuXHRcdHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuXHRcdHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuXHRcdGlmICh0aGlzLnRyaWdnZXIpIHRoaXMudHJpZ2dlci5mb2N1cygpO1xuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2Nsb3NlJywge30pKTtcblx0fVxuXG5cbn1cbiIsImltcG9ydCB1aURpYWxvZyBmcm9tICcuLi91aS1kaWFsb2cvJztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHVpTXNnQm94IGV4dGVuZHMgdWlEaWFsb2cge1xuXG5cdGNvbnN0cnVjdG9yICgpIHtcblx0XHRzdXBlcigpO1xuXG5cdH1cblxuXHRzdGF0aWMgZ2V0IGlzICgpIHsgcmV0dXJuICd1aS1tZXNzYWdlYm94JzsgfVxuXG5cblx0b25DbG9zZWQgKCkge1xuXHRcdHN1cGVyLm9uQ2xvc2VkKCk7XG5cdFx0dGhpcy5yZW1vdmUoKTtcblx0fVxuXG59XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi51aS10b2FzdC13cmFwcGVyIHtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0ei1pbmRleDogOTk7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHBhZGRpbmctdG9wOiAxMHB4O1xcblxcdGhlaWdodDogMDtcXG59XFxuXFxuXFxuLnVpLXRvYXN0IHtcXG5cXHRtaW4td2lkdGg6IDIwMHB4O1xcblxcdG1heC13aWR0aDogNTAlO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdG1hcmdpbjogNXB4IGF1dG87XFxuXFx0cGFkZGluZzogMjBweCAzMHB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRib3JkZXItcmFkaXVzOiAzMHB4O1xcblxcdGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LCAwLjgpO1xcblxcdGJveC1zaGFkb3c6IDAgMCAxcHggMCByZ2JhKDAsMCwwLCAwLjUpO1xcblxcdG9wYWNpdHk6IDE7XFxuXFxufVxcbi51aS10b2FzdDpmb2N1cyB7IGJveC1zaGFkb3c6IDAgMCA1cHggMnB4IHJnYmEoMCwwLDAsMC41KTsgb3V0bGluZTogbm9uZTsgfVxcblxcbi51aS10b2FzdCBlbSB7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRjb2xvcjogI2ZmZjtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcblxcbi51aS10b2FzdC1pbmZvIHsgYmFja2dyb3VuZDogcmdiYSgwLCAxMDAsIDUwLCAwLjgpOyB9XFxuLnVpLXRvYXN0LXdhcm5pbmcgeyBiYWNrZ3JvdW5kOiByZ2JhKDEyMCwgODYsIDAsIDAuOCk7IH1cXG4udWktdG9hc3QtZXJyb3IgeyBiYWNrZ3JvdW5kOiByZ2JhKDIwMSwgNTgsIDMxLCAwLjgpOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInVpLXRvYXN0LXdyYXBwZXJcXFwiPjwvZGl2PlxcblwiOyIsImltcG9ydCBzdHlsZSBmcm9tICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC5odG1sJztcblxuXG5jb25zdCBBTklNX0NGRyA9IHtkdXJhdGlvbjogMzAwLCBlYXNpbmc6ICdlYXNlLW91dCcsIGZpbGw6ICdmb3J3YXJkcyd9O1xuY29uc3QgVE9BU1RfVElNRU9VVCA9IDUwMDA7XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHVpVG9hc3QgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG5cblx0Y29uc3RydWN0b3IgKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLnRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblx0XHR0aGlzLnRlbXBsYXRlLmlubmVySFRNTCA9IGA8c3R5bGU+JHtzdHlsZX08L3N0eWxlPiR7dGVtcGxhdGV9YDtcblx0XHR0aGlzLnRlbXBsYXRlQ29udGVudCA9IHRoaXMudGVtcGxhdGUuY29udGVudDtcblx0fVxuXG5cdHN0YXRpYyBnZXQgaXMgKCkgeyByZXR1cm4gJ3VpLXRvYXN0JzsgfVxuXG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzICgpIHt9XG5cblx0Y29ubmVjdGVkQ2FsbGJhY2sgKCkge1xuXHRcdHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuXHRcdHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0aGlzLnRlbXBsYXRlQ29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuXHRcdHRoaXMuZWwgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLnVpLXRvYXN0LXdyYXBwZXInKTtcblx0XHR0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlkb3duLmJpbmQodGhpcyksIHRydWUpO1xuXHR9XG5cblxuXHRzaG93ICh7IG1zZyA9ICcnLCB0eXBlID0gJ2luZm8nLCBhdXRvY2xvc2UgPSB0cnVlIH0pIHtcblx0XHRpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkgdGhpcy50cmlnZ2VyID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblx0XHRjb25zdCB0b2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRvYXN0LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAwKTtcblx0XHR0b2FzdC5jbGFzc05hbWUgPSBgdWktdG9hc3QgdWktdG9hc3QtJHt0eXBlfWA7XG5cdFx0dG9hc3QuaW5uZXJIVE1MID0gbXNnO1xuXHRcdHRoaXMuZWwuYXBwZW5kQ2hpbGQodG9hc3QpO1xuXHRcdHRvYXN0LmZvY3VzKCk7XG5cblx0XHRjb25zdCBUT0FTVEggPSB0b2FzdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cdFx0Y29uc3QgcHJvcHMgPSBbXG5cdFx0XHR7b3BhY2l0eTogMCwgbWFyZ2luVG9wOiBgLSR7VE9BU1RIfXB4YCwgdHJhbnNmb3JtOiAnc2NhbGUoMC44KSd9LFxuXHRcdFx0e29wYWNpdHk6IDEsIG1hcmdpblRvcDogMCwgdHJhbnNmb3JtOiAnc2NhbGUoMSknfVxuXHRcdF07XG5cdFx0Y29uc3QgYW5pbSA9IHRvYXN0LmFuaW1hdGUocHJvcHMsIEFOSU1fQ0ZHKTtcblx0XHRpZiAoYXV0b2Nsb3NlKSB7XG5cdFx0XHRhbmltLm9uZmluaXNoID0gKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmhpZGUodG9hc3QpLCBUT0FTVF9USU1FT1VUKTtcblx0XHR9XG5cdH1cblxuXG5cdGhpZGUgKHRvYXN0KSB7XG5cdFx0Y29uc3QgVE9BU1RIID0gdG9hc3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXHRcdHRvYXN0LmNsYXNzTGlzdC5hZGQoJ3VpLXRvYXN0LWhpZGluZycpO1xuXHRcdGNvbnN0IHByb3BzID0gW1xuXHRcdFx0e29wYWNpdHk6IDEsIG1hcmdpblRvcDogMCwgdHJhbnNmb3JtOiAnc2NhbGUoMSknfSxcblx0XHRcdHtvcGFjaXR5OiAwLCBtYXJnaW5Ub3A6IGAtJHtUT0FTVEh9cHhgLCB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJ31cblx0XHRdO1xuXHRcdGNvbnN0IGFuaW0gPSB0b2FzdC5hbmltYXRlKHByb3BzLCBBTklNX0NGRyk7XG5cdFx0YW5pbS5vbmZpbmlzaCA9ICgpID0+IHRvYXN0LnJlbW92ZSgpO1xuXG5cdFx0Y29uc3QgdG9hc3RzID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCcudWktdG9hc3Q6bm90KC51aS10b2FzdC1oaWRpbmcpJyk7XG5cdFx0aWYgKHRvYXN0cy5sZW5ndGgpIHRvYXN0c1t0b2FzdHMubGVuZ3RoIC0gMV0uZm9jdXMoKTtcblx0XHRlbHNlIGlmICh0aGlzLnRyaWdnZXIpIHRoaXMudHJpZ2dlci5mb2N1cygpO1xuXHR9XG5cblxuXHRvbkNsaWNrIChlKSB7XG5cdFx0Y29uc3QgdG9hc3QgPSBlLnRhcmdldC5jbG9zZXN0KCcudWktdG9hc3QnKTtcblx0XHRpZiAodG9hc3QpIHRoaXMuaGlkZSh0b2FzdCk7XG5cdH1cblxuXG5cdG9uS2V5ZG93biAoZSkge1xuXHRcdGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcblx0XHRcdGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR0aGlzLm9uQ2xpY2soZSk7XG5cdFx0fVxuXHR9XG5cblxuXG5cbn1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnllYXItcGlja2VyIHtcXG5cXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRmb250OiBub3JtYWwgMWVtIHNhbnMtc2VyaWY7XFxuXFx0d2lkdGg6IGluaGVyaXQ7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xcbn1cXG5cXG4ueWVhci1waWNrZXIgaW5wdXQge1xcblxcdGFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG5cXHQtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHRtaW4td2lkdGg6IDNlbTtcXG5cXHRwYWRkaW5nOiAycHggMCAxcHg7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ueWVhci1waWNrZXIgLmJ0biB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwieWVhci1waWNrZXJcXFwiPlxcblxcdDxidXR0b24gY2xhc3M9XFxcImJ0biBwcmV2LXllYXJcXFwiIHRpdGxlPVxcXCJQcmV2aW91cyB5ZWFyXFxcIj7il4A8L2J1dHRvbj5cXG5cXHQ8aW5wdXQgY2xhc3M9XFxcImJ0blxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBtaW49XFxcIjIwMDBcXFwiIG1heD1cXFwiMzAwMFxcXCI+XFxuXFx0PGJ1dHRvbiBjbGFzcz1cXFwiYnRuIG5leHQteWVhclxcXCIgdGl0bGU9XFxcIk5leHQgeWVhclxcXCI+4pa2PC9idXR0b24+XFxuPC9kaXY+XCI7IiwiaW1wb3J0IHN0eWxlIGZyb20gJy4vaW5kZXguY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4Lmh0bWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB5ZWFyUGlja2VyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXG5cdGNvbnN0cnVjdG9yICgpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMudGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXHRcdHRoaXMudGVtcGxhdGUuaW5uZXJIVE1MID0gYDxzdHlsZT4ke3N0eWxlfTwvc3R5bGU+JHt0ZW1wbGF0ZX1gO1xuXHRcdHRoaXMudGVtcGxhdGVDb250ZW50ID0gdGhpcy50ZW1wbGF0ZS5jb250ZW50O1xuXHR9XG5cblx0c3RhdGljIGdldCBpcyAoKSB7IHJldHVybiAneWVhci1waWNrZXInOyB9XG5cblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMgKCkgeyByZXR1cm4gWyd2YWx1ZSddOyB9XG5cblx0Y29ubmVjdGVkQ2FsbGJhY2sgKCkge1xuXHRcdHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuXHRcdHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0aGlzLnRlbXBsYXRlQ29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuXHRcdHRoaXMuZWwgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLnllYXItcGlja2VyJyk7XG5cdFx0dGhpcy5pbnB1dEVsID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDApO1xuXG5cdFx0dGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLm9uSW5wdXQuYmluZCh0aGlzKSk7XG5cdFx0aWYgKCF0aGlzLmdldEF0dHJpYnV0ZSgndmFsdWUnKSkgdGhpcy52YWx1ZSA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcblx0fVxuXG5cdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayAobmFtZSwgb2xkVmFsLCBuZXdWYWwpIHtcblx0XHRpZiAobmFtZSA9PT0gJ3ZhbHVlJykgdGhpcy51cGRhdGUobmV3VmFsKTtcblx0fVxuXG5cblx0c2V0IHZhbHVlICh2YWwpIHsgdGhpcy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsKTsgfVxuXG5cdGdldCB2YWx1ZSAoKSB7IHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndmFsdWUnKTsgfVxuXG5cdHVwZGF0ZSAodmFsKSB7IHRoaXMuaW5wdXRFbC52YWx1ZSA9IHZhbDsgfVxuXG5cdGFkZFRvVmFsdWUgKHZhbCkge1xuXHRcdGNvbnN0IHZhbHVlID0gcGFyc2VJbnQodGhpcy52YWx1ZSwgMTApICsgdmFsO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0XHR0aGlzLmZpcmVFdmVudCgnY2hhbmdlJywgeyB2YWx1ZSB9KTtcblx0fVxuXG5cdG9uSW5wdXQgKCkge1xuXHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHBhcnNlSW50KHRoaXMudmFsdWUsIDEwKTtcblx0XHRjb25zdCB2YWx1ZSA9IHBhcnNlSW50KHRoaXMuaW5wdXRFbC52YWx1ZSwgMTApO1xuXHRcdGlmIChjdXJyZW50VmFsdWUgIT09IHZhbHVlKSB7XG5cdFx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdFx0XHR0aGlzLmZpcmVFdmVudCgnY2hhbmdlJywgeyB2YWx1ZSB9KTtcblx0XHR9XG5cdH1cblxuXHRvbkNsaWNrIChlKSB7XG5cdFx0Y29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG5cdFx0aWYgKHRhcmdldC5jbG9zZXN0KCcucHJldi15ZWFyJykpIHJldHVybiB0aGlzLmFkZFRvVmFsdWUoLTEpO1xuXHRcdGlmICh0YXJnZXQuY2xvc2VzdCgnLm5leHQteWVhcicpKSByZXR1cm4gdGhpcy5hZGRUb1ZhbHVlKDEpO1xuXHR9XG5cblx0ZmlyZUV2ZW50IChuYW1lLCBkZXRhaWwpIHtcblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KG5hbWUsIHsgZGV0YWlsIH0pKTtcblx0fVxuXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblxuXHRkb2N1bWVudDoge1xuXHRcdGNsaWNrZWQ6ICdkb2N1bWVudC1jbGlja2VkJyxcblx0XHRrZXl1cDogJ2RvY3VtZW50LWtleXVwJ1xuXHR9LFxuXG5cdHRvYXN0OiB7XG5cdFx0aW5mbzogJ3RvYXN0LWluZm8nLFxuXHRcdGVycm9yOiAndG9hc3QtZXJyb3InLFxuXHRcdHdhcm5pbmc6ICd0b2FzdC13YXJuaW5nJyxcblx0fSxcblxufTtcbiIsIlxuXG4vLyBmdW5jdGlvbiBpbml0IChjb21wb25lbnRzLCBwYXRoID0gJy4uLycpIHtcbi8vIFx0Y29tcG9uZW50cyA9IFsuLi5uZXcgU2V0KGNvbXBvbmVudHMpXTtcdC8vIHVuaXF1ZVxuLy8gXHRjb21wb25lbnRzLmZvckVhY2goYyA9PiB7XG4vLyBcdFx0Y29uc3QgbSA9IHJlcXVpcmUocGF0aCArIGMpO1xuLy8gXHRcdGlmIChtICYmIG0uaW5pdCkgbS5pbml0KCk7XG4vLyBcdH0pO1xuXG4vLyBcdHdpbmRvdy5mb2N1cygpO1xuLy8gfVxuXG5cbi8vIG1vZHVsZS5leHBvcnRzID0ge1xuXG4vLyBcdGluaXRcbi8vIH07XG4iLCJjb25zdCBFVkVOVCA9IHJlcXVpcmUoJy4vZXZlbnRzJyk7XG5jb25zdCBoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlcicpO1xuY29uc3QgJCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0JCxcblx0aGVscGVyLFxuXHRFVkVOVCxcbn07XG4iLCJjb25zdCB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbmNvbnN0IGJhc2VVcmwgPSAnJztcblxuZnVuY3Rpb24gYWpheCAob3B0aW9ucykge1xuXHRpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSBvcHRpb25zID0geyB1cmw6IG9wdGlvbnMgfTtcblxuXHRsZXQgcmVzcDtcblx0bGV0IGRhdGEgPSBvcHRpb25zLmRhdGEgfHwgJyc7XG5cdGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG5cdG9wdGlvbnMudXJsID0gYmFzZVVybCArIG9wdGlvbnMudXJsO1xuXHRvcHRpb25zLm1ldGhvZCA9IG9wdGlvbnMubWV0aG9kIHx8ICdHRVQnO1xuXHRvcHRpb25zLnR5cGUgPSBvcHRpb25zLnR5cGUgfHwgJ2pzb24nO1xuXG5cdGlmIChkYXRhKSB7XG5cdFx0aWYgKG9wdGlvbnMubWV0aG9kLnRvTG93ZXJDYXNlKCkgPT09ICdnZXQnKSBvcHRpb25zLnVybCArPSB1dGlsLnNlcmlhbGl6ZShkYXRhKTtcblx0XHRlbHNlIGlmIChvcHRpb25zLnR5cGUgPT09ICdqc29uJykgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXHR9XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0cmVxLm9wZW4ob3B0aW9ucy5tZXRob2QsIG9wdGlvbnMudXJsLCB0cnVlKTtcblx0XHRyZXEub25sb2FkID0gKCkgPT4ge1xuXHRcdFx0aWYgKHJlcS5zdGF0dXMgPj0gMjAwICYmIHJlcS5zdGF0dXMgPCA0MDApIHtcblx0XHRcdFx0dHJ5IHsgcmVzcCA9IEpTT04ucGFyc2UocmVxLnJlc3BvbnNlVGV4dCk7IH1cblx0XHRcdFx0Y2F0Y2ggKGUpIHsgcmVzcCA9IHJlcS5yZXNwb25zZVRleHQ7IH1cblx0XHRcdFx0cmVzb2x2ZShyZXNwKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgcmVqZWN0KHJlcS5zdGF0dXNUZXh0KTtcblx0XHR9O1xuXHRcdHJlcS5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHJlcS5zdGF0dXNUZXh0KTtcblx0XHRyZXEuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgYGFwcGxpY2F0aW9uLyR7b3B0aW9ucy50eXBlfTsgY2hhcnNldD1VVEYtOGApO1xuXHRcdHJlcS5zZW5kKGRhdGEpO1xuXHR9KTtcbn1cblxuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRhamF4LFxuXHRnZXQ6ICh1cmwsIGRhdGEpID0+IGFqYXgoeyB1cmwsIGRhdGE6IGRhdGEgfHwge30gfSksXG5cdHBvc3Q6ICh1cmwsIGRhdGEpID0+IGFqYXgoeyB1cmwsIGRhdGE6IGRhdGEgfHwge30sIG1ldGhvZDogJ1BPU1QnIH0pLFxuXHRwdXQ6ICh1cmwsIGRhdGEpID0+IGFqYXgoeyB1cmwsIGRhdGE6IGRhdGEgfHwge30sIG1ldGhvZDogJ1BVVCcgfSksXG5cdGRlbDogKHVybCwgZGF0YSkgPT4gYWpheCh7IHVybCwgZGF0YTogZGF0YSB8fCB7fSwgbWV0aG9kOiAnREVMRVRFJyB9KVxufTtcbiIsImNvbnN0IGtleUJyZWFrZXIgPSAvW15bXFxdXSsvZztcbmNvbnN0IG51bWJlck1hdGNoZXIgPSAvXlstK10/WzAtOV0qXFwuP1swLTldKyhbZUVdWy0rXT9bMC05XSspPyQvO1xuXG5mdW5jdGlvbiBfaXNOdW1iZXIgKHZhbHVlKSB7XG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSByZXR1cm4gdHJ1ZTtcblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuIHZhbHVlLm1hdGNoKG51bWJlck1hdGNoZXIpO1xufVxuXG5mdW5jdGlvbiBfZGVjb2RlRW50aXRpZXMgKHN0cikge1xuXHRjb25zdCBkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGQuaW5uZXJIVE1MID0gc3RyO1xuXHRyZXR1cm4gZC5pbm5lclRleHQgfHwgZC50ZXh0Q29udGVudDtcbn1cblxuZnVuY3Rpb24gX2dldElucHV0cyAoZm9ybSkge1xuXHRjb25zdCBpbnB1dHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lXScpO1xuXHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoaW5wdXRzKSB8fCBbXTtcbn1cblxuXG5cbi8qKlxuICogRm9ybSBjb21wb25lbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBlbCAtIGZvcm0gRE9NIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gRm9ybSAoZWwpIHtcblx0aWYgKCFlbCkgcmV0dXJuIG51bGw7XG5cdGlmICghKHRoaXMgaW5zdGFuY2VvZiBGb3JtKSkgcmV0dXJuIG5ldyBGb3JtKGVsKTtcblx0dGhpcy5mb3JtID0gZWw7XG5cdGlmIChlbC5lbGVtZW50cykgdGhpcy5pbnB1dHMgPSBlbC5lbGVtZW50cztcbn1cblxuRm9ybS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHBhcmFtcyA9IHt9LCBjbGVhcikge1xuXHR0aGlzLnN1c3BlbmRPYnNlcnZlID0gdHJ1ZTtcblx0aWYgKHRoaXMuYW5pbUZyYW1lKSBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1GcmFtZSk7XG5cblx0Y29uc3QgaW5wdXRzID0gX2dldElucHV0cyh0aGlzLmZvcm0pO1xuXHRmb3IgKGxldCBpbnB1dCBvZiBpbnB1dHMpIHtcblx0XHRjb25zdCBuYW1lID0gaW5wdXQubmFtZTtcblx0XHRsZXQgdmFsdWUgPSAodHlwZW9mIHBhcmFtc1tuYW1lXSA9PT0gJ3VuZGVmaW5lZCcgPyAnJyA6IHBhcmFtc1tuYW1lXSk7XG5cblx0XHQvLyBpZiBuYW1lIGlzIG9iamVjdCwgZS5nLiB1c2VyW25hbWVdLCB1c2VyRGF0YVthZGRyZXNzXVtzdHJlZXRdLCB1cGRhdGUgdmFsdWUgdG8gcmVhZCB0aGlzIGNvcnJlY3RseVxuXHRcdGlmIChuYW1lLmluZGV4T2YoJ1snKSA+IC0xKSB7XG5cdFx0XHRsZXQgdiA9IHBhcmFtcztcblx0XHRcdGxldCBuYW1lcyA9IG5hbWUucmVwbGFjZSgvW1tcXF1dL2csICd8Jykuc3BsaXQoJ3wnKTtcblx0XHRcdGZvciAobGV0IG4gb2YgbmFtZXMpIHtcblx0XHRcdFx0aWYgKHZbbl0pIHYgPSB2W25dO1xuXHRcdFx0XHRlbHNlIHsgdiA9IHVuZGVmaW5lZDsgYnJlYWs7IH1cblx0XHRcdH1cblx0XHRcdHZhbHVlID0gdjtcblx0XHR9XG5cblx0XHQvLyBpZiBjbGVhcj09dHJ1ZSBhbmQgbm8gdmFsdWUgPSBjbGVhciBmaWVsZCwgb3RoZXJ3aXNlIC0gbGVhdmUgaXQgYXMgaXQgd2FzXG5cdFx0aWYgKGNsZWFyICE9PSB0cnVlICYmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8ICFwYXJhbXNbbmFtZV0pKSBjb250aW51ZTtcblxuXHRcdC8vIGlmIG5vIHZhbHVlIC0gY2xlYXIgZmllbGRcblx0XHRpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkgdmFsdWUgPSAnJztcblxuXHRcdC8vIGRlY29kZSBodG1sIHNwZWNpYWwgY2hhcnMgKGVudGl0aWVzKVxuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluZGV4T2YoJyYnKSA+IC0xKSB2YWx1ZSA9IF9kZWNvZGVFbnRpdGllcyh2YWx1ZSk7XG5cblx0XHRpZiAoaW5wdXQudHlwZSA9PT0gJ3JhZGlvJykgaW5wdXQuY2hlY2tlZCA9IChpbnB1dC52YWx1ZS50b1N0cmluZygpID09PSB2YWx1ZS50b1N0cmluZygpKTtcblx0XHRlbHNlIGlmIChpbnB1dC50eXBlID09PSAnY2hlY2tib3gnKSBpbnB1dC5jaGVja2VkID0gdmFsdWU7XG5cdFx0ZWxzZSBpZiAoaW5wdXQudGFnTmFtZSA9PT0gJ1NFTEVDVCcpIHtcblx0XHRcdGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkgaW5wdXQuc2VsZWN0ZWRJbmRleCA9IDA7XG5cdFx0XHRlbHNlIGlucHV0LnZhbHVlID0gdmFsdWU7XG5cdFx0fVxuXHRcdGVsc2UgaW5wdXQudmFsdWUgPSB2YWx1ZTtcblx0fVxuXHR0aGlzLnN1c3BlbmRPYnNlcnZlID0gZmFsc2U7XG5cblx0cmV0dXJuIHRoaXMudXBkYXRlKCk7XG59O1xuXG5cbkZvcm0ucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChjb252ZXJ0ID0gZmFsc2UpIHtcblx0Y29uc3QgaW5wdXRzID0gX2dldElucHV0cyh0aGlzLmZvcm0pO1xuXHRsZXQgZGF0YSA9IHt9LCBjdXJyZW50O1xuXG5cdGZvciAobGV0IGlucHV0IG9mIGlucHV0cykge1xuXHRcdGxldCB0eXBlID0gaW5wdXQudHlwZSAmJiBpbnB1dC50eXBlLnRvTG93ZXJDYXNlKCksIHZhbHVlLCBwYXJ0cywgbGFzdFBhcnQsIGxhc3Q7XG5cblx0XHQvLyBpZiB3ZSBhcmUgc3VibWl0IG9yIGRpc2FibGVkIC0gaWdub3JlXG5cdFx0aWYgKCh0eXBlID09PSAnc3VibWl0JykgfHwgIWlucHV0Lm5hbWUgfHwgaW5wdXQuZGlzYWJsZWQpIGNvbnRpbnVlO1xuXG5cdFx0dmFsdWUgPSBpbnB1dC52YWx1ZTtcblx0XHRwYXJ0cyA9IGlucHV0Lm5hbWUubWF0Y2goa2V5QnJlYWtlcik7XG5cblx0XHQvLyByZXR1cm4gb25seSBcImNoZWNrZWRcIiByYWRpbyB2YWx1ZVxuXHRcdGlmICh0eXBlID09PSAncmFkaW8nICYmICFpbnB1dC5jaGVja2VkKSBjb250aW51ZTtcblxuXHRcdC8vIGNvbnZlcnQgY2hla2JveCB0byBbdHJ1ZSB8IGZhbHNlXVxuXHRcdGlmICh0eXBlID09PSAnY2hlY2tib3gnKSB2YWx1ZSA9IGlucHV0LmNoZWNrZWQ7XG5cblx0XHRpZiAoY29udmVydCkge1xuXHRcdFx0aWYgKF9pc051bWJlcih2YWx1ZSkpIHtcblx0XHRcdFx0bGV0IHR2ID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cdFx0XHRcdGxldCBjbXAgPSB0diArICcnO1xuXHRcdFx0XHQvLyBjb252ZXJ0IChzdHJpbmcpMTAwLjAwIHRvIChpbnQpMTAwXG5cdFx0XHRcdGlmICh2YWx1ZS5pbmRleE9mKCcuJykgPiAwKSBjbXAgPSB0di50b0ZpeGVkKHZhbHVlLnNwbGl0KCcuJylbMV0ubGVuZ3RoKTtcblx0XHRcdFx0aWYgKGNtcCA9PT0gdmFsdWUpIHZhbHVlID0gdHY7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICh2YWx1ZSA9PT0gJ3RydWUnKSB2YWx1ZSA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh2YWx1ZSA9PT0gJ2ZhbHNlJykgdmFsdWUgPSBmYWxzZTtcblx0XHRcdGlmICh2YWx1ZSA9PT0gJycpIHZhbHVlID0gbnVsbDtcblx0XHR9XG5cblx0XHRjdXJyZW50ID0gZGF0YTtcblx0XHQvLyBnbyB0aHJvdWdoIGFuZCBjcmVhdGUgbmVzdGVkIG9iamVjdHNcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aCAtIDE7IGkrKykge1xuXHRcdFx0Y3VycmVudFtwYXJ0c1tpXV0gPSBjdXJyZW50W3BhcnRzW2ldXSB8fCB7fTtcblx0XHRcdGN1cnJlbnQgPSBjdXJyZW50W3BhcnRzW2ldXTtcblx0XHR9XG5cdFx0bGFzdFBhcnQgPSBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXTtcblxuXHRcdC8vIG5vdyB3ZSBhcmUgb24gdGhlIGxhc3QgcGFydCwgc2V0IHRoZSB2YWx1ZVxuXHRcdGxhc3QgPSBjdXJyZW50W2xhc3RQYXJ0XTtcblx0XHRpZiAobGFzdCkge1xuXHRcdFx0aWYgKCFBcnJheS5pc0FycmF5KGxhc3QpKSBjdXJyZW50W2xhc3RQYXJ0XSA9IChsYXN0ID09PSB1bmRlZmluZWQgPyBbXSA6IFtsYXN0XSk7XG5cdFx0XHRjdXJyZW50W2xhc3RQYXJ0XS5wdXNoKHZhbHVlKTtcblx0XHR9XG5cdFx0ZWxzZSBjdXJyZW50W2xhc3RQYXJ0XSA9IHZhbHVlO1xuXHR9XG5cblx0cmV0dXJuIGRhdGE7XG59O1xuXG5Gb3JtLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHsgdGhpcy5zZXQoe30pOyB9O1xuXG5Gb3JtLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHsgdGhpcy5zZXQoe30sIHRydWUpOyB9O1xuXG5cbkZvcm0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKHRoaXMuYW5pbUZyYW1lKSBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1GcmFtZSk7XG5cdGlmICghdGhpcy5vYnNlcnZlQ2IpIHJldHVybjtcblx0aWYgKHRoaXMuc3VzcGVuZE9ic2VydmUpIHJldHVybjtcblx0Zm9yIChsZXQgZmllbGQgb2YgdGhpcy5mb3JtLmVsZW1lbnRzKSB7XG5cdFx0bGV0IGZuYW1lID0gZmllbGQubmFtZS5yZXBsYWNlKC9bW1xcXV0vZywgJ18nKSArICd2YWwnLFxuXHRcdFx0b3YgPSB0aGlzLmZvcm0uZGF0YXNldFtmbmFtZV0sXG5cdFx0XHR2ID0gZmllbGQudmFsdWU7XG5cdFx0aWYgKGZuYW1lID09PSAndmFsJykgY29udGludWU7XG5cdFx0aWYgKGZpZWxkLnR5cGUgPT09ICdjaGVja2JveCcpIHtcblx0XHRcdHYgPSBmaWVsZC5jaGVja2VkO1xuXHRcdFx0b3YgPSAob3YgPT09ICd0cnVlJyk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09ICdyYWRpbycgJiYgIWZpZWxkLmNoZWNrZWQpIGNvbnRpbnVlO1xuXHRcdGlmICh0eXBlb2Ygb3YgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB2ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0aWYgKGZpZWxkLnR5cGUgPT09ICdyYWRpbycpIHRoaXMub2JzZXJ2ZUNiKHYsIG92LCBmaWVsZCk7XG5cdFx0XHRvdiA9IHRoaXMuZm9ybS5kYXRhc2V0W2ZuYW1lXSA9IHY7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKG92ICE9PSB2KSB7XG5cdFx0XHR0aGlzLmZvcm0uZGF0YXNldFtmbmFtZV0gPSB2O1xuXHRcdFx0dGhpcy5vYnNlcnZlQ2Iodiwgb3YsIGZpZWxkKTtcblx0XHR9XG5cdH1cblxuXHR0aGlzLmFuaW1GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcbn07XG5Gb3JtLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKGNiKSB7IHRoaXMudXBkYXRlKHRoaXMub2JzZXJ2ZUNiID0gY2IpOyB9O1xuRm9ybS5wcm90b3R5cGUub2JzZXJ2ZVN0b3AgPSBmdW5jdGlvbiAoKSB7IHRoaXMub2JzZXJ2ZUNiID0gbnVsbDsgfTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gRm9ybTtcbiIsImNvbnN0IGxvbmdDbGljayA9IHJlcXVpcmUoJy4vbG9uZy1jbGljaycpO1xuY29uc3Qgc2l6emxlID0gcmVxdWlyZSgnLi9zaXp6bGUnKTtcbmNvbnN0IGFqYXggPSByZXF1aXJlKCcuL2FqYXgnKTtcbmNvbnN0IGZvcm0gPSByZXF1aXJlKCcuL2Zvcm0nKTtcbmNvbnN0IHB1YnN1YiA9IHJlcXVpcmUoJy4vcHVic3ViJyk7XG5jb25zdCBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5jb25zdCB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbmxldCBhbGwgPSB7IGFqYXgsIGZvcm0gfTtcbk9iamVjdC5hc3NpZ24oYWxsLCBhamF4LCBwdWJzdWIsIGtleXMsIHV0aWwpO1xuZm9yIChsZXQgcHJvcCBpbiBhbGwpIHNpenpsZVtwcm9wXSA9IGFsbFtwcm9wXTtcblxuXG5sb25nQ2xpY2suaW5pdCgpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gc2l6emxlO1xuIiwiY29uc3Qga2V5cyA9IHtcblx0XHRBOiA2NSxcblx0XHRYOiA4OCxcblx0XHRDOiA2Nyxcblx0XHREOiA2OCxcblx0XHRWOiA4Nixcblx0XHRaOiA5MCxcblxuXHRcdEYxOiAxMTIsXG5cdFx0RjI6IDExMyxcblx0XHRGNTogMTE2LFxuXHRcdFRBQjogOSxcblx0XHRFU0M6IDI3LFxuXG5cdFx0QkNLU1BDOiA4LFxuXHRcdEJBQ0tTUEFDRTogOCxcblx0XHRFTlRFUjogMTMsXG5cdFx0U1BBQ0U6IDMyLFxuXHRcdFBHVVA6IDMzLFxuXHRcdFBHRE9XTjogMzQsXG5cdFx0RU5EOiAzNSxcblx0XHRIT01FOiAzNixcblx0XHRMRUZUOiAzNyxcblx0XHRVUDogMzgsXG5cdFx0UklHSFQ6IDM5LFxuXHRcdERPV046IDQwLFxuXHRcdElOUzogNDUsXG5cdFx0REVMOiA0Nixcblx0XHRNSU5VUzogMTczLFxuXHRcdFBMVVM6IDYxLFxuXHRcdERPVDogMTkwLFxuXHRcdFNMQVNIOiAxOTEsXG5cblx0XHRNQUNNSU5VUzogMTg5LFxuXHRcdE1BQ1BMVVM6IDE4NyxcblxuXHRcdE5VTVNUQVI6IDEwNixcblx0XHROVU1NSU5VUzogMTA5LFxuXHRcdE5VTVBMVVM6IDEwNyxcblx0XHROVU1ET1Q6IDExMCxcblx0XHROVU1TTEFTSDogMTExXG5cdH0sXG5cdGRpZ2l0cyA9IHtcblx0XHQ0ODogMSxcdFx0Ly8gMFxuXHRcdDQ5OiAxLFx0XHQvLyAxXG5cdFx0NTA6IDEsXHRcdC8vIDJcblx0XHQ1MTogMSxcdFx0Ly8gM1xuXHRcdDUyOiAxLFx0XHQvLyA0XG5cdFx0NTM6IDEsXHRcdC8vIDVcblx0XHQ1NDogMSxcdFx0Ly8gNlxuXHRcdDU1OiAxLFx0XHQvLyA3XG5cdFx0NTY6IDEsXHRcdC8vIDhcblx0XHQ1NzogMSxcdFx0Ly8gOVxuXHRcdDk2OiAxLFx0XHQvLyBudW1wYWQgMFxuXHRcdDk3OiAxLFx0XHQvLyBudW1wYWQgMVxuXHRcdDk4OiAxLFx0XHQvLyBudW1wYWQgMlxuXHRcdDk5OiAxLFx0XHQvLyBudW1wYWQgM1xuXHRcdDEwMDogMSxcdFx0Ly8gbnVtcGFkIDRcblx0XHQxMDE6IDEsXHRcdC8vIG51bXBhZCA1XG5cdFx0MTAyOiAxLFx0XHQvLyBudW1wYWQgNlxuXHRcdDEwMzogMSxcdFx0Ly8gbnVtcGFkIDdcblx0XHQxMDQ6IDEsXHRcdC8vIG51bXBhZCA4XG5cdFx0MTA1OiAxXHRcdC8vIG51bXBhZCA5XG5cdH0sXG5cdGFsbG93ZWRDaGFycyA9IHtcblx0XHQ4OiAxLFx0XHQvLyBiYWNrc3BhY2Vcblx0XHQ5OiAxLFx0XHQvLyB0YWJcblx0XHQ0NjogMSxcdFx0Ly8gZGVsXG5cdFx0MzU6IDEsXHRcdC8vIGVuZFxuXHRcdDM2OiAxLFx0XHQvLyBob21lXG5cdFx0Mzc6IDEsXHRcdC8vIGxlZnRcblx0XHQzOTogMVx0XHQvLyByaWdodFxuXHR9O1xuXG4vLyBtYXRoIG9wZXJhdG9yczogKyAtICogLyAoICkgLlxuZnVuY3Rpb24gaXNNYXRoIChlKSB7XG5cdGNvbnN0IGsgPSBlLmtleUNvZGU7XG5cdGlmIChrID09PSBrZXlzLlNQQUNFKSByZXR1cm4gdHJ1ZTtcblx0aWYgKGsgPT09IGtleXMuTlVNRE9UIHx8IChrID09PSBrZXlzLkRPVCAmJiAhZS5zaGlmdEtleSkpIHJldHVybiB0cnVlO1xuXHRpZiAoayA9PT0ga2V5cy5OVU1NSU5VUyB8fCAoayA9PT0ga2V5cy5NSU5VUyAmJiAhZS5zaGlmdEtleSkpIHJldHVybiB0cnVlO1xuXHRpZiAoayA9PT0ga2V5cy5OVU1QTFVTIHx8IChrID09PSBrZXlzLlBMVVMgJiYgZS5zaGlmdEtleSkpIHJldHVybiB0cnVlO1xuXHRpZiAoayA9PT0ga2V5cy5OVU1TTEFTSCB8fCAoayA9PT0ga2V5cy5TTEFTSCAmJiAhZS5zaGlmdEtleSkpIHJldHVybiB0cnVlO1xuXHRpZiAoayA9PT0ga2V5cy5NQUNNSU5VUyAmJiAhZS5zaGlmdEtleSkgcmV0dXJuIHRydWU7XG5cdGlmIChrID09PSBrZXlzLk1BQ1BMVVMgJiYgZS5zaGlmdEtleSkgcmV0dXJuIHRydWU7XG5cblx0aWYgKGUuc2hpZnRLZXkpIHtcblx0XHRpZiAoayA9PT0gNTYgfHwgayA9PT0gNTcgfHwgayA9PT0gNDgpIHJldHVybiB0cnVlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn1cblxuLy8gZGlnaXRzICsgbmF2aWdhdGlvbiArIGNvcHkvY3V0L3Bhc3RlICsgbWF0aCBvcGVyYXRvcnNcbmZ1bmN0aW9uIGlzQ3V0Q29weVBhc3RlIChlKSB7XG5cdGNvbnN0IGsgPSBlLmtleUNvZGU7XG5cdGNvbnN0IGN0cmxPckNtZCA9IGUgJiYgKGUuY3RybEtleSA9PT0gdHJ1ZSB8fCBlLm1ldGFLZXkgPT09IHRydWUpO1xuXHRyZXR1cm4gY3RybE9yQ21kICYmIChrID09PSBrZXlzLlggfHwgayA9PT0ga2V5cy5DIHx8IGsgPT09IGtleXMuVik7XG59XG5cbi8vIGEgLSB6XG5mdW5jdGlvbiBpc0FscGhhIChlKSB7IHJldHVybiAoZS5rZXlDb2RlID49IDY1ICYmIGUua2V5Q29kZSA8PSA5MCAmJiAhZS5jdHJsS2V5ICYmICFlLm1ldGFLZXkpOyB9XG5cbmZ1bmN0aW9uIGlzRGlnaXQgKGUpIHsgcmV0dXJuIGRpZ2l0c1tlLmtleUNvZGVdID09PSAxICYmICFlLnNoaWZ0S2V5OyB9XG5cbmZ1bmN0aW9uIGlzQWxwaGFOdW1lcmljIChlKSB7IHJldHVybiBpc0FscGhhKGUpIHx8IGlzRGlnaXQoZSk7IH1cblxuZnVuY3Rpb24gaXNOYXZDaGFyIChlKSB7IHJldHVybiBhbGxvd2VkQ2hhcnNbZS5rZXlDb2RlXSA9PT0gMTsgfVxuXG5mdW5jdGlvbiBpc051bWJlckZpZWxkIChlKSB7XG5cdGNvbnN0IGlzRW50ZXIgPSAoZS5rZXlDb2RlID09PSAxMyk7XG5cdHJldHVybiBpc0RpZ2l0KGUpIHx8IGlzTmF2Q2hhcihlKSB8fCBpc0N1dENvcHlQYXN0ZShlKSB8fCBpc0VudGVyO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRrZXlzLFxuXHRpc05hdkNoYXIsXG5cdGlzQ3V0Q29weVBhc3RlLFxuXHRpc0RpZ2l0LFxuXHRpc0FscGhhLFxuXHRpc01hdGgsXG5cdGlzQWxwaGFOdW1lcmljLFxuXHRpc051bWJlckZpZWxkLFxufTtcbiIsImNvbnN0IERFTEFZID0gMTAwMDtccmNvbnN0IEVWRU5UX05BTUUgPSAnbG9uZ2NsaWNrJztcclxybGV0IHRpbWVyID0gbnVsbDtccmxldCBpc1JlYWR5ID0gZmFsc2U7XHJccmNvbnN0IHJlc2V0ID0gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxyZnVuY3Rpb24gZmlyZUV2ZW50IChlKSB7XHJcdGUudGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEVWRU5UX05BTUUsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9KSk7XHJcdHJlc2V0KCk7XHJ9XHJccmZ1bmN0aW9uIGluaXQgKCkge1xyXHRpZiAoaXNSZWFkeSkgcmV0dXJuO1xyXHQvLyBwYXRjaCBDdXN0b21FdmVudCB0byBhbGxvdyBjb25zdHJ1Y3RvciBjcmVhdGlvbiAoSUUvQ2hyb21lKVxyXHQvLyAtIHJlc29sdmVkIG9uY2UgaW5pdEN1c3RvbUV2ZW50IG5vIGxvbmdlciBleGlzdHNcclx0aWYgKCdpbml0Q3VzdG9tRXZlbnQnIGluIGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpKSB7XHJcdFx0d2luZG93LkN1c3RvbUV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50LCBwYXJhbXMpIHtcclx0XHRcdHBhcmFtcyA9IHBhcmFtcyB8fCB7IGJ1YmJsZXM6IGZhbHNlLCBjYW5jZWxhYmxlOiBmYWxzZSwgZGV0YWlsOiB1bmRlZmluZWQgfTtcclx0XHRcdGNvbnN0IGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xyXHRcdFx0ZXZ0LmluaXRDdXN0b21FdmVudChldmVudCwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsKTtcclx0XHRcdHJldHVybiBldnQ7XHJcdFx0fTtcclx0XHR3aW5kb3cuQ3VzdG9tRXZlbnQucHJvdG90eXBlID0gd2luZG93LkV2ZW50LnByb3RvdHlwZTtcclx0fVxyXHJcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCByZXNldCk7XHJcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgcmVzZXQpO1xyXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCByZXNldCk7XHJcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4ge1xyXHRcdHRpbWVyID0gc2V0VGltZW91dChmaXJlRXZlbnQuYmluZChlLCBlKSwgREVMQVkpO1xyXHR9KTtcclx0aXNSZWFkeSA9IHRydWU7XHJ9XHJcclxybW9kdWxlLmV4cG9ydHMgPSB7XHJcdGluaXRccn07XHIiLCJjb25zdCBfY2FjaGUgPSB7fTtcblxuZnVuY3Rpb24gdHJpZ2dlciAodG9waWMsIC4uLmFyZ3MpIHtcblx0aWYgKCFfY2FjaGVbdG9waWNdKSByZXR1cm47XG5cdF9jYWNoZVt0b3BpY10uZm9yRWFjaChjYiA9PiB7XG5cdFx0aWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IuYXBwbHkoY2IsIGFyZ3MpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gb24gKHRvcGljLCBjYWxsYmFjaykge1xuXHRpZiAoIV9jYWNoZVt0b3BpY10pIF9jYWNoZVt0b3BpY10gPSBbXTtcblx0X2NhY2hlW3RvcGljXS5wdXNoKGNhbGxiYWNrKTtcblx0cmV0dXJuIFt0b3BpYywgY2FsbGJhY2tdOyAgICAgICAvLyBoYW5kbGUgZm9yIG9mZlxufVxuXG5mdW5jdGlvbiBvZmYgKGhhbmRsZSkge1xuXHRsZXQgW3RvcGljLCBjYl0gPSBoYW5kbGUsIGNhID0gX2NhY2hlW3RvcGljXTtcblx0Y2IgPSBjYi50b1N0cmluZygpO1xuXHRpZiAoIWNhKSByZXR1cm47XG5cblx0Y2EuZm9yRWFjaCgoZm4sIGkpID0+IHtcblx0XHRpZiAoZm4udG9TdHJpbmcoKSA9PT0gY2IpIGNhLnNwbGljZShpLCAxKTtcblx0fSk7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7IG9uLCBvZmYsIHRyaWdnZXIgfTtcbiIsIi8vIGNvbnN0IFZlbG9jaXR5ID0gcmVxdWlyZSgndmVsb2NpdHktYW5pbWF0ZScpO1xuXG5jb25zdCB0eXBlID0gb2JqID0+IG9iaiA/IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopLnNsaWNlKDgsIC0xKS50b0xvd2VyQ2FzZSgpIDogJ3VuZGVmaW5lZCc7XG5jb25zdCBpc05vZGVMaXN0ID0gbm9kZXMgPT4gKHR5cGVvZiBub2RlcyA9PT0gJ29iamVjdCcpICYmXG5cdFx0L14oaHRtbGNvbGxlY3Rpb258bm9kZWxpc3R8b2JqZWN0KSQvLnRlc3QodHlwZShub2RlcykpICYmXG5cdFx0KG5vZGVzLmxlbmd0aCA9PT0gMCB8fCAodHlwZW9mIG5vZGVzWzBdID09PSAnb2JqZWN0JyAmJiBub2Rlc1swXS5ub2RlVHlwZSA+IDApKTtcblxuXG5mdW5jdGlvbiBzaXp6bGUgKG1peGVkLCBjb250ZXh0KSB7XG5cdGlmICghbWl4ZWQpIHJldHVybiBbXTtcblx0bGV0IGVsO1xuXHRpZiAodHlwZW9mIG1peGVkICE9PSAnc3RyaW5nJykgZWwgPSBtaXhlZDtcblxuXHQvLyBpcyBodG1sIC0gY3JlYXRlIG5ldyBlbGVtZW50XG5cdGVsc2UgaWYgKC88W2Etel1bXFxzXFxTXSo+L2kudGVzdChtaXhlZCkpIHtcblx0XHRlbCA9IChuZXcgRE9NUGFyc2VyKCkpLnBhcnNlRnJvbVN0cmluZyhtaXhlZCwgJ3RleHQvaHRtbCcpLmJvZHkuZmlyc3RDaGlsZDtcblx0fVxuXHQvLyBpcyBzZWxlY3RvciAtIGZpbmQgZWxlbWVudFxuXHRlbHNlIGVsID0gKGNvbnRleHQgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwobWl4ZWQpO1xuXG5cdGlmIChlbC5ub2RlVHlwZSkgZWwgPSBbZWxdO1xuXHRlbHNlIGlmIChpc05vZGVMaXN0KGVsKSkgZWwgPSBBcnJheS5mcm9tKGVsKTtcblxuXHRyZXR1cm4gT2JqZWN0LmFzc2lnbihlbCB8fCBbXSwgc2l6emxlLmZuKTtcbn1cblxuXG5zaXp6bGUuZm4gPSB7fTtcbnNpenpsZS5mbi5maW5kID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7IHJldHVybiBzaXp6bGUoc2VsZWN0b3IsIHRoaXNbMF0pOyB9O1xuc2l6emxlLmZuLmZpcnN0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc2l6emxlKHRoaXNbMF0pOyB9O1xuc2l6emxlLmZuLmxhc3QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzaXp6bGUodGhpc1t0aGlzLmxlbmd0aCAtIDFdKTsgfTtcbnNpenpsZS5mbi5lcSA9IGZ1bmN0aW9uIChpZHgpIHsgcmV0dXJuIHNpenpsZSh0aGlzW2lkeCB8fCAwXSk7IH07XG5cblxuc2l6emxlLmZuLmFwcGVuZFRvID0gZnVuY3Rpb24gKHBhcmVudCkge1xuXHRpZiAoIXRoaXMgfHwgIXRoaXMubGVuZ3RoKSByZXR1cm4gdGhpcztcblx0aWYgKHR5cGVvZiBwYXJlbnQgPT09ICdzdHJpbmcnKSBwYXJlbnQgPSBzaXp6bGUocGFyZW50KTtcblx0ZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkocGFyZW50KSkgcGFyZW50ID0gW3BhcmVudF07XG5cdHBhcmVudFswXS5hcHBlbmRDaGlsZCh0aGlzWzBdKTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG5zaXp6bGUuZm4uYXBwZW5kID0gZnVuY3Rpb24gKGNoaWxkKSB7XG5cdGlmICghdGhpcyB8fCAhdGhpcy5sZW5ndGgpIHJldHVybiB0aGlzO1xuXHRpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykgY2hpbGQgPSBzaXp6bGUoY2hpbGQpO1xuXHR0aGlzWzBdLmFwcGVuZENoaWxkKGNoaWxkWzBdKTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG5zaXp6bGUuZm4ub24gPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBjYikge1xuXHRpZiAoIXRoaXMgfHwgIXRoaXMubGVuZ3RoKSByZXR1cm4gdGhpcztcblx0dGhpcy5mb3JFYWNoKGVsID0+IHtcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2IpO1xuXHR9KTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG5zaXp6bGUuZm4ub2ZmID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgY2IpIHtcblx0aWYgKCF0aGlzIHx8ICF0aGlzLmxlbmd0aCkgcmV0dXJuIHRoaXM7XG5cdHRoaXMuZm9yRWFjaChlbCA9PiB7XG5cdFx0ZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNiKTtcblx0fSk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuc2l6emxlLmZuLmlzID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG5cdGlmICghdGhpcyB8fCAhdGhpcy5sZW5ndGgpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuIHRoaXNbMF0ubWF0Y2hlcyhzZWxlY3Rvcik7XG59O1xuXG5zaXp6bGUuZm4uY2xvc2VzdCA9IGZ1bmN0aW9uIChjbHMpIHtcblx0aWYgKCF0aGlzIHx8ICF0aGlzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXHRyZXR1cm4gc2l6emxlKHRoaXNbMF0uY2xvc2VzdChjbHMpKTtcbn07XG5cbi8qKlxuICogTW9kaWZ5IGVsZW1lbnQgY2xhc3MgbGlzdFxuICogQHBhcmFtICB7YXJyYXl9IGVsICAgICAgICBhcnJheSBvZiBlbGVtZW50c1xuICogQHBhcmFtICB7c3RyaW5nfSBhY3Rpb24gICBhZGQsIHJlbW92ZSBvciB0b2dnbGVcbiAqIEBwYXJhbSAge3N0cmluZ30gY2xzICAgICAgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2YgY2xhc3NlcyB0byBhZGQvcmVtb3ZlL3RvZ2dsZVxuICogQHBhcmFtICB7Ym9vbGVhbn0gY29uZCAgICBbb3B0aW9uYWxdIHRydWUgb3IgZmFsc2UgZm9yIHRvZ2dsZVxuICogQHJldHVybiB7YXJyYXl9ICAgICAgICAgICBzYW1lIGFycmF5IG9mIGVsZW1lbnRzXG4gKi9cbmZ1bmN0aW9uIG1vZEVsQ2xzIChlbCwgYWN0aW9uLCBjbHMsIGNvbmQpIHtcblx0aWYgKCFlbCB8fCAhZWwubGVuZ3RoKSByZXR1cm4gZWw7XG5cdGNscyA9ICgnJyArIGNscykuc3BsaXQoJyAnKTtcblx0aWYgKHR5cGVvZiBjb25kID09PSAnYm9vbGVhbicpIHtcblx0XHRlbC5mb3JFYWNoKGUgPT4gY2xzLmZvckVhY2goYyA9PiBlLmNsYXNzTGlzdFthY3Rpb25dKGMsIGNvbmQpKSk7XG5cdH1cblx0ZWxzZSBlbC5mb3JFYWNoKGUgPT4gY2xzLmZvckVhY2goYyA9PiBlLmNsYXNzTGlzdFthY3Rpb25dKGMpKSk7XG5cdHJldHVybiBlbDtcbn1cblxuc2l6emxlLmZuLmFkZENsYXNzID0gZnVuY3Rpb24gKGNscykgeyByZXR1cm4gbW9kRWxDbHModGhpcywgJ2FkZCcsIGNscyk7IH07XG5zaXp6bGUuZm4ucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiAoY2xzKSB7IHJldHVybiBtb2RFbENscyh0aGlzLCAncmVtb3ZlJywgY2xzKTsgfTtcbnNpenpsZS5mbi50b2dnbGVDbGFzcyA9IGZ1bmN0aW9uIChjbHMsIGNvbmQpIHsgcmV0dXJuIG1vZEVsQ2xzKHRoaXMsICd0b2dnbGUnLCBjbHMsIGNvbmQpOyB9O1xuc2l6emxlLmZuLmhhc0NsYXNzID0gZnVuY3Rpb24gKGNscykge1xuXHRpZiAoIXRoaXMgfHwgIXRoaXMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cdHJldHVybiB0aGlzWzBdLmNsYXNzTGlzdC5jb250YWlucyhjbHMpO1xufTtcblxuc2l6emxlLmZuLnRvZ2dsZSA9IGZ1bmN0aW9uIChjb25kKSB7XG5cdHJldHVybiBjb25kID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcbn07XG5cbnNpenpsZS5mbi5oaWRlID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLmZvckVhY2goZWwgPT4geyBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9KTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG5zaXp6bGUuZm4uc2hvdyA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5mb3JFYWNoKGVsID0+IHsgZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7IH0pO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbnNpenpsZS5mbi5odG1sID0gZnVuY3Rpb24gKGh0bWwpIHtcblx0aWYgKCF0aGlzIHx8ICF0aGlzLmxlbmd0aCkgcmV0dXJuIHRoaXM7XG5cdGlmICh0eXBlb2YgaHRtbCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiB0aGlzWzBdLmlubmVySFRNTDtcblx0dGhpcy5mb3JFYWNoKGVsID0+IHsgZWwuaW5uZXJIVE1MID0gaHRtbDsgfSk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuc2l6emxlLmZuLnRleHQgPSBmdW5jdGlvbiAodGV4dCkge1xuXHRpZiAoIXRoaXMgfHwgIXRoaXMubGVuZ3RoKSByZXR1cm4gdGhpcztcblx0aWYgKHR5cGVvZiB0ZXh0ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIHRoaXNbMF0uaW5uZXJUZXh0O1xuXHR0aGlzLmZvckVhY2goZWwgPT4geyBlbC5pbm5lclRleHQgPSB0ZXh0OyB9KTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG5zaXp6bGUuZm4ucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRpZiAoIXRoaXMgfHwgIXRoaXMubGVuZ3RoKSByZXR1cm4gdGhpcztcblx0dGhpcy5mb3JFYWNoKGVsID0+IGVsLnJlbW92ZSgpKTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG5zaXp6bGUuZm4uZGF0YSA9IGZ1bmN0aW9uIChrZXkpIHtcblx0aWYgKCF0aGlzIHx8ICF0aGlzLmxlbmd0aCkgcmV0dXJuIHRoaXM7XG5cdGlmICghdGhpc1swXS5kYXRhc2V0KSByZXR1cm4gbnVsbDtcblx0aWYgKGtleSkgcmV0dXJuIHRoaXNbMF0uZGF0YXNldFtrZXldO1xuXHRyZXR1cm4gdGhpc1swXS5kYXRhc2V0O1xufTtcblxuXG5zaXp6bGUuZm4uYXR0ciA9IGZ1bmN0aW9uIChhdHRyLCB2YWx1ZSkge1xuXHRpZiAoIXRoaXMgfHwgIXRoaXMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gdGhpc1swXS5nZXRBdHRyaWJ1dGUoYXR0cik7XG5cdHRoaXMuZm9yRWFjaChlbCA9PiB7IGVsLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSk7IH0pO1xufTtcblxuXG5mdW5jdGlvbiBhbmltYXRlRWxlbWVudCAoZnJvbSwgdG8sIG9wdHMpIHtcblx0cmV0dXJuIGVsID0+IG5ldyBQcm9taXNlIChyZXNvbHZlID0+IHtcblx0XHRjb25zdCBhbmltID0gZWwuYW5pbWF0ZShbZnJvbSwgdG9dLCBvcHRzKTtcblx0XHRhbmltLm9uY2FuY2VsID0gcmVzb2x2ZTtcblx0XHRhbmltLm9uZmluaXNoID0gcmVzb2x2ZTtcblx0fSk7XG59XG5cbnNpenpsZS5mbi5hbmltYXRlID0gZnVuY3Rpb24gKGZyb20sIHRvLCBvcHRpb25zID0ge30pIHtcblx0Y29uc3QgZGZsdCA9IHtkdXJhdGlvbjogMzAwLCBlYXNpbmc6ICdlYXNlLW91dCcsIGZpbGw6ICdmb3J3YXJkcyd9O1xuXHRjb25zdCBvcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgZGZsdCwgb3B0aW9ucyk7XG5cdGNvbnN0IGFsbCA9IHRoaXMubWFwKGFuaW1hdGVFbGVtZW50KGZyb20sIHRvLCBvcHRzKSk7XG5cdHJldHVybiBQcm9taXNlLmFsbChhbGwpO1xufTtcblxuXG4vLyBzaXp6bGUuZm4uYW5pbWF0ZSA9IGZ1bmN0aW9uIChmcm9tLCB0bywgb3B0aW9ucyA9IHt9KSB7XG4vLyBcdGNvbnN0IG9wdHMgPSBPYmplY3QuYXNzaWduKHt9LCB7ZHVyYXRpb246IDMwMCwgZWFzaW5nOiAnZWFzZS1vdXQnfSwgb3B0aW9ucyk7XG4vLyBcdGNvbnN0IGZyb21UbyA9IHt9O1xuLy8gXHRmb3IgKGxldCBrZXkgaW4gZnJvbSkgZnJvbVRvW2tleV0gPSBbIHRvW2tleV0sIGZyb21ba2V5XSBdO1xuLy8gXHRyZXR1cm4gVmVsb2NpdHkodGhpcywgZnJvbVRvLCBvcHRzKTtcbi8vIH07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBzaXp6bGU7XG4iLCJjb25zdCB0eXBlID0gb2JqID0+IG9iaiA/IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopLnNsaWNlKDgsIC0xKS50b0xvd2VyQ2FzZSgpIDogJ3VuZGVmaW5lZCc7XG5cbmNvbnN0IHRyaW0gPSAoc3RyLCBjaGFycyA9ICdcXFxccycpID0+ICgnJyArIHN0cikucmVwbGFjZShuZXcgUmVnRXhwKGAoXiR7Y2hhcnN9Kyl8KCR7Y2hhcnN9KyQpYCwgJ2cnKSwgJycpO1xuY29uc3QgbHRyaW0gPSAoc3RyLCBjaGFycyA9ICdcXFxccycpID0+ICgnJyArIHN0cikucmVwbGFjZShuZXcgUmVnRXhwKGBeJHtjaGFyc30rYCksICcnKTtcbmNvbnN0IHJ0cmltID0gKHN0ciwgY2hhcnMgPSAnXFxcXHMnKSA9PiAoJycgKyBzdHIpLnJlcGxhY2UobmV3IFJlZ0V4cChgJHtjaGFyc30rJGApLCAnJyk7XG5cbmNvbnN0IHJhbmQgPSAobWF4LCBtaW4gPSAwKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xuXG5jb25zdCB1Y2ZpcnN0ID0gKHMpID0+ICgnJyArIHMpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxiKFthLXpdKS9naSwgYyA9PiBjLnRvVXBwZXJDYXNlKCkpO1xuXG5cbmZ1bmN0aW9uIGlzTnVtYmVyICh2KSB7XG5cdGlmICh0eXBlb2YgdiA9PT0gJ251bWJlcicpIHJldHVybiB0cnVlO1xuXHRpZiAodHlwZW9mIHYgIT09ICdzdHJpbmcnKSByZXR1cm4gZmFsc2U7XG5cdHJldHVybiAoL15bLStdP1swLTldKlxcLj9bMC05XSsoW2VFXVstK10/WzAtOV0rKT8kLykudGVzdCh2KTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0TnVtYmVyIChudW0pIHtcblx0bnVtID0gTWF0aC5yb3VuZCgwICsgbnVtICogMTAwKSAvIDEwMDtcblx0cmV0dXJuIG51bS50b0xvY2FsZVN0cmluZygnZW4tR0InLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiB9KTtcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplIChvYmopIHtcblx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cdGlmICgha2V5cyB8fCAha2V5cy5sZW5ndGgpIHJldHVybiAnJztcblx0cmV0dXJuICc/JyArIGtleXMucmVkdWNlKChhLCBrKSA9PiB7XG5cdFx0YS5wdXNoKGsgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tdKSk7XG5cdFx0cmV0dXJuIGE7XG5cdH0sIFtdKS5qb2luKCcmJyk7XG59XG5cbmZ1bmN0aW9uIHZhclRvUmVhbFR5cGUgKHYpIHtcblx0aWYgKGlzTnVtYmVyKHYpKSB7XG5cdFx0bGV0IG9yaWdpbmFsdiA9IHY7XG5cdFx0diA9IHBhcnNlRmxvYXQoJycgKyB2KTtcblx0XHRpZiAoKCcnICsgdikgIT09IG9yaWdpbmFsdikgdiA9IG9yaWdpbmFsdjtcblx0fVxuXHRlbHNlIGlmICh2ID09PSAndHJ1ZScpIHYgPSB0cnVlO1xuXHRlbHNlIGlmICh2ID09PSAnZmFsc2UnKSB2ID0gZmFsc2U7XG5cdGlmICh2ID09PSAnJykgdiA9IHVuZGVmaW5lZDtcblx0aWYgKHR5cGUodikgPT09ICdhcnJheScpIHYgPSB2Lm1hcCh2YWwgPT4gdmFyVG9SZWFsVHlwZSh2YWwpKTtcblx0cmV0dXJuIHY7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0RW1wdHkgKHgpIHtcblx0aWYgKCF4IHx8IHR5cGVvZiB4ICE9PSAnb2JqZWN0JykgcmV0dXJuIHRydWU7XG5cdHJldHVybiBPYmplY3Qua2V5cyh4KS5sZW5ndGggPT09IDA7XG59XG5cbmZ1bmN0aW9uIHNhbml0aXplICh2KSB7XG5cdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuXHRkaXYuaW5uZXJIVE1MID0gdiB8fCAnJztcblx0cmV0dXJuIGRpdi50ZXh0Q29udGVudCB8fCBkaXYuaW5uZXJUZXh0IHx8ICcnO1xufVxuXG5cbmZ1bmN0aW9uIGZ1enp5IChoYXksIHMpIHtcblx0cyA9ICgnJyArIHMpLnRvTG93ZXJDYXNlKCk7XG5cdGhheSA9ICgnJyArIGhheSkudG9Mb3dlckNhc2UoKTtcblx0bGV0IG4gPSAtMTtcblx0Zm9yIChsZXQgbCBvZiBzKSBpZiAoIX4obiA9IGhheS5pbmRleE9mKGwsIG4gKyAxKSkpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuIHRydWU7XG59XG5cblxuZnVuY3Rpb24gcGFyc2VVcmwgKHVybCkge1xuXHRsZXQgdXJsdDtcblx0dHJ5IHsgdXJsdCA9IG5ldyBVUkwodXJsKTsgfVxuXHRjYXRjaCAoZSkgeyB1cmx0ID0gbnVsbDsgfVxuXHRyZXR1cm4gdXJsdDtcbn1cblxuXG5mdW5jdGlvbiBwcmV0dHlEYXRlICh0aW1lKSB7XG5cdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgodGltZSB8fCAnJykucmVwbGFjZSgvLS9nLCAnLycpLnJlcGxhY2UoL1tUWl0vZywgJyAnKSk7XG5cdGNvbnN0IGRpZmYgPSAoKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLSBkYXRlLmdldFRpbWUoKSkgLyAxMDAwKTtcblx0Y29uc3QgZGF5X2RpZmYgPSBNYXRoLmZsb29yKGRpZmYgLyA4NjQwMCk7XG5cdGlmIChpc05hTihkYXlfZGlmZikgfHwgZGF5X2RpZmYgPCAwIHx8IGRheV9kaWZmID49IDMxKSByZXR1cm4gZGF0ZS50b0xvY2FsZVN0cmluZygpO1xuXHRyZXR1cm4gZGF5X2RpZmYgPT09IDAgJiYgKFxuXHRcdGRpZmYgPCA2MCAmJiAnanVzdCBub3cnIHx8XG5cdFx0ZGlmZiA8IDEyMCAmJiAnMSBtaW51dGUgYWdvJyB8fFxuXHRcdGRpZmYgPCAzNjAwICYmIE1hdGguZmxvb3IoZGlmZiAvIDYwKSArICcgbWludXRlcyBhZ28nIHx8XG5cdFx0ZGlmZiA8IDcyMDAgJiYgJzEgaG91ciBhZ28nIHx8XG5cdFx0ZGlmZiA8IDg2NDAwICYmIE1hdGguZmxvb3IoZGlmZiAvIDM2MDApICsgJyBob3VycyBhZ28nXG5cdCkgfHxcblx0XHRkYXlfZGlmZiA9PT0gMSAmJiAnWWVzdGVyZGF5JyB8fFxuXHRcdGRheV9kaWZmIDwgNyAmJiBkYXlfZGlmZiArICcgZGF5cyBhZ28nIHx8XG5cdFx0ZGF5X2RpZmYgPCAzMSAmJiBNYXRoLmNlaWwoZGF5X2RpZmYgLyA3KSArICcgd2Vla3MgYWdvJztcbn1cblxuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRmdXp6eSxcblx0bHRyaW0sXG5cdHJ0cmltLFxuXHR0cmltLFxuXHR1Y2ZpcnN0LFxuXHR0eXBlLFxuXHRyYW5kLFxuXHRpc051bWJlcixcblx0Zm9ybWF0TnVtYmVyLFxuXHR2YXJUb1JlYWxUeXBlLFxuXHRpc09iamVjdEVtcHR5LFxuXHRzYW5pdGl6ZSxcblx0c2VyaWFsaXplLFxuXHRwYXJzZVVybCxcblx0bW9udGhzOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG5cdHByZXR0eURhdGUsXG59O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwicmVxdWlyZSgnLi9pbmRleC5jc3MnKTtcblxuXG5cbmNvbnN0IGNvbXBvbmVudHMgPSBbXG5cdCdjb21wb25lbnRzL2NhbGVuZGFyJyxcblx0J2NvbXBvbmVudHMveWVhci1waWNrZXInLFxuXHQnY29tcG9uZW50cy9tb250aC1waWNrZXInLFxuXHQnY2F0ZWdvcmllcycsXG5dO1xuXG5cbmNvbXBvbmVudHMuZm9yRWFjaChuID0+IHtcblx0Y29uc3QgYyA9IHJlcXVpcmUoYC4vJHtufS9gKS5kZWZhdWx0O1xuXHRpZiAoYy5pcykgY3VzdG9tRWxlbWVudHMuZGVmaW5lKGMuaXMsIGMpO1xuXHRlbHNlIGMuaW5pdCgpO1xufSk7XG5cblxuZnVuY3Rpb24gaW5pdCAoKSB7XG5cdGNvbnNvbGUubG9nKCdyZWFkeSEnKTtcbn1cblxuXG5pZiAod2luZG93LldlYkNvbXBvbmVudHMucmVhZHkpIGluaXQoKTtcbmVsc2Ugd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ1dlYkNvbXBvbmVudHNSZWFkeScsIGluaXQpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjY2FsZW5kYXIge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR3aWR0aDogMjYwcHg7XFxuXFx0bGVmdDogMDtcXG5cXHR0b3A6IDA7XFxuXFx0Ym90dG9tOiAwO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG5cXHRmb250LXNpemU6IDEycHg7XFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI2NhdGVnb3JpZXMge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR3aWR0aDogMjYwcHg7XFxuXFx0bGVmdDogMjYwcHg7XFxuXFx0dG9wOiAzNHB4O1xcblxcdGJvdHRvbTogMDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5IHsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOyBoZWlnaHQ6IDEwMCU7IG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG5ib2R5IHsgYm94LXNpemluZzogYm9yZGVyLWJveDsgYmFja2dyb3VuZDogIzY2NjtcXG5cXHRmb250OiBub3JtYWwgMWVtIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkgKiB7IGJveC1zaXppbmc6IGluaGVyaXQ7IH1cXG5cXG5cXG5oZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0aGVpZ2h0OiAzMnB4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICM0NDQ7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0NDQ7XFxufVxcbmhlYWRlciBtb250aC1waWNrZXIgeyBoZWlnaHQ6IDEwMCU7IGZsZXg6IDE7IG1hcmdpbi1yaWdodDogMXB4OyB9XFxuaGVhZGVyIHllYXItcGlja2VyIHsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwcHg7IH1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5idXR0b24ge1xcblxcdHBhZGRpbmc6IDEwcHggMjBweDtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXHRiYWNrZ3JvdW5kOiAjZGRkO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdG1hcmdpbi1ib3R0b206IDFweDtcXG59XFxuXFxuYnV0dG9uW291dGxpbmVdIHsgYmFja2dyb3VuZDogbm9uZTsgfVxcblxcbmJ1dHRvbjpmb2N1cyxcXG5idXR0b246aG92ZXIgeyBiYWNrZ3JvdW5kOiAjYmJiOyB9XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuXFx0YmFja2dyb3VuZDogI2FhYTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcXG5cXHRtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=