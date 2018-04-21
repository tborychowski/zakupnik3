const express = require('express');
const api = express.Router();
const {Model} = require('./db');

const Entry = Model('Entry', {
	date: String,			// YYYY-MM
	category: String,
	description: String,
	amount: Number
});


// get one or many
function get (req, res) {
	const params = {};
	if (req.params.id) {
		params._id = req.params.id;
	}
	else if (req.query.date) {
		params.date = { $regex: new RegExp('^' + req.query.date) };
	}
	Entry
		.find(params)
		.sort({ date: -1 })
		.exec((err, items) => {
			if (err) return console.error(err);
			res.status(200).json(items);
		});
}

// add new
function post (req, res) {

}

// update
function put (req, res) {

}

// delete
function del (req, res) {

}



api.route('/')
	.get(get)
	.post(post)
	.put(put)
	.delete(del);


module.exports = api;
