const {Group, Op } = require('./db');


function getOne (id) {
	return Group.findById(id);
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
	get,
	post,
	put,
	del
};
