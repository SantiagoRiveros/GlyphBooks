const order = require("express").Router();
const { Order, Product } = require("../db.js");

order.get("/", (req, res, next) => {
  if (req.user?.isAdmin) {
    Order.findAll({ include: Product })
      .then((ordenes) => res.json(ordenes))
      .catch(next);
  } else res.sendStatus(401);
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

order.put("/:orderId/lineorder", (req, res, next) => {
  const { quantity, id } = req.body;
  const { orderId } = req.params;
  Order.findByPk(orderId, { include: Product })
    .then(({ products }) => {
      const lineOrder = products.find((p) => p.lineOrder.id === id);
      lineOrder.quantity = quantity;
      lineOrder.save();
      res.send(lineOrder);
    })
    .catch(next);
});

order.delete("/:orderId/lineorder/:productId", (req, res, next) => {
  const { orderId, productId } = req.params;
  Order.findByPk(orderId, { include: Product })
    .then(({ products }) => {
      const { lineOrder } = products.find((p) => p.id === Number(productId));
      return lineOrder.destroy();
    })
    .then((data) => res.send(data))
    .catch(next);
});

module.exports = order;
