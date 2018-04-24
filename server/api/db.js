const mongoose = require('mongoose');

const dbName = (process.env.NODE_ENV === 'test' ? 'zakupnik-test' : 'zakupnik');
mongoose.connect(`mongodb://localhost/${dbName}`, () => console.log(`DB: ${dbName}`));

const db = mongoose.connection;

db.on('error', e => console.error('connection error:', e));
db.once('open', () => console.log('Connected to DB'));


function Model (name, obj) {
	const schema = mongoose.Schema(obj, { versionKey: false });
	return mongoose.model(name, schema);
}



module.exports = {
	db,
	Model,
	Schema: mongoose.Schema,
	ObjectId: mongoose.Types.ObjectId
};
