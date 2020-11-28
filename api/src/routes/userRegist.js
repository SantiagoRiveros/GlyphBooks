const autenticate = require("express").Router();
const { Product, Category, User, Order } = require("../db.js");
const { Op } = require("sequelize");
const passport = require('passport')
const jwt = require('jsonwebtoken')

const SECRET = process.env.AUTH_SECRET || "SECRET"


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
        token: jwt.sign(user , SECRET)
      })
    }
  })(req,res,next);
});

autenticate.get('/login/auth/google', passport.authenticate('google', { scope: ['profile', "email"], session:false}));

autenticate.get('/login/auth/google/callback',(req, res, next) => {
  passport.authorize("google", function (err, user) {
    if (err) return next(err);
    if (!user) {
      res.redirect(`${process.env.CALLBACK_URL_BASE || 'http://localhost:3001'}/sign-in?error=401`);
    } else {
      res.redirect(`${process.env.CALLBACK_URL_BASE || 'http://localhost:3001'}/sign-in?token=${token}`);
    }
  })(req, res, next);
});

autenticate.get('/login/auth/facebook',passport.authenticate("facebook"));

autenticate.get('/login/auth/facebook/callback',(req, res, next) => {
  passport.authorize("facebook", function (err, user) {
    if (err) return next(err);
    if (!user) {
      res.redirect(`${process.env.CALLBACK_URL_BASE || 'http://localhost:3001'}/sign-in?error=401`);
    } else {
      res.redirect(`${process.env.CALLBACK_URL_BASE || 'http://localhost:3001'}/sign-in?token=${token}`);
    }
  })(req, res, next);
});

autenticate.get("/me", (req, res, next) => {
  if(req.user) {
    User.findByPk(req.user.id)
      .then(user => res.status(200).json(user))
      .catch(next)
  } else res.sendStatus(401);
})

module.exports = autenticate;

