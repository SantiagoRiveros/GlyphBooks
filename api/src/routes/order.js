const order = require("express").Router();
const { Order, Product } = require("../db.js");

order.get("/", (req, res, next) => {
  Order.findAll({ include: Product })
    .then((ordenes) => res.json(ordenes))
    .catch(next);
});

order.get("/:id/order", (req, res, next) => {
  Order.findOne({ where: { id: req.params.id } })
    .then((orden) => res.json(orden))
    .catch(next);
});

order.get("/:id", (req, res, next) => {
  //modificar 'lineOrder' por 'LineOrder', en todos los archivos
  Order.findOne({ where: { id: req.params.id } })
    .then((orden) => orden.getlineOrders())
    .then((lineO) => res.json(lineO))
    .catch(next);
});

order.put("/:id", (req, res, next) => {
  Order.findOne({ where: { id: req.params.id } })
    .then((orden) => {
      for (var key in req.body) {
        if (orden[key] === undefined) return res.sendStatus(400);
        orden[key] = req.body[key];
      }
      orden.save();
      res.json(orden);
    })
    .catch(next);
});

module.exports = order;
