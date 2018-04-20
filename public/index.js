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
		context.each_value[context.idx].category_id = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["p" /* selectValue */])(select);
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

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* selectOption */])(select, row.category_id)

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

			if (!select_updating) Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* selectOption */])(select, row.category_id)

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
			option.__value = option_value_value = cat.id;
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

			if ((changed.categories) && option_value_value !== (option_value_value = cat.id)) {
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

	var if_block = (state.data && state.data.items) && create_if_block(component, state);

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
			if (state.data && state.data.items) {
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

// (10:3) {{#each data.items as item, idx}}
function create_each_block(component, state) {
	var item = state.item, each_value = state.each_value, idx = state.idx;
	var tr, td, text_value = item.date.substr(0, 7), text, text_1, td_1, text_2_value = item.category, text_2, text_3, text_4_value = item.description, text_4, text_5, td_2, text_6_value = item.amount_str, text_6;

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

			if ((changed.data) && text_6_value !== (text_6_value = item.amount_str)) {
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

// (2:1) {{#if data && data.items }}
function create_if_block(component, state) {
	var table, thead, text_6, tbody, text_8, tfoot, tr_1, td_3, text_10, td_4, text_11_value = state.data.total_str, text_11;

	var each_value = state.data.items;

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
			var each_value = state.data.items;

			if (changed.data) {
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

			if ((changed.data) && text_11_value !== (text_11_value = state.data.total_str)) {
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
	get: () => get('api/categorytree')
};

const Expenses = {
	get(date = '', id = '') {
		if (id) id = `/${id}`;
		if (date) date = `?date=${date}`;
		return get(`api/entries${id}${date}`);
	},
	save(data) {
		const id = data.length === 1 && data[0].id;
		if (data.length === 1) data = data[0];
		return post(`api/entries${id ? '/' + id : ''}`, data);
	}
};



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTlhZTQ5ZWIwYTI2NDI0N2I5NDQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9hcHAvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9jbGllbnQveWVhci1tb250aC1waWNrZXIvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvZm9ybS9pbmRleC5odG1sIiwid2VicGFjazovLy8uL2NsaWVudC9mb3JtL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3RhYmxlL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2RhdGEvaW5kZXguanMiXSwibmFtZXMiOlsidGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyc2VBbW91bnQiLCJhbW91bnQiLCJyZXBsYWNlIiwidGVzdCIsImV2YWwiLCJlIiwibnVtIiwicGFyc2VGbG9hdCIsIkluZmluaXR5IiwiaXNOYU4iLCJnZXRTdHJEYXRlIiwieSIsIm0iLCJzdWJzdHIiLCJwYXJzZURhdGVTdHIiLCJkYXRlU3RyIiwieWVhciIsIm1vbnRoIiwic3BsaXQiLCJwYXJzZUludCIsInN0ciIsImRlZXBDb3B5QXJyYXkiLCJhcnIiLCJtYXAiLCJvIiwiT2JqZWN0IiwiYXNzaWduIiwiYWRkTW9udGhzVG9EYXRlIiwiZGF0ZSIsIm1vbnRoRGlmZiIsImRhdGVPYmoiLCJNYXRoIiwiZmxvb3IiLCJjbG9uZUVudHJpZXMiLCJlbnRyaWVzIiwiaXRlbSIsInJlcGVhdEVudHJpZXMiLCJyZXBlYXRlciIsIm9yaWdpbmFsRW50cmllcyIsImkiLCJuZXdSb3dzIiwiY29uY2F0IiwiaXNBbGxvd2VkS2V5IiwiYWxsb3dlZFJlZyIsImFsbG93ZWRLZXlzIiwiaW5kZXhPZiIsImtleSIsIm1ldGFLZXkiLCJjdHJsS2V5IiwibGVuZ3RoIiwiZ2V0IiwidXJsIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXMiLCJqc29uIiwicG9zdCIsInBhcmFtcyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib3B0cyIsIm1ldGhvZCIsImhlYWRlcnMiLCJDYXRlZ29yaWVzIiwiRXhwZW5zZXMiLCJpZCIsInNhdmUiLCJkYXRhIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsdUJBQXVCO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkMsY0FBYyw2Q0FBNkM7QUFDM0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixrQkFBa0I7QUFDbEM7QUFDQTtBQUNBLGtCQUFrQiw0QkFBNEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixrQkFBa0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQiwyQkFBMkI7QUFDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLDJCQUEyQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjs7QUFFbkIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQSw0QkFBNEIsY0FBYztBQUMxQzs7QUFFQSwyQkFBMkIsY0FBYyxHQUFHO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxrRUFBa0UsYUFBYTs7QUFFL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IscUJBQXFCO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0I7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVE7Ozs7Ozs7Ozs7QUMzd0JSOztBQUVBLElBQUkscURBQUosQ0FBUSxFQUFFQSxRQUFRQyxTQUFTQyxhQUFULENBQXVCLE1BQXZCLENBQVYsRUFBUixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FDV00sR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7O2NBZWI7QUFDVCxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRTtBQUNsQixFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDbEMsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUM1QixFQUFFLHVEQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUk7QUFDbEMsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztBQUM3QixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDakMsR0FBRyxDQUFDLENBQUM7QUFDTCxFQUFFOztBQUVGLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUU7O0FBRXBFLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxFQUFFO0FBQ3JCLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDcEMsRUFBRTs7QUFFRixDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksRUFBRTtBQUNyQixFQUFFLHVEQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNO0FBQ2pDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ3BCLEdBQUcsQ0FBQyxDQUFDO0FBQ0wsRUFBRTs7QUFFRixDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksRUFBRTtBQUNyQixFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDcEIsRUFBRTs7QUFFRixDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBRTtBQUNuQixFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkIsRUFBRTs7QUFFRixDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO0FBQ25ELENBQUM7O2lCQTVDUSxHQUFHO0FBQ1osQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDcEQsQ0FBQyx5REFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRXRCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzNELENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzNELENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzNELENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3pELENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzdELENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzNELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEYsU0FBUyxTQUFTLElBQUk7Q0FDckIsTUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztDQUNyQixNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7Q0FDM0IsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0NBQzdCLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztDQUNwRyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7Q0FDekQ7O0FBRUQsaUJBR1ksS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPO1FBQU0sS0FBSyxLQUFLLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxLQUFLLE9BQU8sQ0FBQyxJQUFJOzs7aUJBQzFFLEtBQUssRUFBRSxJQUFJO1FBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7OzthQUhqRSxHQUFHLEVBQUUsT0FBTyxTQUFTLEVBQUUsQ0FBQyxFQUFFOztjQUt0QjtBQUNULENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ2IsRUFBRSxNQUFNLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFDdEIsRUFBRSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUM7QUFDakIsRUFBRSxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLE9BQU8sSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLFNBQVMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ3pDLEVBQUUsSUFBSSxHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDMUMsRUFBRTs7QUFFRixDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssRUFBRTtBQUN2QixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQ3ZCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNsQixHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNqQixHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNuRSxHQUFHO0FBQ0gsRUFBRTs7QUFFRixDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRTtBQUNiLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7QUFDekIsRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QyxFQUFFLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSSxHQUFHLEtBQUssT0FBTztBQUNwQyxHQUFHLEdBQUcsS0FBSyxXQUFXLElBQUksR0FBRyxLQUFLLFlBQVk7QUFDOUMsR0FBRyxHQUFHLEtBQUssV0FBVyxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzNELEVBQUU7O0FBRUYsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ3RCLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLE9BQU87QUFDN0IsRUFBRSxJQUFJLEdBQUcsS0FBSyxXQUFXLElBQUksR0FBRyxLQUFLLFdBQVcsRUFBRTtBQUNsRCxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2hDLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDekIsR0FBRyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4QixHQUFHO0FBQ0gsRUFBRSxJQUFJLEdBQUcsS0FBSyxZQUFZLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtBQUNqRCxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2pDLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDekIsR0FBRyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkIsR0FBRztBQUNILEVBQUUsSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFJLEdBQUcsS0FBSyxPQUFPLEVBQUU7QUFDdEMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztBQUN6QixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEIsR0FBRztBQUNILEVBQUU7O0FBRUYsQ0FBQyxHQUFHLENBQUMsR0FBRztBQUNSLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0MsRUFBRSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3RDLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7QUFDM0IsRUFBRTs7QUFFRixDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsR0FBRyxFQUFFO0FBQzNCLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0MsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2pCLEVBQUUsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2hELEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDMUIsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNO0FBQ2pDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQztBQUNwQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzNCLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNaLEVBQUU7O0FBRUYsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7QUFDWixFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2pDLEVBQUUsS0FBSyxJQUFJLEtBQUssQ0FBQztBQUNqQixFQUFFLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxFQUFFLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7QUFDM0MsT0FBTyxJQUFJLEtBQUssR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFO0FBQ2hELEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzVCLEVBQUU7O0FBRUYsQ0FBQyxNQUFNLENBQUMsR0FBRztBQUNYLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzVDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDaEQsRUFBRTs7QUFFRixDQUFDLEtBQUssQ0FBQyxHQUFHO0FBQ1YsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFDeEIsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEIsRUFBRTtBQUNGLENBQUM7OzttREF4R21CLE1BQU0sT0FBQyxLQUFLLENBQUM7OztZQU5wQixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzs7OztZQUN4QixLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7OztZQUNaLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs7OztZQUNULEdBQUcsRUFBRTs7OztZQUNOLEdBQUcsRUFBRTs7OztZQUtMLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQzs7OztZQUN2QixLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7OztZQUNaLElBQUksQ0FBQyxDQUFDLENBQUM7Ozs7WUFDUixHQUFHLEVBQUU7Ozs7WUFDTixHQUFHLEVBQUU7Ozs7WUFFZ0MsS0FBSyxFQUFFOzs7O1lBakJZLE9BQU8sQ0FBQyxLQUFLLENBQUM7Ozs7Ozs7Ozs7OzsrRkFRN0MsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21FQVJYLE9BQU8sR0FBRyxVQUFVLEVBQUUsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUZBUW5DLE1BQU0sT0FBQyxLQUFLLENBQUM7Ozs7O3dCQUFLLElBQUk7OztpR0FSWCxPQUFPLEdBQUcsVUFBVSxFQUFFLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQ2dEbEQsR0FBRztBQUNSLENBQUMsT0FBTztBQUNSLEVBQUUsTUFBTSxFQUFFLEtBQUs7QUFDZixFQUFFLElBQUksRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdDLEVBQUUsTUFBTSxFQUFFLENBQUM7QUFDWCxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtBQUNqRCxFQUFFLFVBQVUsRUFBRSxFQUFFO0FBQ2hCLEVBQUUsQ0FBQztBQUNILENBQUM7O2NBQ1E7QUFDVCxDQUFDLE9BQU8sQ0FBQyxHQUFHO0FBQ1osRUFBRSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6RSxFQUFFLE1BQU0sT0FBTyxHQUFHLHlEQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEQsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJO0FBQ2IsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNsQixJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcseURBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzFDLElBQUksT0FBTyxDQUFDLENBQUM7QUFDYixJQUFJLENBQUMsQ0FBQzs7QUFFTjtBQUNBLEVBQUUsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3BFLEVBQUUsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNqRCxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDOztBQUUzQjtBQUNBLEVBQUUsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN0QyxFQUFFLE9BQU8seURBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQy9DLEVBQUU7O0FBRUYsQ0FBQyxLQUFLLENBQUMsR0FBRztBQUNWLEVBQUUsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNoQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3BFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDckIsRUFBRTs7QUFFRixDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRTtBQUNmLEVBQUUsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNoQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3RCLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDckIsRUFBRTs7QUFFRixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRTtBQUNiLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2YsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDM0MsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUN0QyxFQUFFOztBQUVGLENBQUMsS0FBSyxDQUFDLEdBQUc7QUFDVixFQUFFLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDWCxHQUFHLE1BQU0sRUFBRSxLQUFLO0FBQ2hCLEdBQUcsTUFBTSxFQUFFLENBQUM7QUFDWixHQUFHLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUNuRCxHQUFHLENBQUMsQ0FBQztBQUNMLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7QUFDM0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUN0QyxFQUFFOztBQUVGLENBQUMsT0FBTyxDQUFDLEdBQUc7QUFDWixFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0FBQzNCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDdEMsRUFBRTs7QUFFRixDQUFDLE1BQU0sQ0FBQyxHQUFHO0FBQ1gsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDdEQsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDZixFQUFFOztBQUVGLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ2QsRUFBRSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDckIsRUFBRSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDOUIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUN2QixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ2pELEdBQUcsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3BELEdBQUc7QUFDSCxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzVCLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2YsRUFBRTs7QUFFRixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUNmLEVBQUUsSUFBSSx5REFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLElBQUksQ0FBQztBQUN4QyxFQUFFLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNyQixFQUFFOztBQUVGLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLEVBQUU7QUFDekIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsaUJBQWlCLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZFLEVBQUU7QUFDRixDQUFDOzs7Ozt3QkFwSVEsSUFBSTs7OztnQ0FBVDs7Ozs7Ozs7Ozs7Ozs7O1lBaUNtRCxLQUFLLEVBQUU7Ozs7WUFDQyxNQUFNLEVBQUU7Ozs7WUFFZixLQUFLLEVBQUU7Ozs7WUF0Q0EsUUFBUSxDQUFDLEtBQUssQ0FBQzs7OztZQUFZLE9BQU8sQ0FBQyxLQUFLLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0RBQTVFLE1BQU0sR0FBRyxNQUFNLEdBQUcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBK0JtQixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBN0JoRSxJQUFJOzs7bUNBQVQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQUFBOzs7NENBNkIrRCxNQUFNO3FGQS9CN0MsTUFBTSxHQUFHLE1BQU0sR0FBRyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBSVgsQ0FBQyxFQUFFOzs7OzswQkFHNUIsVUFBVTs7OztrQ0FBZjs7Ozs7Ozs7Ozs7O2lDQUQwQyxDQUFDLFdBQVc7Ozs7Ozs7OztpQ0FZUyxDQUFDLFdBQVc7Ozs7Ozs7OztpQ0FDekIsQ0FBQyxNQUFNOzs7Ozs7TUFFeEQsR0FBRyxLQUFLLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQkFqQmlCLEdBQUcsQ0FBQyxFQUFFOzs7Ozs7Ozs7OzBGQUVNLEdBQUcsQ0FBQyxXQUFXOzs7OzttQkFZTSxHQUFHLENBQUMsV0FBVzs7Ozs7bUJBQzVCLEdBQUcsQ0FBQyxNQUFNOzs7Ozs7Ozs7O3NDQWY5QixHQUFHLENBQUMsRUFBRTs7Ozs7NEJBRzVCLFVBQVU7OztxQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBQUE7OztnSEFEdUMsR0FBRyxDQUFDLFdBQVc7Ozs7OzBDQVlNLEdBQUcsQ0FBQyxXQUFXOzs7OzswQ0FDNUIsR0FBRyxDQUFDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUJBVnJELEtBQUssQ0FBQyxLQUFLOzs7Ozs7Ozs7OzRIQURDLEtBQUssQ0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7T0FDdEIsS0FBSyxDQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7O2dGQURDLEtBQUssQ0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdDLEdBQUcsQ0FBQyxJQUFJOzs7Ozs7Ozs7O3lDQUFwQixHQUFHLENBQUMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0REFBTSxHQUFHLENBQUMsSUFBSTs7Ozs0RUFBcEIsR0FBRyxDQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQURmLEtBQUssQ0FBQyxLQUFLOzs7O2tDQUFoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JBQUssS0FBSyxDQUFDLEtBQUs7OztxQ0FBaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBU3FFLFNBQVMsQ0FBQyxLQUFLLENBQUM7Ozs7O1dBR1gsS0FBSyxFQUFFOzs7Ozs7V0FFSCxPQUFPLENBQUMsR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCbkcsU0FBU0MsV0FBVCxDQUFzQkMsTUFBdEIsRUFBOEI7QUFDN0I7QUFDQUEsVUFBUyxDQUFDLEtBQUtBLE1BQU4sRUFBY0MsT0FBZCxDQUFzQixLQUF0QixFQUE2QixFQUE3QixDQUFUO0FBQ0EsS0FBSSxDQUFFLG9CQUFELENBQXVCQyxJQUF2QixDQUE0QkYsTUFBNUIsQ0FBTCxFQUEwQyxPQUFPLENBQVA7QUFDMUMsS0FBSyxjQUFELENBQWlCRSxJQUFqQixDQUFzQkYsTUFBdEIsQ0FBSixFQUFtQztBQUNsQyxNQUFJO0FBQUVBLFlBQVNHLEtBQUtILE1BQUwsQ0FBVDtBQUF3QixHQUE5QixDQUNBLE9BQU9JLENBQVAsRUFBVTtBQUFFSixZQUFTLENBQVQ7QUFBYTtBQUN6QjtBQUNELEtBQUlLLE1BQU1DLFdBQVdOLE1BQVgsQ0FBVjtBQUNBLEtBQUlLLFFBQVFFLFFBQVIsSUFBb0JDLE1BQU1ILEdBQU4sQ0FBcEIsSUFBa0NBLE1BQU0sQ0FBNUMsRUFBK0NBLE1BQU0sT0FBTjtBQUMvQyxRQUFPQSxHQUFQO0FBQ0E7O0FBRUQ7QUFDQSxTQUFTSSxVQUFULENBQXFCQyxDQUFyQixFQUF3QkMsQ0FBeEIsRUFBMkI7QUFDMUIsUUFBUSxHQUFFRCxDQUFFLElBQUcsQ0FBQyxNQUFNQyxDQUFQLEVBQVVDLE1BQVYsQ0FBaUIsQ0FBQyxDQUFsQixDQUFxQixFQUFwQztBQUNBOztBQUdELFNBQVNDLFlBQVQsQ0FBdUJDLE9BQXZCLEVBQWdDO0FBQy9CLEtBQUksQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLElBQWdCRixRQUFRRyxLQUFSLENBQWMsR0FBZCxDQUFwQjtBQUNBRixRQUFPRyxTQUFTSCxJQUFULEVBQWUsRUFBZixDQUFQO0FBQ0FDLFNBQVFFLFNBQVNGLEtBQVQsRUFBZ0IsRUFBaEIsQ0FBUjtBQUNBLE9BQU1HLE1BQU1WLFdBQVdNLElBQVgsRUFBaUJDLEtBQWpCLENBQVo7QUFDQSxRQUFPLEVBQUVELElBQUYsRUFBUUMsS0FBUixFQUFlRyxHQUFmLEVBQVA7QUFDQTs7QUFHRCxTQUFTQyxhQUFULENBQXdCQyxHQUF4QixFQUE2QjtBQUM1QixRQUFPQSxJQUFJQyxHQUFKLENBQVFDLEtBQUtDLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCRixDQUFsQixDQUFiLENBQVA7QUFDQTs7QUFHRCxTQUFTRyxlQUFULENBQTBCQyxJQUExQixFQUFnQ0MsU0FBaEMsRUFBMkM7QUFDMUMsT0FBTUMsVUFBVWhCLGFBQWFjLElBQWIsQ0FBaEI7QUFDQSxLQUFJWixPQUFPYyxRQUFRZCxJQUFuQjtBQUNBLEtBQUlDLFFBQVFhLFFBQVFiLEtBQVIsR0FBZ0JZLFNBQTVCO0FBQ0EsS0FBSVosU0FBUyxFQUFiLEVBQWlCO0FBQ2hCRCxTQUFPQSxPQUFPZSxLQUFLQyxLQUFMLENBQVdmLFFBQVEsRUFBbkIsQ0FBZDtBQUNBQSxVQUFTQSxRQUFRLEVBQVQsR0FBZSxDQUF2QjtBQUNBO0FBQ0QsUUFBT1AsV0FBV00sSUFBWCxFQUFpQkMsS0FBakIsQ0FBUDtBQUNBOztBQUdELFNBQVNnQixZQUFULENBQXVCQyxPQUF2QixFQUFnQ0wsU0FBaEMsRUFBMkM7QUFDMUMsUUFBT1IsY0FBY2EsT0FBZCxFQUF1QlgsR0FBdkIsQ0FBMkJZLFFBQVE7QUFDekNBLE9BQUtQLElBQUwsR0FBWUQsZ0JBQWdCUSxLQUFLUCxJQUFyQixFQUEyQkMsU0FBM0IsQ0FBWjtBQUNBLFNBQU9NLElBQVA7QUFDQSxFQUhNLENBQVA7QUFJQTs7QUFHRCxTQUFTQyxhQUFULENBQXdCRixPQUF4QixFQUFpQ0csUUFBakMsRUFBMkM7QUFDMUMsS0FBSSxDQUFDQSxRQUFELElBQWFBLGFBQWEsQ0FBOUIsRUFBaUMsT0FBT0gsT0FBUDs7QUFFakMsT0FBTUksa0JBQWtCakIsY0FBY2EsT0FBZCxDQUF4QjtBQUNBLE1BQUssSUFBSUssSUFBSSxDQUFiLEVBQWdCQSxJQUFJRixRQUFwQixFQUE4QkUsR0FBOUIsRUFBbUM7QUFDbEMsUUFBTUMsVUFBVVAsYUFBYUssZUFBYixFQUE4QkMsQ0FBOUIsQ0FBaEI7QUFDQUwsWUFBVUEsUUFBUU8sTUFBUixDQUFlRCxPQUFmLENBQVY7QUFDQTtBQUNELFFBQU9OLE9BQVA7QUFDQTs7QUFHRCxTQUFTUSxZQUFULENBQXVCckMsQ0FBdkIsRUFBMEI7QUFDekIsT0FBTXNDLGFBQWEsaUJBQW5CO0FBQ0EsT0FBTUMsY0FBYyxDQUFDLE9BQUQsRUFBVSxLQUFWLEVBQWlCLFdBQWpCLEVBQThCLFFBQTlCLEVBQXdDLFdBQXhDLEVBQXFELFlBQXJELEVBQW1FLEdBQW5FLENBQXBCOztBQUVBLEtBQUlBLFlBQVlDLE9BQVosQ0FBb0J4QyxFQUFFeUMsR0FBdEIsSUFBNkIsQ0FBQyxDQUFsQyxFQUFxQyxPQUFPLElBQVA7QUFDckMsS0FBSXpDLEVBQUUwQyxPQUFGLElBQWExQyxFQUFFMkMsT0FBbkIsRUFBNEIsT0FBTyxJQUFQO0FBQzVCLEtBQUkzQyxFQUFFeUMsR0FBRixDQUFNRyxNQUFOLEdBQWUsQ0FBZixJQUFvQk4sV0FBV3hDLElBQVgsQ0FBZ0JFLEVBQUV5QyxHQUFsQixDQUF4QixFQUFnRCxPQUFPLElBQVA7QUFDaEQsUUFBTyxLQUFQO0FBQ0E7O0FBR0QseURBQWU7QUFDZGhDLGFBRGM7QUFFZGQsWUFGYztBQUdkb0MsY0FIYztBQUlkZixjQUpjO0FBS2RxQjtBQUxjLENBQWYsRTs7Ozs7Ozs7Ozs7YUM5Q00sR0FBRztBQUNSLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUNyQixDQUFDOztjQUlRO0FBQ1QsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLEVBQUU7QUFDbkIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMzQixFQUFFO0FBQ0YsQ0FBQzs7aUJBUFEsR0FBRztBQUNaLENBQUM7Ozs7O3VCQWxDSyxJQUFJLFVBQUksSUFBSSxDQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FBQWxCLElBQUksVUFBSSxJQUFJLENBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVVkLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMscUNBQ1QsSUFBSSxDQUFDLFFBQVEsaUNBQU8sSUFBSSxDQUFDLFdBQVcsdUNBQ2xDLElBQUksQ0FBQyxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBRjlCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Ozs7MERBQ1QsSUFBSSxDQUFDLFFBQVE7Ozs7MERBQU8sSUFBSSxDQUFDLFdBQVc7Ozs7MERBQ2xDLElBQUksQ0FBQyxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FTakIsSUFBSSxDQUFDLFNBQVM7O3dCQWIzQixJQUFJLENBQUMsS0FBSzs7OztnQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQUssSUFBSSxDQUFDLEtBQUs7OzttQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUE7OztrRUFha0IsSUFBSSxDQUFDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7V0FacEIsVUFBVSxDQUFDLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RsQyxTQUFTUSxHQUFULENBQWNDLEdBQWQsRUFBbUI7QUFDbEIsUUFBT0MsTUFBTUQsR0FBTixFQUFXLEVBQUVFLGFBQWEsU0FBZixFQUFYLEVBQXVDQyxJQUF2QyxDQUE0Q0MsT0FBT0EsSUFBSUMsSUFBSixFQUFuRCxDQUFQO0FBQ0E7O0FBRUQsU0FBU0MsSUFBVCxDQUFlTixHQUFmLEVBQW9CTyxNQUFwQixFQUE0QjtBQUMzQixPQUFNQyxPQUFPQyxLQUFLQyxTQUFMLENBQWVILE1BQWYsQ0FBYjtBQUNBLE9BQU1JLE9BQU87QUFDWkMsVUFBUSxNQURJO0FBRVpDLFdBQVMsRUFBRSxnQkFBZ0Isa0JBQWxCLEVBRkc7QUFHWlgsZUFBYSxTQUhEO0FBSVpNO0FBSlksRUFBYjtBQU1BLFFBQU9QLE1BQU1ELEdBQU4sRUFBV1csSUFBWCxFQUFpQlIsSUFBakIsQ0FBc0JDLE9BQU9BLElBQUlDLElBQUosRUFBN0IsQ0FBUDtBQUNBOztBQUlELE1BQU1TLGFBQWE7QUFDbEJmLE1BQUssTUFBTUEsSUFBSSxrQkFBSjtBQURPLENBQW5COztBQUlBLE1BQU1nQixXQUFXO0FBQ2hCaEIsS0FBS3RCLE9BQU8sRUFBWixFQUFnQnVDLEtBQUssRUFBckIsRUFBeUI7QUFDeEIsTUFBSUEsRUFBSixFQUFRQSxLQUFNLElBQUdBLEVBQUcsRUFBWjtBQUNSLE1BQUl2QyxJQUFKLEVBQVVBLE9BQVEsU0FBUUEsSUFBSyxFQUFyQjtBQUNWLFNBQU9zQixJQUFLLGNBQWFpQixFQUFHLEdBQUV2QyxJQUFLLEVBQTVCLENBQVA7QUFDQSxFQUxlO0FBTWhCd0MsTUFBTUMsSUFBTixFQUFZO0FBQ1gsUUFBTUYsS0FBS0UsS0FBS3BCLE1BQUwsS0FBZ0IsQ0FBaEIsSUFBcUJvQixLQUFLLENBQUwsRUFBUUYsRUFBeEM7QUFDQSxNQUFJRSxLQUFLcEIsTUFBTCxLQUFnQixDQUFwQixFQUF1Qm9CLE9BQU9BLEtBQUssQ0FBTCxDQUFQO0FBQ3ZCLFNBQU9aLEtBQU0sY0FBYVUsS0FBSyxNQUFNQSxFQUFYLEdBQWdCLEVBQUcsRUFBdEMsRUFBeUNFLElBQXpDLENBQVA7QUFDQTtBQVZlLENBQWpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9wdWJsaWMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTlhZTQ5ZWIwYTI2NDI0N2I5NDQiLCJmdW5jdGlvbiBub29wKCkge31cblxuZnVuY3Rpb24gYXNzaWduKHRhciwgc3JjKSB7XG5cdGZvciAodmFyIGsgaW4gc3JjKSB0YXJba10gPSBzcmNba107XG5cdHJldHVybiB0YXI7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZE5vZGUobm9kZSwgdGFyZ2V0KSB7XG5cdHRhcmdldC5hcHBlbmRDaGlsZChub2RlKTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0Tm9kZShub2RlLCB0YXJnZXQsIGFuY2hvcikge1xuXHR0YXJnZXQuaW5zZXJ0QmVmb3JlKG5vZGUsIGFuY2hvcik7XG59XG5cbmZ1bmN0aW9uIGRldGFjaE5vZGUobm9kZSkge1xuXHRub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG59XG5cbmZ1bmN0aW9uIGRldGFjaEJldHdlZW4oYmVmb3JlLCBhZnRlcikge1xuXHR3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nICYmIGJlZm9yZS5uZXh0U2libGluZyAhPT0gYWZ0ZXIpIHtcblx0XHRiZWZvcmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiZWZvcmUubmV4dFNpYmxpbmcpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRldGFjaEJlZm9yZShhZnRlcikge1xuXHR3aGlsZSAoYWZ0ZXIucHJldmlvdXNTaWJsaW5nKSB7XG5cdFx0YWZ0ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhZnRlci5wcmV2aW91c1NpYmxpbmcpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRldGFjaEFmdGVyKGJlZm9yZSkge1xuXHR3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nKSB7XG5cdFx0YmVmb3JlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYmVmb3JlLm5leHRTaWJsaW5nKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZWluc2VydEJldHdlZW4oYmVmb3JlLCBhZnRlciwgdGFyZ2V0KSB7XG5cdHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcgJiYgYmVmb3JlLm5leHRTaWJsaW5nICE9PSBhZnRlcikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChiZWZvcmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiZWZvcmUubmV4dFNpYmxpbmcpKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZWluc2VydENoaWxkcmVuKHBhcmVudCwgdGFyZ2V0KSB7XG5cdHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkgdGFyZ2V0LmFwcGVuZENoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gcmVpbnNlcnRBZnRlcihiZWZvcmUsIHRhcmdldCkge1xuXHR3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nKSB0YXJnZXQuYXBwZW5kQ2hpbGQoYmVmb3JlLm5leHRTaWJsaW5nKTtcbn1cblxuZnVuY3Rpb24gcmVpbnNlcnRCZWZvcmUoYWZ0ZXIsIHRhcmdldCkge1xuXHR2YXIgcGFyZW50ID0gYWZ0ZXIucGFyZW50Tm9kZTtcblx0d2hpbGUgKHBhcmVudC5maXJzdENoaWxkICE9PSBhZnRlcikgdGFyZ2V0LmFwcGVuZENoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gZGVzdHJveUVhY2goaXRlcmF0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGl0ZXJhdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRpZiAoaXRlcmF0aW9uc1tpXSkgaXRlcmF0aW9uc1tpXS5kKCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnQoKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQobmFtZSkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3ZnRWxlbWVudChuYW1lKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgbmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHQoZGF0YSkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbW1lbnQoKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcbn1cblxuZnVuY3Rpb24gYWRkTGlzdGVuZXIobm9kZSwgZXZlbnQsIGhhbmRsZXIpIHtcblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKG5vZGUsIGV2ZW50LCBoYW5kbGVyKSB7XG5cdG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuXHRub2RlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhub2RlLCBhdHRyaWJ1dGVzKSB7XG5cdGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0aWYgKGtleSBpbiBub2RlKSB7XG5cdFx0XHRub2RlW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChhdHRyaWJ1dGVzW2tleV0gPT09IHVuZGVmaW5lZCkgcmVtb3ZlQXR0cmlidXRlKG5vZGUsIGtleSk7XG5cdFx0XHRlbHNlIHNldEF0dHJpYnV0ZShub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZShub2RlLCBhdHRyaWJ1dGUpIHtcblx0bm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbn1cblxuZnVuY3Rpb24gc2V0WGxpbmtBdHRyaWJ1dGUobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuXHRub2RlLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGdldEJpbmRpbmdHcm91cFZhbHVlKGdyb3VwKSB7XG5cdHZhciB2YWx1ZSA9IFtdO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGdyb3VwLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0aWYgKGdyb3VwW2ldLmNoZWNrZWQpIHZhbHVlLnB1c2goZ3JvdXBbaV0uX192YWx1ZSk7XG5cdH1cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgPT09ICcnID8gdW5kZWZpbmVkIDogK3ZhbHVlO1xufVxuXG5mdW5jdGlvbiB0aW1lUmFuZ2VzVG9BcnJheShyYW5nZXMpIHtcblx0dmFyIGFycmF5ID0gW107XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcmFuZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0YXJyYXkucHVzaCh7IHN0YXJ0OiByYW5nZXMuc3RhcnQoaSksIGVuZDogcmFuZ2VzLmVuZChpKSB9KTtcblx0fVxuXHRyZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGNoaWxkcmVuIChlbGVtZW50KSB7XG5cdHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGROb2Rlcyk7XG59XG5cbmZ1bmN0aW9uIGNsYWltRWxlbWVudCAobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMsIHN2Zykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dmFyIG5vZGUgPSBub2Rlc1tpXTtcblx0XHRpZiAobm9kZS5ub2RlTmFtZSA9PT0gbmFtZSkge1xuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBub2RlLmF0dHJpYnV0ZXMubGVuZ3RoOyBqICs9IDEpIHtcblx0XHRcdFx0dmFyIGF0dHJpYnV0ZSA9IG5vZGUuYXR0cmlidXRlc1tqXTtcblx0XHRcdFx0aWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZS5uYW1lXSkgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlLm5hbWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5vZGVzLnNwbGljZShpLCAxKVswXTsgLy8gVE9ETyBzdHJpcCB1bndhbnRlZCBhdHRyaWJ1dGVzXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN2ZyA/IGNyZWF0ZVN2Z0VsZW1lbnQobmFtZSkgOiBjcmVhdGVFbGVtZW50KG5hbWUpO1xufVxuXG5mdW5jdGlvbiBjbGFpbVRleHQgKG5vZGVzLCBkYXRhKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHR2YXIgbm9kZSA9IG5vZGVzW2ldO1xuXHRcdGlmIChub2RlLm5vZGVUeXBlID09PSAzKSB7XG5cdFx0XHRub2RlLmRhdGEgPSBkYXRhO1xuXHRcdFx0cmV0dXJuIG5vZGVzLnNwbGljZShpLCAxKVswXTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY3JlYXRlVGV4dChkYXRhKTtcbn1cblxuZnVuY3Rpb24gc2V0SW5wdXRUeXBlKGlucHV0LCB0eXBlKSB7XG5cdHRyeSB7XG5cdFx0aW5wdXQudHlwZSA9IHR5cGU7XG5cdH0gY2F0Y2ggKGUpIHt9XG59XG5cbmZ1bmN0aW9uIHNldFN0eWxlKG5vZGUsIGtleSwgdmFsdWUpIHtcblx0bm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0T3B0aW9uKHNlbGVjdCwgdmFsdWUpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdHZhciBvcHRpb24gPSBzZWxlY3Qub3B0aW9uc1tpXTtcblxuXHRcdGlmIChvcHRpb24uX192YWx1ZSA9PT0gdmFsdWUpIHtcblx0XHRcdG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIHNlbGVjdE9wdGlvbnMoc2VsZWN0LCB2YWx1ZSkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dmFyIG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuXHRcdG9wdGlvbi5zZWxlY3RlZCA9IH52YWx1ZS5pbmRleE9mKG9wdGlvbi5fX3ZhbHVlKTtcblx0fVxufVxuXG5mdW5jdGlvbiBzZWxlY3RWYWx1ZShzZWxlY3QpIHtcblx0dmFyIHNlbGVjdGVkT3B0aW9uID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJzpjaGVja2VkJykgfHwgc2VsZWN0Lm9wdGlvbnNbMF07XG5cdHJldHVybiBzZWxlY3RlZE9wdGlvbiAmJiBzZWxlY3RlZE9wdGlvbi5fX3ZhbHVlO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RNdWx0aXBsZVZhbHVlKHNlbGVjdCkge1xuXHRyZXR1cm4gW10ubWFwLmNhbGwoc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJzpjaGVja2VkJyksIGZ1bmN0aW9uKG9wdGlvbikge1xuXHRcdHJldHVybiBvcHRpb24uX192YWx1ZTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3lCbG9jayhibG9jaywgbG9va3VwKSB7XG5cdGJsb2NrLnUoKTtcblx0YmxvY2suZCgpO1xuXHRsb29rdXBbYmxvY2sua2V5XSA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIG91dHJvQW5kRGVzdHJveUJsb2NrKGJsb2NrLCBsb29rdXApIHtcblx0YmxvY2subyhmdW5jdGlvbigpIHtcblx0XHRkZXN0cm95QmxvY2soYmxvY2ssIGxvb2t1cCk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVLZXllZEVhY2gob2xkX2Jsb2NrcywgY29tcG9uZW50LCBjaGFuZ2VkLCBrZXlfcHJvcCwgZHluYW1pYywgbGlzdCwgbG9va3VwLCBub2RlLCBoYXNfb3V0cm8sIGNyZWF0ZV9lYWNoX2Jsb2NrLCBpbnRyb19tZXRob2QsIG5leHQsIGdldF9jb250ZXh0KSB7XG5cdHZhciBvID0gb2xkX2Jsb2Nrcy5sZW5ndGg7XG5cdHZhciBuID0gbGlzdC5sZW5ndGg7XG5cblx0dmFyIGkgPSBvO1xuXHR2YXIgb2xkX2luZGV4ZXMgPSB7fTtcblx0d2hpbGUgKGktLSkgb2xkX2luZGV4ZXNbb2xkX2Jsb2Nrc1tpXS5rZXldID0gaTtcblxuXHR2YXIgbmV3X2Jsb2NrcyA9IFtdO1xuXHR2YXIgbmV3X2xvb2t1cCA9IHt9O1xuXHR2YXIgZGVsdGFzID0ge307XG5cblx0dmFyIGkgPSBuO1xuXHR3aGlsZSAoaS0tKSB7XG5cdFx0dmFyIGtleSA9IGxpc3RbaV1ba2V5X3Byb3BdO1xuXHRcdHZhciBibG9jayA9IGxvb2t1cFtrZXldO1xuXG5cdFx0aWYgKCFibG9jaykge1xuXHRcdFx0YmxvY2sgPSBjcmVhdGVfZWFjaF9ibG9jayhjb21wb25lbnQsIGtleSwgZ2V0X2NvbnRleHQoaSkpO1xuXHRcdFx0YmxvY2suYygpO1xuXHRcdH0gZWxzZSBpZiAoZHluYW1pYykge1xuXHRcdFx0YmxvY2sucChjaGFuZ2VkLCBnZXRfY29udGV4dChpKSk7XG5cdFx0fVxuXG5cdFx0bmV3X2Jsb2Nrc1tpXSA9IG5ld19sb29rdXBba2V5XSA9IGJsb2NrO1xuXG5cdFx0aWYgKGtleSBpbiBvbGRfaW5kZXhlcykgZGVsdGFzW2tleV0gPSBNYXRoLmFicyhpIC0gb2xkX2luZGV4ZXNba2V5XSk7XG5cdH1cblxuXHR2YXIgd2lsbF9tb3ZlID0ge307XG5cdHZhciBkaWRfbW92ZSA9IHt9O1xuXG5cdHZhciBkZXN0cm95ID0gaGFzX291dHJvID8gb3V0cm9BbmREZXN0cm95QmxvY2sgOiBkZXN0cm95QmxvY2s7XG5cblx0ZnVuY3Rpb24gaW5zZXJ0KGJsb2NrKSB7XG5cdFx0YmxvY2tbaW50cm9fbWV0aG9kXShub2RlLCBuZXh0KTtcblx0XHRsb29rdXBbYmxvY2sua2V5XSA9IGJsb2NrO1xuXHRcdG5leHQgPSBibG9jay5maXJzdDtcblx0XHRuLS07XG5cdH1cblxuXHR3aGlsZSAobyAmJiBuKSB7XG5cdFx0dmFyIG5ld19ibG9jayA9IG5ld19ibG9ja3NbbiAtIDFdO1xuXHRcdHZhciBvbGRfYmxvY2sgPSBvbGRfYmxvY2tzW28gLSAxXTtcblx0XHR2YXIgbmV3X2tleSA9IG5ld19ibG9jay5rZXk7XG5cdFx0dmFyIG9sZF9rZXkgPSBvbGRfYmxvY2sua2V5O1xuXG5cdFx0aWYgKG5ld19ibG9jayA9PT0gb2xkX2Jsb2NrKSB7XG5cdFx0XHQvLyBkbyBub3RoaW5nXG5cdFx0XHRuZXh0ID0gbmV3X2Jsb2NrLmZpcnN0O1xuXHRcdFx0by0tO1xuXHRcdFx0bi0tO1xuXHRcdH1cblxuXHRcdGVsc2UgaWYgKCFuZXdfbG9va3VwW29sZF9rZXldKSB7XG5cdFx0XHQvLyByZW1vdmUgb2xkIGJsb2NrXG5cdFx0XHRkZXN0cm95KG9sZF9ibG9jaywgbG9va3VwKTtcblx0XHRcdG8tLTtcblx0XHR9XG5cblx0XHRlbHNlIGlmICghbG9va3VwW25ld19rZXldIHx8IHdpbGxfbW92ZVtuZXdfa2V5XSkge1xuXHRcdFx0aW5zZXJ0KG5ld19ibG9jayk7XG5cdFx0fVxuXG5cdFx0ZWxzZSBpZiAoZGlkX21vdmVbb2xkX2tleV0pIHtcblx0XHRcdG8tLTtcblxuXHRcdH0gZWxzZSBpZiAoZGVsdGFzW25ld19rZXldID4gZGVsdGFzW29sZF9rZXldKSB7XG5cdFx0XHRkaWRfbW92ZVtuZXdfa2V5XSA9IHRydWU7XG5cdFx0XHRpbnNlcnQobmV3X2Jsb2NrKTtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHR3aWxsX21vdmVbb2xkX2tleV0gPSB0cnVlO1xuXHRcdFx0by0tO1xuXHRcdH1cblx0fVxuXG5cdHdoaWxlIChvLS0pIHtcblx0XHR2YXIgb2xkX2Jsb2NrID0gb2xkX2Jsb2Nrc1tvXTtcblx0XHRpZiAoIW5ld19sb29rdXBbb2xkX2Jsb2NrLmtleV0pIGRlc3Ryb3kob2xkX2Jsb2NrLCBsb29rdXApO1xuXHR9XG5cblx0d2hpbGUgKG4pIGluc2VydChuZXdfYmxvY2tzW24gLSAxXSk7XG5cblx0cmV0dXJuIG5ld19ibG9ja3M7XG59XG5cbmZ1bmN0aW9uIGdldFNwcmVhZFVwZGF0ZShsZXZlbHMsIHVwZGF0ZXMpIHtcblx0dmFyIHVwZGF0ZSA9IHt9O1xuXG5cdHZhciB0b19udWxsX291dCA9IHt9O1xuXHR2YXIgYWNjb3VudGVkX2ZvciA9IHt9O1xuXG5cdHZhciBpID0gbGV2ZWxzLmxlbmd0aDtcblx0d2hpbGUgKGktLSkge1xuXHRcdHZhciBvID0gbGV2ZWxzW2ldO1xuXHRcdHZhciBuID0gdXBkYXRlc1tpXTtcblxuXHRcdGlmIChuKSB7XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gbykge1xuXHRcdFx0XHRpZiAoIShrZXkgaW4gbikpIHRvX251bGxfb3V0W2tleV0gPSAxO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gbikge1xuXHRcdFx0XHRpZiAoIWFjY291bnRlZF9mb3Jba2V5XSkge1xuXHRcdFx0XHRcdHVwZGF0ZVtrZXldID0gbltrZXldO1xuXHRcdFx0XHRcdGFjY291bnRlZF9mb3Jba2V5XSA9IDE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bGV2ZWxzW2ldID0gbjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIG8pIHtcblx0XHRcdFx0YWNjb3VudGVkX2ZvcltrZXldID0gMTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmb3IgKHZhciBrZXkgaW4gdG9fbnVsbF9vdXQpIHtcblx0XHRpZiAoIShrZXkgaW4gdXBkYXRlKSkgdXBkYXRlW2tleV0gPSB1bmRlZmluZWQ7XG5cdH1cblxuXHRyZXR1cm4gdXBkYXRlO1xufVxuXG5mdW5jdGlvbiBsaW5lYXIodCkge1xuXHRyZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVSdWxlKFxuXHRhLFxuXHRiLFxuXHRkZWx0YSxcblx0ZHVyYXRpb24sXG5cdGVhc2UsXG5cdGZuXG4pIHtcblx0dmFyIGtleWZyYW1lcyA9ICd7XFxuJztcblxuXHRmb3IgKHZhciBwID0gMDsgcCA8PSAxOyBwICs9IDE2LjY2NiAvIGR1cmF0aW9uKSB7XG5cdFx0dmFyIHQgPSBhICsgZGVsdGEgKiBlYXNlKHApO1xuXHRcdGtleWZyYW1lcyArPSBwICogMTAwICsgJyV7JyArIGZuKHQpICsgJ31cXG4nO1xuXHR9XG5cblx0cmV0dXJuIGtleWZyYW1lcyArICcxMDAlIHsnICsgZm4oYikgKyAnfVxcbn0nO1xufVxuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZGFya3NreWFwcC9zdHJpbmctaGFzaC9ibG9iL21hc3Rlci9pbmRleC5qc1xuZnVuY3Rpb24gaGFzaChzdHIpIHtcblx0dmFyIGhhc2ggPSA1MzgxO1xuXHR2YXIgaSA9IHN0ci5sZW5ndGg7XG5cblx0d2hpbGUgKGktLSkgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpIF4gc3RyLmNoYXJDb2RlQXQoaSk7XG5cdHJldHVybiBoYXNoID4+PiAwO1xufVxuXG5mdW5jdGlvbiB3cmFwVHJhbnNpdGlvbihjb21wb25lbnQsIG5vZGUsIGZuLCBwYXJhbXMsIGludHJvLCBvdXRncm91cCkge1xuXHR2YXIgb2JqID0gZm4obm9kZSwgcGFyYW1zKTtcblx0dmFyIGR1cmF0aW9uID0gb2JqLmR1cmF0aW9uIHx8IDMwMDtcblx0dmFyIGVhc2UgPSBvYmouZWFzaW5nIHx8IGxpbmVhcjtcblx0dmFyIGNzc1RleHQ7XG5cblx0Ly8gVE9ETyBzaGFyZSA8c3R5bGU+IHRhZyBiZXR3ZWVuIGFsbCB0cmFuc2l0aW9ucz9cblx0aWYgKG9iai5jc3MgJiYgIXRyYW5zaXRpb25NYW5hZ2VyLnN0eWxlc2hlZXQpIHtcblx0XHR2YXIgc3R5bGUgPSBjcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdHRyYW5zaXRpb25NYW5hZ2VyLnN0eWxlc2hlZXQgPSBzdHlsZS5zaGVldDtcblx0fVxuXG5cdGlmIChpbnRybykge1xuXHRcdGlmIChvYmouY3NzICYmIG9iai5kZWxheSkge1xuXHRcdFx0Y3NzVGV4dCA9IG5vZGUuc3R5bGUuY3NzVGV4dDtcblx0XHRcdG5vZGUuc3R5bGUuY3NzVGV4dCArPSBvYmouY3NzKDApO1xuXHRcdH1cblxuXHRcdGlmIChvYmoudGljaykgb2JqLnRpY2soMCk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHQ6IGludHJvID8gMCA6IDEsXG5cdFx0cnVubmluZzogZmFsc2UsXG5cdFx0cHJvZ3JhbTogbnVsbCxcblx0XHRwZW5kaW5nOiBudWxsLFxuXHRcdHJ1bjogZnVuY3Rpb24oaW50cm8sIGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgcHJvZ3JhbSA9IHtcblx0XHRcdFx0c3RhcnQ6IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSArIChvYmouZGVsYXkgfHwgMCksXG5cdFx0XHRcdGludHJvOiBpbnRybyxcblx0XHRcdFx0Y2FsbGJhY2s6IGNhbGxiYWNrXG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAob2JqLmRlbGF5KSB7XG5cdFx0XHRcdHRoaXMucGVuZGluZyA9IHByb2dyYW07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnN0YXJ0KHByb2dyYW0pO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXRoaXMucnVubmluZykge1xuXHRcdFx0XHR0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0XHR0cmFuc2l0aW9uTWFuYWdlci5hZGQodGhpcyk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRzdGFydDogZnVuY3Rpb24ocHJvZ3JhbSkge1xuXHRcdFx0Y29tcG9uZW50LmZpcmUocHJvZ3JhbS5pbnRybyA/ICdpbnRyby5zdGFydCcgOiAnb3V0cm8uc3RhcnQnLCB7IG5vZGU6IG5vZGUgfSk7XG5cblx0XHRcdHByb2dyYW0uYSA9IHRoaXMudDtcblx0XHRcdHByb2dyYW0uYiA9IHByb2dyYW0uaW50cm8gPyAxIDogMDtcblx0XHRcdHByb2dyYW0uZGVsdGEgPSBwcm9ncmFtLmIgLSBwcm9ncmFtLmE7XG5cdFx0XHRwcm9ncmFtLmR1cmF0aW9uID0gZHVyYXRpb24gKiBNYXRoLmFicyhwcm9ncmFtLmIgLSBwcm9ncmFtLmEpO1xuXHRcdFx0cHJvZ3JhbS5lbmQgPSBwcm9ncmFtLnN0YXJ0ICsgcHJvZ3JhbS5kdXJhdGlvbjtcblxuXHRcdFx0aWYgKG9iai5jc3MpIHtcblx0XHRcdFx0aWYgKG9iai5kZWxheSkgbm9kZS5zdHlsZS5jc3NUZXh0ID0gY3NzVGV4dDtcblxuXHRcdFx0XHRwcm9ncmFtLnJ1bGUgPSBnZW5lcmF0ZVJ1bGUoXG5cdFx0XHRcdFx0cHJvZ3JhbS5hLFxuXHRcdFx0XHRcdHByb2dyYW0uYixcblx0XHRcdFx0XHRwcm9ncmFtLmRlbHRhLFxuXHRcdFx0XHRcdHByb2dyYW0uZHVyYXRpb24sXG5cdFx0XHRcdFx0ZWFzZSxcblx0XHRcdFx0XHRvYmouY3NzXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0dHJhbnNpdGlvbk1hbmFnZXIuYWRkUnVsZShwcm9ncmFtLnJ1bGUsIHByb2dyYW0ubmFtZSA9ICdfX3N2ZWx0ZV8nICsgaGFzaChwcm9ncmFtLnJ1bGUpKTtcblxuXHRcdFx0XHRub2RlLnN0eWxlLmFuaW1hdGlvbiA9IChub2RlLnN0eWxlLmFuaW1hdGlvbiB8fCAnJylcblx0XHRcdFx0XHQuc3BsaXQoJywgJylcblx0XHRcdFx0XHQuZmlsdGVyKGZ1bmN0aW9uKGFuaW0pIHtcblx0XHRcdFx0XHRcdC8vIHdoZW4gaW50cm9pbmcsIGRpc2NhcmQgb2xkIGFuaW1hdGlvbnMgaWYgdGhlcmUgYXJlIGFueVxuXHRcdFx0XHRcdFx0cmV0dXJuIGFuaW0gJiYgKHByb2dyYW0uZGVsdGEgPCAwIHx8ICEvX19zdmVsdGUvLnRlc3QoYW5pbSkpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmNvbmNhdChwcm9ncmFtLm5hbWUgKyAnICcgKyBwcm9ncmFtLmR1cmF0aW9uICsgJ21zIGxpbmVhciAxIGZvcndhcmRzJylcblx0XHRcdFx0XHQuam9pbignLCAnKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcblx0XHRcdHRoaXMucGVuZGluZyA9IG51bGw7XG5cdFx0fSxcblx0XHR1cGRhdGU6IGZ1bmN0aW9uKG5vdykge1xuXHRcdFx0dmFyIHByb2dyYW0gPSB0aGlzLnByb2dyYW07XG5cdFx0XHRpZiAoIXByb2dyYW0pIHJldHVybjtcblxuXHRcdFx0dmFyIHAgPSBub3cgLSBwcm9ncmFtLnN0YXJ0O1xuXHRcdFx0dGhpcy50ID0gcHJvZ3JhbS5hICsgcHJvZ3JhbS5kZWx0YSAqIGVhc2UocCAvIHByb2dyYW0uZHVyYXRpb24pO1xuXHRcdFx0aWYgKG9iai50aWNrKSBvYmoudGljayh0aGlzLnQpO1xuXHRcdH0sXG5cdFx0ZG9uZTogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcHJvZ3JhbSA9IHRoaXMucHJvZ3JhbTtcblx0XHRcdHRoaXMudCA9IHByb2dyYW0uYjtcblx0XHRcdGlmIChvYmoudGljaykgb2JqLnRpY2sodGhpcy50KTtcblx0XHRcdGlmIChvYmouY3NzKSB0cmFuc2l0aW9uTWFuYWdlci5kZWxldGVSdWxlKG5vZGUsIHByb2dyYW0ubmFtZSk7XG5cdFx0XHRwcm9ncmFtLmNhbGxiYWNrKCk7XG5cdFx0XHRwcm9ncmFtID0gbnVsbDtcblx0XHRcdHRoaXMucnVubmluZyA9ICEhdGhpcy5wZW5kaW5nO1xuXHRcdH0sXG5cdFx0YWJvcnQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKG9iai50aWNrKSBvYmoudGljaygxKTtcblx0XHRcdGlmIChvYmouY3NzKSB0cmFuc2l0aW9uTWFuYWdlci5kZWxldGVSdWxlKG5vZGUsIHRoaXMucHJvZ3JhbS5uYW1lKTtcblx0XHRcdHRoaXMucHJvZ3JhbSA9IHRoaXMucGVuZGluZyA9IG51bGw7XG5cdFx0XHR0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcblx0XHR9XG5cdH07XG59XG5cbnZhciB0cmFuc2l0aW9uTWFuYWdlciA9IHtcblx0cnVubmluZzogZmFsc2UsXG5cdHRyYW5zaXRpb25zOiBbXSxcblx0Ym91bmQ6IG51bGwsXG5cdHN0eWxlc2hlZXQ6IG51bGwsXG5cdGFjdGl2ZVJ1bGVzOiB7fSxcblxuXHRhZGQ6IGZ1bmN0aW9uKHRyYW5zaXRpb24pIHtcblx0XHR0aGlzLnRyYW5zaXRpb25zLnB1c2godHJhbnNpdGlvbik7XG5cblx0XHRpZiAoIXRoaXMucnVubmluZykge1xuXHRcdFx0dGhpcy5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmJvdW5kIHx8ICh0aGlzLmJvdW5kID0gdGhpcy5uZXh0LmJpbmQodGhpcykpKTtcblx0XHR9XG5cdH0sXG5cblx0YWRkUnVsZTogZnVuY3Rpb24ocnVsZSwgbmFtZSkge1xuXHRcdGlmICghdGhpcy5hY3RpdmVSdWxlc1tuYW1lXSkge1xuXHRcdFx0dGhpcy5hY3RpdmVSdWxlc1tuYW1lXSA9IHRydWU7XG5cdFx0XHR0aGlzLnN0eWxlc2hlZXQuaW5zZXJ0UnVsZSgnQGtleWZyYW1lcyAnICsgbmFtZSArICcgJyArIHJ1bGUsIHRoaXMuc3R5bGVzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuXHRcdH1cblx0fSxcblxuXHRuZXh0OiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcblxuXHRcdHZhciBub3cgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG5cdFx0dmFyIGkgPSB0aGlzLnRyYW5zaXRpb25zLmxlbmd0aDtcblxuXHRcdHdoaWxlIChpLS0pIHtcblx0XHRcdHZhciB0cmFuc2l0aW9uID0gdGhpcy50cmFuc2l0aW9uc1tpXTtcblxuXHRcdFx0aWYgKHRyYW5zaXRpb24ucHJvZ3JhbSAmJiBub3cgPj0gdHJhbnNpdGlvbi5wcm9ncmFtLmVuZCkge1xuXHRcdFx0XHR0cmFuc2l0aW9uLmRvbmUoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRyYW5zaXRpb24ucGVuZGluZyAmJiBub3cgPj0gdHJhbnNpdGlvbi5wZW5kaW5nLnN0YXJ0KSB7XG5cdFx0XHRcdHRyYW5zaXRpb24uc3RhcnQodHJhbnNpdGlvbi5wZW5kaW5nKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRyYW5zaXRpb24ucnVubmluZykge1xuXHRcdFx0XHR0cmFuc2l0aW9uLnVwZGF0ZShub3cpO1xuXHRcdFx0XHR0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIGlmICghdHJhbnNpdGlvbi5wZW5kaW5nKSB7XG5cdFx0XHRcdHRoaXMudHJhbnNpdGlvbnMuc3BsaWNlKGksIDEpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLnJ1bm5pbmcpIHtcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmJvdW5kKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuc3R5bGVzaGVldCkge1xuXHRcdFx0dmFyIGkgPSB0aGlzLnN0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKGktLSkgdGhpcy5zdHlsZXNoZWV0LmRlbGV0ZVJ1bGUoaSk7XG5cdFx0XHR0aGlzLmFjdGl2ZVJ1bGVzID0ge307XG5cdFx0fVxuXHR9LFxuXG5cdGRlbGV0ZVJ1bGU6IGZ1bmN0aW9uKG5vZGUsIG5hbWUpIHtcblx0XHRub2RlLnN0eWxlLmFuaW1hdGlvbiA9IG5vZGUuc3R5bGUuYW5pbWF0aW9uXG5cdFx0XHQuc3BsaXQoJywgJylcblx0XHRcdC5maWx0ZXIoZnVuY3Rpb24oYW5pbSkge1xuXHRcdFx0XHRyZXR1cm4gYW5pbS5pbmRleE9mKG5hbWUpID09PSAtMTtcblx0XHRcdH0pXG5cdFx0XHQuam9pbignLCAnKTtcblx0fVxufTtcblxuZnVuY3Rpb24gYmxhbmtPYmplY3QoKSB7XG5cdHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwpO1xufVxuXG5mdW5jdGlvbiBkZXN0cm95KGRldGFjaCkge1xuXHR0aGlzLmRlc3Ryb3kgPSBub29wO1xuXHR0aGlzLmZpcmUoJ2Rlc3Ryb3knKTtcblx0dGhpcy5zZXQgPSB0aGlzLmdldCA9IG5vb3A7XG5cblx0aWYgKGRldGFjaCAhPT0gZmFsc2UpIHRoaXMuX2ZyYWdtZW50LnUoKTtcblx0dGhpcy5fZnJhZ21lbnQuZCgpO1xuXHR0aGlzLl9mcmFnbWVudCA9IHRoaXMuX3N0YXRlID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gZGVzdHJveURldihkZXRhY2gpIHtcblx0ZGVzdHJveS5jYWxsKHRoaXMsIGRldGFjaCk7XG5cdHRoaXMuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUud2FybignQ29tcG9uZW50IHdhcyBhbHJlYWR5IGRlc3Ryb3llZCcpO1xuXHR9O1xufVxuXG5mdW5jdGlvbiBfZGlmZmVycyhhLCBiKSB7XG5cdHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiIHx8ICgoYSAmJiB0eXBlb2YgYSA9PT0gJ29iamVjdCcpIHx8IHR5cGVvZiBhID09PSAnZnVuY3Rpb24nKTtcbn1cblxuZnVuY3Rpb24gX2RpZmZlcnNJbW11dGFibGUoYSwgYikge1xuXHRyZXR1cm4gYSAhPSBhID8gYiA9PSBiIDogYSAhPT0gYjtcbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hPYnNlcnZlcnMoY29tcG9uZW50LCBncm91cCwgY2hhbmdlZCwgbmV3U3RhdGUsIG9sZFN0YXRlKSB7XG5cdGZvciAodmFyIGtleSBpbiBncm91cCkge1xuXHRcdGlmICghY2hhbmdlZFtrZXldKSBjb250aW51ZTtcblxuXHRcdHZhciBuZXdWYWx1ZSA9IG5ld1N0YXRlW2tleV07XG5cdFx0dmFyIG9sZFZhbHVlID0gb2xkU3RhdGVba2V5XTtcblxuXHRcdHZhciBjYWxsYmFja3MgPSBncm91cFtrZXldO1xuXHRcdGlmICghY2FsbGJhY2tzKSBjb250aW51ZTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHR2YXIgY2FsbGJhY2sgPSBjYWxsYmFja3NbaV07XG5cdFx0XHRpZiAoY2FsbGJhY2suX19jYWxsaW5nKSBjb250aW51ZTtcblxuXHRcdFx0Y2FsbGJhY2suX19jYWxsaW5nID0gdHJ1ZTtcblx0XHRcdGNhbGxiYWNrLmNhbGwoY29tcG9uZW50LCBuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuXHRcdFx0Y2FsbGJhY2suX19jYWxsaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGZpcmUoZXZlbnROYW1lLCBkYXRhKSB7XG5cdHZhciBoYW5kbGVycyA9XG5cdFx0ZXZlbnROYW1lIGluIHRoaXMuX2hhbmRsZXJzICYmIHRoaXMuX2hhbmRsZXJzW2V2ZW50TmFtZV0uc2xpY2UoKTtcblx0aWYgKCFoYW5kbGVycykgcmV0dXJuO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgaGFuZGxlcnMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRoYW5kbGVyc1tpXS5jYWxsKHRoaXMsIGRhdGEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdldChrZXkpIHtcblx0cmV0dXJuIGtleSA/IHRoaXMuX3N0YXRlW2tleV0gOiB0aGlzLl9zdGF0ZTtcbn1cblxuZnVuY3Rpb24gaW5pdChjb21wb25lbnQsIG9wdGlvbnMpIHtcblx0Y29tcG9uZW50Ll9vYnNlcnZlcnMgPSB7IHByZTogYmxhbmtPYmplY3QoKSwgcG9zdDogYmxhbmtPYmplY3QoKSB9O1xuXHRjb21wb25lbnQuX2hhbmRsZXJzID0gYmxhbmtPYmplY3QoKTtcblx0Y29tcG9uZW50Ll9iaW5kID0gb3B0aW9ucy5fYmluZDtcblxuXHRjb21wb25lbnQub3B0aW9ucyA9IG9wdGlvbnM7XG5cdGNvbXBvbmVudC5yb290ID0gb3B0aW9ucy5yb290IHx8IGNvbXBvbmVudDtcblx0Y29tcG9uZW50LnN0b3JlID0gY29tcG9uZW50LnJvb3Quc3RvcmUgfHwgb3B0aW9ucy5zdG9yZTtcbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShrZXksIGNhbGxiYWNrLCBvcHRpb25zKSB7XG5cdHZhciBncm91cCA9IG9wdGlvbnMgJiYgb3B0aW9ucy5kZWZlclxuXHRcdD8gdGhpcy5fb2JzZXJ2ZXJzLnBvc3Rcblx0XHQ6IHRoaXMuX29ic2VydmVycy5wcmU7XG5cblx0KGdyb3VwW2tleV0gfHwgKGdyb3VwW2tleV0gPSBbXSkpLnB1c2goY2FsbGJhY2spO1xuXG5cdGlmICghb3B0aW9ucyB8fCBvcHRpb25zLmluaXQgIT09IGZhbHNlKSB7XG5cdFx0Y2FsbGJhY2suX19jYWxsaW5nID0gdHJ1ZTtcblx0XHRjYWxsYmFjay5jYWxsKHRoaXMsIHRoaXMuX3N0YXRlW2tleV0pO1xuXHRcdGNhbGxiYWNrLl9fY2FsbGluZyA9IGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRjYW5jZWw6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGluZGV4ID0gZ3JvdXBba2V5XS5pbmRleE9mKGNhbGxiYWNrKTtcblx0XHRcdGlmICh+aW5kZXgpIGdyb3VwW2tleV0uc3BsaWNlKGluZGV4LCAxKTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIG9ic2VydmVEZXYoa2V5LCBjYWxsYmFjaywgb3B0aW9ucykge1xuXHR2YXIgYyA9IChrZXkgPSAnJyArIGtleSkuc2VhcmNoKC9bLltdLyk7XG5cdGlmIChjID4gLTEpIHtcblx0XHR2YXIgbWVzc2FnZSA9XG5cdFx0XHQnVGhlIGZpcnN0IGFyZ3VtZW50IHRvIGNvbXBvbmVudC5vYnNlcnZlKC4uLikgbXVzdCBiZSB0aGUgbmFtZSBvZiBhIHRvcC1sZXZlbCBwcm9wZXJ0eSc7XG5cdFx0aWYgKGMgPiAwKVxuXHRcdFx0bWVzc2FnZSArPSBcIiwgaS5lLiAnXCIgKyBrZXkuc2xpY2UoMCwgYykgKyBcIicgcmF0aGVyIHRoYW4gJ1wiICsga2V5ICsgXCInXCI7XG5cblx0XHR0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG5cdH1cblxuXHRyZXR1cm4gb2JzZXJ2ZS5jYWxsKHRoaXMsIGtleSwgY2FsbGJhY2ssIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBvbihldmVudE5hbWUsIGhhbmRsZXIpIHtcblx0aWYgKGV2ZW50TmFtZSA9PT0gJ3RlYXJkb3duJykgcmV0dXJuIHRoaXMub24oJ2Rlc3Ryb3knLCBoYW5kbGVyKTtcblxuXHR2YXIgaGFuZGxlcnMgPSB0aGlzLl9oYW5kbGVyc1tldmVudE5hbWVdIHx8ICh0aGlzLl9oYW5kbGVyc1tldmVudE5hbWVdID0gW10pO1xuXHRoYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuXG5cdHJldHVybiB7XG5cdFx0Y2FuY2VsOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpbmRleCA9IGhhbmRsZXJzLmluZGV4T2YoaGFuZGxlcik7XG5cdFx0XHRpZiAofmluZGV4KSBoYW5kbGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gb25EZXYoZXZlbnROYW1lLCBoYW5kbGVyKSB7XG5cdGlmIChldmVudE5hbWUgPT09ICd0ZWFyZG93bicpIHtcblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcIlVzZSBjb21wb25lbnQub24oJ2Rlc3Ryb3knLCAuLi4pIGluc3RlYWQgb2YgY29tcG9uZW50Lm9uKCd0ZWFyZG93bicsIC4uLikgd2hpY2ggaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSB1bnN1cHBvcnRlZCBpbiBTdmVsdGUgMlwiXG5cdFx0KTtcblx0XHRyZXR1cm4gdGhpcy5vbignZGVzdHJveScsIGhhbmRsZXIpO1xuXHR9XG5cblx0cmV0dXJuIG9uLmNhbGwodGhpcywgZXZlbnROYW1lLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gcnVuKGZuKSB7XG5cdGZuKCk7XG59XG5cbmZ1bmN0aW9uIHNldChuZXdTdGF0ZSkge1xuXHR0aGlzLl9zZXQoYXNzaWduKHt9LCBuZXdTdGF0ZSkpO1xuXHRpZiAodGhpcy5yb290Ll9sb2NrKSByZXR1cm47XG5cdHRoaXMucm9vdC5fbG9jayA9IHRydWU7XG5cdGNhbGxBbGwodGhpcy5yb290Ll9iZWZvcmVjcmVhdGUpO1xuXHRjYWxsQWxsKHRoaXMucm9vdC5fb25jcmVhdGUpO1xuXHRjYWxsQWxsKHRoaXMucm9vdC5fYWZ0ZXJjcmVhdGUpO1xuXHR0aGlzLnJvb3QuX2xvY2sgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gX3NldChuZXdTdGF0ZSkge1xuXHR2YXIgb2xkU3RhdGUgPSB0aGlzLl9zdGF0ZSxcblx0XHRjaGFuZ2VkID0ge30sXG5cdFx0ZGlydHkgPSBmYWxzZTtcblxuXHRmb3IgKHZhciBrZXkgaW4gbmV3U3RhdGUpIHtcblx0XHRpZiAodGhpcy5fZGlmZmVycyhuZXdTdGF0ZVtrZXldLCBvbGRTdGF0ZVtrZXldKSkgY2hhbmdlZFtrZXldID0gZGlydHkgPSB0cnVlO1xuXHR9XG5cdGlmICghZGlydHkpIHJldHVybjtcblxuXHR0aGlzLl9zdGF0ZSA9IGFzc2lnbihhc3NpZ24oe30sIG9sZFN0YXRlKSwgbmV3U3RhdGUpO1xuXHR0aGlzLl9yZWNvbXB1dGUoY2hhbmdlZCwgdGhpcy5fc3RhdGUpO1xuXHRpZiAodGhpcy5fYmluZCkgdGhpcy5fYmluZChjaGFuZ2VkLCB0aGlzLl9zdGF0ZSk7XG5cblx0aWYgKHRoaXMuX2ZyYWdtZW50KSB7XG5cdFx0ZGlzcGF0Y2hPYnNlcnZlcnModGhpcywgdGhpcy5fb2JzZXJ2ZXJzLnByZSwgY2hhbmdlZCwgdGhpcy5fc3RhdGUsIG9sZFN0YXRlKTtcblx0XHR0aGlzLl9mcmFnbWVudC5wKGNoYW5nZWQsIHRoaXMuX3N0YXRlKTtcblx0XHRkaXNwYXRjaE9ic2VydmVycyh0aGlzLCB0aGlzLl9vYnNlcnZlcnMucG9zdCwgY2hhbmdlZCwgdGhpcy5fc3RhdGUsIG9sZFN0YXRlKTtcblx0fVxufVxuXG5mdW5jdGlvbiBzZXREZXYobmV3U3RhdGUpIHtcblx0aWYgKHR5cGVvZiBuZXdTdGF0ZSAhPT0gJ29iamVjdCcpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHR0aGlzLl9kZWJ1Z05hbWUgKyAnLnNldCB3YXMgY2FsbGVkIHdpdGhvdXQgYW4gb2JqZWN0IG9mIGRhdGEga2V5LXZhbHVlcyB0byB1cGRhdGUuJ1xuXHRcdCk7XG5cdH1cblxuXHR0aGlzLl9jaGVja1JlYWRPbmx5KG5ld1N0YXRlKTtcblx0c2V0LmNhbGwodGhpcywgbmV3U3RhdGUpO1xufVxuXG5mdW5jdGlvbiBjYWxsQWxsKGZucykge1xuXHR3aGlsZSAoZm5zICYmIGZucy5sZW5ndGgpIGZucy5zaGlmdCgpKCk7XG59XG5cbmZ1bmN0aW9uIF9tb3VudCh0YXJnZXQsIGFuY2hvcikge1xuXHR0aGlzLl9mcmFnbWVudFt0aGlzLl9mcmFnbWVudC5pID8gJ2knIDogJ20nXSh0YXJnZXQsIGFuY2hvciB8fCBudWxsKTtcbn1cblxuZnVuY3Rpb24gX3VubW91bnQoKSB7XG5cdGlmICh0aGlzLl9mcmFnbWVudCkgdGhpcy5fZnJhZ21lbnQudSgpO1xufVxuXG5mdW5jdGlvbiBpc1Byb21pc2UodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuXG52YXIgUEVORElORyA9IHt9O1xudmFyIFNVQ0NFU1MgPSB7fTtcbnZhciBGQUlMVVJFID0ge307XG5cbmZ1bmN0aW9uIHJlbW92ZUZyb21TdG9yZSgpIHtcblx0dGhpcy5zdG9yZS5fcmVtb3ZlKHRoaXMpO1xufVxuXG52YXIgcHJvdG8gPSB7XG5cdGRlc3Ryb3k6IGRlc3Ryb3ksXG5cdGdldDogZ2V0LFxuXHRmaXJlOiBmaXJlLFxuXHRvYnNlcnZlOiBvYnNlcnZlLFxuXHRvbjogb24sXG5cdHNldDogc2V0LFxuXHR0ZWFyZG93bjogZGVzdHJveSxcblx0X3JlY29tcHV0ZTogbm9vcCxcblx0X3NldDogX3NldCxcblx0X21vdW50OiBfbW91bnQsXG5cdF91bm1vdW50OiBfdW5tb3VudCxcblx0X2RpZmZlcnM6IF9kaWZmZXJzXG59O1xuXG52YXIgcHJvdG9EZXYgPSB7XG5cdGRlc3Ryb3k6IGRlc3Ryb3lEZXYsXG5cdGdldDogZ2V0LFxuXHRmaXJlOiBmaXJlLFxuXHRvYnNlcnZlOiBvYnNlcnZlRGV2LFxuXHRvbjogb25EZXYsXG5cdHNldDogc2V0RGV2LFxuXHR0ZWFyZG93bjogZGVzdHJveURldixcblx0X3JlY29tcHV0ZTogbm9vcCxcblx0X3NldDogX3NldCxcblx0X21vdW50OiBfbW91bnQsXG5cdF91bm1vdW50OiBfdW5tb3VudCxcblx0X2RpZmZlcnM6IF9kaWZmZXJzXG59O1xuXG5leHBvcnQgeyBibGFua09iamVjdCwgZGVzdHJveSwgZGVzdHJveURldiwgX2RpZmZlcnMsIF9kaWZmZXJzSW1tdXRhYmxlLCBkaXNwYXRjaE9ic2VydmVycywgZmlyZSwgZ2V0LCBpbml0LCBvYnNlcnZlLCBvYnNlcnZlRGV2LCBvbiwgb25EZXYsIHJ1biwgc2V0LCBfc2V0LCBzZXREZXYsIGNhbGxBbGwsIF9tb3VudCwgX3VubW91bnQsIGlzUHJvbWlzZSwgUEVORElORywgU1VDQ0VTUywgRkFJTFVSRSwgcmVtb3ZlRnJvbVN0b3JlLCBwcm90bywgcHJvdG9EZXYsIGFwcGVuZE5vZGUsIGluc2VydE5vZGUsIGRldGFjaE5vZGUsIGRldGFjaEJldHdlZW4sIGRldGFjaEJlZm9yZSwgZGV0YWNoQWZ0ZXIsIHJlaW5zZXJ0QmV0d2VlbiwgcmVpbnNlcnRDaGlsZHJlbiwgcmVpbnNlcnRBZnRlciwgcmVpbnNlcnRCZWZvcmUsIGRlc3Ryb3lFYWNoLCBjcmVhdGVGcmFnbWVudCwgY3JlYXRlRWxlbWVudCwgY3JlYXRlU3ZnRWxlbWVudCwgY3JlYXRlVGV4dCwgY3JlYXRlQ29tbWVudCwgYWRkTGlzdGVuZXIsIHJlbW92ZUxpc3RlbmVyLCBzZXRBdHRyaWJ1dGUsIHNldEF0dHJpYnV0ZXMsIHJlbW92ZUF0dHJpYnV0ZSwgc2V0WGxpbmtBdHRyaWJ1dGUsIGdldEJpbmRpbmdHcm91cFZhbHVlLCB0b051bWJlciwgdGltZVJhbmdlc1RvQXJyYXksIGNoaWxkcmVuLCBjbGFpbUVsZW1lbnQsIGNsYWltVGV4dCwgc2V0SW5wdXRUeXBlLCBzZXRTdHlsZSwgc2VsZWN0T3B0aW9uLCBzZWxlY3RPcHRpb25zLCBzZWxlY3RWYWx1ZSwgc2VsZWN0TXVsdGlwbGVWYWx1ZSwgZGVzdHJveUJsb2NrLCBvdXRyb0FuZERlc3Ryb3lCbG9jaywgdXBkYXRlS2V5ZWRFYWNoLCBnZXRTcHJlYWRVcGRhdGUsIGxpbmVhciwgZ2VuZXJhdGVSdWxlLCBoYXNoLCB3cmFwVHJhbnNpdGlvbiwgdHJhbnNpdGlvbk1hbmFnZXIsIG5vb3AsIGFzc2lnbiB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3ZlbHRlL3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQXBwIGZyb20gJy4vYXBwJztcblxubmV3IEFwcCh7IHRhcmdldDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpIH0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2luZGV4LmpzIiwiPGRpdiBjbGFzcz1cImZvcm0tYm94XCI+XG5cdDxZZWFyTW9udGhQaWNrZXIgcmVmOnBpY2tlcj48L1llYXJNb250aFBpY2tlcj5cblx0PEZvcm0gcmVmOmZvcm0+PC9Gb3JtPlxuPC9kaXY+XG48VGFibGUgcmVmOnRhYmxlPjwvVGFibGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgWWVhck1vbnRoUGlja2VyIGZyb20gJy4uL3llYXItbW9udGgtcGlja2VyJztcbmltcG9ydCBGb3JtIGZyb20gJy4uL2Zvcm0nO1xuaW1wb3J0IFRhYmxlIGZyb20gJy4uL3RhYmxlJztcbmltcG9ydCB7Q2F0ZWdvcmllcywgRXhwZW5zZXN9IGZyb20gJy4uL2RhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhdGEgKCkgeyByZXR1cm4ge307IH0sXG5cdGNvbXBvbmVudHM6IHsgRm9ybSwgVGFibGUsIFllYXJNb250aFBpY2tlciB9LFxuXHRvbmNyZWF0ZSAoKSB7XG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zdWJzdHIoMCwgNyk7XG5cdFx0Q2F0ZWdvcmllcy5nZXQoKS50aGVuKGNhdGVnb3JpZXMgPT4gdGhpcy5yZWZzLmZvcm0uc2V0KHsgZGF0ZSwgY2F0ZWdvcmllcyB9KSk7XG5cdFx0dGhpcy5sb2FkVGFibGUoZGF0ZSk7XG5cblx0XHR0aGlzLnJlZnMuZm9ybS5vbignY2hhbmdlJywgdGhpcy5vbkZvcm1DaGFuZ2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5yZWZzLmZvcm0ub24oJ3JlbW92ZScsIHRoaXMub25SZW1vdmVJdGVtLmJpbmQodGhpcykpO1xuXHRcdHRoaXMucmVmcy5mb3JtLm9uKCdzdWJtaXQnLCB0aGlzLm9uRm9ybVN1Ym1pdC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnJlZnMuZm9ybS5vbignZXJyb3InLCB0aGlzLm9uRm9ybUVycm9yLmJpbmQodGhpcykpO1xuXHRcdHRoaXMucmVmcy5waWNrZXIub24oJ2NoYW5nZScsIHRoaXMub25EYXRlQ2hhbmdlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMucmVmcy50YWJsZS5vbignY2xpY2snLCB0aGlzLm9uVGFibGVDbGljay5iaW5kKHRoaXMpKTtcblx0fSxcblxuXHRtZXRob2RzOiB7XG5cdFx0bG9hZFRhYmxlIChkYXRlKSB7XG5cdFx0XHRpZiAoIWRhdGUpIGRhdGUgPSB0aGlzLmxhc3REYXRlO1xuXHRcdFx0ZWxzZSB0aGlzLmxhc3REYXRlID0gZGF0ZTtcblx0XHRcdEV4cGVuc2VzLmdldChkYXRlKS50aGVuKGRhdGEgPT4ge1xuXHRcdFx0XHR0aGlzLmxhc3RUYWJsZURhdGEgPSBkYXRhO1xuXHRcdFx0XHR0aGlzLnJlZnMudGFibGUuc2V0KHsgZGF0YSB9KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHRvbkRhdGVDaGFuZ2UgKGRhdGUpIHsgdGhpcy5yZWZzLmZvcm0uc2V0KHsgZGF0ZTogZGF0ZS5kYXRlU3RyIH0pOyB9LFxuXG5cdFx0b25Gb3JtQ2hhbmdlIChkYXRhKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnZm9ybSBjaGFuZ2VkJywgZGF0YSk7XG5cdFx0fSxcblxuXHRcdG9uRm9ybVN1Ym1pdCAoZGF0YSkge1xuXHRcdFx0RXhwZW5zZXMuc2F2ZShkYXRhKS50aGVuKCgpID0+IHtcblx0XHRcdFx0dGhpcy5sb2FkVGFibGUoKTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHRvblJlbW92ZUl0ZW0gKGl0ZW0pIHtcblx0XHRcdGNvbnNvbGUubG9nKGl0ZW0pO1xuXHRcdH0sXG5cblx0XHRvbkZvcm1FcnJvciAoZXJyKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnIpO1x0Ly8gVE9ETzogdG9hc3Q/XG5cdFx0fSxcblxuXHRcdG9uVGFibGVDbGljayAoaXRlbSkgeyB0aGlzLnJlZnMuZm9ybS5lZGl0KGl0ZW0pOyB9LFxuXHR9XG59O1xuXG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9hcHAvaW5kZXguaHRtbCIsIjxkaXYgY2xhc3M9XCJ5ZWFyLW1vbnRoLXBpY2tlciB7e2lzVG9kYXkgPyAnaXMtdG9kYXknOiAnJ319XCIgb246d2hlZWw9XCJvbndoZWVsKGV2ZW50KVwiPlxuXHQ8YnV0dG9uIHJlZjpsZWZ0QnV0dG9uIGNsYXNzPVwiYnRuLXByZXZcIiB0aXRsZT1cIlByZXZpb3VzIG1vbnRoXCJcblx0XHRvbjprZXlkb3duPVwia2V5ZG93bihldmVudC5rZXksIC0xKVwiXG5cdFx0b246a2V5dXA9XCJrZXl1cChldmVudC5rZXkpXCJcblx0XHRvbjptb3VzZWRvd249XCJ0aWNrKC0xKVwiXG5cdFx0b246bW91c2VvdXQ9XCJtdXAoKVwiXG5cdFx0b246bW91c2V1cD1cIm11cCgpXCI+PGkgY2xhc3M9XCJpb24taW9zLWFycm93LWJhY2tcIj48L2k+PC9idXR0b24+XG5cblx0PHNwYW4gY2xhc3M9XCJkYXlcIj57e21vbnRoc1ttb250aF19fSB7e3llYXJ9fTwvc3Bhbj5cblxuXHQ8YnV0dG9uIHJlZjpyaWdodEJ1dHRvbiBjbGFzcz1cImJ0bi1uZXh0XCIgdGl0bGU9XCJOZXh0IG1vbnRoXCJcblx0XHRvbjprZXlkb3duPVwia2V5ZG93bihldmVudC5rZXksIDEpXCJcblx0XHRvbjprZXl1cD1cImtleXVwKGV2ZW50LmtleSlcIlxuXHRcdG9uOm1vdXNlZG93bj1cInRpY2soMSlcIlxuXHRcdG9uOm1vdXNlb3V0PVwibXVwKClcIlxuXHRcdG9uOm1vdXNldXA9XCJtdXAoKVwiPjxpIGNsYXNzPVwiaW9uLWlvcy1hcnJvdy1mb3J3YXJkXCI+PC9pPjwvYnV0dG9uPlxuXG5cdDxidXR0b24gdGl0bGU9XCJUb2RheVwiIGNsYXNzPVwiYnRuLXRvZGF5XCIgb246Y2xpY2s9XCJyZXNldCgpXCI+PGkgY2xhc3M9XCJpb24tbWQtdW5kb1wiPjwvaT48L2J1dHRvbj5cbjwvZGl2PlxuXG48c2NyaXB0PlxuZnVuY3Rpb24gemVyb1N0YXRlICgpIHtcblx0Y29uc3QgZCA9IG5ldyBEYXRlKCk7XG5cdGNvbnN0IG1vbnRoID0gZC5nZXRNb250aCgpO1xuXHRjb25zdCB5ZWFyID0gZC5nZXRGdWxsWWVhcigpO1xuXHRjb25zdCBtb250aHMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ107XG5cdHJldHVybiB7IG1vbnRocywgbW9udGgsIHllYXIsIGN1cnJlbnQ6IHsgbW9udGgsIHllYXIgfSB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhdGEgKCkgeyByZXR1cm4gemVyb1N0YXRlKCk7IH0sXG5cdGNvbXB1dGVkOiB7XG5cdFx0aXNUb2RheTogKG1vbnRoLCB5ZWFyLCBjdXJyZW50KSA9PiAobW9udGggPT09IGN1cnJlbnQubW9udGggJiYgeWVhciA9PT0gY3VycmVudC55ZWFyKSxcblx0XHRkYXRlU3RyOiAobW9udGgsIHllYXIpID0+IGAke3llYXJ9LSR7KCcwJyArIChtb250aCArIDEpKS5zdWJzdHIoLTIpfWBcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdG9ud2hlZWwgKGUpIHtcblx0XHRcdGNvbnN0IHRocmVzaG9sZCA9IDI7XG5cdFx0XHRsZXQgdmFsID0gbnVsbDtcblx0XHRcdGlmIChlLmRlbHRhWSA8IC10aHJlc2hvbGQpIHZhbCA9IC0xO1xuXHRcdFx0ZWxzZSBpZiAoZS5kZWx0YVkgPiB0aHJlc2hvbGQpIHZhbCA9IDE7XG5cdFx0XHRpZiAodmFsKSB0aGlzLndoZWVsVGhyb3R0bGUodmFsLCBmYWxzZSk7XG5cdFx0fSxcblxuXHRcdHdoZWVsVGhyb3R0bGUgKHZhbHVlKSB7XG5cdFx0XHRpZiAoIXRoaXMudGhyb3R0bGVyKSB7XG5cdFx0XHRcdHRoaXMuZ28odmFsdWUpO1xuXHRcdFx0XHR0aGlzLm5vdGlmeSgpO1xuXHRcdFx0XHR0aGlzLnRocm90dGxlciA9IHNldFRpbWVvdXQoKCkgPT4gKHRoaXMudGhyb3R0bGVyID0gbnVsbCksIDEwMCk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGtleXVwIChrZXkpIHtcblx0XHRcdHRoaXMua2V5SXNEb3duID0gZmFsc2U7XG5cdFx0XHRpZiAodGhpcy50aWNrZXIpIGNsZWFyVGltZW91dCh0aGlzLnRpY2tlcik7XG5cdFx0XHRpZiAoa2V5ID09PSAnICcgfHwga2V5ID09PSAnRW50ZXInIHx8XG5cdFx0XHRcdGtleSA9PT0gJ0Fycm93TGVmdCcgfHwga2V5ID09PSAnQXJyb3dSaWdodCcgfHxcblx0XHRcdFx0a2V5ID09PSAnQXJyb3dEb3duJyB8fCBrZXkgPT09ICdBcnJvd1VwJykgdGhpcy5ub3RpZnkoKTtcblx0XHR9LFxuXG5cdFx0a2V5ZG93biAoa2V5LCB2YWx1ZSkge1xuXHRcdFx0aWYgKHRoaXMua2V5SXNEb3duKSByZXR1cm47XG5cdFx0XHRpZiAoa2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBrZXkgPT09ICdBcnJvd0Rvd24nKSB7XG5cdFx0XHRcdHRoaXMucmVmcy5sZWZ0QnV0dG9uLmZvY3VzKCk7XG5cdFx0XHRcdHRoaXMua2V5SXNEb3duID0gdHJ1ZTtcblx0XHRcdFx0cmV0dXJuIHRoaXMudGljaygtMSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoa2V5ID09PSAnQXJyb3dSaWdodCcgfHwga2V5ID09PSAnQXJyb3dVcCcpIHtcblx0XHRcdFx0dGhpcy5yZWZzLnJpZ2h0QnV0dG9uLmZvY3VzKCk7XG5cdFx0XHRcdHRoaXMua2V5SXNEb3duID0gdHJ1ZTtcblx0XHRcdFx0cmV0dXJuIHRoaXMudGljaygxKTtcblx0XHRcdH1cblx0XHRcdGlmIChrZXkgPT09ICcgJyB8fCBrZXkgPT09ICdFbnRlcicpIHtcblx0XHRcdFx0dGhpcy5rZXlJc0Rvd24gPSB0cnVlO1xuXHRcdFx0XHR0aGlzLnRpY2sodmFsdWUpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRtdXAgKCkge1xuXHRcdFx0aWYgKHRoaXMudGlja2VyKSBjbGVhclRpbWVvdXQodGhpcy50aWNrZXIpO1xuXHRcdFx0aWYgKHRoaXMubW91c2VJc0Rvd24pIHRoaXMubm90aWZ5KCk7XG5cdFx0XHR0aGlzLm1vdXNlSXNEb3duID0gZmFsc2U7XG5cdFx0fSxcblxuXHRcdHRpY2sgKHZhbHVlLCBkZWxheSA9IDMwMCkge1xuXHRcdFx0aWYgKHRoaXMudGlja2VyKSBjbGVhclRpbWVvdXQodGhpcy50aWNrZXIpO1xuXHRcdFx0dGhpcy5nbyh2YWx1ZSk7XG5cdFx0XHRpZiAodGhpcy5nZXQoJ2lzVG9kYXknKSkgcmV0dXJuIHRoaXMubm90aWZ5KCk7XG5cdFx0XHR0aGlzLm1vdXNlSXNEb3duID0gdHJ1ZTtcblx0XHRcdHRoaXMudGlja2VyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGRlbGF5ID0gTWF0aC5tYXgoNjAsIGRlbGF5IC0gNDApO1xuXHRcdFx0XHR0aGlzLnRpY2sodmFsdWUsIGRlbGF5KTtcblx0XHRcdH0sIGRlbGF5KTtcblx0XHR9LFxuXG5cdFx0Z28gKHZhbHVlKSB7XG5cdFx0XHRsZXQge21vbnRoLCB5ZWFyfSA9IHRoaXMuZ2V0KCk7XG5cdFx0XHRtb250aCArPSB2YWx1ZTtcblx0XHRcdGlmIChtb250aCA8IDApIHsgbW9udGggPSAxMTsgeWVhciAtPSAxOyB9XG5cdFx0XHRlbHNlIGlmIChtb250aCA+IDExKSB7IG1vbnRoID0gMDsgeWVhciArPSAxOyB9XG5cdFx0XHR0aGlzLnNldCh7IG1vbnRoLCB5ZWFyIH0pO1xuXHRcdH0sXG5cblx0XHRub3RpZnkgKCkge1xuXHRcdFx0Y29uc3Qge21vbnRoLCB5ZWFyLCBkYXRlU3RyfSA9IHRoaXMuZ2V0KCk7XG5cdFx0XHR0aGlzLmZpcmUoJ2NoYW5nZScsIHsgbW9udGgsIHllYXIsIGRhdGVTdHIgfSk7XG5cdFx0fSxcblxuXHRcdHJlc2V0ICgpIHtcblx0XHRcdHRoaXMuc2V0KHplcm9TdGF0ZSgpKTtcblx0XHRcdHRoaXMubm90aWZ5KCk7XG5cdFx0fVxuXHR9XG59O1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQveWVhci1tb250aC1waWNrZXIvaW5kZXguaHRtbCIsIjxmb3JtIHJlZjpmb3JtIGNsYXNzPVwiZm9ybSB7e2luRWRpdCA/ICdlZGl0JyA6ICcnfX1cIiBvbjpzdWJtaXQ9XCJvbnN1Ym1pdChldmVudClcIiBvbjppbnB1dD1cIm9uaW5wdXQoZXZlbnQpXCI+XG5cdDxkaXYgY2xhc3M9XCJzdWJmb3Jtc1wiPlxuXHRcdHt7I2VhY2ggcm93cyBhcyByb3csIGlkeH19XG5cdFx0PGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG5cdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIGJpbmQ6dmFsdWU9cm93LmlkPlxuXHRcdFx0PGRpdiBjbGFzcz1cInNlbGVjdC13cmFwXCI+XG5cdFx0XHRcdDxzZWxlY3QgY2xhc3M9XCJzZWxlY3QgY2F0ZWdvcnlcIiBiaW5kOnZhbHVlPXJvdy5jYXRlZ29yeV9pZCBhdXRvZm9jdXM9XCJhdXRvZm9jdXNcIj5cblx0XHRcdFx0XHR7eyNlYWNoIGNhdGVnb3JpZXMgYXMgZ3JvdXB9fVxuXHRcdFx0XHRcdDxvcHRncm91cCBsYWJlbD1cInt7Z3JvdXAubmFtZX19XCI+XG5cdFx0XHRcdFx0XHR7eyNpZiBncm91cC5pdGVtc319XG5cdFx0XHRcdFx0XHR7eyNlYWNoIGdyb3VwLml0ZW1zIGFzIGNhdH19XG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwie3tjYXQuaWR9fVwiPnt7Y2F0Lm5hbWV9fTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0e3svZWFjaH19XG5cdFx0XHRcdFx0XHR7ey9pZn19XG5cdFx0XHRcdFx0PC9vcHRncm91cD5cblx0XHRcdFx0XHR7ey9lYWNofX1cblx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxpbnB1dCBjbGFzcz1cImRlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCJkZXNjcmlwdGlvblwiIGJpbmQ6dmFsdWU9XCJyb3cuZGVzY3JpcHRpb25cIj5cblx0XHRcdDxpbnB1dCBjbGFzcz1cImFtb3VudFwiIHBsYWNlaG9sZGVyPVwiMC4wMFwiIGJpbmQ6dmFsdWU9cm93LmFtb3VudCBvbjprZXlkb3duPVwib25rZXlkb3duKGV2ZW50KVwiPlxuXG5cdFx0XHR7eyNpZiBpZHggPT09IDB9fVxuXHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdGl0bGU9XCJTcGxpdFwiIGNsYXNzPVwiYnRuIGJ0bi1zcGxpdCBpb24tbWQtc3dhcFwiIG9uOmNsaWNrPVwic3BsaXQoKVwiPjwvYnV0dG9uPlxuXHRcdFx0e3tlbHNlfX1cblx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiUmVtb3ZlXCIgY2xhc3M9XCJidG4gYnRuLXVuc3BsaXQgaW9uLW1kLWNsb3NlXCIgb246Y2xpY2s9XCJ1bnNwbGl0KGlkeClcIj48L2J1dHRvbj5cblx0XHRcdHt7L2lmfX1cblx0XHQ8L2Rpdj5cblx0XHR7ey9lYWNofX1cblx0PC9kaXY+XG5cdDxkaXYgY2xhc3M9XCJmb3JtLXJvdyBmb3JtLXJvdy1yZXBlYXRcIj5cblx0XHQ8bGFiZWw+UmVwZWF0IGV2ZXJ5IG1vbnRoLCBmb3IgPC9sYWJlbD5cblx0XHQ8aW5wdXQgY2xhc3M9XCJyZXBlYXRlclwiIG1pbj1cIjFcIiBtYXg9XCIxMlwiIHR5cGU9XCJudW1iZXJcIiBiaW5kOnZhbHVlPXJlcGVhdD5cblx0XHQ8bGFiZWw+IG1vbnRoczwvbGFiZWw+XG5cdDwvZGl2PlxuXHQ8ZGl2IGNsYXNzPVwiZm9ybS1mb290ZXIgZm9ybS1yb3dcIj5cblx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcmVzZXRcIiBvbjpjbGljaz1cInJlc2V0KClcIj5SZXNldDwvYnV0dG9uPlxuXHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGRhbmdlciBidG4tcmVtb3ZlXCIgb246Y2xpY2s9XCJyZW1vdmUoKVwiPlJlbW92ZTwvYnV0dG9uPlxuXHRcdDxkaXYgY2xhc3M9XCJmbGV4LWZpbGxlclwiPjwvZGl2PlxuXHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1jYW5jZWxcIiBvbjpjbGljaz1cInJlc2V0KClcIj5DYW5jZWw8L2J1dHRvbj5cblx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBzdWNjZXNzIGJ0bi1zYXZlXCI+U2F2ZTwvYnV0dG9uPlxuXHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIHN1Y2Nlc3MgYnRuLWFkZFwiPkFkZDwvYnV0dG9uPlxuXHQ8L2Rpdj5cbjwvZm9ybT5cblxuPHNjcmlwdD5cbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0ZGF0YSAoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGluRWRpdDogZmFsc2UsXG5cdFx0XHRkYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDcpLFxuXHRcdFx0cmVwZWF0OiAxLFxuXHRcdFx0cm93czogWyB7aWQ6ICcnLCBkZXNjcmlwdGlvbjogJycsIGFtb3VudDogJyd9IF0sXG5cdFx0XHRjYXRlZ29yaWVzOiBbXSxcblx0XHR9O1xuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Z2V0RGF0YSAoKSB7XG5cdFx0XHRjb25zdCBkYXRlID0gdGhpcy5nZXQoJ2RhdGUnKSB8fCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDcpO1xuXHRcdFx0Y29uc3QgZW50cmllcyA9IHV0aWwuZGVlcENvcHlBcnJheSh0aGlzLmdldCgncm93cycpKVxuXHRcdFx0XHQubWFwKGUgPT4ge1xuXHRcdFx0XHRcdGUuZGF0ZSA9IGRhdGU7XG5cdFx0XHRcdFx0ZS5hbW91bnQgPSB1dGlsLnBhcnNlQW1vdW50KGUuYW1vdW50KTtcblx0XHRcdFx0XHRyZXR1cm4gZTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdC8vIHN1YnRyYWN0IG90aGVyIGFtb3VudHMgZnJvbSB0aGUgZmlyc3Qgcm93XG5cdFx0XHRjb25zdCBhbW91bnRzID0gZW50cmllcy5tYXAoKGl0ZW0sIGkpID0+IGkgPiAwID8gaXRlbS5hbW91bnQgOiAwKTtcblx0XHRcdGNvbnN0IHN1bSA9IGFtb3VudHMucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XHQvLyBhZGQgYWxsIHVwXG5cdFx0XHRlbnRyaWVzWzBdLmFtb3VudCAtPSBzdW07XG5cblx0XHRcdC8vIHJlcGVhdCBtb250aGx5XG5cdFx0XHRjb25zdCByZXBlYXRlciA9IHRoaXMuZ2V0KCdyZXBlYXQnKTtcblx0XHRcdHJldHVybiB1dGlsLnJlcGVhdEVudHJpZXMoZW50cmllcywgcmVwZWF0ZXIpO1xuXHRcdH0sXG5cblx0XHRzcGxpdCAoKSB7XG5cdFx0XHRjb25zdCByb3dzID0gdGhpcy5nZXQoJ3Jvd3MnKTtcblx0XHRcdHJvd3MucHVzaCh7aWQ6ICcnLCBkZXNjcmlwdGlvbjogcm93c1swXS5kZXNjcmlwdGlvbiwgYW1vdW50OiAnJ30pO1xuXHRcdFx0dGhpcy5zZXQoeyByb3dzIH0pO1xuXHRcdH0sXG5cblx0XHR1bnNwbGl0IChpZHgpIHtcblx0XHRcdGNvbnN0IHJvd3MgPSB0aGlzLmdldCgncm93cycpO1xuXHRcdFx0cm93cy5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdHRoaXMuc2V0KHsgcm93cyB9KTtcblx0XHR9LFxuXG5cdFx0ZWRpdCAoZGF0YSkge1xuXHRcdFx0dGhpcy5yZXNldCgpO1xuXHRcdFx0dGhpcy5zZXQoeyBpbkVkaXQ6IHRydWUsIHJvd3M6IFtkYXRhXSB9KTtcblx0XHRcdHRoaXMuZmlyZSgnY2hhbmdlJywgdGhpcy5nZXREYXRhKCkpO1xuXHRcdH0sXG5cblx0XHRyZXNldCAoKSB7XG5cdFx0XHR0aGlzLnNldCh7XG5cdFx0XHRcdGluRWRpdDogZmFsc2UsXG5cdFx0XHRcdHJlcGVhdDogMSxcblx0XHRcdFx0cm93czogWyB7aWQ6ICcnLCBkZXNjcmlwdGlvbjogJycsIGFtb3VudDogJycgfSBdXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMudG9nZ2xlQW1vdW50RXJyb3IoKTtcblx0XHRcdHRoaXMuZmlyZSgnY2hhbmdlJywgdGhpcy5nZXREYXRhKCkpO1xuXHRcdH0sXG5cblx0XHRvbmlucHV0ICgpIHtcblx0XHRcdHRoaXMudG9nZ2xlQW1vdW50RXJyb3IoKTtcblx0XHRcdHRoaXMuZmlyZSgnY2hhbmdlJywgdGhpcy5nZXREYXRhKCkpO1xuXHRcdH0sXG5cblx0XHRyZW1vdmUgKCkge1xuXHRcdFx0dGhpcy5maXJlKCdyZW1vdmUnLCB7IGlkOiB0aGlzLmdldCgncm93cycpWzBdLmlkIH0pO1xuXHRcdFx0dGhpcy5yZXNldCgpO1xuXHRcdH0sXG5cblx0XHRvbnN1Ym1pdCAoZSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Y29uc3QgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpO1xuXHRcdFx0aWYgKCFkYXRhWzBdLmFtb3VudCkge1xuXHRcdFx0XHR0aGlzLnRvZ2dsZUFtb3VudEVycm9yKCdQbGVhc2UgZW50ZXIgYW1vdW50Jyk7XG5cdFx0XHRcdHJldHVybiB0aGlzLmZpcmUoJ2Vycm9yJywgJ1BsZWFzZSBlbnRlciBhbW91bnQnKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuZmlyZSgnc3VibWl0JywgZGF0YSk7XG5cdFx0XHR0aGlzLnJlc2V0KCk7XG5cdFx0fSxcblxuXHRcdG9ua2V5ZG93biAoZSkge1xuXHRcdFx0aWYgKHV0aWwuaXNBbGxvd2VkS2V5KGUpKSByZXR1cm4gdHJ1ZTtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR9LFxuXG5cdFx0dG9nZ2xlQW1vdW50RXJyb3IgKGVycikge1xuXHRcdFx0dGhpcy5yZWZzLmZvcm0ucXVlcnlTZWxlY3RvcignLmFtb3VudCcpLnNldEN1c3RvbVZhbGlkaXR5KGVyciB8fCAnJyk7XG5cdFx0fVxuXHR9XG59O1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvZm9ybS9pbmRleC5odG1sIiwiXG5mdW5jdGlvbiBwYXJzZUFtb3VudCAoYW1vdW50KSB7XG5cdC8qIGVzbGludCBuby1ldmFsOiAwICovXG5cdGFtb3VudCA9ICgnJyArIGFtb3VudCkucmVwbGFjZSgvXFxzL2csICcnKTtcblx0aWYgKCEoL15bK1xcLVxcXFwqLygpXFxkLl0rJC9pKS50ZXN0KGFtb3VudCkpIHJldHVybiAwO1xuXHRpZiAoKC9bK1xcLVxcXFwqLy5dKy9pKS50ZXN0KGFtb3VudCkpIHtcblx0XHR0cnkgeyBhbW91bnQgPSBldmFsKGFtb3VudCk7IH1cblx0XHRjYXRjaCAoZSkgeyBhbW91bnQgPSAwOyB9XG5cdH1cblx0bGV0IG51bSA9IHBhcnNlRmxvYXQoYW1vdW50KTtcblx0aWYgKG51bSA9PT0gSW5maW5pdHkgfHwgaXNOYU4obnVtKSB8fCBudW0gPCAwKSBudW0gPSAnZXJyb3InO1xuXHRyZXR1cm4gbnVtO1xufVxuXG4vLyB5eXl5LW1tXG5mdW5jdGlvbiBnZXRTdHJEYXRlICh5LCBtKSB7XG5cdHJldHVybiBgJHt5fS0keygnMCcgKyBtKS5zdWJzdHIoLTIpfWA7XG59XG5cblxuZnVuY3Rpb24gcGFyc2VEYXRlU3RyIChkYXRlU3RyKSB7XG5cdGxldCBbeWVhciwgbW9udGhdID0gZGF0ZVN0ci5zcGxpdCgnLScpO1xuXHR5ZWFyID0gcGFyc2VJbnQoeWVhciwgMTApO1xuXHRtb250aCA9IHBhcnNlSW50KG1vbnRoLCAxMCk7XG5cdGNvbnN0IHN0ciA9IGdldFN0ckRhdGUoeWVhciwgbW9udGgpO1xuXHRyZXR1cm4geyB5ZWFyLCBtb250aCwgc3RyIH07XG59XG5cblxuZnVuY3Rpb24gZGVlcENvcHlBcnJheSAoYXJyKSB7XG5cdHJldHVybiBhcnIubWFwKG8gPT4gT2JqZWN0LmFzc2lnbih7fSwgbykpO1xufVxuXG5cbmZ1bmN0aW9uIGFkZE1vbnRoc1RvRGF0ZSAoZGF0ZSwgbW9udGhEaWZmKSB7XG5cdGNvbnN0IGRhdGVPYmogPSBwYXJzZURhdGVTdHIoZGF0ZSk7XG5cdGxldCB5ZWFyID0gZGF0ZU9iai55ZWFyO1xuXHRsZXQgbW9udGggPSBkYXRlT2JqLm1vbnRoICsgbW9udGhEaWZmO1xuXHRpZiAobW9udGggPj0gMTMpIHtcblx0XHR5ZWFyID0geWVhciArIE1hdGguZmxvb3IobW9udGggLyAxMik7XG5cdFx0bW9udGggPSAobW9udGggJSAxMikgKyAxO1xuXHR9XG5cdHJldHVybiBnZXRTdHJEYXRlKHllYXIsIG1vbnRoKTtcbn1cblxuXG5mdW5jdGlvbiBjbG9uZUVudHJpZXMgKGVudHJpZXMsIG1vbnRoRGlmZikge1xuXHRyZXR1cm4gZGVlcENvcHlBcnJheShlbnRyaWVzKS5tYXAoaXRlbSA9PiB7XG5cdFx0aXRlbS5kYXRlID0gYWRkTW9udGhzVG9EYXRlKGl0ZW0uZGF0ZSwgbW9udGhEaWZmKTtcblx0XHRyZXR1cm4gaXRlbTtcblx0fSk7XG59XG5cblxuZnVuY3Rpb24gcmVwZWF0RW50cmllcyAoZW50cmllcywgcmVwZWF0ZXIpIHtcblx0aWYgKCFyZXBlYXRlciB8fCByZXBlYXRlciA9PT0gMSkgcmV0dXJuIGVudHJpZXM7XG5cblx0Y29uc3Qgb3JpZ2luYWxFbnRyaWVzID0gZGVlcENvcHlBcnJheShlbnRyaWVzKTtcblx0Zm9yIChsZXQgaSA9IDE7IGkgPCByZXBlYXRlcjsgaSsrKSB7XG5cdFx0Y29uc3QgbmV3Um93cyA9IGNsb25lRW50cmllcyhvcmlnaW5hbEVudHJpZXMsIGkpO1xuXHRcdGVudHJpZXMgPSBlbnRyaWVzLmNvbmNhdChuZXdSb3dzKTtcblx0fVxuXHRyZXR1cm4gZW50cmllcztcbn1cblxuXG5mdW5jdGlvbiBpc0FsbG93ZWRLZXkgKGUpIHtcblx0Y29uc3QgYWxsb3dlZFJlZyA9IC9eWygpXFxkLyorLV17MX0kLztcblx0Y29uc3QgYWxsb3dlZEtleXMgPSBbJ0VudGVyJywgJ1RhYicsICdCYWNrc3BhY2UnLCAnRGVsZXRlJywgJ0Fycm93TGVmdCcsICdBcnJvd1JpZ2h0JywgJy4nXTtcblxuXHRpZiAoYWxsb3dlZEtleXMuaW5kZXhPZihlLmtleSkgPiAtMSkgcmV0dXJuIHRydWU7XG5cdGlmIChlLm1ldGFLZXkgfHwgZS5jdHJsS2V5KSByZXR1cm4gdHJ1ZTtcblx0aWYgKGUua2V5Lmxlbmd0aCA8IDMgJiYgYWxsb3dlZFJlZy50ZXN0KGUua2V5KSkgcmV0dXJuIHRydWU7XG5cdHJldHVybiBmYWxzZTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHBhcnNlRGF0ZVN0cixcblx0cGFyc2VBbW91bnQsXG5cdHJlcGVhdEVudHJpZXMsXG5cdGRlZXBDb3B5QXJyYXksXG5cdGlzQWxsb3dlZEtleSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvZm9ybS91dGlsLmpzIiwiPGRpdiBjbGFzcz1cInRhYmxlXCIgcmVmOnRhYmxlPlxuXHR7eyNpZiBkYXRhICYmIGRhdGEuaXRlbXMgfX1cblx0XHQ8dGFibGU+XG5cdFx0PHRoZWFkPjx0cj5cblx0XHRcdDx0ZCBjbGFzcz1cImRhdGVcIj5EYXRlPC90ZD5cblx0XHRcdDx0ZCBjbGFzcz1cImRlc2NcIj5EZXNjcmlwdGlvbjwvdGQ+XG5cdFx0XHQ8dGQgY2xhc3M9XCJhbW91bnRcIj5BbW91bnQ8L3RkPlxuXHRcdDwvdHI+PC90aGVhZD5cblx0XHQ8dGJvZHk+XG5cdFx0XHR7eyNlYWNoIGRhdGEuaXRlbXMgYXMgaXRlbSwgaWR4fX1cblx0XHRcdFx0PHRyIG9uOmNsaWNrPVwib25Sb3dDbGljayhpdGVtKVwiPlxuXHRcdFx0XHRcdDx0ZD57e2l0ZW0uZGF0ZS5zdWJzdHIoMCwgNyl9fTwvdGQ+XG5cdFx0XHRcdFx0PHRkIGNsYXNzPVwiZGVzY1wiPnt7aXRlbS5jYXRlZ29yeX19IC0ge3tpdGVtLmRlc2NyaXB0aW9ufX08L3RkPlxuXHRcdFx0XHRcdDx0ZCBjbGFzcz1cImFtb3VudFwiPnt7aXRlbS5hbW91bnRfc3RyfX08L3RkPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0e3svZWFjaH19XG5cdFx0PC90Ym9keT5cblx0XHQ8dGZvb3Q+PHRyPlxuXHRcdFx0PHRkIGNvbHNwYW49XCIyXCI+XG5cdFx0XHRcdDwhLS0gPGkgY2xhc3M9XCJpb24tbWQtc2VhcmNoXCI+PC9pPiAtLT5cblx0XHRcdFx0PGlucHV0IGNsYXNzPVwidGFibGUtZmlsdGVyXCIgdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiRmlsdGVyXCI+XG5cdFx0XHQ8L3RkPlxuXHRcdFx0PHRkIGNsYXNzPVwiYW1vdW50XCI+e3tkYXRhLnRvdGFsX3N0cn19PC90ZD5cblx0XHQ8L3RyPjwvdGZvb3Q+XG5cdFx0PC90YWJsZT5cblx0e3svaWZ9fVxuPC9kaXY+XG5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcblx0ZGF0YSAoKSB7XG5cdFx0cmV0dXJuIHsgZGF0YTogW10gfTtcblx0fSxcblx0b25jcmVhdGUgKCkge1xuXHR9LFxuXG5cdG1ldGhvZHM6IHtcblx0XHRvblJvd0NsaWNrIChpdGVtKSB7XG5cdFx0XHR0aGlzLmZpcmUoJ2NsaWNrJywgaXRlbSk7XG5cdFx0fVxuXHR9XG59O1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvdGFibGUvaW5kZXguaHRtbCIsIlxuZnVuY3Rpb24gZ2V0ICh1cmwpIHtcblx0cmV0dXJuIGZldGNoKHVybCwgeyBjcmVkZW50aWFsczogJ2luY2x1ZGUnIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xufVxuXG5mdW5jdGlvbiBwb3N0ICh1cmwsIHBhcmFtcykge1xuXHRjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkocGFyYW1zKTtcblx0Y29uc3Qgb3B0cyA9IHtcblx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRoZWFkZXJzOiB7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcblx0XHRjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuXHRcdGJvZHksXG5cdH07XG5cdHJldHVybiBmZXRjaCh1cmwsIG9wdHMpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xufVxuXG5cblxuY29uc3QgQ2F0ZWdvcmllcyA9IHtcblx0Z2V0OiAoKSA9PiBnZXQoJ2FwaS9jYXRlZ29yeXRyZWUnKSxcbn07XG5cbmNvbnN0IEV4cGVuc2VzID0ge1xuXHRnZXQgKGRhdGUgPSAnJywgaWQgPSAnJykge1xuXHRcdGlmIChpZCkgaWQgPSBgLyR7aWR9YDtcblx0XHRpZiAoZGF0ZSkgZGF0ZSA9IGA/ZGF0ZT0ke2RhdGV9YDtcblx0XHRyZXR1cm4gZ2V0KGBhcGkvZW50cmllcyR7aWR9JHtkYXRlfWApO1xuXHR9LFxuXHRzYXZlIChkYXRhKSB7XG5cdFx0Y29uc3QgaWQgPSBkYXRhLmxlbmd0aCA9PT0gMSAmJiBkYXRhWzBdLmlkO1xuXHRcdGlmIChkYXRhLmxlbmd0aCA9PT0gMSkgZGF0YSA9IGRhdGFbMF07XG5cdFx0cmV0dXJuIHBvc3QoYGFwaS9lbnRyaWVzJHtpZCA/ICcvJyArIGlkIDogJyd9YCwgZGF0YSk7XG5cdH1cbn07XG5cblxuXG5leHBvcnQge1xuXHRDYXRlZ29yaWVzLFxuXHRFeHBlbnNlcyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvZGF0YS9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=