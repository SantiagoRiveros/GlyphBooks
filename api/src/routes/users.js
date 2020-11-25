const user = require("express").Router();
const { Product, Category, User, Order } = require("../db.js");
const { Op } = require("sequelize");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

user.post("/", (req, res, next) => {
  const request = req.body;

  User.create({ ...request })
    .then((u) => res.send(u))
    .catch(next);
});

user.post("/:idUser/cart", (req, res, next) => {
  var usuario;
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
    .then((orden) => {
      const quantity = req.body.quantity ? req.body.quantity : 1;
      console.log(req.body);
      return orden.addProducts(req.body.id, {
        through: { price: req.body.price, quantity: quantity },
      });
    })
    .then((r) => res.send(r))
    .catch(next);
});

user.post("/forgot", async (req, res, next) => {
  const userData = await User.findOne({
    where: { email: req.body.email },
  });

  crypto.randomBytes(20, function (err, buf) {
    const token = buf.toString("hex");
    return token;
  });

  if (!userData) {
    return res.redirect("/forgot");
  } else {
    var smtpTransport = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "glyphbooksecommerce@gmail.com",
        pass: "HenryEcommerce123",
      },
    });
    var mailOptions = {
      to: userData.email,
      from: "glyphbooksecommerce@gmail.com",
      subject: "Reseteo de contraseña",
      text:
        `Entra en este link para cambiar la contraseña ` +
        `https:/localhost:3001/password/`,
    };
    smtpTransport.sendMail(mailOptions, function (err) {
      if (err) {
        console.log("Ocurrio un error", err);
      } else {
        console.log("Email enviado");
      }
    });
  }
});

// user.get("/reset/:token", async function (req, res) {
//   const userData = User.findOne(
//     {
//       where: { resetPasswordToken: req.params.token },
//       resetPasswordExpires: { $gt: Date.now() },
//     },
//     function (err, user) {
//       if (!userData) {
//         // req.flash("error", "El link es invalido o ya expiro.");
//         return res.redirect("/forgot");
//       }
//       res.render("reset", { token: req.params.token });
//     }
//   );
// });

user.post("/:id/passwordReset", async (req, res, next) => {
  const userData = await User.findOne({ where: { id: req.params.id } });
  if (userData) {
    userData.password = req.body.password;
    await userData.save({ fields: ["password"] });
    return res.status(201).json({ message: "se cambio la contraseña" });
  }
  return res.status(404).json({ message: "Ocurrio un error" });
});

// user.post("/reset/:token", function (req, res) {
//   const userData = User.findOne(
//     {
//       where: { resetPasswordToken: req.params.token },
//       resetPasswordExpires: { $gt: Date.now() },
//     },
//     async function (err, user) {
//       if (!userData) {
//         // req.flash("error", "El link es invalido o ya expiro.");
//         return res.redirect("back");
//       }
//       if (req.body.password === req.body.password2) {
//         userData.password = req.body.password;
//         await userData.save({ fields: ["password"] });
//         return res.status(201).json({ message: "se cambio la contraseña" });
//       } else {
//         // req.flash("error", "Las contraseñas no son iguales");
//         return res.redirect("back");
//       }
//     }
//   );

//   var smtpTransport = nodemailer.createTransport({
//     service: "Gmail",
//     auth: {
//       user: "glyphbooksecommerce@gmail.com",
//       pass: "HenryEcommerce123",
//     },
//   });
//   var mailOptions = {
//     to: user.email,
//     from: "glyphbooksecommerce@gmail.com",
//     subject: "Tu contraseña ha sido cambiada correctamente",
//     text:
//       "Hola,\n\n" +
//       "este correo es para confirmar que la contraseña de " +
//       user.email +
//       " ha sido cambiada correctamente.\n",
//   };
//   smtpTransport.sendMail(mailOptions, function (err) {
//     // req.flash(
//     //   "Exito",
//     //   "Exito, tu contraseña ha sido cambiada correctamente"
//     // );
//   });
// });

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
  if (req.user) {
    if (req.user.isAdmin || Number(req.user.id) === Number(req.params.idUser)) {
      User.findOne({ where: { id: req.params.idUser } })
        .then((usuario) => {
          return usuario.getOrders({ include: Product });
        })
        .then((orders) => res.send(orders));
    } else res.sendStatus(401);
  } else res.sendStatus(401);
});

user.put("/:id", (req, res, next) => {
  const { id } = req.params;

  const request = req.body;
  if (req.user) {
    if (req.user.isAdmin) {
      User.findOne({ where: { id } })
        .then((user) => {
          for (const key in request) {
            user[key] = request[key];
          }
          user.save();
          res.send(user);
        })
        .catch(next);
    } else res.sendStatus(401);
  } else res.sendStatus(401);
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
  const page = req.query.page;
  const limit = req.query.limit || 12;
  const offset = page ? (page - 1) * limit : null;
  if (req.user) {
    if (req.user.isAdmin) {
      User.findAndCountAll({ offset, limit })
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
  if (req.user) {
    if (req.user.isAdmin || Number(req.user.id) === Number(req.params.id)) {
      User.findOne({ where: { id: req.params.id } })
        .then((user) => user.destroy())
        .then(() => res.sendStatus(200))
        .catch(next);
    } else res.sendStatus(401);
  } else res.sendStatus(401);
});

user.delete("/:idUser/cart", (req, res, next) => {
  User.findOne({ where: { id: req.params.idUser } })
    .then((usuario) => usuario.getOrders({ where: { status: "carrito" } }))
    .then(([orden]) => orden.destroy())
    .then(() => res.sendStatus(204))
    .catch(next);
});

module.exports = user;
