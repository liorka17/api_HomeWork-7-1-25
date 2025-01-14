const express = require('express');
const ordrouter = express.Router();
const { getAll, getById, addNew, updateById, deleteById } = require('../controllers/orders');

ordrouter.get('/', getAll);
ordrouter.get('/:id', getById);
ordrouter.post('/', addNew);
ordrouter.put('/:id', updateById);
ordrouter.delete('/:id', deleteById);

module.exports = ordrouter;
