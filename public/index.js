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
/******/ 	__webpack_require__.p = "./public/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export blankObject */
/* unused harmony export destroy */
/* unused harmony export destroyDev */
/* unused harmony export _differs */
/* unused harmony export _differsImmutable */
/* unused harmony export dispatchObservers */
/* unused harmony export fire */
/* unused harmony export get */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return init; });
/* unused harmony export observe */
/* unused harmony export observeDev */
/* unused harmony export on */
/* unused harmony export onDev */
/* unused harmony export run */
/* unused harmony export set */
/* unused harmony export _set */
/* unused harmony export setDev */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return callAll; });
/* unused harmony export _mount */
/* unused harmony export _unmount */
/* unused harmony export isPromise */
/* unused harmony export PENDING */
/* unused harmony export SUCCESS */
/* unused harmony export FAILURE */
/* unused harmony export removeFromStore */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return proto; });
/* unused harmony export protoDev */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appendNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return insertNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return detachNode; });
/* unused harmony export detachBetween */
/* unused harmony export detachBefore */
/* unused harmony export detachAfter */
/* unused harmony export reinsertBetween */
/* unused harmony export reinsertChildren */
/* unused harmony export reinsertAfter */
/* unused harmony export reinsertBefore */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return destroyEach; });
/* unused harmony export createFragment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return createElement; });
/* unused harmony export createSvgElement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return createText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return removeListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return setAttribute; });
/* unused harmony export setAttributes */
/* unused harmony export removeAttribute */
/* unused harmony export setXlinkAttribute */
/* unused harmony export getBindingGroupValue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return toNumber; });
/* unused harmony export timeRangesToArray */
/* unused harmony export children */
/* unused harmony export claimElement */
/* unused harmony export claimText */
/* unused harmony export setInputType */
/* unused harmony export setStyle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return selectOption; });
/* unused harmony export selectOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return selectValue; });
/* unused harmony export selectMultipleValue */
/* unused harmony export destroyBlock */
/* unused harmony export outroAndDestroyBlock */
/* unused harmony export updateKeyedEach */
/* unused harmony export getSpreadUpdate */
/* unused harmony export linear */
/* unused harmony export generateRule */
/* unused harmony export hash */
/* unused harmony export wrapTransition */
/* unused harmony export transitionManager */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return assign; });
function noop() {}

function assign(tar, src) {
	for (var k in src) tar[k] = src[k];
	return tar;
}

function appendNode(node, target) {
	target.appendChild(node);
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function detachBetween(before, after) {
	while (before.nextSibling && before.nextSibling !== after) {
		before.parentNode.removeChild(before.nextSibling);
	}
}

function detachBefore(after) {
	while (after.previousSibling) {
		after.parentNode.removeChild(after.previousSibling);
	}
}

function detachAfter(before) {
	while (before.nextSibling) {
		before.parentNode.removeChild(before.nextSibling);
	}
}

function reinsertBetween(before, after, target) {
	while (before.nextSibling && before.nextSibling !== after) {
		target.appendChild(before.parentNode.removeChild(before.nextSibling));
	}
}

function reinsertChildren(parent, target) {
	while (parent.firstChild) target.appendChild(parent.firstChild);
}

function reinsertAfter(before, target) {
	while (before.nextSibling) target.appendChild(before.nextSibling);
}

function reinsertBefore(after, target) {
	var parent = after.parentNode;
	while (parent.firstChild !== after) target.appendChild(parent.firstChild);
}

function destroyEach(iterations) {
	for (var i = 0; i < iterations.length; i += 1) {
		if (iterations[i]) iterations[i].d();
	}
}

function createFragment() {
	return document.createDocumentFragment();
}

function createElement(name) {
	return document.createElement(name);
}

function createSvgElement(name) {
	return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function createText(data) {
	return document.createTextNode(data);
}

function createComment() {
	return document.createComment('');
}

function addListener(node, event, handler) {
	node.addEventListener(event, handler, false);
}

function removeListener(node, event, handler) {
	node.removeEventListener(event, handler, false);
}

function setAttribute(node, attribute, value) {
	node.setAttribute(attribute, value);
}

function setAttributes(node, attributes) {
	for (var key in attributes) {
		if (key in node) {
			node[key] = attributes[key];
		} else {
			if (attributes[key] === undefined) removeAttribute(node, key);
			else setAttribute(node, key, attributes[key]);
		}
	}
}

function removeAttribute(node, attribute) {
	node.removeAttribute(attribute);
}

function setXlinkAttribute(node, attribute, value) {
	node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}

function getBindingGroupValue(group) {
	var value = [];
	for (var i = 0; i < group.length; i += 1) {
		if (group[i].checked) value.push(group[i].__value);
	}
	return value;
}

function toNumber(value) {
	return value === '' ? undefined : +value;
}

function timeRangesToArray(ranges) {
	var array = [];
	for (var i = 0; i < ranges.length; i += 1) {
		array.push({ start: ranges.start(i), end: ranges.end(i) });
	}
	return array;
}

function children (element) {
	return Array.from(element.childNodes);
}

function claimElement (nodes, name, attributes, svg) {
	for (var i = 0; i < nodes.length; i += 1) {
		var node = nodes[i];
		if (node.nodeName === name) {
			for (var j = 0; j < node.attributes.length; j += 1) {
				var attribute = node.attributes[j];
				if (!attributes[attribute.name]) node.removeAttribute(attribute.name);
			}
			return nodes.splice(i, 1)[0]; // TODO strip unwanted attributes
		}
	}

	return svg ? createSvgElement(name) : createElement(name);
}

function claimText (nodes, data) {
	for (var i = 0; i < nodes.length; i += 1) {
		var node = nodes[i];
		if (node.nodeType === 3) {
			node.data = data;
			return nodes.splice(i, 1)[0];
		}
	}

	return createText(data);
}

function setInputType(input, type) {
	try {
		input.type = type;
	} catch (e) {}
}

function setStyle(node, key, value) {
	node.style.setProperty(key, value);
}

function selectOption(select, value) {
	for (var i = 0; i < select.options.length; i += 1) {
		var option = select.options[i];

		if (option.__value === value) {
			option.selected = true;
			return;
		}
	}
}

function selectOptions(select, value) {
	for (var i = 0; i < select.options.length; i += 1) {
		var option = select.options[i];
		option.selected = ~value.indexOf(option.__value);
	}
}

function selectValue(select) {
	var selectedOption = select.querySelector(':checked') || select.options[0];
	return selectedOption && selectedOption.__value;
}

function selectMultipleValue(select) {
	return [].map.call(select.querySelectorAll(':checked'), function(option) {
		return option.__value;
	});
}

function destroyBlock(block, lookup) {
	block.u();
	block.d();
	lookup[block.key] = null;
}

function outroAndDestroyBlock(block, lookup) {
	block.o(function() {
		destroyBlock(block, lookup);
	});
}

function updateKeyedEach(old_blocks, component, changed, key_prop, dynamic, list, lookup, node, has_outro, create_each_block, intro_method, next, get_context) {
	var o = old_blocks.length;
	var n = list.length;

	var i = o;
	var old_indexes = {};
	while (i--) old_indexes[old_blocks[i].key] = i;

	var new_blocks = [];
	var new_lookup = {};
	var deltas = {};

	var i = n;
	while (i--) {
		var key = list[i][key_prop];
		var block = lookup[key];

		if (!block) {
			block = create_each_block(component, key, get_context(i));
			block.c();
		} else if (dynamic) {
			block.p(changed, get_context(i));
		}

		new_blocks[i] = new_lookup[key] = block;

		if (key in old_indexes) deltas[key] = Math.abs(i - old_indexes[key]);
	}

	var will_move = {};
	var did_move = {};

	var destroy = has_outro ? outroAndDestroyBlock : destroyBlock;

	function insert(block) {
		block[intro_method](node, next);
		lookup[block.key] = block;
		next = block.first;
		n--;
	}

	while (o && n) {
		var new_block = new_blocks[n - 1];
		var old_block = old_blocks[o - 1];
		var new_key = new_block.key;
		var old_key = old_block.key;

		if (new_block === old_block) {
			// do nothing
			next = new_block.first;
			o--;
			n--;
		}

		else if (!new_lookup[old_key]) {
			// remove old block
			destroy(old_block, lookup);
			o--;
		}

		else if (!lookup[new_key] || will_move[new_key]) {
			insert(new_block);
		}

		else if (did_move[old_key]) {
			o--;

		} else if (deltas[new_key] > deltas[old_key]) {
			did_move[new_key] = true;
			insert(new_block);

		} else {
			will_move[old_key] = true;
			o--;
		}
	}

	while (o--) {
		var old_block = old_blocks[o];
		if (!new_lookup[old_block.key]) destroy(old_block, lookup);
	}

	while (n) insert(new_blocks[n - 1]);

	return new_blocks;
}

function getSpreadUpdate(levels, updates) {
	var update = {};

	var to_null_out = {};
	var accounted_for = {};

	var i = levels.length;
	while (i--) {
		var o = levels[i];
		var n = updates[i];

		if (n) {
			for (var key in o) {
				if (!(key in n)) to_null_out[key] = 1;
			}

			for (var key in n) {
				if (!accounted_for[key]) {
					update[key] = n[key];
					accounted_for[key] = 1;
				}
			}

			levels[i] = n;
		} else {
			for (var key in o) {
				accounted_for[key] = 1;
			}
		}
	}

	for (var key in to_null_out) {
		if (!(key in update)) update[key] = undefined;
	}

	return update;
}

function linear(t) {
	return t;
}

function generateRule(
	a,
	b,
	delta,
	duration,
	ease,
	fn
) {
	var keyframes = '{\n';

	for (var p = 0; p <= 1; p += 16.666 / duration) {
		var t = a + delta * ease(p);
		keyframes += p * 100 + '%{' + fn(t) + '}\n';
	}

	return keyframes + '100% {' + fn(b) + '}\n}';
}

// https://github.com/darkskyapp/string-hash/blob/master/index.js
function hash(str) {
	var hash = 5381;
	var i = str.length;

	while (i--) hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
	return hash >>> 0;
}

function wrapTransition(component, node, fn, params, intro, outgroup) {
	var obj = fn(node, params);
	var duration = obj.duration || 300;
	var ease = obj.easing || linear;
	var cssText;

	// TODO share <style> tag between all transitions?
	if (obj.css && !transitionManager.stylesheet) {
		var style = createElement('style');
		document.head.appendChild(style);
		transitionManager.stylesheet = style.sheet;
	}

	if (intro) {
		if (obj.css && obj.delay) {
			cssText = node.style.cssText;
			node.style.cssText += obj.css(0);
		}

		if (obj.tick) obj.tick(0);
	}

	return {
		t: intro ? 0 : 1,
		running: false,
		program: null,
		pending: null,
		run: function(intro, callback) {
			var program = {
				start: window.performance.now() + (obj.delay || 0),
				intro: intro,
				callback: callback
			};

			if (obj.delay) {
				this.pending = program;
			} else {
				this.start(program);
			}

			if (!this.running) {
				this.running = true;
				transitionManager.add(this);
			}
		},
		start: function(program) {
			component.fire(program.intro ? 'intro.start' : 'outro.start', { node: node });

			program.a = this.t;
			program.b = program.intro ? 1 : 0;
			program.delta = program.b - program.a;
			program.duration = duration * Math.abs(program.b - program.a);
			program.end = program.start + program.duration;

			if (obj.css) {
				if (obj.delay) node.style.cssText = cssText;

				program.rule = generateRule(
					program.a,
					program.b,
					program.delta,
					program.duration,
					ease,
					obj.css
				);

				transitionManager.addRule(program.rule, program.name = '__svelte_' + hash(program.rule));

				node.style.animation = (node.style.animation || '')
					.split(', ')
					.filter(function(anim) {
						// when introing, discard old animations if there are any
						return anim && (program.delta < 0 || !/__svelte/.test(anim));
					})
					.concat(program.name + ' ' + program.duration + 'ms linear 1 forwards')
					.join(', ');
			}

			this.program = program;
			this.pending = null;
		},
		update: function(now) {
			var program = this.program;
			if (!program) return;

			var p = now - program.start;
			this.t = program.a + program.delta * ease(p / program.duration);
			if (obj.tick) obj.tick(this.t);
		},
		done: function() {
			var program = this.program;
			this.t = program.b;
			if (obj.tick) obj.tick(this.t);
			if (obj.css) transitionManager.deleteRule(node, program.name);
			program.callback();
			program = null;
			this.running = !!this.pending;
		},
		abort: function() {
			if (obj.tick) obj.tick(1);
			if (obj.css) transitionManager.deleteRule(node, this.program.name);
			this.program = this.pending = null;
			this.running = false;
		}
	};
}

var transitionManager = {
	running: false,
	transitions: [],
	bound: null,
	stylesheet: null,
	activeRules: {},

	add: function(transition) {
		this.transitions.push(transition);

		if (!this.running) {
			this.running = true;
			requestAnimationFrame(this.bound || (this.bound = this.next.bind(this)));
		}
	},

	addRule: function(rule, name) {
		if (!this.activeRules[name]) {
			this.activeRules[name] = true;
			this.stylesheet.insertRule('@keyframes ' + name + ' ' + rule, this.stylesheet.cssRules.length);
		}
	},

	next: function() {
		this.running = false;

		var now = window.performance.now();
		var i = this.transitions.length;

		while (i--) {
			var transition = this.transitions[i];

			if (transition.program && now >= transition.program.end) {
				transition.done();
			}

			if (transition.pending && now >= transition.pending.start) {
				transition.start(transition.pending);
			}

			if (transition.running) {
				transition.update(now);
				this.running = true;
			} else if (!transition.pending) {
				this.transitions.splice(i, 1);
			}
		}

		if (this.running) {
			requestAnimationFrame(this.bound);
		} else if (this.stylesheet) {
			var i = this.stylesheet.cssRules.length;
			while (i--) this.stylesheet.deleteRule(i);
			this.activeRules = {};
		}
	},

	deleteRule: function(node, name) {
		node.style.animation = node.style.animation
			.split(', ')
			.filter(function(anim) {
				return anim.indexOf(name) === -1;
			})
			.join(', ');
	}
};

function blankObject() {
	return Object.create(null);
}

function destroy(detach) {
	this.destroy = noop;
	this.fire('destroy');
	this.set = this.get = noop;

	if (detach !== false) this._fragment.u();
	this._fragment.d();
	this._fragment = this._state = null;
}

function destroyDev(detach) {
	destroy.call(this, detach);
	this.destroy = function() {
		console.warn('Component was already destroyed');
	};
}

function _differs(a, b) {
	return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}

function _differsImmutable(a, b) {
	return a != a ? b == b : a !== b;
}

function dispatchObservers(component, group, changed, newState, oldState) {
	for (var key in group) {
		if (!changed[key]) continue;

		var newValue = newState[key];
		var oldValue = oldState[key];

		var callbacks = group[key];
		if (!callbacks) continue;

		for (var i = 0; i < callbacks.length; i += 1) {
			var callback = callbacks[i];
			if (callback.__calling) continue;

			callback.__calling = true;
			callback.call(component, newValue, oldValue);
			callback.__calling = false;
		}
	}
}

function fire(eventName, data) {
	var handlers =
		eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		handlers[i].call(this, data);
	}
}

function get(key) {
	return key ? this._state[key] : this._state;
}

function init(component, options) {
	component._observers = { pre: blankObject(), post: blankObject() };
	component._handlers = blankObject();
	component._bind = options._bind;

	component.options = options;
	component.root = options.root || component;
	component.store = component.root.store || options.store;
}

function observe(key, callback, options) {
	var group = options && options.defer
		? this._observers.post
		: this._observers.pre;

	(group[key] || (group[key] = [])).push(callback);

	if (!options || options.init !== false) {
		callback.__calling = true;
		callback.call(this, this._state[key]);
		callback.__calling = false;
	}

	return {
		cancel: function() {
			var index = group[key].indexOf(callback);
			if (~index) group[key].splice(index, 1);
		}
	};
}

function observeDev(key, callback, options) {
	var c = (key = '' + key).search(/[.[]/);
	if (c > -1) {
		var message =
			'The first argument to component.observe(...) must be the name of a top-level property';
		if (c > 0)
			message += ", i.e. '" + key.slice(0, c) + "' rather than '" + key + "'";

		throw new Error(message);
	}

	return observe.call(this, key, callback, options);
}

function on(eventName, handler) {
	if (eventName === 'teardown') return this.on('destroy', handler);

	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
}

function onDev(eventName, handler) {
	if (eventName === 'teardown') {
		console.warn(
			"Use component.on('destroy', ...) instead of component.on('teardown', ...) which has been deprecated and will be unsupported in Svelte 2"
		);
		return this.on('destroy', handler);
	}

	return on.call(this, eventName, handler);
}

function run(fn) {
	fn();
}

function set(newState) {
	this._set(assign({}, newState));
	if (this.root._lock) return;
	this.root._lock = true;
	callAll(this.root._beforecreate);
	callAll(this.root._oncreate);
	callAll(this.root._aftercreate);
	this.root._lock = false;
}

function _set(newState) {
	var oldState = this._state,
		changed = {},
		dirty = false;

	for (var key in newState) {
		if (this._differs(newState[key], oldState[key])) changed[key] = dirty = true;
	}
	if (!dirty) return;

	this._state = assign(assign({}, oldState), newState);
	this._recompute(changed, this._state);
	if (this._bind) this._bind(changed, this._state);

	if (this._fragment) {
		dispatchObservers(this, this._observers.pre, changed, this._state, oldState);
		this._fragment.p(changed, this._state);
		dispatchObservers(this, this._observers.post, changed, this._state, oldState);
	}
}

function setDev(newState) {
	if (typeof newState !== 'object') {
		throw new Error(
			this._debugName + '.set was called without an object of data key-values to update.'
		);
	}

	this._checkReadOnly(newState);
	set.call(this, newState);
}

function callAll(fns) {
	while (fns && fns.length) fns.shift()();
}

function _mount(target, anchor) {
	this._fragment[this._fragment.i ? 'i' : 'm'](target, anchor || null);
}

function _unmount() {
	if (this._fragment) this._fragment.u();
}

function isPromise(value) {
	return value && typeof value.then === 'function';
}

var PENDING = {};
var SUCCESS = {};
var FAILURE = {};

function removeFromStore() {
	this.store._remove(this);
}

var proto = {
	destroy: destroy,
	get: get,
	fire: fire,
	observe: observe,
	on: on,
	set: set,
	teardown: destroy,
	_recompute: noop,
	_set: _set,
	_mount: _mount,
	_unmount: _unmount,
	_differs: _differs
};

var protoDev = {
	destroy: destroyDev,
	get: get,
	fire: fire,
	observe: observeDev,
	on: onDev,
	set: setDev,
	teardown: destroyDev,
	_recompute: noop,
	_set: _set,
	_mount: _mount,
	_unmount: _unmount,
	_differs: _differs
};




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(2);


new __WEBPACK_IMPORTED_MODULE_0__app__["a" /* default */]({ target: document.querySelector('#app') });

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__year_month_picker__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__table__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data__ = __webpack_require__(7);
/* client/app/index.html generated by Svelte v1.60.2 */






function data() { return {}; };

var methods = {
	loadTable (date) {
		if (!date) date = this.lastDate;
		else this.lastDate = date;
		__WEBPACK_IMPORTED_MODULE_4__data__["b" /* Expenses */].get(date).then(data => {
			this.lastTableData = data;
			this.refs.table.set({ data });
		});
	},

	onDateChange (date) { this.refs.form.set({ date: date.dateStr }); },

	onFormChange (data) {
		console.log('form changed', data);
	},

	onFormSubmit (data) {
		__WEBPACK_IMPORTED_MODULE_4__data__["b" /* Expenses */].save(data).then(() => {
			this.loadTable();
		});
	},

	onRemoveItem (item) {
		console.log(item);
	},

	onFormError (err) {
		console.log(err);	// TODO: toast?
	},

	onTableClick (item) { this.refs.form.edit(item); },
};

function oncreate() {
	const date = new Date().toISOString().substr(0, 7);
	__WEBPACK_IMPORTED_MODULE_4__data__["a" /* Categories */].get().then(categories => this.refs.form.set({ date, categories }));
	this.loadTable(date);

	this.refs.form.on('change', this.onFormChange.bind(this));
	this.refs.form.on('remove', this.onRemoveItem.bind(this));
	this.refs.form.on('submit', this.onFormSubmit.bind(this));
	this.refs.form.on('error', this.onFormError.bind(this));
	this.refs.picker.on('change', this.onDateChange.bind(this));
	this.refs.table.on('click', this.onTableClick.bind(this));
};

function create_main_fragment(component, state) {
	var div, text, text_2;

	var yearmonthpicker = new __WEBPACK_IMPORTED_MODULE_1__year_month_picker__["a" /* default */]({
		root: component.root
	});

	component.refs.picker = yearmonthpicker;

	var form = new __WEBPACK_IMPORTED_MODULE_2__form__["a" /* default */]({
		root: component.root
	});

	component.refs.form = form;

	var table = new __WEBPACK_IMPORTED_MODULE_3__table__["a" /* default */]({
		root: component.root
	});

	component.refs.table = table;

	return {
		c: function create() {
			div = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("div");
			yearmonthpicker._fragment.c();
			text = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t");
			form._fragment.c();
			text_2 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n");
			table._fragment.c();
			this.h();
		},

		h: function hydrate() {
			div.className = "form-box";
		},

		m: function mount(target, anchor) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["k" /* insertNode */])(div, target, anchor);
			yearmonthpicker._mount(div, null);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text, div);
			form._mount(div, null);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["k" /* insertNode */])(text_2, target, anchor);
			table._mount(target, anchor);
		},

		p: __WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["l" /* noop */],

		u: function unmount() {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["i" /* detachNode */])(div);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["i" /* detachNode */])(text_2);
			table._unmount();
		},

		d: function destroy() {
			yearmonthpicker.destroy(false);
			if (component.refs.picker === yearmonthpicker) component.refs.picker = null;
			form.destroy(false);
			if (component.refs.form === form) component.refs.form = null;
			table.destroy(false);
			if (component.refs.table === table) component.refs.table = null;
		}
	};
}

