const { Router } = require('express');
const categoryController = require('../controllers/CategoryController')

const router = Router();

router.get('/', categoryController.index);
router.post('/', categoryController.create);
router.get('/:id', categoryController.read);
router.put('/:id', categoryController.update);
router.delete('/:id', categoryController.delete);

module.exports = router;