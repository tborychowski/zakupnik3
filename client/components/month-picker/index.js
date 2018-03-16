import style from './index.css';
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const btnTemplate = (month, i) => `<button
	class="month month-${month.toLowerCase()} month-${i + 1}"
	data-value="${i + 1}">${month.substr(0, 3)}</button>`;



export default class monthPicker extends HTMLElement {

	constructor () {
		super();
		const template = document.createElement('template');
		template.innerHTML = `<style>${style}</style>${this.template()}`;
		this.templateContent = template.content;
	}

	static get is () { return 'month-picker'; }
	static get observedAttributes () { return ['value']; }

	connectedCallback () {
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(this.templateContent.cloneNode(true));
		this.el = this.shadowRoot.querySelector('.month-picker');
		this.inputEl = this.el.querySelector('input');
		this.setAttribute('tabindex', 0);

		this.el.addEventListener('click', this.onClick.bind(this));
		if (!this.getAttribute('value')) this.value = new Date().getMonth() + 1;
	}

	attributeChangedCallback (name, oldVal, newVal) {
		if (name === 'value') this.update(newVal);
	}


	template () {
		const monthsHtml = months.map(btnTemplate).join('');
		return `<div class="month-picker">${monthsHtml}</div>`;
	}

	set value (value) { this.setAttribute('value', value); }

	get value () { return this.getAttribute('value'); }

	update (value) {
		let selected = this.el.querySelectorAll('.month.selected');
		selected.forEach(btn => btn.classList.remove('selected'));
		selected = this.el.querySelector('.month-' + value);
		if (selected) selected.classList.add('selected');
		this.fireEvent('change', { value: parseInt(value, 10), month: months[value - 1] });
	}

	onClick (e) {
		const target = e.target;

		const monthButton = target.closest('.month');
		if (monthButton) {
			const val = monthButton.dataset.value;
			this.value = val;
		}
	}

	fireEvent (name, detail) {
		this.dispatchEvent(new CustomEvent(name, { detail }));
	}

}
