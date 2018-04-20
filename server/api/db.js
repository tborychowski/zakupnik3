const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'zakupnik';

let client, db;


function connect () {
	if (db) Promise.resolve(db);
	return new Promise((resolve, reject) => {
		MongoClient.connect(url, function (err, _client) {
			if (err) return reject(err);
			client = _client;
			resolve(_client.db(dbName));
		});
	})
}

function disconnect () {
	if (client) client.close();
	client = null;
}


async function getAll (collection, params = {}) {
	return new Promise((resolve, reject) => {
		db.collection(collection)
		.find(params)
		.toArray((err, res) => {
			if (err) return reject(err);
			resolve(res);
		});
	});
}

async function get (collection, params = {}) {
	db = await connect(dbName);
	res = await getAll(collection, params);
	disconnect();
	return res;
}


module.exports = {
	get,
};
