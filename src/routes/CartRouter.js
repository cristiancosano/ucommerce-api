const { Router } = require('express');
const cartController = require('../controllers/CartController')
const checkToken = require('../middlewares/checkToken');
const { checkSchema } = require('express-validator');
const cartValidation = require('../common/formValidations').Cart
const validateParams = require('../middlewares/validateParams');
const router = Router();

router.get('/', checkToken, cartController.index);
router.get('/products', checkToken, cartController.getProducts);
router.post('/', checkToken, checkSchema(cartValidation.create), validateParams, cartController.create);
router.put('/', checkToken, checkSchema(cartValidation.update), validateParams, cartController.update);
router.delete('/', checkToken, cartController.deleteAll);
router.delete('/:productId', checkToken, cartController.delete);
module.exports = router;