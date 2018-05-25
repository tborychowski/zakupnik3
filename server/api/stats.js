const express = require('express');
const api = express.Router();
const DB = require('../db/stats');


function get (req, res) {
	return DB
		.get(req.params.year, req.query)
		.then(items => {
			const ar = [];
			items.forEach(item => {
				const m = parseInt(item.month, 10) - 1;
				ar[m] = item.sum;
			});
			for (let i = 0, l = ar.length; i < l; i++) ar[i] = ar[i] || 0;
			return ar;
		})
		.then(items => res.status(200).json(items))
		.catch(e => res.status(500).json(e));
}


api.get('/:year', get);

module.exports = api;
