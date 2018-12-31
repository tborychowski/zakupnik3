#!/usr/bin/env node
/* eslint no-console: 0, no-empty: 0 */

const fs = require('fs');
const SqliteToJson = require('sqlite-to-json');
const sqlite3 = require('sqlite3');
const exporter = new SqliteToJson({
	client: new sqlite3.Database('./_stuff/db/database-old.db')
});

function exportAll () {
	return new Promise((resolve, reject) => {
		exporter.all((err, data) => {
			if (err) return reject(err);
			if (data.sqlite_sequence) delete data.sqlite_sequence;
			resolve(data);
		});
	});
}

function mergeCategories (data) {
	const cats = data.categories;
	for (let group of data.groups) {
		cats.push({
			id: group.id,
			name: group.name,
			tags:  group.keywords,
			parent_id: group.category_id
		});
	}
	data.categories = cats;
	delete data.groups;
	return data;
}

function updateEntries (data) {
	data.entries.forEach(e => {
		e.category_id = e.group_id;
		delete e.group_id;
	});
	return data;
}


function saveFile (data, name) {
	fs.writeFileSync(`./_stuff/db/${name}.json`, JSON.stringify(data[name], null, '\t'), 'utf8');
}

function saveData (data) {
	saveFile(data, 'categories');
	saveFile(data, 'entries');
}

function processData (data) {
	data = mergeCategories(data);
	data = updateEntries(data);
	saveData(data);
	return data;
}


exportAll()
	.then(processData)
	.then(() => console.log('Export done!'));
