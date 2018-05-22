const {Group, Entry, Op, sequelize } = require('../lib/db');

function last3months () {
	const d = new Date();
	d.setMonth(d.getMonth() - 3);
	return d.toISOString().substr(0, 7);
}


function getOne (id) {
	return Group.findById(id);
}


/**
 * Get groups and count entries (within the last 3 months) as 'freq'
 * can be filtered by 'key'(words) field
 */
function getFreq (query) {
	const where = {};
	if (query.key) where.keywords = {[Op.like]: `%${query.key}%`};
	return Group
		.findAll({
			attributes: [ 'group.*', [sequelize.fn('COUNT', 'entries.id'), 'freq'] ],
			include: { model: Entry, attributes: [], where: { date: { [Op.gt]: last3months() }} },
			group: ['entries.group_id'],
			order: [[sequelize.col('freq'), 'DESC']],
			where,
			raw: true
		});
}


function get (query) {
	const where = {};
	if (query && query.key) where.keywords = {[Op.like]: `%${query.key}%`};
	return Group.findAll({ where, order: [['name', 'ASC']] });
}


// new Group
function post (data) {
	return Group.create(data);
}


// update
function put (id, data) {
	return Group.update(data, { where: { id } });
}


function del (id) {
	return Group.destroy({ where: { id } });
}


module.exports = {
	getOne,
	getFreq,
	get,
	post,
	put,
	del
};
