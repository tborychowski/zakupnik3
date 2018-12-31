const Sequelize = require('sequelize');
const util = require('../lib/util');

// const dbName = (util.isTest ? ':memory:' : 'database.db');
const dbName = (util.isTest ? 'database-test.db' : 'database.db');
const sequelize = new Sequelize(`sqlite:${dbName}`, {
	define: { timestamps: false, underscored: true },
	operatorsAliases: false,
	// logging: s => console.log(`${s}\n`)
	logging: false
});

// console.log('\n\n\n\n*************************** APP STARTING ***************************\n\n');
// sequelize.authenticate()
// 	.then(() => console.log('Connected to the database: ' + dbName))
// 	.catch(err => console.error('Unable to connect to the database:', err));


const Category = sequelize.define('category', {
	id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
	name: { type: Sequelize.TEXT, allowNull: false },
	tags: { type: Sequelize.TEXT, allowNull: false, defaultValue: '' },	// comma separated
	parent_id: { type: Sequelize.INTEGER, allowNull: true },
});


const Entry = sequelize.define('entry', {
	id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
	date: { type: Sequelize.TEXT, allowNull: false },
	amount: { type: Sequelize.REAL, allowNull: false },
	description: { type: Sequelize.TEXT, defaultValue: '' },
});

Category.hasMany(Entry);
Entry.belongsTo(Category);

/**
 * Raw sql query
 * @deprecated to be removed if not used
 * @param {string} query
 */
function raw (query) {
	const dottie = require('dottie');
	return sequelize
		.query(query)
		.spread(results => results)
		.then(dottie.transform); // built-in "nest" doesn't do it right
}

const init = () => sequelize.sync();

init();


module.exports = {
	init,
	Category,
	Entry,
	raw,
	Op: Sequelize.Op,
	sequelize,
};
