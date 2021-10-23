const { Router } = require('express');
const productController = require('../controllers/OrderController')

const router = Router();

router.get('/', productController.index);
router.post('/:product', productController.create);
router.get('/:id', productController.read);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);

module.exports = router;