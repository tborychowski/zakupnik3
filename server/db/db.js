const Sequelize = require('sequelize');
const util = require('../lib/util');
const logger = require('../lib/logger');

// const dbName = (util.isTest ? ':memory:' : 'database.db');
const dbName = (util.isTest ? 'database-test.db' : 'database.db');
const sequelize = new Sequelize(`sqlite:${dbName}`, {
	define: { timestamps: false, underscored: true },
	operatorsAliases: false,
	logging: s => logger.debug(`DB: ${s}\n`)
});

// console.log('\n\n\n\n*************************** APP STARTING ***************************\n\n');
sequelize.authenticate()
	.then(() => logger.info('Connected to the database: ' + dbName))
	.catch(err => logger.error('Unable to connect to the database:', err));


const Category = sequelize.define('category', {
	id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
	name: { type: Sequelize.TEXT, allowNull: false },
	tags: { type: Sequelize.TEXT, allowNull: false, defaultValue: '' },	// comma separated
	parent_id: { type: Sequelize.INTEGER, allowNull: true },
	income: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
});


const Entry = sequelize.define('entry', {
	id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
	date: { type: Sequelize.TEXT, allowNull: false },
	amount: { type: Sequelize.REAL, allowNull: false },
	description: { type: Sequelize.TEXT, defaultValue: '' },
});

Category.hasMany(Entry);
Entry.belongsTo(Category);


const init = () => sequelize.sync();

init();


module.exports = {
	init,
	Category,
	Entry,
	Op: Sequelize.Op,
	sequelize,
};