function Index(options) {
	Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["j" /* init */])(this, options);
	this.refs = {};
	this._state = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(data(), options.data);

	var _oncreate = oncreate.bind(this);

	if (!options.root) {
		this._oncreate = [];
		this._beforecreate = [];
		this._aftercreate = [];
	}

	this._fragment = create_main_fragment(this, this._state);

	this.root._oncreate.push(_oncreate);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		this._lock = true;
		Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["d" /* callAll */])(this._beforecreate);
		Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["d" /* callAll */])(this._oncreate);
		Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["d" /* callAll */])(this._aftercreate);
		this._lock = false;
	}
}

Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(Index.prototype, methods), __WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["m" /* proto */]);
/* harmony default export */ __webpack_exports__["a"] = (Index);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__ = __webpack_require__(0);
/* client/year-month-picker/index.html generated by Svelte v1.60.2 */


function zeroState () {
	const d = new Date();
	const month = d.getMonth();
	const year = d.getFullYear();
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	return { months, month, year, current: { month, year } };
}

function isToday(month, year, current) {
	return month === current.month && year === current.year;
}

function dateStr(month, year) {
	return `${year}-${('0' + (month + 1)).substr(-2)}`;
}

function data() { return zeroState(); };

var methods = {
	onwheel (e) {
		const threshold = 2;
		let val = null;
		if (e.deltaY < -threshold) val = -1;
		else if (e.deltaY > threshold) val = 1;
		if (val) this.wheelThrottle(val, false);
	},

	wheelThrottle (value) {
		if (!this.throttler) {
			this.go(value);
			this.notify();
			this.throttler = setTimeout(() => (this.throttler = null), 100);
		}
	},

	keyup (key) {
		this.keyIsDown = false;
		if (this.ticker) clearTimeout(this.ticker);
		if (key === ' ' || key === 'Enter' ||
			key === 'ArrowLeft' || key === 'ArrowRight' ||
			key === 'ArrowDown' || key === 'ArrowUp') this.notify();
	},

	keydown (key, value) {
		if (this.keyIsDown) return;
		if (key === 'ArrowLeft' || key === 'ArrowDown') {
			this.refs.leftButton.focus();
			this.keyIsDown = true;
			return this.tick(-1);
		}
		if (key === 'ArrowRight' || key === 'ArrowUp') {
			this.refs.rightButton.focus();
			this.keyIsDown = true;
			return this.tick(1);
		}
		if (key === ' ' || key === 'Enter') {
			this.keyIsDown = true;
			this.tick(value);
		}
	},

	mup () {
		if (this.ticker) clearTimeout(this.ticker);
		if (this.mouseIsDown) this.notify();
		this.mouseIsDown = false;
	},

	tick (value, delay = 300) {
		if (this.ticker) clearTimeout(this.ticker);
		this.go(value);
		if (this.get('isToday')) return this.notify();
		this.mouseIsDown = true;
		this.ticker = setTimeout(() => {
			delay = Math.max(60, delay - 40);
			this.tick(value, delay);
		}, delay);
	},

	go (value) {
		let {month, year} = this.get();
		month += value;
		if (month < 0) { month = 11; year -= 1; }
		else if (month > 11) { month = 0; year += 1; }
		this.set({ month, year });
	},

	notify () {
		const {month, year, dateStr} = this.get();
		this.fire('change', { month, year, dateStr });
	},

	reset () {
		this.set(zeroState());
		this.notify();
	}
};

function create_main_fragment(component, state) {
	var div, button, text, span, text_1_value = state.months[state.month], text_1, text_2, text_3, text_4, button_1, text_5, button_2, div_class_value;

	function keydown_handler(event) {
		component.keydown(event.key, -1);
	}

	function keyup_handler(event) {
		component.keyup(event.key);
	}

	function mousedown_handler(event) {
		component.tick(-1);
	}

	function mouseout_handler(event) {
		component.mup();
	}

	function mouseup_handler(event) {
		component.mup();
	}

	function keydown_handler_1(event) {
		component.keydown(event.key, 1);
	}

	function keyup_handler_1(event) {
		component.keyup(event.key);
	}

	function mousedown_handler_1(event) {
		component.tick(1);
	}

	function mouseout_handler_1(event) {
		component.mup();
	}

	function mouseup_handler_1(event) {
		component.mup();
	}

	function click_handler(event) {
		component.reset();
	}

	function wheel_handler(event) {
		component.onwheel(event);
	}

	return {
		c: function create() {
			div = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("div");
			button = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("button");
			button.innerHTML = "<i class=\"ion-ios-arrow-back\"></i>";
			text = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\n\t");
			span = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("span");
			text_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])(text_1_value);
			text_2 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])(" ");
			text_3 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])(state.year);
			text_4 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\n\t");
			button_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("button");
			button_1.innerHTML = "<i class=\"ion-ios-arrow-forward\"></i>";
			text_5 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\n\t");
			button_2 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("button");
			button_2.innerHTML = "<i class=\"ion-md-undo\"></i>";
			this.h();
		},

		h: function hydrate() {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(button, "keydown", keydown_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(button, "keyup", keyup_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(button, "mousedown", mousedown_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(button, "mouseout", mouseout_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(button, "mouseup", mouseup_handler);
			button.className = "btn-prev";
			button.title = "Previous month";
			span.className = "day";
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(button_1, "keydown", keydown_handler_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(button_1, "keyup", keyup_handler_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(button_1, "mousedown", mousedown_handler_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(button_1, "mouseout", mouseout_handler_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(button_1, "mouseup", mouseup_handler_1);
			button_1.className = "btn-next";
			button_1.title = "Next month";
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(button_2, "click", click_handler);
			button_2.title = "Today";
			button_2.className = "btn-today";
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(div, "wheel", wheel_handler);
			div.className = div_class_value = "year-month-picker " + (state.isToday ? 'is-today': '');
		},

		m: function mount(target, anchor) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["k" /* insertNode */])(div, target, anchor);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(button, div);
			component.refs.leftButton = button;
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text, div);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(span, div);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_1, span);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_2, span);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_3, span);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_4, div);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(button_1, div);
			component.refs.rightButton = button_1;
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_5, div);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(button_2, div);
		},

		p: function update(changed, state) {
			if ((changed.months || changed.month) && text_1_value !== (text_1_value = state.months[state.month])) {
				text_1.data = text_1_value;
			}

			if (changed.year) {
				text_3.data = state.year;
			}

			if ((changed.isToday) && div_class_value !== (div_class_value = "year-month-picker " + (state.isToday ? 'is-today': ''))) {
				div.className = div_class_value;
			}
		},

		u: function unmount() {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["i" /* detachNode */])(div);
		},

		d: function destroy() {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(button, "keydown", keydown_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(button, "keyup", keyup_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(button, "mousedown", mousedown_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(button, "mouseout", mouseout_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(button, "mouseup", mouseup_handler);
			if (component.refs.leftButton === button) component.refs.leftButton = null;
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(button_1, "keydown", keydown_handler_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(button_1, "keyup", keyup_handler_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(button_1, "mousedown", mousedown_handler_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(button_1, "mouseout", mouseout_handler_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(button_1, "mouseup", mouseup_handler_1);
			if (component.refs.rightButton === button_1) component.refs.rightButton = null;
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(button_2, "click", click_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(div, "wheel", wheel_handler);
		}
	};
}

function Index(options) {
	Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["j" /* init */])(this, options);
	this.refs = {};
	this._state = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(data(), options.data);
	this._recompute({ month: 1, year: 1, current: 1 }, this._state);

	this._fragment = create_main_fragment(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);
	}
}

Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(Index.prototype, methods), __WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["m" /* proto */]);

Index.prototype._recompute = function _recompute(changed, state) {
	if (changed.month || changed.year || changed.current) {
		if (this._differs(state.isToday, (state.isToday = isToday(state.month, state.year, state.current)))) changed.isToday = true;
	}

	if (changed.month || changed.year) {
		if (this._differs(state.dateStr, (state.dateStr = dateStr(state.month, state.year)))) changed.dateStr = true;
	}
}
/* harmony default export */ __webpack_exports__["a"] = (Index);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_js__ = __webpack_require__(5);
/* client/form/index.html generated by Svelte v1.60.2 */



function data() {
	return {
		inEdit: false,
		date: new Date().toISOString().substr(0, 7),
		repeat: 1,
		rows: [ {id: '', description: '', amount: ''} ],
		categories: [],
	};
};

var methods = {
	getData () {
		const date = this.get('date') || new Date().toISOString().substr(0, 7);
		const entries = __WEBPACK_IMPORTED_MODULE_1__util_js__["a" /* default */].deepCopyArray(this.get('rows'))
			.map(e => {
				e.date = date;
				e.amount = __WEBPACK_IMPORTED_MODULE_1__util_js__["a" /* default */].parseAmount(e.amount);
				return e;
			});

		// subtract other amounts from the first row
		const amounts = entries.map((item, i) => i > 0 ? item.amount : 0);
		const sum = amounts.reduce((a, b) => a + b, 0);	// add all up
		entries[0].amount -= sum;

		// repeat monthly
		const repeater = this.get('repeat');
		return __WEBPACK_IMPORTED_MODULE_1__util_js__["a" /* default */].repeatEntries(entries, repeater);
	},

	split () {
		const rows = this.get('rows');
		rows.push({id: '', description: rows[0].description, amount: ''});
		this.set({ rows });
	},

	unsplit (idx) {
		const rows = this.get('rows');
		rows.splice(idx, 1);
		this.set({ rows });
	},

	edit (data) {
		this.reset();
		this.set({ inEdit: true, rows: [data] });
		this.fire('change', this.getData());
	},

	reset () {
		this.set({
			inEdit: false,
			repeat: 1,
			rows: [ {id: '', description: '', amount: '' } ]
		});
		this.toggleAmountError();
		this.fire('change', this.getData());
	},

	oninput () {
		this.toggleAmountError();
		this.fire('change', this.getData());
	},

	remove () {
		this.fire('remove', { id: this.get('rows')[0].id });
		this.reset();
	},

	onsubmit (e) {
		e.preventDefault();
		const data = this.getData();
		if (!data[0].amount) {
			this.toggleAmountError('Please enter amount');
			return this.fire('error', 'Please enter amount');
		}
		this.fire('submit', data);
		this.reset();
	},

	onkeydown (e) {
		if (__WEBPACK_IMPORTED_MODULE_1__util_js__["a" /* default */].isAllowedKey(e)) return true;
		e.preventDefault();
	},

	toggleAmountError (err) {
		this.refs.form.querySelector('.amount').setCustomValidity(err || '');
	}
};

function create_main_fragment(component, state) {
	var form, div, text_1, div_1, label, text_3, input, input_updating = false, text_4, label_1, text_7, div_2, button, text_9, button_1, text_11, div_3, text_12, button_2, text_14, button_3, text_16, button_4, form_class_value;

	var each_value = state.rows;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(component, Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])({}, state), {
			each_value: each_value,
			row: each_value[i],
			idx: i
		}));
	}

	function input_input_handler() {
		input_updating = true;
		component.set({ repeat: Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["r" /* toNumber */])(input.value) });
		input_updating = false;
	}

	function click_handler_2(event) {
		component.reset();
	}

	function click_handler_3(event) {
		component.remove();
	}

	function click_handler_4(event) {
		component.reset();
	}

	function submit_handler(event) {
		component.onsubmit(event);
	}

	function input_handler(event) {
		component.oninput(event);
	}

	return {
		c: function create() {
			form = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("form");
			div = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("div");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			text_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t");
			div_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("div");
			label = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("label");
			label.textContent = "Repeat every month, for";
			text_3 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t");
			input = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("input");
			text_4 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t");
			label_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("label");
			label_1.textContent = "months";
			text_7 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t");
			div_2 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("div");
			button = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("button");
			button.textContent = "Reset";
			text_9 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t");
			button_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("button");
			button_1.textContent = "Remove";
			text_11 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t");
			div_3 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("div");
			text_12 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t");
			button_2 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("button");
			button_2.textContent = "Cancel";
			text_14 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t");
			button_3 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("button");
			button_3.textContent = "Save";
			text_16 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t");
			button_4 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("button");
			button_4.textContent = "Add";
			this.h();
		},

		h: function hydrate() {
			div.className = "subforms";
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(input, "input", input_input_handler);
			input.className = "repeater";
			input.min = "1";
			input.max = "12";
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["q" /* setAttribute */])(input, "type", "number");
			div_1.className = "form-row form-row-repeat";
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(button, "click", click_handler_2);
			button.type = "button";
			button.className = "btn btn-reset";
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(button_1, "click", click_handler_3);
			button_1.type = "button";
			button_1.className = "btn danger btn-remove";
			div_3.className = "flex-filler";
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(button_2, "click", click_handler_4);
			button_2.type = "button";
			button_2.className = "btn btn-cancel";
			button_3.type = "submit";
			button_3.className = "btn success btn-save";
			button_4.type = "submit";
			button_4.className = "btn success btn-add";
			div_2.className = "form-footer form-row";
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(form, "submit", submit_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(form, "input", input_handler);
			form.className = form_class_value = "form " + (state.inEdit ? 'edit' : '');
		},

		m: function mount(target, anchor) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["k" /* insertNode */])(form, target, anchor);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(div, form);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_1, form);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(div_1, form);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(label, div_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_3, div_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(input, div_1);

			input.value = state.repeat;

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_4, div_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(label_1, div_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_7, form);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(div_2, form);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(button, div_2);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_9, div_2);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(button_1, div_2);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_11, div_2);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(div_3, div_2);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_12, div_2);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(button_2, div_2);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_14, div_2);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(button_3, div_2);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_16, div_2);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(button_4, div_2);
			component.refs.form = form;
		},

		p: function update(changed, state) {
			var each_value = state.rows;

			if (changed.rows || changed.categories) {
				for (var i = 0; i < each_value.length; i += 1) {
					var each_context = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])({}, state), {
						each_value: each_value,
						row: each_value[i],
						idx: i
					});

					if (each_blocks[i]) {
						each_blocks[i].p(changed, each_context);
					} else {
						each_blocks[i] = create_each_block(component, each_context);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = each_value.length;
			}

			if (!input_updating) input.value = state.repeat;
			if ((changed.inEdit) && form_class_value !== (form_class_value = "form " + (state.inEdit ? 'edit' : ''))) {
				form.className = form_class_value;
			}
		},

		u: function unmount() {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["i" /* detachNode */])(form);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].u();
			}
		},

		d: function destroy() {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* destroyEach */])(each_blocks);

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(input, "input", input_input_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(button, "click", click_handler_2);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(button_1, "click", click_handler_3);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(button_2, "click", click_handler_4);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(form, "submit", submit_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(form, "input", input_handler);
			if (component.refs.form === form) component.refs.form = null;
		}
	};
}

