const express = require('express');
const api = express.Router();
const {Model} = require('./db');

const Category = Model('Category', {
	name: { type: String, required: true },
	items: [String]
});



// get all
function get (req, res) {
	return Category
		.find()
		.select({name: true, items: true})
		.sort({ name: 1 })
		.exec((err, items) => {
			if (err) return res.status(500).json(err);
			res.status(200).json(items);
		});
}


// new
function post (req, res) {
	const cat = {name: req.body.name};
	if (req.body.items) cat.items = req.body.items;
	return Category.create(cat)
		.then(item => res.status(200).json(item))
		.catch(e => res.status(500).json(e));
}

// update
function put (req, res) {
	return Category
		.findOneAndUpdate({_id: req.params.id}, req.body, { 'new': true })
		.select({name: true, items: true})
		.then(item => res.status(200).json(item))
		.catch(e => res.status(500).json(e));
}

function del (req, res) {
	return Category.remove({ _id: req.params.id })
		.then(item => res.status(200).json(item))
		.catch(e => res.status(500).json(e));
}


api.route('/:id*?')
	.get(get)
	.post(post)
	.put(put)
	.delete(del);



module.exports = api;
