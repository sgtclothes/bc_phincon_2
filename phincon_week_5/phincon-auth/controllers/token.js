const jwt = require("jsonwebtoken");
const { User } = require("@/models");

const columns = {
    id: "us_id",
    email: "us_email",
    active: "us_active",
};

const generateToken = (id, email, name, expiresIn) => {
    const token = jwt.sign({ [columns.id]: id, [columns.email]: email, name: name }, process.env.JWT_SECRET, {
        expiresIn: expiresIn,
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

module.exports = { generateToken, verifyEmail };
