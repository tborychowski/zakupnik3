const express = require('express');
const api = express.Router();
const DB = require('../lib/stats');


function get (req, res) {
	return DB
		.get(req.params.year, req.query)
		.then(items => items.map(item => item.sum))
		.then(items => res.status(200).json(items))
		.catch(e => res.status(500).json(e));
}


api.get('/:year', get);

module.exports = api;