// (3:2) {{#each rows as row, idx}}
function create_each_block(component, state) {
	var row = state.row, each_value = state.each_value, idx = state.idx;
	var div, input, input_updating = false, text, div_1, select, select_updating = false, text_2, input_1, input_1_updating = false, text_3, input_2, input_2_updating = false, text_4;

	function input_input_handler() {
		var context = input._svelte;
		var state = component.get();
		input_updating = true;
		context.each_value[context.idx].id = input.value;
		component.set({ rows: state.rows, categories: state.categories });
		input_updating = false;
	}

	var each_value_1 = state.categories;

	var each_blocks = [];

	for (var i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(component, Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])({}, state), {
			each_value_1: each_value_1,
			group: each_value_1[i],
			group_index: i
		}));
	}

	function select_change_handler() {
		var context = select._svelte;
		var state = component.get();
		select_updating = true;
		context.each_value[context.idx].category = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["p" /* selectValue */])(select);
		component.set({ rows: state.rows, categories: state.categories });
		select_updating = false;
	}

	function input_1_input_handler() {
		var context = input_1._svelte;
		var state = component.get();
		input_1_updating = true;
		context.each_value[context.idx].description = input_1.value;
		component.set({ rows: state.rows, categories: state.categories });
		input_1_updating = false;
	}

	function input_2_input_handler() {
		var context = input_2._svelte;
		var state = component.get();
		input_2_updating = true;
		context.each_value[context.idx].amount = input_2.value;
		component.set({ rows: state.rows, categories: state.categories });
		input_2_updating = false;
	}

	function select_block_type(state) {
		if (idx === 0) return create_if_block_1;
		return create_if_block_2;
	}

	var current_block_type = select_block_type(state);
	var if_block = current_block_type(component, state);

	return {
		c: function create() {
			div = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("div");
			input = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("input");
			text = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t\t");
			div_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("div");
			select = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("select");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			text_2 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t\t");
			input_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("input");
			text_3 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t\t");
			input_2 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("input");
			text_4 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\n\t\t\t");
			if_block.c();
			this.h();
		},

		h: function hydrate() {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(input, "input", input_input_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["q" /* setAttribute */])(input, "type", "hidden");

			input._svelte = {
				each_value: state.each_value,
				idx: state.idx
			};

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(select, "change", select_change_handler);
			if (!('row' in state)) component.root._beforecreate.push(select_change_handler);
			select.className = "select category";
			select.autofocus = "autofocus";

			select._svelte = {
				each_value: state.each_value,
				idx: state.idx
			};

			div_1.className = "select-wrap";
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(input_1, "input", input_1_input_handler);
			input_1.className = "description";
			input_1.placeholder = "description";

			input_1._svelte = {
				each_value: state.each_value,
				idx: state.idx
			};

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(input_2, "input", input_2_input_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(input_2, "keydown", keydown_handler);
			input_2.className = "amount";
			input_2.placeholder = "0.00";

			input_2._svelte = {
				component: component,
				each_value: state.each_value,
				idx: state.idx
			};

			div.className = "form-row";
		},

		m: function mount(target, anchor) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["k" /* insertNode */])(div, target, anchor);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(input, div);

			input.value = row.id;

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text, div);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(div_1, div);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(select, div_1);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(select, null);
			}

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* selectOption */])(select, row.category)

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_2, div);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(input_1, div);

			input_1.value = row.description;

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_3, div);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(input_2, div);

			input_2.value = row.amount;

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_4, div);
			if_block.m(div, null);
		},

		p: function update(changed, state) {
			row = state.row;
			each_value = state.each_value;
			idx = state.idx;
			if (!input_updating) input.value = row.id;

			input._svelte.each_value = state.each_value;
			input._svelte.idx = state.idx;

			var each_value_1 = state.categories;

			if (changed.categories) {
				for (var i = 0; i < each_value_1.length; i += 1) {
					var each_context = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])({}, state), {
						each_value_1: each_value_1,
						group: each_value_1[i],
						group_index: i
					});

					if (each_blocks[i]) {
						each_blocks[i].p(changed, each_context);
					} else {
						each_blocks[i] = create_each_block_1(component, each_context);
						each_blocks[i].c();
						each_blocks[i].m(select, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = each_value_1.length;
			}

			if (!select_updating) Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* selectOption */])(select, row.category)

			select._svelte.each_value = state.each_value;
			select._svelte.idx = state.idx;

			if (!input_1_updating) input_1.value = row.description;

			input_1._svelte.each_value = state.each_value;
			input_1._svelte.idx = state.idx;

			if (!input_2_updating) input_2.value = row.amount;

			input_2._svelte.each_value = state.each_value;
			input_2._svelte.idx = state.idx;

			if (current_block_type !== (current_block_type = select_block_type(state))) {
				if_block.u();
				if_block.d();
				if_block = current_block_type(component, state);
				if_block.c();
				if_block.m(div, null);
			}
		},

		u: function unmount() {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["i" /* detachNode */])(div);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].u();
			}

			if_block.u();
		},

		d: function destroy() {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(input, "input", input_input_handler);

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* destroyEach */])(each_blocks);

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(select, "change", select_change_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(input_1, "input", input_1_input_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(input_2, "input", input_2_input_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(input_2, "keydown", keydown_handler);
			if_block.d();
		}
	};
}

// (8:5) {{#each categories as group}}
function create_each_block_1(component, state) {
	var row = state.row, each_value = state.each_value, idx = state.idx, group = state.group, each_value_1 = state.each_value_1, group_index = state.group_index;
	var optgroup, optgroup_label_value;

	var if_block = (group.items) && create_if_block(component, state);

	return {
		c: function create() {
			optgroup = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("optgroup");
			if (if_block) if_block.c();
			this.h();
		},

		h: function hydrate() {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["q" /* setAttribute */])(optgroup, "label", optgroup_label_value = group.name);
		},

		m: function mount(target, anchor) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["k" /* insertNode */])(optgroup, target, anchor);
			if (if_block) if_block.m(optgroup, null);
		},

		p: function update(changed, state) {
			row = state.row;
			each_value = state.each_value;
			idx = state.idx;
			group = state.group;
			each_value_1 = state.each_value_1;
			group_index = state.group_index;
			if (group.items) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block(component, state);
					if_block.c();
					if_block.m(optgroup, null);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}

			if ((changed.categories) && optgroup_label_value !== (optgroup_label_value = group.name)) {
				Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["q" /* setAttribute */])(optgroup, "label", optgroup_label_value);
			}
		},

		u: function unmount() {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["i" /* detachNode */])(optgroup);
			if (if_block) if_block.u();
		},

		d: function destroy() {
			if (if_block) if_block.d();
		}
	};
}

// (11:6) {{#each group.items as cat}}
function create_each_block_2(component, state) {
	var row = state.row, each_value = state.each_value, idx = state.idx, group = state.group, each_value_1 = state.each_value_1, group_index = state.group_index, cat = state.cat, each_value_2 = state.each_value_2, cat_index = state.cat_index;
	var option, text_value = cat.name, text, option_value_value;

	return {
		c: function create() {
			option = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("option");
			text = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])(text_value);
			this.h();
		},

		h: function hydrate() {
			option.__value = option_value_value = cat.name;
			option.value = option.__value;
		},

		m: function mount(target, anchor) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["k" /* insertNode */])(option, target, anchor);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text, option);
		},

		p: function update(changed, state) {
			row = state.row;
			each_value = state.each_value;
			idx = state.idx;
			group = state.group;
			each_value_1 = state.each_value_1;
			group_index = state.group_index;
			cat = state.cat;
			each_value_2 = state.each_value_2;
			cat_index = state.cat_index;
			if ((changed.categories) && text_value !== (text_value = cat.name)) {
				text.data = text_value;
			}

			if ((changed.categories) && option_value_value !== (option_value_value = cat.name)) {
				option.__value = option_value_value;
			}

			option.value = option.__value;
		},

		u: function unmount() {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["i" /* detachNode */])(option);
		},

		d: __WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["l" /* noop */]
	};
}

// (10:6) {{#if group.items}}
function create_if_block(component, state) {
	var row = state.row, each_value = state.each_value, idx = state.idx, group = state.group, each_value_1 = state.each_value_1, group_index = state.group_index;
	var each_anchor;

	var each_value_2 = group.items;

	var each_blocks = [];

	for (var i = 0; i < each_value_2.length; i += 1) {
		each_blocks[i] = create_each_block_2(component, Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])({}, state), {
			each_value_2: each_value_2,
			cat: each_value_2[i],
			cat_index: i
		}));
	}

	return {
		c: function create() {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_anchor = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["e" /* createComment */])();
		},

		m: function mount(target, anchor) {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["k" /* insertNode */])(each_anchor, target, anchor);
		},

		p: function update(changed, state) {
			row = state.row;
			each_value = state.each_value;
			idx = state.idx;
			group = state.group;
			each_value_1 = state.each_value_1;
			group_index = state.group_index;
			var each_value_2 = group.items;

			if (changed.categories) {
				for (var i = 0; i < each_value_2.length; i += 1) {
					var each_context = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])({}, state), {
						each_value_2: each_value_2,
						cat: each_value_2[i],
						cat_index: i
					});

					if (each_blocks[i]) {
						each_blocks[i].p(changed, each_context);
					} else {
						each_blocks[i] = create_each_block_2(component, each_context);
						each_blocks[i].c();
						each_blocks[i].m(each_anchor.parentNode, each_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = each_value_2.length;
			}
		},

		u: function unmount() {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].u();
			}

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["i" /* detachNode */])(each_anchor);
		},

		d: function destroy() {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* destroyEach */])(each_blocks);
		}
	};
}

// (22:3) {{#if idx === 0}}
function create_if_block_1(component, state) {
	var row = state.row, each_value = state.each_value, idx = state.idx;
	var button;

	return {
		c: function create() {
			button = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("button");
			this.h();
		},

		h: function hydrate() {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(button, "click", click_handler);
			button.type = "button";
			button.title = "Split";
			button.className = "btn btn-split ion-md-swap";

			button._svelte = {
				component: component
			};
		},

		m: function mount(target, anchor) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["k" /* insertNode */])(button, target, anchor);
		},

		p: function update(changed, state) {
			row = state.row;
			each_value = state.each_value;
			idx = state.idx;

		},

		u: function unmount() {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["i" /* detachNode */])(button);
		},

		d: function destroy() {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(button, "click", click_handler);
		}
	};
}

// (24:3) {{else}}
function create_if_block_2(component, state) {
	var row = state.row, each_value = state.each_value, idx = state.idx;
	var button;

	return {
		c: function create() {
			button = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("button");
			this.h();
		},

		h: function hydrate() {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(button, "click", click_handler_1);
			button.type = "button";
			button.title = "Remove";
			button.className = "btn btn-unsplit ion-md-close";

			button._svelte = {
				component: component,
				each_value: state.each_value,
				idx: state.idx
			};
		},

		m: function mount(target, anchor) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["k" /* insertNode */])(button, target, anchor);
		},

		p: function update(changed, state) {
			row = state.row;
			each_value = state.each_value;
			idx = state.idx;
			button._svelte.each_value = state.each_value;
			button._svelte.idx = state.idx;
		},

		u: function unmount() {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["i" /* detachNode */])(button);
		},

		d: function destroy() {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(button, "click", click_handler_1);
		}
	};
}

function keydown_handler(event) {
	var component = this._svelte.component;
	component.onkeydown(event);
}

function click_handler(event) {
	var component = this._svelte.component;
	component.split();
}

function click_handler_1(event) {
	var component = this._svelte.component;
	var each_value = this._svelte.each_value, idx = this._svelte.idx, row = each_value[idx];
	component.unsplit(idx);
}

function Index(options) {
	Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["j" /* init */])(this, options);
	this.refs = {};
	this._state = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(data(), options.data);

	if (!options.root) {
		this._oncreate = [];
		this._beforecreate = [];
	}

	this._fragment = create_main_fragment(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["d" /* callAll */])(this._beforecreate);
	}
}

Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(Index.prototype, methods), __WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["m" /* proto */]);
/* harmony default export */ __webpack_exports__["a"] = (Index);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

function parseAmount(amount) {
	/* eslint no-eval: 0 */
	amount = ('' + amount).replace(/\s/g, '');
	if (!/^[+\-\\*/()\d.]+$/i.test(amount)) return 0;
	if (/[+\-\\*/.]+/i.test(amount)) {
		try {
			amount = eval(amount);
		} catch (e) {
			amount = 0;
		}
	}
	let num = parseFloat(amount);
	if (num === Infinity || isNaN(num) || num < 0) num = 'error';
	return num;
}

// yyyy-mm
function getStrDate(y, m) {
	return `${y}-${('0' + m).substr(-2)}`;
}

function parseDateStr(dateStr) {
	let [year, month] = dateStr.split('-');
	year = parseInt(year, 10);
	month = parseInt(month, 10);
	const str = getStrDate(year, month);
	return { year, month, str };
}

function deepCopyArray(arr) {
	return arr.map(o => Object.assign({}, o));
}

function addMonthsToDate(date, monthDiff) {
	const dateObj = parseDateStr(date);
	let year = dateObj.year;
	let month = dateObj.month + monthDiff;
	if (month >= 13) {
		year = year + Math.floor(month / 12);
		month = month % 12 + 1;
	}
	return getStrDate(year, month);
}

function cloneEntries(entries, monthDiff) {
	return deepCopyArray(entries).map(item => {
		item.date = addMonthsToDate(item.date, monthDiff);
		return item;
	});
}

function repeatEntries(entries, repeater) {
	if (!repeater || repeater === 1) return entries;

	const originalEntries = deepCopyArray(entries);
	for (let i = 1; i < repeater; i++) {
		const newRows = cloneEntries(originalEntries, i);
		entries = entries.concat(newRows);
	}
	return entries;
}

function isAllowedKey(e) {
	const allowedReg = /^[()\d/*+-]{1}$/;
	const allowedKeys = ['Enter', 'Tab', 'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', '.'];

	if (allowedKeys.indexOf(e.key) > -1) return true;
	if (e.metaKey || e.ctrlKey) return true;
	if (e.key.length < 3 && allowedReg.test(e.key)) return true;
	return false;
}

/* harmony default export */ __webpack_exports__["a"] = ({
	parseDateStr,
	parseAmount,
	repeatEntries,
	deepCopyArray,
	isAllowedKey
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__ = __webpack_require__(0);
/* client/table/index.html generated by Svelte v1.60.2 */


function formatNumber (num) {
	num = Math.round(0 + num * 100) / 100;
	return num.toLocaleString('en-GB', { minimumFractionDigits: 2 })
}

function total(data) { return data.reduce((p, c) => p + c.amount, 0); };

function format(data) { return formatNumber; };

function data() {
	return { data: [] };
};

var methods = {
	onRowClick (item) {
		this.fire('click', item);
	}
};

function oncreate() {
};

function create_main_fragment(component, state) {
	var div;

	var if_block = (state.data && state.data.length) && create_if_block(component, state);

	return {
		c: function create() {
			div = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("div");
			if (if_block) if_block.c();
			this.h();
		},

		h: function hydrate() {
			div.className = "table";
		},

		m: function mount(target, anchor) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["k" /* insertNode */])(div, target, anchor);
			if (if_block) if_block.m(div, null);
			component.refs.table = div;
		},

		p: function update(changed, state) {
			if (state.data && state.data.length) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block(component, state);
					if_block.c();
					if_block.m(div, null);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["i" /* detachNode */])(div);
			if (if_block) if_block.u();
		},

		d: function destroy() {
			if (if_block) if_block.d();
			if (component.refs.table === div) component.refs.table = null;
		}
	};
}

// (10:3) {{#each data as item, idx}}
function create_each_block(component, state) {
	var item = state.item, each_value = state.each_value, idx = state.idx;
	var tr, td, text_value = item.date.substr(0, 7), text, text_1, td_1, text_2_value = item.category, text_2, text_3, text_4_value = item.description, text_4, text_5, td_2, text_6_value = state.format(item.amount), text_6;

	return {
		c: function create() {
			tr = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("tr");
			td = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("td");
			text = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])(text_value);
			text_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t\t\t\t");
			td_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("td");
			text_2 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])(text_2_value);
			text_3 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])(" - ");
			text_4 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])(text_4_value);
			text_5 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t\t\t\t");
			td_2 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("td");
			text_6 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])(text_6_value);
			this.h();
		},

		h: function hydrate() {
			td_1.className = "desc";
			td_2.className = "amount";
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(tr, "click", click_handler);

			tr._svelte = {
				component: component,
				each_value: state.each_value,
				idx: state.idx
			};
		},

		m: function mount(target, anchor) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["k" /* insertNode */])(tr, target, anchor);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(td, tr);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text, td);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_1, tr);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(td_1, tr);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_2, td_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_3, td_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_4, td_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_5, tr);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(td_2, tr);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_6, td_2);
		},

		p: function update(changed, state) {
			item = state.item;
			each_value = state.each_value;
			idx = state.idx;
			if ((changed.data) && text_value !== (text_value = item.date.substr(0, 7))) {
				text.data = text_value;
			}

			if ((changed.data) && text_2_value !== (text_2_value = item.category)) {
				text_2.data = text_2_value;
			}

			if ((changed.data) && text_4_value !== (text_4_value = item.description)) {
				text_4.data = text_4_value;
			}

			if ((changed.format || changed.data) && text_6_value !== (text_6_value = state.format(item.amount))) {
				text_6.data = text_6_value;
			}

			tr._svelte.each_value = state.each_value;
			tr._svelte.idx = state.idx;
		},

		u: function unmount() {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["i" /* detachNode */])(tr);
		},

		d: function destroy() {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(tr, "click", click_handler);
		}
	};
}

// (2:1) {{#if data && data.length }}
function create_if_block(component, state) {
	var table, thead, text_6, tbody, text_8, tfoot, tr_1, td_3, text_10, td_4, text_11_value = state.format(state.total), text_11;

	var each_value = state.data;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(component, Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])({}, state), {
			each_value: each_value,
			item: each_value[i],
			idx: i
		}));
	}

	return {
		c: function create() {
			table = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("table");
			thead = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("thead");
			thead.innerHTML = "<tr><td class=\"date\">Date</td>\n\t\t\t<td class=\"desc\">Description</td>\n\t\t\t<td class=\"amount\">Amount</td></tr>";
			text_6 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t");
			tbody = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("tbody");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			text_8 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t");
			tfoot = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("tfoot");
			tr_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("tr");
			td_3 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("td");
			td_3.innerHTML = "<input class=\"table-filter\" type=\"search\" placeholder=\"Filter\">";
			text_10 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t\t");
			td_4 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("td");
			text_11 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])(text_11_value);
			this.h();
		},

		h: function hydrate() {
			td_3.colSpan = "2";
			td_4.className = "amount";
		},

		m: function mount(target, anchor) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["k" /* insertNode */])(table, target, anchor);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(thead, table);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_6, table);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(tbody, table);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(tbody, null);
			}

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_8, table);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(tfoot, table);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(tr_1, tfoot);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(td_3, tr_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_10, tr_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(td_4, tr_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_11, td_4);
		},

		p: function update(changed, state) {
			var each_value = state.data;

			if (changed.data || changed.format) {
				for (var i = 0; i < each_value.length; i += 1) {
					var each_context = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])({}, state), {
						each_value: each_value,
						item: each_value[i],
						idx: i
					});

					if (each_blocks[i]) {
						each_blocks[i].p(changed, each_context);
					} else {
						each_blocks[i] = create_each_block(component, each_context);
						each_blocks[i].c();
						each_blocks[i].m(tbody, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = each_value.length;
			}

			if ((changed.format || changed.total) && text_11_value !== (text_11_value = state.format(state.total))) {
				text_11.data = text_11_value;
			}
		},

		u: function unmount() {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["i" /* detachNode */])(table);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].u();
			}
		},

		d: function destroy() {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* destroyEach */])(each_blocks);
		}
	};
}

