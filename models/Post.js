const { Sequelize, DataTypes } = require('sequelize')
const Person = require('./Person')

module.exports = (sequelize) => {
  const Post = sequelize.define(
    'Post',
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: Person,
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    },
    { tableName: 'Post', timestamps: false },
  )

  return Post
}
