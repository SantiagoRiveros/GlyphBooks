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

autenticate.get('/login/auth/google', passport.authenticate('google', { scope: ['profile'] }));

autenticate.get('/login/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    return res.redirect('http://localhost:3000/'); //
  });

autenticate.get('/login/auth/facebook',passport.authenticate('facebook'));

autenticate.get('/login/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    return res.redirect('http://localhost:3000/');
  });

autenticate.get("/me", (req, res, next) => {
  if(req.user) {
    User.findByPk(req.user.id)
      .then(user => res.status(200).json(user))
      .catch(next)
  } else res.sendStatus(401);
})

module.exports = autenticate;