const { Router } = require('express');
const userController = require('../controllers/UserController');
const checkToken = require('../middlewares/checkToken');
const { body, param, checkSchema } = require('express-validator');
const validateParams = require('../middlewares/validateParams');


const router = Router();



router.get('/', checkToken, userController.index);
router.post('/', userController.create);
router.get('/auth', userController.checkPassword);
router.get('/:id', checkToken, userController.read);

router.put(
    '/:id',
    checkToken,
    checkSchema({
        'id': {
            in: ['params'],
            errorMessage: 'Id must be an integer number',
            isInt: true,
            toInt: true
        },
        'email': {
            in: ['body'],
            errorMessage: 'Email must be contains a valid email',
            isEmail: true,
            normalizeEmail: true
        },
        'password': {
            in: ['body'],
            errorMessage: 'Password must be at least 6 characters',
            isLength: {
                options: {min: 6}
            },
        },
        'phone': {
            in: ['body'],
            errorMessage: 'Phone must be a valid phone number',
            isMobilePhone: true
        },
        'name': {
            in: ['body'],
            errorMessage: 'Name must be at least 3 ascii characters',
            isAscii: true,
            isLength: {
                options: {
                    min: 3
                }
            },
        }
    }),
    // param('id').isInt(),
    // body('email').isEmail(),
    // body('password').isLength({min: 6}),
    // body('phone').isMobilePhone(),
    // body('name').isAscii().isLength({min: 3}),
    validateParams,
    userController.update
);


router.delete('/:id', checkToken, userController.delete);

module.exports = router;