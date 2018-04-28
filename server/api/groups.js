const express = require('express');
const api = express.Router();
const {Group, Entry, Op, sequelize } = require('../lib/db');

function last3months () {
	const d = new Date();
	d.setMonth(d.getMonth() - 3);
	return d.toISOString().substr(0, 7);
}


function getOne (req, res) {
	return Group
		.findById(req.params.id)
		.then(item => res.status(200).json(item))
		.catch(e => res.status(500).json(e));
}


/**
 * Get groups and count entries (within the last 3 months) as 'freq'
 * can be filtered by 'key'(words) field
 */
function getFreq (req, res) {
	const where = {};
	if (req.query.key) where.keywords = {[Op.like]: `%${req.query.key}%`};
	return Group
		.findAll({
			attributes: [ 'group.*', [sequelize.fn('COUNT', 'entries.id'), 'freq'] ],
			include: { model: Entry, attributes: [], where: { date: { [Op.gt]: last3months() }} },
			group: ['entries.group_id'],
			order: [[sequelize.col('freq'), 'DESC']],
			where,
			raw: true
		})
		.then(items => res.status(200).json(items))
		.catch(e => res.status(500).json(e));
}


function get (req, res) {
	if (req.params.id) return getOne(req, res);
	if (req.query.freq !== undefined) return getFreq(req, res);
	const where = {};
	if (req.query.key) where.keywords = {[Op.like]: `%${req.query.key}%`};
	return Group
		.findAll({ where, order: [['name', 'ASC']] })
		.then(items => res.status(200).json(items))
		.catch(e => res.status(500).json(e));
}


// new Group
function post (req, res) {
	return Group.create(req.body)
		.then(item => res.status(200).json(item))
		.catch(e => res.status(500).json(e));
}


// update
function put (req, res) {
	return Group
		.update(req.body, { where: { id: req.params.id } })
		.then(result => res.status(200).json({ updated: result[0] }))
		.catch(e => res.status(500).json(e));
}


function del (req, res) {
	return Group.destroy({ where: { id: req.params.id } })
		.then(count => res.status(200).json({ deleted: count }))
		.catch(e => res.status(500).json(e));
}


api.route('/:id*?')
	.get(get)
	.post(post)
	.put(put)
	.delete(del);


module.exports = api;
