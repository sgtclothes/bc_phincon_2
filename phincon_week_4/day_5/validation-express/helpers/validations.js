const Joi = require("joi");

const validateUsers = (req) => {
    const schema = Joi.object({
        name: Joi.string().min(5).max(20).required(),
        phoneNumber: Joi.string().required(),
        email: Joi.string().required(),
        token: [Joi.string(), Joi.number()],
    });
    const validationError = schema.validate(req.body).error;
    return validationError;
};

module.exports = { validateUsers };
