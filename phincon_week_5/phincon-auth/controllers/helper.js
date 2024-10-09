const axios = require("axios");

const getClientIP = async () => {
    try {
        let response = await axios("https://api.ipify.org?format=json");
        let json = await response.data;
        return json;
    } catch (error) {
        console.log(error);
        return {
            message: "Failed to get Client IP",
            status: "failed",
            detail: error.message,
        };
    }
};

module.exports = { getClientIP };