function click_handler(event) {
	var component = this._svelte.component;
	var each_value = this._svelte.each_value, idx = this._svelte.idx, item = each_value[idx];
	component.onRowClick(item);
}

function Index(options) {
	Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["j" /* init */])(this, options);
	this.refs = {};
	this._state = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(data(), options.data);
	this._recompute({ data: 1 }, this._state);

	var _oncreate = oncreate.bind(this);

	if (!options.root) {
		this._oncreate = [];
	}

	this._fragment = create_main_fragment(this, this._state);

	this.root._oncreate.push(_oncreate);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["d" /* callAll */])(this._oncreate);
	}
}

Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(Index.prototype, methods), __WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["m" /* proto */]);

Index.prototype._recompute = function _recompute(changed, state) {
	if (changed.data) {
		if (this._differs(state.total, (state.total = total(state.data)))) changed.total = true;
		if (this._differs(state.format, (state.format = format(state.data)))) changed.format = true;
	}
}
/* harmony default export */ __webpack_exports__["a"] = (Index);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Expenses; });
function get(url) {
	return fetch(url, { credentials: 'include' }).then(res => res.json());
}

function post(url, params) {
	const body = JSON.stringify(params);
	const opts = {
		method: 'POST',
		headers: { 'Content-type': 'application/json' },
		credentials: 'include',
		body
	};
	return fetch(url, opts).then(res => res.json());
}

const Categories = {
	get: () => get('api/categories')
};

