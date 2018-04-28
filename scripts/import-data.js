#!/usr/bin/env node
const fs = require('fs');
const {init, Category, Group, Entry} = require('../server/lib/db');


const categoriesJson = require('../_stuff/sql-categories.json');
const groupsJson = require('../_stuff/sql-groups.json');
const entriesJson = require('../_stuff/sql-entries.json');


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
		.catch(e => console.error(e.errors[0].message));
}

function groups () {
	process.stdout.write('Importing Groups.......');
	return Group
		.bulkCreate(groupsJson)
		.then(() => Group.findAndCountAll())
		.then(res => console.log(`OK (${res.count} groups imported)`))
		.catch(e => console.error(e.errors[0].message));
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
	.then(groups)
	.then(entries)
	.then(() => console.log('\nAll done!'));

