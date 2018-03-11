const express = require('express');
const api = express.Router();


api.get('/', (req, res) => {
	res.send('Hello from APIv1 root route.');
});


api.get('/users', (req, res) => {
	res.send('List of APIv1 users.');
});


module.exports = api;
