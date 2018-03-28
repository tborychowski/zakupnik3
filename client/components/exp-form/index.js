import style from './index.css';
import template from './index.html';

import util from './util.js';
import keys from './keys.js';



class expForm extends HTMLElement {

	constructor () {
		super();
		this.template = document.createElement('template');
		this.template.innerHTML = `<style>${style}</style>${template}`;
		this.templateContent = this.template.content;
	}

	connectedCallback () {
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(this.templateContent.cloneNode(true));
		this.el = this.shadowRoot.querySelector('form');
		this.repeatEl = this.el.querySelector('.repeater');
		this.subforms = this.el.querySelector('.subforms');

		this.el.addEventListener('click', this.onClick.bind(this));
		this.el.addEventListener('submit', this.onSubmit.bind(this));
		this.el.addEventListener('input', this.onFormChange.bind(this));
	}


	get categories () { return this._categories; }
	set categories (categories) { this._categories = categories; }

	get date () { return this._date.str; }
	set date (date) { this._date = util.parseDateStr(date); }


	resetForm () {
		this.el.reset();
		this.el.classList.remove('edit');
		this.subforms.querySelectorAll('.form-row').forEach(row => row.remove());
		this.split();
	}

	init () {
		this.split();
	}

	split (idx = this.subforms.querySelectorAll('.form-row').length) {
		if (idx === 0) this.subforms.innerHTML = util.getRow(this._categories, idx);
		else {
			const desc = this.subforms.querySelector('.form-row:first-child .description').value;
			this.subforms.insertAdjacentHTML('beforeend', util.getRow(this._categories, idx, desc));
		}
		const formEl = this.subforms.querySelector('.form-row:last-child');
		const amountInput = formEl.querySelector('.amount');
		amountInput.addEventListener('keydown', this.onKeyDown.bind(this));
		formEl.querySelector('.category').focus();
	}

	unsplit (row) {
		row.remove();
		this.onFormChange();
	}

	onFormChange () {
		this.fireEvent('change', { data: this.getData() });
	}


	edit (data) {
		this.resetForm();
		this.el.classList.add('edit');
		const row = this.subforms.querySelector('.form-row:first-child');
		row.querySelector('.category').value = data.category_id;
		row.querySelector('.description').value = data.description;
		row.querySelector('.amount').value = data.amount;
		if (data.date) this.date = data.date;
	}

	getRowData (row) {
		const category = row.querySelector('.category').value;
		const description = row.querySelector('.description').value;
		const amount = util.parseAmount(row.querySelector('.amount').value);
		return {category, description, amount, date: this.date };
	}


	getData () {
		const rows = this.subforms.querySelectorAll('.form-row');
		let entries = Array.from(rows).map(this.getRowData.bind(this));

		// subtract other amounts from the first row
		const amounts = entries.map((item, i) => i > 0 ? item.amount : 0);
		const sum = amounts.reduce((a, b) => a + b, 0);	// add all up
		entries[0].amount -= sum;

		// repeat monthly
		const repeater = parseInt(this.repeatEl.value, 10);
		return util.repeatEntries(entries, repeater);
	}


	onSubmit (e) {
		e.preventDefault();
		this.fireEvent('submit', { data: this.getData() });
		this.resetForm();
	}

	onClick (e) {
		const target = e.target;
		if (target.closest('.btn-reset')) return this.resetForm();
		if (target.closest('.btn-cancel')) return this.resetForm();
		if (target.closest('.btn-split')) return this.split();
		if (target.closest('.btn-unsplit')) return this.unsplit(target.closest('.form-row'));
	}


	onKeyDown (e) {
		if (e.key === 'Enter') return true;
		if (keys.isAllowed(e)) return true;
		e.preventDefault();
	}


	fireEvent (name, detail) {
		this.dispatchEvent(new CustomEvent(name, { detail }));
	}

}

customElements.define('exp-form', expForm);
