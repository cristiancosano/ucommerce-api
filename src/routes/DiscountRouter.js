const { Router } = require('express');
const discountController = require('../controllers/DiscountController')
const checkToken = require('../middlewares/checkToken');
const { checkSchema } = require('express-validator');
const DiscountValidation = require('../common/formValidations').Discount
const validateParams = require('../middlewares/validateParams');

const router = Router();

router.get('/', checkToken,   discountController.index);
router.post('/', checkToken, checkSchema(DiscountValidation.create), validateParams, discountController.create);
router.get('/:id', checkToken,checkSchema(DiscountValidation.read), validateParams, discountController.read);
router.put('/:id', checkToken, checkSchema(DiscountValidation.update), validateParams, discountController.update);
router.delete('/:id', checkToken, checkSchema(DiscountValidation.delete), validateParams, discountController.delete);

module.exports = router;