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
/* unused harmony export fire */
/* unused harmony export get */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return init; });
/* unused harmony export on */
/* unused harmony export run */
/* unused harmony export set */
/* unused harmony export _set */
/* unused harmony export setDev */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return callAll; });
/* unused harmony export _mount */
/* unused harmony export PENDING */
/* unused harmony export SUCCESS */
/* unused harmony export FAILURE */
/* unused harmony export removeFromStore */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return proto; });
/* unused harmony export protoDev */
/* unused harmony export handlePromise */
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
/* unused harmony export createComment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return removeListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return setAttribute; });
/* unused harmony export setAttributes */
/* unused harmony export removeAttribute */
/* unused harmony export setXlinkAttribute */
/* unused harmony export getBindingGroupValue */
/* unused harmony export toNumber */
/* unused harmony export timeRangesToArray */
/* unused harmony export children */
/* unused harmony export claimElement */
/* unused harmony export claimText */
/* unused harmony export setInputType */
/* unused harmony export setStyle */
/* unused harmony export selectOption */
/* unused harmony export selectOptions */
/* unused harmony export selectValue */
/* unused harmony export selectMultipleValue */
/* unused harmony export addResizeListener */
/* unused harmony export destroyBlock */
/* unused harmony export outroAndDestroyBlock */
/* unused harmony export updateKeyedEach */
/* unused harmony export getSpreadUpdate */
/* unused harmony export spread */
/* unused harmony export escaped */
/* unused harmony export escape */
/* unused harmony export each */
/* unused harmony export missingComponent */
/* unused harmony export linear */
/* unused harmony export generateRule */
/* unused harmony export hash */
/* unused harmony export wrapTransition */
/* unused harmony export transitionManager */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return assignTrue; });
/* unused harmony export isPromise */
function noop() {}

function assign(tar, src) {
	for (var k in src) tar[k] = src[k];
	return tar;
}

function assignTrue(tar, src) {
	for (var k in src) tar[k] = 1;
	return tar;
}

function isPromise(value) {
	return value && typeof value.then === 'function';
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

function destroyEach(iterations, detach) {
	for (var i = 0; i < iterations.length; i += 1) {
		if (iterations[i]) iterations[i].d(detach);
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

function addResizeListener(element, fn) {
	if (getComputedStyle(element).position === 'static') {
		element.style.position = 'relative';
	}

	const object = document.createElement('object');
	object.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
	object.type = 'text/html';

	let win;

	object.onload = () => {
		win = object.contentDocument.defaultView;
		win.addEventListener('resize', fn);
	};

	if (/Trident/.test(navigator.userAgent)) {
		element.appendChild(object);
		object.data = 'about:blank';
	} else {
		object.data = 'about:blank';
		element.appendChild(object);
	}

	return {
		cancel: () => {
			win.removeEventListener('resize', fn);
			element.removeChild(object);
		}
	};
}

function linear(t) {
	return t;
}

function generateRule({ a, b, delta, duration }, ease, fn) {
	const step = 16.666 / duration;
	let keyframes = '{\n';

	for (let p = 0; p <= 1; p += step) {
		const t = a + delta * ease(p);
		keyframes += p * 100 + `%{${fn(t)}}\n`;
	}

	return keyframes + `100% {${fn(b)}}\n}`;
}

// https://github.com/darkskyapp/string-hash/blob/master/index.js
function hash(str) {
	let hash = 5381;
	let i = str.length;

	while (i--) hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
	return hash >>> 0;
}

function wrapTransition(component, node, fn, params, intro) {
	const obj = fn(node, params);
	const duration = obj.duration || 300;
	const ease = obj.easing || linear;
	let cssText;

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

		run(b, callback) {
			const program = {
				start: window.performance.now() + (obj.delay || 0),
				b,
				callback: callback || noop
			};

			if (!b) {
				program.group = transitionManager.outros;
				transitionManager.outros.remaining += 1;
			}

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

		start(program) {
			component.fire(`${program.b ? 'intro' : 'outro'}.start`, { node });

			program.a = this.t;
			program.delta = program.b - program.a;
			program.duration = duration * Math.abs(program.b - program.a);
			program.end = program.start + program.duration;

			if (obj.css) {
				if (obj.delay) node.style.cssText = cssText;

				const rule = generateRule(program, ease, obj.css);
				transitionManager.addRule(rule, program.name = '__svelte_' + hash(rule));

				node.style.animation = (node.style.animation || '')
					.split(', ')
					.filter(anim => anim && (program.delta < 0 || !/__svelte/.test(anim)))
					.concat(`${program.name} ${program.duration}ms linear 1 forwards`)
					.join(', ');
			}

			this.program = program;
			this.pending = null;
		},

		update(now) {
			const program = this.program;
			if (!program) return;

			const p = now - program.start;
			this.t = program.a + program.delta * ease(p / program.duration);
			if (obj.tick) obj.tick(this.t);
		},

		done() {
			const program = this.program;
			this.t = program.b;

			if (obj.tick) obj.tick(this.t);

			component.fire(`${program.b ? 'intro' : 'outro'}.end`, { node });

			if (!program.b && !program.invalidated) {
				program.group.callbacks.push(() => {
					program.callback();
					if (obj.css) transitionManager.deleteRule(node, program.name);
				});

				if (--program.group.remaining === 0) {
					program.group.callbacks.forEach(fn => {
						fn();
					});
				}
			} else {
				if (obj.css) transitionManager.deleteRule(node, program.name);
			}

			this.running = !!this.pending;
		},

		abort() {
			if (this.program) {
				if (obj.tick) obj.tick(1);
				if (obj.css) transitionManager.deleteRule(node, this.program.name);
				this.program = this.pending = null;
				this.running = false;
			}
		},

		invalidate() {
			if (this.program) {
				this.program.invalidated = true;
			}
		}
	};
}

var transitionManager = {
	running: false,
	transitions: [],
	bound: null,
	stylesheet: null,
	activeRules: {},

	add(transition) {
		this.transitions.push(transition);

		if (!this.running) {
			this.running = true;
			requestAnimationFrame(this.bound || (this.bound = this.next.bind(this)));
		}
	},

	addRule(rule, name) {
		if (!this.stylesheet) {
			const style = createElement('style');
			document.head.appendChild(style);
			transitionManager.stylesheet = style.sheet;
		}

		if (!this.activeRules[name]) {
			this.activeRules[name] = true;
			this.stylesheet.insertRule(`@keyframes ${name} ${rule}`, this.stylesheet.cssRules.length);
		}
	},

	next() {
		this.running = false;

		const now = window.performance.now();
		let i = this.transitions.length;

		while (i--) {
			const transition = this.transitions[i];

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
			let i = this.stylesheet.cssRules.length;
			while (i--) this.stylesheet.deleteRule(i);
			this.activeRules = {};
		}
	},

	deleteRule(node, name) {
		node.style.animation = node.style.animation
			.split(', ')
			.filter(anim => anim && anim.indexOf(name) === -1)
			.join(', ');
	},

	groupOutros() {
		this.outros = {
			remaining: 0,
			callbacks: []
		};
	}
};

function handlePromise(promise, info) {
	var token = info.token = {};

	function update(type, index, key, value) {
		if (info.token !== token) return;

		info.resolved = key && { [key]: value };

		const child_ctx = assign(assign({}, info.ctx), info.resolved);
		const block = type && (info.current = type)(info.component, child_ctx);

		if (info.block) {
			if (info.blocks) {
				info.blocks.forEach((block, i) => {
					if (i !== index && block) {
						transitionManager.groupOutros();
						block.o(() => {
							block.d(1);
							info.blocks[i] = null;
						});
					}
				});
			} else {
				info.block.d(1);
			}

			block.c();
			block[block.i ? 'i' : 'm'](info.mount(), info.anchor);

			info.component.root.set({}); // flush any handlers that were created
		}

		info.block = block;
		if (info.blocks) info.blocks[index] = block;
	}

	if (isPromise(promise)) {
		promise.then(value => {
			update(info.then, 1, info.value, value);
		}, error => {
			update(info.catch, 2, info.error, error);
		});

		// if we previously had a then/catch block, destroy it
		if (info.current !== info.pending) {
			update(info.pending, 0);
			return true;
		}
	} else {
		if (info.current !== info.then) {
			update(info.then, 1, info.value, promise);
			return true;
		}

		info.resolved = { [info.value]: promise };
	}
}

function destroyBlock(block, lookup) {
	block.d(1);
	lookup[block.key] = null;
}

function outroAndDestroyBlock(block, lookup) {
	block.o(function() {
		destroyBlock(block, lookup);
	});
}

function updateKeyedEach(old_blocks, component, changed, get_key, dynamic, ctx, list, lookup, node, has_outro, create_each_block, intro_method, next, get_context) {
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
		var child_ctx = get_context(ctx, list, i);
		var key = get_key(child_ctx);
		var block = lookup[key];

		if (!block) {
			block = create_each_block(component, key, child_ctx);
			block.c();
		} else if (dynamic) {
			block.p(changed, child_ctx);
		}

		new_blocks[i] = new_lookup[key] = block;

		if (key in old_indexes) deltas[key] = Math.abs(i - old_indexes[key]);
	}

	var will_move = {};
	var did_move = {};

	var destroy = has_outro ? outroAndDestroyBlock : destroyBlock;
	if (has_outro) transitionManager.groupOutros();

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

function spread(args) {
	const attributes = Object.assign({}, ...args);
	let str = '';

	Object.keys(attributes).forEach(name => {
		const value = attributes[name];
		if (value === undefined) return;
		if (value === true) str += " " + name;
		str += " " + name + "=" + JSON.stringify(value);
	});

	return str;
}

const escaped = {
	'"': '&quot;',
	"'": '&#39;',
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;'
};

function escape(html) {
	return String(html).replace(/["'&<>]/g, match => escaped[match]);
}

function each(items, assign, fn) {
	let str = '';
	for (let i = 0; i < items.length; i += 1) {
		str += fn(assign(items[i], i));
	}
	return str;
}

const missingComponent = {
	_render: () => ''
};

function blankObject() {
	return Object.create(null);
}

function destroy(detach) {
	this.destroy = noop;
	this.fire('destroy');
	this.set = noop;

	this._fragment.d(detach !== false);
	this._fragment = null;
	this._state = {};
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

function fire(eventName, data) {
	var handlers =
		eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		var handler = handlers[i];

		if (!handler.__calling) {
			handler.__calling = true;
			handler.call(this, data);
			handler.__calling = false;
		}
	}
}

function get() {
	return this._state;
}

function init(component, options) {
	component._handlers = blankObject();
	component._bind = options._bind;

	component.options = options;
	component.root = options.root || component;
	component.store = component.root.store || options.store;
}

function on(eventName, handler) {
	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
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
		this.fire("state", { changed: changed, current: this._state, previous: oldState });
		this._fragment.p(changed, this._state);
		this.fire("update", { changed: changed, current: this._state, previous: oldState });
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

var PENDING = {};
var SUCCESS = {};
var FAILURE = {};

function removeFromStore() {
	this.store._remove(this);
}

var proto = {
	destroy,
	get,
	fire,
	on,
	set,
	_recompute: noop,
	_set,
	_mount,
	_differs
};

var protoDev = {
	destroy: destroyDev,
	get,
	fire,
	on,
	set: setDev,
	_recompute: noop,
	_set,
	_mount,
	_differs
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
/* client/app/index.html generated by Svelte v2.5.0 */






function data() { return {}; };

var methods = {
	loadTable (date) {
		if (!date) date = this.lastDate;
		else this.lastDate = date;
		__WEBPACK_IMPORTED_MODULE_4__data__["a" /* Expenses */].get(date).then(data => {
			this.lastTableData = data;
			this.refs.table.set({ data });
		});
	},

	onDateChange (date) {
		this.refs.form.set({ date: date.dateStr });
		this.loadTable(date.dateStr);
	},

	onFormChange (data) {
		if (!data.length) this.refs.table.set({ data: this.lastTableData });
		else this.refs.table.set({ data });
	},

	onFormSubmit (data) {
		__WEBPACK_IMPORTED_MODULE_4__data__["a" /* Expenses */].save(data).then(() => this.loadTable());
	},

	onRemoveItem (item) {
		__WEBPACK_IMPORTED_MODULE_4__data__["a" /* Expenses */].del(item.id).then(() => this.loadTable());
	},

	onFormError (err) {
		console.log(err);	// TODO: toast?
	},

	onTableClick (item) { this.refs.form.edit(item); },
};

function oncreate() {
	const date = new Date().toISOString().substr(0, 7);
	__WEBPACK_IMPORTED_MODULE_4__data__["b" /* Groups */].get().then(groups => this.refs.form.set({ date, groups }));
	this.loadTable(date);

	this.refs.form.on('change', this.onFormChange.bind(this));
	this.refs.form.on('remove', this.onRemoveItem.bind(this));
	this.refs.form.on('submit', this.onFormSubmit.bind(this));
	this.refs.form.on('error', this.onFormError.bind(this));
	this.refs.picker.on('change', this.onDateChange.bind(this));
	this.refs.table.on('click', this.onTableClick.bind(this));
};

function create_main_fragment(component, ctx) {
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
		c() {
			div = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("div");
			yearmonthpicker._fragment.c();
			text = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t");
			form._fragment.c();
			text_2 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n");
			table._fragment.c();
			div.className = "form-box";
		},

		m(target, anchor) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["k" /* insertNode */])(div, target, anchor);
			yearmonthpicker._mount(div, null);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text, div);
			form._mount(div, null);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["k" /* insertNode */])(text_2, target, anchor);
			table._mount(target, anchor);
		},

		p: __WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["l" /* noop */],

		d(detach) {
			if (detach) {
				Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["i" /* detachNode */])(div);
			}

			yearmonthpicker.destroy();
			if (component.refs.picker === yearmonthpicker) component.refs.picker = null;
			form.destroy();
			if (component.refs.form === form) component.refs.form = null;
			if (detach) {
				Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["i" /* detachNode */])(text_2);
			}

			table.destroy(detach);
			if (component.refs.table === table) component.refs.table = null;
		}
	};
}

function Index(options) {
	Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["j" /* init */])(this, options);
	this.refs = {};
	this._state = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(data(), options.data);

	if (!options.root) {
		this._oncreate = [];
		this._beforecreate = [];
		this._aftercreate = [];
	}

	this._fragment = create_main_fragment(this, this._state);

	this.root._oncreate.push(() => {
		oncreate.call(this);
		this.fire("update", { changed: Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["d" /* assignTrue */])({}, this._state), current: this._state });
	});

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		this._lock = true;
		Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["e" /* callAll */])(this._beforecreate);
		Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["e" /* callAll */])(this._oncreate);
		Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["e" /* callAll */])(this._aftercreate);
		this._lock = false;
	}
}

Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(Index.prototype, __WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["m" /* proto */]);
Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(Index.prototype, methods);
/* harmony default export */ __webpack_exports__["a"] = (Index);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__ = __webpack_require__(0);
/* client/year-month-picker/index.html generated by Svelte v2.5.0 */


function zeroState () {
	const d = new Date();
	const month = d.getMonth();
	const year = d.getFullYear();
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	return { months, month, year, current: { month, year } };
}

function isToday({month, year, current}) {
	return month === current.month && year === current.year;
}

