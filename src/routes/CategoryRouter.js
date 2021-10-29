const { Router } = require('express');
const categoryController = require('../controllers/CategoryController')
const checkToken = require('../middlewares/checkToken');
const { checkSchema } = require('express-validator');
const CategoryValidation = require('../common/formValidations').Category
const validateParams = require('../middlewares/validateParams');
const router = Router();

router.get('/', categoryController.index);
router.post('/', checkToken,checkSchema(CategoryValidation.create), validateParams, categoryController.create);
router.get('/:id', checkSchema(CategoryValidation.read), validateParams, categoryController.read);
router.put('/:id', checkToken, checkSchema(CategoryValidation.update), validateParams, categoryController.update);
router.delete('/:id', checkToken, checkSchema(CategoryValidation.delete), validateParams, categoryController.delete);

module.exports = router;