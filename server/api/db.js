const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/zakupnik');

const db = mongoose.connection;

db.on('error', e => console.error('connection error:', e));
db.once('open', () => console.log('Connected to DB'));


function Model (name, obj) {
	const schema = mongoose.Schema(obj);
	return mongoose.model(name, schema);
}



module.exports = {
	db,
	Model,
};
