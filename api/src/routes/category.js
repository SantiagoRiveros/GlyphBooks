const category = require('express').Router();
const { Category } = require('../db.js');
const { Product } = require('../db.js');
const { Op } = require('sequelize');

category.post('/', (req, res , next) => {
    const request = req.body

    Category.create(request)
      .then((cat) => res.send(cat))
})

category.get('/:id', (req, res) => {
    Category.findOne({where: {id: req.params.id}})
      .then(categoria => res.json({category: categoria}))
      .catch(err => res.json({error: err}))
})

category.delete('/:id', (req, res, next) => {
    const { id } = req.params

    Category.findOne({where: {id}})
      .then(cat => {
          cat.destroy()
      })
})

category.put('/:id', (req, res, next) => {
    const { id } = req.params;

    Category.findOne({where: {id}})
      .then(cat => res.send(cat))
      .catch(next);
})

module.exports = category;
