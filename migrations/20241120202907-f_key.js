'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.dropTable('Role')
    // await queryInterface.changeColumn('Person', 'roles', {
    //   allowNull: false,
    //   type: Sequelize.DataTypes.STRING,
    // })

    await queryInterface.addConstraint('Person', {
      fields: ['roles'],
      type: 'foreign key',
      name: 'Role1',
      references: { table: 'Role', field: 'value' },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    })
  },

  async down(queryInterface, Sequelize) {
    // await queryInterface.createTable('Role', {
    //   id: {
    //     primaryKey: true,
    //     autoIncrement: true,
    //     allowNull: false,
    //     type: Sequelize.DataTypes.INTEGER,
    //   },
    //   value: {
    //     allowNull: false,
    //     type: Sequelize.DataTypes.STRING,
    //     unique: true,
    //   },
    // })
    await queryInterface.removeConstraint('Person', 'Role1')
  },
}
