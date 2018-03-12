// const Velocity = require('velocity-animate');

const type = obj => obj ? Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() : 'undefined';
const isNodeList = nodes => (typeof nodes === 'object') &&
		/^(htmlcollection|nodelist|object)$/.test(type(nodes)) &&
		(nodes.length === 0 || (typeof nodes[0] === 'object' && nodes[0].nodeType > 0));


function sizzle (mixed, context) {
	if (!mixed) return [];
	let el;
	if (typeof mixed !== 'string') el = mixed;

	// is html - create new element
	else if (/<[a-z][\s\S]*>/i.test(mixed)) {
		el = (new DOMParser()).parseFromString(mixed, 'text/html').body.firstChild;
	}
	// is selector - find element
	else el = (context || document).querySelectorAll(mixed);

	if (el.nodeType) el = [el];
	else if (isNodeList(el)) el = Array.from(el);

	return Object.assign(el || [], sizzle.fn);
}


sizzle.fn = {};
sizzle.fn.find = function (selector) { return sizzle(selector, this[0]); };
sizzle.fn.first = function () { return sizzle(this[0]); };
sizzle.fn.last = function () { return sizzle(this[this.length - 1]); };
sizzle.fn.eq = function (idx) { return sizzle(this[idx || 0]); };


sizzle.fn.appendTo = function (parent) {
	if (!this || !this.length) return this;
	if (typeof parent === 'string') parent = sizzle(parent);
	else if (!Array.isArray(parent)) parent = [parent];
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
function modElCls (el, action, cls, cond) {
	if (!el || !el.length) return el;
	cls = ('' + cls).split(' ');
	if (typeof cond === 'boolean') {
		el.forEach(e => cls.forEach(c => e.classList[action](c, cond)));
	}
	else el.forEach(e => cls.forEach(c => e.classList[action](c)));
	return el;
}

sizzle.fn.addClass = function (cls) { return modElCls(this, 'add', cls); };
sizzle.fn.removeClass = function (cls) { return modElCls(this, 'remove', cls); };
sizzle.fn.toggleClass = function (cls, cond) { return modElCls(this, 'toggle', cls, cond); };
sizzle.fn.hasClass = function (cls) {
	if (!this || !this.length) return false;
	return this[0].classList.contains(cls);
};

sizzle.fn.toggle = function (cond) {
	return cond ? this.show() : this.hide();
};

sizzle.fn.hide = function () {
	this.forEach(el => { el.style.display = 'none'; });
	return this;
};

sizzle.fn.show = function () {
	this.forEach(el => { el.style.display = 'block'; });
	return this;
};

sizzle.fn.html = function (html) {
	if (!this || !this.length) return this;
	if (typeof html === 'undefined') return this[0].innerHTML;
	this.forEach(el => { el.innerHTML = html; });
	return this;
};

sizzle.fn.text = function (text) {
	if (!this || !this.length) return this;
	if (typeof text === 'undefined') return this[0].innerText;
	this.forEach(el => { el.innerText = text; });
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
	this.forEach(el => { el.setAttribute(attr, value); });
};


function animateElement (from, to, opts) {
	return el => new Promise (resolve => {
		const anim = el.animate([from, to], opts);
		anim.oncancel = resolve;
		anim.onfinish = resolve;
	});
}

sizzle.fn.animate = function (from, to, options = {}) {
	const dflt = {duration: 300, easing: 'ease-out', fill: 'forwards'};
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
