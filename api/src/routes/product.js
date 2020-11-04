const server = require('express').Router();
const { Product, Category } = require('../db.js');
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

server.post('/', (req, res, next) => {
	const request = req.body
	Product.create({...request})
		.then(book => {
			res.send(book)
		})
		.catch(err => {
			res.send(err)
		})
})

server.post('/:idProducto/category/:idCategoria', (req, res) => {
	Product.findOne({where: {id: req.params.idProducto}})
		.then(producto => {
			producto.addCategories(req.params.idCategoria)
			.then(r => res.json(r))
		})
		.catch(err => res.json(err))
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

server.delete('/:idProducto/category/:idCategoria', (req, res) => {
	Product.findOne({where: {id: req.params.idProducto}})
		.then(producto => {
			producto.removeCategories(req.params.idCategoria)
			.then(r => res.json(r))
		})
		.catch(err => res.json(err))
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
