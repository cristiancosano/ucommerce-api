const { Router } = require('express');
const discountController = require('../controllers/OrderController')

const router = Router();

router.get('/', discountController.index);
router.post('/:discount', discountController.create);
router.get('/:id', discountController.read);
router.put('/:id', discountController.update);
router.delete('/:id', discountController.delete);

module.exports = router;