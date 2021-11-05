const { Router } = require('express');
const productController = require('../controllers/ProductController');
const checkToken = require('../middlewares/checkToken');
const { checkSchema } = require('express-validator');
const productValidation = require('../common/formValidations').Product
const validateParams = require('../middlewares/validateParams');


const router = Router();

router.get('/', productController.index);
router.post('/', checkToken, checkSchema(productValidation.create), validateParams, productController.create);
router.post('/search', checkSchema(productValidation.search), validateParams, productController.search);
router.get('/:id', checkSchema(productValidation.read), validateParams, productController.read);
router.put('/:id', checkToken, checkSchema(productValidation.update), validateParams, productController.update);
router.delete('/:id', checkToken, checkSchema(productValidation.delete), validateParams, productController.delete);

module.exports = router;