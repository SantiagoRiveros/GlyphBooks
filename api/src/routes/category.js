const category = require('express').Router();
const { Category } = require('../db.js');
const { Product } = require('../db.js');
const { Op } = require('sequelize');

category.post('/category', (req, res , next) => {
    const request = req.body
    Category.create(request)
    .then((cat) => res.send(cat)) 
})

