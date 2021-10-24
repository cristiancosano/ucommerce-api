const { Router } = require('express');
const orderController = require('../controllers/OrderController')
const checkToken = require('../middlewares/checkToken');

const router = Router();

router.get('/', orderController.index);
router.post('/', checkToken, orderController.create);
router.get('/:id', checkToken, orderController.read);
router.put('/:id', checkToken, orderController.update);
router.delete('/:id', checkToken, orderController.delete);

module.exports = router;