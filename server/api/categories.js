// const express = require('express');
// const api = express.Router();


function tree (req, res) {
	res.status(200).json([ 'category tree' ]);
}

function get (req, res) {
	res.status(200).json([ 'categories' ]);
}

function post (req, res) {

}

function put (req, res) {

}

function del (req, res) {

}


module.exports = {
	tree,
	get,
	post,
	put,
	del
};
