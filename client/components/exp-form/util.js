
function getOptionHtml (opt) {
	return `<option value="${opt.id}">${opt.name}</option>`;
}

function getGroupHtml (grp) {
	if (!grp.items) return '';
	const options = grp.items.map(getOptionHtml).join('');
	return `<optgroup label="${grp.name}">${options}</optgroup>`;
}


function getRow (categories, idx = 0, description = '') {
	const options = categories.map(getGroupHtml).join('');
	let btns = idx === 0 ?
		'<button type="button" title="Split" class="btn-split"></button>' :
		'<button type="button" title="Remove" class="btn-unsplit"></button>';

	return `<div class="form-row">
		<input type="hidden" name="id">
		<select name="category_id" class="category">${options}</select>
  		<input name="description" class="description" placeholder="description" value="${description}">
		<input name="amount" class="amount" placeholder="0.00">
		${btns}
	</div>`;
}


function parseAmount (amount) {
	/* eslint no-eval: 0 */
	amount = ('' + amount).replace(/\s/g, '');
	if (!(/^[+\-\\*/()\d.]+$/i).test(amount)) return 0;
	if ((/[+\-\\*/.]+/i).test(amount)) {
		try { amount = eval(amount); }
		catch (e) { amount = 0; }
	}
	return parseFloat(amount) || 0;
}

// yyyy-mm
function getStrDate (y, m) {
	return `${y}-${('0' + m).substr(-2)}`;
}


function parseDateStr (dateStr) {
	let [year, month] = dateStr.split('-');
	year = parseInt(year, 10);
	month = parseInt(month, 10);
	const str = getStrDate(year, month);
	return { year, month, str };
}


function deepCopyArray (arr) {
	return arr.map(o => Object.assign({}, o));
}


function addMonthsToDate (date, monthDiff) {
	const dateObj = parseDateStr(date);
	let year = dateObj.year;
	let month = dateObj.month + monthDiff;
	if (month >=13) {
		year = year + Math.floor(month / 12);
		month = (month % 12) + 1;
	}
	return getStrDate(year, month);
}


function cloneEntries (entries, monthDiff) {
	return deepCopyArray(entries).map(item => {
		item.date = addMonthsToDate(item.date, monthDiff);
		return item;
	});
}


function repeatEntries (entries, repeater) {
	if (!repeater || repeater === 1) return entries;

	const originalEntries = deepCopyArray(entries);
	for (let i = 1; i < repeater; i++) {
		const newRows = cloneEntries(originalEntries, i);
		entries = entries.concat(newRows);
	}
	return entries;
}


export default {
	parseDateStr,
	parseAmount,
	getRow,
	repeatEntries,
};
