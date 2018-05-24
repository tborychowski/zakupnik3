const {Category, Group} = require('./db');
const Entries = require('./entries');


function getOne (id) {
	return Category.findById(id);
}

function get () {
	return Category.findAll({ order: ['name'], include: Group });
}

async function getWithAmounts (query) {
	const entries = await Entries.getSumsByDate(query.date);
	const categories = await Category.findAll({ order: ['name'], include: Group });
	const cats = JSON.parse(JSON.stringify(categories));

	const groupAmounts = {};
	entries.forEach(e => {
		if (e.group_id) groupAmounts[e.group_id] = e.sum;
	});

	cats.forEach(cat => {
		let sum = 0;
		if (cat.groups) cat.groups.forEach(g => {
			g.sum = groupAmounts[g.id] || 0;
			sum += g.sum;
		});
		cat.sum = sum;
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
