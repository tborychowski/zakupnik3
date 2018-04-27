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

	onDateChange (date) {
		this.refs.form.set({ date: date.dateStr });
		this.loadTable(date.dateStr);
	},

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
			cat: each_value_1[i],
			cat_index: i
		}));
	}

	function select_change_handler() {
		var context = select._svelte;
		var state = component.get();
		select_updating = true;
		context.each_value[context.idx].group_id = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["p" /* selectValue */])(select);
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

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* selectOption */])(select, row.group_id)

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
						cat: each_value_1[i],
						cat_index: i
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

			if (!select_updating) Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* selectOption */])(select, row.group_id)

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

// (8:5) {{#each categories as cat}}
function create_each_block_1(component, state) {
	var row = state.row, each_value = state.each_value, idx = state.idx, cat = state.cat, each_value_1 = state.each_value_1, cat_index = state.cat_index;
	var optgroup, optgroup_label_value;

	var if_block = (cat.groups) && create_if_block(component, state);

	return {
		c: function create() {
			optgroup = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("optgroup");
			if (if_block) if_block.c();
			this.h();
		},

		h: function hydrate() {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["q" /* setAttribute */])(optgroup, "label", optgroup_label_value = cat.name);
		},

		m: function mount(target, anchor) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["k" /* insertNode */])(optgroup, target, anchor);
			if (if_block) if_block.m(optgroup, null);
		},

		p: function update(changed, state) {
			row = state.row;
			each_value = state.each_value;
			idx = state.idx;
			cat = state.cat;
			each_value_1 = state.each_value_1;
			cat_index = state.cat_index;
			if (cat.groups) {
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

			if ((changed.categories) && optgroup_label_value !== (optgroup_label_value = cat.name)) {
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

// (11:6) {{#each cat.groups as group}}
function create_each_block_2(component, state) {
	var row = state.row, each_value = state.each_value, idx = state.idx, cat = state.cat, each_value_1 = state.each_value_1, cat_index = state.cat_index, group = state.group, each_value_2 = state.each_value_2, group_index = state.group_index;
	var option, text_value = group.name, text, option_value_value;

	return {
		c: function create() {
			option = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("option");
			text = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])(text_value);
			this.h();
		},

		h: function hydrate() {
			option.__value = option_value_value = group.id;
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
			cat = state.cat;
			each_value_1 = state.each_value_1;
			cat_index = state.cat_index;
			group = state.group;
			each_value_2 = state.each_value_2;
			group_index = state.group_index;
			if ((changed.categories) && text_value !== (text_value = group.name)) {
				text.data = text_value;
			}

			if ((changed.categories) && option_value_value !== (option_value_value = group.id)) {
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

// (10:6) {{#if cat.groups}}
function create_if_block(component, state) {
	var row = state.row, each_value = state.each_value, idx = state.idx, cat = state.cat, each_value_1 = state.each_value_1, cat_index = state.cat_index;
	var each_anchor;

	var each_value_2 = cat.groups;

	var each_blocks = [];

	for (var i = 0; i < each_value_2.length; i += 1) {
		each_blocks[i] = create_each_block_2(component, Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])({}, state), {
			each_value_2: each_value_2,
			group: each_value_2[i],
			group_index: i
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
			cat = state.cat;
			each_value_1 = state.each_value_1;
			cat_index = state.cat_index;
			var each_value_2 = cat.groups;

			if (changed.categories) {
				for (var i = 0; i < each_value_2.length; i += 1) {
					var each_context = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])({}, state), {
						each_value_2: each_value_2,
						group: each_value_2[i],
						group_index: i
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
	var tr, td, text_value = item.date.substr(0, 7), text, text_1, td_1, text_2_value = item.group.name, text_2, text_3, text_4_value = item.description, text_4, text_5, td_2, text_6_value = state.format(item.amount), text_6;

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

			if ((changed.data) && text_2_value !== (text_2_value = item.group.name)) {
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
function req(url, method = 'GET', params) {
	const opts = {
		method: method,
		headers: { 'Content-type': 'application/json' },
		credentials: 'include'
	};
	if (params) opts.body = JSON.stringify(params);
	return fetch(`api/${url}`, opts).then(res => res.json());
}

const get = url => req(url);
const post = (url, params) => req(url, 'POST', params);
const put = (url, params) => req(url, 'PUT', params);
// const del = (url, params) => req(url, 'DELETE', params);


const Categories = {
	get: () => get('categories')
};

const Expenses = {
	get: (date = '') => get(`entries?date=${date}`),
	save: data => {
		if (data.length === 1 && data[0].id) return put('entries', data);
		return post('entries', data);
	}
};



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjhmMDVkNDMwMWJjZmZjMWY1ZTkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9hcHAvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9jbGllbnQveWVhci1tb250aC1waWNrZXIvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvZm9ybS9pbmRleC5odG1sIiwid2VicGFjazovLy8uL2NsaWVudC9mb3JtL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3RhYmxlL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2RhdGEvaW5kZXguanMiXSwibmFtZXMiOlsidGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyc2VBbW91bnQiLCJhbW91bnQiLCJyZXBsYWNlIiwidGVzdCIsImV2YWwiLCJlIiwibnVtIiwicGFyc2VGbG9hdCIsIkluZmluaXR5IiwiaXNOYU4iLCJnZXRTdHJEYXRlIiwieSIsIm0iLCJzdWJzdHIiLCJwYXJzZURhdGVTdHIiLCJkYXRlU3RyIiwieWVhciIsIm1vbnRoIiwic3BsaXQiLCJwYXJzZUludCIsInN0ciIsImRlZXBDb3B5QXJyYXkiLCJhcnIiLCJtYXAiLCJvIiwiT2JqZWN0IiwiYXNzaWduIiwiYWRkTW9udGhzVG9EYXRlIiwiZGF0ZSIsIm1vbnRoRGlmZiIsImRhdGVPYmoiLCJNYXRoIiwiZmxvb3IiLCJjbG9uZUVudHJpZXMiLCJlbnRyaWVzIiwiaXRlbSIsInJlcGVhdEVudHJpZXMiLCJyZXBlYXRlciIsIm9yaWdpbmFsRW50cmllcyIsImkiLCJuZXdSb3dzIiwiY29uY2F0IiwiaXNBbGxvd2VkS2V5IiwiYWxsb3dlZFJlZyIsImFsbG93ZWRLZXlzIiwiaW5kZXhPZiIsImtleSIsIm1ldGFLZXkiLCJjdHJsS2V5IiwibGVuZ3RoIiwicmVxIiwidXJsIiwibWV0aG9kIiwicGFyYW1zIiwib3B0cyIsImhlYWRlcnMiLCJjcmVkZW50aWFscyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImdldCIsInBvc3QiLCJwdXQiLCJDYXRlZ29yaWVzIiwiRXhwZW5zZXMiLCJzYXZlIiwiZGF0YSIsImlkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsdUJBQXVCO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkMsY0FBYyw2Q0FBNkM7QUFDM0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixrQkFBa0I7QUFDbEM7QUFDQTtBQUNBLGtCQUFrQiw0QkFBNEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixrQkFBa0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQiwyQkFBMkI7QUFDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLDJCQUEyQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFF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QWYsQ0FBWjtBQUNaLFFBQU9PLE1BQU8sT0FBTVQsR0FBSSxFQUFqQixFQUFvQkcsSUFBcEIsRUFBMEJPLElBQTFCLENBQStCQyxPQUFPQSxJQUFJQyxJQUFKLEVBQXRDLENBQVA7QUFDQTs7QUFFRCxNQUFNQyxNQUFNYixPQUFPRCxJQUFJQyxHQUFKLENBQW5CO0FBQ0EsTUFBTWMsT0FBTyxDQUFDZCxHQUFELEVBQU1FLE1BQU4sS0FBaUJILElBQUlDLEdBQUosRUFBUyxNQUFULEVBQWlCRSxNQUFqQixDQUE5QjtBQUNBLE1BQU1hLE1BQU0sQ0FBQ2YsR0FBRCxFQUFNRSxNQUFOLEtBQWlCSCxJQUFJQyxHQUFKLEVBQVMsS0FBVCxFQUFnQkUsTUFBaEIsQ0FBN0I7QUFDQTs7O0FBR0EsTUFBTWMsYUFBYTtBQUNsQkgsTUFBSyxNQUFNQSxJQUFJLFlBQUo7QUFETyxDQUFuQjs7QUFJQSxNQUFNSSxXQUFXO0FBQ2hCSixNQUFLLENBQUNwQyxPQUFPLEVBQVIsS0FBZW9DLElBQUssZ0JBQWVwQyxJQUFLLEVBQXpCLENBREo7QUFFaEJ5QyxPQUFNQyxRQUFRO0FBQ2IsTUFBSUEsS0FBS3JCLE1BQUwsS0FBZ0IsQ0FBaEIsSUFBcUJxQixLQUFLLENBQUwsRUFBUUMsRUFBakMsRUFBcUMsT0FBT0wsSUFBSSxTQUFKLEVBQWVJLElBQWYsQ0FBUDtBQUNyQyxTQUFPTCxLQUFLLFNBQUwsRUFBZ0JLLElBQWhCLENBQVA7QUFDQTtBQUxlLENBQWpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9wdWJsaWMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjhmMDVkNDMwMWJjZmZjMWY1ZTkiLCJmdW5jdGlvbiBub29wKCkge31cblxuZnVuY3Rpb24gYXNzaWduKHRhciwgc3JjKSB7XG5cdGZvciAodmFyIGsgaW4gc3JjKSB0YXJba10gPSBzcmNba107XG5cdHJldHVybiB0YXI7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZE5vZGUobm9kZSwgdGFyZ2V0KSB7XG5cdHRhcmdldC5hcHBlbmRDaGlsZChub2RlKTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0Tm9kZShub2RlLCB0YXJnZXQsIGFuY2hvcikge1xuXHR0YXJnZXQuaW5zZXJ0QmVmb3JlKG5vZGUsIGFuY2hvcik7XG59XG5cbmZ1bmN0aW9uIGRldGFjaE5vZGUobm9kZSkge1xuXHRub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG59XG5cbmZ1bmN0aW9uIGRldGFjaEJldHdlZW4oYmVmb3JlLCBhZnRlcikge1xuXHR3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nICYmIGJlZm9yZS5uZXh0U2libGluZyAhPT0gYWZ0ZXIpIHtcblx0XHRiZWZvcmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiZWZvcmUubmV4dFNpYmxpbmcpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRldGFjaEJlZm9yZShhZnRlcikge1xuXHR3aGlsZSAoYWZ0ZXIucHJldmlvdXNTaWJsaW5nKSB7XG5cdFx0YWZ0ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhZnRlci5wcmV2aW91c1NpYmxpbmcpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRldGFjaEFmdGVyKGJlZm9yZSkge1xuXHR3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nKSB7XG5cdFx0YmVmb3JlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYmVmb3JlLm5leHRTaWJsaW5nKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZWluc2VydEJldHdlZW4oYmVmb3JlLCBhZnRlciwgdGFyZ2V0KSB7XG5cdHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcgJiYgYmVmb3JlLm5leHRTaWJsaW5nICE9PSBhZnRlcikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChiZWZvcmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiZWZvcmUubmV4dFNpYmxpbmcpKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZWluc2VydENoaWxkcmVuKHBhcmVudCwgdGFyZ2V0KSB7XG5cdHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkgdGFyZ2V0LmFwcGVuZENoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gcmVpbnNlcnRBZnRlcihiZWZvcmUsIHRhcmdldCkge1xuXHR3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nKSB0YXJnZXQuYXBwZW5kQ2hpbGQoYmVmb3JlLm5leHRTaWJsaW5nKTtcbn1cblxuZnVuY3Rpb24gcmVpbnNlcnRCZWZvcmUoYWZ0ZXIsIHRhcmdldCkge1xuXHR2YXIgcGFyZW50ID0gYWZ0ZXIucGFyZW50Tm9kZTtcblx0d2hpbGUgKHBhcmVudC5maXJzdENoaWxkICE9PSBhZnRlcikgdGFyZ2V0LmFwcGVuZENoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gZGVzdHJveUVhY2goaXRlcmF0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGl0ZXJhdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRpZiAoaXRlcmF0aW9uc1tpXSkgaXRlcmF0aW9uc1tpXS5kKCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnQoKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQobmFtZSkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3ZnRWxlbWVudChuYW1lKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgbmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHQoZGF0YSkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbW1lbnQoKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcbn1cblxuZnVuY3Rpb24gYWRkTGlzdGVuZXIobm9kZSwgZXZlbnQsIGhhbmRsZXIpIHtcblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKG5vZGUsIGV2ZW50LCBoYW5kbGVyKSB7XG5cdG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuXHRub2RlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhub2RlLCBhdHRyaWJ1dGVzKSB7XG5cdGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0aWYgKGtleSBpbiBub2RlKSB7XG5cdFx0XHRub2RlW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChhdHRyaWJ1dGVzW2tleV0gPT09IHVuZGVmaW5lZCkgcmVtb3ZlQXR0cmlidXRlKG5vZGUsIGtleSk7XG5cdFx0XHRlbHNlIHNldEF0dHJpYnV0ZShub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZShub2RlLCBhdHRyaWJ1dGUpIHtcblx0bm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbn1cblxuZnVuY3Rpb24gc2V0WGxpbmtBdHRyaWJ1dGUobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuXHRub2RlLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGdldEJpbmRpbmdHcm91cFZhbHVlKGdyb3VwKSB7XG5cdHZhciB2YWx1ZSA9IFtdO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGdyb3VwLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0aWYgKGdyb3VwW2ldLmNoZWNrZWQpIHZhbHVlLnB1c2goZ3JvdXBbaV0uX192YWx1ZSk7XG5cdH1cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgPT09ICcnID8gdW5kZWZpbmVkIDogK3ZhbHVlO1xufVxuXG5mdW5jdGlvbiB0aW1lUmFuZ2VzVG9BcnJheShyYW5nZXMpIHtcblx0dmFyIGFycmF5ID0gW107XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcmFuZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0YXJyYXkucHVzaCh7IHN0YXJ0OiByYW5nZXMuc3RhcnQoaSksIGVuZDogcmFuZ2VzLmVuZChpKSB9KTtcblx0fVxuXHRyZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGNoaWxkcmVuIChlbGVtZW50KSB7XG5cdHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGROb2Rlcyk7XG59XG5cbmZ1bmN0aW9uIGNsYWltRWxlbWVudCAobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMsIHN2Zykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dmFyIG5vZGUgPSBub2Rlc1tpXTtcblx0XHRpZiAobm9kZS5ub2RlTmFtZSA9PT0gbmFtZSkge1xuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBub2RlLmF0dHJpYnV0ZXMubGVuZ3RoOyBqICs9IDEpIHtcblx0XHRcdFx0dmFyIGF0dHJpYnV0ZSA9IG5vZGUuYXR0cmlidXRlc1tqXTtcblx0XHRcdFx0aWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZS5uYW1lXSkgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlLm5hbWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5vZGVzLnNwbGljZShpLCAxKVswXTsgLy8gVE9ETyBzdHJpcCB1bndhbnRlZCBhdHRyaWJ1dGVzXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN2ZyA/IGNyZWF0ZVN2Z0VsZW1lbnQobmFtZSkgOiBjcmVhdGVFbGVtZW50KG5hbWUpO1xufVxuXG5mdW5jdGlvbiBjbGFpbVRleHQgKG5vZGVzLCBkYXRhKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHR2YXIgbm9kZSA9IG5vZGVzW2ldO1xuXHRcdGlmIChub2RlLm5vZGVUeXBlID09PSAzKSB7XG5cdFx0XHRub2RlLmRhdGEgPSBkYXRhO1xuXHRcdFx0cmV0dXJuIG5vZGVzLnNwbGljZShpLCAxKVswXTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY3JlYXRlVGV4dChkYXRhKTtcbn1cblxuZnVuY3Rpb24gc2V0SW5wdXRUeXBlKGlucHV0LCB0eXBlKSB7XG5cdHRyeSB7XG5cdFx0aW5wdXQudHlwZSA9IHR5cGU7XG5cdH0gY2F0Y2ggKGUpIHt9XG59XG5cbmZ1bmN0aW9uIHNldFN0eWxlKG5vZGUsIGtleSwgdmFsdWUpIHtcblx0bm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0T3B0aW9uKHNlbGVjdCwgdmFsdWUpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdHZhciBvcHRpb24gPSBzZWxlY3Qub3B0aW9uc1tpXTtcblxuXHRcdGlmIChvcHRpb24uX192YWx1ZSA9PT0gdmFsdWUpIHtcblx0XHRcdG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIHNlbGVjdE9wdGlvbnMoc2VsZWN0LCB2YWx1ZSkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dmFyIG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuXHRcdG9wdGlvbi5zZWxlY3RlZCA9IH52YWx1ZS5pbmRleE9mKG9wdGlvbi5fX3ZhbHVlKTtcblx0fVxufVxuXG5mdW5jdGlvbiBzZWxlY3RWYWx1ZShzZWxlY3QpIHtcblx0dmFyIHNlbGVjdGVkT3B0aW9uID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJzpjaGVja2VkJykgfHwgc2VsZWN0Lm9wdGlvbnNbMF07XG5cdHJldHVybiBzZWxlY3RlZE9wdGlvbiAmJiBzZWxlY3RlZE9wdGlvbi5fX3ZhbHVlO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RNdWx0aXBsZVZhbHVlKHNlbGVjdCkge1xuXHRyZXR1cm4gW10ubWFwLmNhbGwoc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJzpjaGVja2VkJyksIGZ1bmN0aW9uKG9wdGlvbikge1xuXHRcdHJldHVybiBvcHRpb24uX192YWx1ZTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3lCbG9jayhibG9jaywgbG9va3VwKSB7XG5cdGJsb2NrLnUoKTtcblx0YmxvY2suZCgpO1xuXHRsb29rdXBbYmxvY2sua2V5XSA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIG91dHJvQW5kRGVzdHJveUJsb2NrKGJsb2NrLCBsb29rdXApIHtcblx0YmxvY2subyhmdW5jdGlvbigpIHtcblx0XHRkZXN0cm95QmxvY2soYmxvY2ssIGxvb2t1cCk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVLZXllZEVhY2gob2xkX2Jsb2NrcywgY29tcG9uZW50LCBjaGFuZ2VkLCBrZXlfcHJvcCwgZHluYW1pYywgbGlzdCwgbG9va3VwLCBub2RlLCBoYXNfb3V0cm8sIGNyZWF0ZV9lYWNoX2Jsb2NrLCBpbnRyb19tZXRob2QsIG5leHQsIGdldF9jb250ZXh0KSB7XG5cdHZhciBvID0gb2xkX2Jsb2Nrcy5sZW5ndGg7XG5cdHZhciBuID0gbGlzdC5sZW5ndGg7XG5cblx0dmFyIGkgPSBvO1xuXHR2YXIgb2xkX2luZGV4ZXMgPSB7fTtcblx0d2hpbGUgKGktLSkgb2xkX2luZGV4ZXNbb2xkX2Jsb2Nrc1tpXS5rZXldID0gaTtcblxuXHR2YXIgbmV3X2Jsb2NrcyA9IFtdO1xuXHR2YXIgbmV3X2xvb2t1cCA9IHt9O1xuXHR2YXIgZGVsdGFzID0ge307XG5cblx0dmFyIGkgPSBuO1xuXHR3aGlsZSAoaS0tKSB7XG5cdFx0dmFyIGtleSA9IGxpc3RbaV1ba2V5X3Byb3BdO1xuXHRcdHZhciBibG9jayA9IGxvb2t1cFtrZXldO1xuXG5cdFx0aWYgKCFibG9jaykge1xuXHRcdFx0YmxvY2sgPSBjcmVhdGVfZWFjaF9ibG9jayhjb21wb25lbnQsIGtleSwgZ2V0X2NvbnRleHQoaSkpO1xuXHRcdFx0YmxvY2suYygpO1xuXHRcdH0gZWxzZSBpZiAoZHluYW1pYykge1xuXHRcdFx0YmxvY2sucChjaGFuZ2VkLCBnZXRfY29udGV4dChpKSk7XG5cdFx0fVxuXG5cdFx0bmV3X2Jsb2Nrc1tpXSA9IG5ld19sb29rdXBba2V5XSA9IGJsb2NrO1xuXG5cdFx0aWYgKGtleSBpbiBvbGRfaW5kZXhlcykgZGVsdGFzW2tleV0gPSBNYXRoLmFicyhpIC0gb2xkX2luZGV4ZXNba2V5XSk7XG5cdH1cblxuXHR2YXIgd2lsbF9tb3ZlID0ge307XG5cdHZhciBkaWRfbW92ZSA9IHt9O1xuXG5cdHZhciBkZXN0cm95ID0gaGFzX291dHJvID8gb3V0cm9BbmREZXN0cm95QmxvY2sgOiBkZXN0cm95QmxvY2s7XG5cblx0ZnVuY3Rpb24gaW5zZXJ0KGJsb2NrKSB7XG5cdFx0YmxvY2tbaW50cm9fbWV0aG9kXShub2RlLCBuZXh0KTtcblx0XHRsb29rdXBbYmxvY2sua2V5XSA9IGJsb2NrO1xuXHRcdG5leHQgPSBibG9jay5maXJzdDtcblx0XHRuLS07XG5cdH1cblxuXHR3aGlsZSAobyAmJiBuKSB7XG5cdFx0dmFyIG5ld19ibG9jayA9IG5ld19ibG9ja3NbbiAtIDFdO1xuXHRcdHZhciBvbGRfYmxvY2sgPSBvbGRfYmxvY2tzW28gLSAxXTtcblx0XHR2YXIgbmV3X2tleSA9IG5ld19ibG9jay5rZXk7XG5cdFx0dmFyIG9sZF9rZXkgPSBvbGRfYmxvY2sua2V5O1xuXG5cdFx0aWYgKG5ld19ibG9jayA9PT0gb2xkX2Jsb2NrKSB7XG5cdFx0XHQvLyBkbyBub3RoaW5nXG5cdFx0XHRuZXh0ID0gbmV3X2Jsb2NrLmZpcnN0O1xuXHRcdFx0by0tO1xuXHRcdFx0bi0tO1xuXHRcdH1cblxuXHRcdGVsc2UgaWYgKCFuZXdfbG9va3VwW29sZF9rZXldKSB7XG5cdFx0XHQvLyByZW1vdmUgb2xkIGJsb2NrXG5cdFx0XHRkZXN0cm95KG9sZF9ibG9jaywgbG9va3VwKTtcblx0XHRcdG8tLTtcblx0XHR9XG5cblx0XHRlbHNlIGlmICghbG9va3VwW25ld19rZXldIHx8IHdpbGxfbW92ZVtuZXdfa2V5XSkge1xuXHRcdFx0aW5zZXJ0KG5ld19ibG9jayk7XG5cdFx0fVxuXG5cdFx0ZWxzZSBpZiAoZGlkX21vdmVbb2xkX2tleV0pIHtcblx0XHRcdG8tLTtcblxuXHRcdH0gZWxzZSBpZiAoZGVsdGFzW25ld19rZXldID4gZGVsdGFzW29sZF9rZXldKSB7XG5cdFx0XHRkaWRfbW92ZVtuZXdfa2V5XSA9IHRydWU7XG5cdFx0XHRpbnNlcnQobmV3X2Jsb2NrKTtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHR3aWxsX21vdmVbb2xkX2tleV0gPSB0cnVlO1xuXHRcdFx0by0tO1xuXHRcdH1cblx0fVxuXG5cdHdoaWxlIChvLS0pIHtcblx0XHR2YXIgb2xkX2Jsb2NrID0gb2xkX2Jsb2Nrc1tvXTtcblx0XHRpZiAoIW5ld19sb29rdXBbb2xkX2Jsb2NrLmtleV0pIGRlc3Ryb3kob2xkX2Jsb2NrLCBsb29rdXApO1xuXHR9XG5cblx0d2hpbGUgKG4pIGluc2VydChuZXdfYmxvY2tzW24gLSAxXSk7XG5cblx0cmV0dXJuIG5ld19ibG9ja3M7XG59XG5cbmZ1bmN0aW9uIGdldFNwcmVhZFVwZGF0ZShsZXZlbHMsIHVwZGF0ZXMpIHtcblx0dmFyIHVwZGF0ZSA9IHt9O1xuXG5cdHZhciB0b19udWxsX291dCA9IHt9O1xuXHR2YXIgYWNjb3VudGVkX2ZvciA9IHt9O1xuXG5cdHZhciBpID0gbGV2ZWxzLmxlbmd0aDtcblx0d2hpbGUgKGktLSkge1xuXHRcdHZhciBvID0gbGV2ZWxzW2ldO1xuXHRcdHZhciBuID0gdXBkYXRlc1tpXTtcblxuXHRcdGlmIChuKSB7XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gbykge1xuXHRcdFx0XHRpZiAoIShrZXkgaW4gbikpIHRvX251bGxfb3V0W2tleV0gPSAxO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gbikge1xuXHRcdFx0XHRpZiAoIWFjY291bnRlZF9mb3Jba2V5XSkge1xuXHRcdFx0XHRcdHVwZGF0ZVtrZXldID0gbltrZXldO1xuXHRcdFx0XHRcdGFjY291bnRlZF9mb3Jba2V5XSA9IDE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bGV2ZWxzW2ldID0gbjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIG8pIHtcblx0XHRcdFx0YWNjb3VudGVkX2ZvcltrZXldID0gMTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmb3IgKHZhciBrZXkgaW4gdG9fbnVsbF9vdXQpIHtcblx0XHRpZiAoIShrZXkgaW4gdXBkYXRlKSkgdXBkYXRlW2tleV0gPSB1bmRlZmluZWQ7XG5cdH1cblxuXHRyZXR1cm4gdXBkYXRlO1xufVxuXG5mdW5jdGlvbiBsaW5lYXIodCkge1xuXHRyZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVSdWxlKFxuXHRhLFxuXHRiLFxuXHRkZWx0YSxcblx0ZHVyYXRpb24sXG5cdGVhc2UsXG5cdGZuXG4pIHtcblx0dmFyIGtleWZyYW1lcyA9ICd7XFxuJztcblxuXHRmb3IgKHZhciBwID0gMDsgcCA8PSAxOyBwICs9IDE2LjY2NiAvIGR1cmF0aW9uKSB7XG5cdFx0dmFyIHQgPSBhICsgZGVsdGEgKiBlYXNlKHApO1xuXHRcdGtleWZyYW1lcyArPSBwICogMTAwICsgJyV7JyArIGZuKHQpICsgJ31cXG4nO1xuXHR9XG5cblx0cmV0dXJuIGtleWZyYW1lcyArICcxMDAlIHsnICsgZm4oYikgKyAnfVxcbn0nO1xufVxuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZGFya3NreWFwcC9zdHJpbmctaGFzaC9ibG9iL21hc3Rlci9pbmRleC5qc1xuZnVuY3Rpb24gaGFzaChzdHIpIHtcblx0dmFyIGhhc2ggPSA1MzgxO1xuXHR2YXIgaSA9IHN0ci5sZW5ndGg7XG5cblx0d2hpbGUgKGktLSkgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpIF4gc3RyLmNoYXJDb2RlQXQoaSk7XG5cdHJldHVybiBoYXNoID4+PiAwO1xufVxuXG5mdW5jdGlvbiB3cmFwVHJhbnNpdGlvbihjb21wb25lbnQsIG5vZGUsIGZuLCBwYXJhbXMsIGludHJvLCBvdXRncm91cCkge1xuXHR2YXIgb2JqID0gZm4obm9kZSwgcGFyYW1zKTtcblx0dmFyIGR1cmF0aW9uID0gb2JqLmR1cmF0aW9uIHx8IDMwMDtcblx0dmFyIGVhc2UgPSBvYmouZWFzaW5nIHx8IGxpbmVhcjtcblx0dmFyIGNzc1RleHQ7XG5cblx0Ly8gVE9ETyBzaGFyZSA8c3R5bGU+IHRhZyBiZXR3ZWVuIGFsbCB0cmFuc2l0aW9ucz9cblx0aWYgKG9iai5jc3MgJiYgIXRyYW5zaXRpb25NYW5hZ2VyLnN0eWxlc2hlZXQpIHtcblx0XHR2YXIgc3R5bGUgPSBjcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdHRyYW5zaXRpb25NYW5hZ2VyLnN0eWxlc2hlZXQgPSBzdHlsZS5zaGVldDtcblx0fVxuXG5cdGlmIChpbnRybykge1xuXHRcdGlmIChvYmouY3NzICYmIG9iai5kZWxheSkge1xuXHRcdFx0Y3NzVGV4dCA9IG5vZGUuc3R5bGUuY3NzVGV4dDtcblx0XHRcdG5vZGUuc3R5bGUuY3NzVGV4dCArPSBvYmouY3NzKDApO1xuXHRcdH1cblxuXHRcdGlmIChvYmoudGljaykgb2JqLnRpY2soMCk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHQ6IGludHJvID8gMCA6IDEsXG5cdFx0cnVubmluZzogZmFsc2UsXG5cdFx0cHJvZ3JhbTogbnVsbCxcblx0XHRwZW5kaW5nOiBudWxsLFxuXHRcdHJ1bjogZnVuY3Rpb24oaW50cm8sIGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgcHJvZ3JhbSA9IHtcblx0XHRcdFx0c3RhcnQ6IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSArIChvYmouZGVsYXkgfHwgMCksXG5cdFx0XHRcdGludHJvOiBpbnRybyxcblx0XHRcdFx0Y2FsbGJhY2s6IGNhbGxiYWNrXG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAob2JqLmRlbGF5KSB7XG5cdFx0XHRcdHRoaXMucGVuZGluZyA9IHByb2dyYW07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnN0YXJ0KHByb2dyYW0pO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXRoaXMucnVubmluZykge1xuXHRcdFx0XHR0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0XHR0cmFuc2l0aW9uTWFuYWdlci5hZGQodGhpcyk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRzdGFydDogZnVuY3Rpb24ocHJvZ3JhbSkge1xuXHRcdFx0Y29tcG9uZW50LmZpcmUocHJvZ3JhbS5pbnRybyA/ICdpbnRyby5zdGFydCcgOiAnb3V0cm8uc3RhcnQnLCB7IG5vZGU6IG5vZGUgfSk7XG5cblx0XHRcdHByb2dyYW0uYSA9IHRoaXMudDtcblx0XHRcdHByb2dyYW0uYiA9IHByb2dyYW0uaW50cm8gPyAxIDogMDtcblx0XHRcdHByb2dyYW0uZGVsdGEgPSBwcm9ncmFtLmIgLSBwcm9ncmFtLmE7XG5cdFx0XHRwcm9ncmFtLmR1cmF0aW9uID0gZHVyYXRpb24gKiBNYXRoLmFicyhwcm9ncmFtLmIgLSBwcm9ncmFtLmEpO1xuXHRcdFx0cHJvZ3JhbS5lbmQgPSBwcm9ncmFtLnN0YXJ0ICsgcHJvZ3JhbS5kdXJhdGlvbjtcblxuXHRcdFx0aWYgKG9iai5jc3MpIHtcblx0XHRcdFx0aWYgKG9iai5kZWxheSkgbm9kZS5zdHlsZS5jc3NUZXh0ID0gY3NzVGV4dDtcblxuXHRcdFx0XHRwcm9ncmFtLnJ1bGUgPSBnZW5lcmF0ZVJ1bGUoXG5cdFx0XHRcdFx0cHJvZ3JhbS5hLFxuXHRcdFx0XHRcdHByb2dyYW0uYixcblx0XHRcdFx0XHRwcm9ncmFtLmRlbHRhLFxuXHRcdFx0XHRcdHByb2dyYW0uZHVyYXRpb24sXG5cdFx0XHRcdFx0ZWFzZSxcblx0XHRcdFx0XHRvYmouY3NzXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0dHJhbnNpdGlvbk1hbmFnZXIuYWRkUnVsZShwcm9ncmFtLnJ1bGUsIHByb2dyYW0ubmFtZSA9ICdfX3N2ZWx0ZV8nICsgaGFzaChwcm9ncmFtLnJ1bGUpKTtcblxuXHRcdFx0XHRub2RlLnN0eWxlLmFuaW1hdGlvbiA9IChub2RlLnN0eWxlLmFuaW1hdGlvbiB8fCAnJylcblx0XHRcdFx0XHQuc3BsaXQoJywgJylcblx0XHRcdFx0XHQuZmlsdGVyKGZ1bmN0aW9uKGFuaW0pIHtcblx0XHRcdFx0XHRcdC8vIHdoZW4gaW50cm9pbmcsIGRpc2NhcmQgb2xkIGFuaW1hdGlvbnMgaWYgdGhlcmUgYXJlIGFueVxuXHRcdFx0XHRcdFx0cmV0dXJuIGFuaW0gJiYgKHByb2dyYW0uZGVsdGEgPCAwIHx8ICEvX19zdmVsdGUvLnRlc3QoYW5pbSkpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmNvbmNhdChwcm9ncmFtLm5hbWUgKyAnICcgKyBwcm9ncmFtLmR1cmF0aW9uICsgJ21zIGxpbmVhciAxIGZvcndhcmRzJylcblx0XHRcdFx0XHQuam9pbignLCAnKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcblx0XHRcdHRoaXMucGVuZGluZyA9IG51bGw7XG5cdFx0fSxcblx0XHR1cGRhdGU6IGZ1bmN0aW9uKG5vdykge1xuXHRcdFx0dmFyIHByb2dyYW0gPSB0aGlzLnByb2dyYW07XG5cdFx0XHRpZiAoIXByb2dyYW0pIHJldHVybjtcblxuXHRcdFx0dmFyIHAgPSBub3cgLSBwcm9ncmFtLnN0YXJ0O1xuXHRcdFx0dGhpcy50ID0gcHJvZ3JhbS5hICsgcHJvZ3JhbS5kZWx0YSAqIGVhc2UocCAvIHByb2dyYW0uZHVyYXRpb24pO1xuXHRcdFx0aWYgKG9iai50aWNrKSBvYmoudGljayh0aGlzLnQpO1xuXHRcdH0sXG5cdFx0ZG9uZTogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcHJvZ3JhbSA9IHRoaXMucHJvZ3JhbTtcblx0XHRcdHRoaXMudCA9IHByb2dyYW0uYjtcblx0XHRcdGlmIChvYmoudGljaykgb2JqLnRpY2sodGhpcy50KTtcblx0XHRcdGlmIChvYmouY3NzKSB0cmFuc2l0aW9uTWFuYWdlci5kZWxldGVSdWxlKG5vZGUsIHByb2dyYW0ubmFtZSk7XG5cdFx0XHRwcm9ncmFtLmNhbGxiYWNrKCk7XG5cdFx0XHRwcm9ncmFtID0gbnVsbDtcblx0XHRcdHRoaXMucnVubmluZyA9ICEhdGhpcy5wZW5kaW5nO1xuXHRcdH0sXG5cdFx0YWJvcnQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKG9iai50aWNrKSBvYmoudGljaygxKTtcblx0XHRcdGlmIChvYmouY3NzKSB0cmFuc2l0aW9uTWFuYWdlci5kZWxldGVSdWxlKG5vZGUsIHRoaXMucHJvZ3JhbS5uYW1lKTtcblx0XHRcdHRoaXMucHJvZ3JhbSA9IHRoaXMucGVuZGluZyA9IG51bGw7XG5cdFx0XHR0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcblx0XHR9XG5cdH07XG59XG5cbnZhciB0cmFuc2l0aW9uTWFuYWdlciA9IHtcblx0cnVubmluZzogZmFsc2UsXG5cdHRyYW5zaXRpb25zOiBbXSxcblx0Ym91bmQ6IG51bGwsXG5cdHN0eWxlc2hlZXQ6IG51bGwsXG5cdGFjdGl2ZVJ1bGVzOiB7fSxcblxuXHRhZGQ6IGZ1bmN0aW9uKHRyYW5zaXRpb24pIHtcblx0XHR0aGlzLnRyYW5zaXRpb25zLnB1c2godHJhbnNpdGlvbik7XG5cblx0XHRpZiAoIXRoaXMucnVubmluZykge1xuXHRcdFx0dGhpcy5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmJvdW5kIHx8ICh0aGlzLmJvdW5kID0gdGhpcy5uZXh0LmJpbmQodGhpcykpKTtcblx0XHR9XG5cdH0sXG5cblx0YWRkUnVsZTogZnVuY3Rpb24ocnVsZSwgbmFtZSkge1xuXHRcdGlmICghdGhpcy5hY3RpdmVSdWxlc1tuYW1lXSkge1xuXHRcdFx0dGhpcy5hY3RpdmVSdWxlc1tuYW1lXSA9IHRydWU7XG5cdFx0XHR0aGlzLnN0eWxlc2hlZXQuaW5zZXJ0UnVsZSgnQGtleWZyYW1lcyAnICsgbmFtZSArICcgJyArIHJ1bGUsIHRoaXMuc3R5bGVzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuXHRcdH1cblx0fSxcblxuXHRuZXh0OiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcblxuXHRcdHZhciBub3cgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG5cdFx0dmFyIGkgPSB0aGlzLnRyYW5zaXRpb25zLmxlbmd0aDtcblxuXHRcdHdoaWxlIChpLS0pIHtcblx0XHRcdHZhciB0cmFuc2l0aW9uID0gdGhpcy50cmFuc2l0aW9uc1tpXTtcblxuXHRcdFx0aWYgKHRyYW5zaXRpb24ucHJvZ3JhbSAmJiBub3cgPj0gdHJhbnNpdGlvbi5wcm9ncmFtLmVuZCkge1xuXHRcdFx0XHR0cmFuc2l0aW9uLmRvbmUoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRyYW5zaXRpb24ucGVuZGluZyAmJiBub3cgPj0gdHJhbnNpdGlvbi5wZW5kaW5nLnN0YXJ0KSB7XG5cdFx0XHRcdHRyYW5zaXRpb24uc3RhcnQodHJhbnNpdGlvbi5wZW5kaW5nKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRyYW5zaXRpb24ucnVubmluZykge1xuXHRcdFx0XHR0cmFuc2l0aW9uLnVwZGF0ZShub3cpO1xuXHRcdFx0XHR0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIGlmICghdHJhbnNpdGlvbi5wZW5kaW5nKSB7XG5cdFx0XHRcdHRoaXMudHJhbnNpdGlvbnMuc3BsaWNlKGksIDEpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLnJ1bm5pbmcpIHtcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmJvdW5kKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuc3R5bGVzaGVldCkge1xuXHRcdFx0dmFyIGkgPSB0aGlzLnN0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKGktLSkgdGhpcy5zdHlsZXNoZWV0LmRlbGV0ZVJ1bGUoaSk7XG5cdFx0XHR0aGlzLmFjdGl2ZVJ1bGVzID0ge307XG5cdFx0fVxuXHR9LFxuXG5cdGRlbGV0ZVJ1bGU6IGZ1bmN0aW9uKG5vZGUsIG5hbWUpIHtcblx0XHRub2RlLnN0eWxlLmFuaW1hdGlvbiA9IG5vZGUuc3R5bGUuYW5pbWF0aW9uXG5cdFx0XHQuc3BsaXQoJywgJylcblx0XHRcdC5maWx0ZXIoZnVuY3Rpb24oYW5pbSkge1xuXHRcdFx0XHRyZXR1cm4gYW5pbS5pbmRleE9mKG5hbWUpID09PSAtMTtcblx0XHRcdH0pXG5cdFx0XHQuam9pbignLCAnKTtcblx0fVxufTtcblxuZnVuY3Rpb24gYmxhbmtPYmplY3QoKSB7XG5cdHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwpO1xufVxuXG5mdW5jdGlvbiBkZXN0cm95KGRldGFjaCkge1xuXHR0aGlzLmRlc3Ryb3kgPSBub29wO1xuXHR0aGlzLmZpcmUoJ2Rlc3Ryb3knKTtcblx0dGhpcy5zZXQgPSB0aGlzLmdldCA9IG5vb3A7XG5cblx0aWYgKGRldGFjaCAhPT0gZmFsc2UpIHRoaXMuX2ZyYWdtZW50LnUoKTtcblx0dGhpcy5fZnJhZ21lbnQuZCgpO1xuXHR0aGlzLl9mcmFnbWVudCA9IHRoaXMuX3N0YXRlID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gZGVzdHJveURldihkZXRhY2gpIHtcblx0ZGVzdHJveS5jYWxsKHRoaXMsIGRldGFjaCk7XG5cdHRoaXMuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUud2FybignQ29tcG9uZW50IHdhcyBhbHJlYWR5IGRlc3Ryb3llZCcpO1xuXHR9O1xufVxuXG5mdW5jdGlvbiBfZGlmZmVycyhhLCBiKSB7XG5cdHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiIHx8ICgoYSAmJiB0eXBlb2YgYSA9PT0gJ29iamVjdCcpIHx8IHR5cGVvZiBhID09PSAnZnVuY3Rpb24nKTtcbn1cblxuZnVuY3Rpb24gX2RpZmZlcnNJbW11dGFibGUoYSwgYikge1xuXHRyZXR1cm4gYSAhPSBhID8gYiA9PSBiIDogYSAhPT0gYjtcbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hPYnNlcnZlcnMoY29tcG9uZW50LCBncm91cCwgY2hhbmdlZCwgbmV3U3RhdGUsIG9sZFN0YXRlKSB7XG5cdGZvciAodmFyIGtleSBpbiBncm91cCkge1xuXHRcdGlmICghY2hhbmdlZFtrZXldKSBjb250aW51ZTtcblxuXHRcdHZhciBuZXdWYWx1ZSA9IG5ld1N0YXRlW2tleV07XG5cdFx0dmFyIG9sZFZhbHVlID0gb2xkU3RhdGVba2V5XTtcblxuXHRcdHZhciBjYWxsYmFja3MgPSBncm91cFtrZXldO1xuXHRcdGlmICghY2FsbGJhY2tzKSBjb250aW51ZTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHR2YXIgY2FsbGJhY2sgPSBjYWxsYmFja3NbaV07XG5cdFx0XHRpZiAoY2FsbGJhY2suX19jYWxsaW5nKSBjb250aW51ZTtcblxuXHRcdFx0Y2FsbGJhY2suX19jYWxsaW5nID0gdHJ1ZTtcblx0XHRcdGNhbGxiYWNrLmNhbGwoY29tcG9uZW50LCBuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuXHRcdFx0Y2FsbGJhY2suX19jYWxsaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGZpcmUoZXZlbnROYW1lLCBkYXRhKSB7XG5cdHZhciBoYW5kbGVycyA9XG5cdFx0ZXZlbnROYW1lIGluIHRoaXMuX2hhbmRsZXJzICYmIHRoaXMuX2hhbmRsZXJzW2V2ZW50TmFtZV0uc2xpY2UoKTtcblx0aWYgKCFoYW5kbGVycykgcmV0dXJuO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgaGFuZGxlcnMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRoYW5kbGVyc1tpXS5jYWxsKHRoaXMsIGRhdGEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdldChrZXkpIHtcblx0cmV0dXJuIGtleSA/IHRoaXMuX3N0YXRlW2tleV0gOiB0aGlzLl9zdGF0ZTtcbn1cblxuZnVuY3Rpb24gaW5pdChjb21wb25lbnQsIG9wdGlvbnMpIHtcblx0Y29tcG9uZW50Ll9vYnNlcnZlcnMgPSB7IHByZTogYmxhbmtPYmplY3QoKSwgcG9zdDogYmxhbmtPYmplY3QoKSB9O1xuXHRjb21wb25lbnQuX2hhbmRsZXJzID0gYmxhbmtPYmplY3QoKTtcblx0Y29tcG9uZW50Ll9iaW5kID0gb3B0aW9ucy5fYmluZDtcblxuXHRjb21wb25lbnQub3B0aW9ucyA9IG9wdGlvbnM7XG5cdGNvbXBvbmVudC5yb290ID0gb3B0aW9ucy5yb290IHx8IGNvbXBvbmVudDtcblx0Y29tcG9uZW50LnN0b3JlID0gY29tcG9uZW50LnJvb3Quc3RvcmUgfHwgb3B0aW9ucy5zdG9yZTtcbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShrZXksIGNhbGxiYWNrLCBvcHRpb25zKSB7XG5cdHZhciBncm91cCA9IG9wdGlvbnMgJiYgb3B0aW9ucy5kZWZlclxuXHRcdD8gdGhpcy5fb2JzZXJ2ZXJzLnBvc3Rcblx0XHQ6IHRoaXMuX29ic2VydmVycy5wcmU7XG5cblx0KGdyb3VwW2tleV0gfHwgKGdyb3VwW2tleV0gPSBbXSkpLnB1c2goY2FsbGJhY2spO1xuXG5cdGlmICghb3B0aW9ucyB8fCBvcHRpb25zLmluaXQgIT09IGZhbHNlKSB7XG5cdFx0Y2FsbGJhY2suX19jYWxsaW5nID0gdHJ1ZTtcblx0XHRjYWxsYmFjay5jYWxsKHRoaXMsIHRoaXMuX3N0YXRlW2tleV0pO1xuXHRcdGNhbGxiYWNrLl9fY2FsbGluZyA9IGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRjYW5jZWw6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGluZGV4ID0gZ3JvdXBba2V5XS5pbmRleE9mKGNhbGxiYWNrKTtcblx0XHRcdGlmICh+aW5kZXgpIGdyb3VwW2tleV0uc3BsaWNlKGluZGV4LCAxKTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIG9ic2VydmVEZXYoa2V5LCBjYWxsYmFjaywgb3B0aW9ucykge1xuXHR2YXIgYyA9IChrZXkgPSAnJyArIGtleSkuc2VhcmNoKC9bLltdLyk7XG5cdGlmIChjID4gLTEpIHtcblx0XHR2YXIgbWVzc2FnZSA9XG5cdFx0XHQnVGhlIGZpcnN0IGFyZ3VtZW50IHRvIGNvbXBvbmVudC5vYnNlcnZlKC4uLikgbXVzdCBiZSB0aGUgbmFtZSBvZiBhIHRvcC1sZXZlbCBwcm9wZXJ0eSc7XG5cdFx0aWYgKGMgPiAwKVxuXHRcdFx0bWVzc2FnZSArPSBcIiwgaS5lLiAnXCIgKyBrZXkuc2xpY2UoMCwgYykgKyBcIicgcmF0aGVyIHRoYW4gJ1wiICsga2V5ICsgXCInXCI7XG5cblx0XHR0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG5cdH1cblxuXHRyZXR1cm4gb2JzZXJ2ZS5jYWxsKHRoaXMsIGtleSwgY2FsbGJhY2ssIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBvbihldmVudE5hbWUsIGhhbmRsZXIpIHtcblx0aWYgKGV2ZW50TmFtZSA9PT0gJ3RlYXJkb3duJykgcmV0dXJuIHRoaXMub24oJ2Rlc3Ryb3knLCBoYW5kbGVyKTtcblxuXHR2YXIgaGFuZGxlcnMgPSB0aGlzLl9oYW5kbGVyc1tldmVudE5hbWVdIHx8ICh0aGlzLl9oYW5kbGVyc1tldmVudE5hbWVdID0gW10pO1xuXHRoYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuXG5cdHJldHVybiB7XG5cdFx0Y2FuY2VsOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpbmRleCA9IGhhbmRsZXJzLmluZGV4T2YoaGFuZGxlcik7XG5cdFx0XHRpZiAofmluZGV4KSBoYW5kbGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gb25EZXYoZXZlbnROYW1lLCBoYW5kbGVyKSB7XG5cdGlmIChldmVudE5hbWUgPT09ICd0ZWFyZG93bicpIHtcblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcIlVzZSBjb21wb25lbnQub24oJ2Rlc3Ryb3knLCAuLi4pIGluc3RlYWQgb2YgY29tcG9uZW50Lm9uKCd0ZWFyZG93bicsIC4uLikgd2hpY2ggaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSB1bnN1cHBvcnRlZCBpbiBTdmVsdGUgMlwiXG5cdFx0KTtcblx0XHRyZXR1cm4gdGhpcy5vbignZGVzdHJveScsIGhhbmRsZXIpO1xuXHR9XG5cblx0cmV0dXJuIG9uLmNhbGwodGhpcywgZXZlbnROYW1lLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gcnVuKGZuKSB7XG5cdGZuKCk7XG59XG5cbmZ1bmN0aW9uIHNldChuZXdTdGF0ZSkge1xuXHR0aGlzLl9zZXQoYXNzaWduKHt9LCBuZXdTdGF0ZSkpO1xuXHRpZiAodGhpcy5yb290Ll9sb2NrKSByZXR1cm47XG5cdHRoaXMucm9vdC5fbG9jayA9IHRydWU7XG5cdGNhbGxBbGwodGhpcy5yb290Ll9iZWZvcmVjcmVhdGUpO1xuXHRjYWxsQWxsKHRoaXMucm9vdC5fb25jcmVhdGUpO1xuXHRjYWxsQWxsKHRoaXMucm9vdC5fYWZ0ZXJjcmVhdGUpO1xuXHR0aGlzLnJvb3QuX2xvY2sgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gX3NldChuZXdTdGF0ZSkge1xuXHR2YXIgb2xkU3RhdGUgPSB0aGlzLl9zdGF0ZSxcblx0XHRjaGFuZ2VkID0ge30sXG5cdFx0ZGlydHkgPSBmYWxzZTtcblxuXHRmb3IgKHZhciBrZXkgaW4gbmV3U3RhdGUpIHtcblx0XHRpZiAodGhpcy5fZGlmZmVycyhuZXdTdGF0ZVtrZXldLCBvbGRTdGF0ZVtrZXldKSkgY2hhbmdlZFtrZXldID0gZGlydHkgPSB0cnVlO1xuXHR9XG5cdGlmICghZGlydHkpIHJldHVybjtcblxuXHR0aGlzLl9zdGF0ZSA9IGFzc2lnbihhc3NpZ24oe30sIG9sZFN0YXRlKSwgbmV3U3RhdGUpO1xuXHR0aGlzLl9yZWNvbXB1dGUoY2hhbmdlZCwgdGhpcy5fc3RhdGUpO1xuXHRpZiAodGhpcy5fYmluZCkgdGhpcy5fYmluZChjaGFuZ2VkLCB0aGlzLl9zdGF0ZSk7XG5cblx0aWYgKHRoaXMuX2ZyYWdtZW50KSB7XG5cdFx0ZGlzcGF0Y2hPYnNlcnZlcnModGhpcywgdGhpcy5fb2JzZXJ2ZXJzLnByZSwgY2hhbmdlZCwgdGhpcy5fc3RhdGUsIG9sZFN0YXRlKTtcblx0XHR0aGlzLl9mcmFnbWVudC5wKGNoYW5nZWQsIHRoaXMuX3N0YXRlKTtcblx0XHRkaXNwYXRjaE9ic2VydmVycyh0aGlzLCB0aGlzLl9vYnNlcnZlcnMucG9zdCwgY2hhbmdlZCwgdGhpcy5fc3RhdGUsIG9sZFN0YXRlKTtcblx0fVxufVxuXG5mdW5jdGlvbiBzZXREZXYobmV3U3RhdGUpIHtcblx0aWYgKHR5cGVvZiBuZXdTdGF0ZSAhPT0gJ29iamVjdCcpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHR0aGlzLl9kZWJ1Z05hbWUgKyAnLnNldCB3YXMgY2FsbGVkIHdpdGhvdXQgYW4gb2JqZWN0IG9mIGRhdGEga2V5LXZhbHVlcyB0byB1cGRhdGUuJ1xuXHRcdCk7XG5cdH1cblxuXHR0aGlzLl9jaGVja1JlYWRPbmx5KG5ld1N0YXRlKTtcblx0c2V0LmNhbGwodGhpcywgbmV3U3RhdGUpO1xufVxuXG5mdW5jdGlvbiBjYWxsQWxsKGZucykge1xuXHR3aGlsZSAoZm5zICYmIGZucy5sZW5ndGgpIGZucy5zaGlmdCgpKCk7XG59XG5cbmZ1bmN0aW9uIF9tb3VudCh0YXJnZXQsIGFuY2hvcikge1xuXHR0aGlzLl9mcmFnbWVudFt0aGlzLl9mcmFnbWVudC5pID8gJ2knIDogJ20nXSh0YXJnZXQsIGFuY2hvciB8fCBudWxsKTtcbn1cblxuZnVuY3Rpb24gX3VubW91bnQoKSB7XG5cdGlmICh0aGlzLl9mcmFnbWVudCkgdGhpcy5fZnJhZ21lbnQudSgpO1xufVxuXG5mdW5jdGlvbiBpc1Byb21pc2UodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuXG52YXIgUEVORElORyA9IHt9O1xudmFyIFNVQ0NFU1MgPSB7fTtcbnZhciBGQUlMVVJFID0ge307XG5cbmZ1bmN0aW9uIHJlbW92ZUZyb21TdG9yZSgpIHtcblx0dGhpcy5zdG9yZS5fcmVtb3ZlKHRoaXMpO1xufVxuXG52YXIgcHJvdG8gPSB7XG5cdGRlc3Ryb3k6IGRlc3Ryb3ksXG5cdGdldDogZ2V0LFxuXHRmaXJlOiBmaXJlLFxuXHRvYnNlcnZlOiBvYnNlcnZlLFxuXHRvbjogb24sXG5cdHNldDogc2V0LFxuXHR0ZWFyZG93bjogZGVzdHJveSxcblx0X3JlY29tcHV0ZTogbm9vcCxcblx0X3NldDogX3NldCxcblx0X21vdW50OiBfbW91bnQsXG5cdF91bm1vdW50OiBfdW5tb3VudCxcblx0X2RpZmZlcnM6IF9kaWZmZXJzXG59O1xuXG52YXIgcHJvdG9EZXYgPSB7XG5cdGRlc3Ryb3k6IGRlc3Ryb3lEZXYsXG5cdGdldDogZ2V0LFxuXHRmaXJlOiBmaXJlLFxuXHRvYnNlcnZlOiBvYnNlcnZlRGV2LFxuXHRvbjogb25EZXYsXG5cdHNldDogc2V0RGV2LFxuXHR0ZWFyZG93bjogZGVzdHJveURldixcblx0X3JlY29tcHV0ZTogbm9vcCxcblx0X3NldDogX3NldCxcblx0X21vdW50OiBfbW91bnQsXG5cdF91bm1vdW50OiBfdW5tb3VudCxcblx0X2RpZmZlcnM6IF9kaWZmZXJzXG59O1xuXG5leHBvcnQgeyBibGFua09iamVjdCwgZGVzdHJveSwgZGVzdHJveURldiwgX2RpZmZlcnMsIF9kaWZmZXJzSW1tdXRhYmxlLCBkaXNwYXRjaE9ic2VydmVycywgZmlyZSwgZ2V0LCBpbml0LCBvYnNlcnZlLCBvYnNlcnZlRGV2LCBvbiwgb25EZXYsIHJ1biwgc2V0LCBfc2V0LCBzZXREZXYsIGNhbGxBbGwsIF9tb3VudCwgX3VubW91bnQsIGlzUHJvbWlzZSwgUEVORElORywgU1VDQ0VTUywgRkFJTFVSRSwgcmVtb3ZlRnJvbVN0b3JlLCBwcm90bywgcHJvdG9EZXYsIGFwcGVuZE5vZGUsIGluc2VydE5vZGUsIGRldGFjaE5vZGUsIGRldGFjaEJldHdlZW4sIGRldGFjaEJlZm9yZSwgZGV0YWNoQWZ0ZXIsIHJlaW5zZXJ0QmV0d2VlbiwgcmVpbnNlcnRDaGlsZHJlbiwgcmVpbnNlcnRBZnRlciwgcmVpbnNlcnRCZWZvcmUsIGRlc3Ryb3lFYWNoLCBjcmVhdGVGcmFnbWVudCwgY3JlYXRlRWxlbWVudCwgY3JlYXRlU3ZnRWxlbWVudCwgY3JlYXRlVGV4dCwgY3JlYXRlQ29tbWVudCwgYWRkTGlzdGVuZXIsIHJlbW92ZUxpc3RlbmVyLCBzZXRBdHRyaWJ1dGUsIHNldEF0dHJpYnV0ZXMsIHJlbW92ZUF0dHJpYnV0ZSwgc2V0WGxpbmtBdHRyaWJ1dGUsIGdldEJpbmRpbmdHcm91cFZhbHVlLCB0b051bWJlciwgdGltZVJhbmdlc1RvQXJyYXksIGNoaWxkcmVuLCBjbGFpbUVsZW1lbnQsIGNsYWltVGV4dCwgc2V0SW5wdXRUeXBlLCBzZXRTdHlsZSwgc2VsZWN0T3B0aW9uLCBzZWxlY3RPcHRpb25zLCBzZWxlY3RWYWx1ZSwgc2VsZWN0TXVsdGlwbGVWYWx1ZSwgZGVzdHJveUJsb2NrLCBvdXRyb0FuZERlc3Ryb3lCbG9jaywgdXBkYXRlS2V5ZWRFYWNoLCBnZXRTcHJlYWRVcGRhdGUsIGxpbmVhciwgZ2VuZXJhdGVSdWxlLCBoYXNoLCB3cmFwVHJhbnNpdGlvbiwgdHJhbnNpdGlvbk1hbmFnZXIsIG5vb3AsIGFzc2lnbiB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3ZlbHRlL3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQXBwIGZyb20gJy4vYXBwJztcblxubmV3IEFwcCh7IHRhcmdldDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpIH0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2luZGV4LmpzIiwiPGRpdiBjbGFzcz1cImZvcm0tYm94XCI+XG5cdDxZZWFyTW9udGhQaWNrZXIgcmVmOnBpY2tlcj48L1llYXJNb250aFBpY2tlcj5cblx0PEZvcm0gcmVmOmZvcm0+PC9Gb3JtPlxuPC9kaXY+XG48VGFibGUgcmVmOnRhYmxlPjwvVGFibGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgWWVhck1vbnRoUGlja2VyIGZyb20gJy4uL3llYXItbW9udGgtcGlja2VyJztcbmltcG9ydCBGb3JtIGZyb20gJy4uL2Zvcm0nO1xuaW1wb3J0IFRhYmxlIGZyb20gJy4uL3RhYmxlJztcbmltcG9ydCB7Q2F0ZWdvcmllcywgRXhwZW5zZXN9IGZyb20gJy4uL2RhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhdGEgKCkgeyByZXR1cm4ge307IH0sXG5cdGNvbXBvbmVudHM6IHsgRm9ybSwgVGFibGUsIFllYXJNb250aFBpY2tlciB9LFxuXHRvbmNyZWF0ZSAoKSB7XG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zdWJzdHIoMCwgNyk7XG5cdFx0Q2F0ZWdvcmllcy5nZXQoKS50aGVuKGNhdGVnb3JpZXMgPT4gdGhpcy5yZWZzLmZvcm0uc2V0KHsgZGF0ZSwgY2F0ZWdvcmllcyB9KSk7XG5cdFx0dGhpcy5sb2FkVGFibGUoZGF0ZSk7XG5cblx0XHR0aGlzLnJlZnMuZm9ybS5vbignY2hhbmdlJywgdGhpcy5vbkZvcm1DaGFuZ2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5yZWZzLmZvcm0ub24oJ3JlbW92ZScsIHRoaXMub25SZW1vdmVJdGVtLmJpbmQodGhpcykpO1xuXHRcdHRoaXMucmVmcy5mb3JtLm9uKCdzdWJtaXQnLCB0aGlzLm9uRm9ybVN1Ym1pdC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnJlZnMuZm9ybS5vbignZXJyb3InLCB0aGlzLm9uRm9ybUVycm9yLmJpbmQodGhpcykpO1xuXHRcdHRoaXMucmVmcy5waWNrZXIub24oJ2NoYW5nZScsIHRoaXMub25EYXRlQ2hhbmdlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMucmVmcy50YWJsZS5vbignY2xpY2snLCB0aGlzLm9uVGFibGVDbGljay5iaW5kKHRoaXMpKTtcblx0fSxcblxuXHRtZXRob2RzOiB7XG5cdFx0bG9hZFRhYmxlIChkYXRlKSB7XG5cdFx0XHRpZiAoIWRhdGUpIGRhdGUgPSB0aGlzLmxhc3REYXRlO1xuXHRcdFx0ZWxzZSB0aGlzLmxhc3REYXRlID0gZGF0ZTtcblx0XHRcdEV4cGVuc2VzLmdldChkYXRlKS50aGVuKGRhdGEgPT4ge1xuXHRcdFx0XHR0aGlzLmxhc3RUYWJsZURhdGEgPSBkYXRhO1xuXHRcdFx0XHR0aGlzLnJlZnMudGFibGUuc2V0KHsgZGF0YSB9KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHRvbkRhdGVDaGFuZ2UgKGRhdGUpIHtcblx0XHRcdHRoaXMucmVmcy5mb3JtLnNldCh7IGRhdGU6IGRhdGUuZGF0ZVN0ciB9KTtcblx0XHRcdHRoaXMubG9hZFRhYmxlKGRhdGUuZGF0ZVN0cik7XG5cdFx0fSxcblxuXHRcdG9uRm9ybUNoYW5nZSAoZGF0YSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ2Zvcm0gY2hhbmdlZCcsIGRhdGEpO1xuXHRcdH0sXG5cblx0XHRvbkZvcm1TdWJtaXQgKGRhdGEpIHtcblx0XHRcdEV4cGVuc2VzLnNhdmUoZGF0YSkudGhlbigoKSA9PiB7XG5cdFx0XHRcdHRoaXMubG9hZFRhYmxlKCk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0b25SZW1vdmVJdGVtIChpdGVtKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhpdGVtKTtcblx0XHR9LFxuXG5cdFx0b25Gb3JtRXJyb3IgKGVycikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyKTtcdC8vIFRPRE86IHRvYXN0P1xuXHRcdH0sXG5cblx0XHRvblRhYmxlQ2xpY2sgKGl0ZW0pIHsgdGhpcy5yZWZzLmZvcm0uZWRpdChpdGVtKTsgfSxcblx0fVxufTtcblxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvYXBwL2luZGV4Lmh0bWwiLCI8ZGl2IGNsYXNzPVwieWVhci1tb250aC1waWNrZXIge3tpc1RvZGF5ID8gJ2lzLXRvZGF5JzogJyd9fVwiIG9uOndoZWVsPVwib253aGVlbChldmVudClcIj5cblx0PGJ1dHRvbiByZWY6bGVmdEJ1dHRvbiBjbGFzcz1cImJ0bi1wcmV2XCIgdGl0bGU9XCJQcmV2aW91cyBtb250aFwiXG5cdFx0b246a2V5ZG93bj1cImtleWRvd24oZXZlbnQua2V5LCAtMSlcIlxuXHRcdG9uOmtleXVwPVwia2V5dXAoZXZlbnQua2V5KVwiXG5cdFx0b246bW91c2Vkb3duPVwidGljaygtMSlcIlxuXHRcdG9uOm1vdXNlb3V0PVwibXVwKClcIlxuXHRcdG9uOm1vdXNldXA9XCJtdXAoKVwiPjxpIGNsYXNzPVwiaW9uLWlvcy1hcnJvdy1iYWNrXCI+PC9pPjwvYnV0dG9uPlxuXG5cdDxzcGFuIGNsYXNzPVwiZGF5XCI+e3ttb250aHNbbW9udGhdfX0ge3t5ZWFyfX08L3NwYW4+XG5cblx0PGJ1dHRvbiByZWY6cmlnaHRCdXR0b24gY2xhc3M9XCJidG4tbmV4dFwiIHRpdGxlPVwiTmV4dCBtb250aFwiXG5cdFx0b246a2V5ZG93bj1cImtleWRvd24oZXZlbnQua2V5LCAxKVwiXG5cdFx0b246a2V5dXA9XCJrZXl1cChldmVudC5rZXkpXCJcblx0XHRvbjptb3VzZWRvd249XCJ0aWNrKDEpXCJcblx0XHRvbjptb3VzZW91dD1cIm11cCgpXCJcblx0XHRvbjptb3VzZXVwPVwibXVwKClcIj48aSBjbGFzcz1cImlvbi1pb3MtYXJyb3ctZm9yd2FyZFwiPjwvaT48L2J1dHRvbj5cblxuXHQ8YnV0dG9uIHRpdGxlPVwiVG9kYXlcIiBjbGFzcz1cImJ0bi10b2RheVwiIG9uOmNsaWNrPVwicmVzZXQoKVwiPjxpIGNsYXNzPVwiaW9uLW1kLXVuZG9cIj48L2k+PC9idXR0b24+XG48L2Rpdj5cblxuPHNjcmlwdD5cbmZ1bmN0aW9uIHplcm9TdGF0ZSAoKSB7XG5cdGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuXHRjb25zdCBtb250aCA9IGQuZ2V0TW9udGgoKTtcblx0Y29uc3QgeWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcblx0Y29uc3QgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXHRyZXR1cm4geyBtb250aHMsIG1vbnRoLCB5ZWFyLCBjdXJyZW50OiB7IG1vbnRoLCB5ZWFyIH0gfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhICgpIHsgcmV0dXJuIHplcm9TdGF0ZSgpOyB9LFxuXHRjb21wdXRlZDoge1xuXHRcdGlzVG9kYXk6IChtb250aCwgeWVhciwgY3VycmVudCkgPT4gKG1vbnRoID09PSBjdXJyZW50Lm1vbnRoICYmIHllYXIgPT09IGN1cnJlbnQueWVhciksXG5cdFx0ZGF0ZVN0cjogKG1vbnRoLCB5ZWFyKSA9PiBgJHt5ZWFyfS0keygnMCcgKyAobW9udGggKyAxKSkuc3Vic3RyKC0yKX1gXG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRvbndoZWVsIChlKSB7XG5cdFx0XHRjb25zdCB0aHJlc2hvbGQgPSAyO1xuXHRcdFx0bGV0IHZhbCA9IG51bGw7XG5cdFx0XHRpZiAoZS5kZWx0YVkgPCAtdGhyZXNob2xkKSB2YWwgPSAtMTtcblx0XHRcdGVsc2UgaWYgKGUuZGVsdGFZID4gdGhyZXNob2xkKSB2YWwgPSAxO1xuXHRcdFx0aWYgKHZhbCkgdGhpcy53aGVlbFRocm90dGxlKHZhbCwgZmFsc2UpO1xuXHRcdH0sXG5cblx0XHR3aGVlbFRocm90dGxlICh2YWx1ZSkge1xuXHRcdFx0aWYgKCF0aGlzLnRocm90dGxlcikge1xuXHRcdFx0XHR0aGlzLmdvKHZhbHVlKTtcblx0XHRcdFx0dGhpcy5ub3RpZnkoKTtcblx0XHRcdFx0dGhpcy50aHJvdHRsZXIgPSBzZXRUaW1lb3V0KCgpID0+ICh0aGlzLnRocm90dGxlciA9IG51bGwpLCAxMDApO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRrZXl1cCAoa2V5KSB7XG5cdFx0XHR0aGlzLmtleUlzRG93biA9IGZhbHNlO1xuXHRcdFx0aWYgKHRoaXMudGlja2VyKSBjbGVhclRpbWVvdXQodGhpcy50aWNrZXIpO1xuXHRcdFx0aWYgKGtleSA9PT0gJyAnIHx8IGtleSA9PT0gJ0VudGVyJyB8fFxuXHRcdFx0XHRrZXkgPT09ICdBcnJvd0xlZnQnIHx8IGtleSA9PT0gJ0Fycm93UmlnaHQnIHx8XG5cdFx0XHRcdGtleSA9PT0gJ0Fycm93RG93bicgfHwga2V5ID09PSAnQXJyb3dVcCcpIHRoaXMubm90aWZ5KCk7XG5cdFx0fSxcblxuXHRcdGtleWRvd24gKGtleSwgdmFsdWUpIHtcblx0XHRcdGlmICh0aGlzLmtleUlzRG93bikgcmV0dXJuO1xuXHRcdFx0aWYgKGtleSA9PT0gJ0Fycm93TGVmdCcgfHwga2V5ID09PSAnQXJyb3dEb3duJykge1xuXHRcdFx0XHR0aGlzLnJlZnMubGVmdEJ1dHRvbi5mb2N1cygpO1xuXHRcdFx0XHR0aGlzLmtleUlzRG93biA9IHRydWU7XG5cdFx0XHRcdHJldHVybiB0aGlzLnRpY2soLTEpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGtleSA9PT0gJ0Fycm93UmlnaHQnIHx8IGtleSA9PT0gJ0Fycm93VXAnKSB7XG5cdFx0XHRcdHRoaXMucmVmcy5yaWdodEJ1dHRvbi5mb2N1cygpO1xuXHRcdFx0XHR0aGlzLmtleUlzRG93biA9IHRydWU7XG5cdFx0XHRcdHJldHVybiB0aGlzLnRpY2soMSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoa2V5ID09PSAnICcgfHwga2V5ID09PSAnRW50ZXInKSB7XG5cdFx0XHRcdHRoaXMua2V5SXNEb3duID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy50aWNrKHZhbHVlKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0bXVwICgpIHtcblx0XHRcdGlmICh0aGlzLnRpY2tlcikgY2xlYXJUaW1lb3V0KHRoaXMudGlja2VyKTtcblx0XHRcdGlmICh0aGlzLm1vdXNlSXNEb3duKSB0aGlzLm5vdGlmeSgpO1xuXHRcdFx0dGhpcy5tb3VzZUlzRG93biA9IGZhbHNlO1xuXHRcdH0sXG5cblx0XHR0aWNrICh2YWx1ZSwgZGVsYXkgPSAzMDApIHtcblx0XHRcdGlmICh0aGlzLnRpY2tlcikgY2xlYXJUaW1lb3V0KHRoaXMudGlja2VyKTtcblx0XHRcdHRoaXMuZ28odmFsdWUpO1xuXHRcdFx0aWYgKHRoaXMuZ2V0KCdpc1RvZGF5JykpIHJldHVybiB0aGlzLm5vdGlmeSgpO1xuXHRcdFx0dGhpcy5tb3VzZUlzRG93biA9IHRydWU7XG5cdFx0XHR0aGlzLnRpY2tlciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRkZWxheSA9IE1hdGgubWF4KDYwLCBkZWxheSAtIDQwKTtcblx0XHRcdFx0dGhpcy50aWNrKHZhbHVlLCBkZWxheSk7XG5cdFx0XHR9LCBkZWxheSk7XG5cdFx0fSxcblxuXHRcdGdvICh2YWx1ZSkge1xuXHRcdFx0bGV0IHttb250aCwgeWVhcn0gPSB0aGlzLmdldCgpO1xuXHRcdFx0bW9udGggKz0gdmFsdWU7XG5cdFx0XHRpZiAobW9udGggPCAwKSB7IG1vbnRoID0gMTE7IHllYXIgLT0gMTsgfVxuXHRcdFx0ZWxzZSBpZiAobW9udGggPiAxMSkgeyBtb250aCA9IDA7IHllYXIgKz0gMTsgfVxuXHRcdFx0dGhpcy5zZXQoeyBtb250aCwgeWVhciB9KTtcblx0XHR9LFxuXG5cdFx0bm90aWZ5ICgpIHtcblx0XHRcdGNvbnN0IHttb250aCwgeWVhciwgZGF0ZVN0cn0gPSB0aGlzLmdldCgpO1xuXHRcdFx0dGhpcy5maXJlKCdjaGFuZ2UnLCB7IG1vbnRoLCB5ZWFyLCBkYXRlU3RyIH0pO1xuXHRcdH0sXG5cblx0XHRyZXNldCAoKSB7XG5cdFx0XHR0aGlzLnNldCh6ZXJvU3RhdGUoKSk7XG5cdFx0XHR0aGlzLm5vdGlmeSgpO1xuXHRcdH1cblx0fVxufTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3llYXItbW9udGgtcGlja2VyL2luZGV4Lmh0bWwiLCI8Zm9ybSByZWY6Zm9ybSBjbGFzcz1cImZvcm0ge3tpbkVkaXQgPyAnZWRpdCcgOiAnJ319XCIgb246c3VibWl0PVwib25zdWJtaXQoZXZlbnQpXCIgb246aW5wdXQ9XCJvbmlucHV0KGV2ZW50KVwiPlxuXHQ8ZGl2IGNsYXNzPVwic3ViZm9ybXNcIj5cblx0XHR7eyNlYWNoIHJvd3MgYXMgcm93LCBpZHh9fVxuXHRcdDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuXHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBiaW5kOnZhbHVlPXJvdy5pZD5cblx0XHRcdDxkaXYgY2xhc3M9XCJzZWxlY3Qtd3JhcFwiPlxuXHRcdFx0XHQ8c2VsZWN0IGNsYXNzPVwic2VsZWN0IGNhdGVnb3J5XCIgYmluZDp2YWx1ZT1yb3cuZ3JvdXBfaWQgYXV0b2ZvY3VzPVwiYXV0b2ZvY3VzXCI+XG5cdFx0XHRcdFx0e3sjZWFjaCBjYXRlZ29yaWVzIGFzIGNhdH19XG5cdFx0XHRcdFx0PG9wdGdyb3VwIGxhYmVsPVwie3tjYXQubmFtZX19XCI+XG5cdFx0XHRcdFx0XHR7eyNpZiBjYXQuZ3JvdXBzfX1cblx0XHRcdFx0XHRcdHt7I2VhY2ggY2F0Lmdyb3VwcyBhcyBncm91cH19XG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwie3tncm91cC5pZH19XCI+e3tncm91cC5uYW1lfX08L29wdGlvbj5cblx0XHRcdFx0XHRcdHt7L2VhY2h9fVxuXHRcdFx0XHRcdFx0e3svaWZ9fVxuXHRcdFx0XHRcdDwvb3B0Z3JvdXA+XG5cdFx0XHRcdFx0e3svZWFjaH19XG5cdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8aW5wdXQgY2xhc3M9XCJkZXNjcmlwdGlvblwiIHBsYWNlaG9sZGVyPVwiZGVzY3JpcHRpb25cIiBiaW5kOnZhbHVlPVwicm93LmRlc2NyaXB0aW9uXCI+XG5cdFx0XHQ8aW5wdXQgY2xhc3M9XCJhbW91bnRcIiBwbGFjZWhvbGRlcj1cIjAuMDBcIiBiaW5kOnZhbHVlPXJvdy5hbW91bnQgb246a2V5ZG93bj1cIm9ua2V5ZG93bihldmVudClcIj5cblxuXHRcdFx0e3sjaWYgaWR4ID09PSAwfX1cblx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiU3BsaXRcIiBjbGFzcz1cImJ0biBidG4tc3BsaXQgaW9uLW1kLXN3YXBcIiBvbjpjbGljaz1cInNwbGl0KClcIj48L2J1dHRvbj5cblx0XHRcdHt7ZWxzZX19XG5cdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cIlJlbW92ZVwiIGNsYXNzPVwiYnRuIGJ0bi11bnNwbGl0IGlvbi1tZC1jbG9zZVwiIG9uOmNsaWNrPVwidW5zcGxpdChpZHgpXCI+PC9idXR0b24+XG5cdFx0XHR7ey9pZn19XG5cdFx0PC9kaXY+XG5cdFx0e3svZWFjaH19XG5cdDwvZGl2PlxuXHQ8ZGl2IGNsYXNzPVwiZm9ybS1yb3cgZm9ybS1yb3ctcmVwZWF0XCI+XG5cdFx0PGxhYmVsPlJlcGVhdCBldmVyeSBtb250aCwgZm9yIDwvbGFiZWw+XG5cdFx0PGlucHV0IGNsYXNzPVwicmVwZWF0ZXJcIiBtaW49XCIxXCIgbWF4PVwiMTJcIiB0eXBlPVwibnVtYmVyXCIgYmluZDp2YWx1ZT1yZXBlYXQ+XG5cdFx0PGxhYmVsPiBtb250aHM8L2xhYmVsPlxuXHQ8L2Rpdj5cblx0PGRpdiBjbGFzcz1cImZvcm0tZm9vdGVyIGZvcm0tcm93XCI+XG5cdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXJlc2V0XCIgb246Y2xpY2s9XCJyZXNldCgpXCI+UmVzZXQ8L2J1dHRvbj5cblx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBkYW5nZXIgYnRuLXJlbW92ZVwiIG9uOmNsaWNrPVwicmVtb3ZlKClcIj5SZW1vdmU8L2J1dHRvbj5cblx0XHQ8ZGl2IGNsYXNzPVwiZmxleC1maWxsZXJcIj48L2Rpdj5cblx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tY2FuY2VsXCIgb246Y2xpY2s9XCJyZXNldCgpXCI+Q2FuY2VsPC9idXR0b24+XG5cdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gc3VjY2VzcyBidG4tc2F2ZVwiPlNhdmU8L2J1dHRvbj5cblx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBzdWNjZXNzIGJ0bi1hZGRcIj5BZGQ8L2J1dHRvbj5cblx0PC9kaXY+XG48L2Zvcm0+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgdXRpbCBmcm9tICcuL3V0aWwuanMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhdGEgKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRpbkVkaXQ6IGZhbHNlLFxuXHRcdFx0ZGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnN1YnN0cigwLCA3KSxcblx0XHRcdHJlcGVhdDogMSxcblx0XHRcdHJvd3M6IFsge2lkOiAnJywgZGVzY3JpcHRpb246ICcnLCBhbW91bnQ6ICcnfSBdLFxuXHRcdFx0Y2F0ZWdvcmllczogW10sXG5cdFx0fTtcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGdldERhdGEgKCkge1xuXHRcdFx0Y29uc3QgZGF0ZSA9IHRoaXMuZ2V0KCdkYXRlJykgfHwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnN1YnN0cigwLCA3KTtcblx0XHRcdGNvbnN0IGVudHJpZXMgPSB1dGlsLmRlZXBDb3B5QXJyYXkodGhpcy5nZXQoJ3Jvd3MnKSlcblx0XHRcdFx0Lm1hcChlID0+IHtcblx0XHRcdFx0XHRlLmRhdGUgPSBkYXRlO1xuXHRcdFx0XHRcdGUuYW1vdW50ID0gdXRpbC5wYXJzZUFtb3VudChlLmFtb3VudCk7XG5cdFx0XHRcdFx0cmV0dXJuIGU7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHQvLyBzdWJ0cmFjdCBvdGhlciBhbW91bnRzIGZyb20gdGhlIGZpcnN0IHJvd1xuXHRcdFx0Y29uc3QgYW1vdW50cyA9IGVudHJpZXMubWFwKChpdGVtLCBpKSA9PiBpID4gMCA/IGl0ZW0uYW1vdW50IDogMCk7XG5cdFx0XHRjb25zdCBzdW0gPSBhbW91bnRzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1x0Ly8gYWRkIGFsbCB1cFxuXHRcdFx0ZW50cmllc1swXS5hbW91bnQgLT0gc3VtO1xuXG5cdFx0XHQvLyByZXBlYXQgbW9udGhseVxuXHRcdFx0Y29uc3QgcmVwZWF0ZXIgPSB0aGlzLmdldCgncmVwZWF0Jyk7XG5cdFx0XHRyZXR1cm4gdXRpbC5yZXBlYXRFbnRyaWVzKGVudHJpZXMsIHJlcGVhdGVyKTtcblx0XHR9LFxuXG5cdFx0c3BsaXQgKCkge1xuXHRcdFx0Y29uc3Qgcm93cyA9IHRoaXMuZ2V0KCdyb3dzJyk7XG5cdFx0XHRyb3dzLnB1c2goe2lkOiAnJywgZGVzY3JpcHRpb246IHJvd3NbMF0uZGVzY3JpcHRpb24sIGFtb3VudDogJyd9KTtcblx0XHRcdHRoaXMuc2V0KHsgcm93cyB9KTtcblx0XHR9LFxuXG5cdFx0dW5zcGxpdCAoaWR4KSB7XG5cdFx0XHRjb25zdCByb3dzID0gdGhpcy5nZXQoJ3Jvd3MnKTtcblx0XHRcdHJvd3Muc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHR0aGlzLnNldCh7IHJvd3MgfSk7XG5cdFx0fSxcblxuXHRcdGVkaXQgKGRhdGEpIHtcblx0XHRcdHRoaXMucmVzZXQoKTtcblx0XHRcdHRoaXMuc2V0KHsgaW5FZGl0OiB0cnVlLCByb3dzOiBbZGF0YV0gfSk7XG5cdFx0XHR0aGlzLmZpcmUoJ2NoYW5nZScsIHRoaXMuZ2V0RGF0YSgpKTtcblx0XHR9LFxuXG5cdFx0cmVzZXQgKCkge1xuXHRcdFx0dGhpcy5zZXQoe1xuXHRcdFx0XHRpbkVkaXQ6IGZhbHNlLFxuXHRcdFx0XHRyZXBlYXQ6IDEsXG5cdFx0XHRcdHJvd3M6IFsge2lkOiAnJywgZGVzY3JpcHRpb246ICcnLCBhbW91bnQ6ICcnIH0gXVxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLnRvZ2dsZUFtb3VudEVycm9yKCk7XG5cdFx0XHR0aGlzLmZpcmUoJ2NoYW5nZScsIHRoaXMuZ2V0RGF0YSgpKTtcblx0XHR9LFxuXG5cdFx0b25pbnB1dCAoKSB7XG5cdFx0XHR0aGlzLnRvZ2dsZUFtb3VudEVycm9yKCk7XG5cdFx0XHR0aGlzLmZpcmUoJ2NoYW5nZScsIHRoaXMuZ2V0RGF0YSgpKTtcblx0XHR9LFxuXG5cdFx0cmVtb3ZlICgpIHtcblx0XHRcdHRoaXMuZmlyZSgncmVtb3ZlJywgeyBpZDogdGhpcy5nZXQoJ3Jvd3MnKVswXS5pZCB9KTtcblx0XHRcdHRoaXMucmVzZXQoKTtcblx0XHR9LFxuXG5cdFx0b25zdWJtaXQgKGUpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGNvbnN0IGRhdGEgPSB0aGlzLmdldERhdGEoKTtcblx0XHRcdGlmICghZGF0YVswXS5hbW91bnQpIHtcblx0XHRcdFx0dGhpcy50b2dnbGVBbW91bnRFcnJvcignUGxlYXNlIGVudGVyIGFtb3VudCcpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5maXJlKCdlcnJvcicsICdQbGVhc2UgZW50ZXIgYW1vdW50Jyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmZpcmUoJ3N1Ym1pdCcsIGRhdGEpO1xuXHRcdFx0dGhpcy5yZXNldCgpO1xuXHRcdH0sXG5cblx0XHRvbmtleWRvd24gKGUpIHtcblx0XHRcdGlmICh1dGlsLmlzQWxsb3dlZEtleShlKSkgcmV0dXJuIHRydWU7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fSxcblxuXHRcdHRvZ2dsZUFtb3VudEVycm9yIChlcnIpIHtcblx0XHRcdHRoaXMucmVmcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJy5hbW91bnQnKS5zZXRDdXN0b21WYWxpZGl0eShlcnIgfHwgJycpO1xuXHRcdH1cblx0fVxufTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2Zvcm0vaW5kZXguaHRtbCIsIlxuZnVuY3Rpb24gcGFyc2VBbW91bnQgKGFtb3VudCkge1xuXHQvKiBlc2xpbnQgbm8tZXZhbDogMCAqL1xuXHRhbW91bnQgPSAoJycgKyBhbW91bnQpLnJlcGxhY2UoL1xccy9nLCAnJyk7XG5cdGlmICghKC9eWytcXC1cXFxcKi8oKVxcZC5dKyQvaSkudGVzdChhbW91bnQpKSByZXR1cm4gMDtcblx0aWYgKCgvWytcXC1cXFxcKi8uXSsvaSkudGVzdChhbW91bnQpKSB7XG5cdFx0dHJ5IHsgYW1vdW50ID0gZXZhbChhbW91bnQpOyB9XG5cdFx0Y2F0Y2ggKGUpIHsgYW1vdW50ID0gMDsgfVxuXHR9XG5cdGxldCBudW0gPSBwYXJzZUZsb2F0KGFtb3VudCk7XG5cdGlmIChudW0gPT09IEluZmluaXR5IHx8IGlzTmFOKG51bSkgfHwgbnVtIDwgMCkgbnVtID0gJ2Vycm9yJztcblx0cmV0dXJuIG51bTtcbn1cblxuLy8geXl5eS1tbVxuZnVuY3Rpb24gZ2V0U3RyRGF0ZSAoeSwgbSkge1xuXHRyZXR1cm4gYCR7eX0tJHsoJzAnICsgbSkuc3Vic3RyKC0yKX1gO1xufVxuXG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZVN0ciAoZGF0ZVN0cikge1xuXHRsZXQgW3llYXIsIG1vbnRoXSA9IGRhdGVTdHIuc3BsaXQoJy0nKTtcblx0eWVhciA9IHBhcnNlSW50KHllYXIsIDEwKTtcblx0bW9udGggPSBwYXJzZUludChtb250aCwgMTApO1xuXHRjb25zdCBzdHIgPSBnZXRTdHJEYXRlKHllYXIsIG1vbnRoKTtcblx0cmV0dXJuIHsgeWVhciwgbW9udGgsIHN0ciB9O1xufVxuXG5cbmZ1bmN0aW9uIGRlZXBDb3B5QXJyYXkgKGFycikge1xuXHRyZXR1cm4gYXJyLm1hcChvID0+IE9iamVjdC5hc3NpZ24oe30sIG8pKTtcbn1cblxuXG5mdW5jdGlvbiBhZGRNb250aHNUb0RhdGUgKGRhdGUsIG1vbnRoRGlmZikge1xuXHRjb25zdCBkYXRlT2JqID0gcGFyc2VEYXRlU3RyKGRhdGUpO1xuXHRsZXQgeWVhciA9IGRhdGVPYmoueWVhcjtcblx0bGV0IG1vbnRoID0gZGF0ZU9iai5tb250aCArIG1vbnRoRGlmZjtcblx0aWYgKG1vbnRoID49IDEzKSB7XG5cdFx0eWVhciA9IHllYXIgKyBNYXRoLmZsb29yKG1vbnRoIC8gMTIpO1xuXHRcdG1vbnRoID0gKG1vbnRoICUgMTIpICsgMTtcblx0fVxuXHRyZXR1cm4gZ2V0U3RyRGF0ZSh5ZWFyLCBtb250aCk7XG59XG5cblxuZnVuY3Rpb24gY2xvbmVFbnRyaWVzIChlbnRyaWVzLCBtb250aERpZmYpIHtcblx0cmV0dXJuIGRlZXBDb3B5QXJyYXkoZW50cmllcykubWFwKGl0ZW0gPT4ge1xuXHRcdGl0ZW0uZGF0ZSA9IGFkZE1vbnRoc1RvRGF0ZShpdGVtLmRhdGUsIG1vbnRoRGlmZik7XG5cdFx0cmV0dXJuIGl0ZW07XG5cdH0pO1xufVxuXG5cbmZ1bmN0aW9uIHJlcGVhdEVudHJpZXMgKGVudHJpZXMsIHJlcGVhdGVyKSB7XG5cdGlmICghcmVwZWF0ZXIgfHwgcmVwZWF0ZXIgPT09IDEpIHJldHVybiBlbnRyaWVzO1xuXG5cdGNvbnN0IG9yaWdpbmFsRW50cmllcyA9IGRlZXBDb3B5QXJyYXkoZW50cmllcyk7XG5cdGZvciAobGV0IGkgPSAxOyBpIDwgcmVwZWF0ZXI7IGkrKykge1xuXHRcdGNvbnN0IG5ld1Jvd3MgPSBjbG9uZUVudHJpZXMob3JpZ2luYWxFbnRyaWVzLCBpKTtcblx0XHRlbnRyaWVzID0gZW50cmllcy5jb25jYXQobmV3Um93cyk7XG5cdH1cblx0cmV0dXJuIGVudHJpZXM7XG59XG5cblxuZnVuY3Rpb24gaXNBbGxvd2VkS2V5IChlKSB7XG5cdGNvbnN0IGFsbG93ZWRSZWcgPSAvXlsoKVxcZC8qKy1dezF9JC87XG5cdGNvbnN0IGFsbG93ZWRLZXlzID0gWydFbnRlcicsICdUYWInLCAnQmFja3NwYWNlJywgJ0RlbGV0ZScsICdBcnJvd0xlZnQnLCAnQXJyb3dSaWdodCcsICcuJ107XG5cblx0aWYgKGFsbG93ZWRLZXlzLmluZGV4T2YoZS5rZXkpID4gLTEpIHJldHVybiB0cnVlO1xuXHRpZiAoZS5tZXRhS2V5IHx8IGUuY3RybEtleSkgcmV0dXJuIHRydWU7XG5cdGlmIChlLmtleS5sZW5ndGggPCAzICYmIGFsbG93ZWRSZWcudGVzdChlLmtleSkpIHJldHVybiB0cnVlO1xuXHRyZXR1cm4gZmFsc2U7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRwYXJzZURhdGVTdHIsXG5cdHBhcnNlQW1vdW50LFxuXHRyZXBlYXRFbnRyaWVzLFxuXHRkZWVwQ29weUFycmF5LFxuXHRpc0FsbG93ZWRLZXksXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2Zvcm0vdXRpbC5qcyIsIjxkaXYgY2xhc3M9XCJ0YWJsZVwiIHJlZjp0YWJsZT5cblx0e3sjaWYgZGF0YSAmJiBkYXRhLmxlbmd0aCB9fVxuXHRcdDx0YWJsZT5cblx0XHQ8dGhlYWQ+PHRyPlxuXHRcdFx0PHRkIGNsYXNzPVwiZGF0ZVwiPkRhdGU8L3RkPlxuXHRcdFx0PHRkIGNsYXNzPVwiZGVzY1wiPkRlc2NyaXB0aW9uPC90ZD5cblx0XHRcdDx0ZCBjbGFzcz1cImFtb3VudFwiPkFtb3VudDwvdGQ+XG5cdFx0PC90cj48L3RoZWFkPlxuXHRcdDx0Ym9keT5cblx0XHRcdHt7I2VhY2ggZGF0YSBhcyBpdGVtLCBpZHh9fVxuXHRcdFx0XHQ8dHIgb246Y2xpY2s9XCJvblJvd0NsaWNrKGl0ZW0pXCI+XG5cdFx0XHRcdFx0PHRkPnt7aXRlbS5kYXRlLnN1YnN0cigwLCA3KX19PC90ZD5cblx0XHRcdFx0XHQ8dGQgY2xhc3M9XCJkZXNjXCI+e3tpdGVtLmdyb3VwLm5hbWV9fSAtIHt7aXRlbS5kZXNjcmlwdGlvbn19PC90ZD5cblx0XHRcdFx0XHQ8dGQgY2xhc3M9XCJhbW91bnRcIj57e2Zvcm1hdChpdGVtLmFtb3VudCl9fTwvdGQ+XG5cdFx0XHRcdDwvdHI+XG5cdFx0XHR7ey9lYWNofX1cblx0XHQ8L3Rib2R5PlxuXHRcdDx0Zm9vdD48dHI+XG5cdFx0XHQ8dGQgY29sc3Bhbj1cIjJcIj5cblx0XHRcdFx0PCEtLSA8aSBjbGFzcz1cImlvbi1tZC1zZWFyY2hcIj48L2k+IC0tPlxuXHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJ0YWJsZS1maWx0ZXJcIiB0eXBlPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJGaWx0ZXJcIj5cblx0XHRcdDwvdGQ+XG5cdFx0XHQ8dGQgY2xhc3M9XCJhbW91bnRcIj57e2Zvcm1hdCh0b3RhbCl9fTwvdGQ+XG5cdFx0PC90cj48L3Rmb290PlxuXHRcdDwvdGFibGU+XG5cdHt7L2lmfX1cbjwvZGl2PlxuXG5cbjxzY3JpcHQ+XG5cbmZ1bmN0aW9uIGZvcm1hdE51bWJlciAobnVtKSB7XG5cdG51bSA9IE1hdGgucm91bmQoMCArIG51bSAqIDEwMCkgLyAxMDA7XG5cdHJldHVybiBudW0udG9Mb2NhbGVTdHJpbmcoJ2VuLUdCJywgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhICgpIHtcblx0XHRyZXR1cm4geyBkYXRhOiBbXSB9O1xuXHR9LFxuXHRjb21wdXRlZDoge1xuXHRcdHRvdGFsIChkYXRhKSB7IHJldHVybiBkYXRhLnJlZHVjZSgocCwgYykgPT4gcCArIGMuYW1vdW50LCAwKTsgfSxcblx0XHRmb3JtYXQgKGRhdGEpIHsgcmV0dXJuIGZvcm1hdE51bWJlcjsgfVxuXHR9LFxuXHRvbmNyZWF0ZSAoKSB7XG5cdH0sXG5cblx0bWV0aG9kczoge1xuXHRcdG9uUm93Q2xpY2sgKGl0ZW0pIHtcblx0XHRcdHRoaXMuZmlyZSgnY2xpY2snLCBpdGVtKTtcblx0XHR9XG5cdH1cbn07XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC90YWJsZS9pbmRleC5odG1sIiwiZnVuY3Rpb24gcmVxICh1cmwsIG1ldGhvZCA9ICdHRVQnLCBwYXJhbXMpIHtcblx0Y29uc3Qgb3B0cyA9IHtcblx0XHRtZXRob2Q6IG1ldGhvZCxcblx0XHRoZWFkZXJzOiB7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcblx0XHRjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuXHR9O1xuXHRpZiAocGFyYW1zKSBvcHRzLmJvZHkgPSBKU09OLnN0cmluZ2lmeShwYXJhbXMpO1xuXHRyZXR1cm4gZmV0Y2goYGFwaS8ke3VybH1gLCBvcHRzKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcbn1cblxuY29uc3QgZ2V0ID0gdXJsID0+IHJlcSh1cmwpO1xuY29uc3QgcG9zdCA9ICh1cmwsIHBhcmFtcykgPT4gcmVxKHVybCwgJ1BPU1QnLCBwYXJhbXMpO1xuY29uc3QgcHV0ID0gKHVybCwgcGFyYW1zKSA9PiByZXEodXJsLCAnUFVUJywgcGFyYW1zKTtcbi8vIGNvbnN0IGRlbCA9ICh1cmwsIHBhcmFtcykgPT4gcmVxKHVybCwgJ0RFTEVURScsIHBhcmFtcyk7XG5cblxuY29uc3QgQ2F0ZWdvcmllcyA9IHtcblx0Z2V0OiAoKSA9PiBnZXQoJ2NhdGVnb3JpZXMnKSxcbn07XG5cbmNvbnN0IEV4cGVuc2VzID0ge1xuXHRnZXQ6IChkYXRlID0gJycpID0+IGdldChgZW50cmllcz9kYXRlPSR7ZGF0ZX1gKSxcblx0c2F2ZTogZGF0YSA9PiB7XG5cdFx0aWYgKGRhdGEubGVuZ3RoID09PSAxICYmIGRhdGFbMF0uaWQpIHJldHVybiBwdXQoJ2VudHJpZXMnLCBkYXRhKTtcblx0XHRyZXR1cm4gcG9zdCgnZW50cmllcycsIGRhdGEpO1xuXHR9XG59O1xuXG5cbmV4cG9ydCB7XG5cdENhdGVnb3JpZXMsXG5cdEV4cGVuc2VzLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9kYXRhL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==