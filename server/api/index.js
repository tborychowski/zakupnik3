const express = require('express');
const api = express.Router();

const Entries = require('./entries');
const Categories = require('./categories');


api.get('/entries', Entries.get);
api.post('/entries', Entries.post);
api.put('/entries/:id', Entries.put);
api.delete('/entries/:id', Entries.del);

api.get('/categorytree', Categories.tree);



api.get('/', (req, res) => res.send('Hello from API.'));

module.exports = api;
