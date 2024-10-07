"use strict";

const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("users", [
            {
                us_fullname: "Sigit Sasongko",
                us_username: "sargeant",
                us_password: await bcrypt.hashSync("1234567890", 10),
                us_email: "siko.spade31@gmail.com",
                us_phone_number: "085725363777",
                us_active: true,
                us_created_on: new Date(),
                us_created_by: 1,
                us_updated_on: new Date(),
                us_updated_by: 1,
            },
            {
                us_fullname: "Phincon Academy",
                us_username: "phinconacademy",
                us_password: await bcrypt.hashSync("1234567890", 10),
                us_email: "phinconacademy@gmail.com",
                us_phone_number: "081234567890",
                us_active: true,
                us_created_on: new Date(),
                us_created_by: 1,
                us_updated_on: new Date(),
                us_updated_by: 1,
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("users", null, {});
    },
};
