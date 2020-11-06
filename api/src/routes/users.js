const user = require('express').Router();
const { Product, Category, User, Order } = require('../db.js');
const { Op } = require('sequelize');

user.post('/', (req, res , next) => {
    const request = req.body

    User.create(request)
      .then((u) => res.send(u))
})

user.post('/:idUser/cart', (req, res, next) => {
    User.findOne({where: {id: req.params.idUser}})
      .then(usuario => {
        usuario.getOrders({where: {status: 'carrito'}})
        .then(orden => orden.addProducts({
          price: req.body.price,
          quantity: req.body.quantity,
          id: req.body.id
        }).then(orden => res.json(orden)))
      })
      .catch(next)
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

module.exports = user;
