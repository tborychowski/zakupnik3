const {Entry, Category, Op} = require('./db');


function getOne (id) {
	return Entry.findByPk(id, { raw: true });
}

function get (query) {
	const where = {};
	if (query.date) where.date = {[Op.like]: query.date + '%'};
	if (query.category) where.category_id = query.category;
	if (query.key) where.tags = {[Op.like]: `%${query.key}%`};

	return Entry.findAll({
		order: [['id', 'DESC'], ['date', 'DESC']],
		where,
		include: Category,
	});
}

function getSumsByDate (date) {
	return Entry.sum('amount', {
		plain: false,
		where: { date: {[Op.like]: date + '%'} },
		group: 'category_id',
		attributes: ['category_id'],
		raw: true
	});
}

// add new
function post (data) {
	const createFn = Array.isArray(data) ? 'bulkCreate' : 'create';
	return Entry[createFn](data);
}

// update
function put (id, data) {
	return Entry.update(data, { where: { id } });
}

// delete
function del (id) {
	return Entry.destroy({ where: { id } });
}


module.exports = {
	getOne,
	get,
	getSumsByDate,
	post,
	put,
	del
};
