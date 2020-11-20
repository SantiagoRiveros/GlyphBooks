const user = require("express").Router();
const { Product, Category, User, Order } = require("../db.js");
const { Op } = require("sequelize");
var api_key = "b5c113301e92d7905ae874c95a2a0d3b-2af183ba-def9cce4";
var domain = "sandboxe9e3450cb5b04c92a05e5501df8811fe.mailgun.org";
var mailgun = require("mailgun-js")({ apiKey: api_key, domain: domain });

user.post("/", (req, res, next) => {
  const request = req.body;

  User.create({ ...request })
    .then((u) => res.send(u))
    .catch(next);
});

user.post("/forgot"),
  async (req, res, next) => {
    const userData = await User.findOne({
      where: { email: req.body.email },
    });
    if (userData) {
      res.status(200).json({ id: userData.id });
    } else {
      res
        .status(404)
        .json({ message: "No hay ningun usuario asociado a ese email" });
    }
  };

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
  if (userData) {
    userData.password = req.body.password;
    await userData.save({ fields: ["password"] });
    return res.status(201).json({ message: "se cambio la contraseña" });
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

user.get("/:idUser/orders", (req, res, next) => {
  User.findOne({ where: { id: req.params.idUser } })
    .then((usuario) => {
      return usuario.getOrders({ include: Product });
    })
    .then((orders) => res.send(orders));
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
  if (req.user) {
    if (req.user.isAdmin) {
      User.findAll()
        .then((user) => {
          res.send(user);
        })
        .catch(next);
    } else res.sendStatus(401);
  } else res.sendStatus(401);
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
