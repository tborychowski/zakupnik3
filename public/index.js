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
		if (data && data.length) {
			this.refs.table.set({ data, isPreview: true });
		}
		else {
			this.refs.table.set({ data: this.lastTableData, isPreview: false });
		}
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
	onfocus () {
		this.parse();
	},

	oninput () {
		this.toggleAmountError();
		this.updateHeight();
		this.parse();
	},

	onkeydown (e) {
		if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) this.onsubmit(e);
		else if (e.key === 'Escape') this.reset(e);
	},

	parse () {
		if (this.parseTimer) clearTimeout(this.parseTimer);
		this.parseTimer = setTimeout(() => {
			const rows = __WEBPACK_IMPORTED_MODULE_1__text_parser__["a" /* default */].parse(this.get().text, this.get());
			this.set({ rows });
			this.fire('change', rows);
		}, 300);
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

	function focus_handler(event) {
		component.onfocus();
	}

	function input_handler(event) {
		component.oninput();
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
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(textarea, "focus", focus_handler);
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
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(textarea, "focus", focus_handler);
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
// yyyy-mm
const getStrDate = (y, m) => `${y}-${('0' + m).substr(-2)}`;

const deepCopyArray = arr => arr.map(o => Object.assign({}, o));

function parseDateStr(dateStr) {
	let [year, month] = dateStr.split('-');
	year = parseInt(year, 10);
	month = parseInt(month, 10);
	const str = getStrDate(year, month);
	return { year, month, str };
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
	const words = s.split(' ').filter(w => w.length);
	for (let w of words) {
		for (let g of groups) {
			if (g.keywords.indexOf(w) > -1) {
				s = s.replace(w, '');
				return [g, s];
			}
		}
	}
	return [{}, s];
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
	let repeat = 1;
	const rows = val.split('\n').map(row => {
		if (row.toLowerCase().indexOf('repeat') > -1) {
			const m = row.match(/\d{1,2}/);
			if (m && m.length) {
				repeat = parseInt(m[0], 10);
				return {};
			}
		}
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

	return repeatEntries(rows, repeat);
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
	return { data: [], filter: '', isPreview: false };
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
		if (!this.get().isPreview) this.fire('click', item);
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
			tr.className = "table-row";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTRhMDNiNmUwMWY4MmE2N2JiMDQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9hcHAvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9jbGllbnQveWVhci1tb250aC1waWNrZXIvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvZm9ybS9pbmRleC5odG1sIiwid2VicGFjazovLy8uL2NsaWVudC9mb3JtL3RleHQtcGFyc2VyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC90YWJsZS9pbmRleC5odG1sIiwid2VicGFjazovLy8uL2NsaWVudC9kYXRhL2luZGV4LmpzIl0sIm5hbWVzIjpbInRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldFN0ckRhdGUiLCJ5IiwibSIsInN1YnN0ciIsImRlZXBDb3B5QXJyYXkiLCJhcnIiLCJtYXAiLCJvIiwiT2JqZWN0IiwiYXNzaWduIiwicGFyc2VEYXRlU3RyIiwiZGF0ZVN0ciIsInllYXIiLCJtb250aCIsInNwbGl0IiwicGFyc2VJbnQiLCJzdHIiLCJhZGRNb250aHNUb0RhdGUiLCJkYXRlIiwibW9udGhEaWZmIiwiZGF0ZU9iaiIsIk1hdGgiLCJmbG9vciIsImNsb25lRW50cmllcyIsImVudHJpZXMiLCJpdGVtIiwicmVwZWF0RW50cmllcyIsInJlcGVhdGVyIiwib3JpZ2luYWxFbnRyaWVzIiwiaSIsIm5ld1Jvd3MiLCJjb25jYXQiLCJwYXJzZUFtb3VudCIsImFtb3VudCIsInJlcGxhY2UiLCJ0ZXN0IiwiZXZhbCIsImUiLCJudW0iLCJwYXJzZUZsb2F0IiwiSW5maW5pdHkiLCJpc05hTiIsImZpbmRHcm91cCIsInMiLCJncm91cHMiLCJnIiwibWF0Y2giLCJfbmFtZSIsIndvcmRzIiwiZmlsdGVyIiwidyIsImxlbmd0aCIsImtleXdvcmRzIiwiaW5kZXhPZiIsImZpbmRBbW91bnQiLCJjZXIiLCJwYXJzZSIsInZhbCIsIl9ncm91cHMiLCJyZXBlYXQiLCJyb3dzIiwicm93IiwidG9Mb3dlckNhc2UiLCJncm91cCIsImRlc2NyaXB0aW9uIiwidHJpbSIsImdyb3VwX2lkIiwiaWQiLCJmb3JFYWNoIiwiciIsInN1bSIsInJlcSIsInVybCIsIm1ldGhvZCIsInBhcmFtcyIsIm9wdHMiLCJoZWFkZXJzIiwiY3JlZGVudGlhbHMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJnZXQiLCJwb3N0IiwicHV0IiwiZGVsIiwiQ2F0ZWdvcmllcyIsIkdyb3VwcyIsIkV4cGVuc2VzIiwic2F2ZSIsImRhdGEiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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LEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDMUQsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN0QixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzdCLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNWLEVBQUU7O0FBRUYsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUU7QUFDYixFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNmLEVBQUUsTUFBTSxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyRixFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDakUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkMsRUFBRTs7QUFFRixDQUFDLEtBQUssQ0FBQyxHQUFHO0FBQ1YsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDNUQsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztBQUMzQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzFCLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxD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TUUsTUFBTixLQUFpQkgsSUFBSUMsR0FBSixFQUFTLEtBQVQsRUFBZ0JFLE1BQWhCLENBQTdCO0FBQ0EsTUFBTWMsTUFBTWhCLE9BQU9ELElBQUlDLEdBQUosRUFBUyxRQUFULENBQW5COztBQUdBLE1BQU1pQixhQUFhO0FBQ2xCSixNQUFLLE1BQU1BLElBQUksWUFBSjtBQURPLENBQW5COztBQUlBLE1BQU1LLFNBQVM7QUFDZEwsTUFBSyxNQUFNQSxJQUFJLFFBQUo7QUFERyxDQUFmOztBQUlBLE1BQU1NLFdBQVc7QUFDaEJOLE1BQUssQ0FBQ25FLE9BQU8sRUFBUixLQUFlbUUsSUFBSyxnQkFBZW5FLElBQUssRUFBekIsQ0FESjtBQUVoQjBFLE9BQU1DLFFBQVE7QUFDYixNQUFJQSxLQUFLMUMsTUFBTCxLQUFnQixDQUFoQixJQUFxQjBDLEtBQUssQ0FBTCxFQUFRMUIsRUFBakMsRUFBcUMsT0FBT29CLElBQUksU0FBSixFQUFlTSxLQUFLLENBQUwsQ0FBZixDQUFQO0FBQ3JDLFNBQU9QLEtBQUssU0FBTCxFQUFnQk8sSUFBaEIsQ0FBUDtBQUNBLEVBTGU7QUFNaEJMLE1BQUtyQixNQUFNcUIsSUFBSyxXQUFVckIsRUFBRyxFQUFsQjtBQU5LLENBQWpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9wdWJsaWMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTRhMDNiNmUwMWY4MmE2N2JiMDQiLCJmdW5jdGlvbiBub29wKCkge31cblxuZnVuY3Rpb24gYXNzaWduKHRhciwgc3JjKSB7XG5cdGZvciAodmFyIGsgaW4gc3JjKSB0YXJba10gPSBzcmNba107XG5cdHJldHVybiB0YXI7XG59XG5cbmZ1bmN0aW9uIGFzc2lnblRydWUodGFyLCBzcmMpIHtcblx0Zm9yICh2YXIgayBpbiBzcmMpIHRhcltrXSA9IDE7XG5cdHJldHVybiB0YXI7XG59XG5cbmZ1bmN0aW9uIGlzUHJvbWlzZSh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZE5vZGUobm9kZSwgdGFyZ2V0KSB7XG5cdHRhcmdldC5hcHBlbmRDaGlsZChub2RlKTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0Tm9kZShub2RlLCB0YXJnZXQsIGFuY2hvcikge1xuXHR0YXJnZXQuaW5zZXJ0QmVmb3JlKG5vZGUsIGFuY2hvcik7XG59XG5cbmZ1bmN0aW9uIGRldGFjaE5vZGUobm9kZSkge1xuXHRub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG59XG5cbmZ1bmN0aW9uIGRldGFjaEJldHdlZW4oYmVmb3JlLCBhZnRlcikge1xuXHR3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nICYmIGJlZm9yZS5uZXh0U2libGluZyAhPT0gYWZ0ZXIpIHtcblx0XHRiZWZvcmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiZWZvcmUubmV4dFNpYmxpbmcpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRldGFjaEJlZm9yZShhZnRlcikge1xuXHR3aGlsZSAoYWZ0ZXIucHJldmlvdXNTaWJsaW5nKSB7XG5cdFx0YWZ0ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhZnRlci5wcmV2aW91c1NpYmxpbmcpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRldGFjaEFmdGVyKGJlZm9yZSkge1xuXHR3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nKSB7XG5cdFx0YmVmb3JlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYmVmb3JlLm5leHRTaWJsaW5nKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZWluc2VydEJldHdlZW4oYmVmb3JlLCBhZnRlciwgdGFyZ2V0KSB7XG5cdHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcgJiYgYmVmb3JlLm5leHRTaWJsaW5nICE9PSBhZnRlcikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChiZWZvcmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiZWZvcmUubmV4dFNpYmxpbmcpKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZWluc2VydENoaWxkcmVuKHBhcmVudCwgdGFyZ2V0KSB7XG5cdHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkgdGFyZ2V0LmFwcGVuZENoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gcmVpbnNlcnRBZnRlcihiZWZvcmUsIHRhcmdldCkge1xuXHR3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nKSB0YXJnZXQuYXBwZW5kQ2hpbGQoYmVmb3JlLm5leHRTaWJsaW5nKTtcbn1cblxuZnVuY3Rpb24gcmVpbnNlcnRCZWZvcmUoYWZ0ZXIsIHRhcmdldCkge1xuXHR2YXIgcGFyZW50ID0gYWZ0ZXIucGFyZW50Tm9kZTtcblx0d2hpbGUgKHBhcmVudC5maXJzdENoaWxkICE9PSBhZnRlcikgdGFyZ2V0LmFwcGVuZENoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gZGVzdHJveUVhY2goaXRlcmF0aW9ucywgZGV0YWNoKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgaXRlcmF0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGlmIChpdGVyYXRpb25zW2ldKSBpdGVyYXRpb25zW2ldLmQoZGV0YWNoKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudCgpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChuYW1lKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdmdFbGVtZW50KG5hbWUpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBuYW1lKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dChkYXRhKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tbWVudCgpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpO1xufVxuXG5mdW5jdGlvbiBhZGRMaXN0ZW5lcihub2RlLCBldmVudCwgaGFuZGxlcikge1xuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIobm9kZSwgZXZlbnQsIGhhbmRsZXIpIHtcblx0bm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZShub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG5cdG5vZGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKG5vZGUsIGF0dHJpYnV0ZXMpIHtcblx0Zm9yICh2YXIga2V5IGluIGF0dHJpYnV0ZXMpIHtcblx0XHRpZiAoa2V5IGluIG5vZGUpIHtcblx0XHRcdG5vZGVba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGF0dHJpYnV0ZXNba2V5XSA9PT0gdW5kZWZpbmVkKSByZW1vdmVBdHRyaWJ1dGUobm9kZSwga2V5KTtcblx0XHRcdGVsc2Ugc2V0QXR0cmlidXRlKG5vZGUsIGtleSwgYXR0cmlidXRlc1trZXldKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKG5vZGUsIGF0dHJpYnV0ZSkge1xuXHRub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xufVxuXG5mdW5jdGlvbiBzZXRYbGlua0F0dHJpYnV0ZShub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG5cdG5vZGUuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCBhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gZ2V0QmluZGluZ0dyb3VwVmFsdWUoZ3JvdXApIHtcblx0dmFyIHZhbHVlID0gW107XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXAubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRpZiAoZ3JvdXBbaV0uY2hlY2tlZCkgdmFsdWUucHVzaChncm91cFtpXS5fX3ZhbHVlKTtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZSA9PT0gJycgPyB1bmRlZmluZWQgOiArdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHRpbWVSYW5nZXNUb0FycmF5KHJhbmdlcykge1xuXHR2YXIgYXJyYXkgPSBbXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCByYW5nZXMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRhcnJheS5wdXNoKHsgc3RhcnQ6IHJhbmdlcy5zdGFydChpKSwgZW5kOiByYW5nZXMuZW5kKGkpIH0pO1xuXHR9XG5cdHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gY2hpbGRyZW4gKGVsZW1lbnQpIHtcblx0cmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5jaGlsZE5vZGVzKTtcbn1cblxuZnVuY3Rpb24gY2xhaW1FbGVtZW50IChub2RlcywgbmFtZSwgYXR0cmlidXRlcywgc3ZnKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHR2YXIgbm9kZSA9IG5vZGVzW2ldO1xuXHRcdGlmIChub2RlLm5vZGVOYW1lID09PSBuYW1lKSB7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG5vZGUuYXR0cmlidXRlcy5sZW5ndGg7IGogKz0gMSkge1xuXHRcdFx0XHR2YXIgYXR0cmlidXRlID0gbm9kZS5hdHRyaWJ1dGVzW2pdO1xuXHRcdFx0XHRpZiAoIWF0dHJpYnV0ZXNbYXR0cmlidXRlLm5hbWVdKSBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUubmFtZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbm9kZXMuc3BsaWNlKGksIDEpWzBdOyAvLyBUT0RPIHN0cmlwIHVud2FudGVkIGF0dHJpYnV0ZXNcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3ZnID8gY3JlYXRlU3ZnRWxlbWVudChuYW1lKSA6IGNyZWF0ZUVsZW1lbnQobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNsYWltVGV4dCAobm9kZXMsIGRhdGEpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdHZhciBub2RlID0gbm9kZXNbaV07XG5cdFx0aWYgKG5vZGUubm9kZVR5cGUgPT09IDMpIHtcblx0XHRcdG5vZGUuZGF0YSA9IGRhdGE7XG5cdFx0XHRyZXR1cm4gbm9kZXMuc3BsaWNlKGksIDEpWzBdO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjcmVhdGVUZXh0KGRhdGEpO1xufVxuXG5mdW5jdGlvbiBzZXRJbnB1dFR5cGUoaW5wdXQsIHR5cGUpIHtcblx0dHJ5IHtcblx0XHRpbnB1dC50eXBlID0gdHlwZTtcblx0fSBjYXRjaCAoZSkge31cbn1cblxuZnVuY3Rpb24gc2V0U3R5bGUobm9kZSwga2V5LCB2YWx1ZSkge1xuXHRub2RlLnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RPcHRpb24oc2VsZWN0LCB2YWx1ZSkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dmFyIG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuXG5cdFx0aWYgKG9wdGlvbi5fX3ZhbHVlID09PSB2YWx1ZSkge1xuXHRcdFx0b3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0T3B0aW9ucyhzZWxlY3QsIHZhbHVlKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0Lm9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHR2YXIgb3B0aW9uID0gc2VsZWN0Lm9wdGlvbnNbaV07XG5cdFx0b3B0aW9uLnNlbGVjdGVkID0gfnZhbHVlLmluZGV4T2Yob3B0aW9uLl9fdmFsdWUpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHNlbGVjdFZhbHVlKHNlbGVjdCkge1xuXHR2YXIgc2VsZWN0ZWRPcHRpb24gPSBzZWxlY3QucXVlcnlTZWxlY3RvcignOmNoZWNrZWQnKSB8fCBzZWxlY3Qub3B0aW9uc1swXTtcblx0cmV0dXJuIHNlbGVjdGVkT3B0aW9uICYmIHNlbGVjdGVkT3B0aW9uLl9fdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdE11bHRpcGxlVmFsdWUoc2VsZWN0KSB7XG5cdHJldHVybiBbXS5tYXAuY2FsbChzZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnOmNoZWNrZWQnKSwgZnVuY3Rpb24ob3B0aW9uKSB7XG5cdFx0cmV0dXJuIG9wdGlvbi5fX3ZhbHVlO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkUmVzaXplTGlzdGVuZXIoZWxlbWVudCwgZm4pIHtcblx0aWYgKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG5cdFx0ZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG5cdH1cblxuXHRjb25zdCBvYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvYmplY3QnKTtcblx0b2JqZWN0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBvdmVyZmxvdzogaGlkZGVuOyBwb2ludGVyLWV2ZW50czogbm9uZTsgei1pbmRleDogLTE7Jyk7XG5cdG9iamVjdC50eXBlID0gJ3RleHQvaHRtbCc7XG5cblx0bGV0IHdpbjtcblxuXHRvYmplY3Qub25sb2FkID0gKCkgPT4ge1xuXHRcdHdpbiA9IG9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7XG5cdFx0d2luLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZuKTtcblx0fTtcblxuXHRpZiAoL1RyaWRlbnQvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcblx0XHRlbGVtZW50LmFwcGVuZENoaWxkKG9iamVjdCk7XG5cdFx0b2JqZWN0LmRhdGEgPSAnYWJvdXQ6YmxhbmsnO1xuXHR9IGVsc2Uge1xuXHRcdG9iamVjdC5kYXRhID0gJ2Fib3V0OmJsYW5rJztcblx0XHRlbGVtZW50LmFwcGVuZENoaWxkKG9iamVjdCk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGNhbmNlbDogKCkgPT4ge1xuXHRcdFx0d2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZuKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlQ2hpbGQob2JqZWN0KTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIGxpbmVhcih0KSB7XG5cdHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVJ1bGUoeyBhLCBiLCBkZWx0YSwgZHVyYXRpb24gfSwgZWFzZSwgZm4pIHtcblx0Y29uc3Qgc3RlcCA9IDE2LjY2NiAvIGR1cmF0aW9uO1xuXHRsZXQga2V5ZnJhbWVzID0gJ3tcXG4nO1xuXG5cdGZvciAobGV0IHAgPSAwOyBwIDw9IDE7IHAgKz0gc3RlcCkge1xuXHRcdGNvbnN0IHQgPSBhICsgZGVsdGEgKiBlYXNlKHApO1xuXHRcdGtleWZyYW1lcyArPSBwICogMTAwICsgYCV7JHtmbih0KX19XFxuYDtcblx0fVxuXG5cdHJldHVybiBrZXlmcmFtZXMgKyBgMTAwJSB7JHtmbihiKX19XFxufWA7XG59XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJrc2t5YXBwL3N0cmluZy1oYXNoL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG5mdW5jdGlvbiBoYXNoKHN0cikge1xuXHRsZXQgaGFzaCA9IDUzODE7XG5cdGxldCBpID0gc3RyLmxlbmd0aDtcblxuXHR3aGlsZSAoaS0tKSBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgXiBzdHIuY2hhckNvZGVBdChpKTtcblx0cmV0dXJuIGhhc2ggPj4+IDA7XG59XG5cbmZ1bmN0aW9uIHdyYXBUcmFuc2l0aW9uKGNvbXBvbmVudCwgbm9kZSwgZm4sIHBhcmFtcywgaW50cm8pIHtcblx0Y29uc3Qgb2JqID0gZm4obm9kZSwgcGFyYW1zKTtcblx0Y29uc3QgZHVyYXRpb24gPSBvYmouZHVyYXRpb24gfHwgMzAwO1xuXHRjb25zdCBlYXNlID0gb2JqLmVhc2luZyB8fCBsaW5lYXI7XG5cdGxldCBjc3NUZXh0O1xuXG5cdGlmIChpbnRybykge1xuXHRcdGlmIChvYmouY3NzICYmIG9iai5kZWxheSkge1xuXHRcdFx0Y3NzVGV4dCA9IG5vZGUuc3R5bGUuY3NzVGV4dDtcblx0XHRcdG5vZGUuc3R5bGUuY3NzVGV4dCArPSBvYmouY3NzKDApO1xuXHRcdH1cblxuXHRcdGlmIChvYmoudGljaykgb2JqLnRpY2soMCk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHQ6IGludHJvID8gMCA6IDEsXG5cdFx0cnVubmluZzogZmFsc2UsXG5cdFx0cHJvZ3JhbTogbnVsbCxcblx0XHRwZW5kaW5nOiBudWxsLFxuXG5cdFx0cnVuKGIsIGNhbGxiYWNrKSB7XG5cdFx0XHRjb25zdCBwcm9ncmFtID0ge1xuXHRcdFx0XHRzdGFydDogd2luZG93LnBlcmZvcm1hbmNlLm5vdygpICsgKG9iai5kZWxheSB8fCAwKSxcblx0XHRcdFx0Yixcblx0XHRcdFx0Y2FsbGJhY2s6IGNhbGxiYWNrIHx8IG5vb3Bcblx0XHRcdH07XG5cblx0XHRcdGlmICghYikge1xuXHRcdFx0XHRwcm9ncmFtLmdyb3VwID0gdHJhbnNpdGlvbk1hbmFnZXIub3V0cm9zO1xuXHRcdFx0XHR0cmFuc2l0aW9uTWFuYWdlci5vdXRyb3MucmVtYWluaW5nICs9IDE7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvYmouZGVsYXkpIHtcblx0XHRcdFx0dGhpcy5wZW5kaW5nID0gcHJvZ3JhbTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc3RhcnQocHJvZ3JhbSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghdGhpcy5ydW5uaW5nKSB7XG5cdFx0XHRcdHRoaXMucnVubmluZyA9IHRydWU7XG5cdFx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLmFkZCh0aGlzKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0c3RhcnQocHJvZ3JhbSkge1xuXHRcdFx0Y29tcG9uZW50LmZpcmUoYCR7cHJvZ3JhbS5iID8gJ2ludHJvJyA6ICdvdXRybyd9LnN0YXJ0YCwgeyBub2RlIH0pO1xuXG5cdFx0XHRwcm9ncmFtLmEgPSB0aGlzLnQ7XG5cdFx0XHRwcm9ncmFtLmRlbHRhID0gcHJvZ3JhbS5iIC0gcHJvZ3JhbS5hO1xuXHRcdFx0cHJvZ3JhbS5kdXJhdGlvbiA9IGR1cmF0aW9uICogTWF0aC5hYnMocHJvZ3JhbS5iIC0gcHJvZ3JhbS5hKTtcblx0XHRcdHByb2dyYW0uZW5kID0gcHJvZ3JhbS5zdGFydCArIHByb2dyYW0uZHVyYXRpb247XG5cblx0XHRcdGlmIChvYmouY3NzKSB7XG5cdFx0XHRcdGlmIChvYmouZGVsYXkpIG5vZGUuc3R5bGUuY3NzVGV4dCA9IGNzc1RleHQ7XG5cblx0XHRcdFx0Y29uc3QgcnVsZSA9IGdlbmVyYXRlUnVsZShwcm9ncmFtLCBlYXNlLCBvYmouY3NzKTtcblx0XHRcdFx0dHJhbnNpdGlvbk1hbmFnZXIuYWRkUnVsZShydWxlLCBwcm9ncmFtLm5hbWUgPSAnX19zdmVsdGVfJyArIGhhc2gocnVsZSkpO1xuXG5cdFx0XHRcdG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gKG5vZGUuc3R5bGUuYW5pbWF0aW9uIHx8ICcnKVxuXHRcdFx0XHRcdC5zcGxpdCgnLCAnKVxuXHRcdFx0XHRcdC5maWx0ZXIoYW5pbSA9PiBhbmltICYmIChwcm9ncmFtLmRlbHRhIDwgMCB8fCAhL19fc3ZlbHRlLy50ZXN0KGFuaW0pKSlcblx0XHRcdFx0XHQuY29uY2F0KGAke3Byb2dyYW0ubmFtZX0gJHtwcm9ncmFtLmR1cmF0aW9ufW1zIGxpbmVhciAxIGZvcndhcmRzYClcblx0XHRcdFx0XHQuam9pbignLCAnKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcblx0XHRcdHRoaXMucGVuZGluZyA9IG51bGw7XG5cdFx0fSxcblxuXHRcdHVwZGF0ZShub3cpIHtcblx0XHRcdGNvbnN0IHByb2dyYW0gPSB0aGlzLnByb2dyYW07XG5cdFx0XHRpZiAoIXByb2dyYW0pIHJldHVybjtcblxuXHRcdFx0Y29uc3QgcCA9IG5vdyAtIHByb2dyYW0uc3RhcnQ7XG5cdFx0XHR0aGlzLnQgPSBwcm9ncmFtLmEgKyBwcm9ncmFtLmRlbHRhICogZWFzZShwIC8gcHJvZ3JhbS5kdXJhdGlvbik7XG5cdFx0XHRpZiAob2JqLnRpY2spIG9iai50aWNrKHRoaXMudCk7XG5cdFx0fSxcblxuXHRcdGRvbmUoKSB7XG5cdFx0XHRjb25zdCBwcm9ncmFtID0gdGhpcy5wcm9ncmFtO1xuXHRcdFx0dGhpcy50ID0gcHJvZ3JhbS5iO1xuXG5cdFx0XHRpZiAob2JqLnRpY2spIG9iai50aWNrKHRoaXMudCk7XG5cblx0XHRcdGNvbXBvbmVudC5maXJlKGAke3Byb2dyYW0uYiA/ICdpbnRybycgOiAnb3V0cm8nfS5lbmRgLCB7IG5vZGUgfSk7XG5cblx0XHRcdGlmICghcHJvZ3JhbS5iICYmICFwcm9ncmFtLmludmFsaWRhdGVkKSB7XG5cdFx0XHRcdHByb2dyYW0uZ3JvdXAuY2FsbGJhY2tzLnB1c2goKCkgPT4ge1xuXHRcdFx0XHRcdHByb2dyYW0uY2FsbGJhY2soKTtcblx0XHRcdFx0XHRpZiAob2JqLmNzcykgdHJhbnNpdGlvbk1hbmFnZXIuZGVsZXRlUnVsZShub2RlLCBwcm9ncmFtLm5hbWUpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAoLS1wcm9ncmFtLmdyb3VwLnJlbWFpbmluZyA9PT0gMCkge1xuXHRcdFx0XHRcdHByb2dyYW0uZ3JvdXAuY2FsbGJhY2tzLmZvckVhY2goZm4gPT4ge1xuXHRcdFx0XHRcdFx0Zm4oKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKG9iai5jc3MpIHRyYW5zaXRpb25NYW5hZ2VyLmRlbGV0ZVJ1bGUobm9kZSwgcHJvZ3JhbS5uYW1lKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5ydW5uaW5nID0gISF0aGlzLnBlbmRpbmc7XG5cdFx0fSxcblxuXHRcdGFib3J0KCkge1xuXHRcdFx0aWYgKHRoaXMucHJvZ3JhbSkge1xuXHRcdFx0XHRpZiAob2JqLnRpY2spIG9iai50aWNrKDEpO1xuXHRcdFx0XHRpZiAob2JqLmNzcykgdHJhbnNpdGlvbk1hbmFnZXIuZGVsZXRlUnVsZShub2RlLCB0aGlzLnByb2dyYW0ubmFtZSk7XG5cdFx0XHRcdHRoaXMucHJvZ3JhbSA9IHRoaXMucGVuZGluZyA9IG51bGw7XG5cdFx0XHRcdHRoaXMucnVubmluZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRpbnZhbGlkYXRlKCkge1xuXHRcdFx0aWYgKHRoaXMucHJvZ3JhbSkge1xuXHRcdFx0XHR0aGlzLnByb2dyYW0uaW52YWxpZGF0ZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cblxudmFyIHRyYW5zaXRpb25NYW5hZ2VyID0ge1xuXHRydW5uaW5nOiBmYWxzZSxcblx0dHJhbnNpdGlvbnM6IFtdLFxuXHRib3VuZDogbnVsbCxcblx0c3R5bGVzaGVldDogbnVsbCxcblx0YWN0aXZlUnVsZXM6IHt9LFxuXG5cdGFkZCh0cmFuc2l0aW9uKSB7XG5cdFx0dGhpcy50cmFuc2l0aW9ucy5wdXNoKHRyYW5zaXRpb24pO1xuXG5cdFx0aWYgKCF0aGlzLnJ1bm5pbmcpIHtcblx0XHRcdHRoaXMucnVubmluZyA9IHRydWU7XG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5ib3VuZCB8fCAodGhpcy5ib3VuZCA9IHRoaXMubmV4dC5iaW5kKHRoaXMpKSk7XG5cdFx0fVxuXHR9LFxuXG5cdGFkZFJ1bGUocnVsZSwgbmFtZSkge1xuXHRcdGlmICghdGhpcy5zdHlsZXNoZWV0KSB7XG5cdFx0XHRjb25zdCBzdHlsZSA9IGNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLnN0eWxlc2hlZXQgPSBzdHlsZS5zaGVldDtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuYWN0aXZlUnVsZXNbbmFtZV0pIHtcblx0XHRcdHRoaXMuYWN0aXZlUnVsZXNbbmFtZV0gPSB0cnVlO1xuXHRcdFx0dGhpcy5zdHlsZXNoZWV0Lmluc2VydFJ1bGUoYEBrZXlmcmFtZXMgJHtuYW1lfSAke3J1bGV9YCwgdGhpcy5zdHlsZXNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG5cdFx0fVxuXHR9LFxuXG5cdG5leHQoKSB7XG5cdFx0dGhpcy5ydW5uaW5nID0gZmFsc2U7XG5cblx0XHRjb25zdCBub3cgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG5cdFx0bGV0IGkgPSB0aGlzLnRyYW5zaXRpb25zLmxlbmd0aDtcblxuXHRcdHdoaWxlIChpLS0pIHtcblx0XHRcdGNvbnN0IHRyYW5zaXRpb24gPSB0aGlzLnRyYW5zaXRpb25zW2ldO1xuXG5cdFx0XHRpZiAodHJhbnNpdGlvbi5wcm9ncmFtICYmIG5vdyA+PSB0cmFuc2l0aW9uLnByb2dyYW0uZW5kKSB7XG5cdFx0XHRcdHRyYW5zaXRpb24uZG9uZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHJhbnNpdGlvbi5wZW5kaW5nICYmIG5vdyA+PSB0cmFuc2l0aW9uLnBlbmRpbmcuc3RhcnQpIHtcblx0XHRcdFx0dHJhbnNpdGlvbi5zdGFydCh0cmFuc2l0aW9uLnBlbmRpbmcpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHJhbnNpdGlvbi5ydW5uaW5nKSB7XG5cdFx0XHRcdHRyYW5zaXRpb24udXBkYXRlKG5vdyk7XG5cdFx0XHRcdHRoaXMucnVubmluZyA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKCF0cmFuc2l0aW9uLnBlbmRpbmcpIHtcblx0XHRcdFx0dGhpcy50cmFuc2l0aW9ucy5zcGxpY2UoaSwgMSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucnVubmluZykge1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYm91bmQpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zdHlsZXNoZWV0KSB7XG5cdFx0XHRsZXQgaSA9IHRoaXMuc3R5bGVzaGVldC5jc3NSdWxlcy5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoaS0tKSB0aGlzLnN0eWxlc2hlZXQuZGVsZXRlUnVsZShpKTtcblx0XHRcdHRoaXMuYWN0aXZlUnVsZXMgPSB7fTtcblx0XHR9XG5cdH0sXG5cblx0ZGVsZXRlUnVsZShub2RlLCBuYW1lKSB7XG5cdFx0bm9kZS5zdHlsZS5hbmltYXRpb24gPSBub2RlLnN0eWxlLmFuaW1hdGlvblxuXHRcdFx0LnNwbGl0KCcsICcpXG5cdFx0XHQuZmlsdGVyKGFuaW0gPT4gYW5pbSAmJiBhbmltLmluZGV4T2YobmFtZSkgPT09IC0xKVxuXHRcdFx0LmpvaW4oJywgJyk7XG5cdH0sXG5cblx0Z3JvdXBPdXRyb3MoKSB7XG5cdFx0dGhpcy5vdXRyb3MgPSB7XG5cdFx0XHRyZW1haW5pbmc6IDAsXG5cdFx0XHRjYWxsYmFja3M6IFtdXG5cdFx0fTtcblx0fVxufTtcblxuZnVuY3Rpb24gaGFuZGxlUHJvbWlzZShwcm9taXNlLCBpbmZvKSB7XG5cdHZhciB0b2tlbiA9IGluZm8udG9rZW4gPSB7fTtcblxuXHRmdW5jdGlvbiB1cGRhdGUodHlwZSwgaW5kZXgsIGtleSwgdmFsdWUpIHtcblx0XHRpZiAoaW5mby50b2tlbiAhPT0gdG9rZW4pIHJldHVybjtcblxuXHRcdGluZm8ucmVzb2x2ZWQgPSBrZXkgJiYgeyBba2V5XTogdmFsdWUgfTtcblxuXHRcdGNvbnN0IGNoaWxkX2N0eCA9IGFzc2lnbihhc3NpZ24oe30sIGluZm8uY3R4KSwgaW5mby5yZXNvbHZlZCk7XG5cdFx0Y29uc3QgYmxvY2sgPSB0eXBlICYmIChpbmZvLmN1cnJlbnQgPSB0eXBlKShpbmZvLmNvbXBvbmVudCwgY2hpbGRfY3R4KTtcblxuXHRcdGlmIChpbmZvLmJsb2NrKSB7XG5cdFx0XHRpZiAoaW5mby5ibG9ja3MpIHtcblx0XHRcdFx0aW5mby5ibG9ja3MuZm9yRWFjaCgoYmxvY2ssIGkpID0+IHtcblx0XHRcdFx0XHRpZiAoaSAhPT0gaW5kZXggJiYgYmxvY2spIHtcblx0XHRcdFx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLmdyb3VwT3V0cm9zKCk7XG5cdFx0XHRcdFx0XHRibG9jay5vKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0YmxvY2suZCgxKTtcblx0XHRcdFx0XHRcdFx0aW5mby5ibG9ja3NbaV0gPSBudWxsO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGluZm8uYmxvY2suZCgxKTtcblx0XHRcdH1cblxuXHRcdFx0YmxvY2suYygpO1xuXHRcdFx0YmxvY2tbYmxvY2suaSA/ICdpJyA6ICdtJ10oaW5mby5tb3VudCgpLCBpbmZvLmFuY2hvcik7XG5cblx0XHRcdGluZm8uY29tcG9uZW50LnJvb3Quc2V0KHt9KTsgLy8gZmx1c2ggYW55IGhhbmRsZXJzIHRoYXQgd2VyZSBjcmVhdGVkXG5cdFx0fVxuXG5cdFx0aW5mby5ibG9jayA9IGJsb2NrO1xuXHRcdGlmIChpbmZvLmJsb2NrcykgaW5mby5ibG9ja3NbaW5kZXhdID0gYmxvY2s7XG5cdH1cblxuXHRpZiAoaXNQcm9taXNlKHByb21pc2UpKSB7XG5cdFx0cHJvbWlzZS50aGVuKHZhbHVlID0+IHtcblx0XHRcdHVwZGF0ZShpbmZvLnRoZW4sIDEsIGluZm8udmFsdWUsIHZhbHVlKTtcblx0XHR9LCBlcnJvciA9PiB7XG5cdFx0XHR1cGRhdGUoaW5mby5jYXRjaCwgMiwgaW5mby5lcnJvciwgZXJyb3IpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gaWYgd2UgcHJldmlvdXNseSBoYWQgYSB0aGVuL2NhdGNoIGJsb2NrLCBkZXN0cm95IGl0XG5cdFx0aWYgKGluZm8uY3VycmVudCAhPT0gaW5mby5wZW5kaW5nKSB7XG5cdFx0XHR1cGRhdGUoaW5mby5wZW5kaW5nLCAwKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRpZiAoaW5mby5jdXJyZW50ICE9PSBpbmZvLnRoZW4pIHtcblx0XHRcdHVwZGF0ZShpbmZvLnRoZW4sIDEsIGluZm8udmFsdWUsIHByb21pc2UpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aW5mby5yZXNvbHZlZCA9IHsgW2luZm8udmFsdWVdOiBwcm9taXNlIH07XG5cdH1cbn1cblxuZnVuY3Rpb24gZGVzdHJveUJsb2NrKGJsb2NrLCBsb29rdXApIHtcblx0YmxvY2suZCgxKTtcblx0bG9va3VwW2Jsb2NrLmtleV0gPSBudWxsO1xufVxuXG5mdW5jdGlvbiBvdXRyb0FuZERlc3Ryb3lCbG9jayhibG9jaywgbG9va3VwKSB7XG5cdGJsb2NrLm8oZnVuY3Rpb24oKSB7XG5cdFx0ZGVzdHJveUJsb2NrKGJsb2NrLCBsb29rdXApO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlS2V5ZWRFYWNoKG9sZF9ibG9ja3MsIGNvbXBvbmVudCwgY2hhbmdlZCwgZ2V0X2tleSwgZHluYW1pYywgY3R4LCBsaXN0LCBsb29rdXAsIG5vZGUsIGhhc19vdXRybywgY3JlYXRlX2VhY2hfYmxvY2ssIGludHJvX21ldGhvZCwgbmV4dCwgZ2V0X2NvbnRleHQpIHtcblx0dmFyIG8gPSBvbGRfYmxvY2tzLmxlbmd0aDtcblx0dmFyIG4gPSBsaXN0Lmxlbmd0aDtcblxuXHR2YXIgaSA9IG87XG5cdHZhciBvbGRfaW5kZXhlcyA9IHt9O1xuXHR3aGlsZSAoaS0tKSBvbGRfaW5kZXhlc1tvbGRfYmxvY2tzW2ldLmtleV0gPSBpO1xuXG5cdHZhciBuZXdfYmxvY2tzID0gW107XG5cdHZhciBuZXdfbG9va3VwID0ge307XG5cdHZhciBkZWx0YXMgPSB7fTtcblxuXHR2YXIgaSA9IG47XG5cdHdoaWxlIChpLS0pIHtcblx0XHR2YXIgY2hpbGRfY3R4ID0gZ2V0X2NvbnRleHQoY3R4LCBsaXN0LCBpKTtcblx0XHR2YXIga2V5ID0gZ2V0X2tleShjaGlsZF9jdHgpO1xuXHRcdHZhciBibG9jayA9IGxvb2t1cFtrZXldO1xuXG5cdFx0aWYgKCFibG9jaykge1xuXHRcdFx0YmxvY2sgPSBjcmVhdGVfZWFjaF9ibG9jayhjb21wb25lbnQsIGtleSwgY2hpbGRfY3R4KTtcblx0XHRcdGJsb2NrLmMoKTtcblx0XHR9IGVsc2UgaWYgKGR5bmFtaWMpIHtcblx0XHRcdGJsb2NrLnAoY2hhbmdlZCwgY2hpbGRfY3R4KTtcblx0XHR9XG5cblx0XHRuZXdfYmxvY2tzW2ldID0gbmV3X2xvb2t1cFtrZXldID0gYmxvY2s7XG5cblx0XHRpZiAoa2V5IGluIG9sZF9pbmRleGVzKSBkZWx0YXNba2V5XSA9IE1hdGguYWJzKGkgLSBvbGRfaW5kZXhlc1trZXldKTtcblx0fVxuXG5cdHZhciB3aWxsX21vdmUgPSB7fTtcblx0dmFyIGRpZF9tb3ZlID0ge307XG5cblx0dmFyIGRlc3Ryb3kgPSBoYXNfb3V0cm8gPyBvdXRyb0FuZERlc3Ryb3lCbG9jayA6IGRlc3Ryb3lCbG9jaztcblx0aWYgKGhhc19vdXRybykgdHJhbnNpdGlvbk1hbmFnZXIuZ3JvdXBPdXRyb3MoKTtcblxuXHRmdW5jdGlvbiBpbnNlcnQoYmxvY2spIHtcblx0XHRibG9ja1tpbnRyb19tZXRob2RdKG5vZGUsIG5leHQpO1xuXHRcdGxvb2t1cFtibG9jay5rZXldID0gYmxvY2s7XG5cdFx0bmV4dCA9IGJsb2NrLmZpcnN0O1xuXHRcdG4tLTtcblx0fVxuXG5cdHdoaWxlIChvICYmIG4pIHtcblx0XHR2YXIgbmV3X2Jsb2NrID0gbmV3X2Jsb2Nrc1tuIC0gMV07XG5cdFx0dmFyIG9sZF9ibG9jayA9IG9sZF9ibG9ja3NbbyAtIDFdO1xuXHRcdHZhciBuZXdfa2V5ID0gbmV3X2Jsb2NrLmtleTtcblx0XHR2YXIgb2xkX2tleSA9IG9sZF9ibG9jay5rZXk7XG5cblx0XHRpZiAobmV3X2Jsb2NrID09PSBvbGRfYmxvY2spIHtcblx0XHRcdC8vIGRvIG5vdGhpbmdcblx0XHRcdG5leHQgPSBuZXdfYmxvY2suZmlyc3Q7XG5cdFx0XHRvLS07XG5cdFx0XHRuLS07XG5cdFx0fVxuXG5cdFx0ZWxzZSBpZiAoIW5ld19sb29rdXBbb2xkX2tleV0pIHtcblx0XHRcdC8vIHJlbW92ZSBvbGQgYmxvY2tcblx0XHRcdGRlc3Ryb3kob2xkX2Jsb2NrLCBsb29rdXApO1xuXHRcdFx0by0tO1xuXHRcdH1cblxuXHRcdGVsc2UgaWYgKCFsb29rdXBbbmV3X2tleV0gfHwgd2lsbF9tb3ZlW25ld19rZXldKSB7XG5cdFx0XHRpbnNlcnQobmV3X2Jsb2NrKTtcblx0XHR9XG5cblx0XHRlbHNlIGlmIChkaWRfbW92ZVtvbGRfa2V5XSkge1xuXHRcdFx0by0tO1xuXG5cdFx0fSBlbHNlIGlmIChkZWx0YXNbbmV3X2tleV0gPiBkZWx0YXNbb2xkX2tleV0pIHtcblx0XHRcdGRpZF9tb3ZlW25ld19rZXldID0gdHJ1ZTtcblx0XHRcdGluc2VydChuZXdfYmxvY2spO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdHdpbGxfbW92ZVtvbGRfa2V5XSA9IHRydWU7XG5cdFx0XHRvLS07XG5cdFx0fVxuXHR9XG5cblx0d2hpbGUgKG8tLSkge1xuXHRcdHZhciBvbGRfYmxvY2sgPSBvbGRfYmxvY2tzW29dO1xuXHRcdGlmICghbmV3X2xvb2t1cFtvbGRfYmxvY2sua2V5XSkgZGVzdHJveShvbGRfYmxvY2ssIGxvb2t1cCk7XG5cdH1cblxuXHR3aGlsZSAobikgaW5zZXJ0KG5ld19ibG9ja3NbbiAtIDFdKTtcblxuXHRyZXR1cm4gbmV3X2Jsb2Nrcztcbn1cblxuZnVuY3Rpb24gZ2V0U3ByZWFkVXBkYXRlKGxldmVscywgdXBkYXRlcykge1xuXHR2YXIgdXBkYXRlID0ge307XG5cblx0dmFyIHRvX251bGxfb3V0ID0ge307XG5cdHZhciBhY2NvdW50ZWRfZm9yID0ge307XG5cblx0dmFyIGkgPSBsZXZlbHMubGVuZ3RoO1xuXHR3aGlsZSAoaS0tKSB7XG5cdFx0dmFyIG8gPSBsZXZlbHNbaV07XG5cdFx0dmFyIG4gPSB1cGRhdGVzW2ldO1xuXG5cdFx0aWYgKG4pIHtcblx0XHRcdGZvciAodmFyIGtleSBpbiBvKSB7XG5cdFx0XHRcdGlmICghKGtleSBpbiBuKSkgdG9fbnVsbF9vdXRba2V5XSA9IDE7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAodmFyIGtleSBpbiBuKSB7XG5cdFx0XHRcdGlmICghYWNjb3VudGVkX2ZvcltrZXldKSB7XG5cdFx0XHRcdFx0dXBkYXRlW2tleV0gPSBuW2tleV07XG5cdFx0XHRcdFx0YWNjb3VudGVkX2ZvcltrZXldID0gMTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRsZXZlbHNbaV0gPSBuO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gbykge1xuXHRcdFx0XHRhY2NvdW50ZWRfZm9yW2tleV0gPSAxO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZvciAodmFyIGtleSBpbiB0b19udWxsX291dCkge1xuXHRcdGlmICghKGtleSBpbiB1cGRhdGUpKSB1cGRhdGVba2V5XSA9IHVuZGVmaW5lZDtcblx0fVxuXG5cdHJldHVybiB1cGRhdGU7XG59XG5cbmZ1bmN0aW9uIHNwcmVhZChhcmdzKSB7XG5cdGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHt9LCAuLi5hcmdzKTtcblx0bGV0IHN0ciA9ICcnO1xuXG5cdE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2gobmFtZSA9PiB7XG5cdFx0Y29uc3QgdmFsdWUgPSBhdHRyaWJ1dGVzW25hbWVdO1xuXHRcdGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cdFx0aWYgKHZhbHVlID09PSB0cnVlKSBzdHIgKz0gXCIgXCIgKyBuYW1lO1xuXHRcdHN0ciArPSBcIiBcIiArIG5hbWUgKyBcIj1cIiArIEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblx0fSk7XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuY29uc3QgZXNjYXBlZCA9IHtcblx0J1wiJzogJyZxdW90OycsXG5cdFwiJ1wiOiAnJiMzOTsnLFxuXHQnJic6ICcmYW1wOycsXG5cdCc8JzogJyZsdDsnLFxuXHQnPic6ICcmZ3Q7J1xufTtcblxuZnVuY3Rpb24gZXNjYXBlKGh0bWwpIHtcblx0cmV0dXJuIFN0cmluZyhodG1sKS5yZXBsYWNlKC9bXCInJjw+XS9nLCBtYXRjaCA9PiBlc2NhcGVkW21hdGNoXSk7XG59XG5cbmZ1bmN0aW9uIGVhY2goaXRlbXMsIGFzc2lnbiwgZm4pIHtcblx0bGV0IHN0ciA9ICcnO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0c3RyICs9IGZuKGFzc2lnbihpdGVtc1tpXSwgaSkpO1xuXHR9XG5cdHJldHVybiBzdHI7XG59XG5cbmNvbnN0IG1pc3NpbmdDb21wb25lbnQgPSB7XG5cdF9yZW5kZXI6ICgpID0+ICcnXG59O1xuXG5mdW5jdGlvbiBibGFua09iamVjdCgpIHtcblx0cmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCk7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3koZGV0YWNoKSB7XG5cdHRoaXMuZGVzdHJveSA9IG5vb3A7XG5cdHRoaXMuZmlyZSgnZGVzdHJveScpO1xuXHR0aGlzLnNldCA9IG5vb3A7XG5cblx0dGhpcy5fZnJhZ21lbnQuZChkZXRhY2ggIT09IGZhbHNlKTtcblx0dGhpcy5fZnJhZ21lbnQgPSBudWxsO1xuXHR0aGlzLl9zdGF0ZSA9IHt9O1xufVxuXG5mdW5jdGlvbiBkZXN0cm95RGV2KGRldGFjaCkge1xuXHRkZXN0cm95LmNhbGwodGhpcywgZGV0YWNoKTtcblx0dGhpcy5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS53YXJuKCdDb21wb25lbnQgd2FzIGFscmVhZHkgZGVzdHJveWVkJyk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIF9kaWZmZXJzKGEsIGIpIHtcblx0cmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGIgfHwgKChhICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JykgfHwgdHlwZW9mIGEgPT09ICdmdW5jdGlvbicpO1xufVxuXG5mdW5jdGlvbiBfZGlmZmVyc0ltbXV0YWJsZShhLCBiKSB7XG5cdHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiO1xufVxuXG5mdW5jdGlvbiBmaXJlKGV2ZW50TmFtZSwgZGF0YSkge1xuXHR2YXIgaGFuZGxlcnMgPVxuXHRcdGV2ZW50TmFtZSBpbiB0aGlzLl9oYW5kbGVycyAmJiB0aGlzLl9oYW5kbGVyc1tldmVudE5hbWVdLnNsaWNlKCk7XG5cdGlmICghaGFuZGxlcnMpIHJldHVybjtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGhhbmRsZXJzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dmFyIGhhbmRsZXIgPSBoYW5kbGVyc1tpXTtcblxuXHRcdGlmICghaGFuZGxlci5fX2NhbGxpbmcpIHtcblx0XHRcdGhhbmRsZXIuX19jYWxsaW5nID0gdHJ1ZTtcblx0XHRcdGhhbmRsZXIuY2FsbCh0aGlzLCBkYXRhKTtcblx0XHRcdGhhbmRsZXIuX19jYWxsaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGdldCgpIHtcblx0cmV0dXJuIHRoaXMuX3N0YXRlO1xufVxuXG5mdW5jdGlvbiBpbml0KGNvbXBvbmVudCwgb3B0aW9ucykge1xuXHRjb21wb25lbnQuX2hhbmRsZXJzID0gYmxhbmtPYmplY3QoKTtcblx0Y29tcG9uZW50Ll9iaW5kID0gb3B0aW9ucy5fYmluZDtcblxuXHRjb21wb25lbnQub3B0aW9ucyA9IG9wdGlvbnM7XG5cdGNvbXBvbmVudC5yb290ID0gb3B0aW9ucy5yb290IHx8IGNvbXBvbmVudDtcblx0Y29tcG9uZW50LnN0b3JlID0gY29tcG9uZW50LnJvb3Quc3RvcmUgfHwgb3B0aW9ucy5zdG9yZTtcbn1cblxuZnVuY3Rpb24gb24oZXZlbnROYW1lLCBoYW5kbGVyKSB7XG5cdHZhciBoYW5kbGVycyA9IHRoaXMuX2hhbmRsZXJzW2V2ZW50TmFtZV0gfHwgKHRoaXMuX2hhbmRsZXJzW2V2ZW50TmFtZV0gPSBbXSk7XG5cdGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG5cblx0cmV0dXJuIHtcblx0XHRjYW5jZWw6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGluZGV4ID0gaGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKTtcblx0XHRcdGlmICh+aW5kZXgpIGhhbmRsZXJzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBydW4oZm4pIHtcblx0Zm4oKTtcbn1cblxuZnVuY3Rpb24gc2V0KG5ld1N0YXRlKSB7XG5cdHRoaXMuX3NldChhc3NpZ24oe30sIG5ld1N0YXRlKSk7XG5cdGlmICh0aGlzLnJvb3QuX2xvY2spIHJldHVybjtcblx0dGhpcy5yb290Ll9sb2NrID0gdHJ1ZTtcblx0Y2FsbEFsbCh0aGlzLnJvb3QuX2JlZm9yZWNyZWF0ZSk7XG5cdGNhbGxBbGwodGhpcy5yb290Ll9vbmNyZWF0ZSk7XG5cdGNhbGxBbGwodGhpcy5yb290Ll9hZnRlcmNyZWF0ZSk7XG5cdHRoaXMucm9vdC5fbG9jayA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBfc2V0KG5ld1N0YXRlKSB7XG5cdHZhciBvbGRTdGF0ZSA9IHRoaXMuX3N0YXRlLFxuXHRcdGNoYW5nZWQgPSB7fSxcblx0XHRkaXJ0eSA9IGZhbHNlO1xuXG5cdGZvciAodmFyIGtleSBpbiBuZXdTdGF0ZSkge1xuXHRcdGlmICh0aGlzLl9kaWZmZXJzKG5ld1N0YXRlW2tleV0sIG9sZFN0YXRlW2tleV0pKSBjaGFuZ2VkW2tleV0gPSBkaXJ0eSA9IHRydWU7XG5cdH1cblx0aWYgKCFkaXJ0eSkgcmV0dXJuO1xuXG5cdHRoaXMuX3N0YXRlID0gYXNzaWduKGFzc2lnbih7fSwgb2xkU3RhdGUpLCBuZXdTdGF0ZSk7XG5cdHRoaXMuX3JlY29tcHV0ZShjaGFuZ2VkLCB0aGlzLl9zdGF0ZSk7XG5cdGlmICh0aGlzLl9iaW5kKSB0aGlzLl9iaW5kKGNoYW5nZWQsIHRoaXMuX3N0YXRlKTtcblxuXHRpZiAodGhpcy5fZnJhZ21lbnQpIHtcblx0XHR0aGlzLmZpcmUoXCJzdGF0ZVwiLCB7IGNoYW5nZWQ6IGNoYW5nZWQsIGN1cnJlbnQ6IHRoaXMuX3N0YXRlLCBwcmV2aW91czogb2xkU3RhdGUgfSk7XG5cdFx0dGhpcy5fZnJhZ21lbnQucChjaGFuZ2VkLCB0aGlzLl9zdGF0ZSk7XG5cdFx0dGhpcy5maXJlKFwidXBkYXRlXCIsIHsgY2hhbmdlZDogY2hhbmdlZCwgY3VycmVudDogdGhpcy5fc3RhdGUsIHByZXZpb3VzOiBvbGRTdGF0ZSB9KTtcblx0fVxufVxuXG5mdW5jdGlvbiBzZXREZXYobmV3U3RhdGUpIHtcblx0aWYgKHR5cGVvZiBuZXdTdGF0ZSAhPT0gJ29iamVjdCcpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHR0aGlzLl9kZWJ1Z05hbWUgKyAnLnNldCB3YXMgY2FsbGVkIHdpdGhvdXQgYW4gb2JqZWN0IG9mIGRhdGEga2V5LXZhbHVlcyB0byB1cGRhdGUuJ1xuXHRcdCk7XG5cdH1cblxuXHR0aGlzLl9jaGVja1JlYWRPbmx5KG5ld1N0YXRlKTtcblx0c2V0LmNhbGwodGhpcywgbmV3U3RhdGUpO1xufVxuXG5mdW5jdGlvbiBjYWxsQWxsKGZucykge1xuXHR3aGlsZSAoZm5zICYmIGZucy5sZW5ndGgpIGZucy5zaGlmdCgpKCk7XG59XG5cbmZ1bmN0aW9uIF9tb3VudCh0YXJnZXQsIGFuY2hvcikge1xuXHR0aGlzLl9mcmFnbWVudFt0aGlzLl9mcmFnbWVudC5pID8gJ2knIDogJ20nXSh0YXJnZXQsIGFuY2hvciB8fCBudWxsKTtcbn1cblxudmFyIFBFTkRJTkcgPSB7fTtcbnZhciBTVUNDRVNTID0ge307XG52YXIgRkFJTFVSRSA9IHt9O1xuXG5mdW5jdGlvbiByZW1vdmVGcm9tU3RvcmUoKSB7XG5cdHRoaXMuc3RvcmUuX3JlbW92ZSh0aGlzKTtcbn1cblxudmFyIHByb3RvID0ge1xuXHRkZXN0cm95LFxuXHRnZXQsXG5cdGZpcmUsXG5cdG9uLFxuXHRzZXQsXG5cdF9yZWNvbXB1dGU6IG5vb3AsXG5cdF9zZXQsXG5cdF9tb3VudCxcblx0X2RpZmZlcnNcbn07XG5cbnZhciBwcm90b0RldiA9IHtcblx0ZGVzdHJveTogZGVzdHJveURldixcblx0Z2V0LFxuXHRmaXJlLFxuXHRvbixcblx0c2V0OiBzZXREZXYsXG5cdF9yZWNvbXB1dGU6IG5vb3AsXG5cdF9zZXQsXG5cdF9tb3VudCxcblx0X2RpZmZlcnNcbn07XG5cbmV4cG9ydCB7IGJsYW5rT2JqZWN0LCBkZXN0cm95LCBkZXN0cm95RGV2LCBfZGlmZmVycywgX2RpZmZlcnNJbW11dGFibGUsIGZpcmUsIGdldCwgaW5pdCwgb24sIHJ1biwgc2V0LCBfc2V0LCBzZXREZXYsIGNhbGxBbGwsIF9tb3VudCwgUEVORElORywgU1VDQ0VTUywgRkFJTFVSRSwgcmVtb3ZlRnJvbVN0b3JlLCBwcm90bywgcHJvdG9EZXYsIGhhbmRsZVByb21pc2UsIGFwcGVuZE5vZGUsIGluc2VydE5vZGUsIGRldGFjaE5vZGUsIGRldGFjaEJldHdlZW4sIGRldGFjaEJlZm9yZSwgZGV0YWNoQWZ0ZXIsIHJlaW5zZXJ0QmV0d2VlbiwgcmVpbnNlcnRDaGlsZHJlbiwgcmVpbnNlcnRBZnRlciwgcmVpbnNlcnRCZWZvcmUsIGRlc3Ryb3lFYWNoLCBjcmVhdGVGcmFnbWVudCwgY3JlYXRlRWxlbWVudCwgY3JlYXRlU3ZnRWxlbWVudCwgY3JlYXRlVGV4dCwgY3JlYXRlQ29tbWVudCwgYWRkTGlzdGVuZXIsIHJlbW92ZUxpc3RlbmVyLCBzZXRBdHRyaWJ1dGUsIHNldEF0dHJpYnV0ZXMsIHJlbW92ZUF0dHJpYnV0ZSwgc2V0WGxpbmtBdHRyaWJ1dGUsIGdldEJpbmRpbmdHcm91cFZhbHVlLCB0b051bWJlciwgdGltZVJhbmdlc1RvQXJyYXksIGNoaWxkcmVuLCBjbGFpbUVsZW1lbnQsIGNsYWltVGV4dCwgc2V0SW5wdXRUeXBlLCBzZXRTdHlsZSwgc2VsZWN0T3B0aW9uLCBzZWxlY3RPcHRpb25zLCBzZWxlY3RWYWx1ZSwgc2VsZWN0TXVsdGlwbGVWYWx1ZSwgYWRkUmVzaXplTGlzdGVuZXIsIGRlc3Ryb3lCbG9jaywgb3V0cm9BbmREZXN0cm95QmxvY2ssIHVwZGF0ZUtleWVkRWFjaCwgZ2V0U3ByZWFkVXBkYXRlLCBzcHJlYWQsIGVzY2FwZWQsIGVzY2FwZSwgZWFjaCwgbWlzc2luZ0NvbXBvbmVudCwgbGluZWFyLCBnZW5lcmF0ZVJ1bGUsIGhhc2gsIHdyYXBUcmFuc2l0aW9uLCB0cmFuc2l0aW9uTWFuYWdlciwgbm9vcCwgYXNzaWduLCBhc3NpZ25UcnVlLCBpc1Byb21pc2UgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XG5cbm5ldyBBcHAoeyB0YXJnZXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKSB9KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9pbmRleC5qcyIsIjxkaXYgY2xhc3M9XCJmb3JtLWJveFwiPlxuXHQ8WWVhck1vbnRoUGlja2VyIHJlZjpwaWNrZXI+PC9ZZWFyTW9udGhQaWNrZXI+XG5cdDxGb3JtIHJlZjpmb3JtPjwvRm9ybT5cbjwvZGl2PlxuPFRhYmxlIHJlZjp0YWJsZT48L1RhYmxlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFllYXJNb250aFBpY2tlciBmcm9tICcuLi95ZWFyLW1vbnRoLXBpY2tlcic7XG5pbXBvcnQgRm9ybSBmcm9tICcuLi9mb3JtJztcbmltcG9ydCBUYWJsZSBmcm9tICcuLi90YWJsZSc7XG5pbXBvcnQge0dyb3VwcywgRXhwZW5zZXN9IGZyb20gJy4uL2RhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhdGEgKCkgeyByZXR1cm4ge307IH0sXG5cdGNvbXBvbmVudHM6IHsgRm9ybSwgVGFibGUsIFllYXJNb250aFBpY2tlciB9LFxuXHRvbmNyZWF0ZSAoKSB7XG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zdWJzdHIoMCwgNyk7XG5cdFx0R3JvdXBzLmdldCgpLnRoZW4oZ3JvdXBzID0+IHRoaXMucmVmcy5mb3JtLnNldCh7IGRhdGUsIGdyb3VwcyB9KSk7XG5cdFx0dGhpcy5sb2FkVGFibGUoZGF0ZSk7XG5cblx0XHR0aGlzLnJlZnMuZm9ybS5vbignY2hhbmdlJywgdGhpcy5vbkZvcm1DaGFuZ2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5yZWZzLmZvcm0ub24oJ3JlbW92ZScsIHRoaXMub25SZW1vdmVJdGVtLmJpbmQodGhpcykpO1xuXHRcdHRoaXMucmVmcy5mb3JtLm9uKCdzdWJtaXQnLCB0aGlzLm9uRm9ybVN1Ym1pdC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnJlZnMuZm9ybS5vbignZXJyb3InLCB0aGlzLm9uRm9ybUVycm9yLmJpbmQodGhpcykpO1xuXHRcdHRoaXMucmVmcy5waWNrZXIub24oJ2NoYW5nZScsIHRoaXMub25EYXRlQ2hhbmdlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMucmVmcy50YWJsZS5vbignY2xpY2snLCB0aGlzLm9uVGFibGVDbGljay5iaW5kKHRoaXMpKTtcblx0fSxcblxuXHRtZXRob2RzOiB7XG5cdFx0bG9hZFRhYmxlIChkYXRlKSB7XG5cdFx0XHRpZiAoIWRhdGUpIGRhdGUgPSB0aGlzLmxhc3REYXRlO1xuXHRcdFx0ZWxzZSB0aGlzLmxhc3REYXRlID0gZGF0ZTtcblx0XHRcdEV4cGVuc2VzLmdldChkYXRlKS50aGVuKGRhdGEgPT4ge1xuXHRcdFx0XHR0aGlzLmxhc3RUYWJsZURhdGEgPSBkYXRhO1xuXHRcdFx0XHR0aGlzLnJlZnMudGFibGUuc2V0KHsgZGF0YSB9KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHRvbkRhdGVDaGFuZ2UgKGRhdGUpIHtcblx0XHRcdHRoaXMucmVmcy5mb3JtLnNldCh7IGRhdGU6IGRhdGUuZGF0ZVN0ciB9KTtcblx0XHRcdHRoaXMubG9hZFRhYmxlKGRhdGUuZGF0ZVN0cik7XG5cdFx0fSxcblxuXHRcdG9uRm9ybUNoYW5nZSAoZGF0YSkge1xuXHRcdFx0aWYgKGRhdGEgJiYgZGF0YS5sZW5ndGgpIHtcblx0XHRcdFx0dGhpcy5yZWZzLnRhYmxlLnNldCh7IGRhdGEsIGlzUHJldmlldzogdHJ1ZSB9KTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aGlzLnJlZnMudGFibGUuc2V0KHsgZGF0YTogdGhpcy5sYXN0VGFibGVEYXRhLCBpc1ByZXZpZXc6IGZhbHNlIH0pO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRvbkZvcm1TdWJtaXQgKGRhdGEpIHtcblx0XHRcdEV4cGVuc2VzLnNhdmUoZGF0YSkudGhlbigoKSA9PiB0aGlzLmxvYWRUYWJsZSgpKTtcblx0XHR9LFxuXG5cdFx0b25SZW1vdmVJdGVtIChpdGVtKSB7XG5cdFx0XHRFeHBlbnNlcy5kZWwoaXRlbS5pZCkudGhlbigoKSA9PiB0aGlzLmxvYWRUYWJsZSgpKTtcblx0XHR9LFxuXG5cdFx0b25Gb3JtRXJyb3IgKGVycikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyKTtcdC8vIFRPRE86IHRvYXN0P1xuXHRcdH0sXG5cblx0XHRvblRhYmxlQ2xpY2sgKGl0ZW0pIHsgdGhpcy5yZWZzLmZvcm0uZWRpdChpdGVtKTsgfSxcblx0fVxufTtcblxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvYXBwL2luZGV4Lmh0bWwiLCI8ZGl2IGNsYXNzPVwieWVhci1tb250aC1waWNrZXIge2lzVG9kYXkgPyAnaXMtdG9kYXknOiAnJ31cIiBvbjp3aGVlbD1cIm9ud2hlZWwoZXZlbnQpXCI+XG5cdDxidXR0b24gcmVmOmxlZnRCdXR0b24gY2xhc3M9XCJidG4tcHJldlwiIHRpdGxlPVwiUHJldmlvdXMgbW9udGhcIlxuXHRcdG9uOmtleWRvd249XCJrZXlkb3duKGV2ZW50LmtleSwgLTEpXCJcblx0XHRvbjprZXl1cD1cImtleXVwKGV2ZW50LmtleSlcIlxuXHRcdG9uOm1vdXNlZG93bj1cInRpY2soLTEpXCJcblx0XHRvbjptb3VzZW91dD1cIm11cCgpXCJcblx0XHRvbjptb3VzZXVwPVwibXVwKClcIj48aSBjbGFzcz1cImlvbi1pb3MtYXJyb3ctYmFja1wiPjwvaT48L2J1dHRvbj5cblxuXHQ8c3BhbiBjbGFzcz1cImRheVwiPnttb250aHNbbW9udGhdfSB7eWVhcn08L3NwYW4+XG5cblx0PGJ1dHRvbiByZWY6cmlnaHRCdXR0b24gY2xhc3M9XCJidG4tbmV4dFwiIHRpdGxlPVwiTmV4dCBtb250aFwiXG5cdFx0b246a2V5ZG93bj1cImtleWRvd24oZXZlbnQua2V5LCAxKVwiXG5cdFx0b246a2V5dXA9XCJrZXl1cChldmVudC5rZXkpXCJcblx0XHRvbjptb3VzZWRvd249XCJ0aWNrKDEpXCJcblx0XHRvbjptb3VzZW91dD1cIm11cCgpXCJcblx0XHRvbjptb3VzZXVwPVwibXVwKClcIj48aSBjbGFzcz1cImlvbi1pb3MtYXJyb3ctZm9yd2FyZFwiPjwvaT48L2J1dHRvbj5cblxuXHQ8YnV0dG9uIHRpdGxlPVwiVG9kYXlcIiBjbGFzcz1cImJ0bi10b2RheVwiIG9uOmNsaWNrPVwicmVzZXQoKVwiPjxpIGNsYXNzPVwiaW9uLW1kLXVuZG9cIj48L2k+PC9idXR0b24+XG48L2Rpdj5cblxuPHNjcmlwdD5cbmZ1bmN0aW9uIHplcm9TdGF0ZSAoKSB7XG5cdGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuXHRjb25zdCBtb250aCA9IGQuZ2V0TW9udGgoKTtcblx0Y29uc3QgeWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcblx0Y29uc3QgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXHRyZXR1cm4geyBtb250aHMsIG1vbnRoLCB5ZWFyLCBjdXJyZW50OiB7IG1vbnRoLCB5ZWFyIH0gfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhICgpIHsgcmV0dXJuIHplcm9TdGF0ZSgpOyB9LFxuXHRjb21wdXRlZDoge1xuXHRcdGlzVG9kYXk6ICh7bW9udGgsIHllYXIsIGN1cnJlbnR9KSA9PiAobW9udGggPT09IGN1cnJlbnQubW9udGggJiYgeWVhciA9PT0gY3VycmVudC55ZWFyKSxcblx0XHRkYXRlU3RyOiAoe21vbnRoLCB5ZWFyfSkgPT4gYCR7eWVhcn0tJHsoJzAnICsgKG1vbnRoICsgMSkpLnN1YnN0cigtMil9YFxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0b253aGVlbCAoZSkge1xuXHRcdFx0Y29uc3QgdGhyZXNob2xkID0gMjtcblx0XHRcdGxldCB2YWwgPSBudWxsO1xuXHRcdFx0aWYgKGUuZGVsdGFZIDwgLXRocmVzaG9sZCkgdmFsID0gLTE7XG5cdFx0XHRlbHNlIGlmIChlLmRlbHRhWSA+IHRocmVzaG9sZCkgdmFsID0gMTtcblx0XHRcdGlmICh2YWwpIHRoaXMud2hlZWxUaHJvdHRsZSh2YWwsIGZhbHNlKTtcblx0XHR9LFxuXG5cdFx0d2hlZWxUaHJvdHRsZSAodmFsdWUpIHtcblx0XHRcdGlmICghdGhpcy50aHJvdHRsZXIpIHtcblx0XHRcdFx0dGhpcy5nbyh2YWx1ZSk7XG5cdFx0XHRcdHRoaXMubm90aWZ5KCk7XG5cdFx0XHRcdHRoaXMudGhyb3R0bGVyID0gc2V0VGltZW91dCgoKSA9PiAodGhpcy50aHJvdHRsZXIgPSBudWxsKSwgMTAwKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0a2V5dXAgKGtleSkge1xuXHRcdFx0dGhpcy5rZXlJc0Rvd24gPSBmYWxzZTtcblx0XHRcdGlmICh0aGlzLnRpY2tlcikgY2xlYXJUaW1lb3V0KHRoaXMudGlja2VyKTtcblx0XHRcdGlmIChrZXkgPT09ICcgJyB8fCBrZXkgPT09ICdFbnRlcicgfHxcblx0XHRcdFx0a2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBrZXkgPT09ICdBcnJvd1JpZ2h0JyB8fFxuXHRcdFx0XHRrZXkgPT09ICdBcnJvd0Rvd24nIHx8IGtleSA9PT0gJ0Fycm93VXAnKSB0aGlzLm5vdGlmeSgpO1xuXHRcdH0sXG5cblx0XHRrZXlkb3duIChrZXksIHZhbHVlKSB7XG5cdFx0XHRpZiAodGhpcy5rZXlJc0Rvd24pIHJldHVybjtcblx0XHRcdGlmIChrZXkgPT09ICdBcnJvd0xlZnQnIHx8IGtleSA9PT0gJ0Fycm93RG93bicpIHtcblx0XHRcdFx0dGhpcy5yZWZzLmxlZnRCdXR0b24uZm9jdXMoKTtcblx0XHRcdFx0dGhpcy5rZXlJc0Rvd24gPSB0cnVlO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy50aWNrKC0xKTtcblx0XHRcdH1cblx0XHRcdGlmIChrZXkgPT09ICdBcnJvd1JpZ2h0JyB8fCBrZXkgPT09ICdBcnJvd1VwJykge1xuXHRcdFx0XHR0aGlzLnJlZnMucmlnaHRCdXR0b24uZm9jdXMoKTtcblx0XHRcdFx0dGhpcy5rZXlJc0Rvd24gPSB0cnVlO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy50aWNrKDEpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGtleSA9PT0gJyAnIHx8IGtleSA9PT0gJ0VudGVyJykge1xuXHRcdFx0XHR0aGlzLmtleUlzRG93biA9IHRydWU7XG5cdFx0XHRcdHRoaXMudGljayh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdG11cCAoKSB7XG5cdFx0XHRpZiAodGhpcy50aWNrZXIpIGNsZWFyVGltZW91dCh0aGlzLnRpY2tlcik7XG5cdFx0XHRpZiAodGhpcy5tb3VzZUlzRG93bikgdGhpcy5ub3RpZnkoKTtcblx0XHRcdHRoaXMubW91c2VJc0Rvd24gPSBmYWxzZTtcblx0XHR9LFxuXG5cdFx0dGljayAodmFsdWUsIGRlbGF5ID0gMzAwKSB7XG5cdFx0XHRpZiAodGhpcy50aWNrZXIpIGNsZWFyVGltZW91dCh0aGlzLnRpY2tlcik7XG5cdFx0XHR0aGlzLmdvKHZhbHVlKTtcblx0XHRcdGlmICh0aGlzLmdldCgpLmlzVG9kYXkpIHJldHVybiB0aGlzLm5vdGlmeSgpO1xuXHRcdFx0dGhpcy5tb3VzZUlzRG93biA9IHRydWU7XG5cdFx0XHR0aGlzLnRpY2tlciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRkZWxheSA9IE1hdGgubWF4KDYwLCBkZWxheSAtIDQwKTtcblx0XHRcdFx0dGhpcy50aWNrKHZhbHVlLCBkZWxheSk7XG5cdFx0XHR9LCBkZWxheSk7XG5cdFx0fSxcblxuXHRcdGdvICh2YWx1ZSkge1xuXHRcdFx0bGV0IHttb250aCwgeWVhcn0gPSB0aGlzLmdldCgpO1xuXHRcdFx0bW9udGggKz0gdmFsdWU7XG5cdFx0XHRpZiAobW9udGggPCAwKSB7IG1vbnRoID0gMTE7IHllYXIgLT0gMTsgfVxuXHRcdFx0ZWxzZSBpZiAobW9udGggPiAxMSkgeyBtb250aCA9IDA7IHllYXIgKz0gMTsgfVxuXHRcdFx0dGhpcy5zZXQoeyBtb250aCwgeWVhciB9KTtcblx0XHR9LFxuXG5cdFx0bm90aWZ5ICgpIHtcblx0XHRcdGNvbnN0IHttb250aCwgeWVhciwgZGF0ZVN0cn0gPSB0aGlzLmdldCgpO1xuXHRcdFx0dGhpcy5maXJlKCdjaGFuZ2UnLCB7IG1vbnRoLCB5ZWFyLCBkYXRlU3RyIH0pO1xuXHRcdH0sXG5cblx0XHRyZXNldCAoKSB7XG5cdFx0XHR0aGlzLnNldCh6ZXJvU3RhdGUoKSk7XG5cdFx0XHR0aGlzLm5vdGlmeSgpO1xuXHRcdH1cblx0fVxufTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3llYXItbW9udGgtcGlja2VyL2luZGV4Lmh0bWwiLCI8Zm9ybSByZWY6Zm9ybSBjbGFzcz1cImZvcm0ge2luRWRpdCA/ICdlZGl0JyA6ICcnfVwiIG9uOnN1Ym1pdD1cIm9uc3VibWl0KGV2ZW50KVwiPlxuXHQ8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJpZFwiIGJpbmQ6dmFsdWU9XCJpZFwiPlxuXHRcdDx0ZXh0YXJlYSBhdXRvZm9jdXNcblx0XHRcdHJlZjp0ZXh0Ym94XG5cdFx0XHR0YWJpbmRleD1cIjFcIlxuXHRcdFx0cGxhY2Vob2xkZXI9XCJlLmcuIFRlc2NvIDEyLjUwXCJcblx0XHRcdG9uOmZvY3VzPVwib25mb2N1cygpXCJcblx0XHRcdG9uOmlucHV0PVwib25pbnB1dCgpXCJcblx0XHRcdG9uOmtleWRvd249XCJvbmtleWRvd24oZXZlbnQpXCJcblx0XHRcdGJpbmQ6dmFsdWU9XCJ0ZXh0XCI+PC90ZXh0YXJlYT5cblx0PC9kaXY+XG5cdDxkaXYgY2xhc3M9XCJmb3JtLWZvb3RlciBmb3JtLXJvd1wiPlxuXHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiM1wiIGNsYXNzPVwiYnRuIGJ0bi1yZXNldFwiIG9uOmNsaWNrPVwicmVzZXQoKVwiPkNsZWFyPC9idXR0b24+XG5cdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCI0XCIgY2xhc3M9XCJidG4gZGFuZ2VyIGJ0bi1yZW1vdmVcIiBvbjpjbGljaz1cInJlbW92ZSgpXCI+UmVtb3ZlPC9idXR0b24+XG5cdFx0PGRpdiBjbGFzcz1cImZsZXgtZmlsbGVyXCI+PC9kaXY+XG5cdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCIzXCIgY2xhc3M9XCJidG4gYnRuLWNhbmNlbFwiIG9uOmNsaWNrPVwicmVzZXQoKVwiPkNhbmNlbDwvYnV0dG9uPlxuXHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIHRhYmluZGV4PVwiMlwiIGNsYXNzPVwiYnRuIHN1Y2Nlc3MgYnRuLXNhdmVcIj5TYXZlPC9idXR0b24+XG5cdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdGFiaW5kZXg9XCIyXCIgY2xhc3M9XCJidG4gc3VjY2VzcyBidG4tYWRkXCI+QWRkPC9idXR0b24+XG5cdDwvZGl2PlxuPC9mb3JtPlxuXG48c2NyaXB0PlxuaW1wb3J0IFBhcnNlciBmcm9tICcuL3RleHQtcGFyc2VyJztcblxuZnVuY3Rpb24gZm9ybWF0TnVtYmVyIChudW0pIHtcblx0bnVtID0gTWF0aC5yb3VuZCgwICsgbnVtICogMTAwKSAvIDEwMDtcblx0cmV0dXJuIG51bS50b0xvY2FsZVN0cmluZygnZW4tR0InLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhdGEgKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRpbkVkaXQ6IGZhbHNlLFxuXHRcdFx0ZGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnN1YnN0cigwLCA3KSxcblx0XHRcdGlkOiBudWxsLFxuXHRcdFx0dGV4dDogJ1V0aWxpdGllcyAoZWxlY3RyaWNpdHksIGdhcywgaW50ZXJuZXQpIHNwb3RpZnkgMTAnLFxuXHRcdFx0Z3JvdXBzOiBbXSxcblx0XHRcdHJvd3M6IFtdLFxuXHRcdH07XG5cdH0sXG5cdGNvbXB1dGVkOiB7XG5cdFx0X2dyb3VwcyAoe2dyb3Vwc30pIHtcblx0XHRcdHJldHVybiBncm91cHMubWFwKGcgPT4ge1xuXHRcdFx0XHQvLyBjb25zdCBzdHIgPSAoZy5uYW1lICsgJywnICsgZy5rZXl3b3JkcykudG9Mb3dlckNhc2UoKS5zcGxpdCgnLCcpO1xuXHRcdFx0XHRjb25zdCBlc2NhcGVkID0gZy5uYW1lLnJlcGxhY2UoL1stW1xcXS97fSgpKis/LlxcXFxeJHxdL2csICdcXFxcJCYnKTtcblx0XHRcdFx0Zy5fbmFtZSA9IG5ldyBSZWdFeHAoZXNjYXBlZCwgJ2knKTtcblx0XHRcdFx0cmV0dXJuIGc7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sXG5cblx0bWV0aG9kczoge1xuXHRcdG9uZm9jdXMgKCkge1xuXHRcdFx0dGhpcy5wYXJzZSgpO1xuXHRcdH0sXG5cblx0XHRvbmlucHV0ICgpIHtcblx0XHRcdHRoaXMudG9nZ2xlQW1vdW50RXJyb3IoKTtcblx0XHRcdHRoaXMudXBkYXRlSGVpZ2h0KCk7XG5cdFx0XHR0aGlzLnBhcnNlKCk7XG5cdFx0fSxcblxuXHRcdG9ua2V5ZG93biAoZSkge1xuXHRcdFx0aWYgKGUua2V5ID09PSAnRW50ZXInICYmIChlLm1ldGFLZXkgfHwgZS5jdHJsS2V5KSkgdGhpcy5vbnN1Ym1pdChlKTtcblx0XHRcdGVsc2UgaWYgKGUua2V5ID09PSAnRXNjYXBlJykgdGhpcy5yZXNldChlKTtcblx0XHR9LFxuXG5cdFx0cGFyc2UgKCkge1xuXHRcdFx0aWYgKHRoaXMucGFyc2VUaW1lcikgY2xlYXJUaW1lb3V0KHRoaXMucGFyc2VUaW1lcik7XG5cdFx0XHR0aGlzLnBhcnNlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0Y29uc3Qgcm93cyA9IFBhcnNlci5wYXJzZSh0aGlzLmdldCgpLnRleHQsIHRoaXMuZ2V0KCkpO1xuXHRcdFx0XHR0aGlzLnNldCh7IHJvd3MgfSk7XG5cdFx0XHRcdHRoaXMuZmlyZSgnY2hhbmdlJywgcm93cyk7XG5cdFx0XHR9LCAzMDApO1xuXHRcdH0sXG5cblx0XHRlZGl0IChkYXRhKSB7XG5cdFx0XHR0aGlzLnJlc2V0KCk7XG5cdFx0XHRjb25zdCB0ZXh0ID0gYCR7ZGF0YS5ncm91cC5uYW1lfSAke2RhdGEuZGVzY3JpcHRpb259ICR7Zm9ybWF0TnVtYmVyKGRhdGEuYW1vdW50KX1gO1xuXHRcdFx0dGhpcy5zZXQoeyBpbkVkaXQ6IHRydWUsIGlkOiBkYXRhLmlkLCBkYXRlOiBkYXRhLmRhdGUsIHRleHQgfSk7XG5cdFx0XHR0aGlzLmZpcmUoJ2NoYW5nZScsIHRoaXMuZ2V0KCkucm93cyk7XG5cdFx0fSxcblxuXHRcdHJlc2V0ICgpIHtcblx0XHRcdHRoaXMuc2V0KHsgaW5FZGl0OiBmYWxzZSwgaWQ6IG51bGwsIHRleHQ6ICcnLCByb3dzOiBbXSB9KTtcblx0XHRcdHRoaXMudG9nZ2xlQW1vdW50RXJyb3IoKTtcblx0XHRcdHRoaXMuZmlyZSgnY2hhbmdlJywgW10pO1xuXHRcdFx0dGhpcy51cGRhdGVIZWlnaHQoKTtcblx0XHRcdHRoaXMucmVmcy50ZXh0Ym94LmZvY3VzKCk7XG5cdFx0fSxcblxuXHRcdHJlbW92ZSAoKSB7XG5cdFx0XHR0aGlzLmZpcmUoJ3JlbW92ZScsIHsgaWQ6IHRoaXMuZ2V0KCkuaWQgfSk7XG5cdFx0XHR0aGlzLnJlc2V0KCk7XG5cdFx0fSxcblxuXHRcdG9uc3VibWl0IChlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRjb25zdCBkYXRhID0gdGhpcy5nZXQoKTtcblx0XHRcdGNvbnN0IHJvd3MgPSBkYXRhLnJvd3M7XG5cdFx0XHRpZiAoIXJvd3MubGVuZ3RoKSB7XG5cdFx0XHRcdHRoaXMudG9nZ2xlQW1vdW50RXJyb3IoJ1BsZWFzZSBlbnRlciBhbW91bnQgYW5kIGNhdGVnb3J5Jyk7XG5cdFx0XHRcdHJldHVybiB0aGlzLmZpcmUoJ2Vycm9yJywgJ1BsZWFzZSBlbnRlciBhbW91bnQgYW5kIGNhdGVnb3J5Jyk7XG5cdFx0XHR9XG5cdFx0XHQvLyBpdGVtIHdhcyBlZGl0ZWRcblx0XHRcdGlmIChkYXRhLmlkICYmIHJvd3MubGVuZ3RoID09PSAxKSByb3dzWzBdLmlkID0gZGF0YS5pZDtcblx0XHRcdGNvbnN0IGl0ZW1zID0gcm93cy5tYXAodGhpcy5sZWFuSXRlbUZvclNhdmUpO1xuXHRcdFx0dGhpcy5maXJlKCdzdWJtaXQnLCBpdGVtcyk7XG5cdFx0XHR0aGlzLnJlc2V0KCk7XG5cdFx0fSxcblxuXHRcdGxlYW5JdGVtRm9yU2F2ZSAoaXRlbSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0aWQ6IGl0ZW0uaWQsXG5cdFx0XHRcdGRhdGU6IGl0ZW0uZGF0ZSxcblx0XHRcdFx0YW1vdW50OiBpdGVtLmFtb3VudCxcblx0XHRcdFx0ZGVzY3JpcHRpb246IGl0ZW0uZGVzY3JpcHRpb24sXG5cdFx0XHRcdGdyb3VwX2lkOiBpdGVtLmdyb3VwX2lkXG5cdFx0XHR9O1xuXHRcdH0sXG5cblx0XHR0b2dnbGVBbW91bnRFcnJvciAobXNnID0gJycpIHtcblx0XHRcdHRoaXMucmVmcy50ZXh0Ym94LnNldEN1c3RvbVZhbGlkaXR5KG1zZyk7XG5cdFx0fSxcblxuXHRcdHVwZGF0ZUhlaWdodCAoKSB7XG5cdFx0XHRjb25zdCBub0xpbmVzID0gdGhpcy5yZWZzLnRleHRib3gudmFsdWUuc3BsaXQoJ1xcbicpLmxlbmd0aDtcblx0XHRcdHRoaXMucmVmcy50ZXh0Ym94LnN0eWxlLmhlaWdodCA9IGAke25vTGluZXMgKiAxLjF9ZW1gO1xuXHRcdH0sXG5cblx0fVxufTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2Zvcm0vaW5kZXguaHRtbCIsIi8vIHl5eXktbW1cbmNvbnN0IGdldFN0ckRhdGUgPSAoeSwgbSkgPT4gYCR7eX0tJHsoJzAnICsgbSkuc3Vic3RyKC0yKX1gO1xuXG5jb25zdCBkZWVwQ29weUFycmF5ID0gYXJyID0+IGFyci5tYXAobyA9PiBPYmplY3QuYXNzaWduKHt9LCBvKSk7XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZVN0ciAoZGF0ZVN0cikge1xuXHRsZXQgW3llYXIsIG1vbnRoXSA9IGRhdGVTdHIuc3BsaXQoJy0nKTtcblx0eWVhciA9IHBhcnNlSW50KHllYXIsIDEwKTtcblx0bW9udGggPSBwYXJzZUludChtb250aCwgMTApO1xuXHRjb25zdCBzdHIgPSBnZXRTdHJEYXRlKHllYXIsIG1vbnRoKTtcblx0cmV0dXJuIHsgeWVhciwgbW9udGgsIHN0ciB9O1xufVxuXG5mdW5jdGlvbiBhZGRNb250aHNUb0RhdGUgKGRhdGUsIG1vbnRoRGlmZikge1xuXHRjb25zdCBkYXRlT2JqID0gcGFyc2VEYXRlU3RyKGRhdGUpO1xuXHRsZXQgeWVhciA9IGRhdGVPYmoueWVhcjtcblx0bGV0IG1vbnRoID0gZGF0ZU9iai5tb250aCArIG1vbnRoRGlmZjtcblx0aWYgKG1vbnRoID49IDEzKSB7XG5cdFx0eWVhciA9IHllYXIgKyBNYXRoLmZsb29yKG1vbnRoIC8gMTIpO1xuXHRcdG1vbnRoID0gKG1vbnRoICUgMTIpICsgMTtcblx0fVxuXHRyZXR1cm4gZ2V0U3RyRGF0ZSh5ZWFyLCBtb250aCk7XG59XG5cblxuZnVuY3Rpb24gY2xvbmVFbnRyaWVzIChlbnRyaWVzLCBtb250aERpZmYpIHtcblx0cmV0dXJuIGRlZXBDb3B5QXJyYXkoZW50cmllcykubWFwKGl0ZW0gPT4ge1xuXHRcdGl0ZW0uZGF0ZSA9IGFkZE1vbnRoc1RvRGF0ZShpdGVtLmRhdGUsIG1vbnRoRGlmZik7XG5cdFx0cmV0dXJuIGl0ZW07XG5cdH0pO1xufVxuXG5cbmZ1bmN0aW9uIHJlcGVhdEVudHJpZXMgKGVudHJpZXMsIHJlcGVhdGVyKSB7XG5cdGlmICghcmVwZWF0ZXIgfHwgcmVwZWF0ZXIgPT09IDEpIHJldHVybiBlbnRyaWVzO1xuXG5cdGNvbnN0IG9yaWdpbmFsRW50cmllcyA9IGRlZXBDb3B5QXJyYXkoZW50cmllcyk7XG5cdGZvciAobGV0IGkgPSAxOyBpIDwgcmVwZWF0ZXI7IGkrKykge1xuXHRcdGNvbnN0IG5ld1Jvd3MgPSBjbG9uZUVudHJpZXMob3JpZ2luYWxFbnRyaWVzLCBpKTtcblx0XHRlbnRyaWVzID0gZW50cmllcy5jb25jYXQobmV3Um93cyk7XG5cdH1cblx0cmV0dXJuIGVudHJpZXM7XG59XG5cblxuXG5cbmZ1bmN0aW9uIHBhcnNlQW1vdW50IChhbW91bnQpIHtcblx0LyogZXNsaW50IG5vLWV2YWw6IDAgKi9cblx0YW1vdW50ID0gKCcnICsgYW1vdW50KS5yZXBsYWNlKC9cXHMvZywgJycpO1xuXHRpZiAoISgvXlsrXFwtXFxcXCovKClcXGQuXSskL2kpLnRlc3QoYW1vdW50KSkgcmV0dXJuIDA7XG5cdGlmICgoL1srXFwtXFxcXCovLl0rL2kpLnRlc3QoYW1vdW50KSkge1xuXHRcdHRyeSB7IGFtb3VudCA9IGV2YWwoYW1vdW50KTsgfVxuXHRcdGNhdGNoIChlKSB7IGFtb3VudCA9IDA7IH1cblx0fVxuXHRsZXQgbnVtID0gcGFyc2VGbG9hdChhbW91bnQpO1xuXHRpZiAobnVtID09PSBJbmZpbml0eSB8fCBpc05hTihudW0pIHx8IG51bSA8IDApIG51bSA9ICdlcnJvcic7XG5cdHJldHVybiBudW07XG59XG5cblxuZnVuY3Rpb24gZmluZEdyb3VwKHMsIGdyb3Vwcykge1xuXHRmb3IgKGxldCBnIG9mIGdyb3Vwcykge1xuXHRcdGlmIChzLm1hdGNoKGcuX25hbWUpKSB7XG5cdFx0XHRzID0gcy5yZXBsYWNlKGcuX25hbWUsICcnKTtcblx0XHRcdHJldHVybiBbZywgc107XG5cdFx0fVxuXHR9XG5cdGNvbnN0IHdvcmRzID0gcy5zcGxpdCgnICcpLmZpbHRlcih3ID0+IHcubGVuZ3RoKTtcblx0Zm9yIChsZXQgdyBvZiB3b3Jkcykge1xuXHRcdGZvciAobGV0IGcgb2YgZ3JvdXBzKSB7XG5cdFx0XHRpZiAoZy5rZXl3b3Jkcy5pbmRleE9mKHcpID4gLTEpIHtcblx0XHRcdFx0cyA9IHMucmVwbGFjZSh3LCAnJyk7XG5cdFx0XHRcdHJldHVybiBbZywgc107XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBbe30sIHNdO1xufVxuXG5cbmZ1bmN0aW9uIGZpbmRBbW91bnQocykge1xuXHRsZXQgYW1vdW50LCBjZXIgPSAwO1xuXHRzID0gcy5yZXBsYWNlKC9cXHMrKFsrLS8qKCldKVxccysvZywgJyQxJyk7XHQvLyByZW1vdmUgc3BhY2VzIGFyb3VuZCBvcHNcblx0Y29uc3Qgd29yZHMgPSBzLnNwbGl0KCcgJyk7XG5cdGZvciAobGV0IHcgb2Ygd29yZHMpIHtcblx0XHRpZiAody5tYXRjaCgvXlxcZCskLykgJiYgY2VyIDw9IDgpIHtcblx0XHRcdGFtb3VudCA9IHc7XG5cdFx0XHRjZXIgPSA4O1xuXHRcdH1cblx0XHRlbHNlIGlmICh3Lm1hdGNoKC9eXFxkK1xcLlxcZCskLykgJiYgY2VyIDw9IDkpIHtcblx0XHRcdGFtb3VudCA9IHc7XG5cdFx0XHRjZXIgPSA5O1xuXHRcdH1cblx0XHRlbHNlIGlmICh3Lm1hdGNoKC9eW1xcZC4oKSstLypdKyQvKSkge1xuXHRcdFx0YW1vdW50ID0gdztcblx0XHRcdGNlciA9IDEwO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cdHMgPSBzLnJlcGxhY2UoYW1vdW50LCAnJyk7XG5cdGFtb3VudCA9IHBhcnNlQW1vdW50KGFtb3VudCk7XG5cdHJldHVybiBbYW1vdW50LCBzXTtcbn1cblxuXG5cbmZ1bmN0aW9uIHBhcnNlICh2YWwsIHtkYXRlLCBfZ3JvdXBzfSkge1xuXHRsZXQgcmVwZWF0ID0gMTtcblx0Y29uc3Qgcm93cyA9IHZhbFxuXHRcdC5zcGxpdCgnXFxuJylcblx0XHQubWFwKHJvdyA9PiB7XG5cdFx0XHRpZiAocm93LnRvTG93ZXJDYXNlKCkuaW5kZXhPZigncmVwZWF0JykgPiAtMSkge1xuXHRcdFx0XHRjb25zdCBtID0gcm93Lm1hdGNoKC9cXGR7MSwyfS8pO1xuXHRcdFx0XHRpZiAobSAmJiBtLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJlcGVhdCA9IHBhcnNlSW50KG1bMF0sIDEwKTtcblx0XHRcdFx0XHRyZXR1cm4ge307XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGxldCBncm91cCwgYW1vdW50LCBkZXNjcmlwdGlvbjtcblx0XHRcdFtncm91cCwgcm93XSA9IGZpbmRHcm91cChyb3csIF9ncm91cHMpO1xuXHRcdFx0W2Ftb3VudCwgcm93XSA9IGZpbmRBbW91bnQocm93KTtcblx0XHRcdGRlc2NyaXB0aW9uID0gcm93LnRyaW0oKTtcblx0XHRcdHJldHVybiB7YW1vdW50LCBkZXNjcmlwdGlvbiwgZ3JvdXBfaWQ6IGdyb3VwLmlkLCBncm91cH07XG5cdFx0fSlcblx0XHQuZmlsdGVyKHJvdyA9PiByb3cuYW1vdW50ICE9PSAnJyAmJiByb3cuZ3JvdXBfaWQpO1xuXG5cdGlmICghcm93cy5sZW5ndGgpIHJldHVybjtcblxuXHRyb3dzLmZvckVhY2gociA9PiAoci5kYXRlID0gZGF0ZSkpO1xuXG5cdGxldCBzdW0gPSAwO1xuXHRmb3IgKGxldCBpID0gMTsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHN1bSArPSByb3dzW2ldLmFtb3VudDtcblx0cm93c1swXS5hbW91bnQgLT0gc3VtO1xuXG5cdHJldHVybiByZXBlYXRFbnRyaWVzKHJvd3MsIHJlcGVhdCk7XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHBhcnNlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2Zvcm0vdGV4dC1wYXJzZXIuanMiLCI8ZGl2IGNsYXNzPVwidGFibGVcIiByZWY6dGFibGU+XG5cdDx0YWJsZT5cblx0PHRoZWFkPjx0cj5cblx0XHQ8dGQgY2xhc3M9XCJkYXRlXCI+RGF0ZTwvdGQ+XG5cdFx0PHRkIGNsYXNzPVwiZGVzY1wiPkRlc2NyaXB0aW9uPC90ZD5cblx0XHQ8dGQgY2xhc3M9XCJhbW91bnRcIj5BbW91bnQ8L3RkPlxuXHQ8L3RyPjwvdGhlYWQ+XG5cdDx0Ym9keT5cblx0XHR7I2lmIGZpbHRlcmVkRGF0YSAmJiBmaWx0ZXJlZERhdGEubGVuZ3RofVxuXHRcdHsjZWFjaCBmaWx0ZXJlZERhdGEgYXMgaXRlbSwgaWR4fVxuXHRcdFx0PHRyIGNsYXNzPVwidGFibGUtcm93XCIgb246Y2xpY2s9XCJvblJvd0NsaWNrKGl0ZW0pXCI+XG5cdFx0XHRcdDx0ZCBjbGFzcz1cImRhdGVcIj57aXRlbS5kYXRlLnN1YnN0cigwLCA3KX08L3RkPlxuXHRcdFx0XHQ8dGQgY2xhc3M9XCJkZXNjXCI+e2dldERlc2NyaXB0aW9uKGl0ZW0pfTwvdGQ+XG5cdFx0XHRcdDx0ZCBjbGFzcz1cImFtb3VudFwiPntmb3JtYXROdW1iZXIoaXRlbS5hbW91bnQpfTwvdGQ+XG5cdFx0XHQ8L3RyPlxuXHRcdHsvZWFjaH1cblx0XHRcdDx0ciBjbGFzcz1cInJvdy1maWxsZXJcIj48dGQgY29sc3Bhbj1cIjNcIj48L3RkPjwvdHI+XG5cdFx0ezplbHNlfVxuXHRcdFx0PHRyIGNsYXNzPVwiZW1wdHktcm93XCI+XG5cdFx0XHRcdDx0ZCBjb2xzcGFuPVwiM1wiPk5vIHJlc3VsdHM8L3RkPlxuXHRcdFx0PC90cj5cblx0XHR7L2lmfVxuXHQ8L3Rib2R5PlxuXHQ8dGZvb3Q+PHRyPlxuXHRcdDx0ZCBjb2xzcGFuPVwiMlwiIGNsYXNzPVwidGFibGUtZmlsdGVyLWNlbGxcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJ0YWJsZS1maWx0ZXItY2VsbC1pbm5lclwiPlxuXHRcdFx0XHQ8aSBjbGFzcz1cImlvbi1tZC1zZWFyY2hcIj48L2k+XG5cdFx0XHRcdDxpbnB1dCBjbGFzcz1cInRhYmxlLWZpbHRlclwiIHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIkZpbHRlclwiXG5cdFx0XHRcdGJpbmQ6dmFsdWU9XCJmaWx0ZXJcIlxuXHRcdFx0XHRvbjprZXlkb3duPVwib25GaWx0ZXJLZXlEb3duKGV2ZW50KVwiPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC90ZD5cblx0XHQ8dGQgY2xhc3M9XCJhbW91bnRcIj57Zm9ybWF0TnVtYmVyKHRvdGFsKX08L3RkPlxuXHQ8L3RyPjwvdGZvb3Q+XG5cdDwvdGFibGU+XG48L2Rpdj5cblxuXG48c2NyaXB0PlxuXG5mdW5jdGlvbiBmb3JtYXROdW1iZXIgKG51bSkge1xuXHRudW0gPSBNYXRoLnJvdW5kKDAgKyBudW0gKiAxMDApIC8gMTAwO1xuXHRyZXR1cm4gbnVtLnRvTG9jYWxlU3RyaW5nKCdlbi1HQicsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0ZGF0YSAoKSB7XG5cdFx0cmV0dXJuIHsgZGF0YTogW10sIGZpbHRlcjogJycsIGlzUHJldmlldzogZmFsc2UgfTtcblx0fSxcblx0aGVscGVyczoge1xuXHRcdGZvcm1hdE51bWJlcixcblx0XHRnZXREZXNjcmlwdGlvbiAoaXRlbSkge1xuXHRcdFx0Y29uc3QgZGVzYyA9IFtdO1xuXHRcdFx0aWYgKGl0ZW0uZ3JvdXAubmFtZSkgZGVzYy5wdXNoKGl0ZW0uZ3JvdXAubmFtZSk7XG5cdFx0XHRpZiAoaXRlbS5kZXNjcmlwdGlvbikgZGVzYy5wdXNoKGl0ZW0uZGVzY3JpcHRpb24pO1xuXHRcdFx0cmV0dXJuIGRlc2Muam9pbignIC0gJyk7XG5cdFx0fVxuXHR9LFxuXHRjb21wdXRlZDoge1xuXHRcdGZpbHRlcmVkRGF0YSAoe2RhdGEsIGZpbHRlcn0pIHtcblx0XHRcdGlmICghZmlsdGVyKSByZXR1cm4gZGF0YTtcblx0XHRcdGZpbHRlciA9IGZpbHRlci50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0cmV0dXJuIGRhdGEuZmlsdGVyKGl0ZW0gPT4ge1xuXHRcdFx0XHRsZXQgcyA9IGl0ZW0uZGVzY3JpcHRpb24gKyBpdGVtLmFtb3VudCArIGl0ZW0uZGF0ZTtcblx0XHRcdFx0aWYgKGl0ZW0uZ3JvdXApIHtcblx0XHRcdFx0XHRzICs9IChpdGVtLmdyb3VwLm5hbWUgfHwgJycpO1xuXHRcdFx0XHRcdGlmIChpdGVtLmdyb3VwLmNhdGVnb3J5KSBzICs9IChpdGVtLmdyb3VwLmNhdGVnb3J5Lm5hbWUgfHwgJycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAocy50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZmlsdGVyKSA+IC0xKTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0dG90YWwgKHtmaWx0ZXJlZERhdGF9KSB7IHJldHVybiBmaWx0ZXJlZERhdGEucmVkdWNlKChwLCBjKSA9PiBwICsgYy5hbW91bnQsIDApOyB9XG5cdH0sXG5cdG9uY3JlYXRlICgpIHtcblx0fSxcblxuXHRtZXRob2RzOiB7XG5cdFx0b25GaWx0ZXJLZXlEb3duIChlKSB7XG5cdFx0XHRpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB0aGlzLnNldCh7IGZpbHRlcjogJycgfSk7XG5cdFx0fSxcblx0XHRvblJvd0NsaWNrIChpdGVtKSB7XG5cdFx0XHRpZiAoIXRoaXMuZ2V0KCkuaXNQcmV2aWV3KSB0aGlzLmZpcmUoJ2NsaWNrJywgaXRlbSk7XG5cdFx0fVxuXHR9XG59O1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvdGFibGUvaW5kZXguaHRtbCIsImZ1bmN0aW9uIHJlcSAodXJsLCBtZXRob2QgPSAnR0VUJywgcGFyYW1zKSB7XG5cdGNvbnN0IG9wdHMgPSB7XG5cdFx0bWV0aG9kOiBtZXRob2QsXG5cdFx0aGVhZGVyczogeyAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG5cdFx0Y3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcblx0fTtcblx0aWYgKHBhcmFtcykge1xuXHRcdG9wdHMuYm9keSA9IEpTT04uc3RyaW5naWZ5KHBhcmFtcyk7XG5cdFx0aWYgKHBhcmFtcy5pZCkgdXJsICs9IGAvJHtwYXJhbXMuaWR9YDtcblx0fVxuXHRyZXR1cm4gZmV0Y2goYGFwaS8ke3VybH1gLCBvcHRzKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcbn1cblxuY29uc3QgZ2V0ID0gdXJsID0+IHJlcSh1cmwpO1xuY29uc3QgcG9zdCA9ICh1cmwsIHBhcmFtcykgPT4gcmVxKHVybCwgJ1BPU1QnLCBwYXJhbXMpO1xuY29uc3QgcHV0ID0gKHVybCwgcGFyYW1zKSA9PiByZXEodXJsLCAnUFVUJywgcGFyYW1zKTtcbmNvbnN0IGRlbCA9IHVybCA9PiByZXEodXJsLCAnREVMRVRFJyk7XG5cblxuY29uc3QgQ2F0ZWdvcmllcyA9IHtcblx0Z2V0OiAoKSA9PiBnZXQoJ2NhdGVnb3JpZXMnKSxcbn07XG5cbmNvbnN0IEdyb3VwcyA9IHtcblx0Z2V0OiAoKSA9PiBnZXQoJ2dyb3VwcycpLFxufTtcblxuY29uc3QgRXhwZW5zZXMgPSB7XG5cdGdldDogKGRhdGUgPSAnJykgPT4gZ2V0KGBlbnRyaWVzP2RhdGU9JHtkYXRlfWApLFxuXHRzYXZlOiBkYXRhID0+IHtcblx0XHRpZiAoZGF0YS5sZW5ndGggPT09IDEgJiYgZGF0YVswXS5pZCkgcmV0dXJuIHB1dCgnZW50cmllcycsIGRhdGFbMF0pO1xuXHRcdHJldHVybiBwb3N0KCdlbnRyaWVzJywgZGF0YSk7XG5cdH0sXG5cdGRlbDogaWQgPT4gZGVsKGBlbnRyaWVzLyR7aWR9YClcbn07XG5cblxuZXhwb3J0IHtcblx0Q2F0ZWdvcmllcyxcblx0R3JvdXBzLFxuXHRFeHBlbnNlcyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvZGF0YS9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=