'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Post', 'user_id', {
      allowNull: false,
      type: Sequelize.DataTypes.INTEGER,
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Post', 'user_id', {
      allowNull: false,
      type: Sequelize.DataTypes.INTEGER,
    })
  },
}
