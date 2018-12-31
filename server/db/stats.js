const {Entry, Category, Op, sequelize} = require('./db');


function get (year, query) {
	const where = {};
	where.date = {[Op.like]: year + '%'};
	if (query.category) where.category_id = query.category;

	return Entry
		.sum('amount', {
			plain: false,
			raw: true,
			attributes: [
				'date',
				[ sequelize.fn('SUBSTR', sequelize.col('date'), '0', '5'), 'year'],
				[ sequelize.fn('SUBSTR', sequelize.col('date'), '6', '2'), 'month'],
				'category_id',
			],
			include: Category,
			group: 'month',
			where,
			order: [[sequelize.col('month'), 'ASC']],
		});
}

module.exports = {
	get,
};
