const {Category} = require('./db');
const Entries = require('./entries');


function getOne (id) {
	return Category.findByPk(id);
}

function get () {
	return Category.findAll({ order: ['name'] });
}

async function getWithAmounts (query) {
	const entries = await Entries.getSumsByDate(query.date);
	const categories = await Category.findAll({ order: ['name'] });
	const cats = JSON.parse(JSON.stringify(categories));

	// calc amounts per category
	const amounts = {};
	entries.forEach(e => {
		if (e.category_id) amounts[e.category_id] = e.sum;
	});

	// assign sums to categories
	cats.forEach(cat => {
		cat.sum = amounts[cat.id] || 0;
	});

	// calc sums for main categories
	let total = 0;
	cats.forEach(cat => {
		if (cat.parent_id) return;
		cats.forEach(subcat => {
			if (subcat.parent_id === cat.id) cat.sum += subcat.sum;
		});
		total += cat.sum;
	});

	// calc percents
	cats.forEach(cat => {
		cat.percent = Math.round(cat.sum / total * 100);
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
	post,
	put,
	del
};
