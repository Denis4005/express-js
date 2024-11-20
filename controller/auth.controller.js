const { validationResult } = require('express-validator')
const db = require('../connect')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { secret } = require('../config')

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles,
  }
  return jwt.sign(payload, secret, { expiresIn: '24h' })
}

class AuthController {
  async registration(req, res) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: 'Ошибка при ргистрации', errors })
      }
      {
        const { user, password } = req.body
        const pretender = await db.Person.findOne({ where: { user: user } })
        if (pretender) {
          return res.status(400).json('Пользователь уже существует')
        }
        const hashPswd = bcrypt.hashSync(password, 7)
        await db.Person.create({
          user: user,
          password: hashPswd,
        })
        res.json('Пользователь создан')
      }
    } catch (err) {
      console.log(err)
      res.status(400).json({ message: 'registration error' })
    }
  }

  async login(req, res) {
    try {
      const { user, password } = req.body
      const pretender = await db.Person.findOne({ where: { user: user } })
      if (!pretender) {
        return res.status(400).json(`Пользователь ${user} не зарегистрирован`)
      }
      const validPswd = bcrypt.compareSync(password, pretender.password)
      if (!validPswd) {
        return res.status(400).json({ message: 'Неверный пароль' })
      }
      const token = generateAccessToken(pretender.id, pretender.roles)
      return res.json({ token: token })
    } catch (err) {
      console.log(err)
      res.status(400).json({ message: 'login error' })
    }
  }
}
module.exports = new AuthController()
