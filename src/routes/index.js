
const { Router } = require('express');
const userRouter = require('./UserRouter');
const categoryRouter = require('./CategoryRouter');

const router = Router();

router.use('/users', userRouter);
router.use('/categories', categoryRouter);

module.exports = router;