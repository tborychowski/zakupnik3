const {Entry, Group, Op, sequelize} = require('../lib/db');


function get (year, query) {
	const where = {};
	where.date = {[Op.like]: year + '%'};
	if (query.group) where.group_id = query.group;
	if (query.category) where['$group.category_id$'] = query.category;

	return Entry
		.sum('amount', {
			plain: false,
			raw: true,
			attributes: [
				'date',
				[ sequelize.fn('SUBSTR', sequelize.col('date'), '0', '5'), 'year'],
				[ sequelize.fn('SUBSTR', sequelize.col('date'), '6', '2'), 'month'],
				'group_id',
			],
			include: { model: Group, attributes: ['category_id'] },
			group: 'month',
			where,
			order: [[sequelize.col('month'), 'ASC']],
		});
}

module.exports = {
	get,
};
