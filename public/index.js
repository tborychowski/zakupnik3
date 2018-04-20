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
			this.setData(data);
		});
	},

	setData (data) { this.refs.table.set({ data }); },

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

	this.refs.form.on('change', this.onFormChange.bind(this));
	this.refs.form.on('remove', this.onRemoveItem.bind(this));
	this.refs.form.on('submit', this.onFormSubmit.bind(this));
	this.refs.form.on('error', this.onFormError.bind(this));
	this.refs.picker.on('change', this.onDateChange.bind(this));
	this.refs.table.on('click', this.onTableClick.bind(this));

	this.loadTable(date);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDNlYzllODM2MmNlNjQyZDUyZDkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9hcHAvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9jbGllbnQveWVhci1tb250aC1waWNrZXIvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvZm9ybS9pbmRleC5odG1sIiwid2VicGFjazovLy8uL2NsaWVudC9mb3JtL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3RhYmxlL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2RhdGEvaW5kZXguanMiXSwibmFtZXMiOlsidGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyc2VBbW91bnQiLCJhbW91bnQiLCJyZXBsYWNlIiwidGVzdCIsImV2YWwiLCJlIiwibnVtIiwicGFyc2VGbG9hdCIsIkluZmluaXR5IiwiaXNOYU4iLCJnZXRTdHJEYXRlIiwieSIsIm0iLCJzdWJzdHIiLCJwYXJzZURhdGVTdHIiLCJkYXRlU3RyIiwieWVhciIsIm1vbnRoIiwic3BsaXQiLCJwYXJzZUludCIsInN0ciIsImRlZXBDb3B5QXJyYXkiLCJhcnIiLCJtYXAiLCJvIiwiT2JqZWN0IiwiYXNzaWduIiwiYWRkTW9udGhzVG9EYXRlIiwiZGF0ZSIsIm1vbnRoRGlmZiIsImRhdGVPYmoiLCJNYXRoIiwiZmxvb3IiLCJjbG9uZUVudHJpZXMiLCJlbnRyaWVzIiwiaXRlbSIsInJlcGVhdEVudHJpZXMiLCJyZXBlYXRlciIsIm9yaWdpbmFsRW50cmllcyIsImkiLCJuZXdSb3dzIiwiY29uY2F0IiwiaXNBbGxvd2VkS2V5IiwiYWxsb3dlZFJlZyIsImFsbG93ZWRLZXlzIiwiaW5kZXhPZiIsImtleSIsIm1ldGFLZXkiLCJjdHJsS2V5IiwibGVuZ3RoIiwiZ2V0IiwidXJsIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXMiLCJqc29uIiwicG9zdCIsInBhcmFtcyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib3B0cyIsIm1ldGhvZCIsImhlYWRlcnMiLCJDYXRlZ29yaWVzIiwiRXhwZW5zZXMiLCJpZCIsInNhdmUiLCJkYXRhIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsdUJBQXVCO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkMsY0FBYyw2Q0FBNkM7QUFDM0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixrQkFBa0I7QUFDbEM7QUFDQTtBQUNBLGtCQUFrQiw0QkFBNEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixrQkFBa0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQiwyQkFBMkI7QUFDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLDJCQUEyQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVB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LFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzdELENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztBQUUzRCxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNORixTQUFTLFNBQVMsSUFBSTtDQUNyQixNQUFNLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0NBQ3JCLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztDQUMzQixNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7Q0FDN0IsTUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0NBQ3BHLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQztDQUN6RDs7QUFFRCxpQkFHWSxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU87UUFBTSxLQUFLLEtBQUssT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLEtBQUssT0FBTyxDQUFDLElBQUk7OztpQkFDMUUsS0FBSyxFQUFFLElBQUk7UUFBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdB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WUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QyxFQUFFLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDdEMsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztBQUMzQixFQUFFOztBQUVGLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssR0FBRyxHQUFHLEVBQUU7QUFDM0IsRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakIsRUFBRSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEQsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztBQUMxQixFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU07QUFDakMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ3BDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDM0IsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ1osRUFBRTs7QUFFRixDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtBQUNaLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDakMsRUFBRSxLQUFLLElBQUksS0FBSyxDQUFDO0FBQ2pCLEVBQUUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRTtBQUMzQyxPQUFP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Q1YsU0FBT3NCLElBQUssY0FBYWlCLEVBQUcsR0FBRXZDLElBQUssRUFBNUIsQ0FBUDtBQUNBLEVBTGU7QUFNaEJ3QyxNQUFNQyxJQUFOLEVBQVk7QUFDWCxRQUFNRixLQUFLRSxLQUFLcEIsTUFBTCxLQUFnQixDQUFoQixJQUFxQm9CLEtBQUssQ0FBTCxFQUFRRixFQUF4QztBQUNBLE1BQUlFLEtBQUtwQixNQUFMLEtBQWdCLENBQXBCLEVBQXVCb0IsT0FBT0EsS0FBSyxDQUFMLENBQVA7QUFDdkIsU0FBT1osS0FBTSxjQUFhVSxLQUFLLE1BQU1BLEVBQVgsR0FBZ0IsRUFBRyxFQUF0QyxFQUF5Q0UsSUFBekMsQ0FBUDtBQUNBO0FBVmUsQ0FBakIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL3B1YmxpYy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwM2VjOWU4MzYyY2U2NDJkNTJkOSIsImZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5mdW5jdGlvbiBhc3NpZ24odGFyLCBzcmMpIHtcblx0Zm9yICh2YXIgayBpbiBzcmMpIHRhcltrXSA9IHNyY1trXTtcblx0cmV0dXJuIHRhcjtcbn1cblxuZnVuY3Rpb24gYXBwZW5kTm9kZShub2RlLCB0YXJnZXQpIHtcblx0dGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xufVxuXG5mdW5jdGlvbiBpbnNlcnROb2RlKG5vZGUsIHRhcmdldCwgYW5jaG9yKSB7XG5cdHRhcmdldC5pbnNlcnRCZWZvcmUobm9kZSwgYW5jaG9yKTtcbn1cblxuZnVuY3Rpb24gZGV0YWNoTm9kZShub2RlKSB7XG5cdG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbn1cblxuZnVuY3Rpb24gZGV0YWNoQmV0d2VlbihiZWZvcmUsIGFmdGVyKSB7XG5cdHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcgJiYgYmVmb3JlLm5leHRTaWJsaW5nICE9PSBhZnRlcikge1xuXHRcdGJlZm9yZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJlZm9yZS5uZXh0U2libGluZyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZGV0YWNoQmVmb3JlKGFmdGVyKSB7XG5cdHdoaWxlIChhZnRlci5wcmV2aW91c1NpYmxpbmcpIHtcblx0XHRhZnRlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGFmdGVyLnByZXZpb3VzU2libGluZyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZGV0YWNoQWZ0ZXIoYmVmb3JlKSB7XG5cdHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcpIHtcblx0XHRiZWZvcmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiZWZvcmUubmV4dFNpYmxpbmcpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlaW5zZXJ0QmV0d2VlbihiZWZvcmUsIGFmdGVyLCB0YXJnZXQpIHtcblx0d2hpbGUgKGJlZm9yZS5uZXh0U2libGluZyAmJiBiZWZvcmUubmV4dFNpYmxpbmcgIT09IGFmdGVyKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKGJlZm9yZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJlZm9yZS5uZXh0U2libGluZykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlaW5zZXJ0Q2hpbGRyZW4ocGFyZW50LCB0YXJnZXQpIHtcblx0d2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB0YXJnZXQuYXBwZW5kQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xufVxuXG5mdW5jdGlvbiByZWluc2VydEFmdGVyKGJlZm9yZSwgdGFyZ2V0KSB7XG5cdHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcpIHRhcmdldC5hcHBlbmRDaGlsZChiZWZvcmUubmV4dFNpYmxpbmcpO1xufVxuXG5mdW5jdGlvbiByZWluc2VydEJlZm9yZShhZnRlciwgdGFyZ2V0KSB7XG5cdHZhciBwYXJlbnQgPSBhZnRlci5wYXJlbnROb2RlO1xuXHR3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQgIT09IGFmdGVyKSB0YXJnZXQuYXBwZW5kQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xufVxuXG5mdW5jdGlvbiBkZXN0cm95RWFjaChpdGVyYXRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgaXRlcmF0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGlmIChpdGVyYXRpb25zW2ldKSBpdGVyYXRpb25zW2ldLmQoKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudCgpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChuYW1lKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdmdFbGVtZW50KG5hbWUpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBuYW1lKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dChkYXRhKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tbWVudCgpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpO1xufVxuXG5mdW5jdGlvbiBhZGRMaXN0ZW5lcihub2RlLCBldmVudCwgaGFuZGxlcikge1xuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIobm9kZSwgZXZlbnQsIGhhbmRsZXIpIHtcblx0bm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZShub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG5cdG5vZGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKG5vZGUsIGF0dHJpYnV0ZXMpIHtcblx0Zm9yICh2YXIga2V5IGluIGF0dHJpYnV0ZXMpIHtcblx0XHRpZiAoa2V5IGluIG5vZGUpIHtcblx0XHRcdG5vZGVba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGF0dHJpYnV0ZXNba2V5XSA9PT0gdW5kZWZpbmVkKSByZW1vdmVBdHRyaWJ1dGUobm9kZSwga2V5KTtcblx0XHRcdGVsc2Ugc2V0QXR0cmlidXRlKG5vZGUsIGtleSwgYXR0cmlidXRlc1trZXldKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKG5vZGUsIGF0dHJpYnV0ZSkge1xuXHRub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xufVxuXG5mdW5jdGlvbiBzZXRYbGlua0F0dHJpYnV0ZShub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG5cdG5vZGUuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCBhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gZ2V0QmluZGluZ0dyb3VwVmFsdWUoZ3JvdXApIHtcblx0dmFyIHZhbHVlID0gW107XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXAubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRpZiAoZ3JvdXBbaV0uY2hlY2tlZCkgdmFsdWUucHVzaChncm91cFtpXS5fX3ZhbHVlKTtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZSA9PT0gJycgPyB1bmRlZmluZWQgOiArdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHRpbWVSYW5nZXNUb0FycmF5KHJhbmdlcykge1xuXHR2YXIgYXJyYXkgPSBbXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCByYW5nZXMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRhcnJheS5wdXNoKHsgc3RhcnQ6IHJhbmdlcy5zdGFydChpKSwgZW5kOiByYW5nZXMuZW5kKGkpIH0pO1xuXHR9XG5cdHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gY2hpbGRyZW4gKGVsZW1lbnQpIHtcblx0cmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5jaGlsZE5vZGVzKTtcbn1cblxuZnVuY3Rpb24gY2xhaW1FbGVtZW50IChub2RlcywgbmFtZSwgYXR0cmlidXRlcywgc3ZnKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHR2YXIgbm9kZSA9IG5vZGVzW2ldO1xuXHRcdGlmIChub2RlLm5vZGVOYW1lID09PSBuYW1lKSB7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG5vZGUuYXR0cmlidXRlcy5sZW5ndGg7IGogKz0gMSkge1xuXHRcdFx0XHR2YXIgYXR0cmlidXRlID0gbm9kZS5hdHRyaWJ1dGVzW2pdO1xuXHRcdFx0XHRpZiAoIWF0dHJpYnV0ZXNbYXR0cmlidXRlLm5hbWVdKSBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUubmFtZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbm9kZXMuc3BsaWNlKGksIDEpWzBdOyAvLyBUT0RPIHN0cmlwIHVud2FudGVkIGF0dHJpYnV0ZXNcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3ZnID8gY3JlYXRlU3ZnRWxlbWVudChuYW1lKSA6IGNyZWF0ZUVsZW1lbnQobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNsYWltVGV4dCAobm9kZXMsIGRhdGEpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdHZhciBub2RlID0gbm9kZXNbaV07XG5cdFx0aWYgKG5vZGUubm9kZVR5cGUgPT09IDMpIHtcblx0XHRcdG5vZGUuZGF0YSA9IGRhdGE7XG5cdFx0XHRyZXR1cm4gbm9kZXMuc3BsaWNlKGksIDEpWzBdO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjcmVhdGVUZXh0KGRhdGEpO1xufVxuXG5mdW5jdGlvbiBzZXRJbnB1dFR5cGUoaW5wdXQsIHR5cGUpIHtcblx0dHJ5IHtcblx0XHRpbnB1dC50eXBlID0gdHlwZTtcblx0fSBjYXRjaCAoZSkge31cbn1cblxuZnVuY3Rpb24gc2V0U3R5bGUobm9kZSwga2V5LCB2YWx1ZSkge1xuXHRub2RlLnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RPcHRpb24oc2VsZWN0LCB2YWx1ZSkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dmFyIG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuXG5cdFx0aWYgKG9wdGlvbi5fX3ZhbHVlID09PSB2YWx1ZSkge1xuXHRcdFx0b3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0T3B0aW9ucyhzZWxlY3QsIHZhbHVlKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0Lm9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHR2YXIgb3B0aW9uID0gc2VsZWN0Lm9wdGlvbnNbaV07XG5cdFx0b3B0aW9uLnNlbGVjdGVkID0gfnZhbHVlLmluZGV4T2Yob3B0aW9uLl9fdmFsdWUpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHNlbGVjdFZhbHVlKHNlbGVjdCkge1xuXHR2YXIgc2VsZWN0ZWRPcHRpb24gPSBzZWxlY3QucXVlcnlTZWxlY3RvcignOmNoZWNrZWQnKSB8fCBzZWxlY3Qub3B0aW9uc1swXTtcblx0cmV0dXJuIHNlbGVjdGVkT3B0aW9uICYmIHNlbGVjdGVkT3B0aW9uLl9fdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdE11bHRpcGxlVmFsdWUoc2VsZWN0KSB7XG5cdHJldHVybiBbXS5tYXAuY2FsbChzZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnOmNoZWNrZWQnKSwgZnVuY3Rpb24ob3B0aW9uKSB7XG5cdFx0cmV0dXJuIG9wdGlvbi5fX3ZhbHVlO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZGVzdHJveUJsb2NrKGJsb2NrLCBsb29rdXApIHtcblx0YmxvY2sudSgpO1xuXHRibG9jay5kKCk7XG5cdGxvb2t1cFtibG9jay5rZXldID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gb3V0cm9BbmREZXN0cm95QmxvY2soYmxvY2ssIGxvb2t1cCkge1xuXHRibG9jay5vKGZ1bmN0aW9uKCkge1xuXHRcdGRlc3Ryb3lCbG9jayhibG9jaywgbG9va3VwKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUtleWVkRWFjaChvbGRfYmxvY2tzLCBjb21wb25lbnQsIGNoYW5nZWQsIGtleV9wcm9wLCBkeW5hbWljLCBsaXN0LCBsb29rdXAsIG5vZGUsIGhhc19vdXRybywgY3JlYXRlX2VhY2hfYmxvY2ssIGludHJvX21ldGhvZCwgbmV4dCwgZ2V0X2NvbnRleHQpIHtcblx0dmFyIG8gPSBvbGRfYmxvY2tzLmxlbmd0aDtcblx0dmFyIG4gPSBsaXN0Lmxlbmd0aDtcblxuXHR2YXIgaSA9IG87XG5cdHZhciBvbGRfaW5kZXhlcyA9IHt9O1xuXHR3aGlsZSAoaS0tKSBvbGRfaW5kZXhlc1tvbGRfYmxvY2tzW2ldLmtleV0gPSBpO1xuXG5cdHZhciBuZXdfYmxvY2tzID0gW107XG5cdHZhciBuZXdfbG9va3VwID0ge307XG5cdHZhciBkZWx0YXMgPSB7fTtcblxuXHR2YXIgaSA9IG47XG5cdHdoaWxlIChpLS0pIHtcblx0XHR2YXIga2V5ID0gbGlzdFtpXVtrZXlfcHJvcF07XG5cdFx0dmFyIGJsb2NrID0gbG9va3VwW2tleV07XG5cblx0XHRpZiAoIWJsb2NrKSB7XG5cdFx0XHRibG9jayA9IGNyZWF0ZV9lYWNoX2Jsb2NrKGNvbXBvbmVudCwga2V5LCBnZXRfY29udGV4dChpKSk7XG5cdFx0XHRibG9jay5jKCk7XG5cdFx0fSBlbHNlIGlmIChkeW5hbWljKSB7XG5cdFx0XHRibG9jay5wKGNoYW5nZWQsIGdldF9jb250ZXh0KGkpKTtcblx0XHR9XG5cblx0XHRuZXdfYmxvY2tzW2ldID0gbmV3X2xvb2t1cFtrZXldID0gYmxvY2s7XG5cblx0XHRpZiAoa2V5IGluIG9sZF9pbmRleGVzKSBkZWx0YXNba2V5XSA9IE1hdGguYWJzKGkgLSBvbGRfaW5kZXhlc1trZXldKTtcblx0fVxuXG5cdHZhciB3aWxsX21vdmUgPSB7fTtcblx0dmFyIGRpZF9tb3ZlID0ge307XG5cblx0dmFyIGRlc3Ryb3kgPSBoYXNfb3V0cm8gPyBvdXRyb0FuZERlc3Ryb3lCbG9jayA6IGRlc3Ryb3lCbG9jaztcblxuXHRmdW5jdGlvbiBpbnNlcnQoYmxvY2spIHtcblx0XHRibG9ja1tpbnRyb19tZXRob2RdKG5vZGUsIG5leHQpO1xuXHRcdGxvb2t1cFtibG9jay5rZXldID0gYmxvY2s7XG5cdFx0bmV4dCA9IGJsb2NrLmZpcnN0O1xuXHRcdG4tLTtcblx0fVxuXG5cdHdoaWxlIChvICYmIG4pIHtcblx0XHR2YXIgbmV3X2Jsb2NrID0gbmV3X2Jsb2Nrc1tuIC0gMV07XG5cdFx0dmFyIG9sZF9ibG9jayA9IG9sZF9ibG9ja3NbbyAtIDFdO1xuXHRcdHZhciBuZXdfa2V5ID0gbmV3X2Jsb2NrLmtleTtcblx0XHR2YXIgb2xkX2tleSA9IG9sZF9ibG9jay5rZXk7XG5cblx0XHRpZiAobmV3X2Jsb2NrID09PSBvbGRfYmxvY2spIHtcblx0XHRcdC8vIGRvIG5vdGhpbmdcblx0XHRcdG5leHQgPSBuZXdfYmxvY2suZmlyc3Q7XG5cdFx0XHRvLS07XG5cdFx0XHRuLS07XG5cdFx0fVxuXG5cdFx0ZWxzZSBpZiAoIW5ld19sb29rdXBbb2xkX2tleV0pIHtcblx0XHRcdC8vIHJlbW92ZSBvbGQgYmxvY2tcblx0XHRcdGRlc3Ryb3kob2xkX2Jsb2NrLCBsb29rdXApO1xuXHRcdFx0by0tO1xuXHRcdH1cblxuXHRcdGVsc2UgaWYgKCFsb29rdXBbbmV3X2tleV0gfHwgd2lsbF9tb3ZlW25ld19rZXldKSB7XG5cdFx0XHRpbnNlcnQobmV3X2Jsb2NrKTtcblx0XHR9XG5cblx0XHRlbHNlIGlmIChkaWRfbW92ZVtvbGRfa2V5XSkge1xuXHRcdFx0by0tO1xuXG5cdFx0fSBlbHNlIGlmIChkZWx0YXNbbmV3X2tleV0gPiBkZWx0YXNbb2xkX2tleV0pIHtcblx0XHRcdGRpZF9tb3ZlW25ld19rZXldID0gdHJ1ZTtcblx0XHRcdGluc2VydChuZXdfYmxvY2spO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdHdpbGxfbW92ZVtvbGRfa2V5XSA9IHRydWU7XG5cdFx0XHRvLS07XG5cdFx0fVxuXHR9XG5cblx0d2hpbGUgKG8tLSkge1xuXHRcdHZhciBvbGRfYmxvY2sgPSBvbGRfYmxvY2tzW29dO1xuXHRcdGlmICghbmV3X2xvb2t1cFtvbGRfYmxvY2sua2V5XSkgZGVzdHJveShvbGRfYmxvY2ssIGxvb2t1cCk7XG5cdH1cblxuXHR3aGlsZSAobikgaW5zZXJ0KG5ld19ibG9ja3NbbiAtIDFdKTtcblxuXHRyZXR1cm4gbmV3X2Jsb2Nrcztcbn1cblxuZnVuY3Rpb24gZ2V0U3ByZWFkVXBkYXRlKGxldmVscywgdXBkYXRlcykge1xuXHR2YXIgdXBkYXRlID0ge307XG5cblx0dmFyIHRvX251bGxfb3V0ID0ge307XG5cdHZhciBhY2NvdW50ZWRfZm9yID0ge307XG5cblx0dmFyIGkgPSBsZXZlbHMubGVuZ3RoO1xuXHR3aGlsZSAoaS0tKSB7XG5cdFx0dmFyIG8gPSBsZXZlbHNbaV07XG5cdFx0dmFyIG4gPSB1cGRhdGVzW2ldO1xuXG5cdFx0aWYgKG4pIHtcblx0XHRcdGZvciAodmFyIGtleSBpbiBvKSB7XG5cdFx0XHRcdGlmICghKGtleSBpbiBuKSkgdG9fbnVsbF9vdXRba2V5XSA9IDE7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAodmFyIGtleSBpbiBuKSB7XG5cdFx0XHRcdGlmICghYWNjb3VudGVkX2ZvcltrZXldKSB7XG5cdFx0XHRcdFx0dXBkYXRlW2tleV0gPSBuW2tleV07XG5cdFx0XHRcdFx0YWNjb3VudGVkX2ZvcltrZXldID0gMTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRsZXZlbHNbaV0gPSBuO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gbykge1xuXHRcdFx0XHRhY2NvdW50ZWRfZm9yW2tleV0gPSAxO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZvciAodmFyIGtleSBpbiB0b19udWxsX291dCkge1xuXHRcdGlmICghKGtleSBpbiB1cGRhdGUpKSB1cGRhdGVba2V5XSA9IHVuZGVmaW5lZDtcblx0fVxuXG5cdHJldHVybiB1cGRhdGU7XG59XG5cbmZ1bmN0aW9uIGxpbmVhcih0KSB7XG5cdHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVJ1bGUoXG5cdGEsXG5cdGIsXG5cdGRlbHRhLFxuXHRkdXJhdGlvbixcblx0ZWFzZSxcblx0Zm5cbikge1xuXHR2YXIga2V5ZnJhbWVzID0gJ3tcXG4nO1xuXG5cdGZvciAodmFyIHAgPSAwOyBwIDw9IDE7IHAgKz0gMTYuNjY2IC8gZHVyYXRpb24pIHtcblx0XHR2YXIgdCA9IGEgKyBkZWx0YSAqIGVhc2UocCk7XG5cdFx0a2V5ZnJhbWVzICs9IHAgKiAxMDAgKyAnJXsnICsgZm4odCkgKyAnfVxcbic7XG5cdH1cblxuXHRyZXR1cm4ga2V5ZnJhbWVzICsgJzEwMCUgeycgKyBmbihiKSArICd9XFxufSc7XG59XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJrc2t5YXBwL3N0cmluZy1oYXNoL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG5mdW5jdGlvbiBoYXNoKHN0cikge1xuXHR2YXIgaGFzaCA9IDUzODE7XG5cdHZhciBpID0gc3RyLmxlbmd0aDtcblxuXHR3aGlsZSAoaS0tKSBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgXiBzdHIuY2hhckNvZGVBdChpKTtcblx0cmV0dXJuIGhhc2ggPj4+IDA7XG59XG5cbmZ1bmN0aW9uIHdyYXBUcmFuc2l0aW9uKGNvbXBvbmVudCwgbm9kZSwgZm4sIHBhcmFtcywgaW50cm8sIG91dGdyb3VwKSB7XG5cdHZhciBvYmogPSBmbihub2RlLCBwYXJhbXMpO1xuXHR2YXIgZHVyYXRpb24gPSBvYmouZHVyYXRpb24gfHwgMzAwO1xuXHR2YXIgZWFzZSA9IG9iai5lYXNpbmcgfHwgbGluZWFyO1xuXHR2YXIgY3NzVGV4dDtcblxuXHQvLyBUT0RPIHNoYXJlIDxzdHlsZT4gdGFnIGJldHdlZW4gYWxsIHRyYW5zaXRpb25zP1xuXHRpZiAob2JqLmNzcyAmJiAhdHJhbnNpdGlvbk1hbmFnZXIuc3R5bGVzaGVldCkge1xuXHRcdHZhciBzdHlsZSA9IGNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0dHJhbnNpdGlvbk1hbmFnZXIuc3R5bGVzaGVldCA9IHN0eWxlLnNoZWV0O1xuXHR9XG5cblx0aWYgKGludHJvKSB7XG5cdFx0aWYgKG9iai5jc3MgJiYgb2JqLmRlbGF5KSB7XG5cdFx0XHRjc3NUZXh0ID0gbm9kZS5zdHlsZS5jc3NUZXh0O1xuXHRcdFx0bm9kZS5zdHlsZS5jc3NUZXh0ICs9IG9iai5jc3MoMCk7XG5cdFx0fVxuXG5cdFx0aWYgKG9iai50aWNrKSBvYmoudGljaygwKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0dDogaW50cm8gPyAwIDogMSxcblx0XHRydW5uaW5nOiBmYWxzZSxcblx0XHRwcm9ncmFtOiBudWxsLFxuXHRcdHBlbmRpbmc6IG51bGwsXG5cdFx0cnVuOiBmdW5jdGlvbihpbnRybywgY2FsbGJhY2spIHtcblx0XHRcdHZhciBwcm9ncmFtID0ge1xuXHRcdFx0XHRzdGFydDogd2luZG93LnBlcmZvcm1hbmNlLm5vdygpICsgKG9iai5kZWxheSB8fCAwKSxcblx0XHRcdFx0aW50cm86IGludHJvLFxuXHRcdFx0XHRjYWxsYmFjazogY2FsbGJhY2tcblx0XHRcdH07XG5cblx0XHRcdGlmIChvYmouZGVsYXkpIHtcblx0XHRcdFx0dGhpcy5wZW5kaW5nID0gcHJvZ3JhbTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc3RhcnQocHJvZ3JhbSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghdGhpcy5ydW5uaW5nKSB7XG5cdFx0XHRcdHRoaXMucnVubmluZyA9IHRydWU7XG5cdFx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLmFkZCh0aGlzKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHN0YXJ0OiBmdW5jdGlvbihwcm9ncmFtKSB7XG5cdFx0XHRjb21wb25lbnQuZmlyZShwcm9ncmFtLmludHJvID8gJ2ludHJvLnN0YXJ0JyA6ICdvdXRyby5zdGFydCcsIHsgbm9kZTogbm9kZSB9KTtcblxuXHRcdFx0cHJvZ3JhbS5hID0gdGhpcy50O1xuXHRcdFx0cHJvZ3JhbS5iID0gcHJvZ3JhbS5pbnRybyA/IDEgOiAwO1xuXHRcdFx0cHJvZ3JhbS5kZWx0YSA9IHByb2dyYW0uYiAtIHByb2dyYW0uYTtcblx0XHRcdHByb2dyYW0uZHVyYXRpb24gPSBkdXJhdGlvbiAqIE1hdGguYWJzKHByb2dyYW0uYiAtIHByb2dyYW0uYSk7XG5cdFx0XHRwcm9ncmFtLmVuZCA9IHByb2dyYW0uc3RhcnQgKyBwcm9ncmFtLmR1cmF0aW9uO1xuXG5cdFx0XHRpZiAob2JqLmNzcykge1xuXHRcdFx0XHRpZiAob2JqLmRlbGF5KSBub2RlLnN0eWxlLmNzc1RleHQgPSBjc3NUZXh0O1xuXG5cdFx0XHRcdHByb2dyYW0ucnVsZSA9IGdlbmVyYXRlUnVsZShcblx0XHRcdFx0XHRwcm9ncmFtLmEsXG5cdFx0XHRcdFx0cHJvZ3JhbS5iLFxuXHRcdFx0XHRcdHByb2dyYW0uZGVsdGEsXG5cdFx0XHRcdFx0cHJvZ3JhbS5kdXJhdGlvbixcblx0XHRcdFx0XHRlYXNlLFxuXHRcdFx0XHRcdG9iai5jc3Ncblx0XHRcdFx0KTtcblxuXHRcdFx0XHR0cmFuc2l0aW9uTWFuYWdlci5hZGRSdWxlKHByb2dyYW0ucnVsZSwgcHJvZ3JhbS5uYW1lID0gJ19fc3ZlbHRlXycgKyBoYXNoKHByb2dyYW0ucnVsZSkpO1xuXG5cdFx0XHRcdG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gKG5vZGUuc3R5bGUuYW5pbWF0aW9uIHx8ICcnKVxuXHRcdFx0XHRcdC5zcGxpdCgnLCAnKVxuXHRcdFx0XHRcdC5maWx0ZXIoZnVuY3Rpb24oYW5pbSkge1xuXHRcdFx0XHRcdFx0Ly8gd2hlbiBpbnRyb2luZywgZGlzY2FyZCBvbGQgYW5pbWF0aW9ucyBpZiB0aGVyZSBhcmUgYW55XG5cdFx0XHRcdFx0XHRyZXR1cm4gYW5pbSAmJiAocHJvZ3JhbS5kZWx0YSA8IDAgfHwgIS9fX3N2ZWx0ZS8udGVzdChhbmltKSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuY29uY2F0KHByb2dyYW0ubmFtZSArICcgJyArIHByb2dyYW0uZHVyYXRpb24gKyAnbXMgbGluZWFyIDEgZm9yd2FyZHMnKVxuXHRcdFx0XHRcdC5qb2luKCcsICcpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuXHRcdFx0dGhpcy5wZW5kaW5nID0gbnVsbDtcblx0XHR9LFxuXHRcdHVwZGF0ZTogZnVuY3Rpb24obm93KSB7XG5cdFx0XHR2YXIgcHJvZ3JhbSA9IHRoaXMucHJvZ3JhbTtcblx0XHRcdGlmICghcHJvZ3JhbSkgcmV0dXJuO1xuXG5cdFx0XHR2YXIgcCA9IG5vdyAtIHByb2dyYW0uc3RhcnQ7XG5cdFx0XHR0aGlzLnQgPSBwcm9ncmFtLmEgKyBwcm9ncmFtLmRlbHRhICogZWFzZShwIC8gcHJvZ3JhbS5kdXJhdGlvbik7XG5cdFx0XHRpZiAob2JqLnRpY2spIG9iai50aWNrKHRoaXMudCk7XG5cdFx0fSxcblx0XHRkb25lOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBwcm9ncmFtID0gdGhpcy5wcm9ncmFtO1xuXHRcdFx0dGhpcy50ID0gcHJvZ3JhbS5iO1xuXHRcdFx0aWYgKG9iai50aWNrKSBvYmoudGljayh0aGlzLnQpO1xuXHRcdFx0aWYgKG9iai5jc3MpIHRyYW5zaXRpb25NYW5hZ2VyLmRlbGV0ZVJ1bGUobm9kZSwgcHJvZ3JhbS5uYW1lKTtcblx0XHRcdHByb2dyYW0uY2FsbGJhY2soKTtcblx0XHRcdHByb2dyYW0gPSBudWxsO1xuXHRcdFx0dGhpcy5ydW5uaW5nID0gISF0aGlzLnBlbmRpbmc7XG5cdFx0fSxcblx0XHRhYm9ydDogZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAob2JqLnRpY2spIG9iai50aWNrKDEpO1xuXHRcdFx0aWYgKG9iai5jc3MpIHRyYW5zaXRpb25NYW5hZ2VyLmRlbGV0ZVJ1bGUobm9kZSwgdGhpcy5wcm9ncmFtLm5hbWUpO1xuXHRcdFx0dGhpcy5wcm9ncmFtID0gdGhpcy5wZW5kaW5nID0gbnVsbDtcblx0XHRcdHRoaXMucnVubmluZyA9IGZhbHNlO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHRyYW5zaXRpb25NYW5hZ2VyID0ge1xuXHRydW5uaW5nOiBmYWxzZSxcblx0dHJhbnNpdGlvbnM6IFtdLFxuXHRib3VuZDogbnVsbCxcblx0c3R5bGVzaGVldDogbnVsbCxcblx0YWN0aXZlUnVsZXM6IHt9LFxuXG5cdGFkZDogZnVuY3Rpb24odHJhbnNpdGlvbikge1xuXHRcdHRoaXMudHJhbnNpdGlvbnMucHVzaCh0cmFuc2l0aW9uKTtcblxuXHRcdGlmICghdGhpcy5ydW5uaW5nKSB7XG5cdFx0XHR0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYm91bmQgfHwgKHRoaXMuYm91bmQgPSB0aGlzLm5leHQuYmluZCh0aGlzKSkpO1xuXHRcdH1cblx0fSxcblxuXHRhZGRSdWxlOiBmdW5jdGlvbihydWxlLCBuYW1lKSB7XG5cdFx0aWYgKCF0aGlzLmFjdGl2ZVJ1bGVzW25hbWVdKSB7XG5cdFx0XHR0aGlzLmFjdGl2ZVJ1bGVzW25hbWVdID0gdHJ1ZTtcblx0XHRcdHRoaXMuc3R5bGVzaGVldC5pbnNlcnRSdWxlKCdAa2V5ZnJhbWVzICcgKyBuYW1lICsgJyAnICsgcnVsZSwgdGhpcy5zdHlsZXNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG5cdFx0fVxuXHR9LFxuXG5cdG5leHQ6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMucnVubmluZyA9IGZhbHNlO1xuXG5cdFx0dmFyIG5vdyA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcblx0XHR2YXIgaSA9IHRoaXMudHJhbnNpdGlvbnMubGVuZ3RoO1xuXG5cdFx0d2hpbGUgKGktLSkge1xuXHRcdFx0dmFyIHRyYW5zaXRpb24gPSB0aGlzLnRyYW5zaXRpb25zW2ldO1xuXG5cdFx0XHRpZiAodHJhbnNpdGlvbi5wcm9ncmFtICYmIG5vdyA+PSB0cmFuc2l0aW9uLnByb2dyYW0uZW5kKSB7XG5cdFx0XHRcdHRyYW5zaXRpb24uZG9uZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHJhbnNpdGlvbi5wZW5kaW5nICYmIG5vdyA+PSB0cmFuc2l0aW9uLnBlbmRpbmcuc3RhcnQpIHtcblx0XHRcdFx0dHJhbnNpdGlvbi5zdGFydCh0cmFuc2l0aW9uLnBlbmRpbmcpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHJhbnNpdGlvbi5ydW5uaW5nKSB7XG5cdFx0XHRcdHRyYW5zaXRpb24udXBkYXRlKG5vdyk7XG5cdFx0XHRcdHRoaXMucnVubmluZyA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKCF0cmFuc2l0aW9uLnBlbmRpbmcpIHtcblx0XHRcdFx0dGhpcy50cmFuc2l0aW9ucy5zcGxpY2UoaSwgMSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucnVubmluZykge1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYm91bmQpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zdHlsZXNoZWV0KSB7XG5cdFx0XHR2YXIgaSA9IHRoaXMuc3R5bGVzaGVldC5jc3NSdWxlcy5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoaS0tKSB0aGlzLnN0eWxlc2hlZXQuZGVsZXRlUnVsZShpKTtcblx0XHRcdHRoaXMuYWN0aXZlUnVsZXMgPSB7fTtcblx0XHR9XG5cdH0sXG5cblx0ZGVsZXRlUnVsZTogZnVuY3Rpb24obm9kZSwgbmFtZSkge1xuXHRcdG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gbm9kZS5zdHlsZS5hbmltYXRpb25cblx0XHRcdC5zcGxpdCgnLCAnKVxuXHRcdFx0LmZpbHRlcihmdW5jdGlvbihhbmltKSB7XG5cdFx0XHRcdHJldHVybiBhbmltLmluZGV4T2YobmFtZSkgPT09IC0xO1xuXHRcdFx0fSlcblx0XHRcdC5qb2luKCcsICcpO1xuXHR9XG59O1xuXG5mdW5jdGlvbiBibGFua09iamVjdCgpIHtcblx0cmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCk7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3koZGV0YWNoKSB7XG5cdHRoaXMuZGVzdHJveSA9IG5vb3A7XG5cdHRoaXMuZmlyZSgnZGVzdHJveScpO1xuXHR0aGlzLnNldCA9IHRoaXMuZ2V0ID0gbm9vcDtcblxuXHRpZiAoZGV0YWNoICE9PSBmYWxzZSkgdGhpcy5fZnJhZ21lbnQudSgpO1xuXHR0aGlzLl9mcmFnbWVudC5kKCk7XG5cdHRoaXMuX2ZyYWdtZW50ID0gdGhpcy5fc3RhdGUgPSBudWxsO1xufVxuXG5mdW5jdGlvbiBkZXN0cm95RGV2KGRldGFjaCkge1xuXHRkZXN0cm95LmNhbGwodGhpcywgZGV0YWNoKTtcblx0dGhpcy5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS53YXJuKCdDb21wb25lbnQgd2FzIGFscmVhZHkgZGVzdHJveWVkJyk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIF9kaWZmZXJzKGEsIGIpIHtcblx0cmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGIgfHwgKChhICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JykgfHwgdHlwZW9mIGEgPT09ICdmdW5jdGlvbicpO1xufVxuXG5mdW5jdGlvbiBfZGlmZmVyc0ltbXV0YWJsZShhLCBiKSB7XG5cdHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiO1xufVxuXG5mdW5jdGlvbiBkaXNwYXRjaE9ic2VydmVycyhjb21wb25lbnQsIGdyb3VwLCBjaGFuZ2VkLCBuZXdTdGF0ZSwgb2xkU3RhdGUpIHtcblx0Zm9yICh2YXIga2V5IGluIGdyb3VwKSB7XG5cdFx0aWYgKCFjaGFuZ2VkW2tleV0pIGNvbnRpbnVlO1xuXG5cdFx0dmFyIG5ld1ZhbHVlID0gbmV3U3RhdGVba2V5XTtcblx0XHR2YXIgb2xkVmFsdWUgPSBvbGRTdGF0ZVtrZXldO1xuXG5cdFx0dmFyIGNhbGxiYWNrcyA9IGdyb3VwW2tleV07XG5cdFx0aWYgKCFjYWxsYmFja3MpIGNvbnRpbnVlO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdHZhciBjYWxsYmFjayA9IGNhbGxiYWNrc1tpXTtcblx0XHRcdGlmIChjYWxsYmFjay5fX2NhbGxpbmcpIGNvbnRpbnVlO1xuXG5cdFx0XHRjYWxsYmFjay5fX2NhbGxpbmcgPSB0cnVlO1xuXHRcdFx0Y2FsbGJhY2suY2FsbChjb21wb25lbnQsIG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XG5cdFx0XHRjYWxsYmFjay5fX2NhbGxpbmcgPSBmYWxzZTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gZmlyZShldmVudE5hbWUsIGRhdGEpIHtcblx0dmFyIGhhbmRsZXJzID1cblx0XHRldmVudE5hbWUgaW4gdGhpcy5faGFuZGxlcnMgJiYgdGhpcy5faGFuZGxlcnNbZXZlbnROYW1lXS5zbGljZSgpO1xuXHRpZiAoIWhhbmRsZXJzKSByZXR1cm47XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBoYW5kbGVycy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGhhbmRsZXJzW2ldLmNhbGwodGhpcywgZGF0YSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0KGtleSkge1xuXHRyZXR1cm4ga2V5ID8gdGhpcy5fc3RhdGVba2V5XSA6IHRoaXMuX3N0YXRlO1xufVxuXG5mdW5jdGlvbiBpbml0KGNvbXBvbmVudCwgb3B0aW9ucykge1xuXHRjb21wb25lbnQuX29ic2VydmVycyA9IHsgcHJlOiBibGFua09iamVjdCgpLCBwb3N0OiBibGFua09iamVjdCgpIH07XG5cdGNvbXBvbmVudC5faGFuZGxlcnMgPSBibGFua09iamVjdCgpO1xuXHRjb21wb25lbnQuX2JpbmQgPSBvcHRpb25zLl9iaW5kO1xuXG5cdGNvbXBvbmVudC5vcHRpb25zID0gb3B0aW9ucztcblx0Y29tcG9uZW50LnJvb3QgPSBvcHRpb25zLnJvb3QgfHwgY29tcG9uZW50O1xuXHRjb21wb25lbnQuc3RvcmUgPSBjb21wb25lbnQucm9vdC5zdG9yZSB8fCBvcHRpb25zLnN0b3JlO1xufVxuXG5mdW5jdGlvbiBvYnNlcnZlKGtleSwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcblx0dmFyIGdyb3VwID0gb3B0aW9ucyAmJiBvcHRpb25zLmRlZmVyXG5cdFx0PyB0aGlzLl9vYnNlcnZlcnMucG9zdFxuXHRcdDogdGhpcy5fb2JzZXJ2ZXJzLnByZTtcblxuXHQoZ3JvdXBba2V5XSB8fCAoZ3JvdXBba2V5XSA9IFtdKSkucHVzaChjYWxsYmFjayk7XG5cblx0aWYgKCFvcHRpb25zIHx8IG9wdGlvbnMuaW5pdCAhPT0gZmFsc2UpIHtcblx0XHRjYWxsYmFjay5fX2NhbGxpbmcgPSB0cnVlO1xuXHRcdGNhbGxiYWNrLmNhbGwodGhpcywgdGhpcy5fc3RhdGVba2V5XSk7XG5cdFx0Y2FsbGJhY2suX19jYWxsaW5nID0gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGNhbmNlbDogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaW5kZXggPSBncm91cFtrZXldLmluZGV4T2YoY2FsbGJhY2spO1xuXHRcdFx0aWYgKH5pbmRleCkgZ3JvdXBba2V5XS5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZURldihrZXksIGNhbGxiYWNrLCBvcHRpb25zKSB7XG5cdHZhciBjID0gKGtleSA9ICcnICsga2V5KS5zZWFyY2goL1suW10vKTtcblx0aWYgKGMgPiAtMSkge1xuXHRcdHZhciBtZXNzYWdlID1cblx0XHRcdCdUaGUgZmlyc3QgYXJndW1lbnQgdG8gY29tcG9uZW50Lm9ic2VydmUoLi4uKSBtdXN0IGJlIHRoZSBuYW1lIG9mIGEgdG9wLWxldmVsIHByb3BlcnR5Jztcblx0XHRpZiAoYyA+IDApXG5cdFx0XHRtZXNzYWdlICs9IFwiLCBpLmUuICdcIiArIGtleS5zbGljZSgwLCBjKSArIFwiJyByYXRoZXIgdGhhbiAnXCIgKyBrZXkgKyBcIidcIjtcblxuXHRcdHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcblx0fVxuXG5cdHJldHVybiBvYnNlcnZlLmNhbGwodGhpcywga2V5LCBjYWxsYmFjaywgb3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIG9uKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuXHRpZiAoZXZlbnROYW1lID09PSAndGVhcmRvd24nKSByZXR1cm4gdGhpcy5vbignZGVzdHJveScsIGhhbmRsZXIpO1xuXG5cdHZhciBoYW5kbGVycyA9IHRoaXMuX2hhbmRsZXJzW2V2ZW50TmFtZV0gfHwgKHRoaXMuX2hhbmRsZXJzW2V2ZW50TmFtZV0gPSBbXSk7XG5cdGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG5cblx0cmV0dXJuIHtcblx0XHRjYW5jZWw6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGluZGV4ID0gaGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKTtcblx0XHRcdGlmICh+aW5kZXgpIGhhbmRsZXJzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBvbkRldihldmVudE5hbWUsIGhhbmRsZXIpIHtcblx0aWYgKGV2ZW50TmFtZSA9PT0gJ3RlYXJkb3duJykge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFwiVXNlIGNvbXBvbmVudC5vbignZGVzdHJveScsIC4uLikgaW5zdGVhZCBvZiBjb21wb25lbnQub24oJ3RlYXJkb3duJywgLi4uKSB3aGljaCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHVuc3VwcG9ydGVkIGluIFN2ZWx0ZSAyXCJcblx0XHQpO1xuXHRcdHJldHVybiB0aGlzLm9uKCdkZXN0cm95JywgaGFuZGxlcik7XG5cdH1cblxuXHRyZXR1cm4gb24uY2FsbCh0aGlzLCBldmVudE5hbWUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBydW4oZm4pIHtcblx0Zm4oKTtcbn1cblxuZnVuY3Rpb24gc2V0KG5ld1N0YXRlKSB7XG5cdHRoaXMuX3NldChhc3NpZ24oe30sIG5ld1N0YXRlKSk7XG5cdGlmICh0aGlzLnJvb3QuX2xvY2spIHJldHVybjtcblx0dGhpcy5yb290Ll9sb2NrID0gdHJ1ZTtcblx0Y2FsbEFsbCh0aGlzLnJvb3QuX2JlZm9yZWNyZWF0ZSk7XG5cdGNhbGxBbGwodGhpcy5yb290Ll9vbmNyZWF0ZSk7XG5cdGNhbGxBbGwodGhpcy5yb290Ll9hZnRlcmNyZWF0ZSk7XG5cdHRoaXMucm9vdC5fbG9jayA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBfc2V0KG5ld1N0YXRlKSB7XG5cdHZhciBvbGRTdGF0ZSA9IHRoaXMuX3N0YXRlLFxuXHRcdGNoYW5nZWQgPSB7fSxcblx0XHRkaXJ0eSA9IGZhbHNlO1xuXG5cdGZvciAodmFyIGtleSBpbiBuZXdTdGF0ZSkge1xuXHRcdGlmICh0aGlzLl9kaWZmZXJzKG5ld1N0YXRlW2tleV0sIG9sZFN0YXRlW2tleV0pKSBjaGFuZ2VkW2tleV0gPSBkaXJ0eSA9IHRydWU7XG5cdH1cblx0aWYgKCFkaXJ0eSkgcmV0dXJuO1xuXG5cdHRoaXMuX3N0YXRlID0gYXNzaWduKGFzc2lnbih7fSwgb2xkU3RhdGUpLCBuZXdTdGF0ZSk7XG5cdHRoaXMuX3JlY29tcHV0ZShjaGFuZ2VkLCB0aGlzLl9zdGF0ZSk7XG5cdGlmICh0aGlzLl9iaW5kKSB0aGlzLl9iaW5kKGNoYW5nZWQsIHRoaXMuX3N0YXRlKTtcblxuXHRpZiAodGhpcy5fZnJhZ21lbnQpIHtcblx0XHRkaXNwYXRjaE9ic2VydmVycyh0aGlzLCB0aGlzLl9vYnNlcnZlcnMucHJlLCBjaGFuZ2VkLCB0aGlzLl9zdGF0ZSwgb2xkU3RhdGUpO1xuXHRcdHRoaXMuX2ZyYWdtZW50LnAoY2hhbmdlZCwgdGhpcy5fc3RhdGUpO1xuXHRcdGRpc3BhdGNoT2JzZXJ2ZXJzKHRoaXMsIHRoaXMuX29ic2VydmVycy5wb3N0LCBjaGFuZ2VkLCB0aGlzLl9zdGF0ZSwgb2xkU3RhdGUpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHNldERldihuZXdTdGF0ZSkge1xuXHRpZiAodHlwZW9mIG5ld1N0YXRlICE9PSAnb2JqZWN0Jykge1xuXHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdHRoaXMuX2RlYnVnTmFtZSArICcuc2V0IHdhcyBjYWxsZWQgd2l0aG91dCBhbiBvYmplY3Qgb2YgZGF0YSBrZXktdmFsdWVzIHRvIHVwZGF0ZS4nXG5cdFx0KTtcblx0fVxuXG5cdHRoaXMuX2NoZWNrUmVhZE9ubHkobmV3U3RhdGUpO1xuXHRzZXQuY2FsbCh0aGlzLCBuZXdTdGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxBbGwoZm5zKSB7XG5cdHdoaWxlIChmbnMgJiYgZm5zLmxlbmd0aCkgZm5zLnNoaWZ0KCkoKTtcbn1cblxuZnVuY3Rpb24gX21vdW50KHRhcmdldCwgYW5jaG9yKSB7XG5cdHRoaXMuX2ZyYWdtZW50W3RoaXMuX2ZyYWdtZW50LmkgPyAnaScgOiAnbSddKHRhcmdldCwgYW5jaG9yIHx8IG51bGwpO1xufVxuXG5mdW5jdGlvbiBfdW5tb3VudCgpIHtcblx0aWYgKHRoaXMuX2ZyYWdtZW50KSB0aGlzLl9mcmFnbWVudC51KCk7XG59XG5cbmZ1bmN0aW9uIGlzUHJvbWlzZSh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5cbnZhciBQRU5ESU5HID0ge307XG52YXIgU1VDQ0VTUyA9IHt9O1xudmFyIEZBSUxVUkUgPSB7fTtcblxuZnVuY3Rpb24gcmVtb3ZlRnJvbVN0b3JlKCkge1xuXHR0aGlzLnN0b3JlLl9yZW1vdmUodGhpcyk7XG59XG5cbnZhciBwcm90byA9IHtcblx0ZGVzdHJveTogZGVzdHJveSxcblx0Z2V0OiBnZXQsXG5cdGZpcmU6IGZpcmUsXG5cdG9ic2VydmU6IG9ic2VydmUsXG5cdG9uOiBvbixcblx0c2V0OiBzZXQsXG5cdHRlYXJkb3duOiBkZXN0cm95LFxuXHRfcmVjb21wdXRlOiBub29wLFxuXHRfc2V0OiBfc2V0LFxuXHRfbW91bnQ6IF9tb3VudCxcblx0X3VubW91bnQ6IF91bm1vdW50LFxuXHRfZGlmZmVyczogX2RpZmZlcnNcbn07XG5cbnZhciBwcm90b0RldiA9IHtcblx0ZGVzdHJveTogZGVzdHJveURldixcblx0Z2V0OiBnZXQsXG5cdGZpcmU6IGZpcmUsXG5cdG9ic2VydmU6IG9ic2VydmVEZXYsXG5cdG9uOiBvbkRldixcblx0c2V0OiBzZXREZXYsXG5cdHRlYXJkb3duOiBkZXN0cm95RGV2LFxuXHRfcmVjb21wdXRlOiBub29wLFxuXHRfc2V0OiBfc2V0LFxuXHRfbW91bnQ6IF9tb3VudCxcblx0X3VubW91bnQ6IF91bm1vdW50LFxuXHRfZGlmZmVyczogX2RpZmZlcnNcbn07XG5cbmV4cG9ydCB7IGJsYW5rT2JqZWN0LCBkZXN0cm95LCBkZXN0cm95RGV2LCBfZGlmZmVycywgX2RpZmZlcnNJbW11dGFibGUsIGRpc3BhdGNoT2JzZXJ2ZXJzLCBmaXJlLCBnZXQsIGluaXQsIG9ic2VydmUsIG9ic2VydmVEZXYsIG9uLCBvbkRldiwgcnVuLCBzZXQsIF9zZXQsIHNldERldiwgY2FsbEFsbCwgX21vdW50LCBfdW5tb3VudCwgaXNQcm9taXNlLCBQRU5ESU5HLCBTVUNDRVNTLCBGQUlMVVJFLCByZW1vdmVGcm9tU3RvcmUsIHByb3RvLCBwcm90b0RldiwgYXBwZW5kTm9kZSwgaW5zZXJ0Tm9kZSwgZGV0YWNoTm9kZSwgZGV0YWNoQmV0d2VlbiwgZGV0YWNoQmVmb3JlLCBkZXRhY2hBZnRlciwgcmVpbnNlcnRCZXR3ZWVuLCByZWluc2VydENoaWxkcmVuLCByZWluc2VydEFmdGVyLCByZWluc2VydEJlZm9yZSwgZGVzdHJveUVhY2gsIGNyZWF0ZUZyYWdtZW50LCBjcmVhdGVFbGVtZW50LCBjcmVhdGVTdmdFbGVtZW50LCBjcmVhdGVUZXh0LCBjcmVhdGVDb21tZW50LCBhZGRMaXN0ZW5lciwgcmVtb3ZlTGlzdGVuZXIsIHNldEF0dHJpYnV0ZSwgc2V0QXR0cmlidXRlcywgcmVtb3ZlQXR0cmlidXRlLCBzZXRYbGlua0F0dHJpYnV0ZSwgZ2V0QmluZGluZ0dyb3VwVmFsdWUsIHRvTnVtYmVyLCB0aW1lUmFuZ2VzVG9BcnJheSwgY2hpbGRyZW4sIGNsYWltRWxlbWVudCwgY2xhaW1UZXh0LCBzZXRJbnB1dFR5cGUsIHNldFN0eWxlLCBzZWxlY3RPcHRpb24sIHNlbGVjdE9wdGlvbnMsIHNlbGVjdFZhbHVlLCBzZWxlY3RNdWx0aXBsZVZhbHVlLCBkZXN0cm95QmxvY2ssIG91dHJvQW5kRGVzdHJveUJsb2NrLCB1cGRhdGVLZXllZEVhY2gsIGdldFNwcmVhZFVwZGF0ZSwgbGluZWFyLCBnZW5lcmF0ZVJ1bGUsIGhhc2gsIHdyYXBUcmFuc2l0aW9uLCB0cmFuc2l0aW9uTWFuYWdlciwgbm9vcCwgYXNzaWduIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdmVsdGUvc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuXG5uZXcgQXBwKHsgdGFyZ2V0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJykgfSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvaW5kZXguanMiLCI8ZGl2IGNsYXNzPVwiZm9ybS1ib3hcIj5cblx0PFllYXJNb250aFBpY2tlciByZWY6cGlja2VyPjwvWWVhck1vbnRoUGlja2VyPlxuXHQ8Rm9ybSByZWY6Zm9ybT48L0Zvcm0+XG48L2Rpdj5cbjxUYWJsZSByZWY6dGFibGU+PC9UYWJsZT5cblxuPHNjcmlwdD5cbmltcG9ydCBZZWFyTW9udGhQaWNrZXIgZnJvbSAnLi4veWVhci1tb250aC1waWNrZXInO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi4vZm9ybSc7XG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vdGFibGUnO1xuaW1wb3J0IHtDYXRlZ29yaWVzLCBFeHBlbnNlc30gZnJvbSAnLi4vZGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0ZGF0YSAoKSB7IHJldHVybiB7fTsgfSxcblx0Y29tcG9uZW50czogeyBGb3JtLCBUYWJsZSwgWWVhck1vbnRoUGlja2VyIH0sXG5cdG9uY3JlYXRlICgpIHtcblx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnN1YnN0cigwLCA3KTtcblx0XHRDYXRlZ29yaWVzLmdldCgpLnRoZW4oY2F0ZWdvcmllcyA9PiB0aGlzLnJlZnMuZm9ybS5zZXQoeyBkYXRlLCBjYXRlZ29yaWVzIH0pKTtcblxuXHRcdHRoaXMucmVmcy5mb3JtLm9uKCdjaGFuZ2UnLCB0aGlzLm9uRm9ybUNoYW5nZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnJlZnMuZm9ybS5vbigncmVtb3ZlJywgdGhpcy5vblJlbW92ZUl0ZW0uYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5yZWZzLmZvcm0ub24oJ3N1Ym1pdCcsIHRoaXMub25Gb3JtU3VibWl0LmJpbmQodGhpcykpO1xuXHRcdHRoaXMucmVmcy5mb3JtLm9uKCdlcnJvcicsIHRoaXMub25Gb3JtRXJyb3IuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5yZWZzLnBpY2tlci5vbignY2hhbmdlJywgdGhpcy5vbkRhdGVDaGFuZ2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5yZWZzLnRhYmxlLm9uKCdjbGljaycsIHRoaXMub25UYWJsZUNsaWNrLmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5sb2FkVGFibGUoZGF0ZSk7XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRsb2FkVGFibGUgKGRhdGUpIHtcblx0XHRcdGlmICghZGF0ZSkgZGF0ZSA9IHRoaXMubGFzdERhdGU7XG5cdFx0XHRlbHNlIHRoaXMubGFzdERhdGUgPSBkYXRlO1xuXHRcdFx0RXhwZW5zZXMuZ2V0KGRhdGUpLnRoZW4oZGF0YSA9PiB7XG5cdFx0XHRcdHRoaXMubGFzdFRhYmxlRGF0YSA9IGRhdGE7XG5cdFx0XHRcdHRoaXMuc2V0RGF0YShkYXRhKTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHRzZXREYXRhIChkYXRhKSB7IHRoaXMucmVmcy50YWJsZS5zZXQoeyBkYXRhIH0pOyB9LFxuXG5cdFx0b25EYXRlQ2hhbmdlIChkYXRlKSB7IHRoaXMucmVmcy5mb3JtLnNldCh7IGRhdGU6IGRhdGUuZGF0ZVN0ciB9KTsgfSxcblxuXHRcdG9uRm9ybUNoYW5nZSAoZGF0YSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ2Zvcm0gY2hhbmdlZCcsIGRhdGEpO1xuXHRcdH0sXG5cblx0XHRvbkZvcm1TdWJtaXQgKGRhdGEpIHtcblx0XHRcdEV4cGVuc2VzLnNhdmUoZGF0YSkudGhlbigoKSA9PiB7XG5cdFx0XHRcdHRoaXMubG9hZFRhYmxlKCk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0b25SZW1vdmVJdGVtIChpdGVtKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhpdGVtKTtcblx0XHR9LFxuXG5cdFx0b25Gb3JtRXJyb3IgKGVycikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyKTtcdC8vIFRPRE86IHRvYXN0P1xuXHRcdH0sXG5cblx0XHRvblRhYmxlQ2xpY2sgKGl0ZW0pIHsgdGhpcy5yZWZzLmZvcm0uZWRpdChpdGVtKTsgfSxcblx0fVxufTtcblxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvYXBwL2luZGV4Lmh0bWwiLCI8ZGl2IGNsYXNzPVwieWVhci1tb250aC1waWNrZXIge3tpc1RvZGF5ID8gJ2lzLXRvZGF5JzogJyd9fVwiIG9uOndoZWVsPVwib253aGVlbChldmVudClcIj5cblx0PGJ1dHRvbiByZWY6bGVmdEJ1dHRvbiBjbGFzcz1cImJ0bi1wcmV2XCIgdGl0bGU9XCJQcmV2aW91cyBtb250aFwiXG5cdFx0b246a2V5ZG93bj1cImtleWRvd24oZXZlbnQua2V5LCAtMSlcIlxuXHRcdG9uOmtleXVwPVwia2V5dXAoZXZlbnQua2V5KVwiXG5cdFx0b246bW91c2Vkb3duPVwidGljaygtMSlcIlxuXHRcdG9uOm1vdXNlb3V0PVwibXVwKClcIlxuXHRcdG9uOm1vdXNldXA9XCJtdXAoKVwiPjxpIGNsYXNzPVwiaW9uLWlvcy1hcnJvdy1iYWNrXCI+PC9pPjwvYnV0dG9uPlxuXG5cdDxzcGFuIGNsYXNzPVwiZGF5XCI+e3ttb250aHNbbW9udGhdfX0ge3t5ZWFyfX08L3NwYW4+XG5cblx0PGJ1dHRvbiByZWY6cmlnaHRCdXR0b24gY2xhc3M9XCJidG4tbmV4dFwiIHRpdGxlPVwiTmV4dCBtb250aFwiXG5cdFx0b246a2V5ZG93bj1cImtleWRvd24oZXZlbnQua2V5LCAxKVwiXG5cdFx0b246a2V5dXA9XCJrZXl1cChldmVudC5rZXkpXCJcblx0XHRvbjptb3VzZWRvd249XCJ0aWNrKDEpXCJcblx0XHRvbjptb3VzZW91dD1cIm11cCgpXCJcblx0XHRvbjptb3VzZXVwPVwibXVwKClcIj48aSBjbGFzcz1cImlvbi1pb3MtYXJyb3ctZm9yd2FyZFwiPjwvaT48L2J1dHRvbj5cblxuXHQ8YnV0dG9uIHRpdGxlPVwiVG9kYXlcIiBjbGFzcz1cImJ0bi10b2RheVwiIG9uOmNsaWNrPVwicmVzZXQoKVwiPjxpIGNsYXNzPVwiaW9uLW1kLXVuZG9cIj48L2k+PC9idXR0b24+XG48L2Rpdj5cblxuPHNjcmlwdD5cbmZ1bmN0aW9uIHplcm9TdGF0ZSAoKSB7XG5cdGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuXHRjb25zdCBtb250aCA9IGQuZ2V0TW9udGgoKTtcblx0Y29uc3QgeWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcblx0Y29uc3QgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXHRyZXR1cm4geyBtb250aHMsIG1vbnRoLCB5ZWFyLCBjdXJyZW50OiB7IG1vbnRoLCB5ZWFyIH0gfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhICgpIHsgcmV0dXJuIHplcm9TdGF0ZSgpOyB9LFxuXHRjb21wdXRlZDoge1xuXHRcdGlzVG9kYXk6IChtb250aCwgeWVhciwgY3VycmVudCkgPT4gKG1vbnRoID09PSBjdXJyZW50Lm1vbnRoICYmIHllYXIgPT09IGN1cnJlbnQueWVhciksXG5cdFx0ZGF0ZVN0cjogKG1vbnRoLCB5ZWFyKSA9PiBgJHt5ZWFyfS0keygnMCcgKyAobW9udGggKyAxKSkuc3Vic3RyKC0yKX1gXG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRvbndoZWVsIChlKSB7XG5cdFx0XHRjb25zdCB0aHJlc2hvbGQgPSAyO1xuXHRcdFx0bGV0IHZhbCA9IG51bGw7XG5cdFx0XHRpZiAoZS5kZWx0YVkgPCAtdGhyZXNob2xkKSB2YWwgPSAtMTtcblx0XHRcdGVsc2UgaWYgKGUuZGVsdGFZID4gdGhyZXNob2xkKSB2YWwgPSAxO1xuXHRcdFx0aWYgKHZhbCkgdGhpcy53aGVlbFRocm90dGxlKHZhbCwgZmFsc2UpO1xuXHRcdH0sXG5cblx0XHR3aGVlbFRocm90dGxlICh2YWx1ZSkge1xuXHRcdFx0aWYgKCF0aGlzLnRocm90dGxlcikge1xuXHRcdFx0XHR0aGlzLmdvKHZhbHVlKTtcblx0XHRcdFx0dGhpcy5ub3RpZnkoKTtcblx0XHRcdFx0dGhpcy50aHJvdHRsZXIgPSBzZXRUaW1lb3V0KCgpID0+ICh0aGlzLnRocm90dGxlciA9IG51bGwpLCAxMDApO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRrZXl1cCAoa2V5KSB7XG5cdFx0XHR0aGlzLmtleUlzRG93biA9IGZhbHNlO1xuXHRcdFx0aWYgKHRoaXMudGlja2VyKSBjbGVhclRpbWVvdXQodGhpcy50aWNrZXIpO1xuXHRcdFx0aWYgKGtleSA9PT0gJyAnIHx8IGtleSA9PT0gJ0VudGVyJyB8fFxuXHRcdFx0XHRrZXkgPT09ICdBcnJvd0xlZnQnIHx8IGtleSA9PT0gJ0Fycm93UmlnaHQnIHx8XG5cdFx0XHRcdGtleSA9PT0gJ0Fycm93RG93bicgfHwga2V5ID09PSAnQXJyb3dVcCcpIHRoaXMubm90aWZ5KCk7XG5cdFx0fSxcblxuXHRcdGtleWRvd24gKGtleSwgdmFsdWUpIHtcblx0XHRcdGlmICh0aGlzLmtleUlzRG93bikgcmV0dXJuO1xuXHRcdFx0aWYgKGtleSA9PT0gJ0Fycm93TGVmdCcgfHwga2V5ID09PSAnQXJyb3dEb3duJykge1xuXHRcdFx0XHR0aGlzLnJlZnMubGVmdEJ1dHRvbi5mb2N1cygpO1xuXHRcdFx0XHR0aGlzLmtleUlzRG93biA9IHRydWU7XG5cdFx0XHRcdHJldHVybiB0aGlzLnRpY2soLTEpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGtleSA9PT0gJ0Fycm93UmlnaHQnIHx8IGtleSA9PT0gJ0Fycm93VXAnKSB7XG5cdFx0XHRcdHRoaXMucmVmcy5yaWdodEJ1dHRvbi5mb2N1cygpO1xuXHRcdFx0XHR0aGlzLmtleUlzRG93biA9IHRydWU7XG5cdFx0XHRcdHJldHVybiB0aGlzLnRpY2soMSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoa2V5ID09PSAnICcgfHwga2V5ID09PSAnRW50ZXInKSB7XG5cdFx0XHRcdHRoaXMua2V5SXNEb3duID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy50aWNrKHZhbHVlKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0bXVwICgpIHtcblx0XHRcdGlmICh0aGlzLnRpY2tlcikgY2xlYXJUaW1lb3V0KHRoaXMudGlja2VyKTtcblx0XHRcdGlmICh0aGlzLm1vdXNlSXNEb3duKSB0aGlzLm5vdGlmeSgpO1xuXHRcdFx0dGhpcy5tb3VzZUlzRG93biA9IGZhbHNlO1xuXHRcdH0sXG5cblx0XHR0aWNrICh2YWx1ZSwgZGVsYXkgPSAzMDApIHtcblx0XHRcdGlmICh0aGlzLnRpY2tlcikgY2xlYXJUaW1lb3V0KHRoaXMudGlja2VyKTtcblx0XHRcdHRoaXMuZ28odmFsdWUpO1xuXHRcdFx0aWYgKHRoaXMuZ2V0KCdpc1RvZGF5JykpIHJldHVybiB0aGlzLm5vdGlmeSgpO1xuXHRcdFx0dGhpcy5tb3VzZUlzRG93biA9IHRydWU7XG5cdFx0XHR0aGlzLnRpY2tlciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRkZWxheSA9IE1hdGgubWF4KDYwLCBkZWxheSAtIDQwKTtcblx0XHRcdFx0dGhpcy50aWNrKHZhbHVlLCBkZWxheSk7XG5cdFx0XHR9LCBkZWxheSk7XG5cdFx0fSxcblxuXHRcdGdvICh2YWx1ZSkge1xuXHRcdFx0bGV0IHttb250aCwgeWVhcn0gPSB0aGlzLmdldCgpO1xuXHRcdFx0bW9udGggKz0gdmFsdWU7XG5cdFx0XHRpZiAobW9udGggPCAwKSB7IG1vbnRoID0gMTE7IHllYXIgLT0gMTsgfVxuXHRcdFx0ZWxzZSBpZiAobW9udGggPiAxMSkgeyBtb250aCA9IDA7IHllYXIgKz0gMTsgfVxuXHRcdFx0dGhpcy5zZXQoeyBtb250aCwgeWVhciB9KTtcblx0XHR9LFxuXG5cdFx0bm90aWZ5ICgpIHtcblx0XHRcdGNvbnN0IHttb250aCwgeWVhciwgZGF0ZVN0cn0gPSB0aGlzLmdldCgpO1xuXHRcdFx0dGhpcy5maXJlKCdjaGFuZ2UnLCB7IG1vbnRoLCB5ZWFyLCBkYXRlU3RyIH0pO1xuXHRcdH0sXG5cblx0XHRyZXNldCAoKSB7XG5cdFx0XHR0aGlzLnNldCh6ZXJvU3RhdGUoKSk7XG5cdFx0XHR0aGlzLm5vdGlmeSgpO1xuXHRcdH1cblx0fVxufTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3llYXItbW9udGgtcGlja2VyL2luZGV4Lmh0bWwiLCI8Zm9ybSByZWY6Zm9ybSBjbGFzcz1cImZvcm0ge3tpbkVkaXQgPyAnZWRpdCcgOiAnJ319XCIgb246c3VibWl0PVwib25zdWJtaXQoZXZlbnQpXCIgb246aW5wdXQ9XCJvbmlucHV0KGV2ZW50KVwiPlxuXHQ8ZGl2IGNsYXNzPVwic3ViZm9ybXNcIj5cblx0XHR7eyNlYWNoIHJvd3MgYXMgcm93LCBpZHh9fVxuXHRcdDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuXHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBiaW5kOnZhbHVlPXJvdy5pZD5cblx0XHRcdDxkaXYgY2xhc3M9XCJzZWxlY3Qtd3JhcFwiPlxuXHRcdFx0XHQ8c2VsZWN0IGNsYXNzPVwic2VsZWN0IGNhdGVnb3J5XCIgYmluZDp2YWx1ZT1yb3cuY2F0ZWdvcnlfaWQgYXV0b2ZvY3VzPVwiYXV0b2ZvY3VzXCI+XG5cdFx0XHRcdFx0e3sjZWFjaCBjYXRlZ29yaWVzIGFzIGdyb3VwfX1cblx0XHRcdFx0XHQ8b3B0Z3JvdXAgbGFiZWw9XCJ7e2dyb3VwLm5hbWV9fVwiPlxuXHRcdFx0XHRcdFx0e3sjaWYgZ3JvdXAuaXRlbXN9fVxuXHRcdFx0XHRcdFx0e3sjZWFjaCBncm91cC5pdGVtcyBhcyBjYXR9fVxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cInt7Y2F0LmlkfX1cIj57e2NhdC5uYW1lfX08L29wdGlvbj5cblx0XHRcdFx0XHRcdHt7L2VhY2h9fVxuXHRcdFx0XHRcdFx0e3svaWZ9fVxuXHRcdFx0XHRcdDwvb3B0Z3JvdXA+XG5cdFx0XHRcdFx0e3svZWFjaH19XG5cdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8aW5wdXQgY2xhc3M9XCJkZXNjcmlwdGlvblwiIHBsYWNlaG9sZGVyPVwiZGVzY3JpcHRpb25cIiBiaW5kOnZhbHVlPVwicm93LmRlc2NyaXB0aW9uXCI+XG5cdFx0XHQ8aW5wdXQgY2xhc3M9XCJhbW91bnRcIiBwbGFjZWhvbGRlcj1cIjAuMDBcIiBiaW5kOnZhbHVlPXJvdy5hbW91bnQgb246a2V5ZG93bj1cIm9ua2V5ZG93bihldmVudClcIj5cblxuXHRcdFx0e3sjaWYgaWR4ID09PSAwfX1cblx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiU3BsaXRcIiBjbGFzcz1cImJ0biBidG4tc3BsaXQgaW9uLW1kLXN3YXBcIiBvbjpjbGljaz1cInNwbGl0KClcIj48L2J1dHRvbj5cblx0XHRcdHt7ZWxzZX19XG5cdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cIlJlbW92ZVwiIGNsYXNzPVwiYnRuIGJ0bi11bnNwbGl0IGlvbi1tZC1jbG9zZVwiIG9uOmNsaWNrPVwidW5zcGxpdChpZHgpXCI+PC9idXR0b24+XG5cdFx0XHR7ey9pZn19XG5cdFx0PC9kaXY+XG5cdFx0e3svZWFjaH19XG5cdDwvZGl2PlxuXHQ8ZGl2IGNsYXNzPVwiZm9ybS1yb3cgZm9ybS1yb3ctcmVwZWF0XCI+XG5cdFx0PGxhYmVsPlJlcGVhdCBldmVyeSBtb250aCwgZm9yIDwvbGFiZWw+XG5cdFx0PGlucHV0IGNsYXNzPVwicmVwZWF0ZXJcIiBtaW49XCIxXCIgbWF4PVwiMTJcIiB0eXBlPVwibnVtYmVyXCIgYmluZDp2YWx1ZT1yZXBlYXQ+XG5cdFx0PGxhYmVsPiBtb250aHM8L2xhYmVsPlxuXHQ8L2Rpdj5cblx0PGRpdiBjbGFzcz1cImZvcm0tZm9vdGVyIGZvcm0tcm93XCI+XG5cdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXJlc2V0XCIgb246Y2xpY2s9XCJyZXNldCgpXCI+UmVzZXQ8L2J1dHRvbj5cblx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBkYW5nZXIgYnRuLXJlbW92ZVwiIG9uOmNsaWNrPVwicmVtb3ZlKClcIj5SZW1vdmU8L2J1dHRvbj5cblx0XHQ8ZGl2IGNsYXNzPVwiZmxleC1maWxsZXJcIj48L2Rpdj5cblx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tY2FuY2VsXCIgb246Y2xpY2s9XCJyZXNldCgpXCI+Q2FuY2VsPC9idXR0b24+XG5cdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gc3VjY2VzcyBidG4tc2F2ZVwiPlNhdmU8L2J1dHRvbj5cblx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBzdWNjZXNzIGJ0bi1hZGRcIj5BZGQ8L2J1dHRvbj5cblx0PC9kaXY+XG48L2Zvcm0+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgdXRpbCBmcm9tICcuL3V0aWwuanMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhdGEgKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRpbkVkaXQ6IGZhbHNlLFxuXHRcdFx0ZGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnN1YnN0cigwLCA3KSxcblx0XHRcdHJlcGVhdDogMSxcblx0XHRcdHJvd3M6IFsge2lkOiAnJywgZGVzY3JpcHRpb246ICcnLCBhbW91bnQ6ICcnfSBdLFxuXHRcdFx0Y2F0ZWdvcmllczogW10sXG5cdFx0fTtcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGdldERhdGEgKCkge1xuXHRcdFx0Y29uc3QgZGF0ZSA9IHRoaXMuZ2V0KCdkYXRlJykgfHwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnN1YnN0cigwLCA3KTtcblx0XHRcdGNvbnN0IGVudHJpZXMgPSB1dGlsLmRlZXBDb3B5QXJyYXkodGhpcy5nZXQoJ3Jvd3MnKSlcblx0XHRcdFx0Lm1hcChlID0+IHtcblx0XHRcdFx0XHRlLmRhdGUgPSBkYXRlO1xuXHRcdFx0XHRcdGUuYW1vdW50ID0gdXRpbC5wYXJzZUFtb3VudChlLmFtb3VudCk7XG5cdFx0XHRcdFx0cmV0dXJuIGU7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHQvLyBzdWJ0cmFjdCBvdGhlciBhbW91bnRzIGZyb20gdGhlIGZpcnN0IHJvd1xuXHRcdFx0Y29uc3QgYW1vdW50cyA9IGVudHJpZXMubWFwKChpdGVtLCBpKSA9PiBpID4gMCA/IGl0ZW0uYW1vdW50IDogMCk7XG5cdFx0XHRjb25zdCBzdW0gPSBhbW91bnRzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1x0Ly8gYWRkIGFsbCB1cFxuXHRcdFx0ZW50cmllc1swXS5hbW91bnQgLT0gc3VtO1xuXG5cdFx0XHQvLyByZXBlYXQgbW9udGhseVxuXHRcdFx0Y29uc3QgcmVwZWF0ZXIgPSB0aGlzLmdldCgncmVwZWF0Jyk7XG5cdFx0XHRyZXR1cm4gdXRpbC5yZXBlYXRFbnRyaWVzKGVudHJpZXMsIHJlcGVhdGVyKTtcblx0XHR9LFxuXG5cdFx0c3BsaXQgKCkge1xuXHRcdFx0Y29uc3Qgcm93cyA9IHRoaXMuZ2V0KCdyb3dzJyk7XG5cdFx0XHRyb3dzLnB1c2goe2lkOiAnJywgZGVzY3JpcHRpb246IHJvd3NbMF0uZGVzY3JpcHRpb24sIGFtb3VudDogJyd9KTtcblx0XHRcdHRoaXMuc2V0KHsgcm93cyB9KTtcblx0XHR9LFxuXG5cdFx0dW5zcGxpdCAoaWR4KSB7XG5cdFx0XHRjb25zdCByb3dzID0gdGhpcy5nZXQoJ3Jvd3MnKTtcblx0XHRcdHJvd3Muc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHR0aGlzLnNldCh7IHJvd3MgfSk7XG5cdFx0fSxcblxuXHRcdGVkaXQgKGRhdGEpIHtcblx0XHRcdHRoaXMucmVzZXQoKTtcblx0XHRcdHRoaXMuc2V0KHsgaW5FZGl0OiB0cnVlLCByb3dzOiBbZGF0YV0gfSk7XG5cdFx0XHR0aGlzLmZpcmUoJ2NoYW5nZScsIHRoaXMuZ2V0RGF0YSgpKTtcblx0XHR9LFxuXG5cdFx0cmVzZXQgKCkge1xuXHRcdFx0dGhpcy5zZXQoe1xuXHRcdFx0XHRpbkVkaXQ6IGZhbHNlLFxuXHRcdFx0XHRyZXBlYXQ6IDEsXG5cdFx0XHRcdHJvd3M6IFsge2lkOiAnJywgZGVzY3JpcHRpb246ICcnLCBhbW91bnQ6ICcnIH0gXVxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLnRvZ2dsZUFtb3VudEVycm9yKCk7XG5cdFx0XHR0aGlzLmZpcmUoJ2NoYW5nZScsIHRoaXMuZ2V0RGF0YSgpKTtcblx0XHR9LFxuXG5cdFx0b25pbnB1dCAoKSB7XG5cdFx0XHR0aGlzLnRvZ2dsZUFtb3VudEVycm9yKCk7XG5cdFx0XHR0aGlzLmZpcmUoJ2NoYW5nZScsIHRoaXMuZ2V0RGF0YSgpKTtcblx0XHR9LFxuXG5cdFx0cmVtb3ZlICgpIHtcblx0XHRcdHRoaXMuZmlyZSgncmVtb3ZlJywgeyBpZDogdGhpcy5nZXQoJ3Jvd3MnKVswXS5pZCB9KTtcblx0XHRcdHRoaXMucmVzZXQoKTtcblx0XHR9LFxuXG5cdFx0b25zdWJtaXQgKGUpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGNvbnN0IGRhdGEgPSB0aGlzLmdldERhdGEoKTtcblx0XHRcdGlmICghZGF0YVswXS5hbW91bnQpIHtcblx0XHRcdFx0dGhpcy50b2dnbGVBbW91bnRFcnJvcignUGxlYXNlIGVudGVyIGFtb3VudCcpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5maXJlKCdlcnJvcicsICdQbGVhc2UgZW50ZXIgYW1vdW50Jyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmZpcmUoJ3N1Ym1pdCcsIGRhdGEpO1xuXHRcdFx0dGhpcy5yZXNldCgpO1xuXHRcdH0sXG5cblx0XHRvbmtleWRvd24gKGUpIHtcblx0XHRcdGlmICh1dGlsLmlzQWxsb3dlZEtleShlKSkgcmV0dXJuIHRydWU7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fSxcblxuXHRcdHRvZ2dsZUFtb3VudEVycm9yIChlcnIpIHtcblx0XHRcdHRoaXMucmVmcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJy5hbW91bnQnKS5zZXRDdXN0b21WYWxpZGl0eShlcnIgfHwgJycpO1xuXHRcdH1cblx0fVxufTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2Zvcm0vaW5kZXguaHRtbCIsIlxuZnVuY3Rpb24gcGFyc2VBbW91bnQgKGFtb3VudCkge1xuXHQvKiBlc2xpbnQgbm8tZXZhbDogMCAqL1xuXHRhbW91bnQgPSAoJycgKyBhbW91bnQpLnJlcGxhY2UoL1xccy9nLCAnJyk7XG5cdGlmICghKC9eWytcXC1cXFxcKi8oKVxcZC5dKyQvaSkudGVzdChhbW91bnQpKSByZXR1cm4gMDtcblx0aWYgKCgvWytcXC1cXFxcKi8uXSsvaSkudGVzdChhbW91bnQpKSB7XG5cdFx0dHJ5IHsgYW1vdW50ID0gZXZhbChhbW91bnQpOyB9XG5cdFx0Y2F0Y2ggKGUpIHsgYW1vdW50ID0gMDsgfVxuXHR9XG5cdGxldCBudW0gPSBwYXJzZUZsb2F0KGFtb3VudCk7XG5cdGlmIChudW0gPT09IEluZmluaXR5IHx8IGlzTmFOKG51bSkgfHwgbnVtIDwgMCkgbnVtID0gJ2Vycm9yJztcblx0cmV0dXJuIG51bTtcbn1cblxuLy8geXl5eS1tbVxuZnVuY3Rpb24gZ2V0U3RyRGF0ZSAoeSwgbSkge1xuXHRyZXR1cm4gYCR7eX0tJHsoJzAnICsgbSkuc3Vic3RyKC0yKX1gO1xufVxuXG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZVN0ciAoZGF0ZVN0cikge1xuXHRsZXQgW3llYXIsIG1vbnRoXSA9IGRhdGVTdHIuc3BsaXQoJy0nKTtcblx0eWVhciA9IHBhcnNlSW50KHllYXIsIDEwKTtcblx0bW9udGggPSBwYXJzZUludChtb250aCwgMTApO1xuXHRjb25zdCBzdHIgPSBnZXRTdHJEYXRlKHllYXIsIG1vbnRoKTtcblx0cmV0dXJuIHsgeWVhciwgbW9udGgsIHN0ciB9O1xufVxuXG5cbmZ1bmN0aW9uIGRlZXBDb3B5QXJyYXkgKGFycikge1xuXHRyZXR1cm4gYXJyLm1hcChvID0+IE9iamVjdC5hc3NpZ24oe30sIG8pKTtcbn1cblxuXG5mdW5jdGlvbiBhZGRNb250aHNUb0RhdGUgKGRhdGUsIG1vbnRoRGlmZikge1xuXHRjb25zdCBkYXRlT2JqID0gcGFyc2VEYXRlU3RyKGRhdGUpO1xuXHRsZXQgeWVhciA9IGRhdGVPYmoueWVhcjtcblx0bGV0IG1vbnRoID0gZGF0ZU9iai5tb250aCArIG1vbnRoRGlmZjtcblx0aWYgKG1vbnRoID49IDEzKSB7XG5cdFx0eWVhciA9IHllYXIgKyBNYXRoLmZsb29yKG1vbnRoIC8gMTIpO1xuXHRcdG1vbnRoID0gKG1vbnRoICUgMTIpICsgMTtcblx0fVxuXHRyZXR1cm4gZ2V0U3RyRGF0ZSh5ZWFyLCBtb250aCk7XG59XG5cblxuZnVuY3Rpb24gY2xvbmVFbnRyaWVzIChlbnRyaWVzLCBtb250aERpZmYpIHtcblx0cmV0dXJuIGRlZXBDb3B5QXJyYXkoZW50cmllcykubWFwKGl0ZW0gPT4ge1xuXHRcdGl0ZW0uZGF0ZSA9IGFkZE1vbnRoc1RvRGF0ZShpdGVtLmRhdGUsIG1vbnRoRGlmZik7XG5cdFx0cmV0dXJuIGl0ZW07XG5cdH0pO1xufVxuXG5cbmZ1bmN0aW9uIHJlcGVhdEVudHJpZXMgKGVudHJpZXMsIHJlcGVhdGVyKSB7XG5cdGlmICghcmVwZWF0ZXIgfHwgcmVwZWF0ZXIgPT09IDEpIHJldHVybiBlbnRyaWVzO1xuXG5cdGNvbnN0IG9yaWdpbmFsRW50cmllcyA9IGRlZXBDb3B5QXJyYXkoZW50cmllcyk7XG5cdGZvciAobGV0IGkgPSAxOyBpIDwgcmVwZWF0ZXI7IGkrKykge1xuXHRcdGNvbnN0IG5ld1Jvd3MgPSBjbG9uZUVudHJpZXMob3JpZ2luYWxFbnRyaWVzLCBpKTtcblx0XHRlbnRyaWVzID0gZW50cmllcy5jb25jYXQobmV3Um93cyk7XG5cdH1cblx0cmV0dXJuIGVudHJpZXM7XG59XG5cblxuZnVuY3Rpb24gaXNBbGxvd2VkS2V5IChlKSB7XG5cdGNvbnN0IGFsbG93ZWRSZWcgPSAvXlsoKVxcZC8qKy1dezF9JC87XG5cdGNvbnN0IGFsbG93ZWRLZXlzID0gWydFbnRlcicsICdUYWInLCAnQmFja3NwYWNlJywgJ0RlbGV0ZScsICdBcnJvd0xlZnQnLCAnQXJyb3dSaWdodCcsICcuJ107XG5cblx0aWYgKGFsbG93ZWRLZXlzLmluZGV4T2YoZS5rZXkpID4gLTEpIHJldHVybiB0cnVlO1xuXHRpZiAoZS5tZXRhS2V5IHx8IGUuY3RybEtleSkgcmV0dXJuIHRydWU7XG5cdGlmIChlLmtleS5sZW5ndGggPCAzICYmIGFsbG93ZWRSZWcudGVzdChlLmtleSkpIHJldHVybiB0cnVlO1xuXHRyZXR1cm4gZmFsc2U7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRwYXJzZURhdGVTdHIsXG5cdHBhcnNlQW1vdW50LFxuXHRyZXBlYXRFbnRyaWVzLFxuXHRkZWVwQ29weUFycmF5LFxuXHRpc0FsbG93ZWRLZXksXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2Zvcm0vdXRpbC5qcyIsIjxkaXYgY2xhc3M9XCJ0YWJsZVwiIHJlZjp0YWJsZT5cblx0e3sjaWYgZGF0YSAmJiBkYXRhLml0ZW1zIH19XG5cdFx0PHRhYmxlPlxuXHRcdDx0aGVhZD48dHI+XG5cdFx0XHQ8dGQgY2xhc3M9XCJkYXRlXCI+RGF0ZTwvdGQ+XG5cdFx0XHQ8dGQgY2xhc3M9XCJkZXNjXCI+RGVzY3JpcHRpb248L3RkPlxuXHRcdFx0PHRkIGNsYXNzPVwiYW1vdW50XCI+QW1vdW50PC90ZD5cblx0XHQ8L3RyPjwvdGhlYWQ+XG5cdFx0PHRib2R5PlxuXHRcdFx0e3sjZWFjaCBkYXRhLml0ZW1zIGFzIGl0ZW0sIGlkeH19XG5cdFx0XHRcdDx0ciBvbjpjbGljaz1cIm9uUm93Q2xpY2soaXRlbSlcIj5cblx0XHRcdFx0XHQ8dGQ+e3tpdGVtLmRhdGUuc3Vic3RyKDAsIDcpfX08L3RkPlxuXHRcdFx0XHRcdDx0ZCBjbGFzcz1cImRlc2NcIj57e2l0ZW0uY2F0ZWdvcnl9fSAtIHt7aXRlbS5kZXNjcmlwdGlvbn19PC90ZD5cblx0XHRcdFx0XHQ8dGQgY2xhc3M9XCJhbW91bnRcIj57e2l0ZW0uYW1vdW50X3N0cn19PC90ZD5cblx0XHRcdFx0PC90cj5cblx0XHRcdHt7L2VhY2h9fVxuXHRcdDwvdGJvZHk+XG5cdFx0PHRmb290Pjx0cj5cblx0XHRcdDx0ZCBjb2xzcGFuPVwiMlwiPlxuXHRcdFx0XHQ8IS0tIDxpIGNsYXNzPVwiaW9uLW1kLXNlYXJjaFwiPjwvaT4gLS0+XG5cdFx0XHRcdDxpbnB1dCBjbGFzcz1cInRhYmxlLWZpbHRlclwiIHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIkZpbHRlclwiPlxuXHRcdFx0PC90ZD5cblx0XHRcdDx0ZCBjbGFzcz1cImFtb3VudFwiPnt7ZGF0YS50b3RhbF9zdHJ9fTwvdGQ+XG5cdFx0PC90cj48L3Rmb290PlxuXHRcdDwvdGFibGU+XG5cdHt7L2lmfX1cbjwvZGl2PlxuXG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhdGEgKCkge1xuXHRcdHJldHVybiB7IGRhdGE6IFtdIH07XG5cdH0sXG5cdG9uY3JlYXRlICgpIHtcblx0fSxcblxuXHRtZXRob2RzOiB7XG5cdFx0b25Sb3dDbGljayAoaXRlbSkge1xuXHRcdFx0dGhpcy5maXJlKCdjbGljaycsIGl0ZW0pO1xuXHRcdH1cblx0fVxufTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3RhYmxlL2luZGV4Lmh0bWwiLCJcbmZ1bmN0aW9uIGdldCAodXJsKSB7XG5cdHJldHVybiBmZXRjaCh1cmwsIHsgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcbn1cblxuZnVuY3Rpb24gcG9zdCAodXJsLCBwYXJhbXMpIHtcblx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHBhcmFtcyk7XG5cdGNvbnN0IG9wdHMgPSB7XG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0aGVhZGVyczogeyAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG5cdFx0Y3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcblx0XHRib2R5LFxuXHR9O1xuXHRyZXR1cm4gZmV0Y2godXJsLCBvcHRzKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcbn1cblxuXG5cbmNvbnN0IENhdGVnb3JpZXMgPSB7XG5cdGdldDogKCkgPT4gZ2V0KCdhcGkvY2F0ZWdvcnl0cmVlJyksXG59O1xuXG5jb25zdCBFeHBlbnNlcyA9IHtcblx0Z2V0IChkYXRlID0gJycsIGlkID0gJycpIHtcblx0XHRpZiAoaWQpIGlkID0gYC8ke2lkfWA7XG5cdFx0aWYgKGRhdGUpIGRhdGUgPSBgP2RhdGU9JHtkYXRlfWA7XG5cdFx0cmV0dXJuIGdldChgYXBpL2VudHJpZXMke2lkfSR7ZGF0ZX1gKTtcblx0fSxcblx0c2F2ZSAoZGF0YSkge1xuXHRcdGNvbnN0IGlkID0gZGF0YS5sZW5ndGggPT09IDEgJiYgZGF0YVswXS5pZDtcblx0XHRpZiAoZGF0YS5sZW5ndGggPT09IDEpIGRhdGEgPSBkYXRhWzBdO1xuXHRcdHJldHVybiBwb3N0KGBhcGkvZW50cmllcyR7aWQgPyAnLycgKyBpZCA6ICcnfWAsIGRhdGEpO1xuXHR9XG59O1xuXG5cblxuZXhwb3J0IHtcblx0Q2F0ZWdvcmllcyxcblx0RXhwZW5zZXMsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2RhdGEvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9