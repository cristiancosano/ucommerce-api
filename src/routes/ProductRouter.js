const { Router } = require('express');
const productController = require('../controllers/ProductController');
const checkToken = require('../middlewares/checkToken');

const router = Router();

router.get('/', productController.index);
router.post('/', checkToken, productController.create);
router.get('/:id', productController.read);
router.put('/:id', checkToken, productController.update);
router.delete('/:id', checkToken, productController.delete);

module.exports = router;