const user = require('express').Router();
const { Product, Category, User} = require('../db.js');
const { Op } = require('sequelize');

users.post('/', (req, res , next) => {
    const request = req.body

    User.create(request)
      .then((u) => res.send(u))
})

user.put('/:id', (req, res, next) => {
    const { id } = req.params;

    User.findOne({where: {id}})
      .then(u => res.send(u))
      .catch(next);
})

user.get('/', (req, res, next) => {
	User.findAll()
		.then(user => {
			res.send(user);
		})
		.catch(next);
});