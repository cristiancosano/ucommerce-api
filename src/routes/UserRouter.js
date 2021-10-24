const { Router } = require('express');
const userController = require('../controllers/UserController');
const checkToken = require('../middlewares/checkToken');

const router = Router();

router.get('/', checkToken, userController.index);
router.post('/', userController.create);
router.get('/auth', userController.checkPassword);
router.get('/:id', checkToken, userController.read);
router.put('/:id', checkToken, userController.update);
router.delete('/:id', checkToken, userController.delete);

module.exports = router;