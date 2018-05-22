const {Category, Group} = require('./db');


function getOne (id) {
	return Category.findById(id);
}

function get (req, res) {
	// include: [{ model: Group }]
	return Category.findAll({ order: ['name'], include: Group });
}

// new category
function post (data) {
	return Category.create(data);
}

// update
function put (id, data) {
	return Category.update(data, { where: { id } });
}

function del (id) {
	return Category.destroy({ where: { id } });
}

module.exports = {
	getOne,
	get,
	post,
	put,
	del
};
