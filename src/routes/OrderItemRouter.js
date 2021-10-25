const { Router } = require('express');
const orderController = require('../controllers/OrderItemController')
const checkToken = require('../middlewares/checkToken');

const router = Router();

router.get('/', orderItemController.index);
router.post('/', checkToken, orderItemController.create);
router.get('/:id', checkToken, orderItemController.read);
router.put('/:id', checkToken, orderItemController.update);
router.delete('/:id', checkToken, orderItemController.delete);

module.exports = router;