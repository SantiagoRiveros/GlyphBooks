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
			 {title: { [Op.like]: `%${value}%` }},
			 {description: { [Op.like]: `%${value}%` }}
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

	

	Product.Create({...request})

})

server.put('/:id', (req, res, next) => {
	const { id } = req.params
	const request = req.body

	Product.findOne({where:{id}})
		.then(book => {
			for (const key in request) {
				if (!book.hasOwnProperty(key)) return res.sendStatus(400)
				book[key] = request[key]
			}
			return book.save()
		})
		.then(book => res.send(book))
		.catch(next);
})

server.delete('/:id', (req, res, next) => {
	const { id } = req.params

	Product.findOne({where:{id}})
		.then(book => {
			book.destroy()
		})
		.then(() => res.sendStatus(200))
})

module.exports = server;
