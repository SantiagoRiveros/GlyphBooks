const review = require("express").Router(),
{ Product, Category, User , Review} = require("../db.js")
const { Op } = require("sequelize");


review.post("/product/:id/review", (req, res,next) => {
    const request = req.body;

    Review.create({ ...request })
      .then(() => res.sendStatus(204))
      .catch(next);
})

review.get("/product/:id/review/", (req, res, next) => {
    Review.findAll().then((reviews) => {
        res.send(reviews);
      });
})
