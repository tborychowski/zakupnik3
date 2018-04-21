const express = require('express');
const api = express.Router();


api.use('/entries', require('./entries'));
api.use('/categories', require('./categories'));


api.get('/', (req, res) => res.send('Hello from API.'));

module.exports = api;
