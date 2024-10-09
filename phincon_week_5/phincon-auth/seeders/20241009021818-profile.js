"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("profiles", [
            {
                pr_us_id: 1,
                pr_gender: "male",
                pr_description: null,
                pr_address: null,
                pr_active: true,
                pr_created_on: new Date(),
                pr_created_by: 1,
                pr_updated_on: new Date(),
                pr_updated_by: 1,
            },
            {
                pr_us_id: 2,
                pr_gender: "male",
                pr_description: null,
                pr_address: null,
                pr_active: true,
                pr_created_on: new Date(),
                pr_created_by: 1,
                pr_updated_on: new Date(),
                pr_updated_by: 1,
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("profiles", null, {});
    },
};
