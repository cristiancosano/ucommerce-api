const { Router } = require('express');
const userController = require('../controllers/UserController')

const router = Router();

router.get('/', userController.index);
router.post('/', userController.create);
router.get('/:id', userController.read);
router.get('/:email&:password', userController.checkPassword);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;