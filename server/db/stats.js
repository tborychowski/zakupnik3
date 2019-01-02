const {Entry, Category, Op, sequelize} = require('./db');
const Categories = require('./categories');

async function getSums (where, income = false) {
	where['$category.income$'] = income;
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


async function get (year, query) {
	const where = {};
	where.date = {[Op.like]: year + '%'};
	if (query.category) {
		const cat = await Categories.getOne(query.category);
		if (cat && !cat.parent_id) {		// root category - get all subcats
			const subcats = await Categories.getSubcategories(query.category);
			where.category_id = subcats.map(s => s.id);
		}
		else where.category_id = query.category;
	}
	const income = await getSums(where, true);
	const expenses = await getSums(where, false);
	return {income, expenses};
}

module.exports = {
	get,
};
