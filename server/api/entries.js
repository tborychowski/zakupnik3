const express = require('express');
const api = express.Router();
const {Entry, raw} = require('./db');



function getOne (req, res) {
	return Entry
		.findById(req.params.id)
		.then(item => res.status(200).json(item))
		.catch(e => res.status(500).json(e));
}


function get (req, res) {
	if (req.params.id) return getOne(req, res);

	let where = '';
	if (req.query.date) where = `WHERE entry.date LIKE "${req.query.date}%"`;

	const q = `SELECT entry.id, entry.date, entry.amount, entry.description,
		entry.category_id AS 'category.id',
		cat.name AS 'category.name',
		parent_cat.id AS 'parent_category.id',
		parent_cat.name AS 'parent_category.name'
		FROM entries AS entry
		LEFT OUTER JOIN categories AS cat ON entry.category_id = cat.id
		LEFT OUTER JOIN categories AS parent_cat ON cat.parent_id = parent_cat.id
		${where} ORDER BY entry.date DESC`;

	return raw(q)
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
