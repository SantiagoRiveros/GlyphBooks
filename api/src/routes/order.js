const order = require('express').Router();
const { Order } = require('../db.js');

order.get('/', (req, res, next) => {
  Order.findAll({where: {status: req.query.status}})
    .then(ordenes => res.json(ordenes))
    .catch(next)
});

order.get('/id', (req, res, next) => {
  Order.findOne({where: {id: req.params.id}})
    .then(orden => res.json(orden))
    .catch(next)
})

order.put('/:id', (req, res, next) => {
  Order.findOne({where: {id: req.params.id}})
    .then(orden => {
      for (var key in req.body) {
        if (orden[key] === undefined) return res.sendStatus(400)
        orden[key] = req.body[key]
      }
      orden.save()
      res.json(orden)
    }).catch(next)
})

module.exports = order;
