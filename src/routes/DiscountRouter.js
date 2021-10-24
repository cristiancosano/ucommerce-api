const { Router } = require('express');
const discountController = require('../controllers/DiscountController')
const checkToken = require('../middlewares/checkToken');

const router = Router();

router.get('/', checkToken, discountController.index);
router.post('/', checkToken, discountController.create);
router.get('/:id', checkToken, discountController.read);
router.put('/:id', checkToken, discountController.update);
router.delete('/:id', checkToken, discountController.delete);

module.exports = router;