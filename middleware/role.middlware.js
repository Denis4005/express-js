const jwt = require('jsonwebtoken')
const { secret } = require('../config')

module.exports = function (roles) {
  return function (req, res, next) {
    if (req.method === 'OPTIONS') {
      next()
    }
    try {
      const token = req.headers.authorization.split(' ')[1]
      if (!token) {
        return res.status(403).json({ message: 'Пользователь не авторизован1' })
      }
      const { roles: userRoles } = jwt.verify(token, secret)
      let hasRole = false
      if (roles === userRoles) {
        hasRole = true
      }

      if (!hasRole) {
        return res.status(403).json({ message: 'У вас нет доступа' })
      }
      next()
    } catch (err) {
      console.log(err)
      return res.status(403).json({ message: 'Пользователь не авторизован3' })
    }
  }
}
