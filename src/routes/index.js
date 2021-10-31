
const { Router } = require('express');
const userRouter = require('./UserRouter');
const categoryRouter = require('./CategoryRouter');
const productRouter = require('./ProductRouter');
const discountRouter = require('./DiscountRouter');
const orderRouter = require('./OrderRouter');
const cartRouter = require('./CartRouter');


const router = Router();

router.use('/users', userRouter);
router.use('/categories', categoryRouter);
router.use('/products', productRouter);
router.use('/discounts', discountRouter);
router.use('/orders', orderRouter);
router.use('/cart', cartRouter);

module.exports = router;