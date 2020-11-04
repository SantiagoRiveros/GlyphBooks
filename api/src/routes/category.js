const category = require('express').Router();
const { Category } = require('../db.js');
const { Product } = require('../db.js');
const { Op } = require('sequelize');

category.post('/category', (req, res , next) => {
    const request = req.body
    
    Category.create(request)
    .then((cat) => res.send(cat)) 
})


category.delete('category/:id', (req, res, next) => {
    const { id } = req.params

    Category.findOne({where: {id}})
    .then(cat => {
        cat.destroy()
    })
})

category.put('category/:id', (req, res, next) => {
    const { id } = req.params;

    Category.findOne({where: {id}})
    .then(cat => res.send(cat))
    .catch(next);    
})
