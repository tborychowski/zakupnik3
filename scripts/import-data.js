#!/usr/bin/env node
/* eslint no-console: 0, no-empty: 0 */

const fs = require('fs');
const {init, Category, Entry} = require('../server/db/db');


const categoriesJson = require('../_stuff/db/categories.json');
const entriesJson = require('../_stuff/db/entries.json');


function removeDB () {
	process.stdout.write('\nRemoving old DB........');
	try { fs.unlinkSync('database.db'); }
	catch(e) {}
	console.log('OK');
	return Promise.resolve();
}

function categories () {
	process.stdout.write('Importing Categories...');
	return Category
		.bulkCreate(categoriesJson)
		.then(() => Category.findAndCountAll())
		.then(res => console.log(`OK (${res.count} categories imported)`))
		.catch(e => console.error(e));
}

function entries () {
	process.stdout.write('Importing Entries......');
	return Entry.bulkCreate(entriesJson)
		.then(() => Entry.findAndCountAll())
		.then(res => console.log(`OK (${res.count} entries imported)`))
		.catch(e => console.error(e.errors[0].message));
}


console.log('\nStarting import...');
removeDB()
	.then(init)
	.then(categories)
	.then(entries)
	.then(() => console.log('\nAll done!'));

