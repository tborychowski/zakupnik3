const Sequelize = require('sequelize');
const dottie = require('dottie');


const dbName = (process.env.NODE_ENV === 'test' ? ':memory:' : 'database.db');
const sequelize = new Sequelize(`sqlite:${dbName}`, {
	define: { timestamps: false, underscored: true },
	logging: false
});


// sequelize.authenticate()
// 	.then(() => console.log('Connected to the database: ' + dbName))
// 	.catch(err => console.error('Unable to connect to the database:', err));


const Category = sequelize.define('category', {
	id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
	name: { type: Sequelize.TEXT, allowNull: false },
	parent_id: { type: Sequelize.INTEGER, field: 'parent_id', allowNull: false }
});
// Category.hasMany(Category, {foreignKey: 'parent_id'});



const Entry = sequelize.define('entry', {
	id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
	date: { type: Sequelize.TEXT, allowNull: false },
	amount: { type: Sequelize.FLOAT, allowNull: false },
	description: { type: Sequelize.TEXT },
});
Entry.belongsTo(Category);


function raw (query) {
	return sequelize
		.query(query)
		.spread(results => results)
		.then(dottie.transform); // built-in "nest" doesn't do it right
}


sequelize.sync();

module.exports = {
	Category,
	Entry,
	raw,
	Op: Sequelize.Op
};
