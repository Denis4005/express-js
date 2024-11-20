'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Role', [
      { id: 1, value: 'admin' },
      { id: 2, value: 'user' },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Role', null)
  },
}
