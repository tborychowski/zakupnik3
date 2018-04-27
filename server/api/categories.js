const express = require('express');
const api = express.Router();
const {Category, Group} = require('./db');


function getOne (req, res) {
	return Category
		.findById(req.params.id)
		.then(item => res.status(200).json(item))
		.catch(e => res.status(500).json(e));
}

function get (req, res) {
	if (req.params.id) return getOne(req, res);
	return Category
		.findAll({ order: ['name'], include: Group })		// include: [{ model: Group }]
		.then(items => res.status(200).json(items))
		.catch(e => res.status(500).json(e));
}

// new category
function post (req, res) {
	return Category.create(req.body)
		.then(item => res.status(200).json(item))
		.catch(e => res.status(500).json(e.errors));
}

// update
function put (req, res) {
	return Category
		.update(req.body, { where: { id: req.params.id } })
		.then(result => res.status(200).json({ updated: result[0] }))
		.catch(e => res.status(500).json(e));
}

function del (req, res) {
	return Category.destroy({ where: { id: req.params.id } })
		.then(count => res.status(200).json({ deleted: count }))
		.catch(e => res.status(500).json(e));
}

api.route('/:id*?')
	.get(get)
	.post(post)
	.put(put)
	.delete(del);

module.exports = api;
