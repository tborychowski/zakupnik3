require('./index.css');
import {Component} from '../core';
import util from './util.js';
import templates from './templates.js';


export default class ExpForm extends Component {

	init () {
		this.form = this.el.querySelector('form');
		this.repeatEl = this.el.querySelector('.repeater');
		this.subforms = this.el.querySelector('.subforms');

		this.form.addEventListener('submit', this.onSubmit.bind(this));
		this.form.addEventListener('input', this.onFormChange.bind(this));
	}


	template () {
		return templates.form();
	}

	get categories () { return this._categories; }
	set categories (categories) {
		this._categories = categories;
		this.split();
	}

	get date () { return this._date.str; }
	set date (date) { this._date = util.parseDateStr(date); }


	resetForm () {
		this.form.reset();
		this.el.classList.remove('edit');
		this.subforms.querySelectorAll('.form-row').forEach(row => row.remove());
		this.split();
	}

	split (idx = this.subforms.querySelectorAll('.form-row').length) {
		if (idx === 0) this.subforms.innerHTML = templates.row(this._categories, idx);
		else {
			const desc = this.subforms.querySelector('.form-row:first-child .description').value;
			this.subforms.insertAdjacentHTML('beforeend', templates.row(this._categories, idx, desc));
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
		this.trigger('change', this.getData());
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
		const amountEl = row.querySelector('.amount');
		let amount = util.parseAmount(amountEl.value);
		amountEl.setCustomValidity(amount === 'error' ? 'Incorrect formula' : '');
		if (amount === 'error') amount = 0;
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
		this.trigger('submit', this.getData());
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
		if (util.isAllowedKey(e)) return true;
		e.preventDefault();
	}


}
