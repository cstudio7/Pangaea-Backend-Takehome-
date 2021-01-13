/* eslint-disable no-unused-vars */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Subscribers', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            url: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            topic: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Subscribers');
    }
};
