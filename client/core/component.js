export default class Component {

	constructor (selector) {
		this.el = document.querySelector(selector);
		this.el.innerHTML = this.template();
		this.events = {};
		this.el.addEventListener('click', this.onClick.bind(this));
		this.init();
	}

	init () {}
	onClick () {}
	template () { return ''; }


	on (type, cb) {
		this.events[type] = this.events[type] || [];
		this.events[type].push(cb);
	}

	fire (type, data) {
		if (!this.events[type]) return;
		this.events[type].forEach(cb => cb({ type, data }));
	}

}
