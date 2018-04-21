const express = require('express');
const api = express.Router();
const {Model} = require('./db');

const Category = Model('Category', {
	name: { type: String, required: true },
	items: []
});


function get (req, res) {
	Category
		.find({})
		.exec((err, items) => {
			if (err) return console.error(err);
			res.status(200).json(items);
		});
}

function post (req, res) {

}

function put (req, res) {

}

function del (req, res) {

}

api.route('/')
	.get(get)
	.post(post)
	.put(put)
	.delete(del);



module.exports = api;
