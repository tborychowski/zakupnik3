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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return init; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return proto; });
/* unused harmony export protoDev */
/* unused harmony export handlePromise */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appendNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return insertNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return detachNode; });
/* unused harmony export detachBetween */
/* unused harmony export detachBefore */
/* unused harmony export detachAfter */
/* unused harmony export reinsertBetween */
/* unused harmony export reinsertChildren */
/* unused harmony export reinsertAfter */
/* unused harmony export reinsertBefore */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return destroyEach; });
/* unused harmony export createFragment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return createElement; });
/* unused harmony export createSvgElement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return createText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return createComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return removeListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return setAttribute; });
/* unused harmony export setAttributes */
/* unused harmony export removeAttribute */
/* unused harmony export setXlinkAttribute */
/* unused harmony export getBindingGroupValue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return toNumber; });
/* unused harmony export timeRangesToArray */
/* unused harmony export children */
/* unused harmony export claimElement */
/* unused harmony export claimText */
/* unused harmony export setInputType */
/* unused harmony export setStyle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return selectOption; });
/* unused harmony export selectOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return selectValue; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return noop; });
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
		// console.log('form changed', data);
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
			div = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("div");
			yearmonthpicker._fragment.c();
			text = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])("\n\t");
			form._fragment.c();
			text_2 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])("\n");
			table._fragment.c();
			div.className = "form-box";
		},

		m(target, anchor) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["l" /* insertNode */])(div, target, anchor);
			yearmonthpicker._mount(div, null);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text, div);
			form._mount(div, null);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["l" /* insertNode */])(text_2, target, anchor);
			table._mount(target, anchor);
		},

		p: __WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["m" /* noop */],

		d(detach) {
			if (detach) {
				Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["j" /* detachNode */])(div);
			}

			yearmonthpicker.destroy();
			if (component.refs.picker === yearmonthpicker) component.refs.picker = null;
			form.destroy();
			if (component.refs.form === form) component.refs.form = null;
			if (detach) {
				Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["j" /* detachNode */])(text_2);
			}

			table.destroy(detach);
			if (component.refs.table === table) component.refs.table = null;
		}
	};
}

function Index(options) {
	Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["k" /* init */])(this, options);
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

Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(Index.prototype, __WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* proto */]);
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
			div = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("div");
			button = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("button");
			button.innerHTML = "<i class=\"ion-ios-arrow-back\"></i>";
			text = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])("\n\n\t");
			span = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("span");
			text_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])(text_1_value);
			text_2 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])(" ");
			text_3 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])(ctx.year);
			text_4 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])("\n\n\t");
			button_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("button");
			button_1.innerHTML = "<i class=\"ion-ios-arrow-forward\"></i>";
			text_5 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])("\n\n\t");
			button_2 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("button");
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
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["l" /* insertNode */])(div, target, anchor);
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
				Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["j" /* detachNode */])(div);
			}

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* removeListener */])(button, "keydown", keydown_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* removeListener */])(button, "keyup", keyup_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* removeListener */])(button, "mousedown", mousedown_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* removeListener */])(button, "mouseout", mouseout_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* removeListener */])(button, "mouseup", mouseup_handler);
			if (component.refs.leftButton === button) component.refs.leftButton = null;
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* removeListener */])(button_1, "keydown", keydown_handler_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* removeListener */])(button_1, "keyup", keyup_handler_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* removeListener */])(button_1, "mousedown", mousedown_handler_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* removeListener */])(button_1, "mouseout", mouseout_handler_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* removeListener */])(button_1, "mouseup", mouseup_handler_1);
			if (component.refs.rightButton === button_1) component.refs.rightButton = null;
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* removeListener */])(button_2, "click", click_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* removeListener */])(div, "wheel", wheel_handler);
		}
	};
}

function Index(options) {
	Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["k" /* init */])(this, options);
	this.refs = {};
	this._state = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(data(), options.data);
	this._recompute({ month: 1, year: 1, current: 1 }, this._state);

	this._fragment = create_main_fragment(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);
	}
}

Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(Index.prototype, __WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* proto */]);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_js__ = __webpack_require__(5);
/* client/form/index.html generated by Svelte v2.5.0 */



function matches (categories, txt) {
	txt = txt.toLowerCase();
	for (const c of categories) {
		for (const g of c.groups) {
			if (g.keywords && g.keywords.toLowerCase().indexOf(txt) > -1) return g.id;
			if (g.name.toLowerCase().indexOf(txt) > -1) return g.id;
		}
	}
	return;
}


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
	matchGroup (categories, row, el) {
		if (!categories || !categories.length) return;
		const id = row.description ? matches(categories, row.description) : categories[0].groups[0].id;
		if (id) el.parentNode.querySelector('.category').value = id;
	},
	getData () {
		const date = this.get().date || new Date().toISOString().substr(0, 7);
		const entries = __WEBPACK_IMPORTED_MODULE_1__util_js__["a" /* default */].deepCopyArray(this.get().rows)
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
		const repeater = this.get().repeat;
		return __WEBPACK_IMPORTED_MODULE_1__util_js__["a" /* default */].repeatEntries(entries, repeater);
	},

	split () {
		const rows = this.get().rows;
		rows.push({id: '', description: rows[0].description, amount: ''});
		this.set({ rows });
	},

	unsplit (idx) {
		const rows = this.get().rows;
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
		this.fire('remove', { id: this.get().rows[0].id });
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

function create_main_fragment(component, ctx) {
	var form, div, text_1, div_1, label, text_3, input, input_updating = false, text_4, label_1, text_7, div_2, button, text_9, button_1, text_11, div_3, text_12, button_2, text_14, button_3, text_16, button_4, form_class_value;

	var each_value = ctx.rows;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(component, get_each_context(ctx, each_value, i));
	}

	function input_input_handler() {
		input_updating = true;
		component.set({ repeat: Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["s" /* toNumber */])(input.value) });
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

	function input_handler_1(event) {
		component.oninput(event);
	}

	return {
		c() {
			form = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("form");
			div = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("div");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			text_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])("\n\t");
			div_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("div");
			label = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("label");
			label.textContent = "Repeat every month, for";
			text_3 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])("\n\t\t");
			input = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("input");
			text_4 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])("\n\t\t");
			label_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("label");
			label_1.textContent = "months";
			text_7 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])("\n\t");
			div_2 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("div");
			button = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("button");
			button.textContent = "Reset";
			text_9 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])("\n\t\t");
			button_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("button");
			button_1.textContent = "Remove";
			text_11 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])("\n\t\t");
			div_3 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("div");
			text_12 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])("\n\t\t");
			button_2 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("button");
			button_2.textContent = "Cancel";
			text_14 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])("\n\t\t");
			button_3 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("button");
			button_3.textContent = "Save";
			text_16 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])("\n\t\t");
			button_4 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("button");
			button_4.textContent = "Add";
			div.className = "subforms";
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(input, "input", input_input_handler);
			input.className = "repeater";
			input.min = "1";
			input.max = "12";
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["r" /* setAttribute */])(input, "type", "number");
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
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(form, "input", input_handler_1);
			form.className = form_class_value = "form " + (ctx.inEdit ? 'edit' : '');
		},

		m(target, anchor) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["l" /* insertNode */])(form, target, anchor);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(div, form);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_1, form);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(div_1, form);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(label, div_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_3, div_1);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(input, div_1);

			input.value = ctx.repeat;

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

		p(changed, ctx) {
			if (changed.rows || changed.categories) {
				each_value = ctx.rows;

				for (var i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block(component, child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value.length;
			}

			if (!input_updating) input.value = ctx.repeat;
			if ((changed.inEdit) && form_class_value !== (form_class_value = "form " + (ctx.inEdit ? 'edit' : ''))) {
				form.className = form_class_value;
			}
		},

		d(detach) {
			if (detach) {
				Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["j" /* detachNode */])(form);
			}

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["i" /* destroyEach */])(each_blocks, detach);

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* removeListener */])(input, "input", input_input_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* removeListener */])(button, "click", click_handler_2);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* removeListener */])(button_1, "click", click_handler_3);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* removeListener */])(button_2, "click", click_handler_4);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* removeListener */])(form, "submit", submit_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* removeListener */])(form, "input", input_handler_1);
			if (component.refs.form === form) component.refs.form = null;
		}
	};
}

// (3:2) {#each rows as row, idx}
function create_each_block(component, ctx) {
	var div, input, input_updating = false, text, input_1, input_1_updating = false, text_1, div_1, select, select_updating = false, text_3, input_2, input_2_updating = false, text_4;

	function input_input_handler() {
		input_updating = true;
		ctx.each_value[ctx.idx].id = input.value;
		component.set({ rows: ctx.rows, categories: ctx.categories });
		input_updating = false;
	}

	function input_1_input_handler() {
		input_1_updating = true;
		ctx.each_value[ctx.idx].description = input_1.value;
		component.set({ rows: ctx.rows, categories: ctx.categories });
		input_1_updating = false;
	}

	var each_value_1 = ctx.categories;

	var each_blocks = [];

	for (var i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(component, get_each_context_1(ctx, each_value_1, i));
	}

	function select_change_handler() {
		select_updating = true;
		ctx.each_value[ctx.idx].group_id = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["q" /* selectValue */])(select);
		component.set({ rows: ctx.rows, categories: ctx.categories });
		select_updating = false;
	}

	function input_2_input_handler() {
		input_2_updating = true;
		ctx.each_value[ctx.idx].amount = input_2.value;
		component.set({ rows: ctx.rows, categories: ctx.categories });
		input_2_updating = false;
	}

	function select_block_type(ctx) {
		if (ctx.idx === 0) return create_if_block_1;
		return create_if_block_2;
	}

	var current_block_type = select_block_type(ctx);
	var if_block = current_block_type(component, ctx);

	return {
		c() {
			div = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("div");
			input = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("input");
			text = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])("\n\t\t\t");
			input_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("input");
			text_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])("\n\t\t\t");
			div_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("div");
			select = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("select");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			text_3 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])("\n\t\t\t");
			input_2 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("input");
			text_4 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])("\n\n\t\t\t");
			if_block.c();
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(input, "input", input_input_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["r" /* setAttribute */])(input, "type", "hidden");

			input_1._svelte = { component, ctx };

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(input_1, "input", input_1_input_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(input_1, "input", input_handler);
			input_1.className = "description";
			input_1.placeholder = "description";
			input_1.autofocus = "autofocus";
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(select, "change", select_change_handler);
			if (!('row' in ctx)) component.root._beforecreate.push(select_change_handler);
			select.className = "select category";
			div_1.className = "select-wrap";

			input_2._svelte = { component, ctx };

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(input_2, "input", input_2_input_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(input_2, "keydown", keydown_handler);
			input_2.className = "amount";
			input_2.placeholder = "0.00";
			div.className = "form-row";
		},

		m(target, anchor) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["l" /* insertNode */])(div, target, anchor);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(input, div);

			input.value = ctx.row.id;

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text, div);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(input_1, div);

			input_1.value = ctx.row.description;

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_1, div);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(div_1, div);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(select, div_1);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(select, null);
			}

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["p" /* selectOption */])(select, ctx.row.group_id)

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_3, div);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(input_2, div);

			input_2.value = ctx.row.amount;

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text_4, div);
			if_block.m(div, null);
		},

		p(changed, _ctx) {
			ctx = _ctx;
			if (!input_updating) input.value = ctx.row.id;
			input_1._svelte.ctx = ctx;
			if (!input_1_updating) input_1.value = ctx.row.description;

			if (changed.categories) {
				each_value_1 = ctx.categories;

				for (var i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block_1(component, child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(select, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value_1.length;
			}

			if (!select_updating) Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["p" /* selectOption */])(select, ctx.row.group_id)
			input_2._svelte.ctx = ctx;
			if (!input_2_updating) input_2.value = ctx.row.amount;

			if (current_block_type !== (current_block_type = select_block_type(ctx))) {
				if_block.d(1);
				if_block = current_block_type(component, ctx);
				if_block.c();
				if_block.m(div, null);
			}
		},

		d(detach) {
			if (detach) {
				Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["j" /* detachNode */])(div);
			}

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* removeListener */])(input, "input", input_input_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* removeListener */])(input_1, "input", input_1_input_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* removeListener */])(input_1, "input", input_handler);

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["i" /* destroyEach */])(each_blocks, detach);

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* removeListener */])(select, "change", select_change_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* removeListener */])(input_2, "input", input_2_input_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* removeListener */])(input_2, "keydown", keydown_handler);
			if_block.d();
		}
	};
}

// (12:5) {#each categories as cat}
function create_each_block_1(component, ctx) {
	var optgroup, optgroup_label_value;

	var if_block = (ctx.cat.groups) && create_if_block(component, ctx);

	return {
		c() {
			optgroup = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("optgroup");
			if (if_block) if_block.c();
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["r" /* setAttribute */])(optgroup, "label", optgroup_label_value = ctx.cat.name);
		},

		m(target, anchor) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["l" /* insertNode */])(optgroup, target, anchor);
			if (if_block) if_block.m(optgroup, null);
		},

		p(changed, ctx) {
			if (ctx.cat.groups) {
				if (if_block) {
					if_block.p(changed, ctx);
				} else {
					if_block = create_if_block(component, ctx);
					if_block.c();
					if_block.m(optgroup, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if ((changed.categories) && optgroup_label_value !== (optgroup_label_value = ctx.cat.name)) {
				Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["r" /* setAttribute */])(optgroup, "label", optgroup_label_value);
			}
		},

		d(detach) {
			if (detach) {
				Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["j" /* detachNode */])(optgroup);
			}

			if (if_block) if_block.d();
		}
	};
}

// (15:6) {#each cat.groups as group}
function create_each_block_2(component, ctx) {
	var option, text_value = ctx.group.name, text, option_value_value;

	return {
		c() {
			option = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("option");
			text = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])(text_value);
			option.__value = option_value_value = ctx.group.id;
			option.value = option.__value;
		},

		m(target, anchor) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["l" /* insertNode */])(option, target, anchor);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["b" /* appendNode */])(text, option);
		},

		p(changed, ctx) {
			if ((changed.categories) && text_value !== (text_value = ctx.group.name)) {
				text.data = text_value;
			}

			if ((changed.categories) && option_value_value !== (option_value_value = ctx.group.id)) {
				option.__value = option_value_value;
			}

			option.value = option.__value;
		},

		d(detach) {
			if (detach) {
				Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["j" /* detachNode */])(option);
			}
		}
	};
}

// (14:6) {#if cat.groups}
function create_if_block(component, ctx) {
	var each_anchor;

	var each_value_2 = ctx.cat.groups;

	var each_blocks = [];

	for (var i = 0; i < each_value_2.length; i += 1) {
		each_blocks[i] = create_each_block_2(component, get_each_context_2(ctx, each_value_2, i));
	}

	return {
		c() {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_anchor = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createComment */])();
		},

		m(target, anchor) {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["l" /* insertNode */])(each_anchor, target, anchor);
		},

		p(changed, ctx) {
			if (changed.categories) {
				each_value_2 = ctx.cat.groups;

				for (var i = 0; i < each_value_2.length; i += 1) {
					const child_ctx = get_each_context_2(ctx, each_value_2, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block_2(component, child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_anchor.parentNode, each_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value_2.length;
			}
		},

		d(detach) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["i" /* destroyEach */])(each_blocks, detach);

			if (detach) {
				Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["j" /* detachNode */])(each_anchor);
			}
		}
	};
}

