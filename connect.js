const { Sequelize } = require('sequelize')

const PersonModel = require('./models/Person')
const PostModel = require('./models/Post')
const RoleModel = require('./models/Role')

const sequelize = new Sequelize(
  'postgres://postgres:777@localhost:5432/node_pg',
)

const Person = PersonModel(sequelize)
const Post = PostModel(sequelize)
const Role = RoleModel(sequelize)

const db = {
  sequelize,
  Person,
  Post,
  Role,
}

module.exports = db
