// const express = require('express');
// const api = express.Router();
const DB = require('./db');

function get (req, res) {
	const entries = DB.get('entries');
	res.status(200).json(entries);
}

function post (req, res) {

}

function put (req, res) {

}

function del (req, res) {

}


module.exports = {
	get,
	post,
	put,
	del
};
