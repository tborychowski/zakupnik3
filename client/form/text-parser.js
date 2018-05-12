function parseAmount (amount) {
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
}


function findGroup(s, groups) {
	for (let g of groups) {
		if (s.match(g._name)) {
			s = s.replace(g._name, '');
			return [g, s];
		}
	}
	const words = s.split(' ');
	for (let w of words) {
		for (let g of groups) {
			if (g.keywords.indexOf(w) > -1) {
				s = s.replace(w, '');
				return [g, s];
			}
		}
	}
	return [null, s];
}


function findAmount(s) {
	let amount, cer = 0;
	s = s.replace(/\s+([+-/*()])\s+/g, '$1');	// remove spaces around ops
	const words = s.split(' ');
	for (let w of words) {
		if (w.match(/^\d+$/) && cer <= 8) {
			amount = w;
			cer = 8;
		}
		else if (w.match(/^\d+\.\d+$/) && cer <= 9) {
			amount = w;
			cer = 9;
		}
		else if (w.match(/^[\d.()+-/*]+$/)) {
			amount = w;
			cer = 10;
			break;
		}
	}
	s = s.replace(amount, '');
	amount = parseAmount(amount);
	return [amount, s];
}



function parse (val, {date, _groups}) {
	const rows = val
		.split('\n')
		.map(row => {
			let group, amount, description;
			[group, row] = findGroup(row, _groups);
			[amount, row] = findAmount(row);
			description = row.trim();
			return {amount, description, group_id: group.id, group};
		})
		.filter(row => row.amount !== '' && row.group_id);

	if (!rows.length) return;

	rows.forEach(r => (r.date = date));

	let sum = 0;
	for (let i = 1; i < rows.length; i++) sum += rows[i].amount;
	rows[0].amount -= sum;
	return rows;
}



export default {
	parse
};
