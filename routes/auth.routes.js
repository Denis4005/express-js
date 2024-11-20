const Router = require('express')
const router = new Router()
const controller = require('../controller/auth.controller')
const { check } = require('express-validator')
const roleMiddlware = require('../middleware/role.middlware')

router.post(
  '/registration',
  [
    check('user', 'Имя пользователя должно быть больше 5 символов').isLength({
      min: 5,
    }),
    check('password', 'Пароль должен быть больше 8 символов').isLength({
      min: 8,
    }),
  ],
  controller.registration,
)
router.post('/login', controller.login)

module.exports = router
