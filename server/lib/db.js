const Sequelize = require('sequelize');

const dbName = (process.env.NODE_ENV === 'test' ? ':memory:' : 'database.db');
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
	name: { type: Sequelize.TEXT, allowNull: false, unique: true },
});


const Group = sequelize.define('group', {
	id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
	name: { type: Sequelize.TEXT, allowNull: false },
	keywords: { type: Sequelize.TEXT, allowNull: false, defaultValue: '' },	// comma separated
});
Category.hasMany(Group);
Group.belongsTo(Category);



const Entry = sequelize.define('entry', {
	id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
	date: { type: Sequelize.TEXT, allowNull: false },
	amount: { type: Sequelize.REAL, allowNull: false },
	description: { type: Sequelize.TEXT },
});
Group.hasMany(Entry);
Entry.belongsTo(Group);

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
	Group,
	Entry,
	raw,
	Op: Sequelize.Op,
	sequelize,
};
