const { validateUsers } = require("../helpers/validations");

const middlewareUsers = (req, res, next) => {
    const validationError = validateUsers(req);
    if (validationError) {
        res.status(400).send(validationError.details);
    }
    next();
};

module.exports = { middlewareUsers };
