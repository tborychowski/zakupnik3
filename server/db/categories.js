const {Category} = require('./db');
const Entries = require('./entries');


function getOne (id) {
	return Category.findByPk(id, { raw: true });
}

function get () {
	return Category.findAll({ order: ['name'], raw: true });
}

function getSubcategories (parent_id) {
	return Category.findAll({ where: { parent_id }, raw: true });
}

async function getWithAmounts (query) {
	const entries = await Entries.getSumsByDate(query.date);
	const cats = await Category.findAll({ order: ['name'], raw: true });

	// calc amounts per category
	const amounts = {};
	entries.forEach(e => {
		if (e.category_id) amounts[e.category_id] = (amounts[e.category_id] || 0) + e.sum;
	});

	// assign sums to categories
	cats.forEach(cat => {
		if (cat.income) cat.incomeSum = amounts[cat.id] || 0;
		else cat.sum = amounts[cat.id] || 0;
	});


	// calc sums for main categories
	let total = 0, totalIncome = 0;
	cats.forEach(cat => {
		if (cat.parent_id) return;
		cats.forEach(subcat => {
			if (subcat.parent_id === cat.id) {
				if (subcat.income) cat.incomeSum = (cat.incomeSum || 0) + subcat.incomeSum;
				else cat.sum = (cat.sum || 0) + subcat.sum;
			}
		});
		total += cat.sum || 0;
		totalIncome += cat.incomeSum || 0;
	});

	// calc percents
	cats.forEach(cat => {
		cat.percent = Math.round(cat.sum / total * 100);
		cat.incomePercent = Math.round(cat.incomeSum / totalIncome * 100);
	});
	return cats;
}

// new category
function post (data) {
	return Category.create(data);
}

// update
function put (id, data) {
	return Category.update(data, { where: { id } });
}

function del (id) {
	return Category.destroy({ where: { id } });
}

module.exports = {
	getOne,
	get,
	getWithAmounts,
	getSubcategories,
	post,
	put,
	del
};
