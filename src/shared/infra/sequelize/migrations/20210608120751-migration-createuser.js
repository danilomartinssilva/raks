const sequelize = require('sequelize');
const SequelizeDefault = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: SequelizeDefault.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: SequelizeDefault.DataTypes.STRING,
      },
      dob: {
        type: SequelizeDefault.DataTypes.DATE,
      },
      address: {
        type: SequelizeDefault.DataTypes.TEXT,
      },
      description: {
        type: SequelizeDefault.DataTypes.TEXT,
      },
      createdAt: {
        type: SequelizeDefault.DATE,
        defaultValue: sequelize.fn('NOW')
      },
      updatedAt: {
        type: SequelizeDefault.DATE,
        defaultValue: sequelize.fn('NOW')
      },
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('users');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
