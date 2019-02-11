const {Category, Entry, init} = require('../server/db/db');
const request = require('supertest');
const app = require('../server');
const expect = require('chai').expect;

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
	get: url => request(app).get(url),
	post: url => request(app).post(url),
	put: url => request(app).put(url),
	del: url => request(app).delete(url),
	expect,
	data: {categories, entries},
	seed,
	unseed,
};