function dateStr({month, year}) {
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
		if (this.get().isToday) return this.notify();
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

function create_main_fragment(component, ctx) {
	var div, button, text, span, text_1_value = ctx.months[ctx.month], text_1, text_2, text_3, text_4, button_1, text_5, button_2, div_class_value;

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
		c() {
			div = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("div");
			button = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("button");
			button.innerHTML = "<i class=\"ion-ios-arrow-back\"></i>";
			text = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\n\t");
			span = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("span");
			text_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])(text_1_value);
			text_2 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])(" ");
			text_3 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])(ctx.year);
			text_4 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\n\t");
			button_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("button");
			button_1.innerHTML = "<i class=\"ion-ios-arrow-forward\"></i>";
			text_5 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\n\t");
			button_2 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("button");
			button_2.innerHTML = "<i class=\"ion-md-undo\"></i>";
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
			div.className = div_class_value = "year-month-picker " + (ctx.isToday ? 'is-today': '');
		},

		m(target, anchor) {
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

		p(changed, ctx) {
			if ((changed.months || changed.month) && text_1_value !== (text_1_value = ctx.months[ctx.month])) {
				text_1.data = text_1_value;
			}

			if (changed.year) {
				text_3.data = ctx.year;
			}

			if ((changed.isToday) && div_class_value !== (div_class_value = "year-month-picker " + (ctx.isToday ? 'is-today': ''))) {
				div.className = div_class_value;
			}
		},

		d(detach) {
			if (detach) {
				Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["i" /* detachNode */])(div);
			}

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

Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(Index.prototype, __WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["m" /* proto */]);
Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(Index.prototype, methods);

Index.prototype._recompute = function _recompute(changed, state) {
	if (changed.month || changed.year || changed.current) {
		if (this._differs(state.isToday, (state.isToday = isToday(state)))) changed.isToday = true;
	}

	if (changed.month || changed.year) {
		if (this._differs(state.dateStr, (state.dateStr = dateStr(state)))) changed.dateStr = true;
	}
}
/* harmony default export */ __webpack_exports__["a"] = (Index);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__text_parser__ = __webpack_require__(5);
/* client/form/index.html generated by Svelte v2.5.0 */



function formatNumber (num) {
	num = Math.round(0 + num * 100) / 100;
	return num.toLocaleString('en-GB', { minimumFractionDigits: 2 })
}

function _groups({groups}) {
	return groups.map(g => {
		// const str = (g.name + ',' + g.keywords).toLowerCase().split(',');
		const escaped = g.name.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
		g._name = new RegExp(escaped, 'i');
		return g;
	});
};

function data() {
	return {
		inEdit: false,
		date: new Date().toISOString().substr(0, 7),
		id: null,
		text: 'Utilities (electricity, gas, internet) spotify 10',
		groups: [],
		rows: [],
	};
};

var methods = {
	oninput (el) {
		this.toggleAmountError();
		this.updateHeight();

		// TODO: debounce this
		const rows = __WEBPACK_IMPORTED_MODULE_1__text_parser__["a" /* default */].parse(el.value, this.get());
		this.set({ rows });
		this.fire('change', rows);
	},

	onkeydown (e) {
		if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) this.onsubmit(e);
		else if (e.key === 'Escape') this.reset(e);
	},

	edit (data) {
		this.reset();
		const text = `${data.group.name} ${data.description} ${formatNumber(data.amount)}`;
		this.set({ inEdit: true, id: data.id, date: data.date, text });
		this.fire('change', this.get().rows);
	},

	reset () {
		this.set({ inEdit: false, id: null, text: '', rows: [] });
		this.toggleAmountError();
		this.fire('change', []);
		this.updateHeight();
		this.refs.textbox.focus();
	},

	remove () {
		this.fire('remove', { id: this.get().id });
		this.reset();
	},

	onsubmit (e) {
		e.preventDefault();
		const data = this.get();
		const rows = data.rows;
		if (!rows.length) {
			this.toggleAmountError('Please enter amount and category');
			return this.fire('error', 'Please enter amount and category');
		}
		// item was edited
		if (data.id && rows.length === 1) rows[0].id = data.id;
		const items = rows.map(this.leanItemForSave);
		this.fire('submit', items);
		this.reset();
	},

	leanItemForSave (item) {
		return {
			id: item.id,
			date: item.date,
			amount: item.amount,
			description: item.description,
			group_id: item.group_id
		};
	},

	toggleAmountError (msg = '') {
		this.refs.textbox.setCustomValidity(msg);
	},

	updateHeight () {
		const noLines = this.refs.textbox.value.split('\n').length;
		this.refs.textbox.style.height = `${noLines * 1.1}em`;
	},

};

function create_main_fragment(component, ctx) {
	var form, div, input, input_updating = false, text, textarea, textarea_updating = false, text_2, div_1, button, text_4, button_1, text_6, div_2, text_7, button_2, text_9, button_3, text_11, button_4, form_class_value;

	function input_input_handler() {
		input_updating = true;
		component.set({ id: input.value });
		input_updating = false;
	}

	function textarea_input_handler() {
		textarea_updating = true;
		component.set({ text: textarea.value });
		textarea_updating = false;
	}

	function input_handler(event) {
		component.oninput(this);
	}

	function keydown_handler(event) {
		component.onkeydown(event);
	}

	function click_handler(event) {
		component.reset();
	}

	function click_handler_1(event) {
		component.remove();
	}

	function click_handler_2(event) {
		component.reset();
	}

	function submit_handler(event) {
		component.onsubmit(event);
	}

	return {
		c() {
			form = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("form");
			div = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("div");
			input = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("input");
			text = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t");
			textarea = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("textarea");
			text_2 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t");
			div_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("div");
			button = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("button");
			button.textContent = "Clear";
			text_4 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t");
			button_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("button");
			button_1.textContent = "Remove";
			text_6 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t");
			div_2 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("div");
			text_7 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t");
			button_2 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("button");
			button_2.textContent = "Cancel";
			text_9 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t");
			button_3 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("button");
			button_3.textContent = "Save";
			text_11 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t");
			button_4 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("button");
			button_4.textContent = "Add";
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(input, "input", input_input_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* setAttribute */])(input, "type", "hidden");
			input.name = "id";
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(textarea, "input", textarea_input_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(textarea, "input", input_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(textarea, "keydown", keydown_handler);
			textarea.autofocus = true;
			textarea.tabIndex = "1";
			textarea.placeholder = "e.g. Tesco 12.50";
			div.className = "form-row";
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(button, "click", click_handler);
			button.type = "button";
			button.tabIndex = "3";
			button.className = "btn btn-reset";
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(button_1, "click", click_handler_1);
			button_1.type = "button";
			button_1.tabIndex = "4";
			button_1.className = "btn danger btn-remove";
			div_2.className = "flex-filler";
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(button_2, "click", click_handler_2);
			button_2.type = "button";
			button_2.tabIndex = "3";
			button_2.className = "btn btn-cancel";
			button_3.type = "submit";
			button_3.tabIndex = "2";
			button_3.className = "btn success btn-save";
			button_4.type = "submit";
			button_4.tabIndex = "2";
			button_4.className = "btn success btn-add";
			div_1.className = "form-footer form-row";
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(form, "submit", submit_handler);
			form.className = form_class_value = "form " + (ctx.inEdit ? 'edit' : '');
		},

		m(target, anchor) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["k" /* insertNode */])(form, target, anchor);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(div, form);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(input, div);

			input.value = ctx.id;

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text, div);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(textarea, div);
			component.refs.textbox = textarea;

			textarea.value = ctx.text;

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_2, form);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(div_1, form);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(button, div_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_4, div_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(button_1, div_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_6, div_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(div_2, div_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_7, div_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(button_2, div_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_9, div_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(button_3, div_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_11, div_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(button_4, div_1);
			component.refs.form = form;
			textarea.focus();
		},

		p(changed, ctx) {
			if (!input_updating) input.value = ctx.id;
			if (!textarea_updating) textarea.value = ctx.text;
			if ((changed.inEdit) && form_class_value !== (form_class_value = "form " + (ctx.inEdit ? 'edit' : ''))) {
				form.className = form_class_value;
			}
		},

		d(detach) {
			if (detach) {
				Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["i" /* detachNode */])(form);
			}

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(input, "input", input_input_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(textarea, "input", textarea_input_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(textarea, "input", input_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(textarea, "keydown", keydown_handler);
			if (component.refs.textbox === textarea) component.refs.textbox = null;
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(button, "click", click_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(button_1, "click", click_handler_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(button_2, "click", click_handler_2);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(form, "submit", submit_handler);
			if (component.refs.form === form) component.refs.form = null;
		}
	};
}

function Index(options) {
	Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["j" /* init */])(this, options);
	this.refs = {};
	this._state = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(data(), options.data);
	this._recompute({ groups: 1 }, this._state);

	this._fragment = create_main_fragment(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);
	}
}

Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(Index.prototype, __WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["m" /* proto */]);
Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(Index.prototype, methods);

Index.prototype._recompute = function _recompute(changed, state) {
	if (changed.groups) {
		if (this._differs(state._groups, (state._groups = _groups(state)))) changed._groups = true;
	}
}
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

function findGroup(s, groups) {
	for (let g of groups) {
		if (s.match(g._name)) {
			s = s.replace(g._name, '');
			return [g, s];
		}
	}
	const words = s.split(' ');
	for (let w of words) {
		for (let g of groups) {
			if (g.keywords.indexOf(w) > -1) {
				s = s.replace(w, '');
				return [g, s];
			}
		}
	}
	return [null, s];
}

function findAmount(s) {
	let amount,
	    cer = 0;
	s = s.replace(/\s+([+-/*()])\s+/g, '$1'); // remove spaces around ops
	const words = s.split(' ');
	for (let w of words) {
		if (w.match(/^\d+$/) && cer <= 8) {
			amount = w;
			cer = 8;
		} else if (w.match(/^\d+\.\d+$/) && cer <= 9) {
			amount = w;
			cer = 9;
		} else if (w.match(/^[\d.()+-/*]+$/)) {
			amount = w;
			cer = 10;
			break;
		}
	}
	s = s.replace(amount, '');
	amount = parseAmount(amount);
	return [amount, s];
}

function parse(val, { date, _groups }) {
	const rows = val.split('\n').map(row => {
		let group, amount, description;
		[group, row] = findGroup(row, _groups);
		[amount, row] = findAmount(row);
		description = row.trim();
		return { amount, description, group_id: group.id, group };
	}).filter(row => row.amount !== '' && row.group_id);

	if (!rows.length) return;

	rows.forEach(r => r.date = date);

	let sum = 0;
	for (let i = 1; i < rows.length; i++) sum += rows[i].amount;
	rows[0].amount -= sum;
	return rows;
}

/* harmony default export */ __webpack_exports__["a"] = ({
	parse
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__ = __webpack_require__(0);
/* client/table/index.html generated by Svelte v2.5.0 */


function formatNumber (num) {
	num = Math.round(0 + num * 100) / 100;
	return num.toLocaleString('en-GB', { minimumFractionDigits: 2 })
}

function filteredData({data, filter}) {
	if (!filter) return data;
	filter = filter.toLowerCase();
	return data.filter(item => {
		let s = item.description + item.amount + item.date;
		if (item.group) {
			s += (item.group.name || '');
			if (item.group.category) s += (item.group.category.name || '');
		}
		return (s.toLowerCase().indexOf(filter) > -1);
	});
};

function total({filteredData}) { return filteredData.reduce((p, c) => p + c.amount, 0); };

function data() {
	return { data: [], filter: '' };
};

function getDescription(item) {
	const desc = [];
	if (item.group.name) desc.push(item.group.name);
	if (item.description) desc.push(item.description);
	return desc.join(' - ');
};

var methods = {
	onFilterKeyDown (e) {
		if (e.key === 'Escape') this.set({ filter: '' });
	},
	onRowClick (item) {
		this.fire('click', item);
	}
};

function oncreate() {
};

function create_main_fragment(component, ctx) {
	var div, table, thead, text_6, tbody, text_8, tfoot, tr_1, td_3, div_1, i, text_9, input, input_updating = false, text_12, td_4, text_13_value = formatNumber(ctx.total), text_13;

	function select_block_type(ctx) {
		if (ctx.filteredData && ctx.filteredData.length) return create_if_block;
		return create_if_block_1;
	}

	var current_block_type = select_block_type(ctx);
	var if_block = current_block_type(component, ctx);

	function input_input_handler() {
		input_updating = true;
		component.set({ filter: input.value });
		input_updating = false;
	}

	function keydown_handler(event) {
		component.onFilterKeyDown(event);
	}

	return {
		c() {
			div = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("div");
			table = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("table");
			thead = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("thead");
			thead.innerHTML = "<tr><td class=\"date\">Date</td>\n\t\t<td class=\"desc\">Description</td>\n\t\t<td class=\"amount\">Amount</td></tr>";
			text_6 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t");
			tbody = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("tbody");
			if_block.c();
			text_8 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t");
			tfoot = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("tfoot");
			tr_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("tr");
			td_3 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("td");
			div_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("div");
			i = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("i");
			text_9 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t\t\t");
			input = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("input");
			text_12 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t");
			td_4 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("td");
			text_13 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])(text_13_value);
			i.className = "ion-md-search";
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(input, "input", input_input_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(input, "keydown", keydown_handler);
			input.className = "table-filter";
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* setAttribute */])(input, "type", "search");
			input.placeholder = "Filter";
			div_1.className = "table-filter-cell-inner";
			td_3.colSpan = "2";
			td_3.className = "table-filter-cell";
			td_4.className = "amount";
			div.className = "table";
		},

		m(target, anchor) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["k" /* insertNode */])(div, target, anchor);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(table, div);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(thead, table);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_6, table);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(tbody, table);
			if_block.m(tbody, null);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_8, table);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(tfoot, table);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(tr_1, tfoot);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(td_3, tr_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(div_1, td_3);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(i, div_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_9, div_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(input, div_1);

			input.value = ctx.filter;

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_12, tr_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(td_4, tr_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_13, td_4);
			component.refs.table = div;
		},

		p(changed, ctx) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(changed, ctx);
			} else {
				if_block.d(1);
				if_block = current_block_type(component, ctx);
				if_block.c();
				if_block.m(tbody, null);
			}

			if (!input_updating) input.value = ctx.filter;
			if ((changed.total) && text_13_value !== (text_13_value = formatNumber(ctx.total))) {
				text_13.data = text_13_value;
			}
		},

		d(detach) {
			if (detach) {
				Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["i" /* detachNode */])(div);
			}

			if_block.d();
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(input, "input", input_input_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(input, "keydown", keydown_handler);
			if (component.refs.table === div) component.refs.table = null;
		}
	};
}

// (10:2) {#each filteredData as item, idx}
function create_each_block(component, ctx) {
	var tr, td, text_value = ctx.item.date.substr(0, 7), text, text_1, td_1, text_2_value = getDescription(ctx.item), text_2, text_3, td_2, text_4_value = formatNumber(ctx.item.amount), text_4;

	return {
		c() {
			tr = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("tr");
			td = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("td");
			text = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])(text_value);
			text_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t\t\t");
			td_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("td");
			text_2 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])(text_2_value);
			text_3 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t\t\t");
			td_2 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("td");
			text_4 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])(text_4_value);
			td.className = "date";
			td_1.className = "desc";
			td_2.className = "amount";

			tr._svelte = { component, ctx };

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(tr, "click", click_handler);
		},

		m(target, anchor) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["k" /* insertNode */])(tr, target, anchor);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(td, tr);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text, td);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_1, tr);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(td_1, tr);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_2, td_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_3, tr);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(td_2, tr);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_4, td_2);
		},

		p(changed, ctx) {
			if ((changed.filteredData) && text_value !== (text_value = ctx.item.date.substr(0, 7))) {
				text.data = text_value;
			}

			if ((changed.filteredData) && text_2_value !== (text_2_value = getDescription(ctx.item))) {
				text_2.data = text_2_value;
			}

			if ((changed.filteredData) && text_4_value !== (text_4_value = formatNumber(ctx.item.amount))) {
				text_4.data = text_4_value;
			}

			tr._svelte.ctx = ctx;
		},

		d(detach) {
			if (detach) {
				Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["i" /* detachNode */])(tr);
			}

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(tr, "click", click_handler);
		}
	};
}

// (9:2) {#if filteredData && filteredData.length}
function create_if_block(component, ctx) {
	var text, tr;

	var each_value = ctx.filteredData;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(component, get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			text = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t\t");
			tr = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("tr");
			tr.innerHTML = "<td colspan=\"3\"></td>";
			tr.className = "row-filler";
		},

		m(target, anchor) {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["k" /* insertNode */])(text, target, anchor);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["k" /* insertNode */])(tr, target, anchor);
		},

		p(changed, ctx) {
			if (changed.filteredData) {
				each_value = ctx.filteredData;

				for (var i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block(component, child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(text.parentNode, text);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value.length;
			}
		},

		d(detach) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* destroyEach */])(each_blocks, detach);

			if (detach) {
				Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["i" /* detachNode */])(text);
				Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["i" /* detachNode */])(tr);
			}
		}
	};
}

// (18:2) {:else}
function create_if_block_1(component, ctx) {
	var tr;

	return {
		c() {
			tr = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("tr");
			tr.innerHTML = "<td colspan=\"3\">No results</td>";
			tr.className = "empty-row";
		},

		m(target, anchor) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["k" /* insertNode */])(tr, target, anchor);
		},

		p: __WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["l" /* noop */],

		d(detach) {
			if (detach) {
				Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["i" /* detachNode */])(tr);
			}
		}
	};
}

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.item = list[i];
	child_ctx.each_value = list;
	child_ctx.idx = i;
	return child_ctx;
}

function click_handler(event) {
	const { component, ctx } = this._svelte;

	component.onRowClick(ctx.item);
}

function Index(options) {
	Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["j" /* init */])(this, options);
	this.refs = {};
	this._state = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(data(), options.data);
	this._recompute({ data: 1, filter: 1, filteredData: 1 }, this._state);

	if (!options.root) {
		this._oncreate = [];
	}

	this._fragment = create_main_fragment(this, this._state);

	this.root._oncreate.push(() => {
		oncreate.call(this);
		this.fire("update", { changed: Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["d" /* assignTrue */])({}, this._state), current: this._state });
	});

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["e" /* callAll */])(this._oncreate);
	}
}

Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(Index.prototype, __WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["m" /* proto */]);
Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(Index.prototype, methods);

