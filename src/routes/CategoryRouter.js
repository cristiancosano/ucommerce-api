const { Router } = require('express');
const categoryController = require('../controllers/CategoryController')
const checkToken = require('../middlewares/checkToken');

const router = Router();

router.get('/', categoryController.index);
router.post('/', checkToken, categoryController.create);
router.get('/:id', categoryController.read);
router.put('/:id', checkToken, categoryController.update);
router.delete('/:id', checkToken, categoryController.delete);

module.exports = router;