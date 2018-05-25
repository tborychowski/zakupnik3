const {Category, Group, Entry, init} = require('../../server/db/db');

const category = {
	id: 1,
	name: 'Category 1',
	parent_id: 0,
};

const group = {
	id: 1,
	name: 'Group 1',
	category_id: 1,
};

const entry = {
	id: 1,
	group_id: 1,
	date: '2018-01-01',
	description: 'Entry 1',
	amount: 100,
};


function seed () {
	return init()
		.then(() => Category.create(category))
		.then(() => Group.create(group))
		.then(() => Entry.create(entry));
}

function unseed () {
	return init()
		.then(() => Category.destroy({ where: {} }))
		.then(() => Group.destroy({ where: {} }))
		.then(() => Entry.destroy({ where: {} }));
}

module.exports = {
	category,
	group,
	entry,
	seed,
	unseed,
};
