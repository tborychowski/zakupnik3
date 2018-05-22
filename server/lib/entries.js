const {Entry, Group, Category, Op} = require('../lib/db');


function getOne (id) {
	return Entry.findById(id);
}

function get (query) {
	const where = {};
	if (query.date) where.date = {[Op.like]: query.date + '%'};
	if (query.group) where.group_id = query.group;
	if (query.category) where['$group.category_id$'] = query.category;

	return Entry.findAll({
		order: [['id', 'DESC'], ['date', 'DESC']],
		where,
		include: { model: Group, include: Category }
	});
}

function getSumsByDate (date) {
	return Entry.sum('amount', {
		plain: false,
		where: { date: {[Op.like]: date + '%'} },
		group: 'entry.group_id',
		attributes: ['group_id']
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