const Expenses = {
	get(date = '') {
		return get(`api/entries?date=${date}`);
	},
	save(data) {
		return post('api/entries', data);
	}
};



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTgxMTcxNWE0YjY0OTU2OTQ3NjUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9hcHAvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9jbGllbnQveWVhci1tb250aC1waWNrZXIvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvZm9ybS9pbmRleC5odG1sIiwid2VicGFjazovLy8uL2NsaWVudC9mb3JtL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3RhYmxlL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2RhdGEvaW5kZXguanMiXSwibmFtZXMiOlsidGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyc2VBbW91bnQiLCJhbW91bnQiLCJyZXBsYWNlIiwidGVzdCIsImV2YWwiLCJlIiwibnVtIiwicGFyc2VGbG9hdCIsIkluZmluaXR5IiwiaXNOYU4iLCJnZXRTdHJEYXRlIiwieSIsIm0iLCJzdWJzdHIiLCJwYXJzZURhdGVTdHIiLCJkYXRlU3RyIiwieWVhciIsIm1vbnRoIiwic3BsaXQiLCJwYXJzZUludCIsInN0ciIsImRlZXBDb3B5QXJyYXkiLCJhcnIiLCJtYXAiLCJvIiwiT2JqZWN0IiwiYXNzaWduIiwiYWRkTW9udGhzVG9EYXRlIiwiZGF0ZSIsIm1vbnRoRGlmZiIsImRhdGVPYmoiLCJNYXRoIiwiZmxvb3IiLCJjbG9uZUVudHJpZXMiLCJlbnRyaWVzIiwiaXRlbSIsInJlcGVhdEVudHJpZXMiLCJyZXBlYXRlciIsIm9yaWdpbmFsRW50cmllcyIsImkiLCJuZXdSb3dzIiwiY29uY2F0IiwiaXNBbGxvd2VkS2V5IiwiYWxsb3dlZFJlZyIsImFsbG93ZWRLZXlzIiwiaW5kZXhPZiIsImtleSIsIm1ldGFLZXkiLCJjdHJsS2V5IiwibGVuZ3RoIiwiZ2V0IiwidXJsIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXMiLCJqc29uIiwicG9zdCIsInBhcmFtcyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib3B0cyIsIm1ldGhvZCIsImhlYWRlcnMiLCJDYXRlZ29yaWVzIiwiRXhwZW5zZXMiLCJzYXZlIiwiZGF0YSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHVCQUF1QjtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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RSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtBQUNuRCxDQUFDOztpQkE1Q1EsR0FBRztBQUNaLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3BELENBQUMseURBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0UsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUV0QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUMzRCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUMzRCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUMzRCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN6RCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMs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TTtBQUpZLEVBQWI7QUFNQSxRQUFPUCxNQUFNRCxHQUFOLEVBQVdXLElBQVgsRUFBaUJSLElBQWpCLENBQXNCQyxPQUFPQSxJQUFJQyxJQUFKLEVBQTdCLENBQVA7QUFDQTs7QUFJRCxNQUFNUyxhQUFhO0FBQ2xCZixNQUFLLE1BQU1BLElBQUksZ0JBQUo7QUFETyxDQUFuQjs7QUFJQSxNQUFNZ0IsV0FBVztBQUNoQmhCLEtBQUt0QixPQUFPLEVBQVosRUFBZ0I7QUFDZixTQUFPc0IsSUFBSyxvQkFBbUJ0QixJQUFLLEVBQTdCLENBQVA7QUFDQSxFQUhlO0FBSWhCdUMsTUFBTUMsSUFBTixFQUFZO0FBQ1gsU0FBT1gsS0FBSyxhQUFMLEVBQW9CVyxJQUFwQixDQUFQO0FBQ0E7QUFOZSxDQUFqQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vcHVibGljL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU4MTE3MTVhNGI2NDk1Njk0NzY1IiwiZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmZ1bmN0aW9uIGFzc2lnbih0YXIsIHNyYykge1xuXHRmb3IgKHZhciBrIGluIHNyYykgdGFyW2tdID0gc3JjW2tdO1xuXHRyZXR1cm4gdGFyO1xufVxuXG5mdW5jdGlvbiBhcHBlbmROb2RlKG5vZGUsIHRhcmdldCkge1xuXHR0YXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG59XG5cbmZ1bmN0aW9uIGluc2VydE5vZGUobm9kZSwgdGFyZ2V0LCBhbmNob3IpIHtcblx0dGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IpO1xufVxuXG5mdW5jdGlvbiBkZXRhY2hOb2RlKG5vZGUpIHtcblx0bm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuXG5mdW5jdGlvbiBkZXRhY2hCZXR3ZWVuKGJlZm9yZSwgYWZ0ZXIpIHtcblx0d2hpbGUgKGJlZm9yZS5uZXh0U2libGluZyAmJiBiZWZvcmUubmV4dFNpYmxpbmcgIT09IGFmdGVyKSB7XG5cdFx0YmVmb3JlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYmVmb3JlLm5leHRTaWJsaW5nKTtcblx0fVxufVxuXG5mdW5jdGlvbiBkZXRhY2hCZWZvcmUoYWZ0ZXIpIHtcblx0d2hpbGUgKGFmdGVyLnByZXZpb3VzU2libGluZykge1xuXHRcdGFmdGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYWZ0ZXIucHJldmlvdXNTaWJsaW5nKTtcblx0fVxufVxuXG5mdW5jdGlvbiBkZXRhY2hBZnRlcihiZWZvcmUpIHtcblx0d2hpbGUgKGJlZm9yZS5uZXh0U2libGluZykge1xuXHRcdGJlZm9yZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJlZm9yZS5uZXh0U2libGluZyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVpbnNlcnRCZXR3ZWVuKGJlZm9yZSwgYWZ0ZXIsIHRhcmdldCkge1xuXHR3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nICYmIGJlZm9yZS5uZXh0U2libGluZyAhPT0gYWZ0ZXIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoYmVmb3JlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYmVmb3JlLm5leHRTaWJsaW5nKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVpbnNlcnRDaGlsZHJlbihwYXJlbnQsIHRhcmdldCkge1xuXHR3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHRhcmdldC5hcHBlbmRDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG59XG5cbmZ1bmN0aW9uIHJlaW5zZXJ0QWZ0ZXIoYmVmb3JlLCB0YXJnZXQpIHtcblx0d2hpbGUgKGJlZm9yZS5uZXh0U2libGluZykgdGFyZ2V0LmFwcGVuZENoaWxkKGJlZm9yZS5uZXh0U2libGluZyk7XG59XG5cbmZ1bmN0aW9uIHJlaW5zZXJ0QmVmb3JlKGFmdGVyLCB0YXJnZXQpIHtcblx0dmFyIHBhcmVudCA9IGFmdGVyLnBhcmVudE5vZGU7XG5cdHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCAhPT0gYWZ0ZXIpIHRhcmdldC5hcHBlbmRDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3lFYWNoKGl0ZXJhdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpdGVyYXRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0aWYgKGl0ZXJhdGlvbnNbaV0pIGl0ZXJhdGlvbnNbaV0uZCgpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50KCkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KG5hbWUpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN2Z0VsZW1lbnQobmFtZSkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIG5hbWUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0KGRhdGEpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21tZW50KCkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJyk7XG59XG5cbmZ1bmN0aW9uIGFkZExpc3RlbmVyKG5vZGUsIGV2ZW50LCBoYW5kbGVyKSB7XG5cdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihub2RlLCBldmVudCwgaGFuZGxlcikge1xuXHRub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcblx0bm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMobm9kZSwgYXR0cmlidXRlcykge1xuXHRmb3IgKHZhciBrZXkgaW4gYXR0cmlidXRlcykge1xuXHRcdGlmIChrZXkgaW4gbm9kZSkge1xuXHRcdFx0bm9kZVtrZXldID0gYXR0cmlidXRlc1trZXldO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoYXR0cmlidXRlc1trZXldID09PSB1bmRlZmluZWQpIHJlbW92ZUF0dHJpYnV0ZShub2RlLCBrZXkpO1xuXHRcdFx0ZWxzZSBzZXRBdHRyaWJ1dGUobm9kZSwga2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUobm9kZSwgYXR0cmlidXRlKSB7XG5cdG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG59XG5cbmZ1bmN0aW9uIHNldFhsaW5rQXR0cmlidXRlKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcblx0bm9kZS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsIGF0dHJpYnV0ZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBnZXRCaW5kaW5nR3JvdXBWYWx1ZShncm91cCkge1xuXHR2YXIgdmFsdWUgPSBbXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBncm91cC5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGlmIChncm91cFtpXS5jaGVja2VkKSB2YWx1ZS5wdXNoKGdyb3VwW2ldLl9fdmFsdWUpO1xuXHR9XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlID09PSAnJyA/IHVuZGVmaW5lZCA6ICt2YWx1ZTtcbn1cblxuZnVuY3Rpb24gdGltZVJhbmdlc1RvQXJyYXkocmFuZ2VzKSB7XG5cdHZhciBhcnJheSA9IFtdO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHJhbmdlcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGFycmF5LnB1c2goeyBzdGFydDogcmFuZ2VzLnN0YXJ0KGkpLCBlbmQ6IHJhbmdlcy5lbmQoaSkgfSk7XG5cdH1cblx0cmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBjaGlsZHJlbiAoZWxlbWVudCkge1xuXHRyZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpO1xufVxuXG5mdW5jdGlvbiBjbGFpbUVsZW1lbnQgKG5vZGVzLCBuYW1lLCBhdHRyaWJ1dGVzLCBzdmcpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdHZhciBub2RlID0gbm9kZXNbaV07XG5cdFx0aWYgKG5vZGUubm9kZU5hbWUgPT09IG5hbWUpIHtcblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgbm9kZS5hdHRyaWJ1dGVzLmxlbmd0aDsgaiArPSAxKSB7XG5cdFx0XHRcdHZhciBhdHRyaWJ1dGUgPSBub2RlLmF0dHJpYnV0ZXNbal07XG5cdFx0XHRcdGlmICghYXR0cmlidXRlc1thdHRyaWJ1dGUubmFtZV0pIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZS5uYW1lKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBub2Rlcy5zcGxpY2UoaSwgMSlbMF07IC8vIFRPRE8gc3RyaXAgdW53YW50ZWQgYXR0cmlidXRlc1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdmcgPyBjcmVhdGVTdmdFbGVtZW50KG5hbWUpIDogY3JlYXRlRWxlbWVudChuYW1lKTtcbn1cblxuZnVuY3Rpb24gY2xhaW1UZXh0IChub2RlcywgZGF0YSkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dmFyIG5vZGUgPSBub2Rlc1tpXTtcblx0XHRpZiAobm9kZS5ub2RlVHlwZSA9PT0gMykge1xuXHRcdFx0bm9kZS5kYXRhID0gZGF0YTtcblx0XHRcdHJldHVybiBub2Rlcy5zcGxpY2UoaSwgMSlbMF07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGNyZWF0ZVRleHQoZGF0YSk7XG59XG5cbmZ1bmN0aW9uIHNldElucHV0VHlwZShpbnB1dCwgdHlwZSkge1xuXHR0cnkge1xuXHRcdGlucHV0LnR5cGUgPSB0eXBlO1xuXHR9IGNhdGNoIChlKSB7fVxufVxuXG5mdW5jdGlvbiBzZXRTdHlsZShub2RlLCBrZXksIHZhbHVlKSB7XG5cdG5vZGUuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdE9wdGlvbihzZWxlY3QsIHZhbHVlKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0Lm9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHR2YXIgb3B0aW9uID0gc2VsZWN0Lm9wdGlvbnNbaV07XG5cblx0XHRpZiAob3B0aW9uLl9fdmFsdWUgPT09IHZhbHVlKSB7XG5cdFx0XHRvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBzZWxlY3RPcHRpb25zKHNlbGVjdCwgdmFsdWUpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdHZhciBvcHRpb24gPSBzZWxlY3Qub3B0aW9uc1tpXTtcblx0XHRvcHRpb24uc2VsZWN0ZWQgPSB+dmFsdWUuaW5kZXhPZihvcHRpb24uX192YWx1ZSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0VmFsdWUoc2VsZWN0KSB7XG5cdHZhciBzZWxlY3RlZE9wdGlvbiA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpIHx8IHNlbGVjdC5vcHRpb25zWzBdO1xuXHRyZXR1cm4gc2VsZWN0ZWRPcHRpb24gJiYgc2VsZWN0ZWRPcHRpb24uX192YWx1ZTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0TXVsdGlwbGVWYWx1ZShzZWxlY3QpIHtcblx0cmV0dXJuIFtdLm1hcC5jYWxsKHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCc6Y2hlY2tlZCcpLCBmdW5jdGlvbihvcHRpb24pIHtcblx0XHRyZXR1cm4gb3B0aW9uLl9fdmFsdWU7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBkZXN0cm95QmxvY2soYmxvY2ssIGxvb2t1cCkge1xuXHRibG9jay51KCk7XG5cdGJsb2NrLmQoKTtcblx0bG9va3VwW2Jsb2NrLmtleV0gPSBudWxsO1xufVxuXG5mdW5jdGlvbiBvdXRyb0FuZERlc3Ryb3lCbG9jayhibG9jaywgbG9va3VwKSB7XG5cdGJsb2NrLm8oZnVuY3Rpb24oKSB7XG5cdFx0ZGVzdHJveUJsb2NrKGJsb2NrLCBsb29rdXApO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlS2V5ZWRFYWNoKG9sZF9ibG9ja3MsIGNvbXBvbmVudCwgY2hhbmdlZCwga2V5X3Byb3AsIGR5bmFtaWMsIGxpc3QsIGxvb2t1cCwgbm9kZSwgaGFzX291dHJvLCBjcmVhdGVfZWFjaF9ibG9jaywgaW50cm9fbWV0aG9kLCBuZXh0LCBnZXRfY29udGV4dCkge1xuXHR2YXIgbyA9IG9sZF9ibG9ja3MubGVuZ3RoO1xuXHR2YXIgbiA9IGxpc3QubGVuZ3RoO1xuXG5cdHZhciBpID0gbztcblx0dmFyIG9sZF9pbmRleGVzID0ge307XG5cdHdoaWxlIChpLS0pIG9sZF9pbmRleGVzW29sZF9ibG9ja3NbaV0ua2V5XSA9IGk7XG5cblx0dmFyIG5ld19ibG9ja3MgPSBbXTtcblx0dmFyIG5ld19sb29rdXAgPSB7fTtcblx0dmFyIGRlbHRhcyA9IHt9O1xuXG5cdHZhciBpID0gbjtcblx0d2hpbGUgKGktLSkge1xuXHRcdHZhciBrZXkgPSBsaXN0W2ldW2tleV9wcm9wXTtcblx0XHR2YXIgYmxvY2sgPSBsb29rdXBba2V5XTtcblxuXHRcdGlmICghYmxvY2spIHtcblx0XHRcdGJsb2NrID0gY3JlYXRlX2VhY2hfYmxvY2soY29tcG9uZW50LCBrZXksIGdldF9jb250ZXh0KGkpKTtcblx0XHRcdGJsb2NrLmMoKTtcblx0XHR9IGVsc2UgaWYgKGR5bmFtaWMpIHtcblx0XHRcdGJsb2NrLnAoY2hhbmdlZCwgZ2V0X2NvbnRleHQoaSkpO1xuXHRcdH1cblxuXHRcdG5ld19ibG9ja3NbaV0gPSBuZXdfbG9va3VwW2tleV0gPSBibG9jaztcblxuXHRcdGlmIChrZXkgaW4gb2xkX2luZGV4ZXMpIGRlbHRhc1trZXldID0gTWF0aC5hYnMoaSAtIG9sZF9pbmRleGVzW2tleV0pO1xuXHR9XG5cblx0dmFyIHdpbGxfbW92ZSA9IHt9O1xuXHR2YXIgZGlkX21vdmUgPSB7fTtcblxuXHR2YXIgZGVzdHJveSA9IGhhc19vdXRybyA/IG91dHJvQW5kRGVzdHJveUJsb2NrIDogZGVzdHJveUJsb2NrO1xuXG5cdGZ1bmN0aW9uIGluc2VydChibG9jaykge1xuXHRcdGJsb2NrW2ludHJvX21ldGhvZF0obm9kZSwgbmV4dCk7XG5cdFx0bG9va3VwW2Jsb2NrLmtleV0gPSBibG9jaztcblx0XHRuZXh0ID0gYmxvY2suZmlyc3Q7XG5cdFx0bi0tO1xuXHR9XG5cblx0d2hpbGUgKG8gJiYgbikge1xuXHRcdHZhciBuZXdfYmxvY2sgPSBuZXdfYmxvY2tzW24gLSAxXTtcblx0XHR2YXIgb2xkX2Jsb2NrID0gb2xkX2Jsb2Nrc1tvIC0gMV07XG5cdFx0dmFyIG5ld19rZXkgPSBuZXdfYmxvY2sua2V5O1xuXHRcdHZhciBvbGRfa2V5ID0gb2xkX2Jsb2NrLmtleTtcblxuXHRcdGlmIChuZXdfYmxvY2sgPT09IG9sZF9ibG9jaykge1xuXHRcdFx0Ly8gZG8gbm90aGluZ1xuXHRcdFx0bmV4dCA9IG5ld19ibG9jay5maXJzdDtcblx0XHRcdG8tLTtcblx0XHRcdG4tLTtcblx0XHR9XG5cblx0XHRlbHNlIGlmICghbmV3X2xvb2t1cFtvbGRfa2V5XSkge1xuXHRcdFx0Ly8gcmVtb3ZlIG9sZCBibG9ja1xuXHRcdFx0ZGVzdHJveShvbGRfYmxvY2ssIGxvb2t1cCk7XG5cdFx0XHRvLS07XG5cdFx0fVxuXG5cdFx0ZWxzZSBpZiAoIWxvb2t1cFtuZXdfa2V5XSB8fCB3aWxsX21vdmVbbmV3X2tleV0pIHtcblx0XHRcdGluc2VydChuZXdfYmxvY2spO1xuXHRcdH1cblxuXHRcdGVsc2UgaWYgKGRpZF9tb3ZlW29sZF9rZXldKSB7XG5cdFx0XHRvLS07XG5cblx0XHR9IGVsc2UgaWYgKGRlbHRhc1tuZXdfa2V5XSA+IGRlbHRhc1tvbGRfa2V5XSkge1xuXHRcdFx0ZGlkX21vdmVbbmV3X2tleV0gPSB0cnVlO1xuXHRcdFx0aW5zZXJ0KG5ld19ibG9jayk7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0d2lsbF9tb3ZlW29sZF9rZXldID0gdHJ1ZTtcblx0XHRcdG8tLTtcblx0XHR9XG5cdH1cblxuXHR3aGlsZSAoby0tKSB7XG5cdFx0dmFyIG9sZF9ibG9jayA9IG9sZF9ibG9ja3Nbb107XG5cdFx0aWYgKCFuZXdfbG9va3VwW29sZF9ibG9jay5rZXldKSBkZXN0cm95KG9sZF9ibG9jaywgbG9va3VwKTtcblx0fVxuXG5cdHdoaWxlIChuKSBpbnNlcnQobmV3X2Jsb2Nrc1tuIC0gMV0pO1xuXG5cdHJldHVybiBuZXdfYmxvY2tzO1xufVxuXG5mdW5jdGlvbiBnZXRTcHJlYWRVcGRhdGUobGV2ZWxzLCB1cGRhdGVzKSB7XG5cdHZhciB1cGRhdGUgPSB7fTtcblxuXHR2YXIgdG9fbnVsbF9vdXQgPSB7fTtcblx0dmFyIGFjY291bnRlZF9mb3IgPSB7fTtcblxuXHR2YXIgaSA9IGxldmVscy5sZW5ndGg7XG5cdHdoaWxlIChpLS0pIHtcblx0XHR2YXIgbyA9IGxldmVsc1tpXTtcblx0XHR2YXIgbiA9IHVwZGF0ZXNbaV07XG5cblx0XHRpZiAobikge1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIG8pIHtcblx0XHRcdFx0aWYgKCEoa2V5IGluIG4pKSB0b19udWxsX291dFtrZXldID0gMTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yICh2YXIga2V5IGluIG4pIHtcblx0XHRcdFx0aWYgKCFhY2NvdW50ZWRfZm9yW2tleV0pIHtcblx0XHRcdFx0XHR1cGRhdGVba2V5XSA9IG5ba2V5XTtcblx0XHRcdFx0XHRhY2NvdW50ZWRfZm9yW2tleV0gPSAxO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGxldmVsc1tpXSA9IG47XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAodmFyIGtleSBpbiBvKSB7XG5cdFx0XHRcdGFjY291bnRlZF9mb3Jba2V5XSA9IDE7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Zm9yICh2YXIga2V5IGluIHRvX251bGxfb3V0KSB7XG5cdFx0aWYgKCEoa2V5IGluIHVwZGF0ZSkpIHVwZGF0ZVtrZXldID0gdW5kZWZpbmVkO1xuXHR9XG5cblx0cmV0dXJuIHVwZGF0ZTtcbn1cblxuZnVuY3Rpb24gbGluZWFyKHQpIHtcblx0cmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUnVsZShcblx0YSxcblx0Yixcblx0ZGVsdGEsXG5cdGR1cmF0aW9uLFxuXHRlYXNlLFxuXHRmblxuKSB7XG5cdHZhciBrZXlmcmFtZXMgPSAne1xcbic7XG5cblx0Zm9yICh2YXIgcCA9IDA7IHAgPD0gMTsgcCArPSAxNi42NjYgLyBkdXJhdGlvbikge1xuXHRcdHZhciB0ID0gYSArIGRlbHRhICogZWFzZShwKTtcblx0XHRrZXlmcmFtZXMgKz0gcCAqIDEwMCArICcleycgKyBmbih0KSArICd9XFxuJztcblx0fVxuXG5cdHJldHVybiBrZXlmcmFtZXMgKyAnMTAwJSB7JyArIGZuKGIpICsgJ31cXG59Jztcbn1cblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Rhcmtza3lhcHAvc3RyaW5nLWhhc2gvYmxvYi9tYXN0ZXIvaW5kZXguanNcbmZ1bmN0aW9uIGhhc2goc3RyKSB7XG5cdHZhciBoYXNoID0gNTM4MTtcblx0dmFyIGkgPSBzdHIubGVuZ3RoO1xuXG5cdHdoaWxlIChpLS0pIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSBeIHN0ci5jaGFyQ29kZUF0KGkpO1xuXHRyZXR1cm4gaGFzaCA+Pj4gMDtcbn1cblxuZnVuY3Rpb24gd3JhcFRyYW5zaXRpb24oY29tcG9uZW50LCBub2RlLCBmbiwgcGFyYW1zLCBpbnRybywgb3V0Z3JvdXApIHtcblx0dmFyIG9iaiA9IGZuKG5vZGUsIHBhcmFtcyk7XG5cdHZhciBkdXJhdGlvbiA9IG9iai5kdXJhdGlvbiB8fCAzMDA7XG5cdHZhciBlYXNlID0gb2JqLmVhc2luZyB8fCBsaW5lYXI7XG5cdHZhciBjc3NUZXh0O1xuXG5cdC8vIFRPRE8gc2hhcmUgPHN0eWxlPiB0YWcgYmV0d2VlbiBhbGwgdHJhbnNpdGlvbnM/XG5cdGlmIChvYmouY3NzICYmICF0cmFuc2l0aW9uTWFuYWdlci5zdHlsZXNoZWV0KSB7XG5cdFx0dmFyIHN0eWxlID0gY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR0cmFuc2l0aW9uTWFuYWdlci5zdHlsZXNoZWV0ID0gc3R5bGUuc2hlZXQ7XG5cdH1cblxuXHRpZiAoaW50cm8pIHtcblx0XHRpZiAob2JqLmNzcyAmJiBvYmouZGVsYXkpIHtcblx0XHRcdGNzc1RleHQgPSBub2RlLnN0eWxlLmNzc1RleHQ7XG5cdFx0XHRub2RlLnN0eWxlLmNzc1RleHQgKz0gb2JqLmNzcygwKTtcblx0XHR9XG5cblx0XHRpZiAob2JqLnRpY2spIG9iai50aWNrKDApO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHR0OiBpbnRybyA/IDAgOiAxLFxuXHRcdHJ1bm5pbmc6IGZhbHNlLFxuXHRcdHByb2dyYW06IG51bGwsXG5cdFx0cGVuZGluZzogbnVsbCxcblx0XHRydW46IGZ1bmN0aW9uKGludHJvLCBjYWxsYmFjaykge1xuXHRcdFx0dmFyIHByb2dyYW0gPSB7XG5cdFx0XHRcdHN0YXJ0OiB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCkgKyAob2JqLmRlbGF5IHx8IDApLFxuXHRcdFx0XHRpbnRybzogaW50cm8sXG5cdFx0XHRcdGNhbGxiYWNrOiBjYWxsYmFja1xuXHRcdFx0fTtcblxuXHRcdFx0aWYgKG9iai5kZWxheSkge1xuXHRcdFx0XHR0aGlzLnBlbmRpbmcgPSBwcm9ncmFtO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zdGFydChwcm9ncmFtKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCF0aGlzLnJ1bm5pbmcpIHtcblx0XHRcdFx0dGhpcy5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdFx0dHJhbnNpdGlvbk1hbmFnZXIuYWRkKHRoaXMpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0c3RhcnQ6IGZ1bmN0aW9uKHByb2dyYW0pIHtcblx0XHRcdGNvbXBvbmVudC5maXJlKHByb2dyYW0uaW50cm8gPyAnaW50cm8uc3RhcnQnIDogJ291dHJvLnN0YXJ0JywgeyBub2RlOiBub2RlIH0pO1xuXG5cdFx0XHRwcm9ncmFtLmEgPSB0aGlzLnQ7XG5cdFx0XHRwcm9ncmFtLmIgPSBwcm9ncmFtLmludHJvID8gMSA6IDA7XG5cdFx0XHRwcm9ncmFtLmRlbHRhID0gcHJvZ3JhbS5iIC0gcHJvZ3JhbS5hO1xuXHRcdFx0cHJvZ3JhbS5kdXJhdGlvbiA9IGR1cmF0aW9uICogTWF0aC5hYnMocHJvZ3JhbS5iIC0gcHJvZ3JhbS5hKTtcblx0XHRcdHByb2dyYW0uZW5kID0gcHJvZ3JhbS5zdGFydCArIHByb2dyYW0uZHVyYXRpb247XG5cblx0XHRcdGlmIChvYmouY3NzKSB7XG5cdFx0XHRcdGlmIChvYmouZGVsYXkpIG5vZGUuc3R5bGUuY3NzVGV4dCA9IGNzc1RleHQ7XG5cblx0XHRcdFx0cHJvZ3JhbS5ydWxlID0gZ2VuZXJhdGVSdWxlKFxuXHRcdFx0XHRcdHByb2dyYW0uYSxcblx0XHRcdFx0XHRwcm9ncmFtLmIsXG5cdFx0XHRcdFx0cHJvZ3JhbS5kZWx0YSxcblx0XHRcdFx0XHRwcm9ncmFtLmR1cmF0aW9uLFxuXHRcdFx0XHRcdGVhc2UsXG5cdFx0XHRcdFx0b2JqLmNzc1xuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLmFkZFJ1bGUocHJvZ3JhbS5ydWxlLCBwcm9ncmFtLm5hbWUgPSAnX19zdmVsdGVfJyArIGhhc2gocHJvZ3JhbS5ydWxlKSk7XG5cblx0XHRcdFx0bm9kZS5zdHlsZS5hbmltYXRpb24gPSAobm9kZS5zdHlsZS5hbmltYXRpb24gfHwgJycpXG5cdFx0XHRcdFx0LnNwbGl0KCcsICcpXG5cdFx0XHRcdFx0LmZpbHRlcihmdW5jdGlvbihhbmltKSB7XG5cdFx0XHRcdFx0XHQvLyB3aGVuIGludHJvaW5nLCBkaXNjYXJkIG9sZCBhbmltYXRpb25zIGlmIHRoZXJlIGFyZSBhbnlcblx0XHRcdFx0XHRcdHJldHVybiBhbmltICYmIChwcm9ncmFtLmRlbHRhIDwgMCB8fCAhL19fc3ZlbHRlLy50ZXN0KGFuaW0pKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5jb25jYXQocHJvZ3JhbS5uYW1lICsgJyAnICsgcHJvZ3JhbS5kdXJhdGlvbiArICdtcyBsaW5lYXIgMSBmb3J3YXJkcycpXG5cdFx0XHRcdFx0LmpvaW4oJywgJyk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG5cdFx0XHR0aGlzLnBlbmRpbmcgPSBudWxsO1xuXHRcdH0sXG5cdFx0dXBkYXRlOiBmdW5jdGlvbihub3cpIHtcblx0XHRcdHZhciBwcm9ncmFtID0gdGhpcy5wcm9ncmFtO1xuXHRcdFx0aWYgKCFwcm9ncmFtKSByZXR1cm47XG5cblx0XHRcdHZhciBwID0gbm93IC0gcHJvZ3JhbS5zdGFydDtcblx0XHRcdHRoaXMudCA9IHByb2dyYW0uYSArIHByb2dyYW0uZGVsdGEgKiBlYXNlKHAgLyBwcm9ncmFtLmR1cmF0aW9uKTtcblx0XHRcdGlmIChvYmoudGljaykgb2JqLnRpY2sodGhpcy50KTtcblx0XHR9LFxuXHRcdGRvbmU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHByb2dyYW0gPSB0aGlzLnByb2dyYW07XG5cdFx0XHR0aGlzLnQgPSBwcm9ncmFtLmI7XG5cdFx0XHRpZiAob2JqLnRpY2spIG9iai50aWNrKHRoaXMudCk7XG5cdFx0XHRpZiAob2JqLmNzcykgdHJhbnNpdGlvbk1hbmFnZXIuZGVsZXRlUnVsZShub2RlLCBwcm9ncmFtLm5hbWUpO1xuXHRcdFx0cHJvZ3JhbS5jYWxsYmFjaygpO1xuXHRcdFx0cHJvZ3JhbSA9IG51bGw7XG5cdFx0XHR0aGlzLnJ1bm5pbmcgPSAhIXRoaXMucGVuZGluZztcblx0XHR9LFxuXHRcdGFib3J0OiBmdW5jdGlvbigpIHtcblx0XHRcdGlmIChvYmoudGljaykgb2JqLnRpY2soMSk7XG5cdFx0XHRpZiAob2JqLmNzcykgdHJhbnNpdGlvbk1hbmFnZXIuZGVsZXRlUnVsZShub2RlLCB0aGlzLnByb2dyYW0ubmFtZSk7XG5cdFx0XHR0aGlzLnByb2dyYW0gPSB0aGlzLnBlbmRpbmcgPSBudWxsO1xuXHRcdFx0dGhpcy5ydW5uaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSB7XG5cdHJ1bm5pbmc6IGZhbHNlLFxuXHR0cmFuc2l0aW9uczogW10sXG5cdGJvdW5kOiBudWxsLFxuXHRzdHlsZXNoZWV0OiBudWxsLFxuXHRhY3RpdmVSdWxlczoge30sXG5cblx0YWRkOiBmdW5jdGlvbih0cmFuc2l0aW9uKSB7XG5cdFx0dGhpcy50cmFuc2l0aW9ucy5wdXNoKHRyYW5zaXRpb24pO1xuXG5cdFx0aWYgKCF0aGlzLnJ1bm5pbmcpIHtcblx0XHRcdHRoaXMucnVubmluZyA9IHRydWU7XG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5ib3VuZCB8fCAodGhpcy5ib3VuZCA9IHRoaXMubmV4dC5iaW5kKHRoaXMpKSk7XG5cdFx0fVxuXHR9LFxuXG5cdGFkZFJ1bGU6IGZ1bmN0aW9uKHJ1bGUsIG5hbWUpIHtcblx0XHRpZiAoIXRoaXMuYWN0aXZlUnVsZXNbbmFtZV0pIHtcblx0XHRcdHRoaXMuYWN0aXZlUnVsZXNbbmFtZV0gPSB0cnVlO1xuXHRcdFx0dGhpcy5zdHlsZXNoZWV0Lmluc2VydFJ1bGUoJ0BrZXlmcmFtZXMgJyArIG5hbWUgKyAnICcgKyBydWxlLCB0aGlzLnN0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcblx0XHR9XG5cdH0sXG5cblx0bmV4dDogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5ydW5uaW5nID0gZmFsc2U7XG5cblx0XHR2YXIgbm93ID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuXHRcdHZhciBpID0gdGhpcy50cmFuc2l0aW9ucy5sZW5ndGg7XG5cblx0XHR3aGlsZSAoaS0tKSB7XG5cdFx0XHR2YXIgdHJhbnNpdGlvbiA9IHRoaXMudHJhbnNpdGlvbnNbaV07XG5cblx0XHRcdGlmICh0cmFuc2l0aW9uLnByb2dyYW0gJiYgbm93ID49IHRyYW5zaXRpb24ucHJvZ3JhbS5lbmQpIHtcblx0XHRcdFx0dHJhbnNpdGlvbi5kb25lKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0cmFuc2l0aW9uLnBlbmRpbmcgJiYgbm93ID49IHRyYW5zaXRpb24ucGVuZGluZy5zdGFydCkge1xuXHRcdFx0XHR0cmFuc2l0aW9uLnN0YXJ0KHRyYW5zaXRpb24ucGVuZGluZyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0cmFuc2l0aW9uLnJ1bm5pbmcpIHtcblx0XHRcdFx0dHJhbnNpdGlvbi51cGRhdGUobm93KTtcblx0XHRcdFx0dGhpcy5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSBpZiAoIXRyYW5zaXRpb24ucGVuZGluZykge1xuXHRcdFx0XHR0aGlzLnRyYW5zaXRpb25zLnNwbGljZShpLCAxKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodGhpcy5ydW5uaW5nKSB7XG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5ib3VuZCk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLnN0eWxlc2hlZXQpIHtcblx0XHRcdHZhciBpID0gdGhpcy5zdHlsZXNoZWV0LmNzc1J1bGVzLmxlbmd0aDtcblx0XHRcdHdoaWxlIChpLS0pIHRoaXMuc3R5bGVzaGVldC5kZWxldGVSdWxlKGkpO1xuXHRcdFx0dGhpcy5hY3RpdmVSdWxlcyA9IHt9O1xuXHRcdH1cblx0fSxcblxuXHRkZWxldGVSdWxlOiBmdW5jdGlvbihub2RlLCBuYW1lKSB7XG5cdFx0bm9kZS5zdHlsZS5hbmltYXRpb24gPSBub2RlLnN0eWxlLmFuaW1hdGlvblxuXHRcdFx0LnNwbGl0KCcsICcpXG5cdFx0XHQuZmlsdGVyKGZ1bmN0aW9uKGFuaW0pIHtcblx0XHRcdFx0cmV0dXJuIGFuaW0uaW5kZXhPZihuYW1lKSA9PT0gLTE7XG5cdFx0XHR9KVxuXHRcdFx0LmpvaW4oJywgJyk7XG5cdH1cbn07XG5cbmZ1bmN0aW9uIGJsYW5rT2JqZWN0KCkge1xuXHRyZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsKTtcbn1cblxuZnVuY3Rpb24gZGVzdHJveShkZXRhY2gpIHtcblx0dGhpcy5kZXN0cm95ID0gbm9vcDtcblx0dGhpcy5maXJlKCdkZXN0cm95Jyk7XG5cdHRoaXMuc2V0ID0gdGhpcy5nZXQgPSBub29wO1xuXG5cdGlmIChkZXRhY2ggIT09IGZhbHNlKSB0aGlzLl9mcmFnbWVudC51KCk7XG5cdHRoaXMuX2ZyYWdtZW50LmQoKTtcblx0dGhpcy5fZnJhZ21lbnQgPSB0aGlzLl9zdGF0ZSA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3lEZXYoZGV0YWNoKSB7XG5cdGRlc3Ryb3kuY2FsbCh0aGlzLCBkZXRhY2gpO1xuXHR0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLndhcm4oJ0NvbXBvbmVudCB3YXMgYWxyZWFkeSBkZXN0cm95ZWQnKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gX2RpZmZlcnMoYSwgYikge1xuXHRyZXR1cm4gYSAhPSBhID8gYiA9PSBiIDogYSAhPT0gYiB8fCAoKGEgJiYgdHlwZW9mIGEgPT09ICdvYmplY3QnKSB8fCB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5cbmZ1bmN0aW9uIF9kaWZmZXJzSW1tdXRhYmxlKGEsIGIpIHtcblx0cmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGI7XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoT2JzZXJ2ZXJzKGNvbXBvbmVudCwgZ3JvdXAsIGNoYW5nZWQsIG5ld1N0YXRlLCBvbGRTdGF0ZSkge1xuXHRmb3IgKHZhciBrZXkgaW4gZ3JvdXApIHtcblx0XHRpZiAoIWNoYW5nZWRba2V5XSkgY29udGludWU7XG5cblx0XHR2YXIgbmV3VmFsdWUgPSBuZXdTdGF0ZVtrZXldO1xuXHRcdHZhciBvbGRWYWx1ZSA9IG9sZFN0YXRlW2tleV07XG5cblx0XHR2YXIgY2FsbGJhY2tzID0gZ3JvdXBba2V5XTtcblx0XHRpZiAoIWNhbGxiYWNrcykgY29udGludWU7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0dmFyIGNhbGxiYWNrID0gY2FsbGJhY2tzW2ldO1xuXHRcdFx0aWYgKGNhbGxiYWNrLl9fY2FsbGluZykgY29udGludWU7XG5cblx0XHRcdGNhbGxiYWNrLl9fY2FsbGluZyA9IHRydWU7XG5cdFx0XHRjYWxsYmFjay5jYWxsKGNvbXBvbmVudCwgbmV3VmFsdWUsIG9sZFZhbHVlKTtcblx0XHRcdGNhbGxiYWNrLl9fY2FsbGluZyA9IGZhbHNlO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBmaXJlKGV2ZW50TmFtZSwgZGF0YSkge1xuXHR2YXIgaGFuZGxlcnMgPVxuXHRcdGV2ZW50TmFtZSBpbiB0aGlzLl9oYW5kbGVycyAmJiB0aGlzLl9oYW5kbGVyc1tldmVudE5hbWVdLnNsaWNlKCk7XG5cdGlmICghaGFuZGxlcnMpIHJldHVybjtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGhhbmRsZXJzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0aGFuZGxlcnNbaV0uY2FsbCh0aGlzLCBkYXRhKTtcblx0fVxufVxuXG5mdW5jdGlvbiBnZXQoa2V5KSB7XG5cdHJldHVybiBrZXkgPyB0aGlzLl9zdGF0ZVtrZXldIDogdGhpcy5fc3RhdGU7XG59XG5cbmZ1bmN0aW9uIGluaXQoY29tcG9uZW50LCBvcHRpb25zKSB7XG5cdGNvbXBvbmVudC5fb2JzZXJ2ZXJzID0geyBwcmU6IGJsYW5rT2JqZWN0KCksIHBvc3Q6IGJsYW5rT2JqZWN0KCkgfTtcblx0Y29tcG9uZW50Ll9oYW5kbGVycyA9IGJsYW5rT2JqZWN0KCk7XG5cdGNvbXBvbmVudC5fYmluZCA9IG9wdGlvbnMuX2JpbmQ7XG5cblx0Y29tcG9uZW50Lm9wdGlvbnMgPSBvcHRpb25zO1xuXHRjb21wb25lbnQucm9vdCA9IG9wdGlvbnMucm9vdCB8fCBjb21wb25lbnQ7XG5cdGNvbXBvbmVudC5zdG9yZSA9IGNvbXBvbmVudC5yb290LnN0b3JlIHx8IG9wdGlvbnMuc3RvcmU7XG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoa2V5LCBjYWxsYmFjaywgb3B0aW9ucykge1xuXHR2YXIgZ3JvdXAgPSBvcHRpb25zICYmIG9wdGlvbnMuZGVmZXJcblx0XHQ/IHRoaXMuX29ic2VydmVycy5wb3N0XG5cdFx0OiB0aGlzLl9vYnNlcnZlcnMucHJlO1xuXG5cdChncm91cFtrZXldIHx8IChncm91cFtrZXldID0gW10pKS5wdXNoKGNhbGxiYWNrKTtcblxuXHRpZiAoIW9wdGlvbnMgfHwgb3B0aW9ucy5pbml0ICE9PSBmYWxzZSkge1xuXHRcdGNhbGxiYWNrLl9fY2FsbGluZyA9IHRydWU7XG5cdFx0Y2FsbGJhY2suY2FsbCh0aGlzLCB0aGlzLl9zdGF0ZVtrZXldKTtcblx0XHRjYWxsYmFjay5fX2NhbGxpbmcgPSBmYWxzZTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0Y2FuY2VsOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpbmRleCA9IGdyb3VwW2tleV0uaW5kZXhPZihjYWxsYmFjayk7XG5cdFx0XHRpZiAofmluZGV4KSBncm91cFtrZXldLnNwbGljZShpbmRleCwgMSk7XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBvYnNlcnZlRGV2KGtleSwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcblx0dmFyIGMgPSAoa2V5ID0gJycgKyBrZXkpLnNlYXJjaCgvWy5bXS8pO1xuXHRpZiAoYyA+IC0xKSB7XG5cdFx0dmFyIG1lc3NhZ2UgPVxuXHRcdFx0J1RoZSBmaXJzdCBhcmd1bWVudCB0byBjb21wb25lbnQub2JzZXJ2ZSguLi4pIG11c3QgYmUgdGhlIG5hbWUgb2YgYSB0b3AtbGV2ZWwgcHJvcGVydHknO1xuXHRcdGlmIChjID4gMClcblx0XHRcdG1lc3NhZ2UgKz0gXCIsIGkuZS4gJ1wiICsga2V5LnNsaWNlKDAsIGMpICsgXCInIHJhdGhlciB0aGFuICdcIiArIGtleSArIFwiJ1wiO1xuXG5cdFx0dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuXHR9XG5cblx0cmV0dXJuIG9ic2VydmUuY2FsbCh0aGlzLCBrZXksIGNhbGxiYWNrLCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gb24oZXZlbnROYW1lLCBoYW5kbGVyKSB7XG5cdGlmIChldmVudE5hbWUgPT09ICd0ZWFyZG93bicpIHJldHVybiB0aGlzLm9uKCdkZXN0cm95JywgaGFuZGxlcik7XG5cblx0dmFyIGhhbmRsZXJzID0gdGhpcy5faGFuZGxlcnNbZXZlbnROYW1lXSB8fCAodGhpcy5faGFuZGxlcnNbZXZlbnROYW1lXSA9IFtdKTtcblx0aGFuZGxlcnMucHVzaChoYW5kbGVyKTtcblxuXHRyZXR1cm4ge1xuXHRcdGNhbmNlbDogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaW5kZXggPSBoYW5kbGVycy5pbmRleE9mKGhhbmRsZXIpO1xuXHRcdFx0aWYgKH5pbmRleCkgaGFuZGxlcnMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIG9uRGV2KGV2ZW50TmFtZSwgaGFuZGxlcikge1xuXHRpZiAoZXZlbnROYW1lID09PSAndGVhcmRvd24nKSB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XCJVc2UgY29tcG9uZW50Lm9uKCdkZXN0cm95JywgLi4uKSBpbnN0ZWFkIG9mIGNvbXBvbmVudC5vbigndGVhcmRvd24nLCAuLi4pIHdoaWNoIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgdW5zdXBwb3J0ZWQgaW4gU3ZlbHRlIDJcIlxuXHRcdCk7XG5cdFx0cmV0dXJuIHRoaXMub24oJ2Rlc3Ryb3knLCBoYW5kbGVyKTtcblx0fVxuXG5cdHJldHVybiBvbi5jYWxsKHRoaXMsIGV2ZW50TmFtZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIHJ1bihmbikge1xuXHRmbigpO1xufVxuXG5mdW5jdGlvbiBzZXQobmV3U3RhdGUpIHtcblx0dGhpcy5fc2V0KGFzc2lnbih7fSwgbmV3U3RhdGUpKTtcblx0aWYgKHRoaXMucm9vdC5fbG9jaykgcmV0dXJuO1xuXHR0aGlzLnJvb3QuX2xvY2sgPSB0cnVlO1xuXHRjYWxsQWxsKHRoaXMucm9vdC5fYmVmb3JlY3JlYXRlKTtcblx0Y2FsbEFsbCh0aGlzLnJvb3QuX29uY3JlYXRlKTtcblx0Y2FsbEFsbCh0aGlzLnJvb3QuX2FmdGVyY3JlYXRlKTtcblx0dGhpcy5yb290Ll9sb2NrID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIF9zZXQobmV3U3RhdGUpIHtcblx0dmFyIG9sZFN0YXRlID0gdGhpcy5fc3RhdGUsXG5cdFx0Y2hhbmdlZCA9IHt9LFxuXHRcdGRpcnR5ID0gZmFsc2U7XG5cblx0Zm9yICh2YXIga2V5IGluIG5ld1N0YXRlKSB7XG5cdFx0aWYgKHRoaXMuX2RpZmZlcnMobmV3U3RhdGVba2V5XSwgb2xkU3RhdGVba2V5XSkpIGNoYW5nZWRba2V5XSA9IGRpcnR5ID0gdHJ1ZTtcblx0fVxuXHRpZiAoIWRpcnR5KSByZXR1cm47XG5cblx0dGhpcy5fc3RhdGUgPSBhc3NpZ24oYXNzaWduKHt9LCBvbGRTdGF0ZSksIG5ld1N0YXRlKTtcblx0dGhpcy5fcmVjb21wdXRlKGNoYW5nZWQsIHRoaXMuX3N0YXRlKTtcblx0aWYgKHRoaXMuX2JpbmQpIHRoaXMuX2JpbmQoY2hhbmdlZCwgdGhpcy5fc3RhdGUpO1xuXG5cdGlmICh0aGlzLl9mcmFnbWVudCkge1xuXHRcdGRpc3BhdGNoT2JzZXJ2ZXJzKHRoaXMsIHRoaXMuX29ic2VydmVycy5wcmUsIGNoYW5nZWQsIHRoaXMuX3N0YXRlLCBvbGRTdGF0ZSk7XG5cdFx0dGhpcy5fZnJhZ21lbnQucChjaGFuZ2VkLCB0aGlzLl9zdGF0ZSk7XG5cdFx0ZGlzcGF0Y2hPYnNlcnZlcnModGhpcywgdGhpcy5fb2JzZXJ2ZXJzLnBvc3QsIGNoYW5nZWQsIHRoaXMuX3N0YXRlLCBvbGRTdGF0ZSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gc2V0RGV2KG5ld1N0YXRlKSB7XG5cdGlmICh0eXBlb2YgbmV3U3RhdGUgIT09ICdvYmplY3QnKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0dGhpcy5fZGVidWdOYW1lICsgJy5zZXQgd2FzIGNhbGxlZCB3aXRob3V0IGFuIG9iamVjdCBvZiBkYXRhIGtleS12YWx1ZXMgdG8gdXBkYXRlLidcblx0XHQpO1xuXHR9XG5cblx0dGhpcy5fY2hlY2tSZWFkT25seShuZXdTdGF0ZSk7XG5cdHNldC5jYWxsKHRoaXMsIG5ld1N0YXRlKTtcbn1cblxuZnVuY3Rpb24gY2FsbEFsbChmbnMpIHtcblx0d2hpbGUgKGZucyAmJiBmbnMubGVuZ3RoKSBmbnMuc2hpZnQoKSgpO1xufVxuXG5mdW5jdGlvbiBfbW91bnQodGFyZ2V0LCBhbmNob3IpIHtcblx0dGhpcy5fZnJhZ21lbnRbdGhpcy5fZnJhZ21lbnQuaSA/ICdpJyA6ICdtJ10odGFyZ2V0LCBhbmNob3IgfHwgbnVsbCk7XG59XG5cbmZ1bmN0aW9uIF91bm1vdW50KCkge1xuXHRpZiAodGhpcy5fZnJhZ21lbnQpIHRoaXMuX2ZyYWdtZW50LnUoKTtcbn1cblxuZnVuY3Rpb24gaXNQcm9taXNlKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn1cblxudmFyIFBFTkRJTkcgPSB7fTtcbnZhciBTVUNDRVNTID0ge307XG52YXIgRkFJTFVSRSA9IHt9O1xuXG5mdW5jdGlvbiByZW1vdmVGcm9tU3RvcmUoKSB7XG5cdHRoaXMuc3RvcmUuX3JlbW92ZSh0aGlzKTtcbn1cblxudmFyIHByb3RvID0ge1xuXHRkZXN0cm95OiBkZXN0cm95LFxuXHRnZXQ6IGdldCxcblx0ZmlyZTogZmlyZSxcblx0b2JzZXJ2ZTogb2JzZXJ2ZSxcblx0b246IG9uLFxuXHRzZXQ6IHNldCxcblx0dGVhcmRvd246IGRlc3Ryb3ksXG5cdF9yZWNvbXB1dGU6IG5vb3AsXG5cdF9zZXQ6IF9zZXQsXG5cdF9tb3VudDogX21vdW50LFxuXHRfdW5tb3VudDogX3VubW91bnQsXG5cdF9kaWZmZXJzOiBfZGlmZmVyc1xufTtcblxudmFyIHByb3RvRGV2ID0ge1xuXHRkZXN0cm95OiBkZXN0cm95RGV2LFxuXHRnZXQ6IGdldCxcblx0ZmlyZTogZmlyZSxcblx0b2JzZXJ2ZTogb2JzZXJ2ZURldixcblx0b246IG9uRGV2LFxuXHRzZXQ6IHNldERldixcblx0dGVhcmRvd246IGRlc3Ryb3lEZXYsXG5cdF9yZWNvbXB1dGU6IG5vb3AsXG5cdF9zZXQ6IF9zZXQsXG5cdF9tb3VudDogX21vdW50LFxuXHRfdW5tb3VudDogX3VubW91bnQsXG5cdF9kaWZmZXJzOiBfZGlmZmVyc1xufTtcblxuZXhwb3J0IHsgYmxhbmtPYmplY3QsIGRlc3Ryb3ksIGRlc3Ryb3lEZXYsIF9kaWZmZXJzLCBfZGlmZmVyc0ltbXV0YWJsZSwgZGlzcGF0Y2hPYnNlcnZlcnMsIGZpcmUsIGdldCwgaW5pdCwgb2JzZXJ2ZSwgb2JzZXJ2ZURldiwgb24sIG9uRGV2LCBydW4sIHNldCwgX3NldCwgc2V0RGV2LCBjYWxsQWxsLCBfbW91bnQsIF91bm1vdW50LCBpc1Byb21pc2UsIFBFTkRJTkcsIFNVQ0NFU1MsIEZBSUxVUkUsIHJlbW92ZUZyb21TdG9yZSwgcHJvdG8sIHByb3RvRGV2LCBhcHBlbmROb2RlLCBpbnNlcnROb2RlLCBkZXRhY2hOb2RlLCBkZXRhY2hCZXR3ZWVuLCBkZXRhY2hCZWZvcmUsIGRldGFjaEFmdGVyLCByZWluc2VydEJldHdlZW4sIHJlaW5zZXJ0Q2hpbGRyZW4sIHJlaW5zZXJ0QWZ0ZXIsIHJlaW5zZXJ0QmVmb3JlLCBkZXN0cm95RWFjaCwgY3JlYXRlRnJhZ21lbnQsIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZVN2Z0VsZW1lbnQsIGNyZWF0ZVRleHQsIGNyZWF0ZUNvbW1lbnQsIGFkZExpc3RlbmVyLCByZW1vdmVMaXN0ZW5lciwgc2V0QXR0cmlidXRlLCBzZXRBdHRyaWJ1dGVzLCByZW1vdmVBdHRyaWJ1dGUsIHNldFhsaW5rQXR0cmlidXRlLCBnZXRCaW5kaW5nR3JvdXBWYWx1ZSwgdG9OdW1iZXIsIHRpbWVSYW5nZXNUb0FycmF5LCBjaGlsZHJlbiwgY2xhaW1FbGVtZW50LCBjbGFpbVRleHQsIHNldElucHV0VHlwZSwgc2V0U3R5bGUsIHNlbGVjdE9wdGlvbiwgc2VsZWN0T3B0aW9ucywgc2VsZWN0VmFsdWUsIHNlbGVjdE11bHRpcGxlVmFsdWUsIGRlc3Ryb3lCbG9jaywgb3V0cm9BbmREZXN0cm95QmxvY2ssIHVwZGF0ZUtleWVkRWFjaCwgZ2V0U3ByZWFkVXBkYXRlLCBsaW5lYXIsIGdlbmVyYXRlUnVsZSwgaGFzaCwgd3JhcFRyYW5zaXRpb24sIHRyYW5zaXRpb25NYW5hZ2VyLCBub29wLCBhc3NpZ24gfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XG5cbm5ldyBBcHAoeyB0YXJnZXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKSB9KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9pbmRleC5qcyIsIjxkaXYgY2xhc3M9XCJmb3JtLWJveFwiPlxuXHQ8WWVhck1vbnRoUGlja2VyIHJlZjpwaWNrZXI+PC9ZZWFyTW9udGhQaWNrZXI+XG5cdDxGb3JtIHJlZjpmb3JtPjwvRm9ybT5cbjwvZGl2PlxuPFRhYmxlIHJlZjp0YWJsZT48L1RhYmxlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFllYXJNb250aFBpY2tlciBmcm9tICcuLi95ZWFyLW1vbnRoLXBpY2tlcic7XG5pbXBvcnQgRm9ybSBmcm9tICcuLi9mb3JtJztcbmltcG9ydCBUYWJsZSBmcm9tICcuLi90YWJsZSc7XG5pbXBvcnQge0NhdGVnb3JpZXMsIEV4cGVuc2VzfSBmcm9tICcuLi9kYXRhJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhICgpIHsgcmV0dXJuIHt9OyB9LFxuXHRjb21wb25lbnRzOiB7IEZvcm0sIFRhYmxlLCBZZWFyTW9udGhQaWNrZXIgfSxcblx0b25jcmVhdGUgKCkge1xuXHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDcpO1xuXHRcdENhdGVnb3JpZXMuZ2V0KCkudGhlbihjYXRlZ29yaWVzID0+IHRoaXMucmVmcy5mb3JtLnNldCh7IGRhdGUsIGNhdGVnb3JpZXMgfSkpO1xuXHRcdHRoaXMubG9hZFRhYmxlKGRhdGUpO1xuXG5cdFx0dGhpcy5yZWZzLmZvcm0ub24oJ2NoYW5nZScsIHRoaXMub25Gb3JtQ2hhbmdlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMucmVmcy5mb3JtLm9uKCdyZW1vdmUnLCB0aGlzLm9uUmVtb3ZlSXRlbS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnJlZnMuZm9ybS5vbignc3VibWl0JywgdGhpcy5vbkZvcm1TdWJtaXQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5yZWZzLmZvcm0ub24oJ2Vycm9yJywgdGhpcy5vbkZvcm1FcnJvci5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnJlZnMucGlja2VyLm9uKCdjaGFuZ2UnLCB0aGlzLm9uRGF0ZUNoYW5nZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnJlZnMudGFibGUub24oJ2NsaWNrJywgdGhpcy5vblRhYmxlQ2xpY2suYmluZCh0aGlzKSk7XG5cdH0sXG5cblx0bWV0aG9kczoge1xuXHRcdGxvYWRUYWJsZSAoZGF0ZSkge1xuXHRcdFx0aWYgKCFkYXRlKSBkYXRlID0gdGhpcy5sYXN0RGF0ZTtcblx0XHRcdGVsc2UgdGhpcy5sYXN0RGF0ZSA9IGRhdGU7XG5cdFx0XHRFeHBlbnNlcy5nZXQoZGF0ZSkudGhlbihkYXRhID0+IHtcblx0XHRcdFx0dGhpcy5sYXN0VGFibGVEYXRhID0gZGF0YTtcblx0XHRcdFx0dGhpcy5yZWZzLnRhYmxlLnNldCh7IGRhdGEgfSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0b25EYXRlQ2hhbmdlIChkYXRlKSB7IHRoaXMucmVmcy5mb3JtLnNldCh7IGRhdGU6IGRhdGUuZGF0ZVN0ciB9KTsgfSxcblxuXHRcdG9uRm9ybUNoYW5nZSAoZGF0YSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ2Zvcm0gY2hhbmdlZCcsIGRhdGEpO1xuXHRcdH0sXG5cblx0XHRvbkZvcm1TdWJtaXQgKGRhdGEpIHtcblx0XHRcdEV4cGVuc2VzLnNhdmUoZGF0YSkudGhlbigoKSA9PiB7XG5cdFx0XHRcdHRoaXMubG9hZFRhYmxlKCk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0b25SZW1vdmVJdGVtIChpdGVtKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhpdGVtKTtcblx0XHR9LFxuXG5cdFx0b25Gb3JtRXJyb3IgKGVycikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyKTtcdC8vIFRPRE86IHRvYXN0P1xuXHRcdH0sXG5cblx0XHRvblRhYmxlQ2xpY2sgKGl0ZW0pIHsgdGhpcy5yZWZzLmZvcm0uZWRpdChpdGVtKTsgfSxcblx0fVxufTtcblxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvYXBwL2luZGV4Lmh0bWwiLCI8ZGl2IGNsYXNzPVwieWVhci1tb250aC1waWNrZXIge3tpc1RvZGF5ID8gJ2lzLXRvZGF5JzogJyd9fVwiIG9uOndoZWVsPVwib253aGVlbChldmVudClcIj5cblx0PGJ1dHRvbiByZWY6bGVmdEJ1dHRvbiBjbGFzcz1cImJ0bi1wcmV2XCIgdGl0bGU9XCJQcmV2aW91cyBtb250aFwiXG5cdFx0b246a2V5ZG93bj1cImtleWRvd24oZXZlbnQua2V5LCAtMSlcIlxuXHRcdG9uOmtleXVwPVwia2V5dXAoZXZlbnQua2V5KVwiXG5cdFx0b246bW91c2Vkb3duPVwidGljaygtMSlcIlxuXHRcdG9uOm1vdXNlb3V0PVwibXVwKClcIlxuXHRcdG9uOm1vdXNldXA9XCJtdXAoKVwiPjxpIGNsYXNzPVwiaW9uLWlvcy1hcnJvdy1iYWNrXCI+PC9pPjwvYnV0dG9uPlxuXG5cdDxzcGFuIGNsYXNzPVwiZGF5XCI+e3ttb250aHNbbW9udGhdfX0ge3t5ZWFyfX08L3NwYW4+XG5cblx0PGJ1dHRvbiByZWY6cmlnaHRCdXR0b24gY2xhc3M9XCJidG4tbmV4dFwiIHRpdGxlPVwiTmV4dCBtb250aFwiXG5cdFx0b246a2V5ZG93bj1cImtleWRvd24oZXZlbnQua2V5LCAxKVwiXG5cdFx0b246a2V5dXA9XCJrZXl1cChldmVudC5rZXkpXCJcblx0XHRvbjptb3VzZWRvd249XCJ0aWNrKDEpXCJcblx0XHRvbjptb3VzZW91dD1cIm11cCgpXCJcblx0XHRvbjptb3VzZXVwPVwibXVwKClcIj48aSBjbGFzcz1cImlvbi1pb3MtYXJyb3ctZm9yd2FyZFwiPjwvaT48L2J1dHRvbj5cblxuXHQ8YnV0dG9uIHRpdGxlPVwiVG9kYXlcIiBjbGFzcz1cImJ0bi10b2RheVwiIG9uOmNsaWNrPVwicmVzZXQoKVwiPjxpIGNsYXNzPVwiaW9uLW1kLXVuZG9cIj48L2k+PC9idXR0b24+XG48L2Rpdj5cblxuPHNjcmlwdD5cbmZ1bmN0aW9uIHplcm9TdGF0ZSAoKSB7XG5cdGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuXHRjb25zdCBtb250aCA9IGQuZ2V0TW9udGgoKTtcblx0Y29uc3QgeWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcblx0Y29uc3QgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXHRyZXR1cm4geyBtb250aHMsIG1vbnRoLCB5ZWFyLCBjdXJyZW50OiB7IG1vbnRoLCB5ZWFyIH0gfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhICgpIHsgcmV0dXJuIHplcm9TdGF0ZSgpOyB9LFxuXHRjb21wdXRlZDoge1xuXHRcdGlzVG9kYXk6IChtb250aCwgeWVhciwgY3VycmVudCkgPT4gKG1vbnRoID09PSBjdXJyZW50Lm1vbnRoICYmIHllYXIgPT09IGN1cnJlbnQueWVhciksXG5cdFx0ZGF0ZVN0cjogKG1vbnRoLCB5ZWFyKSA9PiBgJHt5ZWFyfS0keygnMCcgKyAobW9udGggKyAxKSkuc3Vic3RyKC0yKX1gXG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRvbndoZWVsIChlKSB7XG5cdFx0XHRjb25zdCB0aHJlc2hvbGQgPSAyO1xuXHRcdFx0bGV0IHZhbCA9IG51bGw7XG5cdFx0XHRpZiAoZS5kZWx0YVkgPCAtdGhyZXNob2xkKSB2YWwgPSAtMTtcblx0XHRcdGVsc2UgaWYgKGUuZGVsdGFZID4gdGhyZXNob2xkKSB2YWwgPSAxO1xuXHRcdFx0aWYgKHZhbCkgdGhpcy53aGVlbFRocm90dGxlKHZhbCwgZmFsc2UpO1xuXHRcdH0sXG5cblx0XHR3aGVlbFRocm90dGxlICh2YWx1ZSkge1xuXHRcdFx0aWYgKCF0aGlzLnRocm90dGxlcikge1xuXHRcdFx0XHR0aGlzLmdvKHZhbHVlKTtcblx0XHRcdFx0dGhpcy5ub3RpZnkoKTtcblx0XHRcdFx0dGhpcy50aHJvdHRsZXIgPSBzZXRUaW1lb3V0KCgpID0+ICh0aGlzLnRocm90dGxlciA9IG51bGwpLCAxMDApO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRrZXl1cCAoa2V5KSB7XG5cdFx0XHR0aGlzLmtleUlzRG93biA9IGZhbHNlO1xuXHRcdFx0aWYgKHRoaXMudGlja2VyKSBjbGVhclRpbWVvdXQodGhpcy50aWNrZXIpO1xuXHRcdFx0aWYgKGtleSA9PT0gJyAnIHx8IGtleSA9PT0gJ0VudGVyJyB8fFxuXHRcdFx0XHRrZXkgPT09ICdBcnJvd0xlZnQnIHx8IGtleSA9PT0gJ0Fycm93UmlnaHQnIHx8XG5cdFx0XHRcdGtleSA9PT0gJ0Fycm93RG93bicgfHwga2V5ID09PSAnQXJyb3dVcCcpIHRoaXMubm90aWZ5KCk7XG5cdFx0fSxcblxuXHRcdGtleWRvd24gKGtleSwgdmFsdWUpIHtcblx0XHRcdGlmICh0aGlzLmtleUlzRG93bikgcmV0dXJuO1xuXHRcdFx0aWYgKGtleSA9PT0gJ0Fycm93TGVmdCcgfHwga2V5ID09PSAnQXJyb3dEb3duJykge1xuXHRcdFx0XHR0aGlzLnJlZnMubGVmdEJ1dHRvbi5mb2N1cygpO1xuXHRcdFx0XHR0aGlzLmtleUlzRG93biA9IHRydWU7XG5cdFx0XHRcdHJldHVybiB0aGlzLnRpY2soLTEpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGtleSA9PT0gJ0Fycm93UmlnaHQnIHx8IGtleSA9PT0gJ0Fycm93VXAnKSB7XG5cdFx0XHRcdHRoaXMucmVmcy5yaWdodEJ1dHRvbi5mb2N1cygpO1xuXHRcdFx0XHR0aGlzLmtleUlzRG93biA9IHRydWU7XG5cdFx0XHRcdHJldHVybiB0aGlzLnRpY2soMSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoa2V5ID09PSAnICcgfHwga2V5ID09PSAnRW50ZXInKSB7XG5cdFx0XHRcdHRoaXMua2V5SXNEb3duID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy50aWNrKHZhbHVlKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0bXVwICgpIHtcblx0XHRcdGlmICh0aGlzLnRpY2tlcikgY2xlYXJUaW1lb3V0KHRoaXMudGlja2VyKTtcblx0XHRcdGlmICh0aGlzLm1vdXNlSXNEb3duKSB0aGlzLm5vdGlmeSgpO1xuXHRcdFx0dGhpcy5tb3VzZUlzRG93biA9IGZhbHNlO1xuXHRcdH0sXG5cblx0XHR0aWNrICh2YWx1ZSwgZGVsYXkgPSAzMDApIHtcblx0XHRcdGlmICh0aGlzLnRpY2tlcikgY2xlYXJUaW1lb3V0KHRoaXMudGlja2VyKTtcblx0XHRcdHRoaXMuZ28odmFsdWUpO1xuXHRcdFx0aWYgKHRoaXMuZ2V0KCdpc1RvZGF5JykpIHJldHVybiB0aGlzLm5vdGlmeSgpO1xuXHRcdFx0dGhpcy5tb3VzZUlzRG93biA9IHRydWU7XG5cdFx0XHR0aGlzLnRpY2tlciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRkZWxheSA9IE1hdGgubWF4KDYwLCBkZWxheSAtIDQwKTtcblx0XHRcdFx0dGhpcy50aWNrKHZhbHVlLCBkZWxheSk7XG5cdFx0XHR9LCBkZWxheSk7XG5cdFx0fSxcblxuXHRcdGdvICh2YWx1ZSkge1xuXHRcdFx0bGV0IHttb250aCwgeWVhcn0gPSB0aGlzLmdldCgpO1xuXHRcdFx0bW9udGggKz0gdmFsdWU7XG5cdFx0XHRpZiAobW9udGggPCAwKSB7IG1vbnRoID0gMTE7IHllYXIgLT0gMTsgfVxuXHRcdFx0ZWxzZSBpZiAobW9udGggPiAxMSkgeyBtb250aCA9IDA7IHllYXIgKz0gMTsgfVxuXHRcdFx0dGhpcy5zZXQoeyBtb250aCwgeWVhciB9KTtcblx0XHR9LFxuXG5cdFx0bm90aWZ5ICgpIHtcblx0XHRcdGNvbnN0IHttb250aCwgeWVhciwgZGF0ZVN0cn0gPSB0aGlzLmdldCgpO1xuXHRcdFx0dGhpcy5maXJlKCdjaGFuZ2UnLCB7IG1vbnRoLCB5ZWFyLCBkYXRlU3RyIH0pO1xuXHRcdH0sXG5cblx0XHRyZXNldCAoKSB7XG5cdFx0XHR0aGlzLnNldCh6ZXJvU3RhdGUoKSk7XG5cdFx0XHR0aGlzLm5vdGlmeSgpO1xuXHRcdH1cblx0fVxufTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3llYXItbW9udGgtcGlja2VyL2luZGV4Lmh0bWwiLCI8Zm9ybSByZWY6Zm9ybSBjbGFzcz1cImZvcm0ge3tpbkVkaXQgPyAnZWRpdCcgOiAnJ319XCIgb246c3VibWl0PVwib25zdWJtaXQoZXZlbnQpXCIgb246aW5wdXQ9XCJvbmlucHV0KGV2ZW50KVwiPlxuXHQ8ZGl2IGNsYXNzPVwic3ViZm9ybXNcIj5cblx0XHR7eyNlYWNoIHJvd3MgYXMgcm93LCBpZHh9fVxuXHRcdDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuXHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBiaW5kOnZhbHVlPXJvdy5pZD5cblx0XHRcdDxkaXYgY2xhc3M9XCJzZWxlY3Qtd3JhcFwiPlxuXHRcdFx0XHQ8c2VsZWN0IGNsYXNzPVwic2VsZWN0IGNhdGVnb3J5XCIgYmluZDp2YWx1ZT1yb3cuY2F0ZWdvcnkgYXV0b2ZvY3VzPVwiYXV0b2ZvY3VzXCI+XG5cdFx0XHRcdFx0e3sjZWFjaCBjYXRlZ29yaWVzIGFzIGdyb3VwfX1cblx0XHRcdFx0XHQ8b3B0Z3JvdXAgbGFiZWw9XCJ7e2dyb3VwLm5hbWV9fVwiPlxuXHRcdFx0XHRcdFx0e3sjaWYgZ3JvdXAuaXRlbXN9fVxuXHRcdFx0XHRcdFx0e3sjZWFjaCBncm91cC5pdGVtcyBhcyBjYXR9fVxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cInt7Y2F0Lm5hbWV9fVwiPnt7Y2F0Lm5hbWV9fTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0e3svZWFjaH19XG5cdFx0XHRcdFx0XHR7ey9pZn19XG5cdFx0XHRcdFx0PC9vcHRncm91cD5cblx0XHRcdFx0XHR7ey9lYWNofX1cblx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxpbnB1dCBjbGFzcz1cImRlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCJkZXNjcmlwdGlvblwiIGJpbmQ6dmFsdWU9XCJyb3cuZGVzY3JpcHRpb25cIj5cblx0XHRcdDxpbnB1dCBjbGFzcz1cImFtb3VudFwiIHBsYWNlaG9sZGVyPVwiMC4wMFwiIGJpbmQ6dmFsdWU9cm93LmFtb3VudCBvbjprZXlkb3duPVwib25rZXlkb3duKGV2ZW50KVwiPlxuXG5cdFx0XHR7eyNpZiBpZHggPT09IDB9fVxuXHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdGl0bGU9XCJTcGxpdFwiIGNsYXNzPVwiYnRuIGJ0bi1zcGxpdCBpb24tbWQtc3dhcFwiIG9uOmNsaWNrPVwic3BsaXQoKVwiPjwvYnV0dG9uPlxuXHRcdFx0e3tlbHNlfX1cblx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiUmVtb3ZlXCIgY2xhc3M9XCJidG4gYnRuLXVuc3BsaXQgaW9uLW1kLWNsb3NlXCIgb246Y2xpY2s9XCJ1bnNwbGl0KGlkeClcIj48L2J1dHRvbj5cblx0XHRcdHt7L2lmfX1cblx0XHQ8L2Rpdj5cblx0XHR7ey9lYWNofX1cblx0PC9kaXY+XG5cdDxkaXYgY2xhc3M9XCJmb3JtLXJvdyBmb3JtLXJvdy1yZXBlYXRcIj5cblx0XHQ8bGFiZWw+UmVwZWF0IGV2ZXJ5IG1vbnRoLCBmb3IgPC9sYWJlbD5cblx0XHQ8aW5wdXQgY2xhc3M9XCJyZXBlYXRlclwiIG1pbj1cIjFcIiBtYXg9XCIxMlwiIHR5cGU9XCJudW1iZXJcIiBiaW5kOnZhbHVlPXJlcGVhdD5cblx0XHQ8bGFiZWw+IG1vbnRoczwvbGFiZWw+XG5cdDwvZGl2PlxuXHQ8ZGl2IGNsYXNzPVwiZm9ybS1mb290ZXIgZm9ybS1yb3dcIj5cblx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcmVzZXRcIiBvbjpjbGljaz1cInJlc2V0KClcIj5SZXNldDwvYnV0dG9uPlxuXHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGRhbmdlciBidG4tcmVtb3ZlXCIgb246Y2xpY2s9XCJyZW1vdmUoKVwiPlJlbW92ZTwvYnV0dG9uPlxuXHRcdDxkaXYgY2xhc3M9XCJmbGV4LWZpbGxlclwiPjwvZGl2PlxuXHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1jYW5jZWxcIiBvbjpjbGljaz1cInJlc2V0KClcIj5DYW5jZWw8L2J1dHRvbj5cblx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBzdWNjZXNzIGJ0bi1zYXZlXCI+U2F2ZTwvYnV0dG9uPlxuXHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIHN1Y2Nlc3MgYnRuLWFkZFwiPkFkZDwvYnV0dG9uPlxuXHQ8L2Rpdj5cbjwvZm9ybT5cblxuPHNjcmlwdD5cbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0ZGF0YSAoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGluRWRpdDogZmFsc2UsXG5cdFx0XHRkYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDcpLFxuXHRcdFx0cmVwZWF0OiAxLFxuXHRcdFx0cm93czogWyB7aWQ6ICcnLCBkZXNjcmlwdGlvbjogJycsIGFtb3VudDogJyd9IF0sXG5cdFx0XHRjYXRlZ29yaWVzOiBbXSxcblx0XHR9O1xuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Z2V0RGF0YSAoKSB7XG5cdFx0XHRjb25zdCBkYXRlID0gdGhpcy5nZXQoJ2RhdGUnKSB8fCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDcpO1xuXHRcdFx0Y29uc3QgZW50cmllcyA9IHV0aWwuZGVlcENvcHlBcnJheSh0aGlzLmdldCgncm93cycpKVxuXHRcdFx0XHQubWFwKGUgPT4ge1xuXHRcdFx0XHRcdGUuZGF0ZSA9IGRhdGU7XG5cdFx0XHRcdFx0ZS5hbW91bnQgPSB1dGlsLnBhcnNlQW1vdW50KGUuYW1vdW50KTtcblx0XHRcdFx0XHRyZXR1cm4gZTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdC8vIHN1YnRyYWN0IG90aGVyIGFtb3VudHMgZnJvbSB0aGUgZmlyc3Qgcm93XG5cdFx0XHRjb25zdCBhbW91bnRzID0gZW50cmllcy5tYXAoKGl0ZW0sIGkpID0+IGkgPiAwID8gaXRlbS5hbW91bnQgOiAwKTtcblx0XHRcdGNvbnN0IHN1bSA9IGFtb3VudHMucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XHQvLyBhZGQgYWxsIHVwXG5cdFx0XHRlbnRyaWVzWzBdLmFtb3VudCAtPSBzdW07XG5cblx0XHRcdC8vIHJlcGVhdCBtb250aGx5XG5cdFx0XHRjb25zdCByZXBlYXRlciA9IHRoaXMuZ2V0KCdyZXBlYXQnKTtcblx0XHRcdHJldHVybiB1dGlsLnJlcGVhdEVudHJpZXMoZW50cmllcywgcmVwZWF0ZXIpO1xuXHRcdH0sXG5cblx0XHRzcGxpdCAoKSB7XG5cdFx0XHRjb25zdCByb3dzID0gdGhpcy5nZXQoJ3Jvd3MnKTtcblx0XHRcdHJvd3MucHVzaCh7aWQ6ICcnLCBkZXNjcmlwdGlvbjogcm93c1swXS5kZXNjcmlwdGlvbiwgYW1vdW50OiAnJ30pO1xuXHRcdFx0dGhpcy5zZXQoeyByb3dzIH0pO1xuXHRcdH0sXG5cblx0XHR1bnNwbGl0IChpZHgpIHtcblx0XHRcdGNvbnN0IHJvd3MgPSB0aGlzLmdldCgncm93cycpO1xuXHRcdFx0cm93cy5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdHRoaXMuc2V0KHsgcm93cyB9KTtcblx0XHR9LFxuXG5cdFx0ZWRpdCAoZGF0YSkge1xuXHRcdFx0dGhpcy5yZXNldCgpO1xuXHRcdFx0dGhpcy5zZXQoeyBpbkVkaXQ6IHRydWUsIHJvd3M6IFtkYXRhXSB9KTtcblx0XHRcdHRoaXMuZmlyZSgnY2hhbmdlJywgdGhpcy5nZXREYXRhKCkpO1xuXHRcdH0sXG5cblx0XHRyZXNldCAoKSB7XG5cdFx0XHR0aGlzLnNldCh7XG5cdFx0XHRcdGluRWRpdDogZmFsc2UsXG5cdFx0XHRcdHJlcGVhdDogMSxcblx0XHRcdFx0cm93czogWyB7aWQ6ICcnLCBkZXNjcmlwdGlvbjogJycsIGFtb3VudDogJycgfSBdXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMudG9nZ2xlQW1vdW50RXJyb3IoKTtcblx0XHRcdHRoaXMuZmlyZSgnY2hhbmdlJywgdGhpcy5nZXREYXRhKCkpO1xuXHRcdH0sXG5cblx0XHRvbmlucHV0ICgpIHtcblx0XHRcdHRoaXMudG9nZ2xlQW1vdW50RXJyb3IoKTtcblx0XHRcdHRoaXMuZmlyZSgnY2hhbmdlJywgdGhpcy5nZXREYXRhKCkpO1xuXHRcdH0sXG5cblx0XHRyZW1vdmUgKCkge1xuXHRcdFx0dGhpcy5maXJlKCdyZW1vdmUnLCB7IGlkOiB0aGlzLmdldCgncm93cycpWzBdLmlkIH0pO1xuXHRcdFx0dGhpcy5yZXNldCgpO1xuXHRcdH0sXG5cblx0XHRvbnN1Ym1pdCAoZSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Y29uc3QgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpO1xuXHRcdFx0aWYgKCFkYXRhWzBdLmFtb3VudCkge1xuXHRcdFx0XHR0aGlzLnRvZ2dsZUFtb3VudEVycm9yKCdQbGVhc2UgZW50ZXIgYW1vdW50Jyk7XG5cdFx0XHRcdHJldHVybiB0aGlzLmZpcmUoJ2Vycm9yJywgJ1BsZWFzZSBlbnRlciBhbW91bnQnKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuZmlyZSgnc3VibWl0JywgZGF0YSk7XG5cdFx0XHR0aGlzLnJlc2V0KCk7XG5cdFx0fSxcblxuXHRcdG9ua2V5ZG93biAoZSkge1xuXHRcdFx0aWYgKHV0aWwuaXNBbGxvd2VkS2V5KGUpKSByZXR1cm4gdHJ1ZTtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR9LFxuXG5cdFx0dG9nZ2xlQW1vdW50RXJyb3IgKGVycikge1xuXHRcdFx0dGhpcy5yZWZzLmZvcm0ucXVlcnlTZWxlY3RvcignLmFtb3VudCcpLnNldEN1c3RvbVZhbGlkaXR5KGVyciB8fCAnJyk7XG5cdFx0fVxuXHR9XG59O1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvZm9ybS9pbmRleC5odG1sIiwiXG5mdW5jdGlvbiBwYXJzZUFtb3VudCAoYW1vdW50KSB7XG5cdC8qIGVzbGludCBuby1ldmFsOiAwICovXG5cdGFtb3VudCA9ICgnJyArIGFtb3VudCkucmVwbGFjZSgvXFxzL2csICcnKTtcblx0aWYgKCEoL15bK1xcLVxcXFwqLygpXFxkLl0rJC9pKS50ZXN0KGFtb3VudCkpIHJldHVybiAwO1xuXHRpZiAoKC9bK1xcLVxcXFwqLy5dKy9pKS50ZXN0KGFtb3VudCkpIHtcblx0XHR0cnkgeyBhbW91bnQgPSBldmFsKGFtb3VudCk7IH1cblx0XHRjYXRjaCAoZSkgeyBhbW91bnQgPSAwOyB9XG5cdH1cblx0bGV0IG51bSA9IHBhcnNlRmxvYXQoYW1vdW50KTtcblx0aWYgKG51bSA9PT0gSW5maW5pdHkgfHwgaXNOYU4obnVtKSB8fCBudW0gPCAwKSBudW0gPSAnZXJyb3InO1xuXHRyZXR1cm4gbnVtO1xufVxuXG4vLyB5eXl5LW1tXG5mdW5jdGlvbiBnZXRTdHJEYXRlICh5LCBtKSB7XG5cdHJldHVybiBgJHt5fS0keygnMCcgKyBtKS5zdWJzdHIoLTIpfWA7XG59XG5cblxuZnVuY3Rpb24gcGFyc2VEYXRlU3RyIChkYXRlU3RyKSB7XG5cdGxldCBbeWVhciwgbW9udGhdID0gZGF0ZVN0ci5zcGxpdCgnLScpO1xuXHR5ZWFyID0gcGFyc2VJbnQoeWVhciwgMTApO1xuXHRtb250aCA9IHBhcnNlSW50KG1vbnRoLCAxMCk7XG5cdGNvbnN0IHN0ciA9IGdldFN0ckRhdGUoeWVhciwgbW9udGgpO1xuXHRyZXR1cm4geyB5ZWFyLCBtb250aCwgc3RyIH07XG59XG5cblxuZnVuY3Rpb24gZGVlcENvcHlBcnJheSAoYXJyKSB7XG5cdHJldHVybiBhcnIubWFwKG8gPT4gT2JqZWN0LmFzc2lnbih7fSwgbykpO1xufVxuXG5cbmZ1bmN0aW9uIGFkZE1vbnRoc1RvRGF0ZSAoZGF0ZSwgbW9udGhEaWZmKSB7XG5cdGNvbnN0IGRhdGVPYmogPSBwYXJzZURhdGVTdHIoZGF0ZSk7XG5cdGxldCB5ZWFyID0gZGF0ZU9iai55ZWFyO1xuXHRsZXQgbW9udGggPSBkYXRlT2JqLm1vbnRoICsgbW9udGhEaWZmO1xuXHRpZiAobW9udGggPj0gMTMpIHtcblx0XHR5ZWFyID0geWVhciArIE1hdGguZmxvb3IobW9udGggLyAxMik7XG5cdFx0bW9udGggPSAobW9udGggJSAxMikgKyAxO1xuXHR9XG5cdHJldHVybiBnZXRTdHJEYXRlKHllYXIsIG1vbnRoKTtcbn1cblxuXG5mdW5jdGlvbiBjbG9uZUVudHJpZXMgKGVudHJpZXMsIG1vbnRoRGlmZikge1xuXHRyZXR1cm4gZGVlcENvcHlBcnJheShlbnRyaWVzKS5tYXAoaXRlbSA9PiB7XG5cdFx0aXRlbS5kYXRlID0gYWRkTW9udGhzVG9EYXRlKGl0ZW0uZGF0ZSwgbW9udGhEaWZmKTtcblx0XHRyZXR1cm4gaXRlbTtcblx0fSk7XG59XG5cblxuZnVuY3Rpb24gcmVwZWF0RW50cmllcyAoZW50cmllcywgcmVwZWF0ZXIpIHtcblx0aWYgKCFyZXBlYXRlciB8fCByZXBlYXRlciA9PT0gMSkgcmV0dXJuIGVudHJpZXM7XG5cblx0Y29uc3Qgb3JpZ2luYWxFbnRyaWVzID0gZGVlcENvcHlBcnJheShlbnRyaWVzKTtcblx0Zm9yIChsZXQgaSA9IDE7IGkgPCByZXBlYXRlcjsgaSsrKSB7XG5cdFx0Y29uc3QgbmV3Um93cyA9IGNsb25lRW50cmllcyhvcmlnaW5hbEVudHJpZXMsIGkpO1xuXHRcdGVudHJpZXMgPSBlbnRyaWVzLmNvbmNhdChuZXdSb3dzKTtcblx0fVxuXHRyZXR1cm4gZW50cmllcztcbn1cblxuXG5mdW5jdGlvbiBpc0FsbG93ZWRLZXkgKGUpIHtcblx0Y29uc3QgYWxsb3dlZFJlZyA9IC9eWygpXFxkLyorLV17MX0kLztcblx0Y29uc3QgYWxsb3dlZEtleXMgPSBbJ0VudGVyJywgJ1RhYicsICdCYWNrc3BhY2UnLCAnRGVsZXRlJywgJ0Fycm93TGVmdCcsICdBcnJvd1JpZ2h0JywgJy4nXTtcblxuXHRpZiAoYWxsb3dlZEtleXMuaW5kZXhPZihlLmtleSkgPiAtMSkgcmV0dXJuIHRydWU7XG5cdGlmIChlLm1ldGFLZXkgfHwgZS5jdHJsS2V5KSByZXR1cm4gdHJ1ZTtcblx0aWYgKGUua2V5Lmxlbmd0aCA8IDMgJiYgYWxsb3dlZFJlZy50ZXN0KGUua2V5KSkgcmV0dXJuIHRydWU7XG5cdHJldHVybiBmYWxzZTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHBhcnNlRGF0ZVN0cixcblx0cGFyc2VBbW91bnQsXG5cdHJlcGVhdEVudHJpZXMsXG5cdGRlZXBDb3B5QXJyYXksXG5cdGlzQWxsb3dlZEtleSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvZm9ybS91dGlsLmpzIiwiPGRpdiBjbGFzcz1cInRhYmxlXCIgcmVmOnRhYmxlPlxuXHR7eyNpZiBkYXRhICYmIGRhdGEubGVuZ3RoIH19XG5cdFx0PHRhYmxlPlxuXHRcdDx0aGVhZD48dHI+XG5cdFx0XHQ8dGQgY2xhc3M9XCJkYXRlXCI+RGF0ZTwvdGQ+XG5cdFx0XHQ8dGQgY2xhc3M9XCJkZXNjXCI+RGVzY3JpcHRpb248L3RkPlxuXHRcdFx0PHRkIGNsYXNzPVwiYW1vdW50XCI+QW1vdW50PC90ZD5cblx0XHQ8L3RyPjwvdGhlYWQ+XG5cdFx0PHRib2R5PlxuXHRcdFx0e3sjZWFjaCBkYXRhIGFzIGl0ZW0sIGlkeH19XG5cdFx0XHRcdDx0ciBvbjpjbGljaz1cIm9uUm93Q2xpY2soaXRlbSlcIj5cblx0XHRcdFx0XHQ8dGQ+e3tpdGVtLmRhdGUuc3Vic3RyKDAsIDcpfX08L3RkPlxuXHRcdFx0XHRcdDx0ZCBjbGFzcz1cImRlc2NcIj57e2l0ZW0uY2F0ZWdvcnl9fSAtIHt7aXRlbS5kZXNjcmlwdGlvbn19PC90ZD5cblx0XHRcdFx0XHQ8dGQgY2xhc3M9XCJhbW91bnRcIj57e2Zvcm1hdChpdGVtLmFtb3VudCl9fTwvdGQ+XG5cdFx0XHRcdDwvdHI+XG5cdFx0XHR7ey9lYWNofX1cblx0XHQ8L3Rib2R5PlxuXHRcdDx0Zm9vdD48dHI+XG5cdFx0XHQ8dGQgY29sc3Bhbj1cIjJcIj5cblx0XHRcdFx0PCEtLSA8aSBjbGFzcz1cImlvbi1tZC1zZWFyY2hcIj48L2k+IC0tPlxuXHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJ0YWJsZS1maWx0ZXJcIiB0eXBlPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJGaWx0ZXJcIj5cblx0XHRcdDwvdGQ+XG5cdFx0XHQ8dGQgY2xhc3M9XCJhbW91bnRcIj57e2Zvcm1hdCh0b3RhbCl9fTwvdGQ+XG5cdFx0PC90cj48L3Rmb290PlxuXHRcdDwvdGFibGU+XG5cdHt7L2lmfX1cbjwvZGl2PlxuXG5cbjxzY3JpcHQ+XG5cbmZ1bmN0aW9uIGZvcm1hdE51bWJlciAobnVtKSB7XG5cdG51bSA9IE1hdGgucm91bmQoMCArIG51bSAqIDEwMCkgLyAxMDA7XG5cdHJldHVybiBudW0udG9Mb2NhbGVTdHJpbmcoJ2VuLUdCJywgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhICgpIHtcblx0XHRyZXR1cm4geyBkYXRhOiBbXSB9O1xuXHR9LFxuXHRjb21wdXRlZDoge1xuXHRcdHRvdGFsIChkYXRhKSB7IHJldHVybiBkYXRhLnJlZHVjZSgocCwgYykgPT4gcCArIGMuYW1vdW50LCAwKTsgfSxcblx0XHRmb3JtYXQgKGRhdGEpIHsgcmV0dXJuIGZvcm1hdE51bWJlcjsgfVxuXHR9LFxuXHRvbmNyZWF0ZSAoKSB7XG5cdH0sXG5cblx0bWV0aG9kczoge1xuXHRcdG9uUm93Q2xpY2sgKGl0ZW0pIHtcblx0XHRcdHRoaXMuZmlyZSgnY2xpY2snLCBpdGVtKTtcblx0XHR9XG5cdH1cbn07XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC90YWJsZS9pbmRleC5odG1sIiwiZnVuY3Rpb24gZ2V0ICh1cmwpIHtcblx0cmV0dXJuIGZldGNoKHVybCwgeyBjcmVkZW50aWFsczogJ2luY2x1ZGUnIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xufVxuXG5mdW5jdGlvbiBwb3N0ICh1cmwsIHBhcmFtcykge1xuXHRjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkocGFyYW1zKTtcblx0Y29uc3Qgb3B0cyA9IHtcblx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRoZWFkZXJzOiB7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcblx0XHRjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuXHRcdGJvZHksXG5cdH07XG5cdHJldHVybiBmZXRjaCh1cmwsIG9wdHMpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xufVxuXG5cblxuY29uc3QgQ2F0ZWdvcmllcyA9IHtcblx0Z2V0OiAoKSA9PiBnZXQoJ2FwaS9jYXRlZ29yaWVzJyksXG59O1xuXG5jb25zdCBFeHBlbnNlcyA9IHtcblx0Z2V0IChkYXRlID0gJycpIHtcblx0XHRyZXR1cm4gZ2V0KGBhcGkvZW50cmllcz9kYXRlPSR7ZGF0ZX1gKTtcblx0fSxcblx0c2F2ZSAoZGF0YSkge1xuXHRcdHJldHVybiBwb3N0KCdhcGkvZW50cmllcycsIGRhdGEpO1xuXHR9XG59O1xuXG5cblxuZXhwb3J0IHtcblx0Q2F0ZWdvcmllcyxcblx0RXhwZW5zZXMsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2RhdGEvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9