const { Router } = require('express');
// import all routers;
const productRouter = require('./product.js');

const categoryRouter = require('./category.js');
const orderRouter = require('./order.js');
const userRouter = require('./users.js');
const cors = require('cors')


const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use(cors())

router.use('/products', productRouter);
router.use('/category', categoryRouter);
router.use('/order', orderRouter);
router.use('/users', userRouter);

module.exports = router;
