const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("@/controllers/auth");
const { bodyValidation, checkDuplicates } = require("@/controllers/validations/auth");
const { verifyEmail } = require("@/controllers/token");
const { User, Profile, Role } = require("@/models");

router.post("/register", bodyValidation, checkDuplicates, registerUser);
router.post("/login", loginUser);
router.get("/verify-email", verifyEmail);
router.get("/get-users", async (req, res) => {
    const user = await User.findAll({
        attributes: ["us_id", "us_fullname", "us_username", "us_email", "us_phone_number"],
        include: [
            {
                model: Profile,
                as: "profile",
                attributes: ["pr_description", "pr_gender", "pr_address"],
            },
            {
                model: Role,
                as: "roles",
                attributes: ['rl_code'],
                through: { attributes: [] },
            },
        ],
    });
    res.send({
        user: user,
    });
});

module.exports = router;
