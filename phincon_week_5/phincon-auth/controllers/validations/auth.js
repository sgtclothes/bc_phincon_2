const Joi = require("joi");
const { User } = require("@/models");

const bodyValidation = (req, res, next) => {
    const schema = Joi.object({
        fullname: Joi.string().min(5).required(),
        username: Joi.string().min(5).max(10).required(),
        email: Joi.string().email().required(),
        password: Joi.string()
            .min(8)
            .max(30)
            .pattern(/(?=.*[a-z])/)
            .pattern(/(?=.*[A-Z])/)
            .pattern(/(?=.*[0-9])/)
            .pattern(/(?=.*[!@#$%^&*])/)
            .required(),
        phoneNumber: Joi.string().max(15).required(),
    });
    const validationError = schema.validate(req.body).error;
    if (validationError) {
        return res.status(400).send({
            status: "failed",
            code: 400,
            message: validationError.details,
        });
    }
    next();
};

const checkDuplicates = async (req, res, next) => {
    try {
        const { email, username, phoneNumber } = req.body;
        const userEmail = await User.findOne({ where: { us_email: email } });
        if (userEmail) {
            return res.status(400).send({
                status: "failed",
                code: 400,
                message: "Email already exists",
            });
        }
        const userUsername = await User.findOne({ where: { us_username: username } });
        if (userUsername) {
            return res.status(400).send({
                status: "failed",
                code: 400,
                message: "Username already exists",
            });
        }
        const userPhoneNumber = await User.findOne({ where: { us_phone_number: phoneNumber } });
        if (userPhoneNumber) {
            return res.status(400).send({
                status: "failed",
                code: 400,
                message: "Phone Number already exists",
            });
        }
        next();
    } catch (error) {
        return res.status(400).send({
            status: "failed",
            code: 400,
            message: "Failed to retrieve user",
        });
    }
};

module.exports = { bodyValidation, checkDuplicates };
