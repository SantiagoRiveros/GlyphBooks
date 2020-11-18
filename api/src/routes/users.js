const user = require("express").Router();
const { Product, Category, User, Order } = require("../db.js");
const { Op } = require("sequelize");

user.post("/", (req, res, next) => {
  const request = req.body;

  User.create({ ...request })
    .then((u) => res.send(u))
    .catch(next);
});

user.post("/:idUser/cart", (req, res, next) => {
  var usuario;
  var orden;
  User.findOne({ where: { id: req.params.idUser } })
    .then((u) => {
      usuario = u;
      return u.getOrders({ where: { status: "carrito" }, include: Product });
    })
    .then((orden) => {
      if (!orden.length) {
        return Order.create({ status: "carrito" }).then((orden) => {
          usuario.addOrder(orden);
          return orden;
        });
      }
      return orden[0];
    })
    .then((ord) => {
      orden = ord;
      const quantity = req.body.quantity ? req.body.quantity : 1;
      return ord.addProducts(req.body.id, {
        through: { price: req.body.price, quantity },
      });
    })
    .then((r) => res.send(r))
    .catch(next);
});

user.post("/:id/passwordReset", async (req, res, next) => {
  const userData = await User.findOne({ where: { id: req.params.id } });
  if (userData && userData.password) {
    const compare = userData.compare(req.body.password);
    if (compare) {
      userData.password = req.body.newPassword;
      await userData.save({ fields: ["password"] });
      return res.status(201).json({ message: "se cambio la contraseña" });
    } else {
      return res.status(404).json({ message: "la contraseña no es valida" });
    }
  }
  return res.status(404).json({ message: "Ocurrio un error" });
});

user.get("/:idUser/cart", (req, res, next) => {
  User.findOne({ where: { id: req.params.idUser } })
    .then((usuario) => {
      return usuario.getOrders({
        where: { status: "carrito" },
        include: Product,
      });
    })
    .then((orden) => res.send(orden))
    .catch(next);
});

user.get("/:id/orders", (req, res, next) => {
  User.findOne({ where: { id: req.params.id } })
    .then((usuario) => {
      usuario.getOrders();
    })
    .then((ordenes) => res.json(ordenes))
    .catch(next);
});

user.put("/:id", (req, res, next) => {
  const { id } = req.params;

  User.findOne({ where: { id } })
    .then((u) => res.send(u))
    .catch(next);
});

user.put("/:idUser/cart", (req, res, next) => {
  var sinStock = [];
  User.findOne({ where: { id: req.params.idUser } })
    .then((usuario) =>
      usuario.getOrders({ where: { id: req.body.orderId }, include: Product })
    )
    .then(([orden]) => {
      orden.products.forEach((p) => {
        if (p.lineOrder.quantity > p.stock) {
          sinStock.push(p);
        }
      });
      if (sinStock.length) {
        return res.status(409).send(sinStock);
      }
      orden.status = req.body.status;
      orden.save();
      res.status(200).json(orden);
    })
    .catch(next);
});

user.get("/", (req, res, next) => {
  User.findAll()
    .then((user) => {
      res.send(user);
    })
    .catch(next);
});

user.get("/:id", (req, res, next) => {
  User.findByPk(req.params.id)
    .then((user) => res.send(user))
    .catch(next);
});

user.get("/login", (req, res, next) => {
  User.findOne({
    where: { email: req.query.email, password: req.query.contraseña },
  })
    .then((user) => {
      res.send(user);
    })
    .catch(next);
});

user.delete("/:id", (req, res, next) => {
  User.findOne({ where: { id: req.params.id } })
    .then((user) => user.destroy())
    .then(() => res.sendStatus(200))
    .catch(next);
});

user.delete("/:idUser/cart", (req, res, next) => {
  User.findOne({ where: { id: req.params.idUser } })
    .then((usuario) => usuario.getOrders({ where: { status: "carrito" } }))
    .then(([orden]) => orden.destroy())
    .then(() => res.sendStatus(204))
    .catch(next);
});

module.exports = user;
