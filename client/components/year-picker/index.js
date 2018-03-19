import style from './index.css';
import template from './index.html';

class yearPicker extends HTMLElement {

	constructor () {
		super();
		this.template = document.createElement('template');
		this.template.innerHTML = `<style>${style}</style>${template}`;
		this.templateContent = this.template.content;
	}

	static get is () { return 'year-picker'; }

	static get observedAttributes () { return ['value']; }

	connectedCallback () {
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(this.templateContent.cloneNode(true));
		this.el = this.shadowRoot.querySelector('.year-picker');
		this.inputEl = this.el.querySelector('input');
		this.setAttribute('tabindex', 0);

		this.el.addEventListener('click', this.onClick.bind(this));
		this.inputEl.addEventListener('input', this.onInput.bind(this));
		if (!this.getAttribute('value')) this.value = new Date().getFullYear();
	}

	attributeChangedCallback (name, oldVal, newVal) {
		if (name === 'value') this.update(newVal);
	}


	set value (val) { this.setAttribute('value', val); }

	get value () { return this.getAttribute('value'); }

	update (val) { this.inputEl.value = val; }

	addToValue (val) {
		const value = parseInt(this.value, 10) + val;
		this.value = value;
		this.fireEvent('change', { value });
	}

	onInput () {
		const currentValue = parseInt(this.value, 10);
		const value = parseInt(this.inputEl.value, 10);
		if (currentValue !== value) {
			this.value = value;
			this.fireEvent('change', { value });
		}
	}

	onClick (e) {
		const target = e.target;
		if (target.closest('.prev-year')) return this.addToValue(-1);
		if (target.closest('.next-year')) return this.addToValue(1);
	}

	fireEvent (name, detail) {
		this.dispatchEvent(new CustomEvent(name, { detail }));
	}

}

customElements.define('year-picker', yearPicker);
