'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Person', 'name', {
      allowNull: false,
      type: Sequelize.DataTypes.STRING,
    })
    await queryInterface.removeColumn('Person', 'surname', {
      allowNull: false,
      type: Sequelize.DataTypes.STRING,
    })
    await queryInterface.addColumn('Person', 'user', {
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        max: 100,
        min: 5,
      },
      defaultValue: Sequelize.fn('random'),
      type: Sequelize.DataTypes.STRING,
    })
    await queryInterface.addColumn('Person', 'password', {
      allowNull: false,
      validate: {
        notEmpty: true,
        min: 8,
      },
      defaultValue: 'empty',
      type: Sequelize.DataTypes.STRING,
    })
    await queryInterface.addColumn('Person', 'roles', {
      allowNull: false,
      validate: {
        notEmpty: true,
        min: 1,
      },
      defaultValue: [],
      type: Sequelize.DataTypes.ARRAY(Sequelize.DataTypes.STRING),
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Person', 'user', {
      allowNull: false,
      type: Sequelize.DataTypes.STRING,
    })
    await queryInterface.removeColumn('Person', 'password', {
      allowNull: false,
      type: Sequelize.DataTypes.STRING,
    })
    await queryInterface.removeColumn('Person', 'roles', {
      allowNull: false,
      type: Sequelize.DataTypes.ARRAY(Sequelize.DataTypes.STRING),
    })
    await queryInterface.addColumn('Person', 'name', {
      allowNull: false,
      type: Sequelize.DataTypes.STRING,
      defaultValue: 'empty',
    })
    await queryInterface.addColumn('Person', 'surname', {
      allowNull: false,
      type: Sequelize.DataTypes.STRING,
      defaultValue: 'empty',
    })
  },
}
