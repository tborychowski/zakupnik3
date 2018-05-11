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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__table__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data__ = __webpack_require__(6);
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
		console.log(data);
		// Expenses.save(data).then(() => {
		// 	this.loadTable();
		// });
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
/* client/form/index.html generated by Svelte v2.5.0 */


function _groups({groups}) {
	return groups.map(g => {
		const str = (g.name + ',' + g.keywords).toLowerCase().split(',');
		return { id: g.id, name: g.name, str }
	});
};

function data() {
	return {
		inEdit: false,
		date: new Date().toISOString().substr(0, 7),
		id: null,
		text: '',
		groups: [],
		rows: [],
	};
};

var methods = {
	oninput (el) {
		this.toggleAmountError();
		this.parseEntryText(el.value);
		this.updateHeight();
	},

	onkeydown (e) {
		if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) this.onsubmit(e);
		else if (e.key === 'Escape') this.reset(e);
	},

	edit (data) {
		this.reset();
		this.set({ inEdit: true, text: data });
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
		this.fire('submit', rows);
		this.reset();
	},

	toggleAmountError (msg = '') {
		this.refs.textbox.setCustomValidity(msg);
	},

	updateHeight () {
		const noLines = this.refs.textbox.value.split('\n').length;
		this.refs.textbox.style.height = `${noLines * 1.1}em`;
	},

	parseAmount (amount) {
		/* eslint no-eval: 0 */
		amount = ('' + amount).replace(/\s/g, '');
		if (!(/^[+\-\\*/()\d.]+$/i).test(amount)) return 0;
		if ((/[+\-\\*/.]+/i).test(amount)) {
			try { amount = eval(amount); }
			catch (e) { amount = 0; }
		}
		let num = parseFloat(amount);
		if (num === Infinity || isNaN(num) || num < 0) num = 'error';
		return num;
	},

	getGroup (value) {
		value = value.toLowerCase().trim();
		if (!value) return;
		const groups = this.get()._groups;
		for (const g of groups) {
			if (g.str.indexOf(value) > -1) return g;
		}
		return;
	},

	parseWord (value) {
		if (value.match(/^\d+$/)) return { type: 'amount', value: parseFloat(value), score: 8 };
		if (value.match(/^\d+\.\d+$/)) return { type: 'amount', value: parseFloat(value), score: 9 };
		if (value.match(/^[\d\.()+-/*]+$/)) return { type: 'amount', value: this.parseAmount(value), score: 10 };

		const group = this.getGroup(value);
		if (group && group.id) return { type: 'group', value, group, score: 10 };

		return { type: 'description', value, score: 10 };
	},

	parseRow (row) {
		row = row.replace(/\s+([+-/*()])\s+/g, '$1');  // remove spaces around ops
		const words = row.split(' ').map(w => this.parseWord(w)).sort((a, b) => b.score - a.score);

		const amountIdx = words.findIndex(w => w.type === 'amount');
		const amount = amountIdx > -1 ? words.splice(amountIdx, 1)[0].value : '';

		const groupIdx = words.findIndex(w => w.type === 'group');
		const group = groupIdx > -1 ? words.splice(groupIdx, 1)[0].group : {};

		const description = words.map(w => w.value).join(' ').trim();
		return {amount, description, group, group_id: group.id };
	},

	parseEntryText (val) {
		const rows = val
			.split('\n')
			.map(row => this.parseRow(row))
			.filter(row => row.amount !== '' && row.group_id);

		if (!rows.length) return;

		const date = this.get().date;
		rows.forEach(r => (r.date = date));

		let sum = 0;
		for (let i = 1; i < rows.length; i++) sum += rows[i].amount;
		rows[0].amount -= sum;
		this.set({ rows });
		this.fire('change', rows);
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
	var div;

	var if_block = (ctx.data && ctx.data.length) && create_if_block(component, ctx);

	return {
		c() {
			div = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("div");
			if (if_block) if_block.c();
			div.className = "table";
		},

		m(target, anchor) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["k" /* insertNode */])(div, target, anchor);
			if (if_block) if_block.m(div, null);
			component.refs.table = div;
		},

		p(changed, ctx) {
			if (ctx.data && ctx.data.length) {
				if (if_block) {
					if_block.p(changed, ctx);
				} else {
					if_block = create_if_block(component, ctx);
					if_block.c();
					if_block.m(div, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},

		d(detach) {
			if (detach) {
				Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["i" /* detachNode */])(div);
			}

			if (if_block) if_block.d();
			if (component.refs.table === div) component.refs.table = null;
		}
	};
}

// (11:3) {#each filteredData as item, idx}
function create_each_block(component, ctx) {
	var tr, td, text_value = ctx.item.date.substr(0, 7), text, text_1, td_1, text_2_value = getDescription(ctx.item), text_2, text_3, td_2, text_4_value = formatNumber(ctx.item.amount), text_4;

	return {
		c() {
			tr = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("tr");
			td = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("td");
			text = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])(text_value);
			text_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t\t\t\t");
			td_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("td");
			text_2 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])(text_2_value);
			text_3 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t\t\t\t");
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

// (10:3) {#if filteredData && filteredData.length}
function create_if_block_1(component, ctx) {
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

			text = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t\t\t");
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

// (19:3) {:else}
function create_if_block_2(component, ctx) {
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

// (2:1) {#if data && data.length}
function create_if_block(component, ctx) {
	var table, thead, text_6, tbody, text_8, tfoot, tr_1, td_3, div, i, text_9, input, input_updating = false, text_12, td_4, text_13_value = formatNumber(ctx.total), text_13;

	function select_block_type(ctx) {
		if (ctx.filteredData && ctx.filteredData.length) return create_if_block_1;
		return create_if_block_2;
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
			table = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("table");
			thead = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("thead");
			thead.innerHTML = "<tr><td class=\"date\">Date</td>\n\t\t\t<td class=\"desc\">Description</td>\n\t\t\t<td class=\"amount\">Amount</td></tr>";
			text_6 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t");
			tbody = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("tbody");
			if_block.c();
			text_8 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t");
			tfoot = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("tfoot");
			tr_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("tr");
			td_3 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("td");
			div = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("div");
			i = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("i");
			text_9 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t\t\t\t");
			input = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("input");
			text_12 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])("\n\t\t\t");
			td_4 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createElement */])("td");
			text_13 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createText */])(text_13_value);
			i.className = "ion-md-search";
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(input, "input", input_input_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(input, "keydown", keydown_handler);
			input.className = "table-filter";
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* setAttribute */])(input, "type", "search");
			input.placeholder = "Filter";
			div.className = "table-filter-cell-inner";
			td_3.colSpan = "2";
			td_3.className = "table-filter-cell";
			td_4.className = "amount";
		},

		m(target, anchor) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["k" /* insertNode */])(table, target, anchor);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(thead, table);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_6, table);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(tbody, table);
			if_block.m(tbody, null);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_8, table);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(tfoot, table);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(tr_1, tfoot);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(td_3, tr_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(div, td_3);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(i, div);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_9, div);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(input, div);

			input.value = ctx.filter;

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_12, tr_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(td_4, tr_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_13, td_4);
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
				Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["i" /* detachNode */])(table);
			}

			if_block.d();
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(input, "input", input_input_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* removeListener */])(input, "keydown", keydown_handler);
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
/* 6 */
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