Index.prototype._recompute = function _recompute(changed, state) {
	if (changed.data || changed.filter) {
		if (this._differs(state.filteredData, (state.filteredData = filteredData(state)))) changed.filteredData = true;
	}

	if (changed.filteredData) {
		if (this._differs(state.total, (state.total = total(state)))) changed.total = true;
	}
}
/* harmony default export */ __webpack_exports__["a"] = (Index);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Categories */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Groups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Expenses; });
function req(url, method = 'GET', params) {
	const opts = {
		method: method,
		headers: { 'Content-type': 'application/json' },
		credentials: 'include'
	};
	if (params) {
		opts.body = JSON.stringify(params);
		if (params.id) url += `/${params.id}`;
	}
	return fetch(`api/${url}`, opts).then(res => res.json());
}

const get = url => req(url);
const post = (url, params) => req(url, 'POST', params);
const put = (url, params) => req(url, 'PUT', params);
const del = url => req(url, 'DELETE');

const Categories = {
	get: () => get('categories')
};

const Groups = {
	get: () => get('groups')
};

const Expenses = {
	get: (date = '') => get(`entries?date=${date}`),
	save: data => {
		if (data.length === 1 && data[0].id) return put('entries', data[0]);
		return post('entries', data);
	},
	del: id => del(`entries/${id}`)
};



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjUyM2NlYjI0YTEzZGZhZmU5OWMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9hcHAvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9jbGllbnQveWVhci1tb250aC1waWNrZXIvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvZm9ybS9pbmRleC5odG1sIiwid2VicGFjazovLy8uL2NsaWVudC9mb3JtL3RleHQtcGFyc2VyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC90YWJsZS9pbmRleC5odG1sIiwid2VicGFjazovLy8uL2NsaWVudC9kYXRhL2luZGV4LmpzIl0sIm5hbWVzIjpbInRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcnNlQW1vdW50IiwiYW1vdW50IiwicmVwbGFjZSIsInRlc3QiLCJldmFsIiwiZSIsIm51bSIsInBhcnNlRmxvYXQiLCJJbmZpbml0eSIsImlzTmFOIiwiZmluZEdyb3VwIiwicyIsImdyb3VwcyIsImciLCJtYXRjaCIsIl9uYW1lIiwid29yZHMiLCJzcGxpdCIsInciLCJrZXl3b3JkcyIsImluZGV4T2YiLCJmaW5kQW1vdW50IiwiY2VyIiwicGFyc2UiLCJ2YWwiLCJkYXRlIiwiX2dyb3VwcyIsInJvd3MiLCJtYXAiLCJyb3ciLCJncm91cCIsImRlc2NyaXB0aW9uIiwidHJpbSIsImdyb3VwX2lkIiwiaWQiLCJmaWx0ZXIiLCJsZW5ndGgiLCJmb3JFYWNoIiwiciIsInN1bSIsImkiLCJyZXEiLCJ1cmwiLCJtZXRob2QiLCJwYXJhbXMiLCJvcHRzIiwiaGVhZGVycyIsImNyZWRlbnRpYWxzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZ2V0IiwicG9zdCIsInB1dCIsImRlbCIsIkNhdGVnb3JpZXMiLCJHcm91cHMiLCJFeHBlbnNlcyIsInNhdmUiLCJkYXRhIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHVCQUF1QjtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FB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TSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwRCxDQUFDLHFEQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ25FLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFdEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDM0QsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDM0QsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDM0QsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDekQsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDN0QsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDM0QsQ0FBQzs7Ozs7Ozs7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QUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ2xELEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDckIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM1QixFQUFFOztBQUVGLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ2YsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssT0FBTyxLQUFLLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEUsT0FBTyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0MsRUFBRTs7QUFFRixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRTtBQUNiLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2YsRUFBRSxNQUFNLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JGLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNqRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QyxFQUFFOztBQUVGLENBQUMsS0FBSyxDQUFDLEdBQUc7QUFDVixFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMs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QVEsSUFBR0UsT0FBT1YsRUFBRyxFQUFyQjtBQUNmO0FBQ0QsUUFBT2lCLE1BQU8sT0FBTVQsR0FBSSxFQUFqQixFQUFvQkcsSUFBcEIsRUFBMEJPLElBQTFCLENBQStCQyxPQUFPQSxJQUFJQyxJQUFKLEVBQXRDLENBQVA7QUFDQTs7QUFFRCxNQUFNQyxNQUFNYixPQUFPRCxJQUFJQyxHQUFKLENBQW5CO0FBQ0EsTUFBTWMsT0FBTyxDQUFDZCxHQUFELEVBQU1FLE1BQU4sS0FBaUJILElBQUlDLEdBQUosRUFBUyxNQUFULEVBQWlCRSxNQUFqQixDQUE5QjtBQUNBLE1BQU1hLE1BQU0sQ0FBQ2YsR0FBRCxFQUFNRSxNQUFOLEtBQWlCSCxJQUFJQyxHQUFKLEVBQVMsS0FBVCxFQUFnQkUsTUFBaEIsQ0FBN0I7QUFDQSxNQUFNYyxNQUFNaEIsT0FBT0QsSUFBSUMsR0FBSixFQUFTLFFBQVQsQ0FBbkI7O0FBR0EsTUFBTWlCLGFBQWE7QUFDbEJKLE1BQUssTUFBTUEsSUFBSSxZQUFKO0FBRE8sQ0FBbkI7O0FBSUEsTUFBTUssU0FBUztBQUNkTCxNQUFLLE1BQU1BLElBQUksUUFBSjtBQURHLENBQWY7O0FBSUEsTUFBTU0sV0FBVztBQUNoQk4sTUFBSyxDQUFDOUIsT0FBTyxFQUFSLEtBQWU4QixJQUFLLGdCQUFlOUIsSUFBSyxFQUF6QixDQURKO0FBRWhCcUMsT0FBTUMsUUFBUTtBQUNiLE1BQUlBLEtBQUszQixNQUFMLEtBQWdCLENBQWhCLElBQXFCMkIsS0FBSyxDQUFMLEVBQVE3QixFQUFqQyxFQUFxQyxPQUFPdUIsSUFBSSxTQUFKLEVBQWVNLEtBQUssQ0FBTCxDQUFmLENBQVA7QUFDckMsU0FBT1AsS0FBSyxTQUFMLEVBQWdCTyxJQUFoQixDQUFQO0FBQ0EsRUFMZTtBQU1oQkwsTUFBS3hCLE1BQU13QixJQUFLLFdBQVV4QixFQUFHLEVBQWxCO0FBTkssQ0FBakIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL3B1YmxpYy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmNTIzY2ViMjRhMTNkZmFmZTk5YyIsImZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5mdW5jdGlvbiBhc3NpZ24odGFyLCBzcmMpIHtcblx0Zm9yICh2YXIgayBpbiBzcmMpIHRhcltrXSA9IHNyY1trXTtcblx0cmV0dXJuIHRhcjtcbn1cblxuZnVuY3Rpb24gYXNzaWduVHJ1ZSh0YXIsIHNyYykge1xuXHRmb3IgKHZhciBrIGluIHNyYykgdGFyW2tdID0gMTtcblx0cmV0dXJuIHRhcjtcbn1cblxuZnVuY3Rpb24gaXNQcm9taXNlKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gYXBwZW5kTm9kZShub2RlLCB0YXJnZXQpIHtcblx0dGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xufVxuXG5mdW5jdGlvbiBpbnNlcnROb2RlKG5vZGUsIHRhcmdldCwgYW5jaG9yKSB7XG5cdHRhcmdldC5pbnNlcnRCZWZvcmUobm9kZSwgYW5jaG9yKTtcbn1cblxuZnVuY3Rpb24gZGV0YWNoTm9kZShub2RlKSB7XG5cdG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbn1cblxuZnVuY3Rpb24gZGV0YWNoQmV0d2VlbihiZWZvcmUsIGFmdGVyKSB7XG5cdHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcgJiYgYmVmb3JlLm5leHRTaWJsaW5nICE9PSBhZnRlcikge1xuXHRcdGJlZm9yZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJlZm9yZS5uZXh0U2libGluZyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZGV0YWNoQmVmb3JlKGFmdGVyKSB7XG5cdHdoaWxlIChhZnRlci5wcmV2aW91c1NpYmxpbmcpIHtcblx0XHRhZnRlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGFmdGVyLnByZXZpb3VzU2libGluZyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZGV0YWNoQWZ0ZXIoYmVmb3JlKSB7XG5cdHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcpIHtcblx0XHRiZWZvcmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiZWZvcmUubmV4dFNpYmxpbmcpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlaW5zZXJ0QmV0d2VlbihiZWZvcmUsIGFmdGVyLCB0YXJnZXQpIHtcblx0d2hpbGUgKGJlZm9yZS5uZXh0U2libGluZyAmJiBiZWZvcmUubmV4dFNpYmxpbmcgIT09IGFmdGVyKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKGJlZm9yZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJlZm9yZS5uZXh0U2libGluZykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlaW5zZXJ0Q2hpbGRyZW4ocGFyZW50LCB0YXJnZXQpIHtcblx0d2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB0YXJnZXQuYXBwZW5kQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xufVxuXG5mdW5jdGlvbiByZWluc2VydEFmdGVyKGJlZm9yZSwgdGFyZ2V0KSB7XG5cdHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcpIHRhcmdldC5hcHBlbmRDaGlsZChiZWZvcmUubmV4dFNpYmxpbmcpO1xufVxuXG5mdW5jdGlvbiByZWluc2VydEJlZm9yZShhZnRlciwgdGFyZ2V0KSB7XG5cdHZhciBwYXJlbnQgPSBhZnRlci5wYXJlbnROb2RlO1xuXHR3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQgIT09IGFmdGVyKSB0YXJnZXQuYXBwZW5kQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xufVxuXG5mdW5jdGlvbiBkZXN0cm95RWFjaChpdGVyYXRpb25zLCBkZXRhY2gpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpdGVyYXRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0aWYgKGl0ZXJhdGlvbnNbaV0pIGl0ZXJhdGlvbnNbaV0uZChkZXRhY2gpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50KCkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KG5hbWUpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN2Z0VsZW1lbnQobmFtZSkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIG5hbWUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0KGRhdGEpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21tZW50KCkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJyk7XG59XG5cbmZ1bmN0aW9uIGFkZExpc3RlbmVyKG5vZGUsIGV2ZW50LCBoYW5kbGVyKSB7XG5cdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihub2RlLCBldmVudCwgaGFuZGxlcikge1xuXHRub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcblx0bm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMobm9kZSwgYXR0cmlidXRlcykge1xuXHRmb3IgKHZhciBrZXkgaW4gYXR0cmlidXRlcykge1xuXHRcdGlmIChrZXkgaW4gbm9kZSkge1xuXHRcdFx0bm9kZVtrZXldID0gYXR0cmlidXRlc1trZXldO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoYXR0cmlidXRlc1trZXldID09PSB1bmRlZmluZWQpIHJlbW92ZUF0dHJpYnV0ZShub2RlLCBrZXkpO1xuXHRcdFx0ZWxzZSBzZXRBdHRyaWJ1dGUobm9kZSwga2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUobm9kZSwgYXR0cmlidXRlKSB7XG5cdG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG59XG5cbmZ1bmN0aW9uIHNldFhsaW5rQXR0cmlidXRlKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcblx0bm9kZS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsIGF0dHJpYnV0ZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBnZXRCaW5kaW5nR3JvdXBWYWx1ZShncm91cCkge1xuXHR2YXIgdmFsdWUgPSBbXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBncm91cC5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGlmIChncm91cFtpXS5jaGVja2VkKSB2YWx1ZS5wdXNoKGdyb3VwW2ldLl9fdmFsdWUpO1xuXHR9XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlID09PSAnJyA/IHVuZGVmaW5lZCA6ICt2YWx1ZTtcbn1cblxuZnVuY3Rpb24gdGltZVJhbmdlc1RvQXJyYXkocmFuZ2VzKSB7XG5cdHZhciBhcnJheSA9IFtdO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHJhbmdlcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGFycmF5LnB1c2goeyBzdGFydDogcmFuZ2VzLnN0YXJ0KGkpLCBlbmQ6IHJhbmdlcy5lbmQoaSkgfSk7XG5cdH1cblx0cmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBjaGlsZHJlbiAoZWxlbWVudCkge1xuXHRyZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpO1xufVxuXG5mdW5jdGlvbiBjbGFpbUVsZW1lbnQgKG5vZGVzLCBuYW1lLCBhdHRyaWJ1dGVzLCBzdmcpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdHZhciBub2RlID0gbm9kZXNbaV07XG5cdFx0aWYgKG5vZGUubm9kZU5hbWUgPT09IG5hbWUpIHtcblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgbm9kZS5hdHRyaWJ1dGVzLmxlbmd0aDsgaiArPSAxKSB7XG5cdFx0XHRcdHZhciBhdHRyaWJ1dGUgPSBub2RlLmF0dHJpYnV0ZXNbal07XG5cdFx0XHRcdGlmICghYXR0cmlidXRlc1thdHRyaWJ1dGUubmFtZV0pIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZS5uYW1lKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBub2Rlcy5zcGxpY2UoaSwgMSlbMF07IC8vIFRPRE8gc3RyaXAgdW53YW50ZWQgYXR0cmlidXRlc1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdmcgPyBjcmVhdGVTdmdFbGVtZW50KG5hbWUpIDogY3JlYXRlRWxlbWVudChuYW1lKTtcbn1cblxuZnVuY3Rpb24gY2xhaW1UZXh0IChub2RlcywgZGF0YSkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dmFyIG5vZGUgPSBub2Rlc1tpXTtcblx0XHRpZiAobm9kZS5ub2RlVHlwZSA9PT0gMykge1xuXHRcdFx0bm9kZS5kYXRhID0gZGF0YTtcblx0XHRcdHJldHVybiBub2Rlcy5zcGxpY2UoaSwgMSlbMF07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGNyZWF0ZVRleHQoZGF0YSk7XG59XG5cbmZ1bmN0aW9uIHNldElucHV0VHlwZShpbnB1dCwgdHlwZSkge1xuXHR0cnkge1xuXHRcdGlucHV0LnR5cGUgPSB0eXBlO1xuXHR9IGNhdGNoIChlKSB7fVxufVxuXG5mdW5jdGlvbiBzZXRTdHlsZShub2RlLCBrZXksIHZhbHVlKSB7XG5cdG5vZGUuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdE9wdGlvbihzZWxlY3QsIHZhbHVlKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0Lm9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHR2YXIgb3B0aW9uID0gc2VsZWN0Lm9wdGlvbnNbaV07XG5cblx0XHRpZiAob3B0aW9uLl9fdmFsdWUgPT09IHZhbHVlKSB7XG5cdFx0XHRvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBzZWxlY3RPcHRpb25zKHNlbGVjdCwgdmFsdWUpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdHZhciBvcHRpb24gPSBzZWxlY3Qub3B0aW9uc1tpXTtcblx0XHRvcHRpb24uc2VsZWN0ZWQgPSB+dmFsdWUuaW5kZXhPZihvcHRpb24uX192YWx1ZSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0VmFsdWUoc2VsZWN0KSB7XG5cdHZhciBzZWxlY3RlZE9wdGlvbiA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpIHx8IHNlbGVjdC5vcHRpb25zWzBdO1xuXHRyZXR1cm4gc2VsZWN0ZWRPcHRpb24gJiYgc2VsZWN0ZWRPcHRpb24uX192YWx1ZTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0TXVsdGlwbGVWYWx1ZShzZWxlY3QpIHtcblx0cmV0dXJuIFtdLm1hcC5jYWxsKHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCc6Y2hlY2tlZCcpLCBmdW5jdGlvbihvcHRpb24pIHtcblx0XHRyZXR1cm4gb3B0aW9uLl9fdmFsdWU7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRSZXNpemVMaXN0ZW5lcihlbGVtZW50LCBmbikge1xuXHRpZiAoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcblx0XHRlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcblx0fVxuXG5cdGNvbnN0IG9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29iamVjdCcpO1xuXHRvYmplY3Quc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBibG9jazsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IGhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCU7IG92ZXJmbG93OiBoaWRkZW47IHBvaW50ZXItZXZlbnRzOiBub25lOyB6LWluZGV4OiAtMTsnKTtcblx0b2JqZWN0LnR5cGUgPSAndGV4dC9odG1sJztcblxuXHRsZXQgd2luO1xuXG5cdG9iamVjdC5vbmxvYWQgPSAoKSA9PiB7XG5cdFx0d2luID0gb2JqZWN0LmNvbnRlbnREb2N1bWVudC5kZWZhdWx0Vmlldztcblx0XHR3aW4uYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZm4pO1xuXHR9O1xuXG5cdGlmICgvVHJpZGVudC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuXHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQob2JqZWN0KTtcblx0XHRvYmplY3QuZGF0YSA9ICdhYm91dDpibGFuayc7XG5cdH0gZWxzZSB7XG5cdFx0b2JqZWN0LmRhdGEgPSAnYWJvdXQ6YmxhbmsnO1xuXHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQob2JqZWN0KTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0Y2FuY2VsOiAoKSA9PiB7XG5cdFx0XHR3aW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZm4pO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVDaGlsZChvYmplY3QpO1xuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gbGluZWFyKHQpIHtcblx0cmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUnVsZSh7IGEsIGIsIGRlbHRhLCBkdXJhdGlvbiB9LCBlYXNlLCBmbikge1xuXHRjb25zdCBzdGVwID0gMTYuNjY2IC8gZHVyYXRpb247XG5cdGxldCBrZXlmcmFtZXMgPSAne1xcbic7XG5cblx0Zm9yIChsZXQgcCA9IDA7IHAgPD0gMTsgcCArPSBzdGVwKSB7XG5cdFx0Y29uc3QgdCA9IGEgKyBkZWx0YSAqIGVhc2UocCk7XG5cdFx0a2V5ZnJhbWVzICs9IHAgKiAxMDAgKyBgJXske2ZuKHQpfX1cXG5gO1xuXHR9XG5cblx0cmV0dXJuIGtleWZyYW1lcyArIGAxMDAlIHske2ZuKGIpfX1cXG59YDtcbn1cblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Rhcmtza3lhcHAvc3RyaW5nLWhhc2gvYmxvYi9tYXN0ZXIvaW5kZXguanNcbmZ1bmN0aW9uIGhhc2goc3RyKSB7XG5cdGxldCBoYXNoID0gNTM4MTtcblx0bGV0IGkgPSBzdHIubGVuZ3RoO1xuXG5cdHdoaWxlIChpLS0pIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSBeIHN0ci5jaGFyQ29kZUF0KGkpO1xuXHRyZXR1cm4gaGFzaCA+Pj4gMDtcbn1cblxuZnVuY3Rpb24gd3JhcFRyYW5zaXRpb24oY29tcG9uZW50LCBub2RlLCBmbiwgcGFyYW1zLCBpbnRybykge1xuXHRjb25zdCBvYmogPSBmbihub2RlLCBwYXJhbXMpO1xuXHRjb25zdCBkdXJhdGlvbiA9IG9iai5kdXJhdGlvbiB8fCAzMDA7XG5cdGNvbnN0IGVhc2UgPSBvYmouZWFzaW5nIHx8IGxpbmVhcjtcblx0bGV0IGNzc1RleHQ7XG5cblx0aWYgKGludHJvKSB7XG5cdFx0aWYgKG9iai5jc3MgJiYgb2JqLmRlbGF5KSB7XG5cdFx0XHRjc3NUZXh0ID0gbm9kZS5zdHlsZS5jc3NUZXh0O1xuXHRcdFx0bm9kZS5zdHlsZS5jc3NUZXh0ICs9IG9iai5jc3MoMCk7XG5cdFx0fVxuXG5cdFx0aWYgKG9iai50aWNrKSBvYmoudGljaygwKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0dDogaW50cm8gPyAwIDogMSxcblx0XHRydW5uaW5nOiBmYWxzZSxcblx0XHRwcm9ncmFtOiBudWxsLFxuXHRcdHBlbmRpbmc6IG51bGwsXG5cblx0XHRydW4oYiwgY2FsbGJhY2spIHtcblx0XHRcdGNvbnN0IHByb2dyYW0gPSB7XG5cdFx0XHRcdHN0YXJ0OiB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCkgKyAob2JqLmRlbGF5IHx8IDApLFxuXHRcdFx0XHRiLFxuXHRcdFx0XHRjYWxsYmFjazogY2FsbGJhY2sgfHwgbm9vcFxuXHRcdFx0fTtcblxuXHRcdFx0aWYgKCFiKSB7XG5cdFx0XHRcdHByb2dyYW0uZ3JvdXAgPSB0cmFuc2l0aW9uTWFuYWdlci5vdXRyb3M7XG5cdFx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLm91dHJvcy5yZW1haW5pbmcgKz0gMTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG9iai5kZWxheSkge1xuXHRcdFx0XHR0aGlzLnBlbmRpbmcgPSBwcm9ncmFtO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zdGFydChwcm9ncmFtKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCF0aGlzLnJ1bm5pbmcpIHtcblx0XHRcdFx0dGhpcy5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdFx0dHJhbnNpdGlvbk1hbmFnZXIuYWRkKHRoaXMpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRzdGFydChwcm9ncmFtKSB7XG5cdFx0XHRjb21wb25lbnQuZmlyZShgJHtwcm9ncmFtLmIgPyAnaW50cm8nIDogJ291dHJvJ30uc3RhcnRgLCB7IG5vZGUgfSk7XG5cblx0XHRcdHByb2dyYW0uYSA9IHRoaXMudDtcblx0XHRcdHByb2dyYW0uZGVsdGEgPSBwcm9ncmFtLmIgLSBwcm9ncmFtLmE7XG5cdFx0XHRwcm9ncmFtLmR1cmF0aW9uID0gZHVyYXRpb24gKiBNYXRoLmFicyhwcm9ncmFtLmIgLSBwcm9ncmFtLmEpO1xuXHRcdFx0cHJvZ3JhbS5lbmQgPSBwcm9ncmFtLnN0YXJ0ICsgcHJvZ3JhbS5kdXJhdGlvbjtcblxuXHRcdFx0aWYgKG9iai5jc3MpIHtcblx0XHRcdFx0aWYgKG9iai5kZWxheSkgbm9kZS5zdHlsZS5jc3NUZXh0ID0gY3NzVGV4dDtcblxuXHRcdFx0XHRjb25zdCBydWxlID0gZ2VuZXJhdGVSdWxlKHByb2dyYW0sIGVhc2UsIG9iai5jc3MpO1xuXHRcdFx0XHR0cmFuc2l0aW9uTWFuYWdlci5hZGRSdWxlKHJ1bGUsIHByb2dyYW0ubmFtZSA9ICdfX3N2ZWx0ZV8nICsgaGFzaChydWxlKSk7XG5cblx0XHRcdFx0bm9kZS5zdHlsZS5hbmltYXRpb24gPSAobm9kZS5zdHlsZS5hbmltYXRpb24gfHwgJycpXG5cdFx0XHRcdFx0LnNwbGl0KCcsICcpXG5cdFx0XHRcdFx0LmZpbHRlcihhbmltID0+IGFuaW0gJiYgKHByb2dyYW0uZGVsdGEgPCAwIHx8ICEvX19zdmVsdGUvLnRlc3QoYW5pbSkpKVxuXHRcdFx0XHRcdC5jb25jYXQoYCR7cHJvZ3JhbS5uYW1lfSAke3Byb2dyYW0uZHVyYXRpb259bXMgbGluZWFyIDEgZm9yd2FyZHNgKVxuXHRcdFx0XHRcdC5qb2luKCcsICcpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuXHRcdFx0dGhpcy5wZW5kaW5nID0gbnVsbDtcblx0XHR9LFxuXG5cdFx0dXBkYXRlKG5vdykge1xuXHRcdFx0Y29uc3QgcHJvZ3JhbSA9IHRoaXMucHJvZ3JhbTtcblx0XHRcdGlmICghcHJvZ3JhbSkgcmV0dXJuO1xuXG5cdFx0XHRjb25zdCBwID0gbm93IC0gcHJvZ3JhbS5zdGFydDtcblx0XHRcdHRoaXMudCA9IHByb2dyYW0uYSArIHByb2dyYW0uZGVsdGEgKiBlYXNlKHAgLyBwcm9ncmFtLmR1cmF0aW9uKTtcblx0XHRcdGlmIChvYmoudGljaykgb2JqLnRpY2sodGhpcy50KTtcblx0XHR9LFxuXG5cdFx0ZG9uZSgpIHtcblx0XHRcdGNvbnN0IHByb2dyYW0gPSB0aGlzLnByb2dyYW07XG5cdFx0XHR0aGlzLnQgPSBwcm9ncmFtLmI7XG5cblx0XHRcdGlmIChvYmoudGljaykgb2JqLnRpY2sodGhpcy50KTtcblxuXHRcdFx0Y29tcG9uZW50LmZpcmUoYCR7cHJvZ3JhbS5iID8gJ2ludHJvJyA6ICdvdXRybyd9LmVuZGAsIHsgbm9kZSB9KTtcblxuXHRcdFx0aWYgKCFwcm9ncmFtLmIgJiYgIXByb2dyYW0uaW52YWxpZGF0ZWQpIHtcblx0XHRcdFx0cHJvZ3JhbS5ncm91cC5jYWxsYmFja3MucHVzaCgoKSA9PiB7XG5cdFx0XHRcdFx0cHJvZ3JhbS5jYWxsYmFjaygpO1xuXHRcdFx0XHRcdGlmIChvYmouY3NzKSB0cmFuc2l0aW9uTWFuYWdlci5kZWxldGVSdWxlKG5vZGUsIHByb2dyYW0ubmFtZSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGlmICgtLXByb2dyYW0uZ3JvdXAucmVtYWluaW5nID09PSAwKSB7XG5cdFx0XHRcdFx0cHJvZ3JhbS5ncm91cC5jYWxsYmFja3MuZm9yRWFjaChmbiA9PiB7XG5cdFx0XHRcdFx0XHRmbigpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAob2JqLmNzcykgdHJhbnNpdGlvbk1hbmFnZXIuZGVsZXRlUnVsZShub2RlLCBwcm9ncmFtLm5hbWUpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnJ1bm5pbmcgPSAhIXRoaXMucGVuZGluZztcblx0XHR9LFxuXG5cdFx0YWJvcnQoKSB7XG5cdFx0XHRpZiAodGhpcy5wcm9ncmFtKSB7XG5cdFx0XHRcdGlmIChvYmoudGljaykgb2JqLnRpY2soMSk7XG5cdFx0XHRcdGlmIChvYmouY3NzKSB0cmFuc2l0aW9uTWFuYWdlci5kZWxldGVSdWxlKG5vZGUsIHRoaXMucHJvZ3JhbS5uYW1lKTtcblx0XHRcdFx0dGhpcy5wcm9ncmFtID0gdGhpcy5wZW5kaW5nID0gbnVsbDtcblx0XHRcdFx0dGhpcy5ydW5uaW5nID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGludmFsaWRhdGUoKSB7XG5cdFx0XHRpZiAodGhpcy5wcm9ncmFtKSB7XG5cdFx0XHRcdHRoaXMucHJvZ3JhbS5pbnZhbGlkYXRlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSB7XG5cdHJ1bm5pbmc6IGZhbHNlLFxuXHR0cmFuc2l0aW9uczogW10sXG5cdGJvdW5kOiBudWxsLFxuXHRzdHlsZXNoZWV0OiBudWxsLFxuXHRhY3RpdmVSdWxlczoge30sXG5cblx0YWRkKHRyYW5zaXRpb24pIHtcblx0XHR0aGlzLnRyYW5zaXRpb25zLnB1c2godHJhbnNpdGlvbik7XG5cblx0XHRpZiAoIXRoaXMucnVubmluZykge1xuXHRcdFx0dGhpcy5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmJvdW5kIHx8ICh0aGlzLmJvdW5kID0gdGhpcy5uZXh0LmJpbmQodGhpcykpKTtcblx0XHR9XG5cdH0sXG5cblx0YWRkUnVsZShydWxlLCBuYW1lKSB7XG5cdFx0aWYgKCF0aGlzLnN0eWxlc2hlZXQpIHtcblx0XHRcdGNvbnN0IHN0eWxlID0gY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdFx0dHJhbnNpdGlvbk1hbmFnZXIuc3R5bGVzaGVldCA9IHN0eWxlLnNoZWV0O1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5hY3RpdmVSdWxlc1tuYW1lXSkge1xuXHRcdFx0dGhpcy5hY3RpdmVSdWxlc1tuYW1lXSA9IHRydWU7XG5cdFx0XHR0aGlzLnN0eWxlc2hlZXQuaW5zZXJ0UnVsZShgQGtleWZyYW1lcyAke25hbWV9ICR7cnVsZX1gLCB0aGlzLnN0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcblx0XHR9XG5cdH0sXG5cblx0bmV4dCgpIHtcblx0XHR0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcblxuXHRcdGNvbnN0IG5vdyA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcblx0XHRsZXQgaSA9IHRoaXMudHJhbnNpdGlvbnMubGVuZ3RoO1xuXG5cdFx0d2hpbGUgKGktLSkge1xuXHRcdFx0Y29uc3QgdHJhbnNpdGlvbiA9IHRoaXMudHJhbnNpdGlvbnNbaV07XG5cblx0XHRcdGlmICh0cmFuc2l0aW9uLnByb2dyYW0gJiYgbm93ID49IHRyYW5zaXRpb24ucHJvZ3JhbS5lbmQpIHtcblx0XHRcdFx0dHJhbnNpdGlvbi5kb25lKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0cmFuc2l0aW9uLnBlbmRpbmcgJiYgbm93ID49IHRyYW5zaXRpb24ucGVuZGluZy5zdGFydCkge1xuXHRcdFx0XHR0cmFuc2l0aW9uLnN0YXJ0KHRyYW5zaXRpb24ucGVuZGluZyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0cmFuc2l0aW9uLnJ1bm5pbmcpIHtcblx0XHRcdFx0dHJhbnNpdGlvbi51cGRhdGUobm93KTtcblx0XHRcdFx0dGhpcy5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSBpZiAoIXRyYW5zaXRpb24ucGVuZGluZykge1xuXHRcdFx0XHR0aGlzLnRyYW5zaXRpb25zLnNwbGljZShpLCAxKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodGhpcy5ydW5uaW5nKSB7XG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5ib3VuZCk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLnN0eWxlc2hlZXQpIHtcblx0XHRcdGxldCBpID0gdGhpcy5zdHlsZXNoZWV0LmNzc1J1bGVzLmxlbmd0aDtcblx0XHRcdHdoaWxlIChpLS0pIHRoaXMuc3R5bGVzaGVldC5kZWxldGVSdWxlKGkpO1xuXHRcdFx0dGhpcy5hY3RpdmVSdWxlcyA9IHt9O1xuXHRcdH1cblx0fSxcblxuXHRkZWxldGVSdWxlKG5vZGUsIG5hbWUpIHtcblx0XHRub2RlLnN0eWxlLmFuaW1hdGlvbiA9IG5vZGUuc3R5bGUuYW5pbWF0aW9uXG5cdFx0XHQuc3BsaXQoJywgJylcblx0XHRcdC5maWx0ZXIoYW5pbSA9PiBhbmltICYmIGFuaW0uaW5kZXhPZihuYW1lKSA9PT0gLTEpXG5cdFx0XHQuam9pbignLCAnKTtcblx0fSxcblxuXHRncm91cE91dHJvcygpIHtcblx0XHR0aGlzLm91dHJvcyA9IHtcblx0XHRcdHJlbWFpbmluZzogMCxcblx0XHRcdGNhbGxiYWNrczogW11cblx0XHR9O1xuXHR9XG59O1xuXG5mdW5jdGlvbiBoYW5kbGVQcm9taXNlKHByb21pc2UsIGluZm8pIHtcblx0dmFyIHRva2VuID0gaW5mby50b2tlbiA9IHt9O1xuXG5cdGZ1bmN0aW9uIHVwZGF0ZSh0eXBlLCBpbmRleCwga2V5LCB2YWx1ZSkge1xuXHRcdGlmIChpbmZvLnRva2VuICE9PSB0b2tlbikgcmV0dXJuO1xuXG5cdFx0aW5mby5yZXNvbHZlZCA9IGtleSAmJiB7IFtrZXldOiB2YWx1ZSB9O1xuXG5cdFx0Y29uc3QgY2hpbGRfY3R4ID0gYXNzaWduKGFzc2lnbih7fSwgaW5mby5jdHgpLCBpbmZvLnJlc29sdmVkKTtcblx0XHRjb25zdCBibG9jayA9IHR5cGUgJiYgKGluZm8uY3VycmVudCA9IHR5cGUpKGluZm8uY29tcG9uZW50LCBjaGlsZF9jdHgpO1xuXG5cdFx0aWYgKGluZm8uYmxvY2spIHtcblx0XHRcdGlmIChpbmZvLmJsb2Nrcykge1xuXHRcdFx0XHRpbmZvLmJsb2Nrcy5mb3JFYWNoKChibG9jaywgaSkgPT4ge1xuXHRcdFx0XHRcdGlmIChpICE9PSBpbmRleCAmJiBibG9jaykge1xuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbk1hbmFnZXIuZ3JvdXBPdXRyb3MoKTtcblx0XHRcdFx0XHRcdGJsb2NrLm8oKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRibG9jay5kKDEpO1xuXHRcdFx0XHRcdFx0XHRpbmZvLmJsb2Nrc1tpXSA9IG51bGw7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aW5mby5ibG9jay5kKDEpO1xuXHRcdFx0fVxuXG5cdFx0XHRibG9jay5jKCk7XG5cdFx0XHRibG9ja1tibG9jay5pID8gJ2knIDogJ20nXShpbmZvLm1vdW50KCksIGluZm8uYW5jaG9yKTtcblxuXHRcdFx0aW5mby5jb21wb25lbnQucm9vdC5zZXQoe30pOyAvLyBmbHVzaCBhbnkgaGFuZGxlcnMgdGhhdCB3ZXJlIGNyZWF0ZWRcblx0XHR9XG5cblx0XHRpbmZvLmJsb2NrID0gYmxvY2s7XG5cdFx0aWYgKGluZm8uYmxvY2tzKSBpbmZvLmJsb2Nrc1tpbmRleF0gPSBibG9jaztcblx0fVxuXG5cdGlmIChpc1Byb21pc2UocHJvbWlzZSkpIHtcblx0XHRwcm9taXNlLnRoZW4odmFsdWUgPT4ge1xuXHRcdFx0dXBkYXRlKGluZm8udGhlbiwgMSwgaW5mby52YWx1ZSwgdmFsdWUpO1xuXHRcdH0sIGVycm9yID0+IHtcblx0XHRcdHVwZGF0ZShpbmZvLmNhdGNoLCAyLCBpbmZvLmVycm9yLCBlcnJvcik7XG5cdFx0fSk7XG5cblx0XHQvLyBpZiB3ZSBwcmV2aW91c2x5IGhhZCBhIHRoZW4vY2F0Y2ggYmxvY2ssIGRlc3Ryb3kgaXRcblx0XHRpZiAoaW5mby5jdXJyZW50ICE9PSBpbmZvLnBlbmRpbmcpIHtcblx0XHRcdHVwZGF0ZShpbmZvLnBlbmRpbmcsIDApO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGlmIChpbmZvLmN1cnJlbnQgIT09IGluZm8udGhlbikge1xuXHRcdFx0dXBkYXRlKGluZm8udGhlbiwgMSwgaW5mby52YWx1ZSwgcHJvbWlzZSk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpbmZvLnJlc29sdmVkID0geyBbaW5mby52YWx1ZV06IHByb21pc2UgfTtcblx0fVxufVxuXG5mdW5jdGlvbiBkZXN0cm95QmxvY2soYmxvY2ssIGxvb2t1cCkge1xuXHRibG9jay5kKDEpO1xuXHRsb29rdXBbYmxvY2sua2V5XSA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIG91dHJvQW5kRGVzdHJveUJsb2NrKGJsb2NrLCBsb29rdXApIHtcblx0YmxvY2subyhmdW5jdGlvbigpIHtcblx0XHRkZXN0cm95QmxvY2soYmxvY2ssIGxvb2t1cCk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVLZXllZEVhY2gob2xkX2Jsb2NrcywgY29tcG9uZW50LCBjaGFuZ2VkLCBnZXRfa2V5LCBkeW5hbWljLCBjdHgsIGxpc3QsIGxvb2t1cCwgbm9kZSwgaGFzX291dHJvLCBjcmVhdGVfZWFjaF9ibG9jaywgaW50cm9fbWV0aG9kLCBuZXh0LCBnZXRfY29udGV4dCkge1xuXHR2YXIgbyA9IG9sZF9ibG9ja3MubGVuZ3RoO1xuXHR2YXIgbiA9IGxpc3QubGVuZ3RoO1xuXG5cdHZhciBpID0gbztcblx0dmFyIG9sZF9pbmRleGVzID0ge307XG5cdHdoaWxlIChpLS0pIG9sZF9pbmRleGVzW29sZF9ibG9ja3NbaV0ua2V5XSA9IGk7XG5cblx0dmFyIG5ld19ibG9ja3MgPSBbXTtcblx0dmFyIG5ld19sb29rdXAgPSB7fTtcblx0dmFyIGRlbHRhcyA9IHt9O1xuXG5cdHZhciBpID0gbjtcblx0d2hpbGUgKGktLSkge1xuXHRcdHZhciBjaGlsZF9jdHggPSBnZXRfY29udGV4dChjdHgsIGxpc3QsIGkpO1xuXHRcdHZhciBrZXkgPSBnZXRfa2V5KGNoaWxkX2N0eCk7XG5cdFx0dmFyIGJsb2NrID0gbG9va3VwW2tleV07XG5cblx0XHRpZiAoIWJsb2NrKSB7XG5cdFx0XHRibG9jayA9IGNyZWF0ZV9lYWNoX2Jsb2NrKGNvbXBvbmVudCwga2V5LCBjaGlsZF9jdHgpO1xuXHRcdFx0YmxvY2suYygpO1xuXHRcdH0gZWxzZSBpZiAoZHluYW1pYykge1xuXHRcdFx0YmxvY2sucChjaGFuZ2VkLCBjaGlsZF9jdHgpO1xuXHRcdH1cblxuXHRcdG5ld19ibG9ja3NbaV0gPSBuZXdfbG9va3VwW2tleV0gPSBibG9jaztcblxuXHRcdGlmIChrZXkgaW4gb2xkX2luZGV4ZXMpIGRlbHRhc1trZXldID0gTWF0aC5hYnMoaSAtIG9sZF9pbmRleGVzW2tleV0pO1xuXHR9XG5cblx0dmFyIHdpbGxfbW92ZSA9IHt9O1xuXHR2YXIgZGlkX21vdmUgPSB7fTtcblxuXHR2YXIgZGVzdHJveSA9IGhhc19vdXRybyA/IG91dHJvQW5kRGVzdHJveUJsb2NrIDogZGVzdHJveUJsb2NrO1xuXHRpZiAoaGFzX291dHJvKSB0cmFuc2l0aW9uTWFuYWdlci5ncm91cE91dHJvcygpO1xuXG5cdGZ1bmN0aW9uIGluc2VydChibG9jaykge1xuXHRcdGJsb2NrW2ludHJvX21ldGhvZF0obm9kZSwgbmV4dCk7XG5cdFx0bG9va3VwW2Jsb2NrLmtleV0gPSBibG9jaztcblx0XHRuZXh0ID0gYmxvY2suZmlyc3Q7XG5cdFx0bi0tO1xuXHR9XG5cblx0d2hpbGUgKG8gJiYgbikge1xuXHRcdHZhciBuZXdfYmxvY2sgPSBuZXdfYmxvY2tzW24gLSAxXTtcblx0XHR2YXIgb2xkX2Jsb2NrID0gb2xkX2Jsb2Nrc1tvIC0gMV07XG5cdFx0dmFyIG5ld19rZXkgPSBuZXdfYmxvY2sua2V5O1xuXHRcdHZhciBvbGRfa2V5ID0gb2xkX2Jsb2NrLmtleTtcblxuXHRcdGlmIChuZXdfYmxvY2sgPT09IG9sZF9ibG9jaykge1xuXHRcdFx0Ly8gZG8gbm90aGluZ1xuXHRcdFx0bmV4dCA9IG5ld19ibG9jay5maXJzdDtcblx0XHRcdG8tLTtcblx0XHRcdG4tLTtcblx0XHR9XG5cblx0XHRlbHNlIGlmICghbmV3X2xvb2t1cFtvbGRfa2V5XSkge1xuXHRcdFx0Ly8gcmVtb3ZlIG9sZCBibG9ja1xuXHRcdFx0ZGVzdHJveShvbGRfYmxvY2ssIGxvb2t1cCk7XG5cdFx0XHRvLS07XG5cdFx0fVxuXG5cdFx0ZWxzZSBpZiAoIWxvb2t1cFtuZXdfa2V5XSB8fCB3aWxsX21vdmVbbmV3X2tleV0pIHtcblx0XHRcdGluc2VydChuZXdfYmxvY2spO1xuXHRcdH1cblxuXHRcdGVsc2UgaWYgKGRpZF9tb3ZlW29sZF9rZXldKSB7XG5cdFx0XHRvLS07XG5cblx0XHR9IGVsc2UgaWYgKGRlbHRhc1tuZXdfa2V5XSA+IGRlbHRhc1tvbGRfa2V5XSkge1xuXHRcdFx0ZGlkX21vdmVbbmV3X2tleV0gPSB0cnVlO1xuXHRcdFx0aW5zZXJ0KG5ld19ibG9jayk7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0d2lsbF9tb3ZlW29sZF9rZXldID0gdHJ1ZTtcblx0XHRcdG8tLTtcblx0XHR9XG5cdH1cblxuXHR3aGlsZSAoby0tKSB7XG5cdFx0dmFyIG9sZF9ibG9jayA9IG9sZF9ibG9ja3Nbb107XG5cdFx0aWYgKCFuZXdfbG9va3VwW29sZF9ibG9jay5rZXldKSBkZXN0cm95KG9sZF9ibG9jaywgbG9va3VwKTtcblx0fVxuXG5cdHdoaWxlIChuKSBpbnNlcnQobmV3X2Jsb2Nrc1tuIC0gMV0pO1xuXG5cdHJldHVybiBuZXdfYmxvY2tzO1xufVxuXG5mdW5jdGlvbiBnZXRTcHJlYWRVcGRhdGUobGV2ZWxzLCB1cGRhdGVzKSB7XG5cdHZhciB1cGRhdGUgPSB7fTtcblxuXHR2YXIgdG9fbnVsbF9vdXQgPSB7fTtcblx0dmFyIGFjY291bnRlZF9mb3IgPSB7fTtcblxuXHR2YXIgaSA9IGxldmVscy5sZW5ndGg7XG5cdHdoaWxlIChpLS0pIHtcblx0XHR2YXIgbyA9IGxldmVsc1tpXTtcblx0XHR2YXIgbiA9IHVwZGF0ZXNbaV07XG5cblx0XHRpZiAobikge1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIG8pIHtcblx0XHRcdFx0aWYgKCEoa2V5IGluIG4pKSB0b19udWxsX291dFtrZXldID0gMTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yICh2YXIga2V5IGluIG4pIHtcblx0XHRcdFx0aWYgKCFhY2NvdW50ZWRfZm9yW2tleV0pIHtcblx0XHRcdFx0XHR1cGRhdGVba2V5XSA9IG5ba2V5XTtcblx0XHRcdFx0XHRhY2NvdW50ZWRfZm9yW2tleV0gPSAxO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGxldmVsc1tpXSA9IG47XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAodmFyIGtleSBpbiBvKSB7XG5cdFx0XHRcdGFjY291bnRlZF9mb3Jba2V5XSA9IDE7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Zm9yICh2YXIga2V5IGluIHRvX251bGxfb3V0KSB7XG5cdFx0aWYgKCEoa2V5IGluIHVwZGF0ZSkpIHVwZGF0ZVtrZXldID0gdW5kZWZpbmVkO1xuXHR9XG5cblx0cmV0dXJuIHVwZGF0ZTtcbn1cblxuZnVuY3Rpb24gc3ByZWFkKGFyZ3MpIHtcblx0Y29uc3QgYXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oe30sIC4uLmFyZ3MpO1xuXHRsZXQgc3RyID0gJyc7XG5cblx0T2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChuYW1lID0+IHtcblx0XHRjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG5cdFx0aWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybjtcblx0XHRpZiAodmFsdWUgPT09IHRydWUpIHN0ciArPSBcIiBcIiArIG5hbWU7XG5cdFx0c3RyICs9IFwiIFwiICsgbmFtZSArIFwiPVwiICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuXHR9KTtcblxuXHRyZXR1cm4gc3RyO1xufVxuXG5jb25zdCBlc2NhcGVkID0ge1xuXHQnXCInOiAnJnF1b3Q7Jyxcblx0XCInXCI6ICcmIzM5OycsXG5cdCcmJzogJyZhbXA7Jyxcblx0JzwnOiAnJmx0OycsXG5cdCc+JzogJyZndDsnXG59O1xuXG5mdW5jdGlvbiBlc2NhcGUoaHRtbCkge1xuXHRyZXR1cm4gU3RyaW5nKGh0bWwpLnJlcGxhY2UoL1tcIicmPD5dL2csIG1hdGNoID0+IGVzY2FwZWRbbWF0Y2hdKTtcbn1cblxuZnVuY3Rpb24gZWFjaChpdGVtcywgYXNzaWduLCBmbikge1xuXHRsZXQgc3RyID0gJyc7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRzdHIgKz0gZm4oYXNzaWduKGl0ZW1zW2ldLCBpKSk7XG5cdH1cblx0cmV0dXJuIHN0cjtcbn1cblxuY29uc3QgbWlzc2luZ0NvbXBvbmVudCA9IHtcblx0X3JlbmRlcjogKCkgPT4gJydcbn07XG5cbmZ1bmN0aW9uIGJsYW5rT2JqZWN0KCkge1xuXHRyZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsKTtcbn1cblxuZnVuY3Rpb24gZGVzdHJveShkZXRhY2gpIHtcblx0dGhpcy5kZXN0cm95ID0gbm9vcDtcblx0dGhpcy5maXJlKCdkZXN0cm95Jyk7XG5cdHRoaXMuc2V0ID0gbm9vcDtcblxuXHR0aGlzLl9mcmFnbWVudC5kKGRldGFjaCAhPT0gZmFsc2UpO1xuXHR0aGlzLl9mcmFnbWVudCA9IG51bGw7XG5cdHRoaXMuX3N0YXRlID0ge307XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3lEZXYoZGV0YWNoKSB7XG5cdGRlc3Ryb3kuY2FsbCh0aGlzLCBkZXRhY2gpO1xuXHR0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLndhcm4oJ0NvbXBvbmVudCB3YXMgYWxyZWFkeSBkZXN0cm95ZWQnKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gX2RpZmZlcnMoYSwgYikge1xuXHRyZXR1cm4gYSAhPSBhID8gYiA9PSBiIDogYSAhPT0gYiB8fCAoKGEgJiYgdHlwZW9mIGEgPT09ICdvYmplY3QnKSB8fCB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5cbmZ1bmN0aW9uIF9kaWZmZXJzSW1tdXRhYmxlKGEsIGIpIHtcblx0cmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGI7XG59XG5cbmZ1bmN0aW9uIGZpcmUoZXZlbnROYW1lLCBkYXRhKSB7XG5cdHZhciBoYW5kbGVycyA9XG5cdFx0ZXZlbnROYW1lIGluIHRoaXMuX2hhbmRsZXJzICYmIHRoaXMuX2hhbmRsZXJzW2V2ZW50TmFtZV0uc2xpY2UoKTtcblx0aWYgKCFoYW5kbGVycykgcmV0dXJuO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgaGFuZGxlcnMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHR2YXIgaGFuZGxlciA9IGhhbmRsZXJzW2ldO1xuXG5cdFx0aWYgKCFoYW5kbGVyLl9fY2FsbGluZykge1xuXHRcdFx0aGFuZGxlci5fX2NhbGxpbmcgPSB0cnVlO1xuXHRcdFx0aGFuZGxlci5jYWxsKHRoaXMsIGRhdGEpO1xuXHRcdFx0aGFuZGxlci5fX2NhbGxpbmcgPSBmYWxzZTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0KCkge1xuXHRyZXR1cm4gdGhpcy5fc3RhdGU7XG59XG5cbmZ1bmN0aW9uIGluaXQoY29tcG9uZW50LCBvcHRpb25zKSB7XG5cdGNvbXBvbmVudC5faGFuZGxlcnMgPSBibGFua09iamVjdCgpO1xuXHRjb21wb25lbnQuX2JpbmQgPSBvcHRpb25zLl9iaW5kO1xuXG5cdGNvbXBvbmVudC5vcHRpb25zID0gb3B0aW9ucztcblx0Y29tcG9uZW50LnJvb3QgPSBvcHRpb25zLnJvb3QgfHwgY29tcG9uZW50O1xuXHRjb21wb25lbnQuc3RvcmUgPSBjb21wb25lbnQucm9vdC5zdG9yZSB8fCBvcHRpb25zLnN0b3JlO1xufVxuXG5mdW5jdGlvbiBvbihldmVudE5hbWUsIGhhbmRsZXIpIHtcblx0dmFyIGhhbmRsZXJzID0gdGhpcy5faGFuZGxlcnNbZXZlbnROYW1lXSB8fCAodGhpcy5faGFuZGxlcnNbZXZlbnROYW1lXSA9IFtdKTtcblx0aGFuZGxlcnMucHVzaChoYW5kbGVyKTtcblxuXHRyZXR1cm4ge1xuXHRcdGNhbmNlbDogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaW5kZXggPSBoYW5kbGVycy5pbmRleE9mKGhhbmRsZXIpO1xuXHRcdFx0aWYgKH5pbmRleCkgaGFuZGxlcnMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIHJ1bihmbikge1xuXHRmbigpO1xufVxuXG5mdW5jdGlvbiBzZXQobmV3U3RhdGUpIHtcblx0dGhpcy5fc2V0KGFzc2lnbih7fSwgbmV3U3RhdGUpKTtcblx0aWYgKHRoaXMucm9vdC5fbG9jaykgcmV0dXJuO1xuXHR0aGlzLnJvb3QuX2xvY2sgPSB0cnVlO1xuXHRjYWxsQWxsKHRoaXMucm9vdC5fYmVmb3JlY3JlYXRlKTtcblx0Y2FsbEFsbCh0aGlzLnJvb3QuX29uY3JlYXRlKTtcblx0Y2FsbEFsbCh0aGlzLnJvb3QuX2FmdGVyY3JlYXRlKTtcblx0dGhpcy5yb290Ll9sb2NrID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIF9zZXQobmV3U3RhdGUpIHtcblx0dmFyIG9sZFN0YXRlID0gdGhpcy5fc3RhdGUsXG5cdFx0Y2hhbmdlZCA9IHt9LFxuXHRcdGRpcnR5ID0gZmFsc2U7XG5cblx0Zm9yICh2YXIga2V5IGluIG5ld1N0YXRlKSB7XG5cdFx0aWYgKHRoaXMuX2RpZmZlcnMobmV3U3RhdGVba2V5XSwgb2xkU3RhdGVba2V5XSkpIGNoYW5nZWRba2V5XSA9IGRpcnR5ID0gdHJ1ZTtcblx0fVxuXHRpZiAoIWRpcnR5KSByZXR1cm47XG5cblx0dGhpcy5fc3RhdGUgPSBhc3NpZ24oYXNzaWduKHt9LCBvbGRTdGF0ZSksIG5ld1N0YXRlKTtcblx0dGhpcy5fcmVjb21wdXRlKGNoYW5nZWQsIHRoaXMuX3N0YXRlKTtcblx0aWYgKHRoaXMuX2JpbmQpIHRoaXMuX2JpbmQoY2hhbmdlZCwgdGhpcy5fc3RhdGUpO1xuXG5cdGlmICh0aGlzLl9mcmFnbWVudCkge1xuXHRcdHRoaXMuZmlyZShcInN0YXRlXCIsIHsgY2hhbmdlZDogY2hhbmdlZCwgY3VycmVudDogdGhpcy5fc3RhdGUsIHByZXZpb3VzOiBvbGRTdGF0ZSB9KTtcblx0XHR0aGlzLl9mcmFnbWVudC5wKGNoYW5nZWQsIHRoaXMuX3N0YXRlKTtcblx0XHR0aGlzLmZpcmUoXCJ1cGRhdGVcIiwgeyBjaGFuZ2VkOiBjaGFuZ2VkLCBjdXJyZW50OiB0aGlzLl9zdGF0ZSwgcHJldmlvdXM6IG9sZFN0YXRlIH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHNldERldihuZXdTdGF0ZSkge1xuXHRpZiAodHlwZW9mIG5ld1N0YXRlICE9PSAnb2JqZWN0Jykge1xuXHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdHRoaXMuX2RlYnVnTmFtZSArICcuc2V0IHdhcyBjYWxsZWQgd2l0aG91dCBhbiBvYmplY3Qgb2YgZGF0YSBrZXktdmFsdWVzIHRvIHVwZGF0ZS4nXG5cdFx0KTtcblx0fVxuXG5cdHRoaXMuX2NoZWNrUmVhZE9ubHkobmV3U3RhdGUpO1xuXHRzZXQuY2FsbCh0aGlzLCBuZXdTdGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxBbGwoZm5zKSB7XG5cdHdoaWxlIChmbnMgJiYgZm5zLmxlbmd0aCkgZm5zLnNoaWZ0KCkoKTtcbn1cblxuZnVuY3Rpb24gX21vdW50KHRhcmdldCwgYW5jaG9yKSB7XG5cdHRoaXMuX2ZyYWdtZW50W3RoaXMuX2ZyYWdtZW50LmkgPyAnaScgOiAnbSddKHRhcmdldCwgYW5jaG9yIHx8IG51bGwpO1xufVxuXG52YXIgUEVORElORyA9IHt9O1xudmFyIFNVQ0NFU1MgPSB7fTtcbnZhciBGQUlMVVJFID0ge307XG5cbmZ1bmN0aW9uIHJlbW92ZUZyb21TdG9yZSgpIHtcblx0dGhpcy5zdG9yZS5fcmVtb3ZlKHRoaXMpO1xufVxuXG52YXIgcHJvdG8gPSB7XG5cdGRlc3Ryb3ksXG5cdGdldCxcblx0ZmlyZSxcblx0b24sXG5cdHNldCxcblx0X3JlY29tcHV0ZTogbm9vcCxcblx0X3NldCxcblx0X21vdW50LFxuXHRfZGlmZmVyc1xufTtcblxudmFyIHByb3RvRGV2ID0ge1xuXHRkZXN0cm95OiBkZXN0cm95RGV2LFxuXHRnZXQsXG5cdGZpcmUsXG5cdG9uLFxuXHRzZXQ6IHNldERldixcblx0X3JlY29tcHV0ZTogbm9vcCxcblx0X3NldCxcblx0X21vdW50LFxuXHRfZGlmZmVyc1xufTtcblxuZXhwb3J0IHsgYmxhbmtPYmplY3QsIGRlc3Ryb3ksIGRlc3Ryb3lEZXYsIF9kaWZmZXJzLCBfZGlmZmVyc0ltbXV0YWJsZSwgZmlyZSwgZ2V0LCBpbml0LCBvbiwgcnVuLCBzZXQsIF9zZXQsIHNldERldiwgY2FsbEFsbCwgX21vdW50LCBQRU5ESU5HLCBTVUNDRVNTLCBGQUlMVVJFLCByZW1vdmVGcm9tU3RvcmUsIHByb3RvLCBwcm90b0RldiwgaGFuZGxlUHJvbWlzZSwgYXBwZW5kTm9kZSwgaW5zZXJ0Tm9kZSwgZGV0YWNoTm9kZSwgZGV0YWNoQmV0d2VlbiwgZGV0YWNoQmVmb3JlLCBkZXRhY2hBZnRlciwgcmVpbnNlcnRCZXR3ZWVuLCByZWluc2VydENoaWxkcmVuLCByZWluc2VydEFmdGVyLCByZWluc2VydEJlZm9yZSwgZGVzdHJveUVhY2gsIGNyZWF0ZUZyYWdtZW50LCBjcmVhdGVFbGVtZW50LCBjcmVhdGVTdmdFbGVtZW50LCBjcmVhdGVUZXh0LCBjcmVhdGVDb21tZW50LCBhZGRMaXN0ZW5lciwgcmVtb3ZlTGlzdGVuZXIsIHNldEF0dHJpYnV0ZSwgc2V0QXR0cmlidXRlcywgcmVtb3ZlQXR0cmlidXRlLCBzZXRYbGlua0F0dHJpYnV0ZSwgZ2V0QmluZGluZ0dyb3VwVmFsdWUsIHRvTnVtYmVyLCB0aW1lUmFuZ2VzVG9BcnJheSwgY2hpbGRyZW4sIGNsYWltRWxlbWVudCwgY2xhaW1UZXh0LCBzZXRJbnB1dFR5cGUsIHNldFN0eWxlLCBzZWxlY3RPcHRpb24sIHNlbGVjdE9wdGlvbnMsIHNlbGVjdFZhbHVlLCBzZWxlY3RNdWx0aXBsZVZhbHVlLCBhZGRSZXNpemVMaXN0ZW5lciwgZGVzdHJveUJsb2NrLCBvdXRyb0FuZERlc3Ryb3lCbG9jaywgdXBkYXRlS2V5ZWRFYWNoLCBnZXRTcHJlYWRVcGRhdGUsIHNwcmVhZCwgZXNjYXBlZCwgZXNjYXBlLCBlYWNoLCBtaXNzaW5nQ29tcG9uZW50LCBsaW5lYXIsIGdlbmVyYXRlUnVsZSwgaGFzaCwgd3JhcFRyYW5zaXRpb24sIHRyYW5zaXRpb25NYW5hZ2VyLCBub29wLCBhc3NpZ24sIGFzc2lnblRydWUsIGlzUHJvbWlzZSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3ZlbHRlL3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQXBwIGZyb20gJy4vYXBwJztcblxubmV3IEFwcCh7IHRhcmdldDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpIH0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2luZGV4LmpzIiwiPGRpdiBjbGFzcz1cImZvcm0tYm94XCI+XG5cdDxZZWFyTW9udGhQaWNrZXIgcmVmOnBpY2tlcj48L1llYXJNb250aFBpY2tlcj5cblx0PEZvcm0gcmVmOmZvcm0+PC9Gb3JtPlxuPC9kaXY+XG48VGFibGUgcmVmOnRhYmxlPjwvVGFibGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgWWVhck1vbnRoUGlja2VyIGZyb20gJy4uL3llYXItbW9udGgtcGlja2VyJztcbmltcG9ydCBGb3JtIGZyb20gJy4uL2Zvcm0nO1xuaW1wb3J0IFRhYmxlIGZyb20gJy4uL3RhYmxlJztcbmltcG9ydCB7R3JvdXBzLCBFeHBlbnNlc30gZnJvbSAnLi4vZGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0ZGF0YSAoKSB7IHJldHVybiB7fTsgfSxcblx0Y29tcG9uZW50czogeyBGb3JtLCBUYWJsZSwgWWVhck1vbnRoUGlja2VyIH0sXG5cdG9uY3JlYXRlICgpIHtcblx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnN1YnN0cigwLCA3KTtcblx0XHRHcm91cHMuZ2V0KCkudGhlbihncm91cHMgPT4gdGhpcy5yZWZzLmZvcm0uc2V0KHsgZGF0ZSwgZ3JvdXBzIH0pKTtcblx0XHR0aGlzLmxvYWRUYWJsZShkYXRlKTtcblxuXHRcdHRoaXMucmVmcy5mb3JtLm9uKCdjaGFuZ2UnLCB0aGlzLm9uRm9ybUNoYW5nZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnJlZnMuZm9ybS5vbigncmVtb3ZlJywgdGhpcy5vblJlbW92ZUl0ZW0uYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5yZWZzLmZvcm0ub24oJ3N1Ym1pdCcsIHRoaXMub25Gb3JtU3VibWl0LmJpbmQodGhpcykpO1xuXHRcdHRoaXMucmVmcy5mb3JtLm9uKCdlcnJvcicsIHRoaXMub25Gb3JtRXJyb3IuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5yZWZzLnBpY2tlci5vbignY2hhbmdlJywgdGhpcy5vbkRhdGVDaGFuZ2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5yZWZzLnRhYmxlLm9uKCdjbGljaycsIHRoaXMub25UYWJsZUNsaWNrLmJpbmQodGhpcykpO1xuXHR9LFxuXG5cdG1ldGhvZHM6IHtcblx0XHRsb2FkVGFibGUgKGRhdGUpIHtcblx0XHRcdGlmICghZGF0ZSkgZGF0ZSA9IHRoaXMubGFzdERhdGU7XG5cdFx0XHRlbHNlIHRoaXMubGFzdERhdGUgPSBkYXRlO1xuXHRcdFx0RXhwZW5zZXMuZ2V0KGRhdGUpLnRoZW4oZGF0YSA9PiB7XG5cdFx0XHRcdHRoaXMubGFzdFRhYmxlRGF0YSA9IGRhdGE7XG5cdFx0XHRcdHRoaXMucmVmcy50YWJsZS5zZXQoeyBkYXRhIH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdG9uRGF0ZUNoYW5nZSAoZGF0ZSkge1xuXHRcdFx0dGhpcy5yZWZzLmZvcm0uc2V0KHsgZGF0ZTogZGF0ZS5kYXRlU3RyIH0pO1xuXHRcdFx0dGhpcy5sb2FkVGFibGUoZGF0ZS5kYXRlU3RyKTtcblx0XHR9LFxuXG5cdFx0b25Gb3JtQ2hhbmdlIChkYXRhKSB7XG5cdFx0XHRpZiAoIWRhdGEubGVuZ3RoKSB0aGlzLnJlZnMudGFibGUuc2V0KHsgZGF0YTogdGhpcy5sYXN0VGFibGVEYXRhIH0pO1xuXHRcdFx0ZWxzZSB0aGlzLnJlZnMudGFibGUuc2V0KHsgZGF0YSB9KTtcblx0XHR9LFxuXG5cdFx0b25Gb3JtU3VibWl0IChkYXRhKSB7XG5cdFx0XHRFeHBlbnNlcy5zYXZlKGRhdGEpLnRoZW4oKCkgPT4gdGhpcy5sb2FkVGFibGUoKSk7XG5cdFx0fSxcblxuXHRcdG9uUmVtb3ZlSXRlbSAoaXRlbSkge1xuXHRcdFx0RXhwZW5zZXMuZGVsKGl0ZW0uaWQpLnRoZW4oKCkgPT4gdGhpcy5sb2FkVGFibGUoKSk7XG5cdFx0fSxcblxuXHRcdG9uRm9ybUVycm9yIChlcnIpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycik7XHQvLyBUT0RPOiB0b2FzdD9cblx0XHR9LFxuXG5cdFx0b25UYWJsZUNsaWNrIChpdGVtKSB7IHRoaXMucmVmcy5mb3JtLmVkaXQoaXRlbSk7IH0sXG5cdH1cbn07XG5cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2FwcC9pbmRleC5odG1sIiwiPGRpdiBjbGFzcz1cInllYXItbW9udGgtcGlja2VyIHtpc1RvZGF5ID8gJ2lzLXRvZGF5JzogJyd9XCIgb246d2hlZWw9XCJvbndoZWVsKGV2ZW50KVwiPlxuXHQ8YnV0dG9uIHJlZjpsZWZ0QnV0dG9uIGNsYXNzPVwiYnRuLXByZXZcIiB0aXRsZT1cIlByZXZpb3VzIG1vbnRoXCJcblx0XHRvbjprZXlkb3duPVwia2V5ZG93bihldmVudC5rZXksIC0xKVwiXG5cdFx0b246a2V5dXA9XCJrZXl1cChldmVudC5rZXkpXCJcblx0XHRvbjptb3VzZWRvd249XCJ0aWNrKC0xKVwiXG5cdFx0b246bW91c2VvdXQ9XCJtdXAoKVwiXG5cdFx0b246bW91c2V1cD1cIm11cCgpXCI+PGkgY2xhc3M9XCJpb24taW9zLWFycm93LWJhY2tcIj48L2k+PC9idXR0b24+XG5cblx0PHNwYW4gY2xhc3M9XCJkYXlcIj57bW9udGhzW21vbnRoXX0ge3llYXJ9PC9zcGFuPlxuXG5cdDxidXR0b24gcmVmOnJpZ2h0QnV0dG9uIGNsYXNzPVwiYnRuLW5leHRcIiB0aXRsZT1cIk5leHQgbW9udGhcIlxuXHRcdG9uOmtleWRvd249XCJrZXlkb3duKGV2ZW50LmtleSwgMSlcIlxuXHRcdG9uOmtleXVwPVwia2V5dXAoZXZlbnQua2V5KVwiXG5cdFx0b246bW91c2Vkb3duPVwidGljaygxKVwiXG5cdFx0b246bW91c2VvdXQ9XCJtdXAoKVwiXG5cdFx0b246bW91c2V1cD1cIm11cCgpXCI+PGkgY2xhc3M9XCJpb24taW9zLWFycm93LWZvcndhcmRcIj48L2k+PC9idXR0b24+XG5cblx0PGJ1dHRvbiB0aXRsZT1cIlRvZGF5XCIgY2xhc3M9XCJidG4tdG9kYXlcIiBvbjpjbGljaz1cInJlc2V0KClcIj48aSBjbGFzcz1cImlvbi1tZC11bmRvXCI+PC9pPjwvYnV0dG9uPlxuPC9kaXY+XG5cbjxzY3JpcHQ+XG5mdW5jdGlvbiB6ZXJvU3RhdGUgKCkge1xuXHRjb25zdCBkID0gbmV3IERhdGUoKTtcblx0Y29uc3QgbW9udGggPSBkLmdldE1vbnRoKCk7XG5cdGNvbnN0IHllYXIgPSBkLmdldEZ1bGxZZWFyKCk7XG5cdGNvbnN0IG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXTtcblx0cmV0dXJuIHsgbW9udGhzLCBtb250aCwgeWVhciwgY3VycmVudDogeyBtb250aCwgeWVhciB9IH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0ZGF0YSAoKSB7IHJldHVybiB6ZXJvU3RhdGUoKTsgfSxcblx0Y29tcHV0ZWQ6IHtcblx0XHRpc1RvZGF5OiAoe21vbnRoLCB5ZWFyLCBjdXJyZW50fSkgPT4gKG1vbnRoID09PSBjdXJyZW50Lm1vbnRoICYmIHllYXIgPT09IGN1cnJlbnQueWVhciksXG5cdFx0ZGF0ZVN0cjogKHttb250aCwgeWVhcn0pID0+IGAke3llYXJ9LSR7KCcwJyArIChtb250aCArIDEpKS5zdWJzdHIoLTIpfWBcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdG9ud2hlZWwgKGUpIHtcblx0XHRcdGNvbnN0IHRocmVzaG9sZCA9IDI7XG5cdFx0XHRsZXQgdmFsID0gbnVsbDtcblx0XHRcdGlmIChlLmRlbHRhWSA8IC10aHJlc2hvbGQpIHZhbCA9IC0xO1xuXHRcdFx0ZWxzZSBpZiAoZS5kZWx0YVkgPiB0aHJlc2hvbGQpIHZhbCA9IDE7XG5cdFx0XHRpZiAodmFsKSB0aGlzLndoZWVsVGhyb3R0bGUodmFsLCBmYWxzZSk7XG5cdFx0fSxcblxuXHRcdHdoZWVsVGhyb3R0bGUgKHZhbHVlKSB7XG5cdFx0XHRpZiAoIXRoaXMudGhyb3R0bGVyKSB7XG5cdFx0XHRcdHRoaXMuZ28odmFsdWUpO1xuXHRcdFx0XHR0aGlzLm5vdGlmeSgpO1xuXHRcdFx0XHR0aGlzLnRocm90dGxlciA9IHNldFRpbWVvdXQoKCkgPT4gKHRoaXMudGhyb3R0bGVyID0gbnVsbCksIDEwMCk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGtleXVwIChrZXkpIHtcblx0XHRcdHRoaXMua2V5SXNEb3duID0gZmFsc2U7XG5cdFx0XHRpZiAodGhpcy50aWNrZXIpIGNsZWFyVGltZW91dCh0aGlzLnRpY2tlcik7XG5cdFx0XHRpZiAoa2V5ID09PSAnICcgfHwga2V5ID09PSAnRW50ZXInIHx8XG5cdFx0XHRcdGtleSA9PT0gJ0Fycm93TGVmdCcgfHwga2V5ID09PSAnQXJyb3dSaWdodCcgfHxcblx0XHRcdFx0a2V5ID09PSAnQXJyb3dEb3duJyB8fCBrZXkgPT09ICdBcnJvd1VwJykgdGhpcy5ub3RpZnkoKTtcblx0XHR9LFxuXG5cdFx0a2V5ZG93biAoa2V5LCB2YWx1ZSkge1xuXHRcdFx0aWYgKHRoaXMua2V5SXNEb3duKSByZXR1cm47XG5cdFx0XHRpZiAoa2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBrZXkgPT09ICdBcnJvd0Rvd24nKSB7XG5cdFx0XHRcdHRoaXMucmVmcy5sZWZ0QnV0dG9uLmZvY3VzKCk7XG5cdFx0XHRcdHRoaXMua2V5SXNEb3duID0gdHJ1ZTtcblx0XHRcdFx0cmV0dXJuIHRoaXMudGljaygtMSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoa2V5ID09PSAnQXJyb3dSaWdodCcgfHwga2V5ID09PSAnQXJyb3dVcCcpIHtcblx0XHRcdFx0dGhpcy5yZWZzLnJpZ2h0QnV0dG9uLmZvY3VzKCk7XG5cdFx0XHRcdHRoaXMua2V5SXNEb3duID0gdHJ1ZTtcblx0XHRcdFx0cmV0dXJuIHRoaXMudGljaygxKTtcblx0XHRcdH1cblx0XHRcdGlmIChrZXkgPT09ICcgJyB8fCBrZXkgPT09ICdFbnRlcicpIHtcblx0XHRcdFx0dGhpcy5rZXlJc0Rvd24gPSB0cnVlO1xuXHRcdFx0XHR0aGlzLnRpY2sodmFsdWUpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRtdXAgKCkge1xuXHRcdFx0aWYgKHRoaXMudGlja2VyKSBjbGVhclRpbWVvdXQodGhpcy50aWNrZXIpO1xuXHRcdFx0aWYgKHRoaXMubW91c2VJc0Rvd24pIHRoaXMubm90aWZ5KCk7XG5cdFx0XHR0aGlzLm1vdXNlSXNEb3duID0gZmFsc2U7XG5cdFx0fSxcblxuXHRcdHRpY2sgKHZhbHVlLCBkZWxheSA9IDMwMCkge1xuXHRcdFx0aWYgKHRoaXMudGlja2VyKSBjbGVhclRpbWVvdXQodGhpcy50aWNrZXIpO1xuXHRcdFx0dGhpcy5nbyh2YWx1ZSk7XG5cdFx0XHRpZiAodGhpcy5nZXQoKS5pc1RvZGF5KSByZXR1cm4gdGhpcy5ub3RpZnkoKTtcblx0XHRcdHRoaXMubW91c2VJc0Rvd24gPSB0cnVlO1xuXHRcdFx0dGhpcy50aWNrZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0ZGVsYXkgPSBNYXRoLm1heCg2MCwgZGVsYXkgLSA0MCk7XG5cdFx0XHRcdHRoaXMudGljayh2YWx1ZSwgZGVsYXkpO1xuXHRcdFx0fSwgZGVsYXkpO1xuXHRcdH0sXG5cblx0XHRnbyAodmFsdWUpIHtcblx0XHRcdGxldCB7bW9udGgsIHllYXJ9ID0gdGhpcy5nZXQoKTtcblx0XHRcdG1vbnRoICs9IHZhbHVlO1xuXHRcdFx0aWYgKG1vbnRoIDwgMCkgeyBtb250aCA9IDExOyB5ZWFyIC09IDE7IH1cblx0XHRcdGVsc2UgaWYgKG1vbnRoID4gMTEpIHsgbW9udGggPSAwOyB5ZWFyICs9IDE7IH1cblx0XHRcdHRoaXMuc2V0KHsgbW9udGgsIHllYXIgfSk7XG5cdFx0fSxcblxuXHRcdG5vdGlmeSAoKSB7XG5cdFx0XHRjb25zdCB7bW9udGgsIHllYXIsIGRhdGVTdHJ9ID0gdGhpcy5nZXQoKTtcblx0XHRcdHRoaXMuZmlyZSgnY2hhbmdlJywgeyBtb250aCwgeWVhciwgZGF0ZVN0ciB9KTtcblx0XHR9LFxuXG5cdFx0cmVzZXQgKCkge1xuXHRcdFx0dGhpcy5zZXQoemVyb1N0YXRlKCkpO1xuXHRcdFx0dGhpcy5ub3RpZnkoKTtcblx0XHR9XG5cdH1cbn07XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC95ZWFyLW1vbnRoLXBpY2tlci9pbmRleC5odG1sIiwiPGZvcm0gcmVmOmZvcm0gY2xhc3M9XCJmb3JtIHtpbkVkaXQgPyAnZWRpdCcgOiAnJ31cIiBvbjpzdWJtaXQ9XCJvbnN1Ym1pdChldmVudClcIj5cblx0PGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiaWRcIiBiaW5kOnZhbHVlPVwiaWRcIj5cblx0XHQ8dGV4dGFyZWEgYXV0b2ZvY3VzXG5cdFx0XHRyZWY6dGV4dGJveFxuXHRcdFx0dGFiaW5kZXg9XCIxXCJcblx0XHRcdHBsYWNlaG9sZGVyPVwiZS5nLiBUZXNjbyAxMi41MFwiXG5cdFx0XHRvbjppbnB1dD1cIm9uaW5wdXQodGhpcylcIlxuXHRcdFx0b246a2V5ZG93bj1cIm9ua2V5ZG93bihldmVudClcIlxuXHRcdFx0YmluZDp2YWx1ZT1cInRleHRcIj48L3RleHRhcmVhPlxuXHQ8L2Rpdj5cblx0PGRpdiBjbGFzcz1cImZvcm0tZm9vdGVyIGZvcm0tcm93XCI+XG5cdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCIzXCIgY2xhc3M9XCJidG4gYnRuLXJlc2V0XCIgb246Y2xpY2s9XCJyZXNldCgpXCI+Q2xlYXI8L2J1dHRvbj5cblx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB0YWJpbmRleD1cIjRcIiBjbGFzcz1cImJ0biBkYW5nZXIgYnRuLXJlbW92ZVwiIG9uOmNsaWNrPVwicmVtb3ZlKClcIj5SZW1vdmU8L2J1dHRvbj5cblx0XHQ8ZGl2IGNsYXNzPVwiZmxleC1maWxsZXJcIj48L2Rpdj5cblx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB0YWJpbmRleD1cIjNcIiBjbGFzcz1cImJ0biBidG4tY2FuY2VsXCIgb246Y2xpY2s9XCJyZXNldCgpXCI+Q2FuY2VsPC9idXR0b24+XG5cdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdGFiaW5kZXg9XCIyXCIgY2xhc3M9XCJidG4gc3VjY2VzcyBidG4tc2F2ZVwiPlNhdmU8L2J1dHRvbj5cblx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB0YWJpbmRleD1cIjJcIiBjbGFzcz1cImJ0biBzdWNjZXNzIGJ0bi1hZGRcIj5BZGQ8L2J1dHRvbj5cblx0PC9kaXY+XG48L2Zvcm0+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgUGFyc2VyIGZyb20gJy4vdGV4dC1wYXJzZXInO1xuXG5mdW5jdGlvbiBmb3JtYXROdW1iZXIgKG51bSkge1xuXHRudW0gPSBNYXRoLnJvdW5kKDAgKyBudW0gKiAxMDApIC8gMTAwO1xuXHRyZXR1cm4gbnVtLnRvTG9jYWxlU3RyaW5nKCdlbi1HQicsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0ZGF0YSAoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGluRWRpdDogZmFsc2UsXG5cdFx0XHRkYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDcpLFxuXHRcdFx0aWQ6IG51bGwsXG5cdFx0XHR0ZXh0OiAnVXRpbGl0aWVzIChlbGVjdHJpY2l0eSwgZ2FzLCBpbnRlcm5ldCkgc3BvdGlmeSAxMCcsXG5cdFx0XHRncm91cHM6IFtdLFxuXHRcdFx0cm93czogW10sXG5cdFx0fTtcblx0fSxcblx0Y29tcHV0ZWQ6IHtcblx0XHRfZ3JvdXBzICh7Z3JvdXBzfSkge1xuXHRcdFx0cmV0dXJuIGdyb3Vwcy5tYXAoZyA9PiB7XG5cdFx0XHRcdC8vIGNvbnN0IHN0ciA9IChnLm5hbWUgKyAnLCcgKyBnLmtleXdvcmRzKS50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsJyk7XG5cdFx0XHRcdGNvbnN0IGVzY2FwZWQgPSBnLm5hbWUucmVwbGFjZSgvWy1bXFxdL3t9KCkqKz8uXFxcXF4kfF0vZywgJ1xcXFwkJicpO1xuXHRcdFx0XHRnLl9uYW1lID0gbmV3IFJlZ0V4cChlc2NhcGVkLCAnaScpO1xuXHRcdFx0XHRyZXR1cm4gZztcblx0XHRcdH0pO1xuXHRcdH1cblx0fSxcblxuXHRtZXRob2RzOiB7XG5cdFx0b25pbnB1dCAoZWwpIHtcblx0XHRcdHRoaXMudG9nZ2xlQW1vdW50RXJyb3IoKTtcblx0XHRcdHRoaXMudXBkYXRlSGVpZ2h0KCk7XG5cblx0XHRcdC8vIFRPRE86IGRlYm91bmNlIHRoaXNcblx0XHRcdGNvbnN0IHJvd3MgPSBQYXJzZXIucGFyc2UoZWwudmFsdWUsIHRoaXMuZ2V0KCkpO1xuXHRcdFx0dGhpcy5zZXQoeyByb3dzIH0pO1xuXHRcdFx0dGhpcy5maXJlKCdjaGFuZ2UnLCByb3dzKTtcblx0XHR9LFxuXG5cdFx0b25rZXlkb3duIChlKSB7XG5cdFx0XHRpZiAoZS5rZXkgPT09ICdFbnRlcicgJiYgKGUubWV0YUtleSB8fCBlLmN0cmxLZXkpKSB0aGlzLm9uc3VibWl0KGUpO1xuXHRcdFx0ZWxzZSBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB0aGlzLnJlc2V0KGUpO1xuXHRcdH0sXG5cblx0XHRlZGl0IChkYXRhKSB7XG5cdFx0XHR0aGlzLnJlc2V0KCk7XG5cdFx0XHRjb25zdCB0ZXh0ID0gYCR7ZGF0YS5ncm91cC5uYW1lfSAke2RhdGEuZGVzY3JpcHRpb259ICR7Zm9ybWF0TnVtYmVyKGRhdGEuYW1vdW50KX1gO1xuXHRcdFx0dGhpcy5zZXQoeyBpbkVkaXQ6IHRydWUsIGlkOiBkYXRhLmlkLCBkYXRlOiBkYXRhLmRhdGUsIHRleHQgfSk7XG5cdFx0XHR0aGlzLmZpcmUoJ2NoYW5nZScsIHRoaXMuZ2V0KCkucm93cyk7XG5cdFx0fSxcblxuXHRcdHJlc2V0ICgpIHtcblx0XHRcdHRoaXMuc2V0KHsgaW5FZGl0OiBmYWxzZSwgaWQ6IG51bGwsIHRleHQ6ICcnLCByb3dzOiBbXSB9KTtcblx0XHRcdHRoaXMudG9nZ2xlQW1vdW50RXJyb3IoKTtcblx0XHRcdHRoaXMuZmlyZSgnY2hhbmdlJywgW10pO1xuXHRcdFx0dGhpcy51cGRhdGVIZWlnaHQoKTtcblx0XHRcdHRoaXMucmVmcy50ZXh0Ym94LmZvY3VzKCk7XG5cdFx0fSxcblxuXHRcdHJlbW92ZSAoKSB7XG5cdFx0XHR0aGlzLmZpcmUoJ3JlbW92ZScsIHsgaWQ6IHRoaXMuZ2V0KCkuaWQgfSk7XG5cdFx0XHR0aGlzLnJlc2V0KCk7XG5cdFx0fSxcblxuXHRcdG9uc3VibWl0IChlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRjb25zdCBkYXRhID0gdGhpcy5nZXQoKTtcblx0XHRcdGNvbnN0IHJvd3MgPSBkYXRhLnJvd3M7XG5cdFx0XHRpZiAoIXJvd3MubGVuZ3RoKSB7XG5cdFx0XHRcdHRoaXMudG9nZ2xlQW1vdW50RXJyb3IoJ1BsZWFzZSBlbnRlciBhbW91bnQgYW5kIGNhdGVnb3J5Jyk7XG5cdFx0XHRcdHJldHVybiB0aGlzLmZpcmUoJ2Vycm9yJywgJ1BsZWFzZSBlbnRlciBhbW91bnQgYW5kIGNhdGVnb3J5Jyk7XG5cdFx0XHR9XG5cdFx0XHQvLyBpdGVtIHdhcyBlZGl0ZWRcblx0XHRcdGlmIChkYXRhLmlkICYmIHJvd3MubGVuZ3RoID09PSAxKSByb3dzWzBdLmlkID0gZGF0YS5pZDtcblx0XHRcdGNvbnN0IGl0ZW1zID0gcm93cy5tYXAodGhpcy5sZWFuSXRlbUZvclNhdmUpO1xuXHRcdFx0dGhpcy5maXJlKCdzdWJtaXQnLCBpdGVtcyk7XG5cdFx0XHR0aGlzLnJlc2V0KCk7XG5cdFx0fSxcblxuXHRcdGxlYW5JdGVtRm9yU2F2ZSAoaXRlbSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0aWQ6IGl0ZW0uaWQsXG5cdFx0XHRcdGRhdGU6IGl0ZW0uZGF0ZSxcblx0XHRcdFx0YW1vdW50OiBpdGVtLmFtb3VudCxcblx0XHRcdFx0ZGVzY3JpcHRpb246IGl0ZW0uZGVzY3JpcHRpb24sXG5cdFx0XHRcdGdyb3VwX2lkOiBpdGVtLmdyb3VwX2lkXG5cdFx0XHR9O1xuXHRcdH0sXG5cblx0XHR0b2dnbGVBbW91bnRFcnJvciAobXNnID0gJycpIHtcblx0XHRcdHRoaXMucmVmcy50ZXh0Ym94LnNldEN1c3RvbVZhbGlkaXR5KG1zZyk7XG5cdFx0fSxcblxuXHRcdHVwZGF0ZUhlaWdodCAoKSB7XG5cdFx0XHRjb25zdCBub0xpbmVzID0gdGhpcy5yZWZzLnRleHRib3gudmFsdWUuc3BsaXQoJ1xcbicpLmxlbmd0aDtcblx0XHRcdHRoaXMucmVmcy50ZXh0Ym94LnN0eWxlLmhlaWdodCA9IGAke25vTGluZXMgKiAxLjF9ZW1gO1xuXHRcdH0sXG5cblx0fVxufTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2Zvcm0vaW5kZXguaHRtbCIsImZ1bmN0aW9uIHBhcnNlQW1vdW50IChhbW91bnQpIHtcblx0LyogZXNsaW50IG5vLWV2YWw6IDAgKi9cblx0YW1vdW50ID0gKCcnICsgYW1vdW50KS5yZXBsYWNlKC9cXHMvZywgJycpO1xuXHRpZiAoISgvXlsrXFwtXFxcXCovKClcXGQuXSskL2kpLnRlc3QoYW1vdW50KSkgcmV0dXJuIDA7XG5cdGlmICgoL1srXFwtXFxcXCovLl0rL2kpLnRlc3QoYW1vdW50KSkge1xuXHRcdHRyeSB7IGFtb3VudCA9IGV2YWwoYW1vdW50KTsgfVxuXHRcdGNhdGNoIChlKSB7IGFtb3VudCA9IDA7IH1cblx0fVxuXHRsZXQgbnVtID0gcGFyc2VGbG9hdChhbW91bnQpO1xuXHRpZiAobnVtID09PSBJbmZpbml0eSB8fCBpc05hTihudW0pIHx8IG51bSA8IDApIG51bSA9ICdlcnJvcic7XG5cdHJldHVybiBudW07XG59XG5cblxuZnVuY3Rpb24gZmluZEdyb3VwKHMsIGdyb3Vwcykge1xuXHRmb3IgKGxldCBnIG9mIGdyb3Vwcykge1xuXHRcdGlmIChzLm1hdGNoKGcuX25hbWUpKSB7XG5cdFx0XHRzID0gcy5yZXBsYWNlKGcuX25hbWUsICcnKTtcblx0XHRcdHJldHVybiBbZywgc107XG5cdFx0fVxuXHR9XG5cdGNvbnN0IHdvcmRzID0gcy5zcGxpdCgnICcpO1xuXHRmb3IgKGxldCB3IG9mIHdvcmRzKSB7XG5cdFx0Zm9yIChsZXQgZyBvZiBncm91cHMpIHtcblx0XHRcdGlmIChnLmtleXdvcmRzLmluZGV4T2YodykgPiAtMSkge1xuXHRcdFx0XHRzID0gcy5yZXBsYWNlKHcsICcnKTtcblx0XHRcdFx0cmV0dXJuIFtnLCBzXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIFtudWxsLCBzXTtcbn1cblxuXG5mdW5jdGlvbiBmaW5kQW1vdW50KHMpIHtcblx0bGV0IGFtb3VudCwgY2VyID0gMDtcblx0cyA9IHMucmVwbGFjZSgvXFxzKyhbKy0vKigpXSlcXHMrL2csICckMScpO1x0Ly8gcmVtb3ZlIHNwYWNlcyBhcm91bmQgb3BzXG5cdGNvbnN0IHdvcmRzID0gcy5zcGxpdCgnICcpO1xuXHRmb3IgKGxldCB3IG9mIHdvcmRzKSB7XG5cdFx0aWYgKHcubWF0Y2goL15cXGQrJC8pICYmIGNlciA8PSA4KSB7XG5cdFx0XHRhbW91bnQgPSB3O1xuXHRcdFx0Y2VyID0gODtcblx0XHR9XG5cdFx0ZWxzZSBpZiAody5tYXRjaCgvXlxcZCtcXC5cXGQrJC8pICYmIGNlciA8PSA5KSB7XG5cdFx0XHRhbW91bnQgPSB3O1xuXHRcdFx0Y2VyID0gOTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAody5tYXRjaCgvXltcXGQuKCkrLS8qXSskLykpIHtcblx0XHRcdGFtb3VudCA9IHc7XG5cdFx0XHRjZXIgPSAxMDtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXHRzID0gcy5yZXBsYWNlKGFtb3VudCwgJycpO1xuXHRhbW91bnQgPSBwYXJzZUFtb3VudChhbW91bnQpO1xuXHRyZXR1cm4gW2Ftb3VudCwgc107XG59XG5cblxuXG5mdW5jdGlvbiBwYXJzZSAodmFsLCB7ZGF0ZSwgX2dyb3Vwc30pIHtcblx0Y29uc3Qgcm93cyA9IHZhbFxuXHRcdC5zcGxpdCgnXFxuJylcblx0XHQubWFwKHJvdyA9PiB7XG5cdFx0XHRsZXQgZ3JvdXAsIGFtb3VudCwgZGVzY3JpcHRpb247XG5cdFx0XHRbZ3JvdXAsIHJvd10gPSBmaW5kR3JvdXAocm93LCBfZ3JvdXBzKTtcblx0XHRcdFthbW91bnQsIHJvd10gPSBmaW5kQW1vdW50KHJvdyk7XG5cdFx0XHRkZXNjcmlwdGlvbiA9IHJvdy50cmltKCk7XG5cdFx0XHRyZXR1cm4ge2Ftb3VudCwgZGVzY3JpcHRpb24sIGdyb3VwX2lkOiBncm91cC5pZCwgZ3JvdXB9O1xuXHRcdH0pXG5cdFx0LmZpbHRlcihyb3cgPT4gcm93LmFtb3VudCAhPT0gJycgJiYgcm93Lmdyb3VwX2lkKTtcblxuXHRpZiAoIXJvd3MubGVuZ3RoKSByZXR1cm47XG5cblx0cm93cy5mb3JFYWNoKHIgPT4gKHIuZGF0ZSA9IGRhdGUpKTtcblxuXHRsZXQgc3VtID0gMDtcblx0Zm9yIChsZXQgaSA9IDE7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSBzdW0gKz0gcm93c1tpXS5hbW91bnQ7XG5cdHJvd3NbMF0uYW1vdW50IC09IHN1bTtcblx0cmV0dXJuIHJvd3M7XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHBhcnNlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2Zvcm0vdGV4dC1wYXJzZXIuanMiLCI8ZGl2IGNsYXNzPVwidGFibGVcIiByZWY6dGFibGU+XG5cdDx0YWJsZT5cblx0PHRoZWFkPjx0cj5cblx0XHQ8dGQgY2xhc3M9XCJkYXRlXCI+RGF0ZTwvdGQ+XG5cdFx0PHRkIGNsYXNzPVwiZGVzY1wiPkRlc2NyaXB0aW9uPC90ZD5cblx0XHQ8dGQgY2xhc3M9XCJhbW91bnRcIj5BbW91bnQ8L3RkPlxuXHQ8L3RyPjwvdGhlYWQ+XG5cdDx0Ym9keT5cblx0XHR7I2lmIGZpbHRlcmVkRGF0YSAmJiBmaWx0ZXJlZERhdGEubGVuZ3RofVxuXHRcdHsjZWFjaCBmaWx0ZXJlZERhdGEgYXMgaXRlbSwgaWR4fVxuXHRcdFx0PHRyIG9uOmNsaWNrPVwib25Sb3dDbGljayhpdGVtKVwiPlxuXHRcdFx0XHQ8dGQgY2xhc3M9XCJkYXRlXCI+e2l0ZW0uZGF0ZS5zdWJzdHIoMCwgNyl9PC90ZD5cblx0XHRcdFx0PHRkIGNsYXNzPVwiZGVzY1wiPntnZXREZXNjcmlwdGlvbihpdGVtKX08L3RkPlxuXHRcdFx0XHQ8dGQgY2xhc3M9XCJhbW91bnRcIj57Zm9ybWF0TnVtYmVyKGl0ZW0uYW1vdW50KX08L3RkPlxuXHRcdFx0PC90cj5cblx0XHR7L2VhY2h9XG5cdFx0XHQ8dHIgY2xhc3M9XCJyb3ctZmlsbGVyXCI+PHRkIGNvbHNwYW49XCIzXCI+PC90ZD48L3RyPlxuXHRcdHs6ZWxzZX1cblx0XHRcdDx0ciBjbGFzcz1cImVtcHR5LXJvd1wiPlxuXHRcdFx0XHQ8dGQgY29sc3Bhbj1cIjNcIj5ObyByZXN1bHRzPC90ZD5cblx0XHRcdDwvdHI+XG5cdFx0ey9pZn1cblx0PC90Ym9keT5cblx0PHRmb290Pjx0cj5cblx0XHQ8dGQgY29sc3Bhbj1cIjJcIiBjbGFzcz1cInRhYmxlLWZpbHRlci1jZWxsXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidGFibGUtZmlsdGVyLWNlbGwtaW5uZXJcIj5cblx0XHRcdFx0PGkgY2xhc3M9XCJpb24tbWQtc2VhcmNoXCI+PC9pPlxuXHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJ0YWJsZS1maWx0ZXJcIiB0eXBlPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJGaWx0ZXJcIlxuXHRcdFx0XHRiaW5kOnZhbHVlPVwiZmlsdGVyXCJcblx0XHRcdFx0b246a2V5ZG93bj1cIm9uRmlsdGVyS2V5RG93bihldmVudClcIj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvdGQ+XG5cdFx0PHRkIGNsYXNzPVwiYW1vdW50XCI+e2Zvcm1hdE51bWJlcih0b3RhbCl9PC90ZD5cblx0PC90cj48L3Rmb290PlxuXHQ8L3RhYmxlPlxuPC9kaXY+XG5cblxuPHNjcmlwdD5cblxuZnVuY3Rpb24gZm9ybWF0TnVtYmVyIChudW0pIHtcblx0bnVtID0gTWF0aC5yb3VuZCgwICsgbnVtICogMTAwKSAvIDEwMDtcblx0cmV0dXJuIG51bS50b0xvY2FsZVN0cmluZygnZW4tR0InLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhdGEgKCkge1xuXHRcdHJldHVybiB7IGRhdGE6IFtdLCBmaWx0ZXI6ICcnIH07XG5cdH0sXG5cdGhlbHBlcnM6IHtcblx0XHRmb3JtYXROdW1iZXIsXG5cdFx0Z2V0RGVzY3JpcHRpb24gKGl0ZW0pIHtcblx0XHRcdGNvbnN0IGRlc2MgPSBbXTtcblx0XHRcdGlmIChpdGVtLmdyb3VwLm5hbWUpIGRlc2MucHVzaChpdGVtLmdyb3VwLm5hbWUpO1xuXHRcdFx0aWYgKGl0ZW0uZGVzY3JpcHRpb24pIGRlc2MucHVzaChpdGVtLmRlc2NyaXB0aW9uKTtcblx0XHRcdHJldHVybiBkZXNjLmpvaW4oJyAtICcpO1xuXHRcdH1cblx0fSxcblx0Y29tcHV0ZWQ6IHtcblx0XHRmaWx0ZXJlZERhdGEgKHtkYXRhLCBmaWx0ZXJ9KSB7XG5cdFx0XHRpZiAoIWZpbHRlcikgcmV0dXJuIGRhdGE7XG5cdFx0XHRmaWx0ZXIgPSBmaWx0ZXIudG9Mb3dlckNhc2UoKTtcblx0XHRcdHJldHVybiBkYXRhLmZpbHRlcihpdGVtID0+IHtcblx0XHRcdFx0bGV0IHMgPSBpdGVtLmRlc2NyaXB0aW9uICsgaXRlbS5hbW91bnQgKyBpdGVtLmRhdGU7XG5cdFx0XHRcdGlmIChpdGVtLmdyb3VwKSB7XG5cdFx0XHRcdFx0cyArPSAoaXRlbS5ncm91cC5uYW1lIHx8ICcnKTtcblx0XHRcdFx0XHRpZiAoaXRlbS5ncm91cC5jYXRlZ29yeSkgcyArPSAoaXRlbS5ncm91cC5jYXRlZ29yeS5uYW1lIHx8ICcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gKHMudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlcikgPiAtMSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdHRvdGFsICh7ZmlsdGVyZWREYXRhfSkgeyByZXR1cm4gZmlsdGVyZWREYXRhLnJlZHVjZSgocCwgYykgPT4gcCArIGMuYW1vdW50LCAwKTsgfVxuXHR9LFxuXHRvbmNyZWF0ZSAoKSB7XG5cdH0sXG5cblx0bWV0aG9kczoge1xuXHRcdG9uRmlsdGVyS2V5RG93biAoZSkge1xuXHRcdFx0aWYgKGUua2V5ID09PSAnRXNjYXBlJykgdGhpcy5zZXQoeyBmaWx0ZXI6ICcnIH0pO1xuXHRcdH0sXG5cdFx0b25Sb3dDbGljayAoaXRlbSkge1xuXHRcdFx0dGhpcy5maXJlKCdjbGljaycsIGl0ZW0pO1xuXHRcdH1cblx0fVxufTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3RhYmxlL2luZGV4Lmh0bWwiLCJmdW5jdGlvbiByZXEgKHVybCwgbWV0aG9kID0gJ0dFVCcsIHBhcmFtcykge1xuXHRjb25zdCBvcHRzID0ge1xuXHRcdG1ldGhvZDogbWV0aG9kLFxuXHRcdGhlYWRlcnM6IHsgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuXHRcdGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG5cdH07XG5cdGlmIChwYXJhbXMpIHtcblx0XHRvcHRzLmJvZHkgPSBKU09OLnN0cmluZ2lmeShwYXJhbXMpO1xuXHRcdGlmIChwYXJhbXMuaWQpIHVybCArPSBgLyR7cGFyYW1zLmlkfWA7XG5cdH1cblx0cmV0dXJuIGZldGNoKGBhcGkvJHt1cmx9YCwgb3B0cykudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XG59XG5cbmNvbnN0IGdldCA9IHVybCA9PiByZXEodXJsKTtcbmNvbnN0IHBvc3QgPSAodXJsLCBwYXJhbXMpID0+IHJlcSh1cmwsICdQT1NUJywgcGFyYW1zKTtcbmNvbnN0IHB1dCA9ICh1cmwsIHBhcmFtcykgPT4gcmVxKHVybCwgJ1BVVCcsIHBhcmFtcyk7XG5jb25zdCBkZWwgPSB1cmwgPT4gcmVxKHVybCwgJ0RFTEVURScpO1xuXG5cbmNvbnN0IENhdGVnb3JpZXMgPSB7XG5cdGdldDogKCkgPT4gZ2V0KCdjYXRlZ29yaWVzJyksXG59O1xuXG5jb25zdCBHcm91cHMgPSB7XG5cdGdldDogKCkgPT4gZ2V0KCdncm91cHMnKSxcbn07XG5cbmNvbnN0IEV4cGVuc2VzID0ge1xuXHRnZXQ6IChkYXRlID0gJycpID0+IGdldChgZW50cmllcz9kYXRlPSR7ZGF0ZX1gKSxcblx0c2F2ZTogZGF0YSA9PiB7XG5cdFx0aWYgKGRhdGEubGVuZ3RoID09PSAxICYmIGRhdGFbMF0uaWQpIHJldHVybiBwdXQoJ2VudHJpZXMnLCBkYXRhWzBdKTtcblx0XHRyZXR1cm4gcG9zdCgnZW50cmllcycsIGRhdGEpO1xuXHR9LFxuXHRkZWw6IGlkID0+IGRlbChgZW50cmllcy8ke2lkfWApXG59O1xuXG5cbmV4cG9ydCB7XG5cdENhdGVnb3JpZXMsXG5cdEdyb3Vwcyxcblx0RXhwZW5zZXMsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2RhdGEvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9