// (25:3) {#if idx === 0}
function create_if_block_1(component, ctx) {
	var button;

	return {
		c() {
			button = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("button");
			button._svelte = { component };

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(button, "click", click_handler);
			button.type = "button";
			button.title = "Split";
			button.className = "btn btn-split ion-md-swap";
		},

		m(target, anchor) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["l" /* insertNode */])(button, target, anchor);
		},

		d(detach) {
			if (detach) {
				Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["j" /* detachNode */])(button);
			}

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* removeListener */])(button, "click", click_handler);
		}
	};
}

// (27:3) {:else}
function create_if_block_2(component, ctx) {
	var button;

	return {
		c() {
			button = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("button");
			button._svelte = { component, ctx };

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(button, "click", click_handler_1);
			button.type = "button";
			button.title = "Remove";
			button.className = "btn btn-unsplit ion-md-close";
		},

		m(target, anchor) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["l" /* insertNode */])(button, target, anchor);
		},

		d(detach) {
			if (detach) {
				Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["j" /* detachNode */])(button);
			}

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* removeListener */])(button, "click", click_handler_1);
		}
	};
}

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.row = list[i];
	child_ctx.each_value = list;
	child_ctx.idx = i;
	return child_ctx;
}

function input_handler(event) {
	const { component, ctx } = this._svelte;

	component.matchGroup(ctx.categories, ctx.row, this);
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.cat = list[i];
	child_ctx.each_value_1 = list;
	child_ctx.cat_index = i;
	return child_ctx;
}

function get_each_context_2(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.group = list[i];
	child_ctx.each_value_2 = list;
	child_ctx.group_index = i;
	return child_ctx;
}

function keydown_handler(event) {
	const { component } = this._svelte;

	component.onkeydown(event);
}

function click_handler(event) {
	const { component } = this._svelte;

	component.split();
}

function click_handler_1(event) {
	const { component, ctx } = this._svelte;

	component.unsplit(ctx.idx);
}

function Index(options) {
	Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["k" /* init */])(this, options);
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

		Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["e" /* callAll */])(this._beforecreate);
	}
}

Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(Index.prototype, __WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* proto */]);
Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(Index.prototype, methods);
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
			div = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("div");
			if (if_block) if_block.c();
			div.className = "table";
		},

		m(target, anchor) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["l" /* insertNode */])(div, target, anchor);
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
				Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["j" /* detachNode */])(div);
			}

			if (if_block) if_block.d();
			if (component.refs.table === div) component.refs.table = null;
		}
	};
}

// (11:3) {#each filteredData as item, idx}
function create_each_block(component, ctx) {
	var tr, td, text_value = ctx.item.date.substr(0, 7), text, text_1, td_1, text_2_value = ctx.item.group.name, text_2, text_3, text_4_value = ctx.item.description, text_4, text_5, td_2, text_6_value = formatNumber(ctx.item.amount), text_6;

	return {
		c() {
			tr = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("tr");
			td = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("td");
			text = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])(text_value);
			text_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])("\n\t\t\t\t\t");
			td_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("td");
			text_2 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])(text_2_value);
			text_3 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])(" - ");
			text_4 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])(text_4_value);
			text_5 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])("\n\t\t\t\t\t");
			td_2 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("td");
			text_6 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])(text_6_value);
			td_1.className = "desc";
			td_2.className = "amount";

			tr._svelte = { component, ctx };

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(tr, "click", click_handler);
		},

		m(target, anchor) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["l" /* insertNode */])(tr, target, anchor);
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

		p(changed, ctx) {
			if ((changed.filteredData) && text_value !== (text_value = ctx.item.date.substr(0, 7))) {
				text.data = text_value;
			}

			if ((changed.filteredData) && text_2_value !== (text_2_value = ctx.item.group.name)) {
				text_2.data = text_2_value;
			}

			if ((changed.filteredData) && text_4_value !== (text_4_value = ctx.item.description)) {
				text_4.data = text_4_value;
			}

			if ((changed.filteredData) && text_6_value !== (text_6_value = formatNumber(ctx.item.amount))) {
				text_6.data = text_6_value;
			}

			tr._svelte.ctx = ctx;
		},

		d(detach) {
			if (detach) {
				Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["j" /* detachNode */])(tr);
			}

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* removeListener */])(tr, "click", click_handler);
		}
	};
}

// (10:3) {#if filteredData && filteredData.length}
function create_if_block_1(component, ctx) {
	var each_anchor;

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

			each_anchor = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["f" /* createComment */])();
		},

		m(target, anchor) {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["l" /* insertNode */])(each_anchor, target, anchor);
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
						each_blocks[i].m(each_anchor.parentNode, each_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value.length;
			}
		},

		d(detach) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["i" /* destroyEach */])(each_blocks, detach);

			if (detach) {
				Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["j" /* detachNode */])(each_anchor);
			}
		}
	};
}

// (18:3) {:else}
function create_if_block_2(component, ctx) {
	var tr;

	return {
		c() {
			tr = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("tr");
			tr.innerHTML = "<td colspan=\"3\">No results</td>";
			tr.className = "empty-row";
		},

		m(target, anchor) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["l" /* insertNode */])(tr, target, anchor);
		},

		p: __WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["m" /* noop */],

		d(detach) {
			if (detach) {
				Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["j" /* detachNode */])(tr);
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
			table = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("table");
			thead = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("thead");
			thead.innerHTML = "<tr><td class=\"date\">Date</td>\n\t\t\t<td class=\"desc\">Description</td>\n\t\t\t<td class=\"amount\">Amount</td></tr>";
			text_6 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])("\n\t\t");
			tbody = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("tbody");
			if_block.c();
			text_8 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])("\n\t\t");
			tfoot = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("tfoot");
			tr_1 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("tr");
			td_3 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("td");
			div = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("div");
			i = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("i");
			text_9 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])("\n\t\t\t\t\t");
			input = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("input");
			text_12 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])("\n\t\t\t");
			td_4 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["g" /* createElement */])("td");
			text_13 = Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["h" /* createText */])(text_13_value);
			i.className = "ion-md-search";
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(input, "input", input_input_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["a" /* addListener */])(input, "keydown", keydown_handler);
			input.className = "table-filter";
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["r" /* setAttribute */])(input, "type", "search");
			input.placeholder = "Filter";
			div.className = "table-filter-cell-inner";
			td_3.colSpan = "2";
			td_3.className = "table-filter-cell";
			td_4.className = "amount";
		},

		m(target, anchor) {
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["l" /* insertNode */])(table, target, anchor);
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
				Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["j" /* detachNode */])(table);
			}

			if_block.d();
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* removeListener */])(input, "input", input_input_handler);
			Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["o" /* removeListener */])(input, "keydown", keydown_handler);
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
	Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["k" /* init */])(this, options);
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