const Groups = {
	get: () => get('groups')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTA4NDI0NWNhZGNmMDIxNzE2YTgiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9hcHAvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9jbGllbnQveWVhci1tb250aC1waWNrZXIvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvZm9ybS9pbmRleC5odG1sIiwid2VicGFjazovLy8uL2NsaWVudC90YWJsZS9pbmRleC5odG1sIiwid2VicGFjazovLy8uL2NsaWVudC9kYXRhL2luZGV4LmpzIl0sIm5hbWVzIjpbInRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJlcSIsInVybCIsIm1ldGhvZCIsInBhcmFtcyIsIm9wdHMiLCJoZWFkZXJzIiwiY3JlZGVudGlhbHMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJnZXQiLCJwb3N0IiwicHV0IiwiQ2F0ZWdvcmllcyIsIkdyb3VwcyIsIkV4cGVuc2VzIiwiZGF0ZSIsInNhdmUiLCJkYXRhIiwibGVuZ3RoIiwiaWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFB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QUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUMzRCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN6RCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUM3RCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUMzRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xGLFNBQVMsU0FBUyxJQUFJO0NBQ3JCLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7Q0FDckIsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0NBQzNCLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztDQUM3QixNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7Q0FDcEcsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxF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LEVBQUUsRUFBRSxFQUFFLENBQUM7O0FBRTNHLEVBQUUsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQyxFQUFFLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUM7O0FBRTNFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUNuRCxFQUFFOztBQUVGLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFO0FBQ2hCLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDL0MsRUFBRSxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBRTdGLEVBQUUsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQztBQUM5RCxFQUFFLE1BQU0sTUFBTSxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDOztBQUUzRSxFQUFFLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUM7QUFDNUQsRUFBRSxNQUFNLEtBQUssR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzs7QUFFeEUsRUFBRSxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQy9ELEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUM7QUFDM0QsRUFBRTs7QUFFRixDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsRUFBRTtBQUN0QixFQUFFLE1BQU0sSUFBSSxHQUFHLEdBQUc7QUFDbEIsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDO0FBQ2YsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbEMsSUFBSSxNQUFNLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssRUFBRSxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFckQsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPOztBQUUzQixFQUFFLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7QUFDL0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7O0FBRXJDLEVBQUUsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ2QsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1B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SixFQUFTLEtBQVQsRUFBZ0JFLE1BQWhCLENBQTdCO0FBQ0E7OztBQUdBLE1BQU1jLGFBQWE7QUFDbEJILE1BQUssTUFBTUEsSUFBSSxZQUFKO0FBRE8sQ0FBbkI7O0FBSUEsTUFBTUksU0FBUztBQUNkSixNQUFLLE1BQU1BLElBQUksUUFBSjtBQURHLENBQWY7O0FBSUEsTUFBTUssV0FBVztBQUNoQkwsTUFBSyxDQUFDTSxPQUFPLEVBQVIsS0FBZU4sSUFBSyxnQkFBZU0sSUFBSyxFQUF6QixDQURKO0FBRWhCQyxPQUFNQyxRQUFRO0FBQ2IsTUFBSUEsS0FBS0MsTUFBTCxLQUFnQixDQUFoQixJQUFxQkQsS0FBSyxDQUFMLEVBQVFFLEVBQWpDLEVBQXFDLE9BQU9SLElBQUksU0FBSixFQUFlTSxJQUFmLENBQVA7QUFDckMsU0FBT1AsS0FBSyxTQUFMLEVBQWdCTyxJQUFoQixDQUFQO0FBQ0E7QUFMZSxDQUFqQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vcHVibGljL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGEwODQyNDVjYWRjZjAyMTcxNmE4IiwiZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmZ1bmN0aW9uIGFzc2lnbih0YXIsIHNyYykge1xuXHRmb3IgKHZhciBrIGluIHNyYykgdGFyW2tdID0gc3JjW2tdO1xuXHRyZXR1cm4gdGFyO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25UcnVlKHRhciwgc3JjKSB7XG5cdGZvciAodmFyIGsgaW4gc3JjKSB0YXJba10gPSAxO1xuXHRyZXR1cm4gdGFyO1xufVxuXG5mdW5jdGlvbiBpc1Byb21pc2UodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBhcHBlbmROb2RlKG5vZGUsIHRhcmdldCkge1xuXHR0YXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG59XG5cbmZ1bmN0aW9uIGluc2VydE5vZGUobm9kZSwgdGFyZ2V0LCBhbmNob3IpIHtcblx0dGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IpO1xufVxuXG5mdW5jdGlvbiBkZXRhY2hOb2RlKG5vZGUpIHtcblx0bm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuXG5mdW5jdGlvbiBkZXRhY2hCZXR3ZWVuKGJlZm9yZSwgYWZ0ZXIpIHtcblx0d2hpbGUgKGJlZm9yZS5uZXh0U2libGluZyAmJiBiZWZvcmUubmV4dFNpYmxpbmcgIT09IGFmdGVyKSB7XG5cdFx0YmVmb3JlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYmVmb3JlLm5leHRTaWJsaW5nKTtcblx0fVxufVxuXG5mdW5jdGlvbiBkZXRhY2hCZWZvcmUoYWZ0ZXIpIHtcblx0d2hpbGUgKGFmdGVyLnByZXZpb3VzU2libGluZykge1xuXHRcdGFmdGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYWZ0ZXIucHJldmlvdXNTaWJsaW5nKTtcblx0fVxufVxuXG5mdW5jdGlvbiBkZXRhY2hBZnRlcihiZWZvcmUpIHtcblx0d2hpbGUgKGJlZm9yZS5uZXh0U2libGluZykge1xuXHRcdGJlZm9yZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJlZm9yZS5uZXh0U2libGluZyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVpbnNlcnRCZXR3ZWVuKGJlZm9yZSwgYWZ0ZXIsIHRhcmdldCkge1xuXHR3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nICYmIGJlZm9yZS5uZXh0U2libGluZyAhPT0gYWZ0ZXIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoYmVmb3JlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYmVmb3JlLm5leHRTaWJsaW5nKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVpbnNlcnRDaGlsZHJlbihwYXJlbnQsIHRhcmdldCkge1xuXHR3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHRhcmdldC5hcHBlbmRDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG59XG5cbmZ1bmN0aW9uIHJlaW5zZXJ0QWZ0ZXIoYmVmb3JlLCB0YXJnZXQpIHtcblx0d2hpbGUgKGJlZm9yZS5uZXh0U2libGluZykgdGFyZ2V0LmFwcGVuZENoaWxkKGJlZm9yZS5uZXh0U2libGluZyk7XG59XG5cbmZ1bmN0aW9uIHJlaW5zZXJ0QmVmb3JlKGFmdGVyLCB0YXJnZXQpIHtcblx0dmFyIHBhcmVudCA9IGFmdGVyLnBhcmVudE5vZGU7XG5cdHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCAhPT0gYWZ0ZXIpIHRhcmdldC5hcHBlbmRDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3lFYWNoKGl0ZXJhdGlvbnMsIGRldGFjaCkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGl0ZXJhdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRpZiAoaXRlcmF0aW9uc1tpXSkgaXRlcmF0aW9uc1tpXS5kKGRldGFjaCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnQoKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQobmFtZSkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3ZnRWxlbWVudChuYW1lKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgbmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHQoZGF0YSkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbW1lbnQoKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcbn1cblxuZnVuY3Rpb24gYWRkTGlzdGVuZXIobm9kZSwgZXZlbnQsIGhhbmRsZXIpIHtcblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKG5vZGUsIGV2ZW50LCBoYW5kbGVyKSB7XG5cdG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuXHRub2RlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhub2RlLCBhdHRyaWJ1dGVzKSB7XG5cdGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0aWYgKGtleSBpbiBub2RlKSB7XG5cdFx0XHRub2RlW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChhdHRyaWJ1dGVzW2tleV0gPT09IHVuZGVmaW5lZCkgcmVtb3ZlQXR0cmlidXRlKG5vZGUsIGtleSk7XG5cdFx0XHRlbHNlIHNldEF0dHJpYnV0ZShub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZShub2RlLCBhdHRyaWJ1dGUpIHtcblx0bm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbn1cblxuZnVuY3Rpb24gc2V0WGxpbmtBdHRyaWJ1dGUobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuXHRub2RlLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGdldEJpbmRpbmdHcm91cFZhbHVlKGdyb3VwKSB7XG5cdHZhciB2YWx1ZSA9IFtdO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGdyb3VwLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0aWYgKGdyb3VwW2ldLmNoZWNrZWQpIHZhbHVlLnB1c2goZ3JvdXBbaV0uX192YWx1ZSk7XG5cdH1cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgPT09ICcnID8gdW5kZWZpbmVkIDogK3ZhbHVlO1xufVxuXG5mdW5jdGlvbiB0aW1lUmFuZ2VzVG9BcnJheShyYW5nZXMpIHtcblx0dmFyIGFycmF5ID0gW107XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcmFuZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0YXJyYXkucHVzaCh7IHN0YXJ0OiByYW5nZXMuc3RhcnQoaSksIGVuZDogcmFuZ2VzLmVuZChpKSB9KTtcblx0fVxuXHRyZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGNoaWxkcmVuIChlbGVtZW50KSB7XG5cdHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGROb2Rlcyk7XG59XG5cbmZ1bmN0aW9uIGNsYWltRWxlbWVudCAobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMsIHN2Zykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dmFyIG5vZGUgPSBub2Rlc1tpXTtcblx0XHRpZiAobm9kZS5ub2RlTmFtZSA9PT0gbmFtZSkge1xuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBub2RlLmF0dHJpYnV0ZXMubGVuZ3RoOyBqICs9IDEpIHtcblx0XHRcdFx0dmFyIGF0dHJpYnV0ZSA9IG5vZGUuYXR0cmlidXRlc1tqXTtcblx0XHRcdFx0aWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZS5uYW1lXSkgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlLm5hbWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5vZGVzLnNwbGljZShpLCAxKVswXTsgLy8gVE9ETyBzdHJpcCB1bndhbnRlZCBhdHRyaWJ1dGVzXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN2ZyA/IGNyZWF0ZVN2Z0VsZW1lbnQobmFtZSkgOiBjcmVhdGVFbGVtZW50KG5hbWUpO1xufVxuXG5mdW5jdGlvbiBjbGFpbVRleHQgKG5vZGVzLCBkYXRhKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHR2YXIgbm9kZSA9IG5vZGVzW2ldO1xuXHRcdGlmIChub2RlLm5vZGVUeXBlID09PSAzKSB7XG5cdFx0XHRub2RlLmRhdGEgPSBkYXRhO1xuXHRcdFx0cmV0dXJuIG5vZGVzLnNwbGljZShpLCAxKVswXTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY3JlYXRlVGV4dChkYXRhKTtcbn1cblxuZnVuY3Rpb24gc2V0SW5wdXRUeXBlKGlucHV0LCB0eXBlKSB7XG5cdHRyeSB7XG5cdFx0aW5wdXQudHlwZSA9IHR5cGU7XG5cdH0gY2F0Y2ggKGUpIHt9XG59XG5cbmZ1bmN0aW9uIHNldFN0eWxlKG5vZGUsIGtleSwgdmFsdWUpIHtcblx0bm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0T3B0aW9uKHNlbGVjdCwgdmFsdWUpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdHZhciBvcHRpb24gPSBzZWxlY3Qub3B0aW9uc1tpXTtcblxuXHRcdGlmIChvcHRpb24uX192YWx1ZSA9PT0gdmFsdWUpIHtcblx0XHRcdG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIHNlbGVjdE9wdGlvbnMoc2VsZWN0LCB2YWx1ZSkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dmFyIG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuXHRcdG9wdGlvbi5zZWxlY3RlZCA9IH52YWx1ZS5pbmRleE9mKG9wdGlvbi5fX3ZhbHVlKTtcblx0fVxufVxuXG5mdW5jdGlvbiBzZWxlY3RWYWx1ZShzZWxlY3QpIHtcblx0dmFyIHNlbGVjdGVkT3B0aW9uID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJzpjaGVja2VkJykgfHwgc2VsZWN0Lm9wdGlvbnNbMF07XG5cdHJldHVybiBzZWxlY3RlZE9wdGlvbiAmJiBzZWxlY3RlZE9wdGlvbi5fX3ZhbHVlO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RNdWx0aXBsZVZhbHVlKHNlbGVjdCkge1xuXHRyZXR1cm4gW10ubWFwLmNhbGwoc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJzpjaGVja2VkJyksIGZ1bmN0aW9uKG9wdGlvbikge1xuXHRcdHJldHVybiBvcHRpb24uX192YWx1ZTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFJlc2l6ZUxpc3RlbmVyKGVsZW1lbnQsIGZuKSB7XG5cdGlmIChnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuXHRcdGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuXHR9XG5cblx0Y29uc3Qgb2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2JqZWN0Jyk7XG5cdG9iamVjdC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGJsb2NrOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgb3ZlcmZsb3c6IGhpZGRlbjsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHotaW5kZXg6IC0xOycpO1xuXHRvYmplY3QudHlwZSA9ICd0ZXh0L2h0bWwnO1xuXG5cdGxldCB3aW47XG5cblx0b2JqZWN0Lm9ubG9hZCA9ICgpID0+IHtcblx0XHR3aW4gPSBvYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3O1xuXHRcdHdpbi5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmbik7XG5cdH07XG5cblx0aWYgKC9UcmlkZW50Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG5cdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChvYmplY3QpO1xuXHRcdG9iamVjdC5kYXRhID0gJ2Fib3V0OmJsYW5rJztcblx0fSBlbHNlIHtcblx0XHRvYmplY3QuZGF0YSA9ICdhYm91dDpibGFuayc7XG5cdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChvYmplY3QpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRjYW5jZWw6ICgpID0+IHtcblx0XHRcdHdpbi5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmbik7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUNoaWxkKG9iamVjdCk7XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBsaW5lYXIodCkge1xuXHRyZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVSdWxlKHsgYSwgYiwgZGVsdGEsIGR1cmF0aW9uIH0sIGVhc2UsIGZuKSB7XG5cdGNvbnN0IHN0ZXAgPSAxNi42NjYgLyBkdXJhdGlvbjtcblx0bGV0IGtleWZyYW1lcyA9ICd7XFxuJztcblxuXHRmb3IgKGxldCBwID0gMDsgcCA8PSAxOyBwICs9IHN0ZXApIHtcblx0XHRjb25zdCB0ID0gYSArIGRlbHRhICogZWFzZShwKTtcblx0XHRrZXlmcmFtZXMgKz0gcCAqIDEwMCArIGAleyR7Zm4odCl9fVxcbmA7XG5cdH1cblxuXHRyZXR1cm4ga2V5ZnJhbWVzICsgYDEwMCUgeyR7Zm4oYil9fVxcbn1gO1xufVxuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZGFya3NreWFwcC9zdHJpbmctaGFzaC9ibG9iL21hc3Rlci9pbmRleC5qc1xuZnVuY3Rpb24gaGFzaChzdHIpIHtcblx0bGV0IGhhc2ggPSA1MzgxO1xuXHRsZXQgaSA9IHN0ci5sZW5ndGg7XG5cblx0d2hpbGUgKGktLSkgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpIF4gc3RyLmNoYXJDb2RlQXQoaSk7XG5cdHJldHVybiBoYXNoID4+PiAwO1xufVxuXG5mdW5jdGlvbiB3cmFwVHJhbnNpdGlvbihjb21wb25lbnQsIG5vZGUsIGZuLCBwYXJhbXMsIGludHJvKSB7XG5cdGNvbnN0IG9iaiA9IGZuKG5vZGUsIHBhcmFtcyk7XG5cdGNvbnN0IGR1cmF0aW9uID0gb2JqLmR1cmF0aW9uIHx8IDMwMDtcblx0Y29uc3QgZWFzZSA9IG9iai5lYXNpbmcgfHwgbGluZWFyO1xuXHRsZXQgY3NzVGV4dDtcblxuXHRpZiAoaW50cm8pIHtcblx0XHRpZiAob2JqLmNzcyAmJiBvYmouZGVsYXkpIHtcblx0XHRcdGNzc1RleHQgPSBub2RlLnN0eWxlLmNzc1RleHQ7XG5cdFx0XHRub2RlLnN0eWxlLmNzc1RleHQgKz0gb2JqLmNzcygwKTtcblx0XHR9XG5cblx0XHRpZiAob2JqLnRpY2spIG9iai50aWNrKDApO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHR0OiBpbnRybyA/IDAgOiAxLFxuXHRcdHJ1bm5pbmc6IGZhbHNlLFxuXHRcdHByb2dyYW06IG51bGwsXG5cdFx0cGVuZGluZzogbnVsbCxcblxuXHRcdHJ1bihiLCBjYWxsYmFjaykge1xuXHRcdFx0Y29uc3QgcHJvZ3JhbSA9IHtcblx0XHRcdFx0c3RhcnQ6IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSArIChvYmouZGVsYXkgfHwgMCksXG5cdFx0XHRcdGIsXG5cdFx0XHRcdGNhbGxiYWNrOiBjYWxsYmFjayB8fCBub29wXG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAoIWIpIHtcblx0XHRcdFx0cHJvZ3JhbS5ncm91cCA9IHRyYW5zaXRpb25NYW5hZ2VyLm91dHJvcztcblx0XHRcdFx0dHJhbnNpdGlvbk1hbmFnZXIub3V0cm9zLnJlbWFpbmluZyArPSAxO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob2JqLmRlbGF5KSB7XG5cdFx0XHRcdHRoaXMucGVuZGluZyA9IHByb2dyYW07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnN0YXJ0KHByb2dyYW0pO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXRoaXMucnVubmluZykge1xuXHRcdFx0XHR0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0XHR0cmFuc2l0aW9uTWFuYWdlci5hZGQodGhpcyk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHN0YXJ0KHByb2dyYW0pIHtcblx0XHRcdGNvbXBvbmVudC5maXJlKGAke3Byb2dyYW0uYiA/ICdpbnRybycgOiAnb3V0cm8nfS5zdGFydGAsIHsgbm9kZSB9KTtcblxuXHRcdFx0cHJvZ3JhbS5hID0gdGhpcy50O1xuXHRcdFx0cHJvZ3JhbS5kZWx0YSA9IHByb2dyYW0uYiAtIHByb2dyYW0uYTtcblx0XHRcdHByb2dyYW0uZHVyYXRpb24gPSBkdXJhdGlvbiAqIE1hdGguYWJzKHByb2dyYW0uYiAtIHByb2dyYW0uYSk7XG5cdFx0XHRwcm9ncmFtLmVuZCA9IHByb2dyYW0uc3RhcnQgKyBwcm9ncmFtLmR1cmF0aW9uO1xuXG5cdFx0XHRpZiAob2JqLmNzcykge1xuXHRcdFx0XHRpZiAob2JqLmRlbGF5KSBub2RlLnN0eWxlLmNzc1RleHQgPSBjc3NUZXh0O1xuXG5cdFx0XHRcdGNvbnN0IHJ1bGUgPSBnZW5lcmF0ZVJ1bGUocHJvZ3JhbSwgZWFzZSwgb2JqLmNzcyk7XG5cdFx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLmFkZFJ1bGUocnVsZSwgcHJvZ3JhbS5uYW1lID0gJ19fc3ZlbHRlXycgKyBoYXNoKHJ1bGUpKTtcblxuXHRcdFx0XHRub2RlLnN0eWxlLmFuaW1hdGlvbiA9IChub2RlLnN0eWxlLmFuaW1hdGlvbiB8fCAnJylcblx0XHRcdFx0XHQuc3BsaXQoJywgJylcblx0XHRcdFx0XHQuZmlsdGVyKGFuaW0gPT4gYW5pbSAmJiAocHJvZ3JhbS5kZWx0YSA8IDAgfHwgIS9fX3N2ZWx0ZS8udGVzdChhbmltKSkpXG5cdFx0XHRcdFx0LmNvbmNhdChgJHtwcm9ncmFtLm5hbWV9ICR7cHJvZ3JhbS5kdXJhdGlvbn1tcyBsaW5lYXIgMSBmb3J3YXJkc2ApXG5cdFx0XHRcdFx0LmpvaW4oJywgJyk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG5cdFx0XHR0aGlzLnBlbmRpbmcgPSBudWxsO1xuXHRcdH0sXG5cblx0XHR1cGRhdGUobm93KSB7XG5cdFx0XHRjb25zdCBwcm9ncmFtID0gdGhpcy5wcm9ncmFtO1xuXHRcdFx0aWYgKCFwcm9ncmFtKSByZXR1cm47XG5cblx0XHRcdGNvbnN0IHAgPSBub3cgLSBwcm9ncmFtLnN0YXJ0O1xuXHRcdFx0dGhpcy50ID0gcHJvZ3JhbS5hICsgcHJvZ3JhbS5kZWx0YSAqIGVhc2UocCAvIHByb2dyYW0uZHVyYXRpb24pO1xuXHRcdFx0aWYgKG9iai50aWNrKSBvYmoudGljayh0aGlzLnQpO1xuXHRcdH0sXG5cblx0XHRkb25lKCkge1xuXHRcdFx0Y29uc3QgcHJvZ3JhbSA9IHRoaXMucHJvZ3JhbTtcblx0XHRcdHRoaXMudCA9IHByb2dyYW0uYjtcblxuXHRcdFx0aWYgKG9iai50aWNrKSBvYmoudGljayh0aGlzLnQpO1xuXG5cdFx0XHRjb21wb25lbnQuZmlyZShgJHtwcm9ncmFtLmIgPyAnaW50cm8nIDogJ291dHJvJ30uZW5kYCwgeyBub2RlIH0pO1xuXG5cdFx0XHRpZiAoIXByb2dyYW0uYiAmJiAhcHJvZ3JhbS5pbnZhbGlkYXRlZCkge1xuXHRcdFx0XHRwcm9ncmFtLmdyb3VwLmNhbGxiYWNrcy5wdXNoKCgpID0+IHtcblx0XHRcdFx0XHRwcm9ncmFtLmNhbGxiYWNrKCk7XG5cdFx0XHRcdFx0aWYgKG9iai5jc3MpIHRyYW5zaXRpb25NYW5hZ2VyLmRlbGV0ZVJ1bGUobm9kZSwgcHJvZ3JhbS5uYW1lKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYgKC0tcHJvZ3JhbS5ncm91cC5yZW1haW5pbmcgPT09IDApIHtcblx0XHRcdFx0XHRwcm9ncmFtLmdyb3VwLmNhbGxiYWNrcy5mb3JFYWNoKGZuID0+IHtcblx0XHRcdFx0XHRcdGZuKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChvYmouY3NzKSB0cmFuc2l0aW9uTWFuYWdlci5kZWxldGVSdWxlKG5vZGUsIHByb2dyYW0ubmFtZSk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMucnVubmluZyA9ICEhdGhpcy5wZW5kaW5nO1xuXHRcdH0sXG5cblx0XHRhYm9ydCgpIHtcblx0XHRcdGlmICh0aGlzLnByb2dyYW0pIHtcblx0XHRcdFx0aWYgKG9iai50aWNrKSBvYmoudGljaygxKTtcblx0XHRcdFx0aWYgKG9iai5jc3MpIHRyYW5zaXRpb25NYW5hZ2VyLmRlbGV0ZVJ1bGUobm9kZSwgdGhpcy5wcm9ncmFtLm5hbWUpO1xuXHRcdFx0XHR0aGlzLnByb2dyYW0gPSB0aGlzLnBlbmRpbmcgPSBudWxsO1xuXHRcdFx0XHR0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0aW52YWxpZGF0ZSgpIHtcblx0XHRcdGlmICh0aGlzLnByb2dyYW0pIHtcblx0XHRcdFx0dGhpcy5wcm9ncmFtLmludmFsaWRhdGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cbnZhciB0cmFuc2l0aW9uTWFuYWdlciA9IHtcblx0cnVubmluZzogZmFsc2UsXG5cdHRyYW5zaXRpb25zOiBbXSxcblx0Ym91bmQ6IG51bGwsXG5cdHN0eWxlc2hlZXQ6IG51bGwsXG5cdGFjdGl2ZVJ1bGVzOiB7fSxcblxuXHRhZGQodHJhbnNpdGlvbikge1xuXHRcdHRoaXMudHJhbnNpdGlvbnMucHVzaCh0cmFuc2l0aW9uKTtcblxuXHRcdGlmICghdGhpcy5ydW5uaW5nKSB7XG5cdFx0XHR0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYm91bmQgfHwgKHRoaXMuYm91bmQgPSB0aGlzLm5leHQuYmluZCh0aGlzKSkpO1xuXHRcdH1cblx0fSxcblxuXHRhZGRSdWxlKHJ1bGUsIG5hbWUpIHtcblx0XHRpZiAoIXRoaXMuc3R5bGVzaGVldCkge1xuXHRcdFx0Y29uc3Qgc3R5bGUgPSBjcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0XHR0cmFuc2l0aW9uTWFuYWdlci5zdHlsZXNoZWV0ID0gc3R5bGUuc2hlZXQ7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLmFjdGl2ZVJ1bGVzW25hbWVdKSB7XG5cdFx0XHR0aGlzLmFjdGl2ZVJ1bGVzW25hbWVdID0gdHJ1ZTtcblx0XHRcdHRoaXMuc3R5bGVzaGVldC5pbnNlcnRSdWxlKGBAa2V5ZnJhbWVzICR7bmFtZX0gJHtydWxlfWAsIHRoaXMuc3R5bGVzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuXHRcdH1cblx0fSxcblxuXHRuZXh0KCkge1xuXHRcdHRoaXMucnVubmluZyA9IGZhbHNlO1xuXG5cdFx0Y29uc3Qgbm93ID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuXHRcdGxldCBpID0gdGhpcy50cmFuc2l0aW9ucy5sZW5ndGg7XG5cblx0XHR3aGlsZSAoaS0tKSB7XG5cdFx0XHRjb25zdCB0cmFuc2l0aW9uID0gdGhpcy50cmFuc2l0aW9uc1tpXTtcblxuXHRcdFx0aWYgKHRyYW5zaXRpb24ucHJvZ3JhbSAmJiBub3cgPj0gdHJhbnNpdGlvbi5wcm9ncmFtLmVuZCkge1xuXHRcdFx0XHR0cmFuc2l0aW9uLmRvbmUoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRyYW5zaXRpb24ucGVuZGluZyAmJiBub3cgPj0gdHJhbnNpdGlvbi5wZW5kaW5nLnN0YXJ0KSB7XG5cdFx0XHRcdHRyYW5zaXRpb24uc3RhcnQodHJhbnNpdGlvbi5wZW5kaW5nKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRyYW5zaXRpb24ucnVubmluZykge1xuXHRcdFx0XHR0cmFuc2l0aW9uLnVwZGF0ZShub3cpO1xuXHRcdFx0XHR0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIGlmICghdHJhbnNpdGlvbi5wZW5kaW5nKSB7XG5cdFx0XHRcdHRoaXMudHJhbnNpdGlvbnMuc3BsaWNlKGksIDEpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLnJ1bm5pbmcpIHtcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmJvdW5kKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuc3R5bGVzaGVldCkge1xuXHRcdFx0bGV0IGkgPSB0aGlzLnN0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKGktLSkgdGhpcy5zdHlsZXNoZWV0LmRlbGV0ZVJ1bGUoaSk7XG5cdFx0XHR0aGlzLmFjdGl2ZVJ1bGVzID0ge307XG5cdFx0fVxuXHR9LFxuXG5cdGRlbGV0ZVJ1bGUobm9kZSwgbmFtZSkge1xuXHRcdG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gbm9kZS5zdHlsZS5hbmltYXRpb25cblx0XHRcdC5zcGxpdCgnLCAnKVxuXHRcdFx0LmZpbHRlcihhbmltID0+IGFuaW0gJiYgYW5pbS5pbmRleE9mKG5hbWUpID09PSAtMSlcblx0XHRcdC5qb2luKCcsICcpO1xuXHR9LFxuXG5cdGdyb3VwT3V0cm9zKCkge1xuXHRcdHRoaXMub3V0cm9zID0ge1xuXHRcdFx0cmVtYWluaW5nOiAwLFxuXHRcdFx0Y2FsbGJhY2tzOiBbXVxuXHRcdH07XG5cdH1cbn07XG5cbmZ1bmN0aW9uIGhhbmRsZVByb21pc2UocHJvbWlzZSwgaW5mbykge1xuXHR2YXIgdG9rZW4gPSBpbmZvLnRva2VuID0ge307XG5cblx0ZnVuY3Rpb24gdXBkYXRlKHR5cGUsIGluZGV4LCBrZXksIHZhbHVlKSB7XG5cdFx0aWYgKGluZm8udG9rZW4gIT09IHRva2VuKSByZXR1cm47XG5cblx0XHRpbmZvLnJlc29sdmVkID0ga2V5ICYmIHsgW2tleV06IHZhbHVlIH07XG5cblx0XHRjb25zdCBjaGlsZF9jdHggPSBhc3NpZ24oYXNzaWduKHt9LCBpbmZvLmN0eCksIGluZm8ucmVzb2x2ZWQpO1xuXHRcdGNvbnN0IGJsb2NrID0gdHlwZSAmJiAoaW5mby5jdXJyZW50ID0gdHlwZSkoaW5mby5jb21wb25lbnQsIGNoaWxkX2N0eCk7XG5cblx0XHRpZiAoaW5mby5ibG9jaykge1xuXHRcdFx0aWYgKGluZm8uYmxvY2tzKSB7XG5cdFx0XHRcdGluZm8uYmxvY2tzLmZvckVhY2goKGJsb2NrLCBpKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGkgIT09IGluZGV4ICYmIGJsb2NrKSB7XG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uTWFuYWdlci5ncm91cE91dHJvcygpO1xuXHRcdFx0XHRcdFx0YmxvY2subygoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGJsb2NrLmQoMSk7XG5cdFx0XHRcdFx0XHRcdGluZm8uYmxvY2tzW2ldID0gbnVsbDtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpbmZvLmJsb2NrLmQoMSk7XG5cdFx0XHR9XG5cblx0XHRcdGJsb2NrLmMoKTtcblx0XHRcdGJsb2NrW2Jsb2NrLmkgPyAnaScgOiAnbSddKGluZm8ubW91bnQoKSwgaW5mby5hbmNob3IpO1xuXG5cdFx0XHRpbmZvLmNvbXBvbmVudC5yb290LnNldCh7fSk7IC8vIGZsdXNoIGFueSBoYW5kbGVycyB0aGF0IHdlcmUgY3JlYXRlZFxuXHRcdH1cblxuXHRcdGluZm8uYmxvY2sgPSBibG9jaztcblx0XHRpZiAoaW5mby5ibG9ja3MpIGluZm8uYmxvY2tzW2luZGV4XSA9IGJsb2NrO1xuXHR9XG5cblx0aWYgKGlzUHJvbWlzZShwcm9taXNlKSkge1xuXHRcdHByb21pc2UudGhlbih2YWx1ZSA9PiB7XG5cdFx0XHR1cGRhdGUoaW5mby50aGVuLCAxLCBpbmZvLnZhbHVlLCB2YWx1ZSk7XG5cdFx0fSwgZXJyb3IgPT4ge1xuXHRcdFx0dXBkYXRlKGluZm8uY2F0Y2gsIDIsIGluZm8uZXJyb3IsIGVycm9yKTtcblx0XHR9KTtcblxuXHRcdC8vIGlmIHdlIHByZXZpb3VzbHkgaGFkIGEgdGhlbi9jYXRjaCBibG9jaywgZGVzdHJveSBpdFxuXHRcdGlmIChpbmZvLmN1cnJlbnQgIT09IGluZm8ucGVuZGluZykge1xuXHRcdFx0dXBkYXRlKGluZm8ucGVuZGluZywgMCk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0aWYgKGluZm8uY3VycmVudCAhPT0gaW5mby50aGVuKSB7XG5cdFx0XHR1cGRhdGUoaW5mby50aGVuLCAxLCBpbmZvLnZhbHVlLCBwcm9taXNlKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGluZm8ucmVzb2x2ZWQgPSB7IFtpbmZvLnZhbHVlXTogcHJvbWlzZSB9O1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3lCbG9jayhibG9jaywgbG9va3VwKSB7XG5cdGJsb2NrLmQoMSk7XG5cdGxvb2t1cFtibG9jay5rZXldID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gb3V0cm9BbmREZXN0cm95QmxvY2soYmxvY2ssIGxvb2t1cCkge1xuXHRibG9jay5vKGZ1bmN0aW9uKCkge1xuXHRcdGRlc3Ryb3lCbG9jayhibG9jaywgbG9va3VwKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUtleWVkRWFjaChvbGRfYmxvY2tzLCBjb21wb25lbnQsIGNoYW5nZWQsIGdldF9rZXksIGR5bmFtaWMsIGN0eCwgbGlzdCwgbG9va3VwLCBub2RlLCBoYXNfb3V0cm8sIGNyZWF0ZV9lYWNoX2Jsb2NrLCBpbnRyb19tZXRob2QsIG5leHQsIGdldF9jb250ZXh0KSB7XG5cdHZhciBvID0gb2xkX2Jsb2Nrcy5sZW5ndGg7XG5cdHZhciBuID0gbGlzdC5sZW5ndGg7XG5cblx0dmFyIGkgPSBvO1xuXHR2YXIgb2xkX2luZGV4ZXMgPSB7fTtcblx0d2hpbGUgKGktLSkgb2xkX2luZGV4ZXNbb2xkX2Jsb2Nrc1tpXS5rZXldID0gaTtcblxuXHR2YXIgbmV3X2Jsb2NrcyA9IFtdO1xuXHR2YXIgbmV3X2xvb2t1cCA9IHt9O1xuXHR2YXIgZGVsdGFzID0ge307XG5cblx0dmFyIGkgPSBuO1xuXHR3aGlsZSAoaS0tKSB7XG5cdFx0dmFyIGNoaWxkX2N0eCA9IGdldF9jb250ZXh0KGN0eCwgbGlzdCwgaSk7XG5cdFx0dmFyIGtleSA9IGdldF9rZXkoY2hpbGRfY3R4KTtcblx0XHR2YXIgYmxvY2sgPSBsb29rdXBba2V5XTtcblxuXHRcdGlmICghYmxvY2spIHtcblx0XHRcdGJsb2NrID0gY3JlYXRlX2VhY2hfYmxvY2soY29tcG9uZW50LCBrZXksIGNoaWxkX2N0eCk7XG5cdFx0XHRibG9jay5jKCk7XG5cdFx0fSBlbHNlIGlmIChkeW5hbWljKSB7XG5cdFx0XHRibG9jay5wKGNoYW5nZWQsIGNoaWxkX2N0eCk7XG5cdFx0fVxuXG5cdFx0bmV3X2Jsb2Nrc1tpXSA9IG5ld19sb29rdXBba2V5XSA9IGJsb2NrO1xuXG5cdFx0aWYgKGtleSBpbiBvbGRfaW5kZXhlcykgZGVsdGFzW2tleV0gPSBNYXRoLmFicyhpIC0gb2xkX2luZGV4ZXNba2V5XSk7XG5cdH1cblxuXHR2YXIgd2lsbF9tb3ZlID0ge307XG5cdHZhciBkaWRfbW92ZSA9IHt9O1xuXG5cdHZhciBkZXN0cm95ID0gaGFzX291dHJvID8gb3V0cm9BbmREZXN0cm95QmxvY2sgOiBkZXN0cm95QmxvY2s7XG5cdGlmIChoYXNfb3V0cm8pIHRyYW5zaXRpb25NYW5hZ2VyLmdyb3VwT3V0cm9zKCk7XG5cblx0ZnVuY3Rpb24gaW5zZXJ0KGJsb2NrKSB7XG5cdFx0YmxvY2tbaW50cm9fbWV0aG9kXShub2RlLCBuZXh0KTtcblx0XHRsb29rdXBbYmxvY2sua2V5XSA9IGJsb2NrO1xuXHRcdG5leHQgPSBibG9jay5maXJzdDtcblx0XHRuLS07XG5cdH1cblxuXHR3aGlsZSAobyAmJiBuKSB7XG5cdFx0dmFyIG5ld19ibG9jayA9IG5ld19ibG9ja3NbbiAtIDFdO1xuXHRcdHZhciBvbGRfYmxvY2sgPSBvbGRfYmxvY2tzW28gLSAxXTtcblx0XHR2YXIgbmV3X2tleSA9IG5ld19ibG9jay5rZXk7XG5cdFx0dmFyIG9sZF9rZXkgPSBvbGRfYmxvY2sua2V5O1xuXG5cdFx0aWYgKG5ld19ibG9jayA9PT0gb2xkX2Jsb2NrKSB7XG5cdFx0XHQvLyBkbyBub3RoaW5nXG5cdFx0XHRuZXh0ID0gbmV3X2Jsb2NrLmZpcnN0O1xuXHRcdFx0by0tO1xuXHRcdFx0bi0tO1xuXHRcdH1cblxuXHRcdGVsc2UgaWYgKCFuZXdfbG9va3VwW29sZF9rZXldKSB7XG5cdFx0XHQvLyByZW1vdmUgb2xkIGJsb2NrXG5cdFx0XHRkZXN0cm95KG9sZF9ibG9jaywgbG9va3VwKTtcblx0XHRcdG8tLTtcblx0XHR9XG5cblx0XHRlbHNlIGlmICghbG9va3VwW25ld19rZXldIHx8IHdpbGxfbW92ZVtuZXdfa2V5XSkge1xuXHRcdFx0aW5zZXJ0KG5ld19ibG9jayk7XG5cdFx0fVxuXG5cdFx0ZWxzZSBpZiAoZGlkX21vdmVbb2xkX2tleV0pIHtcblx0XHRcdG8tLTtcblxuXHRcdH0gZWxzZSBpZiAoZGVsdGFzW25ld19rZXldID4gZGVsdGFzW29sZF9rZXldKSB7XG5cdFx0XHRkaWRfbW92ZVtuZXdfa2V5XSA9IHRydWU7XG5cdFx0XHRpbnNlcnQobmV3X2Jsb2NrKTtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHR3aWxsX21vdmVbb2xkX2tleV0gPSB0cnVlO1xuXHRcdFx0by0tO1xuXHRcdH1cblx0fVxuXG5cdHdoaWxlIChvLS0pIHtcblx0XHR2YXIgb2xkX2Jsb2NrID0gb2xkX2Jsb2Nrc1tvXTtcblx0XHRpZiAoIW5ld19sb29rdXBbb2xkX2Jsb2NrLmtleV0pIGRlc3Ryb3kob2xkX2Jsb2NrLCBsb29rdXApO1xuXHR9XG5cblx0d2hpbGUgKG4pIGluc2VydChuZXdfYmxvY2tzW24gLSAxXSk7XG5cblx0cmV0dXJuIG5ld19ibG9ja3M7XG59XG5cbmZ1bmN0aW9uIGdldFNwcmVhZFVwZGF0ZShsZXZlbHMsIHVwZGF0ZXMpIHtcblx0dmFyIHVwZGF0ZSA9IHt9O1xuXG5cdHZhciB0b19udWxsX291dCA9IHt9O1xuXHR2YXIgYWNjb3VudGVkX2ZvciA9IHt9O1xuXG5cdHZhciBpID0gbGV2ZWxzLmxlbmd0aDtcblx0d2hpbGUgKGktLSkge1xuXHRcdHZhciBvID0gbGV2ZWxzW2ldO1xuXHRcdHZhciBuID0gdXBkYXRlc1tpXTtcblxuXHRcdGlmIChuKSB7XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gbykge1xuXHRcdFx0XHRpZiAoIShrZXkgaW4gbikpIHRvX251bGxfb3V0W2tleV0gPSAxO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gbikge1xuXHRcdFx0XHRpZiAoIWFjY291bnRlZF9mb3Jba2V5XSkge1xuXHRcdFx0XHRcdHVwZGF0ZVtrZXldID0gbltrZXldO1xuXHRcdFx0XHRcdGFjY291bnRlZF9mb3Jba2V5XSA9IDE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bGV2ZWxzW2ldID0gbjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIG8pIHtcblx0XHRcdFx0YWNjb3VudGVkX2ZvcltrZXldID0gMTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmb3IgKHZhciBrZXkgaW4gdG9fbnVsbF9vdXQpIHtcblx0XHRpZiAoIShrZXkgaW4gdXBkYXRlKSkgdXBkYXRlW2tleV0gPSB1bmRlZmluZWQ7XG5cdH1cblxuXHRyZXR1cm4gdXBkYXRlO1xufVxuXG5mdW5jdGlvbiBzcHJlYWQoYXJncykge1xuXHRjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7fSwgLi4uYXJncyk7XG5cdGxldCBzdHIgPSAnJztcblxuXHRPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKG5hbWUgPT4ge1xuXHRcdGNvbnN0IHZhbHVlID0gYXR0cmlidXRlc1tuYW1lXTtcblx0XHRpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXHRcdGlmICh2YWx1ZSA9PT0gdHJ1ZSkgc3RyICs9IFwiIFwiICsgbmFtZTtcblx0XHRzdHIgKz0gXCIgXCIgKyBuYW1lICsgXCI9XCIgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG5cdH0pO1xuXG5cdHJldHVybiBzdHI7XG59XG5cbmNvbnN0IGVzY2FwZWQgPSB7XG5cdCdcIic6ICcmcXVvdDsnLFxuXHRcIidcIjogJyYjMzk7Jyxcblx0JyYnOiAnJmFtcDsnLFxuXHQnPCc6ICcmbHQ7Jyxcblx0Jz4nOiAnJmd0Oydcbn07XG5cbmZ1bmN0aW9uIGVzY2FwZShodG1sKSB7XG5cdHJldHVybiBTdHJpbmcoaHRtbCkucmVwbGFjZSgvW1wiJyY8Pl0vZywgbWF0Y2ggPT4gZXNjYXBlZFttYXRjaF0pO1xufVxuXG5mdW5jdGlvbiBlYWNoKGl0ZW1zLCBhc3NpZ24sIGZuKSB7XG5cdGxldCBzdHIgPSAnJztcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdHN0ciArPSBmbihhc3NpZ24oaXRlbXNbaV0sIGkpKTtcblx0fVxuXHRyZXR1cm4gc3RyO1xufVxuXG5jb25zdCBtaXNzaW5nQ29tcG9uZW50ID0ge1xuXHRfcmVuZGVyOiAoKSA9PiAnJ1xufTtcblxuZnVuY3Rpb24gYmxhbmtPYmplY3QoKSB7XG5cdHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwpO1xufVxuXG5mdW5jdGlvbiBkZXN0cm95KGRldGFjaCkge1xuXHR0aGlzLmRlc3Ryb3kgPSBub29wO1xuXHR0aGlzLmZpcmUoJ2Rlc3Ryb3knKTtcblx0dGhpcy5zZXQgPSBub29wO1xuXG5cdHRoaXMuX2ZyYWdtZW50LmQoZGV0YWNoICE9PSBmYWxzZSk7XG5cdHRoaXMuX2ZyYWdtZW50ID0gbnVsbDtcblx0dGhpcy5fc3RhdGUgPSB7fTtcbn1cblxuZnVuY3Rpb24gZGVzdHJveURldihkZXRhY2gpIHtcblx0ZGVzdHJveS5jYWxsKHRoaXMsIGRldGFjaCk7XG5cdHRoaXMuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUud2FybignQ29tcG9uZW50IHdhcyBhbHJlYWR5IGRlc3Ryb3llZCcpO1xuXHR9O1xufVxuXG5mdW5jdGlvbiBfZGlmZmVycyhhLCBiKSB7XG5cdHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiIHx8ICgoYSAmJiB0eXBlb2YgYSA9PT0gJ29iamVjdCcpIHx8IHR5cGVvZiBhID09PSAnZnVuY3Rpb24nKTtcbn1cblxuZnVuY3Rpb24gX2RpZmZlcnNJbW11dGFibGUoYSwgYikge1xuXHRyZXR1cm4gYSAhPSBhID8gYiA9PSBiIDogYSAhPT0gYjtcbn1cblxuZnVuY3Rpb24gZmlyZShldmVudE5hbWUsIGRhdGEpIHtcblx0dmFyIGhhbmRsZXJzID1cblx0XHRldmVudE5hbWUgaW4gdGhpcy5faGFuZGxlcnMgJiYgdGhpcy5faGFuZGxlcnNbZXZlbnROYW1lXS5zbGljZSgpO1xuXHRpZiAoIWhhbmRsZXJzKSByZXR1cm47XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBoYW5kbGVycy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdHZhciBoYW5kbGVyID0gaGFuZGxlcnNbaV07XG5cblx0XHRpZiAoIWhhbmRsZXIuX19jYWxsaW5nKSB7XG5cdFx0XHRoYW5kbGVyLl9fY2FsbGluZyA9IHRydWU7XG5cdFx0XHRoYW5kbGVyLmNhbGwodGhpcywgZGF0YSk7XG5cdFx0XHRoYW5kbGVyLl9fY2FsbGluZyA9IGZhbHNlO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBnZXQoKSB7XG5cdHJldHVybiB0aGlzLl9zdGF0ZTtcbn1cblxuZnVuY3Rpb24gaW5pdChjb21wb25lbnQsIG9wdGlvbnMpIHtcblx0Y29tcG9uZW50Ll9oYW5kbGVycyA9IGJsYW5rT2JqZWN0KCk7XG5cdGNvbXBvbmVudC5fYmluZCA9IG9wdGlvbnMuX2JpbmQ7XG5cblx0Y29tcG9uZW50Lm9wdGlvbnMgPSBvcHRpb25zO1xuXHRjb21wb25lbnQucm9vdCA9IG9wdGlvbnMucm9vdCB8fCBjb21wb25lbnQ7XG5cdGNvbXBvbmVudC5zdG9yZSA9IGNvbXBvbmVudC5yb290LnN0b3JlIHx8IG9wdGlvbnMuc3RvcmU7XG59XG5cbmZ1bmN0aW9uIG9uKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuXHR2YXIgaGFuZGxlcnMgPSB0aGlzLl9oYW5kbGVyc1tldmVudE5hbWVdIHx8ICh0aGlzLl9oYW5kbGVyc1tldmVudE5hbWVdID0gW10pO1xuXHRoYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuXG5cdHJldHVybiB7XG5cdFx0Y2FuY2VsOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpbmRleCA9IGhhbmRsZXJzLmluZGV4T2YoaGFuZGxlcik7XG5cdFx0XHRpZiAofmluZGV4KSBoYW5kbGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gcnVuKGZuKSB7XG5cdGZuKCk7XG59XG5cbmZ1bmN0aW9uIHNldChuZXdTdGF0ZSkge1xuXHR0aGlzLl9zZXQoYXNzaWduKHt9LCBuZXdTdGF0ZSkpO1xuXHRpZiAodGhpcy5yb290Ll9sb2NrKSByZXR1cm47XG5cdHRoaXMucm9vdC5fbG9jayA9IHRydWU7XG5cdGNhbGxBbGwodGhpcy5yb290Ll9iZWZvcmVjcmVhdGUpO1xuXHRjYWxsQWxsKHRoaXMucm9vdC5fb25jcmVhdGUpO1xuXHRjYWxsQWxsKHRoaXMucm9vdC5fYWZ0ZXJjcmVhdGUpO1xuXHR0aGlzLnJvb3QuX2xvY2sgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gX3NldChuZXdTdGF0ZSkge1xuXHR2YXIgb2xkU3RhdGUgPSB0aGlzLl9zdGF0ZSxcblx0XHRjaGFuZ2VkID0ge30sXG5cdFx0ZGlydHkgPSBmYWxzZTtcblxuXHRmb3IgKHZhciBrZXkgaW4gbmV3U3RhdGUpIHtcblx0XHRpZiAodGhpcy5fZGlmZmVycyhuZXdTdGF0ZVtrZXldLCBvbGRTdGF0ZVtrZXldKSkgY2hhbmdlZFtrZXldID0gZGlydHkgPSB0cnVlO1xuXHR9XG5cdGlmICghZGlydHkpIHJldHVybjtcblxuXHR0aGlzLl9zdGF0ZSA9IGFzc2lnbihhc3NpZ24oe30sIG9sZFN0YXRlKSwgbmV3U3RhdGUpO1xuXHR0aGlzLl9yZWNvbXB1dGUoY2hhbmdlZCwgdGhpcy5fc3RhdGUpO1xuXHRpZiAodGhpcy5fYmluZCkgdGhpcy5fYmluZChjaGFuZ2VkLCB0aGlzLl9zdGF0ZSk7XG5cblx0aWYgKHRoaXMuX2ZyYWdtZW50KSB7XG5cdFx0dGhpcy5maXJlKFwic3RhdGVcIiwgeyBjaGFuZ2VkOiBjaGFuZ2VkLCBjdXJyZW50OiB0aGlzLl9zdGF0ZSwgcHJldmlvdXM6IG9sZFN0YXRlIH0pO1xuXHRcdHRoaXMuX2ZyYWdtZW50LnAoY2hhbmdlZCwgdGhpcy5fc3RhdGUpO1xuXHRcdHRoaXMuZmlyZShcInVwZGF0ZVwiLCB7IGNoYW5nZWQ6IGNoYW5nZWQsIGN1cnJlbnQ6IHRoaXMuX3N0YXRlLCBwcmV2aW91czogb2xkU3RhdGUgfSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gc2V0RGV2KG5ld1N0YXRlKSB7XG5cdGlmICh0eXBlb2YgbmV3U3RhdGUgIT09ICdvYmplY3QnKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0dGhpcy5fZGVidWdOYW1lICsgJy5zZXQgd2FzIGNhbGxlZCB3aXRob3V0IGFuIG9iamVjdCBvZiBkYXRhIGtleS12YWx1ZXMgdG8gdXBkYXRlLidcblx0XHQpO1xuXHR9XG5cblx0dGhpcy5fY2hlY2tSZWFkT25seShuZXdTdGF0ZSk7XG5cdHNldC5jYWxsKHRoaXMsIG5ld1N0YXRlKTtcbn1cblxuZnVuY3Rpb24gY2FsbEFsbChmbnMpIHtcblx0d2hpbGUgKGZucyAmJiBmbnMubGVuZ3RoKSBmbnMuc2hpZnQoKSgpO1xufVxuXG5mdW5jdGlvbiBfbW91bnQodGFyZ2V0LCBhbmNob3IpIHtcblx0dGhpcy5fZnJhZ21lbnRbdGhpcy5fZnJhZ21lbnQuaSA/ICdpJyA6ICdtJ10odGFyZ2V0LCBhbmNob3IgfHwgbnVsbCk7XG59XG5cbnZhciBQRU5ESU5HID0ge307XG52YXIgU1VDQ0VTUyA9IHt9O1xudmFyIEZBSUxVUkUgPSB7fTtcblxuZnVuY3Rpb24gcmVtb3ZlRnJvbVN0b3JlKCkge1xuXHR0aGlzLnN0b3JlLl9yZW1vdmUodGhpcyk7XG59XG5cbnZhciBwcm90byA9IHtcblx0ZGVzdHJveSxcblx0Z2V0LFxuXHRmaXJlLFxuXHRvbixcblx0c2V0LFxuXHRfcmVjb21wdXRlOiBub29wLFxuXHRfc2V0LFxuXHRfbW91bnQsXG5cdF9kaWZmZXJzXG59O1xuXG52YXIgcHJvdG9EZXYgPSB7XG5cdGRlc3Ryb3k6IGRlc3Ryb3lEZXYsXG5cdGdldCxcblx0ZmlyZSxcblx0b24sXG5cdHNldDogc2V0RGV2LFxuXHRfcmVjb21wdXRlOiBub29wLFxuXHRfc2V0LFxuXHRfbW91bnQsXG5cdF9kaWZmZXJzXG59O1xuXG5leHBvcnQgeyBibGFua09iamVjdCwgZGVzdHJveSwgZGVzdHJveURldiwgX2RpZmZlcnMsIF9kaWZmZXJzSW1tdXRhYmxlLCBmaXJlLCBnZXQsIGluaXQsIG9uLCBydW4sIHNldCwgX3NldCwgc2V0RGV2LCBjYWxsQWxsLCBfbW91bnQsIFBFTkRJTkcsIFNVQ0NFU1MsIEZBSUxVUkUsIHJlbW92ZUZyb21TdG9yZSwgcHJvdG8sIHByb3RvRGV2LCBoYW5kbGVQcm9taXNlLCBhcHBlbmROb2RlLCBpbnNlcnROb2RlLCBkZXRhY2hOb2RlLCBkZXRhY2hCZXR3ZWVuLCBkZXRhY2hCZWZvcmUsIGRldGFjaEFmdGVyLCByZWluc2VydEJldHdlZW4sIHJlaW5zZXJ0Q2hpbGRyZW4sIHJlaW5zZXJ0QWZ0ZXIsIHJlaW5zZXJ0QmVmb3JlLCBkZXN0cm95RWFjaCwgY3JlYXRlRnJhZ21lbnQsIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZVN2Z0VsZW1lbnQsIGNyZWF0ZVRleHQsIGNyZWF0ZUNvbW1lbnQsIGFkZExpc3RlbmVyLCByZW1vdmVMaXN0ZW5lciwgc2V0QXR0cmlidXRlLCBzZXRBdHRyaWJ1dGVzLCByZW1vdmVBdHRyaWJ1dGUsIHNldFhsaW5rQXR0cmlidXRlLCBnZXRCaW5kaW5nR3JvdXBWYWx1ZSwgdG9OdW1iZXIsIHRpbWVSYW5nZXNUb0FycmF5LCBjaGlsZHJlbiwgY2xhaW1FbGVtZW50LCBjbGFpbVRleHQsIHNldElucHV0VHlwZSwgc2V0U3R5bGUsIHNlbGVjdE9wdGlvbiwgc2VsZWN0T3B0aW9ucywgc2VsZWN0VmFsdWUsIHNlbGVjdE11bHRpcGxlVmFsdWUsIGFkZFJlc2l6ZUxpc3RlbmVyLCBkZXN0cm95QmxvY2ssIG91dHJvQW5kRGVzdHJveUJsb2NrLCB1cGRhdGVLZXllZEVhY2gsIGdldFNwcmVhZFVwZGF0ZSwgc3ByZWFkLCBlc2NhcGVkLCBlc2NhcGUsIGVhY2gsIG1pc3NpbmdDb21wb25lbnQsIGxpbmVhciwgZ2VuZXJhdGVSdWxlLCBoYXNoLCB3cmFwVHJhbnNpdGlvbiwgdHJhbnNpdGlvbk1hbmFnZXIsIG5vb3AsIGFzc2lnbiwgYXNzaWduVHJ1ZSwgaXNQcm9taXNlIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdmVsdGUvc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuXG5uZXcgQXBwKHsgdGFyZ2V0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJykgfSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvaW5kZXguanMiLCI8ZGl2IGNsYXNzPVwiZm9ybS1ib3hcIj5cblx0PFllYXJNb250aFBpY2tlciByZWY6cGlja2VyPjwvWWVhck1vbnRoUGlja2VyPlxuXHQ8Rm9ybSByZWY6Zm9ybT48L0Zvcm0+XG48L2Rpdj5cbjxUYWJsZSByZWY6dGFibGU+PC9UYWJsZT5cblxuPHNjcmlwdD5cbmltcG9ydCBZZWFyTW9udGhQaWNrZXIgZnJvbSAnLi4veWVhci1tb250aC1waWNrZXInO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi4vZm9ybSc7XG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vdGFibGUnO1xuaW1wb3J0IHtHcm91cHMsIEV4cGVuc2VzfSBmcm9tICcuLi9kYXRhJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhICgpIHsgcmV0dXJuIHt9OyB9LFxuXHRjb21wb25lbnRzOiB7IEZvcm0sIFRhYmxlLCBZZWFyTW9udGhQaWNrZXIgfSxcblx0b25jcmVhdGUgKCkge1xuXHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDcpO1xuXHRcdEdyb3Vwcy5nZXQoKS50aGVuKGdyb3VwcyA9PiB0aGlzLnJlZnMuZm9ybS5zZXQoeyBkYXRlLCBncm91cHMgfSkpO1xuXHRcdHRoaXMubG9hZFRhYmxlKGRhdGUpO1xuXG5cdFx0dGhpcy5yZWZzLmZvcm0ub24oJ2NoYW5nZScsIHRoaXMub25Gb3JtQ2hhbmdlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMucmVmcy5mb3JtLm9uKCdyZW1vdmUnLCB0aGlzLm9uUmVtb3ZlSXRlbS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnJlZnMuZm9ybS5vbignc3VibWl0JywgdGhpcy5vbkZvcm1TdWJtaXQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5yZWZzLmZvcm0ub24oJ2Vycm9yJywgdGhpcy5vbkZvcm1FcnJvci5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnJlZnMucGlja2VyLm9uKCdjaGFuZ2UnLCB0aGlzLm9uRGF0ZUNoYW5nZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnJlZnMudGFibGUub24oJ2NsaWNrJywgdGhpcy5vblRhYmxlQ2xpY2suYmluZCh0aGlzKSk7XG5cdH0sXG5cblx0bWV0aG9kczoge1xuXHRcdGxvYWRUYWJsZSAoZGF0ZSkge1xuXHRcdFx0aWYgKCFkYXRlKSBkYXRlID0gdGhpcy5sYXN0RGF0ZTtcblx0XHRcdGVsc2UgdGhpcy5sYXN0RGF0ZSA9IGRhdGU7XG5cdFx0XHRFeHBlbnNlcy5nZXQoZGF0ZSkudGhlbihkYXRhID0+IHtcblx0XHRcdFx0dGhpcy5sYXN0VGFibGVEYXRhID0gZGF0YTtcblx0XHRcdFx0dGhpcy5yZWZzLnRhYmxlLnNldCh7IGRhdGEgfSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0b25EYXRlQ2hhbmdlIChkYXRlKSB7XG5cdFx0XHR0aGlzLnJlZnMuZm9ybS5zZXQoeyBkYXRlOiBkYXRlLmRhdGVTdHIgfSk7XG5cdFx0XHR0aGlzLmxvYWRUYWJsZShkYXRlLmRhdGVTdHIpO1xuXHRcdH0sXG5cblx0XHRvbkZvcm1DaGFuZ2UgKGRhdGEpIHtcblx0XHRcdGlmICghZGF0YS5sZW5ndGgpIHRoaXMucmVmcy50YWJsZS5zZXQoeyBkYXRhOiB0aGlzLmxhc3RUYWJsZURhdGEgfSk7XG5cdFx0XHRlbHNlIHRoaXMucmVmcy50YWJsZS5zZXQoeyBkYXRhIH0pO1xuXHRcdH0sXG5cblx0XHRvbkZvcm1TdWJtaXQgKGRhdGEpIHtcblx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdFx0Ly8gRXhwZW5zZXMuc2F2ZShkYXRhKS50aGVuKCgpID0+IHtcblx0XHRcdC8vIFx0dGhpcy5sb2FkVGFibGUoKTtcblx0XHRcdC8vIH0pO1xuXHRcdH0sXG5cblx0XHRvblJlbW92ZUl0ZW0gKGl0ZW0pIHtcblx0XHRcdGNvbnNvbGUubG9nKGl0ZW0pO1xuXHRcdH0sXG5cblx0XHRvbkZvcm1FcnJvciAoZXJyKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnIpO1x0Ly8gVE9ETzogdG9hc3Q/XG5cdFx0fSxcblxuXHRcdG9uVGFibGVDbGljayAoaXRlbSkgeyB0aGlzLnJlZnMuZm9ybS5lZGl0KGl0ZW0pOyB9LFxuXHR9XG59O1xuXG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9hcHAvaW5kZXguaHRtbCIsIjxkaXYgY2xhc3M9XCJ5ZWFyLW1vbnRoLXBpY2tlciB7aXNUb2RheSA/ICdpcy10b2RheSc6ICcnfVwiIG9uOndoZWVsPVwib253aGVlbChldmVudClcIj5cblx0PGJ1dHRvbiByZWY6bGVmdEJ1dHRvbiBjbGFzcz1cImJ0bi1wcmV2XCIgdGl0bGU9XCJQcmV2aW91cyBtb250aFwiXG5cdFx0b246a2V5ZG93bj1cImtleWRvd24oZXZlbnQua2V5LCAtMSlcIlxuXHRcdG9uOmtleXVwPVwia2V5dXAoZXZlbnQua2V5KVwiXG5cdFx0b246bW91c2Vkb3duPVwidGljaygtMSlcIlxuXHRcdG9uOm1vdXNlb3V0PVwibXVwKClcIlxuXHRcdG9uOm1vdXNldXA9XCJtdXAoKVwiPjxpIGNsYXNzPVwiaW9uLWlvcy1hcnJvdy1iYWNrXCI+PC9pPjwvYnV0dG9uPlxuXG5cdDxzcGFuIGNsYXNzPVwiZGF5XCI+e21vbnRoc1ttb250aF19IHt5ZWFyfTwvc3Bhbj5cblxuXHQ8YnV0dG9uIHJlZjpyaWdodEJ1dHRvbiBjbGFzcz1cImJ0bi1uZXh0XCIgdGl0bGU9XCJOZXh0IG1vbnRoXCJcblx0XHRvbjprZXlkb3duPVwia2V5ZG93bihldmVudC5rZXksIDEpXCJcblx0XHRvbjprZXl1cD1cImtleXVwKGV2ZW50LmtleSlcIlxuXHRcdG9uOm1vdXNlZG93bj1cInRpY2soMSlcIlxuXHRcdG9uOm1vdXNlb3V0PVwibXVwKClcIlxuXHRcdG9uOm1vdXNldXA9XCJtdXAoKVwiPjxpIGNsYXNzPVwiaW9uLWlvcy1hcnJvdy1mb3J3YXJkXCI+PC9pPjwvYnV0dG9uPlxuXG5cdDxidXR0b24gdGl0bGU9XCJUb2RheVwiIGNsYXNzPVwiYnRuLXRvZGF5XCIgb246Y2xpY2s9XCJyZXNldCgpXCI+PGkgY2xhc3M9XCJpb24tbWQtdW5kb1wiPjwvaT48L2J1dHRvbj5cbjwvZGl2PlxuXG48c2NyaXB0PlxuZnVuY3Rpb24gemVyb1N0YXRlICgpIHtcblx0Y29uc3QgZCA9IG5ldyBEYXRlKCk7XG5cdGNvbnN0IG1vbnRoID0gZC5nZXRNb250aCgpO1xuXHRjb25zdCB5ZWFyID0gZC5nZXRGdWxsWWVhcigpO1xuXHRjb25zdCBtb250aHMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ107XG5cdHJldHVybiB7IG1vbnRocywgbW9udGgsIHllYXIsIGN1cnJlbnQ6IHsgbW9udGgsIHllYXIgfSB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhdGEgKCkgeyByZXR1cm4gemVyb1N0YXRlKCk7IH0sXG5cdGNvbXB1dGVkOiB7XG5cdFx0aXNUb2RheTogKHttb250aCwgeWVhciwgY3VycmVudH0pID0+IChtb250aCA9PT0gY3VycmVudC5tb250aCAmJiB5ZWFyID09PSBjdXJyZW50LnllYXIpLFxuXHRcdGRhdGVTdHI6ICh7bW9udGgsIHllYXJ9KSA9PiBgJHt5ZWFyfS0keygnMCcgKyAobW9udGggKyAxKSkuc3Vic3RyKC0yKX1gXG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRvbndoZWVsIChlKSB7XG5cdFx0XHRjb25zdCB0aHJlc2hvbGQgPSAyO1xuXHRcdFx0bGV0IHZhbCA9IG51bGw7XG5cdFx0XHRpZiAoZS5kZWx0YVkgPCAtdGhyZXNob2xkKSB2YWwgPSAtMTtcblx0XHRcdGVsc2UgaWYgKGUuZGVsdGFZID4gdGhyZXNob2xkKSB2YWwgPSAxO1xuXHRcdFx0aWYgKHZhbCkgdGhpcy53aGVlbFRocm90dGxlKHZhbCwgZmFsc2UpO1xuXHRcdH0sXG5cblx0XHR3aGVlbFRocm90dGxlICh2YWx1ZSkge1xuXHRcdFx0aWYgKCF0aGlzLnRocm90dGxlcikge1xuXHRcdFx0XHR0aGlzLmdvKHZhbHVlKTtcblx0XHRcdFx0dGhpcy5ub3RpZnkoKTtcblx0XHRcdFx0dGhpcy50aHJvdHRsZXIgPSBzZXRUaW1lb3V0KCgpID0+ICh0aGlzLnRocm90dGxlciA9IG51bGwpLCAxMDApO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRrZXl1cCAoa2V5KSB7XG5cdFx0XHR0aGlzLmtleUlzRG93biA9IGZhbHNlO1xuXHRcdFx0aWYgKHRoaXMudGlja2VyKSBjbGVhclRpbWVvdXQodGhpcy50aWNrZXIpO1xuXHRcdFx0aWYgKGtleSA9PT0gJyAnIHx8IGtleSA9PT0gJ0VudGVyJyB8fFxuXHRcdFx0XHRrZXkgPT09ICdBcnJvd0xlZnQnIHx8IGtleSA9PT0gJ0Fycm93UmlnaHQnIHx8XG5cdFx0XHRcdGtleSA9PT0gJ0Fycm93RG93bicgfHwga2V5ID09PSAnQXJyb3dVcCcpIHRoaXMubm90aWZ5KCk7XG5cdFx0fSxcblxuXHRcdGtleWRvd24gKGtleSwgdmFsdWUpIHtcblx0XHRcdGlmICh0aGlzLmtleUlzRG93bikgcmV0dXJuO1xuXHRcdFx0aWYgKGtleSA9PT0gJ0Fycm93TGVmdCcgfHwga2V5ID09PSAnQXJyb3dEb3duJykge1xuXHRcdFx0XHR0aGlzLnJlZnMubGVmdEJ1dHRvbi5mb2N1cygpO1xuXHRcdFx0XHR0aGlzLmtleUlzRG93biA9IHRydWU7XG5cdFx0XHRcdHJldHVybiB0aGlzLnRpY2soLTEpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGtleSA9PT0gJ0Fycm93UmlnaHQnIHx8IGtleSA9PT0gJ0Fycm93VXAnKSB7XG5cdFx0XHRcdHRoaXMucmVmcy5yaWdodEJ1dHRvbi5mb2N1cygpO1xuXHRcdFx0XHR0aGlzLmtleUlzRG93biA9IHRydWU7XG5cdFx0XHRcdHJldHVybiB0aGlzLnRpY2soMSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoa2V5ID09PSAnICcgfHwga2V5ID09PSAnRW50ZXInKSB7XG5cdFx0XHRcdHRoaXMua2V5SXNEb3duID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy50aWNrKHZhbHVlKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0bXVwICgpIHtcblx0XHRcdGlmICh0aGlzLnRpY2tlcikgY2xlYXJUaW1lb3V0KHRoaXMudGlja2VyKTtcblx0XHRcdGlmICh0aGlzLm1vdXNlSXNEb3duKSB0aGlzLm5vdGlmeSgpO1xuXHRcdFx0dGhpcy5tb3VzZUlzRG93biA9IGZhbHNlO1xuXHRcdH0sXG5cblx0XHR0aWNrICh2YWx1ZSwgZGVsYXkgPSAzMDApIHtcblx0XHRcdGlmICh0aGlzLnRpY2tlcikgY2xlYXJUaW1lb3V0KHRoaXMudGlja2VyKTtcblx0XHRcdHRoaXMuZ28odmFsdWUpO1xuXHRcdFx0aWYgKHRoaXMuZ2V0KCkuaXNUb2RheSkgcmV0dXJuIHRoaXMubm90aWZ5KCk7XG5cdFx0XHR0aGlzLm1vdXNlSXNEb3duID0gdHJ1ZTtcblx0XHRcdHRoaXMudGlja2VyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGRlbGF5ID0gTWF0aC5tYXgoNjAsIGRlbGF5IC0gNDApO1xuXHRcdFx0XHR0aGlzLnRpY2sodmFsdWUsIGRlbGF5KTtcblx0XHRcdH0sIGRlbGF5KTtcblx0XHR9LFxuXG5cdFx0Z28gKHZhbHVlKSB7XG5cdFx0XHRsZXQge21vbnRoLCB5ZWFyfSA9IHRoaXMuZ2V0KCk7XG5cdFx0XHRtb250aCArPSB2YWx1ZTtcblx0XHRcdGlmIChtb250aCA8IDApIHsgbW9udGggPSAxMTsgeWVhciAtPSAxOyB9XG5cdFx0XHRlbHNlIGlmIChtb250aCA+IDExKSB7IG1vbnRoID0gMDsgeWVhciArPSAxOyB9XG5cdFx0XHR0aGlzLnNldCh7IG1vbnRoLCB5ZWFyIH0pO1xuXHRcdH0sXG5cblx0XHRub3RpZnkgKCkge1xuXHRcdFx0Y29uc3Qge21vbnRoLCB5ZWFyLCBkYXRlU3RyfSA9IHRoaXMuZ2V0KCk7XG5cdFx0XHR0aGlzLmZpcmUoJ2NoYW5nZScsIHsgbW9udGgsIHllYXIsIGRhdGVTdHIgfSk7XG5cdFx0fSxcblxuXHRcdHJlc2V0ICgpIHtcblx0XHRcdHRoaXMuc2V0KHplcm9TdGF0ZSgpKTtcblx0XHRcdHRoaXMubm90aWZ5KCk7XG5cdFx0fVxuXHR9XG59O1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQveWVhci1tb250aC1waWNrZXIvaW5kZXguaHRtbCIsIjxmb3JtIHJlZjpmb3JtIGNsYXNzPVwiZm9ybSB7aW5FZGl0ID8gJ2VkaXQnIDogJyd9XCIgb246c3VibWl0PVwib25zdWJtaXQoZXZlbnQpXCI+XG5cdDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImlkXCIgYmluZDp2YWx1ZT1cImlkXCI+XG5cdFx0PHRleHRhcmVhIGF1dG9mb2N1c1xuXHRcdFx0cmVmOnRleHRib3hcblx0XHRcdHRhYmluZGV4PVwiMVwiXG5cdFx0XHRwbGFjZWhvbGRlcj1cImUuZy4gVGVzY28gMTIuNTBcIlxuXHRcdFx0b246aW5wdXQ9XCJvbmlucHV0KHRoaXMpXCJcblx0XHRcdG9uOmtleWRvd249XCJvbmtleWRvd24oZXZlbnQpXCJcblx0XHRcdGJpbmQ6dmFsdWU9XCJ0ZXh0XCI+PC90ZXh0YXJlYT5cblx0PC9kaXY+XG5cdDxkaXYgY2xhc3M9XCJmb3JtLWZvb3RlciBmb3JtLXJvd1wiPlxuXHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiM1wiIGNsYXNzPVwiYnRuIGJ0bi1yZXNldFwiIG9uOmNsaWNrPVwicmVzZXQoKVwiPkNsZWFyPC9idXR0b24+XG5cdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCI0XCIgY2xhc3M9XCJidG4gZGFuZ2VyIGJ0bi1yZW1vdmVcIiBvbjpjbGljaz1cInJlbW92ZSgpXCI+UmVtb3ZlPC9idXR0b24+XG5cdFx0PGRpdiBjbGFzcz1cImZsZXgtZmlsbGVyXCI+PC9kaXY+XG5cdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCIzXCIgY2xhc3M9XCJidG4gYnRuLWNhbmNlbFwiIG9uOmNsaWNrPVwicmVzZXQoKVwiPkNhbmNlbDwvYnV0dG9uPlxuXHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIHRhYmluZGV4PVwiMlwiIGNsYXNzPVwiYnRuIHN1Y2Nlc3MgYnRuLXNhdmVcIj5TYXZlPC9idXR0b24+XG5cdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdGFiaW5kZXg9XCIyXCIgY2xhc3M9XCJidG4gc3VjY2VzcyBidG4tYWRkXCI+QWRkPC9idXR0b24+XG5cdDwvZGl2PlxuPC9mb3JtPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aW5FZGl0OiBmYWxzZSxcblx0XHRcdGRhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zdWJzdHIoMCwgNyksXG5cdFx0XHRpZDogbnVsbCxcblx0XHRcdHRleHQ6ICcnLFxuXHRcdFx0Z3JvdXBzOiBbXSxcblx0XHRcdHJvd3M6IFtdLFxuXHRcdH07XG5cdH0sXG5cdGNvbXB1dGVkOiB7XG5cdFx0X2dyb3VwcyAoe2dyb3Vwc30pIHtcblx0XHRcdHJldHVybiBncm91cHMubWFwKGcgPT4ge1xuXHRcdFx0XHRjb25zdCBzdHIgPSAoZy5uYW1lICsgJywnICsgZy5rZXl3b3JkcykudG9Mb3dlckNhc2UoKS5zcGxpdCgnLCcpO1xuXHRcdFx0XHRyZXR1cm4geyBpZDogZy5pZCwgbmFtZTogZy5uYW1lLCBzdHIgfVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LFxuXG5cdG1ldGhvZHM6IHtcblx0XHRvbmlucHV0IChlbCkge1xuXHRcdFx0dGhpcy50b2dnbGVBbW91bnRFcnJvcigpO1xuXHRcdFx0dGhpcy5wYXJzZUVudHJ5VGV4dChlbC52YWx1ZSk7XG5cdFx0XHR0aGlzLnVwZGF0ZUhlaWdodCgpO1xuXHRcdH0sXG5cblx0XHRvbmtleWRvd24gKGUpIHtcblx0XHRcdGlmIChlLmtleSA9PT0gJ0VudGVyJyAmJiAoZS5tZXRhS2V5IHx8IGUuY3RybEtleSkpIHRoaXMub25zdWJtaXQoZSk7XG5cdFx0XHRlbHNlIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHRoaXMucmVzZXQoZSk7XG5cdFx0fSxcblxuXHRcdGVkaXQgKGRhdGEpIHtcblx0XHRcdHRoaXMucmVzZXQoKTtcblx0XHRcdHRoaXMuc2V0KHsgaW5FZGl0OiB0cnVlLCB0ZXh0OiBkYXRhIH0pO1xuXHRcdFx0dGhpcy5maXJlKCdjaGFuZ2UnLCB0aGlzLmdldCgpLnJvd3MpO1xuXHRcdH0sXG5cblx0XHRyZXNldCAoKSB7XG5cdFx0XHR0aGlzLnNldCh7IGluRWRpdDogZmFsc2UsIGlkOiBudWxsLCB0ZXh0OiAnJywgcm93czogW10gfSk7XG5cdFx0XHR0aGlzLnRvZ2dsZUFtb3VudEVycm9yKCk7XG5cdFx0XHR0aGlzLmZpcmUoJ2NoYW5nZScsIFtdKTtcblx0XHRcdHRoaXMudXBkYXRlSGVpZ2h0KCk7XG5cdFx0XHR0aGlzLnJlZnMudGV4dGJveC5mb2N1cygpO1xuXHRcdH0sXG5cblx0XHRyZW1vdmUgKCkge1xuXHRcdFx0dGhpcy5maXJlKCdyZW1vdmUnLCB7IGlkOiB0aGlzLmdldCgpLmlkIH0pO1xuXHRcdFx0dGhpcy5yZXNldCgpO1xuXHRcdH0sXG5cblx0XHRvbnN1Ym1pdCAoZSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Y29uc3QgZGF0YSA9IHRoaXMuZ2V0KCk7XG5cdFx0XHRjb25zdCByb3dzID0gZGF0YS5yb3dzO1xuXHRcdFx0aWYgKCFyb3dzLmxlbmd0aCkge1xuXHRcdFx0XHR0aGlzLnRvZ2dsZUFtb3VudEVycm9yKCdQbGVhc2UgZW50ZXIgYW1vdW50IGFuZCBjYXRlZ29yeScpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5maXJlKCdlcnJvcicsICdQbGVhc2UgZW50ZXIgYW1vdW50IGFuZCBjYXRlZ29yeScpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gaXRlbSB3YXMgZWRpdGVkXG5cdFx0XHRpZiAoZGF0YS5pZCAmJiByb3dzLmxlbmd0aCA9PT0gMSkgcm93c1swXS5pZCA9IGRhdGEuaWQ7XG5cdFx0XHR0aGlzLmZpcmUoJ3N1Ym1pdCcsIHJvd3MpO1xuXHRcdFx0dGhpcy5yZXNldCgpO1xuXHRcdH0sXG5cblx0XHR0b2dnbGVBbW91bnRFcnJvciAobXNnID0gJycpIHtcblx0XHRcdHRoaXMucmVmcy50ZXh0Ym94LnNldEN1c3RvbVZhbGlkaXR5KG1zZyk7XG5cdFx0fSxcblxuXHRcdHVwZGF0ZUhlaWdodCAoKSB7XG5cdFx0XHRjb25zdCBub0xpbmVzID0gdGhpcy5yZWZzLnRleHRib3gudmFsdWUuc3BsaXQoJ1xcbicpLmxlbmd0aDtcblx0XHRcdHRoaXMucmVmcy50ZXh0Ym94LnN0eWxlLmhlaWdodCA9IGAke25vTGluZXMgKiAxLjF9ZW1gO1xuXHRcdH0sXG5cblx0XHRwYXJzZUFtb3VudCAoYW1vdW50KSB7XG5cdFx0XHQvKiBlc2xpbnQgbm8tZXZhbDogMCAqL1xuXHRcdFx0YW1vdW50ID0gKCcnICsgYW1vdW50KS5yZXBsYWNlKC9cXHMvZywgJycpO1xuXHRcdFx0aWYgKCEoL15bK1xcLVxcXFwqLygpXFxkLl0rJC9pKS50ZXN0KGFtb3VudCkpIHJldHVybiAwO1xuXHRcdFx0aWYgKCgvWytcXC1cXFxcKi8uXSsvaSkudGVzdChhbW91bnQpKSB7XG5cdFx0XHRcdHRyeSB7IGFtb3VudCA9IGV2YWwoYW1vdW50KTsgfVxuXHRcdFx0XHRjYXRjaCAoZSkgeyBhbW91bnQgPSAwOyB9XG5cdFx0XHR9XG5cdFx0XHRsZXQgbnVtID0gcGFyc2VGbG9hdChhbW91bnQpO1xuXHRcdFx0aWYgKG51bSA9PT0gSW5maW5pdHkgfHwgaXNOYU4obnVtKSB8fCBudW0gPCAwKSBudW0gPSAnZXJyb3InO1xuXHRcdFx0cmV0dXJuIG51bTtcblx0XHR9LFxuXG5cdFx0Z2V0R3JvdXAgKHZhbHVlKSB7XG5cdFx0XHR2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuXHRcdFx0aWYgKCF2YWx1ZSkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgZ3JvdXBzID0gdGhpcy5nZXQoKS5fZ3JvdXBzO1xuXHRcdFx0Zm9yIChjb25zdCBnIG9mIGdyb3Vwcykge1xuXHRcdFx0XHRpZiAoZy5zdHIuaW5kZXhPZih2YWx1ZSkgPiAtMSkgcmV0dXJuIGc7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fSxcblxuXHRcdHBhcnNlV29yZCAodmFsdWUpIHtcblx0XHRcdGlmICh2YWx1ZS5tYXRjaCgvXlxcZCskLykpIHJldHVybiB7IHR5cGU6ICdhbW91bnQnLCB2YWx1ZTogcGFyc2VGbG9hdCh2YWx1ZSksIHNjb3JlOiA4IH07XG5cdFx0XHRpZiAodmFsdWUubWF0Y2goL15cXGQrXFwuXFxkKyQvKSkgcmV0dXJuIHsgdHlwZTogJ2Ftb3VudCcsIHZhbHVlOiBwYXJzZUZsb2F0KHZhbHVlKSwgc2NvcmU6IDkgfTtcblx0XHRcdGlmICh2YWx1ZS5tYXRjaCgvXltcXGRcXC4oKSstLypdKyQvKSkgcmV0dXJuIHsgdHlwZTogJ2Ftb3VudCcsIHZhbHVlOiB0aGlzLnBhcnNlQW1vdW50KHZhbHVlKSwgc2NvcmU6IDEwIH07XG5cblx0XHRcdGNvbnN0IGdyb3VwID0gdGhpcy5nZXRHcm91cCh2YWx1ZSk7XG5cdFx0XHRpZiAoZ3JvdXAgJiYgZ3JvdXAuaWQpIHJldHVybiB7IHR5cGU6ICdncm91cCcsIHZhbHVlLCBncm91cCwgc2NvcmU6IDEwIH07XG5cblx0XHRcdHJldHVybiB7IHR5cGU6ICdkZXNjcmlwdGlvbicsIHZhbHVlLCBzY29yZTogMTAgfTtcblx0XHR9LFxuXG5cdFx0cGFyc2VSb3cgKHJvdykge1xuXHRcdFx0cm93ID0gcm93LnJlcGxhY2UoL1xccysoWystLyooKV0pXFxzKy9nLCAnJDEnKTsgIC8vIHJlbW92ZSBzcGFjZXMgYXJvdW5kIG9wc1xuXHRcdFx0Y29uc3Qgd29yZHMgPSByb3cuc3BsaXQoJyAnKS5tYXAodyA9PiB0aGlzLnBhcnNlV29yZCh3KSkuc29ydCgoYSwgYikgPT4gYi5zY29yZSAtIGEuc2NvcmUpO1xuXG5cdFx0XHRjb25zdCBhbW91bnRJZHggPSB3b3Jkcy5maW5kSW5kZXgodyA9PiB3LnR5cGUgPT09ICdhbW91bnQnKTtcblx0XHRcdGNvbnN0IGFtb3VudCA9IGFtb3VudElkeCA+IC0xID8gd29yZHMuc3BsaWNlKGFtb3VudElkeCwgMSlbMF0udmFsdWUgOiAnJztcblxuXHRcdFx0Y29uc3QgZ3JvdXBJZHggPSB3b3Jkcy5maW5kSW5kZXgodyA9PiB3LnR5cGUgPT09ICdncm91cCcpO1xuXHRcdFx0Y29uc3QgZ3JvdXAgPSBncm91cElkeCA+IC0xID8gd29yZHMuc3BsaWNlKGdyb3VwSWR4LCAxKVswXS5ncm91cCA6IHt9O1xuXG5cdFx0XHRjb25zdCBkZXNjcmlwdGlvbiA9IHdvcmRzLm1hcCh3ID0+IHcudmFsdWUpLmpvaW4oJyAnKS50cmltKCk7XG5cdFx0XHRyZXR1cm4ge2Ftb3VudCwgZGVzY3JpcHRpb24sIGdyb3VwLCBncm91cF9pZDogZ3JvdXAuaWQgfTtcblx0XHR9LFxuXG5cdFx0cGFyc2VFbnRyeVRleHQgKHZhbCkge1xuXHRcdFx0Y29uc3Qgcm93cyA9IHZhbFxuXHRcdFx0XHQuc3BsaXQoJ1xcbicpXG5cdFx0XHRcdC5tYXAocm93ID0+IHRoaXMucGFyc2VSb3cocm93KSlcblx0XHRcdFx0LmZpbHRlcihyb3cgPT4gcm93LmFtb3VudCAhPT0gJycgJiYgcm93Lmdyb3VwX2lkKTtcblxuXHRcdFx0aWYgKCFyb3dzLmxlbmd0aCkgcmV0dXJuO1xuXG5cdFx0XHRjb25zdCBkYXRlID0gdGhpcy5nZXQoKS5kYXRlO1xuXHRcdFx0cm93cy5mb3JFYWNoKHIgPT4gKHIuZGF0ZSA9IGRhdGUpKTtcblxuXHRcdFx0bGV0IHN1bSA9IDA7XG5cdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHN1bSArPSByb3dzW2ldLmFtb3VudDtcblx0XHRcdHJvd3NbMF0uYW1vdW50IC09IHN1bTtcblx0XHRcdHRoaXMuc2V0KHsgcm93cyB9KTtcblx0XHRcdHRoaXMuZmlyZSgnY2hhbmdlJywgcm93cyk7XG5cdFx0fSxcblx0fVxufTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2Zvcm0vaW5kZXguaHRtbCIsIjxkaXYgY2xhc3M9XCJ0YWJsZVwiIHJlZjp0YWJsZT5cblx0eyNpZiBkYXRhICYmIGRhdGEubGVuZ3RofVxuXHRcdDx0YWJsZT5cblx0XHQ8dGhlYWQ+PHRyPlxuXHRcdFx0PHRkIGNsYXNzPVwiZGF0ZVwiPkRhdGU8L3RkPlxuXHRcdFx0PHRkIGNsYXNzPVwiZGVzY1wiPkRlc2NyaXB0aW9uPC90ZD5cblx0XHRcdDx0ZCBjbGFzcz1cImFtb3VudFwiPkFtb3VudDwvdGQ+XG5cdFx0PC90cj48L3RoZWFkPlxuXHRcdDx0Ym9keT5cblx0XHRcdHsjaWYgZmlsdGVyZWREYXRhICYmIGZpbHRlcmVkRGF0YS5sZW5ndGh9XG5cdFx0XHR7I2VhY2ggZmlsdGVyZWREYXRhIGFzIGl0ZW0sIGlkeH1cblx0XHRcdFx0PHRyIG9uOmNsaWNrPVwib25Sb3dDbGljayhpdGVtKVwiPlxuXHRcdFx0XHRcdDx0ZCBjbGFzcz1cImRhdGVcIj57aXRlbS5kYXRlLnN1YnN0cigwLCA3KX08L3RkPlxuXHRcdFx0XHRcdDx0ZCBjbGFzcz1cImRlc2NcIj57Z2V0RGVzY3JpcHRpb24oaXRlbSl9PC90ZD5cblx0XHRcdFx0XHQ8dGQgY2xhc3M9XCJhbW91bnRcIj57Zm9ybWF0TnVtYmVyKGl0ZW0uYW1vdW50KX08L3RkPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0ey9lYWNofVxuXHRcdFx0XHQ8dHIgY2xhc3M9XCJyb3ctZmlsbGVyXCI+PHRkIGNvbHNwYW49XCIzXCI+PC90ZD48L3RyPlxuXHRcdFx0ezplbHNlfVxuXHRcdFx0XHQ8dHIgY2xhc3M9XCJlbXB0eS1yb3dcIj5cblx0XHRcdFx0XHQ8dGQgY29sc3Bhbj1cIjNcIj5ObyByZXN1bHRzPC90ZD5cblx0XHRcdFx0PC90cj5cblx0XHRcdHsvaWZ9XG5cdFx0PC90Ym9keT5cblx0XHQ8dGZvb3Q+PHRyPlxuXHRcdFx0PHRkIGNvbHNwYW49XCIyXCIgY2xhc3M9XCJ0YWJsZS1maWx0ZXItY2VsbFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGFibGUtZmlsdGVyLWNlbGwtaW5uZXJcIj5cblx0XHRcdFx0XHQ8aSBjbGFzcz1cImlvbi1tZC1zZWFyY2hcIj48L2k+XG5cdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwidGFibGUtZmlsdGVyXCIgdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiRmlsdGVyXCJcblx0XHRcdFx0XHRiaW5kOnZhbHVlPVwiZmlsdGVyXCJcblx0XHRcdFx0XHRvbjprZXlkb3duPVwib25GaWx0ZXJLZXlEb3duKGV2ZW50KVwiPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvdGQ+XG5cdFx0XHQ8dGQgY2xhc3M9XCJhbW91bnRcIj57Zm9ybWF0TnVtYmVyKHRvdGFsKX08L3RkPlxuXHRcdDwvdHI+PC90Zm9vdD5cblx0XHQ8L3RhYmxlPlxuXHR7L2lmfVxuPC9kaXY+XG5cblxuPHNjcmlwdD5cblxuZnVuY3Rpb24gZm9ybWF0TnVtYmVyIChudW0pIHtcblx0bnVtID0gTWF0aC5yb3VuZCgwICsgbnVtICogMTAwKSAvIDEwMDtcblx0cmV0dXJuIG51bS50b0xvY2FsZVN0cmluZygnZW4tR0InLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhdGEgKCkge1xuXHRcdHJldHVybiB7IGRhdGE6IFtdLCBmaWx0ZXI6ICcnIH07XG5cdH0sXG5cdGhlbHBlcnM6IHtcblx0XHRmb3JtYXROdW1iZXIsXG5cdFx0Z2V0RGVzY3JpcHRpb24gKGl0ZW0pIHtcblx0XHRcdGNvbnN0IGRlc2MgPSBbXTtcblx0XHRcdGlmIChpdGVtLmdyb3VwLm5hbWUpIGRlc2MucHVzaChpdGVtLmdyb3VwLm5hbWUpO1xuXHRcdFx0aWYgKGl0ZW0uZGVzY3JpcHRpb24pIGRlc2MucHVzaChpdGVtLmRlc2NyaXB0aW9uKTtcblx0XHRcdHJldHVybiBkZXNjLmpvaW4oJyAtICcpO1xuXHRcdH1cblx0fSxcblx0Y29tcHV0ZWQ6IHtcblx0XHRmaWx0ZXJlZERhdGEgKHtkYXRhLCBmaWx0ZXJ9KSB7XG5cdFx0XHRpZiAoIWZpbHRlcikgcmV0dXJuIGRhdGE7XG5cdFx0XHRmaWx0ZXIgPSBmaWx0ZXIudG9Mb3dlckNhc2UoKTtcblx0XHRcdHJldHVybiBkYXRhLmZpbHRlcihpdGVtID0+IHtcblx0XHRcdFx0bGV0IHMgPSBpdGVtLmRlc2NyaXB0aW9uICsgaXRlbS5hbW91bnQgKyBpdGVtLmRhdGU7XG5cdFx0XHRcdGlmIChpdGVtLmdyb3VwKSB7XG5cdFx0XHRcdFx0cyArPSAoaXRlbS5ncm91cC5uYW1lIHx8ICcnKTtcblx0XHRcdFx0XHRpZiAoaXRlbS5ncm91cC5jYXRlZ29yeSkgcyArPSAoaXRlbS5ncm91cC5jYXRlZ29yeS5uYW1lIHx8ICcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gKHMudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlcikgPiAtMSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdHRvdGFsICh7ZmlsdGVyZWREYXRhfSkgeyByZXR1cm4gZmlsdGVyZWREYXRhLnJlZHVjZSgocCwgYykgPT4gcCArIGMuYW1vdW50LCAwKTsgfVxuXHR9LFxuXHRvbmNyZWF0ZSAoKSB7XG5cdH0sXG5cblx0bWV0aG9kczoge1xuXHRcdG9uRmlsdGVyS2V5RG93biAoZSkge1xuXHRcdFx0aWYgKGUua2V5ID09PSAnRXNjYXBlJykgdGhpcy5zZXQoeyBmaWx0ZXI6ICcnIH0pO1xuXHRcdH0sXG5cdFx0b25Sb3dDbGljayAoaXRlbSkge1xuXHRcdFx0dGhpcy5maXJlKCdjbGljaycsIGl0ZW0pO1xuXHRcdH1cblx0fVxufTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3RhYmxlL2luZGV4Lmh0bWwiLCJmdW5jdGlvbiByZXEgKHVybCwgbWV0aG9kID0gJ0dFVCcsIHBhcmFtcykge1xuXHRjb25zdCBvcHRzID0ge1xuXHRcdG1ldGhvZDogbWV0aG9kLFxuXHRcdGhlYWRlcnM6IHsgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuXHRcdGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG5cdH07XG5cdGlmIChwYXJhbXMpIG9wdHMuYm9keSA9IEpTT04uc3RyaW5naWZ5KHBhcmFtcyk7XG5cdHJldHVybiBmZXRjaChgYXBpLyR7dXJsfWAsIG9wdHMpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xufVxuXG5jb25zdCBnZXQgPSB1cmwgPT4gcmVxKHVybCk7XG5jb25zdCBwb3N0ID0gKHVybCwgcGFyYW1zKSA9PiByZXEodXJsLCAnUE9TVCcsIHBhcmFtcyk7XG5jb25zdCBwdXQgPSAodXJsLCBwYXJhbXMpID0+IHJlcSh1cmwsICdQVVQnLCBwYXJhbXMpO1xuLy8gY29uc3QgZGVsID0gKHVybCwgcGFyYW1zKSA9PiByZXEodXJsLCAnREVMRVRFJywgcGFyYW1zKTtcblxuXG5jb25zdCBDYXRlZ29yaWVzID0ge1xuXHRnZXQ6ICgpID0+IGdldCgnY2F0ZWdvcmllcycpLFxufTtcblxuY29uc3QgR3JvdXBzID0ge1xuXHRnZXQ6ICgpID0+IGdldCgnZ3JvdXBzJyksXG59O1xuXG5jb25zdCBFeHBlbnNlcyA9IHtcblx0Z2V0OiAoZGF0ZSA9ICcnKSA9PiBnZXQoYGVudHJpZXM/ZGF0ZT0ke2RhdGV9YCksXG5cdHNhdmU6IGRhdGEgPT4ge1xuXHRcdGlmIChkYXRhLmxlbmd0aCA9PT0gMSAmJiBkYXRhWzBdLmlkKSByZXR1cm4gcHV0KCdlbnRyaWVzJywgZGF0YSk7XG5cdFx0cmV0dXJuIHBvc3QoJ2VudHJpZXMnLCBkYXRhKTtcblx0fVxufTtcblxuXG5leHBvcnQge1xuXHRDYXRlZ29yaWVzLFxuXHRHcm91cHMsXG5cdEV4cGVuc2VzLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9kYXRhL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==