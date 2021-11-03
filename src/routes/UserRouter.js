const { Router } = require('express');
const userController = require('../controllers/UserController');
const checkToken = require('../middlewares/checkToken');
const { checkSchema } = require('express-validator');
const validateParams = require('../middlewares/validateParams');

const userValidation = require('../common/formValidations').User


const router = Router();

router.post('/auth', checkSchema(userValidation.auth), validateParams, userController.checkPassword);
router.get('/', checkToken, userController.index);
router.post('/', checkSchema(userValidation.create), validateParams, userController.create);
router.get('/:id', checkToken, checkSchema(userValidation.read), validateParams, userController.read);
router.put('/:id', checkToken, checkSchema(userValidation.update), validateParams, userController.update);
router.delete('/:id', checkToken, checkSchema(userValidation.delete), validateParams, userController.delete);

module.exports = router;