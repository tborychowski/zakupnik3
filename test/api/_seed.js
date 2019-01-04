const {Category, Entry, init} = require('../../server/db/db');


const categories = [
	{ id: 1, name: 'Category 1', },
	{ id: 2, name: 'Subcategory 1', parent_id: 1 }
];

const entries = [
	{ id: 1, category_id: 2, date: '2018-01-01', description: 'Entry 1', amount: 100 }
];


function seed () {
	return init()
		.then(() => Category.bulkCreate(categories))
		.then(() => Entry.bulkCreate(entries));
}


function unseed () {
	return init()
		.then(() => Category.destroy({ where: {} }))
		.then(() => Entry.destroy({ where: {} }));
}


module.exports = {
	data: {categories, entries},
	seed,
	unseed,
};
