"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("roles", [
            {
                rl_name: "System Administrator",
                rl_code: "SYSADMIN",
                rl_active: true,
                rl_created_on: new Date(),
                rl_created_by: 1,
                rl_updated_on: new Date(),
                rl_updated_by: 1,
            },
            {
                rl_name: "Administrator",
                rl_code: "ADMIN",
                rl_active: true,
                rl_created_on: new Date(),
                rl_created_by: 1,
                rl_updated_on: new Date(),
                rl_updated_by: 1,
            },
            {
                rl_name: "User",
                rl_code: "USR",
                rl_active: true,
                rl_created_on: new Date(),
                rl_created_by: 1,
                rl_updated_on: new Date(),
                rl_updated_by: 1,
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("roles", null, {});
    },
};
