const Router = require('express')
const router = new Router()
const userController = require('../controller/user.controller')
const authMiddlware = require('../middleware/auth.middlware')
const roleMiddlware = require('../middleware/role.middlware')

router.get('/users', roleMiddlware('admin'), userController.getUser)
router.get('/user/:id', roleMiddlware('admin'), userController.getOneUser)
router.put('/user', authMiddlware, userController.updateNameUser)
router.patch('/user', authMiddlware, userController.updatePasswordUser)
router.delete('/user/:id', roleMiddlware('admin'), userController.deleteUser)

module.exports = router
