const { Router } = require('express');
const userController = require('../controllers/UserController');
const checkToken = require('../middlewares/checkToken');
const { body, param } = require('express-validator');
const validateParams = require('../middlewares/validateParams');


const router = Router();



router.get('/', checkToken, userController.index);
router.post('/', userController.create);
router.get('/auth', userController.checkPassword);
router.get('/:id', checkToken, userController.read);

router.put(
    '/:id',
    checkToken,
    param('id').isInt(),
    body('email').isEmail(),
    body('password').isLength({min: 6}),
    body('phone').isMobilePhone(),
    body('name').isAscii().isLength({min: 3}),
    validateParams,
    userController.update
);


router.delete('/:id', checkToken, userController.delete);

module.exports = router;