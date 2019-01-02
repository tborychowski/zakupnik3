const deepCopyArray = arr => arr.map(o => Object.assign({}, o));


// yyyy-mm-dd
function getStrDate (y, m) {
	m = ('0' + m).substr(-2);
	const d = new Date().toISOString().substr(8, 2);
	return `${y}-${m}-${d}`;
}

function parseDateStr (dateStr) {
	let [year, month] = dateStr.split('-');
	year = parseInt(year, 10);
	month = parseInt(month, 10);
	const str = getStrDate(year, month);
	return { year, month, str };
}

function addMonthsToDate (date, monthDiff) {
	const dateObj = parseDateStr(date);
	let year = dateObj.year;
	let month = dateObj.month + monthDiff;
	if (month >= 13) {
		year = year + Math.floor(month / 12);
		month = (month % 12);
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




function parseAmount (amount) {
	/* eslint no-eval: 0 */
	amount = ('' + amount).replace(/\s/g, '');
	if (!(/^[+\-\\*/()\d.]+$/i).test(amount)) return 0;
	if ((/[+\-\\*/.]+/i).test(amount)) {
		try { amount = eval(amount); }
		catch (e) { amount = 0; }
	}
	let num = parseFloat(amount);
	if (num === Infinity || isNaN(num)) num = 'error';
	return num;
}


function findCategory (s, categories) {
	s = s.toLowerCase();
	for (let g of categories) {
		if (s.match(g._name)) {
			s = s.replace(g._name, '');
			return [g, s];
		}
	}
	const words = s.split(' ').filter(w => w.length);
	for (let w of words) {
		for (let g of categories) {
			const tags = g.tags.split(/\s*,\s*/);
			for (let k of tags) {
				if (k.startsWith(w)) return [g, s];
			}
		}
	}
	return [{}, s];
}


function findAmount (s) {
	let amount, probability = 0;
	s = s.replace(/\s+([+-/*()])\s+/g, '$1');	// remove spaces around ops
	const words = s.split(' ');
	for (let w of words) {
		if (w.match(/^-?\d+$/) && probability <= 8) {
			amount = w;
			probability = 8;
		}
		else if (w.match(/^-?\d+\.\d+$/) && probability <= 9) {
			amount = w;
			probability = 9;
		}
		else if (w.match(/^[-?\d.()+-/*]+$/)) {
			amount = w;
			probability = 10;
			break;
		}
	}
	s = s.replace(amount, '');
	amount = parseAmount(amount);
	return [amount, s];
}


function parseCategories (categories = []) {
	return categories.map(g => {
		const escaped = g.name.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
		g._name = new RegExp(escaped, 'i');
		return g;
	});
}



function parse (val, categories, date) {
	let repeat = 1;
	categories = parseCategories(categories);
	const rows = val
		.split('\n')
		.map(row => {
			if (row.toLowerCase().includes('repeat')) {
				const m = row.match(/\d{1,2}/);
				if (m && m.length) {
					repeat = parseInt(m[0], 10);
					return {};
				}
			}
			let category, amount, description;
			[category, row] = findCategory(row, categories);
			[amount, row] = findAmount(row);
			description = row.trim();
			return {amount, description, category_id: category.id, category};
		})
		.filter(row => row.amount !== '' && row.category_id);

	if (!rows.length) return [];

	rows.forEach(r => (r.date = date));

	let sum = 0;
	for (let i = 1; i < rows.length; i++) sum += rows[i].amount;
	rows[0].amount -= sum;

	return repeatEntries(rows, repeat);
}



export default {
	parse
};
