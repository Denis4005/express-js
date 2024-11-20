const { Sequelize, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Person = sequelize.define(
    'Person',
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      user: {
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          max: 100,
          min: 5,
        },
        defaultValue: Sequelize.fn('random'),
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        validate: {
          notEmpty: true,
          min: 8,
        },
        defaultValue: 'empty',
        type: DataTypes.STRING,
      },
      roles: {
        allowNull: false,
        validate: {
          notEmpty: true,
          min: 1,
        },
        defaultValue: 'user',
        type: DataTypes.STRING,
      },
    },
    { tableName: 'Person', timestamps: false },
  )

  return Person
}
