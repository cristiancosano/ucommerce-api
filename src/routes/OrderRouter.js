const { Router } = require('express');
const orderController = require('../controllers/OrderController')

const router = Router();

router.get('/', orderController.index);
router.post('/:order', orderController.create);
router.get('/:id', orderController.read);
router.put('/:id', orderController.update);
router.delete('/:id', orderController.delete);

module.exports = router;