Object(__WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["c" /* assign */])(Index.prototype, __WEBPACK_IMPORTED_MODULE_0_svelte_shared_js__["n" /* proto */]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWE4Mzk2ZDEwNjBhYTAxMTNjOTkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9hcHAvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9jbGllbnQveWVhci1tb250aC1waWNrZXIvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvZm9ybS9pbmRleC5odG1sIiwid2VicGFjazovLy8uL2NsaWVudC9mb3JtL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3RhYmxlL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2RhdGEvaW5kZXguanMiXSwibmFtZXMiOlsidGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyc2VBbW91bnQiLCJhbW91bnQiLCJyZXBsYWNlIiwidGVzdCIsImV2YWwiLCJlIiwibnVtIiwicGFyc2VGbG9hdCIsIkluZmluaXR5IiwiaXNOYU4iLCJnZXRTdHJEYXRlIiwieSIsIm0iLCJzdWJzdHIiLCJwYXJzZURhdGVTdHIiLCJkYXRlU3RyIiwieWVhciIsIm1vbnRoIiwic3BsaXQiLCJwYXJzZUludCIsInN0ciIsImRlZXBDb3B5QXJyYXkiLCJhcnIiLCJtYXAiLCJvIiwiT2JqZWN0IiwiYXNzaWduIiwiYWRkTW9udGhzVG9EYXRlIiwiZGF0ZSIsIm1vbnRoRGlmZiIsImRhdGVPYmoiLCJNYXRoIiwiZmxvb3IiLCJjbG9uZUVudHJpZXMiLCJlbnRyaWVzIiwiaXRlbSIsInJlcGVhdEVudHJpZXMiLCJyZXBlYXRlciIsIm9yaWdpbmFsRW50cmllcyIsImkiLCJuZXdSb3dzIiwiY29uY2F0IiwiaXNBbGxvd2VkS2V5IiwiYWxsb3dlZFJlZyIsImFsbG93ZWRLZXlzIiwiaW5kZXhPZiIsImtleSIsIm1ldGFLZXkiLCJjdHJsS2V5IiwibGVuZ3RoIiwicmVxIiwidXJsIiwibWV0aG9kIiwicGFyYW1zIiwib3B0cyIsImhlYWRlcnMiLCJjcmVkZW50aWFscyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImdldCIsInBvc3QiLCJwdXQiLCJDYXRlZ29yaWVzIiwiRXhwZW5zZXMiLCJzYXZlIiwiZGF0YSIsImlkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHVCQUF1QjtB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SSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRXRCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzNELENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzNELENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzNELENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3pELENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzdELENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzNELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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SyxDQUFDLENBQUM7QUFDakIsRUFBRSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDL0MsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztBQUMxQixFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU07QUFDakMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ3BDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDM0IsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ1osRUFBRTs7QUFFRixDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtBQUNaLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDakMsRUFBRSxLQUFLLElBQUksS0FBSyxDQUFDO0FBQ2pCLEVBQUUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRTtBQUMzQyxPQUFPLElBQUksS0FBSyxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7QUFDaEQsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDNUIsRUFBRTs7QUFFRixDQUFDLE1BQU0sQ0FBQyxHQUFHO0FBQ1gsRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDNUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFF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LFNBQUwsRUFBZ0JLLElBQWhCLENBQVA7QUFDQTtBQUxlLENBQWpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9wdWJsaWMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNWE4Mzk2ZDEwNjBhYTAxMTNjOTkiLCJmdW5jdGlvbiBub29wKCkge31cblxuZnVuY3Rpb24gYXNzaWduKHRhciwgc3JjKSB7XG5cdGZvciAodmFyIGsgaW4gc3JjKSB0YXJba10gPSBzcmNba107XG5cdHJldHVybiB0YXI7XG59XG5cbmZ1bmN0aW9uIGFzc2lnblRydWUodGFyLCBzcmMpIHtcblx0Zm9yICh2YXIgayBpbiBzcmMpIHRhcltrXSA9IDE7XG5cdHJldHVybiB0YXI7XG59XG5cbmZ1bmN0aW9uIGlzUHJvbWlzZSh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZE5vZGUobm9kZSwgdGFyZ2V0KSB7XG5cdHRhcmdldC5hcHBlbmRDaGlsZChub2RlKTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0Tm9kZShub2RlLCB0YXJnZXQsIGFuY2hvcikge1xuXHR0YXJnZXQuaW5zZXJ0QmVmb3JlKG5vZGUsIGFuY2hvcik7XG59XG5cbmZ1bmN0aW9uIGRldGFjaE5vZGUobm9kZSkge1xuXHRub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG59XG5cbmZ1bmN0aW9uIGRldGFjaEJldHdlZW4oYmVmb3JlLCBhZnRlcikge1xuXHR3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nICYmIGJlZm9yZS5uZXh0U2libGluZyAhPT0gYWZ0ZXIpIHtcblx0XHRiZWZvcmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiZWZvcmUubmV4dFNpYmxpbmcpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRldGFjaEJlZm9yZShhZnRlcikge1xuXHR3aGlsZSAoYWZ0ZXIucHJldmlvdXNTaWJsaW5nKSB7XG5cdFx0YWZ0ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhZnRlci5wcmV2aW91c1NpYmxpbmcpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRldGFjaEFmdGVyKGJlZm9yZSkge1xuXHR3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nKSB7XG5cdFx0YmVmb3JlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYmVmb3JlLm5leHRTaWJsaW5nKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZWluc2VydEJldHdlZW4oYmVmb3JlLCBhZnRlciwgdGFyZ2V0KSB7XG5cdHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcgJiYgYmVmb3JlLm5leHRTaWJsaW5nICE9PSBhZnRlcikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChiZWZvcmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiZWZvcmUubmV4dFNpYmxpbmcpKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZWluc2VydENoaWxkcmVuKHBhcmVudCwgdGFyZ2V0KSB7XG5cdHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkgdGFyZ2V0LmFwcGVuZENoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gcmVpbnNlcnRBZnRlcihiZWZvcmUsIHRhcmdldCkge1xuXHR3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nKSB0YXJnZXQuYXBwZW5kQ2hpbGQoYmVmb3JlLm5leHRTaWJsaW5nKTtcbn1cblxuZnVuY3Rpb24gcmVpbnNlcnRCZWZvcmUoYWZ0ZXIsIHRhcmdldCkge1xuXHR2YXIgcGFyZW50ID0gYWZ0ZXIucGFyZW50Tm9kZTtcblx0d2hpbGUgKHBhcmVudC5maXJzdENoaWxkICE9PSBhZnRlcikgdGFyZ2V0LmFwcGVuZENoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gZGVzdHJveUVhY2goaXRlcmF0aW9ucywgZGV0YWNoKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgaXRlcmF0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGlmIChpdGVyYXRpb25zW2ldKSBpdGVyYXRpb25zW2ldLmQoZGV0YWNoKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudCgpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChuYW1lKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdmdFbGVtZW50KG5hbWUpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBuYW1lKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dChkYXRhKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tbWVudCgpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpO1xufVxuXG5mdW5jdGlvbiBhZGRMaXN0ZW5lcihub2RlLCBldmVudCwgaGFuZGxlcikge1xuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIobm9kZSwgZXZlbnQsIGhhbmRsZXIpIHtcblx0bm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZShub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG5cdG5vZGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKG5vZGUsIGF0dHJpYnV0ZXMpIHtcblx0Zm9yICh2YXIga2V5IGluIGF0dHJpYnV0ZXMpIHtcblx0XHRpZiAoa2V5IGluIG5vZGUpIHtcblx0XHRcdG5vZGVba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGF0dHJpYnV0ZXNba2V5XSA9PT0gdW5kZWZpbmVkKSByZW1vdmVBdHRyaWJ1dGUobm9kZSwga2V5KTtcblx0XHRcdGVsc2Ugc2V0QXR0cmlidXRlKG5vZGUsIGtleSwgYXR0cmlidXRlc1trZXldKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKG5vZGUsIGF0dHJpYnV0ZSkge1xuXHRub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xufVxuXG5mdW5jdGlvbiBzZXRYbGlua0F0dHJpYnV0ZShub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG5cdG5vZGUuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCBhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gZ2V0QmluZGluZ0dyb3VwVmFsdWUoZ3JvdXApIHtcblx0dmFyIHZhbHVlID0gW107XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXAubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRpZiAoZ3JvdXBbaV0uY2hlY2tlZCkgdmFsdWUucHVzaChncm91cFtpXS5fX3ZhbHVlKTtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZSA9PT0gJycgPyB1bmRlZmluZWQgOiArdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHRpbWVSYW5nZXNUb0FycmF5KHJhbmdlcykge1xuXHR2YXIgYXJyYXkgPSBbXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCByYW5nZXMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRhcnJheS5wdXNoKHsgc3RhcnQ6IHJhbmdlcy5zdGFydChpKSwgZW5kOiByYW5nZXMuZW5kKGkpIH0pO1xuXHR9XG5cdHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gY2hpbGRyZW4gKGVsZW1lbnQpIHtcblx0cmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5jaGlsZE5vZGVzKTtcbn1cblxuZnVuY3Rpb24gY2xhaW1FbGVtZW50IChub2RlcywgbmFtZSwgYXR0cmlidXRlcywgc3ZnKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHR2YXIgbm9kZSA9IG5vZGVzW2ldO1xuXHRcdGlmIChub2RlLm5vZGVOYW1lID09PSBuYW1lKSB7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG5vZGUuYXR0cmlidXRlcy5sZW5ndGg7IGogKz0gMSkge1xuXHRcdFx0XHR2YXIgYXR0cmlidXRlID0gbm9kZS5hdHRyaWJ1dGVzW2pdO1xuXHRcdFx0XHRpZiAoIWF0dHJpYnV0ZXNbYXR0cmlidXRlLm5hbWVdKSBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUubmFtZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbm9kZXMuc3BsaWNlKGksIDEpWzBdOyAvLyBUT0RPIHN0cmlwIHVud2FudGVkIGF0dHJpYnV0ZXNcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3ZnID8gY3JlYXRlU3ZnRWxlbWVudChuYW1lKSA6IGNyZWF0ZUVsZW1lbnQobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNsYWltVGV4dCAobm9kZXMsIGRhdGEpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdHZhciBub2RlID0gbm9kZXNbaV07XG5cdFx0aWYgKG5vZGUubm9kZVR5cGUgPT09IDMpIHtcblx0XHRcdG5vZGUuZGF0YSA9IGRhdGE7XG5cdFx0XHRyZXR1cm4gbm9kZXMuc3BsaWNlKGksIDEpWzBdO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjcmVhdGVUZXh0KGRhdGEpO1xufVxuXG5mdW5jdGlvbiBzZXRJbnB1dFR5cGUoaW5wdXQsIHR5cGUpIHtcblx0dHJ5IHtcblx0XHRpbnB1dC50eXBlID0gdHlwZTtcblx0fSBjYXRjaCAoZSkge31cbn1cblxuZnVuY3Rpb24gc2V0U3R5bGUobm9kZSwga2V5LCB2YWx1ZSkge1xuXHRub2RlLnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RPcHRpb24oc2VsZWN0LCB2YWx1ZSkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dmFyIG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuXG5cdFx0aWYgKG9wdGlvbi5fX3ZhbHVlID09PSB2YWx1ZSkge1xuXHRcdFx0b3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0T3B0aW9ucyhzZWxlY3QsIHZhbHVlKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0Lm9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHR2YXIgb3B0aW9uID0gc2VsZWN0Lm9wdGlvbnNbaV07XG5cdFx0b3B0aW9uLnNlbGVjdGVkID0gfnZhbHVlLmluZGV4T2Yob3B0aW9uLl9fdmFsdWUpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHNlbGVjdFZhbHVlKHNlbGVjdCkge1xuXHR2YXIgc2VsZWN0ZWRPcHRpb24gPSBzZWxlY3QucXVlcnlTZWxlY3RvcignOmNoZWNrZWQnKSB8fCBzZWxlY3Qub3B0aW9uc1swXTtcblx0cmV0dXJuIHNlbGVjdGVkT3B0aW9uICYmIHNlbGVjdGVkT3B0aW9uLl9fdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdE11bHRpcGxlVmFsdWUoc2VsZWN0KSB7XG5cdHJldHVybiBbXS5tYXAuY2FsbChzZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnOmNoZWNrZWQnKSwgZnVuY3Rpb24ob3B0aW9uKSB7XG5cdFx0cmV0dXJuIG9wdGlvbi5fX3ZhbHVlO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkUmVzaXplTGlzdGVuZXIoZWxlbWVudCwgZm4pIHtcblx0aWYgKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG5cdFx0ZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG5cdH1cblxuXHRjb25zdCBvYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvYmplY3QnKTtcblx0b2JqZWN0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBvdmVyZmxvdzogaGlkZGVuOyBwb2ludGVyLWV2ZW50czogbm9uZTsgei1pbmRleDogLTE7Jyk7XG5cdG9iamVjdC50eXBlID0gJ3RleHQvaHRtbCc7XG5cblx0bGV0IHdpbjtcblxuXHRvYmplY3Qub25sb2FkID0gKCkgPT4ge1xuXHRcdHdpbiA9IG9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7XG5cdFx0d2luLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZuKTtcblx0fTtcblxuXHRpZiAoL1RyaWRlbnQvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcblx0XHRlbGVtZW50LmFwcGVuZENoaWxkKG9iamVjdCk7XG5cdFx0b2JqZWN0LmRhdGEgPSAnYWJvdXQ6YmxhbmsnO1xuXHR9IGVsc2Uge1xuXHRcdG9iamVjdC5kYXRhID0gJ2Fib3V0OmJsYW5rJztcblx0XHRlbGVtZW50LmFwcGVuZENoaWxkKG9iamVjdCk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGNhbmNlbDogKCkgPT4ge1xuXHRcdFx0d2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZuKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlQ2hpbGQob2JqZWN0KTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIGxpbmVhcih0KSB7XG5cdHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVJ1bGUoeyBhLCBiLCBkZWx0YSwgZHVyYXRpb24gfSwgZWFzZSwgZm4pIHtcblx0Y29uc3Qgc3RlcCA9IDE2LjY2NiAvIGR1cmF0aW9uO1xuXHRsZXQga2V5ZnJhbWVzID0gJ3tcXG4nO1xuXG5cdGZvciAobGV0IHAgPSAwOyBwIDw9IDE7IHAgKz0gc3RlcCkge1xuXHRcdGNvbnN0IHQgPSBhICsgZGVsdGEgKiBlYXNlKHApO1xuXHRcdGtleWZyYW1lcyArPSBwICogMTAwICsgYCV7JHtmbih0KX19XFxuYDtcblx0fVxuXG5cdHJldHVybiBrZXlmcmFtZXMgKyBgMTAwJSB7JHtmbihiKX19XFxufWA7XG59XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJrc2t5YXBwL3N0cmluZy1oYXNoL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG5mdW5jdGlvbiBoYXNoKHN0cikge1xuXHRsZXQgaGFzaCA9IDUzODE7XG5cdGxldCBpID0gc3RyLmxlbmd0aDtcblxuXHR3aGlsZSAoaS0tKSBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgXiBzdHIuY2hhckNvZGVBdChpKTtcblx0cmV0dXJuIGhhc2ggPj4+IDA7XG59XG5cbmZ1bmN0aW9uIHdyYXBUcmFuc2l0aW9uKGNvbXBvbmVudCwgbm9kZSwgZm4sIHBhcmFtcywgaW50cm8pIHtcblx0Y29uc3Qgb2JqID0gZm4obm9kZSwgcGFyYW1zKTtcblx0Y29uc3QgZHVyYXRpb24gPSBvYmouZHVyYXRpb24gfHwgMzAwO1xuXHRjb25zdCBlYXNlID0gb2JqLmVhc2luZyB8fCBsaW5lYXI7XG5cdGxldCBjc3NUZXh0O1xuXG5cdGlmIChpbnRybykge1xuXHRcdGlmIChvYmouY3NzICYmIG9iai5kZWxheSkge1xuXHRcdFx0Y3NzVGV4dCA9IG5vZGUuc3R5bGUuY3NzVGV4dDtcblx0XHRcdG5vZGUuc3R5bGUuY3NzVGV4dCArPSBvYmouY3NzKDApO1xuXHRcdH1cblxuXHRcdGlmIChvYmoudGljaykgb2JqLnRpY2soMCk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHQ6IGludHJvID8gMCA6IDEsXG5cdFx0cnVubmluZzogZmFsc2UsXG5cdFx0cHJvZ3JhbTogbnVsbCxcblx0XHRwZW5kaW5nOiBudWxsLFxuXG5cdFx0cnVuKGIsIGNhbGxiYWNrKSB7XG5cdFx0XHRjb25zdCBwcm9ncmFtID0ge1xuXHRcdFx0XHRzdGFydDogd2luZG93LnBlcmZvcm1hbmNlLm5vdygpICsgKG9iai5kZWxheSB8fCAwKSxcblx0XHRcdFx0Yixcblx0XHRcdFx0Y2FsbGJhY2s6IGNhbGxiYWNrIHx8IG5vb3Bcblx0XHRcdH07XG5cblx0XHRcdGlmICghYikge1xuXHRcdFx0XHRwcm9ncmFtLmdyb3VwID0gdHJhbnNpdGlvbk1hbmFnZXIub3V0cm9zO1xuXHRcdFx0XHR0cmFuc2l0aW9uTWFuYWdlci5vdXRyb3MucmVtYWluaW5nICs9IDE7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvYmouZGVsYXkpIHtcblx0XHRcdFx0dGhpcy5wZW5kaW5nID0gcHJvZ3JhbTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc3RhcnQocHJvZ3JhbSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghdGhpcy5ydW5uaW5nKSB7XG5cdFx0XHRcdHRoaXMucnVubmluZyA9IHRydWU7XG5cdFx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLmFkZCh0aGlzKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0c3RhcnQocHJvZ3JhbSkge1xuXHRcdFx0Y29tcG9uZW50LmZpcmUoYCR7cHJvZ3JhbS5iID8gJ2ludHJvJyA6ICdvdXRybyd9LnN0YXJ0YCwgeyBub2RlIH0pO1xuXG5cdFx0XHRwcm9ncmFtLmEgPSB0aGlzLnQ7XG5cdFx0XHRwcm9ncmFtLmRlbHRhID0gcHJvZ3JhbS5iIC0gcHJvZ3JhbS5hO1xuXHRcdFx0cHJvZ3JhbS5kdXJhdGlvbiA9IGR1cmF0aW9uICogTWF0aC5hYnMocHJvZ3JhbS5iIC0gcHJvZ3JhbS5hKTtcblx0XHRcdHByb2dyYW0uZW5kID0gcHJvZ3JhbS5zdGFydCArIHByb2dyYW0uZHVyYXRpb247XG5cblx0XHRcdGlmIChvYmouY3NzKSB7XG5cdFx0XHRcdGlmIChvYmouZGVsYXkpIG5vZGUuc3R5bGUuY3NzVGV4dCA9IGNzc1RleHQ7XG5cblx0XHRcdFx0Y29uc3QgcnVsZSA9IGdlbmVyYXRlUnVsZShwcm9ncmFtLCBlYXNlLCBvYmouY3NzKTtcblx0XHRcdFx0dHJhbnNpdGlvbk1hbmFnZXIuYWRkUnVsZShydWxlLCBwcm9ncmFtLm5hbWUgPSAnX19zdmVsdGVfJyArIGhhc2gocnVsZSkpO1xuXG5cdFx0XHRcdG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gKG5vZGUuc3R5bGUuYW5pbWF0aW9uIHx8ICcnKVxuXHRcdFx0XHRcdC5zcGxpdCgnLCAnKVxuXHRcdFx0XHRcdC5maWx0ZXIoYW5pbSA9PiBhbmltICYmIChwcm9ncmFtLmRlbHRhIDwgMCB8fCAhL19fc3ZlbHRlLy50ZXN0KGFuaW0pKSlcblx0XHRcdFx0XHQuY29uY2F0KGAke3Byb2dyYW0ubmFtZX0gJHtwcm9ncmFtLmR1cmF0aW9ufW1zIGxpbmVhciAxIGZvcndhcmRzYClcblx0XHRcdFx0XHQuam9pbignLCAnKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcblx0XHRcdHRoaXMucGVuZGluZyA9IG51bGw7XG5cdFx0fSxcblxuXHRcdHVwZGF0ZShub3cpIHtcblx0XHRcdGNvbnN0IHByb2dyYW0gPSB0aGlzLnByb2dyYW07XG5cdFx0XHRpZiAoIXByb2dyYW0pIHJldHVybjtcblxuXHRcdFx0Y29uc3QgcCA9IG5vdyAtIHByb2dyYW0uc3RhcnQ7XG5cdFx0XHR0aGlzLnQgPSBwcm9ncmFtLmEgKyBwcm9ncmFtLmRlbHRhICogZWFzZShwIC8gcHJvZ3JhbS5kdXJhdGlvbik7XG5cdFx0XHRpZiAob2JqLnRpY2spIG9iai50aWNrKHRoaXMudCk7XG5cdFx0fSxcblxuXHRcdGRvbmUoKSB7XG5cdFx0XHRjb25zdCBwcm9ncmFtID0gdGhpcy5wcm9ncmFtO1xuXHRcdFx0dGhpcy50ID0gcHJvZ3JhbS5iO1xuXG5cdFx0XHRpZiAob2JqLnRpY2spIG9iai50aWNrKHRoaXMudCk7XG5cblx0XHRcdGNvbXBvbmVudC5maXJlKGAke3Byb2dyYW0uYiA/ICdpbnRybycgOiAnb3V0cm8nfS5lbmRgLCB7IG5vZGUgfSk7XG5cblx0XHRcdGlmICghcHJvZ3JhbS5iICYmICFwcm9ncmFtLmludmFsaWRhdGVkKSB7XG5cdFx0XHRcdHByb2dyYW0uZ3JvdXAuY2FsbGJhY2tzLnB1c2goKCkgPT4ge1xuXHRcdFx0XHRcdHByb2dyYW0uY2FsbGJhY2soKTtcblx0XHRcdFx0XHRpZiAob2JqLmNzcykgdHJhbnNpdGlvbk1hbmFnZXIuZGVsZXRlUnVsZShub2RlLCBwcm9ncmFtLm5hbWUpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAoLS1wcm9ncmFtLmdyb3VwLnJlbWFpbmluZyA9PT0gMCkge1xuXHRcdFx0XHRcdHByb2dyYW0uZ3JvdXAuY2FsbGJhY2tzLmZvckVhY2goZm4gPT4ge1xuXHRcdFx0XHRcdFx0Zm4oKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKG9iai5jc3MpIHRyYW5zaXRpb25NYW5hZ2VyLmRlbGV0ZVJ1bGUobm9kZSwgcHJvZ3JhbS5uYW1lKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5ydW5uaW5nID0gISF0aGlzLnBlbmRpbmc7XG5cdFx0fSxcblxuXHRcdGFib3J0KCkge1xuXHRcdFx0aWYgKHRoaXMucHJvZ3JhbSkge1xuXHRcdFx0XHRpZiAob2JqLnRpY2spIG9iai50aWNrKDEpO1xuXHRcdFx0XHRpZiAob2JqLmNzcykgdHJhbnNpdGlvbk1hbmFnZXIuZGVsZXRlUnVsZShub2RlLCB0aGlzLnByb2dyYW0ubmFtZSk7XG5cdFx0XHRcdHRoaXMucHJvZ3JhbSA9IHRoaXMucGVuZGluZyA9IG51bGw7XG5cdFx0XHRcdHRoaXMucnVubmluZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRpbnZhbGlkYXRlKCkge1xuXHRcdFx0aWYgKHRoaXMucHJvZ3JhbSkge1xuXHRcdFx0XHR0aGlzLnByb2dyYW0uaW52YWxpZGF0ZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cblxudmFyIHRyYW5zaXRpb25NYW5hZ2VyID0ge1xuXHRydW5uaW5nOiBmYWxzZSxcblx0dHJhbnNpdGlvbnM6IFtdLFxuXHRib3VuZDogbnVsbCxcblx0c3R5bGVzaGVldDogbnVsbCxcblx0YWN0aXZlUnVsZXM6IHt9LFxuXG5cdGFkZCh0cmFuc2l0aW9uKSB7XG5cdFx0dGhpcy50cmFuc2l0aW9ucy5wdXNoKHRyYW5zaXRpb24pO1xuXG5cdFx0aWYgKCF0aGlzLnJ1bm5pbmcpIHtcblx0XHRcdHRoaXMucnVubmluZyA9IHRydWU7XG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5ib3VuZCB8fCAodGhpcy5ib3VuZCA9IHRoaXMubmV4dC5iaW5kKHRoaXMpKSk7XG5cdFx0fVxuXHR9LFxuXG5cdGFkZFJ1bGUocnVsZSwgbmFtZSkge1xuXHRcdGlmICghdGhpcy5zdHlsZXNoZWV0KSB7XG5cdFx0XHRjb25zdCBzdHlsZSA9IGNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLnN0eWxlc2hlZXQgPSBzdHlsZS5zaGVldDtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuYWN0aXZlUnVsZXNbbmFtZV0pIHtcblx0XHRcdHRoaXMuYWN0aXZlUnVsZXNbbmFtZV0gPSB0cnVlO1xuXHRcdFx0dGhpcy5zdHlsZXNoZWV0Lmluc2VydFJ1bGUoYEBrZXlmcmFtZXMgJHtuYW1lfSAke3J1bGV9YCwgdGhpcy5zdHlsZXNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG5cdFx0fVxuXHR9LFxuXG5cdG5leHQoKSB7XG5cdFx0dGhpcy5ydW5uaW5nID0gZmFsc2U7XG5cblx0XHRjb25zdCBub3cgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG5cdFx0bGV0IGkgPSB0aGlzLnRyYW5zaXRpb25zLmxlbmd0aDtcblxuXHRcdHdoaWxlIChpLS0pIHtcblx0XHRcdGNvbnN0IHRyYW5zaXRpb24gPSB0aGlzLnRyYW5zaXRpb25zW2ldO1xuXG5cdFx0XHRpZiAodHJhbnNpdGlvbi5wcm9ncmFtICYmIG5vdyA+PSB0cmFuc2l0aW9uLnByb2dyYW0uZW5kKSB7XG5cdFx0XHRcdHRyYW5zaXRpb24uZG9uZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHJhbnNpdGlvbi5wZW5kaW5nICYmIG5vdyA+PSB0cmFuc2l0aW9uLnBlbmRpbmcuc3RhcnQpIHtcblx0XHRcdFx0dHJhbnNpdGlvbi5zdGFydCh0cmFuc2l0aW9uLnBlbmRpbmcpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHJhbnNpdGlvbi5ydW5uaW5nKSB7XG5cdFx0XHRcdHRyYW5zaXRpb24udXBkYXRlKG5vdyk7XG5cdFx0XHRcdHRoaXMucnVubmluZyA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKCF0cmFuc2l0aW9uLnBlbmRpbmcpIHtcblx0XHRcdFx0dGhpcy50cmFuc2l0aW9ucy5zcGxpY2UoaSwgMSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucnVubmluZykge1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYm91bmQpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zdHlsZXNoZWV0KSB7XG5cdFx0XHRsZXQgaSA9IHRoaXMuc3R5bGVzaGVldC5jc3NSdWxlcy5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoaS0tKSB0aGlzLnN0eWxlc2hlZXQuZGVsZXRlUnVsZShpKTtcblx0XHRcdHRoaXMuYWN0aXZlUnVsZXMgPSB7fTtcblx0XHR9XG5cdH0sXG5cblx0ZGVsZXRlUnVsZShub2RlLCBuYW1lKSB7XG5cdFx0bm9kZS5zdHlsZS5hbmltYXRpb24gPSBub2RlLnN0eWxlLmFuaW1hdGlvblxuXHRcdFx0LnNwbGl0KCcsICcpXG5cdFx0XHQuZmlsdGVyKGFuaW0gPT4gYW5pbSAmJiBhbmltLmluZGV4T2YobmFtZSkgPT09IC0xKVxuXHRcdFx0LmpvaW4oJywgJyk7XG5cdH0sXG5cblx0Z3JvdXBPdXRyb3MoKSB7XG5cdFx0dGhpcy5vdXRyb3MgPSB7XG5cdFx0XHRyZW1haW5pbmc6IDAsXG5cdFx0XHRjYWxsYmFja3M6IFtdXG5cdFx0fTtcblx0fVxufTtcblxuZnVuY3Rpb24gaGFuZGxlUHJvbWlzZShwcm9taXNlLCBpbmZvKSB7XG5cdHZhciB0b2tlbiA9IGluZm8udG9rZW4gPSB7fTtcblxuXHRmdW5jdGlvbiB1cGRhdGUodHlwZSwgaW5kZXgsIGtleSwgdmFsdWUpIHtcblx0XHRpZiAoaW5mby50b2tlbiAhPT0gdG9rZW4pIHJldHVybjtcblxuXHRcdGluZm8ucmVzb2x2ZWQgPSBrZXkgJiYgeyBba2V5XTogdmFsdWUgfTtcblxuXHRcdGNvbnN0IGNoaWxkX2N0eCA9IGFzc2lnbihhc3NpZ24oe30sIGluZm8uY3R4KSwgaW5mby5yZXNvbHZlZCk7XG5cdFx0Y29uc3QgYmxvY2sgPSB0eXBlICYmIChpbmZvLmN1cnJlbnQgPSB0eXBlKShpbmZvLmNvbXBvbmVudCwgY2hpbGRfY3R4KTtcblxuXHRcdGlmIChpbmZvLmJsb2NrKSB7XG5cdFx0XHRpZiAoaW5mby5ibG9ja3MpIHtcblx0XHRcdFx0aW5mby5ibG9ja3MuZm9yRWFjaCgoYmxvY2ssIGkpID0+IHtcblx0XHRcdFx0XHRpZiAoaSAhPT0gaW5kZXggJiYgYmxvY2spIHtcblx0XHRcdFx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLmdyb3VwT3V0cm9zKCk7XG5cdFx0XHRcdFx0XHRibG9jay5vKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0YmxvY2suZCgxKTtcblx0XHRcdFx0XHRcdFx0aW5mby5ibG9ja3NbaV0gPSBudWxsO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGluZm8uYmxvY2suZCgxKTtcblx0XHRcdH1cblxuXHRcdFx0YmxvY2suYygpO1xuXHRcdFx0YmxvY2tbYmxvY2suaSA/ICdpJyA6ICdtJ10oaW5mby5tb3VudCgpLCBpbmZvLmFuY2hvcik7XG5cblx0XHRcdGluZm8uY29tcG9uZW50LnJvb3Quc2V0KHt9KTsgLy8gZmx1c2ggYW55IGhhbmRsZXJzIHRoYXQgd2VyZSBjcmVhdGVkXG5cdFx0fVxuXG5cdFx0aW5mby5ibG9jayA9IGJsb2NrO1xuXHRcdGlmIChpbmZvLmJsb2NrcykgaW5mby5ibG9ja3NbaW5kZXhdID0gYmxvY2s7XG5cdH1cblxuXHRpZiAoaXNQcm9taXNlKHByb21pc2UpKSB7XG5cdFx0cHJvbWlzZS50aGVuKHZhbHVlID0+IHtcblx0XHRcdHVwZGF0ZShpbmZvLnRoZW4sIDEsIGluZm8udmFsdWUsIHZhbHVlKTtcblx0XHR9LCBlcnJvciA9PiB7XG5cdFx0XHR1cGRhdGUoaW5mby5jYXRjaCwgMiwgaW5mby5lcnJvciwgZXJyb3IpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gaWYgd2UgcHJldmlvdXNseSBoYWQgYSB0aGVuL2NhdGNoIGJsb2NrLCBkZXN0cm95IGl0XG5cdFx0aWYgKGluZm8uY3VycmVudCAhPT0gaW5mby5wZW5kaW5nKSB7XG5cdFx0XHR1cGRhdGUoaW5mby5wZW5kaW5nLCAwKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRpZiAoaW5mby5jdXJyZW50ICE9PSBpbmZvLnRoZW4pIHtcblx0XHRcdHVwZGF0ZShpbmZvLnRoZW4sIDEsIGluZm8udmFsdWUsIHByb21pc2UpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aW5mby5yZXNvbHZlZCA9IHsgW2luZm8udmFsdWVdOiBwcm9taXNlIH07XG5cdH1cbn1cblxuZnVuY3Rpb24gZGVzdHJveUJsb2NrKGJsb2NrLCBsb29rdXApIHtcblx0YmxvY2suZCgxKTtcblx0bG9va3VwW2Jsb2NrLmtleV0gPSBudWxsO1xufVxuXG5mdW5jdGlvbiBvdXRyb0FuZERlc3Ryb3lCbG9jayhibG9jaywgbG9va3VwKSB7XG5cdGJsb2NrLm8oZnVuY3Rpb24oKSB7XG5cdFx0ZGVzdHJveUJsb2NrKGJsb2NrLCBsb29rdXApO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlS2V5ZWRFYWNoKG9sZF9ibG9ja3MsIGNvbXBvbmVudCwgY2hhbmdlZCwgZ2V0X2tleSwgZHluYW1pYywgY3R4LCBsaXN0LCBsb29rdXAsIG5vZGUsIGhhc19vdXRybywgY3JlYXRlX2VhY2hfYmxvY2ssIGludHJvX21ldGhvZCwgbmV4dCwgZ2V0X2NvbnRleHQpIHtcblx0dmFyIG8gPSBvbGRfYmxvY2tzLmxlbmd0aDtcblx0dmFyIG4gPSBsaXN0Lmxlbmd0aDtcblxuXHR2YXIgaSA9IG87XG5cdHZhciBvbGRfaW5kZXhlcyA9IHt9O1xuXHR3aGlsZSAoaS0tKSBvbGRfaW5kZXhlc1tvbGRfYmxvY2tzW2ldLmtleV0gPSBpO1xuXG5cdHZhciBuZXdfYmxvY2tzID0gW107XG5cdHZhciBuZXdfbG9va3VwID0ge307XG5cdHZhciBkZWx0YXMgPSB7fTtcblxuXHR2YXIgaSA9IG47XG5cdHdoaWxlIChpLS0pIHtcblx0XHR2YXIgY2hpbGRfY3R4ID0gZ2V0X2NvbnRleHQoY3R4LCBsaXN0LCBpKTtcblx0XHR2YXIga2V5ID0gZ2V0X2tleShjaGlsZF9jdHgpO1xuXHRcdHZhciBibG9jayA9IGxvb2t1cFtrZXldO1xuXG5cdFx0aWYgKCFibG9jaykge1xuXHRcdFx0YmxvY2sgPSBjcmVhdGVfZWFjaF9ibG9jayhjb21wb25lbnQsIGtleSwgY2hpbGRfY3R4KTtcblx0XHRcdGJsb2NrLmMoKTtcblx0XHR9IGVsc2UgaWYgKGR5bmFtaWMpIHtcblx0XHRcdGJsb2NrLnAoY2hhbmdlZCwgY2hpbGRfY3R4KTtcblx0XHR9XG5cblx0XHRuZXdfYmxvY2tzW2ldID0gbmV3X2xvb2t1cFtrZXldID0gYmxvY2s7XG5cblx0XHRpZiAoa2V5IGluIG9sZF9pbmRleGVzKSBkZWx0YXNba2V5XSA9IE1hdGguYWJzKGkgLSBvbGRfaW5kZXhlc1trZXldKTtcblx0fVxuXG5cdHZhciB3aWxsX21vdmUgPSB7fTtcblx0dmFyIGRpZF9tb3ZlID0ge307XG5cblx0dmFyIGRlc3Ryb3kgPSBoYXNfb3V0cm8gPyBvdXRyb0FuZERlc3Ryb3lCbG9jayA6IGRlc3Ryb3lCbG9jaztcblx0aWYgKGhhc19vdXRybykgdHJhbnNpdGlvbk1hbmFnZXIuZ3JvdXBPdXRyb3MoKTtcblxuXHRmdW5jdGlvbiBpbnNlcnQoYmxvY2spIHtcblx0XHRibG9ja1tpbnRyb19tZXRob2RdKG5vZGUsIG5leHQpO1xuXHRcdGxvb2t1cFtibG9jay5rZXldID0gYmxvY2s7XG5cdFx0bmV4dCA9IGJsb2NrLmZpcnN0O1xuXHRcdG4tLTtcblx0fVxuXG5cdHdoaWxlIChvICYmIG4pIHtcblx0XHR2YXIgbmV3X2Jsb2NrID0gbmV3X2Jsb2Nrc1tuIC0gMV07XG5cdFx0dmFyIG9sZF9ibG9jayA9IG9sZF9ibG9ja3NbbyAtIDFdO1xuXHRcdHZhciBuZXdfa2V5ID0gbmV3X2Jsb2NrLmtleTtcblx0XHR2YXIgb2xkX2tleSA9IG9sZF9ibG9jay5rZXk7XG5cblx0XHRpZiAobmV3X2Jsb2NrID09PSBvbGRfYmxvY2spIHtcblx0XHRcdC8vIGRvIG5vdGhpbmdcblx0XHRcdG5leHQgPSBuZXdfYmxvY2suZmlyc3Q7XG5cdFx0XHRvLS07XG5cdFx0XHRuLS07XG5cdFx0fVxuXG5cdFx0ZWxzZSBpZiAoIW5ld19sb29rdXBbb2xkX2tleV0pIHtcblx0XHRcdC8vIHJlbW92ZSBvbGQgYmxvY2tcblx0XHRcdGRlc3Ryb3kob2xkX2Jsb2NrLCBsb29rdXApO1xuXHRcdFx0by0tO1xuXHRcdH1cblxuXHRcdGVsc2UgaWYgKCFsb29rdXBbbmV3X2tleV0gfHwgd2lsbF9tb3ZlW25ld19rZXldKSB7XG5cdFx0XHRpbnNlcnQobmV3X2Jsb2NrKTtcblx0XHR9XG5cblx0XHRlbHNlIGlmIChkaWRfbW92ZVtvbGRfa2V5XSkge1xuXHRcdFx0by0tO1xuXG5cdFx0fSBlbHNlIGlmIChkZWx0YXNbbmV3X2tleV0gPiBkZWx0YXNbb2xkX2tleV0pIHtcblx0XHRcdGRpZF9tb3ZlW25ld19rZXldID0gdHJ1ZTtcblx0XHRcdGluc2VydChuZXdfYmxvY2spO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdHdpbGxfbW92ZVtvbGRfa2V5XSA9IHRydWU7XG5cdFx0XHRvLS07XG5cdFx0fVxuXHR9XG5cblx0d2hpbGUgKG8tLSkge1xuXHRcdHZhciBvbGRfYmxvY2sgPSBvbGRfYmxvY2tzW29dO1xuXHRcdGlmICghbmV3X2xvb2t1cFtvbGRfYmxvY2sua2V5XSkgZGVzdHJveShvbGRfYmxvY2ssIGxvb2t1cCk7XG5cdH1cblxuXHR3aGlsZSAobikgaW5zZXJ0KG5ld19ibG9ja3NbbiAtIDFdKTtcblxuXHRyZXR1cm4gbmV3X2Jsb2Nrcztcbn1cblxuZnVuY3Rpb24gZ2V0U3ByZWFkVXBkYXRlKGxldmVscywgdXBkYXRlcykge1xuXHR2YXIgdXBkYXRlID0ge307XG5cblx0dmFyIHRvX251bGxfb3V0ID0ge307XG5cdHZhciBhY2NvdW50ZWRfZm9yID0ge307XG5cblx0dmFyIGkgPSBsZXZlbHMubGVuZ3RoO1xuXHR3aGlsZSAoaS0tKSB7XG5cdFx0dmFyIG8gPSBsZXZlbHNbaV07XG5cdFx0dmFyIG4gPSB1cGRhdGVzW2ldO1xuXG5cdFx0aWYgKG4pIHtcblx0XHRcdGZvciAodmFyIGtleSBpbiBvKSB7XG5cdFx0XHRcdGlmICghKGtleSBpbiBuKSkgdG9fbnVsbF9vdXRba2V5XSA9IDE7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAodmFyIGtleSBpbiBuKSB7XG5cdFx0XHRcdGlmICghYWNjb3VudGVkX2ZvcltrZXldKSB7XG5cdFx0XHRcdFx0dXBkYXRlW2tleV0gPSBuW2tleV07XG5cdFx0XHRcdFx0YWNjb3VudGVkX2ZvcltrZXldID0gMTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRsZXZlbHNbaV0gPSBuO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gbykge1xuXHRcdFx0XHRhY2NvdW50ZWRfZm9yW2tleV0gPSAxO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZvciAodmFyIGtleSBpbiB0b19udWxsX291dCkge1xuXHRcdGlmICghKGtleSBpbiB1cGRhdGUpKSB1cGRhdGVba2V5XSA9IHVuZGVmaW5lZDtcblx0fVxuXG5cdHJldHVybiB1cGRhdGU7XG59XG5cbmZ1bmN0aW9uIHNwcmVhZChhcmdzKSB7XG5cdGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHt9LCAuLi5hcmdzKTtcblx0bGV0IHN0ciA9ICcnO1xuXG5cdE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2gobmFtZSA9PiB7XG5cdFx0Y29uc3QgdmFsdWUgPSBhdHRyaWJ1dGVzW25hbWVdO1xuXHRcdGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cdFx0aWYgKHZhbHVlID09PSB0cnVlKSBzdHIgKz0gXCIgXCIgKyBuYW1lO1xuXHRcdHN0ciArPSBcIiBcIiArIG5hbWUgKyBcIj1cIiArIEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblx0fSk7XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuY29uc3QgZXNjYXBlZCA9IHtcblx0J1wiJzogJyZxdW90OycsXG5cdFwiJ1wiOiAnJiMzOTsnLFxuXHQnJic6ICcmYW1wOycsXG5cdCc8JzogJyZsdDsnLFxuXHQnPic6ICcmZ3Q7J1xufTtcblxuZnVuY3Rpb24gZXNjYXBlKGh0bWwpIHtcblx0cmV0dXJuIFN0cmluZyhodG1sKS5yZXBsYWNlKC9bXCInJjw+XS9nLCBtYXRjaCA9PiBlc2NhcGVkW21hdGNoXSk7XG59XG5cbmZ1bmN0aW9uIGVhY2goaXRlbXMsIGFzc2lnbiwgZm4pIHtcblx0bGV0IHN0ciA9ICcnO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0c3RyICs9IGZuKGFzc2lnbihpdGVtc1tpXSwgaSkpO1xuXHR9XG5cdHJldHVybiBzdHI7XG59XG5cbmNvbnN0IG1pc3NpbmdDb21wb25lbnQgPSB7XG5cdF9yZW5kZXI6ICgpID0+ICcnXG59O1xuXG5mdW5jdGlvbiBibGFua09iamVjdCgpIHtcblx0cmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCk7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3koZGV0YWNoKSB7XG5cdHRoaXMuZGVzdHJveSA9IG5vb3A7XG5cdHRoaXMuZmlyZSgnZGVzdHJveScpO1xuXHR0aGlzLnNldCA9IG5vb3A7XG5cblx0dGhpcy5fZnJhZ21lbnQuZChkZXRhY2ggIT09IGZhbHNlKTtcblx0dGhpcy5fZnJhZ21lbnQgPSBudWxsO1xuXHR0aGlzLl9zdGF0ZSA9IHt9O1xufVxuXG5mdW5jdGlvbiBkZXN0cm95RGV2KGRldGFjaCkge1xuXHRkZXN0cm95LmNhbGwodGhpcywgZGV0YWNoKTtcblx0dGhpcy5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS53YXJuKCdDb21wb25lbnQgd2FzIGFscmVhZHkgZGVzdHJveWVkJyk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIF9kaWZmZXJzKGEsIGIpIHtcblx0cmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGIgfHwgKChhICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JykgfHwgdHlwZW9mIGEgPT09ICdmdW5jdGlvbicpO1xufVxuXG5mdW5jdGlvbiBfZGlmZmVyc0ltbXV0YWJsZShhLCBiKSB7XG5cdHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiO1xufVxuXG5mdW5jdGlvbiBmaXJlKGV2ZW50TmFtZSwgZGF0YSkge1xuXHR2YXIgaGFuZGxlcnMgPVxuXHRcdGV2ZW50TmFtZSBpbiB0aGlzLl9oYW5kbGVycyAmJiB0aGlzLl9oYW5kbGVyc1tldmVudE5hbWVdLnNsaWNlKCk7XG5cdGlmICghaGFuZGxlcnMpIHJldHVybjtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGhhbmRsZXJzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dmFyIGhhbmRsZXIgPSBoYW5kbGVyc1tpXTtcblxuXHRcdGlmICghaGFuZGxlci5fX2NhbGxpbmcpIHtcblx0XHRcdGhhbmRsZXIuX19jYWxsaW5nID0gdHJ1ZTtcblx0XHRcdGhhbmRsZXIuY2FsbCh0aGlzLCBkYXRhKTtcblx0XHRcdGhhbmRsZXIuX19jYWxsaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGdldCgpIHtcblx0cmV0dXJuIHRoaXMuX3N0YXRlO1xufVxuXG5mdW5jdGlvbiBpbml0KGNvbXBvbmVudCwgb3B0aW9ucykge1xuXHRjb21wb25lbnQuX2hhbmRsZXJzID0gYmxhbmtPYmplY3QoKTtcblx0Y29tcG9uZW50Ll9iaW5kID0gb3B0aW9ucy5fYmluZDtcblxuXHRjb21wb25lbnQub3B0aW9ucyA9IG9wdGlvbnM7XG5cdGNvbXBvbmVudC5yb290ID0gb3B0aW9ucy5yb290IHx8IGNvbXBvbmVudDtcblx0Y29tcG9uZW50LnN0b3JlID0gY29tcG9uZW50LnJvb3Quc3RvcmUgfHwgb3B0aW9ucy5zdG9yZTtcbn1cblxuZnVuY3Rpb24gb24oZXZlbnROYW1lLCBoYW5kbGVyKSB7XG5cdHZhciBoYW5kbGVycyA9IHRoaXMuX2hhbmRsZXJzW2V2ZW50TmFtZV0gfHwgKHRoaXMuX2hhbmRsZXJzW2V2ZW50TmFtZV0gPSBbXSk7XG5cdGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG5cblx0cmV0dXJuIHtcblx0XHRjYW5jZWw6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGluZGV4ID0gaGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKTtcblx0XHRcdGlmICh+aW5kZXgpIGhhbmRsZXJzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBydW4oZm4pIHtcblx0Zm4oKTtcbn1cblxuZnVuY3Rpb24gc2V0KG5ld1N0YXRlKSB7XG5cdHRoaXMuX3NldChhc3NpZ24oe30sIG5ld1N0YXRlKSk7XG5cdGlmICh0aGlzLnJvb3QuX2xvY2spIHJldHVybjtcblx0dGhpcy5yb290Ll9sb2NrID0gdHJ1ZTtcblx0Y2FsbEFsbCh0aGlzLnJvb3QuX2JlZm9yZWNyZWF0ZSk7XG5cdGNhbGxBbGwodGhpcy5yb290Ll9vbmNyZWF0ZSk7XG5cdGNhbGxBbGwodGhpcy5yb290Ll9hZnRlcmNyZWF0ZSk7XG5cdHRoaXMucm9vdC5fbG9jayA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBfc2V0KG5ld1N0YXRlKSB7XG5cdHZhciBvbGRTdGF0ZSA9IHRoaXMuX3N0YXRlLFxuXHRcdGNoYW5nZWQgPSB7fSxcblx0XHRkaXJ0eSA9IGZhbHNlO1xuXG5cdGZvciAodmFyIGtleSBpbiBuZXdTdGF0ZSkge1xuXHRcdGlmICh0aGlzLl9kaWZmZXJzKG5ld1N0YXRlW2tleV0sIG9sZFN0YXRlW2tleV0pKSBjaGFuZ2VkW2tleV0gPSBkaXJ0eSA9IHRydWU7XG5cdH1cblx0aWYgKCFkaXJ0eSkgcmV0dXJuO1xuXG5cdHRoaXMuX3N0YXRlID0gYXNzaWduKGFzc2lnbih7fSwgb2xkU3RhdGUpLCBuZXdTdGF0ZSk7XG5cdHRoaXMuX3JlY29tcHV0ZShjaGFuZ2VkLCB0aGlzLl9zdGF0ZSk7XG5cdGlmICh0aGlzLl9iaW5kKSB0aGlzLl9iaW5kKGNoYW5nZWQsIHRoaXMuX3N0YXRlKTtcblxuXHRpZiAodGhpcy5fZnJhZ21lbnQpIHtcblx0XHR0aGlzLmZpcmUoXCJzdGF0ZVwiLCB7IGNoYW5nZWQ6IGNoYW5nZWQsIGN1cnJlbnQ6IHRoaXMuX3N0YXRlLCBwcmV2aW91czogb2xkU3RhdGUgfSk7XG5cdFx0dGhpcy5fZnJhZ21lbnQucChjaGFuZ2VkLCB0aGlzLl9zdGF0ZSk7XG5cdFx0dGhpcy5maXJlKFwidXBkYXRlXCIsIHsgY2hhbmdlZDogY2hhbmdlZCwgY3VycmVudDogdGhpcy5fc3RhdGUsIHByZXZpb3VzOiBvbGRTdGF0ZSB9KTtcblx0fVxufVxuXG5mdW5jdGlvbiBzZXREZXYobmV3U3RhdGUpIHtcblx0aWYgKHR5cGVvZiBuZXdTdGF0ZSAhPT0gJ29iamVjdCcpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHR0aGlzLl9kZWJ1Z05hbWUgKyAnLnNldCB3YXMgY2FsbGVkIHdpdGhvdXQgYW4gb2JqZWN0IG9mIGRhdGEga2V5LXZhbHVlcyB0byB1cGRhdGUuJ1xuXHRcdCk7XG5cdH1cblxuXHR0aGlzLl9jaGVja1JlYWRPbmx5KG5ld1N0YXRlKTtcblx0c2V0LmNhbGwodGhpcywgbmV3U3RhdGUpO1xufVxuXG5mdW5jdGlvbiBjYWxsQWxsKGZucykge1xuXHR3aGlsZSAoZm5zICYmIGZucy5sZW5ndGgpIGZucy5zaGlmdCgpKCk7XG59XG5cbmZ1bmN0aW9uIF9tb3VudCh0YXJnZXQsIGFuY2hvcikge1xuXHR0aGlzLl9mcmFnbWVudFt0aGlzLl9mcmFnbWVudC5pID8gJ2knIDogJ20nXSh0YXJnZXQsIGFuY2hvciB8fCBudWxsKTtcbn1cblxudmFyIFBFTkRJTkcgPSB7fTtcbnZhciBTVUNDRVNTID0ge307XG52YXIgRkFJTFVSRSA9IHt9O1xuXG5mdW5jdGlvbiByZW1vdmVGcm9tU3RvcmUoKSB7XG5cdHRoaXMuc3RvcmUuX3JlbW92ZSh0aGlzKTtcbn1cblxudmFyIHByb3RvID0ge1xuXHRkZXN0cm95LFxuXHRnZXQsXG5cdGZpcmUsXG5cdG9uLFxuXHRzZXQsXG5cdF9yZWNvbXB1dGU6IG5vb3AsXG5cdF9zZXQsXG5cdF9tb3VudCxcblx0X2RpZmZlcnNcbn07XG5cbnZhciBwcm90b0RldiA9IHtcblx0ZGVzdHJveTogZGVzdHJveURldixcblx0Z2V0LFxuXHRmaXJlLFxuXHRvbixcblx0c2V0OiBzZXREZXYsXG5cdF9yZWNvbXB1dGU6IG5vb3AsXG5cdF9zZXQsXG5cdF9tb3VudCxcblx0X2RpZmZlcnNcbn07XG5cbmV4cG9ydCB7IGJsYW5rT2JqZWN0LCBkZXN0cm95LCBkZXN0cm95RGV2LCBfZGlmZmVycywgX2RpZmZlcnNJbW11dGFibGUsIGZpcmUsIGdldCwgaW5pdCwgb24sIHJ1biwgc2V0LCBfc2V0LCBzZXREZXYsIGNhbGxBbGwsIF9tb3VudCwgUEVORElORywgU1VDQ0VTUywgRkFJTFVSRSwgcmVtb3ZlRnJvbVN0b3JlLCBwcm90bywgcHJvdG9EZXYsIGhhbmRsZVByb21pc2UsIGFwcGVuZE5vZGUsIGluc2VydE5vZGUsIGRldGFjaE5vZGUsIGRldGFjaEJldHdlZW4sIGRldGFjaEJlZm9yZSwgZGV0YWNoQWZ0ZXIsIHJlaW5zZXJ0QmV0d2VlbiwgcmVpbnNlcnRDaGlsZHJlbiwgcmVpbnNlcnRBZnRlciwgcmVpbnNlcnRCZWZvcmUsIGRlc3Ryb3lFYWNoLCBjcmVhdGVGcmFnbWVudCwgY3JlYXRlRWxlbWVudCwgY3JlYXRlU3ZnRWxlbWVudCwgY3JlYXRlVGV4dCwgY3JlYXRlQ29tbWVudCwgYWRkTGlzdGVuZXIsIHJlbW92ZUxpc3RlbmVyLCBzZXRBdHRyaWJ1dGUsIHNldEF0dHJpYnV0ZXMsIHJlbW92ZUF0dHJpYnV0ZSwgc2V0WGxpbmtBdHRyaWJ1dGUsIGdldEJpbmRpbmdHcm91cFZhbHVlLCB0b051bWJlciwgdGltZVJhbmdlc1RvQXJyYXksIGNoaWxkcmVuLCBjbGFpbUVsZW1lbnQsIGNsYWltVGV4dCwgc2V0SW5wdXRUeXBlLCBzZXRTdHlsZSwgc2VsZWN0T3B0aW9uLCBzZWxlY3RPcHRpb25zLCBzZWxlY3RWYWx1ZSwgc2VsZWN0TXVsdGlwbGVWYWx1ZSwgYWRkUmVzaXplTGlzdGVuZXIsIGRlc3Ryb3lCbG9jaywgb3V0cm9BbmREZXN0cm95QmxvY2ssIHVwZGF0ZUtleWVkRWFjaCwgZ2V0U3ByZWFkVXBkYXRlLCBzcHJlYWQsIGVzY2FwZWQsIGVzY2FwZSwgZWFjaCwgbWlzc2luZ0NvbXBvbmVudCwgbGluZWFyLCBnZW5lcmF0ZVJ1bGUsIGhhc2gsIHdyYXBUcmFuc2l0aW9uLCB0cmFuc2l0aW9uTWFuYWdlciwgbm9vcCwgYXNzaWduLCBhc3NpZ25UcnVlLCBpc1Byb21pc2UgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XG5cbm5ldyBBcHAoeyB0YXJnZXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKSB9KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9pbmRleC5qcyIsIjxkaXYgY2xhc3M9XCJmb3JtLWJveFwiPlxuXHQ8WWVhck1vbnRoUGlja2VyIHJlZjpwaWNrZXI+PC9ZZWFyTW9udGhQaWNrZXI+XG5cdDxGb3JtIHJlZjpmb3JtPjwvRm9ybT5cbjwvZGl2PlxuPFRhYmxlIHJlZjp0YWJsZT48L1RhYmxlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFllYXJNb250aFBpY2tlciBmcm9tICcuLi95ZWFyLW1vbnRoLXBpY2tlcic7XG5pbXBvcnQgRm9ybSBmcm9tICcuLi9mb3JtJztcbmltcG9ydCBUYWJsZSBmcm9tICcuLi90YWJsZSc7XG5pbXBvcnQge0NhdGVnb3JpZXMsIEV4cGVuc2VzfSBmcm9tICcuLi9kYXRhJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhICgpIHsgcmV0dXJuIHt9OyB9LFxuXHRjb21wb25lbnRzOiB7IEZvcm0sIFRhYmxlLCBZZWFyTW9udGhQaWNrZXIgfSxcblx0b25jcmVhdGUgKCkge1xuXHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDcpO1xuXHRcdENhdGVnb3JpZXMuZ2V0KCkudGhlbihjYXRlZ29yaWVzID0+IHRoaXMucmVmcy5mb3JtLnNldCh7IGRhdGUsIGNhdGVnb3JpZXMgfSkpO1xuXHRcdHRoaXMubG9hZFRhYmxlKGRhdGUpO1xuXG5cdFx0dGhpcy5yZWZzLmZvcm0ub24oJ2NoYW5nZScsIHRoaXMub25Gb3JtQ2hhbmdlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMucmVmcy5mb3JtLm9uKCdyZW1vdmUnLCB0aGlzLm9uUmVtb3ZlSXRlbS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnJlZnMuZm9ybS5vbignc3VibWl0JywgdGhpcy5vbkZvcm1TdWJtaXQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5yZWZzLmZvcm0ub24oJ2Vycm9yJywgdGhpcy5vbkZvcm1FcnJvci5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnJlZnMucGlja2VyLm9uKCdjaGFuZ2UnLCB0aGlzLm9uRGF0ZUNoYW5nZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnJlZnMudGFibGUub24oJ2NsaWNrJywgdGhpcy5vblRhYmxlQ2xpY2suYmluZCh0aGlzKSk7XG5cdH0sXG5cblx0bWV0aG9kczoge1xuXHRcdGxvYWRUYWJsZSAoZGF0ZSkge1xuXHRcdFx0aWYgKCFkYXRlKSBkYXRlID0gdGhpcy5sYXN0RGF0ZTtcblx0XHRcdGVsc2UgdGhpcy5sYXN0RGF0ZSA9IGRhdGU7XG5cdFx0XHRFeHBlbnNlcy5nZXQoZGF0ZSkudGhlbihkYXRhID0+IHtcblx0XHRcdFx0dGhpcy5sYXN0VGFibGVEYXRhID0gZGF0YTtcblx0XHRcdFx0dGhpcy5yZWZzLnRhYmxlLnNldCh7IGRhdGEgfSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0b25EYXRlQ2hhbmdlIChkYXRlKSB7XG5cdFx0XHR0aGlzLnJlZnMuZm9ybS5zZXQoeyBkYXRlOiBkYXRlLmRhdGVTdHIgfSk7XG5cdFx0XHR0aGlzLmxvYWRUYWJsZShkYXRlLmRhdGVTdHIpO1xuXHRcdH0sXG5cblx0XHRvbkZvcm1DaGFuZ2UgKGRhdGEpIHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdmb3JtIGNoYW5nZWQnLCBkYXRhKTtcblx0XHR9LFxuXG5cdFx0b25Gb3JtU3VibWl0IChkYXRhKSB7XG5cdFx0XHRFeHBlbnNlcy5zYXZlKGRhdGEpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmxvYWRUYWJsZSgpO1xuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdG9uUmVtb3ZlSXRlbSAoaXRlbSkge1xuXHRcdFx0Y29uc29sZS5sb2coaXRlbSk7XG5cdFx0fSxcblxuXHRcdG9uRm9ybUVycm9yIChlcnIpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycik7XHQvLyBUT0RPOiB0b2FzdD9cblx0XHR9LFxuXG5cdFx0b25UYWJsZUNsaWNrIChpdGVtKSB7IHRoaXMucmVmcy5mb3JtLmVkaXQoaXRlbSk7IH0sXG5cdH1cbn07XG5cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2FwcC9pbmRleC5odG1sIiwiPGRpdiBjbGFzcz1cInllYXItbW9udGgtcGlja2VyIHtpc1RvZGF5ID8gJ2lzLXRvZGF5JzogJyd9XCIgb246d2hlZWw9XCJvbndoZWVsKGV2ZW50KVwiPlxuXHQ8YnV0dG9uIHJlZjpsZWZ0QnV0dG9uIGNsYXNzPVwiYnRuLXByZXZcIiB0aXRsZT1cIlByZXZpb3VzIG1vbnRoXCJcblx0XHRvbjprZXlkb3duPVwia2V5ZG93bihldmVudC5rZXksIC0xKVwiXG5cdFx0b246a2V5dXA9XCJrZXl1cChldmVudC5rZXkpXCJcblx0XHRvbjptb3VzZWRvd249XCJ0aWNrKC0xKVwiXG5cdFx0b246bW91c2VvdXQ9XCJtdXAoKVwiXG5cdFx0b246bW91c2V1cD1cIm11cCgpXCI+PGkgY2xhc3M9XCJpb24taW9zLWFycm93LWJhY2tcIj48L2k+PC9idXR0b24+XG5cblx0PHNwYW4gY2xhc3M9XCJkYXlcIj57bW9udGhzW21vbnRoXX0ge3llYXJ9PC9zcGFuPlxuXG5cdDxidXR0b24gcmVmOnJpZ2h0QnV0dG9uIGNsYXNzPVwiYnRuLW5leHRcIiB0aXRsZT1cIk5leHQgbW9udGhcIlxuXHRcdG9uOmtleWRvd249XCJrZXlkb3duKGV2ZW50LmtleSwgMSlcIlxuXHRcdG9uOmtleXVwPVwia2V5dXAoZXZlbnQua2V5KVwiXG5cdFx0b246bW91c2Vkb3duPVwidGljaygxKVwiXG5cdFx0b246bW91c2VvdXQ9XCJtdXAoKVwiXG5cdFx0b246bW91c2V1cD1cIm11cCgpXCI+PGkgY2xhc3M9XCJpb24taW9zLWFycm93LWZvcndhcmRcIj48L2k+PC9idXR0b24+XG5cblx0PGJ1dHRvbiB0aXRsZT1cIlRvZGF5XCIgY2xhc3M9XCJidG4tdG9kYXlcIiBvbjpjbGljaz1cInJlc2V0KClcIj48aSBjbGFzcz1cImlvbi1tZC11bmRvXCI+PC9pPjwvYnV0dG9uPlxuPC9kaXY+XG5cbjxzY3JpcHQ+XG5mdW5jdGlvbiB6ZXJvU3RhdGUgKCkge1xuXHRjb25zdCBkID0gbmV3IERhdGUoKTtcblx0Y29uc3QgbW9udGggPSBkLmdldE1vbnRoKCk7XG5cdGNvbnN0IHllYXIgPSBkLmdldEZ1bGxZZWFyKCk7XG5cdGNvbnN0IG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXTtcblx0cmV0dXJuIHsgbW9udGhzLCBtb250aCwgeWVhciwgY3VycmVudDogeyBtb250aCwgeWVhciB9IH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0ZGF0YSAoKSB7IHJldHVybiB6ZXJvU3RhdGUoKTsgfSxcblx0Y29tcHV0ZWQ6IHtcblx0XHRpc1RvZGF5OiAoe21vbnRoLCB5ZWFyLCBjdXJyZW50fSkgPT4gKG1vbnRoID09PSBjdXJyZW50Lm1vbnRoICYmIHllYXIgPT09IGN1cnJlbnQueWVhciksXG5cdFx0ZGF0ZVN0cjogKHttb250aCwgeWVhcn0pID0+IGAke3llYXJ9LSR7KCcwJyArIChtb250aCArIDEpKS5zdWJzdHIoLTIpfWBcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdG9ud2hlZWwgKGUpIHtcblx0XHRcdGNvbnN0IHRocmVzaG9sZCA9IDI7XG5cdFx0XHRsZXQgdmFsID0gbnVsbDtcblx0XHRcdGlmIChlLmRlbHRhWSA8IC10aHJlc2hvbGQpIHZhbCA9IC0xO1xuXHRcdFx0ZWxzZSBpZiAoZS5kZWx0YVkgPiB0aHJlc2hvbGQpIHZhbCA9IDE7XG5cdFx0XHRpZiAodmFsKSB0aGlzLndoZWVsVGhyb3R0bGUodmFsLCBmYWxzZSk7XG5cdFx0fSxcblxuXHRcdHdoZWVsVGhyb3R0bGUgKHZhbHVlKSB7XG5cdFx0XHRpZiAoIXRoaXMudGhyb3R0bGVyKSB7XG5cdFx0XHRcdHRoaXMuZ28odmFsdWUpO1xuXHRcdFx0XHR0aGlzLm5vdGlmeSgpO1xuXHRcdFx0XHR0aGlzLnRocm90dGxlciA9IHNldFRpbWVvdXQoKCkgPT4gKHRoaXMudGhyb3R0bGVyID0gbnVsbCksIDEwMCk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGtleXVwIChrZXkpIHtcblx0XHRcdHRoaXMua2V5SXNEb3duID0gZmFsc2U7XG5cdFx0XHRpZiAodGhpcy50aWNrZXIpIGNsZWFyVGltZW91dCh0aGlzLnRpY2tlcik7XG5cdFx0XHRpZiAoa2V5ID09PSAnICcgfHwga2V5ID09PSAnRW50ZXInIHx8XG5cdFx0XHRcdGtleSA9PT0gJ0Fycm93TGVmdCcgfHwga2V5ID09PSAnQXJyb3dSaWdodCcgfHxcblx0XHRcdFx0a2V5ID09PSAnQXJyb3dEb3duJyB8fCBrZXkgPT09ICdBcnJvd1VwJykgdGhpcy5ub3RpZnkoKTtcblx0XHR9LFxuXG5cdFx0a2V5ZG93biAoa2V5LCB2YWx1ZSkge1xuXHRcdFx0aWYgKHRoaXMua2V5SXNEb3duKSByZXR1cm47XG5cdFx0XHRpZiAoa2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBrZXkgPT09ICdBcnJvd0Rvd24nKSB7XG5cdFx0XHRcdHRoaXMucmVmcy5sZWZ0QnV0dG9uLmZvY3VzKCk7XG5cdFx0XHRcdHRoaXMua2V5SXNEb3duID0gdHJ1ZTtcblx0XHRcdFx0cmV0dXJuIHRoaXMudGljaygtMSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoa2V5ID09PSAnQXJyb3dSaWdodCcgfHwga2V5ID09PSAnQXJyb3dVcCcpIHtcblx0XHRcdFx0dGhpcy5yZWZzLnJpZ2h0QnV0dG9uLmZvY3VzKCk7XG5cdFx0XHRcdHRoaXMua2V5SXNEb3duID0gdHJ1ZTtcblx0XHRcdFx0cmV0dXJuIHRoaXMudGljaygxKTtcblx0XHRcdH1cblx0XHRcdGlmIChrZXkgPT09ICcgJyB8fCBrZXkgPT09ICdFbnRlcicpIHtcblx0XHRcdFx0dGhpcy5rZXlJc0Rvd24gPSB0cnVlO1xuXHRcdFx0XHR0aGlzLnRpY2sodmFsdWUpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRtdXAgKCkge1xuXHRcdFx0aWYgKHRoaXMudGlja2VyKSBjbGVhclRpbWVvdXQodGhpcy50aWNrZXIpO1xuXHRcdFx0aWYgKHRoaXMubW91c2VJc0Rvd24pIHRoaXMubm90aWZ5KCk7XG5cdFx0XHR0aGlzLm1vdXNlSXNEb3duID0gZmFsc2U7XG5cdFx0fSxcblxuXHRcdHRpY2sgKHZhbHVlLCBkZWxheSA9IDMwMCkge1xuXHRcdFx0aWYgKHRoaXMudGlja2VyKSBjbGVhclRpbWVvdXQodGhpcy50aWNrZXIpO1xuXHRcdFx0dGhpcy5nbyh2YWx1ZSk7XG5cdFx0XHRpZiAodGhpcy5nZXQoKS5pc1RvZGF5KSByZXR1cm4gdGhpcy5ub3RpZnkoKTtcblx0XHRcdHRoaXMubW91c2VJc0Rvd24gPSB0cnVlO1xuXHRcdFx0dGhpcy50aWNrZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0ZGVsYXkgPSBNYXRoLm1heCg2MCwgZGVsYXkgLSA0MCk7XG5cdFx0XHRcdHRoaXMudGljayh2YWx1ZSwgZGVsYXkpO1xuXHRcdFx0fSwgZGVsYXkpO1xuXHRcdH0sXG5cblx0XHRnbyAodmFsdWUpIHtcblx0XHRcdGxldCB7bW9udGgsIHllYXJ9ID0gdGhpcy5nZXQoKTtcblx0XHRcdG1vbnRoICs9IHZhbHVlO1xuXHRcdFx0aWYgKG1vbnRoIDwgMCkgeyBtb250aCA9IDExOyB5ZWFyIC09IDE7IH1cblx0XHRcdGVsc2UgaWYgKG1vbnRoID4gMTEpIHsgbW9udGggPSAwOyB5ZWFyICs9IDE7IH1cblx0XHRcdHRoaXMuc2V0KHsgbW9udGgsIHllYXIgfSk7XG5cdFx0fSxcblxuXHRcdG5vdGlmeSAoKSB7XG5cdFx0XHRjb25zdCB7bW9udGgsIHllYXIsIGRhdGVTdHJ9ID0gdGhpcy5nZXQoKTtcblx0XHRcdHRoaXMuZmlyZSgnY2hhbmdlJywgeyBtb250aCwgeWVhciwgZGF0ZVN0ciB9KTtcblx0XHR9LFxuXG5cdFx0cmVzZXQgKCkge1xuXHRcdFx0dGhpcy5zZXQoemVyb1N0YXRlKCkpO1xuXHRcdFx0dGhpcy5ub3RpZnkoKTtcblx0XHR9XG5cdH1cbn07XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC95ZWFyLW1vbnRoLXBpY2tlci9pbmRleC5odG1sIiwiPGZvcm0gcmVmOmZvcm0gY2xhc3M9XCJmb3JtIHtpbkVkaXQgPyAnZWRpdCcgOiAnJ31cIiBvbjpzdWJtaXQ9XCJvbnN1Ym1pdChldmVudClcIiBvbjppbnB1dD1cIm9uaW5wdXQoZXZlbnQpXCI+XG5cdDxkaXYgY2xhc3M9XCJzdWJmb3Jtc1wiPlxuXHRcdHsjZWFjaCByb3dzIGFzIHJvdywgaWR4fVxuXHRcdDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuXHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBiaW5kOnZhbHVlPXJvdy5pZD5cblx0XHRcdDxpbnB1dCBjbGFzcz1cImRlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCJkZXNjcmlwdGlvblwiXG5cdFx0XHRcdGJpbmQ6dmFsdWU9XCJyb3cuZGVzY3JpcHRpb25cIlxuXHRcdFx0XHRvbjppbnB1dD1cIm1hdGNoR3JvdXAoY2F0ZWdvcmllcywgcm93LCB0aGlzKVwiXG5cdFx0XHRcdGF1dG9mb2N1cz1cImF1dG9mb2N1c1wiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInNlbGVjdC13cmFwXCI+XG5cdFx0XHRcdDxzZWxlY3QgY2xhc3M9XCJzZWxlY3QgY2F0ZWdvcnlcIiBiaW5kOnZhbHVlPXJvdy5ncm91cF9pZD5cblx0XHRcdFx0XHR7I2VhY2ggY2F0ZWdvcmllcyBhcyBjYXR9XG5cdFx0XHRcdFx0PG9wdGdyb3VwIGxhYmVsPVwie2NhdC5uYW1lfVwiPlxuXHRcdFx0XHRcdFx0eyNpZiBjYXQuZ3JvdXBzfVxuXHRcdFx0XHRcdFx0eyNlYWNoIGNhdC5ncm91cHMgYXMgZ3JvdXB9XG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwie2dyb3VwLmlkfVwiPntncm91cC5uYW1lfTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0ey9lYWNofVxuXHRcdFx0XHRcdFx0ey9pZn1cblx0XHRcdFx0XHQ8L29wdGdyb3VwPlxuXHRcdFx0XHRcdHsvZWFjaH1cblx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxpbnB1dCBjbGFzcz1cImFtb3VudFwiIHBsYWNlaG9sZGVyPVwiMC4wMFwiIGJpbmQ6dmFsdWU9cm93LmFtb3VudCBvbjprZXlkb3duPVwib25rZXlkb3duKGV2ZW50KVwiPlxuXG5cdFx0XHR7I2lmIGlkeCA9PT0gMH1cblx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiU3BsaXRcIiBjbGFzcz1cImJ0biBidG4tc3BsaXQgaW9uLW1kLXN3YXBcIiBvbjpjbGljaz1cInNwbGl0KClcIj48L2J1dHRvbj5cblx0XHRcdHs6ZWxzZX1cblx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiUmVtb3ZlXCIgY2xhc3M9XCJidG4gYnRuLXVuc3BsaXQgaW9uLW1kLWNsb3NlXCIgb246Y2xpY2s9XCJ1bnNwbGl0KGlkeClcIj48L2J1dHRvbj5cblx0XHRcdHsvaWZ9XG5cdFx0PC9kaXY+XG5cdFx0ey9lYWNofVxuXHQ8L2Rpdj5cblx0PGRpdiBjbGFzcz1cImZvcm0tcm93IGZvcm0tcm93LXJlcGVhdFwiPlxuXHRcdDxsYWJlbD5SZXBlYXQgZXZlcnkgbW9udGgsIGZvciA8L2xhYmVsPlxuXHRcdDxpbnB1dCBjbGFzcz1cInJlcGVhdGVyXCIgbWluPVwiMVwiIG1heD1cIjEyXCIgdHlwZT1cIm51bWJlclwiIGJpbmQ6dmFsdWU9cmVwZWF0PlxuXHRcdDxsYWJlbD4gbW9udGhzPC9sYWJlbD5cblx0PC9kaXY+XG5cdDxkaXYgY2xhc3M9XCJmb3JtLWZvb3RlciBmb3JtLXJvd1wiPlxuXHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1yZXNldFwiIG9uOmNsaWNrPVwicmVzZXQoKVwiPlJlc2V0PC9idXR0b24+XG5cdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gZGFuZ2VyIGJ0bi1yZW1vdmVcIiBvbjpjbGljaz1cInJlbW92ZSgpXCI+UmVtb3ZlPC9idXR0b24+XG5cdFx0PGRpdiBjbGFzcz1cImZsZXgtZmlsbGVyXCI+PC9kaXY+XG5cdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWNhbmNlbFwiIG9uOmNsaWNrPVwicmVzZXQoKVwiPkNhbmNlbDwvYnV0dG9uPlxuXHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIHN1Y2Nlc3MgYnRuLXNhdmVcIj5TYXZlPC9idXR0b24+XG5cdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gc3VjY2VzcyBidG4tYWRkXCI+QWRkPC9idXR0b24+XG5cdDwvZGl2PlxuPC9mb3JtPlxuXG48c2NyaXB0PlxuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsLmpzJztcblxuZnVuY3Rpb24gbWF0Y2hlcyAoY2F0ZWdvcmllcywgdHh0KSB7XG5cdHR4dCA9IHR4dC50b0xvd2VyQ2FzZSgpO1xuXHRmb3IgKGNvbnN0IGMgb2YgY2F0ZWdvcmllcykge1xuXHRcdGZvciAoY29uc3QgZyBvZiBjLmdyb3Vwcykge1xuXHRcdFx0aWYgKGcua2V5d29yZHMgJiYgZy5rZXl3b3Jkcy50b0xvd2VyQ2FzZSgpLmluZGV4T2YodHh0KSA+IC0xKSByZXR1cm4gZy5pZDtcblx0XHRcdGlmIChnLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHR4dCkgPiAtMSkgcmV0dXJuIGcuaWQ7XG5cdFx0fVxuXHR9XG5cdHJldHVybjtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhdGEgKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRpbkVkaXQ6IGZhbHNlLFxuXHRcdFx0ZGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnN1YnN0cigwLCA3KSxcblx0XHRcdHJlcGVhdDogMSxcblx0XHRcdHJvd3M6IFsge2lkOiAnJywgZGVzY3JpcHRpb246ICcnLCBhbW91bnQ6ICcnfSBdLFxuXHRcdFx0Y2F0ZWdvcmllczogW10sXG5cdFx0fTtcblx0fSxcblx0Y29tcHV0ZWQ6IHt9LFxuXHRtZXRob2RzOiB7XG5cdFx0bWF0Y2hHcm91cCAoY2F0ZWdvcmllcywgcm93LCBlbCkge1xuXHRcdFx0aWYgKCFjYXRlZ29yaWVzIHx8ICFjYXRlZ29yaWVzLmxlbmd0aCkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgaWQgPSByb3cuZGVzY3JpcHRpb24gPyBtYXRjaGVzKGNhdGVnb3JpZXMsIHJvdy5kZXNjcmlwdGlvbikgOiBjYXRlZ29yaWVzWzBdLmdyb3Vwc1swXS5pZDtcblx0XHRcdGlmIChpZCkgZWwucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnknKS52YWx1ZSA9IGlkO1xuXHRcdH0sXG5cdFx0Z2V0RGF0YSAoKSB7XG5cdFx0XHRjb25zdCBkYXRlID0gdGhpcy5nZXQoKS5kYXRlIHx8IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zdWJzdHIoMCwgNyk7XG5cdFx0XHRjb25zdCBlbnRyaWVzID0gdXRpbC5kZWVwQ29weUFycmF5KHRoaXMuZ2V0KCkucm93cylcblx0XHRcdFx0Lm1hcChlID0+IHtcblx0XHRcdFx0XHRlLmRhdGUgPSBkYXRlO1xuXHRcdFx0XHRcdGUuYW1vdW50ID0gdXRpbC5wYXJzZUFtb3VudChlLmFtb3VudCk7XG5cdFx0XHRcdFx0cmV0dXJuIGU7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHQvLyBzdWJ0cmFjdCBvdGhlciBhbW91bnRzIGZyb20gdGhlIGZpcnN0IHJvd1xuXHRcdFx0Y29uc3QgYW1vdW50cyA9IGVudHJpZXMubWFwKChpdGVtLCBpKSA9PiBpID4gMCA/IGl0ZW0uYW1vdW50IDogMCk7XG5cdFx0XHRjb25zdCBzdW0gPSBhbW91bnRzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1x0Ly8gYWRkIGFsbCB1cFxuXHRcdFx0ZW50cmllc1swXS5hbW91bnQgLT0gc3VtO1xuXG5cdFx0XHQvLyByZXBlYXQgbW9udGhseVxuXHRcdFx0Y29uc3QgcmVwZWF0ZXIgPSB0aGlzLmdldCgpLnJlcGVhdDtcblx0XHRcdHJldHVybiB1dGlsLnJlcGVhdEVudHJpZXMoZW50cmllcywgcmVwZWF0ZXIpO1xuXHRcdH0sXG5cblx0XHRzcGxpdCAoKSB7XG5cdFx0XHRjb25zdCByb3dzID0gdGhpcy5nZXQoKS5yb3dzO1xuXHRcdFx0cm93cy5wdXNoKHtpZDogJycsIGRlc2NyaXB0aW9uOiByb3dzWzBdLmRlc2NyaXB0aW9uLCBhbW91bnQ6ICcnfSk7XG5cdFx0XHR0aGlzLnNldCh7IHJvd3MgfSk7XG5cdFx0fSxcblxuXHRcdHVuc3BsaXQgKGlkeCkge1xuXHRcdFx0Y29uc3Qgcm93cyA9IHRoaXMuZ2V0KCkucm93cztcblx0XHRcdHJvd3Muc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHR0aGlzLnNldCh7IHJvd3MgfSk7XG5cdFx0fSxcblxuXHRcdGVkaXQgKGRhdGEpIHtcblx0XHRcdHRoaXMucmVzZXQoKTtcblx0XHRcdHRoaXMuc2V0KHsgaW5FZGl0OiB0cnVlLCByb3dzOiBbZGF0YV0gfSk7XG5cdFx0XHR0aGlzLmZpcmUoJ2NoYW5nZScsIHRoaXMuZ2V0RGF0YSgpKTtcblx0XHR9LFxuXG5cdFx0cmVzZXQgKCkge1xuXHRcdFx0dGhpcy5zZXQoe1xuXHRcdFx0XHRpbkVkaXQ6IGZhbHNlLFxuXHRcdFx0XHRyZXBlYXQ6IDEsXG5cdFx0XHRcdHJvd3M6IFsge2lkOiAnJywgZGVzY3JpcHRpb246ICcnLCBhbW91bnQ6ICcnIH0gXVxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLnRvZ2dsZUFtb3VudEVycm9yKCk7XG5cdFx0XHR0aGlzLmZpcmUoJ2NoYW5nZScsIHRoaXMuZ2V0RGF0YSgpKTtcblx0XHR9LFxuXG5cdFx0b25pbnB1dCAoKSB7XG5cdFx0XHR0aGlzLnRvZ2dsZUFtb3VudEVycm9yKCk7XG5cdFx0XHR0aGlzLmZpcmUoJ2NoYW5nZScsIHRoaXMuZ2V0RGF0YSgpKTtcblx0XHR9LFxuXG5cdFx0cmVtb3ZlICgpIHtcblx0XHRcdHRoaXMuZmlyZSgncmVtb3ZlJywgeyBpZDogdGhpcy5nZXQoKS5yb3dzWzBdLmlkIH0pO1xuXHRcdFx0dGhpcy5yZXNldCgpO1xuXHRcdH0sXG5cblx0XHRvbnN1Ym1pdCAoZSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Y29uc3QgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpO1xuXHRcdFx0aWYgKCFkYXRhWzBdLmFtb3VudCkge1xuXHRcdFx0XHR0aGlzLnRvZ2dsZUFtb3VudEVycm9yKCdQbGVhc2UgZW50ZXIgYW1vdW50Jyk7XG5cdFx0XHRcdHJldHVybiB0aGlzLmZpcmUoJ2Vycm9yJywgJ1BsZWFzZSBlbnRlciBhbW91bnQnKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuZmlyZSgnc3VibWl0JywgZGF0YSk7XG5cdFx0XHR0aGlzLnJlc2V0KCk7XG5cdFx0fSxcblxuXHRcdG9ua2V5ZG93biAoZSkge1xuXHRcdFx0aWYgKHV0aWwuaXNBbGxvd2VkS2V5KGUpKSByZXR1cm4gdHJ1ZTtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR9LFxuXG5cdFx0dG9nZ2xlQW1vdW50RXJyb3IgKGVycikge1xuXHRcdFx0dGhpcy5yZWZzLmZvcm0ucXVlcnlTZWxlY3RvcignLmFtb3VudCcpLnNldEN1c3RvbVZhbGlkaXR5KGVyciB8fCAnJyk7XG5cdFx0fVxuXHR9XG59O1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvZm9ybS9pbmRleC5odG1sIiwiXG5mdW5jdGlvbiBwYXJzZUFtb3VudCAoYW1vdW50KSB7XG5cdC8qIGVzbGludCBuby1ldmFsOiAwICovXG5cdGFtb3VudCA9ICgnJyArIGFtb3VudCkucmVwbGFjZSgvXFxzL2csICcnKTtcblx0aWYgKCEoL15bK1xcLVxcXFwqLygpXFxkLl0rJC9pKS50ZXN0KGFtb3VudCkpIHJldHVybiAwO1xuXHRpZiAoKC9bK1xcLVxcXFwqLy5dKy9pKS50ZXN0KGFtb3VudCkpIHtcblx0XHR0cnkgeyBhbW91bnQgPSBldmFsKGFtb3VudCk7IH1cblx0XHRjYXRjaCAoZSkgeyBhbW91bnQgPSAwOyB9XG5cdH1cblx0bGV0IG51bSA9IHBhcnNlRmxvYXQoYW1vdW50KTtcblx0aWYgKG51bSA9PT0gSW5maW5pdHkgfHwgaXNOYU4obnVtKSB8fCBudW0gPCAwKSBudW0gPSAnZXJyb3InO1xuXHRyZXR1cm4gbnVtO1xufVxuXG4vLyB5eXl5LW1tXG5mdW5jdGlvbiBnZXRTdHJEYXRlICh5LCBtKSB7XG5cdHJldHVybiBgJHt5fS0keygnMCcgKyBtKS5zdWJzdHIoLTIpfWA7XG59XG5cblxuZnVuY3Rpb24gcGFyc2VEYXRlU3RyIChkYXRlU3RyKSB7XG5cdGxldCBbeWVhciwgbW9udGhdID0gZGF0ZVN0ci5zcGxpdCgnLScpO1xuXHR5ZWFyID0gcGFyc2VJbnQoeWVhciwgMTApO1xuXHRtb250aCA9IHBhcnNlSW50KG1vbnRoLCAxMCk7XG5cdGNvbnN0IHN0ciA9IGdldFN0ckRhdGUoeWVhciwgbW9udGgpO1xuXHRyZXR1cm4geyB5ZWFyLCBtb250aCwgc3RyIH07XG59XG5cblxuZnVuY3Rpb24gZGVlcENvcHlBcnJheSAoYXJyKSB7XG5cdHJldHVybiBhcnIubWFwKG8gPT4gT2JqZWN0LmFzc2lnbih7fSwgbykpO1xufVxuXG5cbmZ1bmN0aW9uIGFkZE1vbnRoc1RvRGF0ZSAoZGF0ZSwgbW9udGhEaWZmKSB7XG5cdGNvbnN0IGRhdGVPYmogPSBwYXJzZURhdGVTdHIoZGF0ZSk7XG5cdGxldCB5ZWFyID0gZGF0ZU9iai55ZWFyO1xuXHRsZXQgbW9udGggPSBkYXRlT2JqLm1vbnRoICsgbW9udGhEaWZmO1xuXHRpZiAobW9udGggPj0gMTMpIHtcblx0XHR5ZWFyID0geWVhciArIE1hdGguZmxvb3IobW9udGggLyAxMik7XG5cdFx0bW9udGggPSAobW9udGggJSAxMikgKyAxO1xuXHR9XG5cdHJldHVybiBnZXRTdHJEYXRlKHllYXIsIG1vbnRoKTtcbn1cblxuXG5mdW5jdGlvbiBjbG9uZUVudHJpZXMgKGVudHJpZXMsIG1vbnRoRGlmZikge1xuXHRyZXR1cm4gZGVlcENvcHlBcnJheShlbnRyaWVzKS5tYXAoaXRlbSA9PiB7XG5cdFx0aXRlbS5kYXRlID0gYWRkTW9udGhzVG9EYXRlKGl0ZW0uZGF0ZSwgbW9udGhEaWZmKTtcblx0XHRyZXR1cm4gaXRlbTtcblx0fSk7XG59XG5cblxuZnVuY3Rpb24gcmVwZWF0RW50cmllcyAoZW50cmllcywgcmVwZWF0ZXIpIHtcblx0aWYgKCFyZXBlYXRlciB8fCByZXBlYXRlciA9PT0gMSkgcmV0dXJuIGVudHJpZXM7XG5cblx0Y29uc3Qgb3JpZ2luYWxFbnRyaWVzID0gZGVlcENvcHlBcnJheShlbnRyaWVzKTtcblx0Zm9yIChsZXQgaSA9IDE7IGkgPCByZXBlYXRlcjsgaSsrKSB7XG5cdFx0Y29uc3QgbmV3Um93cyA9IGNsb25lRW50cmllcyhvcmlnaW5hbEVudHJpZXMsIGkpO1xuXHRcdGVudHJpZXMgPSBlbnRyaWVzLmNvbmNhdChuZXdSb3dzKTtcblx0fVxuXHRyZXR1cm4gZW50cmllcztcbn1cblxuXG5mdW5jdGlvbiBpc0FsbG93ZWRLZXkgKGUpIHtcblx0Y29uc3QgYWxsb3dlZFJlZyA9IC9eWygpXFxkLyorLV17MX0kLztcblx0Y29uc3QgYWxsb3dlZEtleXMgPSBbJ0VudGVyJywgJ1RhYicsICdCYWNrc3BhY2UnLCAnRGVsZXRlJywgJ0Fycm93TGVmdCcsICdBcnJvd1JpZ2h0JywgJy4nXTtcblxuXHRpZiAoYWxsb3dlZEtleXMuaW5kZXhPZihlLmtleSkgPiAtMSkgcmV0dXJuIHRydWU7XG5cdGlmIChlLm1ldGFLZXkgfHwgZS5jdHJsS2V5KSByZXR1cm4gdHJ1ZTtcblx0aWYgKGUua2V5Lmxlbmd0aCA8IDMgJiYgYWxsb3dlZFJlZy50ZXN0KGUua2V5KSkgcmV0dXJuIHRydWU7XG5cdHJldHVybiBmYWxzZTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHBhcnNlRGF0ZVN0cixcblx0cGFyc2VBbW91bnQsXG5cdHJlcGVhdEVudHJpZXMsXG5cdGRlZXBDb3B5QXJyYXksXG5cdGlzQWxsb3dlZEtleSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvZm9ybS91dGlsLmpzIiwiPGRpdiBjbGFzcz1cInRhYmxlXCIgcmVmOnRhYmxlPlxuXHR7I2lmIGRhdGEgJiYgZGF0YS5sZW5ndGh9XG5cdFx0PHRhYmxlPlxuXHRcdDx0aGVhZD48dHI+XG5cdFx0XHQ8dGQgY2xhc3M9XCJkYXRlXCI+RGF0ZTwvdGQ+XG5cdFx0XHQ8dGQgY2xhc3M9XCJkZXNjXCI+RGVzY3JpcHRpb248L3RkPlxuXHRcdFx0PHRkIGNsYXNzPVwiYW1vdW50XCI+QW1vdW50PC90ZD5cblx0XHQ8L3RyPjwvdGhlYWQ+XG5cdFx0PHRib2R5PlxuXHRcdFx0eyNpZiBmaWx0ZXJlZERhdGEgJiYgZmlsdGVyZWREYXRhLmxlbmd0aH1cblx0XHRcdHsjZWFjaCBmaWx0ZXJlZERhdGEgYXMgaXRlbSwgaWR4fVxuXHRcdFx0XHQ8dHIgb246Y2xpY2s9XCJvblJvd0NsaWNrKGl0ZW0pXCI+XG5cdFx0XHRcdFx0PHRkPntpdGVtLmRhdGUuc3Vic3RyKDAsIDcpfTwvdGQ+XG5cdFx0XHRcdFx0PHRkIGNsYXNzPVwiZGVzY1wiPntpdGVtLmdyb3VwLm5hbWV9IC0ge2l0ZW0uZGVzY3JpcHRpb259PC90ZD5cblx0XHRcdFx0XHQ8dGQgY2xhc3M9XCJhbW91bnRcIj57Zm9ybWF0TnVtYmVyKGl0ZW0uYW1vdW50KX08L3RkPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0ey9lYWNofVxuXHRcdFx0ezplbHNlfVxuXHRcdFx0XHQ8dHIgY2xhc3M9XCJlbXB0eS1yb3dcIj5cblx0XHRcdFx0XHQ8dGQgY29sc3Bhbj1cIjNcIj5ObyByZXN1bHRzPC90ZD5cblx0XHRcdFx0PC90cj5cblx0XHRcdHsvaWZ9XG5cdFx0PC90Ym9keT5cblx0XHQ8dGZvb3Q+PHRyPlxuXHRcdFx0PHRkIGNvbHNwYW49XCIyXCIgY2xhc3M9XCJ0YWJsZS1maWx0ZXItY2VsbFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGFibGUtZmlsdGVyLWNlbGwtaW5uZXJcIj5cblx0XHRcdFx0XHQ8aSBjbGFzcz1cImlvbi1tZC1zZWFyY2hcIj48L2k+XG5cdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwidGFibGUtZmlsdGVyXCIgdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiRmlsdGVyXCJcblx0XHRcdFx0XHRiaW5kOnZhbHVlPVwiZmlsdGVyXCJcblx0XHRcdFx0XHRvbjprZXlkb3duPVwib25GaWx0ZXJLZXlEb3duKGV2ZW50KVwiPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvdGQ+XG5cdFx0XHQ8dGQgY2xhc3M9XCJhbW91bnRcIj57Zm9ybWF0TnVtYmVyKHRvdGFsKX08L3RkPlxuXHRcdDwvdHI+PC90Zm9vdD5cblx0XHQ8L3RhYmxlPlxuXHR7L2lmfVxuPC9kaXY+XG5cblxuPHNjcmlwdD5cblxuZnVuY3Rpb24gZm9ybWF0TnVtYmVyIChudW0pIHtcblx0bnVtID0gTWF0aC5yb3VuZCgwICsgbnVtICogMTAwKSAvIDEwMDtcblx0cmV0dXJuIG51bS50b0xvY2FsZVN0cmluZygnZW4tR0InLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhdGEgKCkge1xuXHRcdHJldHVybiB7IGRhdGE6IFtdLCBmaWx0ZXI6ICcnIH07XG5cdH0sXG5cdGhlbHBlcnM6IHtcblx0XHRmb3JtYXROdW1iZXJcblx0fSxcblx0Y29tcHV0ZWQ6IHtcblx0XHRmaWx0ZXJlZERhdGEgKHtkYXRhLCBmaWx0ZXJ9KSB7XG5cdFx0XHRpZiAoIWZpbHRlcikgcmV0dXJuIGRhdGE7XG5cdFx0XHRmaWx0ZXIgPSBmaWx0ZXIudG9Mb3dlckNhc2UoKTtcblx0XHRcdHJldHVybiBkYXRhLmZpbHRlcihpdGVtID0+IHtcblx0XHRcdFx0bGV0IHMgPSBpdGVtLmRlc2NyaXB0aW9uICsgaXRlbS5hbW91bnQgKyBpdGVtLmRhdGU7XG5cdFx0XHRcdGlmIChpdGVtLmdyb3VwKSB7XG5cdFx0XHRcdFx0cyArPSAoaXRlbS5ncm91cC5uYW1lIHx8ICcnKTtcblx0XHRcdFx0XHRpZiAoaXRlbS5ncm91cC5jYXRlZ29yeSkgcyArPSAoaXRlbS5ncm91cC5jYXRlZ29yeS5uYW1lIHx8ICcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gKHMudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlcikgPiAtMSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdHRvdGFsICh7ZmlsdGVyZWREYXRhfSkgeyByZXR1cm4gZmlsdGVyZWREYXRhLnJlZHVjZSgocCwgYykgPT4gcCArIGMuYW1vdW50LCAwKTsgfVxuXHR9LFxuXHRvbmNyZWF0ZSAoKSB7XG5cdH0sXG5cblx0bWV0aG9kczoge1xuXHRcdG9uRmlsdGVyS2V5RG93biAoZSkge1xuXHRcdFx0aWYgKGUua2V5ID09PSAnRXNjYXBlJykgdGhpcy5zZXQoeyBmaWx0ZXI6ICcnIH0pO1xuXHRcdH0sXG5cdFx0b25Sb3dDbGljayAoaXRlbSkge1xuXHRcdFx0dGhpcy5maXJlKCdjbGljaycsIGl0ZW0pO1xuXHRcdH1cblx0fVxufTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3RhYmxlL2luZGV4Lmh0bWwiLCJmdW5jdGlvbiByZXEgKHVybCwgbWV0aG9kID0gJ0dFVCcsIHBhcmFtcykge1xuXHRjb25zdCBvcHRzID0ge1xuXHRcdG1ldGhvZDogbWV0aG9kLFxuXHRcdGhlYWRlcnM6IHsgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuXHRcdGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG5cdH07XG5cdGlmIChwYXJhbXMpIG9wdHMuYm9keSA9IEpTT04uc3RyaW5naWZ5KHBhcmFtcyk7XG5cdHJldHVybiBmZXRjaChgYXBpLyR7dXJsfWAsIG9wdHMpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xufVxuXG5jb25zdCBnZXQgPSB1cmwgPT4gcmVxKHVybCk7XG5jb25zdCBwb3N0ID0gKHVybCwgcGFyYW1zKSA9PiByZXEodXJsLCAnUE9TVCcsIHBhcmFtcyk7XG5jb25zdCBwdXQgPSAodXJsLCBwYXJhbXMpID0+IHJlcSh1cmwsICdQVVQnLCBwYXJhbXMpO1xuLy8gY29uc3QgZGVsID0gKHVybCwgcGFyYW1zKSA9PiByZXEodXJsLCAnREVMRVRFJywgcGFyYW1zKTtcblxuXG5jb25zdCBDYXRlZ29yaWVzID0ge1xuXHRnZXQ6ICgpID0+IGdldCgnY2F0ZWdvcmllcycpLFxufTtcblxuY29uc3QgRXhwZW5zZXMgPSB7XG5cdGdldDogKGRhdGUgPSAnJykgPT4gZ2V0KGBlbnRyaWVzP2RhdGU9JHtkYXRlfWApLFxuXHRzYXZlOiBkYXRhID0+IHtcblx0XHRpZiAoZGF0YS5sZW5ndGggPT09IDEgJiYgZGF0YVswXS5pZCkgcmV0dXJuIHB1dCgnZW50cmllcycsIGRhdGEpO1xuXHRcdHJldHVybiBwb3N0KCdlbnRyaWVzJywgZGF0YSk7XG5cdH1cbn07XG5cblxuZXhwb3J0IHtcblx0Q2F0ZWdvcmllcyxcblx0RXhwZW5zZXMsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2RhdGEvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9