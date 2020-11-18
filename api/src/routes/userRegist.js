const autenticate = require("express").Router();
const { Product, Category, User, Order } = require("../db.js");
const { Op } = require("sequelize");
const passport = require('passport')
const jwt = require('jsonwebtoken')




autenticate.post('/register', (req, res, next) => {
    const users = req.body;

    User.create({ ...users})
      .then(() => res.sendStatus(201))
      .catch(next);
});



autenticate.post('/login', (req, res, next) => {
    passport.authenticate('local', function(err, user, info) {
        if(err) return next(err);
        if(!user) {
            return res.sendStatus(401)
        } else {
            return res.json( {
                user,
                token: jwt.sign(user, "SECRET")
            })
        }
    })(req,res,next);
});

module.exports= autenticate;