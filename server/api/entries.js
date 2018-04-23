const express = require('express');
const api = express.Router();
const {Model} = require('./db');

const Entry = Model('Entry', {
	date: { type: String, required: true },             // YYYY-MM
	parent_category: { type: String, required: true },
	category: { type: String, required: true },
	description: String,
	amount: { type: Number, required: true }
});


function get (req, res) {
	const params = {};
	if (req.params.id) params._id = req.params.id;
	else {
		const q = req.query;
		if (q.date) params.date = { $regex: new RegExp('^' + q.date) };
		if (q.parent_category) params.parent_category = q.parent_category;
		if (q.category) params.category = q.category;
	}
	Entry
		.find(params)
		.sort({ date: -1 })
		.exec((err, items) => {
			if (err) return res.status(500).json(err);
			res.status(200).json(items);
		});
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
		.findOneAndUpdate({_id: req.params.id}, req.body, { 'new': true })
		.then(item => res.status(200).json(item))
		.catch(e => res.status(500).json(e));
}

// delete
function del (req, res) {
	return Entry.deleteOne({ _id: req.params.id })
		.then(item => res.status(200).json(item))
		.catch(e => res.status(500).json(e));
}



api.route('/:id*?')
	.get(get)
	.post(post)
	.put(put)
	.delete(del);


module.exports = api;
