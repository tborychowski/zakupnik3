const {Category, Entry, init} = require('../../server/db/db');

const category = {
	id: 1,
	name: 'Category 1',
};

const subcategory = {
	id: 2,
	name: 'Subcategory 1',
	parent_id: 1
};


const entry = {
	id: 1,
	category_id: 2,
	date: '2018-01-01',
	description: 'Entry 1',
	amount: 100,
};


function seed () {
	return init()
		.then(() => Category.create(category))
		.then(() => Category.create(subcategory))
		.then(() => Entry.create(entry));
}

function unseed () {
	return init()
		.then(() => Category.destroy({ where: {} }))
		.then(() => Entry.destroy({ where: {} }));
}

module.exports = {
	category,
	entry,
	seed,
	unseed,
};
