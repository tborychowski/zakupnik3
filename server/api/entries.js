const express = require('express');
const api = express.Router();
const {Entry, Group, Category, Op} = require('../lib/db');


function getOne (req, res) {
	return Entry
		.findById(req.params.id)
		.then(item => res.status(200).json(item))
		.catch(e => res.status(500).json(e));
}

function get (req, res) {
	if (req.params.id) return getOne(req, res);
	const where = {};
	if (req.query.date) where.date = {[Op.like]: req.query.date + '%'};
	if (req.query.group) where.group_id = req.query.group;
	if (req.query.category) where['$group.category_id$'] = req.query.category;

	return Entry
		.findAll({
			order: [['date', 'DESC']],
			where,
			include: { model: Group, include: Category }
		})
		.then(items => res.status(200).json(items))
		.catch(e => res.status(500).json(e));
}

// add new
function post (req, res) {
	return Entry.create(req.body)
		.then(item => res.status(200).json(item))
		.catch(e => res.status(500).json(e));
}

// update
function put (req, res) {
	return Entry
		.update(req.body, { where: { id: req.params.id } })
		.then(result => res.status(200).json({ updated: result[0] }))
		.catch(e => res.status(500).json(e));
}

// delete
function del (req, res) {
	return Entry.destroy({ where: { id: req.params.id } })
		.then(count => res.status(200).json({ deleted: count }))
		.catch(e => res.status(500).json(e));
}

api.route('/:id*?')
	.get(get)
	.post(post)
	.put(put)
	.delete(del);

module.exports = api;
