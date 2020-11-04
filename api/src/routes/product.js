const server = require('express').Router();
const { Product } = require('../db.js');
const { Op } = require('sequelize');

server.get('/', (req, res, next) => {
	Product.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(next);
});

server.get('/search', (req, res, next) => {
	const { value } = req.query

	Product.findAll({
		where: {
			[Op.or]: [
				{title: { [Op.substring]: value }},
				{description: { [Op.substring]: value }}
			]
		}
	})
	.then(books => {
		res.send(books)
	})
	.catch(next);
})

server.get('/search/:id', (req, res) => {
	Product.findOne({where: {id: req.params.id}})
		.then(book => {
			if(!book) {
				res.json({book: 'No encontrado'})
			} else {
				res.json({book: book})
			}
		})
		.catch(err => res.json({err}))
})

server.post('/', (req, res, next) => {
	const request = req.body
  
	Product.create({...request})
		.then(book => {
			res.send(book)
		})
})

server.put('/:id', (req, res, next) => {
	const { id } = req.params
	const request = req.body

	Product.findOne({where:{id}})
		.then(book => {
			for (const key in request) {
				if (book[key] === undefined) return res.sendStatus(400)
				book[key] = request[key]
			}
			book.save()
			res.send(book)
		})
		.catch(next);
})

server.delete('/:id', (req, res, next) => {
	const { id } = req.params

	Product.findOne({where:{id}})
		.then(book => {
			book.destroy()
		})
		.then(() => res.sendStatus(200))
		.catch(next)
})

module.exports = server;
