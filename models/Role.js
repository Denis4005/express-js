const { Sequelize, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Role = sequelize.define(
    'Role',
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      value: {
        allowNull: false,
        type: DataTypes.STRING,
        unicue: true,
      },
    },
    { tableName: 'Role', timestamps: false },
  )

  return Role
}
