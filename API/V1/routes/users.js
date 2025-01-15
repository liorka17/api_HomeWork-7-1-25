const express = require('express');
const userrouter = express.Router();
const { getAll, getById, addNew, updateById, deleteById } = require('../controllers/users');

userrouter.get('/', getAll);
userrouter.get('/:id', getById);
userrouter.post('/', addNew);
userrouter.put('/:id', updateById);
userrouter.delete('/:id', deleteById);

module.exports = userrouter;
