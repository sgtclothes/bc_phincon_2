const jwt = require("jsonwebtoken");
const { User } = require("@/models");

const columns = {
    id: "us_id",
    email: "us_email",
    active: "us_active",
};

const generateVerificationToken = (id, email) => {
    const token = jwt.sign({ [columns.id]: id, [columns.email]: email }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
    return token;
};

const verifyEmail = async (req, res) => {
    const { token } = req.query;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("DECODED ID : ", decoded);
        await User.update({ [columns.active]: true }, { where: { [columns.id]: decoded[columns.id] } });
        return res.redirect(`${process.env.BASE_URL_FRONTEND}/verify-success`);
    } catch (error) {
        return res.redirect(`${process.env.BASE_URL_FRONTEND}/verify-failed`);
    }
};

module.exports = { generateVerificationToken, verifyEmail